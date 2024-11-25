import { defineStore } from 'pinia'
import axios from 'axios'
import { FilterCategory } from '~/shared/classes/Filter'
import { ProductCard } from '~/shared/classes/ProductCard'

export const useFilterStore = defineStore('filter', {
    state: () => ({
        categoryFilters: [] as FilterCategory[],
        filteredProducts: [] as ProductCard[],
        selectedFilters: {} as Record<string, string[]>,
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
        async fetchFilteredProducts(subcategoryId: number) {
            try {
                const filterKeyMap: Record<string, string> = {
                    Brend: 'brand',
                }

                const transformedFilters = Object.entries(this.selectedFilters).reduce(
                    (acc, [key, value]) => {
                        const backendKey = filterKeyMap[key] || key
                        acc[backendKey] = value
                        return acc
                    },
                    {} as Record<string, string[]>
                )

                const { data } = await axios.post(`/api/filters/filteredProducts/${subcategoryId}`, {
                    filters: transformedFilters,
                })

                this.filteredProducts = data.map((product: any) => new ProductCard(product))
            } catch (error) {
                console.error('Failed to fetch products:', error)
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
    },
})
