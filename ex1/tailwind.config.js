/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'min-70' : '70%',
      },
      backgroundColor: {
        'face': '#4767b3',
      },
      gradientColorStops: {
        'ins1': '#7f37c9',
        'ins2': '#ff2992',
        'ins3': '#ff9807',
      },
    },
  },
  plugins: [],
}