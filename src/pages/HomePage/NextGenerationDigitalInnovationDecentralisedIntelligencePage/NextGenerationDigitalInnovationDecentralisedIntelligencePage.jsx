import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import {
  NextGenerationDigitalInnovationDecentralisedIntelligenceData,
  ROW_1_CARDS,
  ROW_2_CARDS,
  MOBILE_PAIRS,
} from './NextGenerationDigitalInnovationDecentralisedIntelligenceData';

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
 * 2. BESPOKE SVG VECTOR ICONS
 * Ultra high-fidelity SVG vector icons representing Next-Gen Decentralised Intelligence.
 * =============================================================================
 */

// 1. Blockchain-Based Software Platforms
export function BlockchainPlatformIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
      {/* 3D interconnected blocks */}
      <polygon points="50,14 74,27 50,40 26,27" strokeWidth="4.5" strokeLinejoin="round" fill="rgba(56,189,248,0.22)" />
      <polygon points="26,27 50,40 50,62 26,49" strokeWidth="4.5" strokeLinejoin="round" />
      <polygon points="74,27 50,40 50,62 74,49" strokeWidth="4.5" strokeLinejoin="round" fill="rgba(56,189,248,0.12)" />
      {/* Chain link to lower left block */}
      <path d="M 32 54 L 20 68" strokeWidth="4" strokeDasharray="3 3" />
      <polygon points="20,68 34,75 20,82 6,75" strokeWidth="3.5" strokeLinejoin="round" />
      <polygon points="6,75 20,82 20,92 6,85" strokeWidth="3.5" strokeLinejoin="round" />
      <polygon points="34,75 20,82 20,92 34,85" strokeWidth="3.5" strokeLinejoin="round" />
      {/* Chain link to lower right block */}
      <path d="M 68 54 L 80 68" strokeWidth="4" strokeDasharray="3 3" />
      <polygon points="80,68 94,75 80,82 66,75" strokeWidth="3.5" strokeLinejoin="round" />
      <polygon points="66,75 80,82 80,92 66,85" strokeWidth="3.5" strokeLinejoin="round" />
      <polygon points="94,75 80,82 80,92 94,85" strokeWidth="3.5" strokeLinejoin="round" />
      {/* Core verified pulse */}
      <circle cx="50" cy="35" r="3.5" fill="#38BDF8" strokeWidth="0" />
    </svg>
  );
}

// 2. Smart Contract Development & Management
export function SmartContractsIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
      {/* Smart contract parchment */}
      <rect x="22" y="16" width="56" height="70" rx="8" strokeWidth="4.5" fill="rgba(52,211,153,0.14)" />
      {/* Programmable code lines */}
      <line x1="34" y1="30" x2="52" y2="30" strokeWidth="4" strokeLinecap="round" />
      <line x1="34" y1="42" x2="66" y2="42" strokeWidth="4" strokeLinecap="round" />
      <line x1="34" y1="54" x2="58" y2="54" strokeWidth="4" strokeLinecap="round" />
      {/* Logic brackets */}
      <path d="M 28 32 L 25 36 L 28 40" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 72 32 L 75 36 L 72 40" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Cryptographic Execution Seal with verified check */}
      <circle cx="64" cy="70" r="14" strokeWidth="4" fill="#0b253f" />
      <path d="M 58 70 L 62 74 L 70 66" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" stroke="#34D399" />
    </svg>
  );
}

// 3. Decentralised Application (DApp) Development
export function DAppIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
      {/* App frame */}
      <rect x="18" y="20" width="64" height="62" rx="10" strokeWidth="4.5" fill="rgba(251,191,36,0.12)" />
      {/* Browser dot controls */}
      <circle cx="28" cy="30" r="2.5" fill="currentColor" strokeWidth="0" />
      <circle cx="36" cy="30" r="2.5" fill="currentColor" strokeWidth="0" />
      <circle cx="44" cy="30" r="2.5" fill="currentColor" strokeWidth="0" />
      <line x1="18" y1="38" x2="82" y2="38" strokeWidth="3.5" />
      {/* Decentralised node network inside app */}
      <circle cx="50" cy="58" r="9" strokeWidth="4" fill="rgba(251,191,36,0.25)" />
      <circle cx="34" cy="70" r="5" strokeWidth="3" fill="#172a3d" />
      <circle cx="66" cy="70" r="5" strokeWidth="3" fill="#172a3d" />
      <circle cx="50" cy="45" r="4" strokeWidth="3" fill="#172a3d" />
      {/* Connecting rays */}
      <line x1="50" y1="49" x2="50" y2="58" strokeWidth="2.5" />
      <line x1="43" y1="63" x2="38" y2="67" strokeWidth="2.5" />
      <line x1="57" y1="63" x2="62" y2="67" strokeWidth="2.5" />
    </svg>
  );
}

