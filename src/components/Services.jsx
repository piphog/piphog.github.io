import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Internal Tools & Operational Dashboards',
    desc:
      "Modern, intuitive operational interfaces wired to your preferred AI API, single sign-on, and real-time data. Built for the people who actually use them — every day, all day — not just the demo.",
    points: ['Claude / OpenAI / any model', 'Entra ID / Okta / Auth0 SSO', 'Live data, role-based access'],
  },
  {
    num: '02',
    title: 'AI Document & Contract Automation',
    desc:
      'Upload PDFs, DOCX, Excel, or scans. Structured fields come out the other end — counterparties, terms, line items, red flags — fuzzy-matched against your existing systems and routed where they need to go.',
    points: ['PDF / DOCX / OCR pipelines', 'Schema-validated AI extraction', 'CRM, Drive & SharePoint routing'],
  },
  {
    num: '03',
    title: 'Workflow & Outreach Automation',
    desc:
      'AI-assisted prospecting, contact discovery, tone-matched drafting, and CRM pipeline tools. Multi-step agents that pause for human approval before anything reaches a customer.',
    points: ['Tone-trained email drafting', 'CRM enrichment & routing', 'Human-in-the-loop agents'],
  },
  {
    num: '04',
    title: 'Data Pipelines & Reporting',
    desc:
      "Operational, scientific, or financial — recurring reports stop being someone's Monday morning. Automated aggregation, dedup, QC, and delivery into PowerPoint, Excel, PDF, or a live dashboard.",
    points: ['Recurring report generation', 'Excel / PPTX / PDF output', 'Built-in data QC + alerts'],
  },
  {
    num: '05',
    title: 'Enterprise Cloud App Services',
    desc:
      'Production-grade web applications on Azure, AWS, or DigitalOcean — Node, Python, or your existing stack. CI/CD from GitHub, managed Postgres, secrets in a vault, structured logs you can actually query.',
    points: ['Azure App Service & Functions', 'Postgres / Key Vault / Entra ID', 'GitHub → automated deploys'],
  },
  {
    num: '06',
    title: 'Custom AI Agents & Integrations',
    desc:
      'Multi-step agents that connect the systems you already pay for — Microsoft Graph, Dynamics, Slack, Salesforce, Notion, your data warehouse. Built with the same patterns that hold up in production today.',
    points: ['Anthropic Agent SDK / tool-use', 'Microsoft Graph & Dataverse', 'Custom MCPs and webhooks'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (i % 3) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '140px 0',
        background: 'var(--bg-soft)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '72px', maxWidth: '880px' }}
        >
          <p className="section-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
            What we build
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(40px, 6vw, 84px)',
              lineHeight: 0.98,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: '24px',
            }}
          >
            Six things we do{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              exceptionally well
            </em>
            .
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              maxWidth: '620px',
            }}
          >
            Every engagement starts as a real problem on someone's calendar — a Monday-morning
            report, a stack of contracts, a brittle spreadsheet — and ends as a production
            system in the hands of the people who needed it.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}
        >
          {services.map((s, i) => (
            <motion.article
              key={s.num}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              style={{
                background: 'var(--bg-elevated)',
                padding: '36px 32px 32px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'background var(--transition)',
                minHeight: '360px',
                position: 'relative',
              }}
              whileHover={{ backgroundColor: 'var(--bg-paper)' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  marginBottom: '22px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--accent)',
                    letterSpacing: '0.15em',
                  }}
                >
                  {s.num}
                </span>
                <span
                  style={{
                    width: '20px',
                    height: '1px',
                    background: 'var(--border-strong)',
                  }}
                />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: '26px',
                  lineHeight: 1.15,
                  letterSpacing: '-0.015em',
                  color: 'var(--ink)',
                  marginBottom: '14px',
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                {s.desc}
              </p>

              <ul
                style={{
                  marginTop: 'auto',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {s.points.map((p) => (
                  <li
                    key={p}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.04em',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: 'var(--accent)',
                      }}
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
