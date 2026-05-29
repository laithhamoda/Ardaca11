export interface Project {
  id: string;
  name: string;
  location: string;
  value: string; // e.g. "AED 12.4M"
  status: "Active" | "Pending" | "Completed" | "Under Review";
  client: string;
  consultant: string;
  contractor: string;
  progress: number; // percentage
  deadline: string;
  category: string;
}

export interface Quotation {
  id: string;
  consultant: string;
  baseQuote: number; // AED
  supervisionQuote: number; // AED
  total: number;
  durationMonths: number;
  milestones: { name: string; cost: number; days: number }[];
  complianceScore: number; // out of 100
  recommended: boolean;
  tamId: string;
}

export interface SubInquiry {
  id: string;
  title: string;
  recipientType: "Contractor" | "Consultant" | "Subcontractor" | "Supplier";
  scope: string;
  specialization: string;
  requiredGrade: string; // e.g., "Grade A", "Unlimited"
  location: string;
  distribution: "Open Public" | "Invite Only" | "Verified Only";
  deadline: string;
  status: "Draft" | "Pending" | "Active" | "Closed";
  boq: { item: string; qty: number; unit: string; estimatedRate: number }[];
}

export interface Bid {
  id: string;
  projectTitle: string;
  clientName: string;
  bidAmount: string;
  status: "Submitted" | "Won" | "Reviewing" | "Sourcing";
  deadline: string;
  location: string;
  gradeRequired: string;
}

export interface ProductCatalogItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  basePrice: string; // Text or number, e.g. "AED 120"
  unit: string; // e.g. "Sqm", "Ton"
  stockStatus: "In Stock" | "Low Stock" | "Out of Stock";
  leadTime: string;
  specSheet: string;
  bulkPricing: { minQty: number; rate: number }[];
}

export interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  details: string;
  hash: string; // Blockchain or secure ledger mock hash
}

export interface KYCDetails {
  companyName: string;
  tradeLicenseNumber: string;
  dedLicensingAuthority: string;
  registrationStep: number;
  role: "Client" | "Consultant" | "Contractor" | "Subcontractor" | "Supplier" | "";
  licenseFile: string;
  status: "Idle" | "Submitting" | "Under Review" | "Approved";
}
