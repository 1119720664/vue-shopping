<template>
  <nav-bar class="header">
    <div slot="center">搜索框</div>
    <i class="iconfont icon-msg" slot="right"></i>
  </nav-bar>
</template>

<script type="text/ecmascript-6">
  import NavBar from 'base/nav-bar/nav-bar'

  export default{
    name: 'Category-Header',
    components: {
      NavBar
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
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
