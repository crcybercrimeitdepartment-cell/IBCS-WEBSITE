import React, { useState, useRef, useEffect } from 'react';
import { RotateCcw, Home } from 'lucide-react';
import { softwareArchitectureEngineeringData } from './SoftwareArchitectureProductEngineeringPageData.js';

/* =========================================================================
   1. 3D SPECIMEN GRAPHIC ICONS (Compact high-fidelity SVGs: 88x88)
   ========================================================================= */

function SoftwareArchitectureSpecimen() {
  return (
    <svg width="88" height="88" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_16px_rgba(14,116,144,0.45)] transition-transform duration-300">
      <defs>
        <linearGradient id="softTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="softLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>
        <linearGradient id="softRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#082f49" />
        </linearGradient>
      </defs>
      {/* Blueprint Grid Base */}
      <polygon points="64,98 108,74 64,52 20,74" fill="#0c4a6e" stroke="#0284c7" strokeWidth="1" strokeDasharray="4 3" opacity="0.7" />
      <line x1="42" y1="63" x2="86" y2="86" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />
      <line x1="86" y1="63" x2="42" y2="86" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />
      {/* 3D Isometric Core Architecture Block */}
      <polygon points="64,32 94,48 64,64 34,48" fill="url(#softTop)" stroke="#e0f2fe" strokeWidth="1.2" />
      <polygon points="34,48 64,64 64,94 34,78" fill="url(#softLeft)" stroke="#0c4a6e" strokeWidth="1" />
      <polygon points="64,64 94,48 94,78 64,94" fill="url(#softRight)" stroke="#0c4a6e" strokeWidth="1" />
      {/* Blueprint Corner Accents & Connecting Lines */}
      <circle cx="64" cy="32" r="3.5" fill="#ffffff" />
      <circle cx="94" cy="48" r="3" fill="#38bdf8" />
      <circle cx="34" cy="48" r="3" fill="#38bdf8" />
      <circle cx="64" cy="64" r="3.5" fill="#f0f9ff" />
      <line x1="64" y1="16" x2="64" y2="32" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
      <polygon points="64,12 68,20 60,20" fill="#38bdf8" />
      <rect x="42" y="55" width="10" height="6" fill="#7dd3fc" opacity="0.8" transform="skewY(26)" />
      <rect x="76" y="55" width="10" height="6" fill="#38bdf8" opacity="0.8" transform="skewY(-26)" />
    </svg>
  );
}

function SystemArchitectureSpecimen() {
  return (
    <svg width="88" height="88" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_16px_rgba(88,28,135,0.45)] transition-transform duration-300">
      <defs>
        <radialGradient id="sysOrb" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#f3e8ff" />
          <stop offset="30%" stopColor="#c084fc" />
          <stop offset="70%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#4c1d95" />
        </radialGradient>
        <linearGradient id="sysRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e879f9" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <ellipse cx="64" cy="64" rx="54" ry="18" fill="none" stroke="url(#sysRing)" strokeWidth="2.5" transform="rotate(-25 64 64)" strokeDasharray="120 80" opacity="0.85" />
      <ellipse cx="64" cy="64" rx="46" ry="32" fill="none" stroke="#a855f7" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.5" />
      <circle cx="64" cy="64" r="28" fill="url(#sysOrb)" stroke="#f3e8ff" strokeWidth="1.5" />
      <circle cx="64" cy="64" r="10" fill="#2e1065" stroke="#e9d5ff" strokeWidth="1.5" />
      <circle cx="64" cy="64" r="4" fill="#fef08a" />
      <line x1="64" y1="36" x2="64" y2="20" stroke="#c084fc" strokeWidth="2" strokeDasharray="3 2" />
      <circle cx="64" cy="18" r="7" fill="#c084fc" stroke="#f3e8ff" strokeWidth="1.5" />
      <circle cx="64" cy="18" r="2.5" fill="#ffffff" />
      <line x1="36" y1="64" x2="20" y2="64" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 2" />
      <circle cx="18" cy="64" r="7" fill="#6366f1" stroke="#f3e8ff" strokeWidth="1.5" />
      <circle cx="18" cy="64" r="2.5" fill="#ffffff" />
      <line x1="92" y1="64" x2="108" y2="64" stroke="#e879f9" strokeWidth="2" strokeDasharray="3 2" />
      <circle cx="110" cy="64" r="7" fill="#a855f7" stroke="#f3e8ff" strokeWidth="1.5" />
      <circle cx="110" cy="64" r="2.5" fill="#ffffff" />
      <line x1="64" y1="92" x2="64" y2="110" stroke="#a855f7" strokeWidth="2" strokeDasharray="3 2" />
      <circle cx="64" cy="110" r="7" fill="#7c3aed" stroke="#f3e8ff" strokeWidth="1.5" />
      <circle cx="64" cy="110" r="2.5" fill="#ffffff" />
      <ellipse cx="64" cy="64" rx="54" ry="18" fill="none" stroke="url(#sysRing)" strokeWidth="3" transform="rotate(-25 64 64)" strokeDasharray="80 120" strokeDashoffset="90" />
    </svg>
  );
}

