<template>
  <div>
    <!-- Swiper -->
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img
            src="~open/img/bannerImg/1.jpg"
            alt=""
          ></div>
        <div class="swiper-slide"><img
            src="~open/img/bannerImg/2.jpg"
            alt=""
          ></div>
        <div class="swiper-slide"><img
            src="~open/img/bannerImg/3.jpg"
            alt=""
          ></div>
        <div class="swiper-slide"><img
            src="~open/img/bannerImg/4.jpg"
            alt=""
          ></div>
        <div class="swiper-slide"><img
            src="~open/img/bannerImg/5.jpg"
            alt=""
          ></div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
    </div>
    <div class="swiper-container gallery-thumbs">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img
            src="~open/img/bannerImg/1-1.jpg"
            alt=""
          ></div>
        <div class="swiper-slide"><img
            src="~open/img/bannerImg/2-2.jpg"
            alt=""
          ></div>
        <div class="swiper-slide"><img
            src="~open/img/bannerImg/3-3.jpg"
            alt=""
          ></div>
        <div class="swiper-slide"><img
            src="~open/img/bannerImg/1-1.jpg"
            alt=""
          ></div>
        <div class="swiper-slide"><img
            src="~open/img/bannerImg/1-1.jpg"
            alt=""
          ></div>
      </div>
    </div>
    <div class="w"><img class="autoImg" src="~assets/img/headers/linkSigns.jpg" alt=""></div>
    <div class="w"><img class="autoImg" src="~assets/img/headers/trade.jpg" alt=""></div>
  </div>
</template>
<script>
export default {
  mounted () {
    // 因为要配置导入的swiper 所以在组件挂在进dom后创建script标签进行挂载swiper配置
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = 'js/swiper/userSwiper.js'
    document.body.appendChild(s)
  }
}
</script>
<style lang="less" scoped>
.autoImg{
  max-width: 100%;
}
/* swiper 样式 */
.swiper-container {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.gallery-top {
  height: auto;
  max-width: 1400px;
}

.gallery-thumbs {
  max-width: 1400px;
  height: auto;
  box-sizing: border-box;
  padding: 10px 0;
}

.gallery-thumbs .swiper-slide {
  height: 100%;
  opacity: 0.4;
}

.gallery-thumbs .swiper-slide-thumb-active {
  opacity: 1;
}
.swiper-container img {
    max-width: 100%;
}
</style>
