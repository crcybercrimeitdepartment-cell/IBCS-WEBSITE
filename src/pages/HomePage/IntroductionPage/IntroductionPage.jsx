import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ArrowLeft, Home, X, Sparkles, ChevronRight
} from 'lucide-react';
import { introductionPageData } from './IntroductionPageData';

// ----------------------------------------------------------------------
// 12 COMPLETELY UNIQUE & DIVERSE 3D STYLIZED GEOMETRIC SCULPTURES
// Each domain card features a completely distinct shape, architecture, and lighting
// ----------------------------------------------------------------------

// 1. Technology Products: Layered Isometric Cylinders, Striped Tower & Floating Disc
function DashboardArtwork() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl overflow-visible">
      <defs>
        <pattern id="tech-stripes" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#044E46" strokeWidth="1.6" opacity="0.75" />
        </pattern>
        <radialGradient id="tech-radial-glow" cx="30%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#CCFBF1" />
          <stop offset="35%" stopColor="#2DD4BF" />
          <stop offset="75%" stopColor="#0D9488" />
          <stop offset="100%" stopColor="#042F2E" />
        </radialGradient>
      </defs>

      {/* Background Striped Vertical Column */}
      <g transform="translate(108, 26)" className="transition-transform duration-500 ease-out group-hover:translate-y-[-4px]">
        <rect x="0" y="16" width="60" height="74" rx="6" fill="#0D9488" />
        <rect x="0" y="16" width="60" height="74" rx="6" fill="url(#tech-stripes)" />
        <ellipse cx="30" cy="16" rx="30" ry="14" fill="#5EEAD4" />
        <ellipse cx="30" cy="16" rx="14" ry="7" fill="#0F766E" />
      </g>

      {/* Layered Disc Base */}
      <g transform="translate(24, 68)" className="transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-3">
        <ellipse cx="48" cy="48" rx="46" ry="34" fill="#0F766E" />
        <ellipse cx="48" cy="44" rx="42" ry="30" fill="#14B8A6" />
        <ellipse cx="48" cy="44" rx="34" ry="22" stroke="#CCFBF1" strokeWidth="1.8" fill="none" opacity="0.8" />
        <ellipse cx="48" cy="44" rx="20" ry="12" stroke="#CCFBF1" strokeWidth="1.5" fill="none" opacity="0.6" />
        <circle cx="48" cy="44" r="8" fill="#042F2E" />
      </g>

      {/* Floating Glowing Sphere */}
      <g transform="translate(20, 116)" className="transition-transform duration-500 ease-out group-hover:scale-110">
        <circle cx="28" cy="28" r="26" fill="url(#tech-radial-glow)" />
        <ellipse cx="28" cy="22" rx="20" ry="5.5" stroke="#CCFBF1" strokeWidth="1.4" fill="none" opacity="0.85" />
        <circle cx="18" cy="18" r="3.5" fill="#FFFFFF" opacity="0.9" />
      </g>

      {/* Small Tech Satellites */}
      <circle cx="164" cy="146" r="14" fill="#2DD4BF" opacity="0.9" />
      <circle cx="164" cy="146" r="8" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
      <circle cx="120" cy="80" r="9" fill="#99F6E4" opacity="0.85" />
    </svg>
  );
}

// 2. Cybersecurity: Glossy Royal Blue Sphere, Neon Orbit Rings & Security Key Block
function BillingArtwork() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl overflow-visible">
      <defs>
        <radialGradient id="cyber-3d-sphere" cx="32%" cy="26%" r="72%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="25%" stopColor="#3B82F6" />
          <stop offset="65%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#0F172A" />
        </radialGradient>
      </defs>

      {/* Background Concentric Radar Target Disc */}
      <g transform="translate(34, 28)" className="transition-transform duration-500 ease-out group-hover:scale-105">
        <circle cx="50" cy="50" r="48" fill="#2563EB" />
        <circle cx="50" cy="50" r="48" stroke="#93C5FD" strokeWidth="2.5" fill="none" opacity="0.95" />
        <circle cx="50" cy="50" r="34" stroke="#BFDBFE" strokeWidth="2" fill="none" opacity="0.85" />
        <circle cx="50" cy="50" r="20" stroke="#DBEAFE" strokeWidth="2" fill="none" opacity="0.75" />
        <circle cx="50" cy="50" r="10" fill="#1E3A8A" />
      </g>

      {/* Foreground Right: 3D Glossy Sphere with 2 Orbit Rings & Light Specular Reflection */}
      <g transform="translate(86, 66)" className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
        <circle cx="44" cy="44" r="42" fill="url(#cyber-3d-sphere)" />
        <ellipse cx="44" cy="34" rx="34" ry="9" stroke="#EFF6FF" strokeWidth="2.2" fill="none" opacity="0.95" />
        <ellipse cx="44" cy="46" rx="38" ry="10" stroke="#BFDBFE" strokeWidth="2" fill="none" opacity="0.9" />
        <ellipse cx="30" cy="24" rx="7" ry="4.5" fill="#FFFFFF" opacity="0.95" transform="rotate(-15 30 24)" />
        <circle cx="28" cy="23" r="3" fill="#FFFFFF" />
      </g>

      {/* Foreground Left: Security Keycard / Badge Block with Center Dot */}
      <g transform="translate(22, 106)" className="transition-transform duration-500 ease-out group-hover:translate-x-1">
        <rect x="0" y="0" width="70" height="46" rx="12" fill="#1D4ED8" />
        <circle cx="35" cy="23" r="13" fill="#60A5FA" opacity="0.95" />
        <circle cx="35" cy="23" r="6" fill="#EFF6FF" />
      </g>
    </svg>
  );
}

