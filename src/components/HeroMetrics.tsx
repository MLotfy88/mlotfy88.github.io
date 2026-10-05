import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Activity, 
  Code2, 
  DollarSign, 
  Clock,
  Sparkles,
  Info
} from 'lucide-react';
import { heroMetrics, secondaryMetrics } from '../data/metrics';

export const HeroMetrics: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'profit-growth': return <TrendingUp size={24} color="#34D399" />;
      case 'monthly-procedures': return <Activity size={24} color="#38BDF8" />;
      case 'cancellations-zero': return <ShieldCheck size={24} color="#E5A93C" />;
      case 'conferences-count': return <Sparkles size={24} color="#A78BFA" />;
      case 'experience-years': return <Clock size={24} color="#34D399" />;
      case 'systems-built': return <Code2 size={24} color="#F472B6" />;
      default: return <CheckCircle2 size={24} color="#34D399" />;
    }
  };

  return (
    <section id="results-summary" className="section" style={{ paddingTop: '40px', paddingBottom: '70px' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '44px' }}>
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Demonstrated Proof Signals</span>
          </div>
          <h2 className="section-title">6 Pillars of Operational Proof</h2>
          <p className="section-subtitle">
            Verifiable operational realities spanning financial turnaround, high-acuity clinical throughput, zero-defect reliability, and practical system-building.
          </p>
        </div>

        {/* 7 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          {heroMetrics.map((metric) => (
            <div
              key={metric.id}
              className="glass-card"
              style={{
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Subtle top glow line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, var(--color-primary-light), transparent)',
                }}
              />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getIcon(metric.id)}
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    Audited KPI
                  </span>
                </div>

                <div
                  style={{
                    fontSize: 'clamp(2rem, 3vw, 2.6rem)',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    color: '#FFFFFF',
                    lineHeight: 1.1,
                    marginBottom: '8px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {metric.metric}
                </div>

                <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                  }}
                >
                  {metric.label}
                </div>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.55,
                    marginBottom: '16px',
                  }}
                >
                  {metric.context}
                </p>
              </div>

              {/* Source/Verification note */}
              <div
                style={{
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '6px',
                  fontSize: '0.75rem',
                  color: 'var(--text-emerald)',
                }}
              >
                <Info size={13} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{metric.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Operational Stats Bar */}
        <div
          style={{
            backgroundColor: 'rgba(10, 16, 20, 0.85)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '20px 30px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px',
            textAlign: 'center',
          }}
        >
          {secondaryMetrics.map((stat, i) => (
            <div key={i} style={{ borderRight: i < secondaryMetrics.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none' }}>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-emerald)', fontFamily: 'var(--font-heading)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                {stat.context}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
