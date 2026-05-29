export interface SecurityThreat {
  id: string;
  threatName: string;
  vector: string;
  consequence: string;
  likelihood: "HIGH" | "MEDIUM" | "LOW";
  impact: "CRITICAL" | "HIGH" | "MEDIUM";
  mitigation: string;
  residualRisk: "LOW" | "MEDIUM-LOW";
}

export interface SecurityRequirement {
  id: string;
  category: "ARCH" | "AUTH" | "API" | "DATA" | "INFRA" | "COMPLIANCE";
  title: string;
  description: string;
  controlMeasure: string;
}

export interface SecurityRoleTask {
  role: "CTO" | "DEVOPS" | "PRODUCT";
  action: string;
  frequency: "DAILY" | "WEEKLY" | "SPRINT" | "QUARTERLY";
  verification: string;
}

export const securityThreats: SecurityThreat[] = [
  {
    id: "t1-row-leak",
    threatName: "Cross-Tenant Document & Data Leakage (Row-Level Bypass)",
    vector: "Malicious SQL/NoSQL injections or broken dynamic query parameter checks running on a shared-database postgres multi-tenant model.",
    consequence: "Downstream subcontractor can inspect unredacted master BOQ rates of another competitor, completely compromising procurement bilateral trust.",
    likelihood: "MEDIUM",
    impact: "CRITICAL",
    mitigation: "Enforce Postgres Row-Level Security (RLS) policies bound strictly to JWT session variables (`tenant_id`) at connection schema pool levels. Use parameterized Prepared Statements exclusively; validate client parameters using dry schemas.",
    residualRisk: "LOW"
  },
  {
    id: "t2-unauth-admin",
    threatName: "Unauthorized Enterprise Admin Privilege Escalation",
    vector: "Session identifier modification or lack of server-side capability validations in critical administrative REST controllers (e.g., `/api/admin/system/*`).",
    consequence: "An adversary elevates their account from subcontractor status to a superuser, allowing access to complete regional bidding packages and Emirates IDs.",
    likelihood: "LOW",
    impact: "CRITICAL",
    mitigation: "Implement strict Attribute-Based Access Control (ABAC) in addition to RBAC. Admin endpoints must verify cryptographic tokens issued specifically to short-lived admin sessions. Require hardware-token MFA (FIDO2/WebAuthn) for administrative operations.",
    residualRisk: "LOW"
  },
  {
    id: "t3-bid-rigging",
    threatName: "Bid Leakage via Indirect Timing/Metadata Attacks",
    vector: "Snooping of internal messaging systems where metadata or timing vectors leak which sub-tier general contractor has finalized their bid valuation.",
    consequence: "Competitors adjust price bids ahead of submission curves, creating structural pricing bias in major GCC development bidding stages.",
    likelihood: "MEDIUM",
    impact: "HIGH",
    mitigation: "Anonymize all bid submission metadata. Message threads are routing-proxied through high-entropy anonymous keys. Bid submission records use uniform batch processing times, delaying actual bid reveal until the final clock expiry.",
    residualRisk: "MEDIUM-LOW"
  },
  {
    id: "t4-malware-documents",
    threatName: "Insidious Malware Injection inside Multi-format CAD uploads",
    vector: "Submitting compromised high-volume file types containing macro vectors (e.g. DXF, DWG, XLSX blueprints) through procurement forms.",
    consequence: "Client machines are compromised upon downloading project-control drawings, creating massive lateral pivoting vectors to local sovereign infrastructure.",
    mitigation: "Route all document uploads through an isolated, serverless malware sandbox array. Scan attachments with dual-engines, scrub all EXIF/author metadata, and preserve static PDFs. Encrypt at rest using AWS KMS envelope Customer-Managed Keys (CMKs).",
    likelihood: "MEDIUM",
    impact: "HIGH",
    residualRisk: "LOW"
  },
  {
    id: "t5-ssrf-integrations",
    threatName: "Server-Side Request Forgery via External System Webhooks",
    vector: "Integrating with external government DED Trade registries or municipal API webhooks without enforcing network-level destination restrictions.",
    consequence: "Internal application containers query private metadata nodes or internal developer consoles, leaking highly restricted AWS VPC internal metrics.",
    likelihood: "LOW",
    impact: "HIGH",
    mitigation: "Execute external webhook calls on a completely isolated, non-routed, egress-only container subnet. Utilize third-party proxies (e.g. Squid) to restrict resolve domains solely to pre-approved government whitelist endpoints.",
    residualRisk: "LOW"
  }
];

