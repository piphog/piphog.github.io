import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const techStack = [
  {
    label: 'Cloud & Infrastructure',
    items: [
      'Azure App Service (Linux)',
      'Azure PostgreSQL Flexible Server',
      'Azure Key Vault',
      'Azure Front Door',
      'GitHub Actions → Oryx CI/CD',
    ],
  },
  {
    label: 'Identity & Integration',
    items: [
      'Microsoft Entra ID SSO',
      'Microsoft Graph API',
      'Dynamics 365 Dataverse',
      'SharePoint via Graph',
      'Outlook send-on-behalf-of',
    ],
  },
  {
    label: 'AI & LLM Layer',
    items: [
      'Anthropic Claude API',
      'Tool-use JSON schemas',
      'Deterministic prompts (temp: 0)',
      'Cluster validation + orphan recovery',
      'Tone-matched draft generation',
    ],
  },
  {
    label: 'Backend & Data',
    items: [
      'Node.js 22 / Express',
      'Python subprocesses for ML',
      'JSONB analytic columns',
      'Partial unique indexes',
      'Soft-delete with audit trail',
      'Pino structured logging',
    ],
  },
  {
    label: 'Frontend & Visualization',
    items: [
      'Vanilla JS (CSP-strict)',
      'D3.js charts',
      'Plotly 3D scenes',
      'SheetJS in-browser Excel',
      'Client-side SHA-256 dedup',
    ],
  },
  {
    label: 'Domain Engineering',
    items: [
      'RDKit cheminformatics',
      'Morgan / ECFP fingerprints',
      'Tanimoto similarity at scale',
      'UMAP dimensionality reduction',
      'python-pptx report generation',
    ],
  },
];

