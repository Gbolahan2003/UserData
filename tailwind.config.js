/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg:'#E8E9FE',
        theme:'#3B82F6'
      }
    },
  },
  plugins: [],
}

