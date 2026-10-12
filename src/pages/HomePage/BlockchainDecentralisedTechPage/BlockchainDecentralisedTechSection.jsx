import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';
import {
  ArrowRight,
  Shield,
  FileText,
  Database,
  Box,
  Fingerprint,
  Network
} from 'lucide-react';
import BlockchainClusterGraphic from './BlockchainClusterGraphic';
import SectionDecorativeBackground from '../../../components/common/SectionDecorativeBackground';
import { BlockchainDecentralisedTechData } from './BlockchainDecentralisedTechData';

export default function BlockchainDecentralisedTechSection({ onOpenPage }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#blockchain-decentralised-tech';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  const {
    badge = 'BLOCKCHAIN TECHNOLOGY',
    titleLine1 = 'Blockchain & Decentralised',
    titleLine2 = 'Technologies',
    paragraphs = [
      'Developing enterprise distributed ledger software, smart contracts and immutable record verification platforms for trust-based digital transactions.',
      'We combine cryptographic verification, decentralized architectures, and auditable smart contracts to create transparent, tamper-proof systems for complex business networks.'
    ],
    ctaText = 'Explore Our Blockchain Solutions',
    features = [
      {
        id: 'smart-contracts',
        title: 'Smart Contracts',
        description: 'Automated and auditable digital agreements.',
        position: 'top-left',
        iconType: 'file'
      },
      {
        id: 'distributed-ledger',
        title: 'Distributed Ledger',
        description: 'Secure multi-party transaction records.',
        position: 'bottom-left',
        iconType: 'database'
      },
      {
        id: 'cryptographic-security',
        title: 'Cryptographic Security',
        description: 'Tamper-resistant verification.',
        position: 'top-right',
        iconType: 'shield'
      },
      {
        id: 'immutable-records',
        title: 'Immutable Records',
        description: 'Transparent and traceable data.',
        position: 'bottom-right',
        iconType: 'cube'
      }
    ],
    bottomBadges = [
      { id: 'crypto', label: 'CRYPTOGRAPHY', iconType: 'shield' },
      { id: 'smart-contracts-badge', label: 'SMART CONTRACTS', iconType: 'file' },
      { id: 'dlt', label: 'DLT', iconType: 'network' },
      { id: 'web3', label: 'WEB3', iconType: 'cube' },
      { id: 'identity', label: 'DIGITAL IDENTITY', iconType: 'fingerprint' }
    ]
  } = BlockchainDecentralisedTechData;

  const renderCardIcon = (iconType) => {
    switch (iconType) {
      case 'file':
        return <FileText className="w-5 h-5 text-white" strokeWidth={2.2} />;
      case 'database':
        return <Database className="w-5 h-5 text-white" strokeWidth={2.2} />;
      case 'shield':
        return <Shield className="w-5 h-5 text-white" strokeWidth={2.2} />;
      case 'cube':
      default:
        return <Box className="w-5 h-5 text-white" strokeWidth={2.2} />;
    }
  };

  const renderBadgeIcon = (iconType) => {
    switch (iconType) {
      case 'file':
        return <FileText className="w-4 h-4 text-[#0FA4AF]" strokeWidth={2.2} />;
      case 'network':
        return <Network className="w-4 h-4 text-[#0FA4AF]" strokeWidth={2.2} />;
      case 'cube':
        return <Box className="w-4 h-4 text-[#0FA4AF]" strokeWidth={2.2} />;
      case 'fingerprint':
        return <Fingerprint className="w-4 h-4 text-[#0FA4AF]" strokeWidth={2.2} />;
      case 'shield':
      default:
        return <Shield className="w-4 h-4 text-[#0FA4AF]" strokeWidth={2.2} />;
    }
  };

  const cardTopLeft = features.find((f) => f.position === 'top-left') || features[0];
  const cardBottomLeft = features.find((f) => f.position === 'bottom-left') || features[1];
  const cardTopRight = features.find((f) => f.position === 'top-right') || features[2];
  const cardBottomRight = features.find((f) => f.position === 'bottom-right') || features[3];

  const FeatureCard = ({ card, className = '' }) => (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onMouseEnter={() => setHoveredCard(card.id)}
      onMouseLeave={() => setHoveredCard(null)}
      className={`group relative flex items-center gap-2.5 sm:gap-3 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-3 sm:px-3.5 border border-[#AFDDE5] shadow-xs hover:shadow-md hover:border-[#0FA4AF]/60 transition-all duration-300 w-full ${className}`}
    >
      {/* Icon Badge */}
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#0FA4AF] to-[#024950] flex items-center justify-center text-white shadow-sm shadow-[#0FA4AF]/25 shrink-0 group-hover:scale-105 transition-transform duration-200">
        {renderCardIcon(card.iconType)}
      </div>
      {/* Content */}
      <div className="text-left min-w-0 flex-1">
        <h4 className="font-display text-[12px] sm:text-[13.5px] font-bold text-[#081E52] leading-tight group-hover:text-[#0FA4AF] transition-colors duration-200 truncate sm:whitespace-normal">
          {card.title}
        </h4>
        <p className="text-[#081E52]/70 text-[10px] sm:text-[11px] leading-snug mt-0.5 font-medium line-clamp-2">
          {card.description}
        </p>
      </div>
      {/* Subtle bottom indicator glow */}
      <div className="absolute inset-x-3 -bottom-[1px] h-[1.5px] bg-gradient-to-r from-transparent via-[#0FA4AF]/0 to-transparent group-hover:via-[#0FA4AF]/60 transition-all duration-300 rounded-full" />
    </motion.div>
  );

  return (
    <section
      id="blockchain-decentralised-tech"
      className="scroll-mt-20 relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F2F8FA] via-[#E8F4F7] to-[#DFEFF2] border-b border-[#D4AF37]/20 overflow-hidden select-none"
    >
      {/* Interactive Decorative Background Theme (Waves, Soft Glows, Floating 3D Orbs & Dot Matrices) */}
      <SectionDecorativeBackground variant="blockchain" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER AREA */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">


          {/* Main Title */}
          <AnimatedSectionHeading
            text={`${titleLine1} ${titleLine2}`}
            highlightWords={[titleLine2]}
            highlightClassName="text-[#0FA4AF]"
            className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.14] tracking-tight text-[#081E52] mb-5 text-center"
          />

          {/* Descriptions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#081E52]/85 font-medium text-center max-w-3xl mx-auto mb-7"
          >
            {paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-8 sm:mb-10"
          >
            <button
              type="button"
              onClick={handleCtaClick}
              className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-white font-extrabold text-sm sm:text-[15px] bg-gradient-to-r from-[#0FA4AF] to-[#024950] shadow-md shadow-[#0FA4AF]/25 hover:shadow-lg hover:from-[#0d8e98] hover:to-[#01353a] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none cursor-pointer"
            >
              <span>{ctaText}</span>
              <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* CENTERPIECE + FLOATING CARDS STAGE */}
        <div className="relative mt-2 mb-12 sm:mb-16">
          {/* DESKTOP LAYOUT (>= lg) */}
          <div className="hidden lg:grid lg:grid-cols-12 items-center gap-4 relative min-h-[460px]">
            {/* SVG Connecting Circuit Traces */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1200 480"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="traceGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0FA4AF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#AFDDE5" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="traceGradRight" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#0FA4AF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#AFDDE5" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Top Left Line to Smart Contracts */}
              <path
                d="M 320 120 C 420 120, 480 200, 520 220"
                stroke="url(#traceGradLeft)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                className="opacity-70"
              />
              {/* Bottom Left Line to Distributed Ledger */}
              <path
                d="M 320 360 C 430 360, 460 310, 510 270"
                stroke="url(#traceGradLeft)"
                strokeWidth="1.5"
                className="opacity-60"
              />
              {/* Top Right Line to Cryptographic Security */}
              <path
                d="M 880 120 C 780 120, 720 200, 680 220"
                stroke="url(#traceGradRight)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                className="opacity-70"
              />
              {/* Bottom Right Line to Immutable Records */}
              <path
                d="M 880 360 C 770 360, 740 310, 690 270"
                stroke="url(#traceGradRight)"
                strokeWidth="1.5"
                className="opacity-60"
              />

              {/* Circuit Junction Nodes */}
              <circle cx="390" cy="120" r="4" fill="#0FA4AF" filter="url(#glowFilter)" />
              <circle cx="390" cy="120" r="8" stroke="#AFDDE5" strokeWidth="1" opacity="0.6" />

              <circle cx="260" cy="240" r="3.5" fill="#0FA4AF" filter="url(#glowFilter)" />

              <circle cx="810" cy="120" r="4" fill="#0FA4AF" filter="url(#glowFilter)" />
              <circle cx="810" cy="120" r="8" stroke="#AFDDE5" strokeWidth="1" opacity="0.6" />

              <circle cx="940" cy="240" r="3.5" fill="#0FA4AF" filter="url(#glowFilter)" />
              <circle cx="730" cy="335" r="4" fill="#0FA4AF" filter="url(#glowFilter)" />
              <circle cx="470" cy="335" r="4" fill="#0FA4AF" filter="url(#glowFilter)" />
            </svg>

            {/* Left Column (2 Floating Cards) */}
            <div className="col-span-3 flex flex-col justify-between gap-12 z-10 pl-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FeatureCard card={cardTopLeft} className="max-w-[240px]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <FeatureCard card={cardBottomLeft} className="max-w-[240px]" />
              </motion.div>
            </div>

            {/* Center Column (3D Isometric Blockchain Node Cluster) */}
            <div className="col-span-6 relative flex items-center justify-center py-4 z-10 animate-float-slow">
              <BlockchainClusterGraphic />
            </div>

            {/* Right Column (2 Floating Cards) */}
            <div className="col-span-3 flex flex-col justify-between gap-12 z-10 pr-2 items-end">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full flex justify-end"
              >
                <FeatureCard card={cardTopRight} className="max-w-[240px]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full flex justify-end"
              >
                <FeatureCard card={cardBottomRight} className="max-w-[240px]" />
              </motion.div>
            </div>
          </div>

          {/* MOBILE & TABLET LAYOUT (< lg) */}
          <div className="block lg:hidden">
            {/* Center Graphic */}
            <BlockchainClusterGraphic className="my-3 max-w-[380px] sm:max-w-[440px] mx-auto animate-float-slow" />

            {/* 4 Small Floating Boxes in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3.5 mt-3 sm:mt-6 max-w-sm sm:max-w-md mx-auto px-1 sm:px-3">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <FeatureCard card={cardTopLeft} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <FeatureCard card={cardTopRight} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <FeatureCard card={cardBottomLeft} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <FeatureCard card={cardBottomRight} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* BOTTOM TECHNOLOGY RIBBON */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-6 sm:pt-10 border-t border-[#AFDDE5]/60"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
            {bottomBadges.map((badgeItem, index) => (
              <React.Fragment key={badgeItem.id}>
                <div className="group flex items-center gap-3 cursor-default transition-all duration-200 hover:-translate-y-0.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 border border-[#AFDDE5] flex items-center justify-center shadow-xs group-hover:bg-[#E6F7F9] group-hover:border-[#0FA4AF] transition-colors duration-200">
                    {renderBadgeIcon(badgeItem.iconType)}
                  </div>
                  <span className="text-[11px] sm:text-xs font-extrabold tracking-wider text-[#081E52] uppercase group-hover:text-[#0FA4AF] transition-colors duration-200">
                    {badgeItem.label}
                  </span>
                </div>

                {/* Vertical Divider (between items, not after last) */}
                {index < bottomBadges.length - 1 && (
                  <div className="hidden md:block h-6 w-px bg-[#AFDDE5]/80" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
