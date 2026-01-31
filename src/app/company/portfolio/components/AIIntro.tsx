"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AIIntro = () => {
  const [text, setText] = useState("");
  const fullText = "const developer = {\n  name: 'Camlenio',\n  type: 'AI Architect',\n  skills: ['Next.js', 'React', 'Three.js', 'AI Integration'],\n  mission: 'Innovate. Create. Disrupt.'\n};";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 40); // Typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-black text-white relative flex justify-center items-center min-h-[60vh]">
      <div className="w-full max-w-4xl px-4">
        {/* Mock Window Header */}
        <div className="bg-[#1e1e1e] rounded-t-lg p-3 flex gap-2 items-center border-b border-gray-700 w-full shadow-2xl">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-xs text-gray-400 font-mono">portfolio.config.ts — User</span>
        </div>

        {/* Editor Body */}
        <motion.div
          className="bg-[#1e1e1e]/90 backdrop-blur-sm p-6 rounded-b-lg shadow-2xl border border-gray-800 font-mono text-sm md:text-base leading-relaxed overflow-hidden min-h-[200px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <pre className="text-green-400">
            <code>
              {text}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2.5 h-5 bg-green-400 align-middle ml-1"
              />
            </code>
          </pre>
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none z-[-1]"></div>
    </section>
  );
};

export default AIIntro;
