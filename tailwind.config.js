/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandDark: '#0f172a',   // Deep tech slate/navy
        brandAccent: '#0ea5e9', // Vibrant mobile/web neon cyan
      }
    },
  },
  plugins: [],
}