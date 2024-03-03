import Swiper from 'swiper';
import Navigation from '../../node_modules/swiper/modules/navigation.min.mjs';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],

  sledesPerView: 1,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.quote-swiper-button-next',
    prevEl: '.quote-swiper-button-prev',
  },
});
