import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';

export default function SoftwareDevelopmentProductEngineeringSection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#sdpe-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  return (
    <section id="products-platforms" className="relative scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#F0F9FA] via-[#E4F4F7] to-[#D5EEF2] border-b border-[#D4AF37]/20 overflow-hidden">
      
      {/* Background Decorative Wave SVGs & Dot Matrices */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Glows */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#081E52]/10 rounded-full blur-3xl"></div>

        {/* Corner Dot Matrices */}
        <div className="absolute top-8 right-12 grid grid-cols-6 gap-2 opacity-25">
          {[...Array(24)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0FA4AF]"></span>
          ))}
        </div>

        <div className="absolute bottom-8 left-12 grid grid-cols-6 gap-2 opacity-25">
          {[...Array(24)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0FA4AF]"></span>
          ))}
        </div>

        {/* Wave Background Curves */}
        <svg className="absolute -bottom-20 -left-20 w-[600px] h-[600px] opacity-25 text-[#D4AF37]/20" viewBox="0 0 500 500" fill="currentColor">
          <path d="M0,250 C150,180 350,320 500,250 L500,500 L0,500 Z" />
        </svg>
      </div>

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Category Tag, Heading & Call to Action Button */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">


            {/* Main Heading */}
            <AnimatedSectionHeading
              text="Software Development & Product Engineering"
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-[#081E52] mb-6 text-center lg:text-left"
            />

            {/* Call to Action Button */}
            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#081E52] to-[#0c2b7a] hover:from-[#0c2b7a] hover:to-[#081E52] border border-[#D4AF37]/40 text-white text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#081E52]/20 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Description Paragraphs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#081E52]/85 font-medium">
            <p>
              At IB Cyber Security Private Limited, we design, develop, engineer and commercialise software products, digital platforms and technology solutions for diverse sectors and operational environments. Our software development capabilities span government technology, law enforcement, investigation, cybersecurity, enterprise systems, education, digital services and international markets.
            </p>
            <p>
              We build both proprietary and specialised software products using modern technologies, scalable software architecture, cloud computing, Artificial Intelligence, data analytics, automation, APIs and secure engineering practices. From government and institutional platforms to commercial and enterprise applications, our focus is on creating reliable, scalable and technology-driven products designed to solve real-world operational challenges.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
