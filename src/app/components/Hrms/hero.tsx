import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


const Hero = () => {
  return (
    <div className="relative min-h-screen bg-orange-500">
      <div className="absolute inset-0 w-full lg:w-4/5 lg:rounded-br-[36rem] overflow-hidden">
        <Image
          src="/ServiceDropdown/hrmssoftware/bg-hrms.jpg"
          alt="HRMS Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70 lg:bg-black/80"></div>
      </div>

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="flex-1 max-w-2xl text-center lg:text-left lg:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Modern HR Management <span className="block">Made Simple</span>
          </h1> 
          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Streamline your HR processes with our all-in-one Human Resource
            Management System
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center transition-colors duration-300 min-w-[140px]">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center transition-colors duration-300 min-w-[140px] backdrop-blur-sm">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative flex-1 flex items-center justify-center w-full max-w-2xl">
          <div
            className="relative w-full max-w-[280px] h-[220px] 
                  sm:max-w-[380px] sm:h-[300px] 
                  md:max-w-[420px] md:h-[330px] 
                  lg:max-w-[480px] lg:h-[360px] 
                  xl:max-w-[550px] xl:h-[400px] 
                  2xl:max-w-[600px] 2xl:h-[450px] 
                  overflow-hidden rounded-full border-2 border-gray-400 lg:rounded-tl-full lg:rounded-tr-full lg:rounded-bl-full lg:rounded-br-none mx-auto"
          >
            <Image
              src="/ServiceDropdown/hrmssoftware/hrms-right-hero.jpg"
              alt="HRMS Software Dashboard showing employee management interface"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="absolute z-10 grid grid-cols-4 gap-6 w-[90%] max-w-6xl -bottom-10 bg-orange-100 p-8 text-center transform -translate-x-1/2 left-1/2 rounded-3xl shadow-lg px-4 sm:px-6 md:px-8 mx-auto">
        <div className="flex flex-col items-center justify-center border border-gray-300 rounded-3xl ">
          <span className="text-4xl font-bold text-gray-800">01</span>
          <p className="text-gray-800 text-sm mt-2">Planning</p>
        </div>
        <div className="flex flex-col items-center justify-center border border-gray-300 rounded-3xl">
          <span className="text-4xl font-bold text-gray-800">02</span>
          <p className="text-gray-800 text-sm mt-2">Design</p>
        </div>
        <div className="flex flex-col items-center justify-center border border-gray-300 rounded-3xl">
          <span className="text-4xl font-bold text-gray-800">03</span>
          <p className="text-gray-800 text-sm mt-2">Development</p>
        </div>
        <div className="flex flex-col items-center justify-center border border-gray-300 rounded-3xl">
          <span className="text-4xl font-bold text-gray-800">04</span>
          <p className="text-gray-800 text-sm mt-2">Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
