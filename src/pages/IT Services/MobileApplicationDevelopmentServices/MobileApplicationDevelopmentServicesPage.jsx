import React, { useState, useEffect, useRef } from 'react';
import { Wifi, ChevronLeft, ChevronRight, Home, Play, Pause } from 'lucide-react';
import { mobileAppDevelopmentServicesData } from './MobileApplicationDevelopmentServicesPageData';

export default function MobileApplicationDevelopmentServices({ onClose, onHome }) {
  const [time, setTime] = useState('11:45');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenAnimationState, setScreenAnimationState] = useState('idle'); // 'idle' | 'closing' | 'opening'
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const screenStateRef = useRef(screenAnimationState);
  useEffect(() => {
    screenStateRef.current = screenAnimationState;
  }, [screenAnimationState]);

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

  const services = mobileAppDevelopmentServicesData?.services || [];
  const total = services.length;
  const currentService = services[currentIndex] || {};

  // Set document title
  useEffect(() => {
    document.title = "Mobile Application Development Services - IBCS IT Services";
  }, []);

  // CRT Screen Turn Off & Turn On Cycle (Exact Video Match)
  const triggerScreenCycle = (direction) => {
    if (screenAnimationState !== 'idle') return; // debounce during transition

    setScreenAnimationState('closing');

    // Smooth closing phase: screen collapses into line & fades to black (380ms):
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prev) => (prev + 1) % total);
      } else {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
      }
      setScreenAnimationState('opening');

      // Smooth opening phase: screen expands into full display (420ms):
      setTimeout(() => {
        setScreenAnimationState('idle');
      }, 420);
    }, 380);
  };

  const handleNext = () => triggerScreenCycle('next');
  const handlePrev = () => triggerScreenCycle('prev');

  // Auto-play content cycle
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const timer = setInterval(() => {
      if (screenStateRef.current === 'idle') {
        triggerScreenCycle('next');
      }
    }, 5200);

    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlay, isHovered, total]);

  // Live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation support (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') triggerScreenCycle('next');
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') triggerScreenCycle('prev');
      if (e.key === ' ' || e.key === 'k') {
        e.preventDefault();
        setIsAutoPlay((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [total, screenAnimationState]);

  return (
    <div className="mobile-page-root min-h-screen relative w-full bg-white flex flex-col items-center justify-start pb-24 pt-3">
      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-3 flex items-center justify-start gap-3 z-30 relative">
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

      {/* Page Header */}
      <header className="w-full max-w-4xl mx-auto text-center px-4 sm:px-6 mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081E52] tracking-tight mb-2">
          Mobile Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500">Development</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          IBCS Mobile Application Development focuses on building intuitive, high-performance, and secure mobile applications for iOS, Android, and cross-platform environments. We create user-centric digital experiences that enable organisations to engage users, streamline operations, and extend digital services on mobile devices.
        </p>
      </header>

      <style>{`
        .mobile-page-root {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          margin: 0;
          padding: 12px 16px 80px;
          box-sizing: border-box;
          overflow-x: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
          user-select: none;
          -webkit-user-select: none;
        }

        /* ─── DYNAMIC PROPORTIONAL RESPONSIVE SCALING ENGINE ─── */
        :root {
          /* Scale smoothly based on both viewport width and viewport height */
          --vh-target: 84vh;
          --vw-target: calc((100vw - 32px) * 1.05);
          --base-h: min(695px, var(--vh-target), var(--vw-target));
          --phone-w: calc(var(--base-h) / 2.05);
          --phone-h: var(--base-h);

          /* Precision 3D Gear (Setting) Dimensions & Outward Interlocking Alignment */
          --gear-size: calc(var(--base-h) * 0.76);
          --gear-offset-x: calc(var(--phone-w) * 0.52);

          /* S Pen Dimensions & Authentic Hero Standing Posture */
          --spen-h: calc(var(--base-h) * 0.655);
          --spen-w: calc(var(--spen-h) * (40 / 480));
          --spen-tip-x: calc(var(--phone-w) * 0.24 + 10px);
          --spen-tilt: 12.4deg;

          /* Mathematically exact centering: balances combined bounding box of [S-Pen + Phone + Gear] */
          --stage-shift-x: calc(
            ((var(--gear-offset-x) + (var(--gear-size) / 2)) - 
             ((var(--phone-w) / 2) + var(--spen-tip-x))) / -2
          );
        }

        @supports (height: 100dvh) {
          :root {
            --vh-target: calc(86dvh - 16px);
          }
        }

        /* Responsive Breakpoint: Mobile screens (< 640px) */
        @media (max-width: 640px) {
          :root {
            --vw-target: calc((100vw - 22px) * 1.03);
            --gear-size: calc(var(--base-h) * 0.74);
            --gear-offset-x: calc(var(--phone-w) * 0.48);
            --spen-tip-x: calc(var(--phone-w) * 0.20 + 8px);
          }
        }

        /* Responsive Breakpoint: Ultra-narrow Phones (< 380px) */
        @media (max-width: 380px) {
          :root {
            --vw-target: calc((100vw - 16px) * 1.02);
            --gear-size: calc(var(--base-h) * 0.72);
            --gear-offset-x: calc(var(--phone-w) * 0.44);
            --spen-tip-x: calc(var(--phone-w) * 0.17 + 5px);
          }
        }

        /* Responsive Breakpoint: Short Landscape / Mobile Horizontal (< 540px height) */
        @media (max-height: 540px) {
          :root {
            --vh-target: calc(88vh - 12px);
          }
        }

        /* Master Stage Container (100% Centered on All Screens) */
        .stage-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: calc(var(--phone-h) + 60px);
          height: auto;
          transform: translateX(var(--stage-shift-x));
          transition: transform 0.25s ease-out;
          margin: 10px auto 40px;
          flex-shrink: 0;
        }

        /* ─── TITANIUM S PEN (HERO STANDING POSTURE ON LEFT SIDE) ─── */
        .spen-positioner {
          position: absolute;
          /* Anchored grounded at the baseline of the phone */
          bottom: calc(50% - (var(--phone-h) / 2));
          left: calc(50% - (var(--phone-w) / 2) - var(--spen-tip-x));
          width: var(--spen-w);
          height: var(--spen-h);
          transform-origin: bottom center;
          transform: rotate(var(--spen-tilt));
          z-index: 6;
          pointer-events: none;
          filter: drop-shadow(-4px 8px 18px rgba(0, 0, 0, 0.10));
          animation: spenEnterFromLeft 1.35s cubic-bezier(0.16, 1.06, 0.38, 1) 0.1s both;
        }

        /* Reload Entrance: Pen flies/glides in from left side and stands grounded in place */
        @keyframes spenEnterFromLeft {
          0% {
            transform: translateX(calc(-100vw * 0.35 - 120px)) rotate(calc(var(--spen-tilt) - 14deg));
            opacity: 0;
            filter: drop-shadow(-20px 8px 24px rgba(0, 0, 0, 0));
          }
          35% {
            opacity: 0.9;
          }
          82% {
            transform: translateX(3px) rotate(calc(var(--spen-tilt) + 1.2deg));
            opacity: 1;
            filter: drop-shadow(-4px 8px 18px rgba(0, 0, 0, 0.14));
          }
          100% {
            transform: translateX(0) rotate(var(--spen-tilt));
            opacity: 1;
            filter: drop-shadow(-4px 8px 18px rgba(0, 0, 0, 0.10));
          }
        }

        .spen-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        /* ─── 3D CNC STEEL GEAR (INTERLOCKING BEHIND PHONE) ─── */
        .gear-positioner {
          position: absolute;
          left: calc(50% + var(--gear-offset-x));
          top: 50%;
          width: var(--gear-size);
          height: var(--gear-size);
          z-index: 2;
          pointer-events: none;
          filter: drop-shadow(0 16px 32px rgba(0, 0, 0, 0.08));
          animation: gearEmergeFromBehind 1.4s cubic-bezier(0.16, 1.08, 0.38, 1) 0.2s both;
        }

        /* Reload Entrance: Emerges from inside (behind phone center) outward to the right */
        @keyframes gearEmergeFromBehind {
          0% {
            transform: translate(calc(-50% - var(--gear-offset-x)), -50%) scale(0.3) rotate(-130deg);
            opacity: 0;
            filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
          }
          30% {
            opacity: 0.85;
          }
          80% {
            transform: translate(calc(-50% + 6px), -50%) scale(1.02) rotate(4deg);
            opacity: 1;
            filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.12));
          }
          100% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            opacity: 1;
            filter: drop-shadow(0 16px 32px rgba(0, 0, 0, 0.08));
          }
        }

        .gear-svg {
          width: 100%;
          height: 100%;
          transform-origin: center center;
          animation: smoothSpinGear 45s linear infinite;
        }

        @keyframes smoothSpinGear {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* ─── SAMSUNG GALAXY S24 ULTRA SMARTPHONE (BOXY SHARP EDGES) ─── */
        .galaxy-ultra-case {
          position: relative;
          z-index: 5;
          width: var(--phone-w);
          height: var(--phone-h);
          border-radius: clamp(5px, calc(var(--base-h) * 0.01), 7px);
          /* Brushed Natural Titanium Frame */
          background: linear-gradient(
            135deg, 
            #e2ded4 0%, 
            #9f9888 15%, 
            #59554a 35%, 
            #aba494 55%, 
            #48453c 78%, 
            #c8c2b3 100%
          );
          padding: clamp(5px, calc(var(--base-h) * 0.01), 7px);
          box-sizing: border-box;
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.5) inset,
            0 1px 3px rgba(255, 255, 255, 0.3) inset,
            0 -1px 4px rgba(0, 0, 0, 0.8) inset,
            0 30px 60px -12px rgba(15, 23, 42, 0.2),
            0 14px 26px -6px rgba(15, 23, 42, 0.12);
        }

        /* Outer Titanium Chamfer Edge */
        .galaxy-ultra-case::before {
          content: "";
          position: absolute;
          inset: -1.5px;
          border-radius: clamp(6px, calc(var(--base-h) * 0.011), 8px);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.85) 0%,
            rgba(255, 255, 255, 0.2) 25%,
            rgba(0, 0, 0, 0.65) 60%,
            rgba(255, 255, 255, 0.6) 100%
          );
          z-index: -1;
        }

        /* Antenna Lines on Frame */
        .antenna-slit {
          position: absolute;
          background: #3a3832;
          z-index: 4;
        }
        .antenna-top-left { top: calc(var(--base-h) * 0.085); left: -1.5px; width: 3px; height: 5px; }
        .antenna-top-right { top: calc(var(--base-h) * 0.085); right: -1.5px; width: 3px; height: 5px; }
        .antenna-bottom-left { bottom: calc(var(--base-h) * 0.085); left: -1.5px; width: 3px; height: 5px; }
        .antenna-bottom-right { bottom: calc(var(--base-h) * 0.085); right: -1.5px; width: 3px; height: 5px; }

        /* Right Side Physical Buttons */
        .btn-side {
          position: absolute;
          background: linear-gradient(180deg, #b8b1a2 0%, #635f55 50%, #3e3b34 100%);
          box-shadow: 
            0 1px 3px rgba(0, 0, 0, 0.5), 
            0 0 0 0.6px rgba(255, 255, 255, 0.3) inset;
          border-radius: 0 2.5px 2.5px 0;
        }
        .btn-volume {
          right: -4px;
          top: calc(var(--base-h) * 0.19);
          width: 3.5px;
          height: calc(var(--base-h) * 0.09);
        }
        .btn-power-key {
          right: -4px;
          top: calc(var(--base-h) * 0.315);
          width: 3.5px;
          height: calc(var(--base-h) * 0.06);
        }

        /* ─── DISPLAY INNER BEZEL ─── */
        .ultra-screen-frame {
          position: relative;
          width: 100%;
          height: 100%;
          background: #000000;
          border-radius: clamp(3px, calc(var(--base-h) * 0.006), 4px);
          overflow: hidden;
          box-shadow: 0 0 0 1.5px #0a0a09, 0 0 8px rgba(0, 0, 0, 0.95) inset;
          display: flex;
          flex-direction: column;
        }

        /* Top Centered Punch-Hole Selfie Camera (Infinity-O) */
        .punch-hole-camera {
          position: absolute;
          top: calc(var(--base-h) * 0.016);
          left: 50%;
          transform: translateX(-50%);
          width: clamp(8px, calc(var(--base-h) * 0.016), 11px);
          height: clamp(8px, calc(var(--base-h) * 0.016), 11px);
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #1d334d 0%, #060a0f 65%, #000000 100%);
          box-shadow: 
            0 0 0 0.8px rgba(255, 255, 255, 0.15),
            0 0 3px rgba(0, 150, 255, 0.4) inset;
          z-index: 50;
        }
        .punch-hole-camera::after {
          content: "";
          position: absolute;
          top: 20%;
          left: 20%;
          width: 25%;
          height: 25%;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.85);
        }

        /* Diagonal Glass Sheen Glare Reflection */
        .screen-glass-sheen {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.14) 0%,
            rgba(255, 255, 255, 0.04) 22%,
            transparent 42%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 40;
        }

        /* ─── ULTRA SCREEN DISPLAY CANVAS (FULL SCREEN APP) ─── */
        .ultra-screen-canvas {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0;
          box-sizing: border-box;
          overflow: hidden;
          background-color: #ffffff;
          transform-origin: center center;
          will-change: transform, filter, opacity;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* ─── CRT / TV SCREEN CLOSE & OPEN (SUPER SMOOTH FLUID MOTION) ─── */
        
        /* 1. CLOSING (BAND HONA - 0.38s):
           Continuous fluid curve: vertical collapses into center beam while ends smoothly draw inwards
        */
        .canvas-closing {
          animation: crtScreenCloseSmooth 0.38s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
          transform-origin: center center;
        }

        @keyframes crtScreenCloseSmooth {
          0% {
            transform: scale(1, 1);
            filter: brightness(1);
            opacity: 1;
          }
          40% {
            transform: scale(0.98, 0.08);
            filter: brightness(1.7) contrast(1.15);
            opacity: 1;
          }
          65% {
            /* Smooth horizontal phosphor beam */
            transform: scale(0.95, 0.0035);
            filter: brightness(2.6) contrast(1.35);
            opacity: 1;
          }
          85% {
            transform: scale(0.42, 0.0035);
            filter: brightness(3.2);
            opacity: 1;
          }
          96% {
            transform: scale(0.04, 0.0035);
            filter: brightness(4);
            opacity: 0.9;
          }
          100% {
            transform: scale(0, 0);
            filter: brightness(0);
            opacity: 0;
          }
        }

        /* 2. OPENING (KHULNA - 0.42s):
           Center point blossoms horizontally into line, then organically expands vertically to full screen
        */
        .canvas-opening {
          animation: crtScreenOpenSmooth 0.42s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: center center;
        }

        @keyframes crtScreenOpenSmooth {
          0% {
            transform: scale(0, 0.0035);
            filter: brightness(4.5);
            opacity: 0;
          }
          12% {
            opacity: 1;
            transform: scale(0.14, 0.0035);
            filter: brightness(3.6);
          }
          36% {
            /* Beam expands to full width */
            transform: scale(0.98, 0.0035);
            filter: brightness(2.5) contrast(1.3);
            opacity: 1;
          }
          58% {
            /* Vertical blossoming starts smoothly */
            transform: scale(1, 0.32);
            filter: brightness(1.5) contrast(1.15);
            opacity: 1;
          }
          78% {
            transform: scale(1, 0.78);
            filter: brightness(1.18) contrast(1.05);
            opacity: 1;
          }
          92% {
            transform: scale(1, 0.98);
            filter: brightness(1.03);
            opacity: 1;
          }
          100% {
            transform: scale(1, 1);
            filter: brightness(1);
            opacity: 1;
          }
        }

        /* CRT Phosphor Horizontal Beam Glow Layer (Softened & Smooth) */
        .crt-beam-glow {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          height: 3px;
          margin-top: -1.5px;
          background: #ffffff;
          box-shadow: 
            0 0 10px #ffffff,
            0 0 22px rgba(255, 255, 255, 0.95),
            0 0 44px rgba(186, 230, 253, 0.6);
          z-index: 46;
          pointer-events: none;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: center center;
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .crt-beam-glow.closing {
          animation: crtBeamCloseSmooth 0.38s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
        }

        @keyframes crtBeamCloseSmooth {
          0% {
            opacity: 0;
            transform: scaleX(1);
          }
          35% {
            opacity: 0.9;
            transform: scaleX(1);
          }
          65% {
            opacity: 1;
            transform: scaleX(0.96);
          }
          85% {
            opacity: 1;
            transform: scaleX(0.42);
          }
          96% {
            opacity: 0.9;
            transform: scaleX(0.04);
          }
          100% {
            opacity: 0;
            transform: scaleX(0);
          }
        }

        .crt-beam-glow.opening {
          animation: crtBeamOpenSmooth 0.42s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes crtBeamOpenSmooth {
          0% {
            opacity: 0;
            transform: scaleX(0);
          }
          12% {
            opacity: 1;
            transform: scaleX(0.16);
          }
          36% {
            opacity: 1;
            transform: scaleX(0.98);
          }
          60% {
            opacity: 0.65;
            transform: scaleX(1);
          }
          85% {
            opacity: 0.2;
            transform: scaleX(1);
          }
          100% {
            opacity: 0;
            transform: scaleX(1);
          }
        }

        /* ─── STATUS BAR (CHARGING + TOWER NETWORK) ─── */
        .ultra-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: clamp(8.5px, calc(var(--base-h) * 0.016), 11.5px);
          font-weight: 700;
          color: #0f172a;
          background: #ffffff;
          z-index: 35;
          padding: clamp(5px, calc(var(--base-h) * 0.01), 9px) clamp(10px, calc(var(--base-h) * 0.024), 16px) clamp(2px, calc(var(--base-h) * 0.004), 4px);
          line-height: 1;
          border-bottom: 1px solid #f8fafc;
        }

        /* Left Side Clock */
        .status-left {
          font-size: clamp(8.5px, calc(var(--base-h) * 0.016), 11.5px);
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.3px;
        }

        /* Right Side: Network Tower + Wi-Fi + Charging */
        .status-right {
          display: flex;
          align-items: center;
          gap: clamp(3px, calc(var(--base-h) * 0.009), 6px);
        }

        /* Cellular Signal Tower Bars */
        .cellular-tower-bars {
          display: flex;
          align-items: flex-end;
          gap: clamp(1px, calc(var(--base-h) * 0.0022), 1.8px);
          height: clamp(8px, calc(var(--base-h) * 0.015), 11px);
        }
        .tower-bar {
          width: clamp(1.8px, calc(var(--base-h) * 0.0036), 2.6px);
          background: #1a1a18;
          border-radius: 0.5px;
        }

        .status-net-label {
          font-size: clamp(7.5px, calc(var(--base-h) * 0.014), 10px);
          font-weight: 800;
          letter-spacing: -0.2px;
          line-height: 1;
        }

        .status-wifi-icon {
          width: clamp(9px, calc(var(--base-h) * 0.018), 12.5px);
          height: clamp(9px, calc(var(--base-h) * 0.018), 12.5px);
          flex-shrink: 0;
        }

        /* Battery Charging Capsule */
        .battery-charging-pill {
          display: flex;
          align-items: center;
          gap: clamp(1px, calc(var(--base-h) * 0.003), 2.2px);
        }
        .bolt-symbol {
          font-size: clamp(7px, calc(var(--base-h) * 0.014), 9.5px);
          color: #16a34a;
          font-weight: 900;
          margin-right: -1px;
          line-height: 1;
        }
        .battery-shell {
          width: clamp(14px, calc(var(--base-h) * 0.028), 20px);
          height: clamp(7px, calc(var(--base-h) * 0.014), 10px);
          border: clamp(1px, calc(var(--base-h) * 0.002), 1.4px) solid #1a1a18;
          border-radius: clamp(2px, calc(var(--base-h) * 0.004), 3px);
          padding: 1px;
          box-sizing: border-box;
          position: relative;
          display: flex;
          align-items: center;
        }
        .battery-shell::after {
          content: "";
          position: absolute;
          right: -2px;
          top: 25%;
          width: 1px;
          height: 50%;
          background: #1a1a18;
          border-radius: 0 1px 1px 0;
        }
        .battery-fill {
          width: 85%;
          height: 100%;
          background: #16a34a;
          border-radius: 1px;
        }

        /* ─── FULL-SCREEN NATIVE SMARTPHONE APPLICATION LAYOUT ─── */
        .phone-app-container {
          position: relative;
          z-index: 30;
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 0;
          background: #ffffff;
          overflow: hidden;
        }

        /* Main Full-Screen Service View (Scrollable Edge-to-Edge) */
        .app-content-body {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: clamp(14px, calc(var(--base-h) * 0.028), 22px) clamp(16px, calc(var(--base-h) * 0.038), 22px);
          overflow-y: auto;
          box-sizing: border-box;
          scrollbar-width: thin;
          scrollbar-color: #94a3b8 rgba(0, 0, 0, 0.03);
        }

        /* ─── DYNAMIC TEXT LOADING SCANLINE & ANIMATIONS ─── */
        .screen-text-scanline {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2.5px;
          background: linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.8) 25%, rgba(14, 165, 233, 1) 50%, rgba(56, 189, 248, 0.8) 75%, transparent 100%);
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.85), 0 0 20px rgba(14, 165, 233, 0.5);
          pointer-events: none;
          z-index: 10;
          animation: textScanlineSweep 0.85s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes textScanlineSweep {
          0% {
            top: 0%;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 0.85;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        /* Auto-play Timer Progress Bar Track */
        .app-autoplay-track {
          width: 100%;
          height: 2.5px;
          background: rgba(148, 163, 184, 0.18);
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          z-index: 20;
        }

        .app-autoplay-fill {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #2563eb, #06b6d4, #38bdf8);
          box-shadow: 0 0 6px rgba(6, 182, 212, 0.6);
          animation: autoPlayFillProgress 5.2s linear forwards;
        }

        .app-autoplay-fill.paused {
          animation-play-state: paused;
        }

        @keyframes autoPlayFillProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        .app-content-wrapper {
          margin-top: auto;
          margin-bottom: auto;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        /* Interactive Service Capability Pill */
        .app-service-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          align-self: flex-start;
          padding: 3px 9px;
          border-radius: 9999px;
          background: rgba(30, 58, 138, 0.06);
          border: 1px solid rgba(30, 58, 138, 0.14);
          margin-bottom: clamp(8px, calc(var(--base-h) * 0.016), 12px);
          animation: badgeLoadingReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .app-badge-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #0284c7;
          box-shadow: 0 0 6px #0284c7;
          animation: badgePulse 2s ease-in-out infinite;
        }

        @keyframes badgePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
        }

        .app-badge-text {
          font-size: clamp(8.5px, calc(var(--base-h) * 0.013), 10px);
          font-weight: 800;
          letter-spacing: 0.6px;
          color: #1e3a8a;
          text-transform: uppercase;
        }

        @keyframes badgeLoadingReveal {
          from {
            opacity: 0;
            transform: translateY(-4px) scale(0.92);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Title with Text Loading Reveal & Cyber Shimmer Wave */
        .app-service-title {
          font-size: clamp(17px, calc(var(--base-h) * 0.033), 22px);
          font-weight: 800;
          line-height: 1.32;
          margin: 0 0 clamp(12px, calc(var(--base-h) * 0.022), 16px) 0;
          letter-spacing: -0.35px;
          text-align: left;
          position: relative;
          background: linear-gradient(
            110deg,
            #1e3a8a 0%,
            #1e3a8a 35%,
            #0284c7 50%,
            #1e3a8a 65%,
            #1e3a8a 100%
          );
          background-size: 250% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: 
            titleLoadingReveal 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards,
            titleShimmerWave 1.2s ease-out 0.1s forwards;
        }

        @keyframes titleLoadingReveal {
          0% {
            opacity: 0;
            transform: translateY(10px);
            filter: blur(6px);
          }
          50% {
            filter: blur(1.5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }

        @keyframes titleShimmerWave {
          0% {
            background-position: 180% 0;
          }
          100% {
            background-position: -80% 0;
          }
        }

        /* Description with Text Loading Stagger Reveal */
        .app-service-desc {
          font-size: clamp(13.5px, calc(var(--base-h) * 0.025), 16px);
          font-weight: 500;
          line-height: 1.72;
          color: #1e293b;
          margin: 0;
          letter-spacing: 0.05px;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          word-break: break-word;
          position: relative;
          animation: descLoadingReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
        }

        @keyframes descLoadingReveal {
          0% {
            opacity: 0;
            transform: translateY(12px);
            filter: blur(7px);
          }
          50% {
            opacity: 0.75;
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }

        .app-content-body::-webkit-scrollbar {
          width: 4px;
        }
        .app-content-body::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.03);
          border-radius: 4px;
        }
        .app-content-body::-webkit-scrollbar-thumb {
          background: #94a3b8;
          border-radius: 4px;
        }
        .app-content-body::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }

        /* Native App Bottom Navigation Dock */
        .app-bottom-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(6px, calc(var(--base-h) * 0.012), 10px) clamp(10px, calc(var(--base-h) * 0.024), 16px) clamp(3px, calc(var(--base-h) * 0.006), 5px);
          border-top: 1px solid #f1f5f9;
          background: #fafaf9;
        }

        .app-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 3px;
          height: clamp(25px, calc(var(--base-h) * 0.044), 32px);
          padding: 0 clamp(10px, calc(var(--base-h) * 0.02), 14px);
          border-radius: clamp(14px, calc(var(--base-h) * 0.024), 18px);
          font-size: clamp(9px, calc(var(--base-h) * 0.016), 11.5px);
          font-weight: 700;
          cursor: pointer;
          border: none;
          outline: none;
          transition: all 0.18s ease;
          user-select: none;
        }
        .app-action-btn:active {
          transform: scale(0.95);
        }

        .app-btn-prev {
          background: #ffffff;
          color: #0f172a;
          border: 1px solid #cbd5e1;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }
        .app-btn-prev:hover {
          background: #f1f5f9;
        }

        .app-btn-next {
          background: #0f172a;
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.25);
        }
        .app-btn-next:hover {
          background: #1e293b;
        }

        .app-nav-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }

        .app-nav-counter {
          font-size: clamp(8px, calc(var(--base-h) * 0.014), 10px);
          font-weight: 800;
          color: #64748b;
          font-variant-numeric: tabular-nums;
        }

        .app-autoplay-btn {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          padding: 1.5px 7px;
          border-radius: 9999px;
          font-size: clamp(7.5px, calc(var(--base-h) * 0.012), 9px);
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          transition: all 0.18s ease;
          line-height: 1;
        }

        .app-autoplay-btn:hover {
          background: #f1f5f9;
          color: #0f172a;
          border-color: #cbd5e1;
        }

        .app-autoplay-btn.active {
          background: #eff6ff;
          border-color: #93c5fd;
          color: #1d4ed8;
        }

        /* Real Samsung Bottom Gesture Bar */
        .samsung-gesture-bar {
          width: clamp(60px, calc(var(--base-h) * 0.12), 76px);
          height: 3.5px;
          background: #0f172a;
          border-radius: 2px;
          margin: 3px auto 4px auto;
          opacity: 0.8;
        }
      `}</style>

      {/* Master Stage */}
      <div className="stage-container">

        {/* ─── SAMSUNG GALAXY S24 ULTRA TITANIUM S PEN (STANDING ON LEFT) ─── */}
        <div className="spen-positioner" title="Samsung Galaxy S24 Ultra S-Pen">
          <svg
            className="spen-svg"
            viewBox="0 0 40 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Titanium Body Horizontal Cylindrical Gradient */}
              <linearGradient id="spenTitaniumBody" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#534e44" />
                <stop offset="14%" stopColor="#7a7468" />
                <stop offset="32%" stopColor="#b8b1a3" />
                <stop offset="48%" stopColor="#e2dcd0" />
                <stop offset="66%" stopColor="#a39c8f" />
                <stop offset="85%" stopColor="#676256" />
                <stop offset="100%" stopColor="#454037" />
              </linearGradient>

              {/* Clicker Cap Metallic Gradient */}
              <linearGradient id="spenClicker" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#605a4f" />
                <stop offset="35%" stopColor="#ded8cc" />
                <stop offset="68%" stopColor="#9a9386" />
                <stop offset="100%" stopColor="#514c42" />
              </linearGradient>

              {/* Clicker Top Bevel Surface */}
              <linearGradient id="spenClickerTop" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#aba496" />
              </linearGradient>

              {/* Recessed Pill Button Face */}
              <linearGradient id="spenBtnFace" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#443f36" />
                <stop offset="25%" stopColor="#787267" />
                <stop offset="70%" stopColor="#9e988c" />
                <stop offset="100%" stopColor="#4f4a41" />
              </linearGradient>

              {/* Conical Tip Gradient */}
              <linearGradient id="spenConeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4f4a41" />
                <stop offset="35%" stopColor="#b6afa2" />
                <stop offset="70%" stopColor="#797367" />
                <stop offset="100%" stopColor="#3d3932" />
              </linearGradient>

              {/* Contact Ground Shadow */}
              <radialGradient id="spenContactShadow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(0, 0, 0, 0.45)" />
                <stop offset="60%" stopColor="rgba(0, 0, 0, 0.15)" />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
              </radialGradient>
            </defs>

            {/* 0. Ground Contact Shadow Under Standing Tip */}
            <ellipse cx="20" cy="475" rx="8" ry="2.2" fill="url(#spenContactShadow)" />

            {/* 1. Realistic S-Pen Eject Clicker Top */}
            {/* Top Mushroom/T-Flange Disc Cap */}
            <rect x="12" y="3" width="16" height="3.8" rx="1.5" fill="url(#spenClickerTop)" />
            {/* Clicker Retractable Neck/Stem */}
            <rect x="16" y="6.8" width="8" height="6.2" fill="url(#spenClicker)" />
            {/* Barrel Collar Ring */}
            <rect x="14" y="12" width="12" height="2" rx="0.5" fill="#3a3731" opacity="0.6" />

            {/* 2. Main Titanium Barrel Body (Solid Caliber) */}
            <rect x="10" y="13" width="20" height="382" rx="3.5" fill="url(#spenTitaniumBody)" />

            {/* Longitudinal Specular Highlight Reflection */}
            <rect x="16.5" y="14.5" width="4" height="378" rx="1.5" fill="#ffffff" opacity="0.30" />

            {/* Side Facet Contour (S24 Ultra Flat Silo Ridge) */}
            <line x1="12.5" y1="18" x2="12.5" y2="395" stroke="#36322a" strokeWidth="0.8" opacity="0.4" />
            <line x1="13.2" y1="18" x2="13.2" y2="395" stroke="#ffffff" strokeWidth="0.6" opacity="0.35" />

            {/* 3. Integrated Action Pill Button (Lower Grip Area) */}
            {/* Recessed Socket */}
            <rect x="15" y="262" width="8.5" height="58" rx="4.25" fill="#332f27" />
            {/* Button Face */}
            <rect x="15.8" y="263.2" width="6.9" height="55.6" rx="3.45" fill="url(#spenBtnFace)" />
            {/* Button Specular Reflection */}
            <rect x="17.2" y="265" width="1.8" height="52" rx="0.9" fill="#ffffff" opacity="0.3" />

            {/* 4. Conical Front Nose Taper */}
            <polygon points="10,395 30,395 23,450 17,450" fill="url(#spenConeGrad)" />
            {/* Cone Specular Highlight */}
            <polygon points="18,395 21,395 20.2,450 18.8,450" fill="#ffffff" opacity="0.25" />

            {/* 5. Elastomeric Stylus Collar & Fine 0.7mm Tip */}
            <polygon points="17,450 23,450 21.8,460 18.2,460" fill="#2d2a25" />
            <polygon points="18.2,460 21.8,460 20.8,472 19.2,472" fill="#181715" />
            {/* Stylus Nib Fine Apex */}
            <circle cx="20" cy="472.5" r="1.1" fill="#0f0e0d" />
            <circle cx="19.7" cy="472" r="0.4" fill="#ffffff" opacity="0.75" />
          </svg>
        </div>

        {/* ─── CLEAN PRECISION 3D CNC STEEL GEAR ─── */}
        <div className="gear-positioner">
          <svg
            className="gear-svg"
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Radial Brushed Steel Face Gradient */}
              <radialGradient id="cncSteelFace" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="25%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#f1f5f9" />
                <stop offset="75%" stopColor="#475569" />
                <stop offset="90%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#64748b" />
              </radialGradient>

              {/* Tooth Bevel Chamfer Specular Lighting */}
              <linearGradient id="chamferLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="40%" stopColor="#e2e8f0" stopOpacity="0.8" />
                <stop offset="75%" stopColor="#334155" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* Precision CNC Machined Gear Body */}
            <path
              d="
                M 300,38 
                L 328,38 L 340,94 L 372,100 L 412,60 L 436,80 L 420,134 L 447,151 L 498,129 L 514,158 L 480,202 L 497,228 L 551,227 L 557,260 L 509,293 L 513,322 L 567,344 L 561,377 L 506,386 L 498,416 L 539,454 L 522,483 L 471,471 L 450,495 L 472,547 L 445,569 L 404,533 L 376,548 L 375,604 L 341,610 L 323,557 L 293,558 L 274,610 L 241,604 L 240,548 L 212,533 L 171,569 L 144,547 L 166,495 L 145,471 L 94,483 L 77,454 L 118,416 L 110,386 L 55,377 L 49,344 L 103,322 L 107,293 L 59,260 L 65,227 L 119,228 L 136,202 L 102,158 L 118,129 L 169,151 L 196,134 L 180,80 L 204,60 L 244,100 L 276,94 L 288,38 Z
              "
              fill="url(#cncSteelFace)"
              stroke="url(#chamferLight)"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Concentric Circular Rims */}
            <circle
              cx="300"
              cy="300"
              r="190"
              fill="none"
              stroke="#334155"
              strokeWidth="3.5"
              opacity="0.75"
            />
            <circle
              cx="300"
              cy="300"
              r="188"
              fill="none"
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth="1.5"
            />

            {/* Recessed Mechanical Groove */}
            <circle
              cx="300"
              cy="300"
              r="150"
              fill="none"
              stroke="url(#cncSteelFace)"
              strokeWidth="22"
            />
            <circle
              cx="300"
              cy="300"
              r="161"
              fill="none"
              stroke="#1e293b"
              strokeWidth="1.5"
            />
            <circle
              cx="300"
              cy="300"
              r="139"
              fill="none"
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth="1.5"
            />

            {/* 6 High-Performance Lightening Holes */}
            {[0, 60, 120, 180, 240, 300].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const bx = 300 + Math.cos(rad) * 150;
              const by = 300 + Math.sin(rad) * 150;
              return (
                <g key={`bore-${deg}`}>
                  <circle cx={bx} cy={by} r="18" fill="#334155" />
                  <circle cx={bx} cy={by} r="17" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                  <circle cx={bx} cy={by} r="14" fill="#0f172a" />
                </g>
              );
            })}

            {/* Center Axle Hub Cylinder */}
            <circle
              cx="300"
              cy="300"
              r="105"
              fill="#1e293b"
              stroke="url(#chamferLight)"
              strokeWidth="3.5"
            />
            <circle
              cx="300"
              cy="300"
              r="95"
              fill="none"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1.5"
            />

            {/* Center Shaft Keyway Bore */}
            <circle
              cx="300"
              cy="300"
              r="58"
              fill="#090d16"
              stroke="#475569"
              strokeWidth="2.5"
            />
            <rect
              x="293"
              y="235"
              width="14"
              height="18"
              rx="2"
              fill="#090d16"
              stroke="#475569"
              strokeWidth="2"
            />

            {/* Industrial Mounting Bolts */}
            {[30, 90, 150, 210, 270, 330].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const bx = 300 + Math.cos(rad) * 80;
              const by = 300 + Math.sin(rad) * 80;
              return (
                <g key={`hubbolt-${deg}`}>
                  <circle cx={bx} cy={by} r="6.5" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
                  <circle cx={bx - 1.5} cy={by - 1.5} r="2" fill="#ffffff" />
                </g>
              );
            })}
          </svg>
        </div>

        {/* ─── SAMSUNG GALAXY S24 ULTRA (AS IN REFERENCE IMAGE) ─── */}
        <div className="galaxy-ultra-case">
          {/* Antenna Slit Cuts on Frame */}
          <div className="antenna-slit antenna-top-left" />
          <div className="antenna-slit antenna-top-right" />
          <div className="antenna-slit antenna-bottom-left" />
          <div className="antenna-slit antenna-bottom-right" />

          {/* Right Side Buttons (Volume Rocker & Power Key) */}
          <div className="btn-side btn-volume" title="Volume Rocker" />
          <div className="btn-side btn-power-key" title="Power Key" />

          {/* Active Display Chassis Frame */}
          <div className="ultra-screen-frame">
            {/* Top Centered Punch-Hole Selfie Camera */}
            <div className="punch-hole-camera" title="12MP Front Camera" />

            {/* Diagonal Specular Glass Reflection */}
            <div className="screen-glass-sheen" />

            {/* CRT Phosphor Horizontal Beam Glow (Video Effect) */}
            <div className={`crt-beam-glow ${screenAnimationState}`} />

            {/* ── ULTRA SCREEN DISPLAY CANVAS ── */}
            <div className={`ultra-screen-canvas canvas-${screenAnimationState}`}>

              {/* ── TOP STATUS BAR: CHARGING & TOWER NETWORK ── */}
              <div className="ultra-status-bar">
                {/* Left Time */}
                <span className="status-left">{time}</span>

                {/* Right: Cellular Tower + 5G + Wi-Fi + Charging */}
                <div className="status-right">
                  {/* Cellular Network Tower Bars */}
                  <div className="cellular-tower-bars" title="Network Signal: 4 Bars">
                    <div className="tower-bar" style={{ height: '30%' }} />
                    <div className="tower-bar" style={{ height: '52%' }} />
                    <div className="tower-bar" style={{ height: '76%' }} />
                    <div className="tower-bar" style={{ height: '100%' }} />
                  </div>

                  <span className="status-net-label">5G</span>

                  <Wifi className="status-wifi-icon" strokeWidth={2.8} />

                  {/* Battery with Active Charging Icon ⚡ */}
                  <div className="battery-charging-pill" title="Charging: 85%">
                    <span className="bolt-symbol">⚡</span>
                    <div className="battery-shell">
                      <div className="battery-fill" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── FULL SCREEN NATIVE SMARTPHONE APPLICATION (EDGE-TO-EDGE) ─── */}
              <div 
                className="phone-app-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Auto-play Timer Progress Bar Track */}
                <div 
                  className="app-autoplay-track" 
                  title={isAutoPlay ? (isHovered ? "Paused on hover" : "Auto-advance progress") : "Auto-play paused"}
                >
                  <div
                    key={`autoplay-${currentIndex}-${isAutoPlay}-${isHovered}`}
                    className={`app-autoplay-fill ${(!isAutoPlay || isHovered) ? 'paused' : ''}`}
                  />
                </div>

                {/* Full-Screen Content Canvas */}
                <div className="app-content-body" key={`service-${currentService.id || currentIndex}`}>
                  <div className="screen-text-scanline" />
                  <div className="app-content-wrapper">
                    <div className="app-service-badge">
                      <span className="app-badge-indicator" />
                      <span className="app-badge-text">Service {currentIndex + 1} of {total}</span>
                    </div>
                    <h2 className="app-service-title">{currentService.title}</h2>
                    <p className="app-service-desc">{currentService.description}</p>
                  </div>
                </div>

                {/* Native App Bottom Navigation Dock */}
                <div className="app-bottom-nav">
                  <button
                    onClick={handlePrev}
                    className="app-action-btn app-btn-prev"
                    title="Previous Section"
                  >
                    <ChevronLeft size={13} strokeWidth={2.8} />
                    <span>Prev</span>
                  </button>

                  <div className="app-nav-center">
                    <span className="app-nav-counter">{currentIndex + 1} of {total}</span>
                    <button
                      type="button"
                      onClick={() => setIsAutoPlay((prev) => !prev)}
                      className={`app-autoplay-btn ${isAutoPlay ? 'active' : ''}`}
                      title={isAutoPlay ? "Click to Pause Auto-Slide" : "Click to Resume Auto-Slide"}
                    >
                      {isAutoPlay ? <Pause size={9} strokeWidth={2.5} /> : <Play size={9} strokeWidth={2.5} />}
                      <span>{isAutoPlay ? 'Auto' : 'Paused'}</span>
                    </button>
                  </div>

                  <button
                    onClick={handleNext}
                    className="app-action-btn app-btn-next"
                    title="Next Section"
                  >
                    <span>Next</span>
                    <ChevronRight size={13} strokeWidth={2.8} />
                  </button>
                </div>

                {/* Authentic Samsung Bottom Home Gesture Bar */}
                <div className="samsung-gesture-bar" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}







