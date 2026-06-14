import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    tag: 'PERSONAL PROJECT // Live Trading System',
    title: 'Kalshi Algorithmic Trading System',
    stats: ['86.7% win rate', '986+ paper trades', 'Live since May 2025'],
    stack: ['FastAPI', 'Python', 'RSA-PSS API', 'HTML Dashboard'],
    desc: 'A two-asset live trading system for Kalshi 15-minute crypto binary options. FastAPI backend (~8,700 lines) scanning BTC, ETH, SOL, and XRP every 10 seconds. Automated position management, stop-loss state machine, and Discord alerts. Single-file HTML dashboard with live scanner status, trade analytics, and config.',
    accent: 'var(--accent-amber)',
  },
  {
    tag: 'PERSONAL PROJECT // AI SaaS Platform',
    title: 'HiredIQ.ai',
    stats: [],
    stack: ['GPT-4o', 'DigitalOcean', 'React'],
    desc: 'AI-powered talent assessment platform. Deployed on DigitalOcean with GPT-4o as the evaluation engine.',
    accent: 'var(--accent-cyan)',
  },
  {
    tag: 'PERSONAL PROJECT // AI Agent',
    title: 'Automated Job Search Pipeline',
    stats: [],
    stack: ['Claude Agent SDK', 'Playwright', 'Discord'],
    desc: 'Automated job search pipeline using Claude\'s Agent SDK. Discord-based human-in-the-loop review with Playwright ATS automation.',
    accent: 'var(--accent-amber)',
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

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: '100px 0',
        background: 'var(--bg-surface)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header */}
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
            // Other Projects
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 4vw, 40px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}>
            Personal Systems
          </h2>
          <div style={{
            width: '48px',
            height: '3px',
            background: 'var(--accent-amber)',
            marginBottom: '56px',
            borderRadius: '2px',
          }} />
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.25s',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{
                y: -4,
                borderColor: p.accent === 'var(--accent-amber)'
                  ? 'rgba(245,166,35,0.3)'
                  : 'rgba(0,212,255,0.3)',
                boxShadow: p.accent === 'var(--accent-amber)'
                  ? '0 12px 40px rgba(245,166,35,0.07)'
                  : '0 12px 40px rgba(0,212,255,0.07)',
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: p.accent,
                opacity: 0.5,
              }} />

              {/* Tag */}
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.15em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}>
                {p.tag}
              </p>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '19px',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                marginBottom: '14px',
                color: 'var(--text-primary)',
              }}>
                {p.title}
              </h3>

              {/* Stats */}
              {p.stats.length > 0 && (
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginBottom: '14px',
                }}>
                  {p.stats.map(s => (
                    <span
                      key={s}
                      style={{
                        padding: '3px 10px',
                        background: 'rgba(0,230,118,0.08)',
                        border: '1px solid rgba(0,230,118,0.2)',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: 'var(--accent-green)',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '20px',
                flex: 1,
              }}>
                {p.desc}
              </p>

              {/* Stack tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {p.stack.map(t => (
                  <span
                    key={t}
                    style={{
                      display: 'inline-block',
                      padding: '3px 10px',
                      background: p.accent === 'var(--accent-amber)'
                        ? 'rgba(245,166,35,0.07)'
                        : 'rgba(0,212,255,0.07)',
                      border: `1px solid ${p.accent === 'var(--accent-amber)'
                        ? 'rgba(245,166,35,0.2)'
                        : 'rgba(0,212,255,0.2)'}`,
                      borderRadius: '4px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: p.accent,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
