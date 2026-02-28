"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Github, Linkedin, ArrowDown } from "lucide-react";

function FloatingParticles() {
  const mesh = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x -= delta / 15;
      mesh.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group ref={mesh}>
      <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={150} scale={15} size={3} speed={0.3} opacity={0.7} color="#00ffff" />
      <Sparkles count={100} scale={12} size={2} speed={0.3} opacity={0.5} color="#bd00ff" />
    </group>
  );
}

const PortfolioHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };


  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-center items-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <FloatingParticles />
        </Canvas>
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-[1] pointer-events-none" />
      </div>

      {/* Content Overlay */}
      <div className="z-10 text-center px-4 relative w-full max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Name & Title */}
          <motion.h1
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" }
              },
            }}
            className="text-7xl md:text-9xl font-bold tracking-tighter mb-4"
          >
            <span className="text-white">Rahul</span>
            <span className="text-cyan-500">.</span>
          </motion.h1>

          <motion.div variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut" }
            },
          }} className="overflow-hidden">
            <h2 className="text-2xl md:text-4xl font-light text-gray-300 tracking-widest uppercase mb-8">
              AI <span className="text-purple-500 mx-2">/</span> Full-Stack Developer
            </h2>
          </motion.div>

          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" }
              },
            }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
          >
            Crafting intelligent digital experiences where code meets consciousness.
          </motion.p>

          {/* Actions */}
          <motion.div variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut" }
            },
          }} className="flex flex-col md:flex-row items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-cyan-50 transition-colors flex items-center gap-2"
            >
              View Work
              <ArrowDown size={20} className="animate-bounce" />
            </motion.button>

            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#00ffff" }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 rounded-full border border-white/10 text-white hover:border-cyan-500/50 transition-colors"
              >
                <Github size={24} />
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#00ffff" }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 rounded-full border border-white/10 text-white hover:border-cyan-500/50 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;
