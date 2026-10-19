/**
 * ============================================================================
 * CybersecurityServices.jsx
 * ============================================================================
 * Interactive Showcase Component for IBCS Cybersecurity Services.
 * 
 * Features:
 * - 50 distinct cybersecurity domains with dedicated Lucide icons.
 * - Dual-layer metallic & glowing cyan SVG shield centerpiece.
 * - Desktop 3-column stage with left (1-25) and right (26-50) circular icon jump grids.
 * - Floating tooltips on icon hover displaying section ID and full title.
 * - Mobile-first responsive view with centered shield and inline 50-icon grid underneath.
 * - Text boundary enforcement: Heading and copy strictly stay inside the inner blue shield line.
 * - Mobile-exclusive smooth scrollbar (overflow-y: auto) inside the shield when copy exceeds height.
 * - Keyboard navigation support (ArrowLeft / ArrowRight).
 * - Self-contained: CSS merged directly into this component.
 * ============================================================================
 */

import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { CYBERSECURITY_SECTIONS, SectionIcon } from './CybersecurityServicesPageData';

/**
 * ----------------------------------------------------------------------------
 * EMBEDDED CSS STYLES
 * ----------------------------------------------------------------------------
 * Merged stylesheet with comprehensive documentation for all visual tokens,
 * shield geometries, bounding box constraints, and responsive breakpoints.
 */
