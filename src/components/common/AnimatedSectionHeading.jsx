import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * AnimatedSectionHeading
 * 
 * Implements the "Letter Emerging / Character Build" animation exclusively
 * for section headings.
 * 
 * Animation Mechanics:
 * - Character 0 appears and scales up from small origin (0.08 -> 1).
 * - Each subsequent character originates at the position of the previous character
 *   (x: -0.75em, scale: 0.08, opacity: 0), appearing to emerge directly OUT OF the
 *   previous letter, while simultaneously scaling up to 1 and sliding to its final slot (x: 0em).
 * - Multi-word headings are wrapped word-by-word with normal space preservation,
 *   preventing odd wrapping breaks on responsive viewports.
 * - Screen-reader friendly: root has aria-label with the full heading text.
 */
export default function AnimatedSectionHeading({
  text,
  children,
  as = 'h2',
  className = '',
  style,
  highlightWords = [],
  highlightClassName = 'text-[#D4AF37]',
  viewport = { once: true, amount: 0.05, margin: '150px 0px 50px 0px' },
  priority = false,
  stagger,
  charDuration = 0.38,
  delay = 0.08,
  id,
}) {
  const reduceMotion = useReducedMotion();

  // Extract clean plain text from prop or children
  const rawText = useMemo(() => {
    if (typeof text === 'string') return text;
    if (typeof children === 'string') return children;
    if (Array.isArray(children)) {
      return children
        .map((child) => (typeof child === 'string' ? child : ''))
        .join('');
    }
    return '';
  }, [text, children]);

  // Decode HTML entities if present (e.g. &amp; -> &)
  const decodedText = useMemo(() => {
    return rawText
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  }, [rawText]);

  // Split into words
  const words = useMemo(() => {
    return decodedText.split(' ').filter(Boolean);
  }, [decodedText]);

  // Total printable character count
  const totalChars = useMemo(() => {
    return decodedText.replace(/\s+/g, '').length;
  }, [decodedText]);

  // Dynamically calculate premium stagger speed so longer headings remain snappy
  const activeStagger = useMemo(() => {
    if (typeof stagger === 'number') return stagger;
    if (totalChars <= 15) return 0.065; // ~0.8s total cascade for short headings
    if (totalChars <= 28) return 0.048; // ~1.2s total cascade for medium headings
    return 0.038; // ~1.5s total cascade for long headings
  }, [stagger, totalChars]);

  // Container variants with stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : activeStagger,
        delayChildren: reduceMotion ? 0 : delay,
      },
    },
  };

  // Character variants: emerge from previous character
  const charVariants = {
    hidden: (isFirst) => ({
      opacity: reduceMotion ? 1 : 0,
      scale: reduceMotion ? 1 : 0.08,
      x: reduceMotion ? '0em' : isFirst ? '0em' : '-0.75em',
      transformOrigin: 'left center',
    }),
    visible: {
      opacity: 1,
      scale: 1,
      x: '0em',
      transition: {
        duration: reduceMotion ? 0.01 : charDuration,
        ease: [0.22, 1, 0.36, 1], // smooth ease-out curve with subtle natural settle
      },
    },
  };

  const Component = motion[as] || motion.h2;

  return (
    <Component
      id={id}
      className={className}
      style={style}
      aria-label={decodedText}
      initial={priority || reduceMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={viewport}
      variants={containerVariants}
    >
      <span className="sr-only">{decodedText}</span>
      <span aria-hidden="true" className="inline">
        {words.map((word, wordIdx) => {
          // Check if this word should receive custom highlight styling
          const isHighlighted = highlightWords.some(
            (hw) => hw.toLowerCase() === word.toLowerCase()
          );

          const wordChars = word.split('');

          return (
            <React.Fragment key={`word-${wordIdx}`}>
              <span
                className={`inline-block whitespace-nowrap ${isHighlighted ? highlightClassName : ''
                  }`}
              >
                {wordChars.map((char, charInWordIdx) => {
                  const isFirstChar = wordIdx === 0 && charInWordIdx === 0;

                  return (
                    <motion.span
                      key={`char-${wordIdx}-${charInWordIdx}`}
                      custom={isFirstChar}
                      variants={charVariants}
                      className="inline-block will-change-transform"
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
              {/* Insert space between words */}
              {wordIdx < words.length - 1 && (
                <span className="inline-block select-none">&nbsp;</span>
              )}
            </React.Fragment>
          );
        })}
      </span>
    </Component>
  );
}
