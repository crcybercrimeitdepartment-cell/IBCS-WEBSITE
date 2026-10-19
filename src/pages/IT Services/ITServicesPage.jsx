import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Home, Sparkles, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

/* ── Lazy-loaded 20 Service Module Pages ── */
const SoftwareDevelopmentServices = lazy(() => import('./SoftwareDevelopmentServices/SoftwareDevelopmentServicesPage.jsx'));
const WebDevelopmentServices = lazy(() => import('./WebDevelopmentServices/WebDevelopmentServicesPage.jsx'));
const MobileApplicationDevelopmentServices = lazy(() => import('./MobileApplicationDevelopmentServices/MobileApplicationDevelopmentServicesPage.jsx'));
const CybersecurityServices = lazy(() => import('./CybersecurityServices/CybersecurityServicesPage.jsx'));
const ITConsultingServices = lazy(() => import('./ITConsultingServices/ITConsultingServicesPage.jsx'));
const CloudComputingServices = lazy(() => import('./CloudComputingServices/CloudComputingServicesPage.jsx'));
const DevOpsAutomationServices = lazy(() => import('./DevOpsAutomationServices/DevOpsAutomationServicesPage.jsx'));
const NetworkInfrastructureServices = lazy(() => import('./NetworkInfrastructureServices/NetworkInfrastructureServicesPage.jsx'));
const ITInfrastructureManagementServices = lazy(() => import('./ITInfrastructureManagementServices/ITInfrastructureManagementServicesPage.jsx'));
const DatabaseManagementServices = lazy(() => import('./DatabaseManagementServices/DatabaseManagementServicesPage.jsx'));
const AIMachineLearningServices = lazy(() => import('./AIMachineLearningServices/AIMachineLearningServicesPage.jsx'));
const DataAnalyticsBusinessIntelligenceServices = lazy(() => import('./DataAnalyticsBusinessIntelligenceServices/DataAnalyticsBusinessIntelligenceServicesPage.jsx'));
const UIUXDesignServices = lazy(() => import('./UIUXDesignServices/UIUXDesignServicesPage.jsx'));
const APIDevelopmentIntegrationServices = lazy(() => import('./APIDevelopmentIntegrationServices/APIDevelopmentIntegrationServicesPage.jsx'));
const QualityAssuranceSoftwareTestingServices = lazy(() => import('./QualityAssuranceSoftwareTestingServices/QualityAssuranceSoftwareTestingServicesPage.jsx'));
const TechnicalSupportITMaintenanceServices = lazy(() => import('./TechnicalSupportITMaintenanceServices/TechnicalSupportITMaintenanceServicesPage.jsx'));
const ITAuditComplianceServices = lazy(() => import('./ITAuditComplianceServices/ITAuditComplianceServicesPage.jsx'));
const DigitalForensicsIncidentResponseServices = lazy(() => import('./DigitalForensicsIncidentResponseServices/DigitalForensicsIncidentResponseServicesPage.jsx'));
const DataBackupDisasterRecoveryServices = lazy(() => import('./DataBackupDisasterRecoveryServices/DataBackupDisasterRecoveryServicesPage.jsx'));
const ITProcurementDeploymentServices = lazy(() => import('./ITProcurementDeploymentServices/ITProcurementDeploymentServicesPage.jsx'));

const serviceComponents = {
  '01': SoftwareDevelopmentServices,
  '02': WebDevelopmentServices,
  '03': MobileApplicationDevelopmentServices,
  '04': CybersecurityServices,
  '05': ITConsultingServices,
  '06': CloudComputingServices,
  '07': DevOpsAutomationServices,
  '08': NetworkInfrastructureServices,
  '09': ITInfrastructureManagementServices,
  '10': DatabaseManagementServices,
  '11': AIMachineLearningServices,
  '12': DataAnalyticsBusinessIntelligenceServices,
  '13': UIUXDesignServices,
  '14': APIDevelopmentIntegrationServices,
  '15': QualityAssuranceSoftwareTestingServices,
  '16': TechnicalSupportITMaintenanceServices,
  '17': ITAuditComplianceServices,
  '18': DigitalForensicsIncidentResponseServices,
  '19': DataBackupDisasterRecoveryServices,
  '20': ITProcurementDeploymentServices,
};

