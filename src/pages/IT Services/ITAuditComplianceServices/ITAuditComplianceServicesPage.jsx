import { useState, useEffect, useRef } from "react";
import { Home } from "lucide-react";
import { SERVICES } from "./ITAuditComplianceServicesPageData.js";


// Distinct, vibrant color themes for all audit & compliance domains
const ICON_THEMES = {
  audit: {
    color: "#2563eb",
    bgLight: "#eff6ff",
    borderLight: "#bfdbfe",
    activeGradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    activeShadow: "0 6px 14px rgba(37, 99, 235, 0.35)",
    badgeGradient: "linear-gradient(145deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)",
    badgeShadow: "0 6px 18px rgba(37, 99, 235, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(30, 58, 138, 0.4)",
  },
  shield: {
    color: "#059669",
    bgLight: "#ecfdf5",
    borderLight: "#a7f3d0",
    activeGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    activeShadow: "0 6px 14px rgba(5, 150, 105, 0.35)",
    badgeGradient: "linear-gradient(145deg, #34d399 0%, #059669 50%, #047857 100%)",
    badgeShadow: "0 6px 18px rgba(5, 150, 105, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(6, 78, 59, 0.4)",
  },
  "shield-check": {
    color: "#0d9488",
    bgLight: "#f0fdfa",
    borderLight: "#99f6e4",
    activeGradient: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
    activeShadow: "0 6px 14px rgba(13, 148, 136, 0.35)",
    badgeGradient: "linear-gradient(145deg, #2dd4bf 0%, #0d9488 50%, #0f766e 100%)",
    badgeShadow: "0 6px 18px rgba(13, 148, 136, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(19, 78, 74, 0.4)",
  },
  lock: {
    color: "#7c3aed",
    bgLight: "#f5f3ff",
    borderLight: "#ddd6fe",
    activeGradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    activeShadow: "0 6px 14px rgba(124, 58, 237, 0.35)",
    badgeGradient: "linear-gradient(145deg, #a78bfa 0%, #7c3aed 50%, #6d28d9 100%)",
    badgeShadow: "0 6px 18px rgba(124, 58, 237, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(76, 29, 149, 0.4)",
  },
  "user-check": {
    color: "#9333ea",
    bgLight: "#faf5ff",
    borderLight: "#e9d5ff",
    activeGradient: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
    activeShadow: "0 6px 14px rgba(147, 51, 234, 0.35)",
    badgeGradient: "linear-gradient(145deg, #c084fc 0%, #9333ea 50%, #7e22ce 100%)",
    badgeShadow: "0 6px 18px rgba(147, 51, 234, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(88, 28, 135, 0.4)",
  },
  cloud: {
    color: "#0284c7",
    bgLight: "#f0f9ff",
    borderLight: "#bae6fd",
    activeGradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    activeShadow: "0 6px 14px rgba(2, 132, 199, 0.35)",
    badgeGradient: "linear-gradient(145deg, #38bdf8 0%, #0284c7 50%, #0369a1 100%)",
    badgeShadow: "0 6px 18px rgba(2, 132, 199, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(12, 74, 110, 0.4)",
  },
  database: {
    color: "#d97706",
    bgLight: "#fffbeb",
    borderLight: "#fde68a",
    activeGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    activeShadow: "0 6px 14px rgba(217, 119, 6, 0.35)",
    badgeGradient: "linear-gradient(145deg, #fbbf24 0%, #d97706 50%, #b45309 100%)",
    badgeShadow: "0 6px 18px rgba(217, 119, 6, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(120, 53, 15, 0.4)",
  },
  network: {
    color: "#2563eb",
    bgLight: "#eff6ff",
    borderLight: "#bfdbfe",
    activeGradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    activeShadow: "0 6px 14px rgba(37, 99, 235, 0.35)",
    badgeGradient: "linear-gradient(145deg, #60a5fa 0%, #2563eb 50%, #1d4ed8 100%)",
    badgeShadow: "0 6px 18px rgba(37, 99, 235, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(30, 64, 175, 0.4)",
  },
  server: {
    color: "#4f46e5",
    bgLight: "#eef2ff",
    borderLight: "#c7d2fe",
    activeGradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    activeShadow: "0 6px 14px rgba(79, 70, 229, 0.35)",
    badgeGradient: "linear-gradient(145deg, #818cf8 0%, #4f46e5 50%, #3730a3 100%)",
    badgeShadow: "0 6px 18px rgba(79, 70, 229, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(49, 46, 129, 0.4)",
  },
  laptop: {
    color: "#0891b2",
    bgLight: "#ecfeff",
    borderLight: "#a5f3fc",
    activeGradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    activeShadow: "0 6px 14px rgba(8, 145, 178, 0.35)",
    badgeGradient: "linear-gradient(145deg, #22d3ee 0%, #0891b2 50%, #0e7490 100%)",
    badgeShadow: "0 6px 18px rgba(8, 145, 178, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(22, 78, 99, 0.4)",
  },
  mobile: {
    color: "#0284c7",
    bgLight: "#f0f9ff",
    borderLight: "#bae6fd",
    activeGradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
    activeShadow: "0 6px 14px rgba(2, 132, 199, 0.35)",
    badgeGradient: "linear-gradient(145deg, #7dd3fc 0%, #0284c7 50%, #0369a1 100%)",
    badgeShadow: "0 6px 18px rgba(2, 132, 199, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(12, 74, 110, 0.4)",
  },
  backup: {
    color: "#1d4ed8",
    bgLight: "#eff6ff",
    borderLight: "#bfdbfe",
    activeGradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    activeShadow: "0 6px 14px rgba(29, 78, 216, 0.35)",
    badgeGradient: "linear-gradient(145deg, #60a5fa 0%, #1d4ed8 50%, #1e40af 100%)",
    badgeShadow: "0 6px 18px rgba(29, 78, 216, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(30, 58, 138, 0.4)",
  },
  search: {
    color: "#e11d48",
    bgLight: "#fff1f2",
    borderLight: "#fecdd3",
    activeGradient: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)",
    activeShadow: "0 6px 14px rgba(225, 29, 72, 0.35)",
    badgeGradient: "linear-gradient(145deg, #fb7185 0%, #e11d48 50%, #be123c 100%)",
    badgeShadow: "0 6px 18px rgba(225, 29, 72, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(136, 19, 55, 0.4)",
  },
  workflow: {
    color: "#8b5cf6",
    bgLight: "#f5f3ff",
    borderLight: "#ddd6fe",
    activeGradient: "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)",
    activeShadow: "0 6px 14px rgba(139, 92, 246, 0.35)",
    badgeGradient: "linear-gradient(145deg, #c4b5fd 0%, #8b5cf6 50%, #6d28d9 100%)",
    badgeShadow: "0 6px 18px rgba(139, 92, 246, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(76, 29, 149, 0.4)",
  },
  scale: {
    color: "#b45309",
    bgLight: "#fffbeb",
    borderLight: "#fde68a",
    activeGradient: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    activeShadow: "0 6px 14px rgba(180, 83, 9, 0.35)",
    badgeGradient: "linear-gradient(145deg, #f59e0b 0%, #b45309 50%, #92400e 100%)",
    badgeShadow: "0 6px 18px rgba(180, 83, 9, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(120, 53, 15, 0.4)",
  },
  badge: {
    color: "#ea580c",
    bgLight: "#fff7ed",
    borderLight: "#fed7aa",
    activeGradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    activeShadow: "0 6px 14px rgba(234, 88, 12, 0.35)",
    badgeGradient: "linear-gradient(145deg, #fb923c 0%, #ea580c 50%, #c2410c 100%)",
    badgeShadow: "0 6px 18px rgba(234, 88, 12, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(124, 45, 18, 0.4)",
  },
  code: {
    color: "#f43f5e",
    bgLight: "#fff1f2",
    borderLight: "#fecdd3",
    activeGradient: "linear-gradient(135deg, #fb7185 0%, #f43f5e 100%)",
    activeShadow: "0 6px 14px rgba(244, 63, 94, 0.35)",
    badgeGradient: "linear-gradient(145deg, #fda4af 0%, #f43f5e 50%, #e11d48 100%)",
    badgeShadow: "0 6px 18px rgba(244, 63, 94, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(136, 19, 55, 0.4)",
  },
  ai: {
    color: "#a21caf",
    bgLight: "#fdf4ff",
    borderLight: "#f5d0fe",
    activeGradient: "linear-gradient(135deg, #c026d3 0%, #a21caf 100%)",
    activeShadow: "0 6px 14px rgba(162, 28, 175, 0.35)",
    badgeGradient: "linear-gradient(145deg, #e879f9 0%, #a21caf 50%, #86198f 100%)",
    badgeShadow: "0 6px 18px rgba(162, 28, 175, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(112, 26, 117, 0.4)",
  },
  analytics: {
    color: "#16a34a",
    bgLight: "#f0fdf4",
    borderLight: "#bbf7d0",
    activeGradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    activeShadow: "0 6px 14px rgba(22, 163, 74, 0.35)",
    badgeGradient: "linear-gradient(145deg, #4ade80 0%, #16a34a 50%, #15803d 100%)",
    badgeShadow: "0 6px 18px rgba(22, 163, 74, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(20, 83, 45, 0.4)",
  },
  wrench: {
    color: "#d97706",
    bgLight: "#fffbeb",
    borderLight: "#fde68a",
    activeGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    activeShadow: "0 6px 14px rgba(217, 119, 6, 0.35)",
    badgeGradient: "linear-gradient(145deg, #fbbf24 0%, #d97706 50%, #b45309 100%)",
    badgeShadow: "0 6px 18px rgba(217, 119, 6, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(120, 53, 15, 0.4)",
  },
  headset: {
    color: "#db2777",
    bgLight: "#fdf2f8",
    borderLight: "#fbcfe8",
    activeGradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
    activeShadow: "0 6px 14px rgba(219, 39, 119, 0.35)",
    badgeGradient: "linear-gradient(145deg, #f472b6 0%, #db2777 50%, #be185d 100%)",
    badgeShadow: "0 6px 18px rgba(219, 39, 119, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(131, 24, 67, 0.4)",
  },
};

