/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        cyan: "#1983b0",
        darkCyan: "#127ca8",
        lightBlue: "#1da9e9",
      },
    },
  },
  plugins: [],
};
