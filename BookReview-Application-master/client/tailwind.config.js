/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF', // Soft Indigo
        secondary: '#FFB86C', // Warm Peach
        accent: '#43E6B0', // Mint Green
        background: '#F8FAFC', // Light Gray
        surface: '#FFFFFF', // Pure White
        info: '#5BC0EB', // Sky Blue
        success: '#6EE7B7', // Soft Green
        warning: '#FFD166', // Soft Yellow
        danger: '#FF6B6B', // Soft Red
        dark: '#22223B', // Deep Navy
        muted: '#A0AEC0', // Muted Gray
      },
      fontFamily: {
        display: ['"Pacifico"', 'cursive'],
        heading: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'Roboto', 'sans-serif'],
        accent: ['"Dancing Script"', 'cursive'],
      },
      borderRadius: {
        xl: '1.5rem',
        '2xl': '2rem',
      },
      boxShadow: {
        smooth: '0 4px 32px 0 rgba(108, 99, 255, 0.10)',
      },
    },
  },
  plugins: [],
};
