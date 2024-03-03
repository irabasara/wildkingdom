import Swiper from 'swiper';
import Parallax from '../../node_modules/swiper/modules/parallax.mjs';
import Navigation from '../../node_modules/swiper/modules/navigation.min.mjs';

const heroSwiper = new Swiper('.hero-swiper', {
  modules: [Parallax, Navigation],
  parallax: true,
  sledesPerView: 1,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
});
