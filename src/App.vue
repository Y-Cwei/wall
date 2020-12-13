<template>
  <div id="app">
    <router-view></router-view>
    <MainTabbar :tabBarList="tabBarList"></MainTabbar>
  </div>
</template>
<script>
import MainTabbar from 'components/content/MainTabbar.vue'
import {
  getTabBar
} from 'network/tabBar.js'
export default {
  name: 'App',
  data () {
    return {
      tabBarList: []
    }
  },
  created () {
    this.getTabBarData()
  },
  methods: {
    getTabBarData () {
      getTabBar().then(res => {
        if (res.code === 200) {
          this.tabBarList = res.result
        }
      })
    }
  },
  components: {
    MainTabbar
  }
}
</script>
<style src="./assets/css/normalize.css"></style>
<style src="./assets/css/base.css"></style>
<style lang="less">

</style>