export const securityRequirements: SecurityRequirement[] = [
  {
    id: "req-1",
    category: "ARCH",
    title: "Defense-in-Depth Sovereign Edge Security Model",
    description: "Aligning Ardaca's infrastructure with UAE-first sovereign cloud paradigms to satisfy government-linked enterprise client risk criteria.",
    controlMeasure: "Configure an onshore Cloud WAF (F5 / Fortinet Cloud on G42 node). Route all traffic through strict ingress paths. Implement microsegmentation at Kubernetes CNI level, applying zero-trust postures between API, Document Processing, and Main DB containers."
  },
  {
    id: "req-2",
    category: "AUTH",
    title: "Strongest Practical MFA & Short-Lived Session Lifecycle",
    description: "Neutralizing credential stuffing, credential reuse, and advanced phishing vectors aiming to hijack GCC Developer superuser accounts.",
    controlMeasure: "Enforce mandatory authenticator-app TOTP or SMS OTP via local regional telco (e.g., e& / du API integration). Short-lived Access Tokens expire under 15 minutes. Automatically rotate Refresh Tokens and immediately invalidate active session family trees upon anomalous device signature mutations."
  },
  {
    id: "req-3",
    category: "API",
    title: "Bilingual Privacy Redaction & Secure API Gateway Controls",
    description: "Preventing inadvertent identity alignment leaks between contractors and subcontractors across indirect API JSON structures.",
    controlMeasure: "Deploy an API Gateway with active JSON Schema validation. Implement resource-level middleware that inspects and strips developer, contractor, or subcontractor details when returning information via joint-project endpoints."
  },
  {
    id: "req-4",
    category: "DATA",
    title: "UAE PDPL & KSA NDMO Aligned Sovereign Data Encryption",
    description: "Compliance protections for sensitive Emirates IDs, GCC Trade Licences, and proprietary commercial bid valuations.",
    controlMeasure: "Apply AES-256-GCM envelope encryption at rest using FIPS 140-3 Hardware Security Modules (HSMs). Apply strict salt and hash algorithms (Argon2id) for all system credentials. Establish automated daily backup procedures with local UAE-restricted block-storage replication."
  },
  {
    id: "req-5",
    category: "COMPLIANCE",
    title: "Auditability Ledger & Restricted Administrative Escalations",
    description: "Ensuring immutable operational logs are maintained, capturing all commercial, pricing, and project-access events to satisfy auditing requirements.",
    controlMeasure: "Write admin and transaction logs to an isolated, append-only, Object-Locked bucket (WORM - Write Once, Read Many). Maintain strict audit logs under UAE PDPL guidelines, tracking data queries, exports, and identity adjustments."
  }
];

export const securityRolesMatrix: SecurityRoleTask[] = [
  {
    role: "CTO",
    action: "Review threat models & sign off on multi-tenant isolation audit certifications.",
    frequency: "QUARTERLY",
    verification: "External SOC 2 Type II audit logs & Penetration test reports ledger."
  },
  {
    role: "CTO",
    action: "Conduct emergency incident drill simulating subcontractor rate leaks or container compromise.",
    frequency: "DAILY",
    verification: "Incident response runbook update signoff sheet."
  },
  {
    role: "DEVOPS",
    action: "Audit Kubernetes egress routing, Cloud KMS key rotations, and WAF rulesets for KSA/UAE nodes.",
    frequency: "WEEKLY",
    verification: "Terraform configuration audit & AWS Security Hub dashboard green status."
  },
  {
    role: "DEVOPS",
    action: "Scan production container images for known vulnerabilities and missing security patches.",
    frequency: "WEEKLY",
    verification: "Vulnerability scan artifact logged in secure pipeline registry."
  },
  {
    role: "PRODUCT",
    action: "Run automated SAST / DAST pipeline assessments & check dependency vulnerability scores (npm audit, Snyk).",
    frequency: "SPRINT",
    verification: "Zero critical-vulnerability build gate blocker approval script."
  },
  {
    role: "PRODUCT",
    action: "Verify metadata scrubbing modules for CAD, Blueprints, and XLS uploads.",
    frequency: "SPRINT",
    verification: "Automatic EXIF extraction verification tests."
  }
];

export interface HardeningStep {
  id: string;
  category: "HEADERS" | "API" | "DATA" | "INFRA";
  directive: string;
  implementation: string;
  status: "HARDENED" | "RECOMMENDED" | "MONITORED";
}

export const websiteHardeningSteps: HardeningStep[] = [
  {
    id: "hdr-1",
    category: "HEADERS",
    directive: "Strict Content-Security-Policy (CSP)",
    implementation: "Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://*.google.com;",
    status: "HARDENED"
  },
  {
    id: "hdr-2",
    category: "HEADERS",
    directive: "HTTP Strict Transport Security (HSTS)",
    implementation: "Strict-Transport-Security: max-age=63072000; includeSubDomains; preload",
    status: "HARDENED"
  },
  {
    id: "hdr-3",
    category: "API",
    directive: "Cryptographic XSRF Mitigation",
    implementation: "Issue anti-CSRF token payloads within double-submit cookies, stored as Secure, SameSite=Strict, HttpOnly elements.",
    status: "HARDENED"
  },
  {
    id: "hdr-4",
    category: "DATA",
    directive: "Dynamic Masking on Sensitive Identity Records",
    implementation: "Emirates ID and passport numbers are masked (`XXXX-XXXX-XXXX-XXXX`) at API presentation level, accessible only to authorized compliance officers.",
    status: "HARDENED"
  },
  {
    id: "hdr-5",
    category: "INFRA",
    directive: "Sovereign Cloud WAF Geofencing (KSA-UAE Edge)",
    implementation: "Configure Cloudflare or Akamai enterprise rules targeting specific IP ranges, block standard proxy VPN networks from administrative panels.",
    status: "RECOMMENDED"
  }
];
