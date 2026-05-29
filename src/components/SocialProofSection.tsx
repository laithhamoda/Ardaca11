import React, { useEffect, useState, useRef } from 'react';

export interface Testimonial {
  name: string;
  title: string;
  location: string;
  quote: string;
  role: string;
}

export interface SocialProofSectionProps {
  lang?: 'en' | 'ar';
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({
  lang = 'en',
}) => {
  const isRtl = lang === 'ar';
  const elementRef = useRef<HTMLDivElement>(null);
  
  // States for metric counters
  const [projectsCount, setProjectsCount] = useState(0);
  const [valueCount, setValueCount] = useState(0.0);
  const [companiesCount, setCompaniesCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasTriggered]);

  // Handle ticking animation count ups elegantly
  useEffect(() => {
    if (!hasTriggered) return;

    // Target values
    const targets = {
      projects: 500,
      val: 2.4,
      companies: 1200,
      countries: 6
    };

    let pCount = 0;
    let vCount = 0.0;
    let compCount = 0;
    let counCount = 0;

    const interval = setInterval(() => {
      let active = false;

      if (pCount < targets.projects) {
        pCount = Math.min(targets.projects, pCount + 20);
        setProjectsCount(pCount);
        active = true;
      }
      if (vCount < targets.val) {
        vCount = parseFloat(Math.min(targets.val, vCount + 0.1).toFixed(1));
        setValueCount(vCount);
        active = true;
      }
      if (compCount < targets.companies) {
        compCount = Math.min(targets.companies, compCount + 50);
        setCompaniesCount(compCount);
        active = true;
      }
      if (counCount < targets.countries) {
        counCount = Math.min(targets.countries, counCount + 1);
        setCountriesCount(counCount);
        active = true;
      }

      if (!active) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [hasTriggered]);

  const translations = {
    heading: isRtl ? 'موثوق من قِبل خبراء المقاولات والإنشاءات بالخليج العربي' : 'Trusted by GCC Construction Professionals',
    pLabel: isRtl ? 'مشاريع نشطة متكاملة' : 'Active Projects',
    vLabel: isRtl ? 'إجمالي قيمة المشاريع المدارة' : 'Project Value Managed',
    cLabel: isRtl ? 'شركة مقاولات وتوريد مسجلة' : 'Registered Companies',
    gLabel: isRtl ? 'دول الخليج العربي المشمولة' : 'GCC Countries',
  };

  const testimonials: Testimonial[] = [
    {
      name: isRtl ? 'المهندس طارق السديري' : 'Tareq Al-Sudeiri',
      title: isRtl ? 'مدير عام المشاريع السيادية والإنشاءات الكبرى' : 'Director of Sovereign Capital Infrastructure',
      location: isRtl ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Kingdom of Saudi Arabia',
      role: isRtl ? 'مطور رئيسي عقاري' : 'Prime Giga Developer',
      quote: isRtl
        ? 'بصفتنا جهة مسؤولة عن البنية التحتية والمشروعات الكبرى، أتاحت لنا منصة BuildFlow السيطرة الكاملة على ميزانيات وترشيحات المقاولين مع امتثال تام لتوطين وسرّية البيانات بالمنطقة.'
        : 'Managing flagship master developments demands strict isolation and absolute pricing confidentiality. BuildFlow GCC has completely replaced outdated communication with tamper-proof, immutable auditing.',
    },
    {
      name: isRtl ? 'منى الظاهري' : 'Mona Al-Dhaheri',
      title: isRtl ? 'رئيسة عقود التصاميم المعمارية والمستندات' : 'Lead Contracts Specialist & Document Controller',
      location: isRtl ? 'دبي، دولة الإمارات العربية المتحدة' : 'Dubai, United Arab Emirates',
      role: isRtl ? 'استشاري فئة أولى' : 'Tier-1 Consultants',
      quote: isRtl
        ? 'لقد أصبح تتبع طلبات المعلومات والمستندات أسهل بكثير بفضل التكامل المباشر مع واجهات TAMM والتحقق من الهوية الوطنية للمدراء عبر UAE PASS.'
        : 'Our drawing approval timelines cut in half. Direct TAMM validation and authentic digital sign-offs verified with UAE PASS provide unprecedented legal shielding to our project advisory teams.',
    },
    {
      name: isRtl ? 'المهندس جاسم المفتاح' : 'Jassim Al-Miftah',
      title: isRtl ? 'رئيس هيئة الإشراف الهندسي الرئيسي' : 'VP of Construction Delivery & QA',
      location: isRtl ? 'الدوحة، دولة قطر' : 'Doha, State of Qatar',
      role: isRtl ? 'مقاول رئيسي' : 'Primary Contractor PM',
      quote: isRtl
        ? 'مزايا عزل العطاءات وضمانات الخصوصية في غرف البث بالمنصة تمنح عقودنا حماية حقيقية، وتحمي سرية تسعير جداول الكميات.'
        : 'Sovereign bid isolation ensures subcontractors work within sealed portals. Our pricing margins remain strictly protected, reducing bid tampering risks entirely.',
    }
  ];

  return (
    <section 
      ref={elementRef}
      id="social_proof_section" 
      className="py-16 md:py-24 bg-[#F7F9FC] border-b border-zinc-200/50 w-full font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Animated Metric Counters Section */}
        <div 
          id="social_proof_metrics" 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-zinc-200/50 justify-items-center text-center items-center"
        >
          {/* Metric 1 */}
          <div className="space-y-2">
            <span className="text-4xl sm:text-5xl font-sans font-extrabold text-[#0B1F3A] tracking-tight block">
              {projectsCount}+
            </span>
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-[#C8973A] uppercase block">
              {translations.pLabel}
            </span>
          </div>

          {/* Metric 2 */}
          <div className="space-y-2">
            <span className="text-4xl sm:text-5xl font-sans font-extrabold text-[#0B1F3A] tracking-tight block">
              AED {valueCount}B+
            </span>
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-[#C8973A] uppercase block">
              {translations.vLabel}
            </span>
          </div>

          {/* Metric 3 */}
          <div className="space-y-2">
            <span className="text-4xl sm:text-5xl font-sans font-extrabold text-[#0B1F3A] tracking-tight block">
              {companiesCount}+
            </span>
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-[#C8973A] uppercase block">
              {translations.cLabel}
            </span>
          </div>

          {/* Metric 4 */}
          <div className="space-y-2">
            <span className="text-4xl sm:text-5xl font-sans font-extrabold text-[#0B1F3A] tracking-tight block">
              {countriesCount}
            </span>
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-[#C8973A] uppercase block">
              {translations.gLabel}
            </span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#0B1F3A] tracking-tight">
            {translations.heading}
          </h2>
          <div className="h-1.5 w-16 bg-[#C8973A] mx-auto rounded-full" />
        </div>

        {/* 3 testaments Cards Row block */}
        <div 
          id="testimonials_grid" 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-stretch"
        >
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              id={`testimonial_card_${idx}`}
              className="bg-white border border-[#0B1F3A]/10 p-8 rounded-lg shadow-card hover:shadow-elevated transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Visual Quote Icon Svg */}
                <span className="text-[#C8973A] opacity-25 shrink-0 block">
                  <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </span>

                <p className="text-xs sm:text-sm font-light text-[#2D3748] italic leading-relaxed text-left">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-zinc-100 flex items-center justify-between mt-6">
                <div className="text-left space-y-1">
                  <h4 className="text-xs font-sans font-extrabold text-[#0B1F3A]">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-zinc-500 font-light leading-snug">
                    {test.title}
                  </p>
                  <p className="text-[9px] font-mono text-[#C8973A] font-bold uppercase tracking-wider">
                    {test.location}
                  </p>
                </div>

                <span className="bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 text-[#0B1F3A] text-[9px] font-mono tracking-wider px-2.5 py-1 rounded-sm uppercase font-bold shrink-0">
                  {test.role}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;
