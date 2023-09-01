/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["CustomFont", "sans-serif"],
        secondary: ["BlackOpsOne-Regular", "sans-serif"],
      },
      backdropOpacity: {
        10: "0.1",
      },
    },
  },
  plugins: [],
};
