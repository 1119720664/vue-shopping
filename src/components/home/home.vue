<template>
  <div class="home">
    <header class="g-header-container">
      <home-header></home-header>
    </header>
    <Scroll :data="recommends" pullDown @pull-down="ScrollRefresh" pullUp @pull-up="pullUpMore">
      <home-slider :sliders="sliders"></home-slider>
      <nav-item></nav-item>
      <recommend :recommends="recommends"></recommend>
    </Scroll>
    <div class="backTop"></div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import HomeHeader from 'base/home-header/home-header'
  import HomeSlider from 'components/home-slider/home-slider'
  import NavItem from 'base/nav/nav'
  import Recommend from 'base/recommend/recommend'
  import Scroll from 'base/scroll/scroll'
  import { getHomeSlider, getHomeRecommend } from 'api/home'

  export default {
    name: 'Home',
    created() {
      this._getHomeSlider()
      this._getHomeRecommend()
    },
    data() {
      return {
        sliders: [],
        curPage: 1,
        totalPage: 1,
        recommends: []
      }
    },
    methods: {
      _getHomeSlider() {
        return getHomeSlider().then(res => {
          this.sliders = res
        })
      },
      _getHomeRecommend() {
        if (this.curPage > this.totalPages) {
          return
        }
        return getHomeRecommend(this.curPage).then(res => {
          if (res) {
            this.curPage++
            this.totalPage = res.totalPage
            this.recommends = this.recommends.concat(res.itemList)
          }
        })
      },
      ScrollRefresh(end) {
        this._getHomeSlider().then(() => {
          end()
        })
      },
      pullUpMore(end) {
        this._getHomeRecommend().then(() => {
          end()
        })
      }
    },
    components: {
      HomeHeader,
      HomeSlider,
      Scroll,
      NavItem,
      Recommend
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
