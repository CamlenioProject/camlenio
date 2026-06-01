"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquareCode } from "lucide-react";

export default function BackendCTA() {
  return (
    <section 
      className="relative w-full py-24 bg-transparent overflow-hidden"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Ambient background accent glows */}
      <div className="absolute top-[-10%] right-[15%] w-[450px] h-[450px] bg-gradient-to-br from-orange-400/5 to-amber-500/5 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[15%] w-[450px] h-[450px] bg-gradient-to-tr from-indigo-500/5 to-blue-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/85 backdrop-blur-md border border-slate-100/90 rounded-[40px] p-8 md:p-16 shadow-[0_20px_50px_-20px_rgba(251,146,60,0.08)] overflow-hidden text-center flex flex-col items-center gap-8"
          style={{ transform: "translateZ(0)" }}
        >
          {/* Subtle top light catch edge */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/20 to-transparent" />
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-orange-500/[0.02] rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-500/[0.02] rounded-full blur-2xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center p-4 bg-orange-50 border border-orange-100 rounded-2xl text-orange-500 shadow-3xs">
            <MessageSquareCode className="w-6 h-6 animate-pulse" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-[42px] font-black text-[#0f172a] leading-tight tracking-tight max-w-3xl">
            Get Started with <br className="sm:hidden" />
            <span 
              className="text-orange-500 inline-block mt-1" 
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582322",
              }}
            >
              Expert Backend Solutions!
            </span>
          </h2>

          {/* Description Paragraph */}
          <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed max-w-3xl">
            If you are searching for a trustworthy Backend Development Company India, Camlenio is your ideal partner. From custom backend development to full Backend Infrastructure Development, we offer everything you require for a powerful digital product.
          </p>

          {/* Action Trigger Box */}
          <div className="flex flex-col items-center gap-5 mt-4 w-full">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4.5 bg-orange-500 hover:bg-orange-600 text-white font-black text-sm sm:text-base rounded-full shadow-[0_10px_25px_-5px_rgba(249,115,22,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(249,115,22,0.5)] transition-all duration-300 flex items-center gap-3 relative overflow-hidden group"
            >
              {/* Subtle visual lighting sweep */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:animate-shine pointer-events-none" />
              
              <span>Contact Us!</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            {/* Supporting Copy */}
            <p className="text-slate-600 font-bold text-xs sm:text-sm max-w-2xl text-center leading-relaxed">
              Hire experienced Backend Developers and transform your ideas into high-performing applications.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
