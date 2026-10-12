import { motion } from 'framer-motion';
import { ArrowRight, Cpu, ShieldCheck, Cloud, Layers, Lock, Activity, CheckCircle2, Database, Server, Zap } from 'lucide-react';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';


// Truly scattered 3D floating icons (varying depth sizes, non-circular 2D positions, zero laptop overlap)
const floatingIcons = [
  { id: 1, icon: Cpu, pos: "top-[2%] left-[12%]", size: "w-10 h-10 shadow-md", delay: "0s", duration: "3.6s", label: "AI Solutions" },
  { id: 2, icon: ShieldCheck, pos: "top-[22%] left-[-6%]", size: "w-8 h-8 opacity-90 shadow-sm", delay: "0.6s", duration: "4.2s", label: "Cybersecurity" },
  { id: 3, icon: Cloud, pos: "top-[-8%] left-[38%]", size: "w-9 h-9 opacity-85 shadow-sm", delay: "1.2s", duration: "3.8s", label: "Cloud Architecture" },
  { id: 4, icon: Database, pos: "top-[68%] left-[8%]", size: "w-11 h-11 shadow-lg", delay: "0.3s", duration: "4.5s", label: "Data Intelligence" },
  { id: 5, icon: Layers, pos: "top-[-4%] right-[4%]", size: "w-10 h-10 shadow-md", delay: "0.9s", duration: "3.9s", label: "Scalable Platforms" },
  { id: 6, icon: Lock, pos: "top-[18%] right-[18%]", size: "w-8 h-8 opacity-90 shadow-sm", delay: "0.4s", duration: "4.1s", label: "Digital Trust" },
  { id: 7, icon: Server, pos: "top-[52%] right-[-5%]", size: "w-11 h-11 shadow-lg", delay: "1.1s", duration: "3.7s", label: "Enterprise Infrastructure" },
  { id: 8, icon: Zap, pos: "top-[78%] right-[22%]", size: "w-9 h-9 opacity-85 shadow-sm", delay: "0.7s", duration: "4.4s", label: "High Performance" },
];

