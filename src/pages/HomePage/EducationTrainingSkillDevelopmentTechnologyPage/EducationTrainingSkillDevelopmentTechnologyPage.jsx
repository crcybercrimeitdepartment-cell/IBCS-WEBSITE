import React, { useRef, useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { Home } from 'lucide-react';
import { CYBER_LAW_LEGAL_AWARENESS_CARDS } from './EducationTrainingSkillDevelopmentTechnologyPageData.js';

function useNativeScroll(containerRef, totalItems) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const positions = useRef([0]);
  const animation = useRef(null);
  const targetIndex = useRef(0);

  const stopAnimation = () => {
    if (animation.current !== null) cancelAnimationFrame(animation.current);
    animation.current = null;
    if (containerRef.current) containerRef.current.style.scrollSnapType = '';
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const syncIndex = () => {
      let nearest = 0;
      positions.current.forEach((position, index) => {
        if (Math.abs(position - container.scrollLeft) < Math.abs(positions.current[nearest] - container.scrollLeft)) nearest = index;
      });
      setCurrentIndex(nearest);
      if (animation.current === null) targetIndex.current = nearest;
    };
    const interrupt = () => {
      if (animation.current !== null) cancelAnimationFrame(animation.current);
      animation.current = null;
      container.style.scrollSnapType = '';
      syncIndex();
    };
    const measure = () => {
      interrupt();
      const children = Array.from(container.children);
      const maximum = Math.max(0, container.scrollWidth - container.clientWidth);
      const firstOffset = children[0]?.offsetLeft ?? 0;
      positions.current = [...new Set(children.map((child) => Math.min(maximum, Math.max(0, child.offsetLeft - firstOffset))))];
      if (!positions.current.length) positions.current = [0];
      setMaxIndex(positions.current.length - 1);
      syncIndex();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    Array.from(container.children).forEach((child) => observer.observe(child));
    container.addEventListener('scroll', syncIndex, { passive: true });
    container.addEventListener('pointerdown', interrupt, { passive: true });
    container.addEventListener('wheel', interrupt, { passive: true });
    measure();
    return () => {
      observer.disconnect();
      container.removeEventListener('scroll', syncIndex);
      container.removeEventListener('pointerdown', interrupt);
      container.removeEventListener('wheel', interrupt);
      if (animation.current !== null) cancelAnimationFrame(animation.current);
      animation.current = null;
      container.style.scrollSnapType = '';
    };
  }, [containerRef, totalItems]);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;
    const target = Math.max(0, Math.min(index, positions.current.length - 1));
    stopAnimation();
    targetIndex.current = target;
    const destination = positions.current[target];
    const from = container.scrollLeft;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || Math.abs(destination - from) < 1) {
      container.scrollLeft = destination;
      setCurrentIndex(target);
      return;
    }
    container.style.scrollSnapType = 'none';
    const started = performance.now();
    const duration = Math.min(850, 560 + Math.abs(destination - from) * .18);
    const step = (now) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      container.scrollLeft = from + (destination - from) * eased;
      if (progress < 1) {
        animation.current = requestAnimationFrame(step);
      } else {
        container.scrollLeft = destination;
        animation.current = null;
        container.style.scrollSnapType = '';
        setCurrentIndex(target);
      }
    };
    animation.current = requestAnimationFrame(step);
  };
  return {
    currentIndex, maxIndex, scrollToIndex,
    slideLeft: () => scrollToIndex(targetIndex.current - 1),
    slideRight: () => scrollToIndex(targetIndex.current + 1),
  };
}

