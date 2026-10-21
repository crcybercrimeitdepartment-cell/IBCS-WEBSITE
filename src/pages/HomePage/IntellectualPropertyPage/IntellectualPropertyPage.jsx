import React, { useEffect, useRef, useState } from 'react';
import {
  Laptop,
  Code2,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  Award,
  Lightbulb,
  Lock,
  Handshake,
  Share2,
  TrendingUp,
  FolderCode,
  ChevronDown,
  X,
  Home,
} from 'lucide-react';
import { intellectualPropertyData } from './IntellectualPropertyPageData';

const iconMap = {
  Laptop,
  Code2,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  Award,
  Lightbulb,
  Lock,
  Handshake,
  Share2,
  TrendingUp,
};

// 4 Harmonious gradient palettes cycling across cards
const colorThemes = [
  {
    banner: 'bg-gradient-to-r from-[#7B1FA2] via-[#E91E63] to-[#FF9800]',
    circle: 'bg-[#1E88E5]',
  },
  {
    banner: 'bg-gradient-to-r from-[#003135] via-[#0D5C63] to-[#0FA4AF]',
    circle: 'bg-[#003135]',
  },
  {
    banner: 'bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4]',
    circle: 'bg-[#2563EB]',
  },
  {
    banner: 'bg-gradient-to-r from-[#065F46] via-[#0D9488] to-[#F59E0B]',
    circle: 'bg-[#0D9488]',
  },
];

