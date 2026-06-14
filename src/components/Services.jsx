import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
      </svg>
    ),
    title: 'Scientific Data Pipelines',
    desc: 'Compound screening, hit triage, assay data aggregation — automated end to end.',
    accent: 'var(--accent-cyan)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
        <path d="M3.05 11a9 9 0 0 1 .95-3.5M3.05 13a9 9 0 0 0 .95 3.5"/>
        <path d="M20.95 11a9 9 0 0 0-.95-3.5M20.95 13a9 9 0 0 1-.95 3.5"/>
      </svg>
    ),
    title: 'BD & Outreach Automation',
    desc: 'AI-powered contact discovery, draft routing, and CRM pipeline tools.',
    accent: 'var(--accent-amber)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 8h2M7 11h2M11 8h6M11 11h6"/>
      </svg>
    ),
    title: 'Internal AI Dashboards',
    desc: 'Bloomberg-style operational interfaces with Claude API integration, SSO, and real-time data.',
    accent: 'var(--accent-cyan)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Financial & Reporting Automation',
    desc: 'Automated financial summaries, milestone tracking, and export-ready reporting.',
    accent: 'var(--accent-amber)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }),
};

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '100px 0',
        background: 'var(--bg-surface)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle dot texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(0,212,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
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
            color: 'var(--accent-cyan)',
            marginBottom: '12px',
          }}>
            {'// Services'}
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}>
            What We Build
          </h2>
          <div style={{
            width: '48px',
            height: '3px',
            background: 'var(--accent-amber)',
            marginBottom: '64px',
            borderRadius: '2px',
          }} />
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
                cursor: 'default',
              }}
              whileHover={{
                y: -4,
                borderColor: s.accent === 'var(--accent-cyan)'
                  ? 'rgba(0,212,255,0.3)'
                  : 'rgba(245,166,35,0.3)',
                boxShadow: s.accent === 'var(--accent-cyan)'
                  ? '0 12px 40px rgba(0,212,255,0.08)'
                  : '0 12px 40px rgba(245,166,35,0.08)',
              }}
            >
              {/* Icon */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '52px',
                height: '52px',
                background: s.accent === 'var(--accent-cyan)'
                  ? 'rgba(0,212,255,0.08)'
                  : 'rgba(245,166,35,0.08)',
                borderRadius: '10px',
                marginBottom: '20px',
                color: s.accent,
              }}>
                {s.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '17px',
                fontWeight: 700,
                marginBottom: '10px',
                letterSpacing: '-0.01em',
                color: 'var(--text-primary)',
              }}>
                {s.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
              }}>
                {s.desc}
              </p>

              {/* Bottom accent line */}
              <div style={{
                marginTop: '24px',
                height: '2px',
                width: '32px',
                background: s.accent,
                borderRadius: '2px',
                opacity: 0.6,
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
