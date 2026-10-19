import React from 'react';
import { ArrowRight, Scale, FileSearch, ShieldCheck, FolderGit2, Binary } from 'lucide-react';
import SectionDecorativeBackground from '../../../components/common/SectionDecorativeBackground';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';

/* =========================================================================
   CUSTOM VECTOR SVG: EVIDENCE CHAIN & LEGAL REPOSITORY DIAGRAM
   ========================================================================= */
function InvestigationEvidenceChainSVG() {
  return (
    <svg
      viewBox="0 0 540 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[500px] select-none"
    >
      <defs>
        <linearGradient id="invVaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0FA4AF" />
          <stop offset="100%" stopColor="#003135" />
        </linearGradient>
        <linearGradient id="invCardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F8FA" />
        </linearGradient>
      </defs>



      {/* Connecting Chain Path Lines */}
      <path d="M 120 140 L 220 140" stroke="#0FA4AF" strokeWidth="2.5" strokeDasharray="5 3" />
      <path d="M 320 140 L 420 140" stroke="#0FA4AF" strokeWidth="2.5" strokeDasharray="5 3" />

      {/* Stage 1: Case Dossier Intake (Left) */}
      <g transform="translate(40, 90)">
        <rect width="80" height="100" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <rect x="12" y="14" width="30" height="6" rx="3" fill="#0FA4AF" opacity="0.6" />
        <line x1="12" y1="30" x2="68" y2="30" stroke="#003135" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="42" x2="60" y2="42" stroke="#003135" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="12" y1="54" x2="68" y2="54" stroke="#003135" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="12" y1="66" x2="45" y2="66" stroke="#003135" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <circle cx="62" cy="78" r="8" fill="#E6F7F9" />
        <path d="M 59 78 L 61 80 L 65 76" stroke="#0FA4AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="80" y="210" textAnchor="middle" fill="#003135" fontSize="11" fontWeight="bold" fontFamily="system-ui">Case Intake</text>

      {/* Stage 2: Central Encrypted Evidence Vault (Center) */}
      <g transform="translate(220, 70)">
        <rect width="100" height="135" rx="14" fill="url(#invVaultGrad)" stroke="#AFDDE5" strokeWidth="2" />
        {/* Safe Dial & Seal */}
        <circle cx="50" cy="55" r="26" fill="#003135" stroke="#AFDDE5" strokeWidth="2" />
        <circle cx="50" cy="55" r="18" fill="none" stroke="#0FA4AF" strokeWidth="2" strokeDasharray="4 4" />
        {/* Scale Symbol inside Vault */}
        <path d="M 50 42 V 58 M 42 46 H 58 M 42 46 L 39 52 M 58 46 L 61 52 M 36 52 H 42 M 58 52 H 64" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
        {/* Cryptographic Hash Bars */}
        <rect x="20" y="96" width="60" height="6" rx="3" fill="#AFDDE5" opacity="0.8" />
        <rect x="25" y="108" width="50" height="5" rx="2.5" fill="#AFDDE5" opacity="0.5" />
        <circle cx="82" cy="22" r="4" fill="#10B981" />
      </g>
      <text x="270" y="222" textAnchor="middle" fill="#003135" fontSize="12" fontWeight="800" fontFamily="system-ui">Evidence Vault</text>

      {/* Stage 3: Legal Analytics & Audit Trail (Right) */}
      <g transform="translate(420, 90)">
        <rect width="80" height="100" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        {/* Shield with Gavel Check */}
        <path d="M 40 22 L 62 30 V 48 C 62 60 40 68 40 68 C 40 68 18 60 18 48 V 30 Z" fill="#E6F7F9" stroke="#0FA4AF" strokeWidth="1.5" />
        <path d="M 33 46 L 38 51 L 48 41" stroke="#0FA4AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="18" y="78" width="44" height="6" rx="3" fill="#003135" opacity="0.2" />
      </g>
      <text x="460" y="210" textAnchor="middle" fill="#003135" fontSize="11" fontWeight="bold" fontFamily="system-ui">Lawful Audit</text>

      {/* Verification Hashes on Connectors */}
      <rect x="145" y="128" width="50" height="16" rx="8" fill="#E6F7F9" stroke="#0FA4AF" strokeWidth="1" />
      <text x="170" y="140" textAnchor="middle" fill="#0FA4AF" fontSize="8" fontWeight="bold" fontFamily="monospace">SHA-256</text>

      <rect x="345" y="128" width="50" height="16" rx="8" fill="#E6F7F9" stroke="#0FA4AF" strokeWidth="1" />
      <text x="370" y="140" textAnchor="middle" fill="#0FA4AF" fontSize="8" fontWeight="bold" fontFamily="monospace">VERIFIED</text>
    </svg>
  );
}

export default function InvestigationLegalInstitutionalTechnologySection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#investigation-legal-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  return (
    <section
      id="investigation-legal-institutional-technology"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#EBF5F7] via-[#E6F3F5] to-[#DFEFF2] border-b border-[#D4AF37]/20 overflow-hidden relative"
    >
      {/* Interactive Decorative Background Theme */}
      <SectionDecorativeBackground variant="legal" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-14">


          <AnimatedSectionHeading
            text="Investigation, Legal & Institutional Technology"
            className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-[#081E52] mb-5 text-center"
          />

          <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#081E52]/85 font-medium text-center max-w-3xl text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            We develop specialised software products for lawful investigation, legal technology, case management and institutional workflows. These products are designed to help authorised organisations manage complex information, records, documents, cases and reporting processes through structured digital systems.
          </p>
        </div>

        {/* Centerpiece Vector Architecture Graphic (Transparent & Live in Synchronized Motion) */}
        <div className="w-full max-w-4xl mx-auto mb-10 flex items-center justify-center animate-float-slow">
          <InvestigationEvidenceChainSVG />
        </div>

        {/* Bottom 2 Pillars and Policy Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          <div className="p-5 rounded-2xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#E6F7F9] flex items-center justify-center text-[#0FA4AF] shrink-0">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#081E52] mb-1">Investigation &amp; Case Workflow</h4>
              <p className="text-xs text-[#081E52]/80 leading-relaxed font-medium text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                Supporting structured evidence-related workflows, complaint management, case dossiers and verified intelligence pipelines.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#E6F7F9] flex items-center justify-center text-[#0FA4AF] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#081E52] mb-1">Lawful Use &amp; Access Controls</h4>
              <p className="text-xs text-[#081E52]/80 leading-relaxed font-medium text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                All software products are built for lawful, authorised institutional deployment subject to governing regulations and strict permissions.
              </p>
            </div>
          </div>
        </div>

        {/* Centered CTA */}
        <div className="w-full flex justify-center">
          <button
            type="button"
            onClick={handleCtaClick}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0FA4AF] to-[#024950] text-white font-extrabold text-sm sm:text-base shadow-md shadow-[#0FA4AF]/25 hover:shadow-lg hover:from-[#0d8e98] hover:to-[#01353a] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Explore Legal &amp; Investigation Technology</span>
            <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
