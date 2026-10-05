export interface SoftwarePlatform {
  id: string;
  number: number;
  name: string;
  purpose: string;
  stack: string;
  description: string;
  businessProblem: string;
  solution: string;
  technology: string;
  operationalPurpose: string;
  impact: string;
}

export interface ExcelSystem {
  number: number;
  name: string;
  purpose: string;
  features: string;
  impact: string;
}

export const techPhilosophy = {
  headline: "Operational Problem Solving Through Technology",
  quote: "Technology is a tool, not the goal. I don't wait for enterprise software budgets that may never arrive. When operations demand clarity, I design, code, and deploy custom production tools from scratch.",
  investment: "~3,570 Hours",
  budget: "EGP 0"
};

export const softwarePlatforms: SoftwarePlatform[] = [
  {
    id: "system-01-inventory",
    number: 1,
    name: "Cath Lab Inventory Management Platform",
    purpose: "Real-Time Consumable Governance & Expiry Control",
    stack: "HTML5 • JavaScript (ES6+) • Local Server • Barcode API",
    description: "A specialized web-based inventory management platform built to govern high-cost cardiovascular consumables (stents, balloon catheters, pacemakers, guidewires).",
    businessProblem: "High-value inventory relied on manual paper logs, creating stock discrepancies, unmonitored expiration dates, and costly emergency spot purchases.",
    solution: "Built a real-time web application with hardware barcode scanning, batch-level tracking, automated reorder triggers, and weekly ledger reconciliation.",
    technology: "Web-based application, barcode scanner integration, local database architecture.",
    operationalPurpose: "Eliminate stockouts, enforce consignment custody, and prevent unrecorded hospital liabilities.",
    impact: "100% material stock availability, zero procedure cancellations, and 40–60% reduction in emergency purchasing across 30+ months."
  },
  {
    id: "system-02-cash-accounting",
    number: 2,
    name: "Case Accounting & Cash Management System",
    purpose: "Point-of-Service Patient Billing, Cashiering & Treasury Reconciliations",
    stack: "React • Desktop Architecture • Local Database • Financial Engine",
    description: "A dedicated point-of-sale procedure billing, cashiering, and treasury reconciliation application.",
    businessProblem: "Point-of-service patient collections, split insurance copayments, and cash banking were vulnerable to calculation errors and delayed bank reconciliations.",
    solution: "Engineered a secure financial application for case billing, split payments, cash drawers, and daily automated deposit reconciliation.",
    technology: "React, local database engine, financial transaction logging.",
    operationalPurpose: "Ensure 100% financial accuracy between clinical admissions, cashiering, and central hospital treasury.",
    impact: "100% financial reconciliation accuracy with zero discrepancies, and instantaneous daily reporting to hospital accounting."
  },
  {
    id: "system-03-analytics-dashboard",
    number: 3,
    name: "Financial & Operational Analytics Dashboard",
    purpose: "Single Source of Truth Connecting Clinical Volume, Consumables & P&L",
    stack: "Web Analytics Engine • Data Processing Architecture • Charting Library",
    description: "A centralized operational analytics dashboard unifying disparate departmental data streams into live executive KPIs.",
    businessProblem: "Management was blind to real-time operations due to isolated data silos between admissions, surgical suites, pharmacy, and accounting.",
    solution: "Designed a unified data model linking patient case volume, consumable consumption run-rates, physician referrals, and procedure margins.",
    technology: "Relational data modeling, interactive analytical dashboards, variance calculation engines.",
    operationalPurpose: "Provide management with real-time decision support and instant visibility into cost overruns.",
    impact: "Created the department's trusted Single Source of Truth, directly guiding the operational reforms that expanded net profit by +56.3%."
  },
  {
    id: "system-04-nursing-kpis",
    number: 4,
    name: "Nursing KPI Monitoring System",
    purpose: "Objective Multi-Criteria Performance Scorecards & Quality Governance",
    stack: "Analytics Platform • Objective Scoring Engine • Evaluation Matrix",
    description: "An objective performance evaluation platform tracking clinical readiness, room turnover times, and procedural support quality.",
    businessProblem: "Clinical staff performance evaluations relied heavily on subjective impressions, limiting accountability, transparency, and team growth.",
    solution: "Constructed an objective weighted scoring system tracking room turnover speed, sterilization protocols, consumable custody, and case readiness.",
    technology: "Multi-criteria evaluation algorithms, automated ranking, Individual Development Plan (IDP) tracking.",
    operationalPurpose: "Replace subjective assessments with transparent, objective performance standards.",
    impact: "Drove clinical case readiness to ~100%, enhanced nursing team accountability, and established an objective foundation for merit recognition."
  }
];

export const excelSystems: ExcelSystem[] = [
  {
    number: 1,
    name: "Financial Management Module",
    purpose: "P&L tracking, procedure margin simulator, and expense variance analysis.",
    features: "Automated dynamic pivot models, replacement-cost pricing algorithms, and expense overrun triggers.",
    impact: "Tracked departmental P&L weekly and guided pricing models that expanded net profit by +56.3%."
  },
  {
    number: 2,
    name: "Inventory Module",
    purpose: "Stock tracking, consignment ledger, and procedure-linked demand planning.",
    features: "Safety stock calculators, serial number tracking, and automated consumption debiting.",
    impact: "Sustained 100% stock availability and slashed emergency spot purchasing by 40–60%."
  },
  {
    number: 3,
    name: "Operations Reporting Module",
    purpose: "Standardized clinical documentation, room turnover timestamps, and case scheduling.",
    features: "Procedure timeline tracking, room utilization analytics, and consultant availability calendars.",
    impact: "Halved inter-procedure room turnaround times and expanded throughput by +37.8%."
  },
  {
    number: 4,
    name: "Staff KPI Tracking Module",
    purpose: "Performance scorecards, weighted evaluations, and Individual Development Plans (IDPs).",
    features: "Objective scoring formulas, monthly performance rankings, and gap detection alerts.",
    impact: "Replaced subjective reviews with measurable standards, driving procedural readiness to ~100%."
  },
  {
    number: 5,
    name: "SLA Dashboard Module",
    purpose: "Vendor performance monitoring, equipment response tracking, and collection review SLAs.",
    features: "SLA breach alerts, supplier delivery lead-time scorecards, and accounts receivable aging trackers.",
    impact: "Enforced 1-Hour MAX emergency vendor response times and reduced outstanding AR balances by 20–30%."
  },
  {
    number: 6,
    name: "Billing Tracker Module",
    purpose: "End-to-end revenue cycle tracking from clinical case completion to final settlement.",
    features: "Implant-to-billing cross-referencing, insurance claims status tracker, and cashiering reconciliations.",
    impact: "Eliminated intra-operative consumable billing leakage and protected cash flow."
  }
];
