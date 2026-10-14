/**
 * @file Header.jsx
 * @description Header navigation component matching screenshot design.
 * Features Search (🔍) and Notification Bell (🔔) icons with red badge counter (0),
 * inline close button toggle (X), and floating "Type to search..." popup with blue button.
 */

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Bell, CheckCheck, FileText, HelpCircle, Image, Menu, PhoneCall, PlayCircle, Search, UserPlus, X } from 'lucide-react';
import LogoMark from './LogoMark';
import brandLogo from '../assets/IBCS_BRAND_Transparent.png';
import CenterAssembledText from './CenterAssembledText';

import { SoftwareDevelopmentProductEngineeringPageData } from '../pages/HomePage/SoftwareDevelopmentProductEngineeringPage/SoftwareDevelopmentProductEngineeringPageData';
import { OurTechnologyData } from '../pages/HomePage/OurTechnologyPage/OurTechnologyPageData';
import { OurProductEcosystemData } from '../pages/HomePage/OurProductEcosystemPage/OurProductEcosystemPageData';
import { CybersecurityDigitalSecurityData } from '../pages/HomePage/CybersecurityDigitalSecurityPage/CybersecurityDigitalSecurityPageData';
import { ArtificialIntelligenceIntelligentSoftwareData } from '../pages/HomePage/ArtificialIntelligenceIntelligentSoftwarePage/ArtificialIntelligenceIntelligentSoftwareDataPage';
import { CloudSaasDigitalPlatformsData } from '../pages/HomePage/CloudSaasDigitalPlatformsPage/CloudSaasAndDigitalPlatformsPageData';
import { DataAnalyticsIntelligenceTechnologyData } from '../pages/HomePage/DataAnalyticsIntelligenceTechnologyPage/DataAnalyticsAndIntelligenceTechnologyPageData';
import { SoftwareArchitectureProductEngineeringData } from '../pages/HomePage/SoftwareArchitectureProductEngineeringPage/SoftwareArchitectureProductEngineeringPageData';
import { ProductDevelopmentLifecyclePageData } from '../pages/HomePage/ProductDevelopmentLifecyclePage/ProductDevelopmentLifecyclePageData';
import { ApisIntegrationDigitalConnectivityData } from '../pages/HomePage/ApisIntegrationDigitalConnectivityPage/ApisIntegrationDigitalConnectivityPageData';
import { EnterpriseBusinessSoftwareProductsData } from '../pages/HomePage/EnterpriseBusinessSoftwareProductsPage/EnterpriseBusinessSoftwareProductsPageData';
import { GovernmentPublicTechnologyData } from '../pages/HomePage/GovernmentPublicTechnologyPage/GovernmentPublicTechnologyPageData';
import { InvestigationLegalInstitutionalTechnologyData } from '../pages/HomePage/InvestigationLegalInstitutionalTechnologyPage/InvestigationLegalInstitutionalTechnologyPageData';
import { EducationTrainingSkillDevelopmentTechnologyData } from '../pages/HomePage/EducationTrainingSkillDevelopmentTechnologyPage/EducationTrainingSkillDevelopmentTechnologyPageData';
import { IntellectualPropertyPageData } from '../pages/HomePage/IntellectualPropertyPage/IntellectualPropertyPageData';
import { SoftwareProductCommercialisationPageData } from '../pages/HomePage/SoftwareProductCommercialisationPage/SoftwareProductCommercialisationPageData';
import { GlobalInfrastructureManagedServicesData } from '../pages/HomePage/GlobalInfrastructureManagedServicesPage/GlobalInfrastructureManagedServicesPageData';
import { DevOpsContinuousDeliveryData } from '../pages/HomePage/DevOpsContinuousDeliveryPage/DevOpsContinuousDeliveryPageData';
import { DigitalExperienceDesignData } from '../pages/HomePage/DigitalExperienceDesignPage/DigitalExperienceDesignPageData';
import { RegulatoryComplianceGovernanceData } from '../pages/HomePage/RegulatoryComplianceGovernancePage/RegulatoryComplianceGovernancePageData';
import { AiInnovationResearchAdvancedIntelligenceAutomationData } from '../pages/HomePage/AiInnovationResearchAdvancedIntelligenceAutomationPage/AiInnovationResearchAdvancedIntelligenceAutomationData';
import { IotSmartEdgeSystemsData } from '../pages/HomePage/IotSmartEdgeSystemsPage/IotSmartEdgeSystemsData';
import { NextGenerationDigitalInnovationDecentralisedIntelligenceData } from '../pages/HomePage/NextGenerationDigitalInnovationDecentralisedIntelligencePage/NextGenerationDigitalInnovationDecentralisedIntelligenceData';

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

