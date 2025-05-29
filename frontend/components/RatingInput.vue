<template>
    <div>
        <p class="block text-sm font-medium mb-1.5 ms-0.5">
            {{ label }}
            <span v-if="required" class="text-red-600">*</span>
        </p>
        <div class="flex items-center">
            <span
                v-for="index in 5"
                :key="index"
                @mouseover="hoverStar(index)"
                @mouseleave="resetHover()"
                @click="setRating(index)"
                class="cursor-pointer transition-transform duration-100"
                :class="{
                    'scale-110': index <= (hoveredRating || selectedRating),
                    'scale-100': index > (hoveredRating || selectedRating),
                }">
                <StarFilledIcon
                    v-if="index <= (hoveredRating || selectedRating)"
                    class="size-8 transition-colors duration-100"
                    :class="{
                        'text-yellow-400': index <= selectedRating,
                        'text-yellow-300': hoveredRating && index > selectedRating,
                    }" />
                <StarEmptyIcon v-else class="size-8 text-gray-300 transition-colors duration-100" />
            </span>
        </div>
        <p
            v-if="!!showError"
            :key="'error-' + shakeTrigger"
            class="text-red-600 text-xs font-medium mt-1 ms-0.5 animate-shake">
            {{ errorMessage }}
        </p>
    </div>
</template>

<script setup lang="ts">
import StarFilledIcon from './icons/StarFilledIcon.vue'
import StarEmptyIcon from './icons/StarEmptyIcon.vue'

const props = defineProps<{
    label: string
    required: boolean
    modelValue: number
    showError: boolean
    errorMessage: string
    shakeTrigger: number
    rating: number
}>()

const emit = defineEmits(['update:modelValue'])

const selectedRating = ref(props.modelValue)
const hoveredRating = ref<number | null>(null)

watch(
    () => props.modelValue,
    newVal => {
        selectedRating.value = newVal
    }
)

const setRating = (index: number) => {
    selectedRating.value = index
    emit('update:modelValue', index)
}

const hoverStar = (index: number) => {
    hoveredRating.value = index
}

const resetHover = () => {
    hoveredRating.value = null
}
</script>
