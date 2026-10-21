import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Home } from "lucide-react";
import { softwareProductIntroductionData } from "./ProductIntroductionPageData";

/* =========================================================================
   EMBEDDED STYLES FOR SMARTWATCH, ANIMATIONS & PHYSICS
   ========================================================================= */
const embeddedStyles = `
@keyframes letterFlyIn {
  0% { transform: translateX(100vw); filter: blur(4px) drop-shadow(0 0 12px rgba(0, 103, 105, 0.4)); color: #006769; opacity: 1; }
  68% { transform: translateX(-8px); filter: blur(0px) drop-shadow(0 0 14px rgba(0, 103, 105, 0.3)); color: #006769; }
  84% { transform: translateX(3px); filter: blur(0px); color: inherit; }
  93% { transform: translateX(-1px); filter: blur(0px); }
  100% { transform: translateX(0); filter: blur(0px); color: inherit; }
}

@keyframes letterFlyFast {
  0% { transform: translateX(100vw); filter: blur(3px) drop-shadow(0 0 10px rgba(0, 122, 126, 0.35)); color: #007A7E; opacity: 1; }
  70% { transform: translateX(-5px); filter: blur(0px) drop-shadow(0 0 10px rgba(0, 122, 126, 0.3)); color: #007A7E; }
  86% { transform: translateX(1.8px); color: inherit; }
  100% { transform: translateX(0); filter: blur(0px); color: inherit; }
}

@keyframes impactSpark {
  0% { opacity: 0; transform: translate(-50%, 4px) scale(0.6); }
  40% { opacity: 1; transform: translate(-50%, -3px) scale(1.15); }
  100% { opacity: 0; transform: translate(-50%, -10px) scale(1.3); }
}

@keyframes trailFade {
  0% { opacity: 0.9; transform: translateY(-50%) scaleX(1); }
  60% { opacity: 0.7; }
  80% { opacity: 0.2; transform: translateY(-50%) scaleX(0.4); }
  100% { opacity: 0; transform: translateY(-50%) scaleX(0); }
}

@keyframes underlineSweep {
  0% { width: 0%; opacity: 0; }
  40% { opacity: 1; }
  100% { width: 100%; opacity: 1; }
}

@keyframes flarePulse {
  0% { transform: translate(-50%, -50%) rotate(45deg) scale(0.4); opacity: 0; }
  50% { transform: translate(-50%, -50%) rotate(45deg) scale(1.3); opacity: 1; }
  100% { transform: translate(-50%, -50%) rotate(45deg) scale(1); opacity: 0.9; }
}

@keyframes collisionLeftGroup {
  0% { transform: translate3d(-34vw, 0, 0); opacity: 0; }
  12% { opacity: 1; }
  35% { transform: translate3d(0, 0, 0); }
  56% { transform: translate3d(0, 0, 0); }
  64% { transform: translate3d(8px, 0, 0); }
  72% { transform: translate3d(7px, 0, 0); }
  80% { transform: translate3d(-10px, 0, 0); }
  90% { transform: translate3d(2px, 0, 0); }
  96% { transform: translate3d(-0.5px, 0, 0); }
  100% { transform: translate3d(0, 0, 0); opacity: 1; }
}

@keyframes collisionRightGroup {
  0% { transform: translate3d(34vw, 0, 0); opacity: 0; }
  12% { opacity: 1; }
  35% { transform: translate3d(0, 0, 0); }
  56% { transform: translate3d(0, 0, 0); }
  64% { transform: translate3d(-8px, 0, 0); }
  72% { transform: translate3d(-7px, 0, 0); }
  80% { transform: translate3d(10px, 0, 0); }
  90% { transform: translate3d(-2px, 0, 0); }
  96% { transform: translate3d(0.5px, 0, 0); }
  100% { transform: translate3d(0, 0, 0); opacity: 1; }
}

@keyframes letterScatterIn {
  0% { transform: translate3d(calc(var(--sx) * var(--scatter-mult, 1)), calc(var(--sy) * var(--scatter-mult, 1)), 0) scale(var(--sinit)); opacity: 0; }
  15% { opacity: 1; }
  75% { transform: translate3d(calc(var(--sx) * var(--scatter-mult, 1) * 0.22), calc(var(--sy) * var(--scatter-mult, 1) * 0.22), 0) scale(0.97); }
  100% { transform: translate3d(0, 0, 0) scale(1); opacity: 1; }
}

@keyframes letterShockwave {
  0% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(0, 103, 105, 0)); }
  38% { transform: scale(1.18); filter: drop-shadow(0 0 7px rgba(0, 122, 126, 0.4)); }
  72% { transform: scale(0.96); filter: drop-shadow(0 0 2px rgba(0, 122, 126, 0.15)); }
  100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(0, 103, 105, 0)); }
}

@keyframes floatShield1 {
  0% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50% { transform: translate3d(-5px, -15px, 0) rotate(2.5deg); }
  100% { transform: translate3d(4px, -7px, 0) rotate(-2deg); }
}

@keyframes floatShield2 {
  0% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50% { transform: translate3d(6px, -12px, 0) rotate(-3deg); }
  100% { transform: translate3d(-4px, -6px, 0) rotate(2deg); }
}

@keyframes floatShield3 {
  0% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50% { transform: translate3d(-4px, 10px, 0) rotate(2deg); }
  100% { transform: translate3d(5px, -8px, 0) rotate(-1.5deg); }
}

@keyframes floatShield4 {
  0% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50% { transform: translate3d(5px, 12px, 0) rotate(-2.5deg); }
  100% { transform: translate3d(-6px, -10px, 0) rotate(3deg); }
}

@keyframes showcaseContentFadeIn {
  0% { opacity: 0; transform: translateY(14px) scale(0.99); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

.animate-letter-fly-in { animation: letterFlyIn 0.26s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
.animate-letter-fly-fast { animation: letterFlyFast 0.22s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
.animate-impact-spark { animation: impactSpark 0.18s ease-out forwards; }
.animate-trail-fade { animation: trailFade 0.26s ease-out forwards; }
.animate-underline-sweep { animation: underlineSweep 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-flare-pulse { animation: flarePulse 0.6s 0.25s cubic-bezier(0.16, 1, 0.3, 1) both; }
.animate-collision-left { animation: collisionLeftGroup 1.9s cubic-bezier(0.2, 1, 0.3, 1) forwards; will-change: transform, opacity; }
.animate-collision-right { animation: collisionRightGroup 1.9s cubic-bezier(0.2, 1, 0.3, 1) forwards; will-change: transform, opacity; }
.animate-letter-scatter { animation: letterScatterIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) var(--letter-delay, 0s) forwards; will-change: transform, opacity; }
.animate-letter-shockwave { animation: letterShockwave 0.24s cubic-bezier(0.2, 1, 0.3, 1) var(--shockwave-delay) both; will-change: transform, filter; }
.animate-float-shield-1 { animation: floatShield1 6.5s ease-in-out infinite alternate; will-change: transform; }
.animate-float-shield-2 { animation: floatShield2 8s ease-in-out infinite alternate; will-change: transform; }
.animate-float-shield-3 { animation: floatShield3 7.5s ease-in-out infinite alternate; will-change: transform; }
.animate-float-shield-4 { animation: floatShield4 10s ease-in-out infinite alternate; will-change: transform; }
.animate-content-stagger-1 { animation: showcaseContentFadeIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-content-stagger-2 { animation: showcaseContentFadeIn 0.42s 0.07s cubic-bezier(0.16, 1, 0.3, 1) backwards; }

.showcase-watch-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.showcase-watch-container {
  --titanium: #d1d5db;
  --titanium-light: #f9fafb;
  --titanium-dark: #9ca3af;
  --screen-bg: #f8fdfd;
  --ring-red: #ff3b30;
  --ring-green: #006769;
  --ring-blue: #007aff;
  --banana: #eab308;
  --banana-light: #fef9c3;
  --text-main: #042c2e;
  --text-dim: #8e8e93;
  --case-shadow: rgba(0, 103, 105, 0.14);
  --watch-w: 290px;
  --watch-h: 385px;
  --ease: cubic-bezier(0.2, 1, 0.2, 1);
  position: relative;
  width: 100%;
  max-width: var(--watch-w);
  height: var(--watch-h);
  perspective: 2000px;
  user-select: none;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .showcase-watch-container {
    --watch-w: 265px;
    --watch-h: 350px;
  }
}

.showcase-watch-container .watch-case {
  border-radius: 56px;
  padding: 8px;
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, var(--titanium-light), var(--titanium), var(--titanium-dark));
  z-index: 10;
  box-shadow: 0 24px 50px var(--case-shadow), inset 0 1px 1px rgba(255, 255, 255, 0.95), inset 0 -3px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 1px solid #c2c6cc;
  transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);
}

.showcase-watch-container:hover .watch-case {
  transform: translateY(-6px);
  box-shadow: 0 35px 65px rgba(0, 103, 105, 0.22), inset 0 1px 1px rgba(255, 255, 255, 1), inset 0 -3px 10px rgba(0, 0, 0, 0.12);
}

.showcase-watch-container .display-unit {
  width: 100%;
  height: 100%;
  background: var(--screen-bg);
  border-radius: 48px;
  border: 4px solid #000;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.02);
  overscroll-behavior: contain;
}

.showcase-watch-container .display-unit::after {
  content: "";
  position: absolute;
  top: -40%;
  left: -40%;
  width: 150%;
  height: 150%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, transparent 35%, transparent 65%, rgba(255, 255, 255, 0.12) 100%);
  z-index: 100;
  pointer-events: none;
  transition: transform 0.8s var(--ease);
}

.showcase-watch-container:hover .display-unit::after {
  transform: translate(24px, 24px);
}

.showcase-watch-container .strap {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 130px;
  height: 68px;
  background: #e2e4e9;
  border-radius: 18px;
  z-index: 1;
  box-shadow: inset 0 0 35px rgba(0, 0, 0, 0.08);
}
.showcase-watch-container .strap.top { top: -34px; background: linear-gradient(to top, #e2e4e9, #f3f4f6); }
.showcase-watch-container .strap.bottom { bottom: -34px; background: linear-gradient(to bottom, #e2e4e9, #f3f4f6); }

.showcase-watch-container .crown-well {
  position: absolute;
  right: -2px;
  top: 55px;
  height: 80px;
  width: 10px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  z-index: 8;
  box-shadow: inset 2px 0 5px rgba(0, 0, 0, 0.2);
}

.showcase-watch-container .crown {
  position: absolute;
  right: -12px;
  top: 72px;
  width: 18px;
  height: 46px;
  background: linear-gradient(to right, #d1d5db, #f3f4f6, #9ca3af);
  border-radius: 6px;
  z-index: 20;
  box-shadow: 4px 2px 10px rgba(0, 0, 0, 0.15);
}
.showcase-watch-container .crown::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: radial-gradient(circle, #f3f4f6 30%, #9ca3af 100%);
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 21;
}
.showcase-watch-container .crown::after {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.08) 0, rgba(0, 0, 0, 0.08) 1px, transparent 1px, transparent 3px);
  border-radius: 6px;
}

.showcase-watch-container .strap::before {
  content: "";
  position: absolute;
  left: 12px;
  right: 12px;
  height: 28px;
  background: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 0px, rgba(0, 0, 0, 0.04) 2px, transparent 2px, transparent 6px);
  border-radius: 6px;
}
.showcase-watch-container .strap.top::before { top: 8px; }
.showcase-watch-container .strap.bottom::before { bottom: 8px; }

.showcase-watch-container .side-btn-well {
  position: absolute;
  right: -2px;
  top: 152px;
  height: 58px;
  width: 7px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  z-index: 8;
  box-shadow: inset 2px 0 5px rgba(0, 0, 0, 0.1);
}

.showcase-watch-container .side-btn {
  position: absolute;
  right: -6px;
  top: 158px;
  height: 44px;
  width: 8px;
  background: linear-gradient(to right, #9ca3af, #d1d5db);
  border-radius: 4px;
  z-index: 15;
  border: 1px solid #8e939c;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.6), 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.showcase-watch-container .action-btn-well {
  position: absolute;
  left: -2px;
  top: 122px;
  height: 80px;
  width: 7px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  z-index: 8;
  box-shadow: inset -2px 0 5px rgba(0, 0, 0, 0.1);
}

.showcase-watch-container .action-btn {
  position: absolute;
  left: -6px;
  top: 132px;
  height: 60px;
  width: 8px;
  background: linear-gradient(to left, var(--banana), #facc15);
  border-radius: 4px;
  z-index: 15;
  border: 1px solid #ca8a04;
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.6), -1px 1px 3px rgba(0, 0, 0, 0.1);
}

.status-bar {
  position: absolute;
  top: 14px;
  left: 0;
  right: 0;
  padding: 0 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  font-weight: 800;
  color: var(--text-main);
  z-index: 80;
  user-select: none;
}
`;