export const sectionsData = [
  SoftwareDevelopmentProductEngineeringPageData,
  OurTechnologyData,
  OurProductEcosystemData,
  CybersecurityDigitalSecurityData,
  ArtificialIntelligenceIntelligentSoftwareData,
  CloudSaasDigitalPlatformsData,
  DataAnalyticsIntelligenceTechnologyData,
  SoftwareArchitectureProductEngineeringData,
  ProductDevelopmentLifecyclePageData,
  ApisIntegrationDigitalConnectivityData,
  EnterpriseBusinessSoftwareProductsData,
  GovernmentPublicTechnologyData,
  InvestigationLegalInstitutionalTechnologyData,
  EducationTrainingSkillDevelopmentTechnologyData,
  IntellectualPropertyPageData,
  SoftwareProductCommercialisationPageData,
  GlobalInfrastructureManagedServicesData,
  DevOpsContinuousDeliveryData,
  DigitalExperienceDesignData,
  RegulatoryComplianceGovernanceData,
  AiInnovationResearchAdvancedIntelligenceAutomationData,
  IotSmartEdgeSystemsData,
  NextGenerationDigitalInnovationDecentralisedIntelligenceData,
];

// Initial sample notification list
const initialNotifications = [
  { id: 1, title: 'MCA Registration Verified', detail: 'Registration No. 1010 official verification complete.', time: '10m ago', unread: false },
  { id: 2, title: 'New Product Suite Live', detail: '240 Enterprise AI & Cyber Security platforms released.', time: '1h ago', unread: false },
];

// Module-level in-memory flag (no localStorage/sessionStorage used)
// Resets strictly when the browser page is reloaded or freshly opened.
let hasWelcomeMessageHiddenOnce = false;

