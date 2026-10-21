import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  X,
  Search,
  ChevronRight,
  Boxes,
  ClipboardCheck,
  Users,
  GitPullRequest,
  Send,
  GitBranch,
  Hammer,
  CheckCircle2,
  ShieldCheck,
  Lock,
  Key,
  FileCode2,
  Settings2,
  Server,
  Box,
  Network,
  CheckCheck,
  Split,
  TrendingUp,
  RotateCcw,
  ToggleRight,
  Database,
  Archive,
  Link2,
  Code2,
  Shield,
  Activity,
  BellRing,
  HeartPulse,
  AlertTriangle,
  BookOpen,
  Clock,
  Bot,
  Workflow,
  Scale,
  CopyCheck,
  BookMarked,
  Gauge,
  Sparkles,
  Award,
  RefreshCcw,
  CloudLightning,
  LineChart,
  GraduationCap,
  Target,
  Cpu,
  Layers,
  Rocket,
  Home
} from 'lucide-react';
import { DEVOPS_OVERVIEW, DEVOPS_SERVICES } from './DevOpsAutomationServicesPageData';

/**
 * Icon mapping dictionary for all 45 DevOps capabilities
 */
const ICON_MAP = {
  Boxes,
  ClipboardCheck,
  Users,
  GitPullRequest,
  Send,
  GitBranch,
  Hammer,
  CheckCircle2,
  ShieldCheck,
  Lock,
  Key,
  FileCode2,
  Settings2,
  Server,
  Box,
  Network,
  CheckCheck,
  Split,
  TrendingUp,
  RotateCcw,
  ToggleRight,
  Database,
  Archive,
  Link2,
  Code2,
  Shield,
  Activity,
  BellRing,
  HeartPulse,
  AlertTriangle,
  BookOpen,
  Clock,
  Bot,
  Workflow,
  Scale,
  CopyCheck,
  BookMarked,
  Gauge,
  Sparkles,
  Award,
  RefreshCcw,
  CloudLightning,
  LineChart,
  GraduationCap,
  Target,
  Cpu,
  Layers,
  Rocket,
  // Fallbacks / aliases
  workflow: Workflow,
  'git-branch': GitBranch,
  'refresh-cw': RefreshCcw,
  rocket: Rocket,
  package: Box,
  server: Server,
  'check-circle': CheckCircle2,
  settings: Settings2,
  shield: Shield,
};

/**
 * Universal ServiceIcon component for all 45 DevOps capabilities
 */
export const ServiceIcon = ({ iconKey, size = 24, color = '#2563eb', className = '' }) => {
  const IconComponent = ICON_MAP[iconKey] || Workflow;
  return <IconComponent size={size} color={color} className={className} strokeWidth={2} />;
};

/**
 * DevOpsAutomationServicesPage.jsx - True 3D Rocket Edition with 45 Enterprise Capabilities
 * 
 * 100% Pure SVG & CSS implementation with:
 * - Content directly synchronized from IBCS IT Services Card 07 Word Document (45 sections)
 * - Heading-specific vector icons for every single capability
 * - Interactive Sliding Orbital Rails on rocket sides that glide smoothly on Next/Prev
 * - Bottom Navigation Controls positioned cleanly below the rocket (unobstructed fuselage)
 * - 3D Inset Cockpit Visor displaying active section title, icon, and Word doc content
 */

// Pre-configured character falling physics for "DevOps & Automation Services"
// Each letter drops from above with unique randomized delay, drop distance, and rotation
const HEADING_WORDS = [
  {
    word: 'DevOps',
    letters: [
      { char: 'D', delay: 0.28, dropY: -110, rot: -12 },
      { char: 'e', delay: 0.08, dropY: -85, rot: 8 },
      { char: 'v', delay: 0.52, dropY: -120, rot: -6 },
      { char: 'O', delay: 0.18, dropY: -95, rot: 14 },
      { char: 'p', delay: 0.44, dropY: -105, rot: -10 },
      { char: 's', delay: 0.12, dropY: -90, rot: 6 },
    ],
  },
  {
    word: '&',
    letters: [
      { char: '&', delay: 0.65, dropY: -130, rot: -15 },
    ],
  },
  {
    word: 'Automation',
    letters: [
      { char: 'A', delay: 0.05, dropY: -80, rot: 11 },
      { char: 'u', delay: 0.38, dropY: -115, rot: -8 },
      { char: 't', delay: 0.22, dropY: -90, rot: 10 },
      { char: 'o', delay: 0.58, dropY: -125, rot: -12 },
      { char: 'm', delay: 0.14, dropY: -100, rot: 7 },
      { char: 'a', delay: 0.48, dropY: -85, rot: -9 },
      { char: 't', delay: 0.16, dropY: -110, rot: 15 },
      { char: 'i', delay: 0.34, dropY: -95, rot: -7 },
      { char: 'o', delay: 0.70, dropY: -130, rot: 11 },
      { char: 'n', delay: 0.10, dropY: -85, rot: -13 },
    ],
  },
];

