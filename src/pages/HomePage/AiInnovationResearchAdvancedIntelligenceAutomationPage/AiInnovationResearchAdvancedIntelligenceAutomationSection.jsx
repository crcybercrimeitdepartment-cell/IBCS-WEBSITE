import React from 'react';
import { ArrowRight, Brain, Cpu, Sparkles, Network, Workflow, Zap, Bot } from 'lucide-react';
import SectionDecorativeBackground from '../../../components/common/SectionDecorativeBackground';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';

/* =========================================================================
   CUSTOM VECTOR SVG: AI NEURAL INNOVATION & AUTOMATION INTELLIGENCE MESH
   ========================================================================= */
function AiInnovationIntelligenceLatticeSVG() {
  return (
    <svg
      viewBox="0 0 520 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[480px] select-none drop-shadow-md"
    >
      <defs>
        <linearGradient id="aiPlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E9F7F9" />
        </linearGradient>
        <linearGradient id="aiCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0FA4AF" />
          <stop offset="50%" stopColor="#024950" />
          <stop offset="100%" stopColor="#003135" />
        </linearGradient>
        <radialGradient id="aiPulseGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0FA4AF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0FA4AF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient Neural Radiance Orb */}
      <circle cx="260" cy="180" r="140" fill="url(#aiPulseGlow)" />

      {/* Concentric Cognitive Orbital Rings */}
      <ellipse cx="260" cy="180" rx="190" ry="68" stroke="#AFDDE5" strokeWidth="1.5" strokeDasharray="6 4" transform="rotate(-20 260 180)" />
      <ellipse cx="260" cy="180" rx="190" ry="68" stroke="#0FA4AF" strokeWidth="1.2" strokeDasharray="5 5" opacity="0.65" transform="rotate(20 260 180)" />
      <circle cx="260" cy="180" r="110" stroke="#AFDDE5" strokeWidth="1" strokeDasharray="4 4" />

      {/* Synaptic Pathway Lattice Lines */}
      <g stroke="#0FA4AF" strokeWidth="1.3" opacity="0.45">
        <line x1="120" y1="95" x2="260" y2="180" strokeDasharray="4 3" />
        <line x1="400" y1="95" x2="260" y2="180" strokeDasharray="4 3" />
        <line x1="120" y1="265" x2="260" y2="180" strokeDasharray="4 3" />
        <line x1="400" y1="265" x2="260" y2="180" strokeDasharray="4 3" />
        {/* Cross synapse interconnects */}
        <line x1="120" y1="95" x2="120" y2="265" opacity="0.3" strokeDasharray="2 4" />
        <line x1="400" y1="95" x2="400" y2="265" opacity="0.3" strokeDasharray="2 4" />
      </g>

      {/* Floating Synapse Micro-Pulses */}
      <circle cx="190" cy="138" r="3.5" fill="#0FA4AF" />
      <circle cx="330" cy="138" r="3.5" fill="#0FA4AF" />
      <circle cx="190" cy="222" r="3.5" fill="#0FA4AF" />
      <circle cx="330" cy="222" r="3.5" fill="#0FA4AF" />

      {/* Central Cognitive AI Core */}
      <g transform="translate(260, 180)">
        <circle cx="0" cy="0" r="46" fill="url(#aiCoreGrad)" stroke="#FFFFFF" strokeWidth="3.5" />
        {/* Inner Microprocessor & Neural Loops */}
        <rect x="-16" y="-16" width="32" height="32" rx="7" fill="none" stroke="#AFDDE5" strokeWidth="1.8" />
        <circle cx="0" cy="0" r="7" fill="#FFFFFF" />
        <circle cx="0" cy="0" r="3.5" fill="#003135" />

        {/* Radiating Micro-pins */}
        <line x1="-20" y1="-8" x2="-16" y2="-8" stroke="#AFDDE5" strokeWidth="1.5" />
        <line x1="-20" y1="0" x2="-16" y2="0" stroke="#AFDDE5" strokeWidth="1.5" />
        <line x1="-20" y1="8" x2="-16" y2="8" stroke="#AFDDE5" strokeWidth="1.5" />

        <line x1="16" y1="-8" x2="20" y2="-8" stroke="#AFDDE5" strokeWidth="1.5" />
        <line x1="16" y1="0" x2="20" y2="0" stroke="#AFDDE5" strokeWidth="1.5" />
        <line x1="16" y1="8" x2="20" y2="8" stroke="#AFDDE5" strokeWidth="1.5" />

        <line x1="-8" y1="-20" x2="-8" y2="-16" stroke="#AFDDE5" strokeWidth="1.5" />
        <line x1="0" y1="-20" x2="0" y2="-16" stroke="#AFDDE5" strokeWidth="1.5" />
        <line x1="8" y1="-20" x2="8" y2="-16" stroke="#AFDDE5" strokeWidth="1.5" />

        <line x1="-8" y1="16" x2="-8" y2="20" stroke="#AFDDE5" strokeWidth="1.5" />
        <line x1="0" y1="16" x2="0" y2="20" stroke="#AFDDE5" strokeWidth="1.5" />
        <line x1="8" y1="16" x2="8" y2="20" stroke="#AFDDE5" strokeWidth="1.5" />
      </g>
      <text x="260" y="248" textAnchor="middle" fill="#003135" fontSize="11" fontWeight="800" fontFamily="system-ui">
        Cognitive AI Core
      </text>

      {/* Node 1: AI Research & Foundations (Top-Left) */}
      <g transform="translate(55, 55)">
        <rect width="125" height="58" rx="12" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="28" cy="29" r="14" fill="#E6F7F9" />
        {/* Brain icon representation */}
        <path d="M 23 26 C 21 24, 21 21, 24 20 C 26 19, 29 20, 30 22 C 32 20, 35 20, 36 22 C 38 24, 37 28, 35 29 C 36 32, 34 35, 31 35 C 29 35, 27 34, 26 33 C 24 35, 21 34, 21 31 C 21 29, 22 27, 23 26 Z" fill="none" stroke="#0FA4AF" strokeWidth="1.5" strokeLinejoin="round" />
        <text x="49" y="26" fill="#081E52" fontSize="10.5" fontWeight="bold" fontFamily="system-ui">AI Research</text>
        <text x="49" y="41" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">Deep Learning</text>
      </g>

      {/* Node 2: Intelligent Automation & Workflows (Top-Right) */}
      <g transform="translate(340, 55)">
        <rect width="125" height="58" rx="12" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="28" cy="29" r="14" fill="#E6F7F9" />
        {/* Workflow Gear / Bolt icon */}
        <polygon points="28,20 31,26 27,26 29,34 23,27 27,27" fill="#0FA4AF" />
        <text x="49" y="26" fill="#081E52" fontSize="10.5" fontWeight="bold" fontFamily="system-ui">Intelligent Workflows</text>
        <text x="49" y="41" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">Autonomous Ops</text>
      </g>

      {/* Node 3: Advanced Intelligence (Bottom-Left) */}
      <g transform="translate(55, 250)">
        <rect width="125" height="58" rx="12" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="28" cy="29" r="14" fill="#E6F7F9" />
        <circle cx="28" cy="29" r="5" fill="#0FA4AF" />
        <circle cx="21" cy="23" r="2.5" fill="#0FA4AF" />
        <circle cx="35" cy="23" r="2.5" fill="#0FA4AF" />
        <circle cx="28" cy="36" r="2.5" fill="#0FA4AF" />
        <line x1="28" y1="29" x2="21" y2="23" stroke="#0FA4AF" strokeWidth="1.2" />
        <line x1="28" y1="29" x2="35" y2="23" stroke="#0FA4AF" strokeWidth="1.2" />
        <line x1="28" y1="29" x2="28" y2="36" stroke="#0FA4AF" strokeWidth="1.2" />
        <text x="49" y="26" fill="#081E52" fontSize="10.5" fontWeight="bold" fontFamily="system-ui">Decision Intelligence</text>
        <text x="49" y="41" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">Data Analytics</text>
      </g>

      {/* Node 4: Product Development & Edge Automation (Bottom-Right) */}
      <g transform="translate(340, 250)">
        <rect width="125" height="58" rx="12" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="28" cy="29" r="14" fill="#E6F7F9" />
        <path d="M 23 29 L 26 32 L 33 24" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="49" y="26" fill="#081E52" fontSize="10.5" fontWeight="bold" fontFamily="system-ui">Enterprise AI Apps</text>
        <text x="49" y="41" fill="#10B981" fontSize="9" fontWeight="bold" fontFamily="system-ui">Commercial Scale</text>
      </g>
    </svg>
  );
}

