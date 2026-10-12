import React from 'react';
import { ArrowRight, GraduationCap, BookOpen, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionDecorativeBackground from '../../../components/common/SectionDecorativeBackground';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';

/* =========================================================================
   CUSTOM VECTOR SVG: DIGITAL ACADEMY & SKILL ECOSYSTEM GRAPHIC
   ========================================================================= */
function EducationSkillEcosystemSVG() {
  return (
    <svg
      viewBox="0 0 520 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[480px] select-none drop-shadow-md"
    >
      <defs>
        <linearGradient id="eduBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F9FA" />
        </linearGradient>
        <linearGradient id="eduCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0FA4AF" />
          <stop offset="100%" stopColor="#003135" />
        </linearGradient>
      </defs>



      {/* Orbit Track Rings */}
      <ellipse cx="260" cy="190" rx="190" ry="110" stroke="#AFDDE5" strokeWidth="1.5" strokeDasharray="5 5" />
      <ellipse cx="260" cy="190" rx="120" ry="70" stroke="#0FA4AF" strokeWidth="1.2" opacity="0.6" />

      {/* Central Core: Digital Academy & Learning Hub */}
      <g transform="translate(260, 190)">
        <circle cx="0" cy="0" r="44" fill="url(#eduCoreGrad)" stroke="#FFFFFF" strokeWidth="3" />
        {/* Graduation Cap Vector */}
        <path d="M 0 -14 L 20 -4 L 0 6 L -20 -4 Z" fill="#FFFFFF" />
        <path d="M -13 0 V 10 C -13 14 0 18 0 18 C 0 18 13 14 13 10 V 0" fill="#AFDDE5" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M 16 -2 V 12" stroke="#AFDDE5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="13" r="2.5" fill="#FFFFFF" />
      </g>
      <text x="260" y="250" textAnchor="middle" fill="#003135" fontSize="12" fontWeight="800" fontFamily="system-ui">Learning Hub</text>

      {/* Satellite Node 1: Digital Courseware (Top-Left) */}
      <g transform="translate(90, 80)">
        <rect width="110" height="60" rx="12" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="28" cy="30" r="14" fill="#E6F7F9" />
        <path d="M 22 26 H 34 M 22 30 H 32 M 22 34 H 28" stroke="#0FA4AF" strokeWidth="2" strokeLinecap="round" />
        <text x="48" y="28" fill="#003135" fontSize="11" fontWeight="bold" fontFamily="system-ui">Digital</text>
        <text x="48" y="42" fill="#0FA4AF" fontSize="10" fontWeight="bold" fontFamily="system-ui">Content</text>
      </g>

      {/* Satellite Node 2: Skill Assessment (Top-Right) */}
      <g transform="translate(320, 80)">
        <rect width="110" height="60" rx="12" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="28" cy="30" r="14" fill="#E6F7F9" />
        <circle cx="28" cy="30" r="8" fill="none" stroke="#0FA4AF" strokeWidth="2" />
        <path d="M 25 30 L 27 32 L 32 27" stroke="#0FA4AF" strokeWidth="1.8" strokeLinecap="round" />
        <text x="48" y="28" fill="#003135" fontSize="11" fontWeight="bold" fontFamily="system-ui">Adaptive</text>
        <text x="48" y="42" fill="#0FA4AF" fontSize="10" fontWeight="bold" fontFamily="system-ui">Assessment</text>
      </g>

      {/* Satellite Node 3: Competency Analytics (Bottom-Left) */}
      <g transform="translate(90, 240)">
        <rect width="110" height="60" rx="12" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="28" cy="30" r="14" fill="#E6F7F9" />
        <path d="M 22 35 L 26 27 L 30 31 L 34 23" stroke="#0FA4AF" strokeWidth="2" strokeLinecap="round" />
        <text x="48" y="28" fill="#003135" fontSize="11" fontWeight="bold" fontFamily="system-ui">Skill Matrix</text>
        <text x="48" y="42" fill="#0FA4AF" fontSize="10" fontWeight="bold" fontFamily="system-ui">Analytics</text>
      </g>

      {/* Satellite Node 4: Certified Credentials (Bottom-Right) */}
      <g transform="translate(320, 240)">
        <rect width="110" height="60" rx="12" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="28" cy="30" r="14" fill="#E6F7F9" />
        <polygon points="28,22 30,27 35,27 31,30 33,35 28,32 23,35 25,30 21,27 26,27" fill="#0FA4AF" />
        <text x="48" y="28" fill="#003135" fontSize="11" fontWeight="bold" fontFamily="system-ui">Credential</text>
        <text x="48" y="42" fill="#0FA4AF" fontSize="10" fontWeight="bold" fontFamily="system-ui">Issuance</text>
      </g>
    </svg>
  );
}

export default function EducationTrainingSkillDevelopmentTechnologySection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#education-training-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  return (
    <section
      id="education-training-skill-development-technology"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F4F9FA] via-[#ECF6F8] to-[#E3F2F5] border-b border-[#D4AF37]/20 overflow-hidden relative"
    >
      {/* Interactive Decorative Background Theme */}
      <SectionDecorativeBackground variant="education" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Graphic (Transparent & Live in Synchronized Motion) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex items-center justify-center animate-float-slow">
            <EducationSkillEcosystemSVG />
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">


            <AnimatedSectionHeading
              text="Education, Training & Skill Development Technology"
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-[#081E52] mb-5 text-center lg:text-left"
            />

            <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#081E52]/85 font-medium mb-6 text-center lg:text-left">
              <p>
                We develop software products and digital platforms for education, training, professional development and skill development. Our education technology products can support learning management, digital content, assessment, training administration, competency development and institutional operations.
              </p>
              <p>
                Our product-based approach enables the development of scalable education and learning platforms for educational institutions, organisations, training providers and other lawful users. We combine software engineering, data, cloud, automation and AI technologies to create modern digital learning products.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <BookOpen className="w-4 h-4 text-[#0FA4AF] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Learning Management</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <Award className="w-4 h-4 text-[#0FA4AF] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Competency Assessment</span>
              </div>
            </div>

            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0FA4AF] to-[#024950] text-white font-extrabold text-sm sm:text-base shadow-md shadow-[#0FA4AF]/25 hover:shadow-lg hover:from-[#0d8e98] hover:to-[#01353a] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Education Solutions</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
