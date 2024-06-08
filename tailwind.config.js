
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '420px', // Example extra small breakpoint
      'sm': '640px',
      'md': '800px',
      // Define other breakpoints as needed
    },
    extend: {
     colors: {
        'gradient-gray-start': '#444455',
        'gradient-gray-middle': '#777777',
        'gradient-gray-end': '#BBBBBB',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-gradient-gray': {
          background: 'linear-gradient(90deg, #333333, #777777, #BBBBBB)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      });
    },
  ],
}

