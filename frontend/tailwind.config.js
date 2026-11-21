/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#0B1220',
        bgSecondary: '#111827',
        bgCard: '#172554',
        blue: { brand: '#2563EB' },
        cyan: { accent: '#06B6D4' },
        textMain: '#F8FAFC',
        textSecondary: '#94A3B8',
        border: '#263449',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
