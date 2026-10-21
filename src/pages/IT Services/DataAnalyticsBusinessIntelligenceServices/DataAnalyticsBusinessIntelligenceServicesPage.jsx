import { useEffect, useRef, useState } from 'react';
import { Home } from 'lucide-react';
import { dataAnalyticsText } from './DataAnalyticsBusinessIntelligenceServicesPageData.js';
import { biAnalyticsHeroBg as biAnalyticsBg } from '../../../components/CloudinaryLinks';

// Parse all 54 individual capabilities from data array
const servicesList = [];
let _curCat = 'DATA ANALYTICS & BUSINESS INTELLIGENCE';
(dataAnalyticsText || []).forEach((line, idx) => {
  if (!line || !line.trim()) return;
  const pageMatch = line.match(/^PAGE\s+[A-Z0-9]+(\s+\/\s*(.*))?$/i);
  if (pageMatch) {
    if (pageMatch[2]) _curCat = pageMatch[2].trim();
    return;
  }
  const match = line.match(/^(\d+)\.\s+(.*)/);
  if (match) {
    const num = parseInt(match[1], 10);
    const title = match[2].trim();
    const nextLine = dataAnalyticsText[idx + 1];
    const desc = nextLine && !/^\d+\./.test(nextLine) && !/^PAGE\s+/i.test(nextLine) ? nextLine.trim() : '';
    servicesList.push({
      id: num,
      num: num.toString().padStart(2, '0'),
      title,
      desc,
      category: _curCat,
    });
  }
});

function useSaved(key, fallback) {
  const [value, set] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  });
  const [error, setError] = useState('');
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setError('');
    } catch {
      setError('Storage unavailable. Changes remain only in this session.');
    }
  }, [key, value]);
  return [value, set, error];
}

function AppleLogo({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-label="Apple logo" role="img">
      <path
        fill="currentColor"
        d="M17.05 12.04c.02 3.27 2.87 4.36 2.9 4.37-.02.08-.46 1.56-1.5 3.09-.9 1.32-1.84 2.64-3.31 2.67-1.45.03-1.92-.86-3.58-.86-1.66 0-2.18.83-3.56.89-1.43.05-2.51-1.43-3.42-2.74-1.85-2.68-3.26-7.58-1.36-10.89.94-1.64 2.62-2.68 4.44-2.71 1.39-.03 2.7.94 3.55.94.85 0 2.44-1.16 4.12-.99.71.03 2.68.29 3.95 2.15-.1.06-2.36 1.37-2.33 4.08ZM14.32 4.04c.76-.92 1.28-2.19 1.14-3.46-1.1.04-2.43.73-3.22 1.65-.71.82-1.34 2.13-1.17 3.38 1.23.1 2.49-.63 3.25-1.57Z"
      />
    </svg>
  );
}

const colors = ['#173d8c', '#732d7c', '#174c48', '#a25823'];

export default function DataAnalyticsBusinessIntelligenceServices({ onClose, onHome }) {
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

  const [angle, setAngle] = useState({ x: 0, y: 0 });
  const [locked, setLocked] = useState(false);
  const [power, setPower] = useState(true);
  const [now, setNow] = useState(new Date());
  const [boot, setBoot] = useState('ready');
  const [batteryLevel, setBatteryLevel] = useState(100);
  const deviceRef = useRef(null);
  const [settings, setSettings, settingsError] = useSaved('ipad-settings', {
    brightness: 100,
    wallpaper: 0,
    dark: false,
  });

  // 54-Capability pagination & animation states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const scrollRef = useRef(null);

  const totalServices = servicesList.length > 0 ? servicesList.length : 54;
  const currentService = servicesList[currentIndex] || servicesList[0] || {
    id: 1,
    num: '01',
    title: 'Business Intelligence Readiness Assessment',
    desc: 'IBCS can help assess an organisation’s readiness for analytics and business intelligence.',
    category: 'DATA ANALYTICS & BUSINESS INTELLIGENCE'
  };

  const handlePrev = () => {
    if (currentIndex <= 0 || isFlashing) return;
    setIsFlashing(true);
    setTimeout(() => {
      setCurrentIndex(p => Math.max(0, p - 1));
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, 480);
    setTimeout(() => setIsFlashing(false), 1150);
  };

  const handleNext = () => {
    if (currentIndex >= totalServices - 1 || isFlashing) return;
    setIsFlashing(true);
    setTimeout(() => {
      setCurrentIndex(p => Math.min(totalServices - 1, p + 1));
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, 480);
    setTimeout(() => setIsFlashing(false), 1150);
  };

  // Keyboard navigation (Left / Right Arrow keys)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentIndex, isFlashing, totalServices]);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (navigator.getBattery) {
      navigator.getBattery().then(b => {
        const u = () => setBatteryLevel(Math.round(b.level * 100));
        u();
        b.addEventListener('levelchange', u);
      });
    }
  }, []);



  const isDark = settings.dark;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
