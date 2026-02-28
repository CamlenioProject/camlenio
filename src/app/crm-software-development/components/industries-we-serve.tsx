"use client";

import React, { useState } from "react";
import {
  Building2,
  ShoppingBag,
  Stethoscope,
  Home,
  GraduationCap,
  Truck,
  Cloud,
  CheckCircle,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";
import { m, LazyMotion, domMax } from "framer-motion";
import Link from "next/link";

interface Industry {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
}

export default function IndustriesWeServe() {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);

  const industries: Industry[] = [
    {
      id: 1,
      icon: <Building2 className="w-6 h-6" />,
      title: "Fintech & Banking",
      description:
        "Secure customer data management, compliance tracking, and transaction insights",
      features: [
        "Secure customer portals",
        "Regulatory compliance tools",
        "Real-time transaction tracking",
        "Risk assessment modules",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "E-Commerce & Retail",
      description:
        "Lead tracking, customer behavior analysis, and sales automation",
      features: [
        "Shopping cart analytics",
        "Customer segmentation",
        "Inventory management",
        "Personalized marketing",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: 3,
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Healthcare & Clinics",
      description:
        "Patient management, appointment scheduling, and data security",
      features: [
        "HIPAA compliant systems",
        "Appointment automation",
        "Patient records management",
        "Telehealth integration",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 4,
      icon: <Home className="w-6 h-6" />,
      title: "Real Estate & Property",
      description:
        "Lead management, property tracking, and broker coordination",
      features: [
        "Property listing management",
        "Lead scoring system",
        "Document management",
        "Commission tracking",
      ],
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      id: 5,
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education & EdTech",
      description:
        "Student enrollment, communication, and engagement management",
      features: [
        "Student progress tracking",
        "Parent communication portal",
        "Course management",
        "Attendance automation",
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      id: 6,
      icon: <Truck className="w-6 h-6" />,
      title: "Logistics & Transportation",
      description:
        "Shipment tracking, client coordination, and workflow automation",
      features: [
        "Real-time tracking systems",
        "Route optimization",
        "Fleet management",
        "Delivery scheduling",
      ],
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
    {
      id: 7,
      icon: <Cloud className="w-6 h-6" />,
      title: "SaaS & IT Services",
      description:
        "Subscription management, customer support, and retention tracking",
      features: [
        "Subscription billing",
        "Customer success tracking",
        "Support ticket management",
        "Usage analytics",
      ],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <LazyMotion features={domMax}>
      <div className="min-h-screen py-12 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Industries We Serve with{" "}
              <span className="relative inline-block">
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                  }}
                >
                  CRM Solutions
                </span>
              </span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans text-center">
              As a trusted CRM software development company, we deliver
              industry-specific CRM solutions tailored to unique business
              workflows and customer needs.
            </p>
          </m.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Side - Stats & Overview */}
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 bg-orange-100/40 rounded-2xl shadow-md p-6 md:p-8 border border-orange-100">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Why Industry-Specific CRM?
                    </h3>
                    <p className="text-gray-600 text-sm font-sans">
                      Our CRM systems help organizations improve efficiency,
                      customer engagement, and decision making across
                      industries.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-orange-50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-orange-600 mb-1">
                        100%
                      </div>
                      <div className="text-sm text-gray-600">
                        Custom Solutions
                      </div>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-orange-600 mb-1">
                        7+
                      </div>
                      <div className="text-sm text-gray-600">Industries</div>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-orange-600 mb-1">
                        24/7
                      </div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-orange-600 mb-1">
                        99.9%
                      </div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-700">Scalable Solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-700">Custom Workflows</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-700">Compliance Ready</span>
                    </div>
                  </div>
                  <Link href="/contact">
                    <button className="w-full group relative px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-sm hover:scale-101 transition-all duration-300 overflow-hidden">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Get Custom CRM Solution
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </Link>
                </div>
              </div>
            </m.div>

            {/* Right Side - Industries Grid */}
            <m.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                {industries.map((industry) => (
                  <m.div
                    key={industry.id}
                    variants={itemVariants}
                    className="group"
                    onMouseEnter={() => setActiveIndustry(industry.id)}
                    onMouseLeave={() => setActiveIndustry(null)}
                  >
                    <div
                      className={`
                    relative h-full bg-orange/50 rounded-2xl p-6
                    border-2 ${activeIndustry === industry.id
                          ? "border-orange-200/50"
                          : "border-orange-100"
                        }
                    shadow-lg hover:shadow-2xl
                    transition-all duration-500
                    hover:-translate-y-1 cursor-pointer
                    overflow-hidden
                  `}
                    >
                      {/* Hover Gradient Effect */}
                      <div
                        className={`
                      absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500
                    `}
                      />

                      {/* Icon Badge */}
                      <div
                        className={`
                      w-14 h-14 rounded-xl ${industry.bgColor}
                      flex items-center justify-center mb-5
                      transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                      ${industry.color}
                    `}
                      >
                        <div className="relative">
                          {industry.icon}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-sm" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {industry.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-5 leading-relaxed font-sans">
                        {industry.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2 mb-6">
                        {industry.features.map((feature, idx) => (
                          <m.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-2 font-sans"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </m.li>
                        ))}
                      </ul>

                      {/* Bottom Orange Line */}
                      <div
                        className={`
                      absolute bottom-0 left-0 w-full h-1
                      bg-gradient-to-r from-orange-500 to-transparent
                      transform scale-x-0 group-hover:scale-x-100
                      transition-transform duration-500 origin-left
                    `}
                      />
                    </div>
                  </m.div>
                ))}
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
