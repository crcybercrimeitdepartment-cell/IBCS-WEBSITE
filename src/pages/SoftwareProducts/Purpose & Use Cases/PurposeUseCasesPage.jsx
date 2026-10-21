import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Home } from 'lucide-react';
import { technologySections } from './PurposeUseCasesPageData';

export const EMBEDDED_STYLES = `
/* =========================================================================
   1. BASE TYPOGRAPHY, ROOT VARIABLES & SMOOTH SCROLLING
   ========================================================================= */
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

html, body {
  overflow-x: hidden;
  max-width: 100vw;
  scroll-behavior: smooth;
}

#root {
  overflow-x: hidden;
  width: 100%;
}

body {
  font-family: var(--font-sans);
  background-color: #f8fafc;
  color: #0f172a;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  letter-spacing: -0.02em;
}

code, pre, .font-mono {
  font-family: var(--font-mono);
}

/* Custom subtle scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Printing styles */
@media print {
  .no-print {
    display: none !important;
  }
}

/* =========================================================================
   2. HERO COLLISION-BASED TEXT ANIMATION (Opposite Sides -> Center Collision)
   ========================================================================= */
@keyframes collisionLeftGroup {
  0% {
    transform: translate3d(-34vw, 0, 0);
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  35% {
    transform: translate3d(0, 0, 0);
  }
  56% {
    transform: translate3d(0, 0, 0);
  }
  64% {
    transform: translate3d(8px, 0, 0);
  }
  72% {
    transform: translate3d(7px, 0, 0);
  }
  80% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(2px, 0, 0);
  }
  96% {
    transform: translate3d(-0.5px, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes collisionRightGroup {
  0% {
    transform: translate3d(34vw, 0, 0);
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  35% {
    transform: translate3d(0, 0, 0);
  }
  56% {
    transform: translate3d(0, 0, 0);
  }
  64% {
    transform: translate3d(-8px, 0, 0);
  }
  72% {
    transform: translate3d(-7px, 0, 0);
  }
  80% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-2px, 0, 0);
  }
  96% {
    transform: translate3d(0.5px, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@media (max-width: 640px) {
  @keyframes collisionLeftGroup {
    0% {
      transform: translate3d(-20vw, 0, 0);
      opacity: 0;
    }
    14% {
      opacity: 1;
    }
    35% {
      transform: translate3d(0, 0, 0);
    }
    56% {
      transform: translate3d(0, 0, 0);
    }
    64% {
      transform: translate3d(4px, 0, 0);
    }
    72% {
      transform: translate3d(3.5px, 0, 0);
    }
    80% {
      transform: translate3d(-5px, 0, 0);
    }
    90% {
      transform: translate3d(1px, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes collisionRightGroup {
    0% {
      transform: translate3d(20vw, 0, 0);
      opacity: 0;
    }
    14% {
      opacity: 1;
    }
    35% {
      transform: translate3d(0, 0, 0);
    }
    56% {
      transform: translate3d(0, 0, 0);
    }
    64% {
      transform: translate3d(-4px, 0, 0);
    }
    72% {
      transform: translate3d(-3.5px, 0, 0);
    }
    80% {
      transform: translate3d(5px, 0, 0);
    }
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
}

@keyframes letterScatterIn {
  0% {
    transform: translate3d(calc(var(--sx) * var(--scatter-mult, 1)), calc(var(--sy) * var(--scatter-mult, 1)), 0) scale(var(--sinit));
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  75% {
    transform: translate3d(calc(var(--sx) * var(--scatter-mult, 1) * 0.22), calc(var(--sy) * var(--scatter-mult, 1) * 0.22), 0) scale(0.97);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
}

@keyframes letterShockwave {
  0% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 rgba(0, 103, 105, 0));
  }
  38% {
    transform: scale(1.18);
    filter: drop-shadow(0 0 7px rgba(0, 122, 126, 0.4));
  }
  72% {
    transform: scale(0.96);
    filter: drop-shadow(0 0 2px rgba(0, 122, 126, 0.15));
  }
  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 rgba(0, 103, 105, 0));
  }
}

.animate-collision-left {
  animation: collisionLeftGroup 1.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}

.animate-collision-right {
  animation: collisionRightGroup 1.95s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}

.animate-letter-scatter {
  animation: letterScatterIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) var(--letter-delay, 0s) forwards;
  will-change: transform, opacity;
}

.animate-letter-shockwave {
  animation: letterShockwave 0.24s cubic-bezier(0.2, 1, 0.3, 1) var(--shockwave-delay) both;
  will-change: transform, filter;
}

@media (max-width: 640px) {
  .collision-heading-root {
    --scatter-mult: 0.5;
  }
}

/* =========================================================================
   3. FLOATING SHIELD & SECURITY BACKGROUND ANIMATIONS
   ========================================================================= */
@keyframes floatShield1 {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(-5px, -15px, 0) rotate(2.5deg);
  }
  100% {
    transform: translate3d(4px, -7px, 0) rotate(-2deg);
  }
}

@keyframes floatShield2 {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(6px, -18px, 0) rotate(-3deg);
  }
  100% {
    transform: translate3d(-4px, -9px, 0) rotate(2deg);
  }
}

@keyframes floatShield3 {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(-6px, -12px, 0) rotate(-2deg);
  }
  100% {
    transform: translate3d(5px, -6px, 0) rotate(2.5deg);
  }
}

@keyframes floatShield4 {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(6px, -14px, 0) rotate(2.5deg);
  }
  100% {
    transform: translate3d(-5px, -7px, 0) rotate(-2deg);
  }
}

@keyframes shieldPulseGlow {
  0%, 100% {
    opacity: 0.06;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.11;
    transform: translate(-50%, -50%) scale(1.03);
  }
}

.animate-float-shield-1 {
  animation: floatShield1 8s ease-in-out infinite alternate;
  will-change: transform;
}

.animate-float-shield-2 {
  animation: floatShield2 9.5s ease-in-out infinite alternate;
  will-change: transform;
}

.animate-float-shield-3 {
  animation: floatShield3 7.5s ease-in-out infinite alternate;
  will-change: transform;
}

.animate-float-shield-4 {
  animation: floatShield4 10s ease-in-out infinite alternate;
  will-change: transform;
}

.animate-shield-pulse-glow {
  animation: shieldPulseGlow 6s ease-in-out infinite alternate;
  will-change: transform, opacity;
}

/* =========================================================================
   4. SECTION HEADING ANIMATIONS (Fly-In, Sparks, Flare, Underline, Phone Float)
   ========================================================================= */
@keyframes letterFlyIn {
  0% {
    transform: translate3d(min(45vw, 220px), 0, 0);
    filter: blur(4px) drop-shadow(0 0 12px rgba(0, 103, 105, 0.4));
    color: #006769;
    opacity: 1;
  }
  68% {
    transform: translate3d(-8px, 0, 0);
    filter: blur(0px) drop-shadow(0 0 14px rgba(0, 103, 105, 0.3));
    color: #006769;
  }
  84% {
    transform: translate3d(3px, 0, 0);
    filter: blur(0px);
    color: inherit;
  }
  93% {
    transform: translate3d(-1px, 0, 0);
    filter: blur(0px);
  }
  100% {
    transform: translate3d(0, 0, 0);
    filter: blur(0px);
    color: inherit;
  }
}

@keyframes letterFlyFast {
  0% {
    transform: translate3d(min(35vw, 160px), 0, 0);
    filter: blur(3px) drop-shadow(0 0 10px rgba(0, 122, 126, 0.35));
    color: #007A7E;
    opacity: 1;
  }
  70% {
    transform: translate3d(-5px, 0, 0);
    filter: blur(0px) drop-shadow(0 0 10px rgba(0, 122, 126, 0.3));
    color: #007A7E;
  }
  86% {
    transform: translate3d(1.8px, 0, 0);
    color: inherit;
  }
  100% {
    transform: translate3d(0, 0, 0);
    filter: blur(0px);
    color: inherit;
  }
}

@keyframes impactSpark {
  0% {
    opacity: 0;
    transform: translate(-50%, 4px) scale(0.6);
  }
  40% {
    opacity: 1;
    transform: translate(-50%, -3px) scale(1.15);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -10px) scale(1.3);
  }
}

@keyframes trailFade {
  0% {
    opacity: 0.9;
    transform: translateY(-50%) scaleX(1);
  }
  60% {
    opacity: 0.7;
  }
  80% {
    opacity: 0.2;
    transform: translateY(-50%) scaleX(0.4);
  }
  100% {
    opacity: 0;
    transform: translateY(-50%) scaleX(0);
  }
}

@keyframes underlineSweep {
  0% {
    width: 0%;
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
}

@keyframes flarePulse {
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(45deg) scale(0.4);
    opacity: 0;
  }
  50% {
    transform: translate3d(-50%, -50%, 0) rotate(45deg) scale(1.3);
    opacity: 1;
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(45deg) scale(1);
    opacity: 0.9;
  }
}

@keyframes gentlePhoneFloat {
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -6px, 0);
  }
}

.animate-letter-fly-in {
  animation: letterFlyIn 0.26s cubic-bezier(0.2, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}

.animate-letter-fly-fast {
  animation: letterFlyFast 0.24s cubic-bezier(0.2, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}

.animate-impact-spark {
  animation: impactSpark 0.15s ease-out forwards;
  will-change: transform, opacity;
}

.animate-trail-fade {
  animation: trailFade 0.26s cubic-bezier(0.2, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}

.animate-underline-sweep {
  animation: underlineSweep 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-flare-pulse {
  animation: flarePulse 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-phone-float {
  animation: gentlePhoneFloat 4.5s ease-in-out infinite;
  will-change: transform;
}

/* =========================================================================
   5. ORBITAL SHOWCASE ENTRANCE ANIMATIONS
   ========================================================================= */
@keyframes showcaseContentFadeIn {
  0% {
    opacity: 0;
    transform: translateY(14px) scale(0.99);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-content-stagger-1 {
  animation: showcaseContentFadeIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-content-stagger-2 {
  animation: showcaseContentFadeIn 0.42s 0.07s cubic-bezier(0.16, 1, 0.3, 1) backwards;
}

.animate-content-stagger-3 {
  animation: showcaseContentFadeIn 0.48s 0.14s cubic-bezier(0.16, 1, 0.3, 1) backwards;
}

.animate-content-stagger-4 {
  animation: showcaseContentFadeIn 0.52s 0.21s cubic-bezier(0.16, 1, 0.3, 1) backwards;
}

@media (prefers-reduced-motion: reduce) {
  .animate-collision-left,
  .animate-collision-right,
  .animate-letter-scatter,
  .animate-letter-shockwave,
  .animate-letter-fly-in,
  .animate-letter-fly-fast,
  .animate-impact-spark,
  .animate-trail-fade,
  .animate-underline-sweep,
  .animate-flare-pulse,
  .animate-phone-float,
  .animate-float-shield-1,
  .animate-float-shield-2,
  .animate-float-shield-3,
  .animate-float-shield-4,
  .animate-shield-pulse-glow,
  .animate-content-stagger-1,
  .animate-content-stagger-2,
  .animate-content-stagger-3,
  .animate-content-stagger-4 {
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}


/* =========================================================================
   FUTURISTIC 3D STAR EMBLEM & FLOATING GLASSMORPHISM SHOWCASE STYLES
   (Inspired by Premium Futuristic Blue-and-White Enterprise Reference UI)
   ========================================================================= */

/* Floating Stage & Idle Bobbing */
@keyframes starFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-9px);
  }
}

.animate-star-float {
  animation: starFloat 5.2s ease-in-out infinite;
  will-change: transform;
}

/* 3D Orbital Light Rings Rotation */
@keyframes orbitSpinCW {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes orbitSpinCCW {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

.animate-orbit-spin {
  animation: orbitSpinCW 28s linear infinite;
  transform-origin: 290px 195px;
}

.animate-orbit-spin-rev {
  animation: orbitSpinCCW 32s linear infinite;
  transform-origin: 290px 195px;
}

/* Central Star Core Pulse Glow */
@keyframes corePulseGlow {
  0%, 100% {
    filter: drop-shadow(0 0 12px rgba(56, 189, 248, 0.7));
  }
  50% {
    filter: drop-shadow(0 0 26px rgba(56, 189, 248, 1));
  }
}

.animate-core-pulse {
  animation: corePulseGlow 3.5s ease-in-out infinite;
}

/* Luminous Floor Stage Ripples */
@keyframes floorRippleFade {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 0.95;
    transform: scale(1.02);
  }
}

.animate-floor-ripple {
  animation: floorRippleFade 4.8s ease-in-out infinite;
  transform-origin: 290px 428px;
}

/* Card Text Slide-In Transitions */
@keyframes textSlideNext {
  0% {
    opacity: 0;
    transform: translate3d(24px, 0, 0);
    filter: blur(1px);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    filter: blur(0px);
  }
}

@keyframes textSlidePrev {
  0% {
    opacity: 0;
    transform: translate3d(-24px, 0, 0);
    filter: blur(1px);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    filter: blur(0px);
  }
}

.animate-text-slide-next {
  animation: textSlideNext 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}

.animate-text-slide-prev {
  animation: textSlidePrev 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}

.star-hover-frame {
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.35s ease;
}

.star-hover-frame:hover {
  filter: drop-shadow(0 0 32px rgba(56, 189, 248, 0.45));
}

/* Glassmorphism Panel Hover & Shadow */
.glass-showcase-panel {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  border: 1.5px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 24px 52px -12px rgba(37, 99, 235, 0.14),
              0 0 35px rgba(56, 189, 248, 0.16);
  border-radius: 28px;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-showcase-panel:hover {
  box-shadow: 0 28px 60px -10px rgba(37, 99, 235, 0.18),
              0 0 45px rgba(56, 189, 248, 0.22);
}

/* Glossy Icon Tile */
.glass-tile-gloss {
  background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 52%, #1E3A8A 100%);
  border: 1px solid rgba(147, 197, 253, 0.5);
  box-shadow: 0 14px 28px -6px rgba(37, 99, 235, 0.4),
              inset 0 1px 2px rgba(255, 255, 255, 0.5);
}

/* Circular Buttons */
.glass-btn-prev {
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(191, 219, 254, 0.85);
  color: #2563EB;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.08);
  transition: all 0.2s ease;
}

.glass-btn-prev:hover {
  background: #FFFFFF;
  border-color: #60A5FA;
  transform: scale(1.05);
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.15);
}

.glass-btn-next {
  background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
  color: #FFFFFF;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.35);
  transition: all 0.2s ease;
}

.glass-btn-next:hover {
  background: linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%);
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.45);
}

/* Quick Jump Dots */
.glass-dot {
  transition: all 0.25s ease;
}

.glass-dot.is-active {
  background: #2563EB;
}

@media (min-width: 640px) {
  .glass-dot.is-active {
    width: 1.35rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-star-float,
  .animate-orbit-spin,
  .animate-orbit-spin-rev,
  .animate-core-pulse,
  .animate-floor-ripple {
    animation: none !important;
  }
}
`;


