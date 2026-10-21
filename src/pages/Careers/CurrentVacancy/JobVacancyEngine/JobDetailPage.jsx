import Cloudinary from './Cloudinary';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from './router-compat';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  UserPlus,
  LogIn,
  CheckCircle2,
  X,
  Check,
  ArrowRight,
  Users,
  Briefcase,
  MapPin,
  GraduationCap,
  Building2,
  TrendingUp,
  Settings,
  HeartHandshake,
  Sparkles,
  Send,
  Calendar,
  ShieldCheck,
  Home
} from 'lucide-react';
const heroImg = Cloudinary.heroimg;
const heroBg = Cloudinary.jobVacancyBg;
import { jobListings } from './JobVacancyPageData';
import { hrAdminData } from './job details/HRAdminData';
import { hrExecutiveData } from './job details/HRExecutiveData';
import { hrAssistantManagerData } from './job details/HRAssistantManagerData';
import { juniorPythonFullStackDeveloperData } from './job details/JuniorPythonFullStackDeveloperData';
import { qaEngineerData } from './job details/QAEngineerData';
import { mobileApplicationDeveloperData } from './job details/MobileApplicationDeveloperData';
import { graphicDesignerData } from './job details/GraphicDesignerData';
import { juniorDevOpsEngineerData } from './job details/JuniorDevOpsEngineerData';
import { cyberSecurityEngineerData } from './job details/CyberSecurityEngineerData';
import { cyberCrimeInvestigationOfficerData } from './job details/CyberCrimeInvestigationOfficerData';
import { aimlEngineerData } from './job details/AIMLEngineerData';
import { dataAnalystData } from './job details/DataAnalystData';


// --- FloatingDots.jsx ---



