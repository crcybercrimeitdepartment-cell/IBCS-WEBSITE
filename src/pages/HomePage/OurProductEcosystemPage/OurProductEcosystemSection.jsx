import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';
import { productEcosystemData } from './OurProductEcosystemPageData';

/* 3D Specimen Graphic SVGs matching reference image */
function CyberShieldSpecimen() {
  return (
    <svg width="96" height="96" viewBox="0 0 128 128" className="filter drop-shadow-[0_14px_12px_rgba(20,25,20,0.48)] transition-transform duration-300">
      <defs>
        <radialGradient id="shieldGlowSec" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="45%" stopColor="#059669" />
          <stop offset="100%" stopColor="#064e3b" />
        </radialGradient>
        <linearGradient id="shieldRimSec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="35%" stopColor="#d97706" />
          <stop offset="70%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>
      <path d="M64 12 L106 28 C106 72 64 114 64 114 C64 114 22 72 22 28 Z" fill="url(#shieldRimSec)" stroke="#451a03" strokeWidth="1.5" />
      <path d="M64 18 L100 32 C100 68 64 106 64 106 C64 106 28 68 28 32 Z" fill="url(#shieldGlowSec)" stroke="#065f46" strokeWidth="1" />
      <path d="M34 35 C42 33 54 31 64 31 C74 31 86 33 94 35 C88 52 76 68 64 78 C52 68 40 52 34 35 Z" fill="white" fillOpacity="0.22" />
      <circle cx="64" cy="54" r="14" fill="#fef3c7" stroke="#b45309" strokeWidth="2" />
      <circle cx="64" cy="54" r="6" fill="#0f172a" />
    </svg>
  );
}

function AIBrainSpecimen() {
  return (
    <svg width="96" height="96" viewBox="0 0 128 128" className="filter drop-shadow-[0_14px_12px_rgba(20,20,30,0.5)] transition-transform duration-300">
      <defs>
        <radialGradient id="aiOrbSec" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="40%" stopColor="#a855f7" />
          <stop offset="80%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#312e81" />
        </radialGradient>
        <linearGradient id="aiRingSec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="50%" stopColor="#e879f9" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <ellipse cx="64" cy="64" rx="54" ry="18" fill="none" stroke="url(#aiRingSec)" strokeWidth="3" transform="rotate(-25 64 64)" opacity="0.75" />
      <circle cx="64" cy="64" r="38" fill="url(#aiOrbSec)" stroke="#e9d5ff" strokeWidth="1.5" />
      <circle cx="64" cy="50" r="4.5" fill="#ffffff" />
      <circle cx="64" cy="68" r="5" fill="#fbcfe8" />
    </svg>
  );
}

function EnterpriseTowerSpecimen() {
  return (
    <svg width="96" height="96" viewBox="0 0 128 128" className="filter drop-shadow-[0_14px_12px_rgba(20,20,30,0.5)] transition-transform duration-300">
      <defs>
        <linearGradient id="entTopSec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="entLeftSec" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <linearGradient id="entRightSec" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
      </defs>
      <polygon points="64,30 96,48 64,66 32,48" fill="url(#entTopSec)" stroke="#c7d2fe" strokeWidth="1" />
      <polygon points="32,48 64,66 64,98 32,80" fill="url(#entLeftSec)" stroke="#312e81" strokeWidth="0.8" />
      <polygon points="64,66 96,48 96,80 64,98" fill="url(#entRightSec)" stroke="#3730a3" strokeWidth="0.8" />
    </svg>
  );
}

function GovernmentScalesSpecimen() {
  return (
    <svg width="96" height="96" viewBox="0 0 128 128" className="filter drop-shadow-[0_14px_12px_rgba(20,25,30,0.5)] transition-transform duration-300">
      <defs>
        <linearGradient id="govGoldSec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="80%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>
      <rect x="61" y="24" width="6" height="74" fill="url(#govGoldSec)" rx="2" />
      <polygon points="20,38 108,38 106,44 22,44" fill="url(#govGoldSec)" stroke="#78350f" strokeWidth="1" />
      <circle cx="64" cy="22" r="8" fill="url(#govGoldSec)" stroke="#78350f" strokeWidth="1" />
    </svg>
  );
}

function SectionSpecimenGraphic({ specimen }) {
  switch (specimen) {
    case 'cyber-shield': return <CyberShieldSpecimen />;
    case 'ai-brain': return <AIBrainSpecimen />;
    case 'enterprise-tower': return <EnterpriseTowerSpecimen />;
    case 'government-scales': return <GovernmentScalesSpecimen />;
    default: return <CyberShieldSpecimen />;
  }
}

