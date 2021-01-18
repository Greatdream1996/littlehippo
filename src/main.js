import Vue from 'vue'
import App from './App.vue'
import './assets/css/globals.css'
import SwiperMoudle, { Navigation, Pagination, EffectFade, Autoplay, Controller, Thumbs } from 'swiper'
SwiperMoudle.use([Navigation, Pagination, EffectFade, Autoplay, Controller, Thumbs])
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
