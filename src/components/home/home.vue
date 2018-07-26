<template>
  <div class="home">
    <header class="g-header-container">
      <home-header></home-header>
    </header>
    <div></div>
    <div class="backTop"></div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import HomeHeader from 'base/home-header/home-header'
  export default {
    name: 'Home',
    components: {
      HomeHeader
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
