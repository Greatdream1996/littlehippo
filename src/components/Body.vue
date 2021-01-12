<template>
  <div>
    <Aside></Aside>
    <News></News>
    <Popular></Popular>
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

</style>
