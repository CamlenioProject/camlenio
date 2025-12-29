"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const services = [
  {
    title: "Ecommerce Platforms We Excel In",
    description:
      "We work with leading ecommerce platforms and modern technologies to craft solutions that align perfectly with your business goals — ensuring flexibility, performance, and long-term scalability.",
  },
  {
    title: "Shopify Development & Customization",
    description:
      "From custom theme design to advanced app integrations and seamless migrations, we help you unlock Shopify’s full potential — building fast, conversion-focused stores that scale with your growth.",
  },
  {
    title: "Adobe Commerce (Magento) Development",
    description:
      "We build enterprise-grade ecommerce solutions using Adobe Commerce (Magento), delivering powerful marketplace capabilities, complex catalogs, and cloud-driven performance for high-growth brands.",
  },
  {
    title: "WooCommerce Development",
    description:
      "Using WooCommerce and WordPress, we create flexible and feature-rich ecommerce systems with custom plugins, optimized checkout flows, and complete control over your online store.",
  },
  {
    title: "OpenCart, PrestaShop & More",
    description:
      "For businesses seeking cost-effective yet scalable solutions, we develop secure and customizable stores using OpenCart, PrestaShop, and other modern ecommerce platforms tailored to your needs.",
  },

  {
    title: "Headless E-Commerce Solutions",
    description:
      "For brands demanding speed and flexibility — we deliver Next.js + API-driven architectures that decouple front-end from backend for lightning-fast, scalable commerce experiences.",
  },
];

export default function OurServices() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: "linear",
      });
    }
  }, []);

  return (
    <>
      <section className="relative py-8 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Ecommerce{" "}
              </span>
              Platforms We Have Expertise In
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.15,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                className="relative group"
              >
                {/* Content Container */}
                <div
                  className="relative pl-8 pt-5 pb-5 bg-white/60 rounded-xl backdrop-blur-sm transition-all duration-500 hover:shadow-[0_4px_20px_rgba(255,120,0,0.15)] 
                              border-l-4 border-orange-500 rounded-tl-xl rounded-bl-xl
                              before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-orange-400 before:to-orange-600 before:rounded-l-xl before:shadow-lg before:shadow-orange-500/30 before:transition-all before:duration-300 before:scale-y-0 
                              after:absolute after:top-0 after:left-0 after:h-1 after:w-0 after:bg-gradient-to-r after:from-orange-400 after:to-orange-600 after:rounded-tl-xl after:rounded-br-xl after:shadow-md after:shadow-orange-500/30 after:transition-all after:duration-300 "
                >
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed pr-4 font-sans">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
