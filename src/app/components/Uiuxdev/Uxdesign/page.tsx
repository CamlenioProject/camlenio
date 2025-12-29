"use client";

import { motion } from "framer-motion";
import { CheckCircle, Paintbrush, Compass, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function UxDesign() {
  return (
    <div className="relative text-gray-900 px-6 py-16 lg:px-24 overflow-hidden bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <div className="max-w-[86rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
          >
            UX Design That Drives Real Results
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl"
          >
            Shape User Journeys. Boost Satisfaction.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-base text-gray-800 dark:text-gray-400"
          >
            At Helpful Insight, we design seamless, intuitive experiences that
            guide users effortlessly and convert intent into action.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6 pt-8">
            <Feature
              icon={
                <CheckCircle className="text-blue-600 dark:text-blue-400" />
              }
              title="🎯 User-Centric Thinking"
              description="We prioritize real user needs, behaviors, and feedback at every stage."
            />
            <Feature
              icon={<Paintbrush className="text-pink-500 dark:text-pink-400" />}
              title="🧠 Behavioral Flow Mapping"
              description="Every screen and action is part of a logical, tested journey."
            />
            <Feature
              icon={<Compass className="text-green-500 dark:text-green-400" />}
              title="📊 Data-Driven Decisions"
              description="We rely on analytics, user testing, and feedback—not guesswork."
            />
            <Feature
              icon={
                <AlertCircle className="text-yellow-500 dark:text-yellow-300" />
              }
              title="📱 Mobile-First Experiences"
              description="Optimized UX across devices, especially where it matters most."
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="pt-12 text-xl font-semibold"
          >
            Let’s Build Experiences That Users Remember.
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          whileInView={{ opacity: 1 }}
          animate={{
            y: [-5, 5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className=" relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] "
        >
          <Image
            src="/ServiceDropdown/uiuxdesign/ux-design.webp"
            alt="Ux Design"
            width={600}
            height={600}
            className="object-contain rounded-[2rem] ml-4"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex items-start gap-4"
    >
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
