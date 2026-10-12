import React, { useState } from 'react';
import { Home } from 'lucide-react';
import { apisIntegrationData } from './ApisIntegrationDigitalConnectivityPageData.js';

export default function ApisIntegrationDigitalConnectivityPage({ onClose }) {
  const [activeCard, setActiveCard] = useState(4);

  const handleBack = () => {
    if (onClose) {
      onClose();
    }
    window.history.back();
  };

  const handleHome = () => {
    if (onClose) {
      onClose();
    }
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#EBF7F8] via-[#E7F3F5] to-[#DFEFF2]">
      <div className="w-full flex flex-col items-center py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden font-sans">
        {/* Top Header Navigation buttons */}
        <div className="w-full max-w-5xl px-1 pb-6 flex items-center justify-start gap-3">
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

        {/* Header Section */}
        <div className="w-full px-4 sm:px-6 md:px-12 max-w-5xl text-center mb-10 flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#081E52] tracking-tight uppercase">
            API, INTEGRATION &amp; INTEROPERABILITY
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#0FA4AF] mt-2">
            APIs, Integration &amp; Digital Connectivity
          </h2>
          <div className="text-gray-700 text-sm md:text-base leading-relaxed flex flex-col gap-3 mx-auto mt-2">
            <p>
              Modern software products rarely operate in isolation. Our API and integration technologies help applications, databases, cloud services and digital platforms communicate through structured and secure technology interfaces.
            </p>
            <p>
              We develop APIs, middleware, connectors and interoperability products that enable software ecosystems to exchange information and functionality. These technologies can support enterprise applications, SaaS platforms, government systems, cybersecurity products and other digital products requiring reliable system connectivity.
            </p>
          </div>
        </div>
        
        {/* MOBILE LAYOUT: Thumbnails at top, Active Card at bottom (Hidden on Desktop) */}
        <div className="flex flex-col md:hidden w-full px-2 gap-6">
          <div className="grid grid-cols-3 gap-3">
            {apisIntegrationData.reduce((resultArray, item, index) => { 
              const chunkIndex = Math.floor(index / 3);
              if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [];
              }
              resultArray[chunkIndex].push(item);
              return resultArray;
            }, []).map((row, rowIndex) => {
              const activeCardInRow = row.find(c => c.id === activeCard);
              
              return (
                <div key={`row-${rowIndex}`} className="contents">
                  {/* Render the 3 thumbnails for this row */}
                  {row.map((card) => {
                    const isActive = activeCard === card.id;
                    return (
                      <div 
                        key={`thumb-${card.id}`}
                        onClick={() => setActiveCard(card.id)}
                        className={`relative h-24 sm:h-28 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform ${
                          isActive ? 'ring-2 ring-[#0FA4AF] scale-105 shadow-md z-10' : 'opacity-80 hover:opacity-100 hover:scale-105'
                        }`}
                      >
                        <img src={card.url} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity ${isActive ? 'opacity-100' : 'opacity-70'}`} />
                        <div className="absolute inset-0 p-2 flex items-end justify-center text-center">
                          <span className="text-white text-[10px] sm:text-xs font-bold leading-tight drop-shadow-lg line-clamp-3">
                            {card.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                  {/* Render the large active card immediately below this row if one of its cards is active */}
                  {activeCardInRow && (
                    <div className="col-span-3 relative w-full h-[55vh] rounded-3xl overflow-hidden shadow-2xl mt-2 mb-2 transition-all duration-500">
                      <img src={activeCardInRow.url} alt={activeCardInRow.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end max-h-[90%] overflow-y-auto">
                        <h2 className="text-white text-2xl font-bold mb-3 tracking-tight drop-shadow-md">
                          {activeCardInRow.title}
                        </h2>
                        <p className="text-gray-200 text-sm leading-relaxed drop-shadow pb-2">
                          {activeCardInRow.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* DESKTOP LAYOUT: Expanding Card Gallery (Hidden on Mobile) */}
        <div className="hidden md:flex w-full px-4 gap-4 h-[500px]">
          {apisIntegrationData.map((card) => {
            const isActive = activeCard === card.id;
            
            return (
              <div
                key={card.id}
                className={`
                  relative rounded-3xl overflow-hidden cursor-pointer group
                  transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                  ${isActive ? 'flex-[14] shadow-2xl' : 'flex-[1] shadow-md hover:flex-[1.2]'}
                `}
                onClick={() => setActiveCard(card.id)}
              >
                <img
                  src={card.url}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-700 ${!isActive ? 'opacity-100 group-hover:bg-black/20' : 'opacity-0'}`} />
                <div 
                  className={`absolute inset-0 flex items-center justify-center pointer-events-none
                  transition-opacity duration-500
                  ${!isActive ? 'opacity-100 delay-200' : 'opacity-0'}`}
                >
                  <h3 className="text-white text-sm font-bold tracking-wider whitespace-nowrap -rotate-90 drop-shadow-lg">
                    {card.title}
                  </h3>
                </div>

                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                  transition-opacity duration-700 delay-100
                  ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
                />

                <div 
                  className={`absolute bottom-0 left-0 p-8 flex flex-col justify-end h-full max-h-[85%] overflow-y-auto
                  transition-all duration-700 delay-150 transform
                  ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}
                `}>
                  <h2 className="text-white text-3xl font-bold mb-3 tracking-tight drop-shadow-md">
                    {card.title}
                  </h2>
                  
                  {card.description && (
                    <p className="text-gray-100 text-[15px] leading-relaxed drop-shadow pr-4 pb-2">
                      {card.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
