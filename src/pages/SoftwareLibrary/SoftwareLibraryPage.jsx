import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import { softwareProducts, softwareLibraryDescription } from './SoftwareLibraryPageData';

/**
 * Splits product title into 2 or 3 balanced lines to fit inside the pendrive casing
 * with larger, clear, legible font sizes and zero numbering.
 * Supports compact mode for mobile screens.
 */
function getTitleLines(text, compact = false) {
  if (!text) return [];
  let clean = text.replace(/^\d+[\.\)]\s*/, '').trim();

  let suffix = '';
  if (clean.endsWith('Software Products')) {
    suffix = 'Software Products';
    clean = clean.replace(/Software Products$/, '').trim();
  } else if (clean.endsWith('Application Products')) {
    suffix = 'Application Products';
    clean = clean.replace(/Application Products$/, '').trim();
  } else if (clean.endsWith('Technology Products')) {
    suffix = 'Technology Products';
    clean = clean.replace(/Technology Products$/, '').trim();
  }

  if (clean === 'Cyber Threat Intelligence') {
    return [
      { text: 'Cyber Threat', size: compact ? 9 : 15, weight: '800' },
      { text: 'Intelligence', size: compact ? 9 : 15, weight: '800' },
      { text: suffix, size: compact ? 7.5 : 12.5, weight: '700', isSub: true },
    ];
  }
  if (clean === 'Cyber Crime Investigation') {
    return [
      { text: 'Cyber Crime', size: compact ? 9 : 15, weight: '800' },
      { text: 'Investigation', size: compact ? 9 : 15, weight: '800' },
      { text: suffix, size: compact ? 7.5 : 12.5, weight: '700', isSub: true },
    ];
  }
  if (clean === 'Cyber Awareness & Safety') {
    return [
      { text: 'Cyber Awareness', size: compact ? 8.5 : 14.5, weight: '800' },
      { text: '& Safety', size: compact ? 8.5 : 14.5, weight: '800' },
      { text: suffix, size: compact ? 7.5 : 12.5, weight: '700', isSub: true },
    ];
  }
  if (clean === 'Cyber Education & Training') {
    return [
      { text: 'Cyber Education', size: compact ? 8.5 : 14.5, weight: '800' },
      { text: '& Training', size: compact ? 8.5 : 14.5, weight: '800' },
      { text: suffix, size: compact ? 7.5 : 12.5, weight: '700', isSub: true },
    ];
  }
  if (clean === 'Cyber Victim Support') {
    return [
      { text: 'Cyber Victim', size: compact ? 9 : 15, weight: '800' },
      { text: 'Support', size: compact ? 9 : 15, weight: '800' },
      { text: suffix, size: compact ? 7.5 : 12.5, weight: '700', isSub: true },
    ];
  }
  if (clean === 'Public Cyber Services') {
    return [
      { text: 'Public Cyber', size: compact ? 9 : 15, weight: '800' },
      { text: 'Services', size: compact ? 9 : 15, weight: '800' },
      { text: suffix, size: compact ? 7.5 : 12.5, weight: '700', isSub: true },
    ];
  }
  if (clean === 'Cyber Law & Legal') {
    return [
      { text: 'Cyber Law', size: compact ? 9 : 15, weight: '800' },
      { text: '& Legal', size: compact ? 9 : 15, weight: '800' },
      { text: suffix, size: compact ? 7.5 : 12.5, weight: '700', isSub: true },
    ];
  }
  if (clean === 'Artificial Intelligence') {
    return [
      { text: 'Artificial', size: compact ? 9.5 : 15.5, weight: '800' },
      { text: 'Intelligence', size: compact ? 9.5 : 15.5, weight: '800' },
      { text: suffix, size: compact ? 7.5 : 12.5, weight: '700', isSub: true },
    ];
  }
  if (compact && clean === 'Digital Forensics') {
    return [
      { text: 'Digital', size: 9.5, weight: '800' },
      { text: 'Forensics', size: 9.5, weight: '800' },
      { text: suffix, size: 7.5, weight: '700', isSub: true },
    ];
  }
  if (compact && clean === 'Law Enforcement') {
    return [
      { text: 'Law', size: 10, weight: '800' },
      { text: 'Enforcement', size: 10, weight: '800' },
      { text: suffix, size: 7.5, weight: '700', isSub: true },
    ];
  }
  if (compact && clean === 'Data Analytics') {
    return [
      { text: 'Data', size: 10, weight: '800' },
      { text: 'Analytics', size: 10, weight: '800' },
      { text: suffix, size: 7.5, weight: '700', isSub: true },
    ];
  }

  return [
    { text: clean, size: compact ? (clean.length > 12 ? 9.5 : 10.5) : (clean.length > 15 ? 16 : 17.5), weight: '800' },
    { text: suffix, size: compact ? 7.5 : 13, weight: '700', isSub: true },
  ];
}

/**
 * 1. HP v165w Mini USB Flash Drive - 100% PURE CSS IMPLEMENTATION (NO SVG)
 */