@import "tailwindcss";

:root {
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    color: #1d1d1f;
    background: #f3f3f5;
    font-synthesis: none
}

* {
    box-sizing: border-box
}

button,
input,
textarea {
    font: inherit
}

button {
    cursor: pointer
}

button:focus-visible {
    outline: 3px solid #75bdff;
    outline-offset: 3px
}

.product-scene {
    min-height: 100svh;
    padding: 36px 16px 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: radial-gradient(ellipse at 50% 25%, #fff 0%, #f6f6f8 46%, #e8e9ec 100%);
    overflow-x: hidden;
    overflow-y: auto;
}

.workspace {
    display: block;
    width: 100%;
    max-width: none;
    margin: 0
}

.stage {
    height: 640px;
    min-height: 540px;
    perspective: 1800px;
    touch-action: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.stage:after {
    content: '';
    position: absolute;
    left: 50%;
    top: calc(50% + 230px);
    width: 570px;
    height: 30px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(ellipse, #25293622, transparent 70%);
    pointer-events: none;
    z-index: 0
}

.device {
    width: 760px;
    height: 530px;
    position: relative;
    transform-style: preserve-3d;
    flex-shrink: 0;
    will-change: transform;
    z-index: 1;
    zoom: 1.15;
    cursor: default
}

.device:active {
    cursor: default
}

.chassis {
    position: absolute;
    inset: 0;
    border-radius: 35px;
    border: 1px solid #a4a7ab;
    background: linear-gradient(120deg, #f0f1f3, #aab0b7 25%, #fafbfc 55%, #929aa4);
    pointer-events: none
}

.front,
.back {
    position: absolute;
    inset: 0;
    border-radius: 35px;
    backface-visibility: hidden
}

.front {
    transform: translateZ(6px);
    background: #07080a;
    border: 2px solid #bac0c6;
    padding: 24px;
    box-shadow: inset 0 0 0 1px #282b30
}

.back {
    transform: translateZ(-6px) rotateY(180deg);
    border-radius: 35px;
    background: linear-gradient(115deg, #c3c7cb, #e5e7e9 43%, #cdd1d5 80%, #bcc2c8);
    border: 1px solid #aab1b8;
    color: #757f8a;
    display: flex;
    align-items: center;
    justify-content: center
}

.back-logo {
    width: 72px;
    height: 84px;
    color: #62666c;
    filter: drop-shadow(0 1px 1px #fff9)
}

.back-label {
    position: absolute;
    bottom: 66px;
    font-size: 15px;
    letter-spacing: 0;
    color: #73777c
}

.connector {
    position: absolute;
    bottom: 28px;
    font-size: 8px;
    letter-spacing: 7px;
    color: #979b9f
}

.camera {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 80px;
    height: 88px;
    border-radius: 19px;
    background: linear-gradient(145deg, #b5bbc0, #ced3d7);
    border: 1px solid #a6adb4;
    box-shadow: 0 2px 3px #60667066;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px
}

.camera i {
    width: 29px;
    height: 29px;
    border-radius: 50%;
    background: radial-gradient(circle, #163954 10%, #030509 33%, #24303d 50%, #070809 68%);
    border: 2px solid #626c77;
    box-shadow: 0 0 0 1px #dce1e5, inset 0 0 2px #fff5
}

.camera small {
    width: 15px;
    height: 15px;
    background: #ddd5c1;
    border-radius: 50%
}

.lens {
    position: absolute;
    left: 50%;
    top: 11px;
    width: 5px;
    height: 5px;
    background: radial-gradient(circle, #173f6f, #04070c);
    border-radius: 50%
}

.hardware-power {
    position: absolute;
    right: 45px;
    top: -5px;
    width: 50px;
    height: 4px;
    background: #bac4ce;
    border-radius: 3px
}

.screen {
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    cursor: auto;
    background-image: radial-gradient(ellipse at 70% 120%, #ffc0caaa, transparent 65%), radial-gradient(ellipse at 10% 0%, #69d3ffaa, transparent 65%), conic-gradient(from 140deg at 65% 45%, transparent, #0c195677, #7782d855, transparent);
    color: white
}

.status {
    height: 28px;
    padding: 7px 18px;
    display: flex;
    justify-content: space-between;
    font-size: 9px
}

.status button {
    background: none;
    border: none;
    color: inherit;
    font-size: 9px
}

.home-indicator {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 125px;
    height: 5px;
    border: 0;
    border-radius: 5px;
    background: #fff9
}

.off,
.lock {
    position: absolute;
    inset: 0;
    width: 100%;
    background: #03060a;
    border: 0;
    color: white
}

.off {
    background: #000;
    font-size: 13px;
    color: #697685
}

.lock {
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
}

.lock h2 {
    font-size: 60px;
    margin: 15px
}

.lock p {
    font-size: 14px
}

.lock small {
    margin-top: 100px
}

.boot-screen {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    background: #000;
    z-index: 20
}

.boot-logo {
    width: 55px;
    height: 65px;
    color: #fff;
    animation: logo-appear .6s ease both
}

.save-error {
    position: fixed;
    bottom: 12px;
    font-size: 12px;
    color: #922
}

@keyframes logo-appear {
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
}

@media(max-width:1100px) {
    .device {
        zoom: .85
    }
    .stage {
        min-height: 480px
    }
}

@media(max-width:760px) {
    .device {
        zoom: .62
    }
    .stage {
        min-height: 400px
    }
    .stage:after {
        width: 360px;
        top: calc(50% + 158px)
    }
}

@media(max-width:500px) {
    .device {
        zoom: .43
    }
    .stage {
        min-height: 300px
    }
    .stage:after {
        width: 240px;
        top: calc(50% + 110px)
    }
}

@media(max-width:360px) {
    .device {
        zoom: .36
    }
}

@media(prefers-reduced-motion:reduce) {
    .device {
        will-change: auto
    }
    .boot-logo {
        animation: none
    }
}

.iphone-only {
    display: none !important
}

@media(max-width:760px) {
    .ipad-only {
        display: none !important
    }

    .iphone-only {
        display: block !important
    }

    .iphone-buttons.iphone-only {
        display: flex !important
    }

    .device {
        width: 360px !important;
        height: 720px !important;
        zoom: 0.8 !important
    }

    .stage {
        min-height: 600px
    }

    .stage:after {
        width: 280px;
        top: calc(50% + 320px)
    }

    .chassis {
        border-radius: 55px !important;
        border-color: #3a1114 !important;
        background: linear-gradient(120deg, #5a1c22, #3b0e12 25%, #682129 55%, #3a1114) !important
    }

    .front {
        border-radius: 55px !important;
        padding: 14px !important;
        background: #050101 !important;
        border-color: #1e0a0c !important;
        transform: translateZ(10px) !important
    }

    .back {
        border-radius: 55px !important;
        background: linear-gradient(115deg, #4e1a1e, #46161a 43%, #521d22 80%, #3d1316) !important;
        border-color: #3d1316 !important;
        transform: translateZ(-10px) rotateY(180deg) !important
    }

    .iphone-camera {
        position: absolute;
        top: 18px;
        left: 18px;
        width: 150px;
        height: 155px;
        border-radius: 38px;
        background: linear-gradient(145deg, #642127, #431519);
        box-shadow: 0 3px 6px #00000066, inset 0 0 0 1px #752930;
        display: flex;
        flex-wrap: wrap
    }

    .lens-main {
        position: absolute;
        top: 15px;
        left: 15px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: radial-gradient(circle, #0a0a0a 20%, #181818);
        border: 4px solid #361216;
        box-shadow: inset 0 0 5px #000
    }

    .lens-ultra {
        position: absolute;
        bottom: 15px;
        left: 15px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: radial-gradient(circle, #0a0a0a 20%, #181818);
        border: 4px solid #361216;
        box-shadow: inset 0 0 5px #000
    }

    .lens-tele {
        position: absolute;
        top: 50px;
        right: 15px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: radial-gradient(circle, #0a0a0a 20%, #181818);
        border: 4px solid #361216;
        box-shadow: inset 0 0 5px #000
    }

    .flash {
        position: absolute;
        top: 25px;
        right: 32px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #fff5e0;
        border: 2px solid #ddd2be;
        box-shadow: inset 0 0 3px #fff
    }

    .lidar {
        position: absolute;
        bottom: 30px;
        right: 32px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #151515;
        border: 1px solid #222
    }

    .back-logo {
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
        position: absolute !important;
        color: #350e12 !important;
        filter: none !important;
        width: 50px !important;
        height: 60px !important
    }

    .screen {
        border-radius: 42px !important;
        background-image: radial-gradient(circle at 0% 50%, #b5474c 0%, transparent 70%), radial-gradient(circle at 100% 100%, #571c21 0%, transparent 60%), linear-gradient(to bottom, #1c080a, #471419) !important;
        background-color: transparent !important
    }

    .dynamic-island {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        width: 115px;
        height: 34px;
        background: #000;
        border-radius: 20px;
        z-index: 100;
        box-shadow: inset 0 0 2px #fff3
    }

    .island-lens {
        position: absolute;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: radial-gradient(circle, #111, #000);
        box-shadow: inset 0 0 2px #fff6
    }

    .hardware-power {
        width: 4px !important;
        height: 75px !important;
        right: -4px !important;
        top: 220px !important;
        border-radius: 0 3px 3px 0 !important;
        background: linear-gradient(to right, #3a1114, #682129) !important;
        border: 1px solid #1e0a0c !important;
        border-left: none !important;
        box-shadow: 2px 2px 5px #00000088 !important;
        z-index: -1;
    }

    .iphone-buttons {
        position: absolute;
        left: -4px;
        top: 170px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 4px;
        z-index: -1;
    }

    .btn-action, .btn-vol-up, .btn-vol-down {
        background: linear-gradient(to left, #3a1114, #682129) !important;
        border-radius: 3px 0 0 3px !important;
        border: 1px solid #1e0a0c !important;
        border-right: none !important;
        box-shadow: -2px 2px 5px #00000088 !important;
    }

    .btn-action {
        height: 35px;
    }

    .btn-vol-up {
        height: 60px;
    }

    .btn-vol-down {
        height: 60px;
    }

    .home-indicator {
        bottom: 6px !important;
        width: 130px !important
    }
}

.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0; }

.dynamic-island { border-radius: 24px !important; }

.hardware-power::after, .btn-action::after, .btn-vol-up::after, .btn-vol-down::after { content: ''; position: absolute; top: -15px; bottom: -15px; left: -15px; right: -15px; min-width: 44px; min-height: 44px; }

.home-indicator::after { content: ''; position: absolute; top: -20px; bottom: -20px; left: -20px; right: -20px; min-height: 44px; }

.data-analytics-scroll {
  padding: 10px 14px;
  scrollbar-width: thin;
  scrollbar-color: rgba(56, 189, 248, 0.3) transparent;
}

.data-analytics-scroll::-webkit-scrollbar {
  width: 4px;
}

.data-analytics-scroll::-webkit-scrollbar-thumb {
  background: rgba(56, 189, 248, 0.3);
  border-radius: 4px;
}

@media(max-width:760px) {
  .product-scene {
    padding: 24px 12px 36px !important;
  }
  .data-analytics-scroll {
    padding: 8px 10px !important;
  }
}

@media(max-width:440px) {
  .device {
    zoom: 0.78 !important;
  }
}

@media(max-width:380px) {
  .device {
    zoom: 0.7 !important;
  }
}

@media(max-width:330px) {
  .device {
    zoom: 0.62 !important;
  }
}

.crt-active {
  animation: screenCardTransition 1.15s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  transform-origin: center center;
}

@keyframes screenCardTransition {
  0% {
    transform: scale(1);
    opacity: 1;
    filter: blur(0px);
  }
  42% {
    transform: scale(0.92);
    opacity: 0;
    filter: blur(8px);
  }
  54% {
    transform: scale(0.92);
    opacity: 0;
    filter: blur(8px);
  }
  100% {
    transform: scale(1);
    opacity: 1;
    filter: blur(0px);
  }
}

@keyframes textSlideReveal {
  0% {
    opacity: 0;
    transform: translateY(22px) scale(0.95);
    filter: blur(8px);
  }
  45% {
    opacity: 0.75;
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) scale(1);
    filter: blur(0px);
  }
}

@keyframes radarPulse {
  0%, 100% {
    transform: scale(0.9);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.4);
    opacity: 1;
    box-shadow: 0 0 10px #38bdf8;
  }
}

.anim-text-reveal {
  animation: textSlideReveal 0.95s cubic-bezier(0.16, 1, 0.3, 1) both;
}`,
        }}
      />
      <main className="product-scene">
        {/* Top Header Navigation buttons */}
        <div
          style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto 16px auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '12px',
            position: 'relative',
            zIndex: 30,
          }}
        >
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

        <header
          style={{
            width: '100%',
            maxWidth: '920px',
            textAlign: 'center',
            margin: '0 auto 28px auto',
            padding: '0 16px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(28px, 4.2vw, 42px)',
              fontWeight: '850',
              letterSpacing: '-1px',
              color: '#0f172a',
              margin: '0 0 14px 0',
              lineHeight: 1.2,
            }}
          >
            Data Analytics &amp; Business Intelligence
          </h1>
          <p
            style={{
              fontSize: 'clamp(13.5px, 1.8vw, 15px)',
              lineHeight: 1.72,
              color: '#475569',
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            IBCS Data Analytics &amp; Business Intelligence focuses on transforming complex datasets into meaningful insights, interactive dashboards, and strategic reports. We help organisations make informed, data-driven decisions that drive operational efficiency and growth.
          </p>
        </header>
        <div className="workspace">
          <section className="stage" aria-label="Interactive 3D Device">
            <div
              ref={deviceRef}
              className="device"
              style={{ transform: `rotateX(${angle.x}deg) rotateY(${angle.y}deg)` }}
            >
              {Array.from({ length: 11 }, (_, i) => (
                <div key={i} className="chassis" style={{ transform: `translateZ(${i - 5}px)` }} />
              ))}
              <div className="back">
                <div className="camera ipad-only">
                  <i />
                  <i />
                  <small />
                </div>
                <div className="iphone-camera iphone-only">
                  <div className="lens-main" />
                  <div className="lens-ultra" />
                  <div className="lens-tele" />
                  <div className="flash" />
                  <div className="lidar" />
                </div>
                <AppleLogo className="back-logo" />
                <span className="back-label ipad-only">iPad</span>
                <div className="connector ipad-only">● ● ●</div>
              </div>
              <div className="front">
                <button
                  aria-label="Power button"
                  className="hardware-power"
                  onClick={() => {
                    if (boot === 'ready') setPower(p => !p);
                  }}
                />
                <div className="iphone-buttons iphone-only">
                  <button className="btn-action" />
                  <button className="btn-vol-up" />
                  <button className="btn-vol-down" />
                </div>
                <div className="lens ipad-only" />
                <div className="dynamic-island iphone-only">
                  <div className="island-lens" />
                </div>
                <div
                  className={`screen ${settings.dark ? 'dark' : ''}`}
                  style={{
                    pointerEvents: boot === 'ready' ? 'auto' : 'none',
                    filter: `brightness(${settings.brightness}%)`,
                    background: boot === 'ready'
                      ? `linear-gradient(180deg, rgba(3, 9, 24, 0.65) 0%, rgba(2, 6, 18, 0.88) 100%), url('${biAnalyticsBg}') center/cover no-repeat`
                      : '#000',
                  }}
                >
                  {boot === 'flip' ? (
                    <div className="boot-screen" />
                  ) : boot === 'logo' ? (
                    <div className="boot-screen">
                      <AppleLogo className="boot-logo" />
                    </div>
                  ) : !power ? (
                    <button className="off" onClick={() => setPower(true)}>
                      Tap to wake
                    </button>
                  ) : locked ? (
                    <button className="lock" onClick={() => setLocked(false)}>
                      <span>⌑</span>
                      <h2>
                        {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </h2>
                      <p>
                        {now.toLocaleDateString(undefined, {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <small>Tap to unlock</small>
                    </button>
                  ) : (
                    <>
                      <div
                        className="status"
                        style={{
                          background: 'rgba(3, 9, 24, 0.5)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          borderBottom: '1px solid rgba(56, 189, 248, 0.15)',
                          color: '#93c5fd',
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        <span>
                          {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          <span className="ipad-only">
                            {' '}
                            &nbsp; {now.toLocaleDateString([], { month: 'short', day: 'numeric' })}
                          </span>
                        </span>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <span>
                            <span className="ipad-only">▰ Wi-Fi · </span>
                            {batteryLevel}% ▣
                          </span>
                          <button
                            aria-label="Lock screen"
                            onClick={() => setLocked(true)}
                            className="ipad-only"
                            style={{
                              background: '#ffffff22',
                              borderRadius: '4px',
                              padding: '2px 6px',
                              border: 'none',
                              color: 'inherit',
                              cursor: 'pointer',
                            }}
                          >
                            🔒 Lock
                          </button>
                        </div>
                      </div>

                      {/* Data Analytics Screen Content */}
                      <div
                        className={'data-analytics-container ' + (isFlashing ? 'crt-active' : '')}
                        style={{
                          flex: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          height: 'calc(100% - 28px)',
                          background: 'transparent',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          ref={scrollRef}
                          className="data-analytics-scroll"
                          style={{
                            flex: 1,
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '16px 20px',
                            background: 'transparent',
                          }}
                        >
                          {/* Single Capability Card Preview with Animation */}
                          <div
                            key={currentIndex}
                            className="anim-text-reveal"
                            style={{
                              width: '100%',
                              maxWidth: '460px',
                              background: 'transparent',
                              borderRadius: '16px',
                              padding: '6px 10px',
                              border: 'none',
                              boxShadow: 'none',
                              position: 'relative',
                              textAlign: 'center',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                            }}
                          >
                            {/* Large Heading */}
                            <h2
                              style={{
                                fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif",
                                fontSize: 'clamp(20px, 2.3vw, 24px)',
                                fontWeight: '800',
                                lineHeight: '1.25',
                                letterSpacing: '-0.02em',
                                margin: '0 0 10px 0',
                                color: '#ffffff',
                                textAlign: 'center',
                                textShadow: '0 2px 10px rgba(0, 0, 0, 0.95), 0 0 20px rgba(56, 189, 248, 0.4)',
                              }}
                            >
                              {currentService.title}
                            </h2>

                            {/* Centered Neon Divider Line */}
                            <div
                              style={{
                                width: '160px',
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent 0%, #38bdf8 50%, transparent 100%)',
                                margin: '0 auto 14px auto',
                                boxShadow: '0 0 10px rgba(56, 189, 248, 0.7)',
                              }}
                            />

                            {/* Description Paragraph */}
                            <p
                              style={{
                                fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                                fontSize: 'clamp(13px, 1.35vw, 15px)',
                                fontWeight: '400',
                                lineHeight: '1.75',
                                color: '#e2e8f0',
                                letterSpacing: '0.01em',
                                margin: 0,
                                textAlign: 'center',
                                textShadow: '0 1px 8px rgba(0, 0, 0, 0.95), 0 0 16px rgba(0, 0, 0, 0.9)',
                              }}
                            >
                              {currentService.desc}
                            </p>
                          </div>
                        </div>

                        {/* 54-Service Step-by-Step Navigation Bar (NO "1 of 6"!) */}
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px 20px',
                            borderTop: '1px solid rgba(56, 189, 248, 0.22)',
                            background: 'rgba(3, 10, 26, 0.88)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            zIndex: 60,
                          }}
                        >
                          <button
                            type="button"
                            onClick={handlePrev}
                            disabled={currentIndex === 0 || isFlashing}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '8px 16px',
                              borderRadius: '100px',
                              flexShrink: 0,
                              border: '1px solid rgba(56, 189, 248, 0.35)',
                              background: 'linear-gradient(135deg, rgba(8, 47, 73, 0.8) 0%, rgba(3, 20, 40, 0.9) 100%)',
                              color: '#ffffff',
                              opacity: currentIndex === 0 || isFlashing ? 0.35 : 1,
                              cursor: currentIndex === 0 || isFlashing ? 'not-allowed' : 'pointer',
                              fontSize: '12.5px',
                              fontWeight: '700',
                              fontFamily: "'Outfit', sans-serif",
                              transition: 'all 0.2s ease',
                              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
                              letterSpacing: '0.4px',
                            }}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="m15 18-6-6 6-6" />
                            </svg>
                            <span>Previous</span>
                          </button>

                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: '4px',
                              flex: 1,
                              maxWidth: '220px',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "'Outfit', sans-serif",
                                  fontSize: '12px',
                                  color: '#38bdf8',
                                  fontWeight: '800',
                                  letterSpacing: '1px',
                                  textTransform: 'uppercase',
                                }}
                              >
                                SERVICE {currentService.num}
                              </span>
                              <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px', fontWeight: 'bold' }}>/</span>
                              <span
                                style={{
                                  fontFamily: "'Outfit', sans-serif",
                                  fontSize: '12px',
                                  color: '#94a3b8',
                                  fontWeight: '700',
                                  letterSpacing: '1px',
                                }}
                              >
                                {totalServices}
                              </span>
                            </div>

                            <div
                              style={{
                                width: '100%',
                                height: '4px',
                                background: 'rgba(255, 255, 255, 0.12)',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                position: 'relative',
                              }}
                            >
                              <div
                                style={{
                                  width: `${((currentIndex + 1) / totalServices) * 100}%`,
                                  height: '100%',
                                  background: 'linear-gradient(90deg, #0284c7 0%, #38bdf8 100%)',
                                  boxShadow: '0 0 10px rgba(56, 189, 248, 0.8)',
                                  borderRadius: '10px',
                                  transition: 'width 0.85s cubic-bezier(0.22, 1, 0.36, 1)',
                                }}
                              />
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={handleNext}
                            disabled={currentIndex >= totalServices - 1 || isFlashing}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '8px 16px',
                              borderRadius: '100px',
                              flexShrink: 0,
                              border: '1px solid rgba(56, 189, 248, 0.45)',
                              background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                              color: '#ffffff',
                              opacity: currentIndex >= totalServices - 1 || isFlashing ? 0.35 : 1,
                              cursor: currentIndex >= totalServices - 1 || isFlashing ? 'not-allowed' : 'pointer',
                              fontSize: '12.5px',
                              fontWeight: '700',
                              fontFamily: "'Outfit', sans-serif",
                              transition: 'all 0.2s ease',
                              boxShadow: '0 4px 16px rgba(2, 132, 199, 0.4)',
                              letterSpacing: '0.4px',
                            }}
                          >
                            <span>Next</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <button className="home-indicator" aria-label="Go home" />
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
        {settingsError && (
          <p className="save-error" role="alert">
            {settingsError}
          </p>
        )}
      </main>
    </>
  );
}
