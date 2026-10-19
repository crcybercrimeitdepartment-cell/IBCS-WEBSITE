import { useRef, useState, useEffect, useCallback } from 'react';
import * as Icons from 'lucide-react';
import { DATA_ANALYTICS_CARDS } from './DataAnalyticsAndIntelligenceTechnologyPageData';

function useNativeScroll(containerRef, totalItems) {
  const [position, setPosition] = useState({ currentIndex: 0, maxIndex: 0 });
  const targetsRef = useRef([0]);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const update = () => {
      const cards = Array.from(container.children);
      const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth);
      const firstOffset = cards[0]?.offsetLeft ?? 0;
      const targets = [...new Set(cards.map(card => Math.min(maxScroll, Math.max(0, card.offsetLeft - firstOffset))))];
      if (!targets.length) targets.push(0);
      targetsRef.current = targets;
      const currentIndex = targets.reduce((best, value, index) => Math.abs(value - container.scrollLeft) < Math.abs(targets[best] - container.scrollLeft) ? index : best, 0);
      setPosition(previous => previous.currentIndex === currentIndex && previous.maxIndex === targets.length - 1 ? previous : { currentIndex, maxIndex: targets.length - 1 });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(container);
    Array.from(container.children).forEach(card => observer.observe(card));
    container.addEventListener('scroll', update, { passive: true });
    return () => { observer.disconnect(); container.removeEventListener('scroll', update); };
  }, [containerRef, totalItems]);
  const scrollToIndex = useCallback((index) => {
    const targets = targetsRef.current;
    const target = Math.max(0, Math.min(index, targets.length - 1));
    containerRef.current?.scrollTo({ left: targets[target], behavior: 'smooth' });
  }, [containerRef]);
  return { ...position, scrollToIndex, slideLeft: () => scrollToIndex(position.currentIndex - 1), slideRight: () => scrollToIndex(position.currentIndex + 1) };
}

function SharedPagination({ totalItems, currentIndex, onPageChange, onPrev, onNext }) {
  const buttonClass = 'flex size-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-[#024950] hover:bg-cyan-50 disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-cyan-600';
  return <nav aria-label="Section 8 pages" className="flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white p-2">
    <button type="button" aria-label="Previous page" disabled={currentIndex === 0} onClick={onPrev} className={buttonClass}><Icons.ChevronLeft size={20} /></button>
    <span className="min-w-20 text-center text-sm tabular-nums text-slate-600 md:hidden">{currentIndex + 1} / {totalItems}</span>
    <div className="hidden items-center gap-1 md:flex">{Array.from({ length: totalItems }, (_, index) => <button key={index} type="button" aria-label={`Go to page ${index + 1}`} aria-current={index === currentIndex ? 'page' : undefined} onClick={() => onPageChange(index)} className={`size-11 rounded-full text-sm font-semibold ${index === currentIndex ? 'bg-cyan-600 text-white' : 'text-slate-600 hover:bg-cyan-50'}`}>{index + 1}</button>)}</div>
    <button type="button" aria-label="Next page" disabled={currentIndex === totalItems - 1} onClick={onNext} className={buttonClass}><Icons.ChevronRight size={20} /></button>
  </nav>;
}


