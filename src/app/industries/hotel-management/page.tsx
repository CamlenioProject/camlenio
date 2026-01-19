"use client"
import CTA from "@/app/components/cta";
import { m } from "framer-motion";
import { SolutionsSection } from "./components/SolutionsSection";
import { FeatureTabs } from "./components/FeatureTabs";
import { FAQSection } from "./components/FAQSection";
import { AutomateBusiness } from "./components/AutomateBusiness";
// Using MotionLayout from realestatesoftware to keep consistency
// Import RevealSection here too for the middle text
import { useRouter } from "next/navigation";
import { MotionLayout } from "../real-estate-software/components/MotionLayout";
import { RevealSection } from "../real-estate-software/components/RevealSection";

export default function HotelManagementPage() {
  const router = useRouter();

  return (
    <MotionLayout>
      <main className="min-h-screen text-gray-900 selection:bg-orange-200 selection:text-orange-900 overflow-x-hidden bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">

        {/* Subtle Background Pattern */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* hero section */}
        <section className="relative w-full min-h-screen  flex items-center overflow-hidden pt-0 sm:pt-10 lg:pt-0">
          {/* Top Center-Right Dot Pattern */}
          <div className="absolute top-[20%] right-[40%] lg:right-[45%] opacity-40 pointer-events-none z-0 hidden sm:block">
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-orange-300 rounded-full" />
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

            {/* Background Decorative Circle (Bottom Left - Subtle) */}
            <div className="absolute -bottom-2 -left-20 w-[36vw] h-[36vw] max-w-[600px] max-h-[600px] bg-[#FFFBF8] rounded-full z-0 pointer-events-none" />
            <div className="absolute bottom-[5%] left-[5%] w-[15vw] h-[15vw] max-w-[300px] max-h-[300px] bg-orange-300 rounded-full z-0 pointer-events-none mix-blend-multiply filter blur-3xl opacity-50" />

            {/* --- LEFT CONTENT (5 cols) --- */}
            <div className="lg:col-span-5 flex flex-col justify-center relative pt-10 lg:pt-0">
              <m.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <m.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold tracking-widest rounded-full mb-6"
                >
                  PREMIUM HOSPITALITY
                </m.div>

                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-[#FF7F50] leading-[1.05] mb-4 sm:mb-6 tracking-tight ">
                  <span
                    className="text-orange-500"
                    style={{
                      textShadow:
                        "-1px -1px 0px #da5f00, 2px 2px 0px #fff, 3px 4px 0px #ff582336",
                    }}
                  >

                    HOTEL &
                  </span>
                  <br />
                  <span className="text-slate-900">RESTAURANT</span>
                </h1>

                <m.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-500 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-md leading-relaxed"
                >
                  Elevate your guest experience with intelligent, automated, and seamless hotel management solutions designed for modern luxury.
                </m.p>

                <div className="flex flex-wrap gap-6 items-center mb-10 sm:mb-16">
                  <m.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push("/contact")}
                    className="px-10 py-4 bg-black text-white text-sm font-bold tracking-wider rounded-full hover:bg-gray-900 transition-all shadow-xl hover:shadow-2xl shadow-orange-500/10"
                  >
                    Get Started
                  </m.button>
                </div>
              </m.div>
            </div>

            {/* --- RIGHT COMPOSITION (7 cols) --- */}
            <div className="lg:col-span-7 relative h-auto lg:h-[700px] flex items-center justify-center lg:justify-end pb-20 lg:pb-0">

              {/* Main Image Container */}
              <m.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // smooth easeOutQuint-ish
                className="relative w-full max-w-[650px] aspect-[4/3] lg:aspect-auto lg:h-[500px] z-20"
              >
                {/* Custom Fluid Shape */}
                <div
                  className="absolute inset-0 overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
                  style={{
                    // This creates a large curve on Top Left, smaller on Bottom Left, rounded on right
                    borderRadius: "160px 20px 80px 20px",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop')" }}
                  >
                    {/* Gradient Overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Geometric Decor Bottom Right */}
                <m.div
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "backOut" }}
                  className="absolute -bottom-10 right-0 z-30 flex items-end"
                >
                  <div className="relative scale-75 sm:scale-100 origin-bottom-right">
                    {/* Orange Background */}
                    <div className="w-[280px] sm:w-[320px] h-[100px] sm:h-[120px] bg-[#FF7F50] rounded-l-full rounded-r-none shadow-lg " />

                    {/* Lines Container (Absolute) */}
                    <div className="absolute -bottom-[60px] left-[40px] z-10">
                      <svg width="140" height="200" viewBox="0 0 140 200" fill="none" style={{ overflow: 'visible' }}>
                        {/* Concentric U-Shapes */}
                        <path d="M 10 -10 V 60 A 60 60 0 0 0 130 60 V -10" stroke="#1a1a1a" strokeWidth="1.5" />
                        <path d="M 30 -10 V 60 A 40 40 0 0 0 110 60 V -10" stroke="#1a1a1a" strokeWidth="1.5" />
                        <path d="M 50 -10 V 60 A 20 20 0 0 0 90 60 V -10" stroke="#1a1a1a" strokeWidth="1.5" />
                        {/* Smallest inner arc/line */}
                        <path d="M 70 0 V 60 A 0 0 0 0 70 60 V 0" stroke="#1a1a1a" strokeWidth="1.5" />
                      </svg>
                    </div>

                    {/* Black Bar */}
                    <div className="absolute right-[40px] -bottom-[60px] top-[-6px] w-8 sm:w-10 bg-[#1a1a1a] shadow-xl z-20" />
                  </div>
                </m.div>

                {/* Floating Dots Decoration Top Left */}
                <div className="absolute -top-12 -left-8 lg:-left-16 z-10 grid grid-cols-4 gap-3">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <m.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + Math.random() * 0.5 }}
                      className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-[#FF7F50]' : 'bg-orange-200'}`}
                    />
                  ))}
                </div>
              </m.div>
            </div>

          </div>
        </section>

        <SolutionsSection />

        {/* Key Features Section (Tabbed Redesign) */}
        <section className="py-0 sm:py-20 px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <RevealSection className="mb-12 text-left sm:text-center">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                Key Features for{" "}
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                  }}
                >
                  Modern Hospitality
                </span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                Optimize every aspect of your hotel operations with our feature-rich software.
              </p>
            </RevealSection>

            {/* Feature Tabs Component */}
            <FeatureTabs />
          </div>
        </section>




        <AutomateBusiness />

        <FAQSection />

        {/* CTA Section */}
        <CTA
          title={"Ready to Modernize Your Hotel Operations?"}
          highlightedTitle={"Hotel Management Software"}
          subtitle={
            "Unlock the full potential of your hospitality business with custom, data-driven, and guest-centric software solutions. Contact us today for a free consultation."
          }
          buttontext={"Book A Free Demo"}
        />

      </main>
    </MotionLayout>
  );
}
