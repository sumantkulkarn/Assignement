module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_4c": "#0000004c",
          "900_7f": "#0000007f",
          "900_33": "#00000033",
        },
        white: { A700: "#ffffff" },
        colors: "#ffffffff",
        gray: {
          100: "#f2f2f2",
          300: "#e1e1e1",
          600: "#7c7c7c",
          900: "#191819",
          "900_01": "#1c1b1f",
        },
        blue_gray: { 100: "#d9d9d9" },
        indigo: { A200_01: "#4374fb", A200: "#4375fb", A200_75: "#4375fb75" },
      },
      fontFamily: { switzer: "Switzer" },
      boxShadow: {
        bs: "0px 4px  4px 0px #0000003f",
        bs1: "inset 5px 5px  10px 0px #0000004c",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