// Color schemes matching the 5 exact palette styles in the image
const getColorStyle = (index) => {
  const palette = [
    {
      stopStart: "#FFD700", stopMid: "#FFA500", stopEnd: "#FF8C00",
      circleGradient: "from-[#FFD700] via-[#FFA500] to-[#FF8C00]",
      textColor: "text-[#D97706]",
      iconBg: "bg-amber-50 border-amber-200/80",
      badgeBg: "bg-amber-100/50 text-amber-800",
    },
    {
      stopStart: "#FF8C00", stopMid: "#FF4500", stopEnd: "#FF0000",
      circleGradient: "from-[#FF8C00] via-[#FF4500] to-[#FF0000]",
      textColor: "text-[#EA580C]",
      iconBg: "bg-orange-50 border-orange-200/80",
      badgeBg: "bg-orange-100/50 text-orange-800",
    },
    {
      stopStart: "#FF8DA1", stopMid: "#F34079", stopEnd: "#D81B60",
      circleGradient: "from-[#FF8DA1] via-[#F34079] to-[#D81B60]",
      textColor: "text-[#E11D48]",
      iconBg: "bg-rose-50 border-rose-200/80",
      badgeBg: "bg-rose-100/50 text-rose-800",
    },
    {
      stopStart: "#00F2FE", stopMid: "#4FACFE", stopEnd: "#0077B6",
      circleGradient: "from-[#00F2FE] via-[#4FACFE] to-[#0077B6]",
      textColor: "text-[#0891B2]",
      iconBg: "bg-cyan-50 border-cyan-200/80",
      badgeBg: "bg-cyan-100/50 text-cyan-800",
    },
    {
      stopStart: "#B620E0", stopMid: "#7B2CBF", stopEnd: "#3C096C",
      circleGradient: "from-[#B620E0] via-[#7B2CBF] to-[#3C096C]",
      textColor: "text-[#7C3AED]",
      iconBg: "bg-purple-50 border-purple-200/80",
      badgeBg: "bg-purple-100/50 text-purple-800",
    }
  ];
  return palette[index % palette.length];
};

const getIcon = (id) => {
  switch (id) {
    case 1: return Icons.Cpu;
    case 2: return Icons.Database;
    case 3: return Icons.Workflow;
    case 4: return Icons.TrendingUp;
    case 5: return Icons.Briefcase;
    case 6: return Icons.BarChart3;
    case 7: return Icons.FileText;
    case 8: return Icons.Brain;
    case 9: return Icons.Activity;
    case 10: return Icons.Share2;
    case 11: return Icons.Lightbulb;
    case 12: return Icons.ShieldCheck;
    default: return Icons.Database;
  }
};

