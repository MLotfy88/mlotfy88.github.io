export interface HeroMetric {
  id: string;
  metric: string;
  value: string;
  label: string;
  context: string;
  detail: string;
}

export interface SecondaryMetric {
  value: string;
  label: string;
  context: string;
}

export const heroMetrics: HeroMetric[] = [
  {
    id: "experience-years",
    metric: "15+",
    value: "15+",
    label: "Years of Professional Experience",
    context: "Cross-functional foundation across Healthcare, FMCG Manufacturing, HealthTech SaaS, Telecom, Media, and Events.",
    detail: "Multi-sector executive career progression (2008 – 2026)"
  },
  {
    id: "healthcare-years",
    metric: "5+",
    value: "5+",
    label: "Years Healthcare / Cath Lab Operations",
    context: "Led full operational, financial, and clinical supply chain management of the Cardiac Catheterization Unit at Al-Obour Hospital.",
    detail: "High-acuity interventional cardiology unit leadership"
  },
  {
    id: "monthly-procedures",
    metric: "90–140",
    value: "90–140",
    label: "Monthly Procedures Managed",
    context: "Averaging 65–70 complex clinical cases/mo; 399 audited cases in H1 2025; >1,000 cases over 3 consecutive fiscal years.",
    detail: "Cath Lab Operational Log & Consultant Scheduling Ledger"
  },
  {
    id: "profit-growth",
    metric: "+56.3%",
    value: "+56.3%",
    label: "YoY Net Profitability Growth",
    context: "Surged to EGP 2,978,995 in H1 2025 (vs EGP 1,905,945 in H1 2024), verified in official hospital financial audits.",
    detail: "Official Al-Obour Hospital Audited Financial Statements"
  },
  {
    id: "lost-revenue",
    metric: "EGP 2.5M+",
    value: "EGP 2.5M+",
    label: "Lost-Revenue Opportunities Identified",
    context: "Quantified and modeled recovery plans for unutilized room hours and waiting list pricing structure.",
    detail: "Cath Lab Capacity Analysis & Waiting List Review"
  },
  {
    id: "romi",
    metric: "250%",
    value: "250%",
    label: "Return on Marketing Investment (ROMI)",
    context: "Delivered through targeted physician referral relationship and scheduling management (Private cases +50% YoY).",
    detail: "Every EGP 1 invested returned EGP 2.5 net profit"
  },
  {
    id: "conferences-count",
    metric: "20+",
    value: "20+",
    label: "Conferences & Events Directed",
    context: "Directed and organized premier international and national medical congresses, academic events, and TEDx Zagazig.",
    detail: "Medical congresses (Cairo Derma, Vascular Surgery), TEDx, job fairs"
  }
];

export const secondaryMetrics: SecondaryMetric[] = [
  {
    value: "100%",
    label: "Critical Stock Availability",
    context: "Sustained across 3 consecutive fiscal years for 50+ item codes"
  },
  {
    value: "ZERO",
    label: "Supply-Failure Cancellations",
    context: "Zero procedure cancellations across 30+ consecutive months"
  },
  {
    value: "40–60%",
    label: "Emergency Purchasing Reduction",
    context: "Achieved via procedure-linked clinical replenishment modeling"
  },
  {
    value: "4 Platforms",
    label: "Custom Digital Applications Built",
    context: "Plus 6 Excel/Sheets modules; ~3,570 dev hours on EGP 0 budget"
  },
  {
    value: ">70%",
    label: "Cost Inflation Absorbed",
    context: "Total spend rose +69.9% while expanding net margins +56.3%"
  }
];
