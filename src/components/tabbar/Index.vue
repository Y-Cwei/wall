<template>
  <Tabbar>
    <TabbarItem :path="'/home'">
      <img class="icon" src="~img/tabbar/home.svg" slot="item-icon">
      <img class="icon" src="~img/tabbar/home_active.svg" slot="item-icon-active">
      <p class="label" slot="item-label">首页</p>
    </TabbarItem>
    <TabbarItem :path="'/category'">
      <img class="icon" src="~img/tabbar/category.svg" slot="item-icon">
      <img class="icon" src="~img/tabbar/category_active.svg" slot="item-icon-active">
      <p class="label" slot="item-label">分类</p>
    </TabbarItem>
    <TabbarItem :path="'/shopcart'">
      <img class="icon" src="~img/tabbar/shopcart.svg" slot="item-icon">
      <img class="icon" src="~img/tabbar/shopcart_active.svg" slot="item-icon-active">
      <p class="label" slot="item-label">购物车</p>
    </TabbarItem>
    <TabbarItem :path="'/profile'">
      <img class="icon" src="~img/tabbar/profile.svg" slot="item-icon">
      <img class="icon" src="~img/tabbar/profile_active.svg" slot="item-icon-active">
      <p class="label" slot="item-label">我的</p>
    </TabbarItem>
  </Tabbar>
</template>

<script>
import Tabbar from './Tabbar'
import TabbarItem from './TabbarItem'
export default {
  name: 'tabbarIndex',
  data () {
    return {}
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="less">
.tabbarIndex{}
</style>
