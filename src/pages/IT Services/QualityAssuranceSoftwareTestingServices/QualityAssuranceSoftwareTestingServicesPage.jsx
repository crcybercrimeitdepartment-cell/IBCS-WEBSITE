import { useEffect, useId, useRef, useState } from 'react';
import { Home } from 'lucide-react';
import { QA_PAGE, SERVICES } from './QualityAssuranceSoftwareTestingServicesPageData.js';
export { QA_PAGE, SERVICES };

const styles = `
/* ==========================================================================
   RESET & BASE STYLES
   ========================================================================== */
html,
body,
#root {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  background: #ffffff;
}

/* ==========================================================================
   PEDESTAL ROTATION & GLOW KEYFRAMES
   ========================================================================== */
@keyframes pedestalRotateCW {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -1000; }
}

@keyframes pedestalRotateCCW {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1000; }
}

@keyframes pedestalPulseGlow {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.95; }
}

@keyframes frontSweepWave {
  0% { stroke-dashoffset: 460; opacity: 0.2; }
  50% { opacity: 1; }
  100% { stroke-dashoffset: -460; opacity: 0.2; }
}

@keyframes serverLedBlink {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
}

.anim-pedestal-cw-fast { animation: pedestalRotateCW 8s linear infinite; }
.anim-pedestal-cw-normal { animation: pedestalRotateCW 12s linear infinite; }
.anim-pedestal-cw-slow { animation: pedestalRotateCW 18s linear infinite; }
.anim-pedestal-ccw-normal { animation: pedestalRotateCCW 10s linear infinite; }
.anim-pedestal-ccw-slow { animation: pedestalRotateCCW 16s linear infinite; }
.anim-pedestal-pulse { animation: pedestalPulseGlow 3s ease-in-out infinite; }
.anim-front-sweep { animation: frontSweepWave 3.5s ease-in-out infinite; }
.anim-led-blink { animation: serverLedBlink 1.8s ease-in-out infinite; }

/* ==========================================================================
   QUANTUM LAB BOOT & SYNTHESIS RELOAD ANIMATION SEQUENCE
   ========================================================================== */
@keyframes bootHeader {
  0% { opacity: 0; transform: translateY(-16px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes bootPedestal {
  0% { opacity: 0; transform: scale(0.72); }
  65% { opacity: 1; transform: scale(1.025); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes bootFlask {
  0% { opacity: 0; transform: translateY(45px) scale(0.9); }
  70% { opacity: 1; transform: translateY(-5px) scale(1.015); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes bootLiquid {
  0% { opacity: 0; transform: scaleY(0); }
  65% { opacity: 1; transform: scaleY(1.05); }
  100% { opacity: 1; transform: scaleY(1); }
}
@keyframes bootRails {
  0% { opacity: 0; transform: scale(0.65); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes bootNode {
  0% { opacity: 0; transform: scale(0); }
  75% { opacity: 1; transform: scale(1.15); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes bootCard {
  0% { opacity: 0; transform: translateX(35px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes bootControls {
  0% { opacity: 0; transform: translateY(24px); }
  100% { opacity: 1; transform: translateY(0); }
}

.anim-boot-header { animation: bootHeader 0.75s cubic-bezier(0.16, 1, 0.3, 1) both; }
.anim-boot-pedestal { transform-origin: 500px 850px; animation: bootPedestal 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both; }
.anim-boot-flask { transform-origin: 500px 600px; animation: bootFlask 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both; }
.anim-boot-liquid { transform-origin: 500px 730px; animation: bootLiquid 0.9s cubic-bezier(0.2, 0.95, 0.3, 1) 0.45s both; }
.anim-boot-rails { transform-origin: 500px 427px; animation: bootRails 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both; }
.anim-boot-node { animation: bootNode 0.85s cubic-bezier(0.2, 0.9, 0.3, 1.15) both; }
.anim-boot-card { animation: bootCard 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both; }
.anim-boot-controls { animation: bootControls 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both; }

/* ==========================================================================
   LABORATORY FLASK CONTINUOUS VAPOR & STEAM ANIMATIONS
   ========================================================================== */
@keyframes vaporFloat1 {
  0% { opacity: 0; transform: translateY(0) translateX(0) scale(0.6) rotate(0deg); }
  20% { opacity: 0.75; }
  60% { opacity: 0.45; transform: translateY(-50px) translateX(-22px) scale(1.3) rotate(-8deg); }
  100% { opacity: 0; transform: translateY(-115px) translateX(-40px) scale(1.85) rotate(-16deg); }
}

@keyframes vaporFloat2 {
  0% { opacity: 0; transform: translateY(0) translateX(0) scale(0.5) rotate(0deg); }
  25% { opacity: 0.8; }
  65% { opacity: 0.5; transform: translateY(-55px) translateX(20px) scale(1.35) rotate(10deg); }
  100% { opacity: 0; transform: translateY(-120px) translateX(35px) scale(2.0) rotate(18deg); }
}

@keyframes vaporFloat3 {
  0% { opacity: 0; transform: translateY(0) translateX(0) scale(0.7); }
  20% { opacity: 0.7; }
  55% { opacity: 0.45; transform: translateY(-45px) translateX(6px) scale(1.25); }
  100% { opacity: 0; transform: translateY(-105px) translateX(-10px) scale(1.9); }
}

@keyframes vaporPuff {
  0% { opacity: 0; transform: translateY(0) scale(0.4); }
  25% { opacity: 0.7; }
  100% { opacity: 0; transform: translateY(-75px) scale(1.75); }
}

@keyframes vaporParticleRise {
  0% { opacity: 0; transform: translateY(0) translateX(0) scale(0.5); }
  20% { opacity: 0.9; }
  80% { opacity: 0.4; }
  100% { opacity: 0; transform: translateY(-125px) translateX(var(--drift, 15px)) scale(1.6); }
}

@keyframes vaporNeckRise {
  0% { opacity: 0; transform: translateY(25px); }
  40% { opacity: 0.6; }
  100% { opacity: 0; transform: translateY(-35px); }
}

.qa-vapor-generator { pointer-events: none; }
.qa-vapor-plume-1 { transform-box: fill-box; transform-origin: center bottom; animation: vaporFloat1 3.5s ease-out infinite; }
.qa-vapor-plume-2 { transform-box: fill-box; transform-origin: center bottom; animation: vaporFloat2 3.9s ease-out infinite; }
.qa-vapor-plume-3 { transform-box: fill-box; transform-origin: center bottom; animation: vaporFloat3 3.2s ease-out infinite; }
.qa-vapor-puff { transform-box: fill-box; transform-origin: center center; animation: vaporPuff 2.9s ease-out infinite; }
.qa-vapor-particle { transform-box: fill-box; transform-origin: center center; animation: vaporParticleRise 3.6s ease-out infinite; }
.qa-vapor-neck-1 { animation: vaporNeckRise 3.3s ease-in-out infinite; }
.qa-vapor-neck-2 { animation: vaporNeckRise 3.8s ease-in-out infinite; animation-delay: 1.6s; }

/* ==========================================================================
   LIQUID BUBBLES & PARTICLES FLOATING MOVEMENT
   ========================================================================== */
@keyframes bubbleDrift0 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  35% { transform: translateY(-9px) translateX(3px); }
  70% { transform: translateY(-3px) translateX(-2px); }
}

@keyframes bubbleDrift1 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  40% { transform: translateY(7px) translateX(-4px); }
  75% { transform: translateY(-5px) translateX(2px); }
}

@keyframes bubbleDrift2 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  30% { transform: translateY(-6px) translateX(-3px); }
  65% { transform: translateY(6px) translateX(3px); }
}

@keyframes bubbleDrift3 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  45% { transform: translateY(9px) translateX(2px); }
  80% { transform: translateY(-4px) translateX(-3px); }
}

.qa-liquid-bubble { transform-box: fill-box; transform-origin: center center; }
.qa-bubble-drift-0 { animation: bubbleDrift0 3.8s ease-in-out infinite; }
.qa-bubble-drift-1 { animation: bubbleDrift1 4.2s ease-in-out infinite; }
.qa-bubble-drift-2 { animation: bubbleDrift2 3.5s ease-in-out infinite; }
.qa-bubble-drift-3 { animation: bubbleDrift3 4.6s ease-in-out infinite; }

@keyframes particleDrift0 {
  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.35; }
  50% { transform: translateY(-8px) translateX(2.5px); opacity: 0.85; }
}

@keyframes particleDrift1 {
  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
  50% { transform: translateY(6px) translateX(-3px); opacity: 0.3; }
}

@keyframes particleDrift2 {
  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.25; }
  50% { transform: translateY(-7px) translateX(-2.5px); opacity: 0.8; }
}

@keyframes particleDrift3 {
  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.65; }
  50% { transform: translateY(5.5px) translateX(3px); opacity: 0.3; }
}

.qa-liquid-particle { transform-box: fill-box; transform-origin: center center; }
.qa-particle-drift-0 { animation: particleDrift0 3.2s ease-in-out infinite; }
.qa-particle-drift-1 { animation: particleDrift1 3.7s ease-in-out infinite; }
.qa-particle-drift-2 { animation: particleDrift2 4.1s ease-in-out infinite; }
.qa-particle-drift-3 { animation: particleDrift3 3.4s ease-in-out infinite; }

/* ==========================================================================
   PAGE LAYOUT & CONTAINER ALIGNMENT (TOP SPACE REMOVED)
   ========================================================================== */
.qa-design {
  min-height: 100svh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-x: hidden;
  background: #ffffff;
  color: #122544;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  padding: 8px 24px 36px; /* Top space eliminated! */
  margin: 0 auto;
  box-sizing: border-box;
}

.qa-design *,
.qa-design *::before,
.qa-design *::after {
  box-sizing: border-box;
}

.qa-design__intro {
  width: 100%;
  max-width: 1100px;
  text-align: center;
  margin: 0 auto 16px;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qa-design__intro h1 {
  margin: 0 auto 8px;
  max-width: 1000px;
  font-size: clamp(24px, 2.7vw, 40px);
  font-weight: 800;
  line-height: 1.16;
  letter-spacing: -0.03em;
  color: #0b2244;
  text-align: center;
  text-wrap: balance;
}

.qa-design__intro p {
  max-width: 920px;
  margin: 0 auto;
  font-size: clamp(14px, 1.1vw, 16px);
  line-height: 1.68;
  color: #526176;
  text-align: center;
}

.qa-content-layout {
  width: 100%;
  max-width: 1440px;
  display: grid;
  grid-template-columns: minmax(0, 1.14fr) minmax(0, 1fr);
  align-items: center;
  justify-content: center;
  gap: clamp(20px, 3.5vw, 54px);
  margin: 0 auto;
}

.qa-visual-column,
.qa-info-column {
  min-width: 0;
  width: 100%;
}

.qa-visual-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.qa-visual-column .qa-design__art {
  display: block;
  width: min(100%, 780px);
  height: auto;
  aspect-ratio: 1;
  isolation: isolate;
  margin: 0 auto;
}

.qa-orbit-icon {
  cursor: pointer;
  outline: none;
  transition: filter 0.2s ease, opacity 0.2s ease;
  will-change: transform, opacity;
}
.qa-orbit-icon:hover {
  filter: brightness(1.25) drop-shadow(0 0 10px rgba(0, 206, 255, 0.5));
}
.qa-orbit-icon:focus-visible {
  outline: none;
}
.qa-orbit-icon:focus-visible circle {
  stroke: #ffb020;
  stroke-width: 5;
}

/* ==========================================================================
   INFO COLUMN: GLASSMORPHISM CARD & CONTROLS (HIGH FIDELITY REDESIGN)
   ========================================================================== */
.qa-info-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-self: center;
  max-width: 620px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

/* Ambient glow & cyber dot pattern behind the cards */
.qa-info-column::before {
  content: "";
  position: absolute;
  top: -6%;
  right: -8%;
  width: 116%;
  height: 112%;
  background: radial-gradient(circle at 65% 35%, rgba(195, 230, 255, 0.5) 0%, rgba(225, 242, 255, 0.25) 45%, rgba(255, 255, 255, 0) 75%);
  pointer-events: none;
  z-index: 0;
  border-radius: 40px;
}

.qa-info-column::after {
  content: "";
  position: absolute;
  top: -24px;
  right: -20px;
  width: 130px;
  height: 110px;
  background-image: radial-gradient(#93c5fd 1.5px, transparent 1.5px);
  background-size: 12px 12px;
  opacity: 0.55;
  pointer-events: none;
  z-index: 0;
}

/* 1. TOP SERVICE DETAIL CARD (FROSTED GLASSMORPHISM) */
.qa-service-detail {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 100%;
  padding: 32px 36px 30px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(28px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border: 1.5px solid rgba(255, 255, 255, 0.95);
  border-radius: 32px;
  min-height: 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 50px rgba(0, 102, 255, 0.08), 0 4px 20px rgba(0, 0, 0, 0.02);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.qa-service-detail:hover {
  box-shadow: 0 24px 60px rgba(0, 102, 255, 0.12), 0 6px 24px rgba(0, 0, 0, 0.03);
}

.qa-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 14px;
}

.qa-card-accent-pill {
  width: 48px;
  height: 6px;
  border-radius: 9999px;
  background: #0066ff;
  margin-top: 4px;
  box-shadow: 0 2px 8px rgba(0, 102, 255, 0.4);
}

.qa-card-badge {
  width: 52px;
  height: 52px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.9);
  border: 1.5px solid rgba(220, 238, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 22px rgba(0, 102, 255, 0.08);
  flex-shrink: 0;
  transition: transform 0.25s ease;
}

.qa-card-badge:hover {
  transform: scale(1.05);
}

.qa-service-detail h2 {
  margin: 0 0 16px;
  font-size: clamp(26px, 2.3vw, 34px);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.025em;
  display: block;
  overflow-wrap: anywhere;
}

.qa-title-main {
  color: #0b1e36;
}

.qa-title-highlight {
  color: #0062ff;
}

.qa-service-detail p {
  margin: 0;
  color: #4b5563;
  font-size: clamp(14px, 1.05vw, 15.5px);
  line-height: 1.82;
  text-align: justify;
  text-justify: inter-word;
  flex: 1;
}

/* 2. BOTTOM CONTROLS CARD (MATCHING GLASS CONTAINER) */
.qa-controls {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 22px 24px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(28px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border: 1.5px solid rgba(255, 255, 255, 0.95);
  border-radius: 28px;
  box-shadow: 0 20px 50px rgba(0, 102, 255, 0.08), 0 4px 20px rgba(0, 0, 0, 0.02);
}

.qa-playback {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
}

/* Previous & Next Pill Buttons (Dark Navy) */
.qa-btn-prev,
.qa-btn-next {
  background: #002244;
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  padding: 10px 20px;
  font-size: 13.5px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 34, 68, 0.35);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
  touch-action: manipulation;
}

.qa-btn-prev:hover,
.qa-btn-next:hover {
  background: #00172e;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 34, 68, 0.45);
}

.qa-btn-prev:active,
.qa-btn-next:active {
  transform: translateY(0);
}

/* Pause / Play Pill Button (Cyan to Electric Blue Gradient) */
.qa-btn-play-pause {
  background: linear-gradient(135deg, #00d2ff 0%, #0066ff 100%);
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  padding: 10px 22px;
  font-size: 13.5px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: 0 4px 18px rgba(0, 102, 255, 0.45);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
  touch-action: manipulation;
}

.qa-btn-play-pause:hover {
  filter: brightness(1.08);
  transform: translateY(-2px);
  box-shadow: 0 6px 22px rgba(0, 102, 255, 0.55);
}

.qa-btn-play-pause:active {
  transform: translateY(0);
}

/* Counter Display */
.qa-count-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 76px;
  text-align: center;
  user-select: none;
}

.qa-count-display strong {
  font-size: 17.5px;
  font-weight: 800;
  line-height: 1.15;
  color: #0b1e36;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.01em;
}

.qa-count-display span {
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #64748b;
  text-transform: uppercase;
  margin-top: 2px;
}

/* Circular Reload Button */
.qa-btn-reload {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #ffffff;
  border: 1.5px solid #dceaf4;
  color: #0066ff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.08);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
  touch-action: manipulation;
}

.qa-btn-reload:hover {
  background: #f0f7ff;
  border-color: #0066ff;
  transform: rotate(60deg);
  box-shadow: 0 6px 16px rgba(0, 102, 255, 0.16);
}

.qa-btn-reload:active {
  transform: rotate(180deg);
}

/* Explore Services Dropdown Picker */
.qa-picker {
  position: relative;
  width: 100%;
}

.qa-picker-summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 18px;
  border: 1.5px solid #dceaf4;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 2px 8px rgba(0, 102, 255, 0.04);
  touch-action: manipulation;
  transition: all 0.2s ease;
}

.qa-picker-summary::-webkit-details-marker {
  display: none;
}

.qa-picker-summary:hover {
  border-color: #badcf2;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.08);
}

.qa-picker[open] .qa-picker-summary {
  border-color: #0066ff;
  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.12);
  background: #ffffff;
}

.qa-picker[open] .qa-picker-chevron svg {
  transform: rotate(180deg);
}

.qa-picker-summary-text {
  flex: 1;
  min-width: 0;
}

.qa-picker-summary-text small {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #64748b;
  text-transform: uppercase;
  margin-bottom: 2px;
}

.qa-picker-summary-text strong {
  display: block;
  font-size: 14.5px;
  font-weight: 700;
  line-height: 1.4;
  color: #0b1e36;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.qa-picker-chevron {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  transition: transform 0.2s ease;
}

.qa-picker-panel {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 0;
  right: 0;
  z-index: 50;
  padding: 16px;
  border: 1.5px solid #dceaf4;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 20px 50px rgba(11, 30, 54, 0.18);
}

.qa-search {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f2f7fb;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid #e1effe;
}

.qa-search input {
  width: 100%;
  min-width: 0;
  border: none;
  background: transparent;
  color: #153a56;
  font: inherit;
  font-size: 14px;
  outline: none;
}

.qa-search:focus-within {
  border-color: #0066ff;
  box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.15);
}

.qa-results-label {
  color: #718597;
  font-size: 12px;
  margin: 12px 4px 8px;
}

.qa-service-options {
  max-height: min(280px, 45dvh);
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
}

.qa-service-option {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  text-align: left;
  border: 0;
  border-radius: 10px;
  background: #ffffff;
  color: #2d4f67;
  font-size: 13px !important;
  line-height: 1.45;
  min-height: 44px;
  cursor: pointer;
  overflow-wrap: anywhere;
  transition: background 0.15s ease;
}

.qa-service-option:hover {
  background: #f0f8fe;
}

.qa-service-option[aria-current="true"] {
  background: #e3f3ff;
  color: #0062ff;
  font-weight: 700;
}

.qa-option-number {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  background: #eef5fa;
  font-size: 11px;
}

.qa-service-option > span:nth-child(2) {
  flex: 1;
}

.qa-controls button:focus-visible,
.qa-picker summary:focus-visible {
  outline: 3px solid #0066ff;
  outline-offset: 3px;
}

/* ==========================================================================
   RESPONSIVE DESIGN BREAKPOINTS (FOR ALL DEVICES)
   ========================================================================== */

/* 1. Large Monitors (>= 1600px) */
@media (min-width: 1600px) {
  .qa-content-layout {
    max-width: 1560px;
    gap: 60px;
  }
  .qa-visual-column .qa-design__art {
    width: min(100%, 860px);
  }
  .qa-info-column {
    max-width: 680px;
  }
}

/* 2. Tablet & Medium Laptops (769px - 1080px) */
@media (max-width: 1080px) {
  .qa-design {
    padding: 8px 20px 32px;
  }
  .qa-content-layout {
    grid-template-columns: minmax(0, 1fr);
    max-width: 740px;
    gap: 20px;
  }
  .qa-visual-column {
    max-width: 600px;
    margin: 0 auto;
  }
  .qa-info-column {
    max-width: 640px;
  }
  .qa-info-column .qa-service-detail {
    min-height: auto;
    padding: 26px 24px;
  }
  .qa-info-column .qa-service-detail h2 {
    min-height: auto;
  }
  .qa-picker-panel {
    position: static;
    margin-top: 10px;
    box-shadow: none;
  }
}

/* 3. Mobile Devices (<= 768px) */
@media (max-width: 768px) {
  .qa-design {
    padding: 6px 14px 28px;
  }
  .qa-design__intro {
    margin-bottom: 12px;
    padding: 0 4px;
  }
  .qa-design__intro h1 {
    font-size: clamp(20px, 5.8vw, 28px);
    margin-bottom: 8px;
    line-height: 1.22;
  }
  .qa-design__intro p {
    font-size: 13.5px;
    line-height: 1.55;
  }
  .qa-content-layout {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
    max-width: 100%;
  }
  .qa-visual-column {
    max-width: 480px;
    margin: 0 auto;
  }
  .qa-visual-column .qa-design__art {
    width: 100%;
  }
  .qa-info-column {
    gap: 16px;
    max-width: 100%;
  }
  .qa-service-detail {
    padding: 22px 18px 20px;
    border-radius: 22px;
    min-height: auto;
  }
  .qa-service-detail h2 {
    font-size: 21px;
    margin-bottom: 12px;
    min-height: auto;
  }
  .qa-service-detail p {
    font-size: 14px;
    line-height: 1.68;
    margin-bottom: 0;
  }
  .qa-controls {
    padding: 16px 14px;
    gap: 14px;
    border-radius: 20px;
  }
  .qa-playback {
    width: 100%;
    justify-content: space-between;
    gap: 6px;
  }
  .qa-btn-prev,
  .qa-btn-next {
    padding: 8px 14px;
    font-size: 12px;
    gap: 4px;
  }
  .qa-btn-play-pause {
    padding: 8px 16px;
    font-size: 12px;
    gap: 6px;
  }
  .qa-count-display {
    min-width: 60px;
  }
  .qa-count-display strong {
    font-size: 15px;
  }
  .qa-count-display span {
    font-size: 8.5px;
  }
  .qa-btn-reload {
    width: 38px;
    height: 38px;
  }
  .qa-picker-summary {
    padding: 11px 14px;
  }
  .qa-picker-summary-text strong {
    font-size: 13.5px;
  }
  .qa-picker-panel {
    position: static;
    margin-top: 10px;
    box-shadow: none;
    padding: 12px;
  }
}

/* 4. Compact Mobile (< 420px) */
@media (max-width: 420px) {
  .qa-design {
    padding-left: 8px;
    padding-right: 8px;
  }
  .qa-controls {
    padding: 12px 10px;
  }
  .qa-playback {
    gap: 4px;
  }
  .qa-btn-prev,
  .qa-btn-next {
    padding: 7px 10px;
    font-size: 11px;
  }
  .qa-btn-play-pause {
    padding: 7px 12px;
    font-size: 11px;
  }
  .qa-count-display {
    min-width: 48px;
  }
  .qa-count-display strong {
    font-size: 13.5px;
  }
  .qa-btn-reload {
    width: 34px;
    height: 34px;
  }
}

/* 5. Mobile Landscape / Small Height Screens */
@media (max-height: 520px) and (orientation: landscape) {
  .qa-design {
    padding-top: 4px;
  }
  .qa-design__intro {
    margin-bottom: 8px;
  }
  .qa-visual-column .qa-design__art {
    width: min(100%, 340px);
  }
  .qa-service-options {
    max-height: 38dvh;
  }
}
`;

