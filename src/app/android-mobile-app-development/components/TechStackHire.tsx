"use client";

import { LazyMotion, domMax, m, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Smartphone, Server, Cloud, Database, ArrowRight, ArrowUpRight, Globe, Users2, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";

// --- Data ---
const technologies = [
  {
    name: "Kotlin & Java",
    category: "Languages",
    description: "Native development for maximum performance and device control.",
    icon: Code2,
    color: "from-purple-900/90 to-indigo-900/90",
    image: "/mobappdev/android_dev.png",
  },
  {
    name: "Android Jetpack",
    category: "Framework",
    description: "Modern components for robust, backward-compatible architectures.",
    icon: Smartphone,
    color: "from-green-900/90 to-emerald-900/90",
    image: "/mobappdev/ui_ux.png",
  },
  {
    name: "RESTful APIs",
    category: "Connectivity",
    description: "Seamless integration with third-party services and data sources.",
    icon: Server,
    color: "from-blue-900/90 to-cyan-900/90",
    image: "/mobappdev/enterprise.png",
  },
  {
    name: "Cloud Solutions",
    category: "Backend",
    description: "Scalable serverless backends using Firebase and AWS.",
    icon: Cloud,
    color: "from-orange-900/90 to-red-900/90",
    image: "/mobappdev/testing.png",
  },
  {
    name: "Secure DBs",
    category: "Storage",
    description: "Encrypted local and cloud database management.",
    icon: Database,
    color: "from-pink-900/90 to-rose-900/90",
    image: "/mobappdev/android_dev.png",
  },
];

const hireBenefits = [
  { title: "Dedicated Teams", icon: Users2 },
  { title: "Flexible Models", icon: Globe },
  { title: "Business Growth", icon: Rocket },
];

export default function TechStackHire() {
  const router = useRouter();
  const containerRef = useRef(null);
  const [activeTech, setActiveTech] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <LazyMotion features={domMax}>
      <section ref={containerRef} className="py-16 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

          {/* --- TECHNOLOGIES SECTION --- */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <m.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                >
                  Technologies {" "}
                  <span
                    className="text-orange-500"
                    style={{
                      textShadow:
                        "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                    }}
                  >
                    We Command
                  </span>
                </m.h2>
                <m.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-gray-600 max-w-xl"
                >
                  Our Android developers use modern tools and frameworks to build robust and scalable apps that stand the test of time.
                </m.p>
              </div>
            </div>

            {/* Interactive Expanding Cards - Optimized for Low RAM */}
            <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[450px] w-full select-none transform-gpu">
              {technologies.map((tech, index) => {
                const isActive = activeTech === index;
                return (
                  <m.div
                    key={index}
                    layout
                    onHoverStart={() => setActiveTech(index)}
                    onClick={() => setActiveTech(index)}
                    initial={false}
                    animate={{
                      flex: isActive ? 3 : 1,
                    }}
                    transition={{
                      layout: { type: "spring", stiffness: 120, damping: 20 },
                      flex: { type: "spring", stiffness: 120, damping: 20 }
                    }}
                    className={`relative rounded-[2.5rem] overflow-hidden cursor-pointer group will-change-transform ${isActive ? '' : 'hover:scale-[0.98]'}`}
                  >
                    {/* --- BACKGROUND IMAGE --- */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={tech.image}
                        alt={tech.name}
                        fill
                        priority={index < 2}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={`object-cover transition-transform duration-700 ease-out ${isActive ? 'scale-105' : 'scale-100 grayscale'}`}
                      />
                    </div>

                    {/* Overlays */}
                    <div className={`absolute inset-0 z-10 bg-black/60 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`} />
                    <div className={`absolute inset-0 z-10 bg-gradient-to-br ${tech.color} mix-blend-multiply transition-opacity duration-500 ease-linear ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                    {/* Content Container */}
                    <div className="relative z-20 h-full p-6 md:p-8 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 border border-white/20 ${isActive ? 'bg-white/20 text-white' : 'bg-black/40 text-white'}`}
                        >
                          <tech.icon className="w-6 h-6" />
                        </div>
                        <m.div
                          animate={{ opacity: isActive ? 1 : 0, rotate: isActive ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white bg-white/10"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </m.div>
                      </div>

                      {!isActive && (
                        <m.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap"
                        >
                          <span className="text-xl font-bold text-white uppercase tracking-widest drop-shadow-md">{tech.category}</span>
                        </m.div>
                      )}

                      <div className="relative overflow-hidden w-full">
                        <m.div
                          animate={{ y: isActive ? 0 : 10, opacity: isActive ? 1 : 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <span className={`text-xs font-bold uppercase tracking-widest mb-1 block text-white/80`}>
                            {tech.category}
                          </span>
                          <h3 className={`text-2xl md:text-3xl font-bold leading-tight mb-2 text-white`}>
                            {tech.name}
                          </h3>

                          <div className={`transition-all duration-500 ease-out overflow-hidden ${isActive ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}>
                            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-sm">
                              {tech.description}
                            </p>
                          </div>
                        </m.div>
                      </div>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>

          {/* --- HIRE SECTION: EXECUTIVE PROFILE STACK --- */}
          <div className="relative">

            <m.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="relative rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 shadow-2xl shadow-black/50 overflow-hidden p-8 md:p-12 lg:p-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Content */}
                <div className="space-y-8 order-2 lg:order-1">

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
                    Hire Android App <br />
                    <span
                    className="text-orange-500"
                    style={{
                      textShadow:
                        "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                    }}
                  >
                      Developers in India
                    </span>
                  </h2>

                  <div className="text-lg text-gray-400 leading-relaxed space-y-4">
                    <p>
                      Looking to hire Android app developers in India? Camlenio offers dedicated development teams and flexible engagement models to match your project requirements and budget.
                    </p>
                    <p>
                      Whether you’re building a new Android app or upgrading an existing one, we deliver reliable mobile solutions that drive business growth.
                    </p>
                  </div>

                  <div className="pt-6">
                    <Button
                      variant="default"
                      size="xl"
                      className="rounded-full pl-8 pr-2 py-2 h-auto gap-4 bg-white text-black hover:bg-gray-200 shadow-lg shadow-white/10 transition-all duration-300 group cursor-pointer"
                      onClick={() => router.push('/contact')}
                    >
                      <span className="text-base uppercase tracking-wide font-bold">Book Discovery Call</span>
                      <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                        <ArrowRight className="w-5 h-5 text-black" />
                      </div>
                    </Button>
                  </div>
                </div>

                {/* Right Visual: Profile Cards Stack */}
                <div className="relative order-1 lg:order-2 min-h-[450px] flex items-center justify-center">
                  {/* Abstract background elements */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-100/50 to-transparent opacity-60 rounded-full blur-2xl transform scale-75" />

                  {/* Card 1: Backend (Top Right) */}
                  <m.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-0 right-4 md:right-12 bg-white p-5 rounded-2xl shadow-lg border border-gray-100 w-60 z-10 rotate-[6deg] opacity-90 scale-90"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">JD</div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">Backend Lead</div>
                        <div className="text-xs text-gray-400">8+ Years Experience</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-gray-50 rounded text-[10px] text-gray-500 font-bold">Node.js</span>
                      <span className="px-2 py-1 bg-gray-50 rounded text-[10px] text-gray-500 font-bold">AWS</span>
                    </div>
                  </m.div>

                  {/* Card 2: UI/UX (Bottom Left) */}
                  <m.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-2 left-4 md:left-2 bg-white p-5 rounded-2xl shadow-lg border border-gray-100 w-60 z-40 rotate-[6deg] scale-90"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold shrink-0">SK</div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">UI/UX Engineer</div>
                        <div className="text-xs text-gray-400">5+ Years Experience</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-gray-50 rounded text-[10px] text-gray-500 font-bold">Figma</span>
                      <span className="px-2 py-1 bg-gray-50 rounded text-[10px] text-gray-500 font-bold">Tailwind</span>
                    </div>
                  </m.div>

                  {/* Card 3: Main Android (Center) */}
                  <m.div
                    whileHover={{ scale: 1.05 }}
                    className="relative bg-white p-6 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] border border-orange-100 w-72 z-30 transform hover:-rotate-1 transition-all duration-300"
                  >
                    <div className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white shadow-sm">
                      AVAILABLE
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0">
                        AD
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">Senior Android</div>
                        <div className="text-sm text-orange-600 font-medium">Expert Developer</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Experience</span>
                        <span className="font-bold text-gray-900">6+ Years</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Tech Stack</span>
                        <span className="font-bold text-gray-900">Kotlin, Jetpack</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Location</span>
                        <span className="font-bold text-gray-900">Bangalore, IN</span>
                      </div>
                    </div>

                    <button className="w-full py-3 bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold rounded-xl text-sm transition-colors mb-4 border border-gray-200 cursor-pointer">
                      View Profile
                    </button>

                    <div className="flex justify-center items-center gap-2 text-[10px] text-green-600 font-bold bg-green-50 py-1.5 rounded-lg border border-green-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Verified by Camlenio
                    </div>
                  </m.div>

                </div>
              </div>
            </m.div>
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}
