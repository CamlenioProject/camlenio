"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AboutAI = () => {

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* Text Side */}
        <div className="w-full md:w-1/2 z-10">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Behind the <span className="text-cyan-400">Intelligence</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 leading-loose space-y-4"
          >
            <p>
              We are a collective of digital architects, sculpting the void into meaningful experiences.
              Our algorithms don't just process data; they understand context, emotion, and intent.
            </p>
            <p>
              From generative art to predictive analytics, we push the boundaries of what machine learning
              can achieve in a browser environment.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {["React", "Three.js", "Python", "TensorFlow", "WebGL"].map((skill, i) => (
                <span key={i} className="px-3 py-1 border border-white/20 rounded-full text-xs font-mono uppercase hover:bg-white/10 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animation Side */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-[80px] rounded-full"></div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            <DotLottieReact
              src="https://lottie.host/80e9d6d7-8d00-4c3e-9538-4f51e0cc5531/MBS4t2K6nK.json"
              loop
              autoplay
              className="w-full h-auto drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutAI;
