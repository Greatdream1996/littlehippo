<template>
  <div class="layout w">
    <Aside></Aside>
    <div class="stroelayout">
      <Popular></Popular>
      <News></News>
    </div>
  </div>
</template>

<script>
import Aside from './bodys/Aside'
import News from './bodys/News'
import Popular from './bodys/Popular'
export default {
  components: {
    Aside,
    News,
    Popular
  }
}
</script>

<style lang="less" scoped>
.layout{
 display: flex;
}
.stroelayout{
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 5px;
}
</style>
