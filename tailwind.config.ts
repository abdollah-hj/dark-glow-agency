
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
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
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
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
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
          DEFAULT: 'hsl(var(--accent))',
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
        neon: {
          blue: '#0ff',
          purple: '#f0f',
          pink: '#ff36f9',
          green: '#0f0',
          cyan: '#0ff',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            filter: 'brightness(1) blur(0px)'
          },
          '50%': { 
            opacity: '0.8',
            filter: 'brightness(1.2) blur(1px)'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'background-shine': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '-200% 0%' }
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        },
        'page-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'background-shine': 'background-shine 2s linear infinite',
        'text-shimmer': 'text-shimmer 2s linear infinite',
        'page-in': 'page-in 0.5s ease-out forwards'
      },
      boxShadow: {
        'neon-blue': '0 0 5px theme(colors.neon.blue), 0 0 20px theme(colors.neon.blue)',
        'neon-purple': '0 0 5px theme(colors.neon.purple), 0 0 20px theme(colors.neon.purple)',
        'neon-pink': '0 0 5px theme(colors.neon.pink), 0 0 20px theme(colors.neon.pink)',
        'neon-green': '0 0 5px theme(colors.neon.green), 0 0 20px theme(colors.neon.green)',
        'neon-cyan': '0 0 5px theme(colors.neon.cyan), 0 0 20px theme(colors.neon.cyan)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)'
      },
      dropShadow: {
        'neon-blue': '0 0 5px rgba(0, 255, 255, 0.7)',
        'neon-purple': '0 0 5px rgba(240, 0, 240, 0.7)',
        'neon-pink': '0 0 5px rgba(255, 54, 249, 0.7)',
        'neon-green': '0 0 5px rgba(0, 255, 0, 0.7)',
        'neon-cyan': '0 0 5px rgba(0, 255, 255, 0.7)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-grid': 'linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
