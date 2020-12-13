<template>
  <div class="Swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item @click="swiperDetail(item)" v-for="(item, index) in swiperLists" :key="index">
        <img :src="item.image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    swiperLists: {
      type: Array,
      required: true
    }
  },
  methods: {
    swiperDetail (item) {
      console.log(item)
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
  .Swiper{
    height: 2.64rem;
    background-color: #ececec;
    .my-swipe{
      height: 2.6rem;
      .van-swipe-item{
        overflow: hidden;
        font-size: 0;
        img{
          display: block;
          height: 100%;
        }
      }
    }
  }
</style>
