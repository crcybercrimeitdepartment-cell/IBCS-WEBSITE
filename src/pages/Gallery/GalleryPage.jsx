import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Users, 
  Sparkles, 
  Wand2, 
  Copy, 
  Check, 
  Download, 
  ZoomIn, 
  X,
  Compass,
  Eye,
  RefreshCw,
  Zap,
  ChevronLeft,
  ChevronRight,
  Home
} from 'lucide-react';
import { galleryCards } from './GalleryPageData';

const confetti = (opts) => {
  if (typeof window !== 'undefined' && typeof window.confetti === 'function') {
    try { window.confetti(opts); } catch (e) { /* safe fallback */ }
  }
};

// ==========================================
// 1. AI IMAGE GENERATOR MODAL COMPONENT
// ==========================================
const sampleStyles = [
  { id: 'surreal', label: 'Surreal Dune', prompt: 'Solitary green tree on minimalist orange sand dune, turquoise sky', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80' },
  { id: '3d', label: '3D Chrome Fluid', prompt: 'Iridescent liquid chrome ribbons, vivid magenta, octane 3d render', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80' },
  { id: 'coastal', label: 'Coastal Film', prompt: 'Orange vintage camper van driving along cliff highway overlooking blue sea', img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80' },
  { id: 'urban', label: 'NYC Noir', prompt: 'Moody rainy Manhattan street aerial view, illuminated yellow taxi cabs', img: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=400&q=80' },
];

export function GeneratorModal({ isOpen, onClose, initialPrompt = '' }) {
  const [prompt, setPrompt] = useState(initialPrompt || 'A cinematic warm desert landscape with solitary bonsai tree, pastel teal sky, golden hour lighting');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (initialPrompt) setPrompt(initialPrompt);
  }, [initialPrompt]);

  if (!isOpen) return null;

  const handleGenerate = () => {
    if (!prompt.trim() || isGenerating) return;
    setIsGenerating(true);
    setProgress(15);
    setGeneratedImage(null);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 25;
      });
    }, 280);

    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setIsGenerating(false);
      
      const results = [
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
      ];
      const randomImg = results[Math.floor(Math.random() * results.length)];
      setGeneratedImage(randomImg);

      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 1500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[92dvh] overflow-y-auto bg-white rounded-2xl xs:rounded-3xl shadow-2xl border border-gray-100 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 xs:px-6 py-3.5 xs:py-4 border-b border-gray-100 bg-gray-50/70">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-black text-white flex items-center justify-center shadow-sm">
              <Sparkles className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-amber-300" />
            </div>
            <div>
              <h3 className="font-editorial text-lg xs:text-xl font-bold text-gray-900">AI Image Generator</h3>
              <p className="text-[10px] xs:text-xs text-gray-500">Transform your prompt into high-definition visuals</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-gray-200/80 hover:bg-gray-200 text-gray-600 hover:text-black flex items-center justify-center transition-colors active:scale-95"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 xs:p-6 space-y-4 xs:space-y-5">
          {/* Prompt Box */}
          <div className="space-y-1.5 xs:space-y-2">
            <label className="text-[10px] xs:text-xs font-semibold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
              <Wand2 className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-black" />
              Describe your idea:
            </label>
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={3}
                placeholder="E.g. Minimalist tree on a desert sand dune with pastel sky, golden hour, 8k..."
                className="w-full p-3 xs:p-3.5 text-xs xs:text-sm bg-gray-50 border border-gray-200 rounded-xl xs:rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all resize-none"
              />
              <button
                onClick={() => setPrompt(sampleStyles[Math.floor(Math.random() * sampleStyles.length)].prompt)}
                className="absolute right-2.5 bottom-2.5 text-[10px] xs:text-[11px] font-semibold text-gray-600 hover:text-black bg-white px-2 xs:px-2.5 py-0.5 xs:py-1 rounded-lg border border-gray-200 shadow-sm transition-all active:scale-95"
              >
                Surprise Me 🎲
              </button>
            </div>
          </div>

          {/* Quick Style Presets */}
          <div>
            <span className="text-[10px] xs:text-xs font-semibold text-gray-500 mb-1.5 xs:mb-2 block">Quick Style Inspirations:</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {sampleStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setPrompt(style.prompt)}
                  className="flex items-center gap-2 p-1.5 xs:p-2 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200/80 transition-all text-left group active:scale-95"
                >
                  <img src={style.img} alt={style.label} className="w-7 h-7 xs:w-8 xs:h-8 rounded-lg object-cover" />
                  <span className="text-[11px] xs:text-xs font-medium text-gray-700 group-hover:text-black line-clamp-1">{style.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Generation Preview Area */}
          {(isGenerating || generatedImage) && (
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 min-h-[180px] xs:min-h-[220px] flex items-center justify-center">
              {isGenerating ? (
                <div className="flex flex-col items-center space-y-2.5 xs:space-y-3 p-4 xs:p-6 text-center">
                  <RefreshCw className="w-7 h-7 xs:w-8 xs:h-8 text-black animate-spin" />
                  <div className="space-y-0.5 xs:space-y-1">
                    <p className="text-xs xs:text-sm font-semibold text-gray-800">Synthesizing High-Resolution Image...</p>
                    <p className="text-[10px] xs:text-xs text-gray-500">Applying neural diffusion steps ({progress}%)</p>
                  </div>
                  <div className="w-40 xs:w-48 bg-gray-200 rounded-full h-1.5 xs:h-2 overflow-hidden">
                    <div 
                      className="bg-black h-full transition-all duration-300 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              ) : generatedImage ? (
                <div className="relative w-full h-56 xs:h-64">
                  <img src={generatedImage} alt="Generated AI Artwork" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3 xs:p-4 justify-between">
                    <span className="text-white text-[10px] xs:text-xs font-medium bg-black/50 backdrop-blur-md px-2.5 xs:px-3 py-1 rounded-full">
                      ✨ Generation Complete (8K HDR)
                    </span>
                    <a
                      href={generatedImage}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 xs:px-3.5 xs:py-1.5 bg-white text-black rounded-full text-[10px] xs:text-xs font-semibold hover:bg-gray-100 flex items-center gap-1 shadow-lg active:scale-95"
                    >
                      <Download className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
                      Download
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          )}

          {/* CTA Action */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className="w-full py-3 xs:py-3.5 px-4 xs:px-6 bg-[#18181B] hover:bg-black disabled:bg-gray-400 text-white rounded-full font-medium text-xs xs:text-sm transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 active:scale-98"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 xs:w-4 xs:h-4 animate-spin" />
                Generating Visuals...
              </>
            ) : (
              <>
                <Zap className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-amber-300" />
                Generate Instant AI Photo
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. DEDICATED EVENT DETAILS PAGE COMPONENT
// ==========================================
export function EventDetailPage({ card, onBack, onSelectCard, onOpenGenerator, onClose }) {
  const [copied, setCopied] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [card.id]);

  if (!card) return null;

  const currentIndex = galleryCards.findIndex((c) => c.id === card.id);
  const prevCard = galleryCards[(currentIndex - 1 + galleryCards.length) % galleryCards.length];
  const nextCard = galleryCards[(currentIndex + 1) % galleryCards.length];

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(card.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#FAFAFC] text-gray-900 font-sans selection:bg-black selection:text-white pb-20 animate-fadeIn">
      {/* Top Sticky Navigation Bar with Clean Back & Home Buttons */}
      <nav className="sticky top-0 z-40 w-full bg-white/85 backdrop-blur-xl border-b border-gray-200/80 shadow-sm px-4 sm:px-8 py-3.5 flex items-center justify-between transition-all">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
          >
            ← Back to Gallery Wheel
          </button>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] px-4 py-2 text-xs sm:text-sm font-bold text-[#040A1A] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <Home className="w-4 h-4 text-[#040A1A]" />
              <span>Home</span>
            </button>
          )}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 space-y-10 sm:space-y-14">
        {/* HERO EVENT SHOWCASE BANNER */}
        <section className="relative rounded-3xl overflow-hidden bg-gray-900 shadow-2xl border border-gray-200/50">
          <div className="relative h-[320px] xs:h-[380px] sm:h-[480px] md:h-[540px] w-full overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent hidden md:block" />

            {/* Top Badges */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold shadow-lg">
                  Chapter #{String(card.id).padStart(2, '0')}
                </span>
                <span className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg ${card.tagColor || 'bg-amber-500/30 text-amber-300 border-amber-400/40'}`}>
                  {card.category}
                </span>
              </div>

              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold shadow-lg">
                ✨ Featured Event
              </span>
            </div>

            {/* Hero Text Content */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 md:p-12 flex flex-col justify-end text-white max-w-4xl space-y-3 sm:space-y-4">
              <h1 className="font-editorial text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-white drop-shadow-md">
                {card.title}
              </h1>

              {/* Event Metadata Line */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-200 font-medium">
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-pink-400" />
                  <span>{card.eventDate || 'Season 2026'}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{card.eventLocation || 'Main Stage Pavilion'}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{card.attendees || 'All Team & Community'}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEY STATS BAR */}
        {card.stats && (
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Key Metric</span>
                <span className="font-editorial text-2xl sm:text-3xl font-bold text-gray-900">{card.stats.primary}</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Scale & Reach</span>
                <span className="font-editorial text-2xl sm:text-3xl font-bold text-gray-900">{card.stats.secondary}</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600">
                <Users className="w-5 h-5" />
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Standard</span>
                <span className="font-editorial text-2xl sm:text-3xl font-bold text-gray-900">{card.stats.tertiary}</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Check className="w-5 h-5" />
              </div>
            </div>
          </section>
        )}

        {/* ABOUT & STORY SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Story (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 tracking-wider uppercase">
                <Compass className="w-4 h-4" />
                <span>About The Event</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                An unforgettable milestone in our creative journey
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                {card.summary}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="pt-4">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                Key Highlights & Experiences
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {card.highlights ? (
                  card.highlights.map((h, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-1 hover:border-purple-300 transition-colors">
                      <span className="text-xs font-bold text-purple-700 block">{h.label}</span>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{h.desc}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">Highlights being curated.</p>
                )}
              </div>
            </div>
          </div>

          {/* AI Creative Prompt Sidebar (1 col) */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-gray-900 via-[#1C1A2E] to-black text-white shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                  <Wand2 className="w-4 h-4" />
                  <span>AI Art Studio Prompt</span>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95 flex items-center gap-1 text-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-xs sm:text-sm text-gray-200 italic leading-relaxed">
                  "{card.prompt}"
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-gray-400 border-b border-white/10 pb-2">
                  <span>Rendering Style:</span>
                  <span className="text-white font-semibold">{card.style}</span>
                </div>
                <div className="flex items-center justify-between text-gray-400 border-b border-white/10 pb-2">
                  <span>Resolution Engine:</span>
                  <span className="text-white font-semibold">8K HDR UltraReal</span>
                </div>
                <div className="flex items-center justify-between text-gray-400 pb-1">
                  <span>Visual Category:</span>
                  <span className="text-amber-300 font-semibold">{card.category}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenGenerator(card.prompt)}
                className="w-full py-3 px-5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 text-white font-bold text-xs sm:text-sm rounded-full shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Wand2 className="w-4 h-4" />
                <span>Remix This Concept</span>
              </button>
            </div>
          </div>
        </section>

        {/* MULTI-IMAGE EVENT GALLERY REEL */}
        <section className="space-y-4">
          <div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Event Photo Showcase
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              High-resolution candid captures and perspectives from this chapter
            </p>
          </div>

          {/* Grid of 4 High-Res Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(card.galleryPhotos || [card.image, card.image, card.image, card.image]).map((photoUrl, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(photoUrl)}
                className="group relative h-60 sm:h-72 rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200/80"
              >
                <img
                  src={photoUrl}
                  alt={`${card.title} Scene ${idx + 1}`}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/90 text-black shadow-lg transform group-hover:scale-110 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-medium">
                  Photo #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM PAGINATION BAR */}
        <section className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onSelectCard(prevCard)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-800 text-sm font-semibold shadow-sm transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-purple-600" />
            <div className="text-left">
              <span className="text-[10px] text-gray-400 uppercase block font-mono">Previous Chapter</span>
              <span className="text-xs sm:text-sm font-bold">{prevCard.title}</span>
            </div>
          </button>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/30 text-white rounded-full text-sm font-semibold shadow-md transition-all active:scale-95"
          >
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>Return to Interactive Wheel</span>
          </button>

          <button
            onClick={() => onSelectCard(nextCard)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-800 text-sm font-semibold shadow-sm transition-all active:scale-95"
          >
            <div className="text-right">
              <span className="text-[10px] text-gray-400 uppercase block font-mono">Next Chapter</span>
              <span className="text-xs sm:text-sm font-bold">{nextCard.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-purple-600" />
          </button>
        </section>
      </main>

      {/* FULLSCREEN PHOTO LIGHTBOX MODAL */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhoto}
              alt="Expanded Event View"
              className="w-full h-full object-contain max-h-[85vh] rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 3. 3D ROTATING ARC HERO SHOWCASE WHEEL
// ==========================================
export function ArcHero({ onSelectCard, onStartGenerating, onClose }) {
  const [rotationOffset, setRotationOffset] = useState(0);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const scrollVelocityRef = useRef(0);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const dragStartTime = useRef(0);
  const lastTouchX = useRef(0);
  const lastTouchTime = useRef(0);
  const startOffset = useRef(0);
  const hasMovedSignificantly = useRef(false);
  const requestRef = useRef();

  // Window resize listener
  useEffect(() => {
    const handleResize = () => {
      const width = window.visualViewport ? window.visualViewport.width : window.innerWidth;
      const height = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      setScreenSize({ width, height });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const stageRef = useRef(null);

  // Scoped Non-Passive Mouse Wheel Handler (Only rotates wheel when cursor is inside stageRef)
  useEffect(() => {
    const stageEl = stageRef.current;
    if (!stageEl) return;

    const handleStageWheel = (e) => {
      const isOverCard = !!(e.target && e.target.closest && e.target.closest('.card-wheel-item')) || isHoveredRef.current;

      if (isOverCard) {
        e.preventDefault();
        e.stopPropagation();
        const delta = e.deltaY;
        scrollVelocityRef.current += delta * 0.012;
        scrollVelocityRef.current = Math.max(-6, Math.min(6, scrollVelocityRef.current));
      }
    };

    stageEl.addEventListener('wheel', handleStageWheel, { passive: false });
    return () => {
      stageEl.removeEventListener('wheel', handleStageWheel);
    };
  }, []);

  // Butter-Smooth Animation Loop with Momentum Damping (Zero Page Shaking)
  useEffect(() => {
    const animate = () => {
      scrollVelocityRef.current *= 0.90;
      if (Math.abs(scrollVelocityRef.current) < 0.0005) {
        scrollVelocityRef.current = 0;
      }

      if (!isDraggingRef.current && scrollVelocityRef.current !== 0) {
        setRotationOffset((prev) => (prev + scrollVelocityRef.current) % 360);
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Step rotation
  const handleRotateStep = (direction) => {
    scrollVelocityRef.current = direction === 'next' ? 2.8 : -2.8;
  };

  // Mouse Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    isDraggingRef.current = true;
    hasMovedSignificantly.current = false;
    scrollVelocityRef.current = 0;
    dragStartX.current = e.clientX;
    dragStartTime.current = performance.now();
    lastTouchX.current = e.clientX;
    lastTouchTime.current = performance.now();
    startOffset.current = rotationOffset;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 5) {
      hasMovedSignificantly.current = true;
    }
    lastTouchX.current = e.clientX;
    lastTouchTime.current = performance.now();
    setRotationOffset(startOffset.current + delta * 0.08);
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current) return;
    setIsDragging(false);
    isDraggingRef.current = false;
  };

  // Touch drag handlers
  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    setIsDragging(true);
    isDraggingRef.current = true;
    hasMovedSignificantly.current = false;
    scrollVelocityRef.current = 0;
    
    const touch = e.touches[0];
    dragStartX.current = touch.clientX;
    dragStartY.current = touch.clientY;
    dragStartTime.current = performance.now();
    lastTouchX.current = touch.clientX;
    lastTouchTime.current = performance.now();
    startOffset.current = rotationOffset;
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || !e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - dragStartX.current;
    const deltaY = touch.clientY - dragStartY.current;

    if (Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6) {
      hasMovedSignificantly.current = true;
    }

    lastTouchX.current = touch.clientX;
    lastTouchTime.current = performance.now();

    const touchSensitivity = screenSize.width < 640 ? 0.18 : 0.12;
    setRotationOffset(startOffset.current + deltaX * touchSensitivity);
  };

  const handleTouchEnd = (e) => {
    if (!isDraggingRef.current) return;
    setIsDragging(false);
    isDraggingRef.current = false;

    const now = performance.now();
    const timeDiff = Math.max(16, now - lastTouchTime.current);
    if (timeDiff < 100) {
      const touch = e.changedTouches && e.changedTouches[0];
      if (touch) {
        const delta = touch.clientX - lastTouchX.current;
        const velocity = (delta / timeDiff) * 3.5;
        scrollVelocityRef.current = Math.max(-8, Math.min(8, -velocity));
      }
    }
  };

  const handleCardClick = (e, card) => {
    e.stopPropagation();
    if (!hasMovedSignificantly.current) {
      onSelectCard(card);
    }
  };

  const totalCards = galleryCards.length;
  const angleStep = 360 / totalCards;

  const width = screenSize.width;
  const height = screenSize.height;

  let radius = 450;
  let yOffset = 300;
  let maxVisibleAngle = 92;

  if (width < 380) {
    radius = Math.min(width * 0.72, 230);
    yOffset = 150;
    maxVisibleAngle = 86;
  } else if (width < 480) {
    radius = Math.min(width * 0.70, 250);
    yOffset = 170;
    maxVisibleAngle = 88;
  } else if (width < 640) {
    radius = Math.min(width * 0.66, 280);
    yOffset = 190;
    maxVisibleAngle = 88;
  } else if (width < 1024) {
    radius = Math.min(width * 0.46, 380);
    yOffset = 250;
    maxVisibleAngle = 90;
  } else if (width < 1440) {
    radius = 440;
    yOffset = 300;
    maxVisibleAngle = 92;
  } else {
    radius = 480;
    yOffset = 330;
    maxVisibleAngle = 94;
  }

  const isMobile = width < 640;

  // Active middle card
  let activeCard = galleryCards[0];
  let minAbsAngle = 999;

  galleryCards.forEach((card, index) => {
    const baseAngle = index * angleStep;
    let norm = ((baseAngle + rotationOffset) % 360 + 360) % 360;
    if (norm > 180) norm -= 360;
    const abs = Math.abs(norm);
    if (abs < minAbsAngle) {
      minAbsAngle = abs;
      activeCard = card;
    }
  });

  return (
    <div 
      className="relative w-full flex flex-col justify-between items-center select-none pb-6"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[350px] xs:w-[500px] sm:w-[850px] md:w-[1100px] h-[350px] sm:h-[600px] bg-gradient-to-b from-indigo-50/50 via-purple-50/30 to-transparent rounded-full blur-3xl opacity-80" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[150px] sm:h-[250px] bg-gradient-to-t from-pink-50/40 to-transparent rounded-full blur-2xl opacity-60" />
      </div>

      {/* Top Header Navigation Bar */}
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 pt-4 sm:pt-6 flex items-center justify-between z-50 relative pointer-events-auto">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              if (window.history.length > 1) {
                window.history.back();
              } else if (onClose) {
                onClose();
              } else {
                window.location.hash = '#home';
              }
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-[#081E52] hover:bg-[#0c2b7a] border border-[#D4AF37]/40 px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
          >
            ← Back
          </button>

          <button
            type="button"
            onClick={() => {
              if (onClose) onClose();
              window.location.hash = '#home';
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] px-4 py-2 text-xs sm:text-sm font-bold text-[#040A1A] transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <Home className="w-4 h-4 text-[#040A1A]" />
            <span>Home</span>
          </button>
        </div>
      </div>

      {/* TOP HERO SECTION: MAIN PAGE HEADING & DESCRIPTION */}
      <div className="relative z-20 text-center max-w-3xl px-4 pt-3 sm:pt-4 pb-2 sm:pb-4 pointer-events-auto flex flex-col items-center flex-shrink-0 mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#0F172A] leading-tight mb-2">
          Gallery
        </h1>

        <p className="text-[#475569] text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-sans leading-relaxed text-center font-normal">
          Immerse yourself in our curated visual collection across 20 distinct chapters. Explore milestones, vibrant team culture, and creative achievements.
        </p>
      </div>

      {/* MAIN STAGE: ROTATING ARC + DYNAMIC MIDDLE CARD SPOTLIGHT */}
      <main 
        ref={stageRef}
        className="relative flex-1 w-full flex flex-col items-center justify-center px-1 sm:px-4 py-4 sm:py-6"
      >
        <div 
          className="relative w-full max-w-[1600px] h-full flex flex-col items-center justify-center cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Radial Curved 20-Card Wheel */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {galleryCards.map((card, index) => {
              const baseAngle = index * angleStep;
              let normalizedAngle = ((baseAngle + rotationOffset) % 360 + 360) % 360;
              if (normalizedAngle > 180) normalizedAngle -= 360;

              const rad = (normalizedAngle * Math.PI) / 180;
              const x = Math.sin(rad) * radius;
              const y = -Math.cos(rad) * radius + yOffset;

              const isHovered = hoveredCardId === card.id;
              const isCurrentMiddle = activeCard.id === card.id;
              const absAngle = Math.abs(normalizedAngle);

              if (absAngle > maxVisibleAngle) {
                return null;
              }

              let opacity = 1;
              const fadeStartAngle = maxVisibleAngle - (isMobile ? 12 : 14);
              if (absAngle > fadeStartAngle) {
                opacity = Math.max(0, (maxVisibleAngle - absAngle) / (maxVisibleAngle - fadeStartAngle));
              }

              return (
                <div
                  key={card.id}
                  className="card-wheel-item absolute pointer-events-auto will-change-transform select-none"
                  style={{
                    transform: `translate3d(${x}px, ${y}px, 0px) rotate(${normalizedAngle}deg) scale(${isHovered ? 1.08 : isCurrentMiddle ? 1.04 : 1})`,
                    zIndex: isHovered ? 50 : isCurrentMiddle ? 45 : Math.round(30 - absAngle / 10),
                    opacity: opacity,
                    transformOrigin: 'center center',
                    transition: isHovered ? 'transform 180ms ease-out' : 'none',
                  }}
                  onMouseEnter={() => {
                    setHoveredCardId(card.id);
                    isHoveredRef.current = true;
                  }}
                  onMouseLeave={() => {
                    setHoveredCardId(null);
                    isHoveredRef.current = false;
                  }}
                  onClick={(e) => handleCardClick(e, card)}
                >
                  <div className={`group relative w-[92px] xxs:w-[98px] xs:w-[106px] sm:w-[128px] md:w-[148px] lg:w-[170px] xl:w-[185px] h-[128px] xxs:h-[136px] xs:h-[146px] sm:h-[176px] md:h-[202px] lg:h-[230px] xl:h-[250px] rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden bg-gray-100 shadow-[0_10px_25px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_26px_56px_rgba(0,0,0,0.24)] transition-all duration-300 cursor-pointer border ${isCurrentMiddle ? 'ring-2 ring-purple-600/80 shadow-[0_16px_36px_rgba(147,51,234,0.3)]' : 'border-black/5'}`}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80";
                      }}
                    />

                    {/* TOP BADGE */}
                    <div className="absolute top-1.5 xs:top-2 sm:top-2.5 left-1.5 xs:left-2 sm:left-2.5 right-1.5 xs:right-2 sm:right-2.5 flex items-center justify-between pointer-events-none z-10">
                      <span className={`px-1.5 xs:px-2 py-0.5 rounded-full backdrop-blur-md border text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] font-mono font-medium shadow-sm ${isCurrentMiddle ? 'bg-purple-900/80 border-purple-400/40 text-white' : 'bg-black/50 border-white/20 text-white/95'}`}>
                        {String(card.id).padStart(2, '0')}
                      </span>
                      <span className={`w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full ${card.dotColor || 'bg-white'} ring-2 ring-black/20 shadow-sm`} />
                    </div>

                    {/* ALWAYS VISIBLE BOTTOM CARD BANNER */}
                    <div className="absolute inset-x-0 bottom-0 pt-5 xs:pt-7 sm:pt-10 pb-1.5 xs:pb-2 sm:pb-2.5 px-1.5 xs:px-2 sm:px-2.5 bg-gradient-to-t from-black/95 via-black/65 to-transparent flex flex-col justify-end text-white pointer-events-none">
                      <div className="mb-0.5 xs:mb-1">
                        <span className={`inline-flex items-center gap-1 px-1 xs:px-1.5 sm:px-2 py-0.5 rounded-md border text-[6.5px] xxs:text-[7px] xs:text-[8px] sm:text-[9px] font-bold tracking-wider uppercase backdrop-blur-md ${card.tagColor || 'text-amber-300 bg-amber-500/20 border-amber-400/30'}`}>
                          <span className={`w-1 h-1 rounded-full ${card.dotColor || 'bg-amber-400'}`} />
                          <span className="truncate max-w-[65px] xs:max-w-[80px] sm:max-w-none">{card.category}</span>
                        </span>
                      </div>

                      <h4 className={`text-[8.5px] xxs:text-[9.5px] xs:text-[10.5px] sm:text-[11.5px] md:text-[12.5px] font-bold leading-tight line-clamp-1 bg-gradient-to-r ${card.titleGradient || 'from-white to-gray-200'} bg-clip-text text-transparent drop-shadow-sm tracking-tight`}>
                        {card.title}
                      </h4>

                      <div className="mt-0.5 sm:mt-1 hidden sm:flex items-center justify-between text-[9px] text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="text-[9px] font-medium text-white/90">View Gallery</span>
                        <ZoomIn className="w-2.5 h-2.5 text-white/90" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* DYNAMIC MIDDLE CARD SPOTLIGHT (Fixed height to prevent layout shifts) */}
          <div className="card-wheel-item relative z-20 text-center max-w-xl px-3 xs:px-4 mt-[250px] xxs:mt-[270px] xs:mt-[290px] sm:mt-[330px] md:mt-[370px] lg:mt-[410px] pointer-events-auto flex flex-col items-center min-h-[140px] sm:min-h-[160px] justify-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-1 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-sm transition-all duration-300">
              <span className={`w-2 h-2 rounded-full ${activeCard.dotColor || 'bg-purple-600'} animate-pulse`} />
              <span className="text-[9.5px] xs:text-[10.5px] sm:text-[11.5px] font-bold tracking-wider uppercase text-gray-800">
                Chapter #{String(activeCard.id).padStart(2, '0')} • {activeCard.category}
              </span>
            </div>

            <div className="transition-all duration-300 px-2">
              <h2 className="font-editorial text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-[38px] font-bold tracking-tight leading-snug bg-gradient-to-r from-gray-950 via-purple-900 to-indigo-950 bg-clip-text text-transparent drop-shadow-sm max-w-xl mx-auto">
                {activeCard.title}
              </h2>
            </div>

            <p className="mt-0.5 sm:mt-1 text-[11px] xxs:text-[12px] xs:text-[13px] text-gray-500 font-medium leading-snug max-w-md mx-auto">
              Style: <span className="text-gray-900 font-semibold">{activeCard.style}</span>
            </p>

            <div className="mt-2.5 xs:mt-3 sm:mt-3.5 flex flex-col items-center justify-center gap-1.5">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onSelectCard(activeCard)}
                  className="group inline-flex items-center gap-2.5 px-5 xs:px-6 sm:px-7 py-2 xs:py-2.5 sm:py-3 bg-gradient-to-r from-[#18181B] via-[#27272A] to-[#18181B] hover:from-black hover:to-zinc-900 active:bg-black text-white text-[12px] xs:text-[13px] sm:text-[14px] font-medium rounded-full shadow-[0_10px_24px_rgba(0,0,0,0.18)] hover:shadow-[0_14px_30px_rgba(147,51,234,0.25)] border border-white/10 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
                >
                  <Eye className="w-3.5 h-3.5 text-pink-400" />
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-white/80" />
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-[9px] xs:text-[10px] text-gray-500 font-medium pt-0.5">
                <Compass className="w-3.5 h-3.5 text-purple-600 animate-spin" style={{ animationDuration: '9s' }} />
                <span>Swipe or scroll to rotate • Tap card to inspect</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Floating Navigation Controls */}
      <footer className="relative z-30 w-full pb-2.5 xs:pb-3 sm:pb-4 px-4 sm:px-8 flex items-center justify-between pointer-events-none flex-shrink-0">
        <button
          onClick={() => handleRotateStep('prev')}
          className="pointer-events-auto p-2 xs:p-2.5 sm:p-3 rounded-full bg-white/85 hover:bg-white text-gray-700 hover:text-black shadow-md border border-gray-200/80 backdrop-blur-md transition-all active:scale-90 hover:scale-105"
          aria-label="Rotate Previous Card"
        >
          <ChevronLeft className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={() => handleRotateStep('next')}
          className="pointer-events-auto p-2 xs:p-2.5 sm:p-3 rounded-full bg-white/85 hover:bg-white text-gray-700 hover:text-black shadow-md border border-gray-200/80 backdrop-blur-md transition-all active:scale-90 hover:scale-105"
          aria-label="Rotate Next Card"
        >
          <ChevronRight className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5" />
        </button>
      </footer>
    </div>
  );
}

// ==========================================
// 4. MAIN GALLERY APP ROOT ORCHESTRATOR
// ==========================================
export default function Gallery({ onClose }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  const [generatorPrompt, setGeneratorPrompt] = useState('');

  const handleOpenGenerator = (promptText = '') => {
    setGeneratorPrompt(promptText);
    setIsGeneratorOpen(true);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#EBF7F8] via-[#E7F3F5] to-[#DFEFF2] text-[#111827] font-sans antialiased selection:bg-black selection:text-white flex flex-col justify-between">
      {/* Embedded Self-Contained Styles & Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .font-editorial {
          font-family: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
        }
        .font-serif-clean {
          font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
        }
      `}</style>

      {/* If card is selected, open dedicated Event Details View */}
      {selectedCard ? (
        <EventDetailPage
          card={selectedCard}
          onBack={() => setSelectedCard(null)}
          onSelectCard={(card) => setSelectedCard(card)}
          onOpenGenerator={(prompt) => handleOpenGenerator(prompt)}
          onClose={onClose}
        />
      ) : (
        /* Otherwise show 3D Rotating Arc Wheel */
        <ArcHero
          onSelectCard={(card) => setSelectedCard(card)}
          onStartGenerating={() => handleOpenGenerator()}
          onClose={onClose}
        />
      )}

      {/* AI Image Generator Modal */}
      <GeneratorModal
        isOpen={isGeneratorOpen}
        onClose={() => setIsGeneratorOpen(false)}
        initialPrompt={generatorPrompt}
      />
    </div>
  );
}

