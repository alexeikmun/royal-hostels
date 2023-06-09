/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ec',
          100: '#ffecd2',
          200: '#ffd5a5',
          300: '#ffb66c',
          400: '#ff8c30',
          500: '#ff6b08',
          600: '#f74e00',
          700: '#d03801',
          800: '#a22c0a',
          900: '#82270c',
          950: '#471003',
        },
      },
      animation: {
        'fade': 'fadeOut 0.5s ease-in-out',
        'slide-right': 'slideRight 0.5s ease-in-out',
      },

      // that is actual animation
      keyframes: {
        fadeOut: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      screens: {
        xs: '200px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin'),
  ],
};