const CYBERSECURITY_STYLES = `
/* ==========================================================================
   1. RESET & VIEWPORT SETUP
   ========================================================================== */
.cyber-page {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 80px;
  overflow-x: hidden;
  color: #071941;
  background:
    radial-gradient(ellipse at 50% 28%, rgba(255, 255, 255, .98), transparent 48%),
    radial-gradient(circle at 9% 38%, rgba(130, 194, 255, .32), transparent 34%),
    radial-gradient(circle at 92% 45%, rgba(114, 189, 255, .3), transparent 34%),
    linear-gradient(180deg, #f1faff 0%, #dcefff 58%, #a5d4fd 100%);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
}

.cyber-page * {
  box-sizing: border-box;
}

.cyber-page button {
  font: inherit;
  cursor: pointer;
}

/* ==========================================================================
   2. TOP HEADER SECTION
   ========================================================================== */
.cyber-header {
  position: relative;
  z-index: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: clamp(28px, 4vh, 42px) clamp(16px, 3vw, 36px) 0;
  flex-shrink: 0;
}

.cyber-header__title {
  margin: 0;
  font-size: clamp(22px, 2.2vw, 32px);
  font-weight: 850;
  letter-spacing: -0.025em;
  text-wrap: balance;
  line-height: 1.15;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 2px 4px rgba(2, 40, 90, 0.12));
}

.cyber-header__word {
  display: inline-flex;
  white-space: nowrap;
}

.cyber-header__space {
  display: inline-block;
  width: 0.32em;
}

/* Individual letter reverse jump animation on page load */
.cyber-header__letter {
  display: inline-block;
  background: linear-gradient(135deg, #031b3e 0%, #074786 55%, #0284c7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: letterReverseJump 0.68s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  transform-origin: bottom center;
  will-change: transform, opacity;
}

@keyframes letterReverseJump {
  0% {
    opacity: 0;
    transform: translateY(-44px) scale(0.5) rotate(-14deg);
    filter: blur(4px);
  }
  50% {
    opacity: 1;
    transform: translateY(12px) scale(1.22, 0.86) rotate(4deg);
    filter: blur(0);
  }
  72% {
    transform: translateY(-6px) scale(0.94, 1.08) rotate(-1deg);
  }
  88% {
    transform: translateY(2px) scale(1.02, 0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1, 1) rotate(0deg);
    filter: blur(0);
  }
}

.cyber-header__description {
  margin: clamp(5px, 0.8vh, 8px) 0 0;
  font-size: clamp(12px, 0.92vw, 13.5px);
  line-height: 1.48;
  color: #173f6c;
  max-width: 840px;
  text-wrap: balance;
  font-weight: 500;
  animation: headerFadeIn 0.8s ease-out 0.4s both;
}

@keyframes headerFadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ==========================================================================
   3. MAIN SCENE (3-COLUMN DESKTOP GRID)
   ========================================================================== */
.cyber-page__scene {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(370px, 530px) minmax(0, 1fr);
  align-items: center;
  gap: clamp(6px, 1vw, 18px);
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  padding: 6px clamp(14px, 2vw, 32px) clamp(8px, 1.5vh, 16px);
  isolation: isolate;
}

/* ==========================================================================
   4. QUICK JUMP CIRCULAR ICON BUTTONS (DESKTOP)
   ========================================================================== */
.cyber-jump-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: clamp(6px, .8vw, 11px);
  width: min(100%, 310px);
  align-self: center;
  position: relative;
  z-index: 3;
}

.cyber-jump-grid--left { justify-self: end; }
.cyber-jump-grid--right { justify-self: start; }

.cyber-jump-grid__button {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 1;
  padding: 0;
  border: 1px solid #54baff;
  border-radius: 50%;
  color: #073166;
  background: radial-gradient(circle at 32% 25%, #fff 0%, #e4f6ff 42%, #9ccdf7 100%);
  box-shadow: 0 3px 9px rgba(18, 78, 150, .17), inset 0 1px 2px #fff;
  transition: transform .16s, box-shadow .16s, background .16s, color .16s;
  will-change: transform, opacity;
}

/* Left Icons: fly in from the far left and snap/stick firmly into place ("chipakna") */
.cyber-jump-grid--left .cyber-jump-grid__button {
  animation: iconSnapInLeft 0.75s cubic-bezier(0.16, 0.95, 0.3, 1.25) both;
  animation-delay: var(--icon-delay, 0s);
}

@keyframes iconSnapInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-240px, 0, 0) scale(0.3) rotate(-28deg);
    filter: blur(5px);
  }
  65% {
    opacity: 1;
    transform: translate3d(14px, 0, 0) scale(1.18, 0.9) rotate(4deg);
    filter: blur(0);
    box-shadow: 0 0 24px rgba(0, 225, 255, 0.95), 0 0 10px #00b9ff, inset 0 0 6px #fff;
  }
  82% {
    transform: translate3d(-4px, 0, 0) scale(0.94, 1.06) rotate(-1deg);
    box-shadow: 0 0 14px rgba(0, 185, 255, 0.6);
  }
  92% {
    transform: translate3d(1px, 0, 0) scale(1.02, 0.98);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1, 1) rotate(0deg);
    box-shadow: 0 3px 9px rgba(18, 78, 150, .17), inset 0 1px 2px #fff;
  }
}

/* Right Icons: fly in from the far right and snap/stick firmly into place ("chipakna") */
.cyber-jump-grid--right .cyber-jump-grid__button {
  animation: iconSnapInRight 0.75s cubic-bezier(0.16, 0.95, 0.3, 1.25) both;
  animation-delay: var(--icon-delay, 0s);
}

@keyframes iconSnapInRight {
  0% {
    opacity: 0;
    transform: translate3d(240px, 0, 0) scale(0.3) rotate(28deg);
    filter: blur(5px);
  }
  65% {
    opacity: 1;
    transform: translate3d(-14px, 0, 0) scale(1.18, 0.9) rotate(-4deg);
    filter: blur(0);
    box-shadow: 0 0 24px rgba(0, 225, 255, 0.95), 0 0 10px #00b9ff, inset 0 0 6px #fff;
  }
  82% {
    transform: translate3d(4px, 0, 0) scale(0.94, 1.06) rotate(1deg);
    box-shadow: 0 0 14px rgba(0, 185, 255, 0.6);
  }
  92% {
    transform: translate3d(-1px, 0, 0) scale(1.02, 0.98);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1, 1) rotate(0deg);
    box-shadow: 0 3px 9px rgba(18, 78, 150, .17), inset 0 1px 2px #fff;
  }
}

.cyber-jump-grid__icon {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.cyber-jump-grid__icon svg {
  width: clamp(16px, 1.4vw, 22px);
  height: clamp(16px, 1.4vw, 22px);
  stroke-width: 2.2;
  transition: transform .16s;
}

.cyber-jump-grid__button:hover,
.cyber-jump-grid__button:focus-visible {
  z-index: 50;
  transform: translateY(-2px) scale(1.08) !important;
  box-shadow: 0 5px 18px rgba(0, 98, 203, .34), 0 0 0 3px rgba(93, 193, 255, .4) !important;
  outline: none;
}

.cyber-jump-grid__button:hover .cyber-jump-grid__icon svg {
  transform: scale(1.1);
}

.cyber-jump-grid__button--active {
  border-color: #8be5ff;
  color: #fff;
  background: linear-gradient(145deg, #00b9ff, #0054e4 73%);
  box-shadow: 0 5px 16px rgba(0, 90, 220, .48), inset 0 0 6px #a1ebff !important;
}

/* Tooltip Popover on Hover */
.cyber-jump-grid__tooltip {
  position: absolute;
  top: 50%;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  max-width: min(260px, 24vw);
  padding: 8px 12px;
  border: 1px solid #4bbcff;
  border-radius: 8px;
  color: #fff;
  background: rgba(6, 26, 56, 0.96);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 24px rgba(2, 22, 54, 0.6), 0 0 12px rgba(0, 162, 255, 0.25);
  font-size: 12px;
  line-height: 1.3;
  white-space: normal;
  text-align: left;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-50%) scale(0.94);
  transition: opacity .18s cubic-bezier(0.16, 1, 0.3, 1), transform .18s cubic-bezier(0.16, 1, 0.3, 1), visibility .18s;
  z-index: 100;
}

.cyber-jump-grid--left .cyber-jump-grid__tooltip {
  left: calc(100% + 9px);
}

.cyber-jump-grid--left .cyber-jump-grid__tooltip::before {
  content: '';
  position: absolute;
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: transparent #4bbcff transparent transparent;
}

.cyber-jump-grid--right .cyber-jump-grid__tooltip {
  right: calc(100% + 9px);
}

.cyber-jump-grid--right .cyber-jump-grid__tooltip::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent transparent #4bbcff;
}

.cyber-jump-grid__button:hover .cyber-jump-grid__tooltip,
.cyber-jump-grid__button:focus-visible .cyber-jump-grid__tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateY(-50%) scale(1);
}

.cyber-jump-grid__tooltip-badge {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 4px;
  background: #0d5ea6;
  color: #72d6ff;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}

.cyber-jump-grid__tooltip-title {
  font-size: 12px;
  font-weight: 600;
  color: #e6f6ff;
  line-height: 1.25;
}

/* ==========================================================================
   5. CENTRAL SHIELD STAGE & BOUNDING CONSTRAINTS
   ========================================================================== */
.cyber-stage {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 0;
  height: 100%;
}

.cyber-shield {
  position: relative;
  z-index: 1;
  width: min(100%, 510px, 64svh);
  height: auto;
  aspect-ratio: 620 / 740;
  filter: drop-shadow(0 13px 11px rgba(0, 10, 40, .58)) drop-shadow(0 0 16px rgba(23, 170, 255, .55));
}

.cyber-shield__art {
  display: block;
  width: 100%;
  height: 100%;
}

.cyber-shield__content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 13.5%;
  color: #fff;
  text-align: center;
}

/* Shield Crest Badge */
.cyber-shield__crest {
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  width: 44px;
  height: 50px;
  color: #fff;
  border: 3px solid #ecfcff;
  border-radius: 42% 42% 52% 52%;
  box-shadow: 0 0 10px 2px #21b5ff, inset 0 0 10px #068eff;
  clip-path: polygon(50% 0, 100% 17%, 94% 73%, 50% 100%, 6% 73%, 0 17%);
}

.cyber-shield__crest svg {
  width: 21px;
  height: 21px;
}

/* Desktop Shield Heading: Restored to original spacious proportions */
.cyber-shield h1,
.cyber-shield h2,
.cyber-shield__title {
  width: 72%;
  max-height: 18%;
  margin: 14px auto 0;
  overflow: hidden;
  font-size: clamp(17px, 1.5vw, 23px);
  line-height: 1.12;
  font-weight: 800;
  text-wrap: balance;
  text-align: center;
  padding: 0;
}

.cyber-shield__accent {
  flex: 0 0 auto;
  width: 48px;
  height: 3px;
  margin: 8px auto 7px;
  border-radius: 4px;
  background: #05cbff;
  box-shadow: 0 0 8px #00b8ff;
}

/* Desktop Shield Body Copy: Restored to original 70% width and 50% height so text never cuts off */
.cyber-shield__copy {
  width: 70%;
  height: 50%;
  min-height: 0;
  overflow: hidden;
  padding: 0 4px;
  margin: 0 auto;
  font-size: clamp(11.2px, 0.92vw, 13.8px);
  line-height: 1.34;
  text-align: center;
}

.cyber-shield__curve {
  display: block;
  width: 14%;
  height: 100%;
}

.cyber-shield__curve--left {
  float: left;
  shape-outside: polygon(0 0, 0 100%, 100% 100%, 0 33%);
}

.cyber-shield__curve--right {
  float: right;
  shape-outside: polygon(100% 0, 100% 100%, 0 100%, 100% 33%);
}

.cyber-shield__copy p {
  margin: 0;
}

/* ==========================================================================
   6. PREVIOUS / NEXT CONTROLS
   ========================================================================== */
.cyber-shield-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: min(100%, 460px);
  margin-top: 10px;
}

.cyber-shield-controls__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 144px;
  height: 46px;
  border: 1px solid #0b98ff;
  border-radius: 28px;
  color: #fff;
  font-size: 15px !important;
  font-weight: 700 !important;
  transition: filter .16s, box-shadow .16s, background .16s, opacity .16s;
}

.cyber-shield-controls__button--previous,
.cyber-shield-controls__button--next {
  background: linear-gradient(135deg, #062a59, #0a4b8b);
  box-shadow: 0 4px 14px rgba(4, 28, 62, 0.4);
}

.cyber-shield-controls__button:hover:not(:disabled) {
  filter: brightness(1.15);
  box-shadow: 0 4px 18px rgba(11, 152, 255, 0.35);
}

.cyber-shield-controls__button:disabled {
  opacity: 0.55;
  background: #052347;
  border-color: rgba(11, 152, 255, 0.35);
  color: rgba(255, 255, 255, 0.6);
  cursor: not-allowed;
  box-shadow: none;
}

.cyber-shield-controls__count {
  min-width: 65px;
  color: #082b5a;
  text-align: center;
  white-space: nowrap;
  font-size: 17px;
  font-weight: 700;
}

/* Mobile Services: hidden on desktop */
.cyber-mobile-services {
  display: none;
}

/* ==========================================================================
   7. TABLET RESPONSIVE LAYOUT (<= 950px)
   ========================================================================== */
@media (max-width: 950px) {
  .cyber-page {
    height: auto;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cyber-header {
    padding-top: clamp(26px, 4vh, 36px);
    padding-left: 14px;
    padding-right: 14px;
    text-align: center;
  }

  .cyber-header__title {
    font-size: clamp(20px, 4.5vw, 26px);
    text-align: center;
  }

  .cyber-header__description {
    font-size: 12px;
    line-height: 1.44;
    text-align: center;
    margin: 6px auto 0;
    max-width: 92%;
  }

  .cyber-page__scene {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 12px 28px;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    height: auto;
    overflow: visible;
  }

  .cyber-stage {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 440px;
    margin: 0 auto;
    height: auto;
  }

  .cyber-jump-grid--left,
  .cyber-jump-grid--right {
    display: none;
  }

  /* Centered larger shield on mobile / tablet */
  .cyber-shield {
    width: min(94vw, 410px);
    max-width: 410px;
    margin: 4px auto 0;
  }

  .cyber-shield__content {
    padding-top: 11%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cyber-shield h1,
  .cyber-shield h2,
  .cyber-shield__title {
    width: 50%;
    max-width: 50%;
    margin-top: 6px;
    font-size: clamp(12.5px, 3vw, 15px);
    line-height: 1.2;
    text-align: center;
    text-wrap: balance;
    word-break: break-word;
    overflow-wrap: break-word;
    padding: 0 4px;
    box-sizing: border-box;
  }

  .cyber-shield__accent {
    margin: 4px auto 6px;
    width: 30px;
    height: 2px;
  }

  .cyber-shield__curve {
    display: none;
  }

  /* Scroll ONLY on phone response when text overflows shield space */
  .cyber-shield__copy {
    width: 56%;
    max-width: 56%;
    height: 46%;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 4px 12px;
    margin: 0 auto;
    font-size: 11px;
    line-height: 1.36;
    text-align: center;
    scrollbar-width: thin;
    scrollbar-color: #00d2ff rgba(3, 20, 48, 0.45);
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
    box-sizing: border-box;
  }

  .cyber-shield__copy::-webkit-scrollbar {
    width: 4px;
  }

  .cyber-shield__copy::-webkit-scrollbar-track {
    background: rgba(3, 20, 48, 0.4);
    border-radius: 4px;
  }

  .cyber-shield__copy::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #00d2ff, #0077ff);
    border-radius: 4px;
    box-shadow: 0 0 6px rgba(0, 210, 255, 0.8);
  }

  .cyber-shield__copy p {
    margin: 0;
    text-align: center;
    color: #e8f7ff;
    text-wrap: balance;
    word-break: break-word;
    overflow-wrap: break-word;
  }

  .cyber-shield-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(100%, 390px);
    margin: 10px auto 0;
  }

  /* 50 Icons shown directly below shield & controls on phone */
  .cyber-mobile-services {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min(100%, 390px);
    margin: 14px auto 24px;
    padding: 12px 10px 14px;
    background: rgba(4, 25, 56, 0.55);
    border: 1px solid rgba(84, 186, 255, 0.35);
    border-radius: 16px;
    backdrop-filter: blur(8px);
    box-shadow: 0 8px 24px rgba(2, 16, 38, 0.28), inset 0 1px 2px rgba(255, 255, 255, 0.12);
  }

  .cyber-mobile-services__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    width: 100%;
    margin-bottom: 10px;
    padding: 0 4px;
  }

  .cyber-mobile-services__badge {
    display: inline-flex;
    align-items: center;
    padding: 3px 8px;
    border-radius: 6px;
    background: rgba(14, 82, 148, 0.65);
    border: 1px solid rgba(114, 214, 255, 0.5);
    color: #8be5ff;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }

  .cyber-mobile-services__current {
    font-size: 11.5px;
    font-weight: 700;
    color: #e2f4ff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: right;
  }

  .cyber-jump-grid--mobile {
    display: grid;
    grid-template-columns: repeat(10, minmax(0, 1fr));
    gap: clamp(4px, 1.2vw, 7px);
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .cyber-jump-grid--mobile .cyber-jump-grid__button {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    padding: 0;
    min-width: 0;
  }

  .cyber-jump-grid--mobile .cyber-jump-grid__icon svg {
    width: clamp(14px, 3.4vw, 18px);
    height: clamp(14px, 3.4vw, 18px);
    stroke-width: 2.2;
  }

  .cyber-jump-grid--mobile .cyber-jump-grid__button--active {
    border-color: #8be5ff;
    color: #fff;
    background: linear-gradient(145deg, #00b9ff, #0054e4 73%);
    box-shadow: 0 0 10px rgba(0, 185, 255, 0.7);
  }

  .cyber-jump-grid--mobile .cyber-jump-grid__tooltip {
    top: auto;
    bottom: calc(100% + 8px);
    left: 50%;
    right: auto;
    transform: translateX(-50%) scale(0.92);
    max-width: min(240px, 75vw);
    white-space: normal;
    text-align: center;
    z-index: 120;
  }

  .cyber-jump-grid--mobile .cyber-jump-grid__tooltip::before {
    top: 100%;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    border-color: #4bbcff transparent transparent transparent;
  }

  .cyber-jump-grid--mobile .cyber-jump-grid__button:hover .cyber-jump-grid__tooltip,
  .cyber-jump-grid--mobile .cyber-jump-grid__button:focus-visible .cyber-jump-grid__tooltip {
    transform: translateX(-50%) scale(1);
  }
}

/* ==========================================================================
   8. MOBILE RESPONSIVE LAYOUT (<= 600px)
   ========================================================================== */
@media (max-width: 600px) {
  .cyber-header {
    padding: 24px 12px 0;
  }

  .cyber-header__title {
    font-size: clamp(19px, 5vw, 24px);
  }

  .cyber-header__description {
    font-size: 11.5px;
    line-height: 1.4;
    padding: 0 4px;
  }

  .cyber-page__scene {
    padding: 8px 10px 24px;
    gap: 10px;
  }

  .cyber-stage {
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
  }

  .cyber-shield {
    width: min(94vw, 370px);
    max-width: 370px;
    margin: 0 auto;
  }

  .cyber-shield__content {
    padding-top: 11%;
  }

  .cyber-shield__crest {
    width: 32px;
    height: 36px;
    border-width: 2px;
  }

  .cyber-shield__crest svg {
    width: 16px;
    height: 16px;
  }

  /* Safe constrained heading: 50% width keeps it inside the inward blue roof */
  .cyber-shield h1,
  .cyber-shield h2,
  .cyber-shield__title {
    width: 50%;
    max-width: 50%;
    margin-top: 5px;
    font-size: clamp(12px, 3.1vw, 14.5px);
    line-height: 1.2;
    text-align: center;
    text-wrap: balance;
    word-break: break-word;
    overflow-wrap: break-word;
    padding: 0 4px;
    box-sizing: border-box;
  }

  .cyber-shield__accent {
    margin: 4px auto 5px;
    width: 28px;
    height: 2px;
  }

  .cyber-shield__curve {
    display: none;
  }

  /* Safe constrained copy: 56% width keeps body text inside the blue boundary */
  .cyber-shield__copy {
    width: 56%;
    max-width: 56%;
    height: 46%;
    font-size: clamp(9.5px, 2.5vw, 10.6px);
    line-height: 1.34;
    padding: 0 4px 12px;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    text-align: center;
    margin: 0 auto;
  }

  .cyber-shield__copy p {
    margin: 0;
    text-align: center;
    color: #e8f7ff;
    text-wrap: balance;
    word-break: break-word;
    overflow-wrap: break-word;
  }

  .cyber-shield-controls {
    gap: 6px;
    margin: 8px auto 0;
    width: min(100%, 360px);
  }

  .cyber-shield-controls__button {
    width: 118px;
    height: 40px;
    gap: 6px;
    padding: 0 6px;
    font-size: 12.5px !important;
  }

  .cyber-shield-controls__button svg {
    width: 16px;
  }

  .cyber-shield-controls__count {
    min-width: 50px;
    font-size: 14px;
  }

  .cyber-mobile-services {
    width: min(100%, 360px);
    margin: 12px auto 20px;
    padding: 10px 8px 12px;
  }

  .cyber-jump-grid--mobile {
    gap: 4px;
  }

  .cyber-jump-grid--mobile .cyber-jump-grid__button {
    animation: iconPopInMobile 0.48s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    animation-delay: var(--icon-delay, 0s);
  }

  @keyframes iconPopInMobile {
    0% {
      opacity: 0;
      transform: translateY(22px) scale(0.4);
    }
    70% {
      opacity: 1;
      transform: translateY(-3px) scale(1.12);
      box-shadow: 0 0 16px rgba(0, 210, 255, 0.8);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .cyber-jump-grid--mobile .cyber-jump-grid__icon svg {
    width: clamp(13px, 3.3vw, 16px);
    height: clamp(13px, 3.3vw, 16px);
  }
}

/* ==========================================================================
   9. ACCESSIBILITY (PREFERS-REDUCED-MOTION)
   ========================================================================== */
@media (prefers-reduced-motion: reduce) {
  .cyber-jump-grid__button,
  .cyber-header__letter,
  .cyber-header__description {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
`;

