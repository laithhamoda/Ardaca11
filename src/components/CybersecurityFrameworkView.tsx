import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Lock, 
  Activity, 
  Sliders, 
  FileText, 
  Terminal, 
  Users, 
  CheckCircle2, 
  AlertTriangle, 
  Server, 
  Cpu, 
  Compass, 
  Layers, 
  Download,
  PlayCircle,
  RefreshCw,
  Eye,
  Settings,
  Flame,
  Globe2,
  LockKeyhole
} from 'lucide-react';
import { 
  securityThreats, 
  securityRequirements, 
  securityRolesMatrix, 
  websiteHardeningSteps, 
  SecurityThreat, 
  SecurityRequirement, 
  SecurityRoleTask, 
  HardeningStep 
} from '../data/cybersecurityFramework';

interface CybersecurityFrameworkViewProps {
  isRtl: boolean;
}

export default function CybersecurityFrameworkView({ isRtl }: CybersecurityFrameworkViewProps) {
  // Security Posture Simulator Controls
  const [rlsEnabled, setRlsEnabled] = useState<boolean>(true);
  const [onshoreWaf, setOnshoreWaf] = useState<boolean>(true);
  const [strictMfa, setStrictMfa] = useState<boolean>(true);
  const [scrubMetadata, setScrubMetadata] = useState<boolean>(true);
  const [ipsMonitoring, setIpsMonitoring] = useState<boolean>(false);
  
  // Threat matrix search / filter state
  const [threatSearch, setThreatSearch] = useState<string>("");
  const [selectedThreatId, setSelectedThreatId] = useState<string>("t1-row-leak");

  // Selected drill scenario
  const [activeDrill, setActiveDrill] = useState<string>("claims-leak");
  const [drillStep, setDrillStep] = useState<number>(0);
  const [drillResultsLog, setDrillResultsLog] = useState<string[]>([]);

  // Calculate dynamic security posture score
  let postureScore = 60;
  if (rlsEnabled) postureScore += 10;
  if (onshoreWaf) postureScore += 10;
  if (strictMfa) postureScore += 10;
  if (scrubMetadata) postureScore += 5;
  if (ipsMonitoring) postureScore += 5;

  const activeThreat = securityThreats.find(t => t.id === selectedThreatId) || securityThreats[0];

  // Simulated emergency response drill scenario launcher
  const launchDrill = (scenario: string) => {
    setActiveDrill(scenario);
    setDrillStep(1);
    
    let initialLogs: string[] = [];
    if (scenario === "claims-leak") {
      initialLogs = [
        "04:56:02 UTC - Suspicious client session observed on node: uae-south-01.",
        "04:56:15 UTC - High frequency GET requests targeting '/api/quotations/private/*' identified.",
        "04:56:30 UTC - Active connection detected from unsanctioned administrative subnet."
      ];
    } else if (scenario === "malware") {
      initialLogs = [
        "04:41:00 UTC - Subcontractor client uploaded '3D_blueprints_rev5.dwg'.",
        "04:41:12 UTC - Serverless Sandbox triggered. File processing initialized on isolated container pool.",
        "04:41:18 UTC - Antivirus engine flagged hidden macro sequence signature Class-H."
      ];
    } else {
      initialLogs = [
        "05:01:00 UTC - Repeated failed attempts to modify 'Emirates ID' records mapped to tenant: RO-9483.",
        "05:01:10 UTC - System flagged anomalous query seeking privilege elevation to Super Admin.",
        "05:01:15 UTC - Request originated from proxy VPN address pool."
      ];
    }
    setDrillResultsLog(initialLogs);
  };

  const advanceDrill = () => {
    const nextStep = drillStep + 1;
    setDrillStep(nextStep);

    let logsToAdd: string[] = [];
    if (activeDrill === "claims-leak") {
      if (nextStep === 2) {
        logsToAdd = [
          "04:57:01 UTC - ACTION: Automated Token-Rotation middleware actively revoked session family.",
          "04:57:15 UTC - SYSTEM: Blocked external IP range at WAF edge. Tenant isolated on schema-02.",
          "04:57:25 UTC - AUDIT: Immutable tamper-proof ledger logged incident ID: INC-2026-904."
        ];
      } else if (nextStep === 3) {
        logsToAdd = [
          "04:58:00 UTC - SUCCESS: Zero customer or contract data leaked outside the row-level sandbox.",
          "04:58:15 UTC - RETROSPECTIVE: Incident successfully mitigated. Security posture remained unbroken."
        ];
      }
    } else if (activeDrill === "malware") {
      if (nextStep === 2) {
        logsToAdd = [
          "04:42:01 UTC - ACTION: Automatic file deletion and quarantine executed on secure Storage AWS S3 Bucket.",
          "04:42:15 UTC - WARNING: Subcontractor account locked pending identity and trade licence re-evaluation.",
          "04:42:30 UTC - SYSTEM: Triggered alert notifications to the Project Supervising Architect."
        ];
      } else if (nextStep === 3) {
        logsToAdd = [
          "04:43:00 UTC - SUCCESS: Unsanitized code isolated. No lateral movement or workstation infection registered."
        ];
      }
    } else {
      if (nextStep === 2) {
        logsToAdd = [
          "05:02:01 UTC - ACTION: Postgres Row-Level Security (RLS) policies successfully blocked database query execution.",
          "05:02:20 UTC - SECURITY: Enforced additional face verification lookup challenge at identity edge.",
          "05:02:45 UTC - SYSTEM: Access completely denied. Incident reported in SIEM audit streams."
        ];
      } else if (nextStep === 3) {
        logsToAdd = [
          "05:03:15 UTC - SUCCESS: Privilege escalation prevented. Zero-trust schema boundaries kept integrity valid."
        ];
      }
    }
    setDrillResultsLog([...drillResultsLog, ...logsToAdd]);
  };

  const resetDrill = () => {
    setDrillStep(0);
    setDrillResultsLog([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fade-in text-zinc-100">
      
      {/* 🚀 Header: Sovereign GCC Cybersecurity Command Center */}
      <div className="bg-[#091424] border border-zinc-805 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />
        
        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                Sovereign GCC Data & Defense Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-normal tracking-tight text-white">
                Sovereign Cybersecurity Command Center
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-4xl leading-relaxed">
                Ardaca is engineered from the ground up for high-trust master developments across Saudi Arabia (KSA) and the United Arab Emirates (UAE). 
                Delivering compliance with UAE PDPL and Saudi NCA (National Cybersecurity Authority) standards demands a zero-trust model. 
                Below is Ardaca's defense-in-depth posture map, threat models, risk register, DevSecOps framework, and a live incident response simulator.
              </p>
            </div>

            <div className="bg-[#050D1A] border-2 border-zinc-800 p-4 rounded-2xl flex items-center gap-4 shrink-0 shadow-lg select-none">
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Current Security Posture</span>
                <span className="text-3xl font-mono text-white font-extrabold flex items-baseline justify-center sm:justify-start gap-1">
                  <span>{postureScore}%</span>
                  <span className="text-xs font-normal text-zinc-500">SCORE</span>
                </span>
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${postureScore >= 90 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {postureScore >= 90 ? "● Grade A Sovereign State" : "● Standard Secure Mode"}
                </span>
              </div>
              
              <div className="h-10 w-0.5 bg-zinc-800 sm:block hidden" />
              
              <div className="sm:flex hidden flex-col justify-center space-y-1">
                <span className="text-[8px] font-mono text-zinc-400 uppercase">UAE PDPL: <strong>ALIGNED</strong></span>
                <span className="text-[8px] font-mono text-zinc-400 uppercase">NCA CLASS-3: <strong>READY</strong></span>
                <span className="text-[8px] font-mono text-zinc-405 uppercase">MAPPED ROW-LEVEL SECURITY: <strong>TRUE</strong></span>
              </div>
            </div>
          </div>

          {/* Interactive controls mapping values */}
          <div className="bg-[#050D1A]/60 border border-zinc-850 p-4 rounded-xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-zinc-405 uppercase font-bold flex items-center justify-between">
                  <span>Postgres RLS Status</span>
                  <span className={rlsEnabled ? "text-emerald-400" : "text-red-400"}>{rlsEnabled ? "ON" : "OFF"}</span>
                </label>
                <button 
                  onClick={() => setRlsEnabled(!rlsEnabled)}
                  className={`w-full text-center py-2 text-[10px] font-mono uppercase font-bold tracking-widest rounded-lg border transition-all cursor-pointer ${
                    rlsEnabled ? 'bg-zinc-900 border-zinc-800 text-gold' : 'bg-red-950/20 border-red-900/40 text-red-400'
                  }`}
                >
                  {rlsEnabled ? "Strict Isolated Row-level" : "Row-level Bypassed"}
                </button>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-zinc-405 uppercase font-bold flex items-center justify-between">
                  <span>Regional Onshore WAF</span>
                  <span className={onshoreWaf ? "text-emerald-400" : "text-amber-400"}>{onshoreWaf ? "ONSHORE" : "GLOBAL"}</span>
                </label>
                <button 
                  onClick={() => setOnshoreWaf(!onshoreWaf)}
                  className={`w-full text-center py-2 text-[10px] font-mono uppercase font-bold tracking-widest rounded-lg border transition-all cursor-pointer ${
                    onshoreWaf ? 'bg-zinc-900 border-zinc-800 text-gold' : 'bg-[#0E1A2D] border-zinc-850 text-zinc-400'
                  }`}
                >
                  {onshoreWaf ? "Sovereign WAF Node" : "Standard CDN Edge"}
                </button>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-zinc-405 uppercase font-bold flex items-center justify-between">
                  <span>MFA Enforcement</span>
                  <span className={strictMfa ? "text-emerald-400" : "text-red-400"}>{strictMfa ? "STRICT" : "OPTIONAL"}</span>
                </label>
                <button 
                  onClick={() => setStrictMfa(!strictMfa)}
                  className={`w-full text-center py-2 text-[10px] font-mono uppercase font-bold tracking-widest rounded-lg border transition-all cursor-pointer ${
                    strictMfa ? 'bg-zinc-900 border-zinc-800 text-gold' : 'bg-red-950/20 border-red-900/40 text-red-400'
                  }`}
                >
                  {strictMfa ? "FIDO2 / SMS OTP" : "Passwords Only"}
                </button>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-zinc-405 uppercase font-bold flex items-center justify-between">
                  <span>CAD EXIF Scrubbing</span>
                  <span className={scrubMetadata ? "text-emerald-400" : "text-zinc-500"}>{scrubMetadata ? "ACTIVE" : "DISABLED"}</span>
                </label>
                <button 
                  onClick={() => setScrubMetadata(!scrubMetadata)}
                  className={`w-full text-center py-2 text-[10px] font-mono uppercase font-bold tracking-widest rounded-lg border transition-all cursor-pointer ${
                    scrubMetadata ? 'bg-zinc-900 border-zinc-800 text-gold' : 'bg-[#0E1A2D] border-zinc-850 text-zinc-400'
                  }`}
                >
                  {scrubMetadata ? "Scrub Blueprint EXIF" : "Retain File EXIF"}
                </button>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-zinc-405 uppercase font-bold flex items-center justify-between">
                  <span>API Anomaly IPS</span>
                  <span className={ipsMonitoring ? "text-emerald-400" : "text-zinc-500"}>{ipsMonitoring ? "ACTIVE" : "OFF"}</span>
                </label>
                <button 
                  onClick={() => setIpsMonitoring(!ipsMonitoring)}
                  className={`w-full text-center py-2 text-[10px] font-mono uppercase font-bold tracking-widest rounded-lg border transition-all cursor-pointer ${
                    ipsMonitoring ? 'bg-zinc-900 border-zinc-800 text-gold' : 'bg-[#0E1A2D] border-zinc-850 text-zinc-400'
                  }`}
                >
                  {ipsMonitoring ? "Deploy API Moniter" : "Deploy Defualt API"}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 🛡️ Defense-In-Depth Architecture Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Hand: Secure Sovereign Architecture Streams */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
            <Cpu size={15} className="text-gold" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-white font-extrabold">
              System Separation Layers
            </h3>
          </div>

          <div className="space-y-4">
            
            {/* Layer 1 */}
            <div className="bg-[#091424] border border-zinc-805 rounded-xl p-4 space-y-2">
              <span className="text-[9px] font-mono text-gold uppercase tracking-wider font-extrabold bg-[#C8973A]/10 px-2.5 py-0.5 rounded-md border border-[#C8973A]/15">
                Layer 1: Sovereign Edge Protection
              </span>
              <h4 className="font-bold text-xs font-sans text-zinc-100">
                Cloud Edge WAF Geofencing (Fortinet Node)
              </h4>
              <p className="text-[10.5px] text-zinc-400 font-light leading-relaxed">
                Routes external web requests through low-latency regional UAE-Abu Dhabi or KSA-Riyadh edges. 
                Applies strict geofence borders, restricting admin logins solely to pre-registered corporate IP lists.
              </p>
            </div>

            {/* Layer 2 */}
            <div className="bg-[#091424] border border-zinc-805 rounded-xl p-4 space-y-2">
              <span className="text-[9px] font-mono text-gold uppercase tracking-wider font-extrabold bg-[#C8973A]/10 px-2.5 py-0.5 rounded-md border border-[#C8973A]/15">
                Layer 2: Isolated API Gateway Proxy
              </span>
              <h4 className="font-bold text-xs font-sans text-zinc-100">
                Bilingual Privacy Redaction Engine
              </h4>
              <p className="text-[10.5px] text-zinc-400 font-light leading-relaxed">
                Restricts direct access to core containers. Middleware parses outgoing JSON responses and automatically redacts downstream subcontractor names, pricing margins, or trade secrets before serializing to client views.
              </p>
            </div>

            {/* Layer 3 */}
            <div className="bg-[#091424] border border-zinc-805 rounded-xl p-4 space-y-2">
              <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider font-extrabold bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/15">
                Layer 3: Sovereign Multi-Tenant DB
              </span>
              <h4 className="font-bold text-xs font-sans text-zinc-100">
                Postgres Row-Level Security (RLS) policies
              </h4>
              <p className="text-[10.5px] text-zinc-400 font-light leading-relaxed">
                Row security guarantees strict tenant data bounds. No contractor query can cross-traverse logical structures of other tenders. Encrypted at rest using AES-256 envelope policies via FIPS 140-3 Hardware Keys.
              </p>
            </div>

          </div>
        </div>

        {/* Right Hand: Interactive Risk Register & Threat Matrix */}
        <div className="lg:col-span-8 bg-[#091424] border border-zinc-800 rounded-3xl p-6 space-y-6">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-3 border-b border-zinc-850">
            <div className="flex items-center gap-2">
              <ShieldAlert size={14} className="text-gold animate-pulse" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-gold font-extrabold">
                Interactive Threat Matrix & Risk Register
              </h3>
            </div>
            
            {/* Search filter input */}
            <input
              type="text"
              value={threatSearch}
              onChange={(e) => setThreatSearch(e.target.value)}
              placeholder="Search vector or mitigations..."
              className="px-3 py-1 bg-[#050D1A] border border-zinc-800 rounded-lg text-xs text-zinc-200 placeholder-zinc-500 font-mono focus:outline-none focus:ring-1 focus:ring-gold/30 w-full sm:max-w-[200px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left selector menu */}
            <div className="md:col-span-5 space-y-1.5 max-h-[300px] overflow-y-auto pr-1">
              {securityThreats
                .filter(t => t.threatName.toLowerCase().includes(threatSearch.toLowerCase()) || t.mitigation.toLowerCase().includes(threatSearch.toLowerCase()))
                .map((threat) => {
                  const isSelected = selectedThreatId === threat.id;
                  return (
                    <button
                      key={threat.id}
                      onClick={() => setSelectedThreatId(threat.id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-center justify-between gap-2.5 cursor-pointer ${
                        isSelected 
                          ? 'border-gold bg-[#0E1A2D] text-white shadow-md' 
                          : 'border-zinc-850 bg-[#050D1A]/50 text-zinc-400 hover:text-zinc-200 hover:bg-[#050D1A]'
                      }`}
                    >
                      <span className="truncate flex-1 font-sans font-bold text-zinc-200 text-left">{threat.threatName}</span>
                      <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded font-extrabold text-right shrink-0 ${
                        threat.impact === 'CRITICAL' ? 'bg-red-950/40 text-red-400' : 'bg-amber-950/40 text-amber-400'
                      }`}>
                        {threat.impact}
                      </span>
                    </button>
                  );
              })}
            </div>

            {/* Right details review */}
            <div className="md:col-span-7 bg-[#050D1A] border border-zinc-850 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-850 pb-2">
                <span className="text-[9px] font-mono text-gold uppercase tracking-widest font-extrabold">
                  Detailed Threat Dossier
                </span>
                <span className="text-[9px] font-mono text-zinc-500 italic uppercase">
                  ID: {activeThreat.id}
                </span>
              </div>

              <div className="space-y-3 font-sans leading-relaxed">
                <h4 className="text-sm font-semibold text-white tracking-tight leading-snug">
                  {activeThreat.threatName}
                </h4>

                <div className="space-y-1">
                  <span className="text-[9.5px] font-mono text-red-400 uppercase font-extrabold block">Infiltration Vector:</span>
                  <p className="text-xs text-zinc-400 font-light select-text">
                    {activeThreat.vector}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[9.5px] font-mono text-indigo-400 uppercase font-extrabold block">Platform Impact:</span>
                  <p className="text-xs text-zinc-400 font-light select-text">
                    {activeThreat.consequence}
                  </p>
                </div>

                <div className="space-y-1 border-t border-zinc-850 pt-2.5">
                  <span className="text-[9.5px] font-mono text-emerald-400 uppercase font-extrabold block">Ardaca Mitigation Protocol:</span>
                  <p className="text-xs text-zinc-200 tracking-tight font-medium select-text">
                    {activeThreat.mitigation}
                  </p>
                </div>
              </div>

              {/* Badges footer */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-855/50">
                <div className="p-2 bg-zinc-950/40 border border-zinc-850 rounded text-center">
                  <span className="text-[7.5px] font-mono text-zinc-500 uppercase tracking-widest block leading-none mb-1">Impact / Likelihood</span>
                  <span className="text-xs font-mono font-extrabold text-[#C8973A]">{activeThreat.impact} / {activeThreat.likelihood}</span>
                </div>
                <div className="p-2 bg-zinc-950/40 border border-zinc-805 rounded text-center">
                  <span className="text-[7.5px] font-mono text-zinc-500 uppercase tracking-widest block leading-none mb-1">Residual Risk Score</span>
                  <span className="text-xs font-mono font-extrabold text-emerald-400">● {activeThreat.residualRisk}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* 🚀 Active Compliance Controls Map */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-1 border-b border-zinc-800">
          <Layers size={15} className="text-gold" />
          <h3 className="text-xs font-mono uppercase tracking-widest text-white font-extrabold">
            Bespoke Enterprise Compliance Directives
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityRequirements.map((req) => (
            <div key={req.id} className="bg-[#091424] border border-zinc-800 hover:border-zinc-750 p-5 rounded-2xl flex flex-col justify-between space-y-4 transition-all">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[8.5px] font-mono text-gold uppercase tracking-wider bg-[#C8973A]/10 px-2 py-0.5 rounded font-extrabold border border-[#C8973A]/15">
                    {req.category} CONTROL
                  </span>
                  <span className="text-[8.5px] font-mono text-zinc-500">No. {req.id}</span>
                </div>
                <h4 className="font-sans font-bold text-xs text-zinc-150 tracking-tight leading-snug">
                  {req.title}
                </h4>
                <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                  {req.description}
                </p>
              </div>

              <div className="bg-zinc-950/50 border border-zinc-850 p-3 rounded-lg text-[10.5px] leading-relaxed select-text space-y-1">
                <span className="font-mono text-[9px] text-[#128C7E] font-bold block uppercase tracking-wide">Technical Implementation Measures:</span>
                <span className="text-zinc-300 font-light">{req.controlMeasure}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🚨 Simulated 48-Hour Incident Handing Response Module */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Interactive drill configuration */}
        <div className="lg:col-span-4 bg-[#091424] border border-zinc-800 rounded-3xl p-6 space-y-5">
          <div className="flex items-center gap-2 pb-2 border-b border-zinc-850">
            <Flame size={14} className="text-red-500 animate-pulse" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#E0BA67] font-extrabold">
              48-Hour Critical Response Drill
            </h3>
          </div>

          <p className="text-xs text-zinc-400 font-light leading-relaxed font-sans">
            GCC real estate committees require platforms to execute simulated cybersecurity breach assessments routinely. 
            Choose an incident scenario to simulate simulated operational, engineering, and legal mitigations.
          </p>

          <div className="space-y-4 pt-2">
            
            {/* Scenarios SELECTOR */}
            <div className="space-y-2">
              <button
                onClick={() => launchDrill("claims-leak")}
                className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex justify-between items-center cursor-pointer ${
                  activeDrill === "claims-leak" && drillStep > 0
                    ? 'border-red-500 bg-red-950/10 text-white font-bold'
                    : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <span>Scenario A: Claim Valuation Leak</span>
                <PlayCircle size={14} className="text-red-500" />
              </button>

              <button
                onClick={() => launchDrill("malware")}
                className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex justify-between items-center cursor-pointer ${
                  activeDrill === "malware" && drillStep > 0
                    ? 'border-red-500 bg-red-950/10 text-white font-bold'
                    : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <span>Scenario B: Blueprint Macro Malware</span>
                <PlayCircle size={14} className="text-red-500" />
              </button>

              <button
                onClick={() => launchDrill("escalation")}
                className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex justify-between items-center cursor-pointer ${
                  activeDrill === "escalation" && drillStep > 0
                    ? 'border-red-500 bg-red-950/10 text-white font-bold'
                    : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <span>Scenario C: Multi-Tenant Breach</span>
                <PlayCircle size={14} className="text-red-500" />
              </button>
            </div>

            {/* Simulated actions */}
            {drillStep > 0 && (
              <div className="space-y-2 pt-2 border-t border-zinc-850">
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                  <span>MITIGATION SPEED RUN</span>
                  <span>STEP {drillStep} OF 3</span>
                </div>

                {drillStep < 3 ? (
                  <button
                    onClick={advanceDrill}
                    className="w-full text-center py-2 bg-emerald-600 hover:bg-emerald-500 text-[#050D1A] text-xs font-mono font-extrabold uppercase tracking-widest rounded-xl transition-all cursor-pointer shadow"
                  >
                    Deploy Next Mitigation Step →
                  </button>
                ) : (
                  <div className="text-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-2.5 rounded-lg text-[10.5px] font-bold font-mono">
                    ✓ INCIDENT RESOLVED SECURELY
                  </div>
                )}

                <button
                  onClick={resetDrill}
                  className="w-full text-center py-1.5 bg-zinc-950 hover:bg-zinc-850 border border-zinc-800 text-zinc-400 text-[10px] font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                >
                  Reset Active Simulation
                </button>
              </div>
            )}

          </div>

        </div>

        {/* Right: Technical Log Console */}
        <div className="lg:col-span-8 bg-zinc-950 border border-zinc-900 rounded-3xl p-6 space-y-4">
          
          <div className="flex items-center justify-between border-b border-zinc-850 pb-2">
            <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-widest">
              <Terminal size={12} className="text-zinc-400" />
              <span>Sovereign Security Incident Logging Console</span>
            </div>
            
            <span className="text-[9px] font-mono bg-emerald-505/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded uppercase font-bold">
              SIEM STREAM: ACTIVE
            </span>
          </div>

          <div className="font-mono text-xs text-zinc-400 space-y-2 leading-relaxed bg-[#050D1A] p-4 rounded-xl border border-zinc-900 min-h-[180px] max-h-[300px] overflow-y-auto">
            {drillStep === 0 ? (
              <div className="text-zinc-500 text-center py-12 italic">
                -- Console idle. Launch a 40-hour critical drill scenario to simulate mitigation workflows. --
              </div>
            ) : (
              <div className="space-y-1 animate-fade-in text-left">
                {drillResultsLog.map((log, index) => {
                  let logColor = "text-zinc-350";
                  if (log.includes("ACTION")) logColor = "text-gold font-bold";
                  else if (log.includes("SYSTEM")) logColor = "text-amber-400";
                  else if (log.includes("SUCCESS")) logColor = "text-emerald-400 font-bold";
                  else if (log.includes("WARNING")) logColor = "text-red-400";

                  return (
                    <p key={index} className={`font-mono text-[11px] leading-relaxed ${logColor}`}>
                      {log}
                    </p>
                  );
                })}
              </div>
            )}
          </div>

          {/* Incident escalation matrix details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-[10.5px]">
            <div className="border border-zinc-900 bg-[#091424]/40 p-3 rounded">
              <strong className="block text-zinc-200 font-bold font-sans">Escalation Phase 1:</strong>
              <span className="text-zinc-500 font-light font-sans">SLA Breach isolation, session invalidation, and secure schema locking within ~15 mins.</span>
            </div>
            <div className="border border-zinc-900 bg-[#091424]/40 p-3 rounded">
              <strong className="block text-zinc-200 font-bold font-sans">Escalation Phase 2:</strong>
              <span className="text-zinc-500 font-light font-sans">Triggering regional regulatory notifications (UAE PDPL Board) and notifying Giga-Developer partners.</span>
            </div>
            <div className="border border-zinc-900 bg-[#091424]/40 p-3 rounded text-left">
              <strong className="block text-zinc-200 font-bold font-sans">Escalation Phase 3:</strong>
              <span className="text-zinc-500 font-light font-sans">Forensic review on read-only isolated DB schemas, security audit sign-off.</span>
            </div>
          </div>

        </div>

      </div>

      {/* 🚀 Organizational Responsibility Matrix */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-1 border-b border-zinc-800">
          <Users size={15} className="text-gold" />
          <h3 className="text-xs font-mono uppercase tracking-widest text-white font-extrabold">
            Secure Governance & Compliance Matrix
          </h3>
        </div>

        <div className="bg-[#091424] border border-zinc-800 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-sans">
              <thead>
                <tr className="border-b border-zinc-850 bg-zinc-950 font-mono text-[9px] text-[#C8973A] uppercase font-bold tracking-widest">
                  <th className="p-4">Owner Role</th>
                  <th className="p-4">Governance Directive & Security Task</th>
                  <th className="p-4">Task Cadence</th>
                  <th className="p-4">Auditable Artifact & Sign-off</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-850 text-zinc-300">
                {securityRolesMatrix.map((task, idx) => (
                  <tr key={idx} className="hover:bg-zinc-950/40">
                    <td className="p-4 font-mono font-bold text-white shrink-0">
                      <span className={`px-2 py-0.5 rounded text-[10px] uppercase ${
                        task.role === 'CTO' ? 'bg-red-950/30 text-red-400 border border-red-900/40' :
                        task.role === 'DEVOPS' ? 'bg-indigo-950/30 text-indigo-400 border border-indigo-900/40' :
                        'bg-amber-950/30 text-amber-400 border border-amber-900/40'
                      }`}>
                        {task.role}
                      </span>
                    </td>
                    <td className="p-4 select-text font-light text-zinc-200">
                      {task.action}
                    </td>
                    <td className="p-4 font-mono font-bold text-zinc-400 text-[10px]">
                      {task.frequency}
                    </td>
                    <td className="p-4 italic font-mono text-zinc-500 text-[9.5px]">
                      {task.verification}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 🚀 Website Hardening Matrix */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-1 border-b border-zinc-805">
          <Settings size={15} className="text-[#C8973A]" />
          <h3 className="text-xs font-mono uppercase tracking-widest text-white font-extrabold">
            Production Website Hardening directives
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {websiteHardeningSteps.map((step) => (
            <div key={step.id} className="bg-[#091424]/90 border border-zinc-805 p-5 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[8.5px] font-mono text-gold font-bold uppercase tracking-wider">
                  {step.category} DIRECTIVE
                </span>
                <span className={`text-[8.5px] font-mono px-2 py-0.5 rounded font-extrabold border ${
                  step.status === 'HARDENED' ? 'bg-emerald-950/35 text-emerald-400 border-emerald-900/30' :
                  step.status === 'RECOMMENDED' ? 'bg-indigo-950/35 text-indigo-400 border-indigo-900/30' :
                  'bg-zinc-950 text-zinc-500'
                }`}>
                  {step.status}
                </span>
              </div>
              
              <h4 className="font-bold text-xs font-sans text-zinc-150 leading-snug">
                {step.directive}
              </h4>

              <div className="p-3.5 bg-zinc-950/60 border border-zinc-850 rounded-lg text-left select-all">
                <code className="block font-mono text-[10.5px] leading-relaxed text-zinc-300 break-all select-all">
                  {step.implementation}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Final Statement */}
      <div className="border-t border-zinc-850 pt-6 text-center text-[10.5px] font-mono text-zinc-500">
        <p className="max-w-4xl mx-auto leading-relaxed italic">
          Make the recommendations suitable for a premium GCC enterprise SaaS platform that handles sensitive commercial, legal, and identity data, and must be secure enough for high-trust clients and billion-level business use.
        </p>
      </div>

    </div>
  );
}
