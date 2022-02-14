module.exports = {
  content: ["*"],
  theme: {

    // WE IMPORTED THIS HERE TO CHANGE  DEFAULT BREAKPOINTS

    screens: {
      'xs':'480px',
      'sm':	'640px',	
      'md' :	'768px'	,
      'lg' :	'1024px',
      'xl' :	'1280px',	
      '2xl' :	'1536px',	


      // 'tablet': '640px',
      // // => @media (min-width: 640px) { ... }

      // 'laptop': '1024px',
      // // => @media (min-width: 1024px) { ... }

      // 'desktop': '1280px',
      // // => @media (min-width: 1280px) { ... }
    },

    extend: {},
  },
  plugins: [],
}
