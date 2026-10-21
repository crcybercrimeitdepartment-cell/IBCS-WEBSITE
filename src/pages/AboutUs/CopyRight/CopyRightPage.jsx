import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import { COPYRIGHT_CARDS } from './CopyRightPageData';
import Device from './Device';

// Embedded CSS Keyframe Animations and Base Styles
const EMBEDDED_STYLES = `
html, body {
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}

@keyframes ringDrawIn {
  0% { stroke-dashoffset: 1230; opacity: 0; }
  20% { opacity: 1; }
  100% { stroke-dashoffset: 0; opacity: 1; }
}

@keyframes ringAccentDrawIn {
  0% { stroke-dashoffset: 1320; opacity: 0; }
  20% { opacity: 1; }
  100% { stroke-dashoffset: 0; opacity: 1; }
}

@keyframes ringInnerDrawIn {
  0% { stroke-dashoffset: 1140; opacity: 0; }
  20% { opacity: 1; }
  100% { stroke-dashoffset: 0; opacity: 1; }
}

@keyframes cGlyphDrawIn {
  0% { stroke-dashoffset: 620; opacity: 0; transform: scale(0.92); transform-origin: 210px 250px; }
  25% { opacity: 1; }
  75% { transform: scale(1.03); transform-origin: 210px 250px; }
  100% { stroke-dashoffset: 0; opacity: 1; transform: scale(1); transform-origin: 210px 250px; }
}

@keyframes letterFromC {
  0% {
    opacity: 0;
    transform: translateX(-50px) scale(0.6);
    filter: blur(4px);
  }
  65% {
    opacity: 1;
    transform: translateX(4px) scale(1.05);
    filter: blur(0px);
  }
  85% {
    transform: translateX(-1px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
    filter: blur(0px);
  }
}

@keyframes fadeSlideIn {
  0% { opacity: 0; transform: translateX(-50px); }
  100% { opacity: 1; transform: translateX(0); }
}

.animate-ring-draw {
  stroke-dasharray: 1230;
  stroke-dashoffset: 1230;
  animation: ringDrawIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-ring-accent-draw {
  stroke-dasharray: 1320;
  stroke-dashoffset: 1320;
  animation: ringAccentDrawIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards;
}

.animate-ring-inner-draw {
  stroke-dasharray: 1140;
  stroke-dashoffset: 1140;
  animation: ringInnerDrawIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
}

.animate-c-draw {
  stroke-dasharray: 620;
  stroke-dashoffset: 620;
  animation: cGlyphDrawIn 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.18s forwards;
}

.animate-letter-stagger {
  display: inline-block;
  opacity: 0;
  animation: letterFromC 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-capsule-follow {
  opacity: 0;
  animation: fadeSlideIn 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.65s forwards;
}
`;

