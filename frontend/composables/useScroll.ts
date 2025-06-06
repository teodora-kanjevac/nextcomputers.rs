export const useScroll = (navbarRef: HTMLElement | null = null) => {
    const route = useRoute()
    const { y } = useWindowScroll()

    const shouldHideOnScroll = computed(() => {
        const excludedPages = ['/profil', '/korpa']
        return !excludedPages.some(prefix => route.path.startsWith(prefix))
    })

    const isScrolled = computed(() => shouldHideOnScroll.value && y.value > 300)
    const isVisible = computed(() => shouldHideOnScroll.value && y.value > (navbarRef?.clientHeight ?? 50))
    const isMobile = useMediaQuery('(max-width: 767px)')

    return {
        isScrolled,
        isVisible,
        isMobile,
        shouldHideOnScroll,
    }
}
