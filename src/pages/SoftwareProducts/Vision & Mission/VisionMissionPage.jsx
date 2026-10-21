import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import { technologySections } from './VisionMissionPageData';

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
   RETRO PIXEL CARD & LEFT-CENTER-RIGHT PASSING FLOW STYLES
   ========================================================================= */
/* Reusable extraction of Product Introduction — Section 04 card visuals.
   Namespaced rpc-* classes avoid collisions with the target project. */
.rpc-section-canvas {
  width: 100%;
  padding: 1rem 0 1.5rem;
  background: transparent;
  color: #042C2E;
  overflow: visible;
}
.rpc-card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem 1rem;
  width: 100%;
  padding: 1rem 12px 1.25rem;
  box-sizing: border-box;
}
@keyframes rpc-pixel-card-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.rpc-pixel-card {
  --rpc-c1: #2DD4BF;
  --rpc-c2: #008285;
  --rpc-c3: #004D4F;
  --rpc-bg: #032B2D;
  --rpc-inset: #01191A;
  width: 100%;
  min-width: 0;
  min-height: 175px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.85rem 0.85rem;
  border-radius: 2px;
  background: var(--rpc-bg);
  box-shadow: inset 0 0 4px 4px var(--rpc-inset), 0 10px 24px rgba(0,103,105,.1);
  animation: rpc-pixel-card-bounce 3.2s steps(8) infinite;
  transition: transform .25s ease, box-shadow .25s ease;
  isolation: isolate;
  z-index: 1;
}
.rpc-pixel-card::before {
  content: "";
  position: absolute;
  inset: -8px;
  z-index: -1;
  pointer-events: none;
  background:
    linear-gradient(to right, var(--rpc-c1) 0 4px, var(--rpc-c2) 4px 8px, var(--rpc-c3) 8px 12px, transparent 12px),
    linear-gradient(to left, var(--rpc-c3) 0 4px, var(--rpc-c2) 4px 8px, var(--rpc-c1) 8px 12px, transparent 12px),
    linear-gradient(to bottom, var(--rpc-c1) 0 4px, var(--rpc-c2) 4px 8px, var(--rpc-c3) 8px 12px, transparent 12px),
    linear-gradient(to top, var(--rpc-c3) 0 4px, var(--rpc-c2) 4px 8px, var(--rpc-c1) 8px 12px, transparent 12px);
}
.rpc-pixel-card:hover {
  animation-play-state: paused;
  transform: translateY(-5px) scale(1.015);
  box-shadow: inset 0 0 4px 4px var(--rpc-inset), 0 16px 32px rgba(0,103,105,.22), 0 0 16px rgba(45,212,191,.15);
  z-index: 5;
}
.rpc-corner-container { position: absolute; pointer-events: none; z-index: 2; }
.rpc-corner-container.top-left { top: -8px; left: -8px; }
.rpc-corner-container.top-right { top: -8px; right: -8px; }
.rpc-corner-container.bottom-left { bottom: -8px; left: -8px; }
.rpc-corner-container.bottom-right { bottom: -8px; right: -8px; }
.rpc-corner { width: 14px; aspect-ratio: 1 / 1; background: var(--rpc-c2); position: relative; }
.rpc-first-corner { width: 80%; height: 80%; position: absolute; top: 0; left: 0; background: var(--rpc-c1); z-index: 1; }
.rpc-second-corner { width: 80%; height: 80%; position: absolute; right: 0; bottom: 0; background: var(--rpc-c3); z-index: 1; }
.rpc-center-corner { width: 60%; height: 60%; position: absolute; top: 20%; left: 20%; background: var(--rpc-c3); z-index: 1; }
.rpc-inner-center-corner { width: 40%; height: 40%; position: absolute; top: 40%; left: 40%; background: var(--rpc-c1); z-index: 1; }
.rpc-inner-center { width: 20%; height: 20%; position: absolute; top: 40%; left: 40%; background: var(--rpc-c2); z-index: 1; }
.rpc-inner-center-bottom-left { width: 20%; height: 20%; position: absolute; top: 60%; left: 20%; background: var(--rpc-c2); z-index: 1; }
.rpc-inner-center-top-right { width: 20%; height: 20%; position: absolute; top: 20%; left: 60%; background: var(--rpc-c2); z-index: 1; }
.rpc-card-content { position: relative; z-index: 3; display: flex; flex: 1; flex-direction: column; justify-content: center; min-width: 0; }
.rpc-card-heading-row { display: flex; align-items: flex-start; gap: .5rem; margin-bottom: .45rem; min-width: 0; }
.rpc-icon-box { width: 1.75rem; height: 1.75rem; flex: 0 0 1.75rem; border-radius: .375rem; display: flex; align-items: center; justify-content: center; color: #2DD4BF; background: #004D4F; border: 1px solid rgba(45,212,191,.35); box-shadow: 0 1px 2px rgba(0,0,0,.12); transition: color .2s ease, background .2s ease; }
.rpc-card-icon { width: .875rem; height: .875rem; }
.rpc-pixel-card:hover .rpc-icon-box { color: #fff; background: #006769; }
.rpc-card-title-wrap { flex: 1; min-width: 0; padding-top: .125rem; }
.rpc-title-line { display: flex; align-items: center; gap: .375rem; }
.rpc-pulse-dot { flex: 0 0 auto; width: .375rem; height: .375rem; border-radius: 999px; background: #2DD4BF; animation: rpc-pulse 1.8s ease-in-out infinite; }
@keyframes rpc-pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .5; transform: scale(.78); } }
.rpc-card-title { margin: 0; color: #fff; font-size: .8rem; line-height: 1.35; font-weight: 800; overflow-wrap: anywhere; transition: color .2s ease; }
.rpc-pixel-card:hover .rpc-card-title { color: #2DD4BF; }
.rpc-card-description { margin: 0; padding-left: 0; color: #A7E8E4; font-size: 11.5px; line-height: 1.6; font-weight: 400; overflow-wrap: anywhere; transition: color .2s ease; }
.rpc-pixel-card:hover .rpc-card-description { color: #fff; }

@media (min-width: 640px) {
  .rpc-card-grid { gap: 1.75rem; padding: 1rem 16px 1.5rem; }
  .rpc-pixel-card { min-height: 180px; padding: 1.15rem 1.25rem; }
  .rpc-pixel-card::before { inset: -12px; }
  .rpc-corner-container.top-left { top: -16px; left: -16px; }
  .rpc-corner-container.top-right { top: -16px; right: -16px; }
  .rpc-corner-container.bottom-left { bottom: -16px; left: -16px; }
  .rpc-corner-container.bottom-right { bottom: -16px; right: -16px; }
  .rpc-corner { width: 20px; }
  .rpc-card-heading-row { gap: .75rem; margin-bottom: .5rem; }
  .rpc-icon-box { width: 2.125rem; height: 2.125rem; flex-basis: 2.125rem; border-radius: .5rem; }
  .rpc-card-icon { width: 1.125rem; height: 1.125rem; }
  .rpc-card-title { font-size: 0.98rem; line-height: 1.4; }
  .rpc-pulse-dot { width: .5rem; height: .5rem; }
  .rpc-card-description { padding-left: 2.875rem; font-size: 13px; }
}
@media (min-width: 1024px) { .rpc-card-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 2rem; } }
@media (min-width: 1280px) { .rpc-card-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
@media (prefers-reduced-motion: reduce) {
  .rpc-pixel-card, .rpc-pulse-dot { animation: none; }
  .rpc-pixel-card, .rpc-icon-box, .rpc-card-title, .rpc-card-description { transition: none; }
}

/* =========================================================================
   LEFT–CENTER–RIGHT PASSING FLOW STAGE FOR RETRO PIXEL CARDS
   (Strictly Mobile-Responsive & Aligned across All Screen Sizes)
   ========================================================================= */

.rpc-flow-showcase {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  padding: 0.95rem 0.65rem 1.15rem;
  background: linear-gradient(180deg, #E8F8F6 0%, #F2FCFB 52%, #F8FDFC 100%);
  border: 1px solid #D0ECE9;
  border-radius: 20px;
  box-shadow: 0 10px 28px rgba(0, 103, 105, 0.08);
  overflow: hidden;
  isolation: isolate;
}

@media (min-width: 640px) {
  .rpc-flow-showcase {
    padding: 1.5rem 1.25rem 1.75rem;
    border-radius: 24px;
    box-shadow: 0 12px 32px rgba(0, 103, 105, 0.08);
  }
}

/* Top Header Bar */
.rpc-flow-top-bar {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
  padding-bottom: 0.65rem;
  border-bottom: 1px solid rgba(0, 103, 105, 0.12);
}

.rpc-flow-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
}

.rpc-flow-meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
}

@media (min-width: 640px) {
  .rpc-flow-top-bar {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    padding-bottom: 0.75rem;
  }
  .rpc-flow-top-row,
  .rpc-flow-meta-row {
    width: auto;
    gap: 0.75rem;
  }
}

.rpc-flow-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #006769;
  background: #E0F7F5;
  padding: 0.28rem 0.65rem;
  border-radius: 9999px;
  border: 1px solid rgba(20, 184, 166, 0.3);
  white-space: nowrap;
}

.rpc-flow-legend {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.68rem;
  font-weight: 700;
  color: #006769;
  background: #E0F7F5;
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
  border: 1px solid #C3ECE9;
  white-space: nowrap;
}
.rpc-legend-active {
  color: #042C2E;
  font-weight: 900;
  text-decoration: underline;
}

.rpc-flow-counter {
  font-family: var(--font-mono, monospace);
  font-size: 0.75rem;
  font-weight: 700;
  color: #042C2E;
  background: #FFFFFF;
  padding: 0.28rem 0.65rem;
  border-radius: 9999px;
  border: 1px solid #C8ECE8;
  white-space: nowrap;
}

.rpc-flow-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: #006769;
  background: #E0F7F5;
  padding: 0.28rem 0.65rem;
  border-radius: 9999px;
  border: 1px solid #C3ECE9;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
}
.rpc-flow-pill:hover {
  background: #FFFFFF;
  border-color: #14B8A6;
}

/* 3-Position Flow Stage Canvas */
.rpc-flow-stage {
  position: relative;
  width: 100%;
  height: 250px;
  margin: 0 auto;
  overflow: hidden;
  perspective: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 640px) {
  .rpc-flow-stage {
    height: 270px;
    overflow: visible;
  }
}

/* Card Slot Wrapper */
.rpc-flow-slot-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  transition: transform 0.65s cubic-bezier(0.25, 1, 0.35, 1),
              opacity 0.65s ease,
              filter 0.65s ease;
  will-change: transform, opacity;
}

/* 1. Desktop & Tablet Positioning (>= 640px) */
@media (min-width: 640px) {
  .rpc-flow-slot-wrap {
    width: min(88vw, 470px);
  }
  .rpc-flow-slot-wrap.pos-center {
    transform: translate(-50%, -50%) scale(1.05);
    opacity: 1;
    filter: none;
    z-index: 10;
    pointer-events: auto;
  }
  .rpc-flow-slot-wrap.pos-center .rpc-pixel-card {
    box-shadow: inset 0 0 4px 4px var(--rpc-inset),
                0 18px 36px rgba(0, 103, 105, 0.32),
                0 0 20px rgba(45, 212, 191, 0.22);
  }
  .rpc-flow-slot-wrap.pos-left {
    transform: translate(-106%, -50%) scale(0.85);
    opacity: 0.65;
    filter: brightness(0.88);
    z-index: 4;
    cursor: pointer;
    pointer-events: auto;
  }
  .rpc-flow-slot-wrap.pos-left:hover {
    opacity: 0.88;
    filter: brightness(1);
    transform: translate(-104%, -50%) scale(0.88);
  }
  .rpc-flow-slot-wrap.pos-right {
    transform: translate(6%, -50%) scale(0.85);
    opacity: 0.65;
    filter: brightness(0.88);
    z-index: 4;
    cursor: pointer;
    pointer-events: auto;
  }
  .rpc-flow-slot-wrap.pos-right:hover {
    opacity: 0.88;
    filter: brightness(1);
    transform: translate(4%, -50%) scale(0.88);
  }
  .rpc-flow-slot-wrap.pos-far-left {
    transform: translate(-165%, -50%) scale(0.7);
    opacity: 0;
    z-index: 1;
    pointer-events: none;
  }
  .rpc-flow-slot-wrap.pos-far-right {
    transform: translate(65%, -50%) scale(0.7);
    opacity: 0;
    z-index: 1;
    pointer-events: none;
  }
}

/* 2. Mobile Responsive Positioning (< 640px) */
@media (max-width: 639px) {
  .rpc-flow-slot-wrap {
    width: min(78vw, 275px);
  }
  /* Center Card: Perfectly aligned and prominent */
  .rpc-flow-slot-wrap.pos-center {
    transform: translate(-50%, -50%) scale(1.0);
    opacity: 1;
    filter: none;
    z-index: 10;
    pointer-events: auto;
  }
  .rpc-flow-slot-wrap.pos-center .rpc-pixel-card {
    box-shadow: inset 0 0 4px 4px var(--rpc-inset),
                0 14px 28px rgba(0, 103, 105, 0.28),
                0 0 16px rgba(45, 212, 191, 0.2);
  }
  /* Left Preview Card: Symmetrically peeking in by ~40px from left edge */
  .rpc-flow-slot-wrap.pos-left {
    transform: translate(-140%, -50%) scale(0.82);
    opacity: 0.58;
    filter: brightness(0.85);
    z-index: 4;
    cursor: pointer;
    pointer-events: auto;
  }
  /* Right Preview Card: Symmetrically peeking in by ~40px from right edge */
  .rpc-flow-slot-wrap.pos-right {
    transform: translate(40%, -50%) scale(0.82);
    opacity: 0.58;
    filter: brightness(0.85);
    z-index: 4;
    cursor: pointer;
    pointer-events: auto;
  }
  /* Offscreen slots */
  .rpc-flow-slot-wrap.pos-far-left {
    transform: translate(-230%, -50%) scale(0.7);
    opacity: 0;
    z-index: 1;
    pointer-events: none;
  }
  .rpc-flow-slot-wrap.pos-far-right {
    transform: translate(130%, -50%) scale(0.7);
    opacity: 0;
    z-index: 1;
    pointer-events: none;
  }
}

/* Navigation Controls Bar */
.rpc-flow-controls {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 0.85rem;
  border-top: 1px solid rgba(0, 103, 105, 0.12);
  gap: 0.5rem;
  width: 100%;
  box-sizing: border-box;
}

.rpc-flow-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.95rem;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #042C2E;
  background: #FFFFFF;
  border: 1px solid #C3ECE9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  white-space: nowrap;
}
.rpc-flow-btn:hover {
  background: #006769;
  color: #FFFFFF;
  border-color: #006769;
}

