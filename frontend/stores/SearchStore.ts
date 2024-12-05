import { defineStore } from 'pinia'
import axios from 'axios'
import { ProductCard } from '~/shared/classes/ProductCard'

export const useSearchStore = defineStore('search', {
    state: () => ({
        query: null as string | null,
        searchResults: [] as ProductCard[],
        filteredProducts: [] as ProductCard[],
        selectedFilters: {} as Record<string, string[]>,
        allProductsFetched: false,
        sortBy: null as string | null,
        order: null as string | null,
        loading: false,
        page: 1,
        pageSize: 20,
    }),
    actions: {
        async fetchSearchResults(reset: boolean = false) {
            if (this.loading) return
            this.loading = true

            if (reset) {
                this.page = 1
                this.searchResults = []
                this.allProductsFetched = false
            }

            try {
                const { data } = await axios.get('/api/search', {
                    params: {
                        q: this.query,
                        sortBy: this.sortBy,
                        order: this.order,
                        page: this.page,
                        pageSize: this.pageSize,
                    },
                })

                this.searchResults.push(...data.map((product: any) => new ProductCard(product)))

                if (data.length === 0) {
                    this.allProductsFetched = true
                }

                this.page++
            } catch (error) {
                console.error('Failed to fetch products:', error)
            } finally {
                this.loading = false
            }
        },
        async fetchFilteredSearchProducts(reset: boolean = false) {
            if (this.loading) return

            if (reset) {
                this.page = 1
                this.filteredProducts = []
                this.allProductsFetched = false
            }

            if (this.allProductsFetched) return

            this.loading = true

            try {
                const filterKeyMap: Record<string, string> = { Brend: 'brand' }

                const transformedFilters = Object.entries(this.selectedFilters).reduce((acc, [key, value]) => {
                    const backendKey = filterKeyMap[key] || key
                    acc[backendKey] = value
                    return acc
                }, {} as Record<string, string[]>)

                const { data } = await axios.post(`/api/search/filteredProducts?q=${this.query}`, {
                    filters: transformedFilters,
                    params: {
                        sortBy: this.sortBy,
                        order: this.order,
                        page: this.page,
                        pageSize: this.pageSize,
                    },
                })

                this.filteredProducts.push(...data.map((product: any) => new ProductCard(product)))

                if (data.length === 0) {
                    this.allProductsFetched = true
                }

                this.page++
            } catch (error) {
                console.error('Failed to fetch products:', error)
            } finally {
                this.loading = false
            }
        },
        clearSearch() {
            this.query = null
            this.searchResults = []
        },
    },
})
