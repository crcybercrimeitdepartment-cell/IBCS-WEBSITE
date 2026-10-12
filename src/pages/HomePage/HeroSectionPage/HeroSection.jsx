import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from './HeroSectionData';

const AUTOPLAY_DELAY = 6500;

const slideThemes = [
  // Slide 0: Digital Infrastructure Protection (Cyan / Cyber Blue)
  {
    accentHex: '#00f0ff',
    eyebrowColor: 'text-cyan-400',
    badgeBg: 'bg-cyan-950/80 border-cyan-400/50 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.3)]',
    gradientTitle: 'from-white via-cyan-100 to-cyan-400',
    descColor: 'text-cyan-100/90',
    glowColor: 'rgba(0, 240, 255, 0.85)',
    boxShadow: '0 0 50px rgba(0, 240, 255, 0.9), 0 0 100px rgba(0, 114, 206, 0.65)',
    accentBorder: 'border-cyan-400/40',
    accentText: 'text-cyan-400',
  },
  // Slide 1: Threat Detection & Response (Crimson / Flame Rose)
  {
    accentHex: '#ff3b5c',
    eyebrowColor: 'text-rose-400',
    badgeBg: 'bg-rose-950/80 border-rose-400/50 text-rose-300 shadow-[0_0_20px_rgba(255,59,92,0.3)]',
    gradientTitle: 'from-white via-rose-100 to-rose-400',
    descColor: 'text-rose-100/90',
    glowColor: 'rgba(255, 59, 92, 0.85)',
    boxShadow: '0 0 50px rgba(255, 59, 92, 0.9), 0 0 100px rgba(225, 29, 72, 0.65)',
    accentBorder: 'border-rose-400/40',
    accentText: 'text-rose-400',
  },
  // Slide 2: Secure Software Solutions (Neon Mint / Emerald)
  {
    accentHex: '#00ff9d',
    eyebrowColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-950/80 border-emerald-400/50 text-emerald-300 shadow-[0_0_20px_rgba(0,255,157,0.3)]',
    gradientTitle: 'from-white via-emerald-100 to-emerald-400',
    descColor: 'text-emerald-100/90',
    glowColor: 'rgba(0, 255, 157, 0.85)',
    boxShadow: '0 0 50px rgba(0, 255, 157, 0.9), 0 0 100px rgba(16, 185, 129, 0.65)',
    accentBorder: 'border-emerald-400/40',
    accentText: 'text-emerald-400',
  },
  // Slide 3: Cybersecurity Products (Electric Gold / Amber)
  {
    accentHex: '#ffb703',
    eyebrowColor: 'text-amber-400',
    badgeBg: 'bg-amber-950/80 border-amber-400/50 text-amber-300 shadow-[0_0_20px_rgba(255,183,3,0.3)]',
    gradientTitle: 'from-white via-amber-100 to-amber-400',
    descColor: 'text-amber-100/90',
    glowColor: 'rgba(255, 183, 3, 0.85)',
    boxShadow: '0 0 50px rgba(255, 183, 3, 0.9), 0 0 100px rgba(245, 158, 11, 0.65)',
    accentBorder: 'border-amber-400/40',
    accentText: 'text-amber-400',
  },
  // Slide 4: Global Enterprise Security Solutions (Indigo / Royal Violet)
  {
    accentHex: '#818cf8',
    eyebrowColor: 'text-indigo-400',
    badgeBg: 'bg-indigo-950/80 border-indigo-400/50 text-indigo-300 shadow-[0_0_20px_rgba(129,140,248,0.3)]',
    gradientTitle: 'from-white via-indigo-100 to-indigo-400',
    descColor: 'text-indigo-100/90',
    glowColor: 'rgba(129, 140, 248, 0.85)',
    boxShadow: '0 0 50px rgba(129, 140, 248, 0.9), 0 0 100px rgba(99, 102, 241, 0.65)',
    accentBorder: 'border-indigo-400/40',
    accentText: 'text-indigo-400',
  },
  // Slide 5: Cloud and Data Protection (Sky Blue / Azure)
  {
    accentHex: '#38bdf8',
    eyebrowColor: 'text-sky-400',
    badgeBg: 'bg-sky-950/80 border-sky-400/50 text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.3)]',
    gradientTitle: 'from-white via-sky-100 to-sky-400',
    descColor: 'text-sky-100/90',
    glowColor: 'rgba(56, 189, 248, 0.85)',
    boxShadow: '0 0 50px rgba(56, 189, 248, 0.9), 0 0 100px rgba(14, 165, 233, 0.65)',
    accentBorder: 'border-sky-400/40',
    accentText: 'text-sky-400',
  },
  // Slide 6: Secure Remote Access Solutions (Purple / Fuchsia)
  {
    accentHex: '#c084fc',
    eyebrowColor: 'text-purple-400',
    badgeBg: 'bg-purple-950/80 border-purple-400/50 text-purple-300 shadow-[0_0_20px_rgba(192,132,252,0.3)]',
    gradientTitle: 'from-white via-purple-100 to-purple-400',
    descColor: 'text-purple-100/90',
    glowColor: 'rgba(192, 132, 252, 0.85)',
    boxShadow: '0 0 50px rgba(192, 132, 252, 0.9), 0 0 100px rgba(168, 85, 247, 0.65)',
    accentBorder: 'border-purple-400/40',
    accentText: 'text-purple-400',
  },
];

