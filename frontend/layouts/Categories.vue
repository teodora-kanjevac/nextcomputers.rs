<template>
    <div>
        <section class="py-8 antialiased md:py-16">
            <div class="mx-auto max-w-screen-xl px-6 2xl:px-0">
                <div class="flex flex-col gap-4">
                    <div class="mb-3 mx-2 flex items-center justify-between gap-4">
                        <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl">Pretražite po kategorijama</h2>
                        <SeeAllCategoriesLink class="hidden sm:flex"></SeeAllCategoriesLink>
                    </div>

                    <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                        <template v-for="category in categories" :key="category.id">
                            <CategoryCard :category="category"></CategoryCard>
                        </template>
                    </div>

                    <SeeAllCategoriesLink class="flex sm:hidden mt-3"></SeeAllCategoriesLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import ComputerIcon from '~/components/icons/ComputerIcon.vue'
import TelevisionIcon from '~/components/icons/TelevisionIcon.vue'
import WashingMachineIcon from '~/components/icons/WashingMachineIcon.vue'
import AirConditionerIcon from '~/components/icons/AirConditionerIcon.vue'
import SmartphoneIcon from '~/components/icons/SmartphoneIcon.vue'

const categories = [
    { id: 1, name: 'Racunari i komponente', icon: ComputerIcon },
    { id: 2, name: 'Televizori i Audio', icon: TelevisionIcon },
    { id: 3, name: 'Bela Tehnika', icon: WashingMachineIcon },
    { id: 4, name: 'Klima uredjaji i grejna tela', icon: AirConditionerIcon },
    { id: 5, name: 'Mobilni telefoni i oprema', icon: SmartphoneIcon },
    { id: 5, name: 'Mobilni telefoni i oprema', icon: SmartphoneIcon },
]
</script>