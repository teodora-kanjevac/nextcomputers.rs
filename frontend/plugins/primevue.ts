import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Tippy from '~/directives/tippy'

export default defineNuxtPlugin(nuxtApp => {
    const app = nuxtApp.vueApp
    if (!app.config.globalProperties.$primevue) {
        app.use(PrimeVue)
        app.use(ToastService)
    }
    app.directive('tippy', Tippy)
})