const modules = [
  {
    id: 'bd',
    label: 'BD Assistant',
    tagline: 'Contact discovery, company intel, tone-matched outreach',
    desc: (
      <>
        Claude-powered prospecting that builds a company intelligence brief from
        scratch, ranks accounts by fit, and drafts outreach emails in a tone
        profile learned from the team's own sent mail. Every draft routes
        through Outlook (Microsoft Graph) for human approval before it ever
        leaves the building.
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
        families with{' '}
        <strong style={{ color: 'var(--ink)' }}>temperature: 0</strong>{' '}
        determinism, then a server-side validation pass drops hallucinated IDs
        and re-clusters orphaned reals by Tanimoto neighbor. A 402K-compound
        fingerprint cache loads in 2 to 5 seconds. 3D UMAP renders the full
        chemical space in-browser via Plotly.
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
        counterparty, dates, terms, signatories, red-flag clauses —
        fuzzy-matched to existing Dynamics 365 accounts, and auto-filed to the
        right SharePoint folder via the Graph API. MSA/NDA status flows two-way
        between the contracts table and Dynamics.{' '}
        <strong style={{ color: 'var(--ink)' }}>1,075 of 1,082</strong>{' '}
        historical contracts were auto-extracted on the first production pass.
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
        The Monthly Operating Review generator runs the parent company's own
        report template inside a Node{' '}
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>vm</code>{' '}
        sandbox, patches its hard-coded 4-slot schema up to 7 service lines and
        9 client-type buckets in memory, and stamps the result back into a
        fresh populated copy — no fork, no merge debt. A 39-tab workbook
        becomes a populated report in 5 to 10 seconds, surfacing dozens of
        upstream QC issues along the way.
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

  const current = modules.find((m) => m.id === activeModule);

  const handleModuleChange = (id) => {
    setActiveModule(id);
    setActiveImage(0);
  };

  return (
    <section
      id="work"
      style={{
        padding: '140px 0',
        background: 'var(--bg-base)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '12px' }}
        >
          <p className="section-eyebrow">
            <span style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
            Featured engagement
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(40px, 6vw, 80px)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            marginBottom: '24px',
            maxWidth: '1000px',
          }}
        >
          An enterprise AI operations platform —{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            zero to production in weeks.
          </em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'inline-block',
            padding: '6px 12px',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border)',
            borderRadius: '999px',
            marginBottom: '36px',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.12em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
          }}
        >
          Client — Biotech CRO · Mass-spec drug discovery · Boston area
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            maxWidth: '820px',
            marginBottom: '72px',
          }}
        >
          A full operations platform built from zero to production in weeks for
          a contract research organization running mass-spectrometry-based drug
          discovery — now in daily use by{' '}
          <span style={{ color: 'var(--ink)', fontWeight: 500 }}>~250 staff</span>{' '}
          (US &amp; Europe) across BD, Operations, Quality, Finance, Scientific
          Research, and Executive functions. Self-hosted on Azure with
          continuous deployment, Entra ID single sign-on, and the Claude API
          wired into every module below.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '88px' }}
        >
          <p
            className="section-eyebrow"
            style={{ marginBottom: '24px', color: 'var(--text-muted)' }}
          >
            <span style={{ width: '24px', height: '1px', background: 'var(--text-muted)' }} />
            The stack
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1px',
              background: 'var(--border)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}
          >
            {techStack.map((group) => (
              <div
                key={group.label}
                style={{
                  background: 'var(--bg-elevated)',
                  padding: '24px 24px 26px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: '14px',
                    fontWeight: 500,
                  }}
                >
                  {group.label}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {group.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        lineHeight: 1.45,
                      }}
                    >
                      <span
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: 'var(--text-muted)',
                          flexShrink: 0,
                          marginTop: '8px',
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="section-eyebrow"
            style={{ marginBottom: '20px', color: 'var(--text-muted)' }}
          >
            <span style={{ width: '24px', height: '1px', background: 'var(--text-muted)' }} />
            Modules — pick one
          </p>

          <div
            className="module-tabs"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px',
              marginBottom: '36px',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {modules.map((m) => {
              const isActive = m.id === activeModule;
              return (
                <button
                  key={m.id}
                  onClick={() => handleModuleChange(m.id)}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: isActive ? 500 : 400,
                    padding: '14px 22px',
                    color: isActive ? 'var(--ink)' : 'var(--text-muted)',
                    borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                    marginBottom: '-1px',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--ink-soft)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  {m.label}
                </button>
              );
            })}
          </div>

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
                gap: '48px',
                alignItems: 'start',
              }}
              className="module-grid"
            >
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: '14px',
                    fontWeight: 500,
                  }}
                >
                  {current.tagline}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  {current.desc}
                </p>

                {current.images.length > 1 && (
                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      marginTop: '28px',
                      flexWrap: 'wrap',
                    }}
                  >
                    {current.images.map((img, i) => (
                      <button
                        key={img.src}
                        onClick={() => setActiveImage(i)}
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          border: '1px solid ' + (i === activeImage ? 'var(--accent)' : 'var(--border-strong)'),
                          background: i === activeImage ? 'var(--accent)' : 'transparent',
                          transition: 'all 0.2s',
                        }}
                        aria-label={img.label}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div>
                <div
                  style={{
                    position: 'relative',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1px solid var(--border)',
                    background: 'var(--bg-paper)',
                    boxShadow:
                      '0 30px 60px -20px rgba(28, 25, 22, 0.18), 0 12px 24px -10px rgba(28, 25, 22, 0.10)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '12px 16px',
                      borderBottom: '1px solid var(--border)',
                      background: 'var(--bg-soft)',
                    }}
                  >
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#e5c5a3' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#d8b489' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#c8a071' }} />
                    <span
                      style={{
                        marginLeft: '14px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {current.images[activeImage]?.label}
                    </span>
                  </div>
                  <div
                    style={{
                      maxHeight: '520px',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      background: 'var(--bg-paper)',
                    }}
                  >
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
          .module-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .module-tabs button { padding: 10px 14px !important; font-size: 13px !important; }
        }
      `}</style>
    </section>
  );
}
