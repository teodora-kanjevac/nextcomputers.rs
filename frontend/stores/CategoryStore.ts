import { defineStore } from 'pinia'
import { Category, Subcategory } from '~/shared/classes/Category'

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [] as Category[],
        subcategory: ref<Subcategory | null>(null),
    }),
    actions: {
        async fetchCategories() {
            try {
                const { $axios } = useNuxtApp()
                const { data } = await $axios.get('/api/categories')
                this.categories = data
            } catch (error) {
                console.error('Failed to fetch categories:', error)
            }
        },
        async fetchSubcategoryById(subcategoryId: number) {
            try {
                const { $axios } = useNuxtApp()
                const { data } = await $axios.get(`/api/subcategories/${subcategoryId}`)
                this.subcategory = data
            } catch (error) {
                console.error('Failed to fetch categories:', error)
                useRouter().replace('/proizvodi/404')
            }
        },
    },
})
