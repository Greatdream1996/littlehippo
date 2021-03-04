<template>
  <div>
    <div class="aside">
      <div class="title_top">
        <p>人気アイテム</p>
      </div>
      <div class="asideBox">
          <div class="Asideswiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in AsideBanner" :key=item><a :href='ashref(item)' ><img :src="asimglink(item)" alt=""></a></div>
            </div>
         </div>
      </div>
      <div class="asideSearch">
        <div class="left-form">
           <form id="ri-cmn-hdr-form" method="get" action="https://search.rakuten.co.jp/search/mall">
          <input type="hidden" name="sid" value="386375">
          <input type="hidden" name="_mp">
          <div class="dui-form">
            <div class="field">
                <div class="search"><label for="inshop-search" class="label -inside"></label>
                    <input type="text" class="input-left-text"
                      id="inshop-search" maxlength="2048" name="sitem" autocomplete="off" placeholder="キーワードから探す">
                      <input type="submit" title="キーワードから探す" class="search-panel-btn">
                </div>
            </div>
          </div>
        </form>
        </div>
        <ul class="keyword">
          <li v-for="item in keyword" :key="item.word"><a :href="item.link">{{item.word}}</a></li>
        </ul>
      </div>
      <div class="title">
        <p>コスプレ衣装</p>
      </div>
      <div class="listTitle" :class="{bgcolor:agyou.show}"
        @mouseover="agyou.show = true"
        @mouseleave="agyou.show = false"
      >
        <p>{{this.agyou.name}}</p>
         <transition name="fade">
            <ul v-show="agyou.show" class="rePositive">
              <li v-for="item in agyou.list" :key="item.name" class="listbox"><a :href="aslink(item.alink)">{{item.name}}</a></li>
            </ul>
         </transition>
      </div>
      <div class="listTitle" :class="{bgcolor:kagyou.show}"
        @mouseover="kagyou.show = true"
        @mouseleave="kagyou.show = false"
      >
        <p>{{this.kagyou.name}}</p>
         <transition name="fade">
            <ul v-show="kagyou.show" class="rePositive">
              <li v-for="item in kagyou.list"
                :key="item.name"
                class="listbox">
                <a :href="aslink(item.alink)">{{item.name}}</a></li>
            </ul>
         </transition>
      </div>
      <div class="listTitle" :class="{bgcolor:sagyou.show}"
        @mouseover="sagyou.show = true"
        @mouseleave="sagyou.show = false"
      >
        <p>{{this.sagyou.name}}</p>
         <transition name="fade">
            <ul v-show="sagyou.show" class="rePositive">
              <li v-for="item in sagyou.list"
                :key="item.name"
                class="listbox">
                <a :href="aslink(item.alink)">{{item.name}}</a></li>
            </ul>
         </transition>
      </div>
      <div class="listTitle" :class="{bgcolor:tagyou.show}"
        @mouseover="tagyou.show = true"
        @mouseleave="tagyou.show = false"
      >
        <p>{{this.tagyou.name}}</p>
         <transition name="fade">
            <ul v-show="tagyou.show" class="rePositive">
              <li v-for="item in tagyou.list"
                :key="item.name"
                class="listbox">
                <a :href="aslink(item.alink)">{{item.name}}</a></li>
            </ul>
         </transition>
      </div>
      <div class="listTitle" :class="{bgcolor:nagyou.show}"
        @mouseover="nagyou.show = true"
        @mouseleave="nagyou.show = false"
      >
        <p>{{this.nagyou.name}}</p>
         <transition name="fade">
            <ul v-show="nagyou.show" class="rePositive">
              <li v-for="item in nagyou.list"
                :key="item.name"
                class="listbox">
                <a :href="aslink(item.alink)">{{item.name}}</a></li>
            </ul>
         </transition>
      </div>
      <div class="listTitle" :class="{bgcolor:hagyou.show}"
        @mouseover="hagyou.show = true"
        @mouseleave="hagyou.show = false"
      >
        <p>{{this.hagyou.name}}</p>
         <transition name="fade">
            <ul v-show="hagyou.show" class="rePositive">
              <li v-for="item in hagyou.list"
                :key="item.name"
                class="listbox">
                <a :href="aslink(item.alink)">{{item.name}}</a></li>
            </ul>
         </transition>
      </div>
      <div class="listTitle" :class="{bgcolor:magyou.show}"
        @mouseover="magyou.show = true"
        @mouseleave="magyou.show = false"
      >
        <p>{{this.magyou.name}}</p>
         <transition name="fade">
            <ul v-show="magyou.show" class="rePositive">
              <li v-for="item in magyou.list"
                :key="item.name"
                class="listbox">
                <a :href="aslink(item.alink)">{{item.name}}</a></li>
            </ul>
         </transition>
      </div>
      <div class="listTitle" :class="{bgcolor:yagyous.show}"
        @mouseover="yagyous.show = true"
        @mouseleave="yagyous.show = false"
      >
        <p>{{this.yagyous.name}}</p>
         <transition name="fade">
            <ul v-show="yagyous.show" class="rePositive">
              <li v-for="item in yagyous.list"
                :key="item.name"
                class="listbox">
                <a :href="aslink(item.alink)">{{item.name}}</a></li>
            </ul>
         </transition>
      </div>
      <div class="listTitle" :class="{bgcolor:ragyou.show}"
        @mouseover="ragyou.show = true"
        @mouseleave="ragyou.show = false"
      >
        <p>{{this.ragyou.name}}</p>
         <transition name="fade">
            <ul v-show="ragyou.show" class="rePositive">
              <li v-for="item in ragyou.list"
                :key="item.name"
                class="listbox">
                <a :href="aslink(item.alink)">{{item.name}}</a></li>
            </ul>
         </transition>
      </div>
      <div class="listTitle" :class="{bgcolor:wagyou.show}"
        @mouseover="wagyou.show = true"
        @mouseleave="wagyou.show = false"
      >
        <p>{{this.wagyou.name}}</p>
         <transition name="fade">
            <ul v-show="wagyou.show" class="rePositive">
              <li v-for="item in wagyou.list"
                :key="item.name"
                class="listbox">
                <a :href="aslink(item.alink)">{{item.name}}</a></li>
            </ul>
         </transition>
      </div>
      <div class="listTitle" :class="{bgcolor:englishnum.show}"
        @mouseover="englishnum.show = true"
        @mouseleave="englishnum.show = false"
      >
        <p>{{this.englishnum.name}}</p>
         <transition name="fade">
            <ul v-show="englishnum.show" class="rePositive">
              <li v-for="item in englishnum.list"
                :key="item.name"
                class="listbox">
                <a :href="aslink(item.alink)">{{item.name}}</a></li>
            </ul>
         </transition>
      </div>
       <div class="title">
        <p>コスプレ用道具</p>
      </div>
      <div class="listTitle" :class="{bgcolor:shose.show}"
        @mouseover="shose.show = true"
        @mouseleave="shose.show = false"
      >
        <p>{{this.shose.name}}</p>
         <transition name="fade">
            <ul v-show="shose.show" class="rePositive">
              <li v-for="item in shose.list"
                :key="item.name"
                class="listbox">
                <a :href="aslink(item.alink)">{{item.name}}</a></li>
            </ul>
         </transition>
      </div>
      <div class="listTitle" :class="{bgcolor:others.show}"
        @mouseover="others.show = true"
        @mouseleave="others.show = false"
      >
        <p>{{this.others.name}}</p>
         <transition name="fade">
            <ul v-show="others.show" class="rePositive">
              <li v-for="item in others.list"
                :key="item.name"
                class="listbox">
                <a :href="aslink(item.alink)">{{item.name}}</a></li>
            </ul>
         </transition>
      </div>
       <div class="size">
         <a href="https://www.rakuten.ne.jp/gold/littlehippo/size.html"><p>SIZE GUIDE</p>
                <p>採寸方法はこちら </p></a>
      </div>
      <div class="qa">
        <a href="https://inquiry.my.rakuten.co.jp/shop/386375?ms=1200">お問い合わせ</a>
      </div>
      <div class="claelayout">
        <calendar :weekName="['月','火','水','木','金','土','日']" :rest="[[1,3,4,5,6,7],[4,5,6,7,8,9]]" :defaultRest="[0]"></calendar>
      </div>
      <div class="ejpreant">
          <img src="https://image.rakuten.co.jp/littlehippo/cabinet/imgrc0074379126.jpg" alt="" @click="eject()">
          <div v-if="ej" class="ej"><img src="https://image.rakuten.co.jp/littlehippo/cabinet/08012768/08013633/7.jpg" alt=""></div>
      </div>
    </div>
  </div>