/**
 * ----------------------------------------------------------------------------
 * SHIELD ARTWORK COMPONENT
 * ----------------------------------------------------------------------------
 * Multi-layered SVG illustration:
 * - Outer metallic chamfer border (stroke: #f6fcff -> #208ad6)
 * - Intermediate cyan highlight (stroke: #37bfff)
 * - Inner core cavity with dark navy gradient (stroke: #0b95ff)
 * - Outer neon glow filter (stdDeviation: 10)
 */
function ShieldArtwork() {
  const core = 'M310 62 531 174v224c0 139-77 251-221 318C166 649 89 537 89 398V174L310 62Z';

  return (
    <svg className="cyber-shield__art" viewBox="0 0 620 740" fill="none" aria-hidden="true">
      <defs>
        {/* Metallic Bevel Gradient */}
        <linearGradient id="shieldMetal" x1="75" y1="75" x2="555" y2="690" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f6fcff" />
          <stop offset=".15" stopColor="#208ad6" />
          <stop offset=".34" stopColor="#dff9ff" />
          <stop offset=".52" stopColor="#1976cb" />
          <stop offset=".76" stopColor="#d8f6ff" />
          <stop offset="1" stopColor="#2377bd" />
        </linearGradient>

        {/* Deep Core Navy Gradient */}
        <linearGradient id="shieldCore" x1="310" y1="58" x2="310" y2="714" gradientUnits="userSpaceOnUse">
          <stop stopColor="#043867" />
          <stop offset=".38" stopColor="#00152f" />
          <stop offset=".78" stopColor="#03132f" />
          <stop offset="1" stopColor="#026eb2" />
        </linearGradient>

        {/* Glowing Neon Edge Gradient */}
        <linearGradient id="shieldEdge" x1="82" y1="420" x2="531" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1eeeff" />
          <stop offset=".35" stopColor="#0b84fb" />
          <stop offset=".72" stopColor="#78f7ff" />
          <stop offset="1" stopColor="#0c8fff" />
        </linearGradient>

        {/* Cyan Outer Glow Filter */}
        <filter id="shieldGlow" x="-35%" y="-35%" width="170%" height="170%">
          <feGaussianBlur stdDeviation="10" />
        </filter>

        {/* Shield Core Clip Path */}
        <clipPath id="shieldClip">
          <path d={core} />
        </clipPath>
      </defs>

      {/* Layer 1: Outer Heavy Metallic Frame */}
      <path
        d="M310 21 568 152v251c0 158-88 277-258 320C140 680 52 561 52 403V152L310 21Z"
        fill="#093665"
        stroke="url(#shieldMetal)"
        strokeWidth="22"
      />

      {/* Layer 2: Mid Bevel with Cyan Stroke */}
      <path
        d="M310 42 549 164v235c0 150-82 262-239 317C153 661 71 549 71 399V164L310 42Z"
        fill="#061d42"
        stroke="#37bfff"
        strokeOpacity=".8"
        strokeWidth="4"
      />

      {/* Layer 3: Inner Core with Solid Fill */}
      <path d={core} fill="url(#shieldCore)" stroke="#0b95ff" strokeWidth="7" />

      {/* Layer 4: Neon Glow Aura */}
      <path d={core} stroke="url(#shieldEdge)" strokeWidth="12" filter="url(#shieldGlow)" opacity=".75" />

      {/* Layer 5: Decorative Concentric Arc inside Core */}
      <g clipPath="url(#shieldClip)">
        <circle cx="310" cy="672" r="95" stroke="#45d5ff" strokeOpacity=".13" strokeWidth="2" />
      </g>

      {/* Layer 6: Sharp Inner Blue Boundary Line */}
      <path d={core} stroke="url(#shieldEdge)" strokeWidth="3" />

      {/* Layer 7: Outermost Fine Highlight Outline */}
      <path
        d="m310 5 274 140v261c0 170-98 300-274 330C134 706 36 576 36 406V145L310 5Z"
        stroke="#e5f8ff"
        strokeOpacity=".8"
        strokeWidth="2"
      />
    </svg>
  );
}