// 3. Investigation & Intelligence: Sharp 3D Prism Wedge, Radar Coordinate Grid & Loupe Disc
function InvestigationArtwork() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl overflow-visible">
      <defs>
        <pattern id="prism-diag" width="6" height="6" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="6" y2="6" stroke="#312E81" strokeWidth="1.4" opacity="0.6" />
        </pattern>
        <radialGradient id="invest-glow" cx="30%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#E0E7FF" />
          <stop offset="30%" stopColor="#818CF8" />
          <stop offset="70%" stopColor="#4338CA" />
          <stop offset="100%" stopColor="#1E1B4B" />
        </radialGradient>
      </defs>

      {/* 3D Triangular Prismatic Wedge Pyramid */}
      <g transform="translate(36, 42)" className="transition-transform duration-500 ease-out group-hover:translate-y-[-2px]">
        <path d="M60,0 L120,70 L0,70 Z" fill="#4F46E5" />
        <path d="M60,0 L120,70 L60,70 Z" fill="#3730A3" />
        <path d="M60,0 L120,70 L0,70 Z" fill="url(#prism-diag)" />
        <line x1="60" y1="0" x2="60" y2="70" stroke="#C7D2FE" strokeWidth="1.6" />
      </g>

      {/* Coordinate Crosshair Radar Disc */}
      <g transform="translate(88, 88)" className="transition-transform duration-500 ease-out group-hover:scale-108 group-hover:rotate-12">
        <circle cx="42" cy="42" r="38" fill="url(#invest-glow)" />
        <circle cx="42" cy="42" r="28" stroke="#EEF2FF" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.8" />
        <circle cx="42" cy="42" r="14" stroke="#EEF2FF" strokeWidth="1.5" fill="none" opacity="0.9" />
        <line x1="42" y1="10" x2="42" y2="74" stroke="#C7D2FE" strokeWidth="1.4" />
        <line x1="10" y1="42" x2="74" y2="42" stroke="#C7D2FE" strokeWidth="1.4" />
        <circle cx="32" cy="30" r="3.5" fill="#FFFFFF" />
      </g>

      {/* Floating Investigation Capsule Block */}
      <g transform="translate(20, 120)" className="transition-transform duration-500 ease-out group-hover:translate-x-1">
        <rect x="0" y="0" width="56" height="34" rx="8" fill="#312E81" />
        <circle cx="20" cy="17" r="8" fill="#818CF8" />
        <line x1="28" y1="17" x2="48" y2="17" stroke="#C7D2FE" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// 4. Artificial Intelligence: Double Crested Neural Waveform Terrain & Saturn Orb
function RealtimeArtwork() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl overflow-visible">
      <defs>
        <radialGradient id="ai-sphere-3d" cx="30%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#F5F3FF" />
          <stop offset="25%" stopColor="#C084FC" />
          <stop offset="65%" stopColor="#7E22CE" />
          <stop offset="100%" stopColor="#2E1065" />
        </radialGradient>
      </defs>

      {/* Dynamic AI Neural Flow Waves */}
      <g transform="translate(24, 78)" className="transition-transform duration-500 ease-out group-hover:translate-y-[-3px]">
        <path d="M0,86 C28,18 56,18 84,86 C112,6 142,6 164,86 Z" fill="#9333EA" />
        <path d="M8,86 C28,30 56,30 76,86" stroke="#F3E8FF" strokeWidth="1.8" fill="none" opacity="0.8" />
        <path d="M20,86 C32,44 50,44 64,86" stroke="#F3E8FF" strokeWidth="1.8" fill="none" opacity="0.8" />
        <path d="M94,86 C112,18 140,18 154,86" stroke="#F3E8FF" strokeWidth="1.8" fill="none" opacity="0.8" />
        <path d="M106,86 C120,32 134,32 144,86" stroke="#F3E8FF" strokeWidth="1.8" fill="none" opacity="0.8" />
      </g>

      {/* Levitating Neural AI Orb with Wide Tilted Saturn Orbit Ring */}
      <g transform="translate(108, 38)" className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:translate-y-[-5px]">
        <circle cx="34" cy="34" r="30" fill="url(#ai-sphere-3d)" />
        <circle cx="22" cy="20" r="4.5" fill="#FFFFFF" opacity="0.9" />
        <ellipse cx="34" cy="34" rx="44" ry="13" stroke="#DDD6FE" strokeWidth="2" fill="none" opacity="0.95" transform="rotate(-24 34 34)" />
        <ellipse cx="34" cy="34" rx="28" ry="8" stroke="#FAF5FF" strokeWidth="1.4" fill="none" opacity="0.75" transform="rotate(-24 34 34)" />
      </g>

      {/* Floating Synapse Particles */}
      <circle cx="48" cy="54" r="7" fill="#C084FC" opacity="0.85" />
      <circle cx="76" cy="40" r="5" fill="#E9D5FF" opacity="0.9" />
    </svg>
  );
}

