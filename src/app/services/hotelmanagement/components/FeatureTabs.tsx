"use client";

import React, { useRef } from "react";
import { LazyMotion, domMax, m, useInView } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Hotel, Palmtree, Building2, Building, BedDouble, Key, Users } from "lucide-react";
import { featureCategories } from "./data";
import { RevealSection } from "../../realestatesoftware/components/RevealSection";

// Define generic types
type Feature = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

// Process Data (Updated from User Request)
const processSteps = [
  {
    title: "Discovery & Requirement Analysis",
    description:
      "We understand your business model, goals, target guests, and workflow needs.",
  },
  {
    title: "UI/UX Design & Prototyping",
    description:
      "We define user journeys and create intuitive interface designs for both staff and guests.",
  },
  {
    title: "Custom Development",
    description:
      "Developers build scalable modules, integrate APIs, and connect third-party systems as needed.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing ensures performance, stability, and security.",
  },
  {
    title: "Deployment & Training",
    description:
      "We launch the software and train your team for smooth adoption.",
  },
  {
    title: "Support & Maintenance",
    description:
      "Ongoing updates, troubleshooting, and enhancements keep your system up-to-date.",
  },
];

// Helper to get icon by index or name
const getIcon = (index: number) => {
  const icons = [
    <Hotel key="1" className="w-8 h-8" />,
    <Palmtree key="2" className="w-8 h-8" />,
    <Building2 key="3" className="w-8 h-8" />,
    <Building key="4" className="w-8 h-8" />,
    <BedDouble key="5" className="w-8 h-8" />,
    <Key key="6" className="w-8 h-8" />,
    <Users key="7" className="w-8 h-8" />
  ];
  return icons[index % icons.length];
};

