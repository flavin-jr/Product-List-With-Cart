/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': { 'max': '850px' },
        'mobile': { 'max': '450px' }
      },
      fontFamily: {
        sans: 'Red Hat Text'
      },
      backgroundImage: {
        'first-1': "url('assets/images/image-baklava-desktop.jpg')"
      },
      colors: {
        'hover-confirmation-btn-color': 'rgb(129,29,11)',
        'der': '#C73B0F',
        'esor': {
          50: '#FCF8F6',
          100: '#F5EEEC',
          300: '#CAAFA7',
          400: '#AD8A85',
          500: '#87635A',
          900: '#260F08',
        },
        'neerg': '#1EA575'
      }
    },
  },
  plugins: [],
}