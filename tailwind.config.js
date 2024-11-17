/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0B2F71',
        'secondary-blue': '#01284F',
      },
    },
  },
  plugins: [],
}

