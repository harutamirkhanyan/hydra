<template lang="pug">
.cSlider
  .cSlider__desktop(v-if="isDesktop")
    .cSlider__content(v-for="item in info" :key="item.id")
      .cSlider__logoWrapper
        img.cSlider__img(:src='item.img' loading='lazy' alt='alt')
      .cSlider__texts
        h2.cSlider__title {{item.title}}
        span.cSlider__text {{item.text}}
  .cSlider__mobile(v-else)
    HyCarousel.cSlider__carousel(:items-to-show="1" :wrap-around="true" ref="myCarousel")
      HySlide.cSlider__slide(v-for="item in info" :key="item.id")
        .cSlider__logoWrapper
          img.cSlider__img(:src='item.img' loading='lazy' alt='alt')
        .cSlider__texts
          h2.cSlider__title {{item.title}}
          span.cSlider__text {{item.text}}
      template.cSlider__btns(#addons)
        .cSlider__btnsWrapper
          button.cSlider__prev(@click="myCarousel.prev()")
          button.cSlider__next(@click="myCarousel.next()")
</template>
<script src="./_contactUsSlider.js" lang="js"></script>
<style src="./_contactUsSlider.scss" lang="scss"></style>
