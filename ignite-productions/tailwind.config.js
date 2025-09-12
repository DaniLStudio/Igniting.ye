const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Envy-inspired luxury palette
        primary: {
          50: '#faf7ed',
          100: '#f4ecda',
          200: '#e8d5b4',
          300: '#d4af37', // Gold
          400: '#b8941f',
          500: '#9d7b16',
          600: '#7d620f',
          700: '#5e4a0b',
          800: '#3f3107',
          900: '#1f1804',
        },
        secondary: {
          50: '#f0f0ff',
          100: '#e0e0ff',
          200: '#c2c2ff',
          300: '#9999ff',
          400: '#6666ff',
          500: '#2d1b69', // Deep purple
          600: '#241556',
          700: '#1b1043',
          800: '#120a30',
          900: '#09051d',
        },
        accent: {
          50: '#e0ffff',
          100: '#b3ffff',
          200: '#80ffff',
          300: '#4dffff',
          400: '#1affff',
          500: '#00ffff', // Cyan
          600: '#00cccc',
          700: '#009999',
          800: '#006666',
          900: '#003333',
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
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
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
          'from': { boxShadow: '0 0 20px #d4af37' },
          'to': { boxShadow: '0 0 30px #d4af37, 0 0 40px #d4af37' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(212, 175, 55, 0.25)',
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.5)',
        'glow-purple': '0 0 20px rgba(45, 27, 105, 0.5)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
export default config