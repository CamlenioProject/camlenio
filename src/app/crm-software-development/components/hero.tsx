"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContainerScroll } from "../../components/container-scroll-animation";
import BackgroundRipple from "@/app/components/ui/BackgroundRipple";
import { BarChart3, Router, Users } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { useRouter } from "next/navigation";

export default function CrmHero(): React.JSX.Element {
  const router = useRouter();
  return (
    <section className="relative w-full overflow-hidden">
      {/* BACKGROUND */}
      <BackgroundRipple className="opacity-60" />

      {/* Decorative Blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-20 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-orange-100/60 via-orange-50/40 to-transparent" />

      {/* dotted bg */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#00000010_1px,transparent_1px)] bg-[size:18px_18px]" />

      {/* Floating Icons */}

      <div className="absolute bottom-52 left-32 hidden lg:block text-orange-300/40">
        <BarChart3 size={48} />
      </div>

      <div className="absolute bottom-64 right-32 hidden lg:block text-orange-300/30">
        <Users size={44} />
      </div>

      <div className="absolute top-56 left-20 hidden lg:flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 backdrop-blur shadow-sm">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        <span className="text-xs font-semibold text-gray-700">
          Conversion +32%
        </span>
      </div>

      <div className="absolute top-80 right-24 hidden lg:flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 backdrop-blur shadow-sm">
        <span className="h-2 w-2 rounded-full bg-orange-500" />
        <span className="text-xs font-semibold text-gray-700">
          Sales Growth
        </span>
      </div>

      {/* HERO CONTENT */}
      <div className="relative mx-auto max-w-7xl px-6 pt-36 sm:pt-40 md:pt-50 z-100">
        {/* TEXT */}
        <div className="mx-auto max-w-4xl text-center flex flex-col gap-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 ">
            <span
              className="text-orange-500"
              style={{
                textShadow:
                  "-1px -1px 0px #da5f00, 3px 3px 0px #fff, 4px 6px 0px #ff582336",
              }}
            >
              Custom CRM Software <br />
            </span>
            Development Company in Jaipur
          </h1>

          <p className="mx-auto max-w-4xl text-sm md:text-base text-gray-600">
            Build smarter relationships and boost your growth with Camlenio, as a trusted CRM Software Development Company in Jaipur. We develop performance-based CRM systems tailored to your business requirements. Our software helps companies automate sales operations, manage leads and improve consumer engagement.
          </p>

          <div className="flex justify-center pt-1">
            <Button
              size="xl"
              onClick={() => router.push(`/contact`)}
              className="w-full sm:w-auto"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* DASHBOARD */}
        <div className="-mt-14 md:-mt-20">
          <ContainerScroll titleComponent={null}>
            <Image
              src="https://res.cloudinary.com/dxpbriwey/image/upload/v1775823743/camlenio-crm_vob7ik.webp"
              alt="Camlenio CRM Dashboard"
              width={1600}
              height={900}
              priority
              className="w-full h-auto object-contain"
            />
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
}