/**
 * ----------------------------------------------------------------------------
 * ANIMATED REVERSE HEADING COMPONENT
 * ----------------------------------------------------------------------------
 * Splits title text into words and individual letters.
 * Staggers animation delay in REVERSE order (right-to-left) so that on page
 * refresh, letters jump into place starting from the very last letter back to the first.
 */
function AnimatedReverseHeading({ text = 'Cybersecurity Services' }) {
  const words = text.split(' ');
  const totalLetters = text.replace(/\s+/g, '').length;
  let letterCounter = 0;

  return (
    <h1 className="cyber-header__title" aria-label={text}>
      {words.map((word, wordIndex) => {
        const letters = word.split('');
        return (
          <span className="cyber-header__word" key={wordIndex} aria-hidden="true">
            {letters.map((char, charIndex) => {
              const currentGlobalIndex = letterCounter++;
              // Reverse index: last letter gets delay 0s, first letter gets max delay
              const reverseIndex = totalLetters - 1 - currentGlobalIndex;
              const delay = (reverseIndex * 0.038).toFixed(3);

              return (
                <span
                  key={charIndex}
                  className="cyber-header__letter"
                  style={{ animationDelay: `${delay}s` }}
                >
                  {char}
                </span>
              );
            })}
            {wordIndex < words.length - 1 && (
              <span className="cyber-header__space" aria-hidden="true">
                &nbsp;
              </span>
            )}
          </span>
        );
      })}
    </h1>
  );
}

