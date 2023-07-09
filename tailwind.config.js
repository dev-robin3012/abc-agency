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
        primaryHighlight: "primaryHighlight ease 3s infinite",
      },
      keyframes: {
        primaryHighlight: {
          from: {},
          to: { color: "#90E900" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
