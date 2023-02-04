/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkBlue: "#242D52", // bg
        darkGreyishBlue: "#9095A7", // hover
        paleRed: "#c94637", // highlight
        veryLightGray: "#FAFAFA", // heading
        lightBlue: "#666c86", // paragraph
      },
    },
  },
  plugins: [],
};
