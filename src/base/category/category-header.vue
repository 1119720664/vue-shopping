<template>
  <nav-bar class="header">
    <i class="iconfont icon-scan" slot="left"></i>
    <search-box slot="center" fake placeholder="开学季有礼,好货五折起" @query="getQuery" @click.native="gotoSearch"></search-box>
    <i class="iconfont icon-msg" slot="right"></i>
  </nav-bar>
</template>

<script type="text/ecmascript-6">
  import NavBar from 'base/nav-bar/nav-bar'
  import SearchBox from 'base/search-box/search-box'

  export default{
    name: 'Category-Header',
    methods: {
      getQuery(query) {
        console.log(query)
      },
      gotoSearch() {
        this.$router.push('/search')
      }
    },
    components: {
      NavBar,
      SearchBox
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~common/scss/_variables.scss";

  .header {
    &.mine-navbar {
      background-color: $header-bgc-translucent
    }
    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size
    }
  }
</style>
