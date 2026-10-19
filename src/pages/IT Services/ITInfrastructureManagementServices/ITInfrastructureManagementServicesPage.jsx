import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  ClipboardCheck,
  Server,
  HardDrive,
  Layers,
  Cloud,
  Database,
  Archive,
  RefreshCcw,
  Cpu,
  Network,
  GitBranch,
  ShieldCheck,
  Wifi,
  Activity,
  Wrench,
  Users,
  Key,
  FolderTree,
  Monitor,
  Laptop,
  Globe,
  Radio,
  LineChart,
  BellRing,
  PackageCheck,
  Award,
  TrendingUp,
  Gauge,
  Sliders,
  Lock,
  Zap,
  CloudLightning,
  Thermometer,
  Share2,
  Briefcase,
  CalendarCheck,
  Headphones,
  Scale,
  FileText,
  PhoneCall,
  Box,
  DollarSign,
  Flame,
  Target,
  Home,
} from 'lucide-react';
import {
  INFRASTRUCTURE_SERVICES
} from './ITInfrastructureManagementServicesPageData.js';

/**
 * Universal Icon mapping dictionary
 */
const ICON_MAP = {
  Boxes,
  ClipboardCheck,
  Server,
  HardDrive,
  Layers,
  Cloud,
  Database,
  Archive,
  RefreshCcw,
  Cpu,
  Network,
  GitBranch,
  ShieldCheck,
  Wifi,
  Activity,
  Wrench,
  Users,
  Key,
  FolderTree,
  Monitor,
  Laptop,
  Globe,
  Radio,
  LineChart,
  BellRing,
  PackageCheck,
  Award,
  TrendingUp,
  Gauge,
  Sliders,
  Lock,
  Zap,
  CloudLightning,
  Thermometer,
  Share2,
  Briefcase,
  CalendarCheck,
  Headphones,
  Scale,
  FileText,
  PhoneCall,
  Box,
  DollarSign,
  Flame,
  Target,
};

export const ServiceIcon = ({ iconKey, size = 24, color = '#2563eb', className = '' }) => {
  const IconComponent = ICON_MAP[iconKey] || Server;
  return <IconComponent size={size} color={color} className={className} strokeWidth={2} />;
};

/**
 * Precision Torx Screw Vector with Metallic Washer & 6-Point Star Indentation
 */
function TorxScrew({ cx, cy, size = 15, prefix = "desk" }) {
  const scale = size / 16;
  return (
    <g transform={`translate(${cx}, ${cy}) scale(${scale})`}>
      {/* Outer recessed cavity */}
      <circle r={10} fill="#030712" />
      <circle r={10} fill="none" stroke="#1e293b" strokeWidth="0.8" />
      {/* Stainless washer ring with bevel */}
      <circle r={8.2} fill={`url(#${prefix}-torx-washer-grad)`} stroke="#334155" strokeWidth="0.8" />
      {/* Beveled screw head dome */}
      <circle r={6} fill={`url(#${prefix}-torx-head-grad)`} stroke="#475569" strokeWidth="0.6" />
      {/* Torx 6-lobed star drive hole */}
      <path
        d="M 0 -3.4 L 0.9 -1.3 L 3.0 -1.7 L 1.8 0 L 3.0 1.7 L 0.9 1.3 L 0 3.4 L -0.9 1.3 L -3.0 1.7 L -1.8 0 L -3.0 1.7 L -0.9 1.3 Z"
        fill="#030712"
      />
      <circle r={0.8} fill="#1e293b" />
    </g>
  );
}


/**
 * 100% Vector Ultra-Detailed 3D Hard Drive Centerpiece
 * Razor-sharp precision matching media_1791895500864.png with NO fuzzy blur fog
 */
