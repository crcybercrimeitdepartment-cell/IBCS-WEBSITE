import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Scale,
  ClipboardCheck,
  Globe,
  Megaphone,
  Newspaper,
  UserCheck,
  FileUp,
  Users,
  LayoutGrid,
  AppWindow,
  BookOpen,
  TrendingUp,
  Rocket,
  FileCheck,
  GitMerge,
  FileText,
  Calendar,
  ShieldCheck,
  GraduationCap,
  BarChart3,
  HeartHandshake,
  HandHeart,
  Trophy,
  Sparkles,
  Workflow,
  CalendarCheck,
  DoorOpen,
  FileBadge,
  Building2,
  FileSignature,
  BadgeCheck,
  BellRing,
  Ticket,
  Award,
  CreditCard,
  PenTool,
  Mail,
  Smartphone,
  Share2,
  Code2,
  Boxes,
  MailCheck,
  Wrench,
  Medal,
  Video,
  Handshake,
  Microscope,
  Heart,
  Copy,
  ShoppingCart,
  PlaySquare,
  LifeBuoy,
  RotateCw,
  MessageSquare,
  AlertCircle,
  Flag,
  Coins,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  Home,
  Clock,
  ChevronRight,
  X,
  Download,
  ExternalLink,
  CheckCircle2,
  Info,
  Check
} from 'lucide-react';

import {
  beamGradients,
  careerCardsData,
  currentVacanciesData,
  recruitmentCardsData,
  verificationCardsData,
  portalOptionsData
} from './CareerPageData';

/* ==========================================================================
   ICON RESOLVER MAP
   ========================================================================== */
const iconRegistry = {
  Briefcase,
  Scale,
  ClipboardCheck,
  Globe,
  Megaphone,
  Newspaper,
  UserCheck,
  FileUp,
  Users,
  LayoutGrid,
  AppWindow,
  BookOpen,
  TrendingUp,
  Rocket,
  FileCheck,
  GitMerge,
  FileText,
  Calendar,
  ShieldCheck,
  GraduationCap,
  BarChart3,
  HeartHandshake,
  HandHeart,
  Trophy,
  Sparkles,
  Workflow,
  CalendarCheck,
  DoorOpen,
  FileBadge,
  Building2,
  FileSignature,
  BadgeCheck,
  BellRing,
  Ticket,
  Award,
  CreditCard,
  PenTool,
  Mail,
  Smartphone,
  Share2,
  Code2,
  Boxes,
  MailCheck,
  Wrench,
  Medal,
  Video,
  Handshake,
  Microscope,
  Heart,
  Copy,
  ShoppingCart,
  PlaySquare,
  LifeBuoy,
  RotateCw,
  MessageSquare,
  AlertCircle,
  Flag,
  Coins,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  Home,
  ChevronRight,
  X,
  Download,
  ExternalLink,
  CheckCircle2,
  Info,
  Check,
  Clock
};

export const getIcon = (name, defaultIcon = Briefcase) => {
  return iconRegistry[name] || defaultIcon;
};

/* ==========================================================================
   SUBCOMPONENT 1: STAT CARD (GLOWING ROTATING BORDER)
   ========================================================================== */
