import { useState, useEffect } from 'react';
import { Activity, ArrowLeft, ArrowRight, BellRing, BookOpen, Boxes, Cable, ClipboardCheck, Cloud, Code2, Compass, Database, FileText, GitBranch, Globe2, HardDrive, Hash, HeartPulse, KeyRound, Layers3, ListTodo, Lock, Map, Monitor, Network, Radio, RotateCcw, SearchCode, Settings, ShieldCheck, SlidersHorizontal, Target, TrendingUp, UsersRound, Wifi, Wrench, Home } from 'lucide-react';
import networkSections from './NetworkInfrastructureServicesPageData.js';

const styles = `
* { box-sizing: border-box; }
button { font: inherit; }

.network-page {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100svh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 36px 20px 48px;
  background:
    radial-gradient(ellipse 31% 47% at 50% 39%, #80c7ff 0%, #bde1ff 56%, transparent 100%),
    radial-gradient(ellipse 40% 44% at 10% 38%, #c8e5ff 0%, transparent 75%),
    radial-gradient(ellipse 40% 44% at 90% 40%, #c2e1ff 0%, transparent 75%),
    linear-gradient(180deg, #e7f4ff 0%, #eff9ff 56%, #dcefff 100%);
}
.page-header {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 880px;
  margin: 0 auto 16px;
  padding: 0 16px;
  perspective: 1000px;
}
.page-header__title {
  margin: 0 0 10px;
  font-size: clamp(26px, 3.2vw, 38px);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.18;
  color: #06204c;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.9);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  perspective: 800px;
}
.page-header__word {
  display: inline-block;
  white-space: nowrap;
  margin: 0 0.16em;
}
.page-header__letter {
  display: inline-block;
  opacity: 0;
  animation-duration: 0.72s;
  animation-timing-function: cubic-bezier(0.2, 0.85, 0.35, 1.2);
  animation-fill-mode: forwards;
  will-change: transform, opacity;
  transform-origin: center bottom;
}
.page-header__letter--left {
  animation-name: letterRollFromLeft;
}
.page-header__letter--right {
  animation-name: letterRollFromRight;
}

@keyframes letterRollFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-55px) rotateY(-85deg) rotateZ(-25deg) scale(0.6);
    filter: blur(6px);
  }
  65% {
    opacity: 1;
    transform: translateX(3px) rotateY(10deg) rotateZ(3deg) scale(1.08);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotateY(0deg) rotateZ(0deg) scale(1);
    filter: blur(0);
  }
}

@keyframes letterRollFromRight {
  0% {
    opacity: 0;
    transform: translateX(55px) rotateY(85deg) rotateZ(25deg) scale(0.6);
    filter: blur(6px);
  }
  65% {
    opacity: 1;
    transform: translateX(-3px) rotateY(-10deg) rotateZ(-3deg) scale(1.1);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotateY(0deg) rotateZ(0deg) scale(1);
    filter: blur(0);
  }
}

.page-header__description {
  margin: 0 auto;
  max-width: 760px;
  font-size: clamp(13px, 1.1vw, 15px);
  line-height: 1.55;
  color: #2b4f7a;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
  animation: headerDescFadeIn 0.8s ease 0.95s both;
}

@keyframes headerDescFadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.network-page::before,
.network-page::after { content: ''; position: absolute; z-index: -1; top: 35%; width: 57%; height: 39%; border-radius: 50%; background: #aed3fa70; pointer-events: none; }
.network-page::before { left: -23%; transform: rotate(23deg); }
.network-page::after { right: -23%; transform: rotate(-23deg); }
.network-scene {
  position: relative;
  isolation: isolate;
  container-type: inline-size;
  width: min(100vw, 150svh);
  aspect-ratio: 3 / 2;
  overflow: hidden;
  background: transparent;
}

.network-connectors { position: absolute; inset: 0; z-index: 2; width: 100%; height: 100%; pointer-events: none; }
.connector-line { fill: none; stroke: #4784c4; stroke-width: 2.5; }
.connector-halo { fill: none; stroke: transparent; stroke-width: 8; }
.connector-active .connector-line { stroke: #00caff; stroke-width: 4; }
.connector-active .connector-halo { stroke: #00bdff; }
.connector-terminal { fill: #456f9f; stroke: #d4ebff; stroke-width: 2; }
.connector-terminal--active { fill: #e8ffff; stroke: #00cfff; stroke-width: 5; filter: drop-shadow(0 0 6px #009dff); }

/* Circular orbit arc behind icons */
.carousel-orbit-arc { fill: none; stroke: url(#orbitArcGrad); stroke-width: 2.2; stroke-dasharray: 6 9; opacity: 0.85; }
.carousel-orbit-arc-glow { fill: none; stroke: #38bdf8; stroke-width: 8; opacity: 0.22; filter: url(#lineGlow); }

.network-menu { position: absolute; z-index: 5; inset: 0; pointer-events: none; }
.network-menu__item {
  position: absolute;
  left: var(--desktop-left);
  top: var(--desktop-top);
  width: 10.15%;
  height: 17.85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1% .2% 0;
  border: 0;
  color: #071a4c;
  background: transparent;
  cursor: pointer;
  pointer-events: auto;
  transition: left .52s cubic-bezier(.22, 1, .36, 1), top .52s cubic-bezier(.22, 1, .36, 1), opacity .35s ease, transform .25s ease;
}
.network-menu__item--outside { opacity: 0; pointer-events: none; }
.network-menu__item:hover { transform: translateY(-4px); }
.network-menu__item:focus-visible { outline: none; }
.network-menu__item:focus-visible .network-menu__icon { outline: 3px solid #009dff; outline-offset: 4px; }
.network-menu__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 74%;
  aspect-ratio: 1;
  margin-bottom: 5%;
  border-radius: 50%;
  color: #08256b;
  background: radial-gradient(circle at 35% 22%, #fff 0%, #e8f6ff 45%, #c7e4ff 100%);
  border: 2px solid #b7dcfa;
  box-shadow: inset 0 2px 6px #fff, 0 4px 14px #438bc66b;
  transition: transform .32s cubic-bezier(.22, 1, .36, 1), box-shadow .3s ease, background .3s ease;
}
.network-menu__icon svg { width: 54%; height: 54%; }
.network-menu__item--active .network-menu__icon {
  color: #fff;
  background: radial-gradient(circle at 35% 20%, #12c6ff, #005bef 70%);
  border: 2px solid white;
  box-shadow: 0 0 0 2px #43e8ff, 0 0 22px #00aaff;
  transform: scale(1.08);
}
.network-menu__label { display: block; width: 100%; font-size: clamp(11px, .97cqw, 14px); font-weight: 700; line-height: 1.15; text-align: center; overflow-wrap: break-word; word-break: normal; text-shadow: 0 1px 2px #ffffffd9; }

.signal-field { position: absolute; z-index: 1; left: 31%; top: 26%; width: 38%; height: 22%; display: flex; align-items: flex-end; justify-content: space-around; opacity: .9; }
.signal-field i { width: 1px; height: 45%; background: linear-gradient(transparent, #bafaff 45%, #aef5ff); box-shadow: 0 0 5px #b7fbff; }
.signal-field i:nth-child(3n) { height: 72%; }
.signal-field i:nth-child(4n) { height: 92%; }
.signal-field i:nth-child(5n) { height: 58%; }

.signal-mark { position: absolute; z-index: 2; left: 42%; top: 32.4%; width: 16%; height: 15%; display: grid; place-items: center; color: #0477f8; filter: drop-shadow(0 0 2px #fff) drop-shadow(0 0 15px #16c3ff); }
.signal-mark svg { width: 100%; height: 100%; stroke: #0378ff; paint-order: stroke; }

.network-router { position: absolute; z-index: 3; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.router-display { position: absolute; z-index: 4; left: 17%; top: 53.5%; width: 66%; height: 30%; color: white; }
.router-display__details { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 1fr) 17%; align-items: start; gap: 4%; width: 100%; height: 100%; padding: 1.3% 3% 0 2%; }
.router-display__copy { min-width: 0; max-height: 94%; overflow-y: auto; scrollbar-width: thin; scrollbar-color: #40b7ff #071e4b; }
.router-display__copy::-webkit-scrollbar { width: 5px; }
.router-display__copy::-webkit-scrollbar-track { background: rgba(7, 30, 75, 0.5); border-radius: 9999px; }
.router-display__copy::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #38bdf8 0%, #0284c7 100%); border-radius: 9999px; box-shadow: 0 0 6px rgba(0, 240, 255, 0.6); }
.router-display__copy::-webkit-scrollbar-button { display: none; width: 0; height: 0; }
.router-display__eyebrow { display: block; margin: 0 0 .55cqw; color: #67d3ff; font-size: .84cqw; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; }
.router-display h1 { margin: 0 0 .85cqw; font-size: 2cqw; line-height: 1.17; font-weight: 700; }
.router-display p { margin: 0; color: #f4faff; font-size: 1.17cqw; line-height: 1.36; text-shadow: 0 1px 2px #001744; }
.router-display__icon {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 1;
  margin-top: 19%;
  border: 2px solid #7be0ff;
  border-radius: 50%;
  color: #fff;
  background:
    radial-gradient(circle at 36% 18%, #c8faff91 0%, transparent 32%),
    linear-gradient(155deg, #35c6ff 0%, #087de5 35%, #06419d 70%, #011a53 100%);
  box-shadow:
    inset 0 5px 8px #e1ffff9c,
    inset 0 -12px 18px #001646d9,
    inset 5px 0 12px #8ce9ff4d,
    0 8px 0 #001947,
    0 14px 16px #000c3099,
    0 0 24px #00aeffb0;
}
.router-display__icon::before { content: ''; position: absolute; inset: 6%; border: 1px solid #b8f4ff6e; border-radius: 50%; box-shadow: inset 0 2px 4px #ffffff69, inset 0 -5px 8px #001d5a8c; }
.router-display__icon::after { content: ''; position: absolute; top: 8%; left: 19%; width: 62%; height: 23%; border-radius: 50%; background: linear-gradient(#efffff9c, #b4f4ff0d); filter: blur(3px); }
.router-display__icon svg { position: relative; z-index: 1; width: 55%; height: 55%; filter: drop-shadow(0 2px 1px #00205d) drop-shadow(0 0 6px #b5f7ff); }
.service-navigation { position: absolute; z-index: 6; top: 90%; left: 8%; width: 84%; display: flex; align-items: center; justify-content: space-between; }
.service-navigation button { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-width: 145px; min-height: 48px; padding: 8px 18px; border: 1px solid #7cdbff; border-radius: 999px; color: white; background: linear-gradient(145deg, #083c86, #061e4f); box-shadow: 0 5px 15px #0056b672, inset 0 1px 5px #7bcfff73; font-size: 16px; font-weight: 700; cursor: pointer; }
.service-navigation button:hover:not(:disabled) { background: linear-gradient(145deg, #0755ad, #073474); box-shadow: 0 5px 20px #008effab; }
.service-navigation button:focus-visible { outline: 3px solid #00baff; outline-offset: 3px; }
.service-navigation button:disabled { opacity: .45; cursor: not-allowed; }
.service-navigation__count { color: #062a62; font-size: 17px; font-weight: 800; letter-spacing: .08em; }

@media (max-width: 700px) {
  .network-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100svh;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 24px 12px 36px;
  }
  .page-header {
    margin: 0 auto 12px;
    padding: 0 8px;
  }
  .page-header__title {
    font-size: clamp(20px, 5.8vw, 26px);
    margin-bottom: 8px;
    line-height: 1.2;
  }
  .page-header__description {
    font-size: 12.5px;
    line-height: 1.5;
  }
  .network-scene { width: 100%; min-height: 100svh; height: 100svh; aspect-ratio: auto; overflow: hidden; }
  
  .network-menu { position: absolute; inset: 0; display: block; padding: 0; }
  .network-menu__item {
    left: var(--mobile-left);
    top: var(--mobile-top);
    width: 26%;
    height: 108px;
    padding: 6px 2px 4px;
  }
  .network-menu__item--mobile-outside { opacity: 0; pointer-events: none; }
  .network-menu__icon { width: 54px; margin-bottom: 6px; }
  .network-menu__label {
    font-size: clamp(10px, 2.5vw, 12px);
    line-height: 1.2;
    padding: 0 2px;
  }
  .network-connectors { display: none; }

  /* Router & antennas comfortably placed below top edge to prevent any clipping */
  .network-router {
    left: -7%;
    top: 7%;
    width: 114%;
    height: 79%;
  }
  .router-antenna {
    filter: drop-shadow(0 0 10px rgba(0, 190, 255, 0.55));
  }

  /* Signals aligned right below carousel icons */
  .signal-field { top: 24%; left: 18%; width: 64%; height: 11%; }
  .signal-mark { top: 27.5%; left: 38%; width: 24%; height: 9%; }

  /* Confined strictly inside the router screen lines on phone */
  .router-display {
    left: 50%;
    transform: translateX(-50%);
    top: 48.5%;
    width: 61%;
    height: 24%;
    overflow: hidden;
  }
  .router-display__details {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 6px 8px 6px 8px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .router-display__icon {
    order: -1;
    position: relative;
    top: auto;
    right: auto;
    width: 26px;
    height: 26px;
    aspect-ratio: 1;
    margin: 0 auto 3px auto;
    flex-shrink: 0;
    border-radius: 50%;
    display: grid;
    place-items: center;
    border: 1.5px solid #7be0ff;
    box-shadow: inset 0 2px 4px #e1ffff9c, inset 0 -4px 6px #001646d9, 0 2px 0 #001947, 0 4px 6px #000c3099, 0 0 8px #00aeffb0;
  }
  .router-display__icon svg {
    width: 14px;
    height: 14px;
  }
  .router-display__copy {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: 0;
    flex: 1;
    overflow: hidden;
  }
  .router-display__eyebrow {
    display: block;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #67d3ff;
    line-height: 1.15;
    margin: 0 auto 2px auto;
    padding-right: 0;
    text-align: center;
    width: 100%;
    flex-shrink: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .router-display h1 {
    font-size: clamp(11.5px, 3.1vw, 13.5px);
    font-weight: 800;
    line-height: 1.25;
    margin: 0 auto 4px auto;
    color: #ffffff;
    padding-right: 0;
    text-align: center;
    width: 100%;
    flex-shrink: 0;
    overflow-wrap: break-word;
    word-break: break-word;
  }
  .router-display p {
    flex: 1;
    min-height: 0;
    width: 100%;
    font-size: clamp(9.5px, 2.3vw, 10.5px);
    line-height: 1.4;
    color: #e3f3ff;
    margin: 0;
    text-align: center;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 4px 2px 4px;
    scrollbar-width: thin;
    scrollbar-color: #38bdf8 rgba(4, 20, 50, 0.6);
    overflow-wrap: break-word;
    word-break: break-word;
  }
  .router-display p::-webkit-scrollbar {
    width: 4px;
  }
  .router-display p::-webkit-scrollbar-track {
    background: rgba(4, 20, 50, 0.5);
    border-radius: 9999px;
  }
  .router-display p::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #38bdf8 0%, #0284c7 100%);
    border-radius: 9999px;
    box-shadow: 0 0 6px rgba(0, 240, 255, 0.6);
  }
  .router-display p::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0;
  }

  /* Well positioned navigation bar */
  .service-navigation {
    top: 83%;
    left: 6%;
    width: 88%;
  }
  .service-navigation button {
    min-width: 96px;
    min-height: 40px;
    padding: 6px 12px;
    gap: 5px;
    font-size: 13px;
  }
  .service-navigation button svg { width: 15px; height: 15px; }
  .service-navigation__count { font-size: 13px; }
}

@media (prefers-reduced-motion: reduce) {
  .network-menu__item { transition: none; }
  .page-header__letter { animation: none; opacity: 1; transform: none; }
  .page-header__description { animation: none; opacity: 1; transform: none; }
}
`;

