module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#abd1c6',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'charcoal': '#004643',
      'shiny-shamrock': '#66A182',
      'tea-green': '#CAFFB9',
      'paradise-pink': '#EE4266',
      'baby-blue-eyes': '#91C4F2',
      'red': '#e16162',
      'main':  '#e8e4e6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
