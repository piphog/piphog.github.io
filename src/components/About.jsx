import React from 'react';
import { motion } from 'framer-motion';

const principles = [
  {
    n: '01',
    label: 'Production over demo',
    body:
      'Every engagement ends with a real system in the hands of real users. No abandoned proofs of concept, no eternal "almost there."',
  },
  {
    n: '02',
    label: 'Plain-language first',
    body:
      "You shouldn't need a CS degree to understand what your software does. The same dashboard reads cleanly to your CEO and your engineering team.",
  },
  {
    n: '03',
    label: 'Your data, your stack',
    body:
      'I work inside your cloud, your identity provider, and your data warehouse. Nothing leaks to a third-party SaaS unless you ask for it.',
  },
  {
    n: '04',
    label: 'Use the AI you want',
    body:
      'Anthropic, OpenAI, Google, open-weights, or a mix — wired into your existing systems with the same patterns that hold up in production today.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '140px 0',
        background: 'var(--bg-soft)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container" style={{ position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '96px',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow" style={{ marginBottom: '24px' }}>
              <span style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
              About
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(40px, 5.5vw, 72px)',
                lineHeight: 0.98,
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
                marginBottom: '32px',
              }}
            >
              One builder,{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                end-to-end.
              </em>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '17px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}
            >
              I'm Andrew Hogan — founder of{' '}
              <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Cyclona LLC</span>,
              a one-person studio in Raleigh-Durham, NC. Production-focused,
              and obsessed with the kind of internal software that makes a
              team's whole week easier.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '17px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              I currently lead the build of an enterprise AI operations
              platform for an East-coast contract research organization,
              shipping new modules to ~250 staff across the US and Europe.
              I'm taking on a small number of additional engagements in
              parallel.
            </p>

            <div
              style={{
                padding: '20px 24px',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                borderLeft: '3px solid var(--accent)',
                borderRadius: '6px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '8px',
                  fontWeight: 500,
                }}
              >
                Currently available for
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: 'var(--ink)',
                  lineHeight: 1.55,
                }}
              >
                Internal dashboards, AI document/workflow automation, custom
                AI agents, and enterprise cloud applications — for teams of
                any size, in any industry where someone is doing too much by
                hand.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p
              className="section-eyebrow"
              style={{ marginBottom: '28px', color: 'var(--text-muted)' }}
            >
              <span style={{ width: '24px', height: '1px', background: 'var(--text-muted)' }} />
              How we work
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1px',
                background: 'var(--border)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
              }}
              className="principles-grid"
            >
              {principles.map((p) => (
                <div
                  key={p.n}
                  style={{
                    background: 'var(--bg-elevated)',
                    padding: '28px 26px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--accent)',
                      letterSpacing: '0.15em',
                      marginBottom: '14px',
                    }}
                  >
                    {p.n}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '22px',
                      fontWeight: 400,
                      lineHeight: 1.15,
                      letterSpacing: '-0.015em',
                      color: 'var(--ink)',
                      marginBottom: '10px',
                    }}
                  >
                    {p.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
        @media (max-width: 520px) {
          .principles-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
