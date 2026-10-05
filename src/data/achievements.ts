export type AchievementCategory = 
  | 'all' 
  | 'Financial' 
  | 'Operations' 
  | 'Supply Chain' 
  | 'Procurement' 
  | 'Performance' 
  | 'Governance' 
  | 'Digital' 
  | 'Events' 
  | 'Media';

export interface AchievementItem {
  id: string;
  metric: string;
  title: string;
  category: AchievementCategory;
  context: string;
  story: string;
  evidence: string;
}

export type Achievement = AchievementItem;

export const achievementsData: AchievementItem[] = [
  {
    id: "fin-01-profit",
    metric: "+56.3%",
    title: "Net Profitability Growth",
    category: "Financial",
    context: "H1 2025 vs H1 2024",
    story: "Expanded departmental net profit to EGP 2,978,995 through strategic case-mix optimization, dynamic replacement pricing, and rigorous expense tracking.",
    evidence: "Official Al-Obour Hospital Financial Audit Report (2023–2025)"
  },
  {
    id: "fin-02-revenue",
    metric: "+65.5%",
    title: "Gross Revenue Growth",
    category: "Financial",
    context: "H1 2025 vs H1 2024",
    story: "Drove revenue expansion by scaling case volume (+27.1%) while raising average revenue per procedure (+30.2%) via consumable package optimization.",
    evidence: "Official Al-Obour Hospital Financial Audit Report (2023–2025)"
  },
  {
    id: "ops-01-throughput",
    metric: "+37.8%",
    title: "Monthly Procedural Throughput",
    category: "Operations",
    context: "90 → 140 Procedures/Month",
    story: "Scaled monthly clinical throughput from 90 to 140 procedures by eliminating intake bottlenecks, staggering nursing shifts, and halving room turnaround times.",
    evidence: "Cath Lab Operational Log & Operating Room Scheduling Ledger"
  },
  {
    id: "ops-02-cancellations",
    metric: "ZERO",
    title: "Supply-Failure Procedure Cancellations",
    category: "Operations",
    context: "30+ Consecutive Months",
    story: "Maintained 0 procedure cancellations or delays caused by material stockouts across 30+ consecutive months of continuous high-acuity operations.",
    evidence: "Clinical Governance & Surgical Incident Register"
  },
  {
    id: "sc-01-availability",
    metric: "100%",
    title: "Critical Consumable Availability",
    category: "Supply Chain",
    context: "3 Consecutive Fiscal Years",
    story: "Sustained continuous on-shelf availability for 50+ critical surgical item codes (catheters, balloon dilatation catheters, drug-eluting stents, guidewires).",
    evidence: "Cath Lab Material Management Log & Annual Physical Audits"
  },
  {
    id: "sc-02-emergency-purchases",
    metric: "40–60%",
    title: "Reduction in Emergency Spot Purchasing",
    category: "Supply Chain",
    context: "Procurement Variance Review",
    story: "Slashed high-premium emergency purchasing by 40–60% by linking replenishment orders directly to scheduled case types and consultant bookings.",
    evidence: "Procurement Variance & Emergency Order Audit Records"
  },
  {
    id: "proc-01-inflation",
    metric: ">70%",
    title: "Cost Inflation Absorbed",
    category: "Procurement",
    context: "Egypt Currency Floatation Period",
    story: "Successfully absorbed sharp currency devaluation spikes (EGP float from ~30.9 to ~48-50 per USD) and >35% consumable inflation through advance volume commitments.",
    evidence: "Executive Macroeconomic Response Review & Supplier Contracts"
  },
  {
    id: "perf-01-romi",
    metric: "250%",
    title: "Return on Marketing Investment (ROMI)",
    category: "Performance",
    context: "Physician Referral Strategy",
    story: "Every EGP 1 invested in targeted physician outreach returned EGP 2.5 in net profit; highest-margin Private category procedures expanded +50% YoY.",
    evidence: "Master Dossier Section 5.7 & Physician Referral Registry"
  },
  {
    id: "gov-01-sla",
    metric: "1 Hour MAX",
    title: "Emergency Vendor Response SLA",
    category: "Governance",
    context: "Imaging Equipment Contract",
    story: "Directly negotiated 1-Hour MAX emergency response SLA with primary imaging equipment supplier, securing 100% lab uptime and zero unplanned shutdowns.",
    evidence: "Biomedical Maintenance Agreement & Equipment Service Log"
  },
  {
    id: "dig-01-software",
    metric: "EGP 0",
    title: "Software Budget for 4 Custom Platforms",
    category: "Digital",
    context: "~3,570 Documented Dev Hours",
    story: "Personally engineered 4 standalone web applications and 6 analytical Excel modules on an external software budget of exactly EGP 0.",
    evidence: "Production Systems Architecture & Code Repository"
  },
  {
    id: "events-01-conferences",
    metric: "20+",
    title: "Conferences & Medical Events Organized",
    category: "Events",
    context: "National & International Events",
    story: "Directed and organized 20+ premier medical congresses, academic forums, and job fairs (Cairo Derma 500+ delegates, Vascular Surgery Congress, TEDx Zagazig).",
    evidence: "Official Conference Programs & Event Archives"
  },
  {
    id: "media-01-brands",
    metric: "8+ Brands",
    title: "Commercial Film & TV Productions",
    category: "Media",
    context: "2014 – 2019 (5 Years)",
    story: "Assistant Production Manager, Location Manager, and Assistant Director managing 50+ personnel crews for Vodafone, Huawei G8, Sudocrem, Jumia, and Cairo Festival City.",
    evidence: "Master Dossier Section 5.8 & Production Call Sheets"
  }
];
