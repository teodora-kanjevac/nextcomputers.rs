<template>
    <div>
        <div v-if="product" class="lg:grid lg:grid-cols-2 md:gap-8 xl:gap-16">
            <ProductImageGallery :gallery-images="galleryImages" />

            <div class="mt-8 lg:mt-0">
                <span
                    :class="{
                        'bg-green-100 text-green-800': product.available,
                        'bg-red-100 text-red-800': !product.available,
                    }"
                    class="text-xs font-medium me-2 px-2 py-0.5 rounded">
                    {{ product.available ? 'Na stanju' : 'Trenutno nije dostupno' }}
                </span>
                <h1 class="mt-2 text-xl font-semibold text-gray-900 sm:text-2xl break-words">
                    {{ product?.name }}
                </h1>
                <div class="mt-3 mb-4 sm:items-center sm:gap-4 sm:flex">
                    <StarRating :size="6" :rating="product?.ratings" />
                </div>

                <div class="flex items-center justify-between mt-3 md:mt-5">
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
                        <div class="mt-4">
                            <span class="rounded px-2 py-1 text-sm font-bold bg-green-200">
                                {{ advancePrice }} RSD
                                <span class="font-medium">SA UPLATOM NA RAČUN</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-5">
                    <a
                        @click="info"
                        class="flex items-center justify-center py-3 px-5 text-sm font-medium text-gray-900 bg-white rounded-md border-2 border-gray-200 hover:bg-gray-100 active:bg-gray-200"
                        role="button">
                        <HeartOutlineIcon class="size-5 -ms-2 me-2 shrink-0" />
                        Sačuvaj proizvod
                    </a>

                    <a
                        v-if="product.available"
                        @click="addToCart"
                        class="flex items-center justify-center text-sm px-6 py-3 mt-3 sm:mt-0 font-medium rounded-md text-white bg-primary-light hover:bg-rose-800 active:bg-primary"
                        role="button">
                        <AddToCartIcon class="size-5 -ms-2 me-2 shrink-0" />
                        Dodaj u korpu
                    </a>
                    <a
                        v-else
                        :href="`/proizvodi/${product.subcategoryId}`"
                        class="flex items-center justify-center text-sm px-6 py-3 mt-3 sm:mt-0 font-medium rounded-md text-white bg-primary-light hover:bg-rose-800 active:bg-primary"
                        role="button">
                        Pretraži proizvode iz ove kategorije
                        <ArrowRightIcon class="size-4 ms-2 me-2 shrink-0" />
                    </a>
                </div>

                <div class="inline-flex mt-5 px-2 py-1 rounded gap-2 bg-amber-100">
                    <TruckDeliveryIcon class="size-5" />
                    <span class="text-sm font-medium">Rok isporuke je 1-3 radna dana</span>
                </div>

                <hr class="my-6 md:my-7 border-gray-200" />

                <div class="mt-6 px-1 lg:px-5 grid gap-5 sm:grid-flow-col items-start text-sm">
                    <div
                        v-if="Object.keys(product.specifications).length > 0"
                        class="grid grid-cols-[max-content,1fr] gap-x-5 gap-y-2">
                        <template
                            v-for="([key, value], index) in Object.entries(product.specifications).slice(0, 5)"
                            :key="index">
                            <span class="font-semibold">{{ key }}:</span>
                            <span class="line-clamp-3">{{ value }}</span>
                        </template>
                    </div>
                    <div class="grid grid-cols-[max-content,1fr] gap-x-5 gap-y-2">
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
import { useNotification } from '~/composables/useNotification'
import TruckDeliveryIcon from '~/components/icons/TruckDeliveryIcon.vue'

const { showNotification } = useNotification()
const productStore = useProductStore()
const cartStore = useCartStore()

const product = computed<ProductDTO | null>(() => productStore.product)

const featuredImage = ref<string>()
const galleryImages = ref<ImageDTO[]>([])

const price = computed(() => product.value?.discountPrice || product.value!.price)
const formattedPrice = computed(() => formatPrice(price.value))
const advancePrice = computed(() => formatPrice(Math.round(price.value * 0.99)))
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

const addToCart = async () => {
    try {
        if (product.value?.id !== undefined) {
            await cartStore.addToCart(product.value.id)
            showNotification('success', 'Proizvod dodat u korpu!', 'Ovaj proizvod je uspešno dodat u korpu.', 4000)
        } else {
            throw new Error('Product ID is not defined.')
        }
    } catch (error: any) {
        if (error.response && error.response.data.error.includes('Insufficient stock')) {
            showNotification('warn', 'Nema dovoljno proizvoda na stanju!', 'Količina koju ste tražili nije dostupna.')
        } else {
            showNotification(
                'error',
                'Greška pri dodavanju u korpu!',
                'Došlo je do problema pri dodavanju proizvoda u korpu.'
            )
        }
    }
}

const info = () => {
    showNotification('info', 'Info', 'Funkcionalnost je u pripremi – biće dostupna uskoro. Hvala na razumevanju!')
}
</script>
