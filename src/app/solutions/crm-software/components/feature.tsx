"use client";
import { StickyScrollGSAP } from "@/app/components/sticky-scroll-reveal";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const content = [
  {
    title: "Custom CRM Software Development",
    description:
      "Fully customized CRM platforms designed to manage leads, customers, sales pipelines, and support processes.",
    imageSrc: "/ServiceDropdown/crmsoftware/crm-setup.webp",
  },
  {
    title: "Cloud-Based CRM Development",
    description:
      "Secure, high-performance CRM solutions hosted on cloud infrastructure for easy access and scalability.",
    imageSrc: "/ServiceDropdown/crmsoftware/sales-automation.webp",
  },
  {
    title: "Web & Mobile CRM Application Development",
    description:
      "Responsive web CRM and mobile CRM apps for sales teams, managers, and customer support teams.",
    imageSrc: "/ServiceDropdown/crmsoftware/data-analytics.webp",
  },
  {
    title: "Sales & Marketing Automation CRM",
    description:
      "Automate lead tracking, follow-ups, campaigns, and customer journeys using intelligent CRM workflows.",
    imageSrc: "/ServiceDropdown/crmsoftware/third-party-integrations.webp",
  },
  {
    title: "CRM Integration Services",
    description:
      "Integrate your CRM with payment gateways, ERP systems, accounting tools, email platforms, and third-party APIs.",
    imageSrc: "/ServiceDropdown/crmsoftware/crm-integration.webp",
  },
  {
    title: "CRM Migration & Upgrade Services",
    description:
      "Migrate from legacy systems or upgrade existing CRM platforms without data loss or downtime.",
    imageSrc: "/ServiceDropdown/crmsoftware/crm-upgrade-services.webp",
  },
  {
    title: "CRM Support & Maintenance",
    description:
      "Ongoing CRM optimization, performance monitoring, and feature enhancements.",
    imageSrc: "/ServiceDropdown/crmsoftware/crm-support .webp",
  },
];

// Fallback component for mobile if StickyScroll isn't responsive
function MobileContentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === content.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? content.length - 1 : prev - 1));
  };

  return (
    <div className="md:hidden w-full px-4">
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <div className="relative h-64 w-full">
          <Image
            src={content[currentIndex].imageSrc}
            alt={content[currentIndex].title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {content[currentIndex].title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {content[currentIndex].description}
          </p>
          
          <div className="flex items-center justify-between mt-6">
            <div className="flex space-x-2">
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-orange-500 w-6' 
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-colors"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2"
        >
          Our CRM Software{" "}
          <span
            className="text-orange-500 inline-block"
            style={{
              textShadow:
                "-0.5px -0.5px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
            }}
          >
            Development Services
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12 font-sans text-center px-4 sm:px-6"
        >
          We offer comprehensive CRM software development services that cover
          the entire lifecycle from planning to deployment and support.
        </motion.p>
      </div>

      {/* Content Section - Different components for mobile and desktop */}
      <div className="w-full">
        {/* Desktop/Large Tablet - StickyScroll */}
        <div className="hidden md:block">
          <StickyScrollGSAP content={content} />
        </div>
        
        {/* Mobile - Fallback Carousel */}
        <MobileContentCarousel />
        
        {/* Alternative Mobile Layout: Grid View */}
        <div className="md:hidden px-4 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}