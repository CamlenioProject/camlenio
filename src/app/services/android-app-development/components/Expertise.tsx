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

export default function Expertise() {
  const mainService = services[0];
  const otherServices = services.slice(1);
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  return (
    <LazyMotion features={domMax}>
      <section className="relative py-20 md:py-32 overflow-hidden bg-transparent">

        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-4"
              >
                <span className="h-px w-8 bg-orange-500"></span>
                <span className="text-orange-600 font-bold tracking-widest text-xs uppercase">Our Expertise</span>
              </m.div>

              <m.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1]"
              >
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
              </m.h2>
            </div>

            <m.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg max-w-md leading-relaxed mb-2"
            >
              We offer end-to-end Android app development services using modern technologies and industry best practices to ensure performance, security, and scalability.
            </m.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:h-[700px]">

            {/* Left Column - Hero Card */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-[45%] flex-shrink-0 relative group rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50 bg-white flex flex-col h-[500px] lg:h-auto border border-gray-100"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={mainService.image}
                  alt={mainService.title}
                  fill
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
                  {mainService.longDesc}
                </p>

                <button className="flex items-center gap-3 text-sm font-bold bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group-hover:pl-8">
                  Explore Custom Apps
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </m.div>

            {/* Right Column - Scrollable Grid */}
            <div className="lg:w-[55%] flex flex-col h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 lg:overflow-y-auto lg:pr-2 lg:pb-4 h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                {otherServices.map((service, index) => (
                  <m.div
                    key={service.title}
                    layoutId={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    onClick={() => setSelectedService(service)}
                    className="group relative bg-white p-4 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 flex flex-col md:flex-row gap-4 h-[200px] md:h-auto cursor-pointer"
                  >
                    <m.div
                      layoutId={`image-${service.title}`}
                      className="w-full md:w-28 h-32 md:h-full shrink-0 relative rounded-2xl overflow-hidden"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </m.div>

                    <div className="flex flex-col flex-1 py-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {service.category}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-gray-900 mb-1 leading-snug group-hover:text-orange-600 transition-colors">
                        {service.title}
                      </h4>

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
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedService(null)}
              />

              <m.div
                layoutId={selectedService.title}
                className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden z-20"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/10 hover:bg-black/20 text-gray-800 rounded-full transition-colors backdrop-blur-md"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col md:flex-row h-full max-h-[80vh] overflow-y-auto">
                  {/* Modal Image */}
                  <m.div
                    layoutId={`image-${selectedService.title}`}
                    className="w-full md:w-2/5 h-64 md:h-auto relative shrink-0"
                  >
                    <Image
                      src={selectedService.image}
                      alt={selectedService.title}
                      fill
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="p-8 md:p-10 flex flex-col justify-center"
                  >
                    <div className="hidden md:flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">
                        {selectedService.category}
                      </span>
                      <span className="text-gray-400 text-xs font-semibold">•</span>
                      <span className="text-xs font-medium text-gray-500">{selectedService.readTime}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {selectedService.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
                      {selectedService.longDesc || selectedService.description}
                    </p>

                    <button
                      onClick={() => setSelectedService(null)}
                      className="self-start px-8 py-3 bg-gray-900 text-white rounded-full font-bold text-sm hover:bg-orange-600 transition-colors shadow-lg"
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
