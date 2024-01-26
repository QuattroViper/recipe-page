/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.625em'/* 10px */,
        // '3xl': '5rem',
      },

      fontFamily: {
        'darker-grotesque': ['"Darker Grotesque"'],
        'signature': ['"Signature Font"'],
        'themysion': ['"Themysion"'],
        'ballet': ['"Ballet"']
      },
      colors: {
        'primary': {
          50: '#EFCDE5',
          100: '#E1A6D0',
          200: '#D380BA',
          300: '#C35BA4',
          400: '#B2378E',
          DEFAULT: '#A11477',
          600: '#8F0F69',
          700: '#7D0B5B',
          800: '#69084C',
          900: '#55053E',
        },
        'secondary': {
          50: '#FFE0D7',
          100: '#FFC8B9',
          200: '#FFB19C',
          300: '#FF9A80',
          400: '#FF8465',
          DEFAULT: '#FF6F4B',
          600: '#DF603F',
          700: '#BF5034',
          800: '#9F4229',
          900: '#80341F',
        },
      },
      boxShadow: {
        'recipe': 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
      }
    }
  },
  plugins: [],
}

