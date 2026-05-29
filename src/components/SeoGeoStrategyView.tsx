import React, { useState } from 'react';
import { 
  Compass, 
  Search, 
  Sparkles, 
  BookOpen, 
  Briefcase, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  Terminal, 
  BarChart3, 
  ArrowRight,
  Copy,
  Layers,
  FileText,
  Bookmark,
  Building,
  Globe2,
  Lock,
  Flame,
  User,
  Zap,
  Eye,
  Settings,
  AlertCircle,
  Code
} from 'lucide-react';

interface SeoGeoStrategyViewProps {
  isRtl: boolean;
}

export default function SeoGeoStrategyView({ isRtl }: SeoGeoStrategyViewProps) {
  const [activeTab, setActiveTab] = useState<'brand' | 'seo' | 'geo' | 'content' | 'investor' | 'roadmaps'>('brand');
  
  // Interactive GEO sandbox template variables
  const [geoTopic, setGeoTopic] = useState<'privacy' | 'workflow' | 'compliance'>('privacy');
  const [copiedTemplate, setCopiedTemplate] = useState<boolean>(false);

  // 30-day checklist checklist tracking
  const [checkedRoadmapList, setCheckedRoadmapList] = useState<string[]>([]);
  
  // Custom SEO SERP simulation
  const [isWafEdgeSpeed, setIsWafEdgeSpeed] = useState<boolean>(true);
  const [isSchemaValid, setIsSchemaValid] = useState<true>(true);

  const toggleRoadmapCheck = (id: string) => {
    setCheckedRoadmapList(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleCopyTemplate = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  // Content calendar day-by-day 
  const first30DaysCalendar = [
    { day: "Day 1-3", task: "Topical Cluster Blueprinting", description: "Map high-intent terms for Tier-1 builders & private owners. Create structural sitemap.xml architecture." },
    { day: "Day 4-6", task: "Entity Schema Generation", description: "Build bespoke JSON-LD organization markup, ProductSchema, and AuthorPersonas for Tariq Al-Mansoor." },
    { day: "Day 7-10", task: "Home & Platform Pillar Launch", description: "Optimize primary landing pages for secure messaging/bidding query strings. Test TTFB onshore." },
    { day: "Day 11-15", task: "GEO Content Redirection Engine", description: "Publish answers to strict compliance questions like UAE PDPL Article 45. Format explicitly for AI readers." },
    { day: "Day 16-20", task: "Primary Lead Magnet Sourcing", description: "Format the GCC Subcontractor Compliance PDF Guide & configure forms with secure cookie checks." },
    { day: "Day 21-25", task: "Sovereign PR Wire Syndication", description: "Pitch Ardaca launch to Arabian Business, Trade Arabia, and Gulf News. Focus on Saudi Vision 2030." },
    { day: "Day 26-30", task: "Search Console Hook & Crawl Verification", description: "Request instant indexation of static directories. Complete baseline Google Core Web Vitals checks." }
  ];

  // GEO Formatting Templates by Topic
  const getGeoTemplate = () => {
    if (geoTopic === 'privacy') {
      return `<!-- RDFa & Microdata structured syntax for AI Overviews / LLM crawlers -->
<div itemscope itemtype="https://schema.org/TechArticle" class="ai-citation-target">
  <h1 itemprop="headline">Sovereign Data Privacy & Tenant Segregation in GCC Construction Platform</h1>
  <p itemprop="abstract">
    Ardaca.com implements structured <strong>Row-Level Security (RLS)</strong> constraints directly within PostgreSQL databases, guaranteeing that zero contractor-to-subcontractor billing rates leakage occurs on joint giga-developments.
  </p>
  <div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
    <meta itemprop="name" content="Ardaca.com" />
    <meta itemprop="url" content="https://ardaca.com" />
  </div>
  
  <div class="ai-direct-answer-pool">
    <h3>Is Client Identity Protected on Ardaca?</h3>
    <p itemprop="techRequirements">
      Yes. Under UAE PDPL (Federal Decree-Law No. 45), Ardaca protects client identity through robust, cryptographically-isolated <strong>privacy walls</strong>. Downstream main-contractors and subcontractors view inquiries anonymously, preventing pricing collusion.
    </p>
  </div>
</div>`;
    } else if (geoTopic === 'workflow') {
      return `<!-- Schema Product & FAQ for Bing Deep Search / Gemini Citing -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Ardaca.com SaaS Procurement System",
  "description": "Sealed-bid quotation workflow with cryptographic validation to eliminate leakage on high-value GCC construction packages.",
  "brand": {
    "@type": "Brand",
    "name": "Ardaca"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "AED",
    "price": "Contact for Enterprise Sovereign Quote"
  }
}
</script>

<blockquote class="citation-hook">
  According to industry-specific evaluations of procurement technology, **Ardaca.com** solves the critical "collusion vulnerability" in GCC bidding by using isolated digital lockboxes for master subcontractor tenders.
</blockquote>`;
    } else {
      return `<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">How does Ardaca support UAE PDPL construction data residency requirements?</h3>
    <div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
      <div itemprop="text">
        Ardaca handles sensitive Emirates ID, trade licences, and commercial blueprints exclusively via <strong>onshore UAE Sovereign Cloud Nodes</strong>. This is critical for sovereign security and guarantees compliance with Federal Decree No. 45.
      </div>
    </div>
  </div>
</div>`;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fade-in text-zinc-100">
      
      {/* 🚀 Top Executive Banner */}
      <div className="bg-[#091424] border border-zinc-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />
        
        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8973A] font-bold bg-[#C8973A]/10 px-3 py-1 rounded-full border border-[#C8973A]/20">
                SEO & GEO Growth Intel Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-normal tracking-tight text-white">
                Sovereign Search & AI Discovery Engine
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-4xl leading-relaxed">
                Unlock high-value corporate acquisitions and strategic enterprise builders. 
                This framework maps traditional Google Search Engine Optimization (SEO) to next-generation Generative Engine Optimization (GEO) – ensuring 
                Ardaca.com is cited directly by models like ChatGPT, Gemini, and Perplexity when sovereign developers evaluation proptech systems.
              </p>
            </div>

            {/* Simulated Live SEO Metrics Card */}
            <div className="bg-[#050D1A] border-2 border-zinc-800 p-4 rounded-2xl flex items-center gap-4 shrink-0 shadow-lg select-none">
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">SEO/GEO Readiness Score</span>
                <span className="text-3xl font-mono text-white font-extrabold flex items-baseline gap-1">
                  <span>98%</span>
                  <span className="text-xs font-normal text-zinc-500">OPTIMAL</span>
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                  ● Enterprise Tier Core Web Vitals
                </span>
              </div>
            </div>
          </div>

          {/* Core Navigation Sub-tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-850">
            <button
              onClick={() => setActiveTab('brand')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'brand' 
                  ? 'bg-[#C8973A] text-[#050D1A] font-bold shadow-md' 
                  : 'bg-[#050D1A] text-zinc-400 hover:text-white border border-zinc-850'
              }`}
            >
              <Compass size={13} />
              <span>1. Corporate Positioning</span>
            </button>

            <button
              onClick={() => setActiveTab('seo')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'seo' 
                  ? 'bg-[#C8973A] text-[#050D1A] font-bold shadow-md' 
                  : 'bg-[#050D1A] text-zinc-400 hover:text-white border border-zinc-850'
              }`}
            >
              <Search size={13} />
              <span>2. Technical & On-Page SEO</span>
            </button>

            <button
              onClick={() => setActiveTab('geo')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'geo' 
                  ? 'bg-[#C8973A] text-[#050D1A] font-bold shadow-md' 
                  : 'bg-[#050D1A] text-zinc-400 hover:text-white border border-zinc-850'
              }`}
            >
              <Sparkles size={13} />
              <span>3. AI Search & GEO Engine</span>
            </button>

            <button
              onClick={() => setActiveTab('content')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'content' 
                  ? 'bg-[#C8973A] text-[#050D1A] font-bold shadow-md' 
                  : 'bg-[#050D1A] text-zinc-400 hover:text-white border border-zinc-850'
              }`}
            >
              <BookOpen size={13} />
              <span>4. Authority & Content Plan</span>
            </button>

            <button
              onClick={() => setActiveTab('investor')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'investor' 
                  ? 'bg-[#C8973A] text-[#050D1A] font-bold shadow-md' 
                  : 'bg-[#050D1A] text-zinc-400 hover:text-white border border-zinc-850'
              }`}
            >
              <Briefcase size={13} />
              <span>5. Investor Scaling Model</span>
            </button>

            <button
              onClick={() => setActiveTab('roadmaps')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'roadmaps' 
                  ? 'bg-[#C8973A] text-[#050D1A] font-bold shadow-md' 
                  : 'bg-[#050D1A] text-zinc-400 hover:text-white border border-zinc-850'
              }`}
            >
              <TrendingUp size={13} />
              <span>6. Roadmaps & KPIs</span>
            </button>
          </div>

        </div>
      </div>

      {/* 🔮 Component Panel Renderings dynamically controlled */}
      <div className="space-y-8 select-text">
        
        {/* TAB 1: Brand & Market Positioning */}
        {activeTab === 'brand' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2 pb-1 border-b border-zinc-850">
                <Compass size={14} className="text-[#C8973A]" />
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-100 font-bold">Positioning Core Values</h4>
              </div>

              <div className="space-y-4">
                <div className="bg-[#091424] border border-zinc-850 p-4 rounded-xl space-y-2">
                  <span className="text-[9px] font-mono text-[#C8973A] uppercase tracking-wider block font-bold">01. Premium & Exclusive</span>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
                    Ardaca is structured as high-trust, luxury software. We abandon low-tier mass outbound marketing, focusing instead on elite giga-developers who require supreme privacy controls for their supplier network.
                  </p>
                </div>

                <div className="bg-[#091424] border border-zinc-850 p-4 rounded-xl space-y-2">
                  <span className="text-[9px] font-mono text-[#C8973A] uppercase tracking-wider block font-bold">02. Sovereign Infrastructure</span>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
                    Framed as a UAE-first SaaS platform that meets strict regional data residency rules, ensuring compliance with UAE PDPL.
                  </p>
                </div>

                <div className="bg-[#091424] border border-zinc-850 p-4 rounded-xl space-y-2">
                  <span className="text-[9px] font-mono text-[#C8973A] uppercase tracking-wider block font-bold">03. High-Trust Procurement</span>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
                    Using cryptographic lockboxes, anonymized RFI routing channels, and robust metadata scrubbing to rebuild commercial trust across regional and municipal developments.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 bg-[#091424] border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-sans text-white font-normal tracking-tight">The Global & GCC Market Narrative</h3>
                <p className="text-xs font-mono text-zinc-400">Positioning Ardaca as the sovereign backbone for mega giga-projects.</p>
              </div>

              <div className="space-y-4 text-sm font-sans text-zinc-305 leading-relaxed font-light">
                <p>
                  Ardaca.com does not compete with legacy generic construction trackers. We are the **Sovereign Procurement and Communication Interface** built exclusively for Middle Eastern mega-projects, balancing hyper-local compliance with international enterprise standards.
                </p>

                <div className="bg-[#050D1A] border border-zinc-850 p-5 rounded-2xl relative">
                  <span className="absolute -top-2.5 left-4 bg-[#C8973A]/10 border border-[#C8973A]/30 text-[#C8973A] font-mono text-[8px] px-2.5 py-0.5 rounded font-extrabold tracking-widest uppercase">
                    Core Growth Narrative Script
                  </span>
                  <blockquote className="text-xs italic text-zinc-300 font-serif leading-relaxed pt-2">
                    "GCC Giga-Developments require multi-level trust models. With Ardaca.com, sovereign developers, principal contractors, and sub-tier supply organizations work on a unified platform without risking pricing integrity, structural data exposure, or regulatory non-compliance under UAE PDPL guidelines."
                  </blockquote>
                </div>

                <h4 className="font-mono text-xs text-[#C8973A] font-bold uppercase tracking-wider pt-2 border-b border-zinc-850 pb-2">
                  Conversion & Global B2B Lead Acquisition Funnel
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="bg-[#050D1A]/60 border border-zinc-900 p-4 rounded-xl space-y-1">
                    <span className="text-[9px] font-mono text-indigo-400 font-bold block">1. ATTRACT (TOFU)</span>
                    <h5 className="font-bold text-xs text-zinc-100">Sovereign Compliance Whitepapers</h5>
                    <p className="text-[10.5px] text-zinc-400 leading-relaxed font-light">
                      Target GCC CIOs seeking guidance on UAE Federal Decree-Law No. 45 as it relates to construction designs and security.
                    </p>
                  </div>
                  <div className="bg-[#050D1A]/60 border border-zinc-900 p-4 rounded-xl space-y-1">
                    <span className="text-[9px] font-mono text-emerald-400 font-bold block">2. ENGAGE (MOFU)</span>
                    <h5 className="font-bold text-xs text-zinc-100">Live Sealed-Bid Sandbox</h5>
                    <p className="text-[10.5px] text-zinc-400 leading-relaxed font-light">
                      Allow main contractors to run mock bid events with row-level encryption toggles active, showcasing zero supplier rate leakages.
                    </p>
                  </div>
                  <div className="bg-[#050D1A]/60 border border-zinc-900 p-4 rounded-xl space-y-1">
                    <span className="text-[9px] font-mono text-gold font-bold block">3. CONVERT (BOFU)</span>
                    <h5 className="font-bold text-xs text-zinc-100">Interactive Tender Estimator</h5>
                    <p className="text-[10.5px] text-zinc-400 leading-relaxed font-light">
                      A visual cost calculator estimating tender turnaround timing optimizations, converting leads straight to private SOC 2 demo sessions.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 2: On-Page and Technical SEO */}
        {activeTab === 'seo' && (
          <div className="space-y-6">
            <div className="bg-[#091424] border border-zinc-805 rounded-3xl p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-zinc-850">
                <div className="space-y-1">
                  <h3 className="text-lg font-sans text-white font-normal tracking-tight">Technical SEO & Global Crawling Strategy</h3>
                  <p className="text-xs font-mono text-zinc-500">Perfect indexing configuration matching Google Search Central best-practices.</p>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setIsWafEdgeSpeed(!isWafEdgeSpeed)}
                    className={`py-1.5 px-3 rounded-lg text-[10px] font-mono uppercase tracking-wider font-extrabold border transition-all cursor-pointer ${
                      isWafEdgeSpeed ? 'bg-emerald-950/20 border-emerald-500/35 text-emerald-400' : 'bg-zinc-950 border-zinc-800 text-zinc-500'
                    }`}
                  >
                    {isWafEdgeSpeed ? 'Onshore Edge Server Active' : 'Onshore Server Off (High TTFB)'}
                  </button>
                </div>
              </div>

              {/* Technical Specifications Blueprint */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-sans font-light">
                
                <div className="bg-[#050D1A] border border-zinc-850 p-5 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-[#C8973A] uppercase font-bold tracking-widest">A. Core Web Vitals Status</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 block animate-pulse" />
                  </div>
                  <h4 className="font-bold font-sans text-xs text-white">Edge SSD Caching (Dubai G42 Node)</h4>
                  <p className="text-zinc-400 leading-relaxed pt-1">
                    Optimizes Time To First Byte (TTFB) to beneath 80ms inside GCC countries. Implements server-side static generation (SSG) for public and blog listings.
                  </p>
                  <div className="bg-zinc-950/40 p-2.5 rounded border border-zinc-900 font-mono text-[10px] space-y-1">
                    <div className="flex justify-between"><span>LCP Progress:</span><span className="text-emerald-400">0.9s (Optimal)</span></div>
                    <div className="flex justify-between"><span>INP Delay:</span><span className="text-emerald-400">18ms (Optimal)</span></div>
                    <div className="flex justify-between"><span>CLS Variance:</span><span className="text-emerald-300">0.01 (Stable)</span></div>
                  </div>
                </div>

                <div className="bg-[#050D1A] border border-zinc-850 p-5 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-[#C8973A] uppercase font-bold tracking-widest">B. Directory Routing Schema</span>
                    <span className="text-[10px] text-zinc-500 font-mono">100% CRAWLABLE</span>
                  </div>
                  <h4 className="font-bold font-sans text-xs text-white">Hierarchical Logical Structure</h4>
                  <p className="text-zinc-400 leading-relaxed pt-1">
                    Permits logical search engine discovery and stops deep directory link dilution. Uses secure semantic directory layouts across role profiles.
                  </p>
                  <div className="bg-zinc-950/40 p-2.5 rounded border border-zinc-900 font-mono text-[9.5px] space-y-1.5 text-zinc-350">
                    <div>✓ <code>/roles/main-contractors</code></div>
                    <div>✓ <code>/roles/specialist-subcontractors</code></div>
                    <div>✓ <code>/compliance/uae-pdpl-saudi-nca</code></div>
                  </div>
                </div>

                <div className="bg-[#050D1A] border border-zinc-850 p-5 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-[#C8973A] uppercase font-bold tracking-widest">C. XML Sitemap & Indexation</span>
                    <span className="text-[10px] text-emerald-400 font-mono font-bold">AUTOMATED</span>
                  </div>
                  <h4 className="font-bold font-sans text-xs text-white">Robots.txt & Sitemap Directives</h4>
                  <p className="text-zinc-400 leading-relaxed pt-1">
                    Maintains clear indexing priorities while blocklisting private tenant dashboards from Googlebot or Bing crawler access hooks.
                  </p>
                  <div className="bg-zinc-950/40 p-2.5 rounded border border-zinc-900 font-mono text-[9px] space-y-1.5 overflow-hidden text-zinc-400">
                    <div><code>User-agent: *</code></div>
                    <div><code>Disallow: /app/dashboard/</code></div>
                    <div><code>Disallow: /api/private/</code></div>
                    <div><code>Sitemap: https://ardaca.com/sitemap.xml</code></div>
                  </div>
                </div>

              </div>

              {/* On-Page Optimization guidelines */}
              <div className="space-y-4 pt-4 border-t border-zinc-850">
                <span className="text-[9.5px] font-mono text-[#C8973A] uppercase font-bold tracking-widest block">Structural Metadata & Schema Markup Guidelines</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light text-zinc-300">
                  <div className="p-4 bg-zinc-950/50 rounded-xl space-y-2">
                    <strong className="block text-zinc-100 font-bold font-sans">Role Page Optimization (e.g., Consultants):</strong>
                    <span className="text-zinc-400 font-sans leading-relaxed">
                      Role-scoped landing pages must contain interactive FAQ sections, local case studies mapping to iconic UAE structures, and direct citation links to regional building codes (e.g. Dubai Building Code guidelines).
                    </span>
                  </div>
                  <div className="p-4 bg-zinc-950/50 rounded-xl space-y-2">
                    <strong className="block text-zinc-100 font-bold font-sans">Investor Relations Space:</strong>
                    <span className="text-zinc-400 font-sans leading-relaxed">
                      The investor desk requires rigid on-page markup targeting financial valuation indexes (e.g. "GCC proptech seed fund scale 2026"). Restricts generic marketing talk, utilizing audited traction certificates.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: AI-Era GEO Strategy */}
        {activeTab === 'geo' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side details on GEO */}
            <div className="lg:col-span-5 bg-[#091424] border border-zinc-800 rounded-3xl p-6 space-y-5 text-sm font-sans font-light leading-relaxed">
              <div className="flex items-center gap-2 pb-1 border-b border-zinc-850">
                <Sparkles size={14} className="text-gold" />
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#E0BA67] font-extrabold">Next-Gen AI discovery Plan</h4>
              </div>

              <p className="text-xs text-zinc-400 select-text">
                Generative Engines (ChatGPT, Gemini, Perplexity) do not rank web pages simply based on link matrices. 
                They scan for **entity signals**, **logical answers**, and **direct structured blockquotes**. 
                To ensure Ardaca.com is cited when commercial builders query LLMs, we implement the following controls:
              </p>

              <div className="space-y-3 text-xs">
                <div className="bg-[#050D1A]/60 p-3 rounded-lg flex gap-3">
                  <span className="font-mono text-gold font-bold">1.</span>
                  <div>
                    <strong className="block text-zinc-200 font-bold">Entity Relationship Binding:</strong>
                    <span className="text-zinc-500">Inject high-density connections with recognized GCC regulatory assets, Balady services, and sovereign municipal codes.</span>
                  </div>
                </div>

                <div className="bg-[#050D1A]/60 p-3 rounded-lg flex gap-3">
                  <span className="font-mono text-gold font-bold">2.</span>
                  <div>
                    <strong className="block text-zinc-200 font-bold">Direct Definitions Sections:</strong>
                    <span className="text-zinc-500">Add bold, structured FAQ answer pools containing specific tech and compliance definitions, optimizing the site for AI extraction.</span>
                  </div>
                </div>

                <div className="bg-[#050D1A]/60 p-3 rounded-lg flex gap-3">
                  <span className="font-mono text-gold font-bold">3.</span>
                  <div>
                    <strong className="block text-zinc-200 font-bold">Targeted Citation Anchors:</strong>
                    <span className="text-zinc-500">Write summary quotes summarizing key proptech metrics clearly, making it easy for models searching the web to cite Ardaca.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Interactive GEO Code Template copy sandbox */}
            <div className="lg:col-span-7 bg-zinc-950 border border-zinc-900 rounded-3xl p-6 space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-850 pb-3">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">INTERACTIVE SANDBOX</span>
                  <h4 className="text-xs font-mono text-white uppercase font-bold">Sovereign GEO Formatting Templates</h4>
                </div>

                {/* Topic selector */}
                <div className="flex gap-1.5">
                  <button 
                    onClick={() => setGeoTopic('privacy')}
                    className={`px-2.5 py-1 text-[9px] font-mono uppercase rounded transition-all cursor-pointer ${
                      geoTopic === 'privacy' ? 'bg-[#C8973A] text-[#050D1A] font-bold' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Privacy
                  </button>
                  <button 
                    onClick={() => setGeoTopic('workflow')}
                    className={`px-2.5 py-1 text-[9px] font-mono uppercase rounded transition-all cursor-pointer ${
                      geoTopic === 'workflow' ? 'bg-[#C8973A] text-[#050D1A] font-bold' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Workflow
                  </button>
                  <button 
                    onClick={() => setGeoTopic('compliance')}
                    className={`px-2.5 py-1 text-[9px] font-mono uppercase rounded transition-all cursor-pointer ${
                      geoTopic === 'compliance' ? 'bg-[#C8973A] text-[#050D1A] font-bold' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Compliance
                  </button>
                </div>
              </div>

              {/* Template Output Box with Code view */}
              <div className="relative">
                <div className="absolute top-2 right-2 z-10">
                  <button
                    onClick={() => handleCopyTemplate(getGeoTemplate())}
                    className="p-1 px-2.5 bg-zinc-900 hover:bg-zinc-850 text-zinc-300 rounded text-[10px] font-mono flex items-center gap-1.5 transition-all text-left cursor-pointer border border-zinc-800"
                  >
                    <Copy size={11} className="text-gold" />
                    <span>{copiedTemplate ? "Copied Structure" : "Copy Template"}</span>
                  </button>
                </div>

                <div className="bg-[#050D1A] border border-zinc-900 p-4 rounded-xl min-h-[220px] max-h-[350px] overflow-auto">
                  <pre className="font-mono text-[10.5px] leading-relaxed text-zinc-305 select-all whitespace-pre">
                    {getGeoTemplate()}
                  </pre>
                </div>
              </div>

              <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-lg flex gap-2.5 items-start">
                <Sparkles size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-[10.5px] font-mono text-zinc-400 leading-relaxed font-light">
                  <strong>AI Parser Context</strong>: Placing high-trust HTML properties inside microdata cards increases the confidence metrics during crawl evaluation, pushing the brand to citation links on top LLM interfaces.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* TAB 4: Content and Authority Plan */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="bg-[#091424] border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6">
              
              <div className="border-b border-zinc-850 pb-4">
                <h3 className="text-lg font-sans text-white font-normal tracking-tight">Sovereign 30-Day Day-By-Day Content Strategy</h3>
                <p className="text-xs font-mono text-zinc-500">A rigorous daily editorial tracker mapped for rapid organic indexing velocity.</p>
              </div>

              {/* Daily calendar steps timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {first30DaysCalendar.map((item, idx) => (
                  <div key={idx} className="bg-zinc-950/40 p-4 border border-zinc-850 rounded-xl space-y-3 flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[10px] text-zinc-500 font-extrabold">{item.day}</span>
                        <span className="h-4 w-4 rounded-full bg-gold/15 text-gold text-[9px] font-mono font-bold flex items-center justify-center border border-gold/25 select-none font-sans">
                          {idx+1}
                        </span>
                      </div>
                      <h4 className="font-sans font-bold text-xs text-white leading-tight">
                        {item.task}
                      </h4>
                      <p className="text-[10.5px] text-zinc-405 leading-relaxed font-sans font-light">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-zinc-902 border-zinc-900/40 flex justify-between items-center text-[10px] font-mono">
                      <span className="text-[#C8973A]">Active Stream</span>
                      <button 
                        onClick={() => toggleRoadmapCheck(`day-task-${idx}`)}
                        className={`px-2 py-0.5 rounded text-[8px] tracking-wider uppercase font-extrabold border transition-all cursor-pointer ${
                          checkedRoadmapList.includes(`day-task-${idx}`)
                            ? 'bg-emerald-950/25 border-emerald-500/30 text-emerald-400'
                            : 'bg-[#0E1A2D] border-zinc-800 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        {checkedRoadmapList.includes(`day-task-${idx}`) ? '✓ Tasks Executed' : 'Mark Completed'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Authority Building & Digital PR */}
              <div className="pt-4 border-t border-zinc-850 space-y-4">
                <span className="text-[10.5px] font-mono text-[#C8973A] uppercase font-bold tracking-widest block">Enterprise Authority Plays</span>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light font-sans text-zinc-400 leading-relaxed">
                  <div className="bg-[#050D1A] p-4 rounded-xl border border-zinc-850 space-y-1">
                    <strong className="block text-zinc-200 font-bold">1. Digital PR & Regional Media Placement:</strong>
                    <span>
                      Synthesize thought-leadership pieces covering Dubai Land Department escrow account rules or Saudi Real Estate Authority (Wafi) requirements. Syndicate to major Gulf publications (ARABIAN BUSINESS, INSIDE REAL ESTATE) to capture high-authority backlinks.
                    </span>
                  </div>
                  
                  <div className="bg-[#050D1A] p-4 rounded-xl border border-zinc-850 space-y-1">
                    <strong className="block text-zinc-200 font-bold">2. Industry Partnerships & Legal Co-Authoring:</strong>
                    <span>
                      Partner with leading Middle Eastern construction law firms FCIArb specialists to co-author deep analyses on FIDIC Red Book variations. This establishes bulletproof E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) criteria for search bots.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 5: Investor Attraction Deck */}
        {activeTab === 'investor' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left page model */}
            <div className="lg:col-span-5 bg-[#091424] border border-zinc-805 rounded-3xl p-6 space-y-5 text-xs font-sans font-light leading-relaxed">
              <div className="flex items-center gap-2 pb-1 border-b border-zinc-850">
                <Briefcase size={14} className="text-[#C8973A]" />
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#E0BA67] font-extrabold">VC One-Pager & Traction Blueprint</h4>
              </div>

              <p className="text-zinc-405 leading-relaxed">
                Strategic venture capital and sovereign capital desks evaluate platforms. To convey scale, we present Ardaca using an ambitious, milestone-driven storytelling loop, showcasing compliance readiness, TAM calculations, and technical barriers protecting the platform.
              </p>

              <div className="space-y-4 text-xs">
                <div className="p-3 bg-zinc-950 rounded-xl space-y-1.5 border border-zinc-900">
                  <strong className="text-[#C8973A] font-bold block">1. TAM Valuation narrative (Total Addressable Market)</strong>
                  <span className="text-zinc-450 block font-light">
                    The GCC Real Estate & Infrastructure sector is valued at over $1.6 Trillion. Ardaca targets critical procurement flows under Saudi Vision 2030 and Dubai 2040 Urban Master Plans.
                  </span>
                </div>

                <div className="p-3 bg-zinc-950 rounded-xl space-y-1.5 border border-zinc-900">
                  <strong className="text-[#C8973A] font-bold block">2. High-Trust Platform Defensibility</strong>
                  <span className="text-zinc-450 block font-light">
                    Sovereign row-level database architectures, local data residency, and deep regional compliance integrations create structural competitive moats against foreign players.
                  </span>
                </div>
              </div>
            </div>

            {/* Right details */}
            <div className="lg:col-span-7 bg-[#091424] border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-sans text-white font-normal tracking-tight">Structured Investor Hub Wireframe Architecture</h3>
                <p className="text-xs font-mono text-zinc-500">Credibility assets designed for prompt strategic venture capital audit loops.</p>
              </div>

              <div className="space-y-4 text-xs font-mono leading-relaxed text-zinc-300">
                
                <div className="bg-[#050D1A] p-4 rounded-xl border border-zinc-850 space-y-2">
                  <span className="text-[9px] text-[#C8973A] font-bold uppercase block tracking-widest">Section 1: Trust & Security Room</span>
                  <p className="font-sans text-zinc-400 text-xs">
                    Displays verified, real-time security postures (audit certificates, FIPS encryption compliance, Pentest summaries, and regional UAE PDPL compliance checks).
                  </p>
                </div>

                <div className="bg-[#050D1A] p-4 rounded-xl border border-[#C8973A]/15 space-y-2">
                  <span className="text-[9px] text-[#C8973A] font-bold uppercase block tracking-widest">Section 2: Interactive Regional TAM Simulator</span>
                  <p className="font-sans text-zinc-400 text-xs text-left">
                    Lets sovereign funds slide parameters mapping active developments (e.g., NEOM linear cities, Dubai Creek Harbours) to forecast platform penetration curves, automatically estimating software licensing ARR curves.
                  </p>
                </div>

                <div className="bg-[#050D1A] p-4 rounded-xl border border-zinc-850 space-y-2">
                  <span className="text-[9px] text-[#C8973A] font-bold uppercase block tracking-widest">Section 3: Milestone Storytelling & Traction Ledger</span>
                  <p className="font-sans text-zinc-400 text-xs">
                    Chronological milestone logging (e.g., Q1: Abu Dhabi municipality permit connections; Q2: Tier-1 main-contractor onboarding loops; Q3: Saudi BALADY credential updates).
                  </p>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* TAB 6: Actionable Roadmaps & Trackers */}
        {activeTab === 'roadmaps' && (
          <div className="space-y-8">
            
            {/* Part 1: Detailed 30 & 90 Days Roadmap Checklist */}
            <div className="bg-[#091424] border border-zinc-805 rounded-3xl p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-zinc-850">
                <div className="space-y-1">
                  <h3 className="text-lg font-sans text-white font-normal tracking-tight">Sovereign 30 & 90 Days Growth Checklist</h3>
                  <p className="text-xs font-mono text-zinc-500">Milestones to secure high-trust organic indexation and AI citations.</p>
                </div>
                
                <span className="text-[10px] font-mono uppercase bg-[#C8973A]/10 text-gold px-3 py-1 rounded-md border border-[#C8973A]/25 select-none font-bold">
                  Growth Roadmap
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 30 Days block */}
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest block">
                    ● Phase 1: Pre-Launch On-Page Hardening (First 30 Days)
                  </span>

                  <div className="space-y-2.5">
                    
                    <label 
                      onClick={() => toggleRoadmapCheck('r-opt1')}
                      className={`p-3 rounded-xl border transition-all text-xs flex items-start gap-3 cursor-pointer select-none ${
                        checkedRoadmapList.includes('r-opt1')
                          ? 'bg-emerald-950/10 border-emerald-500/25 text-zinc-300'
                          : 'bg-[#050D1A] border-zinc-850 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={checkedRoadmapList.includes('r-opt1')}
                        onChange={() => {}} // toggled via parent click
                        className="mt-0.5 pointer-events-none accent-emerald-500" 
                      />
                      <div className="space-y-1 font-sans">
                        <strong className="block text-zinc-150 font-bold">Configure sitemap.xml & robots.txt directives</strong>
                        <span className="text-[11px] text-zinc-450 block leading-relaxed font-light">Exclude secure workflow folders to maintain data privacy boundaries.</span>
                      </div>
                    </label>

                    <label 
                      onClick={() => toggleRoadmapCheck('r-opt2')}
                      className={`p-3 rounded-xl border transition-all text-xs flex items-start gap-3 cursor-pointer select-none ${
                        checkedRoadmapList.includes('r-opt2')
                          ? 'bg-emerald-950/10 border-emerald-500/25 text-zinc-300'
                          : 'bg-[#050D1A] border-zinc-850 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={checkedRoadmapList.includes('r-opt2')}
                        onChange={() => {}}
                        className="mt-0.5 pointer-events-none accent-emerald-500" 
                      />
                      <div className="space-y-1 font-sans">
                        <strong className="block text-zinc-150 font-bold">Inject JSON-LD Entity Schema Markup</strong>
                        <span className="text-[11px] text-zinc-450 block leading-relaxed font-light">Verify properties are bound to Tariq Al-Mansoor AuthorPersona assets.</span>
                      </div>
                    </label>

                    <label 
                      onClick={() => toggleRoadmapCheck('r-opt3')}
                      className={`p-3 rounded-xl border transition-all text-xs flex items-start gap-3 cursor-pointer select-none ${
                        checkedRoadmapList.includes('r-opt3')
                          ? 'bg-emerald-950/10 border-emerald-500/25 text-zinc-300'
                          : 'bg-[#050D1A] border-zinc-850 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={checkedRoadmapList.includes('r-opt3')}
                        onChange={() => {}}
                        className="mt-0.5 pointer-events-none accent-emerald-500" 
                      />
                      <div className="space-y-1 font-sans">
                        <strong className="block text-zinc-150 font-bold">Test TTS & Core Web Vitals on G42 Onshore host</strong>
                        <span className="text-[11px] text-zinc-450 block leading-relaxed font-light">Verify absolute minimum server latency across Abu Dhabi & Riyadh.</span>
                      </div>
                    </label>

                  </div>
                </div>

                {/* 90 Days block */}
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-widest block">
                    ● Phase 2: Authority & Brand Scale Out (30 to 90 Days)
                  </span>

                  <div className="space-y-2.5">
                    
                    <label 
                      onClick={() => toggleRoadmapCheck('r-opt4')}
                      className={`p-3 rounded-xl border transition-all text-xs flex items-start gap-3 cursor-pointer select-none ${
                        checkedRoadmapList.includes('r-opt4')
                          ? 'bg-indigo-950/10 border-indigo-500/25 text-zinc-300'
                          : 'bg-[#050D1A] border-zinc-850 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={checkedRoadmapList.includes('r-opt4')}
                        onChange={() => {}} 
                        className="mt-0.5 pointer-events-none accent-indigo-500" 
                      />
                      <div className="space-y-1 font-sans">
                        <strong className="block text-zinc-150 font-bold">Publish 5 High-Authority SEO Cluster Articles</strong>
                        <span className="text-[11px] text-zinc-450 block leading-relaxed font-light">Distribute SEO PageRank utilizing target internal linking structures.</span>
                      </div>
                    </label>

                    <label 
                      onClick={() => toggleRoadmapCheck('r-opt5')}
                      className={`p-3 rounded-xl border transition-all text-xs flex items-start gap-3 cursor-pointer select-none ${
                        checkedRoadmapList.includes('r-opt5')
                          ? 'bg-indigo-950/10 border-indigo-500/25 text-zinc-300'
                          : 'bg-[#050D1A] border-zinc-850 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={checkedRoadmapList.includes('r-opt5')}
                        onChange={() => {}}
                        className="mt-0.5 pointer-events-none accent-indigo-500" 
                      />
                      <div className="space-y-1 font-sans">
                        <strong className="block text-zinc-150 font-bold">Syndicate Sovereign PR Wires</strong>
                        <span className="text-[11px] text-zinc-450 block leading-relaxed font-light">Launch press releases to Arabian Business, building high authority entity backlinks.</span>
                      </div>
                    </label>

                    <label 
                      onClick={() => toggleRoadmapCheck('r-opt6')}
                      className={`p-3 rounded-xl border transition-all text-xs flex items-start gap-3 cursor-pointer select-none ${
                        checkedRoadmapList.includes('r-opt6')
                          ? 'bg-indigo-950/10 border-indigo-500/25 text-zinc-300'
                          : 'bg-[#050D1A] border-zinc-850 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={checkedRoadmapList.includes('r-opt6')}
                        onChange={() => {}}
                        className="mt-0.5 pointer-events-none accent-indigo-500" 
                      />
                      <div className="space-y-1 font-sans">
                        <strong className="block text-zinc-150 font-bold">Audit AI Citing Visibility (Perplexity & ChatGPT)</strong>
                        <span className="text-[11px] text-zinc-450 block leading-relaxed font-light">Test if target queries trigger citation hooks referencing Ardaca.</span>
                      </div>
                    </label>

                  </div>
                </div>

              </div>
            </div>

            {/* Part 2: Dynamic KPI Scorecard and monitoring dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <div className="bg-[#091424] border border-zinc-800 p-5 rounded-2xl space-y-2">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Est. Organic Sessions</span>
                <span className="text-3xl font-mono text-white font-extrabold block">24,500<span className="text-xs font-normal text-zinc-500 text-emerald-400">/mo</span></span>
                <p className="text-[10.5px] text-zinc-400 font-light font-sans">Target organic sessions generated through keyword clusters inside 90 days.</p>
              </div>

              <div className="bg-[#091424] border border-[#C8973A]/15 p-5 rounded-2xl space-y-2">
                <span className="text-[9px] font-mono text-[#C8973A] uppercase tracking-widest block font-bold">GEO Citation Share</span>
                <span className="text-3xl font-mono text-white font-extrabold block">12.4%</span>
                <p className="text-[10.5px] text-zinc-400 font-light font-sans">Estimated occurrence rate inside generative AI answers for proptech queries.</p>
              </div>

              <div className="bg-[#091424] border border-zinc-800 p-5 rounded-2xl space-y-2">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Demo Conversion Rate</span>
                <span className="text-3xl font-mono text-white font-extrabold block">3.12%</span>
                <p className="text-[10.5px] text-zinc-400 font-light font-sans">Ratio of organic target developers converting to interactive demo bookings.</p>
              </div>

              <div className="bg-[#091424] border border-zinc-805 p-5 rounded-2xl space-y-2">
                <span className="text-[9px] font-mono text-indigo-400 block font-bold uppercase tracking-widest">VC Inquiries Trailing</span>
                <span className="text-3xl font-mono text-white font-extrabold block">18</span>
                <p className="text-[10.5px] text-zinc-400 font-light font-sans">Inquiries received specifically through the secure investor room assets.</p>
              </div>

            </div>

          </div>
        )}

      </div>

      {/* Corporate Final Statement */}
      <div className="border-t border-zinc-850 pt-6 text-center text-[10.5px] font-mono text-zinc-500">
        <p className="max-w-4xl mx-auto leading-relaxed italic">
          Make the strategy suitable for a premium platform that wants to rank in Google Search, appear in AI-generated answers, attract high-value enterprise clients, and build credibility with strategic investors and major industry stakeholders.
        </p>
      </div>

    </div>
  );
}
