import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    tag: 'Live trading system',
    title: 'Kalshi algorithmic trading platform',
    desc:
      'A two-asset live trading system on Kalshi 15-minute binary options. FastAPI backend (~8,700 lines) scanning four crypto markets every ten seconds, automated position management, a stop-loss state machine, and Discord alerts. Single-file HTML dashboard for live scanner status, trade analytics, and config.',
    stack: ['FastAPI', 'Python', 'RSA-PSS auth', 'Discord webhooks', 'HTML dashboard'],
  },
  {
    tag: 'AI SaaS platform',
    title: 'HiredIQ.ai — talent assessment',
    desc:
      'AI-powered candidate evaluation platform. Deployed on DigitalOcean with GPT-4o as the evaluation engine, a React frontend, and a queue-based job runner for batch assessments.',
    stack: ['GPT-4o', 'React', 'DigitalOcean', 'Queue workers'],
  },
  {
    tag: 'Agentic workflow',
    title: 'Automated job-search pipeline',
    desc:
      'A multi-step agent built on the Claude Agent SDK that scans listings, ranks fits, and queues applications for human-in-the-loop approval via Discord — with Playwright handling the ATS automation on the back end.',
    stack: ['Claude Agent SDK', 'Playwright', 'Discord HIL'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

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
          style={{ marginBottom: '64px', maxWidth: '780px' }}
        >
          <p className="section-eyebrow">
            <span style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
            Other things built
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
            Personal systems —{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              shipped solo, in production.
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
            Side projects that put the same patterns through their paces before
            they ever touch a client engagement.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              style={{
                background: 'var(--bg-elevated)',
                padding: '32px 30px 30px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'background var(--transition)',
                minHeight: '340px',
              }}
              whileHover={{ backgroundColor: 'var(--bg-paper)' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '16px',
                  fontWeight: 500,
                }}
              >
                {p.tag}
              </p>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: '-0.015em',
                  color: 'var(--ink)',
                  marginBottom: '16px',
                }}
              >
                {p.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '22px',
                  flex: 1,
                }}
              >
                {p.desc}
              </p>

              <div
                style={{
                  paddingTop: '18px',
                  borderTop: '1px solid var(--border)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                }}
              >
                {p.stack.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      padding: '3px 8px',
                      background: 'transparent',
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
