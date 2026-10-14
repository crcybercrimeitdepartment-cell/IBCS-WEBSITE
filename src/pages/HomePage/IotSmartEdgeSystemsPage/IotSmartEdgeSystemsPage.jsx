import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import {
  ROW_1_CARDS,
  ROW_2_CARDS,
  MOBILE_PAIRS,
} from '../data/cardsData';
import { IotSmartEdgeSystemsData } from './IotSmartEdgeSystemsData';

/**
 * =============================================================================
 * 1. EMBEDDED STYLES & ANIMATIONS
 * Fully self-contained keyframe animations for the natural ribbon unrolling physics.
 * =============================================================================
 */
const CARD_STYLES = `
  *, ::before, ::after {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff;
    font-family: 'Outfit', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  #root {
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
  }
  html, body {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  html::-webkit-scrollbar, body::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  .card-desc-scroll {
    scrollbar-width: thin !important;
    scrollbar-color: rgba(212, 175, 55, 0.7) rgba(0, 0, 0, 0.25) !important;
    -ms-overflow-style: auto !important;
  }
  .card-desc-scroll::-webkit-scrollbar {
    display: block !important;
    width: 3.5px !important;
  }
  .card-desc-scroll::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.25) !important;
    border-radius: 4px !important;
  }
  .card-desc-scroll::-webkit-scrollbar-thumb {
    background: #D4AF37 !important;
    border-radius: 4px !important;
    box-shadow: 0 0 6px rgba(212, 175, 55, 0.6) !important;
  }
  .card-desc-scroll::-webkit-scrollbar-thumb:hover {
    background: #F3CA40 !important;
  }

  @keyframes ribbonUnfurlFromRod {
    0% {
      transform: scaleY(0.04);
      opacity: 0.4;
    }
    15% {
      opacity: 1;
    }
    65% {
      transform: scaleY(1.05) perspective(800px) rotateX(-4deg);
    }
    80% {
      transform: scaleY(0.98) perspective(800px) rotateX(2deg);
    }
    92% {
      transform: scaleY(1.01) perspective(800px) rotateX(-0.8deg);
    }
    100% {
      transform: scaleY(1) perspective(800px) rotateX(0deg);
      opacity: 1;
    }
  }

  .ribbon-unfurl {
    animation: ribbonUnfurlFromRod 0.92s cubic-bezier(0.22, 1, 0.36, 1) both;
    transform-origin: 50% 28px;
  }

  @keyframes ribbonContentReveal {
    0%, 20% {
      opacity: 0;
      transform: translateY(-12px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .ribbon-content-reveal {
    animation: ribbonContentReveal 0.85s ease-out both;
  }
`;

/**
 * =============================================================================
 * 2. SVG VECTOR ICONS
 * Tailored, high-fidelity SVG vector icons for each of the 12 domains.
 * =============================================================================
 */

// 01. Frontend Engineering: Browser window with code tag & UI layout
export function FrontendIcon({ className = "w-11 h-11" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="16" width="72" height="68" rx="8" fill="rgba(255,255,255,0.15)" />
      <line x1="14" y1="34" x2="86" y2="34" />
      <circle cx="26" cy="25" r="3" fill="white" />
      <circle cx="36" cy="25" r="3" fill="white" />
      <circle cx="46" cy="25" r="3" fill="white" />
      {/* Code bracket symbols */}
      <path d="M38 48 L28 58 L38 68" strokeWidth="6" />
      <path d="M62 48 L72 58 L62 68" strokeWidth="6" />
      <line x1="53" y1="46" x2="47" y2="70" strokeWidth="5" />
    </svg>
  );
}

// 02. Backend & Microservices: Server racks & distributed message nodes
export function BackendIcon({ className = "w-11 h-11" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="18" y="16" width="64" height="26" rx="5" fill="rgba(255,255,255,0.18)" />
      <circle cx="30" cy="29" r="3.5" fill="white" />
      <circle cx="42" cy="29" r="3.5" fill="white" />
      <line x1="56" y1="29" x2="72" y2="29" strokeWidth="4.5" />

      <rect x="18" y="58" width="64" height="26" rx="5" fill="rgba(255,255,255,0.18)" />
      <circle cx="30" cy="71" r="3.5" fill="white" />
      <circle cx="42" cy="71" r="3.5" fill="white" />
      <line x1="56" y1="71" x2="72" y2="71" strokeWidth="4.5" />

      <path d="M50 42 V58" strokeWidth="6" />
      <circle cx="50" cy="50" r="4.5" fill="white" />
    </svg>
  );
}