// 4. Distributed Ledger Technology Solutions
export function DltIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
      {/* Circular consensus ring */}
      <circle cx="50" cy="50" r="32" strokeWidth="3" strokeDasharray="5 4" opacity="0.6" />
      {/* 5 Synchronised Distributed Nodes */}
      <circle cx="50" cy="18" r="7.5" strokeWidth="4" fill="#0a3d36" />
      <circle cx="81" cy="40" r="7.5" strokeWidth="4" fill="#0a3d36" />
      <circle cx="69" cy="76" r="7.5" strokeWidth="4" fill="#0a3d36" />
      <circle cx="31" cy="76" r="7.5" strokeWidth="4" fill="#0a3d36" />
      <circle cx="19" cy="40" r="7.5" strokeWidth="4" fill="#0a3d36" />
      {/* Internal mesh validation lines */}
      <line x1="50" y1="18" x2="69" y2="76" strokeWidth="2.5" stroke="#67E8F9" opacity="0.8" />
      <line x1="50" y1="18" x2="31" y2="76" strokeWidth="2.5" stroke="#67E8F9" opacity="0.8" />
      <line x1="19" y1="40" x2="81" y2="40" strokeWidth="2.5" stroke="#67E8F9" opacity="0.8" />
      <line x1="19" y1="40" x2="69" y2="76" strokeWidth="2" opacity="0.5" />
      <line x1="81" y1="40" x2="31" y2="76" strokeWidth="2" opacity="0.5" />
      {/* Center verification hub */}
      <circle cx="50" cy="50" r="5" fill="#67E8F9" strokeWidth="0" />
    </svg>
  );
}

// 5. Digital Identity & Credential Verification
export function DigitalIdentityIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
      {/* ID Card shield perimeter */}
      <path
        d="M 50 16 L 80 28 V 54 C 80 72 50 86 50 86 C 50 86 20 72 20 54 V 28 Z"
        strokeWidth="4.5"
        strokeLinejoin="round"
        fill="rgba(244,114,182,0.12)"
      />
      {/* Digital fingerprint / biometric arches */}
      <path d="M 50 36 A 10 10 0 0 0 40 46" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 50 36 A 10 10 0 0 1 60 46" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 45 48 A 6 6 0 0 1 55 48" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 50 48 V 56" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 42 58 C 45 64 55 64 58 58" strokeWidth="3" strokeLinecap="round" />
      {/* Cryptographic keyhole / checkmark */}
      <circle cx="50" cy="68" r="4.5" fill="#F472B6" strokeWidth="0" />
    </svg>
  );
}

// 6. Digital Asset & Tokenisation Platforms
export function TokenisationIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
      {/* Outer Hexagonal Vault */}
      <polygon
        points="50,14 82,31 82,69 50,86 18,69 18,31"
        strokeWidth="4.5"
        strokeLinejoin="round"
        fill="rgba(167,139,250,0.14)"
      />
      {/* Token coin circle */}
      <circle cx="50" cy="50" r="21" strokeWidth="4" />
      {/* Asset symbol: Diamond / Crystal token */}
      <polygon
        points="50,37 62,50 50,63 38,50"
        strokeWidth="3.5"
        fill="#A78BFA"
        strokeLinejoin="round"
      />
      <line x1="38" y1="50" x2="62" y2="50" strokeWidth="2.5" stroke="#ffffff" />
    </svg>
  );
}

// 7. Blockchain-Based Supply Chain Management
export function SupplyChainIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
      {/* Origin Box */}
      <rect x="14" y="24" width="22" height="22" rx="4" strokeWidth="4" fill="rgba(74,222,128,0.18)" />
      {/* Transit Arrow with Hash Node */}
      <path d="M 36 35 H 64" strokeWidth="3.5" strokeDasharray="3 3" />
      <circle cx="50" cy="35" r="4.5" fill="#4ADE80" strokeWidth="0" />
      {/* Middle Transit Container */}
      <rect x="64" y="24" width="22" height="22" rx="4" strokeWidth="4" />
      {/* Downward Handover Path */}
      <path d="M 75 46 V 64" strokeWidth="3.5" strokeDasharray="3 3" />
      <polygon points="75,68 70,61 80,61" fill="currentColor" strokeWidth="0" />
      {/* Verified Destination Warehouse with Chain Link */}
      <rect x="34" y="62" width="32" height="24" rx="5" strokeWidth="4.5" fill="rgba(74,222,128,0.22)" />
      <path d="M 44 74 L 48 78 L 56 70" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke="#4ADE80" />
    </svg>
  );
}

