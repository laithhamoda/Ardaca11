import React, { useState } from "react";
import { Plus, ChevronRight, FileText, Zap, Layers, RefreshCw, BarChart2, ShieldCheck, Settings, Users, Calculator, PlusCircle, Trash, Check } from "lucide-react";
import { Project, Quotation } from "../types";

interface ConsultantDashboardProps {
  projects: Project[];
  quotations: Quotation[];
  onNavigate: (tab: string) => void;
  onOpenQuotationBuilder: () => void;
}

export default function ConsultantDashboard({ projects, quotations, onNavigate, onOpenQuotationBuilder }: ConsultantDashboardProps) {
  const [activeSubTab, setActiveSubTab] = useState<"inquiries" | "quotes" | "load">("inquiries");
  
  // Luxury calculations or state for mock team loads
  const teamLoad = [
    { name: "Suresh Pillai (Lead Structural)", load: 85, projects: 3 },
    { name: "Fatima Al-Suwaidi (BIM Architect)", load: 40, projects: 2 },
    { name: "Marc Dubois (Senior Civil Inspector)", load: 90, projects: 4 }
  ];

  return (
    <div id="consultant_dashboard_screen" className="text-zinc-100 p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-900 pb-6">
        <div>
          <div className="text-[10px] font-mono text-emerald-400 mb-1 tracking-widest uppercase">
            ATTESTED CONSULTANCY FIRM NODE
          </div>
          <h1 className="text-xl md:text-2xl font-light tracking-tight">
            Consultant Portal | <span className="font-extrabold text-zinc-100">Edge Architects DXB</span>
          </h1>
          <p className="text-[11px] text-zinc-500 font-mono">
            Licensing Authority: DED Dubai Economy | Authorized DED Trade Registration No: 881290-B
          </p>
        </div>

        <div className="flex gap-2">
          <button
            id="consultant_compare_btn"
            onClick={() => onNavigate("compare_quotations")}
            className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-medium px-4 py-2 text-xs uppercase font-mono tracking-wider flex items-center gap-1.5 cursor-pointer transition-all rounded"
          >
            <Layers size={13} />
            <span>Compare Supplier Quotations</span>
          </button>
          
          <button
            id="btn_open_builder"
            onClick={onOpenQuotationBuilder}
            className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold px-4 py-2 text-xs uppercase font-mono tracking-wider flex items-center gap-1.5 cursor-pointer transition-all rounded"
          >
            <Calculator size={13} />
            <span>Launch Quotation Builder</span>
          </button>
        </div>
      </div>

      {/* Main Stats Panel */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Active Project Leads", value: "2" },
          { label: "Pending DED Approvals", value: "1" },
          { label: "Quote Validation Ratio", value: "98.4%" },
          { label: "Assigned Staff Strength", value: "14" }
        ].map((stat, i) => (
          <div key={i} className="bg-[#121214] border border-zinc-900 p-4 rounded-lg">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">{stat.label}</span>
            <span className="text-lg font-bold tracking-tight text-zinc-100">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Primary Workspace split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Tables/Tabs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex border-b border-zinc-900 gap-6">
            {[
              { id: "inquiries", label: "Open Inquiries Matrix" },
              { id: "quotes", label: "Quotation Evaluator Logs" },
              { id: "load", label: "Consultant Load Factor" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`pb-3 text-xs uppercase font-mono tracking-wider transition-all cursor-pointer relative ${
                  activeSubTab === tab.id
                    ? "text-emerald-400 font-bold"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {tab.label}
                {activeSubTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500" />
                )}
              </button>
            ))}
          </div>

          {/* Subtab Contents */}
          {activeSubTab === "inquiries" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-zinc-900/30 border border-zinc-900 p-4 rounded-lg text-xs leading-relaxed">
                <div>
                  <p className="font-semibold text-zinc-300">Evaluating: Luxury Villa Fit-out (Palm Jumeirah)</p>
                  <p className="text-[10px] text-zinc-500 font-mono">Reference Code: PJ-2024-089</p>
                </div>
                <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[9px] px-2 py-0.5 rounded">
                  98% Compliance Pool Verified
                </span>
              </div>

              <div className="bg-[#121214] border border-zinc-900 rounded-xl overflow-hidden">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-zinc-900 bg-zinc-950 font-mono text-zinc-500 text-[10px]">
                      <th className="p-3">Inquiry Code</th>
                      <th className="p-3">Partner Spec</th>
                      <th className="p-3">Grade Required</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900/60">
                    <tr className="hover:bg-zinc-900/20">
                      <td className="p-3 font-mono text-emerald-400 shrink-0">SUB-801</td>
                      <td className="p-3">Structural Glazing Facade</td>
                      <td className="p-3">Grade B Min</td>
                      <td className="p-3">
                        <span className="bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 text-[10px] font-mono rounded">
                          Active & Dispatching
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-900/20">
                      <td className="p-3 font-mono text-emerald-400">SUB-802</td>
                      <td className="p-3">Smart HVAC VRF Package</td>
                      <td className="p-3">Grade C Min</td>
                      <td className="p-3">
                        <span className="bg-zinc-800 text-zinc-400 px-1.5 py-0.5 text-[10px] font-mono rounded">
                          Draft (Reviewing Specs)
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeSubTab === "quotes" && (
            <div className="space-y-4">
              <div className="bg-[#121214] border border-zinc-900 rounded-xl overflow-hidden">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-zinc-900 bg-zinc-950 font-mono text-zinc-500 text-[10px]">
                      <th className="p-3">Consultant Provider</th>
                      <th className="p-3">Base Quote</th>
                      <th className="p-3">TAMM-Id Signed</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900/60">
                    {quotations.map((quo) => (
                      <tr key={quo.id} className="hover:bg-zinc-900/20">
                        <td className="p-3 font-semibold text-zinc-300">{quo.consultant}</td>
                        <td className="p-3 font-mono text-emerald-400">AED {quo.baseQuote.toLocaleString()}</td>
                        <td className="p-3 text-zinc-400 font-mono text-[9px]">{quo.tamId}</td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => onNavigate("compare_quotations")}
                            className="bg-zinc-900 hover:bg-zinc-800 text-[10px] font-mono text-zinc-300 px-2 py-1 rounded cursor-pointer"
                          >
                            Eval Link
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeSubTab === "load" && (
            <div className="bg-[#121214] border border-zinc-900 rounded-xl p-5 space-y-4">
              <p className="text-xs text-zinc-400">Real-time load and capability factor across assigned consultants and engineering signatories:</p>
              
              <div className="space-y-4">
                {teamLoad.map((person) => (
                  <div key={person.name} className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-zinc-200">{person.name}</span>
                      <span className="font-mono text-zinc-400">{person.load}% Load ({person.projects} projects)</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${person.load > 80 ? "bg-amber-400" : "bg-emerald-400"}`}
                        style={{ width: `${person.load}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Side: Compliance Review (Screen 9 Sidebar) */}
        <div className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            UAE Regulatory Audit
          </h2>

          <div className="bg-[#121214] border border-zinc-900 rounded-xl p-5 space-y-4">
            <div className="flex gap-3 items-start pb-4 border-b border-zinc-900">
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-200">TAMM Node Validated</p>
                <p className="text-[10px] text-zinc-400 leading-relaxed mt-0.5">
                  Your corporate Economic License holds active attestation vectors. No re-verification bottlenecks expected.
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-500">Corporate Grade</span>
                <span className="font-semibold text-zinc-300">Grade A Elite Lead</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-zinc-500">TAMM Token</span>
                <span className="font-mono text-[9px] text-zinc-400 uppercase select-all">TM-DXB-9844-ACTIVE</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-zinc-500">Last Telemetry Attest</span>
                <span className="font-mono text-[9px] text-zinc-500">2026-05-28 14:12 UTC</span>
              </div>
            </div>
          </div>

          {/* Action Reminder Banner */}
          <div className="bg-gradient-to-r from-emerald-950/20 to-teal-950/20 border border-emerald-900/30 rounded-xl p-5 text-center">
            <Zap size={24} className="mx-auto text-emerald-400 mb-2" />
            <span className="text-xs font-bold block text-zinc-100 mb-1">Interactive Sandbox Sandbox</span>
            <p className="text-[10px] text-zinc-400 leading-relaxed">
              Use the top-level roles selector to switch between different firm views. Perfect for full platform testing.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
