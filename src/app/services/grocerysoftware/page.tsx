"use client";

import { useRef, useState } from "react";
import { LazyMotion, domMax, m, useScroll, useTransform, useInView } from "framer-motion";
import { 
  FaMobileAlt, 
  FaLeaf, 
  FaChartLine, 
  FaUserFriends,
  FaShoppingCart,
  FaStar,
  FaLemon,
  FaCarrot,
  FaBoxOpen,
  FaRocket,
  FaMapMarkedAlt,
  FaStore,
  FaBiking,
  FaWallet,
  FaSearch,
  FaBell,
  FaCheckCircle,
  FaArrowUp
} from "react-icons/fa";

// Feature Data
const ecosystem = [
  {
    title: "Customer App",
    subtitle: "Shopping Made Simple",
    desc: "A buttery-smooth interface that lets users browse, search, and order in seconds. Includes voice search, real-time tracking, and secure payments.",
    icon: <FaMobileAlt />,
    color: "bg-orange-500",
    features: ["Smart Search", "Live Order Tracking", "Multiple Payment Options"]
  },
  {
    title: "Store Dashboard",
    subtitle: "Complete Control",
    desc: "Manage your entire inventory, track orders, and view sales analytics from a single powerful dashboard. Accept or reject orders with one click.",
    icon: <FaStore />,
    color: "bg-orange-600",
    features: ["Inventory Management", "Sales Reports", "Order Dispatching"]
  },
  {
    title: "Driver App",
    subtitle: "Optimized Delivery",
    desc: "Give your fleet the tools they need. Route optimization, earning reports, and instant notifications for new delivery tasks.",
    icon: <FaBiking />,
    color: "bg-orange-400",
    features: ["Route Navigation", "Earning History", "Proof of Delivery"]
  }
];

const smartFeatures = [
    { icon: <FaSearch />, title: "AI-Powered Search", desc: "Predicts what your customers want before they type." },
    { icon: <FaMapMarkedAlt />, title: "Live Tracking", desc: "Real-time GPS tracking for every order." },
    { icon: <FaWallet />, title: "Digital Wallet", desc: "Integrated wallet for faster checkouts and refunds." },
    { icon: <FaBell />, title: "Push Notifications", desc: "Engage users with personalized offers and updates." },
];

// Scroll Reveal Component
const RevealSection = ({ children, className }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <div ref={ref} className={className}>
            <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {children}
            </m.div>
        </div>
    );
};

