import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CYCLING_WORDS = ['teams.', 'operators.', 'founders.', 'scientists.', 'businesses.'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = CYCLING_WORDS[wordIndex];
    let timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  const scrollToWork = (e) => {
    e.preventDefault();
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'transparent',
      }}
    >
      <div
        className="container"
        style={{ position: 'relative', paddingTop: '140px', paddingBottom: '120px', width: '100%' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '7px 14px 7px 12px',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border)',
            borderRadius: '999px',
            marginBottom: '40px',
          }}
        >
          <span style={{
            position: 'relative',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'var(--accent)',
          }}>
            <span style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '50%',
              background: 'var(--accent)',
              opacity: 0.35,
              animation: 'pulse-ring 2.4s ease-out infinite',
            }} />
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--ink-soft)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}>
            Accepting new engagements — Raleigh-Durham & Remote
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 8.5vw, 124px)',
            fontWeight: 400,
            lineHeight: 0.98,
            letterSpacing: '-0.025em',
            color: 'var(--ink)',
            maxWidth: '1100px',
            marginBottom: '32px',
          }}
        >
          Production AI &amp;{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            software infrastructure
          </em>
          <br />
          built for ambitious{' '}
          <span style={{ display: 'inline-block', minWidth: '6ch' }}>
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              {displayed}
            </span>
            <span
              style={{
                display: 'inline-block',
                width: '4px',
                height: '0.75em',
                background: 'var(--accent)',
                marginLeft: '2px',
                marginBottom: '-0.06em',
                verticalAlign: 'middle',
                animation: 'blink 0.9s step-end infinite',
              }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.7 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(17px, 1.6vw, 21px)',
            fontWeight: 400,
            color: 'var(--text-secondary)',
            maxWidth: '660px',
            lineHeight: 1.55,
            marginBottom: '56px',
          }}
        >
          Cyclona LLC is a one-person studio designing and shipping
          production-grade AI dashboards, internal tools, document and finance
          automations, and data pipelines — for the teams who actually do the
          work, in any industry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <a
            href="#work"
            onClick={scrollToWork}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 30px',
              background: 'var(--ink)',
              color: 'var(--bg-base)',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.01em',
              borderRadius: '999px',
              transition: 'all 0.25s ease',
              border: '1px solid var(--ink)',
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
            See the work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="https://cal.com/cyclona/intro-call-30-min"
            data-cal-namespace="intro-call-30-min"
            data-cal-link="cyclona/intro-call-30-min"
            data-cal-config='{"layout":"month_view"}'
            onClick={(e) => e.preventDefault()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 30px',
              background: 'transparent',
              color: 'var(--ink)',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.01em',
              border: '1px solid var(--border-strong)',
              borderRadius: '999px',
              transition: 'all 0.25s ease',
              cursor: 'pointer',
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
            Book an intro call
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 40px',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}
        className="hero-bottom-bar"
      >
        <span>Cyclona LLC — Est. 2025</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '24px', height: '1px', background: 'currentColor' }} />
          Scroll
        </span>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse-ring {
          0% { opacity: 0.45; transform: scale(0.6); }
          80%, 100% { opacity: 0; transform: scale(2.4); }
        }
        @media (max-width: 600px) {
          .hero-bottom-bar { padding: 0 22px !important; font-size: 10px !important; }
        }
      `}</style>
    </section>
  );
}