// High-fidelity SVG icons tailored for all 62 audit & compliance domains
function ServiceIcon({ type, isActive = false, className = "w-5 h-5" }) {
  const theme = ICON_THEMES[type] || ICON_THEMES.audit;
  const iconColor = isActive ? "#ffffff" : theme.color;

  switch (type) {
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 2.5L4.5 5.8V11.5C4.5 16.3 7.7 20.8 12 22C16.3 20.8 19.5 16.3 19.5 11.5V5.8L12 2.5Z"
            fill={isActive ? "rgba(255,255,255,0.2)" : `${theme.color}20`}
            stroke={iconColor}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M8.8 11.8L11 14L15.2 9.8"
            stroke={iconColor}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "shield-check":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 2L4 5.5V11.2C4 16.5 7.4 21.4 12 22.8C16.6 21.4 20 16.5 20 11.2V5.5L12 2Z"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 12L11 14.5L16 9.5"
            stroke={iconColor}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "headset":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M4 13C4 8.58 7.58 5 12 5C16.42 5 20 13 20 13"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M3 13C3 8.03 7.03 4 12 4C16.97 4 21 8.03 21 13"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="2.5"
            y="12"
            width="3.5"
            height="7"
            rx="1.75"
            fill={iconColor}
          />
          <rect
            x="18"
            y="12"
            width="3.5"
            height="7"
            rx="1.75"
            fill={iconColor}
          />
          <path
            d="M19.5 19V20C19.5 21.1 18.6 22 17.5 22H14.5"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="13.5" cy="22" r="1.5" fill={iconColor} />
        </svg>
      );

    case "cloud":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M7 11.5C4.5 11.5 2.5 13.5 2.5 16C2.5 18.5 4.5 20.5 7 20.5H17C19.5 20.5 21.5 18.5 21.5 16C21.5 13.6 19.6 11.6 17.2 11.5C16.8 7.8 13.7 5 10 5C6.7 5 4 7.4 3.4 10.5C4.4 10.7 5.5 11.1 7 11.5Z"
            fill={iconColor}
          />
          <line
            x1="6"
            y1="16"
            x2="18"
            y2="16"
            stroke={isActive ? theme.color : "#ffffff"}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "analytics":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect x="3.5" y="14" width="3.5" height="7" rx="1.5" fill={iconColor} />
          <rect x="9" y="10" width="3.5" height="11" rx="1.5" fill={iconColor} />
          <rect x="14.5" y="6" width="3.5" height="15" rx="1.5" fill={iconColor} />
          <rect x="20" y="12" width="3.5" height="9" rx="1.5" fill={iconColor} />
        </svg>
      );

    case "ai":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="3.5"
            stroke={iconColor}
            strokeWidth="2"
          />
          <path
            d="M9 1.5V4M15 1.5V4M9 20V22.5M15 20V22.5M1.5 9H4M1.5 15H4M20 9H22.5M20 15H22.5"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <text
            x="12"
            y="14.5"
            textAnchor="middle"
            fontSize="7"
            fontWeight="bold"
            fill={iconColor}
            fontFamily="system-ui, sans-serif"
          >
            AI
          </text>
        </svg>
      );

    case "code":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect
            x="2.5"
            y="4"
            width="19"
            height="16"
            rx="3.5"
            stroke={iconColor}
            strokeWidth="2"
          />
          <path
            d="M8 9.5L5.5 12L8 14.5M16 9.5L18.5 12L16 14.5M13.5 8.5L10.5 15.5"
            stroke={iconColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "wrench":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M14.7 6.3C15.1 4.5 14.4 2.6 13 1.5C11.5 0.3 9.4 0.1 7.7 1C6.7 1.6 6.1 2.5 5.8 3.5L8.5 6.2L6.2 8.5L3.5 5.8C2.5 6.1 1.6 6.7 1 7.7C0.1 9.4 0.3 11.5 1.5 13C2.6 14.4 4.5 15.1 6.3 14.7L16.2 24.6C16.8 25.2 17.7 25.2 18.3 24.6L22.6 20.3C23.2 19.7 23.2 18.8 22.6 18.2L14.7 6.3Z"
            fill={iconColor}
            transform="rotate(90 12 12)"
          />
        </svg>
      );

    case "audit":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M6 3H15L19 7V20C19 20.55 18.55 21 18 21H6C5.45 21 5 20.55 5 20V4C5 3.45 5.45 3 6 3Z"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M14 3V8H19" stroke={iconColor} strokeWidth="1.8" />
          <path
            d="M8 12H12M8 15H15M8 18H13"
            stroke={iconColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="8" cy="8.5" r="1.5" fill={iconColor} />
        </svg>
      );

    case "lock":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect
            x="5"
            y="10"
            width="14"
            height="11"
            rx="2.5"
            stroke={iconColor}
            strokeWidth="2"
          />
          <path
            d="M8 10V7C8 4.79 9.79 3 12 3C14.21 3 16 7 16 7V10"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="15" r="1.5" fill={iconColor} />
          <path
            d="M12 16.5V18.5"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "user-check":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="9" cy="8" r="4" stroke={iconColor} strokeWidth="2" />
          <path
            d="M3 20C3 16.69 5.69 14 9 14C10.5 14 11.87 14.55 12.92 15.46"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="17.5" cy="16.5" r="3.5" fill={iconColor} />
          <path
            d="M16 16.5L17.2 17.7L19.2 15.5"
            stroke={isActive ? theme.color : "#ffffff"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "network":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect
            x="9"
            y="3"
            width="6"
            height="5"
            rx="1.5"
            stroke={iconColor}
            strokeWidth="2"
          />
          <rect
            x="2.5"
            y="16"
            width="6"
            height="5"
            rx="1.5"
            stroke={iconColor}
            strokeWidth="2"
          />
          <rect
            x="15.5"
            y="16"
            width="6"
            height="5"
            rx="1.5"
            stroke={iconColor}
            strokeWidth="2"
          />
          <path
            d="M12 8V12M5.5 16V12M18.5 16V12M5.5 12H18.5"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "database":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <ellipse
            cx="12"
            cy="6"
            rx="8"
            ry="3"
            stroke={iconColor}
            strokeWidth="2"
          />
          <path
            d="M4 6V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V6"
            stroke={iconColor}
            strokeWidth="2"
          />
          <path
            d="M4 12V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V12"
            stroke={iconColor}
            strokeWidth="2"
          />
        </svg>
      );

    case "server":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect
            x="3"
            y="3"
            width="18"
            height="7"
            rx="2"
            stroke={iconColor}
            strokeWidth="2"
          />
          <rect
            x="3"
            y="14"
            width="18"
            height="7"
            rx="2"
            stroke={iconColor}
            strokeWidth="2"
          />
          <circle cx="7" cy="6.5" r="1.2" fill={iconColor} />
          <circle cx="10" cy="6.5" r="1.2" fill={iconColor} />
          <circle cx="7" cy="17.5" r="1.2" fill={iconColor} />
          <circle cx="10" cy="17.5" r="1.2" fill={iconColor} />
          <line
            x1="15"
            y1="6.5"
            x2="18"
            y2="6.5"
            stroke={iconColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <line
            x1="15"
            y1="17.5"
            x2="18"
            y2="17.5"
            stroke={iconColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "laptop":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect
            x="4"
            y="4"
            width="16"
            height="11"
            rx="2"
            stroke={iconColor}
            strokeWidth="2"
          />
          <path
            d="M2 18H22C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18Z"
            fill={iconColor}
          />
          <line
            x1="10"
            y1="17.5"
            x2="14"
            y2="17.5"
            stroke={isActive ? theme.color : "#ffffff"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "mobile":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect
            x="6"
            y="2.5"
            width="12"
            height="19"
            rx="3"
            stroke={iconColor}
            strokeWidth="2"
          />
          <line
            x1="10.5"
            y1="5.5"
            x2="13.5"
            y2="5.5"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="18" r="1" fill={iconColor} />
        </svg>
      );

    case "backup":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M21 12A9 9 0 0 0 6 5.3L4 7"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <polyline
            points="4 3 4 7 8 7"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 12A9 9 0 0 0 18 18.7L20 17"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <polyline
            points="20 21 20 17 16 17"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "search":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle
            cx="10.5"
            cy="10.5"
            r="6.5"
            stroke={iconColor}
            strokeWidth="2.2"
          />
          <path
            d="M15.5 15.5L20.5 20.5"
            stroke={iconColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="10.5" cy="10.5" r="3" fill={iconColor} fillOpacity={isActive ? "0.3" : "0.2"} />
        </svg>
      );

    case "workflow":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="6" cy="6" r="3" stroke={iconColor} strokeWidth="2" />
          <circle cx="18" cy="18" r="3" stroke={iconColor} strokeWidth="2" />
          <circle cx="18" cy="6" r="3" stroke={iconColor} strokeWidth="2" />
          <path
            d="M6 9V15C6 16.66 7.34 18 9 18H15"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M9 6H15"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "scale":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 3V21M7 21H17" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M4 7L12 5L20 7" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M4 7L2 12C2 13.5 3 14 4 14C5 14 6 13.5 6 12L4 7Z" stroke={iconColor} strokeWidth="1.8" />
          <path d="M20 7L18 12C18 13.5 19 14 20 14C21 14 22 13.5 22 12L20 7Z" stroke={iconColor} strokeWidth="1.8" />
        </svg>
      );

    case "badge":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="9" r="6" stroke={iconColor} strokeWidth="2" />
          <path
            d="M8.5 14.5L7 21L12 18.5L17 21L15.5 14.5"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6.5L13 8.5L15 9L13.5 10.5L14 12.5L12 11.5L10 12.5L10.5 10.5L9 9L11 8.5L12 6.5Z"
            fill={iconColor}
          />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="8" stroke={iconColor} strokeWidth="2" />
        </svg>
      );
  }
}

