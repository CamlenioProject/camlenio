"use client"

import { m, domMax, LazyMotion } from "framer-motion";
import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  {
    src: "/ServiceDropdown/ecommercedevelopment/icici-logo.png",
    alt: "Innovation",
  },
  {
    src: "/ServiceDropdown/ecommercedevelopment/paysprint-logo.svg",
    alt: "Performance",
  },
  {
    src: "/ServiceDropdown/ecommercedevelopment/logo-sbmbank.webp",
    alt: "Design",
  },
  {
    src: "/ServiceDropdown/ecommercedevelopment/instantpay-logo.svg",
    alt: "Design",
  },
  {
    src: "/ServiceDropdown/ecommercedevelopment/idfc-logo.svg",
    alt: "Design",
  },
  {
    src: "/ServiceDropdown/ecommercedevelopment/hdfc-logo.svg",
    alt: "Design",
  },
  {
    src: "/ServiceDropdown/ecommercedevelopment/cashfree-logo.svg",
    alt: "Design",
  },
];

export function LogoSlider() {
  return (
    <LazyMotion features={domMax}>
      <section
        aria-labelledby="cta-title"
        className="relative overflow-hidden"
      >
        <div className="relative py-8 overflow-hidden bg-gradient-to-r from-orange-100 via-orange-100 to-orange-100">
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />

          <m.div
            className="flex items-center gap-12 md:gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
            style={{ width: "max-content" }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={320}
                  height={80}
                  className="h-6 sm:h-8 md:h-10 w-auto object-contain opacity-70"
                  priority={index < logos.length}
                />
              </div>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
