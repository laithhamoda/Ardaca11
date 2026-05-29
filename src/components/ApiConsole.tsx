import React, { useState, useEffect } from "react";
import {
  Database,
  KeyRound,
  Check,
  RefreshCw,
  Layers,
  ShieldCheck,
  Sparkles,
  Lock,
  UserCheck,
  FileText,
  ExternalLink,
  ChevronRight,
  Activity,
  Globe,
  Send,
  HelpCircle,
  FileSpreadsheet,
  Award,
  BookOpen,
  Sliders,
  AlertCircle,
  Clock,
  Fingerprint
} from "lucide-react";
import { apiDocumentation } from "../data";

interface ApiConsoleProps {
  lang?: "en" | "ar";
}

export default function ApiConsole({ lang = "en" }: ApiConsoleProps) {
  const isRtl = lang === "ar";
  const [activeTab, setActiveTab] = useState<"sandbox" | "handshake" | "security_checker" | "policy">("sandbox");
  const [selectedEndpoint, setSelectedEndpoint] = useState(0);

  // Endpoint 1 inputs (/auth/kyc-register)
  const [kycTradeLicense, setKycTradeLicense] = useState("CN-994412-B");
  const [kycAuthority, setKycAuthority] = useState("DED Dubai");
  const [kycRole, setKycRole] = useState("Contractor");
  const [kycEmiratesId, setKycEmiratesId] = useState("784-1985-1234567-9");
  const [kycDocumentIpfs, setKycDocumentIpfs] = useState("ipfs://bafybeicm/license.pdf");

  // Endpoint 2 inputs (/procurement/inquiry/publish)
  const [procProjectId, setProcProjectId] = useState("PJ-2024-089");
  const [procTitle, setProcTitle] = useState("Façade Structure Glazing Block-2");
  const [procBoqHash, setProcBoqHash] = useState("0xf94abcc7722...");
  const [procStrategy, setProcStrategy] = useState("VerifiedOnly");
  const [procRecipient, setProcRecipient] = useState("Subcontractor");

  // Endpoint 3 inputs (/consultants/quotations/evaluate)
  const [evalProjectRef, setEvalProjectRef] = useState("BT-2024-012");
  const [evalAuditTrail, setEvalAuditTrail] = useState(true);
  const [evalBudgetThreshold, setEvalBudgetThreshold] = useState(2500000);

  // Common simulation state
  const [loadingSimulation, setLoadingSimulation] = useState(false);
  const [simulationComplete, setSimulationComplete] = useState(false);
  const [simulationLatency, setSimulationLatency] = useState(0);
  const [simulationSuccess, setSimulationSuccess] = useState(true);

  // Selected preset certificate for the Credentials Decoder tab
  const [selectedCertPreset, setSelectedCertPreset] = useState<"contractor" | "consultant" | "supplier">("contractor");

  // Sliding token session countdown values
  const [sessionTimeLeft, setSessionTimeLeft] = useState(3558);
  const [selectedEnvironment, setSelectedEnvironment] = useState<"production" | "sandbox" | "tamm">("sandbox");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTimeLeft((prev) => (prev > 10 ? prev - 1 : 3600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCountdown = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 1800);
  };

  const handleSimulateCall = () => {
    setLoadingSimulation(true);
    setSimulationComplete(false);
    const latencyVal = Math.floor(65 + Math.random() * 95);
    
    setTimeout(() => {
      setLoadingSimulation(false);
      setSimulationComplete(true);
      setSimulationLatency(latencyVal);
      setSimulationSuccess(true);
    }, 1000);
  };

  const getEnvBaseUrl = () => {
    if (selectedEnvironment === "production") return apiDocumentation.baseUrls.production;
    if (selectedEnvironment === "tamm") return apiDocumentation.baseUrls.tamm_connector;
    return apiDocumentation.baseUrls.sandbox;
  };

  return (
    <div 
      id="extended_api_console" 
      dir={isRtl ? "rtl" : "ltr"}
      className={`text-zinc-100 p-4 md:p-8 max-w-7xl mx-auto space-y-8 font-sans transition-all ${isRtl ? "rtl text-right" : "ltr text-left"}`}
    >
      
      {/* Visual Ambient Glow Elements */}
      <div className="absolute top-0 right-1/4 w-[380px] h-[380px] bg-emerald-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[420px] h-[420px] bg-teal-500/5 rounded-full filter blur-[140px] pointer-events-none" />

      {/* Header Panel */}
      <div className="border-b border-zinc-900 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative">
        <div className="space-y-2">
          <div className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase flex items-center gap-2">
            <Activity size={12} className="text-emerald-400 animate-pulse" />
            <span className="bg-emerald-500/10 px-2 py-0.5 rounded text-[9px] border border-emerald-500/20 font-bold">STATE AUTHENTICATION NODES ACTIVE</span>
            <span className="text-zinc-700">•</span>
            <span>Registry Version {apiDocumentation.version}</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-1">
            BuildFlow <span className="font-extrabold text-[#f3f4f6]">Ecosystem Gateways</span>
          </h1>
          <p className="text-xs text-zinc-400 max-w-2xl font-light leading-relaxed">
            Federally authenticated national gateways mapping secure structural project bids against the <span className="text-emerald-400 font-medium font-mono">Dubai National Economic Register (NER)</span> protocols. Integrated with biometric UAE PASS identity criteria.
          </p>
        </div>

        {/* Dynamic sliding countdown security indicator badge */}
        <div className="bg-zinc-950 border border-zinc-900/80 p-3.5 rounded-xl flex items-center gap-3 w-full md:w-auto self-stretch md:self-auto">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <div className="font-mono text-[11px] leading-tight flex-grow sm:flex-grow-0">
            <span className="text-zinc-500 block uppercase text-[8px] tracking-widest font-bold">mTLS Token Lifetime</span>
            <span className="text-emerald-400 font-bold">{formatCountdown(sessionTimeLeft)}</span>
            <span className="text-zinc-400 text-[10px] pl-1.5">(Sliding Window)</span>
          </div>
          <div className="w-16 bg-zinc-900 h-1 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-500 h-full transition-all duration-1000" 
              style={{ width: `${(sessionTimeLeft / 3600) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Environment Selector and Telemetry Standards Widget Banner */}
      <div id="sec_telemetry_banner" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Environment Selector Grid cell */}
        <div className="bg-[#121214] border border-zinc-900 rounded-xl p-5 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-zinc-400 flex items-center gap-1.5">
              <Globe size={13} className="text-emerald-400" />
              <span>Gateway Node Server</span>
            </span>
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">mTLS HTTPS</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "sandbox", label: "Sandbox", status: "Active" },
              { id: "production", label: "Production", status: "Protected" },
              { id: "tamm", label: "TAMM HUB", status: "Government" }
            ].map((env) => (
              <button
                key={env.id}
                onClick={() => {
                  setSelectedEnvironment(env.id as any);
                  setSimulationComplete(false);
                }}
                className={`py-2 px-1 text-center rounded text-[10px] font-mono uppercase transition-all border cursor-pointer ${
                  selectedEnvironment === env.id
                    ? "bg-emerald-500/10 text-emerald-450 border-emerald-500/40 font-bold"
                    : "bg-zinc-950/40 border-zinc-900 text-zinc-500 hover:text-zinc-350 hover:border-zinc-800"
                }`}
              >
                <div>{env.label}</div>
                <span className={`text-[8px] leading-none ${selectedEnvironment === env.id ? "text-emerald-350 font-bold" : "text-zinc-650"}`}>
                  • {env.status}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-zinc-950 border border-zinc-900 px-3 py-2 rounded-lg flex justify-between items-center text-[11px] font-mono text-zinc-400">
            <span className="truncate max-w-[190px]">{getEnvBaseUrl()}</span>
            <button
              onClick={() => handleCopyText(getEnvBaseUrl(), "activeUrl")}
              className="text-zinc-500 hover:text-emerald-400 transition-colors cursor-pointer"
              title="Copy link"
            >
              {copiedText === "activeUrl" ? (
                <Check size={12} className="text-emerald-400" />
              ) : (
                <FileText size={12} />
              )}
            </button>
          </div>
        </div>

        {/* Telemetry Integrity Parameters column 2 */}
        <div className="bg-[#121214] border border-zinc-900 rounded-xl p-5 flex flex-col justify-between space-y-3">
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-zinc-400 flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-emerald-400" />
            <span>Cryptographic Trust Seals</span>
          </span>

          <div className="space-y-1.5 text-xs text-zinc-300 font-sans">
            <div className="flex justify-between items-center text-[10px] font-mono pb-1.5 border-b border-zinc-900/60 text-zinc-400">
              <span className="text-zinc-500 uppercase">Verification Rule</span>
              <span className="text-zinc-200">HMAC-SHA256 Signed Tenders</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono pb-1.5 border-b border-zinc-900/60 text-zinc-400">
              <span className="text-zinc-500 uppercase">Gateway TLS Spec</span>
              <span className="text-zinc-200">Mutual SSL Client attestation</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
              <span className="text-zinc-500 uppercase">Federal Authority</span>
              <span className="text-emerald-450 font-semibold">NER Authenticated</span>
            </div>
          </div>

          <div className="bg-emerald-950/25 border border-emerald-900/30 p-2.5 rounded text-[10px] text-emerald-400/90 leading-relaxed">
            All commercial transactions are cryptographically signed to guard procurement privacy and avoid competitor pricing leaks.
          </div>
        </div>

        {/* Global Security Session Badge details */}
        <div className="bg-[#121214] border border-zinc-900 rounded-xl p-5 flex flex-col justify-between space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-zinc-400 flex items-center gap-1.5">
              <Lock size={13} className="text-emerald-400" />
              <span>Ecosystem Session Certificate</span>
            </span>
            <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-pulse" />
          </div>

          <p className="text-[11px] text-zinc-400 font-light leading-snug">
            Your unique node trust credentials key assigned during bilateral UAE PASS registration procedures:
          </p>

          <div className="bg-zinc-950 border border-zinc-900 p-2.5 rounded-lg text-zinc-300 font-mono text-[10.5px] flex items-center justify-between gap-2 overflow-hidden">
            <span className="truncate text-emerald-400/90 font-bold font-mono">DXB-PORTAL-KEY-784-8559021-998</span>
            <button
              onClick={() => handleCopyText("DXB-PORTAL-KEY-784-8559021-998", "dxbKey")}
              className="text-zinc-500 hover:text-emerald-400 transition-colors shrink-0 cursor-pointer"
            >
              {copiedText === "dxbKey" ? (
                <Check size={11} className="text-emerald-400" />
              ) : (
                <FileText size={11} />
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Tabs navigation panel */}
      <div className="flex border-b border-zinc-900 overflow-x-auto gap-4 md:gap-8 scrollbar-thin">
        {[
          { id: "sandbox", label: "Interactive Schema Gateways", icon: Database },
          { id: "security_checker", label: "Credential Scanner Center", icon: UserCheck },
          { id: "handshake", label: "Bilateral Handshake Matrix", icon: KeyRound },
          { id: "policy", label: "Enterprise Security Policies", icon: Layers }
        ].map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => {
                setActiveTab(t.id as any);
                setSimulationComplete(false);
              }}
              className={`pb-3 text-xs uppercase font-mono tracking-wider transition-all cursor-pointer relative flex items-center gap-2 whitespace-nowrap ${
                activeTab === t.id
                  ? "text-emerald-400 font-bold"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <Icon size={13} className={activeTab === t.id ? "text-emerald-400" : "text-zinc-600"} />
              <span>{t.label}</span>
              {activeTab === t.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)]" />
              )}
            </button>
          );
        })}
      </div>

      {/* RENDER ACTIVE TAB COMPONENT */}
      {activeTab === "sandbox" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Gateway Selector cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 flex justify-between">
              <span>Federal Gateway Endpoints</span>
              <span>Select Gateway</span>
            </h3>

            <div className="space-y-3">
              {apiDocumentation.endpoints.map((ep, idx) => {
                const isActive = selectedEndpoint === idx;
                const isPost = ep.method === "POST";
                
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedEndpoint(idx);
                      setSimulationComplete(false);
                    }}
                    className={`w-full text-left p-4.5 rounded-xl border transition-all relative cursor-pointer block text-xs ${
                      isActive
                        ? "bg-[#111113] border-emerald-500/70 shadow-[0_4px_20px_-8px_rgba(16,185,129,0.15)] text-zinc-100"
                        : "bg-zinc-950/30 border-zinc-900 hover:border-zinc-800 text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute top-0 bottom-0 left-0 w-1 bg-emerald-500 rounded-l-md" />
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 text-[9px] font-mono font-bold rounded border ${
                          isPost 
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                            : "bg-teal-500/10 text-teal-400 border-teal-500/20"
                        }`}>
                          {ep.method}
                        </span>
                        <code className="text-zinc-250 font-mono text-[11px] font-bold">{ep.path}</code>
                      </div>
                      
                      <span className="text-[9px] font-mono flex items-center gap-1 bg-zinc-900 px-1.5 py-0.5 rounded text-emerald-400 font-bold border border-zinc-800">
                        <Activity size={10} className="text-emerald-500" />
                        <span>attestation verified</span>
                      </span>
                    </div>

                    <p className="leading-relaxed text-[11.5px] text-zinc-400 font-semibold font-sans mt-2.5">
                      {idx === 0
                        ? "National Trade Licenses & KYC Registrar Integration"
                        : idx === 1
                        ? "Sealed Procurement Tender Publisher Gateway"
                        : "Revised Consultative Quotation Performance Matrix"}
                    </p>

                    <p className="leading-normal text-[11.5px] text-zinc-500 font-light font-sans mt-1">
                      {ep.description}
                    </p>

                    <div className="mt-3.5 pt-2.5 border-t border-zinc-900/60 flex justify-between items-center text-[10px] font-mono text-zinc-500">
                      <span>Bilateral mTLS Secured</span>
                      <span className="text-zinc-400 hover:text-emerald-400 flex items-center gap-0.5">
                        <span>Details Spec</span>
                        <ChevronRight size={10} />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Help guidelines card */}
            <div className="bg-[#121214] border border-zinc-900 rounded-xl p-5 space-y-4">
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-zinc-400 block border-b border-zinc-900 pb-2">
                Unified Ecosystem Registry Rules
              </span>
              <p className="text-[11.5px] text-zinc-400 leading-relaxed font-light font-sans">
                Each interaction represents a stateful validation verified directly against the UAE Pass network. To examine the outcomes, modify the live form fields on the right side and execute a simulated attestation test.
              </p>
              <div className="h-px bg-zinc-900" />
              <div className="flex items-center gap-3.5 text-[11px] text-zinc-400 font-mono">
                <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                <span>Zero pricing logs leaks guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right panel: High-End Custom Forms & Receipts (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* The main playground wrapper card */}
            <div className="bg-[#121214] border border-zinc-900 rounded-2xl overflow-hidden relative">
              
              {/* Header inside playground */}
              <div className="border-b border-zinc-900 px-6 py-4.5 bg-zinc-950/70 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none block mb-1">
                    ACTIVE PARAMETER ATTRIBUTER
                  </span>
                  <h4 className="text-[12px] font-mono font-bold text-zinc-100 flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded leading-none uppercase font-bold">
                      {apiDocumentation.endpoints[selectedEndpoint].method}
                    </span>
                    <span className="text-zinc-200">{apiDocumentation.endpoints[selectedEndpoint].path}</span>
                  </h4>
                </div>

                <div className="flex gap-2 w-full sm:w-auto self-end">
                  <button
                    type="button"
                    onClick={handleSimulateCall}
                    disabled={loadingSimulation}
                    className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50 text-zinc-955 font-mono text-[11px] font-bold uppercase px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all transition-duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {loadingSimulation ? (
                      <RefreshCw size={12} className="animate-spin text-zinc-955" />
                    ) : (
                      <Send size={11} className="text-zinc-955" />
                    )}
                    <span>{loadingSimulation ? "Handshaking..." : "Submit to Ledger Node"}</span>
                  </button>
                </div>
              </div>

              {/* DYNAMIC FORM VIEWS (Replaces raw JSON textareas) */}
              <div className="p-6 space-y-5">
                
                {/* Endpoint index 0: /auth/kyc-register */}
                {selectedEndpoint === 0 && (
                  <div className="space-y-4">
                    <div className="border-b border-zinc-900 pb-2 mb-3">
                      <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest">
                        Entity Profile Definition Values
                      </h4>
                      <p className="text-[11px] text-zinc-500 mt-1">Configure company licensing metrics to register on the National Economic Register ledger.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono text-zinc-400 uppercase font-bold">DED Trade License Number</label>
                        <input
                          type="text"
                          value={kycTradeLicense}
                          onChange={(e) => {
                            setKycTradeLicense(e.target.value);
                            setSimulationComplete(false);
                          }}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-xs text-zinc-100 focus:outline-none focus:border-emerald-500/50"
                          placeholder="e.g. CN-994412-B"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono text-zinc-400 uppercase font-bold">Chamber Authority Region</label>
                        <select
                          value={kycAuthority}
                          onChange={(e) => {
                            setKycAuthority(e.target.value);
                            setSimulationComplete(false);
                          }}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-emerald-500/50"
                        >
                          <option value="DED Dubai">DED Dubai Chamber</option>
                          <option value="DED Abu Dhabi">DED Abu Dhabi Chamber</option>
                          <option value="DED Sharjah">DED Sharjah Chamber</option>
                          <option value="DED Ajman">DED Ajman</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono text-zinc-400 uppercase font-bold">Ecosystem Assigned Role</label>
                        <div className="flex gap-2">
                          {["Contractor", "Consultant", "Supplier"].map((r) => (
                            <button
                              key={r}
                              type="button"
                              onClick={() => {
                                setKycRole(r);
                                setSimulationComplete(false);
                              }}
                              className={`flex-1 py-2 text-center rounded text-[10px] font-mono cursor-pointer transition-all uppercase border ${
                                kycRole === r
                                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                                  : "bg-zinc-950 border-zinc-850 text-zinc-400 hover:text-zinc-200"
                              }`}
                            >
                              {r}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono text-zinc-400 uppercase font-bold">Officer Emirates ID Matrix</label>
                        <input
                          type="text"
                          value={kycEmiratesId}
                          onChange={(e) => {
                            setKycEmiratesId(e.target.value);
                            setSimulationComplete(false);
                          }}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-xs text-zinc-100 placeholder-zinc-705 focus:outline-none focus:border-emerald-500/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono text-zinc-400 uppercase font-bold">Attested Trade License Registry Path (IPFS hash)</label>
                      <div className="flex gap-2">
                        <span className="bg-zinc-950 border border-zinc-850 p-2 text-zinc-500 text-[11px] rounded font-mono select-none">IPFS://</span>
                        <input
                          type="text"
                          value={kycDocumentIpfs.replace("ipfs://", "")}
                          onChange={(e) => {
                            setKycDocumentIpfs(`ipfs://${e.target.value}`);
                            setSimulationComplete(false);
                          }}
                          className="flex-grow bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-xs text-zinc-300 font-mono focus:outline-none"
                          placeholder="document_hashes_reference.pdf"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Endpoint index 1: /procurement/inquiry/publish */}
                {selectedEndpoint === 1 && (
                  <div className="space-y-4">
                    <div className="border-b border-zinc-900 pb-2 mb-3">
                      <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest">
                        Tender Specific Allocation parameters
                      </h4>
                      <p className="text-[11px] text-zinc-500 mt-1 font-sans">Establish project-specific sub-inquiries with targeted distribution configurations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono text-zinc-400 uppercase font-bold">Ecosystem Project Reference</label>
                        <select
                          value={procProjectId}
                          onChange={(e) => {
                            setProcProjectId(e.target.value);
                            setSimulationComplete(false);
                          }}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-emerald-500/50"
                        >
                          <option value="PJ-2024-089">PJ-2024-089 (Emaar Creek Heights)</option>
                          <option value="PJ-2024-118">PJ-2024-118 (Palm Jumeirah Mansion)</option>
                          <option value="PJ-2024-255">PJ-2024-255 (Jumeirah Heights)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono text-zinc-400 uppercase font-bold">Procurement Inquiry Title</label>
                        <input
                          type="text"
                          value={procTitle}
                          onChange={(e) => {
                            setProcTitle(e.target.value);
                            setSimulationComplete(false);
                          }}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-xs text-zinc-100 focus:outline-none focus:border-emerald-500/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono text-zinc-400 uppercase font-bold">Distribution Strategy Mode</label>
                        <select
                          value={procStrategy}
                          onChange={(e) => {
                            setProcStrategy(e.target.value);
                            setSimulationComplete(false);
                          }}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-emerald-500/50"
                        >
                          <option value="VerifiedOnly">Verified Partners Only (Privacy Protected)</option>
                          <option value="AllCompanys">Open Corporate Submittals</option>
                          <option value="DirectAssign">Bilateral Single-Source Handshake</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono text-zinc-400 uppercase font-bold">Allocated Recipient Class</label>
                        <select
                          value={procRecipient}
                          onChange={(e) => {
                            setProcRecipient(e.target.value);
                            setSimulationComplete(false);
                          }}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-emerald-500/50"
                        >
                          <option value="Subcontractor">Class A Subcontractors List</option>
                          <option value="Supplier">Licensed Material Suppliers Only</option>
                          <option value="Specialist">Engineering Consultants</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono text-zinc-400 uppercase font-bold">Shedded Bill of Quantities Hash (Automated check seal)</label>
                      <input
                        type="text"
                        value={procBoqHash}
                        onChange={(e) => {
                          setProcBoqHash(e.target.value);
                          setSimulationComplete(false);
                        }}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-xs font-mono text-emerald-400 focus:outline-none focus:border-emerald-500/50"
                      />
                    </div>
                  </div>
                )}

                {/* Endpoint index 2: /consultants/quotations/evaluate */}
                {selectedEndpoint === 2 && (
                  <div className="space-y-4">
                    <div className="border-b border-zinc-900 pb-2 mb-3">
                      <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest">
                        Evaluation Matrix Filter parameters
                      </h4>
                      <p className="text-[11px] text-zinc-500 mt-1 font-sans">Analyze multi-party design proposals and side-by-side supervising pricing.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono text-zinc-400 uppercase font-bold">Target Project Reference Code</label>
                        <input
                          type="text"
                          value={evalProjectRef}
                          onChange={(e) => {
                            setEvalProjectRef(e.target.value);
                            setSimulationComplete(false);
                          }}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-xs text-zinc-100 focus:outline-none focus:border-emerald-500/50"
                        />
                      </div>

                      <div className="space-y-1.5 flex flex-col justify-end">
                        <div className="flex items-center justify-between p-2.5 bg-zinc-950 border border-zinc-850 rounded">
                          <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold">Force Dynamic Attestation Audit Trails</span>
                          <button
                            type="button"
                            onClick={() => {
                              setEvalAuditTrail(!evalAuditTrail);
                              setSimulationComplete(false);
                            }}
                            className={`px-3 py-1 rounded text-[10px] font-mono cursor-pointer uppercase transition-colors ${
                              evalAuditTrail 
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold" 
                                : "bg-zinc-900 text-zinc-500 border border-zinc-800"
                            }`}
                          >
                            {evalAuditTrail ? "Enabled" : "Disabled"}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 uppercase font-bold">
                        <span>Project Value Threshold Allocation Limit</span>
                        <span className="text-emerald-400">AED {evalBudgetThreshold.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="500000"
                        max="5000000"
                        step="100000"
                        value={evalBudgetThreshold}
                        onChange={(e) => {
                          setEvalBudgetThreshold(Number(e.target.value));
                          setSimulationComplete(false);
                        }}
                        className="w-full accent-emerald-550 bg-zinc-900 rounded h-1 cursor-pointer"
                      />
                      <div className="flex justify-between text-[8px] font-mono text-zinc-650">
                        <span>AED 500k</span>
                        <span>AED 2.5m</span>
                        <span>AED 5.0m</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* DYNAMIC RESPONSE DECK (Completely removes unpolished code block dumps!) */}
              <div className="border-t border-zinc-900 p-6 bg-[#08080a] bg-gradient-to-b from-[#121214] to-[#08080a]">
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-zinc-900 pb-3 mb-5">
                  <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest font-bold block leading-none flex items-center gap-1.5">
                    <Fingerprint size={12} className="text-emerald-500" />
                    <span>Attestation Authority Ledger Certificate Result</span>
                  </span>

                  {simulationComplete && (
                    <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>STATUS: <strong className="text-emerald-450 uppercase">{simulationSuccess ? "200 SUCCESS APPROVED" : "-"}</strong></span>
                      </span>
                      <span>•</span>
                      <span>LATENCY: <strong className="text-zinc-200">{simulationLatency}ms</strong></span>
                    </div>
                  )}
                </div>

                {loadingSimulation ? (
                  <div className="py-14 text-center space-y-3.5">
                    <RefreshCw className="animate-spin text-emerald-450 mx-auto" size={24} />
                    <div className="space-y-1">
                      <p className="text-zinc-200 font-semibold uppercase tracking-wider text-[11px] font-mono">Verifying Signatures against UAE Pass Network...</p>
                      <p className="text-[11px] text-zinc-500 font-light max-w-sm mx-auto leading-normal">
                        Checking mutual SSL credentials keys against the Federal Department of Economic Development registries.
                      </p>
                    </div>
                  </div>
                ) : simulationComplete ? (
                  <div className="space-y-4">
                    
                    {/* Render different aesthetic success designs depending on the endpoint selected */}
                    {selectedEndpoint === 0 && (
                      <div className="bg-zinc-950/80 border border-emerald-990/30 rounded-xl p-5 md:p-6 relative overflow-hidden flex flex-col md:flex-row gap-5 justify-between">
                        
                        {/* Background watermarks */}
                        <div className="absolute top-0 right-0 p-2 opacity-5">
                          <Award size={150} />
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2.5">
                            <div className="bg-emerald-950 text-emerald-400 h-8 w-8 rounded-full flex items-center justify-center border border-emerald-900">
                              <Check size={16} />
                            </div>
                            <div>
                              <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/40">
                                DED Identity Matched
                              </span>
                              <h5 className="text-sm font-semibold text-zinc-150 leading-tight mt-1">
                                {(kycTradeLicense === "CN-994412-B") ? "AL-FUTTAIM CONSTRUCTION L.L.C" : `REGISTERED DED AGENCY (${kycTradeLicense})`}
                              </h5>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[11px] font-mono text-zinc-400">
                            <div>
                              <span className="text-zinc-550 block text-[9px] uppercase font-bold">Assigned Profile Class</span>
                              <span className="text-zinc-200 font-semibold">{kycRole}</span>
                            </div>
                            <div>
                              <span className="text-zinc-550 block text-[9px] uppercase font-bold">License Region Partner</span>
                              <span className="text-zinc-200 font-semibold">{kycAuthority}</span>
                            </div>
                            <div>
                              <span className="text-zinc-550 block text-[9px] uppercase font-bold">Attested Emirates ID</span>
                              <span className="text-zinc-250 leading-none truncate block max-w-[150px]">{kycEmiratesId}</span>
                            </div>
                            <div>
                              <span className="text-zinc-550 block text-[9px] uppercase font-bold">Identity Expiry Date</span>
                              <span className="text-zinc-200 font-semibold">2029-05-28</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col justify-between items-start md:items-end border-t md:border-t-0 md:border-l border-zinc-900 pt-4 md:pt-0 md:pl-5 font-mono text-[10px] text-zinc-500 shrink-0">
                          <div className="space-y-1">
                            <span className="block text-[8px] text-zinc-550 font-bold uppercase text-left md:text-right">Ledger Register Fingerprint Seal</span>
                            <div className="bg-[#0b0b0c] px-2 py-1 border border-zinc-900 rounded text-emerald-400 font-bold truncate max-w-[190px]">
                              0xe88df1c33b9e4a3c2de9910baefb672a014a4
                            </div>
                          </div>

                          <div className="w-full flex md:justify-end gap-2 pt-3">
                            <button
                              onClick={() => handleCopyText("0xe88df1c33b9e4a3c2de9910baefb672a014a4", "seal12")}
                              className="px-2.5 py-1 bg-zinc-900 hover:bg-zinc-850 rounded text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                            >
                              <FileText size={10} />
                              <span>{copiedText === "seal12" ? "Copied" : "Copy Seal"}</span>
                            </button>
                          </div>
                        </div>

                      </div>
                    )}

                    {selectedEndpoint === 1 && (
                      <div className="bg-zinc-950/80 border border-emerald-990/30 rounded-xl p-5 relative overflow-hidden space-y-4">
                        <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-emerald-500" />
                            <span className="text-xs font-mono font-bold text-zinc-150 uppercase">TENDER INBOUND ACTIVE PUBLISHED</span>
                          </div>
                          <span className="text-[10px] bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-zinc-400 font-mono">
                            Ref ID: SUB-8549
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-[11px] text-zinc-400">
                          <div className="bg-[#0b0b0c] p-3 rounded border border-zinc-900 space-y-1">
                            <span className="text-[8px] text-zinc-550 uppercase block font-bold">Associated Asset</span>
                            <span className="text-zinc-200 block truncate">{procProjectId === "PJ-2024-089" ? "Emaar Creek Heights" : procProjectId}</span>
                          </div>
                          <div className="bg-[#0b0b0c] p-3 rounded border border-zinc-900 space-y-1">
                            <span className="text-[8px] text-zinc-550 uppercase block font-bold">Private Specialty scope</span>
                            <span className="text-zinc-200 block truncate">{procTitle}</span>
                          </div>
                          <div className="bg-[#0b0b0c] p-3 rounded border border-zinc-900 space-y-1">
                            <span className="text-[8px] text-zinc-550 uppercase block font-bold">distribution rules limit</span>
                            <span className="text-emerald-450 block font-bold">{procStrategy} / {procRecipient}</span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2 text-[10px] font-mono text-zinc-500">
                          <span className="text-zinc-650 flex items-center gap-1 leading-none py-1">
                            <ShieldCheck size={12} className="text-emerald-500" />
                            <span>BOQ cryptographic seal matched against IPFS payload timestamp</span>
                          </span>
                          <span className="p-1 px-2 border border-zinc-900 bg-zinc-950 rounded text-zinc-350 truncate max-w-[210px]">
                            {procBoqHash}
                          </span>
                        </div>
                      </div>
                    )}

                    {selectedEndpoint === 2 && (
                      <div className="space-y-4">
                        
                        {/* Summary panel info */}
                        <div className="bg-zinc-950/80 border border-emerald-900/20 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                          <div>
                            <span className="text-[8px] text-zinc-500 font-mono block uppercase font-bold">Attested Query Results Matrix</span>
                            <h5 className="text-sm font-semibold text-zinc-200">Reconciled Side-by-Side Quotations for {evalProjectRef}</h5>
                          </div>
                          <div className="bg-emerald-950/40 border border-emerald-900/60 px-3 py-1 rounded-full text-[9px] font-mono text-emerald-400 uppercase font-bold tracking-wider leading-none">
                            TAMM Direct Verified Only
                          </div>
                        </div>

                        {/* Interactive grid table list */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          
                          {/* Quote 1 panel */}
                          <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-4.5 space-y-3 relative overflow-hidden">
                            <div className="absolute top-0 right-0 h-1.5 w-1.5 rounded-full bg-emerald-400 m-3" />
                            
                            <div className="flex justify-between items-start border-b border-zinc-900 pb-2">
                              <div>
                                <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase">Grade A Compliance</span>
                                <h6 className="text-xs font-bold text-zinc-200">Edge Architects</h6>
                              </div>
                              <span className="text-[10px] font-mono text-zinc-500">Ref: QUO-001</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-[10.5px] font-mono text-zinc-400 pt-1">
                              <div>
                                <span className="text-[8px] text-zinc-550 uppercase block">Base Design fee</span>
                                <span className="text-zinc-100 font-semibold">AED 750,000</span>
                              </div>
                              <div>
                                <span className="text-[8px] text-zinc-550 uppercase block">Supervising rate</span>
                                <span className="text-zinc-100 font-semibold">AED 250,000</span>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-zinc-900 flex justify-between items-center bg-[#0d0d0e] p-2 rounded">
                              <span className="text-[9px] font-mono text-zinc-550 uppercase font-bold">Consolidated Bid Total</span>
                              <span className="text-xs font-black text-emerald-400 font-mono">AED 1,000,000</span>
                            </div>
                          </div>

                          {/* Quote 2 panel */}
                          <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-4.5 space-y-3 relative overflow-hidden opacity-90">
                            <div className="absolute top-0 right-0 h-1.5 w-1.5 rounded-full bg-[#38bdf8] m-3" />
                            
                            <div className="flex justify-between items-start border-b border-zinc-900 pb-2">
                              <div>
                                <span className="text-[9px] font-mono text-zinc-400 font-bold uppercase">Grade A- Premium Status</span>
                                <h6 className="text-xs font-bold text-zinc-200">StrucBuild Structural</h6>
                              </div>
                              <span className="text-[10px] font-mono text-zinc-500">Ref: QUO-002</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-[10.5px] font-mono text-zinc-400 pt-1">
                              <div>
                                <span className="text-[8px] text-zinc-550 uppercase block">Base Design fee</span>
                                <span className="text-zinc-100 font-semibold">AED 810,000</span>
                              </div>
                              <div>
                                <span className="text-[8px] text-zinc-550 uppercase block">Supervising rate</span>
                                <span className="text-zinc-100 font-semibold">AED 190,000</span>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-zinc-900 flex justify-between items-center bg-[#0d0d0e] p-2 rounded">
                              <span className="text-[9px] font-mono text-zinc-550 uppercase font-bold">Consolidated Bid Total</span>
                              <span className="text-xs font-black text-zinc-300 font-mono">AED 1,000,000</span>
                            </div>
                          </div>

                        </div>

                        {evalAuditTrail && (
                          <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-lg text-[10px] font-mono text-zinc-550 flex items-center gap-2">
                            <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                            <span>Secure audit logging traces generated. Document state hash submitted to Dubai Legal Attest Gateway node.</span>
                          </div>
                        )}

                      </div>
                    )}

                  </div>
                ) : (
                  <div className="py-12 border border-dashed border-zinc-900 rounded-xl text-center bg-zinc-950/15">
                    <Database size={24} className="mx-auto text-zinc-750 mb-2.5" />
                    <p className="text-xs text-zinc-400 font-semibold">Sandbox Ledger Gateways Ready</p>
                    <p className="text-[11px] text-zinc-500 font-light max-w-sm mx-auto leading-relaxed mt-1">
                      Press "Submit to Ledger Node" above to verify state validation checks. No programmatic code blocks or raw structures will be displayed.
                    </p>
                  </div>
                )}

              </div>

            </div>

            {/* Non-Technical Integration Guidelines workflow panel instead of raw code snippets */}
            <div className="bg-[#121214] border border-zinc-900 rounded-2xl overflow-hidden">
              <div className="bg-zinc-950 border-b border-zinc-900 px-6 py-4 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                  <BookOpen size={14} className="text-emerald-400 animate-pulse" />
                  <span>Procurement Integration & Integrity Checklist</span>
                </span>
                <span className="text-[9px] text-zinc-500 font-mono font-bold bg-[#0e0e10] p-1 px-2 rounded-md">Step-by-Step Security Compliance</span>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs">
                
                {/* Visual items left */}
                <div className="space-y-4">
                  <h5 className="text-xs font-bold text-zinc-200 uppercase font-mono tracking-wider flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-555 bg-emerald-500 animate-pulse" />
                    <span>How to configure partner systems</span>
                  </h5>
                  
                  <div className="space-y-3 text-zinc-400">
                    <div className="flex gap-2.5 items-start">
                      <div className="bg-zinc-900 text-zinc-350 border border-zinc-850 h-5 w-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-mono">
                        1
                      </div>
                      <p className="font-light leading-relaxed">
                        Authorized entities register their credentials using the verified trade licensing process inside the <strong>KYC Register gateway</strong>.
                      </p>
                    </div>

                    <div className="flex gap-2.5 items-start">
                      <div className="bg-zinc-900 text-zinc-350 border border-zinc-850 h-5 w-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-mono">
                        2
                      </div>
                      <p className="font-light leading-relaxed">
                        Bilateral transactions generate signed telemetry handshakes. Competitors are fully isolated at data-tier levels to guard tender limits and privacy laws.
                      </p>
                    </div>

                    <div className="flex gap-2.5 items-start">
                      <div className="bg-zinc-900 text-zinc-350 border border-zinc-850 h-5 w-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-mono">
                        3
                      </div>
                      <p className="font-light leading-relaxed">
                        Dynamic audit trails continuously attests documents, hashes, and files securely against decentralized registries for maximum legal confidence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Performance stats right */}
                <div className="bg-zinc-950/60 border border-zinc-900 rounded-xl p-4.5 flex flex-col justify-between space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-900">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold">Ecosystem Performance SLAs</span>
                    <span className="text-[8px] bg-emerald-550/15 text-emerald-400 border border-emerald-500/20 rounded px-1.5 py-0.5 leading-none font-mono">Guaranteed Live</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5 text-center font-mono">
                    <div className="p-2.5 bg-zinc-900/40 border border-zinc-900 rounded-lg">
                      <span className="text-zinc-550 text-[8px] block uppercase font-bold">API handshake Uptime</span>
                      <strong className="text-[#f3f4f6] text-sm tracking-tight">99.998%</strong>
                    </div>
                    <div className="p-2.5 bg-zinc-900/40 border border-zinc-900 rounded-lg">
                      <span className="text-zinc-550 text-[8px] block uppercase font-bold">Average Latency SLA</span>
                      <strong className="text-[#f3f4f6] text-sm tracking-tight">&lt; 155ms</strong>
                    </div>
                    <div className="p-2.5 bg-zinc-905/40 bg-zinc-900/40 border border-zinc-900 rounded-lg">
                      <span className="text-zinc-550 text-[8px] block uppercase font-bold">Max Concurrent Queries</span>
                      <strong className="text-[#f3f4f6] text-sm tracking-tight">100k/sec</strong>
                    </div>
                    <div className="p-2.5 bg-zinc-900/40 border border-zinc-900 rounded-lg">
                      <span className="text-zinc-550 text-[8px] block uppercase font-bold">Judicial Traceability</span>
                      <strong className="text-emerald-450 text-sm tracking-tight">SHA-256</strong>
                    </div>
                  </div>

                  <p className="text-[10.5px] italic text-zinc-500 leading-normal text-center">
                    SLA thresholds audited monthly by Dubai Digital Government.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      )}

      {/* Security Credentials Decryptor Scan tab (replaces unreadable JWT parser program code textareas) */}
      {activeTab === "security_checker" && (
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-[#121214] border border-zinc-900 rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden">
            
            {/* Ambient icon watermark */}
            <div className="absolute top-0 right-0 p-4 font-mono text-zinc-900 text-6xl opacity-5 select-none text-right">
              mTLS SECURE<br/>10100110
            </div>

            <div className="border-b border-zinc-900 pb-4">
              <h3 className="text-sm font-mono font-bold text-zinc-200 uppercase tracking-widest flex items-center gap-2">
                <UserCheck size={16} className="text-emerald-400" />
                <span>Ecosystem Identity Pass Certificate Scanner</span>
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light mt-1.5">
                Every stakeholder verifies session credentials using high-end UAE Pass biometric handshakes. Use this decoder dashboard to verify digital claims details, active roles, and trade registration authorities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Side: interactive credentials presets */}
              <div className="md:col-span-4 space-y-4">
                <label className="block text-[10px] font-mono text-zinc-400 uppercase font-bold tracking-wider">
                  Select Registered Session Key Passport
                </label>

                <div className="space-y-2.5">
                  {[
                    { id: "contractor", title: "Class-A Contractor Hub Pass", company: "Al-Futtaim Construction LLC", license: "CN-994412-B", icon: "🏢" },
                    { id: "consultant", title: "Principal Consultant Passport", company: "Edge Architects", license: "CN-984422-R", icon: "📐" },
                    { id: "supplier", title: "Global Materials Supplier Key", company: "Emirates Steel Node Corp", license: "CN-112984-S", icon: "🧱" }
                  ].map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => setSelectedCertPreset(preset.id as any)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer block text-xs ${
                        selectedCertPreset === preset.id
                          ? "bg-zinc-950 border-emerald-550/60 shadow-lg text-zinc-100"
                          : "bg-zinc-950/20 border-zinc-900 hover:border-zinc-800 text-zinc-400"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-mono font-bold uppercase text-emerald-400">{preset.title}</span>
                        <span>{preset.icon}</span>
                      </div>
                      <p className="font-semibold text-zinc-200 truncate">{preset.company}</p>
                      <p className="text-[10px] font-mono text-zinc-500 mt-1">DED Trade Lic: {preset.license}</p>
                    </button>
                  ))}
                </div>

                <div className="bg-zinc-950 p-4 border border-zinc-900 rounded-xl space-y-2">
                  <span className="text-[9px] font-mono text-zinc-500 block uppercase font-bold">Direct DED Access Protocol</span>
                  <p className="text-[11px] text-zinc-400 font-light leading-snug">
                    Session keys continuously polling bilateral DED trade licensing registries to confirm current compliance without delay.
                  </p>
                </div>
              </div>

              {/* Right Side: Visual Certificate / Pass card instead of unreadable raw JSON claim dumps */}
              <div className="md:col-span-8">
                
                <div className="bg-gradient-to-br from-[#0b0c10] to-zinc-950 border border-zinc-850 rounded-2xl p-6 shadow-xl relative overflow-hidden space-y-6">
                  
                  {/* Glowing vertical lines to mimic digital passport card */}
                  <div className="absolute top-0 bottom-0 left-[2.5px] w-[2px] bg-emerald-500/20" />
                  <div className="absolute top-0 right-0 h-40 w-40 bg-emerald-500/2 rounded-full filter blur-[40px] pointer-events-none" />

                  {/* Passport Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-zinc-900/80 pb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-emerald-950/60 border border-emerald-900/50 rounded-full flex items-center justify-center text-lg shadow-inner">
                        🇦🇪
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-emerald-400">Dubai National Digital Security Pass</h4>
                        <p className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest mt-0.5">FEDERAL INTEGRITY VERIFIED • DUBAI DED</p>
                      </div>
                    </div>

                    <div className="text-left sm:text-right shrink-0">
                      <span className="bg-emerald-950 text-emerald-450 px-2.5 py-1 rounded-full text-[9px] font-mono font-bold border border-emerald-900/40 uppercase">
                        Active Verified
                      </span>
                    </div>
                  </div>

                  {/* Big Passport Details Grid Map */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-xs font-mono">
                    <div className="space-y-1">
                      <span className="text-zinc-550 block text-[9px] uppercase font-bold text-zinc-500/90 font-mono">Registered Legal Corporation</span>
                      <strong className="text-zinc-150 text-[13px] font-sans font-extrabold tracking-tight">
                        {selectedCertPreset === "contractor" 
                          ? "Al-Futtaim Construction LLC"
                          : selectedCertPreset === "consultant"
                          ? "Edge Architects Partners"
                          : "Emirates Steel Node Corp"}
                      </strong>
                    </div>

                    <div className="space-y-1">
                      <span className="text-zinc-550 block text-[9px] uppercase font-bold text-zinc-500/90 font-mono">Trade License Registry Identifier</span>
                      <strong className="text-zinc-200 block text-xs tracking-wider">
                        {selectedCertPreset === "contractor" 
                          ? "CN-994412-B"
                          : selectedCertPreset === "consultant"
                          ? "CN-984422-R"
                          : "CN-112984-S"}
                      </strong>
                    </div>

                    <div className="space-y-1">
                      <span className="text-zinc-550 block text-[9px] uppercase font-bold text-zinc-500/90 font-mono">Verified Ecosystem Role</span>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="text-zinc-200 capitalize font-bold">
                          {selectedCertPreset === "contractor" 
                            ? "Ecosystem Lead Contractor"
                            : selectedCertPreset === "consultant"
                            ? "Accredited Architect Consultant"
                            : "Verified Material Supplier"}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-zinc-550 block text-[9px] uppercase font-bold text-zinc-500/90 font-mono">Official Authority Cert</span>
                      <strong className="text-zinc-200 block text-xs">
                        {selectedCertPreset === "contractor" ? "DED Dubai Chamber Node" : selectedCertPreset === "consultant" ? "Dubai Municipality Registry" : "Abu Dhabi Chamber Node"}
                      </strong>
                    </div>

                    <div className="space-y-1">
                      <span className="text-zinc-550 block text-[9px] uppercase font-bold text-zinc-500/90 font-mono">Attesting officer signature</span>
                      <span className="text-zinc-400 block text-[11px] truncate">784-1985-1234567-9 (Amir Al-Suwaidi)</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-zinc-550 block text-[9px] uppercase font-bold text-zinc-500/90 font-mono">Bilateral Signature Verification Status</span>
                      <strong className="text-emerald-450 block text-xs flex items-center gap-1 mt-0.5 font-bold uppercase">
                        <Check size={11} />
                        <span>Registry Valid & Sealed</span>
                      </strong>
                    </div>
                  </div>

                  {/* Passport Footer (barcodes / cryptographic status indicators) */}
                  <div className="border-t border-zinc-900/80 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
                    <div>
                      <span className="text-zinc-550 block text-[8px] uppercase font-bold text-zinc-500/90 font-mono">State Seal Hash Match Tag</span>
                      <span className="text-zinc-400 font-mono text-[10.5px] truncate block max-w-[280px]">
                        {selectedCertPreset === "contractor" 
                          ? "0x67N7ZqKRE-9A1_wscPqZ-A8nF6V1eS32S9vK2TfHwD8"
                          : selectedCertPreset === "consultant"
                          ? "0xs8u3b9fc9610fbc-22365_aaec9092182ffcc"
                          : "0x8fae32f913e6a9efc992a0129bcbaadfe8"}
                      </span>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <div className="bg-zinc-900 px-3 py-1.5 border border-zinc-800 rounded-lg text-center">
                        <span className="text-[7px] text-zinc-500 uppercase block leading-none mb-0.5">Handshake Uptime</span>
                        <strong className="text-zinc-350 text-[10.5px] font-mono leading-none">100% Match</strong>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      )}

      {/* Auth timeline pipeline */}
      {activeTab === "handshake" && (
        <div className="space-y-8 max-w-4xl mx-auto">
          
          <div className="bg-[#121214] border border-zinc-900 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="text-center space-y-2">
              <KeyRound size={36} className="mx-auto text-emerald-400 animate-pulse" />
              <h3 className="text-base font-bold uppercase tracking-wider text-zinc-150">UAE PASS mTLS Integration Logic Diagram</h3>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-xl mx-auto font-sans">
                Decoupled secure pipeline validating corporate identity profiles and active roles while maintaining zero tender pricing details leakage across competing builders.
              </p>
            </div>

            {/* Pipeline flowchart mapping */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 relative select-none">
              
              {[
                {
                  step: "Step 1: Consent",
                  actor: "UAE PASS Cellular Node",
                  desc: "Officer verifies transaction on mobile device via biometrics scan",
                  badge: "784-XXXX"
                },
                {
                  step: "Step 2: Attestation",
                  actor: "mTLS API Gateway",
                  desc: "System validates TLS client certificate hashes against DED register",
                  badge: "Mutual SSL v1.3"
                },
                {
                  step: "Step 3: Sealing",
                  actor: "NER Crypto Ledgers",
                  desc: "Secures tender quotes or inquiry parameters using SHA-256 seal",
                  badge: "HMAC-SHA256"
                },
                {
                  step: "Step 4: Authorization",
                  actor: "Secure Client Instance",
                  desc: "Initializes verified active workspace with automatic logout timers",
                  badge: "200 OK Authorized"
                }
              ].map((flow, i) => (
                <div key={i} className="bg-zinc-950 p-4 border border-zinc-900 rounded-xl relative space-y-3 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">{flow.step}</div>
                    <div className="text-xs font-bold text-zinc-200 font-sans">{flow.actor}</div>
                    <p className="text-[11.5px] text-zinc-400 leading-relaxed font-sans font-light">
                      {flow.desc}
                    </p>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-850 px-2.5 py-1 rounded-full text-[9px] font-mono text-center text-zinc-400 truncate uppercase tracking-widest leading-none font-bold">
                    {flow.badge}
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Ledger isolation details */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-6.5 space-y-4">
            <h4 className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-widest flex items-center gap-2">
              <Lock size={14} className="text-emerald-500" />
              <span>Bilateral Privacy Isolation Architecture (NER Standards)</span>
            </h4>
            
            <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light leading-normal">
              To fully preserve competitor privacy in compliance with federal guidelines, the system isolates private partner spaces using decoupled metadata profiles. Individual contractor rows can never cross-pollinate in the database memory model, completely protecting private supplier rates, BOQ weights, and subcontractor lists.
            </p>
          </div>

        </div>
      )}

      {/* Security Policies recommendations tab */}
      {activeTab === "policy" && (
        <div className="space-y-6 max-w-4xl mx-auto">
          
          <div className="flex justify-between items-center border-b border-zinc-900 pb-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Federally Mandated Compliance Criteria
            </h3>

            <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full leading-none font-bold">
              <Check size={11} />
              <span>DED Compliant Core Nodes</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Recommendations mapping */}
            {apiDocumentation.infrastructureRecommendations.map((rec, i) => (
              <div 
                key={i} 
                className="bg-[#0e1013] border border-zinc-900/80 p-5.5 rounded-xl hover:border-zinc-805 transition-all flex flex-col justify-between group cursor-default relative overflow-hidden"
              >
                {/* Visual hover corner glows */}
                <div className="absolute top-0 right-0 w-[40px] h-[40px] bg-emerald-500/2 rounded-full filter blur-[20px] group-hover:bg-emerald-500/10 transition-colors pointer-events-none" />

                <div className="space-y-3.5">
                  <div className="flex gap-2 items-center text-emerald-450">
                    <ShieldCheck size={16} />
                    <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider">
                      {i === 0 ? "LEDGER AUDIT" : i === 1 ? "PRIVACY CODES" : "BIOMETRIC SSO"}
                    </h4>
                  </div>
                  
                  <h5 className="text-[12px] font-extrabold text-zinc-200 leading-tight font-sans">
                    {rec.domain}
                  </h5>

                  <p className="text-[11.5px] text-zinc-400 leading-relaxed font-sans font-light">
                    {rec.content}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-zinc-900/50 text-[10px] font-mono text-zinc-500 flex justify-between items-center">
                  <span>Policy ref: #00{i+1}-DED</span>
                  <span className="text-zinc-650 group-hover:text-emerald-450 transition-all flex items-center gap-0.5">
                    <span>Guidelines</span>
                    <ChevronRight size={10} />
                  </span>
                </div>
              </div>
            ))}

          </div>

          {/* Secure audit download layout */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6.5 text-center space-y-4">
            <h4 className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-widest">
              Digital Audit Trail Attestation System Registry
            </h4>
            
            <p className="text-[11.5px] text-zinc-400 leading-normal max-w-2xl mx-auto font-light leading-normal">
              For complete transparency during judicial audits or municipal queries, all uploaded trade licensing documents, contractor certificates, and pricing agreements write directly to the Dubai National Economic Register (NER). This completely prevents retroactive pricing changes.
            </p>

            <div className="pt-2">
              <button 
                onClick={() => alert("Initializing verified digital compliance audit download... Success. Attested and signed with national corporate scheme.")}
                className="inline-flex items-center gap-2 py-2.5 px-5 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-[11px] font-mono text-zinc-300 hover:text-white rounded-xl uppercase transition-all cursor-pointer"
              >
                <FileSpreadsheet size={13} className="text-emerald-400 animate-pulse" />
                <span>Download Compliance Audit Log Ledger (.PDF)</span>
              </button>
            </div>
          </div>

        </div>
      )}

      {/* Pure aesthetic corporate footer */}
      <div className="border-t border-zinc-900/60 pt-6 text-center select-none">
        <div className="text-[10px] font-mono text-zinc-600 tracking-widest font-bold">
          ARDACA ECOSYSTEM GATEWAY • SECURED VIA NER mTLS DIRECT DIAL-IN
        </div>
        <p className="text-[9px] text-zinc-500 font-sans mt-1 uppercase max-w-xl mx-auto leading-normal">
          Authorized according to federal UAE cyber defence norms under Abu Dhabi Digital Government and Department of Economy and Tourism (DED) direct access parameters.
        </p>
      </div>

    </div>
  );
}
