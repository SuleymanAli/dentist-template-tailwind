const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,pug}', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '576px',
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1500px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '0',
      },
    },
    extend: {
      colors: {
        primary: '#583FBC',
        secondary: '#181945',
        'light-blue': '#DBEFFA',
        'light-purple': '#DBDEFA',
        'light-violet': '#FADBE2',
        'light-pink': '#F6DBFA',
        black: {
          light: 'rgb(4 20 52 / 0.6)',
          DEFAULT: '#041434',
        },
        white: {
          DEFAULT: 'rgb(var(--color-white))',
          light: 'rgb(var(--color-white) / 0.7)',
        },
      },
      fontFamily: {
        sans: ['EudoxusSans', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
