import React from 'react';
import { ArrowRight, ShieldCheck, FileSpreadsheet, CheckCheck, AlertCircle } from 'lucide-react';
import SectionDecorativeBackground from '../../../components/common/SectionDecorativeBackground';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';

/* =========================================================================
   CUSTOM VECTOR SVG: ENTERPRISE GRC RADAR & AUDIT SHIELD
   ========================================================================= */
function GovernanceRadarSVG() {
  return (
    <svg
      viewBox="0 0 520 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[480px] select-none drop-shadow-md"
    >
      <defs>
        <linearGradient id="grcPlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EBF6F8" />
        </linearGradient>
        <linearGradient id="grcShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0FA4AF" />
          <stop offset="50%" stopColor="#024950" />
          <stop offset="100%" stopColor="#003135" />
        </linearGradient>
      </defs>



      {/* Concentric Regulatory Radar Circles */}
      <circle cx="260" cy="180" r="130" stroke="#AFDDE5" strokeWidth="1.2" strokeDasharray="5 5" />
      <circle cx="260" cy="180" r="90" stroke="#0FA4AF" strokeWidth="1.2" opacity="0.6" />

      {/* Crosshairs */}
      <line x1="260" y1="50" x2="260" y2="310" stroke="#AFDDE5" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="130" y1="180" x2="390" y2="180" stroke="#AFDDE5" strokeWidth="1" strokeDasharray="4 4" />

      {/* Central Audit Shield Core */}
      <g transform="translate(260, 180)">
        <path d="M 0 -45 L 35 -24 V 14 C 35 38 0 52 0 52 C 0 52 -35 38 -35 14 V -24 Z" fill="url(#grcShieldGrad)" stroke="#FFFFFF" strokeWidth="2.5" />
        <path d="M -12 2 L -3 11 L 14 -7" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="0" cy="0" r="48" stroke="#0FA4AF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.7" />
      </g>
      <text x="260" y="250" textAnchor="middle" fill="#003135" fontSize="11" fontWeight="800" fontFamily="system-ui">GRC Core</text>

      {/* Quadrant 1: Statutory Standards (Top-Left) */}
      <g transform="translate(60, 55)">
        <rect width="115" height="55" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="25" cy="27" r="12" fill="#E6F7F9" />
        <path d="M 21 27 L 24 30 L 30 23" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="44" y="24" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Statutory</text>
        <text x="44" y="38" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">Standards</text>
      </g>

      {/* Quadrant 2: Audit Tracking (Top-Right) */}
      <g transform="translate(345, 55)">
        <rect width="115" height="55" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="25" cy="27" r="12" fill="#E6F7F9" />
        <rect x="20" y="21" width="10" height="12" rx="2" fill="none" stroke="#0FA4AF" strokeWidth="1.5" />
        <line x1="23" y1="25" x2="27" y2="25" stroke="#0FA4AF" strokeWidth="1.2" />
        <line x1="23" y1="28" x2="27" y2="28" stroke="#0FA4AF" strokeWidth="1.2" />
        <text x="44" y="24" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Continuous</text>
        <text x="44" y="38" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">Audit Trail</text>
      </g>

      {/* Quadrant 3: Policy Enforcement (Bottom-Left) */}
      <g transform="translate(60, 245)">
        <rect width="115" height="55" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="25" cy="27" r="12" fill="#E6F7F9" />
        <path d="M 25 19 L 29 23 L 25 27 M 21 27 L 25 23 L 21 19" stroke="#0FA4AF" strokeWidth="1.5" strokeLinecap="round" />
        <text x="44" y="24" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Policy</text>
        <text x="44" y="38" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">Enforcement</text>
      </g>

      {/* Quadrant 4: Executive Reporting (Bottom-Right) */}
      <g transform="translate(345, 245)">
        <rect width="115" height="55" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="25" cy="27" r="12" fill="#E6F7F9" />
        <path d="M 19 32 L 23 26 L 27 29 L 31 22" stroke="#0FA4AF" strokeWidth="1.8" strokeLinecap="round" />
        <text x="44" y="24" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Executive</text>
        <text x="44" y="38" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">Governance</text>
      </g>
    </svg>
  );
}

export default function RegulatoryComplianceGovernanceSection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#regulatory-compliance-governance-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  return (
    <section
      id="regulatory-compliance-governance"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F2F8FA] via-[#E8F4F7] to-[#DFEFF2] border-b border-[#D4AF37]/20 overflow-hidden relative"
    >
      {/* Interactive Decorative Background Theme */}
      <SectionDecorativeBackground variant="governance" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Custom SVG Graphic (Transparent & Live in Synchronized Motion) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex items-center justify-center animate-float-slow">
            <GovernanceRadarSVG />
          </div>

          {/* Right Column: Heading, Descriptions & Actions */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">


            <AnimatedSectionHeading
              text="Regulatory Compliance & Risk Governance"
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-[#081E52] mb-5 text-center lg:text-left"
            />

            <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#081E52]/85 font-medium mb-6 text-center lg:text-left">
              <p>
                Specialized GRC software products designed to help organizations fulfill statutory standards and mitigate operational risks effectively.
              </p>
              <p>
                Our governance platforms automate compliance monitoring, audit tracking, policy enforcement, and executive reporting to protect your enterprise against regulatory risks.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <CheckCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Audit Tracking &amp; Policies</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <FileSpreadsheet className="w-4 h-4 text-[#0FA4AF] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Executive Reporting</span>
              </div>
            </div>

            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0FA4AF] to-[#024950] text-white font-extrabold text-sm sm:text-base shadow-md shadow-[#0FA4AF]/25 hover:shadow-lg hover:from-[#0d8e98] hover:to-[#01353a] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Compliance Governance</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
