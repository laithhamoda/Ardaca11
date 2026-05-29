import React, { useState } from 'react';
import { 
  Users, 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  Layers, 
  BookOpen, 
  Video, 
  ArrowRight,
  Sliders,
  CheckCircle,
  FileText,
  AlertCircle
} from 'lucide-react';
import { partnershipEmails, PartnershipEmail } from '../data/partnershipOutreach';

interface PartnershipOutreachProps {
  isRtl: boolean;
}

export default function PartnershipOutreachView({ isRtl }: PartnershipOutreachProps) {
  const [selectedEmailId, setSelectedEmailId] = useState<string>("giga-contractor");
  const [copiedSubject, setCopiedSubject] = useState<boolean>(false);
  const [copiedBody, setCopiedBody] = useState<boolean>(false);
  const [customizerOpen, setCustomizerOpen] = useState<boolean>(true);

  // Customization Form Variables
  const [recipientName, setRecipientName] = useState<string>("Eng. Raed Lai");
  const [firmName, setFirmName] = useState<string>("Saudi Binladin Group");
  const [projectName, setProjectName] = useState<string>("Mina Valley Infrastructure Expansion");
  const [meetingDay, setMeetingDay] = useState<string>("next Tuesday morning");
  const [senderName, setSenderName] = useState<string>("Tariq Al-Mansoor");
  const [senderTitle, setSenderTitle] = useState<string>("Founder & Managing Director");

  const activeEmail = partnershipEmails.find(e => e.id === selectedEmailId) || partnershipEmails[0];

  // Helper to dynamically inject form variables into the body text
  const getRenderedBody = (email: PartnershipEmail): string => {
    let text = email.bodyTemplate;
    
    // Replace names according to keys
    text = text.replace(/\[Name\]/g, recipientName || "[Recipient Name]");
    
    // Replace firm names
    if (email.id === "giga-contractor") {
      text = text.replace(/\[Contractor Name\]/g, firmName || "[Contractor Name]");
    } else if (email.id === "engineering-consultancy") {
      text = text.replace(/\[Consultancy Name\]/g, firmName || "[Consultancy Name]");
    } else if (email.id === "real-estate-developer") {
      text = text.replace(/\[Developer Name\]/g, firmName || "[Developer Name]");
    } else if (email.id === "professional-association") {
      text = text.replace(/\[Association Name\]/g, firmName || "[Association Name]");
    } else if (email.id === "technology-partner") {
      text = text.replace(/\[Technology Partner Name\]/g, firmName || "[Technology Partner Name]");
    }

    // Replace project names & specific products
    if (email.id === "giga-contractor") {
      text = text.replace(/\[Specific Giga Project, e.g., Diriyah Gate Infrastructure Package \/ NEOM Spine joint venture\]/g, projectName || "[Project Name]");
    } else if (email.id === "engineering-consultancy") {
      text = text.replace(/\[Project Name, e.g., King Salman Park \/ Red Sea Global Phase 2\]/g, projectName || "[Project Name]");
    } else if (email.id === "real-estate-developer") {
      text = text.replace(/\[Specific Master Plan, e.g., Jeddah Central \/ Yas Island Expansion\]/g, projectName || "[Project Name]");
    } else if (email.id === "professional-association") {
      text = text.replace(/\[Specific Core Product, e.g., Autodesk Construction Cloud \/ Oracle Primavera Prime\]/g, projectName || "[Association Area]");
    } else if (email.id === "technology-partner") {
      text = text.replace(/\[Specific Core Product, e.g., Autodesk Construction Cloud \/ Oracle Primavera Prime\]/g, projectName || "[Core Product Name]");
      text = text.replace(/\[Specific Core Product\]/g, projectName || "[Core Product Name]");
    }

    // Replace meeting times
    text = text.replace(/\[Day of Week, e.g., next Tuesday morning\]/g, meetingDay || "[Meeting Day]");
    text = text.replace(/\[Day of Week, e.g., next Wednesday afternoon\]/g, meetingDay || "[Meeting Day]");

    // Replace sender details
    text = text.replace(/Tariq Al-Mansoor/g, senderName);
    text = text.replace(/Founder & Managing Director/g, senderTitle);

    return text;
  };

  const handleCopySubject = () => {
    navigator.clipboard.writeText(activeEmail.subject);
    setCopiedSubject(true);
    setTimeout(() => setCopiedSubject(false), 2000);
  };

  const handleCopyBody = () => {
    navigator.clipboard.writeText(getRenderedBody(activeEmail));
    setCopiedBody(true);
    setTimeout(() => setCopiedBody(false), 2000);
  };

  // Set default values based on selected card to guide the user
  const handleTemplateSelection = (id: string) => {
    setSelectedEmailId(id);
    if (id === "giga-contractor") {
      setRecipientName("Eng. Fahad Al-Otaibi");
      setFirmName("Nesma & Partners");
      setProjectName("Diriyah Gate Infrastructure Development");
      setMeetingDay("next Tuesday morning");
    } else if (id === "engineering-consultancy") {
      setRecipientName("Dr. Sarah Campbell");
      setFirmName("AtkinsRéalis GCC");
      setProjectName("King Salman Park Urban Landscaping");
      setMeetingDay("next Wednesday morning");
    } else if (id === "real-estate-developer") {
      setRecipientName("HE Eng. Sultan Al-Mansoori");
      setFirmName("Aldar Properties");
      setProjectName("Yas Island Sustainable Townhouse Phase 3");
      setMeetingDay("next Thursday afternoon");
    } else if (id === "professional-association") {
      setRecipientName("Dr. Ibrahim Al-Naimi");
      setFirmName("PMI Arabian Gulf Chapter");
      setProjectName("Chartered Cost Control Standards Roundtable");
      setMeetingDay("next Monday evening");
    } else if (id === "technology-partner") {
      setRecipientName("Marcus Vance");
      setFirmName("Autodesk Middle East");
      setProjectName("Autodesk Construction Cloud (ACC)");
      setMeetingDay("next Wednesday noon");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fade-in text-zinc-100">
      
      {/* Overview Headway banner */}
      <div className="bg-[#091424] border border-zinc-800 rounded-2xl p-6 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#C8973A]/5 blur-3xl rounded-full" />
        <div className="space-y-2 max-w-3xl">
          <span className="text-[10px] uppercase font-mono tracking-widest text-gold font-bold bg-gold/10 px-2.5 py-1 rounded-full border border-gold/20">
            Regional BD & Enterprise Workstation
          </span>
          <h3 className="text-xl font-sans font-normal tracking-tight text-white">
            GCC Institutional Partnership Outreach Suite
          </h3>
          <p className="text-xs text-zinc-400 font-light leading-relaxed">
            These templates are crafted as <strong>high-level business development introductions</strong>, rather than commercial sales emails. 
            They initiate peer-to-peer dialogues with key regional decision makers by referencing their projects, operational guidelines, and specific data sovereignty needs. 
            Adjust the dynamic variables on the left to customize the email copy in real-time.
          </p>
        </div>

        <div className="shrink-0 flex items-center bg-[#050D1A] rounded-xl border border-zinc-850 p-3 self-stretch md:self-auto justify-center">
          <div className="text-center space-y-1">
            <div className="text-2xl font-mono text-gold font-extrabold flex items-center justify-center gap-1">
              <span>5</span>
              <span className="text-xs font-normal text-zinc-500">/ 5</span>
            </div>
            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-bold">Cohorts Tracked</div>
          </div>
        </div>
      </div>

      {/* Main Interaction Split Partition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Hand: Category List & Real-time Customizer */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Target partner selectors */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-mono text-zinc-450 uppercase tracking-widest font-extrabold">
              Select GCC Partner Cohort
            </h4>
            
            <div className="space-y-2">
              {partnershipEmails.map((email) => {
                const isSelected = selectedEmailId === email.id;
                return (
                  <button
                    key={email.id}
                    onClick={() => handleTemplateSelection(email.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 block cursor-pointer ${
                      isSelected 
                        ? 'border-gold bg-[#0E1A2D] shadow-lg ring-1 ring-gold/15' 
                        : 'border-zinc-800 bg-[#091424] hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono font-bold tracking-wide text-gold uppercase">
                          Cohort {partnershipEmails.indexOf(email) + 1}
                        </span>
                        <span className="text-[8px] font-mono bg-zinc-950 px-2 py-0.5 rounded text-zinc-400 uppercase font-bold border border-zinc-900">
                          30-Min intro focus
                        </span>
                      </div>
                      <h5 className={`font-sans font-bold text-xs tracking-tight ${isSelected ? 'text-zinc-100' : 'text-zinc-350'}`}>
                        {email.partnerType}
                      </h5>
                      <p className="text-[10px] text-zinc-500 font-light truncate">
                        {email.targetFocus}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive customizer console */}
          <div className="bg-[#091424] border border-zinc-850 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-850 pb-2">
              <div className="flex items-[#C8973A] items-center gap-1.5">
                <Sliders size={13} className="text-gold" />
                <span className="text-[10px] font-mono text-gold uppercase tracking-widest font-extrabold">
                  Real-time Email customizer
                </span>
              </div>
              <button 
                onClick={() => setCustomizerOpen(!customizerOpen)}
                className="text-[10px] font-mono text-zinc-500 hover:text-zinc-300 font-bold"
              >
                {customizerOpen ? "HIDE PANEL" : "SHOW PANEL"}
              </button>
            </div>

            {customizerOpen && (
              <div className="space-y-3.5 text-xs animate-fade-in">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-405 uppercase font-bold block">Recipient Name</label>
                    <input
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      className="w-full px-3 py-2 bg-[#050D1A] border border-zinc-800 rounded-lg text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-gold/30"
                      placeholder="Eng. Fareed Al-Asiri"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-405 uppercase font-bold block">Partner Firm / Committee</label>
                    <input
                      type="text"
                      value={firmName}
                      onChange={(e) => setFirmName(e.target.value)}
                      className="w-full px-3 py-2 bg-[#050D1A] border border-zinc-800 rounded-lg text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-gold/30"
                      placeholder="Red Sea Global"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-zinc-405 uppercase font-bold block">
                    Target Development / Focus Scope
                  </label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full px-3 py-2 bg-[#050D1A] border border-zinc-800 rounded-lg text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-gold/30"
                    placeholder="Red Sea Global Phase 1 Infrastructure"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-405 uppercase font-bold block">Meeting Request Target</label>
                    <input
                      type="text"
                      value={meetingDay}
                      onChange={(e) => setMeetingDay(e.target.value)}
                      className="w-full px-3 py-2 bg-[#050D1A] border border-zinc-800 rounded-lg text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-gold/30"
                      placeholder="next Tuesday afternoon"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-405 uppercase font-bold block">Sender Principal Name</label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3 py-2 bg-[#050D1A] border border-zinc-800 rounded-lg text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-gold/30"
                      placeholder="Tariq Al-Mansoor"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-zinc-405 uppercase font-bold block">Sender Title & Focus</label>
                  <input
                    type="text"
                    value={senderTitle}
                    onChange={(e) => setSenderTitle(e.target.value)}
                    className="w-full px-3 py-2 bg-[#050D1A] border border-zinc-800 rounded-lg text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-gold/30"
                    placeholder="Founder & Managing Director"
                  />
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Right Hand: Executive Email Reader & Strategy Brief */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Strategy Insight Card (Value Proposition & Personalization guide) */}
          <div className="bg-[#091424] border border-zinc-850 rounded-2xl p-5 space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-850 pb-2">
              <BookOpen size={13} className="text-gold" />
              <span className="text-[10px] font-mono text-gold uppercase tracking-widest font-extrabold pb-0.5">
                Strategic Cohort Playbook & Guidelines
              </span>
            </div>

            <div className="space-y-3 font-sans">
              <div className="space-y-1">
                <strong className="text-[10.5px] font-mono uppercase text-zinc-350 tracking-wider font-extrabold block">Opening Personalization Approach:</strong>
                <p className="text-xs text-zinc-400 font-light leading-relaxed select-text">
                  {activeEmail.personalizationGuide}
                </p>
              </div>

              <div className="space-y-1 border-t border-zinc-850/60 pt-3">
                <strong className="text-[10.5px] font-mono uppercase text-zinc-350 tracking-wider font-extrabold block">Cohort-Specific Value Proposition:</strong>
                <p className="text-xs text-zinc-400 font-light leading-relaxed select-text">
                  {activeEmail.valueProposition}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Simulated Webmail Interface */}
          <div className="bg-[#050D1A] border border-zinc-800 rounded-2xl shadow-xl overflow-hidden">
            
            {/* Subject Line Field */}
            <div className="p-4 border-b border-zinc-800 bg-[#091424]/90 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs leading-none">
              <div className="space-y-1 px-1">
                <span className="text-[9px] font-mono uppercase text-zinc-500 block font-bold">Subject Line</span>
                <p className="font-sans font-bold text-zinc-150 leading-relaxed max-w-full select-all">
                  {activeEmail.subject}
                </p>
              </div>
              
              <button
                onClick={handleCopySubject}
                className={`text-[9px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-lg border transition-all shrink-0 flex items-center justify-center gap-1.5 cursor-pointer ${
                  copiedSubject
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-zinc-950 hover:bg-zinc-850 border-zinc-800 text-zinc-350'
                }`}
              >
                {copiedSubject ? (
                  <>
                    <Check size={10} />
                    <span>COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy size={10} />
                    <span>COPY SUBJECT</span>
                  </>
                )}
              </button>
            </div>

            {/* Email Header Info */}
            <div className="p-4 border-b border-zinc-850/80 bg-[#050D1A] text-[11px] font-mono text-zinc-400 space-y-1 leading-none">
              <div className="flex justify-between flex-wrap gap-1">
                <span><strong>From:</strong> {senderName} &lt;{senderName.toLowerCase().replace(/\s/g, "")}@ardaca.com&gt;</span>
                <span className="text-zinc-550">Draft saved: 2026-05-29</span>
              </div>
              <div>
                <span><strong>To:</strong> {recipientName || "[Recipient Name]"} &lt;{recipientName ? recipientName.toLowerCase().replace(/\s/g, "") : "partner" }@{firmName ? firmName.toLowerCase().replace(/\s/g, "").replace(/[^a-z]/g, "") : "industry"}.com&gt;</span>
              </div>
            </div>

            {/* Simulated Email Body Textarea Panel */}
            <div className="p-6 md:p-8 bg-[#091424]/20 min-h-[350px]">
              <pre className="whitespace-pre-wrap font-sans text-xs md:text-sm text-zinc-200 leading-relaxed select-text font-light" style={{ fontFeatureSettings: '"tnum" on, "lnum" on' }}>
                {getRenderedBody(activeEmail)}
              </pre>
            </div>

            {/* Bottom Email Action Toolbar */}
            <div className="p-4 bg-[#091424] border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-[10px] font-mono text-zinc-405 font-bold uppercase tracking-wider">
                  Configured GCC Corporate Signature Attached
                </span>
              </div>

              <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
                <button
                  onClick={handleCopyBody}
                  className={`flex-1 sm:flex-none justify-center px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                    copiedBody 
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' 
                      : 'bg-[#C8973A] hover:bg-[#E0BA67] border-gold text-[#050D1A] shadow-lg shadow-gold/5'
                  }`}
                >
                  {copiedBody ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedBody ? "COPIED BODY" : "COPY EMAIL BODY"}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Pro tips for BD */}
          <div className="p-4.5 bg-zinc-950/40 border border-zinc-850 rounded-xl space-y-2 text-[11px] text-zinc-405 relative overflow-hidden font-sans">
            <div className="absolute top-0 right-0 w-32 h-full bg-[#128C7E]/2 opacity-5 pointer-events-none" />
            
            <div className="flex items-center gap-1.5 text-zinc-150 font-bold">
              <AlertCircle size={12} className="text-gold" />
              <span>GCC Outreach Protocols</span>
            </div>
            
            <ul className="list-disc pl-4 space-y-1.5 leading-relaxed text-zinc-400 font-light">
              <li><strong>Bilateral over Commercial:</strong> Middle Eastern stakeholders respond heavily to peer level partnerships, JV initiatives, or regional capability-building proposals.</li>
              <li><strong>Local Nuances:</strong> Always reference their active major developments (e.g., PIF megaprojects, urban transformations, local municipal packages) right in the opening paragraph.</li>
              <li><strong>Credentials Trust:</strong> Mentioning RICS, CIOB, or former roles in major state-owned enterprises (such as Saudi Aramco PMC) significantly streamlines trust verification with local board managers.</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}