// The icon at each position matches the corresponding numbered Word section.
const sectionIcons = [
  SearchCode, Network, Cable, Globe2, GitBranch, Hash, Layers3, Wifi, Radio,
  Network, Lock, Globe2, Database, Hash, Layers3, KeyRound, ShieldCheck, Network,
  SlidersHorizontal, RotateCcw, Activity, BellRing, Monitor, TrendingUp, Target,
  Database, Code2, Wrench, GitBranch, SearchCode, Cable, Radio, HardDrive,
  Network, Boxes, Globe2, Activity, Radio, UsersRound, Settings, ShieldCheck,
  ShieldCheck, ListTodo, Map, GitBranch, ClipboardCheck, HeartPulse, BellRing,
  Cloud, RotateCcw, FileText, Target, BookOpen, Compass,
];

const connectors = [
  'M324 385 C326 422 368 444 423 456',
  'M531 275 C529 335 548 395 573 459',
  'M768 226 L768 344',
  'M1005 275 C1007 335 988 395 970 460',
  'M1212 385 C1210 422 1168 444 1114 456',
];

const carouselPositions = {
  '-3': { desktopLeft: 7.5, desktopTop: 39, mobileLeft: -50, mobileTop: 24 },
  '-2': { desktopLeft: 16.0, desktopTop: 20.5, mobileLeft: -24, mobileTop: 18 },
  '-1': { desktopLeft: 29.5, desktopTop: 9.0, mobileLeft: 10, mobileTop: 12.5 },
  '0':  { desktopLeft: 44.925, desktopTop: 4.2, mobileLeft: 37, mobileTop: 8.5 },
  '1':  { desktopLeft: 60.35, desktopTop: 9.0, mobileLeft: 64, mobileTop: 12.5 },
  '2':  { desktopLeft: 73.85, desktopTop: 20.5, mobileLeft: 98, mobileTop: 18 },
  '3':  { desktopLeft: 82.35, desktopTop: 39, mobileLeft: 124, mobileTop: 24 },
};

