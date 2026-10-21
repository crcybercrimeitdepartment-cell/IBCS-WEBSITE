import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, X } from "lucide-react";
import { 
  cardData as cardsData, 
  digitalExperiencePageData 
} from "./DigitalExperienceDesignPageData";

/* ─── ICONS & ILLUSTRATIONS ──────────────────────────────────────────────── */

const PhishingIcon = () => (
 <div className="relative w-full h-full flex items-center justify-center">
 <svg className="w-7 h-7 md:w-8 md:h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
 <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
 <rect x="3" y="5" width="18" height="14" rx="2" />
 </svg>
 <svg className="absolute -top-1 md:-top-2 left-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
 <path d="M12 2v10" />
 <path d="M12 12c-2 0-3.5-1.5-3.5-3.5" />
 <path d="M8.5 8.5l2 2" />
 </svg>
 <div className="absolute top-[8px] right-[8px] md:top-[12px] md:right-[12px] w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-[1.5px] border-white flex items-center justify-center">
 <span className="text-white text-[6px] md:text-[8px] font-bold">!</span>
 </div>
 </div>
);

const PhishingIllustration = () => (
 <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
 <div className="absolute inset-0 overflow-hidden md:rounded-r-[2rem]">
 <svg className="absolute right-0 top-0 h-full w-full object-cover opacity-80" viewBox="0 0 400 400" preserveAspectRatio="none">
 <path d="M-50,400 C150,400 150,150 250,100 C320,60 400,50 400,0 L400,400 Z" fill="url(#bg-wave)" />
 <defs>
 <linearGradient id="bg-wave" x1="0" y1="0" x2="1" y2="1">
 <stop offset="0%" stopColor="#EFF6FF" stopOpacity="0.8" />
 <stop offset="100%" stopColor="#DBEAFE" stopOpacity="1" />
 </linearGradient>
 </defs>
 </svg>
 <div className="absolute top-6 right-6 md:top-12 md:right-12 w-20 h-20 md:w-32 md:h-32 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #6366f1 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
 </div>

 <div className="relative w-[280px] h-[200px] md:w-[380px] md:h-[300px] z-10 flex items-center justify-center mt-4 md:mt-0">
 <svg className="absolute left-[-10px] md:left-[-20px] bottom-[30px] md:bottom-[40px] w-20 h-20 md:w-32 md:h-32 opacity-70" viewBox="0 0 100 100">
 <path d="M50,90 C10,90 0,50 0,20 C40,20 50,50 50,90 Z" fill="#BFDBFE" />
 <path d="M50,90 C90,90 100,50 100,20 C60,20 50,50 50,90 Z" fill="#DBEAFE" />
 </svg>

 <div className="absolute bottom-[20px] w-[240px] md:w-[320px] h-[150px] md:h-[200px]">
 <div className="absolute inset-0 bg-[#E2E8F0] rounded-xl shadow-2xl flex items-center justify-center p-1.5 md:p-2 border border-white/50">
 <div className="w-full h-full bg-[#1E3A8A] rounded-lg relative overflow-hidden flex flex-col">
 <div className="w-full h-4 md:h-5 bg-[#3B82F6] flex items-center px-2 gap-1 md:gap-1.5">
 <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
 <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
 <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
 </div>
 <div className="flex-1 bg-[#2563EB] relative flex items-center justify-center p-3 md:p-4">
 <div className="w-28 md:w-40 h-28 md:h-40 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-3 md:p-4 relative">
 <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-full mb-2 md:mb-3 flex items-center justify-center">
 <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
 </div>
 <div className="w-full h-2.5 md:h-4 rounded border border-slate-200 mb-2 flex items-center px-1">
 <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-0.5"></div>
 <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-0.5"></div>
 </div>
 <div className="w-full h-2.5 md:h-4 rounded border border-slate-200 mb-2 md:mb-3 flex items-center px-1">
 <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-0.5"></div>
 <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-0.5"></div>
 <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-0.5"></div>
 </div>
 <div className="w-16 md:w-20 h-3 md:h-5 bg-red-500 rounded-full"></div>
 </div>
 </div>
 </div>
 </div>
 <div className="absolute -bottom-[8px] md:-bottom-[10px] left-[-10px] md:left-[-20px] right-[-10px] md:right-[-20px] h-[10px] md:h-[14px] bg-[#CBD5E1] rounded-b-xl rounded-t-sm shadow-md flex justify-center">
 <div className="w-12 md:w-20 h-1 md:h-1.5 bg-[#94A3B8] rounded-b-md mt-0.5"></div>
 </div>
 </div>

 <div className="absolute top-[-10px] md:top-[-20px] right-[80px] md:right-[110px] z-20 flex flex-col items-center animate-swing">
 <div className="w-[1.5px] md:w-0.5 h-20 md:h-24 bg-slate-700"></div>
 <svg className="w-8 h-10 md:w-12 md:h-16 text-slate-800 -mt-1 drop-shadow-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <path d="M12 2v6" />
 <path d="M12 8c-3.3 0-6 2.7-6 6v4" />
 <path d="M6 18c0 1.7 1.3 3 3 3s3-1.3 3-3v-2" />
 <circle cx="12" cy="8" r="2" />
 <path d="M9 15l3 3-3 3" />
 </svg>
 </div>

 <div className="absolute left-[-10px] md:left-[10px] bottom-[30px] md:bottom-[40px] z-30 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-blue-50 animate-float">
 <svg className="w-5 h-5 md:w-7 md:h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
 <path d="M12 17a2 2 0 100-4 2 2 0 000 4z" />
 <path fillRule="evenodd" d="M18 10V7a6 6 0 10-12 0v3a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2zm-10-3a4 4 0 118 0v3H8V7z" clipRule="evenodd" />
 </svg>
 </div>

 <div className="absolute right-[-10px] md:right-[0px] bottom-[15px] md:bottom-[25px] z-30 animate-float-delayed">
 <svg className="w-16 h-20 md:w-24 md:h-28 drop-shadow-2xl" viewBox="0 0 100 120">
 <defs>
 <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
 <stop offset="0%" stopColor="#3B82F6" />
 <stop offset="100%" stopColor="#1E40AF" />
 </linearGradient>
 <linearGradient id="shieldHighlight" x1="0" y1="0" x2="0" y2="1">
 <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
 <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
 </linearGradient>
 </defs>
 <path d="M50 5 L90 20 L90 60 C90 90 50 115 50 115 C50 115 10 90 10 60 L10 20 Z" fill="url(#shieldGrad)" stroke="#DBEAFE" strokeWidth="2" />
 <path d="M50 5 L50 115 C50 115 90 90 90 60 L90 20 Z" fill="url(#shieldHighlight)" />
 <rect x="46" y="35" width="8" height="25" rx="4" fill="white" />
 <circle cx="50" cy="75" r="5" fill="white" />
 </svg>
 </div>
 </div>
 </div>
);

