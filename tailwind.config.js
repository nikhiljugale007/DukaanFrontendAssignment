/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'tertiory-background':'#353C53',
        'secondary-background': '#1E2640',
        'primary-background': '#FFFFF',
        'off-white':'#D9D9D9',
        'primary-txt-color':'#000',
        'secondary-txt-color':'#fff',
        'btn-background-faint-blue':'#4b567a',
        'light-gray':'#F2F2F2',
        'main-page-bg':'#FAFAFA',
        'text-clr-blue':'#146EB4'
      }
    },
  },
  plugins: [],
}

