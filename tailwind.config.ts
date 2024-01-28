import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'hero': "url('/lipstick.png')",
        'water-ball' : "url('/water_ball.jpg')",
        'logo' : "url('/temp_logo.png')"
      },
      colors:{
      'primaryThemeColor' : "#DD5A3E"
    },
    },
  },
  plugins: [],
}
export default config
