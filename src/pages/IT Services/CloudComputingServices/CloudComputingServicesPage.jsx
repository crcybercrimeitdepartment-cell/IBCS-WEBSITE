import React, { useState, useEffect, useRef } from 'react';
import { Home } from 'lucide-react';
import ALL_CLOUDS from './CloudComputingServicesPageData.js';

/**
 * CloudCard Component
 * Pure SVG Cloud geometry with scalable typography and responsive layout.
 */
function CloudCard({
  num = "01",
  badge = "Overview",
  title = "Cloud Service",
  fullText = "",
  isTop = false,
  isMobile = false,
}) {
  return (
    <g className="cursor-pointer group select-none">
      {/* Cloud Shadow Underlayer */}
      <path
        d={
          isTop
            ? `M -180 72
               C -220 72, -244 36, -244 -8
               C -244 -52, -204 -78, -158 -70
               C -136 -126, -38 -138, 25 -92
               C 74 -148, 195 -148, 248 -84
               C 296 -84, 334 -40, 328 18
               C 332 72, 278 104, 226 104
               L -160 104
               Z`
            : `M -175 64
               C -212 64, -236 32, -236 -5
               C -236 -44, -198 -68, -156 -62
               C -134 -110, -40 -120, 25 -78
               C 72 -128, 188 -128, 240 -72
               C 286 -72, 322 -32, 318 14
               C 322 60, 270 90, 220 90
               L -156 90
               Z`
        }
        fill="#bad6f6"
        className="transition-all duration-700"
      />

      {/* Cloud Main Light Body */}
      <path
        d={
          isTop
            ? `M -170 62
               C -206 62, -230 30, -230 -8
               C -230 -48, -192 -72, -148 -64
               C -128 -118, -36 -128, 22 -84
               C 68 -138, 182 -138, 232 -78
               C 276 -78, 312 -36, 306 12
               C 310 64, 260 94, 212 94
               L -150 94
               Z`
            : `M -165 55
               C -200 55, -222 26, -222 -6
               C -222 -40, -186 -62, -146 -56
               C -126 -102, -38 -112, 22 -72
               C 66 -120, 175 -120, 224 -66
               C 268 -66, 302 -28, 298 10
               C 302 54, 255 82, 208 82
               L -148 82
               Z`
        }
        fill="#dbeefa"
        className="transition-all duration-700"
      />

      {/* Cloud Dome Highlights */}
      <circle cx="-75" cy={isTop ? "-58" : "-50"} r={isTop ? "58" : "54"} fill="#eef7fe" opacity="0.75" />
      <circle cx="110" cy={isTop ? "-72" : "-62"} r={isTop ? "72" : "65"} fill="#eef7fe" opacity="0.9" />
      <circle cx="218" cy={isTop ? "-24" : "-20"} r={isTop ? "56" : "52"} fill="#eef7fe" opacity="0.75" />
      <circle cx="-162" cy={isTop ? "-12" : "-10"} r={isTop ? "50" : "46"} fill="#eef7fe" opacity="0.75" />

      {/* Complete Content Inside Cloud (Centered on Cloud Optical Center X=+40, Y=-16) */}
      <foreignObject
        x={isTop ? (isMobile ? "-165" : "-175") : "-137"}
        y={isTop ? (isMobile ? "-112" : "-108") : "-95"}
        width={isTop ? (isMobile ? "410" : "430") : "360"}
        height={isTop ? (isMobile ? "196" : "184") : "155"}
        className="overflow-visible pointer-events-none"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className="w-full h-full flex flex-col items-center justify-center text-center select-none px-2 py-0.5"
        >
          {/* Header Tag */}
          <div className="flex items-center gap-1.5 mb-1 sm:mb-1.5">
            <span
              className={`font-extrabold rounded-full bg-blue-600 text-white shadow-sm transition-all duration-700 ${
                isTop
                  ? isMobile
                    ? 'text-[13px] px-2.5 py-0.5'
                    : 'text-[10.5px] px-2.5 py-0.5'
                  : isMobile
                    ? 'text-[9.5px] px-2 py-0.5'
                    : 'text-[8.5px] px-2 py-0.5'
              }`}
            >
              {num}
            </span>
            <span
              className={`font-bold uppercase tracking-wider rounded-full bg-blue-500/15 text-blue-800 transition-all duration-700 ${
                isTop
                  ? isMobile
                    ? 'text-[11.5px] px-2.5 py-0.5'
                    : 'text-[10px] px-2.5 py-0.5'
                  : isMobile
                    ? 'text-[9px] px-2 py-0.5'
                    : 'text-[8px] px-2 py-0.5'
              }`}
            >
              {badge}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`font-extrabold text-slate-900 leading-snug tracking-tight mb-1 sm:mb-1.5 transition-all duration-700 ${
              isTop
                ? isMobile
                  ? 'text-[17.5px] max-w-[370px]'
                  : 'text-[14px] sm:text-[14.5px] max-w-[390px]'
                : isMobile
                  ? 'text-[11.5px] max-w-[300px]'
                  : 'text-[10.5px] max-w-[300px]'
            }`}
          >
            {title}
          </h3>

          {/* Body Text */}
          <div className="w-full max-h-[125px] overflow-y-auto no-scrollbar flex items-center justify-center">
            <p
              className={`text-slate-700 font-medium leading-relaxed transition-all duration-700 text-center ${
                isTop
                  ? isMobile
                    ? 'text-[14px] sm:text-[14.5px] max-w-[380px]'
                    : 'text-[10.5px] sm:text-[11px] max-w-[400px]'
                  : isMobile
                    ? 'text-[8.5px] max-w-[310px]'
                    : 'text-[8px] max-w-[310px]'
              }`}
            >
              {fullText}
            </p>
          </div>
        </div>
      </foreignObject>
    </g>
  );
}

