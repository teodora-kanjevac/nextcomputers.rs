<template>
    <div>
        <div v-if="product" class="md:grid md:grid-cols-2 md:gap-8 xl:gap-16">
            <div class="gap-4">
                <img
                    :src="featuredImage"
                    class="h-auto max-w-full mx-auto rounded-lg mb-3 sm:mb-5"
                    :alt="product.name" />

                <div class="grid grid-cols-6 gap-2 sm:gap-3">
                    <div v-for="(imageUrl, index) in galleryImages" :key="index">
                        <img
                            :src="imageUrl.thumbnail"
                            :class="{
                                'border-2 border-rose-600': imageUrl.image === featuredImage,
                                'border-2 border-gray-200 hover:border-gray-300': imageUrl.image !== featuredImage,
                            }"
                            class="max-h-20 mx-auto rounded-lg cursor-pointer"
                            @click="updateFeatured(imageUrl.image)"
                            :alt="imageUrl.image" />
                    </div>
                </div>
            </div>

            <div class="mt-8 md:mt-0">
                <span
                    :class="{
                        'bg-green-100 text-green-800': product.available,
                        'bg-red-100 text-red-800': !product.available,
                    }"
                    class="text-xs font-medium me-2 px-2 py-0.5 rounded">
                    {{ product.available ? 'Na stanju' : 'Trenutno nije dostupno' }}
                </span>
                <h1 class="mt-2 text-xl font-semibold text-gray-900 sm:text-2xl">
                    {{ product?.name }}
                </h1>
                <div class="mt-2 mb-4 sm:items-center sm:gap-4 sm:flex">
                    <StarRating :rating="product?.ratings" />
                </div>

                <div class="flex items-center justify-between mt-5">
                    <div class="flex-col">
                        <div
                            v-if="product?.retailPrice && product.retailPrice > product.price"
                            class="mb-4 text-sm sm:text-base font-medium">
                            Maloprodajna cena: {{ formatPrice(product?.retailPrice) }}
                            <span class="text-sm">RSD</span>
                        </div>
                        <div :class="{ hidden: !isDiscounted }">
                            <span class="rounded px-2 py-1 text-xs font-semibold bg-red-100 text-red-800">
                                {{ product.discountPercentage }}% POPUSTA
                            </span>
                            <p class="text-xl line-through font-semibold leading-tight text-gray-500 mt-3 mb-1">
                                {{ formatPrice(product?.price) }} RSD
                            </p>
                        </div>
                        <p class="text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
                            {{ formattedPrice }}
                            <span class="text-xl sm:text-2xl">RSD</span>
                        </p>
                    </div>
                </div>

                <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                    <a
                        @click="info"
                        class="flex items-center justify-center py-3 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border-2 border-gray-200 hover:bg-gray-100 active:bg-gray-200"
                        role="button">
                        <HeartOutlineIcon class="size-5 -ms-2 me-2 shrink-0" />
                        Sačuvaj proizvod
                    </a>

                    <a
                        v-if="product.available"
                        @click="addToCart"
                        class="flex items-center justify-center text-sm px-6 py-3 mt-3 sm:mt-0 font-medium rounded-lg text-white bg-primary-light hover:bg-rose-800 active:bg-primary"
                        role="button">
                        <AddToCartIcon class="size-5 -ms-2 me-2 shrink-0" />
                        Dodaj u korpu
                    </a>
                    <a
                        v-else
                        :href="`/proizvodi/${product.subcategoryId}`"
                        class="flex items-center justify-center text-sm px-6 py-3 mt-3 sm:mt-0 font-medium rounded-lg text-white bg-primary-light hover:bg-rose-800 active:bg-primary"
                        role="button">
                        Pretraži proizvode iz ove kategorije
                        <ArrowRightIcon class="size-4 ms-2 me-2 shrink-0" />
                    </a>
                </div>

                <hr class="my-6 md:my-8 border-gray-200" />

                <div class="mt-6 px-1 lg:px-10 grid sm:gap-14 gap-5 sm:grid-flow-col items-start text-sm">
                    <div v-if="Object.keys(product.specifications).length > 0" class="grid grid-cols-2 gap-y-2">
                        <template
                            v-for="([key, value], index) in Object.entries(product.specifications).slice(0, 6)"
                            :key="index">
                            <span class="font-semibold">{{ key }}:</span>
                            <span class="line-clamp-3">{{ value }}</span>
                        </template>
                    </div>
                    <div class="grid grid-cols-2 gap-y-2">
                        <span class="font-semibold">Šifra artikla:</span>
                        <span>{{ product?.id }}</span>

                        <span class="font-semibold">Brend:</span>
                        <span>{{ product?.brand }}</span>

                        <span class="font-semibold">EAN:</span>
                        <span>{{ product?.declaration.ean }}</span>
                    </div>
                </div>
            </div>
        </div>

        <hr class="my-6 md:my-14 border-gray-200" />
    </div>
</template>

<script setup lang="ts">
import HeartOutlineIcon from '~/components/icons/HeartOutlineIcon.vue'
import AddToCartIcon from '~/components/icons/AddToCartIcon.vue'
import ArrowRightIcon from '~/components/icons/ArrowRightIcon.vue'
import { useProductStore } from '~/stores/ProductStore'
import type { ProductDTO } from '~/shared/types/ProductDTO'
import { formatPrice } from '~/composables/utils'
import type { ImageDTO } from '~/shared/types/ImageDTO'
import { useCartStore } from '~/stores/CartStore'

const toast = useToast()
const productStore = useProductStore()
const cartStore = useCartStore()

const product = computed<ProductDTO | null>(() => productStore.product)

const featuredImage = ref<string>()
const galleryImages = ref<ImageDTO[]>([])

const formattedPrice = computed(() => formatPrice(product.value?.discountPrice || product.value!.price))
const isDiscounted = computed(() => product.value?.discountPrice && product.value.discountPrice > 0)

watch(
    product,
    newProduct => {
        if (newProduct) {
            featuredImage.value = newProduct.images[0]?.image
            galleryImages.value = newProduct.images
        }
    },
    { immediate: true }
)

const updateFeatured = (imageUrl: string) => {
    featuredImage.value = imageUrl
}

const addToCart = async () => {
    if (product.value?.id !== undefined) {
        await cartStore.addToCart(product.value.id, 1)
    } else {
        toast.add({
            severity: 'error',
            summary: 'Greška pri dodavanju u korpu!',
            detail: 'Došlo je do problema pri dodavanju proizvoda u korpu.',
            life: 5000,
        })
    }
    toast.add({
        severity: 'success',
        summary: 'Proizvod dodat u korpu!',
        detail: 'Ovaj proizvod je uspešno dodat u korpu.',
        life: 4000,
    })
}

const info = () => {
    toast.add({
        severity: 'info',
        summary: 'Info',
        detail: 'Funkcionalnost je u pripremi – biće dostupna uskoro. Hvala na razumevanju!',
        life: 5000,
    })
}
</script>
