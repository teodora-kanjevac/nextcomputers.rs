import { useCartStore } from '~/stores/CartStore'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.hook('app:mounted', async () => {
        const cartStore = useCartStore()
        const cartKey = 'cart_id'
        const expirationKey = 'cart_expiration'
        const lastAccessedKey = 'last_accessed_at'
        const sessionKey = 'session_updated'
        const retentionPeriod = 10
        const now = new Date()

        const initializeCart = async () => {
            const cartId = localStorage.getItem(cartKey)
            const expirationDate = localStorage.getItem(expirationKey)
            const userId = localStorage.getItem('user_id')
            const sessionUpdated = sessionStorage.getItem(sessionKey)

            if (cartId && expirationDate) {
                const expiration = new Date(expirationDate)

                if (now >= expiration) {
                    localStorage.removeItem(cartKey)
                    localStorage.removeItem(lastAccessedKey)
                    localStorage.removeItem(expirationKey)
                    sessionStorage.removeItem(sessionKey)
                } else {
                    await cartStore.fetchCart(cartId)

                    if (!sessionUpdated) {
                        await cartStore.updateLastAccessToCart(cartId, now)

                        const updatedExpiration = new Date()
                        updatedExpiration.setUTCDate(updatedExpiration.getUTCDate() + retentionPeriod)

                        localStorage.setItem(lastAccessedKey, now.toISOString())
                        localStorage.setItem(expirationKey, updatedExpiration.toISOString())
                        sessionStorage.setItem(sessionKey, 'true')
                    }

                    return
                }
            }

            try {
                const userParam = userId || null
                const newCartId = await cartStore.createCart(userParam)

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
