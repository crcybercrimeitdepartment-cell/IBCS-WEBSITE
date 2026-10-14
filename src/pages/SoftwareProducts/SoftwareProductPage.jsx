/**
 * software_product.jsx
 * Complete, self-contained single-file React component containing the entire
 * workspace UI, Hero Section, iMac desktop with 8 cards, real-time clock,
 * glowing green power light, botanical potted plant, photo frames, and wooden desk.
 */

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Target, Compass, Milestone, 
  Cpu, ShieldCheck, Network, Award, 
  Wifi, Battery, Search, Bell, Zap, Layers, Home
} from 'lucide-react';
import { heroContent, productCardsData } from './SoftwareProductPageData';

import ProductIntroductionPage from './Product Introduction/ProductIntroductionPage';
import PurposeUseCasesPage from './Purpose & Use Cases/PurposeUseCasesPage';
import VisionMissionPage from './Vision & Mission/VisionMissionPage';
import ProductRoadmapPage from './Product Roadmap/ProductRoadmapPage';
import TechnologyArchitecturePage from './Technology & Architecture/TechnologyArchitecturePage';
import SecurityCompliancePage from './Security & Compliance/SecurityCompliancePage';
import IntegrationsAPIsPage from './Integrations & APIs/IntegrationsAPIsPage';
import ProductBenefitsImpactPage from './Product Benefits & Impact/ProductBenefitsImpactPage';

// Icon Map Resolver
const iconMap = {
  sparkles: Sparkles,
  target: Target,
  compass: Compass,
  milestone: Milestone,
  cpu: Cpu,
  shieldCheck: ShieldCheck,
  shield: ShieldCheck,
  network: Network,
  award: Award,
  zap: Zap,
  layers: Layers,
};

/* =========================================================================
   1. HERO SECTION (Distinct Card Container for Heading & Description)
   ========================================================================= */