// 03. Cloud Infrastructure: Multi-cloud network with uplink/downlink
export function CloudIcon({ className = "w-11 h-11" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M28 68 C20 68 14 62 14 54 C14 47 19 41 26 40 C28 29 37 20 49 20 C61 20 71 28 73 40 C80 41 86 47 86 54 C86 62 80 68 72 68 Z"
        fill="rgba(255,255,255,0.2)"
      />
      <path d="M42 56 L50 48 L58 56" strokeWidth="6" />
      <line x1="50" y1="48" x2="50" y2="78" strokeWidth="6" />
      <path d="M38 74 L50 86 L62 74" strokeWidth="6" />
    </svg>
  );
}

// 04. AI & Machine Learning: Neural network synapses & connected nodes
export function AiMlIcon({ className = "w-11 h-11" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="30" r="7" fill="rgba(255,255,255,0.3)" />
      <circle cx="24" cy="70" r="7" fill="rgba(255,255,255,0.3)" />
      <circle cx="50" cy="20" r="7" fill="rgba(255,255,255,0.3)" />
      <circle cx="50" cy="50" r="8" fill="white" />
      <circle cx="50" cy="80" r="7" fill="rgba(255,255,255,0.3)" />
      <circle cx="76" cy="35" r="7" fill="rgba(255,255,255,0.3)" />
      <circle cx="76" cy="65" r="7" fill="rgba(255,255,255,0.3)" />

      <line x1="31" y1="30" x2="43" y2="20" strokeWidth="4" />
      <line x1="31" y1="30" x2="42" y2="48" strokeWidth="4" />
      <line x1="31" y1="70" x2="42" y2="52" strokeWidth="4" />
      <line x1="31" y1="70" x2="43" y2="80" strokeWidth="4" />
      <line x1="57" y1="20" x2="69" y2="35" strokeWidth="4" />
      <line x1="58" y1="50" x2="69" y2="35" strokeWidth="4" />
      <line x1="58" y1="50" x2="69" y2="65" strokeWidth="4" />
      <line x1="57" y1="80" x2="69" y2="65" strokeWidth="4" />
    </svg>
  );
}

// 05. Database & Big Data: 3D relational database disk cylinders
export function DatabaseIcon({ className = "w-11 h-11" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="50" cy="24" rx="34" ry="12" fill="rgba(255,255,255,0.25)" />
      <path d="M16 24 V48 C16 55 31 60 50 60 C69 60 84 55 84 48 V24" />
      <path d="M16 48 V72 C16 79 31 84 50 84 C69 84 84 79 84 72 V48" />
    </svg>
  );
}

// 06. Cybersecurity & SecOps: Fortress shield with security padlock
export function CybersecurityIcon({ className = "w-11 h-11" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 14 L82 26 V52 C82 72 68 84 50 90 C32 84 18 72 18 52 V26 Z" fill="rgba(255,255,255,0.2)" />
      <rect x="40" y="48" width="20" height="16" rx="3" fill="white" stroke="none" />
      <path d="M44 48 V42 C44 38.7 46.7 36 50 36 C53.3 36 56 38.7 56 42 V48" strokeWidth="4.5" />
    </svg>
  );
}

// 07. DevOps & CI/CD Pipelines: Infinity deployment loop & continuous release
export function DevopsIcon({ className = "w-11 h-11" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M32 36 C22 36 14 43 14 50 C14 57 22 64 32 64 C42 64 48 57 50 50 C52 43 58 36 68 36 C78 36 86 43 86 50 C86 57 78 64 68 64 C58 64 52 57 50 50 C48 43 42 36 32 36 Z"
        fill="rgba(255,255,255,0.18)"
      />
      <path d="M72 32 L78 36 L72 40" strokeWidth="5.5" />
      <path d="M28 68 L22 64 L28 60" strokeWidth="5.5" />
    </svg>
  );
}

