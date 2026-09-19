/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#f0f7ff',
          100: '#e0effe',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#082f49',
          950: '#031726',
        },
        navy: {
          800: '#0f172a',
          900: '#020617',
        },
        maritime: {
          navy: '#0A1936',
          blue: '#1E3A8A',
          gold: '#B8941F',
          sky: '#0284C7',
          cyan: '#38BDF8',
          slate: '#F8FAFC',
        },
        'primary': '#00236f',
        'primary-container': '#1e3a8a',
        'on-primary': '#ffffff',
        'on-primary-container': '#90a8ff',
        'secondary': '#006591',
        'secondary-container': '#39b8fd',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#004666',
        'surface': '#f7f9fb',
        'surface-container-low': '#f2f4f6',
        'surface-container': '#eceef0',
        'surface-container-high': '#e6e8ea',
        'surface-container-highest': '#e0e3e5',
        'surface-container-lowest': '#ffffff',
        'on-surface': '#191c1e',
        'on-surface-variant': '#444651',
        'tertiary': '#3e2400',
        'tertiary-container': '#5c3800',
        'on-tertiary-container': '#ef9900',
        'error': '#ba1a1a',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}
