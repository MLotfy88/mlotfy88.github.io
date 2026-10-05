import React from 'react';
import { DollarSign, TrendingUp, AlertTriangle, ShieldCheck, ArrowUpRight, CheckCircle2, Calendar } from 'lucide-react';
import { financialMetrics, operatingUnderPressure } from '../data/financials';

export const FinancialImpact: React.FC = () => {
  return (
    <section id="financials" className="section" style={{ backgroundColor: 'rgba(10, 14, 18, 0.85)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <DollarSign size={14} />
            <span>Master Part 6 & 7 • Financial Deep-Dive</span>
          </div>
          <h2 className="section-title">Financial Impact & Audited Performance</h2>
          <p className="section-subtitle">
            Operations without financial stewardship is incomplete. How operational optimization directly expanded departmental margins and preserved solvency during national macroeconomic shocks.
          </p>
        </div>

        {/* 6 Key Financial Comparison Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '44px',
          }}
        >
          {financialMetrics.comparison.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '28px 24px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #34D399, #38BDF8)',
                }}
              />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Audited Master Metric
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#34D399',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                    }}
                  >
                    <ArrowUpRight size={14} />
                    <span>Verified</span>
                  </span>
                </div>

                <div
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 2.7rem)',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    color: '#FFFFFF',
                    lineHeight: 1.05,
                    marginBottom: '8px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {item.growth}
                </div>

                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {item.metric}
                </h3>
              </div>

              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                {item.context}
              </p>
            </div>
          ))}
        </div>

        {/* 3-Year Trend Timeline (2023 → 2024 → 2025) */}
        <div
          className="glass-card"
          style={{
            padding: '28px 32px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '48px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Calendar size={18} color="var(--text-emerald)" />
            <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', margin: 0 }}>
              Multi-Year Financial Trend: 2023 → 2024 → 2025
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
            }}
          >
            {financialMetrics.trendData.map((t, idx) => (
              <div
                key={idx}
                style={{
                  padding: '18px 20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 'var(--radius-sm)',
                  borderLeft: '3px solid var(--color-primary-light)',
                }}
              >
                <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-emerald)', fontWeight: 700, marginBottom: '4px' }}>
                  FISCAL YEAR {t.year}
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                  {t.revenueStatus}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#E5A93C', fontWeight: 600, marginBottom: '6px' }}>
                  {t.profitStatus}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  {t.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 14: Operating Under Pressure */}
        <div
          className="glass-card"
          style={{
            padding: '36px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(229, 169, 60, 0.3)',
            background: 'linear-gradient(135deg, rgba(16, 24, 30, 0.95) 0%, rgba(229, 169, 60, 0.05) 100%)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <AlertTriangle size={24} color="#E5A93C" />
              <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF', margin: 0 }}>
                {operatingUnderPressure.title}
              </h3>
            </div>
            <span
              style={{
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: '#E5A93C',
                backgroundColor: 'rgba(229, 169, 60, 0.15)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
              }}
            >
              Master Part 7 Economic Context
            </span>
          </div>

          <p style={{ fontSize: '1.05rem', color: '#E5A93C', fontWeight: 600, marginBottom: '24px' }}>
            {operatingUnderPressure.subtitle}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {/* The 6 Hostile Macroeconomic Factors */}
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, marginBottom: '14px' }}>
                Macroeconomic Hostile Forces:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {operatingUnderPressure.contextFactors.map((cf, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '12px 14px',
                      backgroundColor: 'rgba(239, 68, 68, 0.06)',
                      border: '1px solid rgba(239, 68, 68, 0.15)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <strong style={{ color: '#F87171', fontSize: '0.88rem', display: 'block', marginBottom: '2px' }}>
                      {cf.factor}
                    </strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      {cf.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* How I Responded: The 7 Strategic Tactics */}
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-emerald)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, marginBottom: '14px' }}>
                How I Responded (Strategic Operational Actions):
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {operatingUnderPressure.howIResponded.map((resp, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      padding: '12px 14px',
                      backgroundColor: 'rgba(13, 107, 82, 0.12)',
                      border: '1px solid var(--border-emerald)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <ShieldCheck size={16} color="var(--text-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#FFFFFF', fontSize: '0.88rem', display: 'block', marginBottom: '2px' }}>
                        {resp.strategy}
                      </strong>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        {resp.action}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Line Callout */}
          <div
            style={{
              marginTop: '28px',
              padding: '16px 20px',
              backgroundColor: 'rgba(13, 107, 82, 0.25)',
              borderLeft: '4px solid var(--text-emerald)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.96rem',
              color: '#FFFFFF',
              fontWeight: 600,
            }}
          >
            The Bottom Line: <span style={{ color: 'var(--text-emerald)' }}>{operatingUnderPressure.bottomLine}</span>
          </div>

        </div>

      </div>
    </section>
  );
};
