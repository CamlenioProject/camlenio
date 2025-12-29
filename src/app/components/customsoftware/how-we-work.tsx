"use client";

import { LazyMotion, domMax, m } from "framer-motion";

const features: string[] = [
  "Fully tailored to your business workflows",
  "Scalable architecture for future growth",
  "High-level security & data protection",
  "User-friendly interfaces",
  "API & third-party integrations",
  "Cloud & on-premise deployment options",
  "Cross-platform compatibility",
  "Detailed analytics & reporting",
];

export default function SoftwareKeyFeaturesSignal() {
  return (
    <LazyMotion features={domMax}>
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50/95 via-slate-100/90 to-slate-100/95" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-20">
          {/* MAIN SPLIT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* LEFT — TEXT */}
            <div className="lg:col-span-6 pr-0 lg:pr-16">
              {/* Header */}
              <m.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-10 max-w-xl"
              >
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                  Key Features of Our <br />
                  <span
                    className="text-orange-500"
                    style={{
                      textShadow:
                        "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                    }}
                  >
                    Custom Software Solutions
                  </span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-slate-600 font-sans">
                  Designed as an integrated system — every feature works
                  together to support performance, security, and long-term
                  scalability.
                </p>
              </m.div>

              {/* Signal List */}
              <div className="relative">
                <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-orange-400/80 via-orange-300/40 to-transparent" />

                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <m.li
                      key={feature}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex items-start gap-6"
                    >
                      <span className="relative mt-1 h-3 w-3 flex-shrink-0">
                        <span className="absolute h-3 w-3 rounded-full bg-orange-500" />
                        <span className="absolute h-6 w-6 rounded-full bg-orange-400/30 blur-md" />
                      </span>

                      <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-sans">
                        {feature}
                      </p>
                    </m.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT — VIDEO PANEL */}
            <div className="lg:col-span-6 mt-16 lg:mt-0">
              <m.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative h-[22rem] sm:h-[26rem] lg:h-full w-full overflow-hidden rounded-2xl bg-black shadow-2xl"
              >
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="https://res.cloudinary.com/dxpbriwey/video/upload/v1766410752/6720480_IT_Engineer_1280x720_1_stp6g9.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35" />
              </m.div>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
