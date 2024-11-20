import { defineStore } from 'pinia'
import axios from 'axios'
import { Category, Subcategory } from '~/shared/classes/Category'

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [] as Category[],
        subcategory: null as Subcategory | null,
    }),
    actions: {
        async fetchCategories() {
            try {
                const { data } = await axios.get('/api/categories')
                this.categories = data
            } catch (error) {
                console.error('Failed to fetch categories:', error)
            }
        },
        async fetchSubcategoryById(subcategoryId: number) {
            try {
                const { data } = await axios.get(`/api/subcategories/${subcategoryId}`)
                this.subcategory = data
            } catch (error) {
                console.error('Failed to fetch categories:', error)
            }
        },
    },
})
