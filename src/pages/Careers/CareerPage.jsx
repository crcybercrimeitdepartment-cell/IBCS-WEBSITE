import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import { careerCardsData, careersPageDescription } from './CareerPageData';
import StatCard from './components/StatCard';

// Modular Level 2 Page Imports
import CurrentVacancyPage from './CurrentVacancy/CurrentVacancyPage';
import RecruitmentRulesAndPoliciesPage from './RecruitmentRulesAndPolicies/RecruitmentRulesAndPoliciesPage';
import DocumentVerificationPage from './DocumentVerification/DocumentVerificationPage';
import DepartmentPage from './Department/DepartmentPage';
import OnlineApplicationPortalPage from './OnlineApplicationPortal/OnlineApplicationPortalPage';
import ComingSoonPage from '../../components/ComingSoonPage';

function getViewFromHash() {
  const rawHash = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '').toLowerCase();
  const hash = rawHash.split('?')[0];

  const currentVacancySubroutes = [
    'job-vacancy', 'job', 
    'full-time', 'fulltime', 
    'part-time', 'parttime', 
    'internship', 'intern', 
    'remote-job', 'remote', 
    'post-vacancy', 'post',
    'vacancy-card-1', 'vacancy-card-2',
    'job-detail-preview', 'job-preview'
  ];

  if (currentVacancySubroutes.includes(hash)) {
    return { main: 'vacancies', sub: hash };
  }

  if (hash.startsWith('vacancies/')) {
    const sub = hash.replace('vacancies/', '');
    return { main: 'vacancies', sub };
  }

  if (hash === 'vacancies' || hash === 'current-vacancies') {
    return { main: 'vacancies', sub: null };
  }
  if (hash === 'policies' || hash === 'recruitment-policies' || hash === 'rules') {
    return { main: 'policies', sub: null };
  }
  if (hash === 'verification' || hash === 'document-verification') {
    return { main: 'verification', sub: null };
  }
  if (hash === 'portal' || hash === 'online-portal' || hash === 'online-application-portal') {
    return { main: 'portal', sub: null };
  }
  if (hash === 'advertisements' || hash === 'recruitment-advertisements' || hash === 'advertisement') {
    return { main: 'advertisements', sub: null };
  }
  if (hash === 'press' || hash === 'press-release' || hash === 'notices') {
    return { main: 'press', sub: null };
  }
  if (hash === 'status' || hash === 'application-status' || hash === 'check-status') {
    return { main: 'status', sub: null };
  }
  if (hash === 'resume' || hash === 'submit-resume') {
    return { main: 'resume', sub: null };
  }
  if (hash === 'department' || hash === 'departments') {
    return { main: 'department', sub: null };
  }

  return { main: 'home', sub: null };
}

