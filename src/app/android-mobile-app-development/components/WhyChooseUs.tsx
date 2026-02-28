"use client";

import { LazyMotion, domMax, m } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/Button";
import { Search, Palette, Code2, ShieldCheck, Rocket, Zap, Users, Shield, Clock, HeartHandshake, ArrowRight, ChevronRight, Check } from "lucide-react";

// Feature Data
const features = [
  {
    title: "Experienced Team",
    icon: Users,
  },
  {
    title: "Scalable Apps",
    icon: Shield,
  },
  {
    title: "Agile Process",
    icon: Zap,
  },
  {
    title: "High Performance",
    icon: Rocket,
  },
  {
    title: "Transparent",
    icon: Clock,
  },
  {
    title: "24/7 Support",
    icon: HeartHandshake,
  },
];

// Process Data
const processSteps = [
  {
    title: "Requirement Analysis",
    subtitle: "Step 01",
    description: "App Strategy",
    icon: Search,
  },
  {
    title: "UI/UX Design",
    subtitle: "Step 02",
    description: "Wireframing",
    icon: Palette,
  },
  {
    title: "App Development",
    subtitle: "Step 03",
    description: "Integration",
    icon: Code2,
  },
  {
    title: "Testing & QA",
    subtitle: "Step 04",
    description: "Performance", // Shortened for design balance
    icon: ShieldCheck,
  },
  {
    title: "Play Store Launch",
    subtitle: "Step 05",
    description: "Support",
    icon: Rocket,
  },
];

export default function WhyChooseUs() {
  const router = useRouter(); // Use router for navigation

  return (
    <LazyMotion features={domMax}>
      <section className="py-24 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

          {/* --- MAIN SPLIT CARD (Compact Dark) --- */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-black/50 p-6 md:p-10 mb-20 relative overflow-hidden"
          >
            {/* Decorative Blob */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-900/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* LEFT CONTENT */}
              <div className="space-y-5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                  Why Choose <br />
                  <span
                    className="text-orange-500"
                    style={{
                      textShadow:
                        "-1px -1px 0px #da5f00, 3px 3px 0px #cfcfcfff, 4px 6px 0px #ff582336",
                    }}
                  >
                    Camlenio Software?
                  </span>
                </h2>

                <p className="text-base md:text-lg text-gray-400 font-medium max-w-sm leading-relaxed">
                  We offer a variety of tools and resources to help you manage your business more effectively with our robust Android solutions.
                </p>

                <Button
                  variant="default"
                  size="lg"
                  className="rounded-full pl-6 pr-2 py-2 h-auto gap-3 bg-orange-500 text-white hover:bg-orange-600/30 shadow-lg shadow-white/10 transition-all duration-300 group mt-2 cursor-pointer"
                  onClick={() => router.push('/contact')}
                >
                  <span className="text-sm uppercase tracking-wide font-bold">Start Project</span>
                  <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </Button>
              </div>

              {/* RIGHT GRID (3 Columns for compact look) */}
              <div className="grid grid-cols-3 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: "circOut" }}
                    className="bg-white rounded-[1.5rem] p-4 flex flex-col items-center text-center justify-center aspect-square shadow-sm border border-gray-100 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-3 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-gray-900 font-bold text-xs md:text-sm leading-tight px-1">
                      {feature.title}
                    </h3>
                  </m.div>
                ))}
              </div>

            </div>
          </m.div>

          {/* --- PROCESS (Camlenio Style) --- */}
          {/* --- PROCESS (Timeline Flow) --- */}
          <div className="relative pt-10">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Android App Development
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                  }}
                > Process</span></h3>
              <p className="text-gray-600 text-lg">
                We follow a structured and agile development process to ensure reliable delivery and top-quality results.
              </p>
            </div>

            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-[3rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-orange-100 via-orange-300 to-orange-100 -z-10" />

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
                {processSteps.map((step, index) => (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Icon Container with White Bg to hide line */}
                    <div className="relative z-10 w-24 h-24 rounded-full bg-white border-4 border-gray-50 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-orange-100 group-hover:shadow-orange-100/50 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                        <step.icon className="w-8 h-8" />
                      </div>
                      {/* Step Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                        {index + 1}
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm w-full min-h-[140px] hover:shadow-md hover:border-orange-100 transition-all duration-300 relative z-20">
                      <h4 className="text-lg font-bold text-gray-900 leading-tight mb-2">{step.title}</h4>
                      <span className="text-xs uppercase tracking-widest text-orange-500 font-bold block mb-2">{step.description}</span>
                      <div className="w-8 h-1 bg-gray-100 rounded-full mx-auto group-hover:bg-orange-500 transition-colors duration-300" />
                    </div>
                  </m.div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </section>
    </LazyMotion>
  );
}
