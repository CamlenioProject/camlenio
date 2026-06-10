
import Overview from "./components/Overview";
import Hero from "./components/Hero";
import CTA from "@/app/components/cta";
import Benefits from "./components/Benefits";
import WhyChoose from "./components/WhyChoose";

export const metadata = {
  title: "Real Estate Software Development Company in Jaipur | Camlenio",
  description: "Real estate software development services in Jaipur. We build custom ERP, property listing platforms, CRM software, and real estate mobile apps for brokers and builders.",
};

export default function RealEstateSoftwarePage() {
  return (
    <div className="relative bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 overflow-x-clip">
      <Hero />
      <Overview />
      <Benefits />
      <WhyChoose />
      <CTA
        title={"Let’s Build Your Real Estate Platform"}
        highlightedTitle={"Real Estate Platform"}
        subtitle={
          "Ready to digitize your property business with the top real estate software development company in Jaipur. Contact us today to discuss your requirements and get the customized solutions that drive growth and efficiency."
        }
        buttontext={"Contact Us"}
      />
    </div>
  );
}
