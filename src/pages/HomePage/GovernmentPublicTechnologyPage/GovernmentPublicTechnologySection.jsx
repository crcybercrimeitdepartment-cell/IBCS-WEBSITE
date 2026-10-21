import { ArrowRight, ShieldCheck, Users } from 'lucide-react';
import SectionDecorativeBackground from '../../../components/common/SectionDecorativeBackground';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';

/* =========================================================================
   CUSTOM VECTOR SVG: SECURE GOVERNMENT INFRASTRUCTURE SCHEMATIC
   ========================================================================= */
function GovernmentInfrastructureSVG() {
  return (
    <svg
      viewBox="0 0 520 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[480px] select-none drop-shadow-md"
    >
      <defs>
        <linearGradient id="govHubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0FA4AF" />
          <stop offset="100%" stopColor="#003135" />
        </linearGradient>
        <linearGradient id="govLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0FA4AF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#AFDDE5" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      
      {/* Blueprint Grid Lines inside panel */}
      <g opacity="0.25" stroke="#0FA4AF" strokeWidth="0.8">
        <line x1="20" y1="90" x2="500" y2="90" />
        <line x1="20" y1="180" x2="500" y2="180" />
        <line x1="20" y1="270" x2="500" y2="270" />
        <line x1="140" y1="20" x2="140" y2="340" />
        <line x1="260" y1="20" x2="260" y2="340" />
        <line x1="380" y1="20" x2="380" y2="340" />
      </g>

      {/* Connection Bus Lines */}
      <path d="M 260 180 L 118 92" stroke="url(#govLineGrad)" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M 260 180 L 402 92" stroke="url(#govLineGrad)" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M 260 180 L 118 268" stroke="url(#govLineGrad)" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M 260 180 L 402 268" stroke="url(#govLineGrad)" strokeWidth="2" strokeDasharray="4 3" />

      {/* Node 1: Citizen Services (Top-Left) */}
      <g transform="translate(52, 56)">
        <rect width="132" height="72" rx="14" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="28" cy="26" r="13" fill="#E6F7F9" />
        <path d="M 24 26 A 4 4 0 0 1 32 26 Z" fill="#0FA4AF" />
        <circle cx="28" cy="20" r="3" fill="#0FA4AF" />
        <text x="66" y="54" textAnchor="middle" fill="#003135" fontSize="10.5" fontWeight="800" fontFamily="system-ui">Citizen Services</text>
        <circle cx="114" cy="20" r="3.5" fill="#10B981" />
      </g>

      {/* Node 2: Administrative Workflows (Top-Right) */}
      <g transform="translate(336, 56)">
        <rect width="132" height="72" rx="14" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="28" cy="26" r="13" fill="#E6F7F9" />
        <rect x="23" y="19" width="10" height="13" rx="2" fill="none" stroke="#0FA4AF" strokeWidth="1.5" />
        <line x1="26" y1="23" x2="30" y2="23" stroke="#0FA4AF" strokeWidth="1.5" />
        <line x1="26" y1="26" x2="30" y2="26" stroke="#0FA4AF" strokeWidth="1.5" />
        <text x="66" y="54" textAnchor="middle" fill="#003135" fontSize="10.5" fontWeight="800" fontFamily="system-ui">Admin Workflow</text>
        <circle cx="114" cy="20" r="3.5" fill="#0FA4AF" />
      </g>

      {/* Node 3: Reporting & Records (Bottom-Left) */}
      <g transform="translate(52, 232)">
        <rect width="132" height="72" rx="14" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="28" cy="26" r="13" fill="#E6F7F9" />
        <path d="M 22 27 L 26 21 L 30 24 L 34 18" stroke="#0FA4AF" strokeWidth="1.8" strokeLinecap="round" />
        <text x="66" y="54" textAnchor="middle" fill="#003135" fontSize="10.5" fontWeight="800" fontFamily="system-ui">Audit &amp; Reporting</text>
        <circle cx="114" cy="20" r="3.5" fill="#0FA4AF" />
      </g>

      {/* Node 4: Statutory Compliance & Legal Gate (Bottom-Right) */}
      <g transform="translate(336, 232)">
        <rect width="132" height="72" rx="14" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="28" cy="26" r="13" fill="#E6F7F9" />
        <path d="M 28 17 L 33 20 V 25 C 33 28 28 31 28 31 C 28 31 23 28 23 25 V 20 Z" fill="none" stroke="#0FA4AF" strokeWidth="1.5" />
        <text x="66" y="54" textAnchor="middle" fill="#003135" fontSize="10.5" fontWeight="800" fontFamily="system-ui">Compliance Gate</text>
        <circle cx="114" cy="20" r="3.5" fill="#10B981" />
      </g>

      {/* Center Central Hub: Government Digital Core */}
      <g transform="translate(260, 180)">
        <circle cx="0" cy="0" r="46" fill="url(#govHubGrad)" stroke="#FFFFFF" strokeWidth="3" />
        <circle cx="0" cy="0" r="38" fill="none" stroke="#AFDDE5" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Landmark / Pillar Icon */}
        <path d="M -16 -4 L 0 -16 L 16 -4 Z" fill="#FFFFFF" />
        <line x1="-14" y1="-4" x2="14" y2="-4" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="-10" y1="-2" x2="-10" y2="10" stroke="#FFFFFF" strokeWidth="2.5" />
        <line x1="-3" y1="-2" x2="-3" y2="10" stroke="#FFFFFF" strokeWidth="2.5" />
        <line x1="4" y1="-2" x2="4" y2="10" stroke="#FFFFFF" strokeWidth="2.5" />
        <line x1="11" y1="-2" x2="11" y2="10" stroke="#FFFFFF" strokeWidth="2.5" />
        <line x1="-16" y1="11" x2="16" y2="11" stroke="#FFFFFF" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="52" stroke="#0FA4AF" strokeWidth="1" strokeDasharray="6 4" opacity="0.6" />
      </g>
    </svg>
  );
}


