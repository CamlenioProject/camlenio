import Hero from "./components/hero";
import BrandTransformation from "./components/brand-transformation";
import GrowthPartner from "./components/growth-partner";
import ServicesSection from "./components/services";
import BenefitsSection from "./components/benefits";
import CTA from "@/app/components/cta";

export const metadata = {
  title: "Best Digital Marketing Company in Jaipur | Camlenio",
  description:
    "Camlenio is a leading digital marketing agency in Jaipur, providing SEO, social media management, Google Ads, and custom content marketing campaigns that drive ROI.",
};

export default function DigitalMarketingPage() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 overflow-hidden">
      <Hero />
      <BrandTransformation />
      <GrowthPartner />
      <ServicesSection />
      <BenefitsSection />
      <div id="cta-section">
        <CTA
          title="Your Partner for Digital Success"
          highlightedTitle="Digital Success"
          subtitle="Take your business to the next level with skilled digital marketing services in Jaipur. Whether you require more traffic and powerful branding for your website. Our expertise is available to help your business succeed."
          buttontext="Get Started Today"
        />
      </div>
    </div>
  );
}
