"use client"
import { m, domMax, LazyMotion } from "framer-motion";
import Link from "next/link";

interface CTAProps {
  title: string;
  highlightedTitle: string;
  subtitle: string;
  buttontext: string;
}

export default function CTA({
  title,
  highlightedTitle,
  subtitle,
  buttontext,
}: CTAProps) {
  return (
    <LazyMotion features={domMax}>
      <section
        aria-labelledby="cta-title"
        className="relative overflow-hidden py-8"
      >
        <div className="relative mx-auto max-w-7xl px-6  bg-orange-50 rounded-2xl">
          <div className="rounded-3xl p-10 text-center">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
            >
              {title?.split(highlightedTitle)?.[0]}
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                {highlightedTitle}
              </span>{" "}
              {title?.split(highlightedTitle)?.[1]}
            </m.h2>

            <m.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center text-gray-600 text-sm md:text-base  font-sans"
            >
              {subtitle}
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-600/40 transition-all duration-300 focus:outline-none cursor-pointer"
                >
                  {buttontext}
                </button>
              </Link>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
