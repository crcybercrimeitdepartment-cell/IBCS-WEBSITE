import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Cloud,
  Database,
  Eye,
  Activity,
  Bug,
  BarChart3,
  Lock,
} from 'lucide-react';

/* =========================================================================
   3D SHIELD EMBLEM FOR CYBERSECURITY & DIGITAL SECURITY
   ========================================================================= */

function CentralCyberShieldCore() {
  return (
    <svg width="120" height="120" viewBox="0 0 128 128" className="filter drop-shadow-[0_16px_24px_rgba(15,164,175,0.38)]">
      <defs>
        <radialGradient id="cyberGlowSec" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="45%" stopColor="#0284c7" />
          <stop offset="85%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#003135" />
        </radialGradient>
        <linearGradient id="cyberRimSec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="50%" stopColor="#0fa4af" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>

      {/* Outer 3D Shield Rim */}
      <path d="M64 12 L106 28 C106 72 64 114 64 114 C64 114 22 72 22 28 Z" fill="url(#cyberRimSec)" stroke="#003135" strokeWidth="1.5" />
      <path d="M64 18 L100 32 C100 68 64 106 64 106 C64 106 28 68 28 32 Z" fill="url(#cyberGlowSec)" stroke="#38bdf8" strokeWidth="1" />
      <path d="M34 35 C42 33 54 31 64 31 C74 31 86 33 94 35 C88 52 76 68 64 78 C52 68 40 52 34 35 Z" fill="white" fillOpacity="0.22" />

      {/* 3D Padlock Emblem in Center */}
      <g transform="translate(64, 62)">
        <rect x="-14" y="-4" width="28" height="24" rx="5" fill="#ffffff" stroke="#003135" strokeWidth="1.5" />
        <path d="M-8 -4 A 8 8 0 0 1 8 -4 L 8 -4 L 8 0 L -8 0 Z" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <circle cx="0" cy="5" r="3.5" fill="#003135" />
        <polygon points="-2.5,6.5 2.5,6.5 1.5,13 -1.5,13" fill="#003135" />
      </g>

      {/* Sparkle Dots */}
      <circle cx="44" cy="48" r="3" fill="#bae6fd" />
      <circle cx="84" cy="48" r="3" fill="#bae6fd" />
      <circle cx="64" cy="88" r="3" fill="#fef08a" />
    </svg>
  );
}

