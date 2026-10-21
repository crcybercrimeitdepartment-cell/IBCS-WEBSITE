import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Cloud, 
  Database, 
  Radar, 
  Activity, 
  Crosshair, 
  Radio, 
  ScanFace, 
  KeyRound, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  ArrowUp, 
  X,
  Home,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { securityCardsData } from './GlobalInfrastructureManagedServicesPageData';

// Icon registry mapping
const ICONS = {
  ShieldCheck,
  Cloud,
  Database,
  Radar,
  Activity,
  Crosshair,
  Radio,
  ScanFace,
  KeyRound,
  TrendingUp,
  BarChart3,
  Zap
}

// 3 repetitions of all 12 cards for seamless infinite horizontal loop
const MARQUEE_ITEMS = [
  ...securityCardsData.map((item, idx) => ({ ...item, uniqueKey: `m1-${idx}` })),
  ...securityCardsData.map((item, idx) => ({ ...item, uniqueKey: `m2-${idx}` })),
  ...securityCardsData.map((item, idx) => ({ ...item, uniqueKey: `m3-${idx}` }))
]

// ============================================================================
// EMBEDDED COMPLETE STYLES (Tailwind + Aesthetic Studio Design System)
// ============================================================================
const STYLE_RULES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
}

:root {
  --bg-room: #f6f3ee;
  --bg-wall: #faf7f2;
  --bg-cream-tint: #f2ece2;
  --text-main: #0f172a;
  --text-body: #334155;
  --text-muted: #64748b;
  --card-bg: #ffffff;
  --card-radius: 22px;
  --card-shadow: 0 20px 45px -10px rgba(45, 35, 25, 0.12), 0 4px 14px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.03);
  --card-shadow-hover: 0 28px 60px -12px rgba(45, 35, 25, 0.18), 0 10px 24px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.04);
  --card-shadow-expanded: 0 36px 72px -14px rgba(45, 35, 25, 0.2), 0 14px 32px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.95);
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-display: 'Space Grotesk', var(--font-sans);
  --spring-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --smooth-ease: cubic-bezier(0.16, 1, 0.3, 1);
}

html {
  scroll-behavior: smooth;
  width: 100%;
}

body {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: var(--font-sans);
  background-color: var(--bg-room);
  color: var(--text-main);
  user-select: none;
}

#root {
  width: 100%;
  min-height: 100vh;
}

/* Master Scrollable Page Container */
.page-scroll-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #EBF7F8 0%, #E7F3F5 40%, #DFEFF2 100%);
  overflow-x: hidden;
}

/* Ambient Studio Light Overlay */
.ambient-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(ellipse at 50% 14%, rgba(235, 247, 248, 0.8) 0%, rgba(231, 243, 245, 0.4) 45%, rgba(223, 239, 242, 0) 100%);
  z-index: 1;
}

/* ==========================================================================
   SECTION 1: HERO HEADING & DESCRIPTION
   ========================================================================== */
.hero-main-container {
  position: relative;
  z-index: 20;
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding: 60px 24px 50px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: hero-fade 0.8s var(--spring-ease);
}

@keyframes hero-fade {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 9999px;
  margin-bottom: 22px;
  box-shadow: 0 4px 16px rgba(45, 35, 25, 0.04);
}

.hero-badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3b82f6;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
  animation: pulse-dot 2s infinite ease-in-out;
}

@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.35); opacity: 1; box-shadow: 0 0 14px rgba(59, 130, 246, 0.95); }
}

.hero-badge-text {
  font-size: 0.78rem;
  font-weight: 700;
  color: #1e293b;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hero-main-title {
  font-family: var(--font-sans);
  font-size: clamp(2.1rem, 5vw, 3.6rem);
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.035em;
  margin-bottom: 26px;
  line-height: 1.15;
}

/* Glass Card Box for Overview Text */
.hero-card-container {
  width: 100%;
  max-width: 900px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  padding: 36px 40px;
  box-shadow: 0 16px 40px -12px rgba(45, 35, 25, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.03);
  margin-bottom: 34px;
}

.hero-description-wrap {
  display: flex;
  flex-direction: column;
  gap: 18px;
  text-align: left;
}

.hero-desc-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.08), transparent);
}

.hero-desc-paragraph {
  font-size: clamp(0.94rem, 1.15vw, 1.08rem);
  line-height: 1.75;
  color: #334155;
  font-weight: 450;
  text-align: justify;
  text-justify: inter-word;
}

.hero-desc-paragraph strong {
  color: #0f172a;
  font-weight: 700;
}

/* Value Stats Row */
.hero-stats-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 36px;
}

.stat-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 9999px;
  font-size: 0.84rem;
  font-weight: 650;
  color: #1e293b;
  box-shadow: 0 2px 10px rgba(45, 35, 25, 0.04);
}

.stat-icon {
  color: #2563eb;
}

/* Scroll CTA Button */
.hero-actions {
  display: flex;
  justify-content: center;
}

