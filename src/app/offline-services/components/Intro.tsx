"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-orange-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT SIDE: Credit Card Image */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-start mt-12 lg:mt-0">
            <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
              {/* Background glowing circle */}
              <div className="absolute w-72 h-72 bg-gradient-to-tr from-orange-500/20 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Main Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-orange-500/10 shadow-[0_20px_50px_rgba(249,115,22,0.08)] bg-white/50 p-2 group cursor-pointer"
              >
                <img
                  src="/assets/offline-services/offline-services-img1.webp"
                  alt="Documentation and Government Registrations"
                  className="w-full h-full object-cover rounded-[2.2rem]"
                />
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE: Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight font-sans">
                Trusted Documentation & <br />
                <span className="text-orange-500">Government Support</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify font-sans font-medium">
                In today’s fast-growing era, tax filing, managing paperwork, and government-related documentation can be challenging. Camlenio provides a comprehensive offline service that is designed to help business owners and professionals complete important administrative tasks with ease. Our experienced team supports Income Tax Return (ITR) filing, any government-related registrations, and other services.
              </p>
              <p className="text-gray-655 text-sm sm:text-base leading-relaxed text-justify font-sans font-medium">
                We guarantee timely processing, helping clients avoid delays and adherence issues. If you need documentation or business-related support, Camlenio offers reliable solutions.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
