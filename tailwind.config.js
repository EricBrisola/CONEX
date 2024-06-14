/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "1px 6px 4.5px 0 rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        JosefinSans: ["Josefin Sans", "sans-serif"],
        ReenieBeanie: ["Reenie Beanie", "sans-serif"],
      },
    },
  },
  plugins: [],
};
