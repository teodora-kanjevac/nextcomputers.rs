export const OrderFailed = async (): Promise<void> => {
    const nuxtApp = useNuxtApp()
    nuxtApp.callHook('order:failed' as any)
}
