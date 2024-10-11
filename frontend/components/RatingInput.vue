<template>
    <div class="flex items-center">
        <span
            v-for="index in 5"
            :key="index"
            @mouseover="hoveredRating = index"
            @mouseleave="hoveredRating = null"
            @click="setRating(index)"
            class="cursor-pointer">
            <StarFilledIcon v-if="index <= (hoveredRating !== null ? hoveredRating : rating)" class="size-8" />
            <StarEmptyIcon v-else class="size-8" />
        </span>
    </div>
</template>

<script setup lang="ts">
import StarFilledIcon from './icons/StarFilledIcon.vue'
import StarEmptyIcon from './icons/StarEmptyIcon.vue'

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
</script>
