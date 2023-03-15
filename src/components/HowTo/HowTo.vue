<template lang="pug">
.hyContent
  .howTo
    .howTo__descWrapper
      HyDescription(:title='titleForDescr' :subTitle='subTitleForDescr'  :text='textForDescr')
    .howTo__desktop(v-if="isDesktop")
      .howTo__contentWrapper(v-for="item in info" :key="item.id")
        span.howTo__item {{item.id}}
        .howTo__titleBlock
          .howTos__arrowWrapper
            img.howTos__img(:src='right' alt='arrow' loading='lazy')
          .howTo__title(v-html='item.title')
      .howTo__vector
        img.howTo__vectorImg(:src='howToVector' loading='lazy' alt='vector')
    .howTo__mobile(v-else)
      HyCarousel.howTo__carousel(:items-to-show="1" :wrap-around="true"  ref="myCarousel")
        HySlide.howTo__slide(v-for="item in info" :key="item.id")
          .howTo__contentWrapper
            span.howTo__item {{item.id}}
            .howTo__titleBlock
              .howTo__title(v-html='item.title')
        template.howTo__btns(#addons)
          .howTo__btnsWrapper
            button.howTo__prev(@click="myCarousel.prev()")
            button.howTo__next(@click="myCarousel.next()")
</template>

<script src="./_howTo.js" lang="js"></script>
<style src="./_howTo.scss" lang="scss"></style>
