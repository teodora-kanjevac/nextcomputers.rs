<template>
    <tr class="border-b border-gray-200">
        <th scope="row" class="px-6 py-4 font-bold text-gray-900 bg-white md:w-1/4">
            {{ label }}
        </th>
        <td class="px-6 py-4 font-semibold text-gray-700 bg-gray-100">
            {{ value }}
        </td>
    </tr>
</template>

<script setup lang="ts">
defineProps<{
    label: string
    value: string
}>()
</script>
