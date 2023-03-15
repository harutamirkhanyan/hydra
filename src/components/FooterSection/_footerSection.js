import { ref } from 'vue';
import logo from '@/assets/svgs/logo.svg';
import facebook from '@/assets/svgs/facebook.svg';
import twitter from '@/assets/svgs/twitter.svg';
import linkedin from '@/assets/svgs/linkedin.svg';
import youtube from '@/assets/svgs/youtube.svg';
import instagram from '@/assets/svgs/instagram.svg';
import pinterest from '@/assets/svgs/pinterest.svg';
import vectorTwo from '@/assets/svgs/vectorEighteen.svg';
import vectorOne from '@/assets/svgs/vectorNineteen.svg';


export default {
  name: 'HyFooterSection',

  setup() {
    const navOne = ref([
      'ABOUT',
      'SERVICES',
      'TECHNOLOGIES',
      'HOW TO',
      'JOIN HYDRA'
    ]);

    const navTwo = ref([
      'F.A.Q',
      'SITEMAP',
      'CONDITIONS',
      'LICENSES'
    ]);

    const logos = ref([
      {
        id: 'facebook',
        src: facebook
      },
      {
        id: 'twitter',
        src: twitter

      },
      {
        id: 'linkedin',
        src: linkedin

      },
      {
        id: 'youtube',
        src: youtube

      },
      {
        id: 'instagram',
        src: instagram
      },
      {
        id: 'pinterest',
        src: pinterest

      },
    ])

    return {
      logo,
      navOne,
      navTwo,
      facebook,
      twitter,
      linkedin,
      youtube,
      instagram,
      pinterest,
      logos,
      vectorOne,
      vectorTwo

    };
  },
};