function ApplicationArchitectureSpecimen() {
  return (
    <svg width="88" height="88" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_16px_rgba(180,83,9,0.45)] transition-transform duration-300">
      <defs>
        <linearGradient id="appGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="40%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <polygon points="64,80 102,96 64,112 26,96" fill="#78350f" stroke="#fbbf24" strokeWidth="1" />
      <polygon points="26,96 64,112 64,120 26,104" fill="#451a03" />
      <polygon points="64,112 102,96 102,104 64,120" fill="#290f02" />
      <polygon points="64,52 102,68 64,84 26,68" fill="url(#appGold)" stroke="#fef3c7" strokeWidth="1.2" />
      <polygon points="26,68 64,84 64,92 26,76" fill="#b45309" />
      <polygon points="64,84 102,68 102,76 64,92" fill="#78350f" />
      <polygon points="64,24 102,40 64,56 26,40" fill="#fde68a" stroke="#ffffff" strokeWidth="1.4" />
      <polygon points="26,40 64,56 64,64 26,48" fill="#d97706" />
      <polygon points="64,56 102,40 102,48 64,64" fill="#b45309" />
      <circle cx="64" cy="24" r="4" fill="#ffffff" />
      <circle cx="102" cy="40" r="3" fill="#fef08a" />
      <circle cx="26" cy="40" r="3" fill="#fef08a" />
      <circle cx="64" cy="56" r="3.5" fill="#f59e0b" />
      <line x1="64" y1="12" x2="64" y2="24" stroke="#fbbf24" strokeWidth="2" strokeDasharray="2 2" />
      <circle cx="64" cy="10" r="3" fill="#fbbf24" />
    </svg>
  );
}

function UIUXDesignSpecimen() {
  return (
    <svg width="88" height="88" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_16px_rgba(2,132,199,0.45)] transition-transform duration-300">
      <defs>
        <linearGradient id="uiGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      <rect x="22" y="24" width="84" height="66" rx="8" fill="#082f49" stroke="#38bdf8" strokeWidth="2" />
      <rect x="22" y="24" width="84" height="16" rx="8" fill="#0c4a6e" />
      <circle cx="32" cy="32" r="3" fill="#f43f5e" />
      <circle cx="42" cy="32" r="3" fill="#fbbf24" />
      <circle cx="52" cy="32" r="3" fill="#34d399" />
      <rect x="30" y="48" width="28" height="34" rx="4" fill="url(#uiGlass)" opacity="0.85" />
      <rect x="64" y="48" width="34" height="8" rx="2" fill="#7dd3fc" opacity="0.9" />
      <rect x="64" y="60" width="34" height="5" rx="1.5" fill="#38bdf8" opacity="0.6" />
      <rect x="64" y="68" width="24" height="5" rx="1.5" fill="#38bdf8" opacity="0.4" />
      <path d="M36 74 C50 50, 78 86, 92 62" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 2" />
      <circle cx="64" cy="68" r="3.5" fill="#ffffff" stroke="#f43f5e" strokeWidth="1.5" />
      <polygon points="78,74 94,84 87,88 92,99 87,101 82,90 74,94" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
    </svg>
  );
}

