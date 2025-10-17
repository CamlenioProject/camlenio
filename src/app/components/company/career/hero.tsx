import React from "react";
export default function Hero() {
  return (
    <div className="relative overflow-hidden text-gray-800 pt-20 md:py-20">
      <div
        className="absolute inset-0 object-cover md:object-top bg-no-repeat"
        style={{
          backgroundImage: "url('/career/bg-video.webp')",
        }}
      ></div>

      <div className="absolute inset-0 bg-gray-800/70 md:bg-gray-800/80"></div>

      <div className="relative px-6 sm:px-8 md:px-16 flex justify-center items-center min-h-[20vh] lg:min-h-[30vh] pt-4">
        <div className="max-w-3xl lg:max-w-5xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-2 text-gray-50 ">
            Build Your Career with{" "}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #4b5056, 4px 6px 0px #ff582336",
              }}
            >
              Camlenio
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-gray-50 mb-4">
            Innovate, Grow, and Shape the Future of Tech.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 mb-4 text-gray-50 font-medium rounded-lg px-6 sm:px-6 py-2 sm:py-3 text-base sm:text-lg transition transform hover:scale-105">
            View Open Roles
          </button>
        </div>
      </div>
    </div>
  );
}
