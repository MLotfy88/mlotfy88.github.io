export interface IdentityData {
  name: string;
  titles: string[];
  headline: string;
  valueProposition: string;
  executiveSummary: string;
  contact: {
    email: string;
    phone: string;
    phoneFormatted: string;
    linkedin: string;
    linkedinUrl: string;
    github: string;
    githubUrl: string;
    locationCurrent: string;
    locationOrigin: string;
    mobility: string;
    availability: string;
  };
}

export const identityData: IdentityData = {
  name: "MAHMOUD MOHAMED LOTFY",
  titles: [
    "Healthcare Operations",
    "Supply Chain Management",
    "Strategic Procurement",
    "Business Operations",
    "Events & Conferences"
  ],
  headline: "A Cross-Functional Operations Leader Who Turns Complex Operations Into Measurable Systems",
  valueProposition: "I transform complex, multi-stakeholder operations into structured, measurable, and repeatable systems—delivering financial turnarounds, supply chain reliability, and operational governance across healthcare and enterprise environments.",
  executiveSummary: "Over 15+ years of multi-sector professional experience (including 5+ years in high-acuity healthcare operations leadership), I have transformed complex operational environments into measurable, controlled, and repeatable operating systems. In a high-acuity Cardiac Catheterization Unit (Cath Lab) with an operating range of 90–140 procedures per month (averaging ~66 complex cases/mo; 399 documented in H1 2025), I delivered +56.3% net profit growth and +65.5% gross revenue expansion, maintained 100% stock availability, and achieved zero procedure cancellations due to supply failure across 30+ consecutive months—while maintaining performance despite >70% cost inflation and building 4 custom internal operational platforms using AI-assisted development tools on zero external software budget.",
  contact: {
    email: "m.m.lotfy.88@gmail.com",
    phone: "+20 155 816 6440",
    phoneFormatted: "+20 155 816 6440",
    linkedin: "linkedin.com/in/mmlotfy",
    linkedinUrl: "https://www.linkedin.com/in/mmlotfy",
    github: "github.com/MLotfy88",
    githubUrl: "https://github.com/MLotfy88",
    locationCurrent: "Alexandria, Egypt",
    locationOrigin: "Zagazig, Sharkia, Egypt",
    mobility: "Available for: Cairo • Alexandria • Sharkia, Egypt",
    availability: "Immediate Start Available"
  }
};
