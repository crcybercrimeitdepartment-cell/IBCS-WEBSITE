// Import React hooks and ArrowUp icon
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

// Floating Back to Top Button Component
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor scroll position to show/hide button after 600px scroll, and hide when inside footer
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const nearBottom = scrollY + windowHeight >= fullHeight - 340;
      setIsVisible(scrollY > 600 && !nearBottom);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 right-5 z-40 grid h-10 w-10 place-items-center rounded-lg border border-[#D4AF37]/50 bg-[#081E52] text-[#E5C158] shadow-[0_4px_16px_rgba(8,30,82,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E5C158] hover:bg-[#D4AF37] hover:text-[#040A1A] focus-ring sm:bottom-6 sm:right-6 ${
        isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