// 5. Government Technology: Monumental Roman Arch Canopy & Tiered Foundation Plinths
function GovTechArtwork() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl overflow-visible">
      <defs>
        <pattern id="gov-stripes" width="6" height="6" patternUnits="userSpaceOnUse">
          <line x1="3" y1="0" x2="3" y2="6" stroke="#064E3B" strokeWidth="1.4" opacity="0.7" />
        </pattern>
        <radialGradient id="gov-emerald-glow" cx="30%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#D1FAE5" />
          <stop offset="30%" stopColor="#34D399" />
          <stop offset="70%" stopColor="#059669" />
          <stop offset="100%" stopColor="#022C22" />
        </radialGradient>
      </defs>

      {/* Classical Vaulted Arch Canopy */}
      <g transform="translate(38, 36)" className="transition-transform duration-500 ease-out group-hover:translate-y-[-3px]">
        <path d="M0,74 Q60,-20 120,74 L120,92 L0,92 Z" fill="#10B981" />
        <path d="M12,74 Q60,-4 108,74" stroke="#064E3B" strokeWidth="1.8" fill="none" opacity="0.65" />
        <path d="M26,74 Q60,14 94,74" stroke="#064E3B" strokeWidth="1.8" fill="none" opacity="0.65" />
        <path d="M40,74 Q60,32 80,74" stroke="#064E3B" strokeWidth="1.8" fill="none" opacity="0.65" />
      </g>

      {/* Fluted Base Column Pedestal */}
      <g transform="translate(106, 96)">
        <rect x="0" y="0" width="62" height="60" rx="8" fill="#047857" />
        <rect x="0" y="0" width="62" height="60" rx="8" fill="url(#gov-stripes)" />
      </g>

      {/* Emerald Seal Orb */}
      <g transform="translate(36, 96)" className="transition-transform duration-500 ease-out group-hover:scale-108">
        <circle cx="36" cy="36" r="34" fill="url(#gov-emerald-glow)" />
        <circle cx="24" cy="22" r="4.5" fill="#FFFFFF" opacity="0.9" />
        <ellipse cx="36" cy="24" rx="25" ry="6.5" stroke="#A7F3D0" strokeWidth="1.4" fill="none" opacity="0.85" />
        <ellipse cx="36" cy="36" rx="30" ry="8.5" stroke="#A7F3D0" strokeWidth="1.5" fill="none" opacity="0.85" />
      </g>
    </svg>
  );
}

// 6. Digital Forensics: Hexagonal Honeycomb Matrix, Evidence Vault & Forensic Lens
function UsersArtwork() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl overflow-visible">
      <defs>
        <radialGradient id="forensic-glow" cx="30%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#FFE4E6" />
          <stop offset="30%" stopColor="#FB7185" />
          <stop offset="70%" stopColor="#BE123C" />
          <stop offset="100%" stopColor="#4C0519" />
        </radialGradient>
      </defs>

      {/* Hexagonal Forensic Honeycomb Cluster */}
      <g transform="translate(32, 40)" className="transition-transform duration-500 ease-out group-hover:scale-105">
        {/* Hex 1 */}
        <polygon points="40,0 75,20 75,60 40,80 5,60 5,20" fill="#E11D48" />
        <polygon points="40,5 70,22 70,58 40,75 10,58 10,22" stroke="#FECDD3" strokeWidth="1.5" fill="none" opacity="0.8" />
        {/* Hex 2 */}
        <polygon points="105,35 140,55 140,95 105,115 70,95 70,55" fill="#BE123C" />
        <polygon points="105,40 135,57 135,93 105,110 75,93 75,57" stroke="#FDA4AF" strokeWidth="1.5" fill="none" opacity="0.8" />
      </g>

      {/* 3D Forensic Evidence Sphere with Fingerprint Arcs */}
      <g transform="translate(90, 80)" className="transition-transform duration-500 ease-out group-hover:scale-110">
        <circle cx="40" cy="40" r="38" fill="url(#forensic-glow)" />
        <circle cx="26" cy="24" r="4.5" fill="#FFFFFF" opacity="0.9" />
        <path d="M22,40 Q40,18 58,40" stroke="#FFF1F2" strokeWidth="1.8" fill="none" opacity="0.85" />
        <path d="M26,48 Q40,30 54,48" stroke="#FFF1F2" strokeWidth="1.8" fill="none" opacity="0.85" />
        <path d="M30,56 Q40,42 50,56" stroke="#FFF1F2" strokeWidth="1.8" fill="none" opacity="0.85" />
      </g>

      {/* Forensic Card Plate */}
      <g transform="translate(24, 116)" className="transition-transform duration-500 ease-out group-hover:translate-x-1">
        <rect x="0" y="0" width="60" height="38" rx="8" fill="#9F1239" />
        <circle cx="18" cy="19" r="7" fill="#FB7185" />
        <rect x="30" y="15" width="22" height="8" rx="3" fill="#FECDD3" />
      </g>
    </svg>
  );
}

