import React, { useState, useEffect, useRef } from 'react';
import { Languages, X, Menu } from 'lucide-react';

export interface NavBarProps {
  onNavigate?: (tab: string) => void;
  lang?: 'en' | 'ar';
  onToggleLang?: (lang: 'en' | 'ar') => void;
  activeTab?: string;
  onSignInClick?: () => void;
  onDemoClick?: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({
  onNavigate,
  lang: externalLang,
  onToggleLang,
  activeTab: externalActiveTab,
  onSignInClick,
  onDemoClick,
}) => {
  const [currentLang, setCurrentLang] = useState<'en' | 'ar'>(externalLang || 'en');
  const [activeItem, setActiveItem] = useState<string>(externalActiveTab || 'Product');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Sync state if external props change
  useEffect(() => {
    if (externalLang) {
      setCurrentLang(externalLang);
    }
  }, [externalLang]);

  useEffect(() => {
    if (externalActiveTab) {
      setActiveItem(externalActiveTab);
    }
  }, [externalActiveTab]);

  // Set up IntersectionObserver to detect scroll status transparently
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: [1.0] }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleToggleLangInternal = () => {
    const nextLang = currentLang === 'en' ? 'ar' : 'en';
    setCurrentLang(nextLang);
    
    // Switch document directionality and lang attribute automatically
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = nextLang;
    
    // Switch the primary font group style on body
    if (nextLang === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }

    if (onToggleLang) {
      onToggleLang(nextLang);
    }
  };

  const navLinks = currentLang === 'en' 
    ? [
        { label: 'Product', id: 'Product' },
        { label: 'Solutions', id: 'Solutions' },
        { label: 'Pricing', id: 'Pricing' },
        { label: 'Resources', id: 'Resources' },
        { label: 'About', id: 'About' }
      ]
    : [
        { label: 'المنتجات', id: 'Product' },
        { label: 'الحلول', id: 'Solutions' },
        { label: 'الأسعار', id: 'Pricing' },
        { label: 'الموارد', id: 'Resources' },
        { label: 'من نحن', id: 'About' }
      ];

  const translations = {
    signIn: currentLang === 'en' ? 'Sign In' : 'تسجيل الدخول',
    requestDemo: currentLang === 'en' ? 'Request Demo' : 'طلب عرض تجريبي',
    brandName: 'Ardaca',
    logoSlogan: currentLang === 'en' ? 'SOVEREIGN PROCURE' : 'التوريد السيادي',
  };

