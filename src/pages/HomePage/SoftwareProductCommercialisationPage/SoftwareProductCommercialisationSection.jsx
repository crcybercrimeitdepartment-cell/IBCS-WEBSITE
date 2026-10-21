import { ArrowRight, Cloud, FileKey, Building2, Globe2 } from 'lucide-react';
import SectionDecorativeBackground from '../../../components/common/SectionDecorativeBackground';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';

/* =========================================================================
   CUSTOM VECTOR SVG: COMMERCIALISATION LIFECYCLE & MONETISATION FLOW
   ========================================================================= */
function CommercialisationFlowSVG() {
  return (
    <svg
      viewBox="0 0 600 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[560px] select-none"
    >
      <defs>
        <linearGradient id="comFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0FA4AF" />
          <stop offset="50%" stopColor="#024950" />
          <stop offset="100%" stopColor="#003135" />
        </linearGradient>
      </defs>



      {/* Connecting Flow Pipeline Axis */}
      <line x1="80" y1="110" x2="520" y2="110" stroke="#AFDDE5" strokeWidth="4" strokeLinecap="round" />
      <line x1="80" y1="110" x2="520" y2="110" stroke="url(#comFlowGrad)" strokeWidth="2.5" strokeDasharray="8 6" />

      {/* Stage 1: Engineering & Product Development */}
      <g transform="translate(60, 75)">
        <circle cx="20" cy="35" r="28" fill="#E6F7F9" stroke="#0FA4AF" strokeWidth="2" />
        {/* Code / Product Block */}
        <rect x="12" y="27" width="16" height="16" rx="3" fill="#0FA4AF" />
        <path d="M 16 32 L 18 35 L 16 38" stroke="#FFFFFF" strokeWidth="1.2" />
        <text x="20" y="80" textAnchor="middle" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Product Ready</text>
      </g>

      {/* Arrow 1 */}
      <path d="M 165 106 L 175 110 L 165 114" stroke="#0FA4AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Stage 2: SaaS & Cloud Subscriptions */}
      <g transform="translate(190, 75)">
        <circle cx="20" cy="35" r="28" fill="#FFFFFF" stroke="#0FA4AF" strokeWidth="2" />
        {/* Cloud / Sync Icon */}
        <path d="M 13 38 A 6 6 0 0 1 18 30 A 7 7 0 0 1 29 32 A 5 5 0 0 1 31 38 Z" fill="#E6F7F9" stroke="#0FA4AF" strokeWidth="1.5" />
        <text x="20" y="80" textAnchor="middle" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">SaaS Models</text>
      </g>

      {/* Arrow 2 */}
      <path d="M 295 106 L 305 110 L 295 114" stroke="#0FA4AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Stage 3: Enterprise Licensing */}
      <g transform="translate(320, 75)">
        <circle cx="20" cy="35" r="28" fill="#FFFFFF" stroke="#024950" strokeWidth="2" />
        {/* Key / License Icon */}
        <circle cx="17" cy="32" r="5" fill="none" stroke="#024950" strokeWidth="1.5" />
        <path d="M 21 35 L 29 42 M 25 38 L 27 36" stroke="#024950" strokeWidth="1.8" strokeLinecap="round" />
        <text x="20" y="80" textAnchor="middle" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Licensing</text>
      </g>

      {/* Arrow 3 */}
      <path d="M 425 106 L 435 110 L 425 114" stroke="#0FA4AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Stage 4: Global Distribution */}
      <g transform="translate(450, 75)">
        <circle cx="20" cy="35" r="28" fill="#003135" stroke="#AFDDE5" strokeWidth="2" />
        {/* Globe Icon */}
        <circle cx="20" cy="35" r="14" fill="none" stroke="#AFDDE5" strokeWidth="1.5" />
        <ellipse cx="20" cy="35" rx="6" ry="14" fill="none" stroke="#AFDDE5" strokeWidth="1.2" />
        <line x1="6" y1="35" x2="34" y2="35" stroke="#AFDDE5" strokeWidth="1.2" />
        <text x="20" y="80" textAnchor="middle" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Global Scale</text>
      </g>
    </svg>
  );
}

export default function SoftwareProductCommercialisationSection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#spc-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  return (
    <section
      id="software-commercialisation-section"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#EBF6F8] via-[#E4F3F5] to-[#DCEEF2] border-b border-[#D4AF37]/20 overflow-hidden relative"
    >
      {/* Interactive Decorative Background Theme */}
      <SectionDecorativeBackground variant="commercial" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-14">


          <AnimatedSectionHeading
            text="Software Product Commercialisation"
            className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-[#081E52] mb-5 text-center"
          />

          <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#081E52]/85 font-medium text-center max-w-3xl">
            <p>
              Building a software product is only one part of creating a technology business. We focus on taking software products from development to deployment, market adoption and long-term commercialisation through scalable technology-product business models.
            </p>
            <p>
              Our commercialisation strategy can include SaaS, subscriptions, software licensing, technology licensing, enterprise deployment, white-label products, APIs, integrations and international distribution. Each model can be adapted to the nature of the product, target market, customer requirements and applicable legal and commercial conditions.
            </p>
          </div>
        </div>

        {/* Center SVG Commercialisation Funnel (Transparent & Live in Synchronized Motion) */}
        <div className="w-full max-w-4xl mx-auto mb-10 flex items-center justify-center animate-float-slow">
          <CommercialisationFlowSVG />
        </div>

        {/* 4 Feature Commercial Model Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
          <div className="p-4 rounded-xl bg-white/80 border border-[#AFDDE5] shadow-xs text-center flex flex-col items-center">
            <Cloud className="w-6 h-6 text-[#0FA4AF] mb-2" />
            <span className="text-xs font-bold text-[#081E52]">SaaS &amp; Subscription</span>
          </div>
          <div className="p-4 rounded-xl bg-white/80 border border-[#AFDDE5] shadow-xs text-center flex flex-col items-center">
            <FileKey className="w-6 h-6 text-[#0FA4AF] mb-2" />
            <span className="text-xs font-bold text-[#081E52]">Software Licensing</span>
          </div>
          <div className="p-4 rounded-xl bg-white/80 border border-[#AFDDE5] shadow-xs text-center flex flex-col items-center">
            <Building2 className="w-6 h-6 text-[#0FA4AF] mb-2" />
            <span className="text-xs font-bold text-[#081E52]">Enterprise Deployment</span>
          </div>
          <div className="p-4 rounded-xl bg-white/80 border border-[#AFDDE5] shadow-xs text-center flex flex-col items-center">
            <Globe2 className="w-6 h-6 text-[#0FA4AF] mb-2" />
            <span className="text-xs font-bold text-[#081E52]">Global Distribution</span>
          </div>
        </div>

        {/* Centered CTA */}
        <div className="w-full flex justify-center">
          <button
            type="button"
            onClick={handleCtaClick}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0FA4AF] to-[#024950] text-white font-extrabold text-sm sm:text-base shadow-md shadow-[#0FA4AF]/25 hover:shadow-lg hover:from-[#0d8e98] hover:to-[#01353a] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Explore Commercialisation Strategy</span>
            <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
