<template>
  <div class="homeIndex">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <MySwiper :swiperLists="swiperLists" />
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import MySwiper from 'components/common/swiper/Swiper'
import {
  getSwiper
} from 'network/home'
export default {
  name: 'homeIndex',
  data () {
    return {
      swiperLists: []
    }
  },
  created () {
    this.getSwiperData()
  },
  methods: {
    getSwiperData () {
      getSwiper().then(res => {
        if (res.result.count !== 0) {
          this.swiperLists = res.result.swiperLists
        }
      })
    }
  },
  components: {
    NavBar,
    MySwiper
  }
}
</script>

<style lang="less">
  .homeIndex{
    .home-nav{
      background-color: var(--color-tint);
      color: #fff;
    }
  }
</style>