// Desktop Stage Coordinates (viewBox 0 0 1000 660)
const DESKTOP_STAGES = {
  0: { x: 260, y: 475, scale: 0.65, opacity: 1, isTop: false, zIndex: 20 },
  1: { x: 460, y: 195, scale: 1.05, opacity: 1, isTop: true, zIndex: 50 },
  2: { x: 740, y: 475, scale: 0.65, opacity: 1, isTop: false, zIndex: 20 },
  3: { x: 940, y: 500, scale: 0.38, opacity: 0, isTop: false, zIndex: 10 },
  4: { x: 60, y: 500, scale: 0.38, opacity: 0, isTop: false, zIndex: 10 },
};

// Mobile Phone Stage Coordinates (viewBox 0 0 580 820)
const MOBILE_STAGES = {
  0: { x: 155, y: 615, scale: 0.52, opacity: 1, isTop: false, zIndex: 20 },
  1: { x: 250, y: 220, scale: 0.96, opacity: 1, isTop: true, zIndex: 50 },
  2: { x: 415, y: 615, scale: 0.52, opacity: 1, isTop: false, zIndex: 20 },
  3: { x: 550, y: 635, scale: 0.32, opacity: 0, isTop: false, zIndex: 10 },
  4: { x: 25, y: 635, scale: 0.32, opacity: 0, isTop: false, zIndex: 10 },
};