function DatabaseArchitectureSpecimen() {
  return (
    <svg width="88" height="88" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_16px_rgba(88,28,135,0.45)] transition-transform duration-300">
      <defs>
        <linearGradient id="dbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e9d5ff" />
          <stop offset="40%" stopColor="#c084fc" />
          <stop offset="80%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#581c87" />
        </linearGradient>
      </defs>
      <ellipse cx="64" cy="94" rx="38" ry="14" fill="#3b0764" />
      <path d="M26 84 V94 C26 102 102 102 102 94 V84 Z" fill="url(#dbGrad)" stroke="#581c87" strokeWidth="1.2" />
      <ellipse cx="64" cy="84" rx="38" ry="14" fill="#7e22ce" stroke="#e9d5ff" strokeWidth="1" />
      <path d="M26 62 V72 C26 80 102 80 102 72 V62 Z" fill="url(#dbGrad)" stroke="#581c87" strokeWidth="1.2" />
      <ellipse cx="64" cy="62" rx="38" ry="14" fill="#9333ea" stroke="#e9d5ff" strokeWidth="1" />
      <path d="M26 40 V50 C26 58 102 58 102 50 V40 Z" fill="url(#dbGrad)" stroke="#581c87" strokeWidth="1.2" />
      <ellipse cx="64" cy="40" rx="38" ry="14" fill="#a855f7" stroke="#f3e8ff" strokeWidth="1.4" />
      <circle cx="86" cy="40" r="3.5" fill="#34d399" />
      <circle cx="86" cy="62" r="3.5" fill="#38bdf8" />
      <circle cx="86" cy="84" r="3.5" fill="#fef08a" />
      <line x1="38" y1="44" x2="60" y2="44" stroke="#f3e8ff" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="66" x2="60" y2="66" stroke="#f3e8ff" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="88" x2="60" y2="88" stroke="#f3e8ff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function APIArchitectureSpecimen() {
  return (
    <svg width="88" height="88" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_16px_rgba(180,83,9,0.45)] transition-transform duration-300">
      <defs>
        <linearGradient id="apiHub" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="40%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <circle cx="64" cy="64" r="22" fill="url(#apiHub)" stroke="#ffffff" strokeWidth="2.5" />
      <circle cx="64" cy="64" r="10" fill="#78350f" />
      <circle cx="64" cy="64" r="4.5" fill="#ffffff" />
      <line x1="64" y1="42" x2="64" y2="24" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="64" cy="20" r="11" fill="#f59e0b" stroke="#fef3c7" strokeWidth="2" />
      <circle cx="64" cy="20" r="4" fill="#38bdf8" />
      <line x1="64" y1="86" x2="64" y2="104" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="64" cy="108" r="11" fill="#b45309" stroke="#fef3c7" strokeWidth="2" />
      <circle cx="64" cy="108" r="4" fill="#34d399" />
      <line x1="42" y1="64" x2="24" y2="64" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="20" cy="64" r="11" fill="#d97706" stroke="#fef3c7" strokeWidth="2" />
      <circle cx="20" cy="64" r="4" fill="#f43f5e" />
      <line x1="86" y1="64" x2="104" y2="64" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="108" cy="64" r="11" fill="#f59e0b" stroke="#fef3c7" strokeWidth="2" />
      <circle cx="108" cy="64" r="4" fill="#c084fc" />
    </svg>
  );
}

function SecureEngineeringSpecimen() {
  return (
    <svg width="88" height="88" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_16px_rgba(14,116,144,0.45)] transition-transform duration-300">
      <defs>
        <radialGradient id="secGlow" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="45%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </radialGradient>
        <linearGradient id="secRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="35%" stopColor="#38bdf8" />
          <stop offset="70%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      <path d="M64 12 L106 28 C106 72 64 114 64 114 C64 114 22 72 22 28 Z" fill="url(#secRim)" stroke="#082f49" strokeWidth="1.5" />
      <path d="M64 18 L100 32 C100 68 64 106 64 106 C64 106 28 68 28 32 Z" fill="url(#secGlow)" stroke="#075985" strokeWidth="1" />
      <path d="M34 35 C42 33 54 31 64 31 C74 31 86 33 94 35 C88 52 76 68 64 78 C52 68 40 52 34 35 Z" fill="white" fillOpacity="0.22" />
      <circle cx="64" cy="54" r="14" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
      <circle cx="64" cy="54" r="6" fill="#0f172a" />
      <polygon points="61,56 67,56 69,72 59,72" fill="#0f172a" />
      <circle cx="44" cy="48" r="3" fill="#bae6fd" />
      <circle cx="84" cy="48" r="3" fill="#bae6fd" />
      <circle cx="64" cy="88" r="3.5" fill="#e0f2fe" />
    </svg>
  );
}

