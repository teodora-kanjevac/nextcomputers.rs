export const usePageTitle = (defaultTitle = 'nextcomputers.rs') => {
    const title = ref(defaultTitle)

    const updateTitle = (newTitle?: string) => {
        if (newTitle) {
            title.value = `${newTitle} | nextcomputers.rs`
        } else {
            title.value = defaultTitle
        }
    }

    watchEffect(() => {
        useHead({
            title: title.value,
        })
    })

    return {
        title,
        updateTitle,
    }
}
