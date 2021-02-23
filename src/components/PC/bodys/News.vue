<template>
<div>
    <div>
      <img src="~assets/img/body/New新着情報.png" alt="">
    </div>
    <ul class="newItem">
      <li v-for="item in newGoods" :key="item.number">
        <a :href="ashref(item.number)"><img :src="asimglink(item.number)" alt=""></a>
        <p>{{item.article}}</p>
        <span>{{item.price}}</span>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newGoods: [
        {
          number: 'hs2137',
          article: '鬼滅の刃 きめつ 鬼殺隊 霞柱 時透無一郎 隊服 羽織 コスプレ衣装 cosplay コスチューム 人気 コス 花見 花火大会 お盆 月見 演出 イベント ハロウィン クリスマス サンタ 文化祭 学園祭 忘年会 宴会 パーティー お祭り 仮装 変装',
          price: '9,800円'
        },
        {
          number: 'hs2110',
          article: '鬼滅の刃 きめつ 錆兎 さびと 羽織 コスプレ衣装 cosplay コスチューム コス ハロウィン クリスマス サンタ 文化祭 学園祭 イベント 忘年会 宴会 パーティー お祭り 仮装 変装「マスク付き」',
          price: '11,780円'
        },
        {
          number: 'hs2115',
          article: '鬼滅の刃 きめつ 宇髄天元 鬼殺隊 音柱 隊服 羽織 コスプレ衣装 cosplay コスチューム コス ハロウィン クリスマス サンタ 文化祭 学園祭 イベント 忘年会 宴会 パーティー お祭り 仮装 変装',
          price: '10,080円'
        },
        {
          number: 'hs2122',
          article: '鬼滅の刃 きめつ 鬼舞辻無惨 鬼 和服 着物 コスプレ衣装 cosplay コスチューム 人気 お洒落 コス ハロウィン クリスマス サンタ 文化祭 学園祭 イベント 忘年会 宴会 パーティー お祭り 仮装 変装',
          price: '12,890円'
        },
        {
          number: 'hs2123',
          article: '鬼滅の刃 きめつ 黒死牟 十二鬼月 上弦 羽織 コスプレ衣装 cosplay コスチューム 人気 お洒落 コス ハロウィン クリスマス サンタ 文化祭 学園祭 イベント 忘年会 宴会 パーティー お祭り 仮装 変装',
          price: '10,080円'
        },
        {
          number: 'hs2124',
          article: '鬼滅の刃 きめつ 鬼舞辻無惨 鬼 コスプレ衣装 cosplay コスチューム 人気 お洒落 コス ハロウィン クリスマス サンタ 文化祭 学園祭 イベント 忘年会 宴会 パーティー お祭り 仮装 変装',
          price: '11,890円'
        },
        {
          number: 'hs2127',
          article: '鬼滅の刃 きめつ 鬼殺隊 当主家 産屋敷耀哉 羽織 コスプレ衣装 cosplay コスチューム 人気 コス ハロウィン クリスマス サンタ 文化祭 学園祭 演出 イベント 忘年会 宴会 パーティー お祭り 仮装 変装',
          price: '10,980円'
        },
        {
          number: 'hs2134',
          article: '鬼滅の刃 きめつ 子供用 鬼殺隊 蛇柱 伊黒小芭内 隊服 羽織 子供版 キッズ コスプレ衣装 cosplay コスチューム 人気 コス 成人の日 子供の日 花見 花火大会 お盆 月見 演出 イベント ハロウィン クリスマス サンタ 文化祭 学園祭 パーティー お祭り 仮装 変装「子供用」',
          price: '9,390円'
        }
      ]
    }
  },
  methods: {
    asimglink (id) {
      return 'https://image.rakuten.co.jp/littlehippo/cabinet/08012768/08012978/' + id + '.jpg'
    },
    ashref (adress) {
      return 'https://item.rakuten.co.jp/littlehippo/' + adress
    }
  }
}
</script>
<style lang="less" scoped>
.newItem{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li{
    width: 270px;
    height: 350px;
    background-color: rgb(143, 9, 9);
    margin-bottom: 100px;
    a{
      display: block;
    }
    p{
      margin: 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
       -webkit-box-orient: vertical;
    }
    span{
      display: block;
      margin-top: 10px;
      font-size: 24px;
      color: #f00000;
      text-align: center;
    }
  }
}
</style>
