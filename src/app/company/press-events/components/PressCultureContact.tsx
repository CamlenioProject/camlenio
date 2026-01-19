"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, EnvelopeIcon, UserGroupIcon } from "@heroicons/react/24/solid";

export default function PressCultureContact() {
  return (
    <section className="relative py-24 bg-[#1a0b2e] overflow-hidden">
      {/* Background Party Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] mix-blend-screen" />

        {/* Floating shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">

        {/* Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block text-6xl mb-6"
          >
            🎊
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            WORK HARD. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
              PARTY HARDER.
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            At Camlenio, we believe that creativity flows best when the vibe is right.
            Our environment is fueled by music, laughter, and a shared passion for innovation.
            We don't just build software; we build memories.
          </p>
        </motion.div>

        {/* Contact/CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Join the Team */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 overflow-hidden text-left"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-purple-500/30 transition-colors" />

            <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
              <UserGroupIcon className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">Join the Party</h3>
            <p className="text-white/60 mb-8 min-h-[50px]">
              Ready to be part of a team that celebrates every win? We are always looking for talent.
            </p>

            <button className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
              See Openings <ArrowRightIcon className="w-5 h-5 text-purple-400" />
            </button>
          </motion.div>

          {/* Start a Project */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl p-8 shadow-2xl overflow-hidden text-left"
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />

            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <EnvelopeIcon className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">Work With Us</h3>
            <p className="text-white/90 mb-8 min-h-[50px]">
              Want to bring this energy to your next project? Let's build something amazing together.
            </p>

            <button className="flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:shadow-lg transition-shadow">
              Contact Us <ArrowRightIcon className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
