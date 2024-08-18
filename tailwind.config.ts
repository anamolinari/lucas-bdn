import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "550px" },
      },
      rotate: {
        "20": "20deg",
      },
      animation: {
        "pulse-custom": "pulse 2s infinite",
      },
      keyframes: {
        pulse: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(1.1)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        blue: "var(--blue-color)",
        green: "var(--green-color)",
        red: "var(--red-color)",
        background: "var(--background-color)",
        button: "var(--button-color)",
        card: "var(--card-color)",
        subtle: "var(--subtle-color)",
        line: "var(--line-color)",
        dark: {
          primary: "var(--primary-color)",
          secondary: "var(--secondary-color)",
          background: "var(--background-color)",
          card: "var(--card-color)",
          subtle: "var(--subtle-color)",
          line: "var(--line-color)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
