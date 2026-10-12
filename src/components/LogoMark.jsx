export default function LogoMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 3.5 42 10v12.6c0 10.9-7.3 18.4-18 21.9C13.3 41 6 33.5 6 22.6V10l18-6.5Z" fill="url(#brand-gradient)" />
      <path d="M16 15.5v17M21.5 15.5v17M21.5 15.5h5.2a4.4 4.4 0 0 1 0 8.8h-5.2m0 0h6.1a4.1 4.1 0 1 1 0 8.2h-6.1" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="15.5" r="1.6" fill="#E5C158" />
      <circle cx="16" cy="32.5" r="1.6" fill="#E5C158" />
      <defs>
        <linearGradient id="brand-gradient" x1="8" y1="7" x2="40" y2="43" gradientUnits="userSpaceOnUse">
          <stop stopColor="#081E52" />
          <stop offset="1" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
    </svg>
  );
}
