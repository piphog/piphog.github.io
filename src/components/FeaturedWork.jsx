import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  { value: '99.35%', unit: 'CONTRACTS', label: 'AUTO-EXTRACTED — 1,075 / 1,082' },
  { value: '250K+', unit: 'COMPOUNDS', label: 'CLUSTERED PER SCREENING RUN' },
  { value: '5', unit: 'MODULES', label: 'SHIPPED TO PRODUCTION' },
  { value: 'claude-sonnet-4-5', unit: '', label: 'MODEL POWERED' },
];

const techStack = [
  'Node.js / Express',
  'Azure App Service',
  'Azure PostgreSQL',
  'Microsoft Entra ID SSO',
  'Anthropic Claude API',
  'RDKit / Cheminformatics',
  'Dynamics 365 + SharePoint',
];

const modules = [
  {
    id: 'bd',
    label: 'BD Assistant',
    tagline: 'Contact discovery, company intel, tone-matched outreach',
    desc: (
      <>
        Claude-powered prospecting that builds a company intelligence brief from
        scratch, ranks accounts by fit, and drafts outreach emails in a tone profile
        learned from the team's own sent mail. Every draft routes through
        Outlook (Microsoft Graph) for human approval before it ever leaves the building.
      </>
    ),
    images: [
      { src: '/images/work/bd-assistant.png', label: 'Prospect intake + AI company brief + draft email' },
    ],
  },
  {
    id: 'chem',
    label: 'Chemical Intelligence',
    tagline: 'Scaffold clustering across 250K-compound screens',
    desc: (
      <>
        The technically deepest module. RDKit generates Morgan fingerprints for
        every compound; Claude clusters mass-spec hit lists into named scaffold
        families with <strong style={{ color: 'var(--text-primary)' }}>temperature: 0</strong> determinism, then a
        server-side validation pass drops hallucinated IDs and re-clusters orphaned
        reals by Tanimoto neighbor. A 402K-compound fingerprint cache (~36MB
        <code style={{ fontFamily: 'var(--font-mono)' }}>.npz</code>) loads in 2–5 seconds. 3D UMAP renders the
        full chemical space in-browser via Plotly.
      </>
    ),
    images: [
      { src: '/images/work/chem-intel-clusters.png', label: 'Cluster analysis — 358 hits across 246 scaffold clusters' },
      { src: '/images/work/chem-intel-umap.png', label: '3D UMAP molecular space + physicochemical profiles' },
      { src: '/images/work/chem-intel-summary.png', label: 'Cluster summary — structures, scores, homogeneity' },
    ],
  },
  {
    id: 'contracts',
    label: 'Contracts & Documents',
    tagline: '1,478 accounts synced live with Dynamics 365 + SharePoint',
    desc: (
      <>
        Uploaded PDF/DOCX contracts are parsed by Claude into a unified schema —
        counterparty, dates, terms, signatories, red-flag clauses — fuzzy-matched
        to existing Dynamics 365 accounts, and auto-filed to the right SharePoint
        folder via the Graph API. MSA/NDA status flows two-way between the
        contracts table and Dynamics. <strong style={{ color: 'var(--text-primary)' }}>1,075 of 1,082</strong> historical
        contracts were auto-extracted on the first production pass.
      </>
    ),
    images: [
      { src: '/images/work/contract-inventory.png', label: 'Live contract inventory — MSA / NDA status across 1,478 accounts' },
      { src: '/images/work/extract-file.png', label: 'Drag-and-drop extraction, staged for SharePoint filing' },
      { src: '/images/work/new-contract.png', label: 'Guided new-contract creation wizard' },
    ],
  },
  {
    id: 'finance',
    label: 'Financial Reporting',
    tagline: 'In-memory schema extension of a 1MB report template',
    desc: (
      <>
        The Monthly Operating Review generator runs the parent company's own report
        template inside a Node <code style={{ fontFamily: 'var(--font-mono)' }}>vm</code> sandbox, patches its
        hard-coded 4-slot schema up to 7 service lines and 9 client-type buckets in
        memory, and stamps the result back into a fresh populated copy — no fork,
        no merge debt. A 39-tab workbook becomes a populated report in 5–10 seconds,
        surfacing dozens of upstream QC issues along the way.
      </>
    ),
    images: [
      { src: '/images/work/report-generator.png', label: 'MOR Generator — schema-extended report run' },
    ],
  },
];

