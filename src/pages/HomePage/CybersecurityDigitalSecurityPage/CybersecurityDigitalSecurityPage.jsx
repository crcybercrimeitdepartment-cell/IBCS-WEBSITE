import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldCheck,
  Cloud,
  Database,
  Eye,
  Activity,
  Bug,
  AlertTriangle,
  Fingerprint,
  Lock,
  ShieldAlert,
  BarChart3,
  Cpu,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Home,
} from 'lucide-react';
import { SECURITY_CARDS } from './CybersecurityDigitalSecurityPageData';

// Icon mapper for quick dynamic resolution
const ICON_MAP = {
  ShieldCheck,
  Cloud,
  Database,
  Eye,
  Activity,
  Bug,
  AlertTriangle,
  Fingerprint,
  Lock,
  ShieldAlert,
  BarChart3,
  Cpu,
};

/**
 * Cybersecurity & Digital Security Main Component
 * Featuring 3D Cylinder Interactive Scroll-To-Rotate (bidirectional up/down mousewheel & drag)
 */
export default function CybersecurityDigitalSecurityPage({ onClose }) {
  const handleBack = () => {
    if (onClose) {
      onClose();
    } else {
      window.history.back();
    }
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  // Screen Responsive Dimensions
  const [screenSize, setScreenSize] = useState({
    width: 230,
    height: 340,
    perspective: 2200,
  });

  // Rotation Physics State Refs
  const rotationRef = useRef(0);
  const targetRotationRef = useRef(0);
  const tiltXRef = useRef(-10);
  const targetTiltXRef = useRef(-10);
  const lastMouseXRef = useRef(0);
  const isInteractingRef = useRef(false);
  const isCardHoveredRef = useRef(false);
  const ringDomRef = useRef(null);
  const carouselStageRef = useRef(null);
  const animFrameIdRef = useRef(null);

  // Responsive listener
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 480) {
        setScreenSize({ width: 145, height: 220, perspective: 1200 });
      } else if (windowWidth < 768) {
        setScreenSize({ width: 170, height: 250, perspective: 1500 });
      } else if (windowWidth < 1024) {
        setScreenSize({ width: 195, height: 290, perspective: 1800 });
      } else {
        setScreenSize({ width: 230, height: 340, perspective: 2200 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width, height, perspective } = screenSize;
  const quantity = SECURITY_CARDS.length;
  const cardAngleStep = 360 / quantity;
  // Precise geometric cylinder radius
  const translateZ = Math.round((width / 2) / Math.tan(Math.PI / quantity)) + (width < 160 ? 25 : 55);

  // Smooth Physics Animation Loop
  useEffect(() => {
    let lastTime = performance.now();

    const updatePhysics = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Auto-rotation ONLY pauses when hovering directly over cards or when dragging/interacting or card expanded
      if (autoRotate && activeCardIndex === null && !isCardHoveredRef.current && !isInteractingRef.current) {
        targetRotationRef.current += 10 * dt; // ~10 deg/sec
      }

      // Smooth interpolation (spring / lerp)
      const lerpFactor = Math.min(1, 10 * dt);
      rotationRef.current += (targetRotationRef.current - rotationRef.current) * lerpFactor;
      tiltXRef.current += (targetTiltXRef.current - tiltXRef.current) * lerpFactor;

      // Apply transform directly to DOM for smooth hardware acceleration
      if (ringDomRef.current) {
        ringDomRef.current.style.transform = `perspective(${perspective}px) rotateX(${tiltXRef.current}deg) rotateY(${rotationRef.current}deg)`;
      }

      animFrameIdRef.current = requestAnimationFrame(updatePhysics);
    };

    animFrameIdRef.current = requestAnimationFrame(updatePhysics);
    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [autoRotate, activeCardIndex, perspective]);

  // Drag & Swipe Interactions (Mouse and Touch)
  const handlePointerDown = (e) => {
    setIsDragging(true);
    isInteractingRef.current = true;
    lastMouseXRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = clientX - lastMouseXRef.current;
    lastMouseXRef.current = clientX;

    // Dragging right rotates counter-clockwise, dragging left rotates clockwise
    targetRotationRef.current -= deltaX * 0.45;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    isInteractingRef.current = false;
  };

  // Step Rotate Helpers (Previous / Next)
  const rotateNext = () => {
    targetRotationRef.current += cardAngleStep;
    setActiveCardIndex(null);
  };

  const rotatePrev = () => {
    targetRotationRef.current -= cardAngleStep;
    setActiveCardIndex(null);
  };

  // Jump to specific card and bring it to center front (0 deg face)
  const bringCardToFront = (index) => {
    const targetAngle = -(index * cardAngleStep);
    // Find shortest rotational path
    const current = targetRotationRef.current;
    const diff = ((targetAngle - current) % 360 + 540) % 360 - 180;
    targetRotationRef.current = current + diff;
    setActiveCardIndex(index);
  };

  return (
    <div
      className="relative min-h-screen w-full bg-[#f8fafc] text-slate-900 flex flex-col items-center justify-start overflow-x-hidden font-sans select-none pb-20 sm:pb-24"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setActiveCardIndex(null);
        }
      }}
    >
      {/* 3D Styles */}
      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .scrollbar-custom::-webkit-scrollbar {
          width: 3px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background-color: rgba(100, 116, 139, 0.45);
          border-radius: 9999px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>

      {/* Ambient Light Gradient & Color Glow Orbs */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#f1f5f9] to-[#e2e8f0] pointer-events-none" />
      <div className="fixed top-12 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-20 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-400/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-1/3 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle Background Tech Grid */}
      <div
        className="fixed inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top Header Navigation Bar (Global Back & Home Buttons) */}
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 pt-4 sm:pt-6 flex items-center justify-between z-50 relative pointer-events-auto">
        <div className="flex items-center gap-3">
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
      </div>

      {/* Hero Header Section */}
      <header className="relative z-20 pt-4 sm:pt-6 pb-2 sm:pb-4 text-center max-w-4xl px-4 sm:px-6 flex flex-col items-center w-full">


        {/* Main Title with Rich Gradient Accent */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
          Cybersecurity & <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Digital Security</span>
        </h1>

        {/* Frosted Glass Description Container */}
        <div className="mt-4 sm:mt-5 w-full max-w-3xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.04)] rounded-2xl sm:rounded-3xl p-4 sm:p-7 flex flex-col gap-2.5 sm:gap-3.5 text-justify transition-all duration-300 hover:shadow-[0_16px_50px_rgba(0,0,0,0.06)]" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal antialiased text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            Cybersecurity is a core technology area within <strong className="font-semibold text-slate-900">IB Cyber Security Private Limited</strong>. We develop security-focused software products designed to help organisations address application, infrastructure, data and digital security requirements through modern technology.
          </p>
          <div className="h-px w-20 sm:w-24 bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto" />
          <p className="text-[10.5px] sm:text-xs text-slate-500 leading-relaxed font-normal antialiased text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            Our cybersecurity product development combines security engineering, monitoring, analytics, automation and intelligent technologies. From threat intelligence and vulnerability management to privacy and incident management, our security products are designed to support organisations in building more secure and resilient digital environments.
          </p>
        </div>
      </header>

      {/* Main Showcase Section */}
      <main className="w-full flex flex-col items-center justify-center relative mt-2 sm:mt-4 select-none">
        {/* 3D Viewport Stage */}
        <div
          ref={carouselStageRef}
          className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] h-[390px] sm:h-[430px] md:h-[460px] flex items-center justify-center overflow-visible select-none cursor-grab active:cursor-grabbing touch-none"
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          {/* 3D Cylinder Ring with Hardware Accelerated Transform */}
          <div
            ref={ringDomRef}
            className="absolute top-[14%] sm:top-[16%] left-[calc(50%_-_(var(--w)/2))] -translate-y-[50%] preserve-3d transition-transform duration-75 will-change-transform"
            onMouseEnter={() => {
              isCardHoveredRef.current = true;
            }}
            onMouseLeave={() => {
              isCardHoveredRef.current = false;
            }}
            style={{
              '--w': `${width}px`,
              '--h': `${height}px`,
              '--translateZ': `${translateZ}px`,
              width: 'var(--w)',
              height: 'var(--h)',
              zIndex: 2,
            }}
          >
            {SECURITY_CARDS.map((card, index) => {
              const color = card.color || '142, 249, 252';
              const isActive = activeCardIndex === index;
              const IconComponent = ICON_MAP[card.icon] || ShieldCheck;

              return (
                /* Individual Card 3D Column Anchor */
                <div
                  key={card.id ?? index}
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl preserve-3d transition-all duration-300 pointer-events-auto group"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isActive) {
                      setActiveCardIndex(null);
                    } else {
                      bringCardToFront(index);
                    }
                  }}
                  style={{
                    transform: `rotateY(${cardAngleStep * index}deg) translateZ(var(--translateZ))`,
                    zIndex: isActive ? 100 : 1,
                  }}
                >
                  {/* Card Container: Zoom & Float on Active */}
                  <div
                    className={`w-full h-full rounded-2xl sm:rounded-3xl preserve-3d relative transition-all duration-400 ease-out cursor-pointer ${isActive
                      ? 'scale-[1.35] sm:scale-[1.38] md:scale-[1.40] -translate-y-5 sm:-translate-y-6'
                      : 'scale-100 translate-y-0 group-hover:scale-[1.04]'
                      }`}
                  >
                    {/* 1. FRONT FACE (Facing Viewer) */}
                    <div
                      className={`absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-xl flex flex-col justify-between backface-hidden transition-all duration-300 ${isActive ? 'p-4 sm:p-5 md:p-6' : 'p-3 sm:p-4 md:p-5'
                        }`}
                      style={{
                        transform: 'translateZ(1px)',
                        background: isActive
                          ? `linear-gradient(180deg, rgba(255, 255, 255, 0.99) 0%, rgba(255, 255, 255, 0.95) 55%, rgba(${color}, 0.55) 100%)`
                          : `linear-gradient(180deg, rgba(255, 255, 255, 0.93) 0%, rgba(255, 255, 255, 0.86) 50%, rgba(${color}, 0.35) 100%)`,
                        border: isActive
                          ? `2.5px solid rgba(${color}, 1)`
                          : `1.5px solid rgba(${color}, 0.85)`,
                        boxShadow: isActive
                          ? `0 25px 60px -15px rgba(0, 0, 0, 0.25), 0 0 35px rgba(${color}, 0.75)`
                          : `0 8px 20px -6px rgba(0, 0, 0, 0.05), 0 0 12px rgba(${color}, 0.35)`,
                      }}
                    >
                      {/* Header: Number & Icon */}
                      <div className="flex items-center justify-between z-10 relative">
                        <span
                          className="px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold tracking-wider backdrop-blur-md shadow-xs border transition-colors duration-300"
                          style={{
                            backgroundColor: isActive ? '#0f172a' : 'rgba(255, 255, 255, 0.95)',
                            borderColor: `rgba(${color}, 0.9)`,
                            color: isActive ? '#ffffff' : '#0f172a',
                          }}
                        >
                          {card.num}
                        </span>

                        <div
                          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg sm:rounded-xl flex items-center justify-center backdrop-blur-md shadow-xs border transition-all duration-300"
                          style={{
                            backgroundColor: isActive ? `rgba(${color}, 0.3)` : 'rgba(255, 255, 255, 0.95)',
                            borderColor: `rgba(${color}, 0.9)`,
                            color: '#0f172a',
                            transform: isActive ? 'rotate(8deg) scale(1.15)' : 'none',
                          }}
                        >
                          <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-900" />
                        </div>
                      </div>

                      {/* Body: Center-Aligned Title & Smooth Scrollable Description */}
                      <div className="my-auto z-10 flex flex-col gap-1.5 sm:gap-2 text-center items-center flex-1 justify-center py-1 overflow-hidden">
                        <div className="flex items-center justify-center gap-1 border-b border-slate-900/10 pb-1 w-full flex-shrink-0">
                          <h3
                            className={`font-extrabold text-slate-950 tracking-tight leading-snug group-hover:text-black transition-all duration-200 text-center ${isActive
                              ? 'text-xs sm:text-sm'
                              : 'text-[11px] sm:text-xs line-clamp-1'
                              }`}
                          >
                            {card.title}
                          </h3>
                          {isActive && <Sparkles className="w-3 h-3 text-amber-500 animate-pulse flex-shrink-0" />}
                        </div>

                        {/* Description Container */}
                        <div
                          className={`w-full text-center transition-all duration-300 overflow-y-auto ${isActive
                            ? 'max-h-28 sm:max-h-36 md:max-h-none pr-1 scrollbar-custom touch-pan-y'
                            : 'max-h-16 sm:max-h-24 md:max-h-28 overflow-hidden'
                            }`}
                          style={{
                            WebkitOverflowScrolling: 'touch',
                          }}
                        >
                          <p
                            className={`text-slate-800 leading-relaxed font-normal transition-all duration-300 antialiased text-center ${isActive
                              ? 'text-[10px] sm:text-[10.5px] md:text-[11px] line-clamp-none opacity-100'
                              : 'text-[9px] sm:text-[9.5px] md:text-[10px] line-clamp-4 sm:line-clamp-5 opacity-90'
                              }`}
                            style={{
                              textAlign: 'center',
                              textWrap: 'balance',
                            }}
                          >
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 2. BACK FACE (Facing Inward / Rear of Ring) */}
                    <div
                      className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-md flex flex-col items-center justify-between p-3.5 sm:p-4 md:p-5 backface-hidden transition-all duration-300"
                      style={{
                        transform: 'rotateY(180deg) translateZ(1px)',
                        border: isActive ? `2.5px solid rgba(${color}, 1)` : `2px solid rgba(${color}, 0.75)`,
                        boxShadow: isActive
                          ? `0 25px 60px -15px rgba(0, 0, 0, 0.2), 0 0 35px rgba(${color}, 0.7)`
                          : `0 0 20px rgba(${color}, 0.35)`,
                        background: isActive
                          ? `radial-gradient(circle, rgba(255, 255, 255, 0.65) 0%, rgba(${color}, 0.55) 60%, rgba(${color}, 0.9) 100%)`
                          : `radial-gradient(circle, rgba(255, 255, 255, 0.45) 0%, rgba(${color}, 0.4) 60%, rgba(${color}, 0.75) 100%)`,
                      }}
                    >
                      <div className="w-full flex justify-between items-center opacity-80">
                        <span className="font-mono text-[9px] sm:text-[10px] font-bold text-slate-700">{card.num}</span>
                        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700" />
                      </div>

                      {/* Glowing center depth disk */}
                      <div className={`rounded-full bg-white/50 blur-md pointer-events-none transition-all duration-300 ${isActive ? 'w-12 h-12 sm:w-16 sm:h-16 scale-125' : 'w-8 h-8 sm:w-12 sm:h-12'}`} />

                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-800 tracking-tight truncate max-w-full text-center">
                        {card.title}
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Controls with Prev & Next Buttons */}
        <div className="relative z-30 mt-14 sm:mt-20 md:mt-24 flex items-center gap-3 bg-white/95 backdrop-blur-xl border border-slate-200/90 px-4 py-2 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          {/* Prev Card Button */}
          <button
            type="button"
            onClick={rotatePrev}
            title="Previous Card"
            className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Next Card Button */}
          <button
            type="button"
            onClick={rotateNext}
            title="Next Card"
            className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Quick Card Selection Pills */}
        <div className="relative z-30 mt-5 sm:mt-7 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-3xl px-4">
          {SECURITY_CARDS.map((card, idx) => {
            const isActive = activeCardIndex === idx;
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => bringCardToFront(idx)}
                className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-[10px] sm:text-[11px] font-semibold transition-all duration-200 cursor-pointer ${isActive
                  ? 'bg-slate-900 text-white shadow-md scale-105 font-bold'
                  : 'bg-white/80 hover:bg-white text-slate-700 hover:text-slate-950 border border-slate-200/80 shadow-xs'
                  }`}
              >
                {card.num} {card.tag || card.title.split(' ')[0]}
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}