const SocialEngIcon = () => (
 <div className="relative w-full h-full flex items-center justify-center">
 <svg className="w-7 h-7 md:w-9 md:h-9 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
 <path d="M12 2C8.686 2 6 4.686 6 8v1.5C6 9.776 5.776 10 5.5 10S5 9.776 5 9.5V8c0-3.866 3.134-7 7-7s7 3.134 7 7v1.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5V8c0-3.314-2.686-6-6-6z" />
 <path d="M12 4C9.5 4 7 6.5 7 8v2h10V8C17 6.5 14.5 4 12 4z" />
 <rect x="5" y="9" width="14" height="2" rx="1" />
 <path d="M8.5 13a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm7 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill="white" stroke="currentColor" strokeWidth="1.5" />
 <path d="M11 15.5h2" stroke="currentColor" strokeWidth="1.5" />
 <path d="M7 22V19c0-1.5 1.5-3 3-3h4c1.5 0 3 1.5 3 3v3H7z" />
 </svg>
 <div className="absolute bottom-[-2px] right-[-4px] md:bottom-0 md:right-0">
 <svg className="w-5 h-5 md:w-6 md:h-6 text-orange-500 drop-shadow-sm border-2 border-orange-50 rounded-full bg-orange-50" viewBox="0 0 24 24" fill="currentColor">
 <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
 <circle cx="8" cy="10" r="1.5" fill="white" />
 <circle cx="12" cy="10" r="1.5" fill="white" />
 <circle cx="16" cy="10" r="1.5" fill="white" />
 </svg>
 </div>
 </div>
);

