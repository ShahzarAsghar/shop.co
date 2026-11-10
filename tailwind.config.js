/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#F0F0F0',
        accent: '#FF3333',
        muted: '#9C9C9C',
        borderlight: '#E5E5E5',
        verified: '#01AB31',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        integral: ['"Integral CF"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.375rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'section': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        card: '0 4px 8px rgba(0, 0, 0, 0.04)',
        custom: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, #FFFFFF 0%, #F2F0F1 100%)',
      },
    },
  },
  plugins: [],
};
