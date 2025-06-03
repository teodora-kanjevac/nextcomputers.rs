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
    runtimeConfig: {
        public: {
            environment: process.env.NODE_ENV,
            verifyBaseUrl: process.env.NUXT_PUBLIC_VERIFY_BASE_URL,
            verifyDevUrl: process.env.NUXT_PUBLIC_VERIFY_DEV_URL,
        },
    },
    imports: {
        presets: [
            {
                from: 'pinia',
                imports: ['acceptHMRUpdate'],
            },
        ],
    },
    compatibilityDate: '2024-07-22',
    css: [
        '~/assets/css/base.sass',
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.min.css',
        '~/assets/css/toast.sass',
        '~/assets/css/paginator.sass',
        '~/assets/css/tooltip.sass',
    ],
    vite: {
        resolve: {
            alias: {
                fonts: '@fontsource-variable',
            },
        },
    },
    modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue', '@nuxt/image', '@vueuse/nuxt', '@formkit/auto-animate'],
    plugins: [
        { src: '~/plugins/flowbite-init.js', mode: 'client' },
        '~/plugins/routeInfo.ts',
        { src: '~/plugins/cartSetup.client.ts', mode: 'client' },
        '~/plugins/primevue.ts',
        '~/plugins/auth.ts',
    ],
    devtools: { enabled: true },
})
