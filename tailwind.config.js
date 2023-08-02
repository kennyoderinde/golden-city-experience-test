

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      color: {
        'navbar-text' : '#753FF6',
        'dropdown' : '#F4F4F4',
        'gray' : '#989898'
      },

      fontFamily: {
        poppins : 'Poppins',
      },

      width: {
        '199': '199px',
        '984' : '984px',
        '120px' : '120px',  //rent dropdown in home pg
        '438px' : '438px' , //location input in home pg
        '158px' : '158px',  //house dropdown in home pg
        '2px' : '2px',
        '104px' : '104px',
        '429px' : '429px',  //Location section width 
        '150px' : '150px',  //Location section btn 
        '44.0625rem' : '44.0625rem',   //recently added
        '191px' : '191px',
        '121px' : '121px',
        '369px' : '369px',
        '440px' : '440px', //testimonials
        '180px' : '180px' , //testimonials btn
        '300px' : '300px', //footer underline
        '1680px': '1680px',  //navbar width


      },

      height: {
        '100': '100px',
        '171': '171px',
        '42px' : '42px',  //location input in home pg
        '114px' : '114px',  //location input in home pg
        '560px' : '560px',
        '380px' : '380px',
        '50px' : '50px',  //Location section btn
        '15.5625rem' : '15.5625rem', //recently added
        '191px' : '191px',  //recently added img
        '41px' : '41px',
        '331px' : '331px',  //testimonial
        '1520px' : '1520px', //footer underline
        '70px' : '70px',
        '60%' : '60%', //footer socilais media
        

        
      },

      fontSize: {
        'xxl': '30px',     // Extra Small
        '28px': '28px',    // Small
        '22px' : '22px',  
        
      },

      spacing: {
        '23rem': '23rem', // space btw golden logo and nav items 
        '38rem': '38rem',
        '35rem' : '35rem',   //recently added
        '116px': '116px',
        '560px': '560px',
        '27rem': '27rem',
        '57rem': '57rem',
        '50rem': '50rem',




      },
    },
  },
  plugins: [],
}

