import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Calendar, 
  Link2, 
  User, 
  ChevronRight, 
  ChevronLeft, 
  Bookmark, 
  Share2, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  Cpu, 
  Maximize2, 
  Minimize2, 
  Sparkles, 
  TrendingUp, 
  ArrowRight,
  Database,
  SearchCode,
  Check,
  AlertCircle,
  Linkedin,
  Copy,
  SlidersHorizontal,
  Layers,
  HelpCircle,
  Compass,
  Globe,
  Mail,
  Send,
  MessageSquare,
  Users
} from 'lucide-react';
import { targetKeywords, contentCalendar, internalLinkingStructure, authorPersona, Keyword, CalendarItem } from '../data/seoStrategy';
import { article1 } from '../data/articles/Article1';
import { article2 } from '../data/articles/Article2';
import { article3 } from '../data/articles/Article3';
import { article4 } from '../data/articles/Article4';
import { article5 } from '../data/articles/Article5';
import { linkedinPosts, campaignThemes, LinkedInPost } from '../data/linkedinCampaign';
import { emailSequences, EmailSequence, EmailTemplate } from '../data/emailSequences';
import { whatsappTemplates, WhatsAppTemplate } from '../data/whatsappTemplates';
import InvestorOnePagerView from './InvestorOnePagerView';
import PartnershipOutreachView from './PartnershipOutreachView';
import CybersecurityFrameworkView from './CybersecurityFrameworkView';
import SeoGeoStrategyView from './SeoGeoStrategyView';
import { Briefcase, Shield } from 'lucide-react';

interface ResourcesPageProps {
  lang?: 'en' | 'ar';
  onNavigate: (tab: string) => void;
}

const articlesList = [article1, article2, article3, article4, article5];

