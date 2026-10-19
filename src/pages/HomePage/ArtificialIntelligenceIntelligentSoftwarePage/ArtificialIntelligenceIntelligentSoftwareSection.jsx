import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';
import { artificialIntelligenceData } from './ArtificialIntelligenceIntelligentSoftwareDataPage';

/* =========================================================================
   1. 3D SPECIMEN GRAPHIC ICONS
   ========================================================================= */

function AIBrainSpecimen() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_14px_rgba(0,0,0,0.45)]">
      <defs>
        <radialGradient id="aiOrbSec" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="40%" stopColor="#a855f7" />
          <stop offset="80%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#312e81" />
        </radialGradient>
        <linearGradient id="aiRingSec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="50%" stopColor="#e879f9" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <ellipse cx="64" cy="64" rx="54" ry="18" fill="none" stroke="url(#aiRingSec)" strokeWidth="3" transform="rotate(-25 64 64)" strokeDasharray="140 100" opacity="0.75" />
      <circle cx="64" cy="64" r="38" fill="url(#aiOrbSec)" stroke="#e9d5ff" strokeWidth="1.5" />
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
      <ellipse cx="64" cy="64" rx="54" ry="18" fill="none" stroke="url(#aiRingSec)" strokeWidth="3.5" transform="rotate(-25 64 64)" strokeDasharray="100 140" strokeDashoffset="110" />
    </svg>
  );
}

function MLNeuralSpecimen() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_14px_rgba(0,0,0,0.45)]">
      <defs>
        <radialGradient id="mlCoreSec" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#082f49" />
        </radialGradient>
        <linearGradient id="mlSynapseSec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <circle cx="64" cy="64" r="46" fill="#0f172a" stroke="#0284c7" strokeWidth="2" opacity="0.85" />
      <circle cx="64" cy="64" r="42" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
      <g stroke="url(#mlSynapseSec)" strokeWidth="1.8" opacity="0.75">
        <line x1="36" y1="44" x2="64" y2="34" />
        <line x1="36" y1="44" x2="64" y2="64" />
        <line x1="36" y1="64" x2="64" y2="34" />
        <line x1="36" y1="64" x2="64" y2="64" />
        <line x1="36" y1="64" x2="64" y2="94" />
        <line x1="36" y1="84" x2="64" y2="64" />
        <line x1="36" y1="84" x2="64" y2="94" />
        <line x1="64" y1="34" x2="92" y2="50" />
        <line x1="64" y1="64" x2="92" y2="50" />
        <line x1="64" y1="64" x2="92" y2="78" />
        <line x1="64" y1="94" x2="92" y2="78" />
      </g>
      <circle cx="36" cy="44" r="7" fill="url(#mlCoreSec)" stroke="#bae6fd" strokeWidth="1.5" />
      <circle cx="36" cy="64" r="7" fill="url(#mlCoreSec)" stroke="#bae6fd" strokeWidth="1.5" />
      <circle cx="36" cy="84" r="7" fill="url(#mlCoreSec)" stroke="#bae6fd" strokeWidth="1.5" />
      <circle cx="36" cy="44" r="2.5" fill="#ffffff" />
      <circle cx="36" cy="64" r="2.5" fill="#ffffff" />
      <circle cx="36" cy="84" r="2.5" fill="#ffffff" />
      <circle cx="64" cy="34" r="8" fill="#6366f1" stroke="#e0e7ff" strokeWidth="1.5" />
      <circle cx="64" cy="64" r="9.5" fill="#8b5cf6" stroke="#f5d0fe" strokeWidth="2" />
      <circle cx="64" cy="94" r="8" fill="#6366f1" stroke="#e0e7ff" strokeWidth="1.5" />
      <circle cx="64" cy="34" r="3" fill="#ffffff" />
      <circle cx="64" cy="64" r="4" fill="#fef08a" />
      <circle cx="64" cy="94" r="3" fill="#ffffff" />
      <circle cx="92" cy="50" r="8" fill="#10b981" stroke="#a7f3d0" strokeWidth="1.5" />
      <circle cx="92" cy="78" r="8" fill="#10b981" stroke="#a7f3d0" strokeWidth="1.5" />
      <circle cx="92" cy="50" r="3" fill="#ffffff" />
      <circle cx="92" cy="78" r="3" fill="#ffffff" />
    </svg>
  );
}

