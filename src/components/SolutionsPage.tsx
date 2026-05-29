import React, { useState } from 'react';
import { 
  Building, 
  PenTool, 
  Users, 
  Layers, 
  Truck, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Activity, 
  Globe, 
  Search, 
  Info,
  ShieldAlert,
  HelpCircle,
  TrendingUp
} from 'lucide-react';

interface SolutionsPageProps {
  lang?: 'en' | 'ar';
  onNavigate: (tab: string) => void;
  onSelectRole: (role: 'Client' | 'Consultant' | 'Contractor' | 'Subcontractor' | 'Supplier') => void;
}

type SolutionId = 'main-contractors' | 'consultants' | 'clients' | 'subcontractors' | 'suppliers';

export default function SolutionsPage({ lang = 'en', onNavigate, onSelectRole }: SolutionsPageProps) {
  const [activeSolution, setActiveSolution] = useState<SolutionId>('main-contractors');
  const isRtl = lang === 'ar';

  const solutionTabs = [
    { id: 'main-contractors' as const, labelEn: 'Main Contractors', labelAr: 'المقاولون الرئيسيون', icon: Building, role: 'Contractor' as const },
    { id: 'consultants' as const, labelEn: 'Consultants & PMCs', labelAr: 'الاستشاريون وإدارة المشاريع', icon: PenTool, role: 'Consultant' as const },
    { id: 'clients' as const, labelEn: 'Clients & Developers', labelAr: 'المطورون وملاك المشاريع', icon: Users, role: 'Client' as const },
    { id: 'subcontractors' as const, labelEn: 'Specialist Subcontractors', labelAr: 'مقاولو الباطن', icon: Layers, role: 'Subcontractor' as const },
    { id: 'suppliers' as const, labelEn: 'Suppliers & Logistics', labelAr: 'الموردون واللوجستيات', icon: Truck, role: 'Supplier' as const },
  ];

  // Full, high-fidelity GCC-specific content dataset
  const solutionsData = {
    'main-contractors': {
      seoTitle: 'Main Contractor Procurement & Bid Management GCC | BuildFlow',
      seoTitleAr: 'إدارة مناقصات المقاول الرئيسي وتوريد المخططات بالخليج | BuildFlow',
      seoMeta: 'Optimize Tier-1 GCC contractor workflows. Streamline subcontractor bidding, FIDIC Red Book conformity, Aramco vendor alignments, and BOQ-linked pay claims.',
      seoMetaAr: 'تحسين قنوات توريد المواد لمقاولي الفئة الأولى. تيسير تقديم عطاءات مقاولي الباطن، ومطابقة نموذج FIDIC وإدارته.',
      ogTitle: 'BuildFlow GCC for Main Contractors: Unified Subcontractor & BOQ Matrix',
      ogTitleAr: 'BuildFlow الخليج للمقاولين الرئيسيين: منظومة عزل العطاءات وجداول الكميات',
      ogDescription: 'Accelerate site handovers and secure supplier bids with sealed, audited messaging logs conforming to Saudi and UAE municipal standards.',
      ogDescriptionAr: 'تسريع تسليم مواقع البناء، وحيازة عطاءات الموردين عبر سجلات مراسلات مشفرة متوافقة مع لوائح المدن السعودية والإماراتية.',
      heroHeadline: 'Sovereign Project Delivery for GCC Tier-1 General Contractors',
      heroHeadlineAr: 'التسليم السيادي للمشاريع الكبرى لمقاولي العموم من الفئة الأولى بالخليج',
      heroSubhead: 'Coordinate complex subcontractor chains, enforce FIDIC-compliant variation tracking, and align multi-billion Riyal BOQs under local municipal standards.',
      heroSubheadAr: 'تنسيق قنوات مقاولي الباطن المعقدة، فرض تتبّع التغييرات المتوافقة مع عقود فيديك (FIDIC)، ومطابقة جداول الكميات لوزارات الإسكان والبلديات.',
      painPointsTitle: 'Critical Giga-Project Friction Points Addressed',
      painPointsTitleAr: 'معالجة الفجوات الحرجة في تنفيذ المشاريع العملاقة',
      painPoints: [
        {
          title: 'Back-to-Back Cash Flow Constraints',
          titleAr: 'عقبات التدفق المالي المتتابع (Back-to-Back)',
          text: 'Securing subcontractor commitment under tough payment delays while managing liquidated damages to protect core project margins.',
          textAr: 'ضمان التزام مقاولي الباطن بمواعيد التنفيذ رغم فجوات سداد الدفعات، مع حماية هوامش أرباح المقاول الأساسية وتفادي غرامات التأخير.'
        },
        {
          title: 'Opaque Subcontractor Bid Collusion',
          titleAr: 'تسريب الأسعار وتواطؤ عطاءات الباطن',
          text: 'Preventing pricing leaks and parallel consultations during confidential tender rounds for major MEP and civil works.',
          textAr: 'الحد تماماً من تسريبات الأسعار أو الاتفاقات الجانبية والاتصالات الموازية أثناء جولات طرح عروض أسعار الأعمال الميكانيكية والهندسية.'
        },
        {
          title: 'Fragmented RFI Logging & Delay Claims',
          titleAr: 'تعثر طلبات المخططات (RFI) ومطالبات الوقت',
          text: 'Late responses to site queries lead to expensive Extension of Time (EOT) claims without clear, signed audit trails.',
          textAr: 'تأخر الرد على استفسارات الموقع من الاستشاريين، مما يؤدي لمطالبات تمديد الوقت الباهظة غياباً لأختام الإثبات القانونية.'
        }
      ],
      featuresTitle: 'Role-Specific Structural Features',
      featuresTitleAr: 'مزايا هيكلية مخصصة لإدارة عقود المقاول الرئيسي',
      features: [
        {
          title: 'BOQ-Linked Digital Tendering',
          titleAr: 'تفكيك وتسعير جداول الكميات التلقائي',
          text: 'Decompose composite master Bills of Quantities into sealed subcontractor packages with automated aggregated comparison.',
          textAr: 'تحليل جداول الكميات الرئيسية العملاقة وتوزيع فصولها على حزم مستقلة لمقاولي الباطن مع مقارنة فورية مغلقة للأسعار.'
        },
        {
          title: 'FIDIC-Aligned Variation Engine',
          titleAr: 'نظام إدارة التغييرات ومطابقات فيديك',
          text: 'Log site variation instructions chronologically with unalterable cryptographic validation to guarantee legal claim protection.',
          textAr: 'توثيق الأوامر التغييرية في الموقع زمنياً بختم تشفير غير قابل للتعديل لضمان الحماية القانونية عند المطالبات المالية.'
        },
        {
          title: 'Municipal & Vendor Portal Bridge',
          titleAr: 'الربط المباشر مع الوزارات والشركات السيادية',
          text: 'Verify subcontractor prequalifications, Aramco vendor registrations, or government compliance records directly.',
          textAr: 'التحقق المباشر واللحظي من تأهيل مقاولي الباطن، وسجل عروض أرامكو أو رخص بلدية دبي والرياض والدوحة.'
        },
        {
          title: 'QS-Aided Subcontractor Claims',
          titleAr: 'اعتمادات المطالبات المالية بمسح حقيقي',
          text: 'Approve digital progress claims backed by geotagged site photography and Quantity Surveyor (QS) digital attestations.',
          textAr: 'اعتماد مطالبات الإنجاز الشهرية مدعومة بتقارير المساحين المعتمدين وصور جغرافية لحظية من موقع المشروع.'
        }
      ],
      workflowTitle: 'The Execution Path for Contractors',
      workflowTitleAr: 'آلية العمل التنفيذية للمقاولين',
      workflow: [
        {
          step: '1',
          title: 'Package Extraction',
          titleAr: 'تفكيك المخطط',
          desc: 'Upload composite master BOQ sheets; BuildFlow automatically parses segments into sealed packages.',
          descAr: 'تحميل كراسة جداول الكميات الرئيسية، حيث يقوم النظام بتحليلها وتقسيمها إلى حزم عروض مغلقة.'
        },
        {
          step: '2',
          title: 'Sealed Bid Intake',
          titleAr: 'استقطاب العطاءات المغلقة',
          desc: 'Invite prequalified sub-tier contractors into separate encrypted chambers to input unit rates securely.',
          descAr: 'دعوة شركات الباطن المؤهلة لغرف تسعير مستقلة ومشفرة لإدخال فئات الأسعار دون أي فرصة لتسريب البيانات.'
        },
        {
          step: '3',
          title: 'Unsealing & Analysis',
          titleAr: 'فض المغاريف والتحليل الدقيق',
          desc: 'Simultaneously unseal bids on the virtual tender due date, producing detailed, side-by-side margin charts.',
          descAr: 'فض المظاريف آلياً في الوقت المحدد للمناقصة لإنتاج مقارنة خطية شاملة لهوامش الأرباح والأسعار المقترحة.'
        },
        {
          step: '4',
          title: 'Audit Handback',
          titleAr: 'رفع التوصية والاعتماد',
          desc: 'Export municipality-compliant bid comparison books directly to the consultant and client for final signature.',
          descAr: 'تصدير وثائق مقارنة العطاءات المتوافقة مع البلديات مباشرة إلى الاستشاري والمالك مع سجل التوقيعات القانوني.'
        }
      ],
      ctaText: 'Deploy Contractor Sandbox Node',
      ctaTextAr: 'تفعيل لوحة المقاول التجريبية'
    },
    'consultants': {
      seoTitle: 'Engineering PMC & Design Submittal Management GCC | BuildFlow',
      seoTitleAr: 'إدارة الموافقات والاستشارات الهندسية بالخليج | BuildFlow',
      seoMeta: 'Empower Lead Consultants and PMCs. Automate RFI review cycles, shop drawing sign-offs, and Civil Defense approvals with tamper-proof logs.',
      seoMetaAr: 'تمكين الاستشاريين ومدراء المشاريع. أتمتة دورات تدقيق المخططات، والطلبات الإنشائية (RFI)، وموافقات الدفاع المدني.',
      ogTitle: 'BuildFlow for PMCs & Engineering Consultancies: Seamless Auditing',
      ogTitleAr: 'منظومة الاستشاريين وإدارة المشاريع: تدقيق هندسي بلا ثغرات',
      ogDescription: 'Reduce design approval delays from weeks to hours under strict regional safety codes and ministerial checklists.',
      ogDescriptionAr: 'تقليص فترات اعتماد مخططات التصاميم من أسابيع إلى ساعات متوافقة تماماً مع شروط البلديات والدفاع المدني.',
      heroHeadline: 'Rigorous Design Reviews & Audit-Ready Site Supervision',
      heroHeadlineAr: 'تدقيق فني صارم للمخططات وإشراف هندسي آمن معتمد',
      heroSubhead: 'Empower PMCs, architects, and structural supervision teams with rapid, clear RFI routing, digital drawings markup, and compliant authority checksheets.',
      heroSubheadAr: 'ادعم مكاتب إدارة المشاريع (PMCs)، والمهندسين المشرفين بمسارات توجيه ذكية لطلبات الرأي الفني، وتوقيعات المخططات التنفيذية.',
      painPointsTitle: 'Engineering Coordination Risks Resolved',
      painPointsTitleAr: 'معالجة مخاطر التنسيق والتأخيرات الهندسية',
      painPoints: [
        {
          title: 'RFI Review Congestions',
          titleAr: 'تكدس طلبات الاستيضاح الهندسية (RFI)',
          text: 'Endless back-and-forth emails between global headquarter design offices and execution engineers under blazing site conditions.',
          textAr: 'المراسلات البريدية غير المنتهية بين مكاتب التصميم الخارجية ومهندسي الإشراف الميدانيين لتفسير التفاصيل الهندسية.'
        },
        {
          title: 'Unverifiable Design Sign-offs',
          titleAr: 'توقيعات واعتمادات هندسية غير موثقة',
          text: 'Lack of legal signature attestation on drawing revisions leads to liability finger-pointing when site structural errors occur.',
          textAr: 'غياب التوثيق القانوني الآمن على الملاحظات الإنشائية للمخططات، مما يربك المسؤولية القانونية عند حدوث خطأ تنفيذي.'
        },
        {
          title: 'Civil Defense & Municipal Audit Gap',
          titleAr: 'عقبات تدقيق الدفاع المدني والبلديات',
          text: 'Scrambling to assemble historically approved structural calculation packages and fire safety approvals for local government audits.',
          textAr: 'صعوبة تجميع نسخ المخططات السابقة وحسابات الأحمال والوقاية من الحريق لتقديمها للمفتشين والجهات الحكومية.'
        }
      ],
      featuresTitle: 'Supervision & Design Governance Modules',
      featuresTitleAr: 'وحدات إدارة التصاميم والرقابة الهندسية',
      features: [
        {
          title: 'Automated Drawing Dispatch',
          titleAr: 'توجيه المخططات التلقائي والذكي',
          text: 'Route shop-drawings immediately to the specific specialist MEP, structural, or facade engineer depending on drawing codes.',
          textAr: 'تحويل المخططات التنفيذية لحظياً إلى مهندس MEP أو المهندس الإنشائي المختص بناءً على تصنيف المخطط.'
        },
        {
          title: 'Live Digital PDF Drawing Redlines',
          titleAr: 'التعديل والتعليق الرقمي الفوري للرسومات',
          text: 'Review, markup, stamp with approval status, and sign blueprints with vector tools natively in the browser workspace.',
          textAr: 'مراجعة المخططات وإضافة التعليقات الفنية والأختام الرسمية المعتمدة رقمياً من خلال متصفح الويب مباشرة.'
        },
        {
          title: 'UAE PASS Authorizer Integration',
          titleAr: 'المصادقة الإدارية عبر الهوية الرقمية',
          text: 'Approve crucial foundation or structural milestones with identity-backed logins, keeping site logs audit-compliant.',
          textAr: 'التصديق المعتمد على صب الهيكل والأساسات باستخدام هوية المهندس المعتمدة وطبقاً لمتطلبات البلدية.'
        },
        {
          title: 'Climatic Site Inspector Logs',
          titleAr: 'سجلات مفتشي الموقع للظروف الجوية',
          text: 'Execute and document concrete pour inspections aligning precisely with regional summer working hours and heat limits.',
          textAr: 'مراقبة صب وتبريد الخرسانة وساعات العمل الصيفية المسموحة لضمان سلامة التنفيذ والامتثال العمالي.'
        }
      ],
      workflowTitle: 'Design Review & Certification Steps',
      workflowTitleAr: 'خطوات المراجعة والاعتماد الفني',
      workflow: [
        {
          step: '1',
          title: 'Design Rollout',
          titleAr: 'توزيع التصاميم',
          desc: 'Establish design roles, uploading master layouts and defining specific technical approval matrices.',
          descAr: 'تحديد الأدوار الهندسية، تحميل التصاميم الرئيسية ورسم مصفوفة الصلاحيات الهندسية المعتمدة.'
        },
        {
          step: '2',
          title: 'Site RFI Trigger',
          titleAr: 'إرسال طلب الاستفسار للموقع',
          desc: 'Supervision logs automatically receive contractor RFIs via mobile interfaces, routing to designated specialists.',
          descAr: 'يتلقى الاستشاري الاستفسارات فوراً من الموقع عبر واجهة المنصة المحمولة، لتتحول فوراً للجهة المختصة.'
        },
        {
          step: '3',
          title: 'Direct Redlining',
          titleAr: 'المراجعة وإضافة الملاحظات',
          desc: 'Engineers redline changes directly online, avoiding paper printing and speeding up approval workflows.',
          descAr: 'التعليق والمراجعة الفورية للمخططات وتثبيت التوضيحات دون تداول الأوراق الكبيرة والمهدرة للوقت.'
        },
        {
          step: '4',
          title: 'Cryptographic Lock',
          titleAr: 'الإغلاق والتوقيع المشفر',
          desc: 'Issue digital certificate with full system-logged proof of layout modifications ready for government submittals.',
          descAr: 'تصدير وثيقة مراجعة المخطط موقعة رقمياً ومتضمنة مسارات التدقيق تمهيداً لرفعها لبلديات دبي أو الرياض.'
        }
      ],
      ctaText: 'Deploy PMC Advisor Sandbox',
      ctaTextAr: 'تفعيل حساب الاستشاري التجريبي'
    },
    'clients': {
      seoTitle: 'Executive Developer & Asset Owner Portfolio Control GCC | BuildFlow',
      seoTitleAr: 'التحكم الإستراتيجي لمطوري العقارات وملاك المشاريع | BuildFlow',
      seoMeta: 'Sovereign portfolio oversight for GCC developers (Nakheel, Aldar, Roshn). Manage escrow compliance, budget leakages, and VIP status feeds.',
      seoMetaAr: 'حماية أموال ومشاريع المطورين المعتمدين والمؤسسات مثل نخيل والدار وروشن. مراقبة الحسابات والامتثال لضمان السيطرة المباشرة على المقاولين.',
      ogTitle: 'BuildFlow for GCC Project Owners: Independent Capital Control',
      ogTitleAr: 'BuildFlow للشركات العقارية والملاك بالخليج: السيطرة المالية الكاملة',
      ogDescription: 'Monitor capital draws, assess contractor compliance in real-time, and ensure robust project governance from a decoupled command panel.',
      ogDescriptionAr: 'تتبع السحب المالي، وتدقيق توافق المقاولين الفوري وحماية أملاك الشركة عبر لوحة تحكم إشرافية مستقلة.',
      heroHeadline: 'Absolute Transparency & Trust for Prime Landmark Developers',
      heroHeadlineAr: 'الشفافية المطلقة ومقاييس الثقة لكبار مطوري العقارات بالخليج',
      heroSubhead: 'Verify capital disbursement, monitor escrow health in compliance with DLD and Wafi regulations, and govern mega-projects from a VIP dashboard.',
      heroSubheadAr: 'دقق في دفعات الصرف المالي لمشروعاتك، وراقب سلامة حسابات المطورين المتوافقة مع تشريعات أراضي دبي ولائحة تملك الوحدات بالرياض.',
      painPointsTitle: 'Financial & Reputational Gaps Addressed',
      painPointsTitleAr: 'حماية المطورين من مخاطر الخسائر وتأخير تسليم الأصول',
      painPoints: [
        {
          title: 'Opaque Contractor Claims',
          titleAr: 'المطالبات التغييرية الغامضة من المقاولين',
          text: 'Unjustified contractor variations and claims that deplete contingency allowances and threat development yields.',
          textAr: 'استنزاف ميزانية الاحتياطي للمشروع بسبب الأوامر التغييرية والمطالبات الهندسية المتكررة غير المبررة بالمستندات.'
        },
        {
          title: 'Escrow Compliance Vulnerability',
          titleAr: 'تأخر اعتمادات دفعات حساب الضمان',
          text: 'Delays in verifying and processing site work milestones, slowing down capital drawdowns and causing site labor friction.',
          textAr: 'تعثر صرف السيولة من حسابات الضمان نتيجة بطء التحقق من نسب إنجاز المشروع وتطابقها مع اللوائح العقارية.'
        },
        {
          title: 'Contractor-Manipulated S-Curve Charts',
          titleAr: 'التقارير الإنشائية غير الدقيقة والمنحدرة',
          text: 'Fictional progress updates obfuscate hidden construction delays, exposing developers to severe handover penalties and brand damage.',
          textAr: 'تقارير الإنجاز الورقية المضللة تخفي التأخير الفعلي للمشروع، مما يعرض المطور لغرامات التأخير الحكومية والضرر التجاري.'
        }
      ],
      featuresTitle: 'Unified Investor Control Features',
      featuresTitleAr: 'المزايا الإستراتيجية للملاك والشركات العقارية',
      features: [
        {
          title: 'Escrow-Aligned Financial Control',
          titleAr: 'اعتماد سحوبات التمويل لحساب الضمان',
          text: 'Automate milestone tracking, ensuring payouts to Tier-1 contractors align precisely with actual approved physical progress.',
          textAr: 'ربط سحب الدفعات من حسابات الضمان ومصارف التمويل بنسب الإنجاز الفعلي المدققة على أرض الواقع آلياً.'
        },
        {
          title: 'Live Portfolio Engagement Score',
          titleAr: 'مؤشر الامتثال الفوري للمشروع',
          text: 'Real-time indicators showing active RFIs, contract document backlogs, and milestone compliance percentages.',
          textAr: 'مؤشرات فورية لقياس صحة المشروع الإجمالية، وسرعة ردود الاستشاري والمقاول، ونسب وثائق العمل العالقة.'
        },
        {
          title: 'Direct VIP Portfolio Dashboard',
          titleAr: 'لوحة التحكم الإستراتيجية الموحدة للرؤساء',
          text: 'Independent visibility over mega-projects across regions, keeping developer executives completely informed without manual filters.',
          textAr: 'لوحة تحكم ذكية تلخص المحفظة العقارية والتقدم العام في بلدان مختلفة بشكل مباشر وآمن دون فلترة من طاقم الموقع.'
        },
        {
          title: 'Ministerial Licensure Verification',
          titleAr: 'التحقق الآمن من رخص المقاولين بسجل الشركات',
          text: 'Instantly confirm subcontractor registration dates and active local trade licenses on-site through connected government registers.',
          textAr: 'التحقق التلقائي من التراخيص المهنية للمقاولين المنضمين للموقع لضمان الامتثال التام للمتطلبات الإدارية.'
        }
      ],
      workflowTitle: 'Executive Capital Stewardship Workflow',
      workflowTitleAr: 'دورة الرقابة المالية الإستراتيجية',
      workflow: [
        {
          step: '1',
          title: 'Global Onboarding',
          titleAr: 'تأسيس المشروع',
          desc: 'Establish master targets, select accredited consultant PMCs, and connect escrow bank structures securely.',
          descAr: 'تحديد المعالم الكبرى للمشروع، ربط مصارف التمويل المعتمدة وتعيين مديري المشاريع والمهندسين الاستشاريين.'
        },
        {
          step: '2',
          title: 'Compliance Setting',
          titleAr: 'تثبيت شروط الامتثال',
          desc: 'Instruct system on milestones linked to Dubai Land Department or Saudi Wafi inspection rules for disbursement validation.',
          descAr: 'تحديد نقاط الامتثال المرتبطة بنسب الإنجاز المقررة للجهات العقارية لتلقي موافقة الإفراج المالي التلقائي.'
        },
        {
          step: '3',
          title: 'Independent Audits',
          titleAr: 'التدقيق المستقل المستمر',
          desc: 'Real-time tracking comparison on contractor claims verified by digital quantity surveys and photos.',
          descAr: 'تتبع شهري مستقل يستعرض كافة المطالبات، ويقارنها مع تسليمات الكميات المستقلة وصور الأقمار الصناعية للموقع.'
        },
        {
          step: '4',
          title: 'Executive Extraction',
          titleAr: 'التقرير التنفيذي الفوري',
          desc: 'Direct export of comprehensive investor audit reports ready for direct presentation to ministry levels and company board.',
          descAr: 'تصدير التقارير الموثقة فوراً وبلوحة قياس مبسطة جاهزة للتقديم للوزارات ومجالس الإدارة السيادية بضغطة زر.'
        }
      ],
      ctaText: 'Initiate Developer Node Setup',
      ctaTextAr: 'تهيئة حساب المالك العقاري'
    },
    'subcontractors': {
      seoTitle: 'Specialist Subcontractor Bidding & Claims GCC | BuildFlow',
      seoTitleAr: 'مطالبات وعطاءات مقاول الباطن بالخليج | BuildFlow',
      seoMeta: 'Protect subcontractor cash flow. Access Tier-1 GCC tender pipelines, submit digital progress claims, and track retention releases.',
      seoMetaAr: 'حماية السيولة النقدية لمقاولي الباطن. الوصول الفوري لمناقصات المطورين الكبار، وتقديم مطالبات الدفع وتتبع تفريغ الضمانات المتبقية.',
      ogTitle: 'BuildFlow for GCC Subcontractors: Secure Progress Claims',
      ogTitleAr: 'منصة مقاولي الباطن بالخليج: حسم وفواتير نسب الإنجاز بأمان',
      ogDescription: 'Leverage undeniable georeferenced records, eliminate payment certification excuses, and reclaim financial balance on major commercial works.',
      ogDescriptionAr: 'استخدم سجلات العمل والمخططات الموقعة هندسياً للتصدي لعراقيل سداد المستخلصات من المقاول الرئيسي.',
      heroHeadline: 'Unbiased Tender Handovers & Secured Subcontract Claim Lines',
      heroHeadlineAr: 'فرص مناقصات عادلة ومستخلصات شهرية موثقة وآمنة لمقاولي الباطن',
      heroSubhead: 'Access premier, prequalified bids, submit structured progress claims with unalterable proofs, and secure your retention timelines.',
      heroSubheadAr: 'احصل على دعوات تسعير عادلة ومحمية من تسريب كبار المقاولين، وقدم مطالبات الدفع الشهرية بأدلة هندسية غير قابلة للشك والتأجيل.',
      painPointsTitle: 'Payment & Scope Risks Safely Locked',
      painPointsTitleAr: 'حماية مستخلصات الباطن والحد من الخسائر',
      painPoints: [
        {
          title: 'Back-to-Back Excuses',
          titleAr: 'حجج السداد المشروط (Back-to-Back)',
          text: 'Unreasonable payment blocking by main contractors stating delays in client disbursement, starving sub-tiers of operational cash.',
          textAr: 'تأخير صرف مستخلصات مقاولي الباطن بحجة عدم استلام الدفعات من المالك الرئيسي مما يضر بالسيولة اللازمة للعمالة والمواد.'
        },
        {
          title: 'Negotiated Specifications Shifting',
          titleAr: 'تغيير مواصفات المواد قسرياً',
          text: 'Verbal directives on site shift high-cost scopes without written variation agreements, creating massive loss-making execution loops.',
          textAr: 'الأوامر الشفهية في موقع البناء التي تجبر المقاول على تنفيذ بنود إضافية دون تعديل مالي رسمي مسجل بكراسة الشروط.'
        },
        {
          title: 'Unreleased Retention Guarantees',
          titleAr: 'احتجاز مبالغ الاستقطاعات والضمان البنكي',
          text: 'Prolonged retention holding by Tier-1 contractors, ignoring project handovers and tying up subcontractor capitals for years.',
          textAr: 'تعمد المقاول الرئيسي حجز أموال الاستقطاع النهائي والضمان البنكي للمشروع لسنوات طويلة بعد إنجاز وتسليم الأعمال.'
        }
      ],
      featuresTitle: 'Protected Claim & Payment Tools',
      featuresTitleAr: 'أدوات حماية وتسريع مستخلصات الباطن',
      features: [
        {
          title: 'Signed QS Progress Claims',
          titleAr: 'شهادات الإنجاز المدعومة بالدلائل والمساحة',
          text: 'Create claim packages combining georeferenced work logs, surveyor verify certificates, and secure structural records.',
          textAr: 'إعداد ملفات المطالبات الشهرية معززة بصور إثبات موقعية ومساحة محددة تمنع تشكيك طاقم المقاول الرئيسي.'
        },
        {
          title: 'Scope-Lock Negotiator Dossiers',
          titleAr: 'حماية كراسة الاتفاق وبنود التعاقد',
          text: 'Ensure all negotiated target figures and technical conditions are immutably signed, protecting you against speculative design alterations.',
          textAr: 'تجميد وحظر تعديل البنود المتفاوض عليها وتثبيتها بتشفير تعاقدي متوافق مع لوائح التحكيم الإنشائية والبلديات.'
        },
        {
          title: 'Retention Release Alert Timelines',
          titleAr: 'منبه استرداد دفعات الاستقطاع النهائي',
          text: 'Automated notification loops track facility handovers, alerting general contractors of statutory deposit release dates.',
          textAr: 'مؤقت ذكي يتتبع تاريخ استلام المشروع الكلي ويخطر المقاول الرئيسي قانونياً بوجوب صرف الضمانات المحتجزة.'
        },
        {
          title: 'One-Click Prequalifications Hub',
          titleAr: 'ملف الاعتمادات المهنية الموحد في ثوانٍ',
          text: 'Deploy updated trading files, tax certifications, and active corporate records once, instantly satisfying Tier-1 criteria.',
          textAr: 'مشاركة سجل التأهيل والشهادات الضريبية ورخص التأسيس بنقرة واحدة لتوريدها لكبرى لجان المناقصات.'
        }
      ],
      workflowTitle: 'Subcontract Claim Pipeline Steps',
      workflowTitleAr: 'مسار تأكيد وصرف المستخلصات',
      workflow: [
        {
          step: '1',
          title: 'Corporate Onboarding',
          titleAr: 'تسجيل وتجهيز الملف',
          desc: 'Register trade licenses, company data once to automatically populate bidding invitation tables with Tier-1 general builders.',
          descAr: 'إدخال السجلات التجارية والترخيص المهني للتواجد الفوري في كشوف الباحثين عن مقاولين لدى المطورين الرئيسيين.'
        },
        {
          step: '2',
          title: 'Sealed Quote Submission',
          titleAr: 'التسعير المغلق الآمن',
          desc: 'Bidding chambers securely receive your scope rates, keeping figures invisible to parallel subcontractor candidates.',
          descAr: 'تقديم عروض الأسعار خطياً في غرف مغلقة مخصصة تحميك من حرق وتعديل الأسعار والمنافسة غير العادلة للبيانات.'
        },
        {
          step: '3',
          title: 'Certified Site Claims',
          titleAr: 'تثبيت مستندات الإنجاز بالموقع',
          desc: 'Log progress directly with photo stamps, converting site records to unalterable QS billing requests.',
          descAr: 'رفع الدلائل الموقعية وصور العمل من خلال تطبيق الجوال ليقوم النظام بتحويلها لمطالبة دفع رسمية مدعمة.'
        },
        {
          step: '4',
          title: 'Sovereign Bank Tracking',
          titleAr: 'متابعة الصرف والتحصيل المالي',
          desc: 'Obtain real-time statuses on client escrow approvals, making main contractor payment delays completely visible.',
          descAr: 'الحصول على قنوات متابعة الدفعة من المالك الأساسي وحساب الضمان لتأكيد وفرة السيولة وضمان الصرف العادل.'
        }
      ],
      ctaText: 'Access Prequalified Tender Pipeline',
      ctaTextAr: 'تصفح كشف قطاع المناقصات المعتمد'
    },
    'suppliers': {
      seoTitle: 'Building Material Supplier RFQ & Logistics GCC | BuildFlow',
      seoTitleAr: 'توريد مواد البناء واللوجستيات والمناقصات بالخليج | BuildFlow',
      seoMeta: 'Streamline GCC supplier RFQs. Manage Jebel Ali customs clearances, Aramco vendor qualifications, and BOQ purchase orders.',
      seoMetaAr: 'تنظيم طلبات عروض أسعار الموردين لمواد البناء بالخليج. تتبع معاملات جمارك جبل علي وأرصفة التفريغ.',
      ogTitle: 'BuildFlow for Material Suppliers: High-Volume RFQ Streamlining',
      ogTitleAr: 'منظومة الموردين ومصانع مواد البناء بالخليج العربي',
      ogDescription: 'Leverage structured, error-free RFQ interfaces linked to composite BOQs, speeding up shipping validations and corporate procurement.',
      ogDescriptionAr: 'استفد من واجهة طلبات عروض أسعار مهيكلة وخالية من الأخطاء ومرتبطة بجداول الكميات لسرعة المعاملات.',
      heroHeadline: 'Seamless RFQ Channels for Materials & Logistical Leaders',
      heroHeadlineAr: 'قنوات عروض أسعار متكاملة لموردي مواد البناء واللوجستيات',
      heroSubhead: 'Satisfy Aramco and regional utility vendor list criteria, receive structured, error-free RFQs, and secure supply payments.',
      heroSubheadAr: 'امتثل لشروط أرامكو وسجل الموردين المعتمدين ببلديات وهيئات الكهرباء، واحصل على مستندات تسعير منظمة لطلبيات التوريد الكبرى.',
      painPointsTitle: 'Supply Chain Friction Safely Addressed',
      painPointsTitleAr: 'رفع عقبات سلسلة توريد المواد الإنشائية واللوجستيات',
      painPoints: [
        {
          title: 'Chaotic & Non-Standard RFQs',
          titleAr: 'الطلبات العشوائية الهيدروليكية للتسعير',
          text: 'Receiving cropped screenshots or vague WhatsApp tables asking for urgent material pricing with missing technical parameters.',
          textAr: 'استلام صور غير واضحة أو استفسارات شفهية تفتقر للمواصفات الفنية المعتمدة للمواد والحديد والخرسانة المطلوبة.'
        },
        {
          title: 'Customs Drawing Attestation Blocks',
          titleAr: 'تعطل شحنات الموانئ بسبب الوثائق الهندسية',
          text: 'Port entry delays at Jebel Ali, Khalifa Port, or King Abdullah Port due to uncertified product technical catalogs or calculation sheets.',
          textAr: 'تأخر الإفراج الجمركي بموانئ جبل علي أو الملك عبد الله نتيجة نقص شهادات فحص الجودة والمخططات المرفقة الرسمية.'
        },
        {
          title: 'Materials Payout Credit Risks',
          titleAr: 'مخاطر الائتمان وسداد قيمة الشحنات الموردة',
          text: 'Delivering mega steel or cable batches without clear client escrow visibility or guaranteed letters of credit (LC).',
          textAr: 'توريد طلبيات كابلات النحاس أو الحديد الضخمة دون التحقق المسبق من توفير السيولة من الجهات الممولة للمشروع.'
        }
      ],
      featuresTitle: 'Merchant RFQ & Material Dispatch Modules',
      featuresTitleAr: 'مزايا لوحة المورد المتقدم لإدارة التوريد',
      features: [
        {
          title: 'Structured Global Material Codes',
          titleAr: 'قوالب طلبات تسعير دولية منظمة',
          text: 'Inbound RFQs come matched to standardized structural categories and dimensional values, preventing technical error loops.',
          textAr: 'استقبال طلبات تسعير مصنفة طبقاً للأبعاد والوحدات المعتمدة دولياً، مما يلغي تكرار المكالمات لتفسير الشحنة.'
        },
        {
          title: 'Customs Attestation File Builder',
          titleAr: 'حزمة المستندات الجمركية السريعة للمنافذ',
          text: 'Collate ISO certificates and ASTM testing blueprints automatically, speeding up port inspect clearance times.',
          textAr: 'التثبيت التلقائي لشهادات الآيزو (ISO) وتقارير فحوصات الخرسانة والحديد لتجنب غرامات تأخر الأرضيات بالميناء.'
        },
        {
          title: 'Payment-Bridged Delivery Records',
          titleAr: 'ارتباط الشحنات بالدفع المالي المضمون',
          text: 'Integrate receiving docks with certified bank credit lines, releasing funds instantly upon secure site supervisor checkoffs.',
          textAr: 'ربط إيصال استلام الشحنة في الموقع باعتمادات السداد البنكي لصرف الدفعات فور توقيع المهندس المستلم.'
        },
        {
          title: 'Auto-Submittal PDF Generator',
          titleAr: 'مولد الملفات والمواصفات الفنية التلقائي',
          text: 'Package detailed technical data, warranties, and compliance credentials into sleek submittals for the supervisory PMC.',
          textAr: 'تحويل مواصفات المنتج وملفات الضمان لبوكليت تقني منظم لتقديمه فوراً لاعتماد استشاري العقد.'
        }
      ],
      workflowTitle: 'Seamless Logistical Operations Walkthrough',
      workflowTitleAr: 'مسار التوريد والتسليم واللوجستيات للمواد',
      workflow: [
        {
          step: '1',
          title: 'Catalog Rollout',
          titleAr: 'إدراج كشف كتالوج المواد',
          desc: 'Deploy structural pricing tables, and delivery lead times once across the regional verified builder matrix.',
          descAr: 'تحميل قائمة المواد والمنتجات الإنشائية المعتمدة والأسعار الافتراضية للوصول الفوري لشبكة المقاولين.'
        },
        {
          step: '2',
          title: 'Intake Filtration',
          titleAr: 'مراجعة طلبات التوريد الواردة',
          desc: 'System receives contractor pricing requests, already mapped to your specific code listings with no manual noise.',
          descAr: 'تلقي طلبات تسعير دقيقة وواضحة من مكاتب المشتريات متوافقة تماماً مع المنتجات المطروحة بالكتالوج.'
        },
        {
          step: '3',
          title: 'Attestation Package Send',
          titleAr: 'مشاركة باقة الاعتمادات الفنية',
          desc: 'Deliver complete technical submittal records digitally to the consultancy board, facilitating quick approval flags.',
          descAr: 'تصدير وثيقة الاعتماد الفني والضمانات للاستشاري من داخل النظام لضمان فحص فني سريع للمادة.'
        },
        {
          step: '4',
          title: 'Verified Cash Ingress',
          titleAr: 'التحصيل والتسليم الآمن',
          desc: 'Physical material handovers release payment from escrow automatically under validated digital delivery tickets.',
          descAr: 'تأكيد التسليم بموقع البناء يمرر أمر الصرف والاعتماد المالي فورياً بموجب تقرير استلام الشحنة الرقمي.'
        }
      ],
      ctaText: 'Connect Supplier Catalog Node',
      ctaTextAr: 'تفعيل لوحة المورد وتصنيف المواد'
    }
  };

  const activeData = solutionsData[activeSolution];

  return (
    <div className="w-full bg-[#050D1A] text-zinc-100 min-h-screen">
      
      {/* Immersive Path Simulator & Router Header */}
      <div className="bg-[#0B1F3A]/45 border-b border-zinc-900 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Simulated Browser Bar Address Frame */}
          <div className="w-full md:w-auto flex items-center gap-2 bg-[#050D1A] border border-zinc-805/10 border-zinc-800 px-3.5 py-1.5 rounded-md text-xs font-mono text-zinc-400 select-all grow max-w-xl">
            <Globe size={11} className="text-[#C8973A] animate-pulse" />
            <span className="text-[#C8973A] font-bold">https://</span>
            <span className="text-zinc-300">ardaca.com</span>
            <span className="text-zinc-500">/solutions/</span>
            <span className="text-[#C8973A] font-bold">{activeSolution}</span>
          </div>

          {/* Interactive GCC Status Marker */}
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#C8973A] tracking-wider uppercase bg-[#C8973A]/10 border border-[#C8973A]/20 px-3 py-1 rounded-full font-bold select-none shrink-0">
            <Activity size={10} className="animate-pulse" />
            <span>{isRtl ? 'بوابة الامتثال وإصدارات FIDIC' : 'VERIFIED TENDER SANDBOX ACTIVE'}</span>
          </div>

        </div>
      </div>

      {/* Primary Tab Navigation list inside solutions */}
      <div className="bg-[#050E1B] border-b border-zinc-900 py-4 sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide select-none justify-start md:justify-center">
            {solutionTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = activeSolution === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`sol_tab_btn_${tab.id}`}
                  onClick={() => setActiveSolution(tab.id)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 shrink-0 border ${
                    isSelected 
                      ? 'bg-[#C8973A] text-[#0B1F3A] font-bold border-[#C8973A] shadow-md' 
                      : 'bg-[#0B1F3A]/30 text-zinc-450 text-zinc-400 border-zinc-900 hover:border-[#C8973A]/30 hover:text-white'
                  }`}
                >
                  <TabIcon size={12} />
                  <span>{isRtl ? tab.labelAr : tab.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Solutions Page Hero banner with SEO metadata live preview simulation */}
      <div className="relative py-16 md:py-24 overflow-hidden border-b border-zinc-900 bg-radial-gradient-to-t">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-[#C8973A]/10 to-transparent blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Main Hero Elements */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-1.5 bg-[#0B1F3A] border border-[#C8973A]/30 px-3 py-1 rounded-full text-[10px] font-mono text-[#C8973A] tracking-wider uppercase font-bold">
              <span>{isRtl ? 'الحل المتكامل للشركات السيادية' : 'Sovereign Solutions Hub'}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-sans tracking-tight font-extralight text-zinc-100 max-w-3xl mx-auto leading-tight">
              {isRtl ? activeData.heroHeadlineAr : activeData.heroHeadline}
            </h1>
            
            <p className="text-zinc-400 text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              {isRtl ? activeData.heroSubheadAr : activeData.heroSubhead}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                id="sol_hero_cta_primary"
                onClick={() => {
                  const targetRole = solutionTabs.find(t => t.id === activeSolution)?.role || 'Client';
                  onSelectRole(targetRole);
                  onNavigate(`${targetRole.toLowerCase()}_dashboard`);
                }}
                className="w-full sm:w-auto bg-[#C8973A] hover:opacity-95 text-[#0A1F3A] font-extrabold px-8 py-3.5 rounded text-xs tracking-wider transition-all duration-200 cursor-pointer shadow-xl shadow-[#C8973A]/10 uppercase"
              >
                {isRtl ? activeData.ctaTextAr : activeData.ctaText}
              </button>
              <button
                id="sol_hero_cta_secondary"
                onClick={() => onNavigate("register_kyc")}
                className="w-full sm:w-auto bg-[#0B1F3A]/40 border border-zinc-800 hover:border-[#C8973A]/40 text-zinc-300 font-bold px-8 py-3.5 rounded text-xs tracking-wide transition-all cursor-pointer uppercase font-mono tracking-wider"
              >
                {isRtl ? 'تقديم السجل المعتمد (KYC)' : 'Secure Fast-Track Onboarding'}
              </button>
            </div>
          </div>

          {/* Premium SEO Metadata Live Inspector Simulation Card */}
          <div 
            id="seo_meta_simulator" 
            className="bg-[#050B14] border border-[#C8973A]/20 rounded-xl p-6 md:p-8 max-w-4xl mx-auto space-y-6 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 bg-[#C8973A]/10 border-b border-l border-[#C8973A]/25 rounded-bl-lg px-3 py-1 font-mono text-[9px] text-[#C8973A] tracking-widest uppercase font-extrabold select-none">
              {isRtl ? 'المحاكي السيو والبحث' : 'SEO REAL-TIME PREVIEW METRICS'}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 font-bold border-b border-zinc-900 pb-3">
              <Search size={12} className="text-[#C8973A]" />
              <span>{isRtl ? 'طريقة ظهور الصفحة لمحركات بحث قوقل وشبكات التواصل' : 'Google SERP & OpenGraph Validation Simulation'}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-900 text-left">
              
              {/* Google Search Replica Viewport */}
              <div className="space-y-3 pt-4 md:pt-0">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-extrabold block">Google Search Preview</span>
                <div className="bg-[#121620] border border-zinc-900/60 p-4 rounded-lg space-y-1.5 font-sans">
                  <span className="text-xs text-zinc-400 block truncate leading-none">
                    https://ardaca.com › solutions › <span className="text-[#C8973A]">{activeSolution}</span>
                  </span>
                  <a href="#test" className="text-base sm:text-lg text-[#32a852] hover:underline hover:text-green-400 font-medium leading-tight block">
                    {isRtl ? activeData.seoTitleAr : activeData.seoTitle}
                  </a>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {isRtl ? activeData.seoMetaAr : activeData.seoMeta}
                  </p>
                </div>
              </div>

              {/* Social Share OG Snippet Replica */}
              <div className="space-y-3 pt-6 md:pt-0 md:pl-8">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-extrabold block">LinkedIn / Twitter OpenGraph snippet</span>
                <div className="bg-[#121620] border border-outline border-zinc-900/60 rounded-lg overflow-hidden font-sans">
                  <div className="h-16 bg-gradient-to-r from-[#0B1F3A] to-[#121620] flex items-center p-4 border-b border-zinc-900">
                    <span className="h-7 w-7 rounded bg-[#C8973A]/20 text-[#C8973A] flex items-center justify-center font-bold text-xs">B</span>
                    <span className="text-[9px] font-mono text-zinc-400 ml-2">https://ardaca.com/solutions/{activeSolution}</span>
                  </div>
                  <div className="p-4 space-y-1 text-left">
                    <h4 className="text-xs font-bold text-[#C8973A] truncate">
                      {isRtl ? activeData.ogTitleAr : activeData.ogTitle}
                    </h4>
                    <p className="text-[10px] text-zinc-400 line-clamp-2 leading-relaxed">
                      {isRtl ? activeData.ogDescriptionAr : activeData.ogDescription}
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Main Core Pain Points & Solutions content segments */}
      <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Pain points Block */}
        <div id="pain_points_segment text-left" className="space-y-12">
          
          {/* Headline */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#C8973A] tracking-tight">
              {isRtl ? activeData.painPointsTitleAr : activeData.painPointsTitle}
            </h2>
            <div className="h-1 w-12 bg-zinc-800 mx-auto rounded-full" />
          </div>

          {/* Grid Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-stretch">
            {activeData.painPoints.map((pain, pIdx) => (
              <div 
                key={pIdx}
                id={`pain_card_${pIdx}`}
                className="bg-[#0b1f3a]/15 border border-zinc-900/60 p-6 rounded-lg space-y-4 text-left flex flex-col justify-start"
              >
                <div className="h-10 w-10 bg-red-950/20 text-red-400 rounded-full flex items-center justify-center border border-red-900/20 shadow-inner">
                  <ShieldAlert size={18} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-sans font-bold text-zinc-200">
                    {isRtl ? pain.titleAr : pain.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {isRtl ? pain.textAr : pain.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Dynamic Features segment with Navy blue and gold theme */}
        <div id="features_segment" className="space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#C8973A] tracking-tight">
              {isRtl ? activeData.featuresTitleAr : activeData.featuresTitle}
            </h2>
            <div className="h-1 w-12 bg-zinc-800 mx-auto rounded-full" />
          </div>

          {/* Grid list block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeData.features.map((feature, fIdx) => (
              <div
                key={fIdx}
                id={`sol_feat_card_${fIdx}`}
                className="bg-zinc-950/25 border border-zinc-900 p-8 rounded-xl flex items-start gap-4 hover:border-zinc-800 transition-colors"
              >
                <div className="h-10 w-10 bg-[#0B1F3A] text-[#C8973A] border border-[#C8973A]/25 rounded-md flex items-center justify-center shrink-0">
                  <CheckCircle size={16} />
                </div>
                <div className="text-left space-y-1.5">
                  <h3 className="text-base font-sans font-extrabold text-white">
                    {isRtl ? feature.titleAr : feature.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {isRtl ? feature.textAr : feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Step-by-Step Workflow Block */}
        <div id="workflows_segment" className="space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#C8973A] tracking-tight">
              {isRtl ? activeData.workflowTitleAr : activeData.workflowTitle}
            </h2>
            <div className="h-1 w-12 bg-zinc-800 mx-auto rounded-full" />
          </div>

          {/* Grid rows showing steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-stretch">
            {activeData.workflow.map((flow, flIdx) => (
              <div 
                key={flIdx}
                id={`workflow_col_step_${flIdx}`}
                className="bg-gradient-to-b from-[#0B1F3A]/25 to-zinc-950/15 border border-zinc-900/60 p-6 rounded-xl flex flex-col justify-between text-left space-y-4 relative"
              >
                <div>
                  <div className="h-9 w-9 bg-[#C8973A] text-[#0B1F3A] rounded-full text-xs font-mono font-extrabold flex items-center justify-center mb-4 select-none">
                    {flow.step}
                  </div>
                  <h3 className="text-sm font-sans font-extrabold text-white">
                    {isRtl ? flow.titleAr : flow.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {isRtl ? flow.descAr : flow.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Closing Role CTA panel */}
        <div 
          id="sol_closing_banner_card" 
          className="bg-gradient-to-r from-[#0B1F3A] to-[#040E1B] border border-[#C8973A]/25 rounded-2xl p-8 md:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 text-left relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_right,#C8973A_1px,transparent_1px),linear-gradient(to_bottom,#C8973A_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          <div className="space-y-3 relative z-10 max-w-2xl">
            <h3 className="text-xl md:text-2xl font-sans font-extrabold text-white">
              {isRtl 
                ? 'هل أنت جاهز لتجربة بيئة التوريد السيادية المخصصة لدورك؟' 
                : 'Ready to experience the sovereign sandbox tailored for your unique execution role?'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              {isRtl
                ? 'مكّن فريقك من تخطي المهل الزمنية، تتبع مطالبات المقاولين وتصديقات الدفاع المدني بضغطة واحدة.'
                : 'Give your regional team absolute timeline assurance, tamper-proof audit trails, and instant ministerial conformity.'}
            </p>
          </div>

          <button
            id="sol_closing_action_btn"
            onClick={() => {
              const targetRole = solutionTabs.find(t => t.id === activeSolution)?.role || 'Client';
              onSelectRole(targetRole);
              onNavigate(`${targetRole.toLowerCase()}_dashboard`);
            }}
            className="w-full lg:w-auto bg-[#C8973A] hover:bg-[#E0BA67] text-[#0A1F3A] font-extrabold text-xs uppercase px-8 py-4 rounded-md transition-all duration-200 cursor-pointer text-center whitespace-nowrap shadow-md inline-flex items-center gap-2 relative z-10 justify-center"
          >
            <span>{isRtl ? activeData.ctaTextAr : activeData.ctaText}</span>
            <ArrowRight size={12} />
          </button>
        </div>

      </div>

    </div>
  );
}
