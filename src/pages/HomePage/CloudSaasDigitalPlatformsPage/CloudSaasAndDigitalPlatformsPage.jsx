import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Home } from "lucide-react";
import { cardsData } from "./CloudSaasAndDigitalPlatformsPageData";

// Animated product illustrations
const cloudPath = 'M40 65 C23 65 23 42 40 42 C43 20 76 19 82 40 C105 33 116 65 96 65 Z';

function Signal({ path, delay = '0s', duration = '3s' }) {
  return <circle r="2.5" fill="currentColor" stroke="none">
    <animateMotion path={path} dur={duration} begin={delay} repeatCount="indefinite" />
    <animate attributeName="opacity" values="0.3;1;0.3" dur={duration} repeatCount="indefinite" />
  </circle>;
}

function CloudShape() {
  return <path d={cloudPath} fill="currentColor" fillOpacity="0.08" />;
}

function Server({ x, y }) {
  return <g>
    <rect x={x} y={y} width="28" height="16" rx="3" fill="currentColor" fillOpacity="0.08" />
    <path d={`M${x + 5} ${y + 8}h10`} opacity="0.6" />
    <circle cx={x + 22} cy={y + 8} r="1.5" fill="currentColor">
      <animate attributeName="opacity" values="0.2;1;0.2" dur="1.8s" begin={`${x / 100}s`} repeatCount="indefinite" />
    </circle>
  </g>;
}

