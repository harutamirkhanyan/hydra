import { ref } from 'vue';
import { useMobileDetection } from '@/plugins/useDesktopDetection';
import 'vue3-carousel/dist/carousel.css';
import HyDescription from '@/components/Description/Description.vue';
import servicesOne from '@/assets/img/servicesOne.png';
import servicesTwo from '@/assets/img/servicesTwo.png';
import servicesThree from '@/assets/img/servicesThree.png';
import servicesFour from '@/assets/img/servicesFour.png';
import vector from '@/assets/svgs/vectorServices.svg';

export default {
  name: 'HyCervices',
  components: {
    HyDescription
  },

  setup() {
    const isDesktop = useMobileDetection();
    const myCarousel = ref(null);
    const titleForDescr = ref('HOW WE BUILD');
    const subTitleForDescr = ref('WITH HYDRA VR?');
    const textForDescr = ref(
      'Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'
    );

    const info = ref([
      {
        id: 1,
        img: servicesOne,
        title: 'SIMULATION',
        text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
        btnText: 'TRY IT NOW',
      },
      {
        id: 2,
        img: servicesTwo,
        title: 'EDUCATION',
        text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
        btnText: 'TRY IT NOW',
      },
      {
        id: 3,
        img: servicesThree,
        title: 'SELF-CARE',
        text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
        btnText: 'TRY IT NOW',
      },
      {
        id: 4,
        img: servicesFour,
        title: 'OUTDOOR',
        text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
        btnText: 'TRY IT NOW',
      },
    ]);

    return {
      titleForDescr,
      subTitleForDescr,
      textForDescr,
      info,
      servicesOne,
      servicesTwo,
      servicesThree,
      servicesFour,
      myCarousel,
      vector,
      isDesktop
    };

  },
};