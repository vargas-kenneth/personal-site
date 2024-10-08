<script setup>
import { ref, onMounted } from 'vue';
import { useIsMobile } from '@/Composables/useIsMobile.js';
import { config } from '@/Config/AppConfig.js';

const imagePath = config.path.images;
const menuItems = [
    { id: 1, title: 'Home', url: '#home' },
    { id: 2, title: 'Intro', url: '#intro' },
    { id: 3, title: 'Skills', url: '#skills' },
    { id: 4, title: 'Experience', url: '#experience' },
];

const showMenu = ref(false);
const timeoutId = ref(null);
const body = ref(null);
const isMobile = useIsMobile();

const scrollToSection = (sectionId) => {
    if (showMenu) {
        showMenu.value = false;
        body.value.style.cssText = '';
    }

    const newUrl = sectionId === '#home'
        ? `${window.location.origin}/`
        : `${window.location.origin}/${sectionId}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
   
    if (sectionId !== '#home') {
        const section = document.querySelector(sectionId);

        if (section) {
            if (timeoutId.value) {
                clearTimeout(timeoutId.value);
            }

            timeoutId.value = setTimeout(() => {
                section.scrollIntoView({
                    behavior: 'smooth'
                });    
            }, 450);
        } else {
            alert(`The Section ${section} not found!`);
        }
    }
};

const showMenus = (e) => {
    showMenu.value = !showMenu.value;
    body.value.style.cssText = showMenu.value ? 'height: 100%; overflow: hidden;' : '';    
};

onMounted(() => {
    body.value = document.querySelector('body');
});
</script>

<template>
<nav class="absolute top-0 left-0 right-0 mx-auto w-full lg:w-4/5 md:w-4/5 text-white">
    <div v-if="isMobile">
        <div class="flex justify-between items-center py-4 px-6">
            <img class="w-12" 
                :src="`${imagePath}logo/logo.png`"
                alt="Logo">
            <button @click="showMenus">
                <img class="w-7" 
                    :src="`${imagePath}icons/mobile-menu.png`"
                    v-if="!showMenu">
                <img class="w-5 mr-1" 
                    :src="`${imagePath}icons/close.png`"
                    v-else>             
            </button>
        </div>
    </div>
    <div v-else
        class="flex justify-between py-4">
        <img class="w-16 pl-4 sm:pl-0" :src="`${imagePath}logo/logo.png`" alt="Logo">
        <div class="hidden sm:flex justify-center">
            <ul class="flex gap-3 items-center text-base">
                <li v-for="item in menuItems" :key="item.id" class="hover:text-violet-300">
                    <a :href="`${ item.url }`" @click.prevent="scrollToSection(item.url)">{{ item.title }}</a>
                </li>
            </ul>
        </div>
    </div>
    <Transition name="mobileMenu" :duration="450">
        <div v-if="isMobile && showMenu"
            class="font-roboto ml-auto flex flex-col items-center py-6 bg-charcoal-gray h-screen">
            <ul class="menuItems text-xl text-center flex flex-col gap-y-3 w-full mb-4">
                <li v-for="item in menuItems" :key="item.id" class="w-full">
                    <a :href="`${ item.url }`" @click.prevent="scrollToSection(item.url)">{{ item.title }}</a>
                </li>
            </ul>
            <div class="menuItems flex gap-x-2 mb-4">
                <a href="https://www.facebook.com/026Kenneth/">
                    <img class="w-5"
                        :src="`${imagePath}icons/social-facebook.png`" 
                        alt="facebook">
                </a>
                <a href="https://github.com/vargas-kenneth/">
                    <img class="w-5"
                        :src="`${imagePath}icons/social-github.png`" 
                        alt="github">
                </a>
                <a href="https://www.linkedin.com/in/kenneth-vargas-355960190/">
                    <img class="w-5"
                        :src="`${imagePath}icons/social-linkedin.png`" 
                        alt="linkedin">
                </a>
            </div>
            <a class="menuItems" href="mailto:vargaskenneth26@gmail.com">vargaskenneth26@gmail.com</a>    
        </div>
    </Transition>
</nav>
</template>

<style scoped>
.mobileMenu-enter-active,
.mobileMenu-leave-active {
    transition: all 0.25s ease-out;

}

.mobileMenu-enter-from,
.mobileMenu-leave-to {
    transform: translateX(300px);
    opacity: 0;
}

.mobileMenu-leave-active {
    transition-delay: 0.2s;
}

.mobileMenu-enter-active .menuItems,
.mobileMenu-leave-active .menuItems {
    transition: all 0.25s ease-out;
}

.mobileMenu-enter-from .menuItems,
.mobileMenu-leave-to .menuItems {
    transform: translateX(120px);
    opacity: 0;
}

.mobileMenu-enter-active .menuItems {
    transition-delay: 0.2s;
}
</style>
