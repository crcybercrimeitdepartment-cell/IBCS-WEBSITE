/**
 * ============================================================================
 * ITConsultingServicesPage.jsx
 * ============================================================================
 * Futuristic 3D Cyber Briefcase Interactive Showcase
 * 
 * Exact reproduction of the high-tech briefcase UI:
 * - Circular 3D glowing pedestal with neon blue floor rings and specular reflections.
 * - Heavy-duty executive cyber briefcase with chrome hardware, dual clasps, and
 *   arched handle with neon LED strip.
 * - Recessed glassmorphic cockpit screen displaying:
 *     * Active service icon badge, title, subtitle
 *     * Service description (preserving all 50 original sections & descriptions)
 *     * "Explore Service ->" glowing blue pill button
 *     * 3D Isometric tech workstation artwork (laptop, React atom, JS/CSS chips, desk plant)
 *     * 4-column key metrics bar (100+ Projects, 50+ Clients, 4.8 Rating, 24/7 Support)
 * - Overhead glowing semi-circular arc of 9 interactive service nodes:
 *     1. Cloud Services (amber)
 *     2. IT Consulting (electric blue)
 *     3. UI/UX Design (cyan)
 *     4. Mobile App Development (purple)
 *     5. Web Development (center-top active, neon cyan/blue with energy beam to handle)
 *     6. Cybersecurity (coral/red)
 *     7. Data Analytics (emerald green)
 *     8. DevOps (violet)
 *     9. Support & Maintenance (golden yellow)
 * - Comprehensive navigation:
 *     * Seamless access to all 50 in-depth sections
 *     * Previous / Next buttons & ArrowLeft / ArrowRight keyboard navigation
 *     * Expandable "All 50 Services (1–50)" quick-jump matrix drawer
 * ============================================================================
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Home
} from 'lucide-react';
import { IT_CONSULTING_SECTIONS, getSectionIcon } from './ITConsultingServicesPageData';

/**
 * ----------------------------------------------------------------------------
 * 9 VIBRANT COLOR PALETTES FOR ALL 50 SERVICES (REPEATING PATTERN)
 * ----------------------------------------------------------------------------
 */
const VIBRANT_PALETTES = [
  { color: '#f59e0b', iconColor: '#fbbf24', rgb: '245, 158, 11', glowColor: 'rgba(245, 158, 11, 0.75)' }, // Amber / Gold
  { color: '#00a2ff', iconColor: '#38bdf8', rgb: '0, 162, 255', glowColor: 'rgba(0, 162, 255, 0.75)' },  // Electric Blue
  { color: '#00e5ff', iconColor: '#22d3ee', rgb: '0, 229, 255', glowColor: 'rgba(0, 229, 255, 0.75)' },  // Turquoise / Cyan
  { color: '#c084fc', iconColor: '#e879f9', rgb: '192, 132, 252', glowColor: 'rgba(192, 132, 252, 0.75)' }, // Magenta / Purple
  { color: '#38bdf8', iconColor: '#00f0ff', rgb: '56, 189, 248', glowColor: 'rgba(0, 240, 255, 0.85)' },  // Neon Cyan / Blue
  { color: '#f43f5e', iconColor: '#fb7185', rgb: '244, 63, 94', glowColor: 'rgba(244, 63, 94, 0.75)' },   // Coral / Ruby Red
  { color: '#10b981', iconColor: '#34d399', rgb: '16, 185, 129', glowColor: 'rgba(16, 185, 129, 0.75)' }, // Emerald Green
  { color: '#8b5cf6', iconColor: '#a78bfa', rgb: '139, 92, 246', glowColor: 'rgba(139, 92, 246, 0.75)' }, // Violet / Purple
  { color: '#eab308', iconColor: '#fde047', rgb: '234, 179, 8', glowColor: 'rgba(234, 179, 8, 0.75)' },   // Golden Yellow
];

/**
 * ----------------------------------------------------------------------------
 * 2. 3D ISOMETRIC TECH ARTWORK (LAPTOP, REACT ATOM, JS/CSS CHIPS, PLANT)
 * ----------------------------------------------------------------------------
 */

/**
 * ----------------------------------------------------------------------------
 * 2. 3D ISOMETRIC TECH ARTWORK (LAPTOP, REACT ATOM, JS/CSS CHIPS, PLANT)
 * ----------------------------------------------------------------------------
 */
