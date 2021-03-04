<template>
  <div class="popular">
    <div class="popularImg"><img src="~assets/img/body/人気商品.png" alt=""></div>
    <ul class="popularItem">
      <li v-for="item in popular" :key="item.number"><a :href="ashref(item.number)"><img :src="asimglink(item.number)" alt=""></a><p class="price">{{item.price}}</p></li>
    </ul>
    <div><img src="~assets/img/body/オススメ新着情報.png" alt=""></div>
    <div>
      <div class="swiper-container3d">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in newPopular" :key="item"><a :href="ashref(item)"><img :src="newasimglink(item)" alt=""></a></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { popular, newPopular } from '@/assets/js/newPopularData'
export default {
  data () {
    return {
      popular,
      newPopular
    }
  },
  methods: {
    asimglink (id) {
      return 'https://image.rakuten.co.jp/littlehippo/cabinet/08012768/08012770/' + id + '.jpg'
    },
    ashref (adress) {
      return 'https://item.rakuten.co.jp/littlehippo/' + adress
    },
    newasimglink (id) {
      return 'https://image.rakuten.co.jp/littlehippo/cabinet/08012768/08012956/' + id + '.jpg'
    }
  }
}
</script>
<style lang="less" scoped>
p{
  margin: 0;
}
.popularImg{
  padding-bottom: 20px;
}
.popularItem{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li{
    width: 270px;
    height: 350px;
    text-align: center;
    img{
      width: 100%;
    }
    a{
      display: block;
    }
  }
}
.swiper-container3d {
      width: 1130px;
      padding-top: 50px;
      padding-bottom: 50px;
      overflow: hidden;
    }
    .swiper-slide {
      background-color: cadetblue;
      background-size: cover;
      width: 270px;
      height: 320px;

    }
.price{
  margin-top: 15px;
  font-size: 30px;
  color: #e70000;
    }
.swiper-wrapper{
  width: 1130px;
}
</style>
