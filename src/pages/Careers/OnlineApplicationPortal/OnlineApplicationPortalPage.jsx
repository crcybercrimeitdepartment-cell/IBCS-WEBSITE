import React from 'react';
import { portalOptionsData } from './OnlineApplicationPortalPageData';
import PortalOptionCard from '../components/PortalOptionCard';

export default function OnlineApplicationPortalPage() {
  return (
    <div className="w-full max-w-7xl xl:max-w-[1380px] animate-fadeIn flex flex-col items-center">
      <div className="text-center mb-10 sm:mb-14 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Online Application{' '}
          <span className="text-[#D4AF37]">
            Portal
          </span>
        </h1>
        <p className="mt-3.5 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Comprehensive 30-category online application, certificate request, and registration services.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-9 xl:gap-11 justify-items-center pt-4 pb-14">
        {portalOptionsData.map((item, index) => (
          <PortalOptionCard
            key={item.step}
            step={item.step}
            title={item.title}
            description={item.description}
            fromColor={item.fromColor}
            toColor={item.toColor}
            iconName={item.iconName}
            onClick={() => { window.location.hash = '#coming-soon'; }}
            className="animate-stagger-card"
            style={{ animationDelay: `${index * 40}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
