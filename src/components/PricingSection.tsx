import React, { useState } from 'react';

export interface PricingSectionProps {
  lang?: 'en' | 'ar';
  onSelectPlan?: (planId: string, billingCycle: 'monthly' | 'yearly') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  lang = 'en',
  onSelectPlan,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const isRtl = lang === 'ar';

  const translations = {
    title: isRtl ? 'أسعار بسيطة وشفافة' : 'Simple, Transparent Pricing',
    monthly: isRtl ? 'شهرياً' : 'Monthly',
    yearly: isRtl ? 'سنوياً (توفير ٢٠٪)' : 'Yearly (Save 20%)',
    perMonth: isRtl ? 'درهم / شهرياً' : 'AED / month',
    custom: isRtl ? 'سعر مخصص' : 'Custom pricing',
    popular: isRtl ? 'الأكثر طلباً' : 'Most Popular',
    startTrial: isRtl ? 'بدء الفترة التجريبية' : 'Start Free Trial',
    contactSales: isRtl ? 'الاتصل بالمبيعات' : 'Contact Sales',
    footerNote: isRtl 
      ? 'جميع الأسعار بالدرهم الإماراتي. لا تشمل ضريبة القيمة المضافة. توطين البيانات بدولة الإمارات مشمول في جميع الباقات.'
      : 'All prices in AED. VAT not included. UAE data residency included on all plans.',
  };

  const plans = [
    {
      id: 'starter',
      name: isRtl ? 'الباقة الأساسية' : 'Starter',
      priceMonthly: 499,
      priceYearly: 399,
      description: isRtl 
        ? 'مثالية لفرق العمل الصغيرة والمقاولين المحليين لإدارة المشاريع الفردية.'
        : 'Perfect for small teams and local contractors managing single projects.',
      features: isRtl 
        ? [
            'حتى ٥ مستخدمين نشطين',
            '٣ مشاريع نشطة متزامنة',
            'مساحة تخزين سحابية ١٠ جيجابايت',
            'الوحدات الأساسية (المشاريع، المستندات، الرسائل)',
            'دعم فني عبر البريد الإلكتروني على مدار الساعة'
          ]
        : [
            'Up to 5 users',
            '3 active projects',
            '10GB storage limit',
            'Core modules (Projects, Docs, Messaging)',
            'Standard email support'
          ],
      cta: translations.startTrial,
      featured: false,
    },
    {
      id: 'professional',
      name: isRtl ? 'الباقة المهنية' : 'Professional',
      priceMonthly: 1499,
      priceYearly: 1199,
      description: isRtl 
        ? 'الحل المتكامل للشركات ذات النمو السريع لإدارة عطاءات متعددة ومستندات معقدة.'
        : 'Complete solution for fast-growing companies managing multiple bids and complex docs.',
      features: isRtl 
        ? [
            'حتى ٢٥ مستخدماً معتمداً',
            'عدد غير محدود من المشاريع',
            'مساحة تخزين سحابية ١٠٠ جيجابايت',
            'جميع الوحدات بما فيها التسعير والمطالبات والمدفوعات',
            'دعم فني ذو أولوية على مدار الساعة',
            'الوصول الكامل لواجهات البرمجة (API)'
          ]
        : [
            'Up to 25 users included',
            'Unlimited active projects',
            '100GB secure cloud storage',
            'All modules (Quotations and Payments)',
            'Priority 24/7 client support',
            'Complete API sandbox access'
          ],
      cta: translations.startTrial,
      featured: true,
    },
    {
      id: 'enterprise',
      name: isRtl ? 'باقة المؤسسات' : 'Enterprise',
      priceMonthly: null, // Custom
      priceYearly: null,
      description: isRtl 
        ? 'للمطورين العقاريين من الفئة الأولى وبناة المدن الكبرى مع تكامُل كامل مع الأجهزة الحكومية.'
        : 'For prime giga-developers and city-scale builders requiring federated state sign-offs.',
      features: isRtl 
        ? [
            'عدد مستخدمين ومشاريع غير محدود',
            'مساحة تخزين مخصصة تبدأ من ١ تيرابايت',
            'تكاملات مخصصة عبر البوابات الوطنية والدخول الموحد (SSO)',
            'مدير حساب استراتيجي مخصص للمؤسسة',
            'ضمان مستوى الخدمة (SLA) موقع قانونياً',
            'حزمة الامتثال لقانون حماية البيانات الشخصية الإماراتي (PDPL)'
          ]
        : [
            'Unlimited users & projects',
            '1TB+ custom cloud environments',
            'SSO & Custom federal API integrations',
            'Dedicated enterprise account manager',
            'Legally backed uptime SLA guarantee',
            'UAE PDPL compliance package'
          ],
      cta: translations.contactSales,
      featured: false,
    }
  ];

