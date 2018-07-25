<template>
  <div class="g-tabbar">
    <router-link to="/home" class="g-tabbar-item">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/category" class="g-tabbar-item">
      <i class="iconfont icon-category"></i>
      <span>分类页</span>
    </router-link>
    <router-link to="/cart" class="g-tabbar-item">
      <i class="iconfont icon-cart"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/personal" class="g-tabbar-item">
      <i class="iconfont icon-home"></i>
      <span>个人中心</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'TabBar'
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~common/scss/_variables.scss";
  @import "~common/scss/_mixins.scss";

  .g-tabbar {
    display: flex;
    width: 100%;
    height: $tabbar-height;
    background: #fff;
    &-item {
      flex: 1;
      @include flex-center(column);
      .iconfont {
        margin-bottom: 4px;
        font-size: $icon-font-size
      }
    }
  }
</style>
