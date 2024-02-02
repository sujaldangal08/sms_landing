import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridColumn: {
        "span-15": "span 15 / span 15",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "header-gradient":
          "linear-gradient(to right,#EFF7FE, #EFF7FE, #FFEEEE)",
      },
      colors: {
        "brand-color": "#DF273A",
        "brand-color-medium": "#F15C5C",
        "brand-color-light": "#DF2B27",
        "text-dark": "#202020",
        "text-normal": "#323539",
        "text-medium": "#424242",
        "text-light": "#929CA6",
        "background-color": "#F6F8FC",
        "brand-blue": "#DEE4F4",
        "brand-blue-light": "#EFF3FD",
        "brand-dark-blue": "#24394D",
      },
      fontSize: {
        "4xs": "10px",
        xxxs: "12px",
        xxs: "13px",
        xs: "15px",
        sm: "17px",
        md: "20px",
        rg: "23px",
        lg: "25px",
        xl: "40px",
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        "extra-bold": "800",
      },
      borderRadius: {
        sm: "3px",
        md: "4px",
        lg: "6px",
      },
      screens: {
        xl: "1300px",
        lg: "1100px",
        rg: "900px",
        md: "700px",
        sm: "500px",
        xs: "300px",
      },
    },
  },
  plugins: [],
};
export default config;
