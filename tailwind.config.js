/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#58f96e",
        secondary: "#ff9700",
        white: "#ffffff",
        black: "#000000",
        night: "#252F34",
        dark: "#ffffff1a",
        silver: "##C2C2C2",
        green: "#326542",
        orange: "#F7941D",
        "text-silver": "#667085",
        "light-green": "#39B54A",
        "text-grey": "#A0A0A0",
        "text-dark": "#0A0A0A",
        "bg-color": "#FFFAF4",
        "bg-dark": "#25363D",
        "light-orange": "#f7951d4d",
        "dark-text": "#1D1D1B",
      },
    },
  },
  plugins: [],
};
