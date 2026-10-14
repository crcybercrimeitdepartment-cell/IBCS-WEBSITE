import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Home } from 'lucide-react';
import { ProductRoadmapData } from './ProductRoadmapPageData';

// ============================================================================
// 3D DICE ROADMAP SHOWCASE COMPONENTS (CONSOLIDATED)
// ============================================================================

const FACE_DEFINITIONS = [
  { name: "front", transform: "rotateY(0deg) translateZ(var(--roadmap-dice-half, 85px))", baseRx: 0, baseRy: 0, bg: "linear-gradient(145deg,#fff 0%,#f2fcfa 60%,#e0f7f4 100%)", filter: "brightness(1)" },
  { name: "right", transform: "rotateY(90deg) translateZ(var(--roadmap-dice-half, 85px))", baseRx: 0, baseRy: -90, bg: "linear-gradient(145deg,#edfaf8 0%,#def5f1 60%,#ceefea 100%)", filter: "brightness(.95)" },
  { name: "top", transform: "rotateX(90deg) translateZ(var(--roadmap-dice-half, 85px))", baseRx: -90, baseRy: 0, bg: "linear-gradient(135deg,#fff 0%,#f6fefd 50%,#e6faf7 100%)", filter: "brightness(1.06)" },
  { name: "back", transform: "rotateY(180deg) translateZ(var(--roadmap-dice-half, 85px))", baseRx: 0, baseRy: -180, bg: "linear-gradient(145deg,#d4f0eb 0%,#c4e9e3 100%)", filter: "brightness(.88)" },
  { name: "left", transform: "rotateY(-90deg) translateZ(var(--roadmap-dice-half, 85px))", baseRx: 0, baseRy: -270, bg: "linear-gradient(145deg,#e6f8f5 0%,#d8f3ef 55%,#c8ebe6 100%)", filter: "brightness(.93)" },
  { name: "bottom", transform: "rotateX(-90deg) translateZ(var(--roadmap-dice-half, 85px))", baseRx: 90, baseRy: 0, bg: "linear-gradient(145deg,#c2ece5 0%,#b0e4dc 100%)", filter: "brightness(.85)" },
];

/**
 * Enterprise Vector SVG Icons for IBCS Product Roadmap
 * Strictly themed to IBCS Brand Palette: Primary Teal #006769, Petrol #042C2E, Mint #2DD4BF
 */
export function DiceItemIcon({ type = "default", className = "w-6 h-6" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "architecture":
      return (
        <svg {...common}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "product":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M8 9h8M8 13h5M8 17h3" />
        </svg>
      );
    case "research":
      return (
        <svg {...common}>
          <path d="M9 3h6M10 3v6l-5 8a3 3 0 0 0 2.5 4.5h9A3 3 0 0 0 19 17l-5-8V3" />
          <path d="M8 15h8" />
        </svg>
      );
    case "launch":
      return (
        <svg {...common}>
          <path d="m12 19 4-2 6-6-7-14-8 1-12 3-14 7l7 7Z" />
          <path d="m8 16-3 3M13 11h.01" />
          <path d="M6 12H3l-1 4 5-1" />
        </svg>
      );
    case "growth":
      return (
        <svg {...common}>
          <path d="M3 17 9 11l4 4 8-9" />
          <path d="M15 6h6v6" />
        </svg>
      );
    case "market":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 8a5 5 0 0 0 1 10Z" />
        </svg>
      );
    case "security":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "data":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </svg>
      );
    case "integration":
      return (
        <svg {...common}>
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="m9 11 6-4M9 13l6 4" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2" />
        </svg>
      );
    case "uiux":
      return (
        <svg {...common}>
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          <path d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v1a4 4 0 0 0 8 0v-1h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
          <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
        </svg>
      );
    case "qa":
      return (
        <svg {...common}>
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      );
    case "devops":
      return (
        <svg {...common}>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          <polyline points="13 14 16 11 19 14" />
          <line x1="16" y1="11" x2="16" y2="17" />
        </svg>
      );
    case "default":
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M7 12h10" />
        </svg>
      );
  }
}

/**
 * Maps roadmap item title to the most semantically relevant icon type
 */
export function getIconForTitle(title = "") {
  const t = title.toLowerCase();
  if (t.includes("ai") || t.includes("neural") || t.includes("intelligence") || t.includes("machine learning") || t.includes("generative")) return "ai";
  if (t.includes("security") || t.includes("cyber") || t.includes("protection") || t.includes("compliance") || t.includes("zero trust")) return "security";
  if (t.includes("cloud") || t.includes("hosting") || t.includes("infrastructure")) return "cloud";
  if (t.includes("database") || t.includes("data") || t.includes("analytics") || t.includes("storage")) return "data";
  if (t.includes("research") || t.includes("feasibility") || t.includes("innovation") || t.includes("emerging")) return "research";
  if (t.includes("architecture") || t.includes("system design") || t.includes("foundation") || t.includes("structure")) return "architecture";
  if (t.includes("integration") || t.includes("api") || t.includes("interoperab") || t.includes("connector") || t.includes("ecosystem")) return "integration";
  if (t.includes("ui") || t.includes("ux") || t.includes("interface") || t.includes("experience") || t.includes("frontend")) return "uiux";
  if (t.includes("code") || t.includes("backend") || t.includes("engineering") || t.includes("development") || t.includes("service")) return "code";
  if (t.includes("test") || t.includes("qa") || t.includes("quality") || t.includes("validation") || t.includes("verification")) return "qa";
  if (t.includes("deploy") || t.includes("release") || t.includes("readiness") || t.includes("launch") || t.includes("installation")) return "launch";
  if (t.includes("market") || t.includes("commercial") || t.includes("institutional") || t.includes("adoption")) return "market";
  if (t.includes("growth") || t.includes("expansion") || t.includes("evolution") || t.includes("scale")) return "growth";
  if (t.includes("user") || t.includes("stakeholder") || t.includes("client") || t.includes("people")) return "people";
  if (t.includes("product") || t.includes("scope") || t.includes("requirement") || t.includes("feature")) return "product";
  return "default";
}

