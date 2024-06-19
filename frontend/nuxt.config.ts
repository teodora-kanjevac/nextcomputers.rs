export default defineNuxtConfig({
  css: [
    '~/assets/css/base.sass'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
  ],
  plugins: [
    '~/plugins/flowbite-init.js'
  ],
  devtools: { enabled: true }
})