  "use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  Sparkles,
  CreditCard,
  HeartPulse,
  ShoppingBag,
  Truck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Activity,
  Package,
  Wallet
} from "lucide-react";

type Industry = "fintech" | "healthcare" | "retail" | "logistics";

export default function WhyCamlenio() {
  const [activeIndustry, setActiveIndustry] = useState<Industry>("fintech");

  const industries = [
    {
      id: "fintech" as Industry,
      label: "Fintech",
      icon: CreditCard,
      title: "Fintech Software Solutions",
      sub: "Secure payment platforms & digital wallets",
      desc: "Camlenio provides Fintech Software solutions with secure payment platforms, digital wallets, and advanced financial features in mobile applications, making them reliable, compliant, and future-ready.",
      features: ["PCI-DSS Compliant", "Instant Transactions", "Multi-Currency Wallet", "Advanced Cryptography"],
      stats: { primary: "99.99%", label: "Uptime SLA", color: "text-emerald-600 bg-emerald-50" },
      accentColor: "from-emerald-500/10 to-teal-500/5",
      badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
      buttonText: "Explore Fintech"
    },
    {
      id: "healthcare" as Industry,
      label: "Healthcare",
      icon: HeartPulse,
      title: "Compliant Medical & Care Apps",
      sub: "Telehealth portals & real-time monitoring",
      desc: "Design patient-centric mobile apps with absolute compliance (HIPAA/GDPR), secure medical history dashboards, and fast video consultancy interfaces, ensuring a seamless healthcare experience.",
      features: ["HIPAA/GDPR Ready", "Video Teleconsultancy", "Prescription Portals", "IoT Device Integration"],
      stats: { primary: "0.2s", label: "Query Latency", color: "text-sky-600 bg-sky-50" },
      accentColor: "from-sky-500/10 to-blue-500/5",
      badgeColor: "bg-sky-50 text-sky-600 border-sky-100",
      buttonText: "Explore Healthcare"
    },
    {
      id: "retail" as Industry,
      label: "Retail & E-comm",
      icon: ShoppingBag,
      title: "Next-Gen Mobile Commerce",
      sub: "Fluid checkout flows & personalized shopping",
      desc: "Empower your business with high-conversion e-commerce apps. With integrated payment systems, intelligent recommendation engines, and dynamic animations that engage modern shoppers.",
      features: ["1-Tap Checkout", "AI Product Matches", "Real-Time Stock Sync", "In-App Push Alerts"],
      stats: { primary: "+45%", label: "User Retention", color: "text-purple-600 bg-purple-50" },
      accentColor: "from-purple-500/10 to-indigo-500/5",
      badgeColor: "bg-purple-50 text-purple-600 border-purple-100",
      buttonText: "Explore E-commerce"
    },
    {
      id: "logistics" as Industry,
      label: "Logistics",
      icon: Truck,
      title: "Real-Time Tracking & Dispatch",
      sub: "GPS routing engines & delivery management",
      desc: "Maximize operational planning and dispatch with dedicated logistics platforms. Optimize routes, manage status transitions, and offer customers instant delivery predictions on map displays.",
      features: ["GPS Map Trackers", "Route Optimization", "Instant Status Sync", "Offline-First Syncing"],
      stats: { primary: "94.2%", label: "Route Efficiency", color: "text-amber-600 bg-amber-50" },
      accentColor: "from-amber-500/10 to-orange-500/5",
      badgeColor: "bg-amber-50 text-amber-600 border-amber-100",
      buttonText: "Explore Logistics"
    }
  ];

  const currentInd = industries.find((i) => i.id === activeIndustry)!;

  const strengths = [
    {
      icon: ShieldCheck,
      title: "Ongoing Help & Maintenance",
      desc: "Proactive app maintenance, timely API engine upgrades, multi-platform version parity audits, and dedicated support to keep your app running flawlessly on iOS and Android.",
      badge: "24/7 Priority Support",
      badgeClass: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      icon: Zap,
      title: "Agile Development Process",
      desc: "Iterative sprints tailored for swift deployment and continuous feature releases, ensuring complete visibility and fast market turnaround without compromising stability.",
      badge: "2x Faster Launch",
      badgeClass: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
      icon: Cpu,
      title: "Experienced Developers",
      desc: "Deep tech domain experts with extensive knowledge of Skia engine performance, React Native hooks, native compilation bridges, and secure API integrations.",
      badge: "Top 3% Talent Only",
      badgeClass: "bg-sky-50 text-sky-600 border-sky-100"
    },
    {
      icon: Layers,
      title: "Customized Solutions Design",
      desc: "Tailored component structure, unique user experiences, and customized code frameworks aligned closely with your high-level business goals and long-term scaling strategy.",
      badge: "100% Bespoke Code",
      badgeClass: "bg-purple-50 text-purple-600 border-purple-100"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-transparent overflow-hidden" style={{ transform: "translateZ(0)" }}>
      
      {/* Tech Geometric Dot Grid Background Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(#f97316 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Background Blurs for Visual Splendor */}
      <div className="absolute top-[10%] left-[-15%] w-[450px] h-[450px] bg-gradient-to-tr from-orange-500/10 to-amber-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-gradient-to-br from-orange-400/5 to-orange-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24">
        
        {/* ========================================================================= */}
        {/* --- PART 1: MULTI-PLATFORM MOBILE APP FOR EACH INDUSTRY --- */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-12">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-10">
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-[10px] font-black text-orange-600 uppercase tracking-widest shadow-sm">
                <Sparkles className="w-3 h-3 animate-pulse" />
                Industry Specific Solutions
              </div>
              <h2
                className="text-3xl sm:text-4xl font-black text-[#0f172a] leading-[1.15] tracking-tight"
                style={{ transform: "translateZ(0)" }}
              >
                Multi-Platform Mobile App <br />
                <span
                  className="text-orange-500 inline-block"
                  style={{
                    textShadow:
                      "2px 2px 0px #fff, 3px 3px 0px #da5f00, 5px 5px 12px rgba(249, 115, 22, 0.15)",
                  }}
                >
                  For Each Industry
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                We design multi-platform mobile apps for several sectors such as fintech, healthcare, and many more. 
                Our aim is to improve operational planning, increase user engagement, and develop business.
              </p>
            </div>
          </div>

          {/* Interactive Core: Tabs Left, Visual Display Phone Dashboard Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Tabs List Column (Left) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {industries.map((ind) => {
                const IconComp = ind.icon;
                const isSelected = activeIndustry === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveIndustry(ind.id)}
                    className={`relative w-full p-5 text-left rounded-2xl border transition-all duration-300 flex items-start gap-4 group cursor-pointer ${
                      isSelected
                        ? "bg-white border-orange-200 shadow-md shadow-orange-500/5"
                        : "bg-white/40 border-slate-100 hover:border-slate-200 hover:bg-white/70"
                    }`}
                  >
                    {/* Glowing highlight indicator */}
                    {isSelected && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-orange-400 to-orange-500 rounded-l-2xl"
                      />
                    )}
                    
                    <div
                      className={`p-2.5 rounded-xl border flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-orange-50 text-orange-500 border-orange-100"
                          : "bg-slate-50 text-slate-400 border-slate-100 group-hover:text-slate-600"
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-0.5">
                        Sector
                      </span>
                      <span
                        className={`text-base font-extrabold transition-colors ${
                          isSelected ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
                        }`}
                      >
                        {ind.label}
                      </span>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center self-center transition-all ${
                        isSelected ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-400 opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Visual Display: Glassmorphic Phone simulator & Content Card Column (Right) */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 bg-white/70 backdrop-blur-md rounded-[32px] border border-slate-100 p-8 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
              
              {/* Dynamic decorative blur */}
              <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${currentInd.accentColor} blur-2xl pointer-events-none`} />

              {/* Phone Mockup Simulator Inside Card (md:col-span-5) */}
              <div className="md:col-span-5 flex justify-center items-center">
                <div className="relative w-[180px] aspect-[9/18.5] bg-slate-950 rounded-[28px] p-1.5 shadow-lg border-[3px] border-slate-800 overflow-hidden">
                  
                  {/* Phone Screen Container */}
                  <div className="w-full h-full bg-[#fafbfe] rounded-[22px] overflow-hidden p-2.5 pt-5 flex flex-col justify-between relative select-none text-[8px]">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-black text-slate-800">Camlenio Client</span>
                      <span className={`px-1.5 py-0.5 rounded-full text-[6px] font-black border uppercase tracking-wider ${currentInd.badgeColor}`}>
                        {currentInd.label}
                      </span>
                    </div>

                    {/* Dynamic Graphic Content depending on Active Industry */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndustry}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 flex flex-col gap-2"
                      >
                        {activeIndustry === "fintech" && (
                          <div className="flex-1 flex flex-col justify-between">
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-2 shadow-sm relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-8 h-8 bg-white/5 rounded-full blur-sm" />
                              <Wallet className="w-3.5 h-3.5 text-emerald-400 mb-2" />
                              <span className="text-[6px] text-slate-400 block tracking-wider uppercase font-black">Digital Wallet Balance</span>
                              <span className="text-xs font-black">$45,820.00</span>
                            </div>
                            <div className="bg-white border border-slate-100 rounded-lg p-2 shadow-2xs flex flex-col gap-1">
                              <span className="font-extrabold text-slate-800 text-[6px]">Secure Payment</span>
                              <div className="w-full bg-emerald-50 text-emerald-600 p-1 rounded font-bold flex justify-between items-center text-[5px]">
                                <span>256-bit Encrypted</span>
                                <span>Active</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeIndustry === "healthcare" && (
                          <div className="flex-1 flex flex-col justify-between">
                            <div className="bg-sky-500 text-white rounded-lg p-2 shadow-sm flex flex-col gap-1">
                              <Activity className="w-3.5 h-3.5 text-white" />
                              <span className="text-[6px] text-sky-100 block font-black">Pulse Monitor</span>
                              <span className="text-xs font-black">72 BPM</span>
                              <span className="text-[5px] text-sky-100 font-bold bg-white/20 rounded px-1 self-start">Optimal Range</span>
                            </div>
                            <div className="bg-white border border-slate-100 rounded-lg p-2 shadow-2xs flex items-center justify-between gap-1">
                              <div>
                                <span className="font-extrabold text-slate-800 block text-[6px]">Dr. Harrison</span>
                                <span className="text-slate-400 block text-[5px]">Video Consultation</span>
                              </div>
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            </div>
                          </div>
                        )}

                        {activeIndustry === "retail" && (
                          <div className="flex-1 flex flex-col justify-between">
                            <div className="bg-purple-600 text-white rounded-lg p-2 shadow-sm flex flex-col gap-1">
                              <TrendingUp className="w-3.5 h-3.5 text-white" />
                              <span className="text-[6px] text-purple-100 block font-black">Daily Conversions</span>
                              <span className="text-xs font-black">+42.8%</span>
                            </div>
                            <div className="bg-white border border-slate-100 rounded-lg p-2 shadow-2xs flex flex-col gap-1">
                              <span className="font-extrabold text-slate-800 block text-[6px]">Cart Checkout</span>
                              <div className="flex justify-between items-center">
                                <span className="text-[6px] text-slate-400 font-bold">1 Item Saved</span>
                                <span className="text-[6px] font-black text-purple-600 bg-purple-50 px-1 rounded">1-Tap Ready</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeIndustry === "logistics" && (
                          <div className="flex-1 flex flex-col justify-between">
                            <div className="bg-amber-500 text-white rounded-lg p-2 shadow-sm flex flex-col gap-1">
                              <Package className="w-3.5 h-3.5 text-white" />
                              <span className="text-[6px] text-amber-100 block font-black">Status Update</span>
                              <span className="text-xs font-black">Dispatched</span>
                            </div>
                            <div className="bg-white border border-slate-100 rounded-lg p-2 shadow-2xs flex flex-col gap-1">
                              <span className="font-extrabold text-slate-800 block text-[6px]">Tracking Route</span>
                              <div className="h-1 bg-amber-100 rounded-full overflow-hidden">
                                <div className="h-full bg-amber-500 rounded-full w-2/3" />
                              </div>
                              <span className="text-[5px] text-slate-400 block font-semibold text-right">ETA 12 mins</span>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {/* Bottom Action inside Screen */}
                    <div className="mt-3">
                      <div className="w-full bg-slate-900 text-white py-1 rounded text-center font-black text-[6px] cursor-pointer">
                        Launch Demo
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Dynamic Content details (md:col-span-7) */}
              <div className="md:col-span-7 flex flex-col justify-between gap-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndustry}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-3"
                  >
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 border rounded-full text-[9px] font-black uppercase tracking-wider self-start ${currentInd.badgeColor}`}>
                      {currentInd.sub}
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight mt-1">
                      {currentInd.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                      {currentInd.desc}
                    </p>

                    {/* Dynamic Bullet points */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100">
                      {currentInd.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Core action button aligned right/bottom */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <div className={`px-2.5 py-1 rounded-xl flex flex-col items-center justify-center font-black text-xs border ${currentInd.stats.color}`}>
                      <span>{currentInd.stats.primary}</span>
                      <span className="text-[7px] text-slate-400 uppercase tracking-widest font-extrabold mt-0.5">{currentInd.stats.label}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const contactSection = document.getElementById("cta-section");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      } else {
                        window.location.href = "/contact";
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-orange-500 hover:text-orange-600 transition-colors group cursor-pointer"
                  >
                    <span>{currentInd.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* --- PART 2: WHY CAMLENIO? (4-COLUMN STRENGTHS GRID) --- */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-12 pt-8 border-t border-slate-100/80">
          
          {/* Header Row */}
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <h2
              className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight"
              style={{ transform: "translateZ(0)" }}
            >
              Why Partner With <span
                className="text-orange-500 inline-block"
                style={{
                  textShadow:
                    "2px 2px 0px #fff, 3px 3px 0px #da5f00, 5px 5px 12px rgba(249, 115, 22, 0.15)",
                }}
              >
                Camlenio?
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
              Selecting Camlenio for Hybrid Mobile App Development means partnering with an experienced firm that develops the app with quality and customer satisfaction in mind. We deliver user-friendly, highly adaptable applications.
            </p>
          </div>

          {/* 4-Column Strengths Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((str, idx) => {
              const IconComp = str.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.15 * idx }}
                  className="group relative bg-white/70 backdrop-blur-md border border-slate-100 rounded-3xl p-6 shadow-xs hover:border-orange-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div className="flex flex-col gap-4">
                    {/* Header Row of card: Icon and custom Badge status */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shadow-xs border border-orange-100/50 group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className={`text-[7px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${str.badgeClass}`}>
                        {str.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-slate-900 tracking-tight leading-snug group-hover:text-orange-500 transition-colors mt-2">
                      {str.title}
                    </h3>

                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {str.desc}
                    </p>
                  </div>

                  {/* Clean bottom line highlight on hover */}
                  <div className="h-[2px] w-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mt-6 group-hover:w-full transition-all duration-300" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
