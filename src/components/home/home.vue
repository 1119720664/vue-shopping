<template>
  <div class="home">
    <header class="g-header-container">
      <home-header :class="{'header-transition':isHeaderTransition}" ref="header"></home-header>
    </header>
    <Scroll :data="recommends" pullDown @pull-down="ScrollRefresh" pullUp @pull-up="pullUpMore" @scroll-end="scrollEnd"
            ref="scroll" @scroll="scroll">
      <home-slider :sliders="sliders"></home-slider>
      <nav-item></nav-item>
      <recommend :recommends="recommends"></recommend>
    </Scroll>
    <div class="g-backtop-container">
      <back-top :visible="isBacktopVisible" @backTop="backTop"></back-top>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import HomeHeader from 'base/home-header/home-header'
  import HomeSlider from 'components/home-slider/home-slider'
  import NavItem from 'base/nav/nav'
  import Recommend from 'base/recommend/recommend'
  import Scroll from 'base/scroll/scroll'
  import BackTop from 'base/back-top/back-top'
  import { getHomeSlider, getHomeRecommend } from 'api/home'

  export default {
    name: 'Home',
    created() {
      this._getHomeSlider()
      this._getHomeRecommend()
      this.HEADER_HEIGHT = 100
    },
    data() {
      return {
        sliders: [],
        curPage: 1,
        totalPage: 1,
        recommends: [],
        isBacktopVisible: false,
        isHeaderTransition: false
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
      },
      scrollEnd(translate, scroll) {
        this.isBacktopVisible = translate < 0 && -translate > scroll.height
        this.changeHeaderStateStatus(translate)
      },
      backTop() {
        this.$refs.scroll.scrollToTop(300)
      },
      changeHeaderStateStatus(translate) {
        if (translate >= -30) {
          this.$refs.header.hide()
          return
        }
        this.$refs.header.show()
        this.isHeaderTransition = -translate > this.HEADER_HEIGHT
      },
      scroll(translate) {
        this.changeHeaderStateStatus(translate)
      }
    },
    components: {
      HomeHeader,
      HomeSlider,
      Scroll,
      NavItem,
      Recommend,
      BackTop
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
