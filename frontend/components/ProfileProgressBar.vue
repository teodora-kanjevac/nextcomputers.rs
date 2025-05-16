<template>
    <div class="flex items-center justify-between font-medium mt-4 mb-2">
        <span class="text-sm">{{ completionPercentage }}% kompletan</span>
        <span v-if="completionPercentage < 100" class="text-xs text-primary">Potrebne izmene</span>
        <span v-else class="text-xs text-green-500">Profil kompletan!</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2">
        <div
            class="h-2 rounded-full transition-all duration-300 ease-in-out"
            :class="completionPercentage === 100 ? 'bg-green-500' : 'bg-primary-light'"
            :style="`width: ${completionPercentage}%`"></div>
    </div>
</template>

<script setup lang="ts">
import type { User } from '~/shared/classes/User'

const { user } = defineProps<{
    user: User
}>()

const completionPercentage = computed(() => {
    const totalFields = 5
    let completedFields = 2

    if (user?.address) completedFields++
    if (user?.city) completedFields++
    if (user?.zipcode) completedFields++

    return Math.round((completedFields / totalFields) * 100)
})
</script>
