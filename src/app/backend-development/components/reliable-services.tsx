"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  Cpu,
  Database,
  Workflow,
  ArrowRight
} from "lucide-react";

export default function ReliableServices() {
  return (
    <section
      className="relative w-full py-24 bg-transparent overflow-hidden"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Decorative ambient glows */}
      <div className="absolute top-[20%] left-[-15%] w-[450px] h-[450px] bg-gradient-to-tr from-orange-400/5 to-amber-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* ========================================================================= */}
          {/* --- LEFT COLUMN: STITCH UNIQUE DYNAMIC 3D BACKEND SYNC ARTWORK --- */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 w-full flex items-center justify-center relative">

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative w-full aspect-[1.2] rounded-[32px] overflow-hidden shadow-xs flex items-center justify-center bg-transparent border-0"
              style={{ transform: "translateZ(0)" }}
            >
              {/* Subtle translucent glass tech overlay inside image */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent z-10 pointer-events-none" />

              {/* High-Resolution Stitch Generated 3D Translucent Glass Synchronization Art */}
              <img
                src="/ServiceDropdown/backenddevelopment/backend_sync_art.png"
                alt="Reliable Backend Synchronization Art"
                className="w-full h-full object-cover rounded-[32px] transform group-hover:scale-102 transition-transform duration-700"
                style={{ transform: "translateZ(0)" }}
              />
            </motion.div>

          </div>

          {/* ========================================================================= */}
          {/* --- RIGHT COLUMN: STRICT PROVIDED CONTENT TEXT CARD --- */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-[10px] font-bold text-orange-600 mb-6 tracking-wide shadow-2xs uppercase">
              Robust Core Systems
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-3xl sm:text-[40px] font-black text-[#0f172a] leading-[1.15] tracking-tight mb-6">
                Reliable Backend <br className="hidden sm:block" />
                <span
                  className="text-orange-500 inline-block mt-1"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                  }}
                >
                  Development Services
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6 text-slate-500 font-medium text-sm sm:text-base leading-relaxed"
            >
              <p>
                In a trending digital environment, powerful and efficient backend platforms are the basis of every successful application. Camlenio provides industry managing Backend Development Services intended to boost seamless performance, security, and scalability. As a trustworthy backend development company, specify in creating high-performance architecture that helps modern business requirements.
              </p>

              <p>
                Our experienced Backend Developers customized Backend Development solutions for SMEs, beginners, and Enterprises. If you require Backend Web Development and Mobile Apps, and complete Server Side Development, we guarantee your platform is reliable and future-rich.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
