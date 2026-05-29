import React, { useState, useMemo } from 'react';
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
  Sliders,
  Download,
  Info,
  Shield,
  ShieldCheck,
  Building,
  Scale,
  Activity,
  UserCheck,
  LockKeyhole,
  Check,
  ChevronRight,
  HelpCircle,
  Eye,
  FileCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { investorOnePager } from '../data/investorOnePager';

interface InvestorOnePagerViewProps {
  isRtl: boolean;
}

// Simulated Sovereign Audit Trail Log Interface
interface AuditLogEvent {
  timestamp: string;
  firm: string;
  partner: string;
  action: string;
  hash: string;
  ipAddress: string;
}

export default function InvestorOnePagerView({ isRtl }: InvestorOnePagerViewProps) {
  // Global View Navigation within the Investor Relations Hub
  const [activeTab, setActiveTab] = useState<'kpi' | 'pitch' | 'trust' | 'legal' | 'gating'>('kpi');

  // Multi-tier State inputs
  // 1. Dashboard Financial Modelling Sliders
  const [acvUSD, setAcvUSD] = useState<number>(45000);
  const [customerCount, setCustomerCount] = useState<number>(120);
  const [annualChurn, setAnnualChurn] = useState<number>(4.5);
  const [cacUSD, setCacUSD] = useState<number>(15000);
  const [yoyGrowthRate, setYoyGrowthRate] = useState<number>(115); // % Growth

  // 2. Existing interactive A4 GTM Sidebar Parameters
  const [pilotCount, setPilotCount] = useState<number>(12);
  const [pipelineAED, setPipelineAED] = useState<number>(450);
  const [loiCount, setLoiCount] = useState<number>(8);
  const [seedAmount, setSeedAmount] = useState<string>("2.5");
  
  // Funding Split sliders
  const [productSplit, setProductSplit] = useState<number>(45);
  const [gtmSplit, setGtmSplit] = useState<number>(35);
  const [opsSplit, setOpsSplit] = useState<number>(20);

  // Editable founder details
  const [founderCTO, setFounderCTO] = useState<string>("Dr. Rami Al-Ghamdi");
  const [founderSales, setFounderSales] = useState<string>("Laith Raed");

  // Status for copying or printing
  const [copiedStatus, setCopiedStatus] = useState<boolean>(false);

  // NDA Gating simulator states
  const [gatingFirm, setGatingFirm] = useState<string>("Mubadala Investment Company");
  const [customFirm, setCustomFirm] = useState<string>("");
  const [leadPartnerName, setLeadPartnerName] = useState<string>("");
  const [isNdaSigned, setIsNdaSigned] = useState<boolean>(false);
  const [ndaUnlockLoading, setNdaUnlockLoading] = useState<boolean>(false);
  const [viewedConfidentialArr, setViewedConfidentialArr] = useState<boolean>(false);
  const [ndaError, setNdaError] = useState<string>("");
  const [auditLogs, setAuditLogs] = useState<AuditLogEvent[]>([
    {
      timestamp: "2026-05-29 02:40:11 UTC",
      firm: "Shorooq Partners",
      partner: "Yousef Al-Mubarak",
      action: "NDP / Series Seed Dealroom Access Granted",
      hash: "8a2f98e8f230e7c1543b35582f0d6cfd5ec99351de0022d4f216fae9188eef0a",
      ipAddress: "91.75.144.20"
    },
    {
      timestamp: "2026-05-29 03:02:44 UTC",
      firm: "Saudi Public Investment Fund (PIF)",
      partner: "Khalid Al-Harthi",
      action: "Downloaded Master SLA & Legal Architecture Framework",
      hash: "e340a5a3a4db2546a39d892040ce579069d10e056972bbff6bc2ffcbb5cdfa82",
      ipAddress: "193.220.122.95"
    }
  ]);

  // Integrated SLA Builder & Governance Parameters
  const [slaSelectedDoc, setSlaSelectedDoc] = useState<'privacy' | 'sla' | 'dpa' | 'tos'>('privacy');
  const [slaRetentionPeriod, setSlaRetentionPeriod] = useState<number>(7); // In years
  const [slaLiabilityMultiplier, setSlaLiabilityMultiplier] = useState<number>(1); // e.g., 1x, 2x
  const [slaUptimeTarget, setSlaUptimeTarget] = useState<number>(99.9); // % availability

  // Security Toggles / Trust Indicators
  const [trustSTCCloud, setTrustSTCCloud] = useState<boolean>(true);
  const [trustNca3Compliant, setTrustNca3Compliant] = useState<boolean>(true);
  const [trustDedApiKyc, setTrustDedApiKyc] = useState<boolean>(true);
  const [trustRowLevelSec, setTrustRowLevelSec] = useState<boolean>(true);
  const [trustAuditImmutable, setTrustAuditImmutable] = useState<boolean>(true);

  // Dynamic Valuation & CAC Payback Model computations
  const financialModels = useMemo(() => {
    // SaaS Economics formulas
    const arr = customerCount * acvUSD;
    const mrr = arr / 12;
    const grossMargin = 0.92; // 92% enterprise target
    const churnFraction = annualChurn / 100;
    const customerLifetimeMonths = churnFraction > 0 ? (1 / churnFraction) * 12 : 120;
    
    // LTV = ARPU * Gross Margin / Churn
    const ltv = churnFraction > 0 ? (acvUSD * grossMargin) / churnFraction : acvUSD * grossMargin * 10;
    const ltvToCacRatio = cacUSD > 0 ? (ltv / cacUSD).toFixed(1) : "N/A";
    const cacPaybackMonths = cacUSD > 0 && acvUSD > 0 ? ((cacUSD / (acvUSD / 12)) * grossMargin).toFixed(1) : "N/A";
    
    // 15x ARR multiple due to enterprise moat, bilingual engine, on-shore STC storage lock-in
    const valuation = arr * 15;

    // Projected ARR growth for 4 years
    const growthMultiplier = 1 + (yoyGrowthRate / 100);
    const y1ARR = arr;
    const y2ARR = arr * growthMultiplier;
    const y3ARR = arr * Math.pow(growthMultiplier, 2);
    const y4ARR = arr * Math.pow(growthMultiplier, 3);

    return {
      arr,
      mrr,
      ltv,
      ltvToCacRatio,
      cacPaybackMonths,
      valuation,
      projections: [y1ARR, y2ARR, y3ARR, y4ARR],
      grossMarginPct: grossMargin * 100
    };
  }, [acvUSD, customerCount, annualChurn, cacUSD, yoyGrowthRate]);

  // Trust Posture Index (0 - 100%)
  const trustIndex = useMemo(() => {
    let score = 20;
    if (trustSTCCloud) score += 20;
    if (trustNca3Compliant) score += 20;
    if (trustDedApiKyc) score += 15;
    if (trustRowLevelSec) score += 15;
    if (trustAuditImmutable) score += 10;
    return score;
  }, [trustSTCCloud, trustNca3Compliant, trustDedApiKyc, trustRowLevelSec, trustAuditImmutable]);

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

3. TRACTION METRICS (POST-INITIAL AUDIT)
- Pilots Secured: ${pilotCount} Active pilots inside KSA and UAE
- Pipeline Under Advisory: AED ${pipelineAED}M
- Letters of Intent: ${loiCount} Corporate SaaS LOIs Executed

4. SEEDROUND ASKS
- Target Capital Call: USD ${seedAmount}M Series Seed Allocation
- Product Dev (R&D): ${productSplit}% | GTM Growth: ${gtmSplit}% | Ops Compliance: ${opsSplit}%
- Regional Co-Founders: ${founderCTO} (CTO) & ${founderSales} (Growth)
    `;

    navigator.clipboard.writeText(rawText);
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 2000);
  };

  const notifyNdaSignStatus = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadPartnerName.trim()) {
      setNdaError(isRtl ? "يرجى إدخال اسم الشريك الرئيسي لتوقيع الاتفاقية" : "Please input Lead Partner Name to execute the NDA");
      return;
    }
    setNdaError("");
    setNdaUnlockLoading(true);

    setTimeout(() => {
      const finalFirmName = customFirm.trim() || gatingFirm;
      const fakeHash = Array.from({length: 64}, () => Math.floor(Math.random()*16).toString(16)).join('');
      const fakeIp = `${Math.floor(Math.random()*150 + 50)}.${Math.floor(Math.random()*180)}.${Math.floor(Math.random()*100)}.${Math.floor(Math.random()*200)}`;
      const now = new Date();
      const timestampText = `${now.toISOString().replace('T', ' ').slice(0, 19)} UTC`;

      const newEvent: AuditLogEvent = {
        timestamp: timestampText,
        firm: finalFirmName,
        partner: leadPartnerName,
        action: "Legally Authenticated Confidential NDA & Mapped Ledger",
        hash: fakeHash,
        ipAddress: fakeIp
      };

      setAuditLogs(prev => [newEvent, ...prev]);
      setIsNdaSigned(true);
      setNdaUnlockLoading(false);
      setViewedConfidentialArr(true);
    }, 1100);
  };

  // Adjust sliders helper
  const handleProductSplitChange = (val: number) => {
    setProductSplit(val);
    const remainder = 100 - val;
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fade-in text-zinc-100">
      
      {/* 👑 Executive Hub Head Section */}
      <div className="bg-[#091424] border border-zinc-800 rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 blur-3xl rounded-full pointer-events-none" />
        
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-[#C8973A]/10 border border-[#C8973A]/30 px-3 py-1 rounded-full text-[10px] font-mono text-[#C8973A] uppercase tracking-widest font-extrabold shadow-sm">
            <Sparkles size={11} className="text-gold animate-bounce" />
            <span>{isRtl ? "مركز المستثمر والامتثال السيادي" : "Institutional Investor & Sovereign Compliance Hub"}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-sans font-light tracking-tight text-white">
            {isRtl ? "بوابة نمو أردكا والامتثال التنظيمي" : "Ardaca.com Venture-Scale Economics & Trust Vault"}
          </h1>
          <p className="text-xs text-zinc-400 font-light leading-relaxed">
            {isRtl 
              ? "استكشف المؤشرات المالية السيادية، صمم الشروط القانونية المتبادلة وراجع اتفاقيات SLA وPDPL، وتواصل مع كبار المستثمرين الإقليميين بعد توقيع NDA الرقمي الآمن."
              : "Explore institutional-grade metrics, dynamic LTV calculators, sovereign SLA clause builders (aligned with UAE PDPL / NCA guidelines), and unlock NDA-gated private financials tracked transparently on an immutable audit ledger."}
          </p>
        </div>

        {/* Global Hub Navigation Toolbar */}
        <div className="shrink-0 flex items-center md:self-auto self-stretch gap-2.5">
          <button
            onClick={handlePrint}
            className="flex-1 md:flex-initial text-center justify-center py-2.5 px-4 text-xs font-mono font-bold uppercase tracking-wider rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Printer size={13} className="text-[#C8973A]" />
            <span>{isRtl ? "تصدير PDF" : "Print Pack"}</span>
          </button>
        </div>
      </div>

      {/* Primary Sub-Navigation Row */}
      <div className="flex flex-wrap items-center bg-[#07101C] p-1.5 rounded-xl border border-zinc-800 gap-1 select-none">
        <button
          onClick={() => setActiveTab('kpi')}
          className={`flex-1 min-w-[140px] py-3 px-4 text-xs font-mono uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'kpi' 
              ? 'bg-[#C8973A] text-zinc-950 font-black shadow-lg shadow-gold/10' 
              : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
          }`}
        >
          <TrendingUp size={13} />
          <span>{isRtl ? "مؤشرات النمو والتقييم" : "Growth & Valuation Dashboard"}</span>
        </button>
        <button
          onClick={() => setActiveTab('pitch')}
          className={`flex-1 min-w-[140px] py-3 px-4 text-xs font-mono uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'pitch' 
              ? 'bg-[#C8973A] text-zinc-950 font-black shadow-lg shadow-gold/10' 
              : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
          }`}
        >
          <Briefcase size={13} />
          <span>{isRtl ? "مذكرة الاستثمار (A4)" : "VC Pitch Memorandum (A4)"}</span>
        </button>
        <button
          onClick={() => setActiveTab('trust')}
          className={`flex-1 min-w-[140px] py-3 px-4 text-xs font-mono uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'trust' 
              ? 'bg-[#C8973A] text-zinc-950 font-black shadow-lg shadow-gold/10' 
              : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
          }`}
        >
          <ShieldCheck size={13} />
          <span>{isRtl ? "مركز الثقة والأمن" : "Sovereign Trust Center"}</span>
        </button>
        <button
          onClick={() => setActiveTab('legal')}
          className={`flex-1 min-w-[140px] py-3 px-4 text-xs font-mono uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'legal' 
              ? 'bg-[#C8973A] text-zinc-950 font-black shadow-lg shadow-gold/10' 
              : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
          }`}
        >
          <Scale size={13} />
          <span>{isRtl ? "مستودع الخصوصية والـ SLA" : "Privacy & Legal Gov Vault"}</span>
        </button>
        <button
          onClick={() => setActiveTab('gating')}
          className={`flex-1 min-w-[140px] py-3 px-4 text-xs font-mono uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer relative ${
            activeTab === 'gating' 
              ? 'bg-[#C8973A] text-zinc-950 font-black shadow-lg shadow-gold/10' 
              : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
          }`}
        >
          <LockKeyhole size={13} />
          <span>{isRtl ? "دخول المستثمرين المؤهلين" : "Investor Secure Room"}</span>
          {!isNdaSigned && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-[8px] px-1.5 py-0.5 font-bold animate-pulse">
              GATED
            </span>
          )}
        </button>
      </div>

      {/* Active Tab Screen Content Routing */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="space-y-10"
        >
          
          {/* ======================================================= */}
          {/* TAB 1: KPI & FINANCIAL MODEL CO-DESIGN WORKSTATION */}
          {/* ======================================================= */}
          {activeTab === 'kpi' && (
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
              
              {/* Left Side: Real-time SaaS Modeling parameter box */}
              <div className="xl:col-span-4 bg-[#091424] border border-zinc-850 rounded-2xl p-6 space-y-6">
                <div className="flex items-center gap-2 pb-3 border-b border-zinc-800">
                  <Sliders size={15} className="text-[#C8973A]" />
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white font-extrabold">
                    {isRtl ? "إعدادات النموذج المالي" : "B2B SaaS Simulation Engine"}
                  </h4>
                </div>

                <div className="space-y-5">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-400 flex justify-between">
                      <span>{isRtl ? "متوسط قيمة العقد السنوي (ACV)" : "Average Annual Contract (ACV)"}</span>
                      <span className="text-gold font-bold">${acvUSD.toLocaleString()} USD</span>
                    </label>
                    <input
                      type="range"
                      min={10000}
                      max={120000}
                      step={2500}
                      value={acvUSD}
                      onChange={(e) => setAcvUSD(parseInt(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-gold"
                    />
                    <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                      <span>$10k</span>
                      <span>{isRtl ? "الهدف النموذجي: $45,000" : "Enterprise Standard: $45k"}</span>
                      <span>$120k</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-400 flex justify-between">
                      <span>{isRtl ? "عدد العملاء المطورين النشطين" : "Active Enterprise Clients"}</span>
                      <span className="text-gold font-bold">{customerCount} {isRtl ? "مطور سيادي" : "Developers"}</span>
                    </label>
                    <input
                      type="range"
                      min={10}
                      max={500}
                      step={10}
                      value={customerCount}
                      onChange={(e) => setCustomerCount(parseInt(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-gold"
                    />
                    <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                      <span>10 Clients</span>
                      <span>{isRtl ? "المرحلة الأولى: 120" : "Y2 Target: 120 Clients"}</span>
                      <span>500 Clients</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-400 flex justify-between">
                      <span>{isRtl ? "نسبة التخلي السنوية (Annual Churn)" : "Annual Revenue Churn %"}</span>
                      <span className="text-red-400 font-bold">{annualChurn}%</span>
                    </label>
                    <input
                      type="range"
                      min={1.5}
                      max={15}
                      step={0.5}
                      value={annualChurn}
                      onChange={(e) => setAnnualChurn(parseFloat(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-400"
                    />
                    <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                      <span>1.5% {isRtl ? "عالمي ممتاز" : "Excellent"}</span>
                      <span>{isRtl ? "مستهدف: < 5%" : "Target: <7%"}</span>
                      <span>15% {isRtl ? "خطر مرتفع" : "Risk Block"}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-400 flex justify-between">
                      <span>{isRtl ? "تكلفة جلب العميل (Direct CAC)" : "Customer Acquisition Cost (CAC)"}</span>
                      <span className="text-[#C8973A] font-bold">${cacUSD.toLocaleString()} USD</span>
                    </label>
                    <input
                      type="range"
                      min={5000}
                      max={40000}
                      step={1000}
                      value={cacUSD}
                      onChange={(e) => setCacUSD(parseInt(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-gold"
                    />
                    <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                      <span>$5,000</span>
                      <span>{isRtl ? "مستهدف: $15,000" : "SDR Cost: $15k"}</span>
                      <span>$40,000</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-400 flex justify-between">
                      <span>{isRtl ? "معدل النمو السنوي المتثاقل" : "Year-over-Year Growth Rate"}</span>
                      <span className="text-emerald-400 font-bold">{yoyGrowthRate}% Growth</span>
                    </label>
                    <input
                      type="range"
                      min={50}
                      max={250}
                      step={5}
                      value={yoyGrowthRate}
                      onChange={(e) => setYoyGrowthRate(parseInt(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                    />
                    <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                      <span>50%</span>
                      <span>{isRtl ? "نمو سيادي متوازن" : "Sovereign Target: 115%"}</span>
                      <span>250%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#050D1A] rounded-xl border border-zinc-800 space-y-2 text-[10px] text-zinc-405 font-light leading-relaxed">
                  <div className="flex items-center gap-1 text-[#C8973A] font-bold uppercase tracking-tight">
                    <Info size={12} />
                    <span>{isRtl ? "خصائص الحوسبة السيادية" : "SaaS Economics Moat"}</span>
                  </div>
                  <p>
                    {isRtl 
                      ? "تضمن الخوادم السيادية وعلاقات الشراكة مع STC Cloud معدل بقاء عملاء مرتفع جداً يتجاوز 95% (معدل سنوي Churn أقل من 5٪)، مما يحقق حماية استثنائية لتدفقات الإيرادات المتكررة."
                      : "Sovereign data hosting triggers exceptionally low churn (<5%). By locking regional project files natively inside secure on-shore databases, exit barriers for main developers are maximized, guaranteeing standard enterprise contracts exceed multi-year targets."}
                  </p>
                </div>
              </div>

              {/* Right Side: Visual Stripe-grade Dashboard Panel */}
              <div className="xl:col-span-8 space-y-6">
                
                {/* Visual Cards Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  <div className="bg-[#091424] border border-zinc-850 p-5 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#C8973A]/5 blur-xl rounded-full" />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                      {isRtl ? "معدل الإيرادات السنوية المتكررة" : "Annual Recurring Revenue (ARR)"}
                    </span>
                    <p className="text-2xl font-mono font-black text-white tracking-tight">
                      ${financialModels.arr.toLocaleString()}
                    </p>
                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 mt-2 border-t border-zinc-800/80 pt-2">
                      <span>{isRtl ? "شهري ثابت: " : "Monthly MRR: "}</span>
                      <span className="text-emerald-400 font-bold">${Math.round(financialModels.mrr).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-[#091424] border border-[#C8973A]/25 p-5 rounded-2xl relative overflow-hidden shadow-inner">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#C8973A]/10 blur-xl rounded-full" />
                    <span className="text-[10px] font-mono text-zinc-505 uppercase tracking-widest text-[#C8973A] font-bold block mb-1">
                      {isRtl ? "تقييم العقد الإجمالي (LTV)" : "Customer Lifetime Value (LTV)"}
                    </span>
                    <p className="text-2xl font-mono font-black text-[#C8973A] tracking-tight">
                      ${Math.round(financialModels.ltv).toLocaleString()}
                    </p>
                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 mt-2 border-t border-zinc-800/80 pt-2">
                      <span>{isRtl ? "معدل LTV:CAC الإجمالي:" : "LTV : CAC Leverage Ratio:"}</span>
                      <span className="text-emerald-400 font-bold">{financialModels.ltvToCacRatio}x Ratio</span>
                    </div>
                  </div>

                  <div className="bg-[#091424] border border-zinc-850 p-5 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#C8973A]/5 blur-xl rounded-full" />
                    <span className="text-[10px] font-mono text-zinc-505 uppercase tracking-widest block mb-1">
                      {isRtl ? "فترة استرداد تكلفة جلب العميل" : "CAC Payback Period"}
                    </span>
                    <p className="text-2xl font-mono font-black text-white tracking-tight">
                      {financialModels.cacPaybackMonths} {isRtl ? "أشهر" : "Months"}
                    </p>
                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 mt-2 border-t border-zinc-800/80 pt-2">
                      <span>{isRtl ? "هامش الربح التشغيلي:" : "Target Gross Profit Margin:"}</span>
                      <span className="text-[#C8973A] font-bold">{financialModels.grossMarginPct}%</span>
                    </div>
                  </div>

                </div>

                {/* Main Projections Chart & Forecast Section */}
                <div className="bg-[#091424] border border-zinc-850 rounded-2xl p-6 space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-zinc-800">
                    <div className="space-y-1">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-white font-extrabold flex items-center gap-1.5">
                        <Activity size={14} className="text-[#C8973A] animate-pulse" />
                        <span>{isRtl ? "توقعات نمو الإيرادات المتكررة (ARR CAGR)" : "4-Year ARR Growth Projection (ACV Escalation)"}</span>
                      </h4>
                      <p className="text-[10px] text-zinc-400 font-light">
                        {isRtl 
                          ? "محاكاة فورية تعتمد على العوامل المالية المحددة في لوحة التحكم وتكرار نموذج الترخيص السنوي"
                          : "Calculated compound projections based on real-time ACV contracts and incremental YoY compound growth rates."}
                      </p>
                    </div>

                    <div className="bg-[#050D1A] rounded-xl border border-zinc-800/85 p-2 px-3 text-right">
                      <span className="text-[8px] font-mono text-zinc-500 uppercase block leading-none">{isRtl ? "تقدير التقييم السيادي (15x ARR)" : "Enterprise Valuation Multiple (15x)"}</span>
                      <span className="text-sm font-mono font-black text-white block mt-1">${(financialModels.valuation / 1000000).toFixed(1)}M USD</span>
                    </div>
                  </div>

                  {/* Built-in Gorgeous CSS-based Interactive Bar Projections Chart */}
                  <div className="grid grid-cols-4 gap-3 bg-[#050D1A] p-5 rounded-2xl border border-zinc-850 h-56 items-end relative">
                    
                    {/* Grid Lines Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between py-6 px-4 select-none pointer-events-none opacity-20">
                      <div className="border-b border-zinc-700 w-full" />
                      <div className="border-b border-zinc-700 w-full" />
                      <div className="border-b border-zinc-700 w-full" />
                      <div className="border-b border-zinc-700 w-full" />
                    </div>

                    {financialModels.projections.map((arrVal, idx) => {
                      // Determine max scale for percentages
                      const maxVal = financialModels.projections[3] || 1;
                      const pctHeight = Math.max(15, Math.min(100, (arrVal / maxVal) * 100));
                      const isBillionDollarScale = arrVal >= 100000000; // $100M ARR milestone for Unicorn status

                      return (
                        <div key={idx} className="flex flex-col items-center group h-full justify-end relative z-10">
                          
                          {/* Floating Detail Tooltip */}
                          <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#091424] border border-zinc-800 text-white rounded-lg p-2.5 text-center min-w-[120px] shadow-2xl space-y-0.5 select-none pointer-events-none">
                            <span className="text-[8px] font-mono text-[#C8973A] tracking-wider uppercase font-bold block">Year {idx + 1} Pipeline</span>
                            <span className="font-mono text-xs font-semibold block">${Math.round(arrVal).toLocaleString()}</span>
                            <span className="text-[8px] font-mono text-zinc-500 block">Valuation: ${(arrVal * 15 / 1000000).toFixed(1)}M</span>
                          </div>

                          {/* Interactive Animated SVG/CSS Bar */}
                          <div 
                            style={{ height: `${pctHeight}%` }}
                            className={`w-full max-w-[48px] rounded-t-xl transition-all duration-500 relative cursor-pointer ${
                              idx === 0 
                                ? 'bg-zinc-855 border border-zinc-700 hover:bg-zinc-800' 
                                : isBillionDollarScale 
                                  ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 shadow-md shadow-emerald-500/10' 
                                  : 'bg-gradient-to-t from-[#C8973A] to-[#E0BA67] hover:from-[#dca843] hover:to-[#ecd192] shadow-md shadow-gold/5'
                            }`}
                          >
                            <div className="absolute top-2 inset-x-0 mx-auto w-1 h-3/4 bg-white/10 rounded-full" />
                          </div>

                          <span className="font-sans font-extrabold text-[12px] text-zinc-150 mt-3 block">
                            Year {idx + 1}
                          </span>
                          <span className="font-mono text-[9px] text-zinc-400 block mt-0.5">
                            ${(arrVal / 1000000).toFixed(1)}M
                          </span>
                        </div>
                      );
                    })}

                  </div>

                  {/* Investor Metrics Assessment Indicators */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-zinc-800/80">
                    <div className="bg-[#050D1A] p-4 rounded-xl border border-zinc-850 flex items-start gap-3">
                      <div className="h-7 w-7 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/20">
                        <Check size={14} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-zinc-405 font-bold uppercase tracking-wider">{isRtl ? "معيار كفاءة رأس المال (LTV:CAC)" : "Venture-Scale LTV:CAC Grade"}</span>
                        <p className="text-xs text-zinc-400 font-light leading-snug">
                          {isRtl 
                            ? `النسبة الحالية هي ${financialModels.ltvToCacRatio}x. النسبة فوق 3x تعتبر ممتازة للتمويل وصناديق الاستثمار الجريء.`
                            : `Current model yields ${financialModels.ltvToCacRatio}x. Enterprise VC standard benchmarks rule anything above 3x to be Tier-1 efficiency.`}
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#050D1A] p-4 rounded-xl border border-zinc-850 flex items-start gap-3">
                      <div className="h-7 w-7 bg-[#C8973A]/10 rounded-lg flex items-center justify-center text-[#C8973A] shrink-0 border border-[#C8973A]/20">
                        <Target size={14} className="text-gold animate-pulse" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-zinc-405 font-bold uppercase tracking-wider">{isRtl ? "مؤشر حوسبة المليار دولار" : "Billion-Dollar IPO Runway"}</span>
                        <p className="text-xs text-zinc-400 font-light leading-snug">
                          {isRtl 
                            ? `الهدف هو $100M ARR لتصدير الشركة محلياً وعالمياً. النسبة المحققة حالياً: ${((financialModels.arr / 100000000) * 100).toFixed(1)}٪ من المسار المرجعي.`
                            : `Goal is $100M ARR for strategic IPO positioning. Current customized setting handles ${((financialModels.arr / 100000000) * 100).toFixed(1)}% of required baseline.`}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          )}

          {/* ======================================================= */}
          {/* TAB 2: VC PITCH MEMORANDUM & ONE PAGER RECHARGED */}
          {/* ======================================================= */}
          {activeTab === 'pitch' && (
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
              
              {/* Left Side: Traditional GTM Variable Sidebar */}
              <div className="xl:col-span-4 bg-[#091424] border border-zinc-800 rounded-2xl p-6 space-y-6">
                <div className="flex items-center gap-2 pb-3 border-b border-zinc-850">
                  <Sliders size={15} className="text-gold" />
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white font-extrabold">
                    {isRtl ? "محددات المذكرة النشطة" : "Active Memo Adjusters"}
                  </h4>
                </div>

                <div className="space-y-4">
                  <h5 className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-extrabold border-b border-zinc-850 pb-1">
                    1. Real-Time GTM Traction
                  </h5>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span>{isRtl ? "العملاء المطورين التجريبيين" : "Active Pilot Developers"}</span>
                      <strong className="text-gold font-bold">{pilotCount}</strong>
                    </div>
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
                    <div className="flex justify-between text-[11px] font-mono">
                      <span>{isRtl ? "إجمالي قيمة العقود الجارية" : "Pipeline Managed (AED)"}</span>
                      <strong className="text-gold font-bold">AED {pipelineAED}M</strong>
                    </div>
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
                    <div className="flex justify-between text-[11px] font-mono">
                      <span>{isRtl ? "خطابات التعاقد المبدئية (LOI)" : "Letters of Intent (LOI)"}</span>
                      <strong className="text-gold font-bold">{loiCount} Corporate</strong>
                    </div>
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

                <div className="space-y-4 pt-4 border-t border-zinc-850/50">
                  <h5 className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-extrabold border-b border-zinc-850 pb-1">
                    2. Capital Allocations & Founders
                  </h5>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-zinc-405 block">
                      Target Seed Stage Capital call ($M USD)
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500 font-mono text-xs">$</span>
                      <input
                        type="text"
                        value={seedAmount}
                        onChange={(e) => setSeedAmount(e.target.value)}
                        placeholder="2.5"
                        className="w-full pl-7 pr-12 py-2 bg-[#050D1A] border border-zinc-800 rounded-lg text-xs font-mono text-zinc-100"
                      />
                      <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-500 font-mono text-[10px]">USD M</span>
                    </div>
                  </div>

                  {/* Sliders splits */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                        <span>Product R&D Split</span>
                        <span className="text-zinc-300 font-bold">{productSplit}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="60"
                        value={productSplit}
                        onChange={(e) => handleProductSplitChange(parseInt(e.target.value))}
                        className="w-full accent-gold"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                        <span>GTM Sales Split</span>
                        <span className="text-zinc-300 font-bold">{gtmSplit}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="60"
                        value={gtmSplit}
                        onChange={(e) => handleGtmSplitChange(parseInt(e.target.value))}
                        className="w-full accent-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="text-[10px] font-mono text-zinc-405 block uppercase">Co-Founder CTO</label>
                    <input
                      type="text"
                      value={founderCTO}
                      onChange={(e) => setFounderCTO(e.target.value)}
                      className="w-full px-3 py-2 bg-[#050D1A] border border-zinc-800 rounded-lg text-xs text-zinc-100 font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-zinc-405 block uppercase">GCC Growth Partner</label>
                    <input
                      type="text"
                      value={founderSales}
                      onChange={(e) => setFounderSales(e.target.value)}
                      className="w-full px-3 py-2 bg-[#050D1A] border border-zinc-800 rounded-lg text-xs text-zinc-100 font-sans"
                    />
                  </div>
                </div>

                <div className="shrink-0 flex gap-2">
                  <button
                    onClick={handleCopyOnePagerRawText}
                    className="flex-1 text-center justify-center py-2.5 px-2 text-[10px] font-mono font-bold uppercase tracking-wider rounded-lg bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedStatus ? <Check className="text-emerald-400" size={12} /> : <Layers size={11} />}
                    <span>{copiedStatus ? "Copied" : "Copy Payload"}</span>
                  </button>
                </div>
              </div>

              {/* Right Side: The Print Layout Sheet Frame */}
              <div className="xl:col-span-8 space-y-6">
                
                {/* Visual A4 Board Wrapper */}
                <div id="print_a4_sandbox_frame" className="bg-white text-zinc-900 border border-zinc-300 rounded-2xl shadow-2xl p-8 xl:p-12 relative print:p-0 print:border-none print:shadow-none print:rounded-none overflow-hidden mx-auto max-w-[820px] min-h-[1050px] flex flex-col justify-between font-sans leading-relaxed select-text">
                  
                  {/* Outer Background Design Circle */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="space-y-6 select-text">
                    
                    {/* Header line brand block */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-zinc-800/80">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 bg-zinc-950 rounded flex items-center justify-center text-[#C8973A] font-extrabold text-xs">
                            A
                          </div>
                          <span className="font-sans font-black uppercase text-lg tracking-tight text-zinc-900">
                            {investorOnePager.companyName}
                          </span>
                        </div>
                        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-700 flex items-center gap-1.5">
                          <span>{isRtl ? "مذكرة رأس المال الاستثماري السيادي" : "VENTURE INVESTMENT MEMORANDUM"}</span>
                          <span className="h-1 w-1 bg-emerald-500 rounded-full" />
                          <span>Q2 2026</span>
                        </p>
                      </div>

                      <div className="text-right text-[9.5px] font-mono text-zinc-500 leading-tight space-y-0.5 shrink-0">
                        <div className="flex items-center sm:justify-end gap-1">
                          <Globe size={10} className="text-zinc-400" />
                          <span>{investorOnePager.website}</span>
                        </div>
                        <div className="flex items-center sm:justify-end gap-1">
                          <Mail size={10} className="text-zinc-400" />
                          <span>{investorOnePager.contactEmail}</span>
                        </div>
                        <div className="flex items-center sm:justify-end gap-1 text-zinc-900 font-bold">
                          <MapPin size={10} className="text-[#C8973A]" />
                          <span>{investorOnePager.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pitch Text Quote */}
                    <div className="bg-zinc-55 border-l-4 border-[#C8973A] p-4 text-[11px] font-medium text-zinc-800 italic rounded-r-lg leading-relaxed select-text">
                      "{investorOnePager.tagline}"
                    </div>

                    {/* Problem and Solution Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start my-1">
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-red-600 tracking-wider border-b border-zinc-200 pb-1.5">
                          <AlertCircle size={12} />
                          <span>{isRtl ? "الفجوة الإقليمية والمخاطر" : "The GCC Structural Gaps"}</span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-zinc-650 font-light select-text">
                          {investorOnePager.problem.text}
                        </p>

                        <div className="text-[11px] font-mono font-bold uppercase text-zinc-800 tracking-wide mt-2">
                          Featured Drivers:
                        </div>
                        <ul className="text-[10.5px] text-zinc-650 space-y-1.5 leading-snug pl-4 list-disc">
                          <li>Sovereign data hosting requirements fully locked within KSA & UAE limits.</li>
                          <li>Over 35 days standard progression claim disputes block liquidity.</li>
                          <li>Administrative fragmentation makes litigation risk exceed 10% of gross contract value.</li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-emerald-600 tracking-wider border-b border-zinc-200 pb-1.5">
                          <CheckCircle2 size={12} />
                          <span>{isRtl ? "الحل والتقنية السيادية" : "Sovereign Solution Vectors"}</span>
                        </div>
                        <p className="text-[11px] text-zinc-650 leading-relaxed mb-1">
                          {investorOnePager.solution.summary}
                        </p>

                        <div className="space-y-2 text-zinc-800">
                          {investorOnePager.solution.bullets.map((bullet, idx) => (
                            <div key={idx} className="text-[10.5px] leading-relaxed relative pl-4">
                              <span className="absolute left-0 top-1 text-[#C8973A] font-extrabold">•</span>
                              <strong className="text-zinc-900 font-bold block">{bullet.title}</strong>
                              <span className="text-zinc-600 text-[10px] font-light leading-snug">{bullet.description}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Market Cap & TAM segment narrative */}
                    <div className="bg-zinc-950 text-white rounded-xl p-4 space-y-3">
                      <div className="flex justify-between items-center border-b border-zinc-800 pb-1.5">
                        <Target size={12} className="text-[#C8973A]" />
                        <span className="text-[10px] font-mono text-gold uppercase tracking-widest font-bold">TAM - SAM - SOM Positioning</span>
                        <span className="text-[9px] font-mono text-zinc-400">GCC Vision 2030 Proptech Matrix</span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {investorOnePager.market.segments.map((seg, sIdx) => (
                          <div key={sIdx} className="border-l border-zinc-800 pl-3">
                            <div className="flex items-baseline gap-1 uppercase">
                              <span className="text-[10px] font-mono font-bold text-gold">{seg.title}</span>
                              <span className="text-sm font-mono font-black text-white">{seg.value}</span>
                            </div>
                            <p className="text-[9px] text-zinc-400 font-light font-sans leading-relaxed mt-0.5">
                              {seg.definition}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Capital Ask round calculations */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-zinc-50 border border-zinc-200 p-4 rounded-xl">
                      <div className="md:col-span-4 space-y-0.5">
                        <span className="text-[8px] font-mono text-amber-600 font-bold uppercase">ROUND ALLOCATION ASK</span>
                        <p className="text-lg font-mono font-black text-zinc-900">USD {seedAmount} Million</p>
                        <p className="text-[9.5px] font-sans font-bold text-zinc-500">Series Seed Capital Call</p>
                      </div>

                      <div className="md:col-span-8 grid grid-cols-3 gap-2">
                        <div className="bg-white border border-zinc-200 p-2 text-center rounded">
                          <p className="text-sm font-mono font-black text-zinc-900">{productSplit}%</p>
                          <p className="text-[8px] font-mono text-zinc-500 uppercase">Product R&D</p>
                        </div>
                        <div className="bg-white border border-zinc-200 p-2 text-center rounded">
                          <p className="text-sm font-mono font-black text-[#C8973A]">{gtmSplit}%</p>
                          <p className="text-[8px] font-mono text-zinc-500 uppercase">GTM Growth</p>
                        </div>
                        <div className="bg-white border border-zinc-200 p-2 text-center rounded">
                          <p className="text-sm font-mono font-black text-emerald-600">{opsSplit}%</p>
                          <p className="text-[8px] font-mono text-zinc-500 uppercase">Operations</p>
                        </div>
                      </div>
                    </div>

                    {/* Regional Co-founders matrix */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-[9.5px] font-mono font-extrabold uppercase text-zinc-900 tracking-wider border-b border-zinc-200 pb-1">
                          <Users size={11} />
                          <span>Co-Founders & RICS Leadership</span>
                        </div>
                        <div className="space-y-1 text-[10.5px] text-zinc-700 leading-snug">
                          <div>
                            <span className="font-bold text-zinc-900 block">Tariq Al-Mansoor</span>
                            <span className="text-zinc-550 block font-mono text-[9px]">Founder & Managing Director | ex-Aramco PMS & RICS Assessor</span>
                          </div>
                          <div className="pt-1">
                            <span className="font-bold text-zinc-900 block">{founderCTO}</span>
                            <span className="text-zinc-550 block font-mono text-[9px]">CTO & Cryptography Director | ex-STC Cloud Architect & Scale AI Lead</span>
                          </div>
                          <div className="pt-1">
                            <span className="font-bold text-zinc-900 block">{founderSales}</span>
                            <span className="text-zinc-550 block font-mono text-[9px]">Partner, Growth & Integrations | ex-Procore Enterprise Lead UAE</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-[9.5px] font-mono font-extrabold uppercase text-zinc-900 tracking-wider border-b border-zinc-200 pb-1">
                          <FileCheck size={11} />
                          <span>Regulatory Advisors & GCC Funds</span>
                        </div>
                        <div className="space-y-1.5 text-[10px] text-zinc-750 font-light leading-snug">
                          <div>
                            <strong className="text-zinc-900 block">Eng. Abdulaziz Al-Subaie</strong>
                            <span>Former Executive Director, KSA Municipal Affairs Authority</span>
                          </div>
                          <div>
                            <strong className="text-zinc-900 block">Prof. Mariam Al-Hashemi</strong>
                            <span>Advisor on UAE Personal Data Protection Law alignment & GDPR Strategy</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="border-t border-zinc-200 pt-3 flex flex-row justify-between items-center text-[8px] font-mono text-zinc-400 mt-6 leading-none">
                    <span>© 2026 ARDACA INC. STRICTLY PRIVATE & CONFIDENTIAL VENTURE DISCLOSURE.</span>
                    <span>RESTRICTED EXPORT PACK (NDA BOUND)</span>
                  </div>

                </div>

              </div>
              
            </div>
          )}

          {/* ======================================================= */}
          {/* TAB 3: SOVEREIGN TRUST & GOVERNANCE CENTER */}
          {/* ======================================================= */}
          {activeTab === 'trust' && (
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
              
              {/* Left Side: Security Toggles & Self-Assessment posture */}
              <div className="xl:col-span-5 bg-[#091424] border border-zinc-850 rounded-2xl p-6 space-y-6">
                <div className="flex items-center gap-2 pb-3 border-b border-zinc-805">
                  <ShieldCheck size={16} className="text-gold animate-pulse" />
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white font-extrabold">
                    {isRtl ? "تعديل التدفقات الأمنية" : "Trust Architecture Configurator"}
                  </h4>
                </div>

                <div className="space-y-4">
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    Toggle sovereign infrastructure configurations to calibrate real-world compliance posture score inside GCC municipal directories.
                  </p>

                  <div className="space-y-3.5 pt-2">
                    
                    <label className="flex items-start gap-3 cursor-pointer group bg-[#050D1A] p-3 rounded-lg border border-zinc-800 hover:border-zinc-700/80 transition-all select-none">
                      <input 
                        type="checkbox" 
                        checked={trustSTCCloud}
                        onChange={(e) => setTrustSTCCloud(e.target.checked)}
                        className="mt-1 accent-gold cursor-pointer" 
                      />
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-white block group-hover:text-gold transition-colors">Onshore Local STC / AWS Nodes</span>
                        <span className="text-[10px] text-zinc-500 block">No offshore storage routing to ensure UAE/KSA PDPL boundaries.</span>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer group bg-[#050D1A] p-3 rounded-lg border border-zinc-800 hover:border-zinc-700/80 transition-all select-none">
                      <input 
                        type="checkbox" 
                        checked={trustNca3Compliant}
                        onChange={(e) => setTrustNca3Compliant(e.target.checked)}
                        className="mt-1 accent-gold cursor-pointer" 
                      />
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-white block group-hover:text-gold transition-colors">NCA Class-3 Standard Hardening</span>
                        <span className="text-[10px] text-zinc-500 block">Rigid security governance models compliant with Saudi cybersecurity controls.</span>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer group bg-[#050D1A] p-3 rounded-lg border border-zinc-800 hover:border-zinc-700/80 transition-all select-none">
                      <input 
                        type="checkbox" 
                        checked={trustDedApiKyc}
                        onChange={(e) => setTrustDedApiKyc(e.target.checked)}
                        className="mt-1 accent-gold cursor-pointer" 
                      />
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-white block group-hover:text-gold transition-colors">Dubai DED Trade License API KYC</span>
                        <span className="text-[10px] text-zinc-500 block">Real-time validation of main contractors and subcontractors during onboarding.</span>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer group bg-[#050D1A] p-3 rounded-lg border border-zinc-800 hover:border-zinc-700/80 transition-all select-none">
                      <input 
                        type="checkbox" 
                        checked={trustRowLevelSec}
                        onChange={(e) => setTrustRowLevelSec(e.target.checked)}
                        className="mt-1 accent-gold cursor-pointer" 
                      />
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-white block group-hover:text-gold transition-colors">Row-Level Database Schema Isolation</span>
                        <span className="text-[10px] text-zinc-500 block">Cryptographic isolation prevents data leaks across multiple tenants.</span>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer group bg-[#050D1A] p-3 rounded-lg border border-zinc-800 hover:border-zinc-700/80 transition-all select-none">
                      <input 
                        type="checkbox" 
                        checked={trustAuditImmutable}
                        onChange={(e) => setTrustAuditImmutable(e.target.checked)}
                        className="mt-1 accent-gold cursor-pointer" 
                      />
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-white block group-hover:text-gold transition-colors">Immutable Audit Trail Logger</span>
                        <span className="text-[10px] text-zinc-500 block">Events hashed with SHA-256 for foolproof compliance audit logging.</span>
                      </div>
                    </label>

                  </div>

                </div>
              </div>

              {/* Right Side: Trust & Security Posture Visualization */}
              <div className="xl:col-span-7 space-y-6">
                
                {/* Visual Circle Gauge for Trust Index */}
                <div className="bg-[#091424] border border-zinc-850 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-1.5 max-w-md">
                    <span className="text-[9px] font-mono text-gold uppercase tracking-widest font-bold">Real-Time Risk Standing</span>
                    <h4 className="text-lg font-sans font-normal text-white">Sovereign Compliance Index</h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      This score factors STC cloud structures, NCA audit routines, and cryptographic isolate containers. Keep all boxes checked to maximize regional trust scoring.
                    </p>
                  </div>

                  {/* SVG Circle Gauge */}
                  <div className="relative h-28 w-28 shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="#050D1A" strokeWidth="8" fill="transparent" />
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="40" 
                        stroke="#C8973A" 
                        strokeWidth="8" 
                        fill="transparent" 
                        strokeDasharray={251.2}
                        strokeDashoffset={251.2 - (251.2 * trustIndex) / 100}
                        className="transition-all duration-700 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute text-center space-y-0.5">
                      <span className="text-xl font-mono font-black text-white">{trustIndex}%</span>
                      <span className="text-[8px] font-mono text-gold block uppercase font-bold">Secure</span>
                    </div>
                  </div>
                </div>

                {/* Sovereign Architecture Visual Map */}
                <div className="bg-[#091424] border border-zinc-850 rounded-2xl p-6 space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#C8973A] font-bold">Sovereign Data Shield (SDS) Flow</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    
                    <div className="bg-[#050D1A] p-4 rounded-xl border border-zinc-800 space-y-1.5">
                      <div className="text-[10px] font-mono font-bold text-white uppercase flex items-center gap-1">
                        <Layers size={11} className="text-gold" />
                        <span>1. Multi-tenant Ingress</span>
                      </div>
                      <p className="text-[10px] text-zinc-400 font-light leading-relaxed">
                        User verifies credentials at browser level. Security filters enforce TLS 1.3 encryption on onshore nodes before resolving database queries.
                      </p>
                    </div>

                    <div className="bg-[#050D1A] p-4 rounded-xl border border-zinc-800 space-y-1.5">
                      <div className="text-[10px] font-mono font-bold text-white uppercase flex items-center gap-1">
                        <Lock size={11} className="text-gold animate-pulse" />
                        <span>2. Row Isolation Wall</span>
                      </div>
                      <p className="text-[10px] text-zinc-400 font-light leading-relaxed">
                        Data schema segregates developer records cleanly using dynamic UUID row-level security. Completely blocking lateral access across different real estate tenants.
                      </p>
                    </div>

                    <div className="bg-[#050D1A] p-4 rounded-xl border border-zinc-800 space-y-1.5">
                      <div className="text-[10px] font-mono font-bold text-white uppercase flex items-center gap-1">
                        <Activity size={11} className="text-[#C8973A]" />
                        <span>3. Immutable Hashed Trail</span>
                      </div>
                      <p className="text-[10px] text-zinc-405 font-light leading-relaxed">
                        Progress variation estimates and billing changes are cryptographically signed and stored with SHA-256 logs, preventing retroactive audit disputes.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Cybersecurity Compliance Documentation Box */}
                <div className="bg-[#091424] border border-zinc-850 p-6 rounded-2xl space-y-3">
                  <h5 className="text-[11px] font-mono text-zinc-350 uppercase tracking-widest font-extrabold pb-2 border-b border-zinc-800">
                    Regulatory Certifications Readiness
                  </h5>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans text-zinc-400 leading-normal">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-zinc-200 font-bold">
                        <CheckCircle2 size={13} className="text-gold" />
                        <span>SDR Class-C Level 3 Readiness</span>
                      </div>
                      <p className="text-[10px] font-light">
                        Fully optimized to accommodate National Cybersecurity Authority (NCA) essential controls, securing multi-milliard Vision developments with peace of mind.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-zinc-200 font-bold">
                        <CheckCircle2 size={13} className="text-gold" />
                        <span>UAE PDPL / Executive Regulations</span>
                      </div>
                      <p className="text-[10px] font-light">
                        Bilingual document vaults map files locally within Abu Dhabi & Dubai regions. Fulfilling rigorous local sovereign content requirements for strategic real estate funds.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ======================================================= */}
          {/* TAB 4: INTEGRATED SLA & PRIVACY VAULT CLAUSE BUILDER */}
          {/* ======================================================= */}
          {activeTab === 'legal' && (
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
              
              {/* Left Side: Document selection and parameter adjustments */}
              <div className="xl:col-span-5 bg-[#091424] border border-zinc-850 rounded-2xl p-6 space-y-6">
                <div className="flex items-center gap-2 pb-3 border-b border-zinc-800">
                  <Sliders size={15} className="text-gold" />
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white font-extrabold">
                    {isRtl ? "محددات الصياغة القانونية" : "Interactive SLA Optimizer"}
                  </h4>
                </div>

                {/* Document Selector Menu */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block tracking-wider">Select Legal Template</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSlaSelectedDoc('privacy')}
                      className={`p-3 text-left rounded-lg border text-xs font-semibold uppercase flex flex-col justify-between transition-all cursor-pointer ${
                        slaSelectedDoc === 'privacy' 
                          ? 'bg-[#C8973A] text-zinc-950 border-[#C8973A] font-extrabold shadow-lg shadow-gold/5' 
                          : 'bg-[#050D1A] text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      <Shield size={14} className="mb-2" />
                      <span>Privacy Policy (UAE PDPL)</span>
                    </button>

                    <button
                      onClick={() => setSlaSelectedDoc('sla')}
                      className={`p-3 text-left rounded-lg border text-xs font-semibold uppercase flex flex-col justify-between transition-all cursor-pointer ${
                        slaSelectedDoc === 'sla' 
                          ? 'bg-[#C8973A] text-zinc-950 border-[#C8973A] font-extrabold shadow-lg shadow-gold/5' 
                          : 'bg-[#050D1A] text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      <Briefcase size={14} className="mb-2" />
                      <span>SLA (Uptime Limits)</span>
                    </button>

                    <button
                      onClick={() => setSlaSelectedDoc('dpa')}
                      className={`p-3 text-left rounded-lg border text-xs font-semibold uppercase flex flex-col justify-between transition-all cursor-pointer ${
                        slaSelectedDoc === 'dpa' 
                          ? 'bg-[#C8973A] text-zinc-950 border-[#C8973A] font-extrabold shadow-lg shadow-gold/5' 
                          : 'bg-[#050D1A] text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      <UserCheck size={14} className="mb-2" />
                      <span>Data Protection Addend</span>
                    </button>

                    <button
                      onClick={() => setSlaSelectedDoc('tos')}
                      className={`p-3 text-left rounded-lg border text-xs font-semibold uppercase flex flex-col justify-between transition-all cursor-pointer ${
                        slaSelectedDoc === 'tos' 
                          ? 'bg-[#C8973A] text-zinc-950 border-[#C8973A] font-extrabold shadow-lg shadow-gold/5' 
                          : 'bg-[#050D1A] text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      <Scale size={14} className="mb-2" />
                      <span>Terms of Service Agreement</span>
                    </button>
                  </div>
                </div>

                {/* Parameters adjustments Sliders for SLA */}
                <div className="space-y-4 pt-3 border-t border-zinc-800">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block tracking-wider">Configure Dynamic Clauses</span>
                  
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-zinc-400 flex justify-between">
                      <span>Data Retention Period :</span>
                      <strong className="text-gold">{slaRetentionPeriod} Years</strong>
                    </label>
                    <input
                      type="range"
                      min={3}
                      max={15}
                      step={1}
                      value={slaRetentionPeriod}
                      onChange={(e) => setSlaRetentionPeriod(parseInt(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-gold"
                    />
                    <span className="text-[9px] font-sans text-zinc-500 block italic leading-none">
                      * Standard legal practice under GCC Civil Code requires keeping variation claims logs for 10 years.
                    </span>
                  </div>

                  <div className="space-y-1 pt-2">
                    <label className="text-[11px] font-mono text-zinc-400 flex justify-between">
                      <span>Liability Cap Multiplier :</span>
                      <strong className="text-gold">{slaLiabilityMultiplier}x Year Net fees</strong>
                    </label>
                    <input
                      type="range"
                      min={1}
                      max={5}
                      step={1}
                      value={slaLiabilityMultiplier}
                      onChange={(e) => setSlaLiabilityMultiplier(parseInt(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-gold"
                    />
                  </div>

                  <div className="space-y-1 pt-2">
                    <label className="text-[11px] font-mono text-zinc-400 flex justify-between">
                      <span>Guaranteed Platform Uptime :</span>
                      <strong className="text-gold">{slaUptimeTarget}% availability</strong>
                    </label>
                    <input
                      type="range"
                      min={99}
                      max={99.99}
                      step={0.01}
                      value={slaUptimeTarget}
                      onChange={(e) => setSlaUptimeTarget(parseFloat(e.target.value))}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-gold"
                    />
                    <div className="flex justify-between text-[9px] text-[#C8973A] font-mono">
                      <span>99.0%</span>
                      <span>Target: {slaUptimeTarget}%</span>
                      <span>99.99% (Sovereign Dual Hosts)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: The live rendering of actual legal wording */}
              <div className="xl:col-span-7 bg-[#091424] border border-zinc-850 rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-zinc-800 select-none">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#C8973A] font-extrabold leading-none">
                      Dynamic Clause Assessment Panel
                    </h4>
                    <span className="text-[9px] text-zinc-500 font-mono mt-1 block">Live wordings adapt to inputs</span>
                  </div>
                  <button
                    onClick={() => {
                        alert(isRtl ? "تصدير البنود القانونية بنجاح!" : "Authorized plain-text clause copied to clipboard!");
                    }}
                    className="p-1.5 px-3 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] font-mono uppercase font-bold text-zinc-350 cursor-pointer"
                  >
                    ExportAuthorized
                  </button>
                </div>

                <div className="bg-[#050D1A] p-5 rounded-xl border border-zinc-900 font-mono text-[11px] text-zinc-300 leading-relaxed font-light space-y-4 max-h-[420px] overflow-y-auto select-all">
                  
                  {slaSelectedDoc === 'privacy' && (
                    <div className="space-y-4 font-sans font-light">
                      <div className="text-xs font-mono font-bold text-white uppercase pb-1 border-b border-zinc-800">
                        UAE Personal Data Protection Law (PDPL) Secure Privacy Framework
                      </div>
                      <p>
                        This Privacy Framework maps dynamic compliance matrices executed directly within on-shore nodes.
                        Under UAE Federal Decree-Law No. 45/2021, the Controller ensures all commercial estimation records, 
                        bidding logs, trade licenses, and Emirates ID logs are fully hosted on local, restricted networks (such as STC Cloud nodes in UAE-South-01).
                      </p>
                      <p className="border-l-2 border-gold pl-3 py-1 italic bg-[#091424]/50 rounded-r">
                        <strong>CLAUSE 4.1 (RETENTION LIMIT):</strong> Mapped subcontractor trade license files and bid telemetry data will be securely isolated and retained for exactly <strong className="text-gold">{slaRetentionPeriod} years</strong> from the date of final project container closure, subsequent to which automated micro-deletion procedures will completely scrub all database metadata under Zero-Recovery rules.
                      </p>
                      <p>
                        Any transfer of confidential real estate blueprints or master BOQ databases outside UAE boundaries is strictly restricted, unless backed by strategic regulatory exception logs recorded transparently on our immutable ledger.
                      </p>
                    </div>
                  )}

                  {slaSelectedDoc === 'sla' && (
                    <div className="space-y-4 font-sans font-light">
                      <div className="text-xs font-mono font-bold text-white uppercase pb-1 border-b border-zinc-800">
                        Enterprise Service Level Agreement (SLA) Matrix
                      </div>
                      <p>
                        This document establishes strict SLA uptime standards governing the Ardaca.com BuildFlow engine.
                        The platform guarantees active container response times to enable continuous progress variation checks.
                      </p>
                      <p className="border-l-2 border-gold pl-3 py-1 italic bg-[#091424]/50 rounded-r">
                        <strong>SECTION 2.1 (UPTIME GUARANTEE):</strong> The Vendor guarantees a monthly Service Availability level of exactly <strong className="text-gold">{slaUptimeTarget}%</strong> on all on-shore regional host nodes. In the event system telemetry flags service degradation exceeding the defined limits, Service Credits will be credited to the primary Client account.
                      </p>
                      <p className="border-l-2 border-gold pl-3 py-1 italic bg-[#091424]/50 rounded-r">
                        <strong>SECTION 5.4 (LIABILITY CAP):</strong> Aggregate monetary liability under this Enterprise Agreement for negligence or platform interruption is strictly capped at <strong className="text-gold">{slaLiabilityMultiplier}x</strong> the total annual fees paid by the Client in the twelve (12) months preceding the incident.
                      </p>
                    </div>
                  )}

                  {slaSelectedDoc === 'dpa' && (
                    <div className="space-y-4 font-sans font-light">
                      <div className="text-xs font-mono font-bold text-white uppercase pb-1 border-b border-zinc-800 font-mono">
                        GCC Sovereign Data Processing Addendum (DPA)
                      </div>
                      <p>
                        This Addendum supplements core subscription service agreements to protect personal data during active progress billing verification cycles.
                      </p>
                      <p>
                        The controller and technical service provider confirm that row-level Postgres isolating rules completely bar lateral query attempts.
                        Any diagnostic log tracking during system maintenance is automatically anonymized, preventing access to subcontractor commercial pricing rates.
                      </p>
                      <p className="border-l-2 border-gold pl-3 py-1 italic bg-[#091424]/50 rounded-r font-sans">
                        <strong>DATA SHIELD PROTOCOL:</strong> All KYC metadata uploads mapping verified corporate license structures are retained for exactly <strong className="text-gold">{slaRetentionPeriod} years</strong>, fully aligning with municipal integrity audit programs under sovereign surveillance laws.
                      </p>
                    </div>
                  )}

                  {slaSelectedDoc === 'tos' && (
                    <div className="space-y-4 font-sans font-light">
                      <div className="text-xs font-mono font-bold text-white uppercase pb-1 border-b border-zinc-800">
                        Ardaca platform Terms of Service
                      </div>
                      <p>
                        These Terms govern all digital interaction matrices across developers, main contractors, subcontractors, and suppliers.
                        By creating active project containers, users commit to zero rate-leaking, sealed comparative bid conditions, and bilingual transparency.
                      </p>
                      <p>
                        System failure claims must go through independent arbitration under UAE Arbitration policies, avoiding structural disruption toVision projects.
                      </p>
                      <p className="border-l-2 border-gold pl-3 py-1 italic bg-[#091424]/50 rounded-r">
                        <strong>CLAUSE 10.2 (ARBITRATION STANDINGS):</strong> If localized platform uptime lapses past <strong className="text-gold">{(100 - slaUptimeTarget).toFixed(2)}%</strong> in any calendar month, municipal estimators can trigger the service credit refund claim under the authorized arbitration parameters of GCC municipal law.
                      </p>
                    </div>
                  )}

                </div>
              </div>

            </div>
          )}

          {/* ======================================================= */}
          {/* TAB 5: SECURE INVESTOR ROOM HOVER & NDA SIMULATOR */}
          {/* ======================================================= */}
          {activeTab === 'gating' && (
            <div className="space-y-8">
              
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Dynamic Lock / Unlock form simulator */}
                <div className="xl:col-span-5 bg-[#091424] border border-zinc-850 rounded-2xl p-6 space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-2xl rounded-full" />
                  
                  <div className="flex items-center gap-2 pb-3 border-b border-zinc-800 select-none">
                    <LockKeyhole size={16} className={`text-gold ${!isNdaSigned ? 'animate-pulse' : ''}`} />
                    <h4 className="text-xs font-mono uppercase tracking-widest text-white font-extrabold pb-0.5">
                      {isNdaSigned ? "Cleared Institutional Credentials" : "Institutional Clearance Terminal"}
                    </h4>
                  </div>

                  {!isNdaSigned ? (
                    <form onSubmit={notifyNdaSignStatus} className="space-y-4">
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        To access confidential ARR breakouts, client LOIs, strategic capital roadmap multiples, and audited revenue spreadsheets, please identify your firm and authorize the Digital NDA.
                      </p>

                      <div className="space-y-1.5 pt-2">
                        <label className="text-[11px] font-mono text-zinc-400 block">Select Government-Linked Sovereign Fund</label>
                        <select
                          value={gatingFirm}
                          onChange={(e) => setGatingFirm(e.target.value)}
                          className="w-full px-3 py-2 bg-[#050D1A] border border-zinc-800 rounded-lg text-xs text-zinc-200 focus:ring-1 focus:ring-gold/30 appearance-none cursor-pointer"
                        >
                          <option value="Mubadala Investment Company">Mubadala Investment Company (UAE)</option>
                          <option value="Saudi Public Investment Fund (PIF)">Saudi Public Investment Fund (PIF / SDR)</option>
                          <option value="ADQ Abu Dhabi Power">ADQ Abu Dhabi</option>
                          <option value="Shorooq Partners B2B Fund">Shorooq Partners</option>
                          <option value="Custom Family Office / VC Entity">Other Corporate VC Fund / Family Office</option>
                        </select>
                      </div>

                      {gatingFirm.includes("Custom") && (
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-mono text-zinc-400 block">Custom Institutional Entity Name</label>
                          <input
                            type="text"
                            value={customFirm}
                            onChange={(e) => setCustomFirm(e.target.value)}
                            placeholder="Al-Suwaidi Asset Management"
                            className="w-full px-3 py-2 bg-[#050D1A] border border-zinc-800 rounded-lg text-xs text-zinc-200"
                          />
                        </div>
                      )}

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono text-zinc-400 block">Lead Managing Partner Name</label>
                        <input
                          type="text"
                          value={leadPartnerName}
                          onChange={(e) => setLeadPartnerName(e.target.value)}
                          placeholder="H.E. Ahmed Al-Maktoum"
                          className="w-full px-3 py-2 bg-[#050D1A] border border-zinc-800 rounded-lg text-xs text-zinc-200"
                        />
                      </div>

                      {ndaError && (
                        <div className="p-3 bg-red-950/40 border border-red-900/40 rounded-lg flex items-center gap-2 text-[10px] text-red-400 font-mono">
                          <AlertCircle size={12} />
                          <span>{ndaError}</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={ndaUnlockLoading}
                        className="w-full py-2.5 bg-gradient-to-r from-[#C8973A] to-[#E0BA67] hover:from-[#b6832e] hover:to-[#cd9b3b] text-zinc-950 font-mono font-bold text-xs uppercase rounded-lg tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 disabled:opacity-50"
                      >
                        {ndaUnlockLoading ? "Decrypting Cryptographic Keys..." : "Authorize Regulatory NDA & Sign"}
                      </button>
                    </form>
                  ) : (
                    <div className="space-y-5">
                      <div className="p-4 bg-emerald-950/20 border border-emerald-900/30 rounded-xl space-y-1.5 text-center">
                        <CheckCircle2 className="mx-auto text-emerald-400" size={24} />
                        <h5 className="text-xs font-bold text-emerald-400">Clearance Verified (Confidential Module Unlocked)</h5>
                        <p className="text-[10px] text-zinc-400 font-mono">
                          NDA Signed: {leadPartnerName} ({customFirm.trim() || gatingFirm})
                        </p>
                      </div>

                      <div className="space-y-2">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase block tracking-widest text-center">ACTIVE SESSION TELEMETRY</span>
                        <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-850 font-mono text-[10px] text-zinc-400 space-y-1">
                          <div className="flex justify-between">
                            <span>Sovereign Subnet:</span>
                            <span className="text-white font-bold">STC-Cloud-Riyadh-Edge</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Isolation Node:</span>
                            <span className="text-white font-bold">node-sa-south-02</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Data Integrity Check:</span>
                            <span className="text-emerald-400 font-bold">SHA-255-MATCH</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setIsNdaSigned(false);
                          setViewedConfidentialArr(false);
                        }}
                        className="w-full py-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-[10px] font-bold uppercase rounded-lg cursor-pointer"
                      >
                        Revoke Terminal Access Keys
                      </button>
                    </div>
                  )}

                </div>

                {/* Right Side: The confidential financial report unlocked under NDA */}
                <div className="xl:col-span-7 bg-[#091424] border border-zinc-850 rounded-2xl p-6 space-y-5 relative min-h-[380px] flex flex-col justify-between">
                  
                  {/* Blurring overlay for gated documents */}
                  {!isNdaSigned && (
                    <div className="absolute inset-0 bg-[#091424]/90 backdrop-blur-md rounded-2xl z-20 flex flex-col items-center justify-center p-8 text-center space-y-4">
                      <div className="h-12 w-12 bg-red-950/20 border border-red-900/40 rounded-full flex items-center justify-center text-red-400 animate-pulse">
                        <LockKeyhole size={20} />
                      </div>
                      <div className="space-y-1 max-w-sm">
                        <h4 className="text-sm font-bold text-zinc-150 uppercase tracking-widest">Confidential ARR Breakout Vault</h4>
                        <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                          This section contains highly sensitive investor information, project pipeline estimates, and comparative venture-scale economics. Sign the digital NDA on the left to verify credentials.
                        </p>
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500 bg-[#050D1A] p-2 rounded border border-zinc-800/80">
                        IMMUTABLE REVENUE BLOCK - 256-BIT ENCRYPTION ACTIVE
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-zinc-800">
                      <span className="text-[10px] font-mono text-gold uppercase tracking-widest font-extrabold flex items-center gap-1.5">
                        <Eye size={13} className="text-gold animate-bounce" />
                        <span>Confidential ARR Breakout & GCC Traction Matrix</span>
                      </span>
                      <span className="text-[8px] font-mono text-red-500 uppercase font-black bg-red-500/10 px-2.5 py-1 rounded border border-red-505/20">PRE-SERIES A ONLY</span>
                    </div>

                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      This private breakdown details recurring SaaS accounts mapping municipal developers and GCC Vision pipelines. Data is isolated from core public facing landing structures.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="bg-[#050D1A] p-4 rounded-xl border border-zinc-800 space-y-2">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase block">Q2 2026 Sovereign Pipeline</span>
                        <div className="space-y-1 font-mono text-xs">
                          <div className="flex justify-between border-b border-zinc-850/50 pb-1">
                            <span className="text-zinc-400">DAR Al-Arkan Corp:</span>
                            <span className="text-white font-bold">$185k ARR Commit</span>
                          </div>
                          <div className="flex justify-between border-b border-zinc-850/50 pb-1">
                            <span className="text-zinc-400">Diriyah Gate Authority:</span>
                            <span className="text-white font-bold">$220k Pilot Portal</span>
                          </div>
                          <div className="flex justify-between border-b border-zinc-850/50 pb-1">
                            <span className="text-zinc-400">DAMAC Real Estate UAE:</span>
                            <span className="text-white font-bold">$140k Sandbox SLA</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#050D1A] p-4 rounded-xl border border-zinc-800 space-y-2">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase block">Venture Round Modeling Indicators</span>
                        <div className="space-y-1 font-mono text-xs">
                          <div className="flex justify-between border-b border-zinc-850/50 pb-1">
                            <span className="text-zinc-400">Target Series A Valuation:</span>
                            <span className="text-gold font-bold">$48M Estimate</span>
                          </div>
                          <div className="flex justify-between border-b border-zinc-850/50 pb-1">
                            <span className="text-zinc-400">Subcontractor expansion model:</span>
                            <span className="text-emerald-400 font-bold">12% CAGR</span>
                          </div>
                          <div className="flex justify-between border-b border-zinc-850/50 pb-1">
                            <span className="text-zinc-400">Gross Contribution margin:</span>
                            <span className="text-[#C8973A] font-bold">92.4% Net</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Visual bar tracker of pipeline */}
                    <div className="bg-[#050D1A] p-4 rounded-xl border border-zinc-850 space-y-2.5">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase block">Monetization Milestones toward $1B Scale</span>
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-mono">
                          <span>Active MRR expansion</span>
                          <span className="text-[#C8973A] font-bold">78% Complete</span>
                        </div>
                        <div className="h-2 bg-[#091424] rounded-full overflow-hidden border border-zinc-800">
                          <div className="h-full bg-gradient-to-r from-[#C8973A] to-[#E0BA67] w-[78%] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-zinc-950/40 rounded-xl border border-zinc-805 text-[9px] text-zinc-400 font-mono text-center">
                    CLASSIFIED MATERIALS. DEDICATED HOST IP RECORDED IN IMMUTABLE COMPLIANCE REGISTRIES.
                  </div>

                </div>

              </div>

              {/* Immutable Sovereign Audit Ledger Dashboard Panel */}
              <div className="bg-[#091424] border border-zinc-850 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-zinc-800 justify-between">
                  <div className="flex items-center gap-2">
                    <Activity size={14} className="text-gold animate-pulse" />
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#C8973A] font-extrabold pb-0.5">
                      Sovereign Cryptographic Audit Ledger
                    </h4>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">Tamper-Proof SHA-256 Logs</span>
                </div>

                <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                  {auditLogs.map((log, lIdx) => (
                    <div key={lIdx} className="bg-[#050D1A] p-3 rounded-lg border border-zinc-850 flex flex-col sm:flex-row justify-between text-[10.5px] font-mono gap-3">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-zinc-500">[{log.timestamp}]</span>
                          <span className="text-white font-bold">{log.firm}</span>
                          <span className="text-zinc-400">({log.partner})</span>
                        </div>
                        <p className="text-zinc-300 font-light text-[10px]">{log.action}</p>
                      </div>

                      <div className="text-right sm:text-right space-y-0.5 select-all shrink-0">
                        <span className="text-[9.5px] text-zinc-500 block truncate max-w-[150px] sm:max-w-[280px]">HASH: {log.hash}</span>
                        <div className="text-[9px] text-[#C8973A] font-bold">IP_SRC: {log.ipAddress}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </motion.div>
      </AnimatePresence>

    </div>
  );
}
