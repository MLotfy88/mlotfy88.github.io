export interface FinancialComparisonItem {
  growth: string;
  metric: string;
  context: string;
}

export interface MultiYearDataPoint {
  year: string;
  revenueStatus: string;
  profitStatus: string;
  note: string;
}

export const financialMetrics = {
  comparison: [
    {
      growth: "+56.3%",
      metric: "Net Profitability Growth",
      context: "Departmental net profit reached EGP 2,978,995 in H1 2025 (vs EGP 1,905,803 in H1 2024), verified in official hospital financial audits."
    },
    {
      growth: "+65.5%",
      metric: "Gross Revenue Growth",
      context: "Expanded through simultaneous case-volume growth (+27.1%) and average revenue per procedure optimization (+30.2%)."
    },
    {
      growth: "314 → 399",
      metric: "Audited Case Volume",
      context: "Interventional procedures performed in H1 2025 vs H1 2024 (+27.1% procedural volume growth)."
    },
    {
      growth: "18,633 → 24,261",
      metric: "Revenue / Case (EGP)",
      context: "Average revenue generated per interventional procedure (+30.2%) via dynamic replacement-cost pricing adjustment."
    },
    {
      growth: "+65.5%",
      metric: "Top-Line Revenue Expansion",
      context: "Gross annual revenue expanded from EGP 5,850,791 to EGP 9,679,955 in audited statements (+30.4% 3-year CAGR from 2023 baseline)."
    },
    {
      growth: "~20%",
      metric: "Hospital Revenue Contribution",
      context: "Cath Lab operations contributed approximately 20% to the overall financial operating stability of Al-Obour Hospital."
    }
  ],
  trendData: [
    { year: "2023", revenueStatus: "EGP 5,689,106", profitStatus: "Operational Stabilization", note: "Unit restructuring & inventory control initiation" },
    { year: "2024", revenueStatus: "EGP 5,850,791", profitStatus: "EGP 1,905,803 (H1)", note: "Dynamic pricing introduced & waiting list modeled" },
    { year: "2025", revenueStatus: "EGP 9,679,955 (+65.5%)", profitStatus: "EGP 2,978,995 (H1 Record)", note: "Record net profitability (+56.3% YoY)" }
  ],
  growthDrivers: [
    {
      title: "Dynamic Replacement-Cost Pricing",
      detail: "Indexed consumable charges to real-time supplier replacement rates during currency devaluations, protecting contribution margins on surgical devices."
    },
    {
      title: "Optimized Private Case-Mix Prioritization",
      detail: "Engaged leading interventional cardiologists to schedule elective private procedures during underutilized afternoon room blocks (+50% private volume growth)."
    },
    {
      title: "Elimination of Post-Procedure Billing Leakage",
      detail: "Mandated digital consumption sign-offs inside the operating room, ensuring 100% of stents, wires, and balloons were accurately billed to patients/insurance."
    },
    {
      title: "100% Invoice Audit Against Contracted Price Books",
      detail: "Audited every supplier delivery invoice before treasury payment, stopping price discrepancies, erroneous surcharges, and unrecorded hospital liabilities."
    }
  ]
};

export const operatingUnderPressure = {
  title: "OPERATING UNDER PRESSURE",
  subtitle: "Sustained Profitability (+56.3%) Despite >70% Rise in Operational Costs",
  contextFactors: [
    { factor: "FX Shortage", description: "Severe foreign exchange scarcity constraining imports of cardiovascular consumables." },
    { factor: "Currency Shock", description: "Official EGP floatation (-38%) with parallel currency spikes reaching 70–72 EGP/USD." },
    { factor: "Import Disruption", description: "National distributor stock rationing and delayed medical clearance cycles." },
    { factor: "Material Inflation", description: ">35% inflation in imported medical consumables and surging replacement costs." },
    { factor: "Interest-Rate Pressure", description: "High capital borrowing costs tightening healthcare facility operating liquidity." },
    { factor: "Supply Uncertainty", description: "Widespread cancellations in competitor hospitals due to missing catheters and stents." }
  ],
  howIResponded: [
    { strategy: "Procurement Timing", action: "Negotiated forward bulk volume contracts locking in critical consumable pricing prior to official devaluation announcements." },
    { strategy: "Supplier Negotiation", action: "Instituted rigorous dual-sourcing across 30+ regional suppliers, completely eliminating single-point failure risks." },
    { strategy: "Demand Planning", action: "Built procedure-linked replenishment models tied directly to consultant bookings, slashing emergency spot-purchasing by 40–60%." },
    { strategy: "Inventory Control", action: "Governed consignment stocks via live barcode scanning, maintaining 100% availability for 50+ critical item codes." },
    { strategy: "Cost Discipline", action: "Audited 100% of vendor invoices against contracted price books, preventing phantom distributor storage markups." },
    { strategy: "Resource Allocation", action: "Prioritized high-margin private case mix (+50%) and capped recovery room buffer stock to 12 patients." },
    { strategy: "Market Monitoring", action: "Continuously modeled replacement costs and aligned procedure tariffs to preserve solvency without reckless cost burden on patients." }
  ],
  bottomLine: "+56.3% net profitability growth and zero procedure cancellations achieved despite >70% cost inflation."
};
