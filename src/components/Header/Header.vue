<template lang="pug">
.hyContent
  header.header
    .header__logo
      span.header__logoWrapper
        img.header__logoImg(:src='logo' loading='lazy' alt='logo')
      span.header__logoWrapper.header__logoWrapper--small
         img.header__logoImg(:src='logoText'  loading='lazy' alt='logoText')
    nav.header__menu
      ul.header__nav
        li.header__navItem(v-for="item in navItems" :key="item.id" @click="$scrollTo('.'+item.id)") {{item.text}}
    .header__right
      .header__btns
        button.header__btn(@click="$scrollTo('.contactUs')") CONTACT US
        button.header__btnGradient(@click="$scrollTo('.formJoin')") JOIN HYDRA
      .header__burger
        span.header__burgerWrapper
          img.header__logoImg(:src='burgerLogo' loading='lazy' alt='logo')
</template>

<script>
import { ref } from 'vue';
import logo from '@/assets/svgs/logo.svg';
import logoText from '@/assets/svgs/logoText.svg';
import burgerLogo from '@/assets/svgs/burgerLogo.svg';
export default {
  name: 'HyHeader',

  setup() {
    const navItems = ref([
      { text: 'ABOUT', id: 'aboutUs' },
      { text: 'SERVICES', id: 'servicesSection' },
      { text: 'TECHNOLOGIES', id: 'tech' },
      { text: 'HOW TO', id: 'howTo' },
    ]);

    return {
      logo,
      logoText,
      navItems,
      burgerLogo,
    };
  },
};
</script>
<style src="./_header.scss" lang="scss"></style>
