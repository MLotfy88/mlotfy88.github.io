export interface CapabilityDomain {
  id: string;
  title: string;
  category: string;
  icon: string;
  summary: string;
  competencies: string[];
  evidence: string[];
}

export const capabilityDomains: CapabilityDomain[] = [
  {
    id: "operations",
    title: "OPERATIONS",
    category: "Operations",
    icon: "Activity",
    summary: "Operations Management, Process Optimization, Capacity Planning, Resource Allocation, Workflow Optimization, and Operational Excellence.",
    competencies: [
      "Operations Management",
      "Process Optimization",
      "Capacity Planning",
      "Resource Allocation",
      "Workflow Optimization",
      "Operational Excellence"
    ],
    evidence: [
      "Directed daily execution across 90–140 interventional cardiac catheterization procedures per month with ~100% case readiness.",
      "Optimized room scheduling, turnover, and sterilization cycles to maximize daily case throughput and halve wait times.",
      "Synchronized patient flow between admissions, Cath Lab, CCU/ICU, and general operating theatres."
    ]
  },
  {
    id: "finance",
    title: "FINANCE",
    category: "Finance",
    icon: "PieChart",
    summary: "P&L Management, Financial Analysis, Profitability Analysis, Revenue Management, Budget Management, Cost Control, and Revenue Cycle.",
    competencies: [
      "P&L Management",
      "Financial Analysis",
      "Profitability Analysis",
      "Revenue Management",
      "Budget Management",
      "Cost Control",
      "Revenue Cycle"
    ],
    evidence: [
      "Delivered +56.3% YoY net profit growth (reaching record EGP 2,978,995 in H1 2025) and +65.5% revenue expansion.",
      "Restructured billing cycles and SLA-based collection reviews, reducing outstanding balances by 20–30%.",
      "Absorbed >70% operating cost inflation through strategic case-mix optimization toward higher-value procedures."
    ]
  },
  {
    id: "supply-chain",
    title: "SUPPLY CHAIN",
    category: "Supply Chain",
    icon: "Truck",
    summary: "Supply Chain Management, Medical Supply Chain, Procurement, Vendor Management, Demand Planning, Inventory Management, and Supplier Negotiation.",
    competencies: [
      "Supply Chain Management",
      "Medical Supply Chain",
      "Procurement & Tendering",
      "Vendor Management",
      "Demand Planning",
      "Inventory Management",
      "Supplier Negotiation"
    ],
    evidence: [
      "Maintained 100% material stock availability across 3 consecutive fiscal years for 50+ critical cardiovascular item codes.",
      "Slashed emergency spot purchasing by 40–60% by linking replenishment orders directly to scheduled case types.",
      "Maintained ZERO supply-failure procedure cancellations across 30+ consecutive months."
    ]
  },
  {
    id: "performance",
    title: "PERFORMANCE",
    category: "Performance",
    icon: "BarChart3",
    summary: "KPI Development, Performance Management, Management Reporting, Data Analysis, and Decision Support.",
    competencies: [
      "KPI Development",
      "Performance Management",
      "Management Reporting",
      "Data Analysis",
      "Decision Support"
    ],
    evidence: [
      "Developed objective multi-criteria performance scorecards and rankings replacing subjective staff evaluations.",
      "Built unified data models linking clinical, inventory, and financial KPIs into daily and monthly executive reviews.",
      "Modeled physician referral economics and scheduling to deliver a documented 250% ROMI."
    ]
  },
  {
    id: "governance",
    title: "GOVERNANCE",
    category: "Governance",
    icon: "ShoppingBag",
    summary: "Governance, Compliance, Quality Assurance, Asset Management, and Equipment Readiness.",
    competencies: [
      "Governance",
      "Compliance",
      "Quality Assurance",
      "Asset Management",
      "Equipment Readiness"
    ],
    evidence: [
      "Re-linked Cath Lab operations to Al-Obour Hospital's institutional framework, eliminating documentation and control gaps.",
      "Directly negotiated 1-Hour MAX emergency response SLA with primary imaging equipment supplier for 100% lab uptime.",
      "Instituted three-criteria procurement sign-off: unit cost vs benchmark, clinical suitability, and regulatory compliance."
    ]
  },
  {
    id: "events-creative",
    title: "EVENTS / CREATIVE",
    category: "Events & Creative",
    icon: "Users2",
    summary: "Event Management, Conference Organization, Medical Events, Production Management, Media Production, and Creative Direction.",
    competencies: [
      "Event Management",
      "Conference Organization",
      "Medical Events",
      "Production Management",
      "Media Production",
      "Creative Direction (Capability)"
    ],
    evidence: [
      "Directed 20+ conferences and events, including Cairo Derma International (500+ attendees) and Vascular Surgery Annual Congress.",
      "Co-Founded TEDx Zagazig (first in Sharkia), directing stage execution, media production, and 400+ attendees.",
      "5 years (2014–2019) in commercial television production logistics for Vodafone, Huawei G8, Jumia, and Cairo Festival City."
    ]
  },
  {
    id: "digital",
    title: "DIGITAL",
    category: "Digital",
    icon: "Code",
    summary: "Digital Transformation, Operational Analytics, Dashboard Development, Workflow Digitization, Business Intelligence, React, Python, Rust, and Excel.",
    competencies: [
      "Digital Transformation",
      "Operational Analytics",
      "Dashboard Development",
      "Workflow Digitization",
      "Business Intelligence",
      "React, Python, Rust, Excel"
    ],
    evidence: [
      "Personally engineered 4 standalone custom web platforms on an external software budget of exactly EGP 0.",
      "Built 6 advanced Excel/Google Sheets operational management modules (~3,570 documented development hours).",
      "Achieved 100% digital process adoption on Day 1 across nursing, technical, and administrative hospital staff."
    ]
  }
];
