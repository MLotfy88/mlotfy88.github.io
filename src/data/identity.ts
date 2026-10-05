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
    "Healthcare Operations Director",
    "Business Operations Lead",
    "End-to-End Supply Chain Manager",
    "Strategic Procurement & Sourcing Lead"
  ],
  headline: "Healthcare Operations • Business Operations • Supply Chain • Procurement",
  valueProposition: "I solve operational and business problems by connecting strategy, execution, financial thinking, people, process, and technology.",
  executiveSummary: "Over 15+ years of multi-sector professional leadership, I have transformed underperforming operational units into high-margin, institutionalized systems. In a high-acuity Cardiac Catheterization Unit (Cath Lab) processing 90–140 procedures per month, I delivered +56.3% net profit growth and +65.5% revenue expansion, maintained 100% stock availability, and achieved zero procedure cancellations due to supply failure across 30+ consecutive months—all while absorbing >70% macroeconomic operational cost inflation and building 4 custom enterprise software platforms on zero external budget.",
  contact: {
    email: "m.m.lotfy.88@gmail.com",
    phone: "+20 155 816 6440",
    phoneFormatted: "+20 155 816 6440",
    linkedin: "linkedin.com/in/mmlotfy",
    linkedinUrl: "https://www.linkedin.com/in/mmlotfy",
    github: "github.com/mmlotfy",
    githubUrl: "https://github.com/mmlotfy",
    locationCurrent: "Alexandria, Egypt",
    locationOrigin: "Zagazig, Sharkia, Egypt",
    mobility: "Available for: Cairo • Alexandria • Sharkia, Egypt",
    availability: "Immediate Start Available"
  }
};