/* ── Gear-tooth path generator ── */
function gearPath(cx, cy, outerR, innerR, teeth, rotation = 0) {
  let d = '';
  const step = (Math.PI * 2) / teeth;
  const toothTipAngle = step * 0.25;
  const toothBaseAngle = step * 0.5;

  for (let i = 0; i < teeth; i++) {
    const centerAngle = i * step + rotation;
    const tipStart = centerAngle - toothTipAngle / 2;
    const tipEnd = centerAngle + toothTipAngle / 2;
    const baseStart = centerAngle - toothBaseAngle / 2;
    const baseEnd = centerAngle + toothBaseAngle / 2;

    const x1 = cx + innerR * Math.cos(baseStart);
    const y1 = cy + innerR * Math.sin(baseStart);
    const x2 = cx + outerR * Math.cos(tipStart);
    const y2 = cy + outerR * Math.sin(tipStart);
    const x3 = cx + outerR * Math.cos(tipEnd);
    const y3 = cy + outerR * Math.sin(tipEnd);
    const x4 = cx + innerR * Math.cos(baseEnd);
    const y4 = cy + innerR * Math.sin(baseEnd);

    if (i === 0) d += `M ${x1.toFixed(2)} ${y1.toFixed(2)} `;
    d += `L ${x2.toFixed(2)} ${y2.toFixed(2)} L ${x3.toFixed(2)} ${y3.toFixed(2)} L ${x4.toFixed(2)} ${y4.toFixed(2)} `;

    const nextBaseStart = (i < teeth - 1)
      ? (i + 1) * step + rotation - toothBaseAngle / 2
      : rotation - toothBaseAngle / 2;

    const x5 = cx + innerR * Math.cos(nextBaseStart);
    const y5 = cy + innerR * Math.sin(nextBaseStart);
    d += `A ${innerR} ${innerR} 0 0 1 ${x5.toFixed(2)} ${y5.toFixed(2)} `;
  }
  return d + 'Z';
}

/* ── Geometry ── */
const getCoords = (deg, r) => {
  const rad = (deg * Math.PI) / 180;
  return {
    x: 500 + r * Math.cos(rad),
    y: 300 + r * Math.sin(rad)
  };
};

/* ── Data (20 Items) ── */
const allItems = [
  // Page 1
  { id: '01', color: '#ef4444', label: 'Software Development\nServices', a: -135, side: 'left' },
  { id: '02', color: '#f97316', label: 'Web Development\nServices', a: -157.5, side: 'left' },
  { id: '03', color: '#f59e0b', label: 'Mobile Application\nDevelopment Services', a: 180, side: 'left' },
  { id: '04', color: '#10b981', label: 'Cybersecurity\nServices', a: 157.5, side: 'left' },
  { id: '05', color: '#06b6d4', label: 'IT Consulting\nServices', a: 135, side: 'left' },
  { id: '10', color: '#3b82f6', label: 'Database Management\nServices', a: -45, side: 'right' },
  { id: '09', color: '#6366f1', label: 'IT Infrastructure\nManagement Services', a: -22.5, side: 'right' },
  { id: '08', color: '#8b5cf6', label: 'Network Infrastructure\nServices', a: 0, side: 'right' },
  { id: '07', color: '#ec4899', label: 'DevOps & Automation\nServices', a: 22.5, side: 'right' },
  { id: '06', color: '#eab308', label: 'Cloud Computing\nServices', a: 45, side: 'right' },

  // Page 2
  { id: '11', color: '#14b8a6', label: 'AI & Machine\nLearning Services', a: -135, side: 'left' },
  { id: '12', color: '#84cc16', label: 'Data Analytics &\nBusiness Intelligence', a: -157.5, side: 'left' },
  { id: '13', color: '#22c55e', label: 'UI/UX Design\nServices', a: 180, side: 'left' },
  { id: '14', color: '#0ea5e9', label: 'API Development\n& Integration Services', a: 157.5, side: 'left' },
  { id: '15', color: '#d946ef', label: 'Quality Assurance\n& Software Testing', a: 135, side: 'left' },
  { id: '20', color: '#f43f5e', label: 'IT Procurement\n& Deployment Services', a: -45, side: 'right' },
  { id: '19', color: '#fbbf24', label: 'Data Backup &\nDisaster Recovery', a: -22.5, side: 'right' },
  { id: '18', color: '#34d399', label: 'Digital Forensics\n& Incident Response', a: 0, side: 'right' },
  { id: '17', color: '#818cf8', label: 'IT Audit &\nCompliance Services', a: 22.5, side: 'right' },
  { id: '16', color: '#a855f7', label: 'Technical Support\n& IT Maintenance', a: 45, side: 'right' },
];

