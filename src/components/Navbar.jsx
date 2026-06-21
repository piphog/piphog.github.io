import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#work' },
  { label: 'Methods',  href: '#engineering' },
  { label: 'About',    href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
          background: scrolled ? 'rgba(244, 237, 224, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '68px',
          }}
        >
          <a
            href="#top"
            onClick={(e) => handleNav(e, '#top')}
            style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                color: 'var(--ink)',
              }}
            >
              Cyclona
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--text-muted)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              LLC
            </span>
          </a>

          <ul
            style={{ display: 'flex', gap: '36px', alignItems: 'center' }}
            className="nav-desktop"
          >
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNav(e, href)}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--ink)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://cal.com/cyclona/intro-call-30-min"
                data-cal-namespace="intro-call-30-min"
                data-cal-link="cyclona/intro-call-30-min"
                data-cal-config='{"layout":"month_view"}'
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--bg-base)',
                  background: 'var(--ink)',
                  padding: '10px 22px',
                  borderRadius: '999px',
                  transition: 'all 0.25s',
                  border: '1px solid var(--ink)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.borderColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--ink)';
                  e.currentTarget.style.borderColor = 'var(--ink)';
                }}
              >
                Book a call
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </a>
            </li>
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="hamburger"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '8px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '1.5px',
                  background: menuOpen && i === 1 ? 'transparent' : 'var(--ink)',
                  transition: '0.25s',
                  transform: menuOpen
                    ? i === 0
                      ? 'translateY(6.5px) rotate(45deg)'
                      : i === 2
                      ? 'translateY(-6.5px) rotate(-45deg)'
                      : 'none'
                    : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            style={{
              position: 'fixed',
              top: '68px',
              left: 0,
              right: 0,
              zIndex: 999,
              background: 'rgba(244, 237, 224, 0.97)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--border)',
              padding: '28px 22px 32px',
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNav(e, href)}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '28px',
                      fontWeight: 400,
                      color: 'var(--ink)',
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li style={{ marginTop: '8px' }}>
                <a
                  href="https://cal.com/cyclona/intro-call-30-min"
                  data-cal-namespace="intro-call-30-min"
                  data-cal-link="cyclona/intro-call-30-min"
                  data-cal-config='{"layout":"month_view"}'
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--bg-base)',
                    background: 'var(--ink)',
                    padding: '13px 26px',
                    borderRadius: '999px',
                    fontWeight: 500,
                  }}
                >
                  Book a call →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 820px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