function IsometricTechArtwork() {
  return (
    <div className="iso-tech-container" aria-hidden="true">
      {/* Concentric Glowing Base Rings */}
      <div className="iso-pedestal">
        <div className="iso-pedestal-ring iso-pedestal-ring--outer" />
        <div className="iso-pedestal-ring iso-pedestal-ring--inner" />
        <div className="iso-pedestal-glow" />
      </div>

      {/* 3D Isometric Tech Workspace Scene */}
      <svg
        className="iso-tech-svg"
        viewBox="0 0 340 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="laptopScreenGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0b2246" />
            <stop offset="50%" stopColor="#051530" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          <linearGradient id="laptopChassisGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="keyboardGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <filter id="neonBlueGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="reactAtomGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Ground Glow Ellipse */}
        <ellipse cx="170" cy="180" rx="120" ry="46" fill="#0284c7" fillOpacity="0.18" />
        <ellipse cx="170" cy="180" rx="90" ry="34" stroke="#00d2ff" strokeOpacity="0.4" strokeWidth="1.5" />

        {/* --- Isometric Laptop Base & Keyboard --- */}
        <g transform="translate(15, 5)">
          {/* Base bottom extrusion / shadow */}
          <polygon
            points="140,195 240,145 170,110 70,160"
            fill="#090d16"
            stroke="#1e293b"
            strokeWidth="1"
          />
          {/* Base top surface */}
          <polygon
            points="140,190 238,141 170,107 72,156"
            fill="url(#laptopChassisGrad)"
            stroke="#38bdf8"
            strokeOpacity="0.5"
            strokeWidth="1.2"
          />

          {/* Keyboard recessed tray */}
          <polygon
            points="140,175 220,135 175,113 95,153"
            fill="url(#keyboardGrad)"
            stroke="#0ea5e9"
            strokeOpacity="0.3"
            strokeWidth="1"
          />

          {/* Trackpad */}
          <polygon
            points="128,185 152,173 146,169 122,181"
            fill="#334155"
            fillOpacity="0.6"
            stroke="#00d2ff"
            strokeOpacity="0.4"
            strokeWidth="0.8"
          />

          {/* Keyboard glow lines */}
          <line x1="110" y1="152" x2="190" y2="128" stroke="#38bdf8" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="118" y1="158" x2="198" y2="134" stroke="#38bdf8" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="126" y1="164" x2="206" y2="140" stroke="#38bdf8" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 2" />

          {/* --- Open Laptop Display / Screen Lid --- */}
          {/* Screen Outer Bezel */}
          <polygon
            points="70,157 70,62 170,22 170,107"
            fill="#090f1d"
            stroke="#0284c7"
            strokeWidth="1.5"
          />
          {/* Screen Display Area with Gradient */}
          <polygon
            points="76,151 76,69 164,33 164,103"
            fill="url(#laptopScreenGrad)"
            stroke="#00f0ff"
            strokeOpacity="0.8"
            strokeWidth="1"
          />

          {/* Screen Code Lines & Terminal Graphics */}
          {/* Top Code Bracket Badge [</>] */}
          <g filter="url(#neonBlueGlow)">
            <rect x="90" y="58" width="28" height="15" rx="3" fill="#0369a1" fillOpacity="0.6" stroke="#38bdf8" strokeWidth="1" />
            <text x="96" y="69" fill="#e0f2fe" fontSize="8" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
          </g>

          {/* Glowing Code Lines on Screen */}
          <line x1="88" y1="84" x2="148" y2="60" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
          <line x1="88" y1="94" x2="130" y2="78" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="96" y1="104" x2="152" y2="82" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="6 3" />
          <line x1="96" y1="114" x2="138" y2="98" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="88" y1="124" x2="124" y2="110" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="88" y1="134" x2="144" y2="112" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2" />

          {/* Glowing cursor tick */}
          <circle cx="146" cy="111" r="2" fill="#00f0ff" filter="url(#neonBlueGlow)" />
        </g>

        {/* --- Floating Badges --- */}
        {/* 1. React Floating Atom Icon (Top Right of Laptop) */}
        <g transform="translate(230, 68)" className="animate-spin-slow" filter="url(#reactAtomGlow)">
          <ellipse cx="0" cy="0" rx="16" ry="6" stroke="#00d2ff" strokeWidth="1.3" fill="none" />
          <ellipse cx="0" cy="0" rx="16" ry="6" stroke="#00d2ff" strokeWidth="1.3" fill="none" transform="rotate(60)" />
          <ellipse cx="0" cy="0" rx="16" ry="6" stroke="#00d2ff" strokeWidth="1.3" fill="none" transform="rotate(120)" />
          <circle cx="0" cy="0" r="3" fill="#38bdf8" />
        </g>

        {/* 2. Floating JS Badge (Yellow Chip) */}
        <g transform="translate(210, 162)">
          <polygon points="0,0 24,-10 24,12 0,22" fill="#ca8a04" stroke="#facc15" strokeWidth="1.2" />
          <text x="7" y="10" fill="#0f172a" fontSize="10" fontWeight="900" fontFamily="sans-serif">JS</text>
        </g>

        {/* 3. Floating CSS Badge (Blue Chip) */}
        <g transform="translate(236, 150)">
          <polygon points="0,0 24,-10 24,12 0,22" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.2" />
          <text x="3" y="10" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="sans-serif">CSS</text>
        </g>

        {/* --- Potted Succulent Plant (Left of Laptop) --- */}
        <g transform="translate(68, 165)">
          {/* Pot Shadow */}
          <ellipse cx="8" cy="22" rx="10" ry="4" fill="#021024" fillOpacity="0.8" />
          {/* Ceramic Pot Body */}
          <polygon points="0,6 16,6 13,20 3,20" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.8" />
          {/* Soil */}
          <ellipse cx="8" cy="6" rx="8" ry="2.5" fill="#475569" />
          {/* Succulent Leaves */}
          <path d="M8,6 C6,-4 1,-1 3,6 Z" fill="#22c55e" stroke="#15803d" strokeWidth="0.8" />
          <path d="M8,6 C10,-6 15,-2 13,6 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="0.8" />
          <path d="M8,6 C7,-10 9,-8 8,6 Z" fill="#16a34a" stroke="#14532d" strokeWidth="0.8" />
          <path d="M8,6 C3,2 -2,0 2,6 Z" fill="#86efac" stroke="#22c55e" strokeWidth="0.8" />
          <path d="M8,6 C13,2 18,1 14,6 Z" fill="#22c55e" stroke="#16a34a" strokeWidth="0.8" />
        </g>

        {/* Floating Code Glyph [</>] in Upper Air */}
        <g transform="translate(186, 102)" filter="url(#neonBlueGlow)">
          <rect x="0" y="0" width="28" height="20" rx="4" fill="#0f172a" fillOpacity="0.8" stroke="#00e5ff" strokeWidth="1.2" />
          <text x="4" y="14" fill="#00e5ff" fontSize="10" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
        </g>
      </svg>
    </div>
  );
}

