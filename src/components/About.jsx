import React from 'react';
import { motion } from 'framer-motion';

const stackGroups = [
  {
    label: 'AI / LLM',
    color: 'var(--accent-cyan)',
    items: ['Claude API', 'GPT-4o', 'Agent SDK', 'Prompt Engineering'],
  },
  {
    label: 'Backend',
    color: 'var(--accent-amber)',
    items: ['Node.js', 'Express', 'FastAPI', 'Python', 'PostgreSQL'],
  },
  {
    label: 'Cloud / Infra',
    color: 'var(--accent-cyan)',
    items: ['Azure', 'DigitalOcean', 'Microsoft Entra ID', 'GitHub Actions'],
  },
  {
    label: 'Cheminformatics',
    color: 'var(--accent-amber)',
    items: ['RDKit', 'Morgan Fingerprints', 'Tanimoto Similarity'],
  },
  {
    label: 'Frontend',
    color: 'var(--accent-cyan)',
    items: ['React', 'Vite', 'D3.js', 'HTML / CSS'],
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '100px 0',
        background: 'var(--bg-base)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        right: '-100px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(245,166,35,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--accent-cyan)',
            marginBottom: '12px',
          }}>// About</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 4vw, 40px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}>
            The Builder
          </h2>
          <div style={{
            width: '48px',
            height: '3px',
            background: 'var(--accent-cyan)',
            borderRadius: '2px',
          }} />
        </motion.div>

        {/* Two-column */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
        className="about-grid"
        >
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            {/* Name badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 16px',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              marginBottom: '28px',
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-amber), var(--accent-cyan))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: 800,
                color: 'var(--bg-base)',
              }}>DH</div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '14px',
                  fontWeight: 700,
                }}>Drew Hogan</div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                }}>Founder, Cyclona LLC</div>
              </div>
            </div>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '20px',
            }}>
              I'm Drew Hogan, founder of Cyclona LLC. Self-taught developer based in
              Raleigh-Durham, NC. I spent years building sophisticated personal systems —
              live trading infrastructure, AI agents, full-stack platforms — before
              transitioning into consulting.
            </p>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '20px',
            }}>
              A biotech CRO doing mass-spec drug discovery found me through one of those
              personal projects and brought me on to build their internal AI platform.
              That's how I work: I build things that actually run in production, and the
              work speaks for itself.
            </p>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--text-primary)',
              lineHeight: 1.8,
              borderLeft: '3px solid var(--accent-amber)',
              paddingLeft: '20px',
            }}>
              I'm currently taking on new clients in biotech, life sciences, and
              adjacent industries where data-intensive workflows need intelligent
              automation.
            </p>
          </motion.div>

          {/* Right: Tech stack */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '24px',
            }}>
              TECH STACK
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {stackGroups.map((group) => (
                <div
                  key={group.label}
                  style={{
                    padding: '16px 20px',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    borderLeft: `3px solid ${group.color}`,
                  }}
                >
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: group.color,
                    marginBottom: '10px',
                  }}>
                    {group.label}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {group.items.map(item => (
                      <span
                        key={item}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '13px',
                          color: 'var(--text-secondary)',
                          padding: '2px 8px',
                          background: 'rgba(255,255,255,0.04)',
                          borderRadius: '3px',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
