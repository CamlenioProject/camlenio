"use client";

import { LazyMotion, domMax, m } from "framer-motion";

interface Industry {
  title: string;
  description: string;
}

const industries: Industry[] = [
  {
    title: "IT & Software Companies",
    description:
      "Custom software development, API engineering, cloud solutions, and highly scalable platforms.",
  },
  {
    title: "Manufacturing & Industrial Units",
    description:
      "Process automation, ERP integration, and operational optimization for improved efficiency.",
  },
  {
    title: "Healthcare & Hospitals",
    description:
      "Secure systems for patient management, billing, compliance, and healthcare operations.",
  },
  {
    title: "Education & Institutions",
    description:
      "Digital learning platforms, student management systems, and administrative solutions.",
  },
  {
    title: "Retail & E-commerce",
    description:
      "POS systems, inventory management, and scalable online sales platforms.",
  },
  {
    title: "Finance & Fintech",
    description:
      "Secure fintech platforms, payment solutions, KYC systems, and API integrations.",
  },
  {
    title: "Logistics & Enterprises",
    description:
      "Logistics management, real-time tracking systems, and enterprise automation solutions.",
  },
];

export default function IndustriesWeServe() {
  return (
    <LazyMotion features={domMax}>
      <section className="relative pb-20 lg:-mt-30 overflow-hidden">
        {/* Ambient Decorative Objects */}
        <div className="pointer-events-none absolute inset-0">
          {/* Top Left Glow */}
          <m.div
            className="absolute top-24 -left-24 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Bottom Right Glow */}
          <m.div
            className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl"
            animate={{ y: [0, -25, 0], x: [0, -20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Dot */}
          <m.div
            className="absolute top-5 right-1/4 h-20 w-20 rounded-full bg-orange-500/20"
            animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=""
          >
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-950 text-center">
              Industries{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
                }}
              >
                We Serve
              </span>
            </h2>

            <p className="max-w-2xl mx-auto mt-2 text-gray-600 text-sm md:text-base font-sans text-center">
              At Camlenio Software, we provide reliable and scalable digital
              solutions across multiple industries, helping businesses grow with
              technology.
            </p>
          </m.div>

          {/* Industries List */}
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <m.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative border-l-2 border-orange-500 pl-5"
              >
                {/* Small animated dot */}
                <m.span
                  className="absolute -left-[6px] top-2 h-2 w-2 rounded-full bg-orange-500"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <h3 className="text-lg sm:text-xl font-semibold text-gray-950">
                  {industry.title}
                </h3>
                <p className="mt-2 max-w-4xl mx-auto text-gray-600 text-sm md:text-base font-sans">
                  {industry.description}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
