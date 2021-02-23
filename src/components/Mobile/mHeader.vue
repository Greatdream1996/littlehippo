<template>
  <div>
    <div class="topnav">
      <img class="logo" src="~assets/img/headers/headerLogo.png" alt="">
      <p>主にコスプレ衣装・靴・道具などを販売しております。</p>
    </div>
    <nav>
      <ul>
        <li
          v-for="item in navBar"
          :key="item.title"
        ><a :href="item.link">{{item.title}}</a></li>
      </ul>
    </nav>
    <Banner></Banner>
    <div class="titlebar"><a href=""><img src="~assets/img/headers/linkSigns.jpg" alt=""></a></div>
  </div>
</template>
<script>
import { navBar } from '@/assets/js/topData'
import Banner from 'components/PC/headers/Banner'
export default {
  data () {
    return {
      navBar
    }
  },
  components: {
    Banner
  }
}
</script>
<style lang="less" scoped>
.topnav{
  display: flex;
  height: .52rem;
  line-height: .52rem;
  padding: .08rem .08rem;
  .logo{
    width: 2.333333rem;
    vertical-align: bottom;
  }
  p{
    margin: 0;
    padding-left: .2rem;
    font-size: 0.2rem;
  }
}
nav {
  background-color: #a60000;
  padding: 0 .066667rem;
  ul {
    height: .533333rem;
    line-height: .533333rem;
    display: flex;
    justify-content: space-between;
    font-size: .32rem;
    a{color: white;}
  }
}
.titlebar{
  a{
    display: block;
  }
  img{
    width: 100%;
  }
}
</style>
