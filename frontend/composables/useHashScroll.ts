export function useHashScroll(offset = 100) {
    const route = useRoute()

    function scrollToHashManually(hash: string | null) {
        if (!hash) return
        nextTick(() => {
            setTimeout(() => {
                const el = document.querySelector(hash)
                if (el) {
                    const yOffset = -offset
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
                    window.scrollTo({ top: y })
                }
            }, 100)
        })
    }

    onMounted(() => {
        scrollToHashManually(route.hash)
    })

    watch(
        () => route.hash,
        newHash => {
            scrollToHashManually(newHash)
        }
    )
}
