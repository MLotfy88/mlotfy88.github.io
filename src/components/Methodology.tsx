import React, { useState } from 'react';
import { Compass, CheckCircle2, ArrowRight, Lightbulb, Workflow } from 'lucide-react';
import { methodologySteps, foundationalPhilosophy, corePrinciples } from '../data/methodology';

export const Methodology: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = methodologySteps[activeStepIndex];

  return (
    <section id="methodology" className="section" style={{ backgroundColor: 'rgba(8, 12, 14, 0.9)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Compass size={14} />
            <span>Operational Philosophy</span>
          </div>
          <h2 className="section-title">How I Think: The 7-Step Framework</h2>
          <p className="section-subtitle">
            Sustainable operational excellence is never accidental. It is engineered through a disciplined cycle of observation, system design, execution, and continuous measurement.
          </p>
        </div>

        {/* "The Names Came Later" Narrative Card */}
        <div
          className="glass-card"
          style={{
            padding: '32px 36px',
            borderRadius: 'var(--radius-lg)',
            borderLeft: '4px solid #E5A93C',
            marginBottom: '48px',
            background: 'linear-gradient(135deg, rgba(16, 24, 30, 0.9) 0%, rgba(229, 169, 60, 0.05) 100%)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <Lightbulb size={20} color="#E5A93C" />
            <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', margin: 0 }}>
              {foundationalPhilosophy.title}
            </h3>
          </div>
          <p style={{ fontSize: '1.02rem', fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '14px' }}>
            "{foundationalPhilosophy.quote}"
          </p>
          <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
            {foundationalPhilosophy.narrative}
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '16px',
            marginBottom: '28px',
          }}
        >
          {methodologySteps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                style={{
                  flex: '1 0 auto',
                  minWidth: '130px',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: isActive ? '1px solid var(--border-emerald)' : '1px solid var(--border-subtle)',
                  backgroundColor: isActive ? 'rgba(13, 107, 82, 0.25)' : 'rgba(16, 24, 30, 0.6)',
                  color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 16px rgba(13, 107, 82, 0.3)' : 'none',
                }}
              >
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: isActive ? 'var(--text-emerald)' : 'var(--text-muted)', marginBottom: '2px' }}>
                  STEP 0{step.stepNumber}
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: isActive ? '#FFFFFF' : 'var(--text-secondary)' }}>
                  {step.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div
          className="glass-card"
          style={{
            padding: '36px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-emerald)',
            background: 'rgba(16, 24, 30, 0.95)',
            marginBottom: '48px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
            <span
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                fontWeight: 800,
                fontFamily: 'var(--font-heading)',
              }}
            >
              0{activeStep.stepNumber}
            </span>
            <div>
              <h3 style={{ fontSize: '1.65rem', color: '#FFFFFF', margin: 0, lineHeight: 1.2 }}>
                {activeStep.name}: <span style={{ color: 'var(--text-emerald)', fontWeight: 400 }}>{activeStep.action}</span>
              </h3>
            </div>
          </div>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '24px' }}>
            {activeStep.description}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              backgroundColor: 'rgba(10, 16, 20, 0.6)',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontWeight: 600 }}>
                Operational Tools & Artifacts Deployed:
              </div>
              <div style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {activeStep.tools}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-emerald)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontWeight: 600 }}>
                Demonstrated Real-World Evidence:
              </div>
              <div style={{ fontSize: '0.94rem', color: '#FFFFFF', lineHeight: 1.6, fontWeight: 500 }}>
                {activeStep.evidence}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Foundational Principles Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {corePrinciples.map((principle, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '28px 24px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <Workflow size={18} color="var(--text-emerald)" />
                <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', margin: 0 }}>
                  {principle.title}
                </h4>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
                {principle.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