function UltraDetailedHardDriveSvg({ prefix = "desk", viewBox = "0 0 1440 920" }) {
  const p = prefix;
  return (
    <svg
      className="w-full h-full overflow-visible select-none drop-shadow-xl"
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Subtle sharp edge glow filter (strictly 1.5px, no wide blurry fog) */}
        <filter id={`${p}-sharp-cyan-tube`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#00f0ff" floodOpacity="0.85" />
        </filter>

        <filter id={`${p}-hdd-chassis-shadow`} x="-30%" y="-15%" width="160%" height="145%">
          <feDropShadow dx="0" dy="25" stdDeviation="25" floodColor="rgba(2, 6, 23, 0.65)" />
        </filter>

        {/* 3D Brushed Alloy Outer Frame Gradient */}
        <linearGradient id={`${p}-chassis-alloy-metal`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="3%" stopColor="#334155" />
          <stop offset="8%" stopColor="#64748b" />
          <stop offset="16%" stopColor="#94a3b8" />
          <stop offset="28%" stopColor="#cbd5e1" />
          <stop offset="48%" stopColor="#f8fafc" />
          <stop offset="55%" stopColor="#cbd5e1" />
          <stop offset="72%" stopColor="#94a3b8" />
          <stop offset="88%" stopColor="#475569" />
          <stop offset="97%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        <linearGradient id={`${p}-chassis-inner-recess`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#030712" />
          <stop offset="30%" stopColor="#0b1329" />
          <stop offset="70%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        {/* Voice Coil Neodymium Magnet Stainless Steel */}
        <linearGradient id={`${p}-magnet-yoke-steel`} x1="0%" y1="0%" x2="100%" y2="60%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="20%" stopColor="#64748b" />
          <stop offset="45%" stopColor="#cbd5e1" />
          <stop offset="70%" stopColor="#f1f5f9" />
          <stop offset="85%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>

        {/* Chrome Bearing Concentric Gradient */}
        <radialGradient id={`${p}-bearing-chrome-cyl`} cx="44%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="20%" stopColor="#f1f5f9" />
          <stop offset="50%" stopColor="#64748b" />
          <stop offset="80%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>

        {/* Actuator Machined Precision Arm */}
        <linearGradient id={`${p}-actuator-steel-arm`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#e2e8f0" />
          <stop offset="60%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>

        {/* Gold SATA Connector Pins */}
        <linearGradient id={`${p}-gold-sata-pin`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#a16207" />
        </linearGradient>

        {/* Torx Screws */}
        <linearGradient id={`${p}-torx-washer-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="40%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <radialGradient id={`${p}-torx-head-grad`} cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#334155" />
        </radialGradient>

        {/* Dark Platter Mirror Radial Gradient */}
        <radialGradient id={`${p}-platter-mirror-grad`} cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#14284b" />
          <stop offset="45%" stopColor="#0a172e" />
          <stop offset="85%" stopColor="#040b18" />
          <stop offset="100%" stopColor="#020612" />
        </radialGradient>

        {/* Cyber Floor Pedestal Radial */}
        <radialGradient id={`${p}-cyber-floor-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.5" />
          <stop offset="35%" stopColor="#0284c7" stopOpacity="0.25" />
          <stop offset="70%" stopColor="#1e3a8a" stopOpacity="0.08" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* =========================================================
          LAYER 1: CYBER PEDESTAL PLATFORM (DESKTOP ONLY)
          ========================================================= */}
      {viewBox === "0 0 1440 920" && (
        <g id="floor-platform">
          <ellipse cx="720" cy="800" rx="390" ry="46" fill={`url(#${p}-cyber-floor-glow)`} />
          {/* Outer Cyan Neon Ring */}
          <ellipse
            cx="720"
            cy="800"
            rx="350"
            ry="38"
            stroke="#00f0ff"
            strokeWidth="3"
            fill="none"
            filter={`url(#${p}-sharp-cyan-tube)`}
          />
          {/* Middle Dotted Cyber Ring */}
          <ellipse
            cx="720"
            cy="800"
            rx="280"
            ry="30"
            stroke="#2563eb"
            strokeWidth="2.5"
            strokeDasharray="8 6"
            fill="none"
            opacity="0.8"
          />
          {/* Inner White Focal Ring */}
          <ellipse
            cx="720"
            cy="800"
            rx="195"
            ry="20"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            opacity="0.9"
          />
        </g>
      )}

      {/* =========================================================
          LAYER 2: 3D HARD DISK DRIVE METALLIC UNIBODY CHASSIS
          ========================================================= */}
      <g id="hdd-unibody" filter={`url(#${p}-hdd-chassis-shadow)`}>
        {/* SOLID OPAQUE DARK BASE LAYER (Ensures chassis is NEVER white or transparent!) */}
        <path
          d="
            M 470 100
            Q 470 65 505 65
            L 700 65
            L 705 60
            L 735 60
            L 740 65
            L 935 65
            Q 970 65 970 100
            L 970 755
            Q 970 795 930 795
            L 510 795
            Q 470 795 470 755
            Z
          "
          fill="#1e293b"
        />

        {/* Outer CNC Heavy Cast Aluminum Alloy Chassis Gradient */}
        <path
          d="
            M 470 100
            Q 470 65 505 65
            L 700 65
            L 705 60
            L 735 60
            L 740 65
            L 935 65
            Q 970 65 970 100
            L 970 755
            Q 970 795 930 795
            L 510 795
            Q 470 795 470 755
            Z
          "
          fill={`url(#${p}-chassis-alloy-metal)`}
          stroke="#475569"
          strokeWidth="2.5"
        />

        {/* Side Mounting Flanges & Outer Chassis Notches */}
        <path d="M 465 260 L 472 260 L 472 290 L 465 290 Z" fill="#64748b" />
        <path d="M 465 425 L 472 425 L 472 455 L 465 455 Z" fill="#64748b" />
        <path d="M 465 590 L 472 590 L 472 620 L 465 620 Z" fill="#64748b" />

        <path d="M 968 260 L 975 260 L 975 290 L 968 290 Z" fill="#64748b" />
        <path d="M 968 425 L 975 425 L 975 455 L 968 455 Z" fill="#64748b" />
        <path d="M 968 590 L 975 590 L 975 620 L 968 620 Z" fill="#64748b" />

        {/* Stepped Chamfer Outer Bevel (Crisp Metallic 1.5px Specular Highlight) */}
        <rect
          x="478"
          y="74"
          width="484"
          height="712"
          rx="28"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.4"
          opacity="0.85"
        />

        {/* Recessed Dark Channel / Gasket Trough */}
        <rect
          x="485"
          y="82"
          width="470"
          height="696"
          rx="22"
          fill="none"
          stroke="#0f172a"
          strokeWidth="2.5"
        />

        {/* SOLID BASE FOR STRUCTURAL WELL BED */}
        <rect
          x="489"
          y="86"
          width="462"
          height="688"
          rx="20"
          fill="#080e1e"
        />

        {/* Inner Anodized Dark Structural Well Bed Gradient */}
        <rect
          x="489"
          y="86"
          width="462"
          height="688"
          rx="20"
          fill={`url(#${p}-chassis-inner-recess)`}
          stroke="#1e293b"
          strokeWidth="1.5"
        />

        {/* Top-Right Crevice: Green PCB Circuit Board Layer */}
        <g id="top-right-pcb">
          <path d="M 875 110 L 945 110 L 945 205 L 880 205 Z" fill="#022c22" stroke="#064e3b" strokeWidth="1" />
          <path d="M 890 125 L 940 125" stroke="#10b981" strokeWidth="1" />
          <path d="M 890 140 L 940 140" stroke="#eab308" strokeWidth="1.2" />
          <path d="M 915 125 L 915 180" stroke="#10b981" strokeWidth="1" />
          <rect x="912" y="148" width="12" height="10" rx="1.5" fill="#0f172a" stroke="#eab308" strokeWidth="0.8" />
          <rect x="930" y="148" width="8" height="6" rx="1" fill="#0f172a" stroke="#10b981" strokeWidth="0.8" />
          <circle cx="895" cy="165" r="1.5" fill="#eab308" />
          <circle cx="902" cy="165" r="1.5" fill="#eab308" />
          <circle cx="895" cy="175" r="1.5" fill="#eab308" />
          <circle cx="902" cy="175" r="1.5" fill="#eab308" />
        </g>

        {/* Lower-Right Crevice: Green PCB & Blue Status LEDs */}
        <g id="lower-right-pcb">
          <path d="M 865 615 L 945 615 L 945 700 L 865 700 Z" fill="#022c22" stroke="#064e3b" strokeWidth="1" />
          <path d="M 875 635 L 935 635" stroke="#eab308" strokeWidth="1.2" />
          <path d="M 875 655 L 935 655" stroke="#10b981" strokeWidth="1" />
          <rect x="888" y="628" width="4.5" height="15" rx="2" fill="#00f0ff" filter={`url(#${p}-sharp-cyan-tube)`} />
          <rect x="889.5" y="630" width="1.5" height="11" rx="0.8" fill="#ffffff" />
          <rect x="903" y="628" width="4.5" height="15" rx="2" fill="#00f0ff" filter={`url(#${p}-sharp-cyan-tube)`} />
          <rect x="904.5" y="630" width="1.5" height="11" rx="0.8" fill="#ffffff" />
        </g>

        {/* Chassis Precision Torx Screws */}
        <TorxScrew cx={515} cy={115} size={16} prefix={p} />
        <TorxScrew cx={925} cy={115} size={16} prefix={p} />
        <TorxScrew cx={495} cy={275} size={15} prefix={p} />
        <TorxScrew cx={945} cy={275} size={15} prefix={p} />
        <TorxScrew cx={495} cy={440} size={15} prefix={p} />
        <TorxScrew cx={945} cy={440} size={15} prefix={p} />
        <TorxScrew cx={505} cy={605} size={15} prefix={p} />
        <TorxScrew cx={935} cy={605} size={15} prefix={p} />
        <TorxScrew cx={520} cy={725} size={16} prefix={p} />
        <TorxScrew cx={920} cy={725} size={16} prefix={p} />
        <TorxScrew cx={720} cy={95} size={14} prefix={p} />
      </g>

      {/* =========================================================
          LAYER 3: LOWER MECHANICAL ASSEMBLY (MAGNET & ACTUATOR ARM)
          ========================================================= */}
      <g id="lower-mechanical-system">
        {/* Right Structural Matte Black Damper Block */}
        <g id="right-damper-block">
          <path
            d="M 750 585 L 880 565 C 895 565, 910 575, 915 595 L 910 710 L 755 715 Z"
            fill="#090d16"
            stroke="#1e293b"
            strokeWidth="1.8"
          />
          <circle cx="860" cy="645" r="14" fill={`url(#${p}-torx-washer-grad)`} stroke="#334155" strokeWidth="1" />
          <TorxScrew cx={860} cy={645} size={14} prefix={p} />
        </g>

        {/* Massive Neodymium Voice Coil Magnet Yoke */}
        <g id="voice-coil-magnet">
          <path
            d="M 505 440 C 545 425, 625 455, 645 515 C 635 575, 580 625, 530 615 C 508 580, 498 495, 505 440 Z"
            fill={`url(#${p}-magnet-yoke-steel)`}
            stroke="#475569"
            strokeWidth="2"
          />
          <path
            d="M 508 443 C 545 430, 620 458, 640 515"
            stroke="#ffffff"
            strokeWidth="1.2"
            fill="none"
            opacity="0.8"
          />
          <TorxScrew cx={525} cy={475} size={13} prefix={p} />
          <TorxScrew cx={555} cy={560} size={13} prefix={p} />
          <TorxScrew cx={595} cy={710} size={14} prefix={p} />

          <path
            d="M 525 488 C 560 478, 610 503, 625 545"
            stroke="#d97706"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 527 492 C 562 482, 612 507, 627 549"
            stroke="#b45309"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* Curved Cyan Neon Light Bar */}
        <g id="magnet-neon-crescent">
          <path
            d="M 570 512 C 600 532, 622 572, 626 618"
            stroke="#00f0ff"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            filter={`url(#${p}-sharp-cyan-tube)`}
          />
          <path
            d="M 570 512 C 600 532, 622 572, 626 618"
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Central Pivot Bearing Spindle */}
        <g id="central-pivot-bearing">
          <circle cx="675" cy="580" r="40" fill="#050811" stroke="#1e293b" strokeWidth="2" />
          <circle cx="675" cy="580" r="33" fill={`url(#${p}-bearing-chrome-cyl)`} stroke="#475569" strokeWidth="1.8" />
          <circle cx="675" cy="580" r="23" fill="#070d18" stroke="#0f172a" strokeWidth="1.2" />
          <circle cx="675" cy="580" r="16" fill={`url(#${p}-bearing-chrome-cyl)`} stroke="#cbd5e1" strokeWidth="1.2" />
          <path
            d="M 663 574 A 14 14 0 0 1 687 574"
            stroke="#ffffff"
            strokeWidth="1.5"
            fill="none"
            opacity="0.85"
          />
          <TorxScrew cx={675} cy={580} size={10} prefix={p} />
        </g>

        {/* Diagonal Cyan Neon Light Bar */}
        <g id="actuator-neon-strip">
          <path
            d="M 752 530 L 858 465"
            stroke="#00f0ff"
            strokeWidth="7.5"
            strokeLinecap="round"
            fill="none"
            filter={`url(#${p}-sharp-cyan-tube)`}
          />
          <path
            d="M 752 530 L 858 465"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Precision Machined Actuator Arm */}
        <g id="actuator-arm" className="animate-actuator-seek">
          <path
            d="M 665 558 L 818 440 C 827 433, 838 440, 834 450 L 814 472 L 698 598 Z"
            fill={`url(#${p}-actuator-steel-arm)`}
            stroke="#475569"
            strokeWidth="1.4"
          />
          <path
            d="M 667 560 L 818 442"
            stroke="#ffffff"
            strokeWidth="1.4"
            fill="none"
            opacity="0.9"
          />
          <circle cx="688" cy="558" r="6.5" fill="#050811" stroke="#1e293b" strokeWidth="0.8" />
          <circle cx="704" cy="544" r="4.2" fill="#050811" stroke="#1e293b" strokeWidth="0.8" />
          <polygon
            points="723,526 778,480 748,538"
            fill="#050811"
            stroke="#1e293b"
            strokeWidth="0.8"
          />
          <polygon
            points="774,475 812,446 796,490"
            fill="#050811"
            stroke="#1e293b"
            strokeWidth="0.8"
          />
          <path
            d="M 814 440 L 848 416 L 852 422 L 818 446 Z"
            fill="#f8fafc"
            stroke="#cbd5e1"
            strokeWidth="0.8"
          />
          <rect
            x="844"
            y="412"
            width="8"
            height="15"
            rx="1.5"
            fill="#0284c7"
            stroke="#38bdf8"
            strokeWidth="1"
          />
          <path
            d="M 685 578 Q 740 528 830 440"
            stroke={`url(#${p}-gold-sata-pin)`}
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </g>

      {/* =========================================================
          LAYER 4: CIRCULAR PLATTER RIM WITH CRISP NEON CYAN RING
          ========================================================= */}
      <g id="circular-platter-rim">
        <circle cx="720" cy="275" r="176" fill="#020617" stroke="#1e293b" strokeWidth="2.5" />
        <circle cx="720" cy="275" r="174" fill="none" stroke="#94a3b8" strokeWidth="2" opacity="0.85" />
        <path
          d="M 572 360 A 171 171 0 1 1 864 366"
          stroke="#00f0ff"
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
          filter={`url(#${p}-sharp-cyan-tube)`}
        />
        <path
          d="M 572 360 A 171 171 0 1 1 864 366"
          stroke="#ffffff"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          opacity="0.95"
        />
        <circle
          cx="720"
          cy="275"
          r="165"
          stroke="#0e2a5e"
          strokeWidth="2.5"
          fill="none"
          opacity="0.75"
        />
        {/* Solid Opaque Mirror Base */}
        <circle cx="720" cy="275" r="162" fill="#030816" />
        {/* Platter Glass Gradient */}
        <circle cx="720" cy="275" r="162" fill={`url(#${p}-platter-mirror-grad)`} />
        <ellipse
          cx="720"
          cy="275"
          rx="158"
          ry="70"
          fill="#38bdf8"
          opacity="0.08"
          className="animate-platter-shimmer"
        />
      </g>

      {/* =========================================================
          LAYER 5: BOTTOM INDUSTRIAL CONTROL FASCIA & SATA PORT
          ========================================================= */}
      <g id="bottom-industrial-fascia">
        <rect
          x="530"
          y="738"
          width="380"
          height="42"
          rx="6"
          fill="#090d16"
          stroke="#1e293b"
          strokeWidth="2"
        />
        <rect x="548" y="746" width="6" height="26" rx="3" fill="#00f0ff" filter={`url(#${p}-sharp-cyan-tube)`} />
        <rect x="549.5" y="748" width="3" height="22" rx="1.5" fill="#ffffff" />
        <rect x="566" y="746" width="6" height="26" rx="3" fill="#00f0ff" filter={`url(#${p}-sharp-cyan-tube)`} />
        <rect x="567.5" y="748" width="3" height="22" rx="1.5" fill="#ffffff" />

        <rect x="670" y="743" width="76" height="6.5" rx="3.2" fill="#00f0ff" filter={`url(#${p}-sharp-cyan-tube)`} />
        <rect x="672" y="744.5" width="72" height="3.5" rx="1.8" fill="#ffffff" />

        <rect
          x="615"
          y="754"
          width="185"
          height="22"
          rx="4"
          fill="#030712"
          stroke="#1e293b"
          strokeWidth="1.5"
        />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) => (
          <line
            key={i}
            x1={623 + i * 9.5}
            y1={758}
            x2={623 + i * 9.5}
            y2={770}
            stroke={`url(#${p}-gold-sata-pin)`}
            strokeWidth="2.4"
          />
        ))}

        <rect x="836" y="756" width="5.5" height="18" rx="2.5" fill="#00f0ff" filter={`url(#${p}-sharp-cyan-tube)`} />
        <rect x="837.5" y="757.5" width="2.5" height="15" rx="1.2" fill="#ffffff" />
        <rect x="852" y="756" width="5.5" height="18" rx="2.5" fill="#00f0ff" filter={`url(#${p}-sharp-cyan-tube)`} />
        <rect x="853.5" y="757.5" width="2.5" height="15" rx="1.2" fill="#ffffff" />

        <rect x="880" y="746" width="6" height="26" rx="3" fill="#00f0ff" filter={`url(#${p}-sharp-cyan-tube)`} />
        <rect x="881.5" y="748" width="3" height="22" rx="1.5" fill="#ffffff" />
        <rect x="898" y="746" width="6" height="26" rx="3" fill="#00f0ff" filter={`url(#${p}-sharp-cyan-tube)`} />
        <rect x="899.5" y="748" width="3" height="22" rx="1.5" fill="#ffffff" />
      </g>
    </svg>
  );
}

