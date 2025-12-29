"use client";

import { useState } from "react";
import { LazyMotion, domMax, m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaShoppingCart,
  FaTshirt,
  FaLightbulb,
  FaPalette,
  FaCogs,
  FaPlug,
  FaCode,
  FaSyncAlt,
  FaMobileAlt,
  FaUserTie,
} from "react-icons/fa";
import Link from "next/link";

interface Feature {
  id: number;
  title: string;
  icon: React.ReactElement;
  desc: string;
  img: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "B2B & B2C Marketplace Development",
    icon: <FaShoppingCart />,
    desc: "Build robust multi-vendor marketplaces with advanced dashboards, pricing models, workflows, and seamless UX.",
    img: "/ServiceDropdown/ecommercedevelopment/first1.png",
  },
  {
    id: 2,
    title: "Niche & Fashion Ecommerce Software",
    icon: <FaTshirt />,
    desc: "Branded ecommerce platforms with AI search, personalization, and premium UI/UX.",
    img: "/ServiceDropdown/ecommercedevelopment/second2.png",
  },
  {
    id: 3,
    title: "Ecommerce Consulting & Strategy",
    icon: <FaLightbulb />,
    desc: "Data-driven consulting to improve UX, conversions, and long-term growth.",
    img: "/ServiceDropdown/ecommercedevelopment/third3.png",
  },
  {
    id: 4,
    title: "Ecommerce Website & Web App Design",
    icon: <FaPalette />,
    desc: "Conversion-optimized ecommerce interfaces that elevate brand presence.",
    img: "/ServiceDropdown/ecommercedevelopment/fourth4.png",
  },
  {
    id: 5,
    title: "Custom Ecommerce Software Solutions",
    icon: <FaCogs />,
    desc: "Tailor-made ecommerce systems built around your business logic.",
    img: "/ServiceDropdown/ecommercedevelopment/fifth5.png",
  },
  {
    id: 6,
    title: "Ecommerce System Implementation",
    icon: <FaPlug />,
    desc: "Integration with payment gateways, CRM, POS, inventory, analytics, and more.",
    img: "/ServiceDropdown/ecommercedevelopment/sixth6.png",
  },
  {
    id: 7,
    title: "Frontend & Backend Ecommerce Development",
    icon: <FaCode />,
    desc: "Pixel-perfect frontend with secure, scalable backend architecture.",
    img: "/ServiceDropdown/ecommercedevelopment/sixth6.png",
  },
  {
    id: 8,
    title: "Maintenance & Migration Services",
    icon: <FaSyncAlt />,
    desc: "Migrate, optimize, and future-proof your ecommerce platform.",
    img: "/ServiceDropdown/ecommercedevelopment/sixth6.png",
  },
  {
    id: 9,
    title: "Ecommerce Mobile App Development",
    icon: <FaMobileAlt />,
    desc: "High-performance mobile shopping apps with secure checkout.",
    img: "/ServiceDropdown/ecommercedevelopment/sixth6.png",
  },
  {
    id: 10,
    title: "Hire Dedicated Ecommerce Developers",
    icon: <FaUserTie />,
    desc: "Scale faster with dedicated ecommerce experts in your team.",
    img: "/ServiceDropdown/ecommercedevelopment/sixth6.png",
  },
];