/* =========================================================================
   EMBEDDED DEVICE STATUS HOOK (useDeviceStatus)
   ========================================================================= */
export const getFormattedDeviceTime = () => {
  const now = new Date();
  try {
    const is12Hour = new Intl.DateTimeFormat(undefined, { hour: "numeric" }).resolvedOptions().hour12;
    const hours = is12Hour ? now.getHours() % 12 || 12 : String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  } catch {
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }
};

export const useDeviceStatus = () => {
  const [time, setTime] = useState(getFormattedDeviceTime);
  const [fullTimeString, setFullTimeString] = useState(() =>
    typeof window !== "undefined" ? new Date().toLocaleTimeString() : ""
  );
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [isCharging, setIsCharging] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      setTime(getFormattedDeviceTime());
      setFullTimeString(new Date().toLocaleTimeString());
    };
    updateTime();
    const clockInterval = setInterval(updateTime, 1000);

    let isMounted = true;
    let batteryManager = null;

    const handleBattery = (bat) => {
      if (!isMounted || !bat) return;
      setBatteryLevel(Math.round(bat.level * 100));
      setIsCharging(Boolean(bat.charging));
    };

    if (typeof navigator !== "undefined" && typeof navigator.getBattery === "function") {
      navigator.getBattery().then((bat) => {
        if (!isMounted) return;
        batteryManager = bat;
        handleBattery(bat);
        bat.addEventListener("levelchange", () => handleBattery(batteryManager));
        bat.addEventListener("chargingchange", () => handleBattery(batteryManager));
      }).catch(() => {});
    }

    return () => {
      isMounted = false;
      clearInterval(clockInterval);
    };
  }, []);

  return { time, fullTimeString, batteryLevel, isCharging };
};

