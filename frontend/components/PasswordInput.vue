<template>
    <div>
        <label class="block text-sm font-medium mb-1.5 ms-0.5">
            {{ label }}
            <span v-if="required" class="text-red-600">*</span>
        </label>

        <div class="relative">
            <input
                :type="showPassword ? 'text' : 'password'"
                :placeholder="placeholder"
                :value="modelValue"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value || '')"
                :class="[
                    'w-full px-4 py-2 bg-gray-100 rounded border border-gray-300 text-sm focus:ring-primary-light focus:border-primary-light pr-10',
                    { 'border-red-400': showError },
                ]" />

            <button
                type="button"
                @click="togglePassword"
                class="absolute p-1 right-2 top-1/2 transform -translate-y-1/2 rounded-lg hover:bg-gray-200 text-gray-600 hover:text-gray-800 text-sm">
                <template v-if="showPassword">
                    <HidePasswordIcon class="size-5" />
                </template>
                <template v-else>
                    <ShowPasswordIcon class="size-5"/>
                </template>
            </button>
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
import HidePasswordIcon from './icons/HidePasswordIcon.vue'
import ShowPasswordIcon from './icons/ShowPasswordIcon.vue'

defineProps<{
    label: string
    placeholder: string
    required: boolean
    modelValue: string
    showError: boolean
    errorMessage: string
    shakeTrigger: number
}>()

const emit = defineEmits(['update:modelValue'])

const showPassword = ref(false)

function togglePassword() {
    showPassword.value = !showPassword.value
}
</script>
