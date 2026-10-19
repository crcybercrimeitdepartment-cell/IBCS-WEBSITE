import React, { useState, useEffect } from 'react'
import {
  Headphones,
  HelpCircle,
  ClipboardList,
  AlertTriangle,
  Clock,
  Laptop,
  MapPin,
  Monitor,
  Terminal,
  Layers,
  Download,
  RefreshCw,
  Wrench,
  Printer,
  Wifi,
  Lock,
  Mail,
  UserCheck,
  KeyRound,
  UserPlus,
  Boxes,
  FileText,
  BookOpen,
  Activity,
  CalendarCheck,
  HeartPulse,
  Server,
  Cloud,
  Database,
  FileCode,
  Archive,
  Globe,
  Calendar,
  ArrowUpRight,
  Radio,
  Search,
  GitPullRequest,
  Settings,
  ShieldAlert,
  Shield,
  Eye,
  FileLock,
  Workflow,
  ShieldCheck,
  BarChart3,
  Gauge,
  HardDrive,
  Zap,
  Handshake,
  BadgePercent,
  ShoppingBag,
  MonitorUp,
  Recycle,
  FileEdit,
  Megaphone,
  Rocket,
  Building2,
  FlaskConical,
  BookMarked,
  CheckCircle2,
  GraduationCap,
  FileCheck,
  SkipBack,
  SkipForward,
  Home
} from 'lucide-react'
import { technicalSupportServicesData } from './TechnicalSupportITMaintenanceServicesPageData.js'

/* ═══════════════════════════════════════════════════════
   1.  62 TOPIC ICONS & LABELS METADATA
   ═══════════════════════════════════════════════════════ */
const TOPIC_META = [
  { icon: Headphones, lines: ['Tech Support', 'Model'], theme: 'from-slate-900 to-sky-950', iconColor: 'text-cyan-400' },
  { icon: HelpCircle, lines: ['IT Help', 'Desk'], theme: 'from-slate-900 to-blue-950', iconColor: 'text-blue-400' },
  { icon: ClipboardList, lines: ['Incident', 'Intake'], theme: 'from-slate-900 to-indigo-950', iconColor: 'text-indigo-400' },
  { icon: AlertTriangle, lines: ['Priority', 'Severity'], theme: 'from-slate-900 to-amber-950', iconColor: 'text-amber-400' },
  { icon: Clock, lines: ['Response', 'Targets'], theme: 'from-slate-900 to-teal-950', iconColor: 'text-teal-400' },
  { icon: Laptop, lines: ['Remote', 'Assistance'], theme: 'from-slate-900 to-sky-950', iconColor: 'text-cyan-400' },
  { icon: MapPin, lines: ['On-Site', 'Support'], theme: 'from-slate-900 to-emerald-950', iconColor: 'text-emerald-400' },
  { icon: Monitor, lines: ['Device', 'Support'], theme: 'from-slate-900 to-blue-950', iconColor: 'text-blue-400' },
  { icon: Terminal, lines: ['OS', 'Support'], theme: 'from-slate-900 to-indigo-950', iconColor: 'text-indigo-400' },
  { icon: Layers, lines: ['App', 'Support'], theme: 'from-slate-900 to-purple-950', iconColor: 'text-purple-400' },
  { icon: Download, lines: ['Software', 'Install'], theme: 'from-slate-900 to-sky-950', iconColor: 'text-cyan-400' },
  { icon: RefreshCw, lines: ['Update &', 'Patch'], theme: 'from-slate-900 to-teal-950', iconColor: 'text-teal-400' },
  { icon: Wrench, lines: ['Hardware', 'Faults'], theme: 'from-slate-900 to-amber-950', iconColor: 'text-amber-400' },
  { icon: Printer, lines: ['Printer &', 'Peripherals'], theme: 'from-slate-900 to-slate-950', iconColor: 'text-slate-300' },
  { icon: Wifi, lines: ['Network', 'Connect'], theme: 'from-slate-900 to-blue-950', iconColor: 'text-blue-400' },
  { icon: Lock, lines: ['VPN & Remote', 'Access'], theme: 'from-slate-900 to-indigo-950', iconColor: 'text-indigo-400' },
  { icon: Mail, lines: ['Email &', 'Collab'], theme: 'from-slate-900 to-sky-950', iconColor: 'text-cyan-400' },
  { icon: UserCheck, lines: ['User', 'Access'], theme: 'from-slate-900 to-emerald-950', iconColor: 'text-emerald-400' },
  { icon: KeyRound, lines: ['MFA', 'Auth'], theme: 'from-slate-900 to-purple-950', iconColor: 'text-purple-400' },
  { icon: UserPlus, lines: ['User', 'Onboard'], theme: 'from-slate-900 to-blue-950', iconColor: 'text-blue-400' },
  { icon: Boxes, lines: ['IT Asset', 'Inventory'], theme: 'from-slate-900 to-teal-950', iconColor: 'text-teal-400' },
  { icon: FileText, lines: ['Service', 'Tickets'], theme: 'from-slate-900 to-sky-950', iconColor: 'text-cyan-400' },
  { icon: BookOpen, lines: ['Knowledge', 'Base'], theme: 'from-slate-900 to-indigo-950', iconColor: 'text-indigo-400' },
  { icon: Activity, lines: ['Remote', 'Monitoring'], theme: 'from-slate-900 to-rose-950', iconColor: 'text-rose-400' },
  { icon: CalendarCheck, lines: ['Preventive', 'Planning'], theme: 'from-slate-900 to-emerald-950', iconColor: 'text-emerald-400' },
  { icon: HeartPulse, lines: ['System Health', 'Checks'], theme: 'from-slate-900 to-rose-950', iconColor: 'text-rose-400' },
  { icon: Server, lines: ['Server', 'Admin'], theme: 'from-slate-900 to-blue-950', iconColor: 'text-blue-400' },
  { icon: Cloud, lines: ['Cloud', 'Platform'], theme: 'from-slate-900 to-sky-950', iconColor: 'text-cyan-400' },
  { icon: Database, lines: ['Database', 'Ops'], theme: 'from-slate-900 to-indigo-950', iconColor: 'text-indigo-400' },
  { icon: FileCode, lines: ['App Logs &', 'Errors'], theme: 'from-slate-900 to-purple-950', iconColor: 'text-purple-400' },
  { icon: Archive, lines: ['Backup', 'Jobs'], theme: 'from-slate-900 to-teal-950', iconColor: 'text-teal-400' },
  { icon: Globe, lines: ['Cert & Domain', 'Expiry'], theme: 'from-slate-900 to-sky-950', iconColor: 'text-cyan-400' },
  { icon: Calendar, lines: ['Scheduled', 'Tasks'], theme: 'from-slate-900 to-blue-950', iconColor: 'text-blue-400' },
  { icon: ArrowUpRight, lines: ['Incident', 'Escalation'], theme: 'from-slate-900 to-amber-950', iconColor: 'text-amber-400' },
  { icon: Radio, lines: ['Major', 'Incident'], theme: 'from-slate-900 to-rose-950', iconColor: 'text-rose-400' },
  { icon: Search, lines: ['Root-Cause', 'Analysis'], theme: 'from-slate-900 to-indigo-950', iconColor: 'text-indigo-400' },
  { icon: GitPullRequest, lines: ['Change', 'Requests'], theme: 'from-slate-900 to-purple-950', iconColor: 'text-purple-400' },
  { icon: Settings, lines: ['Config', 'Baselines'], theme: 'from-slate-900 to-slate-950', iconColor: 'text-slate-300' },
  { icon: ShieldAlert, lines: ['Patch &', 'Vuln'], theme: 'from-slate-900 to-amber-950', iconColor: 'text-amber-400' },
  { icon: Shield, lines: ['Endpoint', 'Security'], theme: 'from-slate-900 to-emerald-950', iconColor: 'text-emerald-400' },
  { icon: Eye, lines: ['Suspicious', 'Activity'], theme: 'from-slate-900 to-rose-950', iconColor: 'text-rose-400' },
  { icon: FileLock, lines: ['Data', 'Protection'], theme: 'from-slate-900 to-blue-950', iconColor: 'text-blue-400' },
  { icon: Workflow, lines: ['Service', 'Continuity'], theme: 'from-slate-900 to-indigo-950', iconColor: 'text-indigo-400' },
  { icon: ShieldCheck, lines: ['Disaster', 'Recovery'], theme: 'from-slate-900 to-teal-950', iconColor: 'text-teal-400' },
  { icon: BarChart3, lines: ['SLA', 'Reporting'], theme: 'from-slate-900 to-sky-950', iconColor: 'text-cyan-400' },
  { icon: Gauge, lines: ['Capacity', 'Review'], theme: 'from-slate-900 to-purple-950', iconColor: 'text-purple-400' },
  { icon: HardDrive, lines: ['Storage &', 'Disk'], theme: 'from-slate-900 to-slate-950', iconColor: 'text-slate-300' },
  { icon: Zap, lines: ['Performance', 'Issues'], theme: 'from-slate-900 to-amber-950', iconColor: 'text-amber-400' },
  { icon: Handshake, lines: ['Vendor', 'Coordination'], theme: 'from-slate-900 to-emerald-950', iconColor: 'text-emerald-400' },
  { icon: BadgePercent, lines: ['Licence &', 'Sub'], theme: 'from-slate-900 to-blue-950', iconColor: 'text-blue-400' },
  { icon: ShoppingBag, lines: ['IT', 'Procurement'], theme: 'from-slate-900 to-teal-950', iconColor: 'text-teal-400' },
  { icon: MonitorUp, lines: ['Device', 'Setup'], theme: 'from-slate-900 to-sky-950', iconColor: 'text-cyan-400' },
  { icon: Recycle, lines: ['Device', 'Retirement'], theme: 'from-slate-900 to-emerald-950', iconColor: 'text-emerald-400' },
  { icon: FileEdit, lines: ['KB', 'Maintenance'], theme: 'from-slate-900 to-indigo-950', iconColor: 'text-indigo-400' },
  { icon: Megaphone, lines: ['User', 'Updates'], theme: 'from-slate-900 to-amber-950', iconColor: 'text-amber-400' },
  { icon: Rocket, lines: ['Software', 'Releases'], theme: 'from-slate-900 to-purple-950', iconColor: 'text-purple-400' },
  { icon: Building2, lines: ['Gov &', 'Enterprise'], theme: 'from-slate-900 to-blue-950', iconColor: 'text-blue-400' },
  { icon: FlaskConical, lines: ['Dev & Test', 'Environments'], theme: 'from-slate-900 to-teal-950', iconColor: 'text-teal-400' },
  { icon: BookMarked, lines: ['Runbooks &', 'Docs'], theme: 'from-slate-900 to-indigo-950', iconColor: 'text-indigo-400' },
  { icon: CheckCircle2, lines: ['Service', 'Review'], theme: 'from-slate-900 to-emerald-950', iconColor: 'text-emerald-400' },
  { icon: GraduationCap, lines: ['Knowledge', 'Transfer'], theme: 'from-slate-900 to-sky-950', iconColor: 'text-cyan-400' },
  { icon: FileCheck, lines: ['Scope &', 'Exclusions'], theme: 'from-slate-900 to-slate-950', iconColor: 'text-slate-300' }
]

