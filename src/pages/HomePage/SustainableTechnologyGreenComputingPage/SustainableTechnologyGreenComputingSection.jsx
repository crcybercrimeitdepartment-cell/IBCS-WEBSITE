import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function SustainableTechnologyGreenComputingSection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    e.preventDefault();
    window.location.hash = '#sustainable-technology-green-computing';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  return (
    <section id="sustainable-technology-green-computing" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-[#E7F3F5] border-b border-brand-cyan/20 overflow-hidden">
      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Centered Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-[#081E52] sm:text-4xl lg:text-[44px] mb-5 text-center">
            Sustainable Technology &amp; Green Computing
          </motion.h2>

          {/* Centered Description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-[#081E52]/80 font-medium text-center max-w-4xl mx-auto mb-8"
          >
            <p>
              Engineering energy-efficient software architectures, carbon-aware cloud workload schedulers and sustainable computing products.
            </p>
            <p>
              We optimize digital infrastructure and code execution to reduce energy consumption, minimize carbon footprints, and support corporate environmental sustainability goals.
            </p>
          </motion.div>
                    {/* Centered Text-Only Button with Call to Action text (#0FA4AF, bold) */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            className="w-full flex justify-center pt-4">
            <button
              type="button"
              onClick={handleCtaClick}
              className="group inline-flex items-center gap-2 text-base sm:text-lg font-extrabold text-[#0FA4AF] hover:text-[#081E52] transition-all duration-300 hover:scale-105 focus:outline-none cursor-pointer bg-transparent border-none p-0"
            >
              <span>Call to Action</span>
              <ArrowRight className="h-5 w-5 text-[#0FA4AF] group-hover:text-[#081E52] font-extrabold transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
