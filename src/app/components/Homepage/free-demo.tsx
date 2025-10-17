"use client";

import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const FreeQuotation = () => {
  return (
    <div className="relative py-16 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_200%] animate-gradientMove overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h6 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            Every Great, Big thing starts with a decision {""}
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #323d4e, 4px 6px 0px #ff582336",
              }}
            >
              that you take today
            </span>
          </h6>
        </div>
        <div className="relative text-center border-2 border-blue-400 p-8 rounded-2xl bg-transparent">
          <div className="mb-6">
            <h5 className="text-3xl font-semibold text-white">
              Get a Free Demo
            </h5>
            <p className="text-xl text-white/90 font-light  mb-6 font-sans ">
              Don’t worry your data and business ideas are safe with us.
            </p>
          </div>
          <form className="grid grid-cols-1 mTd:grid-cols-3 gap-6">
            <input
              aria-label="Full Name"
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 bg-transparent text-gray-50 placeholder-blue-400"
              id="home_name"
              name="home_name"
              type="text"
              placeholder="Enter Full Name"
              required
            />
            <input
              aria-label="Email Address"
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 bg-transparent text-gray-50 placeholder-blue-400 "
              id="home_email"
              name="home_email"
              type="email"
              placeholder="Email Id"
              required
            />
            <input
              aria-label="Phone Number"
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 bg-transparent text-gray-50 placeholder-blue-400 "
              id="home_phone"
              name="home_phone"
              type="tel"
              placeholder="Contact Number"
              required
            />
            <textarea
              aria-label="Message"
              className="w-full md:col-span-3 px-4 py-3 rounded-lg border-2 border-b-8 border-blue-400 bg-transparent text-gray-50 placeholder-blue-400  outline-none"
              id="home_message"
              name="home_message"
              placeholder="Message"
              rows={4}
            ></textarea>
            <div className="md:col-span-3">
              <button
                type="submit"
                className="relative group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-semibold text-gray-900 bg-white rounded-full group text-sm sm:text-base lg:text-lg transition-all"
              >
                <span className="absolute inset-0 w-full h-full bg-orange-500 rounded-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                <span className="relative z-10 group-hover:text-white transition-all duration-500 flex items-center gap-2 group-hover:scale-x-108 ">
                  Talk to Experts <FaLongArrowAltRight />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Image
        src="/Homepage/shapes/global_shap.png"
        alt="Global Shape"
        width={600}
        height={600}
        className="absolute -left-80  top-10 opacity-100 animate-spin [animation-duration:50s] text-blue-500"
        unoptimized
      />

      <Image
        src="/Homepage/shapes/shape-3.png"
        alt="Shape Bg"
        width={400}
        height={400}
        className="absolute right-0 bottom-0 opacity-50"
      />
    </div>
  );
};
export default FreeQuotation;