const SocialEngIllustration = () => (
 <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
 <div className="absolute inset-0 overflow-hidden md:rounded-r-[2rem]">
 <svg className="absolute right-0 top-0 h-full w-full object-cover opacity-80" viewBox="0 0 400 400" preserveAspectRatio="none">
 <path d="M-50,400 C150,400 150,150 250,100 C320,60 400,50 400,0 L400,400 Z" fill="url(#bg-wave-orange)" />
 <defs>
 <linearGradient id="bg-wave-orange" x1="0" y1="0" x2="1" y2="1">
 <stop offset="0%" stopColor="#FFF7ED" stopOpacity="0.8" />
 <stop offset="100%" stopColor="#FFEDD5" stopOpacity="1" />
 </linearGradient>
 </defs>
 </svg>
 <div className="absolute top-6 right-6 md:top-12 md:right-12 w-20 h-20 md:w-32 md:h-32 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #F97316 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
 </div>

 <div className="relative w-[280px] h-[200px] md:w-[380px] md:h-[300px] z-10 flex items-center justify-center mt-4 md:mt-0">
 <svg className="absolute right-[-10px] md:right-[-10px] bottom-[20px] md:bottom-[40px] w-20 h-20 md:w-32 md:h-32 opacity-70" viewBox="0 0 100 100">
 <path d="M50,90 C90,90 100,50 100,20 C60,20 50,50 50,90 Z" fill="#FED7AA" />
 <path d="M50,90 C50,50 60,20 100,20 C100,50 90,90 50,90 Z" fill="#FFEDD5" />
 <path d="M50,90 C70,70 70,30 100,20 C80,40 60,40 50,90 Z" fill="#F97316" opacity="0.2" />
 </svg>

 <div className="absolute bottom-[20px] md:bottom-[30px] w-[140px] md:w-[170px] h-[190px] md:h-[240px] bg-[#1E293B] rounded-[1.5rem] md:rounded-[2rem] shadow-2xl flex items-center justify-center p-1.5 md:p-2 border border-slate-600">
 <div className="absolute top-1.5 md:top-2 left-1/2 -translate-x-1/2 w-12 md:w-16 h-3 md:h-4 bg-[#1E293B] rounded-b-xl z-20"></div>
 <div className="w-full h-full bg-slate-50 rounded-[1.2rem] md:rounded-[1.7rem] relative overflow-hidden flex flex-col pt-6 md:pt-8 px-2 md:px-3">
 <div className="w-20 md:w-24 h-8 md:h-10 bg-orange-400 rounded-2xl rounded-tl-sm self-start mb-3 relative flex items-center px-3 gap-1 shadow-sm">
 <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
 <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
 <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
 </div>

 <div className="w-full h-12 md:h-14 bg-white rounded-xl shadow-sm mb-3 flex items-center p-2 gap-2 border border-slate-100">
 <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-200"></div>
 <div className="flex-1">
 <div className="w-full h-1.5 md:h-2 bg-slate-200 rounded-full mb-1.5"></div>
 <div className="w-3/4 h-1.5 md:h-2 bg-slate-200 rounded-full"></div>
 </div>
 </div>

 <div className="absolute top-[45%] left-[-20%] md:left-[-30%] w-[120%] md:w-[140%] h-14 md:h-16 bg-white rounded-xl shadow-xl flex items-center p-2 md:p-3 gap-2 md:gap-3 z-30 border border-slate-100 animate-float">
 <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-300 flex items-center justify-center">
 <svg className="w-5 h-5 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" /></svg>
 </div>
 <div className="flex-1">
 <div className="w-full h-2 md:h-2.5 bg-slate-200 rounded-full mb-2"></div>
 <div className="w-4/5 h-2 md:h-2.5 bg-slate-200 rounded-full mb-2"></div>
 <div className="w-1/2 h-2 md:h-2.5 bg-orange-400 rounded-full"></div>
 </div>
 </div>

 <div className="absolute bottom-4 left-2 right-2 h-10 md:h-12 bg-white rounded-xl shadow-sm flex items-center p-2 gap-2 border border-slate-100 opacity-60">
 <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-200 flex items-center justify-center">
 <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" /></svg>
 </div>
 <div className="flex-1">
 <div className="w-full h-1.5 md:h-2 bg-slate-200 rounded-full mb-1.5"></div>
 <div className="w-3/4 h-1.5 md:h-2 bg-slate-200 rounded-full"></div>
 </div>
 </div>
 </div>
 </div>

 <div className="absolute top-[20px] md:top-[40px] right-[40px] md:right-[50px] z-30 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg border-4 border-orange-50 flex items-center justify-center animate-pulse-glow">
 <svg className="w-6 h-6 md:w-8 md:h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
 <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
 </svg>
 </div>

 <div className="absolute right-[20px] md:right-[30px] bottom-[10px] md:bottom-[15px] z-40">
 <svg className="w-20 h-24 md:w-28 md:h-32 drop-shadow-[0_15px_25px_rgba(249,115,22,0.4)]" viewBox="0 0 100 120">
 <defs>
 <linearGradient id="maskGrad" x1="0" y1="0" x2="1" y2="1">
 <stop offset="0%" stopColor="#FDBA74" />
 <stop offset="100%" stopColor="#EA580C" />
 </linearGradient>
 <linearGradient id="maskHighlight" x1="0" y1="0" x2="0" y2="1">
 <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
 <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
 </linearGradient>
 </defs>
 <path d="M50 10 C20 10 10 30 10 60 C10 90 30 110 50 115 C70 110 90 90 90 60 C90 30 80 10 50 10 Z" fill="url(#maskGrad)" />
 <path d="M50 10 C20 10 10 30 10 60 C10 90 30 110 50 115 C70 110 90 90 90 60 C90 30 80 10 50 10 Z" fill="url(#maskHighlight)" />
 <path d="M25 55 C25 45 40 45 40 55 C40 60 25 60 25 55 Z" fill="white" />
 <path d="M60 55 C60 45 75 45 75 55 C75 60 60 60 60 55 Z" fill="white" />
 <path d="M30 85 C40 95 60 95 70 85 C65 95 35 95 30 85 Z" fill="white" />
 </svg>
 </div>

 <div className="absolute left-[30px] md:left-[40px] bottom-[10px] md:bottom-[20px] z-40 animate-float-delayed">
 <svg className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_10px_15px_rgba(249,115,22,0.3)]" viewBox="0 0 100 100">
 <defs>
 <linearGradient id="warnGrad" x1="0" y1="0" x2="0" y2="1">
 <stop offset="0%" stopColor="#F97316" />
 <stop offset="100%" stopColor="#C2410C" />
 </linearGradient>
 </defs>
 <path d="M50 10 L10 85 L90 85 Z" fill="url(#warnGrad)" stroke="white" strokeWidth="6" strokeLinejoin="round" />
 <rect x="46" y="35" width="8" height="25" rx="4" fill="white" />
 <circle cx="50" cy="72" r="5" fill="white" />
 </svg>
 </div>
 </div>
 </div>
);