function FloatingDots() {
  // Generate random dots
  const dots = Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2, // 2px to 6px
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 8 + 8, // 8s to 16s
    delay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="absolute inset-0">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-indigo-400"
          style={{
            width: dot.size,
            height: dot.size,
            top: dot.top,
            left: dot.left,
            opacity: dot.opacity,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}

// --- Redesigned Hero Section matching reference layout ---

const getRoleConfig = (jobTitle = '', department = '') => {
  const titleLower = (jobTitle || '').toLowerCase();
  const deptLower = (department || '').toLowerCase();
  const isHR =
    titleLower.includes('hr') ||
    deptLower.includes('hr') ||
    titleLower.includes('human resource') ||
    titleLower.includes('talent');

  if (isHR) {
    return {
      deptBadge: 'HR DEPARTMENT',
      tagline: 'PEOPLE   |   PROCESS   |   GROWTH',
      description:
        'Join our mission to secure digital horizons, combat cyber crime, and build a safer digital world. We are looking for a motivated HR Executive to support our growing team and drive a positive workplace culture.',
      leftPillars: [
        { title: 'Talent Management', icon: Users, bgClass: 'bg-[#F3E8FF]', textClass: 'text-[#7E22CE]', borderClass: 'border-purple-200' },
        { title: 'Employee Engagement', icon: HeartHandshake, bgClass: 'bg-[#CCFBF1]', textClass: 'text-[#0F766E]', borderClass: 'border-teal-200' },
        { title: 'HR Operations', icon: Settings, bgClass: 'bg-[#FEF3C7]', textClass: 'text-[#D97706]', borderClass: 'border-amber-200' }
      ],
      rightPillars: [
        { title: 'Workplace Culture', icon: Building2, bgClass: 'bg-[#FFE4E6]', textClass: 'text-[#E11D48]', borderClass: 'border-rose-200' },
        { title: 'Organizational Growth', icon: TrendingUp, bgClass: 'bg-[#DBEAFE]', textClass: 'text-[#2563EB]', borderClass: 'border-blue-200' },
        { title: 'People Development', icon: GraduationCap, bgClass: 'bg-[#EEF2FF]', textClass: 'text-[#4F46E5]', borderClass: 'border-indigo-200' }
      ]
    };
  }

  return {
    deptBadge: (department || 'IBCS DEPARTMENT').toUpperCase(),
    tagline: 'INNOVATION   |   SECURITY   |   EXCELLENCE',
    description: `Join our mission to secure digital horizons, combat cyber crime, and build a safer digital world. We are looking for a motivated ${jobTitle || 'Professional'} to support our growing team and drive organizational excellence.`,
    leftPillars: [
      { title: 'Core Strategy', icon: ShieldCheck, bgClass: 'bg-[#F3E8FF]', textClass: 'text-[#7E22CE]', borderClass: 'border-purple-200' },
      { title: 'Team Collaboration', icon: Users, bgClass: 'bg-[#CCFBF1]', textClass: 'text-[#0F766E]', borderClass: 'border-teal-200' },
      { title: 'System Operations', icon: Settings, bgClass: 'bg-[#FEF3C7]', textClass: 'text-[#D97706]', borderClass: 'border-amber-200' }
    ],
    rightPillars: [
      { title: 'Domain Excellence', icon: Building2, bgClass: 'bg-[#FFE4E6]', textClass: 'text-[#E11D48]', borderClass: 'border-rose-200' },
      { title: 'Organizational Growth', icon: TrendingUp, bgClass: 'bg-[#DBEAFE]', textClass: 'text-[#2563EB]', borderClass: 'border-blue-200' },
      { title: 'Professional Growth', icon: GraduationCap, bgClass: 'bg-[#EEF2FF]', textClass: 'text-[#4F46E5]', borderClass: 'border-indigo-200' }
    ]
  };
};

function HeroSection({
  jobTitle = "HR Executive",
  jobCode = "IBCS-HR-EXEC-2026-001",
  department = "HR Department",
  positionLevel = "Entry Level",
  numberOfVacancies = "30",
  applicationStatus = "Open",
  employmentType = "Permanent",
  workMode = "On-Site",
  heroImage,
  onApplyClick
}) {
  const defaultHero = "https://res.cloudinary.com/dlhmkbijh/image/upload/v1789206158/Hr_Executive_ausy98.png";
  const [imgSrc, setImgSrc] = useState(heroImage || defaultHero);

  useEffect(() => {
    setImgSrc(heroImage || defaultHero);
  }, [heroImage, defaultHero]);

  const config = useMemo(() => getRoleConfig(jobTitle, department), [jobTitle, department]);

  const formattedStatus = useMemo(() => {
    if (!applicationStatus) return 'Open';
    return applicationStatus.split('/')[0].trim();
  }, [applicationStatus]);

  const formattedVacancies = useMemo(() => {
    if (!numberOfVacancies) return '30';
    return String(numberOfVacancies).replace(/positions?/i, '').trim();
  }, [numberOfVacancies]);

  const formattedWorkMode = useMemo(() => {
    if (!workMode) return 'On-Site';
    return String(workMode).split('(')[0].trim();
  }, [workMode]);

  const handleScrollToApply = () => {
    const element = document.getElementById('apply-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative w-full rounded-[32px] sm:rounded-[40px] overflow-hidden border border-slate-200/80 shadow-2xl shadow-blue-900/10 mb-12 select-none bg-gradient-to-b from-[#F8FAFC] via-[#F1F6FD] to-[#E3EFFF]">
      
      {/* Background Layer: Clean ambient gradient and fluid waves */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute inset-0 bg-radial-at-t from-white via-blue-50/40 to-indigo-50/50"></div>
        
        {/* Decorative Floating Dots */}
        <FloatingDots />

        {/* Ambient Waves in SVG for extra fluid curves matching reference */}
        <svg
          className="absolute -bottom-1 left-0 w-full h-[180px] sm:h-[220px] pointer-events-none opacity-40 mix-blend-screen"
          viewBox="0 0 1440 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120C240 40 480 160 720 100C960 40 1200 140 1440 80V220H0V120Z"
            fill="url(#blueWaveGrad1)"
          />
          <path
            d="M0 160C320 90 640 190 960 130C1280 70 1380 120 1440 110V220H0V160Z"
            fill="url(#blueWaveGrad2)"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="blueWaveGrad1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.5" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="blueWaveGrad2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60A5FA" />
              <stop offset="0.5" stopColor="#2563EB" />
              <stop offset="1" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16 flex flex-col items-center text-center">

        {/* 1. TOP SECTION: Department Badge, Title & Tagline */}
        <div className="w-full flex flex-col items-center">
          {/* Department Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EEFF] border border-purple-200/80 text-[#6D28D9] shadow-xs"
          >
            <Users className="w-3.5 h-3.5 text-[#6D28D9]" />
            <span className="text-xs font-bold uppercase tracking-wider">{config.deptBadge}</span>
          </motion.div>

          {/* Subtitle "WE ARE HIRING" */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 sm:mt-5 text-[11px] sm:text-xs font-black tracking-[0.28em] text-[#64748B] uppercase"
          >
            W E &nbsp; A R E &nbsp; H I R I N G
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-2 text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-[#0B1F4D] tracking-tight leading-none"
          >
            {jobTitle}
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.25em] text-[#64748B] uppercase"
          >
            {config.tagline}
          </motion.div>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-3 max-w-2xl text-xs sm:text-sm md:text-[15px] text-[#475569] leading-relaxed font-normal mx-auto text-center px-4"
          >
            {config.description}
          </motion.p>
        </div>

        {/* 2. CENTER SECTION: 3D Illustration + Arched Floating Badges */}
        <div className="relative w-full max-w-[1200px] mx-auto my-3 sm:my-5 min-h-[380px] sm:min-h-[460px] md:min-h-[500px] flex items-center justify-center">
          
          {/* Subtle Halo & Curved Orbit Guide Behind Character */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[520px] h-[340px] sm:h-[420px] bg-gradient-to-t from-blue-100/70 via-white/80 to-transparent rounded-full blur-2xl pointer-events-none -z-0"></div>
          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] sm:w-[780px] md:w-[860px] h-[340px] sm:h-[420px] border border-blue-200/50 rounded-full pointer-events-none -z-0"></div>

          {/* --- LEFT FLOATING BADGES (Desktop & Tablet) --- */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {/* Left 1: Talent Management */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.2 },
                x: { duration: 0.6, delay: 0.2 },
                y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }
              }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="absolute pointer-events-auto top-[10%] left-[2%] lg:left-[5%] xl:left-[8%] bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] rounded-2xl px-4 py-3 flex items-center gap-3.5 hover:shadow-xl transition-all cursor-default select-none"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${config.leftPillars[0].bgClass} ${config.leftPillars[0].textClass} border ${config.leftPillars[0].borderClass}`}>
                {React.createElement(config.leftPillars[0].icon, { className: 'w-5 h-5' })}
              </div>
              <div className="text-sm font-bold text-slate-800 tracking-tight leading-snug whitespace-nowrap text-left">
                {config.leftPillars[0].title}
              </div>
            </motion.div>

            {/* Left Floating Micro-Badge: Cyan Paper Airplane */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [-45, -40, -45] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute pointer-events-none top-[24%] left-[24%] lg:left-[26%] w-8 h-8 rounded-full bg-[#38BDF8] flex items-center justify-center text-white shadow-md shadow-sky-400/40 select-none"
            >
              <Send className="w-4 h-4 ml-0.5 -mt-0.5" />
            </motion.div>

            {/* Left 2: Employee Engagement (Slightly further left for convex arc) */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3 },
                x: { duration: 0.6, delay: 0.3 },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
              }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="absolute pointer-events-auto top-[42%] left-[0%] lg:left-[2%] xl:left-[4%] bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] rounded-2xl px-4 py-3 flex items-center gap-3.5 hover:shadow-xl transition-all cursor-default select-none"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${config.leftPillars[1].bgClass} ${config.leftPillars[1].textClass} border ${config.leftPillars[1].borderClass}`}>
                {React.createElement(config.leftPillars[1].icon, { className: 'w-5 h-5' })}
              </div>
              <div className="text-sm font-bold text-slate-800 tracking-tight leading-snug whitespace-nowrap text-left">
                {config.leftPillars[1].title}
              </div>
            </motion.div>

            {/* Left 3: HR Operations */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4 },
                x: { duration: 0.6, delay: 0.4 },
                y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }
              }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="absolute pointer-events-auto top-[74%] left-[2%] lg:left-[5%] xl:left-[7%] bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] rounded-2xl px-4 py-3 flex items-center gap-3.5 hover:shadow-xl transition-all cursor-default select-none"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${config.leftPillars[2].bgClass} ${config.leftPillars[2].textClass} border ${config.leftPillars[2].borderClass}`}>
                {React.createElement(config.leftPillars[2].icon, { className: 'w-5 h-5' })}
              </div>
              <div className="text-sm font-bold text-slate-800 tracking-tight leading-snug whitespace-nowrap text-left">
                {config.leftPillars[2].title}
              </div>
            </motion.div>
          </div>

          {/* --- CENTER CHARACTER IMAGE --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="relative z-10 mx-auto flex items-end justify-center pointer-events-none select-none"
          >
            <img
              src={imgSrc || defaultHero}
              onError={() => setImgSrc(defaultHero)}
              alt={jobTitle}
              className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[460px] xl:w-[490px] max-h-[380px] sm:max-h-[440px] md:max-h-[480px] object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* --- RIGHT FLOATING BADGES (Desktop & Tablet) --- */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {/* Right 1: Workplace Culture */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.2 },
                x: { duration: 0.6, delay: 0.2 },
                y: { duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }
              }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="absolute pointer-events-auto top-[10%] right-[2%] lg:right-[5%] xl:right-[8%] bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] rounded-2xl px-4 py-3 flex items-center gap-3.5 hover:shadow-xl transition-all cursor-default select-none"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${config.rightPillars[0].bgClass} ${config.rightPillars[0].textClass} border ${config.rightPillars[0].borderClass}`}>
                {React.createElement(config.rightPillars[0].icon, { className: 'w-5 h-5' })}
              </div>
              <div className="text-sm font-bold text-slate-800 tracking-tight leading-snug whitespace-nowrap text-left">
                {config.rightPillars[0].title}
              </div>
            </motion.div>

            {/* Right Floating Sparkle Accent */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute pointer-events-none top-[26%] right-[24%] lg:right-[26%] text-[#60A5FA]"
            >
              <Sparkles className="w-4 h-4 fill-[#60A5FA]" />
            </motion.div>

            {/* Right 2: Organizational Growth (Slightly further right for convex arc) */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3 },
                x: { duration: 0.6, delay: 0.3 },
                y: { duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
              }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="absolute pointer-events-auto top-[42%] right-[0%] lg:right-[2%] xl:right-[4%] bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] rounded-2xl px-4 py-3 flex items-center gap-3.5 hover:shadow-xl transition-all cursor-default select-none"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${config.rightPillars[1].bgClass} ${config.rightPillars[1].textClass} border ${config.rightPillars[1].borderClass}`}>
                {React.createElement(config.rightPillars[1].icon, { className: 'w-5 h-5' })}
              </div>
              <div className="text-sm font-bold text-slate-800 tracking-tight leading-snug whitespace-nowrap text-left">
                {config.rightPillars[1].title}
              </div>
            </motion.div>

            {/* Right Floating Micro-Badge: Blue Paper Airplane */}
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [-45, -50, -45] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute pointer-events-none top-[58%] right-[22%] lg:right-[24%] w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center text-white shadow-md shadow-blue-500/40 select-none"
            >
              <Send className="w-4 h-4 ml-0.5 -mt-0.5" />
            </motion.div>

            {/* Right 3: People Development */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4 },
                x: { duration: 0.6, delay: 0.4 },
                y: { duration: 4.7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }
              }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="absolute pointer-events-auto top-[74%] right-[2%] lg:right-[5%] xl:right-[7%] bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] rounded-2xl px-4 py-3 flex items-center gap-3.5 hover:shadow-xl transition-all cursor-default select-none"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${config.rightPillars[2].bgClass} ${config.rightPillars[2].textClass} border ${config.rightPillars[2].borderClass}`}>
                {React.createElement(config.rightPillars[2].icon, { className: 'w-5 h-5' })}
              </div>
              <div className="text-sm font-bold text-slate-800 tracking-tight leading-snug whitespace-nowrap text-left">
                {config.rightPillars[2].title}
              </div>
            </motion.div>
          </div>

        </div>

        {/* 3. BOTTOM STATS BAR: Wide Frosted Pill Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-full max-w-5xl mx-auto mt-2 sm:mt-4 bg-white/95 backdrop-blur-md border border-purple-100/60 shadow-[0_12px_40px_rgba(11,31,77,0.06)] rounded-3xl lg:rounded-full px-6 sm:px-8 lg:px-10 py-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-2 items-center relative z-20"
        >
          {/* Stat 1: Position Level */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F3EEFF] border border-purple-100/90 flex items-center justify-center text-[#6D28D9] shrink-0 shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Position Level</div>
              <div className="text-xs sm:text-sm lg:text-[15px] font-bold text-[#0B1F4D] leading-tight mt-0.5">{positionLevel || 'Entry Level'}</div>
            </div>
          </div>

          {/* Stat 2: Open Positions */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F3EEFF] border border-purple-100/90 flex items-center justify-center text-[#6D28D9] shrink-0 shadow-xs">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Open Positions</div>
              <div className="text-xs sm:text-sm lg:text-[15px] font-bold text-[#0B1F4D] leading-tight mt-0.5">{formattedVacancies || '30'}</div>
            </div>
          </div>

          {/* Stat 3: Employment Type */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F3EEFF] border border-purple-100/90 flex items-center justify-center text-[#6D28D9] shrink-0 shadow-xs">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Employment Type</div>
              <div className="text-xs sm:text-sm lg:text-[15px] font-bold text-[#0B1F4D] leading-tight mt-0.5">{employmentType || 'Permanent'}</div>
            </div>
          </div>

          {/* Stat 4: Work Mode */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F3EEFF] border border-purple-100/90 flex items-center justify-center text-[#6D28D9] shrink-0 shadow-xs">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Work Mode</div>
              <div className="text-xs sm:text-sm lg:text-[15px] font-bold text-[#0B1F4D] leading-tight mt-0.5">{formattedWorkMode || 'On-Site'}</div>
            </div>
          </div>

          {/* Stat 5: Hiring Status */}
          <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-left">
              <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Hiring Status</div>
              <div className="text-xs sm:text-sm lg:text-[15px] font-bold text-[#16A34A] leading-tight mt-0.5">{formattedStatus || 'Open'}</div>
            </div>
          </div>
        </motion.div>

        {/* 4. CALL TO ACTION ROW: Apply Button + Application Deadline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative z-20"
        >
          {/* Apply Now Button */}
          <button
            type="button"
            onClick={onApplyClick || handleScrollToApply}
            className="px-9 py-3.5 bg-gradient-to-r from-[#0B1F4D] via-[#173B78] to-[#0B1F4D] hover:from-[#173B78] hover:to-[#0B1F4D] text-white border border-[#D4AF37]/50 font-bold text-sm sm:text-base rounded-full shadow-lg shadow-[#0B1F4D]/25 flex items-center gap-3 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </button>

          {/* Application Deadline Badge */}
          <div className="bg-white/85 backdrop-blur-md border border-purple-100/80 rounded-2xl px-5 py-2.5 flex items-center gap-3.5 shadow-sm text-left">
            <div className="w-10 h-10 rounded-xl bg-[#F3EEFF] border border-purple-100 flex items-center justify-center text-[#6D28D9] shrink-0">
              <Calendar className="w-5 h-5 text-[#6D28D9]" />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Applications close on</div>
              <div className="text-xs sm:text-sm font-bold text-[#0B1F4D] leading-tight">June 30, 2026</div>
              <div className="text-[11px] text-slate-500">Secure your interview round.</div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

// --- PageAmbientBackground.jsx ---



const JobIcons = [
  // Briefcase
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  // Document / Resume
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  // Search
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
  // Badge
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />,
  // Calendar
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
  // Building
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
  // User Profile
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
  // Mail
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  // Laptop
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  // Shield
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  // Checklist
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
  // Status Indicator
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />,
];

function PageAmbientBackground() {
  const elements = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    icon: JobIcons[i % JobIcons.length],
    top: `${Math.random() * 95}%`,
    left: `${Math.random() * 95}%`,
    duration: 18 + Math.random() * 12,
    delay: Math.random() * 8,
    opacity: 0.03 + Math.random() * 0.05,
    size: 20 + Math.random() * 16,
  }));

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: `p-${i}`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: 15 + Math.random() * 10,
    delay: Math.random() * 5,
    opacity: 0.02 + Math.random() * 0.04,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
      {/* Job-related floating icons */}
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-slate-800 flex items-center justify-center will-change-transform"
          style={{ top: el.top, left: el.left, width: el.size, height: el.size, opacity: el.opacity }}
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: el.delay,
          }}
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
            {el.icon}
          </svg>
        </motion.div>
      ))}

      {/* Tiny particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-slate-400 rounded-full will-change-transform"
          style={{
            top: p.top, left: p.left,
            width: '3px', height: '3px',
            opacity: p.opacity
          }}
          animate={{
            y: [-15, 15, -15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

// --- JobVacancyPage.jsx ---







// Configurable sequence of entrance directions by section index (1-based)
export const SECTION_DIRECTIONS = [
  'default', // 0: placeholder
  'default', // 1: Position Information
  'left',    // 2: Job Overview
  'right',   // 3: Job Profile
  'bottom',  // 4: Job Description
  'left',    // 5: Key Responsibilities
  'right',   // 6: Eligibility Criteria
  'bottom',  // 7: Skills & Competencies
  'left',    // 8: Work Environment
  'right',   // 9: Compensation & Benefits
  'top',     // 10: Why Join Us?
  'left',    // 11: Training & Probation
  'right',   // 12: Recruitment Process
  'bottom',  // 13: Important Dates
  'left',    // 14: Required Documents
  'right',   // 15: Application Information
  'bottom',  // 16: Contact Information
  'top'      // 17: Important Notices
];

// Stacked Section Component with Direction-Based Scroll Experience
const StackedSection = ({ title, children, index, direction }) => {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const targetDirection = direction || SECTION_DIRECTIONS[index] || 'default';

  // Entry phase: from when the section's top is at 85% of viewport to 45%
  const { scrollYProgress: entryProgressRaw } = useScroll({
    target: containerRef,
    offset: ["start 85%", "start 45%"]
  });

  // Exit phase: from when the section's bottom is at 85% of viewport to 45%
  const { scrollYProgress: exitProgressRaw } = useScroll({
    target: containerRef,
    offset: ["end 85%", "end 45%"]
  });

  // Apply smooth spring physics matching existing config
  const springConfig = { stiffness: 80, damping: 20, restDelta: 0.001 };
  const smoothEntry = useSpring(entryProgressRaw, springConfig);
  const smoothExit = useSpring(exitProgressRaw, springConfig);

  // Interpolate values based on combined entry and exit progress
  const opacity = useTransform(() => {
    const e = smoothEntry.get();
    const x = smoothExit.get();
    return Math.min(Math.max(e - x, 0), 1);
  });

  const scale = useTransform(() => {
    const e = smoothEntry.get();
    const xProg = smoothExit.get();
    return Math.min(1, 0.98 + (0.02 * e) - (0.02 * xProg));
  });

  const y = useTransform(() => {
    const e = smoothEntry.get();
    const xProg = smoothExit.get();
    if (shouldReduceMotion) return -15 * xProg;

    const moveDist = typeof window !== 'undefined' && window.innerWidth < 640 ? 25 : 45;
    return moveDist * (1 - e) - 15 * xProg;
  });

  const cleanTitle = title.replace(/^\d+\.\s*/, '');
  const numberStr = index ? String(index).padStart(2, '0') : (title.match(/^\d+/) ? String(title.match(/^\d+/)[0]).padStart(2, '0') : '');

  return (
    <div ref={containerRef} className="w-full relative will-change-transform" style={{ position: 'relative' }}>
      <motion.div
        className="sticky top-6 sm:top-10 w-full bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden mb-10 sm:mb-16 will-change-transform"
        style={{ opacity, scale, y, zIndex: index }}
      >
        <div className="p-4 sm:p-7 md:p-10 lg:p-12">
          {/* Header matching reference design */}
          <div className="flex items-center justify-between pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-slate-100 relative">
            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
              {/* Number Badge */}
              {numberStr && (
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0B1F4D] text-[#D4AF37] border border-[#D4AF37]/40 font-extrabold text-base sm:text-xl flex items-center justify-center shrink-0 shadow-sm">
                  {numberStr}
                </div>
              )}

              {/* Subtitle & Title */}
              <div className="min-w-0 flex-1">
                <span className="text-[10px] sm:text-xs font-bold text-[#6D28D9] uppercase tracking-wider block truncate">
                  {SECTION_SUBTITLES[index] || 'ROLE OVERVIEW'}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0B1F4D] tracking-tight leading-tight truncate">
                  {cleanTitle}
                </h2>
              </div>

              {/* Decorative line spanning to right illustration */}
              <div className="hidden md:block flex-1 h-[1.5px] bg-purple-100/80 ml-6 mr-6 self-center" />
            </div>

            {/* Top Right Decorative Illustration */}
            <div className="hidden sm:block shrink-0 pl-2">
              <SectionHeaderDecoration />
            </div>
          </div>

          <div className="text-slate-600 leading-relaxed">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Section Subtitles Mapping
const SECTION_SUBTITLES = {
  1: 'ROLE SPECIFICATION',
  2: 'GENERAL OVERVIEW',
  3: 'ROLE SUMMARY',
  4: 'ROLE OVERVIEW',
  5: 'KEY DUTIES & TASKS',
  6: 'ELIGIBILITY CRITERIA',
  7: 'SKILLS & COMPETENCIES',
  8: 'WORK ENVIRONMENT',
  9: 'COMPENSATION & BENEFITS',
  10: 'WHY JOIN US',
  11: 'TRAINING & PROBATION',
  12: 'RECRUITMENT PROCESS',
  13: 'IMPORTANT DATES',
  14: 'REQUIRED DOCUMENTS',
  15: 'APPLICATION DETAILS',
  16: 'CONTACT INFORMATION',
};

// Top-right decorative illustration for sections matching reference design
const SectionHeaderDecoration = () => (
  <div className="relative w-28 h-16 pointer-events-none select-none">
    {/* Soft background glow & wave */}
    <div className="absolute right-0 top-0 w-32 h-20 bg-gradient-to-bl from-blue-100/60 via-blue-50/40 to-transparent rounded-full blur-sm" />

    <svg className="w-28 h-16 relative z-10" viewBox="0 0 110 65" fill="none">
      {/* Floating decorative bubbles */}
      <circle cx="20" cy="24" r="3.5" fill="#60a5fa" opacity="0.65" />
      <circle cx="32" cy="12" r="2" fill="#93c5fd" opacity="0.75" />

      {/* Document Sheet */}
      <g filter="drop-shadow(0 2px 5px rgba(37,99,235,0.08))">
        <rect x="42" y="8" width="46" height="46" rx="8" fill="#ffffff" stroke="#e0edfd" strokeWidth="1.5" />
        {/* Document horizontal lines */}
        <rect x="50" y="18" width="30" height="3" rx="1.5" fill="#93c5fd" />
        <rect x="50" y="26" width="22" height="3" rx="1.5" fill="#93c5fd" />
        <rect x="50" y="34" width="26" height="3" rx="1.5" fill="#93c5fd" />
      </g>

      {/* User Badge overlapping bottom-right of document */}
      <circle cx="86" cy="46" r="11" fill="#2563eb" />
      {/* User Avatar Head */}
      <circle cx="86" cy="43" r="3.5" fill="#ffffff" />
      {/* User Avatar Shoulders */}
      <path d="M80 52.5C80 49.8 82.8 48 86 48C89.2 48 92 49.8 92 52.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

// 3D-styled Briefcase & Document illustration for Job Description card matching reference design
const JobDescriptionIllustration = () => (
  <div className="relative w-full h-44 sm:h-48 flex items-center justify-center mb-5">
    {/* Background soft curved wave shape */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-56 h-36 bg-gradient-to-tr from-blue-100/50 via-blue-200/40 to-blue-50/20 rounded-[36px] rotate-[-5deg] blur-md" />
    </div>

    <svg className="w-48 h-40 relative z-10" viewBox="0 0 200 160" fill="none">
      <defs>
        <linearGradient id="briefcaseBodyGrad" x1="42" y1="46" x2="138" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop offset="0.5" stopColor="#2563eb" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="briefcaseFlapGrad" x1="42" y1="46" x2="138" y2="82" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
        <filter id="docShadow" x="90" y="52" width="80" height="72" filterUnits="userSpaceOnUse">
          <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#1e3a8a" floodOpacity="0.14" />
        </filter>
        <filter id="caseShadow" x="30" y="38" width="120" height="100" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#1e40af" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Floating accent dots */}
      <circle cx="28" cy="42" r="3.5" fill="#60a5fa" opacity="0.65" />
      <circle cx="170" cy="56" r="4.5" fill="#3b82f6" opacity="0.5" />
      <circle cx="18" cy="88" r="2.5" fill="#93c5fd" opacity="0.75" />

      {/* Spark lines above briefcase */}
      <line x1="68" y1="34" x2="60" y2="26" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="88" y1="28" x2="88" y2="18" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="108" y1="34" x2="116" y2="26" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />

      {/* Briefcase Handle */}
      <path
        d="M72 46V36C72 32.6863 74.6863 30 78 30H98C101.314 30 104 32.6863 104 36V46"
        stroke="#1d4ed8"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Briefcase Body with shadow */}
      <g filter="url(#caseShadow)">
        <rect x="42" y="46" width="96" height="74" rx="14" fill="url(#briefcaseBodyGrad)" />
        {/* Flap */}
        <path d="M42 56C42 50.4772 46.4772 46 52 46H128C133.523 46 138 50.4772 138 56V74C138 76 130 82 90 82C50 82 42 76 42 74V56Z" fill="url(#briefcaseFlapGrad)" />
      </g>

      {/* Center Clasp / Latch */}
      <rect x="83" y="76" width="14" height="14" rx="4" fill="#ffffff" />
      <rect x="86" y="79" width="8" height="8" rx="2" fill="#2563eb" />

      {/* Floating Document Sheet */}
      <g filter="url(#docShadow)">
        <rect x="106" y="62" width="56" height="52" rx="10" fill="#ffffff" />
        <rect x="115" y="73" width="38" height="4.5" rx="2.25" fill="#60a5fa" />
        <rect x="115" y="83" width="38" height="4.5" rx="2.25" fill="#93c5fd" />
        <rect x="115" y="93" width="26" height="4.5" rx="2.25" fill="#60a5fa" />
      </g>
    </svg>
  </div>
);

// Helper function to parse job description into overview paragraph, lead-in heading, and bullets
function parseJobDescription(text) {
  if (!text) return { overview: '', leadIn: 'Key areas of work include:', bullets: [] };

  const rawLines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const bullets = [];
  let leadIn = 'Key areas of work include:';
  const overviewParas = [];

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    if (line.startsWith('-') || line.startsWith('•')) {
      bullets.push(line.replace(/^[-•]\s*/, '').trim());
    } else if (line.toLowerCase().includes('include:') || line.toLowerCase().includes('responsible for:')) {
      leadIn = line;
    } else {
      overviewParas.push(line);
    }
  }

  // If no explicit dash bullets were found, but we have multiple paragraphs, use first as overview and rest as key points
  if (bullets.length === 0 && overviewParas.length > 1) {
    return {
      overview: overviewParas[0],
      leadIn: 'Key responsibilities and focus areas:',
      bullets: overviewParas.slice(1)
    };
  }

  return {
    overview: overviewParas.join('\n\n') || text,
    leadIn: leadIn || 'Key areas of work include:',
    bullets
  };
}

// Job Description Card component matching reference design
const JobDescriptionCard = ({ descriptionText }) => {
  const { overview, leadIn, bullets } = useMemo(() => {
    return parseJobDescription(descriptionText);
  }, [descriptionText]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Left Card: Job Description Overview */}
      <div className="lg:col-span-5 bg-gradient-to-br from-[#f0f7ff] via-[#f5f9ff] to-[#eaf3fe] border border-blue-100/80 rounded-2xl sm:rounded-[24px] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-sm">
        {/* Soft background ambient glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-b from-blue-200/30 to-transparent rounded-full blur-2xl pointer-events-none" />

        {/* 3D Briefcase Illustration */}
        <JobDescriptionIllustration />

        {/* Text Content */}
        <div className="relative z-10 mt-auto">
          <div className="w-8 h-1.5 bg-[#0B1F4D] rounded-full mb-3" />
          <span className="block text-xs font-bold text-[#6D28D9] tracking-wider uppercase mb-2">
            JOB DESCRIPTION
          </span>
          <p className="text-[14px] sm:text-[14.5px] font-medium text-slate-600 leading-relaxed whitespace-pre-line">
            {overview}
          </p>
        </div>
      </div>

      {/* Right Card: Key areas of work include checklist */}
      <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-[24px] border border-slate-100 p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3.5 pb-4 mb-3 border-b border-slate-100/80">
          <div className="w-11 h-11 rounded-xl bg-[#F3EEFF] border border-purple-100 flex items-center justify-center text-[#6D28D9] shrink-0">
            <svg className="w-5 h-5 text-[#6D28D9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <line x1="10" y1="9" x2="8" y2="9" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-[19px] font-bold text-[#0B1F4D] tracking-tight">
            {leadIn}
          </h3>
        </div>

        {/* Checklist */}
        <div className="space-y-0 flex-1">
          {bullets.map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-3.5 py-3 border-b border-slate-100/70 last:border-b-0">
              {/* Timeline Connector Line */}
              {idx < bullets.length - 1 && (
                <span className="absolute left-[9px] top-6 bottom-0 w-[2px] bg-purple-100/90" />
              )}

              {/* Solid Navy Circle Checkmark with Gold Accent */}
              <div className="relative z-10 w-5 h-5 rounded-full bg-[#0B1F4D] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5 shadow-xs">
                <svg className="w-3 h-3 text-[#D4AF37]" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 6.5l2.5 2.5 5-5" />
                </svg>
              </div>

              {/* Item Text */}
              <p className="text-[14px] sm:text-[14.5px] text-slate-700 font-medium leading-relaxed pt-0.5">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Reading effect for paragraphs
const FadeText = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};

// Color themes mapping matching the premium design palette
const CARD_THEMES = {
  blue: {
    cardBg: 'bg-[#f0f7ff]',
    border: 'border-[#dbeafe]/80',
    iconBg: 'bg-[#dbeafe]',
    iconColor: 'text-[#2563eb]',
    hoverBorder: 'hover:border-blue-300',
  },
  purple: {
    cardBg: 'bg-[#f5f3ff]',
    border: 'border-[#ede9fe]/80',
    iconBg: 'bg-[#ede9fe]',
    iconColor: 'text-[#7c3aed]',
    hoverBorder: 'hover:border-purple-300',
  },
  orange: {
    cardBg: 'bg-[#fff8f0]',
    border: 'border-[#fedec6]/80',
    iconBg: 'bg-[#feebd6]',
    iconColor: 'text-[#ea580c]',
    hoverBorder: 'hover:border-orange-300',
  },
  green: {
    cardBg: 'bg-[#f0fdf4]',
    border: 'border-[#dcfce7]/80',
    iconBg: 'bg-[#dcfce7]',
    iconColor: 'text-[#10b981]',
    hoverBorder: 'hover:border-emerald-300',
  },
  rose: {
    cardBg: 'bg-[#fff1f2]',
    border: 'border-[#ffe4e6]/80',
    iconBg: 'bg-[#ffe4e6]',
    iconColor: 'text-[#f43f5e]',
    hoverBorder: 'hover:border-rose-300',
  },
  mint: {
    cardBg: 'bg-[#f0fdf4]',
    border: 'border-[#dcfce7]/80',
    iconBg: 'bg-[#dcfce7]',
    iconColor: 'text-[#10b981]',
    hoverBorder: 'hover:border-emerald-300',
  },
};

const getThemeByLabel = (label, explicitVariant) => {
  if (explicitVariant && CARD_THEMES[explicitVariant]) return CARD_THEMES[explicitVariant];
  const l = (label || '').toLowerCase();
  if (l.includes('title') || l.includes('employment') || l.includes('qualification') || l.includes('shift') || l.includes('fee')) {
    return CARD_THEMES.blue;
  }
  if (l.includes('code') || l.includes('work mode') || l.includes('experience') || l.includes('round') || l.includes('submission')) {
    return CARD_THEMES.purple;
  }
  if (l.includes('department') || l.includes('location') || l.includes('age') || l.includes('duration') || l.includes('hour')) {
    return CARD_THEMES.orange;
  }
  if (l.includes('level') || l.includes('language') || l.includes('stipend') || l.includes('assessment') || l.includes('pf') || l.includes('esi')) {
    return CARD_THEMES.green;
  }
  if (l.includes('vacanc') || l.includes('deadline')) {
    return CARD_THEMES.rose;
  }
  if (l.includes('status')) {
    return CARD_THEMES.mint;
  }
  return CARD_THEMES.blue;
};

// Reusable InfoCard Component
const InfoCard = ({ label, value, icon, variant, isNumber = false, isStatus = false }) => {
  if (!value) return null;

  const theme = getThemeByLabel(label, variant);
  const isStatusField = isStatus || label?.toLowerCase().includes('status');
  const isNumericField = isNumber || (label?.toLowerCase().includes('vacanc') && !isNaN(Number(value)));

  return (
    <div
      className={`flex items-start sm:items-center gap-3.5 sm:gap-5 p-3.5 sm:p-5 rounded-2xl sm:rounded-[20px] ${theme.cardBg} border ${theme.border} ${theme.hoverBorder} transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5`}
    >
      {icon && (
        <div
          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center ${theme.iconBg} ${theme.iconColor} mt-0.5 sm:mt-0`}
        >
          {icon}
        </div>
      )}

      <div className="min-w-0 flex-1 space-y-1">
        <span className="block text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
          {label}
        </span>

        {isStatusField ? (
          <div className="pt-0.5">
            <span
              className={`inline-flex items-center px-5 py-1 sm:px-6 sm:py-1.5 rounded-full font-bold text-base sm:text-lg ${
                String(value).toLowerCase() === 'closed'
                  ? 'bg-rose-100 text-rose-700'
                  : 'bg-[#dbf9e7] text-[#15803d]'
              }`}
            >
              {value}
            </span>
          </div>
        ) : isNumericField ? (
          <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {value}
          </span>
        ) : (
          <span className="block text-base sm:text-lg lg:text-[19px] font-bold text-slate-900 leading-snug break-words">
            {value}
          </span>
        )}
      </div>
    </div>
  );
};

// Reusable List Component
const List = ({ items, type = 'bullet' }) => {
  if (!items || items.length === 0) return null;
  
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-neutral-600 text-sm">
          {type === 'check' ? (
            <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0 mt-2"></span>
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

// Reusable SVG Icons for standard fields matching the reference design
const Icons = {
  // Job Title / Briefcase in filled vibrant blue
  JobTitle: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 4a2 2 0 012-2h4a2 2 0 012 2v1h4a2 2 0 012 2v2.5a.75.75 0 01-.75.75H2.75A.75.75 0 012 9.5V7a2 2 0 012-2h4V4zm2 1h4V4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v1z" />
      <path d="M2 11.5v6.25A2.25 2.25 0 004.25 20h15.5A2.25 2.25 0 0022 17.75V11.5a.75.75 0 00-.75-.75h-6.5a1.75 1.75 0 01-3.5 0h-6.5a.75.75 0 00-.75.75z" />
    </svg>
  ),

  // Job Code: </ > in vibrant purple with bold rounded lines
  JobCode: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="7 8 3 12 7 16" />
      <line x1="14" y1="6" x2="10" y2="18" />
      <polyline points="17 8 21 12 17 16" />
    </svg>
  ),

  // Department: building in vibrant orange with 4 windows and door
  Department: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M4 3a2 2 0 012-2h12a2 2 0 012 2v18a1 1 0 01-1 1H3a1 1 0 01-1-1V3a2 2 0 012-2zm3 3a1 1 0 00-1 1v1.5a1 1 0 001 1h1.5a1 1 0 001-1V7a1 1 0 00-1-1H7zm7 0a1 1 0 00-1 1v1.5a1 1 0 001 1h1.5a1 1 0 001-1V7a1 1 0 00-1-1H14zm-7 6a1 1 0 00-1 1v1.5a1 1 0 001 1h1.5a1 1 0 001-1V13a1 1 0 00-1-1H7zm7 0a1 1 0 00-1 1v1.5a1 1 0 001 1h1.5a1 1 0 001-1V13a1 1 0 00-1-1H14zm-5 5.5a1 1 0 011-1h2a1 1 0 011 1V22h-4v-3.5z" />
    </svg>
  ),

  // Position Level: green shield with 5-pointed star inside
  Level: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2a1.2 1.2 0 01.52.12l7.5 3.75A1.2 1.2 0 0120.7 7c0 8.12-4.7 13.9-8.35 15.35a1.2 1.2 0 01-.7 0C7.99 20.9 3.3 15.12 3.3 7a1.2 1.2 0 01.68-1.13l7.5-3.75A1.2 1.2 0 0112 2zm0 6.1l1.16 2.35 2.6.38-1.88 1.83.44 2.58L12 14.02l-2.32 1.22.44-2.58-1.88-1.83 2.6-.38L12 8.1z" />
    </svg>
  ),

  // Number of Vacancies: team of 3 people in vibrant rose-red
  Vacancies: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3a3 3 0 100 6 3 3 0 000-6zm-6 3a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm12 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-6 7.5c-3.1 0-6 1.6-6 4.25v.75a1 1 0 001 1h10a1 1 0 001-1v-.75c0-2.65-2.9-4.25-6-4.25zm-6.25 1.5c-.8.48-1.5 1.16-1.5 2v.25a1 1 0 001 1H5.8v-1.25c0-.85.35-1.57.88-2H5.75zm12.5 0c.53.43.88 1.15.88 2v1.25h2.05a1 1 0 001-1v-.25c0-.84-.7-1.52-1.5-2h-2.43z" />
    </svg>
  ),

  // Application Status: green circle with white checkmark
  Status: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="M8.5 12.3l2.4 2.4 4.8-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  EmploymentType: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 4a2 2 0 012-2h4a2 2 0 012 2v1h4a2 2 0 012 2v2.5a.75.75 0 01-.75.75H2.75A.75.75 0 012 9.5V7a2 2 0 012-2h4V4zm2 1h4V4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v1z" />
      <path d="M2 11.5v6.25A2.25 2.25 0 004.25 20h15.5A2.25 2.25 0 0022 17.75V11.5a.75.75 0 00-.75-.75h-6.5a1.75 1.75 0 01-3.5 0h-6.5a.75.75 0 00-.75.75z" />
    </svg>
  ),
  Salary: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="m6 13 8.5 8" />
      <path d="M6 13h3a4 4 0 0 0 0-8" />
    </svg>
  ),
  WorkMode: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  Location: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Duration: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Date: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Education: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  Experience: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <polyline points="17 11 19 13 23 9" />
    </svg>
  ),
  Age: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 14 14" />
    </svg>
  ),
  Language: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  Contact: (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
};

// ─── APPLY DROPDOWN MENU ──────────────────────────────────────────────────────
function ApplyDropdownMenu({ target, onClose, onSelectOption }) {
  const menuRef = useRef(null);

  useEffect(() => {
    if (!target) return;
    const handleDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('keydown', handleKey);
    window.addEventListener('scroll', onClose, { passive: true });
    return () => {
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('scroll', onClose);
    };
  }, [target, onClose]);

  if (!target) return null;

  const { job, rect } = target;
  const menuHeight = 180;
  const menuWidth = 270;
  const spaceBelow = window.innerHeight - rect.bottom;
  const placeAbove = spaceBelow < menuHeight && rect.top > menuHeight;

  const top = placeAbove ? rect.top - menuHeight - 6 : rect.bottom + 6;
  const left = Math.max(12, Math.min(rect.right - menuWidth, window.innerWidth - menuWidth - 16));

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, scale: 0.95, y: placeAbove ? 6 : -6 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        style={{ top, left, width: menuWidth }}
        className="pointer-events-auto fixed bg-white/95 backdrop-blur-xl border border-purple-200/80 rounded-2xl shadow-2xl shadow-[#0B1F4D]/15 p-2 overflow-hidden z-50"
      >
        <div className="px-3 py-2 border-b border-slate-100 mb-1">
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Select Option</p>
          <p className="text-[12px] font-extrabold text-[#0B1F4D] truncate">{job.jobTitle}</p>
          <p className="text-[10px] font-mono text-[#6D28D9] font-semibold">{job.jobCode}</p>
        </div>

        <button
          type="button"
          onClick={() => onSelectOption(job, 'new')}
          className="w-full text-left p-2.5 rounded-xl hover:bg-[#F3EEFF] transition-all flex items-center gap-3 group active:scale-[0.98] cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-[#F3EEFF] text-[#6D28D9] flex items-center justify-center shrink-0 group-hover:bg-[#6D28D9] group-hover:text-white transition-colors shadow-sm">
            <UserPlus className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-bold text-[#0B1F4D] group-hover:text-[#6D28D9]">New Registration</span>
              <span className="text-[9px] font-extrabold bg-[#F3EEFF] text-[#6D28D9] border border-purple-200 px-1.5 py-0.5 rounded-full uppercase">New</span>
            </div>
            <p className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">First time applying? Register & apply</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onSelectOption(job, 'login')}
          className="w-full text-left p-2.5 rounded-xl hover:bg-amber-50/80 transition-all flex items-center gap-3 group active:scale-[0.98] cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-[#F7E7A9]/40 text-[#0B1F4D] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 group-hover:bg-[#0B1F4D] group-hover:text-[#D4AF37] transition-colors shadow-sm">
            <LogIn className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-bold text-[#0B1F4D] group-hover:text-[#173B78]">Already Registered</span>
              <span className="text-[9px] font-extrabold bg-[#F7E7A9]/60 text-[#0B1F4D] border border-[#D4AF37]/40 px-1.5 py-0.5 rounded-full uppercase">Login</span>
            </div>
            <p className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">Sign in with Registration ID</p>
          </div>
        </button>
      </motion.div>
    </div>
  );
}

// ─── ALREADY REGISTERED / CANDIDATE LOGIN MODAL ──────────────────────────────
function AlreadyRegisteredModal({ data, onClose, onNewRegistration }) {
  const [loginResult, setLoginResult] = useState(null);
  const [loginForm, setLoginForm] = useState({
    regId: '',
    dobOrPhone: '',
  });

  if (!data || !data.job) return null;
  const { job } = data;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginForm.regId) return;
    setLoginResult({
      regId: loginForm.regId.trim().toUpperCase(),
      candidateName: 'Verified Applicant',
      jobTitle: job.jobTitle,
      jobCode: job.jobCode,
      status: 'Application Received & Screening Underway',
      date: 'September 2026',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8"
      >
        {/* Modal Header */}
        <div className="relative bg-gradient-to-br from-[#0B1F4D] via-[#173B78] to-[#0B1F4D] p-6 text-white border-b-2 border-[#D4AF37]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] font-bold text-[#D4AF37] bg-white/10 border border-[#D4AF37]/40 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {job.department}
            </span>
            <span className="text-[10px] font-mono text-[#F7E7A9] bg-white/10 px-2 py-0.5 rounded-full">
              {job.jobCode}
            </span>
          </div>
          <h3 className="text-xl font-extrabold text-white tracking-tight">{job.jobTitle}</h3>
          <p className="text-[12px] text-slate-300 mt-1">
            Already Registered Candidate • Sign In & Status Check
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {loginResult ? (
            <div className="space-y-4 py-2">
              <div className="p-4 bg-[#F3EEFF]/60 border border-purple-200 rounded-2xl">
                <div className="flex items-center gap-2 text-[#6D28D9] font-bold text-[13px] mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6D28D9]" />
                  Applicant Verified
                </div>
                <div className="space-y-1.5 text-[12px] text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Registration ID:</span>
                    <span className="font-mono font-bold text-[#0B1F4D]">{loginResult.regId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Post Applied:</span>
                    <span className="font-semibold text-slate-900">{loginResult.jobTitle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Application Status:</span>
                    <span className="font-bold text-[#6D28D9]">{loginResult.status}</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[12px] text-slate-600 space-y-1">
                <p className="font-bold text-[#0B1F4D]">Recruitment Cell Update:</p>
                <p>Your application is active in our recruitment records. Assessment schedule and further updates are communicated via your registered email.</p>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setLoginResult(null)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[12px] rounded-xl transition-all cursor-pointer"
                >
                  Check Another ID
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 bg-[#0B1F4D] hover:bg-[#173B78] text-white border border-[#D4AF37]/50 font-bold text-[12px] rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="bg-[#F3EEFF]/70 border border-purple-200 rounded-2xl p-3.5 flex items-start gap-2.5">
                <LogIn className="w-4 h-4 text-[#6D28D9] shrink-0 mt-0.5" />
                <p className="text-[12px] text-[#0B1F4D] leading-relaxed font-medium">
                  Enter your existing Registration ID to view application status or verify credentials for <strong className="font-bold">{job.jobTitle}</strong>.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#0B1F4D] uppercase tracking-wider mb-1">
                    Registration / Application ID <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={loginForm.regId}
                    onChange={(e) => setLoginForm({ ...loginForm, regId: e.target.value })}
                    placeholder="e.g. IBCS-REG-2026-10293"
                    className="w-full px-3.5 py-2.5 text-[13px] font-mono font-bold text-[#0B1F4D] border border-slate-200 rounded-xl focus:outline-none focus:border-[#6D28D9] focus:ring-2 focus:ring-purple-500/15 placeholder-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#0B1F4D] uppercase tracking-wider mb-1">
                    Registered Mobile Number or Date of Birth
                  </label>
                  <input
                    type="text"
                    value={loginForm.dobOrPhone}
                    onChange={(e) => setLoginForm({ ...loginForm, dobOrPhone: e.target.value })}
                    placeholder="DD/MM/YYYY or 10-digit mobile number"
                    className="w-full px-3.5 py-2.5 text-[13px] font-semibold text-[#0B1F4D] border border-slate-200 rounded-xl focus:outline-none focus:border-[#6D28D9] focus:ring-2 focus:ring-purple-500/15 placeholder-slate-400"
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[13px] rounded-xl transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-[#0B1F4D] hover:bg-[#173B78] text-white border border-[#D4AF37]/50 font-bold text-[13px] rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Sign In & View Status</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>

              <div className="pt-2 border-t border-slate-100 text-center">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onNewRegistration) onNewRegistration(job);
                  }}
                  className="text-[12px] font-bold text-[#6D28D9] hover:text-[#0B1F4D] transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>First time applying? Open Candidate Master Profile Form</span>
                  <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function JobDetailPage({ job: propJob, onBack: propOnBack, onApply: propOnApply, onHome: propOnHome }) {
  const navigate = useNavigate();
  const location = useLocation();
const jobId = propJob?.id || propJob?.jobCode || location.state?.jobId || 'IBCS-HR-EXEC-2026-001';

const data =
  jobId === 'IBCS-IT-JDEVOPS-2026-001'
    ? juniorDevOpsEngineerData
    : jobId === 'IBCS-IT-JSECURITY-2026-001'
    ? cyberSecurityEngineerData
    : jobId === 'IBCS-IT-JCCIO-2026-001'
    ? cyberCrimeInvestigationOfficerData
    : jobId === 'IBCS-IT-AIML-2026-001'
    ? aimlEngineerData
    : jobId === 'IBCS-IT-DANALYST-2026-001'
    ? dataAnalystData
    : jobId === 'IBCS-DES-GD-2026-001'
    ? graphicDesignerData
    : jobId === 'IBCS-HR-EXEC-2026-002'
    ? hrAdminData
    : jobId === 'IBCS-HR-ASSTMGR-2026-003'
    ? hrAssistantManagerData
    : jobId === 'IBCS-IT-PYFS-2026-001' || jobId === 'IT-PYFS-001'
    ? juniorPythonFullStackDeveloperData
    : jobId === 'IBCS-IT-QA-ENG-2026-001' || jobId === 'IT-QA-ENG-001'
    ? qaEngineerData
    : jobId === 'IBCS-IT-MAD-2026-001' || jobId === 'IT-MAD-001'
    ? mobileApplicationDeveloperData
    : hrExecutiveData;

const [viewMode,setViewMode]=useState("list");
  const [expandedNotice, setExpandedNotice] = useState({
    equalOpportunity: false,
    disclaimer: false,
    additionalInfo: false,
  });

  const toggleNotice = (key) => {
    setExpandedNotice(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-neutral-500 font-medium">Loading Job Details...</p>
        </div>
      </div>
    );
  }

  const {
    positionInformation = {},
    jobOverview = {},
    jobProfile = {},
    jobDescription = {},
    keyResponsibilities = {},
    eligibilityCriteria = {},
    skillsAndCompetencies = {},
    workEnvironment = {},
    compensationAndBenefits = {},
    whyJoinUs = {},
    trainingAndProbation = {},
    recruitmentProcess = {},
    importantDates = {},
    requiredDocuments = {},
    applicationInformation = {},
    contactInformation = {},
    importantNotices = {}
  } = data;

  const currentJob = useMemo(() => ({
    id: jobId,
    jobTitle: positionInformation.jobTitle || 'Job Position',
    jobCode: positionInformation.jobCode || jobId,
    department: positionInformation.department || 'IBCS Department',
    location: jobOverview.jobLocation || 'Multiple Locations',
    employmentType: jobOverview.employmentType || 'Permanent',
  }), [jobId, positionInformation, jobOverview]);

  const [applyTarget, setApplyTarget] = useState(null);
  const [applyModalData, setApplyModalData] = useState(null);

  const handleApplyClick = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    setApplyTarget((prev) => (prev ? null : { job: currentJob, rect }));
  };

  const handleSelectApplyOption = (job, option) => {
    setApplyTarget(null);
    if (option === 'new') {
      if (propOnApply) propOnApply(job);
      else navigate('/recruitment/current-vacancy/job-vacancy/new-registration', { state: { job } });
    } else {
      setApplyModalData({ job });
    }
  };

  const selectedJobListing = useMemo(() => {
    return jobListings.find((j) => j.id === jobId || j.jobCode === jobId);
  }, [jobId]);

  const activeHeroImage =
    data?.heroImage ||
    data?.image ||
    data?.heroImg ||
    positionInformation?.heroImage ||
    positionInformation?.image ||
    selectedJobListing?.heroImage ||
    selectedJobListing?.image ||
    location.state?.heroImage ||
    location.state?.job?.heroImage ||
    heroImg;

  return (
    <div className="min-h-screen bg-white py-6 sm:py-10 px-3.5 sm:px-6 lg:px-8 font-sans antialiased text-slate-800 selection:bg-blue-100 relative overflow-x-hidden w-full max-w-full">
      <PageAmbientBackground />

      {/* Top Header Navigation bar */}
      <div className="max-w-[1400px] w-full mx-auto mb-4 relative z-20 flex items-center justify-start gap-3">
        <button
          type="button"
          onClick={() => {
            if (propOnBack) propOnBack();
            else if (navigate) navigate(-1);
            else window.history.back();
          }}
          className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
        >
          ← Back to Vacancies
        </button>

        <button
          type="button"
          onClick={() => {
            if (propOnHome) propOnHome();
            else {
              window.location.hash = '#home';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] px-4 py-2 text-xs sm:text-sm font-bold text-[#040A1A] transition-all cursor-pointer shadow-sm active:scale-95"
        >
          <Home className="w-4 h-4 text-[#040A1A]" />
          <span>Home</span>
        </button>
      </div>



      {/* Premium Interactive Hero Section */}
      <div className="max-w-[1400px] w-full mx-auto mb-8 sm:mb-12 relative z-10">
        <HeroSection
          jobTitle={positionInformation.jobTitle}
          jobCode={positionInformation.jobCode}
          department={positionInformation.department}
          positionLevel={positionInformation.positionLevel}
          numberOfVacancies={positionInformation.numberOfVacancies}
          applicationStatus={positionInformation.applicationStatus}
          employmentType={jobOverview.employmentType}
          workMode={jobOverview.workMode}
          heroImage={activeHeroImage}
          onApplyClick={handleApplyClick}
        />
      </div>

      <div className="max-w-[1400px] mx-auto w-full space-y-10 sm:space-y-16 relative z-10 pb-32">

        {/* 1. Position Information */}
        <StackedSection title="1. Position Information" index={1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <InfoCard
              label="Job Title"
              value={positionInformation.jobTitle}
              icon={Icons.JobTitle}
              variant="blue"
            />
            <InfoCard
              label="Job Code"
              value={positionInformation.jobCode}
              icon={Icons.JobCode}
              variant="purple"
            />
            <InfoCard
              label="Department"
              value={positionInformation.department}
              icon={Icons.Department}
              variant="orange"
            />
            <InfoCard
              label="Position Level"
              value={positionInformation.positionLevel}
              icon={Icons.Level}
              variant="green"
            />
            <InfoCard
              label="Number of Vacancies"
              value={positionInformation.numberOfVacancies}
              icon={Icons.Vacancies}
              variant="rose"
              isNumber
            />
            <InfoCard
              label="Application Status"
              value={positionInformation.applicationStatus}
              icon={Icons.Status}
              variant="mint"
              isStatus
            />
          </div>
        </StackedSection>

        {/* 2. Job Overview */}
        <StackedSection title="2. Job Overview" index={2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <InfoCard label="Employment Type" value={jobOverview.employmentType} icon={Icons.EmploymentType} variant="blue" />
            <InfoCard label="Work Mode" value={jobOverview.workMode} icon={Icons.WorkMode} variant="purple" />
            <InfoCard label="Job Location" value={jobOverview.jobLocation} icon={Icons.Location} variant="orange" />
            <InfoCard label="Contract Duration" value={jobOverview.contractDuration} icon={Icons.Duration} variant="green" />
          </div>
        </StackedSection>

        {/* 3. Job Profile */}
        <StackedSection title="3. Job Profile" index={3}>
          <div className="p-5 rounded-2xl bg-slate-50/50 border border-slate-100">
            <FadeText>
              <p className="text-[15px] font-medium text-slate-700 leading-relaxed italic">
                "{jobProfile.shortOverviewOfThePosition}"
              </p>
            </FadeText>
          </div>
        </StackedSection>

        {/* 4. Job Description */}
        <StackedSection title="4. Job Description" index={4}>
          <FadeText>
            <JobDescriptionCard descriptionText={jobDescription.detailedDescriptionOfTheRole} />
          </FadeText>
        </StackedSection>

        {/* 5. Key Responsibilities */}
        <StackedSection title="5. Key Responsibilities" index={5}>
          <FadeText>
            <List items={keyResponsibilities.responsibilitiesAndDuties} type="check" />
          </FadeText>
        </StackedSection>

        {/* 6. Eligibility Criteria */}
        <StackedSection title="6. Eligibility Criteria" index={6}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <InfoCard label="Educational Qualification" value={eligibilityCriteria.educationalQualification} icon={Icons.Education} variant="blue" />
            <InfoCard label="Required Experience" value={eligibilityCriteria.requiredExperience} icon={Icons.Experience} variant="purple" />
            <InfoCard label="Age Limit" value={eligibilityCriteria.ageLimit} icon={Icons.Age} variant="orange" />
            <InfoCard label="Language Requirements" value={eligibilityCriteria.languageRequirements} icon={Icons.Language} variant="green" />
          </div>
        </StackedSection>

        {/* 7. Skills & Competencies */}
        <StackedSection title="7. Skills & Competencies" index={7}>
          <FadeText>
            <div className="space-y-6">
              {skillsAndCompetencies.technicalSkills && (
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Technical Skills</span>
                  <div className="flex flex-wrap gap-2">
                    {skillsAndCompetencies.technicalSkills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-[13px] font-semibold text-blue-700 bg-blue-50 rounded-xl">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {skillsAndCompetencies.computerProficiency && (
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Computer Proficiency</span>
                  <div className="flex flex-wrap gap-2">
                    {skillsAndCompetencies.computerProficiency.map((comp, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-[13px] font-semibold text-emerald-700 bg-emerald-50 rounded-xl">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {skillsAndCompetencies.softSkills && (
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Soft Skills</span>
                  <div className="flex flex-wrap gap-2">
                    {skillsAndCompetencies.softSkills.map((soft, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-[13px] font-semibold text-slate-600 bg-slate-100 rounded-xl">
                        {soft}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {skillsAndCompetencies.additionalRequirements && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Additional Requirements</span>
                  <List items={skillsAndCompetencies.additionalRequirements} />
                </div>
              )}
            </div>
          </FadeText>
        </StackedSection>

        {/* 8. Work Environment */}
        <StackedSection title="8. Work Environment" index={8}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <InfoCard label="Shift Type" value={workEnvironment.shiftType} />
            <InfoCard label="Working Days" value={workEnvironment.workingDays} />
            <InfoCard label="Working Hours" value={workEnvironment.workingHoursShiftTiming} />
            <InfoCard label="Weekly Off" value={workEnvironment.weeklyOff} />
          </div>
        </StackedSection>

        {/* 9. Compensation & Benefits */}
        <StackedSection title="9. Compensation & Benefits" index={9}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100/50 space-y-1">
              <span className="block text-[11px] font-semibold text-blue-500 uppercase tracking-wider">Annual CTC</span>
              <span className="block text-xl font-bold text-blue-900">{compensationAndBenefits.annualCtcSalaryPackage}</span>
            </div>
            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100/50 space-y-1">
              <span className="block text-[11px] font-semibold text-emerald-500 uppercase tracking-wider">Monthly Salary</span>
              <span className="block text-xl font-bold text-emerald-900">{compensationAndBenefits.monthlySalary}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <InfoCard label="PF Eligibility" value={compensationAndBenefits.pfEligibility} />
            <InfoCard label="ESI Eligibility" value={compensationAndBenefits.esiEligibility} />
          </div>
          {compensationAndBenefits.otherBenefits && (
            <FadeText>
              <div className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Other Benefits</span>
                <List items={compensationAndBenefits.otherBenefits} type="check" />
              </div>
            </FadeText>
          )}
        </StackedSection>

        {/* 10. Why Join Us? */}
        <StackedSection title="10. Why Join Us?" index={10}>
          <FadeText>
            <List items={whyJoinUs.allFields} type="check" />
          </FadeText>
        </StackedSection>

        {/* 11. Training & Probation */}
        <StackedSection title="11. Training & Probation" index={11}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCard label="Training Period" value={trainingAndProbation.trainingPeriod} icon={Icons.Duration} variant="blue" />
            <InfoCard label="Training Stipend" value={trainingAndProbation.trainingStipend} icon={Icons.Status} variant="green" />
            <InfoCard label="Training Salary" value={trainingAndProbation.trainingSalary} icon={Icons.Salary} variant="purple" />
            <InfoCard label="Probation Period" value={trainingAndProbation.probationPeriod} icon={Icons.Duration} variant="blue" />
            <InfoCard label="Probation Salary" value={trainingAndProbation.probationSalary} icon={Icons.Salary} variant="purple" />
            <InfoCard label="Post-Probation Salary" value={trainingAndProbation.postProbationSalary} icon={Icons.Salary} variant="green" />
            <InfoCard label="Internship Period" value={trainingAndProbation.internshipPeriod || trainingAndProbation.internshipDuration} icon={Icons.Duration} variant="orange" />
            <InfoCard label="Internship Stipend" value={trainingAndProbation.internshipStipend} icon={Icons.Status} variant="green" />
          </div>
        </StackedSection>

        {/* 12. Recruitment Process */}
        <StackedSection title="12. Recruitment Process" index={12}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <InfoCard label="Assessment" value={recruitmentProcess.assessmentTestRequirement} />
              <InfoCard label="Interview Rounds" value={recruitmentProcess.numberOfInterviewRounds} />
              <InfoCard label="Interview Mode" value={recruitmentProcess.interviewMode} />
            </div>
            <FadeText>
              <div className="p-5 rounded-2xl bg-slate-50/50 border border-slate-100">
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Selection Process Flow</span>
                <p className="text-[15px] text-slate-600 leading-relaxed whitespace-pre-line">
                  {recruitmentProcess.selectionProcess}
                </p>
              </div>
            </FadeText>
          </div>
        </StackedSection>

        {/* 13. Important Dates */}
        <StackedSection title="13. Important Dates" index={13}>
          <FadeText>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-semibold text-[13px]">S</div>
                  <div className="w-0.5 h-full bg-slate-100"></div>
                </div>
                <div className="pb-4">
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Application Start Date</span>
                  <span className="text-[15px] font-bold text-slate-800">{importantDates.applicationStartDate}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 font-semibold text-[13px]">C</div>
                  <div className="w-0.5 h-full bg-slate-100"></div>
                </div>
                <div className="pb-4">
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Application Closing Date</span>
                  <span className="text-[15px] font-bold text-rose-600">{importantDates.applicationClosingDate}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-semibold text-[13px]">J</div>
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Expected Joining Date</span>
                  <span className="text-[15px] font-bold text-slate-800">{importantDates.expectedJoiningDate}</span>
                </div>
              </div>
            </div>
          </FadeText>
        </StackedSection>

        {/* 14. Required Documents */}
        <StackedSection title="14. Required Documents" index={14}>
          <FadeText>
            <List items={requiredDocuments.requiredDocumentsList} type="check" />
          </FadeText>
        </StackedSection>

        {/* 15. Application Information */}
        <div id="apply-section">
          <StackedSection title="15. Application Information" index={15}>
            <div className="space-y-4">
              <InfoCard label="Application Fee" value={applicationInformation.applicationFee} icon={Icons.Status} />
              <InfoCard label="Submission Mode" value={applicationInformation.applicationSubmissionMode} icon={Icons.WorkMode} />
              <InfoCard label="Application Deadline" value={applicationInformation.applicationDeadline} icon={Icons.Duration} />
            </div>
          </StackedSection>
        </div>

        {/* 16. Contact Information */}
        <StackedSection title="16. Contact Information" index={16}>
          <FadeText>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    {Icons.Contact}
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Contact Department</span>
                    <span className="text-[15px] font-bold text-slate-800">{contactInformation.contactPersonDepartment}</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-200 space-y-2 text-[13px] text-slate-600 font-medium">
                  <div className="flex items-center justify-between">
                    <span>Email:</span>
                    <a href={`mailto:${contactInformation.contactEmail}`} className="font-bold text-blue-600 hover:underline">
                      {contactInformation.contactEmail}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Phone:</span>
                    <span className="font-bold text-slate-800">{contactInformation.contactPhoneNumber}</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeText>
        </StackedSection>

        {/* 17. Important Notices */}
        <StackedSection title="17. Important Notices" index={17}>
          <FadeText>
            <div className="space-y-2">
              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleNotice('equalOpportunity')}
                  className="w-full px-5 py-4 text-left flex items-center justify-between bg-transparent border-none outline-none appearance-none cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-[14px] font-bold text-slate-800">Equal Opportunity Statement</span>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${expandedNotice.equalOpportunity ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedNotice.equalOpportunity && (
                  <div className="px-5 pb-5 pt-1 text-[13px] text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed font-medium">
                    {importantNotices.equalOpportunityStatement}
                  </div>
                )}
              </div>

              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleNotice('disclaimer')}
                  className="w-full px-5 py-4 text-left flex items-center justify-between bg-transparent border-none outline-none appearance-none cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-[14px] font-bold text-slate-800">Recruitment Disclaimer</span>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${expandedNotice.disclaimer ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedNotice.disclaimer && (
                  <div className="px-5 pb-5 pt-1 text-[13px] text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed font-medium">
                    {importantNotices.recruitmentDisclaimer}
                  </div>
                )}
              </div>

              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleNotice('additionalInfo')}
                  className="w-full px-5 py-4 text-left flex items-center justify-between bg-transparent border-none outline-none appearance-none cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-[14px] font-bold text-slate-800">Special Instructions</span>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${expandedNotice.additionalInfo ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedNotice.additionalInfo && (
                  <div className="px-5 pb-5 pt-1 text-[13px] text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed font-medium">
                    {importantNotices.additionalInformationSpecialInstructions}
                  </div>
                )}
              </div>
            </div>
      </FadeText>
        </StackedSection>

        {/* Final Call to Action */}
        <div className="pt-10 pb-8 hidden lg:flex flex-col items-center justify-center text-center space-y-5 border-t border-slate-100 mt-10">
          <h3 className="text-2xl font-bold text-[#0B1F4D] tracking-tight">Ready to secure the future?</h3>
          <p className="text-slate-500 max-w-md">Take the next step in your career and join our defense operations team today.</p>
          <button
            onClick={handleApplyClick}
            className="px-12 py-4 mt-2 bg-gradient-to-r from-[#0B1F4D] via-[#173B78] to-[#0B1F4D] hover:from-[#173B78] hover:to-[#0B1F4D] text-white border border-[#D4AF37]/50 font-bold rounded-2xl shadow-xl shadow-[#0B1F4D]/20 active:scale-95 transition-all text-lg flex items-center gap-3 cursor-pointer"
          >
            <span>Apply Now</span>
            <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Sticky Apply Button for Mobile screens */}
        <div className="sticky bottom-4 left-0 right-0 lg:hidden px-4 py-3 bg-white/85 backdrop-blur-md border border-purple-100/80 rounded-2xl shadow-lg flex items-center justify-between gap-4">
          <div>
            <span className="block text-[10px] uppercase font-bold text-slate-400">Position Status</span>
            <span className="text-xs font-bold text-emerald-600">{positionInformation.applicationStatus}</span>
          </div>
          <button
            onClick={handleApplyClick}
            className="px-5 py-2.5 bg-[#0B1F4D] hover:bg-[#173B78] text-white border border-[#D4AF37]/40 text-xs font-bold rounded-xl shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Apply Now</span>
            <svg className="w-3.5 h-3.5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>

      {/* Dropdown Menu attached to Apply Now button */}
      <ApplyDropdownMenu
        target={applyTarget}
        onClose={() => setApplyTarget(null)}
        onSelectOption={handleSelectApplyOption}
      />

      {/* Modal for Already Registered Candidate Login */}
      <AnimatePresence>
        {applyModalData && (
          <AlreadyRegisteredModal
            data={applyModalData}
            onClose={() => setApplyModalData(null)}
            onNewRegistration={(job) => {
              if (propOnApply) propOnApply(job);
              else navigate('/recruitment/current-vacancy/job-vacancy/new-registration', { state: { job } });
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}


export default JobDetailPage;
