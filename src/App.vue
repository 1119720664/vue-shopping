<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <router-view></router-view>
    </div>
    <div class="g-footer-container">
      <tab-bar></tab-bar>
    </div>
  </div>
</template>

<script>
  import TabBar from 'base/tab-bar/tab-bar'

  export default {
    name: 'App',
    components: {
      TabBar
    }
  }
</script>

<style lang="scss">
  @import "~common/scss/_mixins.scss";

  .router-link-active {
    color: red
  }
</style>
