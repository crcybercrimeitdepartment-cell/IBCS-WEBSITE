import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { servicesList } from './UIUXDesignServicesPageData.js';

/* ========================================================================== */
/* 1. WEB AUDIO MECHANICAL KEYBOARD CLICK SYNTHESIZER                        */
/* ========================================================================== */
class MechanicalSoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playKeyClick(pitchModifier = 1.0) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const t = this.ctx.currentTime;
      
      // Initial crisp snap (transient)
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(650 * pitchModifier, t);
      osc.frequency.exponentialRampToValueAtTime(120, t + 0.04);

      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.045);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.05);

      // Thock bottom-out resonance
      const thock = this.ctx.createOscillator();
      const thockGain = this.ctx.createGain();
      
      thock.type = 'sine';
      thock.frequency.setValueAtTime(160 * pitchModifier, t);
      thock.frequency.exponentialRampToValueAtTime(60, t + 0.07);

      thockGain.gain.setValueAtTime(0.4, t);
      thockGain.gain.exponentialRampToValueAtTime(0.001, t + 0.07);

      thock.connect(thockGain);
      thockGain.connect(this.ctx.destination);

      thock.start(t);
      thock.stop(t + 0.08);

    } catch (e) {
      // Audio autoplay policy fallback
    }
  }
}

const soundEngine = new MechanicalSoundEngine();

/* ========================================================================== */
/* 2. DYNAMIC ICON COMPONENT (LUCIDE ICONS RESOLVER)                         */
/* ========================================================================== */
const DynamicIcon = ({ name, size = 18, className = '' }) => {
  const IconComponent = Icons[name] || Icons.Sparkles;
  return <IconComponent size={size} className={className} />;
};

/* ========================================================================== */
/* 3. GEAR WHEEL & HARDWARE MATH HELPERS                                     */
/* ========================================================================== */
function createGearWheelPath(cx = 300, cy = 282, rInner = 162, rRoot = 196, rTip = 246, numTeeth = 12) {
  const anglePerTooth = 360 / numTeeth;
  const toothWidth = 8;
  const rootWidth = 11;

  let path = '';

  for (let i = 0; i < numTeeth; i++) {
    const centerAngle = i * anglePerTooth;

    const a1 = (centerAngle - rootWidth) * (Math.PI / 180);
    const a2 = (centerAngle - toothWidth) * (Math.PI / 180);
    const a3 = (centerAngle + toothWidth) * (Math.PI / 180);
    const a4 = (centerAngle + rootWidth) * (Math.PI / 180);

    const x1 = cx + rRoot * Math.cos(a1);
    const y1 = cy + rRoot * Math.sin(a1);

    const x2 = cx + rTip * Math.cos(a2);
    const y2 = cy + rTip * Math.sin(a2);

    const x3 = cx + rTip * Math.cos(a3);
    const y3 = cy + rTip * Math.sin(a3);

    const x4 = cx + rRoot * Math.cos(a4);
    const y4 = cy + rRoot * Math.sin(a4);

    if (i === 0) {
      path += `M ${x1.toFixed(2)} ${y1.toFixed(2)} `;
    } else {
      path += `L ${x1.toFixed(2)} ${y1.toFixed(2)} `;
    }

    path += `L ${x2.toFixed(2)} ${y2.toFixed(2)} `;
    path += `L ${x3.toFixed(2)} ${y3.toFixed(2)} `;
    path += `L ${x4.toFixed(2)} ${y4.toFixed(2)} `;
  }

  path += 'Z ';

  // Inner circular cutout
  path += `M ${cx + rInner} ${cy} A ${rInner} ${rInner} 0 1 0 ${cx - rInner} ${cy} A ${rInner} ${rInner} 0 1 0 ${cx + rInner} ${cy} Z`;

  return path;
}

function createToothAccents(cx = 300, cy = 282, rAccent = 222, numTeeth = 12) {
  const dots = [];
  const anglePerTooth = 360 / numTeeth;
  for (let i = 0; i < numTeeth; i++) {
    const angle = i * anglePerTooth * (Math.PI / 180);
    dots.push({
      x: cx + rAccent * Math.cos(angle),
      y: cy + rAccent * Math.sin(angle),
    });
  }
  return dots;
}

