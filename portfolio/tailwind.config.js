/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#20201b',
        muted: '#5f5d55',
        line: '#d7d1c5',
        paper: '#f4f0e8',
        coral: '#e66b53',
        blue: '#9fb9c1',
        yellow: '#e9c757',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        display: ['Space Grotesk', 'Arial', 'sans-serif'],
      },
      keyframes: {
        marquee: { to: { transform: 'translateX(-25%)' } },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}
