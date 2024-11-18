/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-pink-lavender": "#F1C3F2", // Light pink-lavender
        "soft-lavender": "#CAACF2", // Soft lavender
        "dusty-purple": "#59518C", // Dusty purple
        "dark-purple": "#191725", // Dark purple
        "muted-blue": "#756CBF", // Muted blue
        "space-light": "#4E437D", // Light purple
        "space-dark": "#23204C", // Dark purple
        "space-deep": "#292256", // Deep purple
        "space-darker": "#221F4A", // Even darker purple
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(to right top, #23204c, #211d4c, #1e1a4c, #1c164b, #1a134b, #191248, #191244, #181141, #18133a, #191533, #19162c, #191725)",
      },
    },
  },
  plugins: [],
};