export default function CybersecurityDigitalSecuritySection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    if (e) e.preventDefault();
    window.location.hash = '#cybersecurity-digital-security-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  const floatingBadges = [
    {
      id: 'app-security',
      title: 'Application Security',
      icon: ShieldCheck,
      bgColor: 'bg-[#0284c7]',
      pos: 'top-[0%] left-1/2 -translate-x-1/2 lg:top-[0%] lg:left-[50%] lg:-translate-x-1/2',
    },
    {
      id: 'cloud-security',
      title: 'Cloud Security',
      icon: Cloud,
      bgColor: 'bg-[#0fa4af]',
      pos: 'top-[16%] right-[3%] sm:right-[10%] lg:top-[22%] lg:right-[-1%] xl:top-[18%] xl:right-[2%]',
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Database,
      bgColor: 'bg-[#0284c7]',
      pos: 'top-[48%] right-[1%] sm:right-[5%] lg:top-[52%] lg:right-[-2%] xl:top-[50%] xl:right-[0%]',
    },
    {
      id: 'threat-intelligence',
      title: 'Threat Intelligence',
      icon: Eye,
      bgColor: 'bg-[#0d9488]',
      pos: 'bottom-[3%] right-[6%] sm:right-[12%] lg:bottom-[0%] lg:right-[2%] xl:bottom-[2%] xl:right-[5%]',
    },
    {
      id: 'security-monitoring',
      title: 'Security Monitoring',
      icon: Activity,
      bgColor: 'bg-[#0f766e]',
      pos: 'bottom-[3%] left-[6%] sm:left-[12%] lg:bottom-[0%] lg:left-[2%] xl:bottom-[2%] xl:left-[5%]',
    },
    {
      id: 'vulnerability-management',
      title: 'Vulnerability Management',
      icon: Bug,
      bgColor: 'bg-[#0284c7]',
      pos: 'top-[48%] left-[1%] sm:left-[5%] lg:top-[52%] lg:left-[-2%] xl:top-[50%] xl:left-[0%]',
    },
    {
      id: 'security-analytics',
      title: 'Security Analytics',
      icon: BarChart3,
      bgColor: 'bg-[#0fa4af]',
      pos: 'top-[16%] left-[3%] sm:left-[10%] lg:top-[22%] lg:left-[-1%] xl:top-[18%] xl:left-[2%]',
    },
  ];

  return (
    <section
      id="cybersecurity-digital-security"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#EBF7F8] via-[#E7F3F5] to-[#DFEFF2] border-b border-[#D4AF37]/20 overflow-hidden relative"
    >
      {/* Background Decorative Grid Dots & Light Wave Curves */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Ambient Radial Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-[#0FA4AF]/10 rounded-full blur-3xl opacity-80" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/50 rounded-full blur-3xl" />

        {/* Top-Right Grid Dots Matrix */}
        <div className="absolute top-8 right-8 sm:top-12 sm:right-16 grid grid-cols-5 gap-2.5 opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0FA4AF]" />
          ))}
        </div>

        {/* Bottom-Left Grid Dots Matrix */}
        <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-16 grid grid-cols-5 gap-2.5 opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0FA4AF]" />
          ))}
        </div>

        {/* Floating Light Waves Vector */}
        <svg className="w-full h-full min-h-[600px] opacity-40" viewBox="0 0 1440 650" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M-100,500 C200,300 600,600 1100,380 C1350,270 1500,450 1600,350" stroke="#FFFFFF" strokeWidth="90" fill="none" />
          <path d="M-50,250 C350,450 850,200 1250,400 C1400,470 1550,300 1650,380" stroke="#FFFFFF" strokeWidth="60" fill="none" />
        </svg>
      </div>

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= 1. TOP CENTER HEADER ================= */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Top Pill Indicator */}
          <div className="w-12 h-1 bg-[#0FA4AF] rounded-full mb-3 shadow-xs" />

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-[#081E52] sm:text-4xl lg:text-[44px] mb-2 text-center"
          >
            Cybersecurity &amp; Digital Security
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#0FA4AF] uppercase text-center"
          >
            SECURE TODAY. RESILIENT TOMORROW.
          </motion.p>
        </div>

        {/* ================= 2. MAIN 2-COLUMN SPLIT SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* LEFT COLUMN: OVERVIEW & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >


            {/* Subheading */}
            <h3 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#081E52] tracking-tight leading-tight mb-5 text-center lg:text-left">
              Building a Safer Digital Tomorrow
            </h3>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#081E52]/85 font-medium mb-8 text-center lg:text-left text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              <p>
                Cybersecurity is a core technology area within IB Cyber Security Private Limited. We develop security-focused software products designed to help organisations address application, infrastructure, data and digital security requirements through modern technology.
              </p>
              <p>
                Our cybersecurity product development combines security engineering, monitoring, analytics, automation and intelligent technologies. From threat intelligence and vulnerability management to privacy and incident management, our security products are designed to support organisations in building more secure and resilient digital environments.
              </p>
            </div>

            {/* Solid Cyan CTA Pill Button */}
            <div className="flex justify-center lg:justify-start w-full">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0FA4AF] hover:bg-[#003135] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#0FA4AF]/25 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20"
              >
                <span>Explore Security</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 3D CENTRAL EMBLEM & FLOATING ORBITING BADGES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-7 relative w-full min-h-[460px] sm:min-h-[520px] flex items-center justify-center my-4 lg:my-0"
          >
            {/* SVG Connecting Dashed Lines & Glowing Nodes behind Badges */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0" viewBox="0 0 600 500">
              {/* Central to Top Center */}
              <line x1="300" y1="250" x2="300" y2="45" stroke="#0FA4AF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              <circle cx="300" cy="148" r="3.5" fill="#0FA4AF" />

              {/* Central to Top Right */}
              <line x1="300" y1="250" x2="480" y2="90" stroke="#0FA4AF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              <circle cx="390" cy="170" r="3.5" fill="#0FA4AF" />

              {/* Central to Middle Right */}
              <line x1="300" y1="250" x2="520" y2="250" stroke="#0FA4AF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              <circle cx="410" cy="250" r="3.5" fill="#0FA4AF" />

              {/* Central to Bottom Right */}
              <line x1="300" y1="250" x2="460" y2="430" stroke="#0FA4AF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              <circle cx="380" cy="340" r="3.5" fill="#0FA4AF" />

              {/* Central to Bottom Left */}
              <line x1="300" y1="250" x2="140" y2="430" stroke="#0FA4AF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              <circle cx="220" cy="340" r="3.5" fill="#0FA4AF" />

              {/* Central to Middle Left */}
              <line x1="300" y1="250" x2="80" y2="250" stroke="#0FA4AF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              <circle cx="190" cy="250" r="3.5" fill="#0FA4AF" />

              {/* Central to Top Left */}
              <line x1="300" y1="250" x2="120" y2="90" stroke="#0FA4AF" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              <circle cx="210" cy="170" r="3.5" fill="#0FA4AF" />

              {/* Concentric Orbiting Rings around Center */}
              <circle cx="300" cy="250" r="140" stroke="#0FA4AF" strokeWidth="1" strokeDasharray="6 6" fill="none" opacity="0.35" />
              <circle cx="300" cy="250" r="210" stroke="#0FA4AF" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.25" />
            </svg>

            {/* CENTER 3D SHIELD EMBLEM ORB */}
            <div className="relative z-20 flex items-center justify-center my-8 lg:my-0">
              {/* Outer Pedestal Rings */}
              <div className="absolute w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] rounded-full border border-[#0FA4AF]/30 bg-[#0FA4AF]/5 animate-pulse" />
              <div className="absolute w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] rounded-full border-2 border-[#0FA4AF]/40 bg-white/40 backdrop-blur-md shadow-inner" />

              {/* 3D Shield Core Specimen */}
              <div className="relative w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] rounded-full bg-gradient-to-tr from-[#003135] via-[#0fa4af] to-[#38bdf8] p-1 shadow-2xl flex items-center justify-center">
                <CentralCyberShieldCore />
              </div>

              {/* 360-Degree Revolving Orbiting Satellite Ball */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full animate-orbit relative">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#67e8f9] border-2 border-white rounded-full shadow-[0_0_12px_#38bdf8] ring-2 ring-[#0fa4af]/50" />
                </div>
              </div>
            </div>

            {/* 7 FLOATING ICON BADGES AROUND CENTRAL 3D SHIELD EMBLEM */}
            <div className="absolute inset-0 z-30 pointer-events-auto">
              {floatingBadges.map((badge, idx) => {
                const BadgeIcon = badge.icon;
                return (
                  <div key={badge.id} className={`absolute ${badge.pos}`}>
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: idx * 0.3,
                      }}
                      className="bg-white/95 backdrop-blur-md rounded-full lg:rounded-2xl p-1.5 sm:p-2 lg:px-3 lg:py-2 xl:px-3.5 xl:py-2.5 shadow-lg border-2 lg:border border-cyan-100/95 hover:border-[#0FA4AF] hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center gap-2 lg:gap-2.5 select-none cursor-pointer group"
                      title={badge.title}
                    >
                      {/* Icon Box */}
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full lg:rounded-xl ${badge.bgColor} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                        <BadgeIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-4.5 lg:h-4.5 xl:w-5 xl:h-5 text-white" strokeWidth={2.4} />
                      </div>

                      {/* Title (Hidden on Mobile, Visible on Desktop) */}
                      <span className="hidden lg:inline text-[11px] xl:text-[12.5px] font-extrabold text-[#081E52] tracking-tight leading-snug whitespace-nowrap">
                        {badge.title}
                      </span>
                    </motion.div>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>

      <style>{`
        @keyframes orbitAround {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-orbit {
          animation: orbitAround 5s linear infinite;
          transform-origin: center center;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
