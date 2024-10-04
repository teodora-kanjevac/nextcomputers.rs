<template>
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left">
                <tbody>
                    <tr v-for="(decl, index) in declaration" :key="index" class="border-b border-gray-200">
                        <th scope="row"
                            class="px-6 py-4 font-semibold text-gray-900 bg-white md:w-1/4">
                            {{ decl.name }}
                        </th>
                        <td class="px-6 py-4 font-medium text-gray-600 bg-gray-100">
                            {{ decl.value }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
const declaration = [
    { name: "Product Name", value: "Apple MacBook Pro 17\"" },
    { name: "Supplier", value: "Tech Solutions Ltd." },
    { name: "Origin Country", value: "USA" }
];
</script>
