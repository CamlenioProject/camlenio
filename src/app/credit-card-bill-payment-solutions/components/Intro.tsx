"use client";

import { motion } from "framer-motion";
import { CreditCard, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";

export default function Intro() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-orange-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT SIDE: Credit Card Image */}
          <div className="lg:col-span-6 relative h-[350px] sm:h-[450px] flex items-center justify-center">
            {/* Background blob */}
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-orange-400/20 to-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-[320px] sm:w-[400px] aspect-[1.586/1] drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)]"
            >
              <img
                src="/assets/credit-card/credit-card-img1.webp"
                alt="Secure Credit Card Processing"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>

          {/* RIGHT SIDE: Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Secure Credit Card Bill Payment Solutions <br />
                For{" "}
                <span className="text-orange-500">
                  Fintech Businesses
                </span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify font-sans font-medium">
                In today’s digital economy, customers require secure and convenient payment options. Camlenio delivers comprehensive Credit Card Bill Payment solutions that help businesses provide seamless and reliable payment services. As a top fintech software development company in Jaipur, we develop scalable platforms that enable real-time transactions, enhance customer experiences, and guarantee secure payment processing.
              </p>
              <p className="text-gray-655 text-sm sm:text-base leading-relaxed text-justify font-sans font-medium">
                Our solutions are ideal for fintech beginners and financial institutions looking for digital growth. Powered by advanced credit card bill payment software, our platforms offer secure, fast, and efficient transaction management to help long-term business success.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
