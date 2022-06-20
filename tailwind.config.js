module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif']
    },
    extend: {
      colors: {
        scroll: 'rgba(161, 161, 170, 0.6)',
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
          30: 'rgba(255, 255, 255, 0.1)',
          50: '#f0eaff',
          100: '#e3e7fe', //dim
          200: '#e7dcff',
          300: '#d4c2ff', //accent-light
          400: '#00b2ce',
          450: '#3ab2f2', //accent-dark
          480: '#b695ff',
          500: '#9d72ff',
          600: '#7500ff', //main-color
          700: '#5f00cc', //main +1
          800: '#b13df4',
          900: '#3a2272',
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
        },
        zinc: {
          800: '#121212'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')]
}