const AccountTakeoverIllustration = () => (
 <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
 <div className="absolute inset-0 overflow-hidden md:rounded-r-[2rem]">
 <svg className="absolute right-0 top-0 h-full w-full object-cover opacity-80" viewBox="0 0 400 400" preserveAspectRatio="none">
 <path d="M-50,400 C150,400 150,150 250,100 C320,60 400,50 400,0 L400,400 Z" fill="url(#bg-wave-purple)" />
 <defs>
 <linearGradient id="bg-wave-purple" x1="0" y1="0" x2="1" y2="1">
 <stop offset="0%" stopColor="#FAF5FF" stopOpacity="0.8" />
 <stop offset="100%" stopColor="#F3E8FF" stopOpacity="1" />
 </linearGradient>
 </defs>
 </svg>
 <div className="absolute top-6 right-6 md:top-12 md:right-12 w-20 h-20 md:w-32 md:h-32 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #A855F7 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
 </div>

 <div className="relative w-[280px] h-[200px] md:w-[380px] md:h-[300px] z-10 flex items-center justify-center mt-4 md:mt-0">
 <svg className="absolute right-[-10px] md:right-[-10px] bottom-[20px] md:bottom-[40px] w-20 h-20 md:w-32 md:h-32 opacity-70" viewBox="0 0 100 100">
 <path d="M50,90 C90,90 100,50 100,20 C60,20 50,50 50,90 Z" fill="#D8B4FE" />
 <path d="M50,90 C50,50 60,20 100,20 C100,50 90,90 50,90 Z" fill="#E9D5FF" />
 <path d="M50,90 C70,70 70,30 100,20 C80,40 60,40 50,90 Z" fill="#A855F7" opacity="0.2" />
 </svg>

 <div className="absolute bottom-[20px] md:bottom-[30px] w-[240px] md:w-[320px] h-[150px] md:h-[200px]">
 <div className="absolute inset-0 bg-[#2D2A3D] rounded-xl shadow-2xl flex items-center justify-center p-1.5 md:p-2 border border-slate-700">
 <div className="w-full h-full bg-[#E9D5FF] rounded-lg relative overflow-hidden flex flex-col items-center justify-center">
 <div className="w-[85%] h-[85%] bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-4">
 <div className="w-10 h-10 md:w-14 md:h-14 bg-purple-100 rounded-full mb-3 md:mb-4 flex items-center justify-center">
 <svg className="w-6 h-6 md:w-8 md:h-8 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
 <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
 </svg>
 </div>
 <div className="flex gap-1.5 md:gap-2 mb-4 md:mb-5">
 {[1, 2, 3, 4, 5, 6, 7].map(i => (
 <div key={i} className="w-2 h-2 md:w-2.5 md:h-2.5 bg-slate-800 rounded-full"></div>
 ))}
 </div>
 <div className="w-[80%] h-6 md:h-8 bg-purple-600 rounded-full flex items-center justify-center gap-2">
 <svg className="w-3 h-3 md:w-4 md:h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></svg>
 </div>
 </div>
 </div>
 </div>
 <div className="absolute -bottom-[8px] md:-bottom-[10px] left-[-15px] md:left-[-25px] right-[-15px] md:right-[-25px] h-[10px] md:h-[14px] bg-[#E2E8F0] rounded-b-xl rounded-t-sm shadow-md flex justify-center">
 <div className="w-16 md:w-24 h-1 md:h-1.5 bg-[#CBD5E1] rounded-b-md mt-0.5"></div>
 </div>
 </div>

 <div className="absolute top-[-30px] md:top-[-45px] right-[40%] md:right-[35%] z-20 animate-swing">
 <svg className="w-16 h-20 md:w-20 md:h-24 drop-shadow-[0_15px_20px_rgba(168,85,247,0.4)]" viewBox="0 0 100 120">
 <defs>
 <linearGradient id="lockGrad" x1="0" y1="0" x2="0" y2="1">
 <stop offset="0%" stopColor="#A855F7" />
 <stop offset="100%" stopColor="#7C3AED" />
 </linearGradient>
 </defs>
 <path d="M25 50 V 30 C 25 10 75 10 75 30 V 40" fill="none" stroke="url(#lockGrad)" strokeWidth="12" strokeLinecap="round" />
 <rect x="15" y="50" width="70" height="60" rx="12" fill="url(#lockGrad)" />
 <circle cx="50" cy="70" r="8" fill="#4C1D95" />
 <path d="M46 75 L54 75 L52 90 L48 90 Z" fill="#4C1D95" />
 </svg>
 </div>

 <div className="absolute left-[0px] md:left-[10px] bottom-[15px] md:bottom-[20px] z-30 animate-float">
 <svg className="w-20 h-24 md:w-28 md:h-32 drop-shadow-[0_15px_25px_rgba(168,85,247,0.5)]" viewBox="0 0 100 120">
 <defs>
 <linearGradient id="shieldGradP" x1="0" y1="0" x2="1" y2="1">
 <stop offset="0%" stopColor="#C084FC" />
 <stop offset="100%" stopColor="#7C3AED" />
 </linearGradient>
 </defs>
 <path d="M50 5 L90 20 L90 60 C90 90 50 115 50 115 C50 115 10 90 10 60 L10 20 Z" fill="url(#shieldGradP)" stroke="#E9D5FF" strokeWidth="2" />
 <rect x="46" y="35" width="8" height="25" rx="4" fill="white" />
 <circle cx="50" cy="75" r="5" fill="white" />
 </svg>
 </div>
 </div>
 </div>
);

