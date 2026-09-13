/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/**/*.{js,ts,jsx,tsx,mdx}", // يتيح لـ Tailwind قراءة مكونات UI المشتركة
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};