import React from 'react';
import { ArrowRight, Layers, Cpu, Boxes, Database } from 'lucide-react';
import SectionDecorativeBackground from '../../../components/common/SectionDecorativeBackground';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';

/* =========================================================================
   CUSTOM VECTOR SVG: SOFTWARE ARCHITECTURE & PRODUCT ENGINEERING SCHEMATIC
   Transparent Background & Synchronized Float Motion
   ========================================================================= */
function SoftwareArchitectureSchematicSVG() {
  return (
    <svg
      viewBox="0 0 540 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[500px] select-none drop-shadow-md"
    >
      <defs>
        <linearGradient id="archPrimaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0FA4AF" />
          <stop offset="100%" stopColor="#024950" />
        </linearGradient>
        <linearGradient id="archDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#024950" />
          <stop offset="100%" stopColor="#003135" />
        </linearGradient>
        <linearGradient id="archLineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0FA4AF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#AFDDE5" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Blueprint Grid Lines & Architecture Bus */}
      <g opacity="0.25" stroke="#0FA4AF" strokeWidth="0.8">
        <line x1="30" y1="90" x2="510" y2="90" strokeDasharray="3 3" />
        <line x1="30" y1="215" x2="510" y2="215" strokeDasharray="3 3" />
        <line x1="30" y1="335" x2="510" y2="335" strokeDasharray="3 3" />
      </g>

      {/* Data Bus Pipeline Connectors */}
      <path d="M 92 78 L 92 110 L 270 110 L 270 140" stroke="url(#archLineGrad)" strokeWidth="1.8" strokeDasharray="4 3" />
      <path d="M 448 78 L 448 110 L 270 110" stroke="url(#archLineGrad)" strokeWidth="1.8" strokeDasharray="4 3" />
      <path d="M 270 85 L 270 140" stroke="url(#archLineGrad)" strokeWidth="2" />
      
      <path d="M 95 205 L 95 245 L 270 245 L 270 275" stroke="url(#archLineGrad)" strokeWidth="1.8" strokeDasharray="4 3" />
      <path d="M 445 205 L 445 245 L 270 245" stroke="url(#archLineGrad)" strokeWidth="1.8" strokeDasharray="4 3" />
      <path d="M 270 215 L 270 275" stroke="url(#archLineGrad)" strokeWidth="2" />

      {/* TIER 1: CLIENT APPLICATIONS & API GATEWAY */}
      {/* 1.1 Web App Client */}
      <g transform="translate(35, 32)">
        <rect width="115" height="46" rx="8" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="20" cy="23" r="10" fill="#E6F7F9" />
        <rect x="15" y="18" width="10" height="8" rx="1.5" fill="none" stroke="#0FA4AF" strokeWidth="1.2" />
        <line x1="17" y1="28" x2="23" y2="28" stroke="#0FA4AF" strokeWidth="1.2" />
        <text x="36" y="20" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Web Client</text>
        <text x="36" y="32" fill="#0FA4AF" fontSize="8.5" fontWeight="bold" fontFamily="system-ui">Next.js / React</text>
      </g>

      {/* 1.2 Central API Gateway Hub */}
      <g transform="translate(195, 27)">
        <rect width="150" height="56" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.8" />
        <circle cx="24" cy="28" r="12" fill="#E6F7F9" />
        <circle cx="24" cy="28" r="5" fill="#0FA4AF" />
        <path d="M 24 20 V 23 M 24 33 V 36 M 16 28 H 19 M 29 28 H 32" stroke="#0FA4AF" strokeWidth="1.5" strokeLinecap="round" />
        <text x="44" y="24" fill="#003135" fontSize="11" fontWeight="800" fontFamily="system-ui">API GATEWAY</text>
        <text x="44" y="38" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui">REST • gRPC • GraphQL</text>
        <circle cx="138" cy="16" r="3.5" fill="#10B981" />
      </g>

      {/* 1.3 Mobile & Edge Client */}
      <g transform="translate(390, 32)">
        <rect width="115" height="46" rx="8" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="20" cy="23" r="10" fill="#E6F7F9" />
        <rect x="16" y="17" width="8" height="12" rx="2" fill="none" stroke="#0FA4AF" strokeWidth="1.2" />
        <circle cx="20" cy="26" r="1" fill="#0FA4AF" />
        <text x="36" y="20" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Mobile &amp; Edge</text>
        <text x="36" y="32" fill="#0FA4AF" fontSize="8.5" fontWeight="bold" fontFamily="system-ui">iOS / Android</text>
      </g>

      {/* TIER 2: MICROSERVICES & BUSINESS LOGIC ENGINE */}
      {/* 2.1 Auth & Security Microservice */}
      <g transform="translate(35, 145)">
        <rect width="115" height="55" rx="9" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="22" cy="27" r="11" fill="#E6F7F9" />
        <path d="M 22 20 L 27 22 V 26 C 27 29 22 31 22 31 C 22 31 17 29 17 26 V 22 Z" fill="none" stroke="#0FA4AF" strokeWidth="1.4" />
        <text x="39" y="23" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Auth &amp; RBAC</text>
        <text x="39" y="36" fill="#0FA4AF" fontSize="8.5" fontWeight="bold" fontFamily="system-ui">Zero-Trust Mesh</text>
      </g>

      {/* 2.2 Central High-Performance Engine Core */}
      <g transform="translate(190, 135)">
        <rect width="160" height="75" rx="12" fill="url(#archPrimaryGrad)" stroke="#FFFFFF" strokeWidth="2.5" />
        {/* Core Chip Graphic */}
        <rect x="18" y="18" width="22" height="22" rx="4" fill="#003135" stroke="#AFDDE5" strokeWidth="1.2" />
        <circle cx="29" cy="29" r="4" fill="#AFDDE5" />
        <text x="48" y="27" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="system-ui">Core Service Engine</text>
        <text x="48" y="40" fill="#AFDDE5" fontSize="9" fontWeight="bold" fontFamily="system-ui">High-Throughput Node</text>
        {/* Metric Badges */}
        <rect x="18" y="48" width="124" height="16" rx="4" fill="#003135" opacity="0.6" />
        <text x="80" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="system-ui">&lt; 2ms Scalable Latency &gt;</text>
        <circle cx="148" cy="18" r="3.5" fill="#10B981" />
      </g>

      {/* 2.3 Event Bus & Message Stream */}
      <g transform="translate(390, 145)">
        <rect width="115" height="55" rx="9" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="22" cy="27" r="11" fill="#E6F7F9" />
        <path d="M 24 20 L 19 27 H 24 L 20 34 L 27 26 H 22 Z" fill="#0FA4AF" />
        <text x="39" y="23" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Event Stream</text>
        <text x="39" y="36" fill="#0FA4AF" fontSize="8.5" fontWeight="bold" fontFamily="system-ui">Kafka / PubSub</text>
      </g>

      {/* TIER 3: DATA PERSISTENCE & STORAGE CLUSTER */}
      {/* 3.1 Real-Time Analytics OLAP */}
      <g transform="translate(35, 275)">
        <rect width="115" height="50" rx="8" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="20" cy="25" r="10" fill="#E6F7F9" />
        <path d="M 16 29 V 23 M 20 29 V 19 M 24 29 V 25" stroke="#0FA4AF" strokeWidth="1.6" strokeLinecap="round" />
        <text x="36" y="21" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Analytics OLAP</text>
        <text x="36" y="34" fill="#0FA4AF" fontSize="8.5" fontWeight="bold" fontFamily="system-ui">Data Lakehouse</text>
      </g>

      {/* 3.2 High-Availability Data Cluster */}
      <g transform="translate(170, 268)">
        <rect width="200" height="66" rx="10" fill="url(#archDarkGrad)" stroke="#AFDDE5" strokeWidth="1.5" />
        {/* Database Cylinder Icon */}
        <g transform="translate(16, 17)">
          <ellipse cx="14" cy="8" rx="12" ry="4.5" fill="#0FA4AF" stroke="#FFFFFF" strokeWidth="1.2" />
          <path d="M 2 8 V 22 C 2 24.5 7.4 26.5 14 26.5 C 20.6 26.5 26 24.5 26 22 V 8" fill="#0FA4AF" stroke="#FFFFFF" strokeWidth="1.2" />
          <ellipse cx="14" cy="15" rx="12" ry="4.5" fill="none" stroke="#AFDDE5" strokeWidth="1" strokeDasharray="3 2" />
        </g>
        <text x="50" y="27" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="system-ui">Distributed Data Cluster</text>
        <text x="50" y="41" fill="#AFDDE5" fontSize="9" fontWeight="bold" fontFamily="system-ui">PostgreSQL • Redis • S3</text>
        <text x="50" y="54" fill="#E6F7F9" fontSize="8" fontWeight="medium" fontFamily="system-ui">Multi-Region Active Sync</text>
        <circle cx="186" cy="16" r="3.5" fill="#10B981" />
      </g>

      {/* 3.3 Encrypted Vault & Snapshots */}
      <g transform="translate(390, 275)">
        <rect width="115" height="50" rx="8" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="20" cy="25" r="10" fill="#E6F7F9" />
        <circle cx="20" cy="25" r="5" fill="none" stroke="#0FA4AF" strokeWidth="1.4" />
        <path d="M 20 22 V 24 M 20 26 V 28" stroke="#0FA4AF" strokeWidth="1.4" />
        <text x="36" y="21" fill="#003135" fontSize="10" fontWeight="bold" fontFamily="system-ui">Cold Vault</text>
        <text x="36" y="34" fill="#0FA4AF" fontSize="8.5" fontWeight="bold" fontFamily="system-ui">Encrypted Backups</text>
      </g>

      {/* Architecture Spec Ribbon Bottom */}
      <text x="270" y="362" textAnchor="middle" fill="#0FA4AF" fontSize="9" fontWeight="bold" fontFamily="system-ui" letterSpacing="1">
        CLOUD-NATIVE • RESILIENT • HORIZONTALLY SCALABLE
      </text>
    </svg>
  );
}

