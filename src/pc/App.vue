<template>
  <div id="app">
    <Headers></Headers>
    <Bodys></Bodys>
    <Footers></Footers>
  </div>
</template>

<script>
import Headers from '../components/PC/Header'
import Bodys from '../components/PC/Body'
import Footers from '../components/PC/Footers'

export default {
  name: 'App',
  components: {
    Headers,
    Bodys,
    Footers
  },
  mounted () {
    // 因为要配置导入的swiper 所以在组件挂在进dom后创建script标签进行挂载swiper配置
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = 'js/swiper/userSwiper.js'
    document.body.appendChild(s)
  }
}
</script>

<style lang="less">
@import "../assets/css/globals.css";
</style>
