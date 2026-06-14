import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '120px 0 80px',
        background: 'var(--bg-surface)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--accent-cyan)',
            marginBottom: '20px',
          }}>
            // Let's Talk
          </p>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(38px, 7vw, 72px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            marginBottom: '20px',
          }}>
            Let's Build
            <br />
            <span style={{
              background: 'linear-gradient(135deg, var(--accent-amber), var(--accent-cyan))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Something
            </span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '17px',
            color: 'var(--text-secondary)',
            maxWidth: '480px',
            margin: '0 auto 48px',
            lineHeight: 1.7,
          }}>
            Available for new client engagements —
            Raleigh-Durham and remote.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '56px',
          }}>
            <a
              href="https://calendly.com/cyclona"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '15px 36px',
                background: 'var(--accent-amber)',
                color: 'var(--bg-base)',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: 'var(--radius)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#ffc140';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(245,166,35,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--accent-amber)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book a 30-Minute Call
            </a>

            <a
              href="mailto:drew@cyclona.io"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 36px',
                background: 'transparent',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: 'var(--radius)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                e.currentTarget.style.color = 'var(--accent-cyan)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,212,255,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              drew@cyclona.io
            </a>
          </div>

          {/* Social links */}
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginBottom: '64px',
          }}>
            {[
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/andrewhogan',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                ),
              },
              {
                label: 'GitHub',
                href: 'https://github.com/piphog',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                ),
              },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)';
                  e.currentTarget.style.color = 'var(--accent-cyan)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer bar */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
          }}>
            © 2025 CYCLONA LLC — RALEIGH-DURHAM, NC
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            letterSpacing: '0.05em',
          }}>
            Built by Drew Hogan
          </span>
        </div>
      </div>
    </section>
  );
}
