export function useClamping() {
    const element = ref<HTMLElement | null>(null)
    const isOverflowing = ref(false)

    const checkOverflow = async () => {
        await nextTick()
        if (element.value) {
            isOverflowing.value = element.value.scrollHeight > element.value.clientHeight
        }
    }

    onMounted(() => {
        checkOverflow()
    })

    return {
        element,
        isOverflowing,
    }
}
