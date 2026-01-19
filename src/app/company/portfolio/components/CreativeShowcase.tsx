"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const showcases = [
  {
    title: "Neo-Bank Interface",
    category: "UI Exploration",
    img: "/images/hotelmanagement/dashboard-preview.png", // Using placeholders from existing
    color: "bg-blue-900"
  },
  {
    title: "Immersive Real Estate",
    category: "3D Web Experience",
    img: "/real_estate_hero.webp",
    color: "bg-emerald-900"
  },
  {
    title: "AI Assistant",
    category: "Motion Concept",
    img: "/hero-city.webp",
    color: "bg-purple-900"
  },
  {
    title: "Luxury Travel",
    category: "App Design",
    img: "/luxury-hotel-hero.png",
    color: "bg-orange-900"
  },
  {
    title: "Crypto Exchange",
    category: "Product Design",
    img: "/adminpannel.jpg",
    color: "bg-zinc-800"
  }
];

export default function CreativeShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map vertical scroll to horizontal x-translation
  // We scroll 100% of the viewport vertically, which translates to -75% horizontally (depending on items)
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-zinc-950 text-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        {/* Section Header */}
        <div className="absolute top-10 left-6 md:left-20 z-10 w-full max-w-7xl">
          <div className="flex justify-between items-end pr-6 md:pr-20">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-2"
              >
                Playground
              </motion.h2>
              <div className="text-3xl md:text-5xl font-bold">
                Creative <span className="text-zinc-500">Showcase</span>
              </div>
            </div>
            <div className="hidden md:block text-zinc-500 text-sm font-mono">
              SCROLL TO EXPLORE
            </div>
          </div>
        </div>

        {/* Horizontal Container */}
        <motion.div style={{ x }} className="flex gap-10 pl-6 md:pl-20 items-center">
          {showcases.map((item, i) => (
            <div
              key={i}
              className={`group relative h-[60vh] w-[85vw] md:w-[45vw] shrink-0 rounded-3xl overflow-hidden ${item.color}`}
            >
              {/* Image Container with Parallax Hover */}
              <div className="w-full h-full relative overflow-hidden">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                <span className="inline-block px-3 py-1 mb-3 text-xs border border-white/20 rounded-full backdrop-blur-md">
                  {item.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{item.title}</h3>
                <div className="w-0 group-hover:w-full h-[1px] bg-orange-500 transition-[width] duration-500" />
              </div>
            </div>
          ))}

          {/* End Spacer CTA */}
          <div className="h-[60vh] w-[30vh] shrink-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center text-center p-4 hover:bg-white hover:text-black transition-all cursor-pointer">
              View All<br />Work
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
