import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Activity, 
  Truck, 
  ShoppingBag, 
  Briefcase, 
  Calendar, 
  ArrowUpRight,
  FileText
} from 'lucide-react';
import { identityData } from '../data/identity';

interface ExecutiveNavbarProps {
  currentRoleSlug?: string;
}

export const ExecutiveNavbar: React.FC<ExecutiveNavbarProps> = ({ currentRoleSlug }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsRoleDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const roles = [
    { name: 'Healthcare Operations', slug: 'healthcare-ops', icon: Activity, desc: 'Cath Lab, clinical ops, P&L, 0 disruptions' },
    { name: 'Supply Chain Management', slug: 'supply-chain', icon: Truck, desc: 'Demand models, 40-60% emergency cuts, 1-hr SLA' },
    { name: 'Procurement & Sourcing', slug: 'procurement', icon: ShoppingBag, desc: '3-criteria sign-off, currency crisis, 250% ROMI' },
    { name: 'Business Operations', slug: 'business-ops', icon: Briefcase, desc: 'P&L stewardship, operational turnaround, zero-budget apps' },
    { name: 'Events & Conferences', slug: 'events', icon: Calendar, desc: '20+ events, medical congresses, TEDx Zagazig co-founder' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.25s ease',
        backgroundColor: isScrolled ? 'rgba(8, 12, 14, 0.94)' : 'rgba(8, 12, 14, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid rgba(29, 158, 117, 0.25)' : '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div 
        className="container" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          height: '72px',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 24px'
        }}
      >
        {/* Brand */}
        <Link 
          to="/"
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            textDecoration: 'none',
            lineHeight: 1.15
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '0.02em', color: '#FFFFFF' }}>
              {identityData.name}
            </span>
          </div>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-emerald)', fontWeight: 600, letterSpacing: '0.04em' }}>
            EXECUTIVE CAREER DOSSIER
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            gap: '28px' 
          }}
          className="desktop-nav"
        >
          <Link 
            to="/" 
            style={{ 
              fontSize: '0.88rem', 
              fontWeight: 500, 
              color: location.pathname === '/' ? '#34D399' : '#CBD5E1',
              transition: 'color 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            Overview
          </Link>

          {/* Role Dossiers Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsRoleDropdownOpen(true)}
            onMouseLeave={() => setIsRoleDropdownOpen(false)}
          >
            <button
              onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: currentRoleSlug ? '#34D399' : '#CBD5E1',
                fontSize: '0.88rem',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 0'
              }}
            >
              <span>Targeted Dossiers</span>
              <ChevronDown size={14} style={{ transform: isRoleDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
            </button>

            {/* Dropdown Menu */}
            {isRoleDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-40px',
                  width: '320px',
                  backgroundColor: '#0E1418',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  zIndex: 1100
                }}
              >
                <div style={{ padding: '6px 12px 8px', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                  Select Professional Lens
                </div>
                {roles.map((r) => {
                  const Icon = r.icon;
                  const isActive = currentRoleSlug === r.slug;
                  return (
                    <Link
                      key={r.slug}
                      to={`/${r.slug}`}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        backgroundColor: isActive ? 'rgba(13, 107, 82, 0.25)' : 'transparent',
                        textDecoration: 'none',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <div 
                        style={{ 
                          padding: '6px', 
                          borderRadius: '6px', 
                          backgroundColor: isActive ? 'rgba(52, 211, 153, 0.2)' : 'rgba(255,255,255,0.06)',
                          color: isActive ? '#34D399' : '#94A3B8',
                          marginTop: '2px'
                        }}
                      >
                        <Icon size={16} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: isActive ? '#34D399' : '#F8FAFC' }}>
                          {r.name}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#94A3B8', lineHeight: 1.3 }}>
                          {r.desc}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <a 
            href="/#methodology" 
            style={{ 
              fontSize: '0.88rem', 
              fontWeight: 500, 
              color: '#CBD5E1',
              transition: 'color 0.2s ease'
            }}
          >
            Methodology
          </a>

          <a 
            href="/#contact" 
            style={{ 
              fontSize: '0.88rem', 
              fontWeight: 500, 
              color: '#CBD5E1',
              transition: 'color 0.2s ease'
            }}
          >
            Contact & Mobility
          </a>
        </nav>

        {/* Right Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href={identityData.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              fontSize: '0.82rem',
              color: '#F8FAFC',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            className="navbar-cta-btn"
          >
            <span>LinkedIn</span>
            <ArrowUpRight size={14} color="#94A3B8" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              color: '#F8FAFC',
              cursor: 'pointer'
            }}
            className="mobile-menu-trigger"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#0E1418',
            borderBottom: '1px solid rgba(29, 158, 117, 0.3)',
            padding: '20px 24px 30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Main Menu
          </div>
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              color: location.pathname === '/' ? '#34D399' : '#F8FAFC',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none'
            }}
          >
            Executive Overview (Home)
          </Link>

          <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.06)', margin: '4px 0' }} />

          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-emerald)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Role-Driven Dossiers
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {roles.map((r) => {
              const Icon = r.icon;
              const isActive = currentRoleSlug === r.slug;
              return (
                <Link
                  key={r.slug}
                  to={`/${r.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    backgroundColor: isActive ? 'rgba(13, 107, 82, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                    color: isActive ? '#34D399' : '#CBD5E1',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    textDecoration: 'none'
                  }}
                >
                  <Icon size={16} />
                  <span>{r.name}</span>
                </Link>
              );
            })}
          </div>

          <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.06)', margin: '4px 0' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="/#methodology"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem' }}
            >
              7-Step Methodology
            </a>
            <a
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem' }}
            >
              Contact & Location Mobility
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
