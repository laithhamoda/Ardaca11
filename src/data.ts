import { Project, Quotation, SubInquiry, Bid, ProductCatalogItem, AuditLog } from "./types";

export const initialProjects: Project[] = [
  {
    id: "PJ-2024-089",
    name: "Palm Jumeirah Villa Renovation",
    location: "Palm Jumeirah, Dubai, UAE",
    value: "AED 18,450,000",
    status: "Active",
    client: "Ahmed Al-Maktoum (Portfolio Lead)",
    consultant: "Edge Architects",
    contractor: "Al-Futtaim Construction",
    progress: 68,
    deadline: "2026-11-15",
    category: "Residential Luxury"
  },
  {
    id: "BT-2024-012",
    name: "Dubai Marina Tower Exterior Retrofit",
    location: "Dubai Marina, Dubai, UAE",
    value: "AED 42,900,000",
    status: "Under Review",
    client: "Emaar Properties PJSC",
    consultant: "DesignGrid Associates",
    contractor: "Arabtec Construction (Simulated)",
    progress: 12,
    deadline: "2027-02-28",
    category: "Commercial High-Rise"
  },
  {
    id: "DH-2025-004",
    name: "DIFC Office Smart Fit-out",
    location: "DIFC, Dubai, UAE",
    value: "AED 5,200,000",
    status: "Active",
    client: "Ahmed Al-Maktoum (Portfolio Lead)",
    consultant: "StrucBuild International",
    contractor: "Hansa Interiors",
    progress: 89,
    deadline: "2026-07-30",
    category: "Commercial Fit-out"
  }
];

export const initialQuotations: Quotation[] = [
  {
    id: "QUO-001",
    consultant: "Edge Architects",
    baseQuote: 750000,
    supervisionQuote: 250000,
    total: 1000000,
    durationMonths: 6,
    complianceScore: 98,
    recommended: true,
    tamId: "TAMM-DXB-98441",
    milestones: [
      { name: "Schematic Design Proposal", cost: 250000, days: 30 },
      { name: "Detailed Drawings & DED Approval", cost: 300000, days: 45 },
      { name: "Tender Sourcing & Evaluation", cost: 200000, days: 20 },
      { name: "Weekly Supervision & Handover", cost: 250000, days: 60 }
    ]
  },
  {
    id: "QUO-002",
    consultant: "StrucBuild International",
    baseQuote: 820000,
    supervisionQuote: 180000,
    total: 1000000,
    durationMonths: 7,
    complianceScore: 92,
    recommended: false,
    tamId: "TAMM-DXB-91024",
    milestones: [
      { name: "Phase 1 - Structural Analysis Only", cost: 320000, days: 40 },
      { name: "Phase 2 - Licensing & Permits", cost: 280000, days: 45 },
      { name: "Phase 3 - Sourcing Execution", cost: 400000, days: 30 }
    ]
  },
  {
    id: "QUO-003",
    consultant: "DesignGrid Associates",
    baseQuote: 690000,
    supervisionQuote: 230000,
    total: 920000,
    durationMonths: 8,
    complianceScore: 84,
    recommended: false,
    tamId: "TAMM-DXB-74102",
    milestones: [
      { name: "Concept Drafts Package", cost: 190000, days: 35 },
      { name: "Municipal Submissions Hub", cost: 400000, days: 50 },
      { name: "Supervision Allocation Strategy", cost: 330000, days: 40 }
    ]
  }
];

export const initialBids: Bid[] = [
  {
    id: "BID-8910",
    projectTitle: "Al-Futtaim Luxury Pavilion",
    clientName: "Wasl Properties",
    bidAmount: "AED 34,200,000",
    status: "Submitted",
    deadline: "2026-06-20",
    location: "DIFC, Dubai",
    gradeRequired: "Grade A Elite"
  },
  {
    id: "BID-7740",
    projectTitle: "Downtown Residence Ext",
    clientName: "Emaar Properties",
    bidAmount: "AED 115,000,000",
    status: "Sourcing",
    deadline: "2026-07-15",
    location: "Downtown Dubai",
    gradeRequired: "Unlimited Lic"
  },
  {
    id: "BID-4012",
    projectTitle: "Jumeirah Beach Club HVAC overhaul",
    clientName: "Miraj Leisure Group",
    bidAmount: "AED 8,900,000",
    status: "Won",
    deadline: "2026-05-01",
    location: "Jumeirah 3, Dubai",
    gradeRequired: "Grade B Subcon"
  }
];

