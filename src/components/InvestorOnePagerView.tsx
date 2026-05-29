import React, { useState } from 'react';
import { 
  Printer, 
  Sparkles, 
  TrendingUp, 
  Briefcase, 
  Users, 
  DollarSign, 
  Target, 
  AlertCircle, 
  FileText, 
  Mail, 
  Globe, 
  MapPin, 
  Layers, 
  CheckCircle2, 
  Lock, 
  Percent, 
  Sliders,
  Download,
  Info
} from 'lucide-react';
import { investorOnePager, OnePagerData, TeamMember, BusinessTier, MarketPillar, UseOfFunds } from '../data/investorOnePager';

interface InvestorOnePagerViewProps {
  isRtl: boolean;
}

export default function InvestorOnePagerView({ isRtl }: InvestorOnePagerViewProps) {
  // Interactive GTM State controls for Series Seed / Pre-Series A customization
  const [pilotCount, setPilotCount] = useState<number>(12);
  const [pipelineAED, setPipelineAED] = useState<number>(450);
  const [loiCount, setLoiCount] = useState<number>(8);
  const [seedAmount, setSeedAmount] = useState<string>("2.5");
  
  // Funding split sliders
  const [productSplit, setProductSplit] = useState<number>(45);
  const [gtmSplit, setGtmSplit] = useState<number>(35);
  const [opsSplit, setOpsSplit] = useState<number>(20);

  // Editable founder details
  const [founderCTO, setFounderCTO] = useState<string>("Dr. Rami Al-Ghamdi");
  const [founderSales, setFounderSales] = useState<string>("Laith Raed");

  // Status for copying or printing
  const [copiedStatus, setCopiedStatus] = useState<boolean>(false);

  // Master recalculation of funding dollars
  const totalFundingUSD = parseFloat(seedAmount) || 0;
  const productUSD = (totalFundingUSD * (productSplit / 100)).toFixed(2);
  const gtmUSD = (totalFundingUSD * (gtmSplit / 100)).toFixed(2);
  const opsUSD = (totalFundingUSD * (opsSplit / 100)).toFixed(2);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyOnePagerRawText = () => {
    const rawText = `
INVESTOR ONE-PAGER: ${investorOnePager.companyName}
Tagline: ${investorOnePager.tagline}
Website: ${investorOnePager.website} | Contact: ${investorOnePager.contactEmail}
Location: ${investorOnePager.location}

1. THE PROBLEM
${investorOnePager.problem.text}
GCC Construction pipeline: $1.6 Trillion+ under active developments.
Average claim verification cycle: 35 days.

2. ARDACA SOLUTIONS & KEY PRODUCT PILLARS
- Sovereign Data Integrity & Regional NCA Standard Alignment: AWS and STC regional private cloud hosts.
- Master BOQ Relational Compute Engine: Resolves 30,000 BOQ lines under 15 seconds.
- Sealed Bidding Rooms: Prevents developer leakage with automated bid-level analytics.

3. TRACTION METRICS (LIVE PERFORMANCE)
- Pilots Secured: ${pilotCount} Active pilots inside KSA and UAE
- Pipeline Under Advisory: AED ${pipelineAED}M
- Letters of Intent: ${loiCount} Corporate SaaS LOIs Executed

4. MARKET DYNAMICS (TAM/SAM/SOM)
- TAM: USD 4.2 Billion (Global Construction SaaS & Procurement)
- SAM: USD 650 Million (Middle East ConTech Spend Cap)
- SOM: USD 84 Million (Ardaca Serviceable Addressable Market)

5. SUBSCRIPTION & REVENUE MODEL
ACV target: USD 45,000+ average contract values.
Tiers:
- Growth: USD 12,500/yr
- Pro Builder: USD 35,000/yr
- Sovereign Enterprise: USD 95,000/yr

6. SEED INVESTMENT PROPOSAL
Target Capital Call: USD ${seedAmount}M Series Seed Allocation
Gated Project Milestones:
- Product Development (R&D): ${productSplit}% ($${productUSD}M)
- Regional Growth Sales (GTM): ${gtmSplit}% ($${gtmUSD}M)
- Operational Sovereignty & Regulatory Compliance (Ops): ${opsSplit}% ($${opsUSD}M)

7. LEADERSHIP TEAM
- Tariq Al-Mansoor (RICS certified, ex-Aramco PMC)
- ${founderCTO} (CTO, Head of Cryptography, ex-Scale AI & STC Cloud)
- ${founderSales} (Head of GCC Growth, ex-Procore Enterprise Accounts)
    `;

    navigator.clipboard.writeText(rawText);
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 2000);
  };

  // Adjust sliders to total 100% when one moves
  const handleProductSplitChange = (val: number) => {
    setProductSplit(val);
    const remainder = 100 - val;
    // Distribute remainder proportionally
    const totalGtmOps = gtmSplit + opsSplit;
    if (totalGtmOps > 0) {
      setGtmSplit(Math.round(remainder * (gtmSplit / totalGtmOps)));
      setOpsSplit(100 - val - Math.round(remainder * (gtmSplit / totalGtmOps)));
    } else {
      setGtmSplit(Math.round(remainder / 2));
      setOpsSplit(remainder - Math.round(remainder / 2));
    }
  };

  const handleGtmSplitChange = (val: number) => {
    setGtmSplit(val);
    const remainder = 100 - val;
    const totalProdOps = productSplit + opsSplit;
    if (totalProdOps > 0) {
      setProductSplit(Math.round(remainder * (productSplit / totalProdOps)));
      setOpsSplit(100 - val - Math.round(remainder * (productSplit / totalProdOps)));
    } else {
      setProductSplit(Math.round(remainder / 2));
      setOpsSplit(remainder - Math.round(remainder / 2));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fade-in text-zinc-100">
      
      {/* Top Banner Alert & Informative Guidance */}
      <div className="bg-[#091424] border border-zinc-800 rounded-2xl p-6 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="absolute top-0 right-0 w-44 h-44 bg-gold/5 blur-3xl rounded-full pointer-events-none" />
        <div className="space-y-2 max-w-3xl">
          <span className="text-[10px] uppercase font-mono tracking-widest text-gold font-bold bg-gold/10 px-2.5 py-1 rounded-full border border-gold/20">
            Series Seed / Pre-Series A Materials
          </span>
          <h3 className="text-xl font-sans font-normal tracking-tight text-white">
            Pre-configured Venture Capital One-Pager (A4 Mock)
          </h3>
          <p className="text-xs text-zinc-400 font-light leading-relaxed">
            Use this workstation simulator to configure real-world GCC ConTech and PropTech data values in real-time. 
            The interactive panel on the left updates the live printed-A4 style sheet on the right instantly. Click <strong className="text-gold">Print One-Pager</strong> to output standard system print layouts or export to pre-formatted PDF.
          </p>
        </div>

        <div className="shrink-0 flex items-center md:self-auto self-stretch gap-2.5">
          <button
            onClick={handleCopyOnePagerRawText}
            className="flex-1 md:flex-initial text-center justify-center p-3 text-xs font-mono font-bold uppercase tracking-wider rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 transition-colors flex items-center gap-2 cursor-pointer"
          >
            {copiedStatus ? <CheckCircle2 size={13} className="text-emerald-400" /> : <Layers size={13} />}
            <span>{copiedStatus ? "Copied Raw Text" : "Copy Raw Payload"}</span>
          </button>
          
          <button
            onClick={handlePrint}
            className="flex-1 md:flex-initial text-center justify-center p-3 text-xs font-mono font-bold uppercase tracking-wider rounded-xl bg-gold hover:bg-[#E0BA67] text-zinc-950 transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-gold/10"
          >
            <Printer size={13} />
            <span>Print One-Pager (PDF)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Workstation Interactive Controls */}
        <div className="xl:col-span-4 bg-[#091424] border border-zinc-800 rounded-2xl p-6 space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-zinc-850">
            <Sliders size={15} className="text-gold animate-pulse" />
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-extrabold pb-0.5">
              Live Presentation Inputs
            </h4>
          </div>

          {/* Section 1: Traction Variable Configuration */}
          <div className="space-y-4">
            <h5 className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-extrabold">
              1. Real-Time Traction Parameters
            </h5>
            
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-405 flex justify-between">
                <span>Active Pilot Customers</span>
                <span className="text-gold font-bold">{pilotCount} Developers</span>
              </label>
              <input
                type="range"
                min="3"
                max="30"
                value={pilotCount}
                onChange={(e) => setPilotCount(parseInt(e.target.value))}
                className="w-full accent-gold bg-[#050D1A]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-405 flex justify-between">
                <span>Pipeline Managed (AED Millions)</span>
                <span className="text-gold font-bold">AED {pipelineAED}M</span>
              </label>
              <input
                type="range"
                min="50"
                max="950"
                step="25"
                value={pipelineAED}
                onChange={(e) => setPipelineAED(parseInt(e.target.value))}
                className="w-full accent-gold bg-[#050D1A]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-zinc-405 flex justify-between">
                <span>Letters of Intent (LOI)</span>
                <span className="text-gold font-bold">{loiCount} Enterprise Units</span>
              </label>
              <input
                type="range"
                min="1"
                max="20"
                value={loiCount}
                onChange={(e) => setLoiCount(parseInt(e.target.value))}
                className="w-full accent-gold bg-[#050D1A]"
              />
            </div>
          </div>

          {/* Section 2: Financial Ask Parameters */}
          <div className="space-y-4 pt-3 border-t border-zinc-850/50">
            <h5 className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-extrabold">
              2. Seed Stage Capital Allocation
            </h5>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-zinc-405 block">
                Target Fundraising Goal (USD Millions)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500 font-mono text-xs">$</span>
                <input
                  type="text"
                  value={seedAmount}
                  onChange={(e) => setSeedAmount(e.target.value)}
                  placeholder="2.5"
                  className="w-full pl-7 pr-12 py-2 bg-[#050D1A] border border-zinc-800 rounded-lg text-xs font-mono text-zinc-100 focus:outline-none focus:ring-1 focus:ring-gold/30"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-500 font-mono text-[10px]">USD M</span>
              </div>
            </div>

            {/* Slider splits */}
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>Product R&D</span>
                  <span className="text-zinc-300 font-bold">{productSplit}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="60"
                  value={productSplit}
                  onChange={(e) => handleProductSplitChange(parseInt(e.target.value))}
                  className="w-full accent-gold bg-[#050D1A]"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>GTM & Sales</span>
                  <span className="text-zinc-300 font-bold">{gtmSplit}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="60"
                  value={gtmSplit}
                  onChange={(e) => handleGtmSplitChange(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 bg-[#050D1A]"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>Operations & NCA Compliance</span>
                  <span className="text-zinc-300 font-bold">{opsSplit}%</span>
                </div>
                <input
                  type="range"
                  disabled
                  value={opsSplit}
                  className="w-full accent-sky-500 bg-[#050D1A] opacity-65 cursor-not-allowed"
                />
                <span className="text-[9px] font-mono text-zinc-500 italic block">
                  * Operations is automatically calculated to reach exactly 100% aggregate allocation.
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Professional Human Credentials Placeholder */}
          <div className="space-y-3 pt-3 border-t border-zinc-850/50">
            <h5 className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-extrabold">
              3. Regional Co-Founders Matrix
            </h5>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-zinc-405 block">
                CTO (Head of Cryptography) placeholder
              </label>
              <input
                type="text"
                value={founderCTO}
                onChange={(e) => setFounderCTO(e.target.value)}
                className="w-full px-3 py-2 bg-[#050D1A] border border-zinc-800 rounded-lg text-xs text-zinc-200 font-sans focus:outline-none focus:ring-1 focus:ring-gold/30"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-zinc-405 block">
                Growth Director / Partner placeholder
              </label>
              <input
                type="text"
                value={founderSales}
                onChange={(e) => setFounderSales(e.target.value)}
                className="w-full px-3 py-2 bg-[#050D1A] border border-zinc-800 rounded-lg text-xs text-zinc-200 font-sans focus:outline-none focus:ring-1 focus:ring-gold/30"
              />
            </div>
          </div>

          <div className="p-3 bg-zinc-950/40 rounded-xl border border-zinc-850 text-[10px] text-zinc-400 leading-relaxed space-y-1 font-sans">
            <div className="flex items-center gap-1.5 font-bold text-gold">
              <Info size={11} className="shrink-0" />
              <span>Investment Focus</span>
            </div>
            <span>
              This sheet highlights local PropTech tailwinds: high Aramco PMCs involvement, Saudi Balady integration, Dubai DED regulatory mandates, and high ACVs ($45k+ average).
            </span>
          </div>
        </div>

        {/* Right Side: Professional A4 Print Sheet Container */}
        <div id="print_a4_sandbox_frame" className="xl:col-span-8 bg-white text-zinc-900 border border-zinc-300 rounded-3xl shadow-2xl p-8 xl:p-12 relative print:p-0 print:border-none print:shadow-none print:rounded-none overflow-hidden mx-auto max-w-[820px] min-h-[1100px] flex flex-col justify-between font-sans leading-relaxed">
          
          {/* Internal A4 Content Wrapper */}
          <div className="space-y-8 select-text">

            {/* A4 Section 1: Header Brand Block */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b-2 border-zinc-900/85">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 bg-zinc-950 rounded flex items-center justify-center text-white font-extrabold text-sm tracking-tighter">
                    A
                  </div>
                  <span className="font-sans font-black uppercase text-xl tracking-tight text-zinc-900">
                    {investorOnePager.companyName}
                  </span>
                </div>
                <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#128C7E] flex items-center gap-1">
                  <span>SERIES SEED INVESTMENT MEMORANDUM</span>
                  <span className="h-1 w-1 bg-emerald-500 rounded-full" />
                  <span>Q2 22026/2026</span>
                </p>
              </div>

              {/* Contact Credentials Metas */}
              <div className="text-right sm:text-right text-[10px] font-mono text-zinc-650 space-y-0.5 leading-tight shrink-0">
                <div className="flex items-center sm:justify-end gap-1">
                  <Globe size={11} />
                  <span>{investorOnePager.website}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1">
                  <Mail size={11} />
                  <span>{investorOnePager.contactEmail}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1 text-zinc-900 font-bold">
                  <MapPin size={11} className="text-[#C8973A]" />
                  <span>{investorOnePager.location}</span>
                </div>
              </div>
            </div>

            {/* Tagline Pitch */}
            <div className="bg-zinc-50 border-l-4 border-[#C8973A] p-4 text-xs font-semibold text-zinc-800 tracking-tight leading-relaxed select-text italic">
              "{investorOnePager.tagline}"
            </div>

            {/* Two Column Section: Problem vs Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start my-4">
              
              {/* Problem Statement Block */}
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-red-600 tracking-widest border-b border-zinc-200 pb-1.5">
                  <AlertCircle size={13} />
                  <span>The Regional Friction</span>
                </div>
                <p className="text-[11.5px] leading-relaxed text-zinc-700 font-light select-all">
                  {investorOnePager.problem.text}
                </p>
                
                {/* Micro Problem Stat Indicators */}
                <div className="grid grid-cols-3 gap-1 pt-1 text-center">
                  {investorOnePager.problem.metrics.map((m, idx) => (
                    <div key={idx} className="bg-zinc-50 border border-zinc-150 p-2 rounded">
                      <p className="text-[14px] font-mono font-black text-zinc-90 w-full truncate leading-none mb-1">{m.label.toLowerCase().includes('pipeline') ? "$1.6T+" : m.value}</p>
                      <p className="text-[8px] font-mono text-zinc-500 tracking-tight leading-tight uppercase font-semibold">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Pillars */}
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-emerald-600 tracking-widest border-b border-zinc-200 pb-1.5">
                  <CheckCircle2 size={13} />
                  <span>The Sovereign Solution</span>
                </div>
                <p className="text-[11px] text-zinc-650 leading-normal mb-1">
                  {investorOnePager.solution.summary}
                </p>

                <div className="space-y-2 text-zinc-800">
                  {investorOnePager.solution.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="text-[11px] leading-relaxed relative pl-4">
                      <span className="absolute left-0 top-1 text-[#C8973A] font-extrabold">•</span>
                      <strong className="text-zinc-900 font-bold block">{bullet.title}</strong>
                      <span className="text-zinc-600 text-[10.5px] font-light leading-snug">{bullet.description}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Market Sizing Metric Pillars */}
            <div className="space-y-3 bg-zinc-950 text-white rounded-xl p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 blur-xl rounded-full" />
              
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <div className="flex items-center gap-2">
                  <Target size={13} className="text-gold" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-extrabold">
                    Market Size Quantification (TAM / SAM / SOM)
                  </span>
                </div>
                <span className="text-[9px] font-mono text-zinc-400 uppercase italic">GCC Construction Tech Focus</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {investorOnePager.market.segments.map((seg, sIdx) => (
                  <div key={sIdx} className="border-l border-zinc-800 pl-3 space-y-1">
                    <div className="flex items-baseline gap-1.5 leading-none">
                      <span className="font-mono text-xs text-gold font-extrabold">{seg.title}</span>
                      <span className="font-mono text-base font-black text-white">{seg.value}</span>
                    </div>
                    <p className="text-[9.5px] leading-relaxed text-zinc-400 font-light font-mono">
                      {seg.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Interactive Traction Banner (Bento Box style) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-lg text-center space-y-0.5">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide">Enterprise Pilots</span>
                <p className="text-xl font-mono text-zinc-900 font-black tracking-tight">{pilotCount} Secured</p>
                <span className="text-[8px] font-mono text-[#128C7E] uppercase font-bold">KSA & UAE Developers</span>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-lg text-center space-y-0.5">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide">Pipeline Managed</span>
                <p className="text-xl font-mono text-zinc-900 font-black tracking-tight text-emerald-600">AED {pipelineAED}M</p>
                <span className="text-[8px] font-mono text-zinc-500 uppercase font-bold">Project Volume Advisory</span>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-lg text-center space-y-0.5">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide">Letters of Intent</span>
                <p className="text-xl font-mono text-zinc-900 font-black tracking-tight">{loiCount} Signed</p>
                <span className="text-[8px] font-mono text-zinc-500 uppercase font-bold">Pre-SLA Commits</span>
              </div>
            </div>

            {/* Subscription Tiers overview */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-zinc-900 tracking-widest border-b border-zinc-200 pb-1.5">
                <Briefcase size={13} />
                <span>B2B Licensing Plan & Average ACV</span>
              </div>
              
              <p className="text-[10.5px] text-zinc-600">
                {investorOnePager.businessModel.summary} <strong>{investorOnePager.businessModel.arpuEstimate}</strong>. {investorOnePager.businessModel.expansionLogic}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {investorOnePager.businessModel.tiers.map((t, idx) => (
                  <div key={idx} className="p-3 bg-zinc-50/50 border border-zinc-150 rounded-lg space-y-1">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] font-bold text-zinc-900 truncate max-w-[80px]">{t.name}</span>
                      <span className="font-mono text-[9px] font-bold text-[#C8973A]">{t.price}</span>
                    </div>
                    <ul className="text-[8.5px] text-zinc-500 space-y-1 leading-snug">
                      {t.features.slice(0, 3).map((f, fIdx) => (
                        <li key={fIdx} className="truncate">• {f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Seed Round Allocation Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-zinc-50 border border-zinc-200 p-4 rounded-xl">
              
              <div className="md:col-span-4 space-y-1">
                <span className="text-[8px] font-mono text-[#C8973A] font-bold uppercase tracking-wider block">THE CAPITAL CALL</span>
                <p className="text-lg font-mono font-black text-zinc-900 select-all tracking-tight">USD {seedAmount}M</p>
                <p className="text-[9.5px] font-sans font-bold text-zinc-650 leading-tight">Series Seed Round</p>
              </div>

              <div className="md:col-span-8 grid grid-cols-3 gap-2">
                <div className="bg-white border border-zinc-200/80 p-2 rounded text-center">
                  <p className="text-[15px] font-mono font-bold text-zinc-80 px-1 truncate leading-none mb-1 text-gold">{productSplit}%</p>
                  <p className="text-[8px] font-mono text-zinc-500 uppercase leading-none">Product R&D</p>
                  <p className="text-[8px] font-mono text-zinc-400 mt-0.5 font-bold">${productUSD}M</p>
                </div>
                <div className="bg-white border border-zinc-200/80 p-2 rounded text-center">
                  <p className="text-[15px] font-mono font-bold text-zinc-80 px-1 truncate leading-none mb-1 text-emerald-600">{gtmSplit}%</p>
                  <p className="text-[8px] font-mono text-zinc-500 uppercase leading-none">GTM Sales</p>
                  <p className="text-[8px] font-mono text-zinc-400 mt-0.5 font-bold">${gtmUSD}M</p>
                </div>
                <div className="bg-white border border-zinc-200/80 p-2 rounded text-center">
                  <p className="text-[15px] font-mono font-bold text-zinc-80 px-1 truncate leading-none mb-1 text-sky-600">{opsSplit}%</p>
                  <p className="text-[8px] font-mono text-zinc-500 uppercase leading-none">Operations</p>
                  <p className="text-[8px] font-mono text-zinc-400 mt-0.5 font-bold">${opsUSD}M</p>
                </div>
              </div>

            </div>

            {/* A4 Section 5: Partners & Team Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-zinc-900 tracking-wider border-b border-zinc-200 pb-1">
                  <Users size={11} />
                  <span>Sovereign Co-Founders Matrix</span>
                </div>

                <div className="space-y-2 leading-snug">
                  <div className="text-[10px]">
                    <span className="font-bold text-zinc-900 block">Tariq Al-Mansoor</span>
                    <span className="text-zinc-500 font-mono text-[9px]">Founder & MD | ex-Aramco Lead PMC</span>
                  </div>
                  <div className="text-[10px]">
                    <span className="font-bold text-zinc-900 block">{founderCTO}</span>
                    <span className="text-zinc-500 font-mono text-[9px]">CTO & Cryptography | ex-Scale AI, STC Cloud</span>
                  </div>
                  <div className="text-[10px]">
                    <span className="font-bold text-zinc-900 block">{founderSales}</span>
                    <span className="text-zinc-500 font-mono text-[9px]">Partner, Growth | ex-Procore Middle East</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-zinc-900 tracking-wider border-b border-zinc-200 pb-1">
                  <Lock size={10} />
                  <span>Key Advisors & PropTech Funds</span>
                </div>

                <div className="space-y-2 leading-snug">
                  {investorOnePager.advisors.map((adv, aIdx) => (
                    <div key={aIdx} className="text-[9.5px]">
                      <span className="font-bold text-zinc-900 block">{adv.name}</span>
                      <span className="text-zinc-500 font-light">{adv.role}, {adv.affiliation}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Institutional Print Warning Footer */}
          <div className="border-t border-zinc-200 pt-3 flex flex-row justify-between items-center text-[8.5px] font-mono text-zinc-400 select-none tracking-tighter leading-none mt-6">
            <span>© 2026 ARDACA BUILDFLOW ECOSYSTEM. CONFIDENTIAL ACQUISITION MEMORANDUM.</span>
            <span>RESTRICTED DIST WITH NDA</span>
          </div>

        </div>

      </div>

    </div>
  );
}
