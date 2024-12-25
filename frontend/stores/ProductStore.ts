import { defineStore } from 'pinia'
import axios from 'axios'
import { Product } from '~/shared/classes/Product'
import { ProductCard } from '~/shared/classes/ProductCard'
import { useSharedStore } from './SharedStore'

export const useProductStore = defineStore('product', {
    state: () => ({
        product: ref<Product | null>(null),
        productCards: [] as ProductCard[],
        showcaseProductCards: [] as ProductCard[],
    }),
    actions: {
        async fetchShowcaseProducts() {
            try {
                const { data } = await axios.get('/api/products/showcase')

                this.showcaseProductCards = data.map((product: any) => new ProductCard(product))
            } catch (error) {
                console.error('Failed to fetch products:', error)
            }
        },
        async fetchProductsWithRatings(reset: boolean = false) {
            const sharedStore = useSharedStore()
            if (sharedStore.loading) return
            sharedStore.setLoading(true)

            if (reset) {
                this.productCards = []
                sharedStore.resetPagination()
                sharedStore.setFetchedProducts(false)
            }

            try {
                const { data } = await axios.get('/api/products/ratings', {
                    params: {
                        sortBy: sharedStore.sortBy,
                        order: sharedStore.order,
                        page: sharedStore.page,
                        pageSize: sharedStore.pageSize,
                    },
                })

                this.productCards.push(...data.map((product: any) => new ProductCard(product)))

                if (data.length === 0) {
                    sharedStore.setFetchedProducts(true)
                }

                sharedStore.incrementPage()
            } catch (error) {
                console.error('Failed to fetch products:', error)
            } finally {
                sharedStore.setLoading(false)
            }
        },
        async fetchProductsWithRatingsForCategories(subcategoryId: number, reset: boolean = false) {
            const sharedStore = useSharedStore()
            if (sharedStore.loading) return
            sharedStore.setLoading(true)

            if (reset) {
                this.productCards = []
                sharedStore.resetPagination()
                sharedStore.setFetchedProducts(false)
            }

            try {
                const { data } = await axios.get(`/api/products/ratings/${subcategoryId}`, {
                    params: {
                        sortBy: sharedStore.sortBy,
                        order: sharedStore.order,
                        page: sharedStore.page,
                        pageSize: sharedStore.pageSize,
                    },
                })

                this.productCards.push(...data.map((product: any) => new ProductCard(product)))

                if (data.length === 0) {
                    sharedStore.setFetchedProducts(true)
                }

                sharedStore.incrementPage()
            } catch (error) {
                console.error('Failed to fetch products:', error)
            } finally {
                sharedStore.setLoading(false)
            }
        },
        async fetchProductDetails(productId: number) {
            const sharedStore = useSharedStore()
            if (sharedStore.loading) return
            sharedStore.setLoading(true)

            try {
                const { data } = await axios.get(`/api/products/${productId}`)

                this.product = new Product(data)
            } catch (error) {
                console.error('Failed to fetch products:', error)
                useRouter().replace('/proizvod/404')
            } finally {
                sharedStore.setLoading(false)
            }
        },
    },
})
