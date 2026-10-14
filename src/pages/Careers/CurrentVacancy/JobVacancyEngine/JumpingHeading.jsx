import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Advanced Letter-by-Letter Jumping Heading Animation
 * 
 * Cinematic kinetic typography:
 * Words animate in reverse order:
 * "Portal" letters first, then preceding word(s) letters (e.g. "Part-Time", "Internship", "Full-Time", "Job Vacancy").
 * 
 * Each character launches from the right along a curved arc over
 * already positioned letters, landing with physics-based squash & stretch.
 * Finally, the complete heading executes a subtle unifying celebratory bounce.
 */

// Timing constants (in seconds)
const INITIAL_DELAY = 0.30; // 300ms initial delay
const STEP_DELAY = 0.15;    // 150ms between letter launches
const JUMP_DURATION = 0.65; // 650ms per jump

export default function JumpingHeading({ title = 'Job Vacancy', className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  // Programmatic Word Configuration based on title prop
  const wordsConfig = useMemo(() => {
    if (title === 'Part-Time') {
      return [
        { id: 'part-time', text: 'Part-Time', isGradient: false },
        { id: 'portal', text: 'Portal', isGradient: true },
      ];
    }
    if (title === 'Full-Time') {
      return [
        { id: 'full-time', text: 'Full-Time', isGradient: false },
        { id: 'portal', text: 'Portal', isGradient: true },
      ];
    }
    if (title === 'Remote Job') {
      return [
        { id: 'remote', text: 'Remote', isGradient: false },
        { id: 'job', text: 'Job', isGradient: false },
        { id: 'portal', text: 'Portal', isGradient: true },
      ];
    }
    if (title === 'Internship') {
      return [
        { id: 'internship', text: 'Internship', isGradient: false },
        { id: 'portal', text: 'Portal', isGradient: true },
      ];
    }
    // Default / Job Vacancy: split words
    const parts = title.split(' ');
    const list = parts.map((part, idx) => ({
      id: `title-word-${idx}`,
      text: part,
      isGradient: false,
    }));
    list.push({ id: 'portal', text: 'Portal', isGradient: true });
    return list;
  }, [title]);

  // Animation sequence: Portal animates first, then preceding words
  const animationWordOrder = useMemo(() => {
    return wordsConfig.map((_, i) => i).reverse();
  }, [wordsConfig]);

  // Programmatically calculate the reverse character sequence and step indices
  const { letterMetadata, totalLetters, finalBounceDelay } = useMemo(() => {
    let step = 0;
    const metaMap = new Map();

    for (const wIdx of animationWordOrder) {
      const wordText = wordsConfig[wIdx].text;
      // Animate from last character to first character (reverse)
      for (let cIdx = wordText.length - 1; cIdx >= 0; cIdx--) {
        const lettersToRight = wordText.length - 1 - cIdx;

        // Curved physics trajectory calculations
        // The further from the right, the further the launch point and higher the jump
        const startX = 50 + lettersToRight * 30; // px
        const jumpApexY = -(40 + lettersToRight * 7); // px
        const zIndex = 30 + lettersToRight; // ensures leaping over previous letters

        metaMap.set(`${wIdx}-${cIdx}`, {
          step,
          delay: INITIAL_DELAY + step * STEP_DELAY,
          startX,
          jumpApexY,
          zIndex,
        });

        step++;
      }
    }

    const total = step;
    const lastLetterFinish = INITIAL_DELAY + (total - 1) * STEP_DELAY + JUMP_DURATION;
    const finalBounceDelay = lastLetterFinish + 0.12;

    return {
      letterMetadata: metaMap,
      totalLetters: total,
      finalBounceDelay,
    };
  }, [wordsConfig, animationWordOrder]);

  // Static fallback if user prefers reduced motion
  if (shouldReduceMotion) {
    return (
      <h1
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1F4D] leading-[1.18] max-w-3xl ${className}`}
      >
        {title}{' '}
        <span className="bg-gradient-to-r from-[#173B78] via-[#6D28D9] to-[#0B1F4D] bg-clip-text text-transparent">
          Portal
        </span>
      </h1>
    );
  }

  return (
    <motion.h1
      aria-label={`${title} Portal`}
      initial={{ opacity: 1 }}
      animate={{
        y: [0, 0, -6, 2, 0],
        scale: [1, 1, 1.025, 0.99, 1],
      }}
      transition={{
        delay: finalBounceDelay,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1F4D] leading-[1.18] max-w-3xl select-none ${className}`}
    >
      <span className="inline-flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3.5">
        {wordsConfig.map((wordConfig, wIdx) => {
          const isWordGradient = wordConfig.isGradient;

          return (
            <span
              key={wordConfig.id}
              className="relative inline-block whitespace-nowrap overflow-visible py-1"
            >
              {wordConfig.text.split('').map((char, cIdx) => {
                const meta = letterMetadata.get(`${wIdx}-${cIdx}`) || {
                  delay: 0,
                  startX: 50,
                  jumpApexY: -40,
                  zIndex: 20,
                };

                return (
                  <motion.span
                    key={`${wordConfig.id}-${cIdx}-${char}`}
                    initial={{
                      opacity: 0,
                      x: meta.startX,
                      y: 12,
                      scaleX: 1.15,
                      scaleY: 0.85,
                      rotate: 15,
                      filter: 'drop-shadow(0 0 14px rgba(109,40,217,0.75))',
                    }}
                    animate={{
                      opacity: [0, 1, 1, 1, 1],
                      x: [meta.startX, meta.startX * 0.45, 0, -2, 0],
                      y: [12, meta.jumpApexY, 2, -4, 0],
                      scaleX: [1.15, 0.92, 1.12, 0.98, 1],
                      scaleY: [0.85, 1.18, 0.88, 1.04, 1],
                      rotate: [15, 4, -3, 1, 0],
                      filter: [
                        'drop-shadow(0 0 14px rgba(109,40,217,0.75))',
                        'drop-shadow(0 0 16px rgba(23,59,120,0.65))',
                        'drop-shadow(0 0 8px rgba(109,40,217,0.35))',
                        'drop-shadow(0 0 0px rgba(109,40,217,0))',
                        'drop-shadow(0 0 0px rgba(109,40,217,0))',
                      ],
                    }}
                    transition={{
                      duration: JUMP_DURATION,
                      delay: meta.delay,
                      times: [0, 0.44, 0.78, 0.92, 1],
                      ease: ['easeOut', 'easeInOut', 'easeIn', 'easeOut'],
                    }}
                    style={{
                      zIndex: meta.zIndex,
                    }}
                    className={`relative inline-block will-change-transform ${
                      isWordGradient
                        ? 'bg-gradient-to-r from-[#173B78] via-[#6D28D9] to-[#0B1F4D] bg-clip-text text-transparent'
                        : 'text-[#0B1F4D]'
                    }`}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          );
        })}
      </span>
    </motion.h1>
  );
}
