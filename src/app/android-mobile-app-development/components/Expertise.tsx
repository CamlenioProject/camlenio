"use client";

import { useState } from "react";
import { LazyMotion, domMax, m, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, Layers, Smartphone, Sparkles, X } from "lucide-react";
import Image from "next/image";


const services = [
  {
    title: "Custom Android App Development",
    category: "Development",
    readTime: "Core Service",
    description: "We build tailored Android solutions from scratch, ensuring they align perfectly with your unique business goals and user requirements.",
    image: "/mobappdev/android_dev.png",
    longDesc: "Our custom Android development service is designed to bring your unique vision to life. We handle everything from initial concept and architecture to development, testing, and deployment. By using native Kotlin/Java or cross-platform technologies, we ensure your app performs flawlessly on the diverse Android ecosystem."
  },
  {
    title: "Enterprise Android Applications",
    category: "Enterprise",
    readTime: "Scalable",
    description: "Secure and scalable systems for large operations.",
    image: "/mobappdev/enterprise.png",
    longDesc: "We engineer robust enterprise-grade Android applications capable of handling massive user loads and complex workflows. Our solutions prioritize security, scalability, and seamless integration with your existing ERP, CRM, and cloud infrastructure."
  },
  {
    title: "UI/UX Design for Android Apps",
    category: "Design",
    readTime: "Creative",
    description: "Intuitive interfaces focused on user engagement.",
    image: "/mobappdev/ui_ux.png",
    longDesc: "User experience is at the heart of our design process. We create visually stunning and highly intuitive interfaces that ensure high user retention. Our design team follows Material Design guidelines while infusing your brand identity into every pixel."
  },
  {
    title: "API & Third-Party Integrations",
    category: "Integration",
    readTime: "Seamless",
    description: "Connecting apps with existing backends & cloud.",
    image: "/mobappdev/enterprise.png",
    longDesc: "Extend your app's functionality with our seamless integration services. Whether it's payment gateways, social media logins, geolocation services, or connecting to legacy backend systems, we ensure smooth and secure data exchange."
  },
  {
    title: "Android App Testing & QA",
    category: "Quality",
    readTime: "Bug-free",
    description: "Rigorous testing for high-performance apps.",
    image: "/mobappdev/testing.png",
    longDesc: "Delivering a crash-free experience is our priority. Our QA team performs rigorous automated and manual testing across a wide range of devices and Android versions to identify and fix bugs, ensure performance optimization, and guarantee security compliance."
  },
  {
    title: "Google Play Store Deployment",
    category: "Launch",
    readTime: "Support",
    description: "Complete management of the launch process.",
    image: "/mobappdev/ui_ux.png",
    longDesc: "Launching is just the beginning. We handle the entire Play Store submission process, including listing optimization, compliance checks, and managing release tracks. We also provide post-launch support to ensure your app stays compatible with new OS updates."
  },
  {
    title: "Maintenance & Optimization",
    category: "Support",
    readTime: "Ongoing",
    description: "Continuous updates and performance monitoring.",
    image: "/mobappdev/android_dev.png",
    longDesc: "We provide ongoing maintenance plans to keep your application running smoothly. From security patches and performance tuning to feature enhancements and OS version updates, we ensure your app remains competitive and efficient."
  },
];

