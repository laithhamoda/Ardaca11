export interface Keyword {
  keyword: string;
  intent: 'Informational' | 'Commercial' | 'Transactional' | 'Compliance';
  volume: string;
  difficulty: string;
  targetRole: string;
  description: string;
}

export interface CalendarItem {
  month: string;
  articleNum: number;
  title: string;
  keyword: string;
  intent: string;
  funnelStage: 'TOFU' | 'MOFU' | 'BOFU';
  synopsis: string;
  slug: string;
}

export interface LinkingPair {
  source: string;
  target: string;
  anchorText: string;
}

export const targetKeywords: Keyword[] = [
  {
    keyword: "subcontractor management GCC",
    intent: "Informational",
    volume: "1,200/mo",
    difficulty: "Medium",
    targetRole: "Main Contractor",
    description: "Searches by Tier-1 project managers seeking best-practice coordination and legal liability minimization across Saudi Arabia and the UAE."
  },
  {
    keyword: "UAE WhatsApp construction risk",
    intent: "Informational",
    volume: "450/mo",
    difficulty: "Low",
    targetRole: "Project Directors",
    description: "A niche but high-value search query by legal consultancies and executive project controls audit specialists."
  },
  {
    keyword: "BIM vs BOQ digital quantity surveying",
    intent: "Informational",
    volume: "880/mo",
    difficulty: "Medium",
    targetRole: "Quantity Surveyors / PMCs",
    description: "Evaluations comparing physical material take-offs with modern BIM models on high-density giga-projects."
  },
  {
    keyword: "Saudi Vision 2030 construction platform",
    intent: "Commercial",
    volume: "1,600/mo",
    difficulty: "High",
    targetRole: "Developers / PMCs",
    description: "Queries focusing on infrastructure readiness, localized compliance (Balady, Aramco), and sovereign data isolation."
  },
  {
    keyword: "UAE PDPL construction data compliance 2025",
    intent: "Compliance",
    volume: "550/mo",
    difficulty: "Low",
    targetRole: "Project Directors / CIOs",
    description: "A fast-emerging regulatory search query looking for actionable guidance under UAE Federal Decree-Law No. 45."
  },
  {
    keyword: "FIDIC Red Book variations Saudi Arabia",
    intent: "Compliance",
    volume: "950/mo",
    difficulty: "High",
    targetRole: "Consultants / Main Contractors",
    description: "Legal and contractual searches relating to Clause 13 procedures and claims deadlines under Saudi Arabian jurisprudence."
  },
  {
    keyword: "construction escrow accounts Dubai Land Department",
    intent: "Transactional",
    volume: "750/mo",
    difficulty: "Medium",
    targetRole: "Developers / Project Owners",
    description: "Sovereign financial registration questions for escrow releases matching physical site inspections in Dubai."
  },
  {
    keyword: "Aramco schedule Q vendor qualification",
    intent: "Compliance",
    volume: "1,100/mo",
    difficulty: "High",
    targetRole: "Suppliers / Specialist Subcontractors",
    description: "Technical requirements and quality plan formats designed to pass rigorous Saudi Aramco inspector audits."
  },
  {
    keyword: "quantity surveying digital transformation GCC",
    intent: "Informational",
    volume: "600/mo",
    difficulty: "Medium",
    targetRole: "Consultants / QS",
    description: "High-level overview of digitizing measurement protocols, shifting from legacy spreadsheets to unified database logs."
  },
  {
    keyword: "sealed bid procurement software construction",
    intent: "Transactional",
    volume: "350/mo",
    difficulty: "Low",
    targetRole: "Main Contractors / Developers",
    description: "Specific searches for tamper-proof digital pricing boxes to prevent supplier rate leaks."
  },
  {
    keyword: "Wafi program Saudi developer compliance",
    intent: "Compliance",
    volume: "800/mo",
    difficulty: "Medium",
    targetRole: "Developers / Project Owners",
    description: "Searches of strict escrow requirements and physical site audit matches for Saudi off-plan sales projects."
  },
  {
    keyword: "geotagged site progress validation GCC",
    intent: "Commercial",
    volume: "400/mo",
    difficulty: "Low",
    targetRole: "Developers / PMCs",
    description: "Technological solutions to fight construction report fraud and remote asset verification."
  },
  {
    keyword: "MEP sub-contractor tender packages",
    intent: "Commercial",
    volume: "1,300/mo",
    difficulty: "Medium",
    targetRole: "Specialist Subcontractors",
    description: "Sourcing verified invitation pools and package breakdown templates for major Middle Eastern commercial buildings."
  },
  {
    keyword: "Jebel Ali port building material logistics",
    intent: "Informational",
    volume: "500/mo",
    difficulty: "Low",
    targetRole: "Suppliers / Importers",
    description: "Customs declaration standards, drawing attestations, and storage fees at Dubai ports."
  },
  {
    keyword: "Extension of Time commercial claims FIDIC",
    intent: "Compliance",
    volume: "1,050/mo",
    difficulty: "High",
    targetRole: "Main Contractors",
    description: "Methodologies for preparing rock-solid delay claims based on chronological site diaries and approved RFIs."
  },
  {
    keyword: "best project management software NEOM",
    intent: "Commercial",
    volume: "1,400/mo",
    difficulty: "High",
    targetRole: "PMCs / Project Directors",
    description: "High-intent queries from prime contractors working on Red Sea, NEOM, and AMAALA developments."
  },
  {
    keyword: "TAMM Abu Dhabi developer integration",
    intent: "Transactional",
    volume: "300/mo",
    difficulty: "Low",
    targetRole: "Developers / Project Owners",
    description: "API connections and electronic approvals via Abu Dhabi's unified government services system."
  },
  {
    keyword: "prevent bidder collusion construction GCC",
    intent: "Informational",
    volume: "250/mo",
    difficulty: "Medium",
    targetRole: "Project Owners",
    description: "Corporate governance guidelines for auditing procurement divisions and preserving competitive bids."
  },
  {
    keyword: "ASTM testing submittal generator UAE",
    intent: "Transactional",
    volume: "480/mo",
    difficulty: "Low",
    targetRole: "Suppliers / Contractors",
    description: "Technical compilation software to speed up consultant laboratory approvals on UAE roads and high-rises."
  },
  {
    keyword: "back-to-back construction contract risk GCC",
    intent: "Informational",
    volume: "900/mo",
    difficulty: "High",
    targetRole: "Specialist Subcontractors",
    description: "An critical evaluation of default-risk pass-down clauses and legal dispute routes for specialty contractors."
  }
];

