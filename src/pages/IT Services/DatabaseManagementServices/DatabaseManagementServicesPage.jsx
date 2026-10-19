import React, { useState, useEffect, useRef } from 'react';
import { Home } from 'lucide-react';
import { DATABASE_SERVICES_51 } from './DatabaseManagementServicesPageData.js';

/* =========================================================================
   1. EMBEDDED STYLES & ANIMATION KEYFRAMES (Converted from custom CSS)
   ========================================================================= */
export const DatabaseGlobalStyles = () => (
  <style>{`
    @keyframes titleSlideInUp {
      0% {
        opacity: 0;
        transform: translateY(18px);
        filter: blur(4px);
      }
      60% {
        filter: blur(1px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
        filter: blur(0px);
      }
    }

    @keyframes titleSlideOutUp {
      0% {
        opacity: 1;
        transform: translateY(0px);
        filter: blur(0px);
      }
      100% {
        opacity: 0;
        transform: translateY(-16px);
        filter: blur(4px);
      }
    }

    @keyframes descSlideIn {
      0% {
        opacity: 0;
        transform: translateY(14px);
        filter: blur(3px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
        filter: blur(0px);
      }
    }

    @keyframes descSlideOut {
      0% {
        opacity: 1;
        transform: translateY(0px);
        filter: blur(0px);
      }
      100% {
        opacity: 0;
        transform: translateY(-14px);
        filter: blur(3px);
      }
    }

    @keyframes cardShimmerPulse {
      0% {
        box-shadow: 0 4px 20px -4px rgba(2, 132, 199, 0.08);
      }
      50% {
        box-shadow: 0 8px 32px -2px rgba(0, 240, 255, 0.35), 0 0 16px rgba(56, 189, 248, 0.25);
      }
      100% {
        box-shadow: 0 4px 20px -4px rgba(2, 132, 199, 0.08);
      }
    }

    @keyframes badgePop {
      0% {
        transform: scale(0.94);
        opacity: 0.6;
      }
      50% {
        transform: scale(1.06);
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    @keyframes beamSweep {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(200%);
      }
    }

    @keyframes float-subtle {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-5px);
      }
    }

    @keyframes pulse-glow {
      0%, 100% {
        opacity: 0.85;
        filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.5));
      }
      50% {
        opacity: 1;
        filter: drop-shadow(0 0 18px rgba(56, 189, 248, 0.8));
      }
    }

    .animate-title-enter {
      animation: titleSlideInUp 0.42s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .animate-title-exit {
      animation: titleSlideOutUp 0.36s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .animate-desc-enter {
      animation: descSlideIn 0.44s cubic-bezier(0.16, 1, 0.3, 1) 0.03s forwards;
    }

    .animate-desc-exit {
      animation: descSlideOut 0.34s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .animate-card-pulse {
      animation: cardShimmerPulse 0.5s ease-out forwards;
    }

    .animate-badge-pop {
      animation: badgePop 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    }

    .animate-beam-sweep {
      animation: beamSweep 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .animate-float {
      animation: float-subtle 4s ease-in-out infinite;
    }

    .animate-pulse-glow {
      animation: pulse-glow 3s ease-in-out infinite;
    }
  `}</style>
);

/* =========================================================================
   2. BACKGROUND ATMOSPHERIC DECORATIONS
   ========================================================================= */
export const BackgroundDecorations = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
    {/* Top-Right Decorative Dot Matrix */}
    <div className="absolute top-6 right-8 sm:top-10 sm:right-14 opacity-70">
      <svg width="84" height="84" viewBox="0 0 84 84" fill="none">
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 18 + 6}
              cy={row * 18 + 6}
              r="1.8"
              fill="#cbdff7"
            />
          ))
        )}
      </svg>
    </div>

    {/* Bottom-Left Decorative Dot Matrix */}
    <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 opacity-70">
      <svg width="84" height="84" viewBox="0 0 84 84" fill="none">
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 18 + 6}
              cy={row * 18 + 6}
              r="1.8"
              fill="#cbdff7"
            />
          ))
        )}
      </svg>
    </div>

    {/* Top-Right Curved Ambient Glow / Organic Wave */}
    <div
      className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(219, 234, 254, 0.45) 0%, rgba(239, 246, 255, 0.2) 50%, transparent 70%)',
        filter: 'blur(30px)'
      }}
    />

    {/* Subtle Arc Wave in Top-Right */}
    <svg
      className="absolute top-0 right-0 w-[420px] h-[360px] opacity-40"
      viewBox="0 0 420 360"
      fill="none"
    >
      <path
        d="M420 40C300 40 220 120 200 240C190 300 170 340 120 360"
        stroke="#bfdbfe"
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />
      <circle cx="200" cy="240" r="3" fill="#93c5fd" />
    </svg>

    {/* Bottom-Center Base Ambient Soft Glow */}
    <div
      className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] rounded-full pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(186, 230, 253, 0.35) 0%, rgba(224, 242, 254, 0.15) 50%, transparent 80%)',
        filter: 'blur(40px)'
      }}
    />
  </div>
);

/* =========================================================================
   3. 3D VECTOR GRADIENTS & ICONS
   ========================================================================= */
export const IconGradients = () => (
  <svg width="0" height="0" className="absolute w-0 h-0 pointer-events-none">
    <defs>
      <linearGradient id="primaryBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="45%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
      <linearGradient id="cyanAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#67e8f9" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="purpleBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
      <filter id="iconSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#0f172a" floodOpacity="0.25" />
      </filter>
      <filter id="neonDatabaseGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#00f0ff" floodOpacity="0.85" />
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0284c7" floodOpacity="0.45" />
      </filter>
      <linearGradient id="databaseNeonSlit" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00f0ff" />
        <stop offset="50%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#00f0ff" />
      </linearGradient>
      <radialGradient id="dbBackdropAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.75" />
        <stop offset="45%" stopColor="#00f0ff" stopOpacity="0.35" />
        <stop offset="85%" stopColor="#0284c7" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

export const CloudIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className}>
    <path d="M33 19.5C32 13.5 27 9.5 21 9.5C16.2 9.5 12.2 12.2 10.3 16.3C5.5 16.9 2 21 2 26C2 31.5 6.5 35.5 12 35.5H32.5C37.2 35.5 41 31.8 41 27.2C41 22.8 37.4 19.8 33 19.5Z" fill="url(#primaryBlueGrad)" filter="url(#iconSoftShadow)" />
    <path d="M21 11C25.5 11 29.5 14 30.8 18.5C28.2 16.5 24.8 15.5 21 15.5C16.5 15.5 12.5 17 9.8 19.5C11.2 14.5 15.8 11 21 11Z" fill="#ffffff" fillOpacity="0.4" />
  </svg>
);

export const BrainIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className}>
    <path d="M13 14C10.8 14 9 15.8 9 18C9 18.5 9.1 19 9.3 19.4C7.4 20.3 6 22.3 6 24.5C6 27.2 8 29.4 10.6 29.9C10.9 32.2 12.8 34 15.2 34C17.2 34 18.9 32.7 19.6 30.8C20.3 31.5 21.3 32 22.5 32H23V14H22C20.7 14 19.6 14.7 19 15.7C18.2 14.7 16.9 14 15.5 14H13Z" fill="url(#primaryBlueGrad)" filter="url(#iconSoftShadow)" />
    <path d="M31 14C33.2 14 35 15.8 35 18C35 18.5 34.9 19 34.7 19.4C36.6 20.3 38 22.3 38 24.5C38 27.2 36 29.4 33.4 29.9C33.1 32.2 31.2 34 28.8 34C26.8 34 25.1 32.7 24.4 30.8C23.7 31.5 22.7 32 21.5 32H21V14H22C23.3 14 24.4 14.7 25 15.7C25.8 14.7 27.1 14 28.5 14H31Z" fill="url(#cyanAccentGrad)" filter="url(#iconSoftShadow)" />
  </svg>
);

