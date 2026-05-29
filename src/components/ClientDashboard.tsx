import React from "react";
import { Plus, ChevronRight, MapPin, DollarSign, Clock, Layout, FileSpreadsheet, ShieldAlert, FileText, ExternalLink, ShieldCheck, Trophy } from "lucide-react";
import { Project, AuditLog } from "../types";

interface ClientDashboardProps {
  projects: Project[];
  auditLogs: AuditLog[];
  onNavigate: (tab: string) => void;
  onSelectProject: (projectId: string) => void;
}

export default function ClientDashboard({ projects, auditLogs, onNavigate, onSelectProject }: ClientDashboardProps) {
  // Stats aggregated
  const totalPortfolios = projects.length;
  const totalValueAED = "AED 66,500,000";
  const complianceRating = "98.2%";

  return (
    <div id="client_dashboard_screen" className="text-zinc-100 p-4 md:p-8 max-w-7xl mx-auto space-y-8 relative">
      <div className="absolute top-10 right-4 w-72 h-72 bg-brand-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#C8973A]/15 pb-6">
        <div>
          <div className="text-[10px] font-mono text-brand-gold mb-1 tracking-widest uppercase font-bold">
            ESTATE HOLDER & CLIENT HUB • BUILDFLOW GCC
          </div>
          <h1 className="text-xl md:text-2xl font-light tracking-tight">
            Welcome back, <span className="font-extrabold text-[#F7F9FC]">Ahmed Al-Maktoum</span>
          </h1>
          <p className="text-[11px] text-zinc-500 font-mono tracking-wide">
            Ecosystem Authority License DED-DXB-98441 | Active GCC Node Lead
          </p>
        </div>

        <button
          id="btn_create_project_client"
          onClick={() => onNavigate("create_project")}
          className="bg-brand-gold hover:bg-[#E0BA67] text-[#0B1F3A] font-bold px-4 py-2.5 rounded text-xs uppercase tracking-widest flex items-center gap-1.5 cursor-pointer font-sans transition-all shadow-lg shadow-brand-gold/10"
        >
          <Plus size={14} />
          <span>Create Giga Project</span>
        </button>
      </div>

      {/* GCC Enterprise Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <div className="bg-[#0b1f3a]/25 border border-[#C8973A]/10 p-5 rounded-xl flex items-center justify-between shadow-md">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">
              Active Portfolios
            </span>
            <span className="text-xl font-bold tracking-tight text-white">{totalPortfolios}</span>
            <span className="text-[10px] text-brand-gold flex items-center gap-1 mt-1 font-mono uppercase tracking-wider">
              <ShieldCheck size={11} /> 
              <span>NER Compliance checked</span>
            </span>
          </div>
          <div className="p-3 bg-[#0B1F3A]/45 text-brand-gold border border-brand-gold/15 rounded-xl">
            <Layout size={20} />
          </div>
        </div>

        <div className="bg-[#0b1f3a]/25 border border-[#C8973A]/10 p-5 rounded-xl flex items-center justify-between shadow-md">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">
              Committed Value
            </span>
            <span className="text-xl font-bold tracking-tight text-brand-gold">{totalValueAED}</span>
            <span className="text-[10px] text-zinc-400 block mt-1 font-mono uppercase tracking-wider">
              Dubai Master Tenders
            </span>
          </div>
          <div className="p-3 bg-[#0B1F3A]/45 text-brand-gold border border-brand-gold/15 rounded-xl">
            <DollarSign size={20} />
          </div>
        </div>

        <div className="bg-[#0b1f3a]/25 border border-[#C8973A]/10 p-5 rounded-xl flex items-center justify-between shadow-md">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">
              Compliance Ratio
            </span>
            <span className="text-xl font-bold tracking-tight text-white">{complianceRating}</span>
            <span className="text-[10px] text-brand-gold flex items-center gap-1 mt-1 font-mono uppercase tracking-wider">
              <ShieldCheck size={11} />
              <span>National Node Sync</span>
            </span>
          </div>
          <div className="p-3 bg-[#0B1F3A]/45 text-brand-gold border border-brand-gold/15 rounded-xl">
            <ShieldAlert size={20} />
          </div>
        </div>

      </div>

      {/* Main Grid: Projects & Auditor Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Active Projects Cards */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-550 block font-bold">
              Active Giga-District Portfolios
            </h2>
            <button
              id="view_compare_quotations_btn"
              onClick={() => onNavigate("compare_quotations")}
              className="text-[10px] text-brand-gold font-mono hover:text-[#E0BA67] flex items-center gap-1 cursor-pointer transition-colors uppercase font-bold tracking-wider"
            >
              <span>Compare Consultant Proposals</span>
              <ChevronRight size={11} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((proj) => (
              <div
                key={proj.id}
                id={`client_project_${proj.id}`}
                className="bg-[#0b1f3a]/20 border border-zinc-900/80 hover:border-[#C8973A]/40 rounded-xl p-5 hover:bg-[#0B1F3A]/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[9px] font-mono bg-brand-navy-light text-white px-2 py-0.5 rounded border border-[#C8973A]/20 uppercase font-semibold">
                      {proj.category}
                    </span>
                    <span className={`h-2.5 w-2.5 rounded-full ${
                      proj.status === "Active" ? "bg-emerald-450 bg-emerald-500" : "bg-[#C8973A]"
                    }`} />
                  </div>

                  <h3 className="font-sans font-bold text-zinc-100 text-sm mb-1.5 leading-snug">{proj.name}</h3>
                  <p className="text-[10px] text-zinc-450 text-zinc-400 flex items-center gap-1 mb-3">
                    <MapPin size={11} className="text-brand-gold" />
                    <span>{proj.location}</span>
                  </p>

                  {/* Progress bar */}
                  <div className="space-y-1 mb-4">
                    <div className="flex justify-between text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
                      <span>Joint Sign-Off state</span>
                      <span className="text-brand-gold font-bold">{proj.progress}%</span>
                    </div>
                    <div className="w-full h-1 bg-brand-navy-dark rounded-full overflow-hidden border border-zinc-950">
                      <div className="h-full bg-gradient-to-r from-brand-gold to-[#E0BA67]" style={{ width: `${proj.progress}%` }} />
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between">
                  <div>
                    <span className="text-[8px] font-mono text-zinc-500 block uppercase tracking-wider">Project Value</span>
                    <span className="text-xs font-bold text-brand-gold font-mono">{proj.value}</span>
                  </div>
                  
                  <button
                    id={`client_detail_btn_${proj.id}`}
                    onClick={() => {
                      onSelectProject(proj.id);
                      onNavigate("project_detail");
                    }}
                    className="text-[9px] font-mono text-brand-gold border border-brand-gold/30 bg-[#0B1F3A]/40 hover:bg-[#0B1F3A] hover:text-white px-3 py-1.5 rounded flex items-center gap-1.5 cursor-pointer transition-all uppercase font-bold"
                  >
                    <span>Inspect Portal</span>
                    <ExternalLink size={10} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Notice */}
          <div className="bg-[#0b1f3a]/15 border border-[#C8973A]/20 text-[11px] text-zinc-400 p-4 rounded-xl leading-relaxed flex gap-3">
            <div className="w-2 h-2 rounded-full bg-brand-gold shrink-0 mt-1.5" />
            <p>
              <strong>BuildFlow Attestation Protocol:</strong> Under sovereign GCC guidelines, registered builders and consulting agencies are linked directly to federal nodes. Instant status modifications automatically populate the active ledgers in your secure room.
            </p>
          </div>
        </div>

        {/* Cryptographic Auditor Logs */}
        <div className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-550 block font-bold">
            Federal Cryptographic Trail
          </h2>

          <div className="bg-[#050e1b] border border-zinc-900 rounded-xl p-4 divide-y divide-zinc-900">
            {auditLogs.map((log) => (
              <div key={log.id} className="py-3 first:pt-0 last:pb-0 font-mono text-[10px]">
                <div className="flex justify-between text-[8px] text-zinc-500 mb-1">
                  <span>{log.timestamp}</span>
                  <span className="text-brand-gold font-bold">{log.id}</span>
                </div>
                <p className="text-zinc-200 text-[11px] font-sans font-semibold mb-0.5">{log.action}</p>
                <p className="text-zinc-400 text-[10px] leading-relaxed mb-1 font-sans">{log.details}</p>
                
                <div className="bg-[#040c17] p-1.5 rounded flex items-center justify-between text-[9px] text-zinc-550 font-mono border border-brand-navy-light/10">
                  <span className="text-[8px] uppercase tracking-wider text-zinc-650">SEALED HASH</span>
                  <span className="text-brand-gold select-all font-mono font-bold">{log.hash}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Engagement panel */}
          <div className="bg-[#050e1b] border border-zinc-900 rounded-xl p-5 space-y-4">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-zinc-400">Consultant Nodes state</h3>
            
            <div className="space-y-3">
              {[
                { name: "Edge Architects", status: "Active Lead", details: "Assigned PJ-2024-089" },
                { name: "DesignGrid Partners", status: "Evaluation", details: "Reviewing BT-2024-012" }
              ].map((c) => (
                <div key={c.name} className="flex justify-between items-center text-xs">
                  <div>
                    <p className="font-semibold text-zinc-200">{c.name}</p>
                    <p className="text-[10px] text-zinc-500">{c.details}</p>
                  </div>
                  <span className="text-[8px] font-mono font-bold bg-brand-gold/10 text-brand-gold border border-brand-gold/25 px-2 py-0.5 rounded uppercase tracking-wider">
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