// 7. SaaS Products: Floating Multi-Layered Torus Cloud Rings & Stepped Plinth
function CloudSaasArtwork() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl overflow-visible">
      <defs>
        <radialGradient id="saas-blue-glow" cx="30%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#DBEAFE" />
          <stop offset="30%" stopColor="#60A5FA" />
          <stop offset="70%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#172554" />
        </radialGradient>
      </defs>

      {/* Nested Cloud Torus Rings (Top) */}
      <g transform="translate(38, 44)" className="transition-transform duration-500 ease-out group-hover:scale-105 group-hover:translate-y-[-3px]">
        <ellipse cx="60" cy="40" rx="58" ry="32" fill="#3B82F6" />
        <ellipse cx="60" cy="40" rx="46" ry="24" stroke="#BFDBFE" strokeWidth="2.5" fill="none" opacity="0.9" />
        <ellipse cx="60" cy="40" rx="32" ry="16" stroke="#DBEAFE" strokeWidth="2" fill="none" opacity="0.8" />
        <ellipse cx="60" cy="40" rx="18" ry="8" fill="#1D4ED8" />
      </g>

      {/* Stepped Cloud Data Plinth */}
      <g transform="translate(28, 114)" className="transition-transform duration-500 ease-out group-hover:translate-x-1">
        <rect x="0" y="14" width="80" height="32" rx="10" fill="#1E40AF" />
        <rect x="10" y="0" width="60" height="20" rx="7" fill="#3B82F6" />
        <circle cx="40" cy="10" r="5" fill="#DBEAFE" />
      </g>

      {/* Levitating SaaS Core Orb */}
      <g transform="translate(98, 90)" className="transition-transform duration-500 ease-out group-hover:scale-110">
        <circle cx="36" cy="36" r="34" fill="url(#saas-blue-glow)" />
        <circle cx="24" cy="22" r="4.5" fill="#FFFFFF" opacity="0.9" />
        <ellipse cx="36" cy="26" rx="25" ry="7" stroke="#BFDBFE" strokeWidth="1.4" fill="none" opacity="0.85" />
        <ellipse cx="36" cy="36" rx="30" ry="8.5" stroke="#BFDBFE" strokeWidth="1.5" fill="none" opacity="0.85" />
      </g>
    </svg>
  );
}

// 8. Cyber Intelligence: Polyhedral Neural Network Grid & Glowing Synapse Diamond
function CyberIntelArtwork() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl overflow-visible">
      <defs>
        <radialGradient id="cintel-violet-glow" cx="30%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#EDE9FE" />
          <stop offset="30%" stopColor="#A78BFA" />
          <stop offset="70%" stopColor="#6D28D9" />
          <stop offset="100%" stopColor="#2E1065" />
        </radialGradient>
      </defs>

      {/* 3D Wireframe Polyhedron / Octahedron Node Net */}
      <g transform="translate(34, 38)" className="transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-6">
        <polygon points="60,10 110,48 60,86 10,48" fill="#5B21B6" opacity="0.75" />
        <polygon points="60,10 110,48 60,86" fill="#6D28D9" />
        <polygon points="60,10 60,86 10,48" fill="#7C3AED" />
        <line x1="60" y1="10" x2="60" y2="86" stroke="#DDD6FE" strokeWidth="2" />
        <line x1="10" y1="48" x2="110" y2="48" stroke="#DDD6FE" strokeWidth="2" />
        <circle cx="60" cy="10" r="5" fill="#DDD6FE" />
        <circle cx="110" cy="48" r="5" fill="#DDD6FE" />
        <circle cx="10" cy="48" r="5" fill="#DDD6FE" />
        <circle cx="60" cy="86" r="5" fill="#DDD6FE" />
      </g>

      {/* Intel Synapse Orb */}
      <g transform="translate(88, 86)" className="transition-transform duration-500 ease-out group-hover:scale-110">
        <circle cx="38" cy="38" r="36" fill="url(#cintel-violet-glow)" />
        <circle cx="26" cy="24" r="4.5" fill="#FFFFFF" opacity="0.9" />
        <ellipse cx="38" cy="38" rx="46" ry="14" stroke="#DDD6FE" strokeWidth="1.8" fill="none" opacity="0.85" transform="rotate(-18 38 38)" />
      </g>

      {/* Data Circuit Track */}
      <g transform="translate(24, 118)">
        <rect x="0" y="0" width="54" height="34" rx="8" fill="#4C1D95" />
        <circle cx="18" cy="17" r="6" fill="#C4B5FD" />
        <line x1="26" y1="17" x2="44" y2="17" stroke="#DDD6FE" strokeWidth="2" />
      </g>
    </svg>
  );
}