export const contentCalendar: CalendarItem[] = [
  {
    month: "Month 1",
    articleNum: 1,
    title: "Why Construction Projects in the UAE Still Run on WhatsApp — And the Cost of That",
    keyword: "UAE WhatsApp construction risk",
    intent: "Informational",
    funnelStage: "TOFU",
    synopsis: "Analyzes the massive legal, liability, and version-control risks of running billion-dollar sites on consumer-grade chat apps, offering secure database alternatives.",
    slug: "uae-whatsapp-construction-risk"
  },
  {
    month: "Month 1",
    articleNum: 2,
    title: "The Complete Guide to Subcontractor Management for GCC Main Contractors",
    keyword: "subcontractor management GCC",
    intent: "Informational / Educational",
    funnelStage: "MOFU",
    synopsis: "Explores structural processes to manage multi-tier supply networks in Saudi and UAE mega-projects, detailing FIDIC Red Book and local compliance bridges.",
    slug: "gcc-subcontractor-management-guide"
  },
  {
    month: "Month 2",
    articleNum: 3,
    title: "BOQ vs. BIM: How Digital Quantity Surveying is Changing GCC Construction Procurement",
    keyword: "BIM vs BOQ digital quantity surveying",
    intent: "Informational",
    funnelStage: "MOFU",
    synopsis: "Demystifies the friction between static Bills of Quantities and dynamic BIM structures, demonstrating how digital systems bridge the gap.",
    slug: "bim-vs-boq-digital-quantity-surveying"
  },
  {
    month: "Month 2",
    articleNum: 4,
    title: "How to Choose a Construction Project Management Platform for a Saudi Vision 2030 Project",
    keyword: "Saudi Vision 2030 construction platform",
    intent: "Commercial / Evaluative",
    funnelStage: "BOFU",
    synopsis: "A complete framework for evaluating construction software on Saudi mega-projects, focusing on local hosting, Balady integration, and Aramco Schedule 'Q' compliance.",
    slug: "choosing-saudi-vision-2030-construction-platform"
  },
  {
    month: "Month 3",
    articleNum: 5,
    title: "UAE PDPL and Construction Data: What Every Project Director Needs to Know in 2025",
    keyword: "UAE PDPL construction data compliance 2025",
    intent: "Compliance / Legal",
    funnelStage: "BOFU",
    synopsis: "Translates the strict requirements of UAE Federal Decree-Law No. 45 into concrete, practical actions for project directors managing sensitive contractor blueprints and biometric ID logs.",
    slug: "uae-pdpl-construction-data-compliance-25"
  },
  {
    month: "Month 3",
    articleNum: 6,
    title: "Understanding FIDIC Red Book Clause 13 & 20 Procedures under GCC Jurisprudences",
    keyword: "FIDIC Red Book variations Saudi Arabia",
    intent: "Compliance",
    funnelStage: "MOFU",
    synopsis: "A detailed parsing of notification windows, claim validations, and regional administrative court perspectives on delay claims.",
    slug: "fidic-red-book-variations-gcc"
  },
  {
    month: "Month 4",
    articleNum: 7,
    title: "Navigating off-plan development escrow accounts with Dubai Land Department (DLD)",
    keyword: "construction escrow accounts Dubai Land Department",
    intent: "Transactional",
    funnelStage: "BOFU",
    synopsis: "Detailed walkthrough of connecting real site milestone inspections to escrow funding disbursements under DLD Laws.",
    slug: "navigating-dubai-land-department-escrow-payouts"
  },
  {
    month: "Month 4",
    articleNum: 8,
    title: "How Saudi Wafi Compliance Protects Off-Plan Project Budgets",
    keyword: "Wafi program Saudi developer compliance",
    intent: "Compliance",
    funnelStage: "MOFU",
    synopsis: "Guiding Riyadh and Jeddah developers through the licensing and milestone inspection rules under Wafi guidelines.",
    slug: "saudi-wafi-developer-off-plan-compliance"
  },
  {
    month: "Month 5",
    articleNum: 9,
    title: "How to Secure Prequalifications for Saudi Aramco Schedule 'Q' Contractors",
    keyword: "Aramco schedule Q vendor qualification",
    intent: "Compliance",
    funnelStage: "MOFU",
    synopsis: "Step-by-step documentation strategy, audit checklists, and QA/QC verification routines to achieve Aramco rating.",
    slug: "securing-aramco-schedule-q-vendor-ratings"
  },
  {
    month: "Month 5",
    articleNum: 10,
    title: "The Battle Against Procurement Collusion: Restoring Trust in Multi-Million Dollar Tenders",
    keyword: "prevent bidder collusion construction GCC",
    intent: "Informational",
    funnelStage: "TOFU",
    synopsis: "Evaluating the application of cryptographic sealed bids to protect commercial margins against subcontractor price leaking.",
    slug: "stopping-tender-collusion-construction-gcc"
  },
  {
    month: "Month 6",
    articleNum: 11,
    title: "How to Integrate TAMM Abu Dhabi APIs with Local CRM Platforms",
    keyword: "TAMM Abu Dhabi developer integration",
    intent: "Transactional",
    funnelStage: "BOFU",
    synopsis: "An engineering-level blueprint to connect system approvals with government permit dashboards directly.",
    slug: "tamm-abu-dhabi-developer-api-integrations"
  },
  {
    month: "Month 6",
    articleNum: 12,
    title: "Reclaiming Retentions: A Master Survival Manual for Specialist Subcontractors",
    keyword: "back-to-back construction contract risk GCC",
    intent: "Informational",
    funnelStage: "MOFU",
    synopsis: "How specialty builders can compile indisputable handover proof arrays to trigger prompt release of final retention guarantees.",
    slug: "reclaiming-retentions-subcontractors-gcc"
  }
];

