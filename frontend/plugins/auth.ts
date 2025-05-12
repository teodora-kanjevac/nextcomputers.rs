import { useAuthStore } from '~/stores/AuthStore'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.hook('app:mounted', async () => {
        const authStore = useAuthStore()
        await authStore.getMe()
        authStore.hydrate()
    })
})
