const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': {
          DEFAULT: '#58478F', //MEDIUM PURPLE (YES BRAND)
          50: '#FFFFFF', //WHITE
          100: '#F9F9FE', //LIGHT GREY (NO BRAND)
          200: '#DFD8E5', //LIGHT GREY (YES BRAND) 
          300: '#AEAFF8', //LIGHT CREAM BLUE
          400: '#888BF4', //MEDIUM CREAM BLUE
          500: '#6366F1', //HIGH CREAM BLUE
          600: '#865f9d', //LOW PURPLE
          700: '#58478f', //MEDIUM PURPLE (YES BRAND) (REPETIDO SE PUEDE CAMBIAR)
          800: '#0E119E', //VIVID BLUE
          900: '#0A0C6A' //DARK BLUE
        },
        'secondary': {
          DEFAULT: '#EC4899',
          50: '#FDEEF6',
          100: '#FBDCEB',
          200: '#F8B7D7',
          300: '#F492C2',
          400: '#F06DAE',
          500: '#EC4899',
          600: '#E4187D',
          700: '#B11261',
          800: '#7F0D45',
          900: '#4C0829'
        },
        'neutral': {
          DEFAULT: '#6B7280',
          50: '#CDD0D5',
          100: '#C2C5CC',
          200: '#ACB0BA',
          300: '#969BA7',
          400: '#7F8694',
          500: '#6B7280',
          600: '#515761',
          700: '#383C43',
          800: '#1E2024',
          900: '#050506'
        },
        'high_purple': {  //BRAND COLORS
          DEFAULT: '#2C2145', // HIGH PURPLE 
          50: '#3C2D5E', // HIGH PURPLE 1
          100: '#4D3A78', // HIGH PURPLE 2
          200: '#5D4691', // HIGH PURPLE 3
          300: '#6D52AB', // HIGH PURPLE 4
        },
         'medium_purple': {  //BRAND COLORS
          DEFAULT: '#58478F', // MEDIUM PURPLE
          50: '#6854A8', // MEDIUM PURPLE 1
          100: '#7861C2', // MEDIUM PURPLE 2
          200: '#876EDB', // MEDIUM PURPLE 3
          300: '#987AF5' // MEDIUM PURPLE 4
        },
        'short_purple': {  //BRAND COLORS
          DEFAULT: '#865F9D', // SHORT PURPLE
          50: '#302238', // SHORT PURPLE 1
          100: '#463252', // SHORT PURPLE 2
          200: '#715185', // SHORT PURPLE 3
          300: '#B280D1' // SHORT PURPLE 4
         },
        'short_blue': {  //BRAND COLORS
           DEFAULT: '#56A5D9', // SHORT PURPLE
           50: '#A4D91BF', // SHORT PURPLE 1
           100: '#427EA6', // SHORT PURPLE 2
           200: '#386B8C', // SHORT PURPLE 3
           300: '#2E5773' // SHORT PURPLE 4
         },
         'low_gray': {  //BRAND COLORS
           DEFAULT: '#DFD8E5', // LOW GRAY 
           50: '#ADA8B3', // LOW GRAY 1
           100: '#949099', // LOW GRAY 2
           200: '#7C7880', // LOW GRAY 3
           300: '#636066' // LOW GRAY 4
         },
         // To change these, use https://www.tailwindshades.com/ with https://tailwindcss.com/docs/customizing-colors or create your own custom colors.
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.zinc[800]'),
            '--tw-prose-headings': theme('colors.zinc[900]'),
            '--tw-prose-lead': theme('colors.zinc[700]'),
            '--tw-prose-links': theme('colors.zinc[900]'),
            '--tw-prose-bold': theme('colors.zinc[900]'),
            '--tw-prose-counters': theme('colors.zinc[600]'),
            '--tw-prose-bullets': theme('colors.zinc[400]'),
            '--tw-prose-hr': theme('colors.zinc[300]'),
            '--tw-prose-quotes': theme('colors.zinc[900]'),
            '--tw-prose-quote-borders': theme('colors.zinc[300]'),
            '--tw-prose-captions': theme('colors.zinc[700]'),
            '--tw-prose-code': theme('colors.indigo[500]'),
            '--tw-prose-pre-code': theme('colors.indigo[300]'),
            '--tw-prose-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-th-borders': theme('colors.zinc[300]'),
            '--tw-prose-td-borders': theme('colors.zinc[200]'),
            '--tw-prose-invert-body': theme('colors.zinc[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.zinc[300]'),
            '--tw-prose-invert-links': theme('colors.indigo[400]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.zinc[400]'),
            '--tw-prose-invert-bullets': theme('colors.zinc[200]'),
            '--tw-prose-invert-hr': theme('colors.zinc[500]'),
            '--tw-prose-invert-quotes': theme('colors.zinc[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.zinc[700]'),
            '--tw-prose-invert-captions': theme('colors.zinc[400]'),
            '--tw-prose-invert-code': theme('colors.indigo[400]'),
            '--tw-prose-invert-pre-code': theme('colors.indigo[300]'),
            '--tw-prose-invert-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-invert-th-borders': theme('colors.zinc[100]'),
            '--tw-prose-invert-td-borders': theme('colors.zinc[500]'),
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};