"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, CheckCircle2 } from "lucide-react";

export default function WhyChoose() {
  const trustPoints = [
    "Modern UI/UX Design",
    "Secure and Scalable Technology",
    "Affordable Development Cost",
    "Dedicated Technical Support",
    "Customized Software Solutions",
    "Industry Specific Billing Solutions",
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Why Businesses Trust Us for <br />
                <span className="text-orange-500">Billing Software Development?</span>
              </h2>
              <p className="text-gray-655 text-sm sm:text-base leading-relaxed text-justify">
                Camlenio is a trustworthy billing software development company in Jaipur known for delivering reliable, industry-focused solutions. Our experienced developers create customized systems depending on your business requirements.
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
            <div className="relative w-full max-w-[420px] h-[340px] rounded-[3rem] bg-gradient-to-r from-orange-400 via-red-500 to-teal-400 overflow-hidden shadow-2xl p-8 flex flex-col justify-between items-start text-left">
              {/* Inner capsule highlights */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-2xl rounded-full" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-black/10 blur-xl rounded-full" />

              <div className="relative z-10 text-white space-y-2 max-w-[200px]">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <Shield className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-lg font-black leading-snug">Take Control of Your Billing Database Today!</h3>
                <p className="text-[9px] opacity-75 leading-relaxed">Secure transaction records, auto CGST deductions, and fast point-of-sale setups.</p>
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
                  <span className="text-[7px] tracking-widest opacity-80 uppercase">Node Secure</span>
                  <div className="w-4 h-4 rounded-full bg-white/10" />
                </div>
                <div className="space-y-2">
                  <div className="text-[8px] tracking-widest">**** **** 8251</div>
                  <div>
                    <div className="text-[5px] uppercase opacity-60">Database</div>
                    <span className="text-[7px] font-bold">POS REGISTER</span>
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
                  <span className="text-[7px] tracking-widest opacity-80 uppercase">GST Standard</span>
                  <div className="w-4 h-4 rounded-full bg-orange-500" />
                </div>
                <div className="space-y-2">
                  <div className="text-[8px] tracking-widest">**** **** 4329</div>
                  <div>
                    <div className="text-[5px] uppercase opacity-60">System</div>
                    <span className="text-[7px] font-bold">RETAIL BILLS</span>
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
                  <span className="text-[7px] tracking-widest opacity-80 uppercase">Camlenio Core</span>
                  <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center text-[5px] font-bold">Visa</div>
                </div>
                <div className="space-y-2">
                  <div className="text-[8px] tracking-widest">**** **** 9012</div>
                  <div>
                    <div className="text-[5px] uppercase opacity-60">Owner</div>
                    <span className="text-[7px] font-bold">JAIPUR CLINIC</span>
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
