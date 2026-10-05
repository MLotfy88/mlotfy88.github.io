export interface EventItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  year: string;
  role: string;
  scale: string;
  description: string;
  highlights: string[];
}

export interface NamedProductionItem {
  brand: string;
  campaign: string;
  years: string;
  roles: string[];
  scope: string;
}

export interface VentureItem {
  name: string;
  years: string;
  role: string;
  description: string;
  impact: string;
}

export const eventsData: EventItem[] = [
  {
    id: "vascular-surgery-2011",
    title: "Zagazig University Vascular Surgery Annual Conference",
    organization: "Faculty of Medicine — Zagazig University",
    location: "Zagazig, Egypt",
    year: "2011",
    role: "Organizer & PR Lead",
    scale: "250+ Vascular Surgeons & Medical Consultants",
    description: "Directed end-to-end scientific session logistics, protocol management, and VIP hospitality for the 7th annual surgical forum.",
    highlights: [
      "Coordinated academic session staging, audio-visual technical setups, and vendor exhibits",
      "Directed on-site registration and hospitality for 250+ specialized medical consultants",
      "Ensured zero schedule overruns across multiple simultaneous scientific tracks"
    ]
  },
  {
    id: "cairo-derma-2012",
    title: "Cairo Derma International Conference",
    organization: "Egyptian Dermatology Society / International Faculty",
    location: "Semiramis InterContinental Hotel, Cairo",
    year: "2012",
    role: "Head Organizer & Staging Lead",
    scale: "500+ International & Egyptian Dermatologists",
    description: "Directed full operational staging, international speaker protocol, and exhibition management at a 5-star venue for hundreds of global medical attendees.",
    highlights: [
      "Led venue operations, exhibition floor plan, and attendee registration desks",
      "Coordinated international VIP guest transfers and hotel accommodations",
      "Supervised technical staging, simultaneous translation booths, and live clinical workshops"
    ]
  },
  {
    id: "tedx-zagazig",
    title: "TEDx Zagazig (Inaugural Conference)",
    organization: "TEDx Program / Licensed Independently Organized Event",
    location: "Zagazig, Sharkia, Egypt",
    year: "2013 – 2014",
    role: "Co-Founder & Chief Operations Organizer",
    scale: "400+ Attendees, 12 Speakers, Global Webcast",
    description: "Brought the global TED platform to Sharkia Governorate for the first time. Directed full licensing, branding, speaker curation, media production, and stage execution.",
    highlights: [
      "Secured official TEDx licensing and ensured compliance with global brand guidelines",
      "Managed speaker curation, speech coaching, and multi-camera live video recording",
      "Led a 40+ member volunteer team across logistics, stage design, and attendee experience"
    ]
  },
  {
    id: "zu-job-fairs",
    title: "Zagazig University Job Fairs (1st & 2nd Editions)",
    organization: "Zagazig University Career Center",
    location: "Zagazig, Egypt",
    year: "2012 – 2013",
    role: "Co-Founder & PR Manager",
    scale: "2,000+ Job Seekers, 30+ Corporate Partners",
    description: "Established the university's premier recruitment forum connecting thousands of graduates with top national enterprises across banking, telecom, and FMCG.",
    highlights: [
      "Secured 30+ corporate sponsors and hiring partners across telecom, banking, and FMCG",
      "Engineered crowd flow and ticketing logistics for over 2,000 daily attendees",
      "Organized career preparation workshops and live corporate mock interviews"
    ]
  }
];

export const mediaProductionData = {
  overview: "Over 5 years (2014–2019) in commercial television and film production, Mahmoud operated as Assistant Production Manager, Location Manager, and Assistant Director. Creative Direction is an operational capability honed through managing on-site logistics, location permitting, and 50+ personnel crews under extreme time sensitivity and financial penalties.",
  namedProductions: [
    { brand: "Cairo Festival City", campaign: "Commercial Campaign", years: "2014–2019", roles: ["Location Logistics", "Crew Coordination"], scope: "Operational safety, commercial public coordination, and overnight shooting." },
    { brand: "Huawei G8", campaign: "Brand Launch Commercial", years: "2015", roles: ["Location Manager", "Production Logistics"], scope: "Multi-site filming logistics and equipment coordination." },
    { brand: "Sudocrem", campaign: "Healthcare Advertising Campaign", years: "2016", roles: ["Assistant Production Manager"], scope: "Studio production, casting coordination, and crew schedule management." },
    { brand: "Clear Challenge", campaign: "Brand Activation & TVC", years: "2016", roles: ["Location Manager", "Set Logistics"], scope: "Crowd control, public venue permits, and technical staging." },
    { brand: "Jumia", campaign: "E-Commerce Promotional Campaign", years: "2016–2017", roles: ["Assistant Director", "Production Coordinator"], scope: "Fast-paced commercial production timelines and multi-scene schedules." },
    { brand: "Vodafone", campaign: "National Television Commercials (TVC)", years: "2015–2018", roles: ["Assistant Production Manager", "Location Manager"], scope: "Large-scale urban location permits, security diplomacy, and crowd management." },
    { brand: "Qomrah 2", campaign: "Cultural Media Production", years: "2017", roles: ["Production Assistant", "Logistics Support"], scope: "Multi-city team management and vehicle fleet logistics." },
    { brand: "El Mara3y", campaign: "Food & Dairy Commercial Campaign", years: "2017–2018", roles: ["Assistant Production Manager"], scope: "Production staging, food styling logistics, and set protocol." }
  ]
};

export const venturesData: VentureItem[] = [
  {
    name: "Share Events & Marketing Services",
    years: "2013 – 2014",
    role: "Co-Founder & COO",
    description: "Event management, brand positioning, and conference operations agency serving corporate, healthcare, and educational clients.",
    impact: "Executed 10+ major regional corporate and public gatherings with high client satisfaction."
  },
  {
    name: "TEDx Zagazig",
    years: "2013 – 2014",
    role: "Co-Founder",
    description: "Brought the global TED platform to Sharkia governorate for the first time.",
    impact: "Hosted 400+ attendees and curated 12 live talks on innovation and social impact."
  },
  {
    name: "Share Human & Community Development",
    years: "2017 – 2020",
    role: "Founder & CEO",
    description: "Youth skills development, leadership training, and professional employability initiative.",
    impact: "Trained 500+ young professionals in project management, communication, and workplace readiness."
  },
  {
    name: "Karmasha",
    years: "2015 – 2016",
    role: "Co-Founder & Operations",
    description: "Creative stationery, branded notebook, and customized artistic merchandise venture.",
    impact: "Established direct local supply chain for paper, printing, and distribution across university campuses."
  },
  {
    name: "Frobe",
    years: "2022 – 2023",
    role: "Founder & Creator",
    description: "Direct-to-consumer e-commerce lifestyle apparel brand emphasizing modern minimalist aesthetics.",
    impact: "Managed digital branding, product prototyping, textile supplier negotiations, and online order fulfillment."
  },
  {
    name: "SIFE / Enactus Zagazig",
    years: "2008 – 2011",
    role: "Head of Public Relations",
    description: "International student organization fostering social entrepreneurship and community empowerment projects.",
    impact: "Led media coverage, sponsorship drives, and corporate presentations that advanced the university team to national finals."
  }
];
