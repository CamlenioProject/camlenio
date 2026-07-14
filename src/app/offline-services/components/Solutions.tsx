"use client";

import { motion } from "framer-motion";
import { Landmark, FileSignature, LandmarkIcon, Fingerprint, FileUp, UsersRound } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: FileSignature,
      title: "GST Registration Assistance",
      desc: "Complete support for new GST registration, amendments, filing returns, and handling tax compliance issues.",
    },
    {
      icon: Landmark,
      title: "Certificate and Form Processing",
      desc: "Fast processing of partnership deeds, MSME certificates, digital signature certificates (DSC), and various tax forms.",
    },
    {
      icon: UsersRound,
      title: "Citizen Service Facilitation",
      desc: "Hassle-free facilitation of essential services, aiding customers who need official support at physical touchpoints.",
    },
    {
      icon: FileUp,
      title: "Application Submission Support",
      desc: "Thorough verification of application files, credentials, and attachments before final government submission.",
    },
    {
      icon: LandmarkIcon,
      title: "Various Government-Related Services",
      desc: "End-to-end guidance for local trade licenses, import-export codes, trademark registration, and other compliance.",
    },
    {
      icon: Fingerprint,
      title: "Aadhar Update Assistance",
      desc: "Assistance with demography updates, biometric sync guidelines, and linking Aadhar to other fintech channels.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glowing highlights */}
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-orange-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Top Header */}
        <div className="max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
            Fintech Solutions
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight font-sans">
            Our Comprehensive{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Offline Services We Offer
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 font-sans font-medium leading-relaxed">
            The fintech software user can provide this kind of service, where customers can get hassle-free service:
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                whileHover={{ scale: 1.02 }}
                className="flex gap-4 bg-white border border-orange-500/10 hover:border-orange-500/30 rounded-[2rem] p-6 text-left transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.06)] relative group cursor-pointer"
              >
                {/* Icon Column */}
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-inner">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content Column */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-200 leading-snug">
                    {solution.title}
                  </h3>
                  <p className="text-xs text-gray-550 leading-relaxed font-sans font-medium">
                    {solution.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
