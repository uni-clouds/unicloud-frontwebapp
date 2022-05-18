module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      //text-default
      base: {
        100: '#ecf2ff',
        200: '#dfe9fe',
        300: '#b6c6e3',
        400: '#8094ae',
        500: '#526484',
        600: '#364a63',
        700: '#1c2b46'
      },
      //accent
      brand: {
        50: '#f0eaff',
        100: '#e3e7fe', //dim
        200: '#e7dcff',
        300: '#d4c2ff', //accent-light
        400: '#b695ff',
        500: '#9d72ff',
        600: '#854fff', //accent-color
        700: '#3a2272', //accent-dark
        bitcoin: '#f9841e',
        ethereum: '#6174b9',
        facebook: '#3b5998',
        google: '#de5246'
      },
      light: {
        50: '#ebeef2',
        100: '#e5e9f2',
        200: '#dbdfea',
        300: '#b7c2d0',
        400: '#8091a7',
        500: '#3c4d62',
        600: '#344357',
        700: '#2b3748',
        800: '#1f2b3a',
        900: '#101924'
      },
      cyan: {
        custom: '#09c2de'
      },
      sky: {
        custom: '#1676fb'
      },
      blue: {
        custom: '#559bfb'
      },
      green: {
        custom: '#1ee0ac'
      },
      indigo: {
        custom: '#2c3782'
      },
      orange: {
        custom: '#ffa353'
      },
      pink: {
        custom: '#ff63a5'
      },
      purple: {
        custom: '#816bff'
      },
      red: {
        custom: '#e85347'
      },
      teal: {
        custom: '#20c997'
      },
      yellow: {
        custom: '#f4bd0e'
      }
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif']
    },
    extend: {
      //*aqui para sobrescrever
    }
  },
  plugins: []
}
