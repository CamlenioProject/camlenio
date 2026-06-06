"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  ShieldCheck,
  BarChart3,
  Eye,
  MousePointerClick,
  Palette,
  UserCheck,
  Rocket,
  Megaphone,
  Headphones
} from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { useRouter } from "next/navigation";

export default function BenefitsSection() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const benefits = [
    {
      title: "Perfect Search Engine Rankings",
      description: "Dominate the first page and ensure your target audience finds you first with our data-driven SEO strategies.",
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Higher Website Traffic & Leads",
      description: "Convert browsers into buyers with optimized user journeys and high-performance landing pages.",
      icon: <Users className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Strong Brand Awareness",
      description: "Build a lasting impression with a cohesive brand identity that resonates with your core audience.",
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Data Driven Marketing",
      description: "Stop guessing and start growing with marketing decisions backed by real-time consumer data.",
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Improved Online Visibility",
      description: "Be everywhere your customers are. Our multi-channel approach ensures maximum digital footprint.",
      icon: <Eye className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Improved Consumer Attention",
      description: "Capture and keep attention in a crowded marketplace with engaging content and creative design.",
      icon: <MousePointerClick className="w-6 h-6 text-orange-500" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
      },
    },
  };

  return (
    <div className="w-full relative z-10 bg-transparent py-12">

      {/* 1. Benefits Section */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Benefits of Partnering With Us!
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <motion.div
          variants={isMounted ? containerVariants : undefined}
          initial={isMounted ? "hidden" : "visible"}
          whileInView={isMounted ? "visible" : undefined}
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={isMounted ? itemVariants : undefined}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card p-8 rounded-[2rem] bg-white/70 backdrop-blur-md border border-white/20 shadow-sm hover:bg-white/85 hover:shadow-sm transition-all duration-300 flex flex-col text-left"
            >
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-sm font-sans text-slate-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 2. Why Choose Us Section */}
      <section className="px-6 md:px-12 py-10 max-w-6xl mx-auto">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-sm">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                Why Choose Camlenio?
              </h2>
              <p className="text-base md:text-lg font-sans text-slate-300 mb-8 leading-relaxed">
                Camlenio stands out as a reliable web development Company in Jaipur because of our dedication to performance and quality. Our expertise in market trends and consumer behavior to create campaigns that deliver real business growth.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3 select-none pointer-events-none">
                  <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-orange-100 flex items-center justify-center text-orange-850 font-bold">JD</div>
                  <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-orange-200 flex items-center justify-center text-orange-950 font-bold">AS</div>
                  <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-orange-50 flex items-center justify-center text-orange-900 font-bold">MK</div>
                </div>
                <div className="text-white text-left">
                  <div className="font-bold text-sm md:text-base">Trusted by 200+ Businesses</div>
                  <div className="text-xs md:text-sm opacity-70">Across Jaipur and Beyond</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12 text-left">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                  <div className="text-orange-400 font-bold mb-1">Methodical</div>
                  <div className="text-white text-xs md:text-sm">Execution &amp; Tech</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                  <div className="text-orange-400 font-bold mb-1">Strategic</div>
                  <div className="text-white text-xs md:text-sm">Market Insights</div>
                </div>
              </div>
              <div className="space-y-4 text-left">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                  <div className="text-orange-400 font-bold mb-1">Creative</div>
                  <div className="text-white text-xs md:text-sm">Design Excellence</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                  <div className="text-orange-400 font-bold mb-1">Focused</div>
                  <div className="text-white text-xs md:text-sm">ROI Outcomes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom Grid Services Section */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-left">

          {/* Website Design Company Jaipur */}
          <div className="md:col-span-8 glass-card p-8 rounded-[2rem] bg-white/70 backdrop-blur-md border border-white/20 shadow-sm hover:bg-white/85 hover:shadow-sm transition-all duration-300 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-semibold mb-6">
                <Palette className="w-3.5 h-3.5" />
                <span>Creative Design</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Your Reliable SEO agency in India specializes in</h3>
              <p className="text-sm md:text-base font-sans text-slate-600 max-w-lg leading-relaxed">
                We craft high performance websites that blend aesthetic elegance with technical precision, ensuring your digital presence is both beautiful and functional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mt-8">
              <img
                alt="Web Design Expertise"
                className="w-full sm:w-1/2 h-44 object-cover rounded-xl"
                src="/Homepage/aboutus_image.png"
              />
              <Button size="xl" className="w-full sm:w-auto" onClick={() => router.push("/contact")}>
                Get Started
              </Button>
            </div>
          </div>

          {/* Column Cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="glass-card p-6 rounded-[2rem] bg-white/70 backdrop-blur-md border border-white/20 shadow-sm hover:bg-white/85 hover:shadow-sm transition-all duration-300 flex-1 flex flex-col justify-start">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-orange-505" style={{ color: "#f97316" }} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Online Reputation Management</h4>
              <p className="text-xs md:text-sm font-sans text-slate-600 leading-relaxed">Protect and grow your brand's digital integrity across all platforms.</p>
            </div>

            <div className="p-6 rounded-[2rem] bg-orange-500 border border-orange-500/20 shadow-sm hover:scale-[1.02] hover:-translate-y-1 hover:shadow-sm transition-all duration-300 flex-1 flex flex-col justify-start text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Conversion-Focused Strategies</h4>
              <p className="text-xs md:text-sm font-sans text-white/80 leading-relaxed">Turning visitors into loyal customers through rigorous optimization.</p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="md:col-span-6 glass-card p-8 rounded-[2rem] bg-white/70 backdrop-blur-md border border-white/20 shadow-sm hover:bg-white/85 hover:shadow-sm transition-all duration-300 flex items-center gap-6">
            <div className="bg-orange-50 p-4 rounded-2xl shrink-0 flex items-center justify-center text-orange-600">
              <Megaphone className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">Branding &amp; Creative Marketing</h4>
              <p className="text-sm font-sans text-slate-600 leading-relaxed">Crafting narratives that capture hearts and markets.</p>
            </div>
          </div>

          <div className="md:col-span-6 glass-card p-8 rounded-[2rem] bg-white/70 backdrop-blur-md border border-white/20 shadow-sm hover:bg-white/85 hover:shadow-sm transition-all duration-300 flex items-center gap-6">
            <div className="bg-slate-100 p-4 rounded-2xl shrink-0 flex items-center justify-center text-slate-600">
              <Headphones className="w-8 h-8 text-slate-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">Complete Digital Marketing Support</h4>
              <p className="text-sm font-sans text-slate-600 leading-relaxed">Your end-to-end partner for sustainable online growth.</p>
            </div>
          </div>

        </div>
      </section >

    </div >
  );
}