function GenAISpecimen() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_14px_rgba(0,0,0,0.45)]">
      <defs>
        <radialGradient id="genGlowSec" cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#fdf2f8" />
          <stop offset="35%" stopColor="#f472b6" />
          <stop offset="70%" stopColor="#db2777" />
          <stop offset="100%" stopColor="#500724" />
        </radialGradient>
        <linearGradient id="genRaySec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <polygon points="64,14 114,64 64,114 14,64" fill="#2e1065" stroke="url(#genRaySec)" strokeWidth="2" opacity="0.8" />
      <polygon points="64,24 104,64 64,104 24,64" fill="none" stroke="#f472b6" strokeWidth="1" strokeDasharray="6 4" opacity="0.6" />
      <path d="M64 26 C64 48 48 64 26 64 C48 64 64 80 64 102 C64 80 80 64 102 64 C80 64 64 48 64 26 Z" fill="url(#genGlowSec)" stroke="#fbcfe8" strokeWidth="1.5" />
      <circle cx="64" cy="64" r="8" fill="#ffffff" />
      <circle cx="64" cy="64" r="4" fill="#fef08a" />
      <path d="M38 34 C38 41 33 46 26 46 C33 46 38 51 38 58 C38 51 43 46 50 46 C43 46 38 41 38 34 Z" fill="#fef08a" opacity="0.9" />
      <path d="M92 74 C92 79 88 83 83 83 C88 83 92 87 92 92 C92 87 96 83 101 83 C96 83 92 79 92 74 Z" fill="#38bdf8" opacity="0.9" />
      <circle cx="96" cy="38" r="3" fill="#ffffff" />
      <circle cx="34" cy="94" r="3" fill="#a7f3d0" />
    </svg>
  );
}

function AutomationGearsSpecimen() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_14px_rgba(0,0,0,0.45)]">
      <defs>
        <radialGradient id="gearGoldSec" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="35%" stopColor="#f59e0b" />
          <stop offset="75%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#78350f" />
        </radialGradient>
        <radialGradient id="gearSilverSec" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="45%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#334155" />
        </radialGradient>
      </defs>
      <g transform="translate(42, 80)">
        <circle cx="0" cy="0" r="28" fill="url(#gearSilverSec)" stroke="#1e293b" strokeWidth="2" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <rect key={i} x="-5" y="-34" width="10" height="8" rx="2" fill="url(#gearSilverSec)" stroke="#1e293b" strokeWidth="1.5" transform={`rotate(${angle})`} />
        ))}
        <circle cx="0" cy="0" r="10" fill="#0f172a" />
      </g>
      <g transform="translate(76, 48)">
        <circle cx="0" cy="0" r="34" fill="url(#gearGoldSec)" stroke="#451a03" strokeWidth="2.5" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <rect key={i} x="-6" y="-42" width="12" height="10" rx="2" fill="url(#gearGoldSec)" stroke="#451a03" strokeWidth="1.8" transform={`rotate(${angle})`} />
        ))}
        <circle cx="0" cy="0" r="16" fill="#fef08a" stroke="#78350f" strokeWidth="2" />
        <circle cx="0" cy="0" r="8" fill="#451a03" />
      </g>
      <polygon points="56,60 62,54 60,64 68,62 58,74 60,66 52,68" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
    </svg>
  );
}

function InvestigationLensSpecimen() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_14px_rgba(0,0,0,0.45)]">
      <defs>
        <radialGradient id="lensGlassSec" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffe4e6" />
          <stop offset="30%" stopColor="#f43f5e" />
          <stop offset="70%" stopColor="#be123c" />
          <stop offset="100%" stopColor="#4c0519" />
        </radialGradient>
        <linearGradient id="lensHandleSec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>
      <line x1="78" y1="78" x2="114" y2="114" stroke="url(#lensHandleSec)" strokeWidth="14" strokeLinecap="round" />
      <line x1="78" y1="78" x2="114" y2="114" stroke="#451a03" strokeWidth="16" strokeLinecap="round" opacity="0.35" />
      <circle cx="112" cy="112" r="6" fill="#fef08a" stroke="#78350f" strokeWidth="1.5" />
      <circle cx="54" cy="54" r="42" fill="#78350f" />
      <circle cx="54" cy="54" r="40" fill="url(#lensHandleSec)" />
      <circle cx="54" cy="54" r="35" fill="#451a03" />
      <circle cx="54" cy="54" r="34" fill="url(#lensGlassSec)" />
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
    <svg width="100%" height="100%" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_14px_rgba(0,0,0,0.45)]">
      <defs>
        <linearGradient id="crystal1Sec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a5f3fc" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id="crystal2Sec" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
        <linearGradient id="crystal3Sec" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#155e75" />
        </linearGradient>
      </defs>
      <polygon points="64,12 98,40 64,116 30,40" fill="#083344" />
      <polygon points="64,12 98,40 64,54" fill="url(#crystal1Sec)" stroke="#cffafe" strokeWidth="0.8" />
      <polygon points="64,12 30,40 64,54" fill="#67e8f9" stroke="#cffafe" strokeWidth="0.8" />
      <polygon points="30,40 64,54 64,116" fill="url(#crystal2Sec)" stroke="#155e75" strokeWidth="0.8" />
      <polygon points="98,40 64,54 64,116" fill="url(#crystal3Sec)" stroke="#155e75" strokeWidth="0.8" />
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

