import React from 'react';
import { ArrowRight, GitPullRequest, ShieldCheck, Zap, Repeat } from 'lucide-react';
import SectionDecorativeBackground from '../../../components/common/SectionDecorativeBackground';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';

/* =========================================================================
   CUSTOM VECTOR SVG: DEVOPS INFINITY PIPELINE & CONTINUOUS DELIVERY
   ========================================================================= */
function DevOpsInfinityPipelineSVG() {
  return (
    <svg
      viewBox="0 0 600 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[560px] select-none drop-shadow-sm"
    >
      <defs>
        <linearGradient id="devLoopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0FA4AF" />
          <stop offset="50%" stopColor="#024950" />
          <stop offset="100%" stopColor="#003135" />
        </linearGradient>
      </defs>



      {/* DevOps Infinity Loop Track */}
      <path
        d="M 180 120 C 180 70, 90 70, 90 120 C 90 170, 180 170, 300 120 C 420 70, 510 70, 510 120 C 510 170, 420 170, 300 120 C 240 95, 180 95, 180 120 Z"
        stroke="#E6F7F9"
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 180 120 C 180 70, 90 70, 90 120 C 90 170, 180 170, 300 120 C 420 70, 510 70, 510 120 C 510 170, 420 170, 300 120 C 240 95, 180 95, 180 120 Z"
        stroke="url(#devLoopGrad)"
        strokeWidth="3"
        strokeDasharray="6 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Pipeline Stage Badges along loop */}
      {/* 1. PLAN / CODE */}
      <g transform="translate(60, 60)">
        <rect width="60" height="26" rx="13" fill="#FFFFFF" stroke="#0FA4AF" strokeWidth="1.5" />
        <text x="30" y="17" textAnchor="middle" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">CODE</text>
      </g>

      {/* 2. BUILD */}
      <g transform="translate(140, 45)">
        <rect width="60" height="26" rx="13" fill="#FFFFFF" stroke="#0FA4AF" strokeWidth="1.5" />
        <text x="30" y="17" textAnchor="middle" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">BUILD</text>
      </g>

      {/* 3. TEST / SECURITY SCAN */}
      <g transform="translate(140, 165)">
        <rect width="60" height="26" rx="13" fill="#0FA4AF" stroke="#FFFFFF" strokeWidth="1.5" />
        <text x="30" y="17" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="system-ui">TEST</text>
      </g>

      {/* 4. RELEASE */}
      <g transform="translate(60, 150)">
        <rect width="60" height="26" rx="13" fill="#FFFFFF" stroke="#0FA4AF" strokeWidth="1.5" />
        <text x="30" y="17" textAnchor="middle" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">RELEASE</text>
      </g>

      {/* 5. DEPLOY */}
      <g transform="translate(400, 45)">
        <rect width="60" height="26" rx="13" fill="#FFFFFF" stroke="#0FA4AF" strokeWidth="1.5" />
        <text x="30" y="17" textAnchor="middle" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">DEPLOY</text>
      </g>

      {/* 6. OPERATE */}
      <g transform="translate(480, 60)">
        <rect width="60" height="26" rx="13" fill="#FFFFFF" stroke="#0FA4AF" strokeWidth="1.5" />
        <text x="30" y="17" textAnchor="middle" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">OPERATE</text>
      </g>

      {/* 7. MONITOR */}
      <g transform="translate(480, 150)">
        <rect width="60" height="26" rx="13" fill="#FFFFFF" stroke="#0FA4AF" strokeWidth="1.5" />
        <text x="30" y="17" textAnchor="middle" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">MONITOR</text>
      </g>

      {/* 8. FEEDBACK */}
      <g transform="translate(400, 165)">
        <rect width="60" height="26" rx="13" fill="#FFFFFF" stroke="#0FA4AF" strokeWidth="1.5" />
        <text x="30" y="17" textAnchor="middle" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">OPTIMIZE</text>
      </g>

      {/* Central Security & Automation Hub */}
      <g transform="translate(300, 120)">
        <circle cx="0" cy="0" r="22" fill="#003135" stroke="#0FA4AF" strokeWidth="2" />
        <path d="M 0 -8 L 8 -4 V 3 C 8 8 0 11 0 11 C 0 11 -8 8 -8 3 V -4 Z" fill="#AFDDE5" />
      </g>
    </svg>
  );
}

export default function DevOpsContinuousDeliverySection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#devops-continuous-delivery-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  return (
    <section
      id="devops-continuous-delivery"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#EBF5F7] via-[#E4F3F5] to-[#DCEEF2] border-b border-[#D4AF37]/20 overflow-hidden relative"
    >
      {/* Interactive Decorative Background Theme */}
      <SectionDecorativeBackground variant="devops" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-14">


          <AnimatedSectionHeading
            text="DevOps & Continuous Delivery"
            className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-[#081E52] mb-5 text-center"
          />

          <div className="space-y-3.5 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#081E52]/85 font-medium text-center max-w-3xl text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            <p>
              <strong className="font-bold text-[#081E52]">IB Cyber Security Private Limited</strong> follows modern DevOps and continuous delivery practices to build, test, secure, deploy, and continuously improve software products efficiently. Our approach brings together development, infrastructure, security, automation, testing, and operations throughout the product lifecycle.
            </p>
            <p>
              We use modern tools and engineering practices to create reliable and repeatable delivery pipelines, improve release efficiency, strengthen software quality, and support scalable digital environments.
            </p>
            <p>
              By integrating automation, continuous integration, continuous deployment, cloud infrastructure, monitoring, and security into our engineering processes, IBCS enables faster product evolution while maintaining reliability, consistency, security, and operational stability.
            </p>
          </div>
        </div>

        {/* Center SVG DevOps Infinity Pipeline (Transparent & Live in Synchronized Motion) */}
        <div className="w-full max-w-4xl mx-auto mb-10 flex items-center justify-center animate-float-slow">
          <DevOpsInfinityPipelineSVG />
        </div>

        {/* 2 Core Feature Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          <div className="p-5 rounded-2xl bg-white/80 border border-[#AFDDE5] shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#E6F7F9] flex items-center justify-center text-[#0FA4AF] shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#081E52] mb-1">Accelerated Release Velocity</h4>
              <p className="text-xs text-[#081E52]/80 leading-relaxed font-medium">
                Automated continuous integration and delivery pipelines shorten cycle times from commit to production with total predictability.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-[#AFDDE5] shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#E6F7F9] flex items-center justify-center text-[#0FA4AF] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#081E52] mb-1">Zero-Downtime &amp; Security Scans</h4>
              <p className="text-xs text-[#081E52]/80 leading-relaxed font-medium">
                Built-in security vulnerability checks, rollback mechanisms, and blue-green deployments safeguard system availability.
              </p>
            </div>
          </div>
        </div>

        {/* Centered CTA */}
        <div className="w-full flex justify-center">
          <button
            type="button"
            onClick={handleCtaClick}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0FA4AF] to-[#024950] text-white font-extrabold text-sm sm:text-base shadow-md shadow-[#0FA4AF]/25 hover:shadow-lg hover:from-[#0d8e98] hover:to-[#01353a] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Explore DevOps Capabilities</span>
            <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
