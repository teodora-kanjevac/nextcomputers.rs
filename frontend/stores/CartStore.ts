import { defineStore } from 'pinia'
import axios from 'axios'
import { Cart, CartItem } from '~/shared/classes/Cart'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: {
            cartItems: [] as CartItem[],
        } as Cart,
    }),
    actions: {
        async createCart(userId: string | null = null) {
            try {
                const { data } = await axios.post(`/api/cart/create`, {
                    userId: userId,
                })
                this.cart.id = data
                return data
            } catch (error) {
                console.error('Failed to create cart:', error)
            }
        },
        async fetchCart(cartId: string) {
            try {
                const { data } = await axios.get(`/api/cart/${cartId}`)
                this.cart = new Cart(data)
            } catch (error) {
                console.error('Failed to fetch cart:', error)
            }
        },
        async addToCart(productId: number) {
            try {
                const { data } = await axios.post(`/api/cart/add-item`, {
                    cartId: this.cart.id,
                    productId: productId,
                })
                const existingItem = this.cart.cartItems.find(item => item.product.id === productId)

                if (existingItem) {
                    existingItem.quantity += 1
                } else {
                    this.cart.cartItems.push(new CartItem(data))
                }
            } catch (error) {
                throw error
            }
        },
        async updateQuantity(cartItemId: string, quantity: number) {
            try {
                await axios.put(`/api/cart/update-quantity`, {
                    cartItemId: cartItemId,
                    cartId: this.cart.id,
                    quantity: quantity,
                })
            } catch (error) {
                throw error
            }
        },
        async removeFromCart(cartItemId: string) {
            try {
                await axios.delete(`/api/cart/remove-item/${cartItemId}`)

                this.cart.cartItems = this.cart.cartItems.filter(item => item.id !== cartItemId)
            } catch (error) {
                console.error('Failed to delete from cart:', error)
            }
        },
        async removeUnavailableItems(cartId: string) {
            try {
                const { data } = await axios.delete(`/api/cart/remove-unavailable-items/${cartId}`)
                return data
            } catch (error) {
                console.error('Failed to delete from cart:', error)
            }
        },
        async clearCart() {
            try {
                await axios.delete(`/api/cart/clear/${this.cart.id}`)

                this.cart.cartItems = []
            } catch (error) {
                console.error('Failed to delete from cart:', error)
            }
        },
        async updateLastAccessToCart(cartId: string, lastAccessedAt: Date) {
            try {
                await axios.put(`/api/cart/last-accessed`, {
                    cartId: cartId,
                    lastAccessedAt: lastAccessedAt,
                })
            } catch (error) {
                console.error('Failed to change quantity:', error)
            }
        },
    },
})
