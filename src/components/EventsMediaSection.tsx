import React, { useState } from 'react';
import { Users2, Film, Rocket, CheckCircle2 } from 'lucide-react';
import { eventsData, mediaProductionData, venturesData } from '../data/eventsMedia';

export const EventsMediaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'conferences' | 'media' | 'ventures'>('conferences');

  return (
    <section id="conferences" className="section" style={{ backgroundColor: 'rgba(8, 12, 14, 0.92)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Users2 size={14} />
            <span>Master Part 3.9 & 3.10 • Part 5.8</span>
          </div>
          <h2 className="section-title">Events, Experiences & Media Production</h2>
          <p className="section-subtitle">
            Healthcare + Events + Production + Operations: a rare combination of large-scale audience staging, high-budget commercial film logistics, and community initiatives.
          </p>
        </div>

        {/* Tab Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          <button
            onClick={() => setActiveTab('conferences')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.86rem',
              fontWeight: activeTab === 'conferences' ? 700 : 500,
              backgroundColor: activeTab === 'conferences' ? 'var(--color-primary)' : 'rgba(20, 28, 34, 0.6)',
              border: activeTab === 'conferences' ? '1px solid var(--color-primary-light)' : '1px solid var(--border-subtle)',
              color: activeTab === 'conferences' ? '#FFFFFF' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <Users2 size={16} />
            <span>20+ Conferences & Medical Events</span>
          </button>

          <button
            onClick={() => setActiveTab('media')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.86rem',
              fontWeight: activeTab === 'media' ? 700 : 500,
              backgroundColor: activeTab === 'media' ? 'var(--color-primary)' : 'rgba(20, 28, 34, 0.6)',
              border: activeTab === 'media' ? '1px solid var(--color-primary-light)' : '1px solid var(--border-subtle)',
              color: activeTab === 'media' ? '#FFFFFF' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <Film size={16} />
            <span>Commercial Film & TV Logistics (Named Brands)</span>
          </button>

          <button
            onClick={() => setActiveTab('ventures')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.86rem',
              fontWeight: activeTab === 'ventures' ? 700 : 500,
              backgroundColor: activeTab === 'ventures' ? 'var(--color-primary)' : 'rgba(20, 28, 34, 0.6)',
              border: activeTab === 'ventures' ? '1px solid var(--color-primary-light)' : '1px solid var(--border-subtle)',
              color: activeTab === 'ventures' ? '#FFFFFF' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <Rocket size={16} />
            <span>Entrepreneurship & Community</span>
          </button>
        </div>

        {/* 1. Conferences Tab */}
        {activeTab === 'conferences' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {eventsData.map((event) => (
              <div
                key={event.id}
                className="glass-card"
                style={{
                  padding: '28px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-emerald)', fontWeight: 600 }}>
                      {event.year}
                    </span>
                    <span style={{ fontSize: '0.74rem', color: '#E5A93C', fontWeight: 600 }}>
                      {event.scale}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '6px', lineHeight: 1.3 }}>
                    {event.title}
                  </h3>

                  <div style={{ fontSize: '0.86rem', color: 'var(--text-emerald)', fontWeight: 600, marginBottom: '4px' }}>
                    {event.role}
                  </div>

                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                    {event.organization} • {event.location}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                    {event.description}
                  </p>
                </div>

                <div style={{ paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {event.highlights.map((hl, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={13} color="var(--text-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. Media Logistics Tab */}
        {activeTab === 'media' && (
          <div>
            <div
              className="glass-card"
              style={{
                padding: '28px 32px',
                borderRadius: 'var(--radius-md)',
                marginBottom: '32px',
                borderLeft: '4px solid var(--color-primary-light)',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '8px' }}>
                Commercial Film & Television Production Logistics (2014 – 2019)
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                {mediaProductionData.overview}
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              {mediaProductionData.namedProductions.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '24px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-emerald)', fontWeight: 600 }}>
                      {item.years}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#E5A93C', fontWeight: 600 }}>
                      {item.campaign}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '8px' }}>
                    {item.brand}
                  </h4>

                  <div style={{ marginBottom: '10px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                      Roles Held:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {item.roles.map((r, rIdx) => (
                        <span key={rIdx} style={{ fontSize: '0.76rem', padding: '2px 8px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px', color: 'var(--text-primary)' }}>
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    <strong style={{ color: 'var(--text-muted)' }}>Operational Scope: </strong>{item.scope}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Ventures Tab */}
        {activeTab === 'ventures' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {venturesData.map((item, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '28px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-emerald)', fontWeight: 600 }}>
                      {item.years}
                    </span>
                    <span style={{ fontSize: '0.76rem', color: '#E5A93C', fontWeight: 600 }}>
                      {item.role}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.3 }}>
                    {item.name}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.82rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  <strong style={{ color: 'var(--text-emerald)' }}>Community Impact: </strong>{item.impact}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
