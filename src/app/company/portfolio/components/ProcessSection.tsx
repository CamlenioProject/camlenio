"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    desc: "We dive deep into your business goals, user needs, and market landscape to define a clear path forward.",
    details: ["Stakeholder Interviews", "Competitor Analysis", "Product Roadmap", "Technical Feasibility"]
  },
  {
    number: "02",
    title: "Design & Prototyping",
    desc: "We craft intuitive, beautiful interfaces that align with your brand and delight your users.",
    details: ["Information Architecture", "Wireframing", "High-Fidelity UI", "Interactive Prototypes"]
  },
  {
    number: "03",
    title: "Development",
    desc: "Our engineering team builds scalable, secure, and high-performance solutions using modern tech stacks.",
    details: ["Frontend & Backend", "API Integration", "Quality Assurance", "Security Audits"]
  },
  {
    number: "04",
    title: "Launch & Scale",
    desc: "We ensure a smooth deployment and provide ongoing support to help your product grow.",
    details: ["Deployment Pipeline", "Performance Optimization", "Analytics Setup", "Growth Hacking"]
  }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  return (
    <section className="bg-zinc-950 text-white py-32 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">

        {/* LEFT: Heading */}
        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-6">
              Our Process
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6">
              From Chaos<br />to <span className="text-zinc-500">Clarity.</span>
            </h3>
            <p className="text-zinc-400 max-w-sm leading-relaxed">
              We follow a proven methodology to ensure every project is delivered on time, within budget, and above expectations.
            </p>
          </motion.div>
        </div>

        {/* RIGHT: Steps Accordion */}
        <div className="md:w-2/3">
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setActiveStep(activeStep === i ? null : i)}
                  className="w-full flex items-start py-10 text-left group transition-all"
                >
                  <span className={`text-xl font-mono mr-8 md:mr-16 transition-colors ${activeStep === i ? 'text-orange-500' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h4 className={`text-2xl md:text-4xl font-bold transition-colors ${activeStep === i ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                      {step.title}
                    </h4>
                  </div>
                </button>

                <AnimatePresence>
                  {activeStep === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-14 md:pl-24 pb-10 pr-6">
                        <p className="text-lg text-zinc-300 mb-8 leading-relaxed max-w-xl">
                          {step.desc}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-sm text-zinc-500 font-mono">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
