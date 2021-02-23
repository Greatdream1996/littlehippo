var galleryThumbs = new Swiper('.gallery-thumbs', {
  speed: 1000,
  spaceBetween: 10,
  slidesPerView: 5,
  autoplay: {
    delay: 3000, //1秒切换一次
    disableOnInteraction: false,
  },
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 3000, //1秒切换一次
    disableOnInteraction: false,
  },
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
var swiper = new Swiper('.swiper-container3d', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  speed: 800,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
var AsideSwiper = new Swiper('.Asideswiper-container', {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
var Focusswiper = new Swiper('.Focusswiper-container', {
  speed: 800,
  slidesPerView: 5,
  centeredSlides: true,
  centeredSlidesBounds: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});