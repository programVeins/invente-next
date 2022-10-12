/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-sky-500",
    "bg-teal-500",
    "bg-green-500",
    "bg-amber-500",
    "bg-rose-500",
    "bg-pink-500",
    "bg-fuchsia-500",
    "bg-violet-500",
    "bg-indigo-500",
    "bg-blue-500",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Mono", ...defaultTheme.fontFamily.sans],
        azonix: ["Azonix", ...defaultTheme.fontFamily.sans],
        aspace: ["Aspace", ...defaultTheme.fontFamily.sans],
        spantaran: ["Spantaran", ...defaultTheme.fontFamily.sans],
        ubuntu: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "#020015",
      },
      listStyleType: {
        awesome: '"⚪ "',
      },
      letterSpacing: {
        "wide-wide": "0.2em",
      },
    },
  },
  plugins: [],
};
