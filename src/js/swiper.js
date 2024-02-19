import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: [0, 0, -400],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
  direction: 'horizontal',
  sledesPerView: 4,
  spaceBetween: 10,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// const swiperEl = document.querySelector('.swiper-wrapper');
const buttonNextEl = document.querySelector('.swiper-button-next');
const buttonPrevEl = document.querySelector('.swiper-button-prev');

buttonNextEl.addEventListener('click', () => {
  swiper.slideNext();
  console.log('object');
});

buttonPrevEl.addEventListener('click', () => {
  swiper.slideNext();
  console.log('object');
});
