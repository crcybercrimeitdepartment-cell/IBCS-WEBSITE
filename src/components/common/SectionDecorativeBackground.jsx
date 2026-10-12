import React, { useEffect, useRef, useState } from 'react';

/**
 * SectionDecorativeBackground
 * 
 * High-performance, GPU-accelerated decorative & interactive background component
 * featuring:
 * 1. Interactive cursor-follow ambient spotlight aura (buttery smooth 60/120fps with zero React re-renders)
 * 2. Interactive parallax floating 3D glass spheres with specular highlights
 * 3. Soft ambient radial lighting orbs (matching brand teal/cyan palette)
 * 4. Distinct corner dot matrix grids
 * 5. Bespoke translucent wave curves and vector ribbons tailored per section variant
 * 6. Subtle technical cyber grid lines
 * 7. 100% pointer-events-none ensuring zero interference with interactive page elements
 */
export default function SectionDecorativeBackground({ variant = 'default', showGrid = true, className = '' }) {
  const containerRef = useRef(null);
  const spotlightRef = useRef(null);
  const sphere1Ref = useRef(null);
  const sphere2Ref = useRef(null);
  const sphere3Ref = useRef(null);
  const sphere4Ref = useRef(null);
  const rafIdRef = useRef(null);
  const [hasPointer, setHasPointer] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const parent = container.parentElement;
    if (!parent) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isInside = false;

    // Check pointer capabilities
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    setHasPointer(supportsHover);

    const onPointerEnter = (e) => {
      isInside = true;
      const rect = parent.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      currentX = targetX;
      currentY = targetY;
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = '1';
      }
    };

    const onPointerMove = (e) => {
      if (!isInside) isInside = true;
      const rect = parent.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const onPointerLeave = () => {
      isInside = false;
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = '0';
      }
    };

    // Smooth lerp loop for spotlight and sphere parallax
    const renderLoop = () => {
      if (isInside) {
        // Linear interpolation for silky smoothness
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;

        const rect = parent.getBoundingClientRect();
        const normX = (currentX / (rect.width || 1)) - 0.5; // -0.5 to 0.5
        const normY = (currentY / (rect.height || 1)) - 0.5; // -0.5 to 0.5

        if (spotlightRef.current) {
          spotlightRef.current.style.transform = `translate3d(${currentX - 260}px, ${currentY - 260}px, 0)`;
        }

        // Subtly parallax floating spheres
        if (sphere1Ref.current) {
          sphere1Ref.current.style.transform = `translate3d(${normX * 22}px, ${normY * 18}px, 0)`;
        }
        if (sphere2Ref.current) {
          sphere2Ref.current.style.transform = `translate3d(${normX * -26}px, ${normY * -20}px, 0)`;
        }
        if (sphere3Ref.current) {
          sphere3Ref.current.style.transform = `translate3d(${normX * 16}px, ${normY * -14}px, 0)`;
        }
        if (sphere4Ref.current) {
          sphere4Ref.current.style.transform = `translate3d(${normX * -18}px, ${normY * 15}px, 0)`;
        }
      }

      rafIdRef.current = requestAnimationFrame(renderLoop);
    };

    parent.addEventListener('pointerenter', onPointerEnter);
    parent.addEventListener('pointermove', onPointerMove);
    parent.addEventListener('pointerleave', onPointerLeave);
    rafIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      parent.removeEventListener('pointerenter', onPointerEnter);
      parent.removeEventListener('pointermove', onPointerMove);
      parent.removeEventListener('pointerleave', onPointerLeave);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // Variant-specific SVG wave contours and light ribbons
  const renderWaveVector = () => {
    switch (variant) {
      case 'architecture':
        return (
          <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-55" viewBox="0 0 1440 700" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="archWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#FFF8DC" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M-100,200 C300,50 700,380 1150,180 C1350,80 1500,220 1600,160 L1600,-50 L-100,-50 Z" fill="url(#archWaveGrad)" />
            <path d="M-100,550 C350,380 800,680 1300,480 C1450,420 1550,560 1650,500" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
            <path d="M-50,220 C350,400 850,150 1350,360" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
          </svg>
        );

      case 'government':
        return (
          <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-50" viewBox="0 0 1440 700" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="govRibbonGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FFF8DC" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M-100,480 C300,280 750,580 1250,380 C1420,320 1520,460 1650,420 L1650,750 L-100,750 Z" fill="url(#govRibbonGrad)" />
            <path d="M-50,180 C400,320 850,120 1350,310" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.75" />
            <path d="M-100,520 C350,350 800,620 1300,430" stroke="#FFFFFF" strokeWidth="2" opacity="0.6" />
          </svg>
        );

      case 'legal':
        return (
          <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-50" viewBox="0 0 1440 700" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="legalRibbon" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#FFF8DC" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <path d="M-100,220 C250,80 800,460 1350,220 C1450,170 1550,260 1650,290 L1650,-50 L-100,-50 Z" fill="url(#legalRibbon)" />
            <path d="M-50,460 C350,300 800,580 1300,390" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
            <path d="M-100,160 C300,320 750,120 1350,280" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.65" />
          </svg>
        );

      case 'education':
        return (
          <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-55" viewBox="0 0 1440 700" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="eduWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#FFF8DC" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <path d="M-100,500 C200,300 600,600 1100,380 C1350,270 1500,450 1600,350 L1600,750 L-100,750 Z" fill="url(#eduWaveGrad)" />
            <path d="M-50,220 C350,380 850,160 1350,350" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
            <path d="M-100,530 C300,370 750,620 1250,430" stroke="#FFFFFF" strokeWidth="2" opacity="0.7" />
          </svg>
        );

      case 'ip':
        return (
          <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-50" viewBox="0 0 1440 700" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="ipWaveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#FFF8DC" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M-100,280 C250,80 800,480 1350,220 C1450,170 1550,260 1650,300 L1650,750 L-100,750 Z" fill="url(#ipWaveGrad)" opacity="0.7" />
            <path d="M-50,160 C350,320 850,110 1350,300" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
            <path d="M-100,540 C300,390 750,640 1250,450" stroke="#FFFFFF" strokeWidth="2" opacity="0.65" />
          </svg>
        );

      case 'commercial':
        return (
          <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-55" viewBox="0 0 1440 700" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="commGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FFF8DC" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M-100,540 C350,360 800,640 1300,440 C1450,390 1550,520 1650,470 L1650,750 L-100,750 Z" fill="url(#commGrad)" />
            <path d="M-50,190 C350,340 850,140 1350,320" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
            <path d="M-100,560 C300,410 750,660 1250,470" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.6" />
          </svg>
        );

      case 'infrastructure':
        return (
          <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-55" viewBox="0 0 1440 700" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="infraGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#FFF8DC" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M-100,180 C300,50 700,360 1150,170 C1350,70 1500,210 1600,150 L1600,-50 L-100,-50 Z" fill="url(#infraGrad)" />
            <path d="M-100,520 C350,370 800,650 1300,460 C1450,400 1550,540 1650,480" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.75" />
            <path d="M-50,240 C350,410 850,180 1350,380" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
          </svg>
        );

      case 'devops':
        return (
          <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-50" viewBox="0 0 1440 700" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="devopsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#FFF8DC" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <path d="M-100,460 C250,260 700,560 1200,360 C1400,270 1520,440 1650,390 L1650,750 L-100,750 Z" fill="url(#devopsGrad)" />
            <path d="M-50,150 C350,300 850,100 1350,320" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
            <path d="M-100,500 C300,350 750,600 1250,420" stroke="#FFFFFF" strokeWidth="2" opacity="0.65" />
          </svg>
        );

      case 'design':
        return (
          <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-55" viewBox="0 0 1440 700" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="designWaveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FFF8DC" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M-100,240 C300,90 750,420 1200,210 C1400,120 1520,290 1650,250 L1650,-50 L-100,-50 Z" fill="url(#designWaveGrad)" />
            <path d="M-100,540 C350,390 800,670 1300,480" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
            <path d="M-50,210 C350,370 850,150 1350,340" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.65" />
          </svg>
        );

      case 'governance':
        return (
          <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-50" viewBox="0 0 1440 700" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="govGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#FFF8DC" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M-100,500 C300,320 750,600 1250,400 C1450,330 1550,490 1650,440 L1650,750 L-100,750 Z" fill="url(#govGrad)" />
            <path d="M-50,180 C400,330 850,130 1350,310" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.75" />
            <path d="M-100,530 C300,380 750,630 1250,450" stroke="#FFFFFF" strokeWidth="2" opacity="0.6" />
          </svg>
        );

      case 'quantum':
        return (
          <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-55" viewBox="0 0 1440 700" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="quantumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FFF8DC" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M-100,210 C300,60 700,390 1150,190 C1350,90 1500,230 1600,170 L1600,-50 L-100,-50 Z" fill="url(#quantumGrad)" />
            <path d="M-100,520 C350,370 800,660 1300,470 C1450,410 1550,550 1650,490" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.75" />
            <path d="M-50,230 C350,400 850,170 1350,370" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
          </svg>
        );

      case 'iot':
        return (
          <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-50" viewBox="0 0 1440 700" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="iotGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#FFF8DC" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M-100,480 C300,300 750,590 1250,390 C1450,310 1550,470 1650,420 L1650,750 L-100,750 Z" fill="url(#iotGrad)" />
            <path d="M-50,170 C350,320 850,120 1350,300" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
            <path d="M-100,510 C300,360 750,610 1250,430" stroke="#FFFFFF" strokeWidth="2" opacity="0.6" />
          </svg>
        );

      case 'blockchain':
        return (
          <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-55" viewBox="0 0 1440 700" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chainWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#FFF8DC" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M-100,220 C250,80 800,460 1350,220 C1450,170 1550,260 1650,290 L1650,-50 L-100,-50 Z" fill="url(#chainWaveGrad)" />
            <path d="M-100,530 C350,380 800,660 1300,470 C1450,410 1550,550 1650,490" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
            <path d="M-50,200 C350,360 850,140 1350,330" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.65" />
          </svg>
        );

      case 'enterprise':
        return (
          <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-55" viewBox="0 0 1440 700" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="entWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FFF8DC" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <path d="M-100,240 C280,70 780,440 1280,200 C1420,130 1520,240 1650,270 L1650,-50 L-100,-50 Z" fill="url(#entWaveGrad)" />
            <path d="M-100,520 C350,370 800,650 1300,450 C1450,390 1550,530 1650,480" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
            <path d="M-50,190 C350,340 850,130 1350,310" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.65" />
          </svg>
        );

      case 'default':
      default:
        return (
          <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-50" viewBox="0 0 1440 700" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="defaultWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#FFF8DC" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M-100,500 C200,300 600,600 1100,380 C1350,270 1500,450 1600,350 L1600,750 L-100,750 Z" fill="url(#defaultWaveGrad)" />
            <path d="M-50,220 C350,380 850,160 1350,350" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
            <path d="M-100,540 C300,390 750,640 1250,450" stroke="#FFFFFF" strokeWidth="2" opacity="0.7" />
          </svg>
        );
    }
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Technical Grid Overlay */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15, 164, 175, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15, 164, 175, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      )}

      {/* 2. Interactive Cursor-Follow Ambient Spotlight Aura */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[520px] h-[520px] rounded-full opacity-0 pointer-events-none transition-opacity duration-500 ease-out will-change-transform"
        style={{
          background: 'radial-gradient(circle closest-side, rgba(15, 164, 175, 0.16) 0%, rgba(175, 221, 229, 0.1) 45%, transparent 75%)',
          filter: 'blur(35px)',
        }}
      />

      {/* 3. Soft Ambient Radial Lighting Orbs */}
      <div className="absolute top-8 right-16 w-[550px] h-[450px] bg-white/60 rounded-full blur-3xl opacity-85" />
      <div className="absolute -bottom-16 -left-16 w-[600px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/15 via-[#FFF8DC]/25 to-transparent rounded-full blur-3xl opacity-80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#D4AF37]/8 rounded-full blur-3xl opacity-60" />

      {/* 4. Interactive Parallax Floating 3D Glass Spheres */}
      {/* Sphere 1: Top-Left */}
      <div
        ref={sphere1Ref}
        className="absolute top-14 left-16 sm:left-24 w-8 h-8 rounded-full bg-gradient-to-tr from-[#E5C158] via-[#FFF8DC]/80 to-white/95 shadow-[0_8px_20px_rgba(15,164,175,0.25)] border border-white/60 animate-float-1 will-change-transform"
      >
        <span className="absolute top-1.5 left-2 w-2 h-2 rounded-full bg-white/90 blur-[0.6px]" />
      </div>

      {/* Sphere 2: Bottom-Right */}
      <div
        ref={sphere2Ref}
        className="absolute bottom-16 right-16 sm:right-28 w-11 h-11 rounded-full bg-gradient-to-tr from-[#D4AF37]/40 via-[#E5C158]/70 to-white/95 shadow-[0_12px_28px_rgba(15,164,175,0.25)] border border-white/60 animate-float-2 will-change-transform"
      >
        <span className="absolute top-2 left-2.5 w-2.5 h-2.5 rounded-full bg-white/95 blur-[0.8px]" />
      </div>

      {/* Sphere 3: Mid-Left */}
      <div
        ref={sphere3Ref}
        className="absolute top-1/2 -translate-y-16 left-8 sm:left-14 w-6 h-6 rounded-full bg-gradient-to-tr from-[#FFF8DC] to-white/90 shadow-[0_6px_16px_rgba(15,164,175,0.2)] border border-white/50 animate-float-3 will-change-transform"
      >
        <span className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-white/90 blur-[0.4px]" />
      </div>

      {/* Sphere 4: Top-Right */}
      <div
        ref={sphere4Ref}
        className="absolute top-20 right-20 sm:right-36 w-7 h-7 rounded-full bg-gradient-to-tr from-[#FFF8DC] to-white/90 shadow-[0_7px_18px_rgba(15,164,175,0.22)] border border-white/50 animate-float-4 will-change-transform"
      >
        <span className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-white/90 blur-[0.5px]" />
      </div>

      {/* 5. Corner Dot Matrices */}
      {/* Top-Right Matrix */}
      <div className="absolute top-8 right-8 sm:top-10 sm:right-14 grid grid-cols-6 gap-2.5 opacity-25">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={`tr-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
        ))}
      </div>

      {/* Bottom-Left Matrix */}
      <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-14 grid grid-cols-6 gap-2.5 opacity-25">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={`bl-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
        ))}
      </div>

      {/* 6. Variant-Specific Translucent Wave Vector Contours */}
      {renderWaveVector()}
    </div>
  );
}