export function CloudApp({ onClose, onHome }) {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 680 || window.innerHeight > window.innerWidth * 1.15;
    }
    return false;
  });

  const total = ALL_CLOUDS.length;
  const dockRef = useRef(null);
  const activeBtnRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleBack = () => {
    if (onClose) {
      onClose();
    } else if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = '#it-services';
    }
  };

  const handleHome = () => {
    if (onHome) onHome();
    else if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // Responsive Screen Detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 680 || window.innerHeight > window.innerWidth * 1.15);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setStep((prev) => (prev + 1) % total);
      } else if (e.key === 'ArrowLeft') {
        setStep((prev) => (prev - 1 + total) % total);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [total]);

  // Automatically advance cycle every 10 seconds (paused on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % total);
    }, 10000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  // Auto-scroll the in-page number dock to keep the active card centered horizontally
  useEffect(() => {
    if (activeBtnRef.current && dockRef.current) {
      const btn = activeBtnRef.current;
      const dock = dockRef.current;
      const btnLeft = btn.offsetLeft;
      const btnWidth = btn.offsetWidth;
      const dockWidth = dock.offsetWidth;
      dock.scrollTo({
        left: btnLeft - dockWidth / 2 + btnWidth / 2,
        behavior: 'smooth',
      });
    }
  }, [step]);

  // Desktop Arc pill dots
  const desktopLeftDots = [
    { x: 385, y: 175, color: '#f5a759', angle: -30 },
    { x: 320, y: 220, color: '#65b774', angle: -50 },
    { x: 275, y: 285, color: '#e95362', angle: -70 },
    { x: 255, y: 355, color: '#4688f2', angle: -90 },
    { x: 260, y: 420, color: '#df6c52', angle: -110 },
  ];

  const desktopRightDots = [
    { x: 615, y: 175, color: '#f5a759', angle: 30 },
    { x: 680, y: 220, color: '#65b774', angle: 50 },
    { x: 725, y: 285, color: '#e95362', angle: 70 },
    { x: 745, y: 355, color: '#4688f2', angle: 90 },
    { x: 740, y: 420, color: '#df6c52', angle: 110 },
  ];

  // Mobile Arc pill dots
  const mobileLeftDots = [
    { x: 210, y: 230, color: '#f5a759', angle: -30 },
    { x: 170, y: 305, color: '#65b774', angle: -50 },
    { x: 140, y: 390, color: '#e95362', angle: -70 },
    { x: 130, y: 480, color: '#4688f2', angle: -90 },
    { x: 145, y: 560, color: '#df6c52', angle: -110 },
  ];

  const mobileRightDots = [
    { x: 370, y: 230, color: '#f5a759', angle: 30 },
    { x: 410, y: 305, color: '#65b774', angle: 50 },
    { x: 440, y: 390, color: '#e95362', angle: 70 },
    { x: 450, y: 480, color: '#4688f2', angle: 90 },
    { x: 435, y: 560, color: '#df6c52', angle: 110 },
  ];

  const currentStages = isMobile ? MOBILE_STAGES : DESKTOP_STAGES;
  const currentLeftDots = isMobile ? mobileLeftDots : desktopLeftDots;
  const currentRightDots = isMobile ? mobileRightDots : desktopRightDots;
  const currentViewBox = isMobile ? "0 0 580 820" : "0 0 1000 660";

  return (
    <main className="relative w-full min-h-screen bg-white text-slate-900 flex flex-col items-center justify-between m-0 p-0 select-none overflow-x-hidden overflow-y-auto font-['Plus_Jakarta_Sans',sans-serif] pt-2 pb-6 antialiased">
      <style>{`
        /* Smooth scrolling */

        /* Elegant global scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 6px;
          border: 2px solid #f1f5f9;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        @keyframes pulseStream {
          0%, 100% {
            opacity: 0.85;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
            filter: drop-shadow(0 0 6px rgba(66, 133, 244, 0.6));
          }
        }

        .stream-dot {
          animation: pulseStream 2.5s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .cloud-element {
          transform-origin: 0 0;
          will-change: transform, opacity;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Custom scrollbar for horizontal dock */
        .dock-scroll::-webkit-scrollbar {
          height: 4px;
        }
        .dock-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .dock-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 9999px;
        }
        .dock-scroll::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>

      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-1 flex items-center justify-start gap-3 z-40">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 text-white px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-sm active:scale-95"
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

      {/* Main Page Top Header & Description */}
      <header className="pt-2 sm:pt-4 px-4 text-center z-30 max-w-4xl flex flex-col items-center pointer-events-none select-none">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-1.5">
          Cloud Computing
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-3xl leading-relaxed">
          IBCS Cloud Computing focuses on designing, migrating, and managing secure, scalable cloud environments tailored to modern operational needs. We help organisations leverage cloud platforms to enhance flexibility, improve collaboration, and optimize infrastructure performance.
        </p>
      </header>

      {/* SVG Canvas Container with 3 Clouds & Center Hub */}
      <div className="w-full flex-1 flex items-center justify-center min-h-[560px] sm:min-h-[620px] md:min-h-[660px] max-w-7xl px-2 sm:px-4 my-1">
        <svg
          viewBox={currentViewBox}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full block max-w-full overflow-visible touch-manipulation"
          xmlns="http://www.w3.org/2000/svg"
        >
        {/* ========================================================= */}
        {/* 1. SYMMETRICAL COLORED ARC DOTS */}
        {/* ========================================================= */}
        <g id="connecting-streams">
          {/* Left Arc Dots */}
          {currentLeftDots.map((dot, index) => (
            <rect
              key={`left-dot-${index}`}
              x={dot.x - 10}
              y={dot.y - 10}
              width="20"
              height="20"
              rx="10"
              transform={`rotate(${dot.angle}, ${dot.x}, ${dot.y})`}
              fill={dot.color}
              className="stream-dot"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}

          {/* Right Arc Dots */}
          {currentRightDots.map((dot, index) => (
            <rect
              key={`right-dot-${index}`}
              x={dot.x - 10}
              y={dot.y - 10}
              width="20"
              height="20"
              rx="10"
              transform={`rotate(${dot.angle}, ${dot.x}, ${dot.y})`}
              fill={dot.color}
              className="stream-dot"
              style={{ animationDelay: `${index * 0.2 + 0.15}s` }}
            />
          ))}
        </g>

        {/* ========================================================= */}
        {/* 2. MIDDLE HUB PILL CONTROLLER BETWEEN THE 3 CLOUDS */}
        {/* ========================================================= */}
        <foreignObject
          x={isMobile ? "200" : "410"}
          y={isMobile ? "440" : "345"}
          width={isMobile ? "180" : "180"}
          height="54"
          className="overflow-visible"
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            className="w-full h-full flex items-center justify-center select-none"
          >
            <div className="flex items-center gap-2.5 bg-slate-100/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-300 shadow-md hover:shadow-lg transition-all">
              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setStep((prev) => (prev - 1 + total) % total);
                }}
                className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-slate-700 hover:bg-blue-600 hover:text-white shadow-xs text-[11px] font-bold transition-all cursor-pointer active:scale-90"
                title="Previous Cloud"
              >
                ←
              </button>

              {/* Status Badge */}
              <div className="flex items-center gap-1 px-1.5">
                <span className="text-[12.5px] font-extrabold tracking-tight text-blue-600">
                  {String((step % total) + 1).padStart(2, '0')}
                </span>
                <span className="text-[11px] font-bold text-slate-400">
                  /&nbsp;{total}
                </span>
              </div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setStep((prev) => (prev + 1) % total);
                }}
                className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-slate-700 hover:bg-blue-600 hover:text-white shadow-xs text-[11px] font-bold transition-all cursor-pointer active:scale-90"
                title="Next Cloud"
              >
                →
              </button>
            </div>
          </div>
        </foreignObject>

        {/* ========================================================= */}
        {/* 3. DYNAMICALLY ROTATING AND SCALING CLOUDS (47 MODULES) */}
        {/* ========================================================= */}
        <g id="animated-clouds">
          {ALL_CLOUDS.map((item, index) => {
            // Compute distance from current active top item
            const diff = (index - (step % total) + total) % total;

            let stageIndex = 4; // default offscreen
            if (diff === 0) stageIndex = 1; // TOP
            else if (diff === 1) stageIndex = 0; // BOTTOM_LEFT
            else if (diff === 2) stageIndex = 4; // ENTER
            else if (diff === total - 1) stageIndex = 2; // BOTTOM_RIGHT
            else if (diff === total - 2) stageIndex = 3; // EXIT

            const isVisible = diff === 0 || diff === 1 || diff === 2 || diff === total - 1 || diff === total - 2;
            if (!isVisible) return null;

            const stageConfig = currentStages[stageIndex];
            const isResetting = stageIndex === 4;
            const transitionStyle = isResetting
              ? 'none'
              : 'transform 2400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 2000ms cubic-bezier(0.4, 0, 0.2, 1)';

            return (
              <g
                key={item.id}
                className="cloud-element cursor-pointer"
                onMouseEnter={() => {
                  if (stageConfig.isTop) setIsPaused(true);
                }}
                onMouseLeave={() => {
                  if (stageConfig.isTop) setIsPaused(false);
                }}
                onTouchStart={() => {
                  if (stageConfig.isTop) {
                    setIsPaused((p) => !p);
                  } else if (stageConfig.opacity === 1) {
                    setStep(index);
                  }
                }}
                onClick={() => {
                  if (!stageConfig.isTop && stageConfig.opacity === 1) {
                    setStep(index);
                  }
                }}
                style={{
                  transform: `translate(${stageConfig.x}px, ${stageConfig.y}px) scale(${stageConfig.scale})`,
                  opacity: stageConfig.opacity,
                  transition: transitionStyle,
                  pointerEvents: stageConfig.opacity === 0 ? 'none' : 'auto',
                }}
              >
                <CloudCard
                  num={item.num}
                  badge={item.badge}
                  title={item.title}
                  fullText={item.fullText}
                  isTop={stageConfig.isTop}
                  isMobile={isMobile}
                />
              </g>
            );
          })}
        </g>
      </svg>
      </div>

      {/* ========================================================= */}
      {/* 4. IN-PAGE HORIZONTAL NUMBER JUMP DOCK (01 - 47) */}
      {/* ========================================================= */}
      <div className="w-full flex items-center justify-center -mt-20 sm:-mt-28 md:-mt-36 mb-4 px-3 z-30">
        <div className="flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full border border-slate-200/90 shadow-xl max-w-[95vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <span className="text-[10px] sm:text-[11.5px] font-extrabold text-slate-500 uppercase tracking-wider pl-1 pr-1 shrink-0 select-none flex items-center gap-1">
            <span className="text-blue-600 font-black">#</span> Jump:
          </span>

          {/* Scroll Left Button */}
          <button
            onClick={() => {
              if (dockRef.current) {
                dockRef.current.scrollBy({ left: -160, behavior: 'smooth' });
              }
            }}
            className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center font-extrabold text-xs shrink-0 transition-all cursor-pointer shadow-xs active:scale-90"
            title="Scroll Left"
          >
            ‹
          </button>

          {/* Scrollable Numbers Strip */}
          <div
            ref={dockRef}
            className="flex items-center gap-1.5 overflow-x-auto dock-scroll py-1 px-1 scroll-smooth"
          >
            {ALL_CLOUDS.map((cloud, index) => {
              const isCurrent = index === step % total;
              return (
                <button
                  key={`dock-num-${cloud.id}`}
                  ref={isCurrent ? activeBtnRef : null}
                  onClick={() => {
                    setStep(index);
                    setIsPaused(true);
                  }}
                  title={cloud.title}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10.5px] sm:text-[11.5px] font-extrabold transition-all cursor-pointer shrink-0 active:scale-90 select-none ${
                    isCurrent
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-400/40 scale-110'
                      : 'bg-slate-100/90 hover:bg-blue-50 hover:text-blue-600 text-slate-700'
                  }`}
                >
                  {cloud.num}
                </button>
              );
            })}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => {
              if (dockRef.current) {
                dockRef.current.scrollBy({ left: 160, behavior: 'smooth' });
              }
            }}
            className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center font-extrabold text-xs shrink-0 transition-all cursor-pointer shadow-xs active:scale-90"
            title="Scroll Right"
          >
            ›
          </button>
        </div>
      </div>
    </main>
  );
}

export default CloudApp;