// Pre-configured character falling physics for "IT Infrastructure Management"
const HEADING_WORDS = [
  {
    word: 'IT',
    letters: [
      { char: 'I', delay: 0.15, dropY: -95, rot: 8 },
      { char: 'T', delay: 0.32, dropY: -115, rot: -10 },
    ],
  },
  {
    word: 'Infrastructure',
    letters: [
      { char: 'I', delay: 0.08, dropY: -90, rot: 11 },
      { char: 'n', delay: 0.42, dropY: -110, rot: -7 },
      { char: 'f', delay: 0.18, dropY: -85, rot: 9 },
      { char: 'r', delay: 0.54, dropY: -125, rot: -12 },
      { char: 'a', delay: 0.12, dropY: -95, rot: 6 },
      { char: 's', delay: 0.46, dropY: -105, rot: -8 },
      { char: 't', delay: 0.22, dropY: -90, rot: 14 },
      { char: 'r', delay: 0.60, dropY: -130, rot: -11 },
      { char: 'u', delay: 0.16, dropY: -100, rot: 7 },
      { char: 'c', delay: 0.38, dropY: -85, rot: -9 },
      { char: 't', delay: 0.68, dropY: -120, rot: 10 },
      { char: 'u', delay: 0.26, dropY: -95, rot: -6 },
      { char: 'r', delay: 0.50, dropY: -110, rot: 8 },
      { char: 'e', delay: 0.10, dropY: -85, rot: -13 },
    ],
  },
  {
    word: 'Management',
    letters: [
      { char: 'M', delay: 0.24, dropY: -105, rot: 9 },
      { char: 'a', delay: 0.48, dropY: -115, rot: -5 },
      { char: 'n', delay: 0.14, dropY: -90, rot: 12 },
      { char: 'a', delay: 0.56, dropY: -120, rot: -11 },
      { char: 'g', delay: 0.30, dropY: -85, rot: 8 },
      { char: 'e', delay: 0.64, dropY: -110, rot: -14 },
      { char: 'm', delay: 0.20, dropY: -95, rot: 6 },
      { char: 'e', delay: 0.52, dropY: -105, rot: -10 },
      { char: 'n', delay: 0.16, dropY: -90, rot: 7 },
      { char: 't', delay: 0.40, dropY: -115, rot: -8 },
    ],
  },
];

