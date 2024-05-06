<script setup>
import { Link } from '@inertiajs/vue3'
import Navigation from '@/Components/Navigation/Navigation.vue';
</script>

<template>
  <div class="relative">
    <Navigation></Navigation>
  </div>
  <slot />
</template>