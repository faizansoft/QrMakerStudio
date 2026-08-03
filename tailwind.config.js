/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#2B6F53',
          dark: '#1F5A42',
          light: '#BEF392',
        },
        surface: {
          DEFAULT: '#f8f9fa',
          subtle: '#f3f4f6',
          dark: '#111827',
        },
        star: '#f59e0b',
      },
      fontFamily: {
        display: ['"Roboto Flex"', 'sans-serif'],
        body: ['"Roboto Flex"', 'sans-serif'],
      },
      borderRadius: {
        'button': '8px',
        'card': '16px',
        'banner': '16px',
      },
    },
  },
  plugins: [],
};
