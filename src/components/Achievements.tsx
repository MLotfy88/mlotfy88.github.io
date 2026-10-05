import React, { useState } from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { achievementsData, AchievementCategory } from '../data/achievements';
import type { RoleLens } from '../data/roles';

interface AchievementsProps {
  activeRole: RoleLens;
}

export const Achievements: React.FC<AchievementsProps> = ({ activeRole }) => {
  const [selectedCategory, setSelectedCategory] = useState<AchievementCategory>('all');

  // Dynamically prioritize relevant category when role lens changes
  React.useEffect(() => {
    if (activeRole.id === 'healthcare-operations') setSelectedCategory('Operations');
    else if (activeRole.id === 'supply-chain') setSelectedCategory('Supply Chain');
    else if (activeRole.id === 'procurement') setSelectedCategory('Procurement');
    else if (activeRole.id === 'demand-planning') setSelectedCategory('Supply Chain');
    else if (activeRole.id === 'business-operations') setSelectedCategory('Financial');
    else if (activeRole.id === 'logistics-operations') setSelectedCategory('Operations');
    else if (activeRole.id === 'events-conferences') setSelectedCategory('Events');
    else if (activeRole.id === 'digital-transformation') setSelectedCategory('Digital');
    else if (activeRole.id === 'creative-media') setSelectedCategory('Media');
    else setSelectedCategory('all');
  }, [activeRole.id]);

  const categories: { id: AchievementCategory; label: string }[] = [
    { id: 'all', label: 'All Documented Results' },
    { id: 'Financial', label: 'Financial' },
    { id: 'Operations', label: 'Operations' },
    { id: 'Supply Chain', label: 'Supply Chain' },
    { id: 'Procurement', label: 'Procurement' },
    { id: 'Performance', label: 'Performance' },
    { id: 'Governance', label: 'Governance' },
    { id: 'Digital', label: 'Digital' },
    { id: 'Events', label: 'Events' },
    { id: 'Media', label: 'Media' },
  ];

  const filteredAchievements = achievementsData.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="results" className="section" style={{ backgroundColor: 'rgba(10, 14, 18, 0.8)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Master Part 5 Evidence</span>
          </div>
          <h2 className="section-title">Results & Documented Achievements</h2>
          <p className="section-subtitle">
            Audited operational outcomes achieved through disciplined system redesign, financial control, and frontline execution.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 500,
                  border: isActive ? '1px solid var(--color-primary-light)' : '1px solid var(--border-subtle)',
                  backgroundColor: isActive ? 'var(--color-primary)' : 'rgba(20, 28, 34, 0.6)',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
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
                {/* Metric & Category Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div
                    style={{
                      fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                      fontWeight: 800,
                      fontFamily: 'var(--font-heading)',
                      color: '#FFFFFF',
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.metric}
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-emerald)',
                      backgroundColor: 'rgba(13, 107, 82, 0.2)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-emerald)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '4px',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>

                {/* Context */}
                <div style={{ fontSize: '0.8rem', color: '#E5A93C', fontWeight: 600, marginBottom: '12px' }}>
                  {item.context}
                </div>

                {/* Short Story */}
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                  }}
                >
                  {item.story}
                </p>
              </div>

              {/* Source of Truth footnote */}
              <div
                style={{
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  fontSize: '0.74rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <CheckCircle2 size={13} color="var(--text-emerald)" />
                <span>Evidence: <strong>{item.evidence}</strong></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
