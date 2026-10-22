import React from 'react';
import { Briefcase } from 'lucide-react';
import { getIcon } from './iconRegistry';

export default function RecruitmentCard({ item, index, totalCards = 16 }) {
  const IconComponent = getIcon(item.icon, Briefcase);
  const accent = item.accentColor || "#D4AF37";

  const rowIndex = Math.floor(index / 4);
  const colIndex = index % 4;
  const isEvenRow = rowIndex % 2 === 0;
  const isOddRow = rowIndex % 2 === 1;
  const totalRows = Math.ceil(totalCards / 4);
  const isLastRow = rowIndex >= totalRows - 1;

  const isEvenRowCardWithNext = isEvenRow && colIndex < 3 && index + 1 < totalCards;
  const isEvenRowTurnaround = isEvenRow && colIndex === 3 && !isLastRow;
  const isOddRowCardWithNext = isOddRow && colIndex > 0;
  const isOddRowTurnaround = isOddRow && colIndex === 0 && !isLastRow;
  const isTabletLeftCol = index % 2 === 0;
  const hasMobileNextCard = index < totalCards - 1;

  let flowPath = "";
  if (isEvenRow) {
    if (isEvenRowCardWithNext) {
      flowPath = "M 15 180 L 15 40 A 24 24 0 0 1 39 16 L 261 16 A 24 24 0 0 1 285 40 L 285 320 A 24 24 0 0 1 261 344 L 39 344 A 24 24 0 0 1 15 320 L 15 180 L 15 40 A 24 24 0 0 1 39 16 L 261 16 A 24 24 0 0 1 285 40 L 285 180 L 348 180";
    } else if (isEvenRowTurnaround) {
      flowPath = "M 15 180 L 15 40 A 24 24 0 0 1 39 16 L 261 16 A 24 24 0 0 1 285 40 L 285 320 A 24 24 0 0 1 261 344 L 39 344 A 24 24 0 0 1 15 320 L 15 180 L 15 40 A 24 24 0 0 1 39 16 L 261 16 A 24 24 0 0 1 285 40 L 285 320 L 285 415";
    } else {
      flowPath = "M 15 180 L 15 40 A 24 24 0 0 1 39 16 L 261 16 A 24 24 0 0 1 285 40 L 285 320 A 24 24 0 0 1 261 344 L 39 344 A 24 24 0 0 1 15 320 Z";
    }
  } else {
    if (isOddRowCardWithNext) {
      flowPath = "M 285 180 L 285 40 A 24 24 0 0 0 261 16 L 39 16 A 24 24 0 0 0 15 40 L 15 320 A 24 24 0 0 0 39 344 L 261 344 A 24 24 0 0 0 285 320 L 285 180 L 285 40 A 24 24 0 0 0 261 16 L 39 16 A 24 24 0 0 0 15 40 L 15 180 L -48 180";
    } else if (isOddRowTurnaround) {
      flowPath = "M 285 180 L 285 40 A 24 24 0 0 0 261 16 L 39 16 A 24 24 0 0 0 15 40 L 15 320 A 24 24 0 0 0 39 344 L 261 344 A 24 24 0 0 0 285 320 L 285 180 L 285 40 A 24 24 0 0 0 261 16 L 39 16 A 24 24 0 0 0 15 40 L 15 320 L 15 415";
    } else {
      flowPath = "M 285 180 L 285 40 A 24 24 0 0 0 261 16 L 39 16 A 24 24 0 0 0 15 40 L 15 320 A 24 24 0 0 0 39 344 L 261 344 A 24 24 0 0 0 285 320 Z";
    }
  }

  const stepNumber = parseInt(item.id, 10) || (index + 1);
  const entranceDelay = `${(stepNumber - 1) * 70}ms`;

  return (
    <div 
      className="relative flex flex-col animate-card-entrance"
      style={{ animationDelay: entranceDelay }}
    >
      <div 
        onClick={() => { window.location.hash = '#coming-soon'; }}
        className="group relative flex flex-col justify-between p-2 sm:p-2.5 select-none transition-all duration-300 cursor-pointer"
      >
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10 transition-transform duration-300 group-hover:scale-[1.01]" 
          viewBox="0 0 300 360" 
          preserveAspectRatio="none"
          fill="none"
        >
          {isEvenRow ? (
            <>
              <polygon 
                points="3,173 15,180 3,187" 
                fill={accent} 
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
              <path 
                d="M 15 180 L 15 40 A 24 24 0 0 1 39 16 L 261 16 A 24 24 0 0 1 285 40 L 285 95" 
                stroke={accent} 
                strokeWidth="3.2" 
                strokeLinecap="round" 
              />
              <path 
                className="animate-dash-flow"
                d="M 285 95 L 285 320 A 24 24 0 0 1 261 344 L 39 344 A 24 24 0 0 1 15 320 L 15 180" 
                stroke={accent} 
                strokeWidth="3.2" 
                strokeDasharray="4 6" 
                strokeLinecap="round" 
              />
              <circle cx="285" cy="180" r="5" fill={accent} />
            </>
          ) : (
            <>
              <polygon 
                points="297,173 285,180 297,187" 
                fill={accent} 
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              <path 
                d="M 285 180 L 285 40 A 24 24 0 0 0 261 16 L 39 16 A 24 24 0 0 0 15 40 L 15 95" 
                stroke={accent} 
                strokeWidth="3.2" 
                strokeLinecap="round" 
              />
              <path 
                className="animate-dash-flow"
                d="M 15 95 L 15 320 A 24 24 0 0 0 39 344 L 261 344 A 24 24 0 0 0 285 320 L 285 180" 
                stroke={accent} 
                strokeWidth="3.2" 
                strokeDasharray="4 6" 
                strokeLinecap="round" 
              />
              <circle cx="15" cy="180" r="5" fill={accent} />
            </>
          )}

          <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <circle r="4.5" fill={accent} opacity="0.75" className="filter drop-shadow-md">
              <animateMotion dur="2.8s" repeatCount="indefinite" path={flowPath} />
            </circle>
            <polygon points="-6,-5 8,0 -6,5" fill={accent} className="filter drop-shadow-md">
              <animateMotion dur="2.8s" repeatCount="indefinite" rotate="auto" path={flowPath} />
            </polygon>
          </g>
        </svg>

        <div className="relative z-20 mx-3 my-3 bg-white rounded-[26px] p-6 sm:p-7 flex flex-col items-center justify-center text-center shadow-md group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 border border-slate-200/80 group-hover:border-[#D4AF37] min-h-[320px] sm:min-h-[350px]">
          {/* Ribbon */}
          <div className="absolute -top-3.5 right-4 sm:right-5 z-40">
            <div className="relative">
              <div 
                className="px-6 py-2 text-white font-sans tracking-wide uppercase transform -skew-x-[22deg] shadow-md flex items-center justify-center transition-all duration-300 group-hover:-skew-x-[16deg] group-hover:scale-105 rounded-sm bg-gradient-to-r from-[#081E52] to-[#0c2b7a]"
              >
                <div className="transform skew-x-[22deg] group-hover:skew-x-[16deg] flex items-center gap-1.5 transition-transform">
                  <span className="text-xs font-bold tracking-wider text-white/80">STEP</span>
                  <span className="text-sm sm:text-base font-black tracking-widest text-white">{item.id}</span>
                </div>
              </div>
              <div className="absolute -bottom-1.5 left-2 right-2 h-2.5 bg-black/10 blur-[3px] rounded-full transform -skew-x-[22deg]" />
            </div>
          </div>

          {/* Icon */}
          <div className="w-full flex flex-col items-center mt-3 mb-3">
            <div 
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-sm bg-slate-50 border border-slate-200 text-[#081E52] group-hover:border-[#D4AF37] group-hover:text-[#081E52]"
            >
              <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
            </div>
          </div>

          {/* Title & Short Description */}
          <div className="w-full flex flex-col items-center px-1">
            <h3 className="font-black text-sm sm:text-[15px] uppercase tracking-wider mb-2 line-clamp-2 transition-colors duration-200 text-slate-800 group-hover:text-[#081E52]">
              {item.title}
            </h3>
            <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-normal text-center line-clamp-3 max-w-[240px]">
              {item.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Connectors */}
      {isEvenRowCardWithNext && (
        <div className="hidden lg:flex absolute -right-8 lg:-right-9 top-1/2 -translate-y-1/2 w-8 lg:w-9 items-center z-30 pointer-events-none">
          <div className="h-[3.2px] w-full relative overflow-hidden" style={{ backgroundColor: `${accent}40` }}>
            <div className="h-full w-full transition-opacity duration-300 opacity-70 group-hover:opacity-100" style={{ backgroundColor: accent }} />
            <div className="absolute inset-y-0 w-1/2 bg-white/90 blur-[1px] animate-beam-travel hidden group-hover:block" />
          </div>
          <div className="animate-arrow-thrust transition-transform duration-300">
            <svg className="w-3.5 h-3.5 shrink-0 -mr-1" viewBox="0 0 12 12" fill="none">
              <polygon points="1,1 11,6 1,11" fill={accent} />
            </svg>
          </div>
        </div>
      )}

      {isEvenRowTurnaround && (
        <div className="hidden lg:flex absolute -bottom-8 lg:-bottom-9 right-8 lg:right-9 h-8 lg:h-9 flex-col items-center z-30 pointer-events-none">
          <div className="w-[3.2px] h-full relative overflow-hidden" style={{ backgroundColor: `${accent}40` }}>
            <div className="w-full h-full transition-opacity duration-300 opacity-70 group-hover:opacity-100" style={{ backgroundColor: accent }} />
            <div className="absolute inset-x-0 h-1/2 bg-white/90 blur-[1px] animate-beam-travel-vertical hidden group-hover:block" />
          </div>
          <div className="animate-arrow-thrust-down transition-transform duration-300">
            <svg className="w-3.5 h-3.5 shrink-0 -mb-1" viewBox="0 0 12 12" fill="none">
              <polygon points="1,1 6,11 11,1" fill={accent} />
            </svg>
          </div>
        </div>
      )}

      {isOddRowCardWithNext && (
        <div className="hidden lg:flex absolute -left-8 lg:-left-9 top-1/2 -translate-y-1/2 w-8 lg:w-9 items-center z-30 pointer-events-none">
          <div className="animate-arrow-thrust-left transition-transform duration-300">
            <svg className="w-3.5 h-3.5 shrink-0 -ml-1" viewBox="0 0 12 12" fill="none">
              <polygon points="11,1 1,6 11,11" fill={accent} />
            </svg>
          </div>
          <div className="h-[3.2px] w-full relative overflow-hidden" style={{ backgroundColor: `${accent}40` }}>
            <div className="h-full w-full transition-opacity duration-300 opacity-70 group-hover:opacity-100" style={{ backgroundColor: accent }} />
            <div className="absolute inset-y-0 w-1/2 bg-white/90 blur-[1px] animate-beam-travel-left hidden group-hover:block" />
          </div>
        </div>
      )}

      {isOddRowTurnaround && (
        <div className="hidden lg:flex absolute -bottom-8 lg:-bottom-9 left-8 lg:left-9 h-8 lg:h-9 flex-col items-center z-30 pointer-events-none">
          <div className="w-[3.2px] h-full relative overflow-hidden" style={{ backgroundColor: `${accent}40` }}>
            <div className="w-full h-full transition-opacity duration-300 opacity-70 group-hover:opacity-100" style={{ backgroundColor: accent }} />
            <div className="absolute inset-x-0 h-1/2 bg-white/90 blur-[1px] animate-beam-travel-vertical hidden group-hover:block" />
          </div>
          <div className="animate-arrow-thrust-down transition-transform duration-300">
            <svg className="w-3.5 h-3.5 shrink-0 -mb-1" viewBox="0 0 12 12" fill="none">
              <polygon points="1,1 6,11 11,1" fill={accent} />
            </svg>
          </div>
        </div>
      )}

      {isTabletLeftCol && (
        <div className="hidden md:flex lg:hidden absolute -right-8 top-1/2 -translate-y-1/2 w-8 items-center z-30 pointer-events-none">
          <div className="h-[3.2px] w-full relative overflow-hidden" style={{ backgroundColor: accent }}>
            <div className="absolute inset-y-0 w-1/2 bg-white/90 animate-beam-travel hidden group-hover:block" />
          </div>
          <div className="animate-arrow-thrust">
            <svg className="w-3.5 h-3.5 shrink-0 -mr-1" viewBox="0 0 12 12" fill="none">
              <polygon points="1,1 11,6 1,11" fill={accent} />
            </svg>
          </div>
        </div>
      )}

      {hasMobileNextCard && (
        <div className="flex md:hidden absolute left-1/2 -translate-x-1/2 -bottom-8 h-8 flex-col items-center z-30 pointer-events-none">
          <div className="w-[3.2px] h-full relative overflow-hidden" style={{ backgroundColor: accent }}>
            <div className="absolute inset-x-0 h-1/2 bg-white/90 animate-beam-travel-vertical hidden group-hover:block" />
          </div>
          <div className="animate-arrow-thrust-down">
            <svg className="w-3.5 h-3.5 shrink-0 -mb-1" viewBox="0 0 12 12" fill="none">
              <polygon points="1,1 6,11 11,1" fill={accent} />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
