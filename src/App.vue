<template lang="pug">
#main
  HyHeader
  HyContactUs
  HyAboutUs
  HyServicesSection
  HyTech
  HyHowTo
  HyFormJoin
  HyFooterSection
</template>

<script lang="js">
import HyHeader from './components/Header/Header.vue'
import HyContactUs from './components/ContactUs/ContactUs.vue'
import HyAboutUs from './components/AboutUs/AboutUs.vue'
import HyServicesSection from './components/ServicesSection/ServicesSection.vue'
import HyTech from './components/Tech/Tech.vue'
import HyHowTo from './components/HowTo/HowTo.vue'
import HyFormJoin from './components/FormJoin/FormJoin.vue'
import HyFooterSection from './components/FooterSection/FooterSection.vue'

export default {
  name: 'App',
  components: {
    HyHeader,
    HyContactUs,
    HyAboutUs,
    HyServicesSection,
    HyTech,
    HyHowTo,
    HyFormJoin,
    HyFooterSection

  }
}
</script>

<style></style>