export default function ITAuditComplianceServices({
  initialServiceId = "item-1-it-audit-scope-and-objectives",
  onClose,
  onHome,
} = {}) {
  const initialIndex = SERVICES.findIndex((s) => s.id === initialServiceId);
  const [activeServiceIndex, setActiveServiceIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isEntering, setIsEntering] = useState(true);

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

  const selectedService = SERVICES[activeServiceIndex] || SERVICES[0];

  const boardRef = useRef(null);

  // Marquee Horizontal Scroll & Interactive Drag/Wheel State
  const marqueeRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const hasMovedRef = useRef(false);
  const isInteractingRef = useRef(false);
  const interactionTimerRef = useRef(null);
  const scrollDebounceRef = useRef(null);

  // Duplicate services list (3 sets for 62 items = 186 cards for infinite loop)
  const marqueeServices = [
    ...SERVICES,
    ...SERVICES,
    ...SERVICES,
  ];

  // Smoothly center any service in the marquee viewport
  const scrollToService = (serviceIndex, smooth = true) => {
    const container = marqueeRef.current;
    if (!container) return;

    const targetIdx = serviceIndex + SERVICES.length;
    const targetBtn = container.querySelector(
      `[data-marquee-index="${targetIdx}"]`
    );

    if (targetBtn) {
      const containerWidth = container.clientWidth;
      const btnLeft = targetBtn.offsetLeft;
      const btnWidth = targetBtn.offsetWidth;
      const targetScroll = Math.round(
        btnLeft - containerWidth / 2 + btnWidth / 2
      );

      container.scrollTo({
        left: targetScroll,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  };

  // Detect which icon is currently closest to the marquee center
  const detectCenterService = () => {
    const container = marqueeRef.current;
    if (!container) return;

    const viewportCenter = container.scrollLeft + container.clientWidth / 2;
    const buttons = container.querySelectorAll("[data-marquee-index]");
    let closestIndex = null;
    let minDiff = Infinity;

    buttons.forEach((btn) => {
      const btnCenter = btn.offsetLeft + btn.offsetWidth / 2;
      const diff = Math.abs(btnCenter - viewportCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = Number(btn.getAttribute("data-service-index"));
      }
    });

    if (closestIndex !== null && closestIndex !== activeServiceIndex) {
      setActiveServiceIndex(closestIndex);
    }
  };

  // Center initial active service on mount and handle reload entrance animation
  useEffect(() => {
    const initTimer = setTimeout(() => {
      scrollToService(activeServiceIndex, false);
    }, 100);

    const entranceTimer = setTimeout(() => {
      setIsEntering(false);
    }, 1350);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(entranceTimer);
    };
  }, []);

  // Automatic synchronized advance: moves next icon to the center and updates content below
  useEffect(() => {
    if (isCardHovered) return;

    const timer = setTimeout(() => {
      if (isInteractingRef.current) return;
      setActiveServiceIndex((prev) => {
        const nextIndex = (prev + 1) % SERVICES.length;
        scrollToService(nextIndex, true);
        return nextIndex;
      });
    }, 3800);

    return () => clearTimeout(timer);
  }, [activeServiceIndex, isCardHovered]);

  // Arrow button handlers (Previous / Next)
  const handlePrev = () => {
    const prevIndex =
      (activeServiceIndex - 1 + SERVICES.length) % SERVICES.length;
    setActiveServiceIndex(prevIndex);
    scrollToService(prevIndex, true);
    isInteractingRef.current = true;
    clearTimeout(interactionTimerRef.current);
    interactionTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 3000);
  };

  const handleNext = () => {
    const nextIndex = (activeServiceIndex + 1) % SERVICES.length;
    setActiveServiceIndex(nextIndex);
    scrollToService(nextIndex, true);
    isInteractingRef.current = true;
    clearTimeout(interactionTimerRef.current);
    interactionTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 3000);
  };

  // Window-level mouse move and mouse up listeners for smooth click-and-drag scrolling
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!isDraggingRef.current || !marqueeRef.current) return;
      const dx = e.pageX - startXRef.current;
      if (Math.abs(dx) > 3) {
        hasMovedRef.current = true;
      }
      marqueeRef.current.scrollLeft = scrollStartRef.current - dx;
      detectCenterService();
    };

    const handleGlobalMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;

      detectCenterService();

      setTimeout(() => {
        hasMovedRef.current = false;
      }, 80);

      clearTimeout(interactionTimerRef.current);
      interactionTimerRef.current = setTimeout(() => {
        isInteractingRef.current = false;
      }, 2500);
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [activeServiceIndex]);

  // Non-passive wheel handler: scroll horizontally when wheel is rolled over the icon bar
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 1) return;

      e.preventDefault();
      isInteractingRef.current = true;
      el.scrollLeft += delta;

      clearTimeout(scrollDebounceRef.current);
      scrollDebounceRef.current = setTimeout(() => {
        detectCenterService();
      }, 60);

      clearTimeout(interactionTimerRef.current);
      interactionTimerRef.current = setTimeout(() => {
        isInteractingRef.current = false;
      }, 2500);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, [activeServiceIndex]);

  // Mouse Down handler on the marquee container
  const handleMarqueeMouseDown = (e) => {
    if (e.button !== 0) return;
    if (!marqueeRef.current) return;

    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX;
    scrollStartRef.current = marqueeRef.current.scrollLeft;
    isInteractingRef.current = true;
    clearTimeout(interactionTimerRef.current);
  };

  // Touch Handlers for mobile & tablet swipe support
  const handleTouchStart = () => {
    isInteractingRef.current = true;
    hasMovedRef.current = false;
    clearTimeout(interactionTimerRef.current);
  };

  const handleTouchMove = () => {
    hasMovedRef.current = true;
    detectCenterService();
  };

  const handleTouchEnd = () => {
    detectCenterService();
    clearTimeout(interactionTimerRef.current);
    interactionTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 2500);
  };

  const handleMarqueeScroll = () => {
    if (isInteractingRef.current) {
      clearTimeout(scrollDebounceRef.current);
      scrollDebounceRef.current = setTimeout(() => {
        detectCenterService();
      }, 60);
    }
  };

  return (
    <>
      {/* High-Performance Custom Animations & Keyframes */}
      <style>{`
        @keyframes badgeFlip3D {
          0% {
            transform: perspective(600px) rotateY(0deg) scale(0.85);
            opacity: 0.6;
          }
          50% {
            transform: perspective(600px) rotateY(180deg) scale(1.15);
          }
          100% {
            transform: perspective(600px) rotateY(360deg) scale(1);
            opacity: 1;
          }
        }
        @keyframes slideFadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .anim-badge-3d {
          animation: badgeFlip3D 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .anim-slide-up {
          animation: slideFadeUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        /* ========================================================================= */
        /* APPLE-STYLE 3D ELEVATE & METALLIC SHIMMER ENTRANCE                        */
        /* ========================================================================= */
        @keyframes appleElevateEntrance {
          0% {
            opacity: 0;
            transform: perspective(1400px) translateY(38px) scale3d(0.965, 0.965, 0.965) rotateX(4.5deg);
          }
          55% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: perspective(1400px) translateY(0px) scale3d(1, 1, 1) rotateX(0deg);
          }
        }
        @keyframes shadowElevateEntrance {
          0% {
            opacity: 0;
            transform: scale(0.72);
          }
          60% {
            opacity: 0.28;
          }
          100% {
            opacity: 0.35;
            transform: scale(1);
          }
        }
        /* Specular light sheen sweeping across metallic clamp & acrylic board */
        @keyframes luxuryGlareSweep {
          0% {
            opacity: 0;
            transform: translateX(-150%) skewX(-22deg);
          }
          15% {
            opacity: 0.95;
          }
          70% {
            opacity: 0.6;
            transform: translateX(130%) skewX(-22deg);
          }
          100% {
            opacity: 0;
            transform: translateX(190%) skewX(-22deg);
          }
        }
        @keyframes heroFadeDown {
          0% {
            opacity: 0;
            transform: translateY(-16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes contentStaggerIn {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .anim-apple-elevate {
          animation: appleElevateEntrance 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }
        .anim-shadow-elevate {
          animation: shadowElevateEntrance 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .anim-luxury-glare-sweep {
          animation: luxuryGlareSweep 1.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }
        .anim-hero-fade {
          animation: heroFadeDown 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .anim-stagger-1 {
          animation: contentStaggerIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s backwards;
        }
        .anim-stagger-2 {
          animation: contentStaggerIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.28s backwards;
        }
        /* Continuous 3D Floating Class */
        .anim-ambient-3d-float {
          animation: ambient3DFloat 6s ease-in-out infinite;
          will-change: transform;
        }
        /* Ground Shadow Floating Sync Class */
        .anim-ambient-shadow {
          animation: ambientShadowPulse 6s ease-in-out infinite;
        }
        /* Completely hide horizontal scrollbar across all browsers while retaining horizontal scroll */
        .marquee-scrollbar {
          -ms-overflow-style: none !important; /* IE and Edge */
          scrollbar-width: none !important; /* Firefox */
          -webkit-overflow-scrolling: touch;
        }
        .marquee-scrollbar::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          -webkit-appearance: none !important;
        }
        .marquee-scrollbar::-webkit-scrollbar-button {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .marquee-scrollbar::-webkit-scrollbar-track {
          display: none !important;
          background: transparent !important;
        }
        .marquee-scrollbar::-webkit-scrollbar-thumb {
          display: none !important;
          background: transparent !important;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* MAIN APPLICATION VIEW: Header + 3D Interactive Clipboard                 */}
      {/* ========================================================================= */}
      <div
        className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-gradient-to-br from-[#ebf5fe] via-[#f4f9ff] to-[#e2effc] font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 py-6 sm:py-10 md:py-12 px-3 sm:px-6 flex flex-col justify-start items-center"
        style={{ perspective: "1500px" }}
      >
        {/* Top Header Navigation buttons */}
        <div className="w-full max-w-7xl mx-auto pb-4 flex items-center justify-start gap-3 z-40">
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
        {/* Soft Ambient Studio Lighting Blobs (Strictly clipped to prevent horizontal scroll) */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-blue-300/30 blur-[140px]" />
          <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full bg-sky-200/40 blur-[150px]" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-100/60 blur-[110px]" />
        </div>

        {/* Decorative ambient subtle background arcs */}
        <svg
          className="pointer-events-none fixed inset-0 w-full h-full stroke-blue-200/40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 80 500 C 20 360, 50 200, 180 140 C 280 90, 390 160, 460 230"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <circle
            cx="140"
            cy="440"
            r="80"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="stroke-blue-200/50"
          />
          <circle cx="215" cy="480" r="4" fill="#60a5fa" fillOpacity="0.4" />
        </svg>

        {/* ========================================================================= */}
        {/* PAGE HERO HEADER: IT Audit & Compliance Services                         */}
        {/* ========================================================================= */}
        <header className="relative z-10 w-full max-w-4xl mx-auto text-center px-4 sm:px-6 mb-8 sm:mb-11 md:mb-14 flex flex-col items-center anim-hero-fade">
          {/* Page Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black tracking-tight text-slate-900 leading-[1.18] sm:leading-[1.14]">
            IT Audit &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062ff] via-[#0070ff] to-[#00a6ff]">
              Compliance
            </span>
          </h1>

          {/* Page Description - Enlarged and refined typography */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-[19px] leading-relaxed md:leading-[1.78] text-slate-600 font-normal max-w-2xl sm:max-w-3xl md:max-w-[850px] text-balance">
            IBCS IT Audit &amp; Compliance focuses on reviewing technology controls, system configurations, access practices, documentation, and relevant operational processes. Our approach aims to help organisations identify gaps, assess technology-related risks, and improve alignment with applicable policies, standards, and regulatory requirements.
          </p>
        </header>

        {/* ========================================================================= */}
        {/* HERO 3D REALISTIC CLIPBOARD (Contains Top Marquee + Full Data Below)     */}
        {/* ========================================================================= */}
        <div
          ref={boardRef}
          className={`relative z-10 w-full max-w-[440px] sm:max-w-[500px] md:max-w-[530px] shrink-0 my-auto ${
            isEntering ? "anim-apple-elevate" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Luxury Metallic Light Sheen Glare Sweep on Reload */}
          {isEntering && (
            <div
              className="pointer-events-none absolute inset-0 rounded-[3rem] z-50 overflow-hidden"
              style={{ transform: "translateZ(46px)" }}
            >
              <div
                className="anim-luxury-glare-sweep absolute inset-y-0 w-3/5"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 15%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.03) 85%, transparent 100%)",
                }}
              />
            </div>
          )}

          {/* Top Clipboard Arch Tab */}
          <div
            className="relative mx-auto w-48 sm:w-52 h-11 sm:h-12 rounded-t-[2.2rem] z-10 flex flex-col justify-start items-center pt-2 bg-gradient-to-t from-[#0048aa] to-[#0062db] border-t-2 border-l border-r border-sky-300/50"
            style={{
              boxShadow:
                "0 -2px 8px rgba(0, 40, 120, 0.25), inset 0 2px 2px rgba(255, 255, 255, 0.4)",
              transform: "translateZ(10px)",
            }}
          >
            {/* Hanging cutout ring with metallic bezel */}
            <div className="w-11 sm:w-12 h-3.5 sm:h-4 rounded-full bg-[#001c45] border border-blue-400/40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]" />
          </div>

          {/* 3D Metallic Glossy Blue Spring Clamp Clip */}
          <div
            className="absolute top-2.5 sm:top-3 left-1/2 z-30 w-44 sm:w-52 pointer-events-none drop-shadow-[0_14px_25px_rgba(0,25,80,0.6)]"
            style={{
              transform: "translateX(-50%) translateZ(38px)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Upper clip bracket with glossy metallic reflection */}
            <div
              className="relative mx-auto w-32 sm:w-36 h-9 sm:h-10 rounded-t-2xl border-t border-sky-100/90 flex items-center justify-center shadow-inner overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #57a6ff 0%, #2075f0 35%, #0d54cc 70%, #063c9c 100%)",
                boxShadow: "inset 0 1px 2px rgba(255,255,255,0.7)",
              }}
            >
              {/* Chrome Eyelet / Lens Ring */}
              <div className="w-7 sm:w-7.5 h-7 sm:h-7.5 rounded-full bg-gradient-to-b from-[#ffffff] via-[#cbd5e1] to-[#64748b] p-[2.5px] shadow-[0_4px_8px_rgba(0,0,0,0.35)]">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#031d45] to-[#011029] border border-slate-500/40 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30 blur-[0.5px]" />
                </div>
              </div>

              {/* Specular White Gloss Glint along top ridge */}
              <div className="absolute top-0.5 inset-x-3 h-[2px] bg-white/80 rounded-full blur-[0.3px]" />
            </div>

            {/* Horizontal 3D Spring Clamp Cylinder Bar with Chrome Rivets */}
            <div
              className="relative -mt-1 w-full h-8 sm:h-8.5 rounded-xl border-t border-blue-200/90 flex items-center justify-between px-4 sm:px-5"
              style={{
                background:
                  "linear-gradient(180deg, #4b9aff 0%, #1a6be3 40%, #0847b8 80%, #042e82 100%)",
                boxShadow:
                  "0 6px 14px rgba(0, 20, 65, 0.65), inset 0 2px 2px rgba(255, 255, 255, 0.6), inset 0 -2px 3px rgba(0, 0, 0, 0.35)",
              }}
            >
              {/* Left Chrome Rivet Cap */}
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-white via-[#e2e8f0] to-[#64748b] shadow-[0_1px_3px_rgba(0,0,0,0.5)] border border-slate-400" />

              {/* Clamp Grip Groove Line */}
              <div className="h-1 flex-1 mx-3 bg-[#042a6b] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] opacity-90" />

              {/* Right Chrome Rivet Cap */}
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-white via-[#e2e8f0] to-[#64748b] shadow-[0_1px_3px_rgba(0,0,0,0.5)] border border-slate-400" />

              {/* Top Specular Reflection Line */}
              <div className="absolute top-1 inset-x-2 h-[1.5px] bg-white/60 rounded-full" />
            </div>

            {/* Soft Ambient Cast Shadow onto paper */}
            <div className="w-full h-4 bg-gradient-to-b from-black/40 via-black/15 to-transparent blur-[3px]" />
          </div>

          {/* 3D Extruded Acrylic Blue Board Slab */}
          <div
            className="relative -mt-4 rounded-[3rem] p-4 sm:p-5"
            style={{
              transformStyle: "preserve-3d",
              background:
                "linear-gradient(155deg, #0066eb 0%, #004dc2 35%, #003694 70%, #002263 100%)",
              borderTop: "3px solid rgba(147, 197, 253, 0.6)",
              borderLeft: "2px solid rgba(147, 197, 253, 0.35)",
              borderRight: "4px solid #001a4f",
              borderBottom: "8px solid #00133b",
              boxShadow: `
                0 10px 0 #001a4f,
                0 12px 1px #001033,
                0 24px 40px -5px rgba(0, 20, 65, 0.55),
                0 42px 75px -10px rgba(0, 15, 50, 0.45),
                inset 0 3px 3px rgba(255, 255, 255, 0.45),
                inset 3px 0 3px rgba(255, 255, 255, 0.25),
                inset -3px -3px 6px rgba(0, 0, 0, 0.4)
              `,
            }}
          >
            {/* White Paper Page with Recessed 3D Inset Shadow */}
            <div
              className="relative rounded-[2.3rem] bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#f8faff] px-4 sm:px-6 pt-10 sm:pt-12 pb-6 border border-slate-100"
              style={{
                transform: "translateZ(18px)",
                transformStyle: "preserve-3d",
                boxShadow: `
                  inset 0 3px 6px rgba(0, 25, 70, 0.1),
                  inset 0 -1px 3px rgba(0, 0, 0, 0.04),
                  0 4px 16px rgba(0, 20, 60, 0.06)
                `,
              }}
            >
              {/* ========================================================================= */}
              {/* UPAR: HORIZONTAL SCROLLABLE ICON MARQUEE WITH MANUAL DRAG / WHEEL / ARROWS*/}
              {/* ========================================================================= */}
              <div
                className="relative w-full max-w-full my-3 sm:my-4 group/carousel anim-stagger-1"
                style={{ transform: "translateZ(14px)" }}
              >
                {/* Left Edge Gradient Fade */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-7 sm:w-9 bg-gradient-to-r from-white via-white/80 to-transparent z-10 rounded-l-2xl" />

                {/* Right Edge Gradient Fade */}
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-7 sm:w-9 bg-gradient-to-l from-white via-white/80 to-transparent z-10 rounded-r-2xl" />

                {/* Left Smooth Scroll Arrow Button */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous service"
                  className="absolute -left-1 sm:-left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all opacity-80 group-hover/carousel:opacity-100 hover:scale-110 active:scale-90 cursor-pointer"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Right Smooth Scroll Arrow Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next service"
                  className="absolute -right-1 sm:-right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all opacity-80 group-hover/carousel:opacity-100 hover:scale-110 active:scale-90 cursor-pointer"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* The Horizontally Scrollable Marquee Container */}
                <div
                  ref={marqueeRef}
                  onMouseDown={handleMarqueeMouseDown}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  onScroll={handleMarqueeScroll}
                  className="marquee-scrollbar no-scrollbar flex items-center gap-3 sm:gap-4 overflow-x-auto overflow-y-hidden py-3 px-3 select-none cursor-grab active:cursor-grabbing"
                  style={{
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {marqueeServices.map((service, index) => {
                    const serviceIndex = index % SERVICES.length;
                    const isActive = serviceIndex === activeServiceIndex;
                    const theme =
                      ICON_THEMES[service.iconType] || ICON_THEMES.audit;

                    return (
                      <button
                        key={`${service.id}-${index}`}
                        data-marquee-index={index}
                        data-service-index={serviceIndex}
                        data-service-id={service.id}
                        type="button"
                        onClick={() => {
                          if (hasMovedRef.current) return;
                          setActiveServiceIndex(serviceIndex);
                          scrollToService(serviceIndex, true);
                          isInteractingRef.current = true;
                          clearTimeout(interactionTimerRef.current);
                          interactionTimerRef.current = setTimeout(() => {
                            isInteractingRef.current = false;
                          }, 3000);
                        }}
                        className={`group flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-2xl shrink-0 cursor-pointer transition-all duration-300 select-none ${
                          isActive
                            ? "shadow-sm scale-110 -translate-y-0.5"
                            : "hover:bg-slate-50/80 border border-transparent hover:border-slate-100 opacity-70 hover:opacity-100"
                        }`}
                        style={
                          isActive
                            ? {
                                backgroundColor: `${theme.color}14`,
                                border: `1.5px solid ${theme.color}45`,
                              }
                            : {}
                        }
                      >
                        {/* 1. Icon on Top */}
                        <div
                          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110 pointer-events-none border ${
                            isActive
                              ? "text-white border-t border-white/40"
                              : "shadow-xs group-hover:shadow-md"
                          }`}
                          style={
                            isActive
                              ? {
                                  background: theme.activeGradient,
                                  boxShadow: theme.activeShadow,
                                  borderColor: "rgba(255,255,255,0.4)",
                                }
                              : {
                                  backgroundColor: theme.bgLight,
                                  borderColor: theme.borderLight,
                                }
                          }
                        >
                          <ServiceIcon
                            type={service.iconType}
                            isActive={isActive}
                            className="w-5.5 h-5.5 sm:w-6 sm:h-6"
                          />
                        </div>

                        {/* 2. Name UNDER the Icon */}
                        <span
                          className={`mt-1.5 text-[11px] sm:text-xs tracking-tight text-center transition-colors duration-200 pointer-events-none ${
                            isActive
                              ? "font-extrabold"
                              : "font-bold text-slate-700 group-hover:text-slate-900"
                          }`}
                          style={isActive ? { color: theme.color } : {}}
                        >
                          {service.shortName}
                        </span>

                        {/* Active Indicator Dot */}
                        {isActive && (
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-0.5"
                            style={{ backgroundColor: theme.color }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Clean Seamless Spacing between Top Marquee and Active Card */}
              <div className="my-2 sm:my-3" />

              {/* ========================================================================= */}
              {/* NICHE: ACTIVE SERVICE FULL DATA (Heading & Clean Aligned Content)         */}
              {/* ========================================================================= */}
              {(() => {
                const activeTheme =
                  ICON_THEMES[selectedService.iconType] || ICON_THEMES.audit;

                return (
                  <div
                    key={selectedService.id}
                    onMouseEnter={() => setIsCardHovered(true)}
                    onMouseLeave={() => setIsCardHovered(false)}
                    className="anim-slide-up anim-stagger-2 rounded-3xl bg-white/95 p-5 sm:p-7 border border-slate-200/80 transition-all duration-300"
                    style={{
                      transform: "translateZ(16px)",
                      transformStyle: "preserve-3d",
                      boxShadow: "0 6px 24px -4px rgba(0, 20, 60, 0.06)",
                    }}
                  >
                    {/* Header: Centered Icon Badge + Centered Title */}
                    <div className="flex flex-col items-center justify-center text-center gap-3 w-full">
                      {/* 3D Animated Icon Badge */}
                      <div
                        className="anim-badge-3d relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/50 shadow-sm"
                        style={{
                          background: activeTheme.badgeGradient,
                          boxShadow: activeTheme.badgeShadow,
                        }}
                      >
                        {/* Top specular reflection curve */}
                        <div className="absolute inset-x-1.5 top-1 h-3 bg-white/35 rounded-t-xl blur-[0.4px]" />
                        <ServiceIcon
                          type={selectedService.iconType}
                          isActive={true}
                          className="w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 drop-shadow-md"
                        />
                      </div>

                      {/* Title */}
                      <div className="text-center w-full">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-900 leading-tight text-center">
                          {selectedService.titlePrimary}
                        </h2>
                        <h3
                          className="text-lg sm:text-xl md:text-2xl font-black tracking-tight leading-tight text-center"
                          style={{ color: activeTheme.color }}
                        >
                          {selectedService.titleSecondary}
                        </h3>
                      </div>
                    </div>

                    {/* Clean Aligned Content Description (Centered) */}
                    <div className="mt-4 sm:mt-5 pt-1 text-center w-full">
                      <p className="text-[14px] sm:text-[15px] md:text-[15.5px] leading-relaxed sm:leading-7.5 text-slate-700 font-normal tracking-[-0.01em] text-center max-w-xl mx-auto">
                        {selectedService.description}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Dynamic Ambient Ground Shadow underneath 3D Clipboard */}
        <div
          className={`mx-auto w-64 sm:w-80 h-5 rounded-full bg-blue-950/25 blur-xl pointer-events-none mt-2 transition-all duration-700 ${
            isEntering ? "anim-shadow-elevate" : "opacity-35"
          }`}
        />
      </div>
    </>
  );
}
