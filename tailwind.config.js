/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#ecececbd",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "glare-img":
          "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, .8) 35%, #fff 50%, rgba(255, 255, 255, .8) 65%, rgba(0, 0, 0, 0) 95%)",
      },
      dropShadow: {
        "tube-light": [
          "0 0 5px rgba(255, 255, 255, 1)", // Smaller spread
          "0 0 10px rgba(255, 255, 255, 0.4)", // Medium spread
          "0 0 20px rgba(255, 255, 255, 0.3)", // Larger spread
          "0 0 30px rgba(255, 255, 255, 0.2)", // Outermost glow
        ],
        "text-light": [
          "0 0 3px rgba(255, 255, 255, 0.2)",
          "0 0 5px rgba(255, 255, 255, 0.1)",
        ],
        "spot-light": [
          "0 0 5px rgba(245, 157, 57, 1)",
          "0 0 10px rgba(245, 157, 57, 0.6)",
          "0 0 20px rgba(245, 157, 57, 0.4)",
          "0 0 30px rgba(245, 157, 57, 0.1)",
        ],
      },
    },
  },
  plugins: [],
};
