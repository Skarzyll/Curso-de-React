import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
} satisfies Config;
