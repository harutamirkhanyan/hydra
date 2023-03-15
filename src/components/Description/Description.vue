<template lang="pug">
.description
  .description__left
    h3.description__title {{title}}
    .description__arrow
      span.description__subTitle {{subTitle}}
      .description__arrowWrapper
        img.description__img(:src='arrow' loading='lazy' alt='arrow')
  .description__right
    span.description__text.descr {{text}}
</template>

<script>
import arrow from '@/assets/svgs/arrowComponent.svg';
export default {
  name: 'HyDescription',
  setup() {
    return {
      arrow,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: false,
      default: '',
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
<style src="./_description.scss" lang="scss"></style>
