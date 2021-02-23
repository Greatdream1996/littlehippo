<template>
  <div>
    <div class="w">
      <div class="headerTop">
        <img src="~assets/img/headers/headerLogo.png" />
        <span>主にコスプレ衣装・靴・道具などを販売しております。</span>
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
import { navBar } from '@/assets/js/topData'
export default {
  data () {
    return {
      navBar
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
  background-color: #a60000;
  ul {
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    a{color: white;}
  }
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
.left-form{
margin-left: 200px;
width: 450px;
}
</style>
