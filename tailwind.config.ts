import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        userDropDownAnimationEnter: {
          "0%": { transform: "translateY(75%)", opacity: "0" },
          "10%": { opacity: "0.1" },
          "20%": { opacity: "0.2" },
          "30%": { opacity: "0.3" },
          "40%": { opacity: "0.4" },
          "50%": { opacity: "0.5" },
          "60%": { opacity: "0.6" },
          "70%": { opacity: "0.7" },
          "80%": { opacity: "0.8" },
          "90%": { opacity: "0.9" },
          "100%": { opacity: "1" },
        },
        userDropDownAnimationLeave: {
          "0%": { opacity: "1" },
          "10%": { opacity: "0.9" },
          "20%": { opacity: "0.8" },
          "30%": { opacity: "0.7" },
          "40%": { opacity: "0.6" },
          "50%": { opacity: "0.5" },
          "60%": { opacity: "0.4" },
          "70%": { opacity: "0.3" },
          "80%": { opacity: "0.2" },
          "90%": { opacity: "0.1" },
          "100%": { transform: "translateY(75%)", opacity: "0" },
        },
      },
      animation: {
        userDropDownAnimationIn: "userDropDownAnimationEnter 600ms ease-in-out",
        userDropDownAnimationOut:
          "userDropDownAnimationLeave 600ms ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