export const initialSubInquiries: SubInquiry[] = [
  {
    id: "SUB-801",
    title: "Structural Glazing & Curtain Wall Installation",
    recipientType: "Subcontractor",
    scope: "Design, structural engineering verification, fabrication, and site installation of custom dual-pane low-E glass curtain wall assemblies for Luxury Villa PJ-2024-089.",
    specialization: "Façade & Structural Glazing",
    requiredGrade: "Grade B Minimum",
    location: "Palm Jumeirah, Dubai",
    distribution: "Verified Only",
    deadline: "2026-06-10",
    status: "Active",
    boq: [
      { item: "Low-E Visual Glazing Panel Class 1A", qty: 450, unit: "Sqm", estimatedRate: 850 },
      { item: "Anodized Heavy Frame Support Structure", qty: 22, unit: "Tons", estimatedRate: 4200 },
      { item: "EPDM Perimeter Gaskets and Sealants", qty: 1200, unit: "Lm", estimatedRate: 45 }
    ]
  },
  {
    id: "SUB-802",
    title: "Smart HVAC VRF Piping & Ducting package",
    recipientType: "Subcontractor",
    scope: "Ducting fabrication, dynamic sound attenuators, supply and install of Daikin VRF units, variable air volume terminal dampers.",
    specialization: "MEP / HVAC Systems",
    requiredGrade: "Grade C Minimum",
    location: "Palm Jumeirah, Dubai",
    distribution: "Invite Only",
    deadline: "2026-06-18",
    status: "Draft",
    boq: [
      { item: "Variable Refrigerant Flow (VRF) Outlets 12HP", qty: 6, unit: "Sets", estimatedRate: 15500 },
      { item: "Pre-insulated HVAC Ducting Class A", qty: 850, unit: "Sqm", estimatedRate: 190 }
    ]
  }
];

export const initialProducts: ProductCatalogItem[] = [
  {
    id: "PROD-DXB-091",
    name: "Emirates Steel Rebar 12mm Grade 500W",
    sku: "ES-RB-12-G500W",
    category: "Reinforcement Steel",
    basePrice: "AED 3,150",
    unit: "Metric Ton",
    stockStatus: "In Stock",
    leadTime: "3 to 5 Days",
    specSheet: "ES-12-G500W-ADQ-Approved.pdf",
    bulkPricing: [
      { minQty: 10, rate: 3100 },
      { minQty: 50, rate: 3000 },
      { minQty: 150, rate: 2920 }
    ]
  },
  {
    id: "PROD-DXB-104",
    name: "Ducon Aerated Autoclaved Concrete (AAC) Blocks",
    sku: "DUC-AAC-200X200",
    category: "Masonry & Blocks",
    basePrice: "AED 245",
    unit: "Cubic Meter",
    stockStatus: "In Stock",
    leadTime: "1 to 2 Days",
    specSheet: "DUCON-AAC-Physical-DED-Compliant.pdf",
    bulkPricing: [
      { minQty: 25, rate: 235 },
      { minQty: 100, rate: 220 }
    ]
  },
  {
    id: "PROD-DXB-331",
    name: "Al Ghurair Custom Low-E Glazed Assembly (Facade)",
    sku: "AG-FAC-LOWE98",
    category: "Facade & Glazing",
    basePrice: "AED 920",
    unit: "Square Meter",
    stockStatus: "Low Stock",
    leadTime: "14 to 21 Days",
    specSheet: "AG-LOWE98-SGS-Certificate.pdf",
    bulkPricing: [
      { minQty: 100, rate: 890 },
      { minQty: 500, rate: 850 }
    ]
  }
];

export const initialAuditLogs: AuditLog[] = [
  {
    id: "LOG-4581B",
    timestamp: "2026-05-28 14:32:01 GST",
    user: "Ahmed Al-Maktoum (Client)",
    action: "Quotation Reviewed",
    details: "Acknowledged Edge Architects' compliant bid review. TAMM-DXB-98441 signature verified.",
    hash: "0x8fa4c3...2e91"
  },
  {
    id: "LOG-4560C",
    timestamp: "2026-05-28 11:15:44 GST",
    user: "System Audit Protocol",
    action: "Privacy Wall Enforced",
    details: "Blocked cross-contractor bid leak telemetry on Project ID: BT-2024-012.",
    hash: "0x3ac55d...df01"
  },
  {
    id: "LOG-4521S",
    timestamp: "2026-05-27 16:40:12 GST",
    user: "Al-Futtaim Construction",
    action: "Sub-Inquiry Created",
    details: "Dispatched structural glazing specification package (SUB-801) to verified sub-cons.",
    hash: "0xe298cc...112e"
  },
  {
    id: "LOG-4490X",
    timestamp: "2026-05-26 09:00:30 GST",
    user: "DED Licensing Node",
    action: "License Re-validation success",
    details: "Checked license validity for UAE compliance status (Licensed & Active).",
    hash: "0xc88df1...a044"
  }
];

