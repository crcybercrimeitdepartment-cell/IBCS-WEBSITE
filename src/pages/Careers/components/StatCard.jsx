import React from 'react';
import { getIcon } from './iconRegistry';
import { beamGradients } from '../CareerPageData';

export function StatCard({
  icon,
  iconName,
  iconColor = "text-[#D4AF37]",
  title = "Card Name",
  description,
  value,
  blobColor = "fill-[#D4AF37]/25",
  className = "",
  onClick,
  ...props
}) {
  const beamClass = beamGradients[blobColor] || beamGradients['fill-rose-300'];
  const ResolvedIcon = iconName ? getIcon(iconName) : null;

  return (
    <div
      onClick={onClick}
      className={`group relative flex h-36 sm:h-40 w-full max-w-[290px] xl:max-w-[310px] p-[1.5px] overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-200/90 border border-slate-200 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer select-none ${className}`}
      {...props}
    >
      {/* Rotating border light effect on hover */}
      <div
        className={`absolute inset-[-150%] ${beamClass} animate-border-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Inner Card Container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-3 sm:p-4 rounded-[calc(1rem-2px)] sm:rounded-[calc(1.5rem-2px)] bg-slate-50/95 group-hover:bg-white transition-colors duration-500 overflow-hidden">
        {/* Glowing Color Aura containing the Icon */}
        <div className="relative mb-1.5 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute inset-0 h-full w-full scale-135 duration-500 ${blobColor} blur-md transition-all group-hover:scale-150 group-hover:blur-sm`}
          >
            <path
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.2,53.8,66.6,40.4,74.1C27,81.6,13.5,85.2,-0.7,86.4C-14.8,87.6,-29.6,86.4,-42.7,80.2C-55.8,74,-67.2,62.8,-75.4,49.4C-83.6,36,-88.6,20.4,-89.1,4.7C-89.6,-11,-85.6,-26.8,-77.7,-40.4C-69.8,-54,-58,-65.4,-44.3,-72.8C-30.6,-80.2,-15.3,-83.6,0.5,-84.5C16.3,-85.4,30.6,-83.6,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Render Resolved Icon or Passed Component */}
          {ResolvedIcon ? (
            <ResolvedIcon className={`relative z-10 h-6 w-6 sm:h-7 sm:w-7 ${iconColor} transition-transform duration-500 group-hover:scale-115`} />
          ) : icon ? (
            React.cloneElement(icon, {
              className: `relative z-10 h-6 w-6 sm:h-7 sm:w-7 ${iconColor} transition-transform duration-500 group-hover:scale-115`,
            })
          ) : null}
        </div>

        {/* Card Title */}
        <h3 className="text-center font-bold text-slate-900 text-xs sm:text-sm tracking-tight line-clamp-1 group-hover:text-[#081E52] transition-colors">
          {title}
        </h3>

        {/* Card Subtitle / Description */}
        {description && (
          <p className="mt-0.5 text-center text-[10px] sm:text-[11px] text-slate-600 line-clamp-2 max-w-[220px] font-normal leading-tight">
            {description}
          </p>
        )}

        {/* Card Metric / Optional Value */}
        {value && (
          <span className="mt-1 font-mono text-[10px] font-bold text-[#081E52]">
            {value}
          </span>
        )}
      </div>
    </div>
  );
}

export default StatCard;
