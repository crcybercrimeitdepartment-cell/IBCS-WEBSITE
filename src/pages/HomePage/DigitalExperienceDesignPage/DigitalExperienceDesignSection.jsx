import React from 'react';
import { ArrowRight, Palette, LayoutTemplate, Smartphone, Layers, Eye } from 'lucide-react';
import SectionDecorativeBackground from '../../../components/common/SectionDecorativeBackground';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';

/* =========================================================================
   CUSTOM VECTOR SVG: MULTI-DEVICE UI/UX CANVAS & DESIGN SYSTEM
   ========================================================================= */
function DigitalExperienceCanvasSVG() {
  return (
    <svg
      viewBox="0 0 520 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[480px] select-none drop-shadow-md"
    >
      <defs>
        <linearGradient id="uxAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0FA4AF" />
          <stop offset="100%" stopColor="#024950" />
        </linearGradient>
      </defs>

      {/* Desktop Browser Viewport Mockup (Center/Left) */}
      <g transform="translate(45, 50)">
        <rect width="320" height="210" rx="12" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        {/* Browser Top Bar */}
        <rect width="320" height="24" rx="12" fill="#F0F8FA" />
        <rect y="16" width="320" height="8" fill="#F0F8FA" />
        <circle cx="16" cy="12" r="3.5" fill="#EF4444" />
        <circle cx="28" cy="12" r="3.5" fill="#F59E0B" />
        <circle cx="40" cy="12" r="3.5" fill="#10B981" />
        <rect x="60" y="6" width="160" height="12" rx="6" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="0.8" />

        {/* Browser Content Wireframe */}
        {/* Hero Card */}
        <rect x="16" y="38" width="180" height="60" rx="8" fill="url(#uxAccentGrad)" />
        <rect x="28" y="52" width="90" height="8" rx="4" fill="#FFFFFF" />
        <rect x="28" y="66" width="120" height="5" rx="2.5" fill="#AFDDE5" />
        <rect x="28" y="76" width="40" height="12" rx="6" fill="#FFFFFF" />

        {/* Side Component Metric */}
        <rect x="208" y="38" width="96" height="60" rx="8" fill="#F0F8FA" stroke="#AFDDE5" strokeWidth="1" />
        <circle cx="256" cy="62" r="14" fill="#0FA4AF" opacity="0.2" />
        <path d="M 248 65 L 254 57 L 264 62" stroke="#0FA4AF" strokeWidth="2" strokeLinecap="round" />
        <rect x="220" y="84" width="72" height="6" rx="3" fill="#003135" opacity="0.4" />

        {/* 3 Grid Cards */}
        <rect x="16" y="112" width="88" height="80" rx="6" fill="#F8FAFC" stroke="#AFDDE5" strokeWidth="1" />
        <rect x="24" y="122" width="24" height="24" rx="4" fill="#E6F7F9" />
        <rect x="24" y="154" width="56" height="6" rx="3" fill="#003135" opacity="0.7" />
        <rect x="24" y="166" width="40" height="5" rx="2.5" fill="#0FA4AF" opacity="0.5" />

        <rect x="116" y="112" width="88" height="80" rx="6" fill="#F8FAFC" stroke="#AFDDE5" strokeWidth="1" />
        <rect x="124" y="122" width="24" height="24" rx="4" fill="#E6F7F9" />
        <rect x="124" y="154" width="56" height="6" rx="3" fill="#003135" opacity="0.7" />
        <rect x="124" y="166" width="40" height="5" rx="2.5" fill="#0FA4AF" opacity="0.5" />

        <rect x="216" y="112" width="88" height="80" rx="6" fill="#F8FAFC" stroke="#AFDDE5" strokeWidth="1" />
        <rect x="224" y="122" width="24" height="24" rx="4" fill="#E6F7F9" />
        <rect x="224" y="154" width="56" height="6" rx="3" fill="#003135" opacity="0.7" />
        <rect x="224" y="166" width="40" height="5" rx="2.5" fill="#0FA4AF" opacity="0.5" />
      </g>

      {/* Mobile Device Mockup (Overlapping Right) */}
      <g transform="translate(350, 95)">
        <rect width="115" height="210" rx="18" fill="#FFFFFF" stroke="#003135" strokeWidth="2.5" />
        {/* Dynamic Island / Notch */}
        <rect x="42" y="8" width="32" height="6" rx="3" fill="#003135" />
        {/* Mobile Header Banner */}
        <rect x="10" y="22" width="95" height="40" rx="8" fill="#0FA4AF" />
        <circle cx="28" cy="42" r="10" fill="#FFFFFF" opacity="0.3" />
        <rect x="44" y="38" width="50" height="6" rx="3" fill="#FFFFFF" />
        {/* Mobile Feed Cards */}
        <rect x="10" y="70" width="95" height="34" rx="6" fill="#F0F8FA" stroke="#AFDDE5" strokeWidth="1" />
        <circle cx="24" cy="87" r="7" fill="#024950" />
        <rect x="36" y="84" width="60" height="5" rx="2.5" fill="#003135" opacity="0.6" />
        {/* Mobile Feed Card 2 */}
        <rect x="10" y="112" width="95" height="34" rx="6" fill="#F0F8FA" stroke="#AFDDE5" strokeWidth="1" />
        <circle cx="24" cy="129" r="7" fill="#0FA4AF" />
        <rect x="36" y="126" width="60" height="5" rx="2.5" fill="#003135" opacity="0.6" />
        {/* Bottom Nav Bar */}
        <rect x="10" y="155" width="95" height="40" rx="6" fill="#E6F7F9" />
        <circle cx="28" cy="175" r="5" fill="#0FA4AF" />
        <circle cx="58" cy="175" r="5" fill="#003135" opacity="0.4" />
        <circle cx="86" cy="175" r="5" fill="#003135" opacity="0.4" />
      </g>

      {/* Floating Design Palette Badges (Bottom-Left) */}
      <g transform="translate(45, 275)">
        <circle cx="16" cy="16" r="10" fill="#0FA4AF" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="36" cy="16" r="10" fill="#024950" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="56" cy="16" r="10" fill="#AFDDE5" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="76" cy="16" r="10" fill="#003135" stroke="#FFFFFF" strokeWidth="1.5" />
        <text x="100" y="20" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Design Tokens</text>
      </g>
    </svg>
  );
}

