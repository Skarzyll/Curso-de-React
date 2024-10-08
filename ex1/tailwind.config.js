/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    minHeight: {
      'min-70' : '70%',
    },
  },
  plugins: [],
}