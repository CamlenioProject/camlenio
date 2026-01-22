"use client";

import Image from "next/image";
import { LazyMotion, domMax, m } from "framer-motion";
import Link from "next/link";
import { Button } from "@/app/components/ui/Button";

export default function PremiumHero() {
  return (
    <LazyMotion features={domMax}>
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 pt-24 sm:pt-28 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <m.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-3xl"
            >
              {/* Title */}
              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
                Customized <br />
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                  }}
                >
                  Software Development
                </span>
              </h1>
              {/* Description */}
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-700">
                <span className="font-semibold text-gray-800">
                  Camlenio Software Pvt. Ltd.
                </span>{" "}
                delivers tailor-made software solutions designed to match your
                business processes, goals, and growth. We build secure,
                scalable, and high-performance software that drives efficiency
                and innovation.
              </p>
              {/* CTA */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button
                    size="xl"
                    className="my-6 self-center md:self-start shadow-md"
                  >
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </m.div>

            {/* RIGHT IMAGE */}
            <m.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="relative mx-auto w-full max-w-md lg:max-w-base pt-4"
            >
              <div className="relative aspect-[4/4] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                  alt="Software development team collaboration"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 ">
                <span className="absolute bottom-8 -left-8 rounded-md bg-orange-500/90 px-3 py-1 text-sm font-medium text-gray-100 shadow-md backdrop-blur animate-[bounce_3s_linear_infinite]">
                  We build it your way
                </span>
                <span className="absolute top-8 -right-8 rounded-md bg-orange-500/90 px-3 py-1 text-sm font-medium text-gray-100 shadow-md backdrop-blur animate-[bounce_3s_linear_infinite]">
                  Easy. Secure. Scalable
                </span>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-7xl"
          >
            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight text-gray-900">
              Build Software That Fits Your Business{" "}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
                }}
              >
                Not the Other Way Around
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-sans">
              At{" "}
              <span className="font-medium text-gray-800">
                Camlenio Software Pvt. Ltd.
              </span>
              , we specialize in Customized Software Development that aligns
              perfectly with your business processes, goals, and growth plans.
              We design, develop, and deploy tailor-made software solutions that
              improve efficiency, reduce operational costs, and give you a
              competitive edge.
            </p>

            <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 font-sans">
              Whether you’re a startup, SME, or enterprise, our custom software
              solutions are built to scale with your business.
            </p>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