export default function IntroductionSection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    if (onOpenPage) {
      onOpenPage();
    } else {
      const nextSection = document.getElementById('products-platforms');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = '#products-platforms';
      }
    }
  };

  return (
    <section id="introduction" className="relative scroll-mt-20 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#F0F9FA] via-[#E4F4F7] to-[#D5EEF2] border-b border-[#D4AF37]/20 overflow-hidden">

      {/* Background Decorative Wave SVG & Dot Matrix */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Background Radial Glows */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#081E52]/10 rounded-full blur-3xl"></div>

        {/* Top-Right Decorative Dots */}
        <div className="absolute top-8 right-12 grid grid-cols-6 gap-2 opacity-25">
          {[...Array(24)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0FA4AF]"></span>
          ))}
        </div>

        {/* Bottom-Left Decorative Dots */}
        <div className="absolute bottom-8 left-12 grid grid-cols-6 gap-2 opacity-25">
          {[...Array(24)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0FA4AF]"></span>
          ))}
        </div>

        {/* Background Decorative Wave Curves */}
        <svg className="absolute -bottom-20 -right-20 w-[600px] h-[600px] opacity-25 text-[#D4AF37]/20" viewBox="0 0 500 500" fill="currentColor">
          <path d="M0,250 C150,180 350,320 500,250 L500,500 L0,500 Z" />
        </svg>
      </div>

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Category, Heading & 3 Paragraphs */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">


            {/* Main Heading - Exclusive 3D Letter-by-Letter Fold Animation on Scroll */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.05,
                  },
                },
              }}
              className="font-display text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.1] tracking-tight text-[#081E52] mb-5 text-center lg:text-left"
            >
              <span className="sr-only">Introduction</span>
              <span aria-hidden="true" className="inline-block" style={{ perspective: '800px', transformStyle: 'preserve-3d' }}>
                {'Introduction'.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: {
                        opacity: 0,
                        rotateX: -90,
                        y: -22,
                        transformOrigin: 'top center',
                      },
                      visible: {
                        opacity: 1,
                        rotateX: 0,
                        y: 0,
                        transition: {
                          duration: 0.55,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      },
                    }}
                    style={{ transformStyle: 'preserve-3d', display: 'inline-block' }}
                    className="inline-block will-change-transform"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>

            {/* Paragraphs */}
            <div className="space-y-3.5 text-[15px] sm:text-[16px] leading-relaxed text-[#081E52]/85 font-medium text-center lg:text-left">
              <p>
                <strong className="font-bold text-[#081E52]">IB Cyber Security Private Limited (IBCS)</strong> is a technology-driven product company building secure, intelligent, and scalable digital solutions for government, law enforcement, enterprises, and financial institutions.
              </p>
              <p>
                IBCS develops innovative cybersecurity platforms, investigation and intelligence tools, AI-powered solutions, government technology platforms, digital evidence and forensic systems, and SaaS products.
              </p>
              <p>
                With a strong focus on innovation, reliability, customization, and advanced technology, we transform complex digital challenges into purposeful products that strengthen security, intelligence, and decision-making, advancing our vision of a <strong className="font-bold text-[#081E52]">Cyber Safe India</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Sleek Compact Laptop, Scattered Icons & Far-Right Aligned Explore Now Button */}
          <div className="lg:col-span-6 w-full flex flex-col items-center lg:items-end">

            {/* Graphic Illustration Container */}
            <div className="relative w-full max-w-lg aspect-[1.35/1] flex items-center justify-center p-6 sm:p-10 mb-4">

              {/* 8 Asymmetrically Scattered 3D Floating Icon Badges */}
              {floatingIcons.map(({ id, icon: Icon, pos, size, delay, duration, label }) => (
                <div
                  key={id}
                  className={`absolute ${pos} ${size} z-20 rounded-2xl bg-white/95 backdrop-blur-md border border-[#0FA4AF]/25 flex items-center justify-center text-[#00A4B4] hover:scale-115 transition-all duration-300 animate-bounce`}
                  style={{
                    animationDelay: delay,
                    animationDuration: duration
                  }}
                  title={label}
                >
                  <Icon className="w-1/2 h-1/2 text-[#00A4B4]" />
                </div>
              ))}

              {/* Sleek Compact Laptop (Centered, Zero Overlap) */}
              <div className="relative z-10 w-[190px] sm:w-[230px] lg:w-[250px] mx-auto flex flex-col items-center">

                {/* Laptop Display Screen */}
                <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#1C2C30] via-[#0F1C1F] to-[#0A1315] p-2 sm:p-2.5 border-2 border-[#2A444A] shadow-xl">

                  {/* Top Bezel Webcam Dot */}
                  <div className="flex justify-center mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A4B4]/60 border border-[#003135]"></span>
                  </div>

                  {/* Screen Dashboard Display */}
                  <div className="rounded-xl bg-[#001D21] p-3 aspect-[1.6/1] flex flex-col justify-between overflow-hidden relative border border-[#0FA4AF]/20 shadow-inner">

                    {/* Screen Glare Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>

                    {/* Window Title Bar */}
                    <div className="flex items-center justify-between border-b border-[#0FA4AF]/25 pb-1 mb-1 relative z-10">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F]"></span>
                      </div>
                      <div className="flex items-center gap-1 text-[7px] sm:text-[8px] text-[#0FA4AF] font-mono font-bold tracking-widest uppercase">
                        <ShieldCheck className="w-2.5 h-2.5 text-[#0FA4AF]" />
                        <span>CYBERSECURITY OS</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                        <span className="text-[7px] text-emerald-400 font-mono font-bold">ONLINE</span>
                      </div>
                    </div>

                    {/* Dashboard Screen Content */}
                    <div className="grid grid-cols-12 gap-2 h-full items-center relative z-10">

                      {/* Shield Security Status */}
                      <div className="col-span-5 flex flex-col items-center justify-center p-1.5 bg-gradient-to-br from-[#003840]/90 to-[#002227]/90 rounded-lg border border-[#0FA4AF]/30 shadow-md">
                        <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#0FA4AF]/30 to-[#005159]/40 border border-[#0FA4AF] flex items-center justify-center text-[#35D7E4] mb-0.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#35D7E4]" />
                          <Lock className="w-2 h-2 text-white absolute bottom-0 right-0 bg-[#003840] rounded-full p-0.5" />
                        </div>
                        <span className="text-[7px] font-extrabold text-white tracking-widest">SECURE</span>
                        <span className="text-[6px] font-semibold text-[#0FA4AF] flex items-center gap-0.5">
                          <CheckCircle2 className="w-1.5 h-1.5 text-emerald-400" /> Protected
                        </span>
                      </div>

                      {/* Telemetry & Charts */}
                      <div className="col-span-7 flex flex-col justify-between space-y-1">
                        <div className="p-1 bg-[#003840]/60 rounded border border-[#0FA4AF]/20 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-[#35D7E4]"></span>
                            <span className="text-[7px] font-mono font-bold text-[#E4F4F7]">MONITORING</span>
                          </div>
                          <Activity className="w-2 h-2 text-[#35D7E4] animate-pulse" />
                        </div>

                        <div className="p-1 bg-[#001D21]/80 rounded border border-[#0FA4AF]/15 flex items-center justify-between gap-1">
                          <div className="flex items-end gap-0.5 h-5">
                            <span className="w-1 h-2.5 bg-[#35D7E4] rounded-t"></span>
                            <span className="w-1 h-4.5 bg-[#35D7E4] rounded-t"></span>
                            <span className="w-1 h-2 bg-[#0FA4AF] rounded-t"></span>
                            <span className="w-1 h-5 bg-[#35D7E4] rounded-t"></span>
                            <span className="w-1 h-3.5 bg-[#0FA4AF] rounded-t"></span>
                          </div>
                          <div className="relative w-5 h-5 flex items-center justify-center">
                            <svg className="w-5 h-5 transform -rotate-90" viewBox="0 0 36 36">
                              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#003840" strokeWidth="4" />
                              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#35D7E4" strokeWidth="4" strokeDasharray="88, 100" />
                            </svg>
                            <span className="absolute text-[6px] font-mono font-bold text-white">88%</span>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                {/* Sleek Laptop Base Lip */}
                <div className="h-2 w-[102%] -ml-[1%] bg-gradient-to-b from-[#2A444A] via-[#1C2C30] to-[#122225] rounded-b-xl border-x border-b border-[#2A444A] flex justify-center items-center shadow-md">
                  <div className="w-10 sm:w-12 h-0.5 bg-[#0FA4AF]/50 rounded-full"></div>
                </div>

                {/* Laptop Floor Shadow */}
                <div className="h-2.5 w-[104%] -ml-[2%] bg-[#003135]/40 rounded-full blur-md mt-0.5"></div>

              </div>

            </div>

            {/* Explore Now Button Aligned Full Right */}
            <div className="pt-2 w-full flex justify-center lg:justify-end">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 text-white text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