function DocProcessingSpecimen() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_14px_rgba(0,0,0,0.45)]">
      <defs>
        <linearGradient id="docCoverSec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </linearGradient>
        <linearGradient id="docShadowSec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <linearGradient id="docLaserSec" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points="42,26 94,26 94,104 42,104" fill="url(#docShadowSec)" rx="4" />
      <polygon points="36,22 88,22 88,100 36,100" fill="#312e81" opacity="0.6" rx="4" />
      <rect x="30" y="18" width="58" height="78" rx="6" fill="url(#docCoverSec)" stroke="#c7d2fe" strokeWidth="1.5" />
      <rect x="38" y="28" width="22" height="5" rx="2" fill="#4f46e5" />
      <circle cx="78" cy="30" r="4" fill="#10b981" />
      <rect x="38" y="40" width="42" height="3" rx="1.5" fill="#64748b" opacity="0.8" />
      <rect x="38" y="47" width="34" height="3" rx="1.5" fill="#94a3b8" opacity="0.7" />
      <rect x="38" y="54" width="38" height="3" rx="1.5" fill="#64748b" opacity="0.8" />
      <rect x="38" y="61" width="26" height="3" rx="1.5" fill="#94a3b8" opacity="0.7" />
      <rect x="38" y="68" width="40" height="3" rx="1.5" fill="#64748b" opacity="0.8" />
      <rect x="38" y="75" width="20" height="3" rx="1.5" fill="#4f46e5" opacity="0.9" />
      <line x1="20" y1="56" x2="98" y2="56" stroke="url(#docLaserSec)" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="58" cy="56" r="3.5" fill="#ffffff" />
      <polygon points="78,74 98,74 98,94 78,94" fill="#059669" stroke="#34d399" strokeWidth="1.5" rx="3" transform="rotate(15 88 84)" />
      <path d="M84 84 L87 87 L93 81" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(15 88 84)" />
    </svg>
  );
}

function ConversationalOrbSpecimen() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_14px_rgba(0,0,0,0.45)]">
      <defs>
        <radialGradient id="chatBubble1Sec" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#3b0764" />
        </radialGradient>
        <radialGradient id="chatBubble2Sec" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="50%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#164e63" />
        </radialGradient>
      </defs>
      <g transform="translate(68, 76)">
        <ellipse cx="0" cy="0" rx="30" ry="24" fill="url(#chatBubble2Sec)" stroke="#a5f3fc" strokeWidth="1.5" />
        <polygon points="-8,18 2,24 -2,16" fill="url(#chatBubble2Sec)" />
        <line x1="-12" y1="-4" x2="-12" y2="4" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="-4" y1="-8" x2="-4" y2="8" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="4" y1="-12" x2="4" y2="12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="12" y1="-5" x2="12" y2="5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <g transform="translate(50, 48)">
        <ellipse cx="0" cy="0" rx="36" ry="28" fill="url(#chatBubble1Sec)" stroke="#e9d5ff" strokeWidth="2" />
        <polygon points="-12,22 -22,34 -4,26" fill="url(#chatBubble1Sec)" />
        <ellipse cx="-12" cy="-10" rx="14" ry="6" fill="#ffffff" fillOpacity="0.4" transform="rotate(-15 -12 -10)" />
        <circle cx="-16" cy="4" r="4.5" fill="#fef08a" />
        <circle cx="0" cy="4" r="5.5" fill="#ffffff" />
        <circle cx="16" cy="4" r="4.5" fill="#38bdf8" />
        <line x1="-12" y1="4" x2="-4" y2="4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        <line x1="4" y1="4" x2="12" y2="4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      </g>
      <circle cx="98" cy="32" r="3" fill="#fef08a" />
      <circle cx="22" cy="78" r="2.5" fill="#67e8f9" />
    </svg>
  );
}

function RecommendationSpecimen() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_14px_rgba(0,0,0,0.45)]">
      <defs>
        <radialGradient id="recCenterSec" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="45%" stopColor="#f59e0b" />
          <stop offset="85%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#78350f" />
        </radialGradient>
        <linearGradient id="recRingSec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
      </defs>
      <circle cx="64" cy="64" r="48" fill="#1c1917" stroke="#78350f" strokeWidth="2" />
      <circle cx="64" cy="64" r="38" fill="none" stroke="url(#recRingSec)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
      <circle cx="64" cy="64" r="26" fill="none" stroke="#fbbf24" strokeWidth="1.8" opacity="0.75" />
      <circle cx="64" cy="64" r="14" fill="url(#recCenterSec)" stroke="#fef08a" strokeWidth="2" />
      <line x1="64" y1="18" x2="64" y2="110" stroke="#f59e0b" strokeWidth="1.2" opacity="0.5" strokeDasharray="3 3" />
      <line x1="18" y1="64" x2="110" y2="64" stroke="#f59e0b" strokeWidth="1.2" opacity="0.5" strokeDasharray="3 3" />
      <circle cx="64" cy="64" r="5" fill="#ffffff" />
      <g stroke="#38bdf8" strokeWidth="1.5">
        <line x1="64" y1="64" x2="88" y2="40" strokeLinecap="round" />
        <line x1="64" y1="64" x2="42" y2="82" strokeLinecap="round" />
      </g>
      <circle cx="88" cy="40" r="7" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
      <circle cx="88" cy="40" r="3" fill="#ffffff" />
      <circle cx="42" cy="82" r="6" fill="#10b981" stroke="#34d399" strokeWidth="1.8" />
      <circle cx="42" cy="82" r="2.5" fill="#ffffff" />
      <circle cx="40" cy="44" r="4" fill="#ec4899" stroke="#f472b6" strokeWidth="1.5" />
      <circle cx="86" cy="86" r="4" fill="#a855f7" stroke="#c084fc" strokeWidth="1.5" />
    </svg>
  );
}