function QualityEngineeringSpecimen() {
  return (
    <svg width="88" height="88" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_16px_rgba(88,28,135,0.45)] transition-transform duration-300">
      <defs>
        <linearGradient id="qaRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3e8ff" />
          <stop offset="50%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7e22ce" />
        </linearGradient>
      </defs>
      <polygon points="64,14 78,24 96,24 104,40 118,52 114,70 120,88 106,100 102,118 84,118 72,126 56,126 44,118 26,118 22,100 8,88 14,70 10,52 24,40 32,24 50,24" fill="#3b0764" stroke="#a855f7" strokeWidth="1.5" />
      <circle cx="64" cy="70" r="38" fill="url(#qaRing)" stroke="#f3e8ff" strokeWidth="2" />
      <circle cx="64" cy="70" r="30" fill="#2e1065" stroke="#a855f7" strokeWidth="1.5" />
      <path d="M50 70 L60 80 L78 58" fill="none" stroke="#34d399" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="64" cy="24" r="3" fill="#fef08a" />
      <circle cx="104" cy="64" r="3" fill="#fef08a" />
      <circle cx="24" cy="64" r="3" fill="#fef08a" />
    </svg>
  );
}

function PerformanceEngineeringSpecimen() {
  return (
    <svg width="88" height="88" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_16px_rgba(180,83,9,0.45)] transition-transform duration-300">
      <defs>
        <linearGradient id="speedArc" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="45%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <path d="M26 84 A 45 45 0 1 1 102 84" fill="none" stroke="#451a03" strokeWidth="10" strokeLinecap="round" />
      <path d="M26 84 A 45 45 0 1 1 102 84" fill="none" stroke="url(#speedArc)" strokeWidth="6" strokeLinecap="round" strokeDasharray="180 60" />
      <circle cx="34" cy="70" r="2.5" fill="#ffffff" />
      <circle cx="48" cy="46" r="2.5" fill="#ffffff" />
      <circle cx="64" cy="38" r="3" fill="#ffffff" />
      <circle cx="80" cy="46" r="2.5" fill="#fef08a" />
      <circle cx="94" cy="70" r="3" fill="#ef4444" />
      <circle cx="64" cy="76" r="12" fill="#78350f" stroke="#fbbf24" strokeWidth="2" />
      <polygon points="62,76 66,76 88,44 84,42" fill="#ef4444" />
      <circle cx="64" cy="76" r="5" fill="#ffffff" />
      <polygon points="64,96 70,88 66,88 72,78 62,86 66,86" fill="#fbbf24" stroke="#ffffff" strokeWidth="0.8" />
    </svg>
  );
}

function IntegrationEngineeringSpecimen() {
  return (
    <svg width="88" height="88" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_16px_rgba(14,116,144,0.45)] transition-transform duration-300">
      <defs>
        <radialGradient id="intGear1" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="40%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0369a1" />
        </radialGradient>
        <radialGradient id="intGear2" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#1e293b" />
        </radialGradient>
      </defs>
      <g transform="translate(44, 76)">
        <circle cx="0" cy="0" r="26" fill="url(#intGear2)" stroke="#0c4a6e" strokeWidth="2" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <rect key={i} x="-5" y="-32" width="10" height="7" rx="1.5" fill="url(#intGear2)" stroke="#0c4a6e" strokeWidth="1" transform={`rotate(${angle})`} />
        ))}
        <circle cx="0" cy="0" r="9" fill="#082f49" />
      </g>
      <g transform="translate(76, 48)">
        <circle cx="0" cy="0" r="32" fill="url(#intGear1)" stroke="#0284c7" strokeWidth="2.5" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <rect key={i} x="-5" y="-39" width="10" height="9" rx="2" fill="url(#intGear1)" stroke="#0284c7" strokeWidth="1.2" transform={`rotate(${angle})`} />
        ))}
        <circle cx="0" cy="0" r="14" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
        <circle cx="0" cy="0" r="7" fill="#0369a1" />
      </g>
      <circle cx="58" cy="62" r="3.5" fill="#fef08a" stroke="#ffffff" strokeWidth="1" />
    </svg>
  );
}

