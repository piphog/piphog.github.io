import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '160px 0 60px',
        background: 'var(--bg-base)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <p className="section-eyebrow" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
            Get in touch
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(56px, 10vw, 160px)',
              lineHeight: 0.92,
              letterSpacing: '-0.035em',
              color: 'var(--ink)',
              margin: '32px 0 32px',
            }}
          >
            Let's build{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              something good.
            </em>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              margin: '0 auto 48px',
              lineHeight: 1.65,
            }}
          >
            Thirty minutes is usually enough to know whether we're a fit. No
            slide deck, no sales pitch — just a conversation about what you're
            trying to ship and how I'd approach it.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '14px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://calendly.com/cyclona"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '17px 36px',
                background: 'var(--ink)',
                color: 'var(--bg-base)',
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                fontWeight: 500,
                borderRadius: '999px',
                border: '1px solid var(--ink)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--ink)';
                e.currentTarget.style.borderColor = 'var(--ink)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book a 30-minute call
            </a>

            <a
              href="mailto:cyclonallc@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '17px 36px',
                background: 'transparent',
                color: 'var(--ink)',
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                fontWeight: 500,
                border: '1px solid var(--border-strong)',
                borderRadius: '999px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--ink)';
                e.currentTarget.style.background = 'rgba(28,25,22,0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-strong)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              cyclonallc@gmail.com
            </a>
          </div>
        </motion.div>

        <div
          style={{
            paddingTop: '40px',
            borderTop: '1px solid var(--border)',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            gap: '24px',
          }}
          className="footer-band"
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-muted)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            © 2026 Cyclona LLC
          </span>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            {[
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/andrew-hogan-07946a112',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
              },
              {
                label: 'GitHub',
                href: 'https://github.com/piphog',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.5-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.9 7.9-10.9C23.5 5.6 18.4.5 12 .5z" />
                  </svg>
                ),
              },
              {
                label: 'Email',
                href: 'mailto:cyclonallc@gmail.com',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
              },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  borderRadius: '50%',
                  color: 'var(--text-muted)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--ink)';
                  e.currentTarget.style.color = 'var(--ink)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                {icon}
              </a>
            ))}
          </div>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
              textAlign: 'right',
            }}
          >
            Designed &amp; built by Andrew Hogan
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .footer-band {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .footer-band > span { text-align: center !important; }
        }
      `}</style>
    </section>
  );
}