.scroll-cue-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: #0f172a;
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.2);
  transition: all 0.3s var(--smooth-ease);
}

.scroll-cue-btn:hover {
  background: #1e293b;
  transform: translateY(-2px);
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.28);
}

.bounce-arrow {
  animation: bounce 1.8s infinite ease-in-out;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

/* ==========================================================================
   SECTION 2: 3D INTERACTIVE CAROUSEL STAGE
   ========================================================================== */
.showcase-stage-section {
  position: relative;
  width: 100%;
  padding: 70px 0 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  background: linear-gradient(to bottom, rgba(246, 243, 238, 0.4) 0%, rgba(243, 238, 230, 0.8) 50%, rgba(246, 243, 238, 0.4) 100%);
  border-top: 1px solid rgba(0, 0, 0, 0.04);
}

.stage-section-header {
  text-align: center;
  margin-bottom: 36px;
  padding: 0 20px;
}

.section-pill-tag {
  display: inline-flex;
  align-items: center;
  font-size: 0.74rem;
  font-weight: 750;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 8px;
  background: rgba(255, 255, 255, 0.85);
  padding: 4px 14px;
  border-radius: 9999px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.section-headline {
  font-size: clamp(1.5rem, 3.2vw, 2.3rem);
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.025em;
  margin-bottom: 8px;
}

.section-subtext {
  font-size: clamp(0.78rem, 2.2vw, 0.88rem);
  color: #64748b;
  font-weight: 500;
  padding: 0 12px;
}

/* 3D Viewport Wrapper */
.stage-viewport {
  position: relative;
  width: 100%;
  height: 800px;
  overflow: hidden;
  perspective: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Edge soft cream gradient fade masks */
.edge-fade-left, .edge-fade-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 140px;
  pointer-events: none;
  z-index: 25;
}

.edge-fade-left {
  left: 0;
  background: linear-gradient(to right, rgba(246, 243, 238, 1) 0%, rgba(246, 243, 238, 0.85) 40%, rgba(246, 243, 238, 0) 100%);
}

.edge-fade-right {
  right: 0;
  background: linear-gradient(to left, rgba(246, 243, 238, 1) 0%, rgba(246, 243, 238, 0.85) 40%, rgba(246, 243, 238, 0) 100%);
}

/* Interactive 3D Cards Arena */
.cards-arena {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 10;
  transform-style: preserve-3d;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  overflow: hidden;
}

/* Infinite Marquee Track Wrapper with Big Clearance Above Desk */
.marquee-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: -190px;
  transform-style: preserve-3d;
  overflow: visible;
}

.marquee-track {
  display: flex;
  align-items: center;
  gap: 32px;
  width: max-content;
  will-change: transform;
}

/* Floating Card (4 per screen width) */
.story-card {
  position: relative;
  width: 290px;
  height: 385px;
  background: var(--card-bg);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.65s var(--spring-ease), 
              height 0.65s var(--spring-ease), 
              transform 0.5s var(--spring-ease), 
              box-shadow 0.4s var(--smooth-ease), 
              opacity 0.5s var(--smooth-ease);
  transform-origin: center center;
  border: 1px solid rgba(255, 255, 255, 0.95);
  flex-shrink: 0;
  user-select: none;
}

.story-card:hover:not(.is-expanded-inplace) {
  transform: translateY(-12px) scale(1.03);
  box-shadow: var(--card-shadow-hover);
  z-index: 20;
}

/* IN-PLACE EXPANDED CARD STATE */
.story-card.is-expanded-inplace {
  width: min(940px, 92vw);
  height: 400px;
  cursor: pointer;
  z-index: 50;
  box-shadow: var(--card-shadow-expanded);
  border: 1px solid rgba(255, 255, 255, 1);
  transform: translateY(-6px);
}

.story-card.is-dimmed {
  opacity: 0.6;
  transform: scale(0.97);
}

/* FULL BLEED CARD VISUAL WRAP */
.card-visual-wrap.full-bleed {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

.card-visual-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  transition: transform 0.6s var(--smooth-ease);
  pointer-events: none;
}

.story-card:hover .card-visual-img {
  transform: scale(1.05);
}

/* Seamless Soft Top Scrim */
.card-top-scrim {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 130px;
  background: linear-gradient(to bottom, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(255, 255, 255, 0.82) 45%, 
    rgba(255, 255, 255, 0.3) 75%, 
    rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
  z-index: 2;
}

/* OVERLAID CARD HEADER */
.card-header.overlaid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 24px 18px 12px 18px;
  text-align: center;
  z-index: 3;
  background: transparent;
  pointer-events: none;
}

.card-title {
  font-family: var(--font-sans);
  font-size: 1.3rem;
  font-weight: 500;
  color: #111827;
  letter-spacing: -0.015em;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.25;
}

.card-author {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 450;
  color: #4b5563;
  letter-spacing: 0.005em;
}

/* Avatar / Icon Badge at Bottom-Left */
.card-avatar-badge {
  position: absolute;
  bottom: 16px;
  left: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  overflow: hidden;
}

/* EXPANDED IN-PLACE CARD BODY */
.card-expanded-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: stretch;
}