// 9. Data Intelligence: S-Curve Waveform Flow Ribbon & Isometric Stack Cylinders
function DatasetsArtwork() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl overflow-visible">
      <defs>
        <pattern id="data-stripes" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="#78350F" strokeWidth="1.6" opacity="0.75" />
        </pattern>
        <radialGradient id="data-gold-glow" cx="30%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="30%" stopColor="#F59E0B" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </radialGradient>
      </defs>

      {/* S-Curved Data Flow Ribbon Arch */}
      <g transform="translate(38, 38)" className="transition-transform duration-500 ease-out group-hover:translate-y-[-2px]">
        <path d="M0,0 Q60,0 60,60 Q60,110 120,110 L120,80 Q80,80 80,40 Q80,0 0,0 Z" fill="#F59E0B" />
        <path d="M0,0 Q60,0 60,60 Q60,110 120,110 L120,80 Q80,80 80,40 Q80,0 0,0 Z" fill="url(#data-stripes)" />
      </g>

      {/* Isometric Data Cylinder Blocks */}
      <g transform="translate(30, 96)" className="transition-transform duration-500 ease-out group-hover:scale-105">
        <rect x="0" y="10" width="56" height="42" rx="8" fill="#B45309" />
        <ellipse cx="28" cy="10" rx="28" ry="10" fill="#FBBF24" />
        <ellipse cx="28" cy="10" rx="14" ry="5" fill="#78350F" />
      </g>

      {/* Radiant Golden Insight Orb */}
      <g transform="translate(94, 84)" className="transition-transform duration-500 ease-out group-hover:scale-110">
        <circle cx="38" cy="38" r="36" fill="url(#data-gold-glow)" />
        <circle cx="26" cy="24" r="4.5" fill="#FFFFFF" opacity="0.9" />
        <ellipse cx="38" cy="26" rx="28" ry="7.5" stroke="#FEF3C7" strokeWidth="1.4" fill="none" opacity="0.85" />
        <ellipse cx="38" cy="38" rx="32" ry="9" stroke="#FEF3C7" strokeWidth="1.5" fill="none" opacity="0.85" />
      </g>
    </svg>
  );
}

// 10. Digital Security: Heavy Beveled Diamond Shield, Vault Dial & Cylindrical Keyway
function DigitalSecArtwork() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl overflow-visible">
      <defs>
        <radialGradient id="sec-teal-glow" cx="30%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#CCFBF1" />
          <stop offset="30%" stopColor="#14B8A6" />
          <stop offset="70%" stopColor="#0F766E" />
          <stop offset="100%" stopColor="#042F2E" />
        </radialGradient>
      </defs>

      {/* 3D Beveled Security Shield */}
      <g transform="translate(38, 36)" className="transition-transform duration-500 ease-out group-hover:translate-y-[-2px]">
        <path d="M60,0 L115,22 L115,64 C115,96 60,118 60,118 C60,118 5,96 5,64 L5,22 Z" fill="#0D9488" />
        <path d="M60,0 L115,22 L115,64 C115,96 60,118 60,118 Z" fill="#0F766E" />
        <path d="M60,12 L102,30 L102,62 C102,88 60,105 60,105 C60,105 18,88 18,62 L18,30 Z" stroke="#5EEAD4" strokeWidth="2" fill="none" opacity="0.85" />
      </g>

      {/* Rotating Vault Dial Core */}
      <g transform="translate(86, 86)" className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-45">
        <circle cx="38" cy="38" r="36" fill="url(#sec-teal-glow)" />
        <circle cx="26" cy="24" r="4.5" fill="#FFFFFF" opacity="0.9" />
        <circle cx="38" cy="38" r="22" stroke="#CCFBF1" strokeWidth="2" strokeDasharray="6 4" fill="none" />
        <circle cx="38" cy="38" r="10" fill="#042F2E" />
        <circle cx="38" cy="38" r="4" fill="#5EEAD4" />
      </g>

      {/* Keyway Lock Base */}
      <g transform="translate(24, 116)">
        <rect x="0" y="0" width="56" height="36" rx="8" fill="#115E59" />
        <circle cx="28" cy="18" r="8" fill="#2DD4BF" />
        <rect x="26" y="18" width="4" height="8" fill="#042F2E" />
      </g>
    </svg>
  );
}

