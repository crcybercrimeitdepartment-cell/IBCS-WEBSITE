import React from 'react';
import { verificationCardsData } from './DocumentVerificationPageData';
import DocumentVerificationCard from '../components/DocumentVerificationCard';

export default function DocumentVerificationPage() {
  return (
    <div className="w-full max-w-7xl xl:max-w-[1380px] animate-fadeIn flex flex-col items-center">
      <div className="text-center mb-10 sm:mb-14 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Document{' '}
          <span className="text-[#D4AF37]">
            Verification
          </span>{' '}
          Department
        </h1>
        <p className="mt-3.5 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Comprehensive 24-point credential, legal, and institutional verification services.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 xl:gap-9 justify-items-center">
        {verificationCardsData.map((item, index) => (
          <DocumentVerificationCard
            key={item.step}
            step={item.step}
            title={item.title}
            description={item.description}
            themeGradient={item.themeGradient}
            badgeGradient={item.badgeGradient}
            circleBg={item.circleBg}
            circleShadow={item.circleShadow}
            outerShadow={item.outerShadow}
            iconName={item.iconName}
            onClick={() => { window.location.hash = '#coming-soon'; }}
            className="animate-stagger-card"
            style={{ animationDelay: `${index * 45}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