/**
 * ----------------------------------------------------------------------------
 * 3. EMBEDDED COMPONENT STYLES
 * ----------------------------------------------------------------------------
 */
const SHOWCASE_STYLES = `
/* ==========================================================================
   RESET & FOUNDATIONS (PREMIUM LIGHT THEME)
   ========================================================================== */
.ib-showcase {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  background:
    radial-gradient(ellipse 80% 50% at 50% 12%, rgba(255, 255, 255, 0.98), transparent 60%),
    radial-gradient(circle at 10% 30%, rgba(186, 230, 253, 0.5), transparent 42%),
    radial-gradient(circle at 90% 35%, rgba(191, 219, 254, 0.45), transparent 42%),
    linear-gradient(180deg, #f0f9ff 0%, #dcf0ff 48%, #bae6fd 100%);
  color: #071941;
  font-family: Outfit, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  overflow-x: hidden;
  padding: 24px 16px 40px;
  box-sizing: border-box;
}

.ib-showcase * {
  box-sizing: border-box;
}

/* Ambient soft cyan bokeh lights for light theme */
.ib-bokeh-light {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
}
.ib-bokeh-light--left {
  top: 60px;
  left: 5%;
  width: 280px;
  height: 280px;
  background: rgba(56, 189, 248, 0.35);
}
.ib-bokeh-light--right {
  top: 80px;
  right: 5%;
  width: 300px;
  height: 300px;
  background: rgba(14, 165, 233, 0.3);
}

/* ==========================================================================
   HEADER SECTION
   ========================================================================== */
.ib-header {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 880px;
  margin: 0 auto 12px;
}

.ib-header__title {
  margin: 0;
  font-size: clamp(24px, 3.2vw, 38px);
  font-weight: 850;
  letter-spacing: -0.01em;
  line-height: 1.15;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 4px 0;
  perspective: 1000px;
}

.ib-header__letter {
  display: inline-block;
  background: linear-gradient(135deg, #031b3e 0%, #074786 55%, #0284c7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(2, 40, 90, 0.12));
  transform-origin: center center;
  transform-style: preserve-3d;
  animation: letterRollDown 0.85s cubic-bezier(0.25, 1.4, 0.5, 1) both;
}

@keyframes letterRollDown {
  0% {
    opacity: 0;
    transform: translateY(-110px) rotate(-360deg) rotateX(-90deg) scale(0.4);
    filter: blur(8px);
  }
  60% {
    opacity: 1;
    transform: translateY(10px) rotate(35deg) rotateX(15deg) scale(1.12);
    filter: blur(0);
  }
  80% {
    transform: translateY(-5px) rotate(-15deg) rotateX(-5deg) scale(0.96);
  }
  92% {
    transform: translateY(2px) rotate(5deg) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0deg) rotateX(0deg) scale(1);
    filter: blur(0);
  }
}

.ib-header__desc {
  margin: 10px auto 0;
  font-size: clamp(13.5px, 1.1vw, 15px);
  color: #173f6c;
  max-width: 840px;
  line-height: 1.6;
  animation: headerDescReveal 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.95s both;
}

@keyframes headerDescReveal {
  0% {
    opacity: 0;
    transform: translateY(18px);
    filter: blur(6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

/* ==========================================================================
   MAIN STAGE & THE 3D CYBER BRIEFCASE
   ========================================================================== */
.ib-stage {
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  margin: 20px auto 0;
}

.ib-briefcase {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* --- BRIEFCASE TOP HANDLE --- */
.ib-handle-assembly {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -16px;
  z-index: 12;
}

.ib-handle-arch {
  width: 170px;
  height: 48px;
  border: 11px solid #1e293b;
  border-bottom: none;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: transparent;
  box-shadow:
    inset 0 3px 6px rgba(255, 255, 255, 0.25),
    0 -3px 8px rgba(0, 0, 0, 0.8);
  position: relative;
}

/* Metallic bronze/chrome handle brackets */
.ib-handle-bracket {
  position: absolute;
  bottom: -6px;
  width: 22px;
  height: 24px;
  background: linear-gradient(135deg, #e2e8f0 0%, #94a3b8 50%, #475569 100%);
  border-radius: 4px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.7),
    inset 0 1px 2px rgba(255, 255, 255, 0.8);
  border: 1px solid #cbd5e1;
}
.ib-handle-bracket--left {
  left: 2px;
}
.ib-handle-bracket--right {
  right: 2px;
}

/* Glowing blue LED light strip under handle base */
.ib-handle-led {
  width: 130px;
  height: 4px;
  background: #00e5ff;
  border-radius: 2px;
  box-shadow: 0 0 14px #00f0ff, 0 0 24px rgba(0, 240, 255, 0.8);
  margin-top: -2px;
  z-index: 14;
}

/* --- BRIEFCASE OUTER SHELL --- */
.ib-briefcase-shell {
  position: relative;
  width: 100%;
  background: linear-gradient(180deg, #162438 0%, #0d1726 45%, #080f1a 100%);
  border-radius: 38px;
  padding: 24px 26px;
  box-shadow:
    0 24px 50px -10px rgba(0, 0, 0, 0.95),
    inset 0 2px 4px rgba(255, 255, 255, 0.2),
    inset 0 -3px 6px rgba(0, 0, 0, 0.8),
    0 0 0 2px #1e293b,
    0 0 0 4px #090e17;
  overflow: hidden;
}

/* Cyber Neon Accent Bars on Left and Right Sides */
.ib-cyber-bar {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 60px;
  border-radius: 3px;
  background: #00f0ff;
  box-shadow: 0 0 16px #00f0ff, 0 0 28px rgba(0, 240, 255, 0.8);
  z-index: 15;
}
.ib-cyber-bar--left {
  left: 8px;
}
.ib-cyber-bar--right {
  right: 8px;
}

/* Secondary corner accent lights */
.ib-cyber-notch {
  position: absolute;
  width: 4px;
  height: 18px;
  border-radius: 2px;
  background: #00d2ff;
  box-shadow: 0 0 10px #00d2ff;
}
.ib-cyber-notch--tl { top: 32px; left: 10px; }
.ib-cyber-notch--bl { bottom: 32px; left: 10px; }
.ib-cyber-notch--tr { top: 32px; right: 10px; }
.ib-cyber-notch--br { bottom: 32px; right: 10px; }

/* --- RECESSED SCREEN DISPLAY BEZEL --- */
.ib-screen {
  position: relative;
  width: 100%;
  background: linear-gradient(155deg, rgba(8, 26, 54, 0.96) 0%, rgba(3, 14, 30, 0.98) 100%);
  border-radius: 26px;
  border: 1.8px solid rgba(56, 189, 248, 0.65);
  box-shadow:
    0 0 35px rgba(2, 132, 199, 0.35),
    inset 0 0 25px rgba(2, 132, 199, 0.2),
    0 12px 30px rgba(0, 0, 0, 0.8);
  padding: 28px 28px 22px;
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 430px;
  justify-content: space-between;
}

/* Screen Main Row (Split: Left Content, Right 3D Art) */
.ib-screen-main {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 28px;
  align-items: center;
  min-height: 250px;
}

@media (max-width: 820px) {
  .ib-screen-main {
    grid-template-columns: 1fr;
    gap: 20px;
    min-height: auto;
  }
}

/* Left Content Column */
.ib-screen-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  z-index: 5;
  height: 100%;
}

/* Service Header Block */
.ib-service-header {
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 60px;
}

.ib-service-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 14px;
  background: radial-gradient(circle at 35% 35%, rgba(14, 116, 144, 0.45), rgba(3, 105, 161, 0.2));
  border: 1.5px solid #38bdf8;
  box-shadow:
    0 0 18px rgba(56, 189, 248, 0.45),
    inset 0 0 10px rgba(56, 189, 248, 0.25);
  color: #38bdf8;
  flex-shrink: 0;
}

.ib-service-titles {
  display: flex;
  flex-direction: column;
  min-height: 52px;
  justify-content: center;
}

.ib-service-title {
  margin: 0;
  font-size: clamp(20px, 2vw, 26px);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.ib-service-subtitle {
  margin: 4px 0 0;
  font-size: clamp(12.5px, 1.1vw, 14px);
  font-weight: 600;
  color: #38bdf8;
  letter-spacing: 0.01em;
}

/* Service Description Paragraph with fixed uniform height across all sections */
.ib-service-desc {
  margin: 0;
  font-size: clamp(13px, 1.05vw, 14.5px);
  line-height: 1.6;
  color: #cbd5e1;
  height: 155px;
  min-height: 155px;
  max-height: 155px;
  overflow-y: auto;
  padding-right: 8px;
}

.ib-service-desc::-webkit-scrollbar {
  width: 5px;
}
.ib-service-desc::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.4);
  border-radius: 4px;
}
.ib-service-desc::-webkit-scrollbar-thumb {
  background: rgba(56, 189, 248, 0.4);
  border-radius: 4px;
}
.ib-service-desc::-webkit-scrollbar-thumb:hover {
  background: rgba(56, 189, 248, 0.7);
}

/* Right Column: 3D Isometric Artwork Container */
.iso-tech-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 200px;
}

.iso-tech-svg {
  width: 100%;
  max-width: 320px;
  height: auto;
  filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.7));
}

/* --- BOTTOM 50-ICONS AUTO-SCROLLING TICKER STRIP --- */
.ib-screen-ticker-container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 14px;
  border-top: 1px solid rgba(56, 189, 248, 0.25);
}

.ib-ticker-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(8, 20, 42, 0.9);
  border: 1px solid rgba(56, 189, 248, 0.4);
  color: #38bdf8;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s ease;
  box-shadow: 0 0 10px rgba(2, 132, 199, 0.3);
  z-index: 5;
}

.ib-ticker-arrow:hover {
  background: #0284c7;
  color: #ffffff;
  border-color: #00f0ff;
  transform: scale(1.12);
  box-shadow: 0 0 16px rgba(0, 240, 255, 0.7);
}

.ib-screen-ticker {
  position: relative;
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  mask-image: linear-gradient(to right, transparent 0%, black 20px, black calc(100% - 20px), transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 20px, black calc(100% - 20px), transparent 100%);
}

.ib-screen-ticker::-webkit-scrollbar {
  display: none;
}

.ib-ticker-track {
  display: flex;
  align-items: center;
  gap: 10px;
  width: max-content;
}

.ib-ticker-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 9999px;
  background: rgba(8, 20, 42, 0.85);
  border: 1px solid rgba(56, 189, 248, 0.25);
  color: #cbd5e1;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  flex-shrink: 0;
  user-select: none;
}

.ib-ticker-chip:hover {
  background: rgba(14, 165, 233, 0.25);
  border-color: var(--chip-color, #38bdf8);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 0 14px var(--chip-glow, rgba(56, 189, 248, 0.4));
}

.ib-ticker-chip--active {
  background: rgba(2, 132, 199, 0.4);
  border-color: #00f0ff;
  color: #ffffff;
  font-weight: 700;
  box-shadow: 0 0 16px rgba(0, 240, 255, 0.55), inset 0 0 8px rgba(0, 240, 255, 0.25);
}

.ib-ticker-chip__num {
  font-size: 10.5px;
  font-weight: 800;
  color: var(--chip-color, #38bdf8);
  opacity: 0.95;
}

.ib-ticker-chip__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 4px var(--chip-glow, rgba(56, 189, 248, 0.4)));
}

/* --- BOTTOM CHROME CLASPS / FEET --- */
.ib-clasps-assembly {
  position: absolute;
  bottom: -15px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0 25%;
  pointer-events: none;
  z-index: 14;
}

.ib-clasp {
  width: 44px;
  height: 26px;
  background: linear-gradient(180deg, #f8fafc 0%, #cbd5e1 45%, #64748b 80%, #334155 100%);
  border-radius: 5px;
  border: 1px solid #e2e8f0;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.8),
    inset 0 1px 2px rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.ib-clasp-groove {
  width: 24px;
  height: 3px;
  background: #1e293b;
  border-radius: 1px;
}

/* ==========================================================================
   3D GLOWING PEDESTAL (BASE STAGE)
   ========================================================================== */
.ib-pedestal-stage {
  position: relative;
  width: 100%;
  max-width: 940px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
  z-index: 3;
}

.ib-pedestal-stage-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

/* ==========================================================================
   CONTROLS & 50 SECTIONS DRAWER (LIGHT THEME STYLING)
   ========================================================================== */
.ib-controls-bar {
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.ib-btn-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.92);
  border: 1.5px solid rgba(2, 132, 199, 0.35);
  color: #072348;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(2, 60, 120, 0.08);
  backdrop-filter: blur(8px);
}

.ib-btn-nav:hover:not(:disabled) {
  background: #0284c7;
  border-color: #0284c7;
  color: #ffffff;
  box-shadow: 0 6px 18px rgba(2, 132, 199, 0.35);
}

.ib-btn-nav:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.ib-counter-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.95);
  border: 1.5px solid rgba(2, 132, 199, 0.35);
  font-size: 13px;
  font-weight: 800;
  color: #0284c7;
  box-shadow: 0 2px 10px rgba(2, 60, 120, 0.08);
}

/* ==========================================================================
   RESPONSIVE MEDIA QUERIES
   ========================================================================== */
@media (max-width: 680px) {
  .ib-showcase {
    padding: 16px 12px 30px;
    overflow-x: hidden;
    max-width: 100vw;
  }
  .ib-stage {
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin: 14px auto 0;
  }
  .ib-briefcase {
    width: 100%;
    max-width: 100%;
  }
  .ib-briefcase-shell {
    width: 100%;
    max-width: 100%;
    padding: 16px 14px;
    border-radius: 28px;
    box-sizing: border-box;
  }
  .ib-screen {
    width: 100%;
    max-width: 100%;
    padding: 20px 14px 16px;
    border-radius: 20px;
    box-sizing: border-box;
  }
  .ib-cyber-bar--left {
    left: 6px;
  }
  .ib-cyber-bar--right {
    right: 6px;
  }
  .ib-cyber-notch--tl { top: 28px; left: 8px; }
  .ib-cyber-notch--bl { bottom: 28px; left: 8px; }
  .ib-cyber-notch--tr { top: 28px; right: 8px; }
  .ib-cyber-notch--br { bottom: 28px; right: 8px; }
  .ib-handle-arch {
    width: 130px;
    height: 38px;
  }
  .ib-handle-led {
    width: 100px;
  }
  .ib-bokeh-light {
    display: none;
  }
  .ib-pedestal-stage {
    max-width: 100%;
    overflow: hidden;
  }
  .ib-pedestal-stage-svg {
    width: 100%;
    overflow: hidden;
  }
}
`;

