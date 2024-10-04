<template>
    <div>
        <client-only>
            <ul class="flex gap-3 mb-2 text-base font-medium text-left text-gray-600" id="default-tab"
                data-tabs-toggle="#tab" role="tablist">
                <li class="focus-within:z-10 rounded-s-lg" role="presentation">
                    <button :class="[
                        'flex items-center justify-center px-5 py-3 rounded-lg',
                        {
                            'text-white bg-primary-light w-full': activeTab === 'specs',
                            'hover:text-gray-900 hover:bg-gray-200': activeTab !== 'specs'
                        }
                    ]" id="specs-tab" type="button" @click="activeTab = 'specs'">
                        <InfoIcon class="size-5 me-3" />
                        Specifikacije
                    </button>
                </li>
                <li class="focus-within:z-10" role="presentation">
                    <button :class="[
                        'flex items-center justify-center px-5 py-3 rounded-lg',
                        {
                            'text-white bg-primary-light': activeTab === 'declaration',
                            'hover:text-gray-900 hover:bg-gray-200': activeTab !== 'declaration'
                        }
                    ]" id="declaration-tab" type="button" @click="activeTab = 'declaration'">
                        <ListIcon class="size-6 me-3" />
                        Deklaracija
                    </button>
                </li>

                <li class="focus-within:z-10" role="presentation">
                    <button :class="[
                        'flex items-center justify-center px-5 py-3 rounded-lg',
                        {
                            'text-white bg-primary-light': activeTab === 'reviews',
                            'hover:text-gray-900 hover:bg-gray-200': activeTab !== 'reviews'
                        }
                    ]" id="reviews-tab" type="button" @click="activeTab = 'reviews'">
                        <StarOutlinedIcon class="size-5 me-2" />
                        Recenzije
                    </button>
                </li>

            </ul>
            <div id="tab">
                <div v-if="activeTab === 'specs'" class="px-3 py-4 rounded-lg bg-gray-50">
                    <SpecificationsTab />
                </div>
                <div v-if="activeTab === 'declaration'" class="px-3 py-4 rounded-lg bg-gray-50">
                    <DeclarationTab />
                </div>
                <div v-if="activeTab === 'reviews'" class="px-3 py-4 rounded-lg bg-gray-50">
                    <ReviewsTab />
                </div>
            </div>
        </client-only>
    </div>
</template>

<script setup>
import InfoIcon from '~/components/icons/InfoIcon.vue';
import ListIcon from '~/components/icons/ListIcon.vue';
import StarOutlinedIcon from '~/components/icons/StarOutlinedIcon.vue';

const activeTab = ref("specs");
</script>