export default function GovernmentPublicTechnologySection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#government-public-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  return (
    <section
      id="government-public-technology"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F2F9FA] via-[#EAF5F7] to-[#E3F2F5] border-b border-[#D4AF37]/20 overflow-hidden relative"
    >
      {/* Interactive Decorative Background Theme (Waves, Soft Glows, Floating 3D Orbs & Dot Matrices) */}
      <SectionDecorativeBackground variant="government" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Descriptions & Actions */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">


            {/* Main Heading */}
            <AnimatedSectionHeading
              text="Government & Public Technology"
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-[#081E52] mb-5 text-center lg:text-left"
            />

            {/* Descriptions from original text */}
            <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#081E52]/85 font-medium mb-6 text-center lg:text-left text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              <p>
                We develop software products and digital platforms designed to support government departments, public authorities and institutional users in their digital transformation initiatives. Our government technology products can address administration, information management, citizen services, workflow automation, reporting and institutional operations.
              </p>
              <p>
                Our approach focuses on building scalable and secure technology products that can be configured for specific public-sector requirements. Government and public technology solutions are developed and deployed subject to applicable laws, regulations, procurement requirements, permissions and authorised access.
              </p>
            </div>

            {/* Structured Highlight Badges */}
            <div className="grid grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <Users className="w-4 h-4 text-[#0FA4AF] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Citizen &amp; Admin Services</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#0FA4AF] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Authorised &amp; Lawful Access</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0FA4AF] to-[#024950] text-white font-extrabold text-sm sm:text-base shadow-md shadow-[#0FA4AF]/25 hover:shadow-lg hover:from-[#0d8e98] hover:to-[#01353a] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Government Solutions</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Custom SVG Graphic (Transparent Background & Live in Synchronized Motion) */}
          <div className="lg:col-span-6 flex items-center justify-center animate-float-slow">
            <GovernmentInfrastructureSVG />
          </div>

        </div>
      </div>
    </section>
  );
}
