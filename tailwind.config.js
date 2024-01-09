/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-background': '#FFFFF',
        'secondary-background': '#1E2640',
        'tertiory-background':'#353C53',
        
        'main-page-bg':'#FAFAFA',

        'primary-txt-color':'#000',
        'secondary-txt-color':'#fff',
        'tertiory-txt-color':'#146EB4',

        
        'bg-light-blue':'#494F64',
        'bg-light-gray':'#F2F2F2',
        'primary-gray':'#828282', 
        'secondary-gray':'#4C4C4C',
      }
    },
  },
  plugins: [],
}

