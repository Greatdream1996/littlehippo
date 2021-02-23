<template>
  <div class="w">
    <img src="~assets/img/body/子供用.png" alt="">
      <div class="Focusswiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in Focus1" :key="item.number">
              <a :href="ashref(item.number)">
                <img :src="asimglink(item.number)" alt="">
              </a>
              <p>{{item.price}}</p>
            </div>
        </div>
      </div>
    <img src="~assets/img/body/セット.png" alt="">
    <div class="Focusswiper2">
      <ul>
        <li v-for="item in Focus2" :key="item.number">
          <a :href="ashref(item.number)">
            <img :src="as2imglink(item.number)" alt="">
          </a>
          <p>{{item.price}}</p>
        </li>
      </ul>
    </div>
    <img src="~assets/img/body/靴.png" alt="">
    <div class="Focusswiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in Focus3" :key="item.number">
              <a :href="ashref(item.number)">
                <img :src="as3imglink(item.number)" alt="">
              </a>
              <p>{{item.price}}</p>
            </div>
         </div>
      </div>
    <img src="~assets/img/body/その他.png" alt="">
      <div class="Focusswiper2">
      <ul>
        <li v-for="item in Focus4" :key="item.number">
          <a :href="ashref(item.number)">
            <img :src="as4imglink(item.number)" alt="">
          </a>
          <p>{{item.price}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Focus1, Focus2, Focus3, Focus4 } from '@/assets/js/FocusData'
export default {
  data () {
    return {
      Focus1,
      Focus2,
      Focus3,
      Focus4
    }
  },
  methods: {
    asimglink (id) {
      return 'https://image.rakuten.co.jp/littlehippo/cabinet/08012768/08013034/' + id + '.jpg'
    },
    as2imglink (id) {
      return 'https://image.rakuten.co.jp/littlehippo/cabinet/08012768/08013447/' + id + '.jpg'
    },
    as3imglink (id) {
      return 'https://image.rakuten.co.jp/littlehippo/cabinet/08012768/08013453/' + id + '.jpg'
    },
    as4imglink (id) {
      return 'https://image.rakuten.co.jp/littlehippo/cabinet/08012768/08013457/' + id + '.jpg'
    },
    ashref (adress) {
      return 'https://item.rakuten.co.jp/littlehippo/' + adress
    }
  }
}
</script>
<style lang="less" scoped>
.Focusswiper-container{
  margin-bottom: 20px;
   width: 100%;
   overflow: hidden;
   a{
     display: block;
   }
   p{
     margin: 0;
     text-align: center;
     font-size: 36px;
     color: #f00000;
   }
}
.Focusswiper2{
  ul{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    a{
     display: block;
    }
    p{
    margin: 0;
     text-align: center;
     font-size: 36px;
     color: #f00000;
    }
  }
}
</style>
