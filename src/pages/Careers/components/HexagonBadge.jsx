import React from 'react';

export function HexagonBadge({ number = "02", gradientId = "hexGrad", fromColor = "#f43f5e", toColor = "#a855f7" }) {
  return (
    <svg viewBox="0 0 100 115" className="w-14 h-16 drop-shadow-md overflow-visible select-none">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={fromColor} />
          <stop offset="100%" stopColor={toColor} />
        </linearGradient>
      </defs>
      {/* Outer Hexagon Outline */}
      <polygon
        points="50 3, 95 28, 95 87, 50 112, 5 87, 5 28"
        fill="#081E52"
        stroke={`url(#${gradientId})`}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Inner Fill Hexagon */}
      <polygon
        points="50 12, 87 33, 87 82, 50 103, 13 82, 13 33"
        fill={`url(#${gradientId})`}
        strokeLinejoin="round"
      />
      {/* Number Text in Center */}
      <text
        x="50"
        y="65"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontFamily="sans-serif"
        fontSize="34"
        fontWeight="900"
        letterSpacing="-1"
      >
        {number}
      </text>
    </svg>
  );
}

export default HexagonBadge;
