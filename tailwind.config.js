module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#17275c',
        },
        green: '#80E0A7',
        black: '#212322',
        ForestGreen: '#1C4220'
      },
      fontFamily: {
        'display': ['Monument Extended'],
        'body': ['Circular Std'],
      }
    },
  },
  plugins: [],
}