/* =========================================================================
   SIGNATURE DOT MATRIX
   ========================================================================= */
export const DotMatrix = ({ className = "" }) => (
  <div className={`grid grid-cols-6 gap-2 w-max select-none pointer-events-none ${className}`}>
    {Array.from({ length: 24 }).map((_, i) => (
      <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#8FD6CF]/60" />
    ))}
  </div>
);

/* =========================================================================
   HERO SECURITY BACKGROUND & FLOATING SHIELDS
   ========================================================================= */
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
          <polygon points="12,7.5 13.5,10.5 16.5,11 14.5,13 15,16 12,14.5 9,16 9.5,13 7.5,11 10.5,10.5" fill={color} fillOpacity="0.5" />
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
          <polygon points="12.5,7 9,12.5 11.8,12.5 11.2,16.5 15,11 12.2,11" fill={color} />
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
            <SecurityIcon type={item.type} size={item.size} color={item.color} />
          </div>
        );
      })}
    </div>
  );
}

/* =========================================================================
   COLLISION TEXT HEADING ANIMATION
   ========================================================================= */
function getLetterScatter(charIndex, _totalChars, isLeft) {
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

export function CollisionTextHeading({
  text = "Product Introduction",
  className = "",
  onComplete,
}) {
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
      const word = rawWords[0];
      const mid = Math.ceil(word.length / 2);
      return {
        leftChars: word.slice(0, mid).split(""),
        rightChars: word.slice(mid).split(""),
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
      (entries) => {
        const [entry] = entries;
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
            if (char === " ") return <span key={`l-sp-${index}`} className="inline-block w-2 sm:w-2.5">&nbsp;</span>;
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
            if (char === " ") return <span key={`r-sp-${index}`} className="inline-block w-2 sm:w-2.5">&nbsp;</span>;
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

/* =========================================================================
   SECTION HEADING ANIMATION
   ========================================================================= */
export function SectionHeadingAnimation({ text = "", className = "" }) {
  const containerRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  const parts = text.trim().split(/\s+/);
  const word1 = parts[0] || "";
  const word1Chars = word1.split("");

  const remainingWordTokens = [];
  let charCursor = 0;
  for (let w = 1; w < parts.length; w++) {
    const wordStr = parts[w];
    const letters = [];
    for (let c = 0; c < wordStr.length; c++) {
      letters.push({ char: wordStr[c], index: charCursor });
      charCursor++;
    }
    remainingWordTokens.push({ word: wordStr, letters });
    if (w < parts.length - 1) charCursor++;
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
    if (hasStarted) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
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
    const totalRemaining = charCursor;

    for (let j = 0; j < totalRemaining; j++) {
      const idx = j;
      addTimer(() => {
        setWord2Count((prev) => Math.max(prev, idx + 1));
        setFlyingIndex2(idx);
      }, currentTime + idx * FAST_INTERVAL);
    }

    const totalTime = currentTime + totalRemaining * FAST_INTERVAL + FAST_DURATION;
    addTimer(() => {
      setFlyingIndex2(null);
      setAllComplete(true);
    }, totalTime);

    return clearTimers;
  }, [hasStarted]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center select-none ${className}`}
    >
      <h2 className="inline-flex flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-3 tracking-tight font-sans leading-tight">
        <span className="inline-block whitespace-nowrap font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#042C2E]">
          {word1Chars.map((char, index) => {
            const isP = index === 0;
            const isFlying = flyingIndex1 === index;
            const isSettled = index < word1Count && !isFlying;
            const isSparking = sparkIndex1 === index;

            return (
              <span
                key={`w1-${index}`}
                className="relative inline-block"
                style={{ opacity: isP || isSettled || isFlying ? 1 : 0, willChange: "transform, filter" }}
              >
                {isP ? (
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
                      style={{ opacity: isSettled || isFlying ? 1 : 0, willChange: "transform, filter" }}
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

      <div className="relative mt-2 h-1 w-full max-w-md mx-auto overflow-hidden">
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

/* =========================================================================
   VECTOR ICONS & MAPPER FOR SMARTWATCH
   ========================================================================= */
export const ShowcaseIcon = ({ type, className = "w-5 h-5" }) => {
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
    case "ai":
    case "ml":
      return (
        <svg {...props}>
          <path d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v1a4 4 0 0 0 8 0v-1h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
          <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
        </svg>
      );
    case "shield":
    case "security":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "architecture":
    case "layers":
      return (
        <svg {...props}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "government":
    case "institution":
      return (
        <svg {...props}>
          <path d="M3 21h18M4 18h16M4 10h16M12 2L3 7v3h18V7L12 2z" />
          <path d="M6 10v8M10 10v8M14 10v8M18 10v8" />
        </svg>
      );
    case "police":
    case "enforcement":
      return (
        <svg {...props}>
          <path d="M12 2l7 3.5v5c0 5-3.5 9.5-7 11.5-3.5-2-7-6.5-7-11.5v-5L12 2z" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      );
    case "investigation":
    case "search":
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <path d="M11 8a3 3 0 0 0-3 3" />
        </svg>
      );
    case "legal":
    case "court":
      return (
        <svg {...props}>
          <path d="M12 3v18M5 6l7-3 7 3M5 6v6a3 3 0 0 0 6 0V6M13 6v6a3 3 0 0 0 6 0V6M3 21h18" />
        </svg>
      );
    case "forensics":
    case "evidence":
      return (
        <svg {...props}>
          <path d="M12 11c0 3.866-3.134 7-7 7-1.12 0-2.176-.263-3.111-.734" />
          <path d="M12 7c0-2.761-2.239-5-5-5S2 4.239 2 7c0 1.258.465 2.408 1.233 3.284" />
          <path d="M18 15a6 6 0 0 0-6-6" />
          <path d="M22 17a10 10 0 0 0-10-10" />
        </svg>
      );
    case "analytics":
    case "data":
      return (
        <svg {...props}>
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      );
    case "automation":
    case "workflow":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case "enterprise":
    case "business":
      return (
        <svg {...props}>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "bank":
    case "finance":
      return (
        <svg {...props}>
          <path d="M3 21h18M5 10v8M9 10v8M15 10v8M19 10v8M2 10h20M12 3L2 10h20L12 3z" />
          <circle cx="12" cy="14" r="1.5" />
        </svg>
      );
    case "users":
    case "people":
    case "public":
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "education":
    case "students":
      return (
        <svg {...props}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
        </svg>
      );
    case "support":
    case "victim":
      return (
        <svg {...props}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case "web":
      return (
        <svg {...props}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="2" y1="7" x2="22" y2="7" />
          <circle cx="5" cy="5" r="1" fill="currentColor" />
          <circle cx="8" cy="5" r="1" fill="currentColor" />
          <circle cx="11" cy="5" r="1" fill="currentColor" />
        </svg>
      );
    case "android":
    case "mobile":
      return (
        <svg {...props}>
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
        </svg>
      );
    case "tablet":
      return (
        <svg {...props}>
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
        </svg>
      );
    case "desktop":
      return (
        <svg {...props}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...props}>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
    case "api":
    case "code":
      return (
        <svg {...props}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    case "design":
    case "uiux":
      return (
        <svg {...props}>
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "research":
    case "rd":
      return (
        <svg {...props}>
          <path d="M10 2v7.31L4.36 17.5A2 2 0 0 0 6 20.5h12a2 2 0 0 0 1.64-3L14 9.31V2" />
          <path d="M8 2h8" />
          <path d="M7 16h10" />
        </svg>
      );
    case "qa":
    case "testing":
      return (
        <svg {...props}>
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      );
    case "devops":
      return (
        <svg {...props}>
          <path d="M18 13V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h7" />
          <polyline points="16 19 19 22 22 19" />
          <path d="M19 13v9" />
        </svg>
      );
    case "licensing":
    case "subscription":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M7 15h2" />
          <path d="M15 15h2" />
        </svg>
      );
    case "future":
    case "innovation":
    case "quantum":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
          <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
  }
};

export const getItemIconType = (title = "") => {
  const t = title.toLowerCase();
  if (t.includes("ai-powered") || t.includes("ai & intelligent") || t.includes("ai platforms") || t.includes("ai & machine learning") || t.includes("advanced artificial intelligence")) return "ai";
  if (t.includes("cybersecurity") || t.includes("secure software") || t.includes("security platforms") || t.includes("advanced cybersecurity")) return "shield";
  if (t.includes("investigation") || t.includes("cyber crime") || t.includes("forensics")) return "investigation";
  if (t.includes("law enforcement") || t.includes("police")) return "police";
  if (t.includes("government") || t.includes("state government") || t.includes("central") || t.includes("institutional technology")) return "government";
  if (t.includes("legal") || t.includes("judicial")) return "legal";
  if (t.includes("analytics") || t.includes("data intelligence") || t.includes("intelligence solutions") || t.includes("intelligence & command")) return "analytics";
  if (t.includes("automation") || t.includes("intelligent automation") || t.includes("investigation automation")) return "automation";
  if (t.includes("architecture") || t.includes("system design") || t.includes("future-ready software architecture") || t.includes("integrated software")) return "architecture";
  if (t.includes("commercial") || t.includes("commercially deployable") || t.includes("enterprise software") || t.includes("enterprise applications")) return "enterprise";
  if (t.includes("bank") || t.includes("financial")) return "bank";
  if (t.includes("victim") || t.includes("affected")) return "support";
  if (t.includes("student") || t.includes("candidate")) return "education";
  if (t.includes("public") || t.includes("ecosystem") || t.includes("users")) return "users";
  if (t.includes("web application")) return "web";
  if (t.includes("android")) return "android";
  if (t.includes("mobile")) return "mobile";
  if (t.includes("tablet")) return "tablet";
  if (t.includes("desktop")) return "desktop";
  if (t.includes("cloud") || t.includes("devops")) return "cloud";
  if (t.includes("api") || t.includes("backend") || t.includes("software engineering") || t.includes("proprietary software") || t.includes("custom software")) return "api";
  if (t.includes("ui/ux") || t.includes("design")) return "design";
  if (t.includes("research") || t.includes("r&d")) return "research";
  if (t.includes("quality assurance") || t.includes("testing") || t.includes("maintenance")) return "qa";
  if (t.includes("licensing") || t.includes("subscription")) return "licensing";
  if (t.includes("future") || t.includes("innovation") || t.includes("emerging")) return "future";
  return "architecture";
};

const ROTATION_INTERVAL = 4500;

/* =========================================================================
   SMARTWATCH PRODUCT SHOWCASE (REUSABLE ACROSS ALL SECTIONS)
   ========================================================================= */
export function SmartwatchProductShowcase({
  items,
  reversed = false,
  sectionNumber = "01",
}) {
  const { time, fullTimeString, batteryLevel, isCharging } = useDeviceStatus();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const secNum = parseInt(sectionNumber, 10) || 1;
  const [progress, setProgress] = useState(() => (secNum * 15) % 100);

  const processedItems = useMemo(() => {
    const list = items && items.length > 0 ? items : softwareProductIntroductionData.sections[0].items;
    return list.map((item, idx) => ({
      id: idx + 1,
      number: idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`,
      title: item.title,
      description: item.description,
      iconType: getItemIconType(item.title),
    }));
  }, [items]);

  const totalItems = processedItems.length;
  const totalItemsRef = useRef(totalItems);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    totalItemsRef.current = totalItems;
  }, [totalItems]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const handleSelect = useCallback((index) => {
    setActiveIndex(index);
    setProgress(0);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItemsRef.current);
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItemsRef.current) % totalItemsRef.current);
    setProgress(0);
  }, []);

  const handleNextRef = useRef(handleNext);
  const handlePrevRef = useRef(handlePrev);

  useEffect(() => {
    handleNextRef.current = handleNext;
    handlePrevRef.current = handlePrev;
  }, [handleNext, handlePrev]);

  useEffect(() => {
    const tickInterval = 50;
    const step = (tickInterval / ROTATION_INTERVAL) * 100;

    const timer = setInterval(() => {
      if (isPausedRef.current) return;
      setProgress((prev) => {
        if (prev + step >= 100) {
          setActiveIndex((curr) => (curr + 1) % totalItemsRef.current);
          return 0;
        }
        return prev + step;
      });
    }, tickInterval);

    return () => clearInterval(timer);
  }, []);

  const watchScreenRef = useRef(null);
  const lastScrollTimeRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartYRef = useRef(0);

  useEffect(() => {
    const el = watchScreenRef.current;
    if (!el) return;

    const onWheelNonPassive = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const now = Date.now();
      if (now - lastScrollTimeRef.current < 250) return;
      if (Math.abs(e.deltaY) > 5) {
        if (e.deltaY > 0) handleNextRef.current();
        else handlePrevRef.current();
        lastScrollTimeRef.current = now;
      }
    };

    const onTouchMoveNonPassive = (e) => {
      if (e.cancelable) e.preventDefault();
    };

    el.addEventListener("wheel", onWheelNonPassive, { passive: false });
    el.addEventListener("touchmove", onTouchMoveNonPassive, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheelNonPassive);
      el.removeEventListener("touchmove", onTouchMoveNonPassive);
    };
  }, []);

  const handleTouchStart = (e) => {
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartYRef.current - touchEndY;
    if (Math.abs(diff) > 30) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    dragStartYRef.current = e.clientY;
  };

  const handleMouseUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const diff = dragStartYRef.current - e.clientY;
    if (Math.abs(diff) > 25) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  const handleMouseDragLeave = () => {
    isDraggingRef.current = false;
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
  };

  const safeActiveIndex = activeIndex % totalItems;
  const currentItem = processedItems[safeActiveIndex] || processedItems[0];

  return (
    <div
      className="w-full relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl lg:max-w-6xl mx-auto px-2 sm:px-4">
        {/* ==================== WATCH COLUMN ==================== */}
        <div
          className={`lg:col-span-5 flex flex-col items-center justify-center order-1 ${
            reversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="showcase-watch-wrapper pt-8 pb-10 px-4 sm:px-6 group">
            <div className="showcase-watch-container">
              <div className="strap top" aria-hidden="true" />
              <div className="strap bottom" aria-hidden="true" />

              <div className="watch-case">
                <div
                  className="crown-well cursor-pointer"
                  onClick={handleNext}
                  title="Click Crown to scroll next"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="crown cursor-pointer focus:outline-none transition-transform hover:scale-105 active:scale-95"
                  onClick={handleNext}
                  title="Click Crown to scroll next"
                  aria-label="Next capability"
                />

                <div className="side-btn-well" aria-hidden="true" />
                <button
                  type="button"
                  className="side-btn cursor-pointer focus:outline-none hover:brightness-110 active:scale-95"
                  onClick={handleNext}
                  aria-label="Cycle capability"
                  title="Cycle capability"
                />

                <div
                  className="action-btn-well cursor-pointer"
                  onClick={handlePrev}
                  title="Click Action Button to scroll prev"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="action-btn cursor-pointer focus:outline-none transition-transform hover:brightness-110 active:scale-95"
                  onClick={handlePrev}
                  title="Click Action Button to scroll prev"
                  aria-label="Previous capability"
                />

                <div
                  ref={watchScreenRef}
                  className="display-unit cursor-ns-resize touch-pan-y focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseDragLeave}
                  onKeyDown={handleKeyDown}
                  tabIndex={0}
                  role="region"
                  aria-label="Scrollable smartwatch capability stack"
                  title="Scroll with mouse wheel or drag up/down inside watch"
                >
                  <div className="status-bar">
                    <span
                      className="font-mono tracking-tight font-black text-[11px] text-[#042C2E]"
                      title={fullTimeString ? `Current Time: ${fullTimeString}` : undefined}
                    >
                      {time}
                    </span>
                    <span
                      className={`font-black flex items-center gap-1 text-[10px] ${
                        batteryLevel <= 20 && !isCharging ? "text-rose-500" : "text-[#006769]"
                      }`}
                      title={`Device Battery: ${batteryLevel}%`}
                    >
                      <span>{batteryLevel}%</span>
                      {isCharging ? (
                        <span className="text-[11px] text-amber-500 font-bold" title="Charging">
                          ⚡
                        </span>
                      ) : (
                        <span className="inline-flex items-center" title="On Battery">
                          <svg className="w-3.5 h-2" viewBox="0 0 24 13" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="1" y="1" width="19" height="11" rx="2.5" />
                            <path d="M22 4.5v4" strokeLinecap="round" strokeWidth="2.5" />
                            <rect
                              x="3"
                              y="3"
                              width={Math.max(2, Math.round(((batteryLevel || 100) / 100) * 15))}
                              height="7"
                              fill="currentColor"
                              stroke="none"
                              rx="1"
                            />
                          </svg>
                        </span>
                      )}
                    </span>
                  </div>

                  <div className="relative w-full h-full pt-8 pb-4 px-3.5 flex flex-col justify-between select-none">
                    <div className="relative w-full h-[255px] overflow-hidden my-auto">
                      {processedItems.map((item, idx) => {
                        let offset = idx - safeActiveIndex;
                        while (offset > totalItems / 2) offset -= totalItems;
                        while (offset < -totalItems / 2) offset += totalItems;

                        const isCenter = offset === 0;
                        const isVisible = Math.abs(offset) <= 1;
                        const clampedOffset = Math.max(-2, Math.min(2, offset));
                        const translateY = clampedOffset * 80;
                        const scale = isCenter ? 1.02 : 0.88;
                        const opacity = isCenter ? 1 : isVisible ? 0.65 : 0;
                        const zIndex = isCenter ? 30 : isVisible ? 20 : 10;
                        const pointerEvents = isVisible ? "auto" : "none";

                        return (
                          <div
                            key={`watch-item-${sectionNumber}-${item.id}`}
                            onClick={() => handleSelect(idx)}
                            role="button"
                            tabIndex={isVisible ? 0 : -1}
                            aria-label={`Select ${item.title}`}
                            aria-selected={isCenter}
                            className={`absolute left-3 right-3 transition-all duration-500 ease-[cubic-bezier(0.2,1,0.2,1)] rounded-xl ${
                              isCenter
                                ? "bg-gradient-to-r from-[#006769] via-[#024B4D] to-[#042C2E] text-white p-2.5 border border-[#14B8A6] shadow-[0_6px_16px_rgba(0,103,105,0.35)] ring-2 ring-[#14B8A6]/20 cursor-pointer"
                                : "bg-[#F0F9F8] hover:bg-white text-[#1E4345] p-1.5 px-2 border border-[#C5ECE9] shadow-xs cursor-pointer hover:border-[#14B8A6]/40"
                            }`}
                            style={{
                              top: "50%",
                              transform: `translateY(calc(-50% + ${translateY}px)) scale(${scale})`,
                              opacity,
                              zIndex,
                              pointerEvents,
                            }}
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className={`rounded-lg flex items-center justify-center shrink-0 transition-transform ${
                                  isCenter
                                    ? "w-8 h-8 bg-white/15 text-[#38EFD6] border border-white/30 shadow-inner scale-105"
                                    : "w-6 h-6 rounded-md bg-white text-[#006769] border border-[#D0ECE9]"
                                }`}
                              >
                                <ShowcaseIcon
                                  type={item.iconType}
                                  className={isCenter ? "w-4 h-4 text-[#38EFD6]" : "w-3 h-3"}
                                />
                              </div>

                              <div className="flex-1 min-w-0 text-left">
                                <div className="flex items-center justify-between gap-1 mb-0.5">
                                  <span
                                    className={`font-mono text-[8px] uppercase tracking-wider font-extrabold ${
                                      isCenter ? "text-[#5EEAD4]" : "text-[#006769]/70"
                                    }`}
                                  >
                                    {item.number} {isCenter && "• FOCUS"}
                                  </span>
                                  {isCenter && (
                                    <span className="flex items-center gap-0.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
                                      <span className="text-[7.5px] font-mono text-[#5EEAD4] font-bold">
                                        LIVE
                                      </span>
                                    </span>
                                  )}
                                </div>
                                <h4
                                  className={`font-bold leading-tight tracking-tight ${
                                    isCenter
                                      ? "text-[11px] sm:text-[11.5px] text-white line-clamp-2"
                                      : "text-[9.5px] text-[#042C2E]/80 line-clamp-1"
                                  }`}
                                >
                                  {item.title}
                                </h4>
                                {isCenter && (
                                  <div className="w-full h-0.5 bg-white/20 rounded-full mt-1.5 overflow-hidden">
                                    <div
                                      className="h-full bg-[#38EFD6] transition-all duration-75"
                                      style={{ width: `${progress}%` }}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-1.5 border-t border-[#E0F2F1]/80 flex items-center justify-between text-[9px] text-[#4B6B6C] px-1">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
                        <span className="font-bold text-[#006769] text-[8.5px] uppercase tracking-wider">
                          IBCS VERIFIED
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[8.5px] font-mono text-[#006769]">
                        <span>▲ SCROLL / ROTATE ▼</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== DATA CARD COLUMN ==================== */}
        <div
          className={`lg:col-span-7 w-full flex justify-center order-2 ${
            reversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div
            key={`content-card-${sectionNumber}-${currentItem.id}`}
            className="w-full max-w-xl relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#C5ECE9] shadow-[0_12px_32px_rgba(0,103,105,0.06)] p-6 sm:p-8 transition-all overflow-hidden flex flex-col justify-between min-h-[220px]"
          >
            <div
              className={`absolute -top-20 ${
                reversed ? "-left-20" : "-right-20"
              } w-48 h-48 rounded-full bg-gradient-to-br from-[#14B8A6]/10 to-[#006769]/5 blur-3xl pointer-events-none`}
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#567D7F] mb-4 pb-2 border-b border-[#EAF7F5]">
                <span className="text-[#006769] font-bold tracking-wider uppercase">
                  SECTION {sectionNumber} • {currentItem.number} OF {totalItems < 10 ? `0${totalItems}` : totalItems}
                </span>
                <span className="text-[#042C2E] font-semibold flex items-center gap-1.5 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
                  <span>ACTIVE CAPABILITY</span>
                </span>
              </div>

              <div className="flex items-center gap-3.5 mb-5 animate-content-stagger-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#006769] via-[#024B4D] to-[#042C2E] text-white flex items-center justify-center shadow-md shadow-[#006769]/20 border border-white/20 shrink-0">
                  <ShowcaseIcon
                    type={currentItem.iconType}
                    className="w-6 h-6 sm:w-7 sm:h-7 text-[#2DD4BF]"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#042C2E] tracking-tight leading-snug">
                  {currentItem.title}
                </h3>
              </div>

              <div className="flex items-start gap-3 pl-1 animate-content-stagger-2">
                <span
                  className="w-2.5 h-2.5 rounded-full bg-[#006769] mt-2 shrink-0"
                  aria-hidden="true"
                />
                <p className="text-base sm:text-[17px] text-[#1E4345] leading-relaxed font-normal">
                  {currentItem.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAF7F5] flex items-center justify-between">
              <div className="flex items-center gap-1.5 flex-wrap max-w-[70%]">
                {processedItems.map((_, dotIdx) => (
                  <button
                    key={`dot-${dotIdx}`}
                    type="button"
                    onClick={() => handleSelect(dotIdx)}
                    aria-label={`Go to item ${dotIdx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      dotIdx === safeActiveIndex
                        ? "w-6 bg-[#006769]"
                        : "w-1.5 bg-[#C5ECE9] hover:bg-[#8FD6CF]"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-7 h-7 rounded-full bg-[#F0F9F8] hover:bg-[#006769] hover:text-white text-[#006769] flex items-center justify-center transition-colors cursor-pointer border border-[#C5ECE9] font-bold text-sm leading-none"
                  title="Previous item"
                  aria-label="Previous capability"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-7 h-7 rounded-full bg-[#F0F9F8] hover:bg-[#006769] hover:text-white text-[#006769] flex items-center justify-center transition-colors cursor-pointer border border-[#C5ECE9] font-bold text-sm leading-none"
                  title="Next item"
                  aria-label="Next capability"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN COMPLETE PAGE COMPONENT (SoftwareProductIntroduction)
   ========================================================================= */
export function SoftwareProductIntroduction({ onClose }) {
  const { header, sections } = softwareProductIntroductionData;

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

  const scrollToFirstSection = () => {
    const el = document.getElementById(sections[0]?.id || "section-01");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F0FBFA] text-[#042C2E] font-sans antialiased selection:bg-[#006769] selection:text-white overflow-x-hidden">
      {/* Embedded Stylesheet for Animations and Watch physics */}
      <style>{embeddedStyles}</style>

      {/* HERO SECTION */}
      <header className="relative bg-gradient-to-b from-[#C8F0EC] via-[#E2F7F5] to-[#F0FBFA] pt-3 pb-8 sm:pt-4 sm:pb-10 lg:pt-4 lg:pb-12 overflow-hidden border-b border-[#C3ECE9]">
        <HeroSecurityBackground />

        {/* Top Header Navigation Bar (Embedded directly into header for zero-gap layout) */}
        <div className="relative z-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-2 sm:mb-3 flex items-center justify-start gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
          >
            ← Back
          </button>

          <button
            type="button"
            onClick={handleHome}
            className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-[#040A1A] transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <Home className="w-4 h-4 text-[#040A1A]" />
            <span>Home</span>
          </button>
        </div>

        <div className="absolute top-6 left-8 hidden lg:block opacity-70 pointer-events-none">
          <DotMatrix />
        </div>
        <div className="absolute bottom-6 right-10 hidden lg:block opacity-60 pointer-events-none">
          <DotMatrix />
        </div>

        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#8AE2DA]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-16 right-1/4 w-80 h-80 bg-[#B6F2ED]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006769] mb-2">
              <span className="w-5 h-0.5 bg-[#006769] rounded-full inline-block" />
              <span>{header.badge}</span>
            </div>

            <div className="my-1.5 overflow-hidden">
              <CollisionTextHeading text={header.title} />
            </div>

            <p className="text-sm sm:text-lg font-bold text-[#007A7E] tracking-wide mt-3 mb-3">
              {header.company}
            </p>

            <p className="text-sm sm:text-base text-[#1E4345] max-w-2xl mx-auto leading-relaxed font-normal mb-5">
              {header.summary}
            </p>

            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={scrollToFirstSection}
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-[#006769] hover:bg-[#004E50] text-white text-sm sm:text-base font-semibold tracking-wide shadow-[0_8px_20px_rgba(0,103,105,0.25)] hover:shadow-[0_12px_28px_rgba(0,103,105,0.35)] transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
              >
                <span>Explore Products</span>
                <span className="text-base">→</span>
              </button>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 max-w-full mx-auto flex items-center justify-center flex-nowrap gap-2 sm:gap-3.5 text-xs font-semibold text-[#006769] px-2 py-1">
            <div className="bg-white/95 backdrop-blur-sm border border-[#C3ECE9] px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full shadow-xs flex items-center gap-1.5 shrink-0 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#006769] shrink-0" />
              <span>AI-Powered Architecture</span>
            </div>
            <div className="bg-white/95 backdrop-blur-sm border border-[#C3ECE9] px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full shadow-xs flex items-center gap-1.5 shrink-0 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#14B8A6] shrink-0" />
              <span>Cybersecurity & Forensics</span>
            </div>
            <div className="hidden sm:flex bg-white/95 backdrop-blur-sm border border-[#C3ECE9] px-3.5 py-1.5 rounded-full shadow-xs items-center gap-1.5 shrink-0 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#C54E2C] shrink-0" />
              <span>Institutional & Enterprise Ready</span>
            </div>
          </div>
        </div>
      </header>

      {/* SECTIONS 01 TO 07 */}
      {sections.map((section, idx) => {
        const isReversed = idx % 2 === 1;
        const isWhiteBg = idx % 2 === 0;

        return (
          <section
            key={section.id || `section-${idx + 1}`}
            id={section.id || `section-${idx + 1}`}
            className={`relative py-16 sm:py-20 lg:py-24 ${
              isWhiteBg
                ? "bg-white"
                : "bg-gradient-to-b from-[#E8F8F6] via-[#F2FCFB] to-[#E8F8F6]"
            } border-b border-[#D0ECE9] overflow-hidden`}
          >
            <div
              className={`absolute top-12 ${
                isReversed ? "left-8" : "right-8"
              } hidden lg:block opacity-45 pointer-events-none`}
            >
              <DotMatrix />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative mb-12 sm:mb-14 max-w-4xl mx-auto text-center">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none text-[#006769]/10 font-black text-7xl sm:text-8xl leading-none">
                  {section.number}
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006769] mb-2.5">
                    <span className="w-6 h-0.5 bg-[#006769] rounded-full inline-block" />
                    SECTION {section.number}
                  </div>
                  <SectionHeadingAnimation text={section.title} />
                  <p className="text-sm sm:text-base text-[#1E4345] max-w-3xl mx-auto leading-relaxed font-normal mt-3">
                    {section.description}
                  </p>
                </div>
              </div>

              <SmartwatchProductShowcase
                items={section.items}
                reversed={isReversed}
                sectionNumber={section.number}
              />
            </div>
          </section>
        );
      })}

      {/* FOOTER */}
      <footer className="py-12 bg-white text-center border-t border-[#D0ECE9]">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#006769] hover:bg-[#004E50] text-white text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
        >
          <span>Back to Top</span>
          <span>↑</span>
        </button>
      </footer>
    </div>
  );
}

export const ProductIntroductionPage = SoftwareProductIntroduction;
export default SoftwareProductIntroduction;
