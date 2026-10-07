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
    context: "Surged to EGP 2,978,995 in H1 2025 (vs EGP 1,905,803 in H1 2024), documented in official hospital financial records.",
    detail: "Official Hospital Financial Data · H1 2025 vs H1 2024"
  },
  {
    id: "monthly-procedures",
    metric: "90–140",
    value: "90–140",
    label: "Monthly Procedures — Operating Range",
    context: "Historical operating range · 399 documented cases in H1 2025 (~66/month average).",
    detail: "Operating Range · 399 in H1 2025 (~66/mo)"
  },
  {
    id: "cancellations-zero",
    metric: "ZERO",
    value: "ZERO",
    label: "Supply-Failure Cancellations",
    context: "Zero procedural cancellations due to stock or supply failure sustained across 30+ consecutive months.",
    detail: "Mission-Critical Reliability · Jan 2023 – Apr 2026"
  },
  {
    id: "conferences-count",
    metric: "20+",
    value: "20+",
    label: "Conferences & Events Directed",
    context: "Directed premier international medical congresses (Cairo Derma, Vascular Surgery), academic symposia, and TEDx Zagazig.",
    detail: "Medical Congresses, Symposia & TEDx Leadership"
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
    context: "Built 4 custom internal operational platforms using AI-assisted development tools, with EGP 0 external software spend.",
    detail: "Technology as an Operational Enabler"
  }
];

export const secondaryMetrics: SecondaryMetric[] = [
  {
    value: "100%",
    label: "Critical Stock Availability",
    context: "3 Fiscal Years · 50+ Critical Item Codes"
  },
  {
    value: "+65.5%",
    label: "Gross Revenue Expansion",
    context: "H1 2024 to H1 2025 · EGP 5.85M to EGP 9.68M"
  },
  {
    value: "40–60%",
    label: "Emergency Purchasing Reduction",
    context: "Achieved via procedure-linked clinical replenishment modeling"
  },
  {
    value: ">70%",
    label: "Cost Inflation Mitigated",
    context: "Performance maintained despite severe currency devaluations"
  },
  {
    value: "6 Tools",
    label: "Analytical Decision Models",
    context: "Excel & Sheets reconciliation tools governing consignments, inventory, and pricing"
  }
];
