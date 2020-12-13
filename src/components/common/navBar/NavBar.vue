<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {}
  }
}
</script>

<style lang="less">
  .nav-bar{
    display: flex;
    height: 0.88rem;
    line-height: 0.88rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    .left,
    .right{
      width: 1.2rem;
    }
    .center{
      flex: 1;
      text-align: center;
      font-size: 0.3rem;
    }
  }
</style>
