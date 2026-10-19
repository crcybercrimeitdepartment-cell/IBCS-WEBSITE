import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';
import {
  ArrowRight,
  Shield,
  FileText,
  Database,
  Box,
  Fingerprint,
  Network
} from 'lucide-react';
import SectionDecorativeBackground from '../../../components/common/SectionDecorativeBackground';
import { NextGenerationDigitalInnovationDecentralisedIntelligenceData } from './NextGenerationDigitalInnovationDecentralisedIntelligenceData';

/* =========================================================================
   CUSTOM VECTOR SVG: ISOMETRIC DECENTRALISED INTELLIGENCE CLUSTER GRAPHIC
   ========================================================================= */
export function NextGenerationDigitalInnovationDecentralisedIntelligenceClusterGraphic({ className = '' }) {
  return (
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 800 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[620px] drop-shadow-[0_15px_35px_rgba(15,164,175,0.2)] select-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Glowing Filters */}
          <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="intenseGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur1" />
            <feGaussianBlur stdDeviation="2" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradients for Main Center Cube (Teal/Cyan Theme) */}
          <linearGradient id="mainCubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E6F7F9" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#AFDDE5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0FA4AF" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="mainCubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#024950" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#003135" stopOpacity="0.98" />
          </linearGradient>

          <linearGradient id="mainCubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0FA4AF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#024950" stopOpacity="0.98" />
          </linearGradient>

          {/* Gradients for Floating Satellite Cubes */}
          <linearGradient id="satCubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E6F7F9" />
            <stop offset="100%" stopColor="#AFDDE5" />
          </linearGradient>

          <linearGradient id="satCubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#024950" />
            <stop offset="100%" stopColor="#003135" />
          </linearGradient>

          <linearGradient id="satCubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0FA4AF" />
            <stop offset="100%" stopColor="#024950" />
          </linearGradient>

          {/* Center Pedestal Gradients */}
          <linearGradient id="pedestalGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0FA4AF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#024950" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="pedestalGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#AFDDE5" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#003135" stopOpacity="0.9" />
          </linearGradient>

          {/* Holographic Radial Glows */}
          <radialGradient id="holoDiscGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0FA4AF" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#024950" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#003135" stopOpacity="0" />
          </radialGradient>

          {/* Shield Outline Gradient */}
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#AFDDE5" />
          </linearGradient>

          {/* Track Glow Gradients */}
          <linearGradient id="trackGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AFDDE5" />
            <stop offset="50%" stopColor="#0FA4AF" />
            <stop offset="100%" stopColor="#AFDDE5" />
          </linearGradient>
        </defs>

        {/* 1. HOLOGRAPHIC AMBIENT DISCS & RADAR RINGS ON FLOOR */}
        <g opacity="0.9">
          {/* Outermost faint dashed radar track */}
          <ellipse
            cx="400"
            cy="275"
            rx="330"
            ry="115"
            stroke="#AFDDE5"
            strokeWidth="1.2"
            strokeDasharray="6 8"
            opacity="0.5"
          />

          {/* Middle holographic cyan ring */}
          <ellipse
            cx="400"
            cy="275"
            rx="275"
            ry="96"
            stroke="#0FA4AF"
            strokeWidth="2"
            opacity="0.85"
            filter="url(#neonGlow)"
          />

          {/* Inner ambient glow disc */}
          <ellipse
            cx="400"
            cy="275"
            rx="210"
            ry="74"
            fill="url(#holoDiscGlow)"
          />

          {/* Concentric inner technical ring */}
          <ellipse
            cx="400"
            cy="275"
            rx="185"
            ry="65"
            stroke="#AFDDE5"
            strokeWidth="1.5"
            strokeDasharray="12 6"
            opacity="0.6"
          />

          {/* Fine concentric pulse ellipse */}
          <ellipse
            cx="400"
            cy="275"
            rx="135"
            ry="48"
            stroke="#0FA4AF"
            strokeWidth="1"
            opacity="0.7"
          />
        </g>

        {/* 2. FLOOR CIRCUIT TRACES & BUS LINES */}
        <g stroke="#0FA4AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.75">
          <path d="M 230 330 L 170 330 L 140 300 L 90 300" strokeWidth="1.5" />
          <path d="M 210 350 L 170 350 L 140 380 L 100 380" strokeWidth="1.2" strokeDasharray="4 4" />

          <path d="M 570 330 L 630 330 L 660 300 L 710 300" strokeWidth="1.5" />
          <path d="M 590 350 L 630 350 L 660 380 L 700 380" strokeWidth="1.2" strokeDasharray="4 4" />

          <path d="M 260 170 L 200 170 L 170 140 L 120 140" strokeWidth="1.2" />
          <path d="M 540 170 L 600 170 L 630 140 L 680 140" strokeWidth="1.2" />

          {/* Circuit nodes (dots) */}
          <circle cx="140" cy="300" r="3.5" fill="#0FA4AF" filter="url(#subtleGlow)" />
          <circle cx="90" cy="300" r="2.5" fill="#0FA4AF" />
          <circle cx="660" cy="300" r="3.5" fill="#0FA4AF" filter="url(#subtleGlow)" />
          <circle cx="710" cy="300" r="2.5" fill="#0FA4AF" />
          <circle cx="170" cy="140" r="3" fill="#0FA4AF" />
          <circle cx="630" cy="140" r="3" fill="#0FA4AF" />
          <circle cx="140" cy="380" r="3" fill="#0FA4AF" />
          <circle cx="660" cy="380" r="3" fill="#0FA4AF" />
        </g>

        {/* 3. NEON INTERCONNECT BUS TRACKS (Connecting Center Cube to Satellites) */}
        <g filter="url(#neonGlow)">
          {/* Center to Left Foreground */}
          <path d="M 360 280 L 260 295" stroke="url(#trackGlow)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 360 280 L 260 295" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />

          {/* Center to Right Foreground */}
          <path d="M 440 280 L 540 295" stroke="url(#trackGlow)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 440 280 L 540 295" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />

          {/* Center to Left Background */}
          <path d="M 365 258 L 285 165" stroke="url(#trackGlow)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 365 258 L 285 165" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />

          {/* Center to Right Background */}
          <path d="M 435 258 L 515 165" stroke="url(#trackGlow)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 435 258 L 515 165" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
        </g>

        {/* Connection Junction Rings on Floor */}
        <g>
          <circle cx="260" cy="295" r="5" fill="#024950" stroke="#0FA4AF" strokeWidth="1.5" filter="url(#subtleGlow)" />
          <circle cx="260" cy="295" r="2" fill="#FFFFFF" />

          <circle cx="540" cy="295" r="5" fill="#024950" stroke="#0FA4AF" strokeWidth="1.5" filter="url(#subtleGlow)" />
          <circle cx="540" cy="295" r="2" fill="#FFFFFF" />

          <circle cx="285" cy="165" r="4.5" fill="#024950" stroke="#0FA4AF" strokeWidth="1.5" filter="url(#subtleGlow)" />
          <circle cx="285" cy="165" r="2" fill="#FFFFFF" />

          <circle cx="515" cy="165" r="4.5" fill="#024950" stroke="#0FA4AF" strokeWidth="1.5" filter="url(#subtleGlow)" />
          <circle cx="515" cy="165" r="2" fill="#FFFFFF" />
        </g>

        {/* 4. BACKGROUND FLOATING SATELLITE BOXES (CUBES) */}
        {/* LEFT BACKGROUND FLOATING BOX (Hovering at x=260, y=125) */}
        <g>
          {/* Subtle Ground Ring & Shadow */}
          <ellipse cx="260" cy="160" rx="26" ry="9" stroke="#0FA4AF" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
          <ellipse cx="260" cy="160" rx="16" ry="6" fill="#024950" opacity="0.25" filter="url(#subtleGlow)" />

          {/* Small Floating Isometric Cube (hovering in air) */}
          <g>
            {/* Top Face */}
            <path d="M 260 106 L 282 119 L 260 132 L 238 119 Z" fill="url(#satCubeTop)" stroke="#AFDDE5" strokeWidth="1.2" />
            {/* Left Face */}
            <path d="M 238 119 L 260 132 L 260 156 L 238 143 Z" fill="url(#satCubeLeft)" stroke="#0FA4AF" strokeWidth="1" />
            {/* Right Face */}
            <path d="M 260 132 L 282 119 L 282 143 L 260 156 Z" fill="url(#satCubeRight)" stroke="#0FA4AF" strokeWidth="1" />
          </g>
        </g>

        {/* RIGHT BACKGROUND FLOATING BOX (Hovering at x=540, y=125) */}
        <g>
          {/* Subtle Ground Ring & Shadow */}
          <ellipse cx="540" cy="160" rx="26" ry="9" stroke="#0FA4AF" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
          <ellipse cx="540" cy="160" rx="16" ry="6" fill="#024950" opacity="0.25" filter="url(#subtleGlow)" />

          {/* Small Floating Isometric Cube */}
          <g>
            {/* Top Face */}
            <path d="M 540 106 L 562 119 L 540 132 L 518 119 Z" fill="url(#satCubeTop)" stroke="#AFDDE5" strokeWidth="1.2" />
            {/* Left Face */}
            <path d="M 518 119 L 540 132 L 540 156 L 518 143 Z" fill="url(#satCubeLeft)" stroke="#0FA4AF" strokeWidth="1" />
            {/* Right Face */}
            <path d="M 540 132 L 562 119 L 562 143 L 540 156 Z" fill="url(#satCubeRight)" stroke="#0FA4AF" strokeWidth="1" />
          </g>
        </g>

        {/* 5. CENTER TIERED CYBER PEDESTAL */}
        <g>
          {/* Lower Base Wall */}
          <path
            d="M 295 305 C 295 328 342 345 400 345 C 458 345 505 328 505 305 L 505 290 C 505 268 458 250 400 250 C 342 250 295 268 295 290 Z"
            fill="url(#pedestalGrad1)"
          />
          {/* Lower Disc Top Rim */}
          <ellipse cx="400" cy="290" rx="105" ry="35" fill="#003135" stroke="#0FA4AF" strokeWidth="2" filter="url(#subtleGlow)" />

          {/* Upper Stepped Base Wall */}
          <path
            d="M 320 286 C 320 304 356 318 400 318 C 444 318 480 304 480 286 L 480 272 C 480 254 444 240 400 240 C 356 240 320 254 320 272 Z"
            fill="url(#pedestalGrad2)"
          />
          {/* Upper Disc Top */}
          <ellipse cx="400" cy="272" rx="80" ry="26" fill="#024950" stroke="#AFDDE5" strokeWidth="2" />

          {/* Holographic Glowing Inner Core Ring on Pedestal */}
          <ellipse cx="400" cy="272" rx="64" ry="21" stroke="#0FA4AF" strokeWidth="2.5" opacity="0.9" filter="url(#intenseGlow)" />
          <ellipse cx="400" cy="272" rx="48" ry="15" fill="#AFDDE5" opacity="0.3" />
        </g>

        {/* 6. FOREGROUND FLOATING SATELLITE BOXES (CUBES) */}
        {/* LEFT FOREGROUND FLOATING BOX (Hovering at x=230, y=260) */}
        <g>
          {/* Holographic Ground Ring & Soft Shadow */}
          <ellipse cx="230" cy="305" rx="32" ry="11" stroke="#0FA4AF" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
          <ellipse cx="230" cy="305" rx="20" ry="7" fill="#024950" opacity="0.3" filter="url(#subtleGlow)" />

          {/* Small Floating Isometric Cube (hovering in air above ground) */}
          <g>
            {/* Top Face */}
            <path d="M 230 238 L 256 253 L 230 268 L 204 253 Z" fill="url(#satCubeTop)" stroke="#AFDDE5" strokeWidth="1.5" />
            {/* Left Face */}
            <path d="M 204 253 L 230 268 L 230 296 L 204 281 Z" fill="url(#satCubeLeft)" stroke="#0FA4AF" strokeWidth="1.2" />
            {/* Right Face */}
            <path d="M 230 268 L 256 253 L 256 281 L 230 296 Z" fill="url(#satCubeRight)" stroke="#0FA4AF" strokeWidth="1.2" />
          </g>
        </g>

        {/* RIGHT FOREGROUND FLOATING BOX (Hovering at x=570, y=260) */}
        <g>
          {/* Holographic Ground Ring & Soft Shadow */}
          <ellipse cx="570" cy="305" rx="32" ry="11" stroke="#0FA4AF" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
          <ellipse cx="570" cy="305" rx="20" ry="7" fill="#024950" opacity="0.3" filter="url(#subtleGlow)" />

          {/* Small Floating Isometric Cube */}
          <g>
            {/* Top Face */}
            <path d="M 570 238 L 596 253 L 570 268 L 544 253 Z" fill="url(#satCubeTop)" stroke="#AFDDE5" strokeWidth="1.5" />
            {/* Left Face */}
            <path d="M 544 253 L 570 268 L 570 296 L 544 281 Z" fill="url(#satCubeLeft)" stroke="#0FA4AF" strokeWidth="1.2" />
            {/* Right Face */}
            <path d="M 570 268 L 596 253 L 596 281 L 570 296 Z" fill="url(#satCubeRight)" stroke="#0FA4AF" strokeWidth="1.2" />
          </g>
        </g>

        {/* 7. FLOATING MICRO-VOXELS IN 3D SPACE */}
        <g opacity="0.9">
          <g transform="translate(325, 235) scale(0.65)">
            <path d="M 12 0 L 24 7 L 12 14 L 0 7 Z" fill="#AFDDE5" />
            <path d="M 0 7 L 12 14 L 12 28 L 0 21 Z" fill="#003135" />
            <path d="M 12 14 L 24 7 L 24 21 L 12 28 Z" fill="#0FA4AF" />
          </g>

          <g transform="translate(460, 235) scale(0.65)">
            <path d="M 12 0 L 24 7 L 12 14 L 0 7 Z" fill="#AFDDE5" />
            <path d="M 0 7 L 12 14 L 12 28 L 0 21 Z" fill="#003135" />
            <path d="M 12 14 L 24 7 L 24 21 L 12 28 Z" fill="#0FA4AF" />
          </g>

          <g transform="translate(210, 220) scale(0.5)">
            <path d="M 12 0 L 24 7 L 12 14 L 0 7 Z" fill="#E6F7F9" />
            <path d="M 0 7 L 12 14 L 12 28 L 0 21 Z" fill="#024950" />
            <path d="M 12 14 L 24 7 L 24 21 L 12 28 Z" fill="#0FA4AF" />
          </g>

          <g transform="translate(575, 220) scale(0.5)">
            <path d="M 12 0 L 24 7 L 12 14 L 0 7 Z" fill="#E6F7F9" />
            <path d="M 0 7 L 12 14 L 12 28 L 0 21 Z" fill="#024950" />
            <path d="M 12 14 L 24 7 L 24 21 L 12 28 Z" fill="#0FA4AF" />
          </g>

          <g transform="translate(390, 80) scale(0.45)">
            <path d="M 12 0 L 24 7 L 12 14 L 0 7 Z" fill="#AFDDE5" />
            <path d="M 0 7 L 12 14 L 12 28 L 0 21 Z" fill="#024950" />
            <path d="M 12 14 L 24 7 L 24 21 L 12 28 Z" fill="#0FA4AF" />
          </g>
        </g>

        {/* 8. CENTER HERO ISOMETRIC 3D CUBE WITH SECURITY SHIELD */}
        <g>
          {/* Top Face */}
          <path
            d="M 400 115 L 468 154 L 400 193 L 332 154 Z"
            fill="url(#mainCubeTop)"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          {/* Inner diagonal sheen line */}
          <path
            d="M 366 135 L 434 174"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            opacity="0.6"
            strokeLinecap="round"
          />

          {/* Left Face */}
          <path
            d="M 332 154 L 400 193 L 400 273 L 332 234 Z"
            fill="url(#mainCubeLeft)"
            stroke="#0FA4AF"
            strokeWidth="1.8"
          />

          {/* Right Face */}
          <path
            d="M 400 193 L 468 154 L 468 234 L 400 273 Z"
            fill="url(#mainCubeRight)"
            stroke="#0FA4AF"
            strokeWidth="1.8"
          />

          {/* Edge Highlights with Neon Glow */}
          <g stroke="#AFDDE5" strokeWidth="2" filter="url(#subtleGlow)">
            <line x1="400" y1="193" x2="400" y2="273" />
            <line x1="332" y1="154" x2="400" y2="193" />
            <line x1="400" y1="193" x2="468" y2="154" />
          </g>

          {/* Glowing Security Shield Emblem on Front Face */}
          <g transform="translate(372, 195)">
            <path
              d="M 28 6 C 36 6 46 0 46 0 C 46 0 56 6 64 6 C 64 22 56 36 46 44 C 36 36 28 22 28 6 Z"
              fill="none"
              stroke="#0FA4AF"
              strokeWidth="4"
              opacity="0.8"
              filter="url(#intenseGlow)"
            />
            <path
              d="M 28 6 C 36 6 46 0 46 0 C 46 0 56 6 64 6 C 64 22 56 36 46 44 C 36 36 28 22 28 6 Z"
              fill="none"
              stroke="url(#shieldGrad)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 34 11 C 39 11 46 7 46 7 C 46 7 53 11 58 11 C 58 22 52 31 46 37 C 40 31 34 22 34 11 Z"
              fill="none"
              stroke="#AFDDE5"
              strokeWidth="1.5"
              opacity="0.8"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export const BlockchainClusterGraphic = NextGenerationDigitalInnovationDecentralisedIntelligenceClusterGraphic;

