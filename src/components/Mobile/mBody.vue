<template>
  <div class="mbody">
    <div class="titlebar"><img src="~assets/img/body/オススメ新着情報.png" alt=""></div>
    <ul class="newPopular">
      <li v-for="item in newPopular" :key="item"><a :href="ashref(item)"><img :src="newasimglink(item)" alt=""></a></li>
    </ul>
    <div class="titlebar"><img src="~assets/img/body/人気商品.png" alt=""></div>
    <ul class="Popular">
      <li v-for="item in popular" :key="item.number"><a :href="ashref(item.number)"><img :src="asimglink(item.number)" alt=""></a><p>{{item.price}}</p></li>
    </ul>
    <div class="titlebar"><img src="~assets/img/body/子供用.png" alt=""></div>
    <ul class="Popular">
      <li v-for="item in reduceFocus1" :key="item.number"><a :href="ashref(item.number)"><img :src="asFocus1(item.number)" alt=""></a><p>{{item.price}}</p></li>
    </ul>
    <div class="titlebar"><img src="~assets/img/body/セット.png" alt=""></div>
    <ul class="Popular">
      <li v-for="item in reduceFocus2" :key="item.number"><a :href="ashref(item.number)"><img :src="asFocus2(item.number)" alt=""></a><p>{{item.price}}</p></li>
    </ul>
    <div class="titlebar"><img src="~assets/img/body/靴.png" alt=""></div>
    <ul class="Popular">
      <li v-for="item in reduceFocus3" :key="item.number"><a :href="ashref(item.number)"><img :src="asFocus3(item.number)" alt=""></a><p>{{item.price}}</p></li>
    </ul>
    <div class="titlebar"><img src="~assets/img/body/その他.png" alt=""></div>
    <ul class="Popular">
      <li v-for="item in reduceFocus4" :key="item.number"><a :href="ashref(item.number)"><img :src="asFocus4(item.number)" alt=""></a><p>{{item.price}}</p></li>
    </ul>
  </div>
</template>
<script>
import { newPopular, popular } from '@/assets/js/newPopularData'
import { Focus1, Focus2, Focus3, Focus4 } from '@/assets/js/FocusData'
export default {
  data () {
    return {
      newPopular,
      popular,
      Focus1,
      Focus2,
      Focus3,
      Focus4
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
    },
    asFocus1 (id) {
      return 'https://image.rakuten.co.jp/littlehippo/cabinet/08012768/08013034/' + id + '.jpg'
    },
    asFocus2 (id) {
      return 'https://image.rakuten.co.jp/littlehippo/cabinet/08012768/08013447/' + id + '.jpg'
    },
    asFocus3 (id) {
      return 'https://image.rakuten.co.jp/littlehippo/cabinet/08012768/08013453/' + id + '.jpg'
    },
    asFocus4 (id) {
      return 'https://image.rakuten.co.jp/littlehippo/cabinet/08012768/08013457/' + id + '.jpg'
    }
  },
  computed: {
    reduceFocus1 () {
      return this.Focus1.slice(0, this.Focus1.length - 2)
    },
    reduceFocus2 () {
      return this.Focus2.slice(0, this.Focus2.length - 1)
    },
    reduceFocus3 () {
      return this.Focus3.slice(0, this.Focus3.length - 1)
    },
    reduceFocus4 () {
      return this.Focus4.slice(0, this.Focus4.length - 1)
    }
  }
}
</script>
<style lang="less" scoped>
.titlebar{
  height: .533333rem;
}
img{
  width: 100%;
  vertical-align: top;
}
.newPopular{
  display: flex;
  justify-content: space-between;
  li{
    margin-top: .066667rem;
    border: 1px solid burlywood;
  }
}
.Popular{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li{
    width: 22%;
    margin: .133333rem;
    text-align: center;
    p{
      margin: 5px 0 0 0;
      font-size:.213333rem ;
      color: #e70000;
    }
  }
}
</style>