const CarouselIllustration = ({ id }) => {
 switch (id) {
 case 1: return <PhishingIllustration />;
 case 2: return <SocialEngIllustration />;
 case 3: return <AccountTakeoverIllustration />;
 default: return <PhishingIllustration />;
 }
};

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────── */

export default function DigitalExperienceDesignPage({ onClose }) {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [showDetails, setShowDetails] = useState(false);
 const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

 const handleBack = () => {
   if (onClose) onClose();
   window.history.back();
 };

 const handleHome = () => {
   if (onClose) onClose();
   window.location.hash = '#home';
   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
 };

 useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
 }, []);

 // Auto-scroll functionality (pauses when reading details)
 useEffect(() => {
   if (showDetails) return;
   const timer = setInterval(() => {
     setCurrentIndex((prev) => (prev + 1) % cardsData.length);
   }, 3200);
   return () => clearInterval(timer);
 }, [showDetails]);

 const handleDragEnd = (event, info) => {
   if (showDetails) return;
   const swipeThreshold = 30;
   if (info.offset.x < -swipeThreshold) {
     setCurrentIndex((prev) => (prev + 1) % cardsData.length);
     setShowDetails(false);
   } else if (info.offset.x > swipeThreshold) {
     setCurrentIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
     setShowDetails(false);
   }
 };

 const handleCardClick = (index) => {
   if (index !== currentIndex) {
     setCurrentIndex(index);
     setShowDetails(false);
   }
 };

 const getCardStyles = (index) => {
   const offset = index - currentIndex;
   const isMobile = windowWidth < 768;
   const isTablet = windowWidth >= 768 && windowWidth < 1024;
   const shift = isMobile ? 80 : (isTablet ? 220 : 380);

   let normalizedOffset = offset;
   if (offset > cardsData.length / 2) normalizedOffset -= cardsData.length;
   if (offset < -cardsData.length / 2) normalizedOffset += cardsData.length;

   if (showDetails && normalizedOffset !== 0) {
     return {
       x: normalizedOffset > 0 ? 50 : -50,
       scale: 0.8,
       zIndex: 1,
       opacity: 0,
       rotateY: 0
     };
   }

   if (isMobile) {
     if (normalizedOffset === 0) return { x: 0, scale: 1, zIndex: 10, opacity: 1, rotateY: 0 };
     else if (normalizedOffset === 1) return { x: shift, scale: 0.9, zIndex: 5, opacity: 0.5, rotateY: -10 };
     else if (normalizedOffset === -1) return { x: -shift, scale: 0.9, zIndex: 5, opacity: 0.5, rotateY: 10 };
     else return { x: normalizedOffset > 0 ? shift * 1.5 : -shift * 1.5, scale: 0.8, zIndex: 1, opacity: 0, rotateY: 0 };
   }

   if (normalizedOffset === 0) {
     return { x: 0, scale: 1, zIndex: 10, opacity: 1, rotateY: 0 };
   } else if (normalizedOffset === 1) {
     return { x: shift, scale: 0.85, zIndex: 5, opacity: 0.6, rotateY: -15 };
   } else if (normalizedOffset === -1) {
     return { x: -shift, scale: 0.85, zIndex: 5, opacity: 0.6, rotateY: 15 };
   } else if (normalizedOffset > 1) {
     return { x: shift * 1.5, scale: 0.7, zIndex: 1, opacity: 0, rotateY: -30 };
   } else {
     return { x: -shift * 1.5, scale: 0.7, zIndex: 1, opacity: 0, rotateY: 30 };
   }
 };

 return (
   <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="relative w-full min-h-screen bg-gradient-to-b from-[#EBF7F8] via-[#E7F3F5] to-[#DFEFF2] flex flex-col items-center justify-between font-sans pb-16 select-none overflow-hidden"
   >
     {/* Top Header Navigation buttons */}
     <div className="w-full max-w-[1300px] px-6 pt-6 flex items-center justify-start gap-3 z-30">
       <button
         type="button"
         onClick={handleBack}
         className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 text-white px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
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

     {/* Embedded Animations */}
     <style>{`
     @keyframes float {
     0%, 100% { transform: translateY(0); }
     50% { transform: translateY(-8px); }
     }
     @keyframes swing {
     0%, 100% { transform: rotate(-3deg); }
     50% { transform: rotate(3deg); }
     }
     @keyframes pulseGlow {
     0%, 100% { transform: scale(1); opacity: 0.8; }
     50% { transform: scale(1.05); opacity: 1; }
     }
     .animate-float { animation: float 4s ease-in-out infinite; }
     .animate-float-delayed { animation: float 4s ease-in-out 2s infinite; }
     .animate-swing { animation: swing 4s ease-in-out infinite; }
     .animate-pulse-glow { animation: pulseGlow 3s ease-in-out infinite; }
     `}</style>

     {/* Standard Header */}
     <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-4xl mx-auto px-4 z-20 mb-6 mt-4 text-center"
     >
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#AFDDE5] shadow-xs mb-3">
        <span className="w-2 h-2 rounded-full bg-[#0FA4AF] animate-pulse" />
        <span className="text-xs font-extrabold text-[#081E52] tracking-wider uppercase">
          {digitalExperiencePageData.badge}
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#081E52] tracking-wider uppercase mb-3">
        {digitalExperiencePageData.title}
      </h1>
      <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-medium max-w-3xl mx-auto">
        {digitalExperiencePageData.description}
      </p>
     </motion.div>

     {/* Carousel Container */}
     <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="relative w-full max-w-7xl h-[440px] md:h-[480px] perspective-1000 touch-pan-y"
     >
     <AnimatePresence initial={false}>
     {cardsData.map((card, index) => {
     let offset = index - currentIndex;
     if (offset > cardsData.length / 2) offset -= cardsData.length;
     if (offset < -cardsData.length / 2) offset += cardsData.length;

     const isVisible = Math.abs(offset) <= 2;
     if (!isVisible) return null;

     const isActive = index === currentIndex;
     const isShowingDetails = isActive && showDetails;
     const IconComponent = card.Icon;

     // Theme gradient colors
     const theme = {
       iconBg: "bg-teal-50 border-teal-100",
       textPrimary: "text-[#081E52]",
       gradientLine: "from-[#0FA4AF] to-[#003135]",
       buttonGrad: "from-[#003135] to-[#0FA4AF] hover:from-[#0D5C63] hover:to-[#12BCC8] shadow-[0_8px_20px_-6px_rgba(15,164,175,0.5)]",
       rightBg: "bg-teal-50/40",
     };

     return (
     <motion.div
     key={card.id}
     onClick={() => handleCardClick(index)}
     drag={!showDetails ? "x" : false}
     dragConstraints={{ left: 0, right: 0 }}
     dragElastic={0.7}
     onDragEnd={handleDragEnd}
     initial={false}
     animate={getCardStyles(index)}
     transition={{ type: "spring", stiffness: 200, damping: 25 }}
     className={`absolute top-0 left-0 right-0 mx-auto w-[calc(100vw-40px)] max-w-[360px] md:max-w-none md:w-[700px] lg:w-[850px] h-[440px] md:h-[480px] rounded-[2rem] bg-white overflow-hidden transition-colors ${
       isActive ? "shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] border border-slate-100" : "shadow-lg border border-slate-200/50 cursor-pointer active:cursor-grabbing"
     }`}
     >
     <div className="flex flex-col md:flex-row w-full h-full relative">
     {/* Illustration Right */}
     <div className={`relative md:absolute right-0 top-0 w-full md:w-[55%] ${isShowingDetails ? 'hidden md:flex' : 'flex'} h-[45%] md:h-full ${theme.rightBg} md:bg-transparent overflow-hidden rounded-t-[2rem] md:rounded-t-none md:rounded-r-[2rem] z-10 flex items-center justify-center border-b md:border-b-0 border-slate-100`}>
       <CarouselIllustration id={(card.id % 3) + 1} />
     </div>

     {/* Content Left */}
     <motion.div 
     layout 
     className={`relative z-20 w-full md:w-[50%] ${isShowingDetails ? 'h-full' : 'h-[55%]'} md:h-full p-6 md:p-8 flex flex-col bg-white md:bg-transparent rounded-b-[2rem] md:rounded-none transition-all duration-300 ${
     isShowingDetails ? 'justify-start pt-6 md:pt-8' : 'justify-center'
     }`}
     >

     {/* Close button for details */}
     <AnimatePresence>
     {isShowingDetails && (
     <motion.button
     initial={{ opacity: 0, scale: 0.8 }}
     animate={{ opacity: 1, scale: 1 }}
     exit={{ opacity: 0, scale: 0.8 }}
     onClick={(e) => { e.stopPropagation(); setShowDetails(false); }}
     className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors z-30"
     >
     <X size={20} />
     </motion.button>
     )}
     </AnimatePresence>

     <motion.div layout className="flex flex-col shrink-0">
     <div className="flex items-center gap-2 mb-2">
       <span className="px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-black bg-[#0FA4AF]/15 text-[#081E52] border border-[#0FA4AF]/30">
         {String(card.id).padStart(2, '0')}
       </span>
       <span className="text-[10px] md:text-xs font-bold text-[#0FA4AF] uppercase tracking-wider">
         {card.title}
       </span>
     </div>

     <motion.div layout className={`flex items-center gap-3.5 ${isShowingDetails ? 'mb-2.5 pr-10 md:pr-16' : 'mb-3 md:mb-4'}`}>
     <motion.div 
     layout 
     className={`rounded-2xl flex items-center justify-center shadow-[inset_0_2px_10px_rgba(255,255,255,1)] border shrink-0 transition-all duration-300 ${
     isShowingDetails ? 'w-10 h-10 md:w-12 md:h-12' : 'w-12 h-12 md:w-16 md:h-16'
     } ${theme.iconBg}`}
     >
     {IconComponent ? <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-[#0FA4AF]" /> : <PhishingIcon />}
     </motion.div>

     <motion.h2 layout className={`font-black text-[#081E52] leading-[1.2] tracking-tight pb-0.5 ${isShowingDetails ? 'text-lg md:text-2xl' : 'text-2xl md:text-3xl lg:text-[2.5rem]'}`}>
     {card.title}
     </motion.h2>
     </motion.div>

     <motion.div layout className={`w-12 md:w-16 h-1.5 bg-gradient-to-r ${theme.gradientLine} rounded-full shrink-0 ${isShowingDetails ? 'mb-2 md:mb-3' : 'mb-4 md:mb-5'}`} />
     </motion.div>

     <AnimatePresence mode="wait">
     {!isShowingDetails ? (
     <motion.div
     key="explore-btn"
     initial={{ opacity: 0, y: 10 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: 10 }}
     transition={{ duration: 0.2 }}
     className="flex flex-col"
     >
     <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed line-clamp-2 md:line-clamp-3 mb-4">
       {card.desc || card.description}
     </p>
     <button
     onClick={(e) => { e.stopPropagation(); setShowDetails(true); }}
     className={`bg-gradient-to-r ${theme.buttonGrad} text-white px-6 md:px-8 py-3 rounded-xl text-sm font-semibold flex items-center justify-center md:justify-start gap-2 w-full md:w-max transition-all active:scale-95 shrink-0 cursor-pointer`}
     >
     Explore Details <span className="text-[10px]">→</span>
     </button>
     </motion.div>
     ) : (
     <motion.div
     key="details-content"
     initial={{ opacity: 0, y: 10 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: -10 }}
     transition={{ duration: 0.3 }}
     className="flex-1 min-h-0 pr-2 space-y-4 md:space-y-6 overflow-y-auto custom-scrollbar"
     >
     <div className="bg-slate-50/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-slate-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
     <h3 className={`text-[10px] md:text-xs font-bold ${theme.textPrimary} mb-3 uppercase tracking-widest flex items-center gap-1.5`}>
     <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
     Detailed Analysis
     </h3>
     <p className="text-slate-600 text-xs md:text-sm leading-relaxed whitespace-pre-wrap font-medium text-justify">
     {card.details || card.content || card.desc}
     </p>
     </div>
     </motion.div>
     )}
     </AnimatePresence>

     </motion.div>
     </div>
     </motion.div>
     );
     })}
     </AnimatePresence>
     </motion.div>

     {/* Pagination & Controls with Active Card Name */}
     <motion.div 
       initial={{ opacity: 0, y: 30 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
       className="flex justify-center items-center mt-6 z-30 relative px-4"
     >
       <div className="flex items-center space-x-2.5 sm:space-x-3.5 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-teal-200/80 shadow-md">
         <button
           onClick={() => {
             setCurrentIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
             setShowDetails(false);
           }}
           className="p-1.5 sm:p-2 rounded-full bg-[#003135] text-white hover:bg-[#0FA4AF] transition-colors cursor-pointer active:scale-95 shadow-xs"
           title="Previous Card"
           aria-label="Previous Card"
         >
           <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
         </button>

         <div className="flex items-center gap-1.5 sm:gap-2 px-1 text-xs sm:text-sm font-extrabold text-[#081E52]">
           <span className="text-[#0FA4AF]">{String(currentIndex + 1).padStart(2, '0')}</span>
           <span className="text-slate-400 font-normal">/ {cardsData.length}</span>
           <span className="text-slate-300 font-light">•</span>
           <span className="text-[#081E52] font-bold truncate max-w-[150px] sm:max-w-[240px] md:max-w-[320px]">
             {cardsData[currentIndex]?.title}
           </span>
         </div>

         <div className="hidden lg:flex space-x-1.5 items-center pl-2 border-l border-slate-200">
           {cardsData.map((c, index) => (
             <button
               key={index}
               onClick={() => {
                 setCurrentIndex(index);
                 setShowDetails(false);
               }}
               className={`rounded-full transition-all cursor-pointer ${currentIndex === index ? "bg-[#0FA4AF] w-4 h-2 shadow-xs" : "bg-teal-200 hover:bg-teal-300 w-2 h-2"}`}
               title={c.title}
               aria-label={c.title}
             />
           ))}
         </div>

         <button
           onClick={() => {
             setCurrentIndex((prev) => (prev + 1) % cardsData.length);
             setShowDetails(false);
           }}
           className="p-1.5 sm:p-2 rounded-full bg-[#003135] text-[#081E52] hover:bg-[#0FA4AF] transition-colors cursor-pointer active:scale-95 shadow-xs"
           title="Next Card"
           aria-label="Next Card"
         >
           <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
         </button>
       </div>
     </motion.div>
   </motion.div>
 );
}
