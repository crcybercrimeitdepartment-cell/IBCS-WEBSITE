import React, { useState, useEffect, useRef } from 'react';
import { Home } from 'lucide-react';
import { headerInfo, capabilities } from './DataBackupDisasterRecoveryServicesPageData.js';
export { headerInfo, capabilities };

// ----------------------------------------------------------------------------
// Curated 10-Color Luxury Palettes
// ----------------------------------------------------------------------------
export const palettes = {
  blue: ['#bae6fd', '#0284c7', '#0369a1'],
  cyan: ['#a5f3fc', '#06b6d4', '#0891b2'],
  purple: ['#e9d5ff', '#a855f7', '#7e22ce'],
  orange: ['#fed7aa', '#f97316', '#c2410c'],
  emerald: ['#a7f3d0', '#10b981', '#047857'],
  gold: ['#fef08a', '#eab308', '#a16207'],
  crimson: ['#fecdd3', '#ef4444', '#b91c1c'],
  indigo: ['#c7d2fe', '#6366f1', '#4338ca'],
  teal: ['#99f6e4', '#14b8a6', '#0f766e'],
  rose: ['#fbcfe8', '#ec4899', '#be185d'],
};

export const textThemes = {
  blue: { title: '#0284c7', body: '#075985' },
  cyan: { title: '#0891b2', body: '#155e75' },
  purple: { title: '#9333ea', body: '#6b21a8' },
  orange: { title: '#ea580c', body: '#9a3412' },
  emerald: { title: '#059669', body: '#047857' },
  gold: { title: '#b45309', body: '#78350f' },
  crimson: { title: '#dc2626', body: '#991b1b' },
  indigo: { title: '#4f46e5', body: '#3730a3' },
  teal: { title: '#0d9488', body: '#115e59' },
  rose: { title: '#db2777', body: '#9d174d' },
};

// ----------------------------------------------------------------------------
// SVG Definitions & Keyframe Animations
// ----------------------------------------------------------------------------
function Definitions() {
  return (
    <defs>
      <style>{`
        @keyframes pedestalRotateCW {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -1000; }
        }
        @keyframes pedestalRotateCCW {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 1000; }
        }
        @keyframes pedestalPulseGlow {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 0.95; }
        }
        @keyframes frontSweepWave {
          0% { stroke-dashoffset: 500; opacity: 0.2; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: -500; opacity: 0.2; }
        }
        @keyframes serverLedBlink {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; }
        }
        @keyframes flowPulseBeam {
          0% { stroke-dashoffset: 200; opacity: 0.3; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: -200; opacity: 0.3; }
        }
        .anim-pedestal-cw-fast { animation: pedestalRotateCW 8s linear infinite; }
        .anim-pedestal-cw-normal { animation: pedestalRotateCW 12s linear infinite; }
        .anim-pedestal-cw-slow { animation: pedestalRotateCW 22s linear infinite; }
        .anim-pedestal-ccw-normal { animation: pedestalRotateCCW 10s linear infinite; }
        .anim-pedestal-ccw-slow { animation: pedestalRotateCCW 16s linear infinite; }
        .anim-pedestal-pulse { animation: pedestalPulseGlow 3s ease-in-out infinite; }
        .anim-front-sweep { animation: frontSweepWave 3.5s ease-in-out infinite; }
        .anim-led-blink { animation: serverLedBlink 1.8s ease-in-out infinite; }
        /* Option 1: System Boot & Data Sync Animation Sequence */
        @keyframes bootHeader {
          0% { opacity: 0; transform: translateY(-22px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bootPedestal {
          0% { opacity: 0; transform: scale(0.68); }
          65% { opacity: 1; transform: scale(1.025); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes bootServers {
          0% { opacity: 0; transform: translateY(50px); }
          70% { opacity: 1; transform: translateY(-4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bootRails {
          0% { opacity: 0; transform: scale(0.85); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes bootCloud {
          0% { opacity: 0; transform: translateY(-38px) scale(0.92); }
          75% { opacity: 1; transform: translateY(3px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bootCloudContent {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bootStation {
          0% { opacity: 0; transform: scale(0.2); }
          75% { opacity: 0.95; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes bootMobileCard {
          0% { opacity: 0; transform: translateY(55px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .anim-boot-header { animation: bootHeader 0.75s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .anim-boot-pedestal { transform-origin: 785px 590px; animation: bootPedestal 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both; }
        .anim-boot-servers { transform-origin: 780px 540px; animation: bootServers 0.9s cubic-bezier(0.2, 0.95, 0.3, 1) 0.35s both; }
        .anim-boot-rails { transform-origin: 780px 635px; animation: bootRails 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both; }
        .anim-boot-cloud { transform-origin: 785px 395px; animation: bootCloud 0.95s cubic-bezier(0.2, 0.95, 0.3, 1.05) 0.55s both; }
        .anim-boot-content { animation: bootCloudContent 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both; }
        .anim-boot-station { animation: bootStation 0.85s cubic-bezier(0.2, 0.9, 0.3, 1.15) both; }
        .anim-boot-mobile-card { animation: bootMobileCard 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both; }

        .anim-flow-pulse { animation: flowPulseBeam 2.5s linear infinite; }
        /* Option 1: System Boot & Data Sync Animation Sequence */
        @keyframes bootHeader {
          0% { opacity: 0; transform: translateY(-22px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bootPedestal {
          0% { opacity: 0; transform: scale(0.68); }
          65% { opacity: 1; transform: scale(1.025); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes bootServers {
          0% { opacity: 0; transform: translateY(50px); }
          70% { opacity: 1; transform: translateY(-4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bootRails {
          0% { opacity: 0; transform: scale(0.85); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes bootCloud {
          0% { opacity: 0; transform: translateY(-38px) scale(0.92); }
          75% { opacity: 1; transform: translateY(3px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bootCloudContent {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bootStation {
          0% { opacity: 0; transform: scale(0.2); }
          75% { opacity: 0.95; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes bootMobileCard {
          0% { opacity: 0; transform: translateY(55px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .anim-boot-header { animation: bootHeader 0.75s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .anim-boot-pedestal { transform-origin: 785px 590px; animation: bootPedestal 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both; }
        .anim-boot-servers { transform-origin: 780px 540px; animation: bootServers 0.9s cubic-bezier(0.2, 0.95, 0.3, 1) 0.35s both; }
        .anim-boot-rails { transform-origin: 780px 635px; animation: bootRails 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both; }
        .anim-boot-cloud { transform-origin: 785px 395px; animation: bootCloud 0.95s cubic-bezier(0.2, 0.95, 0.3, 1.05) 0.55s both; }
        .anim-boot-content { animation: bootCloudContent 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both; }
        .anim-boot-station { animation: bootStation 0.85s cubic-bezier(0.2, 0.9, 0.3, 1.15) both; }
        .anim-boot-mobile-card { animation: bootMobileCard 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both; }

      `}</style>

      <linearGradient id="panel" x2="0" y2="1">
        <stop stopColor="#fff" />
        <stop offset=".7" stopColor="#fff" />
        <stop offset="1" stopColor="#e6e7e8" />
      </linearGradient>
      <linearGradient id="card" x2="0" y2="1">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#f4f7fb" />
      </linearGradient>
      <linearGradient id="silver">
        <stop stopColor="#8294ac" />
        <stop offset=".12" stopColor="#f5f9ff" />
        <stop offset=".45" stopColor="#a4b4ce" />
        <stop offset=".65" stopColor="#faffff" />
        <stop offset="1" stopColor="#8da0be" />
      </linearGradient>
      <linearGradient id="steel" x2="0" y2="1">
        <stop stopColor="#e1ebf9" />
        <stop offset=".5" stopColor="#aabbd0" />
        <stop offset="1" stopColor="#fff" />
      </linearGradient>
      <linearGradient id="server">
        <stop stopColor="#0b1728" />
        <stop offset=".15" stopColor="#64788c" />
        <stop offset=".26" stopColor="#15263a" />
        <stop offset=".67" stopColor="#07131f" />
        <stop offset=".89" stopColor="#203a53" />
        <stop offset="1" stopColor="#051124" />
      </linearGradient>
      <linearGradient id="face" x2="0" y2="1">
        <stop stopColor="#52718f" />
        <stop offset=".2" stopColor="#13293e" />
        <stop offset=".85" stopColor="#061427" />
        <stop offset="1" stopColor="#294967" />
      </linearGradient>
      <radialGradient id="cloud" cx=".28" cy=".16" r=".95">
        <stop stopColor="#fff" />
        <stop offset=".32" stopColor="#edf6ff" />
        <stop offset=".63" stopColor="#d8eaff" />
        <stop offset="1" stopColor="#accfff" />
      </radialGradient>
      <linearGradient id="cloudBlue" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#14c9ff" />
        <stop offset=".35" stopColor="#009fff" />
        <stop offset=".75" stopColor="#0076f5" />
        <stop offset="1" stopColor="#0053cf" />
      </linearGradient>
      <linearGradient id="paper" x2="1" y2="1">
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#c5e9ff" />
      </linearGradient>

      {/* Dynamic Gradients for all 10 Color Palettes */}
      {Object.entries(palettes).map(([name, colors]) => (
        <React.Fragment key={name}>
          <linearGradient id={name}>
            <stop stopColor={colors[0]} />
            <stop offset=".4" stopColor={colors[1]} />
            <stop offset="1" stopColor={colors[2]} />
          </linearGradient>
          <linearGradient id={`${name}Badge`} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor={colors[1]} />
            <stop offset="1" stopColor={colors[2]} />
          </linearGradient>
          <linearGradient id={`${name}Top`} x2="0" y2="1">
            <stop stopColor="#fff" />
            <stop offset=".35" stopColor={colors[0]} />
            <stop offset="1" stopColor={colors[1]} />
          </linearGradient>
          <linearGradient id={`${name}Arrow`}>
            <stop stopColor={colors[0]} stopOpacity=".6" />
            <stop offset="1" stopColor={colors[1]} />
          </linearGradient>
        </React.Fragment>
      ))}

      <filter id="shadow" x="-50%" y="-50%" width="200%" height="220%">
        <feDropShadow dx="0" dy="13" stdDeviation="10" floodColor="#1e355a" floodOpacity=".23" />
      </filter>
      <filter id="smallShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#004379" floodOpacity=".35" />
      </filter>
      <filter id="glow" x="-150%" y="-150%" width="400%" height="400%">
        <feGaussianBlur stdDeviation="4" />
      </filter>
      <filter id="laserGlow" x="-150%" y="-150%" width="400%" height="400%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <radialGradient id="floor">
        <stop stopColor="#62728a" stopOpacity=".2" />
        <stop offset="1" stopColor="#738099" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

const getEllipsePath = (cx, cy, rx, ry) =>
  `M ${cx - rx} ${cy} a ${rx} ${ry} 0 1 0 ${2 * rx} 0 a ${rx} ${ry} 0 1 0 ${-2 * rx} 0`;

// ----------------------------------------------------------------------------
// Text Wrapping Helpers
// ----------------------------------------------------------------------------
function wrapTitle(title, maxChars = 20) {
  if (!title) return [];
  const words = title.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length <= maxChars) {
      cur = (cur + ' ' + w).trim();
    } else {
      if (cur) lines.push(cur);
      cur = w;
      if (lines.length >= 2) break;
    }
  }
  if (cur && lines.length < 3) lines.push(cur);
  return lines;
}

