<template lang="pug">
.hyContent
  .contactUs 
    .contactUs__left
      h1.contactUs__title Dive 
        span.contactUs__titleText Into The Depths 
        br
        span.contactUs__titleText Of 
        |Virtual Reality
      span.contactUs__text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae.
      .contactUs__btns
        button.contactUs__btn BUILD YOUR WORLD
        .contactUs__arrowWrapper
          img.contactUs__arrowLogo(:src='arrow' loading='lazy' alt='arrowRight')
    .contactUs__right
      .contactUs__frameWrapper
        img.contactUs__frame(:src='contactUsFrame' loading='lazy' alt='contactUsFrame')
        .contactUs__imgWrapper
          img.contactUs__img(:src='contactUs' loading='lazy' alt='contactUs')
      .contactUs__vectorOne
        img.contactUs__vectorImg(:src='vectorOne' loading='lazy' alt='vectorOne')
      .contactUs__vectorTwo
        img.contactUs__vectorImg(:src='vectorTwo' loading='lazy' alt='vectorTwo')
      .contactUs__vectorThree
        img.contactUs__vectorImg(:src='vectorThree' loading='lazy' alt='vectorThree')
    .contactUs__vectorFour
      img.contactUs__vectorImg(:src='vectorFour' loading='lazy' alt='vectorFour')
  HyContactUsSlider
</template>

<script>
import HyContactUsSlider from '@/components/ContactUsSlider/ContactUsSlider.vue';
import arrow from '@/assets/svgs/arrowRight.svg';
import contactUsFrame from '@/assets/img/contactUsFrame.png';
import contactUs from '@/assets/img/contactUs.png';
import vectorOne from '@/assets/svgs/vectorOne.svg';
import vectorTwo from '@/assets/svgs/vectorTwo.svg';
import vectorThree from '@/assets/svgs/vectorThree.svg';
import vectorFour from '@/assets/svgs/vectorFour.svg';

export default {
  name: 'HyContactUs',
  components: { HyContactUsSlider },
  setup() {
    return {
      arrow,
      contactUs,
      contactUsFrame,
      vectorOne,
      vectorTwo,
      vectorThree,
      vectorFour,
    };
  },
};
</script>
<style src="./_contactUs.scss" lang="scss"></style>
