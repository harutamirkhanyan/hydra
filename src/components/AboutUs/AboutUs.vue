<template lang="pug">
.hyContent
  .aboutUs
    .aboutUs__descWrapper
      HyDescription(:title='titleForDescr' :subTitle='subTitleForDescr'  :text='textForDescr')
    .aboutUs__content
      .aboutUs__imgWrapper
        img.aboutUs__img(:src='aboutUs' loading='lazy' alt='aboutUs')
      .aboutUs__right
        .aboutUs__title {{title}}
        .aboutUs__subTitle {{subTitle}}
        .aboutUs__text {{text}}
        button.aboutUs__btn LET’S GET IN TOUCH
      .aboutUs__vectorSeven
        img.aboutUs__vectorImg(:src='vectorSeven' loading='lazy' alt='vectorFour')
      .aboutUs__vectorEignt
        img.aboutUs__vectorImg(:src='vectorEight' loading='lazy' alt='vectorFour')
</template>

<script>
import { ref } from 'vue';
import HyDescription from '@/components/Description/Description.vue';
import aboutUs from '@/assets/img/aboutUs.png';
import vectorSeven from '@/assets/svgs/vectorSeven.svg';
import vectorEight from '@/assets/svgs/vectorEight.svg';

export default {
  name: 'HyAboutUs',
  components: {
    HyDescription,
  },
  setup() {
    const titleForDescr = ref('INTRODUCTION');
    const subTitleForDescr = ref('TO HYDRA VR');
    const textForDescr = ref(
      'Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'
    );
    const title = ref('ABOUT');
    const subTitle = ref('HYDRA VR');
    const text = ref(
      'Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n tempor.'
    );

    return {
      titleForDescr,
      subTitleForDescr,
      textForDescr,
      title,
      subTitle,
      text,
      aboutUs,
      vectorSeven,
      vectorEight
    };
  },
};
</script>
<style src="./_aboutUs.scss" lang="scss"></style>
