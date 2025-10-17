"use client";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-50 bg-[length:200%_200%] animate-gradientMove py-16">
      <div className="text-center">
        <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-300 bg-white shadow-sm text-sm font-medium text-gray-950 mb-4">
          <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 left-[-1.2rem] top-1/2 -translate-y-1/2"></span>
          Who We Are
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Our Strength Lies in{" "}
              <span
                className="text-orange-500"
                style={{ textShadow: "2px 2px 0 #ffff, 4px 4px 0 #FFB266" }}
              >
                Our Team
              </span>
            </h2>
            <p className="max-w-5xl mx-auto text-gray-600 text-sm text-justify md:text-base flex-wrap break-words mb-12 font-sans ">
              Our differentiator is our dedicated team of developers, designers,
              and strategists. Our team possesses high levels of experience,
              creativity, and commitment to every project. By keeping our
              processes internal, we fully control quality, communication, and
              timing, allowing us to build a team culture where everyone
              collaborates to always learn. We believe in empowering our team
              with the latest tools and technologies to deliver innovative
              solutions. Together, we strive not just to meet expectations but
              to consistently exceed them.
            </p>
          </div>
          <div className=" w-[400px] relative flex justify-center lg:justify-end">
            <Image
              src="/CompanyDropdown/about/Our-Team1.jpg"
              alt="Who We Are"
              width={360}
              height={250}
              className="h-full w-full rounded-2xl  object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