export default function FeaturedWork() {
  const [activeModule, setActiveModule] = useState('chem');
  const [activeImage, setActiveImage] = useState(0);

  const current = modules.find(m => m.id === activeModule);

  const handleModuleChange = (id) => {
    setActiveModule(id);
    setActiveImage(0);
  };

  return (
    <section
      id="work"
      style={{
        padding: '120px 0',
        background: 'var(--bg-base)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle scanline texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.012) 2px, rgba(0,212,255,0.012) 4px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>

        {/* Client tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '8px' }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
          }}>
            CLIENT PROFILE — BIOTECH CRO // MASS-SPEC DRUG DISCOVERY, BOSTON AREA
          </span>
        </motion.div>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          style={{ marginBottom: '12px' }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--accent-cyan)',
          }}>
            {'// Featured Work'}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4.5vw, 50px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}
        >
          Enterprise AI Operations Platform
        </motion.h2>
        <div style={{
          width: '48px',
          height: '3px',
          background: 'var(--accent-cyan)',
          marginBottom: '32px',
          borderRadius: '2px',
        }} />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            maxWidth: '760px',
            marginBottom: '48px',
          }}
        >
          A full operations platform built from zero to production in weeks for a
          contract research organization running mass-spectrometry-based drug
          discovery — now in daily use by ~25 staff across BD, Operations, Quality,
          Finance, and Executive functions. Self-hosted on Azure with continuous
          deployment, Entra ID single sign-on, and the Claude API wired into every
          module below.
        </motion.p>

        {/* Stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: '56px',
          }}
        >
          {stats.map(({ value, unit, label }) => (
            <div
              key={label}
              style={{
                padding: '24px 28px',
                background: 'var(--bg-elevated)',
                position: 'relative',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: value.length > 6 ? '14px' : '28px',
                fontWeight: 600,
                color: 'var(--accent-amber)',
                lineHeight: 1,
                marginBottom: '4px',
                letterSpacing: value.length > 6 ? '0' : '-0.02em',
              }}>{value}</div>
              {unit && (
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '2px',
                }}>{unit}</div>
              )}
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--text-secondary)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}>{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tech stack tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '64px' }}
        >
          {techStack.map(t => (
            <span
              key={t}
              style={{
                display: 'inline-block',
                padding: '5px 12px',
                background: 'rgba(0,212,255,0.06)',
                border: '1px solid rgba(0,212,255,0.18)',
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--accent-cyan)',
                letterSpacing: '0.04em',
              }}
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* Module switcher */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          {/* Tabs */}
          <div
            className="module-tabs"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '24px',
              borderBottom: '1px solid var(--border)',
              paddingBottom: '0',
            }}
          >
            {modules.map(m => {
              const isActive = m.id === activeModule;
              return (
                <button
                  key={m.id}
                  onClick={() => handleModuleChange(m.id)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '12px 18px',
                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                    borderBottom: isActive ? '2px solid var(--accent-cyan)' : '2px solid transparent',
                    marginBottom: '-1px',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)'; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-muted)'; }}
                >
                  {m.label}
                </button>
              );
            })}
          </div>

          {/* Active module content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.4fr',
                gap: '40px',
                alignItems: 'start',
              }}
              className="module-grid"
            >
              {/* Left: description */}
              <div>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-amber)',
                  marginBottom: '10px',
                }}>
                  {current.tagline}
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                }}>
                  {current.desc}
                </p>

                {/* Thumbnail selector for multi-image modules */}
                {current.images.length > 1 && (
                  <div style={{ display: 'flex', gap: '8px', marginTop: '24px', flexWrap: 'wrap' }}>
                    {current.images.map((img, i) => (
                      <button
                        key={img.src}
                        onClick={() => setActiveImage(i)}
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          border: `1px solid ${i === activeImage ? 'var(--accent-cyan)' : 'var(--border)'}`,
                          background: i === activeImage ? 'var(--accent-cyan)' : 'transparent',
                          transition: 'all 0.2s',
                        }}
                        aria-label={img.label}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Right: screenshot */}
              <div>
                <div style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-elevated)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
                }}>
                  {/* Fake browser chrome */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 14px',
                    borderBottom: '1px solid var(--border)',
                    background: 'var(--bg-surface)',
                  }}>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ff5f56' }} />
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#27c93f' }} />
                    <span style={{
                      marginLeft: '12px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.06em',
                    }}>
                      {current.images[activeImage]?.label}
                    </span>
                  </div>
                  <div style={{
                    maxHeight: '480px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    background: '#070b16',
                  }}>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={current.images[activeImage]?.src}
                        src={current.images[activeImage]?.src}
                        alt={current.images[activeImage]?.label}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ width: '100%', display: 'block' }}
                      />
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .module-grid {
            grid-template-columns: 1fr !important;
          }
          .module-tabs button {
            padding: 10px 12px !important;
            font-size: 11px !important;
          }
        }
      `}</style>
    </section>
  );
}
