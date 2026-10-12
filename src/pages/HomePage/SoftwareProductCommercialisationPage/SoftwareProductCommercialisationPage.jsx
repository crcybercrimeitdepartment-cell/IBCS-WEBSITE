import React, { useEffect, useRef, useState } from 'react';
import {
  Cloud,
  Key,
  RefreshCw,
  Building2,
  Tag,
  Code2,
  Cpu,
  Network,
  Blocks,
  Globe,
  Sliders,
  Handshake,
  Server,
  ShieldCheck,
  FileText,
  Clock,
  TrendingUp,
  Shield,
  SlidersHorizontal,
  Palette,
  Rocket,
  Terminal,
  Activity,
  FileBadge,
  Share2,
  GitMerge,
  Cable,
  Lock,
  MapPin,
  Scale,
  Wrench,
  Layers,
  Box,
  Sparkles,
  X,
  ChevronDown,
  Home,
} from 'lucide-react';
import { intellectualPropertyData } from './SoftwareProductCommercialisationPageData';

// Lookup dictionary for Lucide icons
const iconMap = {
  Cloud,
  Key,
  RefreshCw,
  Building2,
  Tag,
  Code2,
  Cpu,
  Network,
  Blocks,
  Globe,
  Sliders,
  Handshake,
  Server,
  ShieldCheck,
  FileText,
  Clock,
  TrendingUp,
  Shield,
  SlidersHorizontal,
  Palette,
  Rocket,
  Terminal,
  Activity,
  FileBadge,
  Share2,
  GitMerge,
  Cable,
  Lock,
  MapPin,
  Scale,
  Wrench,
  Layers,
  Box,
};

