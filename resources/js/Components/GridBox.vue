<script setup>
import { ref, onMounted } from 'vue';

defineProps(['parentClass']);

const boxCount = 99;
const boxes = ref([]);
let allBoxesWhite = false;

const updateBoxBorders = (event) => {
    const box = event.target;
    const countWhiteBoxes = document.querySelectorAll('.box.border-white').length;

    if (countWhiteBoxes === boxes.value.length) {
        allBoxesWhite = true;
    } else if (countWhiteBoxes === 0) {
        allBoxesWhite = false;
    }

    box.classList.remove('border-dark-purple');
    box.classList.add('border-white');

    if (allBoxesWhite) {
        box.classList.remove('border-white');
        box.classList.add('border-dark-purple');
    }
};

onMounted(() => {
    boxes.value = Array.from(document.querySelectorAll('.box'));
});
</script>

<template>
    <div :class="parentClass">
        <div class="box-container mt-16 flex flex-wrap gap-3">
            <span 
                class="box"
                v-for="index of boxCount"
                :key="index"
                @mouseenter="updateBoxBorders"
                ></span>
        </div>
    </div>
</template>

<style>
.box {
    @apply h-4 w-4 border-dark-purple border-2 rounded hover:border-white inline-block;
}
</style>