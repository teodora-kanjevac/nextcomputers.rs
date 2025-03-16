export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat Variable', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#ba4a66',
          DEFAULT: '#be123c',
          dark: '#881337',
        },
      },
      screens: {
        '3xl': '2000px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

