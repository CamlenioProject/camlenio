"use client";

import { LazyMotion, domMax, m } from "framer-motion";
import {
  Settings2,
  Users,
  ShieldCheck,
  BadgeIndianRupee,
  Clock,
  Headset,
} from "lucide-react";

const trustReasons = [
  {
    icon: Settings2,
    title: "Customized HR Software Solutions",
    description:
      "We design HRMS platforms tailored to your unique business workflows, ensuring a perfect fit for your organisation.",
  },
  {
    icon: Users,
    title: "Experienced Development Team",
    description:
      "Our skilled developers understand real-world HR challenges and build robust systems that address them effectively.",
  },
  {
    icon: ShieldCheck,
    title: "Scalable and Secure Applications",
    description:
      "We deliver cloud-ready, secure, and scalable HR applications built to grow alongside your business.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Development Cost",
    description:
      "Get premium HRMS development services at competitive pricing without compromising on quality or features.",
  },
  {
    icon: Clock,
    title: "Timely Project Delivery",
    description:
      "We follow agile development practices to ensure your HRMS project is delivered on schedule, every time.",
  },
  {
    icon: Headset,
    title: "Ongoing Technical Support",
    description:
      "From deployment to maintenance, our team provides continuous technical support and system upgrades.",
  },
];

export default function WhyTrustUs() {
  return (
    <LazyMotion features={domMax}>
      <section className="relative py-20 overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <m.div
            className="absolute top-10 right-0 h-80 w-80 rounded-full bg-orange-400/15 blur-3xl"
            animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <m.div
            className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-orange-300/10 blur-3xl"
            animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold tracking-widest text-orange-500">
              WHY CHOOSE US
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Why Do Businesses{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Trust Us?
              </span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm md:text-base font-sans">
              Most companies delegate to us because we are a reliable HRMS
              Software Development Company in Jaipur, known for delivering
              creative and scalable HR solutions. Our experienced developers
              understand everyday HR challenges and build customised systems that
              enhance functional efficiency.
            </p>
          </m.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <m.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-sm hover:shadow-[0_4px_24px_rgba(255,120,0,0.12)] transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md shadow-orange-200 mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm font-sans leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Bottom accent line */}
                  <span className="mt-4 block h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-16 rounded-full" />
                </m.div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
