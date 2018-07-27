<template>
  <nav-bar class="header">
    <i class="iconfont icon-scan" slot="left"></i>
    <div slot="center"></div>
    <i class="iconfont icon-msg" slot="right"></i>
  </nav-bar>
</template>

<script type="text/ecmascript-6">
  import NavBar from 'base/nav-bar/nav-bar'
  export default {
    name: 'HomeHeader',
    components: {
      NavBar
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~common/scss//_variables.scss";

  .header {
    background-color: transparent;
    .iconfont {
      color: $icon-color-default;
      font-size: 24px
    }
  }
</style>
