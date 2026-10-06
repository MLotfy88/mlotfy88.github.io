import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Truck, 
  ShoppingBag, 
  Briefcase, 
  Calendar, 
  ArrowRight, 
  Download, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Mail,
  History,
  TrendingUp,
  Layers
} from 'lucide-react';
import { ExecutiveNavbar } from '../components/ExecutiveNavbar';
import { Methodology } from '../components/Methodology';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { identityData } from '../data/identity';

export const LandingPage: React.FC = () => {
  useEffect(() => {
    document.title = "Mahmoud Mohamed Lotfy | Executive Career Portfolio & Role Dossiers";
  }, []);

  const careerMetrics = [
    { label: "Net Profit Growth YoY", value: "+56.3%", note: "H1 2024 vs H1 2025 · Official Hospital Financial Data", highlight: true },
    { label: "Revenue Expansion YoY", value: "+65.5%", note: "Cath Lab gross revenue grew from EGP 5.85M to EGP 9.68M", highlight: true },
    { label: "Supply Failure Cancellations", value: "ZERO", note: "30+ consecutive months with 100% procedure readiness", highlight: true },
    { label: "Operational Oversight", value: "~45 Personnel", note: "Direct management of 5–10 accounting/operations staff, with broader operational oversight across ~45 personnel" },
    { label: "Direct Events Executed", value: "20+ Events", note: "Zagazig Med Faculty congresses, Cairo Derma, TEDx Zagazig" },
    { label: "Multi-Sector Experience", value: "15+ Years", note: "Healthcare clinical operations, FMCG warehousing, commercial media (2008 – 2026)" }
  ];

  const rolePathways = [
    {
      slug: "healthcare-ops",
      icon: Activity,
      badge: "Target Role: Healthcare Operations Director",
      title: "Healthcare Operations Leadership",
      subtitle: "Cardiac Catheterization Unit · Clinical Workflows · Zero Supply Disruptions",
      description: "Operational leadership of a high-volume interventional Cardiac Catheterization Unit (operating range 90–140 cases/mo; ~66 avg/mo), delivering +56.3% YoY net profit growth and zero procedural cancellations across 30+ months.",
      metrics: [
        { label: "Net Profit YoY", value: "+56.3%" },
        { label: "Monthly Procedures", value: "90–140" },
        { label: "Supply Cancellations", value: "ZERO (30+ Mos)" },
      ],
      cvPdf: "./cv/Mahmoud_Lotfy_CV_Healthcare_Operations.pdf"
    },
    {
      slug: "supply-chain",
      icon: Truck,
      badge: "Target Role: Supply Chain Manager",
      title: "Supply Chain Management",
      subtitle: "Procedure-Linked Demand Models · 1-Hour SLAs · Zero Stockouts",
      description: "Engineered procedure-linked demand forecasting models that reduced emergency purchasing by 40–60%, maintained 100% stock availability for 3 fiscal years, and enforced 1-Hour emergency vendor SLAs.",
      metrics: [
        { label: "Emergency Orders", value: "-40% to -60%" },
        { label: "Stock Availability", value: "100%" },
        { label: "Vendor SLA", value: "1-Hr MAX" },
      ],
      cvPdf: "./cv/Mahmoud_Lotfy_CV_Supply_Chain.pdf"
    },
    {
      slug: "procurement",
      icon: ShoppingBag,
      badge: "Target Role: Procurement Manager / Director",
      title: "Procurement & Strategic Sourcing",
      subtitle: "3-Criteria Sign-Off · Currency Crisis Resilience · Contract Auditing",
      description: "Instituted a 3-criteria procurement sign-off protocol, audited 100% of supplier invoices against master price books, and absorbed >70% currency-driven inflation through forward volume commitments.",
      metrics: [
        { label: "Inflation Mitigated", value: ">70%" },
        { label: "Overdue Balances Cut", value: "20–30%" },
        { label: "Commercial ROMI", value: "250%" },
      ],
      cvPdf: "./cv/Mahmoud_Lotfy_CV_Procurement.pdf"
    },
    {
      slug: "business-ops",
      icon: Briefcase,
      badge: "Target Role: Business Operations Lead / Director",
      title: "Business Operations Leadership",
      subtitle: "Full P&L Stewardship (~20% Revenue) · Systemic Scaling · Margin Protection",
      description: "Led departmental P&L accountability contributing ~20% of hospital revenue, restructured operations through a 7-step execution framework, and delivered compounding profit expansion.",
      metrics: [
        { label: "Hospital Revenue", value: "~20%" },
        { label: "Systems Built", value: "4 Platforms" },
        { label: "Net Profit YoY", value: "+56.3%" },
      ],
      cvPdf: "./cv/Mahmoud_Lotfy_CV_Business_Operations.pdf"
    },
    {
      slug: "events",
      icon: Calendar,
      badge: "Target Role: Events & Conferences Director",
      title: "Events & Conference Operations",
      subtitle: "20+ Executed Events · Zagazig Med Faculty & Cairo Derma · TEDx Zagazig Co-Founder",
      description: "Directed 20+ large-scale events and medical congresses for Zagazig University Faculty of Medicine and Egyptian medical societies, co-founded TEDx Zagazig, and spent 5 years in commercial media production.",
      metrics: [
        { label: "Executed Events", value: "20+ Events" },
        { label: "Live Production", value: "5 Years" },
        { label: "Job Fair Scale", value: "2,000+ Attendees" },
      ],
      cvPdf: "./cv/Mahmoud_Lotfy_CV_Events_Conferences.pdf"
    }
  ];

  const careerPhases = [
    {
      phase: "Phase 0: Early Professional Foundation",
      period: "2008 – 2010",
      domain: "Telecom & Customer Support Operations",
      narrative: "Initial operational foundation in high-volume customer support, technical troubleshooting, and team leadership at ETISAL International / Etisalat, alongside university business studies.",
      takeaway: "Built foundational discipline in customer SLA response, frontline problem diagnosis, and structured operations."
    },
    {
      phase: "Phase 1: High-Stakes Live Execution & Media Production",
      period: "2011 – 2014",
      domain: "Events, Media Production & Entrepreneurship",
      narrative: "Organized premier medical congresses for Zagazig University Faculty of Medicine departments (Vascular Surgery, Cairo Derma) and co-founded TEDx Zagazig. Directed on-site operations for high-budget commercial TV campaigns (Vodafone, Huawei) managing 50+ personnel crews under extreme time sensitivity and financial penalties.",
      takeaway: "Mastered high-tempo execution, stakeholder protocol, and zero-defect live delivery."
    },
    {
      phase: "Phase 2: Stores, Inventory & Raw Material Control",
      period: "2015 – 2017",
      domain: "Sweets & Confectionery Facility (Verona Sweets / IBS)",
      narrative: "Supervised stores, raw material staging, packaging, and finished goods inventory for a local confectionery manufacturing business. Enforced strict FIFO stock rotation to prevent ingredient spoilage, synchronized daily material staging with production shift requirements, and maintained clean physical vs ledger records.",
      takeaway: "Built foundational discipline in inventory accuracy, FIFO physical stock rotation, and raw material waste prevention."
    },
    {
      phase: "Phase 3: Specialized Healthcare Operations & P&L Leadership",
      period: "2018 – 2026",
      domain: "Healthcare Clinical Administration & Cath Lab (Al-Obour Hospital)",
      narrative: "Directed end-to-end clinical operations of a high-volume Cardiac Catheterization Unit (operating range 90–140 procedures/month) with full P&L ownership representing ~20% of hospital revenue. Delivered +56.3% YoY net profit growth and zero supply failure cancellations across 30+ months under >70% currency-driven cost inflation.",
      takeaway: "Integrated financial discipline, clinical governance, and mission-critical supply resilience."
    }
  ];

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', backgroundColor: '#080C0E', color: '#F8FAFC' }}>
      <ExecutiveNavbar />

      <main>
        {/* Hero Section */}
        <section 
          style={{
            paddingTop: '130px',
            paddingBottom: '56px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'radial-gradient(circle at 50% 15%, rgba(13, 107, 82, 0.18) 0%, rgba(8, 12, 14, 0) 70%)',
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
            {/* Top Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '5px 14px',
                  backgroundColor: 'rgba(13, 107, 82, 0.2)',
                  border: '1px solid rgba(29, 158, 117, 0.4)',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--text-emerald)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}
              >
                <ShieldCheck size={14} />
                <span>Executive Career Portfolio · Evidence-Based</span>
              </div>

              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  color: '#94A3B8',
                  padding: '5px 12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '9999px'
                }}
              >
                <MapPin size={13} color="#34D399" />
                <span>Alexandria, Egypt · Available for: Cairo, Alexandria & Sharkia</span>
              </div>
            </div>

            {/* Main Headline */}
            <div style={{ maxWidth: '980px', marginBottom: '32px' }}>
              <h1 
                style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.12,
                  marginBottom: '16px'
                }}
              >
                Mahmoud Mohamed Lotfy
              </h1>

              <div 
                style={{
                  fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                  fontWeight: 700,
                  color: 'var(--text-emerald)',
                  lineHeight: 1.35,
                  marginBottom: '14px'
                }}
              >
                Healthcare Operations Director · Supply Chain & Business Operations
              </div>

              <p 
                style={{
                  fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
                  color: '#CBD5E1',
                  lineHeight: 1.65,
                  maxWidth: '880px',
                  margin: 0
                }}
              >
                15+ years of multi-sector professional leadership across healthcare clinical administration, mission-critical medical supply chain, strategic procurement, and business improvement.
              </p>
            </div>

            {/* Executive Positioning Statement */}
            <div 
              style={{
                backgroundColor: '#0E1418',
                borderLeft: '4px solid var(--color-primary-light)',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                borderRight: '1px solid rgba(255, 255, 255, 0.06)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '0 14px 14px 0',
                padding: '24px 30px',
                marginBottom: '36px',
                maxWidth: '920px'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-emerald)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Executive Positioning Summary
              </div>
              <p 
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.65,
                  color: '#F8FAFC',
                  margin: 0,
                  fontStyle: 'italic'
                }}
              >
                "Business operations and management professional with 15+ years across operations, supply chain, procurement, financial management, inventory, team leadership, and business improvement — including 5+ years in healthcare operations. My management approach combines market awareness, financial discipline, and operational execution."
              </p>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a 
                href="#targeted-dossiers"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 26px',
                  backgroundColor: 'var(--color-primary)',
                  color: '#FFFFFF',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '0.94rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(13, 107, 82, 0.4)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Select Targeted Dossier</span>
                <ArrowRight size={16} />
              </a>

              <a 
                href="./cv/Mahmoud_Lotfy_CV_Executive_General.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 22px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  color: '#F8FAFC',
                  borderRadius: '10px',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Download size={16} />
                <span>Executive General CV (PDF)</span>
              </a>

              <a 
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  color: '#CBD5E1',
                  fontSize: '0.9rem',
                  textDecoration: 'none'
                }}
              >
                <Mail size={16} color="#34D399" />
                <span>Initiate Direct Dialogue</span>
              </a>
            </div>

            {/* Career Metrics Bar */}
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>
                Key Career Proof Points · Fully Audited & Validated
              </div>
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '16px'
                }}
              >
                {careerMetrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#0E1418',
                      border: m.highlight ? '1px solid rgba(29, 158, 117, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
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

        {/* Section 2: Targeted Role Pathways */}
        <section 
          id="targeted-dossiers"
          style={{
            padding: '80px 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
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
            <div style={{ marginBottom: '48px', maxWidth: '800px' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-emerald)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                Role-Driven Presentation
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
                Targeted Executive Dossiers
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '1.02rem', lineHeight: 1.6, margin: 0 }}>
                Hiring managers and executive recruiters need exact relevance, not generalities. Select a professional lens below to inspect domain-specific metrics, case stories, filtered timelines, and targeted CVs.
              </p>
            </div>

            {/* Role Pathways Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
              {rolePathways.map((rp) => {
                const Icon = rp.icon;
                return (
                  <div
                    key={rp.slug}
                    style={{
                      backgroundColor: '#0E1418',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px',
                      padding: '30px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
                      transition: 'all 0.25s ease'
                    }}
                    className="role-card-hover"
                  >
                    <div>
                      {/* Header */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <div style={{ padding: '10px', borderRadius: '10px', backgroundColor: 'rgba(13, 107, 82, 0.2)', color: '#34D399' }}>
                          <Icon size={22} />
                        </div>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-emerald)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(52, 211, 153, 0.08)' }}>
                          {rp.badge}
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>
                        {rp.title}
                      </h3>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-emerald)', fontWeight: 500, marginBottom: '14px' }}>
                        {rp.subtitle}
                      </div>

                      <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: 1.55, marginBottom: '22px' }}>
                        {rp.description}
                      </p>

                      {/* Mini Metrics */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', padding: '12px 14px', backgroundColor: 'rgba(255, 255, 255, 0.025)', borderRadius: '10px', marginBottom: '24px' }}>
                        {rp.metrics.map((pm, pmIdx) => (
                          <div key={pmIdx} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#34D399', fontFamily: 'var(--font-mono)' }}>{pm.value}</div>
                            <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>{pm.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '18px' }}>
                      <Link
                        to={`/${rp.slug}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#34D399',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          textDecoration: 'none'
                        }}
                      >
                        <span>Open Role Dossier</span>
                        <ArrowRight size={15} />
                      </Link>

                      <a
                        href={rp.cvPdf}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          color: '#94A3B8',
                          fontSize: '0.78rem',
                          textDecoration: 'none',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)'
                        }}
                      >
                        <Download size={13} />
                        <span>CV PDF</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Cross-Sector Career Evolution */}
        <section 
          style={{
            padding: '72px 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            backgroundColor: 'rgba(8, 12, 14, 0.6)'
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
            <div style={{ marginBottom: '40px', maxWidth: '820px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--text-emerald)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                <History size={15} />
                <span>The Transferable Value Chain</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                15+ Years Multidisciplinary Evolution
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '0.98rem', lineHeight: 1.6, margin: 0 }}>
                Operations excellence is not built in a vacuum. My management capability was forged across three distinct, demanding phases — each contributing a critical layer to my operational leadership today.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {careerPhases.map((phase, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#0E1418',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '28px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF' }}>
                      {phase.phase}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-emerald)', fontWeight: 600, padding: '3px 10px', borderRadius: '6px', backgroundColor: 'rgba(52, 211, 153, 0.1)' }}>
                        {phase.domain}
                      </span>
                      <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>
                        {phase.period}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                    {phase.narrative}
                  </p>

                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '10px', fontSize: '0.82rem', color: '#94A3B8' }}>
                    <strong style={{ color: '#34D399' }}>Core Leadership Takeaway: </strong>{phase.takeaway}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Universal Methodology (How I Think: 7-Step Framework) */}
        <Methodology />

        {/* Section 5: Contact & Executive Mobility */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
