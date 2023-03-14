module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        // default breakpoints but with 40px removed
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          // xl: '1240px',
          desktop: '1200px',
          '2xl': '1496px',
        },
        // padding: {
        //   DEFAULT: '0px',
        //   sm: '0px',
        //   lg: '0px',
        //   xl: '0px',
        //   '2xl': '6rem',
        // },
      },
      lineHeight: {
        'extra-loose': '2.5',
        '120': '120%',
      },
      colors: {
        blue: {
          950: '#17275c',
        },
        green: '#86FF73',
        light_green: '#80E0A7',
        black: '#212322',
        forestGreen: '#1C4220',
        white: '#ffffff',
        bgGrey: '#f7f9f9',
        gray: '#BAC3D1',
        gray2: '#DEE6F1',
      },
      fontFamily: {
        'display': ['"Monument Extended"', 'Helvetica, Arial, sans-serif'],
        'body': ['"Circular Std"', 'Helvetica, Arial, sans-serif'],
      },
    },
    typography: (theme) => ({}),
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide')
    // require('@tailwindcss/form'),
  ],
}
