import React, { useState, useMemo, useEffect, useRef, memo } from 'react';
import { headerInfo, pillars, services, capabilities } from './DigitalForensicsIncidentResponseServicesPageData.js';
export { headerInfo, pillars, services, capabilities };

// Mathematically symmetrical biometric hologram ridges (100% mirrored across X = 771 with uniform 24px spacing)
const ridges = [
  "M476 280C520 174 638 88 771 88C904 88 1022 174 1066 280",
  "M498.4 294C539 194 640 112 755 112M787 112C902 112 1003 194 1043.6 294",
  "M520.9 308C558 213 658 136 771 136C884 136 984 213 1021.1 308",
  "M543.3 322C577 233 661 160 755 160M787 160C881 160 965 233 998.7 322",
  "M565.8 336C597 252 679 184 771 184C863 184 945 252 976.2 336",
  "M588.2 350C616 272 681 208 755 208M787 208C861 208 926 272 953.8 350",
  "M610.7 364C635 291 699 232 771 232C843 232 907 291 931.3 364",
  "M633.2 378C654 311 701 256 755 256M787 256C841 256 888 311 908.8 378",
  "M655.7 392C673 330 719 280 771 280C823 280 869 330 886.3 392",
  "M475.4 296C474 345 471 386 470.3 435M1066.6 296C1068 345 1071 386 1071.7 435",
  "M469.7 457C469 518 468 569 468.2 630M1072.3 457C1073 518 1074 569 1073.8 630",
  "M468.4 652C470 735 479 805 485.5 888M1073.6 652C1072 735 1063 805 1056.5 888",
  "M497.8 310C496 364 494 411 492.6 465M1044.2 310C1046 364 1048 411 1049.4 465",
  "M492.1 487C492 548 491 599 491.5 660M1049.9 487C1050 548 1051 599 1050.5 660",
  "M491.9 682C493 754 502 816 508.5 888M1050.1 682C1049 754 1040 816 1033.5 888",
  "M520.2 324C519 363 517 396 516.3 435M1021.8 324C1023 363 1025 396 1025.7 435",
  "M515.7 457C515 518 514 569 514.2 630M1026.3 457C1027 518 1028 569 1027.8 630",
  "M514.4 652C516 735 525 805 531.5 888M1027.6 652C1026 735 1017 805 1010.5 888",
  "M542.7 338C542 382 539 421 538.6 465M999.3 338C1000 382 1003 421 1003.4 465",
  "M538.1 487C538 548 537 599 537.5 660M1003.9 487C1004 548 1005 599 1004.5 660",
  "M537.9 682C539 754 548 816 554.5 888M1004.1 682C1003 754 994 816 987.5 888",
  "M565.1 352C564 381 563 406 562.3 435M976.9 352C978 381 979 406 979.7 435",
  "M561.7 457C561 518 560 569 560.2 630M980.3 457C981 518 982 569 981.8 630",
  "M560.4 652C562 735 571 805 577.5 888M981.6 652C980 735 971 805 964.5 888",
  "M587.6 366C587 401 585 430 584.6 465M954.4 366C955 401 957 430 957.4 465",
  "M584.1 487C584 548 583 599 583.5 660M957.9 487C958 548 959 599 958.5 660",
  "M583.9 682C585 754 594 816 600.5 888M958.1 682C957 754 948 816 941.5 888",
  "M610.1 380C610 399 609 416 608.3 435M931.9 380C932 399 933 416 933.7 435",
  "M607.7 457C607 518 606 569 606.2 630M934.3 457C935 518 936 569 935.8 630",
  "M606.4 652C608 735 617 805 623.5 888M935.6 652C934 735 925 805 918.5 888",
  "M669 902C681 831 725 772 771 772C817 772 861 831 873 902",
  "M691 902C701 845 735 798 771 798C807 798 841 845 851 902",
  "M713 902C720 859 745 824 771 824C797 824 822 859 829 902",
  "M735 902C739 873 755 850 771 850C787 850 803 873 807 902",
  "M755 902C757 888 764 876 771 876C778 876 785 888 787 902",
];

// Helper to determine the best relevant icon for each capability based on keywords
function getCapabilityIcon(title = '', desc = '') {
  const t = (title + ' ' + desc).toLowerCase();
  if (t.includes('cloud') || t.includes('hosted') || t.includes('workload')) return 'cloud';
  if (t.includes('memory') || t.includes('volatile') || t.includes('ram') || t.includes('lock') || t.includes('encrypt')) return 'lock';
  if (t.includes('triage') || t.includes('initial') || t.includes('impact') || t.includes('scop')) return 'identity';
  if (t.includes('timeline') || t.includes('reconstruct') || t.includes('event') || t.includes('chart') || t.includes('readiness') || t.includes('assess')) return 'chart';
  if (t.includes('custody') || t.includes('chain') || t.includes('transfer') || t.includes('process') || t.includes('workflow') || t.includes('gear')) return 'gear';
  if (t.includes('network') || t.includes('packet') || t.includes('traffic') || t.includes('proxy') || t.includes('log') || t.includes('server') || t.includes('database')) return 'database';
  if (t.includes('malware') || t.includes('investigat') || t.includes('root') || t.includes('search') || t.includes('trace') || t.includes('carv') || t.includes('hunt') || t.includes('analys')) return 'search';
  if (t.includes('contain') || t.includes('remediat') || t.includes('acquisit') || t.includes('imag') || t.includes('device') || t.includes('tool') || t.includes('isolat')) return 'tools';
  if (t.includes('authority') || t.includes('consent') || t.includes('team') || t.includes('user') || t.includes('stakeholder') || t.includes('handover') || t.includes('counsel')) return 'users';
  if (t.includes('hash') || t.includes('verif') || t.includes('integrit') || t.includes('complian') || t.includes('shield')) return 'shield';
  if (t.includes('preserv') || t.includes('evidence') || t.includes('record') || t.includes('document') || t.includes('report') || t.includes('statement')) return 'document';
  return 'fingerprint';
}

