import React, { useState } from "react";
import { 
  ChevronLeft, 
  MapPin, 
  Send, 
  FileText, 
  Check, 
  X, 
  ShieldCheck, 
  Phone, 
  Clock, 
  UserCheck, 
  FileSignature,
  Fingerprint,
  Award,
  ChevronRight,
  MessageSquare,
  Activity,
  ShieldAlert,
  Building,
  Lock,
  Mail,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { Project } from "../types";

// Types corresponding to our GCC client database structure
interface ProjectDetailProps {
  project: Project;
  initialChat: { sender: string; text: string; time: string; type?: "text" | "approval" | "system"; memberId?: string; isApproved?: boolean; hash?: string | null }[];
  onNavigate: (tab: string) => void;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  company: string;
  photo: string;
  complianceScore: number;
  approvalItem: string;
  documentRef: string;
  status: "Approved" | "Action Required" | "Pending Review";
  signedHash: string | null;
  timestamp: string | null;
  email: string;
  phone: string;
}

export default function ProjectDetail({ project, initialChat, onNavigate }: ProjectDetailProps) {
  // Enhanced chat state supporting interactive Rich Messages
  const [messages, setMessages] = useState([
    {
      sender: "Sarah Jenkins",
      text: "Ahmed, I have submitted the technical facade specs and glazing stress files for your formal sign-off. Please review the heat resistance parameters for Palm Jumeirah climate.",
      time: "11:02 AM",
      type: "text" as const,
      memberId: "mem-2"
    },
    {
      sender: "Eng. Fatma Al-Mheiri",
      text: "SYSTEM SIGN-OFF REQ: Z09 District Permitting & Air-Right Attestation",
      time: "11:15 AM",
      type: "approval" as const,
      memberId: "mem-4",
      isApproved: false,
      hash: null as string | null
    },
    {
      sender: "Tariq Al-Sayed",
      text: "SYSTEM SIGN-OFF REQ: Foundation Load Bearings & Stress Attestation",
      time: "11:20 AM",
      type: "approval" as const,
      memberId: "mem-3",
      isApproved: false,
      hash: null as string | null
    },
    {
      sender: "Marcus Vance",
      text: "Ahmed, we verified the Grade 500W High-Yield Rebar shipment batch at the port. Cryptographic entry certificate has been attested.",
      time: "11:24 AM",
      type: "text" as const,
      memberId: "mem-5"
    }
  ]);

  const [inputVal, setInputVal] = useState("");
  const [activeSubTab, setActiveSubTab] = useState<"members" | "documents">("members");
  
  // Real-time progress tracker derived from base project
  const [projectProgress, setProjectProgress] = useState(project.progress);
  
  // Fingerprint HUD Loading indicators for immersive feedback during approvals
  const [authorizingMemberId, setAuthorizingMemberId] = useState<string | null>(null);

  // High-fidelity Unsplash portrait seeds representing verified GCC experts
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: "mem-1",
      name: "Ahmed Al-Maktoum",
      role: "Client Portfolio Lead",
      company: "Al-Maktoum Assets L.L.C",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      complianceScore: 100,
      approvalItem: "Developer Declaration & Capital Release",
      documentRef: "DEC-RELEASE-DXB-9122.pdf",
      status: "Approved",
      signedHash: "0x8fa4c3df0112ea8f2d91",
      timestamp: "2026-05-28 14:32 GST",
      email: "ahmed.m@maktoumholdings.ae",
      phone: "+971 4 800 1199"
    },
    {
      id: "mem-2",
      name: "Sarah Jenkins",
      role: "Lead Executive Architect",
      company: "Edge Architects",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
      complianceScore: 98,
      approvalItem: "Façade Structure Glazing Dual-Pane Design",
      documentRef: "FACADE-GLAZING-PJ089.pdf",
      status: "Action Required",
      signedHash: null,
      timestamp: null,
      email: "s.jenkins@edgearchitects.ae",
      phone: "+971 4 220 4492"
    },
    {
      id: "mem-3",
      name: "Tariq Al-Sayed",
      role: "Principal Structural Advisor",
      company: "Al-Futtaim Construction",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      complianceScore: 99,
      approvalItem: "Foundation Load Bearings Stress Attestation",
      documentRef: "FOUNDATION-STRESS-CERT.dwg",
      status: "Pending Review",
      signedHash: null,
      timestamp: null,
      email: "tariq.s@alfuttaim.co.ae",
      phone: "+971 4 998 1205"
    },
    {
      id: "mem-4",
      name: "Eng. Fatma Al-Mheiri",
      role: "Senior Municipal Inspector",
      company: "Dubai Municipality (TAMM Sync)",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      complianceScore: 100,
      approvalItem: "Z09 District Permitting & Air-Right Attestation",
      documentRef: "DM-Z09-PERMIT-STAMPED.pdf",
      status: "Pending Review",
      signedHash: null,
      timestamp: null,
      email: "fatma.mheiri@dm.gov.ae",
      phone: "+971 4 206 5555"
    },
    {
      id: "mem-5",
      name: "Marcus Vance",
      role: "Ecosystem Materials Expert",
      company: "Emirates Steel",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      complianceScore: 97,
      approvalItem: "Grade 500W High-Yield Rebar Verification",
      documentRef: "REBAR-GRAD500-CERT.pdf",
      status: "Approved",
      signedHash: "0xe298ccaa8f881229aefb",
      timestamp: "2026-05-27 16:40 GST",
      email: "m.vance@emiratessteel.com",
      phone: "+971 2 551 1111"
    }
  ]);

  // Handle active focused member selection
  const [selectedMemberId, setSelectedMemberId] = useState<string>("mem-2");
  
  // Interactive coordinate templates based on the current stakeholder selection
  const quickTemplates = [
    { label: "Request Structural Re-check", text: "Please initiate an immediate structural re-evaluation of current wind shear calculations for GCC compliance." },
    { label: "Urge TAMM Municipal Seal", text: "Eng. Fatma, we uploaded the biometric attestation hash. Please release the municipal zone permit." },
    { label: "Approve Design Framework", text: "Design looks pristine and is aligned with BuildFlow regulations. I am proceeding to sign." },
    { label: "Verify Steel Deliveries", text: "Marcus, please verify the dispatch timeline for the 12mm High-Yield Rebar batch so we can approve payment." }
  ];

  // Helper to append chat messages and trigger intelligent mock partner replies
  const handleSendMessage = (textToSend: string, type: "text" | "approval" = "text", customMemberId?: string) => {
    if (!textToSend.trim()) return;

    const userMsg = {
      sender: "Ahmed Al-Maktoum (Me)",
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type,
      memberId: customMemberId || "mem-1"
    };

    setMessages(prev => [...prev, userMsg]);

    // Simulate smart feedback matching the exact stakeholder context
    setTimeout(() => {
      const activeMember = teamMembers.find(m => m.id === (customMemberId || selectedMemberId));
      const replierName = activeMember ? activeMember.name : "Edge Architects";
      
      const resp = {
        sender: `${replierName} (${activeMember?.company || "System Partner"})`,
        text: `Acknowledged Ahmed. This instruction is cryptographically anchored. We are synchronizing our project records on BuildFlow GCC.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: "text" as const,
        memberId: activeMember?.id
      };
      setMessages(prev => [...prev, resp]);
    }, 1500);
  };

  const executeCustomFormSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleSendMessage(inputVal);
    setInputVal("");
  };

  // Professional Instant Approval trigger with biometric UAE PASS signature simulation
  const handleInstantApproval = (memberId: string) => {
    setAuthorizingMemberId(memberId);
    
    // Simulate high-end biometric authorization latency (1.1s)
    setTimeout(() => {
      const timestamp = new Date().toISOString().replace("T", " ").substring(0, 16) + " GST";
      const simulatedHash = "0x" + Math.random().toString(16).substring(2, 10) + "d89ae47e";
      
      setTeamMembers(prev => prev.map(member => {
        if (member.id === memberId) {
          return {
            ...member,
            status: "Approved",
            signedHash: simulatedHash,
            timestamp: timestamp
          };
        }
        return member;
      }));

      // Update progress with safe upper boundary of 100%
      setProjectProgress(prev => Math.min(prev + 10, 100));

      // Synchronize in the interactive chat messages so that matching approval cards are sealed!
      setMessages(prev => prev.map(msg => {
        if (msg.memberId === memberId && msg.type === "approval") {
          return {
            ...msg,
            isApproved: true,
            hash: simulatedHash
          };
        }
        return msg;
      }));

      const updatedMember = teamMembers.find(m => m.id === memberId);
      if (updatedMember) {
        // Log to the active federated chat ledgers
        const chatNotification = {
          sender: "SYSTEM LEDGER COMPLIANCE",
          text: `✔ OFFICIAL ATTESTATION IMMUTABLY SEALED: Ahmed Al-Maktoum has approved "${updatedMember.approvalItem}" assigned to ${updatedMember.name} (${updatedMember.company}) via UAE PASS. Ledger Hash: ${simulatedHash}.`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: "system" as const,
          memberId: memberId
        };
        setMessages(prev => [...prev, chatNotification]);
      }
      
      setAuthorizingMemberId(null);
    }, 1100);
  };

  // Re-evaluation enforcement protocol
  const handleRequestReevaluation = (memberId: string) => {
    setTeamMembers(prev => prev.map(member => {
      if (member.id === memberId) {
        return {
          ...member,
          status: "Action Required",
          signedHash: null,
          timestamp: null
        };
      }
      return member;
    }));

    // Reset approval state in chat messages
    setMessages(prev => prev.map(msg => {
      if (msg.memberId === memberId && msg.type === "approval") {
        return {
          ...msg,
          isApproved: false,
          hash: null
        };
      }
      return msg;
    }));

    const targetMember = teamMembers.find(m => m.id === memberId);
    if (targetMember) {
      const chatNotification = {
        sender: "SYSTEM AUDIT PROCESS",
        text: `⚠ ATTENTION REQUIRED: Request for revision on "${targetMember.approvalItem}" issued to ${targetMember.name} (${targetMember.company}). Status reset, files unlocked.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: "system" as const,
        memberId: memberId
      };
      setMessages(prev => [...prev, chatNotification]);
    }
  };

  // Generate a live sign-off request inside the active secure communication matrix
  const handleGenerateLiveRequest = (member: TeamMember) => {
    const freshRequest = {
      sender: member.name,
      text: `SYSTEM SIGN-OFF REQ: ${member.approvalItem}`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "approval" as const,
      memberId: member.id,
      isApproved: member.status === "Approved",
      hash: member.signedHash
    };
    setMessages(prev => [...prev, freshRequest]);
  };

  const documentVault = [
    { name: "DED_Dubai_Attestation_Ecosystem.pdf", size: "1.4 MB", type: "Verified PDF", attester: "DED Node", status: "Secure" },
    { name: "BOQ_LuxuryFamilyVilla_PJ-2024.xlsx", size: "4.8 MB", type: "Tamm BOQ Schema", attester: "Tamm Link", status: "Linked" },
    { name: "Interior_Glass_Facade_Specs_Stamped.dwg", size: "18.2 MB", type: "CAD Drawings", attester: "Sarah Jenkins", status: "Under Review" },
    { name: "Steel_Tension_Cert_Grade500W.pdf", size: "2.5 MB", type: "Material Cert", attester: "Marcus Vance", status: "Sealed" }
  ];

  const currentSelectedMemberObj = teamMembers.find(m => m.id === selectedMemberId) || teamMembers[1];

  return (
    <div id="project_detail_screen" className="text-zinc-100 p-4 md:p-8 max-w-7xl mx-auto space-y-6 relative font-sans">
      
      {/* Visual background gradient accents */}
      <div className="absolute top-10 right-4 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-4 w-80 h-80 bg-brand-navy/30 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Breadcrumb Navigation */}
      <button
        id="btn_back_client"
        onClick={() => onNavigate("client_dashboard")}
        className="text-xs font-mono text-brand-gold hover:text-[#E0BA67] flex items-center gap-1.5 cursor-pointer transition-all duration-200"
      >
        <ChevronLeft size={14} className="text-brand-gold" />
        <span className="uppercase tracking-wider">Return to GCC Portfolios Dashboard</span>
      </button>

      {/* BuildFlow GCC Project Summary Card */}
      <div className="bg-[#0b1f3a]/40 border border-[#C8973A]/25 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden shadow-2xl backdrop-blur-xl">
        <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-[#C8973A] to-[#0B1F3A]" />
        
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] bg-brand-gold/15 text-brand-gold font-mono font-bold px-2.5 py-0.5 rounded border border-[#C8973A]/30 uppercase tracking-widest">
              GCC CONTRACT REGISTER ID: {project.id}
            </span>
            <span className="text-[9px] bg-[#050E1B] border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded uppercase font-mono tracking-wider">
              Dubai Municipal NER Synced
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
            {project.name}
          </h1>
          <p className="text-zinc-400 text-xs flex items-center gap-1.5 mt-2">
            <MapPin size={13} className="text-brand-gold" />
            <span className="font-light">{project.location}</span>
          </p>
        </div>

        {/* Dynamic attestation metrics */}
        <div className="text-left md:text-right space-y-2 w-full md:w-auto self-stretch md:self-auto flex md:flex-col justify-between md:justify-center items-center md:items-end">
          <div>
            <span className="text-[9px] text-zinc-400 block font-mono uppercase tracking-widest">Joint Attestation State</span>
            <span className="text-xl font-bold font-mono text-brand-gold tracking-tight">{projectProgress}% Sign-off</span>
          </div>

          <div className="block w-44">
            <div className="w-full h-2 bg-[#050E1B] rounded-full overflow-hidden border border-zinc-800 relative">
              <div 
                className="h-full bg-gradient-to-r from-brand-gold to-[#E0BA67] rounded-full transition-all duration-1000" 
                style={{ width: `${projectProgress}%` }} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Left directory & Right secure chats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Columns - Project Team Directory with Portrait Photos */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="flex border-b border-zinc-900 gap-6">
            <button
              onClick={() => setActiveSubTab("members")}
              className={`pb-3 text-xs uppercase font-mono tracking-wider transition-all cursor-pointer relative flex items-center gap-2 ${
                activeSubTab === "members" ? "text-brand-gold font-bold" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <UserCheck size={13} className={activeSubTab === "members" ? "text-brand-gold" : "text-zinc-500"} />
              <span>GCC Sign-off Nodes ({teamMembers.length})</span>
              {activeSubTab === "members" && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold shadow-[0_0_8px_rgba(200,151,58,0.5)]" />
              )}
            </button>

            <button
              onClick={() => setActiveSubTab("documents")}
              className={`pb-3 text-xs uppercase font-mono tracking-wider transition-all cursor-pointer relative flex items-center gap-2 ${
                activeSubTab === "documents" ? "text-brand-gold font-bold" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <FileText size={13} className={activeSubTab === "documents" ? "text-brand-gold" : "text-zinc-500"} />
              <span>Attested Document Vault ({documentVault.length})</span>
              {activeSubTab === "documents" && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold shadow-[0_0_8px_rgba(200,151,58,0.5)]" />
              )}
            </button>
          </div>

          {activeSubTab === "members" ? (
            <div className="space-y-4">
              
              {/* Stakeholders grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teamMembers.map((member) => {
                  const isSelected = selectedMemberId === member.id;
                  
                  return (
                    <div
                      key={member.id}
                      onClick={() => setSelectedMemberId(member.id)}
                      className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer relative ${
                        isSelected 
                          ? "bg-[#0B1F3A]/30 border-brand-gold shadow-lg shadow-brand-gold/5" 
                          : "bg-[#050e1b] border-zinc-900 hover:border-brand-gold/30 hover:bg-[#0b1f3a]/10"
                      }`}
                    >
                      {/* Gold Indicator bar */}
                      {isSelected && (
                        <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-brand-gold to-brand-navy rounded-l-md" />
                      )}

                      <div className="flex gap-4">
                        {/* Member Portrait Photo */}
                        <div className="relative shrink-0">
                          <img
                            src={member.photo}
                            alt={member.name}
                            referrerPolicy="no-referrer"
                            className="h-14 w-14 rounded-xl object-cover border-2 border-[#C8973A]/20 shadow-md"
                          />
                          {/* Live Status indicator label */}
                          <div className={`absolute -bottom-1.5 -right-1.5 h-5 w-5 rounded-full flex items-center justify-center border-2 border-[#050e1b] text-[9px] font-bold text-white shadow-xl ${
                            member.status === "Approved"
                              ? "bg-emerald-500"
                              : member.status === "Action Required"
                              ? "bg-amber-500 animate-pulse"
                              : "bg-[#C8973A]"
                          }`}>
                            {member.status === "Approved" ? "✓" : "!"}
                          </div>
                        </div>

                        {/* Node metadata details */}
                        <div className="flex-grow space-y-1 overflow-hidden">
                          <div className="flex items-center justify-between gap-1">
                            <h4 className="font-semibold text-xs text-white truncate max-w-[130px]">{member.name}</h4>
                            <span className="text-[8px] font-mono font-bold text-brand-gold bg-brand-gold/10 px-1.5 py-0.5 rounded border border-brand-gold/25 uppercase shrink-0">
                              DED {member.complianceScore}%
                            </span>
                          </div>
                          
                          <p className="text-[10px] text-zinc-400 font-light truncate">{member.role}</p>
                          <p className="text-[9px] text-brand-gold/80 font-mono tracking-wider truncate uppercase">{member.company}</p>
                        </div>
                      </div>

                      {/* Required Sign-off Section */}
                      <div className="mt-4 pt-3.5 border-t border-zinc-900 space-y-2 text-[11px]">
                        <div className="flex justify-between items-start gap-2">
                          <span className="text-zinc-500 uppercase text-[8px] font-mono shrink-0">Required sign-off</span>
                          <span className="text-zinc-200 text-[10px] font-medium tracking-tight truncate text-right">{member.approvalItem}</span>
                        </div>

                        {/* Interactive triggers */}
                        <div className="flex gap-2 pt-1 justify-end">
                          {member.status === "Approved" ? (
                            <div className="w-full flex justify-between items-center bg-[#071324] px-2.5 py-1.5 rounded border border-emerald-950 text-emerald-400 font-mono text-[9px]">
                              <div className="flex items-center gap-1">
                                <ShieldCheck size={11} className="text-emerald-400" />
                                <span className="font-bold uppercase tracking-wider text-[8px]">UAE PASS SIGNED</span>
                              </div>
                              <span className="truncate max-w-[110px] text-zinc-500 text-[8px] select-all font-mono">{member.signedHash}</span>
                            </div>
                          ) : (
                            <div className="flex gap-1.5 w-full">
                              <button
                                type="button"
                                disabled={authorizingMemberId === member.id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleInstantApproval(member.id);
                                }}
                                className="flex-1 bg-gradient-to-r from-brand-gold to-brand-gold-dark hover:from-brand-gold-light hover:to-brand-gold text-zinc-950 font-mono text-[9px] py-1.5 rounded cursor-pointer transition-all uppercase font-bold text-center flex items-center justify-center gap-1 disabled:opacity-50"
                              >
                                {authorizingMemberId === member.id ? (
                                  <>
                                    <RefreshCw size={9} className="animate-spin" />
                                    <span>Sealing...</span>
                                  </>
                                ) : (
                                  <>
                                    <Fingerprint size={10} />
                                    <span>Sign & Approve</span>
                                  </>
                                )}
                              </button>
                              
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleRequestReevaluation(member.id);
                                }}
                                className="px-2.5 hover:bg-[#0B1F3A]/30 text-zinc-500 hover:text-amber-400 border border-zinc-800 rounded cursor-pointer transition-colors text-[9px] uppercase font-mono"
                                title="Decline and Request Modification"
                              >
                                Request Info
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Advanced Focused Member Workspace with Interactive Communications Activator */}
              <div className="bg-[#0b1f3a]/25 border border-[#C8973A]/20 rounded-xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                  <Fingerprint size={120} className="text-brand-gold" />
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                  <div className="flex gap-4 items-center">
                    <img 
                      src={currentSelectedMemberObj.photo} 
                      alt="" 
                      className="h-16 w-16 rounded-2xl object-cover border-2 border-brand-gold/30 shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-white leading-tight">{currentSelectedMemberObj.name}</h3>
                        <span className="text-[8px] font-mono bg-brand-gold/10 text-brand-gold border border-brand-gold/30 px-2 py-0.5 rounded leading-none uppercase font-bold tracking-widest">
                          Active Authority
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 font-light">{currentSelectedMemberObj.role} — {currentSelectedMemberObj.company}</p>
                      <p className="text-[10px] text-zinc-500 font-mono tracking-tight">{currentSelectedMemberObj.email} | {currentSelectedMemberObj.phone}</p>
                    </div>
                  </div>

                  {/* Core controls linking active member files & generating interactive chat templates */}
                  <div className="flex flex-wrap md:flex-col gap-2 items-start md:items-end w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-zinc-900 font-mono text-xs">
                    <div>
                      <span className="text-zinc-550 block text-[8px] uppercase font-bold tracking-widest mb-0.5">DED License Verification</span>
                      <span className="text-white font-semibold flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-brand-gold shrink-0" />
                        <span className="text-[10px] text-zinc-300">mTLS Verified Node Access</span>
                      </span>
                    </div>

                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => handleGenerateLiveRequest(currentSelectedMemberObj)}
                        className="px-3 py-1.5 bg-[#0B1F3A] hover:bg-brand-navy-light text-brand-gold hover:text-white border border-[#C8973A]/30 rounded text-[9px] uppercase font-mono transition-all cursor-pointer flex items-center gap-1 shadow-md font-bold"
                      >
                        <FileSignature size={11} />
                        <span>Deploy Interactive Sign-Off in Chat</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* Compliant Document Vault directory */
            <div className="bg-[#050e1b] border border-zinc-900 rounded-xl p-5 space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-zinc-900">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Federal Bid Lock Associated Files</span>
                <span className="text-[9px] text-[#C8973A] font-mono bg-[#C8973A]/10 px-2.5 py-0.5 rounded border border-[#C8973A]/25">TAMM Encrypted Directory</span>
              </div>

              <div className="divide-y divide-zinc-900/60">
                {documentVault.map((doc, idx) => (
                  <div key={idx} className="py-3.5 flex justify-between items-center text-xs first:pt-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#0b1f3a]/30 border border-brand-gold/25 rounded-lg">
                        <FileText size={18} className="text-brand-gold" />
                      </div>
                      <div>
                        <p className="font-semibold text-zinc-150">{doc.name}</p>
                        <p className="text-[9.5px] text-zinc-500 font-mono">Assigned Attester: {doc.attester}</p>
                      </div>
                    </div>

                    <div className="text-right flex flex-col items-end gap-1.5">
                      <span className="font-mono text-zinc-300 block text-[10.5px] font-bold">{doc.size}</span>
                      <span className="text-[8px] bg-brand-gold/10 text-brand-gold font-mono px-2 py-0.5 rounded font-bold uppercase border border-brand-gold/30">
                        {doc.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Columns: Secure Communication Matrix & Interactive Message thread (4 Columns) */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="space-y-1">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 flex justify-between">
              <span>Attestation Matrix</span>
              <span className="text-[#C8973A] font-bold shrink-0">• End-to-End Secure</span>
            </h2>
          </div>

          {/* Secure Chat Core viewport */}
          <div className="bg-[#050e1b] border border-[#C8973A]/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between h-[550px] relative">
            
            {/* Embedded Active Member status header */}
            <div className="bg-[#0B1F3A]/60 p-4 border-b border-zinc-900 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <img 
                    src={currentSelectedMemberObj.photo} 
                    alt="" 
                    className="h-9 w-9 rounded-lg object-cover border border-[#C8973A]/30"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-400 border border-[#050e1b]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-150 truncate max-w-[130px]">{currentSelectedMemberObj.name}</p>
                  <p className="text-[9px] text-[#C8973A] font-mono truncate max-w-[130px] tracking-tight uppercase">{currentSelectedMemberObj.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-brand-navy px-2 py-1 rounded border border-brand-gold/20 text-[8px] font-mono text-brand-gold uppercase tracking-wider">
                <Lock size={9} />
                <span>mTLS Sync</span>
              </div>
            </div>

            {/* Live Message & Card thread area */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 font-sans text-[11px] bg-gradient-to-b from-[#050e1b] via-[#050e1b] to-[#071324]/30">
              
              {messages.map((m, i) => {
                const isUser = m.sender.includes("Ahmed") || m.sender.includes("Me");
                const isSecurityAlert = m.sender.includes("SYSTEM") && m.type === "system";
                const isApprovalType = m.type === "approval";
                
                // 1. Render system attestation logs beautifully
                if (isSecurityAlert) {
                  return (
                    <div key={i} className="my-3 mx-auto w-full max-w-[95%] text-left">
                      <div className="bg-brand-gold/5 border border-brand-gold/20 p-3 rounded-lg text-[10px] font-mono text-brand-gold/90 leading-relaxed flex gap-2 shadow-sm">
                        <Fingerprint size={16} className="text-brand-gold shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <strong className="block text-[8px] uppercase text-[#E0BA67] font-bold tracking-widest leading-none">FEDERAL LEDGER NOTIFICATION</strong>
                          <span>{m.text}</span>
                        </div>
                      </div>
                      <span className="text-[8px] text-zinc-600 font-mono block text-right mt-1 pr-2">{m.time}</span>
                    </div>
                  );
                }

                // 2. Render direct Interactive Approval Messages in-stream! (The requested key feature)
                if (isApprovalType) {
                  const matchingMember = teamMembers.find(member => member.id === m.memberId) || currentSelectedMemberObj;
                  const confirmedApproved = matchingMember.status === "Approved" || m.isApproved;
                  
                  return (
                    <div key={i} className="my-2 p-3 bg-brand-navy/60 border border-brand-gold/35 rounded-xl space-y-3 shadow-md max-w-[95%] mx-auto relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-1 font-mono text-[7px] bg-brand-gold/15 text-brand-gold rounded-bl select-none uppercase tracking-widest font-bold">
                        Sign-off Request
                      </div>

                      {/* Header containing the member's photo and company info */}
                      <div className="flex items-center gap-2.5">
                        <img 
                          src={matchingMember.photo} 
                          alt="" 
                          className="h-8 w-8 rounded-lg object-cover border border-[#C8973A]/20"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="text-[10px] font-bold text-white">{matchingMember.name}</p>
                          <p className="text-[8px] text-zinc-400 font-mono text-left tracking-tight truncate max-w-[150px]">{matchingMember.company}</p>
                        </div>
                      </div>

                      <div className="space-y-1.5 pl-0.5">
                        <span className="text-[8px] font-mono text-[#C8973A] block uppercase font-bold tracking-widest">Awaiting Verification Target</span>
                        <p className="text-[11px] text-zinc-200 font-light leading-snug">{matchingMember.approvalItem}</p>
                        
                        <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-mono pt-1">
                          <FileText size={11} className="text-brand-gold" />
                          <span className="underline cursor-pointer hover:text-white transition-colors">{matchingMember.documentRef}</span>
                        </div>
                      </div>

                      {/* Actions aligned directly inside message bubble for ease of approval */}
                      <div className="pt-2 border-t border-[#C8973A]/10 flex gap-2 justify-end">
                        {confirmedApproved ? (
                          <div className="w-full flex items-center justify-between bg-[#071324] px-2.5 py-1 text-[9px] text-[#E0BA67] rounded border border-brand-gold/20 font-mono">
                            <span className="flex items-center gap-1 text-[8px] uppercase tracking-wider font-bold text-emerald-400">
                              <ShieldCheck size={11} />
                              <span>UAE PASS Sealed</span>
                            </span>
                            <span className="truncate max-w-[110px] text-[8px] text-zinc-500 font-mono">{matchingMember.signedHash || m.hash || "0x98f2aa...fc39"}</span>
                          </div>
                        ) : (
                          <div className="flex gap-2 w-full">
                            <button
                              type="button"
                              onClick={() => handleInstantApproval(matchingMember.id)}
                              className="flex-1 bg-gradient-to-r from-brand-gold to-[#E0BA67] hover:to-brand-gold text-[#0A1F3A] py-1.5 rounded text-[9px] font-mono uppercase font-bold text-center cursor-pointer transition-colors"
                            >
                              ✓ Seal Signature (UAE PASS)
                            </button>
                            <button
                              type="button"
                              onClick={() => handleRequestReevaluation(matchingMember.id)}
                              className="px-2.5 hover:bg-[#0A1F3A]/40 text-zinc-400 hover:text-amber-400 border border-zinc-805 border-zinc-800 rounded text-[9px] cursor-pointer transition-colors font-mono uppercase"
                            >
                              Reject
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }

                // 3. Regular chat bubbles styled professionally with corresponding photo reference
                const authorMember = teamMembers.find(member => member.id === m.memberId) || { photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" };

                return (
                  <div key={i} className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : ""}`}>
                    {/* Tiny Portrait beside relevant chat */}
                    <img 
                      src={isUser ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" : authorMember.photo} 
                      alt="" 
                      className="h-6 w-6 rounded-full object-cover border border-[#C8973A]/20 shrink-0 mt-1"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className={`flex flex-col ${isUser ? "items-end text-right" : "items-start text-left"} max-w-[80%]`}>
                      <span className="text-[8px] text-zinc-500 uppercase font-mono tracking-wider mb-1">
                        {m.sender}
                      </span>
                      <div className={`p-3 rounded-2xl leading-relaxed text-[11px] ${
                        isUser
                          ? "bg-[#0B1F3A] border border-[#C8973A]/25 text-zinc-100 rounded-tr-none font-light"
                          : "bg-[#162E4E]/45 border border-zinc-900 text-zinc-200 rounded-tl-none font-light"
                      }`}>
                        {m.text}
                      </div>
                      <span className="text-[7.5px] text-zinc-600 font-mono mt-1 pr-1">{m.time}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selection context templates bar */}
            <div className="p-3 bg-brand-navy-dark border-t border-zinc-900 shrink-0 space-y-1.5">
              <span className="text-[8px] font-mono text-[#C8973A] block uppercase tracking-widest font-bold">
                Deploy Instant Negotiation Protocols
              </span>
              
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none whitespace-nowrap">
                {quickTemplates.map((tpl, tIdx) => (
                  <button
                    key={tIdx}
                    type="button"
                    onClick={() => handleSendMessage(tpl.text)}
                    className="bg-brand-navy/60 border border-[#C8973A]/20 hover:border-[#C8973A] hover:text-[#C8973A] px-2.5 py-1.5 rounded-lg text-[9px] font-mono text-zinc-400 cursor-pointer transition-all uppercase whitespace-nowrap shrink-0 block"
                  >
                    {tpl.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message input submit field */}
            <form onSubmit={executeCustomFormSend} className="p-3 border-t border-zinc-900 bg-[#050e1b] flex gap-2 shrink-0">
              <input
                type="text"
                placeholder="Type instructions and sign off..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 bg-[#051427]/50 border border-zinc-850 rounded px-3 py-2 text-[11px] text-zinc-200 placeholder-zinc-700 font-sans focus:outline-none focus:border-brand-gold/50"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-brand-gold to-[#E0BA67] hover:opacity-90 text-[#0b1f3a] p-2 px-3 rounded cursor-pointer transition-colors shrink-0 flex items-center justify-center font-bold"
                title="Cryptographically sign and dispatch"
              >
                <Send size={11} />
              </button>
            </form>

          </div>

          {/* Privacy Wall badge info */}
          <div className="bg-[#0b1f3a]/25 border border-brand-gold/15 p-4 rounded-xl flex items-start gap-3 shadow-md">
            <ShieldAlert size={18} className="text-[#C8973A] shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-left">
              <span className="text-[9px] font-mono text-brand-gold uppercase tracking-widest block font-bold">Zero-Leak Bid Isolation Walls</span>
              <p className="text-[9.5px] text-zinc-400 font-light leading-relaxed">
                Communications on this channel are protected under sovereign UAE data residency regulations. Corporate IDs are validated using federated registries.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
