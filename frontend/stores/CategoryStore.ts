import { defineStore } from 'pinia'
import axios from 'axios'
import { Category } from '~/shared/classes/Category'

export const useCategoryStore = defineStore('categoryStore', {
    state: () => ({
        categories: [] as Category[],
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
    },
})