export default function EcommerceServices() {
  const [activeId, setActiveId] = useState<number>(features[0].id);
  const activeFeature = features.find((f) => f.id === activeId)!;

  return (
    <LazyMotion features={domMax}>
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-6 ">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ willChange: "transform" }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Our{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              {" "}
              Ecommerce{" "}
            </span>{" "}
            Development Services{" "}
          </h2>{" "}
          <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base font-sans">
            {" "}
            We provide end-to-end ecommerce software services tailored to your
            unique business goals:{" "}
          </p>{" "}
        </m.div>
        <div className="max-w-7xl mx-auto">
          {/* Premium Card Container */}
          <div className="rounded-2xl sm:rounded-3xl bg-white shadow-2xl shadow-orange-200/20 overflow-hidden border border-orange-100/50">
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] xl:grid-cols-[400px_1fr] lg:h-[480px]">
              {/* LEFT SIDEBAR - Scrollable */}
              <div className="relative bg-gradient-to-br from-orange-50/80 via-orange-50/50 to-white/80 border-b lg:border-b-0 lg:border-r border-orange-100/60 backdrop-blur-sm">
                <div
                  data-lenis-prevent
                  className="overflow-y-auto h-[300px] sm:h-[400px] lg:h-[500px] px-3 sm:px-4 py-3 space-y-1.5 scrollbar-thin scrollbar-thumb-orange-300/60 scrollbar-track-transparent hover:scrollbar-thumb-orange-400/80"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "rgba(251, 146, 60, 0.6) transparent",
                  }}
                >
                  {features.map((feature) => {
                    const isActive = feature.id === activeId;

                    return (
                      <m.button
                        key={feature.id}
                        onClick={() => setActiveId(feature.id)}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        className={`relative w-full flex items-center gap-3 p-3 sm:p-3.5 rounded-xl cursor-pointer text-left transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-orange-200/70 to-orange-100/50 shadow-md shadow-orange-200/50"
                            : "hover:bg-orange-50/60 hover:shadow-sm"
                        }`}
                      >
                        {/* Active Indicator */}
                        {isActive && (
                          <m.span
                            layoutId="activeIndicator"
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-10 sm:h-12 w-1 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full shadow-lg shadow-orange-500/50"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 28,
                            }}
                          />
                        )}

                        {/* Icon */}
                        <div
                          className={`flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl transition-all duration-300 flex-shrink-0 ${
                            isActive
                              ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/40"
                              : "bg-white text-orange-500 shadow-sm"
                          }`}
                        >
                          <span className="text-base sm:text-lg">
                            {feature.icon}
                          </span>
                        </div>

                        {/* Title */}
                        <span
                          className={`text-xs sm:text-sm font-medium leading-tight transition-colors duration-300 ${
                            isActive ? "text-orange-800" : "text-gray-700"
                          }`}
                        >
                          {feature.title}
                        </span>
                      </m.button>
                    );
                  })}
                </div>

                {/* Bottom Gradient Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-orange-50/95 to-transparent pointer-events-none lg:hidden" />
              </div>

              {/* RIGHT CONTENT - Fixed/Centered */}
              <div className="relative flex items-center justify-center p-6 sm:p-8 lg:p-10 xl:p-12 min-h-[400px] sm:min-h-[500px] lg:min-h-[500px] xl:min-h-[600px] bg-gradient-to-br from-white via-orange-50/10 to-white">
                <AnimatePresence mode="wait">
                  <m.div
                    key={activeFeature.id}
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.96 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 25,
                      opacity: { duration: 0.2 },
                    }}
                    className="w-full max-w-4xl"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
                      {/* Text Content */}
                      <div className="space-y-3 sm:space-y-4 order-2 md:order-1">
                        <m.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent leading-tight mb-3 sm:mb-4">
                            {activeFeature.title}
                          </h3>
                        </m.div>

                        <m.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.15 }}
                          className="text-sm sm:text-base text-gray-600 leading-relaxed"
                        >
                          {activeFeature.desc}
                        </m.p>
                        <Link href="/component/company/contact">
                          <m.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm sm:text-base font-medium rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
                          >
                            Learn More
                          </m.button>
                        </Link>
                      </div>

                      {/* Image */}
                      <m.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 180,
                          damping: 20,
                          delay: 0.1,
                        }}
                        className="relative h-48 sm:h-64 md:h-72 lg:h-80 order-1 md:order-2"
                      >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-orange-200/30 bg-gradient-to-br from-orange-50 to-white p-4 sm:p-6">
                          <Image
                            src={activeFeature.img}
                            alt={activeFeature.title}
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                          />
                        </div>
                      </m.div>
                    </div>
                  </m.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        @media (min-width: 1024px) {
          .scrollbar-thin::-webkit-scrollbar {
            width: 6px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background: transparent;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background: rgba(251, 146, 60, 0.6);
            border-radius: 10px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb:hover {
            background: rgba(251, 146, 60, 0.8);
          }
        }
      `}</style>
    </LazyMotion>
  );
}
