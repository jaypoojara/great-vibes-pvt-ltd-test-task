/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '14': 'clamp(10px,1.5vw,14px)',
        '16': 'clamp(10px,1.2vw,16px)',
        '20': 'clamp(15px,1.5vw,20px)',
        '24': 'clamp(20px,2vw,24px)',
      },
      colors: {
       'primary':'#1597E4',
       'dark':'#212121',
       'placeHolder':'#7A7A7A'
       
      }
    },
  },
  plugins: [],
}