</template>
<script>
import calendar from '../common/calendar'
import { AsideBanner, others, shose, wagyou, ragyou, yagyou, magyou, hagyou, nagyou, tagyou, sagyou, kagyou, agyou, keyword, yagyous, englishnum } from '@/assets/js/asideDate'
export default {
  data () {
    return {
      ej: false,
      AsideBanner,
      others,
      shose,
      wagyou,
      ragyou,
      yagyou,
      magyou,
      hagyou,
      nagyou,
      tagyou,
      sagyou,
      kagyou,
      agyou,
      yagyous,
      englishnum,
      keyword
    }
  },
  methods: {
    aslink (id) {
      return 'https://item.rakuten.co.jp/littlehippo/c/0000000' + id + '/'
    },
    asimglink (id) {
      return 'https://image.rakuten.co.jp/littlehippo/cabinet/08012768/08012815/' + id + '.jpg'
    },
    ashref (adress) {
      return 'https://item.rakuten.co.jp/littlehippo/' + adress
    },
    eject () {
      this.ej = !this.ej
    }
  },
  components: {
    calendar
  }
}
</script>
<style lang="less" scoped>
.ejpreant{
  position: relative;
}
.ej{
  position: absolute;
  top: 20%;
  left: 30%;
  z-index: 999;
}
p{
  margin: 0;
}
ul{
  margin: 0;
}
.keyword{
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  li{
    a{
      display: block;
      color: rgb(88, 88, 88);
    }
    margin: 5px;
    border: 1px solid rgb(173, 172, 172);
    border-radius: 10px;
    padding: 8px;
  }
}
.Asideswiper-container {
   max-width: 100%;
   overflow: hidden;
   a{
     display: block;
   }
    }
