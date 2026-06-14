import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Work',    href: '#work'    },
  { label: 'About',   href: '#about'   },
  { label: 'Contact', href: '#contact' },
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
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 0.3s ease, border-color 0.3s ease',
        background: scrolled ? 'rgba(6,10,20,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}>
          {/* Wordmark */}
          <a href="#top" onClick={(e) => handleNav(e, 'body')} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
            }}>
              CYCLONA
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              marginTop: '2px',
            }}>LLC</span>
          </a>

          {/* Desktop nav */}
          <ul style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center',
          }} className="nav-desktop">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNav(e, href)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://calendly.com/cyclona"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--bg-base)',
                  background: 'var(--accent-amber)',
                  padding: '8px 18px',
                  borderRadius: 'var(--radius)',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.target.style.background = '#ffc140'; e.target.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.target.style.background = 'var(--accent-amber)'; e.target.style.transform = 'none'; }}
              >
                Book a Call
              </a>
            </li>
          </ul>

          {/* Hamburger */}
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
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: menuOpen && i === 1 ? 'transparent' : 'var(--text-primary)',
                transition: '0.25s',
                transform: menuOpen
                  ? i === 0 ? 'translateY(7px) rotate(45deg)'
                  : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                  : 'none'
                  : 'none',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              zIndex: 999,
              background: 'rgba(6,10,20,0.97)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              padding: '24px 20px 32px',
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} onClick={(e) => handleNav(e, href)} style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '22px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}>
                    {label}
                  </a>
                </li>
              ))}
              <li style={{ marginTop: '8px' }}>
                <a
                  href="https://calendly.com/cyclona"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--bg-base)',
                    background: 'var(--accent-amber)',
                    padding: '12px 24px',
                    borderRadius: 'var(--radius)',
                    fontWeight: 600,
                  }}
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
