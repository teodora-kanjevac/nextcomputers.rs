<template>
    <tr class="border-b border-gray-200">
        <th scope="row" class="px-6 py-4 font-semibold text-gray-900 bg-white md:w-1/4">
            {{ label }}
        </th>
        <td v-if="value" v-html="value" class="px-6 py-4 font-medium text-gray-700 bg-gray-100"></td>
        <td v-else class="px-6 py-4 font-medium text-gray-700 bg-gray-100">
            Tačan podatak će biti naveden na deklaraciji koju dobijate uz proizvod
        </td>
    </tr>
</template>

<script setup lang="ts">
defineProps<{
    label: string
    value: string | undefined
}>()
</script>