const IdentityArtwork = memo(function IdentityArtwork() {
  return (
    <g aria-hidden="true" className="identity-artwork">
      <defs>
        <radialGradient id="identity-atmosphere">
          <stop stopColor="#ffffff" />
          <stop offset=".45" stopColor="#f3f8fd" />
          <stop offset="1" stopColor="#eaf1f8" />
        </radialGradient>
        <linearGradient id="identity-rack">
          <stop stopColor="#ffffff" />
          <stop offset=".5" stopColor="#e9f1fa" />
          <stop offset="1" stopColor="#dde7f2" />
        </linearGradient>
        <linearGradient id="identity-metal" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#f8fbff" />
          <stop offset=".18" stopColor="#dbe8f5" />
          <stop offset=".27" stopColor="#edf5fc" />
          <stop offset=".5" stopColor="#c5daf0" />
          <stop offset=".69" stopColor="#e6f1fb" />
          <stop offset=".8" stopColor="#d3e4f3" />
          <stop offset="1" stopColor="#edf5fc" />
        </linearGradient>
        <radialGradient id="identity-stage">
          <stop stopColor="#ffffff" />
          <stop offset=".68" stopColor="#edf5fd" />
          <stop offset=".84" stopColor="#dbeaf8" />
          <stop offset=".94" stopColor="#cce2f5" />
          <stop offset="1" stopColor="#7daecf" />
        </radialGradient>
        <linearGradient id="identity-ridge" x1="0" y1="0" x2="1" y2=".4">
          <stop stopColor="#00b4d8" />
          <stop offset=".15" stopColor="#0077b6" />
          <stop offset=".42" stopColor="#0284c7" />
          <stop offset=".7" stopColor="#0369a1" />
          <stop offset=".88" stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#00b4d8" />
        </linearGradient>
        <linearGradient id="identity-ridge-light" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#ffffff" stopOpacity=".95" />
          <stop offset=".4" stopColor="#7dd3fc" stopOpacity=".35" />
          <stop offset="1" stopColor="#bae6fd" stopOpacity=".85" />
        </linearGradient>
        <filter id="identity-soft-light">
          <feGaussianBlur stdDeviation="11" />
        </filter>
        <filter id="identity-ridge-glow" x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="5" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="identity-floor-grid" width="104" height="32" patternUnits="userSpaceOnUse">
          <path d="M0 0H104M0 0V32" fill="none" stroke="#0284c7" strokeOpacity=".16" strokeWidth="1" />
        </pattern>
      </defs>
      {/* Dynamic Concentric Floor Rings with Multi-Cadence Rotation */}
      {[680, 598, 520, 449, 387].map((rx, i) => (
        <g key={rx}>
          <ellipse
            cx="771"
            cy="928"
            rx={rx}
            ry={72 + i * 5}
            fill="none"
            stroke={i % 2 ? '#9abedb' : '#0284c7'}
            strokeWidth={i === 0 ? 2.5 : 1.5}
            strokeDasharray={i % 2 === 0 ? '80 30 15 30 140 40' : '120 40 30 40'}
            strokeOpacity="0.85"
          >
            <animate
              attributeName="stroke-dashoffset"
              values={i % 2 === 0 ? '0; 1600' : '1600; 0'}
              dur={`${20 + i * 4}s`}
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse
            cx="771"
            cy="928"
            rx={rx - 9}
            ry={68 + i * 5}
            fill="none"
            stroke="#38bdf8"
            strokeOpacity=".45"
            strokeWidth="2.5"
            strokeDasharray="50 25 10 25"
          >
            <animate
              attributeName="stroke-dashoffset"
              values={i % 2 === 0 ? '1200; 0' : '0; 1200'}
              dur={`${16 + i * 3}s`}
              repeatCount="indefinite"
            />
          </ellipse>
          {i % 2 === 0 && (
            <ellipse
              cx="771"
              cy="928"
              rx={rx - 20}
              ry={63 + i * 5}
              fill="none"
              stroke="#00b4d8"
              strokeWidth="3.2"
              filter="url(#identity-glow)"
              strokeDasharray="190 40 15 80 85 200"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0; 2400"
                dur={`${15 + i * 3}s`}
                repeatCount="indefinite"
              />
            </ellipse>
          )}
        </g>
      ))}
      {/* Turntable Pedestal Base Group with Cinematic Initialization */}
      <g className="turntable-pedestal-group">
        <path d="M385 902v27c0 44 172 80 386 80s386-36 386-80v-27Z" fill="url(#identity-metal)" stroke="#a8c9e7" strokeWidth="2" />
        <ellipse cx="771" cy="902" rx="386" ry="76" fill="url(#identity-stage)" stroke="#a8c9e7" strokeWidth="2" />

        {/* Stage Rim Outer Cyan Glow Ring with Rotating Pulse */}
        <ellipse cx="771" cy="907" rx="352" ry="62" fill="none" stroke="#00b4d8" strokeWidth="8" filter="url(#identity-glow)" />
        <ellipse
          cx="771"
          cy="907"
          rx="352"
          ry="62"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="4"
          strokeDasharray="90 35 20 35 150 40"
          filter="url(#identity-glow)"
        >
          <animate attributeName="stroke-dashoffset" values="0; 1400" dur="14s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="771" cy="906" rx="354" ry="63" fill="none" stroke="#ffffff" strokeWidth="2.5" />

        {/* Rotating 3D Perspective Turntable on Top of Stage (scaled to 76/386 ≈ 0.197) */}
        <g transform="translate(771 902) scale(1 0.197)">
          {/* Layer 1: Clockwise Outer Compass Radar Dial */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="22s"
              repeatCount="indefinite"
            />
            <circle r="325" fill="none" stroke="#00b4d8" strokeWidth="2" strokeDasharray="25 15 50 15 10 15" strokeOpacity="0.85" filter="url(#identity-glow)" />
            {Array.from({ length: 12 }, (_, k) => {
              const angle = (k * 30 * Math.PI) / 180;
              const x1 = Math.cos(angle) * 310;
              const y1 = Math.sin(angle) * 310;
              const x2 = Math.cos(angle) * 335;
              const y2 = Math.sin(angle) * 335;
              return (
                <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00b4d8" strokeWidth="3" opacity="0.9" filter="url(#identity-glow)" />
              );
            })}
            {[0, 90, 180, 270].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <circle
                  key={deg}
                  cx={Math.cos(rad) * 325}
                  cy={Math.sin(rad) * 325}
                  r="6"
                  fill="#38bdf8"
                  filter="url(#identity-glow)"
                />
              );
            })}
          </g>

          {/* Layer 2: Counter-Clockwise Intermediate Dial */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360"
              to="0"
              dur="16s"
              repeatCount="indefinite"
            />
            <circle r="260" fill="none" stroke="#0284c7" strokeWidth="2.5" strokeDasharray="60 25 20 25" strokeOpacity="0.8" />
            {Array.from({ length: 8 }, (_, k) => {
              const angle = (k * 45 * Math.PI) / 180;
              const x1 = Math.cos(angle) * 248;
              const y1 = Math.sin(angle) * 248;
              const x2 = Math.cos(angle) * 270;
              const y2 = Math.sin(angle) * 270;
              return (
                <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#38bdf8" strokeWidth="2.2" opacity="0.85" />
              );
            })}
            <circle cx="260" cy="0" r="5" fill="#00f0ff" filter="url(#identity-glow)" />
            <circle cx="-260" cy="0" r="5" fill="#00f0ff" filter="url(#identity-glow)" />
            <circle cx="0" cy="260" r="5" fill="#00f0ff" filter="url(#identity-glow)" />
            <circle cx="0" cy="-260" r="5" fill="#00f0ff" filter="url(#identity-glow)" />
          </g>

          {/* Layer 3: Clockwise Core Reticle */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="10s"
              repeatCount="indefinite"
            />
            <circle r="195" fill="none" stroke="#00b4d8" strokeWidth="2" strokeDasharray="30 12 10 12" opacity="0.8" filter="url(#identity-glow)" />
            <circle cx="195" cy="0" r="4" fill="#ffffff" filter="url(#identity-glow)" />
            <circle cx="-195" cy="0" r="4" fill="#ffffff" filter="url(#identity-glow)" />
          </g>
        </g>

        {/* Front Curved Cylinder Track with Animated Rotating Ticks */}
        <path d="M402 931c127 62 613 62 738 0" fill="none" stroke="#00b4d8" strokeWidth="3" opacity="0.4" filter="url(#identity-glow)" />
        <path
          d="M402 931c127 62 613 62 738 0"
          fill="none"
          stroke="#00b4d8"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="16 26"
          filter="url(#identity-glow)"
        >
          <animate attributeName="stroke-dashoffset" values="0; 840" dur="8s" repeatCount="indefinite" />
        </path>
        <path
          d="M410 933c124 60 598 60 722 0"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="25 45"
        >
          <animate attributeName="stroke-dashoffset" values="840; 0" dur="11s" repeatCount="indefinite" />
        </path>
      </g>
      <ellipse cx="771" cy="516" rx="274" ry="402" fill="#0284c7" opacity=".04" />
      {/* Hand-drawn biometric ridges with Cinematic Ignition Pulse */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" className="biometric-ridges-group">
        <g stroke="#38bdf8" strokeWidth="17" opacity=".3" filter="url(#identity-ridge-glow)">
          {ridges.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
        <g stroke="url(#identity-ridge)" strokeWidth="12" filter="url(#identity-ridge-glow)">
          {ridges.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
        <g stroke="url(#identity-ridge-light)" strokeWidth="2.4" transform="translate(-1 -2)">
          {ridges.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
      </g>
    </g>
  );
});

function Icon({ type, ...props }) {
  const content = {
    document: (
      <>
        <path d="M-23-29h29l13 13v14a22 22 0 0 0-19 29h-23z" fill="currentColor" stroke="none" />
        <path d="M6-29v13h13M-15-9H3M-15 0H-3M-15 9h8" stroke="#082252" strokeWidth="4" />
        <circle cx="13" cy="12" r="13" />
        <path d="m23 23 11 11" />
      </>
    ),
    cloud: (
      <>
        <path d="M-23 19a16 16 0 0 1-3-31 23 23 0 0 1 44-1 16 16 0 0 1 2 32z" fill="currentColor" stroke="none" />
        <rect x="-8" y="7" width="16" height="14" rx="3" fill="#053b39" stroke="none" />
        <path d="M0 11v8M-4 15h8" stroke="#30f5c5" strokeWidth="4" />
      </>
    ),
    identity: (
      <>
        <rect x="-29" y="-23" width="58" height="46" rx="8" fill="currentColor" stroke="none" />
        <rect x="-24" y="-18" width="48" height="36" rx="5" fill="#fcf7ff" stroke="none" />
        <circle cx="-11" cy="-4" r="8" fill="currentColor" stroke="none" />
        <path d="M-19 12c1-7 15-7 16 0" fill="currentColor" stroke="none" />
        <path d="M3-7h15M3 0h15M3 7h11" stroke="currentColor" strokeWidth="3" />
      </>
    ),
    chart: (
      <>
        <rect x="-25" y="5" width="11" height="20" rx="3" fill="currentColor" stroke="none" />
        <rect x="-9" y="-7" width="11" height="32" rx="3" fill="currentColor" stroke="none" />
        <rect x="7" y="-23" width="11" height="48" rx="3" fill="currentColor" stroke="none" />
      </>
    ),
    gear: (
      <>
        <path d="m-9-33 18 0 3 9 8 4 9-1 8 15-7 7v9l7 7-8 15-9-2-8 5-3 9H-9l-3-9-8-5-9 2-8-15 7-7V1l-7-7 8-15 9 1 8-4z" fill="currentColor" stroke="none" />
        <circle r="14" fill="#071751" stroke="none" />
      </>
    ),
    lock: (
      <>
        <path d="M-14-6v-14a14 14 0 0 1 28 0v14" strokeWidth="6" />
        <rect x="-24" y="-9" width="48" height="40" rx="5" fill="currentColor" stroke="none" />
        <circle cy="7" r="5" fill="#45102b" stroke="none" />
        <path d="M0 9v10" stroke="#45102b" strokeWidth="5" />
      </>
    ),
    users: (
      <>
        <circle cy="-16" r="12" fill="currentColor" stroke="none" />
        <path d="M-19 25V13a19 19 0 0 1 38 0v12z" fill="currentColor" stroke="none" />
        <circle cx="-25" cy="-7" r="7" fill="currentColor" stroke="none" />
        <circle cx="25" cy="-7" r="7" fill="currentColor" stroke="none" />
        <path d="M-24 25h-11V13c0-9 6-13 13-13M24 25h11V13c0-9-6-13-13-13" fill="currentColor" stroke="none" />
      </>
    ),
    database: (
      <>
        <ellipse cy="-20" rx="24" ry="11" fill="currentColor" stroke="none" />
        <path d="M-24-10c10 12 38 12 48 0V3c-10 12-38 12-48 0zm0 23c10 12 38 12 48 0v13c-10 12-38 12-48 0z" fill="currentColor" stroke="none" />
      </>
    ),
    search: (
      <>
        <circle cx="-7" cy="-7" r="23" strokeWidth="7" />
        <path d="m10 11 24 24M-20-5l7 1 5-9 5 17 6-10 5 1" strokeWidth="5" />
      </>
    ),
    tools: (
      <>
        <path d="m-27-29 9 9 10-3 3-10c14 9 14 23-1 29l-26 28a6 6 0 0 1-9-9l26-28c-11-2-17-10-12-16Z" fill="currentColor" stroke="none" />
        <path d="m27-27-11 11M7-6l-13 13M-17 18l-10 10M15 8l17 19-8 8L5 16M-21-16l-9-6 5-9 11 4 6 10" strokeWidth="6" />
      </>
    ),
    shield: (
      <>
        <path d="M0-34c10 8 23 12 36 11v26c0 23-15 38-36 49C-21 41-36 26-36 3v-26c13 1 26-3 36-11Z" fill="currentColor" strokeWidth="3" />
        <path d="M0-24c8 6 17 9 25 9V3c0 16-10 28-25 37C-15 31-25 19-25 3v-18c8 0 17-3 25-9Z" fill="#0861b8" stroke="#8fefff" strokeWidth="3" />
        <path d="m-12 6 10 9L15-5" stroke="#062555" strokeWidth="7" />
      </>
    ),
    fingerprint: (
      <g strokeWidth="2.8">
        <path d="M-27-5c1-35 54-35 54 0M-21 2c0-32 42-32 42 0v9M-15 9V0c0-21 30-21 30 0v10c0 13-3 19-10 27M-9 14V0c0-13 18-13 18 0v13c0 13-5 22-12 28M-3 18V1c0-4 6-4 6 0v15c0 10-5 19-10 25M-27 2c0 12-3 20-7 25M-21 9c0 13-3 20-8 27M-15 16c0 11-3 17-8 25M-9 22c0 7-3 14-6 19M21 18c-1 8-3 15-6 21M27 7c0 9-1 16-4 22" />
      </g>
    ),
  };
  return (
    <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {content[type] || content.shield}
    </g>
  );
}

const CONNECTOR_TARGETS = [
  { x: 635, y: 110 },
  { x: 525, y: 285 },
  { x: 495, y: 450 },
  { x: 505, y: 620 },
  { x: 540, y: 785 },
  { x: 907, y: 110 },
  { x: 1017, y: 285 },
  { x: 1047, y: 450 },
  { x: 1037, y: 620 },
  { x: 1002, y: 785 }
];

// 10 Satellite Nodes: Circular Icon Badge + Glass Capsule Title + Fingerprint Connector
function Service({ item, slot, isActive, onSelect, index = 0, isMobile = false }) {
  const s = slot;
  const color = slot.color;
  const icon = getCapabilityIcon(item.title, item.description);
  const isLeft = s.side === 'left';
  const delay = (0.2 + (index % 5) * 0.06).toFixed(3);
  const target = CONNECTOR_TARGETS[index] || { x: 771, y: 500 };

  return (
    <g
      className={`service-entrance-node ${isLeft ? 'card-enter-left' : 'card-enter-right'}`}
      style={{ '--card-delay': `${delay}s` }}
    >
      {/* Cyan/Accent Connector Line to Fingerprint Edge */}
      <g className="service-connector-group" opacity={isActive ? '1' : '0.45'}>
        <line
          x1={isLeft ? s.cx + 39 : s.cx - 39}
          y1={s.cy}
          x2={target.x}
          y2={target.y}
          stroke={color}
          strokeWidth={isActive ? '2.2' : '1.4'}
          strokeDasharray="5 4"
        />
        <circle
          cx={target.x}
          cy={target.y}
          r={isActive ? '4.5' : '2.8'}
          fill={color}
          filter={isActive ? 'url(#identity-glow)' : undefined}
        />
      </g>

      <g
        className={`identity-service ${isActive ? 'is-active' : ''}`}
        style={{ '--service-color': color, cursor: 'pointer' }}
        onClick={() => onSelect(item.id)}
        onMouseEnter={!isMobile ? () => onSelect(item.id) : undefined}
        role="button"
        tabIndex="0"
        aria-label={`Select ${item.title}`}
      >
        {/* Sleek Glass Capsule Title Badge */}
        {!isMobile && (isLeft ? (
          <g className="service-capsule-group">
            <rect
              x={s.cx - 248}
              y={s.cy - 30}
              width="224"
              height="60"
              rx="30"
              fill="url(#identity-glass)"
              stroke={color}
              strokeOpacity={isActive ? '0.95' : '0.35'}
              strokeWidth={isActive ? '2.2' : '1.3'}
              filter="url(#identity-card-shadow)"
            />
            <foreignObject
              x={s.cx - 240}
              y={s.cy - 26}
              width="188"
              height="52"
              style={{ overflow: 'hidden' }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  textAlign: 'right',
                  paddingRight: '6px',
                  boxSizing: 'border-box',
                  userSelect: 'none',
                }}
              >
                <div
                  style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    color: color,
                    letterSpacing: '0.8px',
                    fontFamily: 'monospace',
                    marginBottom: '1.5px',
                  }}
                >
                  SPEC #{item.number}
                </div>
                <div
                  style={{
                    fontSize: item.title.length > 28 ? '12px' : '13px',
                    fontWeight: 750,
                    color: isActive ? '#0284c7' : '#0a2342',
                    lineHeight: 1.25,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    transition: 'color 0.15s ease',
                  }}
                  title={item.title}
                >
                  {item.title}
                </div>
              </div>
            </foreignObject>
          </g>
        ) : (
          <g className="service-capsule-group">
            <rect
              x={s.cx + 24}
              y={s.cy - 30}
              width="224"
              height="60"
              rx="30"
              fill="url(#identity-glass)"
              stroke={color}
              strokeOpacity={isActive ? '0.95' : '0.35'}
              strokeWidth={isActive ? '2.2' : '1.3'}
              filter="url(#identity-card-shadow)"
            />
            <foreignObject
              x={s.cx + 52}
              y={s.cy - 26}
              width="188"
              height="52"
              style={{ overflow: 'hidden' }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  paddingLeft: '6px',
                  boxSizing: 'border-box',
                  userSelect: 'none',
                }}
              >
                <div
                  style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    color: color,
                    letterSpacing: '0.8px',
                    fontFamily: 'monospace',
                    marginBottom: '1.5px',
                  }}
                >
                  SPEC #{item.number}
                </div>
                <div
                  style={{
                    fontSize: item.title.length > 28 ? '12px' : '13px',
                    fontWeight: 750,
                    color: isActive ? '#0284c7' : '#0a2342',
                    lineHeight: 1.25,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    transition: 'color 0.15s ease',
                  }}
                  title={item.title}
                >
                  {item.title}
                </div>
              </div>
            </foreignObject>
          </g>
        ))}

        {/* Circular Glowing Icon Badge */}
        <g transform={`translate(${s.cx} ${s.cy})`}>
          {/* Outer Bloom Aura */}
          <circle r="44" fill={color} opacity={isActive ? '0.42' : '0.14'} filter="url(#identity-bloom)" />

          {/* Active Pulsing Halo */}
          {isActive && (
            <circle r="42" fill="none" stroke={color} strokeWidth="2.5" opacity="0.8" filter="url(#identity-glow)">
              <animate attributeName="r" values="38;48;38" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0.15;0.9" dur="2s" repeatCount="indefinite" />
            </circle>
          )}

          {/* Disc Body */}
          <circle
            r="37"
            fill="#ffffff"
            stroke={color}
            strokeWidth={isActive ? '3.5' : '2'}
            filter={isActive ? 'url(#identity-glow)' : undefined}
          />
          <circle
            r="31"
            fill="url(#identity-ring-inset)"
            stroke={color}
            strokeWidth="1.2"
            strokeOpacity={isActive ? '0.6' : '0.2'}
          />

          {/* Scaled Crisp Icon */}
          <g transform="scale(0.7)" style={{ color }}>
            <Icon type={icon} strokeWidth="4.2" />
          </g>

          {/* Number Pill Badge attached to circle edge */}
          <g transform={isLeft ? 'translate(-22 -26)' : 'translate(22 -26)'}>
            <rect
              x="-15"
              y="-9"
              width="30"
              height="18"
              rx="9"
              fill={isActive ? color : '#0f172a'}
              stroke="#ffffff"
              strokeWidth="1.5"
            />
            <text
              x="0"
              y="3.5"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="10"
              fontWeight="800"
              fontFamily="monospace"
            >
              {item.number}
            </text>
          </g>
        </g>
      </g>
    </g>
  );
}

