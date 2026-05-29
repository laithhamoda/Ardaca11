import React from 'react';

export interface FeaturesSectionProps {
  lang?: 'en' | 'ar';
  onLearnMore?: (roleId: string) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  lang = 'en',
  onLearnMore,
}) => {
  const isRtl = lang === 'ar';

  const headingText = isRtl 
    ? 'مصممة لكل دور في سلسلة القيمة الإنشائية' 
    : 'Built for Every Role in the Value Chain';

  const subtitleText = isRtl
    ? 'تعمل منصة BuildFlow على توحيد قنوات التواصل التوريدية وتضمن عزل العطاءات والخصوصية لجميع المشاركين.'
    : 'BuildFlow unifies digital construction supply pathways while maintaining strict separation and privacy safeguards for every node.';

  // Feature cards data definition
  const cards = [
    {
      id: 'clients',
      role: isRtl ? 'عملاء المشاريع' : 'Project Clients',
      description: isRtl 
        ? 'رؤية شاملة للمشروع — الميزانيات، المعالم، الموافقات وتوقيعات المستندات عبر لوحة تحكم تنفيذية موحدة.' 
        : 'Full project visibility — budgets, milestones, approvals, and document sign-offs from a single executive dashboard.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="22" x2="9" y2="16" />
          <line x1="15" y1="22" x2="15" y2="16" />
          <line x1="9" y1="16" x2="15" y2="16" />
          <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M12 6h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
        </svg>
      )
    },
    {
      id: 'consultants',
      role: isRtl ? 'الاستشاريون والمهندسون' : 'Consultants & Engineers',
      description: isRtl
        ? 'إدارة طلبات المعلومات والمستندات ومراجعة دورات الاعتماد بمسارات توجيه تلقائية وسجلات تدقيق كاملة.'
        : 'Manage RFIs, submittals, and document review cycles with automated routing and full audit trails.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M12 6v6l4-2-4-2z" />
        </svg>
      )
    },
    {
      id: 'contractors',
      role: isRtl ? 'المقاولون الرئيسيون' : 'Main Contractors',
      description: isRtl
        ? 'تنسيق عمل مقاولي الباطن، وإدارة جداول الكميات والتسعير، ومتابعة شهادات الدفع الفوري بالوقت الحقيقي.'
        : 'Coordinate subcontractors, manage BOQ-linked quotations, and track payment certifications in real time.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M2 18h20" />
          <path d="M4 18a8 8 0 0 1 16 0" />
          <path d="M12 4v4" />
          <path d="M8 6c0-1.5 1.5-2 4-2s4 .5 4 2" />
          <path d="M12 10V18" />
        </svg>
      )
    },
    {
      id: 'subcontractors',
      role: isRtl ? 'مقاولو الباطن' : 'Subcontractors',
      description: isRtl
        ? 'الوصول المباشر للمناقصات المعتمدة، وتقديم مطالبات الإنجاز الرقمية، وتتبع حالة الدفعات من البداية للنهاية.'
        : 'Access a verified tender pipeline, submit digital progress claims, and track payment status end to end.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 0-7.94-7.94L3.6 11.5l2.2 2.2z" />
          <path d="m21 21-9-9" />
          <path d="M10 14.7c.3.3.4.6.3.9l-.8 2.4a1 1 0 0 1-1.4.6l-2.4-.8a1 1 0 0 1-.6-1.4l.8-2.4c.1-.3.4-.6.9-.3z" />
        </svg>
      )
    },
    {
      id: 'suppliers',
      role: isRtl ? 'الموردون' : 'Suppliers',
      description: isRtl
        ? 'تلقي طلبات عروض الأسعار المهيكلة، وتقديم التسعير التنافسي، وإدارة الطلبات من بيئة عمل مورد نظيفة.'
        : 'Receive structured RFQs, submit competitive quotations, and manage orders from a clean supplier workspace.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    },
    {
      id: 'security',
      role: isRtl ? 'آمن ومتوافق' : 'Secure & Compliant',
      description: isRtl
        ? 'توطين البيانات الوطنية بدولة الإمارات، جدران خصوصية مخصصة للأدوار، تخزين مشفر للملفات مع تحقق كامل للهوية.'
        : 'UAE data residency, role-based privacy walls, encrypted document storage, and full KYC verification.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="features_section" 
      className="py-16 md:py-24 bg-[#F7F9FC] border-y border-zinc-200/50 w-full font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div id="features_header" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-[#0B1F3A] tracking-tight">
            {headingText}
          </h2>
          <div className="h-1.5 w-16 bg-[#C8973A] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm font-light text-slate leading-relaxed">
            {subtitleText}
          </p>
        </div>

        {/* 3-Column Grid representing construction portals */}
        <div 
          id="features_grid" 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-stretch"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              id={`feature_card_${card.id}`}
              className="group bg-white rounded-lg border border-zinc-200/60 p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Inner details container */}
              <div className="space-y-4">
                
                {/* Custom icon container - Navy background with gold icon */}
                <div 
                  className={`h-12 w-12 rounded-lg bg-[#0B1F3A] text-[#C8973A] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 ${
                    isRtl ? 'mr-0 ml-auto' : 'ml-0 mr-auto'
                  }`}
                >
                  {card.icon}
                </div>

                <div className="space-y-2 text-left">
                  <h3 className="text-base font-sans font-bold text-[#0B1F3A] tracking-tight group-hover:text-[#C8973A] transition-colors">
                    {card.role}
                  </h3>
                  <p className="text-xs text-slate font-light leading-relaxed line-clamp-2 md:line-clamp-3">
                    {card.description}
                  </p>
                </div>

              </div>

              {/* Dynamic Learn More action tag anchor */}
              <div className="pt-6 text-left">
                <button
                  id={`learn_more_btn_${card.id}`}
                  onClick={() => onLearnMore?.(card.id)}
                  className="group/link inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0B1F3A] hover:text-[#C8973A] transition-colors duration-200 cursor-pointer uppercase tracking-wider"
                >
                  <span>{isRtl ? 'تعرف على المزيد' : 'Learn more'}</span>
                  <svg 
                    className={`w-3.5 h-3.5 stroke-current fill-none transition-transform duration-200 group-hover/link:translate-x-1 ${
                      isRtl ? 'rotate-180 group-hover/link:-translate-x-1' : ''
                    }`} 
                    viewBox="0 0 24 24" 
                    strokeWidth="2.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
