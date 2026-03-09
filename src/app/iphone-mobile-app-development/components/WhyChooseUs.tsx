"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Layers,
  Zap,
  LifeBuoy,
  UserCheck,
  MessageSquare,
  Award
} from "lucide-react";

const benefits = [
  {
    title: "Apple Standard UI/UX",
    desc: "Clean UI/UX aligned with Apple design standards",
    icon: <Layers className="w-5 h-5 text-orange-500" />,
  },
  {
    title: "Scalable Apps",
    desc: "Scalable and iOS Mobile Application Development",
    icon: <Zap className="w-5 h-5 text-blue-500" />,
  },
  {
    title: "24/7 Support",
    desc: "Ongoing help and maintenance",
    icon: <LifeBuoy className="w-5 h-5 text-emerald-500" />,
  },
  {
    title: "Deep Expertise",
    desc: "Experienced iOS developers with deep platform expertise",
    icon: <UserCheck className="w-5 h-5 text-purple-500" />,
  },
  {
    title: "Agile Delivery",
    desc: "Transparent communication and agile delivery",
    icon: <MessageSquare className="w-5 h-5 text-pink-500" />,
  },
  {
    title: "Expert Team",
    desc: "Expert iOS development team",
    icon: <Award className="w-5 h-5 text-indigo-500" />,
  }
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Premium Background Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-400/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-blue-400/5 blur-[100px] rounded-full pointer-events-none -z-10 mix-blend-multiply"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Narrative */}
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-5/12 relative z-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Why Choose Our
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 pb-2">
                iOS Mobile App Development?
              </span>
            </h2>

            <p className="text-slate-600 mb-8 leading-relaxed text-base md:text-lg font-medium max-w-lg">
              As a managing the iOS Development Company, we provide an end-to-end iOS mobile App Development Services, which is customized to your business objectives. We understand that each product is unique, this is why our method is flexible and client-focused.
            </p>

            {/* Floating Quote Box */}
            <div className="mt-8 p-6 md:p-8 rounded-[2rem] bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative group overflow-hidden max-w-lg">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500"></div>
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                <CheckCircle2 className="w-32 h-32" />
              </div>
              <p className="text-slate-700 font-semibold text-[15px] md:text-base leading-relaxed relative z-10">
                "If you require a new product and want to update an existing app. Our iOS development team guarantees easy performance and a great user experience."
              </p>
            </div>
          </motion.div>

          {/* Right Bento Grid Features */}
          <motion.div
            initial={{ scale: 0.98 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-7/12 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 15 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white rounded-[1.5rem] p-6 shadow-sm shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-800 transition-colors shadow-inner">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-900 text-[17px] leading-tight group-hover:text-orange-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed pl-[4.25rem]">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
