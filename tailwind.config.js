/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0B2F71',
        'secondary-blue': '#01284F',
        'tertiary-blue': '#d7e3f7',
        'fourth-blue': '#f3f4f6',
        'primary-beige': '#EEE5CB'
      },
    },
  },
  plugins: [],
}

