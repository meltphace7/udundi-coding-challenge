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
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "2rem",
      "2xl": "2.5rem",
      "3xl": "3rem",
      "4xl": "3.5rem",
      "5xl": "4rem",
      "6xl": "6rem",
      "7xl": "8rem",
      "8xl": "10rem",
      "9xl": "15rem",
    },
    extend: {
      colors: {
        burgundyRed: " hsl(0, 60%, 24%)",
      },
    },
  },
  plugins: [],
};
