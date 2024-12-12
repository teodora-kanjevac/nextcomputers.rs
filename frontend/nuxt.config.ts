export default defineNuxtConfig({
    ssr: true,
    app: {
        head: {
            htmlAttrs: {
                lang: 'sr',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content:
                        'Next Computers, moderna e-prodavnica koja nudi jednostavno i efikasno iskustvo kupovine, pružajući pristup širokoj ponudi tehnoloških proizvoda za različite potrebe i korisnike.',
                },
            ],
        },
    },
    compatibilityDate: '2024-07-22',
    css: ['~/assets/css/base.sass'],
    vite: {
        resolve: {
            alias: {
                fonts: '@fontsource-variable',
            },
        },
    },
    modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue', '@nuxt/image', '@vueuse/nuxt'],
    plugins: [{ src: '~/plugins/flowbite-init.js', mode: 'client' }, '~/plugins/routeInfo.ts'],
    devtools: { enabled: true },
})
