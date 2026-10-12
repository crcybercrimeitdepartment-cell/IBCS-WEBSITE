import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import { productEcosystemData } from './OurProductEcosystemPageData';

/* =========================================================================
   1. 3D SPECIMEN GRAPHIC ICONS (High-fidelity SVGs for the 12 products)
   ========================================================================= */

function CyberShieldSpecimen() {
  return (
    <svg width="128" height="128" viewBox="0 0 128 128" className="filter drop-shadow-[0_16px_14px_rgba(20,25,20,0.48)] drop-shadow-[0_4px_6px_rgba(20,25,20,0.3)] transition-transform duration-300">
      <defs>
        <radialGradient id="shieldGlow" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="45%" stopColor="#059669" />
          <stop offset="100%" stopColor="#064e3b" />
        </radialGradient>
        <linearGradient id="shieldRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="35%" stopColor="#d97706" />
          <stop offset="70%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>
      <path d="M64 12 L106 28 C106 72 64 114 64 114 C64 114 22 72 22 28 Z" fill="url(#shieldRim)" stroke="#451a03" strokeWidth="1.5" />
      <path d="M64 18 L100 32 C100 68 64 106 64 106 C64 106 28 68 28 32 Z" fill="url(#shieldGlow)" stroke="#065f46" strokeWidth="1" />
      <path d="M34 35 C42 33 54 31 64 31 C74 31 86 33 94 35 C88 52 76 68 64 78 C52 68 40 52 34 35 Z" fill="white" fillOpacity="0.22" />
      <circle cx="64" cy="54" r="14" fill="#fef3c7" stroke="#b45309" strokeWidth="2" />
      <circle cx="64" cy="54" r="6" fill="#0f172a" />
      <polygon points="61,56 67,56 69,72 59,72" fill="#0f172a" />
      <circle cx="44" cy="48" r="3" fill="#a7f3d0" />
      <line x1="47" y1="48" x2="54" y2="52" stroke="#a7f3d0" strokeWidth="2" strokeLinecap="round" />
      <circle cx="84" cy="48" r="3" fill="#a7f3d0" />
      <line x1="81" y1="48" x2="74" y2="52" stroke="#a7f3d0" strokeWidth="2" strokeLinecap="round" />
      <circle cx="64" cy="88" r="3.5" fill="#fef08a" />
      <line x1="64" y1="76" x2="64" y2="84" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function AIBrainSpecimen() {
  return (
    <svg width="128" height="128" viewBox="0 0 128 128" className="filter drop-shadow-[0_16px_14px_rgba(20,20,30,0.5)] drop-shadow-[0_4px_6px_rgba(20,20,30,0.3)] transition-transform duration-300">
      <defs>
        <radialGradient id="aiOrb" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="40%" stopColor="#a855f7" />
          <stop offset="80%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#312e81" />
        </radialGradient>
        <linearGradient id="aiRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="50%" stopColor="#e879f9" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <ellipse cx="64" cy="64" rx="54" ry="18" fill="none" stroke="url(#aiRing)" strokeWidth="3" transform="rotate(-25 64 64)" strokeDasharray="140 100" opacity="0.75" />
      <circle cx="64" cy="64" r="38" fill="url(#aiOrb)" stroke="#e9d5ff" strokeWidth="1.5" />
      <ellipse cx="52" cy="46" rx="14" ry="8" fill="white" fillOpacity="0.45" transform="rotate(-25 52 46)" />
      <g stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" opacity="0.9">
        <line x1="48" y1="56" x2="64" y2="50" />
        <line x1="64" y1="50" x2="78" y2="58" />
        <line x1="48" y1="56" x2="52" y2="72" />
        <line x1="64" y1="50" x2="64" y2="68" />
        <line x1="78" y1="58" x2="74" y2="74" />
        <line x1="52" y1="72" x2="64" y2="68" />
        <line x1="64" y1="68" x2="74" y2="74" />
        <line x1="64" y1="68" x2="64" y2="84" />
      </g>
      <circle cx="48" cy="56" r="3.5" fill="#fef08a" />
      <circle cx="64" cy="50" r="4.5" fill="#ffffff" />
      <circle cx="78" cy="58" r="3.5" fill="#fef08a" />
      <circle cx="52" cy="72" r="3.5" fill="#67e8f9" />
      <circle cx="64" cy="68" r="5" fill="#fbcfe8" />
      <circle cx="74" cy="74" r="3.5" fill="#67e8f9" />
      <circle cx="64" cy="84" r="3" fill="#a7f3d0" />
      <ellipse cx="64" cy="64" rx="54" ry="18" fill="none" stroke="url(#aiRing)" strokeWidth="3.5" transform="rotate(-25 64 64)" strokeDasharray="100 140" strokeDashoffset="110" />
    </svg>
  );
}

function EnterpriseTowerSpecimen() {
  return (
    <svg width="128" height="128" viewBox="0 0 128 128" className="filter drop-shadow-[0_16px_14px_rgba(20,20,30,0.5)] drop-shadow-[0_4px_6px_rgba(20,20,30,0.3)] transition-transform duration-300">
      <defs>
        <linearGradient id="entTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="entLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <linearGradient id="entRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
      </defs>
      <polygon points="64,96 102,76 64,58 26,76" fill="#1e1b4b" />
      <polygon points="26,76 64,96 64,106 26,86" fill="#0f172a" />
      <polygon points="64,96 102,76 102,86 64,106" fill="#1e293b" />
      <polygon points="64,30 96,48 64,66 32,48" fill="url(#entTop)" stroke="#c7d2fe" strokeWidth="1" />
      <polygon points="32,48 64,66 64,98 32,80" fill="url(#entLeft)" stroke="#312e81" strokeWidth="0.8" />
      <polygon points="64,66 96,48 96,80 64,98" fill="url(#entRight)" stroke="#3730a3" strokeWidth="0.8" />
      <polygon points="38,55 48,60 48,68 38,63" fill="#67e8f9" opacity="0.85" />
      <polygon points="52,62 60,66 60,74 52,70" fill="#67e8f9" opacity="0.85" />
      <polygon points="38,69 48,74 48,82 38,77" fill="#38bdf8" opacity="0.85" />
      <polygon points="52,76 60,80 60,88 52,84" fill="#38bdf8" opacity="0.85" />
      <polygon points="68,66 76,62 76,70 68,74" fill="#a5b4fc" opacity="0.85" />
      <polygon points="80,60 90,55 90,63 80,68" fill="#a5b4fc" opacity="0.85" />
      <polygon points="68,80 76,76 76,84 68,88" fill="#c7d2fe" opacity="0.85" />
      <polygon points="80,74 90,69 90,77 80,82" fill="#c7d2fe" opacity="0.85" />
      <polygon points="64,14 76,22 64,30 52,22" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
    </svg>
  );
}

function GovernmentScalesSpecimen() {
  return (
    <svg width="128" height="128" viewBox="0 0 128 128" className="filter drop-shadow-[0_16px_14px_rgba(20,25,30,0.5)] drop-shadow-[0_4px_6px_rgba(20,25,30,0.3)] transition-transform duration-300">
      <defs>
        <linearGradient id="govGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="80%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>
      <rect x="61" y="24" width="6" height="74" fill="url(#govGold)" rx="2" />
      <circle cx="64" cy="22" r="8" fill="url(#govGold)" stroke="#78350f" strokeWidth="1" />
      <ellipse cx="64" cy="98" rx="28" ry="8" fill="url(#govGold)" stroke="#78350f" strokeWidth="1" />
      <rect x="44" y="94" width="40" height="6" fill="#d97706" rx="1" />
      <polygon points="20,38 108,38 106,44 22,44" fill="url(#govGold)" stroke="#78350f" strokeWidth="1" />
      <circle cx="64" cy="41" r="5" fill="#fef08a" stroke="#78350f" strokeWidth="1" />
      <line x1="26" y1="44" x2="18" y2="72" stroke="#d97706" strokeWidth="1.5" />
      <line x1="34" y1="44" x2="42" y2="72" stroke="#d97706" strokeWidth="1.5" />
      <path d="M14 72 C14 84 46 84 46 72 Z" fill="url(#govGold)" stroke="#78350f" strokeWidth="1" />
      <line x1="94" y1="44" x2="86" y2="72" stroke="#d97706" strokeWidth="1.5" />
      <line x1="102" y1="44" x2="110" y2="72" stroke="#d97706" strokeWidth="1.5" />
      <path d="M82 72 C82 84 114 84 114 72 Z" fill="url(#govGold)" stroke="#78350f" strokeWidth="1" />
      <circle cx="30" cy="74" r="3" fill="#38bdf8" />
      <circle cx="98" cy="74" r="3" fill="#38bdf8" />
    </svg>
  );
}

function InvestigationLensSpecimen() {
  return (
    <svg width="128" height="128" viewBox="0 0 128 128" className="filter drop-shadow-[0_16px_14px_rgba(30,15,20,0.5)] drop-shadow-[0_4px_6px_rgba(30,15,20,0.3)] transition-transform duration-300">
      <defs>
        <radialGradient id="lensGlass" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffe4e6" />
          <stop offset="30%" stopColor="#f43f5e" />
          <stop offset="70%" stopColor="#be123c" />
          <stop offset="100%" stopColor="#4c0519" />
        </radialGradient>
        <linearGradient id="lensHandle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>
      <line x1="78" y1="78" x2="114" y2="114" stroke="url(#lensHandle)" strokeWidth="14" strokeLinecap="round" />
      <line x1="78" y1="78" x2="114" y2="114" stroke="#451a03" strokeWidth="16" strokeLinecap="round" opacity="0.35" />
      <circle cx="112" cy="112" r="6" fill="#fef08a" stroke="#78350f" strokeWidth="1.5" />
      <circle cx="54" cy="54" r="42" fill="#78350f" />
      <circle cx="54" cy="54" r="40" fill="url(#lensHandle)" />
      <circle cx="54" cy="54" r="35" fill="#451a03" />
      <circle cx="54" cy="54" r="34" fill="url(#lensGlass)" />
      <path d="M30 34 C40 24 64 24 74 34 C64 36 40 46 30 64 C28 54 28 42 30 34 Z" fill="white" fillOpacity="0.4" />
      <circle cx="54" cy="54" r="18" fill="none" stroke="#fecdd3" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="54" y1="30" x2="54" y2="78" stroke="#ffffff" strokeWidth="1.5" />
      <line x1="30" y1="54" x2="78" y2="54" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="54" cy="54" r="4" fill="#fbbf24" />
    </svg>
  );
}

function DataCrystalSpecimen() {
  return (
    <svg width="128" height="128" viewBox="0 0 128 128" className="filter drop-shadow-[0_16px_14px_rgba(10,25,30,0.5)] drop-shadow-[0_4px_6px_rgba(10,25,30,0.3)] transition-transform duration-300">
      <defs>
        <linearGradient id="crystal1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a5f3fc" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id="crystal2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
        <linearGradient id="crystal3" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#155e75" />
        </linearGradient>
      </defs>
      <polygon points="64,12 98,40 64,116 30,40" fill="#083344" />
      <polygon points="64,12 98,40 64,54" fill="url(#crystal1)" stroke="#cffafe" strokeWidth="0.8" />
      <polygon points="64,12 30,40 64,54" fill="#67e8f9" stroke="#cffafe" strokeWidth="0.8" />
      <polygon points="30,40 64,54 64,116" fill="url(#crystal2)" stroke="#155e75" strokeWidth="0.8" />
      <polygon points="98,40 64,54 64,116" fill="url(#crystal3)" stroke="#155e75" strokeWidth="0.8" />
      <polygon points="64,12 70,36 64,48 58,36" fill="white" fillOpacity="0.6" />
      <rect x="42" y="70" width="7" height="18" fill="#fef08a" rx="1.5" stroke="#ca8a04" strokeWidth="1" />
      <rect x="53" y="62" width="7" height="26" fill="#38bdf8" rx="1.5" stroke="#0284c7" strokeWidth="1" />
      <rect x="64" y="52" width="7" height="36" fill="#34d399" rx="1.5" stroke="#059669" strokeWidth="1" />
      <rect x="75" y="44" width="7" height="44" fill="#f472b6" rx="1.5" stroke="#db2777" strokeWidth="1" />
      <circle cx="28" cy="30" r="2.5" fill="#fef08a" />
      <circle cx="102" cy="50" r="3" fill="#fef08a" />
    </svg>
  );
}

function CloudSaaSSpecimen() {
  return (
    <svg width="128" height="128" viewBox="0 0 128 128" className="filter drop-shadow-[0_16px_14px_rgba(30,20,10,0.45)] drop-shadow-[0_4px_6px_rgba(30,20,10,0.3)] transition-transform duration-300">
      <defs>
        <radialGradient id="cloudBody" cx="45%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#fef3c7" />
          <stop offset="75%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </radialGradient>
        <linearGradient id="cloudRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <ellipse cx="64" cy="68" rx="58" ry="16" fill="none" stroke="url(#cloudRing)" strokeWidth="3" transform="rotate(-15 64 68)" strokeDasharray="140 100" opacity="0.8" />
      <g fill="url(#cloudBody)" stroke="#d97706" strokeWidth="1.5">
        <circle cx="50" cy="62" r="22" />
        <circle cx="78" cy="62" r="20" />
        <circle cx="64" cy="46" r="22" />
        <circle cx="34" cy="72" r="14" />
        <circle cx="94" cy="72" r="14" />
        <rect x="34" y="66" width="60" height="20" rx="4" stroke="none" />
      </g>
      <ellipse cx="60" cy="40" rx="14" ry="7" fill="white" fillOpacity="0.6" />
      <ellipse cx="46" cy="56" rx="12" ry="6" fill="white" fillOpacity="0.45" />
      <ellipse cx="64" cy="68" rx="58" ry="16" fill="none" stroke="url(#cloudRing)" strokeWidth="3.5" transform="rotate(-15 64 68)" strokeDasharray="100 140" strokeDashoffset="115" />
      <circle cx="114" cy="54" r="5" fill="#fef08a" stroke="#d97706" strokeWidth="1.5" />
      <circle cx="16" cy="80" r="4" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
    </svg>
  );
}

function IdentityShieldSpecimen() {
  return (
    <svg width="128" height="128" viewBox="0 0 128 128" className="filter drop-shadow-[0_16px_14px_rgba(15,25,20,0.5)] drop-shadow-[0_4px_6px_rgba(15,25,20,0.3)] transition-transform duration-300">
      <defs>
        <radialGradient id="idShield" cx="45%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="45%" stopColor="#10b981" />
          <stop offset="85%" stopColor="#047857" />
          <stop offset="100%" stopColor="#064e3b" />
        </radialGradient>
      </defs>
      <polygon points="64,12 108,34 108,84 64,114 20,84 20,34" fill="#064e3b" stroke="#34d399" strokeWidth="2.5" />
      <polygon points="64,18 102,37 102,80 64,107 26,80 26,37" fill="url(#idShield)" stroke="#059669" strokeWidth="1.5" />
      <g fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" opacity="0.95">
        <path d="M64 42 A 8 8 0 0 1 64 58 A 6 6 0 0 1 64 70" />
        <path d="M56 46 A 14 14 0 0 1 74 48 A 14 14 0 0 1 72 74" />
        <path d="M48 52 A 22 22 0 0 1 80 50 A 20 20 0 0 1 78 82" />
        <path d="M42 62 A 28 28 0 0 1 84 56" />
        <path d="M50 82 A 20 20 0 0 1 44 72" />
      </g>
      <rect x="56" y="80" width="16" height="13" rx="2" fill="#fbbf24" stroke="#78350f" strokeWidth="1.5" />
      <path d="M59 80 V74 A 5 5 0 0 1 69 74 V80" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function AutomationGearsSpecimen() {
  return (
    <svg width="128" height="128" viewBox="0 0 128 128" className="filter drop-shadow-[0_16px_14px_rgba(30,20,10,0.5)] drop-shadow-[0_4px_6px_rgba(30,20,10,0.3)] transition-transform duration-300">
      <defs>
        <radialGradient id="gearGold" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="35%" stopColor="#f59e0b" />
          <stop offset="75%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#78350f" />
        </radialGradient>
        <radialGradient id="gearSilver" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="45%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#334155" />
        </radialGradient>
      </defs>
      <g transform="translate(42, 80)">
        <circle cx="0" cy="0" r="28" fill="url(#gearSilver)" stroke="#1e293b" strokeWidth="2" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <rect key={i} x="-5" y="-34" width="10" height="8" rx="2" fill="url(#gearSilver)" stroke="#1e293b" strokeWidth="1.5" transform={`rotate(${angle})`} />
        ))}
        <circle cx="0" cy="0" r="10" fill="#0f172a" />
      </g>
      <g transform="translate(76, 48)">
        <circle cx="0" cy="0" r="34" fill="url(#gearGold)" stroke="#451a03" strokeWidth="2.5" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <rect key={i} x="-6" y="-42" width="12" height="10" rx="2" fill="url(#gearGold)" stroke="#451a03" strokeWidth="1.8" transform={`rotate(${angle})`} />
        ))}
        <circle cx="0" cy="0" r="16" fill="#fef08a" stroke="#78350f" strokeWidth="2" />
        <circle cx="0" cy="0" r="8" fill="#451a03" />
      </g>
      <polygon points="56,60 62,54 60,64 68,62 58,74 60,66 52,68" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
    </svg>
  );
}

