
import { ref } from 'vue';
import { useMobileDetection } from '@/plugins/useDesktopDetection';
import HyDescription from '@/components/Description/Description.vue';
import howToVector from '@/assets/svgs/howToVector.svg';
import right from '@/assets/svgs/arrowRight.svg';

export default {
  name: 'HyTech',
  components: {
    HyDescription
  },
  setup() {
    const titleForDescr = ref('HOW WE BUILD');
    const subTitleForDescr = ref('WITH HYDRA VR?');
    const textForDescr = ref(
      'Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'
    );

    const info = ref([
      {
        id: '01',
        title: '3D Conception <br/> Design',
      },
      {
        id: '02',
        title: 'Interaction <br/> Design',
      },
      {
        title: 'VR World <br/> User Testing',
        id: '03',
      },
      {
        title: 'Hydra VR <br/> Deploy',
        id: '04',
      },
    ]);
    const isDesktop= useMobileDetection();

    const myCarousel = ref(null);

    return {
      titleForDescr,
      subTitleForDescr,
      textForDescr,
      howToVector,
      info,
      right,
      myCarousel,
      isDesktop
    };
  },
};