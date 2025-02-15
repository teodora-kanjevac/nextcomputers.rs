import { useCartStore } from '~/stores/CartStore'

export const deleteUnavailableItems = async (cartId: string): Promise<void> => {
    const cartStore = useCartStore()
    const nuxtApp = useNuxtApp()

    const deletedItemsCount = await cartStore.removeUnavailableItems(cartId)
    if (deletedItemsCount > 0) {
        nuxtApp.callHook('cart:unavailableItems' as any)
    }
}
