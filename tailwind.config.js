/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          "title-color": '#414040',
         'decs-color':'#707070',
         'desc-color-2':'#F3F3F3',
         'primary-color':'#B68C5A',
         'link-color':'#CFCFCF'
        },
        fontFamily: {
          poppins: ["Poppins", "sans-seri"],
          "eb-garamond": ["EB Garamond", "serif"],
        },
        maxWidth: {
          standard: "73.125rem",
        },
        backgroundImage: {
          "hero-bg": "url('./images/banner.png')",
          "slider-1": "url(./images/client-1.png)",
          "slider-2": "url(./images/client-2.png)",
          "slider-3": "url(./images/client-3.png)",
          "slider-4": "url(./images/client-4.png)",
        },
      },
    },
    plugins: [],
  }