const carouselOffsets = [-3, -2, -1, 0, 1, 2, 3];
const wrapSection = (index) => (index + networkSections.length) % networkSections.length;
const cardLabel = (title) => title.replace(/^Network /, '').replace(/ and /g, ' & ');

function RouterArtwork() {
  const vents = Array.from({ length: 14 }, (_, row) =>
    Array.from({ length: 46 }, (_, column) => ({ x: 352 + column * 18.5, y: 468 + row * 5.2 }))
  ).flat();

  return (
    <svg className="network-router" viewBox="0 0 1536 1024" preserveAspectRatio="none" role="img" aria-label="Futuristic glowing blue Wi-Fi router">
      <defs>
        <linearGradient id="routerMetal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#061024"/><stop offset=".22" stopColor="#31537b"/><stop offset=".43" stopColor="#071527"/><stop offset=".77" stopColor="#0a2040"/><stop offset="1" stopColor="#05101f"/></linearGradient>
        <linearGradient id="routerAntenna" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#030914"/><stop offset=".27" stopColor="#153459"/><stop offset=".53" stopColor="#061328"/><stop offset=".76" stopColor="#09234a"/><stop offset="1" stopColor="#010714"/></linearGradient>
        <linearGradient id="routerTop" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#142b4a"/><stop offset=".38" stopColor="#071326"/><stop offset="1" stopColor="#020915"/></linearGradient>
        <linearGradient id="routerFace" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#071733"/><stop offset=".6" stopColor="#020b20"/><stop offset="1" stopColor="#092755"/></linearGradient>
        <linearGradient id="routerSide" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#071025"/><stop offset=".45" stopColor="#13365f"/><stop offset="1" stopColor="#020b1d"/></linearGradient>
        <radialGradient id="routerFloor"><stop stopColor="#0074ff" stopOpacity=".8"/><stop offset=".48" stopColor="#009bff" stopOpacity=".32"/><stop offset="1" stopColor="#009bff" stopOpacity="0"/></radialGradient>
        <filter id="routerBlueGlow" x="-50%" y="-100%" width="200%" height="300%"><feGaussianBlur stdDeviation="7"/></filter>
        <filter id="routerSoftShadow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="16"/></filter>
        <clipPath id="routerVents"><path d="M337 482 Q768 442 1199 482 Q1273 493 1320 532 L1227 554 Q768 515 309 554 L216 532 Q263 493 337 482Z"/></clipPath>
      </defs>

      <ellipse cx="768" cy="877" rx="660" ry="91" fill="url(#routerFloor)"/>
      <ellipse cx="768" cy="857" rx="621" ry="60" fill="none" stroke="#a4eaff" strokeOpacity=".66" strokeWidth="3"/>
      <ellipse cx="768" cy="877" rx="542" ry="70" fill="none" stroke="#4dcaff" strokeOpacity=".42" strokeWidth="4"/>
      <ellipse cx="768" cy="875" rx="535" ry="28" fill="#001a63" opacity=".42" filter="url(#routerSoftShadow)"/>

      <g className="router-antenna">
        <path d="M242 554 L91 226 Q84 210 97 194 L111 186 Q131 180 143 199 L283 518 Z" fill="url(#routerAntenna)" stroke="#020b1e" strokeWidth="5"/>
        <path d="M99 203 Q112 187 129 197 L269 526" fill="none" stroke="#6ba8e8" strokeOpacity=".5" strokeWidth="3"/>
        <path d="M125 228 L251 524" stroke="#00aaff" strokeWidth="15" opacity=".8" filter="url(#routerBlueGlow)"/>
        <path d="M125 228 L251 524" stroke="#e4faff" strokeWidth="4" strokeLinecap="round"/>
        <path d="M93 203 L111 188 L128 192 L143 207" fill="none" stroke="#9ac7ff" strokeWidth="2"/>
      </g>
      <g transform="translate(1536 0) scale(-1 1)" className="router-antenna">
        <path d="M242 554 L91 226 Q84 210 97 194 L111 186 Q131 180 143 199 L283 518 Z" fill="url(#routerAntenna)" stroke="#020b1e" strokeWidth="5"/>
        <path d="M99 203 Q112 187 129 197 L269 526" fill="none" stroke="#6ba8e8" strokeOpacity=".5" strokeWidth="3"/>
        <path d="M125 228 L251 524" stroke="#00aaff" strokeWidth="15" opacity=".8" filter="url(#routerBlueGlow)"/>
        <path d="M125 228 L251 524" stroke="#e4faff" strokeWidth="4" strokeLinecap="round"/>
        <path d="M93 203 L111 188 L128 192 L143 207" fill="none" stroke="#9ac7ff" strokeWidth="2"/>
      </g>

      <path d="M337 482 Q768 442 1199 482 Q1330 501 1373 583 L1373 734 Q1359 816 1271 862 L1191 885 L345 885 L265 862 Q177 816 163 734 L163 583 Q206 501 337 482Z" fill="url(#routerMetal)" stroke="#030a1a" strokeWidth="8"/>
      <path d="M337 482 Q768 442 1199 482 Q1273 493 1320 532 L1227 554 Q768 515 309 554 L216 532 Q263 493 337 482Z" fill="url(#routerTop)" stroke="#28476c" strokeWidth="3"/>
      <g clipPath="url(#routerVents)" opacity=".78">{vents.map(({ x, y }) => <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="4.9" ry="1.8" fill="#010813" stroke="#315071" strokeWidth=".5" />)}</g>
      <path d="M217 533 Q273 495 341 489 Q768 452 1195 489 Q1263 495 1319 533" fill="none" stroke="#b6dfff" strokeOpacity=".42" strokeWidth="2"/>

      <path d="M182 581 Q206 544 274 526 L316 561 Q275 630 273 745 L333 852 L264 857 Q183 811 165 738 L165 614 Q167 592 182 581Z" fill="url(#routerSide)" stroke="#07162e" strokeWidth="5"/>
      <path d="M182 581 Q206 544 274 526 L316 561 Q275 630 273 745 L333 852 L264 857 Q183 811 165 738 L165 614 Q167 592 182 581Z" fill="none" stroke="#1c67af" strokeOpacity=".65" strokeWidth="3"/>
      <g transform="translate(1536 0) scale(-1 1)">
        <path d="M182 581 Q206 544 274 526 L316 561 Q275 630 273 745 L333 852 L264 857 Q183 811 165 738 L165 614 Q167 592 182 581Z" fill="url(#routerSide)" stroke="#07162e" strokeWidth="5"/>
        <path d="M182 581 Q206 544 274 526 L316 561 Q275 630 273 745 L333 852 L264 857 Q183 811 165 738 L165 614 Q167 592 182 581Z" fill="none" stroke="#1c67af" strokeOpacity=".65" strokeWidth="3"/>
      </g>
      <g fill="#010918" opacity=".95">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => <g key={i}><rect x={173 + i * 4} y={610 + i * 17} width="36" height="8" rx="3" transform={`rotate(15 ${173 + i * 4} ${610 + i * 17})`}/><rect x={1327 - i * 4} y={610 + i * 17} width="36" height="8" rx="3" transform={`rotate(-15 ${1327 - i * 4} ${610 + i * 17})`}/></g>)}
      </g>

      <path d="M335 521 Q768 500 1201 521 Q1289 528 1306 597 L1306 757 Q1299 846 1205 878 L331 878 Q237 846 230 757 L230 597 Q247 528 335 521Z" fill="url(#routerFace)" stroke="#00132b" strokeWidth="17"/>
      <path d="M335 521 Q768 500 1201 521 Q1289 528 1306 597 L1306 757 Q1299 846 1205 878 L331 878 Q237 846 230 757 L230 597 Q247 528 335 521Z" fill="none" stroke="#008fff" strokeWidth="18" opacity=".85" filter="url(#routerBlueGlow)"/>
      <path d="M335 521 Q768 500 1201 521 Q1289 528 1306 597 L1306 757 Q1299 846 1205 878 L331 878 Q237 846 230 757 L230 597 Q247 528 335 521Z" fill="none" stroke="#28aaff" strokeWidth="6"/>
      <path d="M349 535 Q768 515 1187 535 Q1267 541 1282 603 L1282 747 Q1276 827 1194 856 L342 856 Q260 827 254 747 L254 603 Q269 541 349 535Z" fill="none" stroke="#b4eaff" strokeOpacity=".85" strokeWidth="2"/>
      <path d="M346 882 Q768 900 1190 882" fill="none" stroke="#63c9ff" strokeWidth="4" filter="url(#routerBlueGlow)"/>
      <path d="M346 882 Q768 900 1190 882" fill="none" stroke="#38a9ff" strokeWidth="2"/>
      <path d="M165 738 Q179 785 220 812" fill="none" stroke="#00a7ff" strokeWidth="12" opacity=".8" filter="url(#routerBlueGlow)"/>
      <path d="M165 738 Q179 785 220 812" fill="none" stroke="#44ccff" strokeWidth="5" strokeLinecap="round"/>
      <path d="M1371 738 Q1357 785 1316 812" fill="none" stroke="#00a7ff" strokeWidth="12" opacity=".8" filter="url(#routerBlueGlow)"/>
      <path d="M1371 738 Q1357 785 1316 812" fill="none" stroke="#44ccff" strokeWidth="5" strokeLinecap="round"/>
      <path d="M333 872 L399 873 L410 902 L367 906 Q343 901 333 872Z M1203 872 L1137 873 L1126 902 L1169 906 Q1193 901 1203 872Z" fill="#020b1b" stroke="#09254a" strokeWidth="3"/>
      {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={676 + i * 43} y="510" width="24" height="5" rx="2.5" fill="#7ff7ff" filter="url(#routerBlueGlow)"/>)}
    </svg>
  );
}

