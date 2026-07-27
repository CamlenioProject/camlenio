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
    image: "/mobappdev/android_dev.webp",
    longDesc: "Our custom Android development service is designed to bring your unique vision to life. We handle everything from initial concept and architecture to development, testing, and deployment. By using native Kotlin/Java or cross-platform technologies, we ensure your app performs flawlessly on the diverse Android ecosystem."
  },
  {
    title: "Enterprise Android Applications",
    category: "Enterprise",
    readTime: "Scalable",
    description: "Secure and scalable systems for large operations.",
    image: "/mobappdev/enterprise.webp",
    longDesc: "We engineer robust enterprise-grade Android applications capable of handling massive user loads and complex workflows. Our solutions prioritize security, scalability, and seamless integration with your existing ERP, CRM, and cloud infrastructure."
  },
  {
    title: "UI/UX Design for Android Apps",
    category: "Design",
    readTime: "Creative",
    description: "Intuitive interfaces focused on user engagement.",
    image: "/mobappdev/ui_ux.webp",
    longDesc: "User experience is at the heart of our design process. We create visually stunning and highly intuitive interfaces that ensure high user retention. Our design team follows Material Design guidelines while infusing your brand identity into every pixel."
  },
  {
    title: "API & Third-Party Integrations",
    category: "Integration",
    readTime: "Seamless",
    description: "Connecting apps with existing backends & cloud.",
    image: "/mobappdev/enterprise.webp",
    longDesc: "Extend your app's functionality with our seamless integration services. Whether it's payment gateways, social media logins, geolocation services, or connecting to legacy backend systems, we ensure smooth and secure data exchange."
  },
  {
    title: "Android App Testing & QA",
    category: "Quality",
    readTime: "Bug-free",
    description: "Rigorous testing for high-performance apps.",
    image: "/mobappdev/testing.webp",
    longDesc: "Delivering a crash-free experience is our priority. Our QA team performs rigorous automated and manual testing across a wide range of devices and Android versions to identify and fix bugs, ensure performance optimization, and guarantee security compliance."
  },
  {
    title: "Google Play Store Deployment",
    category: "Launch",
    readTime: "Support",
    description: "Complete management of the launch process.",
    image: "/mobappdev/ui_ux.webp",
    longDesc: "Launching is just the beginning. We handle the entire Play Store submission process, including listing optimization, compliance checks, and managing release tracks. We also provide post-launch support to ensure your app stays compatible with new OS updates."
  },
  {
    title: "Maintenance & Optimization",
    category: "Support",
    readTime: "Ongoing",
    description: "Continuous updates and performance monitoring.",
    image: "/mobappdev/android_dev.webp",
    longDesc: "We provide ongoing maintenance plans to keep your application running smoothly. From security patches and performance tuning to feature enhancements and OS version updates, we ensure your app remains competitive and efficient."
  },
];

