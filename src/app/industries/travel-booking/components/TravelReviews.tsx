"use client";

import { m, LazyMotion, domMax } from "framer-motion";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

const reviews = [
  {
    name: "Nellie Russell",
    stars: 5,
    avatar: "/travel/feat_mobile.png" 
  },
  {
    name: "Rory Todd",
    stars: 5,
    avatar: "/travel/feat_booking.png"
  }
];

export default function TravelReviews() {
  return (
    <LazyMotion features={domMax}>
      <section className="relative py-32 overflow-hidden mx-6 md:mx-12 mb-12 rounded-[3rem]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/travel/scenic_bg.png"
            alt="Scenic Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

          {/* Left Text */}
          <div>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white uppercase leading-none drop-shadow-md mb-8"
            >
              SEE REVIEWS <br />
              OF CAMLENIO APP
            </m.h2>
            <button className="px-8 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg">
              See all reviews
            </button>
          </div>

          {/* Right Floating Cards */}
          <div className="relative h-[300px]">
            {/* Card 1 */}
            <m.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 md:right-10 w-64 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 flex items-center gap-4 shadow-xl"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
                <Image src={reviews[0].avatar} width={48} height={48} alt="avatar" />
              </div>
              <div>
                <div className="text-white font-bold">{reviews[0].name}</div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4" />)}
                </div>
              </div>
            </m.div>

            {/* Card 2 */}
            <m.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute bottom-10 right-20 md:right-32 w-64 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 flex items-center gap-4 shadow-xl"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
                <Image src={reviews[1].avatar} width={48} height={48} alt="avatar" />
              </div>
              <div>
                <div className="text-white font-bold">{reviews[1].name}</div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4" />)}
                </div>
              </div>
            </m.div>
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}
