/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'ms' : {'max': '900px'},
      'md': {'max': '800px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'min': '800px'},
      // => @media (max-width: 639px) { ... }
      'xs': {'max': '559px'},
    }
  },
  plugins: [],
}

