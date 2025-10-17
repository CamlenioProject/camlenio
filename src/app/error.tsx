"use client";

import { useEffect } from "react";
import Lottie from "lottie-react";
import ErrorPage from "@/animations/Error.json";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="bg-transparent text-white p-4 rounded-full transition z-10 flex items-center justify-center">
        <Lottie
          animationData={ErrorPage}
          loop
          autoplay
          className="w-1/2 lg:w-1/2 h-1/2 lg:h-1/2"
        />
      </div>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
      >
        Try Again
      </button>
    </div>
  );
}