const serviceAt = (index) => SERVICES[((index % SERVICES.length) + SERVICES.length) % SERVICES.length];

function ControlIcon({ type }) {
  const paths = { previous: 'M15 5l-7 7 7 7', next: 'M9 5l7 7-7 7', pause: 'M8 5v14M16 5v14', play: 'M8 5l11 7-11 7V5', down: 'M6 9l6 6 6-6', check: 'M5 12l4 4L19 6', search: 'M21 21l-5-5', reload: 'M21 12a9 9 0 1 1-2.64-6.36L21 8M21 3v5h-5' };
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
    {type === 'search' && <circle cx="10" cy="10" r="7" />}
    <path d={paths[type]} />
  </svg>;
}


function renderTwoToneTitle(name) {
  if (!name) return null;
  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    return <span className="qa-title-main">{words[0]}</span>;
  }
  const mainWords = words.slice(0, -1).join(' ');
  const lastWord = words[words.length - 1];
  return (
    <>
      <span className="qa-title-main">{mainWords} </span>
      <span className="qa-title-highlight">{lastWord}</span>
    </>
  );
}



function Icon({ type }) {
  switch (type) {
    case 'checklist': return <><rect x="-27" y="-29" width="54" height="61" rx="4" /><path d="M-12-30v-9h8a9 9 0 0 1 18 0h8v14h-34z" stroke="#001343" strokeWidth="4" /><circle cy="-39" cx="5" r="3" fill="#002368" /><path d="m-14 4 10 10 23-23" fill="none" stroke="#002368" strokeWidth="6" /></>;
    case 'shield': return <><path d="M0-35C-12-26-20-27-29-26v25C-29 17-13 31 0 38 13 31 29 17 29-1v-25C20-27 12-26 0-35Z" /><path d="m0-13 5 15 10 0-11 7-4 16-4-16-10-7h10z" fill="#002368" /></>;
    case 'phone': return <><rect x="-25" y="-35" width="50" height="72" rx="6" /><rect x="-18" y="-24" width="36" height="45" rx="1" fill="#000b24" /><path d="M-5-29H5" stroke="#00306e" strokeWidth="3" strokeLinecap="round" /><circle cy="29" r="4" fill="#00306e" /></>;
    case 'globe': return <><circle r="32" /><g fill="none" stroke="#00256d" strokeWidth="3.5"><ellipse rx="14" ry="30" /><path d="M0-30V30M-30 0H30M-23-20Q0-9 23-20M-23 20Q0 9 23 20" /></g></>;
    case 'cloud': return <><path d="M-23 23C-46 23-45-8-24-9-24-32 7-40 19-17 42-18 47 21 23 23Z" /><path d="M0 10V-8m-7 7 7-8 7 8" stroke="#00236b" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></>;
    case 'database': return <><path d="M-27-21V23C-27 39 27 39 27 23v-44Z" /><ellipse cy="-21" rx="27" ry="12" fill="#d9ffff" stroke="#fff" strokeWidth="1.5" /><path d="M-27-6c0 16 54 16 54 0M-27 12c0 16 54 16 54 0" fill="none" stroke="#002263" strokeWidth="4" /></>;
    case 'chart': return <><path d="M-31 18-20 8v23h-11zm17-5L-3 2v29h-11zm17-6 11 8v16H3zm17-4 11-11v39H20z" /><path d="m-31 9 23-25 15 13 25-27m-14 0h14v14" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" /></>;
    default: return <><path d="m-6-35 12 0 2 9 8 3 8-5 9 9-5 8 3 8 9 2v12l-9 2-3 8 5 8-9 9-8-5-8 3-2 9H-6l-2-9-8-3-8 5-9-9 5-8-3-8-9-2V-1l9-2 3-8-5-8 9-9 8 5 8-3Z" /><circle r="13" cy="5" fill="#00112d" /></>;
  }
}

