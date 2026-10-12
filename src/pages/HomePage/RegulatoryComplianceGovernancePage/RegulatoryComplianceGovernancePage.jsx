import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Home, X } from "lucide-react";
import { cardData } from "./RegulatoryComplianceGovernancePageData";

/* ═══════════════════════════════════════════════════════════════════════════
   CARD COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

const WaveCard = React.memo(({ card, onClick }) => {
  const { num, title, desc, Icon, bgGradient } = card;

  return (
    <div onClick={() => onClick && onClick(card)} className="w-full h-full cursor-pointer select-none transform transition-transform hover:scale-105 active:scale-95 duration-200">
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden"
        style={{
          background: bgGradient,
          boxShadow: `0 8px 30px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.2)`,
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          className="absolute top-0 left-[10%] right-[10%] h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
          }}
        />

        <div className="flex flex-col items-start h-full p-4 relative">
          <span className="text-[11px] font-bold tracking-wider text-white/70">
            {num}
          </span>

          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mt-3"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            {Icon && <Icon className="w-5 h-5 text-white" strokeWidth={2} />}
          </div>

          <h3 className="text-base font-bold mt-3 leading-tight text-white">
            {title}
          </h3>

          <p className="text-[11px] mt-1.5 leading-relaxed text-white/80 line-clamp-2">
            {desc}
          </p>

          <div className="mt-auto pt-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.2) 0%, transparent 60%)",
          }}
        />
      </div>
    </div>
  );
});

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function RegulatoryComplianceGovernancePage({ onClose }) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [selectedCard, setSelectedCard] = useState(null);

  const handleBack = () => {
    if (onClose) onClose();
    window.history.back();
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const containerRef = useRef(null);
  const requestRef = useRef();

  // Array of DOM element refs to manipulate transforms directly
  const cardsRef = useRef([]);

  // Store logical X positions in memory (separate from DOM for performance)
  const xPosRef = useRef([]);

  // Store drag state
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    currentX: 0,
    deltaAccumulator: 0,
    dragDistance: 0
  });

  const handlePointerDown = (e) => {
    if (selectedCard) return;
    dragRef.current.isDragging = true;
    dragRef.current.dragDistance = 0;
    const clientX = e.clientX;
    dragRef.current.startX = clientX;
    dragRef.current.currentX = clientX;
    if (e.target.setPointerCapture) {
      e.target.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current.isDragging || selectedCard) return;
    const clientX = e.clientX;
    const deltaX = clientX - dragRef.current.currentX;
    dragRef.current.currentX = clientX;
    dragRef.current.deltaAccumulator += deltaX;
    dragRef.current.dragDistance += Math.abs(deltaX);
  };

  const handlePointerUp = (e) => {
    dragRef.current.isDragging = false;
    if (e.target.releasePointerCapture) {
      e.target.releasePointerCapture(e.pointerId);
    }
  };

  // Store layout constants based on screen size
  const layoutRef = useRef({
    ww: 1200,
    cardW: 160,
    gap: 80,
    baseY: 0,
    amplitude: 40,
    frequency: 0.003,
    speed: 1.2
  });

  /* ── 1. Init & Resize ── */
  useEffect(() => {
    const handleResize = () => {
      const ww = window.innerWidth;
      setWindowWidth(ww);

      const _isMobile = ww < 768;
      const _isTablet = ww >= 768 && ww < 1024;

      const cardW = _isMobile ? 220 : _isTablet ? 140 : 160;
      const gap = _isMobile ? 30 : _isTablet ? 50 : 80;
      const amplitude = _isMobile ? 30 : _isTablet ? 55 : 85;
      const speed = _isMobile ? 1.5 : _isTablet ? 1.8 : 2.2;
      const frequency = _isMobile ? 0.008 : _isTablet ? 0.007 : 0.006;

      layoutRef.current = { ww, cardW, gap, baseY: 0, amplitude, frequency, speed };

      const spacing = cardW + gap;
      const totalWidth = spacing * cardData.length;
      const startX = (ww / 2) - (cardW / 2);
      
      xPosRef.current = cardData.map((_, i) => {
        let x = startX + i * spacing;
        let relativeX = x - (ww / 2);
        if (relativeX > totalWidth / 2) {
            x -= totalWidth;
        }
        return x;
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ── 2. Request Animation Frame Loop ── */
  useEffect(() => {
    if (selectedCard) return;

    let lastTime = performance.now();

    const tick = (currentTime) => {
      const dt = currentTime - lastTime;
      lastTime = currentTime;

      const timeScale = Math.min(dt / 16.666, 3);
      const { ww, cardW, gap, baseY, amplitude, frequency, speed } = layoutRef.current;
      const actualSpeed = speed * timeScale;
      
      const centerX = ww / 2;
      const spacing = cardW + gap;

      const dragDelta = dragRef.current.deltaAccumulator;
      dragRef.current.deltaAccumulator = 0;

      const totalWidth = spacing * xPosRef.current.length;
      const halfWidth = totalWidth / 2;

      for (let i = 0; i < xPosRef.current.length; i++) {
        let x = xPosRef.current[i];
        
        if (dragRef.current.isDragging) {
           x += dragDelta;
        } else {
           x -= actualSpeed;
        }

        let relativeX = x - centerX;
        
        if (relativeX < -halfWidth) {
           x += totalWidth;
        } else if (relativeX > halfWidth) {
           x -= totalWidth;
        }

        xPosRef.current[i] = x;

        const el = cardsRef.current[i];
        if (el) {
          const cardCenterX = x + cardW / 2;
          const distance = Math.abs(cardCenterX - centerX);
          const maxDist = centerX;
          const normalized = Math.min(distance / maxDist, 1);

          const scale = 1.12 - normalized * 0.30;
          const opacity = 1 - normalized * 0.50;
          const sideFactor = (cardCenterX - centerX) / maxDist;
          const rotate = sideFactor * 12;

          const time = currentTime * 0.002;
          const floatOffset = Math.sin(time + i * 1.5) * 12;
          const y = baseY + Math.sin((cardCenterX - centerX) * frequency) * amplitude + floatOffset;

          const zIndex = 100 - Math.round(normalized * 100);

          el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${rotate.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
          el.style.opacity = opacity.toFixed(3);
          el.style.zIndex = zIndex;
        }
      }

      requestRef.current = requestAnimationFrame(tick);
    };

    requestRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(requestRef.current);
  }, [selectedCard]);

  return (
    <section
      className="relative w-full overflow-hidden select-none flex flex-col justify-start pt-6 pb-16 min-h-screen"
      style={{
        background: "linear-gradient(180deg, #EBF7F8 0%, #E7F3F5 40%, #DFEFF2 100%)",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-[1300px] mx-auto px-6 pt-2 flex items-center justify-start gap-3 z-30 relative">
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

      {/* ── Header Section ── */}
      <div className="relative z-10 text-center pb-6 md:pb-8 px-4 mt-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wider uppercase mb-3 text-[#081E52]">
          REGULATORY COMPLIANCE &amp; RISK GOVERNANCE
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-medium max-w-3xl mx-auto">
          Establishing enterprise governance frameworks, risk quantification, continuous compliance monitoring, and automated reporting systems aligned with global regulatory mandates.
        </p>
      </div>

      {/* ── Stream Container ── */}
      <div
        ref={containerRef}
        className="relative w-full overflow-visible touch-pan-y cursor-grab active:cursor-grabbing"
        style={{ height: isMobile ? "380px" : isTablet ? "420px" : "480px", touchAction: "pan-y" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {cardData.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className="absolute top-[20%] left-0"
            style={{
              width: isMobile ? "220px" : isTablet ? "140px" : "160px",
              height: isMobile ? "320px" : isTablet ? "196px" : "225px",
              transformOrigin: "center center",
              willChange: "transform, opacity",
            }}
          >
            <WaveCard 
              card={card} 
              onClick={(c) => {
                if (dragRef.current.dragDistance > 5) return;
                setSelectedCard(c);
              }} 
            />
          </div>
        ))}
      </div>

      {/* ── Glassmorphism Modal ── */}
      {selectedCard && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity cursor-pointer"
            onClick={() => setSelectedCard(null)}
          />

          <div
            className="relative w-full max-w-lg rounded-3xl md:rounded-[2rem] p-6 md:p-10 shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-300"
            style={{
              background: selectedCard.bgGradient,
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 2px rgba(255,255,255,0.3)"
            }}
          >
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-2.5 rounded-full bg-white/10 hover:bg-white/25 transition-colors border border-white/20 text-white cursor-pointer z-50 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Close modal"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            <div className="flex items-center space-x-4 md:space-x-5 mb-6 md:mb-8 relative z-10 pr-8">
              <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-white/20 border border-white/30 shadow-inner">
                {selectedCard.Icon && <selectedCard.Icon className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={2} />}
              </div>
              <div>
                <span className="text-white/70 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase block mb-1">
                  Step {selectedCard.num}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  {selectedCard.title}
                </h2>
              </div>
            </div>

            <p className="text-white/95 text-base md:text-[1.05rem] leading-relaxed mb-8 md:mb-10 relative z-10 font-medium">
              {selectedCard.details}
            </p>

            <button
              className="w-full py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-95 relative z-10 cursor-pointer"
              style={{
                background: "rgba(255,255,255,1)",
                color: "#003135",
                boxShadow: "0 8px 20px -4px rgba(0,0,0,0.2)"
              }}
              onClick={() => setSelectedCard(null)}
            >
              Explore {selectedCard.title} <ArrowRight size={20} strokeWidth={2.5} />
            </button>

            <div
              className="absolute -bottom-24 -right-24 w-64 h-64 md:w-72 md:h-72 rounded-full pointer-events-none opacity-20"
              style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
