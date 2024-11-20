import { defineStore } from 'pinia'
import axios from 'axios'
import { Product } from '~/shared/classes/Product'
import { ProductCard } from '~/shared/classes/ProductCard'

export const useProductStore = defineStore('product', {
    state: () => ({
        product: null as Product | null,
        productCards: [] as ProductCard[],
        allProductsFetched: false,
        loading: false,
        page: 1,
        pageSize: 20,
    }),
    actions: {
        async fetchProductsWithRatings() {
            if (this.loading) return
            this.loading = true

            try {
                const { data } = await axios.get('/api/products/ratings', {
                    params: {
                        page: this.page,
                        pageSize: this.pageSize,
                    },
                })

                this.productCards.push(...data.map((product: any) => new ProductCard(product)))

                this.page++
            } catch (error) {
                console.error('Failed to fetch products:', error)
            } finally {
                this.loading = false
            }
        },
        async fetchProductsWithRatingsForCategories(subcategoryId: number) {
            if (this.loading || this.allProductsFetched) return;
            this.loading = true

            try {
                const { data } = await axios.get(`/api/products/ratings/${subcategoryId}`, {
                    params: {
                        page: this.page,
                        pageSize: this.pageSize,
                    },
                })

                this.productCards.push(...data.map((product: any) => new ProductCard(product)))

                if (data.length === 0) {
                    this.allProductsFetched = true;
                }

                this.page++
            } catch (error) {
                console.error('Failed to fetch products:', error)
            } finally {
                this.loading = false
            }
        },
        async fetchProductDetails(productId: number) {
            try {
                const { data } = await axios.get(`/api/products/${productId}`)

                this.product = new Product(data)

            } catch (error) {
                console.error('Failed to fetch products:', error)
            }
        },
    },
})
