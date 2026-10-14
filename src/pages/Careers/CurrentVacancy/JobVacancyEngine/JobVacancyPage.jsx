import Cloudinary from './Cloudinary';
import ComingSoonPage from './ComingSoonPage';
const heroImageBg = '/heroImage.png';
const heroImageMobileBg = '/heroImage-mobile.jpg';
import JumpingHeading from './JumpingHeading';
import JobDetailPage from './JobDetailPage';
import CandidateMasterProfileFormPage from './New Registration Form/CandidateMasterProfileFormPage';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate } from './router-compat';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import {
  UserPlus, LogIn, CheckCircle2, X, Copy, Check, ArrowRight, Search, Shield, Sparkles,
  Briefcase, MapPin, Building2, TrendingUp, ShieldCheck, Zap,
  FileText, ArrowUpDown, ChevronDown, Bookmark, Users, UserCog, Code2, Smartphone, PenTool, Server, Award,
  Home
} from 'lucide-react';
const heroImg = Cloudinary.heroimg;
const heroBg = Cloudinary.jobVacancyBg;
import { portalConfig, jobListings, filterOptions, jobVacancyData } from './JobVacancyPageData';


// --- EmptyState.jsx ---



function EmptyState() {
  const [notified, setNotified] = useState(false);
  const [email, setEmail] = useState('');

  const handleNotify = (e) => {
    e.preventDefault();
    if (email.trim()) setNotified(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center text-center py-24 px-6 max-w-md mx-auto"
    >
      {/* Illustration */}
      <div className="relative mb-8">
        <div className="w-28 h-28 rounded-full bg-indigo-50 border-2 border-indigo-100 flex items-center justify-center">
          <svg className="w-14 h-14 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        {/* Pulsing ring */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full border-2 border-indigo-200"
        />
      </div>

      <span className="text-[11px] font-bold text-indigo-500 uppercase tracking-widest mb-3">Coming Soon</span>
      <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight mb-3">No vacancies found</h3>
      <p className="text-[14px] text-slate-500 leading-relaxed max-w-xs mb-8">
        No positions match your current filters. New openings are posted regularly — be the first to know.
      </p>

      {!notified ? (
        <form onSubmit={handleNotify} className="w-full max-w-xs flex flex-col gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full px-4 py-3 text-[14px] border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-slate-800 placeholder-slate-400"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[14px] rounded-xl transition-all shadow-md active:scale-95"
          >
            Notify Me
          </button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 px-5 py-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-700 font-semibold text-[14px]"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          You'll be notified of new openings!
        </motion.div>
      )}
    </motion.div>
  );
}

// --- FilterBar.jsx ---

const FilterField = ({ id, label, icon: Icon, value, options = [], onChange }) => (
  <div className="flex items-center gap-2.5 flex-1 min-w-[130px]">
    {/* Icon squircle */}
    <div className="w-10 h-10 rounded-xl bg-[#F3EEFF] border border-purple-100/80 text-[#6D28D9] flex items-center justify-center shrink-0 shadow-xs">
      <Icon className="w-4 h-4" />
    </div>

    {/* Label + Custom select */}
    <div className="flex-1 min-w-0">
      <label htmlFor={id} className="block text-[10px] font-black uppercase tracking-wider text-slate-400 truncate mb-1">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none w-full bg-white border border-slate-200/90 rounded-xl pl-3 pr-7 py-1.5 text-xs sm:text-[13px] font-bold text-[#0B1F4D] hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/15 focus:border-[#6D28D9] cursor-pointer shadow-xs transition truncate"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  </div>
);

function FilterBar({ filters, options, onFilterChange, totalCount, filteredCount }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-2">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(11,31,77,0.04)] p-4 sm:p-5">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 xl:gap-4 w-full">
          <FilterField
            id="filter-dept"
            label="DEPARTMENT"
            icon={Building2}
            value={filters.department}
            options={options.departments}
            onChange={(v) => onFilterChange('department', v)}
          />
          <FilterField
            id="filter-loc"
            label="LOCATION"
            icon={MapPin}
            value={filters.location}
            options={options.locations}
            onChange={(v) => onFilterChange('location', v)}
          />
          <FilterField
            id="filter-exp"
            label="EXPERIENCE"
            icon={Briefcase}
            value={filters.experience}
            options={options.experience}
            onChange={(v) => onFilterChange('experience', v)}
          />
          <FilterField
            id="filter-type"
            label="EMPLOYMENT TYPE"
            icon={FileText}
            value={filters.employmentType}
            options={options.employmentTypes}
            onChange={(v) => onFilterChange('employmentType', v)}
          />
          <FilterField
            id="filter-status"
            label="STATUS"
            icon={ShieldCheck}
            value={filters.status}
            options={options.statuses}
            onChange={(v) => onFilterChange('status', v)}
          />
          <FilterField
            id="filter-sort"
            label="SORT BY"
            icon={ArrowUpDown}
            value={filters.sort}
            options={options.sortOptions}
            onChange={(v) => onFilterChange('sort', v)}
          />
        </div>
      </div>
    </div>
  );
}

// --- JobCard.jsx ---



const statusConfig = {
  'OPEN':         { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500' },
  'CLOSING SOON': { bg: 'bg-amber-50',   text: 'text-amber-700',   border: 'border-amber-200',   dot: 'bg-amber-500'  },
  'UPCOMING':     { bg: 'bg-blue-50',    text: 'text-blue-700',    border: 'border-blue-200',    dot: 'bg-blue-400'   },
  'CLOSED':       { bg: 'bg-slate-50',   text: 'text-slate-500',   border: 'border-slate-200',   dot: 'bg-slate-400'  },
};

const arrowD      = "M14 5l7 7m0 0l-7 7m7-7H3";

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
        className="pointer-events-auto fixed bg-white/95 backdrop-blur-xl border border-purple-100 rounded-2xl shadow-2xl shadow-slate-900/15 p-2 overflow-hidden z-50"
      >
        <div className="px-3 py-2 border-b border-slate-100 mb-1">
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Select Option</p>
          <p className="text-[12px] font-extrabold text-[#0B1F4D] truncate">{job.jobTitle}</p>
          <p className="text-[10px] font-mono text-[#6D28D9] font-semibold">{job.jobCode}</p>
        </div>

        <button
          type="button"
          onClick={() => onSelectOption(job, 'new')}
          className="w-full text-left p-2.5 rounded-xl hover:bg-[#F3EEFF]/80 transition-all flex items-center gap-3 group active:scale-[0.98]"
        >
          <div className="w-8 h-8 rounded-lg bg-[#F3EEFF] text-[#6D28D9] flex items-center justify-center shrink-0 group-hover:bg-[#6D28D9] group-hover:text-white transition-colors shadow-sm">
            <UserPlus className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-bold text-slate-800 group-hover:text-[#6D28D9]">New Registration</span>
              <span className="text-[9px] font-extrabold bg-[#F3EEFF] text-[#6D28D9] px-1.5 py-0.5 rounded-full uppercase">New</span>
            </div>
            <p className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">First time applying? Register & apply</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onSelectOption(job, 'login')}
          className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50/80 transition-all flex items-center gap-3 group active:scale-[0.98]"
        >
          <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#173B78] flex items-center justify-center shrink-0 group-hover:bg-[#173B78] group-hover:text-white transition-colors shadow-sm">
            <LogIn className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-bold text-slate-800 group-hover:text-[#173B78]">Already Registered</span>
              <span className="text-[9px] font-extrabold bg-[#EFF6FF] text-[#173B78] px-1.5 py-0.5 rounded-full uppercase">Login</span>
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
        <div className="relative bg-gradient-to-br from-[#0B1F4D] via-[#173B78] to-[#0B1F4D] p-6 text-white border-b border-[#D4AF37]/30">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] font-bold text-[#F7E7A9] bg-[#D4AF37]/20 border border-[#D4AF37]/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {job.department}
            </span>
            <span className="text-[10px] font-mono text-slate-300 bg-white/10 px-2 py-0.5 rounded-full">
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
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-[13px] mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Applicant Verified
                </div>
                <div className="space-y-1.5 text-[12px] text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Registration ID:</span>
                    <span className="font-mono font-bold text-slate-900">{loginResult.regId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Post Applied:</span>
                    <span className="font-semibold text-slate-900">{loginResult.jobTitle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Application Status:</span>
                    <span className="font-bold text-indigo-600">{loginResult.status}</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[12px] text-slate-600 space-y-1">
                <p className="font-bold text-slate-800">Recruitment Cell Update:</p>
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
                  className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[12px] rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-3.5 flex items-start gap-2.5">
                <LogIn className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-[12px] text-emerald-900 leading-relaxed font-medium">
                  Enter your existing Registration ID to view application status or verify credentials for <strong className="font-bold">{job.jobTitle}</strong>.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Registration / Application ID <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={loginForm.regId}
                    onChange={(e) => setLoginForm({ ...loginForm, regId: e.target.value })}
                    placeholder="e.g. IBCS-REG-2026-10293"
                    className="w-full px-3.5 py-2.5 text-[13px] font-mono font-bold text-slate-800 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Registered Mobile Number or Date of Birth
                  </label>
                  <input
                    type="text"
                    value={loginForm.dobOrPhone}
                    onChange={(e) => setLoginForm({ ...loginForm, dobOrPhone: e.target.value })}
                    placeholder="DD/MM/YYYY or 10-digit mobile number"
                    className="w-full px-3.5 py-2.5 text-[13px] font-semibold text-slate-800 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-slate-400"
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
                  className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[13px] rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Sign In & View Status
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-2 border-t border-slate-100 text-center">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onNewRegistration) onNewRegistration(job);
                  }}
                  className="text-[12px] font-bold text-indigo-600 hover:text-indigo-700 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>First time applying? Open Candidate Master Profile Form</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}

// ─── JOB CARD THEME HELPER ───────────────────────────────────────────────────
const getJobCardTheme = (job, index = 0) => {
  const title = (job?.jobTitle || '').toLowerCase();

  // 1. HR Executive: Blue
  if (title.includes('hr executive') || index === 0) {
    return {
      stripe: 'bg-blue-600',
      avatarBg: 'bg-blue-50',
      avatarColor: 'text-blue-600',
      Icon: Users,
    };
  }
  // 2. HR Admin: Purple
  if (title.includes('hr admin') || index === 1) {
    return {
      stripe: 'bg-purple-600',
      avatarBg: 'bg-purple-50',
      avatarColor: 'text-purple-600',
      Icon: UserCog,
    };
  }
  // 3. HR Assistant Manager: Sky / Cyan
  if (title.includes('hr assistant manager') || index === 2) {
    return {
      stripe: 'bg-sky-500',
      avatarBg: 'bg-sky-50',
      avatarColor: 'text-sky-600',
      Icon: Users,
    };
  }
  // 4. Junior Python Full Stack Developer: Amber
  if (title.includes('python') || title.includes('full stack') || index === 3) {
    return {
      stripe: 'bg-amber-500',
      avatarBg: 'bg-amber-50',
      avatarColor: 'text-amber-600',
      Icon: Code2,
    };
  }
  // 5. QA Engineer: Pink / Rose
  if (title.includes('qa') || title.includes('test') || index === 4) {
    return {
      stripe: 'bg-pink-500',
      avatarBg: 'bg-pink-50',
      avatarColor: 'text-pink-600',
      Icon: ShieldCheck,
    };
  }
  // 6. Mobile Application Developer: Emerald / Green
  if (title.includes('mobile') || title.includes('developer') || index === 5) {
    return {
      stripe: 'bg-emerald-500',
      avatarBg: 'bg-emerald-50',
      avatarColor: 'text-emerald-600',
      Icon: Smartphone,
    };
  }
  // 7. Graphic Designer: Violet
  if (title.includes('graphic') || title.includes('designer') || index === 6) {
    return {
      stripe: 'bg-violet-600',
      avatarBg: 'bg-violet-50',
      avatarColor: 'text-violet-600',
      Icon: PenTool,
    };
  }
  // 8. DevOps: Cyan
  if (title.includes('devops') || index === 7) {
    return {
      stripe: 'bg-cyan-500',
      avatarBg: 'bg-cyan-50',
      avatarColor: 'text-cyan-600',
      Icon: Server,
    };
  }
  // 9. Cyber Security: Red / Rose
  if (title.includes('security') || index === 8) {
    return {
      stripe: 'bg-red-500',
      avatarBg: 'bg-red-50',
      avatarColor: 'text-red-600',
      Icon: Shield,
    };
  }
  // 10. Cyber Crime Investigation: Indigo
  if (title.includes('investigation') || index === 9) {
    return {
      stripe: 'bg-indigo-600',
      avatarBg: 'bg-indigo-50',
      avatarColor: 'text-indigo-600',
      Icon: ShieldCheck,
    };
  }
  // 11. AI / ML: Violet
  if (title.includes('ai') || title.includes('ml') || index === 10) {
    return {
      stripe: 'bg-purple-600',
      avatarBg: 'bg-purple-50',
      avatarColor: 'text-purple-600',
      Icon: Sparkles,
    };
  }

  const fallbacks = [
    { stripe: 'bg-blue-600', avatarBg: 'bg-blue-50', avatarColor: 'text-blue-600', Icon: Briefcase },
    { stripe: 'bg-purple-600', avatarBg: 'bg-purple-50', avatarColor: 'text-purple-600', Icon: Award },
    { stripe: 'bg-emerald-600', avatarBg: 'bg-emerald-50', avatarColor: 'text-emerald-600', Icon: CheckCircle2 },
  ];
  return fallbacks[index % fallbacks.length];
};

const getPostedTime = (index = 0) => {
  const times = [
    'Posted 2 days ago',
    'Posted 3 days ago',
    'Posted 5 days ago',
    'Posted 1 week ago',
    'Posted 1 week ago',
    'Posted 1 week ago',
    'Posted 1 week ago',
    'Posted 2 weeks ago',
  ];
  return times[index % times.length];
};

// ─── GRID CARD ───────────────────────────────────────────────────────────────
function GridCard({ job, index = 0, onViewDetails, saved, onSave, onApplyClick }) {
  const isApplyDisabled = job.status === 'CLOSED' || job.status === 'UPCOMING';
  const theme = getJobCardTheme(job, index);
  const postedTime = getPostedTime(index);
  const formattedLocation = job.location === 'Multiple Locations' ? 'Bhubaneswar, Odisha' : (job.location || 'Bhubaneswar, Odisha');
  const formattedEmployment = job.employmentType === 'Permanent' ? 'Full Time' : (job.employmentType || 'Full Time');
  const formattedExperience = job.experience ? job.experience.replace('–', ' - ').replace('Year', 'Years').replace('Years s', 'Years') : '0 - 2 Years';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.03 }}
      whileHover={{ y: -3, boxShadow: '0 12px 36px -8px rgba(11,31,77,0.12)' }}
      className="group relative bg-white border border-slate-200/90 hover:border-purple-200 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
    >
      {/* Top accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${theme.stripe}`} />

      <div className="flex items-start justify-between gap-3 mb-4">
        {/* Avatar Squircle */}
        <div className={`w-12 h-12 rounded-2xl ${theme.avatarBg} ${theme.avatarColor} flex items-center justify-center shrink-0`}>
          <theme.Icon className="w-6 h-6" />
        </div>
        {/* Status badge */}
        <div className="flex items-center gap-1.5 text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>OPEN</span>
        </div>
      </div>

      <div className="space-y-1 mb-4 flex-1">
        <span className="text-[10px] font-extrabold text-[#6D28D9] bg-[#F3EEFF] border border-purple-100/80 px-2 py-0.5 rounded-md uppercase tracking-wider inline-block">
          {job.department}
        </span>
        <h3 className="text-base font-black text-[#0B1F4D] tracking-tight leading-snug group-hover:text-[#6D28D9] transition-colors line-clamp-2">
          {job.jobTitle}
        </h3>
        <p className="text-xs font-mono font-medium text-slate-400">
          {job.jobCode}
        </p>
      </div>

      {/* Meta tags */}
      <div className="grid grid-cols-2 gap-2.5 py-3 border-t border-slate-100 mb-4 text-xs">
        <div className="flex items-center gap-1.5 text-slate-700 font-bold truncate">
          <MapPin className="w-3.5 h-3.5 text-[#173B78] shrink-0" />
          <span className="truncate">{formattedLocation}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-700 font-bold truncate">
          <Briefcase className="w-3.5 h-3.5 text-[#173B78] shrink-0" />
          <span className="truncate">{formattedExperience}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-700 font-bold truncate">
          <FileText className="w-3.5 h-3.5 text-[#173B78] shrink-0" />
          <span className="truncate">{formattedEmployment}</span>
        </div>
        <div className="text-[11px] text-slate-400 font-medium truncate flex items-center">
          {postedTime}
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
        <button
          onClick={() => onViewDetails(job)}
          className="flex-1 py-2 border border-[#173B78]/25 text-[#173B78] hover:bg-[#F3EEFF] hover:border-[#6D28D9]/40 hover:text-[#6D28D9] text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer active:scale-95"
        >
          View Details
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
        <button
          disabled={isApplyDisabled}
          onClick={(e) => onApplyClick(job, e)}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer active:scale-95 ${
            isApplyDisabled
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-[#0B1F4D] hover:bg-[#173B78] text-white border-b-2 border-[#D4AF37] shadow-md shadow-slate-900/10'
          }`}
        >
          <span>Apply Now</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
        </button>
        <button
          onClick={onSave}
          title={saved ? 'Saved' : 'Save'}
          className={`p-2 rounded-xl border transition-all cursor-pointer ${
            saved
              ? 'bg-[#F3EEFF] border-purple-200 text-[#6D28D9]'
              : 'border-slate-200 text-slate-400 hover:text-[#6D28D9] hover:border-purple-200'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5" fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>
    </motion.div>
  );
}

// ─── LIST CARD ────────────────────────────────────────────────────────────────
function ListCard({ job, index = 0, onViewDetails, saved, onSave, onApplyClick }) {
  const isApplyDisabled = job.status === 'CLOSED' || job.status === 'UPCOMING';
  const theme = getJobCardTheme(job, index);
  const postedTime = getPostedTime(index);
  const formattedLocation = job.location === 'Multiple Locations' ? 'Bhubaneswar, Odisha' : (job.location || 'Bhubaneswar, Odisha');
  const formattedEmployment = job.employmentType === 'Permanent' ? 'Full Time' : (job.employmentType || 'Full Time');
  const formattedExperience = job.experience ? job.experience.replace('–', ' - ').replace('Year', 'Years').replace('Years s', 'Years') : '0 - 2 Years';

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.03 }}
      className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-purple-200 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col xl:flex-row xl:items-center justify-between p-4 sm:p-4.5 gap-4"
    >
      {/* Colored Left Border Accent Stripe */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 ${theme.stripe}`} />

      {/* Left Section: Avatar Squircle + Department Pill + Job Title + Job Code */}
      <div className="flex items-center gap-3.5 sm:gap-4 pl-1 sm:pl-2 min-w-0 xl:w-[320px] 2xl:w-[340px] shrink-0">
        {/* Avatar Squircle */}
        <div className={`w-12 h-12 sm:w-13 sm:h-13 rounded-2xl ${theme.avatarBg} ${theme.avatarColor} flex items-center justify-center shrink-0 shadow-xs`}>
          <theme.Icon className="w-6 h-6" />
        </div>

        {/* Title & Department */}
        <div className="min-w-0 flex-1">
          <span className="text-[10px] sm:text-[11px] font-extrabold text-[#6D28D9] bg-[#F3EEFF] border border-purple-100/80 px-2.5 py-0.5 rounded-md uppercase tracking-wider inline-block mb-1">
            {job.department}
          </span>
          <h3 className="text-sm sm:text-base font-black text-[#0B1F4D] tracking-tight leading-snug group-hover:text-[#6D28D9] transition-colors truncate">
            {job.jobTitle}
          </h3>
          <p className="text-xs font-medium text-slate-400 mt-0.5 truncate">
            {job.jobCode}
          </p>
        </div>
      </div>

      {/* Middle Section: 4 Metadata Columns (Location, Experience, Type, Status & Date) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 xl:gap-6 flex-1 min-w-0 py-2 xl:py-0 border-t border-b xl:border-none border-slate-100">
        {/* Column 1: Location */}
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-[#173B78] shrink-0 mt-0.5" />
          <div className="min-w-0">
            <p className="text-xs sm:text-[13px] font-extrabold text-slate-800 leading-tight truncate">
              {formattedLocation}
            </p>
            <p className="text-[10px] sm:text-[11px] font-medium text-slate-400 mt-0.5">
              Location
            </p>
          </div>
        </div>

        {/* Column 2: Experience */}
        <div className="flex items-start gap-2">
          <Briefcase className="w-4 h-4 text-[#173B78] shrink-0 mt-0.5" />
          <div className="min-w-0">
            <p className="text-xs sm:text-[13px] font-extrabold text-slate-800 leading-tight truncate">
              {formattedExperience}
            </p>
            <p className="text-[10px] sm:text-[11px] font-medium text-slate-400 mt-0.5">
              Experience
            </p>
          </div>
        </div>

        {/* Column 3: Employment Type */}
        <div className="flex items-start gap-2">
          <FileText className="w-4 h-4 text-[#173B78] shrink-0 mt-0.5" />
          <div className="min-w-0">
            <p className="text-xs sm:text-[13px] font-extrabold text-slate-800 leading-tight truncate">
              {formattedEmployment}
            </p>
            <p className="text-[10px] sm:text-[11px] font-medium text-slate-400 mt-0.5">
              Employment Type
            </p>
          </div>
        </div>

        {/* Column 4: Status & Posted Date */}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 text-xs font-black text-emerald-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span>OPEN</span>
          </div>
          <p className="text-[10px] sm:text-[11px] font-medium text-slate-400 mt-0.5 truncate">
            {postedTime}
          </p>
        </div>
      </div>

      {/* Right Section: Buttons (View Details, Apply Now, Bookmark) */}
      <div className="flex items-center gap-2.5 shrink-0 self-end xl:self-center">
        <button
          type="button"
          onClick={() => onViewDetails(job)}
          className="border border-[#173B78]/25 text-[#173B78] hover:bg-[#F3EEFF] hover:border-[#6D28D9]/40 hover:text-[#6D28D9] font-bold px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-[13px] flex items-center gap-1.5 transition whitespace-nowrap cursor-pointer active:scale-95"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          disabled={isApplyDisabled}
          onClick={(e) => onApplyClick(job, e)}
          className={`font-bold px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-[13px] flex items-center gap-1.5 transition whitespace-nowrap cursor-pointer active:scale-95 shadow-md ${
            isApplyDisabled
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              : 'bg-[#0B1F4D] hover:bg-[#173B78] text-white border-b-2 border-[#D4AF37] shadow-slate-900/10'
          }`}
        >
          <span>Apply Now</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
        </button>

        <button
          type="button"
          onClick={onSave}
          title={saved ? 'Saved' : 'Save'}
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center transition shrink-0 cursor-pointer ${
            saved
              ? 'bg-[#F3EEFF] border-purple-200 text-[#6D28D9]'
              : 'border-slate-200 text-slate-400 hover:text-[#6D28D9] hover:border-purple-200'
          }`}
        >
          <Bookmark className="w-4 h-4" fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>
    </motion.div>
  );
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────
function JobCard({ job, onViewDetails, viewMode = 'grid', index = 0, onApplyClick }) {
  const [saved, setSaved] = useState(false);

  const props = { job, index, onViewDetails, saved, onSave: () => setSaved((s) => !s), onApplyClick };

  return viewMode === 'list'
    ? <ListCard {...props} />
    : <GridCard {...props} />;
}

// --- JobList.jsx ---




function JobList({ jobs, onViewDetails, viewMode = 'grid', onApplyClick }) {
  if (jobs.length === 0) return <EmptyState />;

  return viewMode === 'list' ? (
    <div className="flex flex-col gap-2.5">
      {jobs.map((job, index) => (
        <JobCard key={job.id} job={job} index={index} viewMode="list" onViewDetails={onViewDetails} onApplyClick={onApplyClick} />
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {jobs.map((job, index) => (
        <JobCard key={job.id} job={job} index={index} viewMode="grid" onViewDetails={onViewDetails} onApplyClick={onApplyClick} />
      ))}
    </div>
  );
}

// --- PortalBackground.jsx ---



// SVG icon paths — subset of PageAmbientBackground icons, at 40% intensity
const iconPaths = [
  // Briefcase
  <path key="b" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  // Resume
  <path key="r" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  // Calendar
  <path key="c" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
  // Mail
  <path key="m" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  // Search
  <path key="s" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
  // User
  <path key="u" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
];

// Seeded pseudo-random to avoid re-layout on re-renders
function seededRand(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function PortalBackground() {
  const elements = useMemo(() =>
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      icon: iconPaths[i % iconPaths.length],
      top: `${seededRand(i * 3) * 92}%`,
      left: `${seededRand(i * 7) * 92}%`,
      duration: 20 + seededRand(i * 11) * 12,
      delay: seededRand(i * 13) * 8,
      opacity: 0.012 + seededRand(i * 17) * 0.02, // 40% of full background (0.03–0.08)
      size: 18 + seededRand(i * 5) * 14,
    })), []);

  const particles = useMemo(() =>
    Array.from({ length: 16 }, (_, i) => ({
      id: `pp-${i}`,
      top: `${seededRand(i * 19) * 100}%`,
      left: `${seededRand(i * 23) * 100}%`,
      duration: 18 + seededRand(i * 29) * 10,
      delay: seededRand(i * 31) * 6,
      opacity: 0.008 + seededRand(i * 37) * 0.016, // 40% of full
    })), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-slate-700 flex items-center justify-center will-change-transform"
          style={{ top: el.top, left: el.left, width: el.size, height: el.size, opacity: el.opacity }}
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: el.duration, repeat: Infinity, ease: 'easeInOut', delay: el.delay }}
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
            {el.icon}
          </svg>
        </motion.div>
      ))}

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-slate-400 rounded-full will-change-transform"
          style={{ top: p.top, left: p.left, width: '2px', height: '2px', opacity: p.opacity }}
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}
    </div>
  );
}