export const SparklesIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className}>
    <path d="M22 2L25 14L37 17L25 20L22 32L19 20L7 17L19 14L22 2Z" fill="url(#primaryBlueGrad)" filter="url(#iconSoftShadow)" />
    <path d="M34 28L35.5 34L41.5 35.5L35.5 37L34 43L32.5 37L26.5 35.5L32.5 34L34 28Z" fill="url(#cyanAccentGrad)" />
  </svg>
);

export const DatabaseIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className}>
    <circle cx="22" cy="22" r="19" fill="url(#dbBackdropAura)" />
    <ellipse cx="22" cy="11.5" rx="14.5" ry="5.5" fill="url(#cyanAccentGrad)" filter="url(#neonDatabaseGlow)" />
    <ellipse cx="22" cy="10.5" rx="11" ry="3.5" fill="#ffffff" fillOpacity="0.55" />
    <path d="M7.5 11.5V19.5C7.5 22.8 14 25 22 25C30 25 36.5 22.8 36.5 19.5V11.5" fill="url(#primaryBlueGrad)" filter="url(#iconSoftShadow)" />
    <ellipse cx="22" cy="19.5" rx="14.5" ry="4.8" fill="#00f0ff" filter="url(#neonDatabaseGlow)" />
    <path d="M9 19.5C9 21.6 14.8 23.3 22 23.3C29.2 23.3 35 21.6 35 19.5" stroke="url(#databaseNeonSlit)" strokeWidth="1.8" strokeLinecap="round" />
    <rect x="18" y="14" width="8" height="2" rx="1" fill="#00f0ff" filter="url(#neonDatabaseGlow)" />
    <circle cx="20" cy="15" r="0.8" fill="#ffffff" />
    <circle cx="24" cy="15" r="0.8" fill="#ffffff" />
    <path d="M7.5 20V28.5C7.5 32 14 34.5 22 34.5C30 34.5 36.5 32 36.5 28.5V20" fill="url(#primaryBlueGrad)" />
    <ellipse cx="22" cy="28.5" rx="14.5" ry="4.8" fill="#00f0ff" filter="url(#neonDatabaseGlow)" opacity="0.9" />
    <path d="M9 28.5C9 30.6 14.8 32.3 22 32.3C29.2 32.3 35 30.6 35 28.5" stroke="url(#databaseNeonSlit)" strokeWidth="1.8" strokeLinecap="round" />
    <rect x="18" y="23" width="8" height="2" rx="1" fill="#00f0ff" filter="url(#neonDatabaseGlow)" />
    <circle cx="20" cy="24" r="0.8" fill="#ffffff" />
    <circle cx="24" cy="24" r="0.8" fill="#ffffff" />
    <path d="M7.5 29V32.5C7.5 36 14 38 22 38C30 38 36.5 36 36.5 32.5V29" fill="url(#cyanAccentGrad)" />
    <ellipse cx="22" cy="32.5" rx="14.5" ry="4.8" stroke="#00f0ff" strokeWidth="1.2" strokeOpacity="0.9" />
    <circle cx="8" cy="19.5" r="1.5" fill="#ffffff" filter="url(#neonDatabaseGlow)" />
    <circle cx="36" cy="28.5" r="1.5" fill="#ffffff" filter="url(#neonDatabaseGlow)" />
  </svg>
);

export const LayersIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className}>
    <path d="M22 6L4 15L22 24L40 15L22 6Z" fill="url(#cyanAccentGrad)" filter="url(#iconSoftShadow)" />
    <path d="M4 22L22 31L40 22" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 29L22 38L40 29" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SearchIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className}>
    <circle cx="19" cy="19" r="12" fill="url(#primaryBlueGrad)" filter="url(#iconSoftShadow)" />
    <circle cx="19" cy="19" r="8" fill="#ffffff" fillOpacity="0.85" />
    <path d="M28 28L38 38" stroke="#1d4ed8" strokeWidth="4.5" strokeLinecap="round" />
  </svg>
);

export const CompassIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className}>
    <circle cx="22" cy="22" r="17" fill="url(#primaryBlueGrad)" filter="url(#iconSoftShadow)" />
    <circle cx="22" cy="22" r="14" fill="#ffffff" fillOpacity="0.9" />
    <polygon points="22,11 26,20 33,22 24,24 22,33 18,24 11,22 20,20" fill="url(#cyanAccentGrad)" />
  </svg>
);

export const LightbulbIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className}>
    <path d="M22 5C15.4 5 10 10.4 10 17C10 21.4 12.4 25.2 16 27.2V32C16 32.6 16.4 33 17 33H27C27.6 33 28 32.6 28 32V27.2C31.6 25.2 34 21.4 34 17C34 10.4 28.6 5 22 5Z" fill="url(#primaryBlueGrad)" filter="url(#iconSoftShadow)" />
    <path d="M18 36H26M19.5 39H24.5" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const NetworkIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className}>
    <circle cx="22" cy="11" r="5" fill="url(#cyanAccentGrad)" />
    <circle cx="10" cy="31" r="5" fill="url(#primaryBlueGrad)" />
    <circle cx="34" cy="31" r="5" fill="url(#primaryBlueGrad)" />
    <path d="M20 15L12 27M24 15L32 27M15 31H29" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const TrendingIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className}>
    <path d="M6 34L17 21L25 29L38 12" stroke="url(#cyanAccentGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="29 12 38 12 38 21" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MessageIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className}>
    <path d="M38 21C38 13.8 30.8 8 22 8C13.2 8 6 13.8 6 21C6 24.8 7.9 28.2 11.1 30.6L9 38L16.2 34.5C18 35.1 20 35.5 22 35.5C30.8 35.5 38 29.8 38 21Z" fill="url(#primaryBlueGrad)" filter="url(#iconSoftShadow)" />
    <circle cx="15" cy="21" r="2" fill="#ffffff" />
    <circle cx="22" cy="21" r="2" fill="#ffffff" />
    <circle cx="29" cy="21" r="2" fill="#ffffff" />
  </svg>
);

export const GitIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className}>
    <circle cx="12" cy="12" r="4.5" fill="url(#cyanAccentGrad)" />
    <circle cx="12" cy="32" r="4.5" fill="url(#primaryBlueGrad)" />
    <circle cx="32" cy="18" r="4.5" fill="url(#primaryBlueGrad)" />
    <path d="M12 16V28M12 20C17 20 22 18 28 18" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const GlobeIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className}>
    <circle cx="22" cy="22" r="16" fill="url(#primaryBlueGrad)" filter="url(#iconSoftShadow)" />
    <ellipse cx="22" cy="22" rx="7" ry="16" stroke="#60a5fa" strokeWidth="2" fill="none" />
    <line x1="6" y1="22" x2="38" y2="22" stroke="#60a5fa" strokeWidth="2" />
  </svg>
);

export const DocumentIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 40 44" fill="none" className={className}>
    <path d="M5 6C5 3.8 6.8 2 9 2H25L37 14V38C37 40.2 35.2 42 33 42H9C6.8 42 5 40.2 5 38V6Z" fill="url(#primaryBlueGrad)" filter="url(#iconSoftShadow)" />
    <path d="M25 2V12C25 13.1 25.9 14 27 14H37L25 2Z" fill="url(#cyanAccentGrad)" />
    <rect x="11" y="19" width="10" height="3" rx="1.5" fill="#ffffff" />
    <rect x="11" y="25" width="20" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.95" />
    <rect x="11" y="31" width="20" height="3" rx="1.5" fill="#ffffff" fillOpacity="0.95" />
  </svg>
);

export const ChartIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" fill="none" className={className}>
    <rect x="4" y="4" width="2.5" height="36" rx="1.25" fill="#1e3a8a" />
    <rect x="4" y="37.5" width="36" height="2.5" rx="1.25" fill="#1e3a8a" />
    <rect x="10" y="23" width="8" height="15" rx="3" fill="url(#cyanAccentGrad)" />
    <rect x="21" y="13" width="8" height="25" rx="3" fill="url(#primaryBlueGrad)" />
    <rect x="32" y="5" width="8" height="33" rx="3" fill="url(#primaryBlueGrad)" />
  </svg>
);

