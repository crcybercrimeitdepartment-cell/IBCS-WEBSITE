// ============================================================================
// COMPONENT: IT Procurement & Deployment Services.jsx
// PURPOSE: Complete self-contained Quality & Deployment Services desk calendar
//          dashboard hosting dual synchronized 3D notebooks:
//          1. Left: Monthly Service Schedule Calendar with 3D paper tear-off
//             and reverse reattach physics.
//          2. Right: Daily Task Execution Notebook with realistic 3D 180° page flips.
// ============================================================================

import { useState, useRef, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaLayerGroup,
  FaHome,
} from "react-icons/fa";

// Data Source Import
import { monthsData as importedMonthsData } from "./ITProcurementDeploymentServicesPageData.js";

// ============================================================================
// 1. WEB AUDIO SOUND EFFECTS (100% Self-Contained, Zero External Assets)
// ============================================================================
function playTearSound() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const now = ctx.currentTime;
    const tearDuration = 0.58;

    // Stage 1: High-frequency initial fiber crack / snap
    const snapOsc = ctx.createOscillator();
    const snapGain = ctx.createGain();
    snapOsc.type = "triangle";
    snapOsc.frequency.setValueAtTime(3200, now);
    snapOsc.frequency.exponentialRampToValueAtTime(450, now + 0.08);

    snapGain.gain.setValueAtTime(0.35, now);
    snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    snapOsc.connect(snapGain);
    snapGain.connect(ctx.destination);
    snapOsc.start(now);
    snapOsc.stop(now + 0.09);

    // Stage 2: Textured paper fiber tearing & serration friction
    const bufferSize = Math.floor(ctx.sampleRate * tearDuration);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      const t = i / bufferSize;
      let env = Math.sin(t * Math.PI * 0.95);
      if (t < 0.15) env = Math.pow(t / 0.15, 0.5);

      const ringSpike = Math.sin(t * 12 * Math.PI * 2) > 0.85 ? 1.8 : 0.6;
      const microCrackle = Math.random() < 0.35 ? 1.4 : 0.45;
      const noise = (Math.random() * 2 - 1) * ringSpike * microCrackle;

      data[i] = noise * env;
    }

    const tearNoiseSource = ctx.createBufferSource();
    tearNoiseSource.buffer = buffer;

    const bandpass = ctx.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.setValueAtTime(3400, now);
    bandpass.frequency.exponentialRampToValueAtTime(900, now + tearDuration);
    bandpass.Q.setValueAtTime(2.2, now);

    const highpass = ctx.createBiquadFilter();
    highpass.type = "highpass";
    highpass.frequency.setValueAtTime(500, now);

    const tearGain = ctx.createGain();
    tearGain.gain.setValueAtTime(0.55, now);
    tearGain.gain.exponentialRampToValueAtTime(0.01, now + tearDuration);

    tearNoiseSource.connect(highpass);
    highpass.connect(bandpass);
    bandpass.connect(tearGain);
    tearGain.connect(ctx.destination);

    tearNoiseSource.start(now);

    // Stage 3: Paper toss air whoosh
    const whooshDuration = 0.45;
    const whooshStart = now + 0.18;
    const whooshBufSize = Math.floor(ctx.sampleRate * whooshDuration);
    const whooshBuf = ctx.createBuffer(1, whooshBufSize, ctx.sampleRate);
    const whooshData = whooshBuf.getChannelData(0);

    for (let i = 0; i < whooshBufSize; i++) {
      const t = i / whooshBufSize;
      const env = Math.sin(t * Math.PI);
      whooshData[i] = (Math.random() * 2 - 1) * env;
    }

    const whooshSource = ctx.createBufferSource();
    whooshSource.buffer = whooshBuf;

    const whooshFilter = ctx.createBiquadFilter();
    whooshFilter.type = "lowpass";
    whooshFilter.frequency.setValueAtTime(800, whooshStart);
    whooshFilter.frequency.exponentialRampToValueAtTime(300, whooshStart + whooshDuration);

    const whooshGain = ctx.createGain();
    whooshGain.gain.setValueAtTime(0.22, whooshStart);
    whooshGain.gain.exponentialRampToValueAtTime(0.001, whooshStart + whooshDuration);

    whooshSource.connect(whooshFilter);
    whooshFilter.connect(whooshGain);
    whooshGain.connect(ctx.destination);

    whooshSource.start(whooshStart);
  } catch {
    // Audio is progressive enhancement
  }
}

function playReverseTearSound() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const now = ctx.currentTime;
    const incomingDuration = 0.52;

    const whooshBufSize = Math.floor(ctx.sampleRate * incomingDuration);
    const whooshBuf = ctx.createBuffer(1, whooshBufSize, ctx.sampleRate);
    const whooshData = whooshBuf.getChannelData(0);

    for (let i = 0; i < whooshBufSize; i++) {
      const t = i / whooshBufSize;
      const env = Math.pow(t, 1.4);
      whooshData[i] = (Math.random() * 2 - 1) * env;
    }

    const whooshSource = ctx.createBufferSource();
    whooshSource.buffer = whooshBuf;

    const whooshFilter = ctx.createBiquadFilter();
    whooshFilter.type = "bandpass";
    whooshFilter.frequency.setValueAtTime(320, now);
    whooshFilter.frequency.exponentialRampToValueAtTime(1900, now + incomingDuration);
    whooshFilter.Q.setValueAtTime(1.8, now);

    const whooshGain = ctx.createGain();
    whooshGain.gain.setValueAtTime(0.02, now);
    whooshGain.gain.exponentialRampToValueAtTime(0.42, now + incomingDuration);

    whooshSource.connect(whooshFilter);
    whooshFilter.connect(whooshGain);
    whooshGain.connect(ctx.destination);
    whooshSource.start(now);

    const snapStart = now + 0.54;
    const snapOsc = ctx.createOscillator();
    const snapGain = ctx.createGain();
    snapOsc.type = "triangle";
    snapOsc.frequency.setValueAtTime(2900, snapStart);
    snapOsc.frequency.exponentialRampToValueAtTime(320, snapStart + 0.1);

    snapGain.gain.setValueAtTime(0.42, snapStart);
    snapGain.gain.exponentialRampToValueAtTime(0.001, snapStart + 0.1);

    snapOsc.connect(snapGain);
    snapGain.connect(ctx.destination);
    snapOsc.start(snapStart);
    snapOsc.stop(snapStart + 0.11);

    const thudOsc = ctx.createOscillator();
    const thudGain = ctx.createGain();
    thudOsc.type = "sine";
    thudOsc.frequency.setValueAtTime(160, snapStart);
    thudOsc.frequency.exponentialRampToValueAtTime(45, snapStart + 0.08);

    thudGain.gain.setValueAtTime(0.3, snapStart);
    thudGain.gain.exponentialRampToValueAtTime(0.001, snapStart + 0.08);

    thudOsc.connect(thudGain);
    thudGain.connect(ctx.destination);
    thudOsc.start(snapStart);
    thudOsc.stop(snapStart + 0.09);
  } catch {
    // Audio is progressive enhancement
  }
}

