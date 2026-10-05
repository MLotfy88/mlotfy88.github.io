import React from 'react';
import { User, Award, CheckCircle, GraduationCap, MapPin, Building, Activity } from 'lucide-react';
import { identityData } from '../data/identity';

export const About: React.FC = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'rgba(10, 14, 18, 0.7)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>Executive Identity & Background</span>
          </div>
          <h2 className="section-title">The Connective Tissue of 15+ Years</h2>
          <p className="section-subtitle">
            Operations is not an abstract theory or a single department—it is the living nervous system that translates organizational ambition into daily flawless reality.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '48px',
          }}
        >
          {/* Narrative Left */}
          <div>
            <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '18px', lineHeight: 1.3 }}>
              Why Multi-Sector Experience Builds Superior Healthcare & Business Leaders
            </h3>
            
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
              My career was not forged in static corporate silos. It was built across high-pressure, diverse frontline operational realities: high-volume telecom technical operations, large-scale medical conference directing, fast-paced commercial television film production logistics, FMCG factory stores, and healthcare SaaS onboarding.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
              When I entered the high-acuity Cardiac Catheterization Unit (Cath Lab) at Al-Obour Hospital, I did not see healthcare as an unmanageable mystery. I saw an intricate, mission-critical workflow with patient lives at stake, high-cost consignment consumables, demanding consultant surgeons, and volatile financial margins.
            </p>

            <div
              style={{
                padding: '20px 24px',
                backgroundColor: 'rgba(13, 107, 82, 0.15)',
                borderLeft: '4px solid var(--color-primary-light)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '24px',
              }}
            >
              <p style={{ fontSize: '0.96rem', fontStyle: 'italic', color: '#FFFFFF', margin: 0, lineHeight: 1.6 }}>
                "In a cardiac catheterization suite, a missing stent, an unverified inventory code, or an administrative delay is not an inconvenience—it is life-threatening. That level of stakes teaches you to eliminate operational ambiguity permanently."
              </p>
            </div>

            {/* Academic Credentials */}
            <div
              style={{
                padding: '20px 24px',
                backgroundColor: 'rgba(16, 24, 30, 0.8)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-emerald)', marginBottom: '12px', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>
                <GraduationCap size={18} />
                <span>Education & Academic Credentials</span>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>
                  Bachelor of Commerce (Accounting & Business)
                </div>
                <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                  Faculty of Commerce — Zagazig University, Egypt
                </div>
              </div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>
                  Postgraduate Studies in Hospital Management & Healthcare Administration
                </div>
                <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                  Specialized academic training in healthcare systems, clinical governance, and hospital economics
                </div>
              </div>
            </div>

          </div>

          {/* 4 Pillars Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div
              className="glass-card"
              style={{
                padding: '24px',
                borderLeft: '3px solid #38BDF8',
              }}
            >
              <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '8px' }}>
                1. The Systems Builder
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                I do not wait for expensive software licenses. When off-the-shelf tools fail or commercial budgets do not exist, I architect and build customized web and database systems that institutionalize accountability, enforce barcode verification, and automate audit trails.
              </p>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '24px',
                borderLeft: '3px solid #34D399',
              }}
            >
              <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '8px' }}>
                2. Rigorous Financial Stewardship
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Operations without financial literacy is blind. Managing departmental P&L, analyzing procedure-level contribution margins, and auditing 100% of vendor statements delivered +56.3% net profit expansion and absorbed &gt;70% macroeconomic inflation.
              </p>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '24px',
                borderLeft: '3px solid #E5A93C',
              }}
            >
              <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '8px' }}>
                3. High-Acuity Calm Under Pressure
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Emergency ST-elevation myocardial infarctions (STEMI), sudden equipment faults, or critical vendor stock shortages require composed, rapid, and decisive coordination. Maintaining zero procedure cancellations across 30+ months is proof of this composure.
              </p>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '24px',
                borderLeft: '3px solid #A78BFA',
              }}
            >
              <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '8px' }}>
                4. Cross-Functional Bridge
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                I translate comfortably between clinical consultant surgeons, biomedical engineers, nursing supervisors, hospital accountants, corporate vendors, and executive board directors, uniting divergent agendas into shared operational goals.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
