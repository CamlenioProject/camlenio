"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle2 } from "lucide-react";

export default function WhyChoose() {
  const trustPoints = [
    "Professional Document Review",
    "Accurate Government Filings",
    "Transparent Fee Structures",
    "Prompt Filing Milestones",
    "Security and Data Protection",
    "Hassle-free Citizen Facilitation",
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Grid: Info on the left, card visualization on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: Heading & trust list */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-sans">
                Why is Camlenio the Preferred Choice <br />
                <span className="text-orange-500">for Offline Services?</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify font-sans font-medium">
                Camlenio is committed to delivering offline services with professionalism and efficiency. Our expert team understands the complexities of documentation and government processes, guaranteeing smooth service delivery from start to finish.
              </p>
            </motion.div>

            {/* Check points list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-orange-100/50">
              {trustPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-gray-850">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic visa card stack visualization from reference design */}
          <div className="lg:col-span-6 relative h-[450px] sm:h-[550px] flex items-center justify-center">
            
            {/* Background pill/capsule container */}
            <div className="relative w-full max-w-[420px] h-[340px] rounded-[3rem] bg-gradient-to-r from-orange-400 via-red-500 to-amber-500 overflow-hidden shadow-2xl p-8 flex flex-col justify-between items-start text-left">
              {/* Inner capsule highlights */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-2xl rounded-full" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-black/10 blur-xl rounded-full" />

              <div className="relative z-10 text-white space-y-2 max-w-[200px]">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <Shield className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-lg font-black leading-snug">Let Legal Experts Handle Your Filing!</h3>
                <p className="text-[9px] opacity-75 leading-relaxed">Secure document uploads, error-free validations, and real-time status trackers.</p>
              </div>

              {/* Stacked overlapping credit cards */}
              {/* Card 1 (Back left) */}
              <motion.div
                initial={{ opacity: 0, rotate: 10, y: 30 }}
                whileInView={{ opacity: 1, rotate: 22, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute -bottom-6 right-20 w-[140px] h-[210px] bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl shadow-xl border border-teal-400/30 p-3 flex flex-col justify-between text-white text-left z-20 origin-bottom"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[7px] tracking-widest opacity-80 uppercase">GST Register</span>
                  <div className="w-4 h-4 rounded-full bg-white/10" />
                </div>
                <div className="space-y-2">
                  <div className="text-[8px] tracking-widest">**** **** 9015</div>
                  <div>
                    <div className="text-[5px] uppercase opacity-60">Status</div>
                    <span className="text-[7px] font-bold">GST APPROVED</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 (Middle, slightly right) */}
              <motion.div
                initial={{ opacity: 0, rotate: 5, y: 30 }}
                whileInView={{ opacity: 1, rotate: 12, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="absolute -bottom-10 right-8 w-[140px] h-[210px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700/50 p-3 flex flex-col justify-between text-white text-left z-35 origin-bottom"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[7px] tracking-widest opacity-80 uppercase">ITR Filing</span>
                  <div className="w-4 h-4 rounded-full bg-orange-500" />
                </div>
                <div className="space-y-2">
                  <div className="text-[8px] tracking-widest">**** **** 4298</div>
                  <div>
                    <div className="text-[5px] uppercase opacity-60">Filing Year</div>
                    <span className="text-[7px] font-bold">ITR AY 2026-27</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 (Front, center right, tilted) */}
              <motion.div
                initial={{ opacity: 0, rotate: 0, y: 30 }}
                whileInView={{ opacity: 1, rotate: -2, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-12 -right-4 w-[140px] h-[210px] bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-2xl border border-orange-400/30 p-3 flex flex-col justify-between text-white text-left z-40 origin-bottom"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[7px] tracking-widest opacity-80 uppercase">MSME Cert</span>
                  <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center text-[5px] font-bold">Visa</div>
                </div>
                <div className="space-y-2">
                  <div className="text-[8px] tracking-widest">**** **** 0912</div>
                  <div>
                    <div className="text-[5px] uppercase opacity-60">Client</div>
                    <span className="text-[7px] font-bold">JAIPUR SERVICES</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