.close-inplace-btn {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-main);
  cursor: pointer;
  z-index: 25;
  transition: all 0.2s var(--smooth-ease);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.close-inplace-btn:hover {
  background: #ffffff;
  transform: scale(1.1);
  color: #ef4444;
}

.expanded-hero-visual {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.expanded-hero-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  filter: brightness(0.92);
}

.expanded-cyber-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, 
    rgba(255, 255, 255, 0.98) 0%, 
    rgba(255, 255, 255, 0.96) 55%, 
    rgba(255, 255, 255, 0.75) 80%, 
    rgba(255, 255, 255, 0.35) 100%);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.expanded-content-body {
  position: relative;
  z-index: 10;
  width: 72%;
  padding: 34px 38px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: content-fade 0.4s var(--smooth-ease);
}

@keyframes content-fade {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.expanded-header-row {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.expanded-num-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  border-radius: 10px;
  border: 1px solid;
  background: rgba(255, 255, 255, 0.95);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.92rem;
}

.expanded-main-title {
  font-family: var(--font-sans);
  font-size: 1.55rem;
  font-weight: 800;
  color: var(--text-main);
  letter-spacing: -0.025em;
}

.expanded-category-pill {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 9999px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.expanded-full-desc-container {
  max-height: 190px;
  overflow-y: auto;
  padding-right: 10px;
  margin: 12px 0 16px 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(15, 164, 175, 0.4) transparent;
}

.expanded-full-desc-container::-webkit-scrollbar {
  width: 4px;
}

.expanded-full-desc-container::-webkit-scrollbar-thumb {
  background: rgba(15, 164, 175, 0.4);
  border-radius: 9999px;
}

.expanded-full-desc {
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--text-body);
  font-weight: 450;
  text-align: justify;
  text-justify: inter-word;
}

.expanded-chips-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.capability-chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 12px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 9px;
  font-size: 0.76rem;
  font-weight: 600;
  color: #1e293b;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

.chip-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

/* Foreground Desk & Interior Layer */
.interior-scene-layer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 38%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  pointer-events: none;
  z-index: 20;
}

.desk-setup-visual {
  position: relative;
  width: min(780px, 92vw);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.desk-canvas {
  width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: bottom center;
  filter: drop-shadow(0 20px 30px rgba(45, 35, 25, 0.08));
}

/* Stage Slide Navigation Buttons & Floating Dock */
.stage-nav-btn {
  position: absolute;
  top: 40%;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1.5px solid rgba(15, 164, 175, 0.35);
  box-shadow: 0 10px 25px -5px rgba(0, 49, 53, 0.18), 0 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #081E52;
  cursor: pointer;
  z-index: 35;
  transition: all 0.25s var(--smooth-ease);
}

.stage-nav-btn:hover {
  background: #0FA4AF;
  color: #ffffff;
  transform: scale(1.12);
  box-shadow: 0 14px 30px -4px rgba(15, 164, 175, 0.45);
  border-color: #0FA4AF;
}

.stage-nav-btn:active {
  transform: scale(0.95);
}

.stage-nav-btn.prev {
  left: 24px;
}

.stage-nav-btn.next {
  right: 24px;
}

@media (max-width: 640px) {
  .stage-nav-btn {
    width: 42px;
    height: 42px;
    top: 36%;
  }
  .stage-nav-btn.prev {
    left: 10px;
  }
  .stage-nav-btn.next {
    right: 10px;
  }
}

/* Bottom Slide Control Dock */
.slide-control-dock {
  position: relative;
  z-index: 35;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 18px auto 0 auto;
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(15, 164, 175, 0.25);
  border-radius: 9999px;
  box-shadow: 0 12px 32px -8px rgba(0, 49, 53, 0.14);
}

.dock-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #F0F9FA;
  border: 1px solid rgba(15, 164, 175, 0.25);
  color: #081E52;
  cursor: pointer;
  transition: all 0.2s ease;
}

.dock-btn:hover {
  background: #0FA4AF;
  color: #ffffff;
  transform: scale(1.08);
}

.dock-counter {
  font-family: var(--font-sans);
  font-size: 0.84rem;
  font-weight: 750;
  color: #081E52;
  padding: 0 4px;
  min-width: 58px;
  text-align: center;
}

.dock-dots-row {
  display: flex;
  align-items: center;
  gap: 5px;
}

.dock-dot-pill {
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  background: #CBD5E1;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
}

.dock-dot-pill.is-active {
  width: 20px;
  background: #0FA4AF;
}

.dock-dot-pill:hover {
  background: #0E7980;
}

@media (max-width: 640px) {
  .dock-dots-row {
    display: none;
  }
}

