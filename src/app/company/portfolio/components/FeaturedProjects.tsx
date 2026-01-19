"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Fintech Revolution",
    type: "Web Application",
    desc: "Reimagining the future of digital banking with a focus on human-centric design and security.",
    tags: ["Strategy", "Design", "Development"],
    img: "/adminpannel.jpg",
    slug: "fintech-portal"
  },
  {
    title: "Luxury Stays",
    type: "Booking Platform",
    desc: "A seamless booking experience for high-end hospitality, integrating AI concierge services.",
    tags: ["UX/UI", "Platform", "AI"],
    img: "/luxury-hotel-hero.png",
    slug: "hotel-suite"
  },
  {
    title: "Urban Intelligence",
    type: "Real Estate Tech",
    desc: "Visualizing property data in 3D to help investors make smarter decisions faster.",
    tags: ["3D", "React", "Data"],
    img: "/real_estate_hero.webp",
    slug: "real-estate"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="bg-zinc-950 text-white pb-32 pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-20 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-4"
        >
          Selected Works
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold"
        >
          Crafting Digital<br /><span className="text-zinc-600">Landmarks.</span>
        </motion.h3>
      </div>

      <div className="flex flex-col gap-32 px-6 md:px-20">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="group cursor-pointer" // Add link logic here
          >
            {/* Visual */}
            <div className="w-full relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl mb-10">
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />

              {/* Floating Tag */}
              <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-sm font-mono">
                {project.type}
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-white/10 pb-10">
              <div className="md:w-1/2">
                <h4 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h4>
                <div className="flex gap-4 text-sm text-zinc-400 font-mono">
                  {project.tags.map(tag => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
              </div>
              <div className="md:w-1/3">
                <p className="text-lg text-zinc-400 mb-6 w-full max-w-sm">
                  {project.desc}
                </p>
                <div className="flex items-center gap-2 text-orange-500 font-bold group-hover:gap-4 transition-all">
                  View Case Study
                  <span>→</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-32">
        <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-colors duration-300">
          View All Projects
        </button>
      </div>

    </section>
  );
}