export function CopyrightCardItem({ item, onSelectCard }) {
  const [isCircleHovered, setIsCircleHovered] = useState(false);
  const [cardKey, setCardKey] = useState(0);

  const toggleRotation = () => {
    setIsCircleHovered((prev) => !prev);
  };

  return (
    <div 
      onClick={() => {
        setCardKey((k) => k + 1);
        if (onSelectCard) onSelectCard(item);
      }}
      className="flex flex-col items-center justify-between p-3.5 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl bg-transparent transition-all duration-300 group hover:-translate-y-1 active:scale-[0.99] cursor-pointer"
    >

      {/* SVG Emblem Canvas - Fully Responsive */}
      <div className="w-full flex items-center justify-center my-0.5 sm:my-1">
        <svg
          key={cardKey}
          viewBox="0 0 680 500"
          className="w-full h-auto max-w-[240px] sm:max-w-[270px] md:max-w-[290px] overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={item.subtitle}
        >
          <defs>
            <linearGradient id={`ringGrad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={item.ringStart} />
              <stop offset="35%" stopColor={item.ringMid} />
              <stop offset="75%" stopColor={item.ringEnd} />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id={`cGrad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={item.cStart} />
              <stop offset="100%" stopColor={item.cEnd} />
            </linearGradient>
          </defs>

          {/* ROUND CIRCLE AREA - MOUSE HOVER & TOUCH SUPPORT */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setIsCircleHovered(true)}
            onMouseLeave={() => setIsCircleHovered(false)}
            onTouchStart={toggleRotation}
          >
            {/* Invisible Hitbox over circle */}
            <circle
              cx="210"
              cy="250"
              r="215"
              fill="#ffffff"
              fillOpacity="0.001"
              className="pointer-events-auto"
            />

            {/* 1. Outer Round Rings */}
            <circle cx="210" cy="250" r="212" stroke="#f1f5f9" strokeWidth="2.5" fill="none" className="animate-ring-accent-draw" />
            <circle cx="210" cy="250" r="195" stroke={`url(#ringGrad-${item.id})`} strokeWidth="28" strokeLinecap="round" className="animate-ring-draw" />
            <circle cx="210" cy="250" r="209" stroke={item.accentLine} strokeWidth="2" fill="none" className="animate-ring-accent-draw" />
            <circle cx="210" cy="250" r="181" stroke={item.accentLine} strokeWidth="1.5" strokeOpacity="0.4" fill="none" className="animate-ring-inner-draw" />

            {/* 2. 'C' Glyph - Centered 360° Rotation */}
            <g
              transform={isCircleHovered ? 'rotate(360 210 250)' : 'rotate(0 210 250)'}
              style={{
                transition: 'transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <path
                d="M 306 170 A 125 125 0 1 0 306 330"
                stroke={`url(#cGrad-${item.id})`}
                strokeWidth="34"
                strokeLinecap="round"
                fill="none"
                className="animate-c-draw"
              />
            </g>
          </g>

          {/* 3. NAME POSITIONED INSIDE 'C' */}
          <g transform="translate(180, 192)" className="pointer-events-none">
            {/* Main Title with staggered letter loading animation & extra bold size */}
            <foreignObject x="15" y="-8" width="500" height="65" className="overflow-visible pointer-events-none">
              <div 
                className="flex items-center select-none leading-none whitespace-nowrap"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
                  fontSize: '50px',
                  fontWeight: 900,
                  color: item.color,
                  letterSpacing: '-0.02em',
                }}
              >
                {item.subtitle.split('').map((char, idx) => (
                  <span
                    key={idx}
                    className="inline-block animate-letter-stagger"
                    style={{
                      animationDelay: `${idx * 0.035 + 0.2}s`,
                      whiteSpace: 'pre',
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </foreignObject>

            {/* COPYRIGHT - Policy Capsule */}
            <g className="animate-capsule-follow">
              <rect
                x="15"
                y="66"
                width="175"
                height="40"
                rx="20"
                fill={item.capsuleBg}
              />
              <circle cx="34" cy="86" r="5" fill={item.color} />
              <text
                x="49"
                y="91.5"
                className="select-none font-black uppercase"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: '14.5px',
                  fontWeight: 900,
                  fill: '#ffffff',
                  letterSpacing: '0.16em',
                }}
              >
                COPYRIGHT
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Copyright({ onClose }) {
  const [globalKey, setGlobalKey] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [replayCount, setReplayCount] = useState(0);

  useEffect(() => {
    if (selectedCard) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [selectedCard]);

  const handleBack = () => {
    if (selectedCard) {
      setSelectedCard(null);
    } else if (window.history.length > 1) {
      window.history.back();
    } else if (onClose) {
      onClose();
    } else {
      window.location.hash = '#about-us';
    }
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  if (selectedCard) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-[#EBF7F8] via-[#F4FCFD] to-[#EBF7F8] py-3 sm:py-4 select-none overflow-x-hidden">
        <style>{EMBEDDED_STYLES}</style>

        {/* Top Header Navigation Bar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex items-center justify-start gap-3 z-50 relative">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
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

        {/* Interactive Device Simulation */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Device activeItem={selectedCard} replayCount={replayCount} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#EBF7F8] via-[#F4FCFD] to-[#EBF7F8] py-6 sm:py-10 select-none overflow-x-hidden">
      
      {/* Inject Embedded Animation Styles */}
      <style>{EMBEDDED_STYLES}</style>

      {/* Top Header Navigation Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-start gap-3 z-50 relative">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
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

      {/* ========================================================= */}
      {/* SECTION 1: COPYRIGHT (Header & Description Section)       */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16 text-center space-y-3 sm:space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-900 capitalize">
          Copyright
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg font-medium text-neutral-600 max-w-4xl mx-auto leading-relaxed px-2">
          All material, design, architecture, text, vector, symbol, graphics and property, digital assets, etc., are proprietary and legally protected under international copyright frameworks.<br className="hidden sm:inline" />
          Unauthorized reproduction, modification, copying, downloading, distribution, or commercial exploitation in any form is strictly prohibited.
        </p>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: RESPONSIVE 16 COPYRIGHT CARDS GRID             */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fully Responsive Grid: 1 col (mobile), 2 cols (tablet), 3-4 cols (desktop) */}
        <div
          key={globalKey}
          onClick={() => setGlobalKey((k) => k + 1)}
          title="Click anywhere to replay animations"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 items-stretch justify-center"
        >
          {COPYRIGHT_CARDS.map((item) => (
            <CopyrightCardItem
              key={`${item.id}-${globalKey}`}
              item={item}
              onSelectCard={(selected) => setSelectedCard(selected)}
            />
          ))}
        </div>

      </section>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20 pt-6 border-t border-neutral-200 text-center text-[11px] sm:text-xs text-neutral-400 font-mono">
        © {new Date().getFullYear()} Copyright Policy &amp; Intellectual Property Protection Directory • Mobile Responsive &amp; Dynamic
      </div>

    </div>
  );
}

