/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#081E52',          // Brand Primary Navy (Deep Royal Navy Blue)
          secondaryGold: '#D4AF37', // Brand Secondary Gold (Metallic Gold)
          gold: '#D4AF37',
          hoverGold: '#E5C158',     // Hover & Icon Gold (Warm Bright Gold)
          bgDark: '#040A1A',        // Deep Dark Background (Midnight Deep Navy)
          sunCream: '#FFF8DC',      // Sun Core Highlight (Warm Sunlight Cream)
          // Theme Mappings
          deep: '#06173F',
          rust: '#D4AF37',          // Metallic Gold for primary accents
          blue: '#E5C158',          // Warm Bright Gold for interactive/icons
          cyan: '#FFF8DC',          // Sun Core Highlight for highlights
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 14px 45px -26px rgba(4, 10, 26, 0.65)',
        'card-hover': '0 24px 55px -28px rgba(212, 175, 55, 0.45)',
        gold: '0 0 25px rgba(212, 175, 55, 0.35)',
        'gold-glow': '0 0 35px rgba(229, 193, 88, 0.55)',
      },
    },
  },
  plugins: [],
};
