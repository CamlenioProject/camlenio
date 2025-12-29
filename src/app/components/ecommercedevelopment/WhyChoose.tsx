"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LazyMotion, domMax, m } from "framer-motion";

interface Service {
  title: string;
  desc: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Fully Customized Ecommerce Solutions",
    desc: "We don’t believe in one-size-fits-all platforms. Camlenio builds ecommerce software tailored to your business model, industry needs, and growth goals ensuring maximum flexibility and long-term scalability.",
    image:
      "https://res.cloudinary.com/dxpbriwey/image/upload/v1762154846/shoper-i9CxbB1HlfM-unsplash_un4ol8.jpg",
  },
  {
    title: "Secure, Scalable & High-Performance Architecture",
    desc: "Our ecommerce systems are engineered with secure coding practices and scalable architecture to deliver fast performance, high uptime, and seamless handling of growing traffic and transactions.",
    image:
      "https://res.cloudinary.com/dxpbriwey/image/upload/v1762155322/18872_pitilt.jpg",
  },
  {
    title: "End-to-End Development & Support",
    desc: "From planning and design to development, deployment, and ongoing maintenance, Camlenio provides complete ecommerce development support so you can focus on sales while we manage the technology.",
    image:
      "https://res.cloudinary.com/dxpbriwey/image/upload/v1762154990/piggybank-LYLDANKDE8g-unsplash_swzqys.jpg",
  },
  {
    title: "Advanced Features That Drive Sales",
    desc: "We integrate AI-based recommendations, smart inventory management, optimized checkout flows, and marketing automation to enhance user experience and significantly boost conversions.",
    image:
      "https://res.cloudinary.com/dxpbriwey/image/upload/v1762155532/375642_khx0i5.jpg",
  },
  {
    title: "Seamless Integrations & Future-Ready Tech",
    desc: "Our ecommerce platforms integrate smoothly with payment gateways, shipping partners, CRM systems, ERP tools, and third-party APIs keeping your business future-ready and easy to scale.",
    image:
      "https://res.cloudinary.com/dxpbriwey/image/upload/v1762155459/5493790_eex9kr.jpg",
  },
  {
    title: "Trusted Technology Partner for Growth",
    desc: "Camlenio is more than a development company. we act as your long-term technology partner with reliable support, transparent communication, and continuous upgrades to help your ecommerce business grow with confidence.",
    image:
      "https://res.cloudinary.com/dxpbriwey/image/upload/v1762155224/babak-eshaghian-pwcLYVaQ-Zc-unsplash_jwffrs.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function WhyChoose() {
  return (
    <LazyMotion features={domMax}>
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Why Choose Camlenio for{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Ecommerce Software?
              </span>{" "}
            </h2>
          </m.div>

          {/* Grid */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service) => (
              <m.article
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 32, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 90,
                      damping: 18,
                    },
                  },
                }}
                whileHover={{ y: -3 }}
                className="group relative rounded-3xl bg-gray-50 border border-orange-200/60 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed font- font-sans text-justify">
                    {service.desc}
                  </p>
                </div>
              </m.article>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