/* Home Page Section Card - Exact 1:1 Behavior and 360-degree Orbit Animation as Inner Page */
function HomeProductCard({ item, index }) {
  const [isPinned, setIsPinned] = useState(false);
  const [isPeeking, setIsPeeking] = useState(false);

  useEffect(() => {
    // Initial page load peek preview (slides open 1.4s then slides back closed)
    const startDelay = 500 + index * 120;
    const peekDuration = 1400;

    const startTimer = setTimeout(() => {
      setIsPeeking(true);
    }, startDelay);

    const endTimer = setTimeout(() => {
      setIsPeeking(false);
    }, startDelay + peekDuration);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, [index]);

  const togglePin = () => {
    setIsPinned((prev) => !prev);
    setIsPeeking(false);
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={togglePin}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          togglePin();
        }
      }}
      className={`home-profile-card group ${isPinned ? 'is-pinned' : ''} ${isPeeking && !isPinned ? 'is-peeking' : ''}`}
      style={{
        animation: `cardEntrance 0.5s ease-out ${index * 0.08}s both`,
      }}
      aria-expanded={isPinned || isPeeking}
    >
      {/* 1. Underneath Content Panel (Revealed on Hover / Click / Peeking) */}
      <div className="under-content" lang="en">
        <h3
          className="text-[17px] font-extrabold text-[#081E52] leading-snug tracking-tight mb-2 group-hover:text-[#0FA4AF] transition-colors shrink-0"
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
          title={item.title}
        >
          {item.title}
        </h3>

        <div className="flex-1 min-w-0 overflow-y-auto custom-card-scroll">
          <p
            lang="en"
            className="text-[12px] text-slate-600 leading-[1.65] font-medium hyphens-auto"
            style={{
              textAlign: 'justify',
              textJustify: 'inter-word',
              hyphens: 'auto',
              WebkitHyphens: 'auto',
              msHyphens: 'auto',
              wordBreak: 'normal',
              overflowWrap: 'break-word',
            }}
          >
            {item.description}
          </p>
        </div>
      </div>

      {/* 2. Sage Green Gradient Cover (Slides Left on Open) */}
      <div className="sage-cover">
        {/* Top: Level Pill */}
        <div className="bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/25 shadow-xs shrink-0 select-none">
          <span className="text-white text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase leading-none block whitespace-nowrap drop-shadow-xs font-mono">
            {item.level || `LEVEL ${item.number}`}
          </span>
        </div>

        {/* Center: Specimen Circle Frame with CONTINUOUS 360-DEGREE ORBITING SATELLITE BALL */}
        <div className="relative my-auto flex items-center justify-center select-none">
          <div className="icon-badge-box w-[84px] h-[84px] sm:w-[92px] sm:h-[92px] rounded-full bg-[#A3CBBB] border-2 border-white/60 ring-4 ring-white/20 shadow-md flex items-center justify-center p-2.5">
            <div className="w-full h-full flex items-center justify-center filter drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]">
              <SectionSpecimenGraphic specimen={item.specimen || 'cyber-shield'} />
            </div>
          </div>

          {/* Orbiting Satellite Ball - Revolves 360 degrees continuously around circle ring */}
          <div className="icon-badge-box absolute inset-0 pointer-events-none">
            <div className="w-full h-full animate-orbit relative">
              <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full shadow-[0_0_8px_rgba(52,211,153,0.9)] ring-2 ring-emerald-300/40" />
            </div>
          </div>
        </div>

        {/* Bottom: Heading (Visible when closed) */}
        <div className="cover-title">
          <h3
            className="text-white text-[16.5px] sm:text-[18px] font-extrabold tracking-tight leading-snug drop-shadow-md line-clamp-2"
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
          >
            {item.title}
          </h3>
        </div>
      </div>
    </article>
  );
}

