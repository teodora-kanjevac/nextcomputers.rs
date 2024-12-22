import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin(nuxtApp => {
    const pinia = createPinia()
    if (import.meta.client) {
        pinia.use(piniaPluginPersistedState);
      }
    nuxtApp.vueApp.use(pinia)
})
