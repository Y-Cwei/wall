<template>
  <div id="app">
    <router-view></router-view>
    <TabbarIndex></TabbarIndex>
  </div>
</template>
<script>
import TabbarIndex from 'components/tabbar/Index'
export default {
  name: 'App',
  components: {
    TabbarIndex
  }
}
</script>
<style src="./assets/css/reset.css"></style>
<style lang="less">

</style>
