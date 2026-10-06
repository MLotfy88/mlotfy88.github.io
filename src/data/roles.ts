export interface RoleLens {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  pitch: string;
  focusAreas: string[];
  keyMetrics: { label: string; value: string }[];
  targetPositions: string;
  recommendedCvTitle: string;
  cvFileNamePdf: string;
}

export const roleLenses: RoleLens[] = [
  {
    id: "all",
    number: "00",
    title: "Master Profile (All Lenses)",
    subtitle: "Healthcare Operations Director • Business Operations • Supply Chain & Procurement",
    pitch: "A comprehensive executive presentation integrating multi-sector leadership across healthcare administration, departmental P&L turnaround, practical internal system building, and mission-critical supply chain governance.",
    focusAreas: [
      "Clinical Unit Operations & Turnaround",
      "End-to-End Medical Supply Chain & Consignments",
      "Departmental P&L Stewardship (+56.3% Profit)",
      "Internal Digital Systems Building (Zero Budget)",
      "Performance Maintained Despite Macroeconomic Inflation (>70%)"
    ],
    keyMetrics: [
      { label: "Net Profit Growth", value: "+56.3%" },
      { label: "Critical Stock Availability", value: "100%" },
      { label: "Supply Cancellations", value: "Zero (30+ Mos)" },
      { label: "Operational Platforms Built", value: "4 Platforms" }
    ],
    targetPositions: "Healthcare Operations Director • General Manager • Business Operations Director",
    recommendedCvTitle: "Executive General CV",
    cvFileNamePdf: "./cv/Mahmoud_Lotfy_CV_Executive_General.pdf"
  },
  {
    id: "healthcare-operations",
    number: "01",
    title: "Healthcare Operations",
    subtitle: "Clinical Governance, Surgical Throughput & Hospital Unit Leadership",
    pitch: "Over 5+ years directing a high-acuity Cardiac Catheterization Unit (Cath Lab) with 90–140 complex procedures per month. Championed patient throughput (+37.8%), synchronized cross-departmental flows (CCU, ICU, Operating Theatres), and achieved zero procedural cancellations across 30+ consecutive months.",
    focusAreas: [
      "Cath Lab & Specialized Surgical Unit Direction",
      "Clinical Workflow Optimization & Turnaround",
      "Capacity Planning & Scheduling (90–140 Cases/Mo)",
      "Cross-Functional Operational Oversight (~45 Personnel)",
      "Clinical Consumables Governance (Catheters, Stents, Pacemakers)"
    ],
    keyMetrics: [
      { label: "Monthly Procedures", value: "90–140" },
      { label: "Case Readiness", value: "~100%" },
      { label: "Net Profit YoY", value: "+56.3%" },
      { label: "Operational Oversight", value: "~45 Personnel" }
    ],
    targetPositions: "Healthcare Operations Director • Hospital Operations Manager • Cath Lab Operations Lead • Director of Clinical Services",
    recommendedCvTitle: "Healthcare Operations CV",
    cvFileNamePdf: "./cv/Mahmoud_Lotfy_CV_Healthcare_Operations.pdf"
  },
  {
    id: "supply-chain",
    number: "02",
    title: "Supply Chain",
    subtitle: "Medical Consignment Governance, Continuous Readiness & Vendor SLAs",
    pitch: "Engineered high-reliability supply chains for cardiovascular surgical devices. Maintained 100% availability on 50+ critical codes across 30+ consecutive months without a single stockout, deploying dynamic consignment reconciliations, 1-Hour MAX vendor SLAs, and dual-sourcing contracts mitigating >70% inflation.",
    focusAreas: [
      "Medical Consignment Stock Governance",
      "Strategic Supplier Sourcing & Redundancy (30+ Partners)",
      "Procedure-Linked Replenishment Modeling",
      "Vendor Response SLAs (1-Hour MAX Emergency)",
      "Emergency Purchasing Reduction (40–60%)"
    ],
    keyMetrics: [
      { label: "Critical Stock Availability", value: "100%" },
      { label: "Supply Disruptions", value: "ZERO (30+ Mos)" },
      { label: "Emergency Orders", value: "-40% to -60%" },
      { label: "Inflation Mitigated", value: ">70%" }
    ],
    targetPositions: "Supply Chain Manager • Materials Manager • Healthcare Supply Chain Lead • Director of Supply Chain",
    recommendedCvTitle: "Supply Chain Management CV",
    cvFileNamePdf: "./cv/Mahmoud_Lotfy_CV_Supply_Chain.pdf"
  },
  {
    id: "procurement",
    number: "03",
    title: "Procurement",
    subtitle: "Strategic Sourcing, Commercial Negotiations & Cost Control",
    pitch: "Directed strategic sourcing, vendor negotiations, and contract compliance across 30+ regional pharmaceutical and surgical suppliers. Mitigated >70% currency-driven price spikes via forward volume commitments, audited 100% of vendor invoices against contracted price books, and eliminated single-source dependencies.",
    focusAreas: [
      "Commercial Contract & Tariff Negotiations",
      "100% Vendor Invoice Auditing Against Master Price Books",
      "Multi-Tier Supplier Redundancy & Dual Sourcing",
      "Consumable Replacement-Cost Price Indexing",
      "Emergency Surcharge & Storage Fee Elimination"
    ],
    keyMetrics: [
      { label: "Invoices Audited", value: "100%" },
      { label: "Inflation Mitigated", value: ">70%" },
      { label: "Single-Source Risks", value: "Eliminated" },
      { label: "Supplier Partners", value: "30+ Vendors" }
    ],
    targetPositions: "Head of Procurement • Strategic Sourcing Specialist • Purchasing Lead • Commercial Sourcing Manager",
    recommendedCvTitle: "Procurement & Sourcing CV",
    cvFileNamePdf: "./cv/Mahmoud_Lotfy_CV_Procurement.pdf"
  },
  {
    id: "demand-planning",
    number: "04",
    title: "Demand Planning & Inventory",
    subtitle: "Calibrated Safety Stocks, Dynamic Reorder Points & Barcode Governance",
    pitch: "Transformed reactive purchasing into an automated, predictive demand planning engine. Built rolling 30-day forecast models tied directly to consultant procedure schedules, slashing costly spot orders by 40–60% and achieving 100% physical vs ledger reconciliation.",
    focusAreas: [
      "Procedure-Linked Demand Planning",
      "Rolling 30-Day Forecast Models",
      "Consignment Inventory Governance",
      "Dynamic Safety Stocks & Reorder Points",
      "Barcode Tracking & Expiry Date Management"
    ],
    keyMetrics: [
      { label: "Reconciliation Accuracy", value: "100%" },
      { label: "Stock Discrepancy", value: "0.0%" },
      { label: "Forecast Horizon", value: "Rolling 30 Days" },
      { label: "Emergency Spot Orders", value: "-40% to -60%" }
    ],
    targetPositions: "Demand Planner • Inventory Control Specialist • Materials Planning Lead • Healthcare Inventory Controller",
    recommendedCvTitle: "Demand Planning & Inventory CV",
    cvFileNamePdf: "./cv/Mahmoud_Lotfy_CV_Demand_Planning.pdf"
  },
  {
    id: "business-operations",
    number: "05",
    title: "Business Operations & Management",
    subtitle: "Departmental P&L Stewardship, Margin Turnaround & Systemic Scaling",
    pitch: "Turned the Cath Lab into the hospital's financial growth engine: delivered +56.3% net profit growth and +65.5% revenue expansion within 12 months. Mastered unit contribution economics, eliminated billing leakage, and built custom operational platforms on zero external software budget.",
    focusAreas: [
      "Departmental P&L Leadership & Margin Scaling",
      "Revenue Cycle Management & Leakage Elimination",
      "Cost Control & Budget Management",
      "Operational Restructuring & Governance",
      "Internal Operational Systems Building"
    ],
    keyMetrics: [
      { label: "Net Profit YoY", value: "+56.3%" },
      { label: "Gross Revenue Growth", value: "+65.5%" },
      { label: "Software Budget", value: "EGP 0" },
      { label: "Hospital Contribution", value: "~20% Total" }
    ],
    targetPositions: "Business Operations Lead • Operations & Strategy Director • P&L Manager • Operational Scaling Director",
    recommendedCvTitle: "Business Operations CV",
    cvFileNamePdf: "./cv/Mahmoud_Lotfy_CV_Business_Operations.pdf"
  },
  {
    id: "logistics-operations",
    number: "06",
    title: "Logistics & Operations",
    subtitle: "Warehouse Management, Material Movement & Field Operations",
    pitch: "Direct frontline logistics leadership across FMCG factory warehouses (Verona Sweets) and high-stakes commercial film productions (Vodafone, Huawei). Expert in strict FIFO rotation, staging layouts, fleet/crew movement, and high-tempo operational diplomacy.",
    focusAreas: [
      "Warehouse Physical Layout & FIFO Governance",
      "FMCG Raw Material Staging & Stock Rotation",
      "High-Stakes Media Production Location Logistics",
      "Rapid Mobilization of 50+ Personnel Crews",
      "Regulatory Permits & Inter-Agency Coordination"
    ],
    keyMetrics: [
      { label: "Crew Logistics", value: "50+ Personnel" },
      { label: "Warehouse Turnaround", value: "100% FIFO" },
      { label: "Campaigns Executed", value: "5+ Major Brands" },
      { label: "Safety & Compliance", value: "100% Permitted" }
    ],
    targetPositions: "Operations & Logistics Manager • Warehouse Operations Manager • Field Logistics Lead • Staging Director",
    recommendedCvTitle: "Logistics Operations CV",
    cvFileNamePdf: "./cv/Mahmoud_Lotfy_CV_Logistics_Operations.pdf"
  },
  {
    id: "events-conferences",
    number: "07",
    title: "Events & Medical Conferences",
    subtitle: "Medical Congresses, Institutional PR & High-Acuity Audience Staging",
    pitch: "Directed and organized 20+ premier national and international medical and academic conferences (Cairo Derma, Vascular Surgery Annual Congress, TEDx Zagazig). Combines high-level protocol diplomacy with meticulous staging, VIP hospitality, and sponsor coordination.",
    focusAreas: [
      "Medical & Academic Congress Direction",
      "International VIP Speaker Protocol & Logistics",
      "TEDx Licensing, Curation & Stage Execution",
      "Sponsorship Acquisition & Corporate Partnerships",
      "Large-Scale Crowd Logistics (up to 2,000+ Attendees)"
    ],
    keyMetrics: [
      { label: "Conferences Directed", value: "20+ Congresses" },
      { label: "Medical Delegates", value: "500+ Specialists" },
      { label: "Job Fair Scale", value: "2,000+ Job Seekers" },
      { label: "Corporate Partners", value: "30+ Sponsors" }
    ],
    targetPositions: "Events Director • Public Relations Manager • Conference Director • Strategic Communications Lead",
    recommendedCvTitle: "Events & Communications CV",
    cvFileNamePdf: "./cv/Mahmoud_Lotfy_CV_Events_Conferences.pdf"
  },
  {
    id: "digital-transformation",
    number: "08",
    title: "Digital Transformation / Operations Analytics",
    subtitle: "Operational Problem Solving Through Technology — 4 Platforms, EGP 0 Budget",
    pitch: "Technology as an operational enabler: built 4 custom operational applications and 6 advanced Excel/Sheets modules from scratch on an external software budget of EGP 0. Designed for practical frontline adoption by clinicians and administrative staff.",
    focusAreas: [
      "Operational Problem Solving Through Technology",
      "Custom Enterprise Web Applications (React, TypeScript, SQLite)",
      "Barcode Scanner Integration & Inventory APIs",
      "Advanced Excel/Sheets Analytical Engines",
      "Decision Support & Executive Dashboards"
    ],
    keyMetrics: [
      { label: "Software Budget", value: "EGP 0" },
      { label: "Operational Platforms", value: "4 Systems" },
      { label: "Analytical Models", value: "6 Engines" },
      { label: "Adoption Rate", value: "100% Frontline" }
    ],
    targetPositions: "Digital Transformation Lead • Operations Analytics Manager • Systems & Process Architect • Business Systems Lead",
    recommendedCvTitle: "Executive General CV",
    cvFileNamePdf: "./cv/Mahmoud_Lotfy_CV_Executive_General.pdf"
  },
  {
    id: "creative-media",
    number: "09",
    title: "Creative / Media / Production",
    subtitle: "High-Budget Commercial Film Production Logistics & Location Direction",
    pitch: "5 years (2014–2019) across high-budget commercial television and advertising sets (Vodafone, Huawei, Jumia, Cairo Festival City). Operating as Assistant Production Manager, Location Manager, and Assistant Director under extreme time sensitivity and financial penalties.",
    focusAreas: [
      "Commercial Television & Film Logistics",
      "Crew Coordination & Daily Call Sheets (50+ Crew)",
      "Location Permitting & Municipal Diplomacy",
      "Creative Direction as an Operational Capability",
      "Rapid Crisis Resolution on Active Film Sets"
    ],
    keyMetrics: [
      { label: "Years in Production", value: "5 Years (2014–2019)" },
      { label: "Crew Scale", value: "50+ Personnel" },
      { label: "Named Commercials", value: "8+ Major Brands" },
      { label: "Schedule Delivery", value: "100% On-Time" }
    ],
    targetPositions: "Production Manager • Location Manager • Creative Operations Lead • Commercial Project Director",
    recommendedCvTitle: "Events & Communications CV",
    cvFileNamePdf: "./cv/Mahmoud_Lotfy_CV_Events_Conferences.pdf"
  }
];
