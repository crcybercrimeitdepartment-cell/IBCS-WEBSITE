import React from 'react';
import { GraduationCap } from 'lucide-react';
import { getIcon } from './iconRegistry';

export default function DocumentVerificationCard({
  step = "01",
  title = "VERIFICATION",
  description = "",
  themeGradient = "from-[#22d68f] to-[#0cb675]",
  badgeGradient = "from-[#20cb88] to-[#11b876]",
  circleBg = "bg-[#00b074]",
  circleShadow = "shadow-[0_8px_20px_rgba(0,176,116,0.34)]",
  outerShadow = "shadow-[0_16px_36px_rgba(16,185,129,0.28)]",
  iconName = "GraduationCap",
  className = "",
  ...props
}) {
  const IconComponent = getIcon(iconName, GraduationCap);

  return (
    <div
      className={`group relative w-[275px] sm:w-[295px] xl:w-[310px] max-w-full h-[340px] sm:h-[360px] select-none cursor-pointer transition-transform duration-500 hover:-translate-y-2.5 ${className}`}
      {...props}
    >
      {/* 1. Colored Backplate (Outer Layer) */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${themeGradient} rounded-[40px] ${outerShadow} transition-shadow duration-500 group-hover:shadow-2xl`}
      />

      {/* 2. White Foreground Card with Asymmetric Rounded Corners */}
      <div
        className="absolute top-[26px] left-[20px] right-0 bottom-0 bg-white border border-slate-200/80 rounded-tl-[46px] rounded-bl-[40px] rounded-br-[40px] rounded-tr-[24px] shadow-[-5px_10px_22px_rgba(0,0,0,0.08)] flex flex-col items-center justify-between p-5 pt-8 pb-5 overflow-hidden z-10 group-hover:border-[#D4AF37] transition-colors"
      >
        {/* Top-Right STEP Capsule Badge */}
        <div
          className="absolute top-0 right-0 bg-gradient-to-r from-[#081E52] to-[#0c2b7a] text-white pl-6 pr-4 py-2.5 rounded-l-full shadow-md flex items-center gap-2.5 z-20"
        >
          <div className="flex flex-col items-center justify-center text-[7.5px] sm:text-[8px] font-black tracking-widest leading-[1.05] opacity-95">
            <span>S</span>
            <span>T</span>
            <span>E</span>
            <span>P</span>
          </div>
          <span className="text-2xl sm:text-[27px] font-black tracking-tight leading-none text-white">
            {step}
          </span>
        </div>

        {/* Center Content: Title and Uppercase Description */}
        <div className="flex flex-col items-center justify-center w-full mt-9 sm:mt-10 px-2 text-center">
          <h3 className="text-[13.5px] sm:text-[14.5px] font-black tracking-[0.07em] text-slate-800 uppercase font-sans mb-2 line-clamp-2 leading-tight group-hover:text-[#081E52] transition-colors">
            {title}
          </h3>
          <p className="text-[9.5px] sm:text-[10px] font-bold text-slate-500 tracking-wider leading-[1.55] uppercase text-center max-w-[225px] line-clamp-3">
            {description}
          </p>
        </div>

        {/* Bottom Circular Icon Badge */}
        <div
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-slate-50 border-2 border-slate-200 shadow-md flex items-center justify-center text-[#081E52] transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:border-[#D4AF37]"
        >
          <div className="flex items-center justify-center transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]">
            <IconComponent className="w-7 h-7 text-[#081E52] stroke-[2.2]" />
          </div>
        </div>
      </div>
    </div>
  );
}
