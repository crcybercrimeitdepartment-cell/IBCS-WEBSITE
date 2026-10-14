import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronLeft,
  ChevronRight,
  Wifi,
  BatteryCharging,
  Smartphone,
  Brain,
  Terminal,
  Code2,
  Database,
  Server,
  Workflow,
  Globe,
  Lock,
  GitBranch,
  Home,
} from 'lucide-react';
import { technologySections } from './TechnologyArchitecturePageData';

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
  .animate-shield-pulse-glow {
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
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

/**
 * Intelligent Icon Mapping based on Key Area Title
 */
export function getIconForArea(title = "", index = 0) {
  const t = title.toLowerCase();
  if (t.includes("ai") || t.includes("ml") || t.includes("machine learning") || t.includes("intelligence") || t.includes("model")) return Brain;
  if (t.includes("security") || t.includes("defense") || t.includes("protect") || t.includes("zero-trust") || t.includes("auth") || t.includes("identity")) return ShieldCheck;
  if (t.includes("cloud") || t.includes("aws") || t.includes("azure") || t.includes("gcp") || t.includes("hybrid") || t.includes("serverless")) return Cloud;
  if (t.includes("database") || t.includes("data") || t.includes("sql") || t.includes("nosql") || t.includes("postgres") || t.includes("storage")) return Database;
  if (t.includes("mobile") || t.includes("ios") || t.includes("android") || t.includes("app")) return Smartphone;
  if (t.includes("network") || t.includes("api") || t.includes("gateway") || t.includes("interoperab") || t.includes("protocol")) return Network;
  if (t.includes("code") || t.includes("language") || t.includes("java") || t.includes("python") || t.includes("c++") || t.includes("golang") || t.includes("rust")) return Code2;
  if (t.includes("terminal") || t.includes("script") || t.includes("cli") || t.includes("command")) return Terminal;
  if (t.includes("devops") || t.includes("pipeline") || t.includes("ci/cd") || t.includes("continuous") || t.includes("git")) return Workflow;
  if (t.includes("ui") || t.includes("ux") || t.includes("frontend") || t.includes("web") || t.includes("react") || t.includes("css")) return Globe;
  if (t.includes("scale") || t.includes("distribute") || t.includes("elastic") || t.includes("throughput")) return Maximize2;
  if (t.includes("speed") || t.includes("perform") || t.includes("fast") || t.includes("latency") || t.includes("cache")) return Gauge;
  if (t.includes("micro") || t.includes("modular") || t.includes("component") || t.includes("module")) return Box;
  if (t.includes("server") || t.includes("backend") || t.includes("service") || t.includes("infra")) return Server;
  if (t.includes("governance") || t.includes("enterprise") || t.includes("strategy") || t.includes("planning")) return Compass;

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
  badge = "IBCS SOFTWARE PRODUCTS · CARD 05",
  title = "Technology & Architecture",
  company = "IB Cyber Security Private Limited (IBCS)",
  summary = "Explore the technology foundation supporting IBCS software product development, including programming languages, frontend and backend frameworks, databases, cloud infrastructure, artificial intelligence, DevOps, and cybersecurity. Understand how technology selection and structured architecture support scalable, maintainable, secure, and interoperable software solutions.",
  buttonLabel = "Explore Architecture",
  onExplore,
  features = [
    { label: "12 Technology Domains", dot: "#006769" },
    { label: "144 Architecture Standards", dot: "#14B8A6" },
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
          <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006769]">
            <span className="inline-block h-0.5 w-5 rounded-full bg-[#006769]" />
            <span>{badge}</span>
          </div>

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

export function Hero({ searchQuery, setSearchQuery, onBack, onHome }) {
  const handleExplore = () => {
    const el = document.getElementById("section-01");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <IBCSHeadingSection
      badge="IBCS SOFTWARE PRODUCTS · CARD 05"
      title="Technology & Architecture"
      company="IB Cyber Security Private Limited (IBCS)"
      summary="Explore the technology foundation supporting IBCS software product development, including programming languages, frontend and backend frameworks, databases, cloud infrastructure, artificial intelligence, DevOps, and cybersecurity. Understand how technology selection and structured architecture support scalable, maintainable, secure, and interoperable software solutions."
      buttonLabel="Explore Architecture"
      onExplore={handleExplore}
      onBack={onBack}
      onHome={onHome}
      features={[
        { label: "12 Technology Domains", dot: "#006769" },
        { label: "144 Architecture Standards", dot: "#14B8A6" },
        { label: "Institutional & Enterprise Ready", dot: "#C54E2C" },
      ]}
    >
      <div className="mt-7 max-w-xl mx-auto px-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#007A7E] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter 144 Key Areas (e.g. React, PostgreSQL, Docker, Gemini, JWT...)"
            className="w-full pl-10 pr-10 py-2.5 bg-white/95 backdrop-blur-sm border border-[#C3ECE9] rounded-full text-sm text-[#042C2E] placeholder-[#5A8284] focus:outline-none focus:ring-2 focus:ring-[#006769] focus:border-transparent shadow-xs transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#007A7E] hover:text-[#004E50] cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {searchQuery && (
          <div className="mt-2.5 text-xs text-[#006769] font-medium flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6]" />
            <span>Showing content matching "{searchQuery}" across all 12 sections below</span>
          </div>
        )}
      </div>
    </IBCSHeadingSection>
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
// 7. KEYPAD MOBILE SHOWCASE (COMPACT PHONE, OLED SCREEN, 12 TACTILE KEYS)
// ============================================================================

export function KeypadMobileShowcase({
  section,
  searchQuery = "",
  layout = "mobile-left",
  subheadingTitle,
  isPaused = false,
  onSectionClick,
  onTogglePause,
}) {
  if (!section || !section.keyAreas?.length) return null;

  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [selectedKeyIndex, setSelectedKeyIndex] = useState(0);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setShouldReduceMotion(mq.matches);
      const handler = (e) => setShouldReduceMotion(e.matches);
      mq.addEventListener?.("change", handler);
      return () => mq.removeEventListener?.("change", handler);
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // AUTO-SCROLL / ROTATION:
  // Runs continuously (every 3.5s) as long as this section is in view and NOT paused by user click.
  // As soon as another section is clicked, isPaused flips to false and this effect immediately resumes!
  useEffect(() => {
    if (isPaused || !isInView) return;

    const interval = setInterval(() => {
      setSelectedKeyIndex((prev) => (prev + 1) % section.keyAreas.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, isInView, section.keyAreas.length]);

  const selectedArea = section.keyAreas[selectedKeyIndex] || section.keyAreas[0];
  const CurrentIcon = getIconForArea(selectedArea.title, selectedKeyIndex);

  const handleSelectKey = (idx) => {
    setSelectedKeyIndex(idx);
    if (onSectionClick) onSectionClick();
  };

  const handlePrev = () => {
    setSelectedKeyIndex((prev) => (prev > 0 ? prev - 1 : section.keyAreas.length - 1));
    if (onSectionClick) onSectionClick();
  };

  const handleNext = () => {
    setSelectedKeyIndex((prev) => (prev < section.keyAreas.length - 1 ? prev + 1 : 0));
    if (onSectionClick) onSectionClick();
  };

  const displaySubheading =
    subheadingTitle || `Explore ${section.category || section.title || "Specifications"}`;

  const renderMobileDevice = () => (
    <div 
      className="flex justify-center w-full cursor-pointer"
      onClick={() => { if (onSectionClick) onSectionClick(); }}
    >
      <div className={`w-full max-w-[285px] sm:max-w-[300px] ${shouldReduceMotion ? '' : 'animate-phone-float'}`}>
        <div className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] rounded-[2.3rem] p-4 sm:p-4.5 border-2 border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(0,103,105,0.18),0_10px_20px_-5px_rgba(15,23,42,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)] relative select-none ring-1 ring-slate-300/60">
          
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shadow-inner" aria-hidden="true" />
            <div className="w-12 h-1 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 rounded-full shadow-inner" aria-hidden="true" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shadow-inner" aria-hidden="true" />
          </div>

          <div className="bg-gradient-to-b from-[#EBF5F5] to-[#DBEBEA] rounded-2xl p-2 border border-[#BDE2DE] shadow-inner mb-3">
            <div className="bg-gradient-to-b from-[#041E20] via-[#082B2E] to-[#031517] rounded-xl p-2.5 sm:p-3 border border-[#14B8A6]/35 min-h-[178px] sm:min-h-[188px] lg:min-h-[148px] flex flex-col justify-between text-cyan-300 font-mono relative overflow-hidden shadow-inner">
              
              <div 
                className="absolute -top-10 -left-10 w-44 h-28 bg-gradient-to-br from-white/10 via-white/5 to-transparent rotate-12 pointer-events-none rounded-full blur-xs"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between text-[9px] text-[#5EEAD4] pb-1.5 border-b border-[#0F4A4E] relative z-10">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-end gap-0.5 h-2.5" title="Signal: Full">
                    <span className="w-0.5 h-1 bg-[#2DD4BF] rounded-xs" />
                    <span className="w-0.5 h-1.5 bg-[#2DD4BF] rounded-xs" />
                    <span className="w-0.5 h-2 bg-[#2DD4BF] rounded-xs" />
                    <span className="w-0.5 h-2.5 bg-[#2DD4BF] rounded-xs" />
                  </div>
                  <span className="font-bold tracking-tight text-[8.5px] text-[#A7F3D0]">IBCS 5G</span>
                </div>

                <span className="bg-[#004E50]/90 px-1.5 py-0.5 rounded text-[8.5px] font-bold text-[#5EEAD4] border border-[#14B8A6]/40 shadow-xs">
                  KEY {String(selectedKeyIndex + 1).padStart(2, '0')}/12
                </span>

                <div className="flex items-center gap-1 text-[#5EEAD4]">
                  <Wifi className="w-2.5 h-2.5" />
                  <BatteryCharging className="w-3 h-3 text-[#5EEAD4]" />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedKeyIndex}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? {} : { opacity: 0, y: -4 }}
                  transition={{ duration: 0.16 }}
                  className="my-auto py-1 text-center relative z-10 flex flex-col items-center justify-center"
                >
                  <div className="inline-flex items-center gap-1 text-[8px] sm:text-[8.5px] tracking-wider uppercase font-semibold text-[#5EEAD4]/90 bg-[#00383A]/80 px-2 py-0.5 rounded-full border border-[#14B8A6]/40 mb-1">
                    <span className="w-1 h-1 rounded-full bg-[#2DD4BF] animate-pulse" />
                    <span>SPECIFICATION #{String(selectedKeyIndex + 1).padStart(2, '0')}</span>
                  </div>

                  <div className="text-[12px] sm:text-[13px] font-bold text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(20,184,166,0.4)] px-1">
                    <HighlightText text={selectedArea.title} query={searchQuery} />
                  </div>

                  {/* MOBILE RESPONSIVE ONLY: Data / Description displayed directly inside OLED display screen */}
                  <div className="lg:hidden mt-2 pt-1.5 border-t border-[#0F4A4E]/80 w-full px-1 max-h-[85px] overflow-y-auto">
                    <p className="text-[10px] sm:text-[10.5px] font-sans text-[#CCFBF1] leading-relaxed text-center font-normal">
                      <HighlightText text={selectedArea.description} query={searchQuery} />
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between text-[8px] text-[#5EEAD4]/70 pt-1 border-t border-[#0F4A4E] relative z-10">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onTogglePause) {
                      onTogglePause();
                    } else if (onSectionClick) {
                      onSectionClick();
                    }
                  }}
                  className="flex items-center gap-1 cursor-pointer hover:opacity-100 transition-opacity"
                  title={isPaused ? "Auto-scroll paused. Click to resume" : "Auto-scrolling. Click to pause"}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-amber-400 shadow-[0_0_6px_#F59E0B]' : 'bg-[#2DD4BF] shadow-[0_0_6px_#2DD4BF] animate-pulse'}`} />
                  <span className={isPaused ? 'text-amber-300 font-bold tracking-wider' : 'text-[#5EEAD4]'}>
                    {isPaused ? 'PAUSED' : 'AUTO-SCROLLING'}
                  </span>
                </button>
                <span className="tracking-wider text-[#A7F3D0]/80 font-bold">3×4 TACTILE MATRIX</span>
              </div>

            </div>
          </div>

          {/* Soft Keys */}
          <div className="flex items-center justify-between gap-2 px-0.5 mb-2.5 text-xs">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="flex-1 py-1 px-2 bg-gradient-to-b from-white to-[#F1F5F9] hover:from-[#F8FAFC] hover:to-[#E2E8F0] text-[#006769] font-bold rounded-lg border border-slate-200/90 flex items-center justify-center gap-0.5 font-mono text-[10px] shadow-2xs active:scale-95 transition-all cursor-pointer"
              title="Previous Standard"
            >
              <ChevronLeft className="w-3 h-3" />
              <span>PREV</span>
            </button>

            <div className="w-9 h-7 rounded-lg bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-300/80 flex items-center justify-center text-[9px] font-mono font-bold text-[#006769] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#14B8A6] shadow-[0_0_6px_#14B8A6]" />
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="flex-1 py-1 px-2 bg-gradient-to-b from-white to-[#F1F5F9] hover:from-[#F8FAFC] hover:to-[#E2E8F0] text-[#006769] font-bold rounded-lg border border-slate-200/90 flex items-center justify-center gap-0.5 font-mono text-[10px] shadow-2xs active:scale-95 transition-all cursor-pointer"
              title="Next Standard"
            >
              <span>NEXT</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* 12 Keypad Buttons */}
          <div className="grid grid-cols-3 gap-2">
            {section.keyAreas.map((area, idx) => {
              const KeyIcon = getIconForArea(area.title, idx);
              const isSelected = selectedKeyIndex === idx;
              const keyNumber = String(idx + 1).padStart(2, '0');
              const shortLabel = getShortLabel(area.title);

              return (
                <button
                  key={area.id || `${section.id}-key-${idx}`}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectKey(idx);
                  }}
                  className={`h-12 sm:h-13 rounded-xl p-1 flex flex-col items-center justify-between relative cursor-pointer transition-all duration-150 focus:outline-none ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#006769] to-[#004E50] text-white border-2 border-[#14B8A6] shadow-[0_4px_12px_rgba(0,103,105,0.35),0_0_10px_rgba(20,184,166,0.45),0_1px_0_#00383A] translate-y-0.5'
                      : 'bg-gradient-to-b from-white via-[#FBFDFF] to-[#F1F5F9] hover:bg-[#F0FBFA] text-slate-800 border border-slate-200/90 shadow-[0_2px_0_#CBD5E1,0_2px_4px_rgba(0,0,0,0.03)] hover:border-[#14B8A6]/60'
                  }`}
                  title={`Key ${keyNumber}: ${area.title}`}
                >
                  <div className="w-full flex items-center justify-between px-1 text-[9px] font-mono leading-none">
                    <span className={`font-bold ${isSelected ? 'text-[#A7F3D0]' : 'text-slate-400'}`}>
                      {keyNumber}
                    </span>
                    {isSelected && (
                      <span className="w-1 h-1 rounded-full bg-[#5EEAD4] shadow-[0_0_4px_#5EEAD4]" />
                    )}
                  </div>

                  <KeyIcon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSelected ? 'text-white' : 'text-[#006769]'}`} />

                  <span className={`text-[8.5px] sm:text-[9px] font-sans font-medium tracking-tight truncate max-w-full px-0.5 leading-none ${
                    isSelected ? 'text-[#E0F2FE] font-bold' : 'text-slate-600'
                  }`}>
                    {shortLabel}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between px-2 text-[9px] font-mono text-slate-400">
            <span>IBCS TECH</span>
            <div className="w-1 h-1 rounded-full bg-slate-300 shadow-inner" aria-hidden="true" />
            <span>KEYPAD · {section.sectionNumberRaw || "01"}</span>
          </div>

        </div>
      </div>
    </div>
  );

  const renderContentBox = () => (
    <div 
      className="hidden lg:flex w-full flex-col justify-center self-center cursor-pointer"
      onClick={() => { if (onSectionClick) onSectionClick(); }}
    >
      <div className="bg-gradient-to-br from-white via-[#F8FCFB] to-[#F1F9F8] border border-[#CDEAE7] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_12px_36px_-8px_rgba(0,103,105,0.08)] relative overflow-hidden flex flex-col justify-center min-h-[340px]">
        
        <div 
          className="absolute top-0 right-0 w-64 h-64 bg-[#E0F7F5]/70 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" 
          aria-hidden="true"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedKeyIndex}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="relative z-10"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#006769] to-[#004E50] text-white flex items-center justify-center shrink-0 shadow-[0_6px_18px_rgba(0,103,105,0.25)] border border-[#14B8A6]">
                <CurrentIcon className="w-6 h-6" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold text-[#007A7E] uppercase tracking-wider">
                    Key Area {String(selectedKeyIndex + 1).padStart(2, '0')} of 12
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onTogglePause) onTogglePause();
                    }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold transition-all cursor-pointer border shadow-2xs"
                    style={{
                      backgroundColor: isPaused ? '#FEF3C7' : '#CCFBF1',
                      borderColor: isPaused ? '#F59E0B' : '#14B8A6',
                      color: isPaused ? '#92400E' : '#0F766E'
                    }}
                    title={isPaused ? "Auto-scroll paused. Click to resume" : "Auto-scrolling. Click to pause"}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-amber-500 shadow-[0_0_4px_#F59E0B]' : 'bg-emerald-500 animate-pulse'}`} />
                    <span>{isPaused ? 'PAUSED' : 'AUTO-SCROLLING'}</span>
                  </button>
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-[#042C2E] tracking-tight leading-snug">
                  <HighlightText text={selectedArea.title} query={searchQuery} />
                </h4>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-[#C3ECE9] p-6 sm:p-7 shadow-2xs">
              <p className="text-base sm:text-lg text-[#1E4345] leading-relaxed font-normal text-justify">
                <HighlightText text={selectedArea.description} query={searchQuery} />
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="w-full">
      <div className="pb-4 mb-8 border-b border-[#C3ECE9]">
        <h3 className="text-xl sm:text-2xl font-bold text-[#042C2E] tracking-tight flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-[#006769]" />
          <span>{displaySubheading}</span>
        </h3>
      </div>

      <div className="w-full">
        {layout === "mobile-left" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-5 flex justify-center">{renderMobileDevice()}</div>
            <div className="hidden lg:block lg:col-span-7">{renderContentBox()}</div>
          </div>
        )}

        {layout === "mobile-right" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="hidden lg:block lg:col-span-7 order-2 lg:order-1">{renderContentBox()}</div>
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">{renderMobileDevice()}</div>
          </div>
        )}

        {layout === "mobile-top" && (
          <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
            <div className="w-full flex justify-center">{renderMobileDevice()}</div>
            <div className="hidden lg:block w-full">{renderContentBox()}</div>
          </div>
        )}

        {layout === "content-top" && (
          <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
            <div className="hidden lg:block w-full">{renderContentBox()}</div>
            <div className="w-full flex justify-center">{renderMobileDevice()}</div>
          </div>
        )}
      </div>
    </div>
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
        <KeypadMobileShowcase
          section={section}
          searchQuery={searchQuery}
          layout={layout}
          subheadingTitle={subheadingTitle}
          isPaused={isPaused}
          onSectionClick={onSectionClick}
          onTogglePause={onTogglePause}
        />
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
  { id: "section-01", layout: "mobile-left", subheading: "Explore the Technology Foundation" },
  { id: "section-02", layout: "mobile-right", subheading: "Explore Programming Languages & Engineering" },
  { id: "section-03", layout: "mobile-left", subheading: "Explore Frontend Technologies & UI/UX" },
  { id: "section-04", layout: "mobile-right", subheading: "Explore Backend Architecture & Services" },
  { id: "section-05", layout: "mobile-left", subheading: "Explore Databases & Data Architecture" },
  { id: "section-06", layout: "mobile-right", subheading: "Explore Cloud Infrastructure & DevOps" },
  { id: "section-07", layout: "mobile-left", subheading: "Explore Artificial Intelligence & ML" },
  { id: "section-08", layout: "mobile-right", subheading: "Explore Mobile Engineering & Platforms" },
  { id: "section-09", layout: "mobile-left", subheading: "Explore DevOps & Continuous Delivery" },
  { id: "section-10", layout: "mobile-right", subheading: "Explore Cybersecurity & Zero Trust" },
  { id: "section-11", layout: "mobile-left", subheading: "Explore Enterprise Software Architecture" },
  { id: "section-12", layout: "mobile-right", subheading: "Explore Data Intelligence & Advanced Analytics" },
];

// ============================================================================
// 9. COMPLETE TECHNOLOGY & ARCHITECTURE PAGE COMPONENT
// ============================================================================

export default function TechnologyArchitecture({ onClose }) {
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
        <Hero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onBack={handleBack}
          onHome={handleHome}
        />

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

export const TechnologyArchitecturePage = TechnologyArchitecture;