const identityStyles = `
/* Global Viewport Reset & Responsive Base - White Theme */
html,
body,
#root {
  width: 100% !important;
  min-height: 100% !important;
  height: auto !important;
  max-height: none !important;
  margin: 0 !important;
  padding: 0 !important;
  background: #f8fbfe !important;
  color: #0c203b;
  overflow-x: hidden !important;
  overflow-y: auto !important;
}

/* Container & Base Styles */
.identity-page {
  width: 100%;
  min-height: 100vh;
  height: auto;
  overflow-x: hidden;
  overflow-y: visible;
  background: radial-gradient(ellipse at 50% 15%, #ffffff 0%, #f0f6fc 45%, #e6f0fa 100%);
  position: relative;
  font-family: var(--font-sans, 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  color: #0c203b;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 16px 20px;
}

.identity-page::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(ellipse at 50% 10%, rgba(2, 132, 199, 0.07), transparent 60%),
              radial-gradient(ellipse at 30% 90%, rgba(56, 189, 248, 0.07), transparent 40%),
              radial-gradient(ellipse at 80% 15%, rgba(14, 165, 233, 0.05), transparent 45%);
}

.identity-desktop-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}

/* Top Nav Bar */
.top-nav-bar {
  width: 100%;
  max-width: 1340px;
  margin: 0 auto 6px;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 30;
}

.nav-buttons-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-btn-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 12px;
  background: #081E52;
  border: 1px solid rgba(2, 132, 199, 0.4);
  color: #ffffff;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 700;
  transition: all 0.2s ease;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(8, 30, 82, 0.15);
}
.nav-btn-back:hover {
  background: #0c2b7a;
  transform: translateY(-1px);
}
.nav-btn-back:active {
  transform: scale(0.97);
}

.nav-btn-home {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 12px;
  background: #0284c7;
  border: none;
  color: #ffffff;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 700;
  transition: all 0.2s ease;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(2, 132, 199, 0.25);
}
.nav-btn-home:hover {
  background: #0369a1;
  transform: translateY(-1px);
}
.nav-btn-home:active {
  transform: scale(0.97);
}

.nav-badge-category {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid #bae6fd;
  color: #081E52;
  font-size: 11.5px;
  font-weight: 850;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.08);
}

.nav-badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00f0ff;
  box-shadow: 0 0 8px #00f0ff;
  animation: pulseDot 1.6s infinite ease-in-out;
}

/* Header with Entrance Animation */
.desktop-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 860px;
  margin: 0 auto 5px;
  position: relative;
  z-index: 10;
  user-select: none;
  animation: headerBoot 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 0.05s;
}

.desktop-title {
  font-family: var(--font-heading, 'Outfit', 'Plus Jakarta Sans', sans-serif);
  font-size: clamp(21px, 2.1vw, 28px);
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 4px 0;
  color: #0a2342;
  letter-spacing: -0.5px;
}

.desktop-title-accent {
  background: linear-gradient(90deg, #0284c7 0%, #00b4d8 50%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.desktop-desc {
  font-family: var(--font-sans, 'Plus Jakarta Sans', sans-serif);
  font-size: 13px;
  line-height: 1.48;
  color: #475569;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 450;
}

/* SVG Viewport & Canvas */
.identity-viewport {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.identity-canvas {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.identity-scene {
  display: block;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  max-height: 760px;
  height: auto;
  aspect-ratio: 1536 / 1024;
  animation: sceneBoot 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* Service Card Hover Micro-interactions */
.identity-service {
  cursor: pointer;
  outline: none !important;
  transition: filter 0.22s ease;
}
.identity-service:focus,
.identity-service:focus-visible {
  outline: none !important;
}
.identity-service:hover {
  filter: drop-shadow(0 8px 22px rgba(2, 132, 199, 0.28));
}
.identity-service.is-active {
  filter: drop-shadow(0 10px 26px rgba(2, 132, 199, 0.35));
}

/* ========================================================
   CINEMATIC PAGE ENTRANCE & INITIALIZATION KEYFRAMES
   ======================================================== */

@keyframes headerBoot {
  0% {
    opacity: 0;
    transform: translateY(-24px);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes sceneBoot {
  0% {
    opacity: 0;
    transform: scale(0.985);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.turntable-pedestal-group {
  animation: pedestalBoot 1s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 0.1s;
}

@keyframes pedestalBoot {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.biometric-ridges-group {
  animation: biometricIgnition 1.35s cubic-bezier(0.2, 0.8, 0.2, 1) both;
  animation-delay: 0.16s;
}

@keyframes biometricIgnition {
  0% {
    opacity: 0;
    filter: brightness(2.4) drop-shadow(0 0 28px #00f0ff);
  }
  38% {
    opacity: 1;
    filter: brightness(1.7) drop-shadow(0 0 20px #00f0ff);
  }
  100% {
    opacity: 1;
    filter: brightness(1) drop-shadow(0 0 0px transparent);
  }
}

.laser-scan-group {
  animation: laserScanBoot 1.25s cubic-bezier(0.25, 1, 0.5, 1) both;
  animation-delay: 0.2s;
}

@keyframes laserScanBoot {
  0% {
    opacity: 0;
    filter: drop-shadow(0 0 16px #00f0ff);
  }
  35% {
    opacity: 1;
    filter: drop-shadow(0 0 28px #00f0ff);
  }
  100% {
    opacity: 0.85;
    filter: drop-shadow(0 0 6px #00f0ff);
  }
}

.orbit-ring-group {
  animation: orbitRingBoot 1.15s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 0.25s;
}

@keyframes orbitRingBoot {
  0% {
    opacity: 0;
    transform: scale(0.92);
    transform-origin: 771px 500px;
  }
  100% {
    opacity: 0.85;
    transform: scale(1);
    transform-origin: 771px 500px;
  }
}

.junction-dots-group {
  animation: junctionDotsBoot 1s ease-out both;
  animation-delay: 0.32s;
}

@keyframes junctionDotsBoot {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    filter: drop-shadow(0 0 14px #00f0ff);
  }
  100% {
    opacity: 1;
    filter: drop-shadow(0 0 0px transparent);
  }
}

.service-entrance-node {
  animation-duration: 0.75s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-fill-mode: both;
  animation-delay: var(--card-delay, 0.35s);
}

.service-entrance-node.card-enter-left {
  animation-name: cardEnterLeft;
}

.service-entrance-node.card-enter-right {
  animation-name: cardEnterRight;
}

@keyframes cardEnterLeft {
  0% {
    opacity: 0;
    transform: scale(0.96);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes cardEnterRight {
  0% {
    opacity: 0;
    transform: scale(0.96);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* ========================================================
   CENTER DIRECT FINGERPRINT HOLOGRAM DISPLAY (NO BOX)
   Perfect symmetrical alignment inside natural biometric hollow
   ======================================================== */
.fp-content-panel {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  user-select: none;
  padding: 12px 16px;
  gap: 14px;
}

.core-atmosphere-halo {
  animation: haloBoot 1s ease-out both;
  animation-delay: 0.35s;
}

@keyframes haloBoot {
  0% {
    opacity: 0;
    transform: scale(0.7);
    transform-origin: 0 0;
  }
  100% {
    opacity: 1;
    transform: scale(1);
    transform-origin: 0 0;
  }
}

.fp-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 14px;
  border-radius: 9999px;
  background: color-mix(in srgb, var(--accent-color, #0284c7) 14%, rgba(255, 255, 255, 0.96));
  border: 1.3px solid color-mix(in srgb, var(--accent-color, #0284c7) 50%, transparent);
  color: var(--accent-color, #0284c7);
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 1px;
  font-family: monospace;
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.8), 0 0 12px color-mix(in srgb, var(--accent-color, #0284c7) 25%, transparent);
  margin-bottom: 6px;
  flex-shrink: 0;
  animation: badgeBoot 0.65s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 0.42s;
}

@keyframes badgeBoot {
  0% {
    opacity: 0;
    transform: translateY(-10px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.fp-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-color, #0284c7);
  box-shadow: 0 0 8px var(--accent-color, #0284c7);
  animation: pulseDot 1.6s infinite ease-in-out;
}

@keyframes pulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.7); }
}

.fp-heading {
  font-size: 20px;
  font-weight: 850;
  line-height: 1.22;
  color: #071f3d;
  margin: 0 0 6px 0;
  letter-spacing: -0.3px;
  max-width: 320px;
  text-shadow: 0 0 14px #ffffff, 0 0 6px #ffffff, 0 1px 2px rgba(255, 255, 255, 0.95);
  flex-shrink: 0;
  animation: headingBoot 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 0.48s;
}

@keyframes headingBoot {
  0% {
    opacity: 0;
    transform: translateY(8px);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.fp-divider {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 55%;
  margin: 0 auto 6px;
  opacity: 0.85;
  flex-shrink: 0;
  animation: dividerBoot 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 0.54s;
}

@keyframes dividerBoot {
  0% {
    opacity: 0;
    transform: scaleX(0);
  }
  100% {
    opacity: 0.85;
    transform: scaleX(1);
  }
}

.fp-line {
  flex: 1;
  height: 1.5px;
  background: linear-gradient(90deg, transparent, var(--accent-color, #0284c7), transparent);
}

.fp-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent-color, #0284c7);
  box-shadow: 0 0 8px var(--accent-color, #0284c7);
}

.fp-desc-wrap {
  width: 100%;
  max-width: 330px;
  margin: 0 auto;
  padding: 0;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  scrollbar-width: none;
  animation: descBoot 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 0.6s;
}

.fp-desc-wrap::-webkit-scrollbar {
  display: none;
}

@keyframes descBoot {
  0% {
    opacity: 0;
    transform: translateY(6px);
    filter: blur(4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.fp-desc {
  font-size: 13.5px;
  line-height: 1.55;
  color: #0a1f44;
  margin: 0;
  font-weight: 550;
  text-align: center;
  text-shadow: 0 0 12px #ffffff, 0 0 4px #ffffff;
}

.fp-footer {
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 1.3px;
  color: var(--accent-color, #0284c7);
  font-family: monospace;
  text-shadow: 0 0 8px #ffffff;
  padding: 4px 0 0 0;
  margin-top: 6px;
  opacity: 0.95;
  flex-shrink: 0;
  animation: footerBoot 0.7s ease-out both;
  animation-delay: 0.66s;
}

@keyframes footerBoot {
  0% {
    opacity: 0;
    letter-spacing: 2.5px;
  }
  100% {
    opacity: 0.95;
    letter-spacing: 1.2px;
  }
}

.active-laser-group {
  animation: activeLaserBoot 0.75s ease-out both;
  animation-delay: 0.82s;
}

@keyframes activeLaserBoot {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    filter: drop-shadow(0 0 16px var(--accent-color, #00f0ff));
  }
  100% {
    opacity: 1;
  }
}

/* 10. Bottom Navigation Dock: Single-Item Sequential Navigation (01 -> 57) */
.bottom-nav-dock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 860px;
  margin: 12px auto 0;
  padding: 10px 22px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1.5px solid rgba(2, 132, 199, 0.25);
  border-radius: 9999px;
  box-shadow: 0 10px 30px rgba(2, 132, 199, 0.12), 0 2px 8px rgba(0, 180, 216, 0.08);
  box-sizing: border-box;
  gap: 16px;
  position: relative;
  z-index: 20;
  animation: paginationBoot 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 0.5s;
}

@keyframes paginationBoot {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.dock-nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 9999px;
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: 0.6px;
  cursor: pointer;
  border: none;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 3px 10px rgba(2, 132, 199, 0.18);
  user-select: none;
  flex-shrink: 0;
}

.dock-btn-prev {
  background: #ffffff;
  color: #0369a1;
  border: 1.5px solid rgba(2, 132, 199, 0.25);
}
.dock-btn-prev:hover {
  background: #f0f9ff;
  border-color: #0284c7;
  color: #0284c7;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(2, 132, 199, 0.25);
}
.dock-btn-prev:active {
  transform: scale(0.97);
}

.dock-btn-next {
  background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
  color: #ffffff;
}
.dock-btn-next:hover {
  background: linear-gradient(135deg, #0369a1 0%, #0284c7 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(2, 132, 199, 0.38);
}
.dock-btn-next:active {
  transform: scale(0.97);
}

.dock-center-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
  justify-content: center;
}

.dock-active-icon-badge {
  width: 38px;
  height: 38px;
  min-width: 38px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--badge-color, #0284c7) 12%, #ffffff);
  border: 2px solid var(--badge-color, #0284c7);
  display: grid;
  place-items: center;
  box-shadow: 0 3px 10px color-mix(in srgb, var(--badge-color, #0284c7) 25%, transparent);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.dock-active-details {
  display: flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
}

.dock-active-title {
  font-family: var(--font-heading, 'Outfit', sans-serif);
  font-size: 14px;
  font-weight: 750;
  color: #071f3d;
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 440px;
}

.dock-counter-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 2px;
}

.dock-counter-pill {
  font-family: var(--font-mono, monospace);
  font-size: 11.5px;
  color: #64748b;
  display: inline-flex;
  align-items: baseline;
  gap: 2px;
}

.dock-counter-num {
  font-size: 13px;
  font-weight: 800;
  color: #0284c7;
}

.dock-counter-total {
  font-size: 11.5px;
  font-weight: 600;
  color: #94a3b8;
}

.dock-divider-dot {
  font-size: 10px;
  color: #cbd5e1;
}

.dock-autoplay-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2.5px 8px;
  border-radius: 9999px;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #475569;
  font-size: 10.5px;
  font-weight: 750;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.dock-autoplay-btn:hover {
  background: #e2e8f0;
  color: #0f172a;
}

.dock-autoplay-btn.is-playing {
  background: #e0f2fe;
  border-color: #7dd3fc;
  color: #0284c7;
}

.dock-play-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #0284c7;
  animation: pulseDot 1.4s infinite ease-in-out;
}

/* ========================================================
   RESPONSIVE DEVICE ARCHITECTURE (MOBILE, TABLET, DESKTOP)
   ======================================================== */

.desktop-stage-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

/* ========================================================
   MOBILE PHONE RESPONSIVE EXPERIENCE (< 1024px)
   Matches Reference Mockup (3 Phones)
   ======================================================== */
.mobile-responsive-stage {
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
  padding: 4px 6px 24px;
  gap: 12px;
  box-sizing: border-box;
}

@media (max-width: 1023px) {
  .desktop-stage-wrapper {
    display: none !important;
  }
  .mobile-responsive-stage {
    display: flex !important;
  }

  .identity-page {
    padding: 8px 8px 24px !important;
  }
  .desktop-header {
    display: none !important;
  }
}

/* 1. Mobile Scope & Category Header Badge */
.mobile-scope-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid #bae6fd;
  border-radius: 9999px;
  box-shadow: 0 2px 10px rgba(2, 132, 199, 0.06);
}

.mobile-scope-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 10.5px;
  font-weight: 800;
  color: #0284c7;
  font-family: var(--font-mono, monospace);
  letter-spacing: 0.8px;
}

.scope-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #0284c7;
  box-shadow: 0 0 8px #0284c7;
  animation: pulseDot 1.6s infinite ease-in-out;
}

.mobile-scope-total {
  font-size: 10px;
  font-weight: 700;
  color: #64748b;
  font-family: var(--font-mono, monospace);
  letter-spacing: 0.5px;
}

/* 2. Mobile Holographic Biometric Scanner Inspector Card */
.mobile-scanner-card {
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1.5px solid color-mix(in srgb, var(--accent-color, #0284c7) 35%, #bae6fd);
  border-radius: 22px;
  box-shadow: 0 12px 36px rgba(2, 132, 199, 0.1), 0 0 24px color-mix(in srgb, var(--accent-color, #0284c7) 12%, transparent);
  padding: 16px 14px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  animation: mobileCardBoot 0.65s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes mobileCardBoot {
  0% {
    opacity: 0;
    transform: translateY(16px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.mobile-scanner-visual {
  width: 100%;
  max-width: 240px;
  height: 215px;
  margin: 0 auto 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  overflow: visible;
}

.mobile-fingerprint-svg {
  width: 100%;
  height: 100%;
  max-height: 215px;
  display: block;
  overflow: visible;
}

.mobile-title-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  margin: 4px 0 10px;
}

.inspector-nav-arrow {
  width: 34px;
  height: 34px;
  min-width: 34px;
  border-radius: 50%;
  border: 1px solid #cbd5e1;
  background: rgba(255, 255, 255, 0.95);
  color: #0284c7;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 0;
  box-shadow: 0 2px 6px rgba(12, 32, 59, 0.05);
}
.inspector-nav-arrow:hover {
  border-color: var(--accent-color, #0284c7);
  background: #f0f9ff;
  color: var(--accent-color, #0284c7);
  transform: scale(1.08);
}
.inspector-nav-arrow:active {
  transform: scale(0.94);
}

.mobile-title {
  font-family: var(--font-heading, 'Outfit', sans-serif);
  font-size: clamp(17px, 4.2vw, 21px);
  font-weight: 800;
  line-height: 1.25;
  color: #071f3d;
  margin: 0;
  letter-spacing: -0.3px;
  text-align: center;
  flex: 1;
}

.mobile-divider {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 65%;
  max-width: 220px;
  margin: 0 auto 10px;
}

.mobile-divider-line {
  flex: 1;
  height: 1.5px;
  background: linear-gradient(90deg, transparent, var(--accent-color, #0284c7), transparent);
}

.mobile-divider-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent-color, #0284c7);
  box-shadow: 0 0 8px var(--accent-color, #0284c7);
}

.mobile-desc-wrap {
  width: 100%;
  padding: 0 8px;
  margin-bottom: 6px;
}

.mobile-desc {
  font-family: var(--font-sans, 'Plus Jakarta Sans', sans-serif);
  font-size: 13px;
  line-height: 1.55;
  color: #334155;
  margin: 0;
  font-weight: 500;
  text-align: center;
}

/* 3. Quick-Tap Horizontal Navigation Pills */
.mobile-pills-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mobile-pills-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
  font-size: 11px;
  font-weight: 800;
  color: #0284c7;
  letter-spacing: 0.8px;
  font-family: var(--font-mono, monospace);
  text-transform: uppercase;
}

.mobile-pills-hint {
  font-size: 10.5px;
  color: #64748b;
  font-family: var(--font-sans, sans-serif);
  font-weight: 500;
}

.mobile-pills-track {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 4px 2px 8px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
.mobile-pills-track::-webkit-scrollbar {
  display: none;
}

.mobile-pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 9999px;
  border: 1.2px solid #cbd5e1;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  color: #334155;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 6px rgba(12, 32, 59, 0.04);
}
.mobile-pill-btn:hover {
  border-color: var(--pill-color, #0284c7);
  color: var(--pill-color, #0284c7);
  transform: translateY(-1px);
}
.mobile-pill-btn.is-active {
  background: linear-gradient(135deg, var(--pill-color, #0284c7) 0%, #0284c7 100%);
  color: #ffffff;
  border-color: transparent;
  box-shadow: 0 4px 14px color-mix(in srgb, var(--pill-color, #0284c7) 35%, transparent);
  transform: translateY(-1px);
}

.pill-num {
  font-family: var(--font-mono, monospace);
  font-weight: 800;
  font-size: 11px;
}
.mobile-pill-btn.is-active .pill-num {
  color: #ffffff;
}

.pill-title {
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 4. Horizontal Swipeable Card Carousel Section */
.mobile-carousel-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mobile-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
}

.mobile-section-title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.mobile-section-title {
  font-size: 12px;
  font-weight: 800;
  color: #0284c7;
  letter-spacing: 0.9px;
  font-family: var(--font-mono, monospace);
  text-transform: uppercase;
}

.mobile-carousel-counter {
  font-size: 10.5px;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 9999px;
  background: #e0f2fe;
  color: #0369a1;
  font-family: var(--font-mono, monospace);
}

.carousel-nav-arrows {
  display: flex;
  align-items: center;
  gap: 6px;
}

.carousel-arrow-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #cbd5e1;
  background: rgba(255, 255, 255, 0.95);
  color: #0284c7;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 6px rgba(12, 32, 59, 0.05);
  padding: 0;
}
.carousel-arrow-btn:hover {
  border-color: #0284c7;
  background: #f0f9ff;
  transform: scale(1.08);
}
.carousel-arrow-btn:active {
  transform: scale(0.94);
}

.carousel-track {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 6px 4px 14px;
  scrollbar-width: thin;
  scrollbar-color: #bae6fd transparent;
  box-sizing: border-box;
}
.carousel-track::-webkit-scrollbar {
  height: 4px;
}
.carousel-track::-webkit-scrollbar-track {
  background: transparent;
}
.carousel-track::-webkit-scrollbar-thumb {
  background: #bae6fd;
  border-radius: 9999px;
}

.carousel-card {
  flex: 0 0 clamp(245px, 74vw, 290px);
  scroll-snap-align: center;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1.5px solid #cbd5e1;
  box-shadow: 0 4px 14px rgba(12, 32, 59, 0.05);
  padding: 14px 14px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  text-align: left;
  transition: all 0.24s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  animation: mobileCardEnter 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: var(--card-delay, 0.1s);
}

@keyframes mobileCardEnter {
  0% {
    opacity: 0;
    transform: translateY(14px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.carousel-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(2, 132, 199, 0.18);
  border-color: var(--card-color);
}

.carousel-card:active {
  transform: scale(0.98);
}

.carousel-card.is-active {
  background: linear-gradient(145deg, #ffffff 0%, color-mix(in srgb, var(--card-color) 8%, #ffffff) 100%);
  border: 2px solid var(--card-color);
  box-shadow: 0 10px 28px color-mix(in srgb, var(--card-color) 25%, transparent), 0 0 16px color-mix(in srgb, var(--card-color) 18%, transparent);
  transform: translateY(-2px);
}

.carousel-card-accent-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3.5px;
  background: var(--card-color, #0284c7);
}

.carousel-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.carousel-spec-tag {
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  font-weight: 800;
  color: var(--card-color, #0284c7);
  letter-spacing: 0.8px;
}

.carousel-active-chip {
  font-size: 9px;
  font-weight: 800;
  background: var(--card-color, #0284c7);
  color: #ffffff;
  padding: 1.5px 7px;
  border-radius: 9999px;
  letter-spacing: 0.6px;
  box-shadow: 0 0 8px var(--card-color, #0284c7);
}

.carousel-inactive-chip {
  font-size: 9.5px;
  font-weight: 700;
  color: #94a3b8;
  font-family: var(--font-mono, monospace);
}

.carousel-card-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.carousel-card-icon-wrap {
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--card-color) 12%, #ffffff);
  border: 1.8px solid var(--card-color);
  display: grid;
  place-items: center;
  box-shadow: 0 2px 8px color-mix(in srgb, var(--card-color) 25%, transparent);
  margin-bottom: 2px;
}

.carousel-card-title {
  font-family: var(--font-heading, 'Outfit', sans-serif);
  font-size: 14.5px;
  font-weight: 750;
  color: #071f3d;
  line-height: 1.25;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}
.carousel-card.is-active .carousel-card-title {
  color: var(--card-color);
}

.carousel-card-desc {
  font-family: var(--font-sans, 'Plus Jakarta Sans', sans-serif);
  font-size: 12px;
  line-height: 1.5;
  color: #64748b;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.carousel-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px dashed #e2e8f0;
  color: var(--card-color, #0284c7);
}

.carousel-inspect-link {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.4px;
}

.carousel-dots-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 4px 0 2px;
}

.carousel-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #cbd5e1;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.25s ease;
}
.carousel-dot:hover {
  background: #0284c7;
}
.carousel-dot.is-active {
  width: 22px;
  border-radius: 9999px;
  background: var(--accent-color, #0284c7);
  box-shadow: 0 0 8px var(--accent-color, #0284c7);
}

/* 1. Mobile Header */
.mobile-header {
  width: 100%;
  text-align: center;
  padding: 0 4px 4px;
  box-sizing: border-box;
}

.mobile-main-title {
  font-family: var(--font-heading, 'Outfit', 'Plus Jakarta Sans', sans-serif);
  font-size: 21px;
  font-weight: 850;
  line-height: 1.2;
  color: #071f3d;
  margin: 0 0 6px;
  letter-spacing: -0.3px;
}

.mobile-main-title-sub {
  color: #0284c7;
  display: block;
}

.mobile-main-desc {
  font-family: var(--font-sans, 'Plus Jakarta Sans', sans-serif);
  font-size: 11.5px;
  line-height: 1.5;
  color: #64748b;
  margin: 0 auto;
  max-width: 360px;
  font-weight: 500;
}

/* 2. Mobile Centerpiece Hologram SVG Stage */
.mobile-scene-viewport {
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}

.mobile-scene-svg {
  width: 100%;
  height: auto;
  max-height: 440px;
  aspect-ratio: 862 / 930;
  display: block;
  overflow: visible;
}

.mobile-svg-node {
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;
  outline: none !important;
}
.mobile-svg-node:hover {
  filter: drop-shadow(0 4px 14px rgba(2, 132, 199, 0.35));
}
.mobile-svg-node.is-active {
  filter: drop-shadow(0 6px 18px rgba(2, 132, 199, 0.45));
}

/* 3. Specification Content Card (Directly Below Pedestal) */
.mobile-spec-card {
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1.5px solid color-mix(in srgb, var(--accent-color, #0284c7) 30%, #bae6fd);
  border-radius: 20px;
  box-shadow: 0 10px 28px rgba(2, 132, 199, 0.08), 0 0 16px color-mix(in srgb, var(--accent-color, #0284c7) 10%, transparent);
  padding: 14px 16px 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  margin-top: -8px;
}

.mobile-spec-tag {
  font-family: monospace;
  font-size: 10.5px;
  font-weight: 800;
  color: var(--accent-color, #0284c7);
  letter-spacing: 0.9px;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.mobile-spec-heading {
  font-family: var(--font-heading, 'Outfit', 'Plus Jakarta Sans', sans-serif);
  font-size: 16.5px;
  font-weight: 850;
  line-height: 1.25;
  color: #071f3d;
  margin: 0 0 7px;
  letter-spacing: -0.2px;
}

.mobile-spec-desc {
  font-family: var(--font-sans, 'Plus Jakarta Sans', sans-serif);
  font-size: 12px;
  line-height: 1.55;
  color: #475569;
  margin: 0 0 9px;
  font-weight: 500;
}

.mobile-spec-footer {
  font-family: monospace;
  font-size: 9.5px;
  font-weight: 800;
  color: var(--accent-color, #0284c7);
  letter-spacing: 0.8px;
  opacity: 0.95;
}

/* 4. Bottom Navigation Dock & Controls */
.mobile-dock-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.mobile-nav-dock {
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1.5px solid rgba(2, 132, 199, 0.22);
  border-radius: 9999px;
  box-shadow: 0 8px 24px rgba(2, 132, 199, 0.1);
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.mobile-dock-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 7px 14px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.4px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  flex-shrink: 0;
  user-select: none;
}

.mobile-dock-btn-prev {
  background: #ffffff;
  color: #475569;
  border: 1.2px solid #cbd5e1;
}
.mobile-dock-btn-prev:active {
  transform: scale(0.95);
  background: #f1f5f9;
}

.mobile-dock-btn-next {
  background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
  color: #ffffff;
  box-shadow: 0 3px 10px rgba(2, 132, 199, 0.3);
}
.mobile-dock-btn-next:active {
  transform: scale(0.95);
}

.mobile-dock-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  flex: 1;
  text-align: center;
  gap: 1px;
}

.mobile-dock-icon-badge {
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--badge-color, #0284c7) 12%, #ffffff);
  border: 1.8px solid var(--badge-color, #0284c7);
  display: grid;
  place-items: center;
  box-shadow: 0 2px 8px color-mix(in srgb, var(--badge-color, #0284c7) 25%, transparent);
}

.mobile-dock-counter {
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  display: inline-flex;
  align-items: baseline;
  gap: 2px;
  margin-top: 1px;
}

.mobile-dock-num {
  font-size: 12px;
  font-weight: 800;
  color: #0284c7;
}

.mobile-dock-total {
  font-size: 10.5px;
  font-weight: 600;
  color: #94a3b8;
}

.mobile-dock-title {
  font-family: var(--font-heading, 'Outfit', sans-serif);
  font-size: 11.5px;
  font-weight: 700;
  color: #071f3d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 140px;
}

/* 5. Auto Play Status Bar (Phone 3 Mockup) */
.mobile-autoplay-bar {
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 9999px;
  padding: 5px 10px 5px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(139, 92, 246, 0.08);
}

.mobile-autoplay-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 750;
  color: #7c3aed;
  font-family: var(--font-sans, sans-serif);
}

.mobile-autoplay-toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 12px;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(192, 132, 252, 0.15) 100%);
  border: 1px solid #c084fc;
  color: #7c3aed;
  font-size: 11px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;
}
.mobile-autoplay-toggle-btn:active {
  transform: scale(0.95);
}

/* 6. Pagination Dots (6 batches) */
.mobile-pagination-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 2px 0;
}

.mobile-page-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #cbd5e1;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-page-dot.is-active {
  width: 24px;
  border-radius: 9999px;
  background: var(--dot-color, #0284c7);
  box-shadow: 0 0 8px var(--dot-color, #0284c7);
}
`;

