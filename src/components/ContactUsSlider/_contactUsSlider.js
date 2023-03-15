import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { useMobileDetection } from '@/plugins/useDesktopDetection';
import location from '@/assets/svgs/location.svg';
import phone from '@/assets/svgs/phone.svg';
import message from '@/assets/svgs/message.svg';


export default {
  name: 'HyContactUsSlider',


  setup() {
    const isDesktop= useMobileDetection();
    const myCarousel = ref(null)
    const info = ref([
      {
        id: 1,
        img: location,
        title: 'Pay Us a Visit',
        text: 'Union St, Seattle, WA 98101, United States'
      },
      {
        id: 2,
        img: phone,
        title: 'Give Us a Call',
        text: '(110) 1111-1010'
      },
      {
        id: 3,
        img: message,
        title: 'Send Us a Message',
        text: 'Contact@HydraVTech.com'
      }
    ]);

    return {
      info,
      location,
      phone,
      message,
      myCarousel,
      isDesktop
    };
  },
};