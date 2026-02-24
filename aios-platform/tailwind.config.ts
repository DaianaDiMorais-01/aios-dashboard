import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        background: {
          primary: 'var(--color-background-primary)',
          secondary: 'var(--color-background-secondary)',
          tertiary: 'var(--color-background-tertiary)',
          base: 'var(--color-background-base)',
          hover: 'var(--color-background-hover)',
          active: 'var(--color-background-active)',
          disabled: 'var(--color-background-disabled)',
        },
        foreground: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          disabled: 'var(--color-text-disabled)',
          inverse: 'var(--color-text-inverse)',
        },
        border: {
          DEFAULT: 'var(--color-border-default)',
          subtle: 'var(--color-border-subtle)',
          strong: 'var(--color-border-strong)',
          focus: 'var(--color-border-focus)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          subtle: 'var(--color-accent-subtle)',
        },
        status: {
          success: 'var(--color-status-success)',
          warning: 'var(--color-status-warning)',
          error: 'var(--color-status-error)',
          info: 'var(--color-status-info)',
        },
        squad: {
          copywriting: 'var(--squad-copywriting-default)',
          design: 'var(--squad-design-default)',
          creator: 'var(--squad-creator-default)',
          orchestrator: 'var(--squad-orchestrator-default)',
          development: 'var(--squad-development-default)',
          marketing: 'var(--squad-marketing-default)',
          default: 'var(--squad-default-default)',
        },
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      fontFamily: {
        sans: 'var(--font-family-sans)',
        mono: 'var(--font-family-mono)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        base: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
        slower: 'var(--duration-slower)',
      },
    },
  },

  plugins: [],
} satisfies Config