export default function CareerPage({ onClose }) {
  const [routeState, setRouteState] = useState(getViewFromHash);

  const currentView = routeState.main;
  const currentSubRoute = routeState.sub;

  const handleBackToSite = () => {
    if (onClose) {
      onClose();
    } else {
      window.location.hash = '#home';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateTo = (view, sub = null) => {
    setRouteState({ main: view, sub });
    if (view === 'home') {
      window.location.hash = '#careers';
    } else if (sub) {
      window.location.hash = `#/${sub}`;
    } else {
      window.location.hash = `#/${view}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (currentView === 'vacancies' && currentSubRoute) {
      navigateTo('vacancies', null);
    } else if (currentView !== 'home') {
      navigateTo('home');
    } else {
      handleBackToSite();
    }
  };

  const handleHome = () => {
    if (onClose) {
      onClose();
    }
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      setRouteState(getViewFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const isFullWidthVacancyView =
    currentView === 'vacancies' &&
    ['job-vacancy', 'job', 'full-time', 'fulltime', 'part-time', 'parttime', 'remote-job', 'remote', 'job-detail-preview', 'job-preview'].includes(currentSubRoute);

  if (isFullWidthVacancyView) {
    return (
      <div className="w-full min-h-screen bg-white p-0 m-0 overflow-x-hidden text-slate-900">
        <CurrentVacancyPage
          subRoute={currentSubRoute}
          onNavigate={(target) => {
            if (['job-vacancy', 'full-time', 'part-time', 'internship', 'remote-job', 'post-vacancy', 'vacancy-card-1', 'vacancy-card-2'].includes(target)) {
              navigateTo('vacancies', target);
            } else {
              navigateTo(target);
            }
          }}
          onBack={handleBack}
          onHome={handleHome}
        />
      </div>
    );
  }

  const handleCardClick = (card) => {
    if (['advertisements', 'press', 'status', 'resume'].includes(card.id)) {
      window.location.hash = `#/${card.id}`;
      return;
    }
    if (card.view) {
      navigateTo(card.view);
    }
  };

  return (
    <div className="min-h-screen bg-[#eceff1] flex flex-col items-center justify-start pt-6 sm:pt-8 pb-16 px-4 sm:px-8 lg:px-12 text-slate-900">
      {/* Global Top Header Navigation Bar (Site-wide Back & Home buttons) */}
      <div className="w-full max-w-7xl xl:max-w-[1380px] flex items-center justify-between mb-6 pb-4 border-b border-slate-300/60 z-50">
        <div className="flex items-center gap-3">
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
      </div>

      {/* Embedded Animations and Keyframes */}
      <style>{`
        @keyframes border-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-border-spin {
          animation: border-spin 6s linear infinite;
        }

        @keyframes card-entrance {
          from {
            opacity: 0;
            transform: translateY(28px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-card-entrance {
          animation: card-entrance 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        @keyframes dash-flow {
          to {
            stroke-dashoffset: -32;
          }
        }
        .animate-dash-flow {
          animation: dash-flow 1.4s linear infinite;
        }

        @keyframes beam-travel {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-beam-travel {
          animation: beam-travel 1.8s ease-in-out infinite;
        }

        @keyframes beam-travel-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-200%); }
        }
        .animate-beam-travel-left {
          animation: beam-travel-left 1.8s ease-in-out infinite;
        }

        @keyframes beam-travel-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-beam-travel-vertical {
          animation: beam-travel-vertical 1.8s ease-in-out infinite;
        }

        @keyframes arrow-thrust {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-arrow-thrust {
          animation: arrow-thrust 1.4s ease-in-out infinite;
        }

        @keyframes arrow-thrust-left {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-4px); }
        }
        .animate-arrow-thrust-left {
          animation: arrow-thrust-left 1.4s ease-in-out infinite;
        }

        @keyframes arrow-thrust-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        .animate-arrow-thrust-down {
          animation: arrow-thrust-down 1.4s ease-in-out infinite;
        }

        @keyframes arrow-dash-loop {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -20; }
        }
        .arrow-path-anim {
          stroke-dasharray: 6 4;
          animation: arrow-dash-loop 1.2s linear infinite;
        }
        .group:hover .arrow-path-anim {
          animation-duration: 0.6s;
        }

        .arrow-head-top {
          offset-path: path("M 110 14 L 285 14 A 45 45 0 0 1 330 59 L 330 175");
          offset-distance: 100%;
          offset-rotate: auto;
        }
        .arrow-head-bot {
          offset-path: path("M 14 205 L 14 365 A 55 55 0 0 0 69 420 L 205 420");
          offset-distance: 100%;
          offset-rotate: auto;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }

        @keyframes stagger-card {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-stagger-card {
          animation: stagger-card 0.5s ease-out forwards;
        }
      `}</style>

      {/* Level 2 Sub-Page Views */}
      {currentView === 'vacancies' && (
        <CurrentVacancyPage 
          subRoute={currentSubRoute} 
          onNavigate={(target) => {
            if (['job-vacancy', 'full-time', 'part-time', 'internship', 'remote-job', 'post-vacancy', 'vacancy-card-1', 'vacancy-card-2'].includes(target)) {
              navigateTo('vacancies', target);
            } else {
              navigateTo(target);
            }
          }} 
        />
      )}

      {currentView === 'policies' && <RecruitmentRulesAndPoliciesPage />}
      {currentView === 'verification' && <DocumentVerificationPage />}
      {currentView === 'department' && <DepartmentPage />}
      {currentView === 'portal' && <OnlineApplicationPortalPage />}
      {currentView === 'advertisements' && <ComingSoonPage title="Recruitment Advertisement" categoryTitle="Careers" />}
      {currentView === 'press' && <ComingSoonPage title="Press Releases and Notices" categoryTitle="Careers" />}
      {currentView === 'status' && <ComingSoonPage title="Check Application Status" categoryTitle="Careers" />}
      {currentView === 'resume' && <ComingSoonPage title="Submit Resume" categoryTitle="Careers" />}

      {/* Level 1 Parent Overview View (Exact 8 Cards) */}
      {currentView === 'home' && (
        <>
          <div className="text-center mb-10 sm:mb-12 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Careers at{' '}
              <span className="text-[#081E52]">
                IBCS
              </span>
            </h1>
            <p className="mt-3.5 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {careersPageDescription}
            </p>
          </div>

          <div className="w-full max-w-7xl xl:max-w-[1380px] rounded-3xl sm:rounded-[36px] bg-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-300/40 border border-slate-200/80">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 justify-items-center">
              {careerCardsData.map((card, index) => (
                <StatCard
                  key={card.id || index}
                  title={card.title}
                  description={card.description}
                  iconName={card.iconName}
                  iconColor={card.iconColor}
                  blobColor={card.blobColor}
                  onClick={() => handleCardClick(card)}
                  className="animate-stagger-card"
                  style={{ animationDelay: `${index * 60}ms` }}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export const Carrers = CareerPage;
