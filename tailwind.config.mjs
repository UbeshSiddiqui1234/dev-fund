/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile-landscape': {'raw': '(max-width: 1400px) and (orientation: landscape)'},
      },
    },
  },
  variants: {
    extend: {
      display: ['mobile-landscape'],
      flexDirection: ['mobile-landscape'],
      gap: ['mobile-landscape'],
      height: ['mobile-landscape'],
      fontSize: ['mobile-landscape'],
    },
  },
  plugins: [],
};
