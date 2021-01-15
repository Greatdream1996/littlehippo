<template>
  <div>
    <div class="w">
      <div class="headerTop">
        <img src="../../assets/img/headers/headerLogo.png" />
        <span>主にコスプレ衣装・靴・道具などを販売しております。</span>
      </div>
    </div>
    <nav>
      <ul class="w">
        <li
          v-for="item in navBar"
          :key="item.title"
        ><a :href="item.link">{{item.title}}</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navBar: [
        {
          title: '店舗TOP',
          link: 'https://www.rakuten.co.jp/littlehippo'
        },
        {
          title: '商品一覧',
          link: 'https://search.rakuten.co.jp/search/mall/?sid=386375'
        },
        {
          title: '会社概要',
          link: 'https://www.rakuten.co.jp/littlehippo/info.html'
        },
        {
          title: '楽天市場',
          link: 'https://www.rakuten.co.jp/'
        },
        {
          title: 'お買物かご',
          link: 'https://basket.step.rakuten.co.jp/rms/mall/bs/cart/?shop_bid=386375'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.headerTop {
  display: flex;
  align-items: center;
  height: 72px;
  span {
    margin-left: 20px;
  }
}
nav {
  background-color: #be0747;
  ul {
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    a{color: white;}
  }
}
</style>
