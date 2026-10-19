import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';
import {
  ArrowRight,
  Cloud,
  Settings,
  BarChart3,
  GitMerge,
  Database,
} from 'lucide-react';
import SectionDecorativeBackground from '../../../components/common/SectionDecorativeBackground';

/* =========================================================================
   CUSTOM VECTOR SVG: ENTERPRISE SOFTWARE SUITE & DIGITAL PLATFORM MESH
   Transparent Background & Synchronized Float Motion (Brand Cyan/Teal Palette)
   ========================================================================= */
function EnterpriseSoftwareSuiteSVG() {
  return (
    <svg
      viewBox="0 0 540 370"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[500px] select-none drop-shadow-md"
    >
      <defs>
        <linearGradient id="entHubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0FA4AF" />
          <stop offset="50%" stopColor="#024950" />
          <stop offset="100%" stopColor="#003135" />
        </linearGradient>
        <linearGradient id="entBusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0FA4AF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#AFDDE5" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="entCoreTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#AFDDE5" />
        </linearGradient>
        <linearGradient id="entCoreLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0FA4AF" />
          <stop offset="100%" stopColor="#024950" />
        </linearGradient>
        <linearGradient id="entCoreRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#024950" />
          <stop offset="100%" stopColor="#003135" />
        </linearGradient>
      </defs>

      {/* Blueprint Sub-Grid Accents */}
      <g opacity="0.18" stroke="#0FA4AF" strokeWidth="0.8">
        <line x1="30" y1="95" x2="510" y2="95" />
        <line x1="30" y1="185" x2="510" y2="185" />
        <line x1="30" y1="275" x2="510" y2="275" />
        <line x1="123" y1="30" x2="123" y2="340" />
        <line x1="270" y1="30" x2="270" y2="340" />
        <line x1="417" y1="30" x2="417" y2="340" />
      </g>

      {/* Concentric Radar / Mesh Loops around Center */}
      <circle cx="270" cy="185" r="135" stroke="#0FA4AF" strokeWidth="1" strokeDasharray="6 6" opacity="0.2" />
      <circle cx="270" cy="185" r="88" stroke="#AFDDE5" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.35" />

      {/* Connection Bus Lines with Directional Gradient Flow */}
      <path d="M 270 185 L 186 95" stroke="url(#entBusGrad)" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M 270 185 L 354 95" stroke="url(#entBusGrad)" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M 270 185 L 186 275" stroke="url(#entBusGrad)" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M 270 185 L 354 275" stroke="url(#entBusGrad)" strokeWidth="2" strokeDasharray="4 3" />

      {/* Floating Pulse Nodes along the Bus Lines */}
      <circle cx="228" cy="140" r="4.5" fill="#FFFFFF" stroke="#0FA4AF" strokeWidth="1.5" />
      <circle cx="312" cy="140" r="4.5" fill="#FFFFFF" stroke="#0FA4AF" strokeWidth="1.5" />
      <circle cx="228" cy="230" r="4.5" fill="#FFFFFF" stroke="#0FA4AF" strokeWidth="1.5" />
      <circle cx="312" cy="230" r="4.5" fill="#FFFFFF" stroke="#0FA4AF" strokeWidth="1.5" />

      {/* ================= SATELLITE NODE 1: SAAS PLATFORM (Top-Left) ================= */}
      <g transform="translate(60, 42)">
        <rect width="126" height="74" rx="14" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        {/* Top Row: Icon on Left, Live Indicator on Right */}
        <circle cx="28" cy="24" r="14" fill="#E6F7F9" stroke="#AFDDE5" strokeWidth="1" />
        {/* Cloud multi-tenant icon */}
        <path d="M 22 26 C 20.5 26 19 24.5 19 23 C 19 21.5 20.2 20.2 21.8 20.1 C 22.4 18.3 24 17 26 17 C 28.2 17 30 18.5 30.5 20.5 C 31.9 20.7 33 21.8 33 23.2 C 33 24.8 31.7 26 30 26 Z" fill="none" stroke="#0FA4AF" strokeWidth="1.4" strokeLinejoin="round" />
        <text x="96" y="23" textAnchor="end" fill="#0FA4AF" fontSize="8" fontWeight="bold" fontFamily="monospace">SaaS</text>
        <circle cx="106" cy="20" r="3.5" fill="#10B981" />
        {/* Bottom Row: Text Centered with Zero Overlap */}
        <text x="63" y="48" textAnchor="middle" fill="#003135" fontSize="11" fontWeight="bold" fontFamily="system-ui">SaaS Platform</text>
        <text x="63" y="62" textAnchor="middle" fill="#0FA4AF" fontSize="8.5" fontWeight="600" fontFamily="system-ui">Multi-Tenant Core</text>
      </g>

      {/* ================= SATELLITE NODE 2: WORKFLOW AUTOMATION (Top-Right) ================= */}
      <g transform="translate(354, 42)">
        <rect width="126" height="74" rx="14" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        {/* Top Row: Icon on Left, Live Indicator on Right */}
        <circle cx="28" cy="24" r="14" fill="#E6F7F9" stroke="#AFDDE5" strokeWidth="1" />
        {/* Workflow automation icon */}
        <path d="M 24 18 H 28 V 23 H 32 V 27 H 28 V 30 H 24 V 25 H 20 V 21 H 24 Z" fill="none" stroke="#0FA4AF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="24" r="2" fill="#0FA4AF" />
        <text x="96" y="23" textAnchor="end" fill="#0FA4AF" fontSize="8" fontWeight="bold" fontFamily="monospace">AUTO</text>
        <circle cx="106" cy="20" r="3.5" fill="#0FA4AF" />
        {/* Bottom Row: Text Centered with Zero Overlap */}
        <text x="63" y="48" textAnchor="middle" fill="#003135" fontSize="11" fontWeight="bold" fontFamily="system-ui">Workflow Engine</text>
        <text x="63" y="62" textAnchor="middle" fill="#0FA4AF" fontSize="8.5" fontWeight="600" fontFamily="system-ui">Process Automation</text>
      </g>

      {/* ================= SATELLITE NODE 3: ANALYTICS & BI (Bottom-Left) ================= */}
      <g transform="translate(60, 254)">
        <rect width="126" height="74" rx="14" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        {/* Top Row: Icon on Left, Live Indicator on Right */}
        <circle cx="28" cy="24" r="14" fill="#E6F7F9" stroke="#AFDDE5" strokeWidth="1" />
        {/* Bar chart & trendline icon */}
        <path d="M 21 28 V 24 M 25 28 V 21 M 29 28 V 18 M 33 28 V 22" stroke="#0FA4AF" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M 20 22 L 25 18 L 29 20 L 34 16" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="96" y="23" textAnchor="end" fill="#0FA4AF" fontSize="8" fontWeight="bold" fontFamily="monospace">SYNC</text>
        <circle cx="106" cy="20" r="3.5" fill="#10B981" />
        {/* Bottom Row: Text Centered with Zero Overlap */}
        <text x="63" y="48" textAnchor="middle" fill="#003135" fontSize="11" fontWeight="bold" fontFamily="system-ui">Analytics &amp; BI</text>
        <text x="63" y="62" textAnchor="middle" fill="#0FA4AF" fontSize="8.5" fontWeight="600" fontFamily="system-ui">Real-Time Insights</text>
      </g>

      {/* ================= SATELLITE NODE 4: ENTERPRISE DEPLOYMENT (Bottom-Right) ================= */}
      <g transform="translate(354, 254)">
        <rect width="126" height="74" rx="14" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        {/* Top Row: Icon on Left, Live Indicator on Right */}
        <circle cx="28" cy="24" r="14" fill="#E6F7F9" stroke="#AFDDE5" strokeWidth="1" />
        {/* Server & DB cluster icon */}
        <rect x="22" y="18" width="12" height="5" rx="1.5" fill="none" stroke="#0FA4AF" strokeWidth="1.3" />
        <rect x="22" y="25" width="12" height="5" rx="1.5" fill="none" stroke="#0FA4AF" strokeWidth="1.3" />
        <circle cx="25" cy="20.5" r="0.8" fill="#10B981" />
        <circle cx="25" cy="27.5" r="0.8" fill="#10B981" />
        <text x="96" y="23" textAnchor="end" fill="#0FA4AF" fontSize="8" fontWeight="bold" fontFamily="monospace">HYBRID</text>
        <circle cx="106" cy="20" r="3.5" fill="#0FA4AF" />
        {/* Bottom Row: Text Centered with Zero Overlap */}
        <text x="63" y="48" textAnchor="middle" fill="#003135" fontSize="11" fontWeight="bold" fontFamily="system-ui">Enterprise Deploy</text>
        <text x="63" y="62" textAnchor="middle" fill="#0FA4AF" fontSize="8.5" fontWeight="600" fontFamily="system-ui">Hybrid &amp; On-Prem</text>
      </g>

      {/* ================= CENTRAL CORE: ENTERPRISE PRODUCT HUB ================= */}
      <g transform="translate(270, 185)">
        {/* Outer Radiant Glow Circle */}
        <circle cx="0" cy="0" r="48" fill="url(#entHubGrad)" stroke="#FFFFFF" strokeWidth="3" filter="drop-shadow(0 6px 14px rgba(15,164,175,0.3))" />
        <circle cx="0" cy="0" r="39" fill="none" stroke="#AFDDE5" strokeWidth="1.4" strokeDasharray="3 3" />

        {/* 3D Isometric Enterprise Cube Core */}
        <g transform="translate(0, -9)">
          {/* Top Face */}
          <polygon points="0,-17 15,-8 0,0 -15,-8" fill="url(#entCoreTop)" />
          {/* Left Face */}
          <polygon points="-15,-8 0,0 0,16 -15,8" fill="url(#entCoreLeft)" />
          {/* Right Face */}
          <polygon points="0,0 15,-8 15,8 0,16" fill="url(#entCoreRight)" />
          {/* Inner Highlight Wireframes */}
          <line x1="0" y1="0" x2="0" y2="16" stroke="#AFDDE5" strokeWidth="1" opacity="0.8" />
          <polyline points="-15,-8 0,0 15,-8" stroke="#FFFFFF" strokeWidth="1.2" fill="none" opacity="0.9" />
        </g>

        {/* Core Status Pill */}
        <g transform="translate(0, 15)">
          <rect x="-38" y="0" width="76" height="16" rx="8" fill="#003135" stroke="#AFDDE5" strokeWidth="1" />
          <circle cx="-26" cy="8" r="2" fill="#10B981" />
          <text x="-2" y="11" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="800" fontFamily="system-ui" letterSpacing="0.05em">ENTERPRISE HUB</text>
        </g>

        {/* Orbit Data Particle Nodes */}
        <circle cx="-48" cy="0" r="3" fill="#AFDDE5" />
        <circle cx="48" cy="0" r="3" fill="#0FA4AF" />
        <circle cx="0" cy="-48" r="3" fill="#10B981" />
        <circle cx="0" cy="48" r="3" fill="#AFDDE5" />
      </g>
    </svg>
  );
}

export default function EnterpriseBusinessSoftwareProductsSection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    if (e) e.preventDefault();
    window.location.hash = '#enterprise-business-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  const capabilityPills = [
    { label: 'SaaS', icon: Cloud },
    { label: 'Automation', icon: Settings },
    { label: 'Analytics', icon: BarChart3 },
    { label: 'Workflow', icon: GitMerge },
    { label: 'Enterprise Deployment', icon: Database },
  ];

  return (
    <section
      id="enterprise-business-software-products"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F2F8FA] via-[#E8F4F7] to-[#DFEFF2] border-b border-[#D4AF37]/20 overflow-hidden relative"
    >
      {/* Interactive Decorative Background Theme (Waves, Soft Glows, Floating 3D Orbs & Dot Matrices) */}
      <SectionDecorativeBackground variant="enterprise" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ================= LEFT COLUMN: OVERVIEW, DESCRIPTION & FEATURES ================= */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start justify-center text-center lg:text-left"
          >


            {/* Main Section Heading */}
            <AnimatedSectionHeading
              text="Enterprise & Business Software Products"
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#081E52] tracking-tight leading-[1.12] mb-5 text-center lg:text-left"
            />

            {/* Original Paragraphs (100% UNTOUCHED TEXT) */}
            <div className="space-y-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#081E52]/85 font-medium mb-7 text-center lg:text-left text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              <p>
                We develop software products designed to help businesses and organisations manage operations, information, workflows and digital processes. Our enterprise technology capabilities cover management systems, automation, analytics, communication, productivity and organisational software.
              </p>
              <p>
                Rather than focusing only on customised development, our product-led approach aims to create reusable and scalable software products that can serve multiple organisations and business environments. These products can be delivered through SaaS, licensing, subscriptions, enterprise deployment and other technology-product models.
              </p>
            </div>

            {/* 5 Capability Pill Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-8">
              {capabilityPills.map((pill, i) => {
                const PillIcon = pill.icon;
                return (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#AFDDE5] shadow-xs text-xs font-extrabold text-[#081E52] hover:border-[#0FA4AF] transition-all duration-300"
                  >
                    <PillIcon className="w-3.5 h-3.5 text-[#0FA4AF]" strokeWidth={2.2} />
                    <span>{pill.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Main CTA Button */}
            <div className="w-full flex justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0FA4AF] hover:bg-[#003135] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#0FA4AF]/30 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/30"
              >
                <span>Explore Our Software Products</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </motion.div>

          {/* ================= RIGHT COLUMN: BESPOKE VECTOR SVG GRAPHIC ================= */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center py-4"
          >
            {/* Centerpiece Vector Architecture Graphic (Transparent & Live in Synchronized Motion) */}
            <div className="w-full max-w-[520px] mx-auto flex items-center justify-center animate-float-slow">
              <EnterpriseSoftwareSuiteSVG />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
