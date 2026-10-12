import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { SKILLS_DATA as DEFAULT_SKILLS_DATA } from './SkillDevelopmentPage.js';

/* ==========================================================================
   1. 3D ICON COMPONENT (All 32 Custom Isometric Tracks)
   ========================================================================== */
export function ThreeDIcon({ id }) {
  const renderIconContent = () => {
    switch (id) {
      // 1. Software Development Training
      case 1:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <defs>
              <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E5C158" />
                <stop offset="100%" stopColor="#007799" />
              </linearGradient>
              <linearGradient id="bracketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#FFF8DC" />
              </linearGradient>
            </defs>
            <rect x="8" y="10" width="48" height="42" rx="10" fill="#002328" stroke="#D4AF37" strokeWidth="2.5" />
            <rect x="8" y="10" width="48" height="12" rx="10" fill="#00373E" />
            <circle cx="16" cy="16" r="2.5" fill="#FF5F56" />
            <circle cx="23" cy="16" r="2.5" fill="#FFBD2E" />
            <circle cx="30" cy="16" r="2.5" fill="#27C93F" />
            <path d="M22 28 L15 35 L22 42" stroke="url(#bracketGrad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M42 28 L49 35 L42 42" stroke="url(#bracketGrad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M35 26 L29 44" stroke="url(#codeGrad)" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          </svg>
        );

      // 2. Software Development Internship
      case 2:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <defs>
              <linearGradient id="lapScreen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#003F47" />
                <stop offset="100%" stopColor="#00181B" />
              </linearGradient>
              <linearGradient id="lapBody" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFF8DC" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
            <rect x="12" y="12" width="40" height="28" rx="5" fill="url(#lapScreen)" stroke="url(#lapBody)" strokeWidth="2" />
            <rect x="16" y="16" width="32" height="20" rx="3" fill="#040A1A" />
            <line x1="20" y1="22" x2="32" y2="22" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="27" x2="40" y2="27" stroke="#FFF8DC" strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="32" x2="28" y2="32" stroke="#FFBD2E" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 44 L58 44 L52 50 L12 50 Z" fill="url(#lapBody)" />
            <rect x="26" y="45" width="12" height="2" rx="1" fill="#081E52" />
          </svg>
        );

      // 3. Information Technology Training
      case 3:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <defs>
              <linearGradient id="serverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#003A40" />
                <stop offset="100%" stopColor="#00181A" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="44" height="12" rx="4" fill="url(#serverGrad)" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="17" cy="16" r="2" fill="#E5C158" />
            <line x1="24" y1="16" x2="48" y2="16" stroke="#FFF8DC" strokeWidth="2" strokeLinecap="round" />
            <rect x="10" y="26" width="44" height="12" rx="4" fill="url(#serverGrad)" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="17" cy="32" r="2" fill="#27C93F" />
            <line x1="24" y1="32" x2="48" y2="32" stroke="#FFF8DC" strokeWidth="2" strokeLinecap="round" />
            <rect x="10" y="42" width="44" height="12" rx="4" fill="url(#serverGrad)" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="17" cy="48" r="2" fill="#FFBD2E" />
            <line x1="24" y1="48" x2="48" y2="48" stroke="#FFF8DC" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      // 4. Information Technology Internship
      case 4:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <rect x="10" y="10" width="44" height="32" rx="6" fill="#002428" stroke="#D4AF37" strokeWidth="2" />
            <rect x="14" y="14" width="36" height="24" rx="4" fill="#001618" />
            <circle cx="32" cy="26" r="7" fill="#003A40" stroke="#D4AF37" strokeWidth="1.5" />
            <path d="M29 26 L31 28 L35 24" stroke="#E5C158" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M28 42 L36 42 L38 52 L26 52 Z" fill="#D4AF37" />
            <rect x="20" y="52" width="24" height="3" rx="1.5" fill="#FFF8DC" />
          </svg>
        );

      // 5. Cybersecurity Training
      case 5:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <defs>
              <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E5C158" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#081E52" />
              </linearGradient>
            </defs>
            <path d="M32 8 L50 16 C50 36 32 52 32 52 C32 52 14 36 14 16 Z" fill="url(#shieldGrad)" stroke="#FFFFFF" strokeWidth="1.5" />
            <path d="M32 14 L44 20 C44 34 32 46 32 46 C32 46 20 34 20 20 Z" fill="#040A1A" />
            <rect x="27" y="27" width="10" height="9" rx="2" fill="#FFF8DC" />
            <path d="M29 27 V23 C29 21.3 30.3 20 32 20 C33.7 20 35 21.3 35 23 V27" stroke="#FFF8DC" strokeWidth="2" fill="none" />
          </svg>
        );

      // 6. Cybersecurity Internship
      case 6:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <defs>
              <linearGradient id="goldLock" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
            <path d="M22 28 V20 C22 14.5 26.5 10 32 10 C37.5 10 42 14.5 42 20 V28" stroke="#E5C158" strokeWidth="5.5" strokeLinecap="round" fill="none" />
            <rect x="16" y="26" width="32" height="26" rx="6" fill="#002D33" stroke="#D4AF37" strokeWidth="2.5" />
            <circle cx="32" cy="37" r="3.5" fill="url(#goldLock)" />
            <polygon points="30,38 34,38 33,45 31,45" fill="url(#goldLock)" />
          </svg>
        );

      // 7. Cyber Crime Investigation Training
      case 7:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <circle cx="28" cy="28" r="16" fill="#002B30" stroke="#D4AF37" strokeWidth="3" />
            <circle cx="28" cy="28" r="12" fill="#00181A" />
            <circle cx="28" cy="28" r="7" stroke="#FF5F56" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
            <path d="M28 18 V38 M18 28 H38" stroke="#FF5F56" strokeWidth="1.5" />
            <line x1="40" y1="40" x2="54" y2="54" stroke="#FFF8DC" strokeWidth="6" strokeLinecap="round" />
            <line x1="40" y1="40" x2="54" y2="54" stroke="#081E52" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );

      // 8. Cyber Crime Investigation Internship
      case 8:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <rect x="14" y="10" width="36" height="44" rx="8" fill="#002226" stroke="#D4AF37" strokeWidth="2" />
            <path d="M32 20 C27 20 23 24 23 29 C23 35 25 41 27 46" stroke="#FFF8DC" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M32 24 C29 24 27 26 27 29 C27 33 29 39 31 43" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M32 28 C32 29 32 30 32 32 C32 36 34 40 35 44" stroke="#E5C158" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M37 25 C39 28 39 32 39 35 C39 39 38 42 37 45" stroke="#FFF8DC" strokeWidth="2" strokeLinecap="round" fill="none" />
            <line x1="12" y1="30" x2="52" y2="30" stroke="#FF5F56" strokeWidth="2" filter="drop-shadow(0 0 4px #FF5F56)" />
          </svg>
        );

      // 9. Digital Forensics Training
      case 9:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <rect x="12" y="10" width="40" height="44" rx="6" fill="#002328" stroke="#D4AF37" strokeWidth="2" />
            <circle cx="32" cy="28" r="14" fill="#003840" stroke="#FFF8DC" strokeWidth="2" />
            <circle cx="32" cy="28" r="4" fill="#E5C158" />
            <line x1="32" y1="28" x2="44" y2="40" stroke="#FF5F56" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="44" cy="40" r="2.5" fill="#FFF8DC" />
            <line x1="16" y1="46" x2="28" y2="46" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      // 10. Digital Forensics Internship
      case 10:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <path d="M12 16 L26 16 L30 22 L52 22 C54.2 22 56 23.8 56 26 L56 48 C56 50.2 54.2 52 52 52 L12 52 C9.8 52 8 50.2 8 48 L8 20 C8 17.8 9.8 16 12 16 Z" fill="#00282E" stroke="#D4AF37" strokeWidth="2" />
            <rect x="16" y="26" width="22" height="18" rx="2" fill="#003B42" />
            <line x1="20" y1="30" x2="30" y2="30" stroke="#FFF8DC" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="20" y1="34" x2="34" y2="34" stroke="#FFF8DC" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="40" cy="38" r="8" fill="#00181A" stroke="#E5C158" strokeWidth="2" />
            <line x1="46" y1="44" x2="52" y2="50" stroke="#E5C158" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );

      // 11. Cyber Threat Intelligence Training
      case 11:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <circle cx="32" cy="32" r="22" fill="#002024" stroke="#D4AF37" strokeWidth="2.5" />
            <circle cx="32" cy="32" r="15" stroke="#003B42" strokeWidth="1.5" fill="none" />
            <circle cx="32" cy="32" r="8" stroke="#003B42" strokeWidth="1.5" fill="none" />
            <path d="M32 32 L47 20 A 22 22 0 0 0 32 10 Z" fill="rgba(0, 229, 255, 0.25)" />
            <line x1="32" y1="32" x2="47" y2="20" stroke="#E5C158" strokeWidth="2" />
            <circle cx="24" cy="22" r="2.5" fill="#FF5F56" />
            <circle cx="40" cy="42" r="2" fill="#FFBD2E" />
          </svg>
        );

      // 12. Cyber Threat Intelligence Internship
      case 12:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <path d="M8 32 C16 18 48 18 56 32 C48 46 16 46 8 32 Z" fill="#002226" stroke="#D4AF37" strokeWidth="2.5" />
            <circle cx="32" cy="32" r="10" fill="#003E47" stroke="#FFF8DC" strokeWidth="1.5" />
            <circle cx="32" cy="32" r="5" fill="#E5C158" />
            <path d="M26 26 H24 V28" stroke="#E5C158" strokeWidth="1.5" fill="none" />
            <path d="M38 26 H40 V28" stroke="#E5C158" strokeWidth="1.5" fill="none" />
            <path d="M26 38 H24 V36" stroke="#E5C158" strokeWidth="1.5" fill="none" />
            <path d="M38 38 H40 V36" stroke="#E5C158" strokeWidth="1.5" fill="none" />
          </svg>
        );

      // 13. Artificial Intelligence & Machine Learning Training
      case 13:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <defs>
              <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E5C158" />
                <stop offset="100%" stopColor="#8A2BE2" />
              </linearGradient>
            </defs>
            <path d="M32 14 C24 14 18 20 18 27 C18 31 20 34 23 36 C21 40 23 46 28 48 C30 49 32 50 32 50 C32 50 34 49 36 48 C41 46 43 40 41 36 C44 34 46 31 46 27 C46 20 40 14 32 14 Z" fill="#00262C" stroke="url(#brainGrad)" strokeWidth="2.5" />
            <circle cx="26" cy="24" r="2.5" fill="#E5C158" />
            <circle cx="38" cy="24" r="2.5" fill="#E5C158" />
            <circle cx="32" cy="32" r="3" fill="#FFFFFF" />
            <circle cx="26" cy="40" r="2.5" fill="#8A2BE2" />
            <circle cx="38" cy="40" r="2.5" fill="#8A2BE2" />
            <line x1="26" y1="24" x2="32" y2="32" stroke="#FFF8DC" strokeWidth="1.5" />
            <line x1="38" y1="24" x2="32" y2="32" stroke="#FFF8DC" strokeWidth="1.5" />
            <line x1="32" y1="32" x2="26" y2="40" stroke="#FFF8DC" strokeWidth="1.5" />
            <line x1="32" y1="32" x2="38" y2="40" stroke="#FFF8DC" strokeWidth="1.5" />
          </svg>
        );

      // 14. Artificial Intelligence & Machine Learning Internship
      case 14:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <rect x="16" y="16" width="32" height="32" rx="6" fill="#00282E" stroke="#D4AF37" strokeWidth="2" />
            <rect x="22" y="22" width="20" height="20" rx="3" fill="#00181A" stroke="#E5C158" strokeWidth="1.5" />
            <text x="32" y="36" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">AI</text>
            <path d="M22 10 V16 M32 10 V16 M42 10 V16 M22 48 V54 M32 48 V54 M42 48 V54 M10 22 H16 M10 32 H16 M10 42 H16 M48 22 H54 M48 32 H54 M48 42 H54" stroke="#FFBD2E" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );

      // 15. Data Science & Analytics Training
      case 15:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <path d="M12 50 H52 M12 50 V14" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
            <rect x="18" y="34" width="7" height="16" rx="2" fill="#003E47" stroke="#FFF8DC" strokeWidth="1" />
            <rect x="29" y="24" width="7" height="26" rx="2" fill="#D4AF37" stroke="#E5C158" strokeWidth="1" />
            <rect x="40" y="14" width="7" height="36" rx="2" fill="#E5C158" stroke="#FFFFFF" strokeWidth="1" />
            <path d="M20 30 L32 18 L44 10" stroke="#FFBD2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <polygon points="44,6 48,10 42,12" fill="#FFBD2E" />
          </svg>
        );

      // 16. Data Science & Analytics Internship
      case 16:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <rect x="10" y="12" width="44" height="40" rx="8" fill="#002328" stroke="#D4AF37" strokeWidth="2" />
            <path d="M16 42 Q 24 24, 32 34 T 48 20" stroke="#E5C158" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="48" cy="20" r="3.5" fill="#FF5F56" />
            <circle cx="22" cy="22" r="5" fill="#003E47" stroke="#FFF8DC" strokeWidth="1.5" />
            <path d="M22 22 L22 17 A 5 5 0 0 1 27 22 Z" fill="#D4AF37" />
          </svg>
        );

      // 17. Web Development Training
      case 17:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <circle cx="32" cy="32" r="20" fill="#00262C" stroke="#D4AF37" strokeWidth="2.5" />
            <ellipse cx="32" cy="32" rx="9" ry="20" stroke="#FFF8DC" strokeWidth="1.5" fill="none" />
            <line x1="12" y1="32" x2="52" y2="32" stroke="#FFF8DC" strokeWidth="1.5" />
            <line x1="16" y1="22" x2="48" y2="22" stroke="#E5C158" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="16" y1="42" x2="48" y2="42" stroke="#E5C158" strokeWidth="1" strokeDasharray="2 2" />
            <rect x="22" y="4" width="20" height="8" rx="2" fill="#D4AF37" />
            <text x="32" y="10.5" fill="#FFFFFF" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">WWW</text>
          </svg>
        );

      // 18. Web Development Internship
      case 18:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <rect x="10" y="10" width="44" height="44" rx="8" fill="#002428" stroke="#D4AF37" strokeWidth="2" />
            <rect x="10" y="10" width="44" height="10" rx="8" fill="#00353C" />
            <circle cx="16" cy="15" r="1.5" fill="#FF5F56" />
            <circle cx="21" cy="15" r="1.5" fill="#FFBD2E" />
            <circle cx="26" cy="15" r="1.5" fill="#27C93F" />
            <rect x="16" y="26" width="14" height="22" rx="3" fill="#003E47" stroke="#FFF8DC" strokeWidth="1" />
            <rect x="34" y="26" width="14" height="10" rx="3" fill="#D4AF37" />
            <rect x="34" y="39" width="14" height="9" rx="3" fill="#E5C158" />
          </svg>
        );

      // 19. Mobile Application Development Training
      case 19:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <rect x="18" y="8" width="28" height="48" rx="7" fill="#002226" stroke="#D4AF37" strokeWidth="2.5" />
            <rect x="21" y="13" width="22" height="38" rx="4" fill="#001517" />
            <rect x="28" y="10.5" width="8" height="2" rx="1" fill="#FFF8DC" />
            <rect x="24" y="18" width="6" height="6" rx="2" fill="#E5C158" />
            <rect x="34" y="18" width="6" height="6" rx="2" fill="#FFBD2E" />
            <rect x="24" y="28" width="6" height="6" rx="2" fill="#27C93F" />
            <rect x="34" y="28" width="6" height="6" rx="2" fill="#FF5F56" />
            <line x1="28" y1="48" x2="36" y2="48" stroke="#FFF8DC" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );

      // 20. Mobile Application Development Internship
      case 20:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <rect x="14" y="12" width="26" height="40" rx="6" fill="#002428" stroke="#D4AF37" strokeWidth="2" />
            <rect x="26" y="20" width="26" height="34" rx="6" fill="#00343B" stroke="#E5C158" strokeWidth="2" />
            <circle cx="39" cy="30" r="4" fill="#FFF8DC" />
            <line x1="32" y1="38" x2="46" y2="38" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            <line x1="32" y1="43" x2="42" y2="43" stroke="#FFF8DC" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );

      // 21. Cloud Computing & DevOps Training
      case 21:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <defs>
              <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E5C158" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
            <path d="M46 36 C49.3 36 52 33.3 52 30 C52 27.2 50.1 24.8 47.4 24.2 C46.9 18.5 42 14 36 14 C31.5 14 27.6 16.5 25.7 20.3 C24.6 19.5 23.1 19 21.5 19 C17.9 19 15 21.9 15 25.5 C15 26.2 15.1 26.8 15.3 27.4 C13.3 28.7 12 31 12 33.5 C12 37.1 14.9 40 18.5 40 H46 Z" fill="url(#cloudGrad)" stroke="#FFFFFF" strokeWidth="1.5" />
            <path d="M32 48 V30 M26 36 L32 30 L38 36" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        );

      // 22. Cloud Computing & DevOps Internship
      case 22:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <path d="M22 24 C16 24 12 28 12 32 C12 36 16 40 22 40 C28 40 32 32 32 32 C32 32 36 24 42 24 C48 24 52 28 52 32 C52 36 48 40 42 40 C36 40 32 32 32 32 C32 32 28 24 22 24 Z" stroke="#E5C158" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="22" cy="32" r="3" fill="#FFBD2E" />
            <circle cx="42" cy="32" r="3" fill="#27C93F" />
          </svg>
        );

      // 23. Networking & Infrastructure Training
      case 23:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <rect x="22" y="14" width="20" height="14" rx="4" fill="#00353C" stroke="#E5C158" strokeWidth="2" />
            <circle cx="28" cy="21" r="2" fill="#27C93F" />
            <circle cx="36" cy="21" r="2" fill="#D4AF37" />
            <rect x="10" y="42" width="14" height="10" rx="3" fill="#002428" stroke="#FFF8DC" strokeWidth="1.5" />
            <rect x="40" y="42" width="14" height="10" rx="3" fill="#002428" stroke="#FFF8DC" strokeWidth="1.5" />
            <path d="M32 28 V36 M17 42 V36 H47 V42" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        );

      // 24. Networking & Infrastructure Internship
      case 24:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <path d="M28 52 L32 22 L36 52 M29 42 H35 M27 32 H37" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="32" cy="20" r="3.5" fill="#FF5F56" />
            <path d="M24 16 A 12 12 0 0 0 24 24" stroke="#E5C158" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M40 16 A 12 12 0 0 1 40 24" stroke="#E5C158" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M18 10 A 20 20 0 0 0 18 30" stroke="#FFF8DC" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M46 10 A 20 20 0 0 1 46 30" stroke="#FFF8DC" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        );

      // 25. Cyber Law & Digital Compliance Training
      case 25:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <defs>
              <linearGradient id="goldScales" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#B8860B" />
              </linearGradient>
            </defs>
            <line x1="16" y1="22" x2="48" y2="22" stroke="url(#goldScales)" strokeWidth="3" strokeLinecap="round" />
            <path d="M32 14 V48 M24 48 H40" stroke="url(#goldScales)" strokeWidth="3" strokeLinecap="round" />
            <path d="M16 22 L12 34 H20 Z" fill="#00353C" stroke="#E5C158" strokeWidth="1.5" />
            <path d="M48 22 L44 34 H52 Z" fill="#00353C" stroke="#E5C158" strokeWidth="1.5" />
          </svg>
        );

      // 26. Cyber Law & Digital Compliance Internship
      case 26:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <rect x="14" y="10" width="36" height="44" rx="5" fill="#00282E" stroke="#D4AF37" strokeWidth="2" />
            <line x1="20" y1="18" x2="34" y2="18" stroke="#FFF8DC" strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="24" x2="44" y2="24" stroke="#FFF8DC" strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="30" x2="40" y2="30" stroke="#FFF8DC" strokeWidth="2" strokeLinecap="round" />
            <circle cx="36" cy="40" r="7" fill="#FFBD2E" stroke="#FFFFFF" strokeWidth="1.5" />
            <path d="M33 40 L35 42 L39 38" stroke="#040A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        );

      // 27. Cyber Awareness & Digital Safety Training
      case 27:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <circle cx="32" cy="22" r="7" fill="#E5C158" stroke="#FFFFFF" strokeWidth="1.5" />
            <path d="M20 40 C20 34 25 32 32 32 C39 32 44 34 44 40 Z" fill="#D4AF37" />
            <circle cx="32" cy="30" r="20" stroke="#27C93F" strokeWidth="2" strokeDasharray="6 3" fill="none" />
          </svg>
        );

      // 28. Cyber Awareness & Digital Safety Internship
      case 28:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <circle cx="32" cy="32" r="18" fill="#FF5F56" stroke="#FFFFFF" strokeWidth="2.5" />
            <circle cx="32" cy="32" r="9" fill="#040A1A" stroke="#FFFFFF" strokeWidth="2.5" />
            <path d="M32 14 V23 M32 41 V50 M14 32 H23 M41 32 H50" stroke="#FFFFFF" strokeWidth="3" />
          </svg>
        );

      // 29. Professional Training Programs
      case 29:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <polygon points="32,14 54,24 32,34 10,24" fill="#00353C" stroke="#E5C158" strokeWidth="2" />
            <path d="M18 28 V38 C18 44 46 44 46 38 V28" fill="#002428" stroke="#D4AF37" strokeWidth="2" />
            <circle cx="32" cy="24" r="2" fill="#FFBD2E" />
            <path d="M32 24 L48 30 V38" stroke="#FFBD2E" strokeWidth="2" fill="none" />
          </svg>
        );

      // 30. Professional Internship Programs
      case 30:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <rect x="12" y="22" width="40" height="28" rx="5" fill="#002D33" stroke="#D4AF37" strokeWidth="2" />
            <path d="M24 22 V15 C24 13 26 11 28 11 H36 C38 11 40 13 40 15 V22" stroke="#FFF8DC" strokeWidth="3" fill="none" />
            <line x1="12" y1="32" x2="52" y2="32" stroke="#003F47" strokeWidth="2" />
            <rect x="22" y="30" width="4" height="6" rx="1" fill="#FFBD2E" />
            <rect x="38" y="30" width="4" height="6" rx="1" fill="#FFBD2E" />
          </svg>
        );

      // 31. Workshops & Practical Learning Programs
      case 31:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <path d="M16 16 L22 22 L44 44 L40 48 L18 26 L12 28 Z" fill="#FFF8DC" stroke="#D4AF37" strokeWidth="1.5" />
            <path d="M48 16 L42 22 L20 44 L24 48 L46 26 L52 28 Z" fill="#E5C158" stroke="#081E52" strokeWidth="1.5" />
            <circle cx="32" cy="32" r="3" fill="#FFBD2E" />
          </svg>
        );

      // 32. Career Development & Placement Programs
      case 32:
        return (
          <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]">
            <defs>
              <linearGradient id="trophyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE066" />
                <stop offset="50%" stopColor="#FFBD2E" />
                <stop offset="100%" stopColor="#D48806" />
              </linearGradient>
            </defs>
            <path d="M20 14 H44 V26 C44 34 38 38 32 38 C26 38 20 34 20 26 Z" fill="url(#trophyGrad)" stroke="#FFFFFF" strokeWidth="1.5" />
            <path d="M20 18 H14 C12 18 12 28 20 28" stroke="url(#trophyGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M44 18 H50 C52 18 52 28 44 28" stroke="url(#trophyGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M30 38 H34 V44 H30 Z" fill="url(#trophyGrad)" />
            <rect x="22" y="44" width="20" height="7" rx="2" fill="#002D33" stroke="#D4AF37" strokeWidth="1.5" />
            <polygon points="32,20 33.5,24 37,24 34,26.5 35,30 32,27.5 29,30 30,26.5 27,24 30.5,24" fill="#FFFFFF" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0">
      {/* 3D Glassmorphic Circular Pod with crisp white border and luminous aura */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#081E52] via-[#0c2b7a] to-[#040A1A] border-[2px] sm:border-[2.5px] md:border-[3px] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4),0_4px_10px_rgba(0,0,0,0.5),inset_0_0_10px_rgba(229,193,88,0.3)] group-hover:shadow-[0_0_22px_rgba(229,193,88,0.7)] transition-all duration-300" />
      {/* Specular curved reflection highlight on top */}
      <div className="absolute top-0.5 inset-x-2 h-2.5 sm:h-3 rounded-t-full bg-gradient-to-b from-white/45 to-transparent pointer-events-none" />
      {/* Center Spotlight to illuminate icon */}
      <div className="absolute inset-1 rounded-full bg-radial from-[#E5C158]/25 to-transparent pointer-events-none" />
      {/* 3D Vector Illustration Content - Responsive, Crisp, Highly Visible */}
      <div className="relative z-10 flex items-center justify-center transform group-hover:scale-108 transition-transform duration-300 [&>svg]:w-7.5 [&>svg]:h-7.5 sm:[&>svg]:w-9 sm:[&>svg]:h-9 md:[&>svg]:w-10 md:[&>svg]:h-10 [&>svg]:drop-shadow-[0_0_5px_rgba(0,229,255,0.65)]">
        {renderIconContent()}
      </div>
    </div>
  );
}

