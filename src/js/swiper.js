import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  sledesPerView: 1,
  spaceBetween: 10,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.quote-swiper-button-next',
    prevEl: '.quote-swiper-button-prev',
  },
});

// const buttonNextEl = document.querySelector('.swiper-button-next');
// const buttonPrevEl = document.querySelector('.swiper-button-prev');
const QuoteButtonNextEl = document.querySelector('.quote-swiper-button-next');
const QuoteButtonPrevEl = document.querySelector('.quote-swiper-button-prev');

QuoteButtonNextEl.addEventListener('click', () => {
  swiper.slideNext();
  console.log('object');
});

QuoteButtonPrevEl.addEventListener('click', () => {
  swiper.slideNext();
  console.log('object');
});