export function StatCard({
  icon,
  iconName,
  iconColor = "text-rose-600",
  title = "Card Name",
  description,
  value,
  blobColor = "fill-rose-300",
  className = "",
  onClick,
  ...props
}) {
  const beamClass = beamGradients[blobColor] || beamGradients['fill-rose-300'];
  const ResolvedIcon = iconName ? getIcon(iconName) : null;

  return (
    <div
      onClick={onClick}
      className={`group relative flex h-36 sm:h-40 w-full max-w-[290px] xl:max-w-[310px] p-[2px] overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-200/80 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer select-none ${className}`}
      {...props}
    >
      {/* Rotating border light effect on hover */}
      <div
        className={`absolute inset-[-150%] ${beamClass} animate-border-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Inner Card Container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-3 sm:p-4 rounded-[calc(1rem-2px)] sm:rounded-[calc(1.5rem-2px)] bg-neutral-50/95 overflow-hidden">
        {/* Glowing Color Aura containing the Icon */}
        <div className="relative mb-1.5 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute inset-0 h-full w-full scale-135 duration-500 ${blobColor} blur-md transition-all group-hover:scale-150 group-hover:blur-sm`}
          >
            <path
              transform="translate(100 100)"
              d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
            />
          </svg>

          <div className="relative z-10 flex items-center justify-center transition-all duration-700 ease-in-out group-hover:rotate-[360deg] group-hover:scale-115">
            {icon ? icon : ResolvedIcon ? <ResolvedIcon className={`w-9 h-9 ${iconColor} stroke-[2.2]`} /> : null}
          </div>
        </div>

        {value && (
          <span className="text-xl sm:text-2xl font-extrabold text-neutral-800 tracking-tight mb-0.5">
            {value}
          </span>
        )}

        <h3 className="text-[14px] sm:text-[15px] font-bold text-neutral-800 leading-tight tracking-tight px-1 group-hover:text-neutral-900 transition-colors text-center">
          {title}
        </h3>

        {description && (
          <p className="mt-0.5 text-[10.5px] sm:text-[11.5px] text-neutral-500 font-medium leading-normal px-1 line-clamp-2 text-center">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   SUBCOMPONENT 2: DOCUMENT VERIFICATION CARD
   ========================================================================== */
export function DocumentVerificationCard({
  step = "01",
  title = "VERIFICATION",
  description = "",
  themeGradient = "from-[#22d68f] to-[#0cb675]",
  badgeGradient = "from-[#20cb88] to-[#11b876]",
  circleBg = "bg-[#00b074]",
  circleShadow = "shadow-[0_8px_20px_rgba(0,176,116,0.34)]",
  outerShadow = "shadow-[0_16px_36px_rgba(16,185,129,0.28)]",
  iconName = "GraduationCap",
  className = "",
  ...props
}) {
  const IconComponent = getIcon(iconName, GraduationCap);

  return (
    <div
      className={`group relative w-[275px] sm:w-[295px] xl:w-[310px] max-w-full h-[340px] sm:h-[360px] select-none cursor-pointer transition-transform duration-500 hover:-translate-y-2.5 ${className}`}
      {...props}
    >
      {/* 1. Colored Backplate (Outer Layer) */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${themeGradient} rounded-[40px] ${outerShadow} transition-shadow duration-500 group-hover:shadow-2xl`}
      />

      {/* 2. White Foreground Card with Asymmetric Rounded Corners */}
      <div
        className="absolute top-[26px] left-[20px] right-0 bottom-0 bg-white rounded-tl-[46px] rounded-bl-[40px] rounded-br-[40px] rounded-tr-[24px] shadow-[-5px_10px_22px_rgba(0,0,0,0.08)] flex flex-col items-center justify-between p-5 pt-8 pb-5 overflow-hidden z-10"
      >
        {/* Top-Right STEP Capsule Badge */}
        <div
          className={`absolute top-0 right-0 bg-gradient-to-r ${badgeGradient} text-white pl-6 pr-4 py-2.5 rounded-l-full shadow-[0_5px_12px_rgba(0,0,0,0.11)] flex items-center gap-2.5 z-20`}
        >
          <div className="flex flex-col items-center justify-center text-[7.5px] sm:text-[8px] font-black tracking-widest leading-[1.05] opacity-95">
            <span>S</span>
            <span>T</span>
            <span>E</span>
            <span>P</span>
          </div>
          <span className="text-2xl sm:text-[27px] font-black tracking-tight leading-none">
            {step}
          </span>
        </div>

        {/* Center Content: Title and Uppercase Description */}
        <div className="flex flex-col items-center justify-center w-full mt-9 sm:mt-10 px-2 text-center">
          <h3 className="text-[13.5px] sm:text-[14.5px] font-black tracking-[0.07em] text-[#475569] uppercase font-sans mb-2 line-clamp-2 leading-tight group-hover:text-neutral-900 transition-colors">
            {title}
          </h3>
          <p className="text-[9.5px] sm:text-[10px] font-bold text-[#94a3b8] tracking-wider leading-[1.55] uppercase text-center max-w-[225px] line-clamp-3">
            {description}
          </p>
        </div>

        {/* Bottom Circular Icon Badge */}
        <div
          className={`relative w-13 h-13 sm:w-14 sm:h-14 rounded-full ${circleBg} flex items-center justify-center text-white ${circleShadow} transition-all duration-700 ease-in-out group-hover:scale-110`}
        >
          <div className="flex items-center justify-center transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]">
            <IconComponent className="w-7 h-7 text-white stroke-[2.2]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   SUBCOMPONENT 3: PORTAL OPTION CARD (HEXAGON + FLOW ARROWS)
   ========================================================================== */
function HexagonBadge({ number = "02", gradientId = "hexGrad", fromColor = "#f43f5e", toColor = "#a855f7" }) {
  return (
    <div className="absolute -top-3.5 -left-3.5 z-20 w-20 h-22 filter drop-shadow-[0_8px_16px_rgba(168,85,247,0.35)] transition-transform duration-500 group-hover:scale-105">
      <svg viewBox="0 0 100 115.47" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
          <clipPath id={`${gradientId}-clip`}>
            <polygon points="50,2 96,28.87 96,86.6 50,113.47 4,86.6 4,28.87" />
          </clipPath>
        </defs>

        <polygon
          points="50,2 96,28.87 96,86.6 50,113.47 4,86.6 4,28.87"
          fill={`url(#${gradientId})`}
        />

        <polygon
          points="50,6 92,30.87 92,84.6 50,109.47 8,84.6 8,30.87"
          fill="none"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="2"
        />

        <g clipPath={`url(#${gradientId}-clip)`}>
          <path
            d="M-20,-20 L120,-20 L50,60 L-20,30 Z"
            fill="rgba(255, 255, 255, 0.22)"
          />
        </g>

        <text
          x="50"
          y="68"
          textAnchor="middle"
          fill="white"
          fontSize="36"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-0.03em"
          className="select-none"
        >
          {number}
        </text>
      </svg>
    </div>
  );
}

function SurroundingFlowArrows({ arrowId = "arrowGrad", fromColor = "#f43f5e", toColor = "#a855f7" }) {
  return (
    <svg
      className="absolute -top-8 -left-8 -right-8 -bottom-8 w-[calc(100%+64px)] h-[calc(100%+64px)] pointer-events-none z-0 overflow-visible"
      viewBox="0 0 344 434"
      fill="none"
    >
      <defs>
        <linearGradient id={`${arrowId}-top`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={fromColor} />
          <stop offset="60%" stopColor={toColor} />
          <stop offset="100%" stopColor={toColor} />
        </linearGradient>

        <linearGradient id={`${arrowId}-bot`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={fromColor} />
          <stop offset="40%" stopColor={toColor} />
          <stop offset="100%" stopColor={toColor} />
        </linearGradient>
      </defs>

      <g className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
        <path
          d="M 110 14 L 285 14 A 45 45 0 0 1 330 59 L 330 175"
          pathLength="100"
          stroke={`url(#${arrowId}-top)`}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          className="arrow-path-anim"
        />
        <path
          d="M -9 -7 L 8 0 L -9 7 L -5 0 Z"
          fill={toColor}
          className="arrow-head-top"
        />
      </g>

      <g className="transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1">
        <path
          d="M 14 205 L 14 365 A 55 55 0 0 0 69 420 L 205 420"
          pathLength="100"
          stroke={`url(#${arrowId}-bot)`}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          className="arrow-path-anim"
        />
        <path
          d="M -9 -7 L 8 0 L -9 7 L -5 0 Z"
          fill={toColor}
          className="arrow-head-bot"
        />
      </g>
    </svg>
  );
}

export function PortalOptionCard({
  step = "02",
  title = "OPTIONS",
  description = "",
  iconName = "GraduationCap",
  fromColor = "#f43f5e",
  toColor = "#a855f7",
  className = "",
  style = {},
  onClick,
  ...props
}) {
  const gradientId = `grad-${step}-${fromColor.replace('#', '')}`;
  const IconComponent = getIcon(iconName, GraduationCap);

  return (
    <div
      onClick={onClick}
      style={style}
      className={`group relative w-[250px] sm:w-[265px] xl:w-[285px] h-[355px] sm:h-[370px] select-none cursor-pointer transition-all duration-500 hover:-translate-y-2.5 ${className}`}
      {...props}
    >
      <SurroundingFlowArrows
        arrowId={gradientId}
        fromColor={fromColor}
        toColor={toColor}
      />

      <HexagonBadge
        number={step}
        gradientId={gradientId}
        fromColor={fromColor}
        toColor={toColor}
      />

      <div
        className="relative z-10 w-full h-full bg-gradient-to-b from-white via-white to-[#fafaff] rounded-tr-[42px] rounded-tl-[30px] rounded-br-[30px] rounded-bl-[62px] border border-white shadow-[0_20px_45px_rgba(168,85,247,0.12),0_6px_18px_rgba(0,0,0,0.04)] flex flex-col items-center justify-between p-6 pt-11 pb-7 text-center transition-all duration-500 group-hover:shadow-[0_28px_56px_rgba(168,85,247,0.20),0_10px_28px_rgba(0,0,0,0.06)]"
      >
        <div className="flex flex-col items-center justify-center mt-3">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-neutral-300/80 bg-white shadow-sm flex items-center justify-center text-neutral-500 transition-all duration-700 ease-in-out group-hover:scale-115 group-hover:rotate-[360deg] group-hover:border-neutral-400 group-hover:text-neutral-800">
            <IconComponent className="w-6 h-6 stroke-[1.8]" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full px-2 my-auto">
          <h3 className="text-[13px] sm:text-[14px] font-black tracking-[0.18em] text-[#475569] uppercase font-sans mb-3 group-hover:text-neutral-900 transition-colors">
            {title}
          </h3>
          <p className="text-[9.5px] sm:text-[10px] font-bold text-[#94a3b8] tracking-wider leading-[1.65] uppercase text-center max-w-[215px]">
            {description}
          </p>
        </div>

        <div
          className="w-8 h-1 rounded-full opacity-60 group-hover:w-12 group-hover:opacity-100 transition-all duration-500"
          style={{ backgroundColor: toColor }}
        />
      </div>
    </div>
  );
}

/* ==========================================================================
   SUBCOMPONENT 4: RECRUITMENT CARD (SERPENTINE SVG GUIDE TRACK)
   ========================================================================== */
export function RecruitmentCard({ item, onSelect, index, totalCards = 16 }) {
  const IconComponent = getIcon(item.icon, Briefcase);
  const accent = item.accentColor || "#1e293b";

  const rowIndex = Math.floor(index / 4);
  const colIndex = index % 4;
  const isEvenRow = rowIndex % 2 === 0;
  const isOddRow = rowIndex % 2 === 1;
  const totalRows = Math.ceil(totalCards / 4);
  const isLastRow = rowIndex >= totalRows - 1;

  const isEvenRowCardWithNext = isEvenRow && colIndex < 3 && index + 1 < totalCards;
  const isEvenRowTurnaround = isEvenRow && colIndex === 3 && !isLastRow;
  const isOddRowCardWithNext = isOddRow && colIndex > 0;
  const isOddRowTurnaround = isOddRow && colIndex === 0 && !isLastRow;
  const isTabletLeftCol = index % 2 === 0;
  const hasMobileNextCard = index < totalCards - 1;

  let flowPath = "";
  if (isEvenRow) {
    if (isEvenRowCardWithNext) {
      flowPath = "M 15 180 L 15 40 A 24 24 0 0 1 39 16 L 261 16 A 24 24 0 0 1 285 40 L 285 320 A 24 24 0 0 1 261 344 L 39 344 A 24 24 0 0 1 15 320 L 15 180 L 15 40 A 24 24 0 0 1 39 16 L 261 16 A 24 24 0 0 1 285 40 L 285 180 L 348 180";
    } else if (isEvenRowTurnaround) {
      flowPath = "M 15 180 L 15 40 A 24 24 0 0 1 39 16 L 261 16 A 24 24 0 0 1 285 40 L 285 320 A 24 24 0 0 1 261 344 L 39 344 A 24 24 0 0 1 15 320 L 15 180 L 15 40 A 24 24 0 0 1 39 16 L 261 16 A 24 24 0 0 1 285 40 L 285 320 L 285 415";
    } else {
      flowPath = "M 15 180 L 15 40 A 24 24 0 0 1 39 16 L 261 16 A 24 24 0 0 1 285 40 L 285 320 A 24 24 0 0 1 261 344 L 39 344 A 24 24 0 0 1 15 320 Z";
    }
  } else {
    if (isOddRowCardWithNext) {
      flowPath = "M 285 180 L 285 40 A 24 24 0 0 0 261 16 L 39 16 A 24 24 0 0 0 15 40 L 15 320 A 24 24 0 0 0 39 344 L 261 344 A 24 24 0 0 0 285 320 L 285 180 L 285 40 A 24 24 0 0 0 261 16 L 39 16 A 24 24 0 0 0 15 40 L 15 180 L -48 180";
    } else if (isOddRowTurnaround) {
      flowPath = "M 285 180 L 285 40 A 24 24 0 0 0 261 16 L 39 16 A 24 24 0 0 0 15 40 L 15 320 A 24 24 0 0 0 39 344 L 261 344 A 24 24 0 0 0 285 320 L 285 180 L 285 40 A 24 24 0 0 0 261 16 L 39 16 A 24 24 0 0 0 15 40 L 15 320 L 15 415";
    } else {
      flowPath = "M 285 180 L 285 40 A 24 24 0 0 0 261 16 L 39 16 A 24 24 0 0 0 15 40 L 15 320 A 24 24 0 0 0 39 344 L 261 344 A 24 24 0 0 0 285 320 Z";
    }
  }

  const stepNumber = parseInt(item.id, 10) || (index + 1);
  const entranceDelay = `${(stepNumber - 1) * 70}ms`;

  return (
    <div 
      className="relative flex flex-col animate-card-entrance"
      style={{ animationDelay: entranceDelay }}
    >
      <div
        onClick={() => onSelect(item)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect(item);
          }
        }}
        className="group relative flex flex-col justify-between cursor-pointer focus:outline-none p-2 sm:p-2.5 select-none transition-all duration-300"
      >
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20 transition-transform duration-300 group-hover:scale-[1.01]" 
          viewBox="0 0 300 360" 
          preserveAspectRatio="none"
          fill="none"
        >
          {isEvenRow ? (
            <>
              <polygon 
                points="3,173 15,180 3,187" 
                fill={accent} 
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
              <path 
                d="M 15 180 L 15 40 A 24 24 0 0 1 39 16 L 261 16 A 24 24 0 0 1 285 40 L 285 95" 
                stroke={accent} 
                strokeWidth="3.2" 
                strokeLinecap="round" 
              />
              <path 
                className="animate-dash-flow"
                d="M 285 95 L 285 320 A 24 24 0 0 1 261 344 L 39 344 A 24 24 0 0 1 15 320 L 15 180" 
                stroke={accent} 
                strokeWidth="3.2" 
                strokeDasharray="4 6" 
                strokeLinecap="round" 
              />
              <circle cx="285" cy="180" r="5" fill={accent} />
            </>
          ) : (
            <>
              <polygon 
                points="297,173 285,180 297,187" 
                fill={accent} 
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              <path 
                d="M 285 180 L 285 40 A 24 24 0 0 0 261 16 L 39 16 A 24 24 0 0 0 15 40 L 15 95" 
                stroke={accent} 
                strokeWidth="3.2" 
                strokeLinecap="round" 
              />
              <path 
                className="animate-dash-flow"
                d="M 15 95 L 15 320 A 24 24 0 0 0 39 344 L 261 344 A 24 24 0 0 0 285 320 L 285 180" 
                stroke={accent} 
                strokeWidth="3.2" 
                strokeDasharray="4 6" 
                strokeLinecap="round" 
              />
              <circle cx="15" cy="180" r="5" fill={accent} />
            </>
          )}

          <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <circle r="4.5" fill={accent} opacity="0.75" className="filter drop-shadow-md">
              <animateMotion dur="2.8s" repeatCount="indefinite" path={flowPath} />
            </circle>
            <polygon points="-6,-5 8,0 -6,5" fill={accent} className="filter drop-shadow-md">
              <animateMotion dur="2.8s" repeatCount="indefinite" rotate="auto" path={flowPath} />
            </polygon>
          </g>
        </svg>

        <div className="relative mx-3 my-3 bg-white rounded-[26px] p-6 sm:p-7 flex flex-col items-center justify-between text-center shadow-[0_16px_35px_-8px_rgba(0,0,0,0.08),0_4px_14px_-2px_rgba(0,0,0,0.04)] group-hover:shadow-[0_24px_50px_-10px_rgba(0,0,0,0.16)] group-hover:-translate-y-2 transition-all duration-300 border border-slate-100 min-h-[320px] sm:min-h-[350px]">
          {/* Ribbon */}
          <div className="absolute -top-3.5 right-4 sm:right-5 z-20">
            <div className="relative">
              <div 
                className="px-6 py-2 text-white font-sans tracking-wide uppercase transform -skew-x-[22deg] shadow-md flex items-center justify-center transition-all duration-300 group-hover:-skew-x-[16deg] group-hover:scale-105 rounded-sm"
                style={{ backgroundColor: accent }}
              >
                <div className="transform skew-x-[22deg] group-hover:skew-x-[16deg] flex items-center gap-1.5 transition-transform">
                  <span className="text-xs font-semibold tracking-wider text-white/95">STEP</span>
                  <span className="text-sm sm:text-base font-black tracking-widest text-white">{item.id}</span>
                </div>
              </div>
              <div className="absolute -bottom-1.5 left-2 right-2 h-2.5 bg-black/30 blur-[3px] rounded-full transform -skew-x-[22deg]" />
            </div>
          </div>

          {/* Icon */}
          <div className="w-full flex flex-col items-center mt-5 mb-2">
            <div 
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-sm"
              style={{ backgroundColor: `${accent}15`, color: accent }}
            >
              <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
            </div>
          </div>

          {/* Title & Short Description */}
          <div className="w-full flex flex-col items-center my-auto px-1">
            <h3 className="font-black text-sm sm:text-[15px] uppercase tracking-wider mb-2 line-clamp-2 transition-colors duration-200 text-slate-900">
              {item.title}
            </h3>
            <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-normal text-center line-clamp-2 max-w-[240px]">
              {item.shortDescription}
            </p>
          </div>

          {/* Action Link */}
          <div className="w-full pt-3 mt-2 border-t border-slate-100 flex items-center justify-center">
            <span 
              className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wide uppercase transition-all duration-300 group-hover:gap-2"
              style={{ color: accent }}
            >
              <span>Explore Details</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>

      {/* Connectors */}
      {isEvenRowCardWithNext && (
        <div className="hidden lg:flex absolute -right-8 lg:-right-9 top-1/2 -translate-y-1/2 w-8 lg:w-9 items-center z-30 pointer-events-none">
          <div className="h-[3.2px] w-full relative overflow-hidden" style={{ backgroundColor: `${accent}40` }}>
            <div className="h-full w-full transition-opacity duration-300 opacity-70 group-hover:opacity-100" style={{ backgroundColor: accent }} />
            <div className="absolute inset-y-0 w-1/2 bg-white/90 blur-[1px] animate-beam-travel hidden group-hover:block" />
          </div>
          <div className="animate-arrow-thrust transition-transform duration-300">
            <svg className="w-3.5 h-3.5 shrink-0 -mr-1" viewBox="0 0 12 12" fill="none">
              <polygon points="1,1 11,6 1,11" fill={accent} />
            </svg>
          </div>
        </div>
      )}

      {isEvenRowTurnaround && (
        <div className="hidden lg:flex absolute -bottom-8 lg:-bottom-9 right-8 lg:right-9 h-8 lg:h-9 flex-col items-center z-30 pointer-events-none">
          <div className="w-[3.2px] h-full relative overflow-hidden" style={{ backgroundColor: `${accent}40` }}>
            <div className="w-full h-full transition-opacity duration-300 opacity-70 group-hover:opacity-100" style={{ backgroundColor: accent }} />
            <div className="absolute inset-x-0 h-1/2 bg-white/90 blur-[1px] animate-beam-travel-vertical hidden group-hover:block" />
          </div>
          <div className="animate-arrow-thrust-down transition-transform duration-300">
            <svg className="w-3.5 h-3.5 shrink-0 -mb-1" viewBox="0 0 12 12" fill="none">
              <polygon points="1,1 6,11 11,1" fill={accent} />
            </svg>
          </div>
        </div>
      )}

      {isOddRowCardWithNext && (
        <div className="hidden lg:flex absolute -left-8 lg:-left-9 top-1/2 -translate-y-1/2 w-8 lg:w-9 items-center z-30 pointer-events-none">
          <div className="animate-arrow-thrust-left transition-transform duration-300">
            <svg className="w-3.5 h-3.5 shrink-0 -ml-1" viewBox="0 0 12 12" fill="none">
              <polygon points="11,1 1,6 11,11" fill={accent} />
            </svg>
          </div>
          <div className="h-[3.2px] w-full relative overflow-hidden" style={{ backgroundColor: `${accent}40` }}>
            <div className="h-full w-full transition-opacity duration-300 opacity-70 group-hover:opacity-100" style={{ backgroundColor: accent }} />
            <div className="absolute inset-y-0 w-1/2 bg-white/90 blur-[1px] animate-beam-travel-left hidden group-hover:block" />
          </div>
        </div>
      )}

      {isOddRowTurnaround && (
        <div className="hidden lg:flex absolute -bottom-8 lg:-bottom-9 left-8 lg:left-9 h-8 lg:h-9 flex-col items-center z-30 pointer-events-none">
          <div className="w-[3.2px] h-full relative overflow-hidden" style={{ backgroundColor: `${accent}40` }}>
            <div className="w-full h-full transition-opacity duration-300 opacity-70 group-hover:opacity-100" style={{ backgroundColor: accent }} />
            <div className="absolute inset-x-0 h-1/2 bg-white/90 blur-[1px] animate-beam-travel-vertical hidden group-hover:block" />
          </div>
          <div className="animate-arrow-thrust-down transition-transform duration-300">
            <svg className="w-3.5 h-3.5 shrink-0 -mb-1" viewBox="0 0 12 12" fill="none">
              <polygon points="1,1 6,11 11,1" fill={accent} />
            </svg>
          </div>
        </div>
      )}

      {isTabletLeftCol && (
        <div className="hidden md:flex lg:hidden absolute -right-8 top-1/2 -translate-y-1/2 w-8 items-center z-30 pointer-events-none">
          <div className="h-[3.2px] w-full relative overflow-hidden" style={{ backgroundColor: accent }}>
            <div className="absolute inset-y-0 w-1/2 bg-white/90 animate-beam-travel hidden group-hover:block" />
          </div>
          <div className="animate-arrow-thrust">
            <svg className="w-3.5 h-3.5 shrink-0 -mr-1" viewBox="0 0 12 12" fill="none">
              <polygon points="1,1 11,6 1,11" fill={accent} />
            </svg>
          </div>
        </div>
      )}

      {hasMobileNextCard && (
        <div className="flex md:hidden absolute left-1/2 -translate-x-1/2 -bottom-8 h-8 flex-col items-center z-30 pointer-events-none">
          <div className="w-[3.2px] h-full relative overflow-hidden" style={{ backgroundColor: accent }}>
            <div className="absolute inset-x-0 h-1/2 bg-white/90 animate-beam-travel-vertical hidden group-hover:block" />
          </div>
          <div className="animate-arrow-thrust-down">
            <svg className="w-3.5 h-3.5 shrink-0 -mb-1" viewBox="0 0 12 12" fill="none">
              <polygon points="1,1 6,11 11,1" fill={accent} />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

/* ==========================================================================
   VIEW 1: CURRENT VACANCIES VIEW
   ========================================================================== */
export function CurrentVacanciesView() {
  return (
    <div className="w-full max-w-7xl xl:max-w-[1380px] animate-fadeIn flex flex-col items-center">
      <div className="text-center mb-10 sm:mb-12 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
          Current{' '}
          <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
            Vacancies
          </span>
        </h1>
        <p className="mt-3.5 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
          Click any option to explore specific recruitment categories and roles.
        </p>
      </div>

      <div className="w-full rounded-3xl sm:rounded-[36px] bg-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-neutral-300/40 border border-neutral-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 justify-items-center">
          {currentVacanciesData.map((item, index) => (
            <StatCard
              key={item.id}
              title={item.title}
              description={item.description}
              iconName={item.iconName}
              iconColor={item.iconColor}
              blobColor={item.blobColor}
              className="animate-stagger-card"
              style={{ animationDelay: `${index * 80}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   VIEW 2: RECRUITMENT POLICIES VIEW (WITH DETAILED MODAL SYSTEM)
   ========================================================================== */
export function RecruitmentPoliciesView() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [copied, setCopied] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCard(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentIndex = selectedCard 
    ? recruitmentCardsData.findIndex(c => c.id === selectedCard.id) 
    : -1;

  const handlePrevCard = () => {
    if (currentIndex > 0) {
      setSelectedCard(recruitmentCardsData[currentIndex - 1]);
    } else {
      setSelectedCard(recruitmentCardsData[recruitmentCardsData.length - 1]);
    }
  };

  const handleNextCard = () => {
    if (currentIndex < recruitmentCardsData.length - 1) {
      setSelectedCard(recruitmentCardsData[currentIndex + 1]);
    } else {
      setSelectedCard(recruitmentCardsData[0]);
    }
  };

  const triggerAction = (actionName) => {
    setNotification(`Action initiated: "${actionName}"`);
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const copyRefNumber = () => {
    if (selectedCard) {
      navigator.clipboard?.writeText(`CRCCF-2026-POL-${selectedCard.id}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-7xl xl:max-w-[1440px] animate-fadeIn flex flex-col items-center">
      <div className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto pt-2 sm:pt-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3.5">
          <span className="text-slate-900">Recruitment </span>
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500 bg-clip-text text-transparent">
            Policies
          </span>
        </h1>

        <div className="flex items-center justify-center gap-1.5 mb-4">
          <div className="h-1 w-12 rounded-full bg-blue-600" />
          <div className="h-1 w-4 rounded-full bg-indigo-500" />
          <div className="h-1 w-2 rounded-full bg-orange-500" />
        </div>
        
        <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
          Explore our comprehensive recruitment protocols, statutory standards, and step-by-step career progression frameworks.
          <br className="hidden sm:inline" />
          {' '}Designed to ensure transparency, equal opportunity, and merit-based governance across all employment cadres.
        </p>
      </div>

      {notification && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 animate-bounce">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium">{notification}</span>
          <button 
            onClick={() => setNotification(null)}
            className="text-slate-400 hover:text-white ml-2 text-xs"
          >
            ✕
          </button>
        </div>
      )}

      {/* 16 Cards Responsive 4x4 Matrix */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 lg:gap-x-9 lg:gap-y-16 pt-4 pb-8">
        {recruitmentCardsData.map((card, index) => (
          <RecruitmentCard
            key={card.id}
            item={card}
            index={index}
            totalCards={recruitmentCardsData.length}
            onSelect={(item) => {
              setSelectedCard(item);
              setActiveTab('overview');
            }}
          />
        ))}
      </div>

      {/* Interactive Detail Modal */}
      {selectedCard && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedCard(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border border-slate-100 overflow-hidden text-left my-6 transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="p-6 sm:p-8 text-white relative shadow-md"
              style={{ backgroundColor: selectedCard.accentColor || '#1e293b' }}
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-sm text-white flex items-center justify-center transition-all hover:rotate-90 shadow-sm cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="font-mono text-xs font-black px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-white border border-white/20 shadow-sm">
                  STEP #{selectedCard.id}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/15 text-white backdrop-blur-sm">
                  {selectedCard.statusBadge}
                </span>
                <span className="text-xs text-white/80">• Updated: {selectedCard.lastUpdated}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2 leading-tight">
                {selectedCard.title}
              </h2>
              <p className="text-white/95 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
                {selectedCard.details.headline}
              </p>

              <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-white/80">
                <span>Reference: CRCCF-2026-POL-{selectedCard.id}</span>
                <button 
                  onClick={copyRefNumber}
                  className="flex items-center gap-1 text-white hover:text-white/90 bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Ref'}</span>
                </button>
              </div>
            </div>

            <div className="px-6 sm:px-8 border-b border-slate-200 bg-slate-50 flex gap-4 text-xs font-semibold text-slate-500">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-3.5 border-b-2 transition-colors cursor-pointer ${activeTab === 'overview' ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-800'}`}
              >
                Overview & Metrics
              </button>
              <button
                onClick={() => setActiveTab('highlights')}
                className={`py-3.5 border-b-2 transition-colors cursor-pointer ${activeTab === 'highlights' ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-800'}`}
              >
                Key Provisions & Standards
              </button>
              <button
                onClick={() => setActiveTab('steps')}
                className={`py-3.5 border-b-2 transition-colors cursor-pointer ${activeTab === 'steps' ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent hover:text-slate-800'}`}
              >
                Procedure & Implementation
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              {activeTab === 'overview' && (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {selectedCard.details.stats.map((stat, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 text-center shadow-sm">
                        <p className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider mb-1">
                          {stat.label}
                        </p>
                        <p className="text-slate-900 font-black text-sm sm:text-base">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-50/90 rounded-2xl p-5 border border-slate-200/80">
                    <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold text-sm">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Executive Policy Summary</span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {selectedCard.details.summary}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-xs text-amber-950 flex items-start gap-3">
                    <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Applicability Scope: </span>
                      {selectedCard.details.eligibilitySummary}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'highlights' && (
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-3.5 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    Statutory Highlights & Framework Mandates
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCard.details.keyHighlights.map((highlight, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'steps' && (
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-3.5 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-indigo-600" />
                    Step-by-Step Implementation Flow
                  </h4>
                  <div className="space-y-3">
                    {selectedCard.details.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                        <span className="w-7 h-7 rounded-xl bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          {idx + 1}
                        </span>
                        <div className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-0.5">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                <button
                  onClick={handlePrevCard}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Prev Policy</span>
                </button>
                <span className="text-xs font-mono font-bold text-slate-400">
                  {selectedCard.id} / {String(recruitmentCardsData.length).padStart(2, '0')}
                </span>
                <button
                  onClick={handleNextCard}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                >
                  <span>Next Policy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => triggerAction(selectedCard.details.secondaryAction)}
                  className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>{selectedCard.details.secondaryAction}</span>
                </button>

                <button
                  onClick={() => triggerAction(selectedCard.details.primaryAction)}
                  className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-bold text-white rounded-xl shadow-md transition-all flex items-center justify-center gap-2 hover:opacity-95 hover:shadow-lg cursor-pointer"
                  style={{ backgroundColor: selectedCard.accentColor || '#1e293b' }}
                >
                  <span>{selectedCard.details.primaryAction}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ==========================================================================
   VIEW 3: DOCUMENT VERIFICATION VIEW
   ========================================================================== */
export function DocumentVerificationView() {
  return (
    <div className="w-full max-w-7xl xl:max-w-[1380px] animate-fadeIn flex flex-col items-center">
      <div className="text-center mb-10 sm:mb-14 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
          Document{' '}
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Verification
          </span>{' '}
          Department
        </h1>
        <p className="mt-3.5 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Comprehensive 24-point credential, legal, and institutional verification services.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 xl:gap-9 justify-items-center">
        {verificationCardsData.map((item, index) => (
          <DocumentVerificationCard
            key={item.step}
            step={item.step}
            title={item.title}
            description={item.description}
            themeGradient={item.themeGradient}
            badgeGradient={item.badgeGradient}
            circleBg={item.circleBg}
            circleShadow={item.circleShadow}
            outerShadow={item.outerShadow}
            iconName={item.iconName}
            className="animate-stagger-card"
            style={{ animationDelay: `${index * 45}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
   VIEW 4: ONLINE APPLICATION PORTAL VIEW
   ========================================================================== */
export function OnlinePortalView() {
  return (
    <div className="w-full max-w-7xl xl:max-w-[1380px] animate-fadeIn flex flex-col items-center">
      <div className="text-center mb-10 sm:mb-14 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
          Online Application{' '}
          <span className="bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Portal
          </span>
        </h1>
        <p className="mt-3.5 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Comprehensive 30-category online application, certificate request, and registration services.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-9 xl:gap-11 justify-items-center pt-4 pb-14">
        {portalOptionsData.map((item, index) => (
          <PortalOptionCard
            key={item.step}
            step={item.step}
            title={item.title}
            description={item.description}
            fromColor={item.fromColor}
            toColor={item.toColor}
            iconName={item.iconName}
            className="animate-stagger-card"
            style={{ animationDelay: `${index * 40}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
   MAIN COMPLETE CAREERS APPLICATION COMPONENT
   ========================================================================== */
function getViewFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (hash === 'verification' || hash === 'document-verification') return 'verification';
  if (hash === 'vacancies' || hash === 'current-vacancies') return 'vacancies';
  if (hash === 'portal' || hash === 'online-portal' || hash === 'online-application-portal') return 'portal';
  if (hash === 'policies' || hash === 'recruitment-policies' || hash === 'rules') return 'policies';
  return 'home';
}

export default function CareerPage({ onClose }) {
  const [currentView, setCurrentView] = useState(getViewFromHash);

  const handleBackToSite = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else if (onClose) {
      onClose();
    } else {
      window.location.hash = '#home';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateTo = (view) => {
    setCurrentView(view);
    if (view === 'home') {
      history.replaceState(null, '', window.location.pathname);
    } else {
      window.location.hash = `/${view}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentView(getViewFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#eceff1] flex flex-col items-center justify-start pt-6 sm:pt-8 pb-16 px-4 sm:px-8 lg:px-12 transition-all duration-300">
      {/* Global Top Header Navigation Bar (Standard site-wide Back & Home buttons) */}
      <div className="w-full max-w-7xl xl:max-w-[1380px] flex items-center justify-between mb-6 pb-4 border-b border-neutral-300/60 z-50">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={currentView !== 'home' ? () => navigateTo('home') : handleBackToSite}
            className="inline-flex items-center gap-2 rounded-xl bg-[#003135] hover:bg-[#0D5C63] px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
          >
            ← Back
          </button>

          <button
            type="button"
            onClick={handleBackToSite}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0FA4AF] hover:bg-[#12BCC8] px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <Home className="w-4 h-4 text-white" />
            <span>Home</span>
          </button>
        </div>

        
      </div>

      {/* Embedded Complete Styles & Keyframes */}
      <style>{`
        @keyframes border-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardStaggerEntrance {
          0% { opacity: 0; transform: translateY(32px) scale(0.92); filter: blur(3px); }
          60% { opacity: 0.9; transform: translateY(-3px) scale(1.01); filter: blur(0); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        .animate-border-spin {
          animation: border-spin 3s linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-stagger-card {
          opacity: 0;
          animation: cardStaggerEntrance 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity, filter;
        }
        .arrow-path-anim {
          stroke-dasharray: 100;
          stroke-dashoffset: 82;
          opacity: 0.35;
          transition: stroke-dashoffset 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, stroke-width 0.3s ease, filter 0.4s ease;
        }
        .group:hover .arrow-path-anim {
          stroke-dashoffset: 0;
          opacity: 1;
          stroke-width: 3px;
          filter: drop-shadow(0 2px 8px rgba(168, 85, 247, 0.4));
        }
        .arrow-head-top {
          offset-path: path('M 110 14 L 285 14 A 45 45 0 0 1 330 59 L 330 175');
          offset-distance: 18%;
          offset-rotate: auto;
          opacity: 0.45;
          transition: offset-distance 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, filter 0.4s ease;
          will-change: offset-distance, transform;
        }
        .group:hover .arrow-head-top {
          offset-distance: 100%;
          opacity: 1;
          filter: drop-shadow(0 2px 8px rgba(168, 85, 247, 0.6));
        }
        .arrow-head-bot {
          offset-path: path('M 14 205 L 14 365 A 55 55 0 0 0 69 420 L 205 420');
          offset-distance: 18%;
          offset-rotate: auto;
          opacity: 0.45;
          transition: offset-distance 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, filter 0.4s ease;
          will-change: offset-distance, transform;
        }
        .group:hover .arrow-head-bot {
          offset-distance: 100%;
          opacity: 1;
          filter: drop-shadow(0 2px 8px rgba(168, 85, 247, 0.6));
        }
        @keyframes cardEntrance {
          0% { opacity: 0; transform: translateY(24px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-card-entrance {
          animation: cardEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes dashFlow {
          to { stroke-dashoffset: -40; }
        }
        .animate-dash-flow {
          animation: dashFlow 2s linear infinite;
        }
        @keyframes beamTravel {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-beam-travel {
          animation: beamTravel 1.4s ease-in-out infinite;
        }
        @keyframes beamTravelLeft {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-200%); }
        }
        .animate-beam-travel-left {
          animation: beamTravelLeft 1.4s ease-in-out infinite;
        }
        @keyframes beamTravelVertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-beam-travel-vertical {
          animation: beamTravelVertical 1.4s ease-in-out infinite;
        }
        @keyframes arrowThrust {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-arrow-thrust {
          animation: arrowThrust 1.5s ease-in-out infinite;
        }
        @keyframes arrowThrustDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        .animate-arrow-thrust-down {
          animation: arrowThrustDown 1.5s ease-in-out infinite;
        }
        @keyframes arrowThrustLeft {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-4px); }
        }
        .animate-arrow-thrust-left {
          animation: arrowThrustLeft 1.5s ease-in-out infinite;
        }
      `}</style>

      {currentView === 'vacancies' && <CurrentVacanciesView />}
      {currentView === 'policies' && <RecruitmentPoliciesView />}
      {currentView === 'verification' && <DocumentVerificationView />}
      {currentView === 'portal' && <OnlinePortalView />}

      {currentView === 'home' && (
        <>
          <div className="text-center mb-10 sm:mb-12 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Careers at{' '}
              <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                IBCS
              </span>
            </h1>
            <p className="mt-3.5 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Discover <span className="text-rose-600 font-semibold">rewarding career paths</span>, explore active vacancies, and shape your future with our growing and innovative team at <span className="text-indigo-600 font-semibold">IBCS</span>.
            </p>
          </div>

          <div className="w-full max-w-7xl xl:max-w-[1380px] rounded-3xl sm:rounded-[36px] bg-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-neutral-300/40 border border-neutral-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 justify-items-center">
              {careerCardsData.map((card, index) => (
                <StatCard
                  key={card.id || index}
                  title={card.title}
                  description={card.description}
                  iconName={card.iconName}
                  iconColor={card.iconColor}
                  blobColor={card.blobColor}
                  onClick={card.view ? () => navigateTo(card.view) : undefined}
                  className="animate-stagger-card"
                  style={{ animationDelay: `${index * 60}ms` }}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export const Carrers = CareerPage;
