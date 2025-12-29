"use client";

import { LazyMotion, domMax, m } from "framer-motion";

const services: {
  title: string;
  description: string;
}[] = [
  {
    title: "Custom Software Consulting",
    description:
      "We analyze your business challenges and define the right software strategy, architecture, and technology stack.",
  },
  {
    title: "Enterprise Software Development",
    description:
      "Secure and scalable enterprise systems that streamline operations and support complex workflows.",
  },
  {
    title: "Web-Based Custom Software",
    description:
      "High-performance web applications with intuitive UI and seamless integrations.",
  },
  {
    title: "Mobile App Software Development",
    description:
      "Custom Android and iOS applications built for usability, performance, and scale.",
  },
  {
    title: "SaaS Application Development",
    description:
      "Cloud-native SaaS products with multi-tenant architecture and high availability.",
  },
  {
    title: "Software Integration Services",
    description:
      "Seamless integration with APIs, payment gateways, CRMs, ERPs, and legacy systems.",
  },
  {
    title: "Legacy Software Modernization",
    description:
      "Transform outdated systems into modern, secure, and scalable platforms.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing monitoring, optimization, updates, and technical support post-deployment.",
  },
];

export default function CustomSoftware() {
  return (
    <LazyMotion features={domMax}>
      <section className="relative ">
        <div className="mx-auto max-w-7xl px-6 py-1 lg:py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* LEFT CONTENT */}
            <m.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-xl lg:sticky top-30"
            >
              <div className="text-orange-500 text-xs mb-2 font-semibold ml-2 tracking-widest uppercase">
                {"Custom Solution —"}
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Custom Software Development{" "}
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                  }}
                >
                  Services <br />
                </span>
              </h2>

              <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-700 font-sans">
                We offer end-to-end custom software development services, from
                idea to deployment and beyond. Every solution is designed to
                align with your business goals, processes, and long-term growth.
              </p>

              <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-700 font-sans">
                Whether you are a startup, SME, or enterprise, our services are
                engineered to scale with confidence.
              </p>
            </m.div>

            {/* RIGHT SIDE – SMOOTH SERVICE FLOW */}
            <div className="relative">
              {/* Vertical guide */}
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-orange-500 via-orange-300 to-transparent" />

              <div className="space-y-6 pl-10">
                {services.map((service, index) => (
                  <m.div
                    key={service.title}
                    initial={{ opacity: 0, x: 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: index * 0.05,
                    }}
                  >
                    <h3 className="text-base sm:text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </m.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
