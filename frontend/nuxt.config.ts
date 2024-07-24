export default defineNuxtConfig({
  compatibilityDate: '2024-07-22',
  image: {
    dir: 'assets/images'
  },
  css: [
    '~/assets/css/base.sass'
  ],
  vite: {
    resolve: {
      alias: {
        'fonts': '@fontsource-variable'
      }
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue', '@nuxt/image'],
  plugins: [
    { src: '~/plugins/flowbite-init.js', mode: 'client' },
    { src: '~/plugins/scroll-to-top.js', mode: 'client' },
  ],
  devtools: { enabled: true }
})