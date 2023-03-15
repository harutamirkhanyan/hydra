import { ref, onMounted, onUnmounted } from 'vue';

export const isDesektop = ref(window.innerWidth >= 1024);

const handleResize = () => {
  isDesektop.value = window.innerWidth >= 1024;
};

export const useMobileDetection = () => {
  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  return isDesektop;
};
