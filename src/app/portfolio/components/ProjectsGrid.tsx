"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "AI Chatbot Core",
    description: "Neural network driven conversational agent.",
    tech: "Python / TensorFlow",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Vision Analytics",
    description: "Real-time object detection processing pipeline.",
    tech: "OpenCV / CUDA",
    gradient: "from-green-400 to-emerald-600"
  },
  {
    title: "EcoSync Platform",
    description: "Smart grid energy distribution algorithm.",
    tech: "Rust / WebAssembly",
    gradient: "from-orange-400 to-red-500"
  },
  {
    title: "DeepSynth Audio",
    description: "Generative voice synthesis engine.",
    tech: "PyTorch / React",
    gradient: "from-indigo-400 to-cyan-500"
  }
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  // 3D Tilt Effect Logic (simplified for performance)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full h-[350px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-between group cursor-pointer"
    >
      {/* Hover Lift "Anti-Gravity" */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${project.gradient})`
        }}
      />

      <div style={{ transform: "translateZ(50px)" }} className="z-10">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">
          {project.description}
        </p>
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="z-10 border-t border-white/10 pt-4 flex justify-between items-center">
        <span className="text-xs font-mono text-cyan-400">{project.tech}</span>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsGrid = () => {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 blur-[100px] pointer-events-none"></div>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center md:text-left"
        >
          Featured <span className="text-cyan-500">Deployments</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
