import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NetworkBackground from './NetworkBackground';

const CYCLING_WORDS = ['Science', 'Biotech', 'Research', 'Business', 'Medicine'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = CYCLING_WORDS[wordIndex];
    let timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
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
        overflow: 'hidden',
        background: 'var(--bg-base)',
      }}
    >
      {/* Grid texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Animated node/circuit network */}
      <NetworkBackground />

      {/* Ambient glow blobs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(245,166,35,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '120px', paddingBottom: '80px' }}>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            background: 'rgba(0,230,118,0.08)',
            border: '1px solid rgba(0,230,118,0.2)',
            borderRadius: '99px',
            marginBottom: '28px',
          }}
        >
          <span style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: 'var(--accent-green)',
            boxShadow: '0 0 8px var(--accent-green)',
            animation: 'pulse-green 2s infinite',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--accent-green)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            Available for new clients — Raleigh-Durham & Remote
          </span>
        </motion.div>

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ marginBottom: '8px' }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.3em',
            color: 'var(--accent-amber)',
            textTransform: 'uppercase',
          }}>
            CYCLONA LLC
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(42px, 7vw, 80px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '12px',
            maxWidth: '820px',
          }}
        >
          AI Automation
          <br />
          Infrastructure for
          <br />
          <span style={{ color: 'var(--accent-cyan)', position: 'relative' }}>
            {displayed}
            <span style={{
              display: 'inline-block',
              width: '3px',
              height: '0.85em',
              background: 'var(--accent-amber)',
              marginLeft: '4px',
              verticalAlign: 'middle',
              animation: 'blink 0.9s step-end infinite',
            }} />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'var(--text-secondary)',
            maxWidth: '560px',
            lineHeight: 1.7,
            marginBottom: '48px',
          }}
        >
          Raleigh-Durham, NC — Building production-grade AI systems that
          compress days of manual work into minutes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <a
            href="#work"
            onClick={scrollToWork}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
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
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(245,166,35,0.35)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--accent-amber)';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            See the Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="https://calendly.com/cyclona"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 32px',
              background: 'transparent',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: 'var(--radius)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent-cyan)';
              e.currentTarget.style.color = 'var(--accent-cyan)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,212,255,0.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Book a Call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </a>
        </motion.div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{
            display: 'flex',
            gap: '40px',
            marginTop: '80px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '250K+',  label: 'Compounds clustered per run' },
            { value: '99.35%', label: 'Contract auto-extraction rate' },
            { value: '86.7%',  label: 'Live trading win rate' },
            { value: '5',      label: 'Enterprise modules shipped' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--accent-amber)',
                letterSpacing: '-0.01em',
                lineHeight: 1,
                marginBottom: '6px',
              }}>{value}</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: 'var(--text-muted)',
                letterSpacing: '0.02em',
              }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.15em',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
        }}>Scroll</span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, rgba(0,212,255,0.6), transparent)',
          animation: 'scroll-line 2s ease-in-out infinite',
        }} />
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse-green {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
        @keyframes scroll-line {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          50.01% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}