export const mockChats = {
  "PJ-2024-089": [
    { sender: "Edge Architects", text: "Ahmed, the DED has fully signed off on the revised facade thickness. We are clearing the site mobilization with the master developer.", time: "11:02 AM" },
    { sender: "Ahmed Al-Maktoum (Me)", text: "Excellent news. Let's make sure the contractor Al-Futtaim integrates this revised BOQ item before dispatching their subcontractor glazing requests.", time: "11:15 AM" },
    { sender: "Al-Futtaim Construction", text: "Acknowledged. Subcontractor glass tender is already mapped with real-time audit hashes. Sourcing goes live this afternoon.", time: "11:20 AM" }
  ]
};

// Full scalable API documentation specifications for Developer Playground
export const apiDocumentation = {
  title: "Ardaca BuildFlow Enterprise API v1.0",
  version: "1.0.4-LTS (UAE-Region)",
  baseUrls: {
    production: "https://api.gateway.ardaca.ae/v1",
    sandbox: "https://sandbox.api.gateway.ardaca.ae/v1",
    tamm_connector: "https://node.tamm.abudhabi/nexus/v2"
  },
  securityProtocol: {
    authMode: "Mutual TLS (mTLS) + HMAC-SHA256 Signed Authorization Tokens",
    tokenExpiry: "3600 seconds (1 Hour Sliding Window)",
    tamCompliance: "DED Abu Dhabi Node & Dubai National Economic Registry (NER) Active Websocket Validation"
  },
  endpoints: [
    {
      method: "POST",
      path: "/auth/kyc-register",
      description: "Registers commercial entity, fetches real-time corporate validation status from the DED National Registry, and initializes user secure credentials keys.",
      requestBody: `{
  "tradeLicenseNumber": "CN-994412-B",
  "authority": "DED Dubai",
  "role": "Contractor",
  "authorizedOfficerEmiratesId": "784-1985-1234567-9",
  "attestationDocumentRef": "ipfs://bafybeicm.../license.pdf"
}`,
      response200: `{
  "status": "APPROVED_NER_MATCHED",
  "entityName": "AL-FUTTAIM CONSTRUCTION L.L.C",
  "kycSessionToken": "jwt_tok_99182aa83ad...",
  "licenseExpires": "2028-12-11",
  "ledgerRegisterHash": "0xe88df1c33b9e4a3..."
}`
    },
    {
      method: "POST",
      path: "/procurement/inquiry/publish",
      description: "Generates private procurement inbounds. Cryptographically seals specific item arrays via privacy wall hashing.",
      requestBody: `{
  "projectId": "PJ-2024-089",
  "title": "Façade Structure Glazing Block-2",
  "boqHash": "0xf94abcc7722...",
  "distributionStrategy": "VerifiedOnly",
  "recipientType": "Subcontractor"
}`,
      response200: `{
  "inquiryId": "SUB-8549",
  "state": "ACTIVE_PUBLISHED",
  "ledgerSyncHash": "0x4ccbc72110e59a...",
  "unlockedForSubconsCount": 14
}`
    },
    {
      method: "GET",
      path: "/consultants/quotations/evaluate",
      description: "Retrieves complete, parallel structured side-by-side matrices of valid quotes for comparison analysis. Filters leaks automatically.",
      requestBody: "Query Params: ?projectRef=BT-2024-012&auditTrailRequired=true",
      response200: `[
  {
    "quotationId": "QUO-001",
    "providerName": "Edge Architects",
    "baseQuote": 750000,
    "supervisionQuote": 250000,
    "total": 1000000,
    "gradeRating": "Grade A Compliance Ratio",
    "tammValidated": true
  }
]`
    }
  ],
  infrastructureRecommendations: [
    {
      domain: "Distributed Cryptographic Ledger Logging (Auditable Trails)",
      content: "All communication logs, project declarations, and initial quotation structures must sign state modifications using individual client workspace cryptographic pairs. This guarantees that bid leakage or retrospective pricing alterations are physically impossible, ensuring compliance with local UAE public project tenders."
    },
    {
      domain: "Zero-Trust Privacy Walls & Sandbox Isolation",
      content: "To guarantee perfect commercial confidentiality, database rows for alternate contractors are fully decoupled using separate schema definitions. No aggregate API views or memory models should ever house overlapping quotation keys, protecting supplier margins."
    },
    {
      domain: "TAMM Single Sign-On and UAE PASS Integration",
      content: "Corporate stakeholders authorize administrative actions using UAE PASS OAuth tokens which provide digital identity confirmation backed by biometric data. Ardaca's auth workflow bridges seamlessly, returning checked identity objects directly linked to federal registries."
    }
  ]
};
