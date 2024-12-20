<template>
    <div class="flex items-center ps-4 border border-gray-200 rounded">
        <input
            id="advancePayment"
            type="radio"
            value="advance"
            v-model="selectedPaymentMethod"
            name="advancePayment"
            class="size-4 text-primary-light bg-gray-100 border-gray-300 no-focus-ring" />
        <label for="advancePayment" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 cursor-pointer">
            Uplata na račun (1% popust)
        </label>
    </div>
    <div class="flex items-center ps-4 border border-gray-200 rounded">
        <input
            id="cashPayment"
            type="radio"
            value="cash"
            v-model="selectedPaymentMethod"
            name="cashPayment"
            class="size-4 text-primary-light bg-gray-100 border-gray-300 no-focus-ring" />
        <label for="cashPayment" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 cursor-pointer">
            Gotovinsko plaćanje
        </label>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const selectedPaymentMethod = ref(props.modelValue)

watch(selectedPaymentMethod, newVal => {
    emit('update:modelValue', newVal)
})
</script>

<style>
.no-focus-ring:focus {
    outline: none;
    box-shadow: none;
}
</style>
