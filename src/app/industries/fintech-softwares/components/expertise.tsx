"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Cpu, Brain, BarChart3, ShieldCheck } from "lucide-react";

interface ExpertiseItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const expertiseData: ExpertiseItem[] = [
  {
    id: 1,
    title: "Fintech Software Development Expertise",
    description:
      "We design and build custom fintech software aligned with business objectives and regulatory frameworks, engineered for high transaction volumes and secure real-time processing.",
    icon: Cpu,
  },
  {
    id: 2,
    title: "AI-Enabled Customer Engagement Apps",
    description:
      "Our AI-powered fintech applications deliver intelligent personalization, automated support, and data-driven customer engagement experiences.",
    icon: Brain,
  },
  {
    id: 3,
    title: "Big Data & Financial Analytics Platforms",
    description:
      "We transform complex financial data into actionable intelligence with real-time analytics, reporting, and advanced risk assessment tools.",
    icon: BarChart3,
  },
  {
    id: 4,
    title: "End-to-End Finance Solution Development",
    description:
      "Secure, scalable, and compliant financial software solutions built to streamline operations and support long-term enterprise growth.",
    icon: ShieldCheck,
  },
];

export default function FintechExpertiseSection() {
  return (
    <section className="relative py-28">
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
              <span className="text-sm font-semibold tracking-widest ml-1 text-orange-500">
                FINTECH EXPERTISE
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-950">
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
                  }}
                >
                  Fintech
                </span>{" "}
                Software Development
                <br className="hidden sm:block" />
                Expertise
              </h2>

              <p className="max-w-5xl mx-auto mt-4 text-gray-600 text-sm md:text-base font-sans text-justify">
                Camlenio partners with fintech innovators to design secure,
                intelligent, and scalable financial systems that power modern
                digital finance.
              </p>
            </m.div>

            {/* Right flowing content */}
            <div className="lg:col-span-7 space-y-12">
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
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className="h-6 w-6 text-orange-500 shrink-0 mt-1" />

                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-950">
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-4xl mx-auto text-gray-600 text-sm md:text-base  font-sans text-justify">
                          {item.description}
                        </p>

                        {/* Animated underline */}
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