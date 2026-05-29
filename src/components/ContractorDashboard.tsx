import React, { useState } from "react";
import { PlusCircle, Trash, Check, HelpCircle, FileText, UploadCloud, MapPin, Grid, Layers, ClipboardList, TrendingUp } from "lucide-react";
import { Bid, SubInquiry } from "../types";

interface ContractorDashboardProps {
  bids: Bid[];
  subInquiries: SubInquiry[];
  onAddSubInquiry: (inquiry: SubInquiry) => void;
  onNavigate: (tab: string) => void;
}

export default function ContractorDashboard({ bids, subInquiries, onAddSubInquiry, onNavigate }: ContractorDashboardProps) {
  const [showPostForm, setShowPostForm] = useState(false);
  const [boardBids, setBoardBids] = useState<Bid[]>(bids);

  // Post Sub-inquiry form fields (Screen 2 & Screen 10)
  const [title, setTitle] = useState("");
  const [recipient, setRecipient] = useState<"Subcontractor" | "Supplier">("Subcontractor");
  const [scope, setScope] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [grade, setGrade] = useState("Grade B Minimum");
  const [location, setLocation] = useState("Palm Jumeirah, Dubai");
  const [distribution, setDistribution] = useState<"Open Public" | "Invite Only" | "Verified Only">("Verified Only");
  const [deadline, setDeadline] = useState("2026-06-20");
  const [fileAttached, setFileAttached] = useState<string>("");

  // BOQ Item list state
  const [boqList, setBoqList] = useState<{ item: string; qty: number; unit: string; rate: number }[]>([
    { item: "Low-E Visual Glazing Panel Class 1A", qty: 250, unit: "Sqm", rate: 850 }
  ]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemQty, setNewItemQty] = useState<number>(100);
  const [newItemUnit, setNewItemUnit] = useState("Sqm");
  const [newItemRate, setNewItemRate] = useState<number>(50);

  const addBoqItem = () => {
    if (!newItemName) return;
    setBoqList([...boqList, { item: newItemName, qty: newItemQty, unit: newItemUnit, rate: newItemRate }]);
    setNewItemName("");
    setNewItemQty(100);
    setNewItemRate(50);
  };

  const removeBoqItem = (index: number) => {
    setBoqList(boqList.filter((_, i) => i !== index));
  };

  const handleCreateInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const newInquiry: SubInquiry = {
      id: "SUB-" + Math.floor(100 + Math.random() * 900),
      title: title || "Premium Interior Marble Cladding Work",
      recipientType: recipient,
      scope: scope || "Fitting of Carrera White Marble panels on targeted accent columns as specified in drawings package.",
      specialization: specialization || "Interior Fit-out & Masonry",
      requiredGrade: grade,
      location,
      distribution,
      deadline,
      status: "Active",
      boq: boqList.map(b => ({ item: b.item, qty: b.qty, unit: b.unit, estimatedRate: b.rate }))
    };

    onAddSubInquiry(newInquiry);
    setShowPostForm(false);
    // Reset fields
    setTitle("");
    setScope("");
    setSpecialization("");
  };

  // Move bid status simulation
  const cycleBidStatus = (bidId: string) => {
    setBoardBids(prev =>
      prev.map(b => {
        if (b.id === bidId) {
          const nextStatusMap: Record<Bid["status"], Bid["status"]> = {
            Sourcing: "Submitted",
            Submitted: "Reviewing",
            Reviewing: "Won",
            Won: "Sourcing"
          };
          return { ...b, status: nextStatusMap[b.status] };
        }
        return b;
      })
    );
  };

  const totalValueSum = boqList.reduce((acc, curr) => acc + (curr.qty * curr.rate), 0);

  return (
    <div id="contractor_dashboard_screen" className="text-zinc-100 p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-900 pb-6">
        <div>
          <div className="text-[10px] font-mono text-emerald-400 mb-1 tracking-widest uppercase">
            TIER-1 CORE CONDUIT PORTAL
          </div>
          <h1 className="text-xl md:text-2xl font-light tracking-tight">
            Main Contractor Gateway | <span className="font-extrabold text-zinc-100">Al-Futtaim Construction</span>
          </h1>
          <p className="text-[11px] text-zinc-500 font-mono">
            Ecosystem Registry NODE_AL_FUTTAIM_DXB | UAE DED Trade License verified active
          </p>
        </div>

        <button
          id="btn_toggle_post_form"
          onClick={() => setShowPostForm(!showPostForm)}
          className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 px-4 py-2.5 rounded font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer font-sans transition-colors"
        >
          {showPostForm ? (
            <span>Inspect Active Bids Node</span>
          ) : (
            <>
              <PlusCircle size={14} />
              <span>Post Sub-Inquiry</span>
            </>
          )}
        </button>
      </div>

      {!showPostForm ? (
        /* MAIN DASHBOARD CONTENT */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Bid Tracking Board (Kanban Column format) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center text-xs">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Bid Submission Tracking board
              </h2>
              <span className="text-[10px] text-zinc-500 uppercase font-mono">
                Click a card to progress workflow status
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {(["Sourcing", "Submitted", "Reviewing", "Won"] as Bid["status"][]).map((col) => {
                const bidsInCol = boardBids.filter(b => b.status === col);
                return (
                  <div key={col} className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-3 space-y-3 min-h-[220px]">
                    <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                      <span className="text-[10px] font-mono font-bold text-zinc-300 uppercase">{col}</span>
                      <span className="bg-zinc-800 text-[9px] text-zinc-400 px-1.5 py-0.5 rounded font-mono">
                        {bidsInCol.length}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {bidsInCol.map((b) => (
                        <div
                          key={b.id}
                          onClick={() => cycleBidStatus(b.id)}
                          className="bg-zinc-900/60 border border-zinc-900 hover:border-zinc-800 p-3 rounded-lg cursor-pointer transition-all space-y-2 hover:bg-zinc-900 group"
                        >
                          <div className="flex justify-between text-[8px] font-mono text-zinc-500">
                            <span>{b.id}</span>
                            <span className="text-zinc-400 font-bold">{b.location}</span>
                          </div>
                          
                          <p className="text-xs font-semibold text-zinc-200 leading-tight group-hover:text-emerald-400 transition-colors">
                            {b.projectTitle}
                          </p>
                          <p className="text-[9px] text-zinc-500">{b.clientName}</p>
                          
                          <div className="text-[10px] text-emerald-400 font-mono font-semibold pt-1 border-t border-zinc-950">
                            {b.bidAmount}
                          </div>
                        </div>
                      ))}

                      {bidsInCol.length === 0 && (
                        <p className="text-center text-[10px] text-zinc-600 py-6 font-mono">Empty Zone</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Global Dispatch list of Sub-Inquiries */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                My Posted Sub-Inquiries & Outbounds
              </h3>

              <div className="bg-[#121214] border border-zinc-900 rounded-xl divide-y divide-zinc-900">
                {subInquiries.map((inq) => (
                  <div key={inq.id} className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-emerald-400 text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded font-semibold">
                          {inq.id}
                        </span>
                        <h4 className="font-semibold text-zinc-200">{inq.title}</h4>
                      </div>
                      
                      <p className="text-zinc-400 text-[11px] leading-relaxed line-clamp-1 max-w-xl">
                        {inq.scope}
                      </p>
                      
                      <div className="flex gap-4 mt-2 text-[9px] font-mono text-zinc-500">
                        <span>SPECIALTY: {inq.specialization}</span>
                        <span>GRADE: {inq.requiredGrade}</span>
                        <span>STRATEGY: <strong className="text-zinc-400 font-bold">{inq.distribution}</strong></span>
                      </div>
                    </div>

                    <div className="text-right flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto shrink-0 border-t sm:border-0 pt-2 sm:pt-0 border-zinc-900">
                      <div>
                        <span className="text-[8px] text-zinc-500 block uppercase font-mono">Closing date</span>
                        <span className="font-mono text-zinc-300">{inq.deadline}</span>
                      </div>
                      
                      <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-mono px-2 py-0.5 rounded mt-1.5">
                        {inq.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Area (Al-Futtaim Portfolio Meta) */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Contractor Context Summary
            </h2>

            <div className="bg-[#121214] border border-zinc-900 rounded-xl p-5 space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-zinc-900 text-xs">
                <span className="font-medium text-zinc-200">National NER Rank</span>
                <span className="text-emerald-400 font-mono">Unlimited Tier-1 Elite</span>
              </div>

              <div className="space-y-3 text-xs">
                <h4 className="font-semibold text-zinc-400 uppercase tracking-wider text-[10px]">Active Subcontractors</h4>
                {[
                  { name: "Hansa Glazing LLC", area: "Facade Systems" },
                  { name: "Thermo MEP Emirates", area: "Mechanical/HVAC" },
                  { name: "Sigma Dubai Masonry", area: "Cladding & Interior" }
                ].map((s) => (
                  <div key={s.name} className="flex justify-between text-zinc-300">
                    <span>{s.name}</span>
                    <span className="text-[10px] text-zinc-500 font-mono">{s.area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Indicators */}
            <div className="bg-[#121214] border border-zinc-900 rounded-xl p-5 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500">Pipeline Analytics</h3>
              
              <div className="flex gap-4 items-center">
                <TrendingUp size={24} className="text-emerald-400 shrink-0" />
                <div>
                  <span className="text-xs font-semibold block text-zinc-200">AED 158,100,000</span>
                  <span className="text-[10px] text-zinc-500">Total Active Giga-Bids in Review</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      ) : (
        /* POST SUB-INQUIRY FORM (Screen 2 & Screen 10 layout) */
        <form onSubmit={handleCreateInquiry} className="bg-[#121214] border border-zinc-900/80 p-6 md:p-8 rounded-xl max-w-4xl mx-auto space-y-8">
          
          <div className="border-b border-zinc-900 pb-4">
            <h2 className="text-base font-semibold">Post Sub-Inquiry Package</h2>
            <p className="text-xs text-zinc-400">Target specified trade categories and dispatch private Bill of Quantities queries safely with automatic compliance hashing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Col Basic parameters */}
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">Inquiry Title / Scope Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Structural Glazing Glass & Curtain Wall"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-zinc-100 placeholder-zinc-700 focus:outline-none focus:border-emerald-500/80"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">Target Recipient Type</label>
                  <select
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value as any)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-zinc-300 focus:outline-none"
                  >
                    <option value="Subcontractor">Subcontractor</option>
                    <option value="Supplier">Factory / Supplier</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">Required Partner Grade</label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-zinc-300 focus:outline-none"
                  >
                    <option value="Grade A Minimum">Grade A Premium</option>
                    <option value="Grade B Minimum">Grade B Standard</option>
                    <option value="Grade C Minimum">Grade C Sub-Trade</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">Trade Specialization Keyword</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Facade, HVAC, Masonry"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-zinc-100 placeholder-zinc-700 focus:outline-none focus:border-emerald-500/80"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">Distribution Strategy</label>
                  <select
                    value={distribution}
                    onChange={(e) => setDistribution(e.target.value as any)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-zinc-300 focus:outline-none"
                  >
                    <option value="Verified Only">Verified Members Only</option>
                    <option value="Invite Only">Private Invite Code Only</option>
                    <option value="Open Public">Open Ecosystem Pool</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">Closing Submission Deadline</label>
                  <input
                    type="date"
                    required
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-500/30 rounded px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-emerald-500/80"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">General Scope Statement</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Summarize the core structural requirements and attestation codes required..."
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-zinc-100 placeholder-zinc-700 focus:outline-none focus:border-emerald-500/80"
                />
              </div>

              {/* Drawings Upload Zone (Screen 10 Component 3) */}
              <div className="border border-zinc-800/80 bg-zinc-950/20 rounded p-4 text-center">
                <UploadCloud size={24} className="mx-auto text-zinc-500 mb-2" />
                <span className="text-[10px] font-mono text-zinc-400 block uppercase mb-1">Specs & Drawings drop file</span>
                <input
                  type="file"
                  id="drawings-upload"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setFileAttached(e.target.files[0].name);
                    }
                  }}
                />
                <label htmlFor="drawings-upload" className="text-[10px] bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded cursor-pointer text-zinc-300 font-mono hover:bg-zinc-800 inline-block">
                  {fileAttached ? `File Added: ${fileAttached}` : "Choose PDF / DXF"}
                </label>
              </div>

            </div>

            {/* Right Col: Bill of Quantities (BOQ) Itemized Matrix Builder (Screen 10 Component 2) */}
            <div className="space-y-4 border-t md:border-t-0 md:border-l border-zinc-900 pt-6 md:pt-0 md:pl-6">
              <span className="block text-[10px] font-mono text-zinc-400 uppercase">Itemized BOQ Matrix Builder</span>
              
              <div className="space-y-2 bg-zinc-950/40 p-3 rounded border border-zinc-900 max-h-[220px] overflow-y-auto">
                {boqList.map((itm, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs bg-zinc-900/60 border border-zinc-900 p-2 rounded">
                    <div>
                      <span className="font-semibold text-zinc-200 block">{itm.item}</span>
                      <span className="text-[10px] text-zinc-500 font-mono">
                        {itm.qty} {itm.unit} @ AED {itm.rate}/unit
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeBoqItem(idx)}
                      className="text-zinc-500 hover:text-red-400 p-1.5 cursor-pointer"
                    >
                      <Trash size={12} />
                    </button>
                  </div>
                ))}

                {boqList.length === 0 && (
                  <p className="text-center py-8 text-zinc-600 text-[10px] font-mono">No BOQ items declared. Add items below.</p>
                )}
              </div>

              {/* BOQ item inputs */}
              <div className="bg-zinc-900/50 p-4 border border-zinc-800/80 rounded space-y-3">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-[8px] font-mono text-zinc-500 uppercase mb-0.5">Item Label</label>
                    <input
                      type="text"
                      placeholder="e.g. Steel Girders"
                      value={newItemName}
                      onChange={(e) => setNewItemName(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[8px] font-mono text-zinc-500 uppercase mb-0.5">Quantity</label>
                    <input
                      type="number"
                      value={newItemQty}
                      onChange={(e) => setNewItemQty(Number(e.target.value))}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[8px] font-mono text-zinc-500 uppercase mb-0.5">Unit</label>
                    <input
                      type="text"
                      value={newItemUnit}
                      onChange={(e) => setNewItemUnit(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[8px] font-mono text-zinc-500 uppercase mb-0.5">Rate AED</label>
                    <input
                      type="number"
                      value={newItemRate}
                      onChange={(e) => setNewItemRate(Number(e.target.value))}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={addBoqItem}
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[10px] font-mono uppercase tracking-wider py-1.5 rounded cursor-pointer"
                >
                  + Append Matrix Row
                </button>
              </div>

              {/* Aggregation Output (Screen 10 Aggregation display) */}
              <div className="border border-zinc-900 bg-zinc-950 p-4 rounded text-center">
                <span className="text-[9px] font-mono text-zinc-500 block uppercase">Estimated Inbound Threshold Limit</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">
                  AED {totalValueSum.toLocaleString()}
                </span>
                <span className="text-[8px] text-zinc-600 block mt-1 font-mono">Calculated from {boqList.length} total rows</span>
              </div>

            </div>

          </div>

          <div className="flex justify-between items-center pt-4 border-t border-zinc-900">
            <button
              type="button"
              onClick={() => setShowPostForm(false)}
              className="text-xs text-zinc-400 hover:text-zinc-200 border border-zinc-800 px-4 py-2 rounded cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-zinc-950 text-xs uppercase tracking-wider font-mono font-bold px-6 py-2.5 rounded shadow shadow-emerald-500/20 cursor-pointer"
            >
              Cryptographically Dispatch Sub-Inquiry
            </button>
          </div>

        </form>
      )}

    </div>
  );
}
