import React, { useState } from 'react';
import { 
  Sparkles, 
  ChevronDown, 
  ArrowUpRight,
  Home
} from 'lucide-react';

const confetti = (opts) => {
  if (typeof window !== 'undefined' && typeof window.confetti === 'function') {
    try { window.confetti(opts); } catch (e) { /* safe fallback */ }
  }
};

import {
  FOREGROUND_ICONS_DATA,
  STREAMING_BACKGROUND_ITEMS,
  StreamVectorGlyphs,
  REVIEWS_CARDS_DATA
} from './FollowPageData.jsx';

// ============================================================================
// ALL CSS & KEYFRAMES CONVERTED AND EMBEDDED DIRECTLY IN THIS FILE
// ============================================================================
const EmbeddedFollowUpStyles = () => (
  <style>{`
    :root {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    /* 1. Main 12 Icons Spring Bloom Entrance Animation */
    @keyframes emergeFromPhoneScreen {
      0% {
        transform: translate(calc(-50% + var(--origin-x, 0px)), calc(-50% + var(--origin-y, 240px))) scale(0.12) rotate(var(--origin-rot, 0deg));
        opacity: 0;
        filter: blur(4px);
      }
      25% {
        opacity: 1;
        filter: blur(0px);
      }
      78% {
        transform: translate(-50%, -50%) scale(1.07) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) scale(1) rotate(0deg);
        opacity: 1;
        filter: blur(0px);
      }
    }

    /* 2. Panoramic Screen-to-Background Trajectories (Soft, Transparent Stream) */
    @keyframes liftoffFlow1 {
      0% { transform: translate3d(0, 0, 25px) scale(0.42); opacity: 0; }
      10% { opacity: 0.55; transform: translate3d(-90px, -30px, 15px) scale(1.0); }
      50% { opacity: 0.38; transform: translate3d(-520px, -150px, -150px) scale(0.72) rotate(-22deg); }
      100% { opacity: 0; transform: translate3d(-980px, -260px, -350px) scale(0.48) rotate(-44deg); }
    }
    @keyframes liftoffFlow2 {
      0% { transform: translate3d(0, 0, 25px) scale(0.42); opacity: 0; }
      10% { opacity: 0.55; transform: translate3d(-75px, -45px, 15px) scale(1.0); }
      50% { opacity: 0.38; transform: translate3d(-460px, -240px, -150px) scale(0.72) rotate(-18deg); }
      100% { opacity: 0; transform: translate3d(-860px, -420px, -350px) scale(0.48) rotate(-36deg); }
    }
    @keyframes liftoffFlow3 {
      0% { transform: translate3d(0, 0, 25px) scale(0.42); opacity: 0; }
      10% { opacity: 0.55; transform: translate3d(-60px, -60px, 15px) scale(1.0); }
      50% { opacity: 0.38; transform: translate3d(-380px, -320px, -150px) scale(0.72) rotate(-14deg); }
      100% { opacity: 0; transform: translate3d(-720px, -580px, -350px) scale(0.48) rotate(-28deg); }
    }
    @keyframes liftoffFlow4 {
      0% { transform: translate3d(0, 0, 25px) scale(0.42); opacity: 0; }
      10% { opacity: 0.55; transform: translate3d(-45px, -70px, 15px) scale(1.0); }
      50% { opacity: 0.38; transform: translate3d(-280px, -390px, -150px) scale(0.72) rotate(-10deg); }
      100% { opacity: 0; transform: translate3d(-520px, -700px, -350px) scale(0.48) rotate(-20deg); }
    }
    @keyframes liftoffFlow5 {
      0% { transform: translate3d(0, 0, 25px) scale(0.42); opacity: 0; }
      10% { opacity: 0.55; transform: translate3d(-28px, -75px, 15px) scale(1.0); }
      50% { opacity: 0.38; transform: translate3d(-180px, -430px, -150px) scale(0.72) rotate(-6deg); }
      100% { opacity: 0; transform: translate3d(-340px, -780px, -350px) scale(0.48) rotate(-12deg); }
    }
    @keyframes liftoffFlow6 {
      0% { transform: translate3d(0, 0, 25px) scale(0.42); opacity: 0; }
      10% { opacity: 0.55; transform: translate3d(-12px, -80px, 15px) scale(1.0); }
      50% { opacity: 0.38; transform: translate3d(-85px, -460px, -150px) scale(0.72) rotate(-3deg); }
      100% { opacity: 0; transform: translate3d(-160px, -840px, -350px) scale(0.48) rotate(-6deg); }
    }
    @keyframes liftoffFlow7 {
      0% { transform: translate3d(0, 0, 25px) scale(0.42); opacity: 0; }
      10% { opacity: 0.55; transform: translate3d(0px, -85px, 15px) scale(1.0); }
      50% { opacity: 0.38; transform: translate3d(0px, -480px, -150px) scale(0.72) rotate(0deg); }
      100% { opacity: 0; transform: translate3d(0px, -880px, -350px) scale(0.48) rotate(0deg); }
    }
    @keyframes liftoffFlow8 {
      0% { transform: translate3d(0, 0, 25px) scale(0.42); opacity: 0; }
      10% { opacity: 0.55; transform: translate3d(12px, -80px, 15px) scale(1.0); }
      50% { opacity: 0.38; transform: translate3d(85px, -460px, -150px) scale(0.72) rotate(3deg); }
      100% { opacity: 0; transform: translate3d(160px, -840px, -350px) scale(0.48) rotate(6deg); }
    }
    @keyframes liftoffFlow9 {
      0% { transform: translate3d(0, 0, 25px) scale(0.42); opacity: 0; }
      10% { opacity: 0.55; transform: translate3d(28px, -75px, 15px) scale(1.0); }
      50% { opacity: 0.38; transform: translate3d(180px, -430px, -150px) scale(0.72) rotate(6deg); }
      100% { opacity: 0; transform: translate3d(340px, -780px, -350px) scale(0.48) rotate(12deg); }
    }
    @keyframes liftoffFlow10 {
      0% { transform: translate3d(0, 0, 25px) scale(0.42); opacity: 0; }
      10% { opacity: 0.55; transform: translate3d(45px, -70px, 15px) scale(1.0); }
      50% { opacity: 0.38; transform: translate3d(280px, -390px, -150px) scale(0.72) rotate(10deg); }
      100% { opacity: 0; transform: translate3d(520px, -700px, -350px) scale(0.48) rotate(20deg); }
    }
    @keyframes liftoffFlow11 {
      0% { transform: translate3d(0, 0, 25px) scale(0.42); opacity: 0; }
      10% { opacity: 0.55; transform: translate3d(60px, -60px, 15px) scale(1.0); }
      50% { opacity: 0.38; transform: translate3d(380px, -320px, -150px) scale(0.72) rotate(14deg); }
      100% { opacity: 0; transform: translate3d(720px, -580px, -350px) scale(0.48) rotate(28deg); }
    }
    @keyframes liftoffFlow12 {
      0% { transform: translate3d(0, 0, 25px) scale(0.42); opacity: 0; }
      10% { opacity: 0.55; transform: translate3d(75px, -45px, 15px) scale(1.0); }
      50% { opacity: 0.38; transform: translate3d(460px, -240px, -150px) scale(0.72) rotate(18deg); }
      100% { opacity: 0; transform: translate3d(860px, -420px, -350px) scale(0.48) rotate(36deg); }
    }
    @keyframes liftoffFlow13 {
      0% { transform: translate3d(0, 0, 25px) scale(0.42); opacity: 0; }
      10% { opacity: 0.55; transform: translate3d(90px, -30px, 15px) scale(1.0); }
      50% { opacity: 0.38; transform: translate3d(520px, -150px, -150px) scale(0.72) rotate(22deg); }
      100% { opacity: 0; transform: translate3d(980px, -260px, -350px) scale(0.48) rotate(44deg); }
    }
    @keyframes liftoffFlow14 {
      0% { transform: translate3d(0, 0, 25px) scale(0.42); opacity: 0; }
      10% { opacity: 0.55; transform: translate3d(-38px, -72px, 15px) scale(1.0); }
      50% { opacity: 0.38; transform: translate3d(-240px, -410px, -150px) scale(0.72) rotate(-9deg); }
      100% { opacity: 0; transform: translate3d(-460px, -740px, -350px) scale(0.48) rotate(-18deg); }
    }
    @keyframes liftoffFlow15 {
      0% { transform: translate3d(0, 0, 25px) scale(0.42); opacity: 0; }
      10% { opacity: 0.55; transform: translate3d(38px, -72px, 15px) scale(1.0); }
      50% { opacity: 0.38; transform: translate3d(240px, -410px, -150px) scale(0.72) rotate(9deg); }
      100% { opacity: 0; transform: translate3d(460px, -740px, -350px) scale(0.48) rotate(18deg); }
    }
    @keyframes liftoffFlow16 {
      0% { transform: translate3d(0, 0, 25px) scale(0.42); opacity: 0; }
      10% { opacity: 0.55; transform: translate3d(8px, -78px, 15px) scale(1.0); }
      50% { opacity: 0.38; transform: translate3d(20px, -450px, -150px) scale(0.72) rotate(4deg); }
      100% { opacity: 0; transform: translate3d(35px, -820px, -350px) scale(0.48) rotate(8deg); }
    }

    /* 3. 3D App Icon Extrusion Shadows */
    .shadow-3d-tile-dark {
      box-shadow: 
        0 1px 0 rgba(255, 255, 255, 0.3) inset,
        0 -3px 6px rgba(0, 0, 0, 0.6) inset,
        0 12px 26px -3px rgba(0, 0, 0, 0.4),
        0 24px 50px -8px rgba(35, 25, 15, 0.3);
    }
    .shadow-3d-tile-white {
      box-shadow: 
        0 1.5px 0 #ffffff inset,
        0 0 0 1px rgba(0, 0, 0, 0.08),
        0 -2px 4px rgba(200, 190, 180, 0.3) inset,
        0 10px 22px -3px rgba(60, 45, 30, 0.16),
        0 20px 42px -8px rgba(60, 45, 30, 0.14);
    }
    .shadow-3d-tile-blue {
      box-shadow: 
        0 1px 0 rgba(255, 255, 255, 0.45) inset,
        0 -2px 5px rgba(0, 30, 90, 0.3) inset,
        0 10px 22px -3px rgba(0, 90, 180, 0.32),
        0 22px 44px -8px rgba(35, 25, 15, 0.22);
    }
    .shadow-3d-tile-purple {
      box-shadow: 
        0 1px 0 rgba(255, 255, 255, 0.45) inset,
        0 -2px 5px rgba(60, 15, 120, 0.3) inset,
        0 10px 22px -3px rgba(130, 60, 230, 0.32),
        0 22px 44px -8px rgba(35, 25, 15, 0.22);
    }
    .shadow-3d-tile-green {
      box-shadow: 
        0 1px 0 rgba(255, 255, 255, 0.45) inset,
        0 -2px 5px rgba(10, 80, 30, 0.3) inset,
        0 10px 22px -3px rgba(25, 165, 75, 0.32),
        0 22px 44px -8px rgba(35, 25, 15, 0.22);
    }
    .shadow-3d-tile-insta {
      box-shadow: 
        0 1px 0 rgba(255, 255, 255, 0.45) inset,
        0 -2px 5px rgba(120, 20, 70, 0.3) inset,
        0 10px 22px -3px rgba(210, 40, 110, 0.32),
        0 22px 44px -8px rgba(35, 25, 15, 0.22);
    }
    .shadow-3d-tile-cyan {
      box-shadow: 
        0 1px 0 rgba(255, 255, 255, 0.5) inset,
        0 -2px 5px rgba(0, 70, 130, 0.3) inset,
        0 10px 22px -3px rgba(20, 150, 230, 0.32),
        0 22px 44px -8px rgba(35, 25, 15, 0.22);
    }
    .shadow-3d-tile-red {
      box-shadow: 
        0 1px 0 rgba(255, 255, 255, 0.45) inset,
        0 -2px 5px rgba(120, 15, 15, 0.3) inset,
        0 10px 22px -3px rgba(230, 30, 30, 0.32),
        0 22px 44px -8px rgba(35, 25, 15, 0.22);
    }
  `}</style>
);

