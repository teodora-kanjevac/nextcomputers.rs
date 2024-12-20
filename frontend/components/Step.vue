<template>
    <li
        :class="[
            'flex items-center text-gray-700 h-16 sm:h-full px-3 sm:px-0 rounded-lg bg-white border-2 border-gray-200 shadow-sm active:bg-gray-50 sm:active:bg-transparent sm:border-none sm:shadow-none sm:bg-transparent',
            !isLastStep &&
                'after:border-1 after:mx-3 lg:after:mx-6 after:hidden after:h-1 after:w-full after:border-b-2 after:border-gray-300 sm:after:inline-block sm:w-full',
        ]">
        <button
            @click="onStepClick"
            class="flex items-center text-left">
            <CircleCheckmarkIcon
                class="size-6 sm:size-7 shrink-0 me-3 sm:me-4"
                :class="{
                    'text-green-500': status === 'completed',
                    'text-gray-500': status === 'upcoming',
                    'text-primary-light': status === 'current',
                }" />
            {{ text }}
        </button>
    </li>
</template>

<script setup lang="ts">
import CircleCheckmarkIcon from './icons/CircleCheckmarkIcon.vue'

const props = defineProps({
    text: String,
    status: String,
    isLastStep: Boolean,
    index: Number,
})

const emit = defineEmits(['update:currentStep'])

function onStepClick() {
    emit('update:currentStep', props.index)
}
</script>