export default function GrocerySoftwarePage() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Mock Data for Hero Cards
  const heroCards = [
      { id: 1, title: "Total Revenue", value: "$124,500", growth: "+12.5%", color: "bg-white", text: "text-gray-900" },
      { id: 2, title: "Active Orders", value: "1,240", growth: "+8.2%", color: "bg-orange-500", text: "text-white" },
      { id: 3, title: "New Customers", value: "350+", growth: "+24%", color: "bg-white", text: "text-gray-900" },
  ];

  return (
    <LazyMotion features={domMax}>
      <main className="min-h-screen text-gray-900 font-sans selection:bg-orange-200 selection:text-orange-900 overflow-x-hidden">
        
        {/* Hero Section - Camlenio Orange + Light Theme */}
        <section className="relative z-10 min-h-[90vh] flex flex-col md:flex-row items-center overflow-hidden bg-gradient-to-r from-gray-50 via-orange-100 to-gray-50">
            
            {/* Left Content */}
            <div className="w-full md:w-1/2 px-6 md:pl-20 py-20 md:py-0 flex flex-col justify-center relative z-20">
                 <m.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                 >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-6">
                        <FaStar className="text-orange-500" /> 
                        #1 Grocery Tech Partner
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                        Launch. Scale. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                            Dominate.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                        The complete technology stack for your grocery business. 
                        Empower your operations with our premium App, Website, and Admin Panel.
                    </p>

                    <div className="space-y-4 mb-10">
                         {[
                             "Scalable Cloud Architecture",
                             "Real-time Inventory Sync",
                             "Payment Gateway Integration",
                             "Advanced Analytics Dashboard"
                         ].map((item, i) => (
                             <div key={i} className="flex items-center gap-3">
                                 <FaCheckCircle className="text-orange-500 text-xl" />
                                 <span className="font-medium text-gray-700">{item}</span>
                             </div>
                         ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <m.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg hover:bg-orange-600 transition-colors shadow-orange-500/30">
                            Start Your Business
                        </m.button>
                        <m.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-white text-gray-900 border border-gray-200 font-bold rounded-xl shadow-sm hover:border-orange-300 transition-colors">
                            View Live Demo
                        </m.button>
                    </div>
                 </m.div>
            </div>

            {/* Right Content - 3D Interactive Cards */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative flex items-center justify-center bg-orange-500 md:rounded-bl-[5rem] overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute inset-0 pointer-events-none">
                     <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
                     <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse" />
                </div>

                <div 
                    className="relative w-full max-w-lg aspect-square flex items-center justify-center [perspective:1000px]"
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    {heroCards.map((card, idx) => {
                         const isHovered = hoveredCard === idx;
                         const yOffset = idx === 1 ? 0 : idx === 0 ? 40 : -40;
                         const xOffset = idx === 1 ? 0 : idx === 0 ? -60 : 60;
                         const zIndex = idx === 1 ? 10 : 1;
                         
                         return (
                             <m.div
                                key={idx}
                                onHoverStart={() => setHoveredCard(idx)}
                                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                                animate={{ 
                                    opacity: 1, 
                                    y: isHovered ? yOffset - 20 : yOffset, 
                                    x: isHovered ? xOffset : xOffset,
                                    scale: isHovered ? 1.1 : 1,
                                    rotateY: idx === 0 ? 15 : idx === 2 ? -15 : 0,
                                    rotateX: 5
                                }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 100, 
                                    damping: 15,
                                    delay: 0.2 + (idx * 0.1)
                                }}
                                className={`absolute w-64 p-6 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20 cursor-pointer ${card.color} ${card.text}`}
                                style={{ zIndex }}
                             >
                                 <div className="flex justify-between items-start mb-4">
                                     <div className={`p-2 rounded-lg ${card.text === 'text-white' ? 'bg-white/20' : 'bg-gray-100'}`}>
                                         <FaChartLine />
                                     </div>
                                     <span className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 ${card.text === 'text-white' ? 'bg-green-400 text-black' : 'bg-green-100 text-green-700'}`}>
                                         <FaArrowUp size={10} /> {card.growth}
                                     </span>
                                 </div>
                                 <h3 className="text-sm opacity-80 mb-1 font-medium">{card.title}</h3>
                                 <div className="text-3xl font-bold">{card.value}</div>
                             </m.div>
                         );
                    })}
                </div>
            </div>
        </section>

        {/* SECTION 1: The Triple Ecosystem */}
        <section className="relative z-10 py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <RevealSection className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900 uppercase">
                        The 3 Pillars of Your Business
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A seamless connection between your customers, your store, and your drivers.
                    </p>
                </RevealSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ecosystem.map((item, idx) => (
                        <RevealSection key={idx} className="h-full">
                            <m.div 
                                whileHover={{ y: -10 }}
                                className="h-full p-8 rounded-[2.5rem] bg-white border border-orange-100 shadow-xl overflow-hidden relative group"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-[100%] ${item.color} opacity-10 group-hover:scale-150 transition-transform duration-500`} />
                                
                                <div className={`w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center text-3xl mb-8 shadow-md`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-2 text-gray-900">{item.title}</h3>
                                <p className="text-orange-600 font-bold mb-4 text-sm uppercase tracking-wider">{item.subtitle}</p>
                                <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                                
                                <ul className="space-y-2">
                                    {item.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                            <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </m.div>
                        </RevealSection>
                    ))}
                </div>
            </div>
        </section>

        {/* SECTION 2: Smart Features Grid */}
        <section className="relative z-10 py-24 px-6 bg-orange-50/50">
            <div className="max-w-7xl mx-auto">
                 <div className="flex flex-col lg:flex-row items-center gap-16">
                     <RevealSection className="lg:w-1/2">
                         <h2 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 leading-tight">
                             Built Smarter. <br/>
                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">Grow Faster.</span>
                         </h2>
                         <p className="text-xl text-gray-700 mb-8 font-medium">
                             Loaded with advanced features to automate your grocery operations and increase average order value.
                         </p>
                         <button className="px-8 py-4 rounded-full border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors">
                             Explore All Features
                         </button>
                     </RevealSection>

                     <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                         {smartFeatures.map((feat, idx) => (
                             <RevealSection key={idx}>
                                 <m.div 
                                     whileHover={{ scale: 1.02 }}
                                     className="p-6 rounded-3xl bg-white border border-gray-200 text-left shadow-lg group hover:border-orange-200 transition-colors"
                                 >
                                     <div className="text-3xl text-orange-500 mb-4 group-hover:scale-110 transition-transform">{feat.icon}</div>
                                     <h4 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h4>
                                     <p className="text-sm text-gray-600">{feat.desc}</p>
                                 </m.div>
                             </RevealSection>
                         ))}
                     </div>
                 </div>
            </div>
        </section>

        {/* SECTION 3: How It Works Process */}
        <section className="relative z-10 py-24 px-6 bg-gray-900 text-white overflow-hidden">
             {/* Decorative Circles */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
                 <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full border-[2px] border-orange-500" />
                 <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full border-[2px] border-orange-500" />
             </div>

             <div className="max-w-7xl mx-auto relative z-10 text-center">
                 <RevealSection className="mb-16">
                     <h2 className="text-3xl md:text-5xl font-black mb-6">How It Works</h2>
                     <p className="text-gray-400 text-lg">From order to doorstep in three simple steps.</p>
                 </RevealSection>

                 <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
                     {/* Connector Line (Desktop) */}
                     <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-gray-800 -z-10" />

                     {[
                         { step: "01", title: "User Orders", desc: "Customer places order via App or Website." },
                         { step: "02", title: "Store Packs", desc: "Store accepts and packs the fresh items." },
                         { step: "03", title: "Driver Delivers", desc: "Driver gets optimized route for fast delivery." }
                     ].map((item, idx) => (
                         <RevealSection key={idx} className="w-full md:w-1/3">
                             <div className="bg-gray-800 p-8 rounded-[2rem] border border-white/5 backdrop-blur-md hover:bg-gray-800/80 transition-colors group">
                                 <div className="text-6xl font-black text-orange-500/20 mb-4 group-hover:text-orange-500 transition-colors">{item.step}</div>
                                 <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                                 <p className="text-gray-400">{item.desc}</p>
                             </div>
                         </RevealSection>
                     ))}
                 </div>
             </div>
        </section>

        {/* Tech Stack Marquee (Light Theme) */}
        <section className="py-20 bg-white text-gray-900 overflow-hidden transform -skew-y-2 border-y border-gray-100">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-4xl font-black mx-8 uppercase opacity-20">
                        Next.js • React Native • Node.js • AWS • Stripe • 
                    </span>
                ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-32 px-6 text-center bg-gray-50">
             <RevealSection className="max-w-5xl mx-auto bg-orange-500 border border-orange-400 rounded-[3rem] p-12 md:p-24 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-300 via-white to-orange-300 opacity-50" />
                <h2 className="text-4xl md:text-6xl font-black mb-8 text-white uppercase">
                    Your Competitors <br/> Are Already Online
                </h2>
                <button className="px-12 py-5 bg-white text-orange-600 font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-xl">
                    Beat Them Today
                </button>
             </RevealSection>
        </section>

      </main>
    </LazyMotion>
  );
}
