import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

export default defineNuxtPlugin(nuxtApp => {
    if (!nuxtApp.vueApp.config.globalProperties.$primevue) {
        nuxtApp.vueApp.use(PrimeVue)
        nuxtApp.vueApp.use(ToastService)
    }
})
