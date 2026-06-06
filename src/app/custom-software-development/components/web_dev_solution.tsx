"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/Button";

const WebDevSolution = () => {
  const router = useRouter();

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">

          {/* Left Side: Overlapping Tilted Cards */}
          <div className="flex-1 relative w-full max-w-xl">
            <div className="relative aspect-square flex items-center justify-center">

              {/* Card 1: Business Card (Tilted Left) */}
              <motion.div
                initial={{ opacity: 0, x: -100, rotate: -20 }}
                whileInView={{ opacity: 1, x: 0, rotate: -12 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "circOut" }}
                className="absolute top-0 left-0 w-[75%] aspect-[0.85/1] bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-orange-100 p-8 z-10"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center shadow-inner">
                    <div className="w-5 h-5 bg-orange-500 rounded-md animate-pulse" />
                  </div>
                  <span className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.2em]">Strategy</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Market Research", value: "92%" },
                    { label: "Tech Discovery", value: "88%" },
                    { label: "Scope Definition", value: "100%" }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100 flex items-center justify-between group hover:bg-white transition-colors duration-300">
                      <span className="text-[12px] font-bold text-gray-600">{item.label}</span>
                      <span className="text-[11px] font-bold text-orange-500">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Card 2: Readiness Plan (Tilted Right) */}
              <motion.div
                initial={{ opacity: 0, x: 100, rotate: 20 }}
                whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1, ease: "circOut" }}
                className="absolute bottom-0 right-0 w-[80%] aspect-[0.85/1] bg-orange-50 rounded-[3rem] shadow-[0_60px_120px_-30px_rgba(249,115,22,0.15)] border border-orange-200/50 p-10 z-20 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                      <FaCheckCircle className="text-orange-500 text-xl" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-none">Custom Plan</h4>
                      <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold tracking-widest">Camlenio Core</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-orange-200 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors cursor-pointer">
                    <FaArrowRight className="text-xs" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    "UI/UX Design",
                    "Architecture",
                    "Security",
                    "Quality QA"
                  ].map((text, i) => (
                    <div key={i} className="h-12 bg-white rounded-xl border border-orange-100/50 flex items-center px-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-green-400' : 'bg-orange-400'} mr-3`} />
                      <span className="text-[10px] font-bold text-gray-700">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-[12px] font-bold text-gray-900 mb-1">Success Score</p>
                    <div className="text-3xl font-black text-orange-600">98/100</div>
                  </div>
                  <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center border border-orange-100">
                    <span className="text-2xl font-black text-orange-600">A+</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.05] tracking-tight">
                Customized Solutions for <span className="text-orange-500 italic">Business Growth</span>
              </h2>

              <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-12 max-w-xl font-medium">
                Our experts specialize in designing fully custom digital platforms that meet your essential requirements. We cover the entire lifecycle, from UI/UX design and architecture to robust backend development.
              </p>

              <ul className="space-y-6 mb-14">
                {[
                  "Dynamic and data-driven web application development",
                  "Consistent user experiences across all devices",
                  "Advanced technologies for top-performing platforms",
                  "High-quality custom web development solutions"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-5 text-gray-800 font-bold group"
                  >
                    <div className="mt-1 w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      <FaCheckCircle className="text-sm" />
                    </div>
                    <span className="text-base md:text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-6">
                <Button
                  onClick={() => router.push("/contact")}
                  size="xl"
                  className="shadow-2xl shadow-orange-500/20"
                >
                  Free Consultation
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WebDevSolution;
