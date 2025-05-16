<template>
    <div v-if="address" class="flex items-center text-sm">
        <CheckMarkIcon class="size-5 text-green-500 me-2" />
        <span>Dodata adresa</span>
    </div>
    <div v-else class="flex items-center text-sm">
        <CircleDangerIcon class="size-5 text-yellow-500 me-2" />
        <span>Dodajte adresu</span>
    </div>
</template>

<script setup lang="ts">
import CheckMarkIcon from './icons/CheckMarkIcon.vue'
import CircleDangerIcon from './icons/CircleDangerIcon.vue'

const { address } = defineProps<{
    address: string | undefined
}>()
</script>
