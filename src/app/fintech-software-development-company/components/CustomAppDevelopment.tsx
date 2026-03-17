"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CreditCard, Wallet, Calculator, Building2, ArrowRight, BarChart3, Settings2 } from 'lucide-react';

const CustomAppDevelopment = () => {
  const services = [
    {
      id: "aeps",
      title: "AEPS Services",
      href: "/coming-soon",
      description: "Aadhaar Enabled Payment System for seamless cash withdrawals and balance inquiries.",
      icon: <Building2 className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      id: "cc",
      title: "Credit Card Payments",
      href: "/coming-soon",
      description: "Integrated bill payment solutions with high security and instant confirmation.",
      icon: <CreditCard className="w-6 h-6" />,
      color: "bg-orange-500"
    },
    {
      id: "mpos",
      title: "M-POS Service",
      href: "/coming-soon",
      description: "Portable point-of-sale solutions for businesses to accept card payments anywhere.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-indigo-500"
    },
    {
      id: "matm",
      title: "M-ATM Service",
      href: "/coming-soon",
      description: "Transforming mobile devices into micro-ATMs for local community financial access.",
      icon: <Calculator className="w-6 h-6" />,
      color: "bg-emerald-500"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left md:text-center mb-20 space-y-6">

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-[1.1] max-w-5xl mx-auto">
         <span className="text-orange-500" style={{ textShadow: "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336" }}>FinTech Application Development</span> For Modern Businesses
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed text-left md:text-center max-w-4xl mx-auto">
            Each financial business has unique needs, and we recognise the importance of tailored solutions. Our Custom Fintech Application Development services focus on building personalised platforms that help companies manage payments, automate transactions, and optimise financial processes. As a leading Financial App Provider, we develop applications integrated with essential digital payment services involving:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={service.id} href={service.href}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden cursor-pointer h-full"
              >
                {/* Glassmorphism Background Accent */}
                <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity ${service.color}`} />

                <div className={`w-14 h-14 rounded-2xl ${service.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-white p-2.5 rounded-xl ${service.color} shadow-lg`}>
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-gray-900 font-bold text-sm group-hover:text-orange-500 transition-colors">
                  <span>Learn Details</span>
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <span className="w-2 md:w-4 h-2 md:h-4 rounded-full bg-orange-500 animate-pulse" />
            <p className="text-gray-600 text-sm font-medium">
              These solutions enable businesses to provide convenient financial services to customers across India.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomAppDevelopment;
