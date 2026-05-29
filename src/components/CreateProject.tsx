import React, { useState } from "react";
import { ChevronLeft, Plus, Layout, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { Project } from "../types";

interface CreateProjectProps {
  onNavigate: (tab: string) => void;
  onAddProjectFinished: (proj: Project) => void;
}

export default function CreateProject({ onNavigate, onAddProjectFinished }: CreateProjectProps) {
  const [step, setStep] = useState(1);
  
  // Form fields
  const [name, setName] = useState("");
  const [location, setLocation] = useState("Dubai Marina, Dubai, UAE");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("Residential Luxury");
  const [deadline, setDeadline] = useState("2026-12-01");
  const [consultant, setConsultant] = useState("Edge Architects");
  const [contractor, setContractor] = useState("Al-Futtaim Construction");

  const handleSubmitProject = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedVal = value.startsWith("AED") ? value : `AED ${Number(value).toLocaleString()}`;
    const newProj: Project = {
      id: "PJ-2024-" + Math.floor(100 + Math.random() * 900),
      name: name || "Jumeirah heights Luxury Villa Complex",
      location,
      value: formattedVal || "AED 24,000,000",
      status: "Active",
      client: "Ahmed Al-Maktoum (Portfolio Lead)",
      consultant,
      contractor,
      progress: 0,
      deadline,
      category
    };

    onAddProjectFinished(newProj);
    onNavigate("client_dashboard");
    alert(`Project '${newProj.name}' successfully posted with ID: ${newProj.id}! Verified by corporate digital key signature.`);
  };

  return (
    <div id="create_project_screen" className="text-zinc-100 p-4 md:p-8 max-w-4xl mx-auto space-y-6">
      
      {/* Back link */}
      <button
        id="btn_back_client_create"
        onClick={() => onNavigate("client_dashboard")}
        className="text-xs font-mono text-zinc-400 hover:text-zinc-200 flex items-center gap-1 cursor-pointer transition-colors"
      >
        <ChevronLeft size={14} />
        <span>Abort & Return to Client Dashboard</span>
      </button>

      {/* Header title */}
      <div className="border-b border-zinc-900 pb-5 text-center">
        <h1 className="text-2xl font-light tracking-tight mb-1.5">
          Create New <span className="font-extrabold text-emerald-400">Ecosystem Project</span>
        </h1>
        <p className="text-xs text-zinc-400 capitalize font-mono">
          Stage 1: Project definition, licensing verification, and partner allocation
        </p>
      </div>

      <div className="bg-[#121214] border border-zinc-900 rounded-xl p-6 md:p-8">
        
        {/* Step indicator */}
        <div className="flex gap-4 border-b border-zinc-900 pb-4 mb-6 text-xs text-zinc-400 font-mono uppercase">
          <span className={`pb-2 ${step === 1 ? "text-emerald-400 border-b-2 border-emerald-500 font-bold" : ""}`}>
            1. Core Parameters
          </span>
          <span className={`pb-2 ${step === 2 ? "text-emerald-400 border-b-2 border-emerald-500 font-bold" : ""}`}>
            2. Allocation Check
          </span>
        </div>

        <form onSubmit={handleSubmitProject} className="space-y-6">
          
          {step === 1 ? (
            <div className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1.5">Project Display Identifier</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Palm Jumeirah Mansion Sector D"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-xs text-zinc-100 placeholder-zinc-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1.5">Site Location Zone</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dubai Marina, Dubai, UAE"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-xs focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1.5">Pre-authorized Value (AED)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 18000000"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-xs focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1.5">SaaS Sector Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-2.5 text-xs text-zinc-300"
                  >
                    <option value="Residential Luxury">Luxury Residential</option>
                    <option value="Commercial High-Rise">Commercial Development</option>
                    <option value="Infrastructure Broad">General Infrastructure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1.5">Key Handover Deadline</label>
                  <input
                    type="date"
                    required
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-500/30 rounded px-3 py-2.5 text-xs focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  disabled={!name || !value}
                  onClick={() => setStep(2)}
                  className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-zinc-950 font-mono text-xs uppercase font-bold tracking-wider px-5 py-2.5 rounded flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Allocation Check</span>
                  <ArrowRight size={13} />
                </button>
              </div>

            </div>
          ) : (
            <div className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1.5">Select Compliant Lead Consultant</label>
                  <select
                    value={consultant}
                    onChange={(e) => setConsultant(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-3 text-xs text-zinc-300"
                  >
                    <option value="Edge Architects">Edge Architects L.L.C (Compliant/DED-Verified)</option>
                    <option value="StrucBuild International">StrucBuild Structural (Compliant)</option>
                    <option value="DesignGrid Associates">DesignGrid Partners (Qualified)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1.5">Select Designated Lead Contractor</label>
                  <select
                    value={contractor}
                    onChange={(e) => setContractor(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-3 text-xs text-zinc-300"
                  >
                    <option value="Al-Futtaim Construction">Al-Futtaim Group (Grade A Elite verified)</option>
                    <option value="Arabtec Ltd">Arabtec Construction (Joint Venture)</option>
                  </select>
                </div>
              </div>

              <div className="bg-zinc-950 p-4 border border-zinc-900 rounded-lg flex items-start gap-3">
                <ShieldCheck size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
                  <strong>Digital Signature Verified:</strong> Creating this project automatically registers a unique Shakhout digital record matching DED license registries, allowing contractors to initiate safe subcontractor bid feeds immediately.
                </p>
              </div>

              <div className="flex justify-between items-center pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="border border-zinc-800 text-zinc-400 hover:text-zinc-200 px-4 py-2 text-xs rounded cursor-pointer"
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-mono text-xs uppercase font-bold tracking-widest px-6 py-2.5 rounded cursor-pointer transition-colors"
                >
                  Seize Project & Disburse Tenders
                </button>
              </div>

            </div>
          )}

        </form>
      </div>

    </div>
  );
}
