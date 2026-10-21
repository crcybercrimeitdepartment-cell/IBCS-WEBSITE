import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  CheckCircle2,
  Layers,
  SlidersHorizontal,
  Cpu,
  ShieldCheck,
  Maximize2,
  Laptop,
  Cloud,
  Network,
  Box,
  Gauge,
  Compass,
  Target,
  Smartphone,
  Brain,
  Terminal,
  Code2,
  Database,
  Workflow,
  Globe,
  Home,
} from 'lucide-react';
import { technologySections } from './ProductBenefitsImpactPageData';

// ============================================================================
// EMBEDDED STYLES (Consolidated from index.css & section-heading-animations.css)
// ============================================================================

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
 * Intelligent Icon Mapping based on Key Area Title
 */
export function getIconForArea(title = "", index = 0) {
  const t = title.toLowerCase();
  if (t.includes("ai") || t.includes("ml") || t.includes("machine learning") || t.includes("intelligence") || t.includes("analytical")) return Brain;
  if (t.includes("security") || t.includes("defense") || t.includes("protect") || t.includes("safety") || t.includes("cyber") || t.includes("compliance") || t.includes("law")) return ShieldCheck;
  if (t.includes("cloud") || t.includes("infra") || t.includes("serverless")) return Cloud;
  if (t.includes("database") || t.includes("data") || t.includes("record") || t.includes("storage") || t.includes("banking") || t.includes("financial")) return Database;
  if (t.includes("mobile") || t.includes("app") || t.includes("device")) return Smartphone;
  if (t.includes("network") || t.includes("api") || t.includes("gateway") || t.includes("connectivity") || t.includes("interdepartmental")) return Network;
  if (t.includes("code") || t.includes("modern") || t.includes("technology")) return Code2;
  if (t.includes("terminal") || t.includes("script") || t.includes("command")) return Terminal;
  if (t.includes("workflow") || t.includes("process") || t.includes("automation") || t.includes("pipeline") || t.includes("coordination")) return Workflow;
  if (t.includes("public") || t.includes("citizen") || t.includes("social") || t.includes("community") || t.includes("user") || t.includes("service")) return Globe;
  if (t.includes("scale") || t.includes("growth") || t.includes("expand") || t.includes("sustainable")) return Maximize2;
  if (t.includes("speed") || t.includes("fast") || t.includes("time") || t.includes("performance") || t.includes("accelerat")) return Gauge;
  if (t.includes("task") || t.includes("product") || t.includes("module") || t.includes("component") || t.includes("capability")) return Box;
  if (t.includes("investigat") || t.includes("evidence") || t.includes("search") || t.includes("awareness")) return Search;
  if (t.includes("decision") || t.includes("strategy") || t.includes("governance") || t.includes("institutional") || t.includes("planning")) return Compass;
  if (t.includes("efficiency") || t.includes("productivity") || t.includes("standard") || t.includes("value") || t.includes("benefit")) return CheckCircle2;

  const fallbacks = [Layers, SlidersHorizontal, Cpu, ShieldCheck, Maximize2, Laptop, Cloud, Network, Box, Gauge, Compass, Target];
  return fallbacks[index % fallbacks.length];
}

/**
 * Concise Keypad Label (up to 11 chars) to prevent button overflow
 */
export function getShortLabel(title = "") {
  if (!title) return "Key";
  const words = title.trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 10);
  if (words[0].length <= 5 && words[1]) return `${words[0]} ${words[1]}`.slice(0, 11);
  return words[0].slice(0, 10);
}

/**
 * Upper-right Dot Matrix Decoration
 */
export function DotMatrix({ className = "" }) {
  return (
    <div className={`grid grid-cols-6 gap-2 w-max select-none pointer-events-none ${className}`} aria-hidden="true">
      {Array.from({ length: 24 }).map((_, index) => (
        <span key={index} className="w-1.5 h-1.5 rounded-full bg-[#8FD6CF]/60" />
      ))}
    </div>
  );
}

// ============================================================================
// 2. HERO SECURITY BACKGROUND & FLOATING ICONS
// ============================================================================

function SecurityIcon({ type, size = 18, color = "#006769" }) {
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
    case "shield-check":
      return (
        <svg {...commonProps}>
          <path d="M12 2l7 3.5v6c0 5-4.5 9-7 10.5-2.5-1.5-7-5.5-7-10.5v-6l7-3.5z" />
          <path d="M9 12l2 2 4-4" strokeWidth="2" />
        </svg>
      );
    case "shield-keyhole":
      return (
        <svg {...commonProps}>
          <path d="M12 2l7 3.5v6c0 5-4.5 9-7 10.5-2.5-1.5-7-5.5-7-10.5v-6l7-3.5z" />
          <circle cx="12" cy="10" r="1.8" fill={color} />
          <path d="M11 11.5l-0.5 3.5h3l-0.5-3.5z" fill={color} />
        </svg>
      );
    case "shield-circuit":
      return (
        <svg {...commonProps}>
          <path d="M12 2l7 3.5v6c0 5-4.5 9-7 10.5-2.5-1.5-7-5.5-7-10.5v-6l7-3.5z" />
          <line x1="12" y1="6" x2="12" y2="14" />
          <circle cx="12" cy="14" r="1.5" fill={color} />
          <line x1="8" y1="10" x2="16" y2="10" />
          <circle cx="8" cy="10" r="1" fill={color} />
          <circle cx="16" cy="10" r="1" fill={color} />
        </svg>
      );
    case "padlock":
      return (
        <svg {...commonProps}>
          <rect x="5.5" y="10.5" width="13" height="10" rx="2" />
          <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
          <circle cx="12" cy="15" r="1.3" fill={color} />
          <line x1="12" y1="16.3" x2="12" y2="18" />
        </svg>
      );
    case "key":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="15" r="3.5" />
          <path d="M10.5 12.5l8.5-8.5" />
          <path d="M16 4l3 3" />
          <path d="M14 6l2 2" />
        </svg>
      );
    case "hexagon-security":
      return (
        <svg {...commonProps}>
          <polygon points="12,2 21,7.2 21,16.8 12,22 3,16.8 3,7.2" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="1" fill={color} />
        </svg>
      );
    case "fingerprint":
      return (
        <svg {...commonProps}>
          <path d="M12 3a9 9 0 0 0-9 9c0 3 1.5 6 3 8" />
          <path d="M12 7a5 5 0 0 0-5 5c0 3 1 5 2 7" />
          <path d="M12 11a2 2 0 0 0-2 2c0 2 0.5 3.5 1 4.5" />
          <path d="M15 11c0 3-0.5 5-1 7" />
          <path d="M18 10c0 4-1 6-2 9" />
        </svg>
      );
    case "shield-star":
      return (
        <svg {...commonProps}>
          <path d="M12 2l7 3.5v6c0 5-4.5 9-7 10.5-2.5-1.5-7-5.5-7-10.5v-6l7-3.5z" />
          <polygon
            points="12,7.5 13.5,10.5 16.5,11 14.5,13 15,16 12,14.5 9,16 9.5,13 7.5,11 10.5,10.5"
            fill={color}
            fillOpacity="0.5"
          />
        </svg>
      );
    case "radar-defense":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" strokeDasharray="2 2" />
          <line x1="12" y1="12" x2="18.5" y2="7.5" />
          <circle cx="12" cy="12" r="1.5" fill={color} />
        </svg>
      );
    case "shield-lock":
      return (
        <svg {...commonProps}>
          <path d="M12 2l7 3.5v6c0 5-4.5 9-7 10.5-2.5-1.5-7-5.5-7-10.5v-6l7-3.5z" />
          <rect x="9.5" y="11" width="5" height="4.5" rx="1" fill={color} fillOpacity="0.4" />
          <path d="M10.5 11V9.5a1.5 1.5 0 0 1 3 0V11" />
        </svg>
      );
    case "cyber-chip":
      return (
        <svg {...commonProps}>
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
          <circle cx="12" cy="12" r="2" fill={color} fillOpacity="0.4" />
        </svg>
      );
    case "shield-bolt":
      return (
        <svg {...commonProps}>
          <path d="M12 2l7 3.5v6c0 5-4.5 9-7 10.5-2.5-1.5-7-5.5-7-10.5v-6l7-3.5z" />
          <polygon
            points="12.5,7 9,12.5 11.8,12.5 11.2,16.5 15,11 12.2,11"
            fill={color}
          />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <path d="M12 2l7 3.5v6c0 5-4.5 9-7 10.5-2.5-1.5-7-5.5-7-10.5v-6l7-3.5z" />
        </svg>
      );
  }
}