export default function EducationTrainingSkillDevelopmentTechnologyPage({ onClose }) {
  const scrollContainerRef = useRef(null);
  const { currentIndex: activeIndex, maxIndex, scrollToIndex, slideLeft, slideRight } = useNativeScroll(scrollContainerRef, CYBER_LAW_LEGAL_AWARENESS_CARDS.length);

  const handleBack = () => {
    if (onClose) onClose();
    window.history.back();
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#EBF7F8] via-[#E7F3F5] to-[#DFEFF2]">
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Manrope:wght@700;800;900&display=swap');
        
        .cyber-scam-fraud-cards-container {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          overflow-x: auto;
          gap: 20px;
          padding: 20px 15px;
          scroll-behavior: smooth;
          width: 100%;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x mandatory;
          scroll-padding-left: 15px;
        }
        .cyber-scam-fraud-cards-container::-webkit-scrollbar {
          display: none;
        }
        .card {
          /* Cute Doodle Palette */
          --bg-color: #fdfbf7;
          --ink-color: #2c2c2c;
          --paper-line: #e6e0d4;
          --tape-color: rgba(255, 221, 161, 0.85);
          --accent-coral: #ff8ba7;
          --accent-mint: #c6e377;
          --accent-lavender: #c0bbfe;
          --accent-yellow: #ffdf6c;

          font-size: clamp(14px, 1.5vw, 16px);
          position: relative;
          width: min(19em, 85vw);
          height: 26em;
          scroll-snap-align: start;
          background: var(--bg-color);
          border: 0.25em solid var(--ink-color);
          /* Hand-drawn sketchy border radius */
          border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
          box-shadow:
            0.5em 0.5em 0 var(--ink-color),
            inset 0 0 1.2em rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2.5em 1.5em 2.5em;
          transition:
            transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
            box-shadow 0.4s ease,
            border-radius 0.4s ease;
          animation: floatCard 6s ease-in-out infinite;
          z-index: 1;
          flex-shrink: 0;
          box-sizing: border-box;
          cursor: pointer;
        }

        .card-body-text {
          flex: 1;
          width: 100%;
          overflow-y: auto;
          line-height: 2;
          color: #000000;
          font-weight: 600;
          text-align: left;
          padding-top: 0.2em;
          padding-right: 0.5em;
          background: linear-gradient(transparent calc(2em - 2px), var(--paper-line) calc(2em - 2px), var(--paper-line) 2em) 0 0 / 100% 2em var(--bg-color);
          background-attachment: local;
          scrollbar-width: thin;
        }

        /* Paper Tape Corner */
        .card::before {
          content: "";
          position: absolute;
          top: -0.7em;
          left: 50%;
          transform: translateX(-50%) rotate(-4deg);
          width: 5em;
          height: 1.4em;
          background: var(--tape-color);
          border: 0.1em solid rgba(0, 0, 0, 0.1);
          box-shadow: 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.1);
          border-radius: 2px 4px 2px 5px;
          z-index: 10;
          animation: tapeFlutter 4s infinite alternate ease-in-out;
        }

        /* Hover Dynamics */
        .card:hover {
          transform: translateY(-0.8em) rotate(1deg);
          box-shadow:
            0.7em 0.9em 0 var(--ink-color),
            inset 0 0 1.2em rgba(0, 0, 0, 0.03);
          border-radius: 15px 255px 15px 225px / 255px 15px 225px 15px;
        }

        /* --- DOODLE DECORATIONS --- */
        .doodle {
          position: absolute;
          fill: none;
          stroke: var(--ink-color);
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          z-index: 0;
        }
        .doodle.star {
          width: 1.8em;
          height: 1.8em;
          top: 1.5em;
          right: 1.5em;
          fill: var(--accent-yellow);
          animation: pulseSparkle 3s infinite alternate ease-in-out;
        }
        .doodle.star-bottom {
          width: 1.5em;
          height: 1.5em;
          bottom: 1em;
          left: 1.2em;
          fill: var(--accent-yellow);
          animation: pulseSparkle 3.5s infinite alternate-reverse ease-in-out;
        }

        /* --- TYPOGRAPHY --- */
        .card-title {
          text-align: center;
          color: #081E52;
          font-weight: 900;
          font-family: "Comic Sans MS", "Chalkboard SE", "Marker Felt", sans-serif;
          letter-spacing: 0.05em;
          margin-bottom: 0.5em;
          text-shadow: 0.08em 0.08em 0 var(--accent-lavender);
          z-index: 2;
          line-height: 1.25;
        }

        .card:hover .card-title {
          animation: titleWobble 0.6s ease-in-out infinite alternate;
        }

        /* --- ANIMATIONS KEYFRAMES --- */
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-0.4em); }
        }

        @keyframes tapeFlutter {
          0% { transform: translateX(-50%) rotate(-4deg) scale(1); }
          100% { transform: translateX(-50%) rotate(-2deg) scale(1.02); }
        }

        @keyframes pulseSparkle {
          0% { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(1.1); opacity: 1; }
        }

        @keyframes titleWobble {
          0% { transform: rotate(-2deg) scale(1.02); }
          100% { transform: rotate(2deg) scale(1.02); }
        }
      ` }} />

      <section className="w-full bg-[#f8fafc] py-8 md:py-12 relative">
        <div className="w-full max-w-[1520px] mx-auto px-4 sm:px-6 relative">
          
          {/* Top Header Navigation buttons */}
          <div className="w-full max-w-[1400px] mx-auto pb-6 flex items-center justify-start gap-3">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 text-white px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95 z-20"
            >
              ← Back
            </button>

            <button
              type="button"
              onClick={handleHome}
              className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] px-4 py-2 text-xs sm:text-sm font-bold text-[#040A1A] transition-all cursor-pointer shadow-sm active:scale-95 z-20"
            >
              <Home className="w-4 h-4 text-[#040A1A]" />
              <span>Home</span>
            </button>
          </div>

          {/* Title centered */}
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-[#0FA4AF]"></div>
              <h1 className="text-[28px] md:text-[36px] lg:text-[46px] font-black text-[#081E52] font-['Manrope',sans-serif] tracking-wider uppercase text-center leading-tight">
                Education, Training &amp; Skill Development Technology
              </h1>
              <div className="h-[2px] w-12 bg-[#0FA4AF]"></div>
            </div>
            <div className="max-w-4xl text-center space-y-3">
              <p className="text-[14px] lg:text-[16px] font-semibold text-black font-['Inter',sans-serif] leading-relaxed">
                We develop software products and digital platforms for education, training, professional development and skill development. Our education technology products can support learning management, digital content, assessment, training administration, competency development and institutional operations.
              </p>
              <p className="text-[14px] lg:text-[16px] font-semibold text-black font-['Inter',sans-serif] leading-relaxed">
                Our product-based approach enables the development of scalable education and learning platforms for educational institutions, organisations, training providers and other lawful users. We combine software engineering, data, cloud, automation and AI technologies to create modern digital learning products.
              </p>
            </div>
          </div>

          {/* Cards Wrapper */}
          <div className="relative max-w-[1400px] mx-auto flex flex-col items-center">

            {/* Custom Cards Layout Row */}
            <div
              ref={scrollContainerRef}
              className="cyber-scam-fraud-cards-container scrollbar-none px-0 w-full"
            >
              {CYBER_LAW_LEGAL_AWARENESS_CARDS.map((card, idx) => {
                return (
                  <div
                    key={idx}
                    className="card cyber-scam-card"
                  >
                    {/* Star Doodle */}
                    <svg className="doodle star" viewBox="0 0 100 100" style={{ strokeWidth: '6px' }}>
                      <path d="M50,12 L61.8,36.4 L90,40.5 L69.6,59.3 L74.4,87 L50,73.5 L25.6,87 L30.4,59.3 L10,40.5 L38.2,36.4 Z" strokeLinejoin="round" />
                    </svg>

                    {/* Card Title */}
                    <h3 className="card-title text-xl md:text-2xl">
                      {card.title}
                    </h3>

                    {/* Detailed Content */}
                    <div className="h-[2px] w-full bg-[#2c2c2c] opacity-10 mb-2 mt-2 z-[2] shrink-0 rounded-full"></div>
                    <div className="card-body-text text-sm md:text-base z-[2]">
                      {card.content}
                    </div>

                    {/* Star Doodle Bottom Left */}
                    <svg className="doodle star-bottom" viewBox="0 0 100 100" style={{ strokeWidth: '6px' }}>
                      <path d="M50,12 L61.8,36.4 L90,40.5 L69.6,59.3 L74.4,87 L50,73.5 L25.6,87 L30.4,59.3 L10,40.5 L38.2,36.4 Z" strokeLinejoin="round" />
                    </svg>

                  </div>
                );
              })}
            </div>

            {/* Centered Navigation Controls */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 md:gap-4 mt-8 w-full px-2">
              {/* Left Button */}
              <button
                onClick={slideLeft}
                disabled={activeIndex === 0}
                className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center text-slate-700 hover:text-blue-600 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] disabled:hover:text-slate-700 cursor-pointer"
              >
                <Icons.ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center justify-center flex-wrap gap-1.5 md:gap-2.5 bg-[#eef2f6] px-4 md:px-5 py-2.5 md:py-3 rounded-3xl md:rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)] max-w-full">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToIndex(idx)}
                    className={`rounded-full transition-all duration-300 flex-shrink-0 cursor-pointer ${
                      activeIndex === idx
                        ? "w-5 h-2 md:w-6 md:h-2.5 bg-[#2563eb]"
                        : "w-2 h-2 md:w-2.5 md:h-2.5 bg-[#cbd5e1] hover:bg-[#94a3b8]"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Right Button */}
              <button
                onClick={slideRight}
                disabled={activeIndex === maxIndex}
                className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center text-slate-700 hover:text-blue-600 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] disabled:hover:text-slate-700 cursor-pointer"
              >
                <Icons.ChevronRight className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