function ReliabilityEngineeringSpecimen() {
  return (
    <svg width="88" height="88" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_16px_rgba(88,28,135,0.45)] transition-transform duration-300">
      <defs>
        <radialGradient id="relCore" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fbcfe8" />
          <stop offset="40%" stopColor="#c084fc" />
          <stop offset="85%" stopColor="#7e22ce" />
          <stop offset="100%" stopColor="#3b0764" />
        </radialGradient>
      </defs>
      <circle cx="64" cy="64" r="44" fill="none" stroke="#7e22ce" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
      <ellipse cx="64" cy="64" rx="42" ry="16" fill="none" stroke="#c084fc" strokeWidth="2.5" transform="rotate(-30 64 64)" strokeDasharray="100 80" />
      <ellipse cx="64" cy="64" rx="42" ry="16" fill="none" stroke="#f472b6" strokeWidth="2.5" transform="rotate(30 64 64)" strokeDasharray="80 100" />
      <circle cx="64" cy="64" r="24" fill="url(#relCore)" stroke="#f3e8ff" strokeWidth="2" />
      <path d="M48 64 L56 64 L60 54 L64 74 L68 58 L72 64 L80 64" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="38" cy="46" r="3.5" fill="#34d399" />
      <circle cx="90" cy="46" r="3.5" fill="#38bdf8" />
      <circle cx="64" cy="20" r="3" fill="#fef08a" />
    </svg>
  );
}

function ContinuousEngineeringSpecimen() {
  return (
    <svg width="88" height="88" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_16px_rgba(180,83,9,0.45)] transition-transform duration-300">
      <defs>
        <linearGradient id="contLoop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="30%" stopColor="#fbbf24" />
          <stop offset="70%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>
      <path 
        d="M36 64 C36 48 50 48 64 64 C78 80 92 80 92 64 C92 48 78 48 64 64 C50 80 36 80 36 64 Z" 
        fill="none" 
        stroke="url(#contLoop)" 
        strokeWidth="9" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M36 64 C36 48 50 48 64 64 C78 80 92 80 92 64 C92 48 78 48 64 64 C50 80 36 80 36 64 Z" 
        fill="none" 
        stroke="#ffffff" 
        strokeWidth="2.5" 
        strokeDasharray="16 12" 
        opacity="0.9" 
      />
      <circle cx="36" cy="64" r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="64" cy="64" r="5.5" fill="#fef08a" stroke="#78350f" strokeWidth="1.5" />
      <circle cx="92" cy="64" r="5" fill="#34d399" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="78" cy="74" r="3.5" fill="#f59e0b" />
      <circle cx="50" cy="54" r="3.5" fill="#fbbf24" />
    </svg>
  );
}

function SpecimenGraphic({ type }) {
  switch (type) {
    case 'software-architecture':
      return <SoftwareArchitectureSpecimen />;
    case 'system-architecture':
      return <SystemArchitectureSpecimen />;
    case 'application-architecture':
      return <ApplicationArchitectureSpecimen />;
    case 'ui-ux-design':
      return <UIUXDesignSpecimen />;
    case 'database-architecture':
      return <DatabaseArchitectureSpecimen />;
    case 'api-architecture':
      return <APIArchitectureSpecimen />;
    case 'secure-engineering':
    case 'cyber-shield':
      return <SecureEngineeringSpecimen />;
    case 'quality-engineering':
      return <QualityEngineeringSpecimen />;
    case 'performance-engineering':
      return <PerformanceEngineeringSpecimen />;
    case 'integration-engineering':
      return <IntegrationEngineeringSpecimen />;
    case 'reliability-engineering':
      return <ReliabilityEngineeringSpecimen />;
    case 'continuous-engineering':
      return <ContinuousEngineeringSpecimen />;
    default:
      return <SoftwareArchitectureSpecimen />;
  }
}

