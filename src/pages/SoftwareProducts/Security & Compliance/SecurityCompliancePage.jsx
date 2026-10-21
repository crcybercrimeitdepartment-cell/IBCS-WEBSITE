import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import { technologySections } from './SecurityCompliancePageData';

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

/* =========================================================================
   ULTRA-SMOOTH KINETIC TYPOGRAPHY, ICON & CARD BOX ANIMATIONS
   ========================================================================= */
@keyframes smoothContentSlideNext {
  0% {
    opacity: 0;
    transform: translate3d(22px, 0, 0) scale(0.985);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

@keyframes smoothContentSlidePrev {
  0% {
    opacity: 0;
    transform: translate3d(-22px, 0, 0) scale(0.985);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

@keyframes smoothIconFloatPop {
  0% {
    opacity: 0.3;
    transform: scale(0.86) rotate(-5deg);
  }
  60% {
    transform: scale(1.05) rotate(1.5deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

@keyframes smoothBadgeSlide {
  0% {
    opacity: 0;
    transform: translate3d(0, -6px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes smoothTitleSlideNext {
  0% {
    opacity: 0;
    transform: translate3d(18px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes smoothTitleSlidePrev {
  0% {
    opacity: 0;
    transform: translate3d(-18px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes laserUnderlineSweep {
  0% {
    opacity: 0;
    transform: scaleX(0.25);
    transform-origin: left;
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
    transform-origin: left;
  }
}

@keyframes smoothDescCascade {
  0% {
    opacity: 0;
    transform: translate3d(0, 8px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.animate-smooth-content-next {
  animation: smoothContentSlideNext 0.44s cubic-bezier(0.22, 1, 0.36, 1) both;
  will-change: transform, opacity;
}

.animate-smooth-content-prev {
  animation: smoothContentSlidePrev 0.44s cubic-bezier(0.22, 1, 0.36, 1) both;
  will-change: transform, opacity;
}

.animate-icon-smooth-pop {
  animation: smoothIconFloatPop 0.46s cubic-bezier(0.34, 1.35, 0.64, 1) both;
  will-change: transform, opacity;
}

.animate-badge-slide {
  animation: smoothBadgeSlide 0.38s cubic-bezier(0.22, 1, 0.36, 1) both;
  will-change: transform, opacity;
}

.animate-title-next {
  animation: smoothTitleSlideNext 0.42s cubic-bezier(0.22, 1, 0.36, 1) 0.02s both;
  will-change: transform, opacity;
}

.animate-title-prev {
  animation: smoothTitleSlidePrev 0.42s cubic-bezier(0.22, 1, 0.36, 1) 0.02s both;
  will-change: transform, opacity;
}

.animate-laser-sweep {
  animation: laserUnderlineSweep 0.44s cubic-bezier(0.22, 1, 0.36, 1) 0.04s both;
  will-change: transform, opacity;
}

.animate-desc-cascade {
  animation: smoothDescCascade 0.42s cubic-bezier(0.22, 1, 0.36, 1) 0.06s both;
  will-change: transform, opacity;
}

/* Backward compatibility aliases */
.animate-word-next { animation: smoothContentSlideNext 0.44s cubic-bezier(0.22, 1, 0.36, 1) both; }
.animate-word-prev { animation: smoothContentSlidePrev 0.44s cubic-bezier(0.22, 1, 0.36, 1) both; }
.animate-icon-pop { animation: smoothIconFloatPop 0.46s cubic-bezier(0.34, 1.35, 0.64, 1) both; }
.animate-desc-fade { animation: smoothDescCascade 0.42s cubic-bezier(0.22, 1, 0.36, 1) 0.06s both; }
.animate-swipe-go-next { animation: smoothContentSlideNext 0.44s cubic-bezier(0.22, 1, 0.36, 1) both; }
.animate-swipe-come-next { animation: smoothContentSlideNext 0.44s cubic-bezier(0.22, 1, 0.36, 1) both; }
.animate-swipe-go-prev { animation: smoothContentSlidePrev 0.44s cubic-bezier(0.22, 1, 0.36, 1) both; }
.animate-swipe-come-prev { animation: smoothContentSlidePrev 0.44s cubic-bezier(0.22, 1, 0.36, 1) both; }
.animate-text-slide-next { animation: smoothContentSlideNext 0.44s cubic-bezier(0.22, 1, 0.36, 1) both; }
.animate-text-slide-prev { animation: smoothContentSlidePrev 0.44s cubic-bezier(0.22, 1, 0.36, 1) both; }

/* Card Box Physical Micro-Pulse Feedback on transition */
@keyframes cardBoxFeedback {
  0% {
    box-shadow: 0 20px 50px -15px rgba(15, 45, 90, 0.12), 0 0 12px rgba(56, 189, 248, 0.06);
    transform: scale(1);
  }
  45% {
    box-shadow: 0 26px 65px -12px rgba(37, 99, 235, 0.18), 0 0 28px rgba(56, 189, 248, 0.32);
    transform: scale(1.005);
  }
  100% {
    box-shadow: 0 20px 50px -15px rgba(15, 45, 90, 0.12), 0 0 12px rgba(56, 189, 248, 0.06);
    transform: scale(1);
  }
}

.card-box-feedback {
  animation: cardBoxFeedback 0.42s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Glass Shimmer Reflection Sweep across card */
@keyframes cardShimmerSweep {
  0% {
    transform: translateX(-160%) skewX(-20deg);
    opacity: 0;
  }
  15% {
    opacity: 0.55;
  }
  45% {
    opacity: 0.8;
  }
  75% {
    opacity: 0.55;
  }
  100% {
    transform: translateX(280%) skewX(-20deg);
    opacity: 0;
  }
}

.animate-shimmer-sweep {
  animation: cardShimmerSweep 7s ease-in-out infinite;
}

/* Card Receiving Pointer Indicator Pulse */
@keyframes receivingGlowPulse {
  0%, 100% {
    opacity: 0.75;
    filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.7));
  }
  50% {
    opacity: 1;
    filter: drop-shadow(0 0 16px rgba(56, 189, 248, 1));
  }
}

.animate-receiving-pulse {
  animation: receivingGlowPulse 2.8s ease-in-out infinite;
}

/* Hover Frame & Shadows */
.star-hover-frame {
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.35s ease;
}

.star-hover-frame:hover {
  filter: drop-shadow(0 0 32px rgba(56, 189, 248, 0.45));
}

/* Glassmorphism Panel Hover & Shadow */
.glass-showcase-panel {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1.5px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 24px 52px -12px rgba(37, 99, 235, 0.14),
              0 0 35px rgba(56, 189, 248, 0.16);
  border-radius: 32px;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-showcase-panel:hover {
  box-shadow: 0 28px 65px -10px rgba(37, 99, 235, 0.2),
              0 0 48px rgba(56, 189, 248, 0.24);
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

/* Circular Security Dial Styling */
.dial-frame {
  filter: drop-shadow(0 25px 45px rgba(15, 45, 90, 0.22));
}

@keyframes dialNeonPulse {
  0%, 100% {
    opacity: 0.9;
    filter: drop-shadow(0 0 6px rgba(0, 191, 255, 0.8));
  }
  50% {
    opacity: 1;
    filter: drop-shadow(0 0 14px rgba(56, 189, 248, 1));
  }
}

.animate-dial-neon {
  animation: dialNeonPulse 3s ease-in-out infinite;
}

.glass-dial-panel {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1.5px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 24px 60px rgba(15, 45, 90, 0.08), 0 4px 16px rgba(37, 99, 235, 0.06);
}

@media (prefers-reduced-motion: reduce) {
  .animate-dial-neon,
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
      title="Security & Compliance"
      company="IB Cyber Security Private Limited (IBCS)"
      summary="Discover the security principles and compliance-oriented practices considered throughout the IBCS software product lifecycle. Explore secure software development, identity and access management, data protection, privacy, infrastructure security, vulnerability management, security monitoring, risk assessment, and applicable legal and regulatory requirements."
      buttonLabel="Explore Security & Compliance"
      onExplore={handleExplore}
      onBack={onBack}
      onHome={onHome}
      features={[
        { label: "12 Security Dimensions", dot: "#006769" },
        { label: "144 Security Standards", dot: "#14B8A6" },
        { label: "Enterprise & Institutional Grade", dot: "#C54E2C" },
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
    case "scale":
    case "justice":
      return (
        <>
          <path d="M12 3v18M8 21h8M5 7h14M5 7l-3 7h6l-3-7zM19 7l-3 7h6l-3-7z" strokeWidth="1.8" />
          <circle cx="12" cy="5" r="1.5" fill={color} />
        </>
      );
    case "bulb":
    case "idea":
      return (
        <>
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.6 1.4 4.8 3.5 6h7c2.1-1.2 3.5-3.4 3.5-6a7 7 0 0 0-7-7z" fill={color} fillOpacity="0.15" strokeWidth="1.8" />
          <line x1="12" y1="6" x2="12" y2="10" strokeWidth="1.8" />
        </>
      );
    case "brain":
    case "intelligence":
      return (
        <>
          <path d="M9.5 4a3.5 3.5 0 0 0-3.5 3.5c0 .3.05.6.14.88A4 4 0 0 0 3 12a4 4 0 0 0 1.5 3.14A3.5 3.5 0 0 0 8 19h1.5M14.5 4a3.5 3.5 0 0 1 3.5 3.5c0 .3-.05.6-.14.88A4 4 0 0 1 21 12a4 4 0 0 1-1.5 3.14A3.5 3.5 0 0 1 16 19h-1.5" strokeWidth="1.8" />
          <path d="M12 4v16M9 12h3M12 15h3M9 8h3M12 11h3" strokeWidth="1.6" />
        </>
      );
    case "file-check":
    case "compliance":
      return (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill={color} fillOpacity="0.1" strokeWidth="1.8" />
          <polyline points="14 2 14 8 20 8" strokeWidth="1.8" />
          <path d="m9 15 2 2 4-4" strokeWidth="2" />
        </>
      );
    case "bug":
    case "vulnerability":
      return (
        <>
          <rect x="6" y="8" width="12" height="12" rx="6" fill={color} fillOpacity="0.15" strokeWidth="1.8" />
          <path d="m19 11-4-1M5 11l4-1M19 17l-4 1M5 17l4 1M12 5v3M9 4.2l1.5 2.3M15 4.2 13.5 6.5" strokeWidth="1.8" />
        </>
      );
    case "activity":
    case "monitoring":
      return (
        <>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeWidth="2" />
        </>
      );
    case "award":
    case "certificate":
    case "standard":
      return (
        <>
          <circle cx="12" cy="8" r="6" fill={color} fillOpacity="0.2" />
          <circle cx="12" cy="8" r="3" />
          <path d="m8.2 13.5-2.2 7.5 6-3 6 3-2.2-7.5" strokeWidth="1.8" />
        </>
      );
    case "globe":
    case "international":
    case "gdpr":
      return (
        <>
          <circle cx="12" cy="12" r="9.5" fill={color} fillOpacity="0.1" />
          <line x1="2.5" y1="12" x2="21.5" y2="12" strokeWidth="1.5" />
          <path d="M12 2.5a14 14 0 0 0 0 19M12 2.5a14 14 0 0 1 0 19" strokeWidth="1.5" />
        </>
      );
    case "key":
    case "transit":
      return (
        <>
          <circle cx="7.5" cy="15.5" r="4.5" fill={color} fillOpacity="0.15" />
          <path d="m11 12 8-8M17 6l2 2M14 9l2 2" strokeWidth="2" />
        </>
      );
    case "target":
    case "vapt":
    case "crosshair":
      return (
        <>
          <circle cx="12" cy="12" r="9.5" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="4" fill={color} fillOpacity="0.25" />
          <line x1="12" y1="2" x2="12" y2="6" strokeWidth="2" />
          <line x1="12" y1="18" x2="12" y2="22" strokeWidth="2" />
          <line x1="2" y1="12" x2="6" y2="12" strokeWidth="2" />
          <line x1="18" y1="12" x2="22" y2="12" strokeWidth="2" />
        </>
      );
    case "code":
    case "software":
    case "dev":
      return (
        <>
          <polyline points="16 18 22 12 16 6" strokeWidth="2" />
          <polyline points="8 6 2 12 8 18" strokeWidth="2" />
          <line x1="14" y1="4" x2="10" y2="20" strokeWidth="1.8" />
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

function getShowcaseIconType(item, idx = 0) {
  if (!item) return "shield";
  if (item.iconType) return item.iconType.toLowerCase();
  const title = String(item.title || "").toLowerCase();

  // 1. Precise Title Priority Matching (Ensures every single data item gets its own accurate, distinct icon!)
  if (title.includes("cert-in") || title.includes("defense")) return "shield";
  if (title.includes("personal data") || title.includes("biometric") || title.includes("identity") || title.includes("authentication") || title.includes("mfa") || title.includes("credential")) return "fingerprint";
  if (title.includes("it act") || title.includes("act, 2000") || title.includes("legal") || title.includes("justice")) return "scale";
  if (title.includes("rule") || title.includes("iso 9001") || title.includes("checklist")) return "file-check";
  if (title.includes("gdpr") || title.includes("international") || title.includes("global") || title.includes("overseas")) return "globe";
  if (title.includes("government") || title.includes("institution") || title.includes("public sector")) return "government";
  if (title.includes("localiz") || title.includes("database") || title.includes("storage") || title.includes("backup") || title.includes("retention") || title.includes("soc 2")) return "database";
  if (title.includes("sector") || title.includes("industry") || title.includes("business") || title.includes("enterprise")) return "briefcase";
  if (title.includes("privac") || title.includes("confidential") || title.includes("encryption at rest") || title.includes("iso/iec 27701")) return "lock";
  if (title.includes("transit") || title.includes("key management") || title.includes("authorization") || title.includes("least-privilege")) return "key";
  if (title.includes("change management") || title.includes("lifecycle") || title.includes("sdlc") || title.includes("workflow") || title.includes("process") || title.includes("automation")) return "gear";
  if (title.includes("document") || title.includes("record") || title.includes("policy") || title.includes("dossier")) return "document";
  if (title.includes("iso/iec 27001") || title.includes("standard") || title.includes("award") || title.includes("certif")) return "award";
  if (title.includes("vulnerability") || title.includes("owasp") || title.includes("threat") || title.includes("flaw")) return "bug";
  if (title.includes("penetration") || title.includes("target") || title.includes("attack surface") || title.includes("vapt")) return "target";
  if (title.includes("code review") || title.includes("audit") || title.includes("assess") || title.includes("investigat") || title.includes("inspect")) return "search";
  if (title.includes("monitoring") || title.includes("incident") || title.includes("event") || title.includes("siem") || title.includes("ids") || title.includes("alert") || title.includes("preparedness") || title.includes("recovery")) return "activity";
  if (title.includes("improve") || title.includes("metric") || title.includes("chart") || title.includes("analytics") || title.includes("governance") || title.includes("trend")) return "chart";
  if (title.includes("api") || title.includes("network") || title.includes("endpoint") || title.includes("integration")) return "network";
  if (title.includes("cloud") || title.includes("infrastructure") || title.includes("server") || title.includes("redundancy") || title.includes("availability")) return "cloud";
  if (title.includes("coding") || title.includes("architecture") || title.includes("software") || title.includes("application")) return "code";
  if (title.includes("police") || title.includes("enforcement") || title.includes("containment")) return "police";
  if (title.includes("design") || title.includes("concept") || title.includes("innovat")) return "bulb";

  // 2. High-entropy diversified palette cycle so no two adjacent sectors ever look identical
  const diversePalette = [
    "shield", "scale", "gear", "database", "fingerprint", "government",
    "lock", "briefcase", "activity", "document", "award", "chart"
  ];
  return diversePalette[idx % diversePalette.length];
}

/**
 * 7. CIRCULAR METALLIC SECURITY DIAL COMPONENT
 * Primary visual mechanism (replaces the star visual, matching reference image):
 * - Machined chrome outer bezel with specular lighting highlights
 * - 4 heavy mechanical locking brackets/clamps at 12, 3, 6, 9 o'clock
 * - Top bracket features illuminated cyan chevron pointing down to active sector
 * - Right bracket features illuminated cyan pointer pointing to information card
 * - 8 spherical stainless steel rivets / bolts with specular highlights
 * - Outer calibration track with 60 precision tick marks and caliber notation
 * - Deep navy radial sector dial surface with luminous active sector
 * - Central concentric mechanism: knurled gear teeth ring, neon electric-blue ring, chrome chamfer, and sapphire/navy core
 * - Pure SVG crisp white icons that counter-rotate to stay upright
 * - Active item icon centered in core with 3D drop shadow
 */
export function SecurityDialMetallic({
  activeItem,
  items = [],
  step = 0,
  targetIndex = 0,
  displayedIndex = 0,
  onSelectIndex,
  activeIconType,
  isReverseLayout = false,
  isMobile = false,
  onMouseEnter,
  onMouseLeave,
}) {
  const n = items.length > 0 ? items.length : 12;
  const deltaAngle = 360 / n;

  // The active sector originates at midAngle = -90 + step * deltaAngle.
  // Rotate the dial face so the active sector points directly at the active card:
  // - Mobile (<1024px): Card is positioned on BOTTOM of the dial -> target +90° (6 o'clock, DOWN)
  // - Desktop Standard (mobile-left): Dial on LEFT, Card on RIGHT -> target 0° (3 o'clock, RIGHT)
  // - Desktop Reverse (mobile-right): Card on LEFT, Dial on RIGHT -> target 180° (9 o'clock, LEFT)
  const targetCardAngle = isMobile ? 90 : isReverseLayout ? 180 : 0;
  const effectiveRotation = (targetCardAngle + 90) - step * deltaAngle;

  // 8 Chrome Spherical Rivets around the outer bezel at radius 224
  const rivetAngles = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];

  // 60 Precision Calibration Tick Marks on Track (radius 186 to 198)
  const tickMarks = Array.from({ length: 60 }, (_, i) => {
    const angleRad = (i * 6 * Math.PI) / 180;
    const isMajor = i % 5 === 0;
    const rStart = isMajor ? 186 : 189;
    const rEnd = isMajor ? 198 : 195;
    return {
      x1: 270 + rStart * Math.cos(angleRad),
      y1: 270 + rStart * Math.sin(angleRad),
      x2: 270 + rEnd * Math.cos(angleRad),
      y2: 270 + rEnd * Math.sin(angleRad),
      isMajor,
    };
  });

  // Technical Caliber Notations etched on track
  const trackLabels = [
    { text: "01", angle: -90 },
    { text: "02 03", angle: -60 },
    { text: "CO 35", angle: -20 },
    { text: "60", angle: 20 },
    { text: "12 90", angle: 60 },
    { text: "06 1101", angle: 90 },
    { text: "07", angle: 120 },
    { text: "150 80", angle: 155 },
    { text: "09 17", angle: 190 },
    { text: "60", angle: 220 },
    { text: "11", angle: 250 },
  ];

  // 48 Knurled teeth in the center hub mechanism
  const knurledTeeth = Array.from({ length: 48 }, (_, i) => {
    const angleRad = (i * 7.5 * Math.PI) / 180;
    return {
      x1: 270 + 86 * Math.cos(angleRad),
      y1: 270 + 86 * Math.sin(angleRad),
      x2: 270 + 98 * Math.cos(angleRad),
      y2: 270 + 98 * Math.sin(angleRad),
    };
  });

  // Calculate sector geometric paths
  const sectors = items.map((item, idx) => {
    const midAngle = -90 + idx * deltaAngle;
    const startAngle = midAngle - deltaAngle / 2;
    const endAngle = midAngle + deltaAngle / 2;

    const radStart = (startAngle * Math.PI) / 180;
    const radEnd = (endAngle * Math.PI) / 180;
    const radMid = (midAngle * Math.PI) / 180;

    const Rout = 184;
    const Rin = 98;

    const x1 = 270 + Rout * Math.cos(radStart);
    const y1 = 270 + Rout * Math.sin(radStart);
    const x2 = 270 + Rout * Math.cos(radEnd);
    const y2 = 270 + Rout * Math.sin(radEnd);

    const x3 = 270 + Rin * Math.cos(radEnd);
    const y3 = 270 + Rin * Math.sin(radEnd);
    const x4 = 270 + Rin * Math.cos(radStart);
    const y4 = 270 + Rin * Math.sin(radStart);

    const pathD = `M ${x1} ${y1} A ${Rout} ${Rout} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${Rin} ${Rin} 0 0 0 ${x4} ${y4} Z`;

    const iconX = 270 + 138 * Math.cos(radMid);
    const iconY = 270 + 138 * Math.sin(radMid);

    const numX = 270 + 168 * Math.cos(radMid);
    const numY = 270 + 168 * Math.sin(radMid);

    const iconType = getShowcaseIconType(item, idx);
    const isActive = idx === targetIndex;

    return {
      idx,
      item,
      pathD,
      iconX,
      iconY,
      numX,
      numY,
      iconType,
      isActive,
      numberLabel: String(idx + 1).padStart(2, "0"),
    };
  });

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center select-none py-2 lg:py-4 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <svg
        viewBox="0 0 540 540"
        className="w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[500px] xl:max-w-[530px] mx-auto overflow-visible drop-shadow-2xl dial-frame"
        aria-hidden="true"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ pointerEvents: "auto" }}
      >
        {/* Full circular hit-test circle: Guarantees hovering anywhere on the lock design reliably pauses auto-rotation */}
        <circle cx="270" cy="270" r="270" fill="transparent" style={{ pointerEvents: "all" }} />
        <defs>
          {/* Metallic Chrome Bezel Multi-stop Gradient */}
          <linearGradient id="metallicChromeBezel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="12%" stopColor="#E2E8F0" />
            <stop offset="28%" stopColor="#94A3B8" />
            <stop offset="45%" stopColor="#475569" />
            <stop offset="60%" stopColor="#1E293B" />
            <stop offset="78%" stopColor="#64748B" />
            <stop offset="92%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>

          {/* Machined Clamp Chrome Gradient */}
          <linearGradient id="clampChromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="30%" stopColor="#CBD5E1" />
            <stop offset="60%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          {/* Deep Navy Dial Base Gradient */}
          <radialGradient id="deepNavyDialGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0B2648" />
            <stop offset="65%" stopColor="#061A34" />
            <stop offset="100%" stopColor="#041224" />
          </radialGradient>

          {/* Active Sector Electric-Blue Neon Glow Gradient */}
          <radialGradient id="activeSectorNeonGrad" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.75)" />
            <stop offset="40%" stopColor="rgba(37, 99, 235, 0.65)" />
            <stop offset="85%" stopColor="rgba(14, 56, 140, 0.5)" />
            <stop offset="100%" stopColor="rgba(6, 26, 52, 0.2)" />
          </radialGradient>

          {/* Concentric Inner Core Royal Navy Gradient */}
          <radialGradient id="coreDeepNavyGrad" cx="40%" cy="32%" r="72%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="35%" stopColor="#2563EB" />
            <stop offset="70%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#0F2856" />
          </radialGradient>

          {/* Chrome Rivet Sphere Gradient */}
          <radialGradient id="rivetSphereGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#CBD5E1" />
            <stop offset="80%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1E293B" />
          </radialGradient>

          {/* Titanium Knurled Ring Gradient */}
          <linearGradient id="titaniumRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="50%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          {/* Neon Cyan Glow Filter */}
          <filter id="neonCyanGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Soft Dial Drop Shadow */}
          <filter id="dialDropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="24" stdDeviation="22" floodColor="#0F3870" floodOpacity="0.35" />
          </filter>

          {/* Rivet Soft Shadow */}
          <filter id="rivetShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* 1. Ambient Background Halo & Glowing Edge */}
        <g filter="url(#dialDropShadow)">
          <circle cx="270" cy="270" r="264" fill="none" stroke="rgba(56, 189, 248, 0.22)" strokeWidth="2.5" filter="url(#neonCyanGlow)" />
          <circle cx="270" cy="270" r="255" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.2" />

          {/* 2. Heavy Machined Chrome Outer Bezel Ring (Rout=246, Rin=202) */}
          <path
            d="M 270 24 A 246 246 0 1 0 270 516 A 246 246 0 1 0 270 24 Z M 270 68 A 202 202 0 1 1 270 472 A 202 202 0 1 1 270 68 Z"
            fill="url(#metallicChromeBezel)"
            stroke="#334155"
            strokeWidth="1.2"
          />
          {/* Outer Chrome Highlight Rim */}
          <circle cx="270" cy="270" r="246" fill="none" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.85" />
          {/* Inner Chrome Bevel Edge */}
          <circle cx="270" cy="270" r="202" fill="none" stroke="#1E293B" strokeWidth="2" />
        </g>

        {/* 3. 8 Stainless Steel Spherical Rivets on the Bezel Ring */}
        {rivetAngles.map((phi, rIdx) => {
          const rRad = (phi * Math.PI) / 180;
          const rx = 270 + 224 * Math.cos(rRad);
          const ry = 270 + 224 * Math.sin(rRad);
          return (
            <g key={`rivet-${rIdx}`}>
              <circle cx={rx} cy={ry} r="9.5" fill="#1E293B" stroke="#0F172A" strokeWidth="0.8" />
              <circle
                cx={rx}
                cy={ry}
                r="8.2"
                fill="url(#rivetSphereGrad)"
                stroke="#64748B"
                strokeWidth="0.8"
                filter="url(#rivetShadow)"
              />
              <circle cx={rx - 2.5} cy={ry - 2.5} r="2.2" fill="#FFFFFF" opacity="0.9" filter="blur(0.4px)" />
            </g>
          );
        })}

        {/* 4. Outer Calibration & Tick Mark Track (R=202 down to R=184) */}
        <circle cx="270" cy="270" r="202" fill="#0A1D36" stroke="#475569" strokeWidth="1" />
        <circle cx="270" cy="270" r="184" fill="none" stroke="#334155" strokeWidth="1.5" />

        {/* 60 Precision Radial Tick Marks */}
        {tickMarks.map((tm, tIdx) => (
          <line
            key={`tick-${tIdx}`}
            x1={tm.x1}
            y1={tm.y1}
            x2={tm.x2}
            y2={tm.y2}
            stroke={tm.isMajor ? "#94A3B8" : "rgba(148, 163, 184, 0.45)"}
            strokeWidth={tm.isMajor ? "1.6" : "0.9"}
            strokeLinecap="round"
          />
        ))}

        {/* Caliber & Degree Notations */}
        {trackLabels.map((lbl, lIdx) => {
          const lRad = (lbl.angle * Math.PI) / 180;
          const lx = 270 + 192 * Math.cos(lRad);
          const ly = 270 + 192 * Math.sin(lRad);
          return (
            <text
              key={`track-lbl-${lIdx}`}
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="central"
              fill="rgba(148, 163, 184, 0.85)"
              fontSize="7"
              fontWeight="700"
              fontFamily="JetBrains Mono, monospace"
            >
              {lbl.text}
            </text>
          );
        })}

        {/* 5. Deep Navy Dial Face & Rotating Radial Sectors */}
        <g
          style={{
            transform: `rotate(${effectiveRotation}deg)`,
            transformOrigin: "270px 270px",
            transition: "transform 0.45s cubic-bezier(0.34, 1.25, 0.64, 1)",
          }}
        >
          {/* Base Navy Dial Circle */}
          <circle cx="270" cy="270" r="184" fill="url(#deepNavyDialGrad)" />

          {/* Render All N Radial Sectors */}
          {sectors.map((sec) => (
            <g
              key={`dial-sector-${sec.idx}`}
              className="cursor-pointer transition-opacity duration-200"
              onClick={() => onSelectIndex(sec.idx)}
            >
              {/* Sector Wedge Path */}
              <path
                d={sec.pathD}
                fill={sec.isActive ? "url(#activeSectorNeonGrad)" : "transparent"}
                stroke={sec.isActive ? "#38BDF8" : "rgba(148, 163, 184, 0.28)"}
                strokeWidth={sec.isActive ? "2.4" : "1.2"}
                filter={sec.isActive ? "url(#neonCyanGlow)" : undefined}
                className="transition-all duration-300"
              />

              {/* Sector Outer Number (Counter-rotated to stay upright) */}
              <text
                x={sec.numX}
                y={sec.numY}
                textAnchor="middle"
                dominantBaseline="central"
                transform={`rotate(${-effectiveRotation} ${sec.numX} ${sec.numY})`}
                fill={sec.isActive ? "#38BDF8" : "rgba(203, 213, 225, 0.75)"}
                fontSize={sec.isActive ? "11.5" : "10"}
                fontWeight={sec.isActive ? "800" : "600"}
                fontFamily="JetBrains Mono, monospace"
                style={{
                  filter: sec.isActive ? "drop-shadow(0 0 6px rgba(56, 189, 248, 0.8))" : "none",
                }}
              >
                {sec.numberLabel}
              </text>

              {/* Sector Icon (Centered inside wedge & counter-rotated to stay upright) */}
              <g transform={`translate(${sec.iconX}, ${sec.iconY}) rotate(${-effectiveRotation})`}>
                <g
                  transform="translate(-13, -13)"
                  style={{
                    filter: sec.isActive ? "drop-shadow(0 0 8px rgba(56, 189, 248, 0.9))" : "drop-shadow(0 1px 2px rgba(0,0,0,0.5))",
                  }}
                >
                  <RenderSvgIcon
                    type={sec.iconType}
                    size={26}
                    color={sec.isActive ? "#FFFFFF" : "rgba(226, 232, 240, 0.88)"}
                    strokeWidth={sec.isActive ? 2.2 : 1.8}
                  />
                </g>
              </g>
            </g>
          ))}
        </g>

        {/* 6. Concentric Inner Hub Mechanism (Fixed Center, Core rotates gracefully) */}
        {/* Knurled Titanium Gear Ring (r=98) */}
        <circle cx="270" cy="270" r="98" fill="url(#titaniumRingGrad)" stroke="#475569" strokeWidth="1.5" />

        {/* 48 Precision Knurled Teeth */}
        {knurledTeeth.map((kt, kIdx) => (
          <line
            key={`knurl-${kIdx}`}
            x1={kt.x1}
            y1={kt.y1}
            x2={kt.x2}
            y2={kt.y2}
            stroke="#334155"
            strokeWidth="1.6"
          />
        ))}

        {/* Stepped Brushed Steel Chamfer Ring (r=84) */}
        <circle cx="270" cy="270" r="84" fill="#1E293B" stroke="#CBD5E1" strokeWidth="1.2" />

        {/* Electric-Blue Neon Halo Ring (r=74) */}
        <circle
          cx="270"
          cy="270"
          r="74"
          fill="none"
          stroke="#00BFFF"
          strokeWidth="3.2"
          filter="url(#neonCyanGlow)"
          className="animate-dial-neon"
        />
        <circle cx="270" cy="270" r="74" fill="none" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.85" />

        {/* Inner Chamfered Bezel (r=70 down to r=58) */}
        <circle cx="270" cy="270" r="70" fill="url(#metallicChromeBezel)" stroke="#475569" strokeWidth="1.2" />
        <circle cx="270" cy="270" r="62" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3 4" />

        {/* Central Deep Sapphire/Navy Core Dome (r=58) */}
        <circle
          cx="270"
          cy="270"
          r="58"
          fill="url(#coreDeepNavyGrad)"
          stroke="#60A5FA"
          strokeWidth="2.4"
          filter="url(#dialDropShadow)"
        />

        {/* 3D Glass Specular Reflection Crescent */}
        <path
          d="M 220 258 A 58 58 0 0 1 320 258 A 58 24 0 0 0 220 258 Z"
          fill="rgba(255, 255, 255, 0.42)"
        />

        {/* Active Item's Icon in Center of Core */}
        <g
          key={`center-core-icon-${displayedIndex}`}
          transform="translate(270, 270)"
          className="transition-transform duration-300"
        >
          <g
            transform="translate(-18, -18) scale(1.5)"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.6))" }}
          >
            {getIconPaths(activeIconType, "#FFFFFF")}
          </g>
        </g>

        {/* 7. Four Heavy Machined Locking Clamps / Brackets (at 12, 3, 6, 9 o'clock) */}
        
        {/* Top Clamp (12 o'clock) */}
        <g>
          <rect x="246" y="10" width="48" height="36" rx="4" fill="url(#clampChromeGrad)" stroke="#64748B" strokeWidth="1.2" />
          <line x1="252" y1="20" x2="288" y2="20" stroke="#334155" strokeWidth="1.2" />
          <line x1="252" y1="26" x2="288" y2="26" stroke="#334155" strokeWidth="1.2" />
        </g>

        {/* Right Clamp (3 o'clock) */}
        <g>
          <rect x="494" y="246" width="36" height="48" rx="4" fill="url(#clampChromeGrad)" stroke="#64748B" strokeWidth="1.2" />
          <line x1="504" y1="252" x2="504" y2="288" stroke="#334155" strokeWidth="1.2" />
          <line x1="510" y1="252" x2="510" y2="288" stroke="#334155" strokeWidth="1.2" />
          {/* Active pointer & chevron on desktop when card is on the right */}
          {!isMobile && !isReverseLayout && (
            <>
              {/* Outward pointer pointing RIGHT towards the right card */}
              <polygon points="537,270 521,260 521,280" fill="#38BDF8" filter="url(#neonCyanGlow)" />
              <polygon points="534,270 523,262 523,278" fill="#FFFFFF" opacity="0.9" />
              {/* Inward chevron pointing LEFT into active sector */}
              <polygon points="495,270 508,261 508,279" fill="#38BDF8" filter="url(#neonCyanGlow)" />
              <polygon points="497,270 506,263 506,277" fill="#FFFFFF" opacity="0.9" />
            </>
          )}
        </g>

        {/* Bottom Clamp (6 o'clock) */}
        <g>
          <rect x="246" y="494" width="48" height="36" rx="4" fill="url(#clampChromeGrad)" stroke="#64748B" strokeWidth="1.2" />
          <line x1="252" y1="504" x2="288" y2="504" stroke="#334155" strokeWidth="1.2" />
          <line x1="252" y1="510" x2="288" y2="510" stroke="#334155" strokeWidth="1.2" />
          {/* Active pointer & chevron on mobile when card is positioned on bottom */}
          {isMobile && (
            <>
              {/* Outward pointer pointing DOWN towards the bottom card */}
              <polygon points="270,537 260,521 280,521" fill="#38BDF8" filter="url(#neonCyanGlow)" />
              <polygon points="270,534 262,523 278,523" fill="#FFFFFF" opacity="0.9" />
              {/* Inward chevron pointing UP into active sector */}
              <polygon points="270,495 261,508 279,508" fill="#38BDF8" filter="url(#neonCyanGlow)" />
              <polygon points="270,497 263,506 277,506" fill="#FFFFFF" opacity="0.9" />
            </>
          )}
        </g>

        {/* Left Clamp (9 o'clock) */}
        <g>
          <rect x="10" y="246" width="36" height="48" rx="4" fill="url(#clampChromeGrad)" stroke="#64748B" strokeWidth="1.2" />
          <line x1="20" y1="252" x2="20" y2="288" stroke="#334155" strokeWidth="1.2" />
          <line x1="26" y1="252" x2="26" y2="288" stroke="#334155" strokeWidth="1.2" />
          {/* Active pointer & chevron on desktop when card is on the left */}
          {!isMobile && isReverseLayout && (
            <>
              {/* Outward pointer pointing LEFT towards the left card */}
              <polygon points="3,270 19,260 19,280" fill="#38BDF8" filter="url(#neonCyanGlow)" />
              <polygon points="6,270 17,262 17,278" fill="#FFFFFF" opacity="0.9" />
              {/* Inward chevron pointing RIGHT into active sector */}
              <polygon points="45,270 32,261 32,279" fill="#38BDF8" filter="url(#neonCyanGlow)" />
              <polygon points="43,270 34,263 34,277" fill="#FFFFFF" opacity="0.9" />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}

// Backwards-compatible aliases
export const StarEmblem3D = SecurityDialMetallic;

/**
 * SecurityGlassmorphismShowcase (Complete Section Showcase Component)
 * Redesigned to match the reference image:
 * - Circular Metallic Security Dial on the left (or alternating on desktop)
 * - Translucent Glassmorphism Information Panel on the right (or alternating on desktop)
 * - Counter 01 / 12 with blue progress underline
 * - Circular Previous (<) and Next (>) navigation buttons
 * - Prominent glossy blue square app-like icon tile with top curved specular glass highlight
 * - Large bold heading, blue accent underline, and full preserved description
 * - Preserves all 12 items with smooth instant response, touch swipe, and quick jump dots
 */
export function SecurityGlassmorphismShowcase({
  items = [],
  className = "",
  ariaLabel = "Security & Compliance showcase",
  autoRotateInterval = 5000,
  searchQuery = "",
  layout = "mobile-left",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDialHovered, setIsDialHovered] = useState(false);
  const [slideDirection, setSlideDirection] = useState("next");
  const [animKey, setAnimKey] = useState(0);
  const [boxPulseKey, setBoxPulseKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const touchStartX = useRef(null);
  const timerRef = useRef(null);
  const currentIndexRef = useRef(0);

  const n = items.length;

  // Keep ref synchronized with state
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // Window resize listener to detect mobile viewport (< 1024px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Immediate Next Transition — Every single click triggers with 0 dropped events
  const flowNext = useCallback(() => {
    if (n <= 1) return;
    const nextIdx = (currentIndexRef.current + 1) % n;
    currentIndexRef.current = nextIdx;
    setCurrentIndex(nextIdx);
    setStep((s) => s + 1);
    setSlideDirection("next");
    setAnimKey((k) => k + 1);
    setBoxPulseKey((k) => k + 1);
  }, [n]);

  // Immediate Prev Transition — Every single click triggers with 0 dropped events
  const flowPrev = useCallback(() => {
    if (n <= 1) return;
    const prevIdx = (currentIndexRef.current - 1 + n) % n;
    currentIndexRef.current = prevIdx;
    setCurrentIndex(prevIdx);
    setStep((s) => s - 1);
    setSlideDirection("prev");
    setAnimKey((k) => k + 1);
    setBoxPulseKey((k) => k + 1);
  }, [n]);

  // Instant response transition handler for sector / dot click
  const handleSelectIndex = useCallback((nextIdx) => {
    if (nextIdx === currentIndexRef.current) return;
    const delta = nextIdx - currentIndexRef.current;
    const dir = delta >= 0 ? "next" : "prev";
    currentIndexRef.current = nextIdx;
    setCurrentIndex(nextIdx);
    setStep((s) => s + delta);
    setSlideDirection(dir);
    setAnimKey((k) => k + 1);
    setBoxPulseKey((k) => k + 1);
  }, []);

  // Auto-rotation pauses ONLY when user hovers directly on the Dial
  useEffect(() => {
    if (!isPlaying || isDialHovered || n <= 1) return;

    timerRef.current = setInterval(() => {
      flowNext();
    }, autoRotateInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isDialHovered, flowNext, autoRotateInterval, n]);

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

  const displayedItem = items[currentIndex] || items[0];
  const displayedIconType = getShowcaseIconType(displayedItem, currentIndex);

  const isReverseLayout = layout === "mobile-right";

  return (
    <div
      className={`relative w-full max-w-7xl mx-auto px-2 sm:px-4 ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
        {/* 1. Circular Metallic Security Dial: On mobile, rendered on TOP (order-1); on desktop, rendered on Left (or Right if reverse) */}
        <div
          className={`w-full lg:col-span-5 flex flex-col items-center justify-center cursor-pointer order-1 ${
            isReverseLayout ? "lg:order-2" : "lg:order-1"
          }`}
          title="Hover on lock design to pause rotation. Click dial sectors to jump directly to an item."
        >
          <SecurityDialMetallic
            activeItem={displayedItem}
            items={items}
            step={step}
            targetIndex={currentIndex}
            displayedIndex={currentIndex}
            onSelectIndex={handleSelectIndex}
            activeIconType={displayedIconType}
            isReverseLayout={isReverseLayout}
            isMobile={isMobile}
            onMouseEnter={() => setIsDialHovered(true)}
            onMouseLeave={() => setIsDialHovered(false)}
          />
        </div>

        {/* 2. Floating High-Tech Glassmorphism Information Panel: On mobile, rendered on BOTTOM (order-2) */}
        <div
          className={`w-full lg:col-span-7 flex flex-col justify-center order-2 ${
            isReverseLayout ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {/* Card Box Frame with Micro-Pulse Feedback and Ambient Shimmer */}
          <div
            key={`box-pulse-${boxPulseKey}`}
            className="glass-showcase-panel card-box-feedback p-4 sm:p-5 lg:p-6 relative overflow-hidden w-full max-w-2xl lg:max-w-none shadow-2xl rounded-2xl sm:rounded-3xl border border-white/90 bg-white/90 backdrop-blur-2xl transition-all"
          >
            {/* Shimmer Light Reflection Sweep across the glass card */}
            <div
              className="absolute inset-y-0 -left-1/3 w-1/2 bg-gradient-to-r from-transparent via-cyan-100/35 to-transparent pointer-events-none animate-shimmer-sweep"
              aria-hidden="true"
            />

            {/* Glowing Receiving Alignment Marker (Connects with Dial's Glowing Arrow!) */}
            {!isReverseLayout && !isMobile && (
              <div
                className="absolute top-1/2 -translate-y-1/2 -left-2.5 z-30 pointer-events-none flex items-center animate-receiving-pulse"
                aria-hidden="true"
              >
                <div className="w-5 h-5 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] rotate-45 rounded-sm shadow-[0_0_15px_rgba(56,189,248,0.9)] border border-white" />
              </div>
            )}
            {isReverseLayout && !isMobile && (
              <div
                className="absolute top-1/2 -translate-y-1/2 -right-2.5 z-30 pointer-events-none flex items-center animate-receiving-pulse"
                aria-hidden="true"
              >
                <div className="w-5 h-5 bg-gradient-to-l from-[#38BDF8] to-[#2563EB] rotate-45 rounded-sm shadow-[0_0_15px_rgba(56,189,248,0.9)] border border-white" />
              </div>
            )}
            {isMobile && (
              <div
                className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex items-center animate-receiving-pulse"
                aria-hidden="true"
              >
                <div className="w-5 h-5 bg-gradient-to-t from-[#38BDF8] to-[#2563EB] rotate-45 rounded-sm shadow-[0_0_15px_rgba(56,189,248,0.9)] border border-white" />
              </div>
            )}

            {/* Top Bar: Counter & Progress Laser on Left; Auto/Paused Toggle on Right */}
            <div className="flex items-center justify-between gap-3 border-b border-blue-100/80 pb-2.5 sm:pb-3 mb-2.5 sm:mb-3 relative z-10">
              {/* Counter: 01 / 12 with Electric Gradient & Glowing Laser Track */}
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5 font-sans">
                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-400">
                    / {String(n).padStart(2, "0")}
                  </span>
                </div>
                {/* Thin Neon Laser Progress Bar */}
                <div className="w-20 sm:w-28 h-1.5 bg-blue-100/90 rounded-full mt-1 overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-300 rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                    style={{ width: `${((currentIndex + 1) / n) * 100}%` }}
                  />
                </div>
              </div>

              {/* Top-Right: Auto / Paused Mode Toggle Badge */}
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50/90 hover:bg-blue-100/90 px-3 py-1 rounded-full border border-blue-200/80 shadow-2xs transition-all cursor-pointer active:scale-95"
                aria-label={isPlaying ? "Pause auto rotation" : "Resume auto rotation"}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isPlaying && !isDialHovered ? "bg-cyan-500 animate-pulse shadow-[0_0_6px_rgba(6,182,212,0.9)]" : "bg-amber-400"
                  }`}
                />
                <span className="font-mono text-[10px]">
                  {isDialHovered ? "PAUSED" : isPlaying ? "AUTO" : "PAUSED"}
                </span>
              </button>
            </div>

            {/* Redesigned Content Deck: Inner Elevated Panel with Premium Smooth Animations */}
            <div className="relative rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/95 via-blue-50/45 to-white/90 border border-blue-100/80 p-3.5 sm:p-4.5 lg:p-5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)] overflow-hidden">
              {/* Dynamic Content Body Animated with Key for Immediate, Fresh, Smooth Transition */}
              <div
                key={`smooth-deck-${animKey}`}
                className={`relative z-10 ${
                  slideDirection === "next" ? "animate-smooth-content-next" : "animate-smooth-content-prev"
                }`}
              >
                {/* Upper Row: Compact 3D Cyber Emblem + Category Chip + Heading */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  {/* Compact 3D Precision Glossy Cyber Emblem */}
                  <div className="relative shrink-0 group">
                    {/* Ambient outer cyan backlight glow */}
                    <div className="absolute -inset-1 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 opacity-60 blur-xs group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#1E5BF6] via-[#1A50E2] to-[#0A2554] border border-cyan-300/60 flex items-center justify-center overflow-hidden shadow-lg shadow-blue-600/35">
                      {/* 3D Glass Specular Crescent Arc Highlight */}
                      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/45 via-white/10 to-transparent rounded-t-xl sm:rounded-t-2xl pointer-events-none" />
                      
                      {/* Centered crisp white pure SVG icon with smooth float pop & cyan drop-shadow */}
                      <div
                        className="animate-icon-smooth-pop"
                        style={{ filter: "drop-shadow(0 0 8px rgba(56, 189, 248, 0.8))" }}
                      >
                        <RenderSvgIcon
                          type={displayedIconType}
                          size={25}
                          color="#FFFFFF"
                          strokeWidth={2}
                          className="relative z-10 text-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Title & Laser Underline */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-xl sm:text-2xl font-black text-[#0A2540] tracking-tight leading-snug ${
                      slideDirection === "next" ? "animate-title-next" : "animate-title-prev"
                    }`}>
                      <HighlightText text={displayedItem.title} query={searchQuery} />
                    </h3>

                    {/* Illuminated Cyan Laser Underline with Glowing Terminal Dot */}
                    <div className="flex items-center gap-1.5 mt-1.5 animate-laser-sweep">
                      <div className="w-12 sm:w-14 h-1 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(56,189,248,1)] animate-ping" />
                    </div>
                  </div>
                </div>

                {/* Preserved Full Description Paragraph with Enhanced Typography and Smooth Cascade */}
                {displayedItem.description && (
                  <div className="mt-2.5 pt-2 border-t border-blue-100/70 animate-desc-cascade">
                    <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                      <HighlightText text={displayedItem.description} query={searchQuery} />
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Controls Bar: Left (Previous) < --- Middle (Dots) --- > Right (Next) */}
            <div className="flex items-center justify-between gap-2 sm:gap-4 pt-3.5 mt-3 border-t border-blue-100/70 relative z-10">
              {/* Left: Circular Previous Button with Spring Feedback */}
              <button
                type="button"
                onClick={flowPrev}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-blue-50 border border-blue-200 shadow-sm hover:shadow-md flex items-center justify-center text-[#1565C0] hover:text-blue-700 transition-all duration-200 active:scale-90 cursor-pointer shrink-0"
                aria-label="Previous item"
                title="Previous item"
              >
                <svg className="w-4.5 h-4.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Middle: High-Tech Capsule Pagination Notches with Hover Tooltips */}
              <div
                className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 overflow-x-auto py-1 px-1 max-w-full scrollbar-none"
                role="tablist"
                aria-label="Quick Item Selector"
              >
                {items.map((_, dotIdx) => {
                  const isAct = dotIdx === currentIndex;
                  return (
                    <button
                      key={`glass-dot-${dotIdx}`}
                      type="button"
                      onClick={() => handleSelectIndex(dotIdx)}
                      className={`group relative h-2 rounded-full cursor-pointer transition-all duration-300 shrink-0 ${
                        isAct
                          ? "w-6 sm:w-8 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                          : "w-2 sm:w-2.5 bg-blue-200/80 hover:bg-blue-400 hover:scale-125"
                      }`}
                      aria-label={`Jump to item ${dotIdx + 1}`}
                      aria-selected={isAct}
                    >
                      {/* Tooltip on hover */}
                      <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] font-mono px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap z-30">
                        {String(dotIdx + 1).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right: Circular Next Button with Vibrant Gradient */}
              <button
                type="button"
                onClick={flowNext}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-md shadow-blue-500/30 flex items-center justify-center text-white transition-all duration-200 active:scale-90 cursor-pointer shrink-0"
                aria-label="Next item"
                title="Next item"
              >
                <svg className="w-4.5 h-4.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Backwards-compatible aliases
export const StarGlassmorphismShowcase = SecurityGlassmorphismShowcase;
export const RetroPixelCardGrid = SecurityGlassmorphismShowcase;

// ============================================================================
// 8. SECTION ITEM (CIRCULAR METALLIC SECURITY DIAL & GLASSMORPHISM SHOWCASE)
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
      {/* Elegant Curved Ambient Ribbon Background Patterns (matching reference image) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
        <svg
          className="absolute w-full h-full opacity-40"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 200 C 300 100, 600 450, 1100 250 C 1350 150, 1500 300, 1600 400"
            stroke="url(#bgRibbonGrad1)"
            strokeWidth="90"
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M-50 700 C 400 850, 800 500, 1200 650 C 1400 720, 1550 680, 1650 620"
            stroke="url(#bgRibbonGrad2)"
            strokeWidth="110"
            strokeLinecap="round"
            opacity="0.25"
          />
          <circle cx="280" cy="450" r="320" fill="url(#bgRadialGlow)" opacity="0.45" />
          <defs>
            <linearGradient id="bgRibbonGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="bgRibbonGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#BFDBFE" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.1" />
            </linearGradient>
            <radialGradient id="bgRadialGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#E0F2FE" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F0F9FF" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Background Soft Radial Glow Accents */}
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

        {/* Circular Security Dial & Floating Glassmorphism Showcase */}
        <div className="w-full mt-4 sm:mt-6">
          <SecurityGlassmorphismShowcase
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
  { id: "section-01", layout: "mobile-left", subheading: "Explore Security & Compliance Strategy" },
  { id: "section-02", layout: "mobile-right", subheading: "Explore Secure Engineering & Development" },
  { id: "section-03", layout: "mobile-left", subheading: "Explore Identity, Access & Authentication" },
  { id: "section-04", layout: "mobile-right", subheading: "Explore Data Protection & Encryption" },
  { id: "section-05", layout: "mobile-left", subheading: "Explore Application & API Security" },
  { id: "section-06", layout: "mobile-right", subheading: "Explore Infrastructure & Environment Security" },
  { id: "section-07", layout: "mobile-left", subheading: "Explore Regulatory, Legal & Compliance Standards" },
  { id: "section-08", layout: "mobile-right", subheading: "Explore Security Assessment, Audit & Testing" },
  { id: "section-09", layout: "mobile-left", subheading: "Explore Security Monitoring, Logging & SIEM" },
  { id: "section-10", layout: "mobile-right", subheading: "Explore Incident Response, Forensics & Recovery" },
  { id: "section-11", layout: "mobile-left", subheading: "Explore Privacy, Governance & Risk Management" },
  { id: "section-12", layout: "mobile-right", subheading: "Explore Continuous Improvement & Resilience" },
];

// ============================================================================
// 9. COMPLETE SECURITY & COMPLIANCE PAGE COMPONENT
// ============================================================================

export default function SecurityAndCompliance({ onClose }) {
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

        {/* 12 Security & Compliance Sections with Alternating Layouts */}
        {technologySections.map((section, idx) => {
          const config = SECTION_CONFIGS[idx] || {
            layout: idx % 2 === 0 ? "mobile-left" : "mobile-right",
            subheading: `Explore ${section.title}`,
          };
          const sectionId = section.id || `security-section-${idx}`;

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

export const PurposeAndUseCases = SecurityAndCompliance;
export const ProductRoadmap = SecurityAndCompliance;
export const VisionMission = SecurityAndCompliance;
export const PurposeUseCases = SecurityAndCompliance;
export const SecurityCompliancePage = SecurityAndCompliance;