function HeroSection() {
  return (
    <section className="w-full pt-4 sm:pt-6 md:pt-8 pb-2 sm:pb-4 px-3 sm:px-4 z-30 flex flex-col items-center select-none">
      <div className="w-full max-w-4xl bg-white/75 backdrop-blur-md rounded-xl sm:rounded-2xl border border-amber-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-4 sm:p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
        
        {/* Subtle Decorative Ambient Gradient Accent */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-amber-400" />
        <div className="absolute -top-16 -right-16 w-24 sm:w-32 h-24 sm:h-32 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-24 sm:w-32 h-24 sm:h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

        {/* Category Pill Tag */}
        <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-900 text-white shadow-xs mb-2 sm:mb-3">
          <Sparkles size={11} className="text-amber-400 animate-pulse" />
          <span className="text-[9px] sm:text-[11px] font-semibold tracking-wider uppercase">
            {heroContent.category}
          </span>
        </div>

        {/* Distinct Heading */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {heroContent.heading}
        </h1>

        {/* 4 to 6 Lines of Cohesive Description */}
        <div className="mt-2.5 sm:mt-3.5 max-w-2xl text-slate-600 text-[11px] sm:text-xs md:text-sm leading-relaxed font-normal space-y-1.5 sm:space-y-2">
          {heroContent.description.map((para, idx) => (
            <p key={idx} className={idx === heroContent.description.length - 1 ? "text-slate-500 text-[10px] sm:text-xs pt-0.5 font-medium" : ""}>
              {para}
            </p>
          ))}
        </div>

        {/* Feature Pills Footer */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-200/60 w-full text-[9px] sm:text-xs text-slate-600 font-medium">
          {heroContent.featurePills.map((pill, idx) => {
            const IconComponent = iconMap[pill.iconType] || Sparkles;
            return (
              <span key={idx} className="inline-flex items-center gap-1 bg-white px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg border border-slate-200/80 shadow-2xs">
                <IconComponent size={11} className="text-amber-500" /> {pill.label}
              </span>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* =========================================================================
   2. WALL PHOTO FRAMES (Staggered Asymmetrical Heights)
   ========================================================================= */
function PhotoFrames() {
  return (
    <>
      {/* Left Frame (Square, Cyan) */}
      <div className="absolute top-[32%] sm:top-[36%] md:top-[38%] left-1 sm:left-[3%] md:left-[4%] lg:left-[5%] z-10 select-none pointer-events-none transform -translate-y-1/2">
        <div 
          className="relative"
          style={{ filter: 'drop-shadow(4px 8px 14px rgba(30, 20, 10, 0.12))' }}
        >
          <div className="w-14 h-14 xs:w-18 xs:h-18 sm:w-28 sm:h-28 md:w-38 md:h-38 bg-[#232936] p-[3px] xs:p-[4px] sm:p-[6px] md:p-[8px] rounded-[3px] border border-[#111622] shadow-inner">
            <div className="w-full h-full bg-[#fdfdfd] p-1.5 xs:p-2 sm:p-3.5 md:p-5 flex items-center justify-center shadow-sm border border-slate-200/60">
              <div className="w-full h-full rounded-[1px] relative bg-[#38bdf8]">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/20 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Frame (Portrait, Amber) */}
      <div className="absolute top-[48%] sm:top-[52%] md:top-[54%] right-1 sm:right-[3%] md:right-[4%] lg:right-[5%] z-10 select-none pointer-events-none transform -translate-y-1/2">
        <div 
          className="relative"
          style={{ filter: 'drop-shadow(4px 8px 14px rgba(30, 20, 10, 0.12))' }}
        >
          <div className="w-11 h-18 xs:w-14 xs:h-22 sm:w-20 sm:h-32 md:w-28 md:h-46 bg-[#2d3748] p-[3px] xs:p-[4px] sm:p-[5px] md:p-[7px] rounded-[2px] border border-[#1a202c] shadow-inner">
            <div className="w-full h-full bg-[#fefefe] p-1 xs:p-1.5 sm:p-2.5 md:p-3.5 flex items-center justify-center shadow-sm border border-slate-200/60">
              <div className="w-full h-full rounded-[1px] relative bg-[#f59e0b]">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/20 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* =========================================================================
   3. DESKTOP CARDS DASHBOARD (8 Product Cards + Live Dynamic Clock)
   ========================================================================= */
function DesktopCards({ onCardClick }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Real-time live clock ticking every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  return (
    <div className="w-full h-full flex flex-col justify-between p-1.5 xs:p-2 sm:p-3 md:p-3.5 text-slate-800 font-sans select-none overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#f8fafc] to-[#f1f5f9]">
      
      {/* Top Status Bar with Live Clock */}
      <div className="flex items-center justify-between pb-1 border-b border-slate-200/80 text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] text-slate-500 font-medium">
        <div className="flex items-center gap-1.5 sm:gap-3">
          <div className="flex items-center gap-1 font-bold text-slate-900">
            <span className="text-sky-500"></span> Product Suite
          </div>
          <span className="text-slate-400 hidden xs:inline">Overview</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2.5 text-slate-600">
          <Search size={10} className="opacity-60 hidden sm:block" />
          <Bell size={10} className="opacity-60 hidden sm:block" />
          <Wifi size={11} className="text-emerald-500" />
          <Battery size={11} className="text-slate-700" />
          
          {/* Dynamic Live Time */}
          <span className="font-bold text-slate-900 text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs tabular-nums bg-slate-100/90 px-1 sm:px-1.5 py-0.5 rounded border border-slate-200/80 shadow-xs">
            {formattedTime}
          </span>
        </div>
      </div>

      {/* 8 Product Cards in 4x2 Grid */}
      <div className="flex-1 flex flex-col justify-center my-0.5 xs:my-1">
        <div className="grid grid-cols-4 gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5">
          {productCardsData.map((card) => {
            const Icon = iconMap[card.iconType] || Sparkles;
            return (
              <button
                type="button"
                key={card.id}
                onClick={() => onCardClick && onCardClick(card)}
                title={card.description}
                className="bg-white rounded xs:rounded-md sm:rounded-xl p-1 xs:p-1.5 sm:p-2 border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-sky-400 hover:scale-[1.03] active:scale-95 transition-all duration-200 flex flex-col justify-between text-left h-[42px] xs:h-[50px] sm:h-[68px] md:h-[80px] cursor-pointer group"
              >
                {/* Icon + Badge */}
                <div className="flex items-center justify-between w-full">
                  <div className={`w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded xs:rounded-md sm:rounded-lg ${card.color} flex items-center justify-center border shrink-0 shadow-xs group-hover:scale-110 transition-transform`}>
                    <Icon size={9} className="xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
                  </div>
                  <span className={`text-[5.5px] xs:text-[6.5px] sm:text-[7.5px] md:text-[8.5px] font-bold px-1 sm:px-1.5 py-0.2 rounded-full shrink-0 ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>

                {/* Title and Tagline */}
                <div className="mt-0.5 w-full">
                  <h3 className="text-[6.5px] xs:text-[7.5px] sm:text-[9px] md:text-[10.5px] font-bold text-slate-800 tracking-tight leading-tight truncate group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[5.5px] xs:text-[6.5px] sm:text-[7.5px] md:text-[8.5px] text-slate-400 font-medium truncate hidden xs:block">
                    {card.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Footer Dock */}
      <div className="flex items-center justify-between pt-0.5 sm:pt-1 text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] text-slate-400 border-t border-slate-200/60">
        <span className="font-medium text-slate-600 flex items-center gap-1">
          <Sparkles size={9} className="text-amber-500" /> Executive Architecture
        </span>
        <span className="bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded-full font-medium text-[6px] xs:text-[7px] sm:text-[8.5px]">
          8 Modules (Click to Open)
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   4. COMPUTER MONITOR (White Display, Glowing Green Light, Aluminum Chin)
   ========================================================================= */
function Computer({ onCardClick }) {
  return (
    <div className="relative flex flex-col items-center select-none z-20 w-full max-w-[740px] px-2 sm:px-4">
      {/* Wall Shadow behind monitor */}
      <div 
        className="absolute -top-3 -right-4 w-[95%] h-[85%] bg-slate-900/20 blur-xl sm:blur-2xl rounded-3xl pointer-events-none -z-10"
        style={{ transform: 'translate(8px, 6px)' }}
      />
      
      <div className="relative w-full">
        {/* Outer Dark Bezel */}
        <div className="w-full bg-[#1e2330] rounded-[12px] xs:rounded-[16px] sm:rounded-[22px] md:rounded-[26px] p-[4px] sm:p-[7px] md:p-[9px] pb-0 border-2 border-[#121620] shadow-[0_15px_40px_rgba(15,23,42,0.3)] overflow-hidden flex flex-col">
          
          {/* White Screen Display Area */}
          <div className="relative w-full aspect-[16/10] bg-white rounded-t-[8px] xs:rounded-t-[12px] sm:rounded-t-[16px] overflow-hidden flex items-center justify-center border border-slate-300/80 shadow-inner">
            <DesktopCards onCardClick={onCardClick} />

            {/* Glossy Sheen Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(130deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 38%, rgba(255,255,255,0.0) 40%, rgba(255,255,255,0.15) 42%, rgba(255,255,255,0.0) 70%)'
              }}
            />
          </div>

          {/* Silver Chin with Glowing Green Power Indicator Light */}
          <div className="relative w-full h-7 xs:h-8 sm:h-11 md:h-14 bg-gradient-to-b from-[#e5e9f0] via-[#d8dee9] to-[#c7cedb] rounded-b-[10px] xs:rounded-b-[12px] sm:rounded-b-[18px] md:rounded-b-[20px] flex items-center justify-center border-t border-[#f1f5f9]/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.15)]">
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-white/90" />
            
            {/* Glowing Green LED Power Indicator */}
            <div className="relative flex items-center justify-center z-10">
              <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-gradient-to-b from-slate-300 to-slate-400 p-[1px] sm:p-[1.5px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3),0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center">
                <div 
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-emerald-400 animate-pulse relative"
                  style={{
                    boxShadow: '0 0 6px 2px #34d399, 0 0 14px 3px rgba(16, 185, 129, 0.6), inset 0 1px 1px #a7f3d0'
                  }}
                >
                  <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 rounded-full bg-white opacity-90" />
                </div>
              </div>
              <div className="absolute w-8 sm:w-12 h-4 sm:h-6 bg-emerald-400/20 rounded-full blur-md pointer-events-none animate-pulse" />
            </div>
          </div>
        </div>

        {/* Metallic Stand */}
        <div className="relative flex flex-col items-center -mt-[1px]">
          <div className="w-10 xs:w-12 sm:w-18 md:w-22 h-6 xs:h-7 sm:h-10 md:h-12 bg-gradient-to-b from-[#b8c2d1] via-[#cbd5e1] to-[#94a3b8] relative border-x border-[#8896aa] shadow-[inset_0_3px_5px_rgba(0,0,0,0.18)]">
            <div className="absolute inset-y-0 left-1/3 right-1/3 bg-white/20" />
          </div>

          <div className="relative -mt-0.5 flex flex-col items-center">
            <div 
              className="w-20 xs:w-24 sm:w-36 md:w-48 h-3 sm:h-5 md:h-6 bg-gradient-to-b from-[#e2e8f0] via-[#cbd5e1] to-[#94a3b8] rounded-b-md border border-[#8896aa] border-t-0 shadow-[0_4px_10px_rgba(0,0,0,0.25)] relative"
              style={{ clipPath: 'polygon(12% 0%, 88% 0%, 100% 100%, 0% 100%)' }}
            >
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-white/80" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </div>
            <div className="w-24 xs:w-30 sm:w-44 md:w-56 h-2.5 sm:h-3 bg-amber-950/35 rounded-full blur-[2px] -mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   5. BOTANICAL POTTED PLANT (Layered Leaves & Organic Table Contact Shadow)
   ========================================================================= */
function Plant() {
  return (
    <div className="relative select-none pointer-events-none flex flex-col items-center">
      {/* Wall Shadow behind plant foliage */}
      <div 
        className="absolute -top-6 -right-4 sm:-top-8 sm:-right-6 w-24 sm:w-36 h-48 sm:h-64 bg-slate-800/10 blur-lg sm:blur-xl rounded-full pointer-events-none -z-10"
        style={{ filter: 'blur(14px)' }}
      />
      
      <div className="relative flex flex-col items-center">
        <svg 
          viewBox="0 0 220 345" 
          className="w-28 xs:w-36 sm:w-48 md:w-56 lg:w-64 h-auto overflow-visible"
        >
          <defs>
            <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="60%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#065f46" />
            </linearGradient>
            <linearGradient id="leafGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
            <linearGradient id="potGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#f8fafc" />
              <stop offset="85%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="potInnerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="soilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#572608" />
              <stop offset="60%" stopColor="#361704" />
              <stop offset="100%" stopColor="#1c0a02" />
            </linearGradient>
            <radialGradient id="tableContactGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3d1a04" stopOpacity="0.75" />
              <stop offset="45%" stopColor="#572608" stopOpacity="0.45" />
              <stop offset="80%" stopColor="#78350f" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#78350f" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Tabletop Radial Contact Shadow */}
          <ellipse cx="110" cy="326" rx="56" ry="9" fill="url(#tableContactGlow)" />
          <ellipse cx="110" cy="323" rx="42" ry="4.5" fill="#291203" opacity="0.6" />

          {/* Soil and Inner Pot */}
          <g>
            <ellipse cx="110" cy="220" rx="60" ry="16" fill="url(#potInnerGrad)" stroke="#0f172a" strokeWidth="2.5" />
            <ellipse cx="110" cy="222" rx="56" ry="14" fill="url(#soilGrad)" />
          </g>

          {/* Leaves */}
          <g>
            <path d="M 105 224 Q 95 130 80 80 Q 75 55 90 25 Q 105 50 102 90 Q 108 140 110 224 Z" fill="#065f46" stroke="#0f172a" strokeWidth="2.5" />
            <path d="M 115 224 Q 130 140 145 80 Q 160 40 168 15 Q 165 50 152 95 Q 140 150 120 224 Z" fill="#047857" stroke="#0f172a" strokeWidth="2.5" />
            <path d="M 88 226 C 55 190 20 160 5 135 C -2 120 10 115 22 128 C 45 152 68 185 92 226 Z" fill="url(#leafGrad2)" stroke="#0f172a" strokeWidth="2.5" />
            <path d="M 94 226 C 75 160 48 110 32 65 C 24 45 42 40 54 58 C 72 88 88 145 98 226 Z" fill="url(#leafGrad3)" stroke="#0f172a" strokeWidth="2.5" />
            <path d="M 104 226 C 95 140 85 85 96 25 C 102 10 114 20 115 45 C 118 85 116 150 108 226 Z" fill="url(#leafGrad2)" stroke="#0f172a" strokeWidth="2.5" />
            <path d="M 108 226 C 118 160 135 105 152 50 C 160 30 172 45 165 68 C 152 110 135 168 116 226 Z" fill="url(#leafGrad1)" stroke="#0f172a" strokeWidth="2.5" />
            <path d="M 112 227 C 130 185 160 148 188 128 C 198 120 202 135 192 148 C 168 180 138 210 118 227 Z" fill="url(#leafGrad3)" stroke="#0f172a" strokeWidth="2.5" />
          </g>

          {/* Ceramic Pot Body */}
          <g>
            <path d="M 50 220 C 42 250 48 290 60 312 C 68 322 152 322 160 312 C 172 290 178 250 170 220 Z" fill="url(#potGrad)" stroke="#0f172a" strokeWidth="2.8" />
            <ellipse cx="110" cy="220" rx="60" ry="13" fill="#ffffff" stroke="#0f172a" strokeWidth="2.8" />
            <g stroke="#334155" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" fill="none">
              <path d="M 64 233 C 60 260 61 285 70 308" />
              <path d="M 74 236 C 71 265 74 290 80 312" />
              <path d="M 84 234 C 82 262 84 292 90 315" />
              <path d="M 95 235 C 94 265 96 295 100 316" />
              <path d="M 106 236 C 106 268 107 295 109 317" />
              <path d="M 117 235 C 118 266 119 295 118 316" />
              <path d="M 128 234 C 130 264 131 292 128 315" />
              <path d="M 139 236 C 142 265 142 290 138 312" />
              <path d="M 150 233 C 154 260 153 285 147 308" />
              <path d="M 160 232 C 164 258 162 280 155 302" />
            </g>
          </g>

          {/* Drooping Leaves over rim */}
          <g>
            <path d="M 72 222 C 60 215 52 230 58 245 C 64 252 74 248 76 235 C 78 226 76 222 72 222 Z" fill="url(#leafGrad2)" stroke="#0f172a" strokeWidth="2.2" />
            <path d="M 148 222 C 160 216 166 232 160 244 C 154 250 144 246 142 234 C 141 226 144 222 148 222 Z" fill="url(#leafGrad3)" stroke="#0f172a" strokeWidth="2.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

/* =========================================================================
   6. DESK SURFACE (Wooden Tabletop, Isometric Pink Pad, Ribbed Legs)
   ========================================================================= */
function DeskSurface() {
  return (
    <div className="w-full relative select-none pointer-events-none">
      <div className="w-full h-12 xs:h-14 sm:h-20 md:h-24 bg-gradient-to-b from-[#fae2c6] via-[#f7d4aa] to-[#f4c894] border-t border-amber-200/50 relative shadow-inner">
        <div className="absolute inset-x-0 top-0 h-3 sm:h-4 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

        {/* Isometric Pink Mat */}
        <div className="absolute right-[4%] sm:right-[10%] md:right-[14%] bottom-1.5 sm:bottom-3 z-30">
          <div 
            className="w-16 h-7 xs:w-22 xs:h-9 sm:w-36 sm:h-14 md:w-48 md:h-16 rounded-[2px] border border-[#2b1820] shadow-[0_3px_6px_rgba(40,20,10,0.25)] relative overflow-hidden bg-[#f45d7a]"
            style={{
              transform: 'perspective(400px) rotateX(25deg) skewX(-10deg)',
              transformOrigin: 'bottom center',
            }}
          >
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 3D Front Bevel */}
      <div className="w-full h-2.5 sm:h-4 bg-gradient-to-b from-[#e2b37c] to-[#ca985c] border-t border-[#f9dfbe] border-b border-[#a8743a] shadow-sm" />

      {/* Under-desk Area with Ribbed Legs */}
      <div className="w-full h-8 xs:h-10 sm:h-16 md:h-20 bg-[#ebd0b5]/50 relative overflow-hidden flex justify-between px-[12%] sm:px-[20%]">
        <div className="absolute top-0 inset-x-0 h-4 sm:h-6 bg-gradient-to-b from-black/25 via-black/10 to-transparent pointer-events-none" />

        <div className="w-4 sm:w-8 md:w-9 h-full bg-[#202534] border-x border-[#111622] relative flex justify-between shadow-lg">
          <div className="w-[1px] sm:w-[1.5px] h-full bg-slate-600/40" />
          <div className="w-[1px] sm:w-[1.5px] h-full bg-slate-600/40" />
          <div className="w-[1px] sm:w-[1.5px] h-full bg-slate-600/40" />
        </div>

        <div className="w-4 sm:w-8 md:w-9 h-full bg-[#202534] border-x border-[#111622] relative flex justify-between shadow-lg">
          <div className="w-[1px] sm:w-[1.5px] h-full bg-slate-600/40" />
          <div className="w-[1px] sm:w-[1.5px] h-full bg-slate-600/40" />
          <div className="w-[1px] sm:w-[1.5px] h-full bg-slate-600/40" />
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   7. MAIN ASSEMBLED EXPORT COMPONENT (SoftwareProduct)
   ========================================================================= */
export default function SoftwareProduct({ onClose }) {
  const [activeSubpage, setActiveSubpage] = useState(null);

  // Sync active subpage with URL hash
  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace('#', '');
      const validSlugs = [
        'product-introduction',
        'purpose-use-cases',
        'vision-mission',
        'product-roadmap',
        'technology-architecture',
        'security-compliance',
        'integrations-apis',
        'product-benefits-impact',
      ];
      if (validSlugs.includes(hash)) {
        setActiveSubpage(hash);
      } else if (
        hash === 'software-products' ||
        hash === 'software-products-page' ||
        hash === 'software-product-page' ||
        hash === ''
      ) {
        setActiveSubpage(null);
      }
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  const handleCardClick = (card) => {
    const slug = card.slug;
    if (slug) {
      setActiveSubpage(slug);
      window.location.hash = `#${slug}`;
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const handleCloseSubpage = () => {
    setActiveSubpage(null);
    window.location.hash = '#software-products';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else if (onClose) {
      onClose();
    } else {
      window.location.hash = '#home';
    }
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // Render Subpage if active
  if (activeSubpage === 'product-introduction') {
    return <ProductIntroductionPage onClose={handleCloseSubpage} />;
  }
  if (activeSubpage === 'purpose-use-cases') {
    return <PurposeUseCasesPage onClose={handleCloseSubpage} />;
  }
  if (activeSubpage === 'vision-mission') {
    return <VisionMissionPage onClose={handleCloseSubpage} />;
  }
  if (activeSubpage === 'product-roadmap') {
    return <ProductRoadmapPage onClose={handleCloseSubpage} />;
  }
  if (activeSubpage === 'technology-architecture') {
    return <TechnologyArchitecturePage onClose={handleCloseSubpage} />;
  }
  if (activeSubpage === 'security-compliance') {
    return <SecurityCompliancePage onClose={handleCloseSubpage} />;
  }
  if (activeSubpage === 'integrations-apis') {
    return <IntegrationsAPIsPage onClose={handleCloseSubpage} />;
  }
  if (activeSubpage === 'product-benefits-impact') {
    return <ProductBenefitsImpactPage onClose={handleCloseSubpage} />;
  }

  return (
    <div className="min-h-screen w-full relative flex flex-col justify-between overflow-x-hidden bg-gradient-to-b from-[#EBF7F8] via-[#E7F3F5] to-[#DFEFF2]">
      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex items-center justify-start gap-3 z-50 relative">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 text-white px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={handleHome}
          className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] px-4 py-2 text-xs sm:text-sm font-bold text-[#040A1A] transition-all cursor-pointer shadow-sm active:scale-95"
        >
          <Home className="w-4 h-4 text-[#040A1A]" />
          <span>Home</span>
        </button>
      </div>

      {/* Ambient Wall Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-white/40 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/5" />
      </div>

      {/* Wall Photo Frames */}
      <PhotoFrames />

      {/* Top Hero Section */}
      <HeroSection />

      {/* Main Desk & Computer Scenery */}
      <main className="w-full flex-1 flex flex-col justify-end items-center relative z-20 pt-1 sm:pt-4">
        <div className="w-full max-w-6xl px-2 sm:px-6 md:px-12 flex items-end justify-center relative mb-0">
          
          {/* Potted Plant */}
          <div className="absolute -left-2 xs:left-0 sm:left-4 md:left-8 lg:left-12 bottom-0 z-10 transform translate-y-5 xs:translate-y-6 sm:translate-y-9 md:translate-y-11 lg:translate-y-12 opacity-80 sm:opacity-100 scale-75 xs:scale-85 sm:scale-100 origin-bottom-left">
            <Plant />
          </div>

          {/* iMac Computer Monitor with 8 Cards */}
          <div className="relative z-20 mb-0 w-full flex justify-center">
            <Computer onCardClick={handleCardClick} />
          </div>
        </div>

        {/* Desk Surface Table */}
        <DeskSurface />
      </main>
    </div>
  );
}
