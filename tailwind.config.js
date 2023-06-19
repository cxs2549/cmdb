/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dark: "#181818",
        brand: "#8AB5F2",
      },
      screens: {
        sm: "450px",
        md: "640px",
        lg: "1024px"
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
}
