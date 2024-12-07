import { defineStore } from 'pinia'
import axios from 'axios'
import { useSharedStore } from '~/stores/SharedStore'
import { ProductCard } from '~/shared/classes/ProductCard'

export const useSearchStore = defineStore('search', {
    state: () => ({
        query: null as string | null,
        searchResults: [] as ProductCard[],
        selectedFilters: {} as Record<string, string[]>,
    }),
    actions: {
        async fetchSearchResults(reset: boolean = false) {
            const sharedStore = useSharedStore()
            if (sharedStore.loading) return
            sharedStore.setLoading(true)

            if (reset) {
                sharedStore.resetPagination()
                this.searchResults = []
                sharedStore.setFetchedProducts(false)
            }

            try {
                const { data } = await axios.get('/api/search', {
                    params: {
                        q: this.query,
                        sortBy: sharedStore.sortBy,
                        order: sharedStore.order,
                        page: sharedStore.page,
                        pageSize: sharedStore.pageSize,
                    },
                })

                this.searchResults.push(...data.map((product: any) => new ProductCard(product)))

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
        async fetchFilteredSearchResults(reset: boolean = false) {
            const sharedStore = useSharedStore()
            if (sharedStore.loading) return

            if (reset) {
                this.searchResults = []
                sharedStore.resetPagination()
                sharedStore.setFetchedProducts(false)
            }

            if (sharedStore.allProductsFetched) return

            sharedStore.setLoading(true)

            try {
                const filterKeyMap: Record<string, string> = {
                    Brend: 'brand',
                    Kategorija: 'subcategory',
                }

                const transformedFilters = Object.entries(this.selectedFilters).reduce((acc, [key, value]) => {
                    const backendKey = filterKeyMap[key] || key
                    acc[backendKey] = value
                    return acc
                }, {} as Record<string, string[]>)

                const { data } = await axios.post(`/api/search/filteredProducts?q=${this.query}`, {
                    filters: transformedFilters,
                    params: {
                        sortBy: sharedStore.sortBy,
                        order: sharedStore.order,
                        page: sharedStore.page,
                        pageSize: sharedStore.pageSize,
                    },
                })

                this.searchResults.push(...data.map((product: any) => new ProductCard(product)))

                if (data.length === 0) {
                    sharedStore.setFetchedProducts(true)
                }

                sharedStore.incrementPage()
            } catch (error) {
                console.error('Failed to fetch products:', error)
            } finally {
                sharedStore.setLoading(false)
            }
        }
    },
})
