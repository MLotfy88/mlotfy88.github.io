import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText, ChevronRight } from 'lucide-react';
import type { RoleLens } from '../data/roles';

interface NavbarProps {
  activeRole: RoleLens;
  onResetRole: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeRole, onResetRole }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Thinking', href: '#methodology' },
    { name: 'Roles', href: '#roles' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Results', href: '#results' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Financials', href: '#financials' },
    { name: 'Tech', href: '#technology' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Conferences', href: '#conferences' },
    { name: 'CV Hub', href: '#cv-hub' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`site-header ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(8, 12, 14, 0.92)' : 'rgba(8, 12, 14, 0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid rgba(29, 158, 117, 0.25)' : '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href="#"
            style={{
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1.1,
            }}
          >
            <span style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '0.02em', color: '#FFFFFF' }}>
              MAHMOUD M. LOTFY
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-emerald)', fontWeight: 600, letterSpacing: '0.05em' }}>
              EXECUTIVE CAREER HUB
            </span>
          </a>

          {/* Active Role Pill indicator */}
          {activeRole.id !== 'all' && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '3px 10px',
                backgroundColor: 'rgba(13, 107, 82, 0.2)',
                border: '1px solid var(--border-emerald)',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                color: 'var(--text-emerald)',
              }}
              className="role-indicator-badge"
            >
              <span>Lens: <strong>{activeRole.title}</strong></span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onResetRole();
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
                title="Reset to Master Profile"
              >
                ×
              </button>
            </div>
          )}
        </div>

        {/* Desktop Nav */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.85rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-emerald)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}

          {/* CV Button */}
          <a
            href="#cv-hub"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              backgroundColor: 'var(--color-primary)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.82rem',
              fontWeight: 600,
              boxShadow: '0 2px 10px rgba(13, 107, 82, 0.4)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-light)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Download size={14} />
            <span>CVs (8)</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
            padding: '8px',
          }}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            backgroundColor: 'rgba(10, 16, 20, 0.98)',
            borderBottom: '1px solid var(--border-emerald)',
            padding: '20px 24px 30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <span>{link.name}</span>
              <ChevronRight size={16} color="var(--text-emerald)" />
            </a>
          ))}
          <a
            href="#cv-hub"
            onClick={handleLinkClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px',
              backgroundColor: 'var(--color-primary)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              fontWeight: 600,
              marginTop: '10px',
            }}
          >
            <FileText size={18} />
            <span>Explore & Download CVs (8 ATS Versions)</span>
          </a>
        </div>
      )}

      {/* Media query styling for header */}
      <style>{`
        @media (max-width: 1080px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
