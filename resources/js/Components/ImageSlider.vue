<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const props = defineProps(['images']);

const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    },        
    720: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1080: {
      slidesPerView: 5,
      spaceBetween: 80
    }
};
</script>
<template>
    <div class="slider-conatainer relative w-full sm:w-4/5">
        <swiper
            :breakpoints="breakpoints"
            :loop="true"
            :modules="modules">
                <swiper-slide
                    v-for="image of images"
                    :key="image.id">
                    <img :src="'storage/images/skills/'+image.filename" alt="">
                </swiper-slide>
        </swiper>
    </div>
</template>