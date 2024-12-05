import { useRoute } from 'vue-router'

export default defineNuxtPlugin(nuxtApp => {
    const route = useRoute()

    const isSearchPage: Ref<boolean> = ref(Boolean(route.query.q))
    const isCategory: Ref<boolean> = ref(Boolean(route.params.subcategoryId))

    watch(
        () => route.query.q,
        newValue => {
            isSearchPage.value = Boolean(newValue)
        },
        { immediate: true }
    )

    watch(
        () => route.params.subcategoryId,
        newValue => {
            isCategory.value = Boolean(newValue)
        },
        { immediate: true }
    )

    nuxtApp.provide('isSearchPage', isSearchPage)
    nuxtApp.provide('isCategory', isCategory)
})
