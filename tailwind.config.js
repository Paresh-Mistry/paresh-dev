/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // If using Vite or plain HTML
    "./src/**/*.{js,ts,jsx,tsx}", // For React or similar frameworks
  ],
  theme: {
    extend: {
       fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
