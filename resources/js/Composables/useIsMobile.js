import { 
    ref,
    computed,
    onMounted,
    onUnmounted,
 } from 'vue';

export function useIsMobile(mobileTabletSize = 1080) {
    const screenWidth = ref(window.innerWidth);

    const isMobile = computed(() =>
         screenWidth.value <= mobileTabletSize
    );

    const updateScreenWidth = () => {
        screenWidth.value = window.innerWidth;
    }

    onMounted(() => { 
        window.addEventListener('resize', updateScreenWidth)
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateScreenWidth);
    });

    return isMobile;
};