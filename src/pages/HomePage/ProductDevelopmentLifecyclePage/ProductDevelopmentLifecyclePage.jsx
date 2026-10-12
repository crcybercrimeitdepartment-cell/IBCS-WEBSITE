import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Lightbulb, Target, Box, ChevronDown, X, Home } from 'lucide-react';
import { stages, introData } from './ProductDevelopmentLifecyclePageData';

const themes = [
  { 
    accentGradient: 'linear-gradient(90deg, #2563EB 0%, #06B6D4 100%)', 
    bg: 'bg-blue-50', 
    text: 'text-blue-600', 
    pillBg: 'bg-blue-600' 
  },
  { 
    accentGradient: 'linear-gradient(90deg, #059669 0%, #10B981 100%)', 
    bg: 'bg-emerald-50', 
    text: 'text-emerald-600', 
    pillBg: 'bg-emerald-600' 
  },
  { 
    accentGradient: 'linear-gradient(90deg, #7C3AED 0%, #A855F7 100%)', 
    bg: 'bg-purple-50', 
    text: 'text-purple-600', 
    pillBg: 'bg-purple-600' 
  },
  { 
    accentGradient: 'linear-gradient(90deg, #EA580C 0%, #F59E0B 100%)', 
    bg: 'bg-orange-50', 
    text: 'text-orange-600', 
    pillBg: 'bg-orange-600' 
  },
  { 
    accentGradient: 'linear-gradient(90deg, #DB2777 0%, #F43F5E 100%)', 
    bg: 'bg-pink-50', 
    text: 'text-pink-600', 
    pillBg: 'bg-pink-600' 
  },
  { 
    accentGradient: 'linear-gradient(90deg, #6D28D9 0%, #8B5CF6 100%)', 
    bg: 'bg-violet-50', 
    text: 'text-violet-600', 
    pillBg: 'bg-violet-600' 
  },
  { 
    accentGradient: 'linear-gradient(90deg, #1D4ED8 0%, #3B82F6 100%)', 
    bg: 'bg-indigo-50', 
    text: 'text-indigo-600', 
    pillBg: 'bg-indigo-600' 
  },
  { 
    accentGradient: 'linear-gradient(90deg, #0891B2 0%, #0D9488 100%)', 
    bg: 'bg-cyan-50', 
    text: 'text-cyan-600', 
    pillBg: 'bg-cyan-600' 
  },
  { 
    accentGradient: 'linear-gradient(90deg, #D97706 0%, #EA580C 100%)', 
    bg: 'bg-amber-50', 
    text: 'text-amber-600', 
    pillBg: 'bg-amber-600' 
  },
  { 
    accentGradient: 'linear-gradient(90deg, #0284C7 0%, #38BDF8 100%)', 
    bg: 'bg-sky-50', 
    text: 'text-sky-600', 
    pillBg: 'bg-sky-600' 
  },
  { 
    accentGradient: 'linear-gradient(90deg, #C026D3 0%, #EC4899 100%)', 
    bg: 'bg-fuchsia-50', 
    text: 'text-fuchsia-600', 
    pillBg: 'bg-fuchsia-600' 
  },
  { 
    accentGradient: 'linear-gradient(90deg, #4F46E5 0%, #7C3AED 100%)', 
    bg: 'bg-indigo-50', 
    text: 'text-indigo-600', 
    pillBg: 'bg-indigo-600' 
  },
];

/* =========================================================================
   DESKTOP / TABLET CARD COMPONENT
   ========================================================================= */
