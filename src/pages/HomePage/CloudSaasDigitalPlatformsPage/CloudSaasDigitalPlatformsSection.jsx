import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';
import {
  ArrowRight,
  Cloud,
  ShieldCheck,
  Server,
  TrendingUp,
} from 'lucide-react';

export default function CloudSaasDigitalPlatformsSection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    if (e) e.preventDefault();
    window.location.hash = '#cloud-saas-digital-platforms-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  const microFeatures = [
    {
      title: 'Cloud-Native',
      desc: 'Built for performance and flexibility.',
      icon: Cloud,
      iconBg: 'bg-[#E8F1FF] text-[#2563EB] border-[#BFDBFE]',
    },
    {
      title: 'Secure APIs',
      desc: 'Reliable, compliant and future-ready.',
      icon: ShieldCheck,
      iconBg: 'bg-[#E2F7F9] text-[#00A8B5] border-[#B2EBF2]',
    },
    {
      title: 'High Availability',
      desc: 'Designed for uninterrupted experiences.',
      icon: Server,
      iconBg: 'bg-[#F6E8FF] text-[#A855F7] border-[#E9D5FF]',
    },
    {
      title: 'Scalable Deployment',
      desc: 'Grow effortlessly as your business evolves.',
      icon: TrendingUp,
      iconBg: 'bg-[#E0F7F4] text-[#0D9488] border-[#B2DFDB]',
    },
  ];

  return (
    <section
      id="cloud-saas-digital-platforms"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#E2F7F9] via-[#E8F8FA] to-[#CEF0F5] border-b border-[#00A8B5]/15 overflow-hidden relative"
    >
      {/* Background Decorative Grid Dots, 3D Spheres & Light Wave Contours */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

        {/* Soft Ambient Radial Lighting & Large Glass Spheres */}
        <div className="absolute top-10 right-20 w-96 h-96 rounded-full bg-white/60 blur-3xl opacity-90" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-gradient-to-br from-white/70 via-[#9BE5EE]/50 to-[#00A8B5]/30 blur-[2px] shadow-[0_25px_60px_rgba(0,168,181,0.2)]" />

        {/* Floating 3D Orbs / Spheres */}
        <div className="absolute top-16 left-28 w-7 h-7 rounded-full bg-gradient-to-tr from-[#86E4EE] to-white/95 shadow-[0_8px_20px_rgba(0,168,181,0.25)] border border-white/40" />
        <div className="absolute top-1/2 -translate-y-12 left-10 w-10 h-10 rounded-full bg-gradient-to-tr from-[#7BE0EC] to-white/95 shadow-[0_10px_25px_rgba(0,168,181,0.3)] border border-white/50" />
        <div className="absolute bottom-12 left-44 w-8 h-8 rounded-full bg-gradient-to-tr from-[#9EE8F2] to-white/90 shadow-[0_8px_20px_rgba(0,168,181,0.25)] border border-white/40" />

        {/* Flowing Translucent Wave Vector Contours */}
        <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-70" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#BCEEF3" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#80E0EC" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="waveGradBtm" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#A8EBF2" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00A8B5" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Sweeping Soft Ribbons */}
          <path d="M-100,-50 C300,100 700,20 1200,250 C1400,350 1500,200 1600,100 L1600,-100 L-100,-100 Z" fill="url(#waveGradTop)" opacity="0.6" />
          <path d="M-100,520 C400,370 800,670 1300,470 C1450,420 1550,570 1650,620 L1650,900 L-100,900 Z" fill="url(#waveGradBtm)" opacity="0.65" />

          {/* Smooth Light White Curve Lines */}
          <path d="M-50,150 C350,300 850,100 1350,320" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
          <path d="M-100,200 C300,350 800,150 1400,370" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
          <path d="M-100,580 C300,430 750,680 1250,480" stroke="#FFFFFF" strokeWidth="2" opacity="0.75" />
        </svg>
      </div>

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= 1. TOP CENTER HEADER ================= */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Top Flanked Pill Indicator */}
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <div className="w-10 sm:w-16 h-[1.5px] bg-[#00A8B5]/60" />
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#00A8B5] uppercase">
              OUR EXPERTISE
            </span>
            <div className="w-10 sm:w-16 h-[1.5px] bg-[#00A8B5]/60" />
          </div>

          {/* Main Title */}
          <AnimatedSectionHeading
            text="Cloud, SaaS & Digital Platforms"
            className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-[#002D33] sm:text-4xl lg:text-[46px] mb-2 text-center"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-xs sm:text-sm font-semibold text-[#3B666B] text-center"
          >
            Scalable platforms for a connected world.
          </motion.p>
        </div>

        {/* ================= 2. MAIN 2-COLUMN SPLIT SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT COLUMN: 4 MICRO-FEATURE CARDS GRID (MATCHING REFERENCE IMAGE) + EXPLORE MORE BUTTON */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 my-2 lg:my-0 order-2 lg:order-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full">
              {microFeatures.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-2.5 rounded-2xl transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center shrink-0 ${item.iconBg} group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                      <ItemIcon className="w-6 h-6" strokeWidth={2.2} />
                    </div>
                    <div className="flex flex-col pt-1">
                      <h4 className="text-base sm:text-lg font-extrabold text-[#002D33] tracking-tight leading-snug mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#4A7277] font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Solid Cyan CTA Pill Button (Explore More) - LEFT SIDE */}
            <div className="pt-2 w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#00A8B5] hover:bg-[#002D33] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#00A8B5]/30 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/30"
              >
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: OVERVIEW & ORIGINAL DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2"
          >


            {/* Subheading */}
            <h3 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#002D33] tracking-tight leading-tight mb-5 text-center lg:text-left">
              Building Scalable Cloud Platforms
            </h3>

            {/* ORIGINAL EXACT DESCRIPTION PARAGRAPHS (UNTOUCHED) */}
            <div className="space-y-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#002D33]/85 font-medium text-center lg:text-left text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              <p>
                We design and develop cloud-based software products and Software-as-a-Service platforms built for scalable digital environments. Our cloud product engineering approach combines application architecture, databases, APIs, security, automation and distributed technologies to create reliable digital platforms.
              </p>
              <p>
                From SaaS products and enterprise applications to specialised cloud platforms, our technology products are designed for continuous operation, scalable deployment and ongoing product improvement. We focus on building cloud technology that can support growing users, workloads and digital requirements.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