/**
 * Reusable content-only version of the IBCS 3D dice showcase.
 */
export function DiceRoadmapShowcase({
  items = [],
  autoRotate = true,
  autoRotateInterval = 6000,
  className = "",
}) {
  const safeItems = useMemo(
    () => (Array.isArray(items) ? items : []).filter(Boolean),
    [items]
  );
  const totalItems = safeItems.length;

  const [stepCount, setStepCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [rotation, setRotation] = useState({ rx: 0, ry: 0 });
  const [faceItems, setFaceItems] = useState(() => Array.from({ length: 6 }, (_, i) => i));

  const rollingRef = useRef(false);
  const hoverRef = useRef(false);
  const stepRef = useRef(0);
  const activeRef = useRef(0);
  const settleRef = useRef(null);

  useEffect(() => {
    hoverRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const listener = (event) => setReducedMotion(event.matches);
    mq.addEventListener?.("change", listener);
    return () => mq.removeEventListener?.("change", listener);
  }, []);

  useEffect(() => {
    return () => {
      if (settleRef.current) clearTimeout(settleRef.current);
    };
  }, []);

  const performRoll = useCallback(
    (targetStep, targetIndex) => {
      if (!totalItems || rollingRef.current) return;
      const normalizedIndex = ((targetIndex % totalItems) + totalItems) % totalItems;
      rollingRef.current = true;
      setIsRolling(true);

      const targetFace = ((targetStep % 6) + 6) % 6;
      const targetDef = FACE_DEFINITIONS[targetFace];

      if (settleRef.current) clearTimeout(settleRef.current);

      if (reducedMotion) {
        stepRef.current = targetStep;
        activeRef.current = normalizedIndex;
        setStepCount(targetStep);
        setActiveIndex(normalizedIndex);
        setDisplayIndex(normalizedIndex);
        setFaceItems((prev) => {
          const next = [...prev];
          next[targetFace] = normalizedIndex;
          for (let o = 1; o < 6; o++) {
            next[(targetFace + o) % 6] = (normalizedIndex + o) % totalItems;
          }
          return next;
        });
        setIsRolling(false);
        rollingRef.current = false;
        return;
      }

      setRotation((prev) => {
        let rx = prev.rx + 360;
        let ry = prev.ry - 360;
        const desiredX = ((targetDef.baseRx % 360) + 360) % 360;
        const desiredY = ((targetDef.baseRy % 360) + 360) % 360;
        let dx = desiredX - (((rx % 360) + 360) % 360);
        let dy = desiredY - (((ry % 360) + 360) % 360);
        if (dx < -180) dx += 360;
        if (dx > 180) dx -= 360;
        if (dy < -180) dy += 360;
        if (dy > 180) dy -= 360;
        return { rx: rx + dx, ry: ry + dy };
      });

      settleRef.current = setTimeout(() => {
        stepRef.current = targetStep;
        activeRef.current = normalizedIndex;
        setStepCount(targetStep);
        setActiveIndex(normalizedIndex);
        setDisplayIndex(normalizedIndex);
        setFaceItems((prev) => {
          const next = [...prev];
          next[targetFace] = normalizedIndex;
          for (let o = 1; o < 6; o++) {
            next[(targetFace + o) % 6] = (normalizedIndex + o) % totalItems;
          }
          return next;
        });
        setIsRolling(false);
        rollingRef.current = false;
      }, 1400);
    },
    [reducedMotion, totalItems]
  );

  useEffect(() => {
    if (!autoRotate || totalItems <= 1) return;
    const interval = setInterval(() => {
      if (!hoverRef.current && !rollingRef.current) {
        const nextStep = stepRef.current + 1;
        const nextIndex = (activeRef.current + 1) % totalItems;
        performRoll(nextStep, nextIndex);
      }
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, autoRotateInterval, performRoll, totalItems]);

  const handleNext = () => {
    if (rollingRef.current || !totalItems) return;
    const nextStep = stepRef.current + 1;
    const nextIndex = (activeRef.current + 1) % totalItems;
    performRoll(nextStep, nextIndex);
  };

  const handlePrev = () => {
    if (rollingRef.current || !totalItems) return;
    const prevStep = stepRef.current - 1;
    const prevIndex = (activeRef.current - 1 + totalItems) % totalItems;
    performRoll(prevStep, prevIndex);
  };

  const handleSelectDirect = (targetIndex) => {
    if (rollingRef.current || targetIndex === activeRef.current || !totalItems) return;
    const diff = (targetIndex - activeRef.current + totalItems) % totalItems;
    const nextStep = stepRef.current + diff;
    performRoll(nextStep, targetIndex);
  };

  const handleFaceClick = useCallback(
    (faceIdx, itemIdx) => {
      if (rollingRef.current) return;
      const currentFaceIdx = ((stepRef.current % 6) + 6) % 6;
      let diff = (faceIdx - currentFaceIdx + 6) % 6;
      if (diff === 0) diff = 6;
      const targetStep = stepRef.current + diff;
      performRoll(targetStep, itemIdx);
    },
    [performRoll]
  );

  const currentItem = safeItems[displayIndex] || safeItems[0] || {};
  const currentIconKey = currentItem.icon || getIconForTitle(currentItem.title);

  return (
    <div
      className={`dice-roadmap-showcase ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="3D Dice Product Roadmap Showcase"
    >
      <div className="dice-roadmap-layout">
        {/* LEFT COLUMN: 3D ROLLING DICE & TEAL HOLOGRAPHIC PEDESTAL */}
        <div className="dice-roadmap-visual">
          <div className="dice-roadmap-ambient" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="dice-roadmap-dots dice-roadmap-dots-top" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={`dot-top-${i}`} />
            ))}
          </div>
          <div className="dice-roadmap-dots dice-roadmap-dots-bottom" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={`dot-btm-${i}`} />
            ))}
          </div>

          <div className="dice-roadmap-ground" aria-hidden="true">
            <span />
            <span />
            <span />
            <i />
          </div>

          <div className="dice-roadmap-pedestal" aria-hidden="true">
            <span />
            <i />
          </div>

          <div className="dice-roadmap-connector" aria-hidden="true">
            <span />
            <i />
          </div>

          <div className="dice-roadmap-viewport">
            <div
              className="dice-roadmap-anchor"
              style={{
                transform: "rotateX(-16deg) rotateY(22deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="dice-roadmap-cube"
                style={{
                  transform: `rotateX(${rotation.rx}deg) rotateY(${rotation.ry}deg)`,
                  transformStyle: "preserve-3d",
                  transition: reducedMotion
                    ? "none"
                    : "transform 1.4s cubic-bezier(0.25, 1, 0.45, 1.05)",
                }}
              >
                {FACE_DEFINITIONS.map((def, faceIdx) => {
                  const itemIdx = faceItems[faceIdx] % totalItems;
                  const item = safeItems[itemIdx] || safeItems[0] || {};
                  const isCurrentFront = ((stepCount % 6) + 6) % 6 === faceIdx;
                  const numStr = String(itemIdx + 1).padStart(2, "0");
                  const iconKey = item.icon || getIconForTitle(item.title);

                  return (
                    <button
                      key={def.name}
                      type="button"
                      className={`dice-roadmap-face ${isCurrentFront ? "is-active" : ""}`}
                      style={{
                        transform: def.transform,
                        background: def.bg,
                        filter: def.filter,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFaceClick(faceIdx, itemIdx);
                      }}
                      title={`Click to show Item ${numStr}: ${item.title || ""}`}
                      aria-label={`Show Item ${numStr}: ${item.title || ""}`}
                      disabled={isRolling}
                    >
                      <div className="dice-roadmap-face-rim" />
                      <div className="dice-roadmap-face-glare" />
                      <div className="dice-roadmap-face-content">
                        <DiceItemIcon type={iconKey} className="dice-roadmap-icon" />
                        <small>{numStr}</small>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="dice-roadmap-status" aria-live="polite">
            <span className={isRolling ? "is-rolling" : ""} />
            <span>
              {isRolling
                ? "ROLLING 3D DICE..."
                : `ITEM ${String(displayIndex + 1).padStart(2, "0")} / ${String(totalItems).padStart(2, "0")}`}
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: GLASSMORPHISM CONTENT INFORMATION PANEL */}
        <div className="dice-roadmap-panel-wrap">
          <div className={`dice-roadmap-panel ${isRolling ? "is-transitioning" : ""}`}>
            <div className="dice-roadmap-panel-glare" aria-hidden="true" />

            <div className="dice-roadmap-panel-meta">
              <span>
                <i /> ROADMAP ITEM {String(displayIndex + 1).padStart(2, "0")}
              </span>
              <span>{currentItem.number ? `KEY AREA #${currentItem.number}` : "IBCS ROADMAP"}</span>
            </div>

            <div className="dice-roadmap-panel-body" key={`panel-item-${displayIndex}`}>
              <div className="dice-roadmap-panel-icon">
                <DiceItemIcon type={currentIconKey} />
              </div>
              <h3>{currentItem.title}</h3>
              <p>{currentItem.description}</p>
            </div>
          </div>

          <div className="dice-roadmap-controls">
            <button
              type="button"
              onClick={handlePrev}
              disabled={isRolling}
              aria-label="Previous item"
            >
              ← Prev
            </button>

            <div className="dice-roadmap-pagination">
              {safeItems.map((it, i) => (
                <button
                  key={it.id || i}
                  type="button"
                  className={i === activeIndex ? "is-active" : ""}
                  onClick={() => handleSelectDirect(i)}
                  aria-label={`Go to item ${i + 1}`}
                  title={it.title}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={isRolling}
              aria-label="Next item"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
   6. 3D DICE PRODUCT ROADMAP SHOWCASE STYLES
   ========================================================================= */
.dice-roadmap-showcase{isolation:isolate;padding:clamp(1.5rem,4vw,3.25rem);background:linear-gradient(180deg,#e8f8f6 0%,#f2fcfb 52%,#f8fdfc 100%);border:1px solid #d0ece9;border-radius:28px;color:#042c2e;--roadmap-dice-size:170px;--roadmap-dice-half:85px}
.dice-roadmap-showcase *{box-sizing:border-box}
.dice-roadmap-layout{width:min(100%,1100px);margin-inline:auto;display:grid;grid-template-columns:minmax(260px,.88fr) minmax(0,1.12fr);align-items:center;gap:clamp(2rem,5vw,4rem)}
.dice-roadmap-visual{min-height:430px;position:relative;display:flex;align-items:center;justify-content:center;flex-direction:column;isolation:isolate}
.dice-roadmap-ambient{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:-1}
.dice-roadmap-ambient span{position:absolute;border-radius:50%;filter:blur(48px);pointer-events:none}
.dice-roadmap-ambient span:nth-child(1){width:300px;height:300px;top:-100px;left:8%;background:rgba(182,242,237,.42)}
.dice-roadmap-ambient span:nth-child(2){width:330px;height:260px;right:-5%;bottom:-50px;background:rgba(45,212,191,.2)}
.dice-roadmap-ambient span:nth-child(3){width:360px;height:250px;left:20%;top:25%;background:rgba(0,103,105,.045)}
.dice-roadmap-dots{position:absolute;display:grid;grid-template-columns:repeat(6,6px);gap:8px;pointer-events:none;opacity:.52}
.dice-roadmap-dots span{width:6px;height:6px;border-radius:50%;background:#8fd6cf}
.dice-roadmap-dots-top{top:22px;right:24px}.dice-roadmap-dots-bottom{bottom:22px;left:24px;opacity:.32}
.dice-roadmap-ground{position:absolute;left:50%;bottom:40px;transform:translateX(-50%);width:min(100%,400px);height:150px;display:flex;align-items:center;justify-content:center;pointer-events:none}
.dice-roadmap-ground span{position:absolute;width:100%;height:72%;border:1px solid rgba(45,212,191,.4);border-radius:50%;filter:blur(.3px)}
.dice-roadmap-ground span:nth-child(2){width:80%;height:58%;border-color:rgba(0,103,105,.32)}
.dice-roadmap-ground span:nth-child(3){width:62%;height:46%;border-color:rgba(45,212,191,.78);box-shadow:0 0 22px rgba(45,212,191,.35)}
.dice-roadmap-ground i{position:absolute;width:55%;height:44%;border-radius:50%;background:rgba(45,212,191,.22);filter:blur(20px)}
.dice-roadmap-pedestal{position:absolute;left:50%;bottom:68px;transform:translateX(-50%);width:250px;height:70px;display:flex;justify-content:center;align-items:center;pointer-events:none}
.dice-roadmap-pedestal>span{position:absolute;inset:0;border-radius:50%;border:2px solid #14b8a6;background:linear-gradient(180deg,#f2fcfb,#e0f5f3 55%,#8fd6cf);box-shadow:0 14px 32px rgba(0,103,105,.18),inset 0 3px 10px rgba(255,255,255,.95)}
.dice-roadmap-pedestal>i{position:absolute;width:92%;height:80%;border-radius:50%;border:1px solid #2dd4bf;box-shadow:0 0 16px rgba(45,212,191,.65),inset 0 0 14px rgba(0,103,105,.18)}
.dice-roadmap-connector{display:none;position:absolute;top:48%;right:-32px;align-items:center;z-index:5;pointer-events:none}
.dice-roadmap-connector span{height:2px;width:32px;background:linear-gradient(90deg,rgba(20,184,166,.5),#006769)}
.dice-roadmap-connector i{width:15px;height:15px;border-radius:50%;background:#006769;border:2px solid white;box-shadow:0 0 0 4px rgba(143,214,207,.6),0 0 14px #2dd4bf;animation:dice-roadmap-pulse 1.8s ease-in-out infinite}
.dice-roadmap-viewport{position:relative;z-index:2;perspective:1200px;perspective-origin:50% 50%;transform-style:preserve-3d;margin-bottom:34px}
.dice-roadmap-anchor{transform-style:preserve-3d;will-change:transform}
.dice-roadmap-cube{position:relative;width:var(--roadmap-dice-size);height:var(--roadmap-dice-size);transform-style:preserve-3d;will-change:transform}
.dice-roadmap-face{appearance:none;position:absolute;inset:0;width:100%;height:100%;padding:0;border:0;border-radius:16px;backface-visibility:hidden;-webkit-backface-visibility:hidden;transform-style:preserve-3d;display:flex;align-items:center;justify-content:center;cursor:pointer;user-select:none;box-shadow:inset 0 0 0 1.5px rgba(0,103,105,.22),inset 0 3px 6px rgba(255,255,255,.95),inset 0 -3px 8px rgba(0,103,105,.1),inset 3px 0 6px rgba(255,255,255,.8),inset -3px 0 6px rgba(0,103,105,.08);transition:box-shadow .3s ease,filter .3s ease}
.dice-roadmap-face:hover,.dice-roadmap-face:focus-visible{outline:none;box-shadow:inset 0 0 0 2px #14b8a6,inset 0 0 22px rgba(45,212,191,.45),inset 0 3px 8px white,inset 0 -4px 10px rgba(0,103,105,.18)}
.dice-roadmap-face.is-active{box-shadow:inset 0 0 0 1.5px rgba(0,103,105,.35),inset 0 3px 8px white,inset 0 -3px 8px rgba(0,103,105,.12),inset 3px 0 6px rgba(255,255,255,.85)}
.dice-roadmap-face:disabled{cursor:wait}
.dice-roadmap-face-rim{position:absolute;inset:4px;border-radius:12px;border:1px solid rgba(255,255,255,.85);pointer-events:none;transition:border-color .3s ease}
.dice-roadmap-face:hover .dice-roadmap-face-rim{border-color:rgba(45,212,191,.55)}
.dice-roadmap-face-glare{position:absolute;top:-14px;left:-14px;width:80px;height:45px;background:radial-gradient(ellipse at center,rgba(255,255,255,.95) 0%,rgba(255,255,255,0) 70%);transform:rotate(-35deg);pointer-events:none}
.dice-roadmap-face-content{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:6px;color:#006769;transform:translateZ(3px);filter:drop-shadow(0 4px 8px rgba(0,103,105,.16))}
.dice-roadmap-icon{width:clamp(3rem,6vw,4.8rem);height:clamp(3rem,6vw,4.8rem)}
.dice-roadmap-face-content small{font:700 10px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.12em;color:#567d7f}
.dice-roadmap-status{position:absolute;bottom:12px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:8px;white-space:nowrap;font:700 10px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.14em;color:#567d7f}
.dice-roadmap-status span,.dice-roadmap-panel-meta i{width:7px;height:7px;display:inline-block;border-radius:50%;background:#14b8a6;box-shadow:0 0 10px rgba(20,184,166,.65)}
.dice-roadmap-status span.is-rolling{animation:dice-roadmap-pulse .5s ease-in-out infinite}
.dice-roadmap-panel-wrap{min-width:0}
.dice-roadmap-panel{position:relative;min-height:310px;overflow:hidden;display:flex;flex-direction:column;justify-content:center;padding:clamp(1.4rem,3vw,2.5rem);border:1px solid #c5ece9;border-radius:32px;background:linear-gradient(135deg,rgba(255,255,255,.94),rgba(240,251,250,.8));backdrop-filter:blur(18px);box-shadow:0 20px 50px rgba(0,103,105,.07),0 2px 12px rgba(0,103,105,.02)}
.dice-roadmap-panel.is-transitioning .dice-roadmap-panel-body{opacity:.35;transform:translateY(5px) scale(.99)}
.dice-roadmap-panel-glare{position:absolute;top:-120px;right:-110px;width:280px;height:280px;border-radius:50%;background:linear-gradient(135deg,rgba(255,255,255,.9),rgba(182,242,237,.2),transparent);filter:blur(25px);pointer-events:none}
.dice-roadmap-panel-meta{position:relative;z-index:1;display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;font:700 10px/1.5 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.09em;color:#567d7f;margin-bottom:8px}
.dice-roadmap-panel-meta>span:first-child{display:flex;align-items:center;gap:8px}
.dice-roadmap-panel-body{position:relative;z-index:1;padding:12px 0 0;transition:opacity .35s ease,transform .35s ease;animation:dice-roadmap-content-in .45s ease both}
.dice-roadmap-panel-icon{width:43px;height:43px;display:grid;place-items:center;margin-bottom:17px;border:1px solid #c5ece9;border-radius:13px;background:linear-gradient(135deg,#fff,#e6f7f5);color:#006769;box-shadow:0 5px 15px rgba(0,103,105,.07)}
.dice-roadmap-panel-icon svg{width:24px;height:24px}
.dice-roadmap-panel-body h3{margin:0 0 14px;color:#042c2e;font-size:clamp(1.35rem,2.4vw,2.1rem);font-weight:800;line-height:1.18;letter-spacing:-.035em;overflow-wrap:anywhere}
.dice-roadmap-panel-body p{margin:0;color:#1e4345;font-size:clamp(.95rem,1.4vw,1.08rem);line-height:1.8;white-space:pre-line;overflow-wrap:anywhere}
.dice-roadmap-controls{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 4px 0}
.dice-roadmap-controls>button{display:inline-flex;align-items:center;gap:8px;border:1px solid #c5ece9;border-radius:999px;background:rgba(255,255,255,.8);padding:9px 13px;color:#006769;font-size:12px;font-weight:700;transition:background .2s ease,color .2s ease,border-color .2s ease;cursor:pointer}
.dice-roadmap-controls>button:hover:not(:disabled){background:#006769;border-color:#006769;color:white}.dice-roadmap-controls>button:disabled{opacity:.45;cursor:not-allowed}
.dice-roadmap-pagination{display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap;max-width:55%}
.dice-roadmap-pagination button{width:7px;height:7px;min-width:7px;padding:0;border:0;border-radius:99px;background:#b8ded9;transition:width .25s ease,background .25s ease;cursor:pointer}
.dice-roadmap-pagination button.is-active{width:22px;background:#006769}.dice-roadmap-pagination button:focus-visible{outline:2px solid #14b8a6;outline-offset:3px}
@keyframes dice-roadmap-content-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
@keyframes dice-roadmap-pulse{0%,100%{opacity:.7;transform:scale(.92)}50%{opacity:1;transform:scale(1.12)}}
@media(min-width:1024px){.dice-roadmap-connector{display:flex}}
@media(max-width:900px){.dice-roadmap-layout{grid-template-columns:minmax(0,1fr);gap:1rem}.dice-roadmap-visual{min-height:390px}.dice-roadmap-ground{bottom:25px}.dice-roadmap-pedestal{bottom:53px}.dice-roadmap-panel{min-height:280px}.dice-roadmap-connector{display:none}}
@media(max-width:640px){.dice-roadmap-showcase{padding:1rem;border-radius:20px;--roadmap-dice-size:135px;--roadmap-dice-half:67.5px}.dice-roadmap-visual{min-height:340px}.dice-roadmap-ground{width:100%;height:125px;bottom:25px}.dice-roadmap-pedestal{width:205px;height:57px;bottom:49px}.dice-roadmap-panel{padding:1.25rem;border-radius:23px;min-height:260px}.dice-roadmap-panel-body{padding:20px 0}.dice-roadmap-panel-footer{font-size:9px}.dice-roadmap-controls{gap:6px}.dice-roadmap-controls>button{padding:8px 10px;font-size:11px}.dice-roadmap-pagination{gap:5px;max-width:42%}.dice-roadmap-pagination button{width:6px;min-width:6px;height:6px}.dice-roadmap-pagination button.is-active{width:16px}.dice-roadmap-dots-top{right:10px;top:12px}.dice-roadmap-dots-bottom{left:10px;bottom:12px}}
@media(prefers-reduced-motion:reduce){.dice-roadmap-cube{transition:none!important}.dice-roadmap-panel-body,.dice-roadmap-connector i,.dice-roadmap-status span{animation:none!important;transition:none!important}}

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
// 2. HERO PRODUCT ROADMAP BACKGROUND FLOATING ICONS
// (Product Planning, Roadmap Timeline, Milestones, Lifecycle, Version Control, etc.)
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
    // 1. Product Planning
    case "product-planning":
      return (
        <svg {...commonProps}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" fill={color} fillOpacity="0.25" />
          <path d="M9 12l2 2 4-4" strokeWidth="2" />
          <line x1="9" y1="18" x2="15" y2="18" />
        </svg>
      );

    // 2. Roadmap Timeline
    case "roadmap-timeline":
      return (
        <svg {...commonProps}>
          <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" />
          <circle cx="6" cy="12" r="3" fill={color} fillOpacity="0.3" />
          <circle cx="12" cy="12" r="3" fill={color} fillOpacity="0.3" />
          <circle cx="18" cy="12" r="3" fill={color} fillOpacity="0.3" />
          <path d="M6 9V5M12 15v4M18 9V5" />
          <circle cx="6" cy="5" r="1.5" fill={color} />
          <circle cx="12" cy="19" r="1.5" fill={color} />
          <circle cx="18" cy="5" r="1.5" fill={color} />
        </svg>
      );

    // 3. Project Milestones
    case "project-milestones":
      return (
        <svg {...commonProps}>
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" fill={color} fillOpacity="0.2" />
          <line x1="4" y1="22" x2="4" y2="15" strokeWidth="2" />
          <polygon points="12,7 13.5,10 16.5,10.5 14.5,12.5 15,15.5 12,14 9,15.5 9.5,12.5 7.5,10.5 10.5,10" fill={color} fillOpacity="0.4" />
        </svg>
      );

    // 4. Product Lifecycle
    case "product-lifecycle":
      return (
        <svg {...commonProps}>
          <path d="M21.5 2v6h-6" />
          <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l6.73-6.19" />
          <circle cx="12" cy="12" r="3" fill={color} fillOpacity="0.2" />
          <circle cx="12" cy="12" r="1.2" fill={color} />
        </svg>
      );

    // 5. Software Development
    case "software-development":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="3" fill={color} fillOpacity="0.08" />
          <path d="M8 10l-3 3 3 3M16 10l3 3-3 3" strokeWidth="2" />
          <line x1="13.5" y1="9" x2="10.5" y2="17" />
        </svg>
      );

    // 6. Version Control
    case "version-control":
      return (
        <svg {...commonProps}>
          <circle cx="6" cy="6" r="3" fill={color} fillOpacity="0.25" />
          <circle cx="6" cy="18" r="3" fill={color} fillOpacity="0.25" />
          <circle cx="18" cy="9" r="3" fill={color} fillOpacity="0.25" />
          <line x1="6" y1="9" x2="6" y2="15" strokeWidth="2" />
          <path d="M6 9a9 9 0 0 1 9-3h3" strokeWidth="1.8" />
          <circle cx="6" cy="6" r="1.2" fill={color} />
          <circle cx="6" cy="18" r="1.2" fill={color} />
          <circle cx="18" cy="9" r="1.2" fill={color} />
        </svg>
      );

    // 7. Release Management
    case "release-management":
      return (
        <svg {...commonProps}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill={color} fillOpacity="0.3" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill={color} fillOpacity="0.12" />
          <circle cx="15.5" cy="8.5" r="1.8" fill={color} />
          <path d="M9 12l-4 1 2 2" />
          <path d="M12 15l1 4 2-2" />
        </svg>
      );

    // 8. Feature Development
    case "feature-development":
      return (
        <svg {...commonProps}>
          <polygon points="12,2 15,8.5 22,9.3 17,14.1 18.2,21 12,17.7 5.8,21 7,14.1 2,9.3 9,8.5" fill={color} fillOpacity="0.18" />
          <circle cx="12" cy="12" r="2.5" fill={color} />
        </svg>
      );

    // 9. Sprint Planning
    case "sprint-planning":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" fill={color} fillOpacity="0.08" />
          <polyline points="12 7 12 12 15.5 14" strokeWidth="2" />
          <path d="M19 4v3M5 4v3M3 9h18" strokeOpacity="0.4" />
          <path d="M12 21a9 9 0 0 0 7-3.4" strokeWidth="2" />
          <polyline points="19 14 19 18 15 18" strokeWidth="1.8" />
        </svg>
      );

    // 10. Project Management
    case "project-management":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="2.5" fill={color} fillOpacity="0.06" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <rect x="4.5" y="6" width="3" height="4" rx="0.8" fill={color} fillOpacity="0.3" />
          <rect x="10.5" y="6" width="3" height="6" rx="0.8" fill={color} fillOpacity="0.3" />
          <rect x="16.5" y="6" width="3" height="3" rx="0.8" fill={color} fillOpacity="0.3" />
        </svg>
      );

    // 11. Technology Strategy
    case "technology-strategy":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9.5" fill={color} fillOpacity="0.08" />
          <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" fill={color} fillOpacity="0.35" />
          <circle cx="12" cy="12" r="1.5" fill={color} />
          <line x1="12" y1="2.5" x2="12" y2="4.5" />
          <line x1="12" y1="19.5" x2="12" y2="21.5" />
        </svg>
      );

    // 12. Product Deployment
    case "product-deployment":
      return (
        <svg {...commonProps}>
          <path d="M17.5 19H7a4.5 4.5 0 0 1-.9-8.91 5.5 5.5 0 0 1 10.74-1.57A4 4 0 0 1 17.5 19z" fill={color} fillOpacity="0.1" />
          <polyline points="9 13 12 10 15 13" strokeWidth="2" />
          <line x1="12" y1="10" x2="12" y2="16" strokeWidth="2" />
        </svg>
      );

    default:
      return (
        <svg {...commonProps}>
          <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" />
          <circle cx="6" cy="12" r="3" fill={color} fillOpacity="0.3" />
          <circle cx="12" cy="12" r="3" fill={color} fillOpacity="0.3" />
          <circle cx="18" cy="12" r="3" fill={color} fillOpacity="0.3" />
        </svg>
      );
  }
}

const FLOATING_ICONS = [
  // Top-left area
  { id: 1, type: "product-planning", size: 20, color: "#006769", opacity: 0.38, top: "8%", left: "4%", anim: "animate-float-shield-1", delay: "0s", rotate: "-6deg" },
  { id: 2, type: "roadmap-timeline", size: 21, color: "#14B8A6", opacity: 0.42, top: "22%", left: "11%", anim: "animate-float-shield-2", delay: "1.2s", rotate: "8deg" },
  { id: 3, type: "project-milestones", size: 18, color: "#007A7E", opacity: 0.32, top: "37%", left: "3%", anim: "animate-float-shield-3", delay: "2.5s", rotate: "-4deg" },
  { id: 4, type: "product-lifecycle", size: 20, color: "#006769", opacity: 0.40, top: "54%", left: "8%", anim: "animate-float-shield-4", delay: "0.8s", rotate: "6deg" },
  { id: 5, type: "software-development", size: 19, color: "#14B8A6", opacity: 0.35, top: "70%", left: "5%", anim: "animate-float-shield-1", delay: "3.1s", rotate: "12deg" },
  { id: 6, type: "version-control", size: 21, color: "#007A7E", opacity: 0.36, top: "84%", left: "12%", anim: "animate-float-shield-2", delay: "1.7s", rotate: "-8deg" },
  { id: 7, type: "release-management", size: 18, color: "#006769", opacity: 0.28, top: "27%", left: "21%", anim: "animate-float-shield-3", delay: "4.0s", rotate: "10deg" },
  { id: 8, type: "feature-development", size: 19, color: "#14B8A6", opacity: 0.32, top: "72%", left: "20%", anim: "animate-float-shield-4", delay: "2.1s", rotate: "-5deg" },
  { id: 9, type: "sprint-planning", size: 20, color: "#007A7E", opacity: 0.30, top: "16%", left: "17%", anim: "animate-float-shield-1", delay: "3.5s", rotate: "7deg" },

  // Top-right area
  { id: 10, type: "project-management", size: 21, color: "#007A7E", opacity: 0.40, top: "10%", right: "5%", anim: "animate-float-shield-2", delay: "0.5s", rotate: "6deg" },
  { id: 11, type: "technology-strategy", size: 19, color: "#14B8A6", opacity: 0.36, top: "24%", right: "12%", anim: "animate-float-shield-1", delay: "2.2s", rotate: "-8deg" },
  { id: 12, type: "product-deployment", size: 20, color: "#006769", opacity: 0.42, top: "40%", right: "4%", anim: "animate-float-shield-4", delay: "1.4s", rotate: "5deg" },
  { id: 13, type: "product-planning", size: 18, color: "#007A7E", opacity: 0.32, top: "56%", right: "9%", anim: "animate-float-shield-3", delay: "3.3s", rotate: "-6deg" },
  { id: 14, type: "roadmap-timeline", size: 20, color: "#14B8A6", opacity: 0.38, top: "72%", right: "6%", anim: "animate-float-shield-1", delay: "1.9s", rotate: "10deg" },
  { id: 15, type: "project-milestones", size: 19, color: "#006769", opacity: 0.30, top: "86%", right: "13%", anim: "animate-float-shield-2", delay: "2.7s", rotate: "-4deg" },
  { id: 16, type: "product-lifecycle", size: 18, color: "#007A7E", opacity: 0.28, top: "29%", right: "21%", anim: "animate-float-shield-4", delay: "0.9s", rotate: "8deg" },
  { id: 17, type: "software-development", size: 19, color: "#14B8A6", opacity: 0.34, top: "74%", right: "21%", anim: "animate-float-shield-3", delay: "3.7s", rotate: "-10deg" },
  { id: 18, type: "version-control", size: 18, color: "#006769", opacity: 0.30, top: "17%", right: "18%", anim: "animate-float-shield-2", delay: "1.1s", rotate: "-5deg" },

  // Center subtle ambient accents
  { id: 19, type: "release-management", size: 16, color: "#006769", opacity: 0.26, top: "6%", left: "28%", anim: "animate-float-shield-3", delay: "1.3s", rotate: "10deg" },
  { id: 20, type: "feature-development", size: 17, color: "#14B8A6", opacity: 0.28, top: "4%", left: "44%", anim: "animate-float-shield-1", delay: "2.6s", rotate: "-3deg" },
  { id: 21, type: "sprint-planning", size: 17, color: "#007A7E", opacity: 0.27, top: "5%", right: "42%", anim: "animate-float-shield-2", delay: "0.7s", rotate: "5deg" },
  { id: 22, type: "project-management", size: 18, color: "#006769", opacity: 0.28, top: "6%", right: "28%", anim: "animate-float-shield-4", delay: "3.0s", rotate: "-7deg" },
  { id: 23, type: "technology-strategy", size: 16, color: "#006769", opacity: 0.22, top: "46%", left: "26%", anim: "animate-float-shield-2", delay: "4.1s", rotate: "-12deg" },
  { id: 24, type: "product-deployment", size: 16, color: "#14B8A6", opacity: 0.22, top: "48%", right: "27%", anim: "animate-float-shield-1", delay: "1.8s", rotate: "6deg" },
  { id: 25, type: "product-planning", size: 16, color: "#007A7E", opacity: 0.24, bottom: "10%", left: "32%", anim: "animate-float-shield-4", delay: "2.3s", rotate: "4deg" },
  { id: 26, type: "roadmap-timeline", size: 16, color: "#006769", opacity: 0.24, bottom: "9%", right: "33%", anim: "animate-float-shield-3", delay: "0.9s", rotate: "-6deg" },
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
      title="Product Roadmap"
      company="IB Cyber Security Private Limited (IBCS)"
      summary="Explore the structured approach behind IBCS software product planning, research, innovation, architecture, development, testing, deployment, and continuous improvement. Discover how product requirements, technology evaluation, security considerations, scalability, and future enhancements guide the product development lifecycle."
      buttonLabel="Explore Product Roadmap"
      onExplore={handleExplore}
      onBack={onBack}
      onHome={onHome}
      features={[
        { label: "12 Roadmap Dimensions", dot: "#006769" },
        { label: "144+ Strategic Capabilities", dot: "#14B8A6" },
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
// 8. SECTION ITEM (3D DICE ROADMAP SHOWCASE DESIGN FOR ALL 12 SECTIONS)
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
    <section
      id={section.id}
      className="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F4FCFB] via-white to-[#F0FBFA] border-b border-[#D0ECE9] scroll-mt-20 overflow-hidden"
    >
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center px-4">
        {/* Section Header with original title, description, and number */}
        <SectionHeader section={section} searchQuery={searchQuery} showKeyAreasBar={false} />
        
        {/* 3D Dice Showcase Content Area */}
        <div className="w-full mt-6 sm:mt-8">
          <DiceRoadmapShowcase
            items={section.keyAreas}
            autoRotate={!isPaused}
            autoRotateInterval={6000}
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
  { id: "section-01", layout: "mobile-left", subheading: "Explore Product Strategy & Planning" },
  { id: "section-02", layout: "mobile-right", subheading: "Explore Research & Innovation" },
  { id: "section-03", layout: "mobile-left", subheading: "Explore Product Architecture & Design" },
  { id: "section-04", layout: "mobile-right", subheading: "Explore Software Product Development" },
  { id: "section-05", layout: "mobile-left", subheading: "Explore AI & Intelligent Technology Integration" },
  { id: "section-06", layout: "mobile-right", subheading: "Explore Testing, Security & Quality Assurance" },
  { id: "section-07", layout: "mobile-left", subheading: "Explore Deployment & Market Readiness" },
  { id: "section-08", layout: "mobile-right", subheading: "Explore Commercial & Institutional Expansion" },
  { id: "section-09", layout: "mobile-left", subheading: "Explore Global Product Expansion" },
  { id: "section-10", layout: "mobile-right", subheading: "Explore Advanced Technology Evolution" },
  { id: "section-11", layout: "mobile-left", subheading: "Explore Global Product Ecosystem" },
  { id: "section-12", layout: "mobile-right", subheading: "Explore Continuous Product Innovation" },
];

// ============================================================================
// 9. COMPLETE TECHNOLOGY & ARCHITECTURE PAGE COMPONENT
// ============================================================================

export default function ProductRoadmap({ onClose }) {
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
        {ProductRoadmapData.map((section, idx) => {
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

export const ProductRoadmapPage = ProductRoadmap;

