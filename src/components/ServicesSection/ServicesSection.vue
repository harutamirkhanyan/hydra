<template lang="pug">
.hyContent
  .servicesSection
    .servicesSection__descWrapper
      HyDescription(:title='titleForDescr' :subTitle='subTitleForDescr' :text='textForDescr')
    .servicesSection__desktop(v-if="isDesktop")
      .servicesSection__carousel
        .servicesSection__slide(v-for="item in info" :key="item.id")
          .servicesSection__imgBg
            .servicesSection__imgWrapper
              img.servicesSection__img(:src='item.img' loading='lazy' alt='alt')
          h3.servicesSection__title {{item.title}}
          span.servicesSection__text {{item.text}}
          button.servicesSection__btn {{item.btnText}}
      .servicesSection__vector
        img.servicesSection__vectorImg(:src='vector' loading='lazy' alt='vector')
    .servicesSection__mobile(v-else)
      HyCarousel.servicesSection__carousel(:items-to-show="1" :wrap-around="true"  ref="myCarousel")
        HySlide.servicesSection__slide(v-for="item in info" :key="item.id")
          .servicesSection__imgBg
            .servicesSection__imgWrapper
              img.servicesSection__img(:src='item.img' loading='lazy' alt='alt')
          h3.servicesSection__title {{item.title}}
          span.servicesSection__text {{item.text}}
          button.servicesSection__btn {{item.btnText}}
        template.servicesSection__btns(#addons)
          .servicesSection__btnsWrapper
            button.servicesSection__prev(@click="myCarousel.prev()")
            button.servicesSection__next(@click="myCarousel.next()")
</template>

<script src="./_servicesSection.js"></script>
<style src="./_servicesSection.scss" lang="scss"></style>
