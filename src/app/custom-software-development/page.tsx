"use client";
import CTA from "../components/cta";
import Hero from "../custom-software-development/components/hero";
import Migration from "../custom-software-development/components/migrations";
import WebDevExperts from "../custom-software-development/components/web_dev_experts";
import WebDevSolution from "../custom-software-development/components/web_dev_solution";

export default function WebDevPage() {
  return (
    <main className="relative bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100">
      <Hero />
      <Migration />
      <WebDevSolution />
      <WebDevExperts />
      <CTA
        title={"Start Your Web Development Journey Today With Us"}
        highlightedTitle={"Web Development"}
        subtitle={
          "Get in touch with our experienced custom web development services team to build web solutions tailored to your business objectives."
        }
        buttontext={"Get Started"}
      />
    </main>
  );
}
