import React from 'react';
import { ArrowDown, Download, ShieldCheck, MapPin, Mail, CheckCircle } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import type { RoleLens } from '../data/roles';
import { identityData } from '../data/identity';

interface HeroProps {
  activeRole: RoleLens;
  onExploreRoles: () => void;
}

export const Hero: React.FC<HeroProps> = ({ activeRole, onExploreRoles }) => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        paddingTop: '140px',
        paddingBottom: '90px',
        overflow: 'hidden',
      }}
    >
      {/* Background glow effects */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(13, 107, 82, 0.22) 0%, rgba(6, 61, 46, 0.05) 50%, transparent 80%)',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              backgroundColor: 'rgba(13, 107, 82, 0.15)',
              border: '1px solid var(--border-emerald)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--text-emerald)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            <ShieldCheck size={16} />
            <span>Executive Profile & Professional Portfolio</span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '18px',
              background: 'linear-gradient(180deg, #FFFFFF 30%, #CBD5E1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            MAHMOUD MOHAMED LOTFY
          </h1>

          {/* Dynamic Role Subtitle */}
          <div
            style={{
              fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
              fontWeight: 600,
              color: activeRole.id === 'all' ? 'var(--text-emerald)' : '#E5A93C',
              lineHeight: 1.4,
              marginBottom: '28px',
              transition: 'all 0.3s ease',
            }}
          >
            {activeRole.id === 'all' ? (
              <span>Healthcare Operations Director • Business Operations • End-to-End Supply Chain & Procurement</span>
            ) : (
              <span>{activeRole.title} — <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>{activeRole.subtitle}</span></span>
            )}
          </div>

          {/* Core Value Proposition Quote */}
          <div
            className="glass-card"
            style={{
              padding: '24px 32px',
              marginBottom: '32px',
              textAlign: 'left',
              borderLeft: '4px solid var(--color-primary-light)',
              background: 'linear-gradient(135deg, rgba(16, 24, 30, 0.85) 0%, rgba(13, 107, 82, 0.08) 100%)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontStyle: 'italic',
                color: '#FFFFFF',
                lineHeight: 1.5,
                marginBottom: '12px',
              }}
            >
              "{identityData.valueProposition}"
            </p>
            <p
              style={{
                fontSize: '0.96rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Over 15+ years of multi-sector professional leadership, I have transformed underperforming operational units into high-margin, institutionalized systems. In a high-acuity Cardiac Catheterization Unit (Cath Lab) processing 90–140 procedures per month, I delivered <strong>+56.3% net profit growth</strong> and <strong>+65.5% revenue expansion</strong>, maintained <strong>100% stock availability</strong>, and achieved <strong>zero procedure cancellations</strong> due to supply failure across 30+ consecutive months—all while absorbing <strong>&gt;70% macroeconomic cost inflation</strong> and building <strong>4 custom enterprise software platforms on zero external budget</strong>.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <button
              onClick={onExploreRoles}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 28px',
                backgroundColor: 'var(--color-primary)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.95rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(13, 107, 82, 0.5)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary-light)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Explore 8 Role Lenses</span>
              <ArrowDown size={16} />
            </button>

            <a
              href="#cv-hub"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 28px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#FFFFFF',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.95rem',
                fontWeight: 600,
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'var(--text-emerald)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'var(--border-medium)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Download size={16} color="var(--text-emerald)" />
              <span>Download CVs (8 ATS Versions)</span>
            </a>

            <a
              href="#results"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 24px',
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                fontWeight: 600,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <span>View Documented Results</span>
              <span>→</span>
            </a>
          </div>

          {/* Quick Info & Location Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={15} color="var(--text-emerald)" />
              <span>Alexandria & Zagazig, Egypt</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={15} color="var(--color-accent-gold)" />
              <span>Available for Immediate Start</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <a
                href={`mailto:${identityData.contact.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-emerald)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                title="Send Email"
              >
                <Mail size={15} />
                <span>{identityData.contact.email}</span>
              </a>

              <a
                href={identityData.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-emerald)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
