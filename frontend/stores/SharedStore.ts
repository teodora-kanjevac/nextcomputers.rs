import { defineStore } from 'pinia'

export const useSharedStore = defineStore('shared', {
    state: () => ({
        sortBy: ref<string | null>(null),
        order: ref<string | null>(null),
        allProductsFetched: false,
        loading: false,
        page: 1,
        pageSize: 20,
    }),
    actions: {
        setSortBy(value: string | null) {
            this.sortBy = value
        },
        setOrder(value: string | null) {
            this.order = value
        },
        setLoading(value: boolean) {
            this.loading = value
        },
        setFetchedProducts(value: boolean) {
            this.allProductsFetched = value
        },
        resetPagination() {
            this.page = 1
        },
        incrementPage() {
            this.page++
        },
    },
})
