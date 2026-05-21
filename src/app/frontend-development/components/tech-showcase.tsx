"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiReact, SiAngular, SiVuedotjs, SiNextdotjs, SiJavascript } from "react-icons/si";

const techStack = [
  {
    name: "Angular Development",
    desc: "For Enterprise-grade applications",
    icon: <SiAngular size={32} className="text-[#DD0031]" />,
  },
  {
    name: "Next JS",
    desc: "Modern frameworks for optimized performance",
    icon: <SiNextdotjs size={32} className="text-zinc-900" />,
  },
  {
    name: "Advanced JavaScript",
    desc: "Development for Dynamic Functionality",
    icon: <SiJavascript size={32} className="text-[#F7DF1E]" />,
  },
  {
    name: "Vue JS Development",
    desc: "Flexible and Lightweight UI",
    icon: <SiVuedotjs size={32} className="text-[#4FC08D]" />,
  },
  {
    name: "React JS Development",
    desc: "Fast and interactive interfaces",
    icon: <SiReact size={32} className="text-[#61DAFB]" />,
  },
];

export default function TechShowcase() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Header with Exact Content */}
        <div className="max-w-4xl mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-semibold uppercase tracking-[0.2em] text-xs block mb-4"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight mb-6"
          >
            Modern Technologies We Use in <br />
            <span className="text-orange-500" style={{
              textShadow:
                "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
            }}>Frontend Web Development</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-zinc-500 text-lg leading-relaxed max-w-2xl"
          >
            We leverage the advanced tools to provide high-quality Frontend Development solutions:
          </motion.p>
        </div>

        {/* Minimal Grid with Exact Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group flex gap-6"
            >
              <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-white border border-zinc-100 rounded-xl group-hover:border-orange-500/30 transition-colors duration-300">
                {tech.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight group-hover:text-orange-500 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Banner with Exact Content */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-8 md:p-12 rounded-[2rem] bg-zinc-900 text-white relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] -mr-32 -mt-32" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Optimized for Scalability and Speed
              </h3>
              <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed">
                Our expert Front End Web Developers guarantee your website is not only visually appealing but also optimized for scalability and speed.
              </p>
            </div>
            <button className="px-10 py-4 bg-orange-500 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-500 shrink-0">
              Connect with Experts
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
