import React, { useState } from 'react';
import { Calendar, Briefcase, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { timelineEvents, TimelineEvent } from '../data/timeline';

export const TimelineSection: React.FC = () => {
  const [filterDomain, setFilterDomain] = useState<string>('all');

  const domains = [
    { id: 'all', label: 'All 15+ Years' },
    { id: 'Healthcare', label: 'Healthcare & Hospital' },
    { id: 'Technology', label: 'HealthTech & Software' },
    { id: 'Manufacturing', label: 'FMCG & Logistics' },
    { id: 'Media', label: 'Media Production' },
    { id: 'Entrepreneurship', label: 'Conferences & Events' },
  ];

  const filteredEvents = timelineEvents.filter((event) => {
    if (filterDomain === 'all') return true;
    return event.domain === filterDomain;
  });

  return (
    <section id="timeline" className="section" style={{ backgroundColor: 'rgba(10, 14, 18, 0.75)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Calendar size={14} />
            <span>Career Evolution</span>
          </div>
          <h2 className="section-title">Professional Timeline (2008 – 2026)</h2>
          <p className="section-subtitle">
            An organic progression from large-scale event logistics and commercial media production to high-acuity healthcare operations, hospital P&L leadership, and digital systems engineering.
          </p>
        </div>

        {/* Domain Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '48px',
          }}
        >
          {domains.map((dom) => {
            const isActive = filterDomain === dom.id;
            return (
              <button
                key={dom.id}
                onClick={() => setFilterDomain(dom.id)}
                style={{
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive ? 'var(--color-primary)' : 'rgba(20, 28, 34, 0.6)',
                  border: isActive ? '1px solid var(--color-primary-light)' : '1px solid var(--border-subtle)',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {dom.label}
              </button>
            );
          })}
        </div>

        {/* Timeline Flow */}
        <div
          style={{
            position: 'relative',
            maxWidth: '920px',
            margin: '0 auto',
            paddingLeft: '32px',
          }}
        >
          {/* Vertical Timeline Rule */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              bottom: '12px',
              left: '7px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--color-primary-light) 0%, rgba(29, 158, 117, 0.2) 100%)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {filteredEvents.map((item, idx) => (
              <div
                key={item.id}
                style={{
                  position: 'relative',
                }}
              >
                {/* Timeline Dot Indicator */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-32px',
                    top: '8px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: idx === 0 ? 'var(--color-primary-light)' : 'var(--bg-surface-elevated)',
                    border: '3px solid var(--color-primary-dark)',
                    boxShadow: idx === 0 ? '0 0 12px var(--color-primary-light)' : 'none',
                    transform: 'translateX(0)',
                  }}
                />

                {/* Event Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: '24px 28px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-emerald)',
                          fontWeight: 700,
                        }}
                      >
                        {item.period}
                      </span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {item.domain}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <MapPin size={13} color="var(--text-muted)" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '4px', lineHeight: 1.3 }}>
                    {item.role}
                  </h3>

                  <div style={{ fontSize: '0.92rem', color: '#E5A93C', fontWeight: 600, marginBottom: '12px' }}>
                    {item.organization}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: item.highlights.length > 0 ? '14px' : '0' }}>
                    {item.summary}
                  </p>

                  {/* Highlights if any */}
                  {item.highlights.length > 0 && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {item.highlights.map((hl, hIdx) => (
                        <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                          <CheckCircle2 size={14} color="var(--text-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