  const handleLinkClick = (id: string) => {
    setActiveItem(id);
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(id.toLowerCase());
    }
  };

  return (
    <>
      {/* Scroll Trigger Sentinel at top of body */}
      <div 
        ref={sentinelRef} 
        className="absolute top-0 left-0 w-full h-px pointer-events-none" 
        style={{ zIndex: 100 }}
      />
      
      <nav 
        id="ardaca_marketing_navbar"
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-navbar border-b border-zinc-100 py-3' 
            : 'bg-white/95 backdrop-blur-md border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left Portion: Logo Section */}
            <div className="flex items-center gap-6">
              <a 
                href="#home"
                id="brand_logo_link"
                className="flex items-center gap-2 group cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('Product');
                }}
              >
                {/* Custom Styled Inline Svg Logo Icon */}
                <svg 
                  className="h-9 w-9 text-[#0B1F3A] transition-transform duration-300 group-hover:scale-105 shrink-0" 
                  viewBox="0 0 500 500" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="navbar-gold" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#A3712C" />
                      <stop offset="30%" stopColor="#E4BA68" />
                      <stop offset="70%" stopColor="#F5D996" />
                      <stop offset="100%" stopColor="#C2913F" />
                    </linearGradient>
                  </defs>
                  {/* 4 Gold Pillars */}
                  <path d="M 115,370 L 115,250 L 145,195 L 145,370 Z" fill="url(#navbar-gold)" />
                  <path d="M 165,320 L 165,190 L 195,135 L 195,320 Z" fill="url(#navbar-gold)" />
                  <path d="M 215,270 L 215,130 L 245,75 L 245,270 Z" fill="url(#navbar-gold)" />
                  <path d="M 263,260 L 263,70 L 295,15 L 295,260 Z" fill="url(#navbar-gold)" />
                  {/* Navy Swirl */}
                  <path d="M 30,460 C 130,420 220,330 312,272 C 255,275 220,290 190,320 C 150,360 100,410 30,460 Z" fill="currentColor" />
                  {/* Navy Right Leg */}
                  <path d="M 312,135 L 365,135 L 475,445 L 410,445 Z" fill="currentColor" />
                  {/* Center Gold Chevron */}
                  <path d="M 290,335 L 348,430 L 315,430 L 290,390 L 265,430 L 232,430 Z" fill="url(#navbar-gold)" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-sans font-extrabold text-[#0B1F3A] tracking-tight text-xl leading-none">
                    {translations.brandName}
                  </span>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-slate uppercase mt-0.5">
                    {translations.logoSlogan}
                  </span>
                </div>
              </a>
            </div>

            {/* Center Portion: Anchor/Tab list */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeItem === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav_link_${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative py-2 text-xs uppercase font-mono tracking-wider font-semibold transition-all cursor-pointer ${
                      isActive 
                        ? 'text-navy' 
                        : 'text-slate hover:text-navy'
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Active Gold Underline Indicator */}
                    {isActive && (
                      <span 
                        id="active_indicator_bar"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full transition-all duration-300" 
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Portion: Auth Trigger Buttons & Language Toggle */}
            <div className="hidden md:flex items-center gap-4">
              {/* Sign In Button */}
              <button
                id="sign_in_navbar_btn"
                onClick={onSignInClick}
                className="text-navy hover:text-gold text-xs font-mono font-bold uppercase py-2 px-3 transition-colors cursor-pointer"
              >
                {translations.signIn}
              </button>

              {/* Request Demo Premium Button */}
              <button
                id="request_demo_navbar_btn"
                onClick={onDemoClick}
                className="bg-navy text-white hover:bg-gold hover:text-navy text-xs font-mono font-bold uppercase py-2.5 px-5 rounded-md border border-navy hover:border-gold transition-all duration-300 shadow-card hover:shadow-elevated cursor-pointer"
              >
                {translations.requestDemo}
              </button>

              {/* Language Switcher Element (In professional far-right utility position) */}
              <button
                id="language_switcher_btn"
                onClick={handleToggleLangInternal}
                className="text-xs font-mono font-bold text-slate hover:text-navy uppercase px-2 py-1.5 rounded-lg transition-all cursor-pointer border border-zinc-200 hover:border-zinc-400 flex items-center gap-1.5 bg-slate-50 hover:bg-white select-none"
              >
                <Languages className="w-3.5 h-3.5 text-slate hover:text-navy" />
                <span>{currentLang === 'en' ? 'عربي' : 'EN'}</span>
              </button>
            </div>

            {/* Mobile Navigation Command Controls */}
            <div className="md:hidden flex items-center gap-3">
              <button
                id="mobile_lang_switch"
                onClick={handleToggleLangInternal}
                className="text-navy text-xs font-mono border border-navy/20 px-2 py-1 rounded"
              >
                {currentLang === 'en' ? 'عربي' : 'EN'}
              </button>
              
              <button
                id="hamburger_menu_trigger"
                onClick={() => setIsOpen(!isOpen)}
                className="text-navy p-1 focus:outline-none transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-navy animate-fade-in" />
                ) : (
                  <Menu className="h-6 w-6 text-navy animate-fade-in" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Slide Down Drawer Component */}
        <div 
          id="mobile_navbar_drawer"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-zinc-100 ${
            isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`block w-full text-left font-mono text-xs uppercase tracking-wider py-2 border-b border-zinc-50/50 ${
                  activeItem === link.id ? 'text-gold font-bold' : 'text-slate hover:text-navy'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="pt-4 flex flex-col gap-2">
              <button
                id="mobile_signin_btn"
                onClick={() => {
                  setIsOpen(false);
                  if (onSignInClick) onSignInClick();
                }}
                className="w-full text-center text-navy font-mono text-xs uppercase py-2.5 border border-[#0B1F3A]/25 rounded hover:bg-lightGray"
              >
                {translations.signIn}
              </button>
              <button
                id="mobile_demo_btn"
                onClick={() => {
                  setIsOpen(false);
                  if (onDemoClick) onDemoClick();
                }}
                className="w-full bg-navy hover:bg-gold hover:text-navy text-white text-center font-bold font-sans text-xs uppercase py-2.5 rounded shadow-md"
              >
                {translations.requestDemo}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to push content under the fixed header */}
      <div className="h-16 w-full" />
    </>
  );
};

export default NavBar;
