import React from 'react';
import { ArrowRight, Cloud, ShieldCheck, Code, Cpu, Settings, BarChart3, Database } from 'lucide-react';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';

// 7 Orbiting Colorful Circle Badges with staggered floating bounce animations
const techBadges = [
  { id: 1, icon: Cloud, pos: "top-[0%] left-[45%] -translate-x-1/2", bg: "bg-gradient-to-tr from-[#009BB0] to-[#29CBD9]", delay: "0s", duration: "3.6s", label: "Cloud" },
  { id: 2, icon: ShieldCheck, pos: "top-[18%] left-[8%]", bg: "bg-gradient-to-tr from-[#008996] to-[#00C4D6]", delay: "0.6s", duration: "4.2s", label: "Cybersecurity" },
  { id: 3, icon: Code, pos: "top-[48%] left-[2%]", bg: "bg-gradient-to-tr from-[#5B4FE1] to-[#8C82FF]", delay: "1.2s", duration: "3.8s", label: "Development" },
  { id: 4, icon: Cpu, pos: "bottom-[8%] left-[16%]", bg: "bg-gradient-to-tr from-[#00A8B5] to-[#40E0ED]", delay: "0.4s", duration: "4.5s", label: "AI & Intelligence" },
  { id: 5, icon: Database, pos: "top-[18%] right-[8%]", bg: "bg-gradient-to-tr from-[#007BB0] to-[#2BB8FF]", delay: "0.9s", duration: "3.9s", label: "Data Systems" },
  { id: 6, icon: BarChart3, pos: "top-[48%] right-[2%]", bg: "bg-gradient-to-tr from-[#00A896] to-[#02E2BA]", delay: "0.3s", duration: "4.1s", label: "Analytics" },
  { id: 7, icon: Settings, pos: "bottom-[8%] right-[16%]", bg: "bg-gradient-to-tr from-[#6C42E8] to-[#9C7DFF]", delay: "1.0s", duration: "3.7s", label: "Automation" },
];

