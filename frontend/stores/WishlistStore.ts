import { defineStore } from 'pinia'
import axios from 'axios'
import { Wishlist, WishlistItem } from '~/shared/classes/Wishlist'
import { useAuthStore } from './AuthStore'

export const useWishlistStore = defineStore('wishlist', {
    state: () => ({
        wishlist: {
            wishlistItems: [] as WishlistItem[],
        } as Wishlist,
    }),
    actions: {
        async createWishlist() {
            try {
                const { data } = await axios.post(`/api/wishlist/create`)
                this.wishlist.id = data
                return data
            } catch (error) {
                console.error('Failed to create wishlist:', error)
            }
        },
        async fetchWishlist() {
            try {
                const { data } = await axios.get(`/api/wishlist/default`)
                this.wishlist = new Wishlist(data)
            } catch (error) {
                console.error('Failed to fetch wishlist:', error)
            }
        },
        async addToWishlist(productId: number) {
            try {
                const { data } = await axios.post(`/api/wishlist/add-item/product`, {
                    wishlistId: this.wishlist.id,
                    productId,
                })

                if (data.error) throw new Error(data.error)

                this.wishlist.wishlistItems.push(new WishlistItem(data))
                this.sortWishlistItems()
            } catch (error) {
                throw error
            }
        },
        async removeFromWishlist(wishlistItemId: string) {
            try {
                await axios.delete(`/api/wishlist/remove-item/${wishlistItemId}`)

                this.wishlist.wishlistItems = this.wishlist.wishlistItems.filter(item => item.id !== wishlistItemId)
            } catch (error) {
                console.error('Failed to delete from wishlist:', error)
            }
        },
        async clearWishlist() {
            try {
                await axios.delete(`/api/wishlist/clear/${this.wishlist.id}`)

                this.wishlist.wishlistItems = []
            } catch (error) {
                console.error('Failed to delete from wishlist:', error)
            }
        },
        async updateWishlistOrder() {
            try {
                const updatedList = this.wishlist.wishlistItems.map((item, index) => ({
                    productId: item.product.id,
                    newPriority: index + 1,
                }))

                const { data } = await axios.put(`/api/wishlist/priority/${this.wishlist.id}`, {
                    updatedList,
                })

                return data
            } catch (error) {
                console.error('Failed to update wishlist priority:', error)
            }
        },
        sortWishlistItems() {
            this.wishlist.wishlistItems.sort((a, b) => a.priority - b.priority)
        },
    },
})
