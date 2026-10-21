/**
 * @file Header.jsx
 * @description Header navigation component matching screenshot design.
 * Features Search (🔍) and Notification Bell (🔔) icons with red badge counter (0),
 * inline close button toggle (X), and floating "Type to search..." popup with blue button.
 */

import { useEffect, useState } from 'react';
import { ArrowUpRight, Bell, FileText, HelpCircle, Image, Menu, PhoneCall, Search, UserPlus, X } from 'lucide-react';
import { brandLogo } from './CloudinaryLinks';
import CenterAssembledText from './CenterAssembledText';
import SearchBar from './SearchBar/SearchBar';

export const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Software Products', href: '#software-products' },
  { label: 'Published Software', href: '#published-software' },
  { label: 'Software Launches', href: '#software-launches' },
  { label: 'Upcoming Software', href: '#upcoming-software' },
  { label: 'Software Library', href: '#software-library' },
  { label: 'IT Services', href: '#it-services' },
  { label: 'Skill Development', href: '#skill-development' },
  { label: 'Careers', href: '#careers' },
];

// Initial sample notification list
const initialNotifications = [
  { id: 1, title: 'MCA Registration Verified', detail: 'Registration No. 1010 official verification complete.', time: '10m ago', unread: false },
  { id: 2, title: 'New Product Suite Live', detail: '240 Enterprise AI & Cyber Security platforms released.', time: '1h ago', unread: false },
];

// Module-level in-memory flag (no localStorage/sessionStorage used)
// Resets strictly when the browser page is reloaded or freshly opened.
let hasWelcomeMessageHiddenOnce = false;

