import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export const tailwindPlugin = plugin(
  //? Add CSS variable definitions to the base layer
  function ({ addBase }) {
    addBase({
      ':root': {
        '--background': '0 0% 100%',
        '--foreground': '225 7% 12%',
        '--card': '0 0% 100%',
        '--card-foreground': '225 7% 12%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '225 7% 12%',
        '--primary': '232 79% 59%',
        '--primary-foreground': '231 65% 51%',
        '--secondary': '210 5% 85.9%',
        '--secondary-foreground': '192 3% 61%',
        '--muted': '210 5% 95.9%',
        '--muted-foreground': '240 3.8% 46.1%',
        '--accent': '210 5% 95.9%',
        '--accent-foreground': '192 3% 61%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '192 3% 90%',
        '--input': '192 3% 90%',
        '--ring': '232 79% 59%',
        '--radius': '0.5rem',
      },
    });
  },
  //? Extend the Tailwind theme with 'themable' utilities
  {
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      extend: {
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        keyframes: {
          'accordion-down': {
            from: { height: 0 },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: 0 },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
        fontFamily: {
          neue_montreal: ['var(--font-neue-montreal)'],
        },
        transitionDuration: {
          1500: '1500ms',
          2000: '2000ms',
          2500: '2500ms',
          3000: '3000ms',
        },
        transitionTimingFunction: {
          'in-expo': 'cubic-bezier(0.1, 0, 0.3, 1)',
        },
      },
    },
  },
);
