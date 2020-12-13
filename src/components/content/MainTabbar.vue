<template>
  <Tabbar>
    <TabbarItem v-for="item in tabBarList" :key="item.path" :path="item.path">
      <img class="icon" :src="item.iconPath" slot="item-icon">
      <img class="icon" :src="item.iconActivePath" slot="item-icon-active">
      <p class="label" slot="item-label">{{item.name}}</p>
    </TabbarItem>
  </Tabbar>
</template>

<script>
import Tabbar from '../common/tabbar/Tabbar'
import TabbarItem from '../common/tabbar/TabbarItem'
export default {
  name: 'tabbarIndex',
  props: {
    tabBarList: {
      type: Array,
      require: true
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
