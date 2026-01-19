"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
  { name: "React / Next.js", category: "Fabric" },
  { name: "TypeScript", category: "Safety" },
  { name: "Three.js / WebGL", category: "Dimension" },
  { name: "Node.js", category: "Core" },
  { name: "Python", category: "Intelligence" },
  { name: "GraphQL", category: "Data" },
  { name: "Tailwind CSS", category: "Style" },
  { name: "Framer Motion", category: "Motion" },
  { name: "AWS / Vercel", category: "Scale" },
  { name: "PostgreSQL", category: "Memory" },
];

// Marquee component
const Marquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex overflow-hidden group">
      <motion.div
        className="flex gap-20 whitespace-nowrap py-10"
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="bg-zinc-950 text-white py-32 border-t border-white/5 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-20 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-4">
            The Engine
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-300">
            Built on modern<br />foundations.
          </h3>
        </motion.div>
      </div>

      {/* Marquee 1 - Left */}
      <div className="w-full border-y border-white/5 bg-white/[0.02]">
        <Marquee>
          {technologies.map((tech, i) => (
            <div key={i} className="flex items-center gap-4 text-4xl md:text-6xl font-bold text-zinc-700 hover:text-white transition-colors cursor-default">
              <span>{tech.name}</span>
              <span className="text-lg bg-orange-500/10 text-orange-500 font-mono tracking-widest px-3 py-1 rounded-full">{tech.category}</span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Marquee 2 - Right (Offset/Different speed or Content could go here) */}

    </section>
  );
}
