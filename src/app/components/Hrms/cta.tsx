import { m, domMax, LazyMotion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <LazyMotion features={domMax}>
      <section
        aria-labelledby="cta-title"
        className="relative overflow-hidden py-8"
      >
        <div className="relative mx-auto max-w-[85rem] px-6  bg-orange-500/5 rounded-2xl">
          <div className="rounded-3xl p-10 text-center">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
            >
              <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >
                Transform
              </span>{" "}
              Your HR Operations Today
            </m.h2>

            <m.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center text-gray-600 text-sm md:text-base  font-sans"
            >
              Looking to automate and optimize your HR processes? Contact
              Camlenio Software Pvt. Ltd. for a free HRMS consultation and demo.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/component/company/contact">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-600/40 transition-all duration-300 focus:outline-none cursor-pointer"
                >
                  Get Free Consultation
                </button>
              </Link>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
