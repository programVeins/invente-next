/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-sky-200",
    "bg-sky-300",
    "bg-sky-400",
    "bg-sky-500",
    "bg-sky-600",
    "bg-sky-700",
    "bg-sky-800",
    "bg-sky-900",
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
        awesome: '"⚡️ "',
      },
      letterSpacing: {
        "wide-wide": "0.2em",
      },
    },
  },
  plugins: [],
};
