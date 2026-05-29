import React, { useState } from "react";
import { Check, ShieldCheck, Sparkles, HelpCircle, FileText, X, AlertOctagon, Fingerprint, RefreshCw } from "lucide-react";
import { Quotation } from "../types";

interface CompareQuotationsProps {
  quotations: Quotation[];
  onNavigate: (tab: string) => void;
}

export default function CompareQuotations({ quotations, onNavigate }: CompareQuotationsProps) {
  const [selectedQuote, setSelectedQuote] = useState<string | null>(null);
  const [showSignModal, setShowSignModal] = useState(false);
  const [isSigning, setIsSigning] = useState(false);
  const [signedOk, setSignedOk] = useState(false);
  const [passCode, setPassCode] = useState("");

  const handleSigningSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSigning(true);
    setTimeout(() => {
      setIsSigning(false);
      setSignedOk(true);
    }, 2000);
  };

  const getQuoteObjRef = quotations.find(q => q.id === selectedQuote);

  return (
    <div id="compare_quotations_screen" className="text-zinc-100 p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div>
        <div className="text-[10px] font-mono text-emerald-400 mb-1 tracking-widest uppercase">
          STRATEGIC TENDER DECISION HUB
        </div>
        <h1 className="text-xl md:text-2xl font-light tracking-tight">
          Compare Specialist <span className="font-extrabold text-zinc-100">Consultant Quotations</span>
        </h1>
        <p className="text-[11px] text-zinc-500 font-mono">
          Project Workspace: Dubai Marina Tower Exterior Retrofit (Ref: BT-2024-089)
        </p>
      </div>

      {/* Side-by-side quote matrix (Screen 4 components) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quotations.map((quo) => {
          return (
            <div
              key={quo.id}
              id={`quote_card_${quo.id}`}
              className={`relative bg-[#121214] border rounded-xl p-6 flex flex-col justify-between transition-all ${
                quo.recommended
                  ? "border-emerald-500 bg-emerald-500/5 ring-1 ring-emerald-500/20"
                  : "border-zinc-900/80 hover:border-zinc-800"
              }`}
            >
              {quo.recommended && (
                <div className="absolute -top-3 left-4 bg-emerald-500 text-zinc-950 text-[9px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles size={8} />
                  <span>RECOMMENDED FIT</span>
                </div>
              )}

              <div>
                <span className="text-[10px] font-mono text-zinc-500 block uppercase mb-1">
                  Reference: {quo.id}
                </span>
                <h3 className="text-base font-semibold text-zinc-100 mb-3">{quo.consultant}</h3>

                {/* Main Costs */}
                <div className="space-y-2 border-y border-zinc-900 py-3 mb-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-500">Base Design Fee</span>
                    <span className="font-mono text-zinc-300">AED {quo.baseQuote.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-500">Supervision Rate</span>
                    <span className="font-mono text-zinc-300">AED {quo.supervisionQuote.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs pt-1.5 border-t border-zinc-950">
                    <span className="text-zinc-400 font-bold">Total Bid Capital</span>
                    <span className="font-mono text-emerald-400 font-bold">AED {quo.total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Technical Alignment parameters */}
                <div className="space-y-4">
                  {/* Compliance Progress rating */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                      <span>COMPLIANCE RATIO</span>
                      <span className="text-zinc-300 font-bold">{quo.complianceScore}%</span>
                    </div>
                    <div className="w-full bg-zinc-950 h-1 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${quo.complianceScore > 90 ? "bg-emerald-500" : "bg-amber-400"}`}
                        style={{ width: `${quo.complianceScore}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 block uppercase mb-1.5">Proposed Milestones Checks</span>
                    <div className="space-y-1.5 max-h-[140px] overflow-y-auto">
                      {quo.milestones.map((m, idx) => (
                        <div key={idx} className="bg-zinc-950 p-2 rounded text-[10px] space-y-0.5 border border-zinc-900/60">
                          <p className="font-semibold text-zinc-300 line-clamp-1">{m.name}</p>
                          <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                            <span>{m.days} Workdays</span>
                            <span className="text-emerald-400">AED {m.cost.toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                <div>
                  <span className="text-[8px] font-mono text-zinc-500 uppercase block">Project Duration</span>
                  <span className="text-xs font-bold text-zinc-200 font-mono">{quo.durationMonths} Months</span>
                </div>

                <button
                  id={`select_quote_btn_${quo.id}`}
                  onClick={() => {
                    setSelectedQuote(quo.id);
                    setShowSignModal(true);
                  }}
                  className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 text-xs font-mono font-bold px-4 py-2 rounded uppercase mt-2 cursor-pointer flex items-center gap-1 transition-colors"
                >
                  <span>Select & Sign</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Signature & Secure Handshake overlay (Screen 4 acceptance modal) */}
      {showSignModal && getQuoteObjRef && (
        <div className="fixed inset-0 bg-zinc-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#121214] border border-zinc-900 w-full max-w-md rounded-xl p-6 relative space-y-6">
            
            <button
              onClick={() => {
                setShowSignModal(false);
                setSignedOk(false);
              }}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-200 p-1 cursor-pointer"
            >
              <X size={16} />
            </button>

            {!signedOk ? (
              <form onSubmit={handleSigningSubmit} className="space-y-4">
                <div className="text-center">
                  <Fingerprint size={40} className="mx-auto text-emerald-400 mb-3" />
                  <h3 className="text-sm font-bold text-zinc-100">Cryptographically Sign Contract</h3>
                  <p className="text-xs text-zinc-400 mt-1">Sponsoring and authorizing Edge Architects' selected proposal for Dubai Marina retrofit project.</p>
                </div>

                <div className="bg-zinc-950 p-4 border border-zinc-900 rounded-lg text-xs space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Assessed Partner:</span>
                    <strong className="text-zinc-200 font-bold">{getQuoteObjRef.consultant}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Value of Contract:</span>
                    <strong className="text-emerald-400 font-bold font-mono">AED {getQuoteObjRef.total.toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Audit Reference:</span>
                    <strong className="text-zinc-400 font-mono text-[9px] uppercase">{getQuoteObjRef.tamId}</strong>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[9px] font-mono text-zinc-400 uppercase">Input registered signature PIN / Passcode</label>
                  <input
                    type="password"
                    required
                    placeholder="Enter biometrical digital PIN verification"
                    value={passCode}
                    onChange={(e) => setPassCode(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs tracking-widest text-emerald-400 text-center font-mono focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSigning || !passCode}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 disabled:opacity-40 text-zinc-950 font-bold font-mono text-xs uppercase py-2.5 rounded tracking-widest flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSigning ? (
                    <>
                      <RefreshCw className="animate-spin" size={14} />
                      <span>Sealing ledger with sha-256 keys...</span>
                    </>
                  ) : (
                    <span>Sign Contract With UAE PASS</span>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-4">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h3 className="text-base font-bold text-emerald-400">Contract Signed Successfully!</h3>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-xs mx-auto">
                  The agreement was successfully cryptographically sealed and synched with the Abu Dhabi NER database. Ref Hash signed.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setShowSignModal(false);
                    setSignedOk(false);
                  }}
                  className="bg-zinc-900 hover:bg-zinc-800 text-xs px-5 py-2 rounded font-mono text-zinc-300 font-bold cursor-pointer"
                >
                  Acknowledge Handshake
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Audit ledger logs below */}
      <div className="bg-[#121214] border border-zinc-900 rounded-xl p-5 space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 pb-2 border-b border-zinc-900">
          Historical Audit Trail Logs (BT-2024-089)
        </h3>

        <div className="space-y-3 font-sans text-xs">
          {[
            { date: "May 28, 2026", note: "DesignGrid Associates submitted Concept Drawings, with validated National NER reference. Sealed Hash logged." },
            { date: "May 24, 2026", note: "Edge Architects uploaded corrected Structural Milestone charts satisfying ADDED Municipality code requirements." }
          ].map((hist, idx) => (
            <div key={idx} className="flex gap-3 justify-between text-zinc-400">
              <span className="font-mono text-[10px] shrink-0 text-zinc-500">{hist.date}</span>
              <p className="leading-relaxed text-[11px] font-light">{hist.note}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