/* Floating Scroll Back to Top Button */
.floating-top-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #0f172a;
  color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 90;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  transition: all 0.2s var(--smooth-ease);
  animation: fade-in 0.3s ease;
}

@keyframes fade-in {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

.floating-top-btn:hover {
  background: #2563eb;
  transform: translateY(-3px);
}

/* ==========================================================================
   MULTI-DEVICE RESPONSIVE BREAKPOINTS
   ========================================================================== */

/* LAPTOPS & DESKTOPS (1024px - 1199px) */
@media (max-width: 1199px) {
  .hero-main-container {
    padding: 55px 20px 45px 20px;
  }
  .stage-viewport {
    height: 740px;
  }
  .marquee-wrapper {
    margin-top: -170px;
  }
  .story-card {
    width: 260px;
    height: 350px;
  }
  .interior-scene-layer {
    height: 36%;
  }
}

/* TABLETS (768px - 1023px) */
@media (max-width: 1023px) {
  .hero-main-container {
    padding: 50px 20px 35px 20px;
  }
  .hero-card-container {
    padding: 28px 24px;
    border-radius: 20px;
  }
  .hero-main-title {
    font-size: 2.6rem;
  }
  .stage-viewport {
    height: 700px;
  }
  .marquee-wrapper {
    margin-top: -155px;
  }
  .story-card {
    width: 240px;
    height: 330px;
  }
  .story-card.is-expanded-inplace {
    width: min(720px, 94vw);
    height: 390px;
  }
  .interior-scene-layer {
    height: 34%;
  }
  .desk-setup-visual {
    width: min(640px, 90vw);
  }
  .edge-fade-left, .edge-fade-right {
    width: 90px;
  }
}

/* LARGE PHONES & PHABLETS (481px - 767px) */
@media (max-width: 767px) {
  .hero-main-container {
    padding: 45px 16px 30px 16px;
  }
  .hero-badge {
    padding: 5px 14px;
    margin-bottom: 16px;
  }
  .hero-badge-text {
    font-size: 0.72rem;
  }
  .hero-main-title {
    font-size: 2.1rem;
    margin-bottom: 20px;
  }
  .hero-card-container {
    padding: 24px 18px;
    border-radius: 18px;
    margin-bottom: 26px;
  }
  .hero-desc-paragraph {
    font-size: 0.94rem;
    line-height: 1.65;
  }
  .hero-stats-row {
    gap: 8px;
    margin-bottom: 28px;
  }
  .stat-pill {
    font-size: 0.78rem;
    padding: 7px 14px;
  }
  .scroll-cue-btn {
    padding: 12px 22px;
    font-size: 0.86rem;
  }
  .showcase-stage-section {
    padding: 50px 0 40px 0;
  }
  .stage-section-header {
    margin-bottom: 26px;
  }
  .section-headline {
    font-size: 1.6rem;
  }
  .stage-viewport {
    height: 640px;
  }
  .marquee-wrapper {
    margin-top: -140px;
  }
  .marquee-track {
    gap: 20px;
  }
  .story-card {
    width: 215px;
    height: 295px;
    border-radius: 18px;
  }
  .card-header.overlaid {
    padding: 18px 14px 10px 14px;
  }
  .card-title {
    font-size: 1.15rem;
  }
  .card-author {
    font-size: 0.74rem;
  }
  .card-top-scrim {
    height: 110px;
  }
  .card-avatar-badge {
    width: 28px;
    height: 28px;
    bottom: 12px;
    left: 12px;
  }
  .story-card.is-expanded-inplace {
    width: min(520px, 94vw);
    height: 440px;
    border-radius: 20px;
  }
  .expanded-cyber-overlay {
    background: linear-gradient(to bottom, 
      rgba(255, 255, 255, 0.98) 0%, 
      rgba(255, 255, 255, 0.95) 70%, 
      rgba(255, 255, 255, 0.85) 100%);
  }
  .expanded-content-body {
    width: 100%;
    padding: 24px 20px;
    overflow-y: auto;
  }
  .expanded-main-title {
    font-size: 1.3rem;
  }
  .expanded-full-desc {
    font-size: 0.85rem;
    line-height: 1.55;
    margin: 12px 0 14px 0;
  }
  .capability-chip {
    font-size: 0.72rem;
    padding: 4px 10px;
  }
  .interior-scene-layer {
    height: 32%;
  }
  .desk-setup-visual {
    width: min(500px, 92vw);
  }
  .edge-fade-left, .edge-fade-right {
    width: 60px;
  }
  .floating-top-btn {
    width: 40px;
    height: 40px;
    bottom: 18px;
    right: 18px;
  }
}

/* SMALL PHONES (< 480px) */
@media (max-width: 480px) {
  .hero-main-container {
    padding: 36px 14px 24px 14px;
  }
  .hero-badge {
    padding: 4px 12px;
    margin-bottom: 14px;
  }
  .hero-badge-text {
    font-size: 0.68rem;
  }
  .hero-badge-dot {
    width: 6px;
    height: 6px;
  }
  .hero-main-title {
    font-size: 1.75rem;
    margin-bottom: 18px;
    letter-spacing: -0.02em;
  }
  .hero-card-container {
    padding: 20px 14px;
    border-radius: 16px;
    margin-bottom: 22px;
  }
  .hero-desc-paragraph {
    font-size: 0.88rem;
    line-height: 1.6;
  }
  .hero-stats-row {
    gap: 6px;
    margin-bottom: 24px;
  }
  .stat-pill {
    font-size: 0.74rem;
    padding: 6px 12px;
  }
  .scroll-cue-btn {
    padding: 12px 20px;
    font-size: 0.82rem;
  }
  .showcase-stage-section {
    padding: 36px 0 28px 0;
  }
  .stage-section-header {
    margin-bottom: 20px;
  }
  .section-pill-tag {
    font-size: 0.68rem;
    padding: 3px 10px;
  }
  .section-headline {
    font-size: 1.35rem;
  }
  .section-subtext {
    font-size: 0.76rem;
  }
  .stage-viewport {
    height: 560px;
  }
  .marquee-wrapper {
    margin-top: -110px;
  }
  .marquee-track {
    gap: 16px;
  }
  .story-card {
    width: 195px;
    height: 270px;
    border-radius: 16px;
  }
  .card-header.overlaid {
    padding: 16px 10px 8px 10px;
  }
  .card-title {
    font-size: 1.05rem;
  }
  .card-author {
    font-size: 0.7rem;
  }
  .card-top-scrim {
    height: 95px;
  }
  .card-avatar-badge {
    width: 26px;
    height: 26px;
    bottom: 10px;
    left: 10px;
  }
  .story-card.is-expanded-inplace {
    width: min(390px, 92vw);
    height: min(480px, 76vh);
    border-radius: 18px;
  }
  .expanded-content-body {
    width: 100%;
    padding: 20px 14px;
    overflow-y: auto;
  }
  .expanded-header-row {
    gap: 8px;
  }
  .expanded-num-badge {
    font-size: 0.82rem;
    padding: 4px 8px;
  }
  .expanded-main-title {
    font-size: 1.15rem;
  }
  .expanded-category-pill {
    font-size: 0.68rem;
    padding: 3px 8px;
  }
  .expanded-full-desc {
    font-size: 0.8rem;
    line-height: 1.5;
    margin: 10px 0 12px 0;
  }
  .expanded-chips-row {
    gap: 6px;
  }
  .capability-chip {
    font-size: 0.68rem;
    padding: 3px 8px;
  }
  .close-inplace-btn {
    top: 12px;
    right: 12px;
    width: 32px;
    height: 32px;
  }
  .interior-scene-layer {
    height: 28%;
  }
  .desk-setup-visual {
    width: min(360px, 94vw);
  }
  .edge-fade-left, .edge-fade-right {
    width: 40px;
  }
  .floating-top-btn {
    width: 36px;
    height: 36px;
    bottom: 14px;
    right: 14px;
  }
}
`

// ============================================================================
// COMPONENT 1: Minimalist Studio White Desk, Chair & Potted Plant Scene (SVG)
// ============================================================================
function DeskScene({ mousePos }) {
  const deskParallaxX = (mousePos.x - 0.5) * 12
  const deskParallaxY = (mousePos.y - 0.5) * 6

  return (
    <div 
      className="interior-scene-layer"
      style={{
        transform: `translate3d(${deskParallaxX}px, ${deskParallaxY}px, 0)`
      }}
    >
      <div className="desk-setup-visual">
        <svg 
          className="desk-canvas" 
          viewBox="0 0 800 360" 
          preserveAspectRatio="xMidYMax meet"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="desk-shadow" x="-10%" y="-10%" width="120%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
              <feOffset dx="0" dy="16" />
              <feComponentTransfer><feFuncA type="linear" slope="0.14" /></feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2dd4bf" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            <linearGradient id="potGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#9a3412" />
            </linearGradient>

            <linearGradient id="chairGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2b2d34" />
              <stop offset="100%" stopColor="#121316" />
            </linearGradient>

            <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(0,0,0,0.18)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
          </defs>

          {/* Floor Contact Shadows */}
          <ellipse cx="400" cy="340" rx="360" ry="16" fill="url(#floorShadow)" opacity="0.6" />
          <ellipse cx="400" cy="336" rx="80" ry="12" fill="url(#floorShadow)" opacity="0.8" />

          {/* Molded Shell Chair */}
          <g id="eames-chair">
            <line x1="375" y1="260" x2="355" y2="340" stroke="#1f2128" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="425" y1="260" x2="445" y2="340" stroke="#1f2128" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="378" y1="265" x2="422" y2="265" stroke="#2b2d34" strokeWidth="2.5" />
            <line x1="365" y1="300" x2="435" y2="300" stroke="#2b2d34" strokeWidth="1.5" />
            
            <circle cx="355" cy="340" r="3" fill="#121316" />
            <circle cx="445" cy="340" r="3" fill="#121316" />

            <path 
              d="M 360 255 C 352 230 350 175 370 148 C 382 132 418 132 430 148 C 450 175 448 230 440 255 C 435 270 365 270 360 255 Z" 
              fill="url(#chairGrad)" 
              filter="url(#desk-shadow)"
            />
            <path 
              d="M 370 148 C 382 133 418 133 430 148" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="2" 
              fill="none" 
            />
          </g>

          {/* Minimalist White Studio Desk */}
          <g id="white-desk">
            <line x1="165" y1="180" x2="150" y2="340" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
            <line x1="175" y1="180" x2="185" y2="340" stroke="#f1f3f5" strokeWidth="5" strokeLinecap="round" />
            
            <line x1="635" y1="180" x2="650" y2="340" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
            <line x1="625" y1="180" x2="615" y2="340" stroke="#f1f3f5" strokeWidth="5" strokeLinecap="round" />

            <rect x="135" y="166" width="530" height="14" rx="4" fill="#ffffff" filter="url(#desk-shadow)" />
            <rect x="135" y="176" width="530" height="4" fill="#e2e6ea" />
            <line x1="138" y1="167" x2="662" y2="167" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" />
          </g>

          {/* Potted Plant with Teal/Cyan Foliage */}
          <g id="potted-plant" transform="translate(535, 95)">
            <ellipse cx="25" cy="74" rx="14" ry="4" fill="rgba(0,0,0,0.15)" />
            <path 
              d="M 12 55 C 10 65 14 74 25 74 C 36 74 40 65 38 55 Z" 
              fill="url(#potGrad)" 
            />
            <ellipse cx="25" cy="55" rx="13" ry="3.5" fill="#7c2d12" />
            <ellipse cx="25" cy="55" rx="11" ry="2.5" fill="#451a03" />

            <line x1="25" y1="55" x2="25" y2="20" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />

            <path d="M 25 20 C 20 8 30 8 25 2 Z" fill="url(#leafGrad)" />
            <path d="M 25 28 C 10 22 14 36 25 32 Z" fill="url(#leafGrad)" />
            <path d="M 25 26 C 40 20 36 34 25 30 Z" fill="url(#leafGrad)" />
            <path d="M 25 40 C 8 34 12 50 25 44 Z" fill="url(#leafGrad)" />
            <path d="M 25 38 C 42 32 38 48 25 42 Z" fill="url(#leafGrad)" />
          </g>
        </svg>
      </div>
    </div>
  )
}

// ============================================================================
// COMPONENT 2: 3D Full-Bleed Security Card (Compact & In-Place Expand)
// ============================================================================
function CardItem({ 
  card, 
  index, 
  isExpandedInPlace, 
  hasAnyExpanded,
  onSelect,
  onClose,
  onHoverChange
}) {
  const IconComponent = ICONS[card.iconName] || ShieldCheck

  const handleClick = (e) => {
    e.stopPropagation()
    if (isExpandedInPlace) {
      onClose()
    } else {
      onSelect(card, index)
    }
  }

  const handleClose = (e) => {
    e.stopPropagation()
    onClose()
  }

  let cardClass = 'story-card'
  if (isExpandedInPlace) cardClass += ' is-expanded-inplace'
  else if (hasAnyExpanded) cardClass += ' is-dimmed'

  return (
    <div 
      className={cardClass} 
      onClick={handleClick}
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
    >
      {isExpandedInPlace ? (
        /* Expanded in-place view */
        <div className="card-expanded-inner">
          {/* Close button */}
          <button 
            className="close-inplace-btn" 
            onClick={handleClose}
            title="Click card or ✕ to close"
            aria-label="Close"
          >
            <X size={16} strokeWidth={2.5} />
          </button>

          {/* Background Ambient Visual */}
          <div className="expanded-hero-visual">
            <img 
              src={card.image} 
              alt={card.title} 
              draggable={false} 
            />
            <div className="expanded-cyber-overlay" />
          </div>

          {/* Expanded Content Layer */}
          <div className="expanded-content-body">
            <div>
              {/* Header Title Row */}
              <div className="expanded-header-row">
                <div 
                  className="expanded-num-badge"
                  style={{ borderColor: `${card.accent}40`, color: card.accent }}
                >
                  <IconComponent size={15} strokeWidth={2.4} />
                  <span>{card.num}</span>
                </div>
                <h2 className="expanded-main-title">
                  {card.title}
                </h2>
                <span 
                  className="expanded-category-pill"
                  style={{ background: `${card.accent}18`, color: card.accent }}
                >
                  {card.badge}
                </span>
              </div>

              {/* Verbatim Description Container */}
              <div className="expanded-full-desc-container">
                <p className="expanded-full-desc" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                  {card.description}
                </p>
              </div>
            </div>

            {/* Highlights / Capabilities Chips */}
            {card.highlights && (
              <div className="expanded-chips-row">
                {card.highlights.map((chip, idx) => (
                  <span key={idx} className="capability-chip">
                    <span className="chip-dot" style={{ background: card.accent }} />
                    {chip}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Compact Full-Bleed Card View */
        <div className="card-visual-wrap full-bleed">
          <img 
            src={card.image} 
            alt={card.title} 
            className="card-visual-img"
            loading="eager"
            draggable={false}
          />

          {/* Seamless Soft Top Scrim */}
          <div className="card-top-scrim" />

          {/* Overlaid Title and Subtitle */}
          <div className="card-header overlaid">
            <h3 className="card-title">
              {card.title}
            </h3>
            <p className="card-author">
              {card.badge}
            </p>
          </div>

          {/* Avatar Icon Badge at Bottom-Left */}
          <div 
            className="card-avatar-badge"
            style={{ background: `linear-gradient(135deg, ${card.accent}, #0f172a)` }}
          >
            <IconComponent size={14} color="#ffffff" strokeWidth={2.4} />
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================================================
// COMPONENT 3: Main App & Showcase Component
// ============================================================================
export default function GlobalInfrastructureManagedServicesPage({ onClose }) {
  const [expandedKey, setExpandedKey] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const [scrolledPastHero, setScrolledPastHero] = useState(false)
  const [isCardHovered, setIsCardHovered] = useState(false)
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [trackOffset, setTrackOffset] = useState(0)

  const currentOffsetRef = useRef(0)
  const targetOffsetRef = useRef(0)

  const TOTAL_CARDS = securityCardsData.length // 12
  const CARD_STEP = 322 // 290px card width + 32px gap
  const LOOP_WIDTH = TOTAL_CARDS * CARD_STEP // 3864px

  const handleBack = () => {
    if (onClose) {
      onClose();
    } else {
      window.location.hash = '#global-infrastructure-managed-services';
    }
  };

  const handleHome = () => {
    if (onClose) {
      onClose();
    } else {
      window.location.href = '/';
    }
  };

  // Continuous auto-slide stream at 60fps; ONLY pauses when cursor hovers on any card or when card is expanded
  useEffect(() => {
    let animId;
    const speed = 0.85; // smooth auto-slide velocity per frame

    const tick = () => {
      // Auto-slide advances when cursor is NOT hovering on any card and no card is expanded
      if (!isCardHovered && !expandedKey) {
        targetOffsetRef.current += speed;
      }

      // Smoothly interpolate currentOffset towards targetOffset for fluid gliding
      const diff = targetOffsetRef.current - currentOffsetRef.current;
      if (Math.abs(diff) > 0.05) {
        currentOffsetRef.current += diff * 0.12;
      } else {
        currentOffsetRef.current = targetOffsetRef.current;
      }

      // Seamless infinite loop wrapping
      if (currentOffsetRef.current >= LOOP_WIDTH) {
        currentOffsetRef.current -= LOOP_WIDTH;
        targetOffsetRef.current -= LOOP_WIDTH;
      } else if (currentOffsetRef.current < 0) {
        currentOffsetRef.current += LOOP_WIDTH;
        targetOffsetRef.current += LOOP_WIDTH;
      }

      setTrackOffset(currentOffsetRef.current);

      const activeIdx = Math.floor(((currentOffsetRef.current % LOOP_WIDTH) + CARD_STEP * 0.5) / CARD_STEP) % TOTAL_CARDS;
      setActiveCardIndex((activeIdx + TOTAL_CARDS) % TOTAL_CARDS);

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isCardHovered, expandedKey]);

  // Slide navigation handlers - clicking slide / dot glides smoothly to target card
  const handlePrevSlide = (e) => {
    e?.stopPropagation();
    targetOffsetRef.current -= CARD_STEP;
  };

  const handleNextSlide = (e) => {
    e?.stopPropagation();
    targetOffsetRef.current += CARD_STEP;
  };

  const handleSelectDot = (idx) => {
    const currentLoop = Math.floor(currentOffsetRef.current / LOOP_WIDTH);
    targetOffsetRef.current = currentLoop * LOOP_WIDTH + (idx * CARD_STEP);
  };

  // Track mouse coordinates for 3D room parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      setMousePos({ x, y })
    }

    const handleScroll = () => {
      if (window.scrollY > 250) {
        setScrolledPastHero(true)
      } else {
        setScrolledPastHero(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Keyboard navigation & Shortcuts (ESC to close, Left/Right to slide)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && expandedKey) {
        setExpandedKey(null)
      } else if (e.key === 'ArrowRight') {
        handleNextSlide()
      } else if (e.key === 'ArrowLeft') {
        handlePrevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [expandedKey])

  const handleCardSelect = (card) => {
    setExpandedKey(card.uniqueKey)
  }

  const handleCardClose = () => {
    setExpandedKey(null)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Parallax tilt angles
  const tiltX = (mousePos.y - 0.5) * -4
  const tiltY = (mousePos.x - 0.5) * 6

  return (
    <div 
      className="page-scroll-wrapper"
      onClick={() => {
        if (expandedKey) setExpandedKey(null)
      }}
    >
      {/* Inject complete self-contained CSS styles */}
      <style dangerouslySetInnerHTML={{ __html: STYLE_RULES }} />

      {/* Ambient Studio Lighting Glow */}
      <div className="ambient-glow" />

      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-[1300px] mx-auto px-6 pt-6 flex items-center justify-start gap-3 z-50 relative">
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

      {/* =====================================================================
          SECTION 1: HERO OVERVIEW
          ===================================================================== */}
      <header id="hero-section" className="hero-main-container">

        {/* Company Pill Badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">
            IB Cyber Security Private Limited
          </span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="hero-main-title">
          Global Infrastructure &amp; Managed Services
        </h1>

        {/* Glassmorphism Overview Container */}
        <div className="hero-card-container">
          <div className="hero-description-wrap" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            <p className="hero-desc-paragraph" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              <strong>IB Cyber Security Private Limited</strong> provides technology infrastructure and managed services designed to support secure, reliable, scalable, and continuously available digital environments. Our capabilities span cloud infrastructure, data centres, network management, cybersecurity operations, application infrastructure, monitoring, backup, disaster recovery, technical support, and managed technology operations.
            </p>
            <div className="hero-desc-divider" />
            <p className="hero-desc-paragraph" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              We combine modern infrastructure technologies, automation, security engineering, and operational expertise to help organisations maintain dependable digital environments. Our approach focuses on performance, availability, security, scalability, and continuous improvement, enabling businesses, government institutions, enterprises, and technology platforms to operate efficiently while adapting to evolving infrastructure requirements, workloads, technologies, and digital transformation needs.
            </p>
          </div>
        </div>

      </header>

      {/* =====================================================================
          SECTION 2: 3D INTERACTIVE CAROUSEL STAGE
          ===================================================================== */}
      <section id="showcase-section" className="showcase-stage-section">
        
        {/* 3D Viewport Wrapper */}
        <div className="stage-viewport">
          
          {/* Floating Left Slide Button */}
          <button 
            type="button"
            className="stage-nav-btn prev"
            onClick={handlePrevSlide}
            title="Slide Left (Previous Card)"
            aria-label="Previous Card"
          >
            <ChevronLeft size={26} strokeWidth={2.6} />
          </button>

          {/* Floating Right Slide Button */}
          <button 
            type="button"
            className="stage-nav-btn next"
            onClick={handleNextSlide}
            title="Slide Right (Next Card)"
            aria-label="Next Card"
          >
            <ChevronRight size={26} strokeWidth={2.6} />
          </button>

          {/* Edge smooth gradient fades */}
          <div className="edge-fade-left" />
          <div className="edge-fade-right" />

          {/* Floating 3D Cards Arena */}
          <div 
            className="cards-arena"
            style={{
              transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
            }}
          >
            <div className="marquee-wrapper">
              <div 
                className="marquee-track"
                style={{
                  transform: `translate3d(${-trackOffset}px, 0, 0)`,
                  willChange: 'transform'
                }}
              >
                {MARQUEE_ITEMS.map((card, index) => (
                  <CardItem
                    key={card.uniqueKey}
                    card={card}
                    index={index}
                    isExpandedInPlace={expandedKey === card.uniqueKey}
                    hasAnyExpanded={Boolean(expandedKey)}
                    onSelect={handleCardSelect}
                    onClose={handleCardClose}
                    onHoverChange={setIsCardHovered}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Minimalist White Desk, Chair & Potted Plant */}
          <DeskScene mousePos={mousePos} />
        </div>

        {/* Interactive Bottom Slide Control Dock */}
        <div className="slide-control-dock">
          <button 
            type="button" 
            className="dock-btn" 
            onClick={handlePrevSlide}
            title="Previous Card"
            aria-label="Previous Card"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>

          <div className="dock-counter">
            <span>{String(activeCardIndex + 1).padStart(2, '0')}</span>
            <span className="text-slate-400 font-normal"> / 12</span>
          </div>

          {/* 12 Interactive dot pills */}
          <div className="dock-dots-row">
            {securityCardsData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectDot(idx)}
                className={`dock-dot-pill ${activeCardIndex === idx ? 'is-active' : ''}`}
                title={`Card ${idx + 1}: ${securityCardsData[idx].title}`}
                aria-label={`Go to card ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            type="button" 
            className="dock-btn" 
            onClick={handleNextSlide}
            title="Next Card"
            aria-label="Next Card"
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </div>

      </section>

      {/* Floating Scroll Back to Top Button */}
      {scrolledPastHero && (
        <button 
          className="floating-top-btn"
          onClick={scrollToTop}
          title="Scroll back to top"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  )
}
