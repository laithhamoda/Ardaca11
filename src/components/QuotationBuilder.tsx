import React, { useState } from "react";
import { Plus, Trash, Calculator, ChevronLeft, ShieldCheck, HelpCircle, Save, Layers } from "lucide-react";

interface QuotationBuilderProps {
  onNavigate: (tab: string) => void;
  onSaveQuotationFinished: (newQuote: { base: number; supervision: number; total: number }) => void;
}

export default function QuotationBuilder({ onNavigate, onSaveQuotationFinished }: QuotationBuilderProps) {
  // Section 1: Design and Specs rows
  const [designRows, setDesignRows] = useState([
    { item: "Detailed Architectural BIM Model Drafting", qty: 1, rate: 350000, subtotal: 350000 },
    { item: "DED Dubai Municipality & Civil Defense Approval submission", qty: 1, rate: 120000, subtotal: 120000 },
    { item: "MEP load balancing & structural checks engineering", qty: 1, rate: 140000, subtotal: 140000 }
  ]);

  const [newItem1, setNewItem1] = useState("");
  const [newRate1, setNewRate1] = useState(10000);

  // Section 2: Site Supervision schedules
  const [supervisionRows, setSupervisionRows] = useState([
    { item: "Weekly civil engineering structural audit checks schedule", qty: 5, rate: 30000, subtotal: 150000 },
    { item: "Safety compliance & fire hazard review mobilization", qty: 2, rate: 15000, subtotal: 30000 }
  ]);

  const [newItem2, setNewItem2] = useState("");
  const [newRate2, setNewRate2] = useState(5000);
  const [newQty2, setNewQty2] = useState(1);

  // Margin Calculator (Screen 11 Component 3)
  const [marginPct, setMarginPct] = useState<number>(12); // Adjustable percentage

  const addRow1 = () => {
    if (!newItem1) return;
    setDesignRows([...designRows, { item: newItem1, qty: 1, rate: newRate1, subtotal: newRate1 }]);
    setNewItem1("");
    setNewRate1(10000);
  };

  const deleteRow1 = (idx: number) => {
    setDesignRows(designRows.filter((_, i) => i !== idx));
  };

  const addRow2 = () => {
    if (!newItem2) return;
    setSupervisionRows([...supervisionRows, { item: newItem2, qty: newQty2, rate: newRate2, subtotal: newQty2 * newRate2 }]);
    setNewItem2("");
    setNewQty2(1);
    setNewRate2(5000);
  };

  const deleteRow2 = (idx: number) => {
    setSupervisionRows(supervisionRows.filter((_, i) => i !== idx));
  };

  // Computations
  const subtotal1 = designRows.reduce((sum, row) => sum + row.subtotal, 0);
  const subtotal2 = supervisionRows.reduce((sum, row) => sum + row.subtotal, 0);
  const sumRawTotal = subtotal1 + subtotal2;
  const marginAmt = (sumRawTotal * marginPct) / 100;
  const grandTotal = sumRawTotal + marginAmt;

  const handleSaveProposal = () => {
    onSaveQuotationFinished({
      base: subtotal1,
      supervision: subtotal2,
      total: grandTotal
    });
    alert(`Quotation saved! Base Proposal: AED ${subtotal1.toLocaleString()}. Supervision: AED ${subtotal2.toLocaleString()}. Grand total including ${marginPct}% margin: AED ${grandTotal.toLocaleString()}`);
    onNavigate("consultant_dashboard");
  };

  return (
    <div id="quotation_builder_screen" className="text-zinc-100 p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Back button */}
      <button
        id="btn_back_consultant"
        onClick={() => onNavigate("consultant_dashboard")}
        className="text-xs font-mono text-zinc-400 hover:text-zinc-200 flex items-center gap-1 cursor-pointer transition-colors"
      >
        <ChevronLeft size={14} />
        <span>Return to Consultant Workspace</span>
      </button>

      {/* Header Info */}
      <div className="border-b border-zinc-900 pb-5">
        <div className="text-[10px] font-mono text-emerald-400 mb-1 tracking-widest uppercase">
          PROPRIETARY QUOTATION BUILDER
        </div>
        <h1 className="text-xl md:text-2xl font-light tracking-tight">
          Quotation Builder | <span className="font-extrabold text-zinc-100">ProcureUAE</span>
        </h1>
        <p className="text-[11px] text-zinc-500 font-mono">
          Ref Workspace Project: Luxury Villa Fit-out (Status: Drafting v1.02)
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Grid: Tables of itemization (Screen 11 Component 2) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SECTION 1: DESIGN AND SPECS */}
          <div className="bg-[#121214] border border-zinc-900 rounded-xl p-5 space-y-4">
            <div className="flex justify-between items-center text-xs">
              <h3 className="font-semibold text-zinc-200">Section 1: Design & Documentation</h3>
              <span className="font-mono text-emerald-400 font-medium">AED {subtotal1.toLocaleString()}</span>
            </div>

            <div className="space-y-2">
              {designRows.map((row, idx) => (
                <div key={idx} className="flex justify-between items-center bg-zinc-950 p-3 rounded text-xs border border-zinc-900">
                  <div>
                    <span className="font-semibold text-zinc-300 block">{row.item}</span>
                    <span className="text-[10px] text-zinc-500 font-mono">Static Rate Basis</span>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-mono text-zinc-200">AED {row.rate.toLocaleString()}</span>
                    <button
                      onClick={() => deleteRow1(idx)}
                      className="text-zinc-500 hover:text-red-400 p-1 cursor-pointer"
                    >
                      <Trash size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Item 1 Add Block */}
            <div className="bg-zinc-900/45 p-3 rounded border border-zinc-800/60 grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
              <div className="sm:col-span-2">
                <label className="block text-[9px] font-mono text-zinc-500 uppercase mb-0.5">Custom Item Spec</label>
                <input
                  type="text"
                  placeholder="e.g. Geotechnical soil compaction analysis"
                  value={newItem1}
                  onChange={(e) => setNewItem1(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-zinc-100 placeholder-zinc-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[9px] font-mono text-zinc-500 uppercase mb-0.5">Rate AED</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={newRate1}
                    onChange={(e) => setNewRate1(Number(e.target.value))}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1.5 text-xs focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={addRow1}
                    className="bg-emerald-500 text-zinc-950 px-3 py-1.5 rounded text-xs font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* SECTION 2: SITE SUPERVISION */}
          <div className="bg-[#121214] border border-zinc-900 rounded-xl p-5 space-y-4">
            <div className="flex justify-between items-center text-xs">
              <h3 className="font-semibold text-zinc-200">Section 2: Site Supervision Schedule</h3>
              <span className="font-mono text-emerald-400 font-medium">AED {subtotal2.toLocaleString()}</span>
            </div>

            <div className="space-y-2">
              {supervisionRows.map((row, idx) => (
                <div key={idx} className="flex justify-between items-center bg-zinc-950 p-3 rounded text-xs border border-zinc-900">
                  <div>
                    <span className="font-semibold text-zinc-300 block">{row.item}</span>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      {row.qty} Scheduled Sessions @ AED {row.rate.toLocaleString()} / session
                    </span>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-mono text-zinc-200">AED {row.subtotal.toLocaleString()}</span>
                    <button
                      onClick={() => deleteRow2(idx)}
                      className="text-zinc-500 hover:text-red-400 p-1 cursor-pointer"
                    >
                      <Trash size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Item 2 Add Block */}
            <div className="bg-zinc-900/45 p-3 rounded border border-zinc-800/60 grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
              <div className="sm:col-span-2">
                <label className="block text-[9px] font-mono text-zinc-500 uppercase mb-0.5">Contractor Supervision Scope</label>
                <input
                  type="text"
                  placeholder="e.g. Daily site health safety checks"
                  value={newItem2}
                  onChange={(e) => setNewItem2(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-xs focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[9px] font-mono text-zinc-500 uppercase mb-0.5">Sessions</label>
                <input
                  type="number"
                  value={newQty2}
                  onChange={(e) => setNewQty2(Number(e.target.value))}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1.5 text-xs focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[9px] font-mono text-zinc-500 uppercase mb-0.5">Rate AED</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={newRate2}
                    onChange={(e) => setNewRate2(Number(e.target.value))}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1.5 text-xs focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={addRow2}
                    className="bg-emerald-500 text-zinc-950 px-3 py-1.5 rounded text-xs font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Right Side Column: Margin Calculator Side panel (Screen 11 Component 3) */}
        <div className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Tender Aggregation Panel
          </h2>

          <div className="bg-[#121214] border border-zinc-900 rounded-xl p-5 space-y-6">
            
            {/* Live Pricing Recalculator form */}
            <div className="space-y-4">
              <label className="block text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                Adjust Operating Margin %
              </label>
              
              <div className="flex gap-4 items-center">
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={marginPct}
                  onChange={(e) => setMarginPct(Number(e.target.value))}
                  className="flex-1 accent-emerald-500"
                />
                <span className="font-mono bg-zinc-950 border border-zinc-800 px-3 py-1 text-xs text-emerald-400 font-bold rounded">
                  {marginPct}%
                </span>
              </div>
              
              <p className="text-[10px] text-zinc-500 leading-relaxed font-sans">
                Modifying this slider dynamically recalibrates the subtotaled raw schedules to produce compliant overall bid margins.
              </p>
            </div>

            {/* Calculations summaries */}
            <div className="space-y-3 pt-4 border-t border-zinc-900/80 text-xs">
              <div className="flex justify-between">
                <span className="text-zinc-500">Raw Schedules Sum:</span>
                <span className="font-mono text-zinc-300">AED {sumRawTotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">Margin Markup Amount:</span>
                <span className="font-mono text-zinc-300">AED {marginAmt.toLocaleString()}</span>
              </div>

              <div className="space-y-1.5 pt-4 border-t border-zinc-950 text-center">
                <span className="text-[9px] font-mono text-zinc-400 block uppercase">Final Sealed Proposal Value</span>
                <span className="text-lg font-bold text-emerald-400 font-mono block">
                  AED {grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Action Submit */}
            <button
              id="submit_quotation_builder_btn"
              onClick={handleSaveProposal}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-zinc-950 text-xs font-mono font-bold uppercase tracking-widest py-3 rounded cursor-pointer transition-colors shadow-lg shadow-emerald-500/10"
            >
              Dispatch Proposal File
            </button>

          </div>

          <div className="bg-[#121214] border border-zinc-900 rounded-xl p-4 flex gap-3 text-xs">
            <HelpCircle size={16} className="text-zinc-400 shrink-0 mt-0.5" />
            <p className="text-[10px] text-zinc-500 leading-relaxed font-sans font-light">
              <strong>Need Attestation?</strong> Saving creates a transient client-certified XML schema complying with NER economic guidelines.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