function wrapText(text, maxChars = 54) {
  if (!text) return [];
  const words = text.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length <= maxChars) {
      cur = (cur + ' ' + w).trim();
    } else {
      if (cur) lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

// ----------------------------------------------------------------------------
// Comprehensive 3D Isometric Icons Suite (40 Thematic Icons)
// ----------------------------------------------------------------------------

// 1. Strategy & Recovery Objectives
function TargetStrategyIcon({ color = 'blue' }) {
  const p = palettes[color] || palettes.blue;
  return (
    <g transform="translate(0, -6)">
      <ellipse cx="0" cy="4" rx="28" ry="15" fill={`url(#${color})`} stroke={p[1]} strokeWidth="2" filter="url(#smallShadow)" />
      <ellipse cx="0" cy="0" rx="26" ry="14" fill="url(#card)" stroke="#fff" strokeWidth="1.5" />
      <ellipse cx="0" cy="0" rx="19" ry="10" fill="none" stroke={p[1]} strokeWidth="2.5" />
      <ellipse cx="0" cy="0" rx="12" ry="6.5" fill={`url(#${color}Top)`} stroke="#fff" strokeWidth="1.2" />
      <ellipse cx="0" cy="0" rx="5" ry="2.8" fill={p[2]} />
      <path d="M-26 0H-19 M19 0H26 M0 -14V-10 M0 10V14" stroke={p[1]} strokeWidth="2" strokeLinecap="round" />
      <path d="M18 -26L2 -2" stroke={p[2]} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M2 -2L9 -5L5 -9Z" fill={p[1]} />
      <circle cx="18" cy="-26" r="3.5" fill="#fff" stroke={p[1]} strokeWidth="1.5" />
    </g>
  );
}

// 2. Asset Classification & Hierarchy
function AssetHierarchyIcon({ color = 'emerald' }) {
  const p = palettes[color] || palettes.emerald;
  return (
    <g transform="translate(0, -6)">
      <g transform="translate(0, -18)">
        <path d="M0 -12L12 -6L0 0L-12 -6Z" fill={`url(#${color}Top)`} stroke="#fff" strokeWidth="1" />
        <path d="M-12 -6L0 0V11L-12 5Z" fill={`url(#${color})`} stroke={p[1]} strokeWidth="1" />
        <path d="M0 0L12 -6V5L0 11Z" fill={p[2]} stroke={p[1]} strokeWidth="1" />
        <circle cx="0" cy="-6" r="2.5" fill="#fff" />
      </g>
      <path d="M0 -7V-1 M0 -1L-16 7 M0 -1L16 7" stroke={p[1]} strokeWidth="2" strokeLinecap="round" />
      <g transform="translate(-16, 10)">
        <path d="M0 -8L8 -4L0 0L-8 -4Z" fill={`url(#${color}Top)`} stroke="#fff" strokeWidth="0.8" />
        <path d="M-8 -4L0 0V7L-8 3Z" fill={`url(#${color})`} stroke={p[1]} strokeWidth="0.8" />
        <path d="M0 0L8 -4V3L0 7Z" fill={p[2]} stroke={p[1]} strokeWidth="0.8" />
      </g>
      <g transform="translate(16, 10)">
        <path d="M0 -8L8 -4L0 0L-8 -4Z" fill={`url(#${color}Top)`} stroke="#fff" strokeWidth="0.8" />
        <path d="M-8 -4L0 0V7L-8 3Z" fill={`url(#${color})`} stroke={p[1]} strokeWidth="0.8" />
        <path d="M0 0L8 -4V3L0 7Z" fill={p[2]} stroke={p[1]} strokeWidth="0.8" />
      </g>
    </g>
  );
}

// 3. Policy & Retention Design
function RetentionCalendarIcon({ color = 'purple' }) {
  const p = palettes[color] || palettes.purple;
  return (
    <g transform="translate(0, -6)">
      <rect x="-24" y="-20" width="48" height="42" rx="4" fill="url(#card)" stroke={p[1]} strokeWidth="2" filter="url(#smallShadow)" />
      <path d="M-24 -16a4 4 0 0 1 4 -4h40a4 4 0 0 1 4 4v9h-48z" fill={`url(#${color})`} />
      {[-14, -2, 10].map((rx) => (
        <rect key={rx} x={rx} y="-24" width="4" height="8" rx="2" fill="url(#silver)" stroke="#688" strokeWidth="0.8" />
      ))}
      {[-14, -5, 4, 13].map((cx) =>
        [-3, 6, 15].map((cy) => (
          <rect key={`${cx}-${cy}`} x={cx - 3} y={cy} width="6" height="5" rx="1" fill={cx === 4 && cy === 6 ? p[1] : "#cbd5e1"} />
        ))
      )}
      <circle cx="16" cy="14" r="9" fill={`url(#${color}Badge)`} filter="url(#glow)" />
      <path d="M12 9h8L16 14L20 19h-8L16 14Z" fill="#fff" opacity="0.9" />
    </g>
  );
}

// 4. Full, Incremental, Differential Stepped Platters
function TieredDisksIcon({ color = 'orange' }) {
  const p = palettes[color] || palettes.orange;
  return (
    <g transform="translate(0, -8)">
      <path d="M-28 10v9c0 8 56 8 56 0v-9" fill={`url(#${color})`} stroke={p[1]} strokeWidth="1.5" />
      <ellipse cx="0" cy="10" rx="28" ry="8.5" fill={`url(#${color}Top)`} stroke="#fff" strokeWidth="1.2" />
      <path d="M-22 -1v8c0 6.5 44 6.5 44 0v-8" fill="url(#steel)" stroke={p[1]} strokeWidth="1.2" />
      <ellipse cx="0" cy="-1" rx="22" ry="7" fill="url(#silver)" stroke="#fff" strokeWidth="1" />
      <path d="M-16 -11v7c0 5 32 5 32 0v-7" fill={`url(#${color})`} stroke={p[1]} strokeWidth="1.2" />
      <ellipse cx="0" cy="-11" rx="16" ry="5.5" fill={`url(#${color}Top)`} stroke="#fff" strokeWidth="1.2" />
      <circle cx="18" cy="12" r="5" fill="#10b981" filter="url(#glow)" />
      <path d="M16 12l1.5 1.5 3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </g>
  );
}

// 5. Scheduling & Job Automation Gears
function GearCogIcon({ color = 'gold' }) {
  const p = palettes[color] || palettes.gold;
  return (
    <g transform="translate(0, -6)">
      <circle cx="-6" cy="2" r="21" fill={`url(#${color})`} stroke={p[1]} strokeWidth="2" filter="url(#smallShadow)" />
      <circle cx="-6" cy="2" r="14" fill="url(#card)" stroke="#fff" strokeWidth="1.5" />
      <circle cx="-6" cy="2" r="5" fill={p[1]} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <circle
          key={deg}
          cx={-6 + 19 * Math.cos((deg * Math.PI) / 180)}
          cy={2 + 19 * Math.sin((deg * Math.PI) / 180)}
          r="2.5"
          fill="#fff"
        />
      ))}
      <circle cx="16" cy="-12" r="12" fill="url(#silver)" stroke={p[1]} strokeWidth="1.5" />
      <circle cx="16" cy="-12" r="4" fill={p[2]} />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <circle
          key={deg}
          cx={16 + 11 * Math.cos((deg * Math.PI) / 180)}
          cy={-12 + 11 * Math.sin((deg * Math.PI) / 180)}
          r="1.8"
          fill="#fff"
        />
      ))}
      <path d="M-6 -6l-3 8h5l-2 7 8-9h-5z" fill="#fff" stroke={p[2]} strokeWidth="0.8" />
    </g>
  );
}

// 6. Application Consistency Container Cube
function AppContainerIcon({ color = 'crimson' }) {
  const p = palettes[color] || palettes.crimson;
  return (
    <g transform="translate(0, -6)">
      <path d="M0 -22L20 -11L0 0L-20 -11Z" fill={`url(#${color}Top)`} stroke="#fff" strokeWidth="1.2" />
      <path d="M-20 -11L0 0V20L-20 9Z" fill={`url(#${color})`} stroke={p[1]} strokeWidth="1.2" />
      <path d="M0 0L20 -11V9L0 20Z" fill={p[2]} stroke={p[1]} strokeWidth="1.2" />
      {[-4, 4, 12].map((y) => (
        <React.Fragment key={y}>
          <path d={`M-17 ${y - 8}L-3 ${y}`} stroke="#fff" strokeWidth="1.2" opacity="0.6" />
          <path d={`M3 ${y}L17 ${y - 8}`} stroke="#fff" strokeWidth="1.2" opacity="0.6" />
        </React.Fragment>
      ))}
      <circle cx="0" cy="0" r="8" fill="#fff" stroke={p[1]} strokeWidth="2" filter="url(#glow)" />
      <circle cx="0" cy="0" r="4" fill={p[1]} />
    </g>
  );
}