function CardIllustration({ id, idx, style }) {
  const gradientId = `bg-shape-${idx}`;
  const sphereId = `sphere-${idx}`;

  let shapeType = 'database';
  if ([4, 5, 6, 9].includes(id)) shapeType = 'chart';
  else if ([3, 8, 10].includes(id)) shapeType = 'network';
  else if ([7, 11].includes(id)) shapeType = 'document';
  else if (id === 12) shapeType = 'security';

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <radialGradient id={sphereId} cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor={style.stopStart} />
          <stop offset="100%" stopColor={style.stopEnd} />
        </radialGradient>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={style.stopStart} stopOpacity="0.85" />
          <stop offset="100%" stopColor={style.stopEnd} stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id={`${gradientId}-light`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor={style.stopStart} stopOpacity="0.75" />
        </linearGradient>
      </defs>

      {/* Dashed background lines connecting dots */}
      <path d="M 15 25 L 45 15 L 85 35 M 85 35 L 90 75 L 55 90 L 15 75 M 55 90 L 45 60" fill="none" stroke={style.stopMid} strokeWidth="0.5" strokeDasharray="2,2" opacity="0.3" />
      <path d="M 5 50 L 35 45 L 75 80" fill="none" stroke={style.stopStart} strokeWidth="0.5" strokeDasharray="1,2" opacity="0.2" />

      {/* Floating 3D spheres */}
      <circle cx="15" cy="25" r="4.5" fill={`url(#${sphereId})`} opacity="0.7" />
      <circle cx="85" cy="35" r="7" fill={`url(#${sphereId})`} opacity="0.85" />
      <circle cx="90" cy="75" r="3.5" fill={`url(#${sphereId})`} opacity="0.6" />
      <circle cx="20" cy="80" r="9" fill={`url(#${sphereId})`} opacity="0.9" />
      <circle cx="45" cy="15" r="2.5" fill={`url(#${sphereId})`} opacity="0.5" />

      <g transform="translate(50, 55)">
        {shapeType === 'database' && (
          <g transform="translate(-18, -25)">
            <ellipse cx="18" cy="6" rx="18" ry="7" fill={`url(#${gradientId}-light)`} />
            <path d="M 0 6 L 0 18 A 18 7 0 0 0 36 18 L 36 6 A 18 7 0 0 1 0 6 Z" fill={`url(#${gradientId})`} />
            <ellipse cx="18" cy="18" rx="18" ry="7" fill={`url(#${gradientId}-light)`} opacity="0.2" />

            <path d="M 0 18 L 0 30 A 18 7 0 0 0 36 30 L 36 18 A 18 7 0 0 1 0 18 Z" fill={`url(#${gradientId})`} />
            <ellipse cx="18" cy="30" rx="18" ry="7" fill={`url(#${gradientId}-light)`} opacity="0.2" />

            <path d="M 0 30 L 0 42 A 18 7 0 0 0 36 42 L 36 30 A 18 7 0 0 1 0 30 Z" fill={`url(#${gradientId})`} />
          </g>
        )}

        {shapeType === 'chart' && (
          <g transform="translate(-18, -22)">
            {/* Bar 1 */}
            <path d="M 0 40 L 9 37 L 9 18 L 0 21 Z" fill={`url(#${gradientId})`} opacity="0.95" />
            <path d="M 9 37 L 18 40 L 18 21 L 9 18 Z" fill={`url(#${gradientId})`} opacity="0.75" />
            <polygon points="0,21 9,18 18,21 9,24" fill={`url(#${gradientId}-light)`} />

            {/* Bar 2 */}
            <path d="M 14 40 L 23 37 L 23 8 L 14 11 Z" fill={`url(#${gradientId})`} opacity="1" />
            <path d="M 23 37 L 32 40 L 32 11 L 23 8 Z" fill={`url(#${gradientId})`} opacity="0.8" />
            <polygon points="14,11 23,8 32,11 23,14" fill={`url(#${gradientId}-light)`} />
          </g>
        )}

        {shapeType === 'network' && (
          <g transform="translate(-18, -18)">
            <path d="M 18 0 L 0 18 L 18 36 L 36 18 Z" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.7" />
            <path d="M 18 18 L 0 18 M 18 18 L 36 18 M 18 18 L 18 0 M 18 18 L 18 36" fill="none" stroke={`url(#${gradientId})`} strokeWidth="1.5" opacity="0.5" />
            <circle cx="18" cy="0" r="5" fill={`url(#${sphereId})`} />
            <circle cx="0" cy="18" r="6" fill={`url(#${sphereId})`} />
            <circle cx="36" cy="18" r="5" fill={`url(#${sphereId})`} />
            <circle cx="18" cy="36" r="7" fill={`url(#${sphereId})`} />
            <circle cx="18" cy="18" r="8" fill={`url(#${gradientId}-light)`} />
          </g>
        )}

        {shapeType === 'document' && (
          <g transform="translate(-15, -22)">
            <path d="M 0 6 L 18 0 L 30 6 L 12 12 Z" fill={`url(#${gradientId}-light)`} />
            <path d="M 0 6 L 12 12 L 12 40 L 0 34 Z" fill={`url(#${gradientId})`} opacity="0.95" />
            <path d="M 12 12 L 30 6 L 30 34 L 12 40 Z" fill={`url(#${gradientId})`} opacity="0.8" />
            <path d="M 2 15 L 9 18 M 2 21 L 9 24 M 14 17 L 24 14 M 14 23 L 24 20 M 14 29 L 24 26" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
          </g>
        )}

        {shapeType === 'security' && (
          <g transform="translate(-18, -22)">
            <path d="M 18 0 L 36 6 L 36 18 C 36 30 24 38 18 42 C 12 38 0 30 0 18 L 0 6 Z" fill={`url(#${gradientId})`} opacity="0.9" />
            <path d="M 18 0 L 36 6 L 36 18 C 36 30 24 38 18 42 L 18 0" fill={`url(#${gradientId})`} opacity="0.75" />
            <path d="M 10 18 L 15 23 L 26 12" fill="none" stroke={`url(#${gradientId}-light)`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
      </g>
    </svg>
  );
}

export const DataAnalyticsIntelligenceTechnologyPage = DataAnalyticsAndIntelligenceTechnologyPage;


export default function DataAnalyticsAndIntelligenceTechnologyPage({ onClose }) {

  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [flippedCards, setFlippedCards] = useState(new Set());

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const handleBack = () => {
    if (onClose) {
      onClose();
    } else {
      window.location.hash = '#data-analytics-intelligence-technology';
    }
  };

  const handleHome = () => {
    if (onClose) {
      onClose();
    }
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const totalItems = DATA_ANALYTICS_CARDS.length;
  const {
    currentIndex,
    maxIndex,
    scrollToIndex,
    slideLeft,
    slideRight
  } = useNativeScroll(scrollContainerRef, totalItems);

  const toggleCard = (tag) => {
    setFlippedCards(prev => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
 .data-analytics-cards-container {
 display: flex;
 flex-direction: row;
 flex-wrap: nowrap;
 overflow-x: auto;
 overflow-y: hidden;
 gap: 16px;
 padding: 20px 16px 40px 16px;
 scroll-behavior: smooth;
 width: 100%;
 scrollbar-width: none;
 -ms-overflow-style: none;
 scroll-snap-type: x mandatory;
 scroll-padding-left: 16px;
 }
 @media (min-width: 640px) {
   .data-analytics-cards-container {
     gap: 24px;
     padding: 30px 24px 60px 24px;
     scroll-padding-left: 24px;
   }
 }
 .data-analytics-cards-container::-webkit-scrollbar {
 display: none;
 }

  @keyframes floatShape {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  @keyframes floatSphere1 {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }
  @keyframes floatSphere2 {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(8px); }
  }
  @keyframes floatSphere3 {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
  }
  @keyframes dashFlow {
    from { stroke-dashoffset: 16; }
    to { stroke-dashoffset: 0; }
  }
  @keyframes pulseGlow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .animate-float-shape { animation: floatShape 6s ease-in-out infinite; }
  .animate-float-sphere-1 { animation: floatSphere1 5s ease-in-out infinite; }
  .animate-float-sphere-2 { animation: floatSphere2 7s ease-in-out infinite; }
  .animate-float-sphere-3 { animation: floatSphere3 4s ease-in-out infinite; }
  .animate-dash-flow { animation: dashFlow 2s linear infinite; }
  .animate-pulse-glow { animation: pulseGlow 3s ease-in-out infinite; }
  .animate-spin-slow { animation: spinSlow 12s linear infinite; transform-origin: center; }

 ` }} />

      <section ref={sectionRef} className="w-full bg-[#f8fafc] pt-2 md:pt-4 pb-12 md:pb-16 relative">
        {/* Top Header Navigation buttons for standalone page view */}
        <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 pt-4 pb-2 flex items-center justify-start gap-3 z-30 relative">
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
            <Icons.Home className="w-4 h-4 text-white" />
            <span>Home</span>
          </button>
        </div>

        <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 relative">

          {/* Title centered with animations */}
          <div className="flex flex-col items-center justify-center mb-10 gap-2 overflow-hidden">
            <div className="flex items-center justify-center gap-4">
              <div className={`h-[2px] bg-cyan-500 hidden sm:block transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'w-12 opacity-100' : 'w-0 opacity-0'}`}></div>
              <h2 className={`text-[30px] md:text-[36px] lg:text-[48px] font-['Manrope'] font-black text-[#081E52] tracking-wider uppercase text-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-12 blur-[4px]'}`}>
                Data, Analytics & Intelligence Technology
              </h2>
              <div className={`h-[2px] bg-cyan-500 hidden sm:block transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'w-12 opacity-100' : 'w-0 opacity-0'}`}></div>
            </div>
            <div className={`text-[14px] md:text-[16px] font-['Inter'] text-black font-medium text-center max-w-[900px] px-4 leading-relaxed space-y-3 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p>
                Data is a foundational component of modern software products. At IB Cyber Security Private Limited, we develop data-driven technology products that help organisations process, manage, analyse and understand information through software.
              </p>
              <p>
                Our data technology capabilities cover data engineering, analytics, visualisation, reporting, business intelligence and intelligent information processing. We integrate these capabilities into software products and digital platforms to create useful, scalable and technology-enabled information systems.
              </p>
            </div>
          </div>

          {/* Cards Wrapper */}
          <div className="relative max-w-[1400px] mx-auto">

            {/* Custom Cards Layout Row */}
            <div
              ref={scrollContainerRef}
              className="data-analytics-cards-container px-0"
            >
              {DATA_ANALYTICS_CARDS.map((card, idx) => {
                const IconComponent = getIcon(card.id);
                const style = getColorStyle(idx);
                const isFlipped = flippedCards.has(card.tag);

                return (
                  <div
                    key={card.id}
                    onClick={() => toggleCard(card.tag)}
                    style={{ transitionDelay: `${400 + idx * 100}ms` }}
                    className={`data-analytics-card-wrapper w-[82vw] max-w-[320px] sm:w-[calc(50%_-_12px)] lg:w-[calc(25%_-_18px)] shrink-0 snap-center sm:snap-start relative group/card cursor-pointer flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2.5 pb-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
                  >
                    {/* Outer glow behind the card */}
                    <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${style.circleGradient} opacity-0 blur-2xl group-hover/card:opacity-30 transition-opacity duration-700`} />

                    {/* WHITE CARD CONTAINER - GLASSMORPHISM STYLE */}
                    <div className={`bg-white/95 backdrop-blur-xl rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06),0_0_0_1px_rgba(255,255,255,0.4)_inset] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between min-h-[400px] sm:min-h-[440px] h-auto relative w-full border border-white/60`}>

                      {/* FULL CARD GRADIENT BACKGROUND COVER (For Flip) */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-b ${style.circleGradient} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 pointer-events-none ${isFlipped ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover/card:opacity-10'
                          }`}
                      />

                      {/* TOP LIQUID WAVE HEADER - EXACT DESIGN */}
                      <div
                        className={`absolute inset-x-0 top-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-0 ${isFlipped ? 'h-[120%]' : 'h-48 group-hover/card:h-[120%]'
                          }`}
                      >
                        <svg
                          viewBox="0 0 300 180"
                          className="w-full h-full block filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient id={`grad-data-no-wheel-v2-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor={style.stopStart} />
                              <stop offset="50%" stopColor={style.stopMid} />
                              <stop offset="100%" stopColor={style.stopEnd} />
                            </linearGradient>
                            <linearGradient id={`grad-light-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor={style.stopStart} stopOpacity="0.4" />
                              <stop offset="100%" stopColor={style.stopEnd} stopOpacity="0.1" />
                            </linearGradient>
                          </defs>
                          {/* Background layered waves for 3D effect */}
                          <path d="M0,0 L300,0 L300,120 C220,170 120,60 0,130 Z" fill={`url(#grad-light-${idx})`} />
                          <path d="M0,0 L300,0 L300,90 C220,150 140,40 0,110 Z" fill={`url(#grad-data-no-wheel-v2-${idx})`} opacity="0.85" />
                          <path d="M0,0 L300,0 L300,60 C200,130 100,20 0,90 Z" fill={`url(#grad-data-no-wheel-v2-${idx})`} />

                          {/* Dot pattern overlay on waves */}
                          <pattern id={`dots-${idx}`} x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                            <circle fill="white" cx="2" cy="2" r="1" opacity="0.2"></circle>
                          </pattern>
                          <path d="M0,0 L300,0 L300,120 C220,170 120,60 0,130 Z" fill={`url(#dots-${idx})`} />
                        </svg>
                      </div>

                      {/* ================= LAYER 1: DEFAULT FRONT CONTENT ================= */}
                      <div className={`px-5 sm:px-6 pt-5 pb-5 flex-1 flex flex-col justify-between text-left relative z-20 transition-all duration-500 ease-out ${isFlipped
                          ? 'opacity-0 pointer-events-none scale-95 translate-y-2'
                          : 'opacity-100 pointer-events-auto scale-100 translate-y-0 group-hover/card:opacity-0 group-hover/card:pointer-events-none group-hover/card:scale-95 group-hover/card:translate-y-2'
                        }`}>

                        {/* Top Header Row (Badge & Icon) */}
                        <div className="flex justify-between items-start mb-6">
                          {/* Left Circle Badge */}
                          <div style={{ transitionDelay: `${600 + idx * 100}ms` }} className={`w-[46px] h-[46px] rounded-full bg-white/10 backdrop-blur-md border-[1.5px] border-white/40 shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                            <span className="text-white text-lg font-black tracking-tighter drop-shadow-sm">
                              {card.tag}
                            </span>
                          </div>

                          {/* Right Glassy Icon Square */}
                          <div style={{ transitionDelay: `${700 + idx * 100}ms` }} className={`w-[60px] h-[60px] rounded-[18px] bg-white/20 backdrop-blur-md border-[2px] border-white/50 shadow-[0_8px_16px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.4)_inset] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                            <IconComponent className="w-8 h-8 text-white drop-shadow-md" strokeWidth={2.2} />
                          </div>
                        </div>

                        {/* Title & Short Summary */}
                        <div className="flex-1 flex flex-col justify-start relative pt-4">
                          {/* 3D Card Background Illustration */}
                          <div className="absolute -right-4 -bottom-4 w-[100px] h-[100px] sm:-right-6 sm:-bottom-8 sm:w-[120px] sm:h-[120px] opacity-[0.4] pointer-events-none z-0">
                            <CardIllustration id={card.id} idx={idx} style={style} />
                          </div>

                          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 mb-2 z-10 relative">
                            TECHNOLOGY
                          </span>
                          <h3 className="text-[22px] sm:text-[24px] lg:text-[26px] font-extrabold text-[#0a1526] leading-[1.15] tracking-tight mb-4 z-10 relative">
                            {card.title}
                          </h3>
                          <p className="text-[14px] text-slate-500 font-medium leading-relaxed z-10 relative pr-2 text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                            {card.desc}
                          </p>
                        </div>

                        {/* Front Footer */}
                        <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold z-10">
                          <span className={`uppercase tracking-wider px-3.5 py-1.5 rounded-full font-bold ${style.badgeBg}`}>
                            DATA TECHNOLOGY
                          </span>
                          <span className={`flex items-center gap-1 ${style.textColor} text-[14px] font-extrabold transition-transform group-hover/card:translate-x-1`}>
                            View Details &rarr;
                          </span>
                        </div>

                      </div>

                      {/* ================= LAYER 2: REVEALED FULL DESCRIPTION PANE ================= */}
                      <div className={`absolute inset-0 p-5 sm:p-6 flex flex-col justify-between text-left z-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isFlipped
                          ? 'opacity-100 pointer-events-auto scale-100 translate-y-0'
                          : 'opacity-0 pointer-events-none scale-95 translate-y-4 group-hover/card:opacity-100 group-hover/card:pointer-events-auto group-hover/card:scale-100 group-hover/card:translate-y-0'
                        }`}>

                        {/* Revealed Header */}
                        <div className="flex items-center justify-between pt-4 border-b border-white/20 pb-4 mb-3">
                          <span className="text-[10px] font-black uppercase tracking-wider bg-black/25 text-white/90 px-3 py-1 rounded-full border border-white/20">
                            TECHNOLOGY {card.tag} ? DETAILS
                          </span>
                          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                            <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
                          </div>
                        </div>

                        {/* Revealed Title & Full Detailed Description */}
                        <div className="flex-1 flex flex-col justify-start pt-1 overflow-hidden mb-3">
                          <h4 className="font-extrabold text-white text-lg leading-snug tracking-tight mb-3 drop-shadow-xs shrink-0">
                            {card.title}
                          </h4>

                          {/* Full Detailed Description Box */}
                          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-inner no-scrollbar overflow-y-auto flex-1 min-h-0">
                            <div className="flex items-center gap-1.5 mb-2 text-[10px] font-black uppercase text-white/90 tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                              Overview & Capabilities
                            </div>
                            <p className="text-[12.5px] text-white/95 leading-relaxed font-medium text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                              {card.content}
                            </p>
                          </div>
                        </div>

                        {/* Revealed Footer */}
                        <div className="pt-4 border-t border-white/20 flex items-center justify-between text-[11px] font-bold text-white/90">
                          <span className="uppercase tracking-wider">DATA TECHNOLOGY</span>
                          <span className="flex items-center gap-1 text-white/80">
                            &larr; Tap card to return
                          </span>
                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="mt-8 flex justify-center w-full relative z-30">
              <SharedPagination
                totalItems={maxIndex + 1}
                currentIndex={currentIndex}
                onPageChange={(idx) => scrollToIndex(idx)}
                onPrev={slideLeft}
                onNext={slideRight}
              />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
