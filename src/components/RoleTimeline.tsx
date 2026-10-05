import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import type { RoleTimelineItem } from '../data/rolesData';

interface RoleTimelineProps {
  timeline: RoleTimelineItem[];
  roleTitle: string;
}

export const RoleTimeline: React.FC<RoleTimelineProps> = ({ timeline, roleTitle }) => {
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
        <div style={{ marginBottom: '36px' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-emerald)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
            Career Progression
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.3vw, 2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
            Targeted Career Experience for {roleTitle}
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '0.95rem', margin: 0 }}>
            Chronological positions and leadership milestones directly relevant to this functional domain.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {timeline.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#0E1418',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '24px 28px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                    {item.role}
                  </h3>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-emerald)', fontWeight: 600 }}>
                    {item.organization}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#CBD5E1', backgroundColor: 'rgba(255, 255, 255, 0.04)', padding: '4px 10px', borderRadius: '6px' }}>
                    <Calendar size={14} color="#94A3B8" />
                    <span>{item.period}</span>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#94A3B8' }}>
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <p style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.55, marginBottom: '16px' }}>
                {item.summary}
              </p>

              {item.highlights && item.highlights.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '14px' }}>
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} color="#34D399" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: 1.45 }}>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
