/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: 'Inter',
    },
  },
  plugins: [],
  safelist: ['fill-red-500', 'fill-blue-400', 'bg-blue-400, bg-red-500'],
}
