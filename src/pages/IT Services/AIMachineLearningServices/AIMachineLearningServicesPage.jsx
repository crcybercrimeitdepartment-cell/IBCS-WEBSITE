import React, { useState, useEffect } from 'react'
import * as Icons from 'lucide-react'
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Home } from 'lucide-react'
import { servicesData } from './AIMachineLearningServicesPageData.js'

/**
 * ============================================================================
 * EMBEDDED STYLES & ANIMATIONS
 * Converts all custom CSS into self-contained scoped rules & animations.
 * ============================================================================
 */
const embeddedStyles = `
@keyframes pulseGlow {
  0%, 100% {
    filter: drop-shadow(0 0 12px rgba(14, 165, 233, 0.9)) drop-shadow(0 0 25px rgba(2, 132, 199, 0.5));
    opacity: 0.95;
  }
  50% {
    filter: drop-shadow(0 0 20px rgba(56, 189, 248, 1)) drop-shadow(0 0 35px rgba(14, 165, 233, 0.75));
    opacity: 1;
  }
}

@keyframes flowDash {
  to {
    stroke-dashoffset: -100;
  }
}

@keyframes rippleRing {
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.08);
    opacity: 0.4;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.8;
  }
}

@keyframes floatGentle {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-pulse-glow {
  animation: pulseGlow 2.5s ease-in-out infinite;
}

.animate-circuit-flow {
  stroke-dasharray: 8 6;
  animation: flowDash 3s linear infinite;
}

.animate-ripple-ring {
  animation: rippleRing 3s ease-in-out infinite;
}

.animate-float-gentle {
  animation: floatGentle 5s ease-in-out infinite;
}

.animate-fade-in {
  animation: fadeIn 0.45s ease-out forwards;
}

/* Custom 3D Neumorphic / Glassmorphic card shadows converted from index.css */
.shadow-tech-node {
  box-shadow: 
    0 10px 25px -5px rgba(148, 163, 184, 0.25),
    0 8px 10px -6px rgba(148, 163, 184, 0.15),
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.9);
}

.shadow-tech-active {
  box-shadow: 
    0 0 0 4px rgba(56, 189, 248, 0.35),
    0 0 30px 4px rgba(14, 165, 233, 0.45),
    0 15px 30px -5px rgba(2, 132, 199, 0.4);
}

.shadow-brain-container {
  box-shadow:
    0 25px 60px -15px rgba(15, 23, 42, 0.15),
    0 10px 20px -5px rgba(59, 130, 246, 0.08);
}
`

/**
 * ============================================================================
 * 1. SERVICE ICON COMPONENT
 * Dynamically resolves any of the 56 service icons with glowing / normal states.
 * ============================================================================
 */
function ServiceIcon({
  serviceId,
  iconName,
  isGlowing = false,
  className = 'w-[32px] h-[32px]',
}) {
  const IconComponent = (iconName && Icons[iconName]) || Icons[serviceId] || Icons.Brain
  const strokeColor = isGlowing ? '#ffffff' : '#0c1e3e'

  return (
    <div
      className={`flex items-center justify-center ${
        isGlowing ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]' : ''
      }`}
    >
      <IconComponent
        className={className}
        strokeWidth={isGlowing ? 2.4 : 2.1}
        color={strokeColor}
      />
    </div>
  )
}

/**
 * ============================================================================
 * 2. CONNECTING LINE COMPONENT (DESKTOP)
 * 5 glowing electrical circuit branches originating from the cloud to the cards.
 * Middle line (Slot 2) ALWAYS maintains an intense radiant cyan glow.
 * ============================================================================
 */
