<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const props = defineProps(['images']);

</script>
<template>
    <div class="slider-conatainer relative w-4/5">
        <swiper
            :slidesPerView="5"
            :spaceBetween="80"
            :loop="true"
            :modules="modules">
                <swiper-slide
                    v-for="image of images"
                    :key="image.id">
                    <img :src="'storage/skills/'+image.filename" alt="">
                </swiper-slide>
        </swiper>
    </div>
</template>