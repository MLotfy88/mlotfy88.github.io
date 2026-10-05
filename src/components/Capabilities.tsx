import React, { useState } from 'react';
import { 
  Activity, 
  Truck, 
  ShoppingBag, 
  BarChart3, 
  PieChart, 
  Warehouse, 
  Code, 
  Users2,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Sparkles
} from 'lucide-react';
import { capabilityDomains, CapabilityDomain } from '../data/capabilities';
import { RoleLens } from '../data/roles';

interface CapabilitiesProps {
  activeRole: RoleLens;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ activeRole }) => {
  const [expandedDomainId, setExpandedDomainId] = useState<string | null>(null);

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity size={22} color="#34D399" />;
      case 'Truck': return <Truck size={22} color="#38BDF8" />;
      case 'ShoppingBag': return <ShoppingBag size={22} color="#E5A93C" />;
      case 'BarChart3': return <BarChart3 size={22} color="#A78BFA" />;
      case 'PieChart': return <PieChart size={22} color="#F472B6" />;
      case 'Warehouse': return <Warehouse size={22} color="#FBBF24" />;
      case 'Code': return <Code size={22} color="#34D399" />;
      case 'Users2': return <Users2 size={22} color="#38BDF8" />;
      default: return <Sparkles size={22} color="#34D399" />;
    }
  };

  const toggleDomain = (id: string) => {
    setExpandedDomainId(expandedDomainId === id ? null : id);
  };

  // Helper to check if domain aligns with active role
  const isDomainHighlighted = (domainId: string) => {
    if (activeRole.id === 'all') return false;
    if (activeRole.id === 'healthcare-operations' && (domainId === 'operations' || domainId === 'governance')) return true;
    if (activeRole.id === 'supply-chain' && (domainId === 'supply-chain' || domainId === 'governance')) return true;
    if (activeRole.id === 'procurement' && (domainId === 'supply-chain' || domainId === 'finance')) return true;
    if (activeRole.id === 'demand-planning' && (domainId === 'supply-chain' || domainId === 'performance')) return true;
    if (activeRole.id === 'business-operations' && (domainId === 'finance' || domainId === 'operations')) return true;
    if (activeRole.id === 'logistics-operations' && domainId === 'operations') return true;
    if (activeRole.id === 'events-conferences' && domainId === 'events-creative') return true;
    if (activeRole.id === 'digital-transformation' && domainId === 'digital') return true;
    if (activeRole.id === 'creative-media' && domainId === 'events-creative') return true;
    return false;
  };

  return (
    <section id="capabilities" className="section" style={{ backgroundColor: 'rgba(8, 12, 14, 0.95)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Operational Domains</span>
          </div>
          <h2 className="section-title">8 Functional Capability Domains</h2>
          <p className="section-subtitle">
            A comprehensive matrix of executive competencies backed by verified frontline execution across healthcare, supply chain, and business administration.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {capabilityDomains.map((domain) => {
            const isHighlighted = isDomainHighlighted(domain.id);
            const isExpanded = expandedDomainId === domain.id || isHighlighted;

            return (
              <div
                key={domain.id}
                className="glass-card"
                style={{
                  padding: '28px',
                  borderRadius: 'var(--radius-md)',
                  border: isHighlighted
                    ? '2px solid var(--color-primary-light)'
                    : '1px solid var(--border-subtle)',
                  backgroundColor: isHighlighted
                    ? 'rgba(13, 107, 82, 0.18)'
                    : 'rgba(16, 24, 30, 0.85)',
                  boxShadow: isHighlighted ? '0 8px 30px rgba(13, 107, 82, 0.35)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  {/* Top Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {getDomainIcon(domain.icon)}
                    </div>

                    {isHighlighted ? (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          backgroundColor: 'var(--color-primary-light)',
                          color: '#FFFFFF',
                          padding: '3px 10px',
                          borderRadius: 'var(--radius-full)',
                          textTransform: 'uppercase',
                        }}
                      >
                        Active Role Match
                      </span>
                    ) : (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        Domain 0{capabilityDomains.indexOf(domain) + 1}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '8px',
                      lineHeight: 1.3,
                    }}
                  >
                    {domain.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '18px',
                    }}
                  >
                    {domain.summary}
                  </p>

                  {/* Competency Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {domain.competencies.map((comp, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '3px 9px',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.76rem',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {comp}
                      </span>
                    ))}
                  </div>

                  {/* Operational Evidence (Expandable) */}
                  {isExpanded && (
                    <div
                      style={{
                        paddingTop: '16px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        marginBottom: '16px',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.76rem',
                          color: 'var(--text-emerald)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          fontWeight: 700,
                          marginBottom: '10px',
                        }}
                      >
                        Operational Evidence & Audit Trail:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {domain.evidence.map((item, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '8px',
                              fontSize: '0.84rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.5,
                            }}
                          >
                            <CheckCircle size={14} color="var(--text-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleDomain(domain.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-emerald)',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 0 0 0',
                  }}
                >
                  <span>{isExpanded ? 'Hide Detailed Evidence' : 'View Operational Evidence'}</span>
                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