export default function AiInnovationResearchAdvancedIntelligenceAutomationSection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#ai-innovation-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  return (
    <section
      id="ai-innovation-research-advanced-intelligence-automation"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F2F8FA] via-[#E8F4F7] to-[#DFEFF2] border-b border-[#D4AF37]/20 overflow-hidden relative"
    >
      {/* Interactive Decorative Background Theme */}
      <SectionDecorativeBackground variant="ai" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Descriptions & Actions */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <AnimatedSectionHeading
              text="AI Innovation, Research & Advanced Intelligence Automation"
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-[#081E52] mb-5 text-center lg:text-left"
            />

            <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#081E52]/85 font-medium mb-6 text-center lg:text-left">
              <p>
                Driving AI innovation through advanced research, intelligent systems, and next-generation automation technologies. This section focuses on AI-driven capabilities, intelligent workflows, advanced data processing, and automation solutions that support smarter decision-making, improve operational efficiency, and enable intelligent software product development for government, enterprise, cybersecurity, and commercial applications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <Brain className="w-4 h-4 text-[#0FA4AF] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Intelligent Systems & Workflows</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <Workflow className="w-4 h-4 text-[#0FA4AF] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Next-Gen Automation Research</span>
              </div>
            </div>

            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0FA4AF] to-[#024950] text-white font-extrabold text-sm sm:text-base shadow-md shadow-[#0FA4AF]/25 hover:shadow-lg hover:from-[#0d8e98] hover:to-[#01353a] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span>Explore AI Innovation & Automation</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Custom AI Neural Innovation & Automation SVG */}
          <div className="lg:col-span-6 flex items-center justify-center animate-float-slow">
            <AiInnovationIntelligenceLatticeSVG />
          </div>

        </div>
      </div>
    </section>
  );
}