const industries = [
  {
    title: "Fintech & Banking Apps",
    category: "Finance",
    readTime: "Secure",
    description: "Secure payment and transaction apps.",
    image: "/mobappdev/enterprise.png",
    longDesc: "We build high-security fintech applications that power seamless transactions, digital wallets, and banking operations. Compliant with financial regulations, our apps ensure data integrity and user trust."
  },
  {
    title: "E-commerce Android Apps",
    category: "Retail",
    readTime: "Growth",
    description: "Shopping, inventory & order management.",
    image: "/mobappdev/ui_ux.png",
    longDesc: "Transform your retail business with feature-rich e-commerce apps. We integrate smart search, secure checkouts, and real-time inventory management to deliver a superior shopping experience."
  },
  {
    title: "Healthcare & Medical Apps",
    category: "Health",
    readTime: "Care",
    description: "Appointment booking & patient management.",
    image: "/mobappdev/testing.png",
    longDesc: "Empowering healthcare providers with telemedicine, appointment scheduling, and patient record management apps. We prioritize HIPAA compliance and intuitive interfaces for patients and doctors alike."
  },
  {
    title: "Real Estate Apps",
    category: "Property",
    readTime: "Listings",
    description: "Property listing and management solutions.",
    image: "/mobappdev/enterprise.png",
    longDesc: " streamlining property buying, selling, and renting. Our real estate apps feature virtual tours, geolocation maps, and direct agent communication tools."
  },
  {
    title: "Logistics & On-Demand Apps",
    category: "Logistics",
    readTime: "Track",
    description: "Tracking and service-based applications.",
    image: "/mobappdev/android_dev.png",
    longDesc: "Optimize your supply chain with real-time tracking and fleet management apps. We create on-demand delivery solutions that connect customers with drivers instantly."
  },
  {
    title: "Enterprise Mobility Solutions",
    category: "Corporate",
    readTime: "Efficient",
    description: "Workforce and data management apps.",
    image: "/mobappdev/enterprise.png",
    longDesc: "Boost organizational productivity with custom enterprise mobility solutions. From field force management to internal communication hubs, we digitize your core workflows."
  },
];

