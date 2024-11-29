<template>
    <div class="flex items-center">
        <span
            v-for="index in 5"
            :key="index"
            @mouseover="hoverStar(index)"
            @mouseleave="resetStar()"
            @click="setRating(index)"
            class="cursor-pointer">
            <StarFilledIcon
                v-if="index <= (hoveredRating !== null ? hoveredRating : rating)"
                class="size-8 star"
                :data-index="index" />
            <StarEmptyIcon v-else class="size-8 star" :data-index="index" />
        </span>
    </div>
</template>

<script setup lang="ts">
import StarFilledIcon from './icons/StarFilledIcon.vue'
import StarEmptyIcon from './icons/StarEmptyIcon.vue'
import { animateScale, resetScale } from '~/composables/useGSAP'

defineProps({
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
})

const emit = defineEmits<{
    (event: 'update:rating', rating: number): void
}>()

const hoveredRating = ref<number | null>(null)

const setRating = (index: number) => {
    emit('update:rating', index)
}

const hoverStar = (index: number) => {
    hoveredRating.value = index
    animateScale(`.star[data-index="${index}"]`, 1.25)
}

const resetStar = () => {
    hoveredRating.value = null
    resetScale('.star')
}
</script>