export function IntellectualPropertyCard({
  id,
  title,
  description,
  icon,
  isOpen: propIsOpen,
  isRowActive,
  isScrolling,
  onToggle,
}) {
  const [localIsOpen, setLocalIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isForceClosed, setIsForceClosed] = useState(false);

  const isOpen = propIsOpen !== undefined ? propIsOpen : localIsOpen;

  // Active state: pinned open (via tap/click on mobile or desktop) or hovered on desktop (ONLY when not scrolling)
  const isCardOpen = isOpen || (!isScrolling && isHovered && !isForceClosed);

  // Auto-adjust down on mobile when open so the top icon never intrudes into the card above
  const shouldAdjustDown = isRowActive || (isCardOpen && id > 2);

  const IconComponent = iconMap[icon] || FolderCode;
  const theme = colorThemes[(id - 1) % colorThemes.length];

  const handleMouseEnter = () => {
    if (isScrolling) return;
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
      setIsHovered(true);
      setIsForceClosed(false);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
      setIsHovered(false);
      setIsForceClosed(false);
    }
  };

  const handleCardClick = (e) => {
    if (e.target.closest('button')) return;

    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) return;

    if (isOpen) {
      setIsForceClosed(true);
      if (onToggle) onToggle();
      else setLocalIsOpen(false);
    } else {
      setIsForceClosed(false);
      if (onToggle) onToggle();
      else setLocalIsOpen(true);
    }
  };

  const handleCloseButtonClick = (e) => {
    e.stopPropagation();
    setIsForceClosed(true);
    if (onToggle && isOpen) {
      onToggle();
    } else {
      setLocalIsOpen(false);
    }
  };

  return (
    <div
      data-card="true"
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative flex flex-col bg-white rounded-[20px] sm:rounded-[26px] transition-all duration-500 ease-out border h-[270px] sm:h-[320px] cursor-pointer select-none ${shouldAdjustDown ? 'mt-7 sm:mt-0' : 'mt-0'
        } ${isCardOpen
          ? 'shadow-[0_16px_36px_rgba(0,0,0,0.12)] translate-y-0 sm:-translate-y-2 border-slate-300 ring-2 ring-[#0FA4AF]/30 z-20'
          : 'shadow-[0_4px_18px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)] hover:-translate-y-1 border-slate-200/85 z-10'
        }`}
    >
      {/* Dynamic Geometric Glowing Background */}
      <div className="absolute inset-0 overflow-hidden rounded-[20px] sm:rounded-[26px] pointer-events-none z-0">
        <div
          className={`absolute inset-0 bg-radial from-slate-100/70 via-transparent to-transparent transition-opacity duration-700 ${isCardOpen ? 'opacity-90' : 'opacity-40'
            }`}
        />

        {/* Shape 1: Red/Rose Glowing Glass Diamond */}
        <div
          className={`absolute -top-3 -right-3 w-32 h-32 sm:w-40 sm:h-40 rounded-[26px] border-2 border-rose-500/35 shadow-[0_0_20px_rgba(244,63,94,0.20)] bg-gradient-to-br from-rose-500/8 via-rose-500/2 to-transparent transition-all duration-700 ease-out ${isCardOpen
              ? 'translate-x-4 -translate-y-4 rotate-[58deg] scale-110 opacity-75 border-rose-500/50 shadow-[0_0_28px_rgba(244,63,94,0.30)]'
              : 'translate-x-0 translate-y-0 rotate-45 scale-100 opacity-35'
            }`}
        />

        {/* Shape 2: Blue/Cyan Glowing Glass Diamond */}
        <div
          className={`absolute -bottom-5 -left-5 w-36 h-36 sm:w-44 sm:h-44 rounded-[30px] border-2 border-sky-500/35 shadow-[0_0_22px_rgba(14,165,233,0.20)] bg-gradient-to-br from-sky-500/8 via-sky-500/2 to-transparent transition-all duration-700 ease-out ${isCardOpen
              ? '-translate-x-4 translate-y-4 -rotate-[26deg] scale-115 opacity-75 border-sky-500/50 shadow-[0_0_28px_rgba(14,165,233,0.30)]'
              : 'translate-x-0 translate-y-0 -rotate-12 scale-100 opacity-35'
            }`}
        />

        {/* Shape 3: Emerald/Teal Accent Glass Diamond */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-[22px] border-2 border-emerald-500/30 shadow-[0_0_16px_rgba(16,185,129,0.18)] bg-gradient-to-br from-emerald-500/6 to-transparent transition-all duration-700 ease-out ${isCardOpen
              ? 'translate-x-4 translate-y-5 rotate-[32deg] scale-110 opacity-60 border-emerald-500/45'
              : 'rotate-12 scale-95 opacity-25'
            }`}
        />

        {/* Glowing Laser Beam 1 */}
        <div
          className={`absolute -top-8 -left-8 w-64 h-[1.5px] bg-gradient-to-r from-transparent via-rose-500/40 to-transparent rotate-[36deg] shadow-[0_0_10px_rgba(244,63,94,0.35)] transition-all duration-700 ease-out ${isCardOpen
              ? 'translate-x-5 -translate-y-3 opacity-75 scale-110'
              : 'translate-x-0 translate-y-0 opacity-30 scale-100'
            }`}
        />

        {/* Glowing Laser Beam 2 */}
        <div
          className={`absolute -bottom-8 -right-8 w-64 h-[1.5px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent -rotate-[40deg] shadow-[0_0_10px_rgba(14,165,233,0.35)] transition-all duration-700 ease-out ${isCardOpen
              ? '-translate-x-5 translate-y-3 opacity-75 scale-110'
              : 'translate-x-0 translate-y-0 opacity-30 scale-100'
            }`}
        />

        {/* Floating Glass Orb / Bubble */}
        <div
          className={`absolute top-[104px] left-5 w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-sky-400/40 bg-gradient-to-br from-white/90 via-sky-200/50 to-sky-400/25 shadow-[0_2px_8px_rgba(14,165,233,0.22),inset_0_1px_2px_rgba(255,255,255,0.8)] transition-all duration-700 ease-out ${isCardOpen
              ? '-translate-x-2 -translate-y-5 scale-125 opacity-90'
              : 'translate-x-0 translate-y-0 scale-100 opacity-40'
            }`}
        />
      </div>

      {/* Top Gradient Banner */}
      <div
        className={`w-full h-[88px] sm:h-[112px] rounded-t-[19px] sm:rounded-t-[25px] ${theme.banner} transition-all duration-500 ease-out shrink-0 relative z-10 ${isCardOpen ? 'opacity-0 -translate-y-3' : 'opacity-100 translate-y-0'
          }`}
      />

      {/* Quick Close Button */}
      {isCardOpen && (
        <button
          type="button"
          onClick={handleCloseButtonClick}
          className="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 z-40 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-500 hover:text-[#081E52] flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
          title="Close details"
          aria-label="Close details"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}

      {/* Circular Icon Badge:
          In Idle: Centered on banner boundary (top-[88px] on mobile, top-[112px] on desktop).
          When Clicked/Tapped on phone or hovered on desktop: Glides up to top card border (top-0)! */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out z-30 pointer-events-none ${isCardOpen ? 'top-0' : 'top-[88px] sm:top-[112px]'
          }`}
      >
        <div
          className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full ${theme.circle} border-[3px] sm:border-4 border-white shadow-md flex items-center justify-center transition-transform duration-500 ${isCardOpen ? 'scale-95' : 'scale-100'
            }`}
        >
          <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white shrink-0 drop-shadow-xs" />
        </div>
      </div>

      {/* Unified Content Container (Title + Description):
          In Idle: Starts below icon circle (top-[140px] on mobile, top-[156px] on desktop).
          When Clicked/Tapped on phone or hovered on desktop: Glides UP to top border below floating icon (top-[34px] on mobile, top-[46px] on desktop). */}
      <div
        className={`absolute inset-x-0 bottom-2.5 sm:bottom-3 px-2.5 sm:px-[18px] flex flex-col items-center transition-all duration-500 ease-out z-20 ${isCardOpen ? 'top-[34px] sm:top-[46px]' : 'top-[140px] sm:top-[156px]'
          }`}
      >
        <h3
          className="text-[13px] sm:text-[16.5px] font-bold text-[#081E52] text-center leading-tight sm:leading-snug tracking-tight mb-1 sm:mb-2 shrink-0 w-full"
          title={title}
        >
          {title}
        </h3>

        <div
          className={`overflow-y-auto no-scrollbar w-full transition-opacity duration-500 ease-out flex-1 ${isCardOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
            }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <p className="text-justify [text-align:justify] [text-justify:inter-word] hyphens-auto [hyphens:auto] [-webkit-hyphens:auto] break-words text-[11px] sm:text-[12.5px] text-slate-800 leading-[1.55] sm:leading-relaxed font-normal w-full tracking-[-0.01em]">
            {description}
          </p>
        </div>
      </div>

      {/* Idle State Prompt */}
      <div
        className={`absolute bottom-2.5 sm:bottom-3 inset-x-0 flex items-center justify-center gap-1 text-[10px] sm:text-[11px] font-medium text-slate-400 transition-opacity duration-300 pointer-events-none z-10 ${isCardOpen ? 'opacity-0' : 'opacity-100'
          }`}
      >
        <span className="sm:hidden">Tap</span>
        <span className="hidden sm:inline">Tap or hover</span>
        <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black font-medium animate-bounce" />
      </div>
    </div>
  );
}

export default function IntellectualPropertyPage({ onClose }) {
  const [openCardIds, setOpenCardIds] = useState(new Set());
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimer = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => {
        setIsScrolling(false);
      }, 180);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  const handleCardToggle = (id) => {
    setOpenCardIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const isRowActive = (itemIndex) => {
    const itemRow = Math.floor(itemIndex / 2);
    if (itemRow === 0) return false;

    const cardId1 = itemRow * 2 + 1;
    const cardId2 = itemRow * 2 + 2;
    return openCardIds.has(cardId1) || openCardIds.has(cardId2);
  };

  const handleBack = () => {
    if (onClose) {
      onClose();
    } else {
      window.location.hash = '#intellectual-property';
    }
  };

  const handleHome = () => {
    if (onClose) {
      onClose();
    }
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#EBF7F8] via-[#E7F3F5] to-[#DFEFF2]">
      <div className="w-full py-10 sm:py-16 md:py-20 px-2.5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <style>{`
        :root {
          --heading-color: #081E52;
          --subheading-color: #0FA4AF;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          -webkit-appearance: none !important;
        }

        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>

      {/* Top Header Navigation buttons for standalone page view */}
      <div className="mx-auto max-w-7xl px-1 pb-6 flex items-center justify-start gap-3">
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

      {/* Header Container */}
      <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-14">
        <h1
          id="main-heading"
          className="text-[30px] md:text-[36px] lg:text-[48px] font-extrabold text-[#081E52] tracking-tight mb-4 sm:mb-5 leading-tight"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Intellectual Property &amp; Technology
        </h1>

        <div
          className="space-y-3.5 text-[14px] lg:text-[16px] leading-relaxed text-black font-medium font-normal px-1"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <p>
            Our software products are supported by intellectual property, proprietary technology and
            technical assets developed through research and product engineering. We create, own,
            protect, manage, license and commercially exploit technology assets associated with our
            software products and digital platforms.
          </p>

          <p>
            Our intellectual property ecosystem may include software code, algorithms, databases,
            architecture, technical documentation, trademarks, copyrights, patents where applicable,
            trade secrets and know-how. We treat technology ownership and protection as an important
            part of long-term product value.
          </p>
        </div>
      </div>

      {/* 2-Cards-Per-Row Mobile Grid & 4-Cards-Per-Row Desktop Grid */}
      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-x-2.5 sm:gap-x-5 lg:gap-x-7 gap-y-3.5 sm:gap-y-8 lg:gap-y-10 pt-7 sm:pt-10 ${isScrolling ? 'pointer-events-none' : ''}`}>
        {intellectualPropertyData.map((item, index) => (
          <IntellectualPropertyCard
            key={item.id}
            id={item.id}
            number={item.number}
            title={item.title}
            description={item.description}
            icon={item.icon}
            isOpen={openCardIds.has(item.id)}
            isRowActive={isRowActive(index)}
            isScrolling={isScrolling}
            onToggle={() => handleCardToggle(item.id)}
          />
        ))}
      </div>
    </div>
  </div>
);
}
