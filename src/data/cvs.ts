export interface CvItem {
  id: string;
  number: string;
  title: string;
  roleLensId: string;
  targetRoles: string;
  badge: string;
  description: string;
  pdfFile: string;
  highlights: string[];
}

export const cvCatalog: CvItem[] = [
  {
    id: "executive-general",
    number: "01",
    title: "Executive General CV",
    roleLensId: "all",
    targetRoles: "Healthcare Operations Director • General Manager • Operations Director",
    badge: "Comprehensive / ATS-Ready",
    description: "The complete executive presentation covering multi-sector leadership, P&L stewardship, clinical Cath Lab turnaround, custom operational system building, and macroeconomic resilience.",
    pdfFile: "./cv/Mahmoud_Lotfy_CV_Executive_General.pdf",
    highlights: [
      "15+ years of verified multi-sector operational leadership (2008 – 2026)",
      "+56.3% Cath Lab net profit and +65.5% gross revenue growth",
      "Built 4 internal operational platforms using AI-assisted tools on EGP 0 external budget",
      "Operational oversight across ~45 personnel (5–10 direct management)"
    ]
  },
  {
    id: "healthcare-ops",
    number: "02",
    title: "Healthcare Operations CV",
    roleLensId: "healthcare-operations",
    targetRoles: "Healthcare Director • Hospital Operations Manager • Cath Lab Lead",
    badge: "Clinical & Hospital Leadership",
    description: "Tailored specifically for healthcare administration, hospital operations, and specialized clinical unit management with rigorous clinical governance and throughput optimization.",
    pdfFile: "./cv/Mahmoud_Lotfy_CV_Healthcare_Operations.pdf",
    highlights: [
      "+37.8% clinical procedure throughput growth (90–140 monthly procedures)",
      "Zero procedure cancellations due to stock failure across 30+ consecutive months",
      "3-tier patient intake tracking and digital registry deployment",
      "Daily coordination with CCU, Anesthesia, and surgical consultant schedules"
    ]
  },
  {
    id: "supply-chain",
    number: "03",
    title: "Supply Chain Management CV",
    roleLensId: "supply-chain",
    targetRoles: "Supply Chain Manager • Materials Manager • Healthcare Supply Chain Lead",
    badge: "End-to-End Value Chain",
    description: "Focused on mission-critical medical consumables, consignment inventory structures, supplier relationship management, and zero-defect delivery pipelines.",
    pdfFile: "./cv/Mahmoud_Lotfy_CV_Supply_Chain.pdf",
    highlights: [
      "100% availability on 50+ critical surgical item codes (catheters, stents, guidewires)",
      "Consignment balance optimization with zero unrecorded hospital liabilities",
      "Dual-sourcing protocols deployed across 30+ regional pharmaceutical vendors",
      "Zero stockout incidents maintained throughout Egypt's national currency crisis"
    ]
  },
  {
    id: "procurement",
    number: "04",
    title: "Procurement & Sourcing CV",
    roleLensId: "procurement",
    targetRoles: "Head of Procurement • Strategic Sourcing Specialist • Purchasing Lead",
    badge: "Strategic Sourcing & Cost Control",
    description: "Highlighting commercial contract negotiations, commercial audit mechanisms, supplier scorecards, and emergency price mitigation under currency devaluation.",
    pdfFile: "./cv/Mahmoud_Lotfy_CV_Procurement.pdf",
    highlights: [
      "Absorbed >70% currency-driven price spikes via strategic volume commitments",
      "Audited 100% of vendor billing invoices against contracted price books",
      "Established multi-tier supplier redundancy preventing sole-source dependency",
      "Zero single-point supplier dependencies on emergency cardiac supplies"
    ]
  },
  {
    id: "demand-planning",
    number: "05",
    title: "Demand Planning & Inventory Control CV",
    roleLensId: "demand-planning",
    targetRoles: "Demand Planner • Inventory Control Specialist • Materials Lead",
    badge: "Quantitative Inventory Control",
    description: "Emphasizing mathematical safety stocks, dynamic reorder points, consumption tracking, expiration audits, and physical reconciliation governance.",
    pdfFile: "./cv/Mahmoud_Lotfy_CV_Demand_Planning.pdf",
    highlights: [
      "Dynamic rolling 30-day forecast models aligned with consultant caseloads",
      "Automated low-stock threshold triggers and dynamic minimum-safety-stock rules",
      "100% physical vs ledger reconciliation accuracy on high-cost medical implants",
      "Zero stock expiration write-offs on high-value surgical items"
    ]
  },
  {
    id: "business-ops",
    number: "06",
    title: "Business Operations & Growth CV",
    roleLensId: "business-operations",
    targetRoles: "Business Operations Lead • Operations & Strategy Director • P&L Manager",
    badge: "Financial & Operating Model Scaling",
    description: "Centered on business scaling, departmental P&L leadership, cross-functional organizational alignment, unit cost analysis, and lean workflow institutionalization.",
    pdfFile: "./cv/Mahmoud_Lotfy_CV_Business_Operations.pdf",
    highlights: [
      "+56.3% net profit expansion from H1 2024 to H1 2025 (audited financials)",
      "+65.5% departmental gross revenue expansion over the same comparison period",
      "EGP 0 external software expenditure through custom internal application engineering",
      "Elimination of billing revenue leakage via mandatory post-procedure clinical checklists"
    ]
  },
  {
    id: "logistics-ops",
    number: "07",
    title: "Logistics Operations CV",
    roleLensId: "logistics-operations",
    targetRoles: "Operations & Logistics Manager • Warehouse Manager • Field Operations Lead",
    badge: "Storage, Movement & Field Logistics",
    description: "Covering warehouse management, FIFO material staging, multi-site staging logistics, FMCG storage governance, and high-stakes media production location operations.",
    pdfFile: "./cv/Mahmoud_Lotfy_CV_Logistics_Operations.pdf",
    highlights: [
      "Stores and inventory supervision at Verona Sweets with strict FIFO rotation",
      "5 years of commercial media production logistics on major brand campaigns",
      "Strict FIFO physical layout and temperature-controlled staging standards",
      "Rapid turnaround coordination for high-demand surgical and media equipment"
    ]
  },
  {
    id: "events-pr",
    number: "08",
    title: "Events & Communications CV",
    roleLensId: "events-pr",
    targetRoles: "Events Director • Public Relations Manager • Conference Director",
    badge: "Stakeholder Relations & Major Events",
    description: "Detailing 20+ large-scale medical and academic conferences, TEDx leadership, corporate sponsorships, VIP protocol management, and commercial film production.",
    pdfFile: "./cv/Mahmoud_Lotfy_CV_Events_Conferences.pdf",
    highlights: [
      "Directed 20+ national and international medical and academic conferences",
      "Co-Organizer of Zagazig Vascular Surgery & Cairo Derma Conferences",
      "Co-Founder & Chief Operations Organizer of TEDx Zagazig (400+ attendees)",
      "PR Manager of Zagazig University Job Fairs connecting 2,000+ job seekers"
    ]
  }
];
