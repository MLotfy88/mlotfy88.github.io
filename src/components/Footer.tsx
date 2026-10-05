import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { identityData } from '../data/identity';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#05080A',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '56px',
        paddingBottom: '36px',
        position: 'relative',
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
        {/* Main Footer Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '36px',
            marginBottom: '40px',
          }}
        >
          {/* Brand & Value Statement */}
          <div style={{ maxWidth: '440px' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.02em', marginBottom: '6px' }}>
              {identityData.name}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-emerald)', fontWeight: 600, marginBottom: '14px' }}>
              Healthcare Operations • Supply Chain • Procurement • Business Operations
            </div>
            <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
              "I solve operational and business problems by connecting strategy, execution, financial discipline, people, and process."
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-emerald)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, marginBottom: '14px' }}>
              Targeted Dossiers
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
              <Link to="/healthcare-ops" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Healthcare Operations</Link>
              <Link to="/supply-chain" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Supply Chain Management</Link>
              <Link to="/procurement" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Procurement & Sourcing</Link>
              <Link to="/business-ops" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Business Operations</Link>
              <Link to="/events" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Events & Conferences</Link>
            </div>
          </div>

          {/* Navigation & Hub Links */}
          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-emerald)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, marginBottom: '14px' }}>
              Executive Hub
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
              <Link to="/" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Overview (Home)</Link>
              <a href="/#methodology" style={{ color: '#CBD5E1', textDecoration: 'none' }}>7-Step Framework</a>
              <a href="/#contact" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Contact & Mobility</a>
              <a 
                href="./cv/Mahmoud_Lotfy_CV_Executive_General.pdf" 
                download 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--text-emerald)', fontWeight: 600, textDecoration: 'none' }}
              >
                Executive General CV (PDF)
              </a>
            </div>
          </div>

          {/* Direct Channels & Back to Top */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-emerald)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
              Direct Channels
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
              <a href={`mailto:${identityData.contact.email}`} style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                {identityData.contact.email}
              </a>
              <a href={`tel:${identityData.contact.phone.replace(/\s+/g, '')}`} style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                {identityData.contact.phone}
              </a>
              <a href={identityData.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                LinkedIn Profile
              </a>
            </div>

            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '9999px',
                color: '#CBD5E1',
                fontSize: '0.8rem',
                cursor: 'pointer',
                marginTop: '6px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(13, 107, 82, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(29, 158, 117, 0.4)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#CBD5E1';
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.78rem',
            color: '#94A3B8',
          }}
        >
          <div>
            © {new Date().getFullYear()} Mahmoud Mohamed Lotfy. All rights reserved.
          </div>

          <div>
            Alexandria, Egypt · Available for: Cairo, Alexandria & Sharkia
          </div>
        </div>
      </div>
    </footer>
  );
};
