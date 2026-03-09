"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExpertServices() {
  return (
    <section className="w-full bg-transparent py-10 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ willChange: "opacity, transform" }}
            className="lg:w-1/2"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/50 text-orange-600 text-sm font-semibold mb-6 ring-1 ring-inset ring-orange-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
              Expert Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.2] mb-6 tracking-tight">
              Expert iOS App <br className="hidden lg:block" /> Development Services
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-base md:text-lg">
              At Camlenio, we specialize in iOS App development that merges intuitive design, strong architectures, and seamless performance. Our experienced team follows Apple’s best methods to make fast, secure, and user-friendly applications for iPhone, iPad, and other iOS devices. From the concept to deployment as we guarantee your app provides real business value.
            </p>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              Our process is focused on scalability and long-term success. We utilize the latest Apple frameworks to convey reliable operations across fintech, healthcare, e-commerce, and SaaS.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ willChange: "opacity, transform" }}
            className="lg:w-1/2 w-full flex justify-end relative"
          >
            {/* Decorative blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-300/30 blur-[80px] rounded-full -z-10"></div>

            <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-white/50 group bg-white p-2">
              <div className="w-full h-full relative rounded-[2rem] overflow-hidden">
                <Image
                  src="/CompanyDropdown/about/Our-Team1.jpg"
                  alt="Our Team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Premium Dark Panel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ willChange: "opacity, transform" }}
          className="bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden flex flex-col md:flex-row justify-between items-center text-white gap-10 md:gap-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-800"
        >
          {/* Subtle glow inside dark panel */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 w-full md:w-1/2 lg:w-3/5">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-white drop-shadow-sm">Robust & Scalable</h3>
            <p className="text-slate-400 mb-8 md:mb-10 text-base md:text-lg lg:text-xl font-medium">High-Speed Execution for Enterprise</p>

            <div className="flex flex-wrap gap-3">
              {['Fintech', 'Healthcare', 'E-commerce', 'Travel', 'SaaS', 'Enterprise'].map((tag) => (
                <span key={tag} className="bg-slate-800/80 backdrop-blur-md border border-slate-700 text-slate-200 font-medium px-5 py-2.5 rounded-full text-sm hover:bg-slate-700 hover:border-slate-600 cursor-default transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 w-full md:w-auto flex-1 aspect-[4/3] rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-2xl bg-slate-800 p-2 group">
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
              <Image
                src="/Homepage/IndustriesSection/who-we-are.webp"
                alt="Development"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
