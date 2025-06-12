import { useCartStore } from '~/stores/CartStore'
import { deleteUnavailableItems } from '~/composables/useCart'
import { useAuthStore } from '~/stores/AuthStore'
import { useCartCookies } from '~/composables/useCartCookies'
import { useWishlistStore } from '~/stores/WishlistStore'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.hook('app:mounted', async () => {
        const cartStore = useCartStore()
        const wishlistStore = useWishlistStore()
        const authStore = useAuthStore()

        await authStore.getMe()

        const { cartIdCookie, sessionUpdatedCookie } = useCartCookies()

        const initializeCart = async () => {
            const sessionUpdated = sessionUpdatedCookie.value

            if (authStore.isLoggedIn && authStore.user) {
                const userCartId = authStore.user.cartId
                if (!sessionUpdated) {
                    cartIdCookie.value = userCartId

                    await cartStore.updateLastAccessToCart()
                    await deleteUnavailableItems(userCartId)

                    sessionUpdatedCookie.value = 'true'
                }
                await cartStore.fetchCart()
                if (authStore.user.isVerified) {
                    await wishlistStore.fetchWishlist()
                }
                return
            }

            if (cartIdCookie.value) {
                if (!sessionUpdated) {
                    await cartStore.updateLastAccessToCart()
                    await deleteUnavailableItems(cartIdCookie.value)

                    sessionUpdatedCookie.value = 'true'
                }
                await cartStore.fetchCart()
                return
            }

            try {
                await cartStore.createCart()
                await cartStore.fetchCart()

                sessionUpdatedCookie.value = 'true'
            } catch (error) {
                console.error('Error creating cart:', error)
            }
        }

        await initializeCart()
    })
})