function CyberShieldSpecimen() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_14px_rgba(0,0,0,0.45)]">
      <defs>
        <radialGradient id="shieldGlowSec" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="45%" stopColor="#059669" />
          <stop offset="100%" stopColor="#064e3b" />
        </radialGradient>
        <linearGradient id="shieldRimSec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="35%" stopColor="#d97706" />
          <stop offset="70%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
      </defs>
      <path d="M64 12 L106 28 C106 72 64 114 64 114 C64 114 22 72 22 28 Z" fill="url(#shieldRimSec)" stroke="#451a03" strokeWidth="1.5" />
      <path d="M64 18 L100 32 C100 68 64 106 64 106 C64 106 28 68 28 32 Z" fill="url(#shieldGlowSec)" stroke="#065f46" strokeWidth="1" />
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

function APIMeshSpecimen() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_14px_rgba(0,0,0,0.45)]">
      <defs>
        <linearGradient id="apiBlueSec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <circle cx="64" cy="64" r="20" fill="url(#apiBlueSec)" stroke="#93c5fd" strokeWidth="2.5" />
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

function InnovationLabSpecimen() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 128 128" className="filter drop-shadow-[0_12px_14px_rgba(0,0,0,0.45)]">
      <defs>
        <radialGradient id="labCoreSec" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#c084fc" />
          <stop offset="70%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#2e1065" />
        </radialGradient>
        <linearGradient id="orbitGrad1Sec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      <ellipse cx="64" cy="64" rx="52" ry="18" fill="none" stroke="url(#orbitGrad1Sec)" strokeWidth="2.5" transform="rotate(30 64 64)" opacity="0.85" />
      <ellipse cx="64" cy="64" rx="52" ry="18" fill="none" stroke="url(#orbitGrad1Sec)" strokeWidth="2.5" transform="rotate(-30 64 64)" opacity="0.85" />
      <ellipse cx="64" cy="64" rx="52" ry="18" fill="none" stroke="#a855f7" strokeWidth="2" transform="rotate(90 64 64)" opacity="0.75" />
      <circle cx="106" cy="40" r="4.5" fill="#fef08a" stroke="#d97706" strokeWidth="1" />
      <circle cx="22" cy="88" r="4" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
      <circle cx="64" cy="12" r="3.5" fill="#ec4899" stroke="#9d174d" strokeWidth="1" />
      <circle cx="64" cy="64" r="24" fill="url(#labCoreSec)" stroke="#e9d5ff" strokeWidth="2" />
      <ellipse cx="58" cy="56" rx="8" ry="4" fill="#ffffff" fillOpacity="0.7" transform="rotate(-25 58 56)" />
      <polygon points="64,54 67,61 74,64 67,67 64,74 61,67 54,64 61,61" fill="#fef08a" />
      <circle cx="64" cy="64" r="3.5" fill="#ffffff" />
    </svg>
  );
}

function SpecimenGraphic({ type }) {
  switch (type) {
    case 'ai-brain':
      return <AIBrainSpecimen />;
    case 'ml-neural':
      return <MLNeuralSpecimen />;
    case 'gen-ai':
      return <GenAISpecimen />;
    case 'auto-gears':
    case 'automation-gears':
      return <AutomationGearsSpecimen />;
    case 'investigation-lens':
      return <InvestigationLensSpecimen />;
    case 'data-crystal':
      return <DataCrystalSpecimen />;
    case 'doc-proc':
      return <DocProcessingSpecimen />;
    case 'knowledge-mesh':
    case 'chat-orb':
      return <ConversationalOrbSpecimen />;
    case 'recommend-spark':
    case 'recommend-target':
      return <RecommendationSpecimen />;
    case 'cyber-shield':
      return <CyberShieldSpecimen />;
    case 'api-mesh':
      return <APIMeshSpecimen />;
    case 'ai-lab':
      return <InnovationLabSpecimen />;
    default:
      return <AIBrainSpecimen />;
  }
}

/* =========================================================================
   2. RAINBOW FAN-OUT PHONE CARD COMPONENT
   ========================================================================= */

