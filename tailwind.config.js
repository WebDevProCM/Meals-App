/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "glass": "rgba(255,255,255,0.1)",
        "glassHover": "rgba(255,255,255,0.2)",
        "glassBorder": "white/10",
        "orgText": "bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent"
      }
    },
  },
  plugins: [],
};
