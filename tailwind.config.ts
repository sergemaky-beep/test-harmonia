import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0E7377',
        secondary: '#1A2535',
        accent: '#C4A35A',
        light: '#FDF0EB',
        coral: '#E8846B',
        dark: '#1A2535',
      },
    },
  },
  plugins: [],
}
export default config
