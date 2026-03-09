"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const services = [
  {
    title: "Custom iPhone App Development",
    category: "Development",
    readTime: "Core Service",
    description: "We build tailored iPhone solutions from scratch, ensuring they align perfectly with your unique business goals and user requirements.",
    image: "/mobappdev/android_dev.png",
    longDesc: "Our custom iPhone development service brings your vision to life using the latest iOS technologies. We handle everything from initial concept and architecture to development, rigorous testing, and App Store deployment."
  },
  {
    title: "Enterprise iOS Applications",
    category: "Enterprise",
    readTime: "Scalable",
    description: "Secure and scalable iOS systems for large operations.",
    image: "/mobappdev/enterprise.png",
    longDesc: "We engineer robust enterprise-grade iOS applications capable of handling massive user loads and complex workflows."
  },
  {
    title: "UI/UX Design for iPhone Apps",
    category: "Design",
    readTime: "Creative",
    description: "Intuitive interfaces following Apple's Human Interface Guidelines.",
    image: "/mobappdev/ui_ux.png",
    longDesc: "User experience is at the heart of our design process. We create visually stunning and highly intuitive interfaces."
  },
  {
    title: "API & Third-Party Integrations",
    category: "Integration",
    readTime: "Seamless",
    description: "Connecting apps with existing backends & cloud services.",
    image: "/mobappdev/enterprise.png",
    longDesc: "Extend your iPhone app's functionality with our seamless integration services."
  },
  {
    title: "iPhone App Testing & QA",
    category: "Quality",
    readTime: "Bug-free",
    description: "Rigorous testing for high-performance iOS apps.",
    image: "/mobappdev/testing.png",
    longDesc: "Delivering a crash-free experience is our priority. Our QA team performs rigorous automated and manual testing."
  },
  {
    title: "App Store Deployment",
    category: "Launch",
    readTime: "Support",
    description: "Complete management of the App Store launch process.",
    image: "/mobappdev/ui_ux.png",
    longDesc: "We handle the entire App Store submission process, including ASO and compliance checks."
  },
  {
    title: "Maintenance & Optimization",
    category: "Support",
    readTime: "Ongoing",
    description: "Continuous updates and performance monitoring.",
    image: "/mobappdev/android_dev.png",
    longDesc: "We provide ongoing maintenance plans to keep your iPhone application running smoothly."
  },
];

const industries = [
  {
    title: "Fintech & Banking Apps",
    category: "Finance",
    readTime: "Secure",
    description: "Secure payment and transaction apps for iOS.",
    image: "/mobappdev/enterprise.png",
    longDesc: "We build high-security fintech applications that power seamless transactions on iPhone."
  },
  {
    title: "E-commerce iPhone Apps",
    category: "Retail",
    readTime: "Growth",
    description: "Shopping, inventory & order management on iOS.",
    image: "/mobappdev/ui_ux.png",
    longDesc: "Transform your retail business with feature-rich e-commerce apps optimized for iPhone."
  },
  {
    title: "Healthcare & Medical Apps",
    category: "Health",
    readTime: "Care",
    description: "Appointment booking & patient management apps.",
    image: "/mobappdev/testing.png",
    longDesc: "Empowering healthcare providers with telemedicine and health tracking apps."
  },
  {
    title: "Real Estate Apps",
    category: "Property",
    readTime: "Listings",
    description: "Property listing and management solutions.",
    image: "/mobappdev/enterprise.png",
    longDesc: "Streamlining property buying, selling, and renting with iOS apps."
  },
  {
    title: "Logistics & On-Demand Apps",
    category: "Logistics",
    readTime: "Track",
    description: "Tracking and service-based applications for iOS.",
    image: "/mobappdev/android_dev.png",
    longDesc: "Optimize your supply chain with real-time tracking and fleet management apps."
  },
  {
    title: "Education & EdTech Apps",
    category: "Education",
    readTime: "Learn",
    description: "Interactive learning and e-learning platforms.",
    image: "/mobappdev/enterprise.png",
    longDesc: "Build engaging educational platforms with interactive content for iOS devices."
  },
];

export default function Expertise() {
  const [activeTab, setActiveTab] = useState<"services" | "industries">("services");

  const tabContent = {
    services: {
      title: "Core Expertise & iPhone Services",
      description: "We offer end-to-end iPhone app development services using Swift, SwiftUI, and industry best practices to ensure performance and scalability.",
      data: services
    },
    industries: {
      title: "Solutions for Every Industry",
      description: "We develop iPhone applications across multiple industries, helping businesses stay competitive in the mobile-first world.",
      data: industries
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl mb-8">
            {(["services", "industries"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${activeTab === tab
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.2] mb-6 tracking-tight">
            {currentContent.title}
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">
            {currentContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {currentContent.data.map((item, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-8 border border-orange-100 shadow-inner group-hover:bg-slate-900 group-hover:border-slate-800 transition-colors duration-500">
                  <Sparkles className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    {item.readTime}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                  {item.description}
                </p>

                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                  Learn more
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
