"use client";

import { motion } from "framer-motion";
import { Settings2, ArrowRight } from "lucide-react";

const processSteps = [
  {
    num: "01",
    title: "Requirement Analysis & Strategy",
    desc: "Our expertise understands your business goals, target audience and technical requirements. As this strategic planning guarantee a successful iOS app development aligned with your essential goals.",
  },
  {
    num: "02",
    title: "UI/UX Design & Prototyping",
    desc: "Our developers make intuitive interfaces that increase the user experience. As we focus on the Apple-centric design principles for effective iOS mobile application development.",
  },
  {
    num: "03",
    title: "Development, Testing, and Deployment",
    desc: "Our developers manage the coding, testing, and App Store submission with accuracy. As an experienced iPhone App development firm guarantees quality assurance at each level.",
  }
];

export default function Process() {
  return (
    <section className="w-full bg-transparent py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background glow for theme alignment */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-400/20 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-multiply"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-20">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.2] tracking-tight"
          >
            Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">iOS <br />Development</span> Process
          </motion.h2>
        </div>

        <div className="relative mt-20">
          {/* Continuous Line passing through cards */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 -translate-y-1/2 hidden lg:block rounded-full z-0 opacity-40"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ willChange: "opacity, transform" }}
                className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white hover:-translate-y-3 transition-transform duration-500 group"
              >
                {/* Custom Number Badge */}
                <div className="absolute -top-6 left-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center font-black text-2xl shadow-xl shadow-orange-500/30 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 ring-4 ring-white">
                  {step.num}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow connecting to next line element */}
                <div className="absolute top-1/2 -right-7 -translate-y-1/2 w-14 h-14 hidden lg:flex items-center justify-center z-20 pointer-events-none">
                  {index < processSteps.length - 1 && (
                    <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-orange-100 text-orange-400">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
