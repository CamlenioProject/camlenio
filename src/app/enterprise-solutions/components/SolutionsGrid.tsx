"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  HeartIcon,
  TruckIcon,
  AcademicCapIcon,
  CurrencyRupeeIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  BanknotesIcon,
  BellIcon
} from "@heroicons/react/24/outline";

const solutions = [
  {
    id: "healthcare",
    title: "Healthcare & ART Bank Management Software",
    subtitle: "Comprehensive Web & Android Ecosystem for Modern Healthcare Networks",
    description: "Camlenio is a noted provider of specialized ART Bank and Healthcare Management Software in India. We deliver an advanced, secure web application paired with an intuitive Android application tailored for hospitals, clinics, donors, and ASHA workers.",
    icon: HeartIcon,
    color: "orange",
    image: "/ServiceDropdown/enterprisesolutions/Healthcare&art.webp",
    features: [
      {
        title: "Multi-Role Login Architecture",
        desc: "Specialized, secure login dashboards for Hospitals, Clinics, Donors, and ASHA workers to ensure streamlined collaboration.",
        icon: ShieldCheckIcon
      },
      {
        title: "Testing Machine SDK Integration",
        desc: "Advanced software capabilities equipped with direct medical/testing machine SDKs to automatically sync and maintain donor report records with zero manual error.",
        icon: CpuChipIcon
      },
      {
        title: "Seamless Donor Connect",
        desc: "A transparent portal allowing verified entities with urgent donor requirements to connect directly with available, eligible donors instantly.",
        icon: ArrowPathIcon
      }
    ]
  },
  {
    id: "b2b-supply",
    title: "B2B Supply Settlements",
    subtitle: "Streamline Cash Flows Between Distributors and Retail Partners",
    description: "Managing payments across a fragmented supply chain can slow down business growth. Camlenio provides an advanced B2B settlement engine that digitizes the entire payment cycle between wholesalers, distributors, and retail networks.",
    icon: TruckIcon,
    color: "blue",
    image: "/ServiceDropdown/enterprisesolutions/B2B-Supply-Settlements.webp",
    features: [
      {
        title: "Automated Ledgers",
        desc: "Say goodbye to manual reconciliation error; eliminate payment gaps with automated accounting.",
        icon: ArrowPathIcon
      },
      {
        title: "Optimized Credit Cycles",
        desc: "Enable faster rotation of working capital with instant fund routing.",
        icon: CurrencyRupeeIcon
      },
      {
        title: "Closed-Loop Security",
        desc: "Ensure zero third-party payment risks by routing funds strictly within verified merchant circles.",
        icon: ShieldCheckIcon
      }
    ]
  },
  {
    id: "institutional-fee",
    title: "Institutional Fee Collection",
    subtitle: "Smart Collection Modules Powered by Unique Virtual Accounts",
    description: "Tired of tracking offline bank transfers and cash deposits? Camlenio simplifies fee management for schools, colleges, and training institutes by deploying a cutting-edge Virtual Account (VA) architecture.",
    icon: AcademicCapIcon,
    color: "orange",
    image: "/ServiceDropdown/enterprisesolutions/Institutional-Fee-Collection.webp",
    features: [
      {
        title: "Unique Virtual Accounts",
        desc: "Assign a dedicated, static, or dynamic Virtual Account to every student or department.",
        icon: BanknotesIcon
      },
      {
        title: "Real-Time Identification",
        desc: "Instantly match incoming payments to the correct student profile with zero manual effort.",
        icon: ShieldCheckIcon
      },
      {
        title: "Multi-Channel Payment Gateway",
        desc: "Accept fees effortlessly via UPI, Net Banking, and Cards through an integrated secure portal.",
        icon: DevicePhoneMobileIcon
      }
    ]
  },
  {
    id: "loan-recovery",
    title: "EMI & Loan Recovery Collections",
    subtitle: "Compliant and Seamless Collection Infrastructure for Regulated NBFCs",
    description: "Loan recovery requires speed, scale, and ironclad compliance. Camlenio partners with RBI-regulated NBFCs to optimize their EMI collection and loan repayment flows through secure banking APIs.",
    icon: CurrencyRupeeIcon,
    color: "blue",
    image: "/ServiceDropdown/enterprisesolutions/EMI&Loan-Recovery.webp",
    features: [
      {
        title: "Regulated & Clean Routing",
        desc: "Ensure all collected funds are directly routed to the NBFC’s verified banking channels.",
        icon: ShieldCheckIcon
      },
      {
        title: "Instant Webhook Notifications",
        desc: "Get immediate real-time success flags as soon as a borrower clears their EMI.",
        icon: BellIcon
      },
      {
        title: "High-Volume Reliability",
        desc: "Scale up your recovery drives securely with a framework built to handle heavy transaction loads smoothly.",
        icon: ArrowPathIcon
      }
    ]
  }
];

export default function SolutionsGrid() {
  return (
    <section id="solutions-grid" className="py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Integrated Enterprise <br className="hidden sm:block" />
            <span className="text-orange-500" style={{
              textShadow:
                "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
            }}>Solutions.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg md:text-xl leading-relaxed"
          >
            We provide specialized software ecosystems designed to handle complex business logic and secure financial operations at scale.
          </motion.p>
        </div>

        <div className="space-y-32">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
            >
              {/* Content Side */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-orange-500 font-semibold text-base md:text-lg mb-4">{solution.subtitle}</p>
                <p className="text-gray-500 text-base leading-relaxed mb-8">
                  {solution.description}
                </p>

                <div className="grid gap-6">
                  {solution.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-4 group">
                      <div className={`shrink-0 w-12 h-12 rounded-full ${solution.color === 'orange' ? 'bg-orange-100/50 text-orange-600' : 'bg-blue-100/50 text-blue-600'} flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div className="pt-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full max-w-xl">
                <div className="relative aspect-square rounded-[2rem] overflow-hidden flex items-center justify-center group">
                  <Image
                    src={solution.image || "/ServiceDropdown/enterprisesolutions/Healthcare&art.webp"}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