export default function Header({ onOpenItServicesPage, activePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(initialNotifications);
  
  // Dedicated one-way visibility state for temporary lines (Line 1 & Line 3)
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(() => !hasWelcomeMessageHiddenOnce);
  const searchInputRef = useRef(null);
  const unreadCount = notifications.filter((n) => n.unread).length;

  // Flatten all cards with parent section metadata for search
  const allSearchableItems = sectionsData.flatMap((section) => {
    if (!section) return [];
    const cards = Array.isArray(section.cards)
      ? section.cards
      : Array.isArray(section)
        ? section
        : [];
    return cards.map((card) => ({
      ...card,
      sectionTitle: section.eyebrow || card.title || '',
      sectionSlug: section.slug || '',
    }));
  });

  // Filter search results dynamically
  const filteredResults = searchQuery.trim()
    ? allSearchableItems.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sectionTitle.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 6)
    : [];

  // Focus search input when search popover opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchQuery('');
    }
  }, [isSearchOpen]);

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
    <header id="home" className="sticky inset-x-0 top-0 z-[9999] scroll-mt-0 bg-[#040A1A] shadow-lg w-full max-w-full">
      {/* Company Header Announcement Bar */}
      <div className="bg-[#040A1A] text-center px-2 sm:px-4 py-1.5 border-b border-[#D4AF37]/20 w-full overflow-hidden">
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



      {/* Sticky Navigation Menu Bar (Underneath Announcement Banner) */}
      <div className="relative border-b border-[#D4AF37]/25 bg-[#081E52]/95 shadow-[0_8px_30px_-24px_rgba(8,30,82,.85)] backdrop-blur-xl w-full max-w-full">
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
              const isActive = (isItServices && activePage === 'it-services');
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
            {/* 1. Search Icon & Floating Popover */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsSearchOpen((prev) => !prev);
                  setIsNotificationOpen(false);
                }}
                className="relative grid h-7 w-7 sm:h-8 sm:w-8 place-items-center text-white/90 transition-colors hover:bg-white/10 hover:text-[#E5C158] rounded-lg focus:outline-none shrink-0"
                aria-label={isSearchOpen ? 'Close search' : 'Open search'}
                title="Search"
              >
                {isSearchOpen ? <X className="h-4 w-4 text-white" /> : <Search className="h-4 w-4" />}
              </button>

              {/* Floating Search Popup Box */}
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2.5 w-[210px] xs:w-[230px] sm:w-80 md:w-96 rounded-xl sm:rounded-2xl border border-[#D4AF37]/40 bg-[#081E52] p-1.5 sm:p-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-2xl z-50 before:absolute before:-top-2 before:right-2.5 before:h-0 before:w-0 before:border-b-8 before:border-b-[#081E52] before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent">
                  {/* Search Input Bar with Gold Submit Button */}
                  <form onSubmit={(e) => e.preventDefault()} className="flex items-center overflow-hidden rounded-lg sm:rounded-xl border border-[#D4AF37]/35 bg-[#040A1A]">
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Type to search..."
                      className="w-full bg-transparent px-2.5 py-1 text-[11px] sm:text-sm text-white placeholder-[#FFF8DC]/60 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="grid h-7 w-7.5 sm:h-9 sm:w-11 shrink-0 place-items-center bg-[#D4AF37] text-[#040A1A] font-bold transition-colors hover:bg-[#E5C158] focus:outline-none"
                      aria-label="Submit search"
                    >
                      <Search className="h-3 w-3 sm:h-4 sm:w-4 stroke-[2.5]" />
                    </button>
                  </form>

                  {/* Dynamic Search Results Dropdown List */}
                  {searchQuery.trim() && (
                    <div className="mt-2.5 max-h-72 overflow-y-auto space-y-1.5 border-t border-[#D4AF37]/25 pt-2">
                      {filteredResults.length > 0 ? (
                        filteredResults.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.sectionSlug}`}
                            onClick={() => setIsSearchOpen(false)}
                            className="group flex flex-col rounded-xl border border-[#D4AF37]/20 bg-white/[0.03] p-2 sm:p-2.5 transition-colors hover:border-[#E5C158]/60 hover:bg-[#D4AF37]/15"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-display text-xs font-bold text-white group-hover:text-[#E5C158]">{item.title}</span>
                              <span className="text-[9px] font-bold uppercase tracking-wider text-[#D4AF37]">{item.sectionTitle}</span>
                            </div>
                            <p className="mt-0.5 line-clamp-1 text-[11px] text-white/80">{item.description}</p>
                          </a>
                        ))
                      ) : (
                        <div className="py-6 text-center text-xs text-[#FFF8DC]/70">
                          No results for &quot;{searchQuery}&quot;
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

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
              className="hidden lg:grid h-7 w-7 sm:h-8 sm:w-8 place-items-center text-white/90 transition-colors hover:bg-white/10 hover:text-[#E5C158] rounded-lg focus:outline-none shrink-0"
              title="Follow"
              aria-label="Follow"
            >
              <UserPlus className="h-4 w-4" />
            </a>

            {/* 4. Gallery Icon */}
            <a
              href="#gallery"
              className="hidden lg:grid h-7 w-7 sm:h-8 sm:w-8 place-items-center text-white/90 transition-colors hover:bg-white/10 hover:text-[#E5C158] rounded-lg focus:outline-none shrink-0"
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
              className="group inline-flex items-center gap-1 rounded-md bg-[#D4AF37] px-2.5 sm:px-3 py-1 text-[11px] sm:text-[11.5px] font-bold text-[#040A1A] transition-all hover:bg-[#E5C158] shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.4)] whitespace-nowrap"
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
                className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-[#081E52] border border-[#D4AF37]/25 text-[11px] font-bold text-white hover:bg-[#0c2b7a] transition-colors shadow-sm"
              >
                <UserPlus className="h-4 w-4 text-[#E5C158]" /> Follow
              </a>
              <a
                href="#gallery"
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-[#081E52] border border-[#D4AF37]/25 text-[11px] font-bold text-white hover:bg-[#0c2b7a] transition-colors shadow-sm"
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
                const isActive = (isItServices && activePage === 'it-services');
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
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/45 bg-[#081E52] px-4 py-3.5 text-xs font-extrabold text-white shadow-md transition-all hover:bg-[#0c2b7a] active:scale-[0.98]"
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
      </div>
    </header>
  );
}
