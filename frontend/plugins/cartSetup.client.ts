import { useCartStore } from '~/stores/CartStore'
import { deleteUnavailableItems } from '~/composables/useCart'
import { useAuthStore } from '~/stores/AuthStore'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.hook('app:mounted', async () => {
        const cartStore = useCartStore()
        const authStore = useAuthStore()

        await authStore.getMe()

        const cartKey = 'cart_id'
        const expirationKey = 'cart_expiration'
        const lastAccessedKey = 'last_accessed_at'
        const sessionKey = 'session_updated'
        const retentionPeriod = 10
        const now = new Date()

        const initializeCart = async () => {
            const cartId = localStorage.getItem(cartKey)
            const expirationDate = localStorage.getItem(expirationKey)
            const sessionUpdated = sessionStorage.getItem(sessionKey)

            if (authStore.isLoggedIn && authStore.user) {
                try {
                    if (!sessionUpdated) {
                        await cartStore.updateLastAccessToCart(authStore.user.cartId, now)

                        localStorage.setItem(cartKey, authStore.user.cartId)
                        localStorage.setItem(lastAccessedKey, now.toISOString())
                        sessionStorage.setItem(sessionKey, 'true')

                        await deleteUnavailableItems(authStore.user.cartId)
                    }
                    await cartStore.fetchCart(authStore.user.cartId)
                    return
                } catch (error) {
                    console.error('Error handling user cart:', error)
                }
            }

            if (cartId && expirationDate) {
                const expiration = new Date(expirationDate)

                if (now >= expiration) {
                    localStorage.removeItem(cartKey)
                    localStorage.removeItem(lastAccessedKey)
                    localStorage.removeItem(expirationKey)
                    sessionStorage.removeItem(sessionKey)
                } else {
                    if (!sessionUpdated) {
                        await cartStore.updateLastAccessToCart(cartId, now)
                        const updatedExpiration = new Date()
                        updatedExpiration.setUTCDate(updatedExpiration.getUTCDate() + retentionPeriod)

                        localStorage.setItem(lastAccessedKey, now.toISOString())
                        localStorage.setItem(expirationKey, updatedExpiration.toISOString())
                        sessionStorage.setItem(sessionKey, 'true')

                        await deleteUnavailableItems(cartId)
                    }
                    await cartStore.fetchCart(cartId)
                    return
                }
            }

            try {
                const newCartId = await cartStore.createCart()
                const newExpiration = new Date()
                newExpiration.setUTCDate(newExpiration.getUTCDate() + retentionPeriod)

                localStorage.setItem(cartKey, newCartId)
                localStorage.setItem(lastAccessedKey, now.toISOString())
                localStorage.setItem(expirationKey, newExpiration.toISOString())
                sessionStorage.setItem(sessionKey, 'true')

                await cartStore.updateLastAccessToCart(newCartId, now)
                await cartStore.fetchCart(newCartId)
            } catch (error) {
                console.error('Error creating cart:', error)
            }
        }

        await initializeCart()
    })
})
