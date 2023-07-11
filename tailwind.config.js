/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#90E900",
        secondary: "#EFE600",
        dark: "#172029",
      },
      animation: {
        primaryHighlight: "primaryHighlight linear infinite 5s",
        secondaryHighlight: "secondaryHighlight linear infinite 5s",
        gradiantHighlight: "gradiantHighlight linear infinite 5s",
      },
      keyframes: {
        primaryHighlight: {
          "0%": { color: "#90E900" },
          "20%": { color: "#90E900" },
          "30%": { color: "inherit" },
          "40%": { color: "inherit" },
          "60%": { color: "inherit" },
          "80%": { color: "inherit" },
          "100%": { color: "inherit" },
        },
        secondaryHighlight: {
          "0%": { color: "inherit" },
          "20%": { color: "inherit" },
          "30%": { color: "inherit" },
          "40%": { color: "#EFE600" },
          "60%": { color: "#EFE600" },
          "70%": { color: "inherit" },
          "80%": { color: "inherit" },
          "100%": { color: "inherit" },
        },
        gradiantHighlight: {
          "0%": { color: "inherit" },
          "20%": { color: "inherit" },
          "30%": { color: "inherit" },
          "40%": { color: "inherit" },
          "60%": { color: "inherit" },
          "70%": { color: "inherit" },
          "80%": { color: "#90E900" },
          "95%": { color: "#EFE600" },
          "100%": { color: "inherit" },
        },
      },
    },
  },
  plugins: [],
};
