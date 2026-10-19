import React from 'react';
import { recruitmentCardsData } from './RecruitmentRulesAndPoliciesPageData';
import RecruitmentCard from '../components/RecruitmentCard';

export default function RecruitmentRulesAndPoliciesPage() {
  return (
    <div className="w-full max-w-7xl xl:max-w-[1440px] animate-fadeIn flex flex-col items-center">
      <div className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto pt-2 sm:pt-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3.5">
          <span className="text-[#081E52]">Recruitment </span>
          <span className="text-[#D4AF37]">
            Policies
          </span>
        </h1>

        <div className="flex items-center justify-center gap-1.5 mb-4">
          <div className="h-1 w-12 rounded-full bg-[#D4AF37]" />
          <div className="h-1 w-4 rounded-full bg-[#E5C158]" />
          <div className="h-1 w-2 rounded-full bg-[#081E52]" />
        </div>
        
        <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
          Explore our comprehensive recruitment protocols, statutory standards, and step-by-step career progression frameworks.
          <br className="hidden sm:inline" />
          {' '}Designed to ensure transparency, equal opportunity, and merit-based governance across all employment cadres.
        </p>
      </div>

      {/* 16 Cards Responsive 4x4 Matrix */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 lg:gap-x-9 lg:gap-y-16 pt-4 pb-8">
        {recruitmentCardsData.map((card, index) => (
          <RecruitmentCard
            key={card.id}
            item={card}
            index={index}
            totalCards={recruitmentCardsData.length}
          />
        ))}
      </div>
    </div>
  );
}
