<template>
  <div>
    <div class="footer">
    <p>全国(沖縄・離島・一部地域を除く)</p>
    <p class="lightred">配送無料</p>
    <p>沖縄・離島・一部地域は追加送料が600円となります.</p>
    <div>
      <form action="https://search.rakuten.co.jp/search/mall">
        <input type="hidden" name="sid" value="386375">
        <input type="hidden" name="_mp">
        <div class="search">
        <input class="inputout" type="text" maxlength="2048" name="sitem" autocomplete="off" placeholder="キーワードから探す">
        <input type="submit" title="キーワードから探す" class="search-panel-btn">
        </div>
      </form>
    </div>
    <p>Copyright c 2020-2021 Little Hippo All Rights Reserved</p>
  </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.footer{
  padding-top: .866667rem;
  height: 5rem;
  width: 100%;
  text-align: center;
  background-color: #fff6ef;
  p{
    font-size: .32rem;
  }
  .lightred{
    font-size: .453333rem;
    font-weight: 700;
    color: red;
  }}
  .search{
    position: relative;
    height: 1rem;
  }
  .form{
    height: 100%;
  }
  .inputout{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 7rem;
    height: 1rem;
    border-radius: .5rem;
    border: 0;
    outline: 0;
  }
  .search-panel-btn {
    position: absolute;
    // top: .166667rem;
    right: 1.7rem;
    width: 1rem;
    height: 1rem;
    border: 0;
    background: url(https://www.rakuten.ne.jp/gold/auc-ecoloco/images/panel-menu/icon-search.png) no-repeat;
    background-position: center right;
    -webkit-background-size: 25px;
    background-size: 25px;
    z-index: 10;
    font-size: 0;
    outline: none !important;
}
</style>
