import React from 'react';

export default function SurroundingFlowArrows({ arrowId = "arrowGrad", fromColor = "#f43f5e", toColor = "#a855f7" }) {
  return (
    <svg
      className="absolute -top-8 -left-8 -right-8 -bottom-8 w-[calc(100%+64px)] h-[calc(100%+64px)] pointer-events-none z-0 overflow-visible"
      viewBox="0 0 344 434"
      fill="none"
    >
      <defs>
        <linearGradient id={`${arrowId}-top`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={fromColor} />
          <stop offset="60%" stopColor={toColor} />
          <stop offset="100%" stopColor={toColor} />
        </linearGradient>

        <linearGradient id={`${arrowId}-bot`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={fromColor} />
          <stop offset="40%" stopColor={toColor} />
          <stop offset="100%" stopColor={toColor} />
        </linearGradient>
      </defs>

      <g className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
        <path
          d="M 110 14 L 285 14 A 45 45 0 0 1 330 59 L 330 175"
          pathLength="100"
          stroke={`url(#${arrowId}-top)`}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          className="arrow-path-anim"
        />
        <path
          d="M -9 -7 L 8 0 L -9 7 L -5 0 Z"
          fill={toColor}
          className="arrow-head-top"
        />
      </g>

      <g className="transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1">
        <path
          d="M 14 205 L 14 365 A 55 55 0 0 0 69 420 L 205 420"
          pathLength="100"
          stroke={`url(#${arrowId}-bot)`}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          className="arrow-path-anim"
        />
        <path
          d="M -9 -7 L 8 0 L -9 7 L -5 0 Z"
          fill={toColor}
          className="arrow-head-bot"
        />
      </g>
    </svg>
  );
}