/* ── Keyframe Animations for SVG Gears, Line Drawing & Pulse ── */
const animationStyles = `
  @keyframes spinClockwise { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes spinCounter { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
  @keyframes drawLine { 0% { stroke-dashoffset: 1000; opacity: 0; } 10% { opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 1; } }
  @keyframes popIn { 0% { transform: scale(0); opacity: 0; } 70% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
  @keyframes revealLeft { from { clip-path: inset(0 0 0 100%); } to { clip-path: inset(0 0 0 0); } }
  @keyframes revealRight { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
  @keyframes shootPulse { 0% { stroke-dashoffset: 200; opacity: 0; } 10% { opacity: 1; } 40%, 80% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0; } }
  
  .gear-1 { transform-origin: 44px 42px; animation: spinClockwise 14s linear infinite; }
  .gear-2 { transform-origin: 29px 22px; animation: spinCounter 10s linear infinite; }
  .gear-3 { transform-origin: 50px 18px; animation: spinClockwise 8s linear infinite; }
  .anim-draw-line { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: drawLine 1.2s cubic-bezier(0.22, 1, 0.36, 1) backwards; }
  .anim-pop-in { animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) backwards; }
  .anim-reveal-left { animation: revealLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards; }
  .anim-reveal-right { animation: revealRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards; }
  .anim-shooting-beam { stroke-dasharray: 200; stroke-dashoffset: 200; animation: shootPulse 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards; }

  /* Mobile Card Loading Animations: Title emerging out from icon */
  @keyframes mobileCardEntrance {
    0% {
      opacity: 0;
      transform: translateY(12px) scale(0.97);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes mobileIconPop {
    0% {
      opacity: 0;
      transform: scale(0.2) rotate(-22deg);
    }
    68% {
      opacity: 1;
      transform: scale(1.18) rotate(4deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes mobileTitleUnfurl {
    0% {
      opacity: 0;
      transform: translateX(-32px);
      clip-path: inset(0 100% 0 0);
    }
    40% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
      clip-path: inset(0 0% 0 0);
    }
  }

  @keyframes mobileChevronSlide {
    0% {
      opacity: 0;
      transform: translateX(-12px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .anim-mobile-card-entrance {
    animation: mobileCardEntrance 0.42s cubic-bezier(0.16, 1, 0.3, 1) both;
  }
  .anim-mobile-icon-pop {
    animation: mobileIconPop 0.48s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  }
  .anim-mobile-title-unfurl {
    animation: mobileTitleUnfurl 0.52s cubic-bezier(0.16, 1, 0.3, 1) both;
  }
  .anim-mobile-chevron-slide {
    animation: mobileChevronSlide 0.38s cubic-bezier(0.16, 1, 0.3, 1) both;
  }
`;

