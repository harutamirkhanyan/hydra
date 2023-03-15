<template lang="pug">
.hyContent
  .tech
    .tech__wrapper
      .tech__title TECHNOLOGIES & HARDWARE
      .tech__subTitle USED BY HYDRA VR.
      button.tech__button
    .tech__desktop(v-if="isDesktop")
      .tech__imgWrapper(v-for="item in imgs" :key="item.id")
        img.tech__img(:src='item.img' :alt='item.alt' loading='lazy')
    .tech__mobile(v-else)
      HyCarousel.tech__carousel(:items-to-show="1" :wrap-around="true"  ref="myCarousel")
        HySlide.tech__slide(v-for="item in imgs" :key="item.id")
           .tech__imgWrapper
              img.tech__img(:src='item.img' :alt='item.alt' loading='lazy')
        template.tech__btns(#addons)
          .tech__btnsWrapper
            button.tech__prev(@click="myCarousel.prev()")
            button.tech__next(@click="myCarousel.next()")
</template>

<script>
import { ref } from 'vue';
import { useMobileDetection } from '@/plugins/useDesktopDetection';
import techUnreal from '@/assets/svgs/techUnreal.svg';
import techUniti from '@/assets/svgs/techUniti.svg';
import techOculus from '@/assets/svgs/techOculus.svg';
import techVive from '@/assets/svgs/techVive.svg';

export default {
  name: 'HyTech',
  setup() {
    const isDesktop = useMobileDetection();
    const imgs = ref([
      {
        img: techUnreal,
        alt: 'Unreal',
        id: 1,
      },
      {
        img: techUniti,
        alt: 'Uniti',
        id: 2,
      },
      {
        img: techOculus,
        alt: 'Oculus',
        id: 3,
      },
      {
        img: techVive,
        alt: 'Vive',
        id: 4,
      },
    ]);

    const myCarousel = ref(null);

    return {
      techUnreal,
      techUniti,
      techOculus,
      techVive,
      imgs,
      myCarousel,
      isDesktop,
    };
  },
};
</script>
<style src="./_tech.scss" lang="scss"></style>