function CrosshairTargetBadge({ color = 'text-white/90' }) {
  return (
    <svg 
      width="26" 
      height="26" 
      viewBox="0 0 34 34" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${color} drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-transform duration-300 group-hover:rotate-45`}
    >
      <circle cx="17" cy="17" r="10.8" stroke="currentColor" strokeWidth="1.35" opacity="0.9" />
      <circle cx="17" cy="17" r="5.2" stroke="currentColor" strokeWidth="1.3" opacity="0.85" />
      <circle cx="17" cy="17" r="1.4" fill="currentColor" />
      <line x1="17" y1="2" x2="17" y2="8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="17" y1="26" x2="17" y2="32" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="2" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="26" y1="17" x2="32" y2="17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const TIER_STYLES = {
  Standard: {
    name: 'Standard',
    edgeColor: '#2563eb',
    edgeGlow: 'rgba(37, 99, 235, 0.75)',
    auroraGradient: 'linear-gradient(180deg, rgba(125, 211, 252, 0.95) 0%, rgba(56, 189, 248, 0.85) 30%, rgba(37, 99, 235, 0.65) 70%, rgba(29, 78, 216, 0.3) 100%)',
    auroraShadow: 'rgba(56, 189, 248, 0.55)',
    accentText: '#38bdf8',
    pillBorder: 'border-sky-500/40',
    pillBg: 'bg-sky-500/10 text-sky-300',
    btnGradient: 'from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400',
  },
  Premium: {
    name: 'Premium',
    edgeColor: '#ea580c',
    edgeGlow: 'rgba(234, 88, 12, 0.75)',
    auroraGradient: 'linear-gradient(180deg, rgba(254, 240, 138, 0.95) 0%, rgba(251, 146, 60, 0.85) 30%, rgba(234, 88, 12, 0.65) 70%, rgba(194, 65, 12, 0.3) 100%)',
    auroraShadow: 'rgba(251, 146, 60, 0.55)',
    accentText: '#fb923c',
    pillBorder: 'border-amber-500/40',
    pillBg: 'bg-amber-500/10 text-amber-300',
    btnGradient: 'from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400',
  },
  Ultimate: {
    name: 'Ultimate',
    edgeColor: '#9333ea',
    edgeGlow: 'rgba(147, 51, 234, 0.75)',
    auroraGradient: 'linear-gradient(180deg, rgba(233, 213, 255, 0.95) 0%, rgba(192, 132, 252, 0.85) 30%, rgba(147, 51, 234, 0.65) 70%, rgba(107, 33, 168, 0.3) 100%)',
    auroraShadow: 'rgba(192, 132, 252, 0.55)',
    accentText: '#c084fc',
    pillBorder: 'border-purple-500/40',
    pillBg: 'bg-purple-500/10 text-purple-300',
    btnGradient: 'from-purple-600 to-fuchsia-500 hover:from-purple-500 hover:to-fuchsia-400',
  },
};

const introExecutedCards = new Set();

function ThickGlassProductCard({ item, index }) {
  const [isPinned, setIsPinned] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [justUnpinned, setJustUnpinned] = useState(false);
  const [isIntroFlipped, setIsIntroFlipped] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });

  const tier = item.tier || 'Standard';
  const tierConfig = TIER_STYLES[tier] || TIER_STYLES.Standard;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (introExecutedCards.has(item.id)) return;
    introExecutedCards.add(item.id);

    const openTimer = setTimeout(() => {
      setIsIntroFlipped(true);
    }, 350 + index * 75);

    const closeTimer = setTimeout(() => {
      setIsIntroFlipped(false);
    }, 350 + index * 75 + 750 + 2000);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, [index, item.id]);

  const isFlipped = isPinned || (isHovered && !justUnpinned) || isIntroFlipped;

  const handleMouseMove = (e) => {
    if (!cardRef.current || isFlipped) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setJustUnpinned(false);
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  const handleCardClick = (e) => {
    if (e) e.stopPropagation();
    setIsIntroFlipped(false);

    if (isPinned) {
      setIsPinned(false);
      setIsHovered(false);
      setJustUnpinned(true);
    } else {
      setIsPinned(true);
      setJustUnpinned(false);
    }
  };

  const isFromLeft = index % 2 === 0;
  const mobileEntranceClass = hasEntered 
    ? 'mobile-card-in' 
    : (isFromLeft ? 'mobile-card-from-left' : 'mobile-card-from-right');

  return (
    <div 
      ref={containerRef}
      className={`relative select-none w-full max-w-[275px] sm:max-w-[290px] mx-auto py-1 ${mobileEntranceClass}`}
      style={{ perspective: '1200px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="absolute inset-0 translate-x-2.5 sm:translate-x-3 translate-y-1 rounded-[22px] sm:rounded-[24px] pointer-events-none transition-all duration-300"
        style={{
          backgroundColor: tierConfig.edgeColor,
          boxShadow: `0 0 20px ${tierConfig.edgeGlow}, 3px 0 12px ${tierConfig.edgeColor}`,
          zIndex: 1,
          opacity: 0.95,
        }}
      />

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        aria-label={`${item.title} Card. ${isPinned ? 'Card is pinned open. Click to close.' : 'Hover to preview, click to pin open.'}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick(e);
          }
        }}
        className={`relative w-full h-[315px] sm:h-[325px] rounded-[22px] sm:rounded-[24px] cursor-pointer transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
        style={{
          transform: isFlipped 
            ? 'rotateY(180deg)' 
            : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`,
          zIndex: isFlipped ? 20 : 10,
        }}
      >
        {/* FRONT FACE */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[22px] sm:rounded-[24px] overflow-hidden p-4 sm:p-5 flex flex-col justify-between [backface-visibility:hidden] border border-white/20"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.96) 40%, rgba(8, 13, 24, 0.98) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: `
              inset 0 1px 1.5px rgba(255, 255, 255, 0.35),
              inset 0 -1px 1px rgba(0, 0, 0, 0.6),
              0 18px 32px -10px rgba(0, 0, 0, 0.35)
            `,
          }}
        >
          <div 
            className="absolute top-0 bottom-0 right-[16px] w-[75px] pointer-events-none opacity-90 transition-opacity duration-300"
            style={{
              background: tierConfig.auroraGradient,
              filter: 'blur(22px)',
              mixBlendMode: 'screen',
            }}
          />

          <div 
            className="absolute top-0 bottom-0 right-[28px] w-[35px] pointer-events-none opacity-35"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.7) 100%)',
              filter: 'blur(12px)',
            }}
          />

          <div 
            className="absolute inset-0 pointer-events-none opacity-30 transition-opacity duration-200"
            style={{
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.2) 0%, transparent 60%)`,
            }}
          />

          <div className="relative z-20 flex items-center justify-between">
            <span className="text-white/50 text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
              #{item.number}
            </span>
            <CrosshairTargetBadge />
          </div>

          <div className="relative z-20 my-auto flex flex-col items-center justify-center text-center px-1.5 py-1 group">
            <div 
              className="absolute w-24 h-24 rounded-full filter blur-xl opacity-40 transition-transform duration-500 group-hover:scale-125 pointer-events-none"
              style={{ backgroundColor: tierConfig.edgeColor }}
            />
            
            <div className="relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 mb-2.5">
              <SpecimenGraphic type={item.specimen || 'software-architecture'} />
            </div>

            <div className="relative z-10 w-full max-w-[245px] mx-auto">
              <h3 
                className="text-white text-[16px] sm:text-[17.5px] font-semibold leading-[1.22] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] line-clamp-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                title={item.title}
              >
                {item.title}
              </h3>
              
              <p className="text-white/50 text-[9.5px] uppercase tracking-wider font-mono mt-1 line-clamp-1">
                {item.tag}
              </p>
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[22px] sm:rounded-[24px] overflow-hidden px-3.5 sm:px-4 pt-3.5 pb-3 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] border border-white/25"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 28, 48, 0.96) 0%, rgba(10, 16, 30, 0.98) 60%, rgba(6, 10, 20, 0.99) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: `
              inset 0 1px 1.5px rgba(255, 255, 255, 0.3),
              0 18px 32px -10px rgba(0, 0, 0, 0.45)
            `,
          }}
        >
          <div 
            className="absolute top-0 right-0 w-28 h-28 rounded-full filter blur-2xl opacity-30 pointer-events-none"
            style={{ backgroundColor: tierConfig.edgeColor }}
          />

          <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[10.5px] font-mono uppercase tracking-widest text-white/50">
                #{item.number}
              </span>
              {isPinned && (
                <span className="text-[8.5px] font-mono font-medium tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  PINNED
                </span>
              )}
            </div>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick(e);
              }}
              className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
              title={isPinned ? "Click to close / unpin card" : "Click to close"}
              aria-label="Close card"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="relative z-10 flex-1 overflow-y-auto mt-2.5 mb-1 space-y-2 custom-card-scroll">
            <h4 
              className="text-white text-[15px] sm:text-[16px] font-bold leading-tight tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {item.title}
            </h4>

            <p 
              className="text-[11.5px] sm:text-[12px] text-slate-200 leading-[1.6] font-normal"
              style={{
                textAlign: 'justify',
                textJustify: 'inter-word',
                WebkitHyphens: 'auto',
                hyphens: 'auto',
              }}
            >
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   5. MAIN PAGE COMPONENT WITH NAVIGATION & LIGHT THEME WRAPPER
   ========================================================================= */

export default function SoftwareArchitectureProductEngineeringPage({ onClose }) {
  useEffect(() => {
    document.title = "Software Architecture & Product Engineering | IB Cyber Security";
  }, []);

  const handleBack = () => {
    if (onClose) onClose();
    window.history.back();
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#EBF7F8] via-[#E7F3F5] to-[#DFEFF2]">
      <section 
        id="software-architecture-page"
        className="w-full text-slate-800 antialiased font-sans pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-24 px-3 sm:px-6 lg:px-8 max-w-[1400px] 2xl:max-w-[1500px] mx-auto overflow-x-hidden relative"
        aria-labelledby="main-heading"
      >
        {/* Top Header Navigation buttons for standalone page view */}
        <div className="mx-auto max-w-[1360px] pb-6 flex items-center justify-start gap-3">
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

        {/* Heading & Description */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 relative">
          <div 
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-36 rounded-full pointer-events-none opacity-30 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(15, 164, 175, 0.4) 0%, rgba(0, 49, 53, 0.05) 70%, transparent 100%)' }}
          />

          <h1
            id="main-heading"
            className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-[#081E52] tracking-tight mb-2.5 sm:mb-3.5 leading-tight uppercase relative z-10"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Software Architecture &amp; Product Engineering
          </h1>

          <div
            className="space-y-3.5 text-[14px] lg:text-[16px] leading-relaxed text-black font-normal px-2 max-w-3xl mx-auto relative z-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <p>
              We design software architectures that provide the technical foundation for scalable and maintainable software products. Architecture decisions cover application components, data systems, APIs, security, infrastructure and integrations.
            </p>

            <p>
              Our product engineering approach aims to create architectures that can evolve as products gain users, functionality and operational complexity while maintaining reliability, high availability and high performance.
            </p>
          </div>
        </div>

        {/* 3D THICK GLASS CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-6 xl:gap-7 items-stretch justify-items-center max-w-[1360px] 2xl:max-w-[1440px] mx-auto overflow-visible">
          {softwareArchitectureEngineeringData.map((item, index) => (
            <ThickGlassProductCard 
              key={item.id} 
              item={item} 
              index={index}
            />
          ))}
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

          .custom-card-scroll {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .custom-card-scroll::-webkit-scrollbar {
            display: none;
            width: 0;
            height: 0;
          }

          @media (max-width: 767px) {
            .mobile-card-from-left {
              transform: translateX(-75px);
              opacity: 0;
              transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.75s ease-out;
              will-change: transform, opacity;
            }
            .mobile-card-from-right {
              transform: translateX(75px);
              opacity: 0;
              transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.75s ease-out;
              will-change: transform, opacity;
            }
            .mobile-card-in {
              transform: translateX(0) !important;
              opacity: 1 !important;
              transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.75s ease-out;
              will-change: transform, opacity;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