@media (max-width: 639px) {
  .rpc-flow-btn {
    padding: 0.4rem 0.65rem;
    font-size: 0.72rem;
  }
}

/* Pagination Dots */
.rpc-flow-dots {
  display: flex;
  align-items: center;
  gap: 0.28rem;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 190px;
}

.rpc-flow-dot {
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 9999px;
  background: #C3ECE9;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s ease;
}
.rpc-flow-dot.is-active {
  width: 1.25rem;
  background: #006769;
}

@media (max-width: 639px) {
  .rpc-flow-dot {
    width: 0.34rem;
    height: 0.34rem;
  }
  .rpc-flow-dot.is-active {
    width: 0.95rem;
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
        <span key={index} className="w-1.5 h-1.5 rounded-full bg-[#8FD6CF]/60" />
      ))}
    </div>
  );
}

// ============================================================================
// 2. HERO VISION & MISSION DECORATIVE BACKGROUND FLOATING ICONS
// (Corporate Vision, Mission, Goals, Innovation, AI, Global Expansion,
//  Leadership, Growth, Digital Transformation, R&D, Strategic Planning, Social Impact)
// ============================================================================

function VisionMissionBackgroundIcon({ type, size = 18, color = "#006769" }) {
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
    // 1. Corporate Vision (Visionary Horizon, Forward-Looking Lens & Guiding Rays)
    case "corporate-vision":
    case "vision":
      return (
        <svg {...commonProps}>
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3.5" fill={color} fillOpacity="0.25" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="1.2" fill={color} />
          <path d="M12 2v2.5M12 19.5v2.5M20.5 4.5l-1.8 1.8M5.3 18.7l-1.8 1.8" strokeWidth="1.5" strokeOpacity="0.5" />
        </svg>
      );

    // 2. Mission & Purpose (Bullseye Target with Precision Arrow)
    case "mission-purpose":
    case "mission":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9.5" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="6" fill={color} fillOpacity="0.12" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="2.5" fill={color} fillOpacity="0.35" strokeWidth="1.8" />
          <path d="m14 10 7-7m-3 0h3v3" strokeWidth="1.8" />
          <path d="m4 20 2-2" strokeWidth="1.8" strokeOpacity="0.6" />
        </svg>
      );

    // 3. Strategic Goals (Mountain Summit with Milestone Flag)
    case "strategic-goals":
    case "goals":
      return (
        <svg {...commonProps}>
          <path d="M3 21l7-12 4 7 3-5 4 10H3z" fill={color} fillOpacity="0.1" strokeWidth="1.8" />
          <path d="M10 9V3l4 2-4 2" fill={color} fillOpacity="0.35" strokeWidth="1.8" />
          <line x1="2" y1="21" x2="22" y2="21" strokeWidth="1.8" />
          <circle cx="10" cy="9" r="1.2" fill={color} />
        </svg>
      );

    // 4. Innovation & Creativity (Radiant Idea Lightbulb with Creative Sparks)
    case "innovation-creativity":
    case "innovation":
      return (
        <svg {...commonProps}>
          <path d="M9 18h6m-5 3h4" strokeWidth="1.8" />
          <path d="M12 2a7 7 0 0 0-4.5 12.3c.9.8 1.5 2 1.5 3.2h6c0-1.2.6-2.4 1.5-3.2A7 7 0 0 0 12 2z" fill={color} fillOpacity="0.15" strokeWidth="1.8" />
          <path d="M12 6v3m0 3h.01M9.5 9.5l1.5 1.5" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    // 5. AI & Intelligent Technology (Neural Processor Core & Synapse Nodes)
    case "ai-technology":
    case "ai":
      return (
        <svg {...commonProps}>
          <rect x="5" y="5" width="14" height="14" rx="3" fill={color} fillOpacity="0.12" strokeWidth="1.8" />
          <circle cx="9" cy="9" r="1.5" fill={color} />
          <circle cx="15" cy="9" r="1.5" fill={color} />
          <circle cx="12" cy="14" r="1.8" fill={color} fillOpacity="0.4" strokeWidth="1.5" />
          <path d="M9 9l3 5 3-5" strokeWidth="1.5" />
          <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" strokeWidth="1.8" />
        </svg>
      );

    // 6. Global Expansion (Interconnected Globe with Orbital Trajectory)
    case "global-expansion":
    case "global":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9.5" fill={color} fillOpacity="0.08" strokeWidth="1.8" />
          <path d="M2.5 12h19" strokeWidth="1.6" />
          <path d="M12 2.5a14.5 14.5 0 0 0 0 19 14.5 14.5 0 0 0 0-19z" fill={color} fillOpacity="0.12" strokeWidth="1.6" />
          <path d="M19 6l3-1-1 3" strokeWidth="1.8" />
          <path d="M21 5a11 11 0 0 0-6-3" strokeWidth="1.6" strokeDasharray="2 2" />
        </svg>
      );

    // 7. Leadership & Governance (Shield with Institutional Pillar & Guiding Crown)
    case "leadership-governance":
    case "leadership":
      return (
        <svg {...commonProps}>
          <path d="M12 2L4 5.5v6.2c0 5.4 3.4 10.4 8 11.8 4.6-1.4 8-6.4 8-11.8V5.5L12 2z" fill={color} fillOpacity="0.12" strokeWidth="1.8" />
          <path d="M8 10h8m-6 0v5m4-5v5m-5 5h6" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="7" r="1.5" fill={color} />
        </svg>
      );

    // 8. Business Growth (Ascending Metric Bars with Upward Momentum Arrow)
    case "business-growth":
    case "growth":
      return (
        <svg {...commonProps}>
          <rect x="3" y="14" width="3.5" height="7" rx="1" fill={color} fillOpacity="0.25" strokeWidth="1.6" />
          <rect x="8.5" y="10" width="3.5" height="11" rx="1" fill={color} fillOpacity="0.3" strokeWidth="1.6" />
          <rect x="14" y="6" width="3.5" height="15" rx="1" fill={color} fillOpacity="0.35" strokeWidth="1.6" />
          <path d="M3 11l6-5 5 3 7-7" strokeWidth="1.8" strokeLinecap="round" />
          <polyline points="17 2 21 2 21 6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    // 9. Digital Transformation (Transformative Isometric Cube & Flow Nodes)
    case "digital-transformation":
    case "transformation":
      return (
        <svg {...commonProps}>
          <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" fill={color} fillOpacity="0.08" strokeWidth="1.8" />
          <path d="M12 2v18M20 6.5l-8 4.5-8-4.5" strokeWidth="1.6" />
          <circle cx="12" cy="11" r="2.5" fill={color} fillOpacity="0.3" />
          <circle cx="12" cy="2" r="1.2" fill={color} />
          <circle cx="20" cy="15.5" r="1.2" fill={color} />
          <circle cx="4" cy="15.5" r="1.2" fill={color} />
        </svg>
      );

    // 10. Research & Development (Molecular / Atomic Orbital Discovery)
    case "research-development":
    case "research":
    case "rnd":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(30 12 12)" strokeWidth="1.5" strokeDasharray="3 2" />
          <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(-30 12 12)" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="12" cy="12" r="3" fill={color} fillOpacity="0.3" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="1.2" fill={color} />
          <circle cx="19" cy="8" r="1.2" fill={color} />
          <circle cx="5" cy="16" r="1.2" fill={color} />
        </svg>
      );

    // 11. Strategic Planning (Strategic Roadmap Blueprint & Milestones)
    case "strategic-planning":
    case "planning":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="2.5" fill={color} fillOpacity="0.06" strokeWidth="1.8" />
          <circle cx="7" cy="7" r="2" fill={color} fillOpacity="0.3" strokeWidth="1.6" />
          <circle cx="17" cy="10" r="2" fill={color} fillOpacity="0.3" strokeWidth="1.6" />
          <circle cx="12" cy="17" r="2" fill={color} fillOpacity="0.4" strokeWidth="1.6" />
          <path d="M8.5 8.5l7 1.5M16 11.5l-3 4" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="2 2" />
          <polyline points="10 17 12 17 12 15" strokeWidth="1.6" />
        </svg>
      );

    // 12. Social & Institutional Impact (Institutional Pediment Pillars & Public Trust)
    case "social-institutional-impact":
    case "impact":
      return (
        <svg {...commonProps}>
          <path d="M2 8l10-5 10 5v2H2V8z" fill={color} fillOpacity="0.2" strokeWidth="1.8" />
          <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8" strokeWidth="1.8" />
          <path d="M2 18h20v3H2v-3z" fill={color} fillOpacity="0.2" strokeWidth="1.8" />
          <circle cx="12" cy="5.5" r="1.5" fill={color} />
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

const SecurityIcon = VisionMissionBackgroundIcon;

const FLOATING_ICONS = [
  // Top-left area (Corporate Vision, Mission, Goals, Innovation, AI, Global Expansion, Leadership, Growth, Transformation)
  { id: 1, type: "corporate-vision", size: 21, color: "#006769", opacity: 0.38, top: "8%", left: "4%", anim: "animate-float-shield-1", delay: "0s", rotate: "-6deg" },
  { id: 2, type: "mission-purpose", size: 21, color: "#14B8A6", opacity: 0.42, top: "22%", left: "11%", anim: "animate-float-shield-2", delay: "1.2s", rotate: "8deg" },
  { id: 3, type: "strategic-goals", size: 20, color: "#007A7E", opacity: 0.32, top: "37%", left: "3%", anim: "animate-float-shield-3", delay: "2.5s", rotate: "-4deg" },
  { id: 4, type: "innovation-creativity", size: 21, color: "#006769", opacity: 0.40, top: "54%", left: "8%", anim: "animate-float-shield-4", delay: "0.8s", rotate: "6deg" },
  { id: 5, type: "ai-technology", size: 20, color: "#14B8A6", opacity: 0.35, top: "70%", left: "5%", anim: "animate-float-shield-1", delay: "3.1s", rotate: "12deg" },
  { id: 6, type: "global-expansion", size: 21, color: "#007A7E", opacity: 0.36, top: "84%", left: "12%", anim: "animate-float-shield-2", delay: "1.7s", rotate: "-8deg" },
  { id: 7, type: "leadership-governance", size: 19, color: "#006769", opacity: 0.28, top: "27%", left: "21%", anim: "animate-float-shield-3", delay: "4.0s", rotate: "10deg" },
  { id: 8, type: "business-growth", size: 20, color: "#14B8A6", opacity: 0.32, top: "72%", left: "20%", anim: "animate-float-shield-4", delay: "2.1s", rotate: "-5deg" },
  { id: 9, type: "digital-transformation", size: 20, color: "#007A7E", opacity: 0.30, top: "16%", left: "17%", anim: "animate-float-shield-1", delay: "3.5s", rotate: "7deg" },

  // Top-right area (Research & Development, Strategic Planning, Social Impact, Vision, Mission, Goals, Innovation, AI, Global)
  { id: 10, type: "research-development", size: 21, color: "#007A7E", opacity: 0.40, top: "10%", right: "5%", anim: "animate-float-shield-2", delay: "0.5s", rotate: "6deg" },
  { id: 11, type: "strategic-planning", size: 20, color: "#14B8A6", opacity: 0.36, top: "24%", right: "12%", anim: "animate-float-shield-1", delay: "2.2s", rotate: "-8deg" },
  { id: 12, type: "social-institutional-impact", size: 21, color: "#006769", opacity: 0.42, top: "40%", right: "4%", anim: "animate-float-shield-4", delay: "1.4s", rotate: "5deg" },
  { id: 13, type: "corporate-vision", size: 19, color: "#007A7E", opacity: 0.32, top: "56%", right: "9%", anim: "animate-float-shield-3", delay: "3.3s", rotate: "-6deg" },
  { id: 14, type: "mission-purpose", size: 20, color: "#14B8A6", opacity: 0.38, top: "72%", right: "6%", anim: "animate-float-shield-1", delay: "1.9s", rotate: "10deg" },
  { id: 15, type: "strategic-goals", size: 20, color: "#006769", opacity: 0.30, top: "86%", right: "13%", anim: "animate-float-shield-2", delay: "2.7s", rotate: "-4deg" },
  { id: 16, type: "innovation-creativity", size: 19, color: "#007A7E", opacity: 0.28, top: "29%", right: "21%", anim: "animate-float-shield-4", delay: "0.9s", rotate: "8deg" },
  { id: 17, type: "ai-technology", size: 20, color: "#14B8A6", opacity: 0.34, top: "74%", right: "21%", anim: "animate-float-shield-3", delay: "3.7s", rotate: "-10deg" },
  { id: 18, type: "global-expansion", size: 19, color: "#006769", opacity: 0.30, top: "17%", right: "18%", anim: "animate-float-shield-2", delay: "1.1s", rotate: "-5deg" },

  // Center subtle ambient accents
  { id: 19, type: "leadership-governance", size: 17, color: "#006769", opacity: 0.26, top: "6%", left: "28%", anim: "animate-float-shield-3", delay: "1.3s", rotate: "10deg" },
  { id: 20, type: "business-growth", size: 17, color: "#14B8A6", opacity: 0.28, top: "4%", left: "44%", anim: "animate-float-shield-1", delay: "2.6s", rotate: "-3deg" },
  { id: 21, type: "digital-transformation", size: 17, color: "#007A7E", opacity: 0.27, top: "5%", right: "42%", anim: "animate-float-shield-2", delay: "0.7s", rotate: "5deg" },
  { id: 22, type: "research-development", size: 18, color: "#006769", opacity: 0.28, top: "6%", right: "28%", anim: "animate-float-shield-4", delay: "3.0s", rotate: "-7deg" },
  { id: 23, type: "strategic-planning", size: 16, color: "#006769", opacity: 0.22, top: "46%", left: "26%", anim: "animate-float-shield-2", delay: "4.1s", rotate: "-12deg" },
  { id: 24, type: "social-institutional-impact", size: 17, color: "#14B8A6", opacity: 0.22, top: "48%", right: "27%", anim: "animate-float-shield-1", delay: "1.8s", rotate: "6deg" },
  { id: 25, type: "corporate-vision", size: 16, color: "#007A7E", opacity: 0.24, bottom: "10%", left: "32%", anim: "animate-float-shield-4", delay: "2.3s", rotate: "4deg" },
  { id: 26, type: "mission-purpose", size: 16, color: "#006769", opacity: 0.24, bottom: "9%", right: "33%", anim: "animate-float-shield-3", delay: "0.9s", rotate: "-6deg" },
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
            <VisionMissionBackgroundIcon
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
      title="Vision & Mission"
      company="IB Cyber Security Private Limited (IBCS)"
      summary="Understand the vision and mission guiding IBCS in developing intelligent, secure, reliable, and purpose-driven software products. Explore our commitment to continuous innovation, advanced technology, responsible software engineering, and building a future-ready product ecosystem for diverse industries and global markets."
      buttonLabel="Explore Vision & Mission"
      onExplore={handleExplore}
      onBack={onBack}
      onHome={onHome}
      features={[
        { label: "7 Strategic Dimensions", dot: "#006769" },
        { label: "77 Strategic Focus Areas", dot: "#14B8A6" },
        { label: "Institutional & Global Impact", dot: "#C54E2C" },
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
    <div className={`relative mb-6 sm:mb-12 pt-2 overflow-x-clip ${className}`}>
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
            {section.keyAreas?.length || 10} Strategic Focus Areas
          </span>
        </div>
      ) : null}
    </div>
  );
}

