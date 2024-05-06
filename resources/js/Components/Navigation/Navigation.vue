<script setup>
const menuItems = [
    { id: 1, title: 'Home', url: 'home' },
    { id: 2, title: 'Intro', url: 'intro' },
    { id: 3, title: 'Skills', url: 'skills' },
    { id: 4, title: 'Experience', url: 'experience' },
];
</script>

<template>
<nav class="absolute top-0 left-0 right-0 mx-auto w-full lg:w-4/5 text-white">
    <div class=" flex justify-between py-4">
        <img class="w-16"src="storage/images/logo/logo.png" alt="Logo">
        <ul class="flex gap-3 w-1/4 items-center text-base">
            <li v-for="item in menuItems" class="hover:text-violet-300">
                <a :href="item.url">{{ item.title }}</a>
            </li>
        </ul>
    </div>
</nav>
</template>