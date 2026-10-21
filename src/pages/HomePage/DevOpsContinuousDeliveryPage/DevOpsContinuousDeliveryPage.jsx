import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home,
  RefreshCw,
  Rocket,
  Cpu,
  CheckCheck,
  ShieldCheck,
  Cloud,
  Boxes,
  Code2,
  Activity,
  RotateCcw,
  TrendingUp,
  Globe
} from "lucide-react";
import { 
  demoCards, 
  devOpsHeaderData 
} from "./DevOpsContinuousDeliveryPageData";

/* ─── CONSTANTS & ICON MAPPING ─────────────────────────────────────────── */

const ICON_MAP = {
  RefreshCw,
  Rocket,
  Cpu,
  CheckCheck,
  ShieldCheck,
  Cloud,
  Boxes,
  Code2,
  Activity,
  RotateCcw,
  TrendingUp,
  Globe
};

const N = demoCards.length;
const cards = demoCards.map((d) => ({
  ...d,
  Icon: ICON_MAP[d.iconName] || RefreshCw
}));

/*
 * Card color themes — glassmorphic gradients for the 12 cards
 */
const themes = [
  { bg: "from-blue-600 to-indigo-700", border: "border-blue-300/40", badgeBg: "bg-blue-400/20" },
  { bg: "from-teal-500 to-emerald-600", border: "border-teal-200/40", badgeBg: "bg-teal-400/20" },
  { bg: "from-cyan-600 to-blue-700", border: "border-cyan-300/40", badgeBg: "bg-cyan-400/20" },
  { bg: "from-emerald-500 to-teal-700", border: "border-emerald-300/40", badgeBg: "bg-emerald-400/20" },
  { bg: "from-indigo-600 to-violet-700", border: "border-indigo-300/40", badgeBg: "bg-indigo-400/20" },
  { bg: "from-sky-500 to-cyan-700", border: "border-sky-300/40", badgeBg: "bg-sky-400/20" },
  { bg: "from-teal-600 to-cyan-800", border: "border-teal-300/40", badgeBg: "bg-teal-400/20" },
  { bg: "from-blue-500 to-teal-600", border: "border-blue-300/40", badgeBg: "bg-blue-400/20" },
  { bg: "from-emerald-600 to-green-700", border: "border-emerald-300/40", badgeBg: "bg-emerald-400/20" },
  { bg: "from-indigo-500 to-blue-700", border: "border-indigo-300/40", badgeBg: "bg-indigo-400/20" },
  { bg: "from-cyan-500 to-emerald-600", border: "border-cyan-300/40", badgeBg: "bg-cyan-400/20" },
  { bg: "from-teal-600 to-blue-700", border: "border-teal-300/40", badgeBg: "bg-teal-400/20" }
];

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────── */

