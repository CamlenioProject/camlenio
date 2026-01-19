"use client";

import PressHero from "./components/PressHero";
import PressIntro from "./components/PressIntro";
import PressTrip from "./components/PressTrip";
import PressStats from "./components/PressStats";
import PressTimeline from "./components/PressTimeline";
import PressCommunity from "./components/PressCommunity";
import PressCTA from "./components/PressCTA";
import PressLightbox from "./components/PressLightbox";
import { useState } from "react";

const events = [
  {
    title: "Award Ceremony",
    description:
      "A proud moment honoring outstanding team members for their dedication, innovation, and contributions. Reflecting Camlenio’s culture of appreciation and excellence.",
    images: [
      "/event/award-vinod_sir.webp",
      "/event/award-rahul_ji.webp",
      "/event/award-abhishek_ji.webp",
      "/event/award-piyush_ji.webp",
      "/event/award-ravi_ji.webp",
      "/event/award-shyam_ji.webp",
      "/event/award-tonika.webp",
      "/event/award-vaibhav_ji.webp",
      "/event/award-vinita.webp",
      "/event/award-monika.webp",
    ],
  },
  {
    title: "Cake Cutting",
    description:
      "Marking the official celebration of our second milestone year. Surrounded by the team, symbolizing success, unity, and gratitude for our shared achievements.",
    images: [
      "/event/cake-cutting1.webp",
      "/event/cake-cutting2.webp",
      "/event/cake.webp",
    ],
  },
  {
    title: "Sports Activities",
    description:
      "Excitement and teamwork. Engaging games encouraged collaboration, healthy competition, and bonding, reinforcing our energetic work environment.",
    images: [
      "/event/sports1.webp",
      "/event/sports2.webp",
      "/event/sports3.webp",
      "/event/sports4.webp",
    ],
  },
  {
    title: "Dance & Entertainment",
    description:
      "Filled with joy and rhythm. Team members showcased talent and enthusiasm, creating a lively atmosphere reflecting our inclusive culture.",
    images: [
      "/event/dance1.webp",
      "/event/dancing1.webp",
      "/event/dancing2.webp",
      "/event/enjoy-party.webp",
    ],
  },
  {
    title: "Client & Partner Gratitude",
    description:
      "Honoring the trust and collaboration of our valued clients and partners who joined us. Their support drives our continued growth and innovation.",
    images: [
      "/event/client1.webp",
      "/event/client2.webp",
    ],
  },
];

export default function PressPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setInitialIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 via-orange-50/30 to-gray-50 bg-[length:200%_200%] animate-gradientMove min-h-screen">
      <PressHero />
      <PressIntro />
      <PressStats />
      <PressTimeline events={events} openLightbox={openLightbox} />
      <PressCommunity openLightbox={openLightbox} />
      <PressTrip />
      <PressCTA />
      <PressLightbox
        images={lightboxImages}
        initialIndex={initialIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