export default function OurProductEcosystemSection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    if (e) e.preventDefault();
    window.location.hash = '#our-product-ecosystem-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  const firstFourCards = productEcosystemData.slice(0, 4);

  return (
    <section id="our-product-ecosystem" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#E2F3ED] via-[#D5ECE1] to-[#C7E5D6] border-b border-[#D4AF37]/20 overflow-hidden relative">

      {/* Background Vector Artwork: Waves, Glows, Lines & Network Dots (Exact 100% Match to Reference Image) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft Ambient Radial Highlights */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[#F0FAF5] rounded-full blur-3xl opacity-90"></div>
        <div className="absolute top-1/4 -left-40 w-[650px] h-[650px] bg-white/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -right-40 w-[650px] h-[650px] bg-white/40 rounded-full blur-3xl"></div>

        {/* Precise SVG Background Artwork */}
        <svg className="w-full h-full min-h-[650px]" viewBox="0 0 1440 650" fill="none" preserveAspectRatio="xMidYMid slice">
          {/* Overlapping Curved Light Waves on Left & Right */}
          <path d="M-200,400 C150,150 450,480 850,280 C1150,130 1350,330 1650,230" fill="none" stroke="#FFFFFF" strokeWidth="120" opacity="0.45" />
          <path d="M-100,550 C300,380 750,640 1250,440 C1450,360 1550,460 1650,420" fill="none" stroke="#FFFFFF" strokeWidth="140" opacity="0.3" />

          {/* LEFT SIDE CONSTELLATION LINE & DOTS */}
          <line x1="210" y1="130" x2="90" y2="410" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.75" />
          <circle cx="210" cy="130" r="13" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.9" />
          
          {/* Left Shield Badge Node */}
          <g transform="translate(142, 275)">
            <circle r="15" fill="#4B8272" stroke="#FFFFFF" strokeWidth="1.5" />
            <path d="M-4 -5 L4 -5 L0 5 Z" fill="#A4D8C8" />
          </g>
          <circle cx="90" cy="410" r="9" fill="#4B8272" stroke="#FFFFFF" strokeWidth="1.5" />

          {/* RIGHT SIDE CONSTELLATION LINE & DOTS */}
          <line x1="1340" y1="110" x2="1190" y2="390" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.75" />
          <circle cx="1340" cy="110" r="11" fill="#4B8272" stroke="#FFFFFF" strokeWidth="1.5" />

          <line x1="1190" y1="390" x2="1390" y2="470" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.75" />
          <circle cx="1190" cy="390" r="5" stroke="#FFFFFF" strokeWidth="2" fill="#4B8272" />

          <circle cx="1390" cy="470" r="9" stroke="#FFFFFF" strokeWidth="2" fill="none" />
          <circle cx="1390" cy="470" r="4" fill="#4B8272" />

          {/* BOTTOM CURVED LINE WITH NODES */}
          <path d="M 220 570 Q 720 490 1220 570" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" fill="none" />
          <circle cx="328" cy="524" r="5" stroke="#FFFFFF" strokeWidth="2" fill="#4B8272" />
          <circle cx="1076" cy="516" r="5" stroke="#FFFFFF" strokeWidth="2" fill="#4B8272" />
        </svg>
      </div>

      <style>{`
        /* 4 Cards Row Layout on Desktop */
        .home-profile-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 1.5rem;
          width: 100%;
        }
        @media (min-width: 640px) {
          .home-profile-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .home-profile-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        /* Card Container - 60fps Native Animations Matching Inner Page */
        .home-profile-card {
          position: relative;
          width: 100%;
          height: 285px;
          background-color: #ffffff;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          user-select: none;
          contain: paint;
          transform: translateZ(0);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), 
                      box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.35s ease;
        }

        /* Sage Green Sliding Cover */
        .home-profile-card .sage-cover {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to bottom, #88B29E, #75A38F, #639480);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 1.125rem 0.5rem;
          z-index: 20;
          overflow: hidden;
          will-change: width, box-shadow;
          transform: translateZ(0);
          backface-visibility: hidden;
          transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Cover Title */
        .home-profile-card .cover-title {
          width: 100%;
          text-align: center;
          padding: 0 0.5rem;
          flex-shrink: 0;
          user-select: none;
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.2s ease-out, transform 0.2s ease-out;
        }

        /* Icon Badge Scale Base */
        .home-profile-card .icon-badge-box {
          transform: scale(1);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        /* Underneath Content Panel */
        .home-profile-card .under-content {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 124px;
          background: linear-gradient(to bottom right, #ffffff, #FCFDFD, #F8FAFB);
          padding: 1rem 1rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          z-index: 10;
          overflow: hidden;
          opacity: 0;
          transform: translateZ(0);
          pointer-events: none;
          transition: opacity 0.3s ease-out;
        }

        @media (max-width: 639px) {
          .home-profile-card .under-content {
            left: 112px;
            padding: 0.875rem 0.875rem;
          }
        }

        /* Open / Active State via .is-pinned & .is-peeking */
        .home-profile-card.is-pinned,
        .home-profile-card.is-peeking {
          transform: translateY(-4px) translateZ(0);
          box-shadow: 0 16px 32px -4px rgba(20, 60, 45, 0.15);
          border-color: rgba(45, 212, 191, 0.8);
        }

        .home-profile-card.is-pinned .sage-cover,
        .home-profile-card.is-peeking .sage-cover {
          width: 124px;
          box-shadow: 6px 0 20px rgba(20, 40, 30, 0.2);
        }

        .home-profile-card.is-pinned .cover-title,
        .home-profile-card.is-peeking .cover-title {
          opacity: 0;
          transform: translateY(-6px);
          pointer-events: none;
        }

        .home-profile-card.is-pinned .icon-badge-box,
        .home-profile-card.is-peeking .icon-badge-box {
          transform: scale(0.92);
        }

        .home-profile-card.is-pinned .under-content,
        .home-profile-card.is-peeking .under-content {
          opacity: 1;
          pointer-events: auto;
          transition-delay: 0.08s;
        }

        /* Desktop Hover State */
        @media (hover: hover) and (pointer: fine) {
          .home-profile-card:hover {
            transform: translateY(-4px) translateZ(0);
            box-shadow: 0 16px 32px -4px rgba(20, 60, 45, 0.15);
            border-color: rgba(45, 212, 191, 0.8);
          }

          .home-profile-card:hover .sage-cover {
            width: 124px;
            box-shadow: 6px 0 20px rgba(20, 40, 30, 0.2);
          }

          .home-profile-card:hover .cover-title {
            opacity: 0;
            transform: translateY(-6px);
            pointer-events: none;
          }

          .home-profile-card:hover .icon-badge-box {
            transform: scale(0.92);
          }

          .home-profile-card:hover .under-content {
            opacity: 1;
            pointer-events: auto;
            transition-delay: 0.08s;
          }
        }

        /* 360-Degree Continuous Revolving Orbiting Satellite Ball Animation */
        @keyframes orbitAround {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-orbit {
          animation: orbitAround 4s linear infinite;
          transform-origin: center center;
          will-change: transform;
        }

        /* Custom Scrollbar for Card Description */
        .custom-card-scroll {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent;
        }
        .custom-card-scroll::-webkit-scrollbar {
          width: 6px;
          display: block;
        }
        .custom-card-scroll::-webkit-scrollbar-thumb {
          background-color: #c7d2de;
          border-radius: 9999px;
        }
      `}</style>

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Top Pill Tag: — TECHNOLOGY DRIVEN — with thin lines on sides */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-16 sm:w-28 h-[1px] bg-[#4B8272]/40"></div>
            <span className="px-4 py-1 rounded-full bg-[#4B8272]/12 border border-[#4B8272]/25 text-[#0D382C] font-bold text-xs tracking-wider uppercase">
              TECHNOLOGY DRIVEN
            </span>
            <div className="w-16 sm:w-28 h-[1px] bg-[#4B8272]/40"></div>
          </div>

          {/* Centered Heading */}
          <AnimatedSectionHeading
            text="Our Product Ecosystem"
            className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-[#0D382C] sm:text-4xl lg:text-[50px] mb-2 text-center"
          />

          {/* Line Under Title with Center Ring Dot: ——— ⊙ ——— */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-16 h-[1px] bg-[#4B8272]/50"></div>
            <div className="w-3 h-3 rounded-full border-2 border-[#4B8272] bg-[#E2F3ED] flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#4B8272]"></div>
            </div>
            <div className="w-16 h-[1px] bg-[#4B8272]/50"></div>
          </div>

          {/* Centered Description Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#0D382C]/85 font-medium text-center max-w-4xl mx-auto mb-10"
          >
            <p>
              IB Cyber Security Private Limited is focused on building, owning and commercialising a growing ecosystem of software products and digital platforms. Our product portfolio can span cybersecurity, Artificial Intelligence, enterprise technology, data, cloud, automation, digital identity and specialised industry applications.
            </p>
            <p>
              Each product is developed with a product-first approach covering research, architecture, engineering, testing, security, deployment and continuous improvement. Our objective is to create reusable, scalable and commercially viable technology products that can evolve with changing user, industry and market requirements.
            </p>
          </motion.div>

          {/* 4 Cards Grid Matching Inner Page Cards 100% */}
          <div className="home-profile-grid mb-10 w-full">
            {firstFourCards.map((item, idx) => (
              <HomeProductCard
                key={item.id}
                item={item}
                index={idx}
              />
            ))}
          </div>

          {/* Bottom Centered Explore More Pill Button */}
          <div className="w-full flex justify-center items-center">
            <button
              type="button"
              onClick={handleCtaClick}
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#4A7F6E] to-[#346153] hover:from-[#3D6C5D] hover:to-[#2A5043] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#4A7F6E]/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20"
            >
              <span>Explore More</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
