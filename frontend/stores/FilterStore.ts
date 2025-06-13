import { defineStore } from 'pinia'
import { FilterCategory } from '~/shared/classes/Filter'
import { ProductCard } from '~/shared/classes/ProductCard'
import { useSharedStore } from './SharedStore'

export const useFilterStore = defineStore('filter', {
    state: () => ({
        categoryFilters: [] as FilterCategory[],
        filteredProducts: [] as ProductCard[],
        selectedFilters: {} as Record<string, string[]>,
        subcategoryId: null as number | null,
    }),
    actions: {
        async fetchFilters(subcategoryId?: number) {
            try {
                const id = subcategoryId ?? this.subcategoryId
                const filterKeyMap: Record<string, string> = { Brend: 'brand' }

                const transformedFilters = Object.entries(this.selectedFilters).reduce((acc, [key, value]) => {
                    const backendKey = filterKeyMap[key] || key
                    acc[backendKey] = value
                    return acc
                }, {} as Record<string, string[]>)

                const { $axios } = useNuxtApp()
                const { data } = await $axios.post(`/api/filters/${id}`, {
                    selectedFilters: transformedFilters,
                })
                this.categoryFilters = data.map((filter: any) => new FilterCategory(filter))
            } catch (error) {
                console.error('Failed to fetch filters:', error)
            }
        },
        async fetchSearchFilters(searchTerm: string) {
            try {
                const { $axios } = useNuxtApp()
                const { data } = await $axios.get(`/api/filters/search/${searchTerm}`)

                this.categoryFilters = data.map((filter: any) => new FilterCategory(filter))
            } catch (error) {
                console.error('Failed to fetch filters:', error)
            }
        },
        async fetchFilteredProducts(subcategoryId: number, reset: boolean = false) {
            const sharedStore = useSharedStore()
            if (sharedStore.loading) return

            if (reset) {
                sharedStore.resetPagination()
                this.filteredProducts = []
                sharedStore.setFetchedProducts(false)
            }

            if (sharedStore.allProductsFetched) return

            sharedStore.setLoading(true)
            try {
                const filterKeyMap: Record<string, string> = { Brend: 'brand' }

                const transformedFilters = Object.entries(this.selectedFilters).reduce((acc, [key, value]) => {
                    const backendKey = filterKeyMap[key] || key
                    acc[backendKey] = value
                    return acc
                }, {} as Record<string, string[]>)

                const { $axios } = useNuxtApp()
                const { data } = await $axios.post(`/api/filters/filteredProducts/${subcategoryId}`, {
                    filters: transformedFilters,
                    params: {
                        sortBy: sharedStore.sortBy,
                        order: sharedStore.order,
                        page: sharedStore.page,
                        pageSize: sharedStore.pageSize,
                    },
                })

                this.filteredProducts.push(...data.map((product: any) => new ProductCard(product)))

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
        updateFilter(filterKey: string, filterValue: string, searchTerm?: string) {
            if (!this.selectedFilters[filterKey]) {
                this.selectedFilters[filterKey] = []
            }

            const index = this.selectedFilters[filterKey].indexOf(filterValue)
            if (index === -1) {
                this.selectedFilters[filterKey].push(filterValue)
            } else {
                this.selectedFilters[filterKey].splice(index, 1)
            }

            searchTerm ? this.fetchSearchFilters(searchTerm) : this.fetchFilters()
        },
        resetFilters(searchTerm?: string) {
            this.selectedFilters = {}
            searchTerm ? this.fetchSearchFilters(searchTerm) : this.fetchFilters()
        },
    },
})
