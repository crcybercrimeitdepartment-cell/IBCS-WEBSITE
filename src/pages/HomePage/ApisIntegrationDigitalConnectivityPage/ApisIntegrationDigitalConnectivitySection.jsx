import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';
import {
  ArrowRight,
  AppWindow,
  Settings,
  Database,
  Cloud,
  ShieldCheck,
  Landmark,
} from 'lucide-react';

export default function ApisIntegrationDigitalConnectivitySection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    if (e) e.preventDefault();
    window.location.hash = '#apis-integration-digital-connectivity-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  const integrationNodes = [
    {
      id: 'applications',
      title: 'Applications',
      icon: AppWindow,
    },
    {
      id: 'apis',
      title: 'APIs',
      icon: Settings,
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: Database,
    },
    {
      id: 'cloud',
      title: 'Cloud Services',
      icon: Cloud,
    },
    {
      id: 'security',
      title: 'Security',
      icon: ShieldCheck,
    },
    {
      id: 'government',
      title: 'Government Systems',
      icon: Landmark,
    },
  ];

  return (
    <section
      id="apis-integration-digital-connectivity"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#EEF8FC] via-[#F4FBFE] to-[#E5F3F9] border-b border-[#00A8B5]/15 overflow-hidden relative"
    >
      {/* Background Decorative Theme (Waves, Soft Glows, Floating Glass Orbs & Dot Matrices) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Ambient Radial Background Lights */}
        <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-sky-200/50 via-blue-100/40 to-indigo-100/30 blur-3xl opacity-80" />
        <div className="absolute -bottom-32 -right-32 w-[750px] h-[650px] rounded-full bg-gradient-to-tl from-cyan-200/60 via-sky-100/40 to-transparent blur-3xl opacity-90" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-blue-100/30 via-purple-100/20 to-cyan-100/30 blur-3xl opacity-70" />

        {/* Floating Glass Spheres */}
        <div className="absolute top-16 left-20 w-16 h-16 rounded-full bg-gradient-to-br from-white/90 via-sky-200/60 to-blue-300/40 blur-[0.5px] shadow-[0_10px_25px_rgba(0,168,181,0.2)] opacity-80" />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-white/90 via-sky-200/60 to-blue-300/40 blur-[0.5px] shadow-[0_10px_25px_rgba(0,168,181,0.2)] opacity-75" />
        <div className="absolute bottom-24 right-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-white/90 via-sky-200/60 to-blue-300/40 blur-[0.5px] shadow-[0_10px_25px_rgba(0,168,181,0.2)] opacity-80" />

        {/* Top-Right & Bottom-Left Dot Matrix */}
        <div className="absolute top-8 right-8 grid grid-cols-5 gap-2 opacity-25">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#00A8B5]" />
          ))}
        </div>
        <div className="absolute bottom-8 left-8 grid grid-cols-5 gap-2 opacity-25">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#00A8B5]" />
          ))}
        </div>

        {/* Flowing Glowing Background Waves SVG */}
        <svg className="w-full h-full min-h-[650px] absolute inset-0 opacity-60" viewBox="0 0 1440 750" fill="none" preserveAspectRatio="none">
          <path d="M-100,280 C250,80 800,480 1350,220 C1450,170 1550,260 1650,300 L1650,850 L-100,850 Z" fill="#FFFFFF" opacity="0.45" />
        </svg>
      </div>

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* ================= 1. TOP CENTER HEADER ================= */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-14">


            {/* Main Section Title (Original Color Restored) */}
            <AnimatedSectionHeading
              text="APIs, Integration & Digital Connectivity"
              className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.15] tracking-tight text-[#002D33] mb-3 text-center"
            />

            {/* Flanked Subtitle Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-10 sm:w-16 h-[1px] bg-[#00A8B5]/40" />
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#00A8B5] uppercase">
                CONNECTING SYSTEMS &middot; UNLOCKING POSSIBILITIES
              </span>
              <div className="w-10 sm:w-16 h-[1px] bg-[#00A8B5]/40" />
            </motion.div>
          </div>

          {/* ================= 2. HORIZONTAL SINE WAVE NODE FLOW VISUAL ================= */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="w-full relative py-6 mb-12"
          >
            {/* Horizontal Connecting Sine-Wave SVG Background */}
            <svg className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 pointer-events-none hidden lg:block z-0" viewBox="0 0 1200 120" fill="none" preserveAspectRatio="none">
              <path d="M 0 60 C 150 10, 250 110, 400 60 C 550 10, 650 110, 800 60 C 950 10, 1050 110, 1200 60" stroke="#00A8B5" strokeWidth="2" opacity="0.45" fill="none" />
              <path d="M 0 60 C 150 110, 250 10, 400 60 C 550 110, 650 10, 800 60 C 950 110, 1050 10, 1200 60" stroke="#00A8B5" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.3" fill="none" />
              
              {/* Wave Dots */}
              <circle cx="100" cy="60" r="4" fill="#00A8B5" />
              <circle cx="300" cy="60" r="4" fill="#00A8B5" />
              <circle cx="500" cy="60" r="4" fill="#00A8B5" />
              <circle cx="700" cy="60" r="4" fill="#00A8B5" />
              <circle cx="900" cy="60" r="4" fill="#00A8B5" />
              <circle cx="1100" cy="60" r="4" fill="#00A8B5" />
            </svg>

            {/* 6 Circular Node Badges (Original Icon & Title Colors Restored) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-between text-center relative z-10 max-w-6xl mx-auto">
              {integrationNodes.map((node, idx) => {
                const NodeIcon = node.icon;
                return (
                  <motion.div
                    key={node.id}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3 + (idx % 3) * 0.5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: idx * 0.2,
                    }}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-cyan-200/90 shadow-[0_10px_25px_rgba(0,168,181,0.15)] flex items-center justify-center text-[#00A8B5] mb-3 group-hover:scale-110 group-hover:border-[#00A8B5] transition-all duration-300">
                      <NodeIcon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2} />
                    </div>
                    <h4 className="text-sm sm:text-base font-extrabold text-[#002D33] tracking-tight leading-snug">
                      {node.title}
                    </h4>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ================= 3. 2-COLUMN DESCRIPTION WITH CENTER DIVIDER (UNTOUCHED TEXT) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 text-center lg:text-left max-w-5xl mx-auto mb-10 relative"
          >
            {/* Center Vertical Divider Line (Desktop) */}
            <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-[#00A8B5]/25" />

            {/* Original Paragraph 1 (Untouched) */}
            <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#002D33]/85 font-medium pr-0 lg:pr-4 text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              Modern software products rarely operate in isolation. Our API and integration technologies help applications, databases, cloud services and digital platforms communicate through structured and secure technology interfaces.
            </p>

            {/* Original Paragraph 2 (Untouched) */}
            <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#002D33]/85 font-medium pl-0 lg:pl-4 text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              We develop APIs, middleware, connectors and interoperability products that enable software ecosystems to exchange information and functionality. These technologies can support enterprise applications, SaaS platforms, government systems, cybersecurity products and other digital products requiring reliable system connectivity.
            </p>
          </motion.div>

          {/* ================= 4. CENTERED SOLID CYAN CTA BUTTON ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
            className="w-full flex justify-center pt-2"
          >
            <button
              type="button"
              onClick={handleCtaClick}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#00A8B5] hover:bg-[#002D33] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#00A8B5]/30 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/30"
            >
              <span>Explore More</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
