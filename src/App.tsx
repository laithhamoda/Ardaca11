import React, { useState } from "react";
import { Building, Users, Activity, PenTool, Layout, Layers, Terminal, Truck, Settings, Bell, ChevronDown, CheckCircle2, ShieldCheck, Sparkles, Languages, Globe } from "lucide-react";
import { Project, Quotation, SubInquiry, Bid, ProductCatalogItem, AuditLog, KYCDetails } from "./types";
import {
  initialProjects,
  initialQuotations,
  initialBids,
  initialSubInquiries,
  initialProducts,
  initialAuditLogs,
  mockChats
} from "./data";

// Sub-components
import LandingPage from "./components/LandingPage";
import KycRegister from "./components/KycRegister";
import ClientDashboard from "./components/ClientDashboard";
import ConsultantDashboard from "./components/ConsultantDashboard";
import ContractorDashboard from "./components/ContractorDashboard";
import SupplierDashboard from "./components/SupplierDashboard";
import ProjectDetail from "./components/ProjectDetail";
import CompareQuotations from "./components/CompareQuotations";
import QuotationBuilder from "./components/QuotationBuilder";
import CreateProject from "./components/CreateProject";
import ApiConsole from "./components/ApiConsole";
import SolutionsPage from "./components/SolutionsPage";
import ResourcesPage from "./components/ResourcesPage";
import { NavBar } from "./components/ui/NavBar";
import { Footer } from "./components/ui/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("landing");
  const [lang, setLang] = useState<'en' | 'ar'>("en");
  
  // Master Interactive State
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [quotations, setQuotations] = useState<Quotation[]>(initialQuotations);
  const [bids, setBids] = useState<Bid[]>(initialBids);
  const [subInquiries, setSubInquiries] = useState<SubInquiry[]>(initialSubInquiries);
  const [products, setProducts] = useState<ProductCatalogItem[]>(initialProducts);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(initialAuditLogs);
  
  // Onboarding Session
  const [kycDetails, setKycDetails] = useState<KYCDetails | null>(null);
  const [activeRole, setActiveRole] = useState<string>("Client");
  const [selectedProjectId, setSelectedProjectId] = useState<string>("PJ-2024-089");
  
  // Handlers for state updates
  const handleRegisterSuccess = (details: KYCDetails) => {
    setKycDetails(details);
    setActiveRole(details.role);
    
    // Add an audit log
    const newLog: AuditLog = {
      id: "LOG-" + Math.floor(1000 + Math.random() * 9000) + "S",
      timestamp: new Date().toISOString().replace("T", " ").substring(0, 19) + " GST",
      user: details.companyName,
      action: "KYC Approved",
      details: `Firm verified with trade registration ${details.tradeLicenseNumber} (${details.dedLicensingAuthority})`,
      hash: "0x" + Math.random().toString(16).substring(2, 8) + "... NER"
    };
    setAuditLogs([newLog, ...auditLogs]);
  };

  const handleAddProject = (newProj: Project) => {
    setProjects([newProj, ...projects]);
    
    const newLog: AuditLog = {
      id: "LOG-" + Math.floor(1000 + Math.random() * 9000) + "P",
      timestamp: new Date().toISOString().replace("T", " ").substring(0, 19) + " GST",
      user: "Portfolio Admin Node",
      action: "Project Declared",
      details: `Project registered in UAE ${newProj.location} valuing ${newProj.value}`,
      hash: "0x8fae32..." + Math.floor(100 + Math.random()*900)
    };
    setAuditLogs([newLog, ...auditLogs]);
  };

  const handleAddSubInquiry = (newInq: SubInquiry) => {
    setSubInquiries([newInq, ...subInquiries]);
    
    const newLog: AuditLog = {
      id: "LOG-" + Math.floor(1000 + Math.random() * 9000) + "I",
      timestamp: new Date().toISOString().replace("T", " ").substring(0, 19) + " GST",
      user: "Al-Futtaim Lead",
      action: "Sub-Inquiry Published",
      details: `Issued query ${newInq.id} for specialization ${newInq.specialization}`,
      hash: "0x09da1b..." + Math.floor(100 + Math.random()*900)
    };
    setAuditLogs([newLog, ...auditLogs]);
  };

  const handleAddCatalogItem = (newItem: ProductCatalogItem) => {
    setProducts([newItem, ...products]);
    
    const newLog: AuditLog = {
      id: "LOG-" + Math.floor(1000 + Math.random() * 9000) + "S",
      timestamp: new Date().toISOString().replace("T", " ").substring(0, 19) + " GST",
      user: "Emirates Steel Node",
      action: "Product SKU Added",
      details: `Registered product ${newItem.name} (SKU: ${newItem.sku}) to global cataloque matrix`,
      hash: "0x112ebc..." + Math.floor(100 + Math.random()*900)
    };
    setAuditLogs([newLog, ...auditLogs]);
  };

  const handleSaveQuotationFinished = (quote: { base: number; supervision: number; total: number }) => {
    // Dynamically insert simulated quote inside initialQuotations
    const newQuo: Quotation = {
      id: "QUO-00" + (quotations.length + 1),
      consultant: "Edge Architects (Revised)",
      baseQuote: quote.base,
      supervisionQuote: quote.supervision,
      total: quote.total,
      durationMonths: 6,
      complianceScore: 99,
      recommended: true,
      tamId: "TAMM-DXB-99881",
      milestones: [
        { name: "Revised Design Proposal", cost: quote.base * 0.4, days: 30 },
        { name: "Supervision Schedule Delivery", cost: quote.supervision * 0.6, days: 90 }
      ]
    };
    setQuotations([newQuo, ...quotations]);
  };

  // Nav Links matrix for unified header
  const navLinks = [
    { id: "landing", label: "Ecosystem Portal", icon: Layout },
    { id: "client_dashboard", label: "Client Hub", icon: Users },
    { id: "consultant_dashboard", label: "Consultant Hub", icon: PenTool },
    { id: "contractor_dashboard", label: "Contractor Hub", icon: Building },
    { id: "supplier_dashboard", label: "Supplier Hub", icon: Truck },
    { id: "api_console", label: "API Docs Console", icon: Terminal }
  ];

  const selectedProjObject = projects.find(p => p.id === selectedProjectId) || projects[0];

  return (
    <div className={`min-h-screen bg-[#050D1A] text-zinc-100 flex flex-col justify-between selection:bg-[#C8973A]/25 selection:text-[#C8973A] font-sans antialiased overflow-x-hidden ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      
      {activeTab === "landing" || activeTab === "solutions" || activeTab === "resources" ? (
        <NavBar 
          lang={lang} 
          onToggleLang={(newLang) => setLang(newLang)} 
          activeTab={activeTab === "solutions" ? "Solutions" : activeTab === "resources" ? "Resources" : "Product"}
          onNavigate={(tab) => {
            if (tab === "register_kyc") {
              setActiveTab("register_kyc");
            } else if (tab === "client_dashboard") {
              setActiveTab("client_dashboard");
            } else if (tab === "solutions") {
              setActiveTab("solutions");
            } else if (tab === "pricing") {
              setActiveTab("landing");
              setTimeout(() => {
                const sec = document.getElementById("pricing_section");
                if (sec) sec.scrollIntoView({ behavior: "smooth" });
              }, 100);
            } else if (tab === "resources") {
              setActiveTab("resources");
            } else if (tab === "about") {
              setActiveTab("api_console");
            } else if (tab === "product") {
              setActiveTab("landing");
            } else {
              setActiveTab("landing");
            }
          }}
          onSignInClick={() => setActiveTab("client_dashboard")}
          onDemoClick={() => setActiveTab("register_kyc")}
        />
      ) : (
        /* Dynamic Simulation Role Selector Header bar */
        <div className="bg-[#050E1B] border-b border-zinc-900 sticky top-0 z-40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex flex-wrap items-center justify-between gap-4 justify-items-center">
            
            {/* Logo Brand */}
            <div
              onClick={() => setActiveTab("landing")}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="h-6 w-6 bg-gradient-to-r from-[#C8973A] to-[#E0BA67] rounded-md flex items-center justify-center text-zinc-950 font-bold text-xs shadow-md shadow-brand-gold/15">
                {lang === 'ar' ? 'ب' : 'B'}
              </div>
              <div>
                <span className="font-bold tracking-tight text-zinc-100 text-sm group-hover:text-brand-gold transition-colors">
                  {lang === 'ar' ? 'بيلد فلو الخليج' : 'BuildFlow GCC'}
                </span>
                <span className="text-zinc-500 text-[10px] font-mono block -mt-1 uppercase tracking-widest">
                  {lang === 'ar' ? 'بواسطة أردكا' : 'by Ardaca'}
                </span>
              </div>
            </div>

            {/* Secure validation state */}
            <div className="hidden sm:flex items-center gap-2 bg-[#0B1F3A] border border-[#C8973A]/20 px-2.5 py-1 rounded-full text-[9px] font-mono text-gold font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span>NER IDENTITY VALIDATOR ACTIVE</span>
            </div>

            {/* Interactive Navigation Link matrix */}
            <nav className="flex items-center gap-1.5 md:gap-3 overflow-x-auto">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id || 
                  (link.id === "client_dashboard" && (activeTab === "compare_quotations" || activeTab === "project_detail" || activeTab === "create_project")) ||
                  (link.id === "consultant_dashboard" && activeTab === "quotation_builder");
                return (
                  <button
                    key={link.id}
                    onClick={() => setActiveTab(link.id)}
                    className={`px-2.5 py-1.5 rounded text-[11px] font-mono uppercase tracking-wide transition-all cursor-pointer flex items-center gap-1 shrink-0 ${
                      isActive
                        ? "bg-[#0b1f3a]/50 text-gold font-bold border-b-2 border-gold"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <link.icon size={11} />
                    <span className="hidden lg:inline">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Active Profile Selection & Simulation Dropdown */}
            <div className="flex items-center gap-3 shrink-0">
              
              {/* Quick Register / KYC badge info */}
              {kycDetails ? (
                <div className="hidden md:flex flex-col text-right">
                  <span className="text-[10px] font-bold text-gold flex items-center gap-1 justify-end">
                    <ShieldCheck size={11} />
                    <span>KYC Verified</span>
                  </span>
                  <span className="text-[9px] text-zinc-500 font-mono leading-none truncate max-w-[120px]">
                    {kycDetails.companyName}
                  </span>
                </div>
              ) : (
                <button
                  onClick={() => setActiveTab("register_kyc")}
                  className="bg-gold/10 border border-gold/30 text-gold hover:bg-gold/20 px-3 py-1.5 rounded text-[10px] uppercase font-mono font-bold tracking-wide cursor-pointer transition-colors"
                >
                  Start KYC
                </button>
              )}

              <div className="h-6 w-px bg-zinc-900" />

              {/* Professional Simulator Language Switcher */}
              <button
                id="dashboard_lang_switcher"
                onClick={() => {
                  const nextLang = lang === 'en' ? 'ar' : 'en';
                  setLang(nextLang);
                  document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
                  document.documentElement.lang = nextLang;
                  if (nextLang === 'ar') {
                    document.body.classList.add('rtl');
                  } else {
                    document.body.classList.remove('rtl');
                  }
                }}
                className="text-[10px] font-mono font-bold text-gold hover:text-white uppercase px-2 py-1.5 rounded-lg border border-[#C8973A]/20 hover:border-gold flex items-center gap-1.5 bg-[#0b1f3a]/60 select-none cursor-pointer transition-all"
                title={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
              >
                <Languages size={12} className="text-gold" />
                <span>{lang === 'en' ? 'عربي' : 'EN'}</span>
              </button>

              <div className="h-6 w-px bg-zinc-900" />

              {/* Profile Dropdown Simulation */}
              <div className="flex items-center gap-2">
                <div className="text-right hidden xl:block">
                  <p className="text-xs font-semibold text-zinc-200">
                    {lang === 'ar' ? 'أحمد آل مكتوم' : 'Ahmed Al-Maktoum'}
                  </p>
                  <p className="text-[9px] text-zinc-500 font-mono uppercase">
                    {lang === 'ar' ? 'مسؤول المحفظة' : 'Portfolio Lead'}
                  </p>
                </div>

                <div className="h-8 w-8 bg-[#0b1f3a] border border-[#C8973A]/30 rounded-full flex items-center justify-center text-xs text-gold font-mono font-bold relative shadow-inner select-none">
                  {lang === 'ar' ? 'أ م' : 'AM'}
                  <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-gold border border-[#050D1A]" />
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Sub-header Warning Info detailing Sandbox environment state */}
      <div className="bg-[#0B1F3A]/30 border-b border-gold/15 px-4 py-2 text-center text-[10px] font-mono text-gold/90 flex items-center justify-center gap-1.5 select-none z-30 relative justify-items-center">
        <Sparkles size={11} className="animate-pulse shrink-0 text-gold" />
        <span>SANDBOX INTERACTION PORTAL: Switch between stakeholders above to visualize end-to-end interactive GCC sign-offs.</span>
      </div>

      {/* Primary Dynamic Main Content Render Frame */}
      <main className="flex-grow py-6 relative">
        <div className="transition-opacity duration-300">
          
          {activeTab === "landing" && (
            <LandingPage
              lang={lang}
              onNavigate={setActiveTab}
              onSelectRole={(role) => {
                setActiveRole(role);
                // Trigger auto kyc pre-fill to verify capabilities easily
                if (!kycDetails) {
                  setKycDetails({
                    companyName: `${role === "Client" ? "Al-Maktoum Asset Holdings L.L.C" : role === "Consultant" ? "Edge Architects" : "Gulf Builders Syndicate LLC"}`,
                    tradeLicenseNumber: "CN-984422-R",
                    dedLicensingAuthority: "DED Dubai",
                    registrationStep: 4,
                    role: role as any,
                    licenseFile: "attested_trade_registry.pdf",
                    status: "Approved"
                  });
                }
              }}
            />
          )}

          {activeTab === "solutions" && (
            <SolutionsPage 
              lang={lang}
              onNavigate={setActiveTab}
              onSelectRole={(role) => {
                setActiveRole(role);
                if (!kycDetails) {
                  setKycDetails({
                    companyName: `${role === "Client" ? "Al-Maktoum Asset Holdings L.L.C" : role === "Consultant" ? "Edge Architects" : "Gulf Builders Syndicate LLC"}`,
                    tradeLicenseNumber: "CN-984422-R",
                    dedLicensingAuthority: "DED Dubai",
                    registrationStep: 4,
                    role: role as any,
                    licenseFile: "attested_trade_registry.pdf",
                    status: "Approved"
                  });
                }
              }}
            />
          )}

          {activeTab === "resources" && (
            <ResourcesPage 
              lang={lang}
              onNavigate={setActiveTab}
            />
          )}

          {activeTab === "register_kyc" && (
            <KycRegister
              onRegisterSuccess={handleRegisterSuccess}
              onNavigate={setActiveTab}
            />
          )}

          {activeTab === "client_dashboard" && (
            <ClientDashboard
              projects={projects}
              auditLogs={auditLogs}
              onNavigate={setActiveTab}
              onSelectProject={setSelectedProjectId}
            />
          )}

          {activeTab === "consultant_dashboard" && (
            <ConsultantDashboard
              projects={projects}
              quotations={quotations}
              onNavigate={setActiveTab}
              onOpenQuotationBuilder={() => setActiveTab("quotation_builder")}
            />
          )}

          {activeTab === "contractor_dashboard" && (
            <ContractorDashboard
              bids={bids}
              subInquiries={subInquiries}
              onAddSubInquiry={handleAddSubInquiry}
              onNavigate={setActiveTab}
            />
          )}

          {activeTab === "supplier_dashboard" && (
            <SupplierDashboard
              products={products}
              subInquiries={subInquiries}
              onAddCatalogItem={handleAddCatalogItem}
              onNavigate={setActiveTab}
            />
          )}

          {activeTab === "project_detail" && (
            <ProjectDetail
              project={selectedProjObject}
              initialChat={mockChats[selectedProjObject.id as keyof typeof mockChats] || mockChats["PJ-2024-089"]}
              onNavigate={setActiveTab}
            />
          )}

          {activeTab === "compare_quotations" && (
            <CompareQuotations
              quotations={quotations}
              onNavigate={setActiveTab}
            />
          )}

          {activeTab === "quotation_builder" && (
            <QuotationBuilder
              onNavigate={setActiveTab}
              onSaveQuotationFinished={handleSaveQuotationFinished}
            />
          )}

          {activeTab === "create_project" && (
            <CreateProject
              onNavigate={setActiveTab}
              onAddProjectFinished={handleAddProject}
            />
          )}

          {activeTab === "api_console" && (
            <ApiConsole />
          )}

        </div>
      </main>

      {/* Premium Footer */}
      {activeTab === "landing" || activeTab === "solutions" || activeTab === "resources" ? (
        <Footer lang={lang} />
      ) : (
        <footer className="bg-[#050506] border-t border-zinc-900 py-6 px-4 md:px-8 text-center text-[10px] font-mono text-zinc-600">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 ARDACA BUILDFLOW ECOSYSTEM (ARDACA.COM). ALL RIGHTS RESERVED.</p>
            <div className="flex gap-4">
              <span className="hover:text-zinc-400 cursor-pointer">NER COMPLIANCE STATE</span>
              <span>•</span>
              <span className="hover:text-zinc-400 cursor-pointer">DED DUBAI AUTHORITY PORTAL #9810</span>
            </div>
          </div>
        </footer>
      )}

    </div>
  );
}
