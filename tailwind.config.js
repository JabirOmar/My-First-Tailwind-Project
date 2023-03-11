/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    minWidth: {
      '10': '40px',
      '28': '112px',
      '40': '160px'
    },
    screens: {
      'lg': '950px',
      'md': '450px',
      'sm': '321px',
      'vs': '0px'
    },
    boxShadow: {
      'shadow-one': 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;',
      'shadow-two': 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;',
      'shadow-three': 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;',
      'inset-one': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;',
      'inset-two': 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;;'
    }
  },
  plugins: [],
}
