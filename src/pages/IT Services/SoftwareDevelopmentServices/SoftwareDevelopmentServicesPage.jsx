import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Globe,
  Building2,
  Database,
  Server,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Layout,
  Terminal,
  HardDrive,
  Boxes,
  GitMerge,
  Sliders,
  BarChart3,
  UserCheck,
  Network,
  Smartphone,
  Zap,
  Wrench,
  ClipboardList,
  Briefcase,
  Landmark,
  ShieldAlert,
  Lock,
  CreditCard,
  GraduationCap,
  Users,
  FolderOpen,
  CheckSquare,
  Cog,
  CloudLightning,
  Cloud,
  Radio,
  Bot,
  SlidersHorizontal,
  RefreshCw,
  Bug,
  Rocket,
  ShieldPlus,
  BookOpen,
  KeyRound,
  Fingerprint,
  FileCheck,
  GitBranch,
  ServerCog,
  GitCommit,
  TrendingUp,
  Package,
  Award,
  Handshake,
} from 'lucide-react';
import { softwareDevelopmentServicesData } from './SoftwareDevelopmentServicesPageData';

// Semantic icon map for each of the 50 service topics
const serviceIconMap = {
  1: Globe,
  2: Building2,
  3: Database,
  4: Server,
  5: ShieldCheck,
  6: CheckCircle2,
  7: Layers,
  8: Layout,
  9: Terminal,
  10: HardDrive,
  11: Boxes,
  12: GitMerge,
  13: Sliders,
  14: BarChart3,
  15: UserCheck,
  16: Network,
  17: Smartphone,
  18: Zap,
  19: Wrench,
  20: ClipboardList,
  21: Briefcase,
  22: Landmark,
  23: ShieldAlert,
  24: Lock,
  25: CreditCard,
  26: GraduationCap,
  27: Users,
  28: FolderOpen,
  29: CheckSquare,
  30: Cog,
  31: CloudLightning,
  32: Cloud,
  33: Radio,
  34: Bot,
  35: SlidersHorizontal,
  36: RefreshCw,
  37: Bug,
  38: Rocket,
  39: ShieldPlus,
  40: BookOpen,
  41: KeyRound,
  42: Fingerprint,
  43: FileCheck,
  44: GitBranch,
  45: ServerCog,
  46: GitCommit,
  47: TrendingUp,
  48: Package,
  49: Award,
  50: Handshake,
};

function getServiceIcon(id) {
  return serviceIconMap[id] || Globe;
}

function formatServiceTitle(title) {
  if (!title) return '';
  const words = title.split(' ');
  if (words.length <= 2) return title;
  const mid = Math.ceil(words.length / 2);
  return `${words.slice(0, mid).join(' ')}\n${words.slice(mid).join(' ')}`;
}

