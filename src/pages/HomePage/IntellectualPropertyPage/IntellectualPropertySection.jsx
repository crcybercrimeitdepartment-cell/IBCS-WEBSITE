import { ArrowRight, FileCode2, KeyRound } from 'lucide-react';
import SectionDecorativeBackground from '../../../components/common/SectionDecorativeBackground';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';

/* =========================================================================
   CUSTOM VECTOR SVG: IP ASSET FORTRESS & PATENT VAULT ILLUSTRATION
   ========================================================================= */
function IntellectualPropertyFortressSVG() {
  return (
    <svg
      viewBox="0 0 520 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[480px] select-none drop-shadow-md"
    >
      <defs>
        <linearGradient id="ipVaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E9F7F9" />
        </linearGradient>
        <linearGradient id="ipShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0FA4AF" />
          <stop offset="50%" stopColor="#024950" />
          <stop offset="100%" stopColor="#003135" />
        </linearGradient>
        <linearGradient id="ipGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>



      {/* Hexagonal Asset Ring */}
      <polygon points="260,65 375,130 375,260 260,325 145,260 145,130" stroke="#0FA4AF" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.5" />

      {/* Central IP Fortress Shield */}
      <g transform="translate(260, 195)">
        <path d="M 0 -85 L 65 -45 V 25 C 65 70 0 95 0 95 C 0 95 -65 70 -65 25 V -45 Z" fill="url(#ipShieldGrad)" stroke="#FFFFFF" strokeWidth="2.5" />
        <path d="M 0 -75 L 55 -40 V 22 C 55 60 0 82 0 82 C 0 82 -55 60 -55 22 V -40 Z" fill="none" stroke="#AFDDE5" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Algorithm Code Brackets inside Shield */}
        <text x="-24" y="-2" fill="#AFDDE5" fontSize="24" fontWeight="800" fontFamily="monospace">&lt;</text>
        <text x="12" y="-2" fill="#AFDDE5" fontSize="24" fontWeight="800" fontFamily="monospace">&gt;</text>
        {/* Proprietary Key Symbol in Shield Core */}
        <circle cx="0" cy="18" r="10" fill="url(#ipGoldGrad)" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="0" cy="18" r="4" fill="#003135" />
        <path d="M 0 28 V 46 M -4 38 H 4 M -4 44 H 2" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Satellite Asset Card 1: Proprietary Code (Top-Left) */}
      <g transform="translate(60, 55)">
        <rect width="115" height="55" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="25" cy="27" r="12" fill="#E6F7F9" />
        <path d="M 20 27 L 23 24 M 20 27 L 23 30 M 30 27 L 27 24 M 30 27 L 27 30" stroke="#0FA4AF" strokeWidth="1.5" strokeLinecap="round" />
        <text x="45" y="24" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Proprietary</text>
        <text x="45" y="38" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">Code &amp; Logic</text>
      </g>

      {/* Satellite Asset Card 2: Patents & Trademark (Top-Right) */}
      <g transform="translate(345, 55)">
        <rect width="115" height="55" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="25" cy="27" r="12" fill="#E6F7F9" />
        <circle cx="25" cy="27" r="7" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
        <text x="22" y="30" fill="#F59E0B" fontSize="9" fontWeight="bold" fontFamily="system-ui">©</text>
        <text x="45" y="24" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Patents &amp;</text>
        <text x="45" y="38" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">Trademarks</text>
      </g>

      {/* Satellite Asset Card 3: Architecture & Know-how (Bottom-Left) */}
      <g transform="translate(60, 245)">
        <rect width="115" height="55" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="25" cy="27" r="12" fill="#E6F7F9" />
        <rect x="20" y="22" width="10" height="10" rx="2" fill="none" stroke="#0FA4AF" strokeWidth="1.5" />
        <text x="45" y="24" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Architecture</text>
        <text x="45" y="38" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">&amp; Know-How</text>
      </g>

      {/* Satellite Asset Card 4: Commercial Licensing (Bottom-Right) */}
      <g transform="translate(345, 245)">
        <rect width="115" height="55" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="25" cy="27" r="12" fill="#E6F7F9" />
        <path d="M 20 27 L 23 30 L 30 22" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="45" y="24" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Commercial</text>
        <text x="45" y="38" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">Licensing</text>
      </g>
    </svg>
  );
}

export default function IntellectualPropertySection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#ip-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  return (
    <section
      id="intellectual-property"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F2F8FA] via-[#E8F4F7] to-[#DFEFF2] border-b border-[#D4AF37]/20 overflow-hidden relative"
    >
      {/* Interactive Decorative Background Theme */}
      <SectionDecorativeBackground variant="ip" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Descriptions & Asset Portfolio */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">


            <AnimatedSectionHeading
              text="Intellectual Property & Technology"
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-[#081E52] mb-5 text-center lg:text-left"
            />

            <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#081E52]/85 font-medium mb-6 text-center lg:text-left">
              <p>
                Our software products are supported by intellectual property, proprietary technology and technical assets developed through research and product engineering. We create, own, protect, manage, license and commercially exploit technology assets associated with our software products and digital platforms.
              </p>
              <p>
                Our intellectual property ecosystem may include software code, algorithms, databases, architecture, technical documentation, trademarks, copyrights, patents where applicable, trade secrets and know-how. We treat technology ownership and protection as an important part of long-term product value.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <FileCode2 className="w-4 h-4 text-[#0FA4AF] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Proprietary Code &amp; Algorithms</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <KeyRound className="w-4 h-4 text-[#0FA4AF] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Patents, Rights &amp; Licensing</span>
              </div>
            </div>

            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0FA4AF] to-[#024950] text-white font-extrabold text-sm sm:text-base shadow-md shadow-[#0FA4AF]/25 hover:shadow-lg hover:from-[#0d8e98] hover:to-[#01353a] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Intellectual Property</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Custom Fortress Vector (Transparent & Live in Synchronized Motion) */}
          <div className="lg:col-span-6 flex items-center justify-center animate-float-slow">
            <IntellectualPropertyFortressSVG />
          </div>

        </div>
      </div>
    </section>
  );
}
