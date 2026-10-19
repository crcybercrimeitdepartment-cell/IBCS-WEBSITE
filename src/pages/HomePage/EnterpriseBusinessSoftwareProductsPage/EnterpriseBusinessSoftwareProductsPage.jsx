import React from 'react';
import { Home } from 'lucide-react';
import { cardsData } from './EnterpriseBusinessSoftwareProductsPageData.js';

const Card = ({ card }) => {
  return (
    <div className="relative w-full min-h-[420px] rounded-[32px] bg-gradient-to-br from-[#5A5A5A] to-[#2A2A2A] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
      {/* Ribbon Folds */}
      <div 
        className={`absolute top-[128px] -left-[16px] w-[16px] h-[16px] ${card.foldColor} rounded-bl-[3px]`}
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      />
      <div 
        className={`absolute -top-[16px] left-[128px] w-[16px] h-[16px] ${card.foldColor} rounded-tr-[3px]`}
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
      />

      {/* Ribbon Wrapper */}
      <div className="absolute -top-[16px] -left-[16px] w-[260px] h-[260px] overflow-hidden pointer-events-none rounded-tl-[32px] z-20">
        <div className={`absolute top-[52px] -left-[48px] w-[240px] py-2 bg-gradient-to-r ${card.ribbonFrom} ${card.ribbonTo} text-white text-center font-bold tracking-[0.25em] text-[15px] transform -rotate-45 shadow-[0_8px_15px_rgba(0,0,0,0.25)]`}>
          PREMIUM
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col p-8 pt-28 h-full relative z-10 text-white">
        <div className="text-8xl font-black absolute top-4 right-6 opacity-5 select-none tracking-tighter">
          {card.id}
        </div>
        <h3 className="text-2xl font-bold mb-4 leading-snug drop-shadow-md">
          {card.title}
        </h3>
        <p className="text-[14.5px] text-gray-300 leading-relaxed font-light text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default function EnterpriseBusinessSoftwareProductsPage({ onClose }) {
  const handleBack = () => {
    if (onClose) onClose();
    window.history.back();
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#EBF7F8] via-[#E7F3F5] to-[#DFEFF2] font-sans selection:bg-orange-500 selection:text-white pb-24">
      {/* Top Header Navigation buttons */}
      <div className="max-w-[1400px] mx-auto px-6 pt-6 flex items-center justify-start gap-3">
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

      {/* Header Section */}
      <div className="max-w-[1400px] mx-auto px-6 pt-10 md:pt-16 pb-12 md:pb-16 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#081E52] mb-6 tracking-tighter leading-[1.1] drop-shadow-sm px-2">
          Enterprise &amp; Business <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0FA4AF] via-[#006670] to-[#003135]">Software Products</span>
        </h1>
        <div className="text-gray-700 text-base md:text-lg leading-relaxed font-normal max-w-4xl space-y-6 px-4 text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
          <p>
            We develop software products designed to help businesses and organisations manage operations, information, workflows and digital processes. Our enterprise technology capabilities cover management systems, automation, analytics, communication, productivity and organisational software.
          </p>
          <p>
            Rather than focusing only on customised development, our product-led approach aims to create reusable and scalable software products that can serve multiple organisations and business environments. These products can be delivered through SaaS, licensing, subscriptions, enterprise deployment and other technology-product models.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 pt-4">
          {cardsData.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
