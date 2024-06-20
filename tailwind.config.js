/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0.0625rem 0.375rem 0.28125rem 0 rgba(0, 0, 0, 0.25)",
        modalCustom: "0.75rem 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25)",
        circleCustomModal: "0 0.75rem 0.25rem 0 rgba(0, 0, 0, 0.25)",
        contactCard: "0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        JosefinSans: ["Josefin Sans", "sans-serif"],
        ReenieBeanie: ["Reenie Beanie", "sans-serif"],
      },
    },
  },
  plugins: [],
};
