
import CTA from "@/app/components/cta";
import { HeroSection } from "./components/HeroSection";
import { SolutionsSection } from "./components/SolutionsSection";
import { FeatureTabs } from "./components/FeatureTabs";
import { SoftwareTypesSection } from "./components/SoftwareTypesSection";
import { AISection } from "./components/AISection";
import { CustomTechSection } from "./components/CustomTechSection";
import { RevealSection } from "./components/RevealSection";
import { MotionLayout } from "./components/MotionLayout";

export default function RealEstateSoftwarePage() {

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

        <HeroSection />

        <SolutionsSection />

        {/* Key Features Section (Tabbed Redesign) */}
        <section className="py-14 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <RevealSection className="mb-12 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                Everything {" "}
                <span
                  className="text-orange-500"
                  style={{
                    textShadow:
                      "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
                  }}
                >
                  You Need. <br />
                  Nothing {" "}
                </span>
                You Don't.
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                A comprehensive suite of tools organized for efficiency. Select a category to explore.
              </p>
            </RevealSection>

            {/* Feature Tabs Component */}
            <FeatureTabs />
          </div>
        </section>

        <AISection />

        <SoftwareTypesSection />

        {/* <CustomTechSection /> */}

        {/* CTA Section */}
        <CTA
          title={"Get Started with the Best Real Estate Software Development Company"}
          highlightedTitle={"Real Estate Software"}
          subtitle={
            "Unlock the full potential of your real estate business with custom, secure, and future-ready software. Contact us today for a free consultation and discover how our Real Estate Software Solutions can transform your operations."
          }
          buttontext={"Book A Free Demo"}
        />

      </main>
    </MotionLayout>
  );
}
