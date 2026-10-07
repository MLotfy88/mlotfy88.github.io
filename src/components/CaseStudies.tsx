import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  Wrench, 
  Code2, 
  TrendingUp, 
  Award,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { caseStudies, type CaseStudy } from '../data/caseStudies';
import type { RoleLens } from '../data/roles';

interface CaseStudiesProps {
  activeRole?: RoleLens;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ activeRole }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(caseStudies[0].id);

  // Automatically select the most relevant case study when role changes
  React.useEffect(() => {
    if (!activeRole || activeRole.id === 'all') return;
    if (activeRole.id === 'healthcare-operations') {
      setSelectedCaseId('case-04-governance-restructuring');
    } else if (
      activeRole.id === 'supply-chain' || 
      activeRole.id === 'procurement' || 
      activeRole.id === 'demand-planning' || 
      activeRole.id === 'logistics-operations'
    ) {
      setSelectedCaseId('case-02-inventory-procurement');
    } else if (activeRole.id === 'business-operations') {
      setSelectedCaseId('case-01-profitability-transformation');
    } else if (activeRole.id === 'digital-transformation') {
      setSelectedCaseId('case-05-digital-transformation');
    } else if (activeRole.id === 'events-conferences' || activeRole.id === 'creative-media') {
      setSelectedCaseId('case-07-commercial-romi');
    }
  }, [activeRole?.id]);

  const activeCase = caseStudies.find((c) => c.id === selectedCaseId) || caseStudies[0];

  return (
    <section id="cases" className="section" style={{ backgroundColor: 'rgba(8, 12, 14, 0.95)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FileSpreadsheet size={14} />
            <span>Problem-to-Impact Narratives</span>
          </div>
          <h2 className="section-title">8 In-Depth Operational Case Studies</h2>
          <p className="section-subtitle">
            Rigorous documentation of complex systemic challenges, specific interventions, custom artifacts engineered, and verifiable business results.
          </p>
        </div>

        {/* 2-Column Interactive Layout: Selector Left, Deep-Dive Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 360px) 1fr',
            gap: '30px',
            alignItems: 'start',
          }}
          className="case-studies-container"
        >
          {/* Left Column: Case Selector List */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {caseStudies.map((cs) => {
              const isSelected = cs.id === selectedCaseId;
              return (
                <button
                  key={cs.id}
                  onClick={() => setSelectedCaseId(cs.id)}
                  style={{
                    padding: '16px 20px',
                    borderRadius: 'var(--radius-md)',
                    border: isSelected
                      ? '1px solid var(--border-emerald)'
                      : '1px solid var(--border-subtle)',
                    backgroundColor: isSelected
                      ? 'rgba(13, 107, 82, 0.25)'
                      : 'rgba(16, 24, 30, 0.7)',
                    color: '#FFFFFF',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 4px 16px rgba(13, 107, 82, 0.3)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'rgba(20, 30, 38, 0.85)';
                      e.currentTarget.style.borderColor = 'var(--border-medium)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'rgba(16, 24, 30, 0.7)';
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        color: isSelected ? 'var(--text-emerald)' : 'var(--text-muted)',
                        fontWeight: 700,
                      }}
                    >
                      CASE 0{cs.number}
                    </span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        color: isSelected ? '#E5A93C' : 'var(--text-muted)',
                      }}
                    >
                      {cs.timeframe}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.3 }}>
                    {cs.title}
                  </div>

                  <div style={{ fontSize: '0.78rem', color: isSelected ? 'var(--text-secondary)' : 'var(--text-muted)', lineHeight: 1.4 }}>
                    {cs.impactSummary}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Case Study Full Breakdown */}
          <div
            className="glass-card"
            style={{
              padding: '36px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-emerald)',
              background: 'linear-gradient(135deg, rgba(16, 24, 30, 0.95) 0%, rgba(13, 107, 82, 0.08) 100%)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
            }}
          >
            {/* Case Header */}
            <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '24px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    backgroundColor: 'var(--color-primary-light)',
                    color: '#FFFFFF',
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 700,
                  }}
                >
                  CASE STUDY 0{activeCase.number}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-emerald)', fontWeight: 600 }}>
                  {activeCase.domain}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  • {activeCase.timeframe}
                </span>
              </div>

              <h3 style={{ fontSize: '1.85rem', color: '#FFFFFF', lineHeight: 1.25, marginBottom: '6px' }}>
                {activeCase.title}
              </h3>
              <div style={{ fontSize: '1.05rem', color: '#E5A93C', fontWeight: 500 }}>
                {activeCase.subtitle}
              </div>
            </div>

            {/* Impact Callout Banner */}
            <div
              style={{
                padding: '16px 20px',
                backgroundColor: 'rgba(13, 107, 82, 0.2)',
                borderLeft: '4px solid var(--text-emerald)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '28px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Award size={22} color="var(--text-emerald)" style={{ flexShrink: 0 }} />
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-emerald)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Quantified Result:
                </span>
                <div style={{ fontSize: '0.98rem', color: '#FFFFFF', fontWeight: 600 }}>
                  {activeCase.impactSummary}
                </div>
              </div>
            </div>

            {/* Step-by-Step Problem-to-Impact Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              
              {/* 1. Problem */}
              <div style={{ display: 'flex', gap: '14px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <AlertCircle size={16} color="#F87171" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#F87171', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    1. Problem & Operational Friction:
                  </div>
                  <div style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {activeCase.problem}
                  </div>
                </div>
              </div>

              {/* 2. Diagnosis */}
              <div style={{ display: 'flex', gap: '14px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Eye size={16} color="#38BDF8" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#38BDF8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    2. Diagnosis (Root-Cause Discovery):
                  </div>
                  <div style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {activeCase.whatISaw}
                  </div>
                </div>
              </div>

              {/* 3. Intervention */}
              <div style={{ display: 'flex', gap: '14px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(229, 169, 60, 0.15)',
                    border: '1px solid rgba(229, 169, 60, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Wrench size={16} color="#E5A93C" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#E5A93C', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    3. Intervention (Strategic Process Design):
                  </div>
                  <div style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {activeCase.whatIDid}
                  </div>
                </div>
              </div>

              {/* 4. System / Action */}
              <div style={{ display: 'flex', gap: '14px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(167, 139, 250, 0.15)',
                    border: '1px solid rgba(167, 139, 250, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Code2 size={16} color="#A78BFA" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#A78BFA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    4. System / Action (Custom Architecture & Execution):
                  </div>
                  <div style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {activeCase.whatIBuilt}
                  </div>
                </div>
              </div>

              {/* 5. Measured Outcome */}
              <div style={{ display: 'flex', gap: '14px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(52, 211, 153, 0.15)',
                    border: '1px solid rgba(52, 211, 153, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <TrendingUp size={16} color="#34D399" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#34D399', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    5. Measured Outcome (Verified Business Results):
                  </div>
                  <div style={{ fontSize: '0.94rem', color: '#FFFFFF', fontWeight: 600, lineHeight: 1.65 }}>
                    {activeCase.result}
                  </div>
                </div>
              </div>

              {/* 6. Demonstrates */}
              <div
                style={{
                  marginTop: '12px',
                  padding: '16px 20px',
                  backgroundColor: 'rgba(10, 16, 20, 0.7)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', fontWeight: 600 }}>
                  Strategic Executive Competency Demonstrated:
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-emerald)', fontWeight: 500, lineHeight: 1.5 }}>
                  {activeCase.demonstrates}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .case-studies-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