export const FeatureTabs = () => {
  // Flatten categories to get the list of features matching the design
  const features = Object.values(featureCategories).flat();

  const beneficiaries = [
    "Boutique Hotels",
    "Luxury Resorts",
    "Chain Hotels",
    "Serviced Apartments",
    "Hostels & Lodges",
    "Vacation Rentals",
    "Event & Conference Venues"
  ];


  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-20% 0px -20% 0px",
  });

  return (
    <LazyMotion features={domMax}>
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          {/* Redesigned Key Features Section (Hybrid: Large Image, Compact Text) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-24 relative">

            {/* Left: Interactive Image Composition (Original Size) - With Spring Animation */}
            <div className="relative h-[400px] sm:h-[500px] w-full flex items-center justify-center">
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-full h-full max-w-[500px]"
              >
                {/* Main Image */}
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white z-20">
                  <img
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                    alt="Hotel features"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Decorative Orange Shape (Bottom Left) */}
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-orange-500 rounded-full mix-blend-multiply filter blur-2xl opacity-40 z-0 animate-pulse" />

                {/* Geometric Pattern (Dots) */}
                <div className="absolute -top-10 -left-10 z-0 grid grid-cols-4 gap-2 opacity-30">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-orange-400" />
                  ))}
                </div>
              </m.div>
            </div>

            {/* Right: Content List (Compact) - With Optimized Spring Animation */}
            <div className="space-y-2">
              <div className="space-y-1">
                {features.map((item: any, index: number) => (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.3 + (index * 0.05) }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="group flex gap-4 p-3 rounded-xl hover:bg-white/30 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 border border-transparent hover:border-gray-100 cursor-default"
                  >
                    {/* Mobile Vertical Line */}
                    <div className="shrink-0 w-1 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full sm:hidden self-stretch origin-bottom" />

                    {/* Desktop Icon */}
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-orange-50 hidden sm:flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm border border-orange-100/50">
                      {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-xl text-justify">
                        {item.desc}
                      </p>
                    </div>
                  </m.div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Invest Section (Redesigned Split Layout) */}
          <m.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-20 relative border-t border-slate-100"
          >
            {/* Header: Title Left, Subtitle Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mb-12 items-end">
              <RevealSection>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Why Invest in {" "}<br />
                  <span
                    className="text-orange-500"
                    style={{
                      textShadow:
                        "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                    }}
                  >Custom Hotel Software?</span>
                </h2>
              </RevealSection>

              <RevealSection delay={0.1}>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-1 lg:mb-4">
                  Hotels operate in a highly competitive market, and guest expectations keep rising. Ready-made systems rarely fit every hotel’s needs. Custom hotel management software gives you:
                </p>
              </RevealSection>
            </div>

            {/* Content: List Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="space-y-2">
                {[
                  { title: "Tailored Workflows", desc: "Designed around your specific hospitality operations" },
                  { title: "Scalability", desc: "Grow your software as your business expands" },
                  { title: "Brand Integration", desc: "Reflect your brand across guest touchpoints" },
                  { title: "Better Guest Experience", desc: "Faster check-ins, personalized services, and seamless stays" },
                  { title: "Data Security & Compliance", desc: "Modern encryption and secure data management" }
                ].map((item, idx) => (
                  <m.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 50, delay: 0.2 + (idx * 0.1) }}
                    viewport={{ once: true }}
                    className="group flex gap-4 p-3 rounded-xl transition-all duration-300 border border-transparent cursor-default"
                  >
                    {/* Mobile Vertical Line */}
                    <div className="shrink-0 w-1 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full sm:hidden self-stretch origin-bottom" />

                    {/* Desktop Icon */}
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-orange-50 hidden sm:flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-700 shadow-sm border border-orange-100/50">
                      <FaCheckCircle className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-xl text-justify">{item.desc}</p>
                    </div>
                  </m.div>
                ))}

                {/* Decorative Triangle (Bottom Left of Text Column) */}
                <svg className="absolute bottom-16 -left-8 w-14 h-14 text-pink-400/80 animate-bounce-slow hidden lg:block z-0 pointer-events-none opacity-50" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2 L 22 22 L 2 22 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="relative">
                {/* Connecting Arrow (Center) - Animated */}
                <div className="absolute -left-28 xl:-left-44 top-1/2 -translate-y-1/2 w-48 h-36 hidden lg:block z-20 pointer-events-none">
                  <m.svg
                    width="300"
                    height="250"
                    viewBox="0 0 300 250"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-md text-orange-500"
                  >
                    {/* Line path */}
                    <m.path
                      d="M30 200 C 30 120 60 110 70 100 C 160 60 190 150 140 140 C 100 130 190 60 260 40"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={
                        isInView
                          ? { pathLength: 1, opacity: 1 }
                          : { pathLength: 0, opacity: 0 }
                      }
                      transition={{
                        duration: 1.6,
                        ease: "easeInOut",
                        delay: 0.2,
                      }}
                    />

                    {/* Arrow head */}
                    <m.path
                      d="M240 30 L260 40 L252 65"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={
                        isInView
                          ? { pathLength: 1, opacity: 1 }
                          : { pathLength: 0, opacity: 0 }
                      }
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 1.4,
                      }}
                    />
                  </m.svg>

                </div>

                <div className="relative lg:sticky lg:top-24 z-10">
                  {/* Decorative Square (Outside Clipped Container) */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 border-4 border-indigo-400/30 rounded-2xl animate-spin-slow z-0 hidden lg:block backdrop-blur-sm" />

                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full shadow-2xl border-[6px] border-white bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                      alt="Luxury Hotel Lobby"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </m.div>

          {/* Development Process Section (Simple & Professional) */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pt-20 border-t border-slate-100"
          >
            <div className="text-center mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                How We Deliver
                <br />
                Hotel Management Software
              </h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                A streamlined, transparent roadmap to bring your custom hospitality solution to life.
              </p>
            </div>

            <div className="flex md:hidden justify-end items-center gap-2 mb-4 text-orange-500 font-medium animate-pulse px-4">
              <span className="text-sm">Swipe</span>
              <FaArrowRight />
            </div>

            <div
              className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible gap-4 md:gap-8 pb-8 md:pb-0 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {processSteps.map((step, index) => (
                <div key={index} className="min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-center relative group p-8 bg-slate-50/50 rounded-3xl hover:bg-white border border-slate-100 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:border-orange-100 transition-all duration-300">
                  <span className="absolute top-6 right-8 text-6xl font-black text-slate-100 group-hover:text-orange-50 transition-colors select-none">
                    0{index + 1}
                  </span>

                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </m.div>

          {/* Who Can Benefit (Grid Design) */}
          <div className="pt-20 border-t border-slate-100 overflow-hidden">
            <RevealSection className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Who Can Benefit from{" "}
                <span
                  className="relative inline-block text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #ffffff, 4px 6px 0px #ff582336",
                  }}
                >
                  Our Solutions
                </span>
              </h3>
            </RevealSection>

            <div className="flex flex-wrap justify-center gap-6">
              {beneficiaries.map((item, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative flex flex-col items-center justify-center p-6 w-40 md:w-48 aspect-square bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-100 transition-all duration-300 cursor-default"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-50 transition-transform duration-500 rounded-t-3xl" />

                  <div className="w-14 h-14 rounded-2xl bg-orange-50 group-hover:bg-orange-500 text-orange-500 group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                    {getIcon(i)}
                  </div>
                  <span className="font-bold text-slate-800 text-center leading-tight group-hover:text-orange-600 transition-colors">
                    {item}
                  </span>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>             
  );
};