export const ShieldLockIcon = ({ className = "w-10 h-11" }) => (
  <svg viewBox="0 0 42 48" fill="none" className={className}>
    <path d="M21 1.5L2 7.5V21C2 33 10 42.5 21 45.5C32 42.5 40 33 40 21V7.5L21 1.5Z" fill="url(#primaryBlueGrad)" filter="url(#iconSoftShadow)" />
    <rect x="14" y="23.5" width="14" height="12" rx="3" fill="#ffffff" />
    <path d="M16.5 23.5V19C16.5 16.5 18.5 14.5 21 14.5C23.5 14.5 25.5 16.5 25.5 19V23.5" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" />
    <circle cx="21" cy="28.5" r="1.8" fill="#1e3a8a" />
  </svg>
);

export const ServerRackIcon = ({ className = "w-11 h-11" }) => (
  <svg viewBox="0 0 44 42" fill="none" className={className}>
    <rect x="2" y="2" width="40" height="10.5" rx="4" fill="url(#primaryBlueGrad)" filter="url(#iconSoftShadow)" />
    <circle cx="33" cy="7.25" r="1.8" fill="#38bdf8" />
    <rect x="2" y="15.5" width="40" height="10.5" rx="4" fill="url(#primaryBlueGrad)" filter="url(#iconSoftShadow)" />
    <circle cx="33" cy="20.75" r="1.8" fill="#38bdf8" />
    <rect x="2" y="29" width="40" height="10.5" rx="4" fill="url(#primaryBlueGrad)" filter="url(#iconSoftShadow)" />
    <circle cx="33" cy="34.25" r="1.8" fill="#38bdf8" />
  </svg>
);

export const CapabilityIcon = ({ type, className = "w-10 h-10" }) => {
  switch (type) {
    case 'brain': return <BrainIcon className={className} />;
    case 'database': return <DatabaseIcon className={className} />;
    case 'layers': return <LayersIcon className={className} />;
    case 'search': return <SearchIcon className={className} />;
    case 'compass': return <CompassIcon className={className} />;
    case 'lightbulb': return <LightbulbIcon className={className} />;
    case 'network': return <NetworkIcon className={className} />;
    case 'trending': return <TrendingIcon className={className} />;
    case 'message': return <MessageIcon className={className} />;
    case 'git': return <GitIcon className={className} />;
    case 'globe': return <GlobeIcon className={className} />;
    case 'doc': return <DocumentIcon className={className} />;
    case 'chart': return <ChartIcon className={className} />;
    case 'shield': return <ShieldLockIcon className={className} />;
    case 'server': return <ServerRackIcon className={className} />;
    case 'cloud': return <CloudIcon className={className} />;
    default: return <SparklesIcon className={className} />;
  }
};

/* =========================================================================
   4. 3D METALLIC DATABASE SERVER COMPONENT (100% Vector SVG)
   ========================================================================= */
