import React, { useState } from 'react';
import { motion } from 'framer-motion';

const patterns = [
  {
    id: 'heartbeat',
    tag: '01',
    title: 'Heartbeat Keepalive Over HTTP',
    problem:
      'Azure load balancers (and most cloud LBs) enforce a hard idle timeout — typically around 230 seconds. Any LLM call, batch job, or report generation that runs longer just dies.',
    solution:
      'The server commits a 200 response immediately, then streams a single whitespace byte every 10s. JSON tolerates whitespace between tokens — clients call res.text() then JSON.parse(text.trim()) and check data.error on every 2xx. Trade-off: errors come back as 200 with an error field instead of a non-2xx status. Used in four places across production.',
    log: [
      { t: '0.0s', m: 'HTTP/1.1 200 OK — Content-Type: application/json' },
      { t: '10s', m: 'stream: " "  (keepalive byte)' },
      { t: '20s', m: 'stream: " "  (keepalive byte)' },
      { t: '...', m: 'LB idle timer reset on every byte' },
      { t: '184s', m: '{"status":"ok","result":{...}}' },
    ],
  },
  {
    id: 'validation',
    tag: '02',
    title: 'LLM Output Validation + Recovery',
    problem:
      "LLMs occasionally hallucinate IDs, names, or fields that don't exist in the input — left unchecked, downstream reports cite phantom data, and the user discovers it weeks later.",
    solution:
      "The model's output is treated as a draft. A server-side validation pass walks every field, drops invented IDs, and reassigns orphaned real records to their nearest valid bucket — by nearest neighbor, fuzzy match, or business rule. The LLM gets to think freely, the system stays internally consistent.",
    log: [
      { t: 'draft', m: 'model → 250 categorized groups' },
      { t: 'check', m: '7 hallucinated IDs found in output' },
      { t: 'drop', m: '7 invented IDs removed' },
      { t: 'reassign', m: '12 orphans → nearest valid group' },
      { t: 'done', m: 'output internally consistent' },
    ],
  },
  {
    id: 'schema',
    tag: '03',
    title: 'In-Memory Patching of Vendored Code',
    problem:
      "A third-party template hard-codes 4 slots. The client needs 7. Forking the vendor's code means permanent merge debt; waiting on the vendor means missing a quarterly deliverable.",
    solution:
      "The template's own parser runs inside a Node vm sandbox against a stubbed window/document. Before it runs, the DATA structure is deep-cloned and patched — slot-3 rows cloned three times, buckets extended from 4 to 9 — then stamped back as the seed. The parser sees 7 / 9 natively. When the vendor ships their own fix, the patch code deletes in a single block.",
    log: [
      { t: 'load', m: 'vendor template (1MB, 4 slots)' },
      { t: 'clone', m: 'deep-clone DATA in memory' },
      { t: 'patch', m: 'extend → 7 slots / 9 buckets' },
      { t: 'vm.run', m: 'vendor parser — unmodified' },
      { t: 'stamp', m: 'window.__OVERRIDE_DATA__ → fresh output' },
    ],
  },
  {
    id: 'dedup',
    tag: '04',
    title: 'Hash-Based Dedup Across Upload & Output',
    problem:
      'Re-running an expensive analysis on an identical upload wastes minutes of compute and risks duplicate rows in the audit log.',
    solution:
      'SHA-256 of the upload bytes and SHA-256 of the populated output are both stored on the saved row. A partial unique index on (upload_hash, output_hash) WHERE deleted_at IS NULL lets ON CONFLICT ... DO UPDATE re-attach to a soft-deleted row safely — a repeat upload is detected before any server work begins.',
    log: [
      { t: 'upload', m: 'client: crypto.subtle.digest(SHA-256)' },
      { t: 'check', m: 'SELECT ... WHERE workbook_sha256 = $1' },
      { t: 'hit', m: 'match found — prior run #2291' },
      { t: 'skip', m: '0ms compute — return cached result' },
    ],
  },
  {
    id: 'persist',
    tag: '05',
    title: 'Non-Blocking Persistence',
    problem:
      "If the database hiccups during a 3-minute AI workload, the user loses their result — even though the AI succeeded. That's the wrong failure mode.",
    solution:
      'Every successful operation that persists to the database does so AFTER returning the result to the user, wrapped in try/catch with a logged warning on failure. A DB outage degrades to "you can use this, but it did not save" — never "you lost it." The save runs in the background; the user is already moving.',
    log: [
      { t: 'compute', m: 'AI job: 184s, returns to client' },
      { t: 'flush', m: 'res.end() — user has result' },
      { t: 'async', m: 'INSERT INTO runs (...) — background' },
      { t: 'warn', m: 'DB outage logged, user unaffected' },
    ],
  },
  {
    id: 'csp',
    tag: '06',
    title: 'Strict CSP + Same-Origin Vendors',
    problem:
      'Production frontends that load third-party scripts from CDNs inherit the security posture of every vendor in the chain. One supply-chain compromise downstream and your users are exposed.',
    solution:
      "Strict Content-Security-Policy: script-src self only. No inline scripts anywhere. Vendor libraries (D3, Plotly, SheetJS) served from same-origin /vendor/ paths and pinned to a version. Smaller attack surface, simpler audit story, no surprise breakage when a CDN updates.",
    log: [
      { t: 'csp', m: "Content-Security-Policy: script-src 'self'" },
      { t: 'pin', m: '/vendor/plotly-2.35.0.min.js  (hash-pinned)' },
      { t: 'deny', m: 'inline <script> blocks — never used' },
      { t: 'audit', m: '0 third-party origins to review' },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function EngineeringPatterns() {
  const [expanded, setExpanded] = useState('heartbeat');

  return (
    <section
      id="engineering"
      style={{
        padding: '140px 0',
        background: 'var(--bg-soft)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '72px', maxWidth: '780px' }}
        >
          <p className="section-eyebrow">
            <span style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
            Under the hood
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(36px, 5.5vw, 72px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: '24px',
            }}
          >
            Patterns that hold up{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              in production.
            </em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            Six real problems and the non-obvious fixes that shipped. Reusable
            across industries — what separates a working demo from a system
            that survives contact with real users and real data.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                  background: isOpen ? 'var(--bg-paper)' : 'var(--bg-elevated)',
                  border: '1px solid ' + (isOpen ? 'var(--border-strong)' : 'var(--border)'),
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  transition: 'border-color 0.25s, background 0.25s',
                }}
              >
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '24px', minWidth: 0 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: 'var(--accent)',
                        letterSpacing: '0.1em',
                        flexShrink: 0,
                      }}
                    >
                      {p.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(20px, 2.4vw, 26px)',
                        fontWeight: 400,
                        letterSpacing: '-0.01em',
                        color: 'var(--ink)',
                        lineHeight: 1.1,
                      }}
                    >
                      {p.title}
                    </span>
                  </div>
                  <span
                    style={{
                      flexShrink: 0,
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: '1px solid var(--border-strong)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-body)',
                      fontSize: '18px',
                      color: 'var(--text-secondary)',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.3s',
                    }}
                  >
                    +
                  </span>
                </button>

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
                        gap: '40px',
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10px',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'var(--text-muted)',
                            marginBottom: '10px',
                          }}
                        >
                          The Problem
                        </p>
                        <p
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '15px',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                            marginBottom: '24px',
                          }}
                        >
                          {p.problem}
                        </p>
                        <p
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10px',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'var(--accent)',
                            marginBottom: '10px',
                          }}
                        >
                          The Fix
                        </p>
                        <p
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '15px',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                          }}
                        >
                          {p.solution}
                        </p>
                      </div>

                      <div
                        style={{
                          background: 'var(--ink)',
                          border: '1px solid var(--ink)',
                          borderRadius: 'var(--radius)',
                          padding: '20px 22px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '12px',
                          lineHeight: 2,
                          alignSelf: 'start',
                        }}
                      >
                        {p.log.map((line, idx) => (
                          <div key={idx} style={{ display: 'flex', gap: '14px' }}>
                            <span style={{ color: 'rgba(244, 237, 224, 0.45)', flexShrink: 0, minWidth: '52px' }}>
                              {line.t}
                            </span>
                            <span style={{ color: 'rgba(244, 237, 224, 0.92)', wordBreak: 'break-word' }}>
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
          .pattern-body { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
