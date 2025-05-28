export const useCartCookies = () => {
    return {
        cartIdCookie: useCookie<string | undefined>('cart_id'),
        sessionUpdatedCookie: useCookie<string | undefined>('session_updated'),
    }
}
