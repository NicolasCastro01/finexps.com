/** @type {import('tailwindcss').Config}; */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/*.{js,ts,jsx,tsx}',
    './src/pages/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    height: {
      '54px': '3.375rem'
    },
    width: {
      '535px': '33.4375rem',
      full: '100%'
    },
    maxWidth: {
      '211px': '13.1875rem'
    },
    minWidth: {
      '159px': '9.9375rem'
    },
    colors: {
      greenDark: '#015F43',
      greenLight: '#00B37E',
      green: '#00875F',
      redDark: '#AA2834',
      red: '#F75A68',
      gray1: '#121214',
      gray2: '#202024',
      gray3: '#29292E',
      gray4: '#323238',
      gray5: '#7C7C8A',
      gray6: '#C4C4CC',
      gray7: '#E1E1E6',
      white: '#FFFFFF'
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    fontWeight: {
      regular: 300,
      medium: 400,
      bold: 700
    },
    lineHeight: {
      normal: 1.6
    },
    fontSize: {
      '14px': '0.875rem',
      '16px': '1rem',
      '20px': '1.25rem',
      '24px': '1.5rem',
      '32px': '2rem'
    },
    padding: {
      '8px': '0.5rem',
      '12px': '0.75rem',
      '16px': '1rem',
      '20px': '1.25rem',
      '24px': '1.5rem',
      '32px': '2rem',
      '40px': '2.5rem',
      '48px': '3rem'
    },
    gap: {
      '8px': '0.5rem',
      '12px': '0.75rem',
      '16px': '1rem',
      '20px': '1.25rem',
      '24px': '1.5rem'
    },
    extend: {
      borderRadius: {
        '1px': '0.063rem',
        '2px': '0.125rem',
        '3px': '0.188rem',
        '4px': '0.25rem',
        '5px': '0.313rem',
        '6px': '0.375rem',
        '7px': '0.438rem',
        '8px': '0.5rem',
        '9px': '0.563rem',
        '10px': '0.625rem',
        '11px': '0.688rem',
        '12px': '0.75rem',
        '13px': '0.813rem',
        '14px': '0.875rem',
        '15px': '0.938rem',
        '16px': '1rem'
      },
      borderWidth: {
        '1px': '0.063rem'
      }
    }
  },
  plugins: []
};