export default function SoftwareDevelopmentServices({ onClose, onHome }) {
  const allServices = softwareDevelopmentServicesData?.services || [];
  const totalServices = allServices.length || 50;

  const [currentIndex, setCurrentIndex] = useState(0);
  const descRef = useRef(null);
  const mobileDescRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    if (descRef.current) descRef.current.scrollTop = 0;
    if (mobileDescRef.current) mobileDescRef.current.scrollTop = 0;
  }, [currentIndex]);

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

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalServices]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalServices);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalServices) % totalServices);
  };

  // Active slot index on the 6-position circular dial (0 to 5)
  const activeSlotIndex = currentIndex % 6;

  // 6 Symmetrical slots around the central circle matching the reference image geometry exactly
  const slotsConfig = [
    {
      slot: 0,
      color: '#FF6B00',
      gradient: 'linear-gradient(135deg, #FF7A00, #E05300)',
      x: 31.0,
      y: 19.0,
      labelSide: 'left',
    },
    {
      slot: 1,
      color: '#00A76F',
      gradient: 'linear-gradient(135deg, #00C484, #00875A)',
      x: 69.0,
      y: 19.0,
      labelSide: 'right',
    },
    {
      slot: 2,
      color: '#1877F2',
      gradient: 'linear-gradient(135deg, #2E89FF, #1565C0)',
      x: 76.5,
      y: 50.0,
      labelSide: 'right',
    },
    {
      slot: 3,
      color: '#8E33FF',
      gradient: 'linear-gradient(135deg, #A855F7, #7E22CE)',
      x: 69.0,
      y: 81.0,
      labelSide: 'right',
    },
    {
      slot: 4,
      color: '#00B8D9',
      gradient: 'linear-gradient(135deg, #06B6D4, #0284C7)',
      x: 31.0,
      y: 81.0,
      labelSide: 'left',
    },
    {
      slot: 5,
      color: '#FF5630',
      gradient: 'linear-gradient(135deg, #FF5630, #D32F2F)',
      x: 23.5,
      y: 50.0,
      labelSide: 'left',
    },
  ];

  // Dynamic slot calculation:
  // For items 1 to 6 (currentIndex 0 to 5), slots 0-5 show items 1-6.
  // When currentIndex crosses 5 (e.g. index 6 = item 7), one-by-one each slot updates
  // to the incoming item as the pointer sweeps clockwise around the dial.
  const getSlotService = (s) => {
    const currentCycle = Math.floor(currentIndex / 6);
    let serviceIdx;
    if (s <= activeSlotIndex) {
      serviceIdx = currentCycle * 6 + s;
    } else {
      const prevCycle = Math.max(0, currentCycle - 1);
      serviceIdx = prevCycle * 6 + s;
    }
    serviceIdx = serviceIdx % totalServices;
    return {
      service: allServices[serviceIdx] || allServices[0] || {},
      serviceIndex: serviceIdx,
    };
  };

  // Mobile active slot index (4 items on mobile view)
  const mobileBatchStart = Math.floor(currentIndex / 4) * 4;
  const mobileActiveSlotIndex = currentIndex % 4;

  // Dynamic slot calculation for mobile (4 visible sections):
  const getMobileSlotService = (s) => {
    const serviceIdx = (mobileBatchStart + s) % totalServices;
    return {
      service: allServices[serviceIdx] || allServices[0] || {},
      serviceIndex: serviceIdx,
    };
  };

  // Active current service shown in the central disc
  const currentService = allServices[currentIndex] || allServices[0] || {};

  return (
    <div className="sds-page-root w-full bg-white flex flex-col items-center justify-start pt-1.5 pb-2 px-3 sm:px-6 select-none font-sans">
      {/* ─── Top Header Navigation Buttons ─── */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-start gap-3 z-30 relative mb-0.5">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 text-white px-3.5 py-1.5 text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-sm active:scale-95"
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

      {/* ─── Page Headings ─── */}
      <header className="w-full max-w-4xl mx-auto text-center mt-0 mb-2 px-3">
        <h1 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#081E52] tracking-tight leading-tight mb-2">
          Software Development
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
          IBCS Software Development focuses on designing and developing reliable, scalable, and purpose-driven software solutions tailored to diverse business, institutional, and operational requirements. From custom applications and enterprise systems to intelligent digital platforms, we aim to transform complex requirements into practical software solutions.
        </p>
      </header>

      {/* ═════════════════════════════════════════════════════════════════ */}
      {/* ─── DESKTOP RADAR STAGE (Centered Disc + 6 Symmetrical Nodes) ─── */}
      {/* ═════════════════════════════════════════════════════════════════ */}
      <div className="sds-desktop-stage relative w-full max-w-[990px] aspect-[1000/490] mx-auto hidden lg:block select-none my-0">
        {/* SVG Concentric Rings and Dashed Connector Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 490"
          fill="none"
        >
          {/* 1. Inner soft concentric ring */}
          <circle
            cx="500"
            cy="245"
            r="175"
            stroke="#e2e8f0"
            strokeWidth="1.5"
          />

          {/* 2. Middle Dashed Orbit Circle */}
          <circle
            cx="500"
            cy="245"
            r="215"
            stroke="#cbd5e1"
            strokeWidth="1.8"
            strokeDasharray="5 7"
            opacity="0.9"
          />

          {/* 3. Outer faint concentric ring */}
          <circle
            cx="500"
            cy="245"
            r="258"
            stroke="#f1f5f9"
            strokeWidth="1.2"
          />

          {/* 4. Orbit Anchor Dots on dashed circle matching screenshot exactly */}
          <circle cx="325" cy="132" r="4.5" fill="#FF6B00" />
          <circle cx="675" cy="132" r="4.5" fill="#00B8D9" />
          <circle cx="675" cy="358" r="4.5" fill="#8E33FF" />
          <circle cx="500" cy="460" r="4.5" fill="#FF6B00" />
          <circle cx="325" cy="358" r="4.5" fill="#1877F2" />

          {/* ─── Dashed Connector Lines to the 6 Nodes (Dynamic Active Flow) ─── */}
          {/* Section 01: Top-Left (Orange) */}
          <g opacity={activeSlotIndex === 0 ? 1 : 0.65} className="transition-opacity duration-300">
            <path
              d="M 335 115 Q 370 135 400 158"
              stroke="#FF6B00"
              strokeWidth={activeSlotIndex === 0 ? 3 : 2.2}
              strokeDasharray="5 5"
              fill="none"
              className={activeSlotIndex === 0 ? 'anim-dash-flow' : ''}
            />
            <circle cx="355" cy="128" r={activeSlotIndex === 0 ? 5 : 4} fill="#FF6B00" />
            <circle
              cx="400"
              cy="158"
              r={activeSlotIndex === 0 ? 7 : 5.5}
              stroke="#FF6B00"
              strokeWidth={activeSlotIndex === 0 ? 3 : 2.2}
              fill="#ffffff"
            />
          </g>

          {/* Section 02: Top-Right (Teal) */}
          <g opacity={activeSlotIndex === 1 ? 1 : 0.65} className="transition-opacity duration-300">
            <path
              d="M 665 115 Q 630 135 600 158"
              stroke="#00A76F"
              strokeWidth={activeSlotIndex === 1 ? 3 : 2.2}
              strokeDasharray="5 5"
              fill="none"
              className={activeSlotIndex === 1 ? 'anim-dash-flow' : ''}
            />
            <circle cx="645" cy="128" r={activeSlotIndex === 1 ? 5 : 4} fill="#00A76F" />
            <circle
              cx="600"
              cy="158"
              r={activeSlotIndex === 1 ? 7 : 5.5}
              stroke="#00A76F"
              strokeWidth={activeSlotIndex === 1 ? 3 : 2.2}
              fill="#ffffff"
            />
          </g>

          {/* Section 03: Middle-Right (Blue) */}
          <g opacity={activeSlotIndex === 2 ? 1 : 0.65} className="transition-opacity duration-300">
            <path
              d="M 733 245 L 655 245"
              stroke="#1877F2"
              strokeWidth={activeSlotIndex === 2 ? 3 : 2.2}
              strokeDasharray="5 5"
              fill="none"
              className={activeSlotIndex === 2 ? 'anim-dash-flow' : ''}
            />
            <circle cx="710" cy="245" r={activeSlotIndex === 2 ? 5 : 4} fill="#1877F2" />
            <circle
              cx="680"
              cy="245"
              r={activeSlotIndex === 2 ? 7 : 5.5}
              stroke="#1877F2"
              strokeWidth={activeSlotIndex === 2 ? 3 : 2.2}
              fill="#ffffff"
            />
          </g>

          {/* Section 04: Bottom-Right (Purple) */}
          <g opacity={activeSlotIndex === 3 ? 1 : 0.65} className="transition-opacity duration-300">
            <path
              d="M 665 375 Q 630 355 600 332"
              stroke="#8E33FF"
              strokeWidth={activeSlotIndex === 3 ? 3 : 2.2}
              strokeDasharray="5 5"
              fill="none"
              className={activeSlotIndex === 3 ? 'anim-dash-flow' : ''}
            />
            <circle cx="645" cy="362" r={activeSlotIndex === 3 ? 5 : 4} fill="#8E33FF" />
            <circle
              cx="600"
              cy="332"
              r={activeSlotIndex === 3 ? 7 : 5.5}
              stroke="#8E33FF"
              strokeWidth={activeSlotIndex === 3 ? 3 : 2.2}
              fill="#ffffff"
            />
          </g>

          {/* Section 05: Bottom-Left (Cyan) */}
          <g opacity={activeSlotIndex === 4 ? 1 : 0.65} className="transition-opacity duration-300">
            <path
              d="M 335 375 Q 370 355 400 332"
              stroke="#00B8D9"
              strokeWidth={activeSlotIndex === 4 ? 3 : 2.2}
              strokeDasharray="5 5"
              fill="none"
              className={activeSlotIndex === 4 ? 'anim-dash-flow' : ''}
            />
            <circle cx="355" cy="362" r={activeSlotIndex === 4 ? 5 : 4} fill="#00B8D9" />
            <circle
              cx="400"
              cy="332"
              r={activeSlotIndex === 4 ? 7 : 5.5}
              stroke="#00B8D9"
              strokeWidth={activeSlotIndex === 4 ? 3 : 2.2}
              fill="#ffffff"
            />
          </g>

          {/* Section 06: Middle-Left (Coral) */}
          <g opacity={activeSlotIndex === 5 ? 1 : 0.65} className="transition-opacity duration-300">
            <path
              d="M 267 245 L 345 245"
              stroke="#FF5630"
              strokeWidth={activeSlotIndex === 5 ? 3 : 2.2}
              strokeDasharray="5 5"
              fill="none"
              className={activeSlotIndex === 5 ? 'anim-dash-flow' : ''}
            />
            <circle cx="290" cy="245" r={activeSlotIndex === 5 ? 5 : 4} fill="#FF5630" />
            <circle
              cx="320"
              cy="245"
              r={activeSlotIndex === 5 ? 7 : 5.5}
              stroke="#FF5630"
              strokeWidth={activeSlotIndex === 5 ? 3 : 2.2}
              fill="#ffffff"
            />
          </g>
        </svg>

        {/* ─── ENLARGED CENTRAL CIRCULAR DISC (Roomier text & enhanced visibility) ─── */}
        <div
          className="sds-center-disc absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] aspect-square rounded-full bg-white z-20 flex flex-col items-center justify-center p-6 text-center"
          style={{
            boxShadow:
              '0 20px 48px -10px rgba(15, 23, 42, 0.09), 0 0 0 1px rgba(226, 232, 240, 0.85), 0 6px 20px -4px rgba(0, 0, 0, 0.04)',
          }}
        >
          {/* Title with smooth entrance & larger typography */}
          <h2
            key={`title-${currentService.id || currentIndex}`}
            className="text-[18px] font-extrabold text-[#0f172a] leading-tight max-w-[250px] mb-1.5 anim-fadeIn"
          >
            {currentService.title?.replace('Services Overview', 'Services\nOverview') ||
              'Software Development\nServices Overview'}
          </h2>

          {/* Accent Blue Bar */}
          <div className="w-9 h-[2.8px] bg-[#1877F2] rounded-full mb-2" />

          {/* Scrollable Description Container with Up/Down Triangle Indicators */}
          <div className="relative w-full flex items-center justify-center">
            <div
              ref={descRef}
              key={`desc-${currentService.id || currentIndex}`}
              className="sds-center-desc max-h-[125px] overflow-y-auto px-5 text-center anim-fadeIn"
            >
              <p className="text-[12.5px] leading-relaxed text-slate-600 font-medium">
                {currentService.description}
              </p>
            </div>

            {/* Visual Up/Down Triangle Scrollbar matching reference image */}
            <div className="absolute right-0.5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5 py-1 opacity-70">
              <span className="text-[7.5px] text-slate-400">▲</span>
              <div className="w-[3px] h-8 bg-slate-200 rounded-full overflow-hidden">
                <div className="w-full h-1/2 bg-slate-400 rounded-full" />
              </div>
              <span className="text-[7.5px] text-slate-400">▼</span>
            </div>
          </div>
        </div>

        {/* ─── 6 SURROUNDING SERVICE NODES (Dynamic 50-Item Rotating Dial) ─── */}
        {slotsConfig.map((slot, i) => {
          const { service, serviceIndex } = getSlotService(i);
          const isActive = activeSlotIndex === i;
          const IconComp = getServiceIcon(service.id);
          const formattedTitle = formatServiceTitle(service.title);

          return (
            <div
              key={`slot-${slot.slot}`}
              className="absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                left: `${slot.x}%`,
                top: `${slot.y}%`,
              }}
              onClick={() => setCurrentIndex(serviceIndex)}
            >
              {/* Node Button with Glowing Aura Ring (centered exactly on slot.x, slot.y) */}
              <div
                className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  transform: isActive ? 'scale(1.12)' : 'scale(1)',
                }}
              >
                {/* Active Pulsing Ring Element */}
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-full anim-pulse-ring pointer-events-none"
                    style={{
                      border: `2px solid ${slot.color}`,
                    }}
                  />
                )}

                {/* Outer Glow Halo Ring */}
                <div
                  className="w-[64px] h-[64px] rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: `${slot.color}14`,
                    boxShadow: isActive
                      ? `0 0 26px ${slot.color}55, inset 0 0 8px ${slot.color}25`
                      : `0 0 12px ${slot.color}18`,
                    border: isActive
                      ? `2px solid ${slot.color}`
                      : `1.5px solid ${slot.color}35`,
                  }}
                >
                  {/* Inner Solid Gradient Disc with Animated Icon */}
                  <div
                    key={`icon-disc-${service.id}`}
                    className="anim-slot-pop w-[46px] h-[46px] rounded-full flex items-center justify-center border-[2.5px] border-white shadow-md transition-all duration-200"
                    style={{
                      background: slot.gradient,
                      boxShadow: `0 5px 14px ${slot.color}40`,
                    }}
                  >
                    <IconComp className="w-5 h-5 text-white" strokeWidth={2.2} />
                  </div>
                </div>
              </div>

              {/* Service Label (Anchored to the left or right of the node button) */}
              <div
                key={`label-${service.id}`}
                className={`anim-slot-pop absolute top-1/2 -translate-y-1/2 flex flex-col pointer-events-auto select-none ${
                  slot.labelSide === 'left'
                    ? 'right-[calc(100%+14px)] items-end text-right'
                    : 'left-[calc(100%+14px)] items-start text-left'
                }`}
                style={{
                  width: 'max-content',
                  maxWidth: '170px',
                }}
              >
                <span
                  className="text-[11px] font-extrabold uppercase tracking-wider mb-0.5 transition-colors duration-200"
                  style={{ color: slot.color }}
                >
                  {`SECTION ${String(service.id).padStart(2, '0')}`}
                </span>
                <span
                  className="text-[13.5px] font-extrabold leading-tight group-hover:text-blue-700 transition-colors whitespace-pre-line"
                  style={{
                    color: isActive ? '#081E52' : '#0f172a',
                  }}
                >
                  {formattedTitle}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ═════════════════════════════════════════════════════════════════ */}
      {/* ─── MOBILE VIEW (< 1024px: EXACTLY MATCHING REFERENCE IMAGE) ─── */}
      {/* ═════════════════════════════════════════════════════════════════ */}
      <div className="sds-mobile-stage w-full max-w-[395px] sm:max-w-[420px] px-2.5 sm:px-0 mx-auto block lg:hidden flex flex-col items-center gap-2 py-0">
        {/* ─── 1. TOP CIRCULAR DISC WITH CONCENTRIC ORBIT RINGS (Enlarged for high visibility) ─── */}
        <div className="relative w-[304px] h-[304px] sm:w-[316px] sm:h-[316px] flex items-center justify-center my-0 select-none">
          {/* Concentric Orbit Rings & Orbit Dots */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 310 310"
            fill="none"
          >
            {/* Inner faint ring */}
            <circle
              cx="155"
              cy="155"
              r="132"
              stroke="#e2e8f0"
              strokeWidth="1.2"
            />

            {/* Middle dashed orbit circle */}
            <circle
              cx="155"
              cy="155"
              r="146"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              opacity="0.85"
            />

            {/* Orbit Colored Dots */}
            <circle cx="52" cy="78" r="3.5" fill="#1877F2" />
            <circle cx="258" cy="88" r="3.5" fill="#00B8D9" />
            <circle cx="272" cy="175" r="3.5" fill="#8E33FF" />
            <circle cx="232" cy="256" r="3.5" fill="#1877F2" />
            <circle cx="60" cy="232" r="3.5" fill="#00A76F" />
          </svg>

          {/* Central Circular Disc Card */}
          <div
            className="relative w-[246px] h-[246px] sm:w-[256px] sm:h-[256px] rounded-full bg-white z-10 p-5 flex flex-col items-center justify-center text-center shadow-md border border-slate-200/85"
            style={{
              boxShadow:
                '0 14px 36px -4px rgba(15, 23, 42, 0.09), 0 0 0 1px rgba(226, 232, 240, 0.85)',
            }}
          >
            {/* Title */}
            <h2
              key={`m-title-${currentService.id || currentIndex}`}
              className="text-[15px] sm:text-[16px] font-extrabold text-[#0f172a] leading-snug max-w-[205px] mb-2 anim-fadeIn"
            >
              {currentService.title?.replace('Services Overview', 'Services\nOverview') ||
                'Software Development\nServices Overview'}
            </h2>

            {/* Accent Blue Bar */}
            <div className="w-9 h-[2.5px] bg-[#1877F2] rounded-full mb-2" />

            {/* Description with Scrollbar Indicator */}
            <div className="relative w-full flex items-center justify-center">
              <div
                ref={mobileDescRef}
                key={`m-desc-${currentService.id || currentIndex}`}
                className="sds-center-desc max-h-[102px] sm:max-h-[112px] overflow-y-auto px-3 text-center anim-fadeIn"
              >
                <p className="text-[11.5px] sm:text-[12px] leading-relaxed text-slate-600 font-medium">
                  {currentService.description}
                </p>
              </div>

              {/* Up/Down arrows indicator */}
              <div className="absolute right-0.5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5 opacity-70">
                <span className="text-[6.5px] text-slate-400">▲</span>
                <div className="w-[2.5px] h-6 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-full h-1/2 bg-slate-400 rounded-full" />
                </div>
                <span className="text-[6.5px] text-slate-400">▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 2. VERTICAL TIMELINE WITH 4 PILL CARDS (Phone View) ─── */}
        <div key={`m-timeline-b${mobileBatchStart}`} className="relative w-full pl-6 flex flex-col gap-1.5 mt-0.5">
          {/* Vertical Dashed Timeline Track */}
          <div
            className="absolute left-[8px] top-4 bottom-4 w-[2px] pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, #cbd5e1, #cbd5e1 4px, transparent 4px, transparent 8px)',
            }}
          />

          {slotsConfig.slice(0, 4).map((slot, i) => {
            const { service, serviceIndex } = getMobileSlotService(i);
            const isActive = mobileActiveSlotIndex === i;
            const IconComp = getServiceIcon(service.id);
            const cardDelay = i * 0.055;
            const titleDelay = cardDelay + 0.08;
            const chevronDelay = titleDelay + 0.12;

            return (
              <div
                key={`m-slot-b${mobileBatchStart}-${service.id}`}
                className="anim-mobile-card-entrance relative flex items-center w-full"
                style={{
                  animationDelay: `${cardDelay}s`,
                }}
              >
                {/* Timeline Anchor Dot */}
                <div className="absolute -left-6 w-4 flex items-center justify-center z-10">
                  <div
                    className="w-2.5 h-2.5 rounded-full border-2 border-white transition-all duration-300"
                    style={{
                      backgroundColor: slot.color,
                      boxShadow: isActive
                        ? `0 0 8px ${slot.color}`
                        : '0 1px 3px rgba(0,0,0,0.1)',
                      transform: isActive ? 'scale(1.25)' : 'scale(1)',
                    }}
                  />
                </div>

                {/* Horizontal Capsule Card */}
                <button
                  type="button"
                  onClick={() => setCurrentIndex(serviceIndex)}
                  className={`flex items-center justify-between w-full p-1 pr-3 rounded-full transition-all text-left cursor-pointer active:scale-[0.98] overflow-hidden ${
                    isActive
                      ? 'bg-white border-2 shadow-sm'
                      : 'bg-white border border-slate-200/90 shadow-2xs hover:bg-slate-50/80'
                  }`}
                  style={{
                    borderColor: isActive ? slot.color : '#e2e8f0',
                    boxShadow: isActive
                      ? `0 4px 14px ${slot.color}25`
                      : '0 2px 6px rgba(0,0,0,0.03)',
                  }}
                >
                  {/* Left Icon with Outer Halo */}
                  <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
                    <div
                      className="anim-mobile-icon-pop w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 z-10"
                      style={{
                        backgroundColor: `${slot.color}15`,
                        boxShadow: isActive ? `0 0 12px ${slot.color}40` : 'none',
                        border: `1.5px solid ${slot.color}35`,
                        animationDelay: `${cardDelay}s`,
                      }}
                    >
                      <div
                        className="w-[28px] h-[28px] rounded-full flex items-center justify-center border-2 border-white shadow-xs"
                        style={{
                          background: slot.gradient,
                          boxShadow: `0 3px 8px ${slot.color}35`,
                        }}
                      >
                        <IconComp className="w-3.5 h-3.5 text-white" strokeWidth={2.2} />
                      </div>
                    </div>

                    {/* Middle Text: Section Number + Title (Unfurls out from the icon) */}
                    <div
                      className="anim-mobile-title-unfurl min-w-0 flex-1 flex flex-col justify-center pr-1 overflow-hidden"
                      style={{
                        animationDelay: `${titleDelay}s`,
                        transformOrigin: 'left center',
                      }}
                    >
                      <span
                        className="text-[9px] font-extrabold uppercase tracking-wider leading-none mb-0.5"
                        style={{ color: slot.color }}
                      >
                        SECTION {String(service.id).padStart(2, '0')}
                      </span>
                      <span className="text-[11.5px] font-bold text-slate-800 leading-snug whitespace-pre-line">
                        {formatServiceTitle(service.title)}
                      </span>
                    </div>
                  </div>

                  {/* Right Chevron Arrow */}
                  <ChevronRight
                    size={14}
                    className="anim-mobile-chevron-slide shrink-0 transition-colors ml-1"
                    style={{
                      color: isActive ? slot.color : '#94a3b8',
                      strokeWidth: 2.2,
                      animationDelay: `${chevronDelay}s`,
                    }}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════ */}
      {/* ─── BOTTOM FLOATING PILL DOCK (Matching Screenshot Exactly) ─── */}
      {/* ═════════════════════════════════════════════════════════════════ */}
      <footer className="w-full flex items-center justify-center mt-1 pb-1 z-30">
        <div
          className="inline-flex items-center gap-3 sm:gap-4 bg-white rounded-full px-3 py-1 sm:px-3.5 sm:py-1.5"
          style={{
            boxShadow:
              '0 10px 30px -4px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(241, 245, 249, 0.9)',
          }}
        >
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 active:scale-95 transition-all text-xs sm:text-[12.5px] font-bold text-slate-700 cursor-pointer shadow-xs"
          >
            <ChevronLeft size={14} strokeWidth={2.4} />
            <span>Previous</span>
          </button>

          {/* Counter (e.g., 01 / 50) */}
          <div className="flex items-center gap-1 text-xs sm:text-[13.5px] font-extrabold px-1">
            <span className="text-[#FF6B00]">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-slate-300 font-normal">/</span>
            <span className="text-slate-800">{totalServices}</span>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4.5 sm:py-1.5 rounded-full text-white font-bold text-xs sm:text-[12.5px] transition-all cursor-pointer active:scale-95 hover:brightness-105"
            style={{
              background: 'linear-gradient(135deg, #FF6B00 0%, #FA541C 100%)',
              boxShadow: '0 4px 14px rgba(255, 107, 0, 0.38)',
            }}
          >
            <span>Next</span>
            <ChevronRight size={14} strokeWidth={2.4} />
          </button>
        </div>
      </footer>

      {/* Internal Component Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .anim-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes slotPop {
          0% { opacity: 0; transform: scale(0.72) translateY(4px); }
          65% { opacity: 1; transform: scale(1.08) translateY(-1px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .anim-slot-pop {
          animation: slotPop 0.38s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }

        @keyframes pulseRing {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.22); opacity: 0.2; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }
        .anim-pulse-ring {
          animation: pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes dashFlow {
          to { stroke-dashoffset: -20; }
        }
        .anim-dash-flow {
          animation: dashFlow 1.2s linear infinite;
        }

        /* Center Disc Custom Scrollbar */
        .sds-center-desc::-webkit-scrollbar {
          width: 0px;
        }
        .sds-center-desc {
          scrollbar-width: none;
        }

        /* Mobile Card Loading Animations: Title emerging out from icon */
        @keyframes mobileCardEntrance {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes mobileIconPop {
          0% {
            opacity: 0;
            transform: scale(0.2) rotate(-22deg);
          }
          68% {
            opacity: 1;
            transform: scale(1.18) rotate(4deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes mobileTitleUnfurl {
          0% {
            opacity: 0;
            transform: translateX(-28px);
            clip-path: inset(0 100% 0 0);
          }
          40% {
            opacity: 0.7;
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            clip-path: inset(0 0% 0 0);
          }
        }

        @keyframes mobileChevronSlide {
          0% {
            opacity: 0;
            transform: translateX(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .anim-mobile-card-entrance {
          animation: mobileCardEntrance 0.42s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .anim-mobile-icon-pop {
          animation: mobileIconPop 0.48s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .anim-mobile-title-unfurl {
          animation: mobileTitleUnfurl 0.52s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .anim-mobile-chevron-slide {
          animation: mobileChevronSlide 0.38s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
    </div>
  );
}

