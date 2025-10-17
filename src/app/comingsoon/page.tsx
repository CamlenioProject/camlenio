"use client";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-r from-indigo-100 via-orange-100 to-indigo-50 bg-[length:200%_200%] animate-gradientMove overflow-hidden">
      <div className="relative z-20 flex flex-col items-center justify-center text-center p-8">
        <h1 className=" text-4xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          We are working hard to bring you something amazing. Stay tuned!
        </p>
        <div>
          <Link href="/">
            <h1 className="text-xl font-bold mt-4 underline text-blue-500 hover:text-blue-600">
              Back To Home
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
