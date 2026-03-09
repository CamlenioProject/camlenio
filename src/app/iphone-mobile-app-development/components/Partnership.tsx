"use client";

import { motion } from "framer-motion";
import { Apple, CheckCircle2, Star, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/app/components/ui/Button";

export default function Partnership() {
  return (
    <section className="w-full py-12 md:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-400/5 rounded-full blur-[100px] -translate-y-1/2 -ml-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-[120px] -mr-20 -mb-20"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-800 text-sm font-semibold mb-8 shadow-sm">
              <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
              Trusted Partnership
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.2] mb-8 tracking-tight">
              Build A Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">iOS App With Camlenio</span>
            </h2>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium mb-10">
              Are you looking for a top-speed iOS Application that shows up in the Apple App Store? Camlenio is one of the most trustworthy firms that provide high-quality iOS App Development services.
            </p>

            <div className="space-y-4">
              {[
                "Strategic Roadmap & Planning",
                "High-Performance Native Execution",
                "Security-First Architecture"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100 shadow-inner">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                  </div>
                  <span className="text-slate-700 font-bold text-sm tracking-wide uppercase">{item}</span>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <Button size="xl" className="rounded-2xl gap-2 group" asChild>
                <Link href="/contact">
                  Work With Us
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative p-8 md:p-12 bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden border border-slate-800 group">
              {/* Internal Glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -mr-20 -mt-20"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-10 border border-white/20 group-hover:scale-110 transition-transform duration-500">
                  <Apple className="w-8 h-8 text-white" />
                </div>

                <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium mb-8 italic">
                  "Our iOS development services are intended to support beginners, enterprises, and growing companies convert their ideas into scalable digital products. Connect with our expertise today and start making an iOS App that your users like."
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 to-orange-400 p-[2px]">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">C</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Camlenio Strategy</h4>
                    <p className="text-white/40 text-xs">Innovation Partner</p>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
