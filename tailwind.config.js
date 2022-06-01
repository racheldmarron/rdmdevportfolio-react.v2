module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        courgette: ["Courgette", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        homeBg: "url('assets/images/bg.jpg')",
        projectBg: "url('assets/images/projectBg.jpg')",
      },
      colors: {
        secondary: "#ff4c60",
      },
      screens: {
        lgC: "1350px",
        navBreak: "900px",
      },
      gridTemplateColumns: {
        aboutLg: "repeat(1, 30% 1fr)",
      },
    },
  },
  plugins: [],
};
