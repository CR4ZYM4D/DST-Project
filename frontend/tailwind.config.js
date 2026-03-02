/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#4200FF',
        secondary: '#404040',
        accent: '#C4C4C4',
        'light-gray': '#F3F3F3',
        'text-gray': '#9D9D9D',
      },
      boxShadow: {
        'glass': '0px 4px 33px 6px rgba(66, 0, 255, 0.16)',
        'card': '0px 3.5px 21px -1px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '13px',
        '2xl': '20px',
        '3xl': '28px',
      }
    },
  },
  plugins: [],
}