export const DatabaseServer3D = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 320 340" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="ledBloom" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2.2" result="glow" />
        <feMerge>
          <feMergeNode in="glow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="groundShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="12" />
      </filter>
      <linearGradient id="metallicBodyGrad" x1="52" y1="0" x2="268" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#69839c" />
        <stop offset="8%" stopColor="#8ba2ba" />
        <stop offset="18%" stopColor="#b4c7da" />
        <stop offset="27%" stopColor="#eaf1f8" />
        <stop offset="33%" stopColor="#ffffff" />
        <stop offset="40%" stopColor="#d5e3ef" />
        <stop offset="54%" stopColor="#9fb5cb" />
        <stop offset="72%" stopColor="#678099" />
        <stop offset="88%" stopColor="#4c657d" />
        <stop offset="100%" stopColor="#3c5369" />
      </linearGradient>
      <linearGradient id="metallicBodyGradBottom" x1="52" y1="0" x2="268" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#65809a" />
        <stop offset="8%" stopColor="#849db6" />
        <stop offset="18%" stopColor="#acc1d4" />
        <stop offset="27%" stopColor="#e2ebf4" />
        <stop offset="33%" stopColor="#ffffff" />
        <stop offset="41%" stopColor="#ccdce8" />
        <stop offset="55%" stopColor="#94abbf" />
        <stop offset="73%" stopColor="#607991" />
        <stop offset="88%" stopColor="#476078" />
        <stop offset="100%" stopColor="#364d64" />
      </linearGradient>
      <linearGradient id="lidSurfaceGrad" x1="160" y1="65" x2="160" y2="135" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#e9f1f8" />
        <stop offset="40%" stopColor="#c5d7e8" />
        <stop offset="80%" stopColor="#9cb3c8" />
        <stop offset="100%" stopColor="#7a92a9" />
      </linearGradient>
      <linearGradient id="innerCavityGrad" x1="160" y1="75" x2="160" y2="125" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#88a0b5" />
        <stop offset="50%" stopColor="#b2c6d8" />
        <stop offset="100%" stopColor="#e2edf6" />
      </linearGradient>
      <linearGradient id="innerCenterGrad" x1="160" y1="84" x2="160" y2="116" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#d3e2ef" />
        <stop offset="100%" stopColor="#9cb4c9" />
      </linearGradient>
      <linearGradient id="neonCyanGlow" x1="52" y1="0" x2="268" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.85" />
        <stop offset="20%" stopColor="#00f5ff" />
        <stop offset="35%" stopColor="#ffffff" />
        <stop offset="50%" stopColor="#00f5ff" />
        <stop offset="80%" stopColor="#00c8f8" />
        <stop offset="100%" stopColor="#0077b6" stopOpacity="0.85" />
      </linearGradient>
      <linearGradient id="baseFlangeGrad" x1="28" y1="0" x2="292" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#556e84" />
        <stop offset="12%" stopColor="#88a1b7" />
        <stop offset="25%" stopColor="#c6d9ea" />
        <stop offset="32%" stopColor="#ffffff" />
        <stop offset="42%" stopColor="#b8cde0" />
        <stop offset="65%" stopColor="#7993a9" />
        <stop offset="85%" stopColor="#51697f" />
        <stop offset="100%" stopColor="#3c5266" />
      </linearGradient>
      <linearGradient id="pedestalBaseGrad" x1="40" y1="0" x2="280" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#43586b" />
        <stop offset="30%" stopColor="#8ba4ba" />
        <stop offset="70%" stopColor="#5d768c" />
        <stop offset="100%" stopColor="#304354" />
      </linearGradient>
      <linearGradient id="driveSlotBevel" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#030811" />
        <stop offset="80%" stopColor="#0a1829" />
        <stop offset="100%" stopColor="#224060" />
      </linearGradient>
      <linearGradient id="cyanUnderglowBeam" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00f0ff" stopOpacity="0" />
        <stop offset="20%" stopColor="#00f0ff" stopOpacity="0.75" />
        <stop offset="45%" stopColor="#38bdf8" stopOpacity="1" />
        <stop offset="75%" stopColor="#00f0ff" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#00c8f8" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Ground Ambient Cast Shadow */}
    <ellipse cx="160" cy="272" rx="130" ry="32" fill="#0284c7" fillOpacity="0.14" filter="url(#groundShadow)" />
    <ellipse cx="160" cy="270" rx="115" ry="24" fill="#000000" fillOpacity="0.18" filter="url(#groundShadow)" />

    {/* Flange Base Pedestal */}
    <path d="M 40 260 C 40 252 80 248 160 248 C 240 248 280 252 280 260 L 280 268 C 280 276 240 282 160 282 C 80 282 40 276 40 268 Z" fill="url(#pedestalBaseGrad)" />
    <path d="M 28 250 C 28 238 75 232 160 232 C 245 232 292 238 292 250 L 292 256 C 292 268 245 274 160 274 C 75 274 28 268 28 256 Z" fill="url(#baseFlangeGrad)" />
    <ellipse cx="160" cy="250" rx="132" ry="18" fill="#b9cede" stroke="#ffffff" strokeWidth="1.2" />

    {/* Electric Underglow Neon Curved Beam on Bottom Base */}
    <path d="M 44 260 C 95 273 210 275 275 258 C 240 271 130 274 44 260 Z" fill="url(#cyanUnderglowBeam)" filter="url(#neonGlow)" />

    {/* TIER 3 (BOTTOM CYLINDER) */}
    <g id="bottom-tier">
      <path d="M 52 195 L 52 240 C 52 262 100 270 160 270 C 220 270 268 262 268 240 L 268 195 Z" fill="url(#metallicBodyGradBottom)" />
      <path d="M 52 195 C 52 216 100 224 160 224 C 220 224 268 216 268 195 C 268 174 220 166 160 166 C 100 166 52 174 52 195 Z" fill="#758ea3" />
      <ellipse cx="160" cy="240" rx="108" ry="30" fill="none" stroke="#2a4055" strokeWidth="1.5" strokeOpacity="0.45" />

      {/* Drive Bay Slot Bottom */}
      <g transform="translate(178, 228) rotate(-11)">
        <rect x="-30" y="-10" width="60" height="20" rx="10" fill="url(#driveSlotBevel)" stroke="#1a2d40" strokeWidth="1.5" />
        <rect x="-29" y="-9" width="58" height="18" rx="9" fill="none" stroke="#00f0ff" strokeWidth="0.8" strokeOpacity="0.5" />
        <circle cx="-16" cy="0" r="3.2" fill="#00f5ff" filter="url(#ledBloom)" />
        <circle cx="-16" cy="0" r="1.5" fill="#ffffff" />
        <circle cx="0" cy="0" r="3.2" fill="#00f5ff" filter="url(#ledBloom)" />
        <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
        <circle cx="16" cy="0" r="3.2" fill="#00f5ff" filter="url(#ledBloom)" />
        <circle cx="16" cy="0" r="1.5" fill="#ffffff" />
      </g>
    </g>

    {/* NEON RING 2 (LOWER NEON SLIT) */}
    <ellipse cx="160" cy="195" rx="109" ry="29" fill="none" stroke="#003554" strokeWidth="8" strokeOpacity="0.5" />
    <ellipse cx="160" cy="195" rx="108" ry="28.5" fill="none" stroke="url(#neonCyanGlow)" strokeWidth="6.5" filter="url(#neonGlow)" />
    <ellipse cx="160" cy="195" rx="107.5" ry="28" fill="none" stroke="#ffffff" strokeWidth="1.8" />

    {/* TIER 2 (MIDDLE CYLINDER) */}
    <g id="middle-tier">
      <path d="M 52 135 L 52 190 C 52 211 100 219 160 219 C 220 219 268 211 268 190 L 268 135 Z" fill="url(#metallicBodyGrad)" />
      <path d="M 52 135 C 52 156 100 164 160 164 C 220 164 268 156 268 135 C 268 114 220 106 160 106 C 100 106 52 114 52 135 Z" fill="#758ea3" />

      {/* Drive Bay Slot Middle */}
      <g transform="translate(178, 168) rotate(-11)">
        <rect x="-30" y="-10" width="60" height="20" rx="10" fill="url(#driveSlotBevel)" stroke="#1a2d40" strokeWidth="1.5" />
        <rect x="-29" y="-9" width="58" height="18" rx="9" fill="none" stroke="#00f0ff" strokeWidth="0.8" strokeOpacity="0.5" />
        <circle cx="-16" cy="0" r="3.2" fill="#00f5ff" filter="url(#ledBloom)" />
        <circle cx="-16" cy="0" r="1.5" fill="#ffffff" />
        <circle cx="0" cy="0" r="3.2" fill="#00f5ff" filter="url(#ledBloom)" />
        <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
        <circle cx="16" cy="0" r="3.2" fill="#00f5ff" filter="url(#ledBloom)" />
        <circle cx="16" cy="0" r="1.5" fill="#ffffff" />
      </g>
    </g>

    {/* NEON RING 1 (UPPER NEON SLIT) */}
    <ellipse cx="160" cy="135" rx="109" ry="29" fill="none" stroke="#003554" strokeWidth="8" strokeOpacity="0.5" />
    <ellipse cx="160" cy="135" rx="108" ry="28.5" fill="none" stroke="url(#neonCyanGlow)" strokeWidth="6.5" filter="url(#neonGlow)" />
    <ellipse cx="160" cy="135" rx="107.5" ry="28" fill="none" stroke="#ffffff" strokeWidth="1.8" />

    {/* TIER 1 (TOP CYLINDER BODY) */}
    <g id="top-tier">
      <path d="M 52 75 L 52 130 C 52 151 100 159 160 159 C 220 159 268 151 268 130 L 268 75 Z" fill="url(#metallicBodyGrad)" />
      <g transform="translate(178, 108) rotate(-11)">
        <rect x="-30" y="-10" width="60" height="20" rx="10" fill="url(#driveSlotBevel)" stroke="#1a2d40" strokeWidth="1.5" />
        <rect x="-29" y="-9" width="58" height="18" rx="9" fill="none" stroke="#00f0ff" strokeWidth="0.8" strokeOpacity="0.5" />
        <circle cx="-16" cy="0" r="3.2" fill="#00f5ff" filter="url(#ledBloom)" />
        <circle cx="-16" cy="0" r="1.5" fill="#ffffff" />
        <circle cx="0" cy="0" r="3.2" fill="#00f5ff" filter="url(#ledBloom)" />
        <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
        <circle cx="16" cy="0" r="3.2" fill="#00f5ff" filter="url(#ledBloom)" />
        <circle cx="16" cy="0" r="1.5" fill="#ffffff" />
      </g>
    </g>

    {/* SERVER TOP LID CASING */}
    <g id="server-top-lid">
      <ellipse cx="160" cy="75" rx="108" ry="29" fill="url(#lidSurfaceGrad)" stroke="#ffffff" strokeWidth="1.6" />
      <ellipse cx="160" cy="75" rx="102" ry="26" fill="none" stroke="#688298" strokeWidth="1.4" strokeOpacity="0.6" />
      <ellipse cx="160" cy="75" rx="86" ry="21.5" fill="url(#innerCavityGrad)" stroke="#4a647a" strokeWidth="1.8" />
      <ellipse cx="160" cy="75" rx="84" ry="20.5" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.8" />
      <ellipse cx="160" cy="75" rx="66" ry="16" fill="url(#innerCenterGrad)" stroke="#748fA5" strokeWidth="1.2" />
      <ellipse cx="160" cy="75" rx="63" ry="14.5" fill="none" stroke="#4a6378" strokeWidth="1.2" strokeOpacity="0.75" />
      <ellipse cx="160" cy="75" rx="42" ry="10" fill="none" stroke="#87a0b5" strokeWidth="1" strokeDasharray="3 3" />
    </g>
  </svg>
);

/* =========================================================================
   5. HERO ACTIVE SERVICE SHOWCASE COMPONENT
   ========================================================================= */
