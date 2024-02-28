/** @type {import('tailwindcss').Config} */
export default {
  content: [
        'node_modules/preline/dist/*.js',
    './src/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [,
    require('preline/plugin')
  ],
}