export default function DigitalForensicsIncidentResponseServices({ onClose, onHome }) {
  const [activeId, setActiveId] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Active index across all 57 capabilities (0 to 56)
  const activeIndex = useMemo(() => {
    const idx = capabilities.findIndex((item) => item.id === activeId);
    return idx !== -1 ? idx : 0;
  }, [activeId]);

  const activeItem = capabilities[activeIndex] || capabilities[0];

  // Current batch of 10 items for the surrounding satellite slots
  const currentBatchStart = Math.floor(activeIndex / 10) * 10;
  const pageStart = currentBatchStart;
  const pageEnd = currentBatchStart + 10;
  const currentPage = Math.floor(activeIndex / 10);
  const totalPages = Math.ceil(capabilities.length / 10);

  const pageItems = useMemo(() => {
    return capabilities.slice(currentBatchStart, currentBatchStart + 10);
  }, [currentBatchStart]);

  // Slot index within the current batch (0 to 9)
  const activeSlotIndex = activeIndex % 10;
  const activeSlot = services[activeSlotIndex] || services[0];
  const activeItemColor = activeSlot?.color || '#00b4d8';
  const activeItemIcon = getCapabilityIcon(activeItem.title, activeItem.description);

  const carouselRef = useRef(null);

  // Auto-play interval: advances by 1 every 5 seconds across all 57 capabilities
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveId((prevId) => {
        const curIdx = capabilities.findIndex((c) => c.id === prevId);
        const nextIdx = curIdx !== -1 ? (curIdx + 1) % capabilities.length : 0;
        return capabilities[nextIdx].id;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleBack = () => {
    if (onClose) {
      onClose();
    } else if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = '#it-services';
    }
  };

  const handleHome = () => {
    if (onHome) onHome();
    else if (onClose) onClose();
    else window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // Select service and pause auto-play on manual interaction
  const handleSelectService = (id) => {
    setIsAutoPlaying(false);
    setActiveId(id);
    const index = pageItems.findIndex((item) => item.id === id);
    if (index !== -1 && carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll('.carousel-card');
      const targetCard = cards[index];
      if (targetCard) {
        targetCard.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  const selectCapability = (id) => handleSelectService(id);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    const prevIdx = activeIndex === 0 ? capabilities.length - 1 : activeIndex - 1;
    setActiveId(capabilities[prevIdx].id);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    const nextIdx = (activeIndex + 1) % capabilities.length;
    setActiveId(capabilities[nextIdx].id);
  };

  const handlePrevCapability = () => handlePrev();
  const handleNextCapability = () => handleNext();

  const handleSelectBatch = (pageIdx) => {
    setIsAutoPlaying(false);
    const targetIdx = Math.min(pageIdx * 10, capabilities.length - 1);
    setActiveId(capabilities[targetIdx].id);
  };

  const handleTogglePlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  const scrollCarouselBy = (offset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Reset carousel scroll position when batch changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [currentBatchStart]);

  // Keyboard navigation support: Arrow keys advance 1-by-1, Space toggles auto-play
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        setIsAutoPlaying((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <main className="identity-page">
      <style>{identityStyles}</style>

      <div className="identity-desktop-view" id="scanner-hero">
        {/* TOP HEADER NAVIGATION BAR */}
        <div className="top-nav-bar">
          <div className="nav-buttons-group">
            <button
              type="button"
              onClick={handleBack}
              className="nav-btn-back"
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={handleHome}
              className="nav-btn-home"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Home</span>
            </button>
          </div>
        </div>

        {/* DESKTOP HERO HEADER */}
        <header className="desktop-header">
          <h1 className="desktop-title">
            {headerInfo.headlineLine1}{' '}
            <span className="desktop-title-accent">
              {headerInfo.headlineLine2}{headerInfo.headlineSub ? ` ${headerInfo.headlineSub}` : ''}
            </span>
          </h1>
          <p className="desktop-desc">
            {headerInfo.description}
          </p>
        </header>

        {/* ========================================================
            DESKTOP STAGE (>= 1024px): 1536 x 1024 HOLOGRAPHIC DIAGRAM
            ======================================================== */}
        <div className="desktop-stage-wrapper">
          <div className="identity-viewport">
            <div className="identity-canvas">
              <svg
                className="identity-scene"
                viewBox="0 0 1536 1024"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label={headerInfo.title}
              >
                <defs>
                  <filter id="identity-glow" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="7" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="identity-bloom" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="19" />
                  </filter>
                  <filter id="identity-card-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#0c3563" floodOpacity="0.08" />
                  </filter>
                  <linearGradient id="identity-glass" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#ffffff" stopOpacity=".95" />
                    <stop offset=".5" stopColor="#f8fbfe" stopOpacity=".98" />
                    <stop offset="1" stopColor="#f1f7fc" stopOpacity=".98" />
                  </linearGradient>
                  <radialGradient id="identity-ring-inset">
                    <stop stopColor="#f0f7ff" />
                    <stop offset=".7" stopColor="#ffffff" />
                    <stop offset="1" stopColor="#e4f0fc" />
                  </radialGradient>
                  <linearGradient id="identity-orbit">
                    <stop stopColor="#00b4d8" />
                    <stop offset=".32" stopColor="#0284c7" />
                    <stop offset=".65" stopColor="#a855f7" />
                    <stop offset="1" stopColor="#0ea5e9" />
                  </linearGradient>
                  <linearGradient id="laser-beam-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#00f0ff" stopOpacity="0" />
                    <stop offset=".5" stopColor="#00f0ff" stopOpacity=".7" />
                    <stop offset="1" stopColor="#00f0ff" stopOpacity="0" />
                  </linearGradient>
                  {/* Soft Organic Atmospheric Aura Gradient behind the Holographic Text */}
                  <radialGradient id="core-soft-atmosphere" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.94" />
                    <stop offset="45%" stopColor="#ffffff" stopOpacity="0.84" />
                    <stop offset="75%" stopColor="#f0f9ff" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Server Racks & 3D Stage & Biometric Ridges */}
                <IdentityArtwork />

                {/* Symmetrical Orbiting Ring connecting all satellite nodes and top telemetry dot */}
                <g className="orbit-ring-group">
                  <path
                    d="M470 785 C440 730 420 675 425 620 C430 565 400 500 405 450 C410 400 415 340 435 285 C455 230 495 155 550 110 C605 65 700 75 771 75 C842 75 937 65 992 110 C1047 155 1087 230 1107 285 C1127 340 1132 400 1137 450 C1142 500 1112 565 1117 620 C1122 675 1102 730 1072 785 C1035 845 920 915 771 915 C622 915 507 845 470 785 Z"
                    fill="none"
                    stroke="url(#identity-orbit)"
                    strokeWidth="2.5"
                    strokeDasharray="12 8"
                    opacity="0.85"
                  >
                    <animate attributeName="stroke-dashoffset" values="0; 200" dur="10s" repeatCount="indefinite" />
                  </path>
                </g>

                {/* Glowing Junction Dots Spark Sequence */}
                <g className="junction-dots-group">
                  {[[771, 75, '#7bffff'], [550, 110, '#43bdff'], [992, 110, '#ff689f'], [435, 285, '#30f5c5'], [1107, 285, '#ffc04c'], [405, 450, '#e170ff'], [1137, 450, '#d96bff'], [425, 620, '#ffc658'], [1117, 620, '#40f9cb'], [470, 785, '#47acff'], [1072, 785, '#49bbff']].map(([cx, cy, color]) => (
                    <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={cx === 771 ? 9 : 6} fill="#fff" stroke={color} strokeWidth="2" style={{ color }} filter="url(#identity-glow)" />
                  ))}
                </g>

                {/* Animated Holographic Biometric Laser Scan Line Calibration */}
                <g opacity="0.8" className="laser-scan-group">
                  <line x1="570" y1="200" x2="972" y2="200" stroke="#00f0ff" strokeWidth="2.5" filter="url(#identity-glow)">
                    <animate attributeName="y1" values="180;780;180" dur="4.2s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="180;780;180" dur="4.2s" repeatCount="indefinite" />
                  </line>
                  <rect x="570" y="195" width="402" height="10" fill="url(#laser-beam-grad)" opacity="0.5">
                    <animate attributeName="y" values="175;775;175" dur="4.2s" repeatCount="indefinite" />
                  </rect>
                </g>

                {/* Dynamic Energy Laser from Active Card to Central Biometric Core (Targeting 771 500) */}
                {activeSlot && (
                  <g className="active-laser-group" key={activeItem.id}>
                    <path
                      d={`M${activeSlot.cx} ${activeSlot.cy} Q${(activeSlot.cx + 771) / 2} ${(activeSlot.cy + 500) / 2 - 35} 771 500`}
                      fill="none"
                      stroke={activeItemColor}
                      strokeWidth="3"
                      strokeDasharray="8 6"
                      opacity="0.85"
                      filter="url(#identity-glow)"
                    >
                      <animate attributeName="stroke-dashoffset" values="28;0" dur="1.2s" repeatCount="indefinite" />
                    </path>
                    <circle cx="771" cy="500" r="14" fill="none" stroke={activeItemColor} strokeWidth="2.5" opacity="0.8" filter="url(#identity-glow)">
                      <animate attributeName="r" values="8;24;8" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </g>
                )}

                {/* ========================================================
                    CENTER BIOMETRIC CORE: Direct Hologram in Fingerprint (No Box)
                    Mathematically centered inside natural biometric hollow at (771, 500)
                    ======================================================== */}
                <g className="core-fingerprint-display" transform="translate(771 500)">
                  {/* Soft organic radial atmosphere wash - blends seamlessly with fingerprint ridges, no box borders */}
                  <ellipse cx="0" cy="0" rx="205" ry="245" fill="url(#core-soft-atmosphere)" className="core-atmosphere-halo" />

                  {/* Active Holographic Content directly inside the fingerprint core */}
                  <foreignObject
                    x="-175"
                    y="-225"
                    width="350"
                    height="450"
                    style={{ overflow: 'visible' }}
                  >
                    <div key={activeItem.id} className="fp-content-panel" style={{ '--accent-color': activeItemColor }}>
                      {/* Main Heading / Title */}
                      <h2 className="fp-heading">
                        {activeItem.title}
                      </h2>

                      {/* Subtle Tech Divider */}
                      <div className="fp-divider">
                        <span className="fp-line" />
                        <span className="fp-dot" />
                        <span className="fp-line" />
                      </div>

                      {/* Full Capability Description Content (Natural fit, NO scrollbar) */}
                      <div className="fp-desc-wrap">
                        <p className="fp-desc">
                          {activeItem.description}
                        </p>
                      </div>
                    </div>
                  </foreignObject>
                </g>

                {/* 10 Satellite Service Cards for Current Page (Title & Icon Only) */}
                {pageItems.map((item, index) => {
                  const slot = services[index];
                  if (!slot) return null;
                  return (
                    <Service
                      key={item.id}
                      item={item}
                      slot={slot}
                      index={index}
                      isActive={item.id === activeItem.id}
                      onSelect={(id) => handleSelectService(id)}
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* DESKTOP BOTTOM NAVIGATION DOCK: Single-Item Sequential Navigation (01 -> 57) */}
          <div className="bottom-nav-dock">
            {/* Left: Previous Service Button */}
            <button
              type="button"
              className="dock-nav-btn dock-btn-prev"
              onClick={handlePrev}
              aria-label="Previous service"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span>PREV</span>
            </button>

            {/* Center: Active Icon + Title + Number + Auto/Play */}
            <div className="dock-center-info">
              <div className="dock-active-icon-badge" style={{ '--badge-color': activeItemColor }}>
                <svg viewBox="-30 -30 60 60" width="22" height="22">
                  <Icon type={activeItemIcon} style={{ color: activeItemColor }} />
                </svg>
              </div>

              <div className="dock-active-details">
                <div className="dock-active-title" title={activeItem.title}>
                  {activeItem.title}
                </div>
                <div className="dock-counter-row">
                  <span className="dock-counter-pill">
                    <strong className="dock-counter-num">{activeItem.number}</strong>
                    <span className="dock-counter-total">/ 57</span>
                  </span>
                  <span className="dock-divider-dot">•</span>
                  <button
                    type="button"
                    className={`dock-autoplay-btn ${isAutoPlaying ? 'is-playing' : ''}`}
                    onClick={() => setIsAutoPlaying((prev) => !prev)}
                    title={isAutoPlaying ? 'Pause auto-rotation (5s)' : 'Resume auto-rotation'}
                  >
                    {isAutoPlaying ? (
                      <>
                        <span className="dock-play-dot" />
                        <span>AUTO (5s)</span>
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        <span>PLAY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Next Service Button */}
            <button
              type="button"
              className="dock-nav-btn dock-btn-next"
              onClick={handleNext}
              aria-label="Next service"
            >
              <span>NEXT</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ========================================================
            MOBILE & TABLET RESPONSIVE STAGE (< 1024px)
            Matches Reference Mockup (3 Phones)
            ======================================================== */}
        <div className="mobile-responsive-stage">
          {/* 1. Mobile Header */}
          <header className="mobile-header">
            <h1 className="mobile-main-title">
              {headerInfo.headlineLine1}{' '}
              <span className="mobile-main-title-sub">
                {headerInfo.headlineLine2}{headerInfo.headlineSub ? ` ${headerInfo.headlineSub}` : ''}
              </span>
            </h1>
            <p className="mobile-main-desc">
              {headerInfo.descriptionLines ? headerInfo.descriptionLines.join(' ') : headerInfo.description}
            </p>
          </header>

          {/* 2. Mobile Centerpiece Hologram SVG Stage */}
          <div className="mobile-scene-viewport">
            <svg
              className="mobile-scene-svg"
              viewBox="340 40 862 930"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label={headerInfo.title}
            >
              <defs>
                <filter id="m-identity-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="m-identity-bloom" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="16" />
                </filter>
                <linearGradient id="m-identity-orbit">
                  <stop stopColor="#00b4d8" />
                  <stop offset=".32" stopColor="#0284c7" />
                  <stop offset=".65" stopColor="#a855f7" />
                  <stop offset="1" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>

              {/* Complete 3D Stage, Concentric Rings & Biometric Fingerprint Ridges */}
              <IdentityArtwork />

              {/* Symmetrical Orbiting Ring connecting all satellite nodes */}
              <g className="orbit-ring-group">
                <path
                  d="M470 785 C440 730 420 675 425 620 C430 565 400 500 405 450 C410 400 415 340 435 285 C455 230 495 155 550 110 C605 65 700 75 771 75 C842 75 937 65 992 110 C1047 155 1087 230 1107 285 C1127 340 1132 400 1137 450 C1142 500 1112 565 1117 620 C1122 675 1102 730 1072 785 C1035 845 920 915 771 915 C622 915 507 845 470 785 Z"
                  fill="none"
                  stroke="url(#m-identity-orbit)"
                  strokeWidth="2.5"
                  strokeDasharray="12 8"
                  opacity="0.85"
                >
                  <animate attributeName="stroke-dashoffset" values="0; 200" dur="10s" repeatCount="indefinite" />
                </path>
              </g>

              {/* Glowing Junction Dots */}
              <g className="junction-dots-group">
                {[[771, 75, '#7bffff'], [550, 110, '#43bdff'], [992, 110, '#ff689f'], [435, 285, '#30f5c5'], [1107, 285, '#ffc04c'], [405, 450, '#e170ff'], [1137, 450, '#d96bff'], [425, 620, '#ffc658'], [1117, 620, '#40f9cb'], [470, 785, '#47acff'], [1072, 785, '#49bbff']].map(([cx, cy, color]) => (
                  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={cx === 771 ? 8 : 5} fill="#fff" stroke={color} strokeWidth="2" style={{ color }} filter="url(#m-identity-glow)" />
                ))}
              </g>

              {/* Animated Holographic Biometric Laser Scan Line */}
              <g opacity="0.8" className="laser-scan-group">
                <line x1="570" y1="200" x2="972" y2="200" stroke="#00f0ff" strokeWidth="2.5" filter="url(#m-identity-glow)">
                  <animate attributeName="y1" values="180;780;180" dur="4.2s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="180;780;180" dur="4.2s" repeatCount="indefinite" />
                </line>
              </g>

              {/* Dynamic Energy Laser from Active Card to Central Fingerprint Core */}
              {activeSlot && (
                <g className="active-laser-group" key={`m-laser-${activeItem.id}`}>
                  <path
                    d={`M${activeSlot.cx} ${activeSlot.cy} Q${(activeSlot.cx + 771) / 2} ${(activeSlot.cy + 500) / 2 - 35} 771 500`}
                    fill="none"
                    stroke={activeItemColor}
                    strokeWidth="3.2"
                    strokeDasharray="8 6"
                    opacity="0.85"
                    filter="url(#m-identity-glow)"
                  >
                    <animate attributeName="stroke-dashoffset" values="28;0" dur="1.2s" repeatCount="indefinite" />
                  </path>
                </g>
              )}

              {/* 10 Satellite Circular Icon Badges for Current Batch */}
              {pageItems.map((item, index) => {
                const slot = services[index];
                if (!slot) return null;
                return (
                  <Service
                    key={item.id}
                    item={item}
                    slot={slot}
                    index={index}
                    isActive={item.id === activeItem.id}
                    onSelect={(id) => handleSelectService(id)}
                    isMobile={true}
                  />
                );
              })}
            </svg>
          </div>

          {/* 3. Specification Content Card (Directly Below Pedestal) */}
          <div className="mobile-spec-card" style={{ '--accent-color': activeItemColor }}>
            <div className="mobile-spec-tag">
              SPECIFICATION {activeItem.number} OF 57
            </div>
            <h2 className="mobile-spec-heading">
              {activeItem.title}
            </h2>
            <p className="mobile-spec-desc">
              {activeItem.description}
            </p>
            <div className="mobile-spec-footer">
              • VERIFIED PROTOCOL • NIST SP 800-86 •
            </div>
          </div>

          {/* 4. Bottom Navigation Dock & Controls */}
          <div className="mobile-dock-wrapper">
            <div className="mobile-nav-dock">
              {/* Previous Button */}
              <button
                type="button"
                className="mobile-dock-btn mobile-dock-btn-prev"
                onClick={handlePrev}
                aria-label="Previous capability"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span>PREV</span>
              </button>

              {/* Center Active Information */}
              <div className="mobile-dock-center">
                <div
                  className="mobile-dock-icon-badge"
                  style={{ '--badge-color': activeItemColor }}
                >
                  <svg viewBox="-30 -30 60 60" width="20" height="20">
                    <Icon type={activeItemIcon} style={{ color: activeItemColor }} />
                  </svg>
                </div>
                <div className="mobile-dock-counter">
                  <strong className="mobile-dock-num">{activeItem.number}</strong>
                  <span className="mobile-dock-total">/ 57</span>
                </div>
                <div className="mobile-dock-title" title={activeItem.title}>
                  {activeItem.title}
                </div>
              </div>

              {/* Next Button */}
              <button
                type="button"
                className="mobile-dock-btn mobile-dock-btn-next"
                onClick={handleNext}
                aria-label="Next capability"
              >
                <span>NEXT</span>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* 5. Auto Play Status Bar (Phone 3 Mockup) */}
            <div className="mobile-autoplay-bar">
              <div className="mobile-autoplay-status">
                <span>{isAutoPlaying ? '▶' : '⏸'}</span>
                <span>{isAutoPlaying ? 'Auto Playing (5s)' : 'Auto Play Paused'}</span>
              </div>
              <button
                type="button"
                className="mobile-autoplay-toggle-btn"
                onClick={handleTogglePlay}
                title={isAutoPlaying ? 'Pause auto-rotation' : 'Resume auto-rotation'}
              >
                {isAutoPlaying ? (
                  <>
                    <span>⏸</span>
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <span>▶</span>
                    <span>Resume</span>
                  </>
                )}
              </button>
            </div>

            {/* 6. Pagination Dots (6 Batches of 10 Items) */}
            <div className="mobile-pagination-dots">
              {Array.from({ length: totalPages }, (_, pageIdx) => {
                const isCurrentPage = pageIdx === currentPage;
                return (
                  <button
                    key={pageIdx}
                    type="button"
                    className={`mobile-page-dot ${isCurrentPage ? 'is-active' : ''}`}
                    style={{ '--dot-color': isCurrentPage ? activeItemColor : '#cbd5e1' }}
                    onClick={() => handleSelectBatch(pageIdx)}
                    aria-label={`Jump to batch ${pageIdx + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
