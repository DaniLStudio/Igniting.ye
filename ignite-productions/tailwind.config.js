/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Apple-inspired elegant palette
        primary: {
          50: '#ffffff',    // Pure white
          100: '#fcfcfc',   // Silk white
          200: '#f8f8f8',   // Cream white
          300: '#f0f0f0',   // Light cream
          400: '#dcdcdc',   // Soft gray
          500: '#b4b4b4',   // Medium gray
          600: '#787878',   // Dark gray
          700: '#505050',   // Charcoal
          800: '#282828',   // Dark charcoal
          900: '#000000',   // Pure black
        },
        secondary: {
          50: '#ffffff',    // Pure white
          100: '#fafafa',   // Silk white
          200: '#f5f5f5',   // Cream
          300: '#ebebeb',   // Light cream
          400: '#c8c8c8',   // Soft gray
          500: '#a0a0a0',   // Medium gray
          600: '#646464',   // Dark gray
          700: '#3c3c3c',   // Charcoal
          800: '#1e1e1e',   // Dark charcoal
          900: '#000000',   // Pure black
        },
        accent: {
          50: '#ffffff',    // Pure white
          100: '#fafafa',   // Silk white
          200: '#f5f5f5',   // Cream
          300: '#ebebeb',   // Light cream
          400: '#c8c8c8',   // Soft gray
          500: '#a0a0a0',   // Medium gray
          600: '#646464',   // Dark gray
          700: '#3c3c3c',   // Charcoal
          800: '#1e1e1e',   // Dark charcoal
          900: '#000000',   // Pure black
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        serif: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        sans: ['SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        accent: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'kinetic-text': 'kinetic-text 2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'kinetic-text': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px #525252' },
          'to': { boxShadow: '0 0 30px #525252, 0 0 40px #525252' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'glow-gold': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'glow-purple': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05)',
        'elegant': '0 8px 30px rgba(0, 0, 0, 0.12)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}