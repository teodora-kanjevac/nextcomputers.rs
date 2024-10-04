<template>
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left">
                <tbody>
                    <tr v-for="(spec, index) in specifications" :key="index" class="border-b border-gray-200">
                        <th scope="row"
                            class="px-6 py-4 font-semibold text-gray-900 bg-white md:w-1/4">
                            {{ spec.name }}
                        </th>
                        <td class="px-6 py-4 font-medium text-gray-600 bg-gray-100">
                            {{ spec.value }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
const specifications = [
    { name: "Processor", value: "Apple M1 Chip" },
    { name: "RAM", value: "16GB" },
    { name: "Storage", value: "512GB SSD" },
    { name: "Display", value: "17-inch Retina Display" },
    { name: "Resolution", value: "2340 x 1440 px" },
    { name: "Battery Life", value: "Up to 11 hours" }
];
</script>