// 08. API & Gateway Management: Bi-directional endpoint router & gateway
export function ApiGatewayIcon({ className = "w-11 h-11" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="28" y="28" width="44" height="44" rx="8" fill="rgba(255,255,255,0.2)" />
      <path d="M14 50 H28 M72 50 H86" />
      <path d="M50 14 V28 M50 72 V86" />
      <circle cx="14" cy="50" r="5" fill="white" />
      <circle cx="86" cy="50" r="5" fill="white" />
      <circle cx="50" cy="14" r="5" fill="white" />
      <circle cx="50" cy="86" r="5" fill="white" />
      <path d="M42 44 L36 50 L42 56 M58 44 L64 50 L58 56" strokeWidth="4.5" />
    </svg>
  );
}

// 09. Mobile App Development: Smartphone device frame with app gestures
export function MobileAppIcon({ className = "w-11 h-11" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="26" y="14" width="48" height="74" rx="10" fill="rgba(255,255,255,0.18)" />
      {/* Top speaker notch */}
      <line x1="42" y1="22" x2="58" y2="22" strokeWidth="3.5" />
      {/* App UI grid items */}
      <rect x="34" y="32" width="13" height="13" rx="3" fill="white" stroke="none" />
      <rect x="53" y="32" width="13" height="13" rx="3" fill="white" stroke="none" />
      <rect x="34" y="50" width="13" height="13" rx="3" fill="white" stroke="none" />
      <rect x="53" y="50" width="13" height="13" rx="3" fill="white" stroke="none" />
      {/* Home bar */}
      <line x1="40" y1="78" x2="60" y2="78" strokeWidth="4" />
    </svg>
  );
}

// 10. UI/UX Product Experience: Vector pen tool with bezier anchor nodes
export function UiUxIcon({ className = "w-11 h-11" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M38 18 L76 56 L62 70 L48 56 L36 68 L24 64 L20 78 L14 84 L16 70 L24 64 Z" fill="rgba(255,255,255,0.2)" />
      <circle cx="68" cy="28" r="8" fill="white" />
      <line x1="44" y1="24" x2="60" y2="28" strokeDasharray="3 3" />
      <line x1="76" y1="28" x2="86" y2="28" strokeDasharray="3 3" />
    </svg>
  );
}

// 11. Quality Assurance & Testing: Verified assurance badge & test metrics
export function QaTestingIcon({ className = "w-11 h-11" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="50" cy="42" r="28" fill="rgba(255,255,255,0.2)" />
      <path d="M38 42 L46 50 L62 34" strokeWidth="6.5" />
      <path d="M38 68 L32 86 L50 78 L68 86 L62 68" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

// 12. IoT & Edge Computing: Smart processor microchip with antenna telemetry waves
export function IotEdgeIcon({ className = "w-11 h-11" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="30" y="30" width="40" height="40" rx="6" fill="rgba(255,255,255,0.2)" />
      <circle cx="50" cy="50" r="7" fill="white" />
      {/* Chip pins */}
      <path d="M40 18 V30 M50 18 V30 M60 18 V30" strokeWidth="4.5" />
      <path d="M40 70 V82 M50 70 V82 M60 70 V82" strokeWidth="4.5" />
      <path d="M18 40 H30 M18 50 H30 M18 60 H30" strokeWidth="4.5" />
      <path d="M70 40 H82 M70 50 H82 M70 60 H82" strokeWidth="4.5" />
    </svg>
  );
}

// Map of string IDs to Icon components
export const ICON_MAP = {
  'frontend': FrontendIcon,
  'backend': BackendIcon,
  'cloud': CloudIcon,
  'ai-ml': AiMlIcon,
  'database': DatabaseIcon,
  'cybersecurity': CybersecurityIcon,
  'devops': DevopsIcon,
  'api-gateway': ApiGatewayIcon,
  'mobile-app': MobileAppIcon,
  'ui-ux': UiUxIcon,
  'qa-testing': QaTestingIcon,
  'iot-edge': IotEdgeIcon,
};

/**
 * =============================================================================
 * 3. METALLIC ROD COMPONENT
 * Solid stainless steel rod passing continuously through all hanging ribbons.
 * =============================================================================
 */
export function Rod({ className = "" }) {
  return (
    <div
      className={`absolute top-[48px] left-0 right-0 h-[14px] flex items-center z-10 pointer-events-none ${className}`}
    >
      {/* Outer rod container with realistic steel cylindrical gradient */}
      <div
        className="w-full h-full rounded-full relative"
        style={{
          background: 'linear-gradient(180deg, #606770 0%, #8c95a1 28%, #d8e0ea 42%, #858e99 68%, #3c424a 100%)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.18), 0 2px 4px rgba(0, 0, 0, 0.12)',
        }}
      >
        {/* Top specular highlight reflection line */}
        <div
          className="absolute inset-x-1 top-[2px] h-[1.5px] rounded-full opacity-90"
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.85) 15%, rgba(255,255,255,0.85) 85%, rgba(255,255,255,0.2) 100%)'
          }}
        />

        {/* Left end cap */}
        <div
          className="absolute -left-[3px] top-0 bottom-0 w-[5px] rounded-l-full"
          style={{
            background: 'linear-gradient(180deg, #717882 0%, #a4adb8 40%, #444b54 100%)',
            boxShadow: '-2px 0 4px rgba(0,0,0,0.2)'
          }}
        />

        {/* Right end cap */}
        <div
          className="absolute -right-[3px] top-0 bottom-0 w-[5px] rounded-r-full"
          style={{
            background: 'linear-gradient(180deg, #717882 0%, #a4adb8 40%, #444b54 100%)',
            boxShadow: '2px 0 4px rgba(0,0,0,0.2)'
          }}
        />

        {/* Ambient bottom shadow below the rod */}
        <div
          className="absolute inset-x-2 -bottom-[6px] h-[6px] rounded-full blur-[3px] -z-10"
          style={{
            background: 'rgba(0, 0, 0, 0.22)'
          }}
        />
      </div>
    </div>
  );
}