export default function NextGenerationDigitalInnovationDecentralisedIntelligenceSection({ onOpenPage }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#nextgen-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  const {
    badge = 'DECENTRALISED INTELLIGENCE',
    titleLine1 = 'Next-Generation Digital Innovation &',
    titleLine2 = 'Decentralised Intelligence',
    paragraphs = [
      'Next-Generation Digital Innovation & Decentralised Intelligence focuses on developing advanced software products powered by blockchain technology, distributed systems, decentralised architectures, and secure digital transaction frameworks.',
      'This section explores digital trust, distributed data management, smart contract applications, and decentralised platforms designed to enable transparent information exchange, strengthen digital integrity, improve system interoperability, and support secure digital operations across enterprise, government, and commercial environments.'
    ],
    ctaText = 'Explore Decentralised Intelligence Solutions',
    features = [
      {
        id: 'smart-contracts',
        title: 'Smart Contracts',
        description: 'Automated and auditable digital agreements.',
        position: 'top-left',
        iconType: 'file'
      },
      {
        id: 'distributed-ledger',
        title: 'Distributed Ledger',
        description: 'Secure multi-party transaction records.',
        position: 'bottom-left',
        iconType: 'database'
      },
      {
        id: 'cryptographic-security',
        title: 'Cryptographic Security',
        description: 'Tamper-resistant verification.',
        position: 'top-right',
        iconType: 'shield'
      },
      {
        id: 'immutable-records',
        title: 'Immutable Records',
        description: 'Transparent and traceable data.',
        position: 'bottom-right',
        iconType: 'cube'
      }
    ],
    bottomBadges = [
      { id: 'crypto', label: 'CRYPTOGRAPHY', iconType: 'shield' },
      { id: 'smart-contracts-badge', label: 'SMART CONTRACTS', iconType: 'file' },
      { id: 'dlt', label: 'DLT', iconType: 'network' },
      { id: 'web3', label: 'WEB3', iconType: 'cube' },
      { id: 'identity', label: 'DIGITAL IDENTITY', iconType: 'fingerprint' }
    ]
  } = NextGenerationDigitalInnovationDecentralisedIntelligenceData;

  const renderCardIcon = (iconType) => {
    switch (iconType) {
      case 'file':
        return <FileText className="w-5 h-5 text-white" strokeWidth={2.2} />;
      case 'database':
        return <Database className="w-5 h-5 text-white" strokeWidth={2.2} />;
      case 'shield':
        return <Shield className="w-5 h-5 text-white" strokeWidth={2.2} />;
      case 'cube':
      default:
        return <Box className="w-5 h-5 text-white" strokeWidth={2.2} />;
    }
  };

  const renderBadgeIcon = (iconType) => {
    switch (iconType) {
      case 'file':
        return <FileText className="w-4 h-4 text-[#0FA4AF]" strokeWidth={2.2} />;
      case 'network':
        return <Network className="w-4 h-4 text-[#0FA4AF]" strokeWidth={2.2} />;
      case 'cube':
        return <Box className="w-4 h-4 text-[#0FA4AF]" strokeWidth={2.2} />;
      case 'fingerprint':
        return <Fingerprint className="w-4 h-4 text-[#0FA4AF]" strokeWidth={2.2} />;
      case 'shield':
      default:
        return <Shield className="w-4 h-4 text-[#0FA4AF]" strokeWidth={2.2} />;
    }
  };

  const cardTopLeft = features.find((f) => f.position === 'top-left') || features[0];
  const cardBottomLeft = features.find((f) => f.position === 'bottom-left') || features[1];
  const cardTopRight = features.find((f) => f.position === 'top-right') || features[2];
  const cardBottomRight = features.find((f) => f.position === 'bottom-right') || features[3];

  const FeatureCard = ({ card, className = '' }) => (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onMouseEnter={() => setHoveredCard(card.id)}
      onMouseLeave={() => setHoveredCard(null)}
      className={`group relative flex items-center gap-2.5 sm:gap-3 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-3 sm:px-3.5 border border-[#AFDDE5] shadow-xs hover:shadow-md hover:border-[#0FA4AF]/60 transition-all duration-300 w-full ${className}`}
    >
      {/* Icon Badge */}
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#0FA4AF] to-[#024950] flex items-center justify-center text-white shadow-sm shadow-[#0FA4AF]/25 shrink-0 group-hover:scale-105 transition-transform duration-200">
        {renderCardIcon(card.iconType)}
      </div>
      {/* Content */}
      <div className="text-left min-w-0 flex-1">
        <h4 className="font-display text-[12px] sm:text-[13.5px] font-bold text-[#081E52] leading-tight group-hover:text-[#0FA4AF] transition-colors duration-200 truncate sm:whitespace-normal">
          {card.title}
        </h4>
        <p className="text-[#081E52]/70 text-[10px] sm:text-[11px] leading-snug mt-0.5 font-medium line-clamp-2">
          {card.description}
        </p>
      </div>
      {/* Subtle bottom indicator glow */}
      <div className="absolute inset-x-3 -bottom-[1px] h-[1.5px] bg-gradient-to-r from-transparent via-[#0FA4AF]/0 to-transparent group-hover:via-[#0FA4AF]/60 transition-all duration-300 rounded-full" />
    </motion.div>
  );

  return (
    <section
      id="next-generation-digital-innovation-decentralised-intelligence"
      className="scroll-mt-20 relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F2F8FA] via-[#E8F4F7] to-[#DFEFF2] border-b border-[#D4AF37]/20 overflow-hidden select-none"
    >
      {/* Interactive Decorative Background Theme */}
      <SectionDecorativeBackground variant="blockchain" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER AREA */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <AnimatedSectionHeading
            text={`${titleLine1} ${titleLine2}`}
            highlightWords={[titleLine2]}
            highlightClassName="text-[#0FA4AF]"
            className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.14] tracking-tight text-[#081E52] mb-5 text-center"
          />

          {/* Descriptions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#081E52]/85 font-medium text-center max-w-3xl mx-auto mb-7"
          >
            {paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-8 sm:mb-10"
          >
            <button
              type="button"
              onClick={handleCtaClick}
              className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-white font-extrabold text-sm sm:text-[15px] bg-gradient-to-r from-[#0FA4AF] to-[#024950] shadow-md shadow-[#0FA4AF]/25 hover:shadow-lg hover:from-[#0d8e98] hover:to-[#01353a] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none cursor-pointer"
            >
              <span>{ctaText}</span>
              <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* CENTERPIECE + FLOATING CARDS STAGE */}
        <div className="relative mt-2 mb-12 sm:mb-16">
          {/* DESKTOP LAYOUT (>= lg) */}
          <div className="hidden lg:grid lg:grid-cols-12 items-center gap-4 relative min-h-[460px]">
            {/* SVG Connecting Circuit Traces */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1200 480"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="traceGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0FA4AF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#AFDDE5" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="traceGradRight" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#0FA4AF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#AFDDE5" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Top Left Line to Smart Contracts */}
              <path
                d="M 320 120 C 420 120, 480 200, 520 220"
                stroke="url(#traceGradLeft)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                className="opacity-70"
              />
              {/* Bottom Left Line to Distributed Ledger */}
              <path
                d="M 320 360 C 430 360, 460 310, 510 270"
                stroke="url(#traceGradLeft)"
                strokeWidth="1.5"
                className="opacity-60"
              />
              {/* Top Right Line to Cryptographic Security */}
              <path
                d="M 880 120 C 780 120, 720 200, 680 220"
                stroke="url(#traceGradRight)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                className="opacity-70"
              />
              {/* Bottom Right Line to Immutable Records */}
              <path
                d="M 880 360 C 770 360, 740 310, 690 270"
                stroke="url(#traceGradRight)"
                strokeWidth="1.5"
                className="opacity-60"
              />

              {/* Circuit Junction Nodes */}
              <circle cx="390" cy="120" r="4" fill="#0FA4AF" filter="url(#glowFilter)" />
              <circle cx="390" cy="120" r="8" stroke="#AFDDE5" strokeWidth="1" opacity="0.6" />

              <circle cx="260" cy="240" r="3.5" fill="#0FA4AF" filter="url(#glowFilter)" />

              <circle cx="810" cy="120" r="4" fill="#0FA4AF" filter="url(#glowFilter)" />
              <circle cx="810" cy="120" r="8" stroke="#AFDDE5" strokeWidth="1" opacity="0.6" />

              <circle cx="940" cy="240" r="3.5" fill="#0FA4AF" filter="url(#glowFilter)" />
              <circle cx="730" cy="335" r="4" fill="#0FA4AF" filter="url(#glowFilter)" />
              <circle cx="470" cy="335" r="4" fill="#0FA4AF" filter="url(#glowFilter)" />
            </svg>

            {/* Left Column (2 Floating Cards) */}
            <div className="col-span-3 flex flex-col justify-between gap-12 z-10 pl-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FeatureCard card={cardTopLeft} className="max-w-[240px]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <FeatureCard card={cardBottomLeft} className="max-w-[240px]" />
              </motion.div>
            </div>

            {/* Center Column (3D Isometric Node Cluster) */}
            <div className="col-span-6 relative flex items-center justify-center py-4 z-10 animate-float-slow">
              <NextGenerationDigitalInnovationDecentralisedIntelligenceClusterGraphic />
            </div>

            {/* Right Column (2 Floating Cards) */}
            <div className="col-span-3 flex flex-col justify-between gap-12 z-10 pr-2 items-end">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full flex justify-end"
              >
                <FeatureCard card={cardTopRight} className="max-w-[240px]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full flex justify-end"
              >
                <FeatureCard card={cardBottomRight} className="max-w-[240px]" />
              </motion.div>
            </div>
          </div>

          {/* MOBILE & TABLET LAYOUT (< lg) */}
          <div className="block lg:hidden">
            {/* Center Graphic */}
            <NextGenerationDigitalInnovationDecentralisedIntelligenceClusterGraphic className="my-3 max-w-[380px] sm:max-w-[440px] mx-auto animate-float-slow" />

            {/* 4 Small Floating Boxes in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3.5 mt-3 sm:mt-6 max-w-sm sm:max-w-md mx-auto px-1 sm:px-3">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <FeatureCard card={cardTopLeft} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <FeatureCard card={cardTopRight} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <FeatureCard card={cardBottomLeft} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <FeatureCard card={cardBottomRight} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* BOTTOM TECHNOLOGY RIBBON */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-6 sm:pt-10 border-t border-[#AFDDE5]/60"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
            {bottomBadges.map((badgeItem, index) => (
              <React.Fragment key={badgeItem.id}>
                <div className="group flex items-center gap-3 cursor-default transition-all duration-200 hover:-translate-y-0.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 border border-[#AFDDE5] flex items-center justify-center shadow-xs group-hover:bg-[#E6F7F9] group-hover:border-[#0FA4AF] transition-colors duration-200">
                    {renderBadgeIcon(badgeItem.iconType)}
                  </div>
                  <span className="text-[11px] sm:text-xs font-extrabold tracking-wider text-[#081E52] uppercase group-hover:text-[#0FA4AF] transition-colors duration-200">
                    {badgeItem.label}
                  </span>
                </div>

                {/* Vertical Divider (between items, not after last) */}
                {index < bottomBadges.length - 1 && (
                  <div className="hidden md:block h-6 w-px bg-[#AFDDE5]/80" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const BlockchainDecentralisedTechSection = NextGenerationDigitalInnovationDecentralisedIntelligenceSection;
