<template>
  <div id="app">
    <Headers></Headers>
    <Bodys></Bodys>
    <Footers></Footers>
  </div>
</template>

<script>
import Headers from './components/Header'
import Bodys from './components/Body'
import Footers from './components/Footers'

export default {
  name: 'App',
  components: {
    Headers,
    Bodys,
    Footers
  }
}
</script>

<style lang="less">
@import "./assets/css/globals.css";
</style>
