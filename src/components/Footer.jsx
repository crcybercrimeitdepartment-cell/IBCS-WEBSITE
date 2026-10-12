import React from 'react';
import {
  ArrowRight,
  ArrowUp,
  MapPin,
  Mail,
  Phone,
  Headphones,
} from 'lucide-react';


/* =========================================================================
   BRAND LOGO BADGE (Official IBCS Navy & Gold Theme)
   ========================================================================= */
function FooterBrandBadge() {
  return (
    <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#E5C158] via-[#0C2B7A] to-[#040E26] p-[1.5px] shadow-[0_0_15px_rgba(212,175,55,0.3)] flex items-center justify-center shrink-0">
      <div className="w-full h-full rounded-[10px] bg-gradient-to-br from-[#081E52] to-[#040E26] flex items-center justify-center relative overflow-hidden">
        {/* Subtle Gold Triangle Accent matching Logo */}
        <div className="absolute top-0 left-0 w-3 h-3 bg-[#D4AF37] clip-path-polygon opacity-80" />
        <span className="font-display font-black text-white text-[13px] sm:text-[14px] tracking-tight relative z-10">
          IBCS
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   REALISTIC CELESTIAL CRESCENT MOON (Pure SVG Vector matching Reference Image)
   ========================================================================= */
function RealisticLunarHalfMoon() {
  return (
    <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 select-none pointer-events-none drop-shadow-[0_0_26px_rgba(235,245,255,0.7)]">
      {/* Soft Ambient Moonlight Bloom */}
      <div className="absolute -inset-4 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.3)_0%,rgba(196,215,245,0.12)_45%,transparent_70%)] blur-[14px] pointer-events-none" />

      <svg viewBox="0 0 200 200" className="w-full h-full relative z-10" fill="none">
        <defs>
          {/* Main Bright Lunar Surface Gradient */}
          <radialGradient id="crescentBaseLit" cx="80%" cy="60%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#F2F6FA" />
            <stop offset="60%" stopColor="#D5DEE8" />
            <stop offset="85%" stopColor="#96A6B8" />
            <stop offset="100%" stopColor="#55667A" />
          </radialGradient>

          {/* Lunar Maria (Dark Basaltic Plains) */}
          <radialGradient id="crescentMare" cx="60%" cy="60%" r="60%">
            <stop offset="0%" stopColor="#3A4859" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#253241" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#141E2B" stopOpacity="0.95" />
          </radialGradient>

          {/* Crater Depth Shadows */}
          <radialGradient id="crescentCraterShadow" cx="35%" cy="35%" r="50%">
            <stop offset="0%" stopColor="#0B121C" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#1F2C3D" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#7E8E9E" stopOpacity="0.1" />
          </radialGradient>

          {/* Terminator Soft Deep Shadow Gradient */}
          <linearGradient id="terminatorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#0C1420" stopOpacity="0.8" />
            <stop offset="80%" stopColor="#415266" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Crescent Outer Rim Shimmer */}
          <linearGradient id="crescentOuterLimb" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#F5F9FF" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>

        {/* 1. Main Crescent Body Path (Smooth outer arc, concave inner terminator) */}
        <path
          d="M132,24 C168,52 182,106 158,154 C142,184 104,198 70,188 C108,188 140,162 146,124 C152,88 138,50 132,24 Z"
          fill="url(#crescentBaseLit)"
        />

        {/* 2. Realistic Lunar Mare (Dark Basaltic Seas) on the Crescent Face */}
        {/* Mare Crisium (Oval Basalt Plain on upper-mid crescent) */}
        <ellipse cx="152" cy="88" rx="8" ry="14" transform="rotate(-22 152 88)" fill="url(#crescentMare)" />
        <ellipse cx="152" cy="88" rx="7" ry="13" stroke="#CBD7E3" strokeWidth="0.6" strokeOpacity="0.4" fill="none" />

        {/* Mare Fecunditatis (Mid-lower crescent dark patch) */}
        <path
          d="M136,112 C146,108 156,118 152,132 C146,142 134,142 126,134 C122,126 128,114 136,112 Z"
          fill="url(#crescentMare)"
        />

        {/* Mare Tranquillitatis edge patch */}
        <path
          d="M140,70 C146,65 156,72 152,82 C146,88 138,86 134,78 Z"
          fill="url(#crescentMare)"
        />

        {/* Mare Nectaris */}
        <ellipse cx="130" cy="144" rx="7" ry="9" transform="rotate(-15 130 144)" fill="url(#crescentMare)" />

        {/* 3. High-Detail Impact Craters with Bright Sunward Rims & Dark Deep Pockets */}
        {/* Petavius Crater (Large double-walled crater with central mountain) */}
        <g transform="translate(138, 142)">
          <ellipse cx="0" cy="0" rx="6.5" ry="5.5" fill="url(#crescentCraterShadow)" />
          <ellipse cx="0.6" cy="0.6" rx="6.5" ry="5.5" stroke="#FFFFFF" strokeWidth="1.1" fill="none" />
          <circle cx="0" cy="0" r="1.3" fill="#FFFFFF" />
          <line x1="-2" y1="-1" x2="2" y2="1" stroke="#FFFFFF" strokeWidth="0.7" />
        </g>

        {/* Langrenus Crater (Prominent crater near equator) */}
        <g transform="translate(148, 106)">
          <ellipse cx="0" cy="0" rx="6" ry="5" fill="url(#crescentCraterShadow)" />
          <ellipse cx="0.5" cy="0.5" rx="6" ry="5" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
          <circle cx="-0.3" cy="-0.3" r="1.4" fill="#FFFFFF" />
        </g>

        {/* Cleomedes Crater (North of Mare Crisium) */}
        <g transform="translate(145, 62)">
          <ellipse cx="0" cy="0" rx="5.5" ry="4.5" fill="url(#crescentCraterShadow)" />
          <ellipse cx="0.4" cy="0.4" rx="5.5" ry="4.5" stroke="#FFFFFF" strokeWidth="0.9" fill="none" />
        </g>

        {/* Furnerius & Stevinus (Southern chain) */}
        <g transform="translate(122, 164)">
          <circle cx="0" cy="0" r="4.5" fill="url(#crescentCraterShadow)" />
          <circle cx="0.4" cy="0.4" r="4.5" stroke="#FFFFFF" strokeWidth="0.9" fill="none" />
          <circle cx="-0.2" cy="-0.2" r="1" fill="#FFFFFF" />
        </g>

        <g transform="translate(108, 176)">
          <circle cx="0" cy="0" r="3.8" fill="url(#crescentCraterShadow)" />
          <circle cx="0.3" cy="0.3" r="3.8" stroke="#FFFFFF" strokeWidth="0.8" fill="none" />
        </g>

        {/* Northern craters near top cusp (Atlas & Hercules) */}
        <g transform="translate(136, 44)">
          <ellipse cx="0" cy="0" rx="4.5" ry="3.5" fill="url(#crescentCraterShadow)" />
          <ellipse cx="0.4" cy="0.4" rx="4.5" ry="3.5" stroke="#FFFFFF" strokeWidth="0.8" fill="none" />
          <circle cx="0" cy="0" r="0.9" fill="#FFFFFF" />
        </g>

        <g transform="translate(130, 34)">
          <ellipse cx="0" cy="0" rx="3.5" ry="2.5" fill="url(#crescentCraterShadow)" />
          <ellipse cx="0.3" cy="0.3" rx="3.5" ry="2.5" stroke="#FFFFFF" strokeWidth="0.7" fill="none" />
        </g>

        {/* 4. Realistic Terminator Rugged Shadow Formations (Micro crater indentations along inner curve) */}
        <path
          d="M132,24 Q134,35 129,42 Q135,52 138,62 Q132,74 140,86 Q135,100 144,114 Q136,128 138,142 Q128,154 122,166 Q108,178 70,188 C108,188 140,162 146,124 C152,88 138,50 132,24 Z"
          fill="url(#terminatorGrad)"
        />

        {/* Rugged Mountain Peaks along Terminator Catching Direct Sunlight */}
        <circle cx="130" cy="28" r="1.1" fill="#FFFFFF" />
        <circle cx="127" cy="38" r="1.3" fill="#FFFFFF" />
        <circle cx="134" cy="54" r="1.4" fill="#FFFFFF" />
        <circle cx="131" cy="72" r="1.6" fill="#FFFFFF" />
        <circle cx="137" cy="94" r="1.7" fill="#FFFFFF" />
        <circle cx="134" cy="118" r="1.8" fill="#FFFFFF" />
        <circle cx="131" cy="136" r="1.6" fill="#FFFFFF" />
        <circle cx="120" cy="158" r="1.4" fill="#FFFFFF" />
        <circle cx="102" cy="174" r="1.2" fill="#FFFFFF" />
        <circle cx="82" cy="184" r="1.0" fill="#FFFFFF" />

        {/* Additional Micro Craters on illuminated crescent highlands */}
        <circle cx="160" cy="96" r="2.2" fill="url(#crescentCraterShadow)" stroke="#FFFFFF" strokeWidth="0.5" />
        <circle cx="156" cy="116" r="2.8" fill="url(#crescentCraterShadow)" stroke="#FFFFFF" strokeWidth="0.6" />
        <circle cx="146" cy="132" r="2.5" fill="url(#crescentCraterShadow)" stroke="#FFFFFF" strokeWidth="0.6" />
        <circle cx="158" cy="78" r="2.0" fill="url(#crescentCraterShadow)" stroke="#FFFFFF" strokeWidth="0.5" />
        <circle cx="148" cy="48" r="2.2" fill="url(#crescentCraterShadow)" stroke="#FFFFFF" strokeWidth="0.5" />
        <circle cx="142" cy="160" r="2.6" fill="url(#crescentCraterShadow)" stroke="#FFFFFF" strokeWidth="0.6" />
        <circle cx="132" cy="172" r="2.2" fill="url(#crescentCraterShadow)" stroke="#FFFFFF" strokeWidth="0.5" />

        {/* 5. Luminous Outer Crisp Limb (Gleaming Specular Sunlight Rim) */}
        <path
          d="M132,24 C168,52 182,106 158,154 C142,184 104,198 70,188"
          stroke="url(#crescentOuterLimb)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.95"
        />
        <path
          d="M132,24 C168,52 182,106 158,154 C142,184 104,198 70,188"
          stroke="#EBF3FC"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}

/* =========================================================================
   LUXURY MOTOR YACHT / SPEED BOAT (🛥) VECTOR (Navy & Gold Corporate Theme)
   ========================================================================= */
function FloatingSailingBoat() {
  return (
    <div className="relative flex flex-col items-center">
      <svg
        className="w-12 h-6 sm:w-16 sm:h-8 md:w-20 md:h-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] select-none"
        viewBox="0 0 84 42"
        fill="none"
      >
        <defs>
          {/* Main Upper Hull Gradient - Pearlescent White to Deep Navy Blue */}
          <linearGradient id="yachtHullUpper" x1="0" y1="16" x2="0" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#EBF1FA" />
            <stop offset="85%" stopColor="#C4D7F5" />
            <stop offset="100%" stopColor="#0C2B7A" />
          </linearGradient>

          {/* Lower Keel / Underwater Hull */}
          <linearGradient id="yachtHullLower" x1="0" y1="28" x2="0" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#081E52" />
            <stop offset="100%" stopColor="#020817" />
          </linearGradient>

          {/* Cabin Superstructure */}
          <linearGradient id="yachtCabinGrad" x1="16" y1="8" x2="60" y2="22" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#E6EEFA" />
            <stop offset="100%" stopColor="#AFC8F0" />
          </linearGradient>

          {/* Tinted Panoramic Cabin Glass */}
          <linearGradient id="yachtGlassGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#030A1A" />
            <stop offset="40%" stopColor="#081E52" />
            <stop offset="80%" stopColor="#0C2B7A" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>

          {/* Radar Arch & Trim */}
          <linearGradient id="yachtRadarGrad" x1="18" y1="3" x2="28" y2="15" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#0C2B7A" />
          </linearGradient>

          {/* Water Splash / Wake */}
          <linearGradient id="wakeSprayGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C4D7F5" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Propeller Wash & Foaming Wake at Stern */}
        <path
          d="M6 31 C-1 32 -7 34 -12 33 C-7 35 -1 33 6 32 Z"
          fill="url(#wakeSprayGrad)"
          opacity="0.85"
        />
        <circle cx="2" cy="32" r="1" fill="#D4AF37" opacity="0.6" />
        <circle cx="-3" cy="33.5" r="1.3" fill="#EBF1FA" opacity="0.5" />

        {/* Lower Hull / Keel (Underwater) */}
        <path
          d="M10 29 C18 33 55 33 71 27 C67 33 22 34 10 32 Z"
          fill="url(#yachtHullLower)"
          stroke="#0C2B7A"
          strokeWidth="0.8"
        />

        {/* Main Sleek White Yacht Hull */}
        <path
          d="M8 26 C12 28 32 30 58 29 C67 28 75 25 79 21 C73 23 58 25 42 25 C24 25 11 23 8 26 Z"
          fill="url(#yachtHullUpper)"
          stroke="#C4D7F5"
          strokeWidth="0.6"
        />

        {/* Sleek Metallic Gold Waterline Accent Stripe (Matching Logo) */}
        <path
          d="M10 28.5 C24 30.2 52 30 73 25"
          stroke="#D4AF37"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Hull Side Air Intake Vents / Accent Louvers */}
        <line x1="22" y1="26.2" x2="26" y2="26.2" stroke="#040E26" strokeWidth="0.9" strokeLinecap="round" />
        <line x1="28" y1="26.2" x2="32" y2="26.2" stroke="#040E26" strokeWidth="0.9" strokeLinecap="round" />
        <line x1="34" y1="26.2" x2="38" y2="26.2" stroke="#040E26" strokeWidth="0.9" strokeLinecap="round" />

        {/* Porthole Windows (Glowing Warm Gold) */}
        <circle cx="44" cy="26.2" r="1" fill="#E5C158" stroke="#081E52" strokeWidth="0.4" />
        <circle cx="48" cy="26" r="1" fill="#E5C158" stroke="#081E52" strokeWidth="0.4" />
        <circle cx="52" cy="25.8" r="1" fill="#E5C158" stroke="#081E52" strokeWidth="0.4" />

        {/* Main Deckhouse / Cabin Structure */}
        <path
          d="M16 25 L21 16 C23 15 36 14 53 19 L64 24 Z"
          fill="url(#yachtCabinGrad)"
          stroke="#D4AF37"
          strokeWidth="0.7"
        />

        {/* Panoramic Swept Tinted Cabin Windshield & Windows */}
        <path
          d="M24 23 L28 17 C30 16 43 15.5 52 19 L58 23 Z"
          fill="url(#yachtGlassGrad)"
          stroke="#040E26"
          strokeWidth="0.6"
        />

        {/* Specular Diagonal Sunlight Glint on Windshield */}
        <path
          d="M36 16.5 L41 16.5 L36 21 L31 21 Z"
          fill="#FFFFFF"
          opacity="0.45"
        />
        <path
          d="M44 17.5 L48 18.5 L44 21.5 L40 21 Z"
          fill="#FFFFFF"
          opacity="0.3"
        />

        {/* Flybridge / Upper Deck with Sunroof */}
        <path
          d="M23 16 L27 10 C29 9.5 40 9.5 46 13 L47 16 Z"
          fill="url(#yachtCabinGrad)"
          stroke="#C4D7F5"
          strokeWidth="0.6"
        />

        {/* Upper Flybridge Tinted Windscreen */}
        <path
          d="M28 14.5 L30 11 C32 10.5 40 10.5 43 13 L44 14.5 Z"
          fill="url(#yachtGlassGrad)"
        />

        {/* Swept-Back Radar Arch & Communications Mast */}
        <path
          d="M22 16 L19 6 C19 4.8 21.5 4.8 22.5 6 L26 16 Z"
          fill="url(#yachtRadarGrad)"
          stroke="#D4AF37"
          strokeWidth="0.6"
        />

        {/* Marine Radar Dome (Radome) */}
        <ellipse cx="20.5" cy="5" rx="3" ry="1.4" fill="#FFFFFF" stroke="#0C2B7A" strokeWidth="0.6" />
        <line x1="20.5" y1="3.6" x2="20.5" y2="1.2" stroke="#D4AF37" strokeWidth="0.9" strokeLinecap="round" />
        {/* Top Mast Beacon Light (Pulsing Gold Glow Dot) */}
        <circle cx="20.5" cy="1" r="1.2" fill="#E5C158" />
        <circle cx="20.5" cy="1" r="2.2" fill="#E5C158" opacity="0.4" />

        {/* Stainless Steel Bow Handrail / Pulpit */}
        <path
          d="M51 22.5 L73 21 L77 21"
          stroke="#FFFFFF"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
        />
        <line x1="56" y1="22.5" x2="56" y2="24" stroke="#FFFFFF" strokeWidth="0.6" />
        <line x1="64" y1="21.5" x2="64" y2="23.5" stroke="#FFFFFF" strokeWidth="0.6" />
        <line x1="72" y1="21" x2="72" y2="22.5" stroke="#FFFFFF" strokeWidth="0.6" />

        {/* Bow Starboard Emerald Navigation Light */}
        <circle cx="77" cy="21" r="1" fill="#10B981" />

        {/* Dynamic Cleaving Bow Water Spray */}
        <path
          d="M74 26 Q78 24 81 22"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M72 27.5 Q77 27 80 29"
          stroke="#E5C158"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />

        {/* Stern Swimming Platform Step */}
        <rect x="6" y="26" width="3" height="3" rx="0.6" fill="#081E52" stroke="#D4AF37" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

/* =========================================================================
   SOCIAL & COMMUNICATION CUSTOM VECTOR ICONS
   ========================================================================= */
function FacebookIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
    </svg>
  );
}

function LinkedInIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
    </svg>
  );
}

function InstagramIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.75 8.5v7l6.25-3.5-6.25-3.5z"
      />
    </svg>
  );
}

function GlobeIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function TelegramIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function WhatsAppIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.477-.15-.677.15-.2.3-.777.979-.953 1.18-.175.2-.351.225-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.799-1.498-1.786-1.674-2.087-.175-.3-.019-.462.132-.612.136-.135.301-.351.451-.527.15-.175.2-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.677-1.633-.928-2.238-.244-.59-.493-.51-.677-.52l-.577-.01c-.2 0-.526.075-.802.376-.276.3-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.109.15.2 2.122 3.24 5.141 4.544.718.31 1.278.495 1.716.634.721.229 1.377.197 1.895.12.577-.087 1.782-.728 2.032-1.432.251-.704.251-1.308.176-1.432-.076-.124-.276-.2-.577-.35zM12.04 2C6.544 2 2.077 6.467 2.077 11.964c0 1.986.586 3.844 1.625 5.422L2 22l4.789-1.656a9.907 9.907 0 005.251 1.484h.004c5.495 0 9.963-4.468 9.963-9.965 0-2.662-1.036-5.165-2.92-7.049A9.903 9.903 0 0012.04 2z" />
    </svg>
  );
}

function PhoneCallIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21c.28-.27.36-.67.25-1.02A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z" />
    </svg>
  );
}

function MailEnvelopeIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quick Links (9 items)
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#featured-technology' },
    { label: 'Software Products', href: '#products-platforms' },
    { label: 'Our Technology', href: '#our-technology' },
    { label: 'Product Ecosystem', href: '#our-product-ecosystem' },
    { label: 'Skill Development', href: '#education-training-skill-development-technology' },
    { label: 'Careers', href: '#careers' },
    { label: 'Tender', href: '#tender' },
    { label: 'Contact Us', href: '#contact' },
  ];


  // 4 Company Regional Branch Hubs (Delhi, Mumbai, Bengaluru, Odisha)
  const branchOffices = [
    {
      city: 'Delhi Branch',
      tag: 'North Hub',
      email: 'delhi@ibcybersecurity.com',
      phone: '+91 11 4920 8800',
    },
    {
      city: 'Mumbai Branch',
      tag: 'West Hub',
      email: 'mumbai@ibcybersecurity.com',
      phone: '+91 22 6780 9900',
    },
    {
      city: 'Bengaluru Branch',
      tag: 'South Hub',
      email: 'bengaluru@ibcybersecurity.com',
      phone: '+91 80 4320 7700',
    },
    {
      city: 'Odisha Branch',
      tag: 'East Hub',
      offices: [
        {
          name: 'Bhubaneswar Office',
          email: 'bhubaneswar@ibcybersecurity.com',
          phone: '+91 674 254 0800',
        },
        {
          name: 'Rourkela Office',
          email: 'rourkela@ibcybersecurity.com',
          phone: '+91 661 240 1900',
        },
      ],
    },
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#040A1A] via-[#06142E] via-[#081E52] to-[#020713] text-white border-t border-[#D4AF37]/25 select-none"
    >
      {/* Background Auto-Wave & Celestial Day-Night Keyframes */}
      <style>{`
        @keyframes footerWaveFlowSlow {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes footerWaveFlowFast {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes footerSunCycle {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.95;
          }
          28% {
            transform: translate3d(15px, 25px, 0) scale(0.95);
            opacity: 0.9;
          }
          40% {
            transform: translate3d(35px, 75px, 0) scale(0.75);
            opacity: 0.35;
          }
          46%, 88% {
            transform: translate3d(50px, 120px, 0) scale(0.5);
            opacity: 0;
          }
          94% {
            transform: translate3d(20px, 40px, 0) scale(0.8);
            opacity: 0.45;
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.95;
          }
        }
        @keyframes footerMoonCycle {
          0%, 42% {
            transform: translate3d(-50px, 120px, 0) scale(0.5);
            opacity: 0;
          }
          48% {
            transform: translate3d(-25px, 45px, 0) scale(0.8);
            opacity: 0.4;
          }
          56% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.95;
          }
          82% {
            transform: translate3d(0, 0, 0) scale(1.03);
            opacity: 0.95;
          }
          90% {
            transform: translate3d(-25px, 50px, 0) scale(0.8);
            opacity: 0.35;
          }
          96%, 100% {
            transform: translate3d(-50px, 120px, 0) scale(0.5);
            opacity: 0;
          }
        }
        @keyframes footerSunsetSkyGlow {
          0% {
            opacity: 0.85;
          }
          24% {
            opacity: 0.95;
          }
          36% {
            opacity: 0.6;
          }
          44%, 88% {
            opacity: 0;
          }
          94% {
            opacity: 0.45;
          }
          100% {
            opacity: 0.85;
          }
        }
        @keyframes footerNightSkyDarken {
          0%, 38% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.85;
          }
          80% {
            opacity: 0.95;
          }
          90% {
            opacity: 0.4;
          }
          96%, 100% {
            opacity: 0.1;
          }
        }
        @keyframes footerWholeDarken {
          0%, 32% {
            opacity: 0;
          }
          44% {
            opacity: 0.55;
          }
          55%, 85% {
            opacity: 0.68;
          }
          92% {
            opacity: 0.25;
          }
          100% {
            opacity: 0;
          }
        }
        @keyframes footerStarsNightPulse {
          0%, 40% { opacity: 0.05; }
          60%, 85% { opacity: 0.35; }
          100% { opacity: 0.05; }
        }
        @keyframes footerBoatVoyage {
          0% {
            left: -40px;
            transform: translate3d(0, 0px, 0) rotate(0deg) scaleX(1);
          }
          4% {
            left: 8%;
            transform: translate3d(0, -10px, 0) rotate(-4.5deg) scaleX(1);
          }
          8% {
            left: 16%;
            transform: translate3d(0, -16px, 0) rotate(0.5deg) scaleX(1);
          }
          12% {
            left: 24%;
            transform: translate3d(0, 2px, 0) rotate(5.5deg) scaleX(1);
          }
          16% {
            left: 33%;
            transform: translate3d(0, 14px, 0) rotate(1deg) scaleX(1);
          }
          20% {
            left: 41%;
            transform: translate3d(0, -8px, 0) rotate(-5deg) scaleX(1);
          }
          24% {
            left: 50%;
            transform: translate3d(0, -18px, 0) rotate(0deg) scaleX(1);
          }
          28% {
            left: 58%;
            transform: translate3d(0, 2px, 0) rotate(6deg) scaleX(1);
          }
          32% {
            left: 67%;
            transform: translate3d(0, 14px, 0) rotate(1deg) scaleX(1);
          }
          36% {
            left: 75%;
            transform: translate3d(0, -8px, 0) rotate(-5deg) scaleX(1);
          }
          40% {
            left: 83%;
            transform: translate3d(0, -16px, 0) rotate(0deg) scaleX(1);
          }
          44% {
            left: 92%;
            transform: translate3d(0, 4px, 0) rotate(4.5deg) scaleX(1);
          }
          48% {
            left: calc(100% - 40px);
            transform: translate3d(0, 6px, 0) rotate(0deg) scaleX(1);
          }
          50% {
            left: calc(100% - 20px);
            transform: translate3d(0, 2px, 0) rotate(0deg) scaleX(-1);
          }
          52% {
            left: calc(100% - 40px);
            transform: translate3d(0, 6px, 0) rotate(0deg) scaleX(-1);
          }
          56% {
            left: 92%;
            transform: translate3d(0, -10px, 0) rotate(-4.5deg) scaleX(-1);
          }
          60% {
            left: 83%;
            transform: translate3d(0, -16px, 0) rotate(0.5deg) scaleX(-1);
          }
          64% {
            left: 75%;
            transform: translate3d(0, 2px, 0) rotate(5.5deg) scaleX(-1);
          }
          68% {
            left: 67%;
            transform: translate3d(0, 14px, 0) rotate(1deg) scaleX(-1);
          }
          72% {
            left: 58%;
            transform: translate3d(0, -8px, 0) rotate(-5deg) scaleX(-1);
          }
          76% {
            left: 50%;
            transform: translate3d(0, -18px, 0) rotate(0deg) scaleX(-1);
          }
          80% {
            left: 41%;
            transform: translate3d(0, 2px, 0) rotate(6deg) scaleX(-1);
          }
          84% {
            left: 33%;
            transform: translate3d(0, 14px, 0) rotate(1deg) scaleX(-1);
          }
          88% {
            left: 24%;
            transform: translate3d(0, -8px, 0) rotate(-5deg) scaleX(-1);
          }
          92% {
            left: 16%;
            transform: translate3d(0, -16px, 0) rotate(0deg) scaleX(-1);
          }
          96% {
            left: 8%;
            transform: translate3d(0, 4px, 0) rotate(4.5deg) scaleX(-1);
          }
          98% {
            left: -20px;
            transform: translate3d(0, 2px, 0) rotate(0deg) scaleX(-1);
          }
          100% {
            left: -40px;
            transform: translate3d(0, 0px, 0) rotate(0deg) scaleX(1);
          }
        }
        @keyframes footerBoatBobbing {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          30% {
            transform: translateY(-3px) rotate(1.8deg);
          }
          70% {
            transform: translateY(2.5px) rotate(-1.5deg);
          }
        }
      `}</style>

      {/* Dynamic Celestial Sky (Setting Sun on Right & Rising Half Moon on Left) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Layer A: VIBRANT SUNSET REDDISH-AMBER SKY (Active when Sun is present) */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
          style={{ animation: 'footerSunsetSkyGlow 40s ease-in-out infinite' }}
        >
          {/* 1. Full-Sky Warm Sunset Twilight Gradient Wash */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#4A0E17]/85 via-[#3D0C13]/70 via-[#260B18]/60 to-transparent" />

          {/* 2. Intense Radiant Reddish-Orange Sun Corona Beaming from Top-Right */}
          <div className="absolute -top-10 -right-10 w-[800px] h-[380px] bg-[radial-gradient(circle_at_top_right,rgba(255,69,0,0.7)_0%,rgba(255,107,0,0.5)_25%,rgba(230,81,0,0.35)_45%,rgba(194,24,91,0.2)_65%,transparent_85%)] blur-[35px]" />
          
          {/* 3. Sunset Horizon Crimson & Gold Clouds Spanning the Sky */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[220px] bg-gradient-to-l from-[#FF4500]/40 via-[#E64A19]/30 to-[#C2185B]/20 rounded-full blur-[65px]" />
          <div className="absolute top-6 left-1/4 w-[500px] h-[180px] bg-gradient-to-r from-[#D81B60]/25 via-[#FF6D00]/30 to-[#FFA000]/25 rounded-full blur-[60px]" />
          <div className="absolute -top-4 left-4 w-[380px] h-[160px] bg-[#E91E63]/22 rounded-full blur-[55px]" />

          {/* 4. Upper Atmospheric Dusk Line */}
          <div className="absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-r from-[#C2185B]/35 via-[#FF5722]/45 to-[#FF9800]/55 blur-[20px]" />
        </div>

        {/* Layer B: Dynamic Deep Midnight Night Sky Darken (Active when Moon is present) */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#01030A]/95 via-[#020614]/85 to-[#01040E]/95"
          style={{ animation: 'footerNightSkyDarken 40s ease-in-out infinite' }}
        >
          {/* Lunar Ethereal Cool Blue Glow from Left Sky */}
          <div className="absolute top-0 left-0 w-[550px] h-[280px] bg-[radial-gradient(ellipse_at_top_left,rgba(12,43,122,0.5)_0%,rgba(196,215,245,0.18)_40%,transparent_75%)] blur-[45px]" />
        </div>

        {/* Twinkling Starfield Intensifying during Night Phase */}
        <div
          className="absolute top-0 left-0 right-0 h-[180px] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:26px_26px]"
          style={{ animation: 'footerStarsNightPulse 40s ease-in-out infinite' }}
        />

        {/* Base Ambient Atmosphere */}
        <div className="absolute -top-16 left-1/4 w-[520px] h-[260px] bg-[#0C2B7A]/20 rounded-full blur-[110px]" />
        <div className="absolute top-1/3 left-10 w-[380px] h-[200px] bg-[#E5C158]/06 rounded-full blur-[90px]" />

        {/* =========================================================================
           CELESTIAL 1: HALF MOON (Top-Left Corner - Rising as Sun Sets)
           ========================================================================= */}
        <div
          className="absolute -top-6 sm:-top-8 md:-top-10 -left-6 sm:-left-8 md:-left-10 pointer-events-none z-0"
          style={{
            animation: 'footerMoonCycle 40s ease-in-out infinite',
            willChange: 'transform, opacity',
          }}
        >
          {/* Outer Lunar Aura Glow */}
          <div className="absolute -inset-10 sm:-inset-14 bg-gradient-to-br from-[#E5C158]/20 via-[#C4D7F5]/18 to-transparent rounded-full blur-[35px] sm:blur-[45px]" />
          <div className="absolute -inset-4 w-44 sm:w-56 h-44 sm:h-56 bg-radial from-[#FFFFFF]/25 via-[#D4AF37]/12 to-transparent rounded-full blur-[20px]" />

          {/* Realistic High-Fidelity Half Moon */}
          <RealisticLunarHalfMoon />
        </div>

        {/* =========================================================================
           CELESTIAL 2: SUN (Top-Right Corner - Slowly Setting as Moon Rises)
           ========================================================================= */}
        <div
          className="absolute -top-10 sm:-top-14 md:-top-16 -right-10 sm:-right-14 md:-right-16 pointer-events-none z-0"
          style={{
            animation: 'footerSunCycle 40s ease-in-out infinite',
            willChange: 'transform, opacity',
          }}
        >
          {/* Outer Radiant Corona Glow */}
          <div className="absolute -inset-10 sm:-inset-14 bg-gradient-to-br from-[#E5C158]/25 via-[#D4AF37]/15 to-transparent rounded-full blur-[35px] sm:blur-[45px]" />
          
          {/* Radiant Sun Rays Beaming into Footer */}
          <div className="absolute -inset-4 w-48 sm:w-64 h-48 sm:h-64 bg-radial from-[#FFEAA7]/20 via-[#D4AF37]/10 to-transparent rounded-full blur-[25px]" />

          {/* Main Sun Disc (Warm Golden Tone matching Logo Accent) */}
          <div
            className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-[#FFF8DC] via-[#E5C158] via-[#D4AF37] to-[#8C6D1F] opacity-85 shadow-[0_0_35px_rgba(212,175,55,0.6),0_0_70px_rgba(229,193,88,0.35)]"
          >
            {/* Inner Sun Core Glow */}
            <div className="absolute inset-2 sm:inset-3 rounded-full bg-gradient-to-br from-[#FFFFFF]/80 via-[#FFF8DC]/50 to-transparent blur-[1px]" />
          </div>
        </div>

        {/* Ambient Sea Depth Baseline */}
        <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-gradient-to-t from-[#020713] via-[#040E26]/90 to-transparent" />
        
        {/* Continuous Flowing Sunset/Moonlit Ocean Waves */}
        <div className="absolute -bottom-1 left-0 right-0 w-full h-[160px] sm:h-[200px] md:h-[240px] overflow-hidden pointer-events-none">
          
          {/* Wave Layer 1 (Mid-depth Ocean Sea with Deep Navy & Gold Undertone) */}
          <div 
            className="absolute bottom-0 left-0 w-[200%] h-full"
            style={{ animation: 'footerWaveFlowSlow 22s linear infinite', willChange: 'transform' }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 2880 240"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="sunsetWaveFill1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.16" />
                  <stop offset="40%" stopColor="#0C2B7A" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#020713" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              <path
                d="M0,130 C320,190 640,60 960,140 C1280,210 1360,100 1440,130 C1760,190 2080,60 2400,140 C2720,210 2800,100 2880,130 L2880,240 L0,240 Z"
                fill="url(#sunsetWaveFill1)"
                stroke="#D4AF37"
                strokeWidth="1.2"
                strokeOpacity="0.4"
              />
            </svg>
          </div>

          {/* Floating Boat Riding the Ocean Wave */}
          <div
            className="absolute bottom-[48px] sm:bottom-[65px] md:bottom-[78px] pointer-events-none z-10"
            style={{
              animation: 'footerBoatVoyage 60s linear infinite',
              willChange: 'left, transform',
            }}
          >
            <div
              style={{
                animation: 'footerBoatBobbing 4s ease-in-out infinite',
                transformOrigin: '50% 90%',
              }}
            >
              <FloatingSailingBoat />
            </div>
          </div>

          {/* Wave Layer 2 (Foreground Gilded Sea Wave with Metallic Gold & Royal Navy Crest Line) */}
          <div 
            className="absolute bottom-0 left-0 w-[200%] h-full"
            style={{ animation: 'footerWaveFlowFast 16s linear infinite', willChange: 'transform' }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 2880 240"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="sunsetWaveFill2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#E5C158" stopOpacity="0.22" />
                  <stop offset="30%" stopColor="#081E52" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#01040A" stopOpacity="0.98" />
                </linearGradient>
                <linearGradient id="sunsetCrestStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0C2B7A" />
                  <stop offset="25%" stopColor="#D4AF37" />
                  <stop offset="50%" stopColor="#FFF0AA" />
                  <stop offset="75%" stopColor="#E5C158" />
                  <stop offset="100%" stopColor="#0C2B7A" />
                </linearGradient>
              </defs>
              <path
                d="M0,165 C240,95 520,205 800,125 C1080,55 1320,185 1440,165 C1680,95 1960,205 2240,125 C2520,55 2760,185 2880,165 L2880,240 L0,240 Z"
                fill="url(#sunsetWaveFill2)"
                stroke="url(#sunsetCrestStroke)"
                strokeWidth="1.6"
                strokeOpacity="0.65"
              />
            </svg>
          </div>

        </div>
      </div>

      {/* Global Whole Footer Darkening Overlay (Smoothly darkens entire footer when Sun sets) */}
      <div
        className="absolute inset-0 pointer-events-none bg-[#020512] z-[5]"
        style={{ animation: 'footerWholeDarken 40s ease-in-out infinite' }}
      />

      {/* Main Container - Extended Width to Eliminate Huge Side Gaps */}
      <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 pt-8 sm:pt-10 pb-4">
        
        {/* =========================================================================
           TOP 3-COLUMN BALANCED CONTENT GRID
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 items-start mb-6 sm:mb-7">

          {/* ================= COLUMN 1: BRAND & CORPORATE INFO (Span 4) ================= */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-start text-left">
            {/* Logo + Company Name */}
            <a href="#home" className="inline-flex items-center gap-2.5 group focus:outline-none" aria-label="IB Cyber Security">
              <FooterBrandBadge />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-[14px] sm:text-[15px] tracking-[0.03em] text-white group-hover:text-[#E5C158] transition-colors leading-tight">
                  IB CYBER SECURITY
                </span>
                <span className="font-bold text-[9px] tracking-[0.16em] text-[#D4AF37] uppercase mt-0.5">
                  PRIVATE LIMITED
                </span>
              </div>
            </a>

            {/* Gold Accent Bar Under Brand */}
            <div className="w-8 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] mt-2 mb-2.5 rounded-full" />

            {/* Description */}
            <p className="text-[12px] leading-relaxed text-white/75 mb-3.5 max-w-sm font-normal">
              An international software product and technology company creating secure, intelligent solutions for enterprises, institutions and a digital future.
            </p>

            {/* Corporate Touchpoints (Clean Text List - Navy & Gold Icons) */}
            <div className="w-full space-y-2 mb-4 text-[11.5px]">
              <div className="flex items-start gap-2 text-white/75 group">
                <MapPin className="w-3.5 h-3.5 text-[#E5C158] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">Corporate Headquarters</span>
                  <span className="text-white/85 text-[11px] leading-tight mt-0.5">New Delhi / NCR, India</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-white/75 group">
                <Mail className="w-3.5 h-3.5 text-[#E5C158] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">Corporate Email</span>
                  <a href="mailto:info@ibcybersecurity.com" className="text-white/85 text-[11px] font-mono hover:text-[#E5C158] transition-colors leading-tight mt-0.5">
                    info@ibcybersecurity.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 text-white/75 group">
                <Phone className="w-3.5 h-3.5 text-[#E5C158] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">Corporate Phone</span>
                  <a href="tel:+911149208800" className="text-white/85 text-[11px] font-mono hover:text-[#E5C158] transition-colors leading-tight mt-0.5">
                    +91 (011) 4920-8800
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 2: QUICK LINKS (Span 3 - 2 Columns) ================= */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-start text-left">
            <h3 className="font-display font-extrabold text-[12.5px] sm:text-[13px] uppercase tracking-[0.12em] text-white">
              QUICK LINKS
            </h3>
            <div className="w-8 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] mt-1.5 mb-2.5 rounded-full" />

            <div className="w-full grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-1.5 items-start">
              {/* Column 1 (First 5 Links) */}
              <ul className="space-y-1.5">
                {quickLinks.slice(0, 5).map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group flex items-center justify-between py-0.5 text-[11px] sm:text-[11.5px] text-white/75 hover:text-[#E5C158] transition-colors focus:outline-none"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform truncate">
                        {item.label}
                      </span>
                      <ArrowRight className="w-2.5 h-2.5 text-[#D4AF37]/60 group-hover:text-[#E5C158] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Column 2 (Remaining 4 Links) */}
              <ul className="space-y-1.5">
                {quickLinks.slice(5).map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group flex items-center justify-between py-0.5 text-[11px] sm:text-[11.5px] text-white/75 hover:text-[#E5C158] transition-colors focus:outline-none"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform truncate">
                        {item.label}
                      </span>
                      <ArrowRight className="w-2.5 h-2.5 text-[#D4AF37]/60 group-hover:text-[#E5C158] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================= COLUMN 3: OUR BRANCH OFFICES (Span 5 - 2 Columns Layout) ================= */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left">
            
            {/* Section Heading & Live Badge */}
            <div className="w-full flex items-center justify-between gap-1.5 pb-2 border-b border-white/10 mb-3">
              <div>
                <h3 className="font-display font-extrabold text-[12.5px] sm:text-[13px] uppercase tracking-[0.12em] text-white flex items-center gap-2">
                  <span>OUR BRANCH OFFICES</span>
                </h3>
                <div className="w-8 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] mt-1.5 rounded-full" />
              </div>

              <div className="inline-flex items-center gap-1.5 text-[9.5px] font-bold text-[#E5C158]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C158] opacity-80" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E5C158]" />
                </span>
                <span className="tracking-wide">4 Regional Hubs</span>
              </div>
            </div>

            {/* 2-Column Address Layout: Column 1 (Delhi & Mumbai), Column 2 (Bengaluru & Odisha) */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-start">
              
              {/* SUB-COLUMN 1: Two Addresses (Delhi + Mumbai) */}
              <div className="flex flex-col space-y-3.5">
                {/* 1. Delhi Branch */}
                <div className="group flex flex-col text-left space-y-1.5 transition-all duration-200">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="font-display font-bold text-[12px] text-white group-hover:text-[#E5C158] transition-colors flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#E5C158] shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{branchOffices[0].city}</span>
                    </h4>
                    <span className="text-[7.5px] font-bold uppercase px-1 py-0.5 rounded bg-[#0C2B7A]/50 text-[#E5C158] border border-[#D4AF37]/40 shrink-0">
                      {branchOffices[0].tag}
                    </span>
                  </div>
                  <div className="space-y-0.5 text-[10px] font-mono">
                    <a
                      href={`mailto:${branchOffices[0].email}`}
                      className="flex items-center gap-1.5 text-white/70 hover:text-[#E5C158] transition-colors focus:outline-none truncate"
                    >
                      <Mail className="w-3 h-3 text-[#E5C158] shrink-0" />
                      <span className="truncate">{branchOffices[0].email}</span>
                    </a>
                    <a
                      href={`tel:${branchOffices[0].phone.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center gap-1.5 text-white/70 hover:text-[#E5C158] transition-colors focus:outline-none"
                    >
                      <Phone className="w-3 h-3 text-[#E5C158] shrink-0" />
                      <span>{branchOffices[0].phone}</span>
                    </a>
                  </div>
                </div>

                {/* 2. Mumbai Branch */}
                <div className="group flex flex-col text-left space-y-1.5 transition-all duration-200 pt-2 border-t border-white/5">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="font-display font-bold text-[12px] text-white group-hover:text-[#E5C158] transition-colors flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#E5C158] shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{branchOffices[1].city}</span>
                    </h4>
                    <span className="text-[7.5px] font-bold uppercase px-1 py-0.5 rounded bg-[#0C2B7A]/50 text-[#E5C158] border border-[#D4AF37]/40 shrink-0">
                      {branchOffices[1].tag}
                    </span>
                  </div>
                  <div className="space-y-0.5 text-[10px] font-mono">
                    <a
                      href={`mailto:${branchOffices[1].email}`}
                      className="flex items-center gap-1.5 text-white/70 hover:text-[#E5C158] transition-colors focus:outline-none truncate"
                    >
                      <Mail className="w-3 h-3 text-[#E5C158] shrink-0" />
                      <span className="truncate">{branchOffices[1].email}</span>
                    </a>
                    <a
                      href={`tel:${branchOffices[1].phone.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center gap-1.5 text-white/70 hover:text-[#E5C158] transition-colors focus:outline-none"
                    >
                      <Phone className="w-3 h-3 text-[#E5C158] shrink-0" />
                      <span>{branchOffices[1].phone}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* SUB-COLUMN 2: Bengaluru Branch + Odisha Branch (Bhubaneswar & Rourkela) */}
              <div className="flex flex-col space-y-3">
                {/* 3. Bengaluru Branch */}
                <div className="group flex flex-col text-left space-y-1.5 transition-all duration-200">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="font-display font-bold text-[12px] text-white group-hover:text-[#E5C158] transition-colors flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#E5C158] shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{branchOffices[2].city}</span>
                    </h4>
                    <span className="text-[7.5px] font-bold uppercase px-1 py-0.5 rounded bg-[#0C2B7A]/50 text-[#E5C158] border border-[#D4AF37]/40 shrink-0">
                      {branchOffices[2].tag}
                    </span>
                  </div>
                  <div className="space-y-0.5 text-[10px] font-mono">
                    <a
                      href={`mailto:${branchOffices[2].email}`}
                      className="flex items-center gap-1.5 text-white/70 hover:text-[#E5C158] transition-colors focus:outline-none truncate"
                    >
                      <Mail className="w-3 h-3 text-[#E5C158] shrink-0" />
                      <span className="truncate">{branchOffices[2].email}</span>
                    </a>
                    <a
                      href={`tel:${branchOffices[2].phone.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center gap-1.5 text-white/70 hover:text-[#E5C158] transition-colors focus:outline-none"
                    >
                      <Phone className="w-3 h-3 text-[#E5C158] shrink-0" />
                      <span>{branchOffices[2].phone}</span>
                    </a>
                  </div>
                </div>

                {/* 4. Odisha Branch (Bhubaneswar & Rourkela Offices) */}
                <div className="group flex flex-col text-left space-y-1.5 transition-all duration-200 pt-2 border-t border-white/5">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="font-display font-bold text-[12px] text-white group-hover:text-[#E5C158] transition-colors flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#E5C158] shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{branchOffices[3].city}</span>
                    </h4>
                    <span className="text-[7.5px] font-bold uppercase px-1 py-0.5 rounded bg-[#0C2B7A]/50 text-[#E5C158] border border-[#D4AF37]/40 shrink-0">
                      {branchOffices[3].tag}
                    </span>
                  </div>

                  {/* 2 Offices: Bhubaneswar (Left) & Rourkela (Right) Side-by-Side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-0.5 items-start">
                    {/* Bhubaneswar Office (Left) */}
                    <div className="space-y-0.5 text-[9.5px] font-mono">
                      <div className="text-[9px] font-sans font-bold text-[#E5C158] uppercase tracking-wider">
                        • Bhubaneswar
                      </div>
                      <a
                        href={`mailto:${branchOffices[3].offices[0].email}`}
                        className="flex items-center gap-1 text-white/70 hover:text-[#E5C158] transition-colors focus:outline-none truncate"
                      >
                        <Mail className="w-2.5 h-2.5 text-[#E5C158] shrink-0" />
                        <span className="truncate">{branchOffices[3].offices[0].email}</span>
                      </a>
                      <a
                        href={`tel:${branchOffices[3].offices[0].phone.replace(/[^0-9+]/g, '')}`}
                        className="flex items-center gap-1 text-white/70 hover:text-[#E5C158] transition-colors focus:outline-none"
                      >
                        <Phone className="w-2.5 h-2.5 text-[#E5C158] shrink-0" />
                        <span>{branchOffices[3].offices[0].phone}</span>
                      </a>
                    </div>

                    {/* Rourkela Office (Right) */}
                    <div className="space-y-0.5 text-[9.5px] font-mono sm:border-l sm:border-white/5 sm:pl-2">
                      <div className="text-[9px] font-sans font-bold text-[#E5C158] uppercase tracking-wider">
                        • Rourkela
                      </div>
                      <a
                        href={`mailto:${branchOffices[3].offices[1].email}`}
                        className="flex items-center gap-1 text-white/70 hover:text-[#E5C158] transition-colors focus:outline-none truncate"
                      >
                        <Mail className="w-2.5 h-2.5 text-[#E5C158] shrink-0" />
                        <span className="truncate">{branchOffices[3].offices[1].email}</span>
                      </a>
                      <a
                        href={`tel:${branchOffices[3].offices[1].phone.replace(/[^0-9+]/g, '')}`}
                        className="flex items-center gap-1 text-white/70 hover:text-[#E5C158] transition-colors focus:outline-none"
                      >
                        <Phone className="w-2.5 h-2.5 text-[#E5C158] shrink-0" />
                        <span>{branchOffices[3].offices[1].phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* =========================================================================
           BOTTOM SUB-FOOTER BAR (Navy & Gold Theme)
           ========================================================================= */}
        <div className="border-t border-white/10 pt-3 flex flex-col xl:flex-row items-center justify-between gap-3 text-[11px] sm:text-[11.5px] text-white/65 font-medium">
          
          {/* Copyright */}
          <div className="whitespace-nowrap text-center xl:text-left">
            &copy; {currentYear} <span className="text-white font-semibold">IB CYBER SECURITY PRIVATE LIMITED</span>. All Rights Reserved.
          </div>

          {/* Social Icons & Back to Top Button */}
          <div className="flex items-center flex-wrap gap-1.5 sm:gap-2 shrink-0">
            <span className="text-white/85 text-[11.5px] font-semibold mr-0.5">
              Follow Us
            </span>

            {/* 1. Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-[#081E52]/80 border border-[#D4AF37]/35 hover:border-[#E5C158] hover:bg-[#D4AF37]/25 text-white hover:text-[#E5C158] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>

            {/* 2. Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-[#081E52]/80 border border-[#D4AF37]/35 hover:border-[#E5C158] hover:bg-[#D4AF37]/25 text-white hover:text-[#E5C158] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>

            {/* 3. LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-[#081E52]/80 border border-[#D4AF37]/35 hover:border-[#E5C158] hover:bg-[#D4AF37]/25 text-white hover:text-[#E5C158] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
            </a>

            {/* 4. Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-[#081E52]/80 border border-[#D4AF37]/35 hover:border-[#E5C158] hover:bg-[#D4AF37]/25 text-white hover:text-[#E5C158] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>

            {/* 5. YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-[#081E52]/80 border border-[#D4AF37]/35 hover:border-[#E5C158] hover:bg-[#D4AF37]/25 text-white hover:text-[#E5C158] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
            >
              <YouTubeIcon className="w-3.5 h-3.5" />
            </a>

            {/* 6. Website / Globe */}
            <a
              href="https://ibcybersecurity.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Website"
              className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-[#081E52]/80 border border-[#D4AF37]/35 hover:border-[#E5C158] hover:bg-[#D4AF37]/25 text-white hover:text-[#E5C158] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
            >
              <GlobeIcon className="w-3.5 h-3.5" />
            </a>

            {/* 7. Telegram */}
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-[#081E52]/80 border border-[#D4AF37]/35 hover:border-[#E5C158] hover:bg-[#D4AF37]/25 text-white hover:text-[#E5C158] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
            >
              <TelegramIcon className="w-3.5 h-3.5" />
            </a>

            {/* 8. WhatsApp */}
            <a
              href="https://wa.me/911149208800"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-[#081E52]/80 border border-[#D4AF37]/35 hover:border-[#E5C158] hover:bg-[#D4AF37]/25 text-white hover:text-[#E5C158] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </a>

            {/* 9. WhatsApp Channel / Community */}
            <a
              href="https://whatsapp.com/channel"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Channel"
              className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-[#081E52]/80 border border-[#D4AF37]/35 hover:border-[#E5C158] hover:bg-[#D4AF37]/25 text-white hover:text-[#E5C158] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </a>

            {/* 10. Phone */}
            <a
              href="tel:+911149208800"
              aria-label="Phone"
              className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-[#081E52]/80 border border-[#D4AF37]/35 hover:border-[#E5C158] hover:bg-[#D4AF37]/25 text-white hover:text-[#E5C158] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
            >
              <PhoneCallIcon className="w-3.5 h-3.5" />
            </a>

            {/* 11. Email */}
            <a
              href="mailto:info@ibcybersecurity.com"
              aria-label="Email"
              className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-[#081E52]/80 border border-[#D4AF37]/35 hover:border-[#E5C158] hover:bg-[#D4AF37]/25 text-white hover:text-[#E5C158] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
            >
              <MailEnvelopeIcon className="w-3.5 h-3.5" />
            </a>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 ml-2 text-white/85 hover:text-[#E5C158] font-semibold transition-all group focus:outline-none cursor-pointer"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#081E52]/90 border border-[#D4AF37]/45 text-[#E5C158] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#040E26] group-hover:scale-105 transition-all shadow-xs">
                <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="text-[11.5px] whitespace-nowrap">
                Back to Top
              </span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
