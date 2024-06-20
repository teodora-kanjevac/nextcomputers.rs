export default defineNuxtConfig({
  image: {
    dir: 'assets/images'
  },
  css: [
    '~/assets/css/base.sass'
  ],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue', '@nuxt/image'],
  plugins: [
    '~/plugins/flowbite-init.js'
  ],
  devtools: { enabled: true }
})