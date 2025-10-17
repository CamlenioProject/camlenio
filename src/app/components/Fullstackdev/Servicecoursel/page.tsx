// "use client";
import React from "react";
import { Carousel, Card } from "./Carousel";

export default function ServiceCarouselPage() {
  const carouselItems = [
    <Card key={0} card={{ title: "Web Development", content: "Build scalable web apps." }} />,
    <Card key={1} card={{ title: "Mobile Apps", content: "Cross-platform mobile solutions." }} />,
    <Card key={2} card={{ title: "UI/UX Design", content: "Modern, user-friendly interfaces." }} />,
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-4">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <Carousel items={carouselItems} />
    </div>
  );
}