// 8. Tamper-Evident Records & Data Integrity
export function TamperEvidentIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
      {/* Protected document */}
      <rect x="22" y="18" width="46" height="64" rx="7" strokeWidth="4.5" fill="rgba(250,204,21,0.12)" />
      <line x1="32" y1="32" x2="56" y2="32" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="32" y1="42" x2="52" y2="42" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="32" y1="52" x2="48" y2="52" strokeWidth="3.5" strokeLinecap="round" />
      {/* Tamper-evident holographic padlock */}
      <rect x="48" y="52" width="34" height="30" rx="6" strokeWidth="4.5" fill="#0f3254" />
      {/* Shackle */}
      <path d="M 56 52 V 42 A 9 9 0 0 1 74 42 V 52" strokeWidth="4" strokeLinecap="round" />
      {/* Keyhole with cryptographic glow */}
      <circle cx="65" cy="65" r="3.5" fill="#FACC15" strokeWidth="0" />
      <line x1="65" y1="67" x2="65" y2="73" strokeWidth="2.5" stroke="#FACC15" strokeLinecap="round" />
    </svg>
  );
}

// 9. Decentralised Data Exchange Platforms
export function DataExchangeIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
      {/* Left Data Repository Node */}
      <circle cx="28" cy="38" r="14" strokeWidth="4" fill="rgba(34,211,238,0.18)" />
      <rect x="23" y="34" width="10" height="8" rx="2" strokeWidth="2" />
      {/* Right Data Repository Node */}
      <circle cx="72" cy="38" r="14" strokeWidth="4" fill="rgba(34,211,238,0.18)" />
      <rect x="67" y="34" width="10" height="8" rx="2" strokeWidth="2" />
      {/* Bottom Peer Node */}
      <circle cx="50" cy="74" r="12" strokeWidth="4" fill="#172a3d" />
      {/* Bi-directional Exchange Arrows */}
      <path d="M 42 32 H 58" strokeWidth="3" strokeLinecap="round" stroke="#22D3EE" />
      <polygon points="59,32 54,28 54,36" fill="#22D3EE" strokeWidth="0" />
      <path d="M 58 44 H 42" strokeWidth="3" strokeLinecap="round" stroke="#22D3EE" />
      <polygon points="41,44 46,40 46,48" fill="#22D3EE" strokeWidth="0" />
      {/* Exchange paths to bottom */}
      <line x1="36" y1="50" x2="43" y2="64" strokeWidth="2.5" strokeDasharray="3 3" />
      <line x1="64" y1="50" x2="57" y2="64" strokeWidth="2.5" strokeDasharray="3 3" />
    </svg>
  );
}

// 10. Digital Transaction Verification Systems
export function TransactionVerificationIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
      {/* Circular Verification Ring */}
      <circle cx="50" cy="50" r="34" strokeWidth="4.5" fill="rgba(251,146,60,0.12)" />
      {/* High-speed audit scan rays */}
      <circle cx="50" cy="50" r="24" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
      {/* Confirmed Ledger Receipt Checkmark */}
      <path
        d="M 36 50 L 46 60 L 66 38"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#FB923C"
      />
      {/* Verification Stamp Badges */}
      <circle cx="50" cy="16" r="3" fill="#FB923C" strokeWidth="0" />
      <circle cx="84" cy="50" r="3" fill="#FB923C" strokeWidth="0" />
      <circle cx="50" cy="84" r="3" fill="#FB923C" strokeWidth="0" />
      <circle cx="16" cy="50" r="3" fill="#FB923C" strokeWidth="0" />
    </svg>
  );
}

