<template>
    <div>
        <label class="block text-sm font-medium mb-1.5 ms-0.5">
            {{ label }}
            <span v-if="required" class="text-red-600">*</span>
        </label>
        <textarea
            type="text"
            :rows="rows"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value || '')"
            :class="[
                'w-full px-3 py-2 bg-gray-100 rounded border border-gray-300 text-sm focus:ring-primary-light focus:border-primary-light',
                { 'border-red-400': showError },
            ]" />
        <p
            v-if="!!showError"
            :key="'error-' + shakeTrigger"
            class="text-red-600 text-xs font-medium ms-0.5 animate-shake">
            {{ errorMessage }}
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    rows: number
    label: string
    placeholder: string
    required: boolean
    modelValue: string
    showError: boolean
    errorMessage: string
    shakeTrigger: number
}>()

const emit = defineEmits(['update:modelValue'])
</script>