const LifecycleCard = ({ stage, index, isScattering, colorTheme, numCols = 4 }) => {
  const Icon = stage.icon;
  const numStr = String(stage.number).padStart(2, '0');
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const isMobile = numCols === 1;
  const cardExpanded = isMobile || isExpanded || isHovered;

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 75);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Scatter Origins and Animations
  let variants = {};

  if (numCols === 1) {
    const isEven = index % 2 === 1;
    const xOffset = isEven ? 12 : -12;
    const startX = 0;
    const midX1 = isEven ? 26 : -26;
    const midX2 = isEven ? 12 : -12;
    
    const startRotate = isEven ? 7 : -7;
    const midRotate1 = isEven ? 4 : -4;
    const midRotate2 = isEven ? 2 : -2;

    const estY = - (index * 170) - 200;

    variants = {
      hidden: { opacity: 0, x: startX, y: estY, rotate: startRotate, scale: 0.92 },
      visible: { 
        opacity: 1, 
        x: [startX, midX1, midX2, xOffset],
        y: [estY, estY * 0.5, estY * 0.2, 0],
        rotate: [startRotate, midRotate1, midRotate2, 0],
        scale: [0.92, 0.96, 0.98, 1],
        transition: {
          duration: 0.5,
          delay: index * 0.08,
          ease: "easeOut"
        }
      }
    };
  } else {
    const isTablet = numCols === 2;
    const scaleX = isTablet ? 0.7 : 1;
    const col = index % 4;
    const row = Math.floor(index / 4);
    
    let xOrigin = '0%';
    let yOrigin = '0%';

    if (col === 0) xOrigin = `${150 * scaleX}%`;
    if (col === 1) xOrigin = `${50 * scaleX}%`;
    if (col === 2) xOrigin = `${-50 * scaleX}%`;
    if (col === 3) xOrigin = `${-150 * scaleX}%`;
    
    if (row === 0) yOrigin = '100%';
    if (row === 1) yOrigin = '0%';
    if (row === 2) yOrigin = '-100%';

    const initialRotation = (index % 2 === 0 ? -10 : 12) + (index * 1);

    variants = {
      hidden: { opacity: 0, x: xOrigin, y: yOrigin, rotate: initialRotation, scale: 0.85 },
      visible: { 
        opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, 
        transition: { type: "spring", damping: 22, stiffness: 200, delay: index * 0.07 } 
      }
    };
  }

  return (
    <motion.div
      layout="position"
      variants={variants}
      initial="hidden"
      animate={isScattering ? "visible" : "hidden"}
      transition={{
        layout: { duration: 0.44, ease: [0.22, 1, 0.36, 1] },
      }}
      className="relative w-full z-10"
      style={{ originX: 0.5, originY: 0.5 }}
    >
      <motion.div 
        onClick={() => setIsExpanded(prev => !prev)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={!cardExpanded ? { y: -3, transition: { duration: 0.25, ease: "easeOut" } } : {}}
        whileTap={{ scale: 0.985 }}
        className={`w-full bg-white rounded-[18px] border cursor-pointer select-none overflow-hidden transition-all duration-300 ease-out ${
          cardExpanded 
            ? 'shadow-[0_16px_36px_rgba(0,49,53,0.08)] border-cyan-200/90 ring-1 ring-cyan-100 z-30' 
            : 'shadow-[0_2px_12px_rgba(0,0,0,0.04)] border-slate-100 hover:border-slate-200 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] z-10'
        }`}
      >
        {/* Top Color Accent Border Line - Visible on every card */}
        <div 
          style={{ background: colorTheme.accentGradient }}
          className={`w-full transition-all duration-300 ${
            cardExpanded ? 'h-[4px] opacity-100' : 'h-[3px] opacity-95'
          }`} 
        />
        
        <div className="px-5 py-5 flex flex-col items-start relative">
          
          <div className="flex items-center gap-4 w-full">
            {/* Icon - Wheel Spin Animation on Hover & Open */}
            <motion.div 
              animate={{ 
                scale: cardExpanded ? 1.08 : 1,
                rotate: cardExpanded ? 360 : 0 
              }}
              whileHover={{ 
                scale: 1.15,
                rotate: cardExpanded ? 720 : 360,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className={`shrink-0 rounded-full flex items-center justify-center w-12 h-12 ${colorTheme.bg} transition-colors duration-300 shadow-xs cursor-pointer`}
            >
              <Icon className={`${colorTheme.text} w-5 h-5`} />
            </motion.div>

            {/* Title Area */}
            <div className="flex flex-col items-start flex-1 min-w-0">
              <div className="flex items-center justify-between w-full">
                <div className={`inline-block px-2.5 py-0.5 mb-1 rounded-full text-[9px] font-bold text-white tracking-widest ${colorTheme.pillBg}`}>
                  CARD {stage.number}
                </div>
                <motion.div
                  animate={{ rotate: cardExpanded ? 180 : 0 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-colors duration-200 ${cardExpanded ? 'text-[#0FA4AF]' : 'text-slate-400'}`} />
                </motion.div>
              </div>
              <h3 className={`font-bold text-black text-left text-[15px] transition-colors duration-200 ${cardExpanded ? 'text-[#081E52]' : 'text-slate-900'}`}>
                {stage.title}
              </h3>
            </div>
          </div>

          {/* Description Area - Uniform Fixed Height & Justified Left-Right Alignment with Scroll */}
          <AnimatePresence initial={false}>
            {cardExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: 1, 
                  height: 180,
                  transition: {
                    height: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.3, delay: 0.08, ease: "easeOut" }
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  height: 0,
                  transition: {
                    height: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.16, ease: "easeIn" }
                  }
                }}
                className="w-full overflow-hidden"
              >
                <div className="h-[180px] pt-3.5 pb-2 pr-2.5 overflow-y-auto custom-scrollbar">
                  <motion.p 
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.28, delay: 0.06, ease: "easeOut" }}
                    className="text-[12.5px] lg:text-[13px] text-slate-600 font-normal leading-[1.62] text-justify [text-align-last:left] [text-justify:inter-word]"
                  >
                    {stage.description}
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Progressive Connector (Mobile Only) */}
      {isMobile && index < 11 && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={isScattering ? { height: '24px', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ delay: (index * 0.08) + 0.45, duration: 0.3 }}
          className="absolute -bottom-[24px] left-[15%] w-[2px] bg-blue-100 z-0 origin-top"
        >
          <motion.div 
            animate={{ y: [0, 24, 24] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.1 }}
            className="w-[4px] h-[4px] bg-blue-400 rounded-full absolute top-0 -left-[1px]"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

/* =========================================================================
   MOBILE DEALING DECK CARD COMPONENT
   ========================================================================= */
const MobileLifecycleCard = ({ stage, index, phase, colorTheme }) => {
  const Icon = stage.icon;
  const numStr = String(stage.number).padStart(2, '0');
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const isStacked = phase === 'idle' || phase === 'deck-intro';
  const isEven = index % 2 === 1;
  const xOffset = isEven ? 12 : -12;
  
  const stackedRotate = (index % 4 - 1.5) * 5; 
  const stackedX = (index % 3 - 1) * 4;
  const stackedY = index * -2;

  return (
    <motion.div
      layout
      initial={false}
      animate={{
        rotate: isStacked ? stackedRotate : 0,
        x: isStacked ? stackedX : xOffset,
        y: isStacked ? stackedY : 0,
        scale: isStacked ? 0.88 : (isHovered && !isStacked ? 1.02 : 1),
        zIndex: 20 - index,
      }}
      transition={{
        layout: { type: "spring", damping: 22, stiffness: 200, delay: isStacked ? 0 : index * 0.1 },
        default: { duration: 0.3 }
      }}
      className={`w-[95%] max-w-[340px] mx-auto z-10 cursor-pointer select-none ${isStacked ? 'absolute top-[20px]' : 'relative mb-6'}`}
      style={{ originX: 0.5, originY: 0.5 }}
      whileTap={!isStacked ? { scale: 0.95, y: -2 } : {}}
      onClick={() => !isStacked && setIsExpanded(prev => !prev)}
      onHoverStart={() => !isStacked && setIsHovered(true)}
      onHoverEnd={() => !isStacked && setIsHovered(false)}
    >
      <div className={`w-full bg-white rounded-[16px] border border-slate-100 flex flex-col overflow-hidden transition-all duration-300 ${isStacked ? 'shadow-xl' : (isExpanded ? 'shadow-[0_12px_28px_rgba(0,0,0,0.1)] border-blue-200 ring-1 ring-blue-100' : 'shadow-[0_8px_24px_rgba(0,0,0,0.06)]')}`}>
        {/* Top Color Accent Border Line */}
        <div 
          style={{ background: colorTheme.accentGradient }}
          className="w-full h-[4px]" 
        />
        
        <div className="px-5 py-5 flex flex-col items-start relative">
          <div className="flex items-center gap-4 w-full">
            <motion.div 
              animate={{ 
                rotate: isExpanded && !isStacked ? 360 : 0,
                scale: isExpanded && !isStacked ? 1.08 : 1
              }}
              whileHover={{ rotate: 360, transition: { duration: 0.5, ease: "easeOut" } }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className={`shrink-0 rounded-full flex items-center justify-center w-11 h-11 ${colorTheme.bg}`}
            >
              <Icon className={`w-5 h-5 ${colorTheme.text}`} />
            </motion.div>
            <div className="flex flex-col items-start flex-1 min-w-0">
              <div className="flex items-center justify-between w-full">
                <div className={`inline-block px-2.5 py-0.5 mb-1 rounded-full text-[9px] font-bold text-white tracking-widest ${colorTheme.pillBg}`}>
                  CARD {stage.number}
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-blue-600' : ''}`} />
              </div>
              <h3 className="font-bold text-black text-left text-[15px]">
                {stage.title}
              </h3>
            </div>
          </div>
          
          {/* Collapsible description on mobile - Uniform Fixed Height & Justified with Scroll */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: 1, 
                  height: 175,
                  transition: {
                    height: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.3, delay: 0.08, ease: "easeOut" }
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  height: 0,
                  transition: {
                    height: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.16, ease: "easeIn" }
                  }
                }}
                className="w-full overflow-hidden"
              >
                <div className="h-[175px] pt-3.5 pb-2 pr-2.5 overflow-y-auto custom-scrollbar">
                  <p className="text-[12.5px] text-slate-600 font-normal leading-[1.62] text-justify [text-align-last:left] [text-justify:inter-word]">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Mobile Progressive Connector */}
      {!isStacked && index < 11 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: '24px' }}
          transition={{ delay: (index * 0.1) + 0.4, duration: 0.3 }}
          className="absolute -bottom-[24px] left-[15%] w-[2px] bg-blue-100 z-0 origin-top"
        >
          <motion.div 
            animate={{ y: [0, 24, 24] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.1 }}
            className="w-[4px] h-[4px] bg-blue-400 rounded-full absolute top-0 -left-[1px]"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

/* =========================================================================
   MAIN SECTION COMPONENT
   ========================================================================= */
const ProductDevelopmentLifecycle = ({ onClose }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px" });
  
  const [phase, setPhase] = useState('idle');
  const [numCols, setNumCols] = useState(4);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const handleBack = () => {
    if (onClose) {
      onClose();
    } else {
      window.location.hash = '#product-development-lifecycle';
    }
  };

  const handleHome = () => {
    if (onClose) {
      onClose();
    }
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const updateCols = () => {
      if (window.innerWidth >= 1024) setNumCols(4);
      else if (window.innerWidth >= 768) setNumCols(2);
      else setNumCols(1);
    };
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  useEffect(() => {
    if (!isInView) return;

    // Step 1: Heading (0s) and Description (0.35s) animate in
    // Step 2: Central deck is ready
    setPhase('deck-intro');

    // Step 3: Cards burst out from center deck (at 900ms)
    const t1 = setTimeout(() => {
      setPhase('scattering');
    }, 900);

    // Step 4: After cards land, central deck disappears completely (at 2200ms)
    const t2 = setTimeout(() => {
      setPhase('settled');
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative w-full pt-4 md:pt-8 pb-20 bg-[#F8FAFC] overflow-hidden text-[#0F172A] font-sans">
      
      {/* Self-contained CSS styles (Migrated from index.css) */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .custom-scrollbar::-webkit-scrollbar-button:single-button:vertical:decrement {
          height: 9px;
          background-position: center bottom 2px;
          background-repeat: no-repeat;
          background-size: 6px 4px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 6' fill='%2394a3b8'%3E%3Cpath d='M4 1L0 5h8z'/%3E%3C/svg%3E");
        }
        .custom-scrollbar::-webkit-scrollbar-button:single-button:vertical:increment {
          height: 9px;
          background-position: center top 2px;
          background-repeat: no-repeat;
          background-size: 6px 4px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 6' fill='%2394a3b8'%3E%3Cpath d='M4 5L0 1h8z'/%3E%3C/svg%3E");
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent;
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #ffffff;
          color: #0f172a;
        }
      `}</style>
      
      {/* Soft Background Globs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[0%] w-[40%] h-[40%] bg-purple-100/40 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[50%] bg-cyan-100/30 rounded-full blur-[100px]" />
        
        {/* Mobile Subtle Deck Background Glow */}
        <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-200/40 rounded-full blur-[80px] z-0 md:hidden" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        
        {/* Top Header Navigation buttons for standalone page view */}
        <div className="flex items-center justify-start gap-3 mb-6">
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

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[30px] md:text-[36px] lg:text-[48px] font-black tracking-tight mb-12 text-[#081E52] leading-[1.1]"
          >
            {introData.heading}
          </motion.h2>

          {/* Elegant Boxless Intro Area */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="w-full max-w-[1240px] flex flex-col md:flex-row items-stretch gap-10 md:gap-16 text-left relative mt-4"
          >
             {/* Left Column */}
             <div className="flex-1 flex flex-col items-start">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-full bg-blue-100/80 flex items-center justify-center shrink-0 shadow-sm">
                     <Lightbulb className="w-5 h-5 text-blue-600" />
                   </div>
                   <span className="text-[13px] font-black text-slate-800 tracking-[0.1em] uppercase">{introData.leftColumn.title}</span>
                 </div>
                 <p className="text-[#0FA4AF] text-[14px] md:text-[15px] lg:text-[16px] leading-[1.75] font-medium text-left">
                   {introData.leftColumn.description}
                 </p>
             </div>
             
             {/* Subtle Animated Divider (Desktop Only) */}
             <div className="hidden md:block w-px min-h-[110px] absolute left-1/2 -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-300 to-transparent">
               <motion.div 
                 animate={{ y: [0, 110, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                 className="w-full h-8 bg-blue-400 blur-[2px] opacity-40 rounded-full"
               />
             </div>
             
             {/* Right Column */}
             <div className="flex-1 flex flex-col items-start">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-full bg-cyan-100/80 flex items-center justify-center shrink-0 shadow-sm">
                     <Target className="w-5 h-5 text-cyan-600" />
                   </div>
                   <span className="text-[13px] font-black text-slate-800 tracking-[0.1em] uppercase">{introData.rightColumn.title}</span>
                 </div>
                 <p className="text-[#0FA4AF] text-[14px] md:text-[15px] lg:text-[16px] leading-[1.75] font-medium text-left">
                   {introData.rightColumn.description}
                 </p>
             </div>
          </motion.div>
        </div>

        {/* Grid and Scatter Area */}
        <div className="relative w-full mt-8 md:mt-10 lg:mt-24">
          <LayoutGroup id="lifecycle-masonry">
            {numCols > 1 ? (
              /* =======================================
                 DESKTOP & TABLET LAYOUT (MASONRY SCATTER)
                 ======================================= */
              <>
                {/* Temporary Central Deck: cards deal out from here, then it dissolves away */}
                <AnimatePresence>
                  {(phase === 'deck-intro' || phase === 'scattering') && (
                    <motion.div 
                      key="central-deck"
                      initial={{ opacity: 0, y: 30, scale: 0.85 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        rotate: [0, -3, 2, 0], 
                        transition: { duration: 0.5, ease: "easeOut" }
                      }}
                      exit={{ opacity: 0, scale: 0.7, transition: { duration: 0.5, ease: "easeInOut" } }}
                      className="flex absolute top-[10px] lg:top-[150px] left-1/2 -translate-x-1/2 w-[90px] lg:w-[160px] h-[120px] lg:h-[220px] z-[60] items-center justify-center pointer-events-none"
                    >
                      <div className="absolute inset-0 bg-white rounded-[16px] border border-slate-200 rotate-6 translate-x-3 translate-y-2 -z-10 shadow-md" />
                      <div className="absolute inset-0 bg-white rounded-[16px] border border-slate-200 -rotate-3 -translate-x-2 translate-y-1 -z-20 shadow-md" />
                      <div className="absolute inset-0 bg-white rounded-[16px] border border-blue-100 shadow-xl flex flex-col items-center justify-center p-4">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                          <Box className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                        </div>
                        <div className="font-black text-slate-800 text-lg lg:text-xl tracking-tight">12</div>
                        <div className="text-slate-400 font-semibold text-[10px] lg:text-xs uppercase tracking-wider">Cards</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Unified Row-Aligned Grid Layout - All cards in the line shift down together */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10 items-start">
                  {stages.map((stage, i) => (
                    <LifecycleCard 
                      key={stage.number} 
                      stage={stage} 
                      index={i} 
                      isScattering={phase === 'scattering' || phase === 'settled'}
                      colorTheme={themes[i % themes.length]}
                      numCols={numCols}
                    />
                  ))}
                </div>
              </>
            ) : (
              /* =======================================
                 MOBILE LAYOUT (PERFECT DEALING DECK)
                 ======================================= */
              <div className="relative w-full flex flex-col items-center pt-[40px] min-h-[1200px]">
                 
                 {/* The 12 Dynamic Cards that deal out from under the cover */}
                 {stages.map((stage, i) => (
                   <MobileLifecycleCard 
                      key={stage.number}
                      stage={stage}
                      index={i}
                      phase={phase}
                      colorTheme={themes[i % themes.length]}
                   />
                 ))}
              </div>
            )}
          </LayoutGroup>
        </div>
      </div>
    </section>
  );
};

export default ProductDevelopmentLifecycle;
