"use client";

import React from "react";
import { Building2, Video, Smartphone, FileText, Pill, Receipt } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const solutions = [
  {
    icon: Building2,
    title: "Hospital Management Software Development",
    desc: "Centralized ERP systems to streamline administration and hospital operations.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=500&q=80"
  },
  {
    icon: Video,
    title: "Telemedicine App Development",
    desc: "High-quality video consults, virtual queues, and doctor-patient chat interfaces.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80"
  },
  {
    icon: Smartphone,
    title: "Healthcare Mobile App Development",
    desc: "Patient-facing mobile apps for booking tests, viewing records, and reminders.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=500&q=80"
  },
  {
    icon: FileText,
    title: "EHR & EMR Software Solutions",
    desc: "DPDP-compliant patient records, clinical history logs, and lab result trackers.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=500&q=80"
  },
  {
    icon: Pill,
    title: "Pharmacy Management Systems",
    desc: "Real-time drug inventory tracking, automated orders, and prescription matching.",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=500&q=80"
  },
  {
    icon: Receipt,
    title: "Medical Billing Software",
    desc: "Seamless GST invoicing, insurance claims, payment gateway integrations, and reports.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80"
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Section: Title & Description */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
            Advanced Healthcare Solutions
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Custom<span className="text-orange-500" style={{
              textShadow:
                "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
            }}> Healthcare Software</span> Development Services
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 font-sans font-medium leading-relaxed">
            We provide end-to-end healthcare software development services to simplify medical workflows and improve healthcare delivery. As a trusted medical software development company, we build secure and DPDP-ready solutions that match your business goals. Our experts focus on custom software development for healthcare with advanced technologies, intuitive interfaces, and scalable architecture.
          </p>
          <p className="mt-3 text-sm sm:text-base text-gray-500 font-sans font-medium leading-relaxed">
            From healthcare mobile apps to integrated management systems, we created operations that improve efficiency and patient engagement. Connect healthcare platforms, devices, and operational systems to guarantee smooth workflow management and data accessibility.
          </p>
        </div>

        {/* Bottom Section: 3-Column Grid of Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {solutions.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex flex-col items-start text-left group cursor-pointer"
              >
                {/* Solution Preview Image */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 border border-orange-500/10 bg-white/50 shadow-sm">
                  <Image
                    src={sol.image}
                    alt={sol.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Icon & Title Row */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shadow-sm border border-orange-500/5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                    {sol.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-500 font-sans font-medium leading-relaxed">
                  {sol.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