// 11. Product Innovation: 4-Quadrant Geometric Origami Architecture (Cone, Half-Sphere, Prism)
function CampaignArtwork() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl overflow-visible">
      <defs>
        <pattern id="innov-stripes" width="6" height="6" patternUnits="userSpaceOnUse">
          <line x1="0" y1="3" x2="6" y2="3" stroke="#7C2D12" strokeWidth="1.5" opacity="0.65" />
        </pattern>
        <radialGradient id="innov-orange-glow" cx="30%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#FFEDD5" />
          <stop offset="30%" stopColor="#FB923C" />
          <stop offset="70%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#7C2D12" />
        </radialGradient>
      </defs>

      {/* Quadrant 1: Rounded Rocket Arch */}
      <g transform="translate(36, 44)" className="transition-transform duration-500 ease-out group-hover:translate-y-[-3px]">
        <path d="M0,28 Q0,0 30,0 Q60,0 60,28 L60,54 L0,54 Z" fill="#FB923C" />
        <path d="M0,28 Q0,0 30,0 Q60,0 60,28 L60,54 L0,54 Z" fill="url(#innov-stripes)" />
      </g>

      {/* Quadrant 2: Concentric Circular Dial */}
      <g transform="translate(108, 42)" className="transition-transform duration-500 ease-out group-hover:scale-108">
        <circle cx="28" cy="28" r="28" fill="#EA580C" />
        <circle cx="28" cy="28" r="20" stroke="#FFEDD5" strokeWidth="1.6" fill="none" opacity="0.9" />
        <circle cx="28" cy="28" r="10" stroke="#FFEDD5" strokeWidth="1.6" fill="none" opacity="0.8" />
        <circle cx="28" cy="28" r="4" fill="#FFFFFF" />
      </g>

      {/* Quadrant 3: 3D Innovation Flame Sphere */}
      <g transform="translate(36, 102)" className="transition-transform duration-500 ease-out group-hover:scale-110">
        <circle cx="30" cy="30" r="28" fill="url(#innov-orange-glow)" />
        <circle cx="20" cy="18" r="4" fill="#FFFFFF" opacity="0.9" />
        <ellipse cx="30" cy="30" rx="36" ry="10" stroke="#FFEDD5" strokeWidth="1.5" fill="none" opacity="0.85" transform="rotate(-15 30 30)" />
      </g>

      {/* Quadrant 4: Wedge Fan Arc */}
      <g transform="translate(108, 102)" className="transition-transform duration-500 ease-out group-hover:translate-x-1">
        <path d="M0,0 Q56,0 56,54 L0,54 Z" fill="#C2410C" />
        <path d="M8,0 Q50,8 50,46" stroke="#FFEDD5" strokeWidth="1.6" fill="none" opacity="0.85" />
        <path d="M20,0 Q42,16 42,38" stroke="#FFEDD5" strokeWidth="1.6" fill="none" opacity="0.85" />
      </g>
    </svg>
  );
}

// 12. Cyber Safe India: Saffron Sunburst Arch, 24-Spoke Ashoka Chakra & Emerald Foundation
function CyberSafeIndiaArtwork() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl overflow-visible">
      <defs>
        <radialGradient id="india-sunburst-glow" cx="30%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="30%" stopColor="#F59E0B" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </radialGradient>
      </defs>

      {/* Saffron Arch Canopy (Top) */}
      <g transform="translate(38, 38)" className="transition-transform duration-500 ease-out group-hover:translate-y-[-3px]">
        <path d="M0,64 Q58,-16 116,64 L116,80 L0,80 Z" fill="#F97316" />
        <path d="M14,64 Q58,4 102,64" stroke="#FFEDD5" strokeWidth="1.8" fill="none" opacity="0.85" />
        <path d="M28,64 Q58,22 88,64" stroke="#FFEDD5" strokeWidth="1.8" fill="none" opacity="0.85" />
      </g>

      {/* Ashoka Chakra Radiating Solar Core */}
      <g transform="translate(48, 88)" className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-45">
        <circle cx="44" cy="44" r="40" fill="url(#india-sunburst-glow)" />
        <circle cx="30" cy="28" r="5" fill="#FEF9C3" opacity="0.9" />
        <circle cx="44" cy="44" r="28" stroke="#003135" strokeWidth="1.8" fill="none" opacity="0.8" />
        <line x1="44" y1="16" x2="44" y2="72" stroke="#003135" strokeWidth="1.5" opacity="0.8" />
        <line x1="16" y1="44" x2="72" y2="44" stroke="#003135" strokeWidth="1.5" opacity="0.8" />
        <line x1="24" y1="24" x2="64" y2="64" stroke="#003135" strokeWidth="1.5" opacity="0.8" />
        <line x1="24" y1="64" x2="64" y2="24" stroke="#003135" strokeWidth="1.5" opacity="0.8" />
        <circle cx="44" cy="44" r="7" fill="#003135" />
        <circle cx="44" cy="44" r="3" fill="#FEF08A" />
      </g>

      {/* Emerald Base Foundation Block */}
      <g transform="translate(108, 114)" className="transition-transform duration-500 ease-out group-hover:translate-x-1">
        <rect x="0" y="0" width="58" height="46" rx="9" fill="#059669" />
        <circle cx="29" cy="23" r="12" stroke="#A7F3D0" strokeWidth="1.8" fill="none" opacity="0.85" />
        <circle cx="29" cy="23" r="5" fill="#A7F3D0" />
      </g>
    </svg>
  );
}

// ----------------------------------------------------------------------
// Custom Top-Right Card Outlined Icons for 12 Categories
// ----------------------------------------------------------------------

