import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        lg: { max: '1800px' },
        md: { max: '990px' },
        sm: { max: '600px' },
        xs: { max: '400px' },
        minmd: '1700px',
        minlg: '2100px',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        'atyp': ['AtypRegularVariable', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