/**
 * Main IT Infrastructure Management Services Component
 */
export default function ITInfrastructureManagementServices({ onClose, onHome }) {
  const [animHeadingKey, setAnimHeadingKey] = useState(0);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0); // 5 pages (10 cards each)
  const [isDarkMode] = useState(false); // Clean White Theme as primary!

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

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
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const [stageScale, setStageScale] = useState(1.0);
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return;
      const w = window.innerWidth;
      if (w < 1472) {
        // Smoothly scale down for laptops (down to 1024px) without horizontal clipping
        const fitScale = (w - 32) / 1440;
        setStageScale(Number(Math.max(0.68, Math.min(1.0, fitScale)).toFixed(3)));
      } else {
        // Standard and wide screens: 100% true native scale (1.0)
        setStageScale(1.0);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(INFRASTRUCTURE_SERVICES.length / pageSize));

  const visibleServices = useMemo(() => {
    const start = currentPage * pageSize;
    return INFRASTRUCTURE_SERVICES.slice(start, start + pageSize);
  }, [currentPage]);

  const leftCards = useMemo(() => visibleServices.slice(0, 5), [visibleServices]);
  const rightCards = useMemo(() => visibleServices.slice(5, 10), [visibleServices]);

  // Synchronized Four Visible Cards: active capability is always at position 0
  const fourVisibleCards = useMemo(() => {
    const count = INFRASTRUCTURE_SERVICES.length;
    if (count === 0) return [];
    return [0, 1, 2, 3].map((offset) => {
      const idx = (activeServiceIndex + offset) % count;
      return {
        service: INFRASTRUCTURE_SERVICES[idx],
        globalIndex: idx,
        isFirst: offset === 0,
      };
    });
  }, [activeServiceIndex]);

  const activeService = INFRASTRUCTURE_SERVICES[activeServiceIndex] || INFRASTRUCTURE_SERVICES[0] || null;

  const handleSelectService = (globalIndex) => {
    setActiveServiceIndex(globalIndex);
    const targetPage = Math.floor(globalIndex / pageSize);
    if (targetPage !== currentPage) {
      setCurrentPage(targetPage);
    }
    // On mobile & tablet: smooth scroll to drive console preview
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      const consoleElem = document.getElementById('mobile-drive-console');
      if (consoleElem) {
        consoleElem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNextService();
      } else {
        handlePrevService();
      }
    }
    setTouchStartX(null);
  };

  const handleNextService = useCallback(() => {
    setActiveServiceIndex((prev) => {
      if (prev >= INFRASTRUCTURE_SERVICES.length - 1) return prev;
      const nextIdx = prev + 1;
      const targetPage = Math.floor(nextIdx / pageSize);
      setCurrentPage((prevPage) => (prevPage !== targetPage ? targetPage : prevPage));
      return nextIdx;
    });
  }, [pageSize]);

  const handlePrevService = useCallback(() => {
    setActiveServiceIndex((prev) => {
      if (prev <= 0) return prev;
      const prevIdx = prev - 1;
      const targetPage = Math.floor(prevIdx / pageSize);
      setCurrentPage((prevPage) => (prevPage !== targetPage ? targetPage : prevPage));
      return prevIdx;
    });
  }, [pageSize]);

  const handleGoToPage = (targetPage) => {
    if (targetPage >= 0 && targetPage < totalPages) {
      setCurrentPage(targetPage);
      setActiveServiceIndex(targetPage * pageSize);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNextService();
      } else if (e.key === 'ArrowLeft') {
        handlePrevService();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextService, handlePrevService]);

  const desktopNumbersRef = useRef(null);
  const mobileNumbersRef = useRef(null);
  const activeDesktopBtnRef = useRef(null);
  const activeMobileBtnRef = useRef(null);

  const desktopListContainerRef = useRef(null);
  const mobileListContainerRef = useRef(null);
  const activeDesktopItemRef = useRef(null);
  const activeMobileItemRef = useRef(null);

  useEffect(() => {
    // Scroll pagination number into center
    if (activeDesktopBtnRef.current && desktopNumbersRef.current) {
      const container = desktopNumbersRef.current;
      const btn = activeDesktopBtnRef.current;
      const left = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
      container.scrollTo({ left, behavior: 'smooth' });
    }
    if (activeMobileBtnRef.current && mobileNumbersRef.current) {
      const container = mobileNumbersRef.current;
      const btn = activeMobileBtnRef.current;
      const left = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
      container.scrollTo({ left, behavior: 'smooth' });
    }

    // Scroll active list item into view inside the scrollable capability list
    if (activeDesktopItemRef.current && desktopListContainerRef.current) {
      const container = desktopListContainerRef.current;
      const item = activeDesktopItemRef.current;
      const top = item.offsetTop - container.offsetTop - (container.clientHeight / 2) + (item.clientHeight / 2);
      container.scrollTo({ top, behavior: 'smooth' });
    }
    if (activeMobileItemRef.current && mobileListContainerRef.current) {
      const container = mobileListContainerRef.current;
      const item = activeMobileItemRef.current;
      const top = item.offsetTop - container.offsetTop - (container.clientHeight / 2) + (item.clientHeight / 2);
      container.scrollTo({ top, behavior: 'smooth' });
    }
  }, [activeServiceIndex]);

  // SVG Fiber Optic Cable Paths connecting the 10 cards to the drive
  const leftCablePaths = [
    { cardY: 180, driveY: 230, path: 'M 355 180 C 425 180, 440 230, 470 230' },
    { cardY: 290, driveY: 290, path: 'M 355 290 C 420 290, 445 290, 470 290' },
    { cardY: 400, driveY: 360, path: 'M 355 400 C 420 400, 445 360, 470 360' },
    { cardY: 510, driveY: 450, path: 'M 355 510 C 420 510, 445 450, 470 450' },
    { cardY: 620, driveY: 550, path: 'M 355 620 C 425 620, 440 550, 470 550' },
  ];

  const rightCablePaths = [
    { cardY: 180, driveY: 230, path: 'M 1085 180 C 1015 180, 1000 230, 970 230' },
    { cardY: 290, driveY: 290, path: 'M 1085 290 C 1020 290, 995 290, 970 290' },
    { cardY: 400, driveY: 360, path: 'M 1085 400 C 1020 400, 995 360, 970 360' },
    { cardY: 510, driveY: 450, path: 'M 1085 510 C 1020 510, 995 450, 970 450' },
    { cardY: 620, driveY: 550, path: 'M 1085 620 C 1015 620, 1000 550, 970 550' },
  ];

  return (
    <div
      id="top-drive-hero"
      className={`relative w-full min-h-screen transition-colors duration-500 font-sans overflow-x-hidden flex flex-col items-center selection:bg-blue-600 selection:text-white ${
        isDarkMode ? 'bg-[#040814] text-white' : 'bg-[#ffffff] text-slate-900'
      }`}
    >
      {/* Node Entrance and Activation Keyframe Animations */}
      <style>{`
        @keyframes node-enter-left {
          0% {
            opacity: 0;
            transform: translateX(-35px) scale(0.88);
            filter: blur(4px);
          }
          65% {
            opacity: 1;
            transform: translateX(4px) scale(1.03);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes node-enter-right {
          0% {
            opacity: 0;
            transform: translateX(35px) scale(0.88);
            filter: blur(4px);
          }
          65% {
            opacity: 1;
            transform: translateX(-4px) scale(1.03);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes active-icon-pulse {
          0% {
            transform: scale(0.92);
            filter: drop-shadow(0 0 2px rgba(0, 240, 255, 0.4));
          }
          50% {
            transform: scale(1.15);
            filter: drop-shadow(0 0 16px rgba(0, 240, 255, 0.95));
          }
          100% {
            transform: scale(1.08);
            filter: drop-shadow(0 0 10px rgba(0, 240, 255, 0.7));
          }
        }
        .animate-node-in-left {
          animation: node-enter-left 0.48s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-node-in-right {
          animation: node-enter-right 0.48s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-active-node {
          animation: active-icon-pulse 0.42s cubic-bezier(0.2, 0.8, 0.3, 1.2) forwards;
        }
        @keyframes icon-pop {
          0% {
            transform: scale(0.7) rotate(-8deg);
            opacity: 0.6;
          }
          60% {
            transform: scale(1.18) rotate(3deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        .animate-icon-pop {
          animation: icon-pop 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.45);
          border-radius: 9999px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(148, 163, 184, 0.75);
        }
      `}</style>

      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-1 flex items-center justify-start gap-3 z-40 relative">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 text-white px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-sm active:scale-95"
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


      {/* =======================================================================
          BACKGROUND ATMOSPHERE: CLEAN WHITE THEME / CYBER STUDIO THEME
          ======================================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {isDarkMode ? (
          <>
            {/* Cyber Studio Dark Background */}
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at 50% 28%, #0d1e3d 0%, #060b18 55%, #02050c 100%)',
              }}
            />
            <div
              className="absolute top-1/4 -left-36 w-[650px] h-[650px] rounded-full blur-[140px] opacity-35"
              style={{ background: 'radial-gradient(circle, #0284c7 0%, transparent 70%)' }}
            />
            <div
              className="absolute top-1/3 -right-36 w-[650px] h-[650px] rounded-full blur-[140px] opacity-30"
              style={{ background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)' }}
            />
            <div
              className="absolute bottom-5 left-1/3 w-[700px] h-[380px] rounded-full blur-[130px] opacity-40"
              style={{ background: 'radial-gradient(circle, #00f0ff 0%, transparent 70%)' }}
            />
          </>
        ) : (
          <>
            {/* Pure Pristine Clean White Atmosphere */}
            <div
              className="absolute inset-0 bg-[#ffffff]"
              style={{
                background: 'radial-gradient(circle at 50% 35%, #ffffff 0%, #fafbfc 60%, #f4f6f9 100%)',
              }}
            />
            {/* Soft Ambient Spotlight Behind Hard Drive Centerpiece */}
            <div
              className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] h-[680px] rounded-full blur-[130px] opacity-25 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #bae6fd 0%, #e0f2fe 35%, transparent 70%)' }}
            />
          </>
        )}

        {/* Crisp Tech Micro-Dot Grid */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="infra-hdd-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle
                cx="16"
                cy="16"
                r="1"
                fill={isDarkMode ? '#00f0ff' : '#94a3b8'}
                opacity={isDarkMode ? 0.2 : 0.18}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#infra-hdd-grid)" />
        </svg>
      </div>



      {/* =======================================================================
          PAGE HERO HEADER: TITLE & DESCRIPTION
          ======================================================================= */}
      <header className="relative z-30 w-full max-w-4xl mx-auto pt-4 pb-2 px-4 flex flex-col items-center text-center select-none">
        {/* Pill Badge matching reference design */}
        <div className="inline-flex items-center px-4 py-1 rounded-full border border-blue-400/60 bg-blue-50/80 text-[11px] font-extrabold text-blue-600 uppercase tracking-widest mb-2 shadow-sm">
          IT SERVICES
        </div>

        <h1
          key={animHeadingKey}
          onClick={() => setAnimHeadingKey((k) => k + 1)}
          title="Click to replay falling text animation"
          className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight text-[#0a2540] leading-tight mb-2 select-none flex flex-wrap justify-center items-center gap-x-2.5 sm:gap-x-3.5 cursor-pointer"
        >
          {HEADING_WORDS.map((w, wIdx) => (
            <span key={wIdx} className={`inline-block whitespace-nowrap ${wIdx === 2 ? 'text-blue-600' : ''}`}>
              {w.letters.map((item, lIdx) => (
                <span
                  key={lIdx}
                  className="animate-letter-drop inline-block hover:-translate-y-1 hover:text-blue-600 transition-all duration-150"
                  style={{
                    animationDelay: `${item.delay}s`,
                    '--drop-y': `${item.dropY}px`,
                    '--drop-rot': `${item.rot}deg`,
                  }}
                >
                  {item.char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p className="text-xs sm:text-sm lg:text-[14px] text-slate-600 leading-relaxed max-w-3xl font-medium text-center animate-fadeIn">
          IBCS IT Infrastructure Management focuses on overseeing, optimizing, and maintaining critical technology environments to ensure stability and efficiency. Our services encompass server administration, performance monitoring, and system maintenance to keep operations running smoothly.
        </p>
      </header>

      {/* =======================================================================
          MAIN STAGE: 10 CONNECTED CARDS + ULTRA-DETAILED 3D HARD DRIVE
          ======================================================================= */}
      <main className="relative z-10 w-full mx-auto flex-1 flex flex-col items-center justify-start px-2 py-0">
        {/* DESKTOP INTEGRATED STAGE CONTAINER */}
        <div className="hidden lg:flex flex-col items-center w-full select-none">
          {/* 1440 x 920 Integrated Stage Canvas with Responsive Proportional Bounding Box */}
          <div
            className="relative select-none flex items-center justify-center transition-all duration-200 overflow-visible"
            style={{
              width: `${Math.round(1440 * stageScale)}px`,
              height: `${Math.round(920 * stageScale)}px`,
              maxWidth: '100%',
            }}
          >
            <div
              className="relative shrink-0 select-none origin-top-left"
              style={{
                width: '1440px',
                height: '920px',
                transform: `scale(${stageScale})`,
              }}
            >
          {/* 1. FIBER-OPTIC GLOWING CABLE PATHS (SVG BEHIND CARDS & DRIVE) */}
          <svg
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10"
            viewBox="0 0 1440 920"
            fill="none"
          >
            <defs>
              <filter id="cable-neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur1" />
                <feGaussianBlur stdDeviation="7" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Left Cables */}
            {leftCablePaths.slice(0, leftCards.length).map((c, i) => {
              const globalIdx = currentPage * pageSize + i;
              const isSelected = activeServiceIndex === globalIdx;
              const glowColor = isDarkMode ? '#00f0ff' : '#0284c7';
              const coreColor = isDarkMode ? '#ffffff' : '#38bdf8';
              const baseTubeColor = isDarkMode ? '#1e293b' : '#e2e8f0';

              return (
                <g key={`left-cable-${i}`}>
                  {/* Outer Conduit Sheath */}
                  <path
                    d={c.path}
                    stroke={baseTubeColor}
                    strokeWidth={isSelected ? '6' : '5'}
                    strokeLinecap="round"
                    opacity={isDarkMode ? 0.8 : 0.85}
                  />
                  {/* Glowing Laser Cable Core */}
                  <path
                    d={c.path}
                    stroke={glowColor}
                    strokeWidth={isSelected ? '3.6' : '2.2'}
                    strokeLinecap="round"
                    filter="url(#cable-neon-glow)"
                    className={isSelected ? 'animate-cable-flow' : ''}
                    opacity={isSelected ? 1 : 0.8}
                  />
                  {/* Inner Hot Pulse Core if Selected */}
                  {isSelected && (
                    <path
                      d={c.path}
                      stroke={coreColor}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      className="animate-cable-flow"
                    />
                  )}
                  {/* Card Port Node */}
                  <circle cx="355" cy={c.cardY} r="5" fill="#ffffff" stroke={glowColor} strokeWidth="2" />
                  <circle cx="355" cy={c.cardY} r="2.5" fill={glowColor} />
                  {/* Drive Chassis Port Node */}
                  <circle cx="470" cy={c.driveY} r="5" fill="#0f172a" stroke="#00f0ff" strokeWidth="1.5" />
                  <circle cx="470" cy={c.driveY} r="2.5" fill="#00f0ff" filter="url(#cable-neon-glow)" />
                </g>
              );
            })}

            {/* Right Cables */}
            {rightCablePaths.slice(0, rightCards.length).map((c, i) => {
              const cardIdx = i + 5;
              const globalIdx = currentPage * pageSize + cardIdx;
              const isSelected = activeServiceIndex === globalIdx;
              const glowColor = isDarkMode ? '#00f0ff' : '#0284c7';
              const coreColor = isDarkMode ? '#ffffff' : '#38bdf8';
              const baseTubeColor = isDarkMode ? '#1e293b' : '#e2e8f0';

              return (
                <g key={`right-cable-${i}`}>
                  {/* Outer Conduit Sheath */}
                  <path
                    d={c.path}
                    stroke={baseTubeColor}
                    strokeWidth={isSelected ? '6' : '5'}
                    strokeLinecap="round"
                    opacity={isDarkMode ? 0.8 : 0.85}
                  />
                  {/* Glowing Laser Cable Core */}
                  <path
                    d={c.path}
                    stroke={glowColor}
                    strokeWidth={isSelected ? '3.6' : '2.2'}
                    strokeLinecap="round"
                    filter="url(#cable-neon-glow)"
                    className={isSelected ? 'animate-cable-flow' : ''}
                    opacity={isSelected ? 1 : 0.8}
                  />
                  {/* Inner Hot Pulse Core if Selected */}
                  {isSelected && (
                    <path
                      d={c.path}
                      stroke={coreColor}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      className="animate-cable-flow"
                    />
                  )}
                  {/* Card Port Node */}
                  <circle cx="1085" cy={c.cardY} r="5" fill="#ffffff" stroke={glowColor} strokeWidth="2" />
                  <circle cx="1085" cy={c.cardY} r="2.5" fill={glowColor} />
                  {/* Drive Chassis Port Node */}
                  <circle cx="970" cy={c.driveY} r="5" fill="#0f172a" stroke="#00f0ff" strokeWidth="1.5" />
                  <circle cx="970" cy={c.driveY} r="2.5" fill="#00f0ff" filter="url(#cable-neon-glow)" />
                </g>
              );
            })}
          </svg>

          {/* 2. CENTERPIECE ULTRA-DETAILED 3D HARD DRIVE */}
          <div className="absolute inset-0 pointer-events-none z-15">
            <UltraDetailedHardDriveSvg prefix="desk" viewBox="0 0 1440 920" />
          </div>

          {/* 3. CENTER PLATTER: ACTIVE CAPABILITY HEADING & DESCRIPTION */}
          <div
            className="absolute z-25 flex flex-col items-center justify-center text-center select-text pointer-events-auto"
            style={{
              left: '50%',
              top: '29.89%',
              transform: 'translate(-50%, -50%)',
              width: '318px',
              height: '318px',
              borderRadius: '50%',
            }}
          >
            {/* Wide Holographic Console Container utilizing the full circle */}
            <div
              key={activeService?.id}
              className="w-[286px] flex flex-col items-center animate-fadeIn px-1.5"
            >
              {/* Capability Heading */}
              <div className="flex flex-col items-center mb-1.5 px-1">
                <h3 className="text-[14px] sm:text-[15px] font-extrabold text-cyan-300 tracking-tight leading-snug text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] max-w-[272px]">
                  {activeService?.title}
                </h3>
              </div>

              {/* Glowing Laser Tech Divider */}
              <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent mb-2 shrink-0 shadow-[0_0_6px_rgba(0,240,255,0.6)]" />

              {/* Description Content - Wide & Cleanly Aligned */}
              <div className="w-full max-h-[142px] overflow-y-auto custom-cockpit-scrollbar px-1 text-center select-text">
                <p className="text-[11.5px] sm:text-[12px] text-blue-50/95 leading-[1.65] font-normal text-center drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] select-text">
                  {activeService?.description}
                </p>
              </div>
            </div>
          </div>

          {/* 4. LEFT FLANK: 5 INTERACTIVE CIRCULAR NODES WITH RIGHT-ALIGNED LABELS */}
          <div className="absolute left-[30px] top-[144px] w-[325px] flex flex-col gap-[38px] z-20">
            {leftCards.map((srv, i) => {
              const globalIdx = currentPage * pageSize + i;
              const isSelected = activeServiceIndex === globalIdx;

              const colors = [
                { ringHex: '#38bdf8', glow: 'rgba(56, 189, 248, 0.45)', darkIcon: '#0284c7', iconColor: '#38bdf8' },
                { ringHex: '#00f0ff', glow: 'rgba(0, 240, 255, 0.55)', darkIcon: '#0284c7', iconColor: '#00f0ff' },
                { ringHex: '#c084fc', glow: 'rgba(192, 132, 252, 0.45)', darkIcon: '#7c3aed', iconColor: '#c084fc' },
                { ringHex: '#fbbf24', glow: 'rgba(251, 191, 36, 0.45)', darkIcon: '#d97706', iconColor: '#fbbf24' },
                { ringHex: '#60a5fa', glow: 'rgba(96, 165, 250, 0.45)', darkIcon: '#2563eb', iconColor: '#60a5fa' },
              ][i];

              return (
                <div
                  key={`left-node-${currentPage}-${srv.id}`}
                  onClick={() => handleSelectService(globalIdx)}
                  className="group relative flex items-center justify-end h-[72px] cursor-pointer transition-all duration-300 animate-node-in-left"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  {/* Left Side: Right-Aligned Text Label */}
                  <div className="flex-1 pr-4 text-right">
                    <h3
                      className={`text-[13px] sm:text-[14px] font-extrabold tracking-tight leading-snug line-clamp-2 transition-colors duration-200 ${
                        isSelected
                          ? (isDarkMode ? 'text-cyan-300 drop-shadow-[0_1px_4px_rgba(0,240,255,0.4)]' : 'text-blue-600 drop-shadow-[0_1px_4px_rgba(2,132,199,0.3)]')
                          : (isDarkMode ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-blue-600')
                      }`}
                      title={srv.title}
                    >
                      {srv.title}
                    </h3>
                  </div>

                  {/* Right Side: Circular 3D Icon Bubble */}
                  <div className="relative w-[72px] h-[72px] shrink-0 flex items-center justify-center">
                    {/* Outer Concentric Cyan Neon Orbit Ring with Dashes & Outer Bloom when Selected */}
                    {isSelected && (
                      <>
                        <div
                          className="absolute -inset-2.5 rounded-full pointer-events-none"
                          style={{
                            border: '1.5px dashed #00f0ff',
                            boxShadow: '0 0 15px rgba(0, 240, 255, 0.65), inset 0 0 12px rgba(0, 240, 255, 0.3)',
                            animation: 'spin 25s linear infinite',
                          }}
                        />
                        <div
                          className="absolute -inset-3.5 rounded-full pointer-events-none blur-sm opacity-60"
                          style={{
                            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.8) 0%, rgba(2, 132, 199, 0.3) 60%, transparent 100%)',
                          }}
                        />
                      </>
                    )}

                    {/* Spherical 3D Node Disc */}
                    <div
                      className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'scale-105 shadow-2xl z-10 animate-active-node'
                          : 'group-hover:scale-105 shadow-md'
                      }`}
                      style={{
                        background: isSelected
                          ? 'linear-gradient(145deg, #38bdf8 0%, #0284c7 45%, #1d4ed8 100%)'
                          : (isDarkMode
                              ? 'radial-gradient(circle at 35% 25%, #1e293b 0%, #0f172a 60%, #090e1a 100%)'
                              : 'radial-gradient(circle at 35% 25%, #ffffff 0%, #f8faff 55%, #e4effa 100%)'),
                        border: isSelected
                          ? '2.5px solid #ffffff'
                          : `2.5px solid ${colors.ringHex}`,
                        boxShadow: isSelected
                          ? '0 12px 30px -4px rgba(2, 132, 199, 0.6), 0 0 24px rgba(0, 240, 255, 0.8), inset 0 2px 4px rgba(255, 255, 255, 0.8), inset 0 -3px 6px rgba(15, 23, 42, 0.35)'
                          : `0 8px 22px -3px rgba(15, 23, 42, 0.09), 0 0 16px ${colors.glow}, inset 0 2px 4px #ffffff, inset 0 -2px 4px rgba(0, 0, 0, 0.05)`,
                      }}
                    >
                      <div className={isSelected ? 'animate-icon-pop flex items-center justify-center' : 'flex items-center justify-center'}>
                        <ServiceIcon
                          iconKey={srv.iconKey}
                          size={28}
                          color={isSelected ? '#ffffff' : (isDarkMode ? colors.iconColor : colors.darkIcon)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 5. RIGHT FLANK: 5 INTERACTIVE CIRCULAR NODES WITH LEFT-ALIGNED LABELS */}
          <div className="absolute left-[1085px] top-[144px] w-[325px] flex flex-col gap-[38px] z-20">
            {rightCards.map((srv, i) => {
              const cardIdx = i + 5;
              const globalIdx = currentPage * pageSize + cardIdx;
              const isSelected = activeServiceIndex === globalIdx;

              const colors = [
                { ringHex: '#f472b6', glow: 'rgba(244, 114, 182, 0.45)', darkIcon: '#db2777', iconColor: '#f472b6' },
                { ringHex: '#2dd4bf', glow: 'rgba(45, 212, 191, 0.45)', darkIcon: '#0d9488', iconColor: '#2dd4bf' },
                { ringHex: '#818cf8', glow: 'rgba(129, 140, 248, 0.45)', darkIcon: '#4f46e5', iconColor: '#818cf8' },
                { ringHex: '#34d399', glow: 'rgba(52, 211, 153, 0.45)', darkIcon: '#059669', iconColor: '#34d399' },
                { ringHex: '#fb7185', glow: 'rgba(251, 113, 133, 0.45)', darkIcon: '#e11d48', iconColor: '#fb7185' },
              ][i];

              return (
                <div
                  key={`right-node-${currentPage}-${srv.id}`}
                  onClick={() => handleSelectService(globalIdx)}
                  className="group relative flex items-center justify-start h-[72px] cursor-pointer transition-all duration-300 animate-node-in-right"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  {/* Left Side: Circular 3D Icon Bubble */}
                  <div className="relative w-[72px] h-[72px] shrink-0 flex items-center justify-center">
                    {/* Outer Concentric Cyan Neon Orbit Ring with Dashes & Outer Bloom when Selected */}
                    {isSelected && (
                      <>
                        <div
                          className="absolute -inset-2.5 rounded-full pointer-events-none"
                          style={{
                            border: '1.5px dashed #00f0ff',
                            boxShadow: '0 0 15px rgba(0, 240, 255, 0.65), inset 0 0 12px rgba(0, 240, 255, 0.3)',
                            animation: 'spin 25s linear infinite',
                          }}
                        />
                        <div
                          className="absolute -inset-3.5 rounded-full pointer-events-none blur-sm opacity-60"
                          style={{
                            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.8) 0%, rgba(2, 132, 199, 0.3) 60%, transparent 100%)',
                          }}
                        />
                      </>
                    )}

                    {/* Spherical 3D Node Disc */}
                    <div
                      className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'scale-105 shadow-2xl z-10 animate-active-node'
                          : 'group-hover:scale-105 shadow-md'
                      }`}
                      style={{
                        background: isSelected
                          ? 'linear-gradient(145deg, #38bdf8 0%, #0284c7 45%, #1d4ed8 100%)'
                          : (isDarkMode
                              ? 'radial-gradient(circle at 35% 25%, #1e293b 0%, #0f172a 60%, #090e1a 100%)'
                              : 'radial-gradient(circle at 35% 25%, #ffffff 0%, #f8faff 55%, #e4effa 100%)'),
                        border: isSelected
                          ? '2.5px solid #ffffff'
                          : `2.5px solid ${colors.ringHex}`,
                        boxShadow: isSelected
                          ? '0 12px 30px -4px rgba(2, 132, 199, 0.6), 0 0 24px rgba(0, 240, 255, 0.8), inset 0 2px 4px rgba(255, 255, 255, 0.8), inset 0 -3px 6px rgba(15, 23, 42, 0.35)'
                          : `0 8px 22px -3px rgba(15, 23, 42, 0.09), 0 0 16px ${colors.glow}, inset 0 2px 4px #ffffff, inset 0 -2px 4px rgba(0, 0, 0, 0.05)`,
                      }}
                    >
                      <div className={isSelected ? 'animate-icon-pop flex items-center justify-center' : 'flex items-center justify-center'}>
                        <ServiceIcon
                          iconKey={srv.iconKey}
                          size={28}
                          color={isSelected ? '#ffffff' : (isDarkMode ? colors.iconColor : colors.darkIcon)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Left-Aligned Text Label */}
                  <div className="flex-1 pl-4 text-left">
                    <h3
                      className={`text-[13px] sm:text-[14px] font-extrabold tracking-tight leading-snug line-clamp-2 transition-colors duration-200 ${
                        isSelected
                          ? (isDarkMode ? 'text-cyan-300 drop-shadow-[0_1px_4px_rgba(0,240,255,0.4)]' : 'text-blue-600 drop-shadow-[0_1px_4px_rgba(2,132,199,0.3)]')
                          : (isDarkMode ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-blue-600')
                      }`}
                      title={srv.title}
                    >
                      {srv.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

        {/* =======================================================================
            DESKTOP BOTTOM NAVIGATION DOCK: PREV & NEXT CONTROLS
            ======================================================================= */}
        <div className="w-full flex justify-center pt-2 pb-6 select-none z-30">
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full backdrop-blur-xl border bg-white/95 border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.1)]">
            {/* Previous Button */}
            <button
              onClick={handlePrevService}
              disabled={activeServiceIndex === 0}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 shadow-sm ${
                activeServiceIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                  : 'bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white hover:shadow-md cursor-pointer active:scale-95'
              }`}
              title={activeServiceIndex === 0 ? "At first capability" : "Previous Capability"}
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Prev</span>
            </button>

            {/* Capability Numbers 1 to 48 Scrollable Track */}
            <div
              ref={desktopNumbersRef}
              onWheel={(e) => {
                if (desktopNumbersRef.current) {
                  desktopNumbersRef.current.scrollLeft += e.deltaY;
                }
              }}
              className="flex items-center gap-1.5 px-2 max-w-[280px] sm:max-w-[360px] md:max-w-[440px] overflow-x-auto no-scrollbar scroll-smooth py-1"
            >
              {INFRASTRUCTURE_SERVICES.map((srv, idx) => {
                const isCur = activeServiceIndex === idx;
                return (
                  <button
                    key={srv.id || idx}
                    ref={isCur ? activeDesktopBtnRef : null}
                    onClick={() => handleSelectService(idx)}
                    className={`transition-all duration-200 rounded-full cursor-pointer flex items-center justify-center font-bold text-xs shrink-0 select-none ${
                      isCur
                        ? 'w-7 h-7 bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105'
                        : 'w-7 h-7 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
                    }`}
                    title={`Capability ${idx + 1}: ${srv.title}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextService}
              disabled={activeServiceIndex === INFRASTRUCTURE_SERVICES.length - 1}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 shadow-sm ${
                activeServiceIndex === INFRASTRUCTURE_SERVICES.length - 1
                  ? 'opacity-40 cursor-not-allowed bg-slate-200 text-slate-400'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 hover:shadow-lg cursor-pointer active:scale-95'
              }`}
              title={activeServiceIndex === INFRASTRUCTURE_SERVICES.length - 1 ? "At last capability" : "Next Capability"}
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Divider */}
            <div className="h-4 w-px bg-slate-200 mx-1" />

            {/* Service Counter Status */}
            <span className="text-[11px] font-semibold text-slate-500 px-1">
              <span className="text-blue-600 font-extrabold">{activeServiceIndex + 1}</span> of {INFRASTRUCTURE_SERVICES.length}
            </span>
          </div>
        </div>

        {/* E. CAPABILITY ICON LIST ON DESKTOP (Scrollable 1 to 48, only icon and title) */}
        <div
          ref={desktopListContainerRef}
          className="w-full max-w-xl mx-auto px-4 pb-8 select-none flex flex-col gap-2 max-h-[280px] sm:max-h-[320px] overflow-y-auto custom-scroll pr-1"
        >
          {INFRASTRUCTURE_SERVICES.map((srv, idx) => {
            const isCur = activeServiceIndex === idx;

            return (
              <div
                key={`desktop-card-${srv.id || idx}`}
                ref={isCur ? activeDesktopItemRef : null}
                onClick={() => handleSelectService(idx)}
                className={`group relative flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-all duration-200 border shrink-0 ${
                  isCur
                    ? isDarkMode
                      ? 'bg-gradient-to-r from-slate-900 via-[#0c1a33] to-slate-900 border-cyan-400 ring-2 ring-cyan-400/50 shadow-md z-10'
                      : 'bg-gradient-to-r from-blue-50/90 via-white to-blue-50/40 border-blue-500 ring-2 ring-blue-500/30 shadow-md z-10'
                    : isDarkMode
                    ? 'bg-slate-900/80 hover:bg-slate-800 border-slate-700/80 hover:border-slate-500 shadow-sm hover:shadow-md'
                    : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-105 ${
                    isCur
                      ? isDarkMode
                        ? 'bg-cyan-950/70 border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                        : 'bg-blue-100 border-blue-400 shadow-sm'
                      : isDarkMode
                      ? 'bg-slate-800 border-slate-700'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className={isCur ? 'animate-icon-pop flex items-center justify-center' : 'flex items-center justify-center'}>
                    <ServiceIcon
                      iconKey={srv.iconKey}
                      size={20}
                      color={isCur ? (isDarkMode ? '#00f0ff' : '#1d4ed8') : (isDarkMode ? '#38bdf8' : '#475569')}
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0 pr-2">
                  <h4
                    className={`text-xs sm:text-sm font-bold tracking-tight leading-snug line-clamp-1 transition-colors ${
                      isCur
                        ? isDarkMode
                          ? 'text-cyan-300 drop-shadow-[0_1px_3px_rgba(0,240,255,0.4)] font-extrabold'
                          : 'text-blue-700 font-extrabold'
                        : isDarkMode
                        ? 'text-white group-hover:text-cyan-300'
                        : 'text-slate-800 group-hover:text-blue-600'
                    }`}
                    title={srv.title}
                  >
                    {srv.title}
                  </h4>
                </div>

                <span
                  className={`text-[11px] font-bold shrink-0 pr-1 transition-colors ${
                    isCur
                      ? isDarkMode
                        ? 'text-cyan-300 font-black'
                        : 'text-blue-600 font-black'
                      : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  #{idx + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>

        {/* =======================================================================
            MOBILE & TABLET RESPONSIVE VIEW (< 1024px)
            Layout Order:
            C. Main hardware-style interactive design
            D. Pagination and navigation controls
            E. Four capability icon cards (2x2 grid)
            ======================================================================= */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="block lg:hidden w-full max-w-2xl mx-auto flex flex-col items-center py-2 px-3 sm:px-6 select-none"
        >
          {/* C. Mobile Hard Drive View with Edge-to-Edge Vector Chassis ViewBox */}
          <div
            id="mobile-drive-console"
            className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[520/740] mx-auto mb-2 flex items-center justify-center drop-shadow-2xl"
          >
            <UltraDetailedHardDriveSvg prefix="mob" viewBox="460 55 520 740" />

            {/* Mobile Platter (Active Capability Heading & Description Inside Disk) */}
            <div
              className="absolute z-25 flex flex-col items-center justify-center text-center select-text pointer-events-auto rounded-full aspect-square w-[61.5%]"
              style={{
                left: '50%',
                top: '29.73%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div
                key={activeService?.id}
                className="w-[90%] flex flex-col items-center animate-fadeIn px-1 text-center"
              >
                <h3 className="text-[12.5px] sm:text-[13.5px] font-extrabold text-cyan-300 tracking-tight leading-snug text-center max-w-[92%] mb-1.5 line-clamp-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {activeService?.title}
                </h3>
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent mb-1.5 shrink-0" />
                <div className="w-full max-h-[88px] sm:max-h-[102px] overflow-y-auto custom-cockpit-scrollbar px-1 text-center select-text">
                  <p className="text-[10px] sm:text-[10.5px] text-blue-50/95 leading-[1.55] font-normal text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)] select-text">
                    {activeService?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* D. MOBILE PAGINATION & NAVIGATION CONTROLS (Directly beneath main design) */}
          <div className="w-full flex justify-center py-2.5 select-none z-20">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-xl border bg-white/95 border-slate-200/90 shadow-md">
              <button
                onClick={handlePrevService}
                disabled={activeServiceIndex === 0}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  activeServiceIndex === 0
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 cursor-pointer active:scale-95'
                }`}
                title="Previous"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div
                ref={mobileNumbersRef}
                className="flex items-center gap-1 overflow-x-auto max-w-[140px] sm:max-w-[200px] no-scrollbar scroll-smooth py-0.5 px-1"
              >
                {INFRASTRUCTURE_SERVICES.map((srv, idx) => {
                  const isCur = activeServiceIndex === idx;
                  return (
                    <button
                      key={srv.id || idx}
                      ref={isCur ? activeMobileBtnRef : null}
                      onClick={() => handleSelectService(idx)}
                      className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                        isCur
                          ? 'bg-blue-600 text-white shadow-sm scale-105'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                      title={`Capability ${idx + 1}: ${srv.title}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleNextService}
                disabled={activeServiceIndex === INFRASTRUCTURE_SERVICES.length - 1}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  activeServiceIndex === INFRASTRUCTURE_SERVICES.length - 1
                    ? 'opacity-40 cursor-not-allowed bg-slate-200 text-slate-400'
                    : 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer active:scale-95'
                }`}
                title="Next"
              >
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="h-4 w-px bg-slate-200 mx-0.5" />
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 whitespace-nowrap pr-1">
                <span className="text-blue-600 font-extrabold">{activeServiceIndex + 1}</span>/{INFRASTRUCTURE_SERVICES.length}
              </span>
            </div>
          </div>

          {/* E. CAPABILITY ICON LIST (Scrollable 1 to 48, only icon and title) */}
          <div
            ref={mobileListContainerRef}
            className="w-full max-w-md mx-auto mt-1 mb-6 px-1 select-none flex flex-col gap-2 max-h-[260px] sm:max-h-[300px] overflow-y-auto custom-scroll pr-1"
          >
            {INFRASTRUCTURE_SERVICES.map((srv, idx) => {
              const isCur = activeServiceIndex === idx;

              return (
                <div
                  key={`mob-card-${srv.id || idx}`}
                  ref={isCur ? activeMobileItemRef : null}
                  onClick={() => handleSelectService(idx)}
                  className={`group relative flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl cursor-pointer transition-all duration-200 border shrink-0 ${
                    isCur
                      ? isDarkMode
                        ? 'bg-gradient-to-r from-slate-900 via-[#0c1a33] to-slate-900 border-cyan-400 ring-2 ring-cyan-400/50 shadow-md z-10'
                        : 'bg-gradient-to-r from-blue-50/90 via-white to-blue-50/40 border-blue-500 ring-2 ring-blue-500/30 shadow-md z-10'
                      : isDarkMode
                      ? 'bg-slate-900/90 hover:bg-slate-800 border-slate-700/80 shadow-sm'
                      : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-blue-300 shadow-sm'
                  }`}
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-105 ${
                      isCur
                        ? isDarkMode
                          ? 'bg-cyan-950/70 border-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.4)]'
                          : 'bg-blue-100 border-blue-400 shadow-sm'
                        : isDarkMode
                        ? 'bg-slate-800 border-slate-700'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className={isCur ? 'animate-icon-pop flex items-center justify-center' : 'flex items-center justify-center'}>
                      <ServiceIcon
                        iconKey={srv.iconKey}
                        size={19}
                        color={isCur ? (isDarkMode ? '#00f0ff' : '#1d4ed8') : (isDarkMode ? '#38bdf8' : '#475569')}
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 pr-1">
                    <h4
                      className={`text-xs sm:text-[13px] font-bold leading-snug line-clamp-1 transition-colors ${
                        isCur
                          ? isDarkMode
                            ? 'text-cyan-300 font-extrabold drop-shadow-[0_1px_2px_rgba(0,240,255,0.3)]'
                            : 'text-blue-700 font-extrabold'
                          : isDarkMode
                          ? 'text-white group-hover:text-cyan-300'
                          : 'text-slate-800 group-hover:text-blue-600'
                      }`}
                      title={srv.title}
                    >
                      {srv.title}
                    </h4>
                  </div>

                  <span
                    className={`text-[10px] sm:text-[11px] font-bold shrink-0 pr-1 transition-colors ${
                      isCur
                        ? isDarkMode
                          ? 'text-cyan-300 font-black'
                          : 'text-blue-600 font-black'
                        : 'text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    #{idx + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </main>


    </div>
  );
}
