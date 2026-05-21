"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaPlay, FaUsers, FaChartLine, FaExclamationTriangle, FaDownload,
  FaChevronRight, FaGlobe, FaLightbulb, FaShieldAlt,
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt
} from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFigma } from "react-icons/si";

const Migration = () => {
  return (
    <section className=" ">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* --- Top Section with Overlapping Cards --- */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end gap-6 mb-[-140px] relative z-20 px-4">

            {/* Card 1: Customized Solutions (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              viewport={{ once: true }}
              className="bg-orange-50 rounded-[2.5rem] p-8 w-full lg:w-[350px] aspect-[1.3/1] shadow-xl border border-orange-100 relative overflow-hidden group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-orange-100">
                  <FaLightbulb className="text-orange-500 text-sm" />
                </div>
                <div className="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center text-orange-300">
                  <FaShieldAlt className="text-[10px]" />
                </div>
              </div>

              {/* Decorative SVG Pattern */}
              <div className="absolute -right-4 -bottom-4 w-48 h-48 opacity-[0.03] pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-orange-900">
                  <circle cx="50" cy="50" r="40" strokeWidth="1" stroke="currentColor" fill="none" />
                  <path d="M50 10 L50 90 M10 50 L90 50" strokeWidth="1" stroke="currentColor" />
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 leading-tight tracking-tight italic">Customized Solutions <br /> for Business Growth</h3>
                <p className="text-[11px] mt-4 text-gray-500 font-medium max-w-[200px] leading-relaxed">Specialize in designing fully custom digital platforms for modern brands.</p>
              </div>

              {/* Component Architecture Visual */}
              <div className="absolute top-6 right-20 opacity-[0.15] rotate-12 pointer-events-none">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 border-2 border-orange-600 rounded-lg flex items-center justify-center font-bold text-[8px]">App</div>
                  <div className="w-0.5 h-3 bg-orange-600" />
                  <div className="flex gap-4">
                    <div className="w-5 h-5 border border-orange-600 rounded flex items-center justify-center text-[6px]">UI</div>
                    <div className="w-5 h-5 border border-orange-600 rounded flex items-center justify-center text-[6px]">API</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 text-right">
                <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-600/50 mb-1">Architecture</div>
                <div className="text-sm font-bold flex items-center gap-1 text-orange-600 uppercase italic">Clean Code & UI <span className="text-[10px] opacity-40">»</span></div>
              </div>
            </motion.div>

            {/* Card 2: Digital Foundation (Center) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] w-full lg:w-[500px] shadow-2xl border border-gray-50 z-30 transform lg:-translate-y-12 overflow-hidden"
            >
              {/* Browser Window Header */}
              <div className="bg-gray-50/80 border-b border-gray-100 px-6 py-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="text-[8px] font-bold text-gray-400 font-mono tracking-widest uppercase">localhost:3000</div>
                <div className="w-10" />
              </div>

              <div className="p-10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 leading-tight tracking-tight">Digital Foundation</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-orange-600 font-bold italic text-lg tracking-wide underline decoration-orange-200 underline-offset-4">Full-Stack Tech</span>
                      <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-[10px] shadow-lg">✓</div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shadow-sm">
                    <FaCode className="text-lg" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50/50 p-5 rounded-[2rem] border border-gray-100 group hover:border-orange-200 transition-colors">
                    <p className="text-[9px] text-gray-400 font-bold uppercase mb-3 text-center tracking-widest">Performance</p>
                    <div className="h-14 flex items-center justify-center relative">
                      <svg viewBox="0 0 100 50" className="w-20">
                        <path d="M10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#F3F4F6" strokeWidth="12" strokeLinecap="round" />
                        <path d="M10 50 A 40 40 0 0 1 85 40" fill="none" stroke="#EA580C" strokeWidth="12" strokeLinecap="round" />
                      </svg>
                      <span className="absolute bottom-1 text-[11px] font-black text-gray-900">95%</span>
                    </div>
                  </div>
                  <div className="bg-gray-50/50 p-5 rounded-[2rem] border border-gray-100 group hover:border-orange-200 transition-colors">
                    <p className="text-[9px] text-gray-400 font-bold uppercase mb-3 text-center tracking-widest">Security</p>
                    <div className="h-14 flex items-center justify-center relative">
                      <svg viewBox="0 0 100 50" className="w-20">
                        <path d="M10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#F3F4F6" strokeWidth="12" strokeLinecap="round" />
                        <path d="M10 50 A 40 40 0 0 1 88 45" fill="none" stroke="#EA580C" strokeWidth="12" strokeLinecap="round" />
                      </svg>
                      <span className="absolute bottom-1 text-[11px] font-black text-gray-900">98%</span>
                    </div>
                  </div>
                  <div className="bg-black p-5 rounded-[2rem] flex flex-col justify-between items-center group cursor-pointer hover:bg-orange-600 transition-all duration-500 shadow-xl shadow-gray-200">
                    <p className="text-[9px] text-white/50 font-bold uppercase tracking-widest text-center">Workflow</p>
                    <div className="text-center py-2">
                      <div className="text-[10px] font-black text-white italic tracking-tighter leading-none border-b border-orange-500 pb-1">START NOW</div>
                    </div>
                    <div className="text-white text-lg">›</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: eCommerce (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 2 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] rounded-[2.5rem] w-full lg:w-[360px] aspect-[1.3/1] shadow-2xl relative overflow-hidden text-white flex border border-white/5"
            >
              <div className="w-[48%] p-8 flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="text-2xl font-black italic leading-none mb-3 text-orange-500 tracking-tighter">SCALABLE <br /> ECOMMERCE</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                      <FaChevronRight className="text-[10px]" />
                    </div>
                    <div className="text-[8px] font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded">200 OK</div>
                  </div>
                </div>

                <div className="mt-auto">
                  <p className="text-[9px] font-black uppercase text-orange-500 tracking-[0.2em] mb-1">Data Schema</p>
                  <p className="text-[10px] font-mono text-gray-400 leading-relaxed">{`{ "db": "mongo" }`}</p>
                </div>
              </div>

              {/* Stats Section with Glass Effect */}
              <div className="flex-1 bg-white/[0.03] backdrop-blur-xl p-6 flex flex-col border-l border-white/5">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[9px] font-black bg-orange-600 text-white px-3 py-1 rounded-full uppercase tracking-widest">Growth</span>
                  <FaChartLine className="text-xs text-orange-500" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-4xl font-black text-orange-500 tracking-tighter mb-1">2.4x</div>
                  <p className="text-[9px] font-medium text-gray-500 uppercase tracking-wider mb-6">Sales increase</p>

                  <div className="space-y-3">
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-orange-600 shadow-[0_0_10px_rgba(234,88,12,0.5)]"
                      />
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-orange-500/50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dark Background Section */}
          <div className="bg-[#0A0A0A] rounded-[3.5rem] pt-46 pb-14 px-4 text-center text-white relative z-10 border border-white/5  overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            {/* Floating Decorative Code Snippets */}
            <div className="absolute top-40 left-10 opacity-10 pointer-events-none hidden xl:block text-left font-mono text-[11px] text-orange-500 space-y-1">
              <div className="text-blue-400">const</div> <div className="text-yellow-400 inline">Camlenio</div> = {'{'}
              <div className="pl-4">expertise: <span className="text-green-400">"Full Stack"</span>,</div>
              <div className="pl-4">performance: <span className="text-orange-400">0.99</span>,</div>
              <div className="pl-4">scalable: <span className="text-purple-400">true</span></div>
              {'}'};
            </div>

            <div className="absolute bottom-20 right-10 opacity-10 pointer-events-none hidden xl:block text-left font-mono text-[11px] text-blue-500 space-y-1">
              <div className="text-purple-400">function</div> <div className="text-yellow-400 inline">deploy</div>() {'{'}
              <div className="pl-4">console.<span className="text-yellow-400">log</span>(<span className="text-green-400">"Launching..."</span>);</div>
              <div className="pl-4 text-gray-500">// Optimized for Global scale</div>
              {'}'}
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8 tracking-tight italic leading-tight relative z-20"
            >
              Delivering Scalable Web Solutions <br className="hidden md:block" /> for Local and Global
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-5xl mx-auto text-base md:text-lg leading-relaxed opacity-80 font-medium relative z-20"
            >
              <p>
                We support the businesses' efficient and top-quality custom web development services in India and help the companies that make a strong digital foundation. We also provide international customers with our premium custom web development services in Jaipur and offer the standard compliant web solutions. Our expertise enabled us to offer custom web development services Delhi, which is based on helping your brands all over the country. Through merging a local market with the international development practices and guaranteeing a business-driven digital transformation.
              </p>
            </motion.div>

            {/* Tech Stack Icons Row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 flex flex-wrap justify-center gap-10 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 relative z-20"
            >
              {[
                { icon: FaReact, name: "React" },
                { icon: SiNextdotjs, name: "Next.js" },
                { icon: SiTypescript, name: "TypeScript" },
                { icon: FaNodeJs, name: "Node.js" },
                { icon: SiTailwindcss, name: "Tailwind" },
                { icon: SiFigma, name: "Figma" }
              ].map((tech, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
                  <tech.icon className="text-3xl md:text-4xl group-hover:text-orange-500 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- Reasons Businesses Trust Section --- */}
        <div className="mt-40">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 max-w-2xl tracking-tighter ">
                Reasons Businesses Trust <br /> <span className="text-orange-600"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
                  }}>Camlenio</span> for Success
              </h2>
            </div>
            <div className="flex-1 lg:max-w-md mt-6">
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                Camlenio is recognized for offering the best custom web development services by transparency, innovation, and quality-driven development.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Card 1: Transparency */}
            <motion.div
              whileHover={{ y: -12 }}
              className="bg-white rounded-[3rem] p-12 border border-gray-100 flex flex-col justify-between h-[450px] shadow-sm hover:shadow-2xl hover:border-orange-100 transition-all duration-300"
            >
              <div>
                <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mb-6">Value</p>
                <h3 className="text-3xl font-black text-gray-900 mb-6 italic leading-[1.1] tracking-tighter uppercase">Transparency & Communication</h3>
                <p className="text-base text-gray-500 font-medium leading-relaxed">Our agile workflow guarantees delivering the project in real-time with clear updates.</p>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <div className="h-14 bg-gray-50 rounded-2xl border border-gray-100 flex items-center px-6 justify-between group cursor-default">
                  <span className="text-[11px] font-black uppercase tracking-wider text-gray-400">Real-time Delivery</span>
                  <div className="w-10 h-2 bg-orange-600 rounded-full shadow-[0_0_10px_rgba(234,88,12,0.3)]" />
                </div>
              </div>
            </motion.div>

            {/* Card 2: Innovation */}
            <motion.div
              whileHover={{ y: -12 }}
              className="bg-white rounded-[3rem] p-12 border border-gray-100 flex flex-col justify-between h-[450px] shadow-sm hover:shadow-2xl hover:border-orange-100 transition-all duration-300"
            >
              <div>
                <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mb-6">Innovation</p>
                <h3 className="text-3xl font-black text-gray-900 mb-6 italic leading-[1.1] tracking-tighter uppercase">Innovation & Quality</h3>
                <p className="text-base text-gray-500 font-medium leading-relaxed">From corporate websites to complex platforms, our services support brand credibility.</p>
              </div>
              <div className="relative h-44 mt-6 flex items-center justify-center">
                <div className="absolute w-36 h-36 bg-orange-50 rounded-full animate-pulse" />
                <div className="w-16 h-16 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-orange-50 relative z-10">
                  <FaLightbulb className="text-orange-500 text-3xl" />
                </div>
              </div>
            </motion.div>

            {/* Card 3: Scalability */}
            <motion.div
              whileHover={{ y: -12 }}
              className="bg-white rounded-[3rem] p-12 border border-gray-100 flex flex-col justify-between h-[450px] shadow-sm hover:shadow-2xl hover:border-orange-100 transition-all duration-300"
            >
              <div>
                <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mb-6">Scalability</p>
                <h3 className="text-3xl font-black text-gray-900 mb-6 italic leading-[1.1] tracking-tighter uppercase">Scalable Operations</h3>
                <p className="text-base text-gray-500 font-medium leading-relaxed">Our scalable solutions support businesses that improve customer engagement and sales.</p>
              </div>
              <div className="w-full aspect-[16/10] bg-gray-50 rounded-[2.5rem] overflow-hidden mt-8 relative group border border-gray-100">
                <Image
                  src="/ServiceDropdown/webdevpage/scalable.webp"
                  alt="Scalable Web Solutions"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-orange-600/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Migration;
