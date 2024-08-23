/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1600px',
      },
      backgroundImage: {
        'intro-img': "url('/src/assets/img/introduction-bg.png')",
        'bes': "url('/src/assets/img/bes-bg.png')",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans - serif"]
      }
    },

  },
  plugins: [],
}