// ============================================================================
// 1. UTILITIES & HELPERS
// ============================================================================

/**
 * Live search keyword highlight wrapper
 */
export function HighlightText({ text = "", query = "", className = "" }) {
  if (!query || !text) return <span className={className}>{text}</span>;
  const q = query.trim();
  if (!q) return <span className={className}>{text}</span>;

  const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = String(text).split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={index} className="bg-amber-200 text-amber-950 rounded-xs px-0.5 font-bold">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
}

/**
 * Converts ALL-CAPS section titles into elegant Title Case for SectionHeadingAnimation
 */
export function formatSectionTitle(title) {
  if (!title) return "";
  if (title !== title.toUpperCase()) return title;

  return title
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (word === "&") return "&";
      if (word === "ai") return "AI";
      if (word === "ui/ux") return "UI/UX";
      if (word === "devops") return "DevOps";
      if (word.includes("-")) {
        return word.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("-");
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

/**
 * Upper-right Dot Matrix Decoration
 */
export function DotMatrix({ className = "" }) {
  return (
    <div className={`grid grid-cols-6 gap-2 w-max select-none pointer-events-none ${className}`} aria-hidden="true">
      {Array.from({ length: 24 }).map((_, index) => (
        <span key={index} className="w-1.5 h-1.5 rounded-full bg-blue-300/60" />
      ))}
    </div>
  );
}

// ============================================================================
// 2. HERO PURPOSE & USE CASES DECORATIVE BACKGROUND FLOATING ICONS
// (Business Use Cases, Operational Workflows, Process Automation, Digital Transformation,
//  Government Applications, Cybersecurity Operations, Cyber Crime Investigation,
//  Enterprise Solutions, Public Service Delivery, Information Management,
//  Problem Solving, Real-World Technology Applications)
// ============================================================================

function PurposeUseCasesBackgroundIcon({ type, size = 18, color = "#006769" }) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (type) {
    // 1. Business Use Cases (Executive Briefcase with Strategic Target Node)
    case "business-use-cases":
    case "use-cases":
      return (
        <svg {...commonProps}>
          <rect x="3" y="7" width="18" height="13" rx="2.5" fill={color} fillOpacity="0.1" strokeWidth="1.8" />
          <path d="M8 7V4.5a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 4.5V7" strokeWidth="1.8" />
          <line x1="12" y1="11" x2="12" y2="13" strokeWidth="2" strokeLinecap="round" />
          <path d="M3 12h18" strokeWidth="1.5" strokeOpacity="0.4" />
          <circle cx="12" cy="12" r="1.5" fill={color} />
        </svg>
      );

    // 2. Operational Workflows (Multi-Stage Connected Workflow Diagram)
    case "operational-workflows":
    case "workflows":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="6" height="6" rx="1.5" fill={color} fillOpacity="0.25" strokeWidth="1.8" />
          <rect x="15" y="4" width="6" height="6" rx="1.5" fill={color} fillOpacity="0.25" strokeWidth="1.8" />
          <rect x="9" y="14" width="6" height="6" rx="1.5" fill={color} fillOpacity="0.3" strokeWidth="1.8" />
          <path d="M9 7h6M6 10v2a2 2 0 0 0 2 2h1M18 10v2a2 2 0 0 1-2 2h-1" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    // 3. Process Automation (Interlocking Automation Gears & Execution Spark)
    case "process-automation":
    case "automation":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="3.5" fill={color} fillOpacity="0.3" strokeWidth="1.8" />
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9 12l2 2 4-4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    // 4. Digital Transformation (Transformative Isometric Cube & Flow Nodes)
    case "digital-transformation":
    case "transformation":
      return (
        <svg {...commonProps}>
          <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" fill={color} fillOpacity="0.1" strokeWidth="1.8" />
          <path d="M12 2v18M20 6.5l-8 4.5-8-4.5" strokeWidth="1.6" />
          <circle cx="12" cy="11" r="2.5" fill={color} fillOpacity="0.35" />
          <circle cx="12" cy="2" r="1.2" fill={color} />
          <circle cx="20" cy="15.5" r="1.2" fill={color} />
          <circle cx="4" cy="15.5" r="1.2" fill={color} />
        </svg>
      );

    // 5. Government Applications (Classical Institutional Pediment Columns)
    case "government-applications":
    case "government":
      return (
        <svg {...commonProps}>
          <path d="M2 9l10-6 10 6v2H2V9z" fill={color} fillOpacity="0.2" strokeWidth="1.8" />
          <path d="M4.5 11v7M9.5 11v7M14.5 11v7M19.5 11v7" strokeWidth="1.8" />
          <path d="M2 18h20v3H2v-3z" fill={color} fillOpacity="0.25" strokeWidth="1.8" />
          <circle cx="12" cy="6.2" r="1.2" fill={color} />
        </svg>
      );

    // 6. Cybersecurity Operations (Hardened Shield with Digital Lock Core)
    case "cybersecurity-operations":
    case "cybersecurity":
      return (
        <svg {...commonProps}>
          <path d="M12 2L4 5.5v6.2c0 5.4 3.4 10.4 8 11.8 4.6-1.4 8-6.4 8-11.8V5.5L12 2z" fill={color} fillOpacity="0.12" strokeWidth="1.8" />
          <rect x="9.5" y="11" width="5" height="4.5" rx="1" fill={color} fillOpacity="0.4" strokeWidth="1.5" />
          <path d="M10.5 11V9a1.5 1.5 0 0 1 3 0v2" strokeWidth="1.5" />
        </svg>
      );

    // 7. Cyber Crime Investigation (Forensic Lens Focused on Digital Evidence Nodes)
    case "cyber-investigation":
    case "investigation":
      return (
        <svg {...commonProps}>
          <circle cx="11" cy="11" r="7.5" fill={color} fillOpacity="0.1" strokeWidth="1.8" />
          <path d="M21 21l-4.5-4.5" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="11" cy="11" r="2.5" fill={color} fillOpacity="0.35" strokeWidth="1.5" />
          <path d="M11 6.5v2M11 13.5v2M6.5 11h2M13.5 11h2" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    // 8. Enterprise Solutions (Corporate Headquarters Multi-Tower Architecture)
    case "enterprise-solutions":
    case "enterprise":
      return (
        <svg {...commonProps}>
          <rect x="3" y="6" width="8" height="15" rx="1" fill={color} fillOpacity="0.18" strokeWidth="1.8" />
          <rect x="13" y="3" width="8" height="18" rx="1" fill={color} fillOpacity="0.25" strokeWidth="1.8" />
          <line x1="6" y1="10" x2="8" y2="10" strokeWidth="1.6" />
          <line x1="6" y1="14" x2="8" y2="14" strokeWidth="1.6" />
          <line x1="16" y1="7" x2="18" y2="7" strokeWidth="1.6" />
          <line x1="16" y1="11" x2="18" y2="11" strokeWidth="1.6" />
          <line x1="16" y1="15" x2="18" y2="15" strokeWidth="1.6" />
        </svg>
      );

    // 9. Public Service Delivery (Welcoming Civic Halo & Citizen Outreach Beam)
    case "public-service-delivery":
    case "service-delivery":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="7" r="3.5" fill={color} fillOpacity="0.25" strokeWidth="1.8" />
          <path d="M4 20c0-3.5 3.5-6 8-6s8 2.5 8 6" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 2v2M19 5l-1.5 1.5M5 5l1.5 1.5" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.6" />
        </svg>
      );

    // 10. Information Management (Relational Database Stack & Record Archives)
    case "information-management":
    case "information":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="5" rx="8" ry="3" fill={color} fillOpacity="0.2" strokeWidth="1.8" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" strokeWidth="1.8" />
          <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" strokeWidth="1.8" />
          <circle cx="12" cy="11" r="1.2" fill={color} />
          <circle cx="12" cy="17" r="1.2" fill={color} />
        </svg>
      );

    // 11. Problem Solving (Precision Analytical Puzzle Interlocking Node)
    case "problem-solving":
    case "solutions":
      return (
        <svg {...commonProps}>
          <path d="M14 4a2 2 0 0 1 2 2v2a2 2 0 1 0 4 0V6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 1 0 0 4h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2a2 2 0 1 0-4 0v2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2a2 2 0 1 0 0-4H4a2 2 0 0 1 2-2z" fill={color} fillOpacity="0.12" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="2" fill={color} fillOpacity="0.4" strokeWidth="1.5" />
        </svg>
      );

    // 12. Real-World Technology Applications (Sensor & Endpoint Integration Hub)
    case "technology-applications":
    case "applications":
      return (
        <svg {...commonProps}>
          <rect x="5" y="5" width="14" height="14" rx="2.5" fill={color} fillOpacity="0.1" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3" fill={color} fillOpacity="0.35" strokeWidth="1.6" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2.5 2.5M16.5 16.5L19 19M5 19l2.5-2.5M16.5 7.5L19 5" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9.5" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3" fill={color} fillOpacity="0.3" />
        </svg>
      );
  }
}

