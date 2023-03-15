<template lang="pug">
.hyContent
  footer.footerSection
    .footerSection__container
      .footerSection__logo
        img.footerSection__img(:src='logo' ct_data='image' ct_dataImg='smallImg' loading='lazy' alt='logo')
      ul.footerSection__navOne
        li.footerSection__navItem(v-for='item in navOne' :key='item.id') {{item}}
      ul.footerSection__navTwo
        li.footerSection__navItem(v-for='item in navTwo' :key='item.id') {{item}}
      .footerSection__social
        span.footerSection__socialDesc SOCIALIZE WITH HYDRA
        ul.footerSection__socialLogos
          li.footerSection__socialItem(v-for='item in logos' :key='item.id')
            img.footerSection__socialImg(:src='item.src' loading='lazy' alt='item.id')
        button.footerSection__btn BUILD YOUR WORLD
      .footerSection__vectorOne
        img.footerSection__vectorImg(:src='vectorOne' loading='lazy' alt='vectorOne')
      .footerSection__vectorTwo
        img.footerSection__vectorImg(:src='vectorTwo' loading='lazy' alt='vectorTwo')
    .footerSection__copyright
      span.footerSection__copyrightText 2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED 
      span.footerSection__copyrightMobile 2023 © HYDRA LANDING PAGE 
        br
        |BY ZINE. E. FALOUTI
        br
        |ALL RIGHTS RESERVED 
</template>

<script src="./_footerSection.js" lang="js"></script>
<style src="./_footerSection.scss" lang="scss"></style>
