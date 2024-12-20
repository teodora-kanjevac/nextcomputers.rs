<template>
    <div>
        <ol
            class="mt-3 sm:py-7 xl:py-14 items-center justify-center gap-2 grid grid-cols-2 mx-6 sm:flex xl:max-w-screen-xl xl:mx-auto text-sm md:text-base font-medium">
            <Step
                v-for="(step, index) in steps"
                :key="index"
                :text="step.text"
                :status="getStepStatus(index)"
                :isLastStep="index === steps.length - 1"
                :index="index"
                @update:currentStep="onStepClick" />
        </ol>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    currentStep: {
        type: Number,
        required: true,
    },
})

const emit = defineEmits(['update:currentStep'])

const steps = ref([
    { text: 'Korpa' },
    { text: 'Informacije o dostavi' },
    { text: 'Način plaćanja' },
    { text: 'Pregled narudžbine' },
])

const getStepStatus = (index: number) => {
    if (index < props.currentStep) return 'completed'
    if (index === props.currentStep) return 'current'
    return 'upcoming'
}

function onStepClick(index: number) {
    if (index <= props.currentStep) {
        emit('update:currentStep', index)
    }
}
</script>
