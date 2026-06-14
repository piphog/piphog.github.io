import React, { useState } from 'react';
import { motion } from 'framer-motion';

const patterns = [
  {
    id: 'heartbeat',
    tag: '01',
    title: 'Heartbeat Keepalive',
    problem: 'Azure\'s load balancer enforces a hard 230s idle timeout. LLM clustering on 250K compounds runs longer than that.',
    solution: 'Server commits a 200 response immediately, then streams a single whitespace byte every 10s. JSON tolerates whitespace between tokens — the client does res.text() → JSON.parse(text.trim()) and checks data.error on every 2xx.',
    accent: 'var(--accent-cyan)',
    log: [
      { t: '0.0s', m: 'HTTP/1.1 200 OK — Content-Type: application/json', c: 'var(--accent-green)' },
      { t: '10s', m: 'stream: " "  (keepalive byte)', c: 'var(--text-muted)' },
      { t: '20s', m: 'stream: " "  (keepalive byte)', c: 'var(--text-muted)' },
      { t: '...', m: 'LB idle timer reset on every byte', c: 'var(--text-muted)' },
      { t: '184s', m: '{"status":"ok","clusters":248,...}', c: 'var(--accent-cyan)' },
    ],
  },
  {
    id: 'orphan',
    tag: '02',
    title: 'Cluster Validation + Orphan Recovery',
    problem: 'Claude occasionally hallucinates compound IDs that don\'t exist in the input — left unchecked, downstream reports cite phantom data.',
    solution: 'The model\'s output is treated as a draft. A server-side pass walks every cluster, drops invented IDs, and reassigns orphaned real compounds to existing clusters by Tanimoto nearest-neighbor — so the LLM clusters freely while the final output stays internally consistent.',
    accent: 'var(--accent-amber)',
    log: [
      { t: 'draft', m: 'claude → 250 named scaffold clusters', c: 'var(--text-secondary)' },
      { t: 'check', m: '7 invented compound IDs found', c: 'var(--accent-amber)' },
      { t: 'drop', m: '7 hallucinated IDs removed', c: 'var(--text-muted)' },
      { t: 'reassign', m: '12 orphaned reals → nearest cluster (Tanimoto)', c: 'var(--accent-green)' },
      { t: 'done', m: 'output internally consistent', c: 'var(--accent-cyan)' },
    ],
  },
  {
    id: 'schema',
    tag: '03',
    title: 'In-Memory Schema Patching',
    problem: 'A third-party report template hard-codes 4 service-line slots and 4 client-type buckets. The client needs 7 and 9 — forking the template means permanent merge debt.',
    solution: 'The template\'s own applyUpdate() parser runs inside a Node vm sandbox against a stubbed window/document. Before it runs, the DATA structure is deep-cloned and patched — slot-3 rows cloned 3x, client-type array extended from 4 to 9 — then stamped back as the seed. The parser sees 7/9 natively. The static template is never modified.',
    accent: 'var(--accent-cyan)',
    log: [
      { t: 'load', m: 'parent template (1MB, 4 slots / 4 buckets)', c: 'var(--text-secondary)' },
      { t: 'clone', m: 'deep-clone DATA in memory', c: 'var(--text-muted)' },
      { t: 'patch', m: 'extend → 7 slots / 9 buckets', c: 'var(--accent-amber)' },
      { t: 'vm.run', m: 'parent applyUpdate(markdown) — unmodified', c: 'var(--text-secondary)' },
      { t: 'stamp', m: 'window.__MOR_OVERRIDE_DATA__ → fresh report', c: 'var(--accent-cyan)' },
    ],
  },
  {
    id: 'dedup',
    tag: '04',
    title: 'Hash-Based Dedup',
    problem: 'Re-running an expensive analysis on an identical upload wastes minutes of compute and risks duplicate rows.',
    solution: 'SHA-256 of the upload bytes and SHA-256 of the populated output are both stored on the saved row. A partial unique index on (upload_hash, output_hash) WHERE deleted_at IS NULL lets ON CONFLICT ... DO UPDATE re-attach to a soft-deleted row safely — a repeat upload is detected before any server work begins.',
    accent: 'var(--accent-green)',
    log: [
      { t: 'upload', m: 'client: crypto.subtle.digest(SHA-256)', c: 'var(--text-secondary)' },
      { t: 'check', m: 'SELECT ... WHERE workbook_sha256 = $1', c: 'var(--text-muted)' },
      { t: 'hit', m: 'match found — prior run #2291', c: 'var(--accent-green)' },
      { t: 'skip', m: '0ms compute — return cached result', c: 'var(--accent-cyan)' },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }),
};

export default function EngineeringPatterns() {
  const [expanded, setExpanded] = useState('heartbeat');

  return (
    <section
      id="engineering"
      style={{
        padding: '100px 0',
        background: 'var(--bg-surface)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* dot texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(245,166,35,0.035) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--accent-amber)',
            marginBottom: '12px',
          }}>
            {'// Under the Hood'}
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
            maxWidth: '700px',
          }}>
            Engineering Patterns That Hold Up in Production
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            maxWidth: '680px',
            marginBottom: '56px',
          }}>
            Four real problems from the platform above, and the non-obvious fixes
            that shipped. This is the kind of thing that separates a working demo
            from a system that survives contact with production data.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {patterns.map((p, i) => {
            const isOpen = expanded === p.id;
            return (
              <motion.div
                key={p.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                style={{
                  background: 'var(--bg-card)',
                  border: `1px solid ${isOpen ? 'rgba(255,255,255,0.14)' : 'var(--border)'}`,
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  transition: 'border-color 0.25s',
                }}
              >
                {/* Header / toggle */}
                <button
                  onClick={() => setExpanded(isOpen ? null : p.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    padding: '24px 28px',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', minWidth: 0 }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      color: p.accent,
                      letterSpacing: '0.1em',
                      flexShrink: 0,
                    }}>
                      {p.tag}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(16px, 2.2vw, 20px)',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      color: 'var(--text-primary)',
                    }}>
                      {p.title}
                    </span>
                  </div>
                  <span style={{
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '16px',
                    color: 'var(--text-muted)',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.25s',
                  }}>
                    +
                  </span>
                </button>

                {/* Body */}
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      className="pattern-body"
                      style={{
                        padding: '0 28px 32px',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '32px',
                      }}
                    >
                      <div>
                        <p style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: 'var(--text-muted)',
                          marginBottom: '8px',
                        }}>
                          The Problem
                        </p>
                        <p style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.75,
                          marginBottom: '20px',
                        }}>
                          {p.problem}
                        </p>
                        <p style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: p.accent,
                          marginBottom: '8px',
                        }}>
                          The Fix
                        </p>
                        <p style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.75,
                        }}>
                          {p.solution}
                        </p>
                      </div>

                      {/* Terminal log */}
                      <div style={{
                        background: '#070b16',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)',
                        padding: '16px 18px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        lineHeight: 2,
                        alignSelf: 'start',
                      }}>
                        {p.log.map((line, idx) => (
                          <div key={idx} style={{ display: 'flex', gap: '12px' }}>
                            <span style={{ color: 'var(--text-muted)', flexShrink: 0, minWidth: '46px' }}>
                              {line.t}
                            </span>
                            <span style={{ color: line.c, wordBreak: 'break-word' }}>
                              {line.m}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .pattern-body {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
