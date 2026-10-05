import React from 'react';
import { Cpu, Code2, Layers, CheckCircle2 } from 'lucide-react';
import type { DigitalEnabler } from '../data/rolesData';

interface DigitalEnablerBoxProps {
  enabler: DigitalEnabler;
}

export const DigitalEnablerBox: React.FC<DigitalEnablerBoxProps> = ({ enabler }) => {
  return (
    <section 
      style={{
        padding: '64px 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: 'rgba(8, 12, 14, 0.5)'
      }}
    >
      <div 
        className="container"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 24px'
        }}
      >
        <div 
          style={{
            backgroundColor: '#0E1418',
            border: '1px solid rgba(29, 158, 117, 0.25)',
            borderRadius: '20px',
            padding: '36px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background Ambient Glow */}
          <div 
            style={{
              position: 'absolute',
              top: '-10%',
              right: '-5%',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(13, 107, 82, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          {/* Section Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--text-emerald)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                <Cpu size={14} />
                <span>Digital Transformation as an Operational Enabler</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.3vw, 2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>
                {enabler.title}
              </h2>
              <div style={{ fontSize: '0.95rem', color: '#94A3B8', fontStyle: 'italic', marginBottom: '6px' }}>
                "The technology was not the goal. The goal was always to improve the operation."
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-emerald)', fontWeight: 500 }}>
                {enabler.subtitle}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {enabler.systemsSummary && (
                <div style={{ padding: '8px 16px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase' }}>Scope</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#F8FAFC', fontFamily: 'var(--font-mono)' }}>{enabler.systemsSummary}</div>
                </div>
              )}
              <div style={{ padding: '8px 16px', borderRadius: '8px', backgroundColor: 'rgba(13, 107, 82, 0.2)', border: '1px solid rgba(29, 158, 117, 0.35)', textAlign: 'center' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-emerald)', textTransform: 'uppercase' }}>External Budget</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#34D399', fontFamily: 'var(--font-mono)' }}>{enabler.externalCost}</div>
              </div>
            </div>
          </div>

          <p style={{ color: '#CBD5E1', fontSize: '0.98rem', lineHeight: 1.6, maxWidth: '880px', marginBottom: '28px' }}>
            {enabler.description}
          </p>

          {/* Platforms Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {enabler.platforms.map((p, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '12px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F8FAFC' }}>
                      {p.name}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-emerald)', fontWeight: 600, fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>
                    {p.tech}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '14px' }}>
                    {p.description}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '10px', fontSize: '0.8rem', color: '#CBD5E1' }}>
                  <strong style={{ color: '#34D399' }}>Impact: </strong>{p.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
