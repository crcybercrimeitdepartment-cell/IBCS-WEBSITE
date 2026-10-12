import React from 'react';
import { ArrowRight, Atom, KeyRound, ShieldAlert, Cpu, Lock } from 'lucide-react';
import SectionDecorativeBackground from '../../../components/common/SectionDecorativeBackground';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';

/* =========================================================================
   CUSTOM VECTOR SVG: QUANTUM LATTICE & CRYPTOGRAPHIC QUBIT SHIELD
   ========================================================================= */
function QuantumCryptographyLatticeSVG() {
  return (
    <svg
      viewBox="0 0 520 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[480px] select-none drop-shadow-md"
    >
      <defs>
        <linearGradient id="qPlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E9F7F9" />
        </linearGradient>
        <linearGradient id="qCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0FA4AF" />
          <stop offset="50%" stopColor="#024950" />
          <stop offset="100%" stopColor="#003135" />
        </linearGradient>
      </defs>



      {/* Quantum Atomic Orbital Rings */}
      <ellipse cx="260" cy="180" rx="180" ry="60" stroke="#AFDDE5" strokeWidth="1.5" strokeDasharray="5 4" transform="rotate(-25 260 180)" />
      <ellipse cx="260" cy="180" rx="180" ry="60" stroke="#0FA4AF" strokeWidth="1.2" strokeDasharray="5 4" opacity="0.6" transform="rotate(25 260 180)" />
      <circle cx="260" cy="180" r="105" stroke="#AFDDE5" strokeWidth="1" strokeDasharray="3 3" />

      {/* Quantum Entanglement Matrix Lattice Lines */}
      <g stroke="#0FA4AF" strokeWidth="1.2" opacity="0.4">
        <line x1="120" y1="100" x2="260" y2="180" />
        <line x1="400" y1="100" x2="260" y2="180" />
        <line x1="120" y1="260" x2="260" y2="180" />
        <line x1="400" y1="260" x2="260" y2="180" />
      </g>

      {/* Center Quantum Shield Core */}
      <g transform="translate(260, 180)">
        <circle cx="0" cy="0" r="42" fill="url(#qCoreGrad)" stroke="#FFFFFF" strokeWidth="3" />
        {/* Qubit Atom Symbol inside Core */}
        <ellipse cx="0" cy="0" rx="26" ry="10" stroke="#AFDDE5" strokeWidth="1.5" transform="rotate(45)" />
        <ellipse cx="0" cy="0" rx="26" ry="10" stroke="#AFDDE5" strokeWidth="1.5" transform="rotate(-45)" />
        <circle cx="0" cy="0" r="8" fill="#FFFFFF" />
        <circle cx="0" cy="0" r="4" fill="#003135" />
      </g>
      <text x="260" y="245" textAnchor="middle" fill="#003135" fontSize="11" fontWeight="800" fontFamily="system-ui">Qubit Cipher Core</text>

      {/* Node 1: Post-Quantum Lattice (Top-Left) */}
      <g transform="translate(60, 60)">
        <rect width="115" height="55" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="25" cy="27" r="12" fill="#E6F7F9" />
        <polygon points="25,18 31,23 29,30 21,30 19,23" fill="none" stroke="#0FA4AF" strokeWidth="1.5" />
        <text x="45" y="24" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Lattice-Based</text>
        <text x="45" y="38" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">Algorithms</text>
      </g>

      {/* Node 2: Key Encapsulation (Top-Right) */}
      <g transform="translate(345, 60)">
        <rect width="115" height="55" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="25" cy="27" r="12" fill="#E6F7F9" />
        <rect x="18" y="21" width="14" height="12" rx="3" fill="none" stroke="#0FA4AF" strokeWidth="1.5" />
        <circle cx="25" cy="27" r="2" fill="#0FA4AF" />
        <text x="45" y="24" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Quantum Key</text>
        <text x="45" y="38" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">Exchange</text>
      </g>

      {/* Node 3: Classical & Quantum Hybrid (Bottom-Left) */}
      <g transform="translate(60, 245)">
        <rect width="115" height="55" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="25" cy="27" r="12" fill="#E6F7F9" />
        <path d="M 19 27 H 31 M 25 21 V 33" stroke="#0FA4AF" strokeWidth="1.5" strokeLinecap="round" />
        <text x="45" y="24" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Hybrid Cipher</text>
        <text x="45" y="38" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">Dual Defense</text>
      </g>

      {/* Node 4: Ultra-Secure Encryption (Bottom-Right) */}
      <g transform="translate(345, 245)">
        <rect width="115" height="55" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="25" cy="27" r="12" fill="#E6F7F9" />
        <path d="M 21 27 L 24 30 L 29 23" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="45" y="24" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Future-Proof</text>
        <text x="45" y="38" fill="#10B981" fontSize="9" fontWeight="bold" fontFamily="system-ui">Encryption</text>
      </g>
    </svg>
  );
}

export default function QuantumSecurityCryptographySection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#quantum-security-cryptography';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  return (
    <section
      id="quantum-security-cryptography"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F2F8FA] via-[#E8F4F7] to-[#DFEFF2] border-b border-[#D4AF37]/20 overflow-hidden relative"
    >
      {/* Interactive Decorative Background Theme */}
      <SectionDecorativeBackground variant="quantum" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Descriptions & Actions */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">


            <AnimatedSectionHeading
              text="Quantum Security & Advanced Cryptography"
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-[#081E52] mb-5 text-center lg:text-left"
            />

            <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#081E52]/85 font-medium mb-6 text-center lg:text-left">
              <p>
                Pioneering post-quantum cryptographic software and next-generation data encryption products for ultra-secure digital operations.
              </p>
              <p>
                We engineer future-proof cryptographic protocols and resilient key-management architectures to safeguard sensitive data against classical and quantum threats.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <Lock className="w-4 h-4 text-[#0FA4AF] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Post-Quantum Protocols</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <KeyRound className="w-4 h-4 text-[#0FA4AF] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Resilient Key Management</span>
              </div>
            </div>

            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0FA4AF] to-[#024950] text-white font-extrabold text-sm sm:text-base shadow-md shadow-[#0FA4AF]/25 hover:shadow-lg hover:from-[#0d8e98] hover:to-[#01353a] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Quantum Security</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Custom Quantum Lattice SVG (Transparent & Live in Synchronized Motion) */}
          <div className="lg:col-span-6 flex items-center justify-center animate-float-slow">
            <QuantumCryptographyLatticeSVG />
          </div>

        </div>
      </div>
    </section>
  );
}
