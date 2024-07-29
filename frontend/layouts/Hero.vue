<template>
  <div>
    <section class="bg-white pt-5 md:pt-8">
      <div
        class="max-w-screen-xl px-4 py-8 pb-20 lg:py-28 mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-center">
        <div class="w-full lg:w-1/4 hidden mb-12 pl-5 lg:flex flex-col lg:items-start">
          <PriceTagIcon class="size-10 sm:size-14 text-primary"></PriceTagIcon>
          <h2 class="text-left lg:text-left font-semibold text-xl sm:text-3xl mt-3 sm:mt-6">Najnovije <br> Akcije</h2>
        </div>
        <div class="w-full lg:w-3/4">
          <section class="splide">
            <Splide :options="options">
              <template v-for="image in images" :key="image.id">
                <SplideSlide>
                  <NuxtLink to="/">
                    <img class="h-full mx-auto rounded-xl" :src="getResponsiveImageUrl(image)" :alt="image.name" />
                  </NuxtLink>
                </SplideSlide>
              </template>
            </Splide>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PriceTagIcon from "~/components/icons/PriceTagIcon.vue"
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import 'assets/css/splide.css';

const screenWidth = ref(null);

onMounted(() => {
  screenWidth.value = window.innerWidth;
  window.addEventListener('resize', handleResize);
});

const handleResize = () => {
  screenWidth.value = window.innerWidth;
};

const getResponsiveImageUrl = (image) => {
  return screenWidth.value < 640 ? image.imageSmallUrl : image.imageBigUrl;
};


const images = [
  {
    id: 1,
    name: 'DELL G15',
    imageBigUrl: '/assets/images/DELL G15 BIG.jpg',
    imageSmallUrl: '/assets/images/DELL G15 SMALL.jpg',
    link: ''
  },
  {
    id: 2,
    name: 'DELL VOSTRO',
    imageBigUrl: '/assets/images/DELL VOSTRO BIG.jpg',
    imageSmallUrl: '/assets/images/DELL VOSTRO SMALL.jpg',
    link: ''
  },
  {
    id: 3,
    name: 'GIGABYTE G5',
    imageBigUrl: '/assets/images/GIGABYTE G5 BIG.jpg',
    imageSmallUrl: '/assets/images/GIGABYTE G5 SMALL.jpg',
    link: ''
  },
  {
    id: 4,
    name: 'DELL INSPIRON BIG',
    imageBigUrl: '/assets/images/DELL INSPIRON BIG.jpg',
    imageSmallUrl: '/assets/images/DELL INSPIRON SMALL.jpg',
    link: ''
  },
  {
    id: 5,
    name: 'GIGABYTE AORUS',
    imageBigUrl: '/assets/images/GIGABYTE AORUS BIG.jpg',
    imageSmallUrl: '/assets/images/GIGABYTE AORUS SMALL.jpg',
    link: ''
  },
  {
    id: 6,
    name: 'GIGABYTE AERO',
    imageBigUrl: '/assets/images/GIGABYTE AERO BIG.png',
    imageSmallUrl: '/assets/images/GIGABYTE AERO SMALL.png',
    link: ''
  },
];


const options = {
  type: 'loop',
  speed: 700,
  autoplay: true,
  interval: 5000,
  pagination: true,
  arrows: false,
};
</script>