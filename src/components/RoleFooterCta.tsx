import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import type { RoleData } from '../data/rolesData';
import { identityData } from '../data/identity';

interface RoleFooterCtaProps {
  currentRole: RoleData;
}

export const RoleFooterCta: React.FC<RoleFooterCtaProps> = ({ currentRole }) => {
  const otherRoles = [
    { name: 'Healthcare Operations', slug: 'healthcare-ops' },
    { name: 'Supply Chain Management', slug: 'supply-chain' },
    { name: 'Procurement & Sourcing', slug: 'procurement' },
    { name: 'Business Operations', slug: 'business-ops' },
    { name: 'Events & Conferences', slug: 'events' },
  ].filter((r) => r.slug !== currentRole.slug);

  return (
    <section 
      style={{
        padding: '72px 0 60px',
        backgroundColor: '#080C0E',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
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
        {/* Main CTA Card */}
        <div 
          style={{
            backgroundColor: '#0E1418',
            border: '1px solid rgba(29, 158, 117, 0.35)',
            borderRadius: '20px',
            padding: '40px',
            marginBottom: '48px',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-emerald)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Next Steps · Direct Executive Engagement
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                Initiate Contact Regarding {currentRole.roleTitle}
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '0.98rem', maxWidth: '680px', margin: 0 }}>
                Available for executive leadership roles, clinical operational turnarounds, and strategic consulting engagements.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={currentRole.cvPdf}
                download
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  backgroundColor: 'var(--color-primary)',
                  color: '#FFFFFF',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(13, 107, 82, 0.4)',
                  transition: 'all 0.2s ease'
                }}
              >
                <Download size={18} />
                <span>Download Targeted CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'rgba(52, 211, 153, 0.1)', color: '#34D399' }}>
                <Mail size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>Direct Email</div>
                <a href={`mailto:${identityData.contact.email}`} style={{ fontSize: '0.92rem', color: '#F8FAFC', fontWeight: 600, textDecoration: 'none' }}>
                  {identityData.contact.email}
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'rgba(52, 211, 153, 0.1)', color: '#34D399' }}>
                <Phone size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>Direct Phone</div>
                <a href={`tel:${identityData.contact.phone.replace(/\s+/g, '')}`} style={{ fontSize: '0.92rem', color: '#F8FAFC', fontWeight: 600, textDecoration: 'none' }}>
                  {identityData.contact.phone}
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'rgba(52, 211, 153, 0.1)', color: '#34D399' }}>
                <LinkedinIcon size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>LinkedIn Profile</div>
                <a href={identityData.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.92rem', color: '#F8FAFC', fontWeight: 600, textDecoration: 'none' }}>
                  {identityData.contact.linkedin}
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'rgba(52, 211, 153, 0.1)', color: '#34D399' }}>
                <MapPin size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>Location & Mobility</div>
                <div style={{ fontSize: '0.86rem', color: '#CBD5E1', lineHeight: 1.3 }}>
                  Alexandria, Egypt · Available for: Cairo, Alexandria & Sharkia
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Other Roles Bar */}
        <div>
          <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
            Explore Other Professional Lenses
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
            {otherRoles.map((r) => (
              <Link
                key={r.slug}
                to={`/${r.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 18px',
                  backgroundColor: '#0E1418',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  color: '#CBD5E1',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(52, 211, 153, 0.4)';
                  e.currentTarget.style.color = '#34D399';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#CBD5E1';
                }}
              >
                <span>{r.name}</span>
                <ArrowRight size={15} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