export default function Expertise() {
  const [activeTab, setActiveTab] = useState<"services" | "industries">("services");
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  const tabContent = {
    services: {
      title: (
        <>
          <span
            className="text-orange-500"
            style={{
              textShadow:
                "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
            }}
          >
            Custom Android App
          </span>
          <br />
          Development Services
        </>
      ),
      description: "We offer end-to-end Android app development services using modern technologies and industry best practices to ensure performance, security, and scalability.",
      data: services
    },
    industries: {
      title: (
        <>
          <span
            className="text-orange-500"
            style={{
              textShadow:
                "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
            }}
          >
            Android Apps
          </span>
          <br />
          for Every Industry
        </>
      ),
      description: "We develop Android applications across multiple industries, helping businesses stay competitive in the mobile-first world with tailored industry solutions.",
      data: industries
    }
  };

  const currentContent = tabContent[activeTab];
  const mainService = currentContent.data[0];
  const otherServices = currentContent.data.slice(1);

  return (
    <LazyMotion features={domMax}>
      <section className="relative py-20 overflow-hidden bg-transparent">

        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col items-start mb-12">
            {/* Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-gray-100/80 backdrop-blur-sm rounded-full mb-8 border border-gray-200">
              {(["services", "industries"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors z-10 cursor-pointer ${activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-900"
                    }`}
                >
                  {activeTab === tab && (
                    <m.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-orange-500 rounded-full -z-10 shadow-md"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-6">
              <div className="max-w-2xl">
                <m.h2
                  key={activeTab} // Animate text change
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1]"
                >
                  {currentContent.title}
                </m.h2>
              </div>

              <m.p
                key={`desc-${activeTab}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-gray-600 text-lg max-w-md leading-relaxed mb-2"
              >
                {currentContent.description}
              </m.p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:h-[700px]">

            {/* Left Column - Hero Card */}
            <m.div
              key={`hero-${activeTab}`} // Re-trigger animation on tab change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-[45%] flex-shrink-0 relative group rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50 bg-white flex flex-col h-[500px] lg:h-auto border border-gray-100"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={mainService.image}
                  alt={mainService.title}
                  fill
                  priority // Hero image is priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Content Content - Positioned at bottom */}
              <div className="relative z-10 p-8 md:p-12 mt-auto flex flex-col items-start text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-orange-500 text-white text-[10px] font-bold tracking-wider uppercase rounded-full">
                    {mainService.category}
                  </span>
                  <span className="text-sm font-medium text-gray-300 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-yellow-400" />
                    {mainService.readTime}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {mainService.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8 max-w-md line-clamp-3">
                  {mainService.longDesc || mainService.description}
                </p>

                {/* <button className="flex items-center gap-3 text-sm font-bold bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group-hover:pl-8 cursor-pointer">
                  Explore {activeTab === 'services' ? 'Custom Apps' : 'Solutions'}
                  <ArrowUpRight className="w-4 h-4" />
                </button> */}
              </div>
            </m.div>

            {/* Right Column - Scrollable Grid */}
            <div className="lg:w-[55%] flex flex-col h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 lg:overflow-y-auto lg:pr-2 lg:pb-4 h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                {otherServices.map((service, index) => (
                  <m.div
                    key={service.title} // Ensure unique key for proper diffing
                    layoutId={service.title} // Keep card expansion animation
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    onClick={() => setSelectedService(service)}
                    className="group relative bg-white p-4 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 flex flex-col md:flex-row gap-4 h-auto cursor-pointer will-change-transform"
                  >
                    <m.div className="w-full md:w-28 h-32 md:h-full shrink-0 relative rounded-2xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 200px"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </m.div>

                    <div className="flex flex-col flex-1 py-1">
                      <div className="flex items-center justify-between mb-1">
                        <m.span
                          className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block"
                        >
                          {service.category}
                        </m.span>
                      </div>

                      <m.h4
                        className="text-base font-bold text-gray-900 mb-1 leading-snug group-hover:text-orange-600 transition-colors"
                      >
                        {service.title}
                      </m.h4>

                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-2 flex-grow">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-50 mt-auto">
                        <span className="text-[10px] font-semibold text-gray-400">{service.readTime}</span>
                        <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 group-hover:rotate-45">
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </m.div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/30"
                onClick={() => setSelectedService(null)}
              />

              {/* Modal Container - Shared Layout */}
              <m.div
                layoutId={selectedService.title}
                className="relative w-full max-w-2xl bg-white !rounded-3xl overflow-hidden z-20 will-change-transform"
                transition={{ type: "spring", stiffness: 300, damping: 25 }} // Snappy, non-laggy response
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/10 hover:bg-black/20 text-gray-800 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col md:flex-row h-full max-h-[80vh] overflow-y-auto">
                  {/* Modal Image */}
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="w-full md:w-2/5 h-64 md:h-auto relative shrink-0 overflow-hidden bg-gray-100 will-change-transform"
                  >
                    <Image
                      src={selectedService.image}
                      alt={selectedService.title}
                      fill
                      priority
                      unoptimized // Skip server-side optimization for instant render
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                    <div className="absolute bottom-4 left-4 md:hidden text-white">
                      <span className="text-xs font-bold bg-orange-500 px-2 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                        {selectedService.category}
                      </span>
                    </div>
                  </m.div>

                  {/* Modal Content */}
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="p-6 md:p-10 flex flex-col justify-center bg-white will-change-transform"
                  >
                    <div className="hidden md:flex items-center gap-2 mb-4">
                      <span
                        className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider inline-block"
                      >
                        {selectedService.category}
                      </span>
                      <span className="text-gray-400 text-xs font-semibold">•</span>
                      <span className="text-xs font-medium text-gray-500">{selectedService.readTime}</span>
                    </div>

                    <h3
                      className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight"
                    >
                      {selectedService.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
                      {selectedService.longDesc || selectedService.description}
                    </p>

                    <button
                      onClick={() => setSelectedService(null)}
                      className="self-start px-8 py-3 bg-gray-900 text-white rounded-full font-bold text-sm hover:bg-orange-600 transition-colors shadow-lg cursor-pointer"
                    >
                      Close Details
                    </button>
                  </m.div>
                </div>
              </m.div>
            </div>
          )}
        </AnimatePresence>

      </section>
    </LazyMotion>
  );
}