/**
 * ----------------------------------------------------------------------------
 * 4. MAIN INTERACTIVE SHOWCASE COMPONENT
 * ----------------------------------------------------------------------------
 */
export default function ITConsultingServicesPage({ onClose, onHome }) {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0); // 0 to 49

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

  const tickerRef = useRef(null);
  const isTickerPausedRef = useRef(false);

  const totalSections = IT_CONSULTING_SECTIONS.length;
  const currentSection = IT_CONSULTING_SECTIONS[activeSectionIndex];
  const activePalette = VIBRANT_PALETTES[(currentSection.id - 1) % VIBRANT_PALETTES.length];

  // Slow, smooth continuous auto-scroll for the bottom 50-icons strip
  useEffect(() => {
    let animId;
    const speed = 0.45; // Gentle, slow continuous scroll speed (pixels per frame)

    const loop = () => {
      const el = tickerRef.current;
      if (el && !isTickerPausedRef.current) {
        el.scrollLeft += speed;
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleTickerScrollLeft = () => {
    const el = tickerRef.current;
    if (el) {
      if (el.scrollLeft <= 20) {
        el.scrollLeft += el.scrollWidth / 2;
      }
      el.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const handleTickerScrollRight = () => {
    const el = tickerRef.current;
    if (el) {
      el.scrollBy({ left: 260, behavior: 'smooth' });
      const halfWidth = el.scrollWidth / 2;
      if (el.scrollLeft >= halfWidth) {
        el.scrollLeft -= halfWidth;
      }
    }
  };

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    function onKeyDown(e) {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (e.key === 'ArrowRight') {
        setActiveSectionIndex((prev) => (prev + 1) % totalSections);
      } else if (e.key === 'ArrowLeft') {
        setActiveSectionIndex((prev) => (prev - 1 + totalSections) % totalSections);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [totalSections]);

  const ActiveScreenIcon = getSectionIcon(currentSection.id);

  return (
    <main className="ib-showcase">
      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 flex items-center justify-start gap-3 z-40 relative">
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

      {/* Embedded Stylesheet */}
      <style>{SHOWCASE_STYLES}</style>

      {/* Ambient Bokeh Glows */}
      <div className="ib-bokeh-light ib-bokeh-light--left" aria-hidden="true" />
      <div className="ib-bokeh-light ib-bokeh-light--right" aria-hidden="true" />

      {/* Top Header Section above Suitcase */}
      <header className="ib-header">
        <h1 className="ib-header__title" aria-label="IT Consulting">
          {"IT Consulting".split("").map((char, idx) => (
            <span
              key={idx}
              className="ib-header__letter"
              style={{ animationDelay: `${idx * 0.045}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="ib-header__desc">
          IBCS IT Consulting focuses on helping organisations align technology initiatives with business and operational objectives. Our consulting services provide strategic guidance, architectural reviews, and roadmap planning to optimize digital investments and navigate technology transformations effectively.
        </p>
      </header>

      {/* Main Showcase Stage */}
      <div className="ib-stage">
        {/* --- THE 3D EXECUTIVE CYBER BRIEFCASE --- */}
        <section
          className="ib-briefcase"
          aria-label="Selected Service Showcase"
        >
          {/* Top Handle Assembly with Metallic Brackets and LED Strip */}
          <div className="ib-handle-assembly" aria-hidden="true">
            <div className="ib-handle-arch">
              <div className="ib-handle-bracket ib-handle-bracket--left" />
              <div className="ib-handle-bracket ib-handle-bracket--right" />
            </div>
            <div className="ib-handle-led" />
          </div>

          {/* Heavy-Duty Outer Shell */}
          <div className="ib-briefcase-shell">
            {/* Cyber Neon Accent Bars on Left and Right Edges */}
            <div className="ib-cyber-bar ib-cyber-bar--left" aria-hidden="true" />
            <div className="ib-cyber-bar ib-cyber-bar--right" aria-hidden="true" />

            {/* Corner Cyber Accent Notches */}
            <div className="ib-cyber-notch ib-cyber-notch--tl" aria-hidden="true" />
            <div className="ib-cyber-notch ib-cyber-notch--bl" aria-hidden="true" />
            <div className="ib-cyber-notch ib-cyber-notch--tr" aria-hidden="true" />
            <div className="ib-cyber-notch ib-cyber-notch--br" aria-hidden="true" />

            {/* Recessed Glassmorphic Display Cockpit */}
            <div className="ib-screen">
              {/* Screen Upper Grid: Left Details & Right 3D Tech Scene */}
              <div className="ib-screen-main">
                {/* Left Column: Info & Action */}
                <div className="ib-screen-info">
                  {/* Service Header */}
                  <div className="ib-service-header">
                    <div
                      className="ib-service-icon-box"
                      aria-hidden="true"
                      style={{
                        borderColor: activePalette.color,
                        boxShadow: `0 0 18px ${activePalette.glowColor}, inset 0 0 10px rgba(${activePalette.rgb}, 0.25)`,
                        color: activePalette.iconColor,
                      }}
                    >
                      <ActiveScreenIcon size={28} strokeWidth={2.4} color={activePalette.iconColor} />
                    </div>
                    <div className="ib-service-titles">
                      <h2 className="ib-service-title">
                        {currentSection.title}
                      </h2>
                    </div>
                  </div>

                  {/* Service Description (Preserves 100% of exact original text) */}
                  <p className="ib-service-desc">{currentSection.description}</p>
                </div>

                {/* Right Column: 3D Isometric Tech Workspace Artwork */}
                <IsometricTechArtwork />
              </div>

              {/* Screen Bottom 50-Icons Auto-Scrolling Strip with Left/Right Manual Arrows */}
              <div
                className="ib-screen-ticker-container"
                aria-label="All 50 Services Auto-Scrolling Strip"
                onMouseEnter={() => { isTickerPausedRef.current = true; }}
                onMouseLeave={() => { isTickerPausedRef.current = false; }}
              >
                {/* Manual Scroll Left Button */}
                <button
                  type="button"
                  className="ib-ticker-arrow ib-ticker-arrow--left"
                  onClick={handleTickerScrollLeft}
                  title="Scroll Left"
                  aria-label="Scroll icons left"
                >
                  <ChevronLeft size={16} />
                </button>

                {/* Slow, Smooth Auto-Scrolling Ticker Window */}
                <div
                  className="ib-screen-ticker"
                  ref={tickerRef}
                >
                  <div className="ib-ticker-track">
                    {[...IT_CONSULTING_SECTIONS, ...IT_CONSULTING_SECTIONS].map((sec, idx) => {
                      const originalIdx = sec.id - 1;
                      const isSelected = activeSectionIndex === originalIdx;
                      const palette = VIBRANT_PALETTES[originalIdx % VIBRANT_PALETTES.length];
                      const IconComp = getSectionIcon(sec.id);

                      return (
                        <button
                          key={`${sec.id}-${idx}`}
                          type="button"
                          className={`ib-ticker-chip${isSelected ? ' ib-ticker-chip--active' : ''}`}
                          style={{
                            '--chip-color': palette.color,
                            '--chip-icon-color': palette.iconColor,
                            '--chip-glow': palette.glowColor,
                          }}
                          onClick={() => setActiveSectionIndex(originalIdx)}
                          title={`#${sec.id}. ${sec.title}`}
                        >
                          <span className="ib-ticker-chip__icon">
                            <IconComp size={16} strokeWidth={2.4} color={isSelected ? '#00f0ff' : palette.iconColor} />
                          </span>
                          <span className="ib-ticker-chip__num">{sec.id}</span>
                          <span>{sec.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Manual Scroll Right Button */}
                <button
                  type="button"
                  className="ib-ticker-arrow ib-ticker-arrow--right"
                  onClick={handleTickerScrollRight}
                  title="Scroll Right"
                  aria-label="Scroll icons right"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Dual Chrome Clasps / Feet */}
          <div className="ib-clasps-assembly" aria-hidden="true">
            <div className="ib-clasp">
              <div className="ib-clasp-groove" />
            </div>
            <div className="ib-clasp">
              <div className="ib-clasp-groove" />
            </div>
          </div>
        </section>

        {/* --- 3. 3D GLOWING PEDESTAL STAGE --- */}
        <div className="ib-pedestal-stage" aria-hidden="true">
          <svg
            className="ib-pedestal-stage-svg"
            viewBox="0 0 900 120"
            fill="none"
          >
            <defs>
              <linearGradient id="pedestalRim" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="25%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="75%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#bae6fd" />
              </linearGradient>

              <linearGradient id="pedestalSurface" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f0f9ff" />
                <stop offset="45%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#bae6fd" />
              </linearGradient>

              <filter id="neonPedestalGlow" x="-20%" y="-50%" width="140%" height="200%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Outermost Elliptical Floor Ring */}
            <ellipse cx="450" cy="60" rx="420" ry="46" stroke="#0096c7" strokeWidth="2" strokeOpacity="0.5" filter="url(#neonPedestalGlow)" />
            <ellipse cx="450" cy="60" rx="420" ry="46" stroke="#00b4d8" strokeWidth="1.2" strokeOpacity="0.8" />

            {/* 3D Chamfered Metallic Edge of Pedestal */}
            <path
              d="M 50 60 Q 450 115 850 60 L 850 72 Q 450 128 50 72 Z"
              fill="url(#pedestalRim)"
              opacity="0.9"
            />

            {/* Inner Metallic Disc Surface */}
            <ellipse cx="450" cy="58" rx="390" ry="42" fill="url(#pedestalSurface)" stroke="#0284c7" strokeWidth="1.5" />

            {/* Intense Ground Light Halo directly beneath Briefcase Base */}
            <ellipse cx="450" cy="56" rx="340" ry="34" stroke="#00d2ff" strokeWidth="2.5" filter="url(#neonPedestalGlow)" opacity="0.95" />
            <ellipse cx="450" cy="56" rx="340" ry="34" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />

            {/* Specular Highlights on the glossy stage */}
            <ellipse cx="450" cy="56" rx="270" ry="24" fill="#ffffff" fillOpacity="0.45" />
          </svg>
        </div>

        {/* --- 4. NAVIGATION CONTROLS & 50 SECTIONS DRAWER TRIGGER --- */}
        <div className="ib-controls-bar">
          {/* Previous Section Button */}
          <button
            className="ib-btn-nav"
            type="button"
            onClick={() => setActiveSectionIndex((prev) => (prev - 1 + totalSections) % totalSections)}
            aria-label="Previous service"
          >
            <ArrowLeft size={16} />
            <span>Previous</span>
          </button>

          {/* Current Counter Badge */}
          <div className="ib-counter-badge">
            <span>{currentSection.id} of {totalSections}</span>
          </div>

          {/* Next Section Button */}
          <button
            className="ib-btn-nav"
            type="button"
            onClick={() => setActiveSectionIndex((prev) => (prev + 1) % totalSections)}
            aria-label="Next service"
          >
            <span>Next</span>
            <ArrowRight size={16} />
          </button>

        </div>
      </div>
    </main>
  );
}