/* ========================================================================== */
/* 4. REALISTIC MECHANICAL KEYBOARD & ROTATING GEAR DECK                     */
/* ========================================================================== */
const RealisticDevLogo = ({
  services = [],
  selectedServiceId = 1,
  onSelectService,
  size = '100%',
  className = '',
  soundEnabled = true,
  children,
}) => {
  const [pressedKeyId, setPressedKeyId] = useState(null);

  const gearWheelPath = useMemo(() => createGearWheelPath(300, 282, 162, 196, 246, 12), []);
  const toothAccents = useMemo(() => createToothAccents(300, 282, 222, 12), []);

  const handleKeyClick = (service) => {
    setPressedKeyId(service.id);
    if (soundEnabled) {
      soundEngine.playKeyClick(0.95);
    }
    if (onSelectService) onSelectService(service);
    setTimeout(() => setPressedKeyId(null), 150);
  };

  // Build the 59 key layout coordinates (5 rows: 12, 12, 12, 12, 11)
  const keyLayout = useMemo(() => {
    const rows = [12, 12, 12, 12, 11];
    let serviceIndex = 0;
    const layout = [];

    rows.forEach((numInRow, rowIndex) => {
      for (let colIndex = 0; colIndex < numInRow; colIndex++) {
        const service = services[serviceIndex];
        if (!service) break;

        const isSpaceKey = rowIndex === 4 && colIndex === 5;
        layout.push({
          service,
          rowIndex,
          colIndex,
          isSpaceKey,
        });

        serviceIndex++;
      }
    });

    return layout;
  }, [services]);

  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg
        viewBox="0 0 600 520"
        width={size}
        height={typeof size === 'number' ? (size * 520) / 600 : size}
        className="select-none block w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Strict Clip Path: Only shows strictly above keyboard baseline (y <= 282) */}
          <clipPath id="topGearArchClip">
            <rect x="0" y="0" width="600" height="282" />
          </clipPath>

          {/* Master 3D Shadow for Chassis & Gear */}
          <filter id="masterShadow" x="-15%" y="-15%" width="130%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#0f172a" floodOpacity="0.25" />
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0891b2" floodOpacity="0.16" />
          </filter>

          {/* Electric Cyan Rim Glow */}
          <filter id="gearTitaniumCyanGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="6" stdDeviation="14" floodColor="#06b6d4" floodOpacity="0.4" />
            <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#22d3ee" floodOpacity="0.3" />
          </filter>

          {/* Gradients */}
          <linearGradient id="gearTitaniumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="35%" stopColor="#1e293b" />
            <stop offset="70%" stopColor="#334155" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="gearCyanRimHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          <linearGradient id="chassisCyanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="30%" stopColor="#0e7490" />
            <stop offset="70%" stopColor="#155e75" />
            <stop offset="100%" stopColor="#0c4a6e" />
          </linearGradient>

          <linearGradient id="switchPlateCyan" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f2838" />
            <stop offset="50%" stopColor="#081f2c" />
            <stop offset="100%" stopColor="#04121a" />
          </linearGradient>

          <linearGradient id="domeInnerGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="85%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
        </defs>

        {/* 1. TITANIUM & CYAN CLOCKWISE ROTATING SETTINGS GEAR */}
        <g filter="url(#gearTitaniumCyanGlow)" className="anim-load-gear">
          <g clipPath="url(#topGearArchClip)">
            
            {/* The Rotating Gear Wheel (Math Center: 300, 282) */}
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 300 282"
                to="360 300 282"
                dur="28s"
                repeatCount="indefinite"
              />

              <path
                d={gearWheelPath}
                fill="url(#gearTitaniumGradient)"
                fillRule="evenodd"
              />

              {/* Concentric Precision Hardware Rings */}
              <circle
                cx="300"
                cy="282"
                r="180"
                stroke="url(#gearCyanRimHighlight)"
                strokeWidth="2.5"
                strokeDasharray="12 8"
                opacity="0.85"
                fill="none"
              />
              <circle
                cx="300"
                cy="282"
                r="170"
                stroke="#22d3ee"
                strokeWidth="1.2"
                opacity="0.5"
                fill="none"
              />
              <circle
                cx="300"
                cy="282"
                r="192"
                stroke="#0ea5e9"
                strokeWidth="1"
                strokeDasharray="4 6"
                opacity="0.6"
                fill="none"
              />

              {/* Glowing Cyan LED Accent Dots */}
              {toothAccents.map((dot, idx) => (
                <g key={idx} className="anim-load-led" style={{ animationDelay: `${0.32 + idx * 0.04}s` }}>
                  <circle
                    cx={dot.x.toFixed(2)}
                    cy={dot.y.toFixed(2)}
                    r="4.5"
                    fill="#06b6d4"
                    opacity="0.4"
                  />
                  <circle
                    cx={dot.x.toFixed(2)}
                    cy={dot.y.toFixed(2)}
                    r="2.8"
                    fill="#38bdf8"
                    opacity="0.95"
                  />
                  <circle
                    cx={dot.x.toFixed(2)}
                    cy={dot.y.toFixed(2)}
                    r="1.2"
                    fill="#ffffff"
                    opacity="1"
                  />
                </g>
              ))}
            </g>

            {/* Inner White Dome Cutout Area */}
            <path
              d="M 138 282 A 162 162 0 0 1 462 282 Z"
              fill="url(#domeInnerGlow)"
              stroke="#e2e8f0"
              strokeWidth="2"
            />

            {/* Subtle Dome Inner Rim Accent */}
            <path
              d="M 144 282 A 156 156 0 0 1 456 282"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              opacity="0.3"
            />
          </g>
        </g>

        {/* 2. REALISTIC 3D MECHANICAL KEYBOARD HOUSING CHASSIS */}
        <g filter="url(#masterShadow)">
          {/* Main Chassis Body */}
          <rect
            x="35"
            y="282"
            width="530"
            height="224"
            rx="22"
            ry="22"
            fill="url(#chassisCyanGradient)"
          />

          {/* Top Chassis Beveled Edge Highlight */}
          <path
            d="M 57 282 L 543 282"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Recessed Aluminum Switch Bed Plate */}
          <rect
            x="46"
            y="290"
            width="508"
            height="208"
            rx="14"
            fill="url(#switchPlateCyan)"
            stroke="#0e7490"
            strokeWidth="1.5"
          />

          {/* Cyan Ambient Backlight Channel */}
          <rect
            x="49"
            y="293"
            width="502"
            height="202"
            rx="12"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="0.8"
            strokeDasharray="16 12"
            opacity="0.45"
          />
        </g>
      </svg>

      {/* 3. STATIONARY SHOWCASE INSIDE THE WHITE DOME */}
      {children && (
        <div 
          className="absolute inset-x-0 pointer-events-auto overflow-hidden flex flex-col justify-between anim-load-dome"
          style={{
            top: '23.1%',
            bottom: '45.8%',
            left: '23.0%',
            right: '23.0%',
            clipPath: 'ellipse(50% 100% at 50% 100%)',
          }}
        >
          {children}
        </div>
      )}

      {/* 4. ALL 59 REALISTIC 3D MINI MECHANICAL KEYCAPS */}
      <div 
        className="absolute inset-x-0 bottom-0 pointer-events-auto flex flex-col items-center justify-center"
        style={{
          top: '56.5%',
          bottom: '5.0%',
          left: '8.8%',
          right: '8.8%',
        }}
      >
        <div className="flex flex-col justify-between w-full h-full gap-[1.5px] xs:gap-[2px] sm:gap-1 md:gap-1.5">
          {[0, 1, 2, 3, 4].map((rowIndex) => {
            const rowKeys = keyLayout.filter((item) => item.rowIndex === rowIndex);

            return (
              <div key={rowIndex} className="flex items-center justify-between gap-[1px] xs:gap-[1.5px] sm:gap-1 md:gap-1.5 w-full flex-1">
                {rowKeys.map(({ service, isSpaceKey }, colIndex) => {
                  const isSelected = selectedServiceId === service.id;
                  const isPressed = pressedKeyId === service.id;

                  return (
                    <button
                      key={service.id}
                      onClick={() => handleKeyClick(service)}
                      style={{
                        animationDelay: `${0.26 + rowIndex * 0.07 + (colIndex % 6) * 0.02}s`,
                      }}
                      className={`anim-load-keycap group relative flex flex-col items-center justify-between p-[0.5px] xs:p-[1px] sm:p-0.5 md:p-1 rounded-[2.5px] xs:rounded-[3px] sm:rounded-[5px] md:rounded-[6px] transition-all duration-150 select-none h-full cursor-pointer overflow-hidden touch-manipulation ${
                        isSpaceKey ? 'flex-[2.1]' : 'flex-1'
                      } ${
                        isPressed || isSelected
                          ? 'bg-gradient-to-b from-cyan-300 via-cyan-400 to-cyan-500 text-slate-950 translate-y-[1px] shadow-[0_1px_0_0_#0e7490,0_0_8px_rgba(34,211,238,0.7)] ring-1 sm:ring-1.5 ring-white scale-[1.02] z-10'
                          : 'bg-gradient-to-b from-white via-slate-50 to-slate-200 text-slate-800 hover:text-cyan-600 hover:from-white hover:to-cyan-50 border border-slate-300/80 shadow-[0_1px_0_0_#94a3b8] sm:shadow-[0_2px_0_0_#94a3b8] hover:shadow-[0_2px_0_0_#06b6d4] hover:-translate-y-[1px] active:scale-95'
                      }`}
                      aria-label={`Key ${service.id}: ${service.name}`}
                    >
                      {/* Top Bar on Key: Micro Index & Switch Pip */}
                      <div className="flex items-center justify-between w-full px-0.5 leading-none">
                        <span className={`text-[3.5px] xs:text-[4px] sm:text-[5px] md:text-[6px] font-mono font-semibold tracking-tighter ${
                          isSelected ? 'text-slate-950 opacity-90' : 'text-slate-400 group-hover:text-cyan-700'
                        }`}>
                          {service.id < 10 ? `0${service.id}` : service.id}
                        </span>

                        {/* Glowing Active Status LED Pip */}
                        <span className={`w-0.5 h-0.5 xs:w-1 xs:h-1 rounded-full transition-colors ${
                          isSelected 
                            ? 'bg-slate-950 shadow-[0_0_3px_#0891b2]' 
                            : isSpaceKey 
                              ? 'bg-cyan-500 opacity-60' 
                              : 'bg-transparent group-hover:bg-cyan-400'
                        }`} />
                      </div>

                      {/* Middle: Icon According to Heading Name */}
                      <div className={`my-auto transition-transform duration-150 flex items-center justify-center ${
                        isSelected 
                          ? 'text-slate-950 scale-110 drop-shadow-sm' 
                          : 'text-cyan-800 group-hover:text-cyan-600 group-hover:scale-110'
                      }`}>
                        <DynamicIcon 
                          name={service.iconName} 
                          size={isSpaceKey ? 13 : 11}
                          className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3"
                        />
                      </div>

                      {/* Bottom: Heading Name Short Label Printed on Keycap (Desktop / Tablet) */}
                      <div className="hidden sm:block w-full text-center px-0.5 leading-none mt-0.5">
                        <span className={`block text-[4.5px] sm:text-[5.5px] md:text-[6px] font-black uppercase tracking-tight truncate ${
                          isSelected 
                            ? 'text-slate-950 font-extrabold' 
                            : 'text-slate-600 group-hover:text-cyan-900'
                        }`}>
                          {isSpaceKey ? `— ${service.shortLabel} —` : service.shortLabel}
                        </span>
                      </div>

                      {/* Subtle LED Underglow Glow Effect on hover */}
                      <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 pointer-events-none transition-colors duration-200" />
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ========================================================================== */
/* 5. MAIN APPLICATION COMPONENT                                             */
/* ========================================================================== */
export function App({ onClose, onHome }) {
  const handleBack = () => {
    if (onClose) onClose();
    else window.history.back();
  };

  const handleHome = () => {
    if (onHome) onHome();
    else if (onClose) onClose();
    else window.location.hash = '#home';
  };

  const [selectedService, setSelectedService] = useState(servicesList[0]);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  // Navigate to previous service
  const handlePrev = useCallback(() => {
    const currentIndex = servicesList.findIndex((s) => s.id === selectedService.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : servicesList.length - 1;
    setSelectedService(servicesList[prevIndex]);
    soundEngine.playKeyClick(0.9);
  }, [selectedService]);

  // Navigate to next service
  const handleNext = useCallback(() => {
    const currentIndex = servicesList.findIndex((s) => s.id === selectedService.id);
    const nextIndex = currentIndex < servicesList.length - 1 ? currentIndex + 1 : 0;
    setSelectedService(servicesList[nextIndex]);
    soundEngine.playKeyClick(1.05);
  }, [selectedService]);

  // Select specific service
  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  // Keyboard controls listener (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch swipe gestures for mobile phone skin view
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Detect horizontal swipe (at least 35px threshold, dominant X motion)
    if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div className="min-h-[100dvh] w-full bg-[#f8fafc] text-slate-900 flex flex-col items-center justify-start p-3 xs:p-4 sm:p-6 md:p-8 select-none overflow-x-hidden font-sans selection:bg-cyan-500 selection:text-white pt-4 pb-28">
      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 flex items-center justify-start gap-3 z-40 relative anim-load-nav">
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

      {/* Inline styles for custom animations and scrollbar behavior */}
      <style>{`
        /* ── 1. Top Navigation Slide In ── */
        @keyframes loadNavSlide {
          0% {
            opacity: 0;
            transform: translateY(-16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── 2. Page Header Entrance ── */
        @keyframes loadHeaderEntrance {
          0% {
            opacity: 0;
            transform: translateY(-22px) scale(0.96);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }

        /* ── 3. Main Center Deck Lifting ── */
        @keyframes loadDeckLift {
          0% {
            opacity: 0;
            transform: translateY(42px) scale(0.94);
            filter: blur(6px);
          }
          70% {
            opacity: 1;
            transform: translateY(-3px) scale(1.008);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }

        /* ── 4. Gear Entrance ── */
        @keyframes loadGearReveal {
          0% {
            opacity: 0;
            transform: translateY(28px) scale(0.85);
            filter: blur(10px);
          }
          60% {
            opacity: 0.95;
            transform: translateY(-3px) scale(1.02);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }

        /* ── 5. Cyan LED Accent Dots Flare ── */
        @keyframes loadLedFlare {
          0% {
            opacity: 0;
            transform: scale(0.2);
          }
          55% {
            opacity: 1;
            transform: scale(1.45);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* ── 6. Dome Center Content Bloom ── */
        @keyframes loadDomeBloom {
          0% {
            opacity: 0;
            transform: scale(0.85);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }
        }

        /* ── 7. Mechanical Keycaps Cascade Pop-In ── */
        @keyframes loadKeycapPop {
          0% {
            opacity: 0;
            transform: translateY(14px) scale(0.72);
          }
          68% {
            opacity: 1;
            transform: translateY(-2.5px) scale(1.08);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* ── 8. Mobile Card Slide Up ── */
        @keyframes loadMobileCardSlide {
          0% {
            opacity: 0;
            transform: translateY(32px) scale(0.94);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }

        /* Trigger classes with cubic-bezier easing */
        .anim-load-nav {
          animation: loadNavSlide 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
        }
        .anim-load-header {
          animation: loadHeaderEntrance 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
        }
        .anim-load-deck {
          animation: loadDeckLift 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both;
        }
        .anim-load-gear {
          transform-origin: 300px 282px;
          animation: loadGearReveal 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.22s both;
        }
        .anim-load-led {
          transform-origin: center;
          transform-box: fill-box;
          animation: loadLedFlare 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .anim-load-dome {
          animation: loadDomeBloom 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.38s both;
        }
        .anim-load-keycap {
          animation: loadKeycapPop 0.52s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .anim-load-mobile-card {
          animation: loadMobileCardSlide 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(3px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Main Page Top Header: Attractive Gradient Heading & Description */}
      <div className="w-full max-w-4xl text-center mb-3 sm:mb-6 px-3 anim-load-header">
        {/* Hero Heading with Cyan Gradient Color */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight mb-2 sm:mb-2.5">
          UI/UX <span className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-sky-600 bg-clip-text text-transparent drop-shadow-xs">Design</span>
        </h1>

        {/* Clear, Engaging Subtitle Description */}
        <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          IBCS UI/UX Design focuses on crafting intuitive, user-centered digital interfaces that blend functional simplicity with modern visual elegance. We conduct user research, wireframing, and interactive prototyping to deliver engaging digital experiences.
        </p>
      </div>

      {/* Main Center Realistic Keyboard App Deck & Rotating Titanium & Cyan Gear */}
      <div 
        className="w-full max-w-5xl flex flex-col items-center justify-center my-auto py-1 xs:py-2 sm:py-3 anim-load-deck"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <RealisticDevLogo
          services={servicesList}
          selectedServiceId={selectedService.id}
          onSelectService={handleSelectService}
          className="w-full max-w-[840px] md:max-w-[940px] lg:max-w-[1040px] h-auto drop-shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
        >
          {/* Dynamic Content Displayed in White Dome for Selected Service */}
          <div 
            key={selectedService.id}
            className="h-full w-full select-text pointer-events-auto transition-all duration-200 animate-fadeIn"
          >
            {/* ======================================================== */}
            {/* MOBILE VIEW (< sm): Clean, Non-Clipped Iconic Showcase   */}
            {/* ======================================================== */}
            <div className="sm:hidden h-full w-full flex flex-col justify-between items-center text-center pt-2 pb-1.5 px-3">
              {/* Category Micro Badge */}
              <div className="shrink-0 pt-0.5">
                <span className="text-[6.5px] xs:text-[7px] font-mono font-bold uppercase tracking-wider text-cyan-700 block leading-none">
                  {selectedService.category}
                </span>
              </div>

              {/* Center: Icon & Non-Clipped Heading Title */}
              <div className="flex-1 flex flex-col items-center justify-center my-auto px-1 max-w-[130px]">
                <div className="text-cyan-600 mb-0.5 flex items-center justify-center">
                  <DynamicIcon name={selectedService.iconName} size={15} />
                </div>
                <h2 className="font-extrabold text-[8px] xs:text-[9px] text-slate-900 tracking-tight leading-tight line-clamp-2">
                  {selectedService.name}
                </h2>
              </div>

              {/* Bottom Baseline Navigation Controls */}
              <div className="shrink-0 flex items-center justify-center gap-2 pb-1 pt-0.5 select-none w-full">
                <button
                  onClick={handlePrev}
                  className="w-4 h-4 xs:w-4.5 xs:h-4.5 rounded-full bg-slate-100 hover:bg-cyan-100 border border-slate-300 text-slate-700 hover:text-cyan-800 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-90 touch-manipulation"
                  title="Previous Heading"
                >
                  <ChevronLeft size={10} />
                </button>

                <span className="text-[7.5px] xs:text-[8px] font-mono font-semibold text-slate-400">
                  {selectedService.id < 10 ? `0${selectedService.id}` : selectedService.id} / 59
                </span>

                <button
                  onClick={handleNext}
                  className="w-4 h-4 xs:w-4.5 xs:h-4.5 rounded-full bg-slate-100 hover:bg-cyan-100 border border-slate-300 text-slate-700 hover:text-cyan-800 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-90 touch-manipulation"
                  title="Next Heading"
                >
                  <ChevronRight size={10} />
                </button>
              </div>
            </div>

            {/* ======================================================== */}
            {/* DESKTOP / TABLET VIEW (>= sm): Full, Centered & No Side Clipping */}
            {/* ======================================================== */}
            <div className="hidden sm:flex h-full w-full flex-col justify-between items-center text-center pt-2.5 md:pt-3 pb-1 md:pb-1.5 px-4 sm:px-6">
              {/* Top: Category Badge & Heading Title */}
              <div className="shrink-0 flex flex-col items-center w-full px-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-100/70 border border-cyan-300/60 text-[8px] md:text-[8.5px] font-mono font-bold uppercase tracking-widest text-cyan-800 shadow-2xs mb-1">
                  {selectedService.category}
                </span>
                <h2 className="font-extrabold text-[13px] sm:text-[14px] md:text-[15.5px] text-slate-900 tracking-tight leading-snug max-w-[280px] md:max-w-[320px]">
                  {selectedService.name}
                </h2>
              </div>

              {/* Middle: Complete Official IBCS Description (Fitted cleanly with side margins so no words cut) */}
              <div className="flex-1 min-h-0 w-full overflow-y-auto no-scrollbar my-0.5 px-3 sm:px-5 flex items-center justify-center max-w-[340px] sm:max-w-[360px] md:max-w-[380px]">
                <p className="text-[10px] sm:text-[10.5px] md:text-[11.2px] text-slate-700 leading-relaxed font-normal select-text text-center">
                  {selectedService.desc}
                </p>
              </div>

              {/* Bottom: Crisp Baseline Navigation Controls */}
              <div className="shrink-0 flex items-center justify-center gap-2.5 pb-1 select-none w-full">
                <button
                  onClick={handlePrev}
                  className="w-6.5 h-6.5 md:w-7 md:h-7 rounded-full bg-slate-100 hover:bg-cyan-100 border border-slate-300 text-slate-700 hover:text-cyan-800 flex items-center justify-center transition-all cursor-pointer shadow-xs hover:shadow-sm active:scale-95 touch-manipulation"
                  title="Previous Heading"
                >
                  <ChevronLeft size={13} />
                </button>

                <span className="text-[9.5px] sm:text-[10px] md:text-[10.5px] font-mono font-bold text-slate-500">
                  {selectedService.id < 10 ? `0${selectedService.id}` : selectedService.id} / 59
                </span>

                <button
                  onClick={handleNext}
                  className="w-6.5 h-6.5 md:w-7 md:h-7 rounded-full bg-slate-100 hover:bg-cyan-100 border border-slate-300 text-slate-700 hover:text-cyan-800 flex items-center justify-center transition-all cursor-pointer shadow-xs hover:shadow-sm active:scale-95 touch-manipulation"
                  title="Next Heading"
                >
                  <ChevronRight size={13} />
                </button>
              </div>
            </div>

          </div>
        </RealisticDevLogo>

        {/* Dynamic Mobile Active Service Card (Phone Skin View) */}
        <div className="sm:hidden w-full max-w-[420px] mt-2.5 px-1 anim-load-mobile-card">
          <div className="bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 p-3 shadow-md">
            <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-4.5 h-4.5 rounded-md bg-cyan-100/80 border border-cyan-300/80 text-cyan-900 flex items-center justify-center font-mono text-[9px] font-bold">
                  {selectedService.id < 10 ? `0${selectedService.id}` : selectedService.id}
                </span>
                <span className="text-[8.5px] font-bold text-cyan-700 uppercase tracking-wider">
                  {selectedService.category}
                </span>
              </div>
              <span className="text-[8px] text-slate-400 font-mono">
                Tap keys or swipe ⇄
              </span>
            </div>

            <h3 className="font-extrabold text-[12px] text-slate-900 leading-snug mb-1">
              {selectedService.name}
            </h3>

            <p 
              className="text-[10px] xs:text-[10.5px] text-slate-600 leading-relaxed font-normal select-text text-justify"
              style={{
                textAlign: 'justify',
                textJustify: 'inter-word',
              }}
            >
              {selectedService.desc}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
