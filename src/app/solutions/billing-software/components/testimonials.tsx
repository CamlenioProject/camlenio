import Image from "next/image";
import { Star } from "lucide-react";
import { FaRegUser } from "react-icons/fa";

const items = [
  {
    name: "Aarav Patel",
    role: "Founder, SwiftBooks",
    text: "Ledgerly transformed our invoicing. Payments are quicker and tracking is effortless.",
    avatar: FaRegUser,
  },
  {
    name: "Sara Khan",
    role: "COO, BrightWorks",
    text: "Clean interface, powerful features. We closed our month-end 2x faster.",
    avatar: FaRegUser,
  },
  {
    name: "Rohan Mehta",
    role: "Consultant",
    text: "Automations and reminders save me hours every week. Highly recommended!",
    avatar: FaRegUser,
  },
];

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="py-16 md:py-20 bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2
            id="testimonials-title"
            className="text-2xl md:text-4xl font-semibold"
          >
            Trusted by `1,000+` businesses
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-lg border border-orange-200 hover:border-orange-500 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="relative size-10 overflow-hidden flex justify-center items-center rounded-full">
                  <FaRegUser className="text-2xl" />
                </div>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">“{t.text}”</p>
              <div className="mt-4 flex items-center gap-1 text-orange-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