// ============================================================================
// 1. PHONE MOCKUP (Landscape OLED Smartphone with Surface Contacts)
// ============================================================================
export const PhoneMockup = () => {
  return (
    <div className="relative w-[94%] sm:w-[90%] md:w-full max-w-[740px] md:max-w-[800px] h-[125px] sm:h-[150px] md:h-[185px] mx-auto select-none">
      {/* Contact Shadows on Floor */}
      <div className="absolute -bottom-6 sm:-bottom-8 left-[3%] right-[3%] h-[40px] sm:h-[55px] bg-[#2a1d12]/35 blur-2xl rounded-[60px] pointer-events-none" />
      <div className="absolute -bottom-3 sm:-bottom-4 left-[8%] right-[8%] h-[20px] sm:h-[28px] bg-[#1a120b]/40 blur-xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-1 sm:-bottom-2 left-[15%] right-[15%] h-[10px] sm:h-[12px] bg-black/60 blur-md rounded-full pointer-events-none" />

      {/* Phone Body (Landscape resting flat on table) */}
      <div 
        className="relative w-full h-full rounded-[26px] sm:rounded-[36px] md:rounded-[46px] bg-[#0c0e14] border border-black/10 p-[4px] sm:p-[6px] md:p-[8px]"
        style={{
          boxShadow: `
            0 0 0 1.5px rgba(255, 255, 255, 0.25),
            0 1px 0 1px rgba(255, 255, 255, 0.35) inset,
            0 -2px 0 2px rgba(0, 0, 0, 0.95) inset,
            0 3px 0 #282b35,
            0 7px 0 #1b1e26,
            0 12px 0 #101218,
            0 18px 0 #08090d,
            0 25px 45px rgba(45, 30, 15, 0.35),
            0 45px 85px rgba(45, 30, 15, 0.28)
          `
        }}
      >
        {/* Toggle Switch */}
        <div className="absolute -bottom-[4px] sm:-bottom-[5px] right-[28%] w-8 sm:w-11 h-[4px] sm:h-[5px] bg-[#1a1c24] rounded-b-md border-b border-white/15 flex items-center justify-center">
          <div className="w-4 sm:w-5 h-[1.5px] sm:h-[2px] bg-[#323644] rounded-full" />
        </div>

        {/* Volume Bands */}
        <div className="absolute -bottom-[3px] sm:-bottom-[4px] left-[20%] w-1 sm:w-1.5 h-[3px] sm:h-[4px] bg-black/80" />
        <div className="absolute -bottom-[3px] sm:-bottom-[4px] right-[18%] w-1 sm:w-1.5 h-[3px] sm:h-[4px] bg-black/80" />
        
        {/* Metallic Bezel Rim */}
        <div className="relative w-full h-full rounded-[22px] sm:rounded-[30px] md:rounded-[39px] bg-[#030407] p-[2px] sm:p-[3px] overflow-hidden border border-white/10 shadow-inner">
          
          {/* OLED Glass Screen */}
          <div className="relative w-full h-full rounded-[20px] sm:rounded-[28px] md:rounded-[36px] bg-gradient-to-b from-[#060c18] via-[#020408] to-[#010204] overflow-hidden">
            
            {/* Screen Glass Glare & Light Streaks */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-[50%] -left-[20%] w-[140%] h-[120%] bg-gradient-to-br from-white/[0.08] via-transparent to-transparent rotate-12 pointer-events-none" />
            
            {/* Active Emitter Core on Screen */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[45px] sm:h-[55px] md:h-[65px] rounded-[50px] bg-gradient-to-t from-cyan-500/30 via-indigo-500/25 to-purple-500/35 blur-xl pointer-events-none animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[20px] sm:h-[24px] md:h-[28px] rounded-full bg-cyan-400/40 blur-md pointer-events-none" />
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[85%] h-[55px] sm:h-[65px] md:h-[75px] bg-gradient-to-b from-cyan-400/25 via-blue-500/15 to-transparent blur-xl pointer-events-none" />

            {/* Faint Reflections of Foreground Icons */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none transform scale-y-[-0.6] translate-y-[-10px] blur-[3px]">
              <div className="relative w-full h-full flex items-center justify-center">
                {FOREGROUND_ICONS_DATA.map((icon) => (
                  <div
                    key={`reflect-${icon.id}`}
                    className="absolute w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg sm:rounded-xl opacity-35"
                    style={{
                      left: icon.posX,
                      top: icon.posY,
                      background: icon.tint,
                      boxShadow: `0 0 16px ${icon.tint}`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Camera Notch / Island */}
            <div className="absolute top-1/2 -translate-y-1/2 right-2.5 sm:right-4 md:right-5 flex items-center gap-1 sm:gap-2 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/90 border border-white/10 shadow-md z-10">
              <div className="w-1 sm:w-1.5 h-3.5 sm:h-5 bg-[#16181f] rounded-full border border-white/5" />
              <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#0a0c10] border border-white/10 flex items-center justify-center">
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#1b2a4a] flex items-center justify-center">
                  <div className="w-0.5 h-0.5 rounded-full bg-cyan-400/80" />
                </div>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-3 w-0.5 sm:w-1 h-6 sm:h-10 bg-white/15 rounded-full z-10" />

          </div>
        </div>

      </div>
    </div>
  );
};

// ============================================================================
// 2. FOREGROUND ICON CLUSTER (12 Non-Overlapping Spaced Squircle Icons)
// ============================================================================
export const IconCluster = () => {
  return (
    <div className="relative w-full h-full pointer-events-none select-none">
      {FOREGROUND_ICONS_DATA.map((icon) => {
        const IconComponent = icon.renderIcon;

        return (
          <div
            key={icon.id}
            className="absolute pointer-events-auto cursor-pointer"
            style={{
              left: icon.posX,
              top: icon.posY,
              zIndex: icon.zIndex,
              animation: `emergeFromPhoneScreen 1.05s cubic-bezier(0.34, 1.45, 0.64, 1) ${icon.delay}s both`,
              '--origin-x': `${icon.originX}px`,
              '--origin-y': `${icon.originY}px`,
              '--origin-rot': `${icon.originRot}deg`,
            }}
          >
            {/* Front-Facing Glossy Squircle Tile */}
            <div
              className={`
                relative ${icon.size} rounded-[18px] sm:rounded-[22px] md:rounded-[26px] ${icon.bgColor} ${icon.shadowClass}
                p-2 sm:p-2.5 md:p-3 flex items-center justify-center
                border border-white/25 overflow-hidden
                transition-transform duration-300 hover:scale-110 active:scale-95 hover:shadow-2xl
              `}
            >
              {/* Specular Surface Curved Glass Reflection */}
              <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/35 via-white/10 to-transparent rounded-t-[18px] sm:rounded-t-[22px] md:rounded-t-[26px] pointer-events-none" />
              
              {/* Subtle Radial Surface Highlight */}
              <div className="absolute inset-0 bg-radial from-white/15 via-transparent to-black/20 pointer-events-none" />

              {/* Inner Brand Vector */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <IconComponent />
              </div>

              {/* Ambient Glow */}
              <div
                className="absolute -inset-1 rounded-full blur-xl -z-10 pointer-events-none opacity-25"
                style={{ backgroundColor: icon.tint }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ============================================================================
// 3. BACKGROUND STREAMING ICONS (Soft & Translucent)
// ============================================================================
export const BackgroundIconStream = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      <div 
        className="absolute left-1/2 bottom-[105px] md:bottom-[125px] -translate-x-1/2 w-0 h-0"
        style={{ perspective: '1400px' }}
      >
        {STREAMING_BACKGROUND_ITEMS.map((item, idx) => {
          const SvgComp = StreamVectorGlyphs[item.type] || StreamVectorGlyphs.spotify;

          return (
            <div
              key={`bg-stream-${idx}`}
              className="absolute top-0"
              style={{
                left: `${item.startX}px`,
                animation: `${item.anim} ${item.dur} cubic-bezier(0.2, 0.8, 0.3, 1) ${item.delay} infinite`,
                opacity: 0,
                willChange: 'transform, opacity',
              }}
            >
              <div
                className="relative w-13 h-13 md:w-15 md:h-15 rounded-[18px] md:rounded-[20px] bg-[#1a1612]/35 backdrop-blur-md border border-white/25 flex items-center justify-center p-3 transition-transform"
                style={{
                  boxShadow: `
                    0 14px 28px -4px rgba(35, 20, 10, 0.22),
                    0 6px 12px rgba(35, 20, 10, 0.14),
                    0 1px 0 rgba(255, 255, 255, 0.3) inset,
                    0 0 16px rgba(255, 255, 255, 0.08)
                  `,
                }}
              >
                <div className="absolute top-0 inset-x-0 h-[45%] rounded-t-[17px] bg-gradient-to-b from-white/30 via-white/5 to-transparent pointer-events-none" />
                <div className="relative z-10 w-full h-full flex items-center justify-center opacity-80 filter drop-shadow-sm">
                  <SvgComp />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ============================================================================
// 4. "OUR REVIEWS" SECTION (7 Icon-Only Styled 3D Cards)
// ============================================================================
export const ReviewsSection = () => {
  const handleCardClick = (title, e) => {
    e.stopPropagation();
    confetti({
      particleCount: 35,
      spread: 70,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      },
      colors: ['#4285F4', '#6366F1', '#0EA5E9', '#F43F5E', '#10B981', '#F59E0B', '#FF5E3A'],
      ticks: 140,
      gravity: 0.8,
      scalar: 1.0,
    });
  };

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F7F4EE] via-[#FAF7F2] to-[#EFEAE0] overflow-hidden border-t border-amber-950/5">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-r from-orange-200/20 via-rose-200/25 to-indigo-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/80 shadow-sm text-xs font-semibold text-gray-800 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>Real Community Feedback</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 text-center leading-tight">
          Our <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-indigo-600 bg-clip-text text-transparent">Reviews</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-600 text-center max-w-2xl font-medium leading-relaxed">
          Select a category to explore authentic reviews, ratings, and shared experiences.
        </p>

        {/* 7 Review Cards Styled as 3D Glossy App Icons (Icon + Heading Only) */}
        <div className="mt-10 sm:mt-14 md:mt-16 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap justify-center gap-3.5 sm:gap-5 md:gap-8 max-w-6xl">
          {REVIEWS_CARDS_DATA.map((card) => {
            const IconRender = card.renderIcon;

            return (
              <div
                key={card.id}
                onClick={(e) => handleCardClick(card.title, e)}
                className={`
                  group relative w-full sm:w-[170px] sm:h-[200px] md:w-[200px] md:h-[230px] min-h-[165px] sm:min-h-[200px]
                  rounded-[22px] sm:rounded-[28px] md:rounded-[34px] p-3.5 sm:p-5 md:p-6
                  ${card.bgClass} ${card.shadowClass}
                  flex flex-col items-center justify-between text-center
                  transition-all duration-300 ease-out cursor-pointer select-none
                  hover:-translate-y-2.5 hover:scale-105 active:scale-95
                  border border-white/30 overflow-hidden
                `}
                style={{
                  boxShadow: `
                    0 1.5px 0 rgba(255, 255, 255, 0.5) inset,
                    0 -2px 5px rgba(0, 0, 0, 0.25) inset,
                    0 10px 24px -4px ${card.glowColor},
                    0 18px 40px -8px rgba(35, 25, 15, 0.2)
                  `
                }}
              >
                {/* Top Curved Glass Reflection */}
                <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/35 via-white/10 to-transparent rounded-t-[22px] sm:rounded-t-[28px] md:rounded-t-[34px] pointer-events-none" />
                <div className="absolute inset-0 bg-radial from-white/15 via-transparent to-black/20 pointer-events-none" />

                {/* Top Corner Action Arrow */}
                <div className="w-full flex justify-end">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-current" />
                  </div>
                </div>

                {/* Center Vector Icon */}
                <div className="relative z-10 flex items-center justify-center my-auto transition-transform duration-300 group-hover:scale-110">
                  <IconRender />
                </div>

                {/* Bold Heading (No body paragraph) */}
                <div className="relative z-10 w-full mt-2 sm:mt-0">
                  <h3 className={`text-xs sm:text-sm md:text-[16px] font-bold tracking-tight leading-snug ${card.textColor}`}>
                    {card.title}
                  </h3>
                </div>

                {/* Ambient dynamic glow on hover */}
                <div
                  className="absolute -inset-2 rounded-full blur-2xl -z-10 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ backgroundColor: card.glowColor }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN ALL-IN-ONE FOLLOW_UP APP COMPONENT (Default Export)
// ============================================================================
export default function FollowPage({ onClose }) {
  const [burstCount, setBurstCount] = useState(0);

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else if (onClose) {
      onClose();
    } else {
      window.location.hash = '#home';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const triggerBurst = (e) => {
    if (e) e.stopPropagation();
    setBurstCount(prev => prev + 1);

    confetti({
      particleCount: 55,
      spread: 120,
      origin: { y: 0.65, x: 0.5 },
      colors: ['#25F4EE', '#FE2C55', '#25D366', '#1DA1F2', '#E60023', '#9146FF', '#FFFC00', '#EA4335'],
      ticks: 240,
      gravity: 0.75,
      scalar: 1.15,
      shapes: ['square', 'circle']
    });
  };

  const scrollToReviews = (e) => {
    e.stopPropagation();
    const reviewsEl = document.getElementById('our-reviews');
    if (reviewsEl) {
      reviewsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F7F4EE] text-gray-900 flex flex-col items-center relative overflow-x-hidden selection:bg-rose-500 selection:text-white">
      <EmbeddedFollowUpStyles />

      {/* Top Header Navigation Bar with Clean Back & Home Buttons */}
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 pt-4 sm:pt-6 flex items-center justify-start gap-3 z-50 relative pointer-events-auto">
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

      {/* =======================================================================
          HERO SECTION (Phone & Blooming Foreground Bouquet + Background Stream)
          ======================================================================= */}
      <section 
        className="w-full min-h-screen flex items-center justify-center relative overflow-hidden select-none cursor-pointer"
        onClick={triggerBurst}
      >
        {/* Warm Studio Lighting Radial Backdrops */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[750px] rounded-full blur-[100px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle at 50% 42%, #FFFFFF 0%, #FAF6EE 50%, #EDE6D8 100%)'
          }}
        />
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.9) 0%, rgba(247, 244, 238, 0.7) 60%, #E9E1D2 100%)'
          }}
        />
        <div 
          className="absolute bottom-0 inset-x-0 h-[42%] pointer-events-none z-0"
          style={{
            background: 'linear-gradient(to top, #E2DACB 0%, rgba(237, 230, 218, 0.75) 45%, transparent 100%)'
          }}
        />

        {/* Dynamic Background Animated Icon Stream */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-[860px] h-[460px] sm:h-[500px] md:h-[560px] mt-28 sm:mt-24 md:mt-28">
            <BackgroundIconStream key={burstCount} />
          </div>
        </div>

        {/* Header Section: Title and 2-3 Line Description */}
        <div className="absolute top-3 sm:top-6 inset-x-0 z-30 flex flex-col items-center text-center px-4 pointer-events-none">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-black tracking-tight text-gray-900 leading-none drop-shadow-sm">
            Follow <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-indigo-600 bg-clip-text text-transparent">Up</span>
          </h1>

          <p className="mt-2 sm:mt-3 text-[11px] sm:text-sm md:text-[15px] font-medium text-gray-600 max-w-xs sm:max-w-md md:max-w-lg leading-relaxed text-balance">
            Connect, stream, and amplify your digital presence across every platform in real time.
            Tap anywhere to launch brand particles and explore your social ecosystem.
          </p>
        </div>

        {/* Main Phone & Icon Cluster Container */}
        <div className="relative z-20 w-full max-w-[860px] h-[460px] sm:h-[500px] md:h-[560px] mt-28 sm:mt-24 md:mt-28 flex items-center justify-center pointer-events-auto">
          <div className="absolute inset-x-0 top-0 bottom-[110px] sm:bottom-[130px] md:bottom-[150px]">
            <IconCluster key={burstCount} />
          </div>

          <div 
            className="absolute bottom-2 sm:bottom-4 md:bottom-6 inset-x-0 cursor-pointer flex justify-center"
            onClick={triggerBurst}
          >
            <PhoneMockup />
          </div>
        </div>

        {/* Scroll Prompt */}
        <div 
          onClick={scrollToReviews}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-gray-200/70 shadow-sm text-xs font-semibold text-gray-700 hover:text-gray-950 hover:bg-white transition-all cursor-pointer animate-bounce"
        >
          <span>Scroll to Our Reviews</span>
          <ChevronDown className="w-3.5 h-3.5 text-gray-600" />
        </div>
      </section>

      {/* =======================================================================
          "OUR REVIEWS" SECTION (7 Glossy 3D App-Icon Cards)
          ======================================================================= */}
      <div id="our-reviews" className="w-full">
        <ReviewsSection />
      </div>
    </div>
  );
}
