import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import type { RoleCapability } from '../data/rolesData';

interface RoleCapabilitiesProps {
  capabilities: RoleCapability[];
  roleTitle: string;
}

export const RoleCapabilities: React.FC<RoleCapabilitiesProps> = ({ capabilities, roleTitle }) => {
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
            Competency Matrix
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.3vw, 2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
            Targeted Core Capabilities for {roleTitle}
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '0.95rem', margin: 0 }}>
            Curated functional competencies verified through audited executive performance and operational turnaround.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '18px'
          }}
        >
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#0E1418',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '20px 22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.2s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F8FAFC' }}>
                    {cap.name}
                  </div>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < cap.level ? '#34D399' : 'transparent'}
                        color={i < cap.level ? '#34D399' : 'rgba(255, 255, 255, 0.2)'}
                      />
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: 1.5, margin: 0 }}>
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
