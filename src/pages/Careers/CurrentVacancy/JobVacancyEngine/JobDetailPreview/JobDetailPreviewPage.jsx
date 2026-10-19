import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from '../router-compat';
import {
  Briefcase,
  MapPin,
  Calendar,
  Clock,
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
  CheckCircle,
  Mail,
  Phone,
  Check,
  CheckSquare,
  Square,
  Sparkles,
  Layers,
  DollarSign,
  TrendingUp,
  BrainCircuit,
  Cpu,
  Terminal,
  Zap,
  Users,
  Laptop,
  Copy,
  Search,
  Building2,
  AlertCircle,
  Info,
  BadgeCheck,
  Home
} from 'lucide-react';

// ─── REUSED DATA ADAPTER FOR ALL 12 VACANCIES ────────────────────────────────
import { getJobDataByCode } from './JobDetailPreviewPageData';

export default function JobDetailPreviewPage({
  job: propJob,
  onBack: propOnBack,
  onApply: propOnApply,
  onHome: propOnHome
}) {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve incoming job payload from props, navigation state, or query params
  const incomingJob = propJob || location?.state?.job;
  const searchParams = new URLSearchParams(location?.search || '');
  const queryCode = searchParams.get('jobCode') || searchParams.get('code') || searchParams.get('id');
  const jobId = incomingJob?.id || incomingJob?.jobCode || queryCode || 'IBCS-IT-AIML-2026-001';

  // Load specific normalized job dataset dynamically
  const jobData = useMemo(() => getJobDataByCode(jobId), [jobId]);

  // Normalized references
  const posInfo = jobData.positionInformation || {};
  const jobOverview = jobData.jobOverview || {};
  const jobProfile = jobData.jobProfile || {};
  const workEnv = jobData.workEnvironment || {};
  const compBenefits = jobData.compensationAndBenefits || {};
  const whyJoin = jobData.whyJoinUs || [];
  const trainingProbation = jobData.trainingAndProbation || {};
  const impDates = jobData.importantDates || {};
  const appInfo = jobData.applicationInformation || {};
  const contactInfo = jobData.contactInformation || {};
  const impNotices = jobData.importantNotices || {};

  // State management
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedKey, setCopiedKey] = useState(null);
  const [activeStagePhase, setActiveStagePhase] = useState('All');
  const [respSearchTerm, setRespSearchTerm] = useState('');

  // Interactive eligibility checker
  const [eligibilityAnswers, setEligibilityAnswers] = useState({
    degree: false,
    experience: false,
    age: false
  });

  // Local storage for document checklist
  const storageKey = `ibcs_candidate_docs_checklist_${posInfo.jobCode || jobId}`;
  const [checkedDocs, setCheckedDocs] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Scroll reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Copy helper
  const handleCopy = (text, key) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2200);
    }
  };

  // Toggle document checklist
  const toggleDoc = (id) => {
    setCheckedDocs((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(storageKey, JSON.stringify(updated));
      } catch (e) {
        console.error('LocalStorage write error', e);
      }
      return updated;
    });
  };

  // Documents list normalized
  const documentsList = useMemo(() => {
    const rd = jobData.requiredDocuments;
    if (Array.isArray(rd?.requiredDocumentsList)) {
      return rd.requiredDocumentsList;
    }
    if (Array.isArray(rd)) {
      return rd;
    }
    return [];
  }, [jobData]);

  const toggleAllDocs = () => {
    const allChecked = documentsList.every((d) => checkedDocs[d.id]);
    const updated = {};
    if (!allChecked) {
      documentsList.forEach((d) => {
        updated[d.id] = true;
      });
    }
    setCheckedDocs(updated);
    try {
      localStorage.setItem(storageKey, JSON.stringify(updated));
    } catch (e) {
      console.error('LocalStorage write error', e);
    }
  };

  const resetAllDocs = () => {
    setCheckedDocs({});
    try {
      localStorage.removeItem(storageKey);
    } catch (e) {
      console.error('LocalStorage reset error', e);
    }
  };

  const readyDocsCount = Object.values(checkedDocs).filter(Boolean).length;
  const readinessPercent = documentsList.length > 0 ? Math.round((readyDocsCount / documentsList.length) * 100) : 0;

  // Responsibilities normalized
  const responsibilitiesList = useMemo(() => {
    const kr = jobData.keyResponsibilities;
    if (Array.isArray(kr?.responsibilitiesAndDuties)) return kr.responsibilitiesAndDuties;
    if (Array.isArray(kr?.items)) return kr.items;
    return [];
  }, [jobData]);

  // Filtered responsibilities
  const filteredResponsibilities = useMemo(() => {
    if (!respSearchTerm.trim()) return responsibilitiesList;
    const term = respSearchTerm.toLowerCase();
    return responsibilitiesList.filter((item) => {
      return (
        item.title?.toLowerCase().includes(term) ||
        item.description?.toLowerCase().includes(term)
      );
    });
  }, [responsibilitiesList, respSearchTerm]);

  // Pillars normalized
  const pillarsList = useMemo(() => {
    return jobData.jobDescription?.pillars || [];
  }, [jobData]);

  // Stages normalized (21 stages)
  const recruitmentStages = useMemo(() => {
    const rec = jobData.recruitmentProcess;
    if (Array.isArray(rec?.stages)) return rec.stages;
    return [];
  }, [jobData]);

  const filteredStages = useMemo(() => {
    if (activeStagePhase === 'All') return recruitmentStages;
    return recruitmentStages.filter((s) => s.phase === activeStagePhase);
  }, [recruitmentStages, activeStagePhase]);

  // Educational qualifications normalized
  const educationalQualifications = useMemo(() => {
    const ec = jobData.eligibilityCriteria;
    if (Array.isArray(ec?.educationalQualifications)) {
      return ec.educationalQualifications;
    }
    if (typeof ec?.educationalQualification === 'string') {
      return ec.educationalQualification.split('\n').map((s) => s.trim()).filter(Boolean);
    }
    return [
      'Recognized Bachelor’s / Master’s Degree in a relevant technical or management discipline.',
      'Strong foundational knowledge, analytical proficiency, and applicable domain background.',
      'Documented completion of required educational coursework.'
    ];
  }, [jobData]);

  // Skills normalized
  const skillsComp = jobData.skillsAndCompetencies || {};
  const technicalSkillsList = skillsComp.technicalSkills || [];
  const computerProficiencyList = skillsComp.computerProficiency || [];
  const softSkillsList = skillsComp.softSkills || [];
  const additionalRequirementsList = skillsComp.additionalRequirements || [];

  // Technology spectrum badges
  const technologySpectrum = useMemo(() => {
    if (technicalSkillsList.length > 0) {
      return technicalSkillsList.slice(0, 10).map((s) => s.name);
    }
    return [
      posInfo.jobTitle || 'Domain Engineering',
      posInfo.department || 'Technology',
      'System Architecture',
      'Quality Assurance',
      'Process Security',
      'Data Operations'
    ];
  }, [technicalSkillsList, posInfo]);

  // Proceed to Registration Form Handler
  const handleProceed = () => {
    const jobPayload = {
      id: posInfo.jobCode || incomingJob?.id || jobId,
      jobTitle: posInfo.jobTitle || incomingJob?.jobTitle || 'Job Vacancy',
      jobCode: posInfo.jobCode || incomingJob?.jobCode || jobId,
      department: posInfo.department || incomingJob?.department || 'IB CYBER SECURITY',
      location: jobOverview.jobLocations || incomingJob?.location || 'Pan-India',
      employmentType: jobOverview.employmentType || incomingJob?.employmentType || 'Permanent',
      salary: compBenefits.annualCtcSalaryPackage || compBenefits.annualCtc || incomingJob?.salary || '₹2.40 LPA – ₹4.50 LPA',
      experience: jobData.eligibilityCriteria?.requiredExperience || incomingJob?.experience || '0–2 Years',
      entryPoint: 'preview',
      ...(incomingJob || {})
    };

    if (propOnApply) {
      propOnApply(jobPayload);
    } else {
      navigate('/recruitment/current-vacancy/job-vacancy/new-registration', {
        state: { job: jobPayload, entryPoint: 'preview' }
      });
    }
  };

  const isEligible = eligibilityAnswers.degree && eligibilityAnswers.experience && eligibilityAnswers.age;

  return (
    <div
      id="job-detail-preview-root"
      className="job-detail-preview-root min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900 pb-16 overflow-x-hidden w-full relative"
    >
      {/* ─── EMBEDDED STYLES FOR LIQUID WAVES & 3D PEARL-GLASS DESIGN SYSTEM ─── */}
      <style>{`
        /* Liquid Wave Keyframe Animations */
        @keyframes waveScrollFront {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-25%, -4px, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes waveScrollMid {
          0% { transform: translate3d(-50%, 0, 0); }
          50% { transform: translate3d(-25%, 3px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes waveScrollBack {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-25%, -3px, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes bubbleRise {
          0% { transform: translate3d(0, 8px, 0) scale(0.5); opacity: 0; }
          25% { opacity: 0.9; }
          75% { opacity: 0.85; transform: translate3d(3px, -36px, 0) scale(1); }
          100% { transform: translate3d(-2px, -52px, 0) scale(1.3); opacity: 0; }
        }

        .wave-back {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath fill='%238E7CFF' fill-opacity='0.55' d='M0,50 C240,15 420,85 600,50 C780,15 960,85 1200,50 L1200,120 L0,120 Z'/%3E%3C/svg%3E");
          background-repeat: repeat-x;
          background-size: 50% 100%;
          animation: waveScrollBack 7s linear infinite;
          opacity: 0.65;
        }
        .wave-mid {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath fill='%236355F9' fill-opacity='0.78' d='M0,35 C200,80 380,10 600,42 C820,78 1000,15 1200,35 L1200,120 L0,120 Z'/%3E%3C/svg%3E");
          background-repeat: repeat-x;
          background-size: 50% 100%;
          animation: waveScrollMid 4.8s linear infinite reverse;
          opacity: 0.85;
        }
        .wave-front {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath fill='%234F39F6' fill-opacity='0.95' d='M0,45 C180,95 380,0 600,45 C820,95 1020,0 1200,45 L1200,120 L0,120 Z'/%3E%3C/svg%3E");
          background-repeat: repeat-x;
          background-size: 50% 100%;
          animation: waveScrollFront 3.4s linear infinite;
        }
        .bubble-1 {
          left: 22%;
          width: 7px;
          height: 7px;
          animation: bubbleRise 3.4s infinite ease-in;
        }
        .bubble-2 {
          left: 54%;
          width: 5px;
          height: 5px;
          animation: bubbleRise 4.2s 1.2s infinite ease-in;
        }
        .bubble-3 {
          left: 80%;
          width: 8px;
          height: 8px;
          animation: bubbleRise 3.8s 0.6s infinite ease-in;
        }

        /* 3D Pearl-Glass Section Cards Harmonization */
        #job-detail-preview-root section.rounded-3xl {
          background: #ffffff !important;
          border: 1px solid rgba(226, 232, 240, 0.95) !important;
          box-shadow: 0 12px 34px -8px rgba(79, 57, 246, 0.09), 0 2px 6px rgba(0, 0, 0, 0.02), inset 0 1px 2px rgba(255, 255, 255, 1) !important;
          border-radius: 1.75rem !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        #job-detail-preview-root section.rounded-3xl:hover {
          transform: translateY(-2px);
          border-color: rgba(79, 57, 246, 0.32) !important;
          box-shadow: 0 22px 46px -10px rgba(79, 57, 246, 0.15), 0 4px 12px rgba(0, 0, 0, 0.03), inset 0 1px 2px rgba(255, 255, 255, 1) !important;
        }
        #job-detail-preview-root section.rounded-3xl::before {
          content: "";
          position: absolute;
          top: 0;
          left: 2rem;
          right: 2rem;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(79, 57, 246, 0.4), rgba(99, 85, 249, 0.65), rgba(79, 57, 246, 0.4), transparent);
          border-radius: 9999px;
          pointer-events: none;
        }

        /* 3D Glossy Pearl Section Number Badges */
        #job-detail-preview-root section .rounded-2xl.flex.items-center.justify-center.font-black.text-sm {
          width: 2.75rem !important;
          height: 2.75rem !important;
          border-radius: 1rem !important;
          background: linear-gradient(135deg, #6355F9 0%, #4F39F6 50%, #3822D6 100%) !important;
          color: #ffffff !important;
          box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.65), inset 0 -2px 4px rgba(0, 0, 0, 0.35), 0 4px 14px rgba(79, 57, 246, 0.38) !important;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
        }

        /* Checkboxes */
        #job-detail-preview-root input[type="checkbox"] {
          accent-color: #4F39F6 !important;
          cursor: pointer;
        }

        /* Scrollbar Utility */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
      `}</style>

      {/* ─── SCROLL READING PROGRESS INDICATOR ─── */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-200/60 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#6355F9] via-[#4F39F6] to-[#3822D6] transition-all duration-150 shadow-[0_0_12px_rgba(79,57,246,0.65)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ─── AMBIENT PEARL-GLOW BACKGROUND LIGHTING ─── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-[120px]" />
        <div className="absolute top-[35%] -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-blue-500/8 via-indigo-500/5 to-transparent blur-[140px]" />
        <div className="absolute bottom-[20%] -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tl from-purple-500/10 via-indigo-500/6 to-transparent blur-[130px]" />
      </div>

      {/* ─── TOP NAVIGATION BAR (BACK & HOME) ─── */}
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 relative z-20 flex items-center justify-start gap-3">
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

      {/* ─── TOP APPROVED SECTION: JOB DESCRIPTION (CLEAN 3D HEADING - CENTERED) ─── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 text-center flex flex-col items-center justify-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-indigo-50/90 border border-indigo-200/80 shadow-[0_2px_8px_rgba(79,57,246,0.12),inset_0_1px_1px_white] text-[10px] sm:text-[11px] font-black text-indigo-700 uppercase tracking-widest mb-2.5 sm:mb-3 max-w-full">
          <span className="w-2 h-2 rounded-full bg-[#4F39F6] animate-pulse shrink-0" />
          <span className="truncate">Official Position Overview &bull; 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight">
          Job Description
        </h1>
        <p className="text-xs sm:text-sm font-black text-[#4F39F6] uppercase tracking-wider sm:tracking-widest mt-1.5 sm:mt-2.5 max-w-full px-2">
          {posInfo.jobTitle || 'OFFICIAL VACANCY'} &bull; {posInfo.department || 'IB CYBER SECURITY'}
        </p>
      </div>

      {/* ─── MAIN CONTENT CONTAINER ─── */}
      <main className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-8 space-y-6 sm:space-y-8 relative z-10">

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 01: POSITION INFORMATION
            ══════════════════════════════════════════════════════════════════════ */}
        <section id="sec-overview" className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                01
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900 tracking-tight">Position Information</h2>
                <p className="text-xs text-slate-500 font-medium">Official administrative particulars, vacancy headcount, and opening status.</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-black">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Status: {posInfo.applicationStatus || 'Open'}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-black">
                <Users className="w-3.5 h-3.5" />
                {posInfo.numberOfVacancies || 'Multiple'} Vacancies
              </span>
            </div>
          </div>

          {/* Position Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Job Title</span>
              <div className="mt-2 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">{posInfo.jobTitle || 'Career Position'}</h3>
                  <span className="text-[11px] font-bold text-blue-600">Career Opportunity</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Job Code</span>
              <div className="mt-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm font-black text-slate-900">{posInfo.jobCode || jobId}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(posInfo.jobCode || jobId, 'jobCode')}
                  className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:text-blue-600 hover:border-blue-300 transition flex items-center gap-1 cursor-pointer"
                  title="Copy Job Code"
                >
                  {copiedKey === 'jobCode' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'jobCode' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Department</span>
              <div className="mt-2 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">{posInfo.department || 'IB CYBER SECURITY'}</h3>
                  <span className="text-[11px] font-medium text-slate-500">Corporate Division</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Position Level</span>
              <div className="mt-2 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">{posInfo.positionLevel || 'Entry Level'}</h3>
                  <span className="text-[11px] font-medium text-slate-500">Professional Engineering Tier</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Number of Vacancies</span>
              <div className="mt-2 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">{posInfo.numberOfVacancies || 'Multiple'} Openings</h3>
                  <span className="text-[11px] font-bold text-emerald-600">Immediate Allocation</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Application Status</span>
              <div className="mt-2 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-emerald-700">{posInfo.applicationStatus || 'Open'}</h3>
                  <span className="text-[11px] font-medium text-slate-500">Accepting Candidate Applications</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 02: JOB OVERVIEW
            ══════════════════════════════════════════════════════════════════════ */}
        <section className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-sm">
              02
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Job Overview</h2>
              <p className="text-xs text-slate-500 font-medium">Core organizational mission, work mode, and pan-India locations.</p>
            </div>
          </div>

          {/* Overview Narrative Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/60 via-indigo-50/40 to-slate-50 border border-blue-200/70 mb-6">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="text-sm sm:text-[15px] font-medium text-slate-800 leading-relaxed">
                  {jobOverview.summary ||
                    jobOverview.jobOverview ||
                    `We are seeking motivated and technically skilled ${posInfo.jobTitle || 'professionals'} to support the development and execution of critical domain operations across organisational projects.`}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  This opportunity is structured for high-potential candidates with practical competencies who are interested in building a long-term, impactful career at IB Cyber Security.
                </p>
              </div>
            </div>
          </div>

          {/* Particulars vs Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Employment Type</span>
                <p className="text-sm font-black text-slate-900 mt-0.5">{jobOverview.employmentType || 'Permanent'}</p>
                <span className="text-[11px] text-slate-500">Regular Payroll</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                <Laptop className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Work Mode</span>
                <p className="text-sm font-black text-slate-900 mt-0.5">{jobOverview.workMode || 'On-site'}</p>
                <span className="text-[11px] text-slate-500">Structured Office</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Contract Duration</span>
                <p className="text-sm font-black text-slate-900 mt-0.5">{jobOverview.contractDuration || 'Minimum 2 Years to Maximum 3 Years'}</p>
                <span className="text-[11px] text-slate-500">Institutional Terms</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-emerald-800 tracking-wider">Application Fee</span>
                <p className="text-sm font-black text-emerald-950 mt-0.5">₹0 (Zero Fee)</p>
                <span className="text-[11px] text-emerald-700">Free Submission</span>
              </div>
            </div>

          </div>

          {/* Locations Banner */}
          <div className="mt-4 p-4 rounded-2xl bg-slate-50/90 border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-black uppercase tracking-wider text-slate-700">
                Designated Work Locations (Pan-India Centers)
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {(jobOverview.jobLocations || 'Bhubaneswar, New Delhi, Hyderabad, Rourkela, Bengaluru, Mumbai')
                .split(',')
                .map((loc, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs hover:border-blue-400 transition"
                  >
                    📍 {loc.trim()}
                  </span>
                ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 03: JOB PROFILE
            ══════════════════════════════════════════════════════════════════════ */}
        <section className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-sm">
              03
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Job Profile</h2>
              <p className="text-xs text-slate-500 font-medium">About the position, technology spectrum, and core engineering expectations.</p>
            </div>
          </div>

          <div className="space-y-4 text-slate-700 text-xs sm:text-sm leading-relaxed">
            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-3">
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 block">About the Position</span>
              <p>
                {jobProfile.description ||
                  jobProfile.aboutPosition ||
                  jobOverview.roleSummary ||
                  `The ${posInfo.jobTitle || 'candidate'} will be responsible for executing, testing, evaluating, and maintaining domain-specific deliverables that support organisational and project requirements.`}
              </p>
              <p>
                The position covers core industry methodologies, best-practice workflows, data handling, technical execution, and integrated collaboration across cross-functional teams.
              </p>
              <p className="text-slate-800 font-medium">
                The role requires analytical thinking, practical proficiency, problem-solving abilities, and an eagerness to apply modern technologies to real-world organisational challenges.
              </p>
            </div>

            {/* Technology Spectrum Badges */}
            <div className="pt-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                Covered Technology & Domain Spectrum
              </span>
              <div className="flex flex-wrap gap-2">
                {technologySpectrum.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200/80 text-xs font-bold text-purple-900"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 04: DETAILED JOB DESCRIPTION (CORE PILLARS)
            ══════════════════════════════════════════════════════════════════════ */}
        <section className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-sm">
              04
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Detailed Job Description</h2>
              <p className="text-xs text-slate-500 font-medium">Core Operational Pillars defining the complete lifecycle and role scope.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillarsList.map((pillar, idx) => {
              const colorVariants = [
                { bg: 'from-blue-50/60 to-white', border: 'border-blue-200/80', iconBg: 'bg-blue-600', icon: BrainCircuit },
                { bg: 'from-emerald-50/60 to-white', border: 'border-emerald-200/80', iconBg: 'bg-emerald-600', icon: Layers },
                { bg: 'from-purple-50/60 to-white', border: 'border-purple-200/80', iconBg: 'bg-purple-600', icon: Cpu },
                { bg: 'from-amber-50/60 to-white', border: 'border-amber-200/80', iconBg: 'bg-amber-600', icon: Zap },
              ];
              const variant = colorVariants[idx % colorVariants.length];
              const IconComponent = variant.icon;

              return (
                <div
                  key={pillar.id || idx}
                  className={`p-5 rounded-2xl bg-gradient-to-br ${variant.bg} border ${variant.border} hover:shadow-sm transition-all flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3.5">
                      <div className={`w-9 h-9 rounded-xl ${variant.iconBg} text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-black text-slate-900 leading-snug">
                        {pillar.title}
                      </h3>
                    </div>
                    <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                      <p>{pillar.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 05: KEY RESPONSIBILITIES AND DUTIES
            ══════════════════════════════════════════════════════════════════════ */}
        <section id="sec-responsibilities" className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-black text-sm">
                05
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900 tracking-tight">Key Responsibilities and Duties</h2>
                <p className="text-xs text-slate-500 font-medium">
                  The selected {posInfo.jobTitle || 'candidate'} will be responsible for the following core activities.
                </p>
              </div>
            </div>

            {/* Quick Search for Responsibilities */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search duties..."
                value={respSearchTerm}
                onChange={(e) => setRespSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-rose-400 focus:bg-white transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredResponsibilities.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-rose-300 hover:bg-white hover:shadow-2xs transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-700 font-black text-[11px] flex items-center justify-center shrink-0">
                      {item.id}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate">
                      {item.category || posInfo.department || 'IB Core'}
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-slate-900 leading-snug">{item.title}</h4>
                  <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 06 & 07: 50/50 BALANCED GRID (ELIGIBILITY & SKILLS)
            ══════════════════════════════════════════════════════════════════════ */}
        <div id="sec-eligibility" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* ─── LEFT COLUMN: 6. ELIGIBILITY CRITERIA ─── */}
          <section className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                  06
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">Eligibility Criteria</h2>
                  <p className="text-xs text-slate-500 font-medium">Educational qualifications, experience requirements, and age terms.</p>
                </div>
              </div>

              {/* A. Educational Qualifications */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 block">
                  A. Educational Qualifications
                </span>
                <div className="space-y-2">
                  {educationalQualifications.map((edu, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                      <GraduationCap className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-700 font-medium leading-relaxed">{edu}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* B. Experience & Internship Requirements */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 block">
                  B. Experience & Mandatory Internship Requirements
                </span>
                <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-700 shrink-0" />
                    <span className="text-xs font-black text-blue-950">
                      Experience: {jobData.eligibilityCriteria?.requiredExperience || '0–2 Years'}
                    </span>
                  </div>
                  <p className="text-xs text-blue-900 leading-relaxed font-medium">
                    {jobData.eligibilityCriteria?.internshipRequirement ||
                      jobData.eligibilityCriteria?.requiredExperience ||
                      "A minimum of 6 months of relevant internship or practical experience is mandatory. Valid verifiable documentation is required."}
                  </p>
                </div>
              </div>

              {/* C. Age Limits & Citizenship */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Age Criteria</span>
                  <p className="text-xs font-black text-slate-900 mt-1">{jobData.eligibilityCriteria?.ageLimit || 'Minimum 18 Years'}</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Nationality</span>
                  <p className="text-xs font-black text-slate-900 mt-1">{jobData.eligibilityCriteria?.nationality || 'Citizen of India'}</p>
                </div>
              </div>
            </div>

            {/* Interactive Self-Eligibility Check Widget */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-50/90 border border-slate-200">
              <span className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-2.5">
                Quick Self-Eligibility Check
              </span>
              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={eligibilityAnswers.degree}
                    onChange={(e) => setEligibilityAnswers((a) => ({ ...a, degree: e.target.checked }))}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="text-slate-700 font-medium">I hold the required educational qualifications</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={eligibilityAnswers.experience}
                    onChange={(e) => setEligibilityAnswers((a) => ({ ...a, experience: e.target.checked }))}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="text-slate-700 font-medium">I satisfy the experience / internship criteria for this role</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={eligibilityAnswers.age}
                    onChange={(e) => setEligibilityAnswers((a) => ({ ...a, age: e.target.checked }))}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="text-slate-700 font-medium">I am at least 18 years of age and an Indian citizen</span>
                </label>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500">Eligibility Status:</span>
                {isEligible ? (
                  <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-600">
                    <CheckCircle className="w-3.5 h-3.5" /> Eligible to Apply
                  </span>
                ) : (
                  <span className="text-xs font-bold text-amber-600">Please check all criteria</span>
                )}
              </div>
            </div>
          </section>

          {/* ─── RIGHT COLUMN: 7. SKILLS AND COMPETENCIES ─── */}
          <section className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-black text-sm">
                  07
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">Required Skills and Competencies</h2>
                  <p className="text-xs text-slate-500 font-medium">Technical technologies, computer proficiency, soft skills, and projects.</p>
                </div>
              </div>

              {/* A. Technical Skills */}
              <div className="space-y-2.5 mb-5">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 block flex items-center justify-between">
                  <span>A. Technical Skills</span>
                  <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">Core Tech</span>
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {technicalSkillsList.map((sk, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-blue-300 hover:bg-white transition"
                    >
                      <p className="font-black text-slate-900">{sk.name}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{sk.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* B. Computer Proficiency */}
              {computerProficiencyList.length > 0 && (
                <div className="space-y-2 mb-5 pt-4 border-t border-slate-100">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700 block">
                    B. Computer Proficiency & System Tools
                  </span>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    {computerProficiencyList.map((p, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                        <Terminal className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* C. Soft Skills & D. Additional Requirements */}
            <div className="pt-4 border-t border-slate-100 space-y-4">
              {softSkillsList.length > 0 && (
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-2">
                    C. Soft Skills & Key Attributes
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {softSkillsList.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700"
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {additionalRequirementsList.length > 0 && (
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-2">
                    D. Additional Requirements
                  </span>
                  <div className="space-y-1 text-xs text-slate-600">
                    {additionalRequirementsList.map((req, idx) => (
                      <p key={idx}>• {req}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 08, 09, 10, 11: WORK ENVIRONMENT, COMPENSATION, WHY JOIN, TRAINING
            ══════════════════════════════════════════════════════════════════════ */}
        <div id="sec-work-pay" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* ─── LEFT COLUMN: 8. WORK ENVIRONMENT & 9. COMPENSATION ─── */}
          <section className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* SECTION 08: WORK ENVIRONMENT */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-sm">
                  08
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">Work Environment</h2>
                  <p className="text-xs text-slate-500 font-medium">Structured on-site work hours, shifts, and weekly schedule.</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-3 italic">
                {workEnv.environmentNote || "The selected candidates will work in a structured, on-site professional environment."}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs mb-8">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Shift Type</span>
                  <p className="font-black text-slate-900 mt-1">{workEnv.shiftType || 'General Shift'}</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Working Days</span>
                  <p className="font-black text-slate-900 mt-1">{workEnv.workingDays || 'Mon to Sat'}</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Hours</span>
                  <p className="font-black text-slate-900 mt-1">{workEnv.workingHours || '9 AM – 7 PM'}</p>
                </div>
                <div className="p-3 rounded-2xl bg-rose-50/70 border border-rose-200">
                  <span className="text-[10px] font-bold text-rose-700 uppercase">Weekly Off</span>
                  <p className="font-black text-rose-950 mt-1">{workEnv.weeklyOff || 'Sunday'}</p>
                </div>
              </div>

              {/* SECTION 09: COMPENSATION & EMPLOYEE BENEFITS */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-sm">
                  09
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">Compensation & Employee Benefits</h2>
                  <p className="text-xs text-slate-500 font-medium">Annual CTC salary package, monthly salary, and statutory coverage.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200">
                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800">Annual CTC Package</span>
                  <p className="text-2xl font-black text-emerald-950 mt-1">
                    {compBenefits.annualCtcSalaryPackage || compBenefits.annualCtc || '₹2.40 LPA – ₹4.50 LPA'}
                  </p>
                  <p className="text-[11px] text-emerald-700 mt-0.5">Based on technical evaluation & assessment</p>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200">
                  <span className="text-[11px] font-black uppercase tracking-wider text-blue-800">Monthly Salary</span>
                  <p className="text-2xl font-black text-blue-950 mt-1">
                    {compBenefits.monthlySalary || '₹20,000 – ₹35,000'}
                  </p>
                  <p className="text-[11px] text-blue-700 mt-0.5">Approximate gross monthly compensation</p>
                </div>
              </div>

              {/* Statutory coverage */}
              <div className="grid grid-cols-2 gap-2 text-xs mb-5">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-800 block">PF Eligibility</span>
                    <span className="text-[10px] text-slate-500">Statutory Compliance</span>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-800 block">ESI Eligibility</span>
                    <span className="text-[10px] text-slate-500">Statutory Compliance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Other benefits tags */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                Included Benefits & Allowances
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(compBenefits.otherBenefits || ['Paid Leave', 'Performance Incentives', 'Annual Review', 'Career Growth', 'Certification Support']).map((b, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold">
                    + {b}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ─── RIGHT COLUMN: 10. WHY JOIN US & 11. TRAINING AND PROBATION ─── */}
          <section className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* SECTION 10: WHY JOIN US */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-sm">
                  10
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">Why Join Us</h2>
                  <p className="text-xs text-slate-500 font-medium">Growth ecosystem, live mission impact, and career development.</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {whyJoin.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100 text-xs">
                    <span className="font-black text-slate-900 block flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      {item.title}
                    </span>
                    <p className="text-slate-600 mt-1 leading-relaxed pl-5">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* ══════════════════════════════════════════════════════════════════
                  SECTION 11: TRAINING AND PROBATION (ALL 8 REQUIRED FIELDS)
                  ══════════════════════════════════════════════════════════════════ */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-sm">
                  11
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">Training and Probation</h2>
                  <p className="text-xs text-slate-500 font-medium">Orientation duration, stipend terms, and probation evaluation.</p>
                </div>
              </div>

              {/* ALL 8 FIELDS IN EXACT REQUIRED SEQUENCE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">

                {/* 1. Training Period */}
                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                  <span className="text-[10px] font-black uppercase text-amber-900 tracking-wider">
                    Training Period
                  </span>
                  <p className="font-black text-amber-950 text-sm">
                    {trainingProbation.trainingPeriod || "60 to 90 Days"}
                  </p>
                  <p className="text-[11px] text-amber-800 font-medium">
                    Structured orientation & domain onboarding program.
                  </p>
                </div>

                {/* 2. Training Stipend */}
                <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                  <span className="text-[10px] font-black uppercase text-emerald-900 tracking-wider">
                    Training Stipend
                  </span>
                  <p className="font-black text-emerald-950 text-sm">
                    {trainingProbation.trainingStipend || "No stipend provided during training period"}
                  </p>
                  <p className="text-[11px] text-emerald-800 font-medium">
                    Applicable training allowance policy during initial onboarding.
                  </p>
                </div>

                {/* 3. Training Salary */}
                <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-1">
                  <span className="text-[10px] font-black uppercase text-purple-900 tracking-wider">
                    Training Salary
                  </span>
                  <p className="font-black text-purple-950 text-sm">
                    {trainingProbation.trainingSalary || "No salary provided during training period"}
                  </p>
                  <p className="text-[11px] text-purple-800 font-medium">
                    Salary structure applicable during the training phase.
                  </p>
                </div>

                {/* 4. Probation Period */}
                <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-1">
                  <span className="text-[10px] font-black uppercase text-blue-900 tracking-wider">
                    Probation Period
                  </span>
                  <p className="font-black text-blue-950 text-sm">
                    {trainingProbation.probationPeriod || "6 Months to 1 Year"}
                  </p>
                  <p className="text-[11px] text-blue-700 font-medium">
                    Confirmed upon successful completion & performance review.
                  </p>
                </div>

                {/* 5. Probation Salary */}
                <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-1">
                  <span className="text-[10px] font-black uppercase text-purple-900 tracking-wider">
                    Probation Salary
                  </span>
                  <p className="font-black text-purple-950 text-sm">
                    {trainingProbation.probationSalary || "Applicable as per employment terms during probation"}
                  </p>
                  <p className="text-[11px] text-purple-800 font-medium">
                    Monthly compensation during the formal probation period.
                  </p>
                </div>

                {/* 6. Post-Probation Salary */}
                <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                  <span className="text-[10px] font-black uppercase text-emerald-900 tracking-wider">
                    Post-Probation Salary
                  </span>
                  <p className="font-black text-emerald-950 text-sm">
                    {trainingProbation.postProbationSalary || "Full CTC as per compensation structure upon confirmation"}
                  </p>
                  <p className="text-[11px] text-emerald-800 font-medium">
                    Full CTC compensation package upon successful confirmation.
                  </p>
                </div>

                {/* 7. Internship Period */}
                <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200 space-y-1">
                  <span className="text-[10px] font-black uppercase text-orange-900 tracking-wider">
                    Internship Period
                  </span>
                  <p className="font-black text-orange-950 text-sm">
                    {trainingProbation.internshipPeriod || trainingProbation.internshipDuration || "Not Applicable"}
                  </p>
                  <p className="text-[11px] text-orange-800 font-medium">
                    Prior internship requirement or internship terms.
                  </p>
                </div>

                {/* 8. Internship Stipend */}
                <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-1">
                  <span className="text-[10px] font-black uppercase text-teal-900 tracking-wider">
                    Internship Stipend
                  </span>
                  <p className="font-black text-teal-950 text-sm">
                    {trainingProbation.internshipStipend || "Not Applicable"}
                  </p>
                  <p className="text-[11px] text-teal-800 font-medium">
                    Applicable stipend policy for internship candidates.
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 text-center">
              Candidate onboarding is subject to complete background & statutory verification.
            </div>
          </section>

        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 12: RECRUITMENT AND SELECTION PROCESS (21 STAGES)
            ══════════════════════════════════════════════════════════════════════ */}
        <section id="sec-selection" className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-sm">
              12
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Recruitment and Selection Process</h2>
              <p className="text-xs text-slate-500 font-medium">Comprehensive evaluation methodology, 21 structured stages, and interview rounds.</p>
            </div>
          </div>

          {/* Overview text */}
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 mb-6">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {jobData.recruitmentProcess?.overview ||
                `The recruitment process is designed to assess candidates' technical knowledge, practical abilities, communication skills, and overall suitability for the ${posInfo.jobTitle || 'position'}.`}
            </p>
          </div>

          {/* Assessment Areas Pills */}
          <div className="mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-2.5">
              Comprehensive Assessment Areas
            </span>
            <div className="flex flex-wrap gap-2">
              {(jobData.recruitmentProcess?.assessmentAreas || [
                'Core Domain Fundamentals',
                'Technical Aptitude',
                'Practical Problem-Solving',
                'Workflow & Systems Assessment',
                'Group Discussion',
                'Technical Interview',
                'HR Round',
                'Personal Interview'
              ]).map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800 hover:border-blue-400 hover:bg-blue-50/50 transition"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Phase Filters for 21 Stages */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                Complete Selection Process — {recruitmentStages.length || 21} Stages
              </span>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                {filteredStages.length} Shown
              </span>
            </div>

            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              {['All', 'Foundation', 'Assessments', 'Interviews', 'Onboarding'].map((ph) => (
                <button
                  key={ph}
                  onClick={() => setActiveStagePhase(ph)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold cursor-pointer transition ${activeStagePhase === ph
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                >
                  {ph === 'All' ? 'All Stages' : ph}
                </button>
              ))}
            </div>
          </div>

          {/* 21 Stages Visual List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredStages.map((st) => (
              <div
                key={st.stage}
                className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-purple-300 hover:bg-white hover:shadow-2xs transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono font-black text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                      STAGE {String(st.stage).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] font-bold uppercase text-slate-400">
                      {st.phase}
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-slate-900 leading-snug">{st.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 13, 14, 15: DATES, REQUIRED DOCUMENTS & APPLICATION INFO
            ══════════════════════════════════════════════════════════════════════ */}
        <div id="sec-dates-docs" className="space-y-8">

          {/* SECTION 13: IMPORTANT DATES */}
          <section className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                13
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900 tracking-tight">Important Dates</h2>
                <p className="text-xs text-slate-500 font-medium">Key recruitment schedule, application closing date, and onboarding timelines.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-blue-800 tracking-wider">Application Start Date</span>
                  <p className="text-lg font-black text-slate-900 mt-0.5">{impDates.applicationStartDate || '16 September 2026'}</p>
                  <span className="text-xs text-blue-600 font-bold">Portal Live</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-50 to-white border border-rose-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-rose-800 tracking-wider">Application Closing Date</span>
                  <p className="text-lg font-black text-rose-950 mt-0.5">{impDates.applicationClosingDate || '30 September 2026'}</p>
                  <span className="text-xs text-rose-600 font-bold">Submission Deadline</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-emerald-800 tracking-wider">Expected Joining Period</span>
                  <p className="text-lg font-black text-emerald-950 mt-0.5">{impDates.expectedJoiningPeriod || '1 October 2026 – 15 October 2026'}</p>
                  <span className="text-xs text-emerald-600 font-bold">Corporate Induction</span>
                </div>
              </div>

            </div>
          </section>

          {/* SECTION 14: REQUIRED DOCUMENTS WITH INTERACTIVE CHECKLIST */}
          <section className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-black text-sm">
                  14
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">Required Documents</h2>
                  <p className="text-xs text-slate-500 font-medium">Mandatory documentation list with interactive readiness checklist (saved locally).</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                  {readyDocsCount}/{documentsList.length} Ready ({readinessPercent}%)
                </span>
                <button
                  type="button"
                  onClick={toggleAllDocs}
                  className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                >
                  {readyDocsCount === documentsList.length ? 'Deselect All' : 'Select All'}
                </button>
                <button
                  type="button"
                  onClick={resetAllDocs}
                  className="text-xs font-bold text-rose-500 hover:underline cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-4">
              Applicants must provide the following documents as applicable during the recruitment and verification process:
            </p>

            {/* Readiness Progress Bar */}
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mb-6">
              <div
                className="bg-gradient-to-r from-teal-500 to-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${readinessPercent}%` }}
              />
            </div>

            {/* Documents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {documentsList.map((doc) => {
                const isChecked = !!checkedDocs[doc.id];
                return (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => toggleDoc(doc.id)}
                    className={`text-left p-3.5 rounded-2xl border text-xs transition-all cursor-pointer flex items-start gap-3 ${isChecked
                      ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 shadow-2xs'
                      : doc.highlighted
                        ? 'bg-amber-50/70 border-amber-300 text-slate-900 hover:border-amber-400'
                        : 'bg-slate-50/70 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-white'
                      }`}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className={`font-bold leading-tight ${isChecked ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                          {doc.title}
                        </span>
                        {doc.mandatory && <span className="text-rose-500 font-bold shrink-0">*</span>}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{doc.desc}</p>
                      {doc.highlighted && (
                        <span className="inline-block text-[9px] font-black uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded mt-1.5">
                          * Mandatory Prerequisite
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* SECTION 15: APPLICATION INFORMATION */}
          <section className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-sm">
                15
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900 tracking-tight">Application Information</h2>
                <p className="text-xs text-slate-500 font-medium">Submission mode, application fee terms, and deadline.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Application Fee</span>
                <p className="text-lg font-black text-emerald-950 mt-1">{appInfo.applicationFee || 'No Application Fee'}</p>
                <span className="text-[11px] text-emerald-700">₹0 Mandatory Policy</span>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wider">Application Mode</span>
                <p className="text-lg font-black text-blue-950 mt-1">{appInfo.applicationMode || 'Online Application Form'}</p>
                <span className="text-[11px] text-blue-700">Digital Portal Only</span>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                <span className="text-[10px] font-bold text-rose-800 uppercase tracking-wider">Application Deadline</span>
                <p className="text-lg font-black text-rose-950 mt-1">{appInfo.applicationDeadline || '30 September 2026'}</p>
                <span className="text-[11px] text-rose-700">Strict Window</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
              {appInfo.instructions || 'Candidates are required to complete the online application form and provide the applicable information and supporting documents.'}
            </div>
          </section>

        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 16 & 17: CONTACT INFORMATION & IMPORTANT NOTICES
            ══════════════════════════════════════════════════════════════════════ */}
        <div id="sec-contact" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* SECTION 16: CONTACT INFORMATION */}
          <section className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                  16
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">Contact Information</h2>
                  <p className="text-xs text-slate-500 font-medium">Official recruitment enquiries and support desk.</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-4 font-medium">
                For recruitment-related information and enquiries, candidates may contact:
              </p>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-white to-blue-50/50 border border-indigo-200 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-base shadow-sm">
                    {contactInfo.contactPerson ? contactInfo.contactPerson.slice(0, 2).toUpperCase() : 'HR'}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900">
                      {contactInfo.contactPerson || 'Recruitment Cell'}
                    </h3>
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                      {contactInfo.designation || 'HR Manager'} &bull; Recruitment Division
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-indigo-100 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/70">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-indigo-600" />
                      <span className="text-slate-500 font-medium">Email Desk:</span>
                      <a
                        href={`mailto:${contactInfo.emailAddress || 'crrcfhr@gmail.com'}`}
                        className="font-bold text-indigo-700 hover:underline"
                      >
                        {contactInfo.emailAddress || 'crrcfhr@gmail.com'}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(contactInfo.emailAddress || 'crrcfhr@gmail.com', 'email')}
                      className="text-[11px] font-bold text-slate-500 hover:text-indigo-600 cursor-pointer"
                    >
                      {copiedKey === 'email' ? 'Copied' : 'Copy'}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/70">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span className="text-slate-500 font-medium">Contact Number:</span>
                      <a
                        href={`tel:${(contactInfo.contactNumber || '+918249333288').replace(/\s+/g, '')}`}
                        className="font-bold text-slate-900 hover:text-blue-600"
                      >
                        {contactInfo.contactNumber || '+91 82493 33288'}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(contactInfo.contactNumber || '+91 82493 33288', 'phone')}
                      className="text-[11px] font-bold text-slate-500 hover:text-emerald-600 cursor-pointer"
                    >
                      {copiedKey === 'phone' ? 'Copied' : 'Copy'}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/70">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-purple-600" />
                      <span className="text-slate-500 font-medium">Official Portal:</span>
                      <a
                        href={contactInfo.officialPortal || 'https://ibcs.co.in'}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-slate-900 hover:text-indigo-600"
                      >
                        {contactInfo.officialPortal || 'https://ibcs.co.in'}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(contactInfo.officialPortal || 'https://ibcs.co.in', 'portal')}
                      className="text-[11px] font-bold text-slate-500 hover:text-purple-600 cursor-pointer"
                    >
                      {copiedKey === 'portal' ? 'Copied' : 'Copy'}
                    </button>
                  </div>

                  <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-2.5 text-indigo-950">
                    <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <p className="text-[11px] leading-relaxed">
                      For application queries or assistance with document submission, please contact the recruitment desk during official business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Candidate support desk is available Monday to Saturday (9:00 AM – 7:00 PM).</span>
            </div>
          </section>

          {/* SECTION 17: IMPORTANT NOTICES AND INSTRUCTIONS */}
          <section className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-black text-sm">
                  17
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">Important Notices and Instructions</h2>
                  <p className="text-xs text-slate-500 font-medium">Statutory compliance, disclaimer, and special guidelines.</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs">
                {/* Equal Opportunity */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span className="font-black text-slate-900 uppercase tracking-wider text-[11px]">
                      Equal Opportunity Statement
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {impNotices.equalOpportunityStatement ||
                      "IB Cyber Security Private Limited provides equal employment opportunities based on talent, skills, and performance."}
                  </p>
                </div>

                {/* Recruitment Disclaimer */}
                <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertCircle className="w-4 h-4 text-rose-600" />
                    <span className="font-black text-rose-950 uppercase tracking-wider text-[11px]">
                      Recruitment Disclaimer
                    </span>
                  </div>
                  <p className="text-rose-900 leading-relaxed font-medium">
                    {impNotices.recruitmentDisclaimer ||
                      "No agency or individual is authorised to charge fees for recruitment at IB Cyber Security Private Limited."}
                  </p>
                </div>

                {/* Additional Instructions */}
                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Info className="w-4 h-4 text-amber-700" />
                    <span className="font-black text-amber-950 uppercase tracking-wider text-[11px]">
                      Additional Instructions
                    </span>
                  </div>
                  <ul className="space-y-1 text-amber-900 leading-relaxed font-medium list-disc pl-4">
                    {(impNotices.additionalInstructions || [
                      `A minimum of 6 months of relevant internship or practical experience is mandatory for ${posInfo.jobTitle || 'applicants'}.`,
                      'Background verification is required as part of the recruitment process.'
                    ]).map((instruction, idx) => (
                      <li key={idx}>{instruction}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Position Summary Recap */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-bold text-slate-700">
                {posInfo.jobTitle || 'Career Position'} — {posInfo.department || 'Technology'}
              </span>
              <span className="font-mono text-slate-500 font-bold">
                {posInfo.jobCode || jobId}
              </span>
            </div>
          </section>

        </div>

        {/* ─── UIVERSE PEARL WATER BUTTON (TAILWIND UTILITIES) ─── */}
        <div className="flex flex-col items-center justify-center pt-8 pb-12 relative z-20">
          <button
            onClick={handleProceed}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[radial-gradient(120%_120%_at_50%_15%,#3e26b8_0%,#271775_70%,#150942_100%)] px-8 sm:px-14 py-4 sm:py-6 text-white font-black text-lg sm:text-2xl shadow-[inset_0_0.35rem_0.9rem_rgba(255,255,255,0.5),inset_0_-0.15rem_0.4rem_rgba(0,0,0,0.5),inset_0_-0.4rem_0.9rem_rgba(255,255,255,0.35),0_2rem_2.8rem_rgba(79,57,246,0.4),0_0.8rem_1.2rem_-0.4rem_rgba(79,57,246,0.6)] hover:shadow-[inset_0_0.35rem_0.6rem_rgba(255,255,255,0.6),inset_0_-0.15rem_0.4rem_rgba(0,0,0,0.45),inset_0_-0.4rem_0.9rem_rgba(255,255,255,0.4),0_2.5rem_3.5rem_rgba(79,57,246,0.52),0_1rem_1.5rem_-0.4rem_rgba(79,57,246,0.7)] hover:-translate-y-0.5 active:translate-y-1 active:scale-[0.985] transition-all duration-300 cursor-pointer select-none max-w-[calc(100vw-2rem)] border-0 outline-none"
            type="button"
            aria-label="Apply Now"
          >
            {/* Water Liquid Wave Chamber */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none z-[1]" aria-hidden="true">
              <div className="wave-back absolute left-0 bottom-0 w-[250%] h-[60%] group-hover:h-[82%] pointer-events-none transition-all duration-700 ease-out" />
              <div className="wave-mid absolute left-0 bottom-0 w-[250%] h-[60%] group-hover:h-[82%] pointer-events-none transition-all duration-700 ease-out" />
              <div className="wave-front absolute left-0 bottom-0 w-[250%] h-[60%] group-hover:h-[82%] pointer-events-none transition-all duration-700 ease-out" />
              <div className="bubble-1 absolute bottom-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.95),rgba(255,255,255,0.25)_55%,transparent_100%)] shadow-[0_0_4px_rgba(255,255,255,0.7)] pointer-events-none z-[4]" />
              <div className="bubble-2 absolute bottom-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.95),rgba(255,255,255,0.25)_55%,transparent_100%)] shadow-[0_0_4px_rgba(255,255,255,0.7)] pointer-events-none z-[4]" />
              <div className="bubble-3 absolute bottom-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.95),rgba(255,255,255,0.25)_55%,transparent_100%)] shadow-[0_0_4px_rgba(255,255,255,0.7)] pointer-events-none z-[4]" />
            </div>

            {/* Inner Glass Glow & Curvature Highlights */}
            <div className="absolute -inset-x-[15%] bottom-[25%] -top-[100%] rounded-full bg-white/15 pointer-events-none z-[6] transition-transform duration-300 group-hover:-translate-y-[5%]" />
            <div className="absolute inset-x-[6%] top-[10%] bottom-[42%] rounded-t-[24px] bg-gradient-to-b from-white/50 via-white/10 to-transparent shadow-[inset_0_12px_10px_-10px_rgba(255,255,255,0.95)] pointer-events-none z-[7] transition-all duration-300 group-hover:opacity-60 group-hover:translate-y-[4%]" />

            {/* Label Content */}
            <div className="relative z-10 flex items-center gap-3 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-[4%] font-black text-lg sm:text-2xl tracking-wide">
              <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:rotate-45">✧</span>
              <span>Apply Now</span>
              <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:-rotate-45">✦</span>
            </div>
          </button>
        </div>

      </main>

    </div>
  );
}
