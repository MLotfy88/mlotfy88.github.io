import React from 'react';
import { Layers, ArrowRight, Download, Check, Sparkles } from 'lucide-react';
import { roleLenses, RoleLens } from '../data/roles';

interface RoleSelectorProps {
  activeRole: RoleLens;
  onSelectRole: (role: RoleLens) => void;
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({ activeRole, onSelectRole }) => {
  return (
    <section
      id="roles"
      className="section"
      style={{
        backgroundColor: 'rgba(14, 20, 24, 0.65)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>Interactive Role-Driven Navigation</span>
          </div>
          <h2 className="section-title">
            Explore Portfolio Through Your Lens
          </h2>
          <p className="section-subtitle">
            Mahmoud brings a multi-faceted operational foundation. Select a role lens below to dynamically configure the executive narrative, highlighted metrics, and tailored CV for your hiring evaluation.
          </p>
        </div>

        {/* Role Pills Grid / Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          {roleLenses.map((role) => {
            const isSelected = activeRole.id === role.id;
            return (
              <button
                key={role.id}
                onClick={() => onSelectRole(role)}
                style={{
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.86rem',
                  fontWeight: isSelected ? 700 : 500,
                  border: isSelected
                    ? '1px solid var(--color-primary-light)'
                    : '1px solid var(--border-subtle)',
                  backgroundColor: isSelected
                    ? 'var(--color-primary)'
                    : 'rgba(20, 28, 34, 0.7)',
                  color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 16px rgba(13, 107, 82, 0.4)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'var(--border-emerald)';
                    e.currentTarget.style.backgroundColor = 'rgba(20, 28, 34, 0.95)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.backgroundColor = 'rgba(20, 28, 34, 0.7)';
                  }
                }}
              >
                {isSelected && <Sparkles size={14} color="#E5A93C" />}
                <span>{role.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Role Detailed Lens Card */}
        <div
          className="glass-card"
          style={{
            padding: '36px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-emerald)',
            background: 'linear-gradient(135deg, rgba(16, 24, 30, 0.95) 0%, rgba(13, 107, 82, 0.12) 100%)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'start',
            }}
          >
            {/* Left Column: Role Narrative */}
            <div>
              <div
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  backgroundColor: 'rgba(229, 169, 60, 0.15)',
                  border: '1px solid rgba(229, 169, 60, 0.35)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  color: '#E5A93C',
                  marginBottom: '14px',
                  textTransform: 'uppercase',
                }}
              >
                Active Role Lens: {activeRole.title}
              </div>

              <h3
                style={{
                  fontSize: '1.75rem',
                  color: '#FFFFFF',
                  marginBottom: '10px',
                  lineHeight: 1.25,
                }}
              >
                {activeRole.subtitle}
              </h3>

              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}
              >
                {activeRole.pitch}
              </p>

              {/* Focus tags */}
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '10px', fontWeight: 600 }}>
                  Primary Focus Areas & Competencies:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeRole.focusAreas.map((area, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '4px 12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.8rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended CV Link */}
              <div
                style={{
                  padding: '16px 20px',
                  backgroundColor: 'rgba(13, 107, 82, 0.2)',
                  border: '1px solid var(--border-emerald)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-emerald)', fontWeight: 600, textTransform: 'uppercase' }}>
                    Tailored Document Match
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: 600 }}>
                    {activeRole.recommendedCvTitle}
                  </div>
                </div>

                <a
                  href="#cv-hub"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    backgroundColor: 'var(--color-primary-light)',
                    color: '#FFFFFF',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#26c291')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-light)')}
                >
                  <Download size={14} />
                  <span>Get This CV</span>
                </a>
              </div>
            </div>

            {/* Right Column: Key Metrics & Why Mahmoud */}
            <div>
              <div
                style={{
                  backgroundColor: 'rgba(10, 15, 18, 0.7)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '20px',
                }}
              >
                <h4
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-emerald)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  Core Impact Metrics in This Domain
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '14px' }}>
                  {activeRole.keyMetrics.map((km, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '14px',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '1.45rem',
                          fontWeight: 800,
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-heading)',
                          lineHeight: 1.1,
                          marginBottom: '4px',
                        }}
                      >
                        {km.value}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {km.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Roles */}
              <div
                style={{
                  padding: '20px 24px',
                  backgroundColor: 'rgba(10, 15, 18, 0.7)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontWeight: 600 }}>
                  Common Organizational Job Titles Matched:
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {activeRole.targetPositions}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
