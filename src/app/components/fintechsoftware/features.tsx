import {
  Building2,
  Lightbulb,
  ScreenShare,
  Trophy,
  User,
  User2,
  LucideIcon,
} from "lucide-react";
import { cn } from "../../../../lib/utils";
import { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  position?: "left" | "right";
  cornerStyle?: string;
};

const leftFeatures: FeatureItem[] = [
  {
    icon: Building2,
    title: "Taught by Professionals",
    description:
      "Learn directly from top engineers and founders with real-world experience.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: User2,
    title: "Coding Hostels",
    description:
      "Join virtual hostels to study, collaborate, and vibe with fellow learners.",
    position: "left",
    cornerStyle: "sm:-translate-x-8 sm:rounded-br-[2px]",
  },
  {
    icon: Trophy,
    title: "Bounties",
    description:
      "Win rewards for solving challenges, contributing to projects, and helping peers.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-tr-[2px]",
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: ScreenShare,
    title: "Revision Classes",
    description:
      "Stay sharp with weekly revision sessions and topic refreshers.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: User,
    title: "Peer Code Reviews",
    description:
      "Improve faster with feedback from mentors and batchmates on your actual code.",
    position: "right",
    cornerStyle: "sm:translate-x-8 sm:rounded-bl-[2px]",
  },
  {
    icon: Lightbulb,
    title: "Leet Lab",
    description:
      "Ace coding interviews with daily DSA problems, contests, and tracking.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-tl-[2px]",
  },
];

const FeatureCard = forwardRef<HTMLDivElement, { feature: FeatureItem }>(
  ({ feature }, ref) => {
    const Icon = feature.icon;

    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-2xl px-4 pt-4 pb-4 text-sm",
          "bg-orange-200 border border-gray-200",
          feature.cornerStyle
        )}
      >
        <div className="text-orange-500 mb-3">
          <Icon className="h-8 w-8" aria-hidden="true" />
        </div>
        <h3 className="text-gray-900 mb-2.5 text-2xl">{feature.title}</h3>
        <p className="text-gray-700 text-base text-pretty">
          {feature.description}
        </p>

        <span
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-[2px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-70 rounded-full"
        />

        <span
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(40%_15%_at_50%_110%,rgba(255,145,0,0.15)_0%,transparent_100%)] pointer-events-none"
        />
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

export default function Feature() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftCardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightCardsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const leftCards = leftCardsRefs.current.filter(Boolean);
    const rightCards = rightCardsRefs.current.filter(Boolean);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: "top 70%",
        toggleActions: "play none none none",
        markers: false,
      },
    });

  
    tl.from(leftCards, {
      x: "-100%",
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2, 
    });

 
    tl.from(
      rightCards,
      {
        x: "100%",
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      },
      "<" 
    );

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-20 pb-8 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove"
    >
      <div className="mx-6 max-w-[1120px] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard
                key={`left-feature-${index}`}
                feature={feature}
                ref={(el) => {
                  leftCardsRefs.current[index] = el;
                }}
              />
            ))}
          </div>

          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
            <div className="relative mx-auto mb-4 w-fit rounded-full rounded-bl-[2px] border border-orange-300 bg-white/80 px-4 py-2 text-sm shadow">
              <span className="relative z-10 flex items-center gap-2 text-gray-800">
                Features
              </span>
              <span
                aria-hidden="true"
                className="absolute -bottom-px left-1/2 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
              />
            </div>
            <h2 className="text-gray-900 mb-2 text-center text-2xl sm:mb-2.5 md:text-[1.8rem]">
              Core Features of <br />
              FinTech Software
            </h2>
            <p className="text-gray-700 mx-auto max-w-[18rem] text-center text-pretty">
              Cohorts are the best way to learn because you finish the course in
              a timely manner.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard
                key={`right-feature-${index}`}
                feature={feature}
                ref={(el) => {
                  rightCardsRefs.current[index] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
