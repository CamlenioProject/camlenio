"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

// Mock Data for Tools
const tools = [
  {
    id: 1,
    name: "Auto-Coder",
    icon: "⚡",
    description: "Generates boilerplate code instantly from natural language instructions.",
    demoColor: "bg-yellow-500"
  },
  {
    id: 2,
    name: "PixelEnhance",
    icon: "🎨",
    description: "Upscales low-res images into 4K masterpieces using GANs.",
    demoColor: "bg-pink-500"
  },
  {
    id: 3,
    name: "DataSynthesizer",
    icon: "📊",
    description: "Creates realistic synthetic datasets for model training.",
    demoColor: "bg-blue-500"
  }
];

const AITools = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#050505] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          AI <span className="text-purple-500">Tools</span> & Demos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <motion.div
              layoutId={`card-container-${tool.id}`}
              onClick={() => setSelectedId(tool.id)}
              key={tool.id}
              className="bg-[#111] p-6 rounded-xl border border-gray-800 cursor-pointer hover:border-purple-500/50 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                layoutId={`card-icon-${tool.id}`}
                className="text-4xl mb-4"
              >
                {tool.icon}
              </motion.div>
              <motion.h3
                layoutId={`card-title-${tool.id}`}
                className="text-xl font-bold mb-2"
              >
                {tool.name}
              </motion.h3>
              <p className="text-gray-400 text-sm">Click to view demo</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
              />

              {/* Modal */}
              <motion.div
                layoutId={`card-container-${selectedId}`}
                className="bg-[#1a1a1a] w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative pointer-events-auto border border-gray-700"
              >
                {(() => {
                  const tool = tools.find(t => t.id === selectedId)!;
                  return (
                    <>
                      <div className={`h-40 w-full ${tool.demoColor} flex items-center justify-center`}>
                        <motion.div layoutId={`card-icon-${tool.id}`} className="text-6xl">
                          {tool.icon}
                        </motion.div>
                      </div>
                      <div className="p-8">
                        <motion.h3 layoutId={`card-title-${tool.id}`} className="text-3xl font-bold mb-4">
                          {tool.name}
                        </motion.h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {tool.description}
                        </p>
                        <div className="p-4 bg-black/30 rounded-lg border border-white/5">
                          <p className="font-mono text-xs text-green-400">
                            &gt; Initializing demo sequence...<br />
                            &gt; Loading model weights...<br />
                            &gt; Ready.
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedId(null);
                          }}
                          className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 p-2 rounded-full text-white transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AITools;
