import React from 'react';
import { Home } from 'lucide-react';
import { themes, cardData, pageContent } from './GovernmentPublicTechnologyPageData.js';

const defaultTheme = {
  bg: "from-[#00ffd6] to-[#08e260]",
  text: "text-[#00894d]",
  textSub: "text-[#00894d]/70",
  icon: "fill-[#00894d]",
  viewMore: "text-[#00c37b]",
  viewMoreIcon: "stroke-[#00c37b]",
  circle: "bg-[#00f9cb]/20",
};

export const Card3D = ({
  theme = defaultTheme,
  title = "UIVERSE (3D UI)",
  description = "Create, share, and use beautiful custom elements made with CSS",
  serialNumber = "01",
}) => {
  return (
    <div className="group/card w-[320px] sm:w-[340px] h-[490px] sm:h-[515px] [perspective:1000px] mx-auto">
      <div
        className={`relative h-full rounded-[40px] sm:rounded-[50px] bg-gradient-to-br ${theme.bg} transition-all duration-500 ease-in-out [transform-style:preserve-3d] shadow-[40px_50px_25px_-40px_rgba(5,71,17,0),0px_25px_25px_-5px_rgba(5,71,17,0.2)] group-hover/card:[transform:rotate3d(1,1,0,25deg)] group-hover/card:shadow-[30px_50px_25px_-40px_rgba(5,71,17,0.3),0px_25px_30px_0px_rgba(5,71,17,0.1)]`}
      >
        <div className="absolute right-0 top-0 [transform-style:preserve-3d] z-10 pointer-events-none">
          <span
            className={`block absolute aspect-square rounded-full shadow-[-10px_10px_20px_0px_rgba(100,100,111,0.2)] backdrop-blur-[5px] ${theme.circle} transition-all duration-500 ease-in-out w-[170px] [transform:translate3d(0,0,20px)] top-[8px] right-[8px]`}
          />
          <span
            className={`block absolute aspect-square rounded-full shadow-[-10px_10px_20px_0px_rgba(100,100,111,0.2)] backdrop-blur-[1px] ${theme.circle} transition-all duration-500 ease-in-out delay-[400ms] w-[140px] [transform:translate3d(0,0,40px)] top-[10px] right-[10px] group-hover/card:[transform:translate3d(0,0,60px)]`}
          />
          <span
            className={`block absolute aspect-square rounded-full shadow-[-10px_10px_20px_0px_rgba(100,100,111,0.2)] backdrop-blur-[5px] ${theme.circle} transition-all duration-500 ease-in-out delay-[800ms] w-[110px] [transform:translate3d(0,0,60px)] top-[17px] right-[17px] group-hover/card:[transform:translate3d(0,0,80px)]`}
          />
          <span
            className={`block absolute aspect-square rounded-full shadow-[-10px_10px_20px_0px_rgba(100,100,111,0.2)] backdrop-blur-[5px] ${theme.circle} transition-all duration-500 ease-in-out delay-[1200ms] w-[80px] [transform:translate3d(0,0,80px)] top-[23px] right-[23px] group-hover/card:[transform:translate3d(0,0,100px)]`}
          />
          <span
            className={`block absolute aspect-square rounded-full shadow-[-10px_10px_20px_0px_rgba(100,100,111,0.2)] backdrop-blur-[5px] ${theme.circle} transition-all duration-500 ease-in-out delay-[1600ms] w-[50px] [transform:translate3d(0,0,100px)] top-[30px] right-[30px] grid place-content-center group-hover/card:[transform:translate3d(0,0,120px)]`}
          >
            <span className="text-white font-black text-[22px] tracking-tighter drop-shadow-md select-none">
              {serialNumber}
            </span>
          </span>
        </div>

        <div className="absolute inset-[8px] rounded-tl-[36px] rounded-bl-[36px] rounded-br-[36px] rounded-tr-[100%] bg-gradient-to-t from-white/35 to-white/80 [transform:translate3d(0px,0px,25px)] border-l border-b border-white transition-all duration-500 ease-in-out [transform-style:preserve-3d] overflow-hidden" />

        <div className="pt-[125px] sm:pt-[140px] px-[22px] sm:px-[26px] pb-[20px] sm:pb-[24px] [transform:translate3d(0,0,30px)] select-text flex flex-col justify-start overflow-hidden">
          <span className={`block ${theme.text} font-black text-[17.5px] sm:text-[19px] leading-tight`}>
            {title}
          </span>
          <span className={`block ${theme.textSub} text-[13px] sm:text-[13.5px] leading-[1.55] mt-[10px] sm:mt-[12px]`}>
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function GovernmentPublicTechnologyPage({ onClose }) {
  const handleBack = () => {
    if (onClose) onClose();
    window.history.back();
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#EBF7F8] via-[#E7F3F5] to-[#DFEFF2] font-sans antialiased pb-24">
      {/* Top Header Navigation buttons */}
      <div className="max-w-[1300px] mx-auto px-6 pt-6 flex items-center justify-start gap-3">
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

      {/* Page Header section */}
      <div className="max-w-[1200px] mx-auto text-center mb-16 mt-6 px-4 space-y-8 relative z-10">
        <h1 className="text-4xl md:text-[3.5rem] font-black tracking-tighter uppercase text-[#081E52] drop-shadow-sm leading-tight">
          {pageContent.title}
        </h1>

        <div className="relative max-w-4xl mx-auto text-left md:text-center p-6 md:p-10 bg-white/70 backdrop-blur-xl rounded-[30px] md:rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-white/80 overflow-hidden">
          <div className="space-y-6 text-slate-700 text-base md:text-lg font-medium leading-relaxed">
            <p>{pageContent.paragraph1}</p>
            <p>{pageContent.paragraph2}</p>
          </div>
        </div>
      </div>

      {/* 4-Column Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 max-w-[1300px] mx-auto px-4 w-full">
        {cardData.map((data, i) => {
          const serialNumber = String(i + 1).padStart(2, '0');
          const cleanTitle = data.title.replace(/^\d+\.\s*/, '');
          const currentTheme = themes[i % themes.length];

          return (
            <div
              key={i}
              className="flex justify-center items-center transform scale-[0.95] hover:scale-[0.98] transition-transform duration-300"
            >
              <Card3D
                theme={currentTheme}
                title={cleanTitle}
                description={data.description}
                serialNumber={serialNumber}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
