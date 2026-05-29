import React, { useState } from "react";
import { PlusCircle, Search, Trash, Filter, Grid, Table, ArrowUpRight, ShieldCheck, Mail, ClipboardCheck, Sparkles } from "lucide-react";
import { ProductCatalogItem, SubInquiry } from "../types";

interface SupplierDashboardProps {
  products: ProductCatalogItem[];
  subInquiries: SubInquiry[];
  onAddCatalogItem: (item: ProductCatalogItem) => void;
  onNavigate: (tab: string) => void;
}

export default function SupplierDashboard({ products, subInquiries, onAddCatalogItem, onNavigate }: SupplierDashboardProps) {
  const [showCatalogManager, setShowCatalogManager] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // New catalog item fields
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [category, setCategory] = useState("Reinforcement Steel");
  const [basePrice, setBasePrice] = useState("");
  const [unit, setUnit] = useState("Metric Ton");
  const [leadTime, setLeadTime] = useState("3 to 5 Days");
  
  // Bulk pricing states
  const [bulkMin, setBulkMin] = useState<number>(50);
  const [bulkRate, setBulkRate] = useState<number>(3000);

  const handleAddProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: ProductCatalogItem = {
      id: "PROD-DXB-" + Math.floor(100 + Math.random() * 900),
      name: name || "Emirates Steel Structural Mesh",
      sku: sku || "ES-MSH-0912",
      category,
      basePrice: basePrice || "AED 2,800",
      unit,
      stockStatus: "In Stock",
      leadTime,
      specSheet: "specs_manual_attested.pdf",
      bulkPricing: [
        { minQty: bulkMin, rate: bulkRate }
      ]
    };

    onAddCatalogItem(newItem);
    setName("");
    setSku("");
    setBasePrice("");
    setLeadTime("");
    setShowCatalogManager(false);
  };

  const categories = ["All", "Reinforcement Steel", "Masonry & Blocks", "Facade & Glazing"];

  const filteredProducts = products.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="supplier_dashboard_screen" className="text-zinc-100 p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-900 pb-6">
        <div>
          <div className="text-[10px] font-mono text-emerald-400 mb-1 tracking-widest uppercase">
            REGIONAL LOGISTICS & FACTORY HUB
          </div>
          <h1 className="text-xl md:text-2xl font-light tracking-tight">
            Supplier Portal | <span className="font-extrabold text-zinc-100">Emirates Steel Direct</span>
          </h1>
          <p className="text-[11px] text-zinc-500 font-mono">
            Verified Premium Member | Regulatory Attestation Node #EMSTEEL-9842
          </p>
        </div>

        <button
          id="btn_toggle_catalog"
          onClick={() => setShowCatalogManager(!showCatalogManager)}
          className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 px-4 py-2.5 rounded font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer font-sans transition-colors"
        >
          {showCatalogManager ? (
            <span>Inspect Inbound Inquiries</span>
          ) : (
            <>
              <PlusCircle size={14} />
              <span>Catalog Management Hub</span>
            </>
          )}
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Active Listed SKUs", value: products.length.toString() },
          { label: "Ecosystem Authenticated", value: "Verified Active" },
          { label: "Average Dispatch Lead Time", value: "3.2 Days" },
          { label: "Tamm Attested Invoices", value: "100%" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-[#121214] border border-zinc-900 p-4 rounded-lg">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">{stat.label}</span>
            <span className="text-sm font-bold tracking-tight text-zinc-100">{stat.value}</span>
          </div>
        ))}
      </div>

      {!showCatalogManager ? (
        /* INBOUND OPERATIONS VIEW */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* List of Client Inquiries */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center text-xs">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Inbound Inquiries Stream
              </h2>
              <span className="text-[10px] text-zinc-500 uppercase font-mono">
                Matching Steel, Block or Façade Specs
              </span>
            </div>

            <div className="bg-[#121214] border border-zinc-900 rounded-xl divide-y divide-zinc-900 overflow-hidden">
              {subInquiries.map((inq) => (
                <div key={inq.id} className="p-5 hover:bg-zinc-900/10 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">
                        {inq.id}
                      </span>
                      <h3 className="font-semibold text-zinc-200">{inq.title}</h3>
                    </div>
                    <p className="text-zinc-400 font-light text-[11px] leading-relaxed max-w-xl">
                      {inq.scope}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-[9px] font-mono text-zinc-500 uppercase">
                      <span>Location: <strong className="text-zinc-400">{inq.location}</strong></span>
                      <span>Specialization: <strong className="text-zinc-400">{inq.specialization}</strong></span>
                      <span>Required Quality: <strong className="text-zinc-400">{inq.requiredGrade}</strong></span>
                    </div>
                  </div>

                  <div className="text-right shrink-0 w-full md:w-auto border-t md:border-0 pt-2 md:pt-0 border-zinc-900 flex md:flex-col justify-between items-center md:items-end">
                    <div>
                      <span className="text-[8px] text-zinc-500 uppercase block">Inbound Deadline</span>
                      <span className="font-mono text-zinc-300">{inq.deadline}</span>
                    </div>

                    <button
                      onClick={() => onNavigate("quotation_builder")}
                      className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/25 px-3 py-1.5 rounded text-[10px] font-mono uppercase mt-2 cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Draft Bid Quote</span>
                      <ArrowUpRight size={10} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Messages & Actions context (Screen 7 sidebar) */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Supplier Hub Notifications
            </h2>

            <div className="bg-[#121214] border border-zinc-900 rounded-xl p-5 space-y-4">
              <h3 className="text-xs font-semibold flex items-center gap-1.5 text-zinc-200">
                <Mail size={14} className="text-emerald-400" />
                <span>Ecosystem Inbox</span>
              </h3>

              <div className="space-y-3 font-mono text-[10px]">
                {[
                  { from: "Edge Architects", text: "Please send certified mechanical testing charts for 12mm rebar.", date: "2 Hours ago" },
                  { from: "Al-Futtaim Lead Builder", text: "Subcontractor bids dispatched for Palm Jumeirah project.", date: "1 Day ago" }
                ].map((msg, i) => (
                  <div key={i} className="bg-zinc-950 p-3 rounded border border-zinc-900 space-y-1">
                    <div className="flex justify-between items-center text-[9px] text-zinc-500 uppercase">
                      <span className="font-bold text-zinc-300">{msg.from}</span>
                      <span>{msg.date}</span>
                    </div>
                    <p className="text-zinc-400 leading-normal font-sans text-xs">{msg.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification verification box (Screen 7 Component 5) */}
            <div className="bg-[#121214] border border-zinc-900 rounded-xl p-5 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
              <ShieldCheck size={28} className="mx-auto text-emerald-400 mb-2" />
              <h4 className="text-xs font-semibold mb-1">DED Registered Attestation</h4>
              <p className="text-[10px] text-zinc-400 leading-relaxed max-w-xs mx-auto">
                Emirates Steel Direct is marked as an Attested National Manufacturer. Invoices generated through the matrix clear automatically via Ner and local customs databases.
              </p>
            </div>
          </div>

        </div>
      ) : (
        /* PRODUCT CATALOGUE MANAGEMENT (Screen 13) */
        <div className="space-y-6">
          
          {/* Custom Search Filters Bar (Screen 13 Component 2) */}
          <div className="flex flex-col md:flex-row gap-4 justify-between bg-zinc-900/30 border border-zinc-900 p-4 rounded-xl">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={14} />
              <input
                type="text"
                placeholder="Query catalog items via SKU or item tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded pl-9 pr-3 py-2 text-xs text-zinc-100 placeholder-zinc-700 focus:outline-none"
              />
            </div>

            <div className="flex gap-2 shrink-0 overflow-x-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded text-[10px] font-mono tracking-wide uppercase transition-all ${
                    selectedCategory === cat
                      ? "bg-emerald-500 text-zinc-950 font-bold"
                      : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {cat === "All" ? "Global Filter" : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Catalog Matrix Table (Screen 13 Component 3) */}
            <div className="lg:col-span-2 bg-[#121214] border border-zinc-900 rounded-xl overflow-hidden divide-y divide-zinc-950">
              {filteredProducts.map((item) => (
                <div key={item.id} className="p-5 hover:bg-zinc-900/10 transition-colors space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[8px] font-mono uppercase bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded font-bold">
                          {item.id}
                        </span>
                        <h4 className="font-semibold text-zinc-100 text-xs">{item.name}</h4>
                      </div>
                      <p className="text-[10px] font-mono text-zinc-500">SKU: {item.sku} | CATEGORY: {item.category}</p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold text-emerald-400 block font-mono">{item.basePrice} / {item.unit}</span>
                      <span className="text-[9px] text-zinc-400 font-mono">Lead Time: {item.leadTime}</span>
                    </div>
                  </div>

                  {/* Expandable pricing list block */}
                  <div className="bg-zinc-950 p-3 rounded border border-zinc-900/60 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center text-[10px]">
                    <div className="flex gap-4">
                      <div>
                        <span className="text-zinc-500 uppercase block text-[8px] font-mono">STOCK STATE</span>
                        <span className="text-emerald-400 font-bold">{item.stockStatus}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 uppercase block text-[8px] font-mono">SPEC FILE</span>
                        <span className="text-zinc-300 font-mono underline select-all">{item.specSheet}</span>
                      </div>
                    </div>

                    <div className="font-mono text-right flex gap-3">
                      <div>
                        <span className="text-zinc-500 uppercase block text-[8px] font-mono">BULK STEP-UP RATE</span>
                        {item.bulkPricing.map((bp, i) => (
                          <span key={i} className="text-zinc-200 block">
                            ≥ {bp.minQty} units @ AED {bp.rate} / {item.unit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {filteredProducts.length === 0 && (
                <p className="text-center py-12 text-zinc-500 text-xs font-mono">No matching products found matching filters.</p>
              )}
            </div>

            {/* Add New Product Form (Screen 13 Sidebar Component) */}
            <form onSubmit={handleAddProductSubmit} className="bg-[#121214] border border-zinc-900 rounded-xl p-5 space-y-4">
              <div className="border-b border-zinc-900 pb-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-emerald-400" />
                  <span>List New Product</span>
                </h3>
                <p className="text-[10px] text-zinc-500 mt-1">Populate details to dispatch live updates to Contractor dashboards.</p>
              </div>

              <div>
                <label className="block text-[9px] font-mono text-zinc-400 uppercase mb-1">Product Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Autoclaved Ducting Blocks"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[9px] font-mono text-zinc-400 uppercase mb-1">Manufacturer SKU</label>
                  <input
                    type="text"
                    required
                    placeholder="ES-MSH-091"
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-mono text-zinc-400 uppercase mb-1">Stock Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-2 text-xs text-zinc-300"
                  >
                    <option value="Reinforcement Steel">Steel</option>
                    <option value="Masonry & Blocks">Blocks</option>
                    <option value="Facade & Glazing">Glazing</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[9px] font-mono text-zinc-400 uppercase mb-1">Base Price Label</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AED 3,150"
                    value={basePrice}
                    onChange={(e) => setBasePrice(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-mono text-zinc-400 uppercase mb-1">Billing Unit</label>
                  <input
                    type="text"
                    required
                    placeholder="Metric Ton, Sqm"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs focus:outline-none"
                  />
                </div>
              </div>

              <div className="bg-zinc-950 p-3 rounded border border-zinc-900 space-y-2">
                <span className="text-[8px] font-mono text-zinc-500 block uppercase">Bulk Discount Threshold</span>
                
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[8px] font-mono text-zinc-400 uppercase mb-0.5">Min Qty</label>
                    <input
                      type="number"
                      value={bulkMin}
                      onChange={(e) => setBulkMin(Number(e.target.value))}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-[11px] text-zinc-100"
                    />
                  </div>
                  <div>
                    <label className="block text-[8px] font-mono text-zinc-400 uppercase mb-0.5">Rate AED</label>
                    <input
                      type="number"
                      value={bulkRate}
                      onChange={(e) => setBulkRate(Number(e.target.value))}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-[11px] text-zinc-100"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-zinc-950 text-xs font-mono uppercase tracking-wider py-2.5 rounded font-bold cursor-pointer transition-colors"
              >
                Dispatch Catalog Upload
              </button>
            </form>

          </div>

        </div>
      )}

    </div>
  );
}