function TopRightIcon({ type }) {
  switch (type) {
    case 'Layers':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#0FA4AF] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'ShieldCheck':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#0284C7] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'Search':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#6366F1] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <circle cx="11" cy="11" r="3" strokeDasharray="2 2" />
        </svg>
      );
    case 'Bot':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#A855F7] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8.01" y2="16" strokeWidth="3" />
          <line x1="16" y1="16" x2="16.01" y2="16" strokeWidth="3" />
        </svg>
      );
    case 'Landmark':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#10B981] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="22" x2="21" y2="22" />
          <line x1="6" y1="18" x2="6" y2="11" />
          <line x1="10" y1="18" x2="10" y2="11" />
          <line x1="14" y1="18" x2="14" y2="11" />
          <line x1="18" y1="18" x2="18" y2="11" />
          <polygon points="12 2 20 7 4 7" />
        </svg>
      );
    case 'Scale':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#F43F5E] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="M7 21h10" />
          <path d="M12 3v18" />
          <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
        </svg>
      );
    case 'Cloud':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#3B82F6] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      );
    case 'Brain':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#8B5CF6] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04" />
        </svg>
      );
    case 'BarChart3':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#F59E0B] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case 'Lock':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#0D9488] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case 'Rocket':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#EA580C] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    case 'ShieldAlert':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#F97316] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="3" />
        </svg>
      );
    default:
      return null;
  }
}

// ----------------------------------------------------------------------
// Main IntroductionPage Component
// ----------------------------------------------------------------------

