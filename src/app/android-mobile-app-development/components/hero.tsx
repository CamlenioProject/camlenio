"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Zap, Star, Download } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";

// --- Floating UI Elements (Smaller Size) ---
const FloatingCard = ({ children, className, delay = 0, yOffset = -8 }: { children: React.ReactNode, className: string, delay?: number, yOffset?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 15 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`absolute z-40 bg-white rounded-[20px] p-3.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.06)] border border-gray-100/50 backdrop-blur-md ${className}`}
  >
    <motion.div
      animate={{ y: [0, yOffset, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  </motion.div>
);

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-[700px] h-screen w-full overflow-hidden flex flex-col items-center justify-start pt-32 bg-[#fffcf8]">
      
      {/* --- PREMIUM SaaS BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Corner Tints */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-50/40 rounded-full blur-[120px]" />
        
        {/* Central Focus Glow (Requested) */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-200/20 rounded-full blur-[130px]" />
        
        {/* Rounded Grid Pattern (Fixed syntax) */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #ff8d22 1.2px, transparent 1.2px)`,
            backgroundSize: '72px 72px',
            opacity: 0.06,
            maskImage: 'radial-gradient(circle at center, transparent 10%, black 90%)'
          }}
        />

        {/* Artistic Swooshes (Thinner) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1440 800" fill="none">
           <motion.path 
             initial={{ pathLength: 0 }}
             animate={{ pathLength: 1 }}
             transition={{ duration: 2, delay: 0.5 }}
             d="M300 400C400 350 550 300 700 330C850 360 1000 250 1200 300" 
             stroke="#ff8d22" strokeWidth="1" strokeLinecap="round" strokeDasharray="8 8" 
           />
        </svg>
      </div>

      {/* --- MAIN CONTENT (More Compact) --- */}
      <div className="relative z-30 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Headline (Smaller Sizes) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#0f172a] leading-[1.1] tracking-tight">
            Android <span 
              className="text-orange-500 inline-block"
              style={{
                textShadow: "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 5px 0px #ff582326",
              }}
            >
              Mobile App
            </span> <br />
            <span className="text-[#64748b]">Development</span>
          </h1>
        </motion.div>

        {/* Sub-description (Smaller Text & Margin) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-xl mb-8"
        >
          <p className="text-sm md:text-lg text-gray-400 font-medium leading-relaxed">
            Scalable Android solutions from strategy to Play Store deployment. <br className="hidden md:block" />
            High-performance apps built for real engagement.
          </p>
        </motion.div>

        {/* Action Center (Smaller Buttons) */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="flex flex-col sm:flex-row items-center gap-4"
        >
           <Button
            variant="default"
            size="lg"
            onClick={() => router.push("/contact")}
            className="group h-[54px] px-8 bg-[#0f172a] hover:bg-black text-white rounded-[18px] font-black text-sm shadow-[0_15px_30px_-5px_rgba(15,23,42,0.2)]"
          >
            Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

              
        </motion.div>
      </div>

      {/* --- VISUAL ELEMENTS (Compacted) --- */}
      <div className="relative w-full flex-grow flex items-end justify-center">
        
        {/* Floating Expertise Card (Smaller) */}
        <FloatingCard className="bottom-[40%] left-[8%] lg:left-[12%] hidden md:block max-w-[140px]" delay={0.4} yOffset={-10}>
            <div className="flex items-center justify-between mb-3">
               <span className="text-[9px] font-black text-gray-900">Expertise</span>
               <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            </div>
            <div className="w-full aspect-square bg-slate-50 rounded-xl mb-3 flex items-center justify-center border border-gray-100">
               <Smartphone className="w-6 h-6 text-slate-300" />
            </div>
            <div className="text-[10px] font-black text-[#0f172a] flex items-center justify-between">
                Native Kotlin <ArrowRight className="w-2.5 h-2.5 text-orange-500" />
            </div>
        </FloatingCard>

        {/* Floating Users Card */}
        <FloatingCard className="top-5 left-[12%] lg:left-[18%] hidden lg:block" delay={0.6}>
            <div className="flex -space-x-2.5 mb-3">
               {[1, 2, 3].map(i => (
                 <div key={i} className={`w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-black bg-slate-100 text-slate-500`}>
                    {String.fromCharCode(64 + i)}
                 </div>
               ))}
            </div>
            <div className="text-[10px] font-black text-[#0f172a] leading-tight mb-1.5">4k+ Happy Clients</div>
            <div className="flex gap-0.5">
               {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 text-orange-400 fill-orange-400" />)}
            </div>
        </FloatingCard>

        {/* Floating Downloads Card */}
        <FloatingCard className="top-12 right-[12%] lg:right-[18%] hidden lg:block" delay={0.7} yOffset={-6}>
            <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Downloads</div>
            <div className="text-lg font-black text-[#0f172a] mb-2">1M+</div>
            <div className="flex items-center gap-2">
               <div className="p-1.5 bg-green-50 rounded-xl text-green-600">
                  <Download className="w-4 h-4" />
               </div>
            </div>
        </FloatingCard>

        {/* Central Showcase Mockup (Smaller) */}
        <div className="relative w-full max-w-[900px] flex justify-center pointer-events-none z-10 translate-y-[35%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 150 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[300px] md:w-[600px] lg:w-[700px] aspect-[14/10]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-orange-600/[0.03] rounded-full blur-[80px] -z-10" />
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image
                src="/mobappdev/mobile-app-development.png"
                alt="Central App Mockup"
                fill
                priority
                className="object-contain drop-shadow-[0_-30px_60px_rgba(0,0,0,0.08)]"
              />
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Bottom Mask */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-40 pointer-events-none" />
    </section>
  );
}