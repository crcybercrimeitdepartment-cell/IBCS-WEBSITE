/**
 * @file SearchBar.jsx
 * @description Refined Global Search UI for IBCS CRCCF.
 * - Sits strictly below the navbar with zero overlap with navbar navigation links.
 * - Solid, non-transparent dark navy theme (#05112B) to prevent background bleed-through.
 * - Filter bar removed for clean, immediate search across all categories.
 * - Compact responsive width (680–720px on desktop, safe mobile margins).
 * - Responsive 2-column results grid on desktop (single-column on mobile).
 * - Refined, subtle text highlighting without blocky rectangular visual noise.
 * - Dedicated internal results scroller with a sleek custom dark scrollbar.
 * - Cleaned metadata and compact result cards.
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Search, 
  X, 
  Sparkles, 
  Briefcase, 
  Layers, 
  FileText, 
  ShieldCheck, 
  GraduationCap, 
  PhoneCall, 
  ExternalLink,
  CornerDownLeft,
  Command
} from 'lucide-react';
import { 
  searchWebsite 
} from './SearchBarData';

/**
 * Refined text highlighter helper:
 * Highlights matched query terms subtly in luminous gold with an underline,
 * avoiding distracting opaque rectangular blocks.
 */
function HighlightText({ text = '', query = '' }) {
  if (!query.trim() || !text) return <>{text}</>;

  const terms = query
    .trim()
    .split(/\s+/)
    .filter((t) => t.length > 0)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  if (!terms.length) return <>{text}</>;

  const regex = new RegExp(`(${terms.join('|')})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        const isMatch = terms.some((t) => part.toLowerCase() === t.toLowerCase());
        return isMatch ? (
          <span
            key={index}
            className="text-[#FFE58F] font-bold underline decoration-[#D4AF37]/80 decoration-1 underline-offset-2"
          >
            {part}
          </span>
        ) : (
          part
        );
      })}
    </>
  );
}

/**
 * Compact Result Type Badge Formatter with clean, distinct colorways
 */
function ResultBadge({ type = 'Page' }) {
  const styles = {
    'Service': 'bg-cyan-950 text-cyan-300 border-cyan-500/40',
    'Job Vacancy': 'bg-emerald-950 text-emerald-300 border-emerald-500/40',
    'Product': 'bg-amber-950 text-amber-300 border-amber-500/40',
    'Technology': 'bg-purple-950 text-purple-300 border-purple-500/40',
    'Course': 'bg-sky-950 text-sky-300 border-sky-500/40',
    'Policy': 'bg-rose-950 text-rose-300 border-rose-500/40',
    'Contact': 'bg-teal-950 text-teal-300 border-teal-500/40',
    'Document': 'bg-indigo-950 text-indigo-300 border-indigo-500/40',
    'Page': 'bg-amber-950 text-[#E5C158] border-[#D4AF37]/40',
  };

  const icons = {
    'Service': <Layers className="w-2.5 h-2.5 shrink-0" />,
    'Job Vacancy': <Briefcase className="w-2.5 h-2.5 shrink-0" />,
    'Product': <Sparkles className="w-2.5 h-2.5 shrink-0" />,
    'Technology': <ShieldCheck className="w-2.5 h-2.5 shrink-0" />,
    'Course': <GraduationCap className="w-2.5 h-2.5 shrink-0" />,
    'Policy': <FileText className="w-2.5 h-2.5 shrink-0" />,
    'Contact': <PhoneCall className="w-2.5 h-2.5 shrink-0" />,
    'Document': <FileText className="w-2.5 h-2.5 shrink-0" />,
    'Page': <ExternalLink className="w-2.5 h-2.5 shrink-0" />,
  };

  const badgeClass = styles[type] || styles['Page'];
  const badgeIcon = icons[type] || icons['Page'];

  return (
    <span
      className={`inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md border shrink-0 ${badgeClass}`}
    >
      {badgeIcon}
      <span>{type}</span>
    </span>
  );
}

export default function SearchBar({ className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const resultsContainerRef = useRef(null);
  const itemRefs = useRef([]);

  // Compute matching results across all categories
  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchWebsite(query, 'ALL');
  }, [query]);

  // Reset active item index on query change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Focus input when search bar opens below navbar
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Global Ctrl+K / Cmd+K and custom event listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    const handleOpenSearchEvent = () => {
      setIsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-ibcs-search', handleOpenSearchEvent);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-ibcs-search', handleOpenSearchEvent);
    };
  }, []);

  // Click outside listener: closes the search bar below navbar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle direct navigation to result
  const handleSelectResult = (item) => {
    if (!item || !item.pagePath) return;

    setQuery('');
    setIsOpen(false);

    // 1. Update window hash
    const targetHash = item.pagePath;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }

    // 2. Dispatch hashchange & popstate events to force all router listeners to sync
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    window.dispatchEvent(new PopStateEvent('popstate'));

    // 3. If sectionId is provided, scroll smoothly to target section
    if (item.sectionId) {
      setTimeout(() => {
        const el = document.getElementById(item.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 250);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  // Keyboard navigation within results
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (results.length > 0) {
        setSelectedIndex((prev) => {
          const next = (prev + 1) % results.length;
          itemRefs.current[next]?.scrollIntoView({ block: 'nearest' });
          return next;
        });
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (results.length > 0) {
        setSelectedIndex((prev) => {
          const next = (prev - 1 + results.length) % results.length;
          itemRefs.current[next]?.scrollIntoView({ block: 'nearest' });
          return next;
        });
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results.length > 0 && results[selectedIndex]) {
        handleSelectResult(results[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      if (query) {
        setQuery('');
      } else {
        setIsOpen(false);
      }
    }
  };

  const showSuggestions = query.trim().length > 0;

  return (
    <div ref={containerRef} className={`relative shrink-0 ${className}`}>
      {/* ============================================================ */}
      {/* 1. Navbar Search Icon Button (Stays compact in navbar, ZERO overlap) */}
      {/* ============================================================ */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`relative grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-lg transition-all focus:outline-none shrink-0 cursor-pointer ${
          isOpen
            ? 'bg-[#D4AF37] text-[#040A1A] shadow-md shadow-[#D4AF37]/40 ring-1 ring-[#FFF8DC]'
            : 'text-white/90 hover:bg-white/10 hover:text-[#E5C158]'
        }`}
        aria-label="Toggle website search"
        title="Search website (Ctrl + K)"
      >
        <Search className="h-4 w-4" />
      </button>

      {/* ============================================================ */}
      {/* 2. Restrained Backdrop (Subtle separation from homepage hero) */}
      {/* ============================================================ */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[99990] bg-black/45 backdrop-blur-[2px] transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ============================================================ */}
      {/* 3. Search Panel: APPEARS STRICTLY BELOW THE NAVBAR */}
      {/* Solid dark navy (#05112B) to eliminate transparency bleeding */}
      {/* Responsive width: 680-720px on desktop, safe mobile margins */}
      {/* ============================================================ */}
      {isOpen && (
        <div
          className="fixed sm:absolute top-[58px] sm:top-[calc(100%+8px)] left-2.5 right-2.5 sm:left-auto sm:right-0 w-auto sm:w-[680px] lg:w-[720px] sm:max-w-[720px] bg-[#05112B] border border-[#D4AF37]/40 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_0_1px_rgba(212,175,55,0.15)] overflow-hidden z-[999999] flex flex-col transition-all duration-150 animate-fadeIn"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Search Input Bar (Inside panel below the navbar) */}
          <div className="relative flex items-center px-3 py-2 border-b border-white/10 bg-[#030A1D]">
            <Search className="w-4 h-4 text-[#D4AF37] shrink-0 mr-2" />
            
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search services, careers, products, technologies..."
              className="w-full bg-transparent text-xs sm:text-[13px] text-white placeholder-slate-400 focus:outline-none leading-normal"
              aria-label="Search across entire website"
            />

            {/* Clear query button */}
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  inputRef.current?.focus();
                }}
                className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer mr-1 shrink-0"
                title="Clear search text"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Close search panel button */}
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
              className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white text-[10px] font-semibold transition-all cursor-pointer shrink-0"
              title="Close search (ESC)"
            >
              <span className="text-[8.5px] uppercase font-mono text-slate-400">ESC</span>
              <X className="w-3 h-3" />
            </button>
          </div>

          {/* ============================================================ */}
          {/* 4. Suggestions Area: 2 COLUMNS ON DESKTOP, 1 COLUMN ON MOBILE */}
          {/* ============================================================ */}
          {showSuggestions ? (
            <>
              {/* Match Count Header Row */}
              <div className="flex items-center justify-between px-3 py-1 bg-[#020716] border-b border-white/5 text-[10px] font-semibold text-slate-400">
                <span>
                  Found <strong className="text-white font-bold">{results.length}</strong> {results.length === 1 ? 'match' : 'matches'} for &ldquo;<span className="text-[#E5C158]">{query}</span>&rdquo;
                </span>
                <span className="hidden sm:inline text-slate-500 font-mono text-[9.5px]">
                  ↑↓ navigate • ↵ Enter to open
                </span>
              </div>

              {/* Dedicated Compact Results Scroller with Sleek Dark Custom Scrollbar */}
              <div
                ref={resultsContainerRef}
                className="flex-1 overflow-y-auto max-h-[210px] sm:max-h-[230px] p-1.5 sm:p-2 [scrollbar-width:thin] [scrollbar-color:rgba(212,175,55,0.35)_#030A1D] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-[#030A1D] [&::-webkit-scrollbar-thumb]:bg-[#D4AF37]/35 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#D4AF37]/60"
              >
                {results.length > 0 ? (
                  /* 2-Column Responsive Grid on Desktop, 1-Column on Mobile */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {results.map((item, index) => {
                      const isSelected = index === selectedIndex;
                      return (
                        <div
                          key={item.id}
                          ref={(el) => (itemRefs.current[index] = el)}
                          onClick={() => handleSelectResult(item)}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={`group relative flex flex-col justify-between p-2 rounded-lg border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#0E2C68] border-[#D4AF37] shadow-sm shadow-black/50 ring-1 ring-[#D4AF37]/40'
                              : 'bg-[#081C44] hover:bg-[#0B2456] border-white/10 hover:border-[#D4AF37]/50'
                          }`}
                        >
                          <div>
                            {/* Metadata Row: Badge + Parent Category + Subtle Open Arrow */}
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <ResultBadge type={item.resultType} />
                                <span className="text-[9.5px] font-semibold text-slate-400 truncate">
                                  {item.parentTitle || item.category}
                                </span>
                              </div>
                              <CornerDownLeft className={`w-2.5 h-2.5 shrink-0 transition-all ${
                                isSelected ? 'text-[#E5C158] translate-x-0.5' : 'text-slate-500 opacity-60 group-hover:opacity-100 group-hover:text-[#E5C158]'
                              }`} />
                            </div>

                            {/* Result Title */}
                            <h4 className={`text-xs sm:text-[12px] font-bold leading-tight transition-colors line-clamp-1 ${
                              isSelected ? 'text-[#FFF8DC]' : 'text-white group-hover:text-[#E5C158]'
                            }`}>
                              <HighlightText text={item.title} query={query} />
                            </h4>

                            {/* Result Description */}
                            <p className="text-[10px] sm:text-[10.5px] text-slate-300 line-clamp-1 leading-normal mt-0.5">
                              <HighlightText text={item.description} query={query} />
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* Compact No Results Found State */
                  <div className="py-4 text-center flex flex-col items-center justify-center px-3">
                    <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-1.5 text-slate-400">
                      <Search className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <h4 className="text-xs font-bold text-white">No matches found for &ldquo;{query}&rdquo;</h4>
                    <p className="text-[10px] text-slate-400 max-w-xs mt-0.5 leading-tight">
                      Try searching for <strong className="text-[#FFF8DC]">Cybersecurity</strong>, <strong className="text-[#FFF8DC]">Software</strong>, <strong className="text-[#FFF8DC]">Cloud</strong>, or <strong className="text-[#FFF8DC]">Vacancies</strong>.
                    </p>
                  </div>
                )}
              </div>

              {/* Suggestions Footer */}
              <div className="flex items-center justify-between px-3 py-1 border-t border-white/10 bg-[#030A1D] text-[9.5px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1 py-0.2 rounded bg-white/10 font-mono text-[8.5px] text-slate-300 border border-white/10">ESC</kbd>
                  <span>to close</span>
                </span>
                <span className="text-[9px] text-slate-500 font-mono flex items-center gap-1">
                  <Command className="w-2.5 h-2.5 text-[#D4AF37]" /> IBCS Global Search
                </span>
              </div>
            </>
          ) : (
            /* Compact helper prompt before user types */
            <div className="px-3 py-2 bg-[#030A1D] text-[10.5px] text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>Type to search across services, careers & products...</span>
              </span>
              <span className="font-mono text-[9px] text-slate-500 hidden sm:inline">ESC to close</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
