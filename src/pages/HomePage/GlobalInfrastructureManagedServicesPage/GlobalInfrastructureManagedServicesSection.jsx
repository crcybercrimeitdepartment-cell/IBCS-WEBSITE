import { ArrowRight, Globe, CheckCircle } from 'lucide-react';
import SectionDecorativeBackground from '../../../components/common/SectionDecorativeBackground';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';

/* =========================================================================
   CUSTOM VECTOR SVG: GLOBAL INFRASTRUCTURE & MULTI-REGION TOPOLOGY
   ========================================================================= */
function GlobalInfrastructureTopologySVG() {
  return (
    <svg
      viewBox="0 0 520 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[480px] select-none drop-shadow-md"
    >
      <defs>
        <linearGradient id="infraPlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E9F7F9" />
        </linearGradient>
        <linearGradient id="infraServerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0FA4AF" />
          <stop offset="100%" stopColor="#003135" />
        </linearGradient>
      </defs>



      {/* Global Cloud Mesh Network Ring */}
      <ellipse cx="260" cy="180" rx="190" ry="100" stroke="#AFDDE5" strokeWidth="1.5" strokeDasharray="5 5" />
      <ellipse cx="260" cy="180" rx="120" ry="60" stroke="#0FA4AF" strokeWidth="1.2" opacity="0.6" />

      {/* Center Server Rack Core */}
      <g transform="translate(215, 115)">
        <rect width="90" height="130" rx="12" fill="url(#infraServerGrad)" stroke="#FFFFFF" strokeWidth="2.5" />
        {/* Server 1 */}
        <rect x="10" y="16" width="70" height="24" rx="5" fill="#003135" stroke="#AFDDE5" strokeWidth="1" />
        <circle cx="22" cy="28" r="3" fill="#10B981" />
        <circle cx="30" cy="28" r="3" fill="#0FA4AF" />
        <line x1="42" y1="28" x2="70" y2="28" stroke="#AFDDE5" strokeWidth="2" strokeLinecap="round" />
        {/* Server 2 */}
        <rect x="10" y="52" width="70" height="24" rx="5" fill="#003135" stroke="#AFDDE5" strokeWidth="1" />
        <circle cx="22" cy="64" r="3" fill="#10B981" />
        <circle cx="30" cy="64" r="3" fill="#0FA4AF" />
        <line x1="42" y1="64" x2="70" y2="64" stroke="#AFDDE5" strokeWidth="2" strokeLinecap="round" />
        {/* Server 3 */}
        <rect x="10" y="88" width="70" height="24" rx="5" fill="#003135" stroke="#AFDDE5" strokeWidth="1" />
        <circle cx="22" cy="100" r="3" fill="#10B981" />
        <circle cx="30" cy="100" r="3" fill="#0FA4AF" />
        <line x1="42" y1="100" x2="70" y2="100" stroke="#AFDDE5" strokeWidth="2" strokeLinecap="round" />
      </g>
      <text x="260" y="265" textAnchor="middle" fill="#003135" fontSize="11" fontWeight="800" fontFamily="system-ui">Primary Cluster (HA)</text>

      {/* Satellite Node 1: Region US-East (Top-Left) */}
      <g transform="translate(32, 60)">
        <rect width="132" height="55" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="22" cy="27" r="11" fill="#E6F7F9" />
        <circle cx="22" cy="27" r="4" fill="#10B981" />
        <text x="40" y="24" fill="#003135" fontSize="10.5" fontWeight="bold" fontFamily="system-ui">Edge Pop 01</text>
        <text x="40" y="38" fill="#0FA4AF" fontSize="9.5" fontWeight="bold" fontFamily="system-ui">0.8ms Latency</text>
      </g>

      {/* Satellite Node 2: Region EU-Central (Top-Right) */}
      <g transform="translate(355, 60)">
        <rect width="132" height="55" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="22" cy="27" r="11" fill="#E6F7F9" />
        <circle cx="22" cy="27" r="4" fill="#10B981" />
        <text x="40" y="24" fill="#003135" fontSize="10.5" fontWeight="bold" fontFamily="system-ui">Edge Pop 02</text>
        <text x="40" y="38" fill="#0FA4AF" fontSize="9.5" fontWeight="bold" fontFamily="system-ui">1.2ms Latency</text>
      </g>

      {/* Satellite Node 3: Region AP-South (Bottom-Left) */}
      <g transform="translate(32, 245)">
        <rect width="132" height="55" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="22" cy="27" r="11" fill="#E6F7F9" />
        <circle cx="22" cy="27" r="4" fill="#10B981" />
        <text x="40" y="24" fill="#003135" fontSize="10.5" fontWeight="bold" fontFamily="system-ui">Failover Replica</text>
        <text x="40" y="38" fill="#0FA4AF" fontSize="9.5" fontWeight="bold" fontFamily="system-ui">Automated Sync</text>
      </g>

      {/* Satellite Node 4: Health Telemetry (Bottom-Right) */}
      <g transform="translate(355, 245)">
        <rect width="132" height="55" rx="10" fill="#FFFFFF" stroke="#AFDDE5" strokeWidth="1.5" />
        <circle cx="22" cy="27" r="11" fill="#E6F7F9" />
        <path d="M 16 28 L 20 23 L 24 29 L 28 25" stroke="#0FA4AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <text x="40" y="24" fill="#003135" fontSize="10.5" fontWeight="bold" fontFamily="system-ui">Telemetry 24/7</text>
        <text x="40" y="38" fill="#10B981" fontSize="9.5" fontWeight="bold" fontFamily="system-ui">99.99% Uptime</text>
      </g>
    </svg>
  );
}

