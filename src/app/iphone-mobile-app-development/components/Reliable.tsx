"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Zap, Settings2, Smartphone, Apple } from "lucide-react";

const services = [
  {
    title: "Enterprise-level solutions",
    desc: "By an iOS software development company designed for scale and enterprise needs.",
    icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
    bgPattern: "from-blue-50 to-indigo-50/20",
    iconBg: "bg-blue-100",
    hoverGlow: "group-hover:text-blue-600"
  },
  {
    title: "App store deployment",
    desc: "App testing, and post-launch optimization to ensure continuous App Store success.",
    icon: <Settings2 className="w-5 h-5 text-emerald-500" />,
    bgPattern: "from-emerald-50 to-teal-50/20",
    iconBg: "bg-emerald-100",
    hoverGlow: "group-hover:text-emerald-600"
  },
  {
    title: "End-to-End delivery",
    desc: "As a trusted iPhone mobile Application development company, we handle your entire app lifecycle.",
    icon: <Zap className="w-5 h-5 text-orange-500" />,
    bgPattern: "from-orange-50 to-amber-50/20",
    iconBg: "bg-orange-100",
    hoverGlow: "group-hover:text-orange-600"
  },
  {
    title: "Custom iPhone mobile app",
    desc: "Development crafted to provide the best native user experiences on Apple devices.",
    icon: <Smartphone className="w-5 h-5 text-purple-500" />,
    bgPattern: "from-purple-50 to-fuchsia-50/20",
    iconBg: "bg-purple-100",
    hoverGlow: "group-hover:text-purple-600"
  }
];

export default function Reliable() {
  return (
    <section className="w-full bg-transparent py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">

          {/* Left Narrative Panel (Dark Premium) */}
          <motion.div
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="xl:col-span-5 flex flex-col justify-between bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-2xl h-full border border-slate-800"
          >
            {/* Sleek ambient glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none"></div>

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-8 backdrop-blur-md ring-1 ring-white/20">
                <Apple className="w-4 h-4 text-orange-400" />
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tight mb-6 md:mb-8">
                Reliable iPhone Development Company.
              </h2>
              <p className="text-slate-400 leading-relaxed text-base md:text-lg mb-8 md:mb-10">
                We are recognized as a trustworthy iPhone App Development company and iPhone development firm that supports the business‘s success in the digital world. As we make custom operations that leverage the high-performance of iOS and guarantee speed, security, and usability.
              </p>
            </div>

            {/* Bottom Special Callout Box */}
            <div className="relative z-10 w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-xl relative overflow-hidden group mt-auto">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange-400 to-orange-600"></div>
              <p className="text-slate-300 font-medium leading-relaxed text-[15px] italic">
                "From easy MVPs to complex enterprise platforms, we manage each iOS app development need with precision and care."
              </p>
            </div>
          </motion.div>

          {/* Right Bento Cards Grid */}
          <div className="xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                style={{ willChange: "transform" }}
                className={`relative overflow-hidden bg-white border border-slate-200 rounded-[2rem] p-8 lg:p-10 shadow-sm flex flex-col group cursor-pointer hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 transition-all duration-500`}
              >
                {/* Subtle gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgPattern} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>

                <div>
                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center shadow-inner ring-1 ring-white/50 group-hover:scale-110 transition-transform duration-500`}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className={`font-bold text-slate-900 mb-2 md:mb-3 text-xl md:text-2xl leading-tight tracking-tight ${service.hoverGlow} transition-colors duration-300`}>
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-500 font-medium leading-relaxed relative z-10 text-sm md:text-base">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
