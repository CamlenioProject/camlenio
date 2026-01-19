"use client";

import { motion, useInView, m, domMax, LazyMotion } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Days of Innovation", value: 730, suffix: "+" },
  { label: "Missions Accomplished", value: 50, suffix: "+" },
  { label: "Lines of Code", value: 1, suffix: "M+" },
  { label: "Party Energy", value: 100, suffix: "%" },
];

export default function PressStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <LazyMotion features={domMax}>
      <section ref={containerRef} className="py-20 bg-[#1a0b2e] relative overflow-hidden text-white">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-600/20 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <m.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="relative mb-4"
                >
                  {/* Glowing Circle Background */}
                  <div className="absolute inset-0 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors duration-500" />

                  {/* Number */}
                  <h3 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-400 relative z-10">
                    <Counter from={0} to={stat.value} duration={2} inView={isInView} />
                    <span>{stat.suffix}</span>
                  </h3>
                </m.div>

                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="text-sm font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-orange-400 transition-colors duration-300"
                >
                  {stat.label}
                </m.p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

function Counter({ from, to, duration, inView }: { from: number; to: number; duration: number; inView: boolean }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  if (inView) {
    import("framer-motion").then(({ animate }) => {
      const node = nodeRef.current;
      if (!node) return;

      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        }
      });
      return () => controls.stop();
    });
  }

  return <span ref={nodeRef}>{from}</span>;
}
