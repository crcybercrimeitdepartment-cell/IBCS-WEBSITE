import React, { useState, useEffect, useMemo, useRef } from 'react';
import { OurTechnologyData } from './OurTechnologyPageData';
import { BrainCircuit, Cpu, Sparkles, ShieldCheck, Cloud, Database, LineChart, Settings, Network, Share2, Fingerprint, Lightbulb, X, ChevronLeft, ChevronRight, Home } from 'lucide-react';

const iconMap = {
  BrainCircuit, Cpu, Sparkles, ShieldCheck, Cloud, Database, LineChart, Settings, Network, Share2, Fingerprint, Lightbulb
};

export default function OurTechnologyPage({ onClose }) {
  const [activeIndex, setActiveIndex] = useState(250);
  const [isExpanded, setIsExpanded] = useState(false);
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const handleBack = () => {
    if (onClose) {
      onClose();
    } else {
      window.location.hash = '#our-technology';
    }
  };

  const handleHome = () => {
    if (onClose) {
      onClose();
    }
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // Create an extended array for infinite smooth loop without modulo jump issues
  const extendedCards = useMemo(() => {
    return Array.from({ length: 100 }, () => OurTechnologyData)
      .flat()
      .map((c, i) => ({ ...c, uid: i }));
  }, []);

  useEffect(() => {
    if (isExpanded) return; // Pause auto-rotation when expanded
    const timer = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3500); // slightly slower to allow reading
    return () => clearInterval(timer);
  }, [isExpanded]);

  // Render slightly more cards so they have time to fade in smoothly at the edges
  const visibleCards = extendedCards.filter(
    (card) => Math.abs(card.uid - activeIndex) <= 5
  );

  const handleCardClick = (uid) => {
    if (uid === activeIndex) {
      setIsExpanded(!isExpanded);
    } else {
      setActiveIndex(uid);
      setIsExpanded(false);
    }
  };

  const handleTouchStart = (e) => {
    touchStartRef.current = e.targetTouches[0].clientX;
    touchEndRef.current = 0;
  };
  const handleTouchMove = (e) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    const distance = touchStartRef.current - touchEndRef.current;

    if (distance > 50) { // Swipe Left
      setActiveIndex(prev => prev + 1);
      setIsExpanded(false);
    } else if (distance < -50) { // Swipe Right
      setActiveIndex(prev => prev - 1);
      setIsExpanded(false);
    }

    touchStartRef.current = 0;
    touchEndRef.current = 0;
  };

  // Mouse Drag Handlers for Desktop/Testing
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const distance = dragStartX - e.clientX;

    if (distance > 50) {
      setActiveIndex(prev => prev + 1);
      setIsExpanded(false);
    } else if (distance < -50) {
      setActiveIndex(prev => prev - 1);
      setIsExpanded(false);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handlePrev = () => {
    setActiveIndex(prev => prev - 1);
    setIsExpanded(false);
  };

  const handleNext = () => {
    setActiveIndex(prev => prev + 1);
    setIsExpanded(false);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden font-sans pt-4 pb-16 md:pt-8 md:pb-20 relative bg-gradient-to-b from-[#f8fafc] via-[#ffffff] to-[#e0e7ff]">
      {/* Top Header Navigation buttons for standalone page view */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-2 pb-4 sm:px-6 lg:px-8 flex items-center justify-start gap-3 z-30">
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

      <style>
        {`
          @keyframes float-icon {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .animate-float-icon {
            animation: float-icon 3.5s ease-in-out infinite;
          }
          
          /* Custom sleek scrollbar for the expanded description */
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.4); }
        `}
      </style>

      {/* HEADER SECTION */}
      <div className="w-full max-w-4xl mx-auto text-center px-6 mb-4 md:mb-6">
        <h2
          className="text-[30px] md:text-[36px] lg:text-[48px] text-[#081E52] font-extrabold mb-6 tracking-wide"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          OUR TECHNOLOGY
        </h2>
        <p
          className="text-[14px] md:text-[16px] text-black font-medium leading-[1.8] mb-5"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          At IB Cyber Security Private Limited, technology is at the core of every software product we design, engineer and commercialise. We combine modern software engineering with Artificial Intelligence, cybersecurity, cloud computing, data technologies, automation and other emerging technologies to build secure, scalable and intelligent digital products.
        </p>
        <p
          className="text-[14px] md:text-[16px] text-black font-medium leading-[1.8]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Our technology capabilities support the complete product development lifecycle, from research and architecture to engineering, deployment and continuous improvement. By combining multiple technology disciplines, we create software products and digital platforms designed for diverse industries, organisations and technology environments.
        </p>
      </div>

      {/* 3D Container with Swipe Support */}
      <div
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden md:overflow-visible flex items-start justify-center h-[550px] sm:h-[500px] md:h-[480px] pt-2 md:pt-6 select-none touch-pan-y"
        style={{ perspective: '1200px' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {visibleCards.map((card) => {
          const offset = card.uid - activeIndex;

          const isCenter = offset === 0;
          const isLeft1 = offset === -1;
          const isRight1 = offset === 1;
          const isLeft2 = offset === -2;
          const isRight2 = offset === 2;

          let transform = '';
          let zIndex = 0;
          let opacity = 1;

          let baseRotateY = 0;
          let baseTranslateX = 0;
          let baseTranslateZ = 0;
          let baseScale = 1;

          // Smooth coverflow perspective without flipping faces
          if (isCenter) {
            baseRotateY = 0; baseTranslateX = 0; baseTranslateZ = 0; baseScale = 1; zIndex = 50;
          } else if (isLeft1) {
            baseRotateY = 35; baseTranslateX = -40; baseTranslateZ = -80; baseScale = 0.9; zIndex = 40;
          } else if (isRight1) {
            baseRotateY = -35; baseTranslateX = 40; baseTranslateZ = -80; baseScale = 0.9; zIndex = 40;
          } else if (isLeft2) {
            baseRotateY = 45; baseTranslateX = -75; baseTranslateZ = -140; baseScale = 0.8; zIndex = 30; opacity = 0.9;
          } else if (isRight2) {
            baseRotateY = -45; baseTranslateX = 75; baseTranslateZ = -140; baseScale = 0.8; zIndex = 30; opacity = 0.9;
          } else if (offset === -3) {
            baseRotateY = 55; baseTranslateX = -105; baseTranslateZ = -200; baseScale = 0.7; zIndex = 20; opacity = 0.6;
          } else if (offset === 3) {
            baseRotateY = -55; baseTranslateX = 105; baseTranslateZ = -200; baseScale = 0.7; zIndex = 20; opacity = 0.6;
          } else if (offset < -3) {
            baseRotateY = 65; baseTranslateX = -135; baseTranslateZ = -250; baseScale = 0.6; zIndex = 10; opacity = 0;
          } else if (offset > 3) {
            baseRotateY = -65; baseTranslateX = 135; baseTranslateZ = -250; baseScale = 0.6; zIndex = 10; opacity = 0;
          }

          if (isExpanded && !isCenter) {
            transform = `translateX(${baseTranslateX * 1.8}%) scale(${baseScale * 0.8}) rotateY(${baseRotateY}deg) translateZ(${baseTranslateZ - 100}px)`;
            opacity = 0;
          } else {
            transform = `translateX(${baseTranslateX}%) scale(${baseScale}) rotateY(${baseRotateY}deg) translateZ(${baseTranslateZ}px)`;
            if (isExpanded && isCenter) zIndex = 100;
          }

          const IconComponent = iconMap[card.icon];
          const isCardExpanded = isCenter && isExpanded;

          return (
            <div
              key={card.uid}
              className={`absolute transition-all duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer ${isCardExpanded
                ? 'w-[92vw] sm:w-[680px] md:w-[760px] max-w-[780px] h-[460px] sm:h-[430px] md:h-[410px]'
                : 'w-[85vw] sm:w-[360px] h-[380px]'
                }`}
              style={{
                transform,
                zIndex,
                opacity,
                transformStyle: 'preserve-3d',
              }}
              onClick={() => handleCardClick(card.uid)}
            >

              {/* Single Face Card with Unique Theme Glass */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.bg} backdrop-blur-2xl rounded-[1.75rem] border border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-700 ${isCenter && !isExpanded ? 'hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.4)] hover:-translate-y-2' : ''}`}
              >
                {/* Subtle dotted pattern */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>

                {/* Ambient dynamic glow using card.themeGradient for vibrant neon effect */}
                <div className={`absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br ${card.themeGradient} opacity-60 blur-[60px] pointer-events-none mix-blend-screen`}></div>
                <div className={`absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br ${card.themeGradient} opacity-60 blur-[60px] pointer-events-none mix-blend-screen`}></div>

                {/* Badge Number */}
                <div className={`absolute transition-all duration-700 z-20 ${isCardExpanded ? 'opacity-0 scale-50 pointer-events-none' : 'top-6 left-6 opacity-100 scale-100'}`}>
                  <div className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                    <span className="text-white/80 font-mono text-xs font-bold tracking-[0.15em] drop-shadow-sm">{card.number}</span>
                  </div>
                </div>

                {/* Floating Icon Box */}
                <div className={`absolute transition-all duration-700 z-20 ${isCardExpanded
                  ? 'top-6 left-6 sm:top-8 sm:left-8 scale-90 sm:scale-100'
                  : isCenter
                    ? 'top-8 left-1/2 -translate-x-1/2 scale-100'
                    : 'top-16 left-1/2 -translate-x-1/2 scale-100'
                  }`}>
                  <div className={`p-4 rounded-[1.25rem] bg-gradient-to-br ${card.themeGradient} text-white shadow-[0_15px_30px_rgba(0,0,0,0.3),inset_0_2px_5px_rgba(255,255,255,0.4)] border border-white/20 animate-float-icon`}>
                    {IconComponent && <IconComponent className="w-8 h-8 md:w-10 md:h-10 drop-shadow-md" />}
                  </div>
                </div>

                {/* Collapsed Center Text & Button */}
                <div className={`absolute bottom-6 left-0 w-full px-8 flex flex-col items-center text-center transition-all duration-700 z-20 ${isCenter && !isExpanded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'}`}>
                  <h3 className="font-bold text-white tracking-tight text-[22px] mb-3 drop-shadow-md" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-[13px] md:text-[14px] leading-relaxed line-clamp-2 mb-6 font-medium px-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {card.desc}
                  </p>
                  <div className={`flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r ${card.themeGradient} text-white text-sm font-semibold shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300`}>
                    <span>Explore</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Side Card Title (Visible when card is not center) */}
                <div className={`absolute bottom-10 left-0 w-full px-6 flex flex-col items-center text-center transition-all duration-700 z-20 ${!isCenter ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <h3 className="font-bold text-white/90 tracking-tight text-xl leading-snug drop-shadow-sm" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {card.title}
                  </h3>
                </div>

                {/* Expanded State Content */}
                <div className={`absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col transition-all duration-700 ease-in-out z-10 ${isCardExpanded ? 'opacity-100 scale-100 delay-100' : 'opacity-0 scale-95 pointer-events-none'}`}>

                  <button
                    onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                    className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 z-50 border border-white/10 backdrop-blur-md shadow-sm"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <h3 className="font-extrabold text-white tracking-tight text-[22px] sm:text-[26px] md:text-[30px] leading-[1.25] drop-shadow-lg mb-5 sm:mb-6 pl-[64px] sm:pl-[74px] pr-12 sm:pr-14 mt-1 sm:mt-1.5" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {card.title}
                  </h3>

                  <div className="w-full h-[1px] bg-gradient-to-r from-white/15 via-white/25 to-white/10 mb-5 sm:mb-6"></div>

                  <div className="w-full relative px-2 overflow-y-auto custom-scrollbar" style={{ maxHeight: "100%" }}>
                    <div className={`absolute left-2 top-2 bottom-2 w-1 bg-gradient-to-b ${card.themeGradient} rounded-full opacity-85`}></div>
                    <p className="text-white/85 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] font-medium pl-6 pr-4 sm:pr-6 drop-shadow-sm text-left sm:text-justify" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {card.desc}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Manual Navigation Buttons */}
      <div className={`flex items-center justify-center gap-4 md:gap-6 z-20 transition-all duration-700 ${isExpanded ? 'mt-2 md:mt-8' : '-mt-24 md:mt-8'}`}>
        <button
          onClick={handlePrev}
          className="p-3 md:p-4 rounded-full bg-white text-[#081E52] shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:-translate-x-1 transition-all duration-300 border border-slate-100"
          aria-label="Previous card"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
        </button>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#003135]/20"></div>
          <div className="w-6 h-2 rounded-full bg-[#003135]/60"></div>
          <div className="w-2 h-2 rounded-full bg-[#003135]/20"></div>
        </div>
        <button
          onClick={handleNext}
          className="p-3 md:p-4 rounded-full bg-white text-[#081E52] shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:translate-x-1 transition-all duration-300 border border-slate-100"
          aria-label="Next card"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
