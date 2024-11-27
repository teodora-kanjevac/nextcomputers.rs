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

export function truncateName(name: string) {
    let modifiedName = name.replace(/[-/]/g, ' ');
    if (modifiedName.length > 50) {
        modifiedName = modifiedName.slice(0, 50) + '...';
    }
    return modifiedName;
}