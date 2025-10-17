"use client";
// import { motion } from "framer-motion";

const MobileAppSection = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-orange-100 to-indigo-100 bg-[length:200%_200%] animate-gradientMove">
      <div className=" text-black py-10 px-8 md:px-16 overflow-hidden relative">
        <div className="max-w-7xl text-center">
          <h2 className=" text-2xl md:text-4xl lg:text-6xl font-semibold leading-snug mx-auto">
            We Craft Interfaces That People{" "}
            <span
              className="text-orange-500"
              style={{ textShadow: "2px 2px 0 #FAF9F6, 4px 4px 0 #FFB266" }}
            >
              Love
            </span>{" "}
            to Use.
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-12 ">
            <div>
              <h3 className=" text-2xl md:text-5xl font-bold mb-2">
                Top Quality
              </h3>
              <p className="text-xl font-medium mb-2">Modern App Solutions</p>
              <p className="text-gray-700">
                From idea to launch, we craft apps with precision, creativity,
                and cutting-edge technology.
              </p>
            </div>

            <div className="border-l border-white/20">
              <h3 className=" text-2xl md:text-5xl font-bold mb-2">92%</h3>
              <p className="text-xl font-medium mb-2">Proven Success Rate</p>
              <p className="text-gray-700">
                Our mobile solutions have consistently delivered measurable
                results and higher engagement.
              </p>
            </div>

            <div className="border-l border-white/20">
              <h3 className=" text-2xl md:text-5xl font-bold mb-2">Trusted</h3>
              <p className="text-xl font-medium mb-2">
                By Businesses Worldwide
              </p>
              <p className="text-gray-700">
                We partner with startups and entenrprises alike, creating apps
                that users love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileAppSection;
