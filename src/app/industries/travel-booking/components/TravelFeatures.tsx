"use client";

import { m, LazyMotion, domMax } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Route Planning",
    desc: "Explore detailed trail and travel information with dynamic route mapping and difficulty ratings.",
    image: "/travel/feat_booking.png"
  },
  {
    title: "Smart Analytics",
    desc: "Track every metrics. From user engagement to booking conversion rates, get detailed insights.",
    image: "/travel/feat_analytics.png"
  },
  {
    title: "Real-time Sync",
    desc: "Seamless synchronization between web and mobile platforms ensures your users are always connected.",
    image: "/travel/feat_mobile.png"
  }
];

export default function TravelFeatures() {
  return (
    <LazyMotion features={domMax}>
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Section Title */}
            <div className="lg:col-span-12 mb-12">
              <m.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black text-slate-900 uppercase leading-none"
              >
                OUR CORE <br />
                CAPABILITIES
              </m.h2>
            </div>

            {features.map((feature, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="lg:col-span-4"
              >
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm mb-6 bg-white group cursor-pointer">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium text-[15px] pr-4">
                  {feature.desc}
                </p>
              </m.div>
            ))}

          </div>

        </div>
      </section>
    </LazyMotion>
  );
}
