import { useCartStore } from '~/stores/CartStore'

export const deleteUnavailableItems = async (cartId: string): Promise<void> => {
    const cartStore = useCartStore()
    const nuxtApp = useNuxtApp()

    const deletedItemsCount = await cartStore.removeUnavailableItems(cartId)
    if (deletedItemsCount > 0) {
        nuxtApp.callHook('cart:unavailableItems' as any)
    }
}

export function calculateShippingPrice(totalBeforeShipping: number): number {
    const cartStore = useCartStore()

    const customShipping = 1490
    let totalShippingPrice = 0

    const hasCustomShippingCostProducts = cartStore.cart.cartItems.some(
        item => item.product.shippingPrice === customShipping
    )

    if (hasCustomShippingCostProducts) {
        cartStore.cart.cartItems.forEach(item => {
            if (item.product.shippingPrice === customShipping) {
                totalShippingPrice += customShipping * item.quantity
            }
        })
        return totalShippingPrice
    }

    totalShippingPrice = totalBeforeShipping >= 10000 ? 0 : 490

    return totalShippingPrice
}
