"use client";

import { LazyMotion, domMax, m } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/Button";
import { 
  Search, Palette, Code2, ShieldCheck, Rocket, Zap, 
  Users, Shield, Clock, HeartHandshake, ArrowRight 
} from "lucide-react";

// Feature Data
const features = [
  { title: "Experienced Team", icon: Users },
  { title: "Scalable Apps", icon: Shield },
  { title: "Agile Process", icon: Zap },
  { title: "High Performance", icon: Rocket },
  { title: "Transparent Flow", icon: Clock },
  { title: "24/7 Support", icon: HeartHandshake },
];

// Process Data
const processSteps = [
  { title: "Discovery", description: "Requirement Analysis", icon: Search },
  { title: "Design", description: "UI/UX & Wireframing", icon: Palette },
  { title: "Development", description: "App Engineering", icon: Code2 },
  { title: "Quality Assurance", description: "Testing & Security", icon: ShieldCheck },
  { title: "Deployment", description: "Play Store Launch", icon: Rocket },
];

export default function WhyChooseUs() {
  const router = useRouter();

  return (
    <LazyMotion features={domMax}>
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* --- MAIN FEATURE CARD (SaaS Dark Style) --- */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[3rem] bg-[#050505] border border-white/5 shadow-2xl p-8 md:p-16 mb-32 relative overflow-hidden"
          >
            {/* Subtle Glow */}
            <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-orange-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
                  Why Leading Brands <br />
                  <span className="text-orange-500">Trust Camlenio</span>
                </h2>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                  We blend cutting-edge technology with deep industry expertise to build Android applications that don't just work—they excel in the market.
                </p>

                <Button
                  onClick={() => router.push('/contact')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-7 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-600/20 text-lg h-auto"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {features.map((feature, index) => (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white/5 backdrop-blur-md rounded-[2rem] p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-500"
                  >
                    <div className="w-12 h-12 bg-orange-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                      <feature.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-white font-bold text-sm md:text-base">
                      {feature.title}
                    </h3>
                  </m.div>
                ))}
              </div>
            </div>
          </m.div>

          {/* --- PROCESS STEPS (Premium SaaS Flow) --- */}
          <div>
            <div className="text-center mb-24">
              <m.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Our Methodology</span>
              </m.div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Our Development <span className="text-orange-600">Lifecycle</span>
              </h3>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                A streamlined approach to building high-quality Android applications from concept to launch, ensuring speed and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative px-4">
              {/* Connecting Line (Desktop) - Refined with Gradient */}
              <div className="hidden md:block absolute top-[35px] left-[50px] right-[50px] h-[2px] bg-gray-100 -z-10" />

              {processSteps.map((step, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-orange-200/50 relative z-10">
                    <step.icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-all duration-500" />
                    {/* Floating Phase Label for Desktop */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                    {step.description}
                  </p>
                  
                  <div className="text-[11px] font-black text-gray-300 group-hover:text-orange-600 tracking-[0.2em] uppercase transition-colors transition-transform duration-300 group-hover:translate-y-1">
                    PHASE 0{index + 1}
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
