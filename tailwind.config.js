/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        helvetica: ["helvetica", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        orange: "#FF7500",
        "orange-light": "#FFF1E6",
        blue: "#334155",
        "light-blue": "#64748B",
      },
    },
  },
  plugins: [],
};
