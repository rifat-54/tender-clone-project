tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./App.{js,jsx,ts,tsx}",
      "./app/**/*.{js,jsx,ts,tsx}",
      "./public/index.html", // ✅ important for expo-router
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
 