function ConnectingLine({ activeIndex }) {
  const nodeY = [60, 180, 300, 420, 540]

  const baseBranches = [
    'M 0 300 L 45 300 L 45 100 L 85 60 L 150 60',
    'M 0 300 L 45 300 L 45 200 L 65 180 L 150 180',
    'M 0 300 L 150 300',
    'M 0 300 L 45 300 L 45 400 L 65 420 L 150 420',
    'M 0 300 L 45 300 L 45 500 L 85 540 L 150 540',
  ]

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-10 w-full h-full">
      <svg
        viewBox="0 0 150 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="lineNeonGlow" filterUnits="userSpaceOnUse" x="-100" y="-100" width="350" height="800">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="lineCoreGlow" filterUnits="userSpaceOnUse" x="-100" y="-100" width="350" height="800">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="viaRadialCyan" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="70%" stopColor="#0284c7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </radialGradient>
        </defs>

        {baseBranches.map((path, idx) => {
          const isGlowing = activeIndex === idx || idx === 2

          return (
            <g key={`branch-${idx}`}>
              <path
                d={path}
                stroke={isGlowing ? '#0ea5e9' : '#38bdf8'}
                strokeWidth={isGlowing ? '9' : '5'}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={isGlowing ? '0.75' : '0.4'}
                filter={isGlowing ? 'url(#lineNeonGlow)' : 'url(#lineCoreGlow)'}
                className="transition-all duration-300"
              />
              <path
                d={path}
                stroke={isGlowing ? '#38bdf8' : '#0284c7'}
                strokeWidth={isGlowing ? '3.8' : '2.4'}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={isGlowing ? '1' : '0.75'}
                className="transition-all duration-300"
              />
              <path
                d={path}
                stroke={isGlowing ? '#ffffff' : '#e0f2fe'}
                strokeWidth={isGlowing ? '2.2' : '1.8'}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={isGlowing ? '1' : '0.85'}
                className="animate-circuit-flow transition-all duration-300"
              />
            </g>
          )
        })}

        <g>
          <circle cx={0} cy={300} r={14} fill="url(#viaRadialCyan)" className="animate-pulse" />
          <circle cx={0} cy={300} r={6.5} fill="#0ea5e9" filter="url(#lineCoreGlow)" />
          <circle cx={0} cy={300} r={3.2} fill="#ffffff" />
        </g>

        {nodeY.map((y, idx) => {
          const isGlowing = activeIndex === idx || idx === 2

          return (
            <g key={`terminal-${idx}`}>
              <circle
                cx={150}
                cy={y}
                r={isGlowing ? 9 : 6}
                fill="#38bdf8"
                filter={isGlowing ? 'url(#lineNeonGlow)' : 'url(#lineCoreGlow)'}
                opacity={isGlowing ? 0.75 : 0.45}
                className="transition-all duration-300"
              />
              <circle
                cx={150}
                cy={y}
                r={isGlowing ? 4.8 : 3.6}
                fill="#0284c7"
                className="transition-all duration-300"
              />
              <circle
                cx={150}
                cy={y}
                r={isGlowing ? 2.6 : 1.8}
                fill="#ffffff"
                className="transition-all duration-300"
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

/**
 * ============================================================================
 * 3. BRAIN GRAPHIC COMPONENT
 * Pure-code 3D volumetric cloud brain left hemisphere with organic rounded crown,
 * glowing emblem badge, and typography column describing the middle service card.
 * ============================================================================
 */
function BrainGraphic({ activeService }) {
  const brainPath = `
    M 480 100
    C 480 74, 468 54, 450 42
    C 426 26, 394 16, 355 18
    C 310 20, 270 34, 235 58
    C 200 80, 172 116, 155 158
    C 142 190, 140 226, 148 258
    C 138 282, 134 312, 140 342
    C 146 370, 156 392, 164 408
    C 150 433, 146 466, 154 498
    C 164 530, 184 558, 210 582
    C 240 608, 280 628, 328 632
    C 376 636, 424 622, 456 596
    C 472 582, 480 562, 480 538
    L 480 100
    Z
  `

  const innerPath = `
    M 470 108
    C 470 84, 460 66, 444 54
    C 422 38, 392 28, 356 30
    C 314 32, 276 44, 244 66
    C 212 88, 186 120, 170 160
    C 158 190, 156 224, 164 254
    C 154 278, 150 306, 156 334
    C 162 360, 170 380, 178 396
    C 166 420, 162 452, 170 482
    C 178 512, 196 538, 220 560
    C 248 584, 284 602, 328 606
    C 372 610, 416 596, 446 572
    C 462 558, 470 540, 470 518
    L 470 108
    Z
  `

  return (
    <div className="relative w-[92vw] max-w-[370px] sm:max-w-[440px] md:max-w-[480px] lg:w-[480px] xl:w-[520px] aspect-[395/600] select-none mx-auto">
      <svg
        viewBox="120 10 375 640"
        className="absolute inset-0 w-full h-full overflow-visible drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="cyberBrainGlow" cx="65%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#dbeafe" stopOpacity="1" />
            <stop offset="35%" stopColor="#bae6fd" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#7dd3fc" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.6" />
          </radialGradient>

          <linearGradient id="cyberRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0369a1" />
            <stop offset="30%" stopColor="#0284c7" />
            <stop offset="60%" stopColor="#0ea5e9" />
            <stop offset="85%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>

          <linearGradient id="cloudVolumeA" x1="0%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#f0f9ff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.75" />
          </linearGradient>

          <linearGradient id="cloudVolumeB" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#e0f2fe" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="cloudVolumeC" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#f0f9ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.6" />
          </linearGradient>

          <filter id="cloudSoftShadow" x="-10%" y="-10%" width="125%" height="125%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
            <feOffset dx="-2" dy="5" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.15" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="neonAura" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={brainPath}
          fill="none"
          stroke="#0284c7"
          strokeWidth="38"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.22"
          filter="url(#neonAura)"
        />

        <path
          d={brainPath}
          fill="none"
          stroke="#0284c7"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.35"
        />

        <path
          d={brainPath}
          fill="none"
          stroke="#075985"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />

        <path
          d={brainPath}
          fill="none"
          stroke="url(#cyberRibbonGrad)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d={brainPath}
          fill="none"
          stroke="#e0f2fe"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />

        <path
          d={innerPath}
          fill="url(#cyberBrainGlow)"
          className="transition-all duration-700"
        />

        <g filter="url(#cloudSoftShadow)">
          <path
            d="
              M 470 120
              C 470 95, 450 75, 415 65
              C 380 55, 340 60, 310 80
              C 275 60, 230 65, 205 95
              C 180 125, 185 165, 200 190
              C 170 210, 160 250, 175 285
              C 190 320, 230 335, 260 330
              C 280 360, 320 375, 360 370
              C 410 365, 445 330, 455 290
              C 468 240, 470 170, 470 120
              Z
            "
            fill="url(#cloudVolumeA)"
          />

          <path
            d="
              M 470 260
              C 450 250, 410 255, 380 275
              C 345 255, 300 260, 275 290
              C 245 280, 210 295, 195 325
              C 180 355, 190 395, 215 420
              C 195 445, 195 480, 215 510
              C 235 540, 275 555, 310 545
              C 335 575, 380 585, 420 575
              C 455 565, 470 540, 470 500
              L 470 260
              Z
            "
            fill="url(#cloudVolumeB)"
          />

          <path
            d="
              M 465 140
              C 430 130, 375 145, 350 180
              C 320 170, 280 185, 260 215
              C 235 245, 245 290, 275 315
              C 260 345, 275 385, 305 405
              C 335 425, 380 420, 410 395
              C 440 405, 465 390, 465 350
              L 465 140
              Z
            "
            fill="url(#cloudVolumeC)"
          />

          <path
            d="
              M 465 300
              C 435 295, 395 315, 375 345
              C 345 340, 315 360, 305 390
              C 290 425, 310 465, 345 480
              C 335 505, 350 535, 380 545
              C 415 555, 455 535, 465 500
              L 465 300
              Z
            "
            fill="url(#cloudVolumeA)"
            opacity="0.9"
          />
        </g>

        <path
          d="
            M 230 520
            C 260 495, 300 510, 335 490
            C 370 470, 410 480, 440 460
          "
          stroke="#38bdf8"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
          fill="none"
        />
        <path
          d="
            M 265 540
            C 295 520, 330 530, 360 515
            C 390 500, 420 508, 445 495
          "
          stroke="#0284c7"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.65"
          fill="none"
        />

        <path
          d="M 480 80 L 480 540"
          stroke="#38bdf8"
          strokeWidth="2.5"
          opacity="0.4"
          strokeDasharray="4 6"
        />
      </svg>

      {/* 5. BALANCED CONTENT CONTAINER (Inside Cloud Boundaries) */}
      <div className="absolute top-[10%] sm:top-[11%] md:top-[12%] left-[20%] sm:left-[19%] right-[16%] sm:right-[15%] bottom-[7%] sm:bottom-[6%] z-20 flex flex-col justify-start py-0.5">
        <div key={activeService.id} className="animate-fade-in flex flex-col items-center text-center w-full">
          {/* Active Service Floating Emblem Badge - Centered */}
          <div className="mb-1.5 sm:mb-2 flex items-center justify-center flex-shrink-0">
            <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-108">
              <div className="absolute -inset-2.5 bg-sky-400/50 rounded-full blur-md opacity-85 group-hover:opacity-100 transition-opacity animate-pulse-glow" />
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-[#0a2350] via-[#0d3478] to-[#1e58b8] flex items-center justify-center shadow-lg border border-sky-300/60 p-1 sm:p-2">
                <ServiceIcon
                  serviceId={activeService.id}
                  iconName={activeService.icon}
                  isGlowing={true}
                  className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 md:w-6 md:h-6"
                />
              </div>
            </div>
          </div>

          {/* Category Tag with Number */}
          <div className="mb-1 sm:mb-1.5 flex items-center justify-center gap-1.5 flex-shrink-0 w-full px-2">
            <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full text-[8.5px] sm:text-[10px] md:text-[10.5px] font-black tracking-[0.12em] text-[#0284c7] uppercase bg-sky-50/95 border border-sky-200/80 shadow-xs flex-shrink-0 max-w-[88%] truncate">
              <span className="font-mono text-sky-600 font-black">{activeService.number}.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] animate-pulse" />
              <span className="truncate">{activeService.tag}</span>
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[14px] sm:text-[17px] md:text-[21px] lg:text-[23px] font-black text-[#081d3f] leading-[1.2] tracking-tight mb-1 sm:mb-2 flex-shrink-0 text-center w-full px-1">
            {activeService.title}
          </h2>

          {/* Accent Line */}
          <div className="w-[60px] sm:w-[90px] h-[2.5px] bg-slate-200/70 rounded-full mb-1.5 sm:mb-2.5 overflow-hidden flex shadow-xs flex-shrink-0 mx-auto">
            <div className="w-[30px] sm:w-[45px] h-full bg-gradient-to-r from-[#1d4ed8] via-[#0284c7] to-[#38bdf8] rounded-full animate-pulse mx-auto" />
          </div>

          {/* Complete Description Paragraph */}
          <div className="w-full">
            <p className="text-[#334155] text-[10.5px] sm:text-[11.5px] md:text-[12.5px] lg:text-[13px] leading-[1.5] sm:leading-[1.6] font-normal text-center">
              {activeService.description}
            </p>
          </div>

          {/* Feature Chips */}
          {activeService.features && (
            <div className="mt-1.5 sm:mt-2.5 flex flex-wrap gap-1 sm:gap-1.5 max-w-[270px] sm:max-w-[310px] flex-shrink-0">
              {activeService.features.map((feat, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[9.5px] md:text-[10.5px] font-bold bg-white/95 border border-sky-100 text-[#0c1e3e] shadow-xs"
                >
                  <span className="w-1 h-1 rounded-full bg-[#38bdf8] mr-1" />
                  {feat}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * ============================================================================
 * 4. SERVICE NODES COMPONENT
 * 5 visible cards in a scrolling track with Up/Down buttons and middle glowing card.
 * ============================================================================
 */
function ServiceNodes({
  services,
  startIndex,
  onHoverChange,
  onUp,
  onDown,
  onCardClick,
}) {
  const total = services.length

  const visibleItems = [0, 1, 2, 3, 4].map((offset) => {
    const serviceIndex = (startIndex + offset) % total
    return {
      service: services[serviceIndex],
      serviceIndex,
      slotOffset: offset,
      isMiddle: offset === 2,
    }
  })

  return (
    <div
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      className="relative flex items-center justify-center gap-2 sm:gap-4.5 z-20 w-full max-w-[370px] sm:max-w-none"
    >
      <div
        className="relative w-[280px] sm:w-[335px] md:w-[355px] select-none [--slot-h:102px] sm:[--slot-h:120px] h-[calc(5*var(--slot-h))]"
        style={{ clipPath: 'inset(0px -80px 0px -60px)' }}
      >
        <div className="flex flex-col">
          {visibleItems.map(({ service, serviceIndex, slotOffset, isMiddle }) => {
            const shouldGlow = isMiddle

            return (
              <div
                key={`${service.id}-${slotOffset}`}
                onClick={() => onCardClick && onCardClick(serviceIndex)}
                title={`Select ${service.line1} ${service.line2}`}
                className="relative h-[var(--slot-h)] flex-shrink-0 flex items-center cursor-pointer group transition-all duration-300"
              >
                <div className="relative flex-shrink-0 z-20 w-[64px] h-[64px] sm:w-20 sm:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-103">
                  {shouldGlow ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute -inset-2.5 rounded-full bg-cyan-400/40 blur-lg animate-pulse" />
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-300 to-blue-400 blur-[1.5px]" />
                      <div className="relative w-[64px] h-[64px] sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#1d4ed8] via-[#0284c7] to-[#38bdf8] p-1 shadow-[0_0_24px_rgba(56,189,248,0.85)] border-2 border-white flex items-center justify-center">
                        <ServiceIcon
                          serviceId={service.id}
                          iconName={service.icon}
                          isGlowing={true}
                          className="w-[26px] h-[26px] sm:w-[32px] sm:h-[32px]"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-[64px] h-[64px] sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#e2e8f0] p-[4px] sm:p-[5px] shadow-[0_8px_18px_rgba(100,116,139,0.2),_0_2px_6px_rgba(100,116,139,0.1),_inset_0_2px_3px_rgba(255,255,255,1)] border border-[#d8e2ec] group-hover:border-sky-300 flex items-center justify-center transition-all duration-300">
                      <div className="w-full h-full rounded-full border-[1.8px] sm:border-[2.2px] border-[#2563eb]/75 bg-gradient-to-b from-white via-[#fafcff] to-[#f1f5f9] shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.05)] flex items-center justify-center">
                        <ServiceIcon
                          serviceId={service.id}
                          iconName={service.icon}
                          isGlowing={false}
                          className="w-[26px] h-[26px] sm:w-[32px] sm:h-[32px]"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className={`-ml-7 sm:-ml-9 pl-9 sm:pl-13 pr-4 sm:pr-8 h-[56px] sm:h-[68px] rounded-r-full rounded-l-full flex flex-col justify-center min-w-[200px] sm:min-w-[250px] transition-all duration-500 ${
                    shouldGlow
                      ? 'bg-white shadow-[0_8px_24px_rgba(14,165,233,0.15),_0_2px_8px_rgba(0,0,0,0.03)] border border-sky-200/90 scale-[1.02] translate-x-1'
                      : 'bg-white/95 group-hover:bg-white shadow-[0_4px_14px_rgba(148,163,184,0.12)] group-hover:shadow-[0_6px_20px_rgba(14,165,233,0.12)] border border-white group-hover:border-sky-200 group-hover:translate-x-0.5'
                  }`}
                >
                  <span className="text-[13.5px] sm:text-[17px] md:text-[18px] font-extrabold text-[#0c1e3e] leading-[1.2] tracking-tight">
                    {service.line1}
                  </span>
                  <span className="text-[13.5px] sm:text-[17px] md:text-[18px] font-extrabold text-[#0c1e3e] leading-[1.2] tracking-tight">
                    {service.line2}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full bg-white/90 backdrop-blur-md shadow-[0_8px_20px_rgba(100,116,139,0.18)] border border-white/90 flex-shrink-0">
        <button
          onClick={onUp}
          title="Previous Card (Up)"
          className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-b from-white via-slate-50 to-[#edf2f7] hover:from-white hover:to-sky-50 shadow-[0_4px_10px_rgba(100,116,139,0.2),_inset_0_2px_3px_rgba(255,255,255,1)] border border-slate-200/70 hover:border-sky-400 flex items-center justify-center text-[#0c1e3e] hover:text-[#0284c7] hover:scale-108 active:scale-95 transition-all duration-200 cursor-pointer group"
        >
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.6] transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>

        <div className="w-4 sm:w-5 h-[1.5px] bg-slate-200/80 rounded-full" />

        <button
          onClick={onDown}
          title="Next Card (Down)"
          className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-b from-white via-slate-50 to-[#edf2f7] hover:from-white hover:to-sky-50 shadow-[0_4px_10px_rgba(100,116,139,0.2),_inset_0_2px_3px_rgba(255,255,255,1)] border border-slate-200/70 hover:border-sky-400 flex items-center justify-center text-[#0c1e3e] hover:text-[#0284c7] hover:scale-108 active:scale-95 transition-all duration-200 cursor-pointer group"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.6] transition-transform duration-200 group-hover:translate-y-0.5" />
        </button>
      </div>
    </div>
  )
}

/**
 * ============================================================================
 * 5. MOBILE 5-NODE HORIZONTAL ROW (ABOVE CLOUD)
 * 5 cards in a flat horizontal row: 2 on left, 1 in the middle (glowing), 2 on right.
 * Whichever card is in the middle, its description is displayed inside the cloud below.
 * ============================================================================
 */
function MobileServiceNodes({
  services,
  currentMiddleIndex,
  onSelect,
  onPrev,
  onNext,
  onHoverChange,
}) {
  const total = services.length

  // 5 items in a flat row: [-2, -1, 0, 1, 2]
  // 0 is the MIDDLE active glowing item
  const items = [-2, -1, 0, 1, 2].map((offset) => {
    const serviceIndex = (currentMiddleIndex + offset + total) % total
    return {
      service: services[serviceIndex],
      serviceIndex,
      offset,
      isMiddle: offset === 0,
    }
  })

  return (
    <div
      onMouseEnter={() => onHoverChange && onHoverChange(true)}
      onMouseLeave={() => onHoverChange && onHoverChange(false)}
      onTouchStart={() => onHoverChange && onHoverChange(true)}
      onTouchEnd={() => onHoverChange && onHoverChange(false)}
      className="w-full flex flex-col items-center justify-center z-20 mb-2 select-none"
    >
      {/* 5 Flat Icons Row flanked by Left & Right Arrow Controls */}
      <div className="flex items-center justify-center gap-1 sm:gap-2.5 px-1 py-1.5 w-full max-w-[420px]">
        {/* Previous Button (Left Arrow) */}
        <button
          onClick={onPrev}
          title="Previous Service"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 hover:bg-white shadow-[0_2px_8px_rgba(100,116,139,0.18)] border border-slate-200/80 hover:border-sky-300 flex items-center justify-center text-[#0c1e3e] hover:text-[#0284c7] active:scale-95 transition-all flex-shrink-0 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 stroke-[2.4]" />
        </button>

        {/* 5 Flat Icons: 2 Left, 1 Middle, 2 Right */}
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          {items.map(({ service, serviceIndex, offset, isMiddle }) => {
            if (isMiddle) {
              // 1 IN THE MIDDLE: Glowing, larger, active!
              return (
                <div
                  key={`${service.id}-${offset}`}
                  onClick={() => onSelect(serviceIndex)}
                  title={`${service.line1} ${service.line2}`}
                  className="relative flex-shrink-0 flex items-center justify-center cursor-pointer transition-transform duration-300 scale-105"
                >
                  <div className="relative w-[58px] h-[58px] sm:w-[66px] sm:h-[66px] flex items-center justify-center">
                    {/* Glowing Auras */}
                    <div className="absolute -inset-2.5 rounded-full bg-cyan-400/40 blur-lg animate-pulse" />
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-300 to-blue-400 blur-[1.5px]" />
                    {/* Glowing Disc */}
                    <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-[#1d4ed8] via-[#0284c7] to-[#38bdf8] p-1 shadow-[0_0_24px_rgba(56,189,248,0.9)] border-2 border-white flex items-center justify-center">
                      <ServiceIcon
                        serviceId={service.id}
                        iconName={service.icon}
                        isGlowing={true}
                        className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
                      />
                    </div>
                  </div>
                </div>
              )
            }

            // 4 ON TWO SIDES (2 Left, 2 Right): Porcelain 3D buttons
            const isFar = Math.abs(offset) === 2
            const sizeClass = isFar
              ? 'w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] opacity-75'
              : 'w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] opacity-90'
            const iconSize = isFar
              ? 'w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]'
              : 'w-[19px] h-[19px] sm:w-[22px] sm:h-[22px]'

            return (
              <div
                key={`${service.id}-${offset}`}
                onClick={() => onSelect(serviceIndex)}
                title={`${service.line1} ${service.line2}`}
                className={`relative flex-shrink-0 flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-108 hover:opacity-100 ${sizeClass}`}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#e2e8f0] p-[3px] shadow-[0_4px_12px_rgba(100,116,139,0.18),inset_0_1.5px_2px_rgba(255,255,255,1)] border border-[#d8e2ec] hover:border-sky-300 flex items-center justify-center transition-all">
                  <div className="w-full h-full rounded-full border-[1.6px] border-[#2563eb]/75 bg-gradient-to-b from-white via-[#fafcff] to-[#f1f5f9] flex items-center justify-center">
                    <ServiceIcon
                      serviceId={service.id}
                      iconName={service.icon}
                      isGlowing={false}
                      className={iconSize}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Next Button (Right Arrow) */}
        <button
          onClick={onNext}
          title="Next Service"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 hover:bg-white shadow-[0_2px_8px_rgba(100,116,139,0.18)] border border-slate-200/80 hover:border-sky-300 flex items-center justify-center text-[#0c1e3e] hover:text-[#0284c7] active:scale-95 transition-all flex-shrink-0 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 stroke-[2.4]" />
        </button>
      </div>

      {/* Active Middle Card Name Pill */}
      <div className="mt-1 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/90 border border-sky-200/80 shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] animate-pulse" />
        <span className="text-[11px] sm:text-xs font-black text-[#0c1e3e] tracking-tight">
          {services[currentMiddleIndex].line1} {services[currentMiddleIndex].line2}
        </span>
      </div>

      {/* Animated Conduit Beaming Down into Cloud Dome */}
      <div className="flex flex-col items-center justify-center mt-1.5 -mb-1 select-none">
        <div className="w-[2px] h-3.5 sm:h-5 bg-gradient-to-b from-[#0284c7] via-[#38bdf8] to-[#0ea5e9] animate-pulse" />
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#1d4ed8] via-[#0284c7] to-[#38bdf8] shadow-[0_0_10px_rgba(56,189,248,0.95)] border border-white flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-white animate-ping" />
        </div>
        <div className="w-[2px] h-3.5 sm:h-5 bg-gradient-to-b from-[#0ea5e9] via-[#38bdf8] to-[#0284c7] animate-pulse" />
      </div>
    </div>
  )
}

/**
 * ============================================================================
 * 6. MAIN AI & MACHINE LEARNING SHOWCASE
 * Combines header, cloud brain, responsive conduit, carousel nodes, and 56-card bar.
 * ============================================================================
 */
export function AIMachineLearningShowcase() {
  const [startIndex, setStartIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const total = servicesData.length
  const currentMiddleIndex = (startIndex + 2) % total
  const activeService = servicesData[currentMiddleIndex]

  // Periodic automatic scroll every 4 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % total)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused, total])

  // Direct Jump: jump any specific card directly into the glowing middle slot
  const jumpToService = (targetIndex) => {
    const newStartIndex = (targetIndex - 2 + total) % total
    setStartIndex(newStartIndex)
  }

  // Up Arrow (Desktop Top Button & Mobile Left Button): Move to Previous Card
  const handleUp = () => {
    jumpToService((currentMiddleIndex - 1 + total) % total)
  }

  // Down Arrow (Desktop Bottom Button & Mobile Right Button): Move to Next Card
  const handleDown = () => {
    jumpToService((currentMiddleIndex + 1) % total)
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-8 px-3 sm:px-6 overflow-hidden bg-[#f1f5f8]">
      {/* Embedded CSS keyframe animations */}
      <style>{embeddedStyles}</style>

      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[650px] h-[650px] bg-sky-200/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-blue-200/20 rounded-full blur-[130px]" />
      </div>

      {/* Page Header: Heading & Description */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[850px] mx-auto mb-6 sm:mb-10 px-4 select-none">
        <h1 className="text-2xl sm:text-4xl md:text-[44px] font-black text-[#081d3f] tracking-tight leading-[1.18] mb-2.5 sm:mb-3">
          AI &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d4ed8] via-[#0284c7] to-[#38bdf8]">
            Machine Learning
          </span>
        </h1>

        <p className="text-[13px] sm:text-[15px] md:text-[16px] text-[#475569] leading-relaxed max-w-3xl font-medium">
          IBCS AI & Machine Learning focuses on developing intelligent algorithms, predictive models, and data-driven solutions to automate complex processes and derive actionable insights. We empower organisations to leverage artificial intelligence for enhanced decision-making and innovation.
        </p>

        <div className="flex items-center justify-center gap-2 mt-3.5 sm:mt-4.5">
          <div className="w-10 sm:w-16 h-[2px] bg-gradient-to-r from-transparent to-[#38bdf8]" />
          <div className="w-2 h-2 rounded-full bg-[#0284c7] shadow-[0_0_8px_rgba(2,132,199,0.7)]" />
          <div className="w-10 sm:w-16 h-[2px] bg-gradient-to-l from-transparent to-[#38bdf8]" />
        </div>
      </div>

      {/* 1. Main Graphic Showcase */}
      <div className="relative z-10 w-full max-w-[1240px]">
        {/* PHONE / MOBILE VIEW (< lg:):
            5 items in a flat row ABOVE the cloud: 2 Left, 1 Middle (glowing), 2 Right.
            Whichever card is in the middle, its description is displayed inside the cloud below. */}
        <div className="lg:hidden flex flex-col items-center w-full">
          {/* 5 Flat Icons Above Cloud with Left & Right Slide Buttons */}
          <MobileServiceNodes
            services={servicesData}
            currentMiddleIndex={currentMiddleIndex}
            onSelect={jumpToService}
            onPrev={handleUp}
            onNext={handleDown}
            onHoverChange={setIsPaused}
          />

          {/* 3D Brain Graphic Below with Active Middle Card Description Inside */}
          <div className="relative flex-shrink-0 z-20 w-full flex justify-center">
            <BrainGraphic activeService={activeService} />
          </div>
        </div>

        {/* DESKTOP VIEW (lg:):
            Exact desktop screen: Side-by-side (Cloud on left, circuit line, vertical 5 nodes on right) */}
        <div className="hidden lg:flex flex-row items-center justify-center w-full gap-0">
          {/* Left: 3D Brain Graphic */}
          <div className="relative flex-shrink-0 z-20">
            <BrainGraphic activeService={activeService} />
          </div>

          {/* Center: Desktop Circuit Line */}
          <div className="relative flex-shrink-0 w-[150px] h-[600px] z-10 -ml-2 -mr-1 pointer-events-none">
            <ConnectingLine activeIndex={2} />
          </div>

          {/* Right: 5 Visible Service Nodes with Arrow Controls */}
          <div className="relative flex-shrink-0 z-20">
            <ServiceNodes
              services={servicesData}
              startIndex={startIndex}
              onHoverChange={setIsPaused}
              onUp={handleUp}
              onDown={handleDown}
              onCardClick={jumpToService}
            />
          </div>
        </div>
      </div>

      {/* 2. Bottom Number Navigation: Jump directly to any card (01 to 56) */}
      <div className="relative z-20 mt-8 flex flex-col items-center gap-2 max-w-[1040px] w-full px-3">
        <div className="flex items-center justify-between w-full max-w-[900px] px-2 text-[11px] font-bold tracking-[0.14em] text-slate-400 uppercase select-none">
          <span>Direct Service Selection (56 Services)</span>
          <span className="text-sky-600 font-mono font-black">
            Card {String(currentMiddleIndex + 1).padStart(2, '0')} of 56
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full py-2.5 px-3 scrollbar-thin scrollbar-thumb-sky-200 justify-start sm:justify-center flex-nowrap sm:flex-wrap max-h-[140px]">
          {servicesData.map((service, index) => {
            const isCurrent = currentMiddleIndex === index
            const numberStr = String(index + 1).padStart(2, '0')

            return (
              <button
                key={service.id}
                onClick={() => jumpToService(index)}
                title={`${numberStr}. ${service.title}`}
                className={`group relative flex items-center justify-center min-w-[36px] h-[32px] px-2 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer select-none flex-shrink-0 ${
                  isCurrent
                    ? 'bg-gradient-to-tr from-[#1d4ed8] via-[#0284c7] to-[#38bdf8] text-white shadow-[0_0_18px_rgba(56,189,248,0.85)] scale-110 border-2 border-white'
                    : 'bg-white/90 hover:bg-white text-[#0c1e3e] shadow-xs border border-slate-200/70 hover:border-sky-300 hover:scale-105'
                }`}
              >
                <span>{numberStr}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/**
 * ============================================================================
 * 6. ROOT APPLICATION WRAPPER & AUTO-MOUNT
 * Standalone application wrapper that auto-mounts to #root.
 * ============================================================================
 */
export default function AIMachineLearning({ onClose, onHome }) {
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

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start bg-[#f1f5f8] text-[#1e293b] font-['Plus_Jakarta_Sans',system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] m-0 p-0 overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-1 flex items-center justify-start gap-3 z-30">
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

      <AIMachineLearningShowcase />
    </main>
  );
}