  return (
    <section 
      id="pricing_section" 
      className="py-16 md:py-24 bg-white border-b border-zinc-200/50 w-full font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header containing title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-[#0B1F3A] tracking-tight text-center">
            {translations.title}
          </h2>
          <div className="h-1.5 w-16 bg-[#C8973A] mx-auto rounded-full" />
        </div>

        {/* Toggle Switch Container */}
        <div className="flex justify-center items-center gap-4 mb-16 select-none">
          <span className={`text-xs font-mono font-bold tracking-wider ${billingCycle === 'monthly' ? 'text-[#0B1F3A]' : 'text-slate'}`}>
            {translations.monthly}
          </span>
          
          <button 
            id="billing_toggle_button"
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="w-12 h-6 rounded-full bg-[#0B1F3A] p-0.5 transition-colors relative focus:outline-none cursor-pointer border border-[#C8973A]/20"
            aria-label="Toggle billing duration cycle"
          >
            <span 
              className={`block w-48 h-5 rounded-full bg-[#C8973A] transition-transform duration-300 transform w-4.5 ${
                billingCycle === 'yearly' ? (isRtl ? '-translate-x-6' : 'translate-x-6') : 'translate-x-0'
              }`}
            />
          </button>

          <span className={`text-xs font-mono font-bold tracking-wider ${billingCycle === 'yearly' ? 'text-[#C8973A]' : 'text-slate'}`}>
            {translations.yearly}
          </span>
        </div>

        {/* 3-Tier Pricing Side-by-Side Cards Matrix */}
        <div 
          id="pricing_cards_grid" 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {plans.map((plan) => {
            const isFeatured = plan.featured;
            const currentPrice = plan.priceMonthly !== null 
              ? (billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly) 
              : null;

            return (
              <div
                key={plan.id}
                id={`pricing_tier_card_${plan.id}`}
                className={`relative rounded-xl p-8 flex flex-col justify-between transition-all duration-350 overflow-hidden divide-y divide-zinc-250/20 shadow-md ${
                  isFeatured 
                    ? 'bg-[#0B1F3A] border-2 border-[#C8973A] scale-102 shadow-elevated text-white' 
                    : 'bg-white border border-[#0B1F3A]/10 text-[#0B1F3A] hover:border-[#0B1F3A]/40'
                }`}
              >
                {/* Popular indicator badge in corner */}
                {isFeatured && (
                  <div className="absolute top-0 right-0">
                    <span id="popular_tier_badge" className="bg-[#C8973A] text-[#0B1F3A] font-mono font-extrabold text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-bl-lg tracking-wider select-none inline-block">
                      {translations.popular}
                    </span>
                  </div>
                )}

                {/* Top Half info */}
                <div className="pb-6 space-y-4 text-left">
                  <h3 className={`text-lg font-sans font-extrabold uppercase tracking-wide tracking-wider ${isFeatured ? 'text-white' : 'text-[#0B1F3A]'}`}>
                    {plan.name}
                  </h3>
                  
                  {/* Interactive animated Pricing sum */}
                  <div className="flex items-baseline gap-1 mt-2">
                    {currentPrice !== null ? (
                      <>
                        <span 
                          id={`price_val_${plan.id}`}
                          className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight transition-all duration-500 ease-in-out text-transparent bg-clip-text bg-gradient-to-r from-[#C8973A] to-amber-500"
                        >
                          AED {currentPrice}
                        </span>
                        <span className={`text-[10px] font-mono font-bold uppercase ${isFeatured ? 'text-zinc-400' : 'text-slate'}`}>
                          / {translations.perMonth}
                        </span>
                      </>
                    ) : (
                      <span className="text-3xl font-sans font-extrabold text-[#C8973A] tracking-tight">
                        {translations.custom}
                      </span>
                    )}
                  </div>

                  <p className={`text-xs leading-relaxed font-light ${isFeatured ? 'text-[#E2E8F0]/80' : 'text-slate'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Bullet lists */}
                <div className="py-6 flex-grow space-y-4">
                  <ul className="space-y-3.5 text-xs text-left">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex gap-2.5 items-start">
                        {/* Custom Svg Check */}
                        <svg 
                          className={`w-4 h-4 shrink-0 stroke-current fill-none ${isFeatured ? 'text-[#C8973A]' : 'text-[#0B1F3A]'}`} 
                          viewBox="0 0 24 24" 
                          strokeWidth="3"
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className={`font-light ${isFeatured ? 'text-zinc-200' : 'text-slate'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA Button */}
                <div className="pt-6">
                  <button
                    id={`pricing_cta_btn_${plan.id}`}
                    onClick={() => onSelectPlan?.(plan.id, billingCycle)}
                    className={`w-full font-sans font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-md transition-all duration-200 cursor-pointer text-center ${
                      isFeatured 
                        ? 'bg-[#C8973A] hover:bg-[#E0BA67] text-[#0B1F3A] shadow-md border border-[#C8973A]' 
                        : 'bg-[#0B1F3A] hover:bg-[#162E4E] text-white'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pricing footnotes & data residency disclaimer */}
        <p 
          id="pricing_disclaimer"
          className="text-center text-[10.5px] font-mono text-zinc-500 mt-12 leading-relaxed tracking-wide select-none max-w-2xl mx-auto"
        >
          {translations.footerNote}
        </p>

      </div>
    </section>
  );
};

export default PricingSection;