function APIMeshSpecimen() {
  return (
    <svg width="128" height="128" viewBox="0 0 128 128" className="filter drop-shadow-[0_16px_14px_rgba(15,20,35,0.5)] drop-shadow-[0_4px_6px_rgba(15,20,35,0.3)] transition-transform duration-300">
      <defs>
        <linearGradient id="apiBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <circle cx="64" cy="64" r="20" fill="url(#apiBlue)" stroke="#93c5fd" strokeWidth="2.5" />
      <circle cx="64" cy="64" r="9" fill="#ffffff" />
      <line x1="64" y1="44" x2="64" y2="24" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" />
      <circle cx="64" cy="22" r="12" fill="#3b82f6" stroke="#bfdbfe" strokeWidth="2" />
      <circle cx="64" cy="22" r="4.5" fill="#fef08a" />
      <line x1="64" y1="84" x2="64" y2="104" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" />
      <circle cx="64" cy="106" r="12" fill="#1d4ed8" stroke="#bfdbfe" strokeWidth="2" />
      <circle cx="64" cy="106" r="4.5" fill="#34d399" />
      <line x1="44" y1="64" x2="24" y2="64" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" />
      <circle cx="22" cy="64" r="12" fill="#0284c7" stroke="#bfdbfe" strokeWidth="2" />
      <circle cx="22" cy="64" r="4.5" fill="#f472b6" />
      <line x1="84" y1="64" x2="104" y2="64" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" />
      <circle cx="106" cy="64" r="12" fill="#4f46e5" stroke="#bfdbfe" strokeWidth="2" />
      <circle cx="106" cy="64" r="4.5" fill="#38bdf8" />
    </svg>
  );
}

function InstitutionalColumnsSpecimen() {
  return (
    <svg width="128" height="128" viewBox="0 0 128 128" className="filter drop-shadow-[0_16px_14px_rgba(25,15,30,0.5)] drop-shadow-[0_4px_6px_rgba(25,15,30,0.3)] transition-transform duration-300">
      <defs>
        <linearGradient id="instPurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e9d5ff" />
          <stop offset="40%" stopColor="#a855f7" />
          <stop offset="80%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
      </defs>
      <polygon points="64,20 108,44 20,44" fill="url(#instPurple)" stroke="#c084fc" strokeWidth="2" />
      <circle cx="64" cy="36" r="5" fill="#fef08a" stroke="#7c3aed" strokeWidth="1.5" />
      <rect x="24" y="44" width="80" height="8" rx="2" fill="#581c87" stroke="#a855f7" strokeWidth="1" />
      <rect x="29" y="52" width="10" height="42" fill="url(#instPurple)" rx="2" />
      <rect x="49" y="52" width="10" height="42" fill="url(#instPurple)" rx="2" />
      <rect x="69" y="52" width="10" height="42" fill="url(#instPurple)" rx="2" />
      <rect x="89" y="52" width="10" height="42" fill="url(#instPurple)" rx="2" />
      <rect x="20" y="94" width="88" height="7" rx="1.5" fill="#581c87" stroke="#c084fc" strokeWidth="1" />
      <rect x="14" y="101" width="100" height="8" rx="2" fill="#3b0764" stroke="#a855f7" strokeWidth="1.5" />
    </svg>
  );
}

function GlobalGlobeSpecimen() {
  return (
    <svg width="128" height="128" viewBox="0 0 128 128" className="filter drop-shadow-[0_16px_14px_rgba(20,20,35,0.5)] drop-shadow-[0_4px_6px_rgba(20,20,35,0.3)] transition-transform duration-300">
      <defs>
        <radialGradient id="globeOcean" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="45%" stopColor="#2563eb" />
          <stop offset="85%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>
      </defs>
      <circle cx="64" cy="64" r="42" fill="url(#globeOcean)" stroke="#93c5fd" strokeWidth="1.5" />
      <path d="M50 34 C58 32 68 36 68 44 C68 52 58 56 52 64 C48 70 42 74 38 68 C34 60 40 40 50 34 Z" fill="#34d399" opacity="0.9" />
      <path d="M78 46 C84 44 94 48 92 58 C90 68 82 72 78 78 C74 82 70 76 72 70 C74 62 72 52 78 46 Z" fill="#34d399" opacity="0.9" />
      <path d="M48 76 C54 74 60 78 58 86 C56 94 46 96 44 90 C42 84 44 78 48 76 Z" fill="#34d399" opacity="0.9" />
      <ellipse cx="50" cy="42" rx="16" ry="9" fill="white" fillOpacity="0.4" transform="rotate(-25 50 42)" />
      <ellipse cx="64" cy="64" rx="42" ry="18" fill="none" stroke="#bfdbfe" strokeWidth="1.2" strokeDasharray="5 3" opacity="0.6" />
      <ellipse cx="64" cy="64" rx="18" ry="42" fill="none" stroke="#bfdbfe" strokeWidth="1.2" strokeDasharray="5 3" opacity="0.6" />
      <ellipse cx="64" cy="64" rx="56" ry="22" fill="none" stroke="#fef08a" strokeWidth="2.5" transform="rotate(-30 64 64)" strokeDasharray="8 6" />
      <circle cx="106" cy="40" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
    </svg>
  );
}

function SpecimenGraphic({ type }) {
  switch (type) {
    case 'cyber-shield':
      return <CyberShieldSpecimen />;
    case 'ai-brain':
      return <AIBrainSpecimen />;
    case 'enterprise-tower':
      return <EnterpriseTowerSpecimen />;
    case 'government-scales':
      return <GovernmentScalesSpecimen />;
    case 'investigation-lens':
      return <InvestigationLensSpecimen />;
    case 'data-crystal':
      return <DataCrystalSpecimen />;
    case 'cloud-saas':
      return <CloudSaaSSpecimen />;
    case 'identity-shield':
      return <IdentityShieldSpecimen />;
    case 'automation-gears':
      return <AutomationGearsSpecimen />;
    case 'api-mesh':
      return <APIMeshSpecimen />;
    case 'institutional-columns':
      return <InstitutionalColumnsSpecimen />;
    case 'global-globe':
      return <GlobalGlobeSpecimen />;
    default:
      return <CyberShieldSpecimen />;
  }
}

/* =========================================================================
   2. INTERACTIVE PRODUCT CARD COMPONENT
   ========================================================================= */

function ProductCard({ item, index }) {
  const [isPinned, setIsPinned] = useState(false);
  const [isPeeking, setIsPeeking] = useState(false);

  useEffect(() => {
    // When the page reloads or opens for the first time,
    // trigger a smooth slide-open preview animation once across cards
    const startDelay = 650 + (index % 4) * 90 + Math.floor(index / 4) * 60;
    const peekDuration = 1400; // remains open for 1.4s then slides back closed

    const startTimer = setTimeout(() => {
      setIsPeeking(true);
    }, startDelay);

    const endTimer = setTimeout(() => {
      setIsPeeking(false);
    }, startDelay + peekDuration);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, [index]);

  const togglePin = () => {
    setIsPinned((prev) => !prev);
    setIsPeeking(false);
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={togglePin}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          togglePin();
        }
      }}
      className={`profile-card group ${isPinned ? 'is-pinned' : ''} ${isPeeking && !isPinned ? 'is-peeking' : ''}`}
      style={{
        animation: `cardEntrance 0.5s ease-out ${index * 0.04}s both`,
      }}
      aria-expanded={isPinned || isPeeking}
    >
      {/* 1. Underneath Content Panel (Revealed on Open) */}
      <div className="under-content">
        <h3
          className="text-[17px] sm:text-[18.5px] font-extrabold text-slate-900 leading-snug tracking-tight mb-2.5 group-hover:text-teal-800 transition-colors shrink-0"
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
          title={item.title}
        >
          {item.title}
        </h3>

        <div className="flex-1 min-w-0 overflow-y-auto pr-2 custom-card-scroll">
          <p
            className="text-[11.5px] sm:text-[12.2px] text-slate-600 leading-[1.62] w-full"
            style={{
              textAlign: 'justify',
              textJustify: 'inter-word',
              hyphens: 'none',
              WebkitHyphens: 'none',
              wordBreak: 'normal',
              overflowWrap: 'normal',
            }}
          >
            {item.description}
          </p>
        </div>
      </div>

      {/* 2. Colorful Sage Gradient Cover (Slides Left on Open) */}
      <div className="sage-cover">
        {/* Top: Level Pill */}
        <div className="bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/25 shadow-xs shrink-0 select-none">
          <span className="text-white text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase leading-none block whitespace-nowrap drop-shadow-xs font-mono">
            {item.level || `LEVEL ${item.number}`}
          </span>
        </div>

        {/* Center: Circular Frame with 3D Icon & 360-degree Orbiting Ball */}
        <div className="relative my-auto flex items-center justify-center select-none">
          <div className="icon-badge-box w-[84px] h-[84px] sm:w-[92px] sm:h-[92px] rounded-full bg-[#A3CBBB] border-2 border-white/60 ring-4 ring-white/20 shadow-md flex items-center justify-center p-2.5">
            <div className="w-full h-full flex items-center justify-center filter drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]">
              <SpecimenGraphic type={item.specimen || 'cyber-shield'} />
            </div>
          </div>

          {/* Orbiting Satellite Ball - Revolves 360 degrees continuously */}
          <div className="icon-badge-box absolute inset-0 pointer-events-none">
            <div className="w-full h-full animate-orbit relative">
              <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full shadow-[0_0_8px_rgba(52,211,153,0.9)] ring-2 ring-emerald-300/40" />
            </div>
          </div>
        </div>

        {/* Bottom: Heading (Visible when closed) */}
        <div className="cover-title">
          <h3
            className="text-white text-[16.5px] sm:text-[18px] font-extrabold tracking-tight leading-snug drop-shadow-md line-clamp-2"
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
          >
            {item.title}
          </h3>
        </div>
      </div>
    </article>
  );
}