// 11. Blockchain Interoperability Solutions
export function InteroperabilityIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
      {/* Network A (Left Ring) */}
      <circle cx="34" cy="50" r="20" strokeWidth="4" fill="rgba(129,140,248,0.18)" />
      <circle cx="34" cy="50" r="6" fill="#818CF8" strokeWidth="0" />
      {/* Network B (Right Ring) */}
      <circle cx="66" cy="50" r="20" strokeWidth="4" fill="rgba(129,140,248,0.18)" />
      <circle cx="66" cy="50" r="6" fill="#818CF8" strokeWidth="0" />
      {/* Cross-Network Communication Bridge */}
      <path d="M 34 38 C 50 28 50 28 66 38" strokeWidth="3.5" stroke="#ffffff" strokeLinecap="round" />
      <path d="M 34 62 C 50 72 50 72 66 62" strokeWidth="3.5" stroke="#ffffff" strokeLinecap="round" />
      {/* Bridge connector nodes */}
      <circle cx="50" cy="33" r="3.5" fill="#818CF8" strokeWidth="0" />
      <circle cx="50" cy="67" r="3.5" fill="#818CF8" strokeWidth="0" />
      {/* Overlapping intersection glow */}
      <line x1="50" y1="42" x2="50" y2="58" strokeWidth="3" strokeDasharray="2 2" stroke="#ffffff" />
    </svg>
  );
}

// 12. Decentralised Access & Trust Management
export function TrustManagementIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className}>
      {/* Trust Crest Shield */}
      <path
        d="M 50 16 L 78 28 V 52 C 78 70 50 84 50 84 C 50 84 22 70 22 52 V 28 Z"
        strokeWidth="4.5"
        strokeLinejoin="round"
        fill="rgba(45,212,191,0.14)"
      />
      {/* Distributed Multi-signature Access Key */}
      <circle cx="50" cy="42" r="10" strokeWidth="4" />
      <line x1="50" y1="52" x2="50" y2="68" strokeWidth="4" strokeLinecap="round" />
      <line x1="50" y1="60" x2="58" y2="60" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="50" y1="66" x2="56" y2="66" strokeWidth="3.5" strokeLinecap="round" />
      {/* Consensus Verification Sparkles */}
      <circle cx="50" cy="42" r="3" fill="#2DD4BF" strokeWidth="0" />
      <circle cx="34" cy="34" r="2.5" fill="#2DD4BF" strokeWidth="0" />
      <circle cx="66" cy="34" r="2.5" fill="#2DD4BF" strokeWidth="0" />
    </svg>
  );
}

// Map of string IDs to Icon components
export const ICON_MAP = {
  'blockchain-platform': BlockchainPlatformIcon,
  'smart-contracts': SmartContractsIcon,
  'dapp': DAppIcon,
  'dlt': DltIcon,
  'digital-identity': DigitalIdentityIcon,
  'tokenisation': TokenisationIcon,
  'supply-chain': SupplyChainIcon,
  'tamper-evident': TamperEvidentIcon,
  'data-exchange': DataExchangeIcon,
  'transaction-verification': TransactionVerificationIcon,
  'interoperability': InteroperabilityIcon,
  'trust-management': TrustManagementIcon,
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
  title,
  description = '',
  textLines = [],
  icon,
  accentColor,
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
          background: colors?.backFold || '#111827',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.40)',
        }}
      />

      {/* 2. Permanent Top Loop Cap (ON THE ROD) */}
      <div
        className="absolute top-0 inset-x-0 h-[30px] rounded-t-[10px] pointer-events-none z-30 overflow-hidden"
        style={{
          background: colors?.topFold,
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
            background: colors?.body,
            transformOrigin: '50% 28px',
            '--card-bg-cutout': colors?.cutout,
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
 * 6. PAGE HEADER CONTENT & COMPLETE DIGITAL SOLUTIONS SECTION
 * =============================================================================
 */
export const PAGE_TITLE =
  NextGenerationDigitalInnovationDecentralisedIntelligenceData?.pageHeading ||
  'Next-Generation Digital Innovation & Decentralised Intelligence';

export const PAGE_DESCRIPTION =
  NextGenerationDigitalInnovationDecentralisedIntelligenceData?.pageDescription || [
    'Explore next-generation digital technologies through a comprehensive collection of blockchain platforms, decentralised applications, smart contracts, digital identity systems, and distributed ledger solutions.',
    'This page brings together technologies for digital trust, transaction verification, data integrity, asset tokenisation, and secure information exchange, highlighting their potential to support transparent operations, interoperable systems, and scalable software products for enterprise, government, and commercial environments.'
  ];

export function NextGenerationDigitalInnovationDecentralisedIntelligencePage({
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
      {/* Injected Animation Styles */}
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

export const BlockchainDecentralisedTechPage = NextGenerationDigitalInnovationDecentralisedIntelligencePage;
export default NextGenerationDigitalInnovationDecentralisedIntelligencePage;
