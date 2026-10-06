export interface CaseStudy {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  domain: string;
  timeframe: string;
  impactSummary: string;
  problem: string;
  whatISaw: string;
  whatIDid: string;
  whatIBuilt: string;
  result: string;
  demonstrates: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "case-01-profitability-transformation",
    number: 1,
    title: "Profitability Transformation",
    subtitle: "P&L Turnaround in a Macroeconomic Inflationary Crisis",
    domain: "Financial Performance & Strategy",
    timeframe: "H1 2024 vs H1 2025",
    impactSummary: "+56.3% YoY net profit growth (record EGP 2,978,995 in H1 2025) and +65.5% gross revenue expansion.",
    problem: "The Cardiac Catheterization Unit operated with limited financial visibility, fragmented reporting, and insufficient profitability analysis. Macroeconomic headwinds surged operating expenditures by +69.9% (imported consumable inflation +35%, currency floatation), threatening departmental operating margins.",
    whatISaw: "Management was making operational decisions without seeing the full financial picture: procedure pricing was static, case mix favored lower-margin procedures, and consumable costs were not tracked against replacement market rates.",
    whatIDid: "Traced every clinical case from admission billing to final settlement; built weekly unit cost models vs budget; transitioned to dynamic replacement-cost pricing; and prioritized high-margin Private category procedures (+50% growth).",
    whatIBuilt: "Advanced profitability & revenue tracking models in Excel, real-time cost monitoring & variance analysis ledgers, and executive board reporting dashboards.",
    result: "Delivered +56.3% YoY net profit growth reaching EGP 2,978,995 in H1 2025; +65.5% gross revenue growth; +27.1% case volume expansion; and contributed ~20% of total hospital revenue stability.",
    demonstrates: "P&L stewardship, financial analysis, margin turnaround, and executive leadership under severe economic inflation."
  },
  {
    id: "case-02-inventory-procurement",
    number: 2,
    title: "Inventory & Procurement Optimization",
    subtitle: "Eliminating Emergency Purchasing & Securing 100% Availability",
    domain: "Supply Chain & Procurement",
    timeframe: "2023 – 2026",
    impactSummary: "40–60% reduction in emergency purchasing, 100% stock availability, and zero cancellations across 30+ consecutive months.",
    problem: "High-value cardiovascular inventory (stents, balloon catheters, pacemakers, guidewires) relied on reactive, manual ordering processes with limited demand forecasting—creating severe risks of clinical stockouts, expensive emergency spot-purchasing (paying up to 40% surcharges), and operational disruptions.",
    whatISaw: "Consumable purchasing was disconnected from upcoming consultant surgical schedules; items were ordered reactively on procedure days; and suppliers exploited emergency orders with inflated price books.",
    whatIDid: "Mapped item usage directly to scheduled case types; developed procedure-linked demand forecasting models; established scheduled weekly vendor replenishment windows; instituted quarterly supplier SLA reviews; and enforced a three-criteria procurement sign-off.",
    whatIBuilt: "Custom web-based Inventory Management Platform with live barcode scanning and automated reorder alerts; plus the Consignment Stent & Balloon Audit Ledger.",
    result: "Slashed emergency purchasing by 40–60%; maintained ~100% operational readiness; and achieved ZERO procedural cancellations or supply disruptions across 30+ consecutive months.",
    demonstrates: "Medical supply chain mastery, demand planning, consignment stock governance, and vendor contract negotiations."
  },
  {
    id: "case-03-revenue-cycle",
    number: 3,
    title: "Revenue Cycle & Collection Improvement",
    subtitle: "Eliminating Billing Leakage & Restructuring Receivables",
    domain: "Revenue Cycle & Cash Management",
    timeframe: "2023 – 2025",
    impactSummary: "20–30% reduction in outstanding balances and elimination of unbilled intra-operative consumables.",
    problem: "Post-procedure billing suffered from unbilled consumables, delayed insurance claim documentation, and uncollected copayments, causing significant accounts receivable backlogs and cash leakage.",
    whatISaw: "Intra-operative items used in surgery were frequently omitted from the final billing file, patient admissions records lacked verified copayment documentation, and collection reviews were ad-hoc.",
    whatIDid: "Instituted a mandatory digital clinical consumption sign-off inside the catheterization suite; synchronized patient admissions documentation with discharge cashiering; and enforced weekly SLA-based collection reviews.",
    whatIBuilt: "End-to-End Billing Tracker & Cash Management Desktop System, providing immediate reconciliation between clinical implants used and final patient/insurance claims.",
    result: "Cut outstanding balances by 20–30%; achieved 100% reconciliation accuracy between physical clinical consumption and financial billing; and eliminated disputed patient accounts.",
    demonstrates: "Revenue cycle management (RCM), accounts receivable optimization, cashiering governance, and financial reconciliation."
  },
  {
    id: "case-04-governance-restructuring",
    number: 4,
    title: "Governance & Control Restructuring",
    subtitle: "Transforming Scattered Operations into a Unified Institutional System",
    domain: "Operational Governance & Hospital Integration",
    timeframe: "2023 – 2024",
    impactSummary: "Cath Lab administratively and operationally re-linked to Al-Obour Hospital's institutional framework with 100% audit readiness.",
    problem: "The unit suffered from fragmented workflows, inventory control gaps, financial vulnerabilities, documentation inconsistencies, and a lack of centralized governance—operating previously as an administratively separate entity from the main hospital.",
    whatISaw: "Operational routines operated in isolation without institutional oversight, reporting was inconsistent, biomedical maintenance SLAs were unenforced, and accountability lines were blurred.",
    whatIDid: "Conducted an exhaustive operational audit of every control gap; prioritized risks by operational impact; redesigned core clinical workflows; and embedded standardized daily documentation into nursing and administrative routines.",
    whatIBuilt: "Standardized Operational Reporting Framework, Nursing KPI Performance Monitoring System, and negotiated a binding 1-Hour MAX emergency response SLA with imaging equipment vendors.",
    result: "Substantially lowered operational and compliance risk, standardized workflows end-to-end, strengthened audit readiness, and successfully re-linked the unit to the hospital's executive governance structure.",
    demonstrates: "Operational restructuring, institutional governance, clinical compliance, and change management."
  },
  {
    id: "case-05-digital-transformation",
    number: 5,
    title: "Digital Transformation",
    subtitle: "Zero-Budget Internal Systems Architecture",
    domain: "Systems Engineering & HealthTech",
    timeframe: "2023 – 2025",
    impactSummary: "Established practical digital workflows across 4 custom web applications and 6 analytical models on EGP 0 external software budget.",
    problem: "Critical operational activities depended on fragmented paper logbooks and manual transcription, while hospital capital budgets had zero allocation for multi-million enterprise software (ERP/HIS) licenses.",
    whatISaw: "Management needed real-time visibility into inventory, patient flow, and P&L, but capital wasn't available; off-the-shelf software would require months of costly customization.",
    whatIDid: "Mapped all clinical and administrative processes; designed clean relational data structures; built 4 custom operational web tools using AI-assisted development methods and 6 advanced analytical models; and deployed them directly to the floor.",
    whatIBuilt: "1) Cath Lab Inventory Management Platform, 2) Case Accounting & Cash Management System, 3) Financial & Operational Analytics Dashboard, 4) Nursing KPI Monitoring System; plus 6 integrated Excel engines.",
    result: "Established practical digital workflows at an external software cost of exactly EGP 0, providing complete operational visibility and audit control.",
    demonstrates: "Practical digital systems building, zero-budget operational innovation, frontline user adoption, and process standardization."
  },
  {
    id: "case-06-decision-support",
    number: 6,
    title: "Management Information & Decision Support",
    subtitle: "Eliminating Data Silos with Unified Executive Dashboards",
    domain: "Analytics & Executive Reporting",
    timeframe: "2023 – 2025",
    impactSummary: "Unified single source of truth created across financial, inventory, and clinical operations, enabling real-time strategic decision making.",
    problem: "Management had no unified visibility. Data was scattered across isolated departmental silos—financial records, inventory logs, and performance reports existed with no integration, making strategic decision-making slow, retrospective, and inconsistent.",
    whatISaw: "Physician scheduling was blind to inventory availability; financial forecasts were disconnected from clinical volume backlogs; and executive leadership received fragmented monthly reports.",
    whatIDid: "Identified every data silo across admissions, clinical suites, pharmacy, and accounting; selected strategic operational KPIs; built a unified relational data model; and deployed live executive dashboards.",
    whatIBuilt: "Unified Executive Management Dashboard connecting daily procedure volume, consumable run-rates, physician case splits, and net contribution yields in real time.",
    result: "Established a trusted Single Source of Truth for the entire department; replaced guesswork with data-driven strategy; and enabled instantaneous executive interventions on cost overruns.",
    demonstrates: "Business intelligence, cross-functional data modeling, executive decision support, and operational transparency."
  },
  {
    id: "case-07-commercial-romi",
    number: 7,
    title: "Commercial / ROMI Strategy",
    subtitle: "250% Return on Marketing Investment via Physician Referral Management",
    domain: "Commercial Strategy & Physician Relations",
    timeframe: "2024 – 2025",
    impactSummary: "250% ROMI (every EGP 1 invested returned EGP 2.5 in net profit) and +50% YoY growth in high-margin Private category cases.",
    problem: "The unit had no structured approach to physician referrals or procedure volume growth. New cases came exclusively through passive word-of-mouth, with no proactive effort to engage external cardiologists or expand high-value private patient volume.",
    whatISaw: "Top interventional cardiologists in the surrounding governorate were referring cases to competing private centers due to lack of awareness of Al-Obour's modernized cath lab suite and reliable consumable availability.",
    whatIDid: "Designed and executed a targeted physician referral strategy: conducted direct clinical outreach and facility tours with regional cardiologists; organized targeted medical awareness sessions; and connected every marketing initiative directly to actual procedure bookings.",
    whatIBuilt: "Physician Referral Economics & Scheduling Tracker, modeling referral conversion rates, procedural category mix, and net contribution margins per physician.",
    result: "Achieved a documented 250% Return on Marketing Investment (ROMI); expanded the high-margin Private category by +50% YoY; and maximized elective room schedule utilization during afternoon blocks.",
    demonstrates: "Commercial strategy, physician relationship management, ROI tracking, and healthcare business development."
  },
  {
    id: "case-08-lost-revenue-discovery",
    number: 8,
    title: "Lost Revenue Discovery",
    subtitle: "Uncovering & Quantifying EGP 2.5M+ in Untracked Revenue Opportunities",
    domain: "Financial Diagnostics & Capacity Analytics",
    timeframe: "2023 – 2025",
    impactSummary: "Identified and modeled recovery plans for over EGP 2.5 million in previously untracked lost-revenue opportunities across 3 years.",
    problem: "The unit suffered from unquantified revenue leakage: long waiting lists for cardiac procedures were treated as a clinical backlog rather than an addressable commercial and capacity opportunity.",
    whatISaw: "Patients on the waiting list experienced extended delays and frequently dropped off or sought treatment elsewhere, while cath lab suites sat idle during late afternoons due to fixed staffing schedules and static pricing.",
    whatIDid: "Conducted an in-depth financial analysis of the Waiting List pricing structure (see Master Dossier Section 6.10); modeled capacity expansion scenarios; quantified the exact financial cost of room turnaround bottlenecks; and proposed tiered afternoon scheduling.",
    whatIBuilt: "Cath Lab Capacity Analysis & Waiting List Revenue Recovery Model, quantifying item-by-item and hour-by-hour revenue leakage.",
    result: "Transformed invisible operational delays into an executive-level business case: identified EGP 2.5M+ in recoverable revenue and provided the operational roadmap to capture it without expanding capital assets.",
    demonstrates: "Financial diagnostics, revenue discovery, capacity optimization, and executive business modeling."
  }
];
