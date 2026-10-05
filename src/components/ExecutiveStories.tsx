import React from 'react';
import { CheckCircle2, AlertCircle, Wrench, Trophy, Sparkles } from 'lucide-react';
import type { StoryItem } from '../data/rolesData';

interface ExecutiveStoriesProps {
  stories: StoryItem[];
  roleTitle: string;
}

export const ExecutiveStories: React.FC<ExecutiveStoriesProps> = ({ stories, roleTitle }) => {
  return (
    <section 
      style={{
        padding: '64px 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
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
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--text-emerald)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
            <Sparkles size={14} />
            <span>Operational Evidence</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
            Execution Case Studies: Problem → Action → Result
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '0.95rem', maxWidth: '760px', margin: 0 }}>
            Every claim is supported by documented operational interventions, structured problem analysis, and audited outcomes.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {stories.map((story, index) => (
            <div
              key={story.id}
              style={{
                backgroundColor: '#0E1418',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
              }}
            >
              {/* Story Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '18px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span 
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        width: '24px', 
                        height: '24px', 
                        borderRadius: '50%', 
                        backgroundColor: 'rgba(13, 107, 82, 0.3)', 
                        color: '#34D399', 
                        fontSize: '0.75rem', 
                        fontWeight: 700 
                      }}
                    >
                      0{index + 1}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-emerald)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Executive Case Story
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '4px' }}>
                    {story.title}
                  </h3>
                  <div style={{ fontSize: '0.9rem', color: '#94A3B8' }}>
                    {story.subtitle}
                  </div>
                </div>

                <div 
                  style={{
                    padding: '4px 12px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.75rem',
                    color: '#CBD5E1',
                    alignSelf: 'flex-start'
                  }}
                >
                  Evidence-Based
                </div>
              </div>

              {/* Story Body: 2-column or structured layout */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' }}>
                {/* Left: The Challenge & Observation */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ padding: '16px', backgroundColor: 'rgba(239, 68, 68, 0.04)', border: '1px solid rgba(239, 68, 68, 0.15)', borderRadius: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F87171', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                      <AlertCircle size={15} />
                      <span>The Operational Challenge</span>
                    </div>
                    <p style={{ color: '#E2E8F0', fontSize: '0.9rem', lineHeight: 1.55, margin: 0 }}>
                      {story.problem}
                    </p>
                  </div>

                  <div style={{ padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '10px' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Diagnostic Observation (What I Saw)
                    </div>
                    <p style={{ color: '#CBD5E1', fontSize: '0.88rem', lineHeight: 1.55, margin: 0 }}>
                      {story.whatISaw}
                    </p>
                  </div>
                </div>

                {/* Right: The Strategic Action & System Built */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ padding: '16px', backgroundColor: 'rgba(52, 211, 153, 0.04)', border: '1px solid rgba(52, 211, 153, 0.18)', borderRadius: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34D399', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                      <Wrench size={15} />
                      <span>Strategic Intervention (What I Did)</span>
                    </div>
                    <p style={{ color: '#E2E8F0', fontSize: '0.9rem', lineHeight: 1.55, margin: 0 }}>
                      {story.whatIDid}
                    </p>
                  </div>

                  {story.whatIBuilt && (
                    <div style={{ padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '10px' }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '6px' }}>
                        Operational Framework / Systems Built
                      </div>
                      <p style={{ color: '#CBD5E1', fontSize: '0.88rem', lineHeight: 1.55, margin: 0 }}>
                        {story.whatIBuilt}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Story Result Bar */}
              <div 
                style={{
                  backgroundColor: 'rgba(13, 107, 82, 0.15)',
                  border: '1px solid rgba(29, 158, 117, 0.35)',
                  borderRadius: '12px',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px'
                }}
              >
                <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'rgba(52, 211, 153, 0.2)', color: '#34D399', flexShrink: 0, marginTop: '2px' }}>
                  <Trophy size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-emerald)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Audited Quantified Result
                  </div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.5, marginBottom: '6px' }}>
                    {story.result}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                    <strong style={{ color: '#CBD5E1' }}>Demonstrates:</strong> {story.demonstrates}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
