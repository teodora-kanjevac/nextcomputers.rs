import { useRouter } from 'vue-router'

export default defineNuxtPlugin(() => {
    if (import.meta.client) {
        const router = useRouter()
        router.isReady().then(() => {
            router.afterEach((to, from) => {
                if (to.path === from.path) {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    })
                }
            })
        })
    }
})
