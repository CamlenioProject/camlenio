"use client";

import { Hospital, Activity, Database, FileText, Cloud, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    icon: Hospital,
    title: "Fertility Clinic Software Development",
    desc: "Our custom software solutions are tailored for fertility centers and IVF hospitals.",
    image: "/ServiceDropdown/artsoftware/Fertility-Clinic-Software-Development.avif",
  },
  {
    icon: Activity,
    title: "IVF Patient Tracking Software",
    desc: "Monitor patient treatment stages, cycle reports, pharmaceuticals, and appointments.",
    image: "/ServiceDropdown/artsoftware/IVF-Patient-Tracking-Software.avif",
  },
  {
    icon: Database,
    title: "Donor Management Software",
    desc: "Our platform manages sperm and embryo donor records with secure documentation procedures.",
    image: "/ServiceDropdown/artsoftware/Donor-Management-Software.avif",
  },
  {
    icon: FileText,
    title: "Billing and Reporting Modules",
    desc: "It generates invoices, financial reports, treatment summaries, and analytics.",
    image: "/ServiceDropdown/artsoftware/Billing-and-Reporting-Modules.avif",
  },
  {
    icon: Cloud,
    title: "Cloud-Based ART Bank Software",
    desc: "Access clinic solutions securely anytime and anywhere with cloud integration.",
    image: "/ServiceDropdown/artsoftware/Cloud-Based-ART-Bank-Software.avif",
  },
  {
    icon: Users,
    title: "Fertility CRM Software",
    desc: "Improve patient communications, lead management, and retention processes.",
    image: "/ServiceDropdown/artsoftware/Fertility-CRM-Software.avif",
  },
];

export default function Services() {
  return (
    <section id="solutions" className="py-28 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
      {/* Background soft light */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
            Comprehensive Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            We Offer{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Comprehensive Services
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 font-sans font-medium leading-relaxed">
            Camlenio delivers complete software solutions for fertility healthcare businesses, including:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                whileHover={{ y: -8 }}
                className="flex flex-col bg-white/70 backdrop-blur-xl border border-orange-500/10 hover:border-orange-500/30 rounded-[2.5rem] p-6 text-left group cursor-pointer transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)] relative overflow-hidden"
              >
                {/* Glowing corner indicator */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image Preview with premium frame */}
                <div className="relative w-full h-48 rounded-[2rem] overflow-hidden mb-6 border border-orange-500/5 bg-white/50 shadow-inner">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent pointer-events-none opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                </div>

                {/* Icon & Title Row */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-[14px] bg-orange-500/10 text-orange-500 flex items-center justify-center shadow-sm border border-orange-500/10 group-hover:scale-105 group-hover:bg-orange-50 group-hover:text-white transition-all duration-300">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-200 leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-500 font-sans font-medium leading-relaxed flex-grow">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
