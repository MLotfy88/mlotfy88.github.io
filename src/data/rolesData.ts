export interface MetricItem {
  label: string;
  value: string;
  note: string;
  highlight?: boolean;
}

export interface StoryItem {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  whatISaw: string;
  whatIDid: string;
  whatIBuilt?: string;
  result: string;
  demonstrates: string;
}

export interface DigitalEnabler {
  title: string;
  subtitle: string;
  description: string;
  systemsSummary?: string;
  externalCost: string;
  platforms: { name: string; tech: string; description: string; impact: string }[];
}

export interface RoleCapability {
  name: string;
  level: number; // out of 5
  description: string;
}

export interface RoleTimelineItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface RoleData {
  slug: string;
  navTitle: string;
  roleTitle: string;
  roleBadge: string;
  subtitle: string;
  valueProposition: string;
  executiveSummary: string;
  cvPdf: string;
  cvDocx?: string;
  cvTitle: string;
  metrics: MetricItem[];
  stories: StoryItem[];
  digitalEnabler: DigitalEnabler;
  capabilities: RoleCapability[];
  timeline: RoleTimelineItem[];
}

export const rolesData: Record<string, RoleData> = {
  "healthcare-ops": {
    slug: "healthcare-ops",
    navTitle: "Healthcare Ops",
    roleTitle: "Healthcare Operations Leadership",
    roleBadge: "Target Role: Healthcare Operations Director",
    subtitle: "High-Volume Cath Lab Leadership · Clinical Workflow Turnaround · Zero-Failure Supply Governance",
    valueProposition:
      "Managed end-to-end operations of a high-volume Cardiac Catheterization Unit (operating range 90–140 procedures/month; averaging ~66 complex cases/mo), delivering +56.3% YoY net profit growth while maintaining ZERO supply failures across 30+ months — under >70% macroeconomic cost inflation.",
    executiveSummary:
      "Over 5+ years leading specialized clinical operations at Al-Obour Hospital, I unified administrative oversight, nursing workflows, and supply chain governance for a high-acuity interventional unit. By instituting procedure-linked consumable forecasting, strict financial controls, and custom frontline digital tools, I transformed the department into the hospital's primary financial and clinical anchor (~20% of total revenue).",
    cvPdf: "./cv/Mahmoud_Lotfy_CV_Healthcare_Operations.pdf",
    cvTitle: "Healthcare Operations CV (PDF)",
    metrics: [
      { label: "Net Profit Growth YoY", value: "+56.3%", note: "H1 2025 vs H1 2024 · Official Hospital Financial Data", highlight: true },
      { label: "Revenue Growth YoY", value: "+65.5%", note: "H1 2024 to H1 2025 · EGP 5.85M to EGP 9.68M", highlight: true },
      { label: "Supply Failure Cancellations", value: "ZERO", note: "Jan 2023 – Apr 2026 · 30+ Consecutive Months", highlight: true },
      { label: "Monthly Procedures — Operating Range", value: "90–140", note: "Historical operating range; 399 documented cases in H1 2025 (~66/mo)" },
      { label: "Operational Oversight", value: "~45 Personnel", note: "Direct management of 5–10 accounting/operations staff, with broader operational oversight across ~45 personnel" },
      { label: "Equipment Readiness", value: "100%", note: "Zero unplanned imaging shutdowns; 1-Hour MAX vendor emergency SLA" }
    ],
    stories: [
      {
        id: "transition-story",
        title: "From Clinical Accountant to Operations Lead",
        subtitle: "Bridging the Chasm Between Medical Staff and Financial Management",
        problem: "The Cardiac Catheterization Unit operated in administrative isolation from Al-Obour Hospital. Surgeons, nursing supervisors, and administrative accountants had divergent priorities, leading to unbilled surgical consumables, scheduling bottlenecks, and uncoordinated procurement.",
        whatISaw: "I noticed that administrative leadership lacked real-time visibility into the surgical suite, while clinicians felt constrained by bureaucratic procurement delays. Decisions were reactive, based on intuition rather than unified operational data.",
        whatIDid: "I systematically mapped every stage of the patient and consumable lifecycle—from pre-operative admission and inventory staging to intra-operative consumption and discharge billing. I presented a comprehensive restructuring plan to hospital executive leadership and was appointed to lead operations.",
        whatIBuilt: "Standardized Daily Operational Protocols, integrated clinical consumption logs, and an open interdepartmental communication rhythm between surgical consultants, nursing heads, and the hospital director.",
        result: "Significantly reduced operational friction, synchronized clinical schedules with consumable availability, and successfully re-linked the unit to the hospital's core executive governance.",
        demonstrates: "Operational restructuring, cross-functional diplomacy, change management, and executive initiative."
      },
      {
        id: "zero-supply-failure",
        title: "Zero Supply Cancellations for 30+ Consecutive Months",
        subtitle: "Securing Mission-Critical Stents and Catheters in a Crisis",
        problem: "High-value cardiovascular consumables (drug-eluting stents, balloon catheters, guidewires) were historically ordered reactively. In a field where an unavailable stent during emergency PCI is life-threatening, stockouts meant canceled surgeries or frantic spot purchases at 40% surcharges.",
        whatISaw: "Procurement orders were disconnected from the upcoming surgical backlog and consultant preferences. Supplier delivery delays were accepted as unavoidable market conditions.",
        whatIDid: "Built a dynamic procedure-linked demand forecasting model that tied replenishment directly to scheduled cases and historical consumption velocity. Negotiated a binding 1-Hour MAX emergency response SLA with primary device vendors and established dual-sourcing agreements for all critical codes.",
        whatIBuilt: "Custom Web-based Inventory Management Platform with barcode scanning, automated reorder thresholds, and consignment audit ledgers.",
        result: "Zero procedure cancellations due to supply failure across 30+ consecutive months, 100% critical stock availability, and a 40–60% reduction in emergency spot orders.",
        demonstrates: "Healthcare supply chain mastery, patient safety prioritization, demand forecasting, and vendor contract governance."
      },
      {
        id: "profit-under-pressure",
        title: "Delivering +56.3% Net Profit Under Severe Cost Inflation",
        subtitle: "Margin Protection and Case-Mix Optimization",
        problem: "Between 2023 and 2025, macroeconomic currency devaluations drove imported medical consumable costs up by +69.9%. Without aggressive operational intervention, departmental operating margins would have collapsed into net losses.",
        whatISaw: "Pricing schedules were static and unlinked to replacement costs. Low-margin subsidized procedures were consuming peak-hour room capacity, while higher-value Private cases lacked dedicated operational scheduling.",
        whatIDid: "Introduced dynamic replacement-cost pricing models, audited 100% of vendor invoices against contracted master price books, and prioritized afternoon capacity for Private category cases (+50% growth). Concurrently established a structured physician referral coordination framework that drove +50% growth in Private elective cases, optimizing departmental operating returns.",
        whatIBuilt: "Real-time P&L variance tracker in Excel and executive board reporting dashboards monitoring case contribution margins daily.",
        result: "Achieved record net profit of EGP 2,978,995 in H1 2025 (+56.3% YoY growth), expanded gross revenues by +65.5%, and grew procedure volume by +27.1%.",
        demonstrates: "P&L stewardship, financial discipline, commercial healthcare strategy, and crisis resilience."
      }
    ],
    digitalEnabler: {
      title: "Technology as an Operational Enabler",
      subtitle: "Custom-Built Digital Infrastructure with Zero External Budget",
      description: "Rather than waiting for enterprise software licenses, I designed and built targeted internal operational tools and digital workflows using AI-assisted development methods to eliminate administrative friction and enforce operational discipline on the floor.",
      systemsSummary: "4 Custom Platforms",
      externalCost: "EGP 0",
      platforms: [
        {
          name: "Nursing KPI & Shift Monitoring Platform",
          tech: "Full KPI System · Web Architecture",
          description: "Digitized daily shift logs, infection control checklists, and performance scoring across 45 personnel.",
          impact: "Minimized subjective evaluations and established transparent clinical performance governance."
        },
        {
          name: "Medical Diagnostic Reports System",
          tech: "Desktop App · Standardized Templates",
          description: "Replaced vulnerable Word files with a structured, standardized report generation engine for catheterization results.",
          impact: "Standardized clinical documentation, prevented lost reports, and expedited patient discharge."
        },
        {
          name: "Inventory & Consignment Tracker",
          tech: "Web Application · Barcode Scanning Integration",
          description: "Real-time tracking of stents, balloons, and guide wires with automated replenishment alerts.",
          impact: "Maintained 100% physical-to-ledger reconciliation accuracy and zero unbilled consumables."
        }
      ]
    },
    capabilities: [
      { name: "Clinical Unit Operations & Turnaround", level: 5, description: "End-to-end administration of high-acuity surgical units, capacity scheduling, and patient throughput." },
      { name: "P&L Management & Financial Stewardship", level: 5, description: "Full unit financial accountability, variance analysis, dynamic pricing, and cost discipline." },
      { name: "Medical Supply Chain & Consignments", level: 5, description: "Consignment stock governance, procedure-linked replenishment, and vendor SLA enforcement." },
      { name: "Operational Oversight (~45 Personnel)", level: 5, description: "Direct management of 5–10 accounting/operations staff, with broader operational oversight across specialized nursing, surgical technicians, and administrative coordinators." },
      { name: "Governance & Audit Readiness", level: 5, description: "Standardizing workflows to meet institutional healthcare accreditation and medical audit compliance." },
      { name: "Crisis Management & Inflation Absorption", level: 5, description: "Maintaining unbroken clinical readiness through extreme currency shocks and market shortages." }
    ],
    timeline: [
      {
        period: "2023 – April 2026",
        role: "Healthcare Operations & Supply Chain Lead — Cath Lab",
        organization: "Al-Obour Hospital",
        location: "Zagazig, Sharkia, Egypt",
        summary: "Full administrative, financial, clinical workflow, and supply chain leadership of the specialized Cardiac Catheterization Unit.",
        highlights: [
          "+56.3% YoY net profit growth; +65.5% gross revenue expansion (H1 2024 vs H1 2025)",
          "Zero procedure cancellations due to supply failure across 30+ consecutive months",
          "Operational oversight of ~45 personnel (5–10 direct management) across 90–140 procedures/month",
          "Built 4 internal operational platforms using AI-assisted tools on zero external software budget"
        ]
      },
      {
        period: "2019 – 2023",
        role: "Cath Lab Accounting & Unit Coordinator",
        organization: "Al-Obour Hospital",
        location: "Zagazig, Sharkia, Egypt",
        summary: "Managed admissions, patient billing, treasury, and supplier reconciliation for the catheterization unit prior to executive promotion.",
        highlights: [
          "Prevented billing leakage by introducing intra-operative consumable sign-off sheets",
          "Restructured patient receivables and reduced overdue balances by 20–30%",
          "Audited 100% of medical supplier invoices against contracted master price books"
        ]
      },
      {
        period: "2018 – 2019",
        role: "Healthcare Software / Client Operations",
        organization: "ClinPrime — Healthcare Operations Software",
        location: "Egypt",
        summary: "Managed operational onboarding and clinical workflow support for 30+ hospital and clinic clients.",
        highlights: [
          "Cut average support ticket resolution time from 48 hours to 24 hours within 6 months",
          "Developed standardized hospital onboarding playbooks and clinical support escalation workflows"
        ]
      }
    ]
  },

  "supply-chain": {
    slug: "supply-chain",
    navTitle: "Supply Chain",
    roleTitle: "Supply Chain Management",
    roleBadge: "Target Role: Supply Chain Manager",
    subtitle: "Demand Forecasting · Consignment Governance · 1-Hour Emergency SLAs · Zero Disruptions",
    valueProposition:
      "Built and managed a procedure-linked demand forecasting model that reduced emergency purchasing by 40–60%, maintained 100% stock availability across 3 fiscal years, and achieved ZERO supply disruptions for 30+ consecutive months — in a high-value medical consumables environment under >70% cost inflation.",
    executiveSummary:
      "Specialized in high-reliability supply chain management for mission-critical medical consumables (drug-eluting stents, PTCA balloon catheters, pacemakers, introducer sheaths). By deploying calibrated safety stock levels, procedure-linked replenishment models, and strict vendor SLA contracts, I prevented stockouts and shielded clinical operations from extreme currency shocks.",
    cvPdf: "./cv/Mahmoud_Lotfy_CV_Supply_Chain.pdf",
    cvTitle: "Supply Chain Management CV (PDF)",
    metrics: [
      { label: "Supply Disruptions", value: "ZERO", note: "Jan 2023 – Apr 2026 · 30+ Consecutive Months", highlight: true },
      { label: "Emergency Purchasing Reduction", value: "40–60%", note: "Transitioned from ad-hoc spot purchasing to scheduled weekly replenishment", highlight: true },
      { label: "Critical Stock Availability", value: "100%", note: "3 Fiscal Years · 50+ Critical Surgical Item Codes", highlight: true },
      { label: "Vendor Emergency Response SLA", value: "1 Hour MAX", note: "Contractually enforced response time for specialized surgical sizes" },
      { label: "Physical vs Ledger Accuracy", value: "100%", note: "Zero stock discrepancy across 50+ critical surgical item codes" },
      { label: "Cost Inflation Mitigated", value: ">70%", note: "Performance maintained despite severe currency devaluations" }
    ],
    stories: [
      {
        id: "demand-forecasting-model",
        title: "The Procedure-Linked Demand Replenishment Engine",
        subtitle: "Replacing Reactive Reordering with Systematic Demand Forecasting",
        problem: "Catheterization consumables are expensive (individual items costing thousands of EGP) and have strict expiry horizons. Ordering reactively caused periodic stock shortages of critical balloon sizes alongside capital tie-up in slow-moving stent lengths.",
        whatISaw: "Procurement operated on a calendar replenishment basis completely uncoupled from upcoming consultant procedure schedules and patient pathology trends.",
        whatIDid: "Analyzed 12 months of historical surgical usage to calculate consumable velocity per cardiologist. Developed a rolling 30-day procedure-linked demand forecasting model that mapped upcoming surgical bookings directly to safety stock requirements.",
        whatIBuilt: "Automated Reorder Point & Safety Stock Calculator in Excel integrated with a custom barcode-scanning inventory system.",
        result: "Slashed emergency spot-purchasing by 40–60%, unlocked working capital, and achieved 100% stock availability without holding excess buffer inventory.",
        demonstrates: "Demand planning, inventory modeling, working capital optimization, and systematic demand forecasting."
      },
      {
        id: "one-hour-sla",
        title: "Negotiating the 1-Hour MAX Emergency Vendor SLA",
        subtitle: "Contractual Architecture for Life-Saving Consignment Items",
        problem: "In acute coronary syndromes, rare anatomical variations demand non-standard stent diameters or specialized guide catheters. Storing every conceivable variation in on-site inventory is financially prohibitive for hospital working capital.",
        whatISaw: "Suppliers treated emergency requests with casual response times (4 to 8 hours), jeopardizing acute emergency PCI cases.",
        whatIDid: "Leveraged our high purchasing volume to negotiate a structured consignment partnership with our 3 primary multinational suppliers. Instituted contractually binding Service Level Agreements requiring emergency delivery within a committed 60-minute response window, backed by regular inventory rotation audits.",
        whatIBuilt: "Vendor SLA Performance Scorecard and an emergency dispatch protocol connecting on-call catheterization nursing with vendor courier hubs.",
        result: "Secured emergency access to required specialized device sizes within the agreed 60-minute SLA, with zero clinical delays recorded across 30+ months.",
        demonstrates: "Vendor contract negotiation, SLA governance, emergency logistics, and strategic supplier partnerships."
      },
      {
        id: "devaluation-resilience",
        title: "Maintaining Unbroken Supply Chains Through Currency Collapse",
        subtitle: "Navigating Parallel Market Devaluation (70–72 EGP/USD)",
        problem: "During 2023–2024, Egypt experienced severe foreign exchange shortages. The USD surged from 30.9 to 70+ in the parallel market. Importers instituted delivery quotas, demanded upfront cash payments, and canceled open purchase orders.",
        whatISaw: "Severe national foreign currency shortages and import delivery backlogs threatened surgical device availability across the region.",
        whatIDid: "Acted preemptively: established dual-sourcing agreements for all top-20 critical surgical codes; negotiated forward volume commitments locking in price books; and prioritized cash settlements for essential life-saving consignments.",
        whatIBuilt: "Consignment Consumption Audit Protocol ensuring instantaneous credit reconciliation for suppliers upon item implantation.",
        result: "The unit maintained 100% critical stock availability and achieved zero surgical cancellations throughout the severe foreign currency crisis across 30+ consecutive months.",
        demonstrates: "Macroeconomic crisis navigation, dual-sourcing redundancy, supply continuity, and financial risk mitigation."
      }
    ],
    digitalEnabler: {
      title: "Real-Time Supply Chain Visibility",
      subtitle: "Custom Inventory & Barcode Tracking Architecture",
      description: "Rather than relying on manual paper bin cards prone to transcription errors, I built an end-to-end inventory management platform tailored specifically for cardiac consumables.",
      systemsSummary: "Custom Barcode Platform",
      externalCost: "EGP 0",
      platforms: [
        {
          name: "Cath Lab Inventory Tracking System",
          tech: "Web Application · Barcode Scanning Integration",
          description: "Live scanning of lot numbers, serials, and expiry dates upon room arrival and patient consumption.",
          impact: "Achieved 100% physical-to-ledger reconciliation accuracy and zero expiration-related write-offs on high-value surgical items."
        },
        {
          name: "Automated Reorder Threshold Engine",
          tech: "Demand-Linked Reorder Rules · Real-time Alerts",
          description: "Triggers automated replenishment alerts when critical stent or catheter inventory crosses calculated safety stock lines.",
          impact: "Maintained continuous stock availability and avoided stockouts for 30+ consecutive months."
        }
      ]
    },
    capabilities: [
      { name: "Demand Planning & Forecasting", level: 5, description: "Procedure-linked replenishment modeling, consumption run-rates, and rolling 30-day forecast horizons." },
      { name: "Consignment Inventory Governance", level: 5, description: "Managing high-value supplier-owned inventory, audit reconciliation, and implant verification." },
      { name: "Vendor Contract & SLA Management", level: 5, description: "Negotiating binding delivery response times (1-Hour MAX), volume discounts, and quarterly reviews." },
      { name: "Safety Stock & Buffer Strategy", level: 5, description: "Setting dynamic safety stocks based on clinical lead times, minimum order quantities, and criticality." },
      { name: "Barcode & Warehouse Systems", level: 5, description: "Serial number traceability, expiration date tracking, and FIFO physical inventory layouts." }
    ],
    timeline: [
      {
        period: "2023 – April 2026",
        role: "Supply Chain & Operations Lead — Cath Lab",
        organization: "Al-Obour Hospital",
        location: "Zagazig, Sharkia, Egypt",
        summary: "Direct governance of end-to-end medical device supply chains, vendor consignment agreements, and inventory control.",
        highlights: [
          "Zero procedure cancellations due to supply failure across 30+ consecutive months",
          "Reduced emergency spot-purchasing by 40–60% through procedure-linked demand modeling",
          "Negotiated 1-Hour MAX emergency delivery response SLA with primary medical device vendors",
          "Maintained 100% critical stock availability under >70% currency-driven cost inflation"
        ]
      },
      {
        period: "2019 – 2023",
        role: "Cath Lab Accounting & Materials Coordinator",
        organization: "Al-Obour Hospital",
        location: "Zagazig, Sharkia, Egypt",
        summary: "Supervised daily consumable receipts, verified supplier invoices, and tracked clinical implant consumption.",
        highlights: [
          "Audited 100% of vendor invoices against contracted master price books",
          "Resolved inventory discrepancies through monthly physical cycle counts"
        ]
      },
      {
        period: "2015 – 2017",
        role: "Stores & Inventory Supervisor",
        organization: "Verona Sweets / IBS",
        location: "Sharkia, Egypt",
        summary: "Supervised confectionery stores, ingredient staging for daily shifts, and physical inventory control.",
        highlights: [
          "Enforced 100% FIFO stock rotation, preventing perishable raw material and ingredient spoilage",
          "Synchronized daily raw material staging with confectionery production shifts"
        ]
      }
    ]
  },

  "procurement": {
    slug: "procurement",
    navTitle: "Procurement",
    roleTitle: "Procurement & Strategic Sourcing",
    roleBadge: "Target Role: Procurement Manager / Director",
    subtitle: "3-Criteria Sign-Off · Inflation Mitigation (>70%) · Master Price Books · Working Capital Recovery",
    valueProposition:
      "Strategic procurement leader who instituted a rigorous 3-criteria sign-off protocol, managed high-value medical consumables procurement under extreme currency shocks, and maintained strict commercial discipline while maintaining performance despite >70% cost inflation.",
    executiveSummary:
      "Over 10+ years managing commercial purchasing and vendor relationships across healthcare, manufacturing, and commercial events. By establishing master price books, 100% invoice auditing, dual-sourcing redundancy, and a strict 3-criteria sign-off framework, I contained procurement leakage and protected hospital purchasing value.",
    cvPdf: "./cv/Mahmoud_Lotfy_CV_Procurement.pdf",
    cvTitle: "Procurement & Sourcing CV (PDF)",
    metrics: [
      { label: "Emergency Purchasing Reduction", value: "40–60%", note: "Minimized premium spot pricing through planned replenishment", highlight: true },
      { label: "Cost Inflation Mitigated", value: ">70%", note: "Expenditure contained via forward volume commitments", highlight: true },
      { label: "Outstanding Balances Recovered", value: "20–30%", note: "Restructured receivables and vendor reconciliation backlogs", highlight: true },
      { label: "Invoices Audited", value: "100%", note: "100% verified against contracted master price books", highlight: true },
      { label: "Procurement Sign-Off Protocol", value: "3 Criteria", note: "Unit price benchmark, clinical suitability, and regulatory compliance" },
      { label: "Active Suppliers Managed", value: "30+", note: "Dual-sourcing coverage across 30+ regional medical device and consumable suppliers" }
    ],
    stories: [
      {
        id: "three-criteria-protocol",
        title: "Instituting the 3-Criteria Procurement Sign-Off Protocol",
        subtitle: "Controlling Maverick Spending and Preventing Price Creep",
        problem: "Prior to formal controls, department purchases were frequently authorized under emergency pretexts, allowing suppliers to bill items at list price without contractual discounts. Internal teams accepted quotes based on brand familiarity rather than benchmarked market value.",
        whatISaw: "Suppliers exploited clinical urgency to introduce incremental price hikes. Invoices arrived with uncontracted delivery surcharges, and duplicate item descriptions masked variable pricing.",
        whatIDid: "Instituted a mandatory 3-criteria sign-off protocol for every procurement requisition: 1) Verification of unit price against contracted master price books, 2) Technical/clinical suitability confirmation by the chief consultant, and 3) Regulatory and batch expiry compliance verification. Zero payments were released without matching purchase order, receiving report, and audited invoice.",
        whatIBuilt: "Standardized Procurement Approval Workflow & Vendor Price-Book Variance Ledger in Excel.",
        result: "Curtailed off-contract purchases, halted unauthorized price escalations, and reduced emergency surcharge expenses by over 50%.",
        demonstrates: "Procurement governance, commercial discipline, spend analytics, and process enforcement."
      },
      {
        id: "currency-crisis-sourcing",
        title: "Strategic Procurement in a Crashing Currency Market",
        subtitle: "Preserving Operational Margins Amid 100%+ Parallel Devaluations",
        problem: "When the Egyptian Pound fluctuated from 30.9 to 72 EGP/USD in 2023–2024, medical device importers issued immediate price escalation notices averaging 50–90%. Single-source suppliers attempted to renegotiate active contracts mid-month.",
        whatISaw: "Suppliers were prioritizing delivery to clients who accepted immediate spot rate increases, while institutional clients who had no alternative vendors faced delivery embargoes.",
        whatIDid: "Leveraged annual volume commitments to secure price stabilization clauses with core multinational distributors. Introduced secondary and tertiary certified suppliers for every critical surgical item code, creating competitive tension. Implemented weekly price-indexing reviews linked to official exchange rates rather than arbitrary supplier markups.",
        whatIBuilt: "Multi-Tier Supplier Redundancy Matrix and Dynamic Currency Exposure Model.",
        result: "Maintained performance despite >70% macroeconomic inflation, containing total expenditure growth to +69.9% and enabling our unit to deliver +56.3% net profit growth during the economic crisis.",
        demonstrates: "Strategic sourcing, contract negotiation, vendor diversification, and macro-financial defense."
      },
      {
        id: "receivables-restructuring",
        title: "Restructuring Balances and Recapturing Working Capital",
        subtitle: "Clearing 3 Fiscal Years of Historical Ledger Disputes",
        problem: "Disputed historical claims with institutional insurance payors and suppliers tied up millions of pounds in working capital, leaving both accounts receivable and accounts payable with lingering reconciliations.",
        whatISaw: "Payments were stalled because invoice files lacked individual procedure case sign-offs and implant verification vouchers.",
        whatIDid: "Executed a line-by-line reconciliation of all disputed vendor balances across 3 fiscal years. Established bilateral settlement agreements where historical supplier claims were offset against reconciled credit notes and scheduled payment tranches.",
        whatIBuilt: "Automated Billing & Reconciliation Tracker linking patient admission files to supplier delivery vouchers.",
        result: "Cut overdue balances by 20–30%, restored favorable commercial credit terms with all key medical device vendors, and prevented late-fee liabilities.",
        demonstrates: "Financial reconciliation, working capital recovery, vendor diplomacy, and commercial settlement."
      }
    ],
    digitalEnabler: {
      title: "Procurement Intelligence & Financial Controls",
      subtitle: "Custom Built Cash Management & Purchasing Ledger",
      description: "To prevent financial leakage and track commercial purchasing in real time, I developed internal software tools replacing static spreadsheets.",
      systemsSummary: "Financial & Sourcing Engine",
      externalCost: "EGP 0",
      platforms: [
        {
          name: "Cash Management & Procurement Tracker",
          tech: "Full-Stack Application · React + Rust",
          description: "High-integrity ledger tracking every outgoing supplier disbursement and incoming patient revenue stream.",
          impact: "Prevented unauthorized disbursements and established real-time cash flow visibility."
        },
        {
          name: "Contract Price-Book Variance Engine",
          tech: "Advanced Excel Analytical Engine",
          description: "Automatically cross-references vendor invoice lines against negotiated contract prices, flagging overcharges.",
          impact: "Audited 100% of invoices and stopped thousands of pounds in unauthorized supplier markups."
        }
      ]
    },
    capabilities: [
      { name: "Strategic Sourcing & Category Management", level: 5, description: "Master price books, supplier qualification, category spend analysis, and dual-sourcing frameworks." },
      { name: "Commercial Contract & SLA Negotiation", level: 5, description: "Negotiating volume tiering, committed delivery response SLAs (1-Hour MAX), and currency adjustment clauses." },
      { name: "Spend Analytics & Invoice Auditing", level: 5, description: "100% three-way matching (PO, Delivery Voucher, Invoice), variance tracking, and price book compliance." },
      { name: "Working Capital & Cash Flow Management", level: 5, description: "Payment terms structuring, supplier credit reconciliation, and accounts receivable acceleration." },
      { name: "Supplier Relationship Management (SRM)", level: 5, description: "Quarterly supplier performance reviews, dispute resolution, and partnership development." }
    ],
    timeline: [
      {
        period: "2023 – April 2026",
        role: "Procurement & Operations Lead — Cath Lab",
        organization: "Al-Obour Hospital",
        location: "Zagazig, Sharkia, Egypt",
        summary: "Governed all commercial sourcing, vendor agreements, and surgical consumable procurement for high-volume interventional procedures.",
        highlights: [
          "Instituted mandatory 3-criteria sign-off protocol, eliminating uncontracted supplier surcharges",
          "Audited 100% of vendor invoices against master price books with zero compliance gaps",
          "Mitigated >70% currency inflation while protecting departmental operating profit margins (+56.3%)",
          "Restructured outstanding supplier and payor balances, reducing overdue amounts by 20–30%"
        ]
      },
      {
        period: "2019 – 2023",
        role: "Cath Lab Accountant & Procurement Coordinator",
        organization: "Al-Obour Hospital",
        location: "Zagazig, Sharkia, Egypt",
        summary: "Responsible for supplier invoice auditing, purchasing order verification, and cashiering controls.",
        highlights: [
          "Enforced strict 3-way matching between surgical consumption logs, receipts, and vendor invoices",
          "Negotiated consignment settlement schedules during cash flow constraints"
        ]
      },
      {
        period: "2015 – 2017",
        role: "Stores & Purchasing Coordinator",
        organization: "Verona Sweets / IBS",
        location: "Sharkia, Egypt",
        summary: "Coordinated ingredient and packaging purchasing, supplier deliveries, and storeroom inventory.",
        highlights: [
          "Arranged recurring supplier deliveries for dairy, sugar, and packaging supplies",
          "Reduced packaging material waste through standardized order specifications"
        ]
      }
    ]
  },

  "business-ops": {
    slug: "business-ops",
    navTitle: "Business Ops",
    roleTitle: "Business Operations Leadership",
    roleBadge: "Target Role: Business Operations Lead / Director",
    subtitle: "P&L Ownership (~20% Hospital Revenue) · Operational Discipline · Zero-Budget Systems · Compounding Growth",
    valueProposition:
      "Cross-functional operations leader with full P&L accountability (~20% of hospital revenue), building high-governance KPI systems and delivering 3 consecutive years of compounding profit growth — proving that systemic execution applies across healthcare, manufacturing, FMCG, and complex multi-stakeholder operations.",
    executiveSummary:
      "A versatile business operations executive with 15+ years of leadership spanning clinical healthcare administration, industrial manufacturing, commercial media production, and custom digital systems. I solve core operational problems by combining financial discipline, rigorous process design, frontline staff engagement, and practical internal software platforms.",
    cvPdf: "./cv/Mahmoud_Lotfy_CV_Business_Operations.pdf",
    cvTitle: "Business Operations CV (PDF)",
    metrics: [
      { label: "Net Profit Growth YoY", value: "+56.3%", note: "H1 2025 vs H1 2024 · Official Hospital Financial Data", highlight: true },
      { label: "Revenue Growth YoY", value: "+65.5%", note: "Gross revenue grew from EGP 5.85M to EGP 9.68M", highlight: true },
      { label: "Hospital Revenue Share", value: "~20%", note: "Contributing approximately 20% of facility revenue with steady operating margins" },
      { label: "Operational Platforms", value: "4 Systems", note: "Production web platforms built on zero external software budget", highlight: true },
      { label: "Personnel Oversight", value: "~45 Personnel", note: "Direct management of 5–10 staff, broader oversight of ~45 personnel" },
      { label: "Analytical Engines", value: "6 Modules", note: "Custom Excel and Sheets analytical decision models" }
    ],
    stories: [
      {
        id: "transferable-value-chain",
        title: "The Transferable Operational Value Chain",
        subtitle: "Applying Manufacturing Rigor and Event Tempo to Healthcare",
        problem: "Healthcare operations are often treated as exceptional, justifying inefficiencies, lack of standard operating procedures, and subjective performance evaluations that would never be tolerated in industrial manufacturing or live media production.",
        whatISaw: "When I arrived in hospital operations from manufacturing (Verona Sweets) and high-stakes media sets (Vodafone commercials), I immediately saw that clinical delay was an unmanaged factory bottleneck: changeover times between surgical cases were unmeasured, inventory staging was chaotic, and staff roles during transitions were ill-defined.",
        whatIDid: "Applied manufacturing principles: instituted standard work checklists for suite turnaround; established staged consumable kits for upcoming surgical types; and treated the catheterization suite as a high-value production line where idle time equals lost care and revenue.",
        whatIBuilt: "Standard Operating Procedures (SOPs) for procedural turnover, room preparation checklists, and live schedule boards.",
        result: "Expanded monthly procedure volume from 90 to 140 cases (+37.8% throughput) without adding physical room capacity or overtime hours.",
        demonstrates: "Cross-industry transferability, operational efficiency, bottleneck resolution, and throughput optimization."
      },
      {
        id: "compounding-discipline",
        title: "3 Years of Compounding Discipline",
        subtitle: "How Daily Small Habits Drove +56.3% Net Profit Growth",
        problem: "Organizations often search for magic-bullet restructuring initiatives while ignoring the daily leakages—unbilled consumables, uncollected patient balances, minor vendor overcharges, and untracked idle hours—that quietly bleed operational margin.",
        whatISaw: "No single catastrophic failure was hurting profitability; instead, a hundred micro-inefficiencies were compounding every single day.",
        whatIDid: "Instituted the 7-Step Operational Framework: daily reconciliation of clinical consumption vs cashiering; weekly vendor invoice audits; bi-weekly nursing KPI reviews; and monthly surgical volume mix reviews. Held every departmental stakeholder accountable to clear, quantifiable metrics.",
        whatIBuilt: "Unified Daily Management Reporting Rhythm and Executive Dashboard.",
        result: "Turned the unit from an administrative challenge into Al-Obour Hospital's most profitable asset: +56.3% net profit growth and +65.5% gross revenue expansion.",
        demonstrates: "Operational discipline, performance management, compounding improvement, and cultural change."
      },
      {
        id: "zero-budget-systems",
        title: "Building Enterprise Infrastructure with Zero Budget",
        subtitle: "Solving Critical Operational Gaps by Writing Tailored Tools",
        problem: "Hospital executive leadership recognized the urgent need for process digitization and real-time operational reporting, but macroeconomic challenges meant capital expenditure for commercial ERP systems was zero.",
        whatISaw: "Waiting for external software budgets was a recipe for indefinite paralysis. Frontline staff needed simple, responsive, tailored tools immediately—not an over-engineered corporate system 2 years later.",
        whatIDid: "Leveraged modern AI-assisted development tools and full-stack web technologies to build 4 purpose-built internal applications and 6 advanced Excel models directly mapped to our daily floor operations.",
        whatIBuilt: "4 standalone enterprise platforms (Cash Management, Inventory Tracking, Medical Diagnostic Reports, Nursing KPI Monitoring).",
        result: "Established immediate frontline adoption across clinical and administrative workflows at exactly EGP 0 in external software licensing costs.",
        demonstrates: "Resourcefulness, pragmatic system building, frontline user empathy, and digital enablement."
      }
    ],
    digitalEnabler: {
      title: "Digital Transformation as an Operational Enabler",
      subtitle: "4 Enterprise Applications · 6 Advanced Analytical Engines · Zero Software Budget",
      description: "My defining operational differentiator: when an operational process is broken or lacks visibility, I don't write memos asking for expensive commercial software licenses. I build the exact digital tool needed to standardize, automate, and enforce it.",
      systemsSummary: "4 Production Platforms",
      externalCost: "EGP 0",
      platforms: [
        {
          name: "Cash Management & Settlement Platform",
          tech: "React · Rust · SQLite Engine",
          description: "Full unit financial ledger tracking patient admissions, cashier collections, and supplier disbursements.",
          impact: "Prevented billing leakage and cut accounts receivable disputes by 20–30%."
        },
        {
          name: "Consumable Inventory & Reorder System",
          tech: "Web Application · Barcode Scanning",
          description: "Real-time stock ledger for stents, balloons, and guide wires with automated safety stock thresholds.",
          impact: "Achieved zero supply failure cancellations across 30+ consecutive months."
        },
        {
          name: "Medical Diagnostic Reporting Engine",
          tech: "Desktop App · Structured Templates",
          description: "Standardized catheterization angiography and intervention report generator.",
          impact: "Standardized clinical documentation and accelerated patient discharge throughput."
        },
        {
          name: "Nursing & Technical Staff KPI Platform",
          tech: "Full KPI System · Multi-Metric Scoring",
          description: "Automated scoring of attendance, clinical compliance, infection control, and peer feedback.",
          impact: "Transformed subjective evaluations into objective, merit-based career progression."
        }
      ]
    },
    capabilities: [
      { name: "Full P&L Stewardship & Financial Strategy", level: 5, description: "Revenue optimization, dynamic replacement-cost pricing, cost containment, and margin protection." },
      { name: "Operational Architecture & Workflow Design", level: 5, description: "Mapping processes, eliminating bottlenecks, establishing SOPs, and optimizing asset utilization." },
      { name: "Performance Management & KPI Engineering", level: 5, description: "Designing objective metrics, tracking scorecards, and aligning incentives with strategic business goals." },
      { name: "Zero-Budget Digital Systems Development", level: 5, description: "Building custom web applications, relational databases, and Excel analytics to digitize operations." },
      { name: "Cross-Functional Team Leadership", level: 5, description: "Unifying clinical staff, engineers, technicians, accountants, and senior executive boards." }
    ],
    timeline: [
      {
        period: "2023 – April 2026",
        role: "Healthcare Operations & Supply Chain Lead — Cath Lab",
        organization: "Al-Obour Hospital",
        location: "Zagazig, Sharkia, Egypt",
        summary: "P&L ownership, clinical operations, staff leadership (~45 personnel), and strategic growth.",
        highlights: [
          "+56.3% YoY net profit growth; +65.5% gross revenue growth (verified H1 2024 vs H1 2025 financials)",
          "Department accounts for ~20% of total hospital revenue stability",
          "Built 4 internal operational platforms using AI-assisted tools on zero external software budget"
        ]
      },
      {
        period: "2019 – 2023",
        role: "Cath Lab Accountant & Coordinator",
        organization: "Al-Obour Hospital",
        location: "Zagazig, Sharkia, Egypt",
        summary: "Unit admissions, financial reconciliation, patient collections, and administrative coordination.",
        highlights: [
          "Prevented billing leakage and instituted intra-operative consumption tracking",
          "Reduced outstanding receivables by 20–30%"
        ]
      },
      {
        period: "2018 – 2019",
        role: "Customer Operations & Software Support",
        organization: "ClinPrime — Healthcare Software",
        location: "Egypt",
        summary: "Onboarding and customer operations for 30+ healthcare institutions.",
        highlights: [
          "Reduced ticket resolution turnaround by 50% through standardized support workflows"
        ]
      },
      {
        period: "2015 – 2017",
        role: "Stores & Inventory Supervisor",
        organization: "Verona Sweets / IBS",
        location: "Sharkia, Egypt",
        summary: "Managed storerooms, ingredient staging, stock rotation, and raw material tracking.",
        highlights: [
          "Enforced 100% FIFO inventory rotation, preventing ingredient spoilage"
        ]
      },
      {
        period: "2014 – 2019",
        role: "Commercial Production Manager & Location Manager",
        organization: "Commercial Television & Advertising Productions",
        location: "Cairo & Nationwide, Egypt",
        summary: "On-site operations, logistics, permitting, and 50+ personnel crews for major national commercial productions (Vodafone, Huawei, etc.).",
        highlights: [
          "Delivered 100% on-schedule and on-budget shooting schedules under strict time penalties"
        ]
      }
    ]
  },

  "events": {
    slug: "events",
    navTitle: "Events & Conferences",
    roleTitle: "Events & Conference Operations",
    roleBadge: "Target Role: Events & Conferences Director",
    subtitle: "20+ Executed Events · Zagazig Med Faculty & Cairo Derma · TEDx Zagazig Co-Founder · Commercial Media Direction",
    valueProposition:
      "Conferences and events director with 20+ executed events including signature medical conferences for Zagazig University Faculty of Medicine departments (Zagazig Vascular Surgery, Cairo Derma), co-founder of TEDx Zagazig, combining insider medical operations knowledge with creative production, stakeholder management, and live execution discipline.",
    executiveSummary:
      "Bringing the rare combination of someone who understands both medical and academic conference rigor and commercial media production workflows. Having co-founded TEDx Zagazig and organized premier departmental medical congresses (Zagazig Vascular Surgery, Cairo Derma), I manage every event layer: academic protocol, audio-visual technical staging, international VIP hospitality, sponsor acquisition, and crowd logistics.",
    cvPdf: "./cv/Mahmoud_Lotfy_CV_Events_Conferences.pdf",
    cvTitle: "Events & Communications CV (PDF)",
    metrics: [
      { label: "Total Executed Events", value: "20+ Events", note: "Academic congresses, medical symposia, large-scale recruitment fairs, and brand activations", highlight: true },
      { label: "Medical Conferences", value: "Multiple Depts", note: "Zagazig University Faculty of Medicine departmental congresses (Vascular Surgery, Cairo Derma, etc.)", highlight: true },
      { label: "TEDx Platform Co-Founder", value: "TEDx Zagazig", note: "Brought official global TED license to Sharkia for the first time", highlight: true },
      { label: "Commercial Media Track Record", value: "5 Years", note: "8+ major national brands (Vodafone, Huawei, Cairo Festival City, Jumia)" },
      { label: "Job Fair Scale Directed", value: "2,000+ Attendees", note: "Zagazig University Career Center premier recruitment forum (30+ corporate sponsors)" },
      { label: "Live Production Span", value: "5 Years", note: "Assistant Production & Location Manager on 8+ major commercial TV campaigns" }
    ],
    stories: [
      {
        id: "medical-conferences-rigor",
        title: "Executing High-Acuity Medical & Academic Conferences",
        subtitle: "Zagazig University Faculty of Medicine Conferences & Cairo Derma",
        problem: "Medical conferences carry high reputational and scientific stakes: distinguished professors, international faculty, and corporate pharmaceutical sponsors require flawless technical staging, zero audio-visual delays, and strict academic protocol.",
        whatISaw: "Academic organizers were burdened with operational headaches: simultaneous workshop logistics, exhibitor booth placement conflicts, and disorganized attendee registration that caused long morning queues.",
        whatIDid: "Directed end-to-end conference operations across multiple departmental medical conferences for Zagazig University Faculty of Medicine, most notably the Zagazig Vascular Surgery Annual Conference (250+ surgical consultants) and Cairo Derma International Conference at Semiramis InterContinental (500+ attendees). Coordinated academic session staging, live clinical video workshops, simultaneous translation booths, and corporate exhibition floor plans.",
        whatIBuilt: "Standardized Event Run-Down Sheets, Speaker Protocol Briefings, and Digital Registration Check-In Desks.",
        result: "Zero schedule overruns across multiple concurrent scientific tracks, enthusiastic faculty commendations, and enhanced pharmaceutical sponsorship retention.",
        demonstrates: "Medical event coordination, academic protocol, AV staging, and sponsor management."
      },
      {
        id: "tedx-founding",
        title: "Founding and Scaling TEDx Zagazig",
        subtitle: "Bringing the World's Premier Intellectual Platform to Sharkia",
        problem: "Regional governorates in Egypt were culturally and intellectually underserved. Securing an official TEDx license required meeting rigorous global curation and operational guidelines with zero local precedent.",
        whatISaw: "Exceptional local innovators, scientists, and social entrepreneurs had no stage to amplify their ideas to a national and international audience.",
        whatIDid: "Co-founded TEDx Zagazig; secured the official license from TED headquarters; recruited and directed a 40+ member volunteer operations team; curated and coached 12 live speakers; and directed the live multi-camera broadcast.",
        whatIBuilt: "Volunteer operational hierarchy, multi-camera live video recording workflow, and ticketing registration engine.",
        result: "Delivered a sold-out conference for 400+ attendees, generated international webcast viewership, and established a sustainable intellectual forum.",
        demonstrates: "Entrepreneurial initiative, grassroots leadership, brand licensing compliance, and media production."
      },
      {
        id: "media-production-discipline",
        title: "5 Years on High-Budget Commercial Television Sets",
        subtitle: "Managing 50+ Crew Members Under Severe Time Penalties",
        problem: "Commercial film production sets (Vodafone, Huawei, El Mara3y) operate under extreme financial burn-rates. Every hour of location delay or permit confusion costs tens of thousands of pounds in crew overtime and equipment penalties.",
        whatISaw: "Location logistics, public crowd management, and police/municipal permits are where high-budget commercials succeed or fail.",
        whatIDid: "Operated as Assistant Production Manager and Location Manager across 8+ major national campaigns (2014–2019). Managed municipal permits, closed public streets, coordinated vehicle fleets, and directed on-set safety for crews of 50+ personnel.",
        whatIBuilt: "Daily Call Sheets, Location Security Protocols, and Emergency Contingency Plans.",
        result: "Completed 100% of commercial shoots on schedule with zero municipal shutdowns or safety incidents.",
        demonstrates: "High-pressure operations, crisis negotiation, municipal diplomacy, and large-crew coordination."
      }
    ],
    digitalEnabler: {
      title: "Event Technology & Operations Modeling",
      subtitle: "Custom Registration Sheets & Run-Down Timing Engines",
      description: "Applying operational systems engineering to live events ensures zero logistical breakdowns during live showtime.",
      externalCost: "EGP 0",
      platforms: [
        {
          name: "Minute-by-Minute Run-Down Timing Engine",
          tech: "Dynamic Scheduling Model",
          description: "Calculates stage cues, speaker countdowns, and sponsor video triggers in real time.",
          impact: "Prevented speaker schedule creep and kept 100% of scientific sessions on time."
        },
        {
          name: "Digital Registration & Badge Generation Engine",
          tech: "Automated Data Processing Spreadsheet",
          description: "Pre-printed barcode-enabled name tags and fast-track registration desks.",
          impact: "Processed 500+ medical conference attendees in under 20 minutes without queue bottlenecks."
        }
      ]
    },
    capabilities: [
      { name: "Medical & Academic Congress Direction", level: 5, description: "Protocol management, CME accreditation logistics, live clinical workshop staging, and speaker coordination." },
      { name: "Audio-Visual & Live Staging Direction", level: 5, description: "Stage architecture, multi-track AV coordination, lighting, simultaneous translation, and technical cues." },
      { name: "Sponsorship Acquisition & Corporate Relations", level: 5, description: "Structuring corporate sponsor packages, pharmaceutical booth floor plans, and delivering measurable sponsor return on investment." },
      { name: "Large-Scale Crowd Logistics & Security", level: 5, description: "Crowd flow engineering, ticketing, emergency contingency planning, and municipal location permitting." },
      { name: "Creative Media & Video Production Direction", level: 5, description: "Directing multi-camera live video recording, promotional teasers, post-event documentary films, and branding." }
    ],
    timeline: [
      {
        period: "2014 – 2019",
        role: "Media Production Manager / Location Manager",
        organization: "Commercial Television & Advertising Productions",
        location: "Cairo & Nationwide, Egypt",
        summary: "On-site operations, location logistics, municipal permits, and 50+ personnel crews for major national commercial productions (Vodafone, Huawei, Jumia, Cairo Festival City).",
        highlights: [
          "Managed location permitting, security diplomacy, and crowd control for major national TVCs",
          "Delivered 100% on-schedule and on-budget shooting schedules under strict time penalties"
        ]
      },
      {
        period: "2013 – 2014",
        role: "Co-Founder & Chief Operations Organizer",
        organization: "Share Events & TEDx Zagazig",
        location: "Sharkia, Egypt",
        summary: "Co-founded event operations agency and established TEDx Zagazig under official global license.",
        highlights: [
          "Directed TEDx Zagazig conference for 400+ attendees and curated 12 live speakers",
          "Managed a 40+ member volunteer team across logistics, stage design, and attendee experience"
        ]
      },
      {
        period: "2011 – 2013",
        role: "Organizer & PR Lead — Medical Conferences",
        organization: "Faculty of Medicine — Zagazig University / Scientific Societies",
        location: "Zagazig & Cairo, Egypt",
        summary: "Organized multiple departmental medical conferences for Zagazig University Faculty of Medicine and Egyptian medical societies.",
        highlights: [
          "Zagazig Vascular Surgery Annual Conference: coordinated scientific session staging and registration for 250+ consultants",
          "Cairo Derma International Conference: managed exhibition floor plan and international VIP speaker logistics for 500+ attendees",
          "Zagazig University Job Fairs: co-founded recruitment forum connecting 2,000+ graduates with 30+ corporate sponsors"
        ]
      }
    ]
  }
};
