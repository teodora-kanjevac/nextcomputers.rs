import axios from 'axios'

export default defineNuxtPlugin(nuxtApp => {
    const axiosInstance = axios.create({
        baseURL: '/',
    })

    axiosInstance.interceptors.response.use(
        (response: any) => response,
        (error: any) => {
            if (error.response?.status === 429) {
                const toast = nuxtApp.vueApp.config.globalProperties.$toast
                toast.add({
                    severity: 'warn',
                    summary: 'Previše aktivnosti!',
                    detail: 'Molimo sačekajte nekoliko trenutaka pre sledećeg pokušaja.',
                    life: 5000,
                })
            }
            return Promise.reject(error)
        }
    )

    return {
        provide: {
            axios: axiosInstance,
        },
    }
})