const VisionMissionBackgroundIcon = PurposeUseCasesBackgroundIcon;
const SecurityIcon = PurposeUseCasesBackgroundIcon;

const FLOATING_ICONS = [
  // Top-left area (Business Use Cases, Workflows, Automation, Digital Transformation, Government, Cybersecurity, Investigation, Enterprise, Public Service)
  { id: 1, type: "business-use-cases", size: 21, color: "#006769", opacity: 0.38, top: "8%", left: "4%", anim: "animate-float-shield-1", delay: "0s", rotate: "-6deg" },
  { id: 2, type: "operational-workflows", size: 21, color: "#14B8A6", opacity: 0.42, top: "22%", left: "11%", anim: "animate-float-shield-2", delay: "1.2s", rotate: "8deg" },
  { id: 3, type: "process-automation", size: 20, color: "#007A7E", opacity: 0.32, top: "37%", left: "3%", anim: "animate-float-shield-3", delay: "2.5s", rotate: "-4deg" },
  { id: 4, type: "digital-transformation", size: 21, color: "#006769", opacity: 0.40, top: "54%", left: "8%", anim: "animate-float-shield-4", delay: "0.8s", rotate: "6deg" },
  { id: 5, type: "government-applications", size: 20, color: "#14B8A6", opacity: 0.35, top: "70%", left: "5%", anim: "animate-float-shield-1", delay: "3.1s", rotate: "12deg" },
  { id: 6, type: "cybersecurity-operations", size: 21, color: "#007A7E", opacity: 0.36, top: "84%", left: "12%", anim: "animate-float-shield-2", delay: "1.7s", rotate: "-8deg" },
  { id: 7, type: "cyber-investigation", size: 19, color: "#006769", opacity: 0.28, top: "27%", left: "21%", anim: "animate-float-shield-3", delay: "4.0s", rotate: "10deg" },
  { id: 8, type: "enterprise-solutions", size: 20, color: "#14B8A6", opacity: 0.32, top: "72%", left: "20%", anim: "animate-float-shield-4", delay: "2.1s", rotate: "-5deg" },
  { id: 9, type: "public-service-delivery", size: 20, color: "#007A7E", opacity: 0.30, top: "16%", left: "17%", anim: "animate-float-shield-1", delay: "3.5s", rotate: "7deg" },

  // Top-right area (Information Management, Problem Solving, Technology Applications, Business Use Cases, Workflows, Automation, Government, Cybersecurity, Investigation)
  { id: 10, type: "information-management", size: 21, color: "#007A7E", opacity: 0.40, top: "10%", right: "5%", anim: "animate-float-shield-2", delay: "0.5s", rotate: "6deg" },
  { id: 11, type: "problem-solving", size: 20, color: "#14B8A6", opacity: 0.36, top: "24%", right: "12%", anim: "animate-float-shield-1", delay: "2.2s", rotate: "-8deg" },
  { id: 12, type: "technology-applications", size: 21, color: "#006769", opacity: 0.42, top: "40%", right: "4%", anim: "animate-float-shield-4", delay: "1.4s", rotate: "5deg" },
  { id: 13, type: "business-use-cases", size: 19, color: "#007A7E", opacity: 0.32, top: "56%", right: "9%", anim: "animate-float-shield-3", delay: "3.3s", rotate: "-6deg" },
  { id: 14, type: "operational-workflows", size: 20, color: "#14B8A6", opacity: 0.38, top: "72%", right: "6%", anim: "animate-float-shield-1", delay: "1.9s", rotate: "10deg" },
  { id: 15, type: "process-automation", size: 20, color: "#006769", opacity: 0.30, top: "86%", right: "13%", anim: "animate-float-shield-2", delay: "2.7s", rotate: "-4deg" },
  { id: 16, type: "government-applications", size: 19, color: "#007A7E", opacity: 0.28, top: "29%", right: "21%", anim: "animate-float-shield-4", delay: "0.9s", rotate: "8deg" },
  { id: 17, type: "cybersecurity-operations", size: 20, color: "#14B8A6", opacity: 0.34, top: "74%", right: "21%", anim: "animate-float-shield-3", delay: "3.7s", rotate: "-10deg" },
  { id: 18, type: "cyber-investigation", size: 19, color: "#006769", opacity: 0.30, top: "17%", right: "18%", anim: "animate-float-shield-2", delay: "1.1s", rotate: "-5deg" },

  // Center subtle ambient accents
  { id: 19, type: "enterprise-solutions", size: 17, color: "#006769", opacity: 0.26, top: "6%", left: "28%", anim: "animate-float-shield-3", delay: "1.3s", rotate: "10deg" },
  { id: 20, type: "public-service-delivery", size: 17, color: "#14B8A6", opacity: 0.28, top: "4%", left: "44%", anim: "animate-float-shield-1", delay: "2.6s", rotate: "-3deg" },
  { id: 21, type: "information-management", size: 17, color: "#007A7E", opacity: 0.27, top: "5%", right: "42%", anim: "animate-float-shield-2", delay: "0.7s", rotate: "5deg" },
  { id: 22, type: "problem-solving", size: 18, color: "#006769", opacity: 0.28, top: "6%", right: "28%", anim: "animate-float-shield-4", delay: "3.0s", rotate: "-7deg" },
  { id: 23, type: "technology-applications", size: 16, color: "#006769", opacity: 0.22, top: "46%", left: "26%", anim: "animate-float-shield-2", delay: "4.1s", rotate: "-12deg" },
  { id: 24, type: "digital-transformation", size: 17, color: "#14B8A6", opacity: 0.22, top: "48%", right: "27%", anim: "animate-float-shield-1", delay: "1.8s", rotate: "6deg" },
  { id: 25, type: "business-use-cases", size: 16, color: "#007A7E", opacity: 0.24, bottom: "10%", left: "32%", anim: "animate-float-shield-4", delay: "2.3s", rotate: "4deg" },
  { id: 26, type: "operational-workflows", size: 16, color: "#006769", opacity: 0.24, bottom: "9%", right: "33%", anim: "animate-float-shield-3", delay: "0.9s", rotate: "-6deg" },
];

export function HeroSecurityBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {FLOATING_ICONS.map((item) => {
        const style = {
          position: "absolute",
          top: item.top,
          bottom: item.bottom,
          left: item.left,
          right: item.right,
          opacity: item.opacity,
          animationDelay: item.delay,
          transform: `rotate(${item.rotate || "0deg"})`,
          filter: "drop-shadow(0 2px 6px rgba(0, 103, 105, 0.15))",
          willChange: "transform",
        };

        return (
          <div
            key={`float-sec-icon-${item.id}`}
            className={`${item.anim} transition-opacity duration-300`}
            style={style}
            aria-hidden="true"
          >
            <PurposeUseCasesBackgroundIcon
              type={item.type}
              size={item.size}
              color={item.color}
            />
          </div>
        );
      })}
    </div>
  );
}

// ============================================================================
// 3. COLLISION TEXT HEADING (FOR HERO)
// ============================================================================

function getLetterScatter(charIndex, totalChars, isLeft) {
  const seed = (charIndex * 13 + (isLeft ? 7 : 19)) % 17;
  const xValues = [-15, 12, -9, 14, -13, 8, -11, 13, -7, 10, -14, 6, -8, 11, -10, 9, -6];
  const rawX = xValues[seed % xValues.length];
  const yValues = [-6, 5, -5, 7, -4, 6, -7, 4, -4, 6, -5, 5, -6, 5, -3, 7, -4];
  const rawY = yValues[(seed * 3) % yValues.length];
  const scaleValues = [0.80, 0.88, 0.82, 0.92, 0.78, 0.90, 0.85, 0.86, 0.82, 0.91, 0.84];
  const rawScale = scaleValues[seed % scaleValues.length];
  const staggerDelay = ((charIndex * 17) % 7) * 10;

  return {
    sx: `${rawX}px`,
    sy: `${rawY}px`,
    sinit: rawScale,
    delay: `${staggerDelay}ms`,
  };
}