const getEllipsePath = (cx, cy, rx, ry) =>
  `M ${cx - rx} ${cy} a ${rx} ${ry} 0 1 0 ${2 * rx} 0 a ${rx} ${ry} 0 1 0 ${-2 * rx} 0`;

/** Standalone, responsive recreation of the supplied QA laboratory composition. */
export default function QualityAssuranceCyberSecurity({ onClose, onHome }) {
  const id = useId().replace(/:/g, '');
  const pickerRef = useRef(null);
  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const [browsing, setBrowsing] = useState(false);
  const matches = SERVICES.filter(service => `${service.number} ${service.name}`.toLowerCase().includes(query.trim().toLowerCase()));

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
  const [position, setPosition] = useState(0);
  const positionRef = useRef(0);
  const targetPosRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const [bootKey, setBootKey] = useState(0);
  const [isBooted, setIsBooted] = useState(false);
  const bootStartRef = useRef(performance.now());

  useEffect(() => {
    setIsBooted(false);
    bootStartRef.current = performance.now();
    const timer = setTimeout(() => {
      setIsBooted(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, [bootKey]);

  const step = Math.round(position);
  const active = serviceAt(step);

  const choose = (targetIndex) => {
    const current = positionRef.current;
    let target = targetIndex;
    const diff = target - current;
    if (Math.abs(diff) > 4) {
      positionRef.current = target - Math.sign(diff) * 1.2;
    }
    targetPosRef.current = target;
  };

  // Ultra-smooth animation loop: continuous rotation & fluid ease-in-out transitions
  useEffect(() => {
    let frame;
    let previousTime;
    const animate = (now) => {
      if (previousTime !== undefined) {
        const elapsed = Math.min(now - previousTime, 64);

        if (!paused && !browsing) {
          const bootElapsed = now - bootStartRef.current;
          const bootFactor = Math.min(Math.max((bootElapsed - 600) / 1200, 0), 1);
          const easedBoot = bootFactor * bootFactor * (3 - 2 * bootFactor);
          targetPosRef.current += (elapsed / 7200) * easedBoot;
        }

        const diff = targetPosRef.current - positionRef.current;
        if (Math.abs(diff) > 0.0001) {
          const speed = (!paused && !browsing) ? 0.14 : 0.08;
          positionRef.current += diff * speed;
          setPosition(positionRef.current);
        }
      }
      previousTime = now;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [paused, browsing]);

  const nodes = [];
  const baseIndex = Math.floor(position);
  for (let offset = -4; offset <= 4; offset++) {
    const index = baseIndex + offset;
    const angle = (index - position) * (Math.PI / 4);
    let normAngle = ((angle % (2 * Math.PI)) + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    const bottomDist = Math.PI - Math.abs(normAngle);
    const opacity = Math.min(1, Math.max(0, bottomDist / 0.45));
    if (opacity > 0.01) {
      const x = 500 + Math.sin(angle) * 315;
      const y = 427 - Math.cos(angle) * 335;
      const isSelected = Math.round(position) === index;
      const scale = isSelected ? 0.94 : 0.86;
      nodes.push({
        index,
        service: serviceAt(index),
        x,
        y,
        opacity,
        scale,
        isSelected
      });
    }
  }
  const ref = (name) => `url(#${id}-${name})`;
  const flask = 'M446 211H554V330Q554 346 566 374L674 636Q704 717 617 729Q500 746 383 729Q296 717 326 636L434 374Q446 346 446 330Z';
  return (
    <main className="qa-design" key={bootKey}>
      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-7xl mx-auto pt-4 pb-2 px-4 sm:px-6 lg:px-8 flex items-center justify-start gap-3 z-40 relative">
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

      <style>{styles}</style>
      <header className={`qa-design__intro ${!isBooted ? "anim-boot-header" : ""}`}>
        <h1>{QA_PAGE.heading}</h1>
        <p>{QA_PAGE.description}</p>
      </header>
      <section className="qa-content-layout" aria-label="Quality assurance service explorer">
      <div className="qa-visual-column">
      <svg className="qa-design__art" viewBox="0 0 1000 1000" role="group" aria-labelledby={`${id}-title ${id}-description`}>
        <title id={`${id}-title`}>Quality assurance laboratory</title>
        <desc id={`${id}-description`}>A luminous glass flask filled with blue liquid stands on a metallic platform, surrounded by eight connected technology icons.</desc>
        <defs>
          <linearGradient id={`${id}-metal`} x2="0" y2="1"><stop stopColor="#020d24" /><stop offset=".24" stopColor="#2475d7" /><stop offset=".34" stopColor="#d8e8ff" /><stop offset=".43" stopColor="#344c7d" /><stop offset=".68" stopColor="#020815" /><stop offset=".9" stopColor="#061d55" /><stop offset="1" stopColor="#19bfff" /></linearGradient>
          <linearGradient id={`${id}-glass`}><stop stopColor="#dcffff" stopOpacity=".85" /><stop offset=".055" stopColor="#00eaff" stopOpacity=".65" /><stop offset=".15" stopColor="#004aff" stopOpacity=".17" /><stop offset=".48" stopColor="#005dff" stopOpacity=".04" /><stop offset=".8" stopColor="#0662ff" stopOpacity=".25" /><stop offset=".94" stopColor="#b3ffff" stopOpacity=".8" /><stop offset="1" stopColor="#00b9ff" stopOpacity=".6" /></linearGradient>
          <linearGradient id={`${id}-liquid`} x2=".25" y2="1"><stop stopColor="#61ffff" /><stop offset=".14" stopColor="#00c9f6" stopOpacity=".82" /><stop offset=".53" stopColor="#005aff" stopOpacity=".85" /><stop offset=".85" stopColor="#008dff" /><stop offset="1" stopColor="#00ffef" /></linearGradient>
          <linearGradient id={`${id}-icon`} x2=".3" y2="1"><stop stopColor="#fff" /><stop offset=".4" stopColor="#e2ffff" /><stop offset="1" stopColor="#21caff" /></linearGradient>
          <filter id={`${id}-glow`} x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="5" /><feComposite in="SourceGraphic" /></filter>
          <filter id={`${id}-laserGlow`} x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                    <filter id={`${id}-vaporBlur`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <linearGradient id={`${id}-vaporGrad`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#00e5ff" stopOpacity="0" />
            <stop offset="20%" stopColor="#7bf0ff" stopOpacity="0.75" />
            <stop offset="65%" stopColor="#cff9ff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`${id}-vaporCyan`} x1="0" y1="1" x2="0.3" y2="0">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#67e8f9" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <clipPath id={`${id}-flask`}><path d={flask} /></clipPath>
        </defs>
        <rect width="1000" height="1000" fill="#fff" />
        <g className={!isBooted ? "anim-boot-pedestal" : ""}>
        <g stroke="#009eff" fill="none">
          {/* Outer base track with continuous rotating cyber dashes and laser dots */}
          <path d={getEllipsePath(500, 868, 480, 104)} fill="none" stroke="#009eff" strokeWidth="2.5" strokeDasharray="60 20 100 20 40 20 140 20 80 20" pathLength="1000" opacity=".75" className="anim-pedestal-cw-slow" />
          <path d={getEllipsePath(500, 868, 480, 104)} fill="none" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" strokeDasharray="4 246" filter={ref('laserGlow')} pathLength="1000" className="anim-pedestal-cw-slow" />

          {/* Bottom bevel metallic wall */}
          <path d="M35 854V892C35 1020 955 1020 955 892V854" fill={ref('metal')} strokeWidth="2" />

          {/* Bottom rim edge neon rotation */}
          <path d={getEllipsePath(495, 892, 460, 102)} fill="none" stroke="#00dfff" strokeWidth="3" strokeDasharray="140 40 70 30 180 40" pathLength="1000" filter={ref('glow')} className="anim-pedestal-cw-normal" />
          <path d={getEllipsePath(495, 892, 460, 102)} fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeDasharray="4 246" filter={ref('laserGlow')} pathLength="1000" className="anim-pedestal-cw-normal" />

          {/* Tier 3 Platform Base Surface */}
          <ellipse cx="495" cy="854" rx="460" ry="102" fill="#011335" stroke="#00dfff" strokeWidth="10" />

          {/* Outer rotating ring on Tier 3 surface */}
          <path d={getEllipsePath(495, 854, 460, 102)} fill="none" stroke="#e0ffff" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="50 30 120 40 30 25 160 45" pathLength="1000" filter={ref('glow')} className="anim-pedestal-cw-fast" />
          <path d={getEllipsePath(495, 854, 460, 102)} fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" strokeDasharray="4 196" pathLength="1000" filter={ref('laserGlow')} className="anim-pedestal-cw-fast" />

          {/* Inner counter-rotating ring on Tier 3 surface */}
          <ellipse cx="495" cy="856" rx="441" ry="88" stroke="#135bff" strokeWidth="4" />
          <path d={getEllipsePath(495, 856, 441, 88)} fill="none" stroke="#87f4ff" strokeWidth="4" strokeLinecap="round" strokeDasharray="80 40 40 25 150 40 75 50" pathLength="1000" filter={ref('glow')} className="anim-pedestal-ccw-normal" />
          <path d={getEllipsePath(495, 856, 441, 88)} fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeDasharray="3 247" pathLength="1000" filter={ref('laserGlow')} className="anim-pedestal-ccw-normal" />

          {/* Tier 2 Middle metallic riser wall */}
          <path d="M126 791V835C126 958 864 958 864 835V791" fill={ref('metal')} strokeWidth="3" />

          {/* Tier 2 Surface & rotating tracks */}
          <ellipse cx="495" cy="791" rx="369" ry="94" fill={ref('metal')} strokeWidth="3" />
          <path d={getEllipsePath(495, 791, 369, 94)} fill="none" stroke="#70eaff" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="90 35 45 20 160 40 60 40" pathLength="1000" filter={ref('glow')} className="anim-pedestal-ccw-normal" />

          {/* Tier 2 Inner recess ring with cyber streaks & laser dots */}
          <ellipse cx="495" cy="786" rx="342" ry="76" fill="#000818" stroke="#0277ff" strokeWidth="2" />
          <path d={getEllipsePath(495, 786, 342, 76)} fill="none" stroke="#a0f5ff" strokeWidth="3.5" strokeDasharray="110 40 50 30 180 50" pathLength="1000" filter={ref('glow')} className="anim-pedestal-ccw-slow" />
          <path d={getEllipsePath(495, 786, 342, 76)} fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeDasharray="4 246" pathLength="1000" filter={ref('laserGlow')} className="anim-pedestal-ccw-slow" />

          {/* Tier 2 Dotted tech circle (50 precision dots orbiting CW) */}
          <path d={getEllipsePath(495, 785, 327, 68)} fill="none" stroke="#67e8f9" strokeWidth="3.5" strokeDasharray="4 16" pathLength="1000" opacity=".95" filter={ref('glow')} className="anim-pedestal-cw-fast" />

          {/* Tier 1 Top metallic riser wall */}
          <path d="M245 738 251 778C265 855 730 855 744 778L726 738Z" fill={ref('metal')} strokeWidth="2" />

          {/* Tier 1 Surface under the flask */}
          <ellipse cx="485" cy="738" rx="241" ry="50" fill="#063583" stroke="#558aff" strokeWidth="3" />
          <path d={getEllipsePath(485, 738, 241, 50)} fill="none" stroke="#bafaff" strokeWidth="3.5" strokeDasharray="70 30 130 40 60 30 100 40" pathLength="1000" filter={ref('glow')} className="anim-pedestal-ccw-normal" />
          <path d={getEllipsePath(490, 736, 215, 43)} fill="none" stroke="#ccffff" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="60 30 110 40 40 30 140 50" pathLength="1000" filter={ref('glow')} className="anim-pedestal-cw-fast" />
          <path d={getEllipsePath(490, 736, 215, 43)} fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeDasharray="3 247" pathLength="1000" filter={ref('laserGlow')} className="anim-pedestal-cw-fast" />

          {/* Concentric rotating glowing rings directly below flask liquid */}
          {[225, 205, 185, 150, 110].map((r, i) => (
            <g key={r}>
              <ellipse cx="490" cy="736" rx={r} ry={r / 5} stroke={i % 2 ? '#00eaff' : '#1764ff'} strokeWidth="2" opacity=".45" />
              <path
                d={getEllipsePath(490, 736, r, r / 5)}
                fill="none"
                stroke={i % 2 ? '#c7ffff' : '#38bdf8'}
                strokeWidth={i % 2 ? 3 : 2}
                strokeLinecap="round"
                strokeDasharray="60 40 120 50 50 30 110 40"
                pathLength="1000"
                filter={ref('glow')}
                className={i % 2 ? 'anim-pedestal-ccw-normal' : 'anim-pedestal-cw-normal'}
                style={{ animationDuration: `${7 + i * 2.2}s`, animationDelay: `${-i * 1.2}s` }}
              />
              <path
                d={getEllipsePath(490, 736, r, r / 5)}
                fill="none"
                stroke="#ffffff"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="3 330"
                pathLength="1000"
                filter={ref('laserGlow')}
                className={i % 2 ? 'anim-pedestal-ccw-normal' : 'anim-pedestal-cw-normal'}
                style={{ animationDuration: `${7 + i * 2.2}s`, animationDelay: `${-i * 1.2}s` }}
              />
            </g>
          ))}

          {/* Side glowing neon LED highlight bars with breathing pulse */}
          <path d="M160 825Q186 837 234 847M734 848Q795 837 823 825" stroke="#00cfff" strokeWidth="18" filter={ref('glow')} className="anim-pedestal-pulse" />
          <path d="M160 825Q186 837 234 847M734 848Q795 837 823 825" stroke="#e7ffff" strokeWidth="6" className="anim-pedestal-pulse" />
        </g>
        </g>
        <g className={!isBooted ? "anim-boot-rails" : ""}>
          <ellipse cx="500" cy="427" rx="315" ry="335" fill="none" stroke="#00baff" strokeWidth="1.7" />
          <g fill="#009eea">
            {[[370,119],[628,117],[203,307],[799,307],[201,527],[799,527],[303,624],[697,624],[500,664]].map(([x,y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5.5" />)}
          </g>
        </g>
        {/* Enlarge the flask 4% around its base so it stays seated on the platform. */}
        <g className={!isBooted ? "anim-boot-flask" : ""}>
        <g transform="translate(500 736) scale(1.04) translate(-500 -736)">
        <path d={flask} fill={ref('glass')} stroke="#008fff" strokeWidth="10" filter={ref('glow')} />
        <g clipPath={ref('flask')}>
          <g className={!isBooted ? "anim-boot-liquid" : ""}>
            <path d="M300 460Q398 435 500 456T700 454V751H300Z" fill={ref('liquid')} />
            <ellipse cx="500" cy="458" rx="110" ry="10" fill="#80ffff" fillOpacity=".75" stroke="#e1ffff" strokeWidth="2" />
            {Array.from({ length: 90 }, (_, i) => (
              <circle
                key={i}
                cx={336 + (i * 79) % 322}
                cy={462 + (i * 37) % 270}
                r={i % 7 === 0 ? 3 : 1.2}
                fill="#65ffff"
                opacity={.3 + (i % 4) * .2}
                className={`qa-liquid-particle qa-particle-drift-${i % 4}`}
                style={{
                  animationDelay: `${-(i * 0.17).toFixed(2)}s`,
                  animationDuration: `${2.8 + (i % 5) * 0.7}s`
                }}
              />
            ))}
            <g fill="#03caff" fillOpacity=".3" stroke="#97ffff" strokeWidth="1.5">
              {Array.from({ length: 28 }, (_, i) => {
                const cx = 460 + Math.sin(i * 7) * (i > 15 ? 91 : 25);
                const cy = 270 + i * 16;
                const rx = 3 + i % 6;
                const ry = 4 + i % 7;
                return (
                  <g
                    key={i}
                    className={`qa-liquid-bubble qa-bubble-drift-${i % 4}`}
                    style={{
                      animationDelay: `${-(i * 0.41).toFixed(2)}s`,
                      animationDuration: `${3.4 + (i % 4) * 0.8}s`
                    }}
                  >
                    <ellipse
                      cx={cx}
                      cy={cy}
                      rx={rx}
                      ry={ry}
                      transform={`rotate(${i * 23} ${cx} ${cy})`}
                    />
                  </g>
                );
              })}
            </g>
            <path d="M443 247 550 356 403 479 601 547 367 662 630 683M450 386 556 386M393 484 599 548M348 649 640 649M500 383V731" stroke="#4beaff" strokeWidth=".8" opacity=".2" fill="none" />
            <ellipse cx="500" cy="701" rx="169" ry="35" fill="none" stroke="#26ffff" strokeWidth="5" />
            <ellipse cx="500" cy="698" rx="142" ry="25" fill="none" stroke="#66ffff" strokeWidth="2" />
            <ellipse cx="500" cy="695" rx="65" ry="12" fill="#00ffff" opacity=".55" />

            {/* Rising interior neck vapor tendrils */}
            <g opacity="0.6">
              <path d="M485 435 Q496 385 490 340 T502 270" stroke={ref('vaporCyan')} strokeWidth="14" fill="none" strokeLinecap="round" filter={ref('vaporBlur')} className="qa-vapor-neck-1" />
              <path d="M512 430 Q502 380 508 335 T496 265" stroke={ref('vaporGrad')} strokeWidth="12" fill="none" strokeLinecap="round" filter={ref('vaporBlur')} className="qa-vapor-neck-2" />
            </g>
          </g>
        </g>
        <path d={flask} fill={ref('glass')} stroke="#aeffff" strokeWidth="3" />
        <path d="M453 225V331Q454 347 441 379L333 643Q305 710 384 722M547 225V331Q546 347 559 379L667 643Q695 710 616 722" fill="none" stroke="#54efff" strokeWidth="6" filter={ref('glow')} />
        <path d="M460 229V329Q460 349 449 375L337 648M541 230V329Q541 349 552 375L657 646" fill="none" stroke="#efffff" strokeWidth="7" strokeLinecap="round" />
        <path d="M467 235V330M533 235V330" stroke="#76a5ff" strokeWidth="3" strokeLinecap="round" />
        <rect x="425" y="192" width="150" height="30" rx="14" fill={ref('glass')} stroke="#a1dfff" strokeWidth="3" filter={ref('glow')} />
        <ellipse cx="500" cy="202" rx="69" ry="11" fill="#003283" stroke="#d8ffff" strokeWidth="3" />
        <ellipse cx="500" cy="198" rx="50" ry="5" fill="#001332" stroke="#047dff" strokeWidth="2" />
        <path d="M430 204Q428 215 446 216M554 216Q571 215 569 204" fill="none" stroke="white" strokeWidth="4" />

        {/* Continuous Cyber Vapor & Steam Rising from Flask Mouth */}
        <g className="qa-vapor-generator">
          {/* Plume 1 - Left Drift */}
          <path
            d="M495 196 C478 168 462 136 476 106 C486 86 472 66 456 50 C472 70 506 105 498 140 C493 162 503 184 503 196 Z"
            fill={ref('vaporGrad')}
            filter={ref('vaporBlur')}
            className="qa-vapor-plume-1"
          />
          {/* Plume 2 - Right Drift */}
          <path
            d="M500 196 C516 168 532 138 520 108 C510 88 524 68 540 50 C522 70 494 104 504 140 C508 162 497 184 497 196 Z"
            fill={ref('vaporCyan')}
            filter={ref('vaporBlur')}
            className="qa-vapor-plume-2"
            style={{ animationDelay: '1.2s' }}
          />
          {/* Plume 3 - Center Surge */}
          <path
            d="M488 196 C493 165 480 132 497 96 C507 76 501 60 495 45 C509 60 518 82 510 108 C499 138 515 168 510 196 Z"
            fill={ref('vaporGrad')}
            filter={ref('vaporBlur')}
            className="qa-vapor-plume-3"
            style={{ animationDelay: '2.1s' }}
          />
          {/* Plume 4 - Alternate Left */}
          <path
            d="M497 196 C482 170 470 142 482 112 C492 92 480 72 466 58 C480 76 510 110 502 144 C497 165 505 186 505 196 Z"
            fill={ref('vaporCyan')}
            filter={ref('vaporBlur')}
            className="qa-vapor-plume-1"
            style={{ animationDelay: '1.7s' }}
          />

          {/* Expanding Vapor Ring Puffs */}
          <ellipse cx="500" cy="192" rx="20" ry="6" fill={ref('vaporCyan')} filter={ref('vaporBlur')} className="qa-vapor-puff" />
          <ellipse cx="500" cy="194" rx="16" ry="5" fill="#ffffff" opacity="0.65" filter={ref('vaporBlur')} className="qa-vapor-puff" style={{ animationDelay: '1.4s' }} />
          <ellipse cx="500" cy="193" rx="22" ry="7" fill={ref('vaporGrad')} filter={ref('vaporBlur')} className="qa-vapor-puff" style={{ animationDelay: '2.3s' }} />

          {/* Rising glowing micro vapor orbs */}
          <circle cx="495" cy="190" r="4.5" fill="#a5f3fc" filter={ref('vaporBlur')} className="qa-vapor-particle" style={{ animationDelay: '0.4s', '--drift': '-20px' }} />
          <circle cx="504" cy="188" r="3.5" fill="#e0f2fe" filter={ref('vaporBlur')} className="qa-vapor-particle" style={{ animationDelay: '1.3s', '--drift': '22px' }} />
          <circle cx="498" cy="192" r="5" fill="#67e8f9" filter={ref('vaporBlur')} className="qa-vapor-particle" style={{ animationDelay: '2.2s', '--drift': '10px' }} />
          <circle cx="506" cy="190" r="3" fill="#ffffff" filter={ref('vaporBlur')} className="qa-vapor-particle" style={{ animationDelay: '3.0s', '--drift': '-14px' }} />
          <circle cx="492" cy="189" r="4" fill="#38bdf8" filter={ref('vaporBlur')} className="qa-vapor-particle" style={{ animationDelay: '1.8s', '--drift': '-16px' }} />
        </g>
        </g>
        </g>
        {nodes.map(({ index, service, x, y, opacity, scale, isSelected }) => (
          <g key={service.id} transform={`translate(${x} ${y}) scale(${scale})`}
            opacity={opacity}
            className="qa-orbit-icon" role="button" tabIndex="0" aria-label={`Show ${service.name}`}
            aria-pressed={isSelected} onClick={() => choose(index)}
            onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); choose(index); } }}>
            {!isBooted ? (
              <g className="anim-boot-node" style={{ transformOrigin: '0px 0px' }}>
                <title>{service.name}</title>
                <circle r="65" fill="#001534" stroke={isSelected ? '#00e5ff' : '#00ceff'} strokeWidth={isSelected ? 4.5 : 2} filter={isSelected ? ref('glow') : undefined} />
                <g fill={ref('icon')} color="#e2ffff"><Icon type={service.iconType} /></g>
                <text y="51" textAnchor="middle" fill="#b8eeff" fontSize="12">{service.number}</text>
              </g>
            ) : (
              <>
                <title>{service.name}</title>
                <circle r="65" fill="#001534" stroke={isSelected ? '#00e5ff' : '#00ceff'} strokeWidth={isSelected ? 4.5 : 2} filter={isSelected ? ref('glow') : undefined} />
                <g fill={ref('icon')} color="#e2ffff"><Icon type={service.iconType} /></g>
                <text y="51" textAnchor="middle" fill="#b8eeff" fontSize="12">{service.number}</text>
              </>
            )}
          </g>
        ))}
      </svg>
      </div>
      <div className="qa-info-column">
        <article className={`qa-service-detail ${!isBooted ? "anim-boot-card" : ""}`}>
          <div className="qa-card-header">
            <div className="qa-card-accent-pill" aria-hidden="true" />
            <div className="qa-card-badge" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="2" width="8" height="4" rx="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="m9 14 2 2 4-4" />
              </svg>
            </div>
          </div>
          <h2>{renderTwoToneTitle(active.name)}</h2>
          <p>{active.description}</p>
        </article>

        <nav className={`qa-controls ${!isBooted ? "anim-boot-controls" : ""}`} aria-label="Browse quality assurance services">
          <div className="qa-playback">
            <button
              type="button"
              className="qa-btn-prev"
              onClick={() => choose(step - 1)}
              aria-label="Previous service"
              title="Previous service"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <span>Previous</span>
            </button>

            <button
              type="button"
              className="qa-btn-play-pause"
              onClick={() => setPaused(value => !value)}
              aria-label={paused ? 'Resume rotation' : 'Pause rotation'}
            >
              {paused ? (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span>Play</span>
                </>
              ) : (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                  <span>Pause</span>
                </>
              )}
            </button>

            <div className="qa-count-display">
              <strong>{active.number} / {SERVICES.length}</strong>
              <span>SERVICES</span>
            </div>

            <button
              type="button"
              className="qa-btn-next"
              onClick={() => choose(step + 1)}
              aria-label="Next service"
              title="Next service"
            >
              <span>Next</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <button
              type="button"
              className="qa-btn-reload"
              onClick={() => { bootStartRef.current = performance.now(); setBootKey(k => k + 1); }}
              aria-label="Replay intro animation"
              title="Replay intro animation"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12a9 9 0 1 1-2.64-6.36L21 8" />
                <path d="M21 3v5h-5" />
              </svg>
            </button>
          </div>

          <details
            className="qa-picker"
            ref={pickerRef}
            onToggle={event => { const open = event.currentTarget.open; setBrowsing(open); if (open) searchRef.current?.focus(); }}
            onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) pickerRef.current.open = false; }}
            onKeyDown={event => { if (event.key === 'Escape') { pickerRef.current.open = false; pickerRef.current.querySelector('summary').focus(); } }}
          >
            <summary className="qa-picker-summary">
              <div className="qa-picker-summary-text">
                <small>EXPLORE SERVICES</small>
                <strong>{active.number}. {active.name}</strong>
              </div>
              <div className="qa-picker-chevron" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </summary>
            <div className="qa-picker-panel">
              <label className="qa-search">
                <ControlIcon type="search" />
                <input
                  ref={searchRef}
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search by name or number..."
                  aria-label="Search services"
                />
              </label>
              <p className="qa-results-label">{matches.length} services {query ? 'found' : 'available'}</p>
              <div className="qa-service-options">
                {matches.map(service => (
                  <button
                    key={service.id}
                    className="qa-service-option"
                    aria-current={service.id === active.id}
                    onClick={() => {
                      choose(service.number - 1);
                      setQuery('');
                      pickerRef.current.open = false;
                      pickerRef.current.querySelector('summary').focus();
                    }}
                  >
                    <span className="qa-option-number">{String(service.number).padStart(2, '0')}</span>
                    <span>{service.name}</span>
                    {service.id === active.id && <ControlIcon type="check" />}
                  </button>
                ))}
                {matches.length === 0 && (
                  <p className="qa-results-label">No services found. Try another name or number.</p>
                )}
              </div>
            </div>
          </details>
        </nav>
      </div>
      </section>
    </main>
  );
}
