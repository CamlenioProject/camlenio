'use client';

import React, { useState, useEffect } from 'react';
import { Search, Palette, Code, TestTube, Rocket, Sparkles, Zap, TrendingUp } from 'lucide-react';

interface ProcessStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  features: string[];
}

export default function CRMProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2
    }));
    setParticles(newParticles);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const steps: ProcessStep[] = [
    {
      id: 1,
      icon: <Search className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Requirement Analysis',
      description: 'We analyze business processes, user roles, and CRM objectives.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      features: ['Business Process Mapping', 'User Role Definition', 'Goal Setting']
    },
    {
      id: 2,
      icon: <Palette className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'CRM Architecture & UI Design',
      description: 'We design intuitive interfaces and scalable system architecture.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      features: ['UI/UX Design', 'System Architecture', 'Wireframing']
    },
    {
      id: 3,
      icon: <Code className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'CRM Development & Customization',
      description: 'Our developers build secure and high-performance CRM modules.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      features: ['Custom Development', 'API Integration', 'Module Building']
    },
    {
      id: 4,
      icon: <TestTube className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Testing & Quality Assurance',
      description: 'We test for functionality, security, performance, and usability.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      features: ['Security Testing', 'Performance Testing', 'User Acceptance']
    },
    {
      id: 5,
      icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Deployment & Support',
      description: 'We deploy your CRM and provide training, documentation, and ongoing support.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      features: ['Cloud Deployment', 'Team Training', '24/7 Support']
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-orange-400/20 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.id * 0.2}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #f97316 1px, transparent 1px),
                           linear-gradient(to bottom, #f97316 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.1}px)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Animated Elements */}
        <div className="text-center mb-16 md:mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-white/80 backdrop-blur-md border-2 border-orange-500/30 rounded-full shadow-lg animate-bounce-subtle">
            <Sparkles className="w-4 h-4 text-orange-500 animate-spin-slow" />
            <span className="text-orange-600 font-bold text-xs sm:text-sm uppercase tracking-wider">
              Our Proven Process
            </span>
            <Sparkles className="w-4 h-4 text-orange-500 animate-spin-slow" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span className="inline-block animate-text-shimmer bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 bg-[length:200%_auto] bg-clip-text text-transparent">
              CRM Software Development
            </span>
            <span className="block mt-3 relative">
              <span className="relative z-10 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-pulse-glow">
                Process
              </span>
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-orange-600/30 via-orange-500/30 to-orange-600/30 animate-pulse-glow" />
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            We follow a structured and transparent approach to deliver 
            <span className="inline-flex items-center gap-1 mx-2 px-3 py-1 bg-orange-500/10 rounded-full text-orange-700 font-semibold">
              <Zap className="w-4 h-4" />
              high-quality
            </span>
            CRM systems
          </p>

          {/* Stats Counter Animation */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-10 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            {[
              { value: '500+', label: 'Projects Delivered', icon: <TrendingUp className="w-5 h-5" /> },
              { value: '98%', label: 'Client Satisfaction', icon: <Sparkles className="w-5 h-5" /> },
              { value: '50+', label: 'Expert Developers', icon: <Zap className="w-5 h-5" /> }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-orange-500 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps with Advanced Animations */}
        <div className="relative">
          {/* Animated Connection Path - Desktop Only */}
          {!isMobile && (
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              <svg className="w-full h-full opacity-30">
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.2">
                      <animate attributeName="stop-opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#f97316" stopOpacity="0.8">
                      <animate attributeName="stop-opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.2">
                      <animate attributeName="stop-opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                </defs>
                <path
                  d="M 16% 25%, L 50% 25%, L 84% 25%, L 84% 75%, L 50% 75%"
                  stroke="url(#pathGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="10,5"
                  className="animate-dash"
                />
              </svg>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 xl:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${0.8 + index * 0.15}s` }}
                onMouseEnter={() => {
                  setActiveStep(step.id);
                  setHoveredCard(step.id);
                }}
                onMouseLeave={() => {
                  setActiveStep(null);
                  setHoveredCard(null);
                }}
                onTouchStart={() => {
                  setActiveStep(step.id);
                  setHoveredCard(step.id);
                }}
              >
                {/* Floating Effect Container */}
                <div className={`
                  relative h-full transition-all duration-700 ease-out
                  ${activeStep === step.id ? 'scale-105 -translate-y-4' : 'hover:-translate-y-2'}
                `}>
                  {/* Card Background with Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className={`
                    relative h-full p-8 lg:p-10 rounded-3xl border-2
                    bg-white/90 backdrop-blur-xl shadow-xl
                    transition-all duration-500 ease-out cursor-pointer
                    ${activeStep === step.id 
                      ? 'border-orange-400 shadow-2xl shadow-orange-200/50' 
                      : 'border-gray-200 hover:border-orange-300 hover:shadow-2xl'
                    }
                  `}>
                    {/* Animated Corner Accents */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Shimmer Effect */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
                      transition-opacity duration-500 rounded-3xl
                      ${activeStep === step.id ? 'animate-shimmer opacity-100' : 'opacity-0'}
                    `} />

                    {/* Step Number Badge with Pulse */}
                    <div className={`
                      absolute -top-5 -left-5 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl
                      bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 
                      flex items-center justify-center shadow-2xl
                      transition-all duration-500 z-20
                      ${activeStep === step.id ? 'scale-125 rotate-12 animate-bounce-subtle' : 'group-hover:scale-110 group-hover:rotate-6'}
                    `}>
                      <span className="text-white font-black text-xl sm:text-2xl drop-shadow-lg">{step.id}</span>
                      {activeStep === step.id && (
                        <span className="absolute inset-0 rounded-2xl bg-orange-500 animate-ping opacity-75" />
                      )}
                    </div>

                    {/* Icon Container with Rotation Animation */}
                    <div className="relative">
                      <div
                        className={`
                          w-20 h-20 sm:w-24 sm:h-24 rounded-2xl ${step.bgColor} 
                          flex items-center justify-center mb-6 sm:mb-8 relative
                          transition-all duration-700 
                          ${activeStep === step.id 
                            ? 'scale-110 rotate-12 shadow-2xl' 
                            : 'group-hover:scale-105 group-hover:rotate-6'
                          }
                          ${step.color}
                        `}
                      >
                        <div className="relative z-10 animate-float-icon">
                          {step.icon}
                        </div>
                        {activeStep === step.id && (
                          <>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent animate-pulse" />
                            <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-orange-500 animate-spin-slow" />
                          </>
                        )}
                      </div>
                    </div>

                    {/* Content with Stagger Animation */}
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-4 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Feature Tags with Hover Animation */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {step.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-gray-100 to-orange-50 rounded-full text-xs font-semibold text-gray-700 border border-gray-200 group-hover:border-orange-300 group-hover:shadow-md transition-all duration-300 hover:scale-105"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Progress Indicator with Animation */}
                      <div className="pt-6 border-t-2 border-gray-100 group-hover:border-orange-100 transition-colors duration-300">
                        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3">
                          <span className="font-bold flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            Step {step.id} of {steps.length}
                          </span>
                          <span className="text-orange-600 font-black text-base sm:text-lg">
                            {Math.round((step.id / steps.length) * 100)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5 sm:h-3 overflow-hidden shadow-inner">
                          <div 
                            className={`
                              h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 rounded-full
                              transition-all duration-1000 relative overflow-hidden
                              ${activeStep === step.id ? 'animate-progress-pulse' : ''}
                            `}
                            style={{ 
                              width: activeStep === step.id ? '100%' : `${(step.id / steps.length) * 100}%`,
                              transition: 'width 1s ease-out'
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-fast" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Glow Line */}
                    <div
                      className={`
                        absolute bottom-0 left-0 h-2 bg-gradient-to-r 
                        from-orange-500 via-orange-400 to-orange-600
                        transition-all duration-700 rounded-b-3xl shadow-lg shadow-orange-500/50
                        ${activeStep === step.id ? 'w-full' : 'w-0'}
                      `}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 md:mt-32 text-center animate-fade-in-up" style={{animationDelay: '2s'}}>
          <div className="relative inline-block group">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse-glow" />
            
            {/* Button Container */}
            <div className="relative">
              <div className="p-1.5 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 rounded-full shadow-2xl animate-gradient-x">
                <div className="flex items-center gap-4 px-10 py-5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer group/btn">
                  <Sparkles className="w-6 h-6 text-orange-400 animate-spin-slow" />
                  <span className="text-lg sm:text-xl font-black">Ready to get started?</span>
                  <span className="text-2xl sm:text-3xl transition-transform duration-300 group-hover/btn:translate-x-3 group-hover/btn:scale-125">→</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-base sm:text-lg text-gray-700 font-medium">
            Let&apos;s build your perfect 
            <span className="inline-flex items-center gap-1.5 mx-2 px-4 py-1.5 bg-orange-500/20 rounded-full text-orange-700 font-bold border-2 border-orange-500/30">
              <Zap className="w-4 h-4 animate-pulse" />
              CRM solution
            </span>
            together
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-100px);
          }
        }

        @keyframes float-icon {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes shimmer-fast {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes text-shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: scale(1.25) rotate(12deg);
          }
          50% {
            transform: scale(1.3) rotate(12deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes progress-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(249, 115, 22, 0.8);
          }
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -30;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out backwards;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-icon {
          animation: float-icon 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-shimmer-fast {
          animation: shimmer-fast 1s infinite;
        }

        .animate-text-shimmer {
          animation: text-shimmer 3s linear infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-progress-pulse {
          animation: progress-pulse 2s ease-in-out infinite;
        }

        .animate-dash {
          animation: dash 20s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}