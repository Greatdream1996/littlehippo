<template>
  <div>
    <!-- Swiper -->
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banner" :key="item">
          <a :href="asLink(item)">
          <img
            :src="imgLink(index+1)"
            alt=""
          >
          </a>
        </div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
    </div>
    <div class="swiper-container gallery-thumbs">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in littleBanner" :key="item">
          <img
            :src="imgLink(item)"
            alt=""
          >
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import { banner, littleBanner } from '@/assets/js/bannerData'
export default {
  data () {
    return {
      banner,
      littleBanner
    }
  },
  methods: {
    imgLink (id) {
      return 'https://image.rakuten.co.jp/littlehippo/cabinet/08012768/08013633/' + id + '.jpg'
    },
    asLink (id) {
      if (id.length > 4) {
        return id
      }
      return 'https://item.rakuten.co.jp/littlehippo/c/0000000' + id
    },
    localimg (id) {
      return '~open/img/bannerImg/' + id + ''
    }
  }
}
</script>
<style lang="less" scoped>

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
