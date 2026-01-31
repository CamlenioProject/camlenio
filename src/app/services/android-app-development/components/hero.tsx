"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import { m, LazyMotion, domMax } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Suspense, lazy } from "react";
import { useRouter } from "next/navigation";

const PhoneModel = lazy(() => import("./PhoneModel").then(module => ({ default: module.PhoneModel })));

export default function Hero() {
  const router = useRouter();

  return (
    <LazyMotion features={domMax}>
      <section className="relative min-h-screen w-full bg-transparent overflow-hidden flex items-center justify-center pt-20 md:pt-0">

        {/* 2. Grid Pattern Overlay (Darker lines for Light Bg) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

        {/* --- CONTENT CONTAINER --- */}
        <div className="relative z-30 w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto min-h-[80vh]">

          {/* LEFT COLUMN: Text Content */}
          <div className="w-full md:w-[55%] flex flex-col items-start text-left space-y-8 z-40 order-2 md:order-1 mt-12 md:mt-0">

            {/* Hero Headline */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 drop-shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                  Android Mobile App
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-800 to-gray-600">
                  Development
                </span>
              </h1>
            </m.div>

            {/* Description */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 max-w-xl"
            > 
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
                Camlenio is a top <span className="text-gray-900 font-semibold">Android app development company</span> in India, building <span className="text-orange-600 font-bold">high-performance, scalable, and user-friendly</span> apps for startups, SMEs, and enterprises. From strategy and UI/UX to development and Play Store deployment, we deliver secure, custom Android solutions that drive engagement and digital growth.
              </p>
            </m.div>

            {/* Action Buttons */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group"
            >
              <button
                onClick={() => router.push("/contact")}
                className="relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-orange-600 rounded-full hover:bg-orange-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 shadow-[0_4px_14px_0_rgba(234,88,12,0.39)]"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
              </button>
            </m.div>
          </div>

          {/* RIGHT COLUMN: 3D Model */}
          <m.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: "circOut" }}
            className="w-full md:w-[45%] h-[50vh] md:h-[80vh] relative z-10 order-1 md:order-2 flex items-center justify-center will-change-transform"
          >
            {/* Color Glow Effect Behind Model - Optimized */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-400/20 rounded-full blur-[80px] -z-10 pointer-events-none transform-gpu" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-amber-300/30 rounded-full blur-[60px] -z-10 pointer-events-none transform-gpu" />

            {/* Canvas Container - Static Position for Performance */}
            <div className="w-full h-full relative">
              <Canvas
                className="w-full h-full"
                camera={{ position: [0, 0, 6], fov: 40 }}
                dpr={[1, 1.5]}
                gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true, powerPreference: "high-performance" }}
              >
                <Suspense fallback={null}>
                  <Environment preset="city" />
                  <ambientLight intensity={1.5} />
                  <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={15} color="#fff" />
                  <spotLight position={[-10, 0, 10]} intensity={5} color="#f97316" />

                  <group position={[0, 0.5, 0]} rotation={[0, 1.3, 0]} scale={0.85}>
                    <group rotation={[0, 0, 0]}>
                      <PhoneModel />
                    </group>
                  </group>

                  <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={40} blur={2.5} far={4} color="black" frames={1} />

                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={true}
                    autoRotateSpeed={0.02}
                    minPolarAngle={Math.PI / 2.5}
                    maxPolarAngle={Math.PI / 1.5}
                  />
                </Suspense>
              </Canvas>
            </div>
          </m.div>

        </div>

      </section>
    </LazyMotion>
  );
}
