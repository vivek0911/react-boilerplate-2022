/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      orange: 'var(--color-orange)',
      teal: 'var(--color-teal)',
      white: {
        DEFAULT: 'var(--color-white)',
        light: 'var(--color-white-light)',
      },
      black: 'var(--color-black)',
      blue: {
        dark: 'var(--color-blue-dark)',
        light: 'var(--color-blue-light)',
      },
      gray: {
        DEFAULT: 'var(--color-gray)',
        light: 'var(--color-gray-light)',
        lightest: 'var(--color-gray-lightest)',
      },
    },
  },
  plugins: [],
}
