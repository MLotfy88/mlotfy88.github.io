export interface MethodologyStep {
  stepNumber: number;
  name: string;
  action: string;
  description: string;
  tools: string;
  evidence: string;
}

export const methodologySteps: MethodologyStep[] = [
  {
    stepNumber: 1,
    name: "OBSERVE",
    action: "Observe Frontline Reality",
    description: "Immerse completely in the frontline operating environment. Watch surgical room turnovers, observe how nursing handles sterile packages, map patient intake handoffs, and listen to friction points directly from clinicians and staff.",
    tools: "Direct Floor Shadowing, Workflow Process Audits, Physical Stock Counts, Time-and-Motion Tracking.",
    evidence: "Identified that procedural room delays were not caused by surgical technique, but by pre-procedure admission ticketing and unverified lab results."
  },
  {
    stepNumber: 2,
    name: "UNDERSTAND",
    action: "Diagnose Structural Root Causes",
    description: "Separate superficial symptoms from underlying structural causes. Differentiate between behavioral friction, misaligned financial incentives, policy gaps, and lack of real-time data visibility.",
    tools: "Root-Cause Analysis (5 Whys), Fishbone Diagrams, Value-Stream Mapping, Financial Ledger Cross-Examination.",
    evidence: "Discovered that chronic emergency consumable spot purchases were caused by a total disconnect between physician operating schedules and warehouse ordering windows."
  },
  {
    stepNumber: 3,
    name: "DESIGN",
    action: "Architect Pragmatic Operating Models",
    description: "Engineer practical, sustainable operational workflows tailored to real-world behavioral and clinical constraints. Eliminate points of manual failure and align stakeholder incentives without creating bureaucratic drag.",
    tools: "Procedure-Linked Replenishment Algorithms, Staggered Shift Models, Dual-Custody Checklists, SLA Specifications.",
    evidence: "Designed the 3-tier patient intake protocol and a closed-loop consignment custody workflow with a 12-patient buffer cap."
  },
  {
    stepNumber: 4,
    name: "BUILD",
    action: "Engineer Production Tools & Artifacts",
    description: "When commercial tools are nonexistent or prohibitively expensive, build tailored internal systems from scratch. Design user interfaces that frontline workers actually want to use, enforcing data integrity at the point of action.",
    tools: "Full-Stack Web Applications (React, TypeScript, Node/Rust, Relational Databases), Barcode Scanning, Production Excel Engines.",
    evidence: "Personally coded 4 standalone web platforms and 6 advanced analytical Excel models on an external software budget of exactly EGP 0."
  },
  {
    stepNumber: 5,
    name: "EXECUTE",
    action: "Deploy with Presence & Frontline Empathy",
    description: "Roll out systems alongside the team on the floor. Train staff personally, stand by nurses during initial barcode scans, listen to immediate feedback, and adapt workflows on the fly to secure genuine buy-in.",
    tools: "Hands-On Clinical Floor Coaching, Quick-Reference Pocket Cards, Standard Operating Procedure (SOP) Manuals.",
    evidence: "Achieved 100% digital adoption across clinical, administrative, and inventory personnel without disrupting active patient care."
  },
  {
    stepNumber: 6,
    name: "MEASURE",
    action: "Track Audited Metrics Relentlessly",
    description: "Establish objective, real-time KPI visibility. Monitor daily room utilization, procedure margin yields, physical vs digital stock variances, and supplier SLA adherence against contractual baselines.",
    tools: "Automated Daily Dashboards, Weekly P&L Variance Reviews, Physical Cycle Count Audits, Supplier Performance Scorecards.",
    evidence: "Generated audited departmental financial statements proving +56.3% net profit growth and 100% material stock availability."
  },
  {
    stepNumber: 7,
    name: "IMPROVE",
    action: "Institutionalize Continuous Kaizen",
    description: "Operations is never 'done'. Use variance data to continuously tighten reorder thresholds, optimize physician schedule blocks, renegotiate vendor contracts, and elevate clinical standards.",
    tools: "Quarterly Vendor Tendering, Case-Mix Optimization Reviews, Retrospective Clinical Quality Audits.",
    evidence: "Sustained zero procedure cancellations due to stock failure across 30+ consecutive months through multiple national currency crises."
  }
];

export const foundationalPhilosophy = {
  title: "The Names Came Later",
  quote: "I built systems because operations demanded them; the academic names—DMAIC, Deming Cycle (PDCA), Lean Six Sigma—came later, validating what instinct, observation, and relentless data tracking had already created.",
  narrative: "When facing an operational unit in distress and fragmented workflows—whether in healthcare administration, factory warehousing, or high-stakes live productions—you don't quote textbooks; you fix the broken pipeline. You go to the floor, identify why materials are missing, build tailored systems to stop unrecorded leakage, restructure supplier agreements to eliminate emergency surcharges, and train the staff until zero mistakes happen. Only years later did I study the formal literature and realize that my intuitive process mapped directly to the highest methodologies of industrial operations and Lean Six Sigma."
};

export const corePrinciples = [
  {
    title: "Systemic Thinking Over Ad-Hoc Heroics",
    description: "Individual heroism is fragile and unscalable. Sustainable operations require institutionalized systems that make the right action the easiest action for every staff member on every shift."
  },
  {
    title: "Technology as an Operational Enabler",
    description: "Software must never be built for its own sake or imposed as a bureaucratic burden. Every digital tool must directly eliminate a frontline friction point, automate an audit trail, or protect patient safety."
  },
  {
    title: "Leadership Through Presence & Empathy",
    description: "You cannot optimize a clinical operating theater or a factory floor from an air-conditioned corner office. True operational authority is earned by standing beside your nurses, technicians, and team during high-pressure crises."
  }
];