.aside {
  display: inline-block;
  width: 250px;
  height: 1000px;
  padding: 6px;
}
.claelayout{
  margin-top: 20px;
}
.title {
  height: 54px;
  line-height: 54px;
  text-align: center;
  color: white;
  font-size: 28px;
  background-color: #be0747;
  margin-bottom: 6px;
  margin-top:25px

}
.title_top{
  height: 54px;
  line-height: 54px;
  text-align: center;
  color: white;
  font-size: 28px;
  background-color: #be0747;
  margin-bottom: 6px;
}
.asideBox{
  width: 250px;
  height: 250px;
  background: brown;
  border-radius: 15px;
}
.listbox{
  min-height:45px;
  line-height: 45px;
}
.listbox:hover{
  background-color: rgba(0,0,0,0.1);
}
.listTitle{
  height: 50px;
  line-height: 50px;
  position: relative;
  border-bottom: solid 1px black;
  p{
    font-size: 24px;
    padding-left: 5px;
    letter-spacing: 3px;
  }
}
.rePositive{
  position:absolute;
  top: 50px;
  width: 246px;
  z-index: 3;
  background-color: #fff;
  border: solid 2px #ff6c00;
  li{
    border-bottom: solid 1px #ff6c00;
    a{
      display: block;
      padding-left: 5px;
      font-size: 14px;
      color: #be0747;
      font-weight: 700;
    }
  }
}
.bgcolor{
  color: #fff;
  background-color: #ff6c00;
}
.size{
  height: 82px;
  line-height: 41px;
  margin-top: 40px;
  background-color: #ff9727;
  text-align: center;
  a{
   display: block;
  }
  p{
    font-size: 20px;
    color: white;
  }
}
.qa{
  margin-top: 10px;
  height: 90px;
  line-height: 90px;
  text-align: center;
  background-color: #ff6c00;
  a{
    font-size: 24px;
    color: white;
  }
}
/**动画css */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.search-panel-btn {
    position: absolute;
    top: 5px;
    right: 2px;
    width: 30px;
    height: 25px;
    border: 0;
    background: url(https://www.rakuten.ne.jp/gold/auc-ecoloco/images/panel-menu/icon-search.png) no-repeat;
    background-position: center right;
    -webkit-background-size: 25px;
    background-size: 25px;
    z-index: 10;
    font-size: 0;
    outline: none !important;
}
.input-left-text {
    position: relative;
    width: 98% !important;
    padding: 10px 5px !important;
    border: 1px solid #bbb !important;
    border-radius: 5px !important;
}
.search {
    position: relative;
}
.asideSearch{
  display: none;
}
.left-form{
  margin-top: 25px;
width: 240px;
}
</style>
