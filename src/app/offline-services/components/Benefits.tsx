"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, CheckCircle2, FileText, UserCheck, Timer, CreditCard, HelpCircle } from "lucide-react";

export default function Benefits() {
  const benefitsList = [
    {
      icon: FileText,
      title: "Reduced Paperwork and administrative burden",
      desc: "Delegate your complex tax filing and registrations to us, cutting out stress and heavy physical administration.",
    },
    {
      icon: Shield,
      title: "Secure handling of personal and financial information",
      desc: "Your data security is our top priority. We use secure databases and encrypted networks for document handling.",
    },
    {
      icon: CreditCard,
      title: "Affordable and transparent services charges",
      desc: "Pay only what is agreed. We ensure complete transparency with absolutely zero hidden processing fees.",
    },
    {
      icon: UserCheck,
      title: "Professional support throughout the application process",
      desc: "Our legal experts guide you at every step, ensuring correct submissions and faster government approvals.",
    },
    {
      icon: Timer,
      title: "Quick and hassle-free document Processing",
      desc: "Save valuable weeks. We process your compliance and registrations with rapid service speeds across India.",
    },
    {
      icon: HelpCircle,
      title: "Dedicated customer support for all service-related queries",
      desc: "Access active support channels to resolve any questions about filing, paperwork, or application statuses.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-10 left-1/4 w-[300px] h-[300px] bg-orange-100/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-orange-500 uppercase font-sans">
            Key Advantages
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Key Benefits of Choosing <br />
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Offline Services
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 font-sans font-medium leading-relaxed">
            Experience seamless documentation support and expert guidance for all government-related requirements.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                whileHover={{ y: -6 }}
                className="flex flex-col bg-white border border-orange-500/10 hover:border-orange-500/30 rounded-3xl p-6 md:p-8 text-left transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.06)] relative group"
              >
                {/* Icon box */}
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-inner">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-sans font-medium flex-grow">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