export default function DevOpsContinuousDeliveryPage({ onClose }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [ww, setWw] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const handleBack = () => {
    if (onClose) {
      onClose();
    } else {
      window.location.hash = '#devops-continuous-delivery';
    }
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  /* Live resize tracking & body background color sync */
  useEffect(() => {
    const fn = () => setWw(window.innerWidth);
    window.addEventListener("resize", fn);

    const prevBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#EBF7F8";

    return () => {
      window.removeEventListener("resize", fn);
      document.body.style.backgroundColor = prevBg;
    };
  }, []);

  /* Navigation helpers */
  const next = () => setActive((p) => (p + 1) % N);
  const prev = () => setActive((p) => (p - 1 + N) % N);
  const goTo = (i) => setActive(i);

  /* Automatic scrolling timer - pauses only when user hovers on a card */
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActive((p) => (p + 1) % N);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  /* Keyboard nav */
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "ArrowRight") setActive((p) => (p + 1) % N);
      if (e.key === "ArrowLeft") setActive((p) => (p - 1 + N) % N);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  /* Drag / swipe handler */
  const onDragEnd = (_, info) => {
    if (info.offset.x < -40) next();
    else if (info.offset.x > 40) prev();
  };

  /* ─── RESPONSIVE BREAKPOINTS ─── */
  const mob = ww < 768;
  const tab = ww >= 768 && ww < 1024;

  const ARC_DEG = mob ? 100 : tab ? 135 : 155;
  const RX = mob ? 180 : tab ? 380 : 600;
  const RY = mob ? 60 : tab ? 120 : 180;
  const CW = mob ? 135 : tab ? 145 : 175;
  const CH = mob ? 190 : tab ? 205 : 250;

  /**
   * Compute a card's position, tilt, scale, opacity, and z-index
   * based on its offset from the currently active card.
   */
  const getTransform = (idx) => {
    let off = idx - active;
    if (off > N / 2) off -= N;
    if (off < -N / 2) off += N;

    const isBack = Math.abs(off) === 6;

    const divisor = mob ? 2.5 : 5;
    const deg = isBack ? 180 : (off / divisor) * (ARC_DEG / 2);
    const rad = (deg * Math.PI) / 180;

    const x = isBack ? 0 : Math.sin(rad) * RX;
    const y = isBack ? RY * 2 : (1 - Math.cos(rad)) * RY;

    const rot = isBack ? 0 : deg * 0.55;

    const d = Math.abs(off);
    const sc = isBack ? 0.3 : Math.max(0.5, 1 - d * 0.08);

    let op;
    if (mob) {
      op = d <= 2 ? Math.max(0.3, 1 - d * 0.25) : 0;
    } else {
      op = isBack ? 0 : Math.max(0.1, 1 - d * 0.15);
    }

    const z = isBack ? -100 : 100 - Math.round(d * 10);

    return { x, y, rot, sc, op, z };
  };

  /* ─── RENDER ────────────────────────────────────────────────────────────── */

  return (
    <div 
      className="relative w-full min-h-screen bg-gradient-to-b from-[#EBF7F8] via-[#E7F3F5] to-[#DFEFF2] flex flex-col items-center justify-between pb-16 font-sans select-none overflow-hidden transform-gpu"
      style={{ backgroundColor: "#EBF7F8" }}
    >

      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-[1300px] px-6 pt-6 flex items-center justify-start gap-3 z-30">
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

      {/* ── Background atmospheric glows ── */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-teal-500/[0.06] blur-[160px] pointer-events-none" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-cyan-600/[0.05] blur-[120px] pointer-events-none" />

      {/* ── HEADER ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="z-20 text-center mb-4 md:mb-6 px-4 max-w-5xl"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#AFDDE5] shadow-xs mb-3">
          <span className="w-2 h-2 rounded-full bg-[#0FA4AF] animate-pulse" />
          <span className="text-xs font-extrabold text-[#081E52] tracking-wider uppercase">
            {devOpsHeaderData.badge}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#081E52] tracking-tight uppercase mb-3">
          {devOpsHeaderData.title}
        </h1>

        <p className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed font-medium text-center max-w-4xl mx-auto" style={{ textAlign: 'center' }}>
          {devOpsHeaderData.description}
        </p>
      </motion.div>

      {/* ── ARC CONTAINER ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        className="relative w-full"
        style={{ height: mob ? "290px" : tab ? "390px" : "470px" }}
      >
        {/* ▸ Glowing Elliptical Platform Ring (3D perspective) */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            width: mob ? "280px" : tab ? "650px" : "1000px",
            height: mob ? "100px" : tab ? "240px" : "350px",
            bottom: mob ? "-30px" : tab ? "-80px" : "-120px",
            left: "50%",
            transform: "translateX(-50%) rotateX(72deg)",
            borderRadius: "50%",
            border: "2px solid rgba(15, 164, 175, 0.35)",
            boxShadow:
              "0 0 50px rgba(15, 164, 175, 0.25), 0 0 90px rgba(0, 49, 53, 0.12), inset 0 0 35px rgba(15, 164, 175, 0.1)",
          }}
        />

        {/* ▸ Bright center glow on platform */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            width: mob ? "160px" : tab ? "300px" : "450px",
            height: mob ? "30px" : tab ? "50px" : "70px",
            bottom: mob ? "-5px" : tab ? "-30px" : "-40px",
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(ellipse at center, rgba(15, 164, 175, 0.4) 0%, rgba(13, 92, 99, 0.15) 45%, transparent 70%)",
            filter: "blur(12px)",
          }}
        />

        {/* ▸ Cards — draggable wrapper */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={onDragEnd}
          className="relative w-full h-full transform-gpu"
          style={{ perspective: "1200px", backfaceVisibility: "hidden" }}
        >
          {cards.map((card, i) => {
            const { x, y, rot, sc, op, z } = getTransform(i);
            const isActive = i === active;
            const t = themes[i % themes.length];

            return (
              <motion.div
                key={card.id}
                initial={false}
                animate={{
                  x,
                  y,
                  rotate: rot,
                  scale: isActive ? sc * 1.1 : sc,
                  opacity: op,
                }}
                transition={{
                  type: "spring",
                  stiffness: 45,
                  damping: 20,
                  mass: 2.5,
                }}
                style={{
                  zIndex: z,
                  position: "absolute",
                  width: CW,
                  height: CH,
                  left: "50%",
                  marginLeft: -CW / 2,
                  top: mob ? 20 : tab ? 30 : 40,
                }}
                className={`rounded-xl md:rounded-2xl bg-gradient-to-br ${t.bg} border ${t.border} cursor-pointer overflow-hidden
                  ${isActive
                    ? "shadow-[0_12px_45px_rgba(0,0,0,0.22)] ring-2 ring-white/50"
                    : "shadow-[0_4px_15px_rgba(0,0,0,0.08)]"
                  }
                `}
                onClick={() => goTo(i)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Card inner content */}
                <div className="flex flex-col items-center justify-between h-full pt-4 pb-2 md:pt-5 md:pb-3 px-2 md:px-3 relative text-white">
                  {/* Top highlight line for gloss effect */}
                  <div className="absolute top-0 left-[12%] right-[12%] h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                  {/* Top: Card Number Pill */}
                  <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-2.5 py-0.5 md:px-3.5 md:py-1 flex items-center justify-center shadow-xs">
                    <span className="text-[9px] md:text-[11px] font-black tracking-widest text-white">
                      {card.num}
                    </span>
                  </div>

                  {/* Middle: Circular Glass Icon */}
                  <div className="w-11 h-11 md:w-[54px] md:h-[54px] rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-md mt-1.5 md:mt-2">
                    <card.Icon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2.4} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[11px] sm:text-xs md:text-[14px] font-extrabold text-center leading-tight mt-1.5 md:mt-2 mb-1 text-white tracking-tight">
                    {card.title}
                  </h3>

                  {/* Separator Line */}
                  <div className="w-6 md:w-8 h-[2px] bg-white/30 rounded-full my-1" />

                  {/* Bottom: Indicator arrow */}
                  <div className="mt-auto w-5 h-5 md:w-7 md:h-7 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center transition-colors shadow-xs">
                    <svg
                      className="w-3 h-3 md:w-3.5 md:h-3.5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ▸ Next / Prev Navigation Controls placed directly ON the 3D Elliptical Ring Platform Center */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 sm:bottom-1 md:bottom-2 lg:bottom-3 z-40 flex items-center justify-center gap-3 md:gap-4 bg-white/95 backdrop-blur-xl px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-[0_10px_30px_rgba(15,164,175,0.25)] border border-[#0FA4AF]/50">
          <button
            type="button"
            onClick={prev}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#003135] hover:bg-[#0FA4AF] text-white transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-md"
            title="Previous Card"
            aria-label="Previous Card"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-1.5 md:gap-2 items-center px-1">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${i === active
                    ? "bg-[#0FA4AF] w-5 md:w-7 h-1.5 md:h-2 shadow-[0_0_8px_rgba(15,164,175,0.6)]"
                    : "bg-teal-200 hover:bg-teal-300 w-1.5 md:w-2 h-1.5 md:h-2"
                  }`}
                title={`Go to ${cards[i].title}`}
                aria-label={`Go to ${cards[i].title}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#003135] hover:bg-[#0FA4AF] text-white transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-md"
            title="Next Card"
            aria-label="Next Card"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* ── ACTIVE CARD DETAILS (Comprehensive, Full-Content Glassmorphism Box) ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        className="z-20 mt-8 md:mt-12 w-full max-w-4xl px-4 md:px-6 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* Speech Bubble Pointer Arrow */}
        <div className="absolute -top-3.5 md:-top-5 left-1/2 -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-white backdrop-blur-xl border-t border-l border-teal-200/60 rotate-45 rounded-tl-lg md:rounded-tl-xl z-20" />

        {/* Glassmorphism Container with Dynamic Full-Content Visibility */}
        <div className="relative w-full min-h-[220px] bg-white/95 backdrop-blur-2xl border border-teal-200/80 rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-[0_12px_40px_rgba(15,164,175,0.15)] z-10 flex flex-col items-center justify-start">

          {/* Subtle Background Ambient Blobs */}
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-10 w-full flex flex-col items-center"
            >
              {/* Header: Number Badge, Title, Category Pill */}
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#0FA4AF]/15 text-[#081E52] border border-[#0FA4AF]/30 shadow-xs">
                  {cards[active]?.num}
                </span>

                {(() => {
                  const ActiveIcon = cards[active]?.Icon;
                  return (
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-teal-50 border border-teal-200/80 text-[#081E52] flex items-center justify-center shadow-xs">
                      {ActiveIcon && <ActiveIcon className="w-5 h-5 md:w-6 md:h-6 text-[#0FA4AF]" strokeWidth={2.4} />}
                    </div>
                  );
                })()}

                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#081E52] tracking-tight text-center">
                  {cards[active]?.title}
                </h3>
              </div>

              {/* Verbatim Complete Description */}
              <div className="w-full bg-slate-50/70 border border-slate-200/70 rounded-2xl p-4 sm:p-5 md:p-6 shadow-inner">
                <p className="text-sm sm:text-[15px] md:text-base text-slate-700 leading-relaxed text-justify font-medium" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                  {cards[active]?.content}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </motion.div>
    </div>
  );
}