export default function Header({ onOpenItServicesPage, onOpenContactUsPage, activePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [currentHash, setCurrentHash] = useState(() => (typeof window !== 'undefined' ? (window.location.hash || '') : ''));

  useEffect(() => {
    const handleHashSync = () => {
      setCurrentHash(window.location.hash || '');
    };
    window.addEventListener('hashchange', handleHashSync);
    window.addEventListener('popstate', handleHashSync);
    window.addEventListener('sectionchange', handleHashSync);
    return () => {
      window.removeEventListener('hashchange', handleHashSync);
      window.removeEventListener('popstate', handleHashSync);
      window.removeEventListener('sectionchange', handleHashSync);
    };
  }, []);

  const isItemActive = (item) => {
    const hash = (currentHash || '').toLowerCase().replace(/^#\/?/, '').trim();
    const itemHref = item.href.toLowerCase().replace(/^#\/?/, '').trim();

    if (itemHref === 'home') {
      if (activePage && activePage !== 'home') {
        return false;
      }
      const isStandaloneOrDetail = [
        'about-us',
        'about',
        'software-products',
        'published-software',
        'software-launches',
        'upcoming-software',
        'software-library',
        'it-services',
        'itservices',
        'skill-development',
        'skill-dev',
        'careers',
        'career',
        'contact',
        'contact-us',
        'gallery',
        'follow',
        'copyright',
        'meaning-behind-our-name',
        'cybersecurity',
        'cybersecurity-digital-security',
        'ai-innovation',
        'iot',
        'nextgen',
        'blockchain',
        'sdpe',
        'ip',
        'spc',
        'pdl',
        'ope',
        'ot',
        'ai',
        'cloud',
        'da',
        'apis',
        'edu',
        'ent',
        'gov',
        'inv',
        'arch',
        'global-infra',
        'devops',
        'digital-exp',
        'regulatory',
        'introduction',
      ].some((p) => hash.startsWith(p) || (activePage && activePage.startsWith(p)));

      return !isStandaloneOrDetail;
    }

    if (itemHref === 'about-us') {
      return (
        activePage === 'about-us' ||
        hash === 'about-us' ||
        hash === 'about' ||
        hash === 'about-us-page' ||
        hash.startsWith('copyright') ||
        hash.startsWith('meaning')
      );
    }

    if (itemHref === 'software-products') {
      return (
        activePage === 'software-products' ||
        hash === 'software-products' ||
        hash === 'software-products-page' ||
        hash === 'product-introduction' ||
        hash === 'purpose-use-cases' ||
        hash === 'vision-mission' ||
        hash === 'product-roadmap' ||
        hash === 'technology-architecture' ||
        hash === 'security-compliance' ||
        hash === 'integrations-apis' ||
        hash === 'product-benefits-impact'
      );
    }

    if (itemHref === 'published-software') {
      return hash === 'published-software';
    }

    if (itemHref === 'software-launches') {
      return hash === 'software-launches';
    }

    if (itemHref === 'upcoming-software') {
      return hash === 'upcoming-software';
    }

    if (itemHref === 'software-library') {
      return activePage === 'software-library' || hash === 'software-library' || hash === 'software-library-page';
    }

    if (itemHref === 'it-services') {
      return activePage === 'it-services' || hash.startsWith('it-services') || hash.startsWith('itservices');
    }

    if (itemHref === 'skill-development') {
      return (
        activePage === 'skill-development' ||
        hash === 'skill-development' ||
        hash === 'skill-development-page' ||
        hash === 'skill-dev'
      );
    }

    if (itemHref === 'careers') {
      return (
        activePage === 'careers' ||
        hash.startsWith('career') ||
        hash.startsWith('vacancies') ||
        hash.startsWith('current-vacancies') ||
        hash.startsWith('job-')
      );
    }

    return hash === itemHref;
  };

  const isContactActive = activePage === 'contact' || (currentHash || '').toLowerCase().includes('contact');
  const isGalleryActive = activePage === 'gallery' || (currentHash || '').toLowerCase().includes('gallery');
  const isFollowActive = activePage === 'follow' || (currentHash || '').toLowerCase().includes('follow');
  
  // Dedicated one-way visibility state for temporary lines (Line 1 & Line 3)
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(() => !hasWelcomeMessageHiddenOnce);
  const unreadCount = notifications.filter((n) => n.unread).length;

  // Prevent body overflow when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // One-way lifecycle: on initial load/refresh, show temporary lines for 4.5 seconds,
  // then hide them permanently for the lifetime of this page instance.
  // There are ZERO scroll listeners or restoration checks.
  useEffect(() => {
    if (hasWelcomeMessageHiddenOnce) {
      setShowWelcomeMessage(false);
      return;
    }

    const timer = setTimeout(() => {
      hasWelcomeMessageHiddenOnce = true;
      setShowWelcomeMessage(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  // Handle Mark All Notifications Read
  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, unread: false })));
  };

  return (
    <>
      {/* Company Header Announcement Bar (Normal document flow - scrolls away) */}
      <div className="relative z-[100] bg-[#040A1A] text-center px-2 sm:px-4 py-1.5 border-b border-[#D4AF37]/20 w-full overflow-hidden">
        <div className="w-full max-w-[1480px] mx-auto px-2 sm:px-4 flex flex-col items-center justify-center text-center">

          {/* Line 1: Temporary Welcome Heading (Auto-hides after 4.5s, stays permanently hidden) */}
          <div
            className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-in-out w-full overflow-hidden ${showWelcomeMessage ? 'grid-rows-[1fr] opacity-100 mb-0.5' : 'grid-rows-[0fr] opacity-0 mb-0 pointer-events-none'
              }`}
          >
            <div className="overflow-hidden min-h-0 w-full py-0.5">
              <h1 className="font-display text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-extrabold tracking-tight sm:tracking-wider text-white uppercase flex items-center justify-center gap-1.5 sm:gap-2 px-1">
                <span className="navbar-live-dot shrink-0 my-auto" aria-hidden="true" />
                <CenterAssembledText text="WELCOME TO IB CYBER SECURITY PRIVATE LIMITED" />
              </h1>
            </div>
          </div>

          {/* Description */}
          <div className="w-full py-0.5">
            <p className="w-full max-w-full text-center whitespace-normal sm:whitespace-nowrap text-[9.5px] sm:text-[11px] md:text-[12.5px] font-medium leading-tight sm:leading-snug tracking-normal sm:tracking-tight text-[#FFF8DC]">
              One of the best international software product-based companies, focused on creating innovative and intelligent technology solutions. Creating intelligent software products and technologies for a digital future.
            </p>
          </div>

          {/* Line 3: Temporary Registration & Establishment Meta (Auto-hides after 4.5s, stays permanently hidden) */}
          <div
            className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-in-out w-full overflow-hidden ${showWelcomeMessage ? 'grid-rows-[1fr] opacity-100 mt-0.5' : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
              }`}
          >
            <div className="overflow-hidden min-h-0 w-full py-0.5">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-[9px] sm:text-[10.5px] font-mono text-white/70">
                <span>ESTABLISHED • SEPT. 26-26</span>
                <span className="text-[#E5C158] hidden sm:inline">•</span>
                <span>MCA REGISTRATION NO. 1010</span>
              </div>
            </div>
          </div>

        </div>
      </div>



      {/* Sticky Navigation Menu Bar (Sticky at top: 0 across the entire page) */}
      <header
        id="home"
        className="sticky inset-x-0 top-0 z-[9999] scroll-mt-0 border-b border-[#D4AF37]/25 bg-[#081E52] shadow-[0_8px_30px_-24px_rgba(8,30,82,.85)] backdrop-blur-xl w-full max-w-full"
        style={{ position: 'sticky', top: 0, zIndex: 9999 }}
      >
        {/* Main Navigation Menu Bar (UNDERNEATH Heading & Description) */}
        <div className="w-full max-w-[1480px] mx-auto px-3 sm:px-5 lg:px-6 flex h-14 sm:h-16 items-center justify-between gap-1.5 sm:gap-2">
          {/* Logo & Brand Name */}
          <a href="#home" className="group flex min-w-0 items-center gap-2.5 sm:gap-3 focus-ring shrink-0" aria-label="IB Cyber Security home">
            <div className="relative flex items-center justify-center shrink-0 rounded-full p-1 bg-white ring-2 ring-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.6)] group-hover:shadow-[0_0_25px_rgba(229,193,88,0.9)] group-hover:scale-105 transition-all duration-300 overflow-hidden">
              <img
                src={brandLogo}
                alt="IB Cyber Security Logo"
                className="h-9 w-9 sm:h-11 sm:w-11 lg:h-12 lg:w-12 rounded-full object-contain shrink-0"
              />
            </div>
            <span className="flex flex-col font-display leading-[1.1] min-w-0">
              <span className="text-[11px] xs:text-[12px] sm:text-[13.5px] lg:text-[14px] font-extrabold tracking-[0.03em] text-white whitespace-nowrap">
                IB CYBER SECURITY
              </span>
              <span className="text-[8px] xs:text-[8.5px] sm:text-[9.5px] lg:text-[10px] font-bold tracking-[0.06em] text-[#D4AF37] whitespace-nowrap">
                PRIVATE LIMITED
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex flex-1 items-center justify-center gap-1.5 xl:gap-2.5 2xl:gap-4 px-1 sm:px-2 mx-auto min-w-0" aria-label="Primary navigation">
            {navigationItems.map((item) => {
              const parts = item.label.split(' ');
              const isItServices = item.label === 'IT Services' || item.href === '#it-services';
              const isActive = isItemActive(item);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (isItServices) {
                      e.preventDefault();
                      window.location.hash = '#it-services';
                      if (onOpenItServicesPage) {
                        onOpenItServicesPage();
                      } else {
                        window.dispatchEvent(new HashChangeEvent('hashchange'));
                      }
                    }
                  }}
                  className={`group relative px-2 xl:px-2.5 py-1.5 text-[11.5px] xl:text-[12px] 2xl:text-[13px] font-bold text-white/95 transition-all duration-300 hover:text-[#FFF8DC] focus-ring text-center whitespace-nowrap shrink-0 flex items-center justify-center cursor-pointer ${isActive ? "text-[#FFF8DC]" : ""}`}
                >
                  {parts.length > 1 ? (
                    <span className="flex flex-col items-center leading-[1.18] text-center z-10">
                      <span>{parts[0]}</span>
                      <span>{parts.slice(1).join(' ')}</span>
                    </span>
                  ) : (
                    <span className="leading-tight z-10">{item.label}</span>
                  )}

                  {/* Center-to-both-sides expanding glowing line hover & active effect */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] bg-gradient-to-r from-[#D4AF37] via-[#FFF8DC] to-[#E5C158] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.9)] transition-all duration-300 ease-out ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`} />
                </a>
              );
            })}
          </nav>

          {/* Right Side Action Area: Search, Help, Follow, Gallery, Tender, Contact Us */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* 1. Global Navbar SearchBar Component (Inline in Navbar with attached suggestions dropdown) */}
            <SearchBar />

            {/* 2. Help Icon */}
            <a
              href="#help"
              className="hidden lg:grid h-7 w-7 sm:h-8 sm:w-8 place-items-center text-white/90 transition-colors hover:bg-white/10 hover:text-[#E5C158] rounded-lg focus:outline-none shrink-0"
              title="Help"
              aria-label="Help"
            >
              <HelpCircle className="h-4 w-4" />
            </a>

            {/* 3. Follow Icon */}
            <a
              href="#follow"
              className={`hidden lg:grid h-7 w-7 sm:h-8 sm:w-8 place-items-center text-white/90 transition-colors hover:bg-white/10 hover:text-[#E5C158] rounded-lg focus:outline-none shrink-0 ${isFollowActive ? "text-[#E5C158] bg-white/10" : ""}`}
              title="Follow"
              aria-label="Follow"
            >
              <UserPlus className="h-4 w-4" />
            </a>

            {/* 4. Gallery Icon */}
            <a
              href="#gallery"
              className={`hidden lg:grid h-7 w-7 sm:h-8 sm:w-8 place-items-center text-white/90 transition-colors hover:bg-white/10 hover:text-[#E5C158] rounded-lg focus:outline-none shrink-0 ${isGalleryActive ? "text-[#E5C158] bg-white/10" : ""}`}
              title="Gallery"
              aria-label="Gallery"
            >
              <Image className="h-4 w-4" />
            </a>

            {/* 5. Tender Icon */}
            <a
              href="#tender"
              className="hidden lg:grid h-7 w-7 sm:h-8 sm:w-8 place-items-center text-white/90 transition-colors hover:bg-white/10 hover:text-[#E5C158] rounded-lg focus:outline-none shrink-0"
              title="Tender"
              aria-label="Tender"
            >
              <FileText className="h-4 w-4" />
            </a>

            {/* 6. Contact Us CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenContactUsPage) {
                  e.preventDefault();
                  onOpenContactUsPage();
                }
              }}
              className={`group inline-flex items-center gap-1 rounded-md bg-[#D4AF37] px-2.5 sm:px-3 py-1 text-[11px] sm:text-[11.5px] font-bold text-[#040A1A] transition-all hover:bg-[#E5C158] shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.4)] whitespace-nowrap cursor-pointer ${isContactActive ? "ring-2 ring-white/90 shadow-[0_0_20px_rgba(212,175,55,0.7)]" : ""}`}
            >
              <span>Contact Us</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Navigation Menu Toggle */}
            <button
              type="button"
              className="grid h-7 w-7 sm:h-8 sm:w-8 shrink-0 place-items-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/15 focus-ring xl:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Modal */}
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="absolute top-full left-0 right-0 w-full min-h-[calc(100vh-60px)] max-h-[calc(100vh-60px)] overflow-y-auto bg-[#040A1A] border-t border-[#D4AF37]/30 px-4 py-5 shadow-2xl xl:hidden z-[999999]"
          >
            {/* Search Trigger for Mobile Users */}
            <div className="mb-4 max-w-2xl mx-auto">
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('open-ibcs-search'));
                }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#081E52] border border-[#D4AF37]/40 text-white/80 hover:text-white hover:border-[#D4AF37] transition-all text-xs font-semibold shadow-sm cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <Search className="w-4 h-4 text-[#E5C158]" />
                  <span>Search across entire website...</span>
                </span>
                <kbd className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-[#FFF8DC] font-mono border border-white/10">Search</kbd>
              </button>
            </div>

            {/* Quick Action Buttons Grid on Mobile Drawer */}
            <div className="grid grid-cols-4 gap-2.5 pb-4 border-b border-white/10 mb-4 max-w-2xl mx-auto">
              <a
                href="#help"
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-[#081E52] border border-[#D4AF37]/25 text-[11px] font-bold text-white hover:bg-[#0c2b7a] transition-colors shadow-sm"
              >
                <HelpCircle className="h-4 w-4 text-[#E5C158]" /> Help
              </a>
              <a
                href="#follow"
                onClick={() => setIsMenuOpen(false)}
                className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-[#081E52] border border-[#D4AF37]/25 text-[11px] font-bold text-white hover:bg-[#0c2b7a] transition-colors shadow-sm ${isFollowActive ? "ring-2 ring-[#D4AF37] bg-[#0c2b7a]" : ""}`}
              >
                <UserPlus className="h-4 w-4 text-[#E5C158]" /> Follow
              </a>
              <a
                href="#gallery"
                onClick={() => setIsMenuOpen(false)}
                className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-[#081E52] border border-[#D4AF37]/25 text-[11px] font-bold text-white hover:bg-[#0c2b7a] transition-colors shadow-sm ${isGalleryActive ? "ring-2 ring-[#D4AF37] bg-[#0c2b7a]" : ""}`}
              >
                <Image className="h-4 w-4 text-[#E5C158]" /> Gallery
              </a>
              <a
                href="#tender"
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-[#081E52] border border-[#D4AF37]/25 text-[11px] font-bold text-white hover:bg-[#0c2b7a] transition-colors shadow-sm"
              >
                <FileText className="h-4 w-4 text-[#E5C158]" /> Tender
              </a>
            </div>

            {/* Navigation Items Cards */}
            <nav className="mx-auto flex max-w-2xl flex-col space-y-2.5 pb-8" aria-label="Mobile navigation">
              {navigationItems.map((item, index) => {
                const isItServices = item.label === 'IT Services' || item.href === '#it-services';
                const isActive = isItemActive(item);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      if (isItServices) {
                        e.preventDefault();
                        window.location.hash = '#it-services';
                        if (onOpenItServicesPage) {
                          onOpenItServicesPage();
                        } else {
                          window.dispatchEvent(new HashChangeEvent('hashchange'));
                        }
                      }
                    }}
                    className={`flex items-center justify-between rounded-xl bg-[#081E52] border border-[#D4AF37]/20 px-4 py-3.5 font-display text-sm font-bold text-white transition-all hover:bg-[#0c2b7a] hover:text-[#FFF8DC] focus-ring active:scale-[0.99] shadow-sm cursor-pointer ${
                      isActive ? "ring-2 ring-[#D4AF37] bg-[#0c2b7a]" : ""
                    }`}
                  >
                    <span className="text-[14px] font-bold text-white">{item.label}</span>
                    <span className="text-xs font-extrabold text-[#E5C158] font-mono tracking-wider">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </a>
                );
              })}

              {/* Bottom CTAs */}
              <div className="pt-3 grid grid-cols-2 gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (onOpenContactUsPage) {
                      e.preventDefault();
                      onOpenContactUsPage();
                    }
                  }}
                  className={`flex items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/45 bg-[#081E52] px-4 py-3.5 text-xs font-extrabold text-white shadow-md transition-all hover:bg-[#0c2b7a] active:scale-[0.98] cursor-pointer ${isContactActive ? "ring-2 ring-[#D4AF37] bg-[#0c2b7a]" : ""}`}
                >
                  <PhoneCall className="h-4 w-4 text-[#E5C158]" /> Contact Us
                </a>
                <a
                  href="#tender"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-4 py-3.5 text-xs font-extrabold text-[#040A1A] shadow-lg shadow-[#D4AF37]/25 transition-all hover:bg-[#E5C158] active:scale-[0.98]"
                >
                  <FileText className="h-4 w-4" /> Tender
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
