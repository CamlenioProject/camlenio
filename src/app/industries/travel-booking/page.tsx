import TravelHero from "./components/TravelHero";
import TravelShowcase from "./components/TravelShowcase";
import TravelFeatures from "./components/TravelFeatures";
import TravelReviews from "./components/TravelReviews";
import TravelCTA from "./components/TravelCTA";

export const metadata = {
  title: "Travel Booking Software Development | Camlenio",
  description: "Build your travel empire with our custom travel software solutions. Booking engines, agency portals, mobile apps, and more.",
};

export default function TravelPage() {
  return (
    <main className="bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove">
      <TravelHero />
      <TravelShowcase />
      <TravelFeatures />
      <TravelCTA />
      <TravelReviews />
    </main>
  );
}
