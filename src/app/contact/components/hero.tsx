import React from "react";

const Hero = () => {
  return (
    <div className=" bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove pt-36 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="relative text-2xl md:text-5xl font-bold text-center text-gray-900 inline-block group">
          <h1 className="relative inline-block">
            Let&apos;s Build Something Great Together!
          </h1>
        </div>
        <p className="text-base md:text-lg font-normal max-w-5xl text-center mt-2 text-gray-600 ">
          We really respect your time, so we are presenting simple forms with
          less but important fields to capture your thoughts.
        </p>
      </div>
    </div>
  );
};

export default Hero;