/* ═══════════════════════════════════════════════════════
   2.  MAIN COMPONENT (100% PURE SVG 3D + ROTATING ARC)
   ═══════════════════════════════════════════════════════ */
export default function TechnicalSupportServices({ onClose, onHome }) {
  const handleBack = () => {
    if (onClose) onClose();
    else window.history.back();
  };

  const handleHome = () => {
    if (onHome) onHome();
    else if (onClose) onClose();
    else window.location.hash = '#home';
  };

  const rawServices = technicalSupportServicesData?.services || []

  // Combine data items with their related icons & styling
  const servicesList = rawServices.map((s, idx) => {
    const meta = TOPIC_META[idx] || TOPIC_META[0]
    return {
      ...s,
      icon: meta.icon,
      lines: s.lines || meta.lines,
      theme: s.theme || meta.theme,
      iconColor: s.iconColor || meta.iconColor
    }
  })

  const [activeIndex, setActiveIndex] = useState(0) // Default: Service 1
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false)
  const [isBooting, setIsBooting] = useState(true)
  const [direction, setDirection] = useState('next')
  const [isClickPulse, setIsClickPulse] = useState(false)
  const [touchStartX, setTouchStartX] = useState(null)

  // 1.8s Initial Cyber Boot-Up Sequence on Reload
  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setIsBooting(false)
    }, 1800)
    return () => clearTimeout(bootTimer)
  }, [])

  const currentService = servicesList[activeIndex] || servicesList[0] || {
    id: 1,
    title: 'Technical Support Service Model',
    description: '',
    icon: Headphones
  }

  const ActiveIcon = currentService.icon || Headphones

  // Split title for clean two-tone typography
  const splitTitle = (title = '') => {
    const words = title.trim().split(/\s+/)
    if (words.length <= 1) return { first: title, second: '' }
    const mid = Math.ceil(words.length / 2)
    return {
      first: words.slice(0, mid).join(' '),
      second: words.slice(mid).join(' ')
    }
  }
  const titleParts = splitTitle(currentService.title)

  const handleSelectService = (i) => {
    if (i === activeIndex) return
    setDirection(i > activeIndex ? 'next' : 'prev')
    setIsClickPulse(true)
    setIsTransitioning(true)
    setActiveIndex(i)
    setTimeout(() => setIsTransitioning(false), 280)
    setTimeout(() => setIsClickPulse(false), 450)
  }

  const handlePrev = () => {
    setDirection('prev')
    setIsClickPulse(true)
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev === 0 ? servicesList.length - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 280)
    setTimeout(() => setIsClickPulse(false), 450)
  }

  const handleNext = () => {
    setDirection('next')
    setIsClickPulse(true)
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev === servicesList.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 280)
    setTimeout(() => setIsClickPulse(false), 450)
  }

  // Mobile Touch Swipe Gesture Handlers
  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    if (touchStartX === null || !e.changedTouches || e.changedTouches.length === 0) return
    const diff = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
    setTouchStartX(null)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [servicesList.length])

  // Automatic Smooth Rotation & Content Change (Every 4.5 Seconds - Starts after Boot)
  useEffect(() => {
    if (isBooting || isAutoPlayPaused || servicesList.length <= 1) return

    const autoTimer = setInterval(() => {
      setIsTransitioning(true)
      setActiveIndex((prev) => (prev === servicesList.length - 1 ? 0 : prev + 1))
      setTimeout(() => setIsTransitioning(false), 240)
    }, 4500)

    return () => clearInterval(autoTimer)
  }, [isBooting, isAutoPlayPaused, servicesList.length])

  /* ── 9 Arc Node Positions (Position 4 is TOP APEX CENTER) ── */
  const arcNodes = [
    { x: 6.8, y: 36.5 }, // pos 0 (left-most)
    { x: 13.8, y: 24.5 }, // pos 1
    { x: 23.8, y: 15.2 }, // pos 2
    { x: 35.2, y: 9.2 }, // pos 3
    { x: 50.0, y: 5.6 }, // pos 4 (TOP APEX CENTER - Active Item)
    { x: 64.8, y: 9.2 }, // pos 5
    { x: 76.2, y: 15.2 }, // pos 6
    { x: 86.2, y: 24.5 }, // pos 7
    { x: 93.2, y: 36.5 }  // pos 8 (right-most)
  ]

  /* ── 13 Dynamic Orbital Arc Slots (Slots 0 to 8 visible on arc; -2,-1 and 9,10 are entry/exit buffers) ── */
  const ARC_SLOTS = [
    { slotIdx: -2, x: -0.2, y: 66.0, opacity: 0, scale: 0.65 },
    { slotIdx: -1, x: 2.2, y: 50.5, opacity: 0, scale: 0.78 },
    { slotIdx: 0, x: 6.8, y: 36.5, opacity: 0.88, scale: 0.95 },
    { slotIdx: 1, x: 13.8, y: 24.5, opacity: 0.92, scale: 1.0 },
    { slotIdx: 2, x: 23.8, y: 15.2, opacity: 0.96, scale: 1.0 },
    { slotIdx: 3, x: 35.2, y: 9.2, opacity: 0.98, scale: 1.04 },
    { slotIdx: 4, x: 50.0, y: 5.6, opacity: 1.0, scale: 1.18 }, // TOP APEX ACTIVE
    { slotIdx: 5, x: 64.8, y: 9.2, opacity: 0.98, scale: 1.04 },
    { slotIdx: 6, x: 76.2, y: 15.2, opacity: 0.96, scale: 1.0 },
    { slotIdx: 7, x: 86.2, y: 24.5, opacity: 0.92, scale: 1.0 },
    { slotIdx: 8, x: 93.2, y: 36.5, opacity: 0.88, scale: 0.95 },
    { slotIdx: 9, x: 97.8, y: 50.5, opacity: 0, scale: 0.78 },
    { slotIdx: 10, x: 100.2, y: 66.0, opacity: 0, scale: 0.65 }
  ]

  /* ── Waveform Audio Bars Heights (Both Sides Photorealistic Audio Spectrum) ── */
  const leftWaveform = [14, 22, 38, 55, 78, 62, 105, 84, 136, 112, 158, 126, 145, 96, 128, 88, 110, 75, 95, 68, 85, 58, 76, 50, 68, 44, 58, 38, 48, 32, 26, 18, 14, 10]
  const rightWaveform = [10, 14, 18, 26, 32, 48, 38, 58, 44, 68, 50, 76, 58, 85, 68, 95, 75, 110, 88, 128, 96, 145, 126, 158, 112, 136, 84, 105, 62, 78, 55, 38, 22, 14]

  const eqPatterns = [
    [0.15, 0.94, 0.32, 0.84, 0.15],
    [0.82, 0.18, 0.92, 0.3, 0.82],
    [0.22, 0.86, 0.16, 0.96, 0.38, 0.22],
    [0.42, 0.94, 0.22, 0.86, 0.42],
    [0.88, 0.24, 0.74, 0.16, 0.94, 0.88]
  ]

  const getEqValues = (h, patternIdx) => {
    const pat = eqPatterns[patternIdx % eqPatterns.length]
    const y1 = pat.map((m) => (502 - h * m).toFixed(1)).join(';')
    const y2 = pat.map((m) => (502 + h * m).toFixed(1)).join(';')
    return { y1, y2 }
  }

  /* ── Connecting SVG Arc Path in 1024x768 viewBox ── */
  const vbW = 1024
  const vbH = 768
  const arcPts = arcNodes.map((n) => ({
    x: (n.x / 100) * vbW,
    y: (n.y / 100) * vbH
  }))

  const arcD = arcPts.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`
    const prev = arcPts[i - 1]
    const cx = (prev.x + p.x) / 2
    const cy = Math.min(prev.y, p.y) - 15
    return `${acc} Q ${cx} ${cy} ${p.x} ${p.y}`
  }, '')

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full min-h-screen bg-white flex flex-col items-center justify-start relative overflow-x-hidden select-none py-2 sm:py-3 px-2 sm:px-4"
    >
      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 flex items-center justify-start gap-3 z-40 relative">
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
      {/* ── Keyframe Animations for Living Dynamic Neon Lights ── */}
      <style>{`
        /* 1. Concentric Platform 360° Rotate Animations */
        @keyframes spinOffsetCW {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -1000; }
        }
        @keyframes spinOffsetCCW {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 1000; }
        }
        @keyframes spinCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinCCW {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        /* Audio Equalizer Dynamic Waveform Animations (Both Sides Real-Time Bounce) */
        @keyframes eqDance1 {
          0%, 100% { transform: scaleY(0.28); opacity: 0.55; }
          25% { transform: scaleY(1.55); opacity: 1; }
          50% { transform: scaleY(0.65); opacity: 0.75; }
          75% { transform: scaleY(1.35); opacity: 0.95; }
        }
        @keyframes eqDance2 {
          0%, 100% { transform: scaleY(1.4); opacity: 0.95; }
          30% { transform: scaleY(0.32); opacity: 0.58; }
          60% { transform: scaleY(1.68); opacity: 1; }
          85% { transform: scaleY(0.7); opacity: 0.8; }
        }
        @keyframes eqDance3 {
          0%, 100% { transform: scaleY(0.5); opacity: 0.68; }
          20% { transform: scaleY(1.52); opacity: 1; }
          45% { transform: scaleY(0.28); opacity: 0.5; }
          70% { transform: scaleY(1.42); opacity: 0.94; }
        }
        @keyframes eqDance4 {
          0%, 100% { transform: scaleY(1.25); opacity: 0.88; }
          35% { transform: scaleY(0.38); opacity: 0.58; }
          65% { transform: scaleY(1.62); opacity: 1; }
          80% { transform: scaleY(0.25); opacity: 0.45; }
        }
        @keyframes eqDance5 {
          0%, 100% { transform: scaleY(0.42); opacity: 0.62; }
          40% { transform: scaleY(1.48); opacity: 0.95; }
          70% { transform: scaleY(0.32); opacity: 0.52; }
          85% { transform: scaleY(1.72); opacity: 1; }
        }
        @keyframes eqDance6 {
          0%, 100% { transform: scaleY(1.45); opacity: 1; }
          25% { transform: scaleY(0.42); opacity: 0.6; }
          55% { transform: scaleY(1.32); opacity: 0.88; }
          80% { transform: scaleY(0.28); opacity: 0.48; }
        }

        /* 2. Living Neon Luminescence & Breathing Aura */
        @keyframes neonGlowBreathe {
          0%, 100% {
            opacity: 0.82;
            filter: drop-shadow(0 0 6px rgba(0, 245, 255, 0.75)) drop-shadow(0 0 16px rgba(0, 245, 255, 0.45));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 14px rgba(0, 245, 255, 1)) drop-shadow(0 0 30px rgba(0, 245, 255, 0.9));
          }
        }
        @keyframes neonGlowBreatheSoft {
          0%, 100% {
            opacity: 0.85;
            filter: drop-shadow(0 0 4px rgba(0, 245, 255, 0.6)) drop-shadow(0 0 12px rgba(0, 245, 255, 0.4));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 10px rgba(0, 245, 255, 0.95)) drop-shadow(0 0 22px rgba(0, 245, 255, 0.75));
          }
        }

        /* 3. Stage Floor Radial Emission Pulse */
        @keyframes floorAuraPulse {
          0%, 100% {
            opacity: 0.78;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.025, 1.05);
          }
        }

        /* 4. Headband Apex Laser Scan */
        @keyframes ledScanBeam {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -110; }
        }

        /* 5. Ear Cup Curved Neon Light Runners */
        @keyframes earCurveFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -200; }
        }

        /* 6. Dotted Arc Fiber Optic Transmission */
        @keyframes arcDataFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 120; }
        }

        /* 7. Dial & Control Button Glowing Aura */
        @keyframes dialNeonPulse {
          0%, 100% {
            filter: drop-shadow(0 0 6px rgba(0, 245, 255, 0.65));
            stroke: #00f5ff;
          }
          50% {
            filter: drop-shadow(0 0 14px rgba(0, 245, 255, 1)) drop-shadow(0 0 22px rgba(34, 211, 238, 0.8));
            stroke: #67e8f9;
          }
        }
        @keyframes btnAuraBreathe {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 245, 255, 0.75), inset 0 0 8px rgba(0, 245, 255, 0.35);
          }
          50% {
            box-shadow: 0 0 34px rgba(0, 245, 255, 1), 0 0 16px rgba(255, 255, 255, 0.6), inset 0 0 12px rgba(0, 245, 255, 0.6);
          }
        }

        /* 8. Ambient Background Float */
        @keyframes ambientAuraFloat {
          0%, 100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.85;
          }
          50% {
            transform: translateX(-50%) scale(1.06);
            opacity: 1;
          }
        }

        @keyframes pulseHalo { 0%{transform:scale(1);opacity:.85} 50%{transform:scale(1.22);opacity:.25} 100%{transform:scale(1);opacity:.85} }
        @keyframes waveFloat { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(1.18)} }
        @keyframes dotPulse { 0%,100%{opacity:.45} 50%{opacity:1} }
        @keyframes contentFadeIn { 0%{opacity:0;transform:translateY(8px)} 100%{opacity:1;transform:translateY(0)} }

        /* ── NEXT & PREV BUTTON CLICK SHOCKWAVE & DIRECTIONAL SLIDES ── */
        @keyframes clickShockwave {
          0% {
            transform: scale(0.85);
            opacity: 1;
            box-shadow: 0 0 16px rgba(0, 245, 255, 1);
          }
          60% {
            transform: scale(1.7);
            opacity: 0.85;
            box-shadow: 0 0 26px rgba(0, 245, 255, 0.85);
          }
          100% {
            transform: scale(2.4);
            opacity: 0;
            box-shadow: 0 0 0 rgba(0, 245, 255, 0);
          }
        }

        @keyframes slideInNext {
          0% {
            opacity: 0;
            transform: translateX(36px) scale(0.96);
            filter: blur(4px);
          }
          65% {
            opacity: 0.95;
            transform: translateX(-3px) scale(1.008);
            filter: blur(0.5px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0px);
          }
        }

        @keyframes slideInPrev {
          0% {
            opacity: 0;
            transform: translateX(-36px) scale(0.96);
            filter: blur(4px);
          }
          65% {
            opacity: 0.95;
            transform: translateX(3px) scale(1.008);
            filter: blur(0.5px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0px);
          }
        }

        /* ── CYBER AUDIO BOOT-UP RELOAD ENTRANCE ── */
        .canvas-boot-entrance {
          animation: canvasBootRise 1.15s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes canvasBootRise {
          0% {
            opacity: 0;
            transform: translateY(36px) scale(0.94);
          }
          65% {
            opacity: 1;
            transform: translateY(-3px) scale(1.006);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .stage-boot-layer {
          animation: stageBootIn 1.15s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
          transform-origin: 512px 680px;
          transform-box: view-box;
        }
        @keyframes stageBootIn {
          0% {
            opacity: 0;
            transform: translateY(45px) scale(0.92);
          }
          65% {
            opacity: 1;
            transform: translateY(-4px) scale(1.015);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .hp-boot-layer {
          animation: headphoneDescent 1.25s cubic-bezier(0.2, 0.9, 0.3, 1) 0.15s both;
          transform-origin: 512px 420px;
          transform-box: view-box;
        }
        @keyframes headphoneDescent {
          0% {
            opacity: 0;
            transform: translateY(-60px);
          }
          65% {
            opacity: 1;
            transform: translateY(6px);
          }
          85% {
            transform: translateY(-2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .eq-boot-layer {
          animation: eqGroupSweep 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
          transform-origin: 512px 502px;
          transform-box: view-box;
        }
        @keyframes eqGroupSweep {
          0% {
            opacity: 0;
            transform: scaleY(0.08) scaleX(0.7);
          }
          55% {
            opacity: 1;
            transform: scaleY(1.3) scaleX(1.05);
          }
          85% {
            transform: scaleY(0.9) scaleX(0.98);
          }
          100% {
            opacity: 1;
            transform: scaleY(1) scaleX(1);
          }
        }

        @keyframes arcDrawIn {
          0% {
            stroke-dasharray: 1200;
            stroke-dashoffset: 1200;
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            stroke-dasharray: 6 6;
            stroke-dashoffset: 0;
            opacity: 0.8;
          }
        }

        @keyframes dotBootPop {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          70% {
            opacity: 1;
            transform: scale(1.4);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes nodeOrbitPop {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-20deg);
          }
          70% {
            opacity: 1;
            transform: scale(1.22) rotate(3deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes earBtnBoot {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }
          70% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.25);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes centerBootReveal {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9) translateY(20px);
            filter: blur(8px);
          }
          65% {
            opacity: 0.95;
            filter: blur(1.5px);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) translateY(0);
            filter: blur(0px);
          }
        }

        @keyframes headerFadeDown {
          0% {
            opacity: 0;
            transform: translateY(-18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes miniEqBounce {
          0%, 100% { height: 3px; }
          50% { height: 13px; }
        }

        @keyframes holoFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
            filter: drop-shadow(0 0 10px rgba(0,245,255,0.6));
          }
          50% {
            transform: translateY(-4px) scale(1.05);
            filter: drop-shadow(0 0 18px rgba(0,245,255,0.95));
          }
        }
      `}</style>

      {/* ── Ambient Radial Cyan Aura in Background ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '25%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1180,
          height: 680,
          background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.12) 0%, rgba(59,130,246,0.04) 48%, transparent 72%)',
          borderRadius: '50%',
          filter: 'blur(70px)',
          zIndex: 0,
          animation: 'ambientAuraFloat 6s ease-in-out infinite'
        }}
      />

      {/* ── Page Main Header ── */}
      <header
        className="w-full max-w-4xl mx-auto px-3 sm:px-4 pt-1 sm:pt-2 pb-2 sm:pb-3 text-center relative z-20 flex flex-col items-center"
        style={{ animation: 'headerFadeDown 0.85s ease-out both' }}
      >
        {/* Primary Page Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-black tracking-tight text-slate-900 leading-tight">
          {technicalSupportServicesData?.header?.titlePrefix || 'Technical Support &'}{' '}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            {technicalSupportServicesData?.header?.titleHighlight || 'IT Maintenance'}
          </span>
        </h1>

        {/* Official Page Description */}
        <p className="mt-1.5 sm:mt-2 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[15.5px] text-slate-600 font-normal leading-relaxed max-w-4xl mx-auto text-center px-2 line-clamp-3 sm:line-clamp-none">
          {technicalSupportServicesData?.header?.description || technicalSupportServicesData?.intro || technicalSupportServicesData?.pageDescription || 'IBCS Technical Support & IT Maintenance focuses on helping organisations maintain their technology environments through troubleshooting, routine maintenance, issue analysis, and technical guidance. Our approach aims to support system continuity, address technical problems, and keep software and infrastructure aligned with operational requirements.'}
        </p>
      </header>

      {/* ═══════════ PROPORTIONAL 1024×768 CANVAS ═══════════ */}
      <div
        className="relative w-full max-w-[1140px] mx-auto mt-7 sm:mt-9 canvas-boot-entrance"
        style={{ aspectRatio: '1024 / 768' }}
        onMouseEnter={() => setIsAutoPlayPaused(true)}
        onMouseLeave={() => setIsAutoPlayPaused(false)}
      >
        {/* ────────────────────────────────────────────────
             100% PURE SVG 3D SCENE:
             Waveform + 3D Platform + 3D Headphones + Arc
             (ZERO EXTERNAL IMAGES — 100% VECTOR CODE)
        ──────────────────────────────────────────────── */}
        <svg
          viewBox="0 0 1024 768"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 5 }}
        >
          <defs>
            {/* Neon Bloom Filters */}
            <filter id="neonBloom" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="b1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="b2" />
              <feMerge>
                <feMergeNode in="b2" />
                <feMergeNode in="b1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="softBloom" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="eqNeonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="g1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="g2" />
              <feMerge>
                <feMergeNode in="g2" />
                <feMergeNode in="g1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="contactShadowBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="7" />
            </filter>

            <filter id="hpShadow" x="-25%" y="-15%" width="150%" height="150%">
              <feDropShadow dx="0" dy="20" stdDeviation="24" floodColor="#0f172a" floodOpacity="0.25" />
            </filter>

            <filter id="arcNeon" x="-35%" y="-35%" width="170%" height="170%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="arcBlur" />
              <feMerge>
                <feMergeNode in="arcBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Headband Gradients */}
            <linearGradient id="hbOuterLeather" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#080d18" />
              <stop offset="12%" stopColor="#1e293b" />
              <stop offset="26%" stopColor="#0f172a" />
              <stop offset="50%" stopColor="#253349" />
              <stop offset="74%" stopColor="#0f172a" />
              <stop offset="88%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#080d18" />
            </linearGradient>

            <linearGradient id="hbChromeEdge" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="25%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>

            <linearGradient id="chromeBevel" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#e2e8f0" />
              <stop offset="65%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>

            {/* Ear Cushion Leather Gradients with Ambient Bottom Bounce Light */}
            <linearGradient id="cushionLeatherLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#070c16" />
              <stop offset="26%" stopColor="#1e2a3c" />
              <stop offset="60%" stopColor="#121b2a" />
              <stop offset="88%" stopColor="#070b14" />
              <stop offset="100%" stopColor="#020409" />
            </linearGradient>

            <linearGradient id="cushionLeatherRight" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#070c16" />
              <stop offset="26%" stopColor="#1e2a3c" />
              <stop offset="60%" stopColor="#121b2a" />
              <stop offset="88%" stopColor="#070b14" />
              <stop offset="100%" stopColor="#020409" />
            </linearGradient>

            <linearGradient id="cushionBounceLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00f5ff" stopOpacity="0" />
              <stop offset="75%" stopColor="#00f5ff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.18" />
            </linearGradient>

            {/* Outer Shell Metallic Lacquer */}
            <linearGradient id="shellNavyLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#060c18" />
              <stop offset="24%" stopColor="#1d2e46" />
              <stop offset="55%" stopColor="#101b2a" />
              <stop offset="88%" stopColor="#09111c" />
              <stop offset="100%" stopColor="#03060c" />
            </linearGradient>

            <linearGradient id="shellNavyRight" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#060c18" />
              <stop offset="24%" stopColor="#1d2e46" />
              <stop offset="55%" stopColor="#101b2a" />
              <stop offset="88%" stopColor="#09111c" />
              <stop offset="100%" stopColor="#03060c" />
            </linearGradient>

            {/* Inner Cavity Radial */}
            <radialGradient id="innerCavityGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#010205" />
              <stop offset="70%" stopColor="#040812" />
              <stop offset="100%" stopColor="#0a1220" />
            </radialGradient>

            {/* Platform Gradients */}
            <radialGradient id="pfFloorGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.48" />
              <stop offset="35%" stopColor="#0284c7" stopOpacity="0.24" />
              <stop offset="72%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="pfStepBevel" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="22%" stopColor="#f8fafc" />
              <stop offset="58%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            <radialGradient id="pfStageSurface" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#f8fafc" />
              <stop offset="80%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </radialGradient>
          </defs>

          {/* ── 1. AUDIO EQUALIZER WAVEFORM (Behind Headphones — Both Sides Energetically Animated) ── */}
          <g
            id="audioEqualizerSpectrum"
            className="eq-boot-layer"
            style={{
              filter: isClickPulse
                ? 'drop-shadow(0 0 8px rgba(0, 245, 255, 0.95)) drop-shadow(0 0 16px rgba(56, 189, 248, 0.6))'
                : undefined,
              transition: 'filter 350ms ease-out'
            }}
          >
            {/* Left Side Equalizer Bars (Extending outward to the left) */}
            {leftWaveform.map((h, i) => {
              const dur = (0.68 + (i % 6) * 0.12).toFixed(2)
              const delay = ((i * 0.04) % 0.52).toFixed(2)
              const x = 18 + i * 8.0
              const { y1: y1Vals, y2: y2Vals } = getEqValues(h, i)
              return (
                <line
                  key={`lw-${i}`}
                  x1={x}
                  y1={502 - h * 0.5}
                  x2={x}
                  y2={502 + h * 0.5}
                  stroke="#38bdf8"
                  strokeWidth="3.0"
                  strokeLinecap="round"
                  opacity={0.58 + (h / 158) * 0.28}
                  style={{
                    filter: 'drop-shadow(0 0 2px rgba(56, 189, 248, 0.45))'
                  }}
                >
                  <animate
                    attributeName="y1"
                    values={y1Vals}
                    dur={`${dur}s`}
                    begin={`-${delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y2"
                    values={y2Vals}
                    dur={`${dur}s`}
                    begin={`-${delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.45;0.82;0.52;0.78;0.45"
                    dur={`${dur}s`}
                    begin={`-${delay}s`}
                    repeatCount="indefinite"
                  />
                </line>
              )
            })}

            {/* Right Side Equalizer Bars (Extending outward to the right) */}
            {rightWaveform.map((h, i) => {
              const dur = (0.68 + ((33 - i) % 6) * 0.12).toFixed(2)
              const delay = ((((33 - i) * 0.04) % 0.52)).toFixed(2)
              const x = 742 + i * 8.0
              const { y1: y1Vals, y2: y2Vals } = getEqValues(h, i + 3)
              return (
                <line
                  key={`rw-${i}`}
                  x1={x}
                  y1={502 - h * 0.5}
                  x2={x}
                  y2={502 + h * 0.5}
                  stroke="#38bdf8"
                  strokeWidth="3.0"
                  strokeLinecap="round"
                  opacity={0.58 + (h / 158) * 0.28}
                  style={{
                    filter: 'drop-shadow(0 0 2px rgba(56, 189, 248, 0.45))'
                  }}
                >
                  <animate
                    attributeName="y1"
                    values={y1Vals}
                    dur={`${dur}s`}
                    begin={`-${delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y2"
                    values={y2Vals}
                    dur={`${dur}s`}
                    begin={`-${delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.45;0.82;0.52;0.78;0.45"
                    dur={`${dur}s`}
                    begin={`-${delay}s`}
                    repeatCount="indefinite"
                  />
                </line>
              )
            })}
          </g>

          {/* ── 2. 3D FUTURISTIC STAGE / PODIUM WITH LIVING NEON LIGHTS ── */}
          <g className="stage-boot-layer">
            <ellipse
              cx="512"
              cy="714"
              rx="495"
              ry="78"
              fill="url(#pfFloorGlow)"
              style={{
                transformOrigin: '512px 714px',
                animation: 'floorAuraPulse 3.8s ease-in-out infinite'
              }}
            />

            {/* Tier 1 Base Cylinder */}
            <path d="M 38 672 C 38 718, 986 718, 986 672 L 986 696 C 986 742, 38 742, 38 696 Z" fill="url(#pfStepBevel)" />
            {/* Tier 1 Static Base Glow Track */}
            <ellipse
              cx="512"
              cy="694"
              rx="474"
              ry="70"
              fill="none"
              stroke="#00f5ff"
              strokeWidth="4.8"
              filter="url(#neonBloom)"
              style={{ animation: 'neonGlowBreathe 3s ease-in-out infinite' }}
            />
            <ellipse cx="512" cy="694" rx="474" ry="70" fill="none" stroke="#38bdf8" strokeWidth="1.8" opacity="0.6" />

            {/* Tier 1 True Rotating 360° Neon Laser Beams (Clockwise) */}
            <ellipse
              cx="512"
              cy="694"
              rx="474"
              ry="70"
              fill="none"
              stroke="#00f5ff"
              strokeWidth="7"
              strokeLinecap="round"
              pathLength="1000"
              strokeDasharray="220 280 220 280"
              filter="url(#neonBloom)"
              style={{ animation: 'spinOffsetCW 3.6s linear infinite' }}
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-1000"
                dur="3.6s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse
              cx="512"
              cy="694"
              rx="474"
              ry="70"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.2"
              strokeLinecap="round"
              pathLength="1000"
              strokeDasharray="160 340 160 340"
              filter="url(#neonBloom)"
              style={{ animation: 'spinOffsetCW 3.6s linear infinite' }}
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-1000"
                dur="3.6s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse cx="512" cy="672" rx="470" ry="68" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Tier 2 Middle Step Cylinder */}
            <path d="M 72 650 C 72 692, 952 692, 952 650 L 952 672 C 952 714, 72 714, 72 672 Z" fill="url(#pfStepBevel)" />
            {/* Tier 2 Static Base Glow Track */}
            <ellipse
              cx="512"
              cy="670"
              rx="440"
              ry="62"
              fill="none"
              stroke="#00f5ff"
              strokeWidth="4.2"
              filter="url(#neonBloom)"
              style={{ animation: 'neonGlowBreathe 2.8s ease-in-out 0.4s infinite' }}
            />
            <ellipse cx="512" cy="670" rx="440" ry="62" fill="none" stroke="#38bdf8" strokeWidth="1.6" opacity="0.6" />

            {/* Tier 2 True Rotating 360° Neon Laser Beams (Counter-Clockwise) */}
            <ellipse
              cx="512"
              cy="670"
              rx="440"
              ry="62"
              fill="none"
              stroke="#00f5ff"
              strokeWidth="6.5"
              strokeLinecap="round"
              pathLength="1000"
              strokeDasharray="160 173 160 173 160 174"
              filter="url(#neonBloom)"
              style={{ animation: 'spinOffsetCCW 3.2s linear infinite' }}
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="1000"
                dur="3.2s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse
              cx="512"
              cy="670"
              rx="440"
              ry="62"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.8"
              strokeLinecap="round"
              pathLength="1000"
              strokeDasharray="120 213 120 213 120 214"
              filter="url(#neonBloom)"
              style={{ animation: 'spinOffsetCCW 3.2s linear infinite' }}
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="1000"
                dur="3.2s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse cx="512" cy="650" rx="436" ry="60" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />

            {/* Tier 3 Top Stage Cylinder */}
            <path d="M 112 626 C 112 666, 912 666, 912 626 L 912 648 C 912 688, 112 688, 112 648 Z" fill="url(#pfStepBevel)" />
            <ellipse cx="512" cy="626" rx="400" ry="50" fill="url(#pfStageSurface)" stroke="#e2e8f0" strokeWidth="2" />
            {/* Tier 3 Static Base Glow Track */}
            <ellipse
              cx="512"
              cy="623"
              rx="378"
              ry="43"
              fill="none"
              stroke="#00f5ff"
              strokeWidth="3.2"
              filter="url(#softBloom)"
              style={{ animation: 'neonGlowBreatheSoft 2.5s ease-in-out 0.8s infinite' }}
            />
            <ellipse cx="512" cy="620" rx="338" ry="35" fill="none" stroke="#ffffff" strokeWidth="2.4" opacity="0.98" />

            {/* Tier 3 True Rotating 360° Neon Laser Beams (Clockwise) */}
            <ellipse
              cx="512"
              cy="623"
              rx="378"
              ry="43"
              fill="none"
              stroke="#00f5ff"
              strokeWidth="6"
              strokeLinecap="round"
              pathLength="1000"
              strokeDasharray="280 720"
              filter="url(#softBloom)"
              style={{ animation: 'spinOffsetCW 2.5s linear infinite' }}
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-1000"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse
              cx="512"
              cy="623"
              rx="378"
              ry="43"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.6"
              strokeLinecap="round"
              pathLength="1000"
              strokeDasharray="220 780"
              filter="url(#softBloom)"
              style={{ animation: 'spinOffsetCW 2.5s linear infinite' }}
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-1000"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </ellipse>
          </g>

          {/* Contact Shadows under Ear Cups */}
          <ellipse cx="232" cy="633" rx="72" ry="18" fill="#0f172a" opacity="0.32" filter="url(#contactShadowBlur)" />
          <ellipse cx="792" cy="633" rx="72" ry="18" fill="#0f172a" opacity="0.32" filter="url(#contactShadowBlur)" />

          {/* ── 3. PHOTOREALISTIC 3D HEADPHONES ── */}
          <g filter="url(#hpShadow)" className="hp-boot-layer">
            {/* HEADBAND ARCH */}
            <path d="M 198 385 C 198 140, 826 140, 826 385" fill="none" stroke="url(#hbOuterLeather)" strokeWidth="44" strokeLinecap="round" />
            <path d="M 220 366 C 220 156, 804 156, 804 366" fill="none" stroke="url(#hbChromeEdge)" strokeWidth="3.5" opacity="0.85" />
            <path d="M 224 374 C 224 174, 800 174, 800 374" fill="none" stroke="#080e1a" strokeWidth="28" strokeLinecap="round" />

            {/* Under-arch Segmented Leather Cushions */}
            <g opacity="0.92">
              <g transform="translate(241, 320) rotate(-54.5)">
                <rect x="-18" y="-9" width="36" height="18" rx="8" fill="#1e293b" stroke="#0f172a" strokeWidth="1.2" />
                <ellipse cx="0" cy="-2" rx="13" ry="4" fill="#ffffff" opacity="0.12" />
              </g>
              <g transform="translate(288, 277) rotate(-32.5)">
                <rect x="-18" y="-9" width="36" height="18" rx="8" fill="#1e293b" stroke="#0f172a" strokeWidth="1.2" />
                <ellipse cx="0" cy="-2" rx="13" ry="4" fill="#ffffff" opacity="0.12" />
              </g>
              <g transform="translate(380, 239) rotate(-14.4)">
                <rect x="-18" y="-9" width="36" height="18" rx="8" fill="#1e293b" stroke="#0f172a" strokeWidth="1.2" />
                <ellipse cx="0" cy="-2" rx="13" ry="4" fill="#ffffff" opacity="0.12" />
              </g>
              <g transform="translate(512, 223)">
                <rect x="-20" y="-9" width="40" height="18" rx="8" fill="#1e293b" stroke="#0f172a" strokeWidth="1.2" />
                <ellipse cx="0" cy="-2" rx="15" ry="4" fill="#ffffff" opacity="0.12" />
              </g>
              <g transform="translate(644, 239) rotate(14.4)">
                <rect x="-18" y="-9" width="36" height="18" rx="8" fill="#1e293b" stroke="#0f172a" strokeWidth="1.2" />
                <ellipse cx="0" cy="-2" rx="13" ry="4" fill="#ffffff" opacity="0.12" />
              </g>
              <g transform="translate(736, 277) rotate(32.5)">
                <rect x="-18" y="-9" width="36" height="18" rx="8" fill="#1e293b" stroke="#0f172a" strokeWidth="1.2" />
                <ellipse cx="0" cy="-2" rx="13" ry="4" fill="#ffffff" opacity="0.12" />
              </g>
              <g transform="translate(783, 320) rotate(54.5)">
                <rect x="-18" y="-9" width="36" height="18" rx="8" fill="#1e293b" stroke="#0f172a" strokeWidth="1.2" />
                <ellipse cx="0" cy="-2" rx="13" ry="4" fill="#ffffff" opacity="0.12" />
              </g>
            </g>

            <path d="M 238 370 C 238 180, 786 180, 786 370" fill="none" stroke="#475569" strokeWidth="1.6" strokeDasharray="4 4" opacity="0.6" />

            {/* Top Cyan LED Bar Embedded at Headband Apex */}
            <g>
              <path d="M 436 186 C 472 175, 552 175, 588 186" fill="none" stroke="url(#chromeBevel)" strokeWidth="12" strokeLinecap="round" />
              <path
                d="M 444 186 C 475 177, 549 177, 580 186"
                fill="none"
                stroke="#00f5ff"
                strokeWidth="7"
                strokeLinecap="round"
                filter="url(#neonBloom)"
                style={{ animation: 'neonGlowBreathe 2s ease-in-out infinite' }}
              />
              <path d="M 446 186 C 476 178, 548 178, 578 186" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
              {/* Animated Laser Scanning Beam */}
              <path
                d="M 444 186 C 475 177, 549 177, 580 186"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4.2"
                strokeLinecap="round"
                strokeDasharray="32 110"
                filter="url(#softBloom)"
                style={{ animation: 'ledScanBeam 2.2s ease-in-out infinite alternate' }}
              />
            </g>

            {/* Left Adjustment Slider & Fork Yoke */}
            <g transform="translate(198, 305) rotate(14)">
              <rect width="32" height="56" rx="6" fill="url(#chromeBevel)" stroke="#475569" strokeWidth="1.5" />
              <line x1="5" y1="18" x2="27" y2="18" stroke="#1e293b" strokeWidth="2" />
              <line x1="5" y1="36" x2="27" y2="36" stroke="#1e293b" strokeWidth="2" />
              <circle cx="16" cy="46" r="3.5" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
              <path d="M 16 56 C 16 80, 24 105, 32 120" stroke="url(#chromeBevel)" strokeWidth="8" strokeLinecap="round" fill="none" />
            </g>

            {/* Right Adjustment Slider & Fork Yoke */}
            <g transform="translate(796, 305) rotate(-14)">
              <rect width="32" height="56" rx="6" fill="url(#chromeBevel)" stroke="#475569" strokeWidth="1.5" />
              <line x1="5" y1="18" x2="27" y2="18" stroke="#1e293b" strokeWidth="2" />
              <line x1="5" y1="36" x2="27" y2="36" stroke="#1e293b" strokeWidth="2" />
              <circle cx="16" cy="46" r="3.5" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
              <path d="M 16 56 C 16 80, 8 105, 0 120" stroke="url(#chromeBevel)" strokeWidth="8" strokeLinecap="round" fill="none" />
            </g>

            {/* ── LEFT EAR CUP ── */}
            <g transform="translate(232, 510) rotate(11)">
              <path
                d="M -15 -132 C -70 -140, -105 -85, -105 0 C -105 85, -70 140, -15 132 C 0 85, 0 -85, -15 -132 Z"
                fill="url(#shellNavyLeft)"
                stroke="#334155"
                strokeWidth="2.5"
              />
              <path d="M -18 -124 L -18 124" stroke="url(#chromeBevel)" strokeWidth="3" opacity="0.85" />
              <path
                d="M -98 -110 C -124 -50, -124 50, -98 110"
                fill="none"
                stroke="#00f5ff"
                strokeWidth="7.5"
                strokeLinecap="round"
                filter="url(#neonBloom)"
                style={{ animation: 'neonGlowBreathe 2.6s ease-in-out infinite' }}
              />
              <path d="M -98 -110 C -124 -50, -124 50, -98 110" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
              {/* Traveling light shimmer along ear cup curve */}
              <path
                d="M -98 -110 C -124 -50, -124 50, -98 110"
                fill="none"
                stroke="#ffffff"
                strokeWidth="3.6"
                strokeLinecap="round"
                strokeDasharray="55 185"
                filter="url(#softBloom)"
                style={{ animation: 'earCurveFlow 2.8s ease-in-out infinite alternate' }}
              />
              <path d="M -72 -102 C -94 -45, -94 45, -72 102" fill="none" stroke="#00e5ff" strokeWidth="4.2" strokeLinecap="round" filter="url(#softBloom)" opacity="0.9" />
              <path d="M -72 -102 C -94 -45, -94 45, -72 102" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />

              <g transform="translate(-46, 0)">
                <circle cx="0" cy="0" r="34" fill="#060b14" stroke="#475569" strokeWidth="2.5" />
                <circle
                  cx="0"
                  cy="0"
                  r="29"
                  fill="#0b1424"
                  stroke="#00f5ff"
                  strokeWidth="3"
                  filter="url(#softBloom)"
                  style={{ animation: 'dialNeonPulse 2.4s ease-in-out infinite' }}
                />
              </g>

              <path
                d="M 0 -138 C 65 -146, 102 -90, 102 0 C 102 90, 65 146, 0 138 C -35 125, -35 -125, 0 -138 Z"
                fill="url(#cushionLeatherLeft)"
                stroke="#1e293b"
                strokeWidth="3.2"
              />
              <path
                d="M 0 -138 C 65 -146, 102 -90, 102 0 C 102 90, 65 146, 0 138 C -35 125, -35 -125, 0 -138 Z"
                fill="url(#cushionBounceLight)"
              />
              <path d="M 8 -128 C 68 -134, 94 -82, 94 0 C 94 82, 68 134, 8 128" fill="none" stroke="#475569" strokeWidth="1.8" strokeDasharray="4 3" opacity="0.65" />
              <ellipse cx="38" cy="0" rx="22" ry="76" fill="url(#innerCavityGlow)" stroke="#020408" strokeWidth="3" />
              <ellipse cx="38" cy="0" rx="19" ry="70" fill="none" stroke="#1e293b" strokeWidth="1.2" strokeDasharray="2 3" />
              <ellipse cx="40" cy="-68" rx="22" ry="42" fill="#ffffff" opacity="0.11" />
              <ellipse cx="40" cy="68" rx="22" ry="42" fill="#ffffff" opacity="0.09" />
              <path d="M 85 -75 C 98 -35, 98 35, 85 75" stroke="#ffffff" strokeWidth="2.5" opacity="0.15" fill="none" strokeLinecap="round" />
            </g>

            {/* ── RIGHT EAR CUP ── */}
            <g transform="translate(792, 510) rotate(-11)">
              <path
                d="M 15 -132 C 70 -140, 105 -85, 105 0 C 105 85, 70 140, 15 132 C 0 85, 0 -85, 15 -132 Z"
                fill="url(#shellNavyRight)"
                stroke="#334155"
                strokeWidth="2.5"
              />
              <path d="M 18 -124 L 18 124" stroke="url(#chromeBevel)" strokeWidth="3" opacity="0.85" />
              <path
                d="M 98 -110 C 124 -50, 124 50, 98 110"
                fill="none"
                stroke="#00f5ff"
                strokeWidth="7.5"
                strokeLinecap="round"
                filter="url(#neonBloom)"
                style={{ animation: 'neonGlowBreathe 2.6s ease-in-out 0.4s infinite' }}
              />
              <path d="M 98 -110 C 124 -50, 124 50, 98 110" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
              {/* Traveling light shimmer along ear cup curve */}
              <path
                d="M 98 -110 C 124 -50, 124 50, 98 110"
                fill="none"
                stroke="#ffffff"
                strokeWidth="3.6"
                strokeLinecap="round"
                strokeDasharray="55 185"
                filter="url(#softBloom)"
                style={{ animation: 'earCurveFlow 2.8s ease-in-out 0.4s infinite alternate' }}
              />
              <path d="M 72 -102 C 94 -45, 94 45, 72 102" fill="none" stroke="#00e5ff" strokeWidth="4.2" strokeLinecap="round" filter="url(#softBloom)" opacity="0.9" />
              <path d="M 72 -102 C 94 -45, 94 45, 72 102" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />

              <g transform="translate(46, 0)">
                <circle cx="0" cy="0" r="34" fill="#060b14" stroke="#475569" strokeWidth="2.5" />
                <circle
                  cx="0"
                  cy="0"
                  r="29"
                  fill="#0b1424"
                  stroke="#00f5ff"
                  strokeWidth="3"
                  filter="url(#softBloom)"
                  style={{ animation: 'dialNeonPulse 2.4s ease-in-out 0.4s infinite' }}
                />
              </g>

              <path
                d="M 0 -138 C -65 -146, -102 -90, -102 0 C -102 90, -65 146, 0 138 C 35 125, 35 -125, 0 -138 Z"
                fill="url(#cushionLeatherRight)"
                stroke="#1e293b"
                strokeWidth="3.2"
              />
              <path
                d="M 0 -138 C -65 -146, -102 -90, -102 0 C -102 90, -65 146, 0 138 C 35 125, 35 -125, 0 -138 Z"
                fill="url(#cushionBounceLight)"
              />
              <path d="M -8 -128 C -68 -134, -94 -82, -94 0 C -94 82, -68 134, -8 128" fill="none" stroke="#475569" strokeWidth="1.8" strokeDasharray="4 3" opacity="0.65" />
              <ellipse cx="-38" cy="0" rx="22" ry="76" fill="url(#innerCavityGlow)" stroke="#020408" strokeWidth="3" />
              <ellipse cx="-38" cy="0" rx="19" ry="70" fill="none" stroke="#1e293b" strokeWidth="1.2" strokeDasharray="2 3" />
              <ellipse cx="-40" cy="-68" rx="22" ry="42" fill="#ffffff" opacity="0.11" />
              <ellipse cx="-40" cy="68" rx="22" ry="42" fill="#ffffff" opacity="0.09" />
              <path d="M -85 -75 C -98 -35, -98 35, -85 75" stroke="#ffffff" strokeWidth="2.5" opacity="0.15" fill="none" strokeLinecap="round" />
            </g>
          </g>

          {/* ── 4. SERVICE ARC LINE & GLOWING BEADS WITH FLOWING DATA ── */}
          <path
            d={arcD}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.8"
            strokeDasharray="6 6"
            opacity="0.8"
            style={{
              animation: isBooting
                ? 'arcDrawIn 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both'
                : 'arcDataFlow 16s linear infinite'
            }}
          />
          {arcPts.map((p, i) => (
            <circle
              key={`dot-${i}`}
              cx={p.x}
              cy={p.y}
              r="3.2"
              fill="#22d3ee"
              filter="url(#arcNeon)"
              style={{
                animation: isBooting
                  ? `dotBootPop 0.45s ease-out ${0.72 + i * 0.05}s both`
                  : `dotPulse 2.6s ease-in-out ${i * 0.28}s infinite`
              }}
            />
          ))}
        </svg>

        {/* ────────────────────────────────────────────────
             DYNAMIC ORBITAL GLIDING ARC NODES (13 Managed Slots)
             The icons continuously glide along the arc trajectory from right to left,
             with seamless entry/exit buffer slots and smooth physics-based easing.
        ──────────────────────────────────────────────── */}
        {ARC_SLOTS.map((slot) => {
          const offset = slot.slotIdx - 4
          const total = servicesList.length || 1
          const targetIdx = (activeIndex + offset + total * 100) % total
          const svc = servicesList[targetIdx]
          if (!svc) return null

          const isApex = slot.slotIdx === 4
          const isBuffer = slot.slotIdx < 0 || slot.slotIdx > 8
          const isOuterNode = slot.slotIdx <= 1 || slot.slotIdx >= 7
          const Icon = svc.icon || Headphones
          const dist = Math.abs(slot.slotIdx - 4)
          const bootDelay = (0.22 + dist * 0.08).toFixed(2)

          return (
            <button
              key={`orbit-node-${svc.id}`}
              onClick={() => !isBuffer && handleSelectService(targetIdx)}
              style={{
                left: `${slot.x}%`,
                top: `${slot.y}%`,
                opacity: isBuffer ? 0 : slot.opacity,
                pointerEvents: isBuffer ? 'none' : 'auto',
                transition:
                  'left 750ms cubic-bezier(0.25, 1, 0.5, 1), top 750ms cubic-bezier(0.25, 1, 0.5, 1), transform 750ms cubic-bezier(0.25, 1, 0.5, 1), opacity 650ms ease-in-out',
                willChange: 'left, top, transform'
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none cursor-pointer flex-col items-center ${isOuterNode ? 'hidden sm:flex' : 'flex'} ${isApex ? 'z-[20] scale-110 sm:scale-115' : 'z-[16] hover:scale-105 hover:opacity-100'
                }`}
            >
              {/* Node Icon Circle */}
              <div
                style={!isBuffer ? { animation: `nodeOrbitPop 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) ${bootDelay}s both` } : undefined}
                className={`relative w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-full flex items-center justify-center transition-all duration-500 ${isApex
                  ? 'bg-gradient-to-tr from-cyan-400 via-blue-600 to-blue-700 shadow-[0_0_26px_rgba(0,229,255,0.95)] border-2 border-white'
                  : `bg-gradient-to-tr ${svc.theme} border-2 border-slate-700/80 hover:border-cyan-400/80 hover:shadow-[0_0_16px_rgba(34,211,238,0.55)]`
                  }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 transition-colors duration-300 ${isApex ? 'text-white' : `${svc.iconColor} group-hover:text-cyan-300`
                    }`}
                />

                {/* Animated Pulse Halo for Apex Active Node */}
                {isApex && (
                  <span
                    className="absolute -inset-1 sm:-inset-1.5 rounded-full border-2 border-cyan-400 pointer-events-none"
                    style={{ animation: 'pulseHalo 1.8s ease-in-out infinite' }}
                  />
                )}
              </div>

              {/* Service Label (2 Lines Stacked) - Hidden for non-apex on mobile to avoid crowded overlap */}
              <div
                style={!isBuffer ? { animation: `nodeOrbitPop 0.6s ease-out ${(parseFloat(bootDelay) + 0.08).toFixed(2)}s both` } : undefined}
                className={`mt-1 sm:mt-1.5 flex-col items-center leading-tight ${isApex ? 'flex' : 'hidden sm:flex'}`}
              >
                {svc.lines.map((lineText, lineIdx) => (
                  <span
                    key={`line-${lineIdx}`}
                    className={`text-[8px] sm:text-[9.5px] md:text-[10.5px] tracking-tight text-center whitespace-nowrap transition-colors duration-300 ${isApex
                      ? 'text-slate-900 font-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]'
                      : 'text-slate-600 font-semibold group-hover:text-blue-600'
                      }`}
                  >
                    {lineText}
                  </span>
                ))}
              </div>
            </button>
          )
        })}

        {/* ────────────────────────────────────────────────
             INTERACTIVE EAR CUP BUTTONS (Mounted on dials)
        ──────────────────────────────────────────────── */}
        <button
          onClick={handlePrev}
          title="Previous Service"
          className="absolute z-[25] focus:outline-none cursor-pointer group active:scale-90 transition-all duration-200"
          style={{
            left: '18.25%',
            top: '65.26%',
            transform: 'translate(-50%, -50%)',
            animation: 'earBtnBoot 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.45s both'
          }}
        >
          {/* Animated Shockwave Pulse on Click */}
          {isClickPulse && direction === 'prev' && (
            <span
              className="absolute -inset-2.5 rounded-full border-2 border-cyan-300 pointer-events-none"
              style={{ animation: 'clickShockwave 0.45s ease-out both' }}
            />
          )}
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950 border-2 flex items-center justify-center text-white transition-all duration-300 ${isClickPulse && direction === 'prev'
              ? 'border-white shadow-[0_0_26px_rgba(0,245,255,1),inset_0_0_12px_rgba(0,245,255,0.7)] scale-110'
              : 'border-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(0,245,255,0.7)]'
              }`}
            style={{ animation: !isClickPulse ? 'btnAuraBreathe 2.4s ease-in-out infinite' : undefined }}
          >
            <SkipBack
              className={`w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 transition-transform duration-200 ${isClickPulse && direction === 'prev' ? '-translate-x-1 text-white scale-110' : 'text-cyan-200 group-hover:text-white'
                }`}
            />
          </div>
        </button>

        <button
          onClick={handleNext}
          title="Next Service"
          className="absolute z-[25] focus:outline-none cursor-pointer group active:scale-90 transition-all duration-200"
          style={{
            left: '81.75%',
            top: '65.26%',
            transform: 'translate(-50%, -50%)',
            animation: 'earBtnBoot 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.45s both'
          }}
        >
          {/* Animated Shockwave Pulse on Click */}
          {isClickPulse && direction === 'next' && (
            <span
              className="absolute -inset-2.5 rounded-full border-2 border-cyan-300 pointer-events-none"
              style={{ animation: 'clickShockwave 0.45s ease-out both' }}
            />
          )}
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950 border-2 flex items-center justify-center text-white transition-all duration-300 ${isClickPulse && direction === 'next'
              ? 'border-white shadow-[0_0_26px_rgba(0,245,255,1),inset_0_0_12px_rgba(0,245,255,0.7)] scale-110'
              : 'border-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(0,245,255,0.7)]'
              }`}
            style={{ animation: !isClickPulse ? 'btnAuraBreathe 2.4s ease-in-out 0.4s infinite' : undefined }}
          >
            <SkipForward
              className={`w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 transition-transform duration-200 ${isClickPulse && direction === 'next' ? 'translate-x-1 text-white scale-110' : 'text-cyan-200 group-hover:text-white'
                }`}
            />
          </div>
        </button>

        {/* ────────────────────────────────────────────────
             CENTER CONTENT (Between Ear Cups)
             Fixed Positioned Safe Zone - No Headband Overlap
        ──────────────────────────────────────────────── */}
        <div
          className="absolute z-[18] flex flex-col items-center justify-center text-center"
          style={{
            left: '50%',
            top: '55.5%',
            transform: 'translate(-50%, -50%)',
            width: '43%',
            maxWidth: '430px',
            padding: '0 6px',
            animation: 'centerBootReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both'
          }}
        >
          <div
            key={activeIndex}
            style={{
              animation: direction === 'next'
                ? 'slideInNext 0.34s cubic-bezier(0.16, 1, 0.3, 1) both'
                : 'slideInPrev 0.34s cubic-bezier(0.16, 1, 0.3, 1) both'
            }}
            className="flex flex-col items-center justify-center w-full"
          >
            {/* DESKTOP/TABLET VIEW (>= md): Full Service Heading & Description */}
            <div className="hidden md:flex flex-col items-center justify-center w-full">
              <div className="min-h-[46px] flex items-center justify-center mb-2 w-full">
                <h2 className="text-[19px] lg:text-[21px] font-black tracking-tight text-slate-900 leading-snug text-center">
                  {titleParts.first}{' '}
                  <span className="text-blue-600">
                    {titleParts.second}
                  </span>
                </h2>
              </div>

              <p className="text-[12px] sm:text-[13px] md:text-[13.5px] text-slate-600 font-normal leading-relaxed max-w-[410px] text-center">
                {currentService.description}
              </p>
            </div>

            {/* MOBILE ONLY (< md): Holographic Cyber Audio Core (No text clutter, prevents duplicate content) */}
            <div className="flex md:hidden flex-col items-center justify-center py-0.5">
              <div
                className="relative flex items-center justify-center"
                style={{ animation: 'holoFloat 3s ease-in-out infinite' }}
              >
                {/* Outer Dashed Orbit Glow Ring */}
                <div
                  className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-cyan-400/40 border-dashed animate-spin pointer-events-none"
                  style={{ animationDuration: '10s' }}
                />

                {/* Cyber Center Disc with Active Service Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_18px_rgba(0,245,255,0.7),inset_0_0_8px_rgba(0,245,255,0.4)]">
                  <ActiveIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300 drop-shadow-[0_0_8px_rgba(0,245,255,0.9)]" />
                </div>

                {/* Subtle Pulse Ring */}
                <span
                  className="absolute -inset-1 rounded-full border border-cyan-400/50 pointer-events-none animate-ping opacity-30"
                  style={{ animationDuration: '2.4s' }}
                />
              </div>

              {/* Holographic Active Stream Badge */}
              <div className="mt-1 flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-400/50 shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[8.5px] sm:text-[9.5px] font-black tracking-wider text-cyan-300 uppercase">
                  ACTIVE #{String(activeIndex + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────────────
           MOBILE-OPTIMIZED INTERACTIVE SERVICE CARD (< md)
           Ensures 100% readability, clean touch controls, & swipe support
      ──────────────────────────────────────────────── */}
      <div className="block md:hidden w-full max-w-md mx-auto mt-1 mb-4 z-20 px-1">
        <div
          key={`mobile-card-${activeIndex}`}
          style={{
            animation: direction === 'next'
              ? 'slideInNext 0.34s cubic-bezier(0.16, 1, 0.3, 1) both'
              : 'slideInPrev 0.34s cubic-bezier(0.16, 1, 0.3, 1) both'
          }}
          className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col relative overflow-hidden"
        >
          {/* Top Subtle Cyan Glow Accent Line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

          {/* Top Bar: Service ID + Live Equalizer Waveform */}
          <div className="flex items-center justify-between w-full mb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200/70">
                Service {String(activeIndex + 1).padStart(2, '0')} of {servicesList.length}
              </span>
            </div>

            {/* Mini Live Audio Equalizer Indicator */}
            <div className="flex items-center gap-1.5 bg-slate-900/90 px-2.5 py-1 rounded-lg border border-cyan-500/30 shadow-xs">
              <div className="flex items-end gap-[2px] h-3">
                <span className="w-[2.5px] bg-cyan-400 rounded-full" style={{ animation: 'miniEqBounce 0.75s ease-in-out infinite 0.1s' }} />
                <span className="w-[2.5px] bg-blue-400 rounded-full" style={{ animation: 'miniEqBounce 0.75s ease-in-out infinite 0.35s' }} />
                <span className="w-[2.5px] bg-cyan-300 rounded-full" style={{ animation: 'miniEqBounce 0.75s ease-in-out infinite 0.2s' }} />
                <span className="w-[2.5px] bg-sky-400 rounded-full" style={{ animation: 'miniEqBounce 0.75s ease-in-out infinite 0.5s' }} />
              </div>
              <span className="text-[9px] font-bold text-cyan-200 tracking-wider">LIVE</span>
            </div>
          </div>

          {/* Service Title */}
          <h3 className="text-[16px] sm:text-[17px] font-black tracking-tight text-slate-900 leading-snug flex items-center gap-2 text-left">
            <span className="w-1.5 h-4.5 rounded-full bg-gradient-to-b from-blue-600 to-cyan-400 inline-block shrink-0" />
            <span>
              {titleParts.first}{' '}
              <span className="text-blue-600">{titleParts.second}</span>
            </span>
          </h3>

          {/* Full Readable Description (Left-aligned for natural reading) */}
          <p className="text-[12.5px] sm:text-[13px] text-slate-600 font-normal leading-relaxed text-left mt-2 pl-3 border-l-2 border-cyan-400/50">
            {currentService.description}
          </p>

          {/* Real-time Progress Bar */}
          <div className="w-full mt-3.5 pt-2">
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold mb-1">
              <span>Coverage Progress</span>
              <span className="text-blue-600 font-bold">{Math.round(((activeIndex + 1) / servicesList.length) * 100)}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${((activeIndex + 1) / servicesList.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Quick Mobile Action Buttons */}
          <div className="flex items-center justify-between w-full mt-3.5 pt-3 border-t border-slate-100">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold active:scale-95 transition-all cursor-pointer shadow-xs"
            >
              <SkipBack className="w-3.5 h-3.5 text-slate-700" />
              <span>Prev</span>
            </button>

            <span className="text-[11px] font-extrabold text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-lg">
              {activeIndex + 1} <span className="text-slate-400 font-normal">/ {servicesList.length}</span>
            </span>

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:brightness-110 text-white text-xs font-bold shadow-[0_4px_14px_rgba(37,99,235,0.25)] active:scale-95 transition-all cursor-pointer"
            >
              <span>Next</span>
              <SkipForward className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Touch Gesture Prompt */}
          <div className="text-[10px] text-slate-400 font-medium mt-2 text-center">
            Swipe left or right anywhere to browse services
          </div>
        </div>
      </div>
    </div>
  )
}
