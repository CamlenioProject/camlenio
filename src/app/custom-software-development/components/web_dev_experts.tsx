"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaShieldAlt, FaShoppingCart } from "react-icons/fa";
import { FaArrowRight, FaCheck, FaChartBar } from "react-icons/fa6";

const experts = [
  { name: "React JS Expert", role: "Modern Frontend", tag: "UI/UX" },
  { name: "NodeJS Expert", role: "Scalable Backend", tag: "Performance" },
  { name: "Laravel Expert", role: "System Architecture", tag: "Secure" },
  { name: "E-Commerce Expert", role: "Conversion Specialist", tag: "Growth" }
];

export default function WebDevExperts() {
  return (
    <section className="py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">

        {/* eCommerce Expertise Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-40">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-bold text-orange-600 uppercase tracking-[0.3em] mb-6 block">Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight tracking-tight italic">
                Scalable eCommerce <br /> Development Expertise
              </h2>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium">
                The Camlenio supports the businesses in establishing strong, trustworthy custom ecommerce website development solutions. As an experienced custom ecommerce website development company, our experts design conversion-focused platforms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: <FaShoppingCart />, text: "Secure Fund Gateways" },
                  { icon: <FaShieldAlt />, text: "User-friendly Navigation" },
                  { icon: <FaChartBar />, text: "Easy Product Management" },
                  { icon: <FaCheck />, text: "Conversion Focused" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="font-bold text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 bg-white p-4"
            >
              <div className="aspect-[4/3] bg-orange-50 rounded-[3rem] relative overflow-hidden">
                <Image
                  src="/ServiceDropdown/webdevpage/digital-feture.webp"
                  alt="eCommerce Solutions"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-8 p-4 flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-tight">Enterprise Scale</h4>
                  <p className="text-gray-400 text-sm">Boost Online Sales & Engagement</p>
                </div>
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                  <FaArrowRight />
                </div>
              </div>
            </motion.div>
            {/* Decorative background shape */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100/50 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        {/* Reasons Businesses Trust Header */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-24 border-t border-gray-100 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold uppercase leading-[0.9] tracking-tighter mb-8">
              Reasons Businesses Trust <br />
              <span className="text-orange-600">Camlenio for Success</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl pb-2"
          >
            Camlenio is recognized for offering the best custom web development services by transparency, innovation, and quality-driven development.
          </motion.p>
        </div> */}

        {/* Experts Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {experts.map((expert, idx) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="absolute bottom-8 left-8 right-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="w-full bg-white text-black py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                    Learn More <FaArrowRight className="text-[10px]" />
                  </button>
                </div>
              </div>
              <div className="px-2">
                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-[0.2em] mb-2 block">{expert.tag}</span>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-1">{expert.name}</h3>
                <p className="text-gray-400 font-medium">{expert.role}</p>
              </div>
            </motion.div>
          ))}
        </div> */}

        {/* Trust Features */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 border-t border-gray-100">
          {[
            { title: "Transparency", desc: "Clear communication and arrangement ensure project delivery in real-time." },
            { title: "Innovation", desc: "Agile workflow guarantees delivering high-quality, innovation-driven solutions." },
            { title: "Agile Workflow", desc: "Our scalable operations adapt and include your business development needs." }
          ].map((feature, idx) => (
            <div key={idx} className="space-y-6 p-8">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                <FaCheck />
              </div>
              <h4 className="text-2xl font-bold uppercase tracking-tight">{feature.title}</h4>
              <p className="text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
