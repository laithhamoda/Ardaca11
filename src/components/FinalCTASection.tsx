import React from 'react';

export interface FinalCTASectionProps {
  lang?: 'en' | 'ar';
  onRequestDemo?: () => void;
  onExplorePricing?: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  lang = 'en',
  onRequestDemo,
  onExplorePricing,
}) => {
  const isRtl = lang === 'ar';

  const translations = {
    headline: isRtl 
      ? 'هل أنت مستعد لنقل مشروعك القادم إلى BuildFlow الخليج؟'
      : 'Ready to bring your next project into BuildFlow GCC?',
    subcopy: isRtl
      ? 'انضم إلى المنصة التي تضع المعايير القياسية لتكنولوجيا البناء والتشريعات الإلكترونية في منطقة الخليج العربي.'
      : 'Join the platform that is setting the standard for construction technology in the Gulf.',
    requestDemo: isRtl ? 'طلب نسخة تجريبية' : 'Request a Demo',
    viewPricing: isRtl ? 'عرض باقات الأسعار' : 'View Pricing',
  };

  return (
    <section 
      id="final_cta_section" 
      className="relative w-full bg-[#0B1F3A] text-white py-16 md:py-24 border-t border-[#C8973A]/20 overflow-hidden font-sans"
    >
      {/* Subtle Background Pattern using CSS Radial Gradients and lines only */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[linear-gradient(to_right,#C8973A_1px,transparent_1px),linear-gradient(to_bottom,#C8973A_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(200,151,58,0.15),transparent_65%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Flag Indicator */}
        <div className="inline-flex items-center gap-1.5 bg-[#050D1A] border border-[#C8973A]/35 text-[#C8973A] px-4 py-1.5 rounded-full text-[9px] font-mono uppercase tracking-widest font-extrabold shadow-sm">
          <span>GCC GIGA TENDERS • VERIFIED PIPELINE</span>
        </div>

        {/* Content Elements */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white leading-tight">
            {translations.headline}
          </h2>
          <p className="text-zinc-300 font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {translations.subcopy}
          </p>
        </div>

        {/* Buttons Action Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          
          {/* Request a Demo (gold fill) */}
          <button 
            id="final_cta_demo_btn"
            onClick={onRequestDemo}
            className="w-full sm:w-auto bg-[#C8973A] hover:bg-[#E0BA67] text-[#0A1F3A] font-extrabold px-8 py-3.5 rounded text-xs uppercase tracking-wider transition-all duration-250 cursor-pointer shadow-lg shadow-[#C8973A]/10"
          >
            {translations.requestDemo}
          </button>

          {/* View Pricing (white outline) */}
          <button 
            id="final_cta_pricing_btn"
            onClick={onExplorePricing}
            className="w-full sm:w-auto bg-transparent border border-white/30 hover:border-white text-white font-extrabold px-8 py-3.5 rounded text-xs uppercase tracking-wider transition-all duration-250 cursor-pointer"
          >
            {translations.viewPricing}
          </button>

        </div>

      </div>
    </section>
  );
};

export default FinalCTASection;
