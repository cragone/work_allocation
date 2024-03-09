/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui:{
    themes:['corporate', 'nord', 'dark',
  
    {
      regeneron: {
      
        "primary": "#065BAA",
              
        "secondary": "#40B4E5",
              
        "accent": "#78be20",
              
        "neutral": "#080808",
              
        "base-100": "#ffffff",
              
        "info": "#f0abfc",
              
        "success": "#78be20",
              
        "warning": "#fde68a",
              
        "error": "#d50057",
      },
    },
  ]
  }
}
