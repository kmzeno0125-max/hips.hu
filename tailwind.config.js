/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#152E7A',
        cobalt: '#1D4DA8',
        cyan: '#4DC5E8',
        'off-white': '#F4F6FB',
        'navy-90': 'rgba(21, 46, 122, 0.09)',
        'footer-dark': '#0D1E52',
      },
      fontFamily: {
        display: ["'Times New Roman'", 'Times', 'serif'],
        body: ["'Times New Roman'", 'Times', 'serif'],
      },
    },
  },
  plugins: [],
};
