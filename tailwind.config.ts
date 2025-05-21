import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      spacing: {
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#A78BFA',
          hover: '#9B7FE6',
          focus: '#818CF8',
          foreground: 'white'
        },
        secondary: {
          DEFAULT: '#BFDBFE',
          hover: '#A6C4E7',
          focus: '#93C5FE',
          foreground: '#1F1F1F',
          muted: '#F3F4F6',
          soft: {
            purple: '#F3E8FF',
            peach: '#FCD5CE',
            mint: '#CFFAFE',
            sky: '#BFDBFE'
          }
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: '#22d3ee',
          hover: '#06b6d4',
          focus: '#67e8f9',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        // Device Connect Hub specific colors
        dch: {
          'blue': '#0A4B83',
          'light-blue': '#3c91da',
          'teal': '#177E89',
          'light-teal': '#43B0BC',
          'dark': '#1A2238',
          'light': '#F9F9FB',
          'gray': '#8E9196',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' }
        },
        'scale-in': {
          from: { transform: 'scale(0.95)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' }
        },
        'scale-out': {
          from: { transform: 'scale(1)', opacity: '1' },
          to: { transform: 'scale(0.95)', opacity: '0' }
        },
        'enter-from-right': {
          from: { transform: 'translateX(100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' }
        },
        'enter-from-left': {
          from: { transform: 'translateX(-100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' }
        },
        'exit-to-right': {
          from: { transform: 'translateX(0)', opacity: '1' },
          to: { transform: 'translateX(100%)', opacity: '0' }
        },
        'exit-to-left': {
          from: { transform: 'translateX(0)', opacity: '1' },
          to: { transform: 'translateX(-100%)', opacity: '0' }
        },
        'logo-entrance': {
          "0%": { 
            opacity: "0",
            transform: "translateY(-15px) scale(0.9)",
            filter: "blur(5px)"
          },
          "40%": { 
            opacity: "0.7",
            transform: "translateY(0) scale(1)",
            filter: "blur(0px)"
          },
          "60%": { 
            opacity: "1",
            transform: "translateY(0) scale(1.05)",
          },
          "80%": { 
            transform: "translateY(0) scale(0.98)",
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        'logo-reveal': {
          '0%': {
            clipPath: 'circle(0% at 50% 50%)'
          },
          '60%': {
            clipPath: 'circle(50% at 50% 50%)'
          },
          '100%': {
            clipPath: 'circle(75% at 50% 50%)'
          }
        },
        'logo-shimmer': {
          '0%': {
            backgroundPosition: '200% 0'
          },
          '100%': {
            backgroundPosition: '-200% 0'
          }
        },
        'pulse-soft': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
          '50%': {
            opacity: '0.85',
            transform: 'scale(0.97)'
          },
        },
        'progress-luxury': {
          '0%': { 
            backgroundPosition: '200% 0',
            opacity: '0.95'
          },
          '50%': {
            opacity: '1'
          },
          '100%': { 
            backgroundPosition: '-200% 0',
            opacity: '0.95'
          }
        },
        'shimmer-luxury': {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '50%': {
            opacity: '0.5'
          },
          '100%': { 
            transform: 'translateX(100%)',
            opacity: '0'
          }
        },
        'bounce-in': {
          '0%': { 
            transform: 'scale(0.3)',
            opacity: '0'
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.8'
          },
          '70%': {
            transform: 'scale(0.9)',
            opacity: '0.9'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-in-out',
        'fade-out': 'fade-out 0.2s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        'scale-out': 'scale-out 0.2s ease-out',
        'enter-from-right': 'enter-from-right 0.25s ease-out',
        'enter-from-left': 'enter-from-left 0.25s ease-out',
        'exit-to-right': 'exit-to-right 0.25s ease-out',
        'exit-to-left': 'exit-to-left 0.25s ease-out',
        'logo-entrance': 'logo-entrance 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'logo-reveal': 'logo-reveal 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'logo-shimmer': 'logo-shimmer 2.5s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'bounce-in': 'bounce-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'progress-luxury': 'progress-luxury 2.5s linear infinite',
        'shimmer-luxury': 'shimmer-luxury 2.2s cubic-bezier(0.4,0,0.2,1) infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
