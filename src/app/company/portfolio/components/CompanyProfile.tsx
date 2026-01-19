"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const services = [
  {
    title: "Digital Strategy",
    desc: "Product Discovery, Roadmapping, Market Research",
    color: "from-orange-400 to-red-500"
  },
  {
    title: "Experience Design",
    desc: "UI/UX, Interactions, Design Systems, Motion",
    color: "from-blue-400 to-purple-500"
  },
  {
    title: "Technology",
    desc: "Frontend, Backend, AI Integration, DevOps",
    color: "from-emerald-400 to-cyan-500"
  },
  {
    title: "Growth",
    desc: "SEO, Analytics, Conversion Optimization",
    color: "from-pink-400 to-rose-500"
  }
];

const industries = [
  "Fintech & Banking",
  "Real Estate",
  "Luxury Hospitality",
  "Enterprise SaaS",
  "E-Commerce"
];

export default function CompanyProfile() {
  const containerRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  // const cursorX = useSpring(mouseX, springConfig);
  // const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // We want the cursor to form relative to this section or viewport?
    // Using relative to viewport (e.clientX) usually works best for absolute followers
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-zinc-950 text-white py-24 px-6 md:px-20 overflow-hidden z-20 cursor-default"
    >

      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />


      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 relative z-20">

        {/* LEFT COLUMN - Sticky Header */}
        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:sticky md:top-32"
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-6">
              Who We Are
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              We define the<br />
              <span className="text-zinc-500">digital future</span><br />
              for ambitious brands.
            </h3>

            <p className="text-zinc-400 leading-relaxed text-base md:text-lg max-w-sm">
              We are a team of designers, engineers, and strategists who believe in the power of clarity. We strip away the noise to build products that perform.
            </p>

            {/* Philosophy Badge */}
            <div className="mt-12 p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
              <h4 className="text-white font-bold mb-2">Our Philosophy</h4>
              <p className="text-sm text-zinc-400 italic">
                "Design is not just what it looks like. Design is how it works."
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - Content Grid */}
        <div className="md:w-2/3 flex flex-col gap-24">

          {/* SPECIALTIES LIST with Hover Interaction */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h4 className="text-2xl font-bold border-b border-white/10 pb-6 mb-6">Expertise</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-12">
                {services.map((s, i) => (
                  <motion.div
                    key={i}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative p-6 border border-white/5 rounded-2xl md:border-none md:p-0 bg-white/5 md:bg-transparent transition-colors hover:bg-white/10 md:hover:bg-transparent"
                  >
                    <h5 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-orange-500 transition-colors cursor-pointer">
                      {s.title}
                    </h5>
                    <p className="text-zinc-500 text-sm md:text-base group-hover:text-zinc-300 transition-colors">
                      {s.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* INDUSTRIES */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold border-b border-white/10 pb-6 mb-8">Industries</h4>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {industries.map((ind, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base border border-white/10 rounded-full text-zinc-300 hover:border-orange-500 hover:text-white hover:bg-orange-500/10 transition-all cursor-default"
                  >
                    {ind}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* BIG ABSTRACT STATEMENT */}
          <div className="py-20 relative overflow-hidden flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h2 className="text-[15vw] font-bold leading-none text-white/5 select-none tracking-tighter">
                IMPACT
              </h2>
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl text-orange-500 font-mono">
                Ready to Scale?
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
