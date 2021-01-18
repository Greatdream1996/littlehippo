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