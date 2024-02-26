/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      lime: {
        400: 'hsl(75, 94%, 57%)'
      },
      neutral: {
        100: 'hsl(0, 0%, 100%)',
        700: 'hsl(0, 0%, 20%)',
        800: 'hsl(0, 0%, 12%)',
        900: 'hsl(0, 0%, 8%)'
      }
    },
    extend: {}
  },
  plugins: []
}
