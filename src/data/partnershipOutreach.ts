export interface PartnershipEmail {
  id: string;
  partnerType: string;
  targetFocus: string;
  subject: string;
  personalizationGuide: string;
  bodyTemplate: string;
  valueProposition: string;
  proposedNextStep: string;
}

export const partnershipEmails: PartnershipEmail[] = [
  {
    id: "giga-contractor",
    partnerType: "Large GCC Tier-1 Contractor",
    targetFocus: "Joint Ventures & Major Infrastructure Builders (e.g., Al Futtaim, Nesma & Partners, El Seif equivalent)",
    subject: "Bilateral System Integration: Reconciling 10,000+ BOQ Line Variations on GCC Infrastructure Joint Ventures",
    personalizationGuide: "Reference an active municipal, airport, or high-speed rail joint venture where multiple independent contractors are manually aligning claim valuations using shared Excel files, risking margin leakage.",
    valueProposition: "Ardaca acts as a neutral cloud-sovereign buffer. It allows joint-venture partners to securely synchronize progress claims against a single, encrypted Master BOQ, automatically calculating municipal variation premiums without exposing private subcontractor rate sheets.",
    proposedNextStep: "A brief 30-minute operational review of our Joint Venture Sandbox prototype with your joint-venture commercial estimators.",
    bodyTemplate: `Dear [Name],

I have been tracking [Contractor Name]'s excellent delivery on the [Specific Giga Project, e.g., Diriyah Gate Infrastructure Package / NEOM Spine joint venture]. Managing massive civil scope alongside multi-firm joint venture structures inevitably places a heavy burden on commercial departments seeking to reconcile complex, multi-tier progress claims.

In our work with Tier-1 lead contractors across the GCC, we find that aligning variation lines across several JV partners frequently drags claim approvals to 45+ days. When sub-tier teams are forced to exchange master Excel BOQs or coordinate variations via unencrypted channels, secure bid-rate preservation is compromised.

We built Ardaca (BuildFlow GCC) to alleviate this specific bottleneck. Ardaca acts as a neutral, GCC-hosted cloud clearinghouse that:
1. Reconciles 30,000+ line JV Master BOQs under PomI/RICS guidelines in less than 15 seconds.
2. Isolates subcontractor bid rates via sealed virtual pricing rooms, protecting trade secrets.
3. Provides an encrypted, auditable ledger that meets Saudi National Cybersecurity Authority (NCA) standards.

Rather than proposing a commercial vendor relationship, I would like to explore a bilateral integration partnership. We want to demonstrate how [Contractor Name] can utilize our sandboxed multi-tenant environment to automate joint-venture commercial handoffs.

Are you available for a brief, peer-to-peer 30-minute discussion on [Day of Week, e.g., next Tuesday morning]? 

Sincerely,

Tariq Al-Mansoor
Founder & Managing Director
Ardaca (BuildFlow GCC)
tariq@ardaca.com | KSA (+966) / UAE (+971)`
  },
  {
    id: "engineering-consultancy",
    partnerType: "Engineering & Supervision Consultancy",
    targetFocus: "Global & Regional PMC / Lead Architects (e.g., AtkinsRéalis, AECOM, Parsons GCC equivalent)",
    subject: "Streamlining BOQ Design-to-Construction Handoffs & Preferred Vendor Alignment",
    personalizationGuide: "Reference their regional presence in Riyadh or Abu Dhabi, acknowledging the massive volume of RFIs and claims they must review under tight supervision KPIs on behalf of PIF or sovereign developers.",
    valueProposition: "Ardaca reduces the time consultants spend auditing subcontractor progress claims and variation requests by 75%, using a clear visual and bilingually auditable BOQ ledger that matches DED and municipal guidelines.",
    proposedNextStep: "A 30-minute introductory call to explore listing Ardaca as the preferred project-control sovereign workspace for your incoming supervision packages.",
    bodyTemplate: `Dear [Name],

As supervising engineers on complex regional master plans like [Project Name, e.g., King Salman Park / Red Sea Global Phase 2], [Consultancy Name] is frequently held to strict turnaround times on technical and commercial RFI reviews. 

During our audits with project management consultants in KSA and the UAE, we found that engineers spend up to 14 hours per week manually comparing contractor variation claims against native design specifications, often using inconsistent Excel sheets. This slows down progress and exposes developers to high-value contract disputes.

Ardaca serves as an automated, bilingually compliant supervisor workflow designed specifically to bridge the design-to-construction gap:
• Single Source of Truth: Supervising engineers can instantly compare contractor-submitted progress valuations side-by-side with approved design quantities.
• 1-Click Verification: Auto-detects BOQ quantity overruns, immediately flagging claims that exceed regional guidelines or historical thresholds.
• Local Sovereignty: Completely aligns with local ministerial data privacy mandates, ensuring critical project telemetry never exits regional borders.

We are establishingpreferred vendor relationships with major engineering consultancies in KSA and UAE. We would love to demonstrate how [Consultancy Name] can include class-certified project control environments inside incoming supervision packages to elevate developer satisfaction and de-risk deliveries.

Would you be open to an introductory, 30-minute exchange next week to see how engineering groups utilize our pre-vetted compliance modules?

Best regards,

Tariq Al-Mansoor
Founder & Managing Director
Ardaca (BuildFlow GCC)
tariq@ardaca.com | KSA (+966) / UAE (+971)`
  },
  {
    id: "real-estate-developer",
    partnerType: "Master Real Estate Developer",
    targetFocus: "Sovereign Giga-Developers & Private Builders (e.g., Emaar, Aldar, ROSHN equivalent)",
    subject: "Mitigating Developer Margin Leakage: Sovereign Platform Adoption for [Developer Name] Ecosystem",
    personalizationGuide: "Reference their iconic regional portfolio and their strategic focus on 'Local Content' metrics, smart city integration, and strict budget containment across fast-tracked master developments.",
    valueProposition: "Protects master developer margins by establishing sealed digital bidding rooms for their entire supply chain, and accelerates construction timelines by automating contractor claims to keep cash flowing to sub-tier trades.",
    proposedNextStep: "An exclusive 30-minute executive briefing on how sovereign developers use isolated cloud sandboxes to monitor and run bid rounds securely.",
    bodyTemplate: `Dear [Name],

[Developer Name]'s commitment to building out the region's future infrastructure is visible across landmark projects such as [Specific Master Plan, e.g., Jeddah Central / Yas Island Expansion]. With mega-developments scaling rapidly, the key to protecting developer ROI lies in ensuring procurement integrity and preventing cost variation leakage.

Many sovereign developer boards are looking to replace fragmented workflows where commercial estimates are routed across loose WhatsApp files and offline registries. When developers lack strict end-to-end security over bid rounds and progress claims, subcontractor rate-leaking and delayed payments often arise.

We built Ardaca to serve as the unified operational and financial command center for GCC developers:
1. End-to-End Integrity: Cryptographically sealed virtual bid rooms ensure absolute procurement compliance, eliminating the risk of bid-rigging or rate-leakage during major trade tenders.
2. Bilingual Progress Claims: Direct integration with Regional DED Trade registries ensures that all progress audits, variation agreements, and payout calls are cross-verified and stored locally.
3. High-Fidelity BOQ Parsing: Parses and scales 30,000-line master BOQ documents under local estimation frameworks in seconds, letting your teams analyze tenders with complete accuracy.

We would like to introduce an enterprise sandboxing program tailored for [Developer Name]. This program sets up an isolated environment on locally hosted cloud resources (such as STC or AWS Middle East) to pilot Ardaca across your upcoming development envelopes.

Could we schedule a brief 30-minute briefing on [Day of Week, e.g., next Wednesday afternoon] to discuss your current local-content alignment objectives?

With respect,

Tariq Al-Mansoor
Founder & Managing Director
Ardaca (BuildFlow GCC)
tariq@ardaca.com | KSA (+966) / UAE (+971)`
  },
  {
    id: "professional-association",
    partnerType: "Professional & Chartered Association",
    targetFocus: "Regional Engineering & Commercial Committees (e.g., PMI Arabia Chapter, CIOB Gulf, RICS MENA equivalent)",
    subject: "Member Benefit Proposal: Advancing Sovereign ConTech Best Practices with RICS/CIOB Members",
    personalizationGuide: "Acknowledge their leadership in setting global estimation standards and their ongoing focus on elevating local-content metrics and digital literacy across regional engineering teams.",
    valueProposition: "Collaboratively produces bilingually localized, expert-led training modules on modern electronic BOQ standards and secure digital project handoffs, providing unique, hands-on member benefits.",
    proposedNextStep: "A 30-minute roundtable introduction or webinar planning call with your professional development committee.",
    bodyTemplate: `Dear [Name],

I have long admired [Association Name]'s consistent efforts in raising professional construction standards across the GCC. Your focus on building digital capability and formalizing estimation standards is vital as our industry delivers on historically large giga-projects.

While our regional workforce is highly skilled in traditional measurement guidelines (such as PomI and standard RICS schedules), there is still an operational gap when using modern digital contech tools. Many local engineers are forced to use general-purpose spreadsheets because specialized global software lacks native bilingual layouts and local regulatory compliance.

We want to support [Association Name] by delivering unique, peer-reviewed educational value to your members. As a RICS-certified team ourselves, we would love to collaborate on a bilingual workshop or a professional webinar series:
• Topic: 'Sovereign ConTech: Moving to Secure Digital Tendering and NCA-Compliant BOQ Workflows in the GCC.'
• Educational Goal: Provide hands-on training to cost managers and project directors on how to build, parse, and protect mega-project estimation models within secure regional regulatory frameworks.
• Unique Member Benefit: Provide RICS, CIOB, and PMI members with complimentary trial access to Ardaca's advanced BOQ sandbox environment to support their continuous professional development (CPD) points.

We do not seek commercial marketing, but rather a community-led partnership that advances regional contech capabilities. We want to equip local engineers with the skills needed to lead the digital transformation of our region's giga-projects.

Are you available for a brief 30-minute call next week to explore a potential educational collaboration?

Warm regards,

Tariq Al-Mansoor
Founder & Managing Director
Ardaca (BuildFlow GCC)
tariq@ardaca.com | KSA (+966) / UAE (+971)`
  },
  {
    id: "technology-partner",
    partnerType: "SaaS & Core Technology Vendor",
    targetFocus: "Global ERP, CDE, or Hyperscale Cloud Systems (e.g., Oracle, Autodesk, Microsoft Gulf offices equivalent)",
    subject: "Product Integration & Co-Marketing: Bridging Core ERPs with Localized GCC Construction Claims",
    personalizationGuide: "Reference their impressive regional market share in enterprise project management, noting that local contractors still require bilingual compliance and secure local cloud nodes to complement their core systems.",
    valueProposition: "Ardaca acts as a specialized, localized extension for global enterprise software (like Oracle Primavera or Autodesk Construction Cloud), giving regional developers a secure, bilingual frontend for subcontractor claims.",
    proposedNextStep: "A 30-minute integration review call to discuss connecting our open APIs with your regional client portfolio.",
    bodyTemplate: `Dear [Name],

[Technology Partner Name]'s enterprise solutions are deep-rooted across major development teams in the Middle East. Systems like [Specific Core Product, e.g., Autodesk Construction Cloud / Oracle Primavera Prime] are excellent for high-level project management and design coordination.

However, regional builders frequently encounter localized roadblocks when managing day-to-day subcontractor claims and variation approvals:
1. Native Bilingual Interfaces: Subcontractors often require side-by-side English/Arabic workflows to navigate complex municipal submissions, which global platforms rarely support out-of-the-box.
2. Sovereign Cloud Hosting: Strict local data regulations (including NCA guidelines) restrict developers from storing sensitive project valuations on global public clouds.
3. Regional Valuation Standards: Tracking payment claims against complex local contracts requires localized workflows that global ERP platforms are not optimized to handle.

We see an excellent opportunity to partner. By integrating Ardaca with [Technology Partner Name]'s platform, we can offer regional clients a complete, end-to-end solution:
• Seamless Flows: Ardaca serves as the secure, bilingually compliant frontend for subcontractor progress claims. Approved valuations are then piped directly into [Specific Core Product] for high-level portfolio oversight.
• Joint Growth: Co-marketing an integrated solution allows us to unlock enterprise opportunities with sovereign developers who demand absolute data residency compliance.

We would love to share our API documentation and explore how an integrated solution can deliver exceptional value to our mutual enterprise customers.

Would you be open to a 30-minute integration call on [Day of Week, e.g., next Tuesday afternoon]?

Best regards,

Tariq Al-Mansoor
Founder & Managing Director
Ardaca (BuildFlow GCC)
tariq@ardaca.com | KSA (+966) / UAE (+971)`
  }
];
