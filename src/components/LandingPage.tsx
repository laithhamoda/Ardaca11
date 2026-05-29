import React from "react";
import { ShieldCheck, ArrowRight, Building, PenTool, LayoutDashboard, Truck, Users, Activity, EyeOff, Scale, HelpCircle } from "lucide-react";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { PricingSection } from "./PricingSection";
import { SocialProofSection } from "./SocialProofSection";
import { FaqSection } from "./FaqSection";
import { FinalCTASection } from "./FinalCTASection";

interface LandingPageProps {
  onNavigate: (tab: string) => void;
  onSelectRole: (role: "Client" | "Consultant" | "Contractor" | "Subcontractor" | "Supplier") => void;
  lang?: 'en' | 'ar';
}

export default function LandingPage({ onNavigate, onSelectRole, lang = 'en' }: LandingPageProps) {
  const portalRoles = [
    {
      id: "Client" as const,
      name: "Client Dashboard",
      desc: "For Giga Developers and Sovereign Asset Owners. Track corporate portfolios, committed values, and authorize certified signature releases.",
      icon: Users,
      badge: "Sovereign/Client"
    },
    {
      id: "Consultant" as const,
      name: "Consultant Portal",
      desc: "For authorized GCC Architecture & Engineering practices. Build comprehensive BOQs, evaluate parallel bids, and attest technical design criteria.",
      icon: PenTool,
      badge: "Authorized Practice"
    },
    {
      id: "Contractor" as const,
      name: "Main Contractor Hub",
      desc: "For Grade-1 Construction Syndicates. Distribute inquiries behind client data privacy walls, submit milestone audits, and sync supply chains.",
      icon: Building,
      badge: "Grade A Elite"
    },
    {
      id: "Supplier" as const,
      name: "Supplier & Catalog Matrix",
      desc: "For verified regional manufacturers. Update inventory metrics, publish dynamic material specifications, and fulfill digital purchase receipts.",
      icon: Truck,
      badge: "Primary Plant Match"
    }
  ];

  return (
    <div id="landing_screen" className="w-full bg-[#050D1A] text-zinc-100 min-h-screen">
      
      {/* Immersive Full-Viewport Hero Section */}
      <HeroSection 
        onDemoClick={() => onNavigate("register_kyc")}
        onExploreClick={() => onNavigate("client_dashboard")}
        lang={lang}
      />

      {/* Built for Every Role Features Grid */}
      <FeaturesSection 
        lang={lang}
        onLearnMore={(roleId) => {
          if (roleId === 'clients') {
            onSelectRole('Client');
            onNavigate('client_dashboard');
          } else if (roleId === 'consultants') {
            onSelectRole('Consultant');
            onNavigate('consultant_dashboard');
          } else if (roleId === 'contractors') {
            onSelectRole('Contractor');
            onNavigate('contractor_dashboard');
          } else if (roleId === 'subcontractors') {
            onSelectRole('Subcontractor');
            onNavigate('subcontractor_dashboard');
          } else if (roleId === 'suppliers') {
            onSelectRole('Supplier');
            onNavigate('supplier_dashboard');
          } else {
            onNavigate('register_kyc');
          }
        }}
      />

      {/* Social Proof metrics and testimonials */}
      <SocialProofSection lang={lang} />

      {/* Pricing and Tier packages block */}
      <PricingSection 
        lang={lang}
        onSelectPlan={(planId, billingCycle) => {
          if (planId === 'enterprise') {
            onNavigate('register_kyc');
          } else {
            onNavigate('register_kyc');
          }
        }}
      />

      {/* Main Body Grid Constraints */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* Corporate pillars info blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 py-8 border-y border-brand-gold/15 bg-[#0b1f3a]/25 rounded-xl p-4">
          <div className="flex gap-4 items-start p-4">
            <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-lg shrink-0 border border-brand-gold/20">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-sans font-semibold text-zinc-100 mb-1">Corporate TAMM & NER Pipeline</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Dynamically verify trade licenses and director credentials against local ministries in real-time, preventing transaction delays.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-4">
            <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-lg shrink-0 border border-brand-gold/20">
              <EyeOff size={24} />
            </div>
            <div>
              <h3 className="font-sans font-semibold text-zinc-100 mb-1">Decoupled Privacy Walls</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Alternate bidding lines never share technical data or historical metadata, protecting builder margins and fair play rules.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-4">
            <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-lg shrink-0 border border-brand-gold/20">
              <Scale size={24} />
            </div>
            <div>
              <h3 className="font-sans font-semibold text-zinc-100 mb-1">Sealed Messaging Log</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Dispatched instructions, design proposals, and specifications are immutably signed using digital credentials, backed by federated consensus.
              </p>
            </div>
          </div>
        </div>

        {/* Stakeholder Portals Showcase */}
        <div className="my-12">
          <h2 className="text-xs font-mono tracking-widest text-[#C8973A] uppercase text-center mb-8 font-bold">
            SECURE WORKSPACE CHANNELS • AUTHORIZE CONCURRENT SESSION
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portalRoles.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.id}
                  id={`portal_card_${role.id}`}
                  className="group relative bg-[#0b1f3a]/15 border border-zinc-900 rounded-xl p-6 hover:border-brand-gold/40 hover:bg-[#0b1f3a]/30 transition-all duration-300 flex flex-col justify-between shadow-md"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 bg-[#0B1F3A] text-brand-gold border border-brand-gold/10 rounded-xl group-hover:text-[#E0BA67] group-hover:bg-[#0B1F3A] transition-colors shadow-inner">
                        <Icon size={20} />
                      </div>
                      <span className="text-[9px] font-mono uppercase bg-brand-gold/10 text-brand-gold px-2.5 py-0.5 rounded font-bold border border-brand-gold/15">
                        {role.badge}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-zinc-250 text-base mb-2 group-hover:text-white transition-colors">
                      {role.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      {role.desc}
                    </p>
                  </div>

                  <button
                    id={`portal_btn_${role.id}`}
                    onClick={() => {
                      onSelectRole(role.id);
                      onNavigate(`${role.id.toLowerCase()}_dashboard`);
                    }}
                    className="mt-6 flex items-center gap-1.5 text-xs text-brand-gold font-mono hover:text-[#E0BA67] transition-all cursor-pointer uppercase font-bold tracking-widest"
                  >
                    <span>Authorize Node</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dubai & Riyadh Skyline Vector */}
        <div className="relative h-48 rounded-2xl bg-gradient-to-b from-[#0B1F3A]/30 to-[#050E1B] border border-brand-gold/15 overflow-hidden flex flex-col justify-end p-6 text-center my-10 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,151,58,0.06),transparent_70%)] pointer-events-none" />
          
          {/* Abstract Skyline Silhouette */}
          <div className="absolute inset-x-0 bottom-0 h-24 flex items-end justify-center gap-1.5 opacity-10">
            <div className="w-4 bg-[#C8973A] h-16 rounded-t" />
            <div className="w-8 bg-[#C8973A] h-24 rounded-t" />
            <div className="w-3 bg-[#C8973A] h-10 rounded-t" />
            <div className="w-6 bg-[#C8973A] h-32 rounded-t" />
            <div className="w-12 bg-[#C8973A] h-40 rounded-t-lg relative">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-[#C8973A]" />
            </div>
            <div className="w-5 bg-[#C8973A] h-28 rounded-t" />
            <div className="w-7 bg-[#C8973A] h-18 rounded-t" />
            <div className="w-9 bg-[#C8973A] h-36 rounded-t" />
            <div className="w-4 bg-[#C8973A] h-12 rounded-t" />
          </div>

          <div className="relative z-10 space-y-1">
            <p className="text-[9px] font-mono text-brand-gold uppercase tracking-widest font-bold">
              DUBAI SHAKHOUT GIGA-VILLA DISTRICT & RIYADH NORTH GATE EXPANSIONS
            </p>
            <p className="text-xs text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
              Overseeing AED 64.8B in pipeline tenders across emirate & ministerial sectors with synchronized identity validation.
            </p>
          </div>
        </div>

      </div>

      {/* Frequently Asked Questions */}
      <FaqSection lang={lang} />

      {/* final action banner */}
      <FinalCTASection 
        lang={lang} 
        onRequestDemo={() => onNavigate("register_kyc")}
        onExplorePricing={() => {
          const sec = document.getElementById("pricing_section");
          if (sec) {
            sec.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

    </div>
  );
}
