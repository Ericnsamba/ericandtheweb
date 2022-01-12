module.exports = {
  mode: 'jit',
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
        ForestGreen: '#1C4220',
        white: '#ffffff'
      },
      fontFamily: {
        'display': ['"Monument Extended"', 'Helvetica, Arial, sans-serif'],
        'body': ['"Circular Std"', 'Helvetica, Arial, sans-serif'],
      },
      height: {
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/form'),
  ],
}
