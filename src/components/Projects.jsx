import React from 'react';
import { motion } from 'framer-motion';

/**
 * "Other things built" — a single, expanded spotlight card.
 * Reframed as production work shipped to a small team of traders.
 */
export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: '140px 0',
        background: 'var(--bg-base)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px', maxWidth: '820px' }}
        >
          <p className="section-eyebrow">
            <span style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
            Other recent work
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(36px, 5.5vw, 72px)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: '20px',
            }}
          >
            Production work{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              beyond the main engagement.
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
            An independent platform built for a small team of operators —
            running live, in production, with the same engineering patterns
            that drive every client engagement.
          </p>
        </motion.div>

        {/* Featured spotlight card — two-column layout inside */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            transition: 'background var(--transition), border-color var(--transition)',
          }}
          whileHover={{
            backgroundColor: 'var(--bg-paper)',
            borderColor: 'var(--border-strong)',
          }}
        >
          <div
            className="project-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              gap: '0',
            }}
          >
            {/* Left: description */}
            <div
              style={{
                padding: '44px 44px 44px',
                borderRight: '1px solid var(--border)',
              }}
              className="project-left"
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '20px',
                  fontWeight: 500,
                }}
              >
                Live algorithmic trading
              </p>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 3.6vw, 44px)',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                  marginBottom: '24px',
                }}
              >
                Prediction-market algorithmic{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                  trading platform.
                </em>
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '18px',
                }}
              >
                A production trading platform built for a small group of
                prediction-market traders. A FastAPI backend (~8,700 lines)
                runs multiple concurrent strategies — momentum, mean-reversion,
                volatility-aware position sizing, scheduled-event arbitrage —
                across short-duration binary and scalar markets in any asset
                class the team chooses to trade.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '18px',
                }}
              >
                Risk management runs as an independent state machine with
                per-strategy stop-loss, exposure caps, latency-aware cancel
                logic, and circuit breakers that pause the system on anomaly.
                Discord webhooks deliver real-time fill, P&amp;L, and warning
                alerts so traders can intervene from anywhere without staring
                at a screen.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                A single-page HTML control panel surfaces live scanner status,
                open positions, trade analytics, and a hot-reload config editor
                — purpose-built so the non-engineers on the team can tune
                parameters and review performance without touching code.
              </p>
            </div>

            {/* Right: stats + stack */}
            <div
              style={{
                padding: '44px 40px 44px',
                background: 'var(--bg-soft)',
                display: 'flex',
                flexDirection: 'column',
                gap: '36px',
              }}
              className="project-right"
            >
              {/* Capability highlights */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '14px',
                    fontWeight: 500,
                  }}
                >
                  Capabilities
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Multi-strategy concurrent execution',
                    'Independent risk state machine',
                    'Discord real-time ops alerts',
                    'Hot-reload config editor',
                    'Backtesting + paper-trade modes',
                    'Per-user analytics & P&L attribution',
                  ].map((c) => (
                    <li
                      key={c}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: 'var(--accent)',
                          flexShrink: 0,
                          marginTop: '8px',
                        }}
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack */}
              <div style={{ marginTop: 'auto' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '14px',
                    fontWeight: 500,
                  }}
                >
                  Stack
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {[
                    'FastAPI',
                    'Python async',
                    'RSA-PSS auth',
                    'Discord webhooks',
                    'Single-page HTML',
                    'SQLite + WAL',
                    'systemd service',
                  ].map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--text-secondary)',
                        padding: '4px 9px',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-grid { grid-template-columns: 1fr !important; }
          .project-left {
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
            padding: 32px 28px !important;
          }
          .project-right { padding: 32px 28px !important; }
        }
      `}</style>
    </section>
  );
}
