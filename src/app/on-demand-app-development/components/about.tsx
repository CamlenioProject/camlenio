"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  Activity
} from "lucide-react";

export default function AboutOnDemand() {
  return (
    <section
      className="relative w-full py-28 bg-transparent overflow-hidden"
      style={{ transform: "translateZ(0)" }}
    >

      {/* Tech Dot Grid Background Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(#f97316 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Atmospheric Blur Spheres */}
      <div className="absolute top-[15%] left-[-15%] w-[480px] h-[480px] bg-gradient-to-tr from-orange-500/10 to-amber-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-15%] w-[480px] h-[480px] bg-gradient-to-br from-orange-400/5 to-orange-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-28">

        {/* ========================================================================= */}
        {/* --- ROW 1: CUSTOM BUILT SOLUTIONS (Content Left, Interactive Canvas Right) --- */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Content (Col Span 7) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start gap-6"
          >

            {/* Headline with custom Orange Shadow Highlight */}
            <h2
              className="text-3xl sm:text-[40px] font-black text-[#0f172a] leading-[1.12] tracking-tight"
              style={{ transform: "translateZ(0)" }}
            >
              Custom Built On Demand <br />
              <span
                className="text-orange-500 inline-block"
                style={{
                  textShadow: "2px 2px 0px #fff, 3px 3px 0px #da5f00, 5px 5px 12px rgba(249, 115, 22, 0.15)"
                }}
              >
                App Development
              </span> <br />
              For Your Business
            </h2>

            {/* Main Paragraph Description */}
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
              We believe each business is unique. Our Custom On Demand App Development system guarantees your application is customized to your essential goals and industry needs. From ideation to deployment, our experts work closely with you to convey solutions that align perfectly with your idea. Our experienced On Demand App Developers use unique technologies to make applications secure and flexible.
            </p>

            {/* User-Centric Highlight Banner */}
            <div className="w-full flex items-start gap-4 ">
              <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                We focus on User-Centric App Development, guaranteeing that each feature increases usability and customer satisfaction.
              </p>
            </div>

          </motion.div>

          {/* WebP Image Showcase (Col Span 5) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative rounded-[32px] overflow-hidden border border-slate-100 bg-white/50 backdrop-blur-md shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 aspect-[4/3] flex items-center justify-center"
          >
            <img
              src="/ServiceDropdown/ondemand/ondemand-4.webp"
              alt="Custom Built On Demand Development"
              className="w-full h-full object-cover rounded-[32px] transition-transform duration-500 hover:scale-[1.03]"
              loading="lazy"
            />
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* --- ROW 2: REAL-TIME ENGINE (Interactive Canvas Left, Content Right) --- */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8 border-t border-slate-100/80">

          {/* WebP Image Showcase (Col Span 5) - Order reversed for Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative rounded-[32px] overflow-hidden border border-slate-100 bg-white/50 backdrop-blur-md shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 aspect-[4/3] flex items-center justify-center order-2 lg:order-1"
          >
            <img
              src="/ServiceDropdown/ondemand/ondemand-2.webp"
              alt="Real-Time & Scalable On Demand Engine"
              className="w-full h-full object-cover rounded-[32px] transition-transform duration-500 hover:scale-[1.03]"
              loading="lazy"
            />
          </motion.div>

          {/* Content (Col Span 7) - Order reversed for Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start gap-6 order-1 lg:order-2"
          >
            {/* Headline with custom Orange Shadow Highlight */}
            <h2
              className="text-3xl sm:text-[40px] font-black text-[#0f172a] leading-[1.12] tracking-tight"
              style={{ transform: "translateZ(0)" }}
            >
              Real-Time & Scalable <br />
              <span
                className="text-orange-500 inline-block"
                style={{
                  textShadow: "2px 2px 0px #fff, 3px 3px 0px #da5f00, 5px 5px 12px rgba(249, 115, 22, 0.15)"
                }}
              >
                On Demand App
              </span> <br />
              Development
            </h2>

            {/* Main Paragraph Description */}
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
              A modern app requires instant responsiveness. Our expertise in Real-Time App Development allows businesses to offer live tracking, updates, and seamless communication to users. If it's food delivery, healthcare service, or ride-hailing, we design apps that work flawlessly in real-time environments.
            </p>

            {/* Scalability Highlight Banner */}
            <div className="w-full bg-orange-50/20 border border-orange-100/30 rounded-2xl flex items-start gap-4 shadow-3xs hover:shadow-xs hover:border-orange-200 transition-all duration-300">
              <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                We also highlight Scalable App Development to guarantee your application grows with your business. Our method helps multiple users, high traffic, and growing business requirements without compromising performance.
              </p>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