export default function ITServicesPage({ onClose }) {
  const getHashServiceId = () => {
    const hash = window.location.hash || '';
    const match = hash.match(/#it-services[/-](\d{2})/i);
    return match ? match[1] : null;
  };

  const [selectedServiceId, setSelectedServiceId] = useState(getHashServiceId);
  const [page, setPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const onHashChange = () => {
      setSelectedServiceId(getHashServiceId());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleBack = () => {
    if (selectedServiceId) {
      setSelectedServiceId(null);
      window.location.hash = '#it-services';
    } else if (window.history.length > 1) {
      window.history.back();
    } else if (onClose) {
      onClose();
    } else {
      window.location.hash = '#home';
    }
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const currentItems = allItems.slice(page * 10, (page + 1) * 10);
  const mobileSortedItems = [...currentItems].sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));

  const handleSelectService = (id) => {
    setSelectedServiceId(id);
    window.location.hash = `#it-services/${id}`;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  // Random active item effect
  useEffect(() => {
    setActiveIndex(null);
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        const rand = Math.floor(Math.random() * 10);
        setActiveIndex(rand);

        setTimeout(() => {
          setActiveIndex(null);
        }, 1500);
      }, 2500);
      return () => clearInterval(interval);
    }, 2500);
    return () => clearTimeout(timeout);
  }, [page]);

  const rArc = 160;
  const rPill = 275;

  if (selectedServiceId && serviceComponents[selectedServiceId]) {
    const ActiveComponent = serviceComponents[selectedServiceId];
    return (
      <Suspense
        fallback={
          <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#070e1c] text-white">
            <Loader2 className="w-10 h-10 text-cyan-400 animate-spin mb-4" />
            <span className="text-sm font-semibold tracking-wider text-slate-300">
              Loading IT Service Module...
            </span>
          </div>
        }
      >
        <ActiveComponent
          onClose={() => {
            setSelectedServiceId(null);
            window.location.hash = '#it-services';
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          }}
          onHome={() => {
            setSelectedServiceId(null);
            if (onClose) onClose();
            window.location.hash = '#home';
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
        />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eaf6ff] via-[#dff2ff] to-[#e6f4ff] text-slate-900 font-sans selection:bg-[#0066ff] selection:text-white pb-16 pt-3 overflow-x-hidden relative">
      <style>{animationStyles}</style>

      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-4 flex items-center justify-start gap-3 z-30">
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

      {/* Page Header Section */}
      <header className="w-full max-w-4xl mx-auto text-center px-4 sm:px-6 mb-3 sm:mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3 h-3 text-blue-600 animate-pulse" />
          <span>IBCS TECHNOLOGY CAPABILITIES</span>
        </div>
        <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-black text-[#081E52] tracking-tight mb-2">
          IT SERVICES
        </h1>
        <div className="h-0.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-2.5 shadow-sm" />
        <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
          Empowering your business with cutting-edge technology solutions. Explore our comprehensive range of IT services designed to drive innovation, enhance security, and accelerate growth.
        </p>
      </header>

      {/* ── Desktop & Tablet Interactive 3D Gear Hub (Hidden on small mobile screens for clean responsive layout) ── */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none hidden md:block">
        <div className="relative w-full max-w-[1100px] mx-auto aspect-[1000/600] min-h-[500px]" key={`bg-${page}`}>
          
          {/* Central SVG Graphic Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm" viewBox="0 0 1000 600">
            {/* White Circular Connecting Arcs */}
            <path
              d={`M ${getCoords(-45, rArc).x} ${getCoords(-45, rArc).y} A ${rArc} ${rArc} 0 0 1 ${getCoords(45, rArc).x} ${getCoords(45, rArc).y}`}
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
            />
            <path
              d={`M ${getCoords(-135, rArc).x} ${getCoords(-135, rArc).y} A ${rArc} ${rArc} 0 0 0 ${getCoords(135, rArc).x} ${getCoords(135, rArc).y}`}
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
            />

            {/* Connecting Colored Radial Lines and Orbit Dots */}
            {currentItems.map((item, i) => {
              const circleDelay = i * 0.15;
              const lineDelay = circleDelay + 0.15;
              const pArc = getCoords(item.a, rArc);
              const pPill = getCoords(item.a, rPill);
              const isActive = activeIndex === i;

              return (
                <g key={`l-${item.id}`}>
                  {/* Base Colored Connector Line */}
                  <line
                    x1={pArc.x}
                    y1={pArc.y}
                    x2={pPill.x}
                    y2={pPill.y}
                    stroke={item.color}
                    strokeWidth="4"
                    className="anim-draw-line"
                    style={{ animationDelay: `${lineDelay}s` }}
                  />

                  {/* Active Shooting Beam Effect */}
                  {isActive && (
                    <line
                      className="anim-shooting-beam"
                      x1={pArc.x}
                      y1={pArc.y}
                      x2={pPill.x}
                      y2={pPill.y}
                      stroke="#ffffff"
                      strokeWidth="6"
                      strokeLinecap="round"
                      style={{ filter: `drop-shadow(0 0 6px ${item.color})` }}
                    />
                  )}

                  {/* Radial Anchor Dot */}
                  <circle
                    cx={pArc.x}
                    cy={pArc.y}
                    r={isActive ? 10 : 7}
                    fill={isActive ? '#ffffff' : item.color}
                    className="anim-pop-in transition-all duration-300"
                    style={{
                      animationDelay: `${circleDelay}s`,
                      filter: isActive ? `drop-shadow(0 0 6px ${item.color})` : 'none'
                    }}
                  />
                </g>
              );
            })}

            {/* Center Main White Circle with Shadow */}
            <circle
              cx="500"
              cy="300"
              r="110"
              fill="#ffffff"
              stroke="#081E52"
              strokeWidth="3"
            />

            {/* Center Icon Illustration (Desktop Monitor + Animated Intermeshed Gears) */}
            <g transform="translate(420, 220) scale(1.6)">
              {/* Monitor Body */}
              <rect x="16" y="30" width="68" height="46" rx="4" stroke="#081E52" strokeWidth="3" fill="#ffffff" />
              {/* Monitor Screen Background */}
              <rect x="17.5" y="31.5" width="65" height="27" rx="2" fill="#eff6ff" />
              {/* Monitor Bezel Line */}
              <line x1="16" y1="60" x2="84" y2="60" stroke="#081E52" strokeWidth="3" />
              <circle cx="50" cy="68" r="2.5" fill="#3b82f6" stroke="#081E52" strokeWidth="2" />
              {/* Monitor Stand */}
              <line x1="42" y1="76" x2="42" y2="84" stroke="#081E52" strokeWidth="3" />
              <line x1="58" y1="76" x2="58" y2="84" stroke="#081E52" strokeWidth="3" />
              <line x1="36" y1="84" x2="64" y2="84" stroke="#081E52" strokeWidth="3" strokeLinecap="round" />

              {/* Big Gear - Royal Blue */}
              <g className="gear-1">
                <path d={gearPath(44, 42, 16, 11.5, 8, 0.2)} fill="#3b82f6" stroke="#081E52" strokeWidth="2.5" strokeLinejoin="round" />
                <circle cx="44" cy="42" r="3.5" fill="#ffffff" stroke="#081E52" strokeWidth="2.5" />
              </g>

              {/* Medium Gear - Vibrant Orange */}
              <g className="gear-2">
                <path d={gearPath(29, 22, 10, 7.5, 8, 0.5)} fill="#f97316" stroke="#081E52" strokeWidth="2.5" strokeLinejoin="round" />
                <circle cx="29" cy="22" r="2" fill="#ffffff" stroke="#081E52" strokeWidth="2.5" />
              </g>

              {/* Small Gear - Fuchsia Pink */}
              <g className="gear-3">
                <path d={gearPath(50, 18, 7.5, 5, 6, 0.1)} fill="#ec4899" stroke="#081E52" strokeWidth="2.5" strokeLinejoin="round" />
                <circle cx="50" cy="18" r="1.5" fill="#ffffff" stroke="#081E52" strokeWidth="2.5" />
              </g>
            </g>
          </svg>

          {/* Interactive Service Pill Tabs */}
          {currentItems.map((item, i) => {
            const circleDelay = i * 0.15;
            const textDelay = circleDelay + 0.25;
            const pPill = getCoords(item.a, rPill);
            const isActive = activeIndex === i;

            return (
              <div
                key={`pill-${item.id}`}
                onClick={() => {
                  setSelectedServiceId(item.id);
                  window.location.hash = `#it-services/${item.id}`;
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                }}
                className={`group absolute flex items-center h-[50px] cursor-pointer transition-all duration-300 ${
                  item.side === 'left'
                    ? '-translate-x-[calc(100%-25px)] -translate-y-1/2'
                    : '-translate-x-[25px] -translate-y-1/2'
                } ${isActive ? 'scale-105 z-20' : 'z-10 hover:scale-105 hover:z-20'}`}
                style={{
                  left: `${(pPill.x / 1000) * 100}%`,
                  top: `${(pPill.y / 600) * 100}%`,
                  '--item-color': item.color
                }}
              >
                {item.side === 'left' ? (
                  <>
                    <div
                      className="flex items-center bg-white h-[50px] rounded-l-[25px] -mr-[25px] pl-5 pr-[35px] shadow-[0_4px_15px_rgba(0,100,255,0.08)] z-10 anim-reveal-left transition-colors duration-300"
                      style={{ animationDelay: `${textDelay}s` }}
                    >
                      <span className="text-[13px] font-semibold text-slate-800 whitespace-pre-line leading-tight text-right transition-colors duration-300 group-hover:text-[var(--item-color)]">
                        {item.label}
                      </span>
                    </div>
                    <div
                      className="w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-lg font-bold shrink-0 z-20 shadow-[0_4px_10px_rgba(0,0,0,0.15)] anim-pop-in transition-transform duration-300 group-hover:scale-110"
                      style={{ animationDelay: `${circleDelay}s`, backgroundColor: item.color }}
                    >
                      {item.id}
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-lg font-bold shrink-0 z-20 shadow-[0_4px_10px_rgba(0,0,0,0.15)] anim-pop-in transition-transform duration-300 group-hover:scale-110"
                      style={{ animationDelay: `${circleDelay}s`, backgroundColor: item.color }}
                    >
                      {item.id}
                    </div>
                    <div
                      className="flex items-center bg-white h-[50px] rounded-r-[25px] -ml-[25px] pl-[35px] pr-5 shadow-[0_4px_15px_rgba(0,100,255,0.08)] z-10 anim-reveal-right transition-colors duration-300"
                      style={{ animationDelay: `${textDelay}s` }}
                    >
                      <span className="text-[13px] font-semibold text-slate-800 whitespace-pre-line leading-tight text-left transition-colors duration-300 group-hover:text-[var(--item-color)]">
                        {item.label}
                      </span>
                    </div>
                  </>
                )}
              </div>
            );
          })}

          {/* Center Pagination Widget */}
          <div className="absolute top-[78%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3.5 z-30 bg-[#f8fafc]/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.06)] border border-slate-200">
            <button
              type="button"
              onClick={() => setPage(0)}
              disabled={page === 0}
              className="bg-white border-0 cursor-pointer flex items-center justify-center w-7 h-7 rounded-full shadow-sm text-slate-900 transition-all duration-200 hover:enabled:bg-blue-600 hover:enabled:text-white hover:enabled:scale-110 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous page"
              title="Previous 10 Services"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[13px] font-extrabold text-slate-700 tracking-wider select-none font-mono">
              {page === 0 ? '01 - 10' : '11 - 20'} / 20
            </span>
            <button
              type="button"
              onClick={() => setPage(1)}
              disabled={page === 1}
              className="bg-white border-0 cursor-pointer flex items-center justify-center w-7 h-7 rounded-full shadow-sm text-slate-900 transition-all duration-200 hover:enabled:bg-blue-600 hover:enabled:text-white hover:enabled:scale-110 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next page"
              title="Next 10 Services"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Mobile Responsive Stage (< 768px: Animated Gear Hub + Sequential Capsule Cards) ── */}
      <section className="block md:hidden px-3 sm:px-6 max-w-md mx-auto w-full select-none">
        {/* 1. Animated Gear Hub (Compact Mobile Hero) */}
        <div className="relative w-[170px] h-[170px] mx-auto flex items-center justify-center my-1 select-none">
          {/* Concentric dashed orbit circles with colored satellite dots */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 170 170" fill="none">
            <circle cx="85" cy="85" r="70" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.85" />
            <circle cx="85" cy="85" r="80" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
            <circle cx="28" cy="42" r="3" fill="#3b82f6" />
            <circle cx="144" cy="48" r="3" fill="#f97316" />
            <circle cx="152" cy="112" r="3" fill="#ec4899" />
            <circle cx="118" cy="154" r="3" fill="#10b981" />
            <circle cx="32" cy="128" r="3" fill="#06b6d4" />
          </svg>

          {/* Central Disc with Monitor and Rotating Gears */}
          <div
            className="w-[130px] h-[130px] rounded-full bg-white z-10 flex items-center justify-center shadow-md border border-slate-200/90"
            style={{
              boxShadow: '0 8px 24px -4px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(226, 232, 240, 0.8)'
            }}
          >
            <svg className="w-[92px] h-[92px]" viewBox="0 0 100 100">
              <g transform="translate(0, 0)">
                {/* Monitor Body */}
                <rect x="16" y="24" width="68" height="46" rx="4" stroke="#081E52" strokeWidth="2.5" fill="#ffffff" />
                <rect x="17.5" y="25.5" width="65" height="27" rx="2" fill="#eff6ff" />
                <line x1="16" y1="54" x2="84" y2="54" stroke="#081E52" strokeWidth="2.5" />
                <circle cx="50" cy="62" r="2.2" fill="#3b82f6" stroke="#081E52" strokeWidth="1.8" />
                {/* Stand */}
                <line x1="42" y1="70" x2="42" y2="78" stroke="#081E52" strokeWidth="2.5" />
                <line x1="58" y1="70" x2="58" y2="78" stroke="#081E52" strokeWidth="2.5" />
                <line x1="36" y1="78" x2="64" y2="78" stroke="#081E52" strokeWidth="2.5" strokeLinecap="round" />

                {/* Big Gear - Royal Blue */}
                <g className="gear-1" style={{ transformOrigin: '44px 36px' }}>
                  <path d={gearPath(44, 36, 15, 11, 8, 0.2)} fill="#3b82f6" stroke="#081E52" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="44" cy="36" r="3" fill="#ffffff" stroke="#081E52" strokeWidth="2" />
                </g>

                {/* Medium Gear - Vibrant Orange */}
                <g className="gear-2" style={{ transformOrigin: '29px 18px' }}>
                  <path d={gearPath(29, 18, 9.5, 7, 8, 0.5)} fill="#f97316" stroke="#081E52" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="29" cy="18" r="1.8" fill="#ffffff" stroke="#081E52" strokeWidth="2" />
                </g>

                {/* Small Gear - Fuchsia Pink */}
                <g className="gear-3" style={{ transformOrigin: '50px 14px' }}>
                  <path d={gearPath(50, 14, 7, 4.5, 6, 0.1)} fill="#ec4899" stroke="#081E52" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="50" cy="14" r="1.3" fill="#ffffff" stroke="#081E52" strokeWidth="2" />
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* 2. Top Status / Filter Pill Bar */}
        <div className="flex items-center justify-between bg-white rounded-full px-3.5 py-1.5 my-2 border border-blue-200/60 shadow-2xs">
          <button
            type="button"
            onClick={() => setPage(0)}
            disabled={page === 0}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all disabled:opacity-40 bg-slate-100 hover:enabled:bg-blue-600 hover:enabled:text-white cursor-pointer"
          >
            <ChevronLeft className="w-3 h-3" />
            <span>01 - 10</span>
          </button>
          <span className="text-[11.5px] font-mono font-extrabold text-[#081E52]">
            {page === 0 ? 'Page 1 of 2' : 'Page 2 of 2'}
          </span>
          <button
            type="button"
            onClick={() => setPage(1)}
            disabled={page === 1}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all disabled:opacity-40 bg-slate-100 hover:enabled:bg-blue-600 hover:enabled:text-white cursor-pointer"
          >
            <span>11 - 20</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* 3. Sequentially Sorted Service Cards (01 to 10 or 11 to 20) with Card Loading Animation */}
        <div key={`m-card-list-p${page}`} className="flex flex-col gap-2 w-full my-2">
          {mobileSortedItems.map((item, index) => {
            const cardDelay = index * 0.045;
            const titleDelay = cardDelay + 0.08;
            const chevronDelay = titleDelay + 0.12;

            return (
              <button
                key={`m-card-p${page}-${item.id}`}
                type="button"
                onClick={() => handleSelectService(item.id)}
                className="anim-mobile-card-entrance flex items-center justify-between w-full p-1.5 pr-3.5 bg-white rounded-full border border-slate-200/90 shadow-2xs hover:bg-slate-50 transition-all active:scale-[0.98] cursor-pointer text-left group overflow-hidden"
                style={{
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  animationDelay: `${cardDelay}s`,
                }}
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1 overflow-hidden">
                  {/* Number Badge with Halo - Pops In */}
                  <div
                    className="anim-mobile-icon-pop w-[36px] h-[36px] rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 z-10"
                    style={{
                      backgroundColor: `${item.color}15`,
                      border: `1.5px solid ${item.color}35`,
                      animationDelay: `${cardDelay}s`,
                    }}
                  >
                    <div
                      className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-white font-extrabold text-xs shadow-xs"
                      style={{
                        backgroundColor: item.color,
                        boxShadow: `0 2px 6px ${item.color}40`,
                      }}
                    >
                      {item.id}
                    </div>
                  </div>

                  {/* Title - Unfurls / Emerges out from the Icon */}
                  <div
                    className="anim-mobile-title-unfurl min-w-0 flex-1 overflow-hidden"
                    style={{
                      animationDelay: `${titleDelay}s`,
                      transformOrigin: 'left center',
                    }}
                  >
                    <span className="block text-[12px] font-bold text-slate-800 leading-snug group-hover:text-blue-700 transition-colors truncate">
                      {item.label.replace('\n', ' ')}
                    </span>
                  </div>
                </div>

                {/* Right Chevron - Slides in */}
                <ChevronRight
                  size={15}
                  className="anim-mobile-chevron-slide shrink-0 text-slate-400 group-hover:text-blue-600 transition-colors ml-1"
                  strokeWidth={2.2}
                  style={{
                    animationDelay: `${chevronDelay}s`,
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* 4. Floating Bottom Pagination Dock */}
        <div className="w-full flex items-center justify-center mt-3 pb-2 z-30">
          <div
            className="inline-flex items-center gap-2.5 bg-white rounded-full px-3 py-1.5 shadow-md border border-slate-200"
            style={{
              boxShadow: '0 8px 24px -4px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(241, 245, 249, 0.9)',
            }}
          >
            <button
              type="button"
              onClick={() => {
                setPage(0);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={page === 0}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition-all text-xs font-bold text-slate-700 cursor-pointer shadow-xs"
            >
              <ChevronLeft size={13} strokeWidth={2.4} />
              <span>01 - 10</span>
            </button>

            <span className="text-xs font-extrabold text-[#081E52] px-1.5 font-mono">
              {page === 0 ? 'Page 1 of 2' : 'Page 2 of 2'}
            </span>

            <button
              type="button"
              onClick={() => {
                setPage(1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={page === 1}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-white font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer active:scale-95 hover:brightness-105"
              style={{
                background: page === 1 ? '#94a3b8' : 'linear-gradient(135deg, #1877F2 0%, #0c57c4 100%)',
                boxShadow: page === 1 ? 'none' : '0 4px 12px rgba(24, 119, 242, 0.35)',
              }}
            >
              <span>11 - 20</span>
              <ChevronRight size={13} strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