function ProductIllustration({ accent, type }) {
  return (
    <svg viewBox="0 0 140 140" aria-hidden="true" className="absolute bottom-0 right-0 w-40 h-40 md:w-48 md:h-48 pointer-events-none select-none" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: accent }}>
      <circle cx="75" cy="75" r="50" fill="currentColor" fillOpacity="0.04" strokeOpacity="0.12" />
      <path d="M20 45H125M20 75H125M20 105H125M45 20V125M75 20V125M105 20V125" strokeWidth="0.5" opacity="0.08" />
      <g opacity="0.55">
        {type === 1 && <>
          <rect x="25" y="30" width="90" height="68" rx="7" fill="currentColor" fillOpacity="0.05" />
          <path d="M25 46H115M34 38h2m5 0h2m5 0h2M40 61h24M40 69h16" />
          <rect x="76" y="57" width="25" height="26" rx="4" />
          <path d="M41 108C67 123 104 112 107 91M101 96l6-5 3 7" strokeDasharray="4 3">
            <animate attributeName="stroke-dashoffset" values="28;0" dur="3s" repeatCount="indefinite" />
          </path>
          <Signal path="M25 46H115V91Q115 98 108 98H32Q25 98 25 91Z" />
        </>}
        {type === 2 && <>
          <g><CloudShape /><animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur="4s" repeatCount="indefinite" /></g>
          <path d="M48 70V88H33V103M70 70V103M92 70V88H108V103" />
          {[23,60,98].map(x => <rect key={x} x={x} y="103" width="20" height="15" rx="3" />)}
          <Signal path="M48 70V88H33V103" /><Signal path="M92 70V88H108V103" delay="1s" />
        </>}
        {type === 3 && <>
          <rect x="53" y="53" width="34" height="34" rx="8" fill="currentColor" fillOpacity="0.12" />
          <path d="M62 70h16M70 62v16M70 53V32M87 70h21M70 87v21M53 70H32" />
          {[[60,12],[108,60],[60,108],[12,60]].map(([x,y]) => <rect key={x + '-' + y} x={x} y={y} width="20" height="20" rx="5" />)}
          <Signal path="M70 32V53" /><Signal path="M87 70H108" delay="0.7s" /><Signal path="M70 108V87" delay="1.4s" />
          <circle cx="70" cy="70" r="26" opacity="0.25"><animate attributeName="r" values="23;36;23" dur="3s" repeatCount="indefinite" /></circle>
        </>}
        {type === 4 && <>
          <path d="M70 28L112 60L96 110H42L25 60ZM25 60H112M70 28L42 110M70 28L96 110" opacity="0.45" />
          {[[70,28],[112,60],[96,110],[42,110],[25,60]].map(([x,y]) => <circle key={x} cx={x} cy={y} r="7" fill="currentColor" fillOpacity="0.15" />)}
          <Signal path="M70 28L112 60L96 110H42L25 60Z" duration="5s" /><Signal path="M42 110L70 28L96 110" delay="1s" />
        </>}
        {type === 5 && <>
          <CloudShape /><path d="M70 65V81M34 91V81H106V91M70 81V91" />
          {[20,56,92].map(x => <g key={x}><Server x={x} y={91} /><Server x={x} y={111} /></g>)}
          <Signal path="M70 65V81H106V91" /><Signal path="M70 65V81H34V91" delay="1s" />
        </>}
        {type === 6 && <>
          <ellipse cx="70" cy="35" rx="34" ry="12" fill="currentColor" fillOpacity="0.12" />
          <path d="M36 35V101C36 117 104 117 104 101V35M36 57C36 73 104 73 104 57M36 79C36 95 104 95 104 79" />
          <ellipse cx="70" cy="35" rx="25" ry="7" opacity="0.25"><animate attributeName="opacity" values="0.15;0.7;0.15" dur="2.5s" repeatCount="indefinite" /></ellipse>
          <Signal path="M36 35V101C36 117 104 117 104 101V35" duration="4s" />
        </>}
        {type === 7 && <>
          {[{x:30,y:85,h:27},{x:55,y:65,h:47},{x:80,y:43,h:69}].map(({x,y,h},i) => <rect key={x} x={x} y={y} width="16" height={h} rx="3" fill="currentColor" fillOpacity="0.12"><animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" /></rect>)}
          <path d="M24 73L52 49L74 54L111 22M96 22H111V37M24 116H116" />
          <Signal path="M24 73L52 49L74 54L111 22" />
        </>}
        {type === 8 && <>
          <CloudShape /><path d="M45 65V83H26V101H56M84 101H113V53H105" strokeDasharray="4 3"><animate attributeName="stroke-dashoffset" values="28;0" dur="3s" repeatCount="indefinite" /></path>
          <g><animateTransform attributeName="transform" type="rotate" from="0 70 101" to="360 70 101" dur="10s" repeatCount="indefinite" /><circle cx="70" cy="101" r="14" /><circle cx="70" cy="101" r="6" />{[0,45,90,135,180,225,270,315].map(a => <path key={a} d="M70 82V87" transform={`rotate(${a} 70 101)`} strokeWidth="3" />)}</g>
          <Signal path="M45 65V83H26V101H50" />
        </>}
        {type === 9 && <>
          <CloudShape /><path d="M70 65V78M33 91V78H107V91M70 78V91" />
          {[22,59,96].map((x,i) => <g key={x}><rect x={x} y="91" width="23" height="31" rx="4" /><circle cx={x+11.5} cy="100" r="3" /><path d={`M${x+6} 114v-3a5.5 5.5 0 0 1 11 0v3`} /><rect x={x-4} y="87" width="31" height="39" rx="6" strokeDasharray="2 3" opacity="0.3"><animate attributeName="opacity" values="0.1;0.6;0.1" dur="3s" begin={`${i}s`} repeatCount="indefinite" /></rect></g>)}
          <Signal path="M70 65V78H107V91" />
        </>}
        {type === 10 && <>
          <path d="M70 22L108 38V69C108 93 89 110 70 119C51 110 32 93 32 69V38Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M70 32L99 44V69C99 87 85 102 70 109C55 102 41 87 41 69V44Z" opacity="0.3" />
          <rect x="54" y="65" width="32" height="25" rx="4" /><path d="M60 65V57a10 10 0 0 1 20 0v8M70 75v6" />
          <path d="M44 45H96" opacity="0.6"><animateTransform attributeName="transform" type="translate" values="0 0;0 44;0 0" dur="3s" repeatCount="indefinite" /></path>
          <Signal path="M70 22L108 38V69C108 93 89 110 70 119C51 110 32 93 32 69V38Z" duration="5s" />
        </>}
        {type === 11 && <>
          <path d="M70 23L118 47L70 71L22 47ZM22 68L70 92L118 68M22 89L70 113L118 89" fill="currentColor" fillOpacity="0.06" />
          <path d="M22 47V89M70 71V113M118 47V89" strokeDasharray="3 4" />
          <path d="M60 40L51 47L60 54M80 40L89 47L80 54M74 38L66 56" />
          <Signal path="M70 23L118 47L70 71L22 47Z" duration="4s" /><Signal path="M22 68L70 92L118 68" delay="1s" />
        </>}
        {type === 12 && <>
          <rect x="25" y="30" width="90" height="68" rx="6" fill="currentColor" fillOpacity="0.06" />
          <path d="M25 44H115M35 37h19M60 98v12M80 98v12M48 111H92M33 74H47L54 59L64 86L73 68L80 74H106" />
          <Signal path="M33 74H47L54 59L64 86L73 68L80 74H106" />
          <circle cx="103" cy="37" r="2" fill="currentColor"><animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" repeatCount="indefinite" /></circle>
          <path d="M114 102A17 17 0 0 1 97 119M97 114v5h5" strokeDasharray="3 2"><animate attributeName="stroke-dashoffset" values="20;0" dur="3s" repeatCount="indefinite" /></path>
        </>}
      </g>
    </svg>
  );
}

