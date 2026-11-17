import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          card: 'var(--bg-card)',
          'card-hover': 'var(--bg-card-hover)',
          glass: 'var(--bg-glass)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          'primary-hover': 'var(--accent-primary-hover)',
          secondary: 'var(--accent-secondary)',
          'secondary-hover': 'var(--accent-secondary-hover)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          highlight: 'var(--border-highlight)',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
        'accent-glow': '0 0 25px -5px rgba(139, 124, 255, 0.25)',
      },
      borderRadius: {
        card: '16px',
        interactive: '10px',
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.025em',
        widest: '0.15em',
      },
      transitionTimingFunction: {
        subtle: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