/**
 * =============================================================================
 * 4. RIBBON CARD COMPONENT
 * Thick tactile 3D ribbon loop anchored to the rod with natural unroll animation.
 * =============================================================================
 */
export function RibbonCard({
  number = '',
  title,
  description = '',
  textLines = [],
  icon,
  accentColor,
  numberColor,
  titleColor,
  descColor,
  colors = {
    topFold: 'linear-gradient(180deg, #225974 0%, #17475d 48%, #0d3142 100%)',
    body: 'linear-gradient(180deg, #103c4f 0%, #0c3141 55%, #062331 100%)',
    cutout: '#103c4f',
    backFold: '#051d26',
  },
  height = 480,
  animDelay = 0,
  isMobile = false,
}) {
  const descText = description || (Array.isArray(textLines) ? textLines.join(' ') : textLines);
  const cardWidth = isMobile ? 152 : 188;
  const effectiveHeight = isMobile ? Math.max(height - 25, 450) : height;

  // Resolve icon component
  const ResolvedIcon = typeof icon === 'string' ? ICON_MAP[icon] : icon;

  return (
    <div
      className="relative flex flex-col items-center select-none group"
      style={{
        width: `${cardWidth}px`,
        transformOrigin: '50% 14px',
      }}
    >
      {/* 1. Back Under-Loop (Behind the Rod) */}
      <div
        className="absolute -top-[1.5px] h-[34px] rounded-t-[10px] pointer-events-none -z-10"
        style={{
          width: `${cardWidth}px`,
          background: colors.backFold || '#111827',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.40)',
        }}
      />

      {/* 2. Permanent Top Loop Cap (ON THE ROD) */}
      <div
        className="absolute top-0 inset-x-0 h-[30px] rounded-t-[10px] pointer-events-none z-30 overflow-hidden"
        style={{
          background: colors.topFold,
          boxShadow:
            'inset 0 2px 3px rgba(255, 255, 255, 0.55), inset 0 -2px 4px rgba(0, 0, 0, 0.45)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 26%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0.65) 100%)',
          }}
        />
      </div>

      {/* 3. Main Ribbon Body (Unfurls DOWNWARDS from under the rod loop) */}
      <div
        className="w-full relative ribbon-unfurl transition-all duration-300 ease-out group-hover:[filter:drop-shadow(0_18px_24px_rgba(0,0,0,0.30))_drop-shadow(0_6px_8px_rgba(0,0,0,0.16))]"
        style={{
          filter:
            'drop-shadow(0 14px 18px rgba(0, 0, 0, 0.22)) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.12))',
          height: `${effectiveHeight}px`,
          transformOrigin: '50% 28px',
          animationDelay: `${animDelay}ms`,
        }}
      >
        <div
          className="w-full h-full relative flex flex-col items-center pt-2 pb-10 rounded-t-[10px] overflow-hidden transition-transform duration-300 ease-out group-hover:[transform:perspective(800px)_rotateX(-3.5deg)]"
          style={{
            clipPath:
              'polygon(0% 0%, 100% 0%, 100% calc(100% - 28px), 50% 100%, 0% calc(100% - 28px))',
            background: colors.body,
            transformOrigin: '50% 28px',
            '--card-bg-cutout': colors.cutout,
          }}
        >
          {/* Deep crease shadow immediately below rod */}
          <div
            className="absolute top-[28px] inset-x-0 h-[12px] pointer-events-none z-10"
            style={{
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.18) 70%, rgba(0,0,0,0) 100%)',
            }}
          />

          {/* Tactile Ribbon Thickness edges */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              boxShadow:
                'inset 2.5px 0 0 rgba(255,255,255,0.22), inset -2.5px 0 0 rgba(0,0,0,0.35)',
            }}
          />

          {/* Card Content Container */}
          <div
            className={`relative z-10 flex flex-col items-center w-full ribbon-content-reveal ${
              isMobile ? 'px-2 mt-[40px]' : 'px-3 mt-[44px]'
            }`}
            style={{
              animationDelay: `${animDelay + 140}ms`,
            }}
          >
            {/* Icon Box with glowing accent */}
            <div
              className={`flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                isMobile ? 'w-9 h-9' : 'w-11 h-11'
              }`}
              style={{
                filter: `drop-shadow(0 0 10px ${accentColor || '#38bdf8'}90)`,
              }}
            >
              {ResolvedIcon && (
                <ResolvedIcon
                  className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'}`}
                />
              )}
            </div>

            {/* Title with subtle golden border */}
            <div className="w-full flex justify-center mt-2.5 px-0.5">
              <h2
                className={`w-full font-extrabold tracking-tight text-center font-['Manrope'] px-2 py-1.5 rounded-lg ${
                  isMobile
                    ? 'text-[13px] leading-tight line-clamp-2'
                    : 'text-[14.5px] leading-snug'
                }`}
                style={{
                  color: titleColor || '#ffffff',
                  border: '1px solid rgba(212, 175, 55, 0.65)',
                  backgroundColor: 'rgba(212, 175, 55, 0.08)',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.35), inset 0 0 8px rgba(212, 175, 55, 0.12)',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.85)',
                }}
              >
                {title}
              </h2>
            </div>

            {/* Description Text Container with Smooth Internal Scroll */}
            <div
              className="w-full overflow-y-auto mt-2.5 px-1 pr-1.5 card-desc-scroll"
              style={{
                maxHeight: isMobile ? '165px' : '195px',
                minHeight: '75px',
                overscrollBehavior: 'contain',
              }}
            >
              <p
                className={`text-center font-['Inter'] font-medium ${
                  isMobile
                    ? 'text-[10px] leading-[1.48]'
                    : 'text-[11.5px] leading-[1.58]'
                }`}
                style={{
                  color: descColor || '#F1F5F9',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.9)',
                }}
              >
                {descText}
              </p>
            </div>
          </div>

          {/* Bottom subtle inner gradient near pointed tip */}
          <div
            className="absolute bottom-0 inset-x-0 h-[40px] pointer-events-none opacity-40"
            style={{
              background:
                'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * =============================================================================
 * 5. HANGING ROW COMPONENT
 * Renders a single rod with ribbon cards suspended from it.
 * =============================================================================
 */
export function HangingRow({
  cards = [],
  baseDelay = 80,
  isMobile = false,
  className = "",
}) {
  return (
    <div className={`relative w-full flex justify-center items-center py-3 sm:py-6 select-none ${className}`}>
      <div
        className={`relative flex items-start ${
          isMobile
            ? 'gap-[12px] sm:gap-[16px] px-[16px] sm:px-[20px] max-w-full justify-center'
            : 'gap-[20px] px-[46px] min-w-max'
        }`}
      >
        {/* The Metallic Rod passing through all ribbon loops */}
        <Rod className="!top-[7px] !left-0 !right-0" />

        {/* The Hanging Ribbon Cards */}
        {cards.map((card, index) => (
          <div key={card.id || index} className="relative z-20">
            <RibbonCard
              {...card}
              isMobile={isMobile}
              animDelay={baseDelay + index * 110}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * =============================================================================
 * 6. PAGE HEADER CONTENT & COMPLETE DIGITAL SOLUTIONS SECTION (Default Export)
 * =============================================================================
 */
export const PAGE_TITLE = IotSmartEdgeSystemsData?.pageHeading || 'IoT, Smart Systems & Edge Computing';

export const PAGE_DESCRIPTION = IotSmartEdgeSystemsData?.pageDescription || [
  'Explore connected technologies and intelligent computing solutions through a comprehensive collection of IoT platforms, smart device management, industrial monitoring, edge computing, and real-time data processing systems.',
  'This page brings together solutions for device connectivity, sensor integration, infrastructure monitoring, remote operations, and device security to support reliable, efficient, and scalable software products across enterprise, industrial, government, and commercial environments.'
];

export function IotSmartEdgeSystemsPage({
  title = PAGE_TITLE,
  description = PAGE_DESCRIPTION,
  showHeader = true,
  cards,
  row1 = ROW_1_CARDS,
  row2 = ROW_2_CARDS,
  mobilePairs = MOBILE_PAIRS,
  className = "",
  onClose,
}) {
  const handleBack = () => {
    if (onClose) {
      onClose();
    } else {
      window.history.back();
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
    <main className={`min-h-screen w-full bg-white flex flex-col items-center pt-4 sm:pt-6 md:pt-8 pb-16 px-3 sm:px-6 md:px-8 select-none overflow-x-hidden ${className}`}>
      {/* Injected Animation Styles (Self-contained, keeps index.css 100% clean) */}
      <style>{CARD_STYLES}</style>

      {/* Top Navigation Controls */}
      <div style={{ width: '100%', maxWidth: '1380px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', padding: '0 16px', zIndex: 30 }}>
        <button
          type="button"
          onClick={handleBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            borderRadius: '12px',
            background: '#081E52',
            color: '#ffffff',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            fontSize: '13px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>

        <button
          type="button"
          onClick={handleHome}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            borderRadius: '12px',
            background: '#D4AF37',
            color: '#040A1A',
            border: '1px solid #D4AF37',
            fontSize: '13px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
        >
          <Home size={16} />
          <span>Home</span>
        </button>
      </div>

      {/* Page Header: Dark Navy (#003135), 30px -> 36px -> 48px, Manrope */}
      {showHeader && (
        <header className="w-full max-w-4xl mx-auto flex flex-col items-center text-center mb-8 sm:mb-10 md:mb-12 px-3">
          <h1
            className="text-[30px] sm:text-[36px] lg:text-[48px] font-bold tracking-tight leading-[1.18] text-center max-w-4xl mb-4 font-['Manrope']"
            style={{ color: '#003135' }}
          >
            {title}
          </h1>

          {/* Description: Pure Black (#000000), 14px -> 16px, Inter */}
          <div
            className="space-y-3.5 max-w-3xl text-center text-[14px] md:text-[16px] leading-relaxed font-normal font-['Inter']"
            style={{ color: '#000000' }}
          >
            {Array.isArray(description) ? (
              description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{description}</p>
            )}
          </div>
        </header>
      )}

      {/* If specific cards array is passed, render single row */}
      {cards ? (
        <HangingRow cards={cards} />
      ) : (
        <section className="w-full flex flex-col items-center justify-center">
          {/* 
            Desktop View (lg and above, >= 1024px):
            2 Rows with 6 cards each hanging from long metallic rods
          */}
          <div className="hidden lg:flex flex-col gap-20 items-center justify-center w-full max-w-[1380px]">
            <HangingRow cards={row1} baseDelay={80} />
            <HangingRow cards={row2} baseDelay={420} />
          </div>

          {/* 
            Mobile & Tablet View (below lg, < 1024px):
            Exactly 2 cards per line/row, each pair hanging from its own metallic rod
          */}
          <div className="flex lg:hidden flex-col gap-10 sm:gap-14 items-center justify-center w-full max-w-md mx-auto">
            {mobilePairs.map((pair, idx) => (
              <HangingRow
                key={idx}
                cards={pair}
                baseDelay={70 + idx * 75}
                isMobile={true}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export const DigitalSolutions = IotSmartEdgeSystemsPage;
export default IotSmartEdgeSystemsPage;
