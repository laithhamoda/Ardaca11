export interface EmailTemplate {
  id: string;
  name: string;
  sequenceStep: number;
  subjectA: string;
  subjectB: string;
  previewText: string;
  body: string;
  ctaText: string;
  ctaDestination: string;
}

export interface EmailSequence {
  id: string;
  name: string;
  description: string;
  targetAudience: string;
  goal: string;
  emails: EmailTemplate[];
}

export const emailSequences: EmailSequence[] = [
  {
    id: "demo-followup",
    name: "Demo Request Follow-up Pipeline",
    description: "A 5-part journey triggered immediately after a lead requests a system presentation. Structured to lower no-show rates, pre-educate enterprise buyers on Ardaca's unique architecture, and accelerate contract signing post-demo.",
    targetAudience: "Inbound Leads (Developers, GCs, Commercial Managers, PMCs)",
    goal: "Confirm system briefing booking, educate, establish trust, and close the initial proposal loop.",
    emails: [
      {
        id: "demo-1",
        name: "Email 1: Immediate Booking Confirmation",
        sequenceStep: 1,
        subjectA: "Confirmed: Your Ardaca BuildFlow system diagnostic session",
        subjectB: "Arabic/English construction site controls — Your briefing is set",
        previewText: "Your demonstration and physical site audit diagnostic details are locked in. Let's prep your team.",
        body: `Dear {First Name},

Thank you for requesting an interactive walkthrough of Ardaca BuildFlow. 

We have successfully reserved your custom system briefing session. During this live environment diagnostic, we will skip the generic high-level marketing slides and dive straight into operational mechanics. 

Here is what we will analyze in your 30-minute workspace review:
1. Sovereign Database Scaling: How we parse and process a 30,000-line master BOQ in seconds without browser crashes.
2. The Sealed Virtual Bidding Room: A live simulation of how we isolate subcontractor bid rates to eliminate price-leaking.
3. Dual-Language Compliance: Exporting side-by-side Arabic/English variation ledgers compliant with regional municipal templates (Balady/TAMM).

If you have a live, non-confidential spreadsheet BOQ or a complex change-order dispute you are currently fighting, feel free to bring it. We are happy to stress-test our system using your actual operational parameters.

Looking forward to speaking with you.

Best regards,

Tariq Al-Mansoor
Founder & Managing Director, Ardaca`,
        ctaText: "Add briefing to your calendar",
        ctaDestination: "/onboarding/schedule"
      },
      {
        id: "demo-2",
        name: "Email 2: 24hr Reminder & Prep Guide",
        sequenceStep: 2,
        subjectA: "Pre-briefing Guide: Overcoming the 3 biggest site control leaks",
        subjectB: "Tomorrow: How local builders pass Aramco & WAFI audits",
        previewText: "A 3-minute executive workbook to prepare for our live briefing session tomorrow.",
        body: `Dear {First Name},

We are exactly 24 hours away from your live system diagnostic briefing. 

To ensure we make the absolute best use of your time, we've prepared a brief operational checklist of the exact areas we’ll look to optimize:

* The WhatsApp Exposure: Are your project site engineers approving wet-concrete or rebar variations via personal chat notifications? We'll show you how to close this multi-million Riyal liability gap under FIDIC Clause 20.1 guidelines.
* Local Data Hosting: Is your sensitive project data sitting on global public cloud networks? We'll review how localized hosting on secure on-shore nodes in Riyadh and Dubai ensures compliance with Saudi National Cybersecurity Authority (NCA) Class-3 security protocols.
* Progress Valuation: If validating progress claims takes your Quantity Surveyors more than 5 days per cycle, we will isolate the physical-to-financial verification bottlenecks.

Please feel free to invite your Head of Projects, Document Control Leads, or Senior Quantity Surveyors to join the call. The more technical your team's questions, the better.

See you tomorrow.

Best regards,

Tariq Al-Mansoor
Founder & Managing Director, Ardaca`,
        ctaText: "Share briefing link with your team",
        ctaDestination: "/onboarding/invite-colleagues"
      },
      {
        id: "demo-3",
        name: "Email 3: 1hr Pre-Demo Checklist",
        sequenceStep: 3,
        subjectA: "Starting in 60 mins: Your regional site-control walkthrough",
        subjectB: "Briefing link inside — Let's audit your project controls",
        previewText: "We are starting shortly. Grab a cup of Arabic coffee and click inside for your secure meeting coordinates.",
        body: `Dear {First Name},

We are kick-starting your customized Ardaca BuildFlow walkthrough in exactly one hour. 

Grab a cup of cardamom coffee, close your background spreadsheet tabs, and prepare to see a system engineered specifically for the Middle East's most complex projects.

Meeting Access Details:
* Meeting Room Link: {Secure Video URL}
* Briefing Expert: Tariq Al-Mansoor (MD, Ardaca)
* Duration: 35 Minutes (Highly focused)

What to prepare:
If possible, have a visual list of your primary contractor bottlenecks ready. Whether it’s delayed escrow drawings, slow sub-tier payment loops, or subcontractor rate disputes, we want to address your real-world problems.

Yallah, see you in 60 minutes.

Best regards,

The Ardaca Enterprise Team`,
        ctaText: "Join meeting room now",
        ctaDestination: "{Secure Video URL}"
      },
      {
        id: "demo-4",
        name: "Email 4: Post-Demo Follow-up & Proposal",
        sequenceStep: 4,
        subjectA: "Your custom Ardaca framework + sandbox access credentials",
        subjectB: "Ardaca proposal: Eliminating price-leaks on {Company Name} sites",
        previewText: "Here is your tailored pricing model, sovereign database framework, and restricted sandbox credentials.",
        body: `Dear {First Name},

Thank you for the highly productive session today. It was great discussing the unique logistical and contractual challenges you are facing at {Company Name}, particularly regarding the {Project Name / regional} site-valuation logs.

As promised, we have prepared your tailored operational blueprint and system pricing proposal. We have also opened your private workspace sandbox.

Here is what is ready for your team in the attached portal:
1. Custom Workspace Sandbox: Log in to upload your active 30,000-line master BOQ and stress-test our relational cost model calculations.
2. Compliance Blueprint: A detailed map showing how our local node hosting architecture aligns perfectly with your government cybersecurity requirements.
3. Tailored Enterprise Pricing: A transparent, structured plan covering your primary developments, with flat-rate master user licenses and fully unlimited subcontractor seats.

Please review the attached dashboard. If you or your commercial estimators need additional custom simulations, we can jump on a brief 10-minute workshop anytime next week.

Al-Hamdulillah for today's connection—let's build what matters, securely.

Best regards,

Tariq Al-Mansoor
Founder & Managing Director, Ardaca`,
        ctaText: "Access your dashboard & proposal",
        ctaDestination: "/dashboard/proposals"
      },
      {
        id: "demo-5",
        name: "Email 5: 5-Day No-Response Nudge",
        sequenceStep: 5,
        subjectA: "Should we pause your dedicated sandbox node?",
        subjectB: "NCA compliance check: Sovereign data migration strategy",
        previewText: "Your private, isolated STC/AWS local database container is scheduled to freeze shortly. Here are your options.",
        body: `Dear {First Name},

I wanted to quickly follow up on the custom sandbox and sovereign database pricing we prepared for {Company Name} last week.

To maintain absolute data security and performance, we host trial sandboxes on isolated, local secure hosting nodes. If you need more time to test our automated BOQ parsing engine or side-by-side bilingual reports with your commercial estimation team, we are happy to extend access. 

Otherwise, we are scheduled to archive the testing container and its dummy registers on Friday to release server resources. 

Where do you stand regarding modernizing your project control lines? If you have additional technical questions from your CIO, IT security team, or Commercial Director, we would be glad to address them in a brief call.

Let me know if you would like me to extend your node reservation for another 14 days.

Best regards,

Tariq Al-Mansoor
Founder & Managing Director, Ardaca`,
        ctaText: "Keep sandbox node active",
        ctaDestination: "/dashboard/extend-trial"
      }
    ]
  },
  {
    id: "trial-onboarding",
    name: "Free Trial Activation Sequence",
    description: "A 7-part milestone-driven nurturing track designed to systematically convert self-serve trials into highly active champion accounts. Each step is focused on a singular high-value platform action.",
    targetAudience: "New Trial Users (Project Engineers, Estimators, Quantity Surveyors)",
    goal: "Drive high user activation rates by guiding them to complete profile structures, build databases, invite sub-tiers, and submit digital bid requests.",
    emails: [
      {
        id: "trial-1",
        name: "Day 1: Welcome & Profile Complete",
        sequenceStep: 1,
        subjectA: "Welcome to Ardaca: Activating your regional security keys",
        subjectB: "Your secure project control hub is ready for launch",
        previewText: "Set up your bilingual construction workstation and complete your professional profile.",
        body: `Dear {First Name},

Welcome to Ardaca BuildFlow (GCC). You have joined a network of forward-thinking builders who refuse to risk their margins on manual spreadsheets and consumer chat apps.

To get the absolute most out of your modern interface, let's complete your professional profile. Setting up your exact title, localized region (e.g., KSA, UAE, Qatar), and professional credentials ensures our automated systems configure your workspace according to local regulations.

Step 1: Set Your Language
Choose between native Left-to-Right English, Right-to-Left Arabic, or side-by-side dual workflows.

Step 2: Assign Credentials
Input your certifications (RICS, SCE, CIOB) so your digital signatures on municipal forms are automatically verified and formatted.

Yallah, click below to open your profile dashboard and secure your workspace.

Best regards,

The Ardaca Onboarding Team`,
        ctaText: "Complete your profile setup",
        ctaDestination: "/settings/profile"
      },
      {
        id: "trial-2",
        name: "Day 2: Create First Project Container",
        sequenceStep: 2,
        subjectA: "Step 2: Build your first project container (Let's deploy)",
        subjectB: "Ditch the whiteboard — spin up your digital project node",
        previewText: "Establishing your geographic coordinates, BIM models, and regulatory settings for project tracking.",
        body: `Dear {First Name},

Congratulations on completing your profile! Now, let’s build your first real digital asset workspace. 

Think of a project container as your unified command center. Here, we link physical coordinates with contractual financial data.

To spin up your project in 3 minutes:
1. Select 'New Project' inside your dashboard menu.
2. Define Geographic Coordinates: Standard mapping integrations will lock the project's physical boundary to prevent worker biometric check-in tracking outside site gates.
3. Establish Regulation Presets: Choose whether your contract operates under UAE PDPL, Saudi WAFI, standard FIDIC, or custom Ministry templates.

Once your container is live, you can import structural data sheets effortlessly. Click below to deploy your first container now.

Best regards,

The Ardaca Product Team`,
        ctaText: "Create your first project",
        ctaDestination: "/projects/create"
      },
      {
        id: "trial-4",
        name: "Day 4: Invite Team Members & Subcontractors",
        sequenceStep: 3,
        subjectA: "Bring in the crew: How to securely invite your team",
        subjectB: "Unlimited subcontractor seats — Build your site network",
        previewText: "Accelerate site-to-office communication loops. Here is how to add estimators, PMC supervisors, and builders.",
        body: `Dear {First Name},

Construction is a team sport. An isolated project database is just an expensive archive. 

To eliminate communication delay, we need your estimators, consultants, and subcontractors collaborating inside one secure, audited system.

Unlike traditional Anglo-American software that charges expensive monthly user licenses for every field crew member, we believe in open collaboration. On Ardaca, you get completely unlimited sub-tier seats. You only pay for your core company seats.

How to invite your network today:
1. Navigate to the 'Team Directory' within your active project card.
2. Set Specific User Permission Levels: Assign role types such as 'Client Executive', 'PMC Consultant', or 'Specialist Subcontractor'.
3. Send Invitations: Your colleagues will receive secure, localized login instructions instantly.

Yallah, invite your team and stop relying on unencrypted personal email attachments.

Best regards,

The Ardaca Operations Team`,
        ctaText: "Invite your team members",
        ctaDestination: "/settings/users"
      },
      {
        id: "trial-7",
        name: "Day 7: Upload Master BOQ & Documents",
        sequenceStep: 4,
        subjectA: "Upload challenge: Will your master BOQ break our parser?",
        subjectB: "Step 4: Mapping 30,000 cost lines in 15 seconds",
        previewText: "Ditch spreadsheet limitations. Upload your high-density CSV or Excel rates directly to your project ledger.",
        body: `Dear {First Name},

It is time to stress-test Ardaca BuildFlow's database horsepower. 

If you are managing a major development, your Bill of Quantities (BOQ) likely contains thousands of individual labor, equipment, and material rows. Traditional software struggles to parse files of this scale, leading to browser crashes and frozen screens.

Our advanced relational cost database can parse, organize, and calculate a 30,000-line master BOQ in less than 15 seconds.

Let’s load your master data:
* Drag and drop your Excel (.xlsx) or CSV cost spreadsheet into the Project 'Documents and BOQ' folder.
* Map column metrics: Ensure your unit rates, raw quantities, and POMI classification codes align with our auto-recognition fields.
* Save Golden Baseline: The system locks the contract's initial cost target, ready to benchmark future site modifications.

Take a moment to upload your baseline sheet today and see how effortlessly a relational database handles massive data volumes.

Best regards,

The Ardaca Cost Control Team`,
        ctaText: "Upload your master BOQ",
        ctaDestination: "/projects/documents"
      },
      {
        id: "trial-14",
        name: "Day 14: Launch Your First RFQ Round",
        sequenceStep: 5,
        subjectA: "Procure with confidence: Launching your first secure RFQ",
        subjectB: "Seal your bid rates: Launch a subcontractor tender round",
        previewText: "Eliminate rate leaking. Deploy your first cryptographic bid folder in under 5 minutes.",
        body: `Dear {First Name},

You have completed your profile, built your project container, and loaded your cost baselines. Now, let’s digitize your procurement pipeline.

Distributing rate packages via standard PDF emails is highly vulnerable to bidder rate leaking, leading to inflated supplier prices that eat into your margins.

Ardaca's Sealed Virtual Bidding Room is a game-changer:
1. Select the specific BOQ block or MEP package you wish to source.
2. Build an RFQ Campaign: Define vendor qualifications, bid submission deadlines, and local content constraints.
3. Invite Pre-screened Subcontractors: Bidders enter a secure, isolated space where they insert rates directly. No manual pricing spreadsheets are shared across applicants.

Once the bidding gates close, Ardaca compiles the complete comparative analytics matrix automatically, exposing rate outliers immediately.

Click below to run your first automated bid round.

Best regards,

The Ardaca Commercial Team`,
        ctaText: "Launch secure bidding campaign",
        ctaDestination: "/projects/rfqs"
      },
      {
        id: "trial-21",
        name: "Day 21: Mid-Trial Value Check & Analytics Hook",
        subjectA: "Your 21-day project analytics recap: Where are the gaps?",
        subjectB: "3 weeks of Ardaca: Streamlining site-to-office handovers",
        previewText: "Let's review setup activities, collaboration velocity, and target margins in your workspace.",
        sequenceStep: 6,
        body: `Dear {First Name},

You have been using Ardaca BuildFlow for three weeks now. Al-Hamdulillah, we are seeing some great activity inside your developer container.

As we approach the final leg of your testing trial, let’s review the efficiency gains your team has unlocked:
* Collaboration Velocity: Compare your documentation response times on Ardaca versus standard email loops.
* Database Security: Your project drawings, BOQ line-items, and worker logs are stored securely on local sovereign cloud servers, protected against privacy breaches.
* Estimating Accuracy: Our calculation engine has audited your cost calculations, ensuring your margin targets remain fully protected.

If you want to review your active sandbox progress or set up a final, custom system diagnostic session with our lead developers, we would be delighted to host a workshop for your executives.

Looking forward to our continued collaboration.

Best regards,

Tariq Al-Mansoor
Founder & Managing Director, Ardaca`,
        ctaText: "Review your team activity report",
        ctaDestination: "/dashboard/metrics"
      },
      {
        id: "trial-30",
        name: "Day 30: Contract Verification & Onboarding Support",
        sequenceStep: 7,
        subjectA: "Transitioning to Production: Your 30-day value analysis",
        subjectB: "Keep your site secure: Locking your enterprise agreement",
        previewText: "Your free testing access wraps up soon. Let's transit your regional sandbox into production.",
        body: `Dear {First Name},

Today marks 30 days of optimizing your project controls on Ardaca BuildFlow. 

We hope your estimators, quantity surveyors, and project directors have experienced the difference of a software system built specifically for the Middle East's construction realities.

As we transition your container from a test sandbox to a full live production workspace, we want to ensure you have everything you need to scale:
1. Final Data Export: Need to export your active project registries? Download secure, audited Excel and PDF sheets in one click.
2. Subcontractor Onboarding: We can assist you in importing your entire historical supplier list into your private server roster.
3. Tailored SLA Options: Review our dedicated system support agreements, custom municipal integrations, and on-premises server hosting guidelines.

Click below to book a short, 15-minute transition call with our onboarding team, or directly secure your production license keys.

Best regards,

Tariq Al-Mansoor
Founder & Managing Director, Ardaca`,
        ctaText: "Schedule your transition call",
        ctaDestination: "/onboarding/schedule"
      }
    ]
  },
  {
    id: "re-engagement",
    name: "Inactive Trial Re-engagement Funnel",
    description: "A high-velocity 3-part sequence triggered automatically when a registered trial space records zero user logins for seven consecutive days. Uses gentle value reminders and urgency to win back champion estimators.",
    targetAudience: "Inactive Trial Users (Logged in once, then went silent)",
    goal: "Win back inactive project managers, overcome onboarding friction, offer direct integration assistance, and create conversion urgency.",
    emails: [
      {
        id: "reengage-1",
        name: "Email 1: Gentle Check-in & Support",
        sequenceStep: 1,
        subjectA: "Stuck with master BOQ mapping? Let our QS team handle it",
        subjectB: "Let's resolve your spreadsheet format issues together",
        previewText: "Setting up project controls is hard. We are here to help upload your data sheets.",
        body: `Dear {First Name},

We noticed that your Ardaca BuildFlow workspace has been quiet for the last week. 

We completely understand how busy active construction site roles can be. When you are managing delayed crane deliveries, subcontractor material disputes, and consultant audits, testing a new software tool falls in priority.

If you are stuck trying to map your company’s custom spreadsheet columns, or struggling to parse a massive master BOQ, please don't struggle in isolation.

Our internal team of qualified Quantity Surveyors (RICS) is available to format and import your data sets for you, completely free of charge.

Simply click below to book a 10-minute setup session. We will get your project container live and running in no time.

Best regards,

The Ardaca Customer Success Team`,
        ctaText: "Book a 10-minute migration call",
        ctaDestination: "/onboarding/schedule"
      },
      {
        id: "reengage-2",
        name: "Email 2: Case Study & Proof Injection",
        sequenceStep: 2,
        subjectA: "How one Saudi developer cut escrow validation to 72 hours",
        subjectB: "Sovereign audit case: Reclaiming construction margins",
        previewText: "Read how regional general developers are eliminating paperwork delays on site.",
        body: `Dear {First Name},

Many builders tell us, \"We're happy keeping our project directories on manual spreadsheets. It works well enough.\"

But 'well enough' can cost millions in hidden legal leakage.

Take the case of a Riyadh-based residential developer managing off-plan projects under WAFI escrow regulations. Their supervisors logged physical milestones on whiteboard files, while their accounting teams processed claims manually in offices.

Because of this gap, compiling independent surveyor proof-packets took four weeks per draw, creating critical subcontractor payment delays.

By migrating to Ardaca BuildFlow, they automated progress tracking. Using their custom site smartphone logs, site-to-office calculations are integrated instantly.

The developer cut their escrow draw approval cycle from 28 days to under 72 hours. Al-Hamdulillah, that is the difference between manual spreadsheets and systematic, regional project controls.

Let's do the same for your active project pipelines.

Best regards,

Tariq Al-Mansoor
Founder & Managing Director, Ardaca`,
        ctaText: "Read the full case studies",
        ctaDestination: "/resources/case-studies"
      },
      {
        id: "reengage-3",
        name: "Email 3: Final Urgency Nudge (3-Day Limit)",
        sequenceStep: 3,
        subjectA: "Your secure workspace container expires in 3 days",
        subjectB: "Ardaca trial ending: Save your project compliance files",
        previewText: "Final notification. Your isolated database node will automatically archive in 72 hours.",
        body: `Dear {First Name},

This is our final notification regarding your Ardaca BuildFlow trial container.

In line with our strict data protection protocols and local sovereign residency compliance (NCA guidelines), we do not preserve idle data on our secure STC/AWS servers indefinitely. 

In exactly 72 hours, your isolated database container and its imported dummy files will be permanently archived and system resources released.

If you want to keep your project setup active, or need to export your saved files, please log in now.

If you would like to request a 14-day extension to review the platform with your Head of Projects or estimating leads, click below to reactivate your secure portal.

Best regards,

The Ardaca Systems Registry Team`,
        ctaText: "Extend your trial access for 14 days",
        ctaDestination: "/dashboard/extend-trial"
      }
    ]
  },
  {
    id: "enterprise-outbound",
    name: "Enterprise Account Outbound Pipeline",
    description: "An opinionated, insight-first 5-step outbound email matrix targeted at top enterprise decision-makers in the GCC construction sector. Avoids sales jargon to establish authority through technical expertise and local understanding.",
    targetAudience: "Executive Buyers (Head of Projects, Procurement Directors, Commercial Directors, CIOs of Tier-1 GCs/Developers)",
    goal: "Secure a 15-minute diagnostic booking with seasoned builders by showing high local expertise under pressure.",
    emails: [
      {
        id: "outbound-1",
        name: "Email 1: Executive Insight Opener",
        sequenceStep: 1,
        subjectA: "Audit leak: The multi-million Riyal WhatsApp gap in GCC sites",
        subjectB: "FIDIC Clause 20.1 analysis on active {Company Name} projects",
        previewText: "Why informal chat approvals on site coordinates represent an active contract risk.",
        body: `Dear {First Name},

Walk onto almost any major construction project in Riyadh or Abu Dhabi, and you’ll see the exact same thing: field engineers taking pictures of rebar revisions on their smartphones and texting them to subcontractor coordinators via WhatsApp.

The job gets done quickly. But contractually, {Company Name} is sitting on a major legal risk.

Under standard FIDIC Clause 20.1, notifications regarding site modifications or Extension of Time (EOT) must follow strict, written procedures within 28 days. An informal chat message to an individual supervisor's personal phone does not constitute formal notice.

If that change isn't formally registered in a contractually secure system, your right to reclaim cost additions is legally dead.

We built Ardaca BuildFlow to solve this exact communication leakage. Our system bridges site-level speed with strict corporate compliance, recording every site coordinate changes in an immutable, legally-binding ledger.

I’d love to share our 3-minute regional case study showing how other Tier-1 builders are closing this gap. Do you have 10 minutes next Tuesday morning?

Best regards,

Tariq Al-Mansoor
Founder & Managing Director, Ardaca`,
        ctaText: "Read our contract compliance guide",
        ctaDestination: "/resources/expert-insights"
      },
      {
        id: "outbound-2",
        name: "Email 2: Core Problem Framing",
        sequenceStep: 2,
        subjectA: "Why Western project tools crash on {Company Name} BOQs",
        subjectB: "The spreadsheet bottleneck in massive GCC developments",
        previewText: "Are you running multi-million Riyal developments on systems designed for European housing?",
        body: `Dear {First Name},

When we talk to regional Head of Projects and Commercial Directors, they often mention using famous Western project management tools.

These platforms are globally popular. But they were designed for European, mid-density projects. They were not engineered to handle the sheer scale, pace, and legal landscape of Gulf giga-infrastructure.

Here is what happens on GCC developer sites:
1. System Stalls: Standard SaaS tools often crash when trying to parse a 35,000-line master Bill of Quantities (BOQ).
2. Cybersecurity Gaps: Global cloud platforms host your sensitive government blueprints on offshore servers, violating KSA National Cybersecurity Authority (NCA) Class-3 regulations.
3. Language Barriers: They lack native Right-to-Left Arabic/English workflows, making collaboration with local municipal inspectors difficult.

These shortcomings force your estimators to manage critical costs on fragmented, manual Excel sheets.

Ardaca BuildFlow was built locally to address these exact pain points. We handle massive BOQ models, preserve data sovereignty on local nodes, and offer side-by-side bilingual compliance reports natively.

Would you be open to a 10-minute briefing to review how we can streamline your estimating pipeline?

Best regards,

Tariq Al-Mansoor
Founder & Managing Director, Ardaca`,
        ctaText: "Book secure systems diagnostic",
        ctaDestination: "/onboarding/schedule"
      },
      {
        id: "outbound-3",
        name: "Email 3: Targeted ROI Valuation Case",
        sequenceStep: 3,
        subjectA: "Case analysis: How a regional builder cut validation cycles by 70%",
        subjectB: "Eliminating contractor price-leaking on {Company Name} tenders",
        previewText: "A look at the numbers. How a leading developer accelerated payment approvals and secured margins.",
        body: `Dear {First Name},

Following my previous letters, I wanted to share some actual financial impacts. 

When you distribute MEP or facade bidding rate packages to subcontractor networks via manual email files, price-leaking is rampant. Competitors often discover bid rates, leading to inflated, identical subcontractor pricing that destroys developer margins.

Ardaca BuildFlow introduces Sealed Virtual Bidding Rooms to secure your procurement:
* Cryptographic Isolation: Each subcontractor inserts pricing into an isolated, secure database. Rates stay locked until the public gate timer expired.
* Automated Analysis: The system compiles bid-comparison matrices in seconds, immediately highlighting cost outliers.
* Faster Approvals: One leading developer cut their payment approval validation loops from 4 weeks to exactly 72 hours, significantly improving subcontractor liquidity.

By securing cost records, they reduced contract dispute risks on their high-profile projects.

We can run an identical diagnostic simulation on your current {Company Name} project registers. Let me know if you would like to explore this next week.

Best regards,

Tariq Al-Mansoor
Founder & Managing Director, Ardaca`,
        ctaText: "View our regional ROI studies",
        ctaDestination: "/resources/case-studies"
      },
      {
        id: "outbound-4",
        name: "Email 4: Peer Reference & Social Proof Spotlight",
        sequenceStep: 4,
        subjectA: "What senior GCC Project Directors say about Ardaca BuildFlow",
        subjectB: "50+ Regional subcontracting firms pre-screened for you",
        previewText: "Meet the pre-verified supplier pool ready for production deployment on your sites.",
        body: `Dear {First Name},

Over fifty specialized subcontracting firms across Riyadh, Abu Dhabi, and Dubai have officially onboarded to Ardaca's secure compliance database.

For developers and lead PMCs, this means immediate operational efficiency.

Instead of spend weeks manually checking subcontractor trade licenses, Aramco vendor qualifications, civil defense certificates, and worker biometrics, you can access a pre-verified pool of specialists in exactly two clicks.

Our database keeps these files updated on local, secure servers in Richmond and Dubai. We eliminate the administrative burden of prequalification so your teams can focus on site progress.

Here is what peer developers say about the impact:
"Ardaca BuildFlow has bridged the site-to-office communication gap for our project managers, keeping us compliant across our giga-project developments." - Senior VP of Projects, Riyadh

Let’s help your team achieve the same results. Let me know what date next week works for a brief presentation.

Best regards,

Tariq Al-Mansoor
Founder & Managing Director, Ardaca`,
        ctaText: "Explore our subcontracting network",
        ctaDestination: "/dashboard/onboarded-subcontractors"
      },
      {
        id: "outbound-5",
        name: "Email 5: Final Outreach with Booking Coordinates",
        sequenceStep: 5,
        subjectA: "Next step: Scheduling your 15-minute diagnostic briefing",
        subjectB: "Direct calendar access: Streamlining {Company Name} projects",
        previewText: "Let’s secure your project control lines. Book your customized systems presentation today.",
        body: `Dear {First Name},

I have reached out twice regarding the multi-million Riyal contract risks that informal site communication can introduce to your developments at {Company Name}.

I understand that your schedule is busy, and project delivery is your top focus.

If you are ready to evaluate how sovereign, localized data controls can protect your margins, simplify bilingual workflows, and speed up contractor billing, here are my direct booking coordinates.

Please click the calendar link below to select a convenient, focused 15-minute diagnostic briefing:
{Direct Booking Link}

Even if you aren’t ready to transition away from spreadsheets or legacy software today, evaluating what is possible with modern GCC construction technology is always a valuable exercise.

Thank you for your time. Yallah, let’s build with precision.

Best regards,

Tariq Al-Mansoor
Founder & Managing Director, Ardaca`,
        ctaText: "Schedule your 15-minute briefing",
        ctaDestination: "/onboarding/schedule"
      }
    ]
  }
];
