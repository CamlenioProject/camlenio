"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            Reliable{" "}
            <span
              className="text-orange-500 relative inline-block"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              ART Bank Software Services
            </span>{" "}
            in Jaipur
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-sm sm:text-base text-gray-600 font-sans font-medium leading-relaxed max-w-3xl mx-auto text-left md:text-center"
          >
            <p>
              The fertility healthcare industry is rapidly growing, and clinics require intelligent digital systems to efficiently manage critical patient data, donor records, IVF cycles, appointments, and reporting. We offer a powerful ART Bank Software solution tailored for fertility centers, IVF clinics, sperm banks, and egg donation facilities.
            </p>
            <p>
              As a leading fertility software company in Jaipur, we specialize in creating user-friendly and secure software systems that streamline complex operations while ensuring compliance, accuracy, and patient satisfaction. Our software solutions are designed to help clinics reduce manual work, improve communication, and enhance overall clinic management through automation and data handling.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
