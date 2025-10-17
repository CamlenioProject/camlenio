"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const features = [
  {
    title: "First Impressions Matter",
    description:
      "Visitors form an opinion in seconds. A clean, well-organized interface instantly builds trust and encourages them to explore further.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#f97316"
      >
        <path d="M228.67-40h-122q-27 0-46.84-19.83Q40-79.67 40-106.67v-122h66.67v122h122V-40Zm502.66 0v-66.67h122v-122H920v122q0 27-19.83 46.84Q880.33-40 853.33-40h-122ZM479.45-223.33q-119.45 0-215.95-69.34Q167-362 119.33-480 167-598.67 263.5-668q96.5-69.33 216.17-69.33 119.66 0 216.5 69.33Q793-598.67 840-480q-47 118-144.05 187.33-97.05 69.34-216.5 69.34Zm-.12-66.67q91.34 0 169-51Q726-392 767-480q-41-88-118.67-139.33-77.66-51.34-169-51.34-91.33 0-168.66 51.34Q233.33-568 192.33-480q41 88 118.34 139 77.33 51 168.66 51Zm.82-55.33q55.85 0 95.52-39.48 39.66-39.49 39.66-95.34t-39.62-95.52q-39.62-39.66-95.66-39.66-56.05 0-95.38 39.62-39.34 39.62-39.34 95.66 0 56.05 39.48 95.38 39.49 39.34 95.34 39.34ZM480-412q-28.33 0-48.17-19.83Q412-451.67 412-480q0-28.33 19.83-48.5 19.84-20.17 48.17-20.17 28.33 0 48.5 20.03T548.67-480q0 28.33-20.03 48.17Q508.61-412 480-412ZM40-731.33v-122q0-27 19.83-46.84Q79.67-920 106.67-920h122v66.67h-122v122H40Zm813.33 0v-122h-122V-920h122q27 0 46.84 19.83Q920-880.33 920-853.33v122h-66.67ZM480-480.67Z" />
      </svg>
    ),
  },
  {
    title: "Improved User Retention",
    description:
      "Smart UX design ensures users stay longer by guiding them effortlessly through the interface, reducing friction, and improving satisfaction.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#f97316"
      >
        <path d="M436.33-80q-28.66 0-54.83-12-26.17-12-43.83-34.67L120.33-403l20.34-22q16-17 39-20.67 23-3.66 43 8l90.66 50.34V-740q0-14.17 9.62-23.75t23.83-9.58q14.22 0 23.89 9.58 9.66 9.58 9.66 23.75v467.33L252-344l138.67 176.33q8.66 10.34 20.5 15.67t25.16 5.33h210.34q36.33 0 61.5-25.16 25.16-25.17 25.16-61.5V-400q0-22.67-15.33-38-15.33-15.33-38-15.33H460.33V-520h219.43q50.1 0 85.17 35T800-400v166.67q0 64-44.67 108.66Q710.67-80 646.67-80H436.33ZM191-650q-11.72-19.84-18.02-42.83-6.31-22.99-6.31-47.33 0-74.84 52.65-127.34T346.67-920q74.7 0 127.35 52.66 52.65 52.66 52.65 127.37 0 24.3-6.31 47.24T502.33-650l-57.66-33.33Q452-696 456-710.17q4-14.16 4-30.15 0-47.01-33.08-80.01-33.08-33-80.33-33-47.26 0-80.26 33.05-33 33.06-33 80.28 0 15.67 4 29.83 4 14.17 11.34 26.84L191-650Zm301.67 316.67Z" />
      </svg>
    ),
  },
  {
    title: "Drives Conversions",
    description:
      "Every scroll, tap, and interaction is thoughtfully optimized to nudge visitors toward action — whether it's signing up, buying, or booking.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#f97316"
      >
        <path d="m402.67-187.33 255-306H484.33L518-759.67l-230.33 333h149l-34 239.34ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm153-394Z" />
      </svg>
    ),
  },
  {
    title: "Builds Brand Credibility",
    description:
      "A professional and visually appealing interface builds confidence in your business and makes your brand look trustworthy and reliable.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#f97316"
      >
        <path d="M226.67-80q-27.5 0-47.09-19.58Q160-119.17 160-146.67v-422.66q0-27.5 19.58-47.09Q199.17-636 226.67-636h60v-90.67q0-80.23 56.57-136.78T480.07-920q80.26 0 136.76 56.55 56.5 56.55 56.5 136.78V-636h60q27.5 0 47.09 19.58Q800-596.83 800-569.33v422.66q0 27.5-19.58 47.09Q760.83-80 733.33-80H226.67Zm0-66.67h506.66v-422.66H226.67v422.66ZM480.11-280q32.22 0 55.06-22.52Q558-325.04 558-356.67q0-31-22.95-55.16Q512.11-436 479.89-436t-55.06 24.17Q402-387.67 402-356.33q0 31.33 22.95 53.83 22.94 22.5 55.16 22.5ZM353.33-636h253.34v-90.67q0-52.77-36.92-89.72-36.93-36.94-89.67-36.94-52.75 0-89.75 36.94-37 36.95-37 89.72V-636ZM226.67-146.67v-422.66 422.66Z" />
      </svg>
    ),
  },
  {
    title: "Mobile & Accessibility Ready",
    description:
      "We design with mobile-first and inclusivity in mind — ensuring seamless performance across devices, screen sizes, and assistive tech.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#f97316"
      >
        <path d="M266.67-40q-27.5 0-47.09-19.58Q200-79.17 200-106.67v-746.66q0-27 19.83-46.84Q239.67-920 266.67-920H692q27.5 0 47.08 19.58 19.59 19.59 19.59 47.09V-712q18 4.33 29.66 18.64Q800-679.06 800-660.95v76.28q0 19-11.67 33.34-11.66 14.33-29.66 18.66v426q0 27.5-19.59 47.09Q719.5-40 692-40H266.67Zm0-66.67H692v-746.66H266.67v746.66Zm0 0v-746.66 746.66ZM479.33-720q13.67 0 23.5-9.83 9.84-9.84 9.84-23.5 0-13.67-9.84-23.5-9.83-9.84-23.5-9.84-13.66 0-23.5 9.84Q446-767 446-753.33q0 13.66 9.83 23.5 9.84 9.83 23.5 9.83Z" />
      </svg>
    ),
  },
  {
    title: "Better ROI",
    description:
      "Investing in thoughtful UI/UX design increases user engagement, lowers bounce rates, and improves your bottom line over time.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#f97316
"
      >
        <path d="M130.67-220 80-270.67l300-300L540-410l293.33-330L880-694 540-310 380-469.33 130.67-220Z" />
      </svg>
    ),
  },
];

