import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  lang?: 'en' | 'ar';
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang = 'en' }) => {
  const isRtl = lang === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const translations = {
    title: isRtl ? 'الأسئلة الشائعة والتحقق التنظيمي' : 'Frequently Asked Questions & Compliance',
    subtitle: isRtl
      ? 'إجابات مفصلة للمطورين الرئيسيين والمقاولين والاستشاريين بشأن الامتثال وإدارة البيانات.'
      : 'Comprehensive guidance for prime developers, contractors, and consultants on platform compliance and data workflows.',
  };

  const faqs: FaqItem[] = isRtl
    ? [
        {
          question: 'كيف تعمل عملية تسجيل ونظام التحقق من هوية الشركات (KYC)؟',
          answer: 'تتطلب المنصة تقديم السجل التجاري والترخيص المهني الساري. يتم التحقق من بيانات الهوية عبر الربط المباشر مع الدوائر الاقتصادية المعنية في دول مجلس التعاون (مثل بوابة TAMM أو وزارة التجارة السعودية)، ويتم مصادقة المفوضين بالتوقيع بالتنسيق مع نظام الهوية الرقمية (UAE PASS) لضمان بيئة آمنة تمنع انتحال الشخصية أو التلاعب بالأسعار.'
        },
        {
          question: 'كيف يتم احتساب باقات الأسعار وهل تشتمل على رسوم للتثبيت؟',
          answer: 'تم تيسير التسعير في ثلاث باقات واضحة تبدأ من الأساسية (Starter) بـ ٤٩٩ درهم وتتدرج إلى باقة المؤسسات المخصصة لشركات التطوير الكبرى. لا توجد أي رسوم خفية أو تكاليف إعداد للتثبيت السحابي القياسي. يتضمن الاشتراك السنوي توطين البيانات الخليجية والدعم الفني الكامل.'
        },
        {
          question: 'كيف تضمن منصة BuildFlow توطين البيانات والامتثال للقواعد المحلية؟',
          answer: 'يتم استضافة كافة البيانات والوثائق الهندسية والمراسلات والمقايسات على خوادم محلية آمنة داخل دولة الإمارات والمملكة العربية السعودية. يمتثل نظامنا بالكامل لقوانين حماية البيانات الشخصية الإماراتية (PDPL) واللوائح التنظيمية للأمن السيبراني، مع استقلال تام لكل قناة ورفض قاطع للربط أو تداول البيانات خارج الحدود.'
        },
        {
          question: 'هل تتوفر اللغة العربية بشكل كامل للمستخدمين والتقارير؟',
          answer: 'نعم، المنصة مبنية بتصميم يدعم واجهات الاتجاهين (RTL/LTR) والترجمة الحية المعتمدة للمراسلات القانونية والمقايسات (BOQ) وجداول الكميات. يمكن للمستخدمين إنتاج كافة شهادات الدفع، ونماذج التوصية الفنية واستمارات التدقيق الإنشائي باللغتين العربية والإنجليزية بلمسة واحدة لسهولة العرض الحكومي والوزاري.'
        },
        {
          question: 'ما هي معايير الأمان المطبقة لعزل العطاءات والخصوصية وتوقيع المستندات؟',
          answer: 'نعتمد تقنية "جدار الخصوصية غير المرئي" لفرز العطاءات السري والمنفصل لضمان عدم مشاركة معلومات الأسعار أو الأسس الفنية للمناقصين المتطابقين. السجلات موقعة باستخدام معايير التشفير العسكري (AES-256) وسجلات ختم قانونية مشفرة تثبت بشكل قاطع أوقات تسليم المخططات أو اعتماد الدفع في المحاكم وبوابات التحكيم.'
        },
        {
          question: 'هل يمكن ربط المنصة مع أنظمة إدارة موارد المؤسسات (ERP) مثل SAP و Oracle؟',
          answer: 'نعم، تدعم باقة المؤسسات (Enterprise) واجهة برمجة تطبيقات (API) مخصصة وعبر بروتوكولات نقل معلومات آمنة لربط شهادات الدفع المعتمدة مباشرة مع أنظمة الحسابات المركزية لديكم. يحد هذا من تكرار الإدخال اليدوي، ويتجنب الأخطاء التشغيلية في صرف الدفعات لمقاولي الباطن.'
        },
        {
          question: 'مَن يُحتسب كمستخدم نشط، وكيف يتم ترخيص مقاولي الباطن الخارجيين؟',
          answer: 'يتم احتساب المستخدمين بناءً على أعضاء الفريق التابعين لمؤسستك والذين يملكون بريداً إلكترونياً معتمداً بهوية شركتكم. بالنسبة لمقاولي الباطن الخارجيين والموردين المدعوين للمنافسة في مناقصاتكم، فيمكنهم الدخول وتقديم مستنداتهم في غرف التوريد الخاصة بصفة "زائر معتمد" ودون تحميل شركتكم أي تكاليف تراخيص إضافية.'
        },
        {
          question: 'ما هو "السجل الآمن للمراسلات" بموجب القوانين الاتحادية بدولة الإمارات وقوانين المملكة؟',
          answer: 'السجل الآمن للمراسلات هو مستند رقمي مشفر غير قابل للتعديل يوثق بدقة الميكروثانية كل معاملة، طلب تعديل، أو طلب معلومات (RFI) يتم إرساله عبر المنصة. يمثل هذا السجل مرجعاً قانونياً معتمداً لإثبات الالتزام بجداول التسليم وتجنب النزاعات المالية حول تأخر الاعتمادات الإنشائية في المحاكم المحلية وهيئات التحكيم بمركز دبي المالي أو مركز الرياض.'
        }
      ]
    : [
        {
          question: 'How does corporate onboarding and KYC verification work?',
          answer: 'To ensure a pristine, high-trust environment, all stakeholders must present a valid commercial registration (Trade License / CR). Directors and authorized signatories undergo real-time checking against active regional ministry databases (such as Dubai DED/TAMM or the Saudi Ministry of Commerce) and authenticate their corporate identity via digital credentials (such as UAE PASS). This eliminates shell bidding and identity theft.'
        },
        {
          question: 'How is pricing structured, and are there any custom implementation fees?',
          answer: 'BuildFlow GCC is priced via three clear tiers: Starter (AED 499), Professional (AED 1,199), and Enterprise (Custom SLA). There are no hidden hosting or setup fees for standard regional deployments. Annual subscriptions include fully-backed UAE/KSA data residency compliance and dedicated client service options.'
        },
        {
          question: 'How does the platform handle data residency and regulatory compliance?',
          answer: 'All master drawings, specifications, financial tables, and private conversations are physically stored in GCC-certified local datacenters (UAE and Saudi Arabia). Our storage layers comply fully with UAE PDPL and local cyber safety mandates, guaranteeing zero offshore hosting and strong protection against foreign corporate surveillance.'
        },
        {
          question: 'Is Arabic language support available natively across critical actions?',
          answer: 'Yes, BuildFlow supports complete dual-language localization. The interface features automatic toggling between RTL and LTR viewports. Bill of Quantities (BOQs), RFIs, contract awards, and payment certificates can be managed, rendered, and printed in certified English and Arabic models to satisfy ministerial and municipal filing guidelines.'
        },
        {
          question: 'What security measures back the sealed bidding rooms and signing log?',
          answer: 'Our proprietary privacy walls mathematically separate parallel bidding lines, ensuring no tenderer can view competitors’ technical approaches or unit rates. All issued directives, design markups, and final certifications are sealed with AES-256 state-level encryption, forming an inalterable ledger capable of resolving scheduling or financial disputes in regional courts.'
        },
        {
          question: 'Can we integrate BuildFlow with enterprise ERP networks like SAP or Oracle?',
          answer: 'Our Enterprise tier provides developer APIs designed for the security-conscious IT department. Verified and signed payment certificates, retention releases, and variation orders can be bridged directly to your core SAP, Oracle, or Microsoft Dynamics instances to eliminate duplicate entry and fast-track subcontractor disbursement.'
        },
        {
          question: 'Who counts as an active user, and how are external subcontractors licensed?',
          answer: 'Active user caps only apply to your direct corporate employees. External subcontractors, engineers, and suppliers who are invited to submit bids, answer RFIs, or claim progress milestones are granted secure access to your sealed sandbox workspace as "Authorized Invitees" at no additional cost to your account.'
        },
        {
          question: 'What constitutes the "Sealed Messaging Log" under regional construction laws?',
          answer: 'The Sealed Messaging Log is an immutably stamped chronological record of every RFI submission, response, and variation directive issued within our workspaces. Under federal commercial transaction laws, this encrypted log satisfies evidentiary standards, preserving true intent and timeline proof during municipal and DIAC/SCCA arbitration.'
        }
      ];

  return (
    <section 
      id="faq_section" 
      className="py-16 md:py-24 bg-[#050D1A] border-t border-zinc-900 w-full font-sans text-left"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-sans font-extrabold text-white tracking-tight">
            {translations.title}
          </h2>
          <div className="h-1.5 w-16 bg-[#C8973A] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm font-light text-zinc-450 text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {translations.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div id="faq_accordion" className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                id={`faq_accordion_item_${idx}`}
                className="bg-[#0b1f3a]/15 border border-zinc-900 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  id={`faq_accordion_trigger_${idx}`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 hover:bg-[#0b1f3a]/30 transition-colors cursor-pointer select-none"
                >
                  <span className={`text-sm font-bold text-zinc-150 transition-colors ${isOpen ? 'text-[#C8973A]' : 'text-zinc-200'}`}>
                    {faq.question}
                  </span>
                  <span className="text-[#C8973A] shrink-0 font-bold">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div 
                  id={`faq_accordion_content_${idx}`}
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-zinc-900/40 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <p className="p-6 text-xs sm:text-sm text-zinc-450 text-zinc-400 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