// ============================================================================
// 2. SUB-COMPONENT: SpiralBinding (Top Notebook Spiral Rings)
// ============================================================================
export function SpiralBinding({ count = 12 }) {
  return (
    <div className="spiral-binding select-none" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <span className="spiral-ring" key={index}>
          <svg
            viewBox="0 0 24 42"
            className="spiral-ring-svg"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="11"
              y="24"
              width="10"
              height="14"
              rx="5"
              fill="#030914"
              stroke="rgba(255, 255, 255, 0.16)"
              strokeWidth="1"
            />
            <path
              d="M 6 12 C 6 2, 16 2, 16 12 L 16 33"
              fill="none"
              stroke="#64748b"
              strokeWidth="3.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 6 12 C 6 2, 16 2, 16 12 L 16 33"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 6 12 C 6 2.5, 16 2.5, 16 12 L 16 31"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.95"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

// ============================================================================
// 3. SUB-COMPONENTS: Torn Paper Fringe & Particles
// ============================================================================
export function TornStubsOnSpiral() {
  return (
    <div
      className="absolute -top-2 left-0 right-0 z-30 pointer-events-none select-none flex justify-around px-2 sm:px-4"
      aria-hidden="true"
    >
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} className="relative flex flex-col items-center">
          <span
            className="w-2.5 sm:w-3.5 h-2.5 bg-gradient-to-b from-slate-100 to-white border-t border-slate-300 shadow-sm"
            style={{
              clipPath:
                i % 2 === 0
                  ? "polygon(0 0, 100% 0, 85% 100%, 50% 65%, 15% 95%)"
                  : "polygon(0 0, 100% 0, 95% 85%, 60% 100%, 30% 70%, 10% 90%)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export function TornPaperSpiralFringe() {
  return (
    <div
      className="absolute -top-3.5 left-0 right-0 z-50 pointer-events-none select-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 24"
        preserveAspectRatio="none"
        className="w-full h-5 text-white fill-current filter drop-shadow(0 3px 3px rgba(0,0,0,0.22))"
      >
        <path
          d="M 0 24 
             L 0 8 
             Q 15 1, 28 11 T 56 3 T 84 13 T 112 2 T 140 12 T 168 4 T 196 13 T 224 3 T 252 12 T 280 4 T 308 13 T 336 3 T 364 12 T 392 4 T 420 13 T 448 3 T 476 12 T 504 2 T 532 12 T 560 4 T 585 13 T 600 3 
             L 600 24 Z"
        />
      </svg>
      <div className="absolute top-1 left-0 right-0 flex justify-around px-2 sm:px-4">
        {Array.from({ length: 12 }, (_, i) => (
          <span
            key={i}
            className="w-2 sm:w-2.5 h-2 rounded-t-sm bg-slate-900/50 border-t border-slate-700/50 shadow-inner"
          />
        ))}
      </div>
    </div>
  );
}

const particlesData = [
  { id: 1, left: "8%", vx: -45, vy: -60, rot: -180, delay: 0.02, size: 6 },
  { id: 2, left: "16%", vx: -25, vy: -75, rot: 220, delay: 0.05, size: 8 },
  { id: 3, left: "24%", vx: -10, vy: -85, rot: -290, delay: 0.01, size: 7 },
  { id: 4, left: "32%", vx: 15, vy: -90, rot: 340, delay: 0.04, size: 9 },
  { id: 5, left: "40%", vx: 35, vy: -80, rot: -190, delay: 0.02, size: 6 },
  { id: 6, left: "48%", vx: 50, vy: -70, rot: 280, delay: 0.06, size: 8 },
  { id: 7, left: "56%", vx: 70, vy: -65, rot: -320, delay: 0.03, size: 7 },
  { id: 8, left: "64%", vx: 85, vy: -50, rot: 240, delay: 0.07, size: 9 },
  { id: 9, left: "72%", vx: 105, vy: -40, rot: -210, delay: 0.04, size: 6 },
  { id: 10, left: "80%", vx: 120, vy: -30, rot: 310, delay: 0.08, size: 8 },
  { id: 11, left: "88%", vx: 140, vy: -20, rot: -260, delay: 0.05, size: 7 },
  { id: 12, left: "94%", vx: 160, vy: -10, rot: 380, delay: 0.09, size: 6 },
];

export function PaperTearParticles({ reverse = false }) {
  return (
    <div
      className="absolute -top-3 inset-x-0 h-6 pointer-events-none z-50 overflow-visible select-none"
      aria-hidden="true"
    >
      {particlesData.map((p) => (
        <span
          key={p.id}
          className={reverse ? "paper-tear-particle-reverse" : "paper-tear-particle"}
          style={{
            left: p.left,
            "--vx": `${p.vx}px`,
            "--vy": `${p.vy}px`,
            "--rot": `${p.rot}deg`,
            animationDelay: `${p.delay}s`,
            width: `${p.size}px`,
            height: `${Math.round(p.size * 0.75)}px`,
          }}
        />
      ))}
    </div>
  );
}

// ============================================================================
// 4. SUB-COMPONENT: CalendarDay
// ============================================================================
export function CalendarDay({ item, selected, onSelect }) {
  const Icon = item.icon;
  const monthName = item.monthName || "July";

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      aria-pressed={selected}
      aria-label={`${item.day} ${monthName} 2026: ${item.title}`}
      className={`calendar-day flex min-h-[48px] sm:min-h-[64px] lg:min-h-[68px] w-full min-w-0 overflow-hidden flex-col items-center justify-between rounded-lg sm:rounded-xl border p-0.5 sm:p-1.5 text-center transition-all outline-none focus:outline-none ${
        selected
          ? "calendar-day-selected border-transparent"
          : "border-slate-200 bg-white/75 text-slate-700 hover:bg-white"
      }`}
    >
      <span
        className={`self-start text-[8.5px] font-bold sm:text-xs leading-none pl-0.5 pt-0.5 ${
          selected ? "text-white" : "text-slate-800"
        }`}
      >
        {item.day}
      </span>

      {Icon ? (
        <Icon
          className="my-0.5 h-3.5 w-3.5 sm:h-[18px] sm:w-[18px] shrink-0"
          style={{ color: selected ? "#ffffff" : item.color }}
          aria-hidden="true"
        />
      ) : (
        <span
          className="my-0.5 h-2 w-2 rounded-full shrink-0"
          style={{ backgroundColor: selected ? "#ffffff" : (item.color || "#2563eb") }}
        />
      )}

      <span className="w-full min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-[7px] sm:text-[8.5px] font-semibold leading-tight text-center px-0.5">
        {item.title}
      </span>
    </button>
  );
}

// ============================================================================
// 5. SUB-COMPONENT: CalendarGrid
// ============================================================================
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function CalendarGrid({
  days = [],
  firstDayOffset = 0,
  selectedDay,
  onSelectDay,
}) {
  return (
    <section className="notebook-paper relative rounded-xl p-1.5 sm:p-2.5 lg:p-3">
      <div className="mb-1.5 sm:mb-2 grid grid-cols-7 gap-1 sm:gap-1.5">
        {weekdays.map((day, index) => (
          <div
            key={day}
            className={`min-w-0 truncate rounded-md sm:rounded-lg px-0.5 py-0.5 sm:py-1 text-center text-[7.5px] font-bold sm:text-[10px] ${
              index === 0
                ? "bg-rose-50 text-rose-600"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
        {Array.from({ length: firstDayOffset }, (_, index) => (
          <div key={`empty-${index}`} aria-hidden="true" />
        ))}

        {days.map((item) => (
          <CalendarDay
            key={`${item.month ?? 0}-${item.day}`}
            item={item}
            selected={selectedDay === item.day}
            onSelect={onSelectDay}
          />
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// 6. SUB-COMPONENT: CalendarHeader
// ============================================================================
export function CalendarHeader({
  currentMonthIndex = 0,
  onPrevMonth,
  onTearOff,
  isTearing = false,
  isReversing = false,
}) {
  const isBusy = isTearing || isReversing;

  function handleToggleMonth() {
    if (isBusy) return;
    if (currentMonthIndex === 0 && onTearOff) {
      onTearOff();
    } else if (currentMonthIndex === 1 && onPrevMonth) {
      onPrevMonth();
    }
  }

  return (
    <header className="px-1.5 pb-2 pt-0 sm:px-3 sm:pb-2.5 sm:pt-1 select-none">
      <div className="flex items-center justify-center text-center w-full">
        <div
          className="text-center cursor-pointer transition hover:opacity-90"
          onClick={handleToggleMonth}
          title="Click to tear off or change month"
        >
          <h1 className="text-xs sm:text-base lg:text-lg font-extrabold tracking-tight text-white leading-tight text-center">
            IT Procurement &{" "}
            <span className="text-cyan-400">Deployment Services</span>
          </h1>
        </div>
      </div>
    </header>
  );
}

// ============================================================================
// 7. SUB-COMPONENT: Daily Task Execution Notebook
// ============================================================================
function formatDate(day, month = 6, year = 2026) {
  const date = new Date(year, month, day);

  return {
    month: date.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    monthFull: date.toLocaleString("en-US", { month: "long" }),
    weekday: date.toLocaleString("en-US", { weekday: "long" }),
    year: date.getFullYear(),
  };
}

function NotebookPageContent({ item, onMoveDate }) {
  const dateInfo = formatDate(item.day, item.month ?? 6, item.year ?? 2026);
  const IconComponent = item.icon || FaLayerGroup;
  const isJuly = (item.month ?? 6) === 6;

  return (
    <div className="flex flex-1 flex-col min-h-0 select-none h-full p-2 sm:p-4">
      {/* Header Bar */}
      <header className="flex shrink-0 items-start gap-2.5 sm:gap-3.5 pb-3 border-b border-slate-200/90">
        {/* Date Badge */}
        <div
          className={`flex min-h-[56px] min-w-[52px] sm:min-h-[64px] sm:min-w-[60px] flex-col items-center justify-center rounded-xl px-1.5 sm:px-2 text-white shadow-md shrink-0 ${
            isJuly
              ? "bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-800"
              : "bg-gradient-to-b from-teal-600 via-cyan-700 to-blue-800"
          }`}
        >
          <span className="text-xl sm:text-2xl lg:text-3xl font-black leading-none tracking-tight">
            {String(item.day).padStart(2, "0")}
          </span>
          <span className="mt-0.5 text-[8px] sm:text-[9px] font-extrabold tracking-wider uppercase">
            {dateInfo.month} {dateInfo.year}
          </span>
          <span className="text-[7.5px] sm:text-[8px] opacity-90 font-semibold tracking-wide">
            {dateInfo.weekday}
          </span>
        </div>

        {/* Heading Title with Icon */}
        <div className="min-w-0 flex-1 pt-1">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span
              className="inline-flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-lg text-white text-xs sm:text-sm shadow-sm shrink-0"
              style={{ backgroundColor: item.color || "#2563eb" }}
            >
              <IconComponent />
            </span>

            <h2 className="text-sm sm:text-base lg:text-lg font-black text-slate-900 leading-snug tracking-tight">
              {item.title}
            </h2>
          </div>
        </div>

        {/* Stepper Buttons */}
        <div className="flex gap-1 shrink-0 pt-1">
          <button
            type="button"
            onClick={() => onMoveDate(-1)}
            aria-label="Previous date"
            className="rounded-lg bg-slate-100 p-1.5 sm:p-2 text-slate-600 transition hover:bg-blue-100 hover:text-blue-700 active:scale-90 outline-none"
            title="Previous Day"
          >
            <FaChevronLeft className="h-3 w-3" />
          </button>

          <button
            type="button"
            onClick={() => onMoveDate(1)}
            aria-label="Next date"
            className="rounded-lg bg-slate-100 p-1.5 sm:p-2 text-slate-600 transition hover:bg-blue-100 hover:text-blue-700 active:scale-90 outline-none"
            title="Next Day"
          >
            <FaChevronRight className="h-3 w-3" />
          </button>
        </div>
      </header>

      {/* Description Only - Clean, Spacious & Focused */}
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar pt-4 sm:pt-6">
        <div className="rounded-xl p-4 sm:p-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 border border-slate-200/90 shadow-sm">
          <p
            className="text-xs sm:text-sm lg:text-[15px] text-slate-700 leading-relaxed font-normal text-justify [text-align:justify] [text-justify:inter-word] [text-align-last:left]"
            style={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestExecution({
  selectedItem,
  onChangeDay,
  onPrevMonth,
  onNextMonth,
}) {
  const [currentDayItem, setCurrentDayItem] = useState(selectedItem);
  const [animatingData, setAnimatingData] = useState(null);

  const prevItemRef = useRef(selectedItem);
  const transitionKeyRef = useRef(0);

  // Synchronize 3D flip when selected day/month changes
  useEffect(() => {
    const prevItem = prevItemRef.current;
    const isSameDay = selectedItem.day === prevItem.day;
    const isSameMonth = (selectedItem.month ?? 6) === (prevItem.month ?? 6);
    if (isSameDay && isSameMonth) return;

    const oldDay = prevItem.day;
    const oldMonth = prevItem.month ?? 6;
    const newDay = selectedItem.day;
    const newMonth = selectedItem.month ?? 6;

    let direction;
    if (newMonth > oldMonth) {
      direction = "next";
    } else if (newMonth < oldMonth) {
      direction = "prev";
    } else if (oldDay === 31 && newDay === 1) {
      direction = "next";
    } else if (oldDay === 1 && newDay === 31) {
      direction = "prev";
    } else {
      direction = newDay > oldDay ? "next" : "prev";
    }

    transitionKeyRef.current += 1;
    const thisKey = transitionKeyRef.current;
    const fromItem = prevItem;
    prevItemRef.current = selectedItem;

    setAnimatingData({
      fromItem,
      toItem: selectedItem,
      direction,
      key: thisKey,
    });

    const timer = setTimeout(() => {
      setCurrentDayItem(selectedItem);
      setAnimatingData(null);
    }, 560);

    return () => clearTimeout(timer);
  }, [selectedItem]);

  function moveDate(direction) {
    const baseDay = prevItemRef.current.day;
    const totalDays = 31;
    let nextDay = baseDay + direction;

    if (direction === 1 && nextDay > totalDays) {
      if (onNextMonth) {
        onNextMonth(1);
        return;
      }
      nextDay = 1;
    } else if (direction === -1 && nextDay < 1) {
      if (onPrevMonth) {
        onPrevMonth(31);
        return;
      }
      nextDay = totalDays;
    }

    onChangeDay(nextDay);
  }

  return (
    <section className="calendar-notebook flex flex-1 flex-col min-w-0 w-full h-full p-1.5 pt-0 sm:p-3 sm:pt-0 min-h-[300px] sm:min-h-[360px]">
      <SpiralBinding count={12} />

      <div className="relative z-[1] -mt-1 flex flex-1 flex-col min-h-0 w-full rounded-xl [perspective:1400px] [perspective-origin:50%_15%] [transform-style:preserve-3d]">
        {animatingData ? (
          <>
            <div
              className={`notebook-paper relative flex flex-1 flex-col rounded-xl p-2 sm:p-3 lg:p-3.5 min-h-[250px] sm:min-h-[300px] h-full z-[1] ${
                animatingData.direction === "next"
                  ? "calendar-page-reveal-under"
                  : ""
              }`}
            >
              <NotebookPageContent
                item={
                  animatingData.direction === "next"
                    ? animatingData.toItem
                    : animatingData.fromItem
                }
                onMoveDate={moveDate}
              />
            </div>

            <div
              key={animatingData.key}
              className={`calendar-flip-card z-[25] ${
                animatingData.direction === "next"
                  ? "calendar-page-flip-to-back"
                  : "calendar-page-flip-from-back"
              }`}
            >
              <div className="calendar-flip-front notebook-paper absolute inset-0 flex flex-col rounded-xl p-2 sm:p-3 lg:p-3.5 min-h-0">
                <NotebookPageContent
                  item={
                    animatingData.direction === "next"
                      ? animatingData.fromItem
                      : animatingData.toItem
                  }
                  onMoveDate={moveDate}
                />
              </div>

              <div className="calendar-flip-back rounded-xl p-3 sm:p-6 flex flex-col items-center justify-center select-none overflow-hidden">
                <div className="w-12 sm:w-16 h-1 bg-slate-300 rounded mb-2.5 sm:mb-3 opacity-50" />
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-center">
                  IT Procurement & Deployment
                </span>
                <span className="text-[7.5px] sm:text-[8.5px] font-semibold text-slate-400 mt-1">
                  Daily Execution Log
                </span>
                <div className="mt-3 sm:mt-4 w-3/4 space-y-1.5 opacity-35">
                  <div className="h-1 bg-slate-300 rounded w-full" />
                  <div className="h-1 bg-slate-300 rounded w-5/6 mx-auto" />
                  <div className="h-1 bg-slate-300 rounded w-2/3 mx-auto" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="notebook-paper relative flex flex-1 flex-col rounded-xl p-2 sm:p-3 lg:p-3.5 min-h-[250px] sm:min-h-[300px] h-full">
            <NotebookPageContent
              item={currentDayItem}
              onMoveDate={moveDate}
            />
          </div>
        )}
      </div>
    </section>
  );
}

// ============================================================================
// 8. FALLBACK STARTER MONTHS (Ensures UI renders cleanly until user adds data)
// ============================================================================
const defaultFallbackMonths = [
  {
    id: "month-1",
    name: "July",
    year: 2026,
    firstDayOffset: 3,
    totalDays: 31,
    days: Array.from({ length: 31 }, (_, i) => ({
      day: i + 1,
      month: 6,
      year: 2026,
      title: `Service #${i + 1}`,
      status: i < 8 ? "Completed" : i === 8 ? "In Progress" : "Scheduled",
      description: "IT Procurement & Deployment Task",
      color: "#2563eb",
    })),
  },
  {
    id: "month-2",
    name: "August",
    year: 2026,
    firstDayOffset: 6,
    totalDays: 31,
    days: Array.from({ length: 31 }, (_, i) => ({
      day: i + 1,
      month: 7,
      year: 2026,
      title: `Sprint #${i + 1}`,
      status: "Scheduled",
      description: "Deployment & Verification Cycle",
      color: "#0891b2",
    })),
  },
];

// ============================================================================
// 9. EMBEDDED 3D DESK CALENDAR & FLIPBOOK STYLES
// ============================================================================
const embeddedCalendarStyles = `
  .dashboard-scene {
    perspective: 1800px;
  }
  @media (max-width: 640px) {
    .dashboard-scene {
      perspective: 1200px;
    }
  }

  .calendar-notebook {
    position: relative;
    transform-style: preserve-3d;
    border: 1px solid #9cb6d0;
    border-radius: 18px;
    background: linear-gradient(
      145deg,
      #164a7d 0%,
      #0a2e58 55%,
      #082344 100%
    );
    box-shadow:
      0 5px 0 #061c35,
      0 12px 0 #0c345d,
      0 24px 38px rgb(8 29 54 / 28%),
      inset 0 1px 1px rgb(255 255 255 / 35%);
  }
  @media (max-width: 640px) {
    .calendar-notebook {
      border-radius: 14px;
      box-shadow:
        0 4px 0 #061c35,
        0 8px 0 #0c345d,
        0 16px 24px rgb(8 29 54 / 22%),
        inset 0 1px 1px rgb(255 255 255 / 35%);
    }
  }

  .notebook-paper {
    background: linear-gradient(145deg, #ffffff 0%, #f1f6fc 100%);
    border: 1px solid #d8e4f0;
    box-shadow:
      inset 0 1px 3px rgb(255 255 255 / 90%),
      0 3px 8px rgb(15 38 67 / 8%);
  }

  .spiral-binding {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    gap: 2px;
    padding: 0 8px;
    height: 30px;
    margin-top: -8px;
    margin-bottom: 4px;
    pointer-events: none;
    overflow: hidden;
    width: 100%;
  }
  @media (min-width: 640px) {
    .spiral-binding {
      gap: 5px;
      padding: 0 18px;
      height: 36px;
      margin-top: -10px;
      overflow: visible;
    }
  }
  @media (max-width: 640px) {
    .spiral-binding {
      padding-inline: 8px;
      gap: 2px;
      margin-top: -9px;
      height: 34px;
      margin-bottom: 3px;
    }
  }

  .spiral-ring {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 16px;
    height: 30px;
    flex: 0 1 16px;
    background: transparent;
    box-shadow: none;
    filter: none;
  }
  @media (min-width: 640px) {
    .spiral-ring {
      width: 20px;
      height: 36px;
      flex: 0 0 20px;
    }
  }
  @media (max-width: 640px) {
    .spiral-ring {
      width: 16px;
      height: 34px;
      flex-basis: 16px;
    }
  }

  .spiral-ring-svg {
    width: 100%;
    height: 100%;
    display: block;
    overflow: visible;
  }

  .calendar-day {
    transition:
      transform 180ms ease,
      box-shadow 180ms ease,
      border-color 180ms ease,
      background 180ms ease;
  }
  .calendar-day:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 14px rgb(35 86 145 / 12%);
  }
  .calendar-day-selected {
    color: white !important;
    background: linear-gradient(145deg, #1267e8, #2699f5) !important;
    border-color: transparent !important;
    box-shadow:
      0 5px 12px rgb(16 107 232 / 25%),
      inset 0 1px 0 rgb(255 255 255 / 25%) !important;
    outline: none !important;
  }

  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  /* 3D Flipper Card with double sides */
  .calendar-flip-card {
    position: absolute;
    inset: 0;
    transform-origin: 50% 0%;
    transform-style: preserve-3d;
    pointer-events: none;
    will-change: transform;
  }
  .calendar-flip-front {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform: rotateX(0deg);
  }
  .calendar-flip-back {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform: rotateX(180deg);
    background: linear-gradient(175deg, #ffffff 0%, #f1f5f9 60%, #e2e8f0 100%);
    border: 1px solid #cbd5e1;
    box-shadow: inset 0 2px 8px rgb(15 23 42 / 8%);
  }

  @keyframes calendarFlipToBack {
    0% {
      transform: rotateX(0deg) translateY(0);
      filter: drop-shadow(0 4px 8px rgb(15 23 42 / 6%));
      opacity: 1;
    }
    28% {
      transform: rotateX(46deg) translateZ(36px) translateY(8px);
      filter: drop-shadow(0 28px 28px rgb(15 23 42 / 22%));
      opacity: 1;
    }
    58% {
      transform: rotateX(108deg) translateY(-14px) translateZ(42px);
      filter: drop-shadow(0 32px 30px rgb(15 23 42 / 16%));
      opacity: 1;
    }
    82% {
      transform: rotateX(158deg) translateY(-26px) translateZ(10px);
      filter: drop-shadow(0 14px 18px rgb(15 23 42 / 8%));
      opacity: 0.95;
    }
    100% {
      transform: rotateX(180deg) translateY(-36px) translateZ(-4px);
      filter: drop-shadow(0 0 0 transparent);
      opacity: 0;
    }
  }

  @keyframes calendarFlipFromBack {
    0% {
      transform: rotateX(180deg) translateY(-36px) translateZ(-4px);
      filter: drop-shadow(0 0 0 transparent);
      opacity: 0;
    }
    22% {
      transform: rotateX(158deg) translateY(-26px) translateZ(10px);
      filter: drop-shadow(0 14px 18px rgb(15 23 42 / 8%));
      opacity: 0.95;
    }
    52% {
      transform: rotateX(108deg) translateY(-14px) translateZ(42px);
      filter: drop-shadow(0 32px 30px rgb(15 23 42 / 16%));
      opacity: 1;
    }
    78% {
      transform: rotateX(46deg) translateZ(36px) translateY(8px);
      filter: drop-shadow(0 28px 28px rgb(15 23 42 / 22%));
      opacity: 1;
    }
    100% {
      transform: rotateX(0deg);
      filter: drop-shadow(0 4px 8px rgb(15 23 42 / 6%));
      opacity: 1;
    }
  }

  @keyframes calendarRevealPage {
    0% {
      filter: brightness(0.86);
      transform: scale(0.985);
    }
    40% {
      filter: brightness(0.93);
      transform: scale(0.995);
    }
    100% {
      filter: brightness(1);
      transform: scale(1);
    }
  }

  .calendar-page-flip-to-back {
    animation: calendarFlipToBack 560ms cubic-bezier(0.35, 0, 0.25, 1) forwards;
    pointer-events: none;
  }
  .calendar-page-flip-from-back {
    animation: calendarFlipFromBack 560ms cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
    pointer-events: none;
  }
  .calendar-page-reveal-under {
    animation: calendarRevealPage 560ms cubic-bezier(0.2, 0.85, 0.25, 1) forwards;
  }

  @keyframes notebookEnter {
    0% {
      opacity: 0;
      transform: rotateY(-12deg) rotateX(5deg) translateY(35px);
    }
    65% {
      opacity: 1;
      transform: rotateY(3deg) rotateX(-1deg) translateY(-4px);
    }
    100% {
      opacity: 1;
      transform: rotateY(0) rotateX(0) translateY(0);
    }
  }

  .notebook-enter {
    animation: notebookEnter 900ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
  }

  @keyframes subtleFloat {
    0%, 100% { translate: 0 0; }
    50% { translate: 0 -3px; }
  }

  .notebook-float {
    animation: subtleFloat 5s ease-in-out 1s infinite;
  }

  @keyframes calendarTearOff {
    0% {
      transform: translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg) skew(0deg);
      opacity: 1;
      filter: drop-shadow(0 4px 6px rgba(15, 23, 42, 0.16));
    }
    8% {
      transform: translate3d(6px, 12px, 20px) rotate3d(0.2, 1, 0.1, 4deg) skew(-1.5deg);
      opacity: 1;
      filter: drop-shadow(-6px 12px 14px rgba(15, 23, 42, 0.28));
    }
    22% {
      transform: translate3d(-12px, 55px, 75px) rotate3d(1, -0.4, 0.3, -12deg) scale(0.99);
      opacity: 0.99;
      filter: drop-shadow(-14px 28px 30px rgba(15, 23, 42, 0.35));
    }
    44% {
      transform: translate3d(35px, 160px, 140px) rotate3d(1, 0.7, -0.4, 30deg) scale(1.02);
      opacity: 0.96;
      filter: drop-shadow(28px 46px 42px rgba(15, 23, 42, 0.26));
    }
    68% {
      transform: translate3d(170px, 390px, 170px) rotate3d(0.7, 1, 0.3, 68deg) scale(0.93);
      opacity: 0.86;
      filter: drop-shadow(38px 58px 48px rgba(15, 23, 42, 0.16));
    }
    86% {
      transform: translate3d(290px, 690px, 120px) rotate3d(0.5, 1, 0.7, 105deg) scale(0.83);
      opacity: 0.45;
      filter: drop-shadow(46px 68px 52px rgba(15, 23, 42, 0.08));
    }
    100% {
      transform: translate3d(400px, 990px, 70px) rotate3d(0.3, 1, 0.9, 135deg) scale(0.72);
      opacity: 0;
      filter: drop-shadow(0 0 0 transparent);
    }
  }

  .calendar-page-tearing {
    position: absolute !important;
    inset: 0 !important;
    z-index: 50 !important;
    pointer-events: none !important;
    transform-origin: 15% 0%;
    transform-style: preserve-3d !important;
    animation: calendarTearOff 820ms cubic-bezier(0.18, 0.85, 0.25, 1) forwards !important;
    will-change: transform, opacity, filter;
  }

  @keyframes paperSheenSweep {
    0% {
      opacity: 0;
      transform: translateY(-30%) rotate(-15deg);
    }
    25% {
      opacity: 0.75;
      transform: translateY(10%) rotate(-6deg);
    }
    60% {
      opacity: 0.45;
      transform: translateY(55%) rotate(12deg);
    }
    100% {
      opacity: 0;
      transform: translateY(115%) rotate(28deg);
    }
  }

  .calendar-tear-sheen {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.75) 0%,
      rgba(255, 255, 255, 0.05) 40%,
      rgba(15, 23, 42, 0.18) 100%
    );
    animation: paperSheenSweep 820ms ease-out forwards;
  }

  @keyframes calendarUnderneathAppear {
    0% {
      transform: scale(0.975) translateY(10px);
      filter: brightness(0.88) contrast(1.04);
      opacity: 0.92;
    }
    45% {
      transform: scale(0.99) translateY(4px);
      filter: brightness(0.96);
    }
    80% {
      transform: scale(1.004) translateY(-1px);
      filter: brightness(1.02);
    }
    100% {
      transform: scale(1) translateY(0);
      filter: brightness(1);
      opacity: 1;
    }
  }

  .calendar-page-underneath-revealed {
    animation: calendarUnderneathAppear 820ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes calendarTearReverse {
    0% {
      transform: translate3d(400px, 990px, 70px) rotate3d(0.3, 1, 0.9, 135deg) scale(0.72);
      opacity: 0;
      filter: drop-shadow(0 0 0 transparent);
    }
    18% {
      transform: translate3d(290px, 690px, 120px) rotate3d(0.5, 1, 0.7, 105deg) scale(0.83);
      opacity: 0.55;
      filter: drop-shadow(46px 68px 52px rgba(15, 23, 42, 0.12));
    }
    40% {
      transform: translate3d(170px, 390px, 170px) rotate3d(0.7, 1, 0.3, 68deg) scale(0.93);
      opacity: 0.88;
      filter: drop-shadow(38px 58px 48px rgba(15, 23, 42, 0.22));
    }
    64% {
      transform: translate3d(35px, 160px, 140px) rotate3d(1, 0.7, -0.4, 30deg) scale(1.02);
      opacity: 0.98;
      filter: drop-shadow(28px 46px 42px rgba(15, 23, 42, 0.32));
    }
    84% {
      transform: translate3d(-12px, 55px, 75px) rotate3d(1, -0.4, 0.3, -12deg) scale(1.00);
      opacity: 1;
      filter: drop-shadow(-14px 28px 30px rgba(15, 23, 42, 0.35));
    }
    94% {
      transform: translate3d(4px, 8px, 15px) rotate3d(0.2, 1, 0.1, 3deg) skew(-1deg);
      opacity: 1;
      filter: drop-shadow(-4px 10px 14px rgba(15, 23, 42, 0.25));
    }
    100% {
      transform: translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg) skew(0deg);
      opacity: 1;
      filter: drop-shadow(0 4px 6px rgba(15, 23, 42, 0.16));
    }
  }

  .calendar-page-reverse-tearing {
    position: absolute !important;
    inset: 0 !important;
    z-index: 50 !important;
    pointer-events: none !important;
    transform-origin: 15% 0%;
    transform-style: preserve-3d !important;
    animation: calendarTearReverse 820ms cubic-bezier(0.18, 0.85, 0.25, 1) forwards !important;
    will-change: transform, opacity, filter;
  }

  @keyframes paperSheenSweepReverse {
    0% {
      opacity: 0;
      transform: translateY(115%) rotate(28deg);
    }
    35% {
      opacity: 0.55;
      transform: translateY(55%) rotate(12deg);
    }
    75% {
      opacity: 0.75;
      transform: translateY(10%) rotate(-6deg);
    }
    100% {
      opacity: 0;
      transform: translateY(-30%) rotate(-15deg);
    }
  }

  .calendar-tear-sheen-reverse {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.75) 0%,
      rgba(255, 255, 255, 0.05) 40%,
      rgba(15, 23, 42, 0.18) 100%
    );
    animation: paperSheenSweepReverse 820ms ease-out forwards;
  }

  @keyframes calendarUnderneathCover {
    0% {
      transform: scale(1) translateY(0);
      filter: brightness(1);
      opacity: 1;
    }
    60% {
      transform: scale(0.99) translateY(4px);
      filter: brightness(0.92) contrast(1.04);
      opacity: 0.95;
    }
    100% {
      transform: scale(0.975) translateY(10px);
      filter: brightness(0.86);
      opacity: 0.85;
    }
  }

  .calendar-page-underneath-covering {
    animation: calendarUnderneathCover 820ms cubic-bezier(0.18, 0.85, 0.25, 1) forwards;
  }

  @keyframes paperParticleFly {
    0% {
      opacity: 0;
      transform: translate3d(0, 0, 0) rotate(0deg) scale(0.6);
    }
    15% {
      opacity: 1;
      transform: translate3d(calc(var(--vx) * 0.35), calc(var(--vy) * 0.45), 25px) rotate(calc(var(--rot) * 0.25)) scale(1.15);
    }
    55% {
      opacity: 0.95;
      transform: translate3d(var(--vx), var(--vy), 45px) rotate(calc(var(--rot) * 0.75)) scale(0.95);
    }
    100% {
      opacity: 0;
      transform: translate3d(calc(var(--vx) * 1.45), calc(var(--vy) + 100px), 70px) rotate(var(--rot)) scale(0.55);
    }
  }

  .paper-tear-particle {
    position: absolute;
    top: 0;
    background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
    border: 1px solid rgba(203, 213, 225, 0.7);
    border-radius: 1px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
    animation: paperParticleFly 820ms cubic-bezier(0.2, 0.8, 0.25, 1) forwards;
    pointer-events: none;
    will-change: transform, opacity;
  }

  @keyframes paperParticleFlyReverse {
    0% {
      opacity: 0;
      transform: translate3d(calc(var(--vx) * 1.45), calc(var(--vy) + 100px), 70px) rotate(var(--rot)) scale(0.55);
    }
    45% {
      opacity: 0.95;
      transform: translate3d(var(--vx), var(--vy), 45px) rotate(calc(var(--rot) * 0.75)) scale(0.95);
    }
    85% {
      opacity: 1;
      transform: translate3d(calc(var(--vx) * 0.35), calc(var(--vy) * 0.45), 25px) rotate(calc(var(--rot) * 0.25)) scale(1.15);
    }
    100% {
      opacity: 0;
      transform: translate3d(0, 0, 0) rotate(0deg) scale(0.6);
    }
  }

  .paper-tear-particle-reverse {
    position: absolute;
    top: 0;
    background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
    border: 1px solid rgba(203, 213, 225, 0.7);
    border-radius: 1px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
    animation: paperParticleFlyReverse 820ms cubic-bezier(0.2, 0.8, 0.25, 1) forwards;
    pointer-events: none;
    will-change: transform, opacity;
  }
`;

// ============================================================================
// 10. MAIN ROOT COMPONENT: ITProcurementDeploymentServices
// ============================================================================
export default function ITProcurementDeploymentServices({ onClose, onHome }) {
  // Use imported monthsData if provided by user; otherwise fall back smoothly
  const months =
    importedMonthsData && importedMonthsData.length > 0
      ? importedMonthsData
      : defaultFallbackMonths;

  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState(1);
  const [isTearingMonth, setIsTearingMonth] = useState(false);
  const [isReversingMonth, setIsReversingMonth] = useState(false);

  const rightNotebookRef = useRef(null);

  const handleBack = () => {
    if (onClose) {
      onClose();
    } else if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = "#it-services";
    }
  };

  const handleHome = () => {
    if (onHome) onHome();
    else if (onClose) onClose();
    window.location.hash = "#home";
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const currentMonth = months[currentMonthIndex] || months[0];
  const selectedItem =
    currentMonth.days.find((item) => item.day === selectedDay) ||
    currentMonth.days[0] || {
      day: 1,
      title: "Service Task",
      status: "Scheduled",
      description: "Awaiting task details",
    };

  function triggerTearOffToNext() {
    if (isTearingMonth || isReversingMonth || currentMonthIndex >= months.length - 1) return;

    playTearSound();
    setIsTearingMonth(true);

    setTimeout(() => {
      setCurrentMonthIndex(1);
      setSelectedDay(1);
      setIsTearingMonth(false);
    }, 800);
  }

  function triggerReverseTearToPrev(targetDay = 31) {
    if (isTearingMonth || isReversingMonth || currentMonthIndex === 0) return;

    playReverseTearSound();
    setIsReversingMonth(true);

    setTimeout(() => {
      setCurrentMonthIndex(0);
      setSelectedDay(targetDay);
      setIsReversingMonth(false);
    }, 800);
  }



  function handleSelectDay(item) {
    setSelectedDay(item.day);
    if (window.innerWidth < 1024 && rightNotebookRef.current) {
      rightNotebookRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  function handleChangeDay(day) {
    setSelectedDay(day);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 pb-12 select-none">
      <style>{embeddedCalendarStyles}</style>
      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 flex items-center justify-between gap-3 z-40">
        <div className="flex items-center gap-2.5">
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
            <FaHome className="w-4 h-4 text-[#040A1A]" />
            <span>Home</span>
          </button>
        </div>
      </div>

      <div className="dashboard-scene mx-auto max-w-[1140px] w-full px-2 sm:px-4 pt-1 sm:pt-2">
        {/* Simple Page Header - Centered & Responsive */}
        <header className="mb-5 sm:mb-6 text-center max-w-4xl mx-auto px-2">
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-slate-900 tracking-tight leading-tight">
            IT Procurement &amp; Deployment
          </h1>
          <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm lg:text-[14.5px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            IBCS IT Procurement &amp; Deployment focuses on technology requirements planning, solution evaluation, implementation coordination, and deployment readiness. Our approach considers compatibility, operational needs, security requirements, resource planning, and technical handover to help organisations adopt and manage suitable technology solutions.
          </p>
        </header>

        <div className="flex flex-col gap-5 sm:gap-6 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-6">
          {/* Left Monthly Calendar Notebook */}
          <section className="calendar-notebook flex flex-col min-w-0 w-full h-full p-1.5 pt-0 sm:p-3 sm:pt-0">
            <SpiralBinding count={12} />

            <div className="relative z-[1] -mt-1 flex flex-1 flex-col">
              <CalendarHeader
                currentMonthIndex={currentMonthIndex}
                onPrevMonth={() => triggerReverseTearToPrev(31)}
                onTearOff={triggerTearOffToNext}
                isTearing={isTearingMonth}
                isReversing={isReversingMonth}
              />

              <div className="relative flex-1 min-h-[300px] w-full [perspective:1400px]">
                {isTearingMonth ? (
                  <>
                    <PaperTearParticles />
                    <div className="calendar-page-underneath-revealed w-full relative">
                      <TornStubsOnSpiral />
                      <CalendarGrid
                        days={months[1]?.days || []}
                        firstDayOffset={months[1]?.firstDayOffset || 0}
                        selectedDay={1}
                        onSelectDay={handleSelectDay}
                      />
                    </div>

                    <div className="calendar-page-tearing w-full">
                      <TornPaperSpiralFringe />
                      <div className="calendar-tear-sheen" />
                      <CalendarGrid
                        days={months[0]?.days || []}
                        firstDayOffset={months[0]?.firstDayOffset || 0}
                        selectedDay={selectedDay}
                        onSelectDay={handleSelectDay}
                      />
                    </div>
                  </>
                ) : isReversingMonth ? (
                  <>
                    <PaperTearParticles reverse={true} />
                    <div className="calendar-page-underneath-covering w-full relative">
                      <TornStubsOnSpiral />
                      <CalendarGrid
                        days={months[1]?.days || []}
                        firstDayOffset={months[1]?.firstDayOffset || 0}
                        selectedDay={selectedDay}
                        onSelectDay={handleSelectDay}
                      />
                    </div>

                    <div className="calendar-page-reverse-tearing w-full">
                      <TornPaperSpiralFringe />
                      <div className="calendar-tear-sheen-reverse" />
                      <CalendarGrid
                        days={months[0]?.days || []}
                        firstDayOffset={months[0]?.firstDayOffset || 0}
                        selectedDay={31}
                        onSelectDay={handleSelectDay}
                      />
                    </div>
                  </>
                ) : (
                  <div className="w-full relative">
                    {currentMonthIndex === 1 && <TornStubsOnSpiral />}
                    <CalendarGrid
                      days={currentMonth.days}
                      firstDayOffset={currentMonth.firstDayOffset}
                      selectedDay={selectedDay}
                      onSelectDay={handleSelectDay}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Right Daily Execution Notebook */}
          <div ref={rightNotebookRef} className="min-w-0 w-full flex flex-col h-full">
            <TestExecution
              selectedItem={selectedItem}
              onChangeDay={handleChangeDay}
              onPrevMonth={() => triggerReverseTearToPrev(31)}
              onNextMonth={triggerTearOffToNext}
            />
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-6 max-w-5xl text-center text-xs text-slate-500">
        IT Procurement & Deployment Services · Desk Calendar Experience
      </footer>
    </main>
  );
}