// Shared SVG Definitions (All Gradients, 3D Shaders & Filters)
function GlobalRocketDefsSvg() {
  return (
    <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <defs>
        {/* Neon blue glow */}
        <filter id="neon-glow-blue" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur1" />
          <feGaussianBlur stdDeviation="8" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Thruster flame glow */}
        <filter id="flame-glow-light" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" result="blurA" />
          <feGaussianBlur stdDeviation="16" result="blurB" />
          <feMerge>
            <feMergeNode in="blurB" />
            <feMergeNode in="blurA" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="cloud-blur-light" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="12" />
        </filter>

        {/* 3D Shadows */}
        <filter id="rocket-3d-ambient-shadow" x="-30%" y="-10%" width="160%" height="140%">
          <feDropShadow dx="0" dy="25" stdDeviation="28" floodColor="rgba(15, 23, 42, 0.38)" />
        </filter>

        <filter id="booster-shadow-left" x="-40%" y="-20%" width="180%" height="150%">
          <feDropShadow dx="-12" dy="10" stdDeviation="12" floodColor="rgba(15, 23, 42, 0.45)" />
        </filter>

        <filter id="booster-shadow-right" x="-40%" y="-20%" width="180%" height="150%">
          <feDropShadow dx="12" dy="10" stdDeviation="12" floodColor="rgba(15, 23, 42, 0.45)" />
        </filter>

        <filter id="wing-shadow-3d" x="-30%" y="-20%" width="160%" height="160%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="rgba(15, 23, 42, 0.38)" />
        </filter>

        {/* 3D Volumetric Gradients */}
        <radialGradient id="earth-horizon-light" cx="50%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.85" />
          <stop offset="35%" stopColor="#7dd3fc" stopOpacity="0.7" />
          <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
        </radialGradient>

        <linearGradient id="rocket-3d-metallic" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4a6280" />
          <stop offset="6%" stopColor="#7593b8" />
          <stop offset="14%" stopColor="#c5daf2" />
          <stop offset="22%" stopColor="#00f0ff" stopOpacity="0.85" />
          <stop offset="30%" stopColor="#ffffff" />
          <stop offset="46%" stopColor="#f0f6fc" />
          <stop offset="70%" stopColor="#cbdcf0" />
          <stop offset="85%" stopColor="#4f6a8e" />
          <stop offset="94%" stopColor="#38bdf8" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#1e324a" />
        </linearGradient>

        <radialGradient id="nose-3d-dome" cx="48%" cy="14%" r="48%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="25%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#dce8f7" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1e293b" stopOpacity="0.4" />
        </radialGradient>

        <linearGradient id="visor-3d-outer-bevel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="28%" stopColor="#bfdbfe" />
          <stop offset="55%" stopColor="#0284c7" />
          <stop offset="80%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#07132e" />
        </linearGradient>

        <linearGradient id="visor-3d-inset-trough" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#020717" stopOpacity="0.95" />
          <stop offset="25%" stopColor="#061638" stopOpacity="0.5" />
          <stop offset="80%" stopColor="#061638" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#020717" stopOpacity="0.9" />
        </linearGradient>

        <radialGradient id="visor-glass-convex-lens" cx="50%" cy="26%" r="68%">
          <stop offset="0%" stopColor="#0e347d" />
          <stop offset="35%" stopColor="#081e4b" />
          <stop offset="70%" stopColor="#040f26" />
          <stop offset="100%" stopColor="#010512" />
        </radialGradient>

        <linearGradient id="booster-3d-cylindrical" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="18%" stopColor="#475569" />
          <stop offset="38%" stopColor="#cbd5e1" />
          <stop offset="55%" stopColor="#ffffff" />
          <stop offset="72%" stopColor="#94a3b8" />
          <stop offset="88%" stopColor="#475569" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        <radialGradient id="booster-cap-3d" cx="45%" cy="25%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#cbd5e1" />
          <stop offset="85%" stopColor="#475569" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>

        <linearGradient id="wing-3d-bevel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#e2ecf8" />
          <stop offset="70%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>

        <linearGradient id="flame-core-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#fffbeb" />
          <stop offset="60%" stopColor="#f59e0b" />
          <stop offset="85%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="flame-mid-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="30%" stopColor="#f97316" />
          <stop offset="70%" stopColor="#ef4444" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7c2d12" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="flame-corona-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="45%" stopColor="#0284c7" stopOpacity="0.6" />
          <stop offset="80%" stopColor="#2563eb" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="cloud-warm-light" cx="50%" cy="25%" r="65%">
          <stop offset="0%" stopColor="#fff7ed" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#ffedd5" stopOpacity="0.85" />
          <stop offset="75%" stopColor="#e2e8f0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="cloud-ambient-light" cx="45%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="40%" stopColor="#f1f5f9" stopOpacity="0.75" />
          <stop offset="80%" stopColor="#cbd5e1" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#94a3b8" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="pad-base-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0284c7" stopOpacity="0.6" />
          <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.3" />
          <stop offset="80%" stopColor="#bae6fd" stopOpacity="0.1" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        <linearGradient id="orbital-track-blue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="35%" stopColor="#2563eb" />
          <stop offset="70%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 100% Vector 3D Rocket Spacecraft (Shared by Desktop & Mobile)
function RocketSpacecraftSvg({ isLanding = false }) {
  return (
    <g className={isLanding ? 'animate-rocketTouchdown' : ''} style={{ transformOrigin: '720px 880px' }}>
      {/* LAYER 3: LAUNCH SMOKE BILLOWS (BACKGROUND LAYER) */}
      <g id="smoke-back-layer" opacity="0.88">
        <ellipse cx="520" cy="820" rx="130" ry="75" fill="url(#cloud-ambient-light)" filter="url(#cloud-blur-light)" />
        <ellipse cx="610" cy="840" rx="110" ry="65" fill="url(#cloud-warm-light)" filter="url(#cloud-blur-light)" />
        <ellipse cx="920" cy="820" rx="130" ry="75" fill="url(#cloud-ambient-light)" filter="url(#cloud-blur-light)" />
        <ellipse cx="830" cy="840" rx="110" ry="65" fill="url(#cloud-warm-light)" filter="url(#cloud-blur-light)" />
        <ellipse cx="420" cy="840" rx="110" ry="60" fill="url(#cloud-ambient-light)" filter="url(#cloud-blur-light)" />
        <ellipse cx="1020" cy="840" rx="110" ry="60" fill="url(#cloud-ambient-light)" filter="url(#cloud-blur-light)" />
      </g>

      {/* LAYER 4: ANIMATED THRUSTER EXHAUST FLAMES */}
      <g id="thruster-exhaust">
        <path
          d="M 665 715 C 635 770, 600 840, 665 915 C 705 955, 735 955, 775 915 C 840 840, 805 770, 775 715 Z"
          fill="url(#flame-corona-grad)"
          filter="url(#flame-glow-light)"
          className="animate-pulse"
        />
        <path
          d="M 678 718 C 660 765, 640 830, 685 890 C 708 920, 732 920, 755 890 C 800 830, 780 765, 762 718 Z"
          fill="url(#flame-mid-grad)"
          className="animate-pulse"
          style={{ animationDuration: '1.4s' }}
        />
        <path
          d="M 692 720 C 682 760, 670 815, 708 865 C 716 875, 724 875, 732 865 C 770 815, 758 760, 748 720 Z"
          fill="url(#flame-core-grad)"
          filter="url(#flame-glow-light)"
          className="animate-pulse"
          style={{ animationDuration: '0.8s' }}
        />
        <polygon
          points="705,720 720,810 735,720"
          fill="#ffffff"
          className="animate-ping"
          style={{ animationDuration: '1.8s', transformOrigin: '720px 730px' }}
        />
      </g>

      {/* LAYER 5: LAUNCH SMOKE BILLOWS (FOREGROUND WRAP) */}
      <g id="smoke-front-layer">
        <circle cx="630" cy="860" r="90" fill="url(#cloud-warm-light)" filter="url(#cloud-blur-light)" opacity="0.95" />
        <circle cx="810" cy="860" r="90" fill="url(#cloud-warm-light)" filter="url(#cloud-blur-light)" opacity="0.95" />
        <circle cx="720" cy="875" r="95" fill="url(#cloud-ambient-light)" filter="url(#cloud-blur-light)" opacity="0.95" />
        <circle cx="530" cy="860" r="75" fill="url(#cloud-ambient-light)" filter="url(#cloud-blur-light)" opacity="0.85" />
        <circle cx="910" cy="860" r="75" fill="url(#cloud-ambient-light)" filter="url(#cloud-blur-light)" opacity="0.85" />
      </g>

      {/* LAYER 6: 3D VOLUMETRIC ROCKET SPACECRAFT CHASSIS */}
      <g id="rocket-fuselage" filter="url(#rocket-3d-ambient-shadow)">
        {/* Left Wing */}
        <g id="wing-left" filter="url(#wing-shadow-3d)">
          <path
            d="M 588 535 L 520 635 C 495 680, 480 735, 524 772 C 538 782, 558 777, 570 757 L 620 655 Z"
            fill="#0f172a"
          />
          <path
            d="M 590 540 L 525 638 C 505 678, 492 730, 530 762 C 542 772, 556 767, 565 749 L 618 650 Z"
            fill="url(#wing-3d-bevel)"
          />
          <path
            d="M 522 632 C 495 680, 482 735, 525 770 C 536 779, 552 774, 563 757"
            stroke="#00f0ff"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#neon-glow-blue)"
          />
        </g>

        {/* Right Wing */}
        <g id="wing-right" filter="url(#wing-shadow-3d)">
          <path
            d="M 852 535 L 920 635 C 945 680, 960 735, 916 772 C 902 782, 882 777, 870 757 L 820 655 Z"
            fill="#0f172a"
          />
          <path
            d="M 850 540 L 915 638 C 935 678, 948 730, 910 762 C 898 772, 884 767, 875 749 L 822 650 Z"
            fill="url(#wing-3d-bevel)"
          />
          <path
            d="M 918 632 C 945 680, 958 735, 915 770 C 904 779, 888 774, 877 757"
            stroke="#00f0ff"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#neon-glow-blue)"
          />
        </g>

        {/* Left Booster Pod */}
        <g id="booster-left" filter="url(#booster-shadow-left)">
          <path
            d="M 563 390 C 561 345, 574 332, 586 332 C 598 332, 606 348, 608 390 L 610 515 C 610 555, 598 568, 586 568 C 574 568, 563 555, 563 515 Z"
            fill="url(#booster-3d-cylindrical)"
            stroke="#1e293b"
            strokeWidth="1.5"
          />
          <ellipse cx="586" cy="336" rx="11" ry="6" fill="url(#booster-cap-3d)" />
          <ellipse cx="586" cy="565" rx="11" ry="5" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <rect x="581" y="390" width="7" height="110" rx="3.5" fill="#00f0ff" filter="url(#neon-glow-blue)" />
        </g>

        {/* Right Booster Pod */}
        <g id="booster-right" filter="url(#booster-shadow-right)">
          <path
            d="M 877 390 C 879 345, 866 332, 854 332 C 842 332, 834 348, 832 390 L 830 515 C 830 555, 842 568, 854 568 C 866 568, 877 555, 877 515 Z"
            fill="url(#booster-3d-cylindrical)"
            stroke="#1e293b"
            strokeWidth="1.5"
          />
          <ellipse cx="854" cy="336" rx="11" ry="6" fill="url(#booster-cap-3d)" />
          <ellipse cx="854" cy="565" rx="11" ry="5" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <rect x="852" y="390" width="7" height="110" rx="3.5" fill="#00f0ff" filter="url(#neon-glow-blue)" />
        </g>

        {/* Engine Nozzle & Titanium Gimbal */}
        <g id="nozzle-gimbal">
          <path
            d="M 655 700 L 670 726 C 680 738, 760 738, 770 726 L 785 700 Z"
            fill="#1e293b"
            stroke="#0f172a"
            strokeWidth="2"
          />
          <ellipse cx="720" cy="704" rx="66" ry="9.5" fill="#0f172a" />
          <ellipse cx="720" cy="714" rx="62" ry="8.5" fill="#334155" />
          <ellipse cx="720" cy="722" rx="58" ry="8" fill="#f97316" />
          <ellipse
            cx="720"
            cy="725"
            rx="60"
            ry="7"
            stroke="#00f0ff"
            strokeWidth="4"
            fill="none"
            filter="url(#neon-glow-blue)"
          />
        </g>

        {/* Main Fuselage Chassis */}
        <path
          d="M 720 28
             C 768 85, 822 185, 846 320
             C 858 408, 858 545, 840 648
             C 828 692, 800 715, 778 718
             L 662 718
             C 640 715, 612 692, 600 648
             C 582 545, 582 408, 594 320
             C 618 185, 672 85, 720 28 Z"
          fill="url(#rocket-3d-metallic)"
          stroke="#334155"
          strokeWidth="2"
        />

        {/* Nose Cone Dome Highlight */}
        <path
          d="M 720 28
             C 765 85, 818 185, 840 320
             L 600 320
             C 622 185, 675 85, 720 28 Z"
          fill="url(#nose-3d-dome)"
          opacity="0.85"
        />

        {/* Stamped Panel Seams */}
        <path
          d="M 662 135 C 695 152, 745 152, 778 135"
          stroke="#ffffff"
          strokeWidth="1.5"
          opacity="0.8"
        />
        <path
          d="M 662 136 C 695 153, 745 153, 778 136"
          stroke="#334155"
          strokeWidth="1.2"
          opacity="0.6"
        />

        {/* Specular Spine Streak */}
        <path
          d="M 716 35
             C 724 92, 732 190, 735 322
             C 738 408, 738 545, 735 642
             L 725 642
             C 728 545, 728 408, 725 322
             C 722 190, 714 92, 716 35 Z"
          fill="#ffffff"
          opacity="0.8"
          filter="url(#neon-glow-blue)"
        />

        {/* Nose Beacon Sphere */}
        <circle cx="720" cy="30" r="7" fill="#ffffff" filter="url(#neon-glow-blue)" />
        <circle cx="720" cy="30" r="4" fill="#00f0ff" />

        {/* Side Cyan Rim Lights */}
        <path
          d="M 602 325 C 593 410, 593 545, 607 638"
          stroke="#00f0ff"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
          filter="url(#neon-glow-blue)"
        />
        <path
          d="M 838 325 C 847 410, 847 545, 833 638"
          stroke="#00f0ff"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
          filter="url(#neon-glow-blue)"
        />

        {/* Cockpit Visor Housing Frame */}
        <rect
          x="606"
          y="184"
          width="228"
          height="428"
          rx="114"
          fill="url(#visor-3d-outer-bevel)"
          stroke="#0f1d3d"
          strokeWidth="2.5"
        />
        <rect
          x="611"
          y="189"
          width="218"
          height="418"
          rx="109"
          fill="url(#visor-3d-inset-trough)"
        />
        <rect
          x="613"
          y="191"
          width="214"
          height="414"
          rx="107"
          stroke="#00f0ff"
          strokeWidth="3.5"
          fill="none"
          filter="url(#neon-glow-blue)"
        />
        <rect
          x="617"
          y="195"
          width="206"
          height="406"
          rx="103"
          fill="url(#visor-glass-convex-lens)"
        />
        <path
          d="M 630 235
             C 645 208, 680 198, 720 198
             C 760 198, 795 208, 810 235
             C 785 224, 755 218, 720 218
             C 685 218, 655 224, 630 235 Z"
          fill="#ffffff"
          opacity="0.45"
        />
      </g>
    </g>
  );
}

// Cockpit Inner Content (Service Details or Overview Card)
function CockpitContent({ activeService, onStartTour }) {
  if (activeService) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-between text-center animate-fadeIn text-white px-0.5 py-0.5 overflow-hidden">
        <div
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-0.5 shadow-lg bg-blue-600/30 border border-cyan-400 flex-shrink-0"
          style={{
            boxShadow: '0 0 14px rgba(2, 132, 199, 0.45)',
          }}
        >
          <ServiceIcon iconKey={activeService.iconKey} size={20} color="#38bdf8" />
        </div>

        <h2 className="text-[11px] sm:text-[12.5px] font-extrabold text-white leading-tight px-0.5 text-center mb-0.5 tracking-tight flex-shrink-0">
          {activeService.title}
        </h2>

        {/* Scrollable Word Document Description (Strictly confined inside visor) */}
        <div className="w-full flex-1 min-h-0 overflow-y-auto pl-1 pr-1.5 custom-cockpit-scrollbar pb-1">
          <p className="text-[9px] sm:text-[10px] text-blue-100/90 leading-relaxed font-normal text-center">
            {activeService.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-between text-white py-1">
      <div className="w-9 h-9 rounded-full bg-blue-950/70 border border-cyan-400/60 flex items-center justify-center shadow-[0_0_15px_rgba(2,132,199,0.4)]">
        <ServiceIcon iconKey="Rocket" size={18} color="#38bdf8" />
      </div>

      <div className="my-auto">
        <span className="text-[9px] font-bold tracking-widest text-cyan-300 uppercase">
          {DEVOPS_OVERVIEW.company}
        </span>
        <h2 className="text-[13px] sm:text-[15px] font-extrabold text-white leading-snug tracking-tight px-1 mt-0.5">
          DevOps &amp;<br />Automation<br />Services
        </h2>
        <p className="text-[9px] sm:text-[9.5px] text-blue-100 leading-relaxed max-w-[185px] px-1 font-normal opacity-90 mt-1">
          {DEVOPS_OVERVIEW.intro}
        </p>
      </div>

      <div className="w-full pt-1">
        <button
          onClick={onStartTour}
          className="w-full py-1.5 sm:py-2 px-3 rounded-full text-[10px] sm:text-[11px] font-bold text-white bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-[0_4px_18px_rgba(2,132,199,0.55)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>Start Tour (45 Services)</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}

export default function DevOpsAutomationServicesPage({ onClose, onHome }) {
  const [animHeadingKey, setAnimHeadingKey] = useState(0);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0); // Start with Service 1
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLanding, setIsLanding] = useState(false);

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

  const landingTimerRef = useRef(null);
  const touchStartX = useRef(null);

  const triggerLanding = useCallback(() => {
    setIsLanding(true);
    if (landingTimerRef.current) clearTimeout(landingTimerRef.current);
    landingTimerRef.current = setTimeout(() => {
      setIsLanding(false);
    }, 750);
  }, []);

  const activeService = activeServiceIndex !== null ? DEVOPS_SERVICES[activeServiceIndex] : null;

  const activeIdx = activeServiceIndex !== null ? activeServiceIndex : 0;
  const prevIndex = (activeIdx - 1 + DEVOPS_SERVICES.length) % DEVOPS_SERVICES.length;
  const nextIndex = (activeIdx + 1) % DEVOPS_SERVICES.length;
  const prevService = DEVOPS_SERVICES[prevIndex];
  const nextService = DEVOPS_SERVICES[nextIndex];

  const leftServices = useMemo(() => DEVOPS_SERVICES.filter((s) => s.side === 'left'), []);
  const rightServices = useMemo(() => DEVOPS_SERVICES.filter((s) => s.side === 'right'), []);

  const handleNext = useCallback(() => {
    triggerLanding();
    setActiveServiceIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % DEVOPS_SERVICES.length;
    });
  }, [triggerLanding]);

  const handlePrev = useCallback(() => {
    triggerLanding();
    setActiveServiceIndex((prev) => {
      if (prev === null) return DEVOPS_SERVICES.length - 1;
      return (prev - 1 + DEVOPS_SERVICES.length) % DEVOPS_SERVICES.length;
    });
  }, [triggerLanding]);

  const handleSelectService = (index) => {
    triggerLanding();
    setActiveServiceIndex(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 45) {
      handlePrev();
    } else if (diff < -45) {
      handleNext();
    }
    touchStartX.current = null;
  };

  const handleResetOverview = () => {
    setActiveServiceIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      else if (e.key === 'ArrowLeft') handlePrev();
      else if (e.key === 'Escape') {
        if (isModalOpen) setIsModalOpen(false);
        else setActiveServiceIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isModalOpen]);

  // Unified brand icon colors
  const ICON_BRAND_COLOR = "#2563eb"; // Royal Blue
  const ICON_ACCENT_COLOR = "#0284c7"; // Tech Cyan

  // Center and Radii for true 360-degree circular/elliptical orbital ring
  const ORBIT_CX = 720;
  const ORBIT_CY = 420;
  const ORBIT_RX = 410; // Left apex: 310px (21.5%), Right apex: 1130px (78.5%)
  const ORBIT_RY = 315; // Top: 105px (11.4%), Bottom: 735px (79.9%)

  // Circular offset helper for 45 items in infinite loop
  const getCircularOffset = useCallback((itemIdx, activeIdx, total) => {
    let diff = itemIdx - activeIdx;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
    return diff;
  }, []);

  // Calculate true circular orbital coordinates:
  // Active item sits at Left Apex (180 degrees).
  const getOrbitCoords = useCallback((relativeStep) => {
    const angleDeg = 180 + relativeStep * 26; // 26° step distributes ~14 capabilities along orbit
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = ORBIT_CX + ORBIT_RX * Math.cos(angleRad);
    const y = ORBIT_CY - ORBIT_RY * Math.sin(angleRad);
    return { x, y, angleDeg };
  }, []);

  // Filtered services for the catalog modal
  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return DEVOPS_SERVICES;
    const q = searchQuery.toLowerCase();
    return DEVOPS_SERVICES.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        String(s.id).includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="relative w-full min-h-screen bg-[#f0f7ff] text-slate-900 font-sans overflow-x-hidden flex flex-col items-center justify-start pb-28 pt-2 selection:bg-blue-600 selection:text-white">
      {/* Cockpit Custom Visor Scroller Styles */}
      <style>{`
        .custom-cockpit-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(56, 189, 248, 0.75) rgba(3, 14, 34, 0.45);
        }
        .custom-cockpit-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-cockpit-scrollbar::-webkit-scrollbar-track {
          background: rgba(3, 14, 34, 0.45);
          border-radius: 9999px;
          margin: 4px 0;
          border: 1px solid rgba(56, 189, 248, 0.15);
        }
        .custom-cockpit-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #38bdf8 0%, #0284c7 100%);
          border-radius: 9999px;
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
        .custom-cockpit-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #00f0ff 0%, #38bdf8 100%);
          box-shadow: 0 0 14px rgba(0, 240, 255, 0.95);
        }
        .custom-cockpit-scrollbar::-webkit-scrollbar-corner {
          background: transparent;
        }
        .custom-cockpit-scrollbar::-webkit-scrollbar-button {
          display: none;
          width: 0;
          height: 0;
        }
      `}</style>

      {/* =========================================================================
          BACKGROUND LAYER: LIGHT THEME ATMOSPHERE & STRATOSPHERE GLOW
          ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft luminous light sky gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 18%, #ffffff 0%, #f1f8ff 45%, #e1effe 80%, #cce4fc 100%)
            `,
          }}
        />

        {/* Ambient Cyan & Blue Light Blooms */}
        <div
          className="absolute top-1/4 -left-32 w-[550px] h-[550px] rounded-full blur-[130px] opacity-35"
          style={{ background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/3 -right-32 w-[550px] h-[550px] rounded-full blur-[130px] opacity-30"
          style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-10 left-1/3 w-[600px] h-[350px] rounded-full blur-[110px] opacity-25"
          style={{ background: 'radial-gradient(circle, #0284c7 0%, transparent 70%)' }}
        />

        {/* Subtle high-tech geometric radial grid */}
        <svg className="absolute inset-0 w-full h-full opacity-15" aria-hidden="true">
          <defs>
            <pattern id="light-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#2563eb" strokeWidth="0.6" strokeDasharray="2 4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#light-grid)" />
        </svg>
      </div>

      {/* Global SVG Definitions (Shaders & Filters) */}
      <GlobalRocketDefsSvg />

      {/* =========================================================================
          MAIN PANORAMIC VIEW (1440 x 920 INTEGRATED SVG STAGE - EXACT PAGE CENTER)
          ========================================================================= */}
      <main className="relative z-10 w-full max-w-[1440px] mx-auto flex-1 flex flex-col items-center justify-start px-2 py-3">

        {/* Top Header Navigation buttons */}
        <div className="w-full max-w-4xl mx-auto pt-2 pb-2 px-4 flex items-center justify-start gap-3 z-30">
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

        {/* =====================================================================
            TOP HEADER: TITLE & DESCRIPTION (ABOVE ROCKET)
            ===================================================================== */}
        <header className="w-full max-w-4xl mx-auto pt-2 pb-2 px-4 flex flex-col items-center text-center select-none z-30">
          <h1
            key={animHeadingKey}
            onClick={() => setAnimHeadingKey((k) => k + 1)}
            title="Click to replay falling text animation"
            className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight text-[#0a2540] leading-tight mb-2 select-none flex flex-wrap justify-center items-center gap-x-2.5 sm:gap-x-3.5 cursor-pointer"
          >
            {HEADING_WORDS.map((w, wIdx) => (
              <span key={wIdx} className="inline-block whitespace-nowrap">
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
            IBCS DevOps &amp; Automation focuses on streamlining development workflows, accelerating deployment cycles, and automating operational tasks. Through continuous integration, delivery pipelines, and infrastructure automation, we enable teams to release software faster and more reliably.
          </p>
        </header>

        {/* DESKTOP INTEGRATED 1440 x 920 STAGE (PERFECTLY CENTERED WITH ASPECT RATIO) */}
        <div className="hidden lg:relative lg:block w-full max-w-[1440px] aspect-[1440/920] mx-auto select-none">

          {/* MASTER SVG SCENE: SKY, EARTH HORIZON, LAUNCH PAD, TRACKS */}
          <svg
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
            viewBox="0 0 1440 920"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* =================== FILTERS =================== */}
              <filter id="neon-glow-blue" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="blur1" />
                <feGaussianBlur stdDeviation="8" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="flame-glow-light" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="7" result="blurA" />
                <feGaussianBlur stdDeviation="16" result="blurB" />
                <feMerge>
                  <feMergeNode in="blurB" />
                  <feMergeNode in="blurA" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="cloud-blur-light" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="12" />
              </filter>

              {/* 3D Shadows for Physical Depth */}
              <filter id="rocket-3d-ambient-shadow" x="-30%" y="-10%" width="160%" height="140%">
                <feDropShadow dx="0" dy="25" stdDeviation="28" floodColor="rgba(15, 23, 42, 0.38)" />
              </filter>

              <filter id="booster-shadow-left" x="-40%" y="-20%" width="180%" height="150%">
                <feDropShadow dx="-12" dy="10" stdDeviation="12" floodColor="rgba(15, 23, 42, 0.45)" />
              </filter>

              <filter id="booster-shadow-right" x="-40%" y="-20%" width="180%" height="150%">
                <feDropShadow dx="12" dy="10" stdDeviation="12" floodColor="rgba(15, 23, 42, 0.45)" />
              </filter>

              <filter id="wing-shadow-3d" x="-30%" y="-20%" width="160%" height="160%">
                <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="rgba(15, 23, 42, 0.38)" />
              </filter>

              {/* =================== 3D VOLUMETRIC GRADIENTS =================== */}
              {/* Stratosphere Earth Curve Gradient */}
              <radialGradient id="earth-horizon-light" cx="50%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.85" />
                <stop offset="35%" stopColor="#7dd3fc" stopOpacity="0.7" />
                <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
              </radialGradient>

              {/* TRUE 3D CYLINDRICAL METALLIC HULL SHADER */}
              <linearGradient id="rocket-3d-metallic" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4a6280" />
                <stop offset="6%" stopColor="#7593b8" />
                <stop offset="14%" stopColor="#c5daf2" />
                <stop offset="22%" stopColor="#00f0ff" stopOpacity="0.85" />
                <stop offset="30%" stopColor="#ffffff" />
                <stop offset="46%" stopColor="#f0f6fc" />
                <stop offset="70%" stopColor="#cbdcf0" />
                <stop offset="85%" stopColor="#4f6a8e" />
                <stop offset="94%" stopColor="#38bdf8" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#1e324a" />
              </linearGradient>

              {/* Spherical 3D Dome Highlight on Nose Apex */}
              <radialGradient id="nose-3d-dome" cx="48%" cy="14%" r="48%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="25%" stopColor="#ffffff" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#dce8f7" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#1e293b" stopOpacity="0.4" />
              </radialGradient>

              {/* 3D Chamfered Metallic Frame Bezel around Cockpit */}
              <linearGradient id="visor-3d-outer-bevel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="28%" stopColor="#bfdbfe" />
                <stop offset="55%" stopColor="#0284c7" />
                <stop offset="80%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#07132e" />
              </linearGradient>

              {/* Recessed Inset Shadow Groove inside Cockpit Frame */}
              <linearGradient id="visor-3d-inset-trough" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#020717" stopOpacity="0.95" />
                <stop offset="25%" stopColor="#061638" stopOpacity="0.5" />
                <stop offset="80%" stopColor="#061638" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#020717" stopOpacity="0.9" />
              </linearGradient>

              {/* 3D Convex Bubble Glass Canopy */}
              <radialGradient id="visor-glass-convex-lens" cx="50%" cy="26%" r="68%">
                <stop offset="0%" stopColor="#0e347d" />
                <stop offset="35%" stopColor="#081e4b" />
                <stop offset="70%" stopColor="#040f26" />
                <stop offset="100%" stopColor="#010512" />
              </radialGradient>

              {/* 3D Cylindrical Booster Nacelle Gradient */}
              <linearGradient id="booster-3d-cylindrical" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="18%" stopColor="#475569" />
                <stop offset="38%" stopColor="#cbd5e1" />
                <stop offset="55%" stopColor="#ffffff" />
                <stop offset="72%" stopColor="#94a3b8" />
                <stop offset="88%" stopColor="#475569" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>

              {/* Spherical 3D Dome Cap for Booster Nacelle */}
              <radialGradient id="booster-cap-3d" cx="45%" cy="25%" r="60%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="45%" stopColor="#cbd5e1" />
                <stop offset="85%" stopColor="#475569" />
                <stop offset="100%" stopColor="#0f172a" />
              </radialGradient>

              {/* 3D Wing Aerofoil Bevel Gradient */}
              <linearGradient id="wing-3d-bevel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#e2ecf8" />
                <stop offset="70%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>

              {/* Flame Gradients */}
              <linearGradient id="flame-core-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="25%" stopColor="#fffbeb" />
                <stop offset="60%" stopColor="#f59e0b" />
                <stop offset="85%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="flame-mid-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="30%" stopColor="#f97316" />
                <stop offset="70%" stopColor="#ef4444" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7c2d12" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="flame-corona-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="45%" stopColor="#0284c7" stopOpacity="0.6" />
                <stop offset="80%" stopColor="#2563eb" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
              </linearGradient>

              {/* Cloud Volumetric Radial Gradients */}
              <radialGradient id="cloud-warm-light" cx="50%" cy="25%" r="65%">
                <stop offset="0%" stopColor="#fff7ed" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#ffedd5" stopOpacity="0.85" />
                <stop offset="75%" stopColor="#e2e8f0" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
              </radialGradient>

              <radialGradient id="cloud-ambient-light" cx="45%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="40%" stopColor="#f1f5f9" stopOpacity="0.75" />
                <stop offset="80%" stopColor="#cbd5e1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0" />
              </radialGradient>

              {/* Launch Pad Base Glow */}
              <radialGradient id="pad-base-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.6" />
                <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.3" />
                <stop offset="80%" stopColor="#bae6fd" stopOpacity="0.1" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>

              {/* Unified Blue/Cyan Orbital Track Gradient */}
              <linearGradient id="orbital-track-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="35%" stopColor="#2563eb" />
                <stop offset="70%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>

            {/* -------------------------------------------------------------
                LAYER 1: STRATOSPHERE / LOWER ATMOSPHERE BASE HAZE
                ------------------------------------------------------------- */}
            <g id="earth-horizon" opacity="0.4">
              <path
                d="M -100 860 Q 720 800 1540 860 L 1540 1000 L -100 1000 Z"
                fill="url(#earth-horizon-light)"
              />
            </g>

            {/* -------------------------------------------------------------
                LAYER 2: LAUNCH PLATFORM PORTAL RING & BASE HALO
                ------------------------------------------------------------- */}
            <g id="launch-platform">
              <ellipse cx="720" cy="880" rx="360" ry="38" fill="url(#pad-base-glow)" />
              <ellipse
                cx="720"
                cy="880"
                rx="340"
                ry="34"
                stroke="#0284c7"
                strokeWidth="3.5"
                strokeOpacity="0.75"
                filter="url(#neon-glow-blue)"
              />
              <ellipse
                cx="720"
                cy="880"
                rx="270"
                ry="26"
                stroke="#2563eb"
                strokeWidth="2"
                strokeOpacity="0.8"
                strokeDasharray="8 6"
              />
              <ellipse
                cx="720"
                cy="880"
                rx="180"
                ry="18"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeOpacity="0.95"
              />
            </g>

            {/* 3D VECTOR ROCKET SPACECRAFT CHASSIS */}
            <RocketSpacecraftSvg isLanding={isLanding} />

          </svg>

          {/* -------------------------------------------------------------
              INTERACTIVE COCKPIT DISPLAY OVERLAY (WORD DOCUMENT CONTENT)
              ------------------------------------------------------------- */}
          {/* Cockpit Visor Content Box (Locked to 50% Centerline of Rocket) */}
          <div
            className={`absolute z-20 flex flex-col items-center justify-between text-center select-text pointer-events-auto transition-all duration-700 ${
              isLanding ? 'animate-cockpitTouchdown' : ''
            }`}
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              top: '21.95%',
              width: '13.61%',
              minWidth: '188px',
              maxWidth: '205px',
              height: '39.13%',
              padding: '16px 10px',
            }}
          >
            <CockpitContent activeService={activeService} onStartTour={() => handleSelectService(0)} />
          </div>

          {/* -------------------------------------------------------------
              BOTTOM NAVIGATION DOCK (PREV & NEXT POSITIONED BELOW ROCKET)
              ------------------------------------------------------------- */}
          {/* -------------------------------------------------------------
              BOTTOM NAVIGATION DOCK (MINIMAL ARROWS + CENTER DOTS)
              ------------------------------------------------------------- */}
          <div className="absolute z-35 bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3.5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-blue-200/80 shadow-[0_10px_35px_rgba(37,99,235,0.22)] select-none">
            {/* Prev Button (Symbol Only) */}
            <button
              onClick={handlePrev}
              title="Previous Capability (Left Arrow Key)"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-all duration-200 shadow-sm hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Center Carousel Pagination Dots */}
            <div className="flex items-center gap-1.5 px-1.5">
              {[-3, -2, -1, 0, 1, 2, 3].map((offset) => {
                const total = DEVOPS_SERVICES.length;
                const activeIdx = activeServiceIndex !== null ? activeServiceIndex : 0;
                const targetIdx = (activeIdx + offset + total) % total;
                const isCurrent = offset === 0;

                return (
                  <button
                    key={offset}
                    onClick={() => handleSelectService(targetIdx)}
                    title={`Capability #${DEVOPS_SERVICES[targetIdx]?.id}: ${DEVOPS_SERVICES[targetIdx]?.title}`}
                    className={`transition-all duration-300 cursor-pointer rounded-full ${
                      isCurrent
                        ? 'w-7 h-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_10px_rgba(37,99,235,0.5)]'
                        : Math.abs(offset) === 1
                        ? 'w-2.5 h-2.5 bg-blue-400 hover:bg-blue-600'
                        : Math.abs(offset) === 2
                        ? 'w-2 h-2 bg-blue-300 hover:bg-blue-500'
                        : 'w-1.5 h-1.5 bg-blue-200 hover:bg-blue-400'
                    }`}
                  />
                );
              })}
            </div>

            {/* Next Button (Symbol Only) */}
            <button
              onClick={handleNext}
              title="Next Capability (Right Arrow Key)"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white transition-all duration-200 shadow-md shadow-blue-500/25 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* -------------------------------------------------------------
              TRUE 360-DEGREE CONTINUOUS REVOLVING CIRCULAR ORBIT
              (Emerges from under rocket on left, curves over top, hides under rocket on right)
              ------------------------------------------------------------- */}
          <div className="pointer-events-none">
            {DEVOPS_SERVICES.map((srv, idx) => {
              const activeIdx = activeServiceIndex !== null ? activeServiceIndex : 0;
              const relative = getCircularOffset(idx, activeIdx, DEVOPS_SERVICES.length);

              // Render active arc and transition boundary slots
              const isInRange = relative >= -11 && relative <= 4;
              if (!isInRange) return null;

              const coords = getOrbitCoords(relative);
              const isSelected = activeService?.id === srv.id;

              // Normalize angle into [0, 360)
              const normAngle = ((coords.angleDeg % 360) + 360) % 360;

              // HIDING ZONES:
              // 1. TOP ZONE: Directly above / on top of the rocket nose cone (62° to 118°)
              //    Guarantees ZERO icons appear above or on top of the rocket!
              const isTopZone = normAngle >= 62 && normAngle <= 118;

              // 2. BOTTOM ZONE: Directly underneath rocket engine base & thrusters (244° to 296°)
              //    Ensures icons hide cleanly under the rocket at the bottom!
              const isBottomZone = normAngle >= 244 && normAngle <= 296;

              const isVisible = !isTopZone && !isBottomZone;

              // Full scale at all times - NEVER shrink to miniature sizes
              const scale = isSelected ? 1.15 : 1;
              const opacity = isVisible ? 1 : 0;

              // Tooltip direction:
              // - Near top arc: appear above the icon
              // - On RIGHT side (coords.x >= ORBIT_CX): appear to the LEFT (inward towards center, NEVER cutting off on page edge)
              // - On LEFT side (coords.x < ORBIT_CX): appear to the RIGHT (inward towards center, NEVER cutting off on page edge)
              const tooltipPlacement = coords.y < 160
                ? 'bottom-full mb-3 left-1/2 -translate-x-1/2'
                : coords.x >= ORBIT_CX
                  ? 'right-full mr-3.5 top-1/2 -translate-y-1/2'
                  : 'left-full ml-3.5 top-1/2 -translate-y-1/2';

              return (
                <div
                  key={srv.id}
                  className="absolute z-20 group"
                  style={{
                    left: `${(coords.x / 1440) * 100}%`,
                    top: `${(coords.y / 920) * 100}%`,
                    opacity: opacity,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                >
                  {/* CLEAN 3D ELEVATED ORBITAL BUTTON */}
                  <button
                    onClick={() => handleSelectService(idx)}
                    className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${isSelected
                        ? 'scale-110 border-2 border-white ring-4 ring-blue-400/40'
                        : 'border border-blue-200/80 hover:scale-110 hover:-translate-y-1'
                      }`}
                    style={{
                      background: isSelected
                        ? 'linear-gradient(145deg, #38bdf8 0%, #2563eb 55%, #1d4ed8 100%)'
                        : 'linear-gradient(145deg, #ffffff 0%, #f8faff 60%, #e2e8f0 100%)',
                      boxShadow: isSelected
                        ? '0 12px 28px -2px rgba(37, 99, 235, 0.45), 0 4px 12px -2px rgba(2, 132, 199, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.6), inset 0 -2px 4px rgba(15, 23, 42, 0.25)'
                        : '0 12px 24px -2px rgba(15, 23, 42, 0.16), 0 4px 10px -2px rgba(37, 99, 235, 0.12), inset 0 2px 2px rgba(255, 255, 255, 0.95), inset 0 -2px 4px rgba(30, 58, 138, 0.08)',
                    }}
                    title={srv.title}
                  >
                    {/* Vector Icon */}
                    <span className="relative z-10 flex items-center justify-center">
                      <ServiceIcon iconKey={srv.iconKey} size={28} color={isSelected ? '#ffffff' : '#2563eb'} />
                    </span>

                    {/* 3D Floating Capability Number Badge */}
                    <span
                      className={`absolute -bottom-1 ${coords.x < ORBIT_CX ? '-right-1' : '-left-1'
                        } text-[10px] font-black px-2 py-0.5 rounded-full border tracking-wide flex items-center justify-center transition-all z-20 shadow-md ${isSelected
                          ? 'bg-white text-blue-800 border-blue-200'
                          : 'bg-white text-blue-700 border-blue-200'
                        }`}
                    >
                      {srv.id}
                    </span>
                  </button>

                  {/* Hover Tooltip (Full Name & Capability Number) */}
                  <div
                    className={`absolute ${tooltipPlacement} opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 whitespace-nowrap bg-slate-900/95 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-2xl border border-blue-400/40 z-50 flex items-center gap-2 backdrop-blur-md`}
                  >
                    <span className="text-cyan-400 font-extrabold text-[11px] bg-cyan-950/80 px-2 py-0.5 rounded-md border border-cyan-500/30">
                      #{String(srv.id).padStart(2, '0')}
                    </span>
                    <span className="text-white tracking-wide">
                      {srv.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* =====================================================================
            MOBILE & TABLET VIEW (< 1024px) - TRUE 3D ROCKET SHOWCASE
            ===================================================================== */}
        <div className="block lg:hidden w-full max-w-xl mx-auto flex flex-col items-center py-2 px-1 select-none">
          {/* Mobile Rocket Stage Container with Swipe Gesture */}
          <div
            className="relative w-full max-w-[430px] aspect-[600/860] flex items-center justify-center mx-auto"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Real 3D Vector Rocket */}
            <svg
              className="absolute inset-0 w-full h-full overflow-visible pointer-events-none drop-shadow-2xl"
              viewBox="420 20 600 860"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <RocketSpacecraftSvg isLanding={isLanding} />
            </svg>

            {/* Mobile Cockpit Box Overlay (Strictly confined inside dark glass window) */}
            <div
              className={`absolute z-20 flex flex-col items-center justify-between text-center select-text pointer-events-auto transition-all duration-700 overflow-hidden rounded-[24px] ${
                isLanding ? 'animate-cockpitTouchdown' : ''
              }`}
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
                top: '21.5%',
                width: '35%',
                minWidth: '142px',
                maxWidth: '172px',
                height: '40%',
                padding: '6px 6px 10px 6px',
              }}
            >
              <CockpitContent activeService={activeService} onStartTour={() => handleSelectService(0)} />
            </div>

            {/* -------------------------------------------------------------
                MOBILE 10-CAPABILITY CONTINUOUS FLANKING CAROUSEL
                (5 Icons Left + 5 Icons Right — Distanced from Rocket, 100% Visible)
                ------------------------------------------------------------- */}
            <div className="pointer-events-none">
              {DEVOPS_SERVICES.map((srv, idx) => {
                const activeIdx = activeServiceIndex !== null ? activeServiceIndex : 0;
                const relative = getCircularOffset(idx, activeIdx, DEVOPS_SERVICES.length);

                // Slot definitions for 5 visible on left + 5 visible on right + smooth exit/entry buffers:
                // Left Side (Slots 1 to 5):
                //   rel = -2: Slot 1 (Top-left)
                //   rel = -1: Slot 2 (Upper-left)
                //   rel =  0: Slot 3 (Center-left ACTIVE)
                //   rel =  1: Slot 4 (Lower-left)
                //   rel =  2: Slot 5 (Bottom-left)
                //   rel = -3: Top-left buffer (fading out)
                //   rel =  3: Bottom-left buffer (fading in)
                //
                // Right Side (Slots 1 to 5):
                //   rel = -6: Slot 1 (Top-right)
                //   rel = -7: Slot 2 (Upper-right)
                //   rel = -8: Slot 3 (Center-right)
                //   rel = -9: Slot 4 (Lower-right)
                //   rel = -10: Slot 5 (Bottom-right)
                //   rel = -5: Top-right buffer (fading in)
                //   rel = -11: Bottom-right buffer (fading out)
                let mX = 458;
                let mY = 450;
                let isVisible = false;

                if (relative === 0) {
                  // Slot 3: Center Left (ACTIVE)
                  mX = 458;
                  mY = 450;
                  isVisible = true;
                } else if (relative === -1) {
                  // Slot 2: Upper Left
                  mX = 472;
                  mY = 330;
                  isVisible = true;
                } else if (relative === -2) {
                  // Slot 1: Top Left
                  mX = 492;
                  mY = 210;
                  isVisible = true;
                } else if (relative === 1) {
                  // Slot 4: Lower Left
                  mX = 472;
                  mY = 570;
                  isVisible = true;
                } else if (relative === 2) {
                  // Slot 5: Bottom Left
                  mX = 475;
                  mY = 690;
                  isVisible = true;
                } else if (relative === -3) {
                  // Top-left transition buffer
                  mX = 520;
                  mY = 100;
                  isVisible = false;
                } else if (relative === 3) {
                  // Bottom-left transition buffer
                  mX = 490;
                  mY = 800;
                  isVisible = false;
                } else if (relative === -8) {
                  // Slot 3: Center Right
                  mX = 982;
                  mY = 450;
                  isVisible = true;
                } else if (relative === -7) {
                  // Slot 2: Upper Right
                  mX = 968;
                  mY = 330;
                  isVisible = true;
                } else if (relative === -6) {
                  // Slot 1: Top Right
                  mX = 948;
                  mY = 210;
                  isVisible = true;
                } else if (relative === -9) {
                  // Slot 4: Lower Right
                  mX = 968;
                  mY = 570;
                  isVisible = true;
                } else if (relative === -10) {
                  // Slot 5: Bottom Right
                  mX = 965;
                  mY = 690;
                  isVisible = true;
                } else if (relative === -5) {
                  // Top-right transition buffer
                  mX = 920;
                  mY = 100;
                  isVisible = false;
                } else if (relative === -11) {
                  // Bottom-right transition buffer
                  mX = 950;
                  mY = 800;
                  isVisible = false;
                } else {
                  return null; // Outside active window
                }

                // Coordinate percentages relative to viewBox (420 to 1020 => width 600; 20 to 880 => height 860)
                const leftPercent = ((mX - 420) / 600) * 100;
                const topPercent = ((mY - 20) / 860) * 100;

                const isSelected = activeService?.id === srv.id;
                const opacity = isVisible ? 1 : 0;

                const tooltipPlacement = 'bottom-full mb-2 left-1/2 -translate-x-1/2';

                return (
                  <div
                    key={srv.id}
                    className="absolute z-25 group"
                    style={{
                      left: `${leftPercent}%`,
                      top: `${topPercent}%`,
                      opacity: opacity,
                      transform: 'translate(-50%, -50%)',
                      transition: 'top 0.4s cubic-bezier(0.16, 1, 0.3, 1), left 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
                      pointerEvents: isVisible ? 'auto' : 'none',
                    }}
                  >
                    {/* FIXED-SIZE CONSTANT CIRCLE BUTTON (NO SCALING/SHRINKAGE ON FAST NEXT) */}
                    <button
                      onClick={() => handleSelectService(idx)}
                      className={`relative w-10 h-10 rounded-full flex-shrink-0 aspect-square flex items-center justify-center cursor-pointer transition-colors duration-200 ${
                        isSelected
                          ? 'border-2 border-white ring-4 ring-blue-400/50 shadow-[0_0_20px_rgba(37,99,235,0.5)]'
                          : 'border border-blue-200/90 shadow-md'
                      }`}
                      style={{
                        background: isSelected
                          ? 'linear-gradient(145deg, #38bdf8 0%, #2563eb 55%, #1d4ed8 100%)'
                          : 'linear-gradient(145deg, #ffffff 0%, #f8faff 60%, #e2e8f0 100%)',
                        boxShadow: isSelected
                          ? '0 8px 22px -2px rgba(37, 99, 235, 0.55), 0 0 16px rgba(56, 189, 248, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.6), inset 0 -2px 4px rgba(15, 23, 42, 0.25)'
                          : '0 6px 16px -2px rgba(15, 23, 42, 0.12), 0 2px 6px -1px rgba(37, 99, 235, 0.08), inset 0 2px 2px rgba(255, 255, 255, 0.95), inset 0 -2px 4px rgba(30, 58, 138, 0.08)',
                      }}
                      title={srv.title}
                    >
                      {/* Vector Icon */}
                      <span className="relative z-10 flex items-center justify-center flex-shrink-0">
                        <ServiceIcon iconKey={srv.iconKey} size={19} color={isSelected ? '#ffffff' : '#2563eb'} />
                      </span>

                      {/* 3D Floating Capability Number Badge */}
                      <span
                        className={`absolute -bottom-1 ${
                          mX < 720 ? '-right-1' : '-left-1'
                        } text-[8px] font-black px-1.5 py-0.2 rounded-full border tracking-wide flex items-center justify-center transition-all z-20 shadow-sm ${
                          isSelected
                            ? 'bg-white text-blue-800 border-blue-200'
                            : 'bg-white text-blue-700 border-blue-200'
                        }`}
                      >
                        {srv.id}
                      </span>
                    </button>

                    {/* Tooltip on Tap/Hover */}
                    <div
                      className={`absolute ${tooltipPlacement} opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 whitespace-nowrap bg-slate-900/95 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg shadow-xl border border-blue-400/40 z-50 flex items-center gap-1.5 backdrop-blur-md`}
                    >
                      <span className="text-cyan-400 font-extrabold text-[10px] bg-cyan-950/80 px-1.5 py-0.2 rounded border border-cyan-500/30">
                        #{String(srv.id).padStart(2, '0')}
                      </span>
                      <span className="text-white tracking-wide max-w-[130px] truncate">
                        {srv.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Bottom Navigation Dock (Matching Desktop Minimal Dock) */}
          <div className="flex items-center gap-3.5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-blue-200/80 shadow-[0_10px_35px_rgba(37,99,235,0.22)] select-none mt-2 mb-4">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              title="Previous Capability"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-all duration-200 shadow-sm hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Center Carousel Pagination Dots */}
            <div className="flex items-center gap-1.5 px-1.5">
              {[-3, -2, -1, 0, 1, 2, 3].map((offset) => {
                const total = DEVOPS_SERVICES.length;
                const activeIdx = activeServiceIndex !== null ? activeServiceIndex : 0;
                const targetIdx = (activeIdx + offset + total) % total;
                const isCurrent = offset === 0;

                return (
                  <button
                    key={offset}
                    onClick={() => handleSelectService(targetIdx)}
                    title={`Capability #${DEVOPS_SERVICES[targetIdx]?.id}: ${DEVOPS_SERVICES[targetIdx]?.title}`}
                    className={`transition-all duration-300 cursor-pointer rounded-full ${
                      isCurrent
                        ? 'w-7 h-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_10px_rgba(37,99,235,0.5)]'
                        : Math.abs(offset) === 1
                        ? 'w-2.5 h-2.5 bg-blue-400 hover:bg-blue-600'
                        : Math.abs(offset) === 2
                        ? 'w-2 h-2 bg-blue-300 hover:bg-blue-500'
                        : 'w-1.5 h-1.5 bg-blue-200 hover:bg-blue-400'
                    }`}
                  />
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              title="Next Capability"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white transition-all duration-200 shadow-md shadow-blue-500/25 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </main>

      {/* =========================================================================
          FULL 45-CAPABILITIES CATALOG MODAL (WORD DOCUMENT COMPLETE SPEC)
          ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-6xl max-h-[92vh] bg-white border border-blue-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-blue-50 via-slate-50 to-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                      {DEVOPS_OVERVIEW.card}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      45 Enterprise Capabilities
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    DevOps &amp; Automation Services Catalog
                  </h2>
                </div>
              </div>

              {/* Search & Close */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search 45 capabilities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs rounded-full border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: Grid of all 45 Services */}
            <div className="p-6 overflow-y-auto space-y-4 bg-slate-50/60 flex-1">
              <div className="text-xs text-slate-500 flex items-center justify-between">
                <span>Showing {filteredServices.length} of 45 Capabilities</span>
                <span>Click any capability to focus inside rocket</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredServices.map((srv) => {
                  const globalIndex = DEVOPS_SERVICES.findIndex((s) => s.id === srv.id);
                  const isCurrent = activeService?.id === srv.id;
                  return (
                    <div
                      key={srv.id}
                      className={`p-4 rounded-xl bg-white border transition-all hover:shadow-md flex flex-col justify-between ${isCurrent ? 'border-blue-500 ring-2 ring-blue-300 shadow-sm' : 'border-slate-200 hover:border-blue-300'
                        }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-blue-50 border border-blue-200 shadow-sm">
                            <ServiceIcon iconKey={srv.iconKey} size={20} color={ICON_BRAND_COLOR} />
                          </div>
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                            #{String(srv.id).padStart(2, '0')}
                          </span>
                        </div>

                        <h3 className="text-sm font-extrabold text-slate-900 mb-1.5 leading-snug">
                          {srv.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-4">
                          {srv.description}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-100">
                        <button
                          onClick={() => {
                            setActiveServiceIndex(globalIndex);
                            setIsModalOpen(false);
                          }}
                          className="w-full py-1.5 rounded-lg text-xs font-bold text-white transition-all flex items-center justify-center gap-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-sm cursor-pointer"
                        >
                          <span>Focus in Rocket</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Press <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-300 text-[10px] text-slate-700">ESC</kbd> to close
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
