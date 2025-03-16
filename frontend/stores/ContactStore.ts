import { defineStore } from 'pinia'
import type { ContactData } from '~/shared/classes/ContactData'

export const useContactStore = defineStore('Contact', {
    state: () => ({
        form: {
            fullname: '',
            email: '',
            comment: '',
        },
        contactData: {} as ContactData,
    }),
})
