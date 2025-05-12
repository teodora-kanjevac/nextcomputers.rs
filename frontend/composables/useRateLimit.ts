export function useRateLimit(limit: number, interval: number, storageKey: string) {
    const getLocalStorage = () => {
        if (typeof window === 'undefined') return null
        return localStorage
    }

    const loadData = () => {
        const storage = getLocalStorage()
        if (!storage) return { count: 0, lastTime: null }

        try {
            const stored = storage.getItem(storageKey)
            return stored ? JSON.parse(stored) : { count: 0, lastTime: null }
        } catch (e) {
            console.error('Failed to read localStorage:', e)
            return { count: 0, lastTime: null }
        }
    }

    const state = ref(loadData())
    const isRateLimited = ref(false)

    if (import.meta.client) {
        watchEffect(() => {
            const storage = getLocalStorage()
            if (storage) {
                try {
                    storage.setItem(storageKey, JSON.stringify(state.value))
                } catch (e) {
                    console.error('Failed to write localStorage:', e)
                }
            }
        })
    }

    const checkLimit = () => {
        const now = Date.now()
        const { count, lastTime } = state.value

        if (lastTime && now - lastTime > interval) {
            state.value = { count: 0, lastTime: null }
            isRateLimited.value = false
            return true
        }

        if (count >= limit) {
            isRateLimited.value = true
            return false
        }

        state.value = {
            count: count + 1,
            lastTime: now,
        }
        isRateLimited.value = false
        return true
    }

    if (import.meta.client) {
        const { lastTime } = state.value
        if (lastTime && Date.now() - lastTime > interval) {
            state.value = { count: 0, lastTime: null }
        }
    }

    return {
        checkLimit,
        isRateLimited,
        reset: () => (state.value = { count: 0, lastTime: null }),
    }
}
