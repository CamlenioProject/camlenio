"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import {
  Wallet,
  Smartphone,
  UserCheck,
  Receipt,
  Settings,
  Code,
  Building2,
  CreditCard,
  Globe,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const customFintechFeatures: FeatureItem[] = [
  {
    icon: Settings,
    title: "Custom Fintech Software Development",
    description:
      "Tailor-made fintech solutions designed to match business goals, user needs, and regulatory requirements.",
  },
  {
    icon: Wallet,
    title: "Digital Wallet & Payment Solutions",
    description:
      "Secure wallets, payment gateways, UPI systems, and real-time transaction platforms.",
  },
  {
    icon: UserCheck,
    title: "KYC & Identity Verification Solutions",
    description:
      "Advanced digital KYC, Aadhaar verification, and fraud detection systems to ensure compliance and trust.",
  },
  {
    icon: Code,
    title: "Banking & Financial APIs",
    description:
      "Robust APIs for account verification, money transfer, KYC, Aadhaar, PAN verification, and more.",
  },
  {
    icon: Receipt,
    title: "Lending & Loan Management Systems",
    description:
      "End-to-end loan management with automated approvals, EMI scheduling, collections, and reporting.",
  },
  {
    icon: Smartphone,
    title: "Fintech Mobile & Web App Development",
    description:
      "High-performance fintech apps with intuitive UI/UX for Android, iOS, and web platforms.",
  },
];

const b2bFeatures: FeatureItem[] = [
  {
    icon: Building2,
    title: "Enterprise Payment Solutions",
    description:
      "Build robust payment processing systems for banks, payment providers, and financial service platforms.",
  },
  {
    icon: CreditCard,
    title: "Automated Financial Workflows",
    description:
      "Automate financial workflows, improve transaction privacy, and scale solutions effectively for B2B operations.",
  },
  {
    icon: Globe,
    title: "Multi-Level Business Architecture",
    description:
      "Support for Admin, Master Distributor, Distributor, and Retailer levels with role-based access control.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Security",
    description:
      "Enterprise-grade security with regulatory compliance, fraud detection, and encrypted transaction processing.",
  },
];

export default function Feature() {
  return (
    <section className="relative overflow-hidden py-14">
      <div className="relative mx-auto max-w-7xl px-6">
        <LazyMotion features={domAnimation}>

          <div className="mb-10">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto text-center mb-14"
            >

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-950 text-justify">
                Custom{" "}
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                  }}
                >
                  Fintech Software
                </span>{" "}
                Development for Modern Businesses
              </h2>

              <p className="mt-5 max-w-5xl mx-auto text-gray-600 text-sm md:text-base font-sans text-justify leading-relaxed">
                All financial businesses have different requirements. That&apos;s why
                Camlenio specializes in Custom Fintech Software Development
                customized to specific business models and operational
                requirements. Our development process focuses on making secure,
                user-friendly fintech platforms. We create & develop fintech
                applications that help lending platforms, digital payments,
                wallet systems, and financial management tools.
              </p>

              <p className="mt-4 max-w-5xl mx-auto text-gray-600 text-sm md:text-base font-sans text-justify leading-relaxed">
                Our expert team guarantees that each Fintech Software Solution we develop is designed for performance, security, and ease of integration with third-party services. With the deep comprehension of the fintech ecosystem, our Camlenio excerpts support businesses in startups with strong digital products that convey long-term value.
              </p>
            </m.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {customFintechFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <m.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: index * 0.04,
                    }}
                    viewport={{ once: true, margin: "-30px" }}
                    className="relative group rounded-2xl bg-white/80 backdrop-blur-xl border border-orange-100 p-6 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 hover:-translate-y-1 will-change-transform transform-gpu"
                  >
                    {/* Hover Gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200/50 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600/80 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    <span className="mt-5 block h-px w-12 bg-orange-500/60 group-hover:w-20 transition-all duration-300" />
                  </m.div>
                );
              })}
            </div>
          </div>

        </LazyMotion>
      </div>
    </section>
  );
}