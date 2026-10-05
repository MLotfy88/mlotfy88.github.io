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
    id: "profit-growth",
    metric: "+56.3%",
    value: "+56.3%",
    label: "YoY Net Profitability Growth",
    context: "Surged to EGP 2,978,995 in H1 2025 (vs EGP 1,905,945 in H1 2024), verified in official hospital financial audits.",
    detail: "Financial Impact & P&L Stewardship"
  },
  {
    id: "monthly-procedures",
    metric: "90–140",
    value: "90–140",
    label: "Monthly Procedures Managed",
    context: "Averaging 65–70 complex clinical cases/mo; 399 audited cases in H1 2025; >1,000 cases over 3 consecutive fiscal years.",
    detail: "Clinical Scale & High-Acuity Throughput"
  },
  {
    id: "cancellations-zero",
    metric: "ZERO",
    value: "ZERO",
    label: "Supply-Failure Cancellations",
    context: "Zero procedural cancellations due to stock or supply failure sustained across 30+ consecutive months.",
    detail: "Mission-Critical Operational Reliability"
  },
  {
    id: "conferences-count",
    metric: "20+",
    value: "20+",
    label: "Conferences & Events Directed",
    context: "Directed premier international medical congresses (Cairo Derma, Vascular Surgery), academic symposia, and TEDx Zagazig.",
    detail: "Multi-Stakeholder Event Operations (On-Budget)"
  },
  {
    id: "experience-years",
    metric: "15+",
    value: "15+",
    label: "Years Multi-Sector Experience",
    context: "Cross-functional career spanning Healthcare, FMCG Manufacturing, HealthTech SaaS, Telecom, Media, and Live Events.",
    detail: "Accumulated Operational Breadth (2008 – 2026)"
  },
  {
    id: "systems-built",
    metric: "4 Systems",
    value: "4 Systems",
    label: "Operational Platforms Built",
    context: "Developed 4 custom production software platforms to eliminate operational friction on EGP 0 external budget.",
    detail: "Digital Transformation as an Operational Enabler"
  }
];

export const secondaryMetrics: SecondaryMetric[] = [
  {
    value: "100%",
    label: "Critical Stock Availability",
    context: "Sustained across 3 consecutive fiscal years for 50+ item codes"
  },
  {
    value: "+65.5%",
    label: "Revenue Expansion",
    context: "Grew from EGP 5.85M (2024) to EGP 9.68M (2025) across Cath Lab operations"
  },
  {
    value: "40–60%",
    label: "Emergency Purchasing Reduction",
    context: "Achieved via procedure-linked clinical replenishment modeling"
  },
  {
    value: ">70%",
    label: "Cost Inflation Absorbed",
    context: "Net margins expanded +56.3% despite severe macroeconomic currency devaluation"
  },
  {
    value: "6 Tools",
    label: "Analytical Decision Models",
    context: "Excel & Sheets reconciliation tools governing consignments, inventory, and pricing"
  }
];
