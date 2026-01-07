import Image from "next/image";

const cards = [
  {
    title: "Innovative Approach",
    icon: "/Homepage/SolutionsThatScale/Innovative.svg",
    desc: "We combine creativity with cutting-edge technology to deliver solutions that truly make a lasting impact.",
  },
  {
    icon: "/Homepage/SolutionsThatScale/expertise.svg",
    title: "End-to-End Expertise",
    desc: "From idea to design, development, and launch we handle everything seamlessly under one roof.",
  },
  {
    icon: "/Homepage/SolutionsThatScale/secure.svg",
    title: "Scalable & Secure",
    desc: "Our solutions are built to scale as your business grows, while ensuring top-level security and reliability.",
  },
  {
    icon: "/Homepage/SolutionsThatScale/centric.svg",
    title: "Client-Centric",
    desc: "We work with transparency and collaboration, always putting your business goals and success first.",
  },
];

export default function MakeUsUnique() {
  return (

    <div className="relative overflow-hidden py-16 bg-gray-800">
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-500 rounded-full opacity-100 blur-3xl -z-10"></div>
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-500 rounded-full opacity-100 blur-3xl -z-10"></div>
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <span className="relative inline-block px-4 py-1.5 rounded-full border border-orange-400 bg-gray-50 shadow-sm text-sm font-medium text-gray-950 mb-4">
          <span className="absolute w-7 h-[6px] rounded-full bg-orange-500 right-[-1.2rem] top-1/2 -translate-y-1/2"></span>
          Solutions That Scale
        </span>
        <h6 className="text-3xl sm:text-4xl font-bold text-gray-50 mb-4">
          See how we show up for{" "}
          <span
            className="text-orange-500"
            style={{
              textShadow:
                "-1px -1px 0px #da5f00, 3px 3px 0px #263242, 4px 6px 0px #ff582336",
            }}
          >
            {" "}
            our customers
          </span>
        </h6>
        <p className="max-w-5xl mx-auto flex-wrap text-gray-50 text-sm text-justify break-words sm:text-base mb-12 font-sans">
          At Camlenio Software, our customers are at the heart of everything we
          do. We go beyond just providing solutions—we listen, understand, and
          actively collaborate to ensure their unique needs are met. From
          onboarding and training to ongoing support and innovation, we are
          committed to delivering reliable, high-quality services that help our
          clients achieve their business goals.
        </p>
      </div>
      <div className=" max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-orange-100 group rounded-2xl  p-6 flex flex-col items-center text-center hover:shadow-xl transition-colors duration-700 hover:bg-orange-500 "
          >
            <Image
              src={card.icon}
              alt={card.title}
              width={500}
              height={300}
              className="w-20 h-20 bg-orange-200  shadow-2xl rounded-full  object-cover transition-transform duration-700 group-hover:rotate-y-360 p-4 "
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-gray-50 transition-all duration-500">
              {card.title}
            </h2>
            <p className="mt-2 text-gray-600 text-base group-hover:text-gray-50 transition-all duration-500 font-sans text-center">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