/* ==========================================================================
   2. CARD COMPONENT (Squircle Card with Snow Spray & Uncut Titles)
   ========================================================================== */
export function Card({ skill }) {
  const isInternship = skill.title.toLowerCase().includes('internship');

  return (
    <div className="group relative flex flex-col items-center justify-center text-center p-2.5 sm:p-4 md:p-6 rounded-[1.6rem] sm:rounded-[2rem] md:rounded-[2.4rem] bg-gradient-to-b from-[#081E52] via-[#06173F] to-[#040A1A] border-[2.5px] sm:border-[3px] border-[#D4AF37]/50 shadow-[0_8px_25px_rgba(4,10,26,0.6)] hover:shadow-[0_16px_36px_rgba(212,175,55,0.35)] hover:border-[#E5C158] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer h-full min-h-[185px] sm:min-h-[200px] md:min-h-[225px] overflow-hidden">
      {/* 3 Heavy Dense Continuous Falling Snow Spray Layers */}
      <div className="absolute inset-0 dense-snow-layer-1 pointer-events-none rounded-[1.5rem] opacity-90" />
      <div className="absolute inset-0 dense-snow-layer-2 pointer-events-none rounded-[1.5rem] opacity-85" />
      <div className="absolute inset-0 dense-snow-layer-3 pointer-events-none rounded-[1.5rem] opacity-75" />

      {/* Top Subtle Cyan Glow Rim Highlight */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#E5C158]/45 to-transparent pointer-events-none" />

      {/* Foreground Content: Compact Round 3D Icon Badge */}
      <div className="relative z-10 flex flex-col items-center">
        <ThreeDIcon id={skill.id} />
      </div>

      {/* Foreground Content: Full Uncut Title & Short Subtitle */}
      <div className="relative z-10 flex flex-col items-center w-full mt-2 sm:mt-2.5 md:mt-3 px-0.5">
        <h3 className="font-heading font-extrabold text-white text-[11px] sm:text-xs md:text-sm lg:text-base tracking-tight leading-snug group-hover:text-[#E5C158] transition-colors drop-shadow-md">
          {skill.title}
        </h3>
        <p className="mt-1 text-[9.5px] sm:text-[10px] md:text-xs text-[#FFF8DC]/85 font-normal leading-tight max-w-[210px]">
          {isInternship
            ? "Corporate live projects & mentorship"
            : "Practical hands-on labs & certification"}
        </p>
      </div>
    </div>
  );
}

/* ==========================================================================
   3. PAGINATION COMPONENT (Responsive, Centered, Symmetrical)
   ========================================================================== */
export function Pagination({
  currentPage,
  totalPages,
  onPageChange
}) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav aria-label="Page navigation" className="mt-8 sm:mt-10 mb-8 sm:mb-12 flex justify-center w-full px-2">
      {/* Clean White Navigation Controls with Brand Cyan Accents */}
      <div className="inline-flex items-center justify-center gap-1 sm:gap-2.5 p-1 sm:p-1.5 rounded-2xl bg-[#081E52] border border-[#D4AF37]/40 shadow-lg shadow-black/50 max-w-full">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          aria-label="Previous Page"
          className={`flex items-center justify-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 ${
            isFirstPage
              ? 'opacity-35 cursor-not-allowed text-slate-400 bg-transparent'
              : 'text-white/85 hover:bg-[#0c2b7a] hover:text-[#FFF8DC] active:scale-95 cursor-pointer'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" />
          <span className="inline sm:hidden">Prev</span>
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Dynamic Page Buttons (1, 2, 3, 4) */}
        <div className="flex items-center gap-1 sm:gap-1.5 px-0.5">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            const isActive = currentPage === page;
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-[#D4AF37] text-[#040A1A] font-bold shadow-md shadow-[#D4AF37]/40 scale-105'
                    : 'text-white/80 hover:bg-[#0c2b7a] hover:text-[#FFF8DC]'
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLastPage}
          aria-label="Next Page"
          className={`flex items-center justify-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 ${
            isLastPage
              ? 'opacity-35 cursor-not-allowed text-slate-400 bg-transparent'
              : 'text-white/85 hover:bg-[#0c2b7a] hover:text-[#FFF8DC] active:scale-95 cursor-pointer'
          }`}
        >
          <span>Next</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" />
        </button>
      </div>
    </nav>
  );
}

/* ==========================================================================
   4. MAIN SKILL DEVELOPMENT COMPONENT (Complete Unified Showcase)
   ========================================================================== */
export default function SkillDevelopment({ skillsData = DEFAULT_SKILLS_DATA, onClose }) {
  // Exactly 8 cards per page (Desktop: 4 in a line, 2 rows; Mobile: 2 in a line, 4 rows)
  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = skillsData.length; // 32 cards total
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE); // 4 pages

  // Ref to scroll to top on page change
  const topRef = useRef(null);

  // Slice cards for current page:
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentSkills = skillsData.slice(startIndex, endIndex);

  // Smooth scroll handler on page switch
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Keyboard navigation: Left Arrow (Previous), Right Arrow (Next)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && currentPage < totalPages) {
        handlePageChange(currentPage + 1);
      } else if (e.key === 'ArrowLeft' && currentPage > 1) {
        handlePageChange(currentPage - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages]);

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else if (onClose) {
      onClose();
    } else {
      window.location.hash = '#home';
    }
  };

  const handleHome = () => {
    if (onClose) {
      onClose();
    }
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // Heading characters for wave animation
  const headingText = "SKILL DEVELOPMENT";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between pt-6 sm:pt-8 pb-8 px-3 sm:px-6 lg:px-8 font-sans">
      {/* Embedded Complete Custom Styles for Standalone Portability */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800;900&display=swap');

        /* Entrance Wave Animation */
        @keyframes textWaveOnce {
          0% {
            transform: translateY(0px) rotate(0deg);
            color: #040A1A;
          }
          25% {
            transform: translateY(-22px) rotate(-3.5deg) scale(1.12);
            color: #D4AF37;
            filter: drop-shadow(0 10px 18px rgba(15, 164, 175, 0.65));
          }
          55% {
            transform: translateY(6px) rotate(2deg) scale(0.98);
            color: #081E52;
          }
          80% {
            transform: translateY(-2px) rotate(-0.5deg);
            color: #040A1A;
            filter: none;
          }
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            color: #040A1A;
            filter: none;
          }
        }

        .text-wave-char {
          display: inline-block;
          animation: textWaveOnce 1.5s cubic-bezier(0.25, 1, 0.5, 1) both;
          animation-iteration-count: 1;
          will-change: transform, color, filter;
          transition: transform 0.25s ease, color 0.25s ease;
        }

        .text-wave-char:hover {
          transform: translateY(-12px) scale(1.15) !important;
          color: #D4AF37 !important;
        }

        /* Flowing Brand Underline */
        @keyframes brandLineFlow {
          0% {
            background-position: 0% 50%;
            width: 75px;
            box-shadow: 0 0 8px rgba(15, 164, 175, 0.4);
          }
          50% {
            background-position: 100% 50%;
            width: 155px;
            box-shadow: 0 0 18px rgba(15, 164, 175, 0.85);
          }
          100% {
            background-position: 0% 50%;
            width: 75px;
            box-shadow: 0 0 8px rgba(15, 164, 175, 0.4);
          }
        }

        .animated-brand-line {
          background: linear-gradient(
            90deg,
            #040A1A 0%,
            #081E52 20%,
            #D4AF37 45%,
            #FFF8DC 70%,
            #D4AF37 85%,
            #040A1A 100%
          );
          background-size: 260% 100%;
          animation: brandLineFlow 3s ease-in-out infinite;
        }

        /* Card Slide-in Left & Right */
        @keyframes cardSlideInLeft {
          0% {
            opacity: 0;
            transform: translate3d(-55px, 0, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes cardSlideInRight {
          0% {
            opacity: 0;
            transform: translate3d(55px, 0, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .card-enter-left {
          animation: cardSlideInLeft 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
          will-change: transform, opacity;
        }

        .card-enter-right {
          animation: cardSlideInRight 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
          will-change: transform, opacity;
        }

        /* Dense Falling Snow Spray Layers */
        @keyframes snowFallLayer1 {
          0% { background-position: 0px 0px; }
          100% { background-position: 30px 600px; }
        }
        @keyframes snowFallLayer2 {
          0% { background-position: 0px 0px; }
          100% { background-position: -40px 500px; }
        }
        @keyframes snowFallLayer3 {
          0% { background-position: 0px 0px; }
          100% { background-position: 20px 350px; }
        }

        .dense-snow-layer-1 {
          background-image:
            radial-gradient(3px 3px at 20px 20px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(4.5px 4.5px at 50px 75px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(2px 2px at 80px 140px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(3.5px 3.5px at 115px 35px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(5px 5px at 150px 105px, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0)),
            radial-gradient(2.5px 2.5px at 180px 180px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(4px 4px at 210px 45px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(3px 3px at 245px 125px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(4.5px 4.5px at 280px 70px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(2px 2px at 310px 160px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(5px 5px at 345px 30px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(3.5px 3.5px at 380px 115px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(2.5px 2.5px at 35px 190px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(4px 4px at 95px 220px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(3px 3px at 165px 250px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(5px 5px at 235px 210px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(3.5px 3.5px at 305px 240px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(2px 2px at 370px 200px, #ffffff, rgba(255, 255, 255, 0));
          background-size: 400px 300px;
          animation: snowFallLayer1 4.5s linear infinite;
        }

        .dense-snow-layer-2 {
          background-image:
            radial-gradient(3.5px 3.5px at 15px 45px, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0)),
            radial-gradient(2px 2px at 65px 115px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(4px 4px at 100px 15px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(5.5px 5.5px at 135px 80px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(2.5px 2.5px at 175px 145px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(4px 4px at 225px 95px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(3px 3px at 265px 165px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(5px 5px at 295px 25px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(2px 2px at 330px 105px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(3.5px 3.5px at 365px 60px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(2px 2px at 45px 230px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(4.5px 4.5px at 120px 200px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(3px 3px at 190px 225px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(2.5px 2.5px at 270px 215px, #ffffff, rgba(255, 255, 255, 0)),
            radial-gradient(4px 4px at 340px 235px, #ffffff, rgba(255, 255, 255, 0));
          background-size: 380px 260px;
          animation: snowFallLayer2 6.5s linear infinite;
        }

        .dense-snow-layer-3 {
          background-image:
            radial-gradient(6px 6px at 30px 50px, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0)),
            radial-gradient(7.5px 7.5px at 110px 120px, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0)),
            radial-gradient(5.5px 5.5px at 200px 65px, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0)),
            radial-gradient(7px 7px at 285px 140px, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)),
            radial-gradient(6px 6px at 360px 85px, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0)),
            radial-gradient(1.5px 1.5px at 70px 170px, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)),
            radial-gradient(2px 2px at 160px 195px, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0)),
            radial-gradient(1.5px 1.5px at 240px 175px, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)),
            radial-gradient(2px 2px at 320px 190px, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0));
          background-size: 390px 270px;
          animation: snowFallLayer3 9s linear infinite;
        }

        /* Subtle Brand Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f8fafc;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(15, 164, 175, 0.35);
          border-radius: 9999px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(15, 164, 175, 0.7);
        }
      `}</style>
      <div className="max-w-7xl w-full mx-auto" ref={topRef}>
        {/* Top Header Navigation buttons for standalone page view */}
        <div className="pt-2 pb-4 flex items-center justify-start gap-3 px-1">
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
        {/* Animated Wave Heading & Strictly 2-Line Description */}
        <header className="relative text-center mb-5 sm:mb-6 max-w-4xl mx-auto pt-2">
          {/* Main Heading Text: 100% Animated Letters Waving with Headroom */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase flex flex-wrap items-center justify-center select-none font-heading pt-4 pb-1">
            {headingText.split('').map((char, index) => {
              if (char === ' ') {
                return <span key={index} className="inline-block w-2 sm:w-4" />;
              }
              return (
                <span
                  key={index}
                  className="text-wave-char inline-block"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {char}
                </span>
              );
            })}
          </h1>

          {/* Synchronized Flowing Animated Underline Matching Text Colors */}
          <div className="h-1.5 mx-auto mt-2 rounded-full animated-brand-line" />

          {/* Clean Strictly 2-Line Description: Same Font Size, Top Line Longer Length, Bottom Line Shorter Length */}
          <div className="mt-3 text-xs sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto text-center px-1">
            <p>
              Explore industry-recognized training and internship programs,
            </p>
            <p className="mt-0.5">
              and accelerate your professional career.
            </p>
          </div>
        </header>

        {/* --- SHOWCASE BOX CONTAINER: Clean Box Housing the 8 Cards with Soft Tint for White Border Contrast --- */}
        <div className="relative rounded-[2.2rem] sm:rounded-[2.8rem] md:rounded-[3rem] bg-gradient-to-b from-[#e8f6f8] via-[#f2fafb] to-[#eaf6f8] border border-[#FFF8DC]/60 shadow-2xl p-3 sm:p-5 md:p-8 lg:p-10 ring-1 ring-[#D4AF37]/10 overflow-hidden">
          {/* 8 Cards Grid: Mobile Strictly 2 Cards per Line (grid-cols-2), Desktop 4 Cards per Line (lg:grid-cols-4) */}
          <div key={currentPage} className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
            {currentSkills.map((skill, index) => {
              // Row 1: cards 0, 1 from left; cards 2, 3 from right
              // Row 2: cards 4, 5 from left; cards 6, 7 from right
              const isFromLeft = index === 0 || index === 1 || index === 4 || index === 5;
              const animClass = isFromLeft ? 'card-enter-left' : 'card-enter-right';

              // User's exact paired choreography rule on every page:
              // 1. Pehle Card 2 & 3 EK SATH AAYENGE (index 1 & 2)
              // 2. Uske baad Card 1 & 4 EK SATH AAYENGE (index 0 & 3)
              // 3. Uske baad Card 6 & 7 EK SATH AAYENGE (index 5 & 6)
              // 4. Uske baad Card 5 & 8 EK SATH AAYENGE (index 4 & 7)
              const DELAY_BY_INDEX = {
                0: 0.36, // Card 1 (Card 1 & 4 ek sath aate hain)
                1: 0.06, // Card 2 (Pehle Card 2 & 3 ek sath aate hain)
                2: 0.06, // Card 3 (Pehle Card 2 & 3 ek sath aate hain)
                3: 0.36, // Card 4 (Card 1 & 4 ek sath aate hain)
                4: 0.96, // Card 5 (Card 5 & 8 ek sath aate hain)
                5: 0.66, // Card 6 (Card 6 & 7 ek sath aate hain)
                6: 0.66, // Card 7 (Card 6 & 7 ek sath aate hain)
                7: 0.96  // Card 8 (Card 5 & 8 ek sath aate hain)
              };

              const animationDelay = `${DELAY_BY_INDEX[index] ?? 0.06}s`;

              return (
                <div
                  key={skill.id}
                  className={`${animClass} h-full`}
                  style={{ animationDelay }}
                >
                  <Card skill={skill} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Previous & Next Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
