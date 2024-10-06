<template>
    <div>
        <div class="md:grid md:grid-cols-2 md:gap-8 xl:gap-16">
            <div class="gap-4">
                <img
                    :src="featuredImage"
                    class="h-auto max-w-full mx-auto rounded-lg mb-3 sm:mb-5"
                    alt="Featured Image" />

                <div class="grid grid-cols-5 gap-2 sm:gap-3">
                    <div v-for="(image, index) in galleryImages" :key="index">
                        <img
                            :src="image"
                            :class="{
                                'border-2 border-rose-600':
                                    image === featuredImage,
                                'border-2 border-gray-200 hover:border-gray-300':
                                    image !== featuredImage,
                            }"
                            class="h-full max-w-full mx-auto rounded-lg cursor-pointer"
                            @click="updateFeatured(image)"
                            alt="Gallery Image" />
                    </div>
                </div>
            </div>

            <div class="mt-8 md:mt-0">
                <span
                    class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                    Na stanju
                </span>
                <h1
                    class="mt-2 text-xl font-semibold text-gray-900 sm:text-2xl">
                    {{ product.name }}
                </h1>
                <div class="mt-2 sm:items-center sm:gap-4 sm:flex">
                    <StarRating :rating="4.3" :total-reviews="243" />
                </div>

                <div class="flex items-center justify-between mt-4">
                    <div class="flex-col">
                        <div class="">
                            <span
                                class="rounded px-2 py-1 text-xs font-semibold bg-red-100 text-red-800">
                                Čak do 15% popusta
                            </span>
                            <p
                                class="text-xl line-through font-semibold leading-tight text-gray-500 mt-3 mb-1 ms-0.5">
                                {{ product.price }} RSD
                            </p>
                        </div>
                        <p
                            class="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900">
                            {{ product.price }}
                            <span class="text-xl sm:text-2xl">RSD</span>
                        </p>
                    </div>
                </div>

                <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                    <NuxtLink
                        to="/"
                        class="flex items-center justify-center py-3 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border-2 border-gray-200 hover:bg-gray-100 active:bg-gray-200"
                        role="button">
                        <HeartOutlineIcon class="size-5 -ms-2 me-2" />
                        Sačuvaj proizvod
                    </NuxtLink>

                    <NuxtLink
                        to="/"
                        class="flex items-center justify-center text-sm px-6 py-3 mt-3 sm:mt-0 font-medium rounded-lg text-white bg-primary-light hover:bg-rose-800 active:bg-primary"
                        role="button">
                        <AddToCartIcon class="size-5 -ms-2 me-2" />
                        Dodaj u korpu
                    </NuxtLink>
                </div>

                <hr class="my-6 md:my-8 border-gray-200" />

                <div
                    class="mt-6 flex flex-col gap-6 sm:flex-row items-start justify-around text-sm">
                    <div class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <span class="font-semibold">Brand:</span>
                        <span>APPLE</span>

                        <span class="font-semibold">Dijagonala ekrana:</span>
                        <span>10,9"</span>

                        <span class="font-semibold">Rezolucija:</span>
                        <span>2360 x 1640</span>

                        <span class="font-semibold">Procesor:</span>
                        <span>Hexa Core</span>

                        <span class="font-semibold">SIM kartica:</span>
                        <span>da</span>

                        <span class="font-semibold">RAM memorija:</span>
                        <span>4 GB</span>

                        <span class="font-semibold">Interna memorija:</span>
                        <span>64 GB</span>
                    </div>

                    <div class="grid grid-cols-2 gap-x-6 sm:gap-x-0 gap-y-2">
                        <span class="font-semibold">Šifra artikla:</span>
                        <span>32145676</span>

                        <span class="font-semibold">EAN:</span>
                        <span>8806084194343</span>

                        <span class="font-semibold">Model:</span>
                        <span>F4WR913P3WA</span>
                    </div>
                </div>
            </div>
        </div>

        <hr class="my-6 md:my-14 border-gray-200" />
    </div>
</template>

<script setup>
import HeartOutlineIcon from '~/components/icons/HeartOutlineIcon.vue'
import AddToCartIcon from '~/components/icons/AddToCartIcon.vue'
import { useProductStore } from '~/stores/ProductStore'

const featuredImage = ref(
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'
)

const galleryImages = ref([
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
])

const updateFeatured = image => {
    featuredImage.value = image
}

const product = {
    id: 1,
    name: 'Apple iMac 24\" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD, Mac OS, Pink',
    price: '104.990',
    image: 'ASUS B550-PLUS TUF.jpg',
}

const productStore = useProductStore()

productStore.setProduct(product)
</script>
