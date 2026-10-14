import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionDecorativeBackground from '../../../components/common/SectionDecorativeBackground';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';

/* =========================================================================
   CUSTOM VECTOR SVG: IOT GATEWAY & EDGE TELEMETRY ARCHITECTURE
   ========================================================================= */
function IotEdgeTelemetrySVG() {
  return (
    <svg
      viewBox="0 0 600 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[560px] select-none drop-shadow-sm"
    >
      <defs>
        <linearGradient id="iotEdgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0FA4AF" />
          <stop offset="50%" stopColor="#024950" />
          <stop offset="100%" stopColor="#003135" />
        </linearGradient>
      </defs>



      {/* Edge-to-Cloud Connection Bus Tracks */}
      <path d="M 120 120 L 260 120" stroke="#0FA4AF" strokeWidth="2.5" strokeDasharray="5 4" />
      <path d="M 340 120 L 480 120" stroke="#0FA4AF" strokeWidth="2.5" strokeDasharray="5 4" />

      {/* Stage 1: Smart Sensors & Edge Telemetry (Left) */}
      <g transform="translate(50, 70)">
        <rect width="90" height="100" rx="12" fill="#F0F9FA" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="45" cy="38" r="18" fill="#FFFFFF" stroke="#0FA4AF" strokeWidth="1.5" />
        {/* Sensor Signal Waves */}
        <path d="M 40 38 A 5 5 0 0 1 50 38" stroke="#0FA4AF" strokeWidth="1.5" fill="none" />
        <path d="M 36 34 A 10 10 0 0 1 54 34" stroke="#0FA4AF" strokeWidth="1.5" fill="none" opacity="0.6" />
        <text x="45" y="74" textAnchor="middle" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Connected IoT</text>
        <text x="45" y="86" textAnchor="middle" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">Sensors</text>
      </g>

      {/* Stage 2: Central Edge AI Gateway Hub (Center) */}
      <g transform="translate(250, 60)">
        <rect width="100" height="120" rx="14" fill="url(#iotEdgeGrad)" stroke="#FFFFFF" strokeWidth="2" />
        {/* Microprocessor Core Chip */}
        <rect x="25" y="24" width="50" height="50" rx="8" fill="#003135" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="50" cy="49" r="8" fill="#0FA4AF" />
        {/* Chip Pins */}
        <line x1="32" y1="18" x2="32" y2="24" stroke="#AFDDE5" strokeWidth="2" />
        <line x1="42" y1="18" x2="42" y2="24" stroke="#AFDDE5" strokeWidth="2" />
        <line x1="52" y1="18" x2="52" y2="24" stroke="#AFDDE5" strokeWidth="2" />
        <line x1="62" y1="18" x2="62" y2="24" stroke="#AFDDE5" strokeWidth="2" />
        <line x1="32" y1="74" x2="32" y2="80" stroke="#AFDDE5" strokeWidth="2" />
        <line x1="42" y1="74" x2="42" y2="80" stroke="#AFDDE5" strokeWidth="2" />
        <line x1="52" y1="74" x2="52" y2="80" stroke="#AFDDE5" strokeWidth="2" />
        <line x1="62" y1="74" x2="62" y2="80" stroke="#AFDDE5" strokeWidth="2" />
        <text x="50" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800" fontFamily="system-ui">Edge AI Core</text>
      </g>
      <text x="300" y="200" textAnchor="middle" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">&lt; 5ms Telemetry Processing &gt;</text>

      {/* Stage 3: Low-Latency Cloud Pipelines (Right) */}
      <g transform="translate(460, 70)">
        <rect width="90" height="100" rx="12" fill="#F0F9FA" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="45" cy="38" r="18" fill="#FFFFFF" stroke="#0FA4AF" strokeWidth="1.5" />
        {/* Cloud / Sync Icon */}
        <path d="M 36 43 A 5 5 0 0 1 40 36 A 6 6 0 0 1 50 38 A 4 4 0 0 1 52 43 Z" fill="#E6F7F9" stroke="#0FA4AF" strokeWidth="1.2" />
        <text x="45" y="74" textAnchor="middle" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Cloud Telemetry</text>
        <text x="45" y="86" textAnchor="middle" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">Data Pipeline</text>
      </g>

      {/* Secure OTA Firmware Update Badge */}
      <rect x="250" y="22" width="100" height="18" rx="9" fill="#E6F7F9" stroke="#0FA4AF" strokeWidth="1" />
      <text x="300" y="34" textAnchor="middle" fill="#0FA4AF" fontSize="8" fontWeight="bold" fontFamily="system-ui">SECURE OTA UPDATES</text>
    </svg>
  );
}

export default function IotSmartEdgeSystemsSection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#iot-smart-edge-systems';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  return (
    <section
      id="iot-smart-edge-systems"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#EBF5F7] via-[#E4F3F5] to-[#DCEEF2] border-b border-[#D4AF37]/20 overflow-hidden relative"
    >
      {/* Interactive Decorative Background Theme */}
      <SectionDecorativeBackground variant="iot" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-14">


          <AnimatedSectionHeading
            text="IoT, Smart Systems & Edge Computing"
            className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-[#081E52] mb-5 text-center"
          />

          <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#081E52]/85 font-medium text-center max-w-3xl">
            <p>
              Engineering intelligent edge computing platforms and connected IoT software products for real-time device telemetry and automated control.
            </p>
            <p>
              Our smart systems integrate edge AI analytics, secure firmware updates, and low-latency data pipelines to power next-generation industrial and commercial IoT applications.
            </p>
          </div>
        </div>

        {/* Center SVG IoT Edge Telemetry Architecture (Transparent & Live in Synchronized Motion) */}
        <div className="w-full max-w-4xl mx-auto mb-10 flex items-center justify-center animate-float-slow">
          <IotEdgeTelemetrySVG />
        </div>


        {/* Centered CTA */}
        <div className="w-full flex justify-center">
          <button
            type="button"
            onClick={handleCtaClick}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0FA4AF] to-[#024950] text-white font-extrabold text-sm sm:text-base shadow-md shadow-[#0FA4AF]/25 hover:shadow-lg hover:from-[#0d8e98] hover:to-[#01353a] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Explore Smart Systems &amp; Edge Solutions</span>
            <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
