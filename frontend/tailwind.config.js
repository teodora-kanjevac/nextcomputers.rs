export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './node_modules/flowbite/**/*.{js,ts}',
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
            keyframes: {
                shake: {
                    '0%, 100%': {
                        transform: 'translateX(0)',
                    },
                    '25%': {
                        transform: 'translateX(-4px)',
                    },
                    '50%': {
                        transform: 'translateX(4px)',
                    },
                    '75%': {
                        transform: 'translateX(-4px)',
                    },
                },
            },
            animation: {
              shake: 'shake 0.4s ease-in-out',
          },
        },
    },
    plugins: [require('flowbite/plugin')],
}
