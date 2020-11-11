<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.tabbar{
  display: flex;
  font-size: 0.24rem;
  background-color: #f0f0f0;
  height: 0.98rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  .tabbar-item{
    flex: 1;
    text-align: center;
    padding-top: 0.08rem;
    .icon{
      display: block;
      max-height: 0.48rem;
      margin: 0 auto 0.04rem;
    }
  }
}
</style>