export default function ResourcesPage({ lang = 'en', onNavigate }: ResourcesPageProps) {
  const [activeMainTab, setActiveMainTab] = useState<'strategy' | 'blog' | 'linkedin' | 'emails' | 'whatsapp' | 'investor' | 'partnership' | 'security'>('strategy');
  const [strategySubTab, setStrategySubTab] = useState<'blueprint' | 'keywordDeck'>('blueprint');
  const [selectedArticleId, setSelectedArticleId] = useState<string>('uae-whatsapp-construction-risk');
  const [keywordQuery, setKeywordQuery] = useState('');
  const [intentFilter, setIntentFilter] = useState<string>('ALL');
  const [roleFilter, setRoleFilter] = useState<string>('ALL');
  const [bookmarkedArticles, setBookmarkedArticles] = useState<string[]>([]);
  const [showShareNotification, setShowShareNotification] = useState<string | null>(null);

  // LinkedIn Campaign UI State
  const [selectedWeek, setSelectedWeek] = useState<number | 'ALL'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [linkedinSearchQuery, setLinkedinSearchQuery] = useState<string>('');
  const [selectedPostId, setSelectedPostId] = useState<number>(1);
  const [copiedPostId, setCopiedPostId] = useState<number | null>(null);

  // Email Campaign UI State
  const [selectedSequenceId, setSelectedSequenceId] = useState<string>('demo-followup');
  const [selectedEmailId, setSelectedEmailId] = useState<string>('demo-1');
  const [searchEmailQuery, setSearchEmailQuery] = useState<string>('');
  const [copiedEmailId, setCopiedEmailId] = useState<string | null>(null);
  const [activeSubjectVariant, setActiveSubjectVariant] = useState<'A' | 'B'>('A');

  // WhatsApp Campaign UI State
  const [selectedWhatsAppId, setSelectedWhatsAppId] = useState<string>('whatsapp-demo-confirm');
  const [whatsAppSearchQuery, setWhatsAppSearchQuery] = useState<string>('');
  const [copiedWhatsAppId, setCopiedWhatsAppId] = useState<string | null>(null);
  const [whatsAppLang, setWhatsAppLang] = useState<'EN' | 'AR'>('EN');

  // Custom SEO Score Simulator State
  const [simulatedTitle, setSimulatedTitle] = useState('Construction Procurement System UAE');
  const [simulatedMeta, setSimulatedMeta] = useState('Secure localized procurement operations linking Tier-1 builders and suppliers.');

  const isRtl = lang === 'ar';

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedArticles(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const triggerShare = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`https://ardaca.com/resources/blog/${title.toLowerCase().replace(/\s+/g, '-')}`);
      setShowShareNotification(title);
      setTimeout(() => setShowShareNotification(null), 3000);
    }
  };

  const selectedArticle = useMemo(() => {
    return articlesList.find(a => a.id === selectedArticleId) || articlesList[0];
  }, [selectedArticleId]);

  // Keyword filtering logic
  const filteredKeywords = useMemo(() => {
    return targetKeywords.filter(k => {
      const matchQuery = k.keyword.toLowerCase().includes(keywordQuery.toLowerCase()) || 
                         k.description.toLowerCase().includes(keywordQuery.toLowerCase());
      const matchIntent = intentFilter === 'ALL' || k.intent.toUpperCase() === intentFilter;
      const matchRole = roleFilter === 'ALL' || k.targetRole.toUpperCase() === roleFilter.toUpperCase() || 
                        (roleFilter === 'DEVELOPER' && k.targetRole.toLowerCase().includes('developer')) ||
                        (roleFilter === 'CONTRACTOR' && k.targetRole.toLowerCase().includes('contractor'));
      return matchQuery && matchIntent && matchRole;
    });
  }, [keywordQuery, intentFilter, roleFilter]);

  // SEO Assessment Metric Calculations
  const seoMetrics = useMemo(() => {
    const titleLen = simulatedTitle.length;
    const metaLen = simulatedMeta.length;
    const titleOk = titleLen >= 30 && titleLen <= 60;
    const metaOk = metaLen >= 110 && metaLen <= 160;

    let score = 30;
    if (titleOk) score += 30;
    else if (titleLen > 0) score += 15;

    if (metaOk) score += 40;
    else if (metaLen > 0) score += 20;

    return { titleLen, metaLen, titleOk, metaOk, score };
  }, [simulatedTitle, simulatedMeta]);

  return (
    <div className="w-full bg-[#050D1A] text-zinc-100 min-h-screen">
      
      {/* Editorial Header */}
      <div className="relative border-b border-zinc-900 py-16 overflow-hidden bg-radial-gradient">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#C8973A]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 bg-[#C8973A]/10 border border-[#C8973A]/25 px-3 py-1 rounded-full text-[10px] font-mono text-[#C8973A] tracking-wider uppercase font-bold">
            <Sparkles size={10} className="text-[#C8973A] animate-pulse" />
            <span>{isRtl ? 'بوابة المعرفة وسيو المحتوى' : 'Sovereign Knowledge & SEO Hub'}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-sans tracking-tight font-extralight text-zinc-100 max-w-3xl mx-auto">
            {isRtl ? 'المعرفة التنفيذية وإستراتيجية سيو بالخليج' : 'Executive Authority & SEO Strategy Portal'}
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            {isRtl 
              ? 'تصفح دراسة الجدوى وتخطيط الكلمات المفتاحية الـ 20 لـ ardaca.com، مع قراءة المقالات التخصصية الخمسة الكاملة للشركات السيادية.' 
              : 'Audit the 6-month search framework, master target keywords, and browse 5 real-world expert research publications customized for high-stake construction projects.'}
          </p>

          {/* Main Module Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center p-1 bg-[#091424] border border-zinc-800 rounded-lg max-w-3xl mx-auto mt-8 select-none gap-1 sm:gap-0">
            <button
              onClick={() => setActiveMainTab('strategy')}
              className={`flex-1 py-2 px-3 rounded-md text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                activeMainTab === 'strategy' 
                  ? 'bg-[#C8973A] text-[#050D1A] font-bold shadow' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Cpu size={11} />
              <span>{isRtl ? 'إستراتيجية سيو المحتوى' : 'SEO Strategy'}</span>
            </button>
            <button
              onClick={() => setActiveMainTab('blog')}
              className={`flex-1 py-2 px-3 rounded-md text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                activeMainTab === 'blog' 
                  ? 'bg-[#C8973A] text-[#050D1A] font-bold shadow' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <BookOpen size={11} />
              <span>{isRtl ? 'المقالات الـ 5 الكاملة' : 'Articles (5)'}</span>
            </button>
            <button
              onClick={() => setActiveMainTab('linkedin')}
              className={`flex-1 py-2 px-3 rounded-md text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                activeMainTab === 'linkedin' 
                  ? 'bg-[#C8973A] text-[#050D1A] font-bold shadow' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Linkedin size={11} />
              <span>{isRtl ? 'حملة لينكد إن (٣٠)' : 'LinkedIn (30)'}</span>
            </button>
            <button
              onClick={() => setActiveMainTab('emails')}
              className={`flex-1 py-2 px-3 rounded-md text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                activeMainTab === 'emails' 
                  ? 'bg-[#C8973A] text-[#050D1A] font-bold shadow' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Mail size={11} />
              <span>{isRtl ? 'حملات البريد (٤)' : 'Email Flows (4)'}</span>
            </button>
            <button
              id="whatsapp_main_tab_button"
              onClick={() => setActiveMainTab('whatsapp')}
              className={`flex-1 py-2 px-3 rounded-md text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                activeMainTab === 'whatsapp' 
                  ? 'bg-[#C8973A] text-[#050D1A] font-bold shadow' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <MessageSquare size={11} />
              <span>{isRtl ? 'قوالب واتساب (١٠)' : 'WhatsApp (10)'}</span>
            </button>
            <button
              id="investor_main_tab_button"
              onClick={() => setActiveMainTab('investor')}
              className={`flex-1 py-2 px-3 rounded-md text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                activeMainTab === 'investor' 
                  ? 'bg-[#C8973A] text-[#050D1A] font-bold shadow' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Briefcase size={11} />
              <span>{isRtl ? 'بوابة المستثمر والثقة' : 'Investor & Trust'}</span>
            </button>
            <button
              id="partnership_main_tab_button"
              onClick={() => setActiveMainTab('partnership')}
              className={`flex-1 py-2 px-3 rounded-md text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                activeMainTab === 'partnership' 
                  ? 'bg-[#C8973A] text-[#050D1A] font-bold shadow' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Users size={11} />
              <span>{isRtl ? 'علاقات الشركاء (٥)' : 'GCC Partnership'}</span>
            </button>
            <button
              id="security_main_tab_button"
              onClick={() => setActiveMainTab('security')}
              className={`flex-1 py-2 px-3 rounded-md text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                activeMainTab === 'security' 
                  ? 'bg-[#C8973A] text-[#050D1A] font-bold shadow' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Shield size={11} />
              <span>{isRtl ? 'الأمن السيبراني (١٢)' : 'Cybersecurity'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Module 1: Comprehensive Content Strategy */}
      {activeMainTab === 'strategy' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fade-in">
          
          {/* Sub strategic navigator */}
          <div className="flex justify-center border-b border-zinc-850 pb-4">
            <div className="flex bg-[#050D1A] border border-zinc-900 p-1.5 rounded-xl gap-2 max-w-lg w-full">
              <button
                id="seo_blueprint_subtab_button"
                onClick={() => setStrategySubTab('blueprint')}
                className={`flex-1 py-2 px-4 rounded-lg font-mono text-xs uppercase tracking-wider transition-all cursor-pointer text-center ${
                  strategySubTab === 'blueprint'
                    ? 'bg-[#C8973A] text-[#050D1A] font-bold shadow-md'
                    : 'text-zinc-500 hover:text-zinc-350'
                }`}
              >
                {isRtl ? 'استراتيجية SEO & GEO (١٢)' : 'SaaS SEO & GEO Blueprint (12)'}
              </button>
              <button
                id="keyword_deck_subtab_button"
                onClick={() => setStrategySubTab('keywordDeck')}
                className={`flex-1 py-2 px-4 rounded-lg font-mono text-xs uppercase tracking-wider transition-all cursor-pointer text-center ${
                  strategySubTab === 'keywordDeck'
                    ? 'bg-[#C8973A] text-[#050D1A] font-bold shadow-md'
                    : 'text-zinc-500 hover:text-zinc-350'
                }`}
              >
                {isRtl ? 'الكلمات الدلالية ومخطط النشر' : 'Keywords & Calendar'}
              </button>
            </div>
          </div>

          {strategySubTab === 'blueprint' ? (
            <SeoGeoStrategyView isRtl={isRtl} />
          ) : (
            <div className="space-y-16">
              {/* Author Persona Card Spotlight */}
          <div className="bg-[#091424] border border-zinc-800/80 rounded-xl p-6 md:p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#C8973A]/10 border-b border-l border-[#C8973A]/25 rounded-bl-lg px-4 py-1.5 font-mono text-[9px] text-[#C8973A] tracking-wider uppercase font-bold">
              {isRtl ? 'المؤلف والخبير المعتمد' : 'RECOMMENDED AUTHOR PERSONA'}
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="h-20 w-20 bg-gradient-to-r from-[#C8973A] to-[#E0BA67] rounded-full flex items-center justify-center text-zinc-950 font-serif text-3xl font-bold border-2 border-zinc-800 shrink-0 shadow-lg">
                TA
              </div>
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-xl font-sans tracking-tight text-zinc-100 font-normal">
                  {authorPersona.name}
                </h3>
                <p className="text-xs font-mono text-[#C8973A] tracking-wider uppercase">
                  {authorPersona.title}
                </p>
                <p className="text-[11px] font-mono text-zinc-400">
                  {authorPersona.credentials}
                </p>
                <p className="text-zinc-300 text-sm font-light leading-relaxed max-w-4xl pt-1">
                  {authorPersona.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: Target Keyword Intelligence Core with interactive filtrations */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-zinc-900 pb-4">
              <div className="space-y-1">
                <h2 className="text-xl font-sans tracking-tight font-extralight text-zinc-100 flex items-center gap-2">
                  <SearchCode size={18} className="text-[#C8973A]" />
                  <span>{isRtl ? 'مصفوفة الكلمات الدلالية المستهدفة (20)' : 'Target Keyword Intelligence Deck (20)'}</span>
                </h2>
                <p className="text-xs font-mono text-zinc-400">
                  {isRtl ? 'الكلمات الرئيسية المصنفة تبعا لمستويات نية البحث وقوة المنافسة.' : 'Sovereign search intent clusters calibrated to capture top key procurement managers.'}
                </p>
              </div>
              
              {/* Reset Filters button */}
              {(intentFilter !== 'ALL' || roleFilter !== 'ALL' || keywordQuery !== '') && (
                <button 
                  onClick={() => {setIntentFilter('ALL'); setRoleFilter('ALL'); setKeywordQuery('');}}
                  className="text-[10px] font-mono text-[#C8973A] hover:underline cursor-pointer uppercase"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Micro Filters Control */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#091424]/40 p-4 border border-zinc-904 border-zinc-900 rounded-lg">
              {/* Search tool */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input
                  type="text"
                  placeholder={isRtl ? 'البحث عن كلمة...' : 'Search keywords...'}
                  value={keywordQuery}
                  onChange={(e) => setKeywordQuery(e.target.value)}
                  className="w-full bg-[#050D1A] border border-zinc-800 rounded px-3 py-2 pl-9 text-xs font-mono focus:border-[#C8973A] outline-none text-zinc-250"
                />
              </div>

              {/* Intent Filter */}
              <div>
                <select
                  value={intentFilter}
                  onChange={(e) => setIntentFilter(e.target.value)}
                  className="w-full bg-[#050D1A] border border-zinc-800 rounded px-3 py-2 text-xs font-mono focus:border-[#C8973A] outline-none text-zinc-300"
                >
                  <option value="ALL">SEARCH INTENT: ALL</option>
                  <option value="INFORMATIONAL">INFORMATIONAL</option>
                  <option value="COMMERCIAL">COMMERCIAL</option>
                  <option value="TRANSACTIONAL">TRANSACTIONAL</option>
                  <option value="COMPLIANCE">COMPLIANCE</option>
                </select>
              </div>

              {/* Role Filter */}
              <div>
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="w-full bg-[#050D1A] border border-zinc-800 rounded px-3 py-2 text-xs font-mono focus:border-[#C8973A] outline-none text-zinc-300"
                >
                  <option value="ALL">TARGET ROLE: ALL</option>
                  <option value="CONTRACTOR">MAIN CONTRACTOR / SUBCONTRACTOR</option>
                  <option value="DEVELOPER">DEVELOPER / OWNER</option>
                  <option value="CONSULTANT">CONSULTANT / PMC</option>
                  <option value="SUPPLIER">SUPPLIER</option>
                </select>
              </div>
            </div>

            {/* Keyword Grid Table */}
            <div className="overflow-x-auto border border-zinc-900 rounded-xl bg-[#091424]/20">
              <table className="w-full text-left text-xs font-mono border-collapse divide-y divide-zinc-900">
                <thead className="bg-[#091424]/60 text-zinc-400 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="px-6 py-4 text-left">Target Search Term</th>
                    <th className="px-6 py-4">Search Intent</th>
                    <th className="px-6 py-4">Est. Vol</th>
                    <th className="px-6 py-4">Difficulty</th>
                    <th className="px-6 py-4">Primary Segment</th>
                    <th className="px-6 py-4 max-w-xs">User Search context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900 text-zinc-300">
                  {filteredKeywords.map((k, index) => (
                    <tr key={index} className="hover:bg-[#091424]/40 transition-colors">
                      <td className="px-6 py-4 text-zinc-100 font-bold tracking-tight select-all">
                        {k.keyword}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                          k.intent === 'Informational' ? 'bg-blue-900/40 text-blue-300' :
                          k.intent === 'Commercial' ? 'bg-orange-900/40 text-orange-300' :
                          k.intent === 'Transactional' ? 'bg-emerald-900/40 text-emerald-300' :
                          'bg-purple-900/40 text-purple-300'
                        }`}>
                          {k.intent}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-zinc-400">{k.volume}</td>
                      <td className="px-6 py-4">
                        <span className={`text-[10px] ${
                          k.difficulty === 'Low' ? 'text-emerald-400' :
                          k.difficulty === 'Medium' ? 'text-yellow-400' : 'text-rose-500'
                        }`}>
                          {k.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[#C8973A]/80 font-bold">{k.targetRole}</td>
                      <td className="px-6 py-4 text-zinc-400 tracking-wide font-sans">{k.description}</td>
                    </tr>
                  ))}
                  {filteredKeywords.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center text-zinc-500 font-sans">
                        No keywords match your search and filter settings.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Interactive 6-Month Content Calendar */}
          <div className="space-y-6">
            <div className="border-b border-zinc-900 pb-4">
              <h2 className="text-xl font-sans tracking-tight font-extralight text-zinc-100 flex items-center gap-2">
                <Calendar size={18} className="text-[#C8973A]" />
                <span>{isRtl ? 'الخطة الزمنية الستة أشهر ومحرك النشر' : '6-Month Editorial Campaign & Calender'}</span>
              </h2>
              <p className="text-xs font-mono text-zinc-400">
                {isRtl ? 'النشر المتوازن شهريا لرفع مصداقية نطاق ardaca.com وعزل الكلمات المفتاحية الذليلة.' : 'Consistent monthly publications building deep authority across key compliance layers.'}
              </p>
            </div>

            {/* Calendar cards list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentCalendar.map((item) => {
                const isCompleted = item.articleNum <= 5;
                return (
                  <div 
                    key={item.articleNum}
                    className={`bg-[#091424]/30 border rounded-xl p-5 space-y-4 transition-all relative overflow-hidden ${
                      isCompleted ? 'border-[#C8973A]/30 hover:border-[#C8973A]/60' : 'border-zinc-900 hover:border-zinc-800'
                    }`}
                  >
                    {/* Corner Tag */}
                    <div className="absolute top-0 right-0 bg-[#0B1F3A] border-b border-l border-zinc-800 text-[9px] font-mono text-zinc-400 px-2.5 py-1 uppercase rounded-bl">
                      {item.month}
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-widest text-[#C8973A] block font-bold">
                        ARTICLE 0{item.articleNum}
                      </span>
                      <h4 className="text-sm font-sans font-medium line-clamp-2 text-zinc-200">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-xs text-zinc-400 font-light line-clamp-3 font-sans">
                      {item.synopsis}
                    </p>

                    <div className="pt-2 border-t border-zinc-900/60 flex items-center justify-between gap-2">
                      <div className="space-y-0.5 text-[10px] font-mono text-zinc-500">
                        <div>Key: <span className="text-zinc-300">{item.keyword}</span></div>
                        <div>Funnel: <span className="text-[#C8973A]/80 font-bold">{item.funnelStage}</span></div>
                      </div>

                      {isCompleted ? (
                        <button
                          onClick={() => {
                            setSelectedArticleId(item.keyword);
                            setActiveMainTab('blog');
                          }}
                          className="bg-[#C8973A] hover:opacity-90 text-[#050D1A] text-[9px] font-mono font-bold uppercase py-1 px-3.5 rounded flex items-center gap-1 transition-all cursor-pointer"
                        >
                          <span>READ NOW</span>
                          <ArrowRight size={10} />
                        </button>
                      ) : (
                        <span className="text-[9px] font-mono text-zinc-650 text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded italic">
                          SCHEDULED
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Internal Linking Network Maps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left box: Internal Linking */}
            <div className="bg-[#091424]/20 border border-zinc-900 rounded-xl p-6 md:p-8 space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-sans tracking-tight text-zinc-100 font-extralight flex items-center gap-2">
                  <Link2 size={16} className="text-[#C8973A]" />
                  <span>{isRtl ? 'بنية وهيكل الروابط الداخلية الموصى بها' : 'Internal Linking Architecture Map'}</span>
                </h3>
                <p className="text-xs font-mono text-zinc-500">
                  {isRtl ? 'ربط الأوراق الفنية ومقالات الامتثال ببعضها البعض لنقل قوة الباك لينك الداخلي.' : 'Distribute PageRank and establish clear semantic paths for Google crawlers.'}
                </p>
              </div>

              <div className="space-y-4 text-xs font-mono">
                {internalLinkingStructure.map((pair, idx) => (
                  <div key={idx} className="bg-[#051122]/60 p-4 border border-zinc-905 border-zinc-900 rounded-lg space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-zinc-400">
                      <span className="text-[#C8973A] font-bold text-[10px]">{pair.source}</span>
                      <ChevronRight size={12} className="text-zinc-600" />
                      <span className="text-zinc-400 text-[10px]">{pair.target}</span>
                    </div>
                    <div className="text-zinc-300 font-sans italic border-l-2 border-[#C8973A]/40 pl-3">
                      "Using anchor link: <span className="text-white hover:underline text-xs cursor-pointer underline decoration-[#C8973A] underline-offset-4">{pair.anchorText}</span>"
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right box: Real-time Live SEO Field Audit Score simulator */}
            <div className="bg-[#091424]/40 border border-[#C8973A]/25 rounded-xl p-6 md:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 bg-[#C8973A]/10 px-2 py-0.5 rounded text-[9px] font-mono text-[#C8973A] uppercase tracking-widest font-bold">
                  SEO LATEST SEARCH ENGINE METRICS
                </div>
                <h3 className="text-lg font-sans tracking-tight text-zinc-100 font-extralight flex items-center gap-2">
                  <Database size={16} className="text-[#C8973A]" />
                  <span>{isRtl ? 'محاكي جودة وسيو العناوين والوصف الهيكلي' : 'Live SEO SERP Metatags Sandbox'}</span>
                </h3>
                <p className="text-xs font-mono text-zinc-500 leading-relaxed font-sans">
                  On-page SEO optimization requires rigorous structural constraints. Keep Titles within 30-60 characters and Meta descriptions within 110-160 characters. Try typing below:
                </p>
              </div>

              <div className="space-y-4">
                {/* Simulated inputs */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>Simulated On-Page H1 / Title Tag</span>
                    <span className={seoMetrics.titleOk ? 'text-emerald-400' : 'text-orange-400'}>
                      {seoMetrics.titleLen} / 60 Chars
                    </span>
                  </div>
                  <input
                    type="text"
                    value={simulatedTitle}
                    onChange={(e) => setSimulatedTitle(e.target.value)}
                    className="w-full bg-[#050D1A] border border-zinc-800 rounded px-3 py-2 text-xs font-mono focus:border-[#C8973A] outline-none text-zinc-200"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>Simulated Meta Description (110-160 optimal)</span>
                    <span className={seoMetrics.metaOk ? 'text-emerald-400' : 'text-orange-400'}>
                      {seoMetrics.metaLen} / 160 Chars
                    </span>
                  </div>
                  <textarea
                    value={simulatedMeta}
                    onChange={(e) => setSimulatedMeta(e.target.value)}
                    rows={2}
                    className="w-full bg-[#050D1A] border border-zinc-800 rounded px-3 py-2 text-xs font-mono focus:border-[#C8973A] outline-none text-zinc-200 resize-none"
                  />
                </div>

                {/* Google Snippet Live View */}
                <div className="bg-[#050D1A] p-4 rounded border border-zinc-800 space-y-1.5 text-left text-xs font-sans">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
                    <span className="text-[#C8973A]">https://</span>
                    <span>ardaca.com</span>
                    <span>› blog</span>
                  </div>
                  <div className="text-blue-400 text-sm hover:underline cursor-pointer font-medium line-clamp-1">
                    {simulatedTitle || 'Your Article Title'}
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">
                    {simulatedMeta || 'Your meta description represents the emotional search hook targeting GCC procurement leads. Keep it clean.'}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-900/40 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="text-2xl font-mono text-[#C8973A] font-extrabold">{seoMetrics.score}%</div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">COMPLIANCE CODE SCORE</span>
                </div>
                {seoMetrics.score === 100 ? (
                  <span className="inline-flex items-center gap-1 bg-emerald-900/30 text-emerald-300 font-mono text-[9px] px-2.5 py-1 rounded font-bold">
                    <Check size={11} /> PERFECT STRUCTURAL MARKS
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 bg-orange-950/20 text-orange-400 font-mono text-[9px] px-2.5 py-1 rounded">
                    <AlertCircle size={11} /> CRITERIA UNFULFILLED
                  </span>
                )}
              </div>
            </div>

          </div>
          </div>
          )}

        </div>
      )}

      {/* Module 2: The 5 Full-Length Blog Articles View */}
      {activeMainTab === 'blog' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar Article List - 4 Cols */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest pl-2 mb-2 font-bold flex items-center gap-1">
                <BookOpen size={11} className="text-[#C8973A]" />
                <span>Editorial Board Select (5)</span>
              </div>

              <div className="space-y-3">
                {articlesList.map((art) => {
                  const isSelected = selectedArticleId === art.id;
                  const isBookmarked = bookmarkedArticles.includes(art.id);
                  return (
                    <div
                      key={art.id}
                      onClick={() => setSelectedArticleId(art.id)}
                      className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-[#091424] border-[#C8973A] shadow-md shadow-[#C8973A]/5' 
                          : 'bg-[#091424]/30 border-zinc-900 hover:border-zinc-800'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-[9px] font-mono tracking-widest text-[#C8973A] font-bold block uppercase">
                          {art.category}
                        </span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {isBookmarked && (
                            <Bookmark size={9} className="text-[#C8973A] fill-[#C8973A]" />
                          )}
                          <span className="text-[9px] font-mono text-zinc-500">
                            {art.readTime}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xs sm:text-sm font-sans font-medium text-zinc-250 text-zinc-100 line-clamp-2 mt-1.5">
                        {art.title}
                      </h3>

                      <p className="text-[11px] font-mono text-zinc-400 mt-2 hover:text-[#C8973A] inline-flex items-center gap-1">
                        <span>Read full article</span>
                        <ChevronRight size={10} />
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Internal Strategy Link Quick-Back */}
              <div className="p-4 bg-[#0B121E]/60 border border-zinc-900 rounded-xl space-y-2 mt-6">
                <span className="text-[10px] font-mono text-[#C8973A] uppercase tracking-wider block font-bold">Campaign Controls</span>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  The keywords and links in these articles are calibrated using our sovereign GCC keyword matrix.
                </p>
                <button
                  onClick={() => setActiveMainTab('strategy')}
                  className="text-xs font-mono text-white hover:underline uppercase tracking-wide flex items-center gap-1 cursor-pointer pt-1"
                >
                  <span>Review keyword dataset</span>
                  <ArrowRight size={12} className="text-[#C8973A]" />
                </button>
              </div>
            </div>

            {/* Read Frame Main Column - 8 Cols */}
            <div className="lg:col-span-8 bg-[#091424]/10 border border-zinc-900 rounded-2xl p-6 md:p-10 space-y-8 shadow-xl relative overflow-hidden">
              
              {/* Display Header */}
              <div className="space-y-4 text-left border-b border-zinc-900 pb-6 relative">
                
                {/* Meta preview simulation */}
                <div className="bg-[#050D1A]/75 border border-zinc-800/60 p-4 rounded-xl text-left space-y-2 font-mono text-[10px] text-zinc-400 mb-6 relative">
                  <div className="absolute top-2 right-3 text-[9px] text-[#C8973A] font-bold select-none">GOOGLE HEURISTIC VIEW</div>
                  <div><span className="text-zinc-500">SEO TITLE:</span> <span className="text-white select-all">{selectedArticle.seoTitle}</span></div>
                  <div><span className="text-zinc-500">META DESC:</span> <span className="text-zinc-300 select-all">{selectedArticle.metaDescription}</span></div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="px-3 py-1 bg-[#C8973A]/10 border border-[#C8973A]/20 rounded-full text-[10px] font-mono text-[#C8973A] tracking-wider uppercase font-bold">
                    {selectedArticle.category}
                  </span>
                  
                  {/* Share + Bookmark interactive toggles */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={(e) => triggerShare(selectedArticle.title, e)}
                      className="p-2 rounded bg-[#091424] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition cursor-pointer"
                      title="Copy simulated article URL"
                    >
                      <Share2 size={13} />
                    </button>
                    <button 
                      onClick={(e) => toggleBookmark(selectedArticle.id, e)}
                      className={`p-2 rounded border transition cursor-pointer flex items-center gap-1.5 text-xs font-mono ${
                        bookmarkedArticles.includes(selectedArticle.id)
                          ? 'bg-[#C8973A]/15 border-[#C8973A] text-[#C8973A]'
                          : 'bg-[#091424] border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                      }`}
                    >
                      <Bookmark size={13} className={bookmarkedArticles.includes(selectedArticle.id) ? 'fill-[#C8973A]' : ''} />
                      <span className="text-[10px] uppercase">{bookmarkedArticles.includes(selectedArticle.id) ? 'Bookmarked' : 'Save'}</span>
                    </button>
                  </div>
                </div>

                <h1 className="text-2xl md:text-4xl font-sans tracking-tight font-extralight text-zinc-100 max-w-3xl leading-tight">
                  {selectedArticle.title}
                </h1>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400 pt-2">
                  <div className="flex items-center gap-2">
                    <User size={13} className="text-[#C8973A]" />
                    <span>Written by: <strong className="text-zinc-250 text-zinc-200">{selectedArticle.author}</strong></span>
                  </div>
                  <div className="flex items-center gap-4 text-[11px] text-zinc-500">
                    <span>{selectedArticle.readTime}</span>
                    <span>•</span>
                    <span>Published: 2026/05</span>
                  </div>
                </div>
              </div>

              {/* Show Copy Copied notification */}
              {showShareNotification && (
                <div className="bg-emerald-950/40 border border-emerald-500/30 p-3 rounded-lg text-emerald-300 text-xs font-mono flex items-center gap-2 select-none animate-fade-in-down">
                  <CheckCircle2 size={14} />
                  <span>Interactive URL copied: <strong>https://ardaca.com/resources/blog/{selectedArticle.id}</strong></span>
                </div>
              )}

              {/* Image banner */}
              <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden border border-zinc-900 relative">
                <img 
                  src={selectedArticle.imageUrl} 
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover filter brightness-[0.75]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] to-transparent opacity-80" />
              </div>

              {/* Render Full LaTeX / Markdown Stylized Article Text */}
              <div className="text-zinc-300 text-sm md:text-base leading-relaxed text-left space-y-6 font-sans font-light max-w-none prose prose-invert">
                {selectedArticle.content.split('\n\n').map((paragraph, pIdx) => {
                  let text = paragraph.trim();
                  if (!text) return null;

                  // Parse simple Markdown headers
                  if (text.startsWith('### ')) {
                    return <h3 key={pIdx} className="text-lg md:text-xl font-sans font-normal text-zinc-100 tracking-tight pt-4 border-l-2 border-[#C8973A] pl-3">{text.replace('### ', '')}</h3>;
                  }
                  if (text.startsWith('#### ')) {
                    return <h4 key={pIdx} className="text-base font-semibold text-[#E5BA69] tracking-tight pt-2">{text.replace('#### ', '')}</h4>;
                  }
                  if (text.startsWith('* ')) {
                    return (
                      <ul key={pIdx} className="list-disc pl-6 space-y-2 text-zinc-300 text-sm md:text-sm">
                        {text.split('\n').map((li, lIdx) => (
                          <li key={lIdx}>{li.replace('* ', '').replace(/\*\*(.*?)\*\*/g, '$1')}</li>
                        ))}
                      </ul>
                    );
                  }

                  // Parse blockquotes and code regions
                  if (text.startsWith('`') && text.endsWith('`')) {
                    const blockText = text.replace(/`/g, '');
                    return (
                      <pre key={pIdx} className="bg-[#050D1A] border border-zinc-800 p-4 rounded-lg font-mono text-xs text-zinc-400 overflow-x-auto whitespace-pre-wrap leading-relaxed select-all">
                        {blockText}
                      </pre>
                    );
                  }

                  // Render tables
                  if (text.includes('|') && text.includes('---')) {
                    const rows = text.split('\n').filter(r => r.includes('|'));
                    const headers = rows[0].split('|').map(s => s.trim()).filter(Boolean);
                    const bodyRows = rows.slice(2).map(r => r.split('|').map(s => s.trim()).filter(Boolean));

                    return (
                      <div key={pIdx} className="overflow-x-auto border border-zinc-900 rounded-xl my-6 bg-[#050D1A]">
                        <table className="w-full text-left text-xs font-mono border-collapse divide-y divide-zinc-900">
                          <thead className="bg-[#091424]/80 text-[#C8973A] font-bold">
                            <tr>
                              {headers.map((h, hIdx) => (
                                <th key={hIdx} className="px-4 py-3">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-zinc-900 text-zinc-300">
                            {bodyRows.map((r, rIdx) => (
                              <tr key={rIdx} className="hover:bg-[#091424]/20">
                                {r.map((td, tdIdx) => (
                                  <td key={tdIdx} className="px-4 py-3 select-all">{td}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }

                  // Default simple paragraph with bolding parser
                  const parts = text.split(/\*\*(.*?)\*\*/g);
                  return (
                    <p key={pIdx} className="text-zinc-300 font-light text-sm md:text-sm tracking-wide leading-relaxed">
                      {parts.map((p, idx) => idx % 2 === 1 ? <strong key={idx} className="text-[#C8973A] font-bold">{p}</strong> : p)}
                    </p>
                  );
                })}
              </div>

              {/* Smart Contextual CTAs specific to each article */}
              <div className="bg-[#091424] border border-[#C8973A]/25 rounded-2xl p-6 md:p-8 text-center space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#C8973A]/10 border-b border-l border-[#C8973A]/25 rounded-bl-sm px-3 py-1 font-mono text-[8px] text-[#C8973A] uppercase tracking-wider font-extrabold select-none">
                  INTEGRATED SOVEREIGN CALL TO ACTION
                </div>

                <div className="space-y-2 max-w-xl mx-auto">
                  <h3 className="text-lg font-sans text-zinc-100 font-normal">
                    {selectedArticleId === 'uae-whatsapp-construction-risk' && 'Secure Your UAE Site Communications Legally'}
                    {selectedArticleId === 'gcc-subcontractor-management-guide' && 'Optimize Contractor Back-to-Back Variations'}
                    {selectedArticleId === 'bim-vs-boq-digital-quantity-surveying' && 'Bridge the BIM-to-BOQ Measurement Gap'}
                    {selectedArticleId === 'choosing-saudi-vision-2030-construction-platform' && 'Establish NCA Localized Compliance in Saudi'}
                    {selectedArticleId === 'uae-pdpl-construction-data-compliance-25' && 'Audit Biometrics and Passports Under UAE PDPL'}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed font-sans">
                    {selectedArticleId === 'uae-whatsapp-construction-risk' && 'Abandon chaotic unencrypted WhatsApp channels. Deploy audited, geotagged chat workflows matching FIDIC criteria.'}
                    {selectedArticleId === 'gcc-subcontractor-management-guide' && 'Prevent price-collusion and securely manage multi-tier MEP sub-packages on our unified portal.'}
                    {selectedArticleId === 'bim-vs-boq-digital-quantity-surveying' && 'Export municipality-compliant digital bills linked directly to real-time quantities using Ardaca BuildFlow.'}
                    {selectedArticleId === 'choosing-saudi-vision-2030-construction-platform' && 'Satisfy Saudi on-shore cloud data mandates, Balady portals, and Aramco Schedule Q templates instantly.'}
                    {selectedArticleId === 'uae-pdpl-construction-data-compliance-25' && 'Centralize passport and biometric records inside our fully secure UAE-hosted directory with auto-purge logs.'}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <button
                    onClick={() => {
                      if (selectedArticleId === 'uae-whatsapp-construction-risk' || selectedArticleId === 'gcc-subcontractor-management-guide') {
                        onNavigate('contractor_dashboard');
                      } else if (selectedArticleId === 'bim-vs-boq-digital-quantity-surveying') {
                        onNavigate('consultant_dashboard');
                      } else if (selectedArticleId === 'choosing-saudi-vision-2030-construction-platform' || selectedArticleId === 'uae-pdpl-construction-data-compliance-25') {
                        onNavigate('client_dashboard');
                      } else {
                        onNavigate('landing');
                      }
                    }}
                    className="w-full sm:w-auto bg-[#C8973A] hover:bg-[#C8973A]/90 text-[#050D1A] font-extrabold px-6 py-2.5 rounded text-xs tracking-wider uppercase cursor-pointer"
                  >
                    {selectedArticleId === 'uae-whatsapp-construction-risk' && 'Open Contractor Sandbox Hub'}
                    {selectedArticleId === 'gcc-subcontractor-management-guide' && 'Deploy Contractor Bidding Room'}
                    {selectedArticleId === 'bim-vs-boq-digital-quantity-surveying' && 'Launch Consultant Surveyor View'}
                    {selectedArticleId === 'choosing-saudi-vision-2030-construction-platform' && 'Explore Saudi PMC Sovereign System'}
                    {selectedArticleId === 'uae-pdpl-construction-data-compliance-25' && 'Simulate Dubai Asset Escrow Portal'}
                  </button>
                  <button
                    onClick={() => onNavigate('register_kyc')}
                    className="w-full sm:w-auto bg-transparent hover:bg-zinc-800 text-zinc-350 border border-zinc-800 font-bold px-6 py-2.5 rounded text-xs tracking-wide uppercase cursor-pointer uppercase font-mono tracking-wider text-zinc-300"
                  >
                    Fast-Track KYC Registration
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Module 3: 30-Day LinkedIn Launch Campaign Explorer */}
      {activeMainTab === 'linkedin' && (() => {
        // Dynamic Filter Calculations
        const filteredLinkedinPosts = linkedinPosts.filter(post => {
          const matchWeek = selectedWeek === 'ALL' || post.week === selectedWeek;
          const matchCategory = selectedCategory === 'ALL' || post.category === selectedCategory;
          const matchSearch = linkedinSearchQuery === '' || 
            post.title.toLowerCase().includes(linkedinSearchQuery.toLowerCase()) || 
            post.copy.toLowerCase().includes(linkedinSearchQuery.toLowerCase()) ||
            post.hashtags.some(tag => tag.toLowerCase().includes(linkedinSearchQuery.toLowerCase()));
          return matchWeek && matchCategory && matchSearch;
        });

        const activePost = filteredLinkedinPosts.find(p => p.day === selectedPostId) || filteredLinkedinPosts[0] || linkedinPosts[0];

        const handleCopyPostCopy = (post: LinkedInPost) => {
          if (navigator.clipboard) {
            navigator.clipboard.writeText(post.copy + "\n\n" + post.hashtags.map(t => `#${t}`).join(' '));
            setCopiedPostId(post.day);
            setTimeout(() => setCopiedPostId(null), 2500);
          }
        };

        const getCategoryStyle = (cat: string) => {
          switch (cat) {
            case 'GCC Challenge':
              return 'border bg-red-950/20 text-red-400 border-red-900/40';
            case 'Product Feature':
              return 'border bg-blue-950/20 text-blue-400 border-blue-900/40';
            case 'Founder Story':
              return 'border bg-purple-950/20 text-purple-400 border-purple-900/40';
            case 'Customer Scenario':
              return 'border bg-green-950/20 text-green-400 border-green-900/40';
            case 'Industry Insight':
              return 'border bg-yellow-950/20 text-[#C8973A] border-amber-900/40';
            case 'Milestone/Announcement':
              return 'border bg-teal-950/20 text-teal-400 border-teal-900/40';
            case 'Engagement Question':
              return 'border bg-cyan-950/20 text-cyan-400 border-cyan-900/40';
            default:
              return 'border bg-zinc-900/50 text-zinc-400 border-zinc-800';
          }
        };

        const getPostTypeLabelStyle = (type: string) => {
          switch (type) {
            case 'Thought leadership':
              return 'bg-amber-500/10 text-amber-300 border border-amber-500/20';
            case 'Product feature':
              return 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20';
            case 'Social proof':
              return 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20';
            case 'Behind the build':
              return 'bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20';
            case 'CTA':
              return 'bg-rose-500/10 text-rose-300 border border-rose-500/20';
            default:
              return 'bg-zinc-500/10 text-zinc-300 border border-zinc-500/10';
          }
        };

        // Strict Requirement Checking Counter
        const statsAudit = {
          challenges: linkedinPosts.filter(p => p.category === 'GCC Challenge').length,
          features: linkedinPosts.filter(p => p.category === 'Product Feature').length,
          founder: linkedinPosts.filter(p => p.category === 'Founder Story').length,
          scenario: linkedinPosts.filter(p => p.category === 'Customer Scenario').length,
          insight: linkedinPosts.filter(p => p.category === 'Industry Insight').length,
          announcement: linkedinPosts.filter(p => p.category === 'Milestone/Announcement').length,
          questions: linkedinPosts.filter(p => p.category === 'Engagement Question').length,
          total: linkedinPosts.length
        };

        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fade-in">
            
            {/* Campaign Theme & Timeline Narrative Arc Progress Card */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 bg-[#091424] border border-zinc-800/80 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold/10 border-b border-l border-gold/25 rounded-bl-lg px-4 py-1.5 font-mono text-[9px] text-gold tracking-wider uppercase font-bold">
                {isRtl ? 'الهيكل السردي لـ ٣٠ يوماً' : '30-DAY BRAND LAUNCH TIMELINE'}
              </div>

              {campaignThemes.map((theme) => {
                const isActiveWeek = selectedWeek === 'ALL' || selectedWeek === theme.week;
                return (
                  <button
                    key={theme.week}
                    id={`campaign_theme_week_${theme.week}`}
                    onClick={() => setSelectedWeek(theme.week)}
                    className={`text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between space-y-3 cursor-pointer ${
                      selectedWeek === theme.week 
                        ? 'border-gold bg-[#C8973A]/10 text-white shadow-md' 
                        : 'border-zinc-800/60 bg-[#060E1A] hover:border-zinc-700 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-gold">
                          {theme.week === 1 && (isRtl ? 'الأسبوع الأول' : 'WEEK 1')}
                          {theme.week === 2 && (isRtl ? 'الأسبوع الثاني' : 'WEEK 2')}
                          {theme.week === 3 && (isRtl ? 'الأسبوع الثالث' : 'WEEK 3')}
                          {theme.week === 4 && (isRtl ? 'الأسبوع الرابع' : 'WEEK 4')}
                        </span>
                        {selectedWeek === theme.week && <span className="h-1.5 w-1.5 bg-gold rounded-full" />}
                      </div>
                      <h4 className="font-sans font-medium text-xs text-zinc-150 tracking-tight">
                        {theme.title}
                      </h4>
                    </div>
                    <p className="text-[11px] font-light leading-relaxed text-zinc-450 line-clamp-3 pt-1 border-t border-zinc-900/50">
                      {theme.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Campaign Metrics Compliance Audit Sidecar */}
            <div className="bg-[#091424]/60 border border-zinc-800 rounded-xl p-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center select-none">
              <div className="col-span-2 text-left flex flex-col justify-center border-b sm:border-b-0 pb-3 sm:pb-0 sm:border-r border-zinc-800 pr-3">
                <span className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">Campaign Audit Audit</span>
                <span className="text-[10px] text-zinc-500 font-light mt-0.5 leading-snug">Strict verification of requested GCC structural compliance counts</span>
              </div>
              <div className="flex flex-col justify-center py-1">
                <span className="text-sm font-mono text-emerald-400 font-bold">{statsAudit.challenges} / 5</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 mt-1">GCC Challenges</span>
              </div>
              <div className="flex flex-col justify-center py-1">
                <span className="text-sm font-mono text-emerald-400 font-bold">{statsAudit.features} / 4</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 mt-1">Features</span>
              </div>
              <div className="flex flex-col justify-center py-1">
                <span className="text-sm font-mono text-emerald-400 font-bold">{statsAudit.founder} / 3</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 mt-1">Founder Stories</span>
              </div>
              <div className="flex flex-col justify-center py-1">
                <span className="text-sm font-mono text-emerald-400 font-bold">{statsAudit.scenario} / 4</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 mt-1 font-sans">Scenarios</span>
              </div>
              <div className="flex flex-col justify-center py-1">
                <span className="text-sm font-mono text-emerald-400 font-bold">{statsAudit.insight} / 5</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 mt-1">Insights</span>
              </div>
              <div className="flex flex-col justify-center py-1">
                <span className="text-sm font-mono text-emerald-400 font-bold">{statsAudit.announcement + statsAudit.questions} / 9</span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 mt-1">Milestones & Qs</span>
              </div>
            </div>

            {/* Interactive Filters Controls Row */}
            <div className="flex flex-col md:flex-row items-center gap-4 bg-[#091424] border border-zinc-800 p-4 rounded-xl">
              
              {/* Search Box */}
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                <input
                  id="linkedin_campaign_search"
                  type="text"
                  placeholder={isRtl ? 'ابحث في محتوى المنشورات...' : 'Search LinkedIn copy / hashtags...'}
                  value={linkedinSearchQuery}
                  onChange={(e) => setLinkedinSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 w-full text-xs bg-[#06101D] border border-zinc-800 rounded text-zinc-250 focus:border-gold focus:outline-none placeholder-zinc-500"
                />
              </div>

              {/* Week filter switch bar */}
              <div className="flex flex-wrap items-center gap-1.5 grow">
                <button
                  onClick={() => setSelectedWeek('ALL')}
                  className={`px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider border cursor-pointer ${
                    selectedWeek === 'ALL' 
                      ? 'bg-[#C8973A] text-zinc-950 border-[#C8973A] font-bold' 
                      : 'bg-[#06101D] border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {isRtl ? 'جميع الأسابيع' : 'All Weeks'}
                </button>
                {[1, 2, 3, 4].map(w => (
                  <button
                    key={w}
                    onClick={() => setSelectedWeek(w)}
                    className={`px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider border cursor-pointer ${
                      selectedWeek === w 
                        ? 'bg-[#C8973A] text-zinc-950 border-[#C8973A] font-bold' 
                        : 'bg-[#06101D] border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {isRtl ? `الأسبوع ${w}` : `Week ${w}`}
                  </button>
                ))}
              </div>

              {/* Category selector dropdown */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <SlidersHorizontal size={12} className="text-gold" />
                <select
                  id="linkedin_category_select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-[#06101D] border border-zinc-800 rounded text-xs px-3 py-1.5 text-zinc-300 focus:border-gold focus:outline-none grow md:grow-0"
                >
                  <option value="ALL">{isRtl ? 'جميع التصنيفات' : 'All Categories'}</option>
                  <option value="GCC Challenge">{isRtl ? 'تحديات البناء بالخليج' : 'GCC Construction Challenge'}</option>
                  <option value="Product Feature">{isRtl ? 'مزايا منصة أردكا' : 'Product Feature Highlight'}</option>
                  <option value="Founder Story">{isRtl ? 'قصة التأسيس والفريق' : 'Founder / Team Story'}</option>
                  <option value="Customer Scenario">{isRtl ? 'سيناريوهات واقعية للعملاء' : 'Customer Scenario Case'}</option>
                  <option value="Industry Insight">{isRtl ? 'رؤى وتحليلات الصناعة' : 'Industry Insight Analysis'}</option>
                  <option value="Milestone/Announcement">{isRtl ? 'المحطات والإعلانات الهامة' : 'Milestone / Announcement'}</option>
                  <option value="Engagement Question">{isRtl ? 'أسئلة تفاعلية للجمهور' : 'Engagement Question'}</option>
                </select>
              </div>

            </div>

            {/* Split Screen Panel Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: List Navigator */}
              <div className="lg:col-span-5 space-y-3 h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800 custom-scroll-zone">
                {filteredLinkedinPosts.length === 0 ? (
                  <div className="border border-dashed border-zinc-800 rounded-xl p-8 text-center text-zinc-500 text-xs">
                    <HelpCircle size={24} className="mx-auto mb-2 text-zinc-600" />
                    No posts matching selected filters. Try adjusting search criteria.
                  </div>
                ) : (
                  filteredLinkedinPosts.map((post) => {
                    const isSelected = selectedPostId === post.day;
                    return (
                      <button
                        key={post.day}
                        id={`linkedin_post_card_${post.day}`}
                        onClick={() => setSelectedPostId(post.day)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-200 block cursor-pointer ${
                          isSelected 
                            ? 'border-gold bg-[#0E1A2D] shadow-md ring-1 ring-gold/25' 
                            : 'border-zinc-800 bg-[#091424] hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          {/* Calendar day indicator */}
                          <div className={`h-11 w-11 rounded-lg shrink-0 flex flex-col justify-center items-center font-mono leading-none border transition-all duration-200 ${
                            isSelected ? 'bg-gold text-zinc-950 border-gold' : 'bg-[#050D1A] text-zinc-300 border-zinc-800'
                          }`}>
                            <span className="text-[9px] uppercase tracking-wider font-semibold">DAY</span>
                            <span className="text-base font-extrabold mt-0.5">{post.day}</span>
                          </div>

                          <div className="space-y-1.5 select-none leading-none grow min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-gold">
                                WEEK {post.week}
                              </span>
                              <span className={`text-[8px] font-mono px-2 py-0.5 rounded font-bold uppercase ${getCategoryStyle(post.category)}`}>
                                {post.category}
                              </span>
                            </div>
                            <h5 className={`font-sans font-medium text-xs tracking-tight line-clamp-1 truncate ${
                              isSelected ? 'text-zinc-150 font-bold' : 'text-zinc-300'
                            }`}>
                              {post.title}
                            </h5>
                            <div className="flex items-center gap-3 pt-1">
                              <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${getPostTypeLabelStyle(post.type)}`}>
                                {post.type}
                              </span>
                              <span className="text-[10px] font-mono text-zinc-500">
                                ~{Math.round(post.copy.split(/\s+/).length)} words
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Right Column: Selected Post Detail & Beautiful LinkedIn Mock-up Preview */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Visual Concept Instruction Slot */}
                <div className="bg-[#091424] border border-zinc-880 rounded-xl p-4 md:p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-zinc-850 pb-2">
                    <span className="text-[9px] font-mono text-gold tracking-widest font-extrabold uppercase flex items-center gap-1.5">
                      <Compass size={11} className="text-gold" />
                      {isRtl ? 'مفهوم التصميم المرئي المصاحب للمنشور' : 'RECOMMENDED VISUAL MEDIA STRATEGY'}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">Graphic Asset Coordinates</span>
                  </div>
                  <div className="bg-[#050D1A] rounded-lg p-3.5 border border-zinc-850 flex items-start gap-3.5">
                    <div className="h-10 w-10 shrink-0 bg-gradient-to-tr from-amber-500/20 to-gold/20 border border-gold/30 rounded flex items-center justify-center">
                      <Layers size={18} className="text-gold" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-mono text-zinc-400 font-bold">Image / Infographic Layout Concept:</span>
                      <p className="text-zinc-350 text-xs font-light leading-relaxed">
                        {activePost.visual}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Main LinkedIn Mock-up Card */}
                <div className="bg-[#091424] border border-zinc-800 rounded-2xl shadow-xl overflow-hidden">
                  
                  {/* LinkedIn Header Header */}
                  <div className="p-4 md:p-5 bg-zinc-950/20 border-b border-zinc-850 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#050D1A] to-[#122238] border border-gold/45 flex items-center justify-center font-serif text-gold text-sm font-bold shadow-sm shrink-0">
                        TM
                      </div>
                      <div className="leading-tight">
                        <div className="flex items-center gap-1.5">
                          <span className="font-sans font-semibold text-xs text-zinc-150">Tariq Al-Mansoor FRICS</span>
                          <span className="text-[9px] font-mono text-zinc-500 bg-zinc-800/40 px-1 py-0.2 rounded font-bold">1st</span>
                        </div>
                        <p className="text-[10px] text-zinc-450 font-mono mt-0.5 max-w-sm md:max-w-md truncate">
                          Founder & MD • Ardaca BuildFlow (GCC) • Sovereign Construction Controls
                        </p>
                        <span className="text-[9px] text-[#C8973A] font-mono mt-0.5 block flex items-center gap-1">
                          <span>2d • Edited •</span>
                          <Globe size={9} className="inline text-zinc-500" />
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleCopyPostCopy(activePost)}
                        className={`text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer ${
                          copiedPostId === activePost.day 
                            ? 'bg-emerald-500/10 border-emerald-500/45 text-emerald-400' 
                            : 'bg-zinc-950 hover:bg-zinc-800 border-zinc-800 text-zinc-300'
                        }`}
                      >
                        {copiedPostId === activePost.day ? (
                          <>
                            <Check size={11} />
                            <span>COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy size={11} />
                            <span>COPY COPY</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* LinkedIn Body Content */}
                  <div className="p-5 overflow-y-auto max-h-[380px] space-y-4 font-normal bg-gradient-to-b from-[#091424] to-[#070F1B] line-preview-layer text-zinc-200">
                    <div className="inline-flex items-center gap-1.5 bg-gold/10 px-2 py-0.5 rounded border border-gold/20 font-mono text-[9px] text-gold uppercase tracking-wider font-extrabold mb-1">
                      DAY {activePost.day} POST copy
                    </div>
                    
                    {/* Rendered copy paragraph lines */}
                    <div className="space-y-4 font-sans text-xs md:text-sm tracking-wide leading-relaxed text-zinc-150 select-text whitespace-pre-wrap">
                      {activePost.copy}
                    </div>

                    {/* Hashtags Segment */}
                    <div className="pt-2 border-t border-zinc-850 flex flex-wrap gap-1.5">
                      {activePost.hashtags.map((tag, tIdx) => (
                        <button
                          key={tIdx}
                          onClick={() => setLinkedinSearchQuery(tag)}
                          className="text-[10px] font-mono font-medium text-gold hover:underline"
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Social Stats Block */}
                  <div className="px-5 py-3 border-t border-zinc-850 bg-zinc-950/20 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span className="hover:underline cursor-pointer flex items-center gap-1">
                      <Linkedin size={11} className="text-[#0077B5]" />
                      <span>👍 142 Likes • 48 Comments</span>
                    </span>
                    <span className="hover:underline cursor-pointer">12 Shares</span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        );
      })()}

      {/* Module 4: 4 Systemic Email Automation Flows */}
      {activeMainTab === 'emails' && (() => {
        const activeSequence = emailSequences.find(s => s.id === selectedSequenceId) || emailSequences[0];
        const activeEmails = activeSequence.emails;

        // Automatically preserve selected email bounds if switching sequences
        const activeEmail = activeEmails.find(e => e.id === selectedEmailId) || activeEmails[0];

        const handleCopyEmailText = (email: EmailTemplate) => {
          if (navigator.clipboard) {
            const chosenSubject = activeSubjectVariant === 'A' ? email.subjectA : email.subjectB;
            const textToCopy = `Subject Line: ${chosenSubject}\nPreview Text: ${email.previewText}\n\n${email.body}\n\nCTA: ${email.ctaText} -> ${email.ctaDestination}`;
            navigator.clipboard.writeText(textToCopy);
            setCopiedEmailId(email.id);
            setTimeout(() => setCopiedEmailId(null), 2500);
          }
        };

        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fade-in text-zinc-100">
            
            {/* Top Level Sequence Selector Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {emailSequences.map((seq) => {
                const isActive = selectedSequenceId === seq.id;
                return (
                  <button
                    key={seq.id}
                    id={`email_sequence_button_${seq.id}`}
                    onClick={() => {
                      setSelectedSequenceId(seq.id);
                      setSelectedEmailId(seq.emails[0].id);
                    }}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer relative overflow-hidden ${
                      isActive 
                        ? 'border-gold bg-[#C8973A]/10 text-white shadow-xl ring-1 ring-gold/20' 
                        : 'border-zinc-800/80 bg-[#091424] hover:bg-[#0d1c31] text-zinc-400 hover:text-zinc-100'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute top-0 right-0 bg-[#C8973A] text-zinc-950 font-mono text-[8px] font-extrabold px-2.5 py-0.5 rounded-bl uppercase tracking-wider">
                        Active Flow
                      </div>
                    )}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="p-1 px-1.5 bg-[#050D1A] rounded text-[9px] font-mono font-bold text-gold border border-zinc-900 leading-none">
                          {seq.emails.length} Emails
                        </span>
                      </div>
                      <h4 className={`font-sans font-medium text-xs tracking-tight ${isActive ? 'text-zinc-100 font-bold' : 'text-zinc-200'}`}>
                        {seq.name}
                      </h4>
                    </div>
                    <p className="text-[11px] font-light leading-relaxed text-zinc-450 line-clamp-3 pt-3 border-t border-zinc-900/40">
                      {seq.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Strategic Overview Brief Room */}
            <div className="bg-[#091424] border border-zinc-850 rounded-xl p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#C8973A]/5 border-b border-l border-[#C8973A]/15 rounded-bl-xl px-5 py-2 font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                Flow Architecture
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <span className="text-[9px] font-mono tracking-wider text-gold uppercase block font-bold mb-1 col-span-1">Target Persona Group</span>
                  <p className="text-xs text-zinc-200 font-medium leading-relaxed">{activeSequence.targetAudience}</p>
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-wider text-gold uppercase block font-bold mb-1">Core Campaign Goal</span>
                  <p className="text-xs text-zinc-200 font-medium leading-relaxed">{activeSequence.goal}</p>
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-wider text-gold uppercase block font-bold mb-1">Trigger Schedule</span>
                  <p className="text-xs text-zinc-200 font-medium leading-relaxed">
                    {activeSequence.id === 'demo-followup' && 'Inbound action tracking (Immediate to Day 5)'}
                    {activeSequence.id === 'trial-onboarding' && 'Automatic registration signals (Days 1, 2, 4, 7, 14, 21, 30)'}
                    {activeSequence.id === 're-engagement' && '7 days of workspace zero-active telemetry'}
                    {activeSequence.id === 'enterprise-outbound' && 'Outbound sales outreach targeting decision buyers'}
                  </p>
                </div>
              </div>
            </div>

            {/* Split Screen Explorer layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Email Steps Navigator */}
              <div className="lg:col-span-5 space-y-3 max-h-[580px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800 custom-scroll-zone">
                {activeEmails.map((email, idx) => {
                  const isSelected = selectedEmailId === email.id;
                  return (
                    <button
                      key={email.id}
                      id={`email_item_card_${email.id}`}
                      onClick={() => {
                        setSelectedEmailId(email.id);
                        setActiveSubjectVariant('A'); // Reset A/B variant to general default
                      }}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 block cursor-pointer ${
                        isSelected 
                          ? 'border-gold bg-[#0E1A2D] shadow-md ring-1 ring-gold/20' 
                          : 'border-zinc-800 bg-[#091424] hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Step Circle Badge */}
                        <div className={`h-9 w-9 rounded-full shrink-0 flex items-center justify-center font-mono border transition-all duration-200 text-xs font-bold ${
                          isSelected ? 'bg-gold text-zinc-950 border-gold' : 'bg-[#050D1A] text-zinc-400 border-zinc-800'
                        }`}>
                          {idx + 1}
                        </div>

                        <div className="space-y-1 select-none leading-none grow min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-gold">
                              {email.name.split(':')[0]}
                            </span>
                            <span className="text-[9px] font-mono text-zinc-500">
                              Step {email.sequenceStep}
                            </span>
                          </div>
                          <h5 className={`font-sans font-medium text-xs tracking-tight line-clamp-1 truncate ${
                            isSelected ? 'text-zinc-150 font-bold' : 'text-zinc-300'
                          }`}>
                            {email.subjectA}
                          </h5>
                          <p className="text-[10px] text-zinc-500 font-medium truncate pt-1">
                            {email.previewText}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Custom Interactive Email Mock-up Sandbox */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Subject Selector segment with A/B Variant choices */}
                <div className="bg-[#091424] border border-zinc-850 p-4 rounded-xl space-y-3">
                  <div className="flex items-center justify-between border-b border-zinc-850 pb-2">
                    <span className="text-[9px] font-mono text-gold tracking-widest font-extrabold uppercase flex items-center gap-1.5">
                      <Send size={11} className="text-gold" />
                      Subject Line A/B Optimization Variants
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Executive Score Checked
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setActiveSubjectVariant('A')}
                      className={`text-left p-3 rounded-lg border transition-all cursor-pointer ${
                        activeSubjectVariant === 'A'
                          ? 'border-gold bg-[#C8973A]/5 text-white ring-1 ring-gold/15'
                          : 'border-zinc-800 bg-[#06101D] text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-bold text-gold uppercase">Subject Variant A</span>
                        {activeSubjectVariant === 'A' && <span className="h-2 w-2 bg-gold rounded-full" />}
                      </div>
                      <p className="text-xs font-sans font-medium line-clamp-1 mt-1">{activeEmail.subjectA}</p>
                    </button>

                    <button
                      onClick={() => setActiveSubjectVariant('B')}
                      className={`text-left p-3 rounded-lg border transition-all cursor-pointer ${
                        activeSubjectVariant === 'B'
                          ? 'border-gold bg-[#C8973A]/5 text-white ring-1 ring-gold/15'
                          : 'border-zinc-800 bg-[#06101D] text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-bold text-gold uppercase">Subject Variant B</span>
                        {activeSubjectVariant === 'B' && <span className="h-2 w-2 bg-gold rounded-full" />}
                      </div>
                      <p className="text-xs font-sans font-medium line-clamp-1 mt-1">{activeEmail.subjectB}</p>
                    </button>
                  </div>
                </div>

                {/* Main Interactive Email Body Newsletter Client Frame */}
                <div className="bg-[#091424] border border-zinc-800 rounded-2xl shadow-xl overflow-hidden">
                  
                  {/* Email Client Top Bar */}
                  <div className="p-4 md:p-5 bg-zinc-950/25 border-b border-zinc-850 flex items-center justify-between">
                    <div className="space-y-1 grow min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-mono text-zinc-400">From:</span>
                        <span className="text-xs font-sans font-semibold text-zinc-200">Tariq Al-Mansoor &lt;tariq@ardaca.com&gt;</span>
                      </div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-mono text-zinc-400">Subject:</span>
                        <span className="text-xs font-sans font-medium text-gold truncate select-all">
                          {activeSubjectVariant === 'A' ? activeEmail.subjectA : activeEmail.subjectB}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-mono text-zinc-400">To:</span>
                        <span className="text-xs font-sans text-zinc-300 italic font-light">&lt;decision_maker@gcc_contractor.com&gt;</span>
                      </div>
                    </div>

                    <div className="ml-4 shrink-0">
                      <button
                        onClick={() => handleCopyEmailText(activeEmail)}
                        className={`text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer ${
                          copiedEmailId === activeEmail.id 
                            ? 'bg-emerald-500/10 border-emerald-500/45 text-emerald-400 animate-pulse' 
                            : 'bg-zinc-950 hover:bg-zinc-800 border-zinc-800 text-zinc-300'
                        }`}
                      >
                        {copiedEmailId === activeEmail.id ? (
                          <>
                            <Check size={11} />
                            <span>COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy size={11} />
                            <span>COPY COPY</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Mail Body Frame */}
                  <div className="p-6 md:p-8 bg-gradient-to-b from-[#091424] to-[#060E1A] text-zinc-200 text-xs md:text-sm tracking-wide leading-relaxed font-sans space-y-6">
                    
                    {/* Preview Text Indicator Bar */}
                    <div className="bg-[#050D1A]/60 px-3 py-2 rounded border border-zinc-850 font-mono text-[9px] text-zinc-400 flex items-center gap-2">
                      <span className="font-extrabold uppercase text-gold shrink-0">Preheader text:</span>
                      <span className="truncate italic font-light">&quot;{activeEmail.previewText}&quot;</span>
                    </div>

                    {/* Dynamic Mail Copy Blocks parsed line-by-line */}
                    <div className="text-zinc-150 leading-relaxed space-y-4 font-sans select-all whitespace-pre-wrap">
                      {activeEmail.body}
                    </div>

                    {/* Styled Interactive Button Call To Action representation */}
                    <div className="pt-6 border-t border-zinc-850/60 flex flex-col items-center text-center space-y-2.5">
                      <a
                        href={activeEmail.ctaDestination}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate('onboarding'); // Simulate routing to onboarding workflow
                        }}
                        className="inline-flex items-center gap-2 bg-[#C8973A] text-zinc-950 px-6 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider font-extrabold hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer"
                      >
                        <span>{activeEmail.ctaText}</span>
                        <ArrowRight size={12} className="text-zinc-950 stroke-[3]" />
                      </a>
                      <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                        Destination Target: {activeEmail.ctaDestination}
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        );
      })()}

      {/* Module 5: 10 Official WhatsApp Business API Standardized Templates */}
      {activeMainTab === 'whatsapp' && (() => {
        // Filter variables
        const activeTemplates = whatsappTemplates.filter(t => {
          const matchesSearch = t.name.toLowerCase().includes(whatsAppSearchQuery.toLowerCase()) || 
                                t.bodyText.toLowerCase().includes(whatsAppSearchQuery.toLowerCase());
          return matchesSearch;
        });

        const activeTemplate = whatsappTemplates.find(t => t.id === selectedWhatsAppId) || whatsappTemplates[0];
        
        // Check if Arabic version is available for the selected template
        const hasArabic = !!activeTemplate.arabicVersion;
        const currentLang = hasArabic ? whatsAppLang : 'EN';

        // Variable legends mapper helper for UX
        const getVariableLegend = (templateId: string): string[] => {
          switch (templateId) {
            case 'whatsapp-demo-confirm':
              return ['{{1}}: Contact Name', '{{2}}: Company Name', '{{3}}: Appointment Date', '{{4}}: Appointment Time', '{{5}}: Secure Meeting Link'];
            case 'whatsapp-trial-welcome':
              return ['{{1}}: Recipient Name', '{{2}}: Unique Workspace Reference ID'];
            case 'whatsapp-feature-quotation':
              return ['{{1}}: Recipient Name', '{{2}}: Firm Name'];
            case 'whatsapp-reengagement':
              return ['{{1}}: Recipient Name'];
            case 'whatsapp-demo-reminder-1hr':
              return ['{{1}}: Recipient Name', '{{2}}: Meeting Room Link'];
            case 'whatsapp-payment-reminder':
              return ['{{1}}: Financial Recipient Name', '{{2}}: Invoice Number', '{{3}}: Cost Number', '{{4}}: Currency (e.g. SAR/AED)', '{{5}}: Due Date'];
            case 'whatsapp-kyc-reminder':
              return ['{{1}}: Business Officer Name', '{{2}}: Secure Submit Portal URL'];
            case 'whatsapp-new-tender-notif':
              return ['{{1}}: Subcontractor Firm Name', '{{2}}: Host Developer Name', '{{3}}: Giga-Project Name', '{{4}}: Trade Scope Package', '{{5}}: Closing Tender Date'];
            case 'whatsapp-quotation-awarded':
              return ['{{1}}: Subcontractor Representative', '{{2}}: Project Name', '{{3}}: Trade Title', '{{4}}: Total Contract Value'];
            case 'whatsapp-monthly-digest':
              return ['{{1}}: Project Director Name', '{{2}}: Developer Identity', '{{3}}: Calendar Month', '{{4}}: Current Claim Turnaround Cycle', '{{5}}: Historical Claim baseline', '{{6}}: Closed RFIs', '{{7}}: Resolved Cost Disputes', '{{8}}: Active Workforce Capacity'];
            default:
              return [];
          }
        };

        const handleCopyWhatsAppText = (tpl: WhatsAppTemplate, targetLang: 'EN' | 'AR') => {
          if (navigator.clipboard) {
            const isAr = targetLang === 'AR' && tpl.arabicVersion;
            const header = isAr ? tpl.arabicVersion?.headerText : tpl.headerText;
            const body = isAr ? tpl.arabicVersion?.bodyText : tpl.bodyText;
            const footer = isAr ? tpl.arabicVersion?.footerText : tpl.footerText;
            const btns = isAr ? tpl.arabicVersion?.buttons : tpl.buttons;

            const textToCopy = `WhatsApp Template: ${tpl.name}\nCategory: ${tpl.category}\n` +
              `Header (${tpl.headerType}): ${header || 'None'}\n\n` +
              `Body Text:\n${body}\n\n` +
              `Footer Text: ${footer}\n` +
              `Buttons: ${btns ? btns.join(' | ') : 'None'}`;
            
            navigator.clipboard.writeText(textToCopy);
            setCopiedWhatsAppId(tpl.id);
            setTimeout(() => setCopiedWhatsAppId(null), 2500);
          }
        };

        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fade-in text-zinc-100">
            
            {/* Top Overview banner */}
            <div className="bg-[#091424] border border-zinc-800 rounded-2xl p-6 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full" />
              <div className="space-y-2 max-w-3xl">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#128C7E] font-bold bg-[#128C7E]/10 px-2.5 py-1 rounded-full border border-[#128C7E]/20">
                  Meta Business API Validated
                </span>
                <h3 className="text-xl font-sans font-normal tracking-tight text-zinc-100">
                  Sovereign WhatsApp Business Workstation Controls
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  These templates comply fully with Meta's official WhatsApp Business Cloud API parameters. 
                  They prevent notification rate boundaries and are optimized for direct integration inside regional ERP/SaaS models.
                  We provide high-impact transactional (UTILITY) alerts as well as user activation (MARKETING) flows, natively localized for the Gulf Coop Council (GCC) builders network.
                </p>
              </div>

              <div className="shrink-0 flex items-center bg-[#050D1A] rounded-xl border border-zinc-850 p-3 self-stretch md:self-auto justify-center">
                <div className="text-center space-y-1">
                  <div className="text-2xl font-mono text-emerald-400 font-extrabold flex items-center justify-center gap-1">
                    <span>10</span>
                    <span className="text-xs font-normal text-zinc-500">/ 10</span>
                  </div>
                  <div className="text-[10px] font-mono text-zinc-405 uppercase tracking-wider font-bold">Approved Layouts</div>
                </div>
              </div>
            </div>

            {/* Main Interactive Workspace Partition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Selector List & Filters */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Micro Search Input */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={14} className="text-zinc-500" />
                  </span>
                  <input
                    type="text"
                    value={whatsAppSearchQuery}
                    onChange={(e) => setWhatsAppSearchQuery(e.target.value)}
                    placeholder="Search templates, variables, or keys..."
                    className="w-full pl-9 pr-4 py-2.5 bg-[#091424] border border-zinc-800 rounded-xl text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-gold/30 focus:border-gold/45"
                  />
                  {whatsAppSearchQuery && (
                    <button 
                      onClick={() => setWhatsAppSearchQuery('')}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-500 hover:text-zinc-300 text-xs font-mono font-bold"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Templates Checklist Cards */}
                <div className="space-y-2.5 max-h-[620px] overflow-y-auto pr-1.5 scrollbar-thin scrollbar-thumb-zinc-800 custom-scroll-zone">
                  {activeTemplates.length === 0 ? (
                    <div className="text-center py-12 p-6 bg-[#091424]/40 border border-zinc-850 rounded-xl">
                      <AlertCircle size={22} className="text-zinc-650 mx-auto mb-2" />
                      <p className="text-xs text-zinc-500 font-mono font-medium">No templates matched your query.</p>
                    </div>
                  ) : (
                    activeTemplates.map((tpl) => {
                      const isSelected = selectedWhatsAppId === tpl.id;
                      return (
                        <button
                          key={tpl.id}
                          id={`whatsapp_tpl_tile_${tpl.id}`}
                          onClick={() => {
                            setSelectedWhatsAppId(tpl.id);
                            // Set language to Arabic by default if we select one that supports it
                            if (tpl.arabicVersion) {
                              setWhatsAppLang('AR');
                            } else {
                              setWhatsAppLang('EN');
                            }
                          }}
                          className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 block cursor-pointer ${
                            isSelected 
                              ? 'border-gold bg-[#0E1A2D] shadow-lg ring-1 ring-gold/15' 
                              : 'border-zinc-800 bg-[#091424] hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          <div className="space-y-1.5 leading-none">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span className="text-[9px] font-mono font-bold tracking-wide uppercase text-gold">
                                {tpl.name}
                              </span>
                              <span className={`text-[8px] font-mono font-bold px-2 py-0.5 rounded-full uppercase ${
                                tpl.category === 'UTILITY'
                                  ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                                  : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                              }`}>
                                {tpl.category}
                              </span>
                            </div>
                            
                            <p className={`font-sans font-medium text-xs tracking-tight truncate line-clamp-1 py-0.5 ${
                              isSelected ? 'text-zinc-150 font-bold' : 'text-zinc-350'
                            }`}>
                              {tpl.bodyText}
                            </p>
                            
                            <div className="flex items-center justify-between pt-1 text-[9px] text-zinc-500 font-mono">
                              <span className="flex items-center gap-1">
                                <Layers size={9} />
                                Header: {tpl.headerType}
                              </span>
                              <span className="flex items-center gap-1">
                                {tpl.arabicVersion ? (
                                  <span className="text-emerald-400 font-semibold bg-emerald-500/5 px-1 rounded">GCC Arabic Available</span>
                                ) : (
                                  <span className="text-zinc-550">English Standard</span>
                                )}
                              </span>
                            </div>
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>

              </div>

              {/* Right Column: Simulated Live Web WhatsApp Client & Details */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Active Choice Summary Card */}
                <div className="bg-[#091424] border border-zinc-850 p-4 rounded-xl flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono text-zinc-450 uppercase block font-bold leading-none">Template Target ID</span>
                    <h4 className="font-mono text-xs font-semibold text-white select-all leading-relaxed">
                      {activeTemplate.name}
                    </h4>
                  </div>

                  {/* Language switch button room */}
                  <div className="flex items-center bg-[#050D1A] rounded-lg border border-zinc-800 p-0.5">
                    <button
                      onClick={() => setWhatsAppLang('EN')}
                      className={`px-3 py-1.5 rounded-md text-[10px] font-mono tracking-wide uppercase transition-all cursor-pointer ${
                        currentLang === 'EN'
                          ? 'bg-[#C8973A] text-zinc-950 font-extrabold'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        if (hasArabic) {
                          setWhatsAppLang('AR');
                        }
                      }}
                      disabled={!hasArabic}
                      className={`px-3 py-1.5 rounded-md text-[10px] font-mono tracking-wide uppercase transition-all flex items-center gap-1 cursor-pointer ${
                        currentLang === 'AR'
                          ? 'bg-[#C8973A] text-zinc-950 font-extrabold'
                          : !hasArabic
                            ? 'opacity-40 text-zinc-650 cursor-not-allowed'
                            : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                      title={!hasArabic ? 'Arabic GTM translation not requested/available' : 'Switch to Gulf Arabic dialect'}
                    >
                      <span>العربية (الخليج)</span>
                      {!hasArabic && <span className="text-[7px] bg-zinc-800 px-1 rounded text-zinc-500 font-bold">N/A</span>}
                    </button>
                  </div>
                </div>

                {/* WhatsApp Chat Workspace Mock-Up Device */}
                <div className="bg-[#0E1621] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden relative" style={{ backgroundImage: 'radial-gradient(#128C7E/1 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                  
                  {/* WhatsApp Device Top Bar */}
                  <div className="bg-[#128C7E]/10 backdrop-blur-md p-4 border-b border-zinc-850/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Logo avatar */}
                      <div className="h-10 w-10 bg-[#128C7E]/20 rounded-full border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-mono font-extrabold">
                        AR
                      </div>
                      <div className="leading-tight">
                        <div className="flex items-center gap-1.5">
                          <span className="font-sans font-bold text-xs text-zinc-150">Ardaca BuildFlow Broker</span>
                          <span className="h-3 w-3 bg-[#128C7E] rounded-full flex items-center justify-center text-[7px] text-zinc-950 font-extrabold">✓</span>
                        </div>
                        <span className="text-[10px] text-emerald-400 font-mono tracking-wider">Official Business Account</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleCopyWhatsAppText(activeTemplate, currentLang)}
                        className={`text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer ${
                          copiedWhatsAppId === activeTemplate.id 
                            ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' 
                            : 'bg-zinc-950 hover:bg-zinc-850 border-zinc-805 text-zinc-300'
                        }`}
                      >
                        {copiedWhatsAppId === activeTemplate.id ? (
                          <>
                            <Check size={11} />
                            <span>COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy size={11} />
                            <span>COPY SYSTEM CODE</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Device Dialogue Sheet */}
                  <div className="p-6 md:p-8 space-y-4 max-h-[480px] overflow-y-auto">
                    
                    {/* Timestamp bubble */}
                    <div className="flex justify-center">
                      <span className="bg-[#050D1A]/70 text-[9px] font-mono px-3 py-1 rounded-full text-zinc-400 uppercase tracking-wider border border-zinc-850/50">
                        Today
                      </span>
                    </div>

                    {/* Left Bubble (The WhatsApp Business Template itself) */}
                    <div className={`max-w-[460px] space-y-1 ${currentLang === 'AR' ? 'ml-auto text-right' : 'mr-auto text-left'}`} dir={currentLang === 'AR' ? 'rtl' : 'ltr'}>
                      
                      {/* The speech bubble body container */}
                      <div className="bg-[#0b141a] border border-zinc-800 text-zinc-200 p-4 rounded-xl space-y-3 relative shadow-md">
                        {/* Bubble tail element */}
                        <div className={`absolute top-0 w-3 h-3 bg-[#0b141a] border-t border-zinc-800 rotate-45 ${
                          currentLang === 'AR' ? '-right-1.5 border-r' : '-left-1.5 border-l'
                        }`} />

                        {/* Simulated Header block */}
                        {activeTemplate.headerType !== 'NONE' && (
                          <div className="pb-2.5 border-b border-zinc-850/80">
                            {activeTemplate.headerType === 'TEXT' ? (
                              <div className="text-[11px] font-mono text-gold font-bold uppercase tracking-wider flex items-center gap-1.5">
                                <Send size={10} className="text-gold" />
                                {currentLang === 'AR' ? activeTemplate.arabicVersion?.headerText : activeTemplate.headerText}
                              </div>
                            ) : (
                              <div className="h-28 w-full bg-[#050D1A] rounded border border-zinc-850 flex flex-col items-center justify-center text-center p-3 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-[#C8973A]/2 opacity-5 pointer-events-none" />
                                <Layers size={18} className="text-gold mb-1 animate-pulse" />
                                <span className="text-[9px] font-mono text-zinc-400 uppercase font-bold">Image / Infographic Layout Block</span>
                                <span className="text-[7.5px] font-mono text-zinc-550 italic mt-0.5">ardaca_marketing_cover.png</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Interactive parsed body text */}
                        <div className="text-xs md:text-sm leading-relaxed text-zinc-250 select-all font-sans">
                          {(currentLang === 'AR' ? activeTemplate.arabicVersion?.bodyText : activeTemplate.bodyText)?.split('\n').map((paragraph, pIdx) => {
                            if (!paragraph) return <div key={pIdx} className="h-2" />;
                            
                            // Highlight the {{variables}} elegantly
                            const tokens = paragraph.split(/(\{\{\d+\}\})/g);
                            return (
                              <p key={pIdx} className="mb-1 text-zinc-200">
                                {tokens.map((token, tIdx) => {
                                  if (token.match(/^\{\{\d+\}\}$/)) {
                                    return (
                                      <span key={tIdx} className="bg-gold/10 text-gold font-mono px-1.5 py-0.5 rounded border border-gold/25 font-bold mx-0.5">
                                        {token}
                                      </span>
                                    );
                                  }
                                  return token;
                                })}
                              </p>
                            );
                          })}
                        </div>

                        {/* Footer field */}
                        <div className="pt-2 border-t border-zinc-900 text-[10px] text-zinc-450 font-sans italic leading-none select-all">
                          {currentLang === 'AR' ? activeTemplate.arabicVersion?.footerText : activeTemplate.footerText}
                        </div>

                        {/* Watermark timestamp simulation */}
                        <div className="text-right text-[8px] font-mono text-zinc-550 leading-none pt-0.5">
                          09:12 AM
                        </div>

                      </div>

                      {/* CTA Buttons array displayed beneath the bubble (standard Meta style) */}
                      <div className="space-y-1.5 pt-1.5 px-1 max-w-sm">
                        {(currentLang === 'AR' ? activeTemplate.arabicVersion?.buttons : activeTemplate.buttons)?.map((btn, bIdx) => (
                          <div 
                            key={bIdx}
                            className="bg-zinc-950/90 hover:bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg text-center font-sans font-semibold text-xs text-[#128C7E] select-none flex items-center justify-center gap-1.5 shadow transition-all active:scale-98 cursor-pointer"
                            onClick={() => onNavigate('onboarding')}
                          >
                            <span>{btn}</span>
                            <ArrowRight size={11} className="text-[#128C7E]" />
                          </div>
                        ))}
                      </div>

                    </div>

                  </div>

                </div>

                {/* Variable Key Legend explaining placeholder bindings under the device */}
                <div className="bg-[#091424] border border-zinc-850 p-5 rounded-2xl space-y-3.5">
                  <div className="flex items-center gap-2 border-b border-zinc-850 pb-2">
                    <SlidersHorizontal size={13} className="text-gold" />
                    <span className="text-[9px] font-mono text-gold uppercase tracking-widest font-extrabold pb-0.5">
                      Required Payload Field Keys Legend
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {getVariableLegend(activeTemplate.id).map((legend, legIdx) => (
                      <div key={legIdx} className="bg-[#050D1A] rounded p-2.5 border border-zinc-900 flex items-center gap-2">
                        <span className="h-4 w-4 rounded bg-[#C8973A]/10 text-[#C8973A] text-[9px] font-mono font-extrabold flex items-center justify-center border border-[#C8973A]/20 shrink-0">
                          v
                        </span>
                        <span className="text-[11px] font-mono text-zinc-300 antialiased leading-none">{legend}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[10px] text-zinc-500 font-sans font-light leading-relaxed select-none">
                    * Make sure your backend API payload matches these exact positional array variables before calling Meta's <code>/messages</code> URL wrapper on host networks.
                  </p>
                </div>

              </div>

            </div>

          </div>
        );
      })()}

      {activeMainTab === 'investor' && (
        <InvestorOnePagerView isRtl={isRtl} />
      )}

      {activeMainTab === 'partnership' && (
        <PartnershipOutreachView isRtl={isRtl} />
      )}

      {activeMainTab === 'security' && (
        <CybersecurityFrameworkView isRtl={isRtl} />
      )}

      {/* Module 6: Footer and Navigation */}

    </div>
  );
}
