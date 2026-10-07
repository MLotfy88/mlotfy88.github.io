export interface TimelineEvent {
  id: string;
  period: string;
  yearStart: number;
  yearEnd: number;
  role: string;
  organization: string;
  location: string;
  domain: string;
  summary: string;
  highlights: string[];
}

export const timelineEvolutionNarrative = "Creative / Media / Events → Operations & Manufacturing → Healthcare Administration → Business Management → Digital Systems Integration";

export const timelineEvents: TimelineEvent[] = [
  {
    id: "healthcare-ops-lead",
    period: "2023 – April 2026",
    yearStart: 2023,
    yearEnd: 2026,
    role: "Healthcare Operations & Supply Chain Leadership — Cath Lab",
    organization: "Al-Obour Hospital",
    location: "Zagazig, Sharkia, Egypt",
    domain: "Healthcare",
    summary: "Full operational, clinical workflow, departmental P&L, supply chain, and administrative oversight of ~45 personnel (5–10 direct management) across 90–140 monthly interventional procedures.",
    highlights: [
      "Delivered +56.3% net profit growth and +65.5% revenue expansion (official hospital financial data: H1 2024 vs H1 2025)",
      "Maintained 100% stock availability and zero procedure cancellations across 30+ consecutive months",
      "Maintained operational performance despite >70% currency-driven price spikes on surgical consumables",
      "Built 4 custom internal operational platforms using AI-assisted tools on zero external software budget"
    ]
  },
  {
    id: "cathlab-accounting-coordination",
    period: "2019 – 2023",
    yearStart: 2019,
    yearEnd: 2023,
    role: "Cath Lab Accounting & Unit Coordination",
    organization: "Al-Obour Hospital",
    location: "Zagazig, Sharkia, Egypt",
    domain: "Healthcare",
    summary: "Managed Cath Lab front-desk admissions, procedure billing, point-of-service patient collections, unit treasury, and vendor invoice verification prior to promotion to Operations Lead.",
    highlights: []
  },
  {
    id: "healthcare-software-ops",
    period: "2018 – 2019",
    yearStart: 2018,
    yearEnd: 2019,
    role: "Healthcare Software / Customer Operations",
    organization: "ClinPrime — Healthcare Operations Software",
    location: "Egypt",
    domain: "Technology",
    summary: "Managed client support and operational onboarding across 30+ hospital clients, cutting ticket resolution time from 48 hours to 24 hours within 6 months.",
    highlights: [
      "Reduced average ticket resolution time from 48 hours to 24 hours within 6 months",
      "Created standardized hospital onboarding playbooks and clinical support escalation workflows"
    ]
  },
  {
    id: "data-fmcg-operations",
    period: "2015 – 2017",
    yearStart: 2015,
    yearEnd: 2017,
    role: "Data / FMCG / Factory Operations",
    organization: "Verona Sweets Factory (FMCG) / IBS",
    location: "Sharkia, Egypt",
    domain: "Manufacturing",
    summary: "Directed factory warehouse operations, raw material staging, finished goods inventory, FIFO stock rotation, and structured enterprise data processing.",
    highlights: [
      "Enforced 100% FIFO inventory rotation, completely eliminating raw material spoilage",
      "Streamlined staging buffers for production shifts, reducing factory line staging delays"
    ]
  },
  {
    id: "media-production-period",
    period: "2014 – 2019",
    yearStart: 2014,
    yearEnd: 2019,
    role: "Media Production (Assistant Production Manager, Location Manager, Asst. Director)",
    organization: "Commercial Television & Advertising Productions",
    location: "Cairo & Nationwide, Egypt",
    domain: "Media",
    summary: "Led on-site logistics, location permitting, safety, and 50+ personnel crews for major national commercial productions (Vodafone, Huawei G8, Jumia, Cairo Festival City).",
    highlights: [
      "Managed on-site operations, location permitting, and safety for crews of 50+ personnel",
      "Delivered 100% on-schedule and on-budget shooting schedules under strict time penalties"
    ]
  },
  {
    id: "events-tedx-entrepreneurship",
    period: "2013 – 2014",
    yearStart: 2013,
    yearEnd: 2014,
    role: "Events / TEDx / Entrepreneurship",
    organization: "Share Events & Marketing Services / TEDx Zagazig",
    location: "Sharkia, Egypt",
    domain: "Entrepreneurship",
    summary: "Co-founded event operations agency and established TEDx Zagazig, directing stage execution, media production, and 400+ attendees.",
    highlights: [
      "Secured official TEDx licensing and managed 12 speakers and 40+ volunteer teams",
      "Organized university recruitment forums connecting 2,000+ graduates with corporate employers"
    ]
  },
  {
    id: "software-application-support",
    period: "2012",
    yearStart: 2012,
    yearEnd: 2012,
    role: "Software Application Support",
    organization: "Enterprise Applications Support",
    location: "Egypt",
    domain: "Technology",
    summary: "Provided user onboarding, application troubleshooting, workflow digitization, and operational software support.",
    highlights: []
  },
  {
    id: "telecom-team-leadership",
    period: "2011 – 2012",
    yearStart: 2011,
    yearEnd: 2012,
    role: "Telecom / Technical Support / Team Leadership",
    organization: "ETISAL International / Etisalat",
    location: "Egypt",
    domain: "Technology",
    summary: "Progressed from frontline ADSL technical support to team leadership in high-volume enterprise telecom operations.",
    highlights: [
      "Promoted to Team Lead after consistently surpassing first-contact resolution metrics"
    ]
  },
  {
    id: "business-technical-support",
    period: "2008",
    yearStart: 2008,
    yearEnd: 2008,
    role: "Business / Technical Support",
    organization: "Formative Business Support & University Studies",
    location: "Zagazig, Egypt",
    domain: "Entrepreneurship",
    summary: "Initial operational foundation in business administration, financial accounting, and community organization leadership.",
    highlights: []
  }
];
