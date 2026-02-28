"use client";

import Hero from "./components/hero";
import Features from "./components/features";
// import TrustedBy from "./components/TrustedBy";
import WhyChoose from "./components/WhyChoose";
import BulkPayoutInfos from "./components/BulkPayoutInfos";
import VerificationAPI from "./components/faqSection";
import IndianBusiness from "./components/IndianBusiness";
import CTA from "@/app/components/cta";
import SalaryPayoutOverview from "./components/SalaryPayoutOverviewt";
import PayoutIndustries from "./components/PayoutIndustries";
import ComprehensivePayouts from "./components/ComprehensivePayouts";

export default function PayoutServices() {
  return (
    <div className="relative bg-gradient-to-r from-gray-100 via-orange-50 to-gray-100 bg-[length:200%_200%] animate-gradientMove text-gray-900 selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Hero />
      <WhyChoose />
      <ComprehensivePayouts />
      <Features />
      <SalaryPayoutOverview />
      <IndianBusiness />
      <BulkPayoutInfos />
      <PayoutIndustries />
      <VerificationAPI />
      <CTA
        title="Get Started With Secure Payouts Today"
        highlightedTitle=" Automate Payouts"
        subtitle="Automate your payouts and scale confidently with our API-driven payout services."
        buttontext="Contact Sales"
      />
    </div>
  );
}