export const internalLinkingStructure: LinkingPair[] = [
  {
    source: "uae-whatsapp-construction-risk",
    target: "uae-pdpl-construction-data-compliance-25",
    anchorText: "strict data exposure liabilities under the new UAE PDPL legal framework"
  },
  {
    source: "uae-whatsapp-construction-risk",
    target: "gcc-subcontractor-management-guide",
    anchorText: "establishing transparent drawing submittals and contractor handovers"
  },
  {
    source: "gcc-subcontractor-management-guide",
    target: "bim-vs-boq-digital-quantity-surveying",
    anchorText: "associating billing targets directly with digital Quantity Surveying models"
  },
  {
    source: "choosing-saudi-vision-2030-construction-platform",
    target: "gcc-subcontractor-management-guide",
    anchorText: "maintaining sovereign control of subcontractor delivery networks"
  },
  {
    source: "uae-pdpl-construction-data-compliance-25",
    target: "uae-whatsapp-construction-risk",
    anchorText: "abandoning unencrypted consumer chat channels on active giga-projects"
  }
];

export const authorPersona = {
  name: "Tariq Al-Mansoor, FRICS",
  title: "Principal Construction Consultant & Claim Expert",
  credentials: "FRICS (Fellow of the Royal Institution of Chartered Surveyors), FCIArb (Fellow of the Chartered Institute of Arbitrators)",
  bio: "Tariq boasts 24+ years of real-world project controls management across Saudi Arabia, Oman, and the United Arab Emirates. Having served as Lead Claim Advisor on multiple iconic infrastructure portfolios in Dubai, Abu Dhabi, and Riyadh, Tariq specializes in FIDIC contract arbitration, quantity surveying automation, and corporate governance for sovereign developers."
};
