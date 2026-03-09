"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Cpu, Brain, BarChart3, ShieldCheck, Globe, Smartphone } from "lucide-react";

interface ExpertiseItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const expertiseData: ExpertiseItem[] = [
  {
    id: 1,
    title: "Digital Banking Software Development",
    description:
      "We build modern digital banking platforms with secure authentication, real-time transactions, and seamless user experience for banks and financial institutions.",
    icon: Globe,
  },
  {
    id: 2,
    title: "Payment Gateway Integration",
    description:
      "Our development operations involve digital banking methods, payment gateways, fintech APIs, and financial data management strategy for modern financial platforms.",
    icon: Cpu,
  },
  {
    id: 3,
    title: "AI-Enabled Customer Engagement Apps",
    description:
      "Our AI-powered fintech applications deliver intelligent personalization, automated support, and data-driven customer engagement experiences.",
    icon: Brain,
  },
  {
    id: 4,
    title: "Big Data & Financial Analytics Platforms",
    description:
      "We transform complex financial data into actionable intelligence with real-time analytics, reporting, and advanced risk assessment tools.",
    icon: BarChart3,
  },
  {
    id: 5,
    title: "Fintech Mobile Applications",
    description:
      "High-performance mobile apps for iOS and Android with seamless UX, biometric authentication, and real-time financial notifications.",
    icon: Smartphone,
  },
  {
    id: 6,
    title: "End-to-End Finance Solution Development",
    description:
      "Secure, scalable, and compliant financial software solutions built to streamline operations and support long-term enterprise growth.",
    icon: ShieldCheck,
  },
];

export default function FintechExpertiseSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <LazyMotion features={domAnimation}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left editorial column */}
            <m.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:sticky top-30"
            >
              <span className="text-sm font-semibold tracking-widest ml-1 text-orange-500 uppercase">
                Digital Banking & Financial Software
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-950">
                Digital Banking and{" "}
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
                  }}
                >
                  Financial Software
                </span>
                <br className="hidden sm:block" />
                Development
              </h2>

              <p className="max-w-5xl mx-auto mt-4 text-gray-600 text-sm md:text-base font-sans text-justify leading-relaxed">
                The demand for digital banking and online financial services is developing fastly. We offer specialized Financial Software Development services to build businesses in making modern platforms. Our M-ATM Service development processes involve digital banking methods, payment gateways, fintech APIs, and financial data management strategy, and experienced Fintech Software Developers India. We support the businesses that transform traditional financial services into modern digital platforms.
              </p>
            </m.div>

            {/* Right flowing content */}
            <div className="lg:col-span-7 space-y-8">
              {expertiseData.map((item, index) => {
                const Icon = item.icon;

                return (
                  <m.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-100/50 hover:shadow-lg hover:shadow-orange-100/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-950 mb-2">
                          {item.title}
                        </h3>

                        <p className="max-w-4xl text-gray-600 text-sm md:text-base font-sans leading-relaxed">
                          {item.description}
                        </p>

                        <span className="mt-4 block h-px w-0 bg-orange-600 transition-all duration-300 group-hover:w-24" />
                      </div>
                    </div>
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