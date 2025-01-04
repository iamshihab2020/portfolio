/* eslint-disable no-undef */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Add your paths here
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/heroFinal_3.svg')",
        hero2: "url('./src/assets/heroFinal_4.svg')",
      },

      colors: {
        primary: {
          50: "#f5faff",
          100: "#eff4fb",
          200: "#e7ecf3",
          300: "#d8dde4",
          400: "#b4b9c0",
          500: "#959aa0",
          600: "#6d7177",
          700: "#595d63",
          800: "#3a3f44",
          900: "#1a1e23",
        },
        secondary: {
          50: "#d7fef6",
          100: "#99fae6",

          200: "#12f7d5", // !

          300: "#00efc1",
          400: "#00e4b2",
          500: "#00d9a3",
          600: "#00c994",
          700: "#00b781",
          800: "#00a572",
          900: "#008651",
        },
      },
    },
  },
  plugins: [],
});
