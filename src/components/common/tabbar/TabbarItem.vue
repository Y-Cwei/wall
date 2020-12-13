<template>
  <div class="tabbar-item" @click="tabItemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="labelStyle">
      <slot name="item-label"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    path: {
      type: String,
      required: true
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {}
  },
  methods: {
    tabItemClick () {
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive () {
      return this.$route.path === this.path
    },
    labelStyle () {
      return this.$route.path === this.path ? { color: this.activeColor } : {}
    }
  }
}
</script>

<style lang="less">
  .TabbarItem{

  }
</style>
