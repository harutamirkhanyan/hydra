import { createApp } from 'vue'
import { Carousel, Slide } from 'vue3-carousel';
import App from './App.vue'
import scrollTo from '@/plugins/scrollTo';
import './assets/scss/_main.scss'


const app = createApp(App);

// global function & components
app.use(scrollTo);
app.component('HyCarousel', Carousel)
app.component('HySlide', Slide)


app.mount('#app');
