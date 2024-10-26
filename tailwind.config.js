/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fontSora: ['Sora'],
      },
      colors: {
        dark2_subtitle: '#494949',

        dark4_subtitle: '#737373',

        primary_btn: '#E7FE29',
      },
      backgroundImage: {
        hero_bg_img: "url('./public/bg-shadow.png')",
      },
    },
  },
  plugins: [require('daisyui')],
};
