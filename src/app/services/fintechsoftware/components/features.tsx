"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import {
  Wallet,
  Smartphone,
  UserCheck,
  Receipt,
  Settings,
  Code,
} from "lucide-react";

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
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

export default function Feature() {
  return (
    <section className="relative overflow-hidden  py-10">

      <div className="relative mx-auto max-w-7xl px-6">
        <LazyMotion features={domAnimation}>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Header Text */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase">
                Fintech Capabilities
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-950">
                Our <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >Fintech Software</span>{" "}
                Development Services
              </h2> 

              <p className="mt-5 max-w-5xl mx-auto text-gray-600 text-sm md:text-base font-sans text-justify">
                Secure, scalable, and intelligent fintech solutions engineered
                for performance, compliance, and long-term growth.
              </p>
            </m.div>

            {/* Arrow – Desktop Only */}
            {/* <div className="hidden lg:flex items-start pt-8">
              <LazyMotion features={domAnimation}>
                <m.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-64 h-28"
                >
                  <svg
                    viewBox="0 0 400 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto max-w-[300px]"
                  >
                    <m.path
                      d="
      M 50,160 
      C 80,110 180,40 230,80 
      C 260,110 210,140 200,100 
      C 195,80 230,40 360,30
    "
                      stroke="#f97316"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{
                        duration: 2.2,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      viewport={{ once: true }}
                    />
                    <m.path
                      d="M 345,45 L 365,28 L 340,25"
                      stroke="#f97316"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        delay: 1.9,
                        duration: 0.3,
                      }}
                      viewport={{ once: true }}
                    />
                  </svg>
                </m.div>
              </LazyMotion>
            </div> */}
          </div>

          {/* Feature Stack */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <m.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.06,
                  }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl bg-orange-100/50 backdrop-blur-xl border border-orange-200/40 p-6 shadow-sm transition-transform"
                  style={{
                    zIndex: features.length - index,
                  }}
                >
                  {/* <div className="absolute bottom-6 left-6 h-10 w-10 rounded-full bg-orange-500 opacity-50" /> */}

                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600/80 text-white shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-5xl mx-auto text-gray-600 text-sm md:text-base  font-sans text-justify">
                    {feature.description}
                  </p>

                  {/* Accent line */}
                  <span className="mt-5 block h-px w-12 bg-orange-500/60 transition-all duration-300 group-hover:w-20" />
                </m.div>
              );
            })}
          </div>
        </LazyMotion>
      </div>
    </section>
  );
}