// ============================================================================
// 7. RETRO PIXEL CARD & 3-POSITION PASSING FLOW COMPONENT
// ============================================================================

const iconPaths = {
  technology: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9zM9 1v3m6-3v3M9 20v3m6-3v3M1 9h3m-3 6h3m16-6h3m-3 6h3" />
    </>
  ),
  vision: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  mission: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
      <path d="m14 10 6-6" />
    </>
  ),
  security: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v2" />
    </>
  ),
  data: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
    </>
  ),
  platform: (
    <>
      <path d="m12 2 9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  api: (
    <>
      <path d="M8 8 4 12l4 4M16 8l4 4-4 4M14 5l-4 14" />
    </>
  ),
  default: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
};

function getAutoIconType(item, idx) {
  if (item.iconType && iconPaths[item.iconType.toLowerCase()]) {
    return item.iconType.toLowerCase();
  }
  const t = (item.title || "").toLowerCase();
  if (t.includes("vision") || t.includes("future") || t.includes("leadership") || t.includes("global") || t.includes("perspective")) return "vision";
  if (t.includes("mission") || t.includes("purpose") || t.includes("goal") || t.includes("objective") || t.includes("excellence")) return "mission";
  if (t.includes("secur") || t.includes("protect") || t.includes("trust") || t.includes("authent") || t.includes("complian") || t.includes("access")) return "security";
  if (t.includes("data") || t.includes("intellig") || t.includes("analyt") || t.includes("ai") || t.includes("inform") || t.includes("research")) return "data";
  if (t.includes("tech") || t.includes("engineer") || t.includes("system") || t.includes("develop") || t.includes("softw") || t.includes("innovat")) return "technology";
  if (t.includes("plat") || t.includes("cloud") || t.includes("infrastruct") || t.includes("scale") || t.includes("deploy") || t.includes("architect")) return "platform";
  if (t.includes("api") || t.includes("connect") || t.includes("integrat") || t.includes("interfac") || t.includes("automat")) return "api";
  if (t.includes("user") || t.includes("peopl") || t.includes("govern") || t.includes("public") || t.includes("law") || t.includes("investigat")) return "people";

  const keys = ["technology", "vision", "mission", "security", "data", "platform", "api", "people"];
  return keys[idx % keys.length];
}

