import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Palette Muzzo Light 2026 */
        primary:   '#01164D',   /* Navy — texte, headlines */
        accent:    '#0B39AF',   /* Bleu brand */
        'accent-mid': '#2554D4', /* Bleu intermédiaire */
        'accent-glow': '#6B8FFF', /* Bleu clair pour highlights */
        'accent-light': '#EEF2FF', /* Fond badge/chip */
        bg:        '#FFFFFF',
        'bg-alt':  '#F8F9FC',
        'bg-muted': '#F1F4FD',
        surface:   '#FFFFFF',
        muted:     '#9CA3AF',
        secondary: '#4B5563',
        border:    '#E5E9F5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(3%, 2%)' },
          '30%': { transform: 'translate(-1%, 4%)' },
          '40%': { transform: 'translate(2%, -2%)' },
          '50%': { transform: 'translate(-3%, 1%)' },
          '60%': { transform: 'translate(1%, 3%)' },
          '70%': { transform: 'translate(-2%, -1%)' },
          '80%': { transform: 'translate(3%, -3%)' },
          '90%': { transform: 'translate(-1%, 2%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
