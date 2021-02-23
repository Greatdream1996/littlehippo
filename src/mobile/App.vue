<template>
  <div id="app">
    <mHeader></mHeader>
    <mBody></mBody>
    <mfooter></mfooter>
  </div>
</template>
<script>
import mHeader from '@/components/Mobile/mHeader'
import mBody from '@/components/Mobile/mBody'
import mfooter from '@/components/Mobile/mfooter'
export default {
  data () {
    return {
    }
  },
  components: {
    mHeader,
    mBody,
    mfooter
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
