import React, { useState } from 'react';
import { Code2, Cpu, FileSpreadsheet, CheckCircle2, Clock, DollarSign, Layers } from 'lucide-react';
import { softwarePlatforms, excelSystems, techPhilosophy } from '../data/technology';

export const TechnologySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'excel'>('web');

  return (
    <section id="technology" className="section" style={{ backgroundColor: 'rgba(8, 12, 14, 0.95)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Master Part 10 Tools & Technologies</span>
          </div>
          <h2 className="section-title">Technology as an Operational Enabler</h2>
          <p className="section-subtitle">
            Technology is a tool, not the goal. This is not a software developer portfolio; it demonstrates operational problem solving through custom internal digital architecture.
          </p>
        </div>

        {/* Investment & Zero-Budget Banner */}
        <div
          className="glass-card"
          style={{
            padding: '28px 36px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-emerald)',
            background: 'linear-gradient(135deg, rgba(16, 24, 30, 0.95) 0%, rgba(13, 107, 82, 0.12) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '44px',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '8px' }}>
              {techPhilosophy.headline}
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              {techPhilosophy.quote}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: 'var(--text-emerald)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>
                <Clock size={14} />
                <span>Dev Investment</span>
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                {techPhilosophy.investment}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Documented Hours
              </div>
            </div>

            <div style={{ width: '1px', height: '45px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#E5A93C', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>
                <DollarSign size={14} />
                <span>External Budget</span>
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#E5A93C', fontFamily: 'var(--font-heading)' }}>
                {techPhilosophy.budget}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Zero External Cost
              </div>
            </div>
          </div>
        </div>

        {/* Tab Toggle: Web Platforms vs Excel Engines */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '36px' }}>
          <button
            onClick={() => setActiveTab('web')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.88rem',
              fontWeight: activeTab === 'web' ? 700 : 500,
              backgroundColor: activeTab === 'web' ? 'var(--color-primary)' : 'rgba(20, 28, 34, 0.6)',
              border: activeTab === 'web' ? '1px solid var(--color-primary-light)' : '1px solid var(--border-subtle)',
              color: activeTab === 'web' ? '#FFFFFF' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <Code2 size={16} />
            <span>01 — 04: Four Custom Digital Platforms</span>
          </button>

          <button
            onClick={() => setActiveTab('excel')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.88rem',
              fontWeight: activeTab === 'excel' ? 700 : 500,
              backgroundColor: activeTab === 'excel' ? 'var(--color-primary)' : 'rgba(20, 28, 34, 0.6)',
              border: activeTab === 'excel' ? '1px solid var(--color-primary-light)' : '1px solid var(--border-subtle)',
              color: activeTab === 'excel' ? '#FFFFFF' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <FileSpreadsheet size={16} />
            <span>Six Excel / Sheets Management Modules</span>
          </button>
        </div>

        {/* 4 Web Applications Grid */}
        {activeTab === 'web' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '24px',
            }}
          >
            {softwarePlatforms.map((app) => (
              <div
                key={app.id}
                className="glass-card"
                style={{
                  padding: '28px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-emerald)',
                        backgroundColor: 'rgba(13, 107, 82, 0.2)',
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--border-emerald)',
                        fontWeight: 600,
                      }}
                    >
                      SYSTEM 0{app.number}
                    </span>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      {app.stack}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '6px', lineHeight: 1.3 }}>
                    {app.name}
                  </h3>
                  <div style={{ fontSize: '0.86rem', color: '#E5A93C', marginBottom: '18px', fontWeight: 500 }}>
                    {app.purpose}
                  </div>

                  {/* Master Prompt Structured Breakdown */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
                    <div style={{ padding: '10px 12px', backgroundColor: 'rgba(239, 68, 68, 0.08)', borderRadius: '6px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                      <div style={{ fontSize: '0.72rem', color: '#F87171', fontWeight: 700, textTransform: 'uppercase' }}>Business Problem</div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{app.businessProblem}</div>
                    </div>

                    <div style={{ padding: '10px 12px', backgroundColor: 'rgba(56, 189, 248, 0.08)', borderRadius: '6px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                      <div style={{ fontSize: '0.72rem', color: '#38BDF8', fontWeight: 700, textTransform: 'uppercase' }}>Solution</div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{app.solution}</div>
                    </div>

                    <div style={{ padding: '10px 12px', backgroundColor: 'rgba(167, 139, 250, 0.08)', borderRadius: '6px', border: '1px solid rgba(167, 139, 250, 0.2)' }}>
                      <div style={{ fontSize: '0.72rem', color: '#A78BFA', fontWeight: 700, textTransform: 'uppercase' }}>Technology</div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{app.technology}</div>
                    </div>

                    <div style={{ padding: '10px 12px', backgroundColor: 'rgba(229, 169, 60, 0.08)', borderRadius: '6px', border: '1px solid rgba(229, 169, 60, 0.2)' }}>
                      <div style={{ fontSize: '0.72rem', color: '#E5A93C', fontWeight: 700, textTransform: 'uppercase' }}>Operational Purpose</div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{app.operationalPurpose}</div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.82rem',
                    color: 'var(--text-emerald)',
                    fontWeight: 600,
                  }}
                >
                  Documented Impact: <span style={{ color: '#FFFFFF', fontWeight: 400 }}>{app.impact}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 6 Excel Systems Grid */}
        {activeTab === 'excel' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '20px',
            }}
          >
            {excelSystems.map((item) => (
              <div
                key={item.number}
                className="glass-card"
                style={{
                  padding: '24px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <FileSpreadsheet size={18} color="var(--text-emerald)" />
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      MODULE 0{item.number} (MASTER PART 5.5)
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '8px', lineHeight: 1.3 }}>
                    {item.name}
                  </h3>

                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '14px' }}>
                    {item.purpose}
                  </p>

                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '12px' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Architecture & Logic: </strong>{item.features}
                  </div>
                </div>

                <div
                  style={{
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.8rem',
                    color: 'var(--text-emerald)',
                    fontWeight: 500,
                  }}
                >
                  Verified Output: <span style={{ color: '#FFFFFF' }}>{item.impact}</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
