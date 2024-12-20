import { useCartStore } from '~/stores/CartStore'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.hook('app:mounted', () => {
        const cartStore = useCartStore()
        const cartKey = 'cart_id'
        const expirationKey = 'cart_expiration'

        const initializeCart = async () => {
            const cartId = localStorage.getItem(cartKey)
            const expirationDate = localStorage.getItem(expirationKey)
            const userId = localStorage.getItem('user_id')

            if (!cartId || !expirationDate || new Date(expirationDate) < new Date()) {
                try {
                    const expiration = new Date()
                    expiration.setDate(expiration.getDate() + 7)

                    localStorage.setItem(expirationKey, expiration.toISOString())

                    const userParam = userId ? userId : null

                    const newCartId = await cartStore.createCart(userParam)

                    localStorage.setItem(cartKey, newCartId)
                } catch (error) {
                    console.error('Error creating cart:', error)
                }
            } else {
                cartStore.fetchCart(cartId)
            }
        }

        initializeCart()
    })
})
