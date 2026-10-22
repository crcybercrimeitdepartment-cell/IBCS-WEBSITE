import React, { useEffect } from 'react';
import { Home } from 'lucide-react';

const ComingSoonPage = ({
  title = 'Coming Soon',
  categoryTitle,
  badgeText = 'We are working on something exciting!',
  description = 'This section is currently under maintenance and will be available soon with updated content.',
  showNav = false,
  onClose,
}) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} • Coming Soon | IB Cyber Security`;
    return () => {
      document.title = prevTitle;
    };
  }, [title]);

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else if (onClose) {
      onClose();
    } else {
      window.location.hash = '#home';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 animate-fadeIn">
      {showNav && (
        <div className="pb-4 flex items-center justify-start gap-3">
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
      )}

      {/* Coming Soon Card */}
      <div className="bg-white rounded-2xl sm:rounded-[32px] shadow-xl shadow-slate-300/40 p-8 sm:p-14 md:p-18 text-center border border-slate-200/80 relative overflow-hidden">
        {categoryTitle && (
          <div className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
            {categoryTitle}
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0F172A] tracking-tight leading-tight mb-6">
          {title}
        </h1>

        <div className="inline-block bg-[#EFF6FF] text-[#2563EB] px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-xs border border-[#BFDBFE] mb-6 sm:mb-8">
          {badgeText}
        </div>

        <p className="text-[#64748B] text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          {description}
          <br /><br />
          Thank you for visiting our website. We appreciate your patience.
        </p>
      </div>
    </div>
  );
};

export default ComingSoonPage;
