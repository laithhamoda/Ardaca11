import React, { useState } from "react";
import { Check, ShieldCheck, Building, HelpCircle, FileText, Smartphone, Fingerprint, RefreshCw, AlertCircle, Sparkles } from "lucide-react";
import { KYCDetails } from "../types";

interface KycRegisterProps {
  onRegisterSuccess: (details: KYCDetails) => void;
  onNavigate: (tab: string) => void;
}

export default function KycRegister({ onRegisterSuccess, onNavigate }: KycRegisterProps) {
  const [step, setStep] = useState<number>(1);
  const [role, setRole] = useState<KYCDetails["role"]>("");
  const [companyName, setCompanyName] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [authority, setAuthority] = useState("DED Dubai");
  const [licenseFile, setLicenseFile] = useState<string>("");
  const [dragActive, setDragActive] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [simulatingNER, setSimulatingNER] = useState(false);
  const [kycStatus, setKycStatus] = useState<"Idle" | "Submitting" | "Under Review" | "Approved">("Idle");

  // Drag and drop mechanics
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setLicenseFile(e.dataTransfer.files[0].name);
    }
  };

  const triggerVerification = () => {
    setSimulatingNER(true);
    setTimeout(() => {
      setSimulatingNER(false);
      setOtpVerified(true);
      setStep(4);
    }, 1800);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setKycStatus("Under Review");
    
    // Simulate real review and automatic federal matching
    setTimeout(() => {
      setKycStatus("Approved");
      const details: KYCDetails = {
        companyName: companyName || "Gulf Contracting Syndicate LLC",
        tradeLicenseNumber: licenseNumber || "CN-884910-D",
        dedLicensingAuthority: authority,
        registrationStep: 4,
        role: role || "Contractor",
        licenseFile: licenseFile || "trade_license_attested.pdf",
        status: "Approved"
      };
      
      // Save to localStorage or pass upwards
      onRegisterSuccess(details);
    }, 2500);
  };

  return (
    <div id="kyc_screen" className="max-w-4xl mx-auto py-8 px-4 text-zinc-100">
      
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-2xl font-light tracking-tight mb-2">
          Corporate Onboarding & <span className="font-extrabold text-emerald-400">KYC Verification</span>
        </h1>
        <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono">
          Federally verified via UAE Department of Economic Development & NER
        </p>
      </div>

      {/* Progress Line */}
      <div className="flex justify-between items-center max-w-lg mx-auto mb-12 relative">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-zinc-800 z-0" />
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 z-0"
          style={{ width: `${((step - 1) / 3) * 100}%` }}
        />

        {[
          { label: "Role", idx: 1, icon: Building },
          { label: "Company", idx: 2, icon: FileText },
          { label: "License", idx: 3, icon: ShieldCheck },
          { label: "Biometric", idx: 4, icon: Fingerprint }
        ].map((item) => {
          const Icon = item.icon;
          const isCurrent = step === item.idx;
          const isCompleted = step > item.idx;
          return (
            <div key={item.idx} className="relative z-10 flex flex-col items-center">
              <button
                type="button"
                onClick={() => {
                  if (item.idx < step) setStep(item.idx);
                }}
                disabled={item.idx > step}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono transition-all ${
                  isCompleted
                    ? "bg-emerald-500 text-zinc-950"
                    : isCurrent
                    ? "bg-zinc-100 text-zinc-950 ring-4 ring-emerald-500/20"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-500"
                }`}
              >
                {isCompleted ? <Check size={14} strokeWidth={3} /> : <Icon size={14} />}
              </button>
              <span className={`text-[10px] font-mono mt-1.5 ${isCurrent ? "text-emerald-400 font-bold" : "text-zinc-500"}`}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {kycStatus === "Idle" ? (
        <div className="bg-[#121214] border border-zinc-900 rounded-xl p-6 md:p-8 relative">
          
          {/* STEP 1: ROLE SELECTION */}
          {step === 1 && (
            <div>
              <h2 className="text-base font-semibold mb-1">Select Corporate Persona Ecosystem Gate</h2>
              <p className="text-xs text-zinc-400 mb-6">Your selected role determines your interface view, permission structures, and privacy layers.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { value: "Client", label: "Developer & Client", desc: "Asset owners and real estate developers looking to tender packages." },
                  { value: "Consultant", label: "Consultant Practice", desc: "Attested engineers, architects, and quantity surveyors authorizing milestones." },
                  { value: "Contractor", label: "Main Contractor", desc: "Tier-1 construction companies issuing sub-tenders to trade partners." },
                  { value: "Supplier", label: "Verified Supplier", desc: "Factories and distributors stocking regional raw materials and BOQ essentials." }
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setRole(option.value as KYCDetails["role"])}
                    className={`p-5 rounded-lg border text-left transition-all ${
                      role === option.value
                        ? "bg-emerald-950/20 border-emerald-500 text-zinc-100"
                        : "bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700/80 text-zinc-400 hover:text-zinc-300"
                    }`}
                  >
                    <h3 className="font-sans font-medium text-sm mb-1.5">{option.label}</h3>
                    <p className="text-[11px] leading-relaxed opacity-80">{option.desc}</p>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  disabled={!role}
                  onClick={() => setStep(2)}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-40 text-zinc-950 font-bold px-6 py-2.5 rounded text-xs tracking-wider uppercase cursor-pointer"
                >
                  Configure Identity details
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: COMPANY DETAILS */}
          {step === 2 && (
            <div>
              <h2 className="text-base font-semibold mb-1">DED Trade License Matching & Details</h2>
              <p className="text-xs text-zinc-400 mb-6">Enter economic license specs to auto-query the UAE National Economic Registry.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 mb-1.5 uppercase">Registered Corporate Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Al-Futtaim Development LLC"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-zinc-900/80 border border-zinc-800 rounded px-3 py-2.5 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/80"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 mb-1.5 uppercase">Trade License Number</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CN-102948-B"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    className="w-full bg-zinc-900/80 border border-zinc-800 rounded px-3 py-2.5 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/80"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 mb-1.5 uppercase">Licensing Registry Authority</label>
                  <select
                    value={authority}
                    onChange={(e) => setAuthority(e.target.value)}
                    className="w-full bg-zinc-900 to-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-emerald-500/80"
                  >
                    <option value="DED Dubai">DED Dubai (Dubai Economy)</option>
                    <option value="DED Abu Dhabi">ADDED (Abu Dhabi Department of Economic Development)</option>
                    <option value="DED Sharjah">Sharjah Economic Development Department</option>
                    <option value="JAFZA Dubai">JAFZA (Jebel Ali Free Zone)</option>
                  </select>
                </div>

                <div className="bg-zinc-900/50 p-4 rounded border border-zinc-800 flex items-start gap-3">
                  <AlertCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-zinc-400 leading-relaxed">
                    By submitting, our systems dynamically check validation parameters against Abu Dhabi ADDED / Dubai National NER database registries. Zero setup blockages.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="border border-zinc-800 text-zinc-400 hover:text-zinc-200 px-5 py-2.5 rounded text-xs cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={!companyName || !licenseNumber}
                  onClick={() => setStep(3)}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-40 text-zinc-950 font-bold px-6 py-2.5 rounded text-xs tracking-wider uppercase cursor-pointer"
                >
                  Verify Attestation
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: DOCUMENT UPLOAD */}
          {step === 3 && (
            <div>
              <h2 className="text-base font-semibold mb-1">Attested License Upload Matrix</h2>
              <p className="text-xs text-zinc-400 mb-6">Drop your valid corporate license registry paper (attestation required for automatic processing).</p>

              <div
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                  dragActive ? "border-emerald-400 bg-emerald-950/10" : "border-zinc-800 bg-zinc-950/20"
                }`}
              >
                <FileText size={40} className="mx-auto text-zinc-600 mb-3" />
                <p className="text-xs text-zinc-300 font-mono mb-1">Drag and drop attested PDF here</p>
                <p className="text-[10px] text-zinc-500 mb-4">Or click to select file from computer</p>
                
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setLicenseFile(e.target.files[0].name);
                    }
                  }}
                />
                
                <label
                  htmlFor="file-upload"
                  className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs px-4 py-2 rounded-md font-mono cursor-pointer transition-colors inline-block"
                >
                  Choose Document File
                </label>

                {licenseFile && (
                  <div className="mt-4 inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs px-3 py-1.5 rounded font-mono">
                    <Check size={12} />
                    <span>Selected: {licenseFile}</span>
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="border border-zinc-800 text-zinc-400 hover:text-zinc-200 px-5 py-2.5 rounded text-xs cursor-pointer"
                >
                  Back
                </button>

                <button
                  type="button"
                  disabled={!licenseFile || simulatingNER}
                  onClick={triggerVerification}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-40 text-zinc-950 font-bold px-6 py-2.5 rounded text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer"
                >
                  {simulatingNER ? (
                    <>
                      <RefreshCw size={14} className="animate-spin" />
                      <span>Authenticating NER...</span>
                    </>
                  ) : (
                    <span>Fetch Biometric Auth</span>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: OTP & Liveness / Verification */}
          {step === 4 && (
            <div>
              <h2 className="text-base font-semibold mb-1">Biometric Consent / OTP Authentication</h2>
              <p className="text-xs text-zinc-400 mb-6">Enter the UAE PASS auth challenge signature code sent to your registered card holder mobile number.</p>

              <div className="max-w-md mx-auto bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 text-center">
                <Smartphone size={32} className="mx-auto text-emerald-400 mb-4" />
                <h3 className="text-xs font-mono text-zinc-300 uppercase mb-4">MOCK MOBILE SECURE CODE</h3>
                
                {otpSent ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Enter 6-Digit UAE-PASS OTP"
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      className="w-48 text-center bg-zinc-950 tracking-widest font-mono text-lg border border-zinc-800 rounded px-3 py-2 text-emerald-400 focus:outline-none"
                    />
                    <div className="flex justify-center gap-2">
                      <button
                        type="button"
                        onClick={handleFinalSubmit}
                        className="bg-emerald-500 text-zinc-950 text-xs font-mono px-4 py-2 rounded font-bold cursor-pointer"
                      >
                        Sign Declaration
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                      Authenticate via registered UAE mobile terminal (+971-50-XXXX890). This validates you as an attested administrative officer.
                    </p>
                    <button
                      type="button"
                      onClick={() => setOtpSent(true)}
                      className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 text-xs px-4 py-2 rounded font-mono cursor-pointer"
                    >
                      Dispatch Safe OTP Hook
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      ) : (
        /* KYC REVIEWING OVERLAY */
        <div className="bg-[#121214] border border-emerald-900 p-8 rounded-xl text-center space-y-6 relative overflow-hidden">
          
          {kycStatus === "Under Review" ? (
            <div className="space-y-4 py-8">
              <RefreshCw size={48} className="mx-auto text-amber-400 animate-spin" />
              <h2 className="text-lg font-light">Verifying attestation against federal database directories...</h2>
              <p className="text-xs text-zinc-400 max-w-md mx-auto">
                Comparing DED Trade registration <code className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded font-mono text-zinc-300">{licenseNumber}</code> with the national trust registry pool.
              </p>
              
              <div className="w-1/2 mx-auto bg-zinc-900 h-2 rounded-full overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 bg-emerald-500 animate-pulse" style={{ width: "80%" }}></div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 py-8">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-lg font-semibold text-emerald-400 flex items-center justify-center gap-1.5">
                <Sparkles size={16} /> 
                <span>Verification Attestation Secured!</span>
              </h2>
              <p className="text-xs text-zinc-300 max-w-lg mx-auto leading-relaxed">
                Congratulations! We successfully paired your firm <strong className="text-zinc-100">{companyName}</strong> as an authenticated <strong>{role}</strong> with full TAMM-linked compliance keys.
              </p>

              <div className="flex justify-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate(`${role.toLowerCase()}_dashboard`)}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 text-xs uppercase tracking-wider font-mono px-6 py-3 rounded-md font-bold cursor-pointer"
                >
                  Go to {role} Portal
                </button>
              </div>
            </div>
          )}

        </div>
      )}

      {/* Trust indicators */}
      <div className="mt-8 text-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
        TAMM single sign-on compliant. Secured by direct cryptographical ledger nodes. Abu Dhabi Economic Authority validated.
      </div>
    </div>
  );
}
