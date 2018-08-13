<template>
  <transition name="search">
    <div class="search">
      <header class="g-header-container">
        <search-header></search-header>
      </header>
      <div class="g-content-container">

      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import SearchHeader from 'base/search-header/search-header'
  export default {
    name: 'Search',
    components: {
      SearchHeader
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~common/scss/_mixins.scss";

  .search {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: $search-z-index;
    background: $bgc-theme;
  }

  .search-enter-active, .search-leave-active {
    transition: 0.3s;
  }

  .search-enter, .search-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>
