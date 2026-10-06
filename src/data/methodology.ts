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
    description: "Immerse in the daily floor environment. Shadow room turnovers, track consumable handoffs, and identify real operational bottlenecks directly with frontline teams.",
    tools: "Floor Shadowing, Process Mapping, Physical Stock Audits, Time Tracking.",
    evidence: "Identified that procedural turnover delays stemmed from admission ticketing rather than surgical pacing."
  },
  {
    stepNumber: 2,
    name: "UNDERSTAND",
    action: "Diagnose Structural Root Causes",
    description: "Distinguish surface symptoms from structural friction, unaligned financial incentives, policy gaps, or missing data visibility.",
    tools: "Root-Cause Analysis (5 Whys), Value-Stream Mapping, Ledger Cross-Auditing.",
    evidence: "Traced emergency purchasing spikes to a lack of synchronization between physician schedules and supplier ordering cutoffs."
  },
  {
    stepNumber: 3,
    name: "DESIGN",
    action: "Architect Pragmatic Operating Models",
    description: "Design practical workflows tailored to clinical realities, eliminating failure points and creating accountability without administrative drag.",
    tools: "Procedure-Linked Demand Logic, Staggered Shift Design, Dual-Custody Checklists.",
    evidence: "Instituted a 3-tier patient intake protocol and closed-loop consignment custody workflow."
  },
  {
    stepNumber: 4,
    name: "BUILD",
    action: "Build Tailored Enablers & Systems",
    description: "When commercial software is inaccessible or lacks adaptability, build targeted internal applications and analytical models to standardize workflows.",
    tools: "Custom Web Applications & Operational Analytics (React, TypeScript, SQLite), Barcode Scanning, Financial Models.",
    evidence: "Built 4 custom internal operational platforms using AI-assisted development tools, with EGP 0 external software spend."
  },
  {
    stepNumber: 5,
    name: "EXECUTE",
    action: "Deploy with Frontline Buy-In",
    description: "Deploy workflows alongside frontline staff. Coach teams directly on the floor and refine steps immediately to ensure frictionless daily adoption.",
    tools: "Hands-On Coaching, SOP Checklists, Dual-Verification Routines.",
    evidence: "Established digital workflows across clinical, administrative, and inventory functions without disrupting active patient care."
  },
  {
    stepNumber: 6,
    name: "MEASURE",
    action: "Track Quantified Metrics",
    description: "Establish objective KPI visibility across utilization, case contribution margins, inventory variances, and supplier SLAs.",
    tools: "Daily Operations Dashboards, Financial Variance Reviews, Cycle Counts, Supplier Scorecards.",
    evidence: "Generated documented departmental statements proving +56.3% net profit growth and 100% material stock availability."
  },
  {
    stepNumber: 7,
    name: "IMPROVE",
    action: "Institutionalize Continuous Improvement",
    description: "Continuously refine reorder thresholds, optimize case mix, and renegotiate supplier agreements based on real variance data.",
    tools: "Quarterly Supplier Tendering, Case-Mix Reviews, Quality Retrospectives.",
    evidence: "Sustained zero supply cancellations across 30+ consecutive months despite macroeconomic cost headwinds."
  }
];

export const foundationalPhilosophy = {
  title: "Continuous Operational Discipline",
  quote: "My practical approach naturally overlaps with established continuous-improvement frameworks such as PDCA, DMAIC, and Lean principles.",
  narrative: "When facing an operational unit in distress or fragmented workflows—whether in healthcare administration, factory warehousing, or high-stakes live productions—effective leadership begins on the frontline. You observe real friction, diagnose root causes, build practical systems to stop unrecorded leakage, align supplier commitments, and train the team until excellence becomes the standard. This hands-on operational discipline naturally embodies the core tenets of continuous improvement, Deming's cycle, and Lean operations."
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