// --- PortalHero.jsx ---




function PortalHero({ title, pageTitle, pageSubtitle, searchQuery, onSearchChange, onBack, onHome }) {
  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.back();
    }
  };

  const handleHomeClick = () => {
    if (onHome) {
      onHome();
    } else {
      window.location.hash = '#home';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="portal-hero-banner relative w-full overflow-hidden border-b border-indigo-100/70"
    >
      <style>{`
        .portal-hero-banner {
          background-image: url('/heroImage-mobile.jpg');
          background-size: cover;
          background-position: center bottom;
          background-repeat: no-repeat;
        }
        @media (min-width: 640px) {
          .portal-hero-banner {
            background-image: url('/heroImage.png');
            background-position: center;
          }
        }
      `}</style>
      {/* Soft overlay for contrast and clarity */}
      <div className="absolute inset-0 bg-white/40" />

      {/* Floating Top Header Navigation Bar (Site-wide Back & Home buttons) */}
      <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-6 md:left-8 z-30 flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={handleBackClick}
          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/50 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={handleHomeClick}
          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-[#040A1A] transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95"
        >
          <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#040A1A]" />
          <span>Home</span>
        </button>
      </div>

      {/* Decorative Cyber Dot Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.12) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Radiant Ambient Glow Highlights */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[680px] h-64 bg-gradient-to-r from-indigo-500/10 via-blue-500/15 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 -left-16 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 -right-16 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hairline subtle accent glow top */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 pt-16 pb-20 sm:pt-12 sm:pb-10 flex flex-col items-center text-center">

        {/* Top Organization & Live Recruitment Badge */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-white/95 backdrop-blur-md border border-purple-100/90 shadow-[0_2px_8px_rgba(109,40,217,0.06)] mb-3 sm:mb-4 max-w-full"
        >
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[9px] sm:text-[10px] md:text-[10.5px] font-bold uppercase tracking-wider text-[#0B1F4D] whitespace-nowrap">
              <span className="hidden sm:inline">IB Cyber Security Private Limited</span>
              <span className="sm:hidden">IB Cyber Security Pvt Ltd</span>
            </span>
          </div>

          <span className="h-2.5 sm:h-3 w-[1px] bg-slate-200 shrink-0" />

          <div className="flex items-center gap-1 text-[9px] sm:text-[10px] md:text-[10.5px] font-semibold text-[#6D28D9] shrink-0 whitespace-nowrap">
            <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#6D28D9] shrink-0" />
            <span className="hidden sm:inline">Official Recruitment 2026</span>
            <span className="sm:hidden">Recruitment 2026</span>
          </div>
        </motion.div>

        {/* Main Headline with Advanced Letter-by-Letter Jumping Animation */}
        <JumpingHeading title={title} />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: 'easeOut' }}
          className="mt-2.5 text-[15px] sm:text-[16px] text-slate-600 max-w-2xl leading-relaxed font-normal"
        >
          {pageSubtitle || 'Explore career opportunities at IB Cyber Security Private Limited. Join us in building a safer digital India.'}
        </motion.p>

        {/* Redesigned Command-Style Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
          className="w-full max-w-2xl mt-5"
        >
          <div className="relative group p-1.5 sm:p-2 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-[0_10px_30px_-6px_rgba(11,31,77,0.08)] hover:shadow-[0_16px_36px_-8px_rgba(109,40,217,0.12)] focus-within:border-purple-300 focus-within:ring-4 focus-within:ring-purple-500/10 transition-all duration-300">
            <div className="flex items-center gap-2">
              {/* Search Icon */}
              <div className="pl-2 sm:pl-3 flex items-center justify-center text-[#6D28D9] group-focus-within:text-[#0B1F4D] transition-colors">
                <Search className="w-5 h-5" />
              </div>

              {/* Input Field */}
              <input
                id="portal-search"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search by title, department, skills, or location…"
                className="w-full py-2.5 sm:py-3 bg-transparent text-[14px] sm:text-[15px] text-[#0B1F4D] placeholder-slate-400 focus:outline-none font-medium"
              />

              {/* Clear button if search query exists */}
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors mr-1 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              {/* Search Action Button */}
              <button
                type="button"
                onClick={() => {
                  const input = document.getElementById('portal-search');
                  if (input) input.focus();
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0B1F4D] via-[#173B78] to-[#0B1F4D] hover:from-[#173B78] hover:to-[#0B1F4D] text-white border border-[#D4AF37]/40 text-xs font-semibold shadow-sm hover:shadow-purple-500/25 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Search</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

// --- JobPortal.jsx ---








function applyFilters(jobs, filters) {
  let result = [...jobs];

  const q = (filters.search || '').toLowerCase().trim();
  if (q) {
    result = result.filter(
      (j) =>
        j.jobTitle.toLowerCase().includes(q) ||
        j.department.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q) ||
        (j.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  }

  if (filters.department !== 'All') {
    result = result.filter(
      (j) =>
        j.department.toLowerCase() === filters.department.toLowerCase() ||
        (filters.department === 'Human Resources' && j.department === 'HR Department') ||
        (filters.department === 'HR Department' && j.department === 'Human Resources')
    );
  }
  if (filters.location !== 'All') {
    result = result.filter((j) => j.location.toLowerCase() === filters.location.toLowerCase());
  }
  if (filters.experience !== 'All') {
    const filterExpNorm = filters.experience.toLowerCase().replace(/[^a-z0-9]/g, '');
    result = result.filter(
      (j) => (j.positionLevel || '').toLowerCase().replace(/[^a-z0-9]/g, '') === filterExpNorm
    );
  }
  if (filters.employmentType !== 'All') {
    result = result.filter(
      (j) => (j.employmentType || '').toLowerCase() === filters.employmentType.toLowerCase()
    );
  }
  if (filters.status !== 'All') {
    result = result.filter(
      (j) => (j.status || '').toUpperCase() === filters.status.toUpperCase()
    );
  }

  switch (filters.sort) {
    case 'Closing Soon':
      result = result.sort((a, b) => new Date(a.applicationLastDate) - new Date(b.applicationLastDate));
      break;
    case 'A–Z':
      result = result.sort((a, b) => a.jobTitle.localeCompare(b.jobTitle));
      break;
    default:
      break;
  }
  return result;
}

// View-mode toggle button
function ViewToggle({ mode, active, onClick, title, children }) {
  return (
    <button
      onClick={() => onClick(mode)}
      title={title}
      className={`p-2 rounded-lg border transition-all ${
        active
          ? 'bg-indigo-600 border-indigo-600 text-white'
          : 'bg-white border-slate-200 text-slate-400 hover:border-indigo-300 hover:text-indigo-500'
      }`}
    >
      {children}
    </button>
  );
}

function JobPortal({ title = 'Job Vacancy', onNavigate, onBack, onHome }) {
  const navigate = useNavigate();

  const [activeSubView, setActiveSubView] = useState({ type: 'list', job: null });
  const [heroSearch, setHeroSearch]  = useState('');
  const [viewMode, setViewMode]      = useState('list'); // 'list' | 'grid'
  const [filters, setFilters] = useState({
    search: '',
    department: 'All',
    location: 'All',
    experience: 'All',
    employmentType: 'All',
    status: 'All',
    sort: 'Latest',
  });

  const handleHeroSearch = (val) => {
    setHeroSearch(val);
    setFilters((f) => ({ ...f, search: val }));
  };

  const handleFilterChange = (key, value) => {
    setFilters((f) => ({ ...f, [key]: value }));
    if (key === 'search') setHeroSearch(value);
  };

  const computedFilterOptions = useMemo(() => {
    const jobDepartments = Array.from(new Set(jobListings.map((j) => j.department).filter(Boolean)));
    const departments = [
      'All',
      ...filterOptions.departments.filter((d) => d !== 'All' && jobDepartments.includes(d)),
      ...jobDepartments.filter((d) => !filterOptions.departments.includes(d)),
    ];

    const jobLocations = Array.from(new Set(jobListings.map((j) => j.location).filter(Boolean)));
    const locations = [
      'All',
      ...filterOptions.locations.filter((l) => l !== 'All' && jobLocations.includes(l)),
      ...jobLocations.filter((l) => !filterOptions.locations.includes(l)),
    ];

    return {
      ...filterOptions,
      departments: departments.length > 1 ? departments : filterOptions.departments,
      locations: locations.length > 1 ? locations : filterOptions.locations,
    };
  }, []);

  const filteredJobs = useMemo(() => applyFilters(jobListings, filters), [filters]);

  const [applyTarget, setApplyTarget] = useState(null);
  const [applyModalData, setApplyModalData] = useState(null);

  const handleApplyClick = (job, e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    setApplyTarget((prev) => (prev?.job?.id === job.id ? null : { job, rect }));
  };

  const handleSelectApplyOption = (job, option) => {
    setApplyTarget(null);
    if (option === 'new') {
      setActiveSubView({ type: 'register', job, openId: Date.now() });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setApplyModalData({ job });
    }
  };

  const handleViewDetails = (job) => {
    setActiveSubView({ type: 'detail', job });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (activeSubView.type === 'detail') {
    return (
      <JobDetailPage
        job={activeSubView.job}
        onBack={() => {
          setActiveSubView({ type: 'list', job: null });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onApply={(job) => {
          setActiveSubView({ type: 'register', job, openId: Date.now() });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onHome={onHome}
      />
    );
  }

  if (activeSubView.type === 'register') {
    return (
      <CandidateMasterProfileFormPage
        key={`candidate-master-profile-${activeSubView.job?.id || 'new'}-${activeSubView.openId || 0}`}
        job={activeSubView.job}
        onBack={() => {
          setActiveSubView({ type: 'list', job: null });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onHome={onHome}
      />
    );
  }

  return (
    <div className="relative min-h-screen w-full">
      <PortalBackground />

      <div className="relative z-10">
        {/* ── SECTION 1: Small Hero ── */}
        <PortalHero
          title={title}
          pageTitle={title ? `${title} Portal` : portalConfig.pageTitle}
          pageSubtitle={portalConfig.pageSubtitle}
          searchQuery={heroSearch}
          onSearchChange={handleHeroSearch}
          onBack={onBack}
          onHome={onHome}
        />

        {/* ── SECTION 2: Sticky Filter Bar ── */}
        <FilterBar
          filters={filters}
          options={computedFilterOptions}
          onFilterChange={handleFilterChange}
          totalCount={jobListings.length}
          filteredCount={filteredJobs.length}
        />

        {/* ── SECTION 3: Job Listing ── */}
        <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8">

          {/* Section header with view toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            {/* Left: Navy Accent + Title & Subtitle */}
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 sm:h-9 bg-[#0B1F4D] rounded-full shrink-0" />
              <div>
                <h2 className="text-2xl sm:text-[26px] font-black text-[#0B1F4D] tracking-tight leading-none">
                  Open Positions
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-1">
                  {filteredJobs.length} {filteredJobs.length === 1 ? 'vacancy' : 'vacancies'} available
                </p>
              </div>
            </div>

            {/* Right: Accepting Applications + View Toggles + Results */}
            <div className="flex items-center gap-3.5 sm:gap-4 shrink-0 flex-wrap sm:flex-nowrap">
              {/* Active badge */}
              {filteredJobs.length > 0 && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-600 font-bold text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Accepting Applications
                </div>
              )}

              {/* View toggle */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl border border-slate-200/70">
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  title="List view"
                  className={`p-2 rounded-lg transition cursor-pointer ${
                    viewMode === 'list'
                      ? 'bg-[#0B1F4D] text-[#D4AF37] shadow-sm'
                      : 'text-slate-400 hover:text-[#0B1F4D] bg-transparent'
                  }`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <line x1="8" y1="6" x2="21" y2="6" strokeLinecap="round" />
                    <line x1="8" y1="12" x2="21" y2="12" strokeLinecap="round" />
                    <line x1="8" y1="18" x2="21" y2="18" strokeLinecap="round" />
                    <circle cx="4" cy="6" r="1.5" fill="currentColor" />
                    <circle cx="4" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="4" cy="18" r="1.5" fill="currentColor" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  title="Grid view"
                  className={`p-2 rounded-lg transition cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-[#0B1F4D] text-[#D4AF37] shadow-sm'
                      : 'text-slate-400 hover:text-[#0B1F4D] bg-transparent'
                  }`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </button>
              </div>

              {/* Results counter */}
              <div className="flex flex-col text-right pl-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 leading-tight">
                  RESULTS
                </span>
                <span className="text-sm font-black text-[#0B1F4D] leading-tight">
                  {filteredJobs.length} of {jobListings.length}
                </span>
              </div>
            </div>
          </div>

          <JobList
            jobs={filteredJobs}
            onViewDetails={handleViewDetails}
            onApplyClick={handleApplyClick}
            viewMode={viewMode}
          />
        </main>

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
                setApplyModalData(null);
                setActiveSubView({ type: 'register', job, openId: Date.now() });
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}


export default JobPortal;