const FLOATING_ICONS = [
  { id: 1, type: "shield-check", size: 19, color: "#006769", opacity: 0.38, top: "8%", left: "4%", anim: "animate-float-shield-1", delay: "0s", rotate: "-6deg" },
  { id: 2, type: "shield-keyhole", size: 21, color: "#14B8A6", opacity: 0.42, top: "22%", left: "11%", anim: "animate-float-shield-2", delay: "1.2s", rotate: "8deg" },
  { id: 3, type: "padlock", size: 16, color: "#007A7E", opacity: 0.32, top: "37%", left: "3%", anim: "animate-float-shield-3", delay: "2.5s", rotate: "-4deg" },
  { id: 4, type: "shield-circuit", size: 20, color: "#006769", opacity: 0.40, top: "54%", left: "8%", anim: "animate-float-shield-4", delay: "0.8s", rotate: "6deg" },
  { id: 5, type: "key", size: 17, color: "#14B8A6", opacity: 0.34, top: "70%", left: "5%", anim: "animate-float-shield-1", delay: "3.1s", rotate: "15deg" },
  { id: 6, type: "shield-lock", size: 22, color: "#007A7E", opacity: 0.36, top: "84%", left: "12%", anim: "animate-float-shield-2", delay: "1.7s", rotate: "-8deg" },
  { id: 7, type: "hexagon-security", size: 15, color: "#006769", opacity: 0.28, top: "27%", left: "21%", anim: "animate-float-shield-3", delay: "4.0s", rotate: "12deg" },
  { id: 8, type: "shield-star", size: 18, color: "#14B8A6", opacity: 0.32, top: "72%", left: "20%", anim: "animate-float-shield-4", delay: "2.1s", rotate: "-5deg" },
  { id: 9, type: "shield-bolt", size: 17, color: "#007A7E", opacity: 0.30, top: "16%", left: "17%", anim: "animate-float-shield-1", delay: "3.5s", rotate: "7deg" },
  { id: 10, type: "shield-lock", size: 21, color: "#007A7E", opacity: 0.40, top: "10%", right: "5%", anim: "animate-float-shield-2", delay: "0.5s", rotate: "6deg" },
  { id: 11, type: "shield-check", size: 18, color: "#14B8A6", opacity: 0.36, top: "24%", right: "12%", anim: "animate-float-shield-1", delay: "2.2s", rotate: "-8deg" },
  { id: 12, type: "shield-circuit", size: 22, color: "#006769", opacity: 0.42, top: "40%", right: "4%", anim: "animate-float-shield-4", delay: "1.4s", rotate: "5deg" },
  { id: 13, type: "padlock", size: 16, color: "#007A7E", opacity: 0.32, top: "56%", right: "9%", anim: "animate-float-shield-3", delay: "3.3s", rotate: "-6deg" },
  { id: 14, type: "shield-keyhole", size: 20, color: "#14B8A6", opacity: 0.38, top: "72%", right: "6%", anim: "animate-float-shield-1", delay: "1.9s", rotate: "10deg" },
  { id: 15, type: "cyber-chip", size: 17, color: "#006769", opacity: 0.30, top: "86%", right: "13%", anim: "animate-float-shield-2", delay: "2.7s", rotate: "-4deg" },
  { id: 16, type: "shield-bolt", size: 16, color: "#007A7E", opacity: 0.28, top: "29%", right: "21%", anim: "animate-float-shield-4", delay: "0.9s", rotate: "8deg" },
  { id: 17, type: "hexagon-security", size: 19, color: "#14B8A6", opacity: 0.34, top: "74%", right: "21%", anim: "animate-float-shield-3", delay: "3.7s", rotate: "-10deg" },
  { id: 18, type: "radar-defense", size: 16, color: "#006769", opacity: 0.30, top: "17%", right: "18%", anim: "animate-float-shield-2", delay: "1.1s", rotate: "-5deg" },
  { id: 19, type: "radar-defense", size: 15, color: "#006769", opacity: 0.26, top: "6%", left: "28%", anim: "animate-float-shield-3", delay: "1.3s", rotate: "10deg" },
  { id: 20, type: "shield-star", size: 17, color: "#14B8A6", opacity: 0.28, top: "4%", left: "44%", anim: "animate-float-shield-1", delay: "2.6s", rotate: "-3deg" },
  { id: 21, type: "padlock", size: 16, color: "#007A7E", opacity: 0.27, top: "5%", right: "42%", anim: "animate-float-shield-2", delay: "0.7s", rotate: "5deg" },
  { id: 22, type: "shield-check", size: 16, color: "#006769", opacity: 0.28, top: "6%", right: "28%", anim: "animate-float-shield-4", delay: "3.0s", rotate: "-7deg" },
  { id: 23, type: "key", size: 14, color: "#006769", opacity: 0.22, top: "46%", left: "26%", anim: "animate-float-shield-2", delay: "4.1s", rotate: "-15deg" },
  { id: 24, type: "fingerprint", size: 15, color: "#14B8A6", opacity: 0.22, top: "48%", right: "27%", anim: "animate-float-shield-1", delay: "1.8s", rotate: "6deg" },
  { id: 25, type: "shield-lock", size: 15, color: "#007A7E", opacity: 0.24, bottom: "10%", left: "32%", anim: "animate-float-shield-4", delay: "2.3s", rotate: "4deg" },
  { id: 26, type: "shield-circuit", size: 15, color: "#006769", opacity: 0.24, bottom: "9%", right: "33%", anim: "animate-float-shield-3", delay: "0.9s", rotate: "-6deg" },
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
            <SecurityIcon
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
          className={`inline-flex items-baseline whitespace-nowrap font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#042C2E] drop-shadow-[0_2px_8px_rgba(4,44,46,0.1)] ${
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
          className={`inline-flex items-baseline whitespace-nowrap font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#042C2E] drop-shadow-[0_2px_8px_rgba(4,44,46,0.1)] ${
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
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#006769] to-transparent shadow-[0_0_10px_rgba(0,103,105,0.4)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rotate-45 bg-[#14B8A6] shadow-[0_0_12px_rgba(20,184,166,0.6)] animate-flare-pulse" />
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
    <header className={`ibcs-heading-section relative overflow-hidden border-b border-[#C3ECE9] bg-gradient-to-b from-[#C8F0EC] via-[#E2F7F5] to-[#F0FBFA] pt-3 pb-8 sm:pt-4 sm:pb-10 lg:pt-4 lg:pb-12 ${className}`}>
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
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006769]">
              <span className="inline-block h-0.5 w-5 rounded-full bg-[#006769]" />
              <span>{badge}</span>
            </div>
          ) : null}

          <div className="my-1.5 overflow-hidden">
            <CollisionTextHeading text={title} />
          </div>

          {company ? <p className="mt-3 mb-3 text-sm font-bold tracking-wide text-[#007A7E] sm:text-lg">{company}</p> : null}
          {summary ? <p className="mx-auto mb-5 max-w-3xl text-sm font-normal leading-relaxed text-[#1E4345] sm:text-base">{summary}</p> : null}

          {buttonLabel ? (
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={onExplore}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#006769] px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[0_8px_20px_rgba(0,103,105,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#004E50] hover:shadow-[0_12px_28px_rgba(0,103,105,0.35)] sm:px-7 sm:py-3 sm:text-base"
              >
                <span>{buttonLabel}</span><span className="text-base" aria-hidden="true">→</span>
              </button>
            </div>
          ) : null}

          {children}
        </div>

        {features?.length ? (
          <div className="mx-auto mt-6 flex max-w-full flex-nowrap items-center justify-center gap-2 px-2 py-1 text-xs font-semibold text-[#006769] sm:mt-8 sm:gap-3.5">
            {features.map((feature, index) => (
              <div key={`${feature.label}-${index}`} className={`${index === 2 ? "hidden sm:flex" : "flex"} shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-[#C3ECE9] bg-white/95 px-3 py-1.5 shadow-xs backdrop-blur-sm sm:px-3.5`}>
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
      title="Product Benefits & Impact"
      company="IB Cyber Security Private Limited (IBCS)"
      summary="Discover the intended benefits of IBCS software products across operational, institutional, commercial, and public-service environments. Explore how structured workflows, automation, organized information, improved coordination, and intelligent digital capabilities can support operational efficiency, productivity, informed decision-making, and long-term digital value."
      buttonLabel="Explore Benefits & Impact"
      onExplore={handleExplore}
      onBack={onBack}
      onHome={onHome}
      features={[
        { label: "12 Benefit Dimensions", dot: "#006769" },
        { label: "144 Impact Standards", dot: "#14B8A6" },
        { label: "Institutional & Enterprise Ready", dot: "#C54E2C" },
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
        <span className="inline-block whitespace-nowrap font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#042C2E]">
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
                  <span className="relative z-10 text-[#042C2E] drop-shadow-[0_2px_8px_rgba(4,44,46,0.1)]">
                    {char}
                  </span>
                ) : (
                  <span
                    className={`relative z-10 inline-block ${
                      isFlying ? "animate-letter-fly-in text-[#006769]" : "text-[#042C2E]"
                    }`}
                  >
                    {char}
                    {isFlying && (
                      <span
                        className="absolute top-1/2 -translate-y-1/2 left-full pointer-events-none h-[2px] bg-gradient-to-r from-[#006769] via-[#14B8A6]/70 to-transparent blur-[0.5px] animate-trail-fade"
                        style={{ width: "min(35vw, 130px)" }}
                      />
                    )}
                  </span>
                )}

                {isSparking && (
                  <span
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2 pointer-events-none flex items-center justify-center gap-1 text-[#006769] font-bold text-xs animate-impact-spark"
                    aria-hidden="true"
                  >
                    <span className="w-1 h-2.5 bg-[#006769] rotate-[-25deg] rounded-full shadow-[0_0_6px_rgba(0,103,105,0.6)]" />
                    <span className="w-1 h-2.5 bg-[#006769] rotate-[25deg] rounded-full shadow-[0_0_6px_rgba(0,103,105,0.6)]" />
                  </span>
                )}
              </span>
            );
          })}
        </span>

        {remainingWordTokens.length > 0 && (
          <span className="inline-flex flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-2.5 font-bold text-xl sm:text-2xl lg:text-3xl text-[#007A7E]">
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
                          isFlying ? "animate-letter-fly-fast text-[#006769]" : "text-[#007A7E]"
                        }`}
                      >
                        {char}
                      </span>
                      {isFlying && (
                        <span
                          className="absolute top-1/2 -translate-y-1/2 left-full pointer-events-none h-[1.5px] bg-gradient-to-r from-[#007A7E] via-[#14B8A6]/50 to-transparent blur-[0.5px]"
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
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#006769] to-transparent shadow-[0_0_10px_rgba(0,103,105,0.4)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rotate-45 bg-[#14B8A6] shadow-[0_0_12px_rgba(20,184,166,0.6)] animate-flare-pulse" />
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
    <div className={`relative mb-12 sm:mb-14 pt-2 overflow-x-clip ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-0 hidden select-none grid-cols-6 gap-2 opacity-50 lg:grid"
      >
        {Array.from({ length: 24 }, (_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#8FD6CF]/60" />
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl text-center overflow-x-clip">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-7xl font-black leading-none text-[#006769]/10 sm:text-8xl"
        >
          {sectionNumberStr}
        </div>

        <div className="relative z-10">
          <div className="mb-2.5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006769]">
            <span className="inline-block h-0.5 w-6 rounded-full bg-[#006769]" />
            <span>{`SECTION ${sectionNumberStr}`}</span>
          </div>

          <SectionHeadingAnimation text={formattedTitle} />

          {section.intro ? (
            <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base font-normal leading-relaxed text-[#1E4345]">
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
        <div className="mt-8 flex items-center justify-between border-b border-[#C3ECE9] pb-3">
          <h3 className="text-base sm:text-lg font-bold text-[#042C2E] flex items-center gap-2">
            <span>{section.keyAreasHeader}</span>
          </h3>
          <span className="text-xs font-mono font-medium text-[#007A7E] bg-[#E0F7F5] px-2.5 py-1 rounded-full border border-[#C3ECE9]">
            {section.keyAreas?.length || 12} Key Architecture Areas
          </span>
        </div>
      ) : null}
    </div>
  );
}

// ============================================================================
// 7. ORBITAL CONTENT SHOWCASE (SEMI-CIRCLE RADAR & INFORMATION CARD)
// ============================================================================

/**
 * Enterprise SVG Icon Component for IBCS Product Benefits & Impact
 * Pixel-tailored vector iconography strictly matching the IBCS Brand Design.
 */
/**
 * Enterprise SVG Icon Component for IBCS Product Benefits & Impact
 * Pixel-tailored vector iconography strictly matching the IBCS Brand Design.
 */
export const DomainIcon = ({ type, className = "w-5 h-5" }) => {
  const props = {
    className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (type) {
    case "database":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      );
    case "time":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case "search":
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <path d="M11 8a3 3 0 0 0-3 3" />
        </svg>
      );
    case "speed":
      return (
        <svg {...props}>
          <path d="M12 14l4-4" />
          <path d="M3.34 19a10 10 0 1 1 17.32 0" />
        </svg>
      );
    case "automation":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case "workflow":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <rect x="15" y="3" width="6" height="6" rx="1" />
          <rect x="9" y="15" width="6" height="6" rx="1" />
          <path d="M6 9v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9" />
          <path d="M12 13v2" />
        </svg>
      );
    case "decision":
    case "ai":
      return (
        <svg {...props}>
          <path d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v1a4 4 0 0 0 8 0v-1h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
          <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
        </svg>
      );
    case "network":
      return (
        <svg {...props}>
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      );
    case "security":
    case "cybersecurity":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "lock":
      return (
        <svg {...props}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
        </svg>
      );
    case "shieldAlert":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
    case "government":
      return (
        <svg {...props}>
          <path d="M3 21h18M4 18h16M4 10h16M12 2L3 7v3h18V7L12 2z" />
          <path d="M6 10v8M10 10v8M14 10v8M18 10v8" />
        </svg>
      );
    case "banking":
      return (
        <svg {...props}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
          <circle cx="7" cy="15" r="1.5" fill="currentColor" />
          <path d="M13 15h4" />
        </svg>
      );
    case "investigation":
    case "forensics":
      return (
        <svg {...props}>
          <circle cx="10" cy="10" r="6.5" />
          <line x1="21" y1="21" x2="14.8" y2="14.8" />
          <path d="M8 10h4M10 8v4" />
        </svg>
      );
    case "legal":
      return (
        <svg {...props}>
          <path d="M12 3v18" />
          <path d="M5 7h14" />
          <path d="M5 7l-2 5a3 3 0 0 0 6 0L7 7" />
          <path d="M19 7l-2 5a3 3 0 0 0 6 0L21 7" />
          <path d="M8 21h8" />
        </svg>
      );
    case "police":
      return (
        <svg {...props}>
          <path d="M12 2l7 4-1 9-6 7-6-7-1-9 7-4z" />
          <circle cx="12" cy="11" r="2.5" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "citizen":
      return (
        <svg {...props}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case "education":
      return (
        <svg {...props}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case "document":
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
    case "notification":
      return (
        <svg {...props}>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    case "target":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "compass":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "growth":
    case "intelligence":
      return (
        <svg {...props}>
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
          <line x1="3" y1="20" x2="21" y2="20" />
        </svg>
      );
    case "analytics":
      return (
        <svg {...props}>
          <path d="M3 3v18h18" />
          <path d="M18 9l-5 5-4-4-6 6" />
          <path d="M14 9h4v4" />
        </svg>
      );
    case "digital":
      return (
        <svg {...props}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "resource":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      );
    case "continuity":
      return (
        <svg {...props}>
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
        </svg>
      );
    case "modernization":
      return (
        <svg {...props}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      );
  }
};

/**
 * Maps arbitrary benefit titles to contextual domain icon types
 */
export function getDomainIconType(title = "", index = 0) {
  const t = title.toLowerCase();

  // 1. Specific High-Priority Semantic Matches
  if (t.includes("notif") || t.includes("alert")) return "notification";
  if (t.includes("report") || t.includes("record") || t.includes("administrative") || t.includes("case information")) return "document";
  if (t.includes("bank") || t.includes("financ") || t.includes("cost optimiz") || t.includes("overhead")) return "banking";
  if (t.includes("govern") || t.includes("institut") || t.includes("governance")) return "government";
  if (t.includes("investigat") || t.includes("evidence") || t.includes("forensic") || t.includes("audit")) return "investigation";
  if (t.includes("police") || t.includes("law") || t.includes("enforcement") || t.includes("crime")) return "police";
  if (t.includes("legal") || t.includes("compliance") || t.includes("policy") || t.includes("standardiz")) return "legal";
  if (t.includes("cyber") || t.includes("threat") || t.includes("security culture") || t.includes("security-orient")) return "security";
  if (t.includes("risk") || t.includes("avoidable digital risk")) return "shieldAlert";
  if (t.includes("safe") || t.includes("protect") || t.includes("secure inform")) return "lock";
  if (t.includes("educat") || t.includes("learning") || t.includes("awareness education")) return "education";
  if (t.includes("citizen") || t.includes("public-service") || t.includes("public service") || t.includes("community") || t.includes("social")) return "citizen";
  if (t.includes("team") || t.includes("customer") || t.includes("user interaction") || t.includes("user productivity")) return "users";
  
  // 2. Data & Information Management
  if (t.includes("data") || t.includes("storage") || t.includes("centralized information")) return "database";
  if (t.includes("retriev") || t.includes("search") || t.includes("visibility") || t.includes("review") || t.includes("faster information access") || t.includes("information access") || t.includes("information accessib")) return "search";
  if (t.includes("decision") || t.includes("situational") || t.includes("intelligent") || t.includes("understanding") || t.includes("ai")) return "decision";
  if (t.includes("analytic") || t.includes("analytical")) return "analytics";
  if (t.includes("coordinat") || t.includes("connectiv") || t.includes("centraliz") || t.includes("network")) return "network";
  
  // 3. Time, Speed & Operations
  if (t.includes("time") || t.includes("routine operation") || t.includes("delay")) return "time";
  if (t.includes("efficien") || t.includes("productiv") || t.includes("responsiv") || t.includes("speed") || t.includes("fast")) return "speed";
  if (t.includes("automat") || t.includes("manual") || t.includes("repetitive")) return "automation";
  if (t.includes("workflow") || t.includes("process execution") || t.includes("process optimiz") || t.includes("process transform")) return "workflow";
  if (t.includes("accuracy") || t.includes("task organiz") || t.includes("work management") || t.includes("capability")) return "target";
  if (t.includes("awareness") || t.includes("situational")) return "compass";
  
  // 4. Growth, Scalability, Innovation & Tech
  if (t.includes("scale") || t.includes("scalab") || t.includes("growth") || t.includes("sustainable") || t.includes("long-term") || t.includes("future")) return "growth";
  if (t.includes("continu") || t.includes("reusab") || t.includes("standard")) return "continuity";
  if (t.includes("modern") || t.includes("innovat") || t.includes("transform") || t.includes("impact")) return "modernization";
  if (t.includes("resource") || t.includes("hardware") || t.includes("infra")) return "resource";
  if (t.includes("digital") || t.includes("tech") || t.includes("barrier") || t.includes("accessib")) return "digital";

  const defaultTypes = [
    "speed", "workflow", "database", "search", "security",
    "government", "automation", "growth", "decision", "network",
    "time", "target"
  ];
  return defaultTypes[index % defaultTypes.length];
}

// Geometric Constants for Orbital Semi-Circle Arc
const CX = 75;
const CY = 205;
const RADIUS = 175;
const STEP_ANGLE_DEG = 19;
const STAGE_WIDTH = 340;
const STAGE_HEIGHT = 410;

/**
 * OrbitalContentShowcase Component
 * Reusable two-column futuristic interactive semi-circle navigation layout.
 * Left Side: Semi-circular orbital arc radar with rotating glass nodes & center glass hub.
 * Right Side: Minimalist white glassmorphic content card with icon, title, and full description.
 */
export function OrbitalContentShowcase({
  items = [],
  ariaLabel = "Interactive orbital content navigation",
  sectionId = "",
  isPaused: externalPaused = false,
  onSectionClick,
  onTogglePause,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [internalPaused, setInternalPaused] = useState(false);
  const [isHoveringArc, setIsHoveringArc] = useState(false);

  const isPaused = externalPaused || internalPaused;

  const orbitRef = useRef(null);
  const lastScrollTimeRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isTouchOnArcRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartYRef = useRef(0);

  // Normalize items array
  const domainItems = React.useMemo(() => {
    if (!Array.isArray(items) || items.length === 0) return [];
    return items.map((item, idx) => ({
      id: item.id || `${sectionId || "section"}-item-${idx}`,
      number: item.number || String(idx + 1).padStart(2, "0"),
      title: item.title || item.heading || `Item ${idx + 1}`,
      description: item.description || item.content || item.text || "",
      iconType: item.iconType || getDomainIconType(item.title || "", idx),
    }));
  }, [items, sectionId]);

  const totalItems = domainItems.length;

  // Keep activeIndex within range
  useEffect(() => {
    if (totalItems > 0 && activeIndex >= totalItems) {
      setActiveIndex(0);
    }
  }, [totalItems, activeIndex]);

  const handleSelect = (index) => {
    setActiveIndex(index);
    if (onSectionClick) onSectionClick();
  };

  const handleNext = () => {
    if (totalItems <= 1) return;
    setActiveIndex((prev) => (prev + 1) % totalItems);
    if (onSectionClick) onSectionClick();
  };

  const handlePrev = () => {
    if (totalItems <= 1) return;
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
    if (onSectionClick) onSectionClick();
  };

  const handleNextRef = useRef(handleNext);
  handleNextRef.current = handleNext;
  const handlePrevRef = useRef(handlePrev);
  handlePrevRef.current = handlePrev;

  // Auto-change timer: automatically rotates along the arc every 4.5 seconds
  const AUTO_INTERVAL = 3500;
  useEffect(() => {
    if (isPaused || totalItems <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, AUTO_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, totalItems]);

  // Geometric hit-test: tests whether cursor is on the curved arc track
  const checkIsOnArc = (clientX, clientY) => {
    const el = orbitRef.current;
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    const scaleX = rect.width / STAGE_WIDTH;
    const scaleY = rect.height / STAGE_HEIGHT;
    const mouseX = (clientX - rect.left) / (scaleX || 1);
    const mouseY = (clientY - rect.top) / (scaleY || 1);

    const dx = mouseX - CX;
    const dy = mouseY - CY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;

    return dist >= 115 && dist <= 220 && dx > 5 && Math.abs(angleDeg) <= 88;
  };

  // Non-passive wheel listener: guarantees smooth section-by-section rotation
  // ONLY intercepts when mouse is positioned directly on the arc or an orbital node!
  useEffect(() => {
    const el = orbitRef.current;
    if (!el) return;

    const onWheelNonPassive = (e) => {
      const isOnArc =
        checkIsOnArc(e.clientX, e.clientY) ||
        Boolean(e.target.closest?.(".orbital-node-interactive"));

      if (!isOnArc) return;

      e.preventDefault();
      e.stopPropagation();

      const now = Date.now();
      if (now - lastScrollTimeRef.current < 260) return;

      if (Math.abs(e.deltaY) > 6) {
        if (e.deltaY > 0) {
          handleNextRef.current();
        } else {
          handlePrevRef.current();
        }
        lastScrollTimeRef.current = now;
      }
    };

    const onTouchMoveNonPassive = (e) => {
      if (isTouchOnArcRef.current && e.cancelable) {
        e.preventDefault();
      }
    };

    el.addEventListener("wheel", onWheelNonPassive, { passive: false });
    el.addEventListener("touchmove", onTouchMoveNonPassive, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheelNonPassive);
      el.removeEventListener("touchmove", onTouchMoveNonPassive);
    };
  }, []);

  // Touch swipe support
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartYRef.current = touch.clientY;
    isTouchOnArcRef.current =
      checkIsOnArc(touch.clientX, touch.clientY) ||
      Boolean(e.target.closest?.(".orbital-node-interactive"));
  };

  const handleTouchEnd = (e) => {
    if (!isTouchOnArcRef.current) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartYRef.current - touchEndY;
    if (Math.abs(diff) > 25) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Mouse drag support
  const handleMouseDown = (e) => {
    const onArc =
      checkIsOnArc(e.clientX, e.clientY) ||
      Boolean(e.target.closest?.(".orbital-node-interactive"));
    if (onArc) {
      isDraggingRef.current = true;
      dragStartYRef.current = e.clientY;
    }
  };

  const handleMouseMove = (e) => {
    const onArc =
      checkIsOnArc(e.clientX, e.clientY) ||
      Boolean(e.target.closest?.(".orbital-node-interactive"));
    setIsHoveringArc(onArc);
  };

  const handleMouseUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const diff = dragStartYRef.current - e.clientY;
    if (Math.abs(diff) > 25) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    setInternalPaused(false);
    setIsHoveringArc(false);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
  };

  if (totalItems === 0) return null;

  const currentItem = domainItems[activeIndex] || domainItems[0];

  const cx = CX;
  const cy = CY;
  const radius = RADIUS;

  // Dynamic step angle based on item count so 10, 12, or more items distribute smoothly
  const dynamicStepAngleDeg = totalItems >= 12 ? 15.5 : totalItems >= 10 ? STEP_ANGLE_DEG : 22;
  const maxDistance = totalItems >= 12 ? 6 : totalItems >= 10 ? 5 : Math.max(3, Math.floor(totalItems / 2));

  return (
    <div
      className="w-full relative select-none"
      /* Auto-scroll runs continuously unless hovering the orbit directly */
      onClick={() => {
        if (onSectionClick) onSectionClick();
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
        {/* =========================================================================
            LEFT SIDE: COMPACT SEMI-CIRCLE ORBITAL NAVIGATION (5 of 12 cols)
            ========================================================================= */}
        <div className="lg:col-span-5 flex justify-center items-center py-2 overflow-visible min-h-[380px] sm:min-h-[410px]">
          <div
            ref={orbitRef}
            className={`relative w-[340px] h-[410px] shrink-0 flex items-center justify-center touch-pan-y focus:outline-none transition-transform origin-center scale-[0.88] sm:scale-95 md:scale-100 ${
              isHoveringArc ? "cursor-ns-resize" : "cursor-default"
            }`}
            onMouseEnter={() => setInternalPaused(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label={ariaLabel}
          >
            {/* Ambient Radial Glow Behind Hub */}
            <div
              className="absolute rounded-full pointer-events-none blur-3xl"
              style={{
                left: `${cx}px`,
                top: `${cy}px`,
                width: "280px",
                height: "280px",
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(circle, rgba(45,212,191,0.18) 0%, rgba(0,103,105,0.04) 50%, transparent 70%)",
              }}
            />

            {/* Background SVG Canvas: Concentric Radar Rings & Orbital Arc Path */}
            <svg
              className="absolute inset-0 w-[340px] h-[410px] pointer-events-none overflow-visible"
              viewBox="0 0 340 410"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="arcStrokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#2DD4BF" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Concentric Radar Arcs */}
              <path
                d={`M ${cx + 96 * Math.cos((-78 * Math.PI) / 180)} ${
                  cy + 96 * Math.sin((-78 * Math.PI) / 180)
                } A 96 96 0 0 1 ${cx + 96 * Math.cos((78 * Math.PI) / 180)} ${
                  cy + 96 * Math.sin((78 * Math.PI) / 180)
                }`}
                stroke="#14B8A6"
                strokeWidth="1"
                strokeOpacity="0.25"
                strokeDasharray="4 5"
              />

              <path
                d={`M ${cx + 124 * Math.cos((-80 * Math.PI) / 180)} ${
                  cy + 124 * Math.sin((-80 * Math.PI) / 180)
                } A 124 124 0 0 1 ${cx + 124 * Math.cos((80 * Math.PI) / 180)} ${
                  cy + 124 * Math.sin((80 * Math.PI) / 180)
                }`}
                stroke="#2DD4BF"
                strokeWidth="1"
                strokeOpacity="0.2"
              />

              <path
                d={`M ${cx + 150 * Math.cos((-82 * Math.PI) / 180)} ${
                  cy + 150 * Math.sin((-82 * Math.PI) / 180)
                } A 150 150 0 0 1 ${cx + 150 * Math.cos((82 * Math.PI) / 180)} ${
                  cy + 150 * Math.sin((82 * Math.PI) / 180)
                }`}
                stroke="#14B8A6"
                strokeWidth="1"
                strokeOpacity="0.15"
                strokeDasharray="2 6"
              />

              {/* Main Semi-Circular Orbital Arc Path */}
              <path
                d={`M ${cx + radius * Math.cos((-84 * Math.PI) / 180)} ${
                  cy + radius * Math.sin((-84 * Math.PI) / 180)
                } A ${radius} ${radius} 0 0 1 ${cx + radius * Math.cos((84 * Math.PI) / 180)} ${
                  cy + radius * Math.sin((84 * Math.PI) / 180)
                }`}
                stroke="url(#arcStrokeGradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Connector ticks */}
              {[-65, -45, -25, 0, 25, 45, 65].map((deg) => {
                const rad = (deg * Math.PI) / 180;
                const dotX = cx + radius * Math.cos(rad);
                const dotY = cy + radius * Math.sin(rad);
                return (
                  <circle
                    key={`tick-${deg}`}
                    cx={dotX}
                    cy={dotY}
                    r="1.75"
                    fill="#14B8A6"
                    fillOpacity="0.5"
                  />
                );
              })}
            </svg>

            {/* Circular Glass Panel (Hub) */}
            <div
              className="absolute z-20 flex flex-col items-center justify-center text-center rounded-full bg-white/95 backdrop-blur-xl border border-[#B2EBF2] shadow-[0_12px_32px_rgba(0,103,105,0.08),inset_0_2px_4px_rgba(255,255,255,0.95)]"
              style={{
                left: `${cx}px`,
                top: `${cy}px`,
                width: "138px",
                height: "138px",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                key={`hub-content-${currentItem.id}`}
                className="flex flex-col items-center justify-center px-2 transition-all duration-300 animate-content-stagger-1 w-full"
              >
                <span className="font-mono font-black text-2xl sm:text-3xl text-[#006769] tracking-tight leading-none mb-1">
                  {currentItem.number}
                </span>

                <h4 className="text-[11.5px] sm:text-xs font-bold text-[#042C2E] max-w-[114px] leading-snug text-center">
                  {currentItem.title}
                </h4>

                <div className="w-6 h-0.5 bg-[#14B8A6] rounded-full mx-auto mt-1.5" />
              </div>
            </div>

            {/* Orbital Nodes Along Semi-Circle Arc */}
            {domainItems.map((item, idx) => {
              let diff = idx - activeIndex;
              const lowerBound = -Math.floor(totalItems / 2);
              const upperBound = Math.ceil(totalItems / 2) - 1;
              if (diff < lowerBound) diff += totalItems;
              if (diff > upperBound) diff -= totalItems;

              const isActive = diff === 0;
              const isVisible = Math.abs(diff) <= maxDistance;

              const angleDeg = diff * dynamicStepAngleDeg;
              const angleRad = (angleDeg * Math.PI) / 180;

              const nodeX = cx + radius * Math.cos(angleRad);
              const nodeY = cy + radius * Math.sin(angleRad);

              let opacity = 1;
              if (Math.abs(diff) === maxDistance - 2) opacity = 0.75;
              if (Math.abs(diff) === maxDistance - 1) opacity = 0.45;
              if (Math.abs(diff) >= maxDistance) opacity = 0;

              const scale = isActive ? 1.15 : 0.92;
              const zIndex = isActive ? 40 : 25 - Math.abs(diff);

              return (
                <div
                  key={`orbital-node-${item.id}`}
                  onClick={() => handleSelect(idx)}
                  className="orbital-node-interactive absolute cursor-pointer select-none transition-all duration-500 ease-[cubic-bezier(0.2,1,0.2,1)]"
                  style={{
                    left: `${nodeX}px`,
                    top: `${nodeY}px`,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    opacity,
                    zIndex,
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                  role="button"
                  tabIndex={isVisible ? 0 : -1}
                  aria-label={`Select item ${item.number} ${item.title}`}
                  aria-selected={isActive}
                >
                  <div className="flex items-center gap-1.5 relative">
                    <div
                      className={`rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-[#006769] via-[#024B4D] to-[#042C2E] text-white border-2 border-[#2DD4BF] shadow-[0_0_20px_rgba(45,212,191,0.65),0_6px_16px_rgba(0,103,105,0.35)] ring-2 ring-[#14B8A6]/20"
                          : "w-8 h-8 sm:w-9 sm:h-9 bg-white/95 backdrop-blur-md text-[#006769] border border-[#B2EBF2] shadow-[0_2px_8px_rgba(0,103,105,0.06)] hover:border-[#14B8A6] hover:scale-105 hover:bg-white"
                      }`}
                    >
                      <DomainIcon
                        type={item.iconType}
                        className={isActive ? "w-5 h-5 text-white" : "w-3.5 h-3.5"}
                      />
                    </div>

                    <span
                      className={`font-mono transition-all duration-300 ${
                        isActive
                          ? "font-black text-sm sm:text-base text-[#042C2E] tracking-tight ml-1"
                          : "font-bold text-[10px] sm:text-[11px] text-[#486D6F] ml-0.5"
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            RIGHT SIDE: ULTRA-CLEAN MINIMALIST CONTENT CARD (7 of 12 cols)
            Compact, elegant, and perfectly proportioned
            ========================================================================= */}
        <div className="lg:col-span-7 flex justify-center">
          <div
            key={`domain-card-${currentItem.id}`}
            className="w-full max-w-xl bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#C5ECE9] shadow-[0_12px_32px_rgba(0,103,105,0.06)] p-5 sm:p-7 lg:p-8 transition-all duration-500 relative overflow-hidden flex flex-col justify-center min-h-[180px] sm:min-h-[200px] animate-content-stagger-1"
          >
            {/* Top Atmospheric Corner Glow */}
            <div
              className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br from-[#14B8A6]/10 to-[#006769]/5 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col justify-center">
              {/* Header row: Icon on left, Title to the RIGHT of the icon */}
              <div className="flex items-center gap-3 sm:gap-4 mb-2.5 sm:mb-3">
                <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#006769] via-[#024B4D] to-[#042C2E] text-white flex items-center justify-center shadow-md shadow-[#006769]/20 border border-white/20 shrink-0">
                  <DomainIcon
                    type={currentItem.iconType}
                    className="w-5 h-5 sm:w-8 sm:h-8 text-[#2DD4BF]"
                  />
                </div>

                <h3 className="text-lg sm:text-2xl lg:text-[26px] font-extrabold text-[#042C2E] tracking-tight leading-snug">
                  {currentItem.title}
                </h3>
              </div>

              {/* Section Description */}
              <p className="text-sm sm:text-[15px] text-[#1E4345] leading-relaxed font-normal">
                {currentItem.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// ============================================================================
// 7. ORBITAL CONTENT SHOWCASE CONNECTOR (ALIASES & ADAPTERS)
// ============================================================================

export function KeypadMobileShowcase({
  section,
  isPaused = false,
  onSectionClick,
  onTogglePause,
}) {
  if (!section || !section.keyAreas?.length) return null;
  return (
    <OrbitalContentShowcase
      items={section.keyAreas}
      ariaLabel={`${section.title || "Section"} content navigation`}
      sectionId={section.id}
      isPaused={isPaused}
      onSectionClick={onSectionClick}
      onTogglePause={onTogglePause}
    />
  );
}

// ============================================================================
// 8. SECTION ITEM (UNIFIED SECTION COMPONENT)
// ============================================================================

export function SectionItem({
  section,
  searchQuery,
  layout = "mobile-left",
  subheadingTitle,
  isPaused = false,
  onSectionClick,
  onTogglePause,
}) {
  if (!section) return null;
  return (
    <section id={section.id} className="py-16 sm:py-20 bg-white border-b border-slate-200/90 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader section={section} searchQuery={searchQuery} showKeyAreasBar={false} />
        <div className="mt-8 sm:mt-10">
          <OrbitalContentShowcase
            items={section.keyAreas}
            ariaLabel={`${section.title || "Section"} content navigation`}
            sectionId={section.id}
            isPaused={isPaused}
            onSectionClick={onSectionClick}
            onTogglePause={onTogglePause}
          />
        </div>
      </div>
    </section>
  );
}

// Named Section Exports for backwards-compatibility
export const Section01Foundation = (props) => <SectionItem layout="mobile-left" subheadingTitle="Explore the Technology Foundation" {...props} />;
export const Section02Languages = (props) => <SectionItem layout="mobile-right" subheadingTitle="Explore Programming Languages & Engineering" {...props} />;
export const Section03Frontend = (props) => <SectionItem layout="mobile-left" subheadingTitle="Explore Frontend Technologies & UI/UX" {...props} />;
export const Section04Backend = (props) => <SectionItem layout="mobile-right" subheadingTitle="Explore Backend Architecture & Services" {...props} />;
export const Section05Database = (props) => <SectionItem layout="mobile-left" subheadingTitle="Explore Databases & Data Architecture" {...props} />;
export const Section06Cloud = (props) => <SectionItem layout="mobile-right" subheadingTitle="Explore Cloud Infrastructure & DevOps" {...props} />;
export const Section07AI = (props) => <SectionItem layout="mobile-left" subheadingTitle="Explore Artificial Intelligence & ML" {...props} />;
export const Section08Mobile = (props) => <SectionItem layout="mobile-right" subheadingTitle="Explore Mobile Engineering & Platforms" {...props} />;
export const Section09DevOps = (props) => <SectionItem layout="mobile-left" subheadingTitle="Explore DevOps & Continuous Delivery" {...props} />;
export const Section10Security = (props) => <SectionItem layout="mobile-right" subheadingTitle="Explore Cybersecurity & Zero Trust" {...props} />;
export const Section11Architecture = (props) => <SectionItem layout="mobile-left" subheadingTitle="Explore Enterprise Software Architecture" {...props} />;
export const Section12Intelligence = (props) => <SectionItem layout="mobile-right" subheadingTitle="Explore Data Intelligence & Advanced Analytics" {...props} />;

const SECTION_CONFIGS = [
  { id: "section-01", layout: "mobile-left", subheading: "Explore Product Benefits Overview" },
  { id: "section-02", layout: "mobile-right", subheading: "Explore Operational Efficiency & Productivity Benefits" },
  { id: "section-03", layout: "mobile-left", subheading: "Explore Time Saving, Automation & Reduced Manual Work" },
  { id: "section-04", layout: "mobile-right", subheading: "Explore Data, Information & Decision-Making Benefits" },
  { id: "section-05", layout: "mobile-left", subheading: "Explore Security, Safety & Cyber Awareness Benefits" },
  { id: "section-06", layout: "mobile-right", subheading: "Explore Government & Institutional Impact" },
  { id: "section-07", layout: "mobile-left", subheading: "Explore Law Enforcement & Investigation Impact" },
  { id: "section-08", layout: "mobile-right", subheading: "Explore Enterprise, Banking & Organizational Impact" },
  { id: "section-09", layout: "mobile-left", subheading: "Explore Public, Citizen & Social Impact" },
  { id: "section-10", layout: "mobile-right", subheading: "Explore Digital Transformation & Technology Impact" },
  { id: "section-11", layout: "mobile-left", subheading: "Explore Business Value, Scalability & Long-Term Benefits" },
  { id: "section-12", layout: "mobile-right", subheading: "Explore Overall Product Impact & Future Value" },
];

// ============================================================================
// 9. COMPLETE TECHNOLOGY & ARCHITECTURE PAGE COMPONENT
// ============================================================================

export default function ProductBenefitsAndImpacts({ onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [pausedSectionId, setPausedSectionId] = useState(null);

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

  const handleSectionSelect = (sectionId) => {
    // When a section is clicked, that section becomes paused.
    // Any previously paused section automatically unpauses and resumes its auto-scroll!
    setPausedSectionId(sectionId);
  };

  const handleToggleSectionPause = (sectionId) => {
    // Toggle pause/play on user demand
    setPausedSectionId((prev) => (prev === sectionId ? null : sectionId));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Embedded Complete Styles from index.css and section-heading-animations.css */}
      <style dangerouslySetInnerHTML={{ __html: EMBEDDED_STYLES }} />

      <main className="flex-1 overflow-x-hidden">
        {/* Top Hero Section */}
        <Hero onBack={handleBack} onHome={handleHome} />

        {/* 12 Architecture Sections with Alternating Layouts */}
        {technologySections.map((section, idx) => {
          const config = SECTION_CONFIGS[idx] || {
            layout: idx % 2 === 0 ? "mobile-left" : "mobile-right",
            subheading: `Explore ${section.title}`,
          };
          const sectionId = section.id || `tech-section-${idx}`;
          const isSectionPaused = pausedSectionId === sectionId;

          return (
            <SectionItem
              key={sectionId}
              section={section}
              searchQuery={searchQuery}
              layout={config.layout}
              subheadingTitle={config.subheading}
              isPaused={isSectionPaused}
              onSectionClick={() => handleSectionSelect(sectionId)}
              onTogglePause={() => handleToggleSectionPause(sectionId)}
            />
          );
        })}
      </main>
    </div>
  );
}

export const ProductBenefitsImpactPage = ProductBenefitsAndImpacts;