export default function UiUxImportance() {
  return (
    <div className="">
      <div className="relative  py-16 text-gray-900 overflow-hidden bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
        <div className="absolute left-0 top-0 w-[80px] sm:w-[120px] md:w-[160px] h-[80px] sm:h-[120px] md:h-[160px] bg-orange-500 rounded-r-full z-0"></div>
        <div className="absolute right-0 top-0 w-[80px] sm:w-[120px] md:w-[160px] h-[80px] sm:h-[120px] md:h-[160px] bg-orange-500 rounded-l-full z-0"></div>

        <div className="sm:max-w-5xl mx-auto space-y-12 px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl mt-4 sm:max-w-sm md:max-w-lg lg:max-w-4xl mx-auto md:text-5xl font-bold mb-4">
              Why UI/UX Design Is Essential for Your Website
            </h2>
            <p className="text-lg md:text-xl text-gray-700 ">
              It&apos;s not just how it looks — it&apos;s how it works.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-8"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
                  },
                }}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="relative p-6 group bg-transparent border-2 border-gray-200 rounded-2xl shadow-lg"
              >
                {/* <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500 rounded-bl-full transition-all duration-300 ease-out group-hover:w-24 group-hover:h-24" /> */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-30 h-2 bg-orange-500 rounded-t-full group-hover:w-70 transition-all duration-500 ease-out" />
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-center pt-8"
          >
            Investing in UI/UX isn’t a luxury — it’s a growth strategy.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
