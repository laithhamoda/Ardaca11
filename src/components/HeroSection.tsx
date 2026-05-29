import React from 'react';

export interface HeroSectionProps {
  onDemoClick?: () => void;
  onExploreClick?: () => void;
  lang?: 'en' | 'ar';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDemoClick,
  onExploreClick,
  lang = 'en',
}) => {
  const isRtl = lang === 'ar';

  return (
    <section 
      id="hero_section" 
      className="relative min-h-screen bg-[#0B1F3A] overflow-hidden flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-sans"
    >
      {/* 1. Custom CSS Keyframes and CSS Grid Background Styles */}
      <style>{`
        @keyframes fadeInWord {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatMockup {
          0%, 100% {
            transform: translateY(0) rotate(0.5deg);
          }
          50% {
            transform: translateY(-8px) rotate(-0.5deg);
          }
        }

        .animate-word-stagger {
          opacity: 0;
          animation: fadeInWord 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .float-mockup {
          animation: floatMockup 5.5s ease-in-out infinite;
        }

        /* Ambient geometric wireframe grid pattern */
        .geometric-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(200, 151, 58, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200, 151, 58, 0.05) 1px, transparent 1px);
        }

        /* Radial focus lighting gradient */
        .glow-radial {
          background: radial-gradient(circle at 75% 35%, rgba(200, 151, 58, 0.09) 0%, rgba(11, 31, 58, 0) 65%);
        }
      `}</style>

      {/* 2. Visual Layer: Grid & Soft Glow Accents */}
      <div id="hero_grid_pattern" className="absolute inset-0 geometric-grid pointer-events-none" />
      <div id="hero_glow_accent" className="absolute inset-0 glow-radial pointer-events-none" />

      {/* Decorative premium light streaks */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/10 rounded-full filter blur-[140px] pointer-events-none" />

      {/* 3. Main Responsive Content Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Hand: Core Copy, Header and CTAs (7-Columns wide on desktop) */}
        <div id="hero_info_panel" className="lg:col-span-7 space-y-8 text-left">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/25 rounded-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-gold uppercase">
              {isRtl ? 'منصة الإنشاءات الخليجية الموحدة' : 'The GCC Construction Platform'}
            </span>
          </div>

          {/* H1 Headline with left border accent */}
          <div className={`border-l-4 border-gold pl-5 ${isRtl ? 'border-r-4 border-l-0 pr-5 pl-0' : ''}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans tracking-tight leading-[1.1] text-white font-light">
              {/* Words staggered in styling for premium feeling */}
              <span className="animate-word-stagger block font-extrabold" style={{ animationDelay: '100ms' }}>
                {isRtl ? 'كل مشروع.' : 'Every Project.'}
              </span>
              <span className="animate-word-stagger block text-gold/95 font-medium" style={{ animationDelay: '250ms' }}>
                {isRtl ? 'جميع الأطراف.' : 'Every Party.'}
              </span>
              <span className="animate-word-stagger block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400" style={{ animationDelay: '400ms' }}>
                {isRtl ? 'منصة واحدة.' : 'One Platform.'}
              </span>
            </h1>
          </div>

          {/* Subheadline description */}
          <p 
            id="hero_subheadline"
            className="text-[#E2E8F0]/85 text-base sm:text-lg font-light leading-relaxed max-w-xl animate-word-stagger"
            style={{ animationDelay: '550ms' }}
          >
            {isRtl 
              ? 'يربط BuildFlow GCC بين الملاك والمستشارين والمقاولين والموردين على منصة آمنة واحدة — تم تصميمها خصيصاً لتلبية متطلبات قطاع الإنشاءات في دول الخليج العربي.'
              : 'BuildFlow GCC connects clients, consultants, contractors, and suppliers on a single secure platform — purpose-built for the GCC construction ecosystem.'}
          </p>

          {/* CTA Grouping Buttons */}
          <div 
            id="hero_cta_actions"
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-word-stagger"
            style={{ animationDelay: '700ms' }}
          >
            {/* Primary Action Button: Outlined Navy over solid Gold on hover */}
            <button
              id="hero_demo_button"
              onClick={onDemoClick}
              className="bg-gold text-[#0B1F3A] hover:bg-transparent hover:text-gold border border-gold font-sans font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-md transition-all duration-350 shadow-elevated cursor-pointer"
            >
              {isRtl ? 'طلب عرض تجريبي' : 'Request a Demo'}
            </button>

            {/* Secondary Action: Ghost Button with Dynamic Arrow Icon */}
            <button
              id="hero_explore_button"
              onClick={onExploreClick}
              className="group text-white hover:text-gold font-mono font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-md hover:bg-white/5 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isRtl ? 'اكتشف كيف نعمل' : 'See How It Works'}</span>
              <svg 
                className={`w-3.5 h-3.5 stroke-current fill-none transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} 
                viewBox="0 0 24 24" 
                strokeWidth="2.5"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          {/* GCC Trust Sovereign Indicators */}
          <div 
            id="hero_trust_indicators"
            className="pt-6 border-t border-white/10 flex flex-wrap gap-3 items-center animate-word-stagger"
            style={{ animationDelay: '850ms' }}
          >
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#E2E8F0]/40 font-bold block pr-2 w-full sm:w-auto">
              {isRtl ? 'المعايير المعتمدة:' : 'Federal Standards:'}
            </span>
            {[
              { label: isRtl ? 'توطين البيانات بالإمارات' : 'UAE Data Residency', id: 'residency' },
              { label: isRtl ? 'متوافق مع ISO 27001' : 'ISO 27001 Aligned', id: 'iso' },
              { label: 'العربية + English', id: 'bilingual' }
            ].map((badge) => (
              <span
                key={badge.id}
                id={`trust_badge_${badge.id}`}
                className="bg-zinc-900/40 border border-[#C8973A]/15 text-white/95 text-[10px] font-mono tracking-wide px-3 py-1 rounded-sm shadow-sm select-none"
              >
                {badge.label}
              </span>
            ))}
          </div>

        </div>

        {/* Right Hand: Interactive/Stunning Mockup Frame representing the Sandbox (5-Columns wide on desktop) */}
        <div id="hero_mockup_panel" className="lg:col-span-5 flex justify-center items-center">
          
          {/* Framed interactive browser wrapper with float mechanics */}
          <div className="float-mockup w-full max-w-md bg-[#051327]/80 border border-gold/30 rounded-lg shadow-elevated overflow-hidden divide-y divide-[#C8973A]/25 backdrop-blur-lg">
            
            {/* Header frame styling (Browser Controls) */}
            <div className="px-4 py-3 flex items-center justify-between bg-[#040E1B]">
              <div className="flex gap-1.5 items-center">
                <span className="h-2.5 w-2.5 bg-red-500/80 rounded-full inline-block" />
                <span className="h-2.5 w-2.5 bg-yellow-500/80 rounded-full inline-block" />
                <span className="h-2.5 w-2.5 bg-green-500/80 rounded-full inline-block" />
              </div>
              <div className="hidden sm:inline-block px-3 py-0.5 bg-white/5 rounded text-[8px] font-mono text-zinc-500 uppercase tracking-widest text-center">
                buildflow.gcc/maktoum-assets
              </div>
              <span className="h-4 w-4 text-gold shrink-0">
                <svg className="fill-none stroke-current w-full h-full" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </span>
            </div>

            {/* Simulated Live Interface Metrics / Portal view */}
            <div className="p-5 space-y-4 font-mono text-[9.5px]">
              
              <div className="flex justify-between items-center text-[8px] text-zinc-500 uppercase pb-2 border-b border-zinc-900">
                <span>PROJECT ID: 2026-DXB-92</span>
                <span className="text-gold font-bold">TAMM STAMP SYNCED</span>
              </div>

              {/* simulated card 1 */}
              <div className="bg-[#0b1f3a]/80 border border-gold/20 rounded p-3 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-sans font-bold text-xs">Al Jaddaf Superstructure</span>
                  <span className="text-[8px] bg-gold/15 text-gold border border-gold/30 px-1.5 py-0.2 rounded font-bold uppercase">CLIENT NODE</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Contract Sum release</span>
                  <span className="text-gold font-bold">AED 48,200,000</span>
                </div>
                
                {/* Micro joint attestation progress */}
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[8px] text-zinc-500">
                    <span>Joint Verification Seal Status</span>
                    <span className="text-gold font-bold">94% APPR</span>
                  </div>
                  <div className="w-full h-1 bg-navy rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-gold to-white w-[94%]" />
                  </div>
                </div>
              </div>

              {/* simulated interactive messages */}
              <div className="space-y-2 pt-1">
                <span className="text-[8px] text-zinc-500 block uppercase tracking-wider font-bold">TAMM Blockchain Ledger Stream</span>
                
                <div className="bg-white/5 border border-white/5 p-2 rounded text-[8.5px] leading-relaxed flex gap-2 items-start text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Sarah Jenkins (Executive Architect):</strong> Just pushed facade load metrics for formal approval.
                  </div>
                </div>

                <div className="bg-[#0B1F3A]/60 border border-gold/30 p-2.5 rounded text-[8.5px] leading-relaxed space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gold font-bold uppercase tracking-widest text-[7.5px] block">UAE PASS DIGITAL WORKSPACE REQUEST</span>
                    <span className="text-zinc-500 text-[7px]">11:04 GST</span>
                  </div>
                  <p className="text-zinc-200">Please seal authority declaration releasing Al-Maktoum Assets phase tranche 2.</p>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-gold text-[#0B1F3A] font-bold py-1 px-3.5 rounded text-[8px] cursor-pointer">
                      ✓ UAE PASS VERIFY
                    </div>
                  </div>
                </div>
              </div>

              {/* Privacy protection security tag indicator */}
              <div className="pt-2 border-t border-zinc-900 flex justify-between items-center text-[8px] text-zinc-650 text-zinc-500">
                <span>Secure Federated Vault: Decoupled Data Rooms Enabled</span>
                <span>v3.0-live</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