export default function SoftwareArchitectureProductEngineeringSection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#software-architecture-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  return (
    <section
      id="software-architecture-product-engineering"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F2F8FA] via-[#E8F4F7] to-[#DFEFF2] border-b border-[#D4AF37]/20 overflow-hidden relative"
    >
      {/* Interactive Decorative Background Theme */}
      <SectionDecorativeBackground variant="architecture" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Descriptions & Actions */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">


            {/* Main Heading */}
            <AnimatedSectionHeading
              text="Software Architecture & Product Engineering"
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-[#081E52] mb-5 text-center lg:text-left"
            />

            {/* Descriptions from original text */}
            <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#081E52]/85 font-medium mb-6 text-center lg:text-left text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              <p>
                Strong software products begin with strong engineering foundations. We design software architecture and product engineering systems that support performance, security, scalability, maintainability and long-term product evolution.
              </p>
              <p>
                Our engineering capabilities cover system architecture, application development, database engineering, user experience, APIs, integration, testing and quality engineering. We apply these capabilities across proprietary software products, SaaS platforms, enterprise applications and specialised digital technology products.
              </p>
            </div>

            {/* Structured Highlight Badges */}
            <div className="grid grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <Cpu className="w-4 h-4 text-[#0FA4AF] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Scalable Microservices</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <Boxes className="w-4 h-4 text-[#0FA4AF] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Product Engineering</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0FA4AF] to-[#024950] text-white font-extrabold text-sm sm:text-base shadow-md shadow-[#0FA4AF]/25 hover:shadow-lg hover:from-[#0d8e98] hover:to-[#01353a] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Engineering Architecture</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Custom SVG Graphic (Transparent Background & Live in Synchronized Motion) */}
          <div className="lg:col-span-6 flex items-center justify-center animate-float-slow">
            <SoftwareArchitectureSchematicSVG />
          </div>

        </div>
      </div>
    </section>
  );
}
