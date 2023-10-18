import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily : {
        bodoni: ['Bodoni Moda', 'serif'],
        sora: ['Sora', 'sans-serif']
      },
      colors: {
        primary: '#2f2f2f',
        dark: '#111111',
        light: '#f6f6f6',
        main: '#ffcb74'
      }
    },
  },
  plugins: [],
}
export default config
