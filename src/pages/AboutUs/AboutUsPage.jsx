import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  X,
  LifeBuoy,
  FileText,
  ThumbsUp,
  ThumbsDown,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Home
} from 'lucide-react';
import {
  heroData,
  sponsorBrands,
  coursesData
} from './AboutUsPageData';
import helpIllustrationLeft from '../../assets/help_illustration_left.jpg';
export default function AboutUs({ onClose, onOpenCopyrightPage, onOpenMeaningPage }) {
  const handleBack = () => {
    if (window.history.length > 1) {
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
  const [internalStep, setInternalStep] = useState(0); // 0: Hero & Overview, 1: About Topics Grid
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeArticle, setActiveArticle] = useState(null);
  const [toast, setToast] = useState('');
  const [feedbackState, setFeedbackState] = useState({});

  const handleArticleClick = (article) => {
    const titleLower = (article?.title || '').toLowerCase();
    if (titleLower.includes('copyright') || article?.id === 'about-16') {
      window.location.hash = '#copyright-page';
      if (onOpenCopyrightPage) {
        onOpenCopyrightPage();
      }
    } else if (titleLower.includes('meaning behind our name') || article?.id === 'about-1') {
      window.location.hash = '#meaning-behind-our-name-page';
      if (onOpenMeaningPage) {
        onOpenMeaningPage();
      }
    }
  };

  const stepRef = useRef(0);
  const cooldownRef = useRef(false);
  const containerRef = useRef(null);
  const slide2Ref = useRef(null);

  useEffect(() => {
    stepRef.current = internalStep;
  }, [internalStep]);

  // Toast Helper
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3500);
  };

  // Container-scoped Wheel Navigation (Only triggers when mouse is OVER the card container)
  const handleWheelContainer = (e) => {
    if (cooldownRef.current || activeArticle) return;

    if (stepRef.current === 0) {
      if (e.deltaY > 15) {
        setInternalStep(1);
        cooldownRef.current = true;
        setTimeout(() => (cooldownRef.current = false), 600);
      }
    } else if (stepRef.current === 1) {
      const isAtTop = slide2Ref.current && slide2Ref.current.scrollTop <= 5;
      if (isAtTop && e.deltaY < -20) {
        setInternalStep(0);
        cooldownRef.current = true;
        setTimeout(() => (cooldownRef.current = false), 600);
      } else {
        // Stop scroll event from propagating to main page while mouse is inside this section
        e.stopPropagation();
      }
    }
  };

  // Filter Topics based on search query & selected category
  const filteredArticles = coursesData.filter((article) => {
    const matchesCategory =
      selectedCategory === 'ALL' || article.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      article.title.toLowerCase().includes(q) ||
      article.summary.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  // Handle Search Input & auto switch to topics slide if user types
  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim() && internalStep === 0) {
      setInternalStep(1);
    }
  };

  const handlePopularSearchClick = (tag) => {
    setSearchQuery(tag);
    setSelectedCategory('ALL');
    setInternalStep(1);
  };

  // Feedback thumb click handler
  const handleFeedback = (articleId, type) => {
    setFeedbackState((prev) => ({ ...prev, [articleId]: type }));
    showToast(type === 'yes' ? '👍 Thank you for your feedback!' : '🙏 Thank you! We appreciate your thoughts.');
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#EBF7F8] via-[#E7F3F5] to-[#DFEFF2] text-[#1E293B] flex flex-col justify-between overflow-x-hidden animate-fade-in font-sans select-none pb-12">
      {/* Transferred custom styles with Warm Terracotta & Deep Navy theme */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;600;700;800;900&family=Space+Grotesk:wght@500;700&display=swap');

        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          min-height: 100%;
          background-color: #001C1F;
          color: #1E293B;
        }

        /* 3D Perspective Utilities */
        .perspective-container {
          perspective: 1400px;
          perspective-origin: 50% 50%;
          transform-style: preserve-3d;
        }

        /* Ultra-Smooth 3D Card Transition Curve */
        .card-3d-preserve {
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform, opacity, filter;
          transition: transform 0.85s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), filter 0.85s ease, box-shadow 0.85s ease;
        }

        /* Custom Scrollbars */
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(224, 122, 95, 0.35);
          border-radius: 9999px;
        }

        /* Custom Scrollbar for Topics Container */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(224, 122, 95, 0.65) rgba(0, 0, 0, 0.04);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.04);
          border-radius: 9999px;
          margin: 12px 0;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(224, 122, 95, 0.75);
          border-radius: 9999px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(217, 107, 67, 0.95);
          background-clip: content-box;
        }
      `}</style>

      {/* Toast Notification Floating Banner */}
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-[#1E293B] text-white border border-[#E07A5F]/60 px-5 py-2.5 rounded-full shadow-2xl shadow-stone-900/20 flex items-center space-x-2 text-xs font-bold animate-bounce">
          <CheckCircle className="w-4 h-4 text-[#E07A5F]" />
          <span>{toast}</span>
        </div>
      )}

      {/* Top Header Navigation Bar */}
      <div className="w-full max-w-[1300px] mx-auto px-6 pt-6 flex items-center justify-start gap-3 z-50 relative">
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

      {/* Main Container */}
      <main className="relative z-10 my-auto py-4 px-4 max-w-6xl mx-auto w-full">
        <div
          className="relative w-full rounded-[32px] bg-white shadow-[0_25px_60px_-15px_rgba(45,35,30,0.12)] text-[#1E293B] border border-[#EADFD5] p-5 sm:p-7 md:p-8 space-y-8 sm:space-y-10"
        >
          {/* HERO & SEARCH HUB */}
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Content & Interactive Search Bar */}
              <div className="md:col-span-7 space-y-3.5">
                <span className="inline-flex items-center space-x-1.5 bg-[#D4AF37]/15 px-3 py-1 rounded-full text-[11px] font-mono font-extrabold text-[#081E52] border border-[#D4AF37]/40 uppercase tracking-widest">
                  <LifeBuoy className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>About Us & Corporate Profile</span>
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-[40px] font-black font-display leading-[1.1] tracking-tight text-[#1E293B] whitespace-pre-line">
                  {heroData.title}
                </h1>

                <p className="text-[#475569] text-xs sm:text-sm max-w-2xl font-sans leading-relaxed">
                  {heroData.subtitle}
                </p>

                {/* Real-time Search Box */}
                <div className="relative max-w-lg pt-1">
                  <div className="relative flex items-center">
                    <Search className="absolute left-4 w-4 h-4 text-[#D96B43]" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={heroData.searchPlaceholder}
                      className="w-full pl-11 pr-10 py-3 rounded-full bg-[#FAF7F2] text-[#1E293B] placeholder-slate-400 font-sans text-xs sm:text-sm border border-[#E5DAD0] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3.5 text-slate-400 hover:text-slate-600 p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Popular Search Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2.5 text-[11px]">
                    <span className="text-[#64748B] font-semibold">Popular:</span>
                    {heroData.popularSearches.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => {
                          setSearchQuery(tag);
                          const elem = document.getElementById('pillars-directory');
                          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-[#F7F2EC] hover:bg-[#EFE7DE] text-[#334155] hover:text-[#081E52] border border-[#E5DAD0] px-2.5 py-0.5 rounded-full font-medium transition-all hover:scale-105"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Illustration & Action Button */}
              <div className="md:col-span-5 flex flex-col justify-center items-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] flex items-center justify-center">
                  <img
                    src={helpIllustrationLeft}
                    alt={heroData.illustrationAlt}
                    className="w-full h-auto max-h-[220px] object-contain mix-blend-multiply transform -scale-x-100"
                  />
                </div>

                <div className="w-full max-w-sm mt-2 flex items-center justify-center">
                  <button
                    onClick={() => {
                      const elem = document.getElementById('pillars-directory');
                      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B89628] hover:from-[#E5C158] hover:to-[#D4AF37] text-[#040A1A] py-2.5 rounded-xl text-xs font-black flex items-center justify-center space-x-2 shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/45 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#040A1A]" />
                    <span>Browse All {coursesData.length} Topics ↓</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Sponsor & Trust Badges */}
            <div className="pt-3 pb-1 border-t border-[#EAE0D5]">
              <div className="flex flex-wrap items-center justify-between gap-3 text-[#1E293B] font-display text-sm sm:text-base font-bold">
                {sponsorBrands.map((brand) => (
                  <React.Fragment key={brand.id}>
                    {brand.type === 'serif' && (
                      <div className="flex items-center space-x-1.5">
                        <span className="text-base italic font-serif text-[#081E52]">{brand.prefix}</span>
                        <span>{brand.name}</span>
                      </div>
                    )}
                    {brand.type === 'mono' && (
                      <div className="tracking-tighter uppercase font-mono text-[10px] bg-[#D4AF37]/15 px-2 py-0.5 rounded border border-[#D4AF37]/40 text-[#081E52] font-bold">
                        {brand.badge}
                      </div>
                    )}
                    {brand.type === 'italic' && (
                      <div className="italic font-serif text-sm text-[#1E293B]">
                        {brand.name}
                      </div>
                    )}
                    {brand.type === 'sans' && (
                      <div className="font-sans font-extrabold tracking-wide text-xs text-[#1E293B]">
                        {brand.name}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* TOPICS DIRECTORY SECTION */}
          <div id="pillars-directory" className="pt-6 border-t border-[#EADFD5] space-y-6">
            {/* Header & Filter */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black font-display text-[#1E293B]">
                  Organizational Pillars & Policies
                </h2>
                <p className="text-xs text-slate-500 font-sans mt-0.5">
                  Explore all 18 key chapters, guidelines, and corporate frameworks below
                </p>
              </div>

              {/* Search Input Filter */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#D4AF37]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter topics..."
                  className="w-full pl-9 pr-8 py-2 rounded-full bg-[#FAF7F2] text-[#1E293B] text-xs placeholder-slate-400 border border-[#E5DAD0] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Zero State Result Notice */}
            {filteredArticles.length === 0 && (
              <div className="bg-white text-[#1E293B] p-8 rounded-[24px] text-center max-w-md mx-auto my-8 border border-[#EADFD5] shadow-xl space-y-3">
                <LifeBuoy className="w-12 h-12 mx-auto text-[#D4AF37]" />
                <h3 className="text-lg font-bold font-display">No topics found</h3>
                <p className="text-xs text-slate-600 font-sans">
                  We couldn't find any section matching "{searchQuery}". Try searching for another topic.
                </p>
                <div className="pt-2 flex items-center justify-center space-x-3">
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('ALL');
                    }}
                    className="px-4 py-2 bg-[#081E52] hover:bg-[#0c2b7a] text-[#FFF8DC] rounded-full text-xs font-bold transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}

            {/* 18 About Us Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {filteredArticles.map((article, idx) => (
                <div
                  key={article.id}
                  onClick={() => handleArticleClick(article)}
                  className="group relative bg-[#FFFDFB] hover:bg-white text-[#1E293B] p-4 sm:p-5 rounded-[22px] border border-[#EADFD5] hover:border-[#D4AF37]/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between cursor-pointer select-none"
                >
                  <div>
                    {/* Card Title */}
                    <h3 className="text-sm sm:text-base font-bold font-display leading-snug text-[#1E293B] group-hover:text-[#081E52] transition-colors capitalize pt-1">
                      {article.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-[#EAE0D5] flex items-end justify-between">
                    <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#D4AF37] group-hover:text-[#081E52] flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300">
                      <span>{article.linkText || 'VIEW DETAILS →'}</span>
                    </span>

                    <div className="w-8 h-8 opacity-85 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 flex-shrink-0">
                      {article.iconType === 'clock' && (
                        <svg viewBox="0 0 100 100" fill="none">
                          <circle cx="50" cy="50" r="40" stroke="#1E293B" strokeWidth="6" />
                          <line x1="50" y1="50" x2="50" y2="24" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
                          <line x1="50" y1="50" x2="68" y2="50" stroke="#E07A5F" strokeWidth="6" strokeLinecap="round" />
                        </svg>
                      )}
                      {article.iconType === 'laptop' && (
                        <svg viewBox="0 0 100 100" fill="none">
                          <rect x="15" y="25" width="70" height="50" rx="6" fill="#FDF2EC" stroke="#1E293B" strokeWidth="4" />
                          <rect x="25" y="35" width="22" height="30" rx="3" fill="#D96B43" />
                        </svg>
                      )}
                      {article.iconType === 'chart' && (
                        <svg viewBox="0 0 100 100" fill="none">
                          <circle cx="50" cy="50" r="35" stroke="#1E293B" strokeWidth="4" fill="none" />
                          <path d="M50 50 L50 15 A35 35 0 0 1 85 50 Z" fill="#E07A5F" />
                        </svg>
                      )}
                      {article.iconType === 'rocket' && (
                        <svg viewBox="0 0 100 100" fill="none">
                          <path d="M50 15 C65 25 75 45 75 65 L25 65 C25 45 35 25 50 15 Z" fill="#D96B43" stroke="#1E293B" strokeWidth="4" />
                          <circle cx="50" cy="42" r="8" fill="#F4A261" />
                        </svg>
                      )}
                      {article.iconType === 'shoppingBag' && (
                        <svg viewBox="0 0 100 100" fill="none">
                          <rect x="25" y="35" width="50" height="50" rx="6" fill="#D96B43" stroke="#1E293B" strokeWidth="4" />
                          <path d="M38 35 V26 C38 19 62 19 62 26 V35" stroke="#E07A5F" strokeWidth="5" />
                        </svg>
                      )}
                      {article.iconType === 'shield' && (
                        <svg viewBox="0 0 100 100" fill="none">
                          <path d="M50 15 L80 25 V50 C80 70 50 85 50 85 C50 85 20 70 20 50 V25 Z" fill="#E07A5F" stroke="#1E293B" strokeWidth="4" />
                        </svg>
                      )}
                      {article.iconType === 'sparkles' && (
                        <svg viewBox="0 0 100 100" fill="none">
                          <path d="M50 15 C50 35 65 50 85 50 C65 50 50 65 50 85 C50 65 35 50 15 50 C35 50 50 35 50 15 Z" fill="#F4A261" stroke="#1E293B" strokeWidth="3" />
                        </svg>
                      )}
                      {article.iconType === 'dollar' && (
                        <svg viewBox="0 0 100 100" fill="none">
                          <circle cx="50" cy="50" r="35" fill="#D96B43" stroke="#1E293B" strokeWidth="4" />
                          <text x="50" y="63" fontSize="38" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">$</text>
                        </svg>
                      )}
                      {article.iconType === 'palette' && (
                        <svg viewBox="0 0 100 100" fill="none">
                          <path d="M50 20 C25 20 15 35 15 55 C15 75 35 85 55 85 C65 85 70 78 70 72 C70 67 66 65 71 60 C76 55 85 60 85 45 C85 30 70 20 50 20 Z" fill="#E07A5F" stroke="#1E293B" strokeWidth="4" />
                        </svg>
                      )}
                      {article.iconType === 'lightning' && (
                        <svg viewBox="0 0 100 100" fill="none">
                          <path d="M55 15 L25 52 H48 L42 85 L75 48 H52 L55 15 Z" fill="#F4A261" stroke="#1E293B" strokeWidth="4" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-2.5 text-center text-[11px] text-[#64748B] select-none">
        © 2025 About Us — All rights reserved.
      </footer>
    </div>
  );
}
