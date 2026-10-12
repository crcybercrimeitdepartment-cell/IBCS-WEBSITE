import React from 'react';
import { GraduationCap } from 'lucide-react';
import { getIcon } from './iconRegistry';
import HexagonBadge from './HexagonBadge';
import SurroundingFlowArrows from './SurroundingFlowArrows';

export default function PortalOptionCard({
  step = "02",
  title = "OPTIONS",
  description = "",
  iconName = "GraduationCap",
  fromColor = "#f43f5e",
  toColor = "#a855f7",
  className = "",
  style = {},
  onClick,
  ...props
}) {
  const gradientId = `grad-${step}-${fromColor.replace('#', '')}`;
  const IconComponent = getIcon(iconName, GraduationCap);

  return (
    <div
      onClick={onClick}
      style={style}
      className={`group relative w-[250px] sm:w-[265px] xl:w-[285px] h-[355px] sm:h-[370px] select-none cursor-pointer transition-all duration-500 hover:-translate-y-2.5 ${className}`}
      {...props}
    >
      <SurroundingFlowArrows
        arrowId={gradientId}
        fromColor={fromColor}
        toColor={toColor}
      />

      <HexagonBadge
        number={step}
        gradientId={gradientId}
        fromColor={fromColor}
        toColor={toColor}
      />

      <div
        className="relative z-10 w-full h-full bg-gradient-to-b from-white via-white to-[#fafaff] rounded-tr-[42px] rounded-tl-[30px] rounded-br-[30px] rounded-bl-[62px] border border-slate-200/80 shadow-[0_20px_45px_rgba(168,85,247,0.12),0_6px_18px_rgba(0,0,0,0.04)] flex flex-col items-center justify-between p-6 pt-11 pb-7 text-center transition-all duration-500 group-hover:border-[#D4AF37] group-hover:shadow-[0_28px_56px_rgba(212,175,55,0.20)]"
      >
        <div className="flex flex-col items-center justify-center mt-3">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-slate-200 bg-slate-50 shadow-sm flex items-center justify-center text-[#081E52] transition-all duration-700 ease-in-out group-hover:scale-115 group-hover:rotate-[360deg] group-hover:border-[#D4AF37] group-hover:text-[#081E52]">
            <IconComponent className="w-6 h-6 stroke-[1.8]" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full px-2 my-auto">
          <h3 className="text-[13px] sm:text-[14px] font-black tracking-[0.18em] text-slate-800 uppercase font-sans mb-3 group-hover:text-[#081E52] transition-colors">
            {title}
          </h3>
          <p className="text-[9.5px] sm:text-[10px] font-bold text-slate-500 tracking-wider leading-[1.65] uppercase text-center max-w-[215px]">
            {description}
          </p>
        </div>

        <div
          className="w-8 h-1 rounded-full opacity-60 group-hover:w-12 group-hover:opacity-100 transition-all duration-500"
          style={{ backgroundColor: toColor }}
        />
      </div>
    </div>
  );
}