export default function DigitalExperienceDesignSection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#digital-experience-design-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  return (
    <section
      id="digital-experience-design"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F2F8FA] via-[#E8F4F7] to-[#DFEFF2] border-b border-[#D4AF37]/20 overflow-hidden relative"
    >
      {/* Interactive Decorative Background Theme */}
      <SectionDecorativeBackground variant="design" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Descriptions & Actions */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">


            <AnimatedSectionHeading
              text="Digital Experience & UI/UX Design"
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-[#081E52] mb-5 text-center lg:text-left"
            />

            <div className="space-y-3.5 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#081E52]/85 font-medium mb-6 text-center lg:text-left">
              <p>
                <strong className="font-bold text-[#081E52]">IB Cyber Security Private Limited</strong> designs digital experiences that make complex software products intuitive, accessible, engaging, and efficient to use. Our UI/UX approach combines user research, information architecture, interaction design, visual design, prototyping, usability, accessibility, and product engineering to create meaningful digital experiences.
              </p>
              <p>
                We design interfaces for software products, government platforms, enterprise applications, cybersecurity systems, SaaS products, and mobile experiences.
              </p>
              <p>
                By connecting user needs with product objectives and technology capabilities, IBCS creates consistent, responsive, and scalable experiences that improve usability, strengthen user engagement, and support the effective adoption of digital products across diverse users and operational environments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <LayoutTemplate className="w-4 h-4 text-[#0FA4AF] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Design Systems &amp; Wireframes</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <Smartphone className="w-4 h-4 text-[#0FA4AF] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Responsive Web &amp; Mobile</span>
              </div>
            </div>

            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0FA4AF] to-[#024950] text-white font-extrabold text-sm sm:text-base shadow-md shadow-[#0FA4AF]/25 hover:shadow-lg hover:from-[#0d8e98] hover:to-[#01353a] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Experience Design</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Custom Multi-Device UI/UX SVG Canvas (Transparent & Live in Motion) */}
          <div className="lg:col-span-6 flex items-center justify-center animate-float-slow">
            <DigitalExperienceCanvasSVG />
          </div>

        </div>
      </div>
    </section>
  );
}