/* =========================================================================
   3. MAIN SECTION COMPONENT (Unified single-file export)
   ========================================================================= */

export default function OurProductEcosystemPage({ onClose }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const handleBack = () => {
    if (onClose) {
      onClose();
    } else {
      window.location.hash = '#our-product-ecosystem';
    }
  };

  const handleHome = () => {
    if (onClose) {
      onClose();
    }
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="product-ecosystem-section"
      className="w-full bg-white pt-2 sm:pt-4 md:pt-5 pb-14 sm:pb-20 px-3 sm:px-6 lg:px-8 max-w-[1640px] 2xl:max-w-[1760px] mx-auto overflow-visible"
      aria-labelledby="main-heading"
    >
      {/* Top Header Navigation buttons for standalone page view */}
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-2 sm:px-6 lg:px-8 flex items-center justify-start gap-3">
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

      <style>{`
        #product-ecosystem-section {
          background-color: #ffffff;
        }
        /* 4 Cards Per Row Grid on Desktop */
        .profile-grid {
          display: grid;
          width: 100%;
        }
        @media (min-width: 1200px) {
          .profile-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
        }
        @media (min-width: 640px) and (max-width: 1199px) {
          .profile-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 639px) {
          .profile-grid {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }
        }

        /* Profile Card - Native 60fps/120fps CSS Animation without React lag */
        .profile-card {
          position: relative;
          width: 100%;
          height: 285px;
          background-color: #ffffff;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          user-select: none;
          contain: paint;
          transform: translateZ(0);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), 
                      box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.35s ease;
        }

        /* The Sage Sliding Cover Base */
        .profile-card .sage-cover {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to bottom, #88B29E, #75A38F, #639480);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 1.125rem 0.5rem;
          z-index: 20;
          overflow: hidden;
          will-change: width, box-shadow;
          transform: translateZ(0);
          backface-visibility: hidden;
          transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Cover Title Base */
        .profile-card .cover-title {
          width: 100%;
          text-align: center;
          padding: 0 0.5rem;
          flex-shrink: 0;
          user-select: none;
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.2s ease-out, transform 0.2s ease-out;
        }

        /* Icon Badge Scale Base */
        .profile-card .icon-badge-box {
          transform: scale(1);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        /* Underneath Content Panel Base */
        .profile-card .under-content {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 124px;
          background: linear-gradient(to bottom right, #ffffff, #FCFDFD, #F8FAFB);
          padding: 1rem 1.125rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          z-index: 10;
          overflow: hidden;
          opacity: 0;
          transform: translateZ(0);
          pointer-events: none;
          transition: opacity 0.3s ease-out;
        }

        @media (max-width: 639px) {
          .profile-card .under-content {
            left: 112px;
            padding: 0.875rem 0.875rem;
          }
        }

        /* Open / Active State via .is-pinned (User Click/Tap) and .is-peeking (Intro Page Load Preview) */
        .profile-card.is-pinned,
        .profile-card.is-peeking {
          transform: translateY(-4px) translateZ(0);
          box-shadow: 0 16px 32px -4px rgba(20, 60, 45, 0.15);
          border-color: rgba(45, 212, 191, 0.8);
        }

        .profile-card.is-pinned .sage-cover,
        .profile-card.is-peeking .sage-cover {
          width: 124px;
          box-shadow: 6px 0 20px rgba(20, 40, 30, 0.2);
        }

        @media (max-width: 639px) {
          .profile-card.is-pinned .sage-cover,
          .profile-card.is-peeking .sage-cover {
            width: 112px;
          }
        }

        .profile-card.is-pinned .cover-title,
        .profile-card.is-peeking .cover-title {
          opacity: 0;
          transform: translateY(-6px);
          pointer-events: none;
        }

        .profile-card.is-pinned .icon-badge-box,
        .profile-card.is-peeking .icon-badge-box {
          transform: scale(0.92);
        }

        .profile-card.is-pinned .under-content,
        .profile-card.is-peeking .under-content {
          opacity: 1;
          pointer-events: auto;
          transition-delay: 0.08s;
        }

        /* Hover State ONLY for Desktop / Pointer devices (Prevents sticky hover on touch screens) */
        @media (hover: hover) and (pointer: fine) {
          .profile-card:hover {
            transform: translateY(-4px) translateZ(0);
            box-shadow: 0 16px 32px -4px rgba(20, 60, 45, 0.15);
            border-color: rgba(45, 212, 191, 0.8);
          }

          .profile-card:hover .sage-cover {
            width: 124px;
            box-shadow: 6px 0 20px rgba(20, 40, 30, 0.2);
          }

          .profile-card:hover .cover-title {
            opacity: 0;
            transform: translateY(-6px);
            pointer-events: none;
          }

          .profile-card:hover .icon-badge-box {
            transform: scale(0.92);
          }

          .profile-card:hover .under-content {
            opacity: 1;
            pointer-events: auto;
            transition-delay: 0.08s;
          }
        }

        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes orbitAround {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-orbit {
          animation: orbitAround 4s linear infinite;
          transform-origin: center center;
          will-change: transform;
        }

        /* Visible Pill-Shaped Scrollbar with Arrows matching user reference */
        .custom-card-scroll {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent;
        }
        .custom-card-scroll::-webkit-scrollbar {
          width: 7px;
          display: block;
        }
        .custom-card-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-card-scroll::-webkit-scrollbar-thumb {
          background-color: #c7d2de;
          border-radius: 9999px;
          transition: background-color 0.2s ease;
        }
        .custom-card-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }
        .custom-card-scroll::-webkit-scrollbar-button:single-button:vertical:decrement {
          height: 10px;
          width: 7px;
          background-position: center bottom;
          background-repeat: no-repeat;
          background-size: 5.5px 4.5px;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%2394a3b8'><polygon points='50,15 90,85 10,85'/></svg>");
        }
        .custom-card-scroll::-webkit-scrollbar-button:single-button:vertical:increment {
          height: 10px;
          width: 7px;
          background-position: center top;
          background-repeat: no-repeat;
          background-size: 5.5px 4.5px;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%2394a3b8'><polygon points='50,85 90,15 10,15'/></svg>");
        }
      `}</style>

      {/* Header Container */}
      <div className="text-center max-w-4xl mx-auto mb-5 sm:mb-7">
        <h1
          id="main-heading"
          className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold text-[#081E52] tracking-tight mb-2.5 sm:mb-3.5 leading-tight uppercase"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          OUR PRODUCT ECOSYSTEM
        </h1>

        <div
          className="space-y-3.5 text-[14px] lg:text-[16px] leading-relaxed text-[#0FA4AF] font-normal px-2 max-w-3xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <p>
            IB Cyber Security Private Limited is focused on building, owning and commercialising a growing ecosystem of software products and digital platforms. Our product portfolio can span cybersecurity, Artificial Intelligence, enterprise technology, data, cloud, automation, digital identity and specialised industry applications.
          </p>

          <p>
            Each product is developed with a product-first approach covering research, architecture, engineering, testing, security, deployment and continuous improvement. Our objective is to create reusable, scalable and commercially viable technology products that can evolve with changing user, industry and market requirements.
          </p>
        </div>
      </div>

      {/* Cards Grid: Exactly 4 cards in a row on desktop */}
      <div className="profile-grid gap-4 sm:gap-5 lg:gap-5 xl:gap-6 items-stretch max-w-[1640px] 2xl:max-w-[1760px] mx-auto pt-2 pb-16 sm:pb-24">
        {productEcosystemData.map((item, idx) => (
          <ProductCard key={item.id} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
}