const industries = [
  {
    title: "Fintech & Banking Apps",
    category: "Finance",
    readTime: "Secure",
    description: "Secure payment and transaction apps.",
    image: "/mobappdev/enterprise.webp",
    longDesc: "We build high-security fintech applications that power seamless transactions, digital wallets, and banking operations. Compliant with financial regulations, our apps ensure data integrity and user trust."
  },
  {
    title: "E-commerce Android Apps",
    category: "Retail",
    readTime: "Growth",
    description: "Shopping, inventory & order management.",
    image: "/mobappdev/ui_ux.webp",
    longDesc: "Transform your retail business with feature-rich e-commerce apps. We integrate smart search, secure checkouts, and real-time inventory management to deliver a superior shopping experience."
  },
  {
    title: "Healthcare & Medical Apps",
    category: "Health",
    readTime: "Care",
    description: "Appointment booking & patient management.",
    image: "/mobappdev/testing.webp",
    longDesc: "Empowering healthcare providers with telemedicine, appointment scheduling, and patient record management apps. We prioritize HIPAA compliance and intuitive interfaces for patients and doctors alike."
  },
  {
    title: "Real Estate Apps",
    category: "Property",
    readTime: "Listings",
    description: "Property listing and management solutions.",
    image: "/mobappdev/enterprise.webp",
    longDesc: " streamlining property buying, selling, and renting. Our real estate apps feature virtual tours, geolocation maps, and direct agent communication tools."
  },
  {
    title: "Logistics & On-Demand Apps",
    category: "Logistics",
    readTime: "Track",
    description: "Tracking and service-based applications.",
    image: "/mobappdev/android_dev.webp",
    longDesc: "Optimize your supply chain with real-time tracking and fleet management apps. We create on-demand delivery solutions that connect customers with drivers instantly."
  },
  {
    title: "Enterprise Mobility Solutions",
    category: "Corporate",
    readTime: "Efficient",
    description: "Workforce and data management apps.",
    image: "/mobappdev/enterprise.webp",
    longDesc: "Boost organizational productivity with custom enterprise mobility solutions. From field force management to internal communication hubs, we digitize your core workflows."
  },
];

// Custom Service Card Component for a professional SaaS feel
const ServiceCard = ({ service, onClick, index }: { service: any, onClick: () => void, index: number }) => (
  <m.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    onClick={onClick}
    className="group relative bg-white border border-gray-100 p-8 rounded-[2.5rem] hover:border-orange-500/30 transition-all duration-500 cursor-pointer flex flex-col h-full shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(234,88,12,0.08)]"
  >
    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:rotate-6 transition-all duration-500 shadow-sm">
      <Smartphone className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" />
    </div>

    <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors leading-tight">
      {service.title}
    </h4>

    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow font-medium">
      {service.description}
    </p>

    <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
      <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{service.category}</span>
      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 shadow-sm">
        <ArrowUpRight className="w-5 h-5" />
      </div>
    </div>
  </m.div>
);

export default function Expertise() {
  const [activeTab, setActiveTab] = useState<"services" | "industries">("services");
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  const tabContent = {
    services: {
      title: (
        <>
          <span className="text-orange-600">Custom Android App</span>
          <br />
          Development Services
        </>
      ),
      description: "End-to-end Android app development using modern architecture, high-security standards, and native performance optimization.",
      data: services
    },
    industries: {
      title: (
        <>
          <span className="text-orange-600">Android Apps</span>
          <br />
          for Every Industry
        </>
      ),
      description: "Tailored industry solutions that bridge the gap between business objectives and mobile innovation.",
      data: industries
    }
  };

  const currentContent = tabContent[activeTab];
  const mainService = currentContent.data[0];
  const otherServices = currentContent.data.slice(1);

  return (
    <LazyMotion features={domMax}>
      <section className="relative py-20 overflow-hidden bg-transparent">



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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* --- HERO COLUMN --- */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <m.div
                key={`hero-card-${activeTab}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-full min-h-[400px] lg:min-h-0 rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-gray-200/50"
              >
                <Image
                  src={mainService.image}
                  alt={mainService.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-orange-600 text-white text-[10px] font-bold tracking-wider uppercase rounded-full">
                      Professional
                    </span>
                    <div className="w-1 h-1 rounded-full bg-orange-600" />
                    <span className="text-xs font-medium text-gray-300">
                      Top Industry Standards
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {mainService.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm line-clamp-3">
                    {mainService.longDesc || mainService.description}
                  </p>

                  <button
                    onClick={() => setSelectedService(mainService)}
                    className="flex items-center gap-3 text-sm font-bold bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 group cursor-pointer"
                  >
                    View Project Details
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </m.div>
            </div>

            {/* --- GRID COLUMN --- */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                {otherServices.map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    service={service}
                    index={index}
                    onClick={() => setSelectedService(service)}
                  />
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
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="relative w-full max-w-2xl bg-white !rounded-3xl overflow-hidden z-20 shadow-2xl"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
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