export default function IntroductionPage({ onClose }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const handleBack = () => {
    if (onClose) {
      onClose();
    } else {
      window.location.hash = '#introduction';
    }
  };

  const handleHome = () => {
    if (onClose) {
      onClose();
    }
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const getArtworkComponent = (id) => {
    switch (id) {
      case 'technology-products':
        return <DashboardArtwork />;
      case 'cybersecurity':
        return <BillingArtwork />;
      case 'investigation-intelligence':
        return <InvestigationArtwork />;
      case 'artificial-intelligence':
        return <RealtimeArtwork />;
      case 'government-technology':
        return <GovTechArtwork />;
      case 'digital-forensics':
        return <UsersArtwork />;
      case 'saas-products':
        return <CloudSaasArtwork />;
      case 'cyber-intelligence':
        return <CyberIntelArtwork />;
      case 'data-intelligence':
        return <DatasetsArtwork />;
      case 'digital-security':
        return <DigitalSecArtwork />;
      case 'product-innovation':
        return <CampaignArtwork />;
      case 'cyber-safe-india':
        return <CyberSafeIndiaArtwork />;
      default:
        return <DashboardArtwork />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-brand-rust selection:text-white font-sans">
      <style>{`
        .custom-card-scroll::-webkit-scrollbar,
        .card-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-card-scroll::-webkit-scrollbar-button,
        .card-scroll::-webkit-scrollbar-button {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .custom-card-scroll::-webkit-scrollbar-track,
        .card-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-card-scroll::-webkit-scrollbar-thumb,
        .card-scroll::-webkit-scrollbar-thumb {
          background: rgba(15, 164, 175, 0.4);
          border-radius: 9999px;
        }
        .custom-card-scroll::-webkit-scrollbar-thumb:hover,
        .card-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(15, 164, 175, 0.75);
        }
        .custom-card-scroll,
        .card-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(15, 164, 175, 0.4) transparent;
        }

        .group:hover .custom-card-scroll::-webkit-scrollbar-thumb,
        .group:hover .card-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.5);
        }
        .group:hover .custom-card-scroll,
        .group:hover .card-scroll {
          scrollbar-color: rgba(255, 255, 255, 0.5) transparent;
        }
      `}</style>
      
      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex items-center justify-start gap-3 z-30">
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

      {/* Main Page Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Page Hero Header Banner */}
        <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16 relative px-2 sm:px-4">
          
          {/* Ambient Background Aura behind Header */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[540px] h-[200px] sm:h-[260px] bg-gradient-to-r from-[#0FA4AF]/15 via-[#00A4B4]/10 to-[#0E7980]/15 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Animated Badge Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0FA4AF]/15 via-white to-[#00A4B4]/15 border border-[#0FA4AF]/30 text-[#0E7980] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#0FA4AF] animate-pulse" />
            <span>{introductionPageData.header.badge}</span>
          </motion.div>

          {/* Animated Main Title: "Introduction" */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.15] text-[#081E52] mb-2 sm:mb-3"
          >
            <span className="bg-gradient-to-r from-[#003135] via-[#0E7980] to-[#0FA4AF] bg-clip-text text-transparent">
              {introductionPageData.header.title}
            </span>
          </motion.h1>

          {/* Animated Decorative Divider Bar */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "80px", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-[#0FA4AF] via-[#00A4B4] to-[#0FA4AF] rounded-full mx-auto mb-5 sm:mb-6 shadow-sm"
          />

          {/* Animated Description with Highlighting in a Glass Container */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-6 sm:p-8 lg:p-9 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-md border border-[#0FA4AF]/20 shadow-[0_10px_30px_-10px_rgba(15,164,175,0.12)] text-center text-slate-700 text-[13.5px] sm:text-[15px] lg:text-[15.5px] leading-relaxed sm:leading-[1.8] font-normal"
          >
            <p>
              {introductionPageData.header.subtitle ? (
                introductionPageData.header.subtitle
              ) : (
                <>
                  <strong className="font-semibold text-[#081E52] italic">IB Cyber Security Private Limited (IBCS)</strong> is a technology-driven product company building secure, intelligent, and scalable digital solutions for government, law enforcement, enterprises, and financial institutions. IBCS develops innovative cybersecurity platforms, investigation and intelligence tools, AI-powered solutions, government technology platforms, digital evidence and forensic systems, and SaaS products. With a strong focus on innovation, reliability, customization, and advanced technology, we transform complex digital challenges into purposeful products that strengthen security, intelligence, and decision-making, advancing our vision of a <strong className="font-semibold text-[#0E7980] italic">Cyber Safe India</strong>.
                </>
              )}
            </p>
          </motion.div>
        </div>

        {/* 12 Grid Cards Layout - Responsive: 1 col on mobile, 2 on tablet, 3 on laptop, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 w-full">
          {introductionPageData.cards.map((card, index) => {
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 * index }}
                whileHover={{ 
                  y: -6, 
                  transition: { duration: 0.3 } 
                }}
                whileTap={{ scale: 0.99 }}
                style={{
                  boxShadow: `0 14px 35px -12px ${card.glowColor}, 0 0 0 1px rgba(226, 232, 240, 0.85)`,
                  isolation: 'isolate'
                }}
                className="group relative rounded-[22px] sm:rounded-[26px] overflow-hidden border cursor-pointer flex flex-col justify-between min-h-[410px] sm:min-h-[440px] lg:min-h-[460px] p-5 sm:p-6 lg:p-7 bg-white border-slate-200/90 text-slate-900 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                {/* Dynamic Corner Expanding Liquid Fill Layer on Hover (z-0) */}
                <div 
                  className={`absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br ${card.bgGradient} transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-0 pointer-events-none transform scale-0 group-hover:scale-[8.5] origin-center shadow-2xl`}
                />

                {/* Subtle Ambient Glow (z-0) */}
                <div 
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-40 z-0"
                  style={{ backgroundColor: card.accentHex }}
                />

                {/* 3D Geometric Artwork Sculpture (z-10 Background Layer - bottom-right, full clearance) */}
                <div className="absolute right-[-10px] bottom-[-10px] w-[130px] h-[120px] sm:w-[145px] sm:h-[135px] lg:w-[155px] lg:h-[145px] z-10 pointer-events-none transition-all duration-500 ease-out group-hover:scale-108 group-hover:-translate-y-1 group-hover:rotate-[-2deg] opacity-80 group-hover:opacity-100 overflow-visible">
                  {getArtworkComponent(card.id)}
                </div>

                {/* Card Header (Title & Top-Right Icon) - Layered on z-20 */}
                <div className="relative z-20">
                  
                  {/* Top Row: Title & Top-Right Icon */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="pr-1 sm:pr-2">
                      <h2 className="font-display text-[19px] sm:text-[21px] lg:text-[22px] font-bold tracking-tight leading-snug text-slate-900 group-hover:text-white transition-colors duration-500 ease-out drop-shadow-sm">
                        {card.title}
                      </h2>
                      {card.subtitle && (
                        <p className="text-[11.5px] sm:text-[12.5px] font-semibold text-[#0FA4AF] group-hover:text-white/80 transition-colors mt-0.5">
                          {card.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Top Right Icon */}
                    <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-115">
                      <TopRightIcon type={card.iconName} />
                    </div>
                  </div>

                  {/* Scrollable Full Description Container */}
                  <div className="mt-3 sm:mt-3.5 max-h-[170px] sm:max-h-[190px] lg:max-h-[210px] overflow-y-auto px-1 custom-card-scroll pointer-events-auto bg-transparent">
                    <p className="text-[12px] sm:text-[12.5px] lg:text-[13px] leading-[1.65] font-normal text-slate-600 group-hover:text-white/95 transition-colors duration-300 drop-shadow-sm select-text">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Action Area with Equal Margins & Symmetry (z-20) */}
                <div className="relative z-20 flex items-center justify-between mt-3 sm:mt-4 pt-2.5 border-t border-slate-100/90 group-hover:border-white/20 transition-colors duration-300">
                  {/* Circular Arrow Button (Bottom-Left) */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm bg-slate-100 text-slate-800 group-hover:bg-white/25 group-hover:text-white border border-transparent group-hover:border-white/30">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>

                  {/* Right Action Hint for Balanced Symmetry */}
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-400 group-hover:text-white/85 transition-colors duration-300 tracking-wide">
                    Explore Domain →
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </main>

    </div>
  );
}