/**
 * ----------------------------------------------------------------------------
 * SECTION JUMP GRID COMPONENT
 * ----------------------------------------------------------------------------
 * Renders circular icon buttons for jumping directly to any service section.
 * Staggers each button's entrance animation so left & right icons fly in and
 * snap/stick firmly into their grid sockets ("plaze mein chipakna").
 * Includes interactive hover tooltips with badges and full titles.
 */
function SectionJumpGrid({ sections, activeIndex, onJump, className = '' }) {
  return (
    <nav
      className={`cyber-jump-grid ${className}`}
      aria-label={`Jump to sections ${sections[0]?.id} to ${sections.at(-1)?.id}`}
    >
      {sections.map((item, index) => {
        const isActive = item.id === activeIndex + 1;
        const delay = (index * 0.028).toFixed(3);

        return (
          <button
            className={`cyber-jump-grid__button${isActive ? ' cyber-jump-grid__button--active' : ''}`}
            type="button"
            key={item.id}
            style={{ '--icon-delay': `${delay}s` }}
            aria-label={`Jump to section ${item.id}: ${item.title}`}
            aria-current={isActive ? 'step' : undefined}
            onClick={() => onJump(item.id - 1)}
          >
            {/* Lucide Icon for the Section */}
            <span className="cyber-jump-grid__icon" aria-hidden="true">
              <SectionIcon id={item.id} size={20} strokeWidth={2.2} />
            </span>

            {/* Hover Tooltip with Section Number and Title */}
            <span className="cyber-jump-grid__tooltip" role="tooltip">
              <span className="cyber-jump-grid__tooltip-badge">#{item.id}</span>
              <span className="cyber-jump-grid__tooltip-title">{item.title}</span>
            </span>
          </button>
        );
      })}
    </nav>
  );
}