export function CommercialisationCard({
  item,
  isOpen: propIsOpen,
  isScrolling,
  onToggle,
  onClose,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isForceClosed, setIsForceClosed] = useState(false);

  const isCardOpen = propIsOpen || (!isScrolling && isHovered && !isForceClosed);
  const MainIcon = iconMap[item.icon] || Sparkles;

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

    if (propIsOpen) {
      setIsForceClosed(true);
      onClose(item.id);
    } else {
      setIsForceClosed(false);
      onToggle(item.id);
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsForceClosed(true);
    onClose(item.id);
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-full min-w-0 bg-white rounded-[24px] sm:rounded-[26px] border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] select-none cursor-pointer overflow-hidden relative ${
        isCardOpen
          ? 'border-slate-200/90 shadow-[0_16px_36px_rgba(0,0,0,0.11)]'
          : 'border-slate-100/90 shadow-[0_4px_18px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)] hover:-translate-y-1.5'
      }`}
    >
      {/* 1. TOP PANEL */}
      <div
        className={`w-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] relative ${
          isCardOpen
            ? 'max-h-[90px] sm:max-h-[96px] opacity-100 translate-y-0 pt-3.5 pb-2 px-3.5 sm:px-4.5 pointer-events-auto'
            : 'max-h-0 opacity-0 translate-y-6 pt-0 pb-0 px-3.5 sm:px-4.5 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-2 right-2 sm:right-2.5 w-6 h-6 rounded-full bg-slate-100/90 hover:bg-slate-200 active:scale-90 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-all duration-300 cursor-pointer z-30 shadow-2xs"
          title="Close details"
          aria-label="Close details"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center justify-between pr-7 gap-2 sm:gap-3">
          {item.topStats &&
            item.topStats.map((stat, idx) => {
              const StatIcon = iconMap[stat.icon] || Sparkles;
              return (
                <div key={idx} className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                  <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-xl bg-sky-50 text-sky-600 border border-sky-100/80 flex items-center justify-center shrink-0 shadow-2xs">
                    <StatIcon className="w-4 h-4 text-sky-600" />
                  </div>
                  <div className="shrink-0">
                    <p className="text-[10.5px] sm:text-[11px] text-slate-400 font-semibold tracking-wider uppercase leading-none whitespace-nowrap">
                      {stat.label}
                    </p>
                    <p className="text-[12.5px] sm:text-[13px] font-bold text-slate-800 leading-tight mt-1 whitespace-nowrap">
                      {stat.value}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* 2. THE MIDDLE HERO CARD */}
      <div className="p-1.5 sm:p-2 w-full">
        <div
          className={`w-full h-[76px] sm:h-[80px] rounded-[18px] sm:rounded-[20px] px-3 py-2 flex items-center gap-2.5 sm:gap-3 border transition-colors duration-500 ease-out ${
            isCardOpen
              ? `${item.theme.middleBg} shadow-2xs`
              : 'bg-white border-transparent'
          }`}
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center">
            <div
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${item.theme.accentGradient} flex items-center justify-center relative shadow-md transition-transform duration-500 ease-out ${
                isCardOpen ? 'scale-105' : 'scale-100'
              }`}
              style={{
                boxShadow: `0 4px 14px ${item.theme.glowColor}, inset 0 2px 4px rgba(255,255,255,0.45)`,
              }}
            >
              <div className="absolute top-0.5 left-1.5 w-3 h-2 bg-white/45 rounded-full blur-[1px] rotate-[-25deg]" />
              <MainIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white drop-shadow-sm z-10" />
            </div>

            <div className="absolute -bottom-0.5 -right-0.5 w-6.5 h-4.5 sm:w-7 sm:h-5 bg-gradient-to-b from-white via-slate-50 to-slate-200/95 rounded-[7px] shadow-[0_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-center border border-white/70 z-20">
              <Cloud className="w-3 h-3 text-sky-400 fill-sky-200/80" />
            </div>
          </div>

          <div className="flex-1 min-w-0 pr-0.5">
            <h3
              className="text-[13px] sm:text-[14px] font-bold text-[#081E52] leading-snug tracking-tight line-clamp-2"
              title={item.title}
            >
              {item.title}
            </h3>
          </div>

          {!isCardOpen && (
            <div className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-slate-50 text-slate-400">
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          )}
        </div>
      </div>

      {/* 3. BOTTOM PANEL */}
      <div
        className={`w-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] relative ${
          isCardOpen
            ? 'max-h-[145px] opacity-100 translate-y-0 pt-0 pb-3 px-4 sm:px-4.5 pointer-events-auto'
            : 'max-h-0 opacity-0 -translate-y-6 pt-0 pb-0 px-4 sm:px-4.5 pointer-events-none'
        }`}
      >
        <div className="h-[120px] overflow-y-auto pr-1.5 custom-card-scroll">
          <p className="text-[11.5px] sm:text-[12px] text-slate-700 leading-relaxed font-normal text-justify [text-align:justify] [text-justify:inter-word]">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SoftwareProductCommercialisationPage({ onClose }) {
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

  const handleToggleCard = (id) => {
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

  const handleCloseCard = (id) => {
    setOpenCardIds((prev) => {
      if (!prev.has(id)) return prev;
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const handleBack = () => {
    if (onClose) {
      onClose();
    } else {
      window.location.hash = '#software-commercialisation-section';
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
      <div
        id="software-commercialisation-page"
        className="w-full py-10 sm:py-16 md:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1440px] mx-auto overflow-visible"
        aria-labelledby="main-heading"
      >
      <style>{`
        .commercial-grid {
          display: grid;
          width: 100%;
        }
        @media (min-width: 1024px) {
          .commercial-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .commercial-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 639px) {
          .commercial-grid {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }
        }

        .custom-card-scroll::-webkit-scrollbar {
          width: 3.5px;
        }
        .custom-card-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-card-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 9999px;
        }
        .custom-card-scroll::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .custom-card-scroll {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent;
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
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
        <h1
          id="main-heading"
          className="text-[30px] md:text-[38px] lg:text-[48px] font-extrabold text-[#081E52] tracking-tight mb-4 sm:mb-5 leading-tight"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Software Product Commercialisation
        </h1>

        <div
          className="space-y-3.5 text-[14px] lg:text-[16px] leading-relaxed text-black font-medium font-normal px-2 max-w-3xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <p>
            Building a software product is only one part of creating a technology business. We focus on taking software products from development to deployment, market adoption and long-term commercialisation through scalable technology-product business models.
          </p>

          <p>
            Our commercialisation strategy can include SaaS, subscriptions, software licensing, technology licensing, enterprise deployment, white-label products, APIs, integrations and international distribution. Each model can be adapted to the nature of the product, target market, customer requirements and applicable legal and commercial conditions
          </p>
        </div>
      </div>

      {/* Responsive Grid Matrix */}
      <div className={`commercial-grid gap-5 sm:gap-6 items-start max-w-7xl mx-auto pt-4 pb-20 sm:pb-28 ${isScrolling ? 'pointer-events-none' : ''}`}>
        {intellectualPropertyData.map((item) => (
          <CommercialisationCard
            key={item.id}
            item={item}
            isOpen={openCardIds.has(item.id)}
            isScrolling={isScrolling}
            onToggle={handleToggleCard}
            onClose={handleCloseCard}
          />
        ))}
      </div>
    </div>
  </div>
);
}
