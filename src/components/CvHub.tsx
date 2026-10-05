import React from 'react';
import { Download, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import { cvCatalog, type CvItem } from '../data/cvs';
import type { RoleLens } from '../data/roles';

interface CvHubProps {
  activeRole: RoleLens;
}

export const CvHub: React.FC<CvHubProps> = ({ activeRole }) => {
  const isRecommended = (item: CvItem) => {
    if (activeRole.id === 'all') {
      return item.id === 'executive-general';
    }
    return item.roleLensId === activeRole.id;
  };

  return (
    <section id="cv-hub" className="section" style={{ backgroundColor: 'rgba(10, 15, 20, 0.95)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Download size={14} />
            <span>Document Hub</span>
          </div>
          <h2 className="section-title">8 Role-Focused ATS-Compliant CVs</h2>
          <p className="section-subtitle">
            Every version is tailored to a specific organizational function, fully ATS-formatted, and available in both PDF and editable DOCX formats.
          </p>
        </div>

        {/* Active Role Recommendation Banner if applicable */}
        {activeRole.id !== 'all' && (
          <div
            className="glass-card"
            style={{
              padding: '16px 24px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-emerald)',
              backgroundColor: 'rgba(13, 107, 82, 0.2)',
              marginBottom: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Sparkles size={18} color="#E5A93C" />
              <span style={{ fontSize: '0.94rem', color: '#FFFFFF' }}>
                Currently viewing through <strong>{activeRole.title}</strong> lens. CV tailored for this position is highlighted below.
              </span>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-emerald)', fontWeight: 600 }}>
              Matched: {activeRole.recommendedCvTitle}
            </span>
          </div>
        )}

        {/* CV Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px',
          }}
        >
          {cvCatalog.map((cv) => {
            const recommended = isRecommended(cv);

            return (
              <div
                key={cv.id}
                className="glass-card"
                style={{
                  padding: '30px',
                  borderRadius: 'var(--radius-md)',
                  border: recommended
                    ? '2px solid var(--color-primary-light)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: recommended
                    ? 'rgba(13, 107, 82, 0.16)'
                    : 'rgba(16, 24, 30, 0.85)',
                  boxShadow: recommended ? '0 8px 32px rgba(13, 107, 82, 0.35)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
              >
                {/* Recommended Badge */}
                {recommended && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '24px',
                      backgroundColor: 'var(--color-primary-light)',
                      color: '#FFFFFF',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      padding: '3px 12px',
                      borderRadius: 'var(--radius-full)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                    }}
                  >
                    <Sparkles size={12} color="#E5A93C" />
                    <span>RECOMMENDED MATCH</span>
                  </div>
                )}

                <div>
                  {/* Top Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-emerald)',
                        fontWeight: 700,
                      }}
                    >
                      VERSION {cv.number}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        padding: '2px 8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '4px',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {cv.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '6px',
                      lineHeight: 1.3,
                    }}
                  >
                    {cv.title}
                  </h3>

                  {/* Target Roles */}
                  <div style={{ fontSize: '0.82rem', color: '#E5A93C', marginBottom: '14px', lineHeight: 1.4 }}>
                    <strong style={{ color: 'var(--text-muted)' }}>Target: </strong>{cv.targetRoles}
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '18px' }}>
                    {cv.description}
                  </p>

                  {/* Highlights */}
                  <div style={{ marginBottom: '22px' }}>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontWeight: 600 }}>
                      Featured Focus in this Version:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {cv.highlights.map((hl, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                          <CheckCircle2 size={13} color="var(--text-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Download Buttons Bar */}
                <div
                  style={{
                    paddingTop: '18px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <a
                    href={cv.pdfFile}
                    download
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px 18px',
                      backgroundColor: 'var(--color-primary)',
                      color: '#FFFFFF',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      transition: 'all 0.2s ease',
                      textAlign: 'center',
                      width: '100%',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
                  >
                    <Download size={15} />
                    <span>Download Official CV (PDF)</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
