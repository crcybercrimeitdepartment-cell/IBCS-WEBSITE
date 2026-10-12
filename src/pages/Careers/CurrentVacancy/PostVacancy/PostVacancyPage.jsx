import React from 'react';
import { postVacancyPageData } from './PostVacancyPageData';
import StatCard from '../../components/StatCard';

export default function PostVacancyPage() {
  return (
    <div className="w-full max-w-7xl xl:max-w-[1380px] animate-fadeIn flex flex-col items-center">
      <div className="text-center mb-10 sm:mb-12 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          {postVacancyPageData.title}
        </h1>
        <p className="mt-3.5 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          {postVacancyPageData.description}
        </p>
      </div>

      <div className="w-full rounded-3xl sm:rounded-[36px] bg-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-300/40 border border-slate-200/80 flex justify-center">
        <StatCard
          title={postVacancyPageData.title}
          description={postVacancyPageData.description}
          iconName={postVacancyPageData.iconName}
          iconColor={postVacancyPageData.iconColor}
          blobColor={postVacancyPageData.blobColor}
        />
      </div>
    </div>
  );
}