export function Pendrive({
  title = '',
  orientation = 'horizontal',
  rotationDirection = 'right',
  tiltX = 0,
  tiltY = 0,
  scale = 1,
  animDelay = 0,
  compact = false,
  className = '',
}) {
  const lines = getTitleLines(title, compact);

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none pointer-events-none ${
        compact ? 'py-0.5 px-0.5' : 'py-2 px-1'
      } ${className}`}
    >
      <div
        className={`absolute pointer-events-none rounded-[100%] blur-[2px] bg-slate-900/12 ${
          compact ? '-bottom-0.5 left-2 right-2 h-1.5' : '-bottom-1 left-4 right-6 h-3'
        }`}
      />

      <div
        className={`pendrive-pure-css relative flex items-center cursor-pointer pointer-events-auto ${
          compact ? 'pendrive-compact' : ''
        }`}
      >
        <div
          className={`relative z-0 flex items-center justify-center shrink-0 ${
            compact ? '-mr-1.5' : '-mr-2'
          }`}
          style={{
            width: compact ? '20px' : '35px',
            height: compact ? '42px' : '68px',
            background: 'linear-gradient(145deg, #383838 0%, #1f1f1f 40%, #0d0d0d 100%)',
            borderRadius: compact ? '4px 0 0 4px' : '7px 0 0 7px',
            clipPath: 'polygon(0% 36%, 34% 0%, 100% 0%, 100% 100%, 0% 100%)',
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.25), inset -1px -1px 2px rgba(0,0,0,0.8)',
            border: '1px solid #181818',
          }}
        >
          <div
            className={`rounded-[2px] bg-white border border-neutral-800 shadow-inner ${
              compact ? 'w-1.5 h-3 ml-1' : 'w-3 h-5 ml-1.5'
            }`}
            style={{
              boxShadow: 'inset 0 1.5px 2px rgba(0,0,0,0.6)',
            }}
          />
        </div>

        <div
          className="relative z-10 flex flex-col items-center justify-center text-center shrink-0 overflow-hidden"
          style={{
            width: compact ? '98px' : '166px',
            height: compact ? '48px' : '78px',
            borderRadius: compact ? '5px 8px 8px 5px' : '9px 12px 12px 9px',
            background: `linear-gradient(
              180deg,
              #35a3c6 0%,
              #4bbfe4 10%,
              #5dc8eb 32%,
              #8de1f7 48%,
              #55c3e7 68%,
              #4bbfe4 86%,
              #2790b0 100%
            )`,
            boxShadow: `
              inset 0 2px 2px rgba(255, 255, 255, 0.75),
              inset 0 -2px 3px rgba(10, 60, 80, 0.45),
              inset 2px 0 3px rgba(255, 255, 255, 0.4),
              inset -2px 0 3px rgba(10, 60, 80, 0.35),
              0 6px 14px rgba(3, 105, 161, 0.18),
              0 2px 4px rgba(0, 0, 0, 0.08)
            `,
            border: '0.5px solid rgba(44, 157, 189, 0.8)',
          }}
        >
          <div
            className="absolute inset-x-0 pointer-events-none"
            style={{
              top: compact ? '7px' : '14px',
              height: compact ? '7px' : '14px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 100%)',
              mixBlendMode: 'overlay',
            }}
          />

          <div className="relative z-20 flex flex-col items-center justify-center px-1 pointer-events-none select-none">
            {lines.map((lineObj, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: `${lineObj.size}px`,
                  fontWeight: lineObj.weight,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  letterSpacing: lineObj.isSub ? '0.01em' : '-0.01em',
                  textShadow: '0 1px 2px rgba(2, 132, 199, 0.85), 0 0.5px 0.5px rgba(3, 105, 161, 0.95)',
                  fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  display: 'block',
                  whiteSpace: 'nowrap',
                }}
              >
                {lineObj.text}
              </span>
            ))}
          </div>
        </div>

        <div
          className="pendrive-mouth-css pendrive-mouth-eject relative z-0 shrink-0 flex flex-col items-center justify-center"
          style={{
            width: compact ? '32px' : '52px',
            height: compact ? '30px' : '48px',
            marginLeft: compact ? '-3px' : '-5px',
            borderRadius: '0 2px 2px 0',
            animationDelay: `${animDelay + 60}ms`,
            background: `linear-gradient(
              180deg,
              #9e9893 0%,
              #cfccc9 10%,
              #f5f5f4 25%,
              #e7e5e4 45%,
              #a8a29e 60%,
              #e7e5e4 78%,
              #fafaf9 90%,
              #8f8984 100%
            )`,
            border: '0.8px solid #78716c',
            borderLeft: '1px solid #44403c',
            boxShadow: `
              inset 0 1px 1px rgba(255, 255, 255, 0.85),
              inset 0 -1px 2px rgba(0, 0, 0, 0.4),
              2px 4px 8px rgba(0,0,0,0.1)
            `,
          }}
        >
          <div
            className="absolute left-0 w-2 h-[1px] bg-stone-400 opacity-70"
            style={{ top: '50%' }}
          />

          <div
            className={`flex flex-col justify-between ${
              compact ? 'h-[16px] w-[8px] ml-1' : 'h-[30px] w-[12px] ml-2.5'
            }`}
          >
            <div
              className={`rounded-[1px] bg-[#141210] border border-stone-500 shadow-inner flex items-center justify-evenly px-0.5 ${
                compact ? 'w-[8px] h-[6px]' : 'w-[12px] h-[10px]'
              }`}
            >
              <div className={`bg-amber-400/90 rounded-[0.5px] ${compact ? 'w-[1px] h-[2px]' : 'w-[2px] h-[3.5px]'}`} />
              <div className={`bg-amber-400/90 rounded-[0.5px] ${compact ? 'w-[1px] h-[2px]' : 'w-[2px] h-[3.5px]'}`} />
            </div>

            <div
              className={`rounded-[1px] bg-[#141210] border border-stone-500 shadow-inner flex items-center justify-evenly px-0.5 ${
                compact ? 'w-[8px] h-[6px]' : 'w-[12px] h-[10px]'
              }`}
            >
              <div className={`bg-amber-400/90 rounded-[0.5px] ${compact ? 'w-[1px] h-[2px]' : 'w-[2px] h-[3.5px]'}`} />
              <div className={`bg-amber-400/90 rounded-[0.5px] ${compact ? 'w-[1px] h-[2px]' : 'w-[2px] h-[3.5px]'}`} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/**
 * Realistic Pure CSS CPU Front Hardware Ports
 */
function CpuUsbPort({ isUsb3 = false, title = "USB Port" }) {
  return (
    <div
      className="h-3.5 w-7 rounded-[2px] bg-[#07080a] border border-zinc-600 shadow-xs flex flex-col justify-between p-[0.8px] overflow-hidden shrink-0 hover:border-zinc-400 transition-colors"
      style={{
        boxShadow: 'inset 0 1.5px 2px rgba(0,0,0,0.95), 0 1px 1px rgba(255,255,255,0.6)',
      }}
      title={title}
    >
      <div
        className={`w-full h-1.5 rounded-[0.5px] flex items-center justify-evenly px-0.5 shadow-2xs ${
          isUsb3 ? 'bg-[#0284c7]' : 'bg-[#e2e8f0]'
        }`}
      >
        <div className="w-[1.2px] h-[0.8px] bg-amber-400 rounded-[0.2px]" />
        <div className="w-[1.2px] h-[0.8px] bg-amber-400 rounded-[0.2px]" />
        <div className="w-[1.2px] h-[0.8px] bg-amber-400 rounded-[0.2px]" />
        <div className="w-[1.2px] h-[0.8px] bg-amber-400 rounded-[0.2px]" />
      </div>
      <div className="w-full h-1 bg-[#050608]" />
    </div>
  );
}

function CpuAudioJack({ isMic = false, title }) {
  return (
    <div
      className="w-3 h-3 rounded-full border border-zinc-500 bg-zinc-300 flex items-center justify-center p-[1px] shadow-sm shrink-0"
      title={title || (isMic ? "Mic Jack" : "Headphone Jack")}
    >
      <div
        className={`w-full h-full rounded-full border-1.5 flex items-center justify-center ${
          isMic ? 'border-rose-500 bg-zinc-950' : 'border-emerald-500 bg-zinc-950'
        }`}
      >
        <div className="w-1 h-1 rounded-full bg-black shadow-inner" />
      </div>
    </div>
  );
}

function CpuTypeCPort({ title = "USB Type-C Port" }) {
  return (
    <div
      className="w-4.5 h-2.5 rounded-full bg-[#07080a] border border-zinc-600 shadow-inner flex items-center justify-center shrink-0"
      title={title}
    >
      <div className="w-2.5 h-0.8 bg-zinc-400 rounded-full" />
    </div>
  );
}

function CpuCardSlot({ isTf = false, title }) {
  if (isTf) {
    return (
      <div
        className="w-4 h-1.5 rounded-[0.5px] bg-[#07080a] border border-zinc-600 shadow-inner shrink-0"
        title={title || "MicroSD (TF) Port"}
      />
    );
  }
  return (
    <div
      className="w-7 h-2 rounded-[1px] bg-[#07080a] border border-zinc-600 shadow-inner flex items-center justify-end pr-0.5 shrink-0"
      title={title || "SD Card Port"}
    >
      <div className="w-1.5 h-1 bg-zinc-600 rounded-2xs" />
    </div>
  );
}

/**
 * 2. Mobile-Responsive Vertical CPU Tower Workstation Component
 */
export function CpuTowerMobile({
  children,
  currentPage = 1,
  totalPages = 2,
  onPrev,
  onNext,
  onSelectPage,
  onPowerClick,
  isPowerLoading = false,
}) {
  const handlePowerClick = (e) => {
    e?.stopPropagation();
    if (onPowerClick) {
      onPowerClick();
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-[390px] mx-auto select-none px-1.5 py-3">
      <div
        className="relative w-full rounded-[18px] flex flex-col overflow-hidden shadow-2xl border border-[#2b2d32]"
        style={{
          background: 'linear-gradient(178deg, #1c1d21 0%, #131417 40%, #0a0b0d 100%)',
          boxShadow: `
            inset 0 1.5px 2px rgba(255, 255, 255, 0.18),
            inset 0 -2px 3px rgba(0, 0, 0, 0.9),
            inset 2px 0 3px rgba(255, 255, 255, 0.08),
            inset -2px 0 3px rgba(0, 0, 0, 0.9),
            0 20px 40px rgba(0, 0, 0, 0.4),
            0 8px 16px rgba(0, 0, 0, 0.25)
          `,
        }}
      >
        <div className="h-[2px] w-full bg-gradient-to-r from-zinc-500/30 via-white/30 to-zinc-600/30 shadow-xs" />

        {/* TOP SECTION: Upper Bezel with Hardware Ports */}
        <div className="pt-2.5 px-2.5 pb-1 flex flex-col items-center">
          <div
            className="w-full rounded-t-[12px] p-1.5 flex flex-col gap-1 border border-zinc-400/80"
            style={{
              background: 'linear-gradient(180deg, #e4e4e7 0%, #a1a1aa 35%, #71717a 100%)',
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.9), 0 2px 5px rgba(0,0,0,0.35)',
            }}
          >
            {/* Bay 1: Optical Disc Drive + USB Port */}
            <div
              className="h-6 w-full rounded-xs flex items-center justify-between px-2.5 relative overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 45%, #cbd5e1 100%)',
                boxShadow: 'inset 0 1px 1.5px rgba(255,255,255,0.95), 0 1px 2px rgba(0,0,0,0.18)',
                border: '0.8px solid #94a3b8',
              }}
            >
              <div className="flex items-center gap-1.5">
                <div className="h-1 w-20 bg-[#334155] rounded-xs shadow-inner" />
                <span className="text-[7px] font-mono text-slate-600 font-bold uppercase">DVD-RW</span>
              </div>
              <div className="flex items-center gap-2">
                <CpuUsbPort title="Optical Bay USB Port" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_#10b981]" />
                <div className="w-2.5 h-2 rounded-2xs bg-slate-300 border border-slate-400 shadow-2xs cursor-pointer active:scale-95" title="Eject" />
              </div>
            </div>

            {/* Bay 2: Quad CPU USB Ports */}
            <div
              className="h-6 w-full rounded-xs flex items-center justify-between px-2.5"
              style={{
                background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 45%, #cbd5e1 100%)',
                boxShadow: 'inset 0 1px 1.5px rgba(255,255,255,0.95), 0 1px 2px rgba(0,0,0,0.18)',
                border: '0.8px solid #94a3b8',
              }}
            >
              <span className="text-[7.5px] font-mono text-slate-700 font-bold uppercase tracking-wider">USB 3.0 / 2.0</span>
              <div className="flex items-center gap-1.5">
                <CpuUsbPort isUsb3={true} title="USB 3.0 SuperSpeed Port" />
                <CpuUsbPort isUsb3={true} title="USB 3.0 SuperSpeed Port" />
                <CpuUsbPort isUsb3={false} title="USB 2.0 HighSpeed Port" />
                <CpuUsbPort isUsb3={false} title="USB 2.0 HighSpeed Port" />
              </div>
            </div>

            {/* Bay 3: Multi-Card Reader & Dual USB Ports */}
            <div
              className="h-6 w-full rounded-xs flex items-center justify-between px-2.5"
              style={{
                background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 45%, #cbd5e1 100%)',
                boxShadow: 'inset 0 1px 1.5px rgba(255,255,255,0.95), 0 1px 2px rgba(0,0,0,0.18)',
                border: '0.8px solid #94a3b8',
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-[7.5px] font-mono text-slate-700 font-bold uppercase">CARD READER</span>
                <CpuCardSlot title="SD / MMC Card Port" />
                <CpuCardSlot isTf={true} title="MicroSD / TF Port" />
              </div>
              <div className="flex items-center gap-1.5">
                <CpuUsbPort title="USB Port" />
                <CpuUsbPort title="USB Port" />
              </div>
            </div>

            {/* Bay 4: Audio Jacks + Type-C + Dual USB Ports */}
            <div
              className="h-6 w-full rounded-xs flex items-center justify-between px-2.5"
              style={{
                background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 45%, #cbd5e1 100%)',
                boxShadow: 'inset 0 1px 1.5px rgba(255,255,255,0.95), 0 1px 2px rgba(0,0,0,0.18)',
                border: '0.8px solid #94a3b8',
              }}
            >
              <div className="flex items-center gap-2">
                <CpuAudioJack isMic={false} title="Headphone 3.5mm Port" />
                <CpuAudioJack isMic={true} title="Microphone 3.5mm Port" />
                <CpuTypeCPort title="USB Type-C Port" />
              </div>
              <div className="flex items-center gap-1.5">
                <CpuUsbPort isUsb3={true} title="USB 3.0 Port" />
                <CpuUsbPort isUsb3={false} title="USB 2.0 Port" />
              </div>
            </div>

            {/* Two 3.5" Expansion Bays */}
            <div className="flex flex-col gap-0.5 pt-0.5">
              <div
                className="h-5 w-full rounded-xs flex items-center justify-between px-3"
                style={{
                  background: 'linear-gradient(180deg, #f1f5f9 0%, #cbd5e1 100%)',
                  boxShadow: 'inset 0 1px 1.5px rgba(255,255,255,0.9), 0 1px 2px rgba(0,0,0,0.15)',
                  border: '0.8px solid #94a3b8',
                }}
              >
                <span className="text-[7.5px] font-mono text-slate-700 font-bold uppercase">EXPANSION I</span>
                <div className="flex items-center gap-2">
                  <CpuUsbPort isUsb3={true} title="Expansion USB 3.0 Port" />
                  <CpuUsbPort isUsb3={true} title="Expansion USB 3.0 Port" />
                </div>
              </div>

              <div
                className="h-5 w-full rounded-xs flex items-center justify-between px-3"
                style={{
                  background: 'linear-gradient(180deg, #f1f5f9 0%, #cbd5e1 100%)',
                  boxShadow: 'inset 0 1px 1.5px rgba(255,255,255,0.9), 0 1px 2px rgba(0,0,0,0.15)',
                  border: '0.8px solid #94a3b8',
                }}
              >
                <span className="text-[7.5px] font-mono text-slate-700 font-bold uppercase">EXPANSION II</span>
                <div className="flex items-center gap-2">
                  <CpuUsbPort title="Expansion USB 2.0 Port" />
                  <CpuUsbPort title="Expansion USB 2.0 Port" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER SECTION: CLEAN WHITE CARD VAULT DISPLAY CHAMBER */}
        <div className="px-2.5 py-1">
          <div
            className="w-full bg-white rounded-xl overflow-hidden flex flex-col border border-slate-300"
            style={{
              boxShadow: `
                inset 0 2px 4px rgba(0, 0, 0, 0.05),
                0 4px 14px rgba(0, 0, 0, 0.22)
              `,
            }}
          >
            <div className="h-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 flex items-center justify-between px-3 border-b border-slate-700 shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
              </div>
              <div className="flex items-center gap-1.5 opacity-50">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              </div>
            </div>

            <div className="p-2 bg-white flex flex-col items-center justify-center min-h-[260px]">
              {children}
            </div>

            <div className="px-2 py-1.5 border-t border-slate-100 flex items-center justify-between bg-slate-50/90 shrink-0">
              <button
                onClick={onPrev}
                disabled={currentPage === 1}
                className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-2xs transition-all active:scale-95"
              >
                ◀ Prev
              </button>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNum = index + 1;
                  const isActive = currentPage === pageNum;

                  return (
                    <button
                      key={pageNum}
                      onClick={() => onSelectPage && onSelectPage(pageNum)}
                      className={`w-6 h-6 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-sky-500 text-white shadow-xs shadow-sky-500/30 border border-sky-400 scale-105'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={onNext}
                disabled={currentPage === totalPages}
                className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-2xs transition-all active:scale-95"
              >
                Next ▶
              </button>
            </div>
          </div>
        </div>

        {/* LOWER SECTION: Front Panel Controls matching CPU image */}
        <div className="px-2.5 pt-1 pb-3 flex flex-col items-center">
          <div
            className="w-full rounded-b-[14px] p-2.5 flex flex-col items-center gap-2 border border-zinc-400/80"
            style={{
              background: 'linear-gradient(180deg, #71717a 0%, #a1a1aa 45%, #d4d4d8 100%)',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.3)',
            }}
          >
            <div className="flex items-center gap-4 py-0.5">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_#34d399] animate-pulse" />
                <span className="text-[8px] font-mono font-bold text-zinc-900 tracking-wider uppercase">PWR</span>
              </div>
              <div className="flex items-center gap-1">
                <div
                  className={`w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_5px_#fbbf24] transition-all ${
                    isPowerLoading ? 'animate-ping opacity-100 bg-amber-300' : ''
                  }`}
                />
                <span className="text-[8px] font-mono font-bold text-zinc-900 tracking-wider uppercase">HDD</span>
              </div>
            </div>

            {/* Circular Power Button */}
            <div
              onClick={handlePowerClick}
              role="button"
              tabIndex={0}
              className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-md transition-all duration-150 hover:scale-105 active:scale-90 active:shadow-inner ${
                isPowerLoading ? 'scale-95 shadow-inner ring-2 ring-sky-400/50' : ''
              }`}
              style={{
                background: 'linear-gradient(135deg, #f4f4f5 0%, #a1a1aa 50%, #52525b 100%)',
                boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.9), 0 3px 6px rgba(0,0,0,0.4)',
                border: '1.5px solid #d4d4d8',
              }}
              title="System Power / Reload Cards Animation"
            >
              <div
                className="w-5.5 h-5.5 rounded-full flex items-center justify-center border border-zinc-400"
                style={{
                  background: 'linear-gradient(180deg, #3f3f46 0%, #18181b 100%)',
                }}
              >
                <div
                  className={`w-3 h-3 rounded-full border-1.5 border-sky-400 flex items-center justify-center transition-all ${
                    isPowerLoading
                      ? 'shadow-[0_0_12px_#38bdf8] scale-110 border-sky-300'
                      : 'shadow-[0_0_8px_#38bdf8]'
                  }`}
                >
                  <div className="w-0.5 h-1.5 bg-sky-300 rounded-xs -mt-0.5" />
                </div>
              </div>
            </div>

            {/* Front Panel I/O: Vertical USB Port + Red Rocker Switch */}
            <div className="flex items-center justify-center gap-5 w-full">
              <div
                className="w-3 h-5 rounded-2xs bg-[#09090b] border border-zinc-600 shadow-inner flex items-center justify-center"
                title="Front USB Port"
              >
                <div className="w-1 h-3 bg-stone-300 rounded-2xs" />
              </div>

              <div
                onClick={handlePowerClick}
                role="button"
                tabIndex={0}
                className="w-4.5 h-4.5 rounded-2xs bg-rose-600 border border-rose-500 shadow-xs flex items-center justify-center cursor-pointer transition-transform active:scale-90 hover:brightness-110"
                style={{
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.6), 0 1px 3px rgba(0,0,0,0.3)',
                }}
                title="System Reset / Reload Page"
              >
                <div className="w-2 h-0.5 bg-rose-200 rounded-xs" />
              </div>
            </div>

            {/* Bottom Front Access Door */}
            <div
              className="w-32 h-4 rounded-b-xs border border-zinc-600 flex items-center justify-center cursor-pointer"
              style={{
                background: 'linear-gradient(180deg, #18181b 0%, #27272a 100%)',
                boxShadow: 'inset 0 1px 1.5px rgba(0,0,0,0.8)',
              }}
              title="Access Door / Ventilation Flap"
            >
              <div className="w-10 h-0.5 bg-zinc-500 rounded-xs" />
            </div>
          </div>
        </div>

      </div>

      <div className="w-64 h-3.5 bg-slate-900/18 rounded-[100%] blur-md pointer-events-none -mt-1" />
    </div>
  );
}

/**
 * 3. High-Fidelity Pure CSS Retro PC Workstation (Desktop View)
 */
export function RetroComputer({ children }) {
  const [powerOn, setPowerOn] = useState(true);

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-[1100px] mx-auto select-none py-4 px-2">
      
      {/* ============================================================== */}
      {/* 1. CRT COMPUTER MONITOR                                        */}
      {/* ============================================================== */}
      <div className="relative flex flex-col items-center z-20">
        
        {/* Main Monitor Cabinet / Housing */}
        <div
          className="relative flex flex-col items-center justify-between p-5 rounded-[22px]"
          style={{
            width: '920px',
            height: '610px',
            background: 'linear-gradient(175deg, #eae6dc 0%, #dbd6c9 45%, #cec8b8 100%)',
            boxShadow: `
              inset 0 2px 3px rgba(255, 255, 255, 0.8),
              inset 0 -3px 4px rgba(90, 85, 75, 0.4),
              inset 3px 0 4px rgba(255, 255, 255, 0.5),
              inset -3px 0 4px rgba(90, 85, 75, 0.4),
              0 14px 28px rgba(0, 0, 0, 0.18),
              0 4px 8px rgba(0, 0, 0, 0.1)
            `,
            border: '1.5px solid #bcb5a4',
          }}
        >
          {/* Top Bezel Chamfer / Vent Line */}
          <div className="absolute top-2 left-12 right-12 h-[2px] bg-white/40 shadow-sm" />

          {/* Deep Recessed Bezel Frame around CRT Screen */}
          <div
            className="relative w-full flex-1 rounded-[28px] p-4 flex flex-col justify-center items-center overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #b8b2a2 0%, #9e9888 100%)',
              boxShadow: `
                inset 0 4px 8px rgba(40, 38, 32, 0.6),
                inset 0 -3px 6px rgba(255, 255, 255, 0.4),
                inset 4px 0 8px rgba(40, 38, 32, 0.5),
                inset -4px 0 8px rgba(40, 38, 32, 0.5)
              `,
              border: '2px solid #8e8878',
            }}
          >
            {/* Dark Beveled Inner CRT Gasket */}
            <div
              className="relative w-full h-full rounded-[22px] p-2 flex flex-col items-center justify-center overflow-hidden"
              style={{
                background: '#181916',
                boxShadow: 'inset 0 0 14px rgba(0, 0, 0, 0.9)',
              }}
            >
              {/* Actual CRT Screen Glass */}
              <div
                className={`relative w-full h-full rounded-[16px] overflow-hidden flex flex-col transition-all duration-300 ${
                  powerOn ? 'bg-white opacity-100' : 'bg-[#0f1110] opacity-90'
                }`}
                style={{
                  boxShadow: `
                    inset 0 0 24px rgba(0, 0, 0, 0.18),
                    inset 0 2px 6px rgba(255, 255, 255, 0.3)
                  `,
                }}
              >
                {powerOn ? (
                  <>
                    {/* Retro Window Header Bar */}
                    <div className="h-8 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white flex items-center justify-between px-3 shrink-0 border-b border-slate-600 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">💾</span>
                        <span className="text-xs font-bold tracking-wide text-slate-100">
                          Cyber Software Library Explorer 
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-sm bg-slate-600 hover:bg-slate-500 border border-slate-500 flex items-center justify-center text-[9px] font-bold cursor-pointer text-slate-200">
                          _
                        </div>
                        <div className="w-4 h-4 rounded-sm bg-slate-600 hover:bg-slate-500 border border-slate-500 flex items-center justify-center text-[9px] font-bold cursor-pointer text-slate-200">
                          □
                        </div>
                        <div className="w-4 h-4 rounded-sm bg-rose-600 hover:bg-rose-500 border border-rose-500 flex items-center justify-center text-[9px] font-bold cursor-pointer text-white">
                          ×
                        </div>
                      </div>
                    </div>

                    {/* Interactive Content: The Pendrive Grid & Controls */}
                    <div className="flex-1 w-full overflow-hidden flex flex-col justify-between p-2 sm:p-3 bg-white">
                      {children}
                    </div>

                    {/* CRT Subtle Glass Sheen Reflection Line */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-[16px]"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 30%, transparent 60%)',
                      }}
                    />
                  </>
                ) : (
                  /* Screen Powered Off State */
                  <div className="flex-1 flex flex-col items-center justify-center text-stone-500 gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-950 border border-emerald-900" />
                    <span className="text-xs font-mono tracking-widest uppercase">
                      MONITOR STANDBY (NO SIGNAL)
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Monitor Bezel Controls (SYS-V3, Dials, Power Button) */}
          <div className="w-full h-11 flex items-center justify-between px-6 mt-2 pt-1 border-t border-[#c5bfaf]">
            {/* Vintage Monitor Model Badge */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-black tracking-widest text-stone-600 font-mono">
                SYS-V3
              </span>
            </div>

            {/* Dials & Buttons (Brightness, Contrast, Geometry) */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div
                  className="w-3.5 h-3.5 rounded-full border border-stone-400 bg-gradient-to-b from-stone-300 to-stone-400 shadow-sm cursor-pointer"
                  title="Brightness"
                />
                <div
                  className="w-3.5 h-3.5 rounded-full border border-stone-400 bg-gradient-to-b from-stone-300 to-stone-400 shadow-sm cursor-pointer"
                  title="Contrast"
                />
                <div
                  className="w-3.5 h-3.5 rounded-full border border-stone-400 bg-gradient-to-b from-stone-300 to-stone-400 shadow-sm cursor-pointer"
                  title="H-Size"
                />
                <div
                  className="w-3.5 h-3.5 rounded-full border border-stone-400 bg-gradient-to-b from-stone-300 to-stone-400 shadow-sm cursor-pointer"
                  title="V-Size"
                />
              </div>

              {/* Power Switch with Glowing Green Indicator LED */}
              <div
                className="flex items-center gap-2 pl-3 border-l border-stone-400 cursor-pointer"
                onClick={() => setPowerOn((prev) => !prev)}
                title="Toggle Monitor Power"
              >
                <div
                  className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all shadow-md ${
                    powerOn ? 'bg-amber-100 border-amber-400' : 'bg-stone-300 border-stone-500'
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      powerOn
                        ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]'
                        : 'bg-stone-500'
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monitor Swivel Stand Neck & Base */}
        <div className="flex flex-col items-center -mt-1 z-10">
          {/* Swivel Neck Column */}
          <div
            className="w-36 h-6 border-x border-stone-400"
            style={{
              background: 'linear-gradient(90deg, #bcb6a6 0%, #dbd6c8 50%, #beb8a8 100%)',
              boxShadow: 'inset 0 3px 4px rgba(0,0,0,0.2)',
            }}
          />
          {/* Swivel Oval Base Plate */}
          <div
            className="w-72 h-5 rounded-[100%] border border-stone-400 shadow-md"
            style={{
              background: 'linear-gradient(180deg, #eae6db 0%, #cec8b8 100%)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
            }}
          />
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. DESKTOP COMPUTER CASE (PC TOWER CHASSIS UNDER MONITOR)      */}
      {/* ============================================================== */}
      <div
        className="relative z-10 -mt-2.5 rounded-t-[10px] rounded-b-[4px] flex flex-col justify-between overflow-hidden shadow-2xl"
        style={{
          width: '780px',
          height: '148px',
          background: 'linear-gradient(180deg, #eae5db 0%, #ded9cd 40%, #c9c3b4 100%)',
          boxShadow: `
            inset 0 2px 2px rgba(255, 255, 255, 0.7),
            inset 0 -2px 3px rgba(0, 0, 0, 0.35),
            inset 2px 0 3px rgba(255, 255, 255, 0.5),
            inset -2px 0 3px rgba(0, 0, 0, 0.35),
            0 16px 32px rgba(0, 0, 0, 0.22)
          `,
          border: '1.5px solid #beb8a7',
        }}
      >
        {/* Top Horizontal Seam Line */}
        <div className="h-[2px] w-full bg-white/40 shadow-xs" />

        {/* Chassis Front Panel Components */}
        <div className="flex-1 flex items-center justify-between px-8 py-2">
          
          {/* Left Panel: Vintage Badges & System LEDs */}
          <div className="flex flex-col gap-3">
            {/* Metallic Computer Badge */}
            <div
              className="w-12 h-9 rounded-sm border border-stone-400 flex flex-col items-center justify-center shadow-inner"
              style={{
                background: 'linear-gradient(135deg, #d4cfbf 0%, #a8a292 100%)',
              }}
            >
              <span className="text-[11px] font-black tracking-widest text-stone-700 font-mono">
                SD
              </span>
              <span className="text-[7px] font-bold text-stone-600 font-mono tracking-wider">
                586
              </span>
            </div>

            {/* Vintage Brand Script Name */}
            <div className="flex items-center gap-1.5 opacity-60">
              <span className="text-[9px] font-bold tracking-widest text-stone-600 font-serif italic">
                SysDesign
              </span>
            </div>
          </div>

          {/* Right Panel: Floppy Disk & Drive Slots */}
          <div className="flex flex-col gap-2.5 w-[290px]">
            
            {/* 5.25" / Optical Bay Slot */}
            <div
              className="h-8 rounded-[3px] border border-stone-400 flex items-center justify-between px-3 shadow-inner"
              style={{
                background: 'linear-gradient(180deg, #d3cec0 0%, #c2bcae 100%)',
              }}
            >
              {/* Horizontal Disc Slot */}
              <div className="h-1.5 w-44 bg-stone-900 rounded-xs shadow-inner" />
              {/* Eject Button */}
              <div className="w-4 h-3 bg-stone-300 border border-stone-400 rounded-xs shadow-xs" />
            </div>

            {/* 3.5" Floppy Disk Slot & LEDs */}
            <div
              className="h-9 rounded-[3px] border border-stone-400 flex items-center justify-between px-3 shadow-inner"
              style={{
                background: 'linear-gradient(180deg, #d3cec0 0%, #c2bcae 100%)',
              }}
            >
              {/* Dual Power / Turbo LEDs */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_5px_#34d399]" title="Power" />
                <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_5px_#fbbf24]" title="Turbo" />
              </div>

              {/* 3.5" Disk Insertion Slot */}
              <div className="flex items-center gap-2">
                <div className="h-2 w-28 bg-[#181816] rounded-xs shadow-inner flex items-center justify-center">
                  <div className="w-16 h-[1px] bg-stone-700" />
                </div>
                {/* Floppy Eject Button */}
                <div className="w-3.5 h-3 bg-stone-200 border border-stone-400 rounded-xs shadow-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ventilation Grille Slats */}
        <div className="h-5 bg-gradient-to-b from-[#b8b2a3] to-[#a8a293] border-t border-stone-400 flex flex-col justify-evenly py-0.5 px-4">
          <div className="h-[1px] w-full bg-stone-700 opacity-60" />
          <div className="h-[1px] w-full bg-stone-700 opacity-60" />
          <div className="h-[1px] w-full bg-stone-700 opacity-60" />
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. MECHANICAL KEYBOARD (MODEL M STYLE IN FRONT ON DESK)         */}
      {/* ============================================================== */}
      <div
        className="relative z-0 -mt-1.5 rounded-[8px] p-2 flex flex-col justify-between shadow-2xl"
        style={{
          width: '740px',
          height: '110px',
          background: 'linear-gradient(180deg, #e5e0d4 0%, #d8d3c5 60%, #c3bdae 100%)',
          boxShadow: `
            inset 0 1.5px 2px rgba(255, 255, 255, 0.7),
            inset 0 -2px 3px rgba(0, 0, 0, 0.3),
            0 18px 30px rgba(0, 0, 0, 0.28)
          `,
          border: '1px solid #b6b0a0',
          transform: 'perspective(600px) rotateX(12deg)',
          transformOrigin: 'top center',
        }}
      >
        {/* Key Rows Assembly */}
        <div className="flex-1 flex flex-col justify-between p-1.5 bg-[#bbb5a5] rounded-[4px] border border-stone-400 shadow-inner">
          
          {/* Function Key Row (F1 - F12) */}
          <div className="flex justify-between items-center h-3.5 px-1">
            <div className="flex gap-1">
              <div className="w-4 h-3 bg-[#e8e4d8] rounded-xs border border-stone-400 shadow-xs" />
            </div>
            <div className="flex gap-1">
              <div className="w-3.5 h-3 bg-[#ded9cb] rounded-xs border border-stone-400 shadow-xs" />
              <div className="w-3.5 h-3 bg-[#ded9cb] rounded-xs border border-stone-400 shadow-xs" />
              <div className="w-3.5 h-3 bg-[#ded9cb] rounded-xs border border-stone-400 shadow-xs" />
              <div className="w-3.5 h-3 bg-[#ded9cb] rounded-xs border border-stone-400 shadow-xs" />
            </div>
            <div className="flex gap-1">
              <div className="w-3.5 h-3 bg-[#ded9cb] rounded-xs border border-stone-400 shadow-xs" />
              <div className="w-3.5 h-3 bg-[#ded9cb] rounded-xs border border-stone-400 shadow-xs" />
              <div className="w-3.5 h-3 bg-[#ded9cb] rounded-xs border border-stone-400 shadow-xs" />
              <div className="w-3.5 h-3 bg-[#ded9cb] rounded-xs border border-stone-400 shadow-xs" />
            </div>
            <div className="flex gap-1">
              <div className="w-3.5 h-3 bg-[#ded9cb] rounded-xs border border-stone-400 shadow-xs" />
              <div className="w-3.5 h-3 bg-[#ded9cb] rounded-xs border border-stone-400 shadow-xs" />
              <div className="w-3.5 h-3 bg-[#ded9cb] rounded-xs border border-stone-400 shadow-xs" />
              <div className="w-3.5 h-3 bg-[#ded9cb] rounded-xs border border-stone-400 shadow-xs" />
            </div>
            {/* Status LEDs on Keyboard */}
            <div className="flex gap-1.5 items-center pr-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
            </div>
          </div>

          {/* Main Key Clusters (Alphanumeric + Navigation + Numpad) */}
          <div className="flex justify-between items-center gap-2 h-14">
            
            {/* Alphanumeric Block */}
            <div className="flex-1 flex flex-col justify-between h-full">
              {/* Row 1 */}
              <div className="flex gap-0.5 h-3">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-[#ece8dc] border border-stone-400 rounded-xs shadow-xs" />
                ))}
              </div>
              {/* Row 2 */}
              <div className="flex gap-0.5 h-3">
                <div className="w-6 bg-[#cfc9ba] border border-stone-400 rounded-xs shadow-xs" />
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-[#ece8dc] border border-stone-400 rounded-xs shadow-xs" />
                ))}
                <div className="w-6 bg-[#cfc9ba] border border-stone-400 rounded-xs shadow-xs" />
              </div>
              {/* Row 3 */}
              <div className="flex gap-0.5 h-3">
                <div className="w-8 bg-[#cfc9ba] border border-stone-400 rounded-xs shadow-xs" />
                {Array.from({ length: 11 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-[#ece8dc] border border-stone-400 rounded-xs shadow-xs" />
                ))}
                <div className="w-8 bg-[#cfc9ba] border border-stone-400 rounded-xs shadow-xs" />
              </div>
              {/* Row 4 (Spacebar Row) */}
              <div className="flex gap-0.5 h-3.5">
                <div className="w-6 bg-[#cfc9ba] border border-stone-400 rounded-xs shadow-xs" />
                <div className="w-6 bg-[#cfc9ba] border border-stone-400 rounded-xs shadow-xs" />
                <div className="flex-1 bg-[#f3f0e6] border border-stone-400 rounded-xs shadow-xs" />
                <div className="w-6 bg-[#cfc9ba] border border-stone-400 rounded-xs shadow-xs" />
                <div className="w-6 bg-[#cfc9ba] border border-stone-400 rounded-xs shadow-xs" />
              </div>
            </div>

            {/* Navigation Block (Arrows, Ins/Del) */}
            <div className="w-16 flex flex-col justify-between h-full">
              <div className="grid grid-cols-3 gap-0.5 h-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-[#cfc9ba] border border-stone-400 rounded-xs shadow-xs" />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-0.5 h-6">
                <div />
                <div className="bg-[#cfc9ba] border border-stone-400 rounded-xs shadow-xs" />
                <div />
                <div className="bg-[#cfc9ba] border border-stone-400 rounded-xs shadow-xs" />
                <div className="bg-[#cfc9ba] border border-stone-400 rounded-xs shadow-xs" />
                <div className="bg-[#cfc9ba] border border-stone-400 rounded-xs shadow-xs" />
              </div>
            </div>

            {/* Numeric Keypad Block */}
            <div className="w-24 grid grid-cols-4 gap-0.5 h-full">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="bg-[#ece8dc] border border-stone-400 rounded-xs shadow-xs" />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Desk Surface Soft Ambient Shadow */}
      <div
        className="w-[840px] h-6 bg-slate-900/15 rounded-[100%] blur-lg pointer-events-none -mt-3"
      />
    </div>
  );
}

/**
 * Embedded CSS Animations & Styles from index.css
 */
const SOFTWARE_LIBRARY_CSS = `
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: #f4f1ea;
    color: #0f172a;
    overflow-x: hidden;
  }

  /* Mouth Retract & Extend Animation on Hover */
  @keyframes mouthRetractExtend {
    0% { transform: translateY(0px); }
    35% { transform: translateY(-68px); }
    60% { transform: translateY(-68px); }
    100% { transform: translateY(0px); }
  }

  .pendrive-mouth {
    transition: transform 0.25s ease-out;
  }

  .pendrive-assembly:hover .pendrive-mouth,
  .group:hover .pendrive-mouth {
    animation: mouthRetractExtend 1.25s cubic-bezier(0.34, 1.15, 0.64, 1) forwards;
  }

  /* Page Heading Animations */
  @keyframes headerEntrance {
    0% { opacity: 0; transform: translateY(-24px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .header-animated {
    animation: headerEntrance 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  /* Heading Letters Drop-in Animation (Letter by letter from top) */
  @keyframes letterDropBounce {
    0% {
      opacity: 0;
      transform: translateY(-60px) scale(0.75);
      filter: blur(3px);
    }
    60% {
      opacity: 1;
      transform: translateY(5px) scale(1.08);
      filter: blur(0px);
    }
    80% {
      transform: translateY(-2px) scale(0.98);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
      filter: blur(0px);
    }
  }

  .heading-letter-drop {
    display: inline-block;
    animation: letterDropBounce 0.55s cubic-bezier(0.34, 1.4, 0.64, 1) backwards;
  }

  @keyframes titleGlowShimmer {
    0% { background-position: 200% center; }
    100% { background-position: -200% center; }
  }

  .software-library-title {
    background: linear-gradient(
      90deg,
      #1c1917 0%,
      #292524 25%,
      #0284c7 42%,
      #38bdf8 50%,
      #0284c7 58%,
      #292524 75%,
      #1c1917 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: titleGlowShimmer 5s ease-in-out infinite;
  }

  @keyframes descFadeIn {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .desc-animated {
    animation: descFadeIn 0.8s 0.2s cubic-bezier(0.16, 1, 0.3, 1) backwards;
  }

  /* Staggered Pendrive Card Entrance & Mouth Initial Eject */
  @keyframes cardStaggerFadeIn {
    0% { opacity: 0; transform: translateY(22px) scale(0.94); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }

  .pendrive-card-enter {
    animation: cardStaggerFadeIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) backwards;
  }

  /* Initial Mouth Deploy: starts closed inside casing, then ejects outward */
  @keyframes mouthDeployInitial {
    0% {
      transform: translateX(-46px);
      opacity: 0.6;
    }
    20% {
      transform: translateX(-46px);
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .pendrive-mouth-eject {
    animation: mouthDeployInitial 0.65s cubic-bezier(0.34, 1.25, 0.64, 1) backwards;
  }

  /* Mouth Retract on Hover */
  @keyframes mouthRetractCSS {
    0% { transform: translateX(0); }
    35% { transform: translateX(-46px); }
    60% { transform: translateX(-46px); }
    100% { transform: translateX(0); }
  }

  .pendrive-mouth-css {
    transition: transform 0.25s ease-out;
  }

  /* Hover overrides any initial deploy animation */
  .pendrive-pure-css:hover .pendrive-mouth-css,
  .group:hover .pendrive-mouth-css {
    animation: mouthRetractCSS 1.25s cubic-bezier(0.34, 1.15, 0.64, 1) forwards !important;
  }

  /* Compact Mobile Animations */
  @keyframes mouthRetractCompact {
    0% { transform: translateX(0); }
    35% { transform: translateX(-30px); }
    60% { transform: translateX(-30px); }
    100% { transform: translateX(0); }
  }

  @keyframes mouthDeployCompact {
    0% { transform: translateX(-30px); opacity: 0.6; }
    20% { transform: translateX(-30px); opacity: 1; }
    100% { transform: translateX(0); opacity: 1; }
  }

  .pendrive-compact .pendrive-mouth-eject {
    animation: mouthDeployCompact 0.65s cubic-bezier(0.34, 1.25, 0.64, 1) backwards;
  }

  .pendrive-compact:hover .pendrive-mouth-css {
    animation: mouthRetractCompact 1.25s cubic-bezier(0.34, 1.15, 0.64, 1) forwards !important;
  }
`;

/**
 * 4. Master Softwarelibrary All-In-One Application Component
 */
export default function Softwarelibrary({ onClose }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsReloadKey, setCardsReloadKey] = useState(0);
  const [isPowerLoading, setIsPowerLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const handleBack = () => {
    if (onClose) onClose();
    window.history.back();
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const totalPages = 2;

  const desktopProducts = currentPage === 1
    ? softwareProducts.slice(0, 9)
    : softwareProducts.slice(9, 18);

  const mobileProducts = currentPage === 1
    ? softwareProducts.slice(0, 10)
    : softwareProducts.slice(10, 18);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleCardsReloadAnimation = () => {
    setIsPowerLoading(true);
    setCardsReloadKey((prev) => prev + 1);
    setTimeout(() => {
      setIsPowerLoading(false);
    }, 1100);
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f1ea] text-slate-800 flex flex-col items-center justify-start py-6 sm:py-8 px-2 sm:px-4 lg:px-6 select-none overflow-x-hidden">
      {/* Injected CSS Styles from index.css */}
      <style>{SOFTWARE_LIBRARY_CSS}</style>

      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-[1300px] mx-auto px-4 pb-4 flex items-center justify-start gap-3 z-30">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
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

      {/* Top Header Section with Entrance & Shimmer Animations */}
      <header className="header-animated flex flex-col items-center text-center max-w-3xl mb-5 sm:mb-8 px-2">
        <div className="badge-animated inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-200/90 border border-stone-300 text-[11px] font-bold text-stone-700 uppercase tracking-widest mb-2.5 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          Centralized Digital Repository
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase flex items-center justify-center gap-2.5 sm:gap-4.5 overflow-visible py-1">
          <span className="inline-flex overflow-visible">
            {"SOFTWARE".split('').map((char, index) => (
              <span
                key={index}
                className="heading-letter-drop inline-block"
                style={{ animationDelay: `${80 + index * 45}ms` }}
              >
                <span className="software-library-title block">
                  {char}
                </span>
              </span>
            ))}
          </span>

          <span className="inline-flex overflow-visible">
            {"LIBRARY".split('').map((char, index) => (
              <span
                key={index}
                className="heading-letter-drop inline-block"
                style={{ animationDelay: `${480 + index * 45}ms` }}
              >
                <span className="software-library-title block">
                  {char}
                </span>
              </span>
            ))}
          </span>
        </h1>

        <p className="desc-animated mt-2.5 text-xs sm:text-sm md:text-[14px] text-stone-600 max-w-4xl font-medium leading-relaxed px-2">
          {softwareLibraryDescription}
        </p>
      </header>

      {/* 1. DESKTOP VIEW: RETRO CRT WORKSTATION */}
      <div className="hidden lg:flex w-full justify-center">
        <RetroComputer>
          <div className="w-full flex-1 flex items-center justify-center pointer-events-none py-1">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-2 place-items-center pointer-events-none">
              {desktopProducts.map((product, index) => (
                <div
                  key={`desktop-${cardsReloadKey}-${currentPage}-${product.id}`}
                  className="pendrive-card-enter flex items-center justify-center w-full pointer-events-none"
                  style={{ animationDelay: `${index * 85}ms` }}
                >
                  <div className="inline-flex items-center justify-center pointer-events-none">
                    <Pendrive
                      title={product.name}
                      animDelay={index * 85}
                      orientation="horizontal"
                      rotationDirection="right"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2 flex items-center justify-center gap-3 shrink-0 py-1">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
            >
              Previous
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNum = index + 1;
                const isActive = currentPage === pageNum;

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-sky-500 text-white shadow-xs shadow-sky-500/30 border border-sky-400 scale-105'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
            >
              Next
            </button>
          </div>
        </RetroComputer>
      </div>

      {/* 2. MOBILE VIEW: VERTICAL CPU TOWER */}
      <div className="flex lg:hidden w-full justify-center">
        <CpuTowerMobile
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelectPage={setCurrentPage}
          onPowerClick={handleCardsReloadAnimation}
          isPowerLoading={isPowerLoading}
        >
          <div
            key={`mobile-grid-${cardsReloadKey}-${currentPage}`}
            className="w-full grid grid-cols-2 gap-y-2.5 gap-x-1.5 place-items-center py-1"
          >
            {mobileProducts.map((product, index) => (
              <div
                key={`mobile-${cardsReloadKey}-${currentPage}-${product.id}`}
                className="pendrive-card-enter flex items-center justify-center w-full pointer-events-none"
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <div className="inline-flex items-center justify-center pointer-events-none">
                  <Pendrive
                    title={product.name}
                    compact={true}
                    animDelay={index * 55}
                    orientation="horizontal"
                    rotationDirection="right"
                  />
                </div>
              </div>
            ))}
          </div>
        </CpuTowerMobile>
      </div>
    </div>
  );
}