export function HeroSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const touchStart = useRef(null);
  const reduceMotion = useReducedMotion();

  const activeIndex = ((page % heroSlides.length) + heroSlides.length) % heroSlides.length;
  const activeSlide = heroSlides[activeIndex];
  const activeTheme = slideThemes[activeIndex % slideThemes.length];

  const paginate = useCallback((newDirection) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  const goTo = useCallback((targetIndex) => {
    setPage(([prevPage]) => {
      const currentNorm = ((prevPage % heroSlides.length) + heroSlides.length) % heroSlides.length;
      let diff = targetIndex - currentNorm;
      if (diff === 0) return [prevPage, 0];
      return [prevPage + diff, diff > 0 ? 1 : -1];
    });
  }, []);

  const nextSlide = useCallback(() => paginate(1), [paginate]);
  const previousSlide = useCallback(() => paginate(-1), [paginate]);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = window.setInterval(nextSlide, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [nextSlide, reduceMotion]);

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') nextSlide();
    if (event.key === 'ArrowLeft') previousSlide();
  };

  const onTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = touchStart.current - event.changedTouches[0].clientX;
    if (Math.abs(distance) > 48) distance > 0 ? nextSlide() : previousSlide();
    touchStart.current = null;
  };

  const getDirectionalConfig = useCallback((pageVal, dirVal) => {
    const isForward = dirVal >= 0;
    // 7 distinct pairs:
    // Image comes from one side, and Text comes from the OPPOSITE side:
    const SLIDE_DIRECTIONS = [
      // Slide 0: Image from Left (-100vw) <---> Text from Right (+100vw)
      {
        imageEnter: { x: '-100vw', y: '0%' },
        imageExit: { x: '100vw', y: '0%' },
        textEnter: { x: '100vw', y: '0%' },
        textExit: { x: '-100vw', y: '0%' },
        wordOffset: { x: 30, y: 0 },
      },
      // Slide 1: Image from Right (+100vw) <---> Text from Left (-100vw)
      {
        imageEnter: { x: '100vw', y: '0%' },
        imageExit: { x: '-100vw', y: '0%' },
        textEnter: { x: '-100vw', y: '0%' },
        textExit: { x: '100vw', y: '0%' },
        wordOffset: { x: -30, y: 0 },
      },
      // Slide 2: Image from Top (-100vh) <---> Text from Bottom (+100vh)
      {
        imageEnter: { x: '0%', y: '-100vh' },
        imageExit: { x: '0%', y: '100vh' },
        textEnter: { x: '0%', y: '100vh' },
        textExit: { x: '0%', y: '-100vh' },
        wordOffset: { x: 0, y: 30 },
      },
      // Slide 3: Image from Bottom (+100vh) <---> Text from Top (-100vh)
      {
        imageEnter: { x: '0%', y: '100vh' },
        imageExit: { x: '0%', y: '-100vh' },
        textEnter: { x: '0%', y: '-100vh' },
        textExit: { x: '0%', y: '100vh' },
        wordOffset: { x: 0, y: -30 },
      },
      // Slide 4: Image from Top-Left (-100vw, -100vh) <---> Text from Bottom-Right (+100vw, +100vh)
      {
        imageEnter: { x: '-100vw', y: '-100vh' },
        imageExit: { x: '100vw', y: '100vh' },
        textEnter: { x: '100vw', y: '100vh' },
        textExit: { x: '-100vw', y: '-100vh' },
        wordOffset: { x: 25, y: 25 },
      },
      // Slide 5: Image from Top-Right (+100vw, -100vh) <---> Text from Bottom-Left (-100vw, +100vh)
      {
        imageEnter: { x: '100vw', y: '-100vh' },
        imageExit: { x: '-100vw', y: '100vh' },
        textEnter: { x: '-100vw', y: '100vh' },
        textExit: { x: '100vw', y: '-100vh' },
        wordOffset: { x: -25, y: 25 },
      },
      // Slide 6: Image from Bottom-Left (-100vw, +100vh) <---> Text from Top-Right (+100vw, -100vh)
      {
        imageEnter: { x: '-100vw', y: '100vh' },
        imageExit: { x: '100vw', y: '-100vh' },
        textEnter: { x: '100vw', y: '-100vh' },
        textExit: { x: '-100vw', y: '100vh' },
        wordOffset: { x: 25, y: -25 },
      },
    ];

    const cycle = ((Math.floor(pageVal) % SLIDE_DIRECTIONS.length) + SLIDE_DIRECTIONS.length) % SLIDE_DIRECTIONS.length;
    const currentPair = SLIDE_DIRECTIONS[cycle];

    const wordOffset = isForward
      ? currentPair.wordOffset
      : { x: -currentPair.wordOffset.x, y: -currentPair.wordOffset.y };

    return {
      imageEnter: isForward ? currentPair.imageEnter : currentPair.imageExit,
      imageExit: isForward ? currentPair.imageExit : currentPair.imageEnter,
      textEnter: isForward ? currentPair.textEnter : currentPair.textExit,
      textExit: isForward ? currentPair.textExit : currentPair.textEnter,
      wordOffset,
    };
  }, []);

  const slideForPage = useCallback((pageVal, dirVal) => {
    const idx = ((Math.floor(pageVal) % heroSlides.length) + heroSlides.length) % heroSlides.length;
    const dirConfig = getDirectionalConfig(pageVal, dirVal ?? direction);
    return {
      slide: heroSlides[idx],
      theme: slideThemes[idx % slideThemes.length],
      wordOffset: dirConfig.wordOffset,
    };
  }, [getDirectionalConfig, direction]);

  const imageVariants = {
    enter: (custom) => {
      const { imageEnter } = getDirectionalConfig(custom?.page ?? page, custom?.dir ?? direction);
      const theme = slideThemes[((Math.floor(custom?.page ?? page) % slideThemes.length) + slideThemes.length) % slideThemes.length];
      return {
        x: imageEnter.x,
        y: imageEnter.y,
        scale: 0.15,
        opacity: 0.85,
        borderRadius: '36px',
        borderWidth: '2px',
        borderColor: theme.glowColor,
        boxShadow: theme.boxShadow,
        filter: 'brightness(1.25)',
      };
    },
    center: {
      zIndex: 1,
      x: '0%',
      y: '0%',
      scale: 1,
      opacity: 1,
      borderRadius: '0px',
      borderWidth: '0px',
      borderColor: 'rgba(0, 0, 0, 0)',
      boxShadow: '0 0 0px rgba(0, 0, 0, 0)',
      filter: 'brightness(1)',
      transition: {
        x: { duration: reduceMotion ? 0.01 : 1.1, ease: [0.16, 1, 0.3, 1] },
        y: { duration: reduceMotion ? 0.01 : 1.1, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: reduceMotion ? 0.01 : 1.1, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: reduceMotion ? 0.01 : 0.95, ease: 'easeInOut' },
        borderRadius: { duration: reduceMotion ? 0.01 : 1.0, ease: [0.16, 1, 0.3, 1] },
        borderWidth: { duration: reduceMotion ? 0.01 : 0.7 },
        borderColor: { duration: reduceMotion ? 0.01 : 0.7 },
        boxShadow: { duration: reduceMotion ? 0.01 : 0.9 },
      },
    },
    exit: (custom) => {
      const { imageExit } = getDirectionalConfig(custom?.page ?? page, custom?.dir ?? direction);
      const theme = slideThemes[((Math.floor(custom?.page ?? page) % slideThemes.length) + slideThemes.length) % slideThemes.length];
      return {
        zIndex: 0,
        x: imageExit.x,
        y: imageExit.y,
        scale: 0.15,
        opacity: 0,
        borderRadius: '36px',
        borderWidth: '2px',
        borderColor: theme.glowColor,
        boxShadow: theme.boxShadow,
        filter: 'brightness(1.25)',
        transition: {
          x: { duration: reduceMotion ? 0.01 : 0.85, ease: [0.16, 1, 0.3, 1] },
          y: { duration: reduceMotion ? 0.01 : 0.85, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: reduceMotion ? 0.01 : 0.85, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: reduceMotion ? 0.01 : 0.85, ease: 'easeInOut' },
          borderRadius: { duration: reduceMotion ? 0.01 : 0.85, ease: [0.16, 1, 0.3, 1] },
          borderWidth: { duration: reduceMotion ? 0.01 : 0.6 },
          borderColor: { duration: reduceMotion ? 0.01 : 0.6 },
          boxShadow: { duration: reduceMotion ? 0.01 : 0.8 },
        },
      };
    },
  };

  const textVariants = {
    enter: (custom) => {
      const { textEnter } = getDirectionalConfig(custom?.page ?? page, custom?.dir ?? direction);
      return {
        x: textEnter.x,
        y: textEnter.y,
        opacity: 0,
        filter: 'blur(8px)',
      };
    },
    center: {
      zIndex: 10,
      x: '0%',
      y: '0%',
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        x: { duration: reduceMotion ? 0.01 : 0.75, delay: reduceMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] },
        y: { duration: reduceMotion ? 0.01 : 0.75, delay: reduceMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: reduceMotion ? 0.01 : 0.65, delay: reduceMotion ? 0 : 0.25, ease: 'easeOut' },
        filter: { duration: reduceMotion ? 0.01 : 0.65, delay: reduceMotion ? 0 : 0.25, ease: 'easeOut' },
      },
    },
    exit: (custom) => {
      const { textExit } = getDirectionalConfig(custom?.page ?? page, custom?.dir ?? direction);
      return {
        zIndex: 0,
        x: textExit.x,
        y: textExit.y,
        opacity: 0,
        filter: 'blur(8px)',
        transition: {
          x: { duration: reduceMotion ? 0.01 : 0.75, ease: [0.16, 1, 0.3, 1] },
          y: { duration: reduceMotion ? 0.01 : 0.75, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: reduceMotion ? 0.01 : 0.7, ease: 'easeIn' },
          filter: { duration: reduceMotion ? 0.01 : 0.7 },
        },
      };
    },
  };

  const customTransitionProps = { page, dir: direction };

  return (
    <section id="featured-technology" className="scroll-mt-20 bg-brand-navy" aria-label="Featured technology stories">
      <div className="w-full">
        <div
          onKeyDown={onKeyDown}
          onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
          onTouchEnd={onTouchEnd}
          tabIndex="0"
          className="relative overflow-hidden border-b border-brand-cyan/20 bg-brand-navy select-none focus:outline-none"
        >
          <div className="relative h-[calc(100vh-80px)] sm:h-[calc(100vh-92px)] min-h-[480px]">
            {/* Background Image Layer (Enters first from imageEnter) */}
            <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
              <AnimatePresence initial={false} custom={customTransitionProps}>
                {(() => {
                  const currentData = slideForPage(page, direction);
                  return (
                    <motion.div
                      key={page}
                      custom={customTransitionProps}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="absolute inset-0 w-full h-full overflow-hidden origin-center will-change-transform border border-brand-cyan/20 flex items-center justify-center"
                      style={{
                        transformOrigin: 'center center',
                      }}
                    >
                      <img
                        src={currentData.slide.image}
                        alt={currentData.slide.alt || currentData.slide.title}
                        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
                        loading="eager"
                      />
                      {/* Ultra Clear & Vibrant Background Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-brand-navy/10 pointer-events-none" />
                      <div className="absolute inset-0 bg-brand-navy/10 pointer-events-none" />
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>

            {/* Glowing Accent Lines */}
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-brand-cyan/60 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-cyan/60 to-transparent pointer-events-none z-10" />

            {/* Slide Text Layer (Enters from OPPOSITE textEnter sequentially after image completes) */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
              <AnimatePresence initial={false} custom={customTransitionProps}>
                {(() => {
                  const currentData = slideForPage(page, direction);
                  return (
                    <motion.div
                      key={page}
                      custom={customTransitionProps}
                      variants={textVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-6 pb-20 pt-10 text-center sm:px-14 lg:px-20 pointer-events-none will-change-transform"
                    >
                      <div className="mx-auto max-w-4xl w-full flex flex-col items-center justify-center text-center">


                        {/* Heading Themed with Wide Format and Word-by-Word Directional Loading Animation */}
                        <h2
                          className={`font-display text-2xl font-extrabold leading-[1.28] tracking-[-0.03em] xs:text-3xl sm:text-4xl lg:text-5xl my-1.5 pb-2 bg-gradient-to-r ${currentData.theme.gradientTitle} bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] max-w-3xl w-full flex flex-wrap justify-center gap-x-2.5 sm:gap-x-3.5 gap-y-1`}
                        >
                          {currentData.slide.title.split(' ').map((word, wIdx) => (
                            <motion.span
                              key={`${page}-word-${wIdx}`}
                              initial={{ opacity: 0, x: currentData.wordOffset.x, y: currentData.wordOffset.y, filter: 'blur(8px)' }}
                              animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
                              transition={{
                                duration: reduceMotion ? 0.01 : 0.45,
                                delay: reduceMotion ? 0 : 0.35 + wIdx * 0.05,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                              className="inline-block will-change-transform pb-1 pt-0.5"
                            >
                              {word}
                            </motion.span>
                          ))}
                        </h2>

                        {/* Description with Directional Loading Reveal */}
                        <motion.div
                          key={`${page}-desc`}
                          initial={{ opacity: 0, x: currentData.wordOffset.x * 0.6, y: currentData.wordOffset.y * 0.6, filter: 'blur(6px)' }}
                          animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
                          transition={{
                            duration: reduceMotion ? 0.01 : 0.55,
                            delay: reduceMotion ? 0 : 0.65,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="mt-3.5 max-w-2xl mx-auto w-full"
                        >
                          <p className={`text-xs leading-6 sm:text-base sm:leading-7 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] font-normal ${currentData.theme.descColor}`}>
                            {currentData.slide.description}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>

            {/* Glowing Accent Lines */}
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-brand-cyan/60 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-cyan/60 to-transparent pointer-events-none z-10" />

            {/* Left & Right Interactive Navigation Controls */}
            <div className="absolute inset-y-0 left-3 sm:left-6 flex items-center z-20 pointer-events-auto">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  previousSlide();
                }}
                aria-label="Previous Slide"
                style={{ borderColor: `${activeTheme.accentHex}66` }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-navy/60 backdrop-blur-md border text-white hover:text-white hover:bg-white/10 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group shadow-[0_0_15px_rgba(0,0,0,0.5)] focus:outline-none focus-ring"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" style={{ color: activeTheme.accentHex }} />
              </button>
            </div>

            <div className="absolute inset-y-0 right-3 sm:right-6 flex items-center z-20 pointer-events-auto">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                aria-label="Next Slide"
                style={{ borderColor: `${activeTheme.accentHex}66` }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-navy/60 backdrop-blur-md border text-white hover:text-white hover:bg-white/10 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group shadow-[0_0_15px_rgba(0,0,0,0.5)] focus:outline-none focus-ring"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" style={{ color: activeTheme.accentHex }} />
              </button>
            </div>

            {/* Bottom Progress Bar & Dots */}
            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-center sm:bottom-8 sm:left-10 sm:right-10 lg:left-14 lg:right-14 z-20 pointer-events-auto">
              <div className="flex items-center justify-center gap-2" role="tablist" aria-label="Choose featured story">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={activeIndex === index}
                    aria-label={`View slide ${index + 1}: ${slide.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      goTo(index);
                    }}
                    className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-300 focus-ring ${activeIndex === index ? 'w-10 bg-white/30 sm:w-14' : 'w-3 bg-white/35 hover:bg-white/70 sm:w-5'}`}
                  >
                    {activeIndex === index && (
                      <span
                        className={`absolute inset-y-0 left-0 ${!reduceMotion ? 'slider-progress' : 'w-full'}`}
                        style={{ backgroundColor: activeTheme.accentHex }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
