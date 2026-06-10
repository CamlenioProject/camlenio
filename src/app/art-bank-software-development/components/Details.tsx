"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  "IVF Patient Tracking",
  "Embryo and Sperm Bank Management",
  "Appointment Scheduling",
  "Billing and Reporting",
  "Patient Communication and CRM",
  "Donor Registration and Verification",
];

export default function Details() {
  return (
    <section className="py-28 bg-orange-50/40 overflow-hidden relative">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-orange-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column: Content */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            What is{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              ART Bank
            </span>
            ?
          </h2>

          <p className="text-base text-gray-750 font-sans leading-relaxed">
            The Assisted Reproductive Technology (ART) Bank Software is a specialized digital platform developed for fertility clinics and assisted reproductive technology centers to manage a system. This fertility clinic software helps clinics efficiently handle:
          </p>

          {/* Functional Bullet List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-orange-500/5 shadow-sm hover:border-orange-500/20 transition-all duration-300 select-none"
              >
                <CheckCircle2 className="w-4.5 h-4.5 text-orange-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-gray-800 font-sans">{feature}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-sm sm:text-base text-gray-600 font-sans font-medium leading-relaxed pt-2">
            Our software is designed to improve workflow accuracy, patient engagement, and operational transparency for fertility businesses.
          </p>
        </div>

        {/* Right Column: Visual Graphic/Image */}
        <div className="lg:col-span-6 relative w-full flex justify-center">
          {/* Glowing backplate blur */}
          <div className="absolute inset-4 bg-orange-500/5 rounded-3xl blur-2xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[500px] aspect-[4/3] rounded-[3rem] overflow-hidden border border-orange-500/15 shadow-[0_20px_50px_rgba(249,115,22,0.08)] bg-white/50 p-2 cursor-pointer group"
          >
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwRUeAKhneqqMnoxKW53s6oP6N9jNaaoLsjCxn0qMY_sArGCC1VQ4y_nVDtFL5rONZSEowEW7c8EBk1_30qcT_zlyKfI0bfEmPe3k4ai0B57uRpA1BMuqSxZMqME9YQ0zZ3KlFP5BcxBgryf2avudLDFv8C7nNM1Dyb83bYMvfDTt9ZB1RKmg4002882AVabaRszyIdwtyE0xRZt3loFxSiS7zlC4Iu1rkABOOm6faUi8WVMXr4zbUEl3QcUwQ985MKlIBFv2vLYA"
                alt="ART Bank Specimen Inventory Dashboard Interface"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
