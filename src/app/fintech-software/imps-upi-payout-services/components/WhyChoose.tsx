"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import Image from "next/image";

export default function WhyChoose() {
  const smoothTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-orange-200/20 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-amber-200/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN: Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold tracking-widest uppercase mb-6"
            >
              <Activity className="w-3 h-3" /> TRUST & RELIABILITY
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
            >
              Why Camlenio Payout API Is the  <span
                className="text-orange-500"
                style={{
                  textShadow:
                    "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                }}
              >Most Trustworthy?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: 0.2 }}
              className="text-base md:text-lg text-slate-600 leading-relaxed text-justify"
            >
              The Payout API is built to manage large transactions with accuracy. Our software enables companies to send amounts directly to bank accounts using multiple payment modes from a single platform. With easy integration and accurate time processing, our software guarantees an easy fund transfer without manual action.

              By using the Camlenio Payout API, the companies can automate the payments, decrease the operational cost and improve the correct transaction. The API is accessible, highly securable and intended to scale as your business grows.

            </motion.p>
          </div>

          {/* RIGHT COLUMN: Visual Identity (Image) */}
          <div className="relative w-full aspect-square md:aspect-[4/3] max-w-lg mx-auto lg:ml-auto">
            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-400 rounded-full blur-3xl opacity-20" />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/10 border border-white/50"
            >
              <Image
                src="/fintech/trust_visual.png"
                alt="Secure Trust Shield 3D Illustration"
                fill
                className="object-cover bg-white"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