function RainbowPhoneCard({
  item,
  index,
  isHovered,
  isCenter,
  setHoveredIndex,
  onSelectCard,
}) {
  const theme = item.colorTheme;

  return (
    <article
      className="relative w-full h-full rounded-[16px] sm:rounded-[20px] md:rounded-[22px] p-2 sm:p-2 md:p-2.5 flex flex-col items-center justify-between gap-0.5 overflow-hidden cursor-pointer backdrop-blur-xl border transition-all duration-300 select-none pointer-events-auto group"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => onSelectCard(index)}
      style={{
        background: isCenter
          ? '#ffffff'
          : (isHovered ? '#ffffff' : 'linear-gradient(170deg, #ffffff 0%, #f9fbfb 100%)'),
        borderColor: isCenter
          ? theme.accent
          : (isHovered ? theme.accent : 'rgba(226, 232, 240, 0.9)'),
        boxShadow: isCenter
          ? `0 12px 28px -4px ${theme.glow}, 0 0 0 2px ${theme.accent}, 0 2px 6px rgba(0,0,0,0.04)`
          : (isHovered
            ? `0 12px 24px -6px rgba(0, 49, 53, 0.12), 0 0 0 1.5px ${theme.accent}`
            : '0 4px 12px -3px rgba(0, 49, 53, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)'),
      }}
    >
      {/* 1. TOP MICRO HEADER: Number & Domain Category */}
      <div className="relative z-10 w-full h-4 shrink-0 flex items-center justify-between px-0.5">
        <span
          className="text-[8.5px] sm:text-[9px] font-mono font-bold"
          style={{ color: theme.secondary || '#0FA4AF' }}
        >
          #{item.number}
        </span>
        <span
          className="text-[7px] sm:text-[7.5px] md:text-[8px] font-mono font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-full"
          style={{
            backgroundColor: `${theme.accent}14`,
            color: theme.secondary || '#0f766e',
          }}
        >
          {item.tag || 'CAPABILITY'}
        </span>
      </div>

      {/* 2. 3D ANIMATED SPECIMEN ICON */}
      <div className="relative z-10 flex items-center justify-center shrink-0 my-0.5 h-8 sm:h-9 md:h-10">
        <div className="relative flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full filter blur-md opacity-25 animate-pulse"
            style={{ background: theme.accent }}
          />
          <div
            className="relative w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] md:w-[38px] md:h-[38px] rounded-full p-1 border flex items-center justify-center shadow-xs"
            style={{
              borderColor: `${theme.accent}35`,
              background: 'radial-gradient(circle at 40% 35%, #ffffff, #f1f5f9)',
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <SpecimenGraphic type={item.specimen} />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full animate-orbit relative">
              <span
                className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border border-white rounded-full"
                style={{
                  backgroundColor: theme.accent,
                  boxShadow: `0 0 6px ${theme.accent}`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. CARD HEADING */}
      <div className="relative z-10 text-center px-0.5 w-full h-[28px] sm:h-[34px] md:h-[36px] shrink-0 flex items-center justify-center">
        <h2
          className="text-[#081E52] text-[10px] sm:text-[10.5px] md:text-[11px] font-extrabold tracking-tight leading-[1.18] text-center w-full"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            wordBreak: 'normal',
            overflowWrap: 'break-word',
            whiteSpace: 'normal',
          }}
        >
          {item.title}
        </h2>
      </div>

      {/* 4. CONTENT-RELATED SUMMARY SNIPPET */}
      <div className="relative z-10 text-center px-0.5 w-full hidden sm:flex items-center justify-center h-[26px] md:h-[28px] shrink-0">
        <p className="text-[8px] md:text-[8.5px] text-slate-500 leading-[1.22] line-clamp-2">
          {item.summary || item.description}
        </p>
      </div>

      {/* 5. DOMAIN KEYWORD PILLS */}
      {item.pills && (
        <div className="relative z-10 flex items-center justify-center gap-1 flex-wrap h-[18px] sm:h-[20px] shrink-0">
          {item.pills.slice(0, 2).map((pill, pIdx) => (
            <span
              key={pIdx}
              className="text-[6.5px] sm:text-[7.5px] font-medium px-1.5 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200/70"
            >
              {pill}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

/* =========================================================================
   3. HOME PAGE SECTION COMPONENT FOR AI & INTELLIGENT SOFTWARE
   ========================================================================= */

export default function ArtificialIntelligenceIntelligentSoftwareSection({ onOpenPage }) {
  const [centerIndex, setCenterIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const activeItem = artificialIntelligenceData[centerIndex] || artificialIntelligenceData[0];

  const stageContainerRef = useRef(null);
  const hoveredIndexRef = useRef(null);
  const rotationRef = useRef(0);
  const targetRotationRef = useRef(null);
  const pauseUntilRef = useRef(0);
  const lastTimeRef = useRef(null);
  const cardElementsRef = useRef([]);

  // Touch & Mouse Drag handlers
  const isMouseDownRef = useRef(false);
  const mouseDownXRef = useRef(null);
  const mouseDownYRef = useRef(null);
  const touchStartXRef = useRef(null);
  const touchStartYRef = useRef(null);

  const handleCtaClick = (e) => {
    if (e) e.preventDefault();
    window.location.hash = '#artificial-intelligence-intelligent-software-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  useEffect(() => {
    hoveredIndexRef.current = hoveredIndex;
  }, [hoveredIndex]);

  // Continuous dome arch rotation & animation engine (60fps)
  useEffect(() => {
    let animId;
    const SPEED = 0.32; // smooth rotation speed

    const tick = (now) => {
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const delta = Math.min((now - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = now;
      const total = 12;

      if (targetRotationRef.current !== null) {
        const diff = targetRotationRef.current - rotationRef.current;
        if (Math.abs(diff) < 0.003) {
          rotationRef.current = targetRotationRef.current;
          targetRotationRef.current = null;
        } else {
          const lerpFactor = 1 - Math.exp(-10 * delta);
          rotationRef.current += diff * lerpFactor;
        }
      } else if (hoveredIndexRef.current === null && now >= pauseUntilRef.current) {
        rotationRef.current += SPEED * delta;
        const rawCenter = Math.round(rotationRef.current) % total;
        const activeIdx = (rawCenter + total) % total;
        setCenterIndex((prev) => (prev !== activeIdx ? activeIdx : prev));
      }

      const currentRot = rotationRef.current;

      const stageEl = stageContainerRef.current;
      const stageW = stageEl ? stageEl.clientWidth : 1200;

      const isMobile = stageW < 640;
      const isTablet = stageW >= 640 && stageW < 1024;

      const cardW = isMobile ? 112 : (isTablet ? 144 : 164);
      const cardH = isMobile ? 146 : (isTablet ? 158 : 176);

      const apexCenterY = isMobile ? 78 : (isTablet ? 88 : 96);
      const centerX = stageW / 2;

      const mobileStepX = 136;
      const mobileRy = 14;

      const Rx = isTablet ? Math.min(380, stageW * 0.46) : Math.min(680, stageW * 0.48);
      const Ry = isTablet ? 165 : 255;
      const stepDeg = isTablet ? 24.0 : 21.0;

      const maxDiff = isMobile ? 1.45 : (isTablet ? 2.5 : 3.4);
      const solidDiff = isMobile ? 0.95 : (isTablet ? 1.8 : 2.8);

      for (let i = 0; i < total; i++) {
        const el = cardElementsRef.current[i];
        if (!el) continue;

        let diffSlot = (i - currentRot) % total;
        while (diffSlot < -total / 2) diffSlot += total;
        while (diffSlot > total / 2) diffSlot -= total;

        const isHovered = hoveredIndexRef.current === i;
        const absDiff = Math.abs(diffSlot);

        if (absDiff > maxDiff && !isHovered) {
          el.style.opacity = '0';
          el.style.pointerEvents = 'none';
          el.style.visibility = 'hidden';
        } else {
          el.style.visibility = 'visible';
          el.style.pointerEvents = 'auto';

          const opacity = isHovered
            ? 1
            : (absDiff <= solidDiff
              ? 1
              : Math.max(0, (maxDiff - absDiff) / (maxDiff - solidDiff)));
          el.style.opacity = String(opacity);

          let posX, posY, rotDeg;

          if (isMobile) {
            const cardCenterX = centerX + diffSlot * mobileStepX;
            const cardCenterY = apexCenterY + mobileRy * Math.pow(absDiff, 1.4);
            posX = cardCenterX - (cardW / 2);
            posY = cardCenterY - (cardH / 2);
            rotDeg = diffSlot * 3.5;
          } else {
            const thetaDeg = diffSlot * stepDeg;
            const thetaRad = (thetaDeg * Math.PI) / 180;
            const cardCenterX = centerX + Rx * Math.sin(thetaRad);
            const cardCenterY = apexCenterY + Ry * (1 - Math.cos(thetaRad));
            posX = cardCenterX - (cardW / 2);
            posY = cardCenterY - (cardH / 2);
            const tiltFactor = isTablet ? 0.48 : 0.65;
            rotDeg = thetaDeg * tiltFactor;
          }

          const scale = isHovered
            ? 1.025
            : (1 - Math.min(0.08, Math.pow(absDiff / (maxDiff + 0.5), 2) * 0.08));

          el.style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${rotDeg}deg) scale(${scale})`;
          el.style.zIndex = isHovered ? 35 : Math.round(20 - absDiff * 4);
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleRotateLeft = () => {
    const base = targetRotationRef.current !== null ? targetRotationRef.current : rotationRef.current;
    const next = Math.round(base) - 1;
    targetRotationRef.current = next;
    pauseUntilRef.current = performance.now() + 4500;
    const targetIdx = ((next % 12) + 12) % 12;
    setCenterIndex(targetIdx);
  };

  const handleRotateRight = () => {
    const base = targetRotationRef.current !== null ? targetRotationRef.current : rotationRef.current;
    const next = Math.round(base) + 1;
    targetRotationRef.current = next;
    pauseUntilRef.current = performance.now() + 4500;
    const targetIdx = ((next % 12) + 12) % 12;
    setCenterIndex(targetIdx);
  };

  const handleSelectCard = (index) => {
    const cur = targetRotationRef.current !== null ? targetRotationRef.current : rotationRef.current;
    const curIdx = ((Math.round(cur) % 12) + 12) % 12;
    let diff = (index - curIdx) % 12;
    while (diff < -6) diff += 12;
    while (diff > 6) diff -= 12;

    targetRotationRef.current = Math.round(cur) + diff;
    pauseUntilRef.current = performance.now() + 4500;
    setCenterIndex(index);
  };

  const handleMouseDown = (e) => {
    isMouseDownRef.current = true;
    mouseDownXRef.current = e.clientX;
    mouseDownYRef.current = e.clientY;
  };

  const handleMouseUp = (e) => {
    if (!isMouseDownRef.current || mouseDownXRef.current === null) return;
    const diffX = e.clientX - mouseDownXRef.current;
    const diffY = e.clientY - mouseDownYRef.current;

    if (Math.abs(diffX) > 30 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        handleRotateRight();
      } else {
        handleRotateLeft();
      }
    }
    isMouseDownRef.current = false;
    mouseDownXRef.current = null;
    mouseDownYRef.current = null;
  };

  const handleMouseLeaveStage = () => {
    isMouseDownRef.current = false;
    mouseDownXRef.current = null;
    mouseDownYRef.current = null;
  };

  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length === 1) {
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = endX - touchStartXRef.current;
    const diffY = endY - touchStartYRef.current;

    if (Math.abs(diffX) > 30 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        handleRotateRight();
      } else {
        handleRotateLeft();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  return (
    <section
      id="artificial-intelligence-intelligent-software"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F0F7FB] via-[#F6F4FD] to-[#F9F7FC] border-b border-[#D4AF37]/20 overflow-hidden relative"
    >
      <style>{`
        /* Hide scrollbars completely across WebKit, Firefox and IE/Edge */
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
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

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Dome Arch Stage */
        .dome-arch-stage-sec {
          position: relative;
          width: 100%;
          height: 540px;
          overflow: visible;
          padding-top: 2px;
          touch-action: pan-y;
        }
        @media (max-width: 1023px) {
          .dome-arch-stage-sec {
            height: 480px;
            padding-top: 2px;
          }
        }
        @media (max-width: 639px) {
          .dome-arch-stage-sec {
            height: 430px;
            padding-top: 0px;
            flex-shrink: 0;
          }
        }

        .dome-card-slot-sec {
          position: absolute;
          top: 0;
          left: 0;
          width: 164px;
          height: 176px;
          will-change: transform, opacity;
          pointer-events: auto;
        }
        @media (max-width: 1023px) {
          .dome-card-slot-sec {
            width: 144px;
            height: 158px;
          }
        }
        @media (max-width: 639px) {
          .dome-card-slot-sec {
            width: 114px;
            height: 148px;
          }
        }

        /* Central Showcase Box */
        .dome-showcase-box-sec {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 560px;
          text-align: center;
          z-index: 30;
          pointer-events: auto;
          top: 260px;
        }
        @media (max-width: 1023px) {
          .dome-showcase-box-sec {
            top: 215px;
            width: 92%;
          }
        }
        @media (max-width: 639px) {
          .dome-showcase-box-sec {
            top: 165px;
            width: 96%;
            max-width: 540px;
          }
        }
      `}</style>

      {/* Decorative Background Art: Floating 3D Orbs, Mesh Ribbons & Network Constellations */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Ambient Radial Blur Lighting */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[400px] rounded-full filter blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.25) 0%, rgba(56, 189, 248, 0.18) 50%, transparent 80%)',
          }}
        />

        {/* Floating 3D Glowing Spheres matching reference image */}
        <div className="absolute top-12 left-10 w-24 h-24 bg-gradient-to-br from-[#c084fc] to-[#60a5fa] rounded-full blur-xl opacity-45 animate-pulse" />
        <div className="absolute top-44 left-6 w-36 h-36 bg-gradient-to-tr from-[#a855f7] via-[#38bdf8] to-[#f472b6] rounded-full blur-2xl opacity-50" />
        <div className="absolute top-8 right-12 w-28 h-28 bg-gradient-to-bl from-[#818cf8] to-[#c084fc] rounded-full blur-xl opacity-40" />
        <div className="absolute top-36 right-8 w-16 h-16 bg-gradient-to-r from-[#fbbf24] to-[#f97316] rounded-full blur-md opacity-60" />
        <div className="absolute bottom-16 right-10 w-32 h-32 bg-gradient-to-tr from-[#60a5fa] to-[#c084fc] rounded-full blur-2xl opacity-45" />

        {/* 3D Flowing Gradient Wave Ribbons (Left & Right) */}
        <svg className="w-full h-full min-h-[650px] opacity-75" viewBox="0 0 1440 650" fill="none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="ribbonGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#c084fc" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f472b6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="ribbonGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#f472b6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          {/* Left Ribbon Waves */}
          <path d="M-150,450 C100,200 350,550 700,320 C900,220 1100,400 1300,300" fill="none" stroke="url(#ribbonGradLeft)" strokeWidth="90" opacity="0.35" />
          <path d="M-100,500 C150,260 400,600 750,370 C950,270 1150,450 1350,350" fill="none" stroke="url(#ribbonGradLeft)" strokeWidth="40" opacity="0.4" />

          {/* Right Ribbon Waves */}
          <path d="M1590,450 C1340,220 1090,520 740,300 C540,200 340,380 140,280" fill="none" stroke="url(#ribbonGradRight)" strokeWidth="95" opacity="0.3" />

          {/* Network Constellation Lines & Node Dots */}
          <line x1="120" y1="140" x2="220" y2="280" stroke="#c084fc" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
          <circle cx="120" cy="140" r="4" fill="#a855f7" />
          <circle cx="220" cy="280" r="5" fill="#38bdf8" />

          <line x1="1320" y1="160" x2="1240" y2="300" stroke="#f472b6" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
          <circle cx="1320" cy="160" r="4.5" fill="#fbbf24" />
          <circle cx="1240" cy="300" r="5" fill="#c084fc" />
        </svg>
      </div>

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* 1. TOP CENTERED SECTION HEADER & DESCRIPTION */}
        <div className="w-full max-w-[880px] mx-auto text-center pt-2 pb-4 sm:pb-6 relative z-20 shrink-0">
          <AnimatedSectionHeading
            text="Artificial Intelligence & Intelligent Software"
            className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#081E52] tracking-tight leading-[1.38] sm:leading-[1.38] lg:leading-[1.38] mb-4 text-center"
            style={{ lineHeight: 1.38 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="space-y-3.5 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-[#081E52]/80 font-normal max-w-4xl mx-auto px-1 sm:px-0 text-center"
          >
            <p>
              Artificial Intelligence is an important technology area within our software product development strategy. We explore AI, Machine Learning and Generative AI to build software products that can process information, automate workflows, analyse data and enable intelligent digital experiences.
            </p>
            <p>
              Our focus is not simply on incorporating AI as a feature, but on developing commercially useful AI software products that solve defined problems. We combine AI technologies with secure software engineering, data systems, cloud infrastructure and product design to create scalable intelligent applications.
            </p>
          </motion.div>
        </div>

        {/* 2. DOME ARCH CARDS SHOWCASE STAGE */}
        <div
          ref={stageContainerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeaveStage}
          className="dome-arch-stage-sec w-full max-w-[1440px] mx-auto"
        >
          {/* 12 Animated Cards along the Dome Canopy Arch */}
          {artificialIntelligenceData.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => (cardElementsRef.current[idx] = el)}
              className="dome-card-slot-sec"
            >
              <RainbowPhoneCard
                item={item}
                index={idx}
                isCenter={centerIndex === idx}
                isHovered={hoveredIndex === idx}
                setHoveredIndex={setHoveredIndex}
                onSelectCard={handleSelectCard}
              />
            </div>
          ))}

          {/* CENTRAL ACTIVE PRODUCT SPOTLIGHT SHOWCASE BOX */}
          <div className="dome-showcase-box-sec">
            {/* Active Product Content Card */}
            <div
              key={activeItem.id}
              className="relative w-full min-h-[170px] sm:min-h-[195px] md:min-h-[210px] rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 bg-white/95 backdrop-blur-xl border shadow-xl transition-all duration-300 text-left animate-fadeIn flex flex-col justify-start"
              style={{
                borderColor: activeItem.colorTheme.accent,
                boxShadow: `0 16px 40px -10px ${activeItem.colorTheme.glow}, 0 2px 8px rgba(0, 49, 53, 0.04)`,
              }}
            >
              {/* Header row: 3D Specimen Graphic Icon + Heading */}
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3 shrink-0">
                <div
                  className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl sm:rounded-2xl p-1 sm:p-1.5 border shrink-0 flex items-center justify-center shadow-xs"
                  style={{
                    borderColor: `${activeItem.colorTheme.accent}40`,
                    background: 'radial-gradient(circle at 35% 30%, #ffffff, #f1f5f9)',
                  }}
                >
                  <SpecimenGraphic type={activeItem.specimen} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3
                    className="text-base sm:text-lg md:text-xl font-extrabold text-[#081E52] tracking-tight leading-snug"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {activeItem.fullTitle || `${activeItem.number}. ${activeItem.title}`}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="w-full flex-1 flex items-start">
                <p
                  className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    textAlign: 'justify',
                    textJustify: 'inter-word',
                  }}
                >
                  {activeItem.description}
                </p>
              </div>
            </div>

            {/* Numbered Carousel Controls */}
            <div className="flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full bg-white/95 border border-[#0FA4AF]/30 shadow-xs backdrop-blur-md mx-auto w-fit max-w-full mt-3 sm:mt-4 overflow-x-auto no-scrollbar select-none">
              <button
                onClick={handleRotateLeft}
                className="w-6 h-6 sm:w-7.5 sm:h-7.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-[#081E52] flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-xs shrink-0"
                title="Previous Product"
                aria-label="Previous Product"
              >
                <ChevronLeft size={13} className="sm:w-4 sm:h-4" />
              </button>

              <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                {artificialIntelligenceData.map((c, i) => {
                  const isActive = centerIndex === i;
                  return (
                    <button
                      key={c.id}
                      onClick={() => handleSelectCard(i)}
                      className={`w-5 h-5 sm:w-6.5 sm:h-6.5 rounded-full text-[9px] sm:text-[11px] font-bold transition-all duration-200 flex items-center justify-center cursor-pointer shrink-0 ${isActive
                          ? 'text-[#081E52] font-black'
                          : 'text-[#081E52]/70 bg-white/70 hover:bg-white hover:text-[#081E52]'
                        }`}
                      style={{
                        backgroundColor: isActive ? c.colorTheme.accent : undefined,
                        boxShadow: isActive ? `0 0 6px ${c.colorTheme.accent}` : 'none',
                        transform: isActive ? 'scale(1.06)' : 'scale(1)',
                        border: isActive ? '1.5px solid #003135' : '1px solid rgba(15, 164, 175, 0.25)',
                      }}
                      title={c.title}
                      aria-label={`Select product ${c.number}`}
                    >
                      {c.number}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleRotateRight}
                className="w-6 h-6 sm:w-7.5 sm:h-7.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-[#081E52] flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-xs shrink-0"
                title="Next Product"
                aria-label="Next Product"
              >
                <ChevronRight size={13} className="sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Showcase displays directly on the section without opening a separate detail page */}
      </div>
    </section>
  );
}
