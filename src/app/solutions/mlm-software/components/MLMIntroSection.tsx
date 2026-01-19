"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MLMIntroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-orange-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-rose-200/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] border border-orange-200/30 rounded-full" />
        <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-orange-200/40 rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative bg-orange-50 border border-orange-100 rounded-3xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-orange-500 via-rose-500 to-orange-500 bg-[length:200%_200%] animate-gradientMove" />

            <div className="px-14 py-16 text-center">
              {/* heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                // className="text-[40px] leading-[1.2] font-bold text-gray-900 mb-6"
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
              >
                Custom MLM Software Solutions to Grow Your Network{" "}
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                  }}
                >
                  Marketing Business
                </span>
              </motion.h2>

              {/* description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto text-gray-600 text-sm md:text-base mb-12 font-sans text-justify"
              >
                Empower your{" "}
                <span className="font-semibold text-gray-900">
                  Network Marketing Business
                </span>{" "}
                with scalable, secure, and performance-driven MLM software from{" "}
                <span className="font-semibold text-orange-600">
                  Camlenio Software Pvt. Ltd.
                </span>
                .
              </motion.p>

              {/* feature pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {[
                  "Custom Compensation Plans",
                  "Real-time Analytics",
                  "Secure & Scalable",
                  "24×7 Support",
                ].map((item, i) => (
                  <span
                    key={item}
                    className={`px-4 py-2 rounded-full border text-[13px] font-medium
                      bg-gray-100 text-gray-700 border-gray-200
                      transition-all duration-300 hover:bg-orange-50 hover:border-orange-300
                      ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-3" 
                      }
                    `}
                    style={{ transitionDelay: `${i * 80 + 300}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex justify-center gap-4">
                <a
                  href="/contact"
                  className="relative overflow-hidden px-8 py-4 rounded-full text-[14px] font-semibold text-white bg-orange-500 transition-all duration-300"
                >
                  Get Started Free
                </a>
              </div>

              {/* stats */}
              <div className="mt-10 pt-10 border-t border-gray-200">
                <div className="grid grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {[
                    { v: "500+", l: "Clients" },
                    { v: "99.9%", l: "Uptime" },
                    { v: "10M+", l: "Transactions" },
                    { v: "24/7", l: "Support" },
                  ].map((s, i) => (
                    <div
                      key={s.l}
                      className={`transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-3"
                      }`}
                      style={{ transitionDelay: `${i * 100 + 600}ms` }}
                    >
                      <div className="text-sm md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-rose-400 bg-clip-text text-transparent">
                        {s.v}
                      </div>
                      <div className="text-[13px] text-gray-600 mt-1">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, 30px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-30px, -30px);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 24s ease-in-out infinite;
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
