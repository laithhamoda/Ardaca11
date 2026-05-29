import React from 'react';

export interface FooterProps {
  lang?: 'en' | 'ar';
}

export const Footer: React.FC<FooterProps> = ({ lang = 'en' }) => {
  const currentYear = new Date().getFullYear();

  // Column links list
  const footerColumns = {
    product: {
      title: lang === 'en' ? 'Product' : 'المنتج',
      items: lang === 'en' 
        ? [
            { label: 'Platform Overview', href: '#platform' },
            { label: 'Secure Bid Rooms', href: '#bid-rooms' },
            { label: 'TAMM Identity Sync', href: '#tamm' },
            { label: 'Compliance Ledger', href: '#ledger' }
          ]
        : [
            { label: 'نظرة عامة على المنصة', href: '#platform' },
            { label: 'غرف العطاءات الآمنة', href: '#bid-rooms' },
            { label: 'مزامنة الهوية عبر TAMM', href: '#tamm' },
            { label: 'سجل الامتثال المشفر', href: '#ledger' }
          ]
    },
    solutions: {
      title: lang === 'en' ? 'Solutions' : 'الحلول',
      items: lang === 'en'
        ? [
            { label: 'Giga Developers', href: '#giga' },
            { label: 'Tier 1 Contractors', href: '#contractors' },
            { label: 'Consulting Advisors', href: '#consultants' },
            { label: 'Regional Material Suppliers', href: '#suppliers' }
          ]
        : [
            { label: 'المطورون العقاريون العملاقة', href: '#giga' },
            { label: 'المقاولون من الفئة الأولى', href: '#contractors' },
            { label: 'المستشارون الهندسيون', href: '#consultants' },
            { label: 'موردو المواد الإقليميون', href: '#suppliers' }
          ]
    },
    resources: {
      title: lang === 'en' ? 'Resources' : 'الموارد',
      items: lang === 'en'
        ? [
            { label: 'API & Sandbox Spec', href: '#api-spec' },
            { label: 'GCC Compliance Guide', href: '#compliance-guide' },
            { label: 'Industry Whitepapers', href: '#whitepapers' },
            { label: 'Customer Stories', href: '#stories' }
          ]
        : [
            { label: 'مواصفات واجهة البرمجة والبيئة التجريبية', href: '#api-spec' },
            { label: 'دليل الامتثال لمجلس التعاون الخليجي', href: '#compliance-guide' },
            { label: 'أوراق بحثية متخصصة', href: '#whitepapers' },
            { label: 'قصص نجاح العملاء', href: '#stories' }
          ]
    },
    company: {
      title: lang === 'en' ? 'Company' : 'الشركة',
      items: lang === 'en'
        ? [
            { label: 'About Ardaca', href: '#about' },
            { label: 'Careers (GCC Nodes)', href: '#careers' },
            { label: 'Audited Security Standards', href: '#standards' },
            { label: 'Contact sovereign desk', href: 'mailto:contact@ardaca.com' }
          ]
        : [
            { label: 'من نحن - أردكا', href: '#about' },
            { label: 'الوظائف الشاغرة بمجلس التعاون', href: '#careers' },
            { label: 'معايير الأمن المدققة', href: '#standards' },
            { label: 'تواصل مع مكتبنا السيادي', href: 'mailto:contact@ardaca.com' }
          ]
    }
  };

  const translations = {
    tagline: lang === 'en' 
      ? 'Trusted by GCC construction professionals' 
      : 'موثوق من قِبل خبراء المقاولات والإنشاءات بالخليج العربي',
    privacy: lang === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية',
    terms: lang === 'en' ? 'Terms of Service' : 'شروط الخدمة',
    desc: lang === 'en'
      ? 'Decoupled and tamper-proof digital procurement networks protecting capital release, design intellectual property, and contractor bidding walls.'
      : 'شبكات توريد رقمية مستقلة ومقاومة للتلاعب تحمي سحب رأس المال، والملكية الفكرية للتصاميم، وجدران عطاءات المقاولين.',
  };

  return (
    <footer id="ardaca_marketing_footer" className="bg-[#0B1F3A] border-t border-[#C8973A]/15 text-[#E2E8F0] pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Top Segment containing Brand Logo and Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12 border-b border-zinc-900/40">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              {lang === 'ar' ? (
                <div className="h-7 w-7 bg-[#C8973A] rounded-lg flex items-center justify-center text-[#0B1F3A] font-sans font-extrabold text-sm shadow-md border border-[#0B1F3A]/10 select-none">
                  أ
                </div>
              ) : (
                <svg className="h-7 w-7 text-[#C8973A]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="16" fill="#C8973A" />
                  <path d="M30 70V30H45C55 30 62 36 62 46C62 53 57 58 50 59L65 70H52L39 60H30V70H20 Z" fill="#0B1F3A" />
                  <circle cx="80" cy="24" r="6" fill="#0B1F3A" />
                </svg>
              )}
              <h3 className="font-extrabold text-white text-lg tracking-tight uppercase">
                Ardaca BuildFlow
              </h3>
            </div>
            <p className="text-xs text-[#E2E8F0]/80 leading-relaxed max-w-sm">
              {translations.desc}
            </p>
          </div>

          <div className="text-left md:text-right space-y-1">
            <span id="trusted_by_tagline" className="text-xs font-mono uppercase tracking-widest text-[#C8973A] font-bold block">
              {translations.tagline}
            </span>
            <span className="text-[10px] text-[#4A5568]/90 font-mono block">
              Unified GCC Infrastructure License DED-DXB-98441
            </span>
          </div>
        </div>

        {/* Core Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-zinc-900/40">
          
          {/* Column 1: Product */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C8973A] font-bold font-mono">
              {footerColumns.product.title}
            </h4>
            <ul className="space-y-2 text-xs">
              {footerColumns.product.items.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-[#E2E8F0]/75 hover:text-[#C8973A] transition-colors leading-6">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C8973A] font-bold font-mono">
              {footerColumns.solutions.title}
            </h4>
            <ul className="space-y-2 text-xs">
              {footerColumns.solutions.items.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-[#E2E8F0]/75 hover:text-[#C8973A] transition-colors leading-6">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C8973A] font-bold font-mono">
              {footerColumns.resources.title}
            </h4>
            <ul className="space-y-2 text-xs">
              {footerColumns.resources.items.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-[#E2E8F0]/75 hover:text-[#C8973A] transition-colors leading-6">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C8973A] font-bold font-mono">
              {footerColumns.company.title}
            </h4>
            <ul className="space-y-2 text-xs">
              {footerColumns.company.items.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-[#E2E8F0]/75 hover:text-[#C8973A] transition-colors leading-6">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Metadata & Social Row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#E2E8F0]/50 text-center sm:text-left">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
            <span>© {currentYear} Ardaca.com (BuildFlow). All Rights Reserved.</span>
            <span className="hidden sm:inline">|</span>
            <a href="#privacy" className="hover:text-[#C8973A] transition-colors">{translations.privacy}</a>
            <span className="hidden sm:inline">|</span>
            <a href="#terms" className="hover:text-[#C8973A] transition-colors">{translations.terms}</a>
          </div>

          {/* Social Icons with custom Inline SVGs */}
          <div className="flex items-center gap-4">
            
            {/* LinkedIn Svg Icon */}
            <a 
              href="https://linkedin.com/company/ardaca" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#E2E8F0]/65 hover:text-[#C8973A] transition-colors"
              aria-label="LinkedIn"
              id="social_linkedin_link"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Twitter / X Svg Icon */}
            <a 
              href="https://twitter.com/ardaca" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#E2E8F0]/65 hover:text-[#C8973A] transition-colors"
              aria-label="Twitter X"
              id="social_twitter_link"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
