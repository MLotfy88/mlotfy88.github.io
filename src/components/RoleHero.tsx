import React from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, ArrowLeft, Mail, Phone, ExternalLink } from 'lucide-react';
import type { RoleData } from '../data/rolesData';
import { identityData } from '../data/identity';

interface RoleHeroProps {
  role: RoleData;
}

export const RoleHero: React.FC<RoleHeroProps> = ({ role }) => {
  return (
    <section 
      style={{
        paddingTop: '120px',
        paddingBottom: '48px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'linear-gradient(180deg, rgba(13, 107, 82, 0.08) 0%, rgba(8, 12, 14, 0) 100%)',
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
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#94A3B8',
              fontSize: '0.85rem',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#34D399')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
          >
            <ArrowLeft size={16} />
            <span>Back to Executive Career Hub</span>
          </Link>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 12px',
              backgroundColor: 'rgba(13, 107, 82, 0.18)',
              border: '1px solid rgba(29, 158, 117, 0.35)',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--text-emerald)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}
          >
            Targeted Role Dossier
          </div>
        </div>

        {/* Role Title and Header */}
        <div style={{ maxWidth: '980px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 500 }}>
              Professional Lens:
            </span>
            <span 
              style={{
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#34D399',
                backgroundColor: 'rgba(52, 211, 153, 0.1)',
                padding: '2px 10px',
                borderRadius: '6px',
                border: '1px solid rgba(52, 211, 153, 0.2)'
              }}
            >
              {role.roleBadge}
            </span>
          </div>

          <h1 
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.025em',
              lineHeight: 1.18,
              marginBottom: '14px'
            }}
          >
            {role.roleTitle}
          </h1>

          <p 
            style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              color: '#94A3B8',
              lineHeight: 1.5,
              fontWeight: 400,
              maxWidth: '860px'
            }}
          >
            {role.subtitle}
          </p>
        </div>

        {/* Executive Value Proposition Box */}
        <div 
          style={{
            backgroundColor: '#0E1418',
            border: '1px solid rgba(29, 158, 117, 0.3)',
            borderRadius: '16px',
            padding: '28px 32px',
            marginBottom: '36px',
            position: 'relative',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-emerald)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
            Executive Value Proposition
          </div>
          <p 
            style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.22rem)',
              lineHeight: 1.6,
              color: '#F8FAFC',
              fontWeight: 500,
              fontStyle: 'italic',
              margin: 0
            }}
          >
            "{role.valueProposition}"
          </p>
        </div>

        {/* Direct Action Bar: Targeted CVs & Contact */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            padding: '16px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.025)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            marginBottom: '40px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 500 }}>
              Tailored Dossier Assets:
            </span>
            <a
              href={role.cvPdf}
              download
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                backgroundColor: 'var(--color-primary)',
                color: '#FFFFFF',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.88rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(13, 107, 82, 0.35)',
                transition: 'all 0.2s ease'
              }}
            >
              <Download size={16} />
              <span>Download {role.cvTitle}</span>
            </a>

          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={`mailto:${identityData.contact.email}?subject=Regarding ${role.roleTitle} Position`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.85rem',
                color: '#CBD5E1',
                textDecoration: 'none',
                padding: '6px 12px',
                borderRadius: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)'
              }}
            >
              <Mail size={15} color="#34D399" />
              <span>Direct Email</span>
            </a>
            <a
              href={`tel:${identityData.contact.phone.replace(/\s+/g, '')}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.85rem',
                color: '#CBD5E1',
                textDecoration: 'none',
                padding: '6px 12px',
                borderRadius: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)'
              }}
            >
              <Phone size={15} color="#34D399" />
              <span>{identityData.contact.phone}</span>
            </a>
          </div>
        </div>

        {/* Quantified Metrics Grid */}
        <div>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>
            Verified Operational & Financial Proof Points
          </div>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px'
            }}
          >
            {role.metrics.map((m, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#0E1418',
                  border: m.highlight ? '1px solid rgba(29, 158, 117, 0.4)' : '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '12px',
                  padding: '20px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: m.highlight ? '0 4px 20px rgba(13, 107, 82, 0.12)' : 'none'
                }}
              >
                <div 
                  style={{
                    fontSize: 'clamp(1.6rem, 2.3vw, 2.1rem)',
                    fontWeight: 800,
                    color: m.highlight ? 'var(--text-emerald)' : '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                    lineHeight: 1.1,
                    marginBottom: '8px'
                  }}
                >
                  {m.value}
                </div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#F8FAFC', marginBottom: '4px' }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#94A3B8', lineHeight: 1.35 }}>
                    {m.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
