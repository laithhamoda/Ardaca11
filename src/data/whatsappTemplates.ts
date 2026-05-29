export interface WhatsAppTemplate {
  id: string;
  name: string;
  category: 'UTILITY' | 'MARKETING';
  headerType: 'TEXT' | 'IMAGE' | 'NONE';
  headerText?: string;
  bodyText: string;
  footerText: string;
  buttons: string[];
  arabicVersion?: {
    bodyText: string;
    headerText?: string;
    footerText: string;
    buttons: string[];
  };
}

export const whatsappTemplates: WhatsAppTemplate[] = [
  {
    id: "whatsapp-demo-confirm",
    name: "ardaca_demo_confirmation",
    category: "UTILITY",
    headerType: "TEXT",
    headerText: " briefing session confirmed",
    bodyText: "السلام عليكم {{1}} ({{2}}).\n\nYour interactive system walkthrough and site-control diagnostic for Ardaca BuildFlow is confirmed.\n\n📅 Date: {{3}}\n⏰ Time: {{4}} (GCC standard)\n📍 Meeting link: {{5}}\nWith: Tariq Al-Mansoor (MD)\n\nWe look forward to analyzing your cost-control lines. Please click the button below to add this appointment directly to your calendar or invite colleagues.",
    footerText: "Ardaca Sovereign Tech Controls • Powered by local nodes",
    buttons: ["📅 Save to Calendar", "👥 Invite Colleagues"],
    arabicVersion: {
      headerText: "تم تأكيد موعد العرض التوضيحي",
      bodyText: "السلام عليكم يا سيد/ة {{1}} (شركة {{2}}).\n\nتم تأكيد موعد العرض التوضيحي التفاعلي وتدقيق أنظمة التحكم في الموقع لمنصة أردكا (BuildFlow).\n\n📅 التاريخ: {{3}}\n⏰ الوقت: {{4}} (بتوقيت الخليج)\n📍 رابط الاجتماع: {{5}}\nبرفقة: طارق المنصور (المدير التنفيذي)\n\nنسعد بتحليل وتدقيق سلاسل التكلفة ومطابقتها لمشروعكم. يرجى الضغط على الزر أدناه لحفظ الموعد مباشرة أو دعوة زملائكم.",
      footerText: "أردكا للتحكم السيادي بمواقع البناء • استضافة سحابية محلية",
      buttons: ["📅 حفظ في التقويم", "👥 دعوة زميل للموقع"]
    }
  },
  {
    id: "whatsapp-trial-welcome",
    name: "ardaca_trial_welcome",
    category: "UTILITY",
    headerType: "TEXT",
    headerText: "Welcome to Ardaca BuildFlow",
    bodyText: "Hello {{1}},\n\nYour sovereign developer sandbox container at Ardaca is fully activated and hosted on-shore on our secure regional nodes. 🚀\n\nYour workspace ID is: {{2}}\n\nLet's get started on your 30-day trial:\n1. Upload your master estimate spreadsheet to test our 30,000-line BOQ cost calculator parser.\n2. Create your first geographic coordinates fence to safeguard field staff biometrics.\n\nClick below to securely access your workspace.",
    footerText: "Sovereign Construction Controls • NCA & UAE PDPL Compliant",
    buttons: ["💻 Launch Workspace", "📞 Speak with Success PMC"]
  },
  {
    id: "whatsapp-feature-quotation",
    name: "ardaca_feature_quotation",
    category: "MARKETING",
    headerType: "IMAGE",
    bodyText: "Hello {{1}} ({{2}}),\n\nAre you still managing subcontractors' MEP and facade quotes via manual email files? Stop risking rate leakage.\n\nWith our newly updated Sealed Virtual Bidding Room on Ardaca BuildFlow, you can lock all subcontractor packages in separate cryptographic vaults until your tender gate closes.\n\nBenefits:\n* 0% Price-Leaking: Subcontractors submit rates in isolated screens.\n* Instant Comparison: Automated bid evaluation matrices compiled in seconds.\n* Compliance Validation: Direct mapping of rates to your master BOQ structures.\n\nSee how easily you can safeguard your development margins today.",
    footerText: "Protecting margins on major GCC developments",
    buttons: ["📽️ Watch 2min Walkthrough", "📊 Access Price Sandbox"],
    arabicVersion: {
      bodyText: "مرحباً يا سيد/ة {{1}} ({{2}})،\n\nهل ما زلت تدير عروض أسعار مقاولي الباطن للأعمال الكهروميكانيكية والواجهات عبر ملفات الإيميل العادية؟ احمِ مشروعك من تسريب ميزانيات البناء السريعة.\n\nمع ميزتنا المحدثة \"غرفة تسعير مقاولي الباطن الرقمية المُغلقة\" في منصة أردكا، يمكنك قفل كافة العروض في حجرات مشفرة ومعزولة تماماً حتى وقت فتح المظاريف.\n\nالمزايا:\n* حماية الأسعار تماماً: يدخل مقاول الباطن أسعاره دون تسريب للمنافسين.\n* مقارنة عروض فورية: جدول مقارنة آلي متكامل يصدر بغضون ثوانٍ.\n* التحقق من الميزانية المعتمدة: مطابقة آلية للمعدلات مع جداول الكميات الذكية.\n\nاحمِ هوامش أرباح مشروعك الآن.",
      footerText: "سلاسل إمداد وحماية أرباح مطوري العقار بالخليج",
      buttons: ["📽️ شاهد شرح دقيقتين", "📊 تجربة تسعير مجانية"]
    }
  },
  {
    id: "whatsapp-reengagement",
    name: "ardaca_trial_revival_nudge",
    category: "MARKETING",
    headerType: "TEXT",
    headerText: "Extend your project trial access",
    bodyText: "Hi {{1}},\n\nWe noticed your testing workspace inside Ardaca hasn't recorded any activity for the past 7 days. We know site dynamics move fast.\n\nTo preserve our database security and keep local server container allocations optimal for our active users, we are scheduled to archive your testing registries in 48 hours.\n\nWould you like our seasoned commercial Estimators (FRICS) to format and import your master spreadsheet BOQ into your container for you? We are happy to handle the heavy lifting for free.\n\nClick below to access or request an extension.",
    footerText: "Don't lose your customized on-shore sandbox nodes",
    buttons: ["⚙️ Reactivate SandBox", "📅 Book Onboarding Assist"]
  },
  {
    id: "whatsapp-demo-reminder-1hr",
    name: "ardaca_briefing_one_hour_reminder",
    category: "UTILITY",
    headerType: "TEXT",
    headerText: "Briefing starts in 60 minutes",
    bodyText: "Yallah {{1}}, we are starting shortly.\n\nYour customized Ardaca system walkthrough and regional data-sovereignty audit kicks off in exactly one hour.\n\n👤 Specialist: Tariq Al-Mansoor (MD)\n📍 Direct Meeting Link: {{2}}\n📝 What to bring: Your current subcontractor payment spreadsheets or billing disputes.\n\nWe will demonstrate how local builders are streamlining progress calculations and accelerating escrow releases. Grab an Arabic coffee and see you in 60 mins.",
    footerText: "Sovereign Construction Controls for the Middle East",
    buttons: ["💻 Join Zoom Meeting Room"]
  },
  {
    id: "whatsapp-payment-reminder",
    name: "ardaca_invoice_due_alert",
    category: "UTILITY",
    headerType: "TEXT",
    headerText: "Ardaca BuildFlow Invoice Due",
    bodyText: "Hello {{1}},\n\nYour enterprise subscription invoice for your local active project nodes is currently due.\n\n* Invoice Ref: {{2}}\n* Total Due: {{3}} {{4}}\n* Due Date: {{5}}\n\nTo ensure continuous, uninterrupted access to your on-shore data hosting, RFI logs, and subcontractor payment tracking portals, please review and authenticate this payment through your client billing center.",
    footerText: "Secured billing registry gateway",
    buttons: ["💳 View & Settle Invoice", "💬 Chat with Accounts Support"]
  },
  {
    id: "whatsapp-kyc-reminder",
    name: "ardaca_compliance_kyc_reminder",
    category: "UTILITY",
    headerType: "TEXT",
    headerText: "ACTION REQUIRED: KYC Verification",
    bodyText: "Hi {{1}},\n\nThis is a compliance reminder for your business profile registration at Ardaca.\n\nTo unlock your secure developer registries and deploy live subcontractor bidding campaigns, we require verification of your trade license credentials. \n\n* Required File: Current commercial registry certificate / trade license (KSA/UAE)\n* Upload location: {{2}}\n\nOur local technical legal team will verify and approve your workspace credentials within 1 business hour of submission.",
    footerText: "Ensuring 100% compliant developer registries inside Gulf networks",
    buttons: ["📑 Upload Trade License", "🔒 Safe Data Terms"]
  },
  {
    id: "whatsapp-new-tender-notif",
    name: "ardaca_new_tender_opportunity",
    category: "UTILITY",
    headerType: "TEXT",
    headerText: "📦 New Tender Opportunity",
    bodyText: "سلام عليكم {{1}},\n\nA new commercial tender package has been published by {{2}} on the Ardaca Developer Network and is now open for bidding.\n\n* Project: {{3}}\n* Package: {{4}}\n* Submission Deadline: {{5}}\n\nThis tender is restricted to pre-screened sub-tier firms. Click below to securely access the design blueprints, download cost schedules, and submit your sealed virtual bid rates.",
    footerText: "Ardaca Bidding Network • Fully cryptographically isolated rates",
    buttons: ["📥 Download Blueprints & BOQ", "💻 Submit Sealed Bids"],
    arabicVersion: {
      headerText: "📦 فرصة مناقصة جديدة",
      bodyText: "السلام عليكم يا سيدي شركة {{1}} الموقرة،\n\nتم طرح حزمة مناقصة كهروميكانيكية وإنشائية جديدة من قبل شركة المطور العقاري {{2}} عبر شبكة أردكا للمقاولين وهي الآن جاهزة للتسعير العادل.\n\n* مسمى المشروع: {{3}}\n* الحزمة المطلوبة: {{4}}\n* آخر موعد لتسليم العروض: {{5}}\n\nهذه المناقصة مخصصة حصرياً للمقاولين المؤهلين مسبقاً. يرجى الضغط أدناه للوصول للمخططات والرسومات وتحميل كراسة الشروط وتقديم عرض سعركم الآمن المرمز.",
      footerText: "شبكة مناقصات أردكا الخليج - عزل تام وشامل للأسعار لمنع التسريب",
      buttons: ["📥 تحميل كراسة الشروط والمخططات", "💻 تسجيل تقديم عرض السعر"]
    }
  },
  {
    id: "whatsapp-quotation-awarded",
    name: "ardaca_quotation_award_notification",
    category: "UTILITY",
    headerType: "TEXT",
    headerText: "🎉 CONGRATULATIONS: Quote Awarded",
    bodyText: "Hi {{1}},\n\nAl-Hamdulillah! Your bid package for project {{2}} has been officially reviewed and awarded to your company by the lead main contractor.\n\n* Awarded Package: {{3}}\n* Final Contract Value: {{4}}\n* Next Milestone: Kick-off compliance briefing\n\nThe formal contract document checksheets and bilingual digital execution seals have been loaded to your Ardaca subcontractor portal. Please log in to complete signing.",
    footerText: "Ardaca BuildFlow GCC • Building the future, together",
    buttons: ["📜 Review & Sign Contract", "📞 Call Project Director"]
  },
  {
    id: "whatsapp-monthly-digest",
    name: "ardaca_monthly_site_recap",
    category: "MARKETING",
    headerType: "IMAGE",
    bodyText: "Hello {{1}} ({{2}}),\n\nHere is your monthly project controls performance recap for {{3}}:\n\n* Average payment approval cycle: {{4}} days (down from {{5}}!)\n* Active RFIs resolved: {{6}}\n* Unscheduled site variations secured: {{7}} cases saved\n* Current active workers onboarded under UAE PDPL: {{8}}\n\nBy routing site coordination and quantity surveys through Ardaca BuildFlow's localized cloud, your team is saving valuable hours of administrative and billing validation delays every cycle. See your full analytics stack inside the link below.",
    footerText: "Systematically protecting your margins, month over month",
    buttons: ["📊 View Analytics Dashboard", "📈 Schedule Strategy Review"]
  }
];