export const CloudSaasDigitalPlatformsPage = CloudSaasAndDigitalPlatformsPage;

// Responsive pagination
function SharedPagination({ totalItems, currentIndex, onPageChange, onPrev, onNext }) {
  const arrowClass = 'flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-[#024950] transition-colors hover:border-[#0FA4AF] hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0FA4AF] active:bg-cyan-100'

  return (
    <nav aria-label="Cloud product pages" className="relative z-20 mt-6 flex max-w-full items-center justify-center gap-3 rounded-full border border-slate-200/80 bg-white/95 p-2 shadow-sm md:gap-2">
      <button type="button" onClick={onPrev} aria-label="Previous page" className={arrowClass}>
        <ChevronLeft size={20} />
      </button>
      <span className="min-w-24 text-center font-sans text-sm font-medium tabular-nums text-slate-500 md:hidden" aria-label={`Page ${currentIndex + 1} of ${totalItems}`}>
        <span className="font-bold text-[#024950]">{currentIndex + 1}</span>
        <span className="mx-2" aria-hidden="true">/</span>
        {totalItems}
      </span>
      <div className="hidden items-center gap-1 md:flex">
        {Array.from({ length: totalItems }, (_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onPageChange(index)}
            aria-label={`Go to page ${index + 1}`}
            aria-current={index === currentIndex ? 'page' : undefined}
            className={`flex size-11 cursor-pointer items-center justify-center rounded-full text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0FA4AF] ${index === currentIndex ? 'bg-[#0FA4AF] text-white' : 'text-slate-600 hover:bg-cyan-50'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button type="button" onClick={onNext} aria-label="Next page" className={arrowClass}>
        <ChevronRight size={20} />
      </button>
    </nav>
  )
}

// Section layout and carousel
const chunkArray = (arr, size) =>
 Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
 arr.slice(i * size, i * size + size)
 );

const CARD_THEMES = [
 { id: 1, gradient: 'linear-gradient(135deg,#0a1628 0%,#1d4ed8 100%)', accent: '#60a5fa', border: 'rgba(96,165,250,0.22)', btnBg: 'linear-gradient(90deg,#1d4ed8,#3b82f6)', badge: 'SAAS PRODUCTS', btn: 'View Details' },
 { id: 2, gradient: 'linear-gradient(135deg,#042014 0%,#166534 100%)', accent: '#4ade80', border: 'rgba(74,222,128,0.22)', btnBg: 'linear-gradient(90deg,#15803d,#22c55e)', badge: 'CLOUD APPLICATIONS', btn: 'View Details' },
 { id: 3, gradient: 'linear-gradient(135deg,#150a3a 0%,#4c1d95 100%)', accent: '#c084fc', border: 'rgba(192,132,252,0.22)', btnBg: 'linear-gradient(90deg,#7c3aed,#a855f7)', badge: 'DIGITAL PLATFORMS', btn: 'View Details' },
 { id: 4, gradient: 'linear-gradient(135deg,#280000 0%,#991b1b 100%)', accent: '#f87171', border: 'rgba(248,113,113,0.22)', btnBg: 'linear-gradient(90deg,#b91c1c,#ef4444)', badge: 'DISTRIBUTED SYSTEMS', btn: 'View Details' },
 { id: 5, gradient: 'linear-gradient(135deg,#1c0a00 0%,#92400e 100%)', accent: '#fbbf24', border: 'rgba(251,191,36,0.22)', btnBg: 'linear-gradient(90deg,#d97706,#f59e0b)', badge: 'CLOUD INFRASTRUCTURE', btn: 'View Details' },
 { id: 6, gradient: 'linear-gradient(135deg,#012118 0%,#065f46 100%)', accent: '#34d399', border: 'rgba(52,211,153,0.22)', btnBg: 'linear-gradient(90deg,#059669,#10b981)', badge: 'CLOUD DATABASES', btn: 'View Details' },
 { id: 7, gradient: 'linear-gradient(135deg,#2d0024 0%,#9d174d 100%)', accent: '#f472b6', border: 'rgba(244,114,182,0.22)', btnBg: 'linear-gradient(90deg,#be185d,#ec4899)', badge: 'SCALABLE COMPUTING', btn: 'View Details' },
 { id: 8, gradient: 'linear-gradient(135deg,#150c2e 0%,#5b21b6 100%)', accent: '#a78bfa', border: 'rgba(167,139,250,0.22)', btnBg: 'linear-gradient(90deg,#6d28d9,#7c3aed)', badge: 'CLOUD AUTOMATION', btn: 'View Details' },
 { id: 9, gradient: 'linear-gradient(135deg,#0a1a2e 0%,#0369a1 100%)', accent: '#38bdf8', border: 'rgba(56,189,248,0.22)', btnBg: 'linear-gradient(90deg,#0369a1,#0ea5e9)', badge: 'MULTI-TENANT SAAS', btn: 'View Details' },
 { id: 10, gradient: 'linear-gradient(135deg,#0f172a 0%,#334155 100%)', accent: '#94a3b8', border: 'rgba(148,163,184,0.22)', btnBg: 'linear-gradient(90deg,#475569,#64748b)', badge: 'CLOUD SECURITY', btn: 'View Details' },
 { id: 11, gradient: 'linear-gradient(135deg,#083344 0%,#155e75 100%)', accent: '#67e8f9', border: 'rgba(103,232,249,0.22)', btnBg: 'linear-gradient(90deg,#0e7490,#06b6d4)', badge: 'DIGITAL INFRASTRUCTURE', btn: 'View Details' },
 { id: 12, gradient: 'linear-gradient(135deg,#172554 0%,#3730a3 100%)', accent: '#a5b4fc', border: 'rgba(165,180,252,0.22)', btnBg: 'linear-gradient(90deg,#4338ca,#6366f1)', badge: 'PRODUCT OPERATIONS', btn: 'View Details' },
];

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────── */
export default function CloudSaasAndDigitalPlatformsPage({ onClose }) {
 const [[page, direction], setPage] = useState([0, 0]);
 const [expandedId, setExpandedId] = useState(null);
 const [isHovered, setIsHovered] = useState(false);
 const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

 useEffect(() => {
   window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
   document.documentElement.scrollTop = 0;
   document.body.scrollTop = 0;
 }, []);

 const handleBack = () => {
   if (onClose) {
     onClose();
   } else {
     window.location.hash = '#cloud-saas-digital-platforms';
   }
 };

 const handleHome = () => {
   if (onClose) {
     onClose();
   }
   window.location.hash = '#home';
   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
 };

 // Dynamic resize listener for real-time responsiveness
 useEffect(() => {
 let wasMobile = window.innerWidth < 768;
 const handleResize = () => {
 const nowMobile = window.innerWidth < 768;
 if (nowMobile !== wasMobile) {
 setPage([0, 0]);
 setExpandedId(null);
 wasMobile = nowMobile;
 }
 setWindowWidth(window.innerWidth);
 };
 window.addEventListener("resize", handleResize);
 return () => window.removeEventListener("resize", handleResize);
 }, []);

 const isMobile = windowWidth < 768;
 const cardsPerPage = isMobile ? 1 : 2;
 const pages = chunkArray(cardsData, cardsPerPage);
 const totalPages = pages.length;
 const activeIndex = ((page % totalPages) + totalPages) % totalPages;

 const collapsedH = isMobile ? 340 : 406;
 const expandedH = "auto";

 const paginate = useCallback((dir) => {
 setExpandedId(null);
 // Alternate mobile entry sides on every navigation, including wraparound.
 setPage(([p, previousDirection]) => [
 p + dir,
 isMobile ? (previousDirection === 1 ? -1 : 1) : dir,
 ]);
 }, [isMobile]);

 /* Auto-scroll */
 useEffect(() => {
 if (expandedId !== null || isHovered) return;
 const t = setInterval(() => paginate(1), 4000);
 return () => clearInterval(t);
 }, [page, expandedId, isHovered, paginate]);

 const handleDragEnd = (_, { offset, velocity }) => {
 if (expandedId !== null) return;
 const swipe = Math.abs(offset.x) * velocity.x;
 if (swipe < -10000 || offset.x < -50) paginate(1);
 else if (swipe > 10000 || offset.x > 50) paginate(-1);
 };

 return (
 <div className="relative w-full bg-white flex flex-col items-center justify-start pb-12 px-4 font-sans">

 {/* Page ambient decoration */}
 <div className="absolute inset-0 pointer-events-none" style={{
 backgroundImage: [
 'radial-gradient(ellipse at 15% 50%,rgba(59,130,246,0.05) 0%,transparent 50%)',
 'radial-gradient(ellipse at 85% 50%,rgba(168,85,247,0.05) 0%,transparent 50%)',
 ].join(','),
 }} />

 {/* Top Header Navigation buttons for standalone page view */}
 <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 pt-4 pb-2 flex items-center justify-start gap-3 z-30">
   <button
     type="button"
     onClick={handleBack}
     className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 text-white px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
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

 {/* App Header with Framer Motion Entrance Animation */}
 <motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={{
   hidden: {},
   visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
   }
  }}
  className="w-full max-w-5xl mx-auto px-4 sm:px-6 z-20 mb-8 md:mb-12 flex flex-col items-center"
 >
  <div className="flex items-center justify-center gap-3 sm:gap-4 w-full overflow-hidden">
   <motion.div 
    variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1 } }}
    transition={{ duration: 0.8, ease: "circOut" }}
    style={{ originX: 1 }}
    className="h-[2px] w-8 sm:w-12 bg-cyan-500 hidden sm:block"
   />
   <motion.h2 
    variants={{
     hidden: { opacity: 0, y: 30, scale: 1.05, filter: 'blur(8px)' },
     visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
    }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="font-display text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] font-extrabold leading-[1.2] text-[#081E52] tracking-tight uppercase text-center"
   >
    CLOUD, SAAS & DIGITAL PLATFORMS
   </motion.h2>
   <motion.div 
    variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1 } }}
    transition={{ duration: 0.8, ease: "circOut" }}
    style={{ originX: 0 }}
    className="h-[2px] w-8 sm:w-12 bg-cyan-500 hidden sm:block"
   />
  </div>
  
  <div className="mt-6 md:mt-10 w-full max-w-[960px] space-y-4 sm:space-y-6 font-sans text-[14px] sm:text-[15px] lg:text-[16px] text-black font-medium text-justify leading-relaxed" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
   <motion.p
    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
    transition={{ duration: 0.7, ease: "easeOut" }}
   >
    We design and develop cloud-based software products and Software-as-a-Service platforms built for scalable digital environments. Our cloud product engineering approach combines application architecture, databases, APIs, security, automation and distributed technologies to create reliable digital platforms.
   </motion.p>
   <motion.p
    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
    transition={{ duration: 0.7, ease: "easeOut" }}
   >
    From SaaS products and enterprise applications to specialised cloud platforms, our technology products are designed for continuous operation, scalable deployment and ongoing product improvement. We focus on building cloud technology that can support growing users, workloads and digital requirements.
   </motion.p>
  </div>
 </motion.div>

 {/* ── Carousel ───────────────────────────────────────────────── */}
 <div
 className="relative w-full max-w-5xl flex justify-center items-start transition-all duration-300 ease-in-out"
 style={{ minHeight: expandedId !== null ? undefined : collapsedH }}
 onMouseEnter={() => setIsHovered(true)}
 onMouseLeave={() => setIsHovered(false)}
 >
 <AnimatePresence initial={false} custom={direction} mode="wait">
 <motion.div
 key={page}
 custom={direction}
 variants={{ enter: {}, center: {}, exit: {} }}
 initial="enter"
 animate="center"
 exit="exit"
 drag={expandedId === null ? 'x' : false}
 dragConstraints={{ left: 0, right: 0 }}
 dragElastic={0.4}
 onDragEnd={handleDragEnd}
 className="flex gap-6 md:gap-8 px-4 justify-center w-full items-start"
 style={{ cursor: expandedId ? 'default' : 'grab' }}
 >
 {pages[activeIndex].map((card, index) => {
 const theme = CARD_THEMES.find(t => t.id === card.id) || CARD_THEMES[0];
 const isExpanded = expandedId === card.id;
 const { accent, gradient, border, btnBg, badge, btn } = theme;
 const CardIcon = card.icon;

 return (
 /* 🔥 Split & Drop Animation Handled Here 🔥 */
 <motion.div
 key={card.id}
 custom={direction}
 variants={{
 enter: (d) => {
 const xOff = isMobile ? (d < 0 ? -140 : 140) : (index === 0 ? -140 : 140);
 const yOff = isMobile ? -160 : (d < 0 ? 160 : -160);
 return { opacity: 0, x: xOff, y: yOff, scale: 0.85, height: collapsedH };
 },
 center: {
 opacity: 1, x: 0, y: 0, scale: 1, height: isExpanded ? expandedH : collapsedH
 },
 exit: (d) => {
 const xOff = isMobile ? (d < 0 ? 140 : -140) : (index === 0 ? -140 : 140);
 const yOff = isMobile ? 160 : (d < 0 ? -160 : 160);
 return { opacity: 0, x: xOff, y: yOff, scale: 0.85, height: collapsedH };
 }
 }}
 transition={{ 
  default: { type: 'spring', stiffness: 90, damping: 20, mass: 1 },
  height: { type: 'tween', ease: 'easeInOut', duration: 0.35 }
 }}
 onClick={() => { if (!isExpanded) setExpandedId(card.id); }}
 className="relative flex-shrink-0 rounded-[22px] overflow-hidden flex flex-col"
 style={{
 width: isMobile ? 272 : 318,
 background: gradient,
 border: `1px solid ${border}`,
 boxShadow: isExpanded
 ? `0 20px 60px ${accent}28, 0 0 0 1px ${accent}18`
 : '0 8px 36px rgba(0,0,0,0.20)',
 cursor: isExpanded ? 'default' : 'pointer',
 }}
 >
 {/* Background Illustration & Radial Glow (Stays behind text) */}
 <ProductIllustration accent={accent} type={card.id} />
 <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 75% 75%,${accent}14 0%,transparent 60%)` }} />

 {/* ── PART 1: TOP SECTION (Fixed Height Area) ── */}
 <div className={`relative z-10 flex-shrink-0 flex flex-col px-5 md:px-6 pt-5 md:pt-6 transition-all duration-300 ${isExpanded ? 'pb-3' : 'pb-5 h-full'}`}>
 
 {/* Icon Box + Number */}
 <div className="flex justify-between items-start mb-5">
 <div
 className="w-[52px] h-[52px] rounded-[13px] flex items-center justify-center flex-shrink-0"
 style={{ background: `linear-gradient(135deg,${accent}28 0%,${accent}14 100%)`, border: `1.5px solid ${accent}38` }}
 >
 <CardIcon className="w-6 h-6" style={{ color: accent }} strokeWidth={2.2} />
 </div>
 <span className="text-sm font-bold tracking-wider tabular-nums" style={{ color: `${accent}65` }}>
 {String(card.id).padStart(2, '0')}
 </span>
 </div>

 {/* Badge */}
 <div className="flex items-center gap-1.5 mb-3">
 <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
 <span className="text-[10px] font-extrabold tracking-[0.18em] uppercase" style={{ color: accent }}>{badge}</span>
 </div>

 {/* Title */}
 <h2 className="text-[20px] md:text-[22px] font-extrabold text-white leading-[1.2] mb-3">
 {card.title}
 </h2>

 {/* Short Desc & CTA (Hide smoothly when expanded to make room for full details) */}
 <AnimatePresence>
 {!isExpanded && (
 <motion.div 
 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
 className="flex flex-col flex-1"
 >
 <p className="text-white/55 text-[12px] md:text-[13px] leading-relaxed line-clamp-3 pr-8 text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
 {card.description}
 </p>
 <button
 className="mt-auto flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-[12px] md:text-[13px] font-bold self-start transition-opacity hover:opacity-85 active:scale-95"
 style={{ background: btnBg, boxShadow: `0 4px 14px ${accent}38` }}
 onClick={(e) => { e.stopPropagation(); setExpandedId(card.id); }}
 >
 {btn} <span className="text-sm leading-none">→</span>
 </button>
 </motion.div>
 )}
 </AnimatePresence>
 </div>

 {/* ── PART 2: EXPANDED SCROLLABLE SECTION ── */}
 <AnimatePresence>
 {isExpanded && (
 <motion.div
 key="details"
 initial={{ opacity: 0, height: 0 }}
 animate={{ opacity: 1, height: "auto" }}
 exit={{ opacity: 0, height: 0 }}
 transition={{ duration: 0.3 }}
 className="relative z-10 flex flex-col w-full overflow-hidden"
 onClick={(e) => e.stopPropagation()}
 >
 {/* Visual Divider */}
 <div className="mx-5 md:mx-6 h-px flex-shrink-0 mb-4" style={{ backgroundColor: `${accent}30` }} />

 {/* Details Content Container (No scroll, dynamic height) */}
 <div className="flex-1 px-5 md:px-6 pb-4">
 {/* Overview */}
 <p className="text-white/80 text-[14px] leading-[1.75] mb-5 text-justify tracking-normal break-words" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
 {card.details.overview}
 </p>

 {/* Key Indicators Section */}
 {card.details.indicators && (
 <div className="mb-5">
 <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] block mb-2.5" style={{ color: accent }}>
 Key Indicators
 </span>
 <ul className="space-y-2">
 {card.details.indicators.map((ind, i) => (
 <li key={i} className="text-white/70 text-[12px] leading-relaxed flex items-start gap-2.5">
 <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: accent, boxShadow: `0 0 6px ${accent}` }} />
 <span className="flex-1">{ind}</span>
 </li>
 ))}
 </ul>
 </div>
 )}

 {/* Recommended Actions Section */}
 {card.details.actions && (
 <div className="mb-4">
 <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] block mb-2.5" style={{ color: accent }}>
 Recommended Action
 </span>
 <ul className="space-y-2">
 {card.details.actions.map((act, i) => (
 <li key={i} className="text-white/70 text-[12px] leading-relaxed flex items-start gap-2.5">
 <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: accent, boxShadow: `0 0 6px ${accent}` }} />
 <span className="flex-1">{act}</span>
 </li>
 ))}
 </ul>
 </div>
 )}
 </div>

 {/* Sticky Footer with Close Button */}
 <div className="px-5 md:px-6 py-3 flex justify-end flex-shrink-0 bg-black/15 border-t border-white/5 backdrop-blur-sm">
 <button
 onClick={() => setExpandedId(null)}
 className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg transition-all hover:bg-white/10 active:scale-95"
 style={{ color: accent, background: `${accent}18`, border: `1px solid ${accent}30` }}
 >
 <X size={11} strokeWidth={3} /> Close
 </button>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </motion.div>
 );
 })}
 </motion.div>
 </AnimatePresence>
 </div>

 {/* ── Shared Pagination ─────────────────────────────────────────────── */}
 <SharedPagination 
 totalItems={pages.length}
 currentIndex={activeIndex}
 onPageChange={(index) => {
 setExpandedId(null);
 setPage([index, index > activeIndex ? 1 : -1]);
 }}
 onPrev={() => paginate(-1)}
 onNext={() => paginate(1)}
 />
 </div>
 );
}
