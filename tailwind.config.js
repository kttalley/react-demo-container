/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid-slate-200': `radial-gradient(circle at 1px 1px, rgb(226 232 240) 1px, transparent 0)`,
      },
    },
  },
  plugins: [],
}