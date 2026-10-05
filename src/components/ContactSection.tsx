import React from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { identityData } from '../data/identity';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section" style={{ backgroundColor: 'rgba(8, 12, 14, 0.98)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Executive Inquiries & Talent Acquisition</span>
          </div>
          <h2 className="section-title">Initiate Direct Dialogue</h2>
          <p className="section-subtitle">
            Available for executive operations leadership, hospital administration, supply chain transformation, and strategic advisory appointments.
          </p>
        </div>

        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {/* Left: Contact Channels */}
          <div
            className="glass-card"
            style={{
              padding: '36px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-emerald)',
              background: 'linear-gradient(135deg, rgba(16, 24, 30, 0.95) 0%, rgba(13, 107, 82, 0.1) 100%)',
            }}
          >
            <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '8px' }}>
              Direct Channels
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '28px' }}>
              Direct access to Mahmoud Mohamed Lotfy. Responses typically provided within 12–24 business hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Email */}
              <a
                href={`mailto:${identityData.contact.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '14px 18px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  color: 'inherit',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--text-emerald)';
                  e.currentTarget.style.backgroundColor = 'rgba(13, 107, 82, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(13, 107, 82, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-emerald)',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Official Email
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 600 }}>
                    {identityData.contact.email}
                  </div>
                </div>
              </a>

              {/* Phone / WhatsApp */}
              <a
                href={`https://wa.me/201558166440`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '14px 18px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  color: 'inherit',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--text-emerald)';
                  e.currentTarget.style.backgroundColor = 'rgba(13, 107, 82, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(52, 211, 153, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-emerald)',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Phone / WhatsApp Direct
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 600 }}>
                    {identityData.contact.phone}
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={identityData.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '14px 18px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  color: 'inherit',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--text-emerald)';
                  e.currentTarget.style.backgroundColor = 'rgba(13, 107, 82, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8',
                    flexShrink: 0,
                  }}
                >
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                    Executive Network
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 600 }}>
                    linkedin.com/in/mmlotfy
                  </div>
                </div>
              </a>


            </div>
          </div>

          {/* Right: Mobility & Availability */}
          <div
            className="glass-card"
            style={{
              padding: '36px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E5A93C', marginBottom: '10px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
                <CheckCircle2 size={16} />
                <span>Notice Period & Availability</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '8px' }}>
                Available for Immediate Start
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Fully prepared to step into executive leadership, turnaround mandates, or departmental scaling projects without notice delays.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-emerald)', marginBottom: '10px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
                <MapPin size={16} />
                <span>Geographic Mobility & Presence</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <div style={{ padding: '12px 14px', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Current Primary Hub</div>
                  <div style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: 600 }}>Alexandria, Egypt</div>
                </div>

                <div style={{ padding: '12px 14px', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Origin & Operations Base</div>
                  <div style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: 600 }}>Zagazig, Sharkia, Egypt</div>
                </div>

                <div style={{ padding: '12px 14px', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Available In (On-Site & Executive)</div>
                  <div style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: 600 }}>
                    Cairo • Alexandria • Sharkia, Egypt
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: '16px',
                backgroundColor: 'rgba(13, 107, 82, 0.15)',
                border: '1px solid var(--border-emerald)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.82rem',
                color: 'var(--text-emerald)',
                lineHeight: 1.5,
              }}
            >
              Open to executive discussions regarding full-time leadership, healthcare operations consultancy, or fractional operational systems architecture.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