export function CollisionTextHeading({ text = "Product Introduction", className = "", onComplete }) {
  const containerRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isSettled, setIsSettled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mediaQuery.matches);
      const handleChange = (e) => setReducedMotion(e.matches);
      mediaQuery.addEventListener?.("change", handleChange);
      return () => mediaQuery.removeEventListener?.("change", handleChange);
    }
  }, []);

  const { leftChars, rightChars } = useMemo(() => {
    const rawWords = (text || "").trim().split(/\s+/).filter(Boolean);
    if (rawWords.length === 0) return { leftChars: [], rightChars: [] };
    if (rawWords.length === 1) {
      const mid = Math.ceil(rawWords[0].length / 2);
      return {
        leftChars: rawWords[0].slice(0, mid).split(""),
        rightChars: rawWords[0].slice(mid).split(""),
      };
    }
    const midIndex = Math.ceil(rawWords.length / 2);
    return {
      leftChars: rawWords.slice(0, midIndex).join(" ").split(""),
      rightChars: rawWords.slice(midIndex).join(" ").split(""),
    };
  }, [text]);

  useEffect(() => {
    if (hasStarted || reducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -20px 0px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasStarted, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) {
      setIsSettled(true);
      if (onComplete) onComplete();
      return;
    }
    if (!hasStarted) return;
    const timer = setTimeout(() => {
      setIsSettled(true);
      if (onComplete) onComplete();
    }, 1950);
    return () => clearTimeout(timer);
  }, [hasStarted, reducedMotion, onComplete]);

  const IMPACT_TIME = 0.65;
  const PAIR_STEP = 0.045;
  const shouldAnimate = hasStarted && !reducedMotion;

  return (
    <div
      ref={containerRef}
      className={`collision-heading-root relative w-full max-w-4xl mx-auto select-none text-center overflow-hidden py-1.5 ${className}`}
      aria-label={text}
    >
      <h1 className="inline-flex flex-wrap items-baseline justify-center gap-x-2.5 sm:gap-x-3.5 tracking-tight font-sans leading-tight">
        <span
          className={`inline-flex items-baseline whitespace-nowrap font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A2540] drop-shadow-[0_2px_8px_rgba(4,44,46,0.1)] ${
            shouldAnimate ? "animate-collision-left" : ""
          }`}
          style={{ willChange: shouldAnimate ? "transform, opacity" : "auto" }}
        >
          {leftChars.map((char, index) => {
            if (char === " ") {
              return <span key={`l-sp-${index}`} className="inline-block w-2 sm:w-2.5">&nbsp;</span>;
            }
            const pairIndex = leftChars.length - 1 - index;
            const shockwaveDelay = (IMPACT_TIME + pairIndex * PAIR_STEP).toFixed(3);
            const scatter = getLetterScatter(index, leftChars.length, true);

            return (
              <span
                key={`left-char-${index}`}
                className={`relative inline-block ${shouldAnimate ? "animate-letter-scatter" : ""}`}
                style={{
                  "--sx": scatter.sx,
                  "--sy": scatter.sy,
                  "--sinit": scatter.sinit,
                  "--letter-delay": scatter.delay,
                  willChange: shouldAnimate ? "transform, opacity" : "auto",
                }}
              >
                <span
                  className={`inline-block ${shouldAnimate ? "animate-letter-shockwave" : ""}`}
                  style={{
                    "--shockwave-delay": `${shockwaveDelay}s`,
                    willChange: shouldAnimate ? "transform, filter" : "auto",
                  }}
                >
                  {char}
                </span>
              </span>
            );
          })}
        </span>

        <span
          className={`inline-flex items-baseline whitespace-nowrap font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A2540] drop-shadow-[0_2px_8px_rgba(4,44,46,0.1)] ${
            shouldAnimate ? "animate-collision-right" : ""
          }`}
          style={{ willChange: shouldAnimate ? "transform, opacity" : "auto" }}
        >
          {rightChars.map((char, index) => {
            if (char === " ") {
              return <span key={`r-sp-${index}`} className="inline-block w-2 sm:w-2.5">&nbsp;</span>;
            }
            const pairIndex = index;
            const shockwaveDelay = (IMPACT_TIME + pairIndex * PAIR_STEP).toFixed(3);
            const scatter = getLetterScatter(index, rightChars.length, false);

            return (
              <span
                key={`right-char-${index}`}
                className={`relative inline-block ${shouldAnimate ? "animate-letter-scatter" : ""}`}
                style={{
                  "--sx": scatter.sx,
                  "--sy": scatter.sy,
                  "--sinit": scatter.sinit,
                  "--letter-delay": scatter.delay,
                  willChange: shouldAnimate ? "transform, opacity" : "auto",
                }}
              >
                <span
                  className={`inline-block ${shouldAnimate ? "animate-letter-shockwave" : ""}`}
                  style={{
                    "--shockwave-delay": `${shockwaveDelay}s`,
                    willChange: shouldAnimate ? "transform, filter" : "auto",
                  }}
                >
                  {char}
                </span>
              </span>
            );
          })}
        </span>
      </h1>

      <div className="relative mt-2.5 h-1 w-full max-w-xl mx-auto overflow-hidden">
        {(isSettled || reducedMotion) && (
          <div className="relative w-full h-full animate-underline-sweep">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent shadow-[0_0_10px_rgba(0,103,105,0.4)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rotate-45 bg-[#38BDF8] shadow-[0_0_12px_rgba(20,184,166,0.6)] animate-flare-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// 4. TOP HEADING & HERO CONTAINER
// ============================================================================

export function IBCSHeadingSection({
  badge = "IBCS SOFTWARE PRODUCTS",
  title = "Product Benefits & Impact",
  company = "IB Cyber Security Private Limited (IBCS)",
  summary = "A comprehensive operational framework designed to deliver meaningful benefits across government, law enforcement, investigation, cybersecurity, enterprise, banking, and citizen services through structured, scalable, and intelligent software capabilities.",
  buttonLabel = "Explore Benefits & Impact",
  onExplore,
  features = [
    { label: "12 Benefit Dimensions", dot: "#006769" },
    { label: "144 Impact Standards", dot: "#14B8A6" },
    { label: "Institutional & Enterprise Ready", dot: "#C54E2C" },
  ],
  onBack,
  onHome,
  children,
  className = "",
}) {
  return (
    <header className={`ibcs-heading-section relative overflow-hidden border-b border-blue-200 bg-gradient-to-b from-[#C8F0EC] via-[#E2F7F5] to-[#F0FBFA] pt-3 pb-8 sm:pt-4 sm:pb-10 lg:pt-4 lg:pb-12 ${className}`}>
      <HeroSecurityBackground />

      <div className="absolute top-6 left-8 hidden opacity-70 pointer-events-none lg:block" aria-hidden="true">
        <DotMatrix />
      </div>
      <div className="absolute bottom-6 right-10 hidden opacity-60 pointer-events-none lg:block" aria-hidden="true">
        <DotMatrix />
      </div>

      <div className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-[#8AE2DA]/30 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-16 right-1/4 h-80 w-80 rounded-full bg-[#B6F2ED]/40 blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Top Header Navigation Bar (Embedded directly into header for zero-gap layout) */}
      {(onBack || onHome) && (
        <div className="relative z-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-2 sm:mb-3 flex items-center justify-start gap-2.5 sm:gap-3">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
            >
              ← Back
            </button>
          )}
          {onHome && (
            <button
              type="button"
              onClick={onHome}
              className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-[#040A1A] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <Home className="w-4 h-4 text-[#040A1A]" />
              <span>Home</span>
            </button>
          )}
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {badge ? (
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              <span className="inline-block h-0.5 w-5 rounded-full bg-[#2563EB]" />
              <span>{badge}</span>
            </div>
          ) : null}

          <div className="my-1.5 overflow-hidden">
            <CollisionTextHeading text={title} />
          </div>

          {company ? <p className="mt-3 mb-3 text-sm font-bold tracking-wide text-[#1D4ED8] sm:text-lg">{company}</p> : null}
          {summary ? <p className="mx-auto mb-5 max-w-3xl text-sm font-normal leading-relaxed text-slate-600 sm:text-base">{summary}</p> : null}

          {buttonLabel ? (
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={onExplore}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#2563EB] px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[0_8px_20px_rgba(0,103,105,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#004E50] hover:shadow-[0_12px_28px_rgba(0,103,105,0.35)] sm:px-7 sm:py-3 sm:text-base"
              >
                <span>{buttonLabel}</span><span className="text-base" aria-hidden="true">→</span>
              </button>
            </div>
          ) : null}

          {children}
        </div>

        {features?.length ? (
          <div className="mx-auto mt-6 flex max-w-full flex-nowrap items-center justify-center gap-2 px-2 py-1 text-xs font-semibold text-[#2563EB] sm:mt-8 sm:gap-3.5">
            {features.map((feature, index) => (
              <div key={`${feature.label}-${index}`} className={`${index === 2 ? "hidden sm:flex" : "flex"} shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-blue-200 bg-white/95 px-3 py-1.5 shadow-xs backdrop-blur-sm sm:px-3.5`}>
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: feature.dot || "#006769" }} />
                <span>{feature.label}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function Hero({ onBack, onHome }) {
  const handleExplore = () => {
    const el = document.getElementById("section-01");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <IBCSHeadingSection
      badge="IBCS SOFTWARE PRODUCTS"
      title="Purpose & Use Cases"
      company="IB Cyber Security Private Limited (IBCS)"
      summary="Discover how IBCS software products are designed to address practical operational requirements through structured digital workflows, information management, automation, investigation support, and process coordination. Explore their intended purposes and potential applications across government, law enforcement, enterprises, institutions, and public-service environments."
      buttonLabel="Explore Purpose & Use Cases"
      onExplore={handleExplore}
      onBack={onBack}
      onHome={onHome}
      features={[
        { label: "10 Operational Dimensions", dot: "#006769" },
        { label: "111 Purpose & Use Cases", dot: "#14B8A6" },
        { label: "Process & Service Delivery", dot: "#C54E2C" },
      ]}
    />
  );
}

// ============================================================================
// 5. SECTION HEADING ANIMATION (AUTHENTIC SEQUENTIAL & CONTACT SPARK)
// ============================================================================

export function SectionHeadingAnimation({ text = "", className = "" }) {
  const containerRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  const parts = (text || "").trim().split(/\s+/);
  const word1 = parts[0] || "";
  const remainingText = parts.slice(1).join(" ");

  const word1Chars = word1.split("");
  const remainingChars = remainingText.split("");

  const remainingWordTokens = [];
  let charCursor = 0;
  for (let w = 1; w < parts.length; w++) {
    const wordStr = parts[w];
    const letters = [];
    for (let c = 0; c < wordStr.length; c++) {
      letters.push({
        char: wordStr[c],
        index: charCursor,
      });
      charCursor++;
    }
    remainingWordTokens.push({
      word: wordStr,
      letters,
    });
    if (w < parts.length - 1) {
      charCursor++;
    }
  }

  const [word1Count, setWord1Count] = useState(1);
  const [flyingIndex1, setFlyingIndex1] = useState(null);
  const [sparkIndex1, setSparkIndex1] = useState(null);

  const [word2Count, setWord2Count] = useState(0);
  const [flyingIndex2, setFlyingIndex2] = useState(null);

  const [allComplete, setAllComplete] = useState(false);

  const timersRef = useRef([]);

  const clearTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  const addTimer = (callback, delay) => {
    const t = setTimeout(callback, delay);
    timersRef.current.push(t);
    return t;
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mq.matches) {
        setWord1Count(word1Chars.length);
        setWord2Count(remainingChars.length);
        setAllComplete(true);
        setHasStarted(true);
      }
    }
  }, [word1Chars.length, remainingChars.length]);

  useEffect(() => {
    if (hasStarted) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || allComplete) return;

    clearTimers();
    setWord1Count(1);
    setFlyingIndex1(null);
    setSparkIndex1(null);
    setWord2Count(0);
    setFlyingIndex2(null);
    setAllComplete(false);

    const INITIAL_PAUSE = 80;
    const LETTER_DURATION = 260;
    const SETTLE_PAUSE = 20;

    let currentTime = INITIAL_PAUSE;

    for (let i = 1; i < word1Chars.length; i++) {
      const idx = i;
      addTimer(() => {
        setWord1Count((prev) => Math.max(prev, idx + 1));
        setFlyingIndex1(idx);
      }, currentTime);

      const landTime = currentTime + LETTER_DURATION;
      addTimer(() => {
        setFlyingIndex1(null);
        setSparkIndex1(idx);
      }, landTime);

      addTimer(() => {
        setSparkIndex1(null);
      }, landTime + 120);

      currentTime = landTime + SETTLE_PAUSE;
    }

    currentTime += 80;

    const FAST_DURATION = 220;
    const FAST_INTERVAL = 30;

    for (let j = 0; j < remainingChars.length; j++) {
      const idx = j;
      addTimer(() => {
        setWord2Count((prev) => Math.max(prev, idx + 1));
        setFlyingIndex2(idx);
      }, currentTime + idx * FAST_INTERVAL);
    }

    const totalTime = currentTime + remainingChars.length * FAST_INTERVAL + FAST_DURATION;

    addTimer(() => {
      setFlyingIndex2(null);
      setAllComplete(true);
    }, totalTime);

    return clearTimers;
  }, [hasStarted]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center select-none overflow-x-clip ${className}`}
    >
      <h2 className="inline-flex flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-3 tracking-tight font-sans leading-tight">
        <span className="inline-block whitespace-nowrap font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A2540]">
          {word1Chars.map((char, index) => {
            const isFirst = index === 0;
            const isFlying = flyingIndex1 === index;
            const isSettled = index < word1Count && !isFlying;
            const isSparking = sparkIndex1 === index;

            return (
              <span
                key={`w1-${index}`}
                className="relative inline-block"
                style={{
                  opacity: isFirst || isSettled || isFlying ? 1 : 0,
                  willChange: "transform, filter",
                }}
              >
                {isFirst ? (
                  <span className="relative z-10 text-[#0A2540] drop-shadow-[0_2px_8px_rgba(4,44,46,0.1)]">
                    {char}
                  </span>
                ) : (
                  <span
                    className={`relative z-10 inline-block ${
                      isFlying ? "animate-letter-fly-in text-[#2563EB]" : "text-[#0A2540]"
                    }`}
                  >
                    {char}
                    {isFlying && (
                      <span
                        className="absolute top-1/2 -translate-y-1/2 left-full pointer-events-none h-[2px] bg-gradient-to-r from-[#006769] via-[#38BDF8]/70 to-transparent blur-[0.5px] animate-trail-fade"
                        style={{ width: "min(35vw, 130px)" }}
                      />
                    )}
                  </span>
                )}

                {isSparking && (
                  <span
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2 pointer-events-none flex items-center justify-center gap-1 text-[#2563EB] font-bold text-xs animate-impact-spark"
                    aria-hidden="true"
                  >
                    <span className="w-1 h-2.5 bg-[#2563EB] rotate-[-25deg] rounded-full shadow-[0_0_6px_rgba(0,103,105,0.6)]" />
                    <span className="w-1 h-2.5 bg-[#2563EB] rotate-[25deg] rounded-full shadow-[0_0_6px_rgba(0,103,105,0.6)]" />
                  </span>
                )}
              </span>
            );
          })}
        </span>

        {remainingWordTokens.length > 0 && (
          <span className="inline-flex flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-2.5 font-bold text-xl sm:text-2xl lg:text-3xl text-[#1D4ED8]">
            {remainingWordTokens.map((token, tokenIdx) => (
              <span key={`rem-word-${tokenIdx}`} className="inline-block whitespace-nowrap">
                {token.letters.map(({ char, index }) => {
                  const isFlying = flyingIndex2 === index;
                  const isSettled = index < word2Count && !isFlying;

                  return (
                    <span
                      key={`w2-char-${index}`}
                      className="relative inline-block"
                      style={{
                        opacity: isSettled || isFlying ? 1 : 0,
                        willChange: "transform, filter",
                      }}
                    >
                      <span
                        className={`inline-block ${
                          isFlying ? "animate-letter-fly-fast text-[#2563EB]" : "text-[#1D4ED8]"
                        }`}
                      >
                        {char}
                      </span>
                      {isFlying && (
                        <span
                          className="absolute top-1/2 -translate-y-1/2 left-full pointer-events-none h-[1.5px] bg-gradient-to-r from-[#007A7E] via-[#38BDF8]/50 to-transparent blur-[0.5px]"
                          style={{ width: "min(20vw, 70px)" }}
                        />
                      )}
                    </span>
                  );
                })}
              </span>
            ))}
          </span>
        )}
      </h2>

      <div className="relative mt-2.5 h-1 w-full max-w-md mx-auto overflow-hidden">
        {allComplete && (
          <div className="relative w-full h-full animate-underline-sweep">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent shadow-[0_0_10px_rgba(0,103,105,0.4)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rotate-45 bg-[#38BDF8] shadow-[0_0_12px_rgba(20,184,166,0.6)] animate-flare-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// 6. SECTION HEADER (TITLE, WATERMARK, ANIMATED HEADING, INTRO)
// ============================================================================

export function SectionHeader({
  section,
  searchQuery = "",
  showKeyAreasBar = true,
  className = "",
}) {
  if (!section) return null;

  const sectionNumberStr =
    section.sectionNumberRaw ||
    String(section.sectionNumber || 1).padStart(2, '0');

  const formattedTitle = formatSectionTitle(section.title || section.rawHeader);

  return (
    <div className={`relative mb-6 sm:mb-12 pt-2 overflow-x-clip ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-0 hidden select-none grid-cols-6 gap-2 opacity-50 lg:grid"
      >
        {Array.from({ length: 24 }, (_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-blue-300/60" />
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl text-center overflow-x-clip">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-7xl font-black leading-none text-[#2563EB]/10 sm:text-8xl"
        >
          {sectionNumberStr}
        </div>

        <div className="relative z-10">
          <div className="mb-2.5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
            <span className="inline-block h-0.5 w-6 rounded-full bg-[#2563EB]" />
            <span>{`SECTION ${sectionNumberStr}`}</span>
          </div>

          <SectionHeadingAnimation text={formattedTitle} />

          {section.intro ? (
            <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base font-normal leading-relaxed text-slate-600">
              {searchQuery ? (
                <HighlightText text={section.intro} query={searchQuery} />
              ) : (
                section.intro
              )}
            </p>
          ) : null}
        </div>
      </div>

      {showKeyAreasBar && section.keyAreasHeader ? (
        <div className="mt-8 flex items-center justify-between border-b border-blue-200 pb-3">
          <h3 className="text-base sm:text-lg font-bold text-[#0A2540] flex items-center gap-2">
            <span>{section.keyAreasHeader}</span>
          </h3>
          <span className="text-xs font-mono font-medium text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
            {section.keyAreas?.length || 10} Strategic Focus Areas
          </span>
        </div>
      ) : null}
    </div>
  );
}

// ============================================================================
// 7. 3D STAR EMBLEM & FLOATING GLASSMORPHISM SHOWCASE COMPONENT
// (Enlarged Rotating 3D Star, Aligned Data Display, Pure SVG Icons, Hover-Only Star Pause)
// ============================================================================

function getIconPaths(type = "default", color = "currentColor") {
  const key = String(type).toLowerCase();
  switch (key) {
    case "police":
    case "enforcement":
    case "cap":
      return (
        <>
          <path d="M4 14.5c0 0 2-2.5 8-2.5s8 2.5 8 2.5" />
          <path d="M5.5 13.5l1.8-6.2a2 2 0 0 1 1.9-1.3h5.6a2 2 0 0 1 1.9 1.3l1.8 6.2" />
          <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.5H3V16z" />
          <path d="M2.5 18.5c1.8 2 5.5 3 9.5 3s7.7-1 9.5-3" />
          <circle cx="12" cy="9.5" r="1.3" fill={color} />
        </>
      );
    case "shield":
    case "security":
      return (
        <>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </>
      );
    case "search":
    case "investigation":
      return (
        <>
          <circle cx="11" cy="11" r="7.5" />
          <path d="M21 21l-4.5-4.5" strokeWidth="2.4" />
          <circle cx="11" cy="11" r="2.5" fill={color} fillOpacity="0.25" />
        </>
      );
    case "chart":
    case "analytics":
      return (
        <>
          <rect x="3" y="14" width="3.5" height="7" rx="1" fill={color} fillOpacity="0.25" />
          <rect x="8.5" y="10" width="3.5" height="11" rx="1" fill={color} fillOpacity="0.3" />
          <rect x="14" y="6" width="3.5" height="15" rx="1" fill={color} fillOpacity="0.35" />
          <path d="M3 11l6-5 5 3 7-7" strokeWidth="2" />
          <polyline points="17 2 21 2 21 6" strokeWidth="2" />
        </>
      );
    case "fingerprint":
    case "identity":
      return (
        <>
          <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
          <path d="M5 19.5C5.5 18 6 15 6 12c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2.5-.5 5-1.2 7" />
          <path d="M12 10a2 2 0 0 0-2 2c0 2 .5 4 1 6" />
          <path d="M14 13.5a13 13 0 0 1-.5 4.5" />
          <path d="M8.5 15.5c.3 1.5.8 3 1.5 4.5" />
        </>
      );
    case "gear":
    case "workflow":
    case "automation":
      return (
        <>
          <circle cx="12" cy="12" r="3.5" fill={color} fillOpacity="0.25" />
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" strokeWidth="2" />
        </>
      );
    case "government":
    case "institution":
      return (
        <>
          <path d="M2 9l10-6 10 6v2H2V9z" fill={color} fillOpacity="0.2" />
          <path d="M4.5 11v7M9.5 11v7M14.5 11v7M19.5 11v7" />
          <path d="M2 18h20v3H2v-3z" fill={color} fillOpacity="0.2" />
          <circle cx="12" cy="6.2" r="1.2" fill={color} />
        </>
      );
    case "briefcase":
    case "business":
      return (
        <>
          <rect x="3" y="7" width="18" height="13" rx="2.5" fill={color} fillOpacity="0.1" />
          <path d="M8 7V4.5a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 4.5V7" />
          <line x1="12" y1="11" x2="12" y2="13" strokeWidth="2" />
          <path d="M3 12h18" strokeWidth="1.4" strokeOpacity="0.4" />
        </>
      );
    case "database":
    case "data":
      return (
        <>
          <ellipse cx="12" cy="5" rx="8" ry="3" fill={color} fillOpacity="0.2" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
          <circle cx="12" cy="11" r="1.2" fill={color} />
          <circle cx="12" cy="17" r="1.2" fill={color} />
        </>
      );
    case "cloud":
    case "platform":
      return (
        <>
          <path d="M17.5 19H7a4.5 4.5 0 0 1-.9-8.91 5.5 5.5 0 0 1 10.74-1.57A4 4 0 0 1 17.5 19z" fill={color} fillOpacity="0.1" />
          <polyline points="9 13 12 10 15 13" strokeWidth="2" />
          <line x1="12" y1="10" x2="12" y2="16" strokeWidth="2" />
        </>
      );
    case "ai":
    case "neural":
      return (
        <>
          <rect x="5" y="5" width="14" height="14" rx="3" fill={color} fillOpacity="0.12" />
          <circle cx="9" cy="9" r="1.5" fill={color} />
          <circle cx="15" cy="9" r="1.5" fill={color} />
          <circle cx="12" cy="14" r="1.8" fill={color} fillOpacity="0.4" strokeWidth="1.5" />
          <path d="M9 9l3 5 3-5" strokeWidth="1.5" />
          <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
        </>
      );
    case "delivery":
    case "service":
      return (
        <>
          <circle cx="12" cy="7" r="3.5" fill={color} fillOpacity="0.25" />
          <path d="M4 20c0-3.5 3.5-6 8-6s8 2.5 8 6" strokeWidth="1.8" />
          <path d="M12 2v2M19 5l-1.5 1.5M5 5l1.5 1.5" strokeOpacity={0.6} />
        </>
      );
    case "lock":
      return (
        <>
          <rect x="4" y="10" width="16" height="11" rx="2.5" fill={color} fillOpacity="0.1" />
          <path d="M7 10V6.5a5 5 0 0 1 10 0V10" />
          <circle cx="12" cy="15.5" r="1.5" fill={color} />
        </>
      );
    case "document":
      return (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill={color} fillOpacity="0.1" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" strokeWidth="1.8" />
          <line x1="16" y1="17" x2="8" y2="17" strokeWidth="1.8" />
        </>
      );
    case "network":
      return (
        <>
          <circle cx="18" cy="6" r="3" fill={color} fillOpacity="0.25" />
          <circle cx="6" cy="18" r="3" fill={color} fillOpacity="0.25" />
          <circle cx="18" cy="18" r="3" fill={color} fillOpacity="0.25" />
          <path d="M8.7 16.5l6.6-8.2M8.7 18h6.6" strokeWidth="1.8" />
        </>
      );
    case "puzzle":
      return (
        <>
          <path d="M14 4a2 2 0 0 1 2 2v2a2 2 0 1 0 4 0V6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 1 0 0 4h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2a2 2 0 1 0-4 0v2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2a2 2 0 1 0 0-4H4a2 2 0 0 1 2-2z" fill={color} fillOpacity="0.12" />
          <circle cx="12" cy="12" r="2" fill={color} />
        </>
      );
    default:
      return (
        <>
          <circle cx="12" cy="12" r="9.5" />
          <circle cx="12" cy="12" r="3.5" fill={color} fillOpacity="0.3" />
        </>
      );
  }
}

function RenderSvgIcon({ type = "default", size = 24, color = "currentColor", strokeWidth = 2, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {getIconPaths(type, color)}
    </svg>
  );
}

function getShowcaseIconType(item, idx) {
  if (!item) return "police";
  if (item.iconType) return item.iconType.toLowerCase();
  const text = `${item.title || ""} ${item.description || ""}`.toLowerCase();

  if (text.includes("police") || text.includes("law") || text.includes("enforce") || text.includes("patrol") || text.includes("officer")) return "police";
  if (text.includes("investigat") || text.includes("evidence") || text.includes("forensic") || text.includes("search") || text.includes("complaint") || text.includes("detect")) return "search";
  if (text.includes("secur") || text.includes("protect") || text.includes("threat") || text.includes("cybersecurity") || text.includes("firewall") || text.includes("risk")) return "shield";
  if (text.includes("analyt") || text.includes("insight") || text.includes("trend") || text.includes("chart") || text.includes("metric") || text.includes("performance") || text.includes("growth")) return "chart";
  if (text.includes("ident") || text.includes("biometric") || text.includes("fingerprint") || text.includes("access") || text.includes("auth") || text.includes("credential")) return "fingerprint";
  if (text.includes("workflow") || text.includes("automat") || text.includes("orchestrat") || text.includes("process") || text.includes("task") || text.includes("activity")) return "gear";
  if (text.includes("govern") || text.includes("institution") || text.includes("department") || text.includes("public") || text.includes("civic")) return "government";
  if (text.includes("case") || text.includes("lifecycle") || text.includes("handover") || text.includes("business") || text.includes("intake")) return "briefcase";
  if (text.includes("data") || text.includes("record") || text.includes("database") || text.includes("information") || text.includes("consolidation") || text.includes("archive")) return "database";
  if (text.includes("cloud") || text.includes("platform") || text.includes("infrastructure") || text.includes("scale") || text.includes("deploy")) return "cloud";
  if (text.includes("ai") || text.includes("intelligent") || text.includes("machine") || text.includes("smart") || text.includes("decision")) return "ai";
  if (text.includes("deliver") || text.includes("service") || text.includes("fulfilment") || text.includes("outcome") || text.includes("citizen")) return "delivery";
  if (text.includes("document") || text.includes("verification") || text.includes("validation") || text.includes("file") || text.includes("report")) return "document";
  if (text.includes("coordinat") || text.includes("handoff") || text.includes("flow") || text.includes("routing") || text.includes("continuity")) return "network";
  if (text.includes("solution") || text.includes("problem") || text.includes("exception") || text.includes("resolution")) return "puzzle";

  const fallbackCycle = ["police", "shield", "search", "chart", "fingerprint", "gear", "government", "database"];
  return fallbackCycle[idx % fallbackCycle.length];
}

/**
 * 3D Star Emblem & Podium Visual Area
 * - Enlarged 3D Star presence (viewBox 0 0 580 490, R=170, r=80, center core r=57)
 * - Dynamic 3D rotation step: star rotates smoothly, bringing the active point to top alignment
 * - When aligned at top position, center badge displays the active icon in crisp white pure SVG
 * - Surrounding star tips have pure SVG icons with counter-rotation to stay perfectly upright
 * - Orbital ring features interactive luminous nodes for ALL items in the section ("jitna data hoga wo star ke sath rahega")
 * - Hover pause is attached strictly to the Star platform
 */
function StarEmblem3D({
  activeItem,
  items = [],
  step = 0,
  targetIndex = 0,
  displayedIndex = 0,
  onSelectIndex,
  activeIconType,
  isReverseLayout = false,
  isMobile = false,
}) {
  const n = items.length;

  // Exact mathematical orientation so active star tip points directly to the Data Box:
  // - On Mobile: Data Box is positioned on TOP, so active tip points straight UP (12 o'clock / 0° base angle)
  // - On Desktop (standard layout): Data Box on RIGHT, so active tip points to the RIGHT (3 o'clock / +90°)
  // - On Desktop (reverse layout): Data Box on LEFT, so active tip points to the LEFT (9 o'clock / -90°)
  const baseAngle = isMobile ? 0 : (isReverseLayout ? -90 : 90);
  const effectiveRotation = baseAngle - step * 72;

  // The tip that is rotated directly into the pointer position facing the Data Box
  const activeTipId = ((step % 5) + 5) % 5;

  // 5 Star tips at distance 115 along exact ray centers from center (cx=290, cy=195)
  // Ray Angles: Tip 0: -90° (Top), Tip 1: -18°, Tip 2: 54°, Tip 3: 126°, Tip 4: 198°
  const tipBasePositions = [
    { tipId: 0, x: 290, y: 80 },
    { tipId: 1, x: 399.4, y: 159.5 },
    { tipId: 2, x: 357.6, y: 288.0 },
    { tipId: 3, x: 222.4, y: 288.0 },
    { tipId: 4, x: 180.6, y: 159.5 },
  ];

  const tipItems = tipBasePositions.map((tip) => {
    const isTipActive = tip.tipId === activeTipId;
    return {
      ...tip,
      isActive: isTipActive,
    };
  });

  return (
    <div className="relative w-full flex flex-col items-center justify-center select-none py-2 lg:py-4">
      <svg
        viewBox="0 0 580 490"
        className="w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[580px] xl:max-w-[620px] mx-auto overflow-visible drop-shadow-2xl"
        aria-hidden="true"
      >
        <defs>
          {/* 3D Star Outer Bevel Gradient */}
          <linearGradient id="starBevelGradLarge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="25%" stopColor="#60A5FA" />
            <stop offset="65%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          {/* Star Front Face Glossy Ice-White Gradient */}
          <linearGradient id="starFaceGradLarge" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="65%" stopColor="#F0F9FF" />
            <stop offset="100%" stopColor="#E0F2FE" />
          </linearGradient>

          {/* Deep Royal Blue Radial Core Gradient */}
          <radialGradient id="coreDeepBlueGradLarge" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="40%" stopColor="#2563EB" />
            <stop offset="75%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </radialGradient>

          {/* Podium Upper Stage Disc Gradient */}
          <linearGradient id="podiumTopDiscLarge" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="45%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          {/* Podium Lower Base Cylinder Body */}
          <linearGradient id="podiumBaseBodyLarge" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#0B192C" />
          </linearGradient>

          {/* Neon Cyan Glow Filter */}
          <filter id="neonCyanGlowLarge" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* 3D Star Drop Shadow onto the Stage */}
          <filter id="starDropShadowLarge" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="24" stdDeviation="18" floodColor="#1D4ED8" floodOpacity="0.38" />
          </filter>
        </defs>

        {/* 1. Luminous Floor Stage Ripples */}
        <g className="animate-floor-ripple">
          <ellipse cx="290" cy="428" rx="250" ry="38" fill="none" stroke="rgba(56, 189, 248, 0.22)" strokeWidth="1.8" />
          <ellipse cx="290" cy="428" rx="200" ry="30" fill="none" stroke="rgba(56, 189, 248, 0.42)" strokeWidth="2.2" />
          <ellipse cx="290" cy="428" rx="150" ry="22" fill="none" stroke="rgba(56, 189, 248, 0.75)" strokeWidth="2.8" />
        </g>

        {/* 2. 3D Podium Base (Lower Tier) */}
        <path
          d="M 122 395 C 122 423, 458 423, 458 395 L 458 420 C 458 448, 122 448, 122 420 Z"
          fill="url(#podiumBaseBodyLarge)"
        />
        <ellipse cx="290" cy="395" rx="168" ry="28" fill="#1E3A8A" stroke="#38BDF8" strokeWidth="2" />

        {/* 3. 3D Podium Upper Stage (Tier 1) */}
        <path
          d="M 155 365 C 155 390, 425 390, 425 365 L 425 385 C 425 410, 155 410, 155 385 Z"
          fill="url(#podiumBaseBodyLarge)"
        />
        <ellipse cx="290" cy="365" rx="135" ry="22" fill="url(#podiumTopDiscLarge)" stroke="#67E8F9" strokeWidth="2.4" />
        <ellipse cx="290" cy="365" rx="126" ry="20" fill="none" stroke="#38BDF8" strokeWidth="2" filter="url(#neonCyanGlowLarge)" />

        {/* 4. 3D Orbital Light Rings with Glowing Cyan Arrows & ALL Items' Orbital Nodes */}
        <g transform="rotate(-15 290 195)" className="animate-orbit-spin">
          {/* Main Orbital Track */}
          <ellipse
            cx="290"
            cy="195"
            rx="230"
            ry="72"
            fill="none"
            stroke="url(#starBevelGradLarge)"
            strokeWidth="2.2"
            strokeDasharray="8 10"
            strokeOpacity="0.85"
          />
          {/* Right orbital arrow tip */}
          <path d="M 520 195 L 508 186 L 512 195 L 508 204 Z" fill="#38BDF8" filter="url(#neonCyanGlowLarge)" />
          {/* Left orbital arrow tip */}
          <path d="M 60 195 L 72 186 L 68 195 L 72 204 Z" fill="#38BDF8" filter="url(#neonCyanGlowLarge)" />

          {/* Luminous Orbital Nodes for ALL items in this section */}
          {items.map((it, idx) => {
            const angleRad = (idx / n) * 2 * Math.PI;
            const nodeX = 290 + 230 * Math.cos(angleRad);
            const nodeY = 195 + 72 * Math.sin(angleRad);
            const isNodeActive = idx === targetIndex;

            return (
              <g
                key={`orbital-bead-${idx}`}
                className="cursor-pointer transition-transform duration-200 hover:scale-130"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectIndex(idx);
                }}
              >
                <circle
                  cx={nodeX}
                  cy={nodeY}
                  r={isNodeActive ? 8 : 5}
                  fill={isNodeActive ? "#38BDF8" : "rgba(186, 230, 253, 0.85)"}
                  stroke={isNodeActive ? "#FFFFFF" : "#2563EB"}
                  strokeWidth={isNodeActive ? 2.2 : 1.2}
                  filter={isNodeActive ? "url(#neonCyanGlowLarge)" : undefined}
                />
                <title>{`Item ${idx + 1}: ${it?.title}`}</title>
              </g>
            );
          })}
        </g>

        {/* 5. 3D Star Assembly (Rotates smoothly on index change, aligning the active point directly to data box!) */}
        <g className="animate-star-float" filter="url(#starDropShadowLarge)">
          {/* Rotating Star Body (Smooth physical rotation with 0.4s timing) */}
          <g
            style={{
              transform: `rotate(${effectiveRotation}deg)`,
              transformOrigin: "290px 195px",
              transition: "transform 0.4s cubic-bezier(0.34, 1.25, 0.64, 1)",
            }}
          >
            {/* 3D Star Outer Bevel Rim (Enlarged R=170, r=80) */}
            <path
              d="M 290 25 L 337 130.3 L 451.7 142.5 L 366.1 219.7 L 389.9 332.5 L 290 275 L 190.1 332.5 L 213.9 219.7 L 128.3 142.5 L 243 130.3 Z"
              fill="url(#starFaceGradLarge)"
              stroke="url(#starBevelGradLarge)"
              strokeWidth="14"
              strokeLinejoin="round"
            />

            {/* 5 Precision Facet Crease Lines from Outer Tips Directly to Center Core */}
            <line x1="290" y1="25" x2="290" y2="129" stroke="rgba(147, 197, 253, 0.75)" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="451.7" y1="142.5" x2="352.8" y2="174.6" stroke="rgba(147, 197, 253, 0.75)" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="389.9" y1="332.5" x2="328.8" y2="248.4" stroke="rgba(147, 197, 253, 0.75)" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="190.1" y1="332.5" x2="251.2" y2="248.4" stroke="rgba(147, 197, 253, 0.75)" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="128.3" y1="142.5" x2="227.2" y2="174.6" stroke="rgba(147, 197, 253, 0.75)" strokeWidth="1.8" strokeLinecap="round" />

            {/* 5 Sectoral 3D Star Tip Spheres (Clean 3D Frosted Glass Nodes, locked in place with zero hover jitter) */}
            {tipItems.map((tip) => (
              <g
                key={`star-tip-${tip.tipId}`}
                className="pointer-events-none transition-colors duration-200"
              >
                {/* Frosted Circular Tip Disc - Compact r=16 to stay well within star bevel lines */}
                <circle
                  cx={tip.x}
                  cy={tip.y}
                  r="16"
                  fill={tip.isActive ? "rgba(224, 242, 254, 0.95)" : "rgba(240, 249, 255, 0.85)"}
                  stroke={tip.isActive ? "#38BDF8" : "rgba(147, 197, 253, 0.7)"}
                  strokeWidth={tip.isActive ? 2.8 : 1.5}
                  filter={tip.isActive ? "url(#neonCyanGlowLarge)" : undefined}
                />
                {/* 3D Glass Specular Highlight Reflection */}
                <circle
                  cx={tip.x - 3.5}
                  cy={tip.y - 3.5}
                  r="4.5"
                  fill="rgba(255, 255, 255, 0.9)"
                  filter="blur(0.4px)"
                />
                {/* Active Tip Subtle Centered Cyan Accent (Solid & stable) */}
                {tip.isActive && (
                  <circle
                    cx={tip.x}
                    cy={tip.y}
                    r="4.5"
                    fill="#38BDF8"
                  />
                )}
              </g>
            ))}
          </g>

          {/* Central Circular Emblem Core (The ONLY icon on the Star, synchronized in real-time with active data!) */}
          <g className="animate-core-pulse">
            {/* Outer Neon Cyan Glow Ring (r=66) */}
            <circle cx="290" cy="195" r="66" fill="none" stroke="#38BDF8" strokeWidth="4.8" filter="url(#neonCyanGlowLarge)" />
            <circle cx="290" cy="195" r="61" fill="none" stroke="#67E8F9" strokeWidth="2.5" />

            {/* Inner Deep Royal Blue Core Disc (r=57) */}
            <circle cx="290" cy="195" r="57" fill="url(#coreDeepBlueGradLarge)" />

            {/* Glossy Top Reflection Arc */}
            <path
              d="M 238 185 A 57 57 0 0 1 342 185 A 57 26 0 0 0 238 185 Z"
              fill="rgba(255, 255, 255, 0.35)"
            />

            {/* Center Aligned Item's Icon in Crisp White Pure SVG - Centered directly at (290, 195) */}
            <g
              key={`center-core-icon-${displayedIndex}`}
              transform="translate(290, 195)"
            >
              <g
                transform="translate(-18, -18) scale(1.5)"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}
              >
                {getIconPaths(activeIconType, "#FFFFFF")}
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

/**
 * StarGlassmorphismShowcase (Complete Section Showcase Component)
 * - Text Slide Animation: Smooth directional slide when transitioning
 * - Dedicated Next & Previous Buttons: Clear, prominent interactive buttons
 * - Compact & Aligned Card: Reduced bloated height, proportional sizing
 * - Compact Icon Tile: Refined, elegant square icon tile
 * - Middle Star Icon: Synchronized in real-time with incoming aligned data
 * - Hover pause: Attached strictly to the Star Platform
 */
export function StarGlassmorphismShowcase({
  items = [],
  className = "",
  ariaLabel = "Information showcase",
  autoRotateInterval = 5000,
  searchQuery = "",
  layout = "mobile-left",
}) {
  const [targetIndex, setTargetIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isStarHovered, setIsStarHovered] = useState(false);
  const [slideDirection, setSlideDirection] = useState("next");
  const [isMobile, setIsMobile] = useState(false);

  const touchStartX = useRef(null);
  const timerRef = useRef(null);

  const n = items.length;

  // Window resize listener to detect mobile viewport (< 1024px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Instant response transition handler (Zero lag for rapid button clicks!)
  const handleTransition = useCallback((nextIdx) => {
    if (nextIdx === targetIndex) return;
    setSlideDirection(nextIdx >= targetIndex ? "next" : "prev");
    const delta = nextIdx - targetIndex;
    setStep((s) => s + delta);
    setTargetIndex(nextIdx);
    setDisplayedIndex(nextIdx);
  }, [targetIndex]);

  const flowNext = useCallback(() => {
    if (n <= 1) return;
    setSlideDirection("next");
    const nextIdx = (targetIndex + 1) % n;
    setStep((s) => s + 1);
    setTargetIndex(nextIdx);
    setDisplayedIndex(nextIdx);
  }, [n, targetIndex]);

  const flowPrev = useCallback(() => {
    if (n <= 1) return;
    setSlideDirection("prev");
    const prevIdx = (targetIndex - 1 + n) % n;
    setStep((s) => s - 1);
    setTargetIndex(prevIdx);
    setDisplayedIndex(prevIdx);
  }, [n, targetIndex]);

  // Auto-rotation pauses ONLY when user hovers directly on the Star
  useEffect(() => {
    if (!isPlaying || isStarHovered || n <= 1) return;

    timerRef.current = setInterval(() => {
      flowNext();
    }, autoRotateInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isStarHovered, flowNext, autoRotateInterval, n]);

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    if (diff < -40) flowNext();
    if (diff > 40) flowPrev();
    touchStartX.current = null;
  };

  if (!items || items.length === 0) return null;

  const displayedItem = items[displayedIndex] || items[0];
  const displayedIconType = getShowcaseIconType(displayedItem, displayedIndex);

  const isReverseLayout = layout === "mobile-right";

  return (
    <div
      className={`relative w-full max-w-6xl mx-auto px-2 sm:px-4 ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
        {/* Floating Glassmorphism Panel (Data Box): On mobile, rendered on TOP (order-1); on desktop, follows alternating layout */}
        <div
          className={`w-full lg:col-span-7 xl:col-span-6 flex flex-col justify-center order-1 ${
            isReverseLayout ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="glass-showcase-panel p-4 sm:p-6 lg:p-7 relative overflow-hidden w-full max-w-xl mx-auto shadow-xl">
            {/* Top Bar: Counter & Progress Bar on left + Status Pill on right */}
            <div className="flex items-center justify-between gap-4 border-b border-blue-100/70 pb-3 sm:pb-4">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1 font-mono">
                  <span className="text-xl sm:text-2xl font-black text-[#1E3A8A] tracking-tight">
                    {String(displayedIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-400">
                    / {String(n).padStart(2, "0")}
                  </span>
                </div>
                {/* Thin Progress Indicator */}
                <div className="w-20 sm:w-28 h-1.5 bg-blue-100/80 rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 rounded-full transition-all duration-300"
                    style={{ width: `${((displayedIndex + 1) / n) * 100}%` }}
                  />
                </div>
              </div>

              {/* Status Badge (Auto-Flowing / Paused on Star Hover) */}
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50/80 hover:bg-blue-100/80 px-2.5 py-1 rounded-full border border-blue-200/60 transition-colors cursor-pointer"
                aria-label={isPlaying ? "Pause auto rotation" : "Resume auto rotation"}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isPlaying && !isStarHovered ? "bg-cyan-500 animate-pulse" : "bg-amber-400"
                  }`}
                />
                <span>
                  {isStarHovered
                    ? "Paused on Star Hover"
                    : isPlaying
                    ? "Auto-Flowing"
                    : "Paused"}
                </span>
              </button>
            </div>

            {/* Main Content Area: Compact Icon + Animated Sliding Text */}
            <div
              key={`showcase-content-${displayedIndex}`}
              className={`flex flex-col sm:flex-row items-start gap-4 sm:gap-5 pt-4 sm:pt-5 min-h-[140px] ${
                slideDirection === "next" ? "animate-text-slide-next" : "animate-text-slide-prev"
              }`}
            >
              {/* Compact Glossy Blue Square Icon Tile */}
              <div className="glass-tile-gloss w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 relative overflow-hidden shadow-md">
                {/* Gloss reflection highlight arc */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-transparent pointer-events-none rounded-xl" />
                <RenderSvgIcon
                  type={displayedIconType}
                  size={26}
                  color="#FFFFFF"
                  strokeWidth={2}
                  className="relative z-10 drop-shadow-md text-white"
                />
              </div>

              {/* Title, Accent Line, and Description */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight leading-snug">
                  <HighlightText text={displayedItem.title} query={searchQuery} />
                </h3>
                {/* Accent Underline */}
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full my-2" />
                {displayedItem.description && (
                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    <HighlightText text={displayedItem.description} query={searchQuery} />
                  </p>
                )}
              </div>
            </div>

            {/* Bottom Controls Row: Previous on Left, Points in Middle, Next on Last End (NO scroll, compact responsive fit) */}
            <div className="flex items-center justify-between gap-1.5 sm:gap-4 mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-blue-100/60">
              {/* 1. First: Previous Action Button */}
              <button
                type="button"
                onClick={flowPrev}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold text-[#1E3A8A] bg-white hover:bg-blue-50/80 border border-blue-200 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
                aria-label="Previous item"
              >
                <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Prev</span>
              </button>

              {/* 2. Middle: Pagination Indicator Points / Dots (Strictly no scroll, perfectly aligned & proportional) */}
              <div className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-1 sm:px-2 min-w-0 overflow-visible flex-nowrap" role="tablist" aria-label="Quick Item Selector">
                {items.map((_, dotIdx) => (
                  <button
                    key={`glass-dot-${dotIdx}`}
                    type="button"
                    onClick={() => handleTransition(dotIdx)}
                    className={`glass-dot h-1.5 sm:h-2 rounded-full cursor-pointer transition-all duration-200 shrink-0 ${
                      dotIdx === targetIndex
                        ? "is-active w-3.5 sm:w-5 bg-blue-600 shadow-xs"
                        : "w-1.5 sm:w-2 bg-blue-200 hover:bg-blue-300"
                    }`}
                    aria-label={`Jump to item ${dotIdx + 1}`}
                    aria-selected={dotIdx === targetIndex}
                  />
                ))}
              </div>

              {/* 3. Last End: Next Action Button */}
              <button
                type="button"
                onClick={flowNext}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-sm shadow-blue-500/25 hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
                aria-label="Next item"
              >
                <span>Next</span>
                <svg className="w-3.5 h-3.5 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Visual 3D Star Platform: On mobile, rendered on BOTTOM (order-2) below Data Box; active tip points UP towards Data Box */}
        <div
          className={`w-full lg:col-span-5 xl:col-span-6 flex flex-col items-center justify-center cursor-pointer star-hover-frame order-2 ${
            isReverseLayout ? "lg:order-2" : "lg:order-1"
          }`}
          onMouseEnter={() => setIsStarHovered(true)}
          onMouseLeave={() => setIsStarHovered(false)}
          title="Hover to pause rotation. Click star tips or orbital nodes to navigate."
        >
          <StarEmblem3D
            activeItem={displayedItem}
            items={items}
            step={step}
            targetIndex={targetIndex}
            displayedIndex={displayedIndex}
            onSelectIndex={handleTransition}
            activeIconType={displayedIconType}
            isReverseLayout={isReverseLayout}
            isMobile={isMobile}
          />
        </div>
      </div>
    </div>
  );
}

// Alias for backwards compatibility
export const RetroPixelCardGrid = StarGlassmorphismShowcase;

// ============================================================================
// 8. SECTION ITEM (3D STAR EMBLEM & GLASSMORPHISM DESIGN FOR ALL 10 SECTIONS)
// ============================================================================

export function SectionItem({
  section,
  searchQuery,
  layout = "mobile-left",
  subheadingTitle,
}) {
  if (!section) return null;
  return (
    <section
      id={section.id}
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F0F7FF] via-[#FFFFFF] to-[#EFF6FF] border-b border-blue-100/80 scroll-mt-20 overflow-hidden"
    >
      {/* Background Soft Glow Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-cyan-200/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-blue-200/20 blur-3xl"
      />

      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center px-3 sm:px-6 lg:px-8">
        {/* Original Section Header with Title, Description, and Number preserved */}
        <SectionHeader section={section} searchQuery={searchQuery} showKeyAreasBar={false} />

        {/* 3D Star Platform & Floating Glassmorphism Showcase */}
        <div className="w-full mt-4 sm:mt-6">
          <StarGlassmorphismShowcase
            items={section.keyAreas}
            ariaLabel={`${section.title} Showcase`}
            searchQuery={searchQuery}
            layout={layout}
          />
        </div>
      </div>
    </section>
  );
}

const SECTION_CONFIGS = [
  { id: "section-01", layout: "mobile-left", subheading: "Explore Product Purpose" },
  { id: "section-02", layout: "mobile-right", subheading: "Explore Operational Purposes" },
  { id: "section-03", layout: "mobile-left", subheading: "Explore Investigation & Evidence Use Cases" },
  { id: "section-04", layout: "mobile-right", subheading: "Explore Cybersecurity & Digital Risk Use Cases" },
  { id: "section-05", layout: "mobile-left", subheading: "Explore Government & Institutional Use Cases" },
  { id: "section-06", layout: "mobile-right", subheading: "Explore Public & End-User Use Cases" },
  { id: "section-07", layout: "mobile-left", subheading: "Explore Analytics, Automation & Intelligence Use Cases" },
  { id: "section-08", layout: "mobile-right", subheading: "Explore Operational Coordination & Information Flow" },
  { id: "section-09", layout: "mobile-left", subheading: "Explore Information-Driven Decision & Action Use Cases" },
  { id: "section-10", layout: "mobile-right", subheading: "Explore Process Outcome & Service Delivery Use Cases" },
];

// ============================================================================
// 9. COMPLETE PURPOSE & USE CASES PAGE COMPONENT
// ============================================================================

export default function PurposeAndUseCases({ onClose }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleBack = () => {
    if (onClose) {
      onClose();
    } else if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = '#software-products';
    }
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Embedded Styles */}
      <style dangerouslySetInnerHTML={{ __html: EMBEDDED_STYLES }} />

      <main className="flex-1 overflow-x-hidden">
        {/* Top Hero Section */}
        <Hero onBack={handleBack} onHome={handleHome} />

        {/* 10 Purpose & Use Cases Sections with Alternating Layouts */}
        {technologySections.map((section, idx) => {
          const config = SECTION_CONFIGS[idx] || {
            layout: idx % 2 === 0 ? "mobile-left" : "mobile-right",
            subheading: `Explore ${section.title}`,
          };
          const sectionId = section.id || `tech-section-${idx}`;

          return (
            <SectionItem
              key={sectionId}
              section={section}
              searchQuery={searchQuery}
              layout={config.layout}
              subheadingTitle={config.subheading}
            />
          );
        })}
      </main>
    </div>
  );
}

export const ProductRoadmap = PurposeAndUseCases;
export const VisionMission = PurposeAndUseCases;
export const PurposeUseCases = PurposeAndUseCases;
export const PurposeUseCasesPage = PurposeAndUseCases;

