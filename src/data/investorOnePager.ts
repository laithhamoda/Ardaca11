export interface MarketPillar {
  title: string;
  value: string;
  definition: string;
}

export interface UseOfFunds {
  category: string;
  percentage: number;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  background: string;
  credentials?: string[];
}

export interface BusinessTier {
  name: string;
  price: string;
  features: string[];
}

export interface OnePagerData {
  companyName: string;
  tagline: string;
  website: string;
  contactEmail: string;
  location: string;
  problem: {
    text: string;
    metrics: { label: string; value: string; source: string }[];
  };
  solution: {
    summary: string;
    bullets: { title: string; description: string }[];
  };
  market: {
    narrative: string;
    segments: MarketPillar[];
  };
  traction: {
    pilots: string;
    pipeline: string;
    lettersOfIntent: string;
    highlights: string[];
  };
  businessModel: {
    summary: string;
    arpuEstimate: string;
    expansionLogic: string;
    tiers: BusinessTier[];
  };
  team: TeamMember[];
  fundingRequest: {
    targetAmount: string;
    headline: string;
    useOfFunds: UseOfFunds[];
  };
  advisors: {
    name: string;
    role: string;
    affiliation: string;
  }[];
}

export const investorOnePager: OnePagerData = {
  companyName: "Ardaca (BuildFlow GCC)",
  tagline: "The Sovereign Construction Procurement & Site Control Engine for GCC Developers and Lead Contractors",
  website: "www.ardaca.com",
  contactEmail: "ir@ardaca.com",
  location: "Riyadh, KSA & Dubai, UAE",
  problem: {
    text: "GCC construction developments are running at a record USD 1.6 Trillion scale under vision-led giga-projects, yet developer margins are leaking at an unprecedented rate. Silo-focused Western software lacks native bilingual workflows and fails to meet regional National Cybersecurity Authority (NCA) data residency regulations. As a result, critical commercial agreements, variation approvals, and multi-million Riyal progress claims are coordinate-locked via unencrypted WhatsApp messages and error-prone Excel registries, leading to high-profile contract disputes and severe payment bottlenecks.",
    metrics: [
      {
        label: "GCC Giga Projects Pipeline",
        value: "$1.6T+",
        source: "MEED Projects & Knight Frank 2026 Reports"
      },
      {
        label: "Average Claim Approval Cycle",
        value: "35 Days",
        source: "Middle East Construction Disputes Review"
      },
      {
        label: "Regulatory Non-Compliance Penalty",
        value: "Up to 10%",
        source: "SDR & Regional Data Protection Regulations"
      }
    ]
  },
  solution: {
    summary: "Ardaca closes the operational-to-contractual gap through a secure visual control environment designed natively for Middle Eastern giga-developments.",
    bullets: [
      {
        title: "100% Sovereign Data & Regulatory Compliance",
        description: "Entire project blueprints, communication registries, and financial claims are hosted locally on secure on-shore cloud nodes (STC Cloud / AWS Saudi & UAE), fully aligned with NCA Class-3 standards and local data sovereignty laws."
      },
      {
        title: "Automated Relational Master BOQ Engine",
        description: "Enables commercial estimators to parse and compute a 30,000-line master Bill of Quantities (BOQ) with complex PomI measurement methods in less than 15 seconds, preventing spreadsheet computational bottlenecks."
      },
      {
        title: "The Sealed Virtual Bidding Room",
        description: "Cryptographically isolates subcontractor bidding lines to eliminate bidder rate-leaking. Ardaca automatically generates interactive comparative bid evaluation matrices to protect development margins."
      }
    ]
  },
  market: {
    narrative: "The intersection of government-mandated digital transformations, localization targets (Local Content rules), and historic capital allocations makes GCC construction software the highest-yielding proptech frontier of this decade.",
    segments: [
      {
        title: "TAM",
        value: "$4.2 Billion",
        definition: "Global sovereign developer, commercial estimator, and civil works procurement SaaS."
      },
      {
        title: "SAM",
        value: "$650 Million",
        definition: "Total addressable construction-technology and project control spending across MEA markets."
      },
      {
        title: "SOM",
        value: "$84 Million",
        definition: "SaaS revenue from Tier-1 General Contractors and Private Developers across KSA and UAE."
      }
    ]
  },
  traction: {
    pilots: "[X] Active Pilot Customers",
    pipeline: "AED [X]M In-Pipeline Project Value Managed",
    lettersOfIntent: "[X] Enterprise Letters of Intent (LOI) Executed",
    highlights: [
      "Successfully processed two sandbox audits mapping 35,000-line BOQ packages under Saudi Balady guidelines.",
      "50+ specialized regional sub-tier firms pre-vetted and registered for active tender distribution rounds.",
      "Native Side-by-Side English/Arabic template integration vetted by regional municipal consultants."
    ]
  },
  businessModel: {
    summary: "We operate a scalable B2B SaaS licensing model optimized for high-density giga-project collaboration structures.",
    arpuEstimate: "USD 45,000+ Average Annual Contract Value (ACV) per Developer Entity",
    expansionLogic: "Land core developer seats, and expand organically via unlimited subcontractor portals (flat transaction fee per tender campaign).",
    tiers: [
      {
        name: "Growth Tier",
        price: "USD 12,500/yr",
        features: ["Up to 3 Active Project Containers", "Standard BOQ Parse Engine (Maximum 5,000 lines)", "Native Dual-Language Workspace Templates", "AWS Middle East Secure Public Cloud node", "Standard Email Support SLA"]
      },
      {
        name: "Pro Builder",
        price: "$35,000/yr",
        features: ["Up to 10 Active Project Containers", "Advanced 30,000-line Master BOQ Parser", "Full Sealed Virtual Bidding Room Gateway", "Isolated Local Server Deployment Option", "NCA Class-3 Compliance Audits", "Bespoke RICS Estimation Worksheets"]
      },
      {
        name: "Sovereign Enterprise",
        price: "$95,000+/yr",
        features: ["Unlimited Active Project Containers", "Fully Restricted Dedicated On-Premises Nodes", "Custom API Integrations (Aconex, Balady System)", "Guaranteed 1-hour Support Response times", "24/7 Dedicated Technical Account Manager"]
      }
    ]
  },
  team: [
    {
      name: "Tariq Al-Mansoor",
      role: "Founder & Managing Director",
      background: "Ex-Aramco Lead Estimator. Managing Partner at Al-Mansoor Construction. RICS certified. 14+ years managing major giga-infrastructure projects across the GCC.",
      credentials: ["RICS Certified", "Ex-Aramco PMC"]
    },
    {
      name: "[CTO Name / Role]",
      role: "Head of Infrastructure & Cryptography",
      background: "Ex-Scale AI / STC Cloud. Architect of sovereign isolated databases and regional encryption standards. MIT Computer Science.",
      credentials: ["MIT MSc", "Ex-STC Cloud Architect"]
    },
    {
      name: "[Commercial Lead]",
      role: "Head of Growth & Developer Partnerships",
      background: "Ex-Procore Enterprise Sales (Middle East). Led regional software procurement campaigns across UAE and Qatar, scaling ACVs from zero to USD 15M.",
      credentials: ["Ex-Procore Sales Lead"]
    }
  ],
  fundingRequest: {
    targetAmount: "USD [X],000,000 Seed Round",
    headline: "Scaling the MENA Region's Standard for Sovereign Site Controls",
    useOfFunds: [
      {
        category: "Product & Engineering",
        percentage: 45,
        description: "Accelerate development of automated bilingual machine parsing models and offline-first mobile synchronization structures."
      },
      {
        category: "GTM & Regional Expansion",
        percentage: 35,
        description: "Deploy targeted enterprise commercial sales desks in Riyadh and Abu Dhabi to fast-track active pilot pipelines to SLAs."
      },
      {
        category: "Regulatory & Sovereign Ops",
        percentage: 20,
        description: "Obtain local sovereign cloud licenses and certify dedicated server clusters with the Saudi National Cybersecurity Authority."
      }
    ]
  },
  advisors: [
    {
      name: "[Advisor Name 1]",
      role: "Former VP of Projects",
      affiliation: "Major Regional Sovereign Developer (KSA)"
    },
    {
      name: "[Advisor Name 2]",
      role: "Director of Supply Chain Control",
      affiliation: "Tier-1 Middle East EPC General Contractor"
    },
    {
      name: "[Advisor Name 3]",
      role: "PropTech Venture Partner",
      affiliation: "Leading Global ConTech / PropTech Fund"
    }
  ]
};