export default function OurTechnologySection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#our-technology-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  return (
    <section id="our-technology" className="relative scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#F0F9FA] via-[#E4F4F7] to-[#D5EEF2] border-b border-[#D4AF37]/20 overflow-hidden">

      {/* Background Decorative Wave SVGs & Dot Matrices */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Background Radial Glows */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#081E52]/10 rounded-full blur-3xl"></div>

        {/* Top-Right Decorative Dots */}
        <div className="absolute top-8 right-12 grid grid-cols-6 gap-2 opacity-25">
          {[...Array(24)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0FA4AF]"></span>
          ))}
        </div>

        {/* Bottom-Left Decorative Dots */}
        <div className="absolute bottom-8 left-12 grid grid-cols-6 gap-2 opacity-25">
          {[...Array(24)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0FA4AF]"></span>
          ))}
        </div>

        {/* Background Decorative Wave Curves */}
        <svg className="absolute -bottom-20 -right-20 w-[600px] h-[600px] opacity-25 text-[#D4AF37]/20" viewBox="0 0 500 500" fill="currentColor">
          <path d="M0,250 C150,180 350,320 500,250 L500,500 L0,500 Z" />
        </svg>
      </div>

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Section Centered Title */}
        <div className="text-center mb-10 sm:mb-14">
          <AnimatedSectionHeading
            text="Our Technology"
            className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-[#081E52]"
          />
        </div>

        {/* 2-Column Grid Below Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Category Tag, Description Paragraphs & Button */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">


            {/* Description Paragraphs (100% Intact Text) */}
            <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#081E52]/85 font-medium mb-8 text-center lg:text-left">
              <p>
                At IB Cyber Security Private Limited, technology is at the core of every software product we design, engineer and commercialise. We combine modern software engineering with Artificial Intelligence, cybersecurity, cloud computing, data technologies, automation and other emerging technologies to build secure, scalable and intelligent digital products.
              </p>
              <p>
                Our technology capabilities support the complete product development lifecycle, from research and architecture to engineering, deployment and continuous improvement. By combining multiple technology disciplines, we create software products and digital platforms designed for diverse industries, organisations and technology environments.
              </p>
            </div>

            {/* Explore More Button */}
            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#081E52] to-[#0c2b7a] hover:from-[#0c2b7a] hover:to-[#081E52] border border-[#D4AF37]/40 text-white text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#081E52]/20 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: 3D Network Globe Ecosystem with Floating Icons */}
          <div className="lg:col-span-7 w-full flex justify-center items-center">

            {/* Globe Ecosystem Container */}
            <div className="relative w-full max-w-lg aspect-[1.15/1] flex items-center justify-center p-4">

              {/* Background Orbital Rings & Node Network SVG */}
              <svg className="absolute inset-0 w-full h-full z-0 overflow-visible" viewBox="0 0 500 500" fill="none">
                {/* Orbit Ellipses */}
                <ellipse cx="250" cy="250" rx="200" ry="110" fill="none" stroke="#00A4B4" strokeWidth="1.5" opacity="0.35" transform="rotate(-15 250 250)" />
                <ellipse cx="250" cy="250" rx="190" ry="130" fill="none" stroke="#00A4B4" strokeWidth="1.5" opacity="0.3" transform="rotate(25 250 250)" />

                {/* Network Constellation Lines & Dots */}
                <path d="M 250 110 L 150 160 M 250 110 L 350 160 M 150 160 L 120 250 M 350 160 L 380 250 M 120 250 L 170 340 M 380 250 L 330 340 M 170 340 L 250 390 M 330 340 L 250 390" stroke="#71ECF7" strokeWidth="1.5" opacity="0.6" />

                {/* Node Points on Orbit Lines */}
                <circle cx="150" cy="160" r="3.5" fill="#00A4B4" />
                <circle cx="350" cy="160" r="3.5" fill="#00A4B4" />
                <circle cx="120" cy="250" r="4" fill="#71ECF7" />
                <circle cx="380" cy="250" r="4" fill="#71ECF7" />
                <circle cx="170" cy="340" r="3.5" fill="#00A4B4" />
                <circle cx="330" cy="340" r="3.5" fill="#00A4B4" />
                <circle cx="250" cy="110" r="4" fill="#71ECF7" />
                <circle cx="250" cy="390" r="4" fill="#71ECF7" />
              </svg>

              {/* Central 3D Glowing Blue Globe */}
              <div className="relative z-10 w-52 h-52 sm:w-64 sm:h-64">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                  <defs>
                    <radialGradient id="techGlobeGrad" cx="35%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#3CDCEB" />
                      <stop offset="50%" stopColor="#008999" />
                      <stop offset="85%" stopColor="#004A52" />
                      <stop offset="100%" stopColor="#002428" />
                    </radialGradient>
                    <filter id="globeGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Outer Atmosphere Soft Glow Ring */}
                  <circle cx="100" cy="100" r="92" fill="none" stroke="#71ECF7" strokeWidth="2" opacity="0.5" filter="url(#globeGlow)" />

                  {/* Sphere Body */}
                  <circle cx="100" cy="100" r="88" fill="url(#techGlobeGrad)" />

                  {/* Lat/Long Grid Curves */}
                  <ellipse cx="100" cy="100" rx="88" ry="32" fill="none" stroke="#87F0F9" strokeWidth="1.2" opacity="0.6" />
                  <ellipse cx="100" cy="100" rx="88" ry="65" fill="none" stroke="#87F0F9" strokeWidth="1.2" opacity="0.5" />
                  <ellipse cx="100" cy="100" rx="32" ry="88" fill="none" stroke="#87F0F9" strokeWidth="1.2" opacity="0.6" />
                  <ellipse cx="100" cy="100" rx="65" ry="88" fill="none" stroke="#87F0F9" strokeWidth="1.2" opacity="0.5" />
                  <line x1="12" y1="100" x2="188" y2="100" stroke="#87F0F9" strokeWidth="1.5" opacity="0.7" />
                  <line x1="100" y1="12" x2="100" y2="188" stroke="#87F0F9" strokeWidth="1.5" opacity="0.7" />
                </svg>
              </div>

              {/* 7 Floating Orbiting Colorful Circle Badges */}
              {techBadges.map(({ id, icon: Icon, pos, bg, delay, duration, label }) => (
                <div
                  key={id}
                  className={`absolute ${pos} z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full ${bg} text-white flex items-center justify-center shadow-lg hover:scale-125 transition-all duration-300 animate-bounce cursor-pointer`}
                  style={{
                    animationDelay: delay,
                    animationDuration: duration
                  }}
                  title={label}
                  onClick={handleCtaClick}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
