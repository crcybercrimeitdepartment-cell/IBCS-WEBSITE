import React, { useState } from 'react';
import { Home } from 'lucide-react';
import { cardsData } from './InvestigationLegalInstitutionalTechnologyPageData.js';

const RecipeCard = ({ 
  glowColor = "#ff9966", 
  c1 = "#ffbb66", 
  c2 = "#ff8866", 
  c3 = "#ff2233", 
  badgeTextColor = "text-orange-600",
  number = "01",
  title = "Investigation Management Products",
  description = "We develop investigation management software products that provide structured digital workflows for authorised investigative activities."
}) => {
  const [isLocked, setIsLocked] = useState(false);

  return (
    <>
      <style>
        {`
          @keyframes spinCW {
            0% { transform: rotateZ(0deg); }
            100% { transform: rotateZ(360deg); }
          }
          @keyframes spinCCW {
            0% { transform: rotateZ(360deg); }
            100% { transform: rotateZ(0deg); }
          }
          @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(12px); }
            100% { transform: translateY(0px); }
          }
          
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.15);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 0, 0, 0.3);
          }
        `}
      </style>

      <div 
        className="w-[260px] h-[348px] overflow-visible group cursor-pointer" 
        style={{ '--glow-color': glowColor }}
        onClick={() => setIsLocked(!isLocked)}
      >
        <div className={`w-full h-full relative [transform-style:preserve-3d] transition-transform duration-500 shadow-[0_25px_50px_-5px_rgba(0,0,0,0.15)] rounded-[8px] ${isLocked ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'}`}>
          {/* FRONT FACE */}
          <div className="absolute inset-0 bg-[#fdfaf5] [backface-visibility:hidden] rounded-[8px] overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -mt-[300px] -ml-[300px] w-[600px] h-[600px] bg-[conic-gradient(from_0deg_at_50%_50%,var(--glow-color)_0%,transparent_15%,transparent_85%,var(--glow-color)_100%)]" style={{ animation: 'spinCW 5000ms infinite linear' }}></div>
            <div className="absolute top-1/2 left-1/2 -mt-[300px] -ml-[300px] w-[600px] h-[600px] bg-[conic-gradient(from_0deg_at_50%_50%,var(--glow-color)_0%,transparent_15%,transparent_85%,var(--glow-color)_100%)]" style={{ animation: 'spinCCW 5000ms infinite linear' }}></div>
            
            <div className="absolute top-1/2 left-1/2 -mt-[171px] -ml-[127px] w-[254px] h-[342px] bg-[#fdfaf5] rounded-[5px] text-gray-800 flex flex-col justify-center items-center gap-[24px] z-10 p-[24px] text-center shadow-inner">
              <h3 className={`tracking-wider text-[20px] font-bold uppercase leading-snug ${badgeTextColor}`}>
                {title}
              </h3>
              
              <div className="flex items-center gap-2 text-gray-400 mt-6 transition-colors duration-300 group-hover:text-gray-700">
                 <span className="text-[10px] uppercase tracking-widest font-bold">Hover to explore</span>
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </div>
            </div>
          </div>

          {/* BACK FACE */}
          <div className="absolute inset-0 bg-[#fdfaf5] [backface-visibility:hidden] rounded-[8px] overflow-hidden [transform:rotateY(180deg)] text-gray-800 z-20">
            <div className="absolute inset-0 opacity-90">
              <div className="relative w-[130px] h-[130px] rounded-full blur-[22px] [animation:floating_2600ms_infinite_linear]" style={{ backgroundColor: c1 }}></div>
              <div className="absolute left-[70px] top-[0px] w-[200px] h-[200px] rounded-full blur-[30px] [animation:floating_2600ms_infinite_linear] [animation-delay:-800ms]" style={{ backgroundColor: c2 }}></div>
              <div className="absolute left-[220px] top-[-110px] w-[45px] h-[45px] rounded-full blur-[15px] [animation:floating_2600ms_infinite_linear] [animation-delay:-1800ms]" style={{ backgroundColor: c3 }}></div>
            </div>

            <div className="absolute inset-0 p-[16px] z-30">
              <div className="w-full h-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/60 p-[18px] bg-white/30 backdrop-blur-xl rounded-[12px] flex flex-col overflow-hidden">
                <h4 className={`shrink-0 font-bold leading-tight text-[14px] mb-3 uppercase tracking-wide border-b border-gray-200/50 pb-3 ${badgeTextColor}`}>
                  {title}
                </h4>
                
                <div 
                  className="flex-1 overflow-y-auto pr-2 custom-scrollbar [transform:translateZ(1px)] hover:overscroll-contain"
                  onClick={(e) => e.stopPropagation()}
                >
                   <p className="text-gray-800 text-[12px] font-semibold tracking-wide leading-[1.7] text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                     {description}
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function InvestigationLegalInstitutionalTechnologyPage({ onClose }) {
  const handleBack = () => {
    if (onClose) {
      onClose();
    } else {
      window.location.hash = '#investigation-legal-institutional-technology';
    }
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#EBF7F8] via-[#E7F3F5] to-[#DFEFF2] py-10 px-4 flex flex-col items-center justify-start font-sans pb-24">
      {/* Top Header Navigation buttons */}
      <div className="max-w-6xl w-full px-2 pt-2 pb-6 flex items-center justify-start gap-3">
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

      {/* Header Section */}
      <div className="max-w-6xl w-full text-center mb-14 px-4 md:px-8">
        <h1 className="text-[32px] leading-[1.15] md:text-[48px] font-black tracking-tighter uppercase mb-6 text-[#081E52]">
          Investigation, Legal &amp; Institutional Technology
        </h1>
        
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#0FA4AF] to-[#006670] mx-auto rounded-full mb-10 opacity-90 shadow-sm"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left text-gray-700 text-[15px] md:text-[16px] leading-[1.8] max-w-5xl mx-auto font-medium">
          <div className="relative">
            <p className="text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              We develop specialised software products for lawful investigation, legal technology, case management and institutional workflows. These products are designed to help authorised organisations manage complex information, records, documents, cases and reporting processes through structured digital systems.
            </p>
          </div>

          <div className="relative">
            <p className="text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              Our technology can support investigation management, evidence-related workflows, intelligence analysis, complaint management and legal information systems. All such products are intended for lawful and authorised use and remain subject to applicable laws, regulations, permissions, institutional policies and access controls.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl w-full px-4 justify-items-center">
        {cardsData.map((card) => (
          <RecipeCard
            key={card.id}
            glowColor={card.glowColor}
            c1={card.c1}
            c2={card.c2}
            c3={card.c3}
            badgeTextColor={card.badgeTextColor}
            number={card.number}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