function PixelIcon({ type = "default", className = "" }) {
  const key = String(type).toLowerCase();
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[key] || iconPaths.default}
    </svg>
  );
}

function PixelCorners() {
  const positions = ["top-left", "top-right", "bottom-left", "bottom-right"];
  return positions.map((position) => (
    <div className={`rpc-corner-container ${position}`} key={position} aria-hidden="true">
      <div className="rpc-corner">
        <div className="rpc-first-corner" />
        <div className="rpc-second-corner" />
        <div className="rpc-center-corner" />
        <div className="rpc-inner-center-corner" />
        <div className="rpc-inner-center" />
        <div className="rpc-inner-center-top-right" />
        <div className="rpc-inner-center-bottom-left" />
      </div>
    </div>
  ));
}

/**
 * RetroPixelCardGrid (Left–Center–Right Passing Flow Showcase)
 * Preserves the exact original Retro Pixel Card Design:
 * - Same colors, pixel corners, stepped borders, icons, pulse dots, typography, and styling
 * - 3-position arrangement: Left (preview) -> Center (active) -> Right (preview)
 * - Passing animation sequence: Left -> Center -> Right -> Next content
 */
export function RetroPixelCardGrid({
  items = [],
  className = "",
  ariaLabel = "Information cards",
  autoRotateInterval = 4500,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(null);
  const timerRef = useRef(null);

  const n = items.length;

  // Flow forward: moves next item from Left into Center, Center to Right, Right exits
  const flowNext = useCallback(() => {
    if (n <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % n);
  }, [n]);

  // Flow backward: moves previous item from Right into Center
  const flowPrev = useCallback(() => {
    if (n <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + n) % n);
  }, [n]);

  // Direct index jump
  const goToIndex = (targetIdx) => {
    setCurrentIndex(targetIdx);
  };

  // Continuous auto-rotation with hover pause
  useEffect(() => {
    if (!isPlaying || isHovered || n <= 1) return;

    timerRef.current = setInterval(() => {
      flowNext();
    }, autoRotateInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, flowNext, autoRotateInterval, n]);

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    if (diff < -40) flowNext(); // Swipe left -> advance
    if (diff > 40) flowPrev();  // Swipe right -> previous
    touchStartX.current = null;
  };

  if (!items || items.length === 0) return null;

  // Slot calculation for Left -> Center -> Right progression:
  // slot: 0 = Center (Active), -1 = Left (Incoming Preview), 1 = Right (Outgoing Preview)
  const getSlot = (itemIdx) => {
    let diff = currentIndex - itemIdx;
    while (diff > n / 2) diff -= n;
    while (diff < -n / 2) diff += n;
    return diff;
  };

  return (
    <div
      className={`rpc-flow-showcase ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label={ariaLabel}
    >
      {/* Top Header Bar */}
      <div className="rpc-flow-top-bar">
        <div className="rpc-flow-top-row">
          <div className="rpc-flow-badge">
            <span className="rpc-pulse-dot" />
            <span>Interactive Flow</span>
          </div>
          <div className="rpc-flow-counter">
            {String(currentIndex + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </div>
        </div>

        <div className="rpc-flow-meta-row">
          <div className="rpc-flow-legend" title="Content sequence progression">
            <span>Left</span>
            <span>➔</span>
            <span className="rpc-legend-active">Center</span>
            <span>➔</span>
            <span>Right</span>
          </div>

          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            className="rpc-flow-pill"
            aria-label={isPlaying ? "Pause automatic animation" : "Resume automatic animation"}
          >
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                isPlaying && !isHovered ? "bg-[#14B8A6] animate-pulse" : "bg-amber-500"
              }`}
            />
            <span>{isPlaying && !isHovered ? "Auto-Flowing" : isHovered ? "Paused on Hover" : "Paused"}</span>
          </button>
        </div>
      </div>

      {/* 3-Position Flow Stage Canvas */}
      <div
        className="rpc-flow-stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, idx) => {
          const slot = getSlot(idx);

          let posClass = "pos-hidden";
          let isCenter = false;

          if (slot === 0) {
            posClass = "pos-center";
            isCenter = true;
          } else if (slot === -1) {
            posClass = "pos-left";
          } else if (slot === 1) {
            posClass = "pos-right";
          } else if (slot === -2) {
            posClass = "pos-far-left";
          } else if (slot === 2) {
            posClass = "pos-far-right";
          }

          // Outside active window -> do not render
          if (Math.abs(slot) > 2) {
            return null;
          }

          const iconType = getAutoIconType(item, idx);

          return (
            <div
              key={item.id ?? `${item.title ?? "card"}-${idx}`}
              className={`rpc-flow-slot-wrap ${posClass}`}
              onClick={() => {
                if (slot === -1) flowNext(); // Click Left preview to bring to Center
                if (slot === 1) flowPrev();  // Click Right preview to bring to Center
              }}
              role={isCenter ? "region" : "button"}
              aria-current={isCenter ? "true" : undefined}
              title={
                !isCenter
                  ? slot === -1
                    ? "Click to bring to Center"
                    : "Click to view"
                  : undefined
              }
            >
              {/* EXACT ORIGINAL RETRO PIXEL CARD DESIGN */}
              <article
                className="rpc-pixel-card"
                role="listitem"
                style={{
                  animationDelay: `${(idx % 4) * 0.35}s`,
                  animationPlayState: isCenter && !isHovered ? "running" : "paused",
                }}
              >
                <PixelCorners />
                <div className="rpc-card-content">
                  <div className="rpc-card-heading-row">
                    <div className="rpc-icon-box">
                      <PixelIcon type={iconType} className="rpc-card-icon" />
                    </div>
                    <div className="rpc-card-title-wrap">
                      <div className="rpc-title-line">
                        <span className="rpc-pulse-dot" aria-hidden="true" />
                        <h3 className="rpc-card-title">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                  {item.description && (
                    <p className="rpc-card-description">{item.description}</p>
                  )}
                </div>
              </article>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls Bar */}
      <div className="rpc-flow-controls">
        <button
          type="button"
          onClick={flowPrev}
          className="rpc-flow-btn"
          aria-label="Previous card"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Clickable Pagination Dots */}
        <div className="rpc-flow-dots" role="tablist" aria-label="Card Navigation">
          {items.map((_, dotIdx) => (
            <button
              key={`rpc-dot-${dotIdx}`}
              type="button"
              onClick={() => goToIndex(dotIdx)}
              className={`rpc-flow-dot ${dotIdx === currentIndex ? "is-active" : ""}`}
              aria-label={`Go to item ${dotIdx + 1}`}
              aria-selected={dotIdx === currentIndex}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={flowNext}
          className="rpc-flow-btn"
          aria-label="Next card"
        >
          <span className="hidden sm:inline">Next</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// 8. SECTION ITEM (RETRO PIXEL CARD DESIGN FOR ALL 7 SECTIONS)
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
      className="relative py-8 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F4FCFB] via-white to-[#F0FBFA] border-b border-[#D0ECE9] scroll-mt-20 overflow-hidden"
    >
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center px-2.5 sm:px-4">
        {/* Section Header with original title, description, and number */}
        <SectionHeader section={section} searchQuery={searchQuery} showKeyAreasBar={false} />
        
        {/* Retro Pixel Card Left–Center–Right Passing Flow Showcase */}
        <div className="w-full mt-4 sm:mt-6">
          <RetroPixelCardGrid
            items={section.keyAreas}
            ariaLabel={`${section.title} Focus Areas`}
          />
        </div>
      </div>
    </section>
  );
}

const SECTION_CONFIGS = [
  { id: "section-01", layout: "mobile-left", subheading: "Explore Vision" },
  { id: "section-02", layout: "mobile-right", subheading: "Explore Mission" },
  { id: "section-03", layout: "mobile-left", subheading: "Explore Product Innovation Mission" },
  { id: "section-04", layout: "mobile-right", subheading: "Explore Security & Trust" },
  { id: "section-05", layout: "mobile-left", subheading: "Explore Government & Public-Impact Vision" },
  { id: "section-06", layout: "mobile-right", subheading: "Explore Global & Future Direction" },
  { id: "section-07", layout: "mobile-left", subheading: "Explore Core Vision & Mission Principles" },
];

// ============================================================================
// 9. COMPLETE VISION & MISSION PAGE COMPONENT
// ============================================================================

export default function Visionandmission({ onClose }) {
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

        {/* 7 Vision & Mission Sections with Alternating Layouts */}
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

export const ProductRoadmap = Visionandmission;
export const VisionMission = Visionandmission;
export const VisionMissionPage = Visionandmission;