export const HeroContent = ({ activeCapability }) => {
  const cap = activeCapability || DATABASE_SERVICES_51[0];

  const [displayedCap, setDisplayedCap] = useState(cap);
  const [prevCap, setPrevCap] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (cap.id !== displayedCap.id) {
      setPrevCap(displayedCap);
      setDisplayedCap(cap);
      setIsAnimating(true);
      setAnimKey((k) => k + 1);

      const timer = setTimeout(() => {
        setPrevCap(null);
        setIsAnimating(false);
      }, 420);

      return () => clearTimeout(timer);
    }
  }, [cap.id, displayedCap.id, cap]);

  return (
    <div id="db-service-content" className="flex flex-col items-start justify-center w-full max-w-[580px] text-left scroll-mt-6">
      <div className="w-full">
        {/* Category Tag with Glowing Active Dot and Service Counter */}
        <div
          key={`badge-track-${animKey}`}
          className={`flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3.5 ${isAnimating ? 'animate-badge-pop' : ''}`}
        >
          <span className="w-7 sm:w-9 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
          <span className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[12.5px] md:text-[13px] font-bold tracking-[0.14em] sm:tracking-[0.16em] text-blue-600 uppercase select-none">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span>IBCS Database Service</span>
            <span className="text-slate-300 font-normal">|</span>
            <span className="font-mono text-cyan-600 font-extrabold whitespace-nowrap">
              #{String(displayedCap.id).padStart(2, '0')} of 51
            </span>
          </span>
        </div>

        {/* Dynamic Main Heading with Ultra-Smooth Directional Cross-Fade Transition */}
        <div className="relative w-full min-h-[64px] sm:min-h-[80px] lg:min-h-[102px] flex items-start mb-3 sm:mb-4 overflow-hidden">
          {prevCap && isAnimating && (
            <h1
              key={`prev-${prevCap.id}`}
              className="absolute top-0 left-0 w-full flex items-start text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#0d1b2a] tracking-[-0.03em] leading-[1.2] sm:leading-[1.16] lg:leading-[1.15] animate-title-exit pointer-events-none select-none"
            >
              <span>{prevCap.title}</span>
            </h1>
          )}

          <h1
            key={`curr-${displayedCap.id}-${animKey}`}
            className={`w-full flex items-start text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#0d1b2a] tracking-[-0.03em] leading-[1.2] sm:leading-[1.16] lg:leading-[1.15] ${
              isAnimating ? 'animate-title-enter' : ''
            }`}
          >
            <span className="bg-gradient-to-r from-[#0d1b2a] via-[#1e293b] to-[#0369a1] bg-clip-text text-transparent">
              {displayedCap.title}
            </span>
          </h1>
        </div>

        {/* FULL Detailed Description with Silky Cross-Fade Transition & Dynamic Border Shimmer */}
        <div
          className={`relative w-full mb-4 sm:mb-7 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/85 backdrop-blur-md transition-all duration-300 min-h-[160px] sm:min-h-[150px] lg:min-h-[155px] flex items-start overflow-hidden border ${
            isAnimating
              ? 'border-cyan-400 ring-2 ring-cyan-400/25 shadow-[0_8px_32px_-2px_rgba(0,240,255,0.28)]'
              : 'border-blue-100/90 shadow-[0_4px_20px_-4px_rgba(2,132,199,0.08)]'
          }`}
        >
          {/* Dynamic Light Sweep Bar across top border during transition */}
          <div
            className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-300 ${
              isAnimating ? 'opacity-100 animate-beam-sweep' : 'opacity-20'
            }`}
          />

          {prevCap && isAnimating && (
            <p
              key={`desc-prev-${prevCap.id}`}
              className="absolute inset-3.5 sm:inset-5 text-[#334155] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.65] sm:leading-[1.78] font-normal text-left animate-desc-exit pointer-events-none select-none"
            >
              {prevCap.description}
            </p>
          )}

          <p
            key={`desc-curr-${displayedCap.id}-${animKey}`}
            className={`w-full text-[#334155] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.65] sm:leading-[1.78] font-normal text-left ${
              isAnimating ? 'animate-desc-enter' : ''
            }`}
          >
            {displayedCap.description}
          </p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   6. 3D CENTRAL ORBIT NETWORK DIAGRAM COMPONENT
   ========================================================================= */
export const NetworkDiagram = ({ onActiveRightCapabilityChange }) => {
  const [activeCardId, setActiveCardId] = useState(null);
  const [isAutoMoving, setIsAutoMoving] = useState(true);

  // Animation state driven by requestAnimationFrame for silky 60fps curved orbital math
  const [globalStreamPos, setGlobalStreamPos] = useState(0);

  const animFrameRef = useRef(null);
  const tweenRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const globalPosRef = useRef(0);
  const isAutoMovingRef = useRef(true);

  // Center coordinate of diagram in 760x620 viewBox
  const cx = 380;
  const cy = 310;

  // Elliptical orbit radii
  const Rx = 215;
  const Ry = 165;
  const rNodeX = 155;
  const rNodeY = 118;
  const rCylX = 95;
  const rCylY = 72;

  // 8 Static Fixed Stations
  const staticStations = [
    { index: 0, label: 'Ingestion Portal', theta: Math.PI },
    { index: 1, label: 'Station 2', theta: (5 * Math.PI) / 4 },
    { index: 2, label: 'Station 3', theta: (3 * Math.PI) / 2 },
    { index: 3, label: 'Station 4', theta: (7 * Math.PI) / 4 },
    { index: 4, label: 'Active Inspection', theta: 0 },
    { index: 5, label: 'Station 6', theta: Math.PI / 4 },
    { index: 6, label: 'Station 7', theta: Math.PI / 2 },
    { index: 7, label: 'Station 8', theta: (3 * Math.PI) / 4 }
  ];

  const staticLines = staticStations.map((station) => {
    const theta = station.theta;
    return {
      ...station,
      stationCenter: {
        x: cx + Rx * Math.cos(theta),
        y: cy + Ry * Math.sin(theta)
      },
      nodeDot: {
        x: cx + rNodeX * Math.cos(theta),
        y: cy + rNodeY * Math.sin(theta)
      },
      startPoint: {
        x: cx + rCylX * Math.cos(theta),
        y: cy + rCylY * Math.sin(theta)
      },
      cardConnect: {
        x: cx + (Rx - 30) * Math.cos(theta),
        y: cy + (Ry - 24) * Math.sin(theta)
      }
    };
  });

  useEffect(() => {
    isAutoMovingRef.current = isAutoMoving;
  }, [isAutoMoving]);

  // 60FPS Continuous Orbital Auto-Move Animation Loop
  useEffect(() => {
    const SPEED = 1 / 3200; // station units per ms (1 station / 3.2s)

    const animateLoop = (timestamp) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }
      const delta = Math.min(timestamp - lastTimestampRef.current, 100);
      lastTimestampRef.current = timestamp;

      if (isAutoMovingRef.current && !tweenRef.current) {
        const nextPos = (globalPosRef.current + delta * SPEED) % DATABASE_SERVICES_51.length;
        globalPosRef.current = nextPos;
        setGlobalStreamPos(nextPos);
      }

      animFrameRef.current = requestAnimationFrame(animateLoop);
    };

    animFrameRef.current = requestAnimationFrame(animateLoop);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      if (tweenRef.current) {
        cancelAnimationFrame(tweenRef.current);
      }
    };
  }, []);

  // Calculate position, scale, opacity and continuous label positioning with strictly non-overlapping entry/exit streams
  const getCardPhysics = (progressAlongCircuit) => {
    // Visibility range: from -0.6 (entering from upper conduit) to 8.35 (exiting into lower return conduit)
    if (progressAlongCircuit < -0.6 || progressAlongCircuit > 8.35) {
      return { isVisible: false };
    }

    let scale = 1.0;
    let opacity = 1.0;
    let labelOpacity = 1.0;
    let x = cx - Rx;
    let y = cy;
    let theta = Math.PI;

    if (progressAlongCircuit <= 0) {
      // ENTERING: Card enlarges and appears smoothly along the Upper-Left Intake Conduit towards (cx - Rx, cy)
      const enterNorm = (progressAlongCircuit + 0.6) / 0.6; // 0 to 1
      const easedEnter = Math.sin((enterNorm * Math.PI) / 2);
      opacity = Math.max(0, Math.min(1, easedEnter));
      scale = 0.15 + 0.85 * easedEnter;

      // Trajectory originating from the upper stream gate (separated well above cy)
      const startX = cx - Rx - 55;
      const startY = cy - 36;
      const endX = cx - Rx;
      const endY = cy;

      x = startX + (endX - startX) * easedEnter;
      y = startY + (endY - startY) * easedEnter;
      theta = Math.PI - 0.25 * (1 - easedEnter);
      // Suppress label during early enlargement to prevent text collisions
      labelOpacity = Math.max(0, (easedEnter - 0.45) / 0.55);
    } else if (progressAlongCircuit >= 7.6) {
      // EXITING: Card minimises and departs smoothly along Lower-Left Return Conduit (separated well below cy)
      const exitNorm = Math.min(1, (progressAlongCircuit - 7.6) / 0.7); // 0 to 1
      const easedExit = Math.sin((exitNorm * Math.PI) / 2);
      opacity = Math.max(0, Math.min(1, 1 - easedExit));
      scale = Math.max(0.1, 1.0 - 0.85 * easedExit);

      // Trajectory curving downward and away into the lower return conduit
      const theta0 = Math.PI + 7.6 * (Math.PI / 4); // ~0.9π
      const x0 = cx + Rx * Math.cos(theta0);
      const y0 = cy + Ry * Math.sin(theta0);

      x = x0 - 45 * easedExit;
      y = y0 + 18 * easedExit;
      theta = theta0 + 0.2 * easedExit;
      // Fade label immediately upon starting exit departure
      labelOpacity = Math.max(0, 1 - easedExit * 3);
    } else {
      // MAIN ORBIT: Smooth elliptical path from Station 0 to Station 7.6
      theta = Math.PI + progressAlongCircuit * (Math.PI / 4);
      x = cx + Rx * Math.cos(theta);
      y = cy + Ry * Math.sin(theta);
      scale = 1.0;
      opacity = 1.0;
      labelOpacity = 1.0;
    }

    const cosT = Math.cos(theta);
    const sinT = Math.sin(theta);
    const shiftX = -50 + 50 * cosT;
    const shiftY = -50 + 50 * sinT;

    return {
      isVisible: true,
      x,
      y,
      scale,
      opacity,
      labelOpacity,
      theta,
      cosT,
      sinT,
      shiftX,
      shiftY
    };
  };

  const baseIndex = Math.floor(globalStreamPos);
  const activeCards = [];

  for (let offset = -1; offset <= 9; offset++) {
    const rawCapabilityIndex = baseIndex - offset;
    const globalSeqNum = ((rawCapabilityIndex % DATABASE_SERVICES_51.length) + DATABASE_SERVICES_51.length) % DATABASE_SERVICES_51.length;
    const capability = DATABASE_SERVICES_51[globalSeqNum];
    const progress = globalStreamPos - rawCapabilityIndex;
    const physics = getCardPhysics(progress);

    if (physics.isVisible) {
      activeCards.push({
        ...capability,
        globalIndex: globalSeqNum + 1,
        progress,
        ...physics
      });
    }
  }

  // Active Right-Middle service
  const rightStationRawIndex = Math.round(globalStreamPos - 4);
  const rightStationSeq = ((rightStationRawIndex % DATABASE_SERVICES_51.length) + DATABASE_SERVICES_51.length) % DATABASE_SERVICES_51.length;
  const currentRightCapability = DATABASE_SERVICES_51[rightStationSeq];

  useEffect(() => {
    if (onActiveRightCapabilityChange && currentRightCapability) {
      onActiveRightCapabilityChange(currentRightCapability);
    }
  }, [currentRightCapability?.id, onActiveRightCapabilityChange]);

  const handleStepJump = (delta) => {
    if (tweenRef.current) {
      cancelAnimationFrame(tweenRef.current);
      tweenRef.current = null;
    }

    const startPos = globalPosRef.current;
    const targetPos = Math.round(startPos) + delta;
    const startTime = performance.now();
    const duration = 380; // ms smooth fluid tween

    const stepTween = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth cubic ease out
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = startPos + (targetPos - startPos) * ease;
      
      const normalized = ((current % DATABASE_SERVICES_51.length) + DATABASE_SERVICES_51.length) % DATABASE_SERVICES_51.length;
      globalPosRef.current = normalized;
      setGlobalStreamPos(normalized);

      if (progress < 1) {
        tweenRef.current = requestAnimationFrame(stepTween);
      } else {
        tweenRef.current = null;
        const finalNormalized = ((targetPos % DATABASE_SERVICES_51.length) + DATABASE_SERVICES_51.length) % DATABASE_SERVICES_51.length;
        globalPosRef.current = finalNormalized;
        setGlobalStreamPos(finalNormalized);
      }
    };

    tweenRef.current = requestAnimationFrame(stepTween);
  };

  const handleCardClick = (card) => {
    if (!card) return;

    // Pause auto-rotation so the user can comfortably inspect the selected capability
    setIsAutoMoving(false);
    isAutoMovingRef.current = false;

    // Immediately update HeroContent with the clicked capability
    if (onActiveRightCapabilityChange) {
      onActiveRightCapabilityChange(card);
    }

    // Smoothly rotate the diagram so the selected card glides to the active station (Station 4)
    const delta = 4 - card.progress;
    const stationDelta = Math.round(delta);
    if (stationDelta !== 0) {
      handleStepJump(stationDelta);
    }

    // On mobile screens, smoothly scroll down to the content card if needed
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      const contentElem = document.getElementById('db-service-content');
      if (contentElem) {
        contentElem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handleStepJump(-1);
      } else if (e.key === 'ArrowRight') {
        handleStepJump(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full max-w-[780px] flex flex-col items-center select-none mx-auto">
      <IconGradients />

      {/* Main Diagram Canvas with SVG lines and flowing capability icons */}
      <div className="relative w-full aspect-[760/620] flex items-center justify-center">
        <svg
          viewBox="0 0 760 620"
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="centerRadialGlow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.45" />
              <stop offset="45%" stopColor="#e0f2fe" stopOpacity="0.25" />
              <stop offset="75%" stopColor="#f0f9ff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>

            <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#0284c7" floodOpacity="0.65" />
            </filter>

            <filter id="rightLaserBeamGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feDropShadow dx="0" dy="0" stdDeviation="4.5" floodColor="#00f0ff" floodOpacity="0.95" />
              <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#ffffff" floodOpacity="0.8" />
            </filter>

            <linearGradient id="rightActiveLaserBeam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.6" />
              <stop offset="45%" stopColor="#00f0ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="portalConduitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00f0ff" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="portalEgressGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Ambient radial glow backdrop */}
          <circle cx={cx} cy={cy} r="255" fill="url(#centerRadialGlow)" />

          {/* Outer dashed orbit track */}
          <ellipse
            cx={cx}
            cy={cy}
            rx={Rx + 35}
            ry={Ry + 25}
            stroke="#bfdbfe"
            strokeWidth="1.2"
            strokeDasharray="4 8"
            strokeOpacity="0.75"
          />

          {/* Middle orbital curve */}
          <ellipse
            cx={cx}
            cy={cy}
            rx={Rx}
            ry={Ry}
            stroke="#93c5fd"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeOpacity="0.85"
          />

          {/* Inner orbital track */}
          <ellipse
            cx={cx}
            cy={cy}
            rx={Rx - 45}
            ry={Ry - 35}
            stroke="#dbeafe"
            strokeWidth="1.0"
            strokeDasharray="3 7"
            strokeOpacity="0.6"
          />

          {/* Upper-Left Ingestion Stream Feed (Intake for Enlarging/Appearing Cards) */}
          <path
            d={`M${cx - Rx - 65},${cy - 38} C${cx - Rx - 35},${cy - 38} ${cx - Rx - 15},${cy - 16} ${cx - Rx},${cy}`}
            stroke="url(#portalConduitGrad)"
            strokeWidth="3.2"
            strokeDasharray="4 3"
            strokeLinecap="round"
          />

          {/* Lower-Left Egress Return Conduit (Discharge for Minimising/Disappearing Cards) */}
          <path
            d={`M${175},${361} C${150},${370} ${135},${378} ${cx - Rx - 65},${378}`}
            stroke="url(#portalEgressGrad)"
            strokeWidth="3.0"
            strokeDasharray="4 3"
            strokeLinecap="round"
          />

          {/* Static Circuit Lines & Active Laser Beam */}
          {staticLines.map((line) => {
            const isRightMiddleStation = line.index === 4;

            if (isRightMiddleStation) {
              return (
                <g key={`static-line-${line.index}`}>
                  <line
                    x1={line.startPoint.x}
                    y1={line.startPoint.y}
                    x2={line.cardConnect.x + 22}
                    y2={line.cardConnect.y}
                    stroke="#00f0ff"
                    strokeWidth="6"
                    strokeOpacity="0.3"
                    filter="url(#rightLaserBeamGlow)"
                  />
                  <line
                    x1={line.startPoint.x}
                    y1={line.startPoint.y}
                    x2={line.cardConnect.x + 22}
                    y2={line.cardConnect.y}
                    stroke="url(#rightActiveLaserBeam)"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  <line
                    x1={line.startPoint.x}
                    y1={line.startPoint.y}
                    x2={line.cardConnect.x + 22}
                    y2={line.cardConnect.y}
                    stroke="#ffffff"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <circle cx={line.nodeDot.x} cy={line.nodeDot.y} r="5.5" fill="#00f0ff" filter="url(#rightLaserBeamGlow)" />
                  <circle cx={line.nodeDot.x} cy={line.nodeDot.y} r="3" fill="#ffffff" />
                  <circle cx={line.cardConnect.x + 22} cy={line.cardConnect.y} r="4" fill="#00f0ff" filter="url(#rightLaserBeamGlow)" />

                  <circle r="3.5" fill="#ffffff" filter="url(#rightLaserBeamGlow)">
                    <animateMotion
                      path={`M${line.startPoint.x},${line.startPoint.y} L${line.cardConnect.x + 22},${line.cardConnect.y}`}
                      dur="1.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="2" fill="#00f0ff" filter="url(#rightLaserBeamGlow)">
                    <animateMotion
                      path={`M${line.startPoint.x},${line.startPoint.y} L${line.cardConnect.x + 22},${line.cardConnect.y}`}
                      dur="1.4s"
                      begin="0.7s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            }

            return (
              <g key={`static-line-${line.index}`}>
                <line
                  x1={line.startPoint.x}
                  y1={line.startPoint.y}
                  x2={line.nodeDot.x}
                  y2={line.nodeDot.y}
                  stroke="#7dd3fc"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <line
                  x1={line.nodeDot.x}
                  y1={line.nodeDot.y}
                  x2={line.cardConnect.x}
                  y2={line.cardConnect.y}
                  stroke="#38bdf8"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <circle cx={line.nodeDot.x} cy={line.nodeDot.y} r="4.5" fill="#0284c7" filter="url(#nodeGlow)" />
                <circle cx={line.nodeDot.x} cy={line.nodeDot.y} r="2" fill="#ffffff" />
                <circle r="2.5" fill="#38bdf8" className="opacity-80">
                  <animateMotion
                    path={`M${line.startPoint.x},${line.startPoint.y} L${line.nodeDot.x},${line.nodeDot.y} L${line.cardConnect.x},${line.cardConnect.y}`}
                    dur="2.8s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Central 3D Metallic Database Stack Component */}
        <div
          className="absolute z-20 pointer-events-auto cursor-pointer group"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '38.2%',
            height: '50.8%'
          }}
        >
          <div className="absolute inset-x-2 sm:inset-x-4 bottom-0 h-1/3 bg-sky-400/25 blur-lg sm:blur-2xl rounded-full pointer-events-none group-hover:bg-cyan-400/35 transition-all duration-500" />
          <DatabaseServer3D className="w-full h-full filter drop-shadow-[0_8px_18px_rgba(2,132,199,0.18)] sm:drop-shadow-[0_16px_28px_rgba(2,132,199,0.2)] transition-transform duration-500 group-hover:scale-[1.025]" />
        </div>

        {/* Upper-Left Stream Intake Gate Badge */}
        <div
          className="absolute z-10 pointer-events-none flex flex-col items-center justify-center"
          style={{
            left: `${((cx - Rx - 20) / 760) * 100}%`,
            top: `${((cy - 52) / 620) * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="px-1.5 sm:px-2 py-0.5 bg-sky-500/10 border border-sky-400/30 rounded-full flex items-center gap-1 sm:gap-1.5 shadow-xs">
            <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[7px] sm:text-[8px] md:text-[9px] font-bold text-sky-600 tracking-wider uppercase">
              Stream Intake Gate
            </span>
          </div>
        </div>

        {/* Lower-Left Stream Egress Return Badge */}
        <div
          className="absolute z-10 pointer-events-none flex flex-col items-center justify-center"
          style={{
            left: `${((cx - Rx - 20) / 760) * 100}%`,
            top: `${((cy + 82) / 620) * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="px-1.5 sm:px-2 py-0.5 bg-sky-500/10 border border-sky-400/30 rounded-full flex items-center gap-1 sm:gap-1.5 shadow-xs">
            <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-cyan-500" />
            <span className="text-[7px] sm:text-[8px] md:text-[9px] font-bold text-sky-600 tracking-wider uppercase">
              Stream Egress Port
            </span>
          </div>
        </div>

        {/* 51 CAPABILITY ICONS IN ACTIVE MOTION */}
        {activeCards.map((card) => {
          const isHovered = activeCardId === card.id;
          const isRightMiddle = Math.abs(card.progress - 4) < 0.55;
          const isDatabaseIcon = card.iconType === 'database';

          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              onMouseEnter={() => setActiveCardId(card.id)}
              onMouseLeave={() => setActiveCardId(null)}
              style={{
                left: `${(card.x / 760) * 100}%`,
                top: `${(card.y / 620) * 100}%`,
                transform: `translate(-50%, -50%) scale(${card.scale})`,
                opacity: card.opacity,
                zIndex: isHovered
                  ? 50
                  : isRightMiddle
                  ? 42
                  : isDatabaseIcon
                  ? 35
                  : card.progress <= 0
                  ? 26
                  : card.progress >= 7.6
                  ? 24
                  : 30
              }}
              className="group absolute flex items-center justify-center cursor-pointer will-change-transform active:scale-95 transition-transform duration-200 [--orbit-label-dist:28px] sm:[--orbit-label-dist:36px] md:[--orbit-label-dist:44px] lg:[--orbit-label-dist:50px]"
              title={`Click to inspect ${card.title}`}
            >
              {/* SPOTLIGHT GLOW FOR RIGHT-MIDDLE ACTIVE CARD */}
              {isRightMiddle && (
                <>
                  <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-cyan-400/50 via-sky-400/40 to-blue-500/30 blur-md sm:blur-xl rounded-full pointer-events-none animate-pulse" />
                  <div
                    className="absolute -inset-1 sm:-inset-1.5 md:-inset-2 rounded-[16px] sm:rounded-[20px] md:rounded-[28px] border-1.5 sm:border-2 border-cyan-400/70 border-dashed animate-spin pointer-events-none"
                    style={{ animationDuration: '9s' }}
                  />
                </>
              )}

              {/* Card Body */}
              <div
                className={`relative flex items-center justify-center w-[44px] h-[44px] sm:w-[58px] sm:h-[58px] md:w-[68px] md:h-[68px] lg:w-[76px] lg:h-[76px] bg-gradient-to-b from-white via-white to-[#f8fbff] rounded-[14px] sm:rounded-[18px] md:rounded-[22px] lg:rounded-[24px] transition-all duration-300 ${
                  isHovered
                    ? 'scale-115 shadow-[0_16px_36px_-4px_rgba(2,132,199,0.38),0_4px_12px_rgba(15,23,42,0.06)] ring-2 sm:ring-3 ring-sky-400 -translate-y-0.5 sm:-translate-y-1'
                    : isRightMiddle
                    ? 'scale-110 shadow-[0_10px_26px_-2px_rgba(0,240,255,0.52),0_4px_14px_rgba(2,132,199,0.25)] border-1.5 sm:border-2 border-white ring-2 sm:ring-3 ring-cyan-400'
                    : isDatabaseIcon
                    ? 'shadow-[0_8px_20px_-4px_rgba(0,240,255,0.35),0_2px_10px_rgba(2,132,199,0.18)] border border-cyan-300/80 ring-1 sm:ring-2 ring-cyan-400/60'
                    : 'shadow-[0_6px_16px_-4px_rgba(26,110,245,0.14),0_2px_8px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_24px_-4px_rgba(2,132,199,0.22)] border border-white ring-1 ring-slate-200/70'
                }`}
              >
                {(isRightMiddle || isDatabaseIcon) && (
                  <div className="absolute inset-1 sm:inset-1.5 bg-gradient-to-tr from-cyan-400/30 via-sky-400/20 to-transparent blur-xs sm:blur-md rounded-full pointer-events-none animate-pulse" />
                )}

                <div
                  className={`absolute top-0.5 left-1 sm:top-1 sm:left-1.5 md:top-1.5 md:left-2 text-[6.5px] sm:text-[7.5px] md:text-[8.5px] lg:text-[9px] font-mono ${
                    isRightMiddle
                      ? 'font-extrabold text-cyan-600 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]'
                      : isDatabaseIcon
                      ? 'font-bold text-cyan-600 drop-shadow-[0_0_6px_rgba(0,240,255,0.5)]'
                      : 'font-bold text-sky-500/90'
                  }`}
                >
                  #{card.globalIndex}
                </div>

                <div className="relative z-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <CapabilityIcon type={card.iconType} className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-10 lg:h-10" />
                </div>
              </div>

              {/* OUTWARD NAME LABEL: Smooth Gliding Position with Click-to-View and Hover Feedback */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(card);
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(${card.shiftX.toFixed(2)}% + (${card.cosT.toFixed(3)} * var(--orbit-label-dist, 50px))), calc(${card.shiftY.toFixed(2)}% + (${card.sinT.toFixed(3)} * var(--orbit-label-dist, 50px))))`,
                  opacity: card.labelOpacity,
                  display: card.labelOpacity < 0.05 ? 'none' : undefined
                }}
                className={`absolute z-40 w-max max-w-[74px] sm:max-w-[96px] md:max-w-[125px] lg:max-w-[140px] px-1.5 py-0.5 sm:px-2 sm:py-0.5 md:px-2.5 md:py-1 bg-white/95 backdrop-blur-md rounded-md sm:rounded-lg border transition-all duration-300 pointer-events-auto cursor-pointer hover:border-cyan-400 hover:shadow-[0_4px_16px_rgba(0,240,255,0.3)] hover:scale-105 active:scale-95 select-none ${
                  isHovered
                    ? 'border-blue-400 shadow-[0_6px_16px_rgba(37,99,235,0.18)]'
                    : isRightMiddle
                    ? 'bg-gradient-to-r from-cyan-50/98 to-white/98 border-cyan-400 shadow-[0_4px_18px_rgba(0,240,255,0.35)] ring-1.5 sm:ring-2 ring-cyan-400/50'
                    : isDatabaseIcon
                    ? 'border-cyan-300 shadow-[0_4px_14px_rgba(0,240,255,0.2)] ring-1 ring-cyan-300/40'
                    : 'border-slate-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.06)]'
                }`}
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <span
                    className={`text-[6.5px] sm:text-[7.5px] md:text-[8.5px] lg:text-[9.5px] tracking-tight leading-tight flex items-center justify-center gap-0.5 sm:gap-1 transition-colors duration-300 ${
                      isRightMiddle
                        ? 'font-extrabold text-cyan-950'
                        : isDatabaseIcon
                        ? 'font-bold text-cyan-900'
                        : 'font-semibold text-slate-700'
                    }`}
                  >
                    {isRightMiddle && (
                      <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-cyan-500 animate-ping shrink-0" />
                    )}
                    <span>{card.title}</span>
                  </span>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isRightMiddle ? 'max-h-3.5 sm:max-h-5 opacity-100 mt-0.5' : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    <span className="text-[5.5px] sm:text-[6.5px] md:text-[7.5px] font-extrabold text-cyan-600 uppercase tracking-widest block whitespace-nowrap">
                      ● Active Node
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Left / Right Scroll Navigation Buttons ("Design ke niche") */}
      <div className="mt-2.5 sm:mt-4 md:mt-5 flex items-center justify-center gap-2 sm:gap-3.5 z-30 select-none">
        <button
          type="button"
          onClick={() => handleStepJump(-1)}
          aria-label="Previous Database Service"
          className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-blue-600 border border-slate-200/90 shadow-[0_2px_8px_rgba(15,23,42,0.08)] sm:shadow-[0_4px_14px_rgba(15,23,42,0.08)] hover:shadow-[0_8px_22px_rgba(2,132,199,0.25)] hover:border-cyan-300 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          title="Scroll Left (Previous Card)"
        >
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-0.5">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-full shadow-[0_2px_10px_rgba(15,23,42,0.06)] text-[10px] sm:text-xs">
          <button
            type="button"
            onClick={() => setIsAutoMoving((prev) => !prev)}
            className="flex items-center gap-1 sm:gap-1.5 text-slate-600 hover:text-blue-600 font-semibold cursor-pointer transition-colors"
            title={isAutoMoving ? "Click to Pause" : "Click to Play"}
          >
            <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 relative">
              {isAutoMoving && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
              )}
              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 ${isAutoMoving ? 'bg-cyan-500' : 'bg-slate-400'}`} />
            </span>
            <span className="font-mono font-bold text-slate-800 text-[10.5px] sm:text-[12px]">
              {String(currentRightCapability?.id || 1).padStart(2, '0')}
            </span>
            <span className="text-slate-300 font-normal">/</span>
            <span className="font-mono text-slate-400 text-[9.5px] sm:text-[11.5px]">51</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => handleStepJump(1)}
          aria-label="Next Database Service"
          className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-blue-600 border border-slate-200/90 shadow-[0_2px_8px_rgba(15,23,42,0.08)] sm:shadow-[0_4px_14px_rgba(15,23,42,0.08)] hover:shadow-[0_8px_22px_rgba(2,132,199,0.25)] hover:border-cyan-300 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          title="Scroll Right (Next Card)"
        >
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   7. MAIN APPLICATION PAGE COMPONENT
   ========================================================================= */
export function DatabaseApp({ onClose, onHome }) {
  const [activeRightCapability, setActiveRightCapability] = useState(DATABASE_SERVICES_51[0]);

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

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#ffffff] via-[#f7fbff] to-[#edf4fc] flex flex-col items-center justify-start overflow-x-hidden p-3 sm:p-6 md:p-8 lg:p-12">
      <DatabaseGlobalStyles />
      <BackgroundDecorations />

      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-[1360px] mx-auto pt-2 pb-4 flex items-center justify-start gap-3 z-30">
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

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto flex flex-col items-center pt-2 sm:pt-4 pb-6 sm:pb-10">
        {/* Top Page Header (Main Heading & Description) */}
        <header className="w-full max-w-[880px] mx-auto text-center flex flex-col items-center mb-6 sm:mb-10 lg:mb-12 px-3">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 shadow-xs mb-3 sm:mb-4">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-sky-700 tracking-wider uppercase">
              IBCS Enterprise Data Architecture
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-[-0.03em] text-[#0f172a] leading-[1.14] mb-3 sm:mb-4">
            Database{' '}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Management
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-[14px] sm:text-[15.5px] md:text-[16px] text-slate-600 font-normal leading-[1.65] max-w-3xl mx-auto">
            IBCS Database Management focuses on designing, optimizing, and administering robust database environments that support data integrity, high availability, and optimal query performance. We ensure that mission-critical data remains structured, secure, and accessible.
          </p>

          {/* Signature Futuristic Accent Divider */}
          <div className="flex items-center justify-center gap-2.5 mt-4 sm:mt-5 opacity-85">
            <div className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-sky-400" />
            <div className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            <div className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-sky-400" />
          </div>
        </header>

        {/* Main Interactive Showcase Section */}
        <main className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
          {/* Left Side: 3D Central Database & Radial Node Network */}
          <div className="w-full lg:w-[58%] flex items-center justify-center">
            <NetworkDiagram onActiveRightCapabilityChange={setActiveRightCapability} />
          </div>

          {/* Right Side: Title, Description & CTA Button synchronized with Right-Middle icon */}
          <div className="w-full lg:w-[42%] flex items-center justify-center lg:justify-start px-1 sm:px-4 lg:px-0 lg:pl-8">
            <HeroContent activeCapability={activeRightCapability} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DatabaseApp;
