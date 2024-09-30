import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter","sans-serif"],
        neue:["Neue-Montreal"]
      },
      animation:{
        'marquee':'marqueeframe 20s linear infinite'
      },
      keyframes:{
        'marqueeframe':{
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}

