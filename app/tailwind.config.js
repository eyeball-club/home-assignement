const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./assets/**/*.{vue,js,ts,jsx,tsx}",
    "./templates/**/*.{html,twig}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'bodyfont': 'Mulish',
      },
      colors: {
        'textcolor': '#585757',
        'primary': '#00C5FF',
        'menu': '#7C8AB5',
        'secondary': '#830d1a',
        'paracolor': '#929191',
      },
      backgroundColor: {
        'bodybg': '#E5E5E5',
        'flagbg': '#FFF1F5',
        'primary': '#00C5FF',
        'secondary': '#830d1a',
        'headingbg': '#EDF2F7',
        'modalhead': '#F0F1F2',
        'iconbg': 'rgba(0,0,0,.1)',
      },
      spacing: {
        '5px': '500px',
      },
      fontSize: {
        'fs12': '12px',
        'fs150': '150px',
      },
      boxShadow: {
        'whitebox': '0px 20px 40px 15px rgba(226, 226, 226, 0.2)',
      },
      borderWidth: {
        '7': '7px',
      },
      borderColor: {
        'secondary': '#830d1a',
      },
      borderRadius: {
        'whitebox': '20px',
        'flagradius': '10px',
        'radius5': '5px',
      },
      dropShadow: {
        'whitebox': '0px 30px 60px rgba(50, 50, 71, 0.06)',
      },
      blur: {
        sm: '2px',
      },
      maxWidth: {
        '7rm': '7rem',
        '10rm': '10rem',
      },
      minWidth: {
        '3xl': '48rem',
      },
      maxHeight: {
        '40vh': '40vh',
        '72vh': '72vh',
      }
    },
  },
  plugins: [],
}
