import React from 'react';
import { currentVacanciesData } from './CurrentVacancyPageData';
import StatCard from '../components/StatCard';
import JobVacancyPage from './JobVacancy/JobVacancyPage';
import FullTimePage from './FullTime/FullTimePage';
import PartTimePage from './PartTime/PartTimePage';
import InternshipPage from './Internship/InternshipPage';
import RemoteJobPage from './RemoteJob/RemoteJobPage';
import PostVacancyPage from './PostVacancy/PostVacancyPage';
import VacancyCard1Page from './VacancyCard1/VacancyCard1Page';
import VacancyCard2Page from './VacancyCard2/VacancyCard2Page';

export default function CurrentVacancyPage({ subRoute, onNavigate, onBack, onHome }) {
  if (subRoute === 'job-vacancy' || subRoute === 'job') {
    return <JobVacancyPage onNavigate={onNavigate} onBack={onBack} onHome={onHome} />;
  }
  if (subRoute === 'full-time' || subRoute === 'fulltime') {
    return <FullTimePage onNavigate={onNavigate} onBack={onBack} onHome={onHome} />;
  }
  if (subRoute === 'part-time' || subRoute === 'parttime') {
    return <PartTimePage onNavigate={onNavigate} onBack={onBack} onHome={onHome} />;
  }
  if (subRoute === 'internship' || subRoute === 'intern') {
    return <InternshipPage onNavigate={onNavigate} />;
  }
  if (subRoute === 'remote-job' || subRoute === 'remote') {
    return <RemoteJobPage onNavigate={onNavigate} onBack={onBack} onHome={onHome} />;
  }
  if (subRoute === 'post-vacancy' || subRoute === 'post') {
    return <PostVacancyPage onNavigate={onNavigate} />;
  }
  if (subRoute === 'vacancy-card-1') {
    return <VacancyCard1Page onNavigate={onNavigate} />;
  }
  if (subRoute === 'vacancy-card-2') {
    return <VacancyCard2Page onNavigate={onNavigate} />;
  }

  return (
    <div className="w-full max-w-7xl xl:max-w-[1380px] animate-fadeIn flex flex-col items-center">
      <div className="text-center mb-10 sm:mb-12 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Current{' '}
          <span className="text-[#D4AF37]">
            Vacancies
          </span>
        </h1>
        <p className="mt-3.5 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          Click any option to explore specific recruitment categories and roles.
        </p>
      </div>

      <div className="w-full rounded-3xl sm:rounded-[36px] bg-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-300/40 border border-slate-200/80">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 justify-items-center">
          {currentVacanciesData.map((item, index) => (
            <StatCard
              key={item.id}
              title={item.title}
              description={item.description}
              iconName={item.iconName}
              iconColor={item.iconColor}
              blobColor={item.blobColor}
              onClick={item.view ? () => onNavigate?.(item.view) : undefined}
              className="animate-stagger-card"
              style={{ animationDelay: `${index * 80}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
