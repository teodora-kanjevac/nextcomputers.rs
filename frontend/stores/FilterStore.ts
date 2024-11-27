import { defineStore } from 'pinia'
import axios from 'axios'
import { FilterCategory } from '~/shared/classes/Filter'
import { ProductCard } from '~/shared/classes/ProductCard'

export const useFilterStore = defineStore('filter', {
    state: () => ({
        categoryFilters: [] as FilterCategory[],
        filteredProducts: [] as ProductCard[],
        selectedFilters: {} as Record<string, string[]>,
        allProductsFetched: false,
        loading: false,
        page: 1,
        pageSize: 20,
    }),
    actions: {
        async fetchFilters(subcategoryId: number) {
            try {
                const { data } = await axios.get(`/api/filters/${subcategoryId}`)

                this.categoryFilters = data.map((filter: any) => new FilterCategory(filter))
            } catch (error) {
                console.error('Failed to fetch filters:', error)
            }
        },
        async fetchFilteredProducts(subcategoryId: number, reset: boolean = false) {
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

                const { data } = await axios.post(`/api/filters/filteredProducts/${subcategoryId}`, {
                    filters: transformedFilters,
                    params: {
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
        updateFilter(filterCategory: string, value: string) {
            if (!this.selectedFilters[filterCategory]) {
                this.selectedFilters[filterCategory] = []
            }
            if (this.selectedFilters[filterCategory].includes(value)) {
                this.selectedFilters[filterCategory] = this.selectedFilters[filterCategory].filter(v => v !== value)
            } else {
                this.selectedFilters[filterCategory].push(value)
            }
        },
        resetFilters() {
            this.selectedFilters = {}
        },
    },
})
