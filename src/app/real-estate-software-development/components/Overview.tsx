"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Overview() {
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
            Build Smarter Property Solutions{" "}
            <span
              className="text-orange-500 relative inline-block"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              with Camlenio
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-sm sm:text-base text-gray-600 font-sans font-medium leading-relaxed max-w-3xl mx-auto text-left md:text-center"
          >
            <p>
              Camlenio is a reliable real estate software development company in Jaipur offering modern technology solutions tailored for the growing real estate industry. We help businesses streamline property listings, booking management, CRM operations, tenant handling, and sales automation with smart digital platforms.
            </p>
            <p>
              As a professional property management software company in Jaipur, we focus on building feature-rich software that improves operational efficiency and improves customer experience. If you are a beginner or a real estate agency, builder, or enterprise, our customized solutions are designed to support your long-term business growth. Our expertise includes real estate ERP software company solutions, property booking software, and SaaS based platforms that help businesses to manage multiple projects, clients, and properties from a single dashboard.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
