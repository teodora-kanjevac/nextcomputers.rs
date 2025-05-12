import { useAuthStore } from '~/stores/AuthStore'

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (import.meta.server) {
        return
    }

    const nuxtApp = useNuxtApp()
    const authStore = useAuthStore()

    if (!nuxtApp._authCheckInProgress) {
        nuxtApp._authCheckInProgress = true
    }

    if (nuxtApp.isHydrating === false) {
        try {
            if (!authStore.hydrated) {
                await authStore.getMe()
                authStore.hydrate()
            }

            if (!authStore.isLoggedIn || !authStore.user) {
                nuxtApp._authCheckInProgress = false
                return navigateTo('/')
            }

            const verificationData = await authStore.getPendingVerification(authStore.user.email)
            if (!verificationData) {
                nuxtApp._authCheckInProgress = false
                return navigateTo('/')
            }

            nuxtApp._authCheckInProgress = false
        } catch (error) {
            console.error('Verification check failed:', error)
            nuxtApp._authCheckInProgress = false
            return navigateTo('/')
        }
    } else {
        nuxtApp.hook('app:mounted', async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 200))

                if (!authStore.hydrated) {
                    await authStore.getMe()
                    authStore.hydrate()
                }

                if (!authStore.isLoggedIn || !authStore.user) {
                    nuxtApp._authCheckInProgress = false
                    navigateTo('/')
                    return
                }

                const verificationData = await authStore.getPendingVerification(authStore.user.email)
                if (!verificationData) {
                    nuxtApp._authCheckInProgress = false
                    navigateTo('/')
                    return
                }

                nuxtApp._authCheckInProgress = false
            } catch (error) {
                console.error('Auth check in hook failed:', error)
                nuxtApp._authCheckInProgress = false
                navigateTo('/')
            }
        })
    }
})
