"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Cloud, 
  Layers, 
  ShieldCheck, 
  Settings, 
  Cpu, 
  Database,
  ArrowUpRight
} from "lucide-react";

export default function ScalableEnterprise() {
  return (
    <section 
      className="relative w-full py-20 bg-transparent overflow-hidden"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-orange-400/5 to-amber-500/5 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* ========================================================================= */}
          {/* --- SCALABLE & CLOUD-BASED BACKEND SYSTEMS --- */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative bg-white/80 backdrop-blur-md border border-slate-100/90 rounded-[32px] p-8 md:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-15px_rgba(251,146,60,0.05)] transition-all duration-500 flex flex-col justify-between"
            style={{ transform: "translateZ(0)" }}
          >
            {/* Subtle top light catch overlay */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/20 to-transparent" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-tr-[32px] pointer-events-none -z-10" />

            <div>
              {/* Header Icon */}
              <div className="inline-flex items-center justify-center p-3.5 bg-orange-50 border border-orange-100 rounded-2xl text-orange-500 mb-8 shadow-3xs group-hover:scale-105 transition-transform duration-300">
                <Cloud className="w-6 h-6" />
              </div>

              <h2 className="text-2xl sm:text-[32px] font-black text-[#0f172a] leading-tight tracking-tight mb-6">
                Scalable & Cloud-Based <br />
                <span 
                  className="text-orange-500 inline-block mt-1" 
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582322",
                  }}
                >
                  Backend Systems
                </span>
              </h2>

              <div className="flex flex-col gap-6 text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
                <p>
                  Our expert in Cloud Backend Development allows businesses to scale effortlessly. We design Scalable Backend Solutions that manage high traffic and complex solutions without compromising performance. We guarantee your app stays responsive and efficient from real-time Backend Development to API Driven Backend Development.
                </p>
                
                <p>
                  We also provide{" "}
                  <Link 
                    href="/frontend-development"
                    className="text-orange-500 hover:text-orange-600 font-semibold hover:font-bold underline decoration-2 decoration-orange-300/60 hover:decoration-orange-500 transition-all duration-300"
                  >
                    Frontend Web Development
                  </Link>{" "}
                  & Backend as a Service (SaaS) solutions to decrease development time and operational costs, making it easier for businesses to launch and grow quickly.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-orange-600 tracking-wider uppercase">
              <span>Cloud Capabilities</span>
              <ArrowUpRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* --- ENTERPRISE GRADE BACKEND DEVELOPMENT --- */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative bg-white/80 backdrop-blur-md border border-slate-100/90 rounded-[32px] p-8 md:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-15px_rgba(251,146,60,0.05)] transition-all duration-500 flex flex-col justify-between"
            style={{ transform: "translateZ(0)" }}
          >
            {/* Subtle top light catch overlay */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/20 to-transparent" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/5 to-transparent rounded-tr-[32px] pointer-events-none -z-10" />

            <div>
              {/* Header Icon */}
              <div className="inline-flex items-center justify-center p-3.5 bg-indigo-50 border border-indigo-100 rounded-2xl text-indigo-500 mb-8 shadow-3xs group-hover:scale-105 transition-transform duration-300">
                <Layers className="w-6 h-6" />
              </div>

              <h2 className="text-2xl sm:text-[32px] font-black text-[#0f172a] leading-tight tracking-tight mb-6">
                Enterprise Grade <br />
                <span 
                  className="text-orange-500 inline-block mt-1" 
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582322",
                  }}
                >
                  Backend Development
                </span>
              </h2>

              <div className="flex flex-col gap-6 text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
                <p>
                  As a Top Backend Development Company India, offers powerful Enterprise Backend Development solutions. We develop high-performing platforms like:
                </p>

                {/* Styled Lists for Enterprise Platforms */}
                <div className="flex flex-col gap-4 my-2">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 p-1.5 bg-orange-50 border border-orange-100 rounded-lg text-orange-500">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <p className="text-slate-600 font-semibold text-[13px] sm:text-sm">
                      Advanced Backend in Web Development frameworks for dynamic websites
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 p-1.5 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-500">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <p className="text-slate-600 font-semibold text-[13px] sm:text-sm">
                      Secure Backend Software Development for Financial and Enterprise Apps
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 p-1.5 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-500">
                      <Settings className="w-4 h-4" />
                    </div>
                    <p className="text-slate-600 font-semibold text-[13px] sm:text-sm">
                      Backend CRM Development for Business Automation
                    </p>
                  </div>
                </div>

                <p>
                  Our solutions are intended to help the long-term operations with maximum efficiency and security.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-indigo-600 tracking-wider uppercase">
              <span>Enterprise Grade</span>
              <ArrowUpRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
