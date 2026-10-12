import React, { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  Copy, 
  ShieldCheck, 
  Info, 
  FileText, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft, 
  ArrowRight, 
  Download, 
  ExternalLink 
} from 'lucide-react';
import { recruitmentCardsData } from './RecruitmentRulesAndPoliciesPageData';
import RecruitmentCard from '../components/RecruitmentCard';

export default function RecruitmentRulesAndPoliciesPage() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [copied, setCopied] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCard(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentIndex = selectedCard 
    ? recruitmentCardsData.findIndex(c => c.id === selectedCard.id) 
    : -1;

  const handlePrevCard = () => {
    if (currentIndex > 0) {
      setSelectedCard(recruitmentCardsData[currentIndex - 1]);
    } else {
      setSelectedCard(recruitmentCardsData[recruitmentCardsData.length - 1]);
    }
  };

  const handleNextCard = () => {
    if (currentIndex < recruitmentCardsData.length - 1) {
      setSelectedCard(recruitmentCardsData[currentIndex + 1]);
    } else {
      setSelectedCard(recruitmentCardsData[0]);
    }
  };

  const triggerAction = (actionName) => {
    setNotification(`Action initiated: "${actionName}"`);
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const copyRefNumber = () => {
    if (selectedCard) {
      navigator.clipboard?.writeText(`CRCCF-2026-POL-${selectedCard.id}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-7xl xl:max-w-[1440px] animate-fadeIn flex flex-col items-center">
      <div className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto pt-2 sm:pt-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3.5">
          <span className="text-white">Recruitment </span>
          <span className="text-[#D4AF37]">
            Policies
          </span>
        </h1>

        <div className="flex items-center justify-center gap-1.5 mb-4">
          <div className="h-1 w-12 rounded-full bg-[#D4AF37]" />
          <div className="h-1 w-4 rounded-full bg-[#E5C158]" />
          <div className="h-1 w-2 rounded-full bg-[#FFF8DC]" />
        </div>
        
        <p className="text-gray-300 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
          Explore our comprehensive recruitment protocols, statutory standards, and step-by-step career progression frameworks.
          <br className="hidden sm:inline" />
          {' '}Designed to ensure transparency, equal opportunity, and merit-based governance across all employment cadres.
        </p>
      </div>

      {notification && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 animate-bounce">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium">{notification}</span>
          <button 
            onClick={() => setNotification(null)}
            className="text-slate-400 hover:text-white ml-2 text-xs"
          >
            ✕
          </button>
        </div>
      )}

      {/* 16 Cards Responsive 4x4 Matrix */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 lg:gap-x-9 lg:gap-y-16 pt-4 pb-8">
        {recruitmentCardsData.map((card, index) => (
          <RecruitmentCard
            key={card.id}
            item={card}
            index={index}
            totalCards={recruitmentCardsData.length}
            onSelect={(item) => {
              setSelectedCard(item);
              setActiveTab('overview');
            }}
          />
        ))}
      </div>

      {/* Interactive Detail Modal */}
      {selectedCard && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-[#040A1A]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedCard(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-[#081E52] rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-[#D4AF37]/30 overflow-hidden text-left my-6 transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="p-6 sm:p-8 text-white relative shadow-md bg-[#040A1A] border-b border-[#D4AF37]/30"
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 text-white flex items-center justify-center transition-all hover:rotate-90 shadow-sm cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="font-mono text-xs font-black px-3 py-1 rounded-lg bg-[#D4AF37] text-[#040A1A] shadow-sm">
                  STEP #{selectedCard.id}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#081E52] text-[#FFF8DC] border border-[#D4AF37]/30">
                  {selectedCard.statusBadge}
                </span>
                <span className="text-xs text-gray-400">• Updated: {selectedCard.lastUpdated}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 mb-2 leading-tight">
                {selectedCard.title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
                {selectedCard.details.headline}
              </p>

              <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-gray-400">
                <span>Reference: CRCCF-2026-POL-{selectedCard.id}</span>
                <button 
                  onClick={copyRefNumber}
                  className="flex items-center gap-1 text-[#D4AF37] hover:text-[#E5C158] bg-[#081E52] px-2 py-1 rounded border border-[#D4AF37]/30 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Ref'}</span>
                </button>
              </div>
            </div>

            <div className="px-6 sm:px-8 border-b border-[#D4AF37]/30 bg-[#040A1A] flex gap-4 text-xs font-semibold text-gray-400">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-3.5 border-b-2 transition-colors cursor-pointer ${activeTab === 'overview' ? 'border-[#D4AF37] text-[#D4AF37] font-bold' : 'border-transparent hover:text-[#FFF8DC]'}`}
              >
                Overview & Metrics
              </button>
              <button
                onClick={() => setActiveTab('highlights')}
                className={`py-3.5 border-b-2 transition-colors cursor-pointer ${activeTab === 'highlights' ? 'border-[#D4AF37] text-[#D4AF37] font-bold' : 'border-transparent hover:text-[#FFF8DC]'}`}
              >
                Key Provisions & Standards
              </button>
              <button
                onClick={() => setActiveTab('steps')}
                className={`py-3.5 border-b-2 transition-colors cursor-pointer ${activeTab === 'steps' ? 'border-[#D4AF37] text-[#D4AF37] font-bold' : 'border-transparent hover:text-[#FFF8DC]'}`}
              >
                Procedure & Implementation
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              {activeTab === 'overview' && (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {selectedCard.details.stats.map((stat, idx) => (
                      <div key={idx} className="bg-[#040A1A]/90 border border-[#D4AF37]/25 rounded-2xl p-3.5 text-center shadow-sm">
                        <p className="text-gray-400 text-[11px] font-semibold uppercase tracking-wider mb-1">
                          {stat.label}
                        </p>
                        <p className="text-[#D4AF37] font-black text-sm sm:text-base">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#040A1A]/90 rounded-2xl p-5 border border-[#D4AF37]/25">
                    <div className="flex items-center gap-2 mb-2 text-white font-bold text-sm">
                      <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                      <span>Executive Policy Summary</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedCard.details.summary}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#040A1A]/90 border border-[#D4AF37]/25 text-xs text-[#FFF8DC] flex items-start gap-3">
                    <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">Applicability Scope: </span>
                      {selectedCard.details.eligibilitySummary}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'highlights' && (
                <div>
                  <h4 className="font-bold text-white text-sm mb-3.5 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#D4AF37]" />
                    Statutory Highlights & Framework Mandates
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCard.details.keyHighlights.map((highlight, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#040A1A]/90 border border-[#D4AF37]/25 shadow-sm hover:border-[#D4AF37]/50 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-200 font-medium leading-snug">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'steps' && (
                <div>
                  <h4 className="font-bold text-white text-sm mb-3.5 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                    Step-by-Step Implementation Flow
                  </h4>
                  <div className="space-y-3">
                    {selectedCard.details.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-[#040A1A]/90 border border-[#D4AF37]/25">
                        <span className="w-7 h-7 rounded-xl bg-[#D4AF37] text-[#040A1A] font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          {idx + 1}
                        </span>
                        <div className="text-xs sm:text-sm text-gray-200 leading-relaxed pt-0.5">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 sm:p-6 bg-[#040A1A] border-t border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                <button
                  onClick={handlePrevCard}
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-[#081E52] border border-[#D4AF37]/40 hover:bg-[#0c2b7a] rounded-xl flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Prev Policy</span>
                </button>
                <span className="text-xs font-mono font-bold text-[#D4AF37]">
                  {selectedCard.id} / {String(recruitmentCardsData.length).padStart(2, '0')}
                </span>
                <button
                  onClick={handleNextCard}
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-[#081E52] border border-[#D4AF37]/40 hover:bg-[#0c2b7a] rounded-xl flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                >
                  <span>Next Policy</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => triggerAction(selectedCard.details.secondaryAction)}
                  className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-bold text-white bg-[#081E52] border border-[#D4AF37]/40 hover:bg-[#0c2b7a] rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{selectedCard.details.secondaryAction}</span>
                </button>

                <button
                  onClick={() => triggerAction(selectedCard.details.primaryAction)}
                  className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-bold text-[#040A1A] bg-[#D4AF37] hover:bg-[#E5C158] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{selectedCard.details.primaryAction}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#040A1A]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
