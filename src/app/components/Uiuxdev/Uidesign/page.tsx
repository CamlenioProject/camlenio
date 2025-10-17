"use client";

import { motion } from "framer-motion";
import { CheckCircle, Paintbrush, Compass, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function UIDesign() {
  return (
    <div
      id="next-section"
      className="relative scroll-mt-30 text-gray-900 px-8 py-16 md:px-16 overflow-hidden bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove "
    >
      <div className="max-w-[86rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
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
          className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] "
        >
          <Image
            src="/uiuxdesign/ui-design.png"
            alt="UI Design"
            width={600}
            height={600}
            className="object-contain rounded-[2rem]"
            priority
          />
        </motion.div>

        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
          >
            UI Design That Speaks for Itself
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl"
          >
            Elevate Your Interface. Engage Your Users.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-base text-gray-800 dark:text-gray-400"
          >
            At Helpful Insight, we craft clean, high-performance UI design
            solutions that align with your brand and captivate your audience.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6 pt-8">
            <Feature
              icon={
                <CheckCircle className="text-blue-600 dark:text-blue-400" />
              }
              title="🎯 Intuitive Layouts"
              description="Easy-to-navigate, familiar interfaces users love."
            />
            <Feature
              icon={<Paintbrush className="text-pink-500 dark:text-pink-400" />}
              title="🎨 Visually Polished"
              description="Aesthetic design that feels effortless and on-brand."
            />
            <Feature
              icon={<Compass className="text-green-500 dark:text-green-400" />}
              title="🧭 Consistent & Logical Flow"
              description="Every element placed with purpose."
            />
            <Feature
              icon={
                <AlertCircle className="text-yellow-500 dark:text-yellow-300" />
              }
              title="⚠️ Clear Feedback"
              description="Always informs the user of what’s happening — actions, errors, changes."
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="pt-12 text-xl font-semibold"
          >
            Let’s Build Smarter, Not Just Prettier.
          </motion.p>
        </div>
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
