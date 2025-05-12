import { useAuthStore } from '~/stores/AuthStore'

export default defineNuxtRouteMiddleware(async to => {
    if (import.meta.server) {
        return
    }

    const nuxtApp = useNuxtApp()
    const authStore = useAuthStore()

    if (!nuxtApp._profileAuthCheckInProgress) {
        nuxtApp._profileAuthCheckInProgress = true
    }

    if (nuxtApp.isHydrating === false) {
        try {
            if (!authStore.hydrated) {
                await authStore.getMe()
                authStore.hydrate()
            }

            if (!authStore.isLoggedIn || !authStore.user) {
                nuxtApp._profileAuthCheckInProgress = false
                return navigateTo('/login')
            }

            if (authStore.user?.email) {
                const verificationData = await authStore.getPendingVerification(authStore.user.email)
                if (verificationData && to.path !== '/verify-email') {
                    nuxtApp._profileAuthCheckInProgress = false
                    return navigateTo('/verify-email')
                }
            }

            nuxtApp._profileAuthCheckInProgress = false
        } catch (error) {
            console.error('Profile auth check failed:', error)
            nuxtApp._profileAuthCheckInProgress = false
            return navigateTo('/login')
        }
    } else {
        if (!nuxtApp._profileAuthHookRegistered) {
            nuxtApp._profileAuthHookRegistered = true

            nuxtApp.hook('app:mounted', async () => {
                try {
                    await new Promise(resolve => setTimeout(resolve, 200))

                    if (!authStore.hydrated) {
                        await authStore.getMe()
                        authStore.hydrate()
                    }

                    if (!authStore.isLoggedIn || !authStore.user) {
                        nuxtApp._profileAuthCheckInProgress = false
                        navigateTo('/login')
                        return
                    }

                    if (authStore.user?.email && to.path !== '/verify-email') {
                        const verificationData = await authStore.getPendingVerification(authStore.user.email)
                        if (verificationData) {
                            nuxtApp._profileAuthCheckInProgress = false
                            navigateTo('/verify-email')
                            return
                        }
                    }

                    nuxtApp._profileAuthCheckInProgress = false
                } catch (error) {
                    console.error('Profile auth check in hook failed:', error)
                    nuxtApp._profileAuthCheckInProgress = false
                    navigateTo('/login')
                }
            })
        }
    }
})