// 7. Database Integration Vault Wheel
function DatabaseVaultIcon({ color = 'teal' }) {
  const p = palettes[color] || palettes.teal;
  return (
    <g transform="translate(0, -6)">
      <path d="M-24 -12v12c0 8 48 8 48 0v-12" fill="url(#steel)" stroke="#6899c7" strokeWidth="1.5" />
      <ellipse cx="0" cy="-12" rx="24" ry="8" fill="url(#silver)" stroke="#374b66" strokeWidth="1.5" />
      <path d="M-24 5v14c0 8 48 8 48 0v-14" fill={`url(#${color})`} stroke={p[1]} strokeWidth="1.5" />
      <ellipse cx="0" cy="5" rx="24" ry="8" fill={`url(#${color}Top)`} stroke="#aabbd0" strokeWidth="1" />
      <circle cx="15" cy="12" r="11" fill="url(#card)" stroke={p[1]} strokeWidth="2.5" filter="url(#smallShadow)" />
      <circle cx="15" cy="12" r="5" fill={`url(#${color})`} />
      <path d="M15 4V20 M7 12H23" stroke={p[1]} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

// 8. Virtual Machine Hypervisor
function VirtualMachineIcon({ color = 'indigo' }) {
  const p = palettes[color] || palettes.indigo;
  return (
    <g transform="translate(0, -6)">
      <path d="M0 4L26 15L0 26L-26 15Z" fill="url(#server)" stroke={p[1]} strokeWidth="2" filter="url(#smallShadow)" />
      <circle cx="-12" cy="15" r="2" fill="#00d9ff" filter="url(#glow)" />
      <circle cx="0" cy="20" r="2" fill="#10b981" filter="url(#glow)" />
      <circle cx="12" cy="15" r="2" fill="#00d9ff" filter="url(#glow)" />
      <g transform="translate(-12, -10)">
        <path d="M0 -10L10 -5L0 0L-10 -5Z" fill={`url(#${color}Top)`} stroke="#fff" strokeWidth="1" />
        <path d="M-10 -5L0 0V8L-10 3Z" fill={`url(#${color})`} stroke={p[1]} strokeWidth="1" />
        <path d="M0 0L10 -5V3L0 8Z" fill={p[2]} stroke={p[1]} strokeWidth="1" />
        <text x="0" y="2" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="bold">VM1</text>
      </g>
      <g transform="translate(12, -14)">
        <path d="M0 -10L10 -5L0 0L-10 -5Z" fill={`url(#${color}Top)`} stroke="#fff" strokeWidth="1" />
        <path d="M-10 -5L0 0V8L-10 3Z" fill={`url(#${color})`} stroke={p[1]} strokeWidth="1" />
        <path d="M0 0L10 -5V3L0 8Z" fill={p[2]} stroke={p[1]} strokeWidth="1" />
        <text x="0" y="2" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="bold">VM2</text>
      </g>
    </g>
  );
}

// 9. Cloud Workload Revolving Sync
function CloudSyncIcon({ color = 'cyan' }) {
  const p = palettes[color] || palettes.cyan;
  return (
    <g transform="translate(0, -6)">
      <path
        d="M-22 10C-28 8 -28 -2 -20 -5C-20 -15 -10 -22 2 -18C8 -20 18 -16 20 -8C26 -6 28 6 20 10Z"
        fill={`url(#${color})`}
        stroke={p[1]}
        strokeWidth="2"
        filter="url(#smallShadow)"
      />
      <path
        d="M-20 8C-25 6 -25 -1 -18 -4C-18 -13 -9 -19 2 -16C7 -18 16 -14 18 -7C23 -5 25 5 18 8Z"
        fill="url(#cloud)"
        stroke="#fff"
        strokeWidth="1.2"
      />
      <path d="M-9 -1a11 11 0 0 1 18 -2" fill="none" stroke={p[2]} strokeWidth="3" strokeLinecap="round" />
      <path d="M9 -3l-1 -4l4 1Z" fill={p[2]} />
      <path d="M9 3a11 11 0 0 1 -18 2" fill="none" stroke={p[1]} strokeWidth="3" strokeLinecap="round" />
      <path d="M-9 5l1 4l-4 -1Z" fill={p[1]} />
    </g>
  );
}

// 10. SaaS Integration Ecosystem
function SaaSHubIcon({ color = 'rose' }) {
  const p = palettes[color] || palettes.rose;
  return (
    <g transform="translate(0, -6)">
      <circle cx="0" cy="0" r="16" fill={`url(#${color})`} stroke={p[1]} strokeWidth="2" filter="url(#smallShadow)" />
      <circle cx="0" cy="0" r="10" fill="url(#card)" stroke="#fff" strokeWidth="1.2" />
      <circle cx="0" cy="0" r="4" fill={p[2]} />
      {[-22, 22].map((x) => (
        <g key={x}>
          <line x1="0" y1="0" x2={x} y2="-8" stroke={p[1]} strokeWidth="2" strokeDasharray="3 2" />
          <circle cx={x} cy="-8" r="6" fill={`url(#${color}Top)`} stroke="#fff" strokeWidth="1.2" />
          <circle cx={x} cy="-8" r="2.5" fill={p[2]} />
        </g>
      ))}
      <g>
        <line x1="0" y1="0" x2="0" y2="20" stroke={p[1]} strokeWidth="2" strokeDasharray="3 2" />
        <circle cx="0" cy="20" r="6" fill={`url(#${color}Top)`} stroke="#fff" strokeWidth="1.2" />
        <circle cx="0" cy="20" r="2.5" fill={p[2]} />
      </g>
    </g>
  );
}

// 11. Laptop & Mobile Endpoint Duo
function LaptopEndpointIcon({ color = 'blue' }) {
  const p = palettes[color] || palettes.blue;
  return (
    <g transform="translate(0, -6)">
      <rect x="-24" y="-18" width="36" height="24" rx="2.5" fill={`url(#${color})`} stroke={p[1]} strokeWidth="2" filter="url(#smallShadow)" />
      <rect x="-21" y="-15" width="30" height="18" rx="1.5" fill="#0b1728" />
      <circle cx="-6" cy="-6" r="4" fill={p[0]} opacity="0.8" />
      <path d="M-28 6L-20 6H16L20 12H-24Z" fill="url(#silver)" stroke="#688" strokeWidth="1" />
      <rect x="14" y="-10" width="12" height="22" rx="3" fill="url(#card)" stroke={p[1]} strokeWidth="1.5" filter="url(#smallShadow)" />
      <rect x="16" y="-7" width="8" height="14" rx="1" fill={`url(#${color})`} />
      <circle cx="20" cy="9.5" r="1" fill={p[2]} />
    </g>
  );
}

// 12. Infrastructure as Code Terminal
function CodeTerminalIcon({ color = 'emerald' }) {
  const p = palettes[color] || palettes.emerald;
  return (
    <g transform="translate(0, -6)">
      <rect x="-24" y="-18" width="48" height="34" rx="4" fill="#0d1f2d" stroke={p[1]} strokeWidth="2" filter="url(#smallShadow)" />
      <path d="M-24 -14a4 4 0 0 1 4 -4h40a4 4 0 0 1 4 4v4h-48z" fill={`url(#${color})`} />
      <circle cx="-18" cy="-14" r="1.5" fill="#ef4444" />
      <circle cx="-13" cy="-14" r="1.5" fill="#eab308" />
      <circle cx="-8" cy="-14" r="1.5" fill="#10b981" />
      <text x="-18" y="2" fill={p[0]} fontSize="11" fontWeight="900" fontFamily="monospace">&lt;/&gt;</text>
      <line x1="-3" y1="-2" x2="16" y2="-2" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <line x1="-18" y1="8" x2="8" y2="8" stroke={p[1]} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

// 13. High-Density SAN Storage Enclosure
function StorageRackIcon({ color = 'purple' }) {
  const p = palettes[color] || palettes.purple;
  return (
    <g transform="translate(0, -6)">
      <rect x="-24" y="-18" width="48" height="36" rx="3" fill="url(#server)" stroke={p[1]} strokeWidth="2" filter="url(#smallShadow)" />
      {[-12, -2, 8].map((y) => (
        <g key={y}>
          <rect x="-20" y={y} width="40" height="7.5" rx="1.5" fill="#122338" stroke="#486581" strokeWidth="0.8" />
          <circle cx="15" cy={y + 3.8} r="1.8" fill={p[0]} filter="url(#glow)" />
          <rect x="-17" y={y + 2} width="16" height="3.5" rx="0.5" fill={p[1]} opacity="0.7" />
        </g>
      ))}
    </g>
  );
}

// 14. Geographic Separation Globe & Satellite
function GlobeGeoIcon({ color = 'orange' }) {
  const p = palettes[color] || palettes.orange;
  return (
    <g transform="translate(0, -6)">
      <circle cx="0" cy="0" r="21" fill={`url(#${color})`} stroke={p[1]} strokeWidth="2" filter="url(#smallShadow)" />
      <ellipse cx="0" cy="0" rx="9" ry="21" fill="none" stroke="#fff" strokeWidth="1.2" opacity="0.85" />
      <path d="M-21 0H21 M-18 -10H18 M-18 10H18" stroke="#fff" strokeWidth="1.2" opacity="0.85" />
      <ellipse cx="0" cy="0" rx="30" ry="9" fill="none" stroke="#fff" strokeWidth="1.8" strokeDasharray="6 4" transform="rotate(-25)" />
      <circle cx="24" cy="-11" r="4.5" fill={`url(#${color}Top)`} stroke="#fff" strokeWidth="1.5" />
      <circle cx="24" cy="-11" r="2" fill={p[2]} />
    </g>
  );
}

// 15. Immutable Bank Vault Safe
function ImmutableSafeIcon({ color = 'gold' }) {
  const p = palettes[color] || palettes.gold;
  return (
    <g transform="translate(0, -6)">
      <rect x="-22" y="-18" width="44" height="38" rx="4" fill="url(#server)" stroke={p[1]} strokeWidth="2.5" filter="url(#smallShadow)" />
      <rect x="-18" y="-14" width="36" height="30" rx="3" fill={`url(#${color})`} stroke="#fff" strokeWidth="1.2" />
      {[-15, 15].map((x) =>
        [-11, 13].map((y) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="#fff" />
        ))
      )}
      <circle cx="0" cy="1" r="10" fill="url(#steel)" stroke="#475569" strokeWidth="2" />
      <circle cx="0" cy="1" r="4" fill={p[2]} />
      <path d="M0 -7V9 M-8 1H8" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

// 16. Cryptographic Golden Key & Encryption
function GoldenKeyIcon({ color = 'crimson' }) {
  const p = palettes[color] || palettes.crimson;
  return (
    <g transform="translate(0, -6)">
      <circle cx="-12" cy="0" r="14" fill={`url(#${color})`} stroke={p[1]} strokeWidth="2" filter="url(#smallShadow)" />
      <circle cx="-12" cy="0" r="6" fill="url(#card)" stroke={p[1]} strokeWidth="1.5" />
      <path d="M-1 0H24V8H18V0H13V6H9V0" fill="none" stroke={p[1]} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="20" cy="-10" r="3" fill={p[1]} filter="url(#glow)" />
      <circle cx="26" cy="-4" r="2" fill="#fff" />
    </g>
  );
}

// 17. Biometric Shield & Hardening
function BiometricShieldIcon({ color = 'teal' }) {
  const p = palettes[color] || palettes.teal;
  return (
    <g transform="translate(0, -6)">
      <path
        d="M-22 -16 Q0 -24 22 -16 V3 C22 18 0 30 0 30 C0 30 -22 18 -22 3 Z"
        fill={`url(#${color})`}
        stroke={p[1]}
        strokeWidth="2.5"
        filter="url(#smallShadow)"
      />
      <path
        d="M-16 -11 Q0 -17 16 -11 V2 C16 14 0 23 0 23 C0 23 -16 14 -16 2 Z"
        fill="url(#card)"
        stroke="#fff"
        strokeWidth="1.5"
      />
      <circle cx="0" cy="5" r="8" fill="none" stroke={p[1]} strokeWidth="2" strokeDasharray="6 3" />
      <circle cx="0" cy="5" r="4" fill="none" stroke={p[2]} strokeWidth="2" />
      <circle cx="0" cy="5" r="1.5" fill={p[1]} />
    </g>
  );
}

// 18. Telemetry Pulse Monitor
function TelemetryPulseIcon({ color = 'indigo' }) {
  const p = palettes[color] || palettes.indigo;
  return (
    <g transform="translate(0, -6)">
      <rect x="-24" y="-18" width="48" height="34" rx="4" fill={`url(#${color})`} stroke={p[1]} strokeWidth="2" filter="url(#smallShadow)" />
      <rect x="-20" y="-14" width="40" height="26" rx="2" fill="#081426" />
      <path
        d="M-18 -1L-8 -1L-4 -8L0 7L4 -11L8 3L12 -1L18 -1"
        fill="none"
        stroke={p[0]}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />
      <path d="M-6 16H6L10 22H-10Z" fill="url(#silver)" stroke="#688" strokeWidth="1" />
    </g>
  );
}

// 19. Checksum Magnifying Glass & Verification
function MagnifierChecksumIcon({ color = 'cyan' }) {
  const p = palettes[color] || palettes.cyan;
  return (
    <g transform="translate(0, -6)">
      <rect x="-18" y="-14" width="36" height="28" rx="3" fill="url(#card)" stroke={p[1]} strokeWidth="1.5" filter="url(#smallShadow)" />
      <rect x="-14" y="-10" width="28" height="4" rx="1" fill={`url(#${color})`} />
      <rect x="-14" y="-3" width="18" height="3" rx="1" fill="#94a3b8" />
      <rect x="-14" y="3" width="22" height="3" rx="1" fill="#94a3b8" />
      <g transform="translate(6, 4)">
        <circle cx="0" cy="0" r="14" fill={`url(#${color}Top)`} stroke="#fff" strokeWidth="2.5" filter="url(#glow)" opacity="0.9" />
        <circle cx="0" cy="0" r="11" fill="none" stroke={p[1]} strokeWidth="2" />
        <path d="M-4 0l3 3 6-6" fill="none" stroke="#059669" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M10 10l9 9" stroke={p[2]} strokeWidth="4.5" strokeLinecap="round" />
      </g>
    </g>
  );
}

// 20. Restore Loop & Point-in-Time Drill
function RestoreLoopIcon({ color = 'rose' }) {
  const p = palettes[color] || palettes.rose;
  return (
    <g transform="translate(0, -6)">
      <path d="M-20 -4v18c0 7 40 7 40 0v-18" fill={`url(#${color})`} stroke={p[1]} strokeWidth="1.5" />
      <ellipse cx="0" cy="-4" rx="20" ry="7" fill={`url(#${color}Top)`} stroke="#fff" strokeWidth="1.2" />
      <circle cx="0" cy="5" r="17" fill="none" stroke="#fff" strokeWidth="3.5" strokeDasharray="75 30" filter="url(#glow)" />
      <path d="M-15 13l-4 -5l6 -1Z" fill={p[1]} stroke="#fff" strokeWidth="1" />
      <circle cx="0" cy="5" r="6" fill={`url(#${color}Badge)`} />
      <path d="M0 2v3l2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  );
}

// 21. File & Object Recovery
function FileRestoreIcon({ color = 'blue' }) {
  const p = palettes[color] || palettes.blue;
  return (
    <g transform="translate(0, -6)">
      <path d="M-22 4V-12h14l4 4h18v12z" fill={p[2]} opacity="0.8" />
      <rect x="-14" y="-20" width="28" height="24" rx="2" fill="url(#card)" stroke={p[1]} strokeWidth="1.5" filter="url(#smallShadow)" />
      <line x1="-9" y1="-14" x2="9" y2="-14" stroke={p[1]} strokeWidth="2" strokeLinecap="round" />
      <line x1="-9" y1="-9" x2="5" y2="-9" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M-24 6L-18 -4H20L24 6Z" fill={`url(#${color})`} stroke={p[1]} strokeWidth="2" />
      <circle cx="12" cy="10" r="7" fill="#10b981" filter="url(#glow)" />
      <path d="M12 6v6m-3 -3l3 3l3 -3" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
    </g>
  );
}

// 22. Server Chassis & Bare-Metal Hardware
function ServerChassisIcon({ color = 'emerald' }) {
  const p = palettes[color] || palettes.emerald;
  return (
    <g transform="translate(0, -6)">
      <rect x="-24" y="-18" width="48" height="36" rx="4" fill="url(#server)" stroke={p[1]} strokeWidth="2" filter="url(#smallShadow)" />
      <rect x="-10" y="-8" width="20" height="18" rx="2" fill={`url(#${color})`} stroke="#fff" strokeWidth="1.2" />
      <circle cx="0" cy="1" r="4" fill="url(#card)" />
      {[-13, 11].map((x) =>
        [-4, 2, 8].map((y) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1" fill="#f59e0b" />
        ))
      )}
      {[-20, 16].map((x) => (
        <rect key={x} x={x} y="-14" width="4" height="28" rx="1" fill="#1e293b" stroke={p[0]} strokeWidth="0.8" />
      ))}
    </g>
  );
}

// 23. Strategic DR Scenario Compass
function ScenarioCompassIcon({ color = 'orange' }) {
  const p = palettes[color] || palettes.orange;
  return (
    <g transform="translate(0, -6)">
      <circle cx="0" cy="0" r="22" fill={`url(#${color})`} stroke={p[1]} strokeWidth="2.5" filter="url(#smallShadow)" />
      <circle cx="0" cy="0" r="16" fill="url(#card)" stroke="#fff" strokeWidth="1.5" />
      <path d="M0 -14L4 0L0 14L-4 0Z" fill={p[2]} stroke="#fff" strokeWidth="1" />
      <path d="M-14 0L0 -4L14 0L0 4Z" fill={p[1]} stroke="#fff" strokeWidth="1" />
      <circle cx="0" cy="0" r="3" fill="#fff" />
      <text x="0" y="-8" textAnchor="middle" fill={p[2]} fontSize="6" fontWeight="bold">N</text>
    </g>
  );
}

// 24. Business Impact Bar Chart
function ImpactChartIcon({ color = 'gold' }) {
  const p = palettes[color] || palettes.gold;
  return (
    <g transform="translate(0, -6)">
      <path d="M-22 14L0 22L22 14" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
      <g transform="translate(-14, 6)">
        <rect x="-4" y="-8" width="8" height="12" rx="1.5" fill={`url(#${color})`} stroke={p[1]} strokeWidth="1" />
      </g>
      <g transform="translate(0, 0)">
        <rect x="-4" y="-14" width="8" height="18" rx="1.5" fill={`url(#${color}Top)`} stroke={p[1]} strokeWidth="1" />
      </g>
      <g transform="translate(14, -6)">
        <rect x="-4" y="-20" width="8" height="24" rx="1.5" fill={p[2]} stroke="#fff" strokeWidth="1" filter="url(#smallShadow)" />
      </g>
      <path d="M-16 2L0 -8L16 -18" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 -20L18 -18L17 -12Z" fill="#ef4444" />
    </g>
  );
}

// 25. RTO / RPO Speedometer Gauge
function TimerGaugeIcon({ color = 'crimson' }) {
  const p = palettes[color] || palettes.crimson;
  return (
    <g transform="translate(0, -6)">
      <circle cx="0" cy="0" r="21" fill="url(#card)" stroke={p[1]} strokeWidth="2.5" filter="url(#smallShadow)" />
      <circle cx="0" cy="0" r="16" fill={`url(#${color})`} opacity="0.3" />
      <path d="M-14 8A15 15 0 1 1 14 8" fill="none" stroke={p[1]} strokeWidth="3.5" strokeLinecap="round" />
      <rect x="-3" y="-25" width="6" height="4" rx="1" fill="url(#silver)" stroke="#688" strokeWidth="0.8" />
      <line x1="0" y1="0" x2="8" y2="-9" stroke={p[2]} strokeWidth="3" strokeLinecap="round" />
      <circle cx="0" cy="0" r="4" fill={p[1]} stroke="#fff" strokeWidth="1.5" />
    </g>
  );
}

// 26. Operations Runbook Playbook
function RunbookBookIcon({ color = 'teal' }) {
  const p = palettes[color] || palettes.teal;
  return (
    <g transform="translate(0, -6)">
      <rect x="-20" y="-20" width="40" height="42" rx="3" fill={`url(#${color})`} stroke={p[1]} strokeWidth="2" filter="url(#smallShadow)" />
      <rect x="-14" y="-17" width="31" height="36" rx="2" fill="url(#card)" stroke="#cbd5e1" strokeWidth="1" />
      <path d="M4 -18v16l-3 -3l-3 3v-16z" fill="#ef4444" />
      {[-8, -2, 4, 10].map((y) => (
        <g key={y}>
          <circle cx="-9" cy={y} r="1.5" fill={p[1]} />
          <line x1="-5" y1={y} x2="11" y2={y} stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
}

// 27. Dependency Topology Node Web
function DependencyMapIcon({ color = 'indigo' }) {
  const p = palettes[color] || palettes.indigo;
  return (
    <g transform="translate(0, -6)">
      <line x1="0" y1="-14" x2="-18" y2="10" stroke={p[1]} strokeWidth="2" strokeDasharray="3 2" />
      <line x1="0" y1="-14" x2="18" y2="10" stroke={p[1]} strokeWidth="2" strokeDasharray="3 2" />
      <line x1="-18" y1="10" x2="18" y2="10" stroke={p[0]} strokeWidth="2" />
      <circle cx="0" cy="-14" r="9" fill={`url(#${color})`} stroke="#fff" strokeWidth="2" filter="url(#glow)" />
      <circle cx="0" cy="-14" r="4" fill="#fff" />
      <circle cx="-18" cy="10" r="7" fill={`url(#${color}Top)`} stroke={p[1]} strokeWidth="1.5" />
      <circle cx="-18" cy="10" r="3" fill={p[2]} />
      <circle cx="18" cy="10" r="7" fill={`url(#${color}Top)`} stroke={p[1]} strokeWidth="1.5" />
      <circle cx="18" cy="10" r="3" fill={p[2]} />
    </g>
  );
}

// 28. High Availability Active-Active Pair
function HighAvailabilityIcon({ color = 'rose' }) {
  const p = palettes[color] || palettes.rose;
  return (
    <g transform="translate(0, -6)">
      <rect x="-24" y="-16" width="18" height="34" rx="2.5" fill="url(#server)" stroke={p[1]} strokeWidth="1.8" filter="url(#smallShadow)" />
      <circle cx="-15" cy="-8" r="2" fill="#10b981" filter="url(#glow)" />
      <circle cx="-15" cy="0" r="1.5" fill={p[0]} />
      <rect x="6" y="-16" width="18" height="34" rx="2.5" fill="url(#server)" stroke={p[1]} strokeWidth="1.8" filter="url(#smallShadow)" />
      <circle cx="15" cy="-8" r="2" fill="#10b981" filter="url(#glow)" />
      <circle cx="15" cy="0" r="1.5" fill={p[0]} />
      <path d="M-6 0h12" stroke="#fff" strokeWidth="3" strokeDasharray="2 2" />
      <circle cx="0" cy="0" r="6" fill={`url(#${color})`} stroke="#fff" strokeWidth="1.5" filter="url(#glow)" />
      <path d="M-2 -2l4 4m0 -4l-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  );
}

// 29. High-Speed Data Replication Beam
function DataReplicationIcon({ color = 'purple' }) {
  const p = palettes[color] || palettes.purple;
  return (
    <g transform="translate(0, -6)">
      <path d="M-22 -8v18c0 5 18 5 18 0v-18" fill={`url(#${color})`} stroke={p[1]} strokeWidth="1.2" />
      <ellipse cx="-13" cy="-8" rx="9" ry="3.5" fill={`url(#${color}Top)`} stroke="#fff" />
      <path d="M4 -8v18c0 5 18 5 18 0v-18" fill="url(#steel)" stroke={p[1]} strokeWidth="1.2" />
      <ellipse cx="13" cy="-8" rx="9" ry="3.5" fill="url(#silver)" stroke="#fff" />
      <path d="M-4 1H4" stroke={p[0]} strokeWidth="3.5" filter="url(#glow)" strokeLinecap="round" />
      <path d="M-4 1H4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="0" cy="1" r="3" fill="#fff" filter="url(#glow)" />
    </g>
  );
}

// 30. Post-Recovery Validation Clipboard
function ValidationCheckIcon({ color = 'indigo' }) {
  const p = palettes[color] || palettes.indigo;
  return (
    <g transform="translate(0, -6)">
      <rect x="-20" y="-18" width="40" height="40" rx="3.5" fill="url(#card)" stroke={p[1]} strokeWidth="2" filter="url(#smallShadow)" />
      <rect x="-8" y="-22" width="16" height="7" rx="2" fill="url(#silver)" stroke="#688" strokeWidth="1" />
      {[-8, -1, 6].map((y) => (
        <g key={y}>
          <rect x="-14" y={y} width="5" height="5" rx="1" fill="#10b981" />
          <line x1="-6" y1={y + 2.5} x2="13" y2={y + 2.5} stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
        </g>
      ))}
      <circle cx="12" cy="14" r="8" fill="#10b981" filter="url(#glow)" />
      <path d="M9 14l2 2l4 -4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  );
}

// 31. Network Switch Firewall Barrier
function NetworkFirewallIcon({ color = 'cyan' }) {
  const p = palettes[color] || palettes.cyan;
  return (
    <g transform="translate(0, -6)">
      <rect x="-24" y="2" width="48" height="16" rx="2" fill="url(#server)" stroke={p[1]} strokeWidth="1.5" filter="url(#smallShadow)" />
      {[-16, -8, 0, 8, 16].map((x) => (
        <circle key={x} cx={x} cy="10" r="1.8" fill={p[0]} filter="url(#glow)" />
      ))}
      <rect x="-20" y="-18" width="40" height="18" rx="2" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.2" />
      <line x1="-20" y1="-9" x2="20" y2="-9" stroke="#fff" strokeWidth="1" opacity="0.6" />
      {[-10, 10].map((x) => (
        <line key={x} x1={x} y1="-18" x2={x} y2="-9" stroke="#fff" strokeWidth="1" opacity="0.6" />
      ))}
      <line x1="0" y1="-9" x2="0" y2="0" stroke="#fff" strokeWidth="1" opacity="0.6" />
    </g>
  );
}

// 32. Crisis Broadcast Antenna Tower
function CrisisBroadcastIcon({ color = 'emerald' }) {
  const p = palettes[color] || palettes.emerald;
  return (
    <g transform="translate(0, -6)">
      <path d="M0 -14L-14 20H14Z" fill="none" stroke={p[1]} strokeWidth="2" strokeLinejoin="round" />
      <line x1="-6" y1="-2" x2="6" y2="-2" stroke={p[1]} strokeWidth="1.5" />
      <line x1="-10" y1="9" x2="10" y2="9" stroke={p[1]} strokeWidth="1.5" />
      <circle cx="0" cy="-14" r="5" fill={`url(#${color})`} stroke="#fff" strokeWidth="1.5" filter="url(#glow)" />
      <path d="M-12 -22a15 15 0 0 1 24 0" fill="none" stroke={p[0]} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M-18 -26a22 22 0 0 1 36 0" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    </g>
  );
}

// 33. Incident Alert Warning Triangle
function IncidentAlertIcon({ color = 'teal' }) {
  const p = palettes[color] || palettes.teal;
  return (
    <g transform="translate(0, -6)">
      <path
        d="M0 -22L24 16H-24Z"
        fill={`url(#${color})`}
        stroke={p[1]}
        strokeWidth="2.5"
        strokeLinejoin="round"
        filter="url(#smallShadow)"
      />
      <path d="M0 -16L18 13H-18Z" fill="url(#card)" />
      <line x1="0" y1="-8" x2="0" y2="4" stroke={p[2]} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="0" cy="9" r="2" fill={p[2]} />
    </g>
  );
}

// 34. Compliance Certificate Diploma
function ComplianceCertificateIcon({ color = 'cyan' }) {
  const p = palettes[color] || palettes.cyan;
  return (
    <g transform="translate(0, -6)">
      <rect x="-22" y="-18" width="44" height="38" rx="3" fill="url(#card)" stroke={p[1]} strokeWidth="2" filter="url(#smallShadow)" />
      <rect x="-18" y="-14" width="36" height="3" rx="1.5" fill={`url(#${color})`} />
      {[-7, -1, 5].map((y) => (
        <line key={y} x1="-16" y1={y} x2="10" y2={y} stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" />
      ))}
      <circle cx="12" cy="11" r="7.5" fill="#f59e0b" filter="url(#smallShadow)" />
      <circle cx="12" cy="11" r="5" fill="#fef08a" />
      <path d="M9 16l3 5l3 -5" fill="#d97706" />
    </g>
  );
}

// 35. Command Governance Team Emblem
function TeamCommandIcon({ color = 'emerald' }) {
  const p = palettes[color] || palettes.emerald;
  return (
    <g transform="translate(0, -6)">
      <circle cx="0" cy="0" r="22" fill={`url(#${color})`} stroke={p[1]} strokeWidth="2" filter="url(#smallShadow)" />
      <circle cx="0" cy="0" r="16" fill="url(#card)" stroke="#fff" strokeWidth="1.2" />
      <circle cx="0" cy="-4" r="5" fill={p[2]} />
      <path d="M-9 11c0 -5 18 -5 18 0z" fill={p[2]} />
      <circle cx="12" cy="-10" r="6" fill="#f59e0b" filter="url(#glow)" />
      <path d="M12 -13l1 2h2l-1.5 1.5l0.5 2l-2 -1.2l-2 1.2l0.5 -2l-1.5 -1.5h2z" fill="#fff" />
    </g>
  );
}

// 36. Vendor Handshake Collaboration Badge
function HandshakeVendorIcon({ color = 'orange' }) {
  const p = palettes[color] || palettes.orange;
  return (
    <g transform="translate(0, -6)">
      <circle cx="0" cy="0" r="21" fill="url(#card)" stroke={p[1]} strokeWidth="2.5" filter="url(#smallShadow)" />
      <path d="M-14 3l7 -6l6 6l-3 4l-4 -3l-6 5z" fill={`url(#${color})`} stroke={p[1]} strokeWidth="1" />
      <path d="M14 3l-7 -6l-6 6l3 4l4 -3l6 5z" fill={p[2]} stroke={p[1]} strokeWidth="1" />
      <circle cx="0" cy="0" r="16" fill="none" stroke={p[0]} strokeWidth="1.5" strokeDasharray="4 3" />
    </g>
  );
}

// 37. Emergency Break-Glass Key Box
function BreakGlassKeyIcon({ color = 'gold' }) {
  const p = palettes[color] || palettes.gold;
  return (
    <g transform="translate(0, -6)">
      <rect x="-20" y="-18" width="40" height="38" rx="4" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" filter="url(#smallShadow)" />
      <rect x="-15" y="-13" width="30" height="28" rx="2" fill="url(#card)" stroke="#fff" strokeWidth="1.2" opacity="0.9" />
      <line x1="-12" y1="-10" x2="10" y2="12" stroke="#fff" strokeWidth="1.5" opacity="0.7" />
      <circle cx="-5" cy="0" r="5" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
      <path d="M0 0H10V4H6V0" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
}

// 38. Continuous Improvement & Lessons Lightbulb
function LessonsLearnedIcon({ color = 'crimson' }) {
  const p = palettes[color] || palettes.crimson;
  return (
    <g transform="translate(0, -6)">
      <path
        d="M-14 -4 C-14 -14 -6 -20 0 -20 C6 -20 14 -14 14 -4 C14 2 8 8 6 12 H-6 C-8 8 -14 2 -14 -4 Z"
        fill={`url(#${color}Top)`}
        stroke="#fff"
        strokeWidth="1.8"
        filter="url(#glow)"
      />
      <path d="M-4 -6 Q0 -12 4 -6" fill="none" stroke={p[1]} strokeWidth="2" strokeLinecap="round" />
      <rect x="-6" y="12" width="12" height="4" rx="1" fill="url(#silver)" stroke="#688" strokeWidth="0.8" />
      <rect x="-4" y="16" width="8" height="3" rx="1" fill="#475569" />
      {[-18, 18].map((x) => (
        <circle key={x} cx={x} cy="-12" r="1.5" fill="#f59e0b" />
      ))}
    </g>
  );
}

// 39. Training & Awareness Graduation Cap
function TrainingGraduationIcon({ color = 'cyan' }) {
  const p = palettes[color] || palettes.cyan;
  return (
    <g transform="translate(0, -6)">
      <path d="M0 -18L24 -9L0 0L-24 -9Z" fill={`url(#${color})`} stroke="#fff" strokeWidth="1.5" filter="url(#smallShadow)" />
      <path d="M-12 -4V4C-12 9 12 9 12 4V-4Z" fill={p[2]} stroke={p[1]} strokeWidth="1.2" />
      <path d="M0 -9L18 0V8" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="18" cy="8" r="2" fill="#f59e0b" />
    </g>
  );
}

// 40. Catalog & Asset Metadata Tree
function FolderTreeIcon({ color = 'indigo' }) {
  const p = palettes[color] || palettes.indigo;
  return (
    <g transform="translate(0, -6)">
      <path d="M-20 -10h12l3 3h17v20h-32z" fill={p[2]} opacity="0.8" />
      <path d="M-22 -4h12l3 3h19v20h-34z" fill={`url(#${color})`} stroke={p[1]} strokeWidth="1.8" filter="url(#smallShadow)" />
      <rect x="-14" y="3" width="12" height="6" rx="1.5" fill="url(#card)" stroke="#fff" strokeWidth="0.8" />
      <rect x="2" y="3" width="12" height="6" rx="1.5" fill={`url(#${color}Top)`} stroke="#fff" strokeWidth="0.8" />
    </g>
  );
}

// ----------------------------------------------------------------------------
// Precise Mapping of All 60 Capabilities with Curated Unique Icons & Non-Repeating Colors
// ----------------------------------------------------------------------------
const VISUAL_MAPPINGS = {
  1: { color: 'blue', category: 'Strategy & Objectives', icon: TargetStrategyIcon },
  2: { color: 'emerald', category: 'Asset Classification', icon: AssetHierarchyIcon },
  3: { color: 'purple', category: 'Policy & Retention', icon: RetentionCalendarIcon },
  4: { color: 'orange', category: 'Backup Methods', icon: TieredDisksIcon },
  5: { color: 'gold', category: 'Job Automation', icon: GearCogIcon },
  6: { color: 'crimson', category: 'App Consistency', icon: AppContainerIcon },
  7: { color: 'teal', category: 'Database Backup', icon: DatabaseVaultIcon },
  8: { color: 'indigo', category: 'Virtual Workloads', icon: VirtualMachineIcon },
  9: { color: 'cyan', category: 'Cloud Workloads', icon: CloudSyncIcon },
  10: { color: 'rose', category: 'SaaS Platforms', icon: SaaSHubIcon },

  11: { color: 'blue', category: 'Endpoint Data', icon: LaptopEndpointIcon },
  12: { color: 'emerald', category: 'Infrastructure as Code', icon: CodeTerminalIcon },
  13: { color: 'purple', category: 'Storage Architecture', icon: StorageRackIcon },
  14: { color: 'orange', category: 'Geo Separation', icon: GlobeGeoIcon },
  15: { color: 'gold', category: 'Immutable Storage', icon: ImmutableSafeIcon },
  16: { color: 'crimson', category: 'Encryption & Keys', icon: GoldenKeyIcon },
  17: { color: 'teal', category: 'Access Control', icon: BiometricShieldIcon },
  18: { color: 'indigo', category: 'Monitoring & Alerts', icon: TelemetryPulseIcon },
  19: { color: 'cyan', category: 'Integrity Verification', icon: MagnifierChecksumIcon },
  20: { color: 'rose', category: 'Drills & Restore Tests', icon: RestoreLoopIcon },

  21: { color: 'blue', category: 'File & Object Recovery', icon: FileRestoreIcon },
  22: { color: 'emerald', category: 'System Restoration', icon: ServerChassisIcon },
  23: { color: 'purple', category: 'Bare-Metal Recovery', icon: ServerChassisIcon },
  24: { color: 'orange', category: 'DR Strategy & Scenarios', icon: ScenarioCompassIcon },
  25: { color: 'gold', category: 'Impact Analysis', icon: ImpactChartIcon },
  26: { color: 'crimson', category: 'RTO & RPO Targets', icon: TimerGaugeIcon },
  27: { color: 'teal', category: 'Runbooks & SOPs', icon: RunbookBookIcon },
  28: { color: 'indigo', category: 'Dependency Mapping', icon: DependencyMapIcon },
  29: { color: 'cyan', category: 'Alternate Site DR', icon: GlobeGeoIcon },
  30: { color: 'rose', category: 'High Availability', icon: HighAvailabilityIcon },

  31: { color: 'blue', category: 'Cloud Disaster Recovery', icon: CloudSyncIcon },
  32: { color: 'emerald', category: 'Multi-Region Resilience', icon: GlobeGeoIcon },
  33: { color: 'purple', category: 'Data Replication', icon: DataReplicationIcon },
  34: { color: 'orange', category: 'Failover & Failback', icon: HighAvailabilityIcon },
  35: { color: 'gold', category: 'Ransomware Recovery', icon: ImmutableSafeIcon },
  36: { color: 'crimson', category: 'Point-in-Time Restore', icon: RestoreLoopIcon },
  37: { color: 'teal', category: 'Database DR', icon: DatabaseVaultIcon },
  38: { color: 'indigo', category: 'Post-Recovery Validation', icon: ValidationCheckIcon },
  39: { color: 'cyan', category: 'Network & Security DR', icon: NetworkFirewallIcon },
  40: { color: 'rose', category: 'Remote Workforce', icon: LaptopEndpointIcon },

  41: { color: 'blue', category: 'Identity System Recovery', icon: BiometricShieldIcon },
  42: { color: 'emerald', category: 'Testing Simulation', icon: CrisisBroadcastIcon },
  43: { color: 'purple', category: 'Cloud Provider Outages', icon: SaaSHubIcon },
  44: { color: 'orange', category: 'Capacity Planning', icon: StorageRackIcon },
  45: { color: 'gold', category: 'Performance Window', icon: TelemetryPulseIcon },
  46: { color: 'crimson', category: 'Cost Optimisation', icon: ImpactChartIcon },
  47: { color: 'teal', category: 'Incident Management', icon: IncidentAlertIcon },
  48: { color: 'indigo', category: 'Catalog & Metadata', icon: FolderTreeIcon },
  49: { color: 'cyan', category: 'Compliance & Audits', icon: ComplianceCertificateIcon },
  50: { color: 'rose', category: 'Audit Evidence', icon: MagnifierChecksumIcon },

  51: { color: 'blue', category: 'Business Continuity Plan', icon: ScenarioCompassIcon },
  52: { color: 'emerald', category: 'DR Team Governance', icon: TeamCommandIcon },
  53: { color: 'purple', category: 'Crisis Communications', icon: CrisisBroadcastIcon },
  54: { color: 'orange', category: 'Vendor Coordination', icon: HandshakeVendorIcon },
  55: { color: 'gold', category: 'Emergency Access', icon: BreakGlassKeyIcon },
  56: { color: 'crimson', category: 'Lessons Learned', icon: LessonsLearnedIcon },
  57: { color: 'teal', category: 'Continuous Improvement', icon: ValidationCheckIcon },
  58: { color: 'indigo', category: 'SLA Tracking', icon: ComplianceCertificateIcon },
  59: { color: 'cyan', category: 'Training & Awareness', icon: TrainingGraduationIcon },
  60: { color: 'rose', category: 'Scope & RTO/RPO', icon: TargetStrategyIcon },
};

function getCapabilityVisual(item) {
  if (!item) return { color: 'blue', category: 'Strategy', icon: TargetStrategyIcon };
  return VISUAL_MAPPINGS[item.id] || { color: 'blue', category: 'Enterprise Service', icon: TargetStrategyIcon };
}

// ----------------------------------------------------------------------------
// Platform Base & Station Card
// ----------------------------------------------------------------------------
function PlatformBase({ color = 'blue', rx = 76, ry = 33 }) {
  const palette = palettes[color] || palettes.blue;
  return (
    <g filter="url(#shadow)">
      <path
        d={`M${-rx} 0v20a${rx} ${ry} 0 0 0 ${rx * 2} 0v-20`}
        fill={`url(#${color})`}
        stroke={palette[1]}
      />
      <ellipse cx={0} cy={0} rx={rx} ry={ry} fill={`url(#${color}Top)`} stroke="#fff" />
      <ellipse cx={0} cy={-2} rx={rx - 8} ry={ry - 5} fill={`url(#${color}Top)`} stroke={palette[1]} strokeWidth="1.8" />
      <path d={`M${-rx + 5} 6a${rx - 5} ${ry - 3} 0 0 0 ${2 * rx - 10} 0`} fill="none" stroke="#fff" strokeWidth="2.5" opacity=".9" />
      <path
        d={getEllipsePath(0, 0, rx - 3, ry - 2)}
        fill="none"
        stroke={palette[1]}
        strokeWidth="2.2"
        strokeDasharray="22 14 40 14"
        pathLength="500"
        className="anim-pedestal-cw-fast"
        opacity="0.85"
      />
    </g>
  );
}

function StationCard({ item, theme, isFocused, isHovered }) {
  const { number, title } = item;
  const color = theme.color;
  const palette = palettes[color] || palettes.blue;
  const w = 224;
  const h = 138;
  const lines = wrapTitle(title, 20);

  return (
    <g transform="translate(0, 44)">
      <rect
        x={-w / 2}
        y={0}
        width={w}
        height={h}
        rx={16}
        fill="url(#card)"
        stroke={isFocused ? palette[1] : isHovered ? palette[0] : "#dbe4ef"}
        strokeWidth={isFocused ? 2.5 : isHovered ? 1.8 : 1.2}
        filter={isFocused ? "url(#shadow)" : "url(#smallShadow)"}
      />
      <rect
        x={-w / 2 + 20}
        y={0}
        width={w - 40}
        height={3.5}
        rx={1.75}
        fill={`url(#${color})`}
      />

      <circle cx={0} cy={20} r={19} fill={`url(#${color}Badge)`} filter="url(#smallShadow)" />
      <text x={0} y={26} textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800">
        {number}
      </text>

      {lines.map((line, i) => (
        <text
          key={i}
          x={0}
          y={lines.length === 1 ? 82 : lines.length === 2 ? 72 + i * 22 : 64 + i * 20}
          textAnchor="middle"
          fill="#0b1728"
          fontSize="13.5"
          fontWeight="700"
          letterSpacing="-0.2"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function StepStation({ item, theme, isFocused, isHovered, onHover, onLeave, onClick }) {
  const IconComponent = theme.icon;

  return (
    <g
      className="cursor-pointer select-none"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <PlatformBase color={theme.color} />
      <g transform="translate(0, -28)">
        <IconComponent color={theme.color} />
      </g>
      <StationCard item={item} theme={theme} isFocused={isFocused} isHovered={isHovered} />
    </g>
  );
}

// ----------------------------------------------------------------------------
// Central Server Infrastructure Pedestal
// ----------------------------------------------------------------------------
function Server({ x, y, w = 137, h = 141 }) {
  return (
    <g filter="url(#smallShadow)">
      <path d={`M${x} ${y}v${h - 20}a${w / 2} 19 0 0 0 ${w} 0V${y}`} fill="url(#server)" stroke="#60738c" strokeWidth="2" />
      <ellipse cx={x + w / 2} cy={y} rx={w / 2} ry="17" fill="url(#silver)" stroke="#374b66" strokeWidth="2" />
      <ellipse cx={x + w / 2} cy={y - 1} rx={w / 2 - 9} ry="13" fill="url(#steel)" stroke="#fff" />
      {[0, 1, 2].map((row) => (
        <g key={row} transform={`translate(${x + 10} ${y + 19 + row * 36})`}>
          <path d={`M0 0Q${w / 2 - 10} 13 ${w - 20} 0v29Q${w / 2 - 10} 41 0 29Z`} fill="url(#face)" stroke="#47657f" />
          <path d="M6 4v22" stroke="#b3d0df" strokeWidth="3" />
          <rect x="14" y="8" width={w - 67} height="16" rx="2" fill="#06101a" stroke="#82949c" strokeWidth=".7" />
          {Array.from({ length: 10 }, (_, i) => (
            <g key={i}>
              <path d={`M${18 + i * 5.1} 10v4m0 3v4`} stroke="#81908f" strokeWidth="1.6" />
            </g>
          ))}
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <circle
                cx={w - 45 + i * 6}
                cy="13"
                r="3.5"
                fill="#00baff"
                filter="url(#glow)"
                className="anim-led-blink"
                style={{ animationDelay: `${(row * 3 + i) * 0.25}s` }}
              />
              <circle cx={w - 45 + i * 6} cy="13" r="1.6" fill="#b3ffff" />
              <circle
                cx={w - 45 + i * 6}
                cy="21"
                r="1.5"
                fill="#2cccff"
                className="anim-led-blink"
                style={{ animationDelay: `${(row * 2 + i + 1) * 0.3}s` }}
              />
            </g>
          ))}
        </g>
      ))}
      <path d={`M${x + 5} ${y + 9}v${h - 28}`} stroke="#a8c5df" opacity=".6" />
    </g>
  );
}

function ServerPedestal() {
  const cx = 785;
  const cy = 590;

  return (
    <g filter="url(#shadow)">
      <path d="M504 592v24c0 76 563 76 563 0v-24" fill="url(#silver)" stroke="#9eb1ce" />
      <ellipse cx={cx} cy="592" rx="282" ry="63" fill="url(#steel)" stroke="#e0eaff" />
      <ellipse cx={cx} cy="588" rx="250" ry="49" fill="url(#silver)" stroke="#6899c7" strokeWidth="2" />
      <ellipse cx={cx} cy={cy} rx="228" ry="42" fill="#d7f2ff" />

      <ellipse cx={cx} cy="592" rx="228" ry="42" fill="none" stroke="#00d9ff" strokeWidth="11" opacity=".7" filter="url(#glow)" className="anim-pedestal-pulse" />
      <ellipse cx={cx} cy={cy} rx="228" ry="42" fill="none" stroke="#00c7f6" strokeWidth="2.5" opacity=".5" />

      <path d={getEllipsePath(cx, 591, 252, 50)} fill="none" stroke="#00d9ff" strokeWidth="1.2" opacity=".25" />
      <path
        d={getEllipsePath(cx, 591, 252, 50)}
        fill="none"
        stroke="#00d9ff"
        strokeWidth="3"
        strokeDasharray="60 30 130 40 25 25 170 45"
        opacity=".9"
        filter="url(#glow)"
        pathLength="1000"
        className="anim-pedestal-cw-normal"
      />
      <path
        d={getEllipsePath(cx, 591, 252, 50)}
        fill="none"
        stroke="#ffffff"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray="2 248"
        filter="url(#laserGlow)"
        pathLength="1000"
        className="anim-pedestal-cw-normal"
      />

      <path
        d={getEllipsePath(cx, cy, 230, 43)}
        fill="none"
        stroke="#00f0ff"
        strokeWidth="7"
        strokeDasharray="140 50 60 30 190 60 70 30"
        opacity=".6"
        filter="url(#glow)"
        pathLength="1000"
        className="anim-pedestal-ccw-normal"
      />
      <path
        d={getEllipsePath(cx, cy, 230, 43)}
        fill="none"
        stroke="#38bdf8"
        strokeWidth="3.5"
        strokeDasharray="140 50 60 30 190 60 70 30"
        opacity=".95"
        pathLength="1000"
        className="anim-pedestal-ccw-normal"
      />
      <path
        d={getEllipsePath(cx, cy, 230, 43)}
        fill="none"
        stroke="#ffffff"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeDasharray="2 198"
        filter="url(#laserGlow)"
        pathLength="1000"
        className="anim-pedestal-ccw-normal"
      />

      <path
        d={getEllipsePath(cx, 589, 210, 38)}
        fill="none"
        stroke="#0284c7"
        strokeWidth="2.2"
        strokeDasharray="12 18 24 18"
        opacity=".75"
        pathLength="1000"
        className="anim-pedestal-cw-slow"
      />
      <path
        d={getEllipsePath(cx, 589, 210, 38)}
        fill="none"
        stroke="#7dd3fc"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="2 331"
        filter="url(#glow)"
        pathLength="1000"
        className="anim-pedestal-cw-slow"
      />

      <path d="M558 598C590 648 981 648 1014 597" fill="none" stroke="#04ccff" strokeWidth="10" opacity=".9" filter="url(#glow)" className="anim-pedestal-pulse" />
      <path d="M558 598C590 648 981 648 1014 597" fill="none" stroke="#00d7ff" strokeWidth="5" />
      <path d="M563 595C600 639 972 639 1009 595" fill="none" stroke="#e6ffff" strokeWidth="3" />
      <path d="M556 596c15 53 450 56 462-2" fill="none" stroke="#fff" strokeWidth="5" />
      <path d="M548 623c110 49 398 48 475-2" fill="none" stroke="#7beaff" strokeWidth="6" opacity=".6" filter="url(#glow)" />
      <path d="M548 623c110 49 398 48 475-2" fill="none" stroke="#efffff" strokeWidth="3" />

      <path
        d="M558 598C590 648 981 648 1014 597"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="70 390"
        pathLength="460"
        className="anim-front-sweep"
        filter="url(#laserGlow)"
      />
    </g>
  );
}

const largeCloud =
  'M597 445C543 445 500 410 500 361C500 318 525 283 564 276C544 257 535 235 535 211C535 161 570 119 619 119C642 119 663 128 679 142C681 91 722 55 773 55C829 55 871 96 875 149C894 131 917 122 941 122C991 122 1028 163 1028 211C1028 237 1017 260 1000 276C1046 281 1080 317 1080 362C1080 410 1041 445 991 445Z';

function CentralCloud({ activeItem, theme, isBooted = false }) {
  if (!activeItem) return null;
  const textColor = textThemes[theme?.color] || textThemes.blue;

  return (
    <g>
      {/* Background Cloud Drop Shadow */}
      <path d={largeCloud} transform="translate(-18 -3)" fill="url(#blue)" />
      {/* Cloud Main Gradient Fill & Border */}
      <path d={largeCloud} fill="url(#cloud)" stroke="#85b7ff" strokeWidth="1.5" />
      {/* 3D Cloud Volume Highlights */}
      <path
        d="M510 359C510 323 530 294 562 286M552 253C528 216 543 164 581 140C592 133 605 129 619 129M691 130C701 91 732 65 773 65M888 151C922 121 970 128 998 160"
        stroke="#fff"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Cloud Content: Realighed Title & Description with Capability Theme Colors */}
      <foreignObject x="550" y="146" width="460" height="285">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className={!isBooted ? "anim-boot-content" : ""}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textAlign: 'center',
            padding: '10px 18px',
            boxSizing: 'border-box',
          }}
        >
          {/* Full Title in Theme Color */}
          <h2
            style={{
              margin: '0 0 12px 0',
              fontSize: '20px',
              fontWeight: 800,
              color: textColor.title,
              lineHeight: 1.28,
              letterSpacing: '-0.25px',
              textAlign: 'center',
              maxWidth: '415px',
              transition: 'color 0.3s ease',
            }}
          >
            {activeItem.title}
          </h2>

          {/* Total Full Content / Description in Theme Color */}
          <p
            style={{
              margin: 0,
              fontSize: '13.5px',
              fontWeight: 500,
              color: textColor.body,
              lineHeight: 1.64,
              textAlign: 'center',
              maxWidth: '415px',
              transition: 'color 0.3s ease',
            }}
          >
            {activeItem.description}
          </p>
        </div>
      </foreignObject>
    </g>
  );
}

// ----------------------------------------------------------------------------
// 3D Orbit Carousel with Occultation Transformation behind the Data Center
// ----------------------------------------------------------------------------
function Artwork({
  rotationPhi,
  onStationClick,
  hoveredStation,
  setHoveredStation,
  isMobile = false,
  isBooted = false,
}) {
  const Xc = 780;
  const Yc = 635;
  const Rx = 490;
  const Ry = 115;
  const STEP = (2 * Math.PI) / 5;

  // Exactly 5 stations orbiting around the data center
  const stations = [0, 1, 2, 3, 4].map((k) => {
    const progress = rotationPhi - k * STEP;
    const theta = Math.PI / 2 - progress;

    const x = Xc + Rx * Math.cos(theta);
    const y = Yc + Ry * Math.sin(theta);
    const z = Math.sin(theta);
    const scale = 0.82 + 0.22 * ((z + 1) / 2);
    const opacity = 0.80 + 0.20 * ((z + 1) / 2);

    // When station k passes behind the data center (progress = pi, 3pi, 5pi...),
    // lap increments by 1, updating the capability by 5!
    const lap = Math.floor((progress + Math.PI) / (2 * Math.PI));
    const cardIndex = ((k + 5 * lap) % 60 + 60) % 60;
    const item = capabilities[cardIndex] || capabilities[0];
    const theme = getCapabilityVisual(item);
    const isFocused = Math.abs(z - 1) < 0.25;

    return {
      k,
      cardIndex,
      item,
      theme,
      x,
      y,
      z,
      scale,
      opacity,
      isFocused,
    };
  });

  // Separate stations into back half (behind servers) and front half (in front of servers)
  const backStations = stations.filter((s) => s.z < -0.15).sort((a, b) => a.z - b.z);
  const frontStations = stations.filter((s) => s.z >= -0.15).sort((a, b) => a.z - b.z);

  // Center spotlight station for Central Cloud HUD
  const centerStation = [...stations].sort((a, b) => b.z - a.z)[0];
  const activeItem = centerStation?.item || capabilities[0];
  const activeTheme = centerStation?.theme || getCapabilityVisual(activeItem);

  return (
    <svg
      viewBox={isMobile ? "200 420 1160 460" : "50 33 1460 964"}
      preserveAspectRatio={isMobile ? "xMidYMid meet" : "none"}
      className="block h-full w-full select-none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fontFamily="Arial, Helvetica, sans-serif"
    >
      <Definitions />

      {/* Background Floor Depth Shadow */}
      <rect width="1536" height="1024" fill="#000" />
      <rect x="50" y="33" width="1460" height="964" rx="0" fill="url(#panel)" />
      <ellipse cx="780" cy="842" rx="685" ry="180" fill="url(#floor)" />

      {/* 3D Orbit Rail surrounding the Data Center & Lifecycle Flow Beams */}
      <g className="anim-boot-rails">
        <ellipse
          cx={Xc}
          cy={Yc}
          rx={Rx}
          ry={Ry}
          fill="none"
          stroke="#00d9ff"
          strokeWidth="3.5"
          strokeDasharray="25 15 65 18"
          opacity="0.45"
          filter="url(#glow)"
          className="anim-pedestal-cw-slow"
          pathLength="1000"
        />
        <ellipse
          cx={Xc}
          cy={Yc}
          rx={Rx}
          ry={Ry}
          fill="none"
          stroke="#0284c7"
          strokeWidth="1.5"
          opacity="0.35"
        />

        {/* Lifecycle Flow Beams */}
        <path
          d="M620 440Q470 485 360 580"
          fill="none"
          stroke="url(#blueArrow)"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M620 440Q470 485 360 580"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeDasharray="30 70"
          strokeLinecap="round"
          className="anim-flow-pulse"
        />
        <path d="M352 578l15-12 3 9 15 4-15 10Z" fill="#87d4ff" />

        <path
          d="M1200 580Q1090 485 960 440"
          fill="none"
          stroke="url(#purpleArrow)"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M1200 580Q1090 485 960 440"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeDasharray="30 70"
          strokeLinecap="round"
          className="anim-flow-pulse"
        />
        <path d="M965 442l-14 11-2-9-14-3 15-9Z" fill="#c084fc" />
      </g>

      {/* BACK STATIONS (Passes BEHIND the central data center and updates card ID) */}
      {backStations.map((station) => (
        <g
          key={station.k}
          transform={`translate(${station.x}, ${station.y}) scale(${station.scale})`}
          opacity={station.opacity}
        >
          {!isBooted ? (
            <g
              className="anim-boot-station"
              style={{
                transformOrigin: '0px 0px',
                animationDelay: `${0.65 + station.k * 0.09}s`,
              }}
            >
              <StepStation
                item={station.item}
                theme={station.theme}
                isFocused={station.isFocused}
                isHovered={hoveredStation === station.k}
                onHover={() => setHoveredStation(station.k)}
                onLeave={() => setHoveredStation(null)}
                onClick={() => onStationClick(station.cardIndex)}
              />
            </g>
          ) : (
            <StepStation
              item={station.item}
              theme={station.theme}
              isFocused={station.isFocused}
              isHovered={hoveredStation === station.k}
              onHover={() => setHoveredStation(station.k)}
              onLeave={() => setHoveredStation(null)}
              onClick={() => onStationClick(station.cardIndex)}
            />
          )}
        </g>
      ))}

      {/* CENTRAL DATA CENTER: PEDESTAL */}
      <g className="anim-boot-pedestal">
        <ServerPedestal />
      </g>

      {/* CENTRAL DATA CENTER: PHYSICAL SERVERS & BUS CABLES */}
      <g className="anim-boot-servers">
        {/* Vertical Data Bus Cables */}
        {[715, 790, 835, 876].map((x) => (
          <g key={x}>
            <path d={`M${x} 423v46`} stroke="#0072b8" strokeWidth="15" />
            <path d={`M${x - 3} 424v42`} stroke="#00c5ff" strokeWidth="5" />
            <ellipse cx={x} cy="469" rx="20" ry="5" fill="url(#blue)" />
          </g>
        ))}

        {/* 3 Main Physical Server Racks */}
        <Server x={579} y={480} w={139} h={130} />
        <Server x={862} y={479} w={133} h={130} />
        <Server x={713} y={484} w={151} h={139} />
      </g>

      {/* Front Holographic Light Arc crossing in front of Server Base */}
      <g className="anim-boot-pedestal">
        <path
          d="M550 618C610 658 960 658 1020 618"
          fill="none"
          stroke="#00d9ff"
          strokeWidth="3"
          strokeDasharray="80 40 120 50"
          opacity="0.85"
          filter="url(#glow)"
          pathLength="500"
          className="anim-pedestal-cw-fast"
        />
        <path
          d="M550 618C610 658 960 658 1020 618"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeDasharray="2 123"
          filter="url(#laserGlow)"
          pathLength="500"
          className="anim-pedestal-cw-fast"
        />
      </g>

      {/* Central Cloud Graphic with Live Focused Capability Data */}
      {!isMobile && (
        <g className="anim-boot-cloud">
          <CentralCloud activeItem={activeItem} theme={activeTheme} isBooted={isBooted} />
        </g>
      )}

      {/* FRONT STATIONS (Passes IN FRONT of the server pedestal in full focus) */}
      {frontStations.map((station) => (
        <g
          key={station.k}
          transform={`translate(${station.x}, ${station.y}) scale(${station.scale})`}
          opacity={station.opacity}
        >
          {!isBooted ? (
            <g
              className="anim-boot-station"
              style={{
                transformOrigin: '0px 0px',
                animationDelay: `${0.65 + station.k * 0.09}s`,
              }}
            >
              <StepStation
                item={station.item}
                theme={station.theme}
                isFocused={station.isFocused}
                isHovered={hoveredStation === station.k}
                onHover={() => setHoveredStation(station.k)}
                onLeave={() => setHoveredStation(null)}
                onClick={() => onStationClick(station.cardIndex)}
              />
            </g>
          ) : (
            <StepStation
              item={station.item}
              theme={station.theme}
              isFocused={station.isFocused}
              isHovered={hoveredStation === station.k}
              onHover={() => setHoveredStation(station.k)}
              onLeave={() => setHoveredStation(null)}
              onClick={() => onStationClick(station.cardIndex)}
            />
          )}
        </g>
      ))}
    </svg>
  );
}

// ----------------------------------------------------------------------------
// Inline UI Icons for Controls
// ----------------------------------------------------------------------------
function ChevronLeftIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function PauseIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <rect x="6" y="4" width="4" height="16" rx="1.5" />
      <rect x="14" y="4" width="4" height="16" rx="1.5" />
    </svg>
  );
}

function PlayIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 5.25v13.5a.75.75 0 0 0 1.16.63l10.5-6.75a.75.75 0 0 0 0-1.26L8.16 4.62A.75.75 0 0 0 7 5.25z" />
    </svg>
  );
}

// Helper to determine the capability currently in center spotlight
export function getActiveCapability(rotationPhi) {
  const STEP = (2 * Math.PI) / 5;
  const stations = [0, 1, 2, 3, 4].map((k) => {
    const progress = rotationPhi - k * STEP;
    const theta = Math.PI / 2 - progress;
    const z = Math.sin(theta);
    const lap = Math.floor((progress + Math.PI) / (2 * Math.PI));
    const cardIndex = ((k + 5 * lap) % 60 + 60) % 60;
    const item = capabilities[cardIndex] || capabilities[0];
    const theme = getCapabilityVisual(item);
    return { z, item, theme, cardIndex };
  });
  const center = [...stations].sort((a, b) => b.z - a.z)[0];
  return {
    item: center?.item || capabilities[0],
    theme: center?.theme || getCapabilityVisual(capabilities[0]),
    cardIndex: center?.cardIndex ?? 0,
  };
}

// ----------------------------------------------------------------------------
// Main Top-Level Page Component (Fully Responsive & Interactive)
// ----------------------------------------------------------------------------
export default function DataBackupDisasterRecoveryServices({ onClose, onHome }) {
  const [rotationPhi, setRotationPhi] = useState(0);
  const [hoveredStation, setHoveredStation] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isBooted, setIsBooted] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooted(true);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  // Responsive device detection
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowSize.width < 768;

  const phiRef = useRef(0);
  const targetPhiRef = useRef(null);

  const STEP = (2 * Math.PI) / 5;

  // Active capability info
  const { item: activeItem, theme: activeTheme } = getActiveCapability(rotationPhi);
  const activePalette = palettes[activeTheme.color] || palettes.blue;
  const activeTextTheme = textThemes[activeTheme.color] || textThemes.blue;

  // Touch & Pointer Drag State
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startPhiRef = useRef(0);
  const hasMovedRef = useRef(false);

  const handlePointerDown = (e) => {
    if (e.button && e.button !== 0) return;
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startPhiRef.current = phiRef.current;
    hasMovedRef.current = false;
    targetPhiRef.current = null;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) { }
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 4) {
      hasMovedRef.current = true;
    }
    const sensitivity = isMobile ? 0.005 : 0.0035;
    phiRef.current = startPhiRef.current - dx * sensitivity;
    setRotationPhi(phiRef.current);
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) { }
    if (hasMovedRef.current) {
      const currentPhi = phiRef.current;
      const nearestStep = Math.round(currentPhi / STEP) * STEP;
      targetPhiRef.current = nearestStep;
    }
  };

  // Jump to specific capability ID (1 to 60)
  const handleJumpToId = (id) => {
    const c = id - 1;
    const k = c % 5;
    const lap = Math.floor(c / 5);
    const targetCycleAngle = lap * (2 * Math.PI) + k * STEP;

    const fullCycle = 12 * 2 * Math.PI;
    const currentNorm = ((phiRef.current % fullCycle) + fullCycle) % fullCycle;
    let diff = targetCycleAngle - currentNorm;
    while (diff > fullCycle / 2) diff -= fullCycle;
    while (diff < -fullCycle / 2) diff += fullCycle;

    targetPhiRef.current = phiRef.current + diff;
  };

  const handleNext = () => {
    const nextId = (activeItem.id % 60) + 1;
    handleJumpToId(nextId);
  };

  const handlePrev = () => {
    const prevId = ((activeItem.id - 2 + 60) % 60) + 1;
    handleJumpToId(prevId);
  };

  const handleStationClick = (cardIndex) => {
    if (hasMovedRef.current) return;
    handleJumpToId(cardIndex + 1);
  };

  const bootStartRef = useRef(performance.now());
  // 60fps Continuous 3D Orbit Loop
  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const loop = (now) => {
      const dt = Math.min(now - lastTime, 50);
      lastTime = now;

      if (targetPhiRef.current !== null) {
        const diff = targetPhiRef.current - phiRef.current;
        if (Math.abs(diff) < 0.008) {
          phiRef.current = targetPhiRef.current;
          targetPhiRef.current = null;
        } else {
          phiRef.current += diff * 0.09;
        }
        setRotationPhi(phiRef.current);
      } else if (!isPaused && hoveredStation === null && !isDraggingRef.current) {
        const elapsed = now - bootStartRef.current;
        const bootFactor = Math.min(Math.max((elapsed - 650) / 1000, 0), 1);
        const easedBoot = bootFactor * bootFactor * (3 - 2 * bootFactor);
        const speed = 0.00026 * easedBoot;
        phiRef.current = (phiRef.current + dt * speed) % (12 * 2 * Math.PI);
        setRotationPhi(phiRef.current);
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [hoveredStation, isPaused]);

  // Keyboard navigation on desktop
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPaused((p) => !p);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem.id]);

  // Swipe handling on mobile card
  const cardTouchStartRef = useRef(0);
  const handleCardTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      cardTouchStartRef.current = e.touches[0].clientX;
    }
  };
  const handleCardTouchEnd = (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      const diff = e.changedTouches[0].clientX - cardTouchStartRef.current;
      if (diff < -35) {
        handleNext();
      } else if (diff > 35) {
        handlePrev();
      }
    }
  };

  return (
    <main className="min-h-screen w-full bg-white flex flex-col relative select-none">
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

      {/* Embedded Component Styles from styles.css */}
      <style>{`
        @keyframes pedestalRotateCW {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -1000; }
        }
        @keyframes pedestalRotateCCW {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 1000; }
        }
        @keyframes pedestalPulseGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.95; }
        }
        @keyframes frontSweepWave {
          0% { stroke-dashoffset: 460; opacity: 0.2; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: -460; opacity: 0.2; }
        }
        @keyframes serverLedBlink {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; }
        }
        .anim-pedestal-cw-fast { animation: pedestalRotateCW 8s linear infinite; }
        .anim-pedestal-cw-normal { animation: pedestalRotateCW 12s linear infinite; }
        .anim-pedestal-cw-slow { animation: pedestalRotateCW 18s linear infinite; }
        .anim-pedestal-ccw-normal { animation: pedestalRotateCCW 10s linear infinite; }
        .anim-pedestal-ccw-slow { animation: pedestalRotateCCW 16s linear infinite; }
        .anim-pedestal-pulse { animation: pedestalPulseGlow 3s ease-in-out infinite; }
        .anim-front-sweep { animation: frontSweepWave 3.5s ease-in-out infinite; }
        .anim-led-blink { animation: serverLedBlink 1.8s ease-in-out infinite; }
      `}</style>

      {/* Header */}
      <header className="pt-2 pb-1 px-4 text-center max-w-6xl mx-auto shrink-0 z-20 anim-boot-header">
        <h1 className="text-xl md:text-2xl font-extrabold text-[#0c2340] tracking-tight">
          {headerInfo?.title}
        </h1>
        <p className="text-xs text-[#466184] max-w-4xl mx-auto mt-0.5 leading-relaxed font-normal">
          {headerInfo?.description}
        </p>
      </header>

      {/* 3D Carousel Stage */}
      <figure
        className={`m-0 w-full min-h-0 overflow-hidden relative select-none ${isMobile ? 'h-[40dvh] shrink-0' : 'flex-1'
          }`}
        onPointerDown={isMobile ? handlePointerDown : undefined}
        onPointerMove={isMobile ? handlePointerMove : undefined}
        onPointerUp={isMobile ? handlePointerUp : undefined}
        onPointerCancel={isMobile ? handlePointerUp : undefined}
      >
        <Artwork
          rotationPhi={rotationPhi}
          onStationClick={(cardIdx) => handleJumpToId(cardIdx + 1)}
          hoveredStation={hoveredStation}
          setHoveredStation={setHoveredStation}
          isMobile={isMobile}
          isBooted={isBooted}
        />
        <figcaption className="sr-only">
          <ol>
            {capabilities.map((c) => (
              <li key={c.id}>
                <h2>{c.number}. {c.title}</h2>
                <p>{c.description}</p>
              </li>
            ))}
          </ol>
        </figcaption>
      </figure>

      {/* Mobile Dedicated Capability Card */}
      {isMobile && (() => {
        const IconComponent = activeTheme.icon;
        return (
          <div
            className="flex-1 min-h-0 flex flex-col justify-between p-3.5 sm:p-4 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/80 rounded-t-3xl border-t border-slate-200/80 select-none transition-all duration-300 anim-boot-mobile-card"
            style={{
              boxShadow: `0 -10px 30px -5px ${activePalette[1]}20`,
            }}
            onTouchStart={handleCardTouchStart}
            onTouchEnd={handleCardTouchEnd}
          >
            {/* Top Drag Handle */}
            <div className="w-10 h-1 rounded-full bg-slate-300/80 mx-auto -mt-1 mb-2" />

            {/* Header: 3D Isometric Icon & Heading on its Right, Play/Pause on Far Right */}
            <div className="flex items-center justify-between gap-3 shrink-0 mb-2">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                {/* 3D Isometric Icon Squircle Badge */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-white transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${activePalette[0]}60, #ffffff)`,
                    boxShadow: `0 4px 12px ${activePalette[1]}25`,
                  }}
                >
                  <svg viewBox="-30 -30 60 60" className="w-9 h-9">
                    <Definitions />
                    {IconComponent && <IconComponent color={activeTheme.color} />}
                  </svg>
                </div>

                {/* Heading placed directly on the right side of the icon */}
                <h2
                  className="text-sm sm:text-base font-extrabold tracking-tight leading-snug transition-colors duration-300 line-clamp-2"
                  style={{ color: activeTextTheme.title }}
                >
                  {activeItem.title}
                </h2>
              </div>

              {/* Play / Pause Toggle Button */}
              <button
                onClick={() => setIsPaused((p) => !p)}
                className="w-8 h-8 rounded-xl bg-white border border-slate-200/90 text-slate-700 flex items-center justify-center transition active:scale-90 shadow-xs shrink-0"
                style={{
                  boxShadow: isPaused ? `0 0 0 2px ${activePalette[1]}50` : undefined,
                }}
                title={isPaused ? "Play" : "Pause"}
                aria-label={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? <PlayIcon className="w-3.5 h-3.5" /> : <PauseIcon className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Description Content Box Cleanly Aligned Underneath */}
            <div
              className="my-auto py-3 px-3.5 rounded-2xl border transition-all duration-300 overflow-y-auto max-h-[28dvh] shadow-xs"
              style={{
                background: 'linear-gradient(180deg, #ffffff, #fcfdfe)',
                borderColor: `${activePalette[1]}20`,
              }}
            >
              <p
                className="text-xs sm:text-[13.5px] font-medium leading-relaxed transition-colors duration-300"
                style={{ color: activeTextTheme.body }}
              >
                {activeItem.description}
              </p>
            </div>

            {/* Micro Progress Bar */}
            <div className="w-full bg-slate-100/90 h-1 rounded-full overflow-hidden my-1">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${(activeItem.id / 60) * 100}%`,
                  background: `linear-gradient(90deg, ${activePalette[0]}, ${activePalette[1]})`,
                }}
              />
            </div>

            {/* Navigation Footer Controls */}
            <div className="pt-0.5 flex items-center justify-between gap-2.5 shrink-0">
              <button
                onClick={handlePrev}
                className="flex-1 py-2 px-3 rounded-xl bg-white border border-slate-200/90 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition active:scale-95 shadow-xs"
              >
                <ChevronLeftIcon className="w-3.5 h-3.5" /> Previous
              </button>

              <span
                className="text-[11px] font-bold px-2 py-1 rounded-lg shrink-0 tracking-wider transition-colors duration-300"
                style={{
                  color: activeTextTheme.title,
                  backgroundColor: `${activePalette[1]}15`,
                }}
              >
                {activeItem.id} / 60
              </span>

              <button
                onClick={handleNext}
                className="flex-1 py-2 px-3 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-1.5 transition active:scale-95 shadow-md hover:brightness-105"
                style={{
                  background: `linear-gradient(135deg, ${activePalette[1]}, ${activePalette[2]})`,
                  boxShadow: `0 3px 10px ${activePalette[1]}40`,
                }}
              >
                Next <ChevronRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        );
      })()}
    </main>
  );
}