/**
 * ----------------------------------------------------------------------------
 * MAIN COMPONENT: CybersecurityServices
 * ----------------------------------------------------------------------------
 */
export default function CybersecurityServices({ onClose, onHome }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = CYBERSECURITY_SECTIONS.length;
  const section = CYBERSECURITY_SECTIONS[activeIndex];

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

  // Helper to jump to a specific section index
  function jumpTo(index) {
    if (index >= 0 && index < total) {
      setActiveIndex(index);
    }
  }

  // Keyboard navigation listener (Left/Right arrows)
  useEffect(() => {
    function onKeyDown(event) {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      if (event.key === 'ArrowRight') {
        setActiveIndex((index) => Math.min(total - 1, index + 1));
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((index) => Math.max(0, index - 1));
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [total]);

  return (
    <main className="cyber-page">
      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 flex items-center justify-start gap-3 z-40">
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
      <style>{CYBERSECURITY_STYLES}</style>

      {/* Top Header Section with Reverse Letter Jump Animation */}
      <header className="cyber-header">
        <AnimatedReverseHeading text="Cybersecurity" />
        <p className="cyber-header__description">
          IBCS Cybersecurity focuses on protecting digital assets, networks, systems, and sensitive data from evolving cyber threats. Through comprehensive assessments, proactive defence strategies, and modern security practices, we help organisations strengthen their resilience against disruptions and unauthorized access.
        </p>
      </header>

      {/* Main Interactive Stage */}
      <div className="cyber-page__scene">
        {/* Desktop Left Quick Jump Grid (Sections 1 to 25) */}
        <SectionJumpGrid
          sections={CYBERSECURITY_SECTIONS.slice(0, 25)}
          activeIndex={activeIndex}
          onJump={jumpTo}
          className="cyber-jump-grid--left"
        />

        {/* Central Shield Stage */}
        <section className="cyber-stage" aria-label="Current cybersecurity service section">
          <div className="cyber-shield">
            {/* Dual metallic and cyan neon SVG shield illustration */}
            <ShieldArtwork />

            {/* Inner Content overlay positioned within the shield cavity */}
            <div className="cyber-shield__content">
              {/* Service Crest Icon */}
              <div className="cyber-shield__crest" aria-hidden="true">
                <SectionIcon id={section.id} size={26} strokeWidth={2.5} />
              </div>

              {/* Service Title (strictly constrained inside blue line boundary) */}
              <h2 className="cyber-shield__title">
                {section.id}. {section.title}
              </h2>

              {/* Neon Divider Line */}
              <div className="cyber-shield__accent" aria-hidden="true" />

              {/* Detailed Service Copy (scrollable on mobile) */}
              <div
                className="cyber-shield__copy"
                key={section.id}
                tabIndex={0}
                aria-label={`${section.title} details`}
              >
                <span className="cyber-shield__curve cyber-shield__curve--left" aria-hidden="true" />
                <span className="cyber-shield__curve cyber-shield__curve--right" aria-hidden="true" />
                <p>{section.description}</p>
              </div>
            </div>
          </div>

          {/* Navigation Controls (Previous / Next with synced deep navy style) */}
          <nav className="cyber-shield-controls" aria-label="Section navigation">
            <button
              className="cyber-shield-controls__button cyber-shield-controls__button--previous"
              type="button"
              onClick={() => jumpTo(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous section"
            >
              <ArrowLeft size={22} />
              <span>Previous</span>
            </button>

            <span className="cyber-shield-controls__count" aria-live="polite">
              {section.id} / {total}
            </span>

            <button
              className="cyber-shield-controls__button cyber-shield-controls__button--next"
              type="button"
              onClick={() => jumpTo(Math.min(total - 1, activeIndex + 1))}
              disabled={activeIndex === total - 1}
              aria-label="Next section"
            >
              <span>Next</span>
              <ArrowRight size={22} />
            </button>
          </nav>

          {/* Mobile-Only: 50 Service Icons Grid displayed directly beneath controls */}
          <div className="cyber-mobile-services" aria-label="All 50 security services">
            <div className="cyber-mobile-services__header">
              <span className="cyber-mobile-services__badge">SERVICES (1–50)</span>
              <span className="cyber-mobile-services__current">
                #{section.id}. {section.title}
              </span>
            </div>
            <SectionJumpGrid
              sections={CYBERSECURITY_SECTIONS}
              activeIndex={activeIndex}
              onJump={jumpTo}
              className="cyber-jump-grid--mobile"
            />
          </div>
        </section>

        {/* Desktop Right Quick Jump Grid (Sections 26 to 50) */}
        <SectionJumpGrid
          sections={CYBERSECURITY_SECTIONS.slice(25)}
          activeIndex={activeIndex}
          onJump={jumpTo}
          className="cyber-jump-grid--right"
        />
      </div>
    </main>
  );
}