export default function NetworkInfrastructureServicesPage({ onClose, onHome }) {
  const [active, setActive] = useState(0);
  const section = networkSections[active];
  const ActiveIcon = sectionIcons[active] ?? Network;

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

  return (
    <main className="network-page">
      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-7xl mx-auto pb-4 flex items-center justify-start gap-3 z-40 relative">
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
      <header className="page-header">
        <h1 className="page-header__title" aria-label="Network Infrastructure">
          {(() => {
            let letterIndex = 0;
            const words = "Network Infrastructure".split(" ");
            const totalLetters = 21;
            return words.map((word, wIdx) => (
              <span key={wIdx} className="page-header__word">
                {word.split("").map((char, cIdx) => {
                  const currentIdx = letterIndex++;
                  const isLeft = currentIdx < totalLetters / 2;
                  const step = Math.min(currentIdx, totalLetters - 1 - currentIdx);
                  return (
                    <span
                      key={cIdx}
                      className={`page-header__letter ${isLeft ? "page-header__letter--left" : "page-header__letter--right"}`}
                      style={{ animationDelay: `${0.15 + step * 0.055}s` }}
                      aria-hidden="true"
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
            ));
          })()}
        </h1>
        <p className="page-header__description">
          IBCS Network Infrastructure focuses on designing, implementing, and maintaining secure, high-availability network architectures. We help organisations establish resilient connectivity, optimize bandwidth, and ensure reliable communication across distributed environments.
        </p>
      </header>

      <div className="network-scene">
        <svg className="network-connectors" viewBox="0 0 1536 1024" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="lineGlow"><feGaussianBlur stdDeviation="4" /></filter>
            <linearGradient id="orbitArcGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="12%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#00caff" stopOpacity="0.8" />
              <stop offset="88%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Curved circular orbit track path behind carousel icons */}
          <path d="M 170 490 A 641 641 0 0 1 1366 490" className="carousel-orbit-arc-glow" />
          <path d="M 170 490 A 641 641 0 0 1 1366 490" className="carousel-orbit-arc" />

          {connectors.map((path, index) => <g key={path} className={index === 2 ? 'connector-active' : ''}><path d={path} className="connector-halo" filter="url(#lineGlow)" /><path d={path} className="connector-line" /></g>)}
          <circle cx="423" cy="456" r="11" className="connector-terminal" />
          <circle cx="1114" cy="456" r="10" className="connector-terminal" />
          <circle cx="768" cy="314" r="9" className="connector-terminal connector-terminal--active" />
        </svg>

        <nav className="network-menu" aria-label="Network service carousel">
          {carouselOffsets.map((offset) => {
            const index = wrapSection(active + offset);
            const item = networkSections[index];
            const Icon = sectionIcons[index] ?? Network;
            const pos = carouselPositions[offset] || { desktopLeft: 50, desktopTop: 10, mobileLeft: 50, mobileTop: 10 };
            return <button
              className={`network-menu__item ${offset === 0 ? 'network-menu__item--active' : ''} ${Math.abs(offset) === 3 ? 'network-menu__item--outside' : ''} ${Math.abs(offset) > 1 ? 'network-menu__item--mobile-outside' : ''}`}
              key={item.id}
              type="button"
              style={{
                '--desktop-left': `${pos.desktopLeft}%`,
                '--desktop-top': `${pos.desktopTop}%`,
                '--mobile-left': `${pos.mobileLeft}%`,
                '--mobile-top': `${pos.mobileTop}%`,
              }}
              onClick={() => setActive(index)}
              aria-current={offset === 0 ? 'page' : undefined}
              aria-label={`${item.id}. ${item.title}`}
              aria-hidden={Math.abs(offset) === 3 ? 'true' : undefined}
              tabIndex={offset === 0 ? 0 : -1}
              title={item.title}
            >
              <span className="network-menu__icon"><Icon strokeWidth={2.8} /></span>
              <span className="network-menu__label">{cardLabel(item.title)}</span>
            </button>;
          })}
        </nav>

        <div className="signal-field" aria-hidden="true">{Array.from({ length: 19 }, (_, index) => <i key={index} />)}</div>
        <div className="signal-mark" aria-hidden="true"><Wifi strokeWidth={3.5} /></div>
        <RouterArtwork />

        <section className="router-display" aria-live="polite" aria-label={section.title}>
          <div className="router-display__details">
            <div className="router-display__copy">
              <span className="router-display__eyebrow">Network Infrastructure Service {String(section.id).padStart(2, '0')}</span>
              <h1>{section.title}</h1>
              <p>{section.description}</p>
            </div>
            <div className="router-display__icon" aria-hidden="true"><ActiveIcon strokeWidth={1.8} /></div>
          </div>
        </section>
        <nav className="service-navigation" aria-label="Network service sections">
          <button type="button" onClick={() => setActive((current) => wrapSection(current - 1))}><ArrowLeft size={20} /> Previous</button>
          <span className="service-navigation__count">{String(section.id).padStart(2, '0')} / {networkSections.length}</span>
          <button type="button" onClick={() => setActive((current) => wrapSection(current + 1))}>Next <ArrowRight size={20} /></button>
        </nav>
      </div>
    </main>
  );
}
