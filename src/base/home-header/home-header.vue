<template>
  <nav-bar class="header" v-show="visible">
    <i class="iconfont icon-scan" slot="left"></i>
    <div slot="center">
      <input type="text">
    </div>
    <i class="iconfont icon-msg" slot="right"></i>
  </nav-bar>
</template>

<script type="text/ecmascript-6">
  import NavBar from 'base/nav-bar/nav-bar'

  export default {
    name: 'HomeHeader',
    data() {
      return {
        visible: false
      }
    },
    methods: {
      show() {
        this.visible = true
      },
      hide() {
        this.visible = false
      }
    },
    components: {
      NavBar
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~common/scss/_variables.scss";

  .header {
    background-color: transparent;
    transition: 0.3s;
    &.header-transition {
      background-color: $header-bgc-translucent;
    }
    .iconfont {
      color: $icon-color-default;
      font-size: 24px
    }
  }
</style>