export default function GlobalInfrastructureManagedServicesSection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#global-infrastructure-managed-services-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  return (
    <section
      id="global-infrastructure-managed-services"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F2F8FA] via-[#E8F4F7] to-[#DFEFF2] border-b border-[#D4AF37]/20 overflow-hidden relative"
    >
      {/* Interactive Decorative Background Theme */}
      <SectionDecorativeBackground variant="infrastructure" />

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Descriptions & Actions */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">


            <AnimatedSectionHeading
              text="Global Infrastructure & Managed Services"
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-[#081E52] mb-5 text-center lg:text-left"
            />

            <div className="space-y-3.5 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#081E52]/85 font-medium mb-6 text-center lg:text-left text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              <p>
                <strong className="font-bold text-[#081E52]">IBCS IT Services</strong> delivers technology-driven solutions that help businesses build, secure, manage, and optimise their digital infrastructure. From software development, cloud computing, and AI integration to cybersecurity, network management, and IT infrastructure support, we provide scalable and reliable services tailored to diverse business requirements. Our focus is on strengthening operational efficiency, enhancing digital security, and supporting sustainable business growth through innovative technology.
              </p>
              <p>
                <strong className="font-bold text-[#081E52]">IB Cyber Security Private Limited</strong> provides technology infrastructure and managed services designed to support secure, reliable, scalable, and continuously available digital environments. Our capabilities span cloud infrastructure, data centres, network management, cybersecurity operations, application infrastructure, monitoring, backup, disaster recovery, technical support, and managed technology operations.
              </p>
              <p>
                We combine modern infrastructure technologies, automation, security engineering, and operational expertise to help organisations maintain dependable digital environments, enabling businesses, government institutions, enterprises, and technology platforms to operate efficiently while adapting to evolving infrastructure requirements and digital transformation needs.
              </p>
            </div>

            {/* Feature Status Badges */}
            <div className="grid grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">99.99% Continuous Uptime</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#AFDDE5]/80 shadow-xs">
                <Globe className="w-4 h-4 text-[#0FA4AF] shrink-0" />
                <span className="text-xs font-bold text-[#081E52]">Multi-Region Cloud Mesh</span>
              </div>
            </div>

            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0FA4AF] to-[#024950] text-white font-extrabold text-sm sm:text-base shadow-md shadow-[#0FA4AF]/25 hover:shadow-lg hover:from-[#0d8e98] hover:to-[#01353a] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Infrastructure Services</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Custom Topology Vector (Transparent & Live in Synchronized Motion) */}
          <div className="lg:col-span-6 flex items-center justify-center animate-float-slow">
            <GlobalInfrastructureTopologySVG />
          </div>

        </div>
      </div>
    </section>
  );
}
