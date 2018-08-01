<template>
  <div class="home">
    <header class="g-header-container">
      <home-header></home-header>
    </header>
    <Scroll>
      <home-slider :sliders="sliders"></home-slider>
      <nav-item></nav-item>
    </Scroll>
    <div class="backTop"></div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import HomeHeader from 'base/home-header/home-header'
  import HomeSlider from 'components/home-slider/home-slider'
  import NavItem from 'base/nav/nav'
  import Scroll from 'base/scroll/scroll'
  import { getHomeSlider } from 'api/home'

  export default {
    name: 'Home',
    created() {
      this._getHomeSlider()
    },
    data() {
      return {
        sliders: []
      }
    },
    methods: {
      _getHomeSlider() {
        getHomeSlider().then(res => {
          this.sliders = res
        })
      }
    },
    components: {
      HomeHeader,
      HomeSlider,
      Scroll,
      NavItem
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~common/scss/_variables.scss";

  .home {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme
  }
</